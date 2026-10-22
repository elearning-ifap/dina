/* DINA — moteur générique du lecteur (CAN-TECH-01 §6 et §7).
   Affiche les écrans décrits dans window.DINA_DATA (généré par build.py).
   Ce fichier ne contient aucun texte pédagogique : uniquement des libellés d'interface. */
(function () {
  "use strict";

  var D = window.DINA_DATA;
  if (!D) { document.getElementById("erreur-donnees").hidden = false; document.getElementById("player").hidden = true; return; }

  var SCORM = window.DINA_SCORM;
  var M = D.module, E = D.ecrans, F = D.fiches;
  var SECTIONS = M.sections;
  var CLE = "dina-" + (M.code || M.id).toLowerCase() + "-v02";

  var VERDICTS = {
    adapte:   { libelle: "Conduite adaptée",   icone: "i-check-cercle" },
    partiel:  { libelle: "En partie adaptée",  icone: "i-moitie" },
    risque:   { libelle: "Conduite risquée",   icone: "i-attention" },
    inadapte: { libelle: "Conduite inadaptée", icone: "i-croix" }
  };
  var CONDUITES_ICONES = { agir: "i-agir", informer: "i-informer", valider: "i-valider", alerter: "i-alerter" };

  /* ---------- Raccourcis DOM ---------- */
  function $(id) { return document.getElementById(id); }
  var player = $("player"), zone = $("ecran"), btnP = $("btn-principal"), btnR = $("btn-retour"), compteur = $("compteur");

  /* ---------- Utilitaires ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function ic(id, cls) { return '<svg class="icone' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="#' + id + '"/></svg>'; }
  function inline(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>"); }
  /* Markdown simple : paragraphes, listes à puces, listes numérotées, gras, italique */
  function md(txt) {
    if (!txt) return "";
    var lignes = String(txt).replace(/\s+$/, "").split("\n"), html = "", liste = null;
    function fermer() { if (liste) { html += "</" + liste + ">"; liste = null; } }
    lignes.forEach(function (l) {
      var m;
      if ((m = l.match(/^\s*[-•]\s+(.*)$/))) { if (liste !== "ul") { fermer(); html += "<ul>"; liste = "ul"; } html += "<li>" + inline(m[1]) + "</li>"; }
      else if ((m = l.match(/^\s*\d+\.\s+(.*)$/))) { if (liste !== "ol") { fermer(); html += "<ol>"; liste = "ol"; } html += "<li>" + inline(m[1]) + "</li>"; }
      else if (!l.trim()) { fermer(); }
      else { fermer(); html += "<p>" + inline(l) + "</p>"; }
    });
    fermer();
    return html;
  }
  function badge(v) { var V = VERDICTS[v]; return V ? '<span class="verdict verdict--' + v + '">' + ic(V.icone) + V.libelle + "</span>" : ""; }
  function melanger(arr, interdit) {
    var a = arr.slice(), essais = 0;
    do {
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      essais++;
    } while (interdit && a.join() === interdit.join() && essais < 10);
    return a;
  }
  function egal(a, b) { return a.length === b.length && a.every(function (x, i) { return x === b[i]; }); }
  function memeEnsemble(a, b) { return a.length === b.length && a.every(function (x) { return b.indexOf(x) >= 0; }); }

  /* ---------- Illustrations : ILL-xx.jpg, sinon .png, sinon emplacement ---------- */
  function illustration(code, cls) {
    var info = D.illustrations[code] || {};
    return '<div class="illu ' + (cls || "") + '" data-code="' + esc(code) + '">' +
      '<img src="assets/img/' + esc(code) + '.jpg" alt="' + esc(info.alt) + '" data-essai="jpg">' +
      '<div class="illu-vide" hidden>' + ic("i-image") + "<span><strong>" + esc(code) + "</strong> — image à venir</span><small>" + esc(info.alt) + "</small></div></div>";
  }
  function brancherImages(racine) {
    racine.querySelectorAll(".illu img").forEach(function (img) {
      img.addEventListener("error", function () {
        if (img.dataset.essai === "jpg") { img.dataset.essai = "png"; img.src = img.src.replace(/\.jpg$/, ".png"); }
        else { img.hidden = true; img.parentNode.querySelector(".illu-vide").hidden = false; img.parentNode.classList.add("illu--vide"); }
      });
    });
  }
  function role(nom) { return (M.personnages && M.personnages[nom]) ? '<span>' + esc(M.personnages[nom]) + "</span>" : ""; }
  function slug(nom) { return String(nom || "").split(" ")[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9-]/g, ""); }
  /* Portrait du personnage (CAN-UX-01 §11, relevé du 07-10) : assets/img/portraits/<prénom>.jpg ; initiale si absent */
  function avatar(nom, cls) {
    if (!nom) return "";
    var s = slug(nom);
    return '<span class="avatar avatar--' + esc(s) + (cls ? " " + cls : "") + '" aria-hidden="true"><img src="assets/img/portraits/' + esc(s) + '.jpg" alt="" onerror="this.remove()"><span class="avatar-init">' + esc(nom.charAt(0)) + "</span></span>";
  }
  /* Canal du message : comment l'information arrive à Noa */
  var CANAUX = {
    oral:      { libelle: "Passe au bureau de Noa", icone: "i-oral" },
    reunion:   { libelle: "En réunion", icone: "i-oral" },
    sms:       { libelle: "Message sur le téléphone", icone: "i-telephone" },
    appel:     { libelle: "Appel téléphonique", icone: "i-telephone" },
    courriel:  { libelle: "Courriel", icone: "i-courriel" },
    messagerie:{ libelle: "Messagerie instantanée", icone: "i-informer" },
    note:      { libelle: "Note écrite", icone: "i-fichier" }
  };
  function canal(e) {
    var C = CANAUX[e.canal]; if (!C) return "";
    return '<span class="canal canal--' + esc(e.canal) + '">' + ic(C.icone) + esc(e.canal_libelle || C.libelle) + "</span>";
  }
  function libelleSection(s) { return s ? (s.etiquette || s.libelle) : ""; }
  function libelleEtape(e) { return libelleSection(sectionDe(e.id)) || e.etape; }

  /* ---------- Constellation du parcours (idée du logo : Noa relie les points au fil des étapes) ---------- */
  var TEINTES = ["var(--marque-sarcelle)", "var(--marque-bleu)", "var(--marque-violet)", "var(--marque-corail)", "var(--vert)", "var(--marque-orange)"];
  /* Même teinte, assombrie pour les pictogrammes sur fond clair (CAN-VIS-01 § 5 : jamais de couleur IFAP pure en petit sur blanc) */
  var TEINTES_FONCEES = ["var(--bleu)", "var(--bleu-progression)", "var(--violet)", "var(--corail)", "var(--vert)", "var(--jaune-fonce)"];
  /* Animations légères (D54) : coupées si le poste demande moins de mouvement */
  var MOUVEMENT = !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  /* ---------- Chemin de Noa (D55) : le parcours du module tracé sur une carte à courbes de niveau ---------- */
  /* Relief propre à chaque module (graine tirée de son code) : mêmes courbes à chaque affichage */
  function graine(txt) { var h = 7; String(txt).split("").forEach(function (c) { h = (h * 31 + c.charCodeAt(0)) % 9973; }); return h; }
  function courbe(points) {
    /* Catmull-Rom fermée → courbes de Bézier : un contour lisse */
    var n = points.length, d = "M" + points[0][0].toFixed(1) + " " + points[0][1].toFixed(1);
    for (var i = 0; i < n; i++) {
      var p0 = points[(i - 1 + n) % n], p1 = points[i], p2 = points[(i + 1) % n], p3 = points[(i + 2) % n];
      d += " C" + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + " " + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) + " " +
        (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + " " + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) + " " + p2[0].toFixed(1) + " " + p2[1].toFixed(1);
    }
    return d + "Z";
  }
  function relief(W, H) {
    var g = graine(M.code || M.id), html = "";
    var sommets = [[W * (.12 + (g % 7) / 60), H * .95], [W * (.55 + (g % 5) / 50), H * .08], [W * .98, H * (.7 + (g % 3) / 20)]];
    sommets.forEach(function (c, si) {
      var niveaux = 7 - si;
      for (var k = 1; k <= niveaux; k++) {
        var R = 34 * k, pts = [], ph = g * .37 + si * 1.7 + k * .21;
        for (var a = 0; a < 40; a++) {
          var t = a / 40 * Math.PI * 2, r = R * (1 + .16 * Math.sin(3 * t + ph) + .08 * Math.sin(5 * t - ph * 1.3) + .05 * Math.cos(2 * t + k));
          pts.push([c[0] + r * Math.cos(t) * 1.6, c[1] + r * Math.sin(t)]);
        }
        html += '<path d="' + courbe(pts) + '" class="chm-courbe' + (k % 4 === 0 ? " chm-courbe--maitresse" : "") + '"/>';
      }
    });
    return '<g class="chm-relief">' + html + "</g>";
  }
  function chemin(opts) {
    opts = opts || {};
    var n = SECTIONS.length, W = 1000, H = opts.compacte ? 120 : 170, marge = n < 5 ? 180 : 80;
    var pts = SECTIONS.map(function (s, i) {
      var x = n === 1 ? W / 2 : marge + i * (W - 2 * marge) / (n - 1);
      var y = H * (opts.compacte ? .40 : .38) + Math.sin(i * 1.9 + .6) * H * .17;
      return { x: x, y: y, s: s, i: i, fait: etat.faites.indexOf(s.id) >= 0 };
    });
    var cours = opts.courante != null ? opts.courante : -1;
    if (cours < 0) for (var k = 0; k < n; k++) if (!pts[k].fait && disponible(k)) { cours = k; break; }
    /* tronçons : un sentier qui serpente entre deux repères */
    var troncons = pts.slice(1).map(function (p, i) {
      var a = pts[i], fait = a.fait && (p.fait || p.i === cours), mx = (a.x + p.x) / 2, my = (a.y + p.y) / 2 + (i % 2 ? -1 : 1) * H * .16;
      var d = "M" + a.x + " " + a.y.toFixed(1) + " Q" + mx + " " + my.toFixed(1) + " " + p.x + " " + p.y.toFixed(1);
      var neuf = fait && (opts.nouveau === p.i || opts.nouveau === a.i);
      return fait
        ? '<path d="' + d + '" class="chm-sentier-bord' + (neuf ? " chm-neuf" : "") + '" pathLength="1"/><path d="' + d + '" class="chm-sentier' + (neuf ? " chm-neuf" : "") + '" pathLength="1"/>'
        : '<path d="' + d + '" class="chm-piste"/>';
    }).join("");
    var reperes = pts.map(function (p) {
      var etatC = p.fait ? "fait" : (p.i === cours ? "cours" : "attente");
      return '<g transform="translate(' + p.x + " " + p.y.toFixed(1) + ')"><g class="chm-repere chm-repere--' + etatC + (opts.nouveau === p.i ? " chm-repere--neuf" : "") + '" style="--teinte:' + TEINTES_FONCEES[p.i % TEINTES_FONCEES.length] + ';--i:' + p.i + '">' +
        (etatC === "cours" ? '<circle r="17" class="chm-halo"/>' : "") +
        '<circle r="' + (etatC === "attente" ? 7 : 11) + '" class="chm-point"/>' +
        (etatC === "fait" ? '<path d="M-4.5 0.5 L-1.2 3.8 L5 -3" class="chm-coche"/>' : "") +
        '<text y="' + (opts.compacte ? 36 : 40) + '" class="chm-lib">' + esc(libelleSection(p.s)) + "</text></g></g>";
    }).join("");
    var faites = pts.filter(function (p) { return p.fait; }).length;
    return '<figure class="chemin' + (opts.compacte ? " chemin--compacte" : "") + (n > 4 ? " chemin--long" : "") + '" role="img" aria-label="' + esc("Parcours du module : " + faites + " étape" + (faites > 1 ? "s" : "") + " terminée" + (faites > 1 ? "s" : "") + " sur " + n) + '">' +
      '<svg viewBox="0 0 ' + W + " " + H + '" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' + relief(W, H) + troncons + reperes + "</svg></figure>";
  }

  /* ---------- État ---------- */
  var etat = completer(charger() || nouvelEtat());
  function nouvelEtat() { return { ecran: "MENU", faites: [], historique: [], eval: { tentative: 1, resultats: {}, statut: null }, presentation: false, reponses: {}, carnet: [], auto: {} }; }
  function completer(x) { x.reponses = x.reponses || {}; x.carnet = x.carnet || []; x.auto = x.auto || {}; x.animPause = !!x.animPause; return x; }

  /* ---------- Réponses conservées (retour arrière sans tout refaire) ---------- */
  function memoriser(id, rep) { etat.reponses[id] = rep; sauver(); }
  function reponse(id) { return etat.reponses[id]; }
  function oublier(id) { delete etat.reponses[id]; sauver(); }
  function refaire(e, rendu) {
    var fb = $("feedback");
    if (!fb || $("refaire")) return;
    fb.insertAdjacentHTML("afterend", '<p class="refaire"><button type="button" class="lien" id="refaire">' + ic("i-recommencer") + " Refaire cette activité</button></p>");
    $("refaire").addEventListener("click", function () { oublier(e.id); zone.innerHTML = ""; rendu(e); brancherImages(zone); });
  }

  /* ---------- Carnet de Noa (D37) : documents, apports et fiches rencontrés ---------- */
  function ajouterCarnet(type, id) {
    if (etat.carnet.some(function (c) { return c.type === type && c.id === id; })) return;
    etat.carnet.push({ type: type, id: id }); sauver(); majCarnet();
  }
  function charger() { try { var s = localStorage.getItem(CLE); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
  function sauver() { try { localStorage.setItem(CLE, JSON.stringify(etat)); } catch (e) { /* stockage indisponible : l'état reste en mémoire */ } }

  /* ---------- Sections : ordre des écrans par traversée des « suite » ---------- */
  var ORDRE = {};
  SECTIONS.forEach(function (s) {
    var liste = [], id = s.debut, garde = 0;
    while (id && E[id] && liste.indexOf(id) < 0 && garde++ < 200) {
      liste.push(id);
      if (E[id].retentative && liste.indexOf(E[id].retentative) < 0) {
        /* variante B de l'évaluation : on l'ajoute après le bilan pour le sommaire de présentation */
        var r = E[id].retentative, g = 0;
        while (r && E[r] && r !== id && g++ < 20) { if (liste.indexOf(r) < 0) liste.push(r); r = E[r].suite; }
      }
      id = E[id].suite;
      if (id && E[id] && E[id].etape !== s.libelle) break;
    }
    ORDRE[s.id] = liste;
  });
  function sectionDe(id) { var e = E[id]; if (!e) return null; for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].libelle === e.etape) return SECTIONS[i]; return null; }
  function disponible(i) { return etat.presentation || i === 0 || etat.faites.indexOf(SECTIONS[i - 1].id) >= 0 || etat.faites.indexOf(SECTIONS[i].id) >= 0; }

  /* « Module M2 », mais « Prologue » tout court */
  function libModule() { return /^M\d/.test(M.code || "") ? "Module " + M.code : (M.code || M.id); }

  /* ---------- Bandeau et fil ---------- */
  $("ctx-module").textContent = (M.code || M.id) + " · " + M.titre;
  function majBandeau(sec) {
    $("ctx-episode").textContent = sec ? libelleSection(sec) : "Sommaire";
    $("ctx-episode").title = sec && sec.titre ? sec.titre : "";
    var idx = sec ? SECTIONS.indexOf(sec) : -1;
    $("fil").innerHTML = SECTIONS.map(function (s, i) {
      var fait = etat.faites.indexOf(s.id) >= 0, cours = i === idx;
      var cls = cours ? "encours" : (fait ? "fait" : "");
      var lib = libelleSection(s) + " : " + (cours ? "en cours" : fait ? "terminé" : "à venir");
      return '<li class="' + cls + '"' + (cours ? ' aria-current="step"' : "") + ' aria-label="' + esc(lib) + '"><span class="point">' + (fait && !cours ? ic("i-check") : "") + '</span><span class="libelle">' + esc(libelleSection(s)) + "</span></li>";
    }).join("");
  }

  /* ---------- Bouton principal ---------- */
  var actionPrincipale = null;
  function principal(libelle, action, opts) {
    opts = opts || {};
    btnP.hidden = !libelle;
    btnP.innerHTML = esc(libelle || "") + " " + ic(opts.icone || "i-droite");
    btnP.disabled = !!opts.desactive;
    actionPrincipale = action;
  }
  btnP.addEventListener("click", function () { if (actionPrincipale && !btnP.disabled) actionPrincipale(); });

  /* Une étape sans écran de fin est terminée quand on passe à l'étape suivante */
  function suivant(e) {
    var ici = sectionDe(e.id), apres = E[e.suite] ? sectionDe(e.suite) : null;
    if (ici && apres && apres !== ici && etat.faites.indexOf(ici.id) < 0) etat.faites.push(ici.id);
    /* D77 : un passage sur deux commence par la série B de l'évaluation */
    if (EVAL && e.id === EVAL.debut && etat.eval.serie === "B" && EVAL.serieB) { aller(EVAL.serieB); return; }
    aller(e.suite);
  }

  /* ---------- Évaluation : séries A et B (D77) ---------- */
  var EVAL = (function () {
    var s = SECTIONS.filter(function (x) { return x.id === "eval"; })[0];
    var res = Object.keys(E).filter(function (id) { return E[id].type === "eval-resultat"; })[0];
    if (!s || !E[s.debut]) return null;
    return { debut: s.debut, serieA: E[s.debut].suite, serieB: res ? E[res].retentative : null };
  })();

  /* ---------- Navigation ---------- */
  function aller(id, sansHistorique) {
    if (id === "ACCUEIL") id = "MENU";
    if (!sansHistorique && etat.ecran && etat.ecran !== id) {
      etat.historique.push(etat.ecran);
      if (etat.historique.length > 80) etat.historique.shift();
    }
    etat.ecran = id;
    sauver();
    afficher();
  }
  btnR.addEventListener("click", function () {
    var prec = etat.historique.pop();
    if (prec) { etat.ecran = prec; sauver(); afficher(); }
  });

  function afficher() {
    var id = etat.ecran;
    if (id !== "MENU" && !E[id]) id = etat.ecran = "MENU";
    /* Positionnement (D84) : pas de sommaire, on entre directement dans le test */
    if (id === "MENU" && M.sans_menu) id = etat.ecran = SECTIONS[0].debut;
    zone.className = "ecran";
    zone.dataset.ecran = id;
    zone.innerHTML = "";
    zone.scrollTop = 0;
    if (id === "MENU") { rendreMenu(); }
    else {
      var e = E[id], sec = sectionDe(id);
      majBandeau(sec);
      var liste = sec ? ORDRE[sec.id] : [], pos = liste.indexOf(id);
      compteur.textContent = sec ? libelleSection(sec) + " · écran " + (pos + 1) + " / " + liste.length : "";
      var enEval = e.etape === "Évaluation" && e.type !== "narration";
      var precedent = etat.historique[etat.historique.length - 1];
      btnR.style.visibility = (!precedent || enEval) ? "hidden" : "visible";
      (RENDUS[e.type] || rendreLecture)(e);
      if (sec) SCORM.setProgress(sec.id + ":" + id);
    }
    brancherImages(zone);
    etager(zone);
    appliquerAnim();
    var h = zone.querySelector("h1");
    if (h) { h.setAttribute("tabindex", "-1"); }
    /* le focus va au titre (annoncé par les lecteurs d'écran, sans cadre visible) ; la zone garde son cadre pour la touche Tab */
    (h || zone).focus({ preventScroll: true });
  }

  /* Apparition échelonnée des éléments d'une liste (D54) : chaque enfant reçoit son rang dans --i */
  var LISTES_ECHELONNEES = ".sections, .dossier-jalons, .badge-lignes, .duo-col ul, .off-alineas, .cartes, .trombi, .points, .acquis, .options, .reflexes, .ressources, .orb-liste";
  function etager(racine) {
    racine.querySelectorAll(LISTES_ECHELONNEES).forEach(function (l) {
      Array.prototype.forEach.call(l.children, function (c, i) { c.style.setProperty("--i", i); });
    });
  }

  /* ---------- Dossier fil rouge (D58) : jalons atteints quand leur étape est terminée ---------- */
  function dossierSuivi(opts) {
    var D = M.dossier;
    if (!D || !D.jalons || !D.jalons.length) return "";
    opts = opts || {};
    var faits = D.jalons.filter(function (j) { return etat.faites.indexOf(j.section) >= 0; }).length;
    var jalons = D.jalons.map(function (j) {
      var fait = etat.faites.indexOf(j.section) >= 0, nouveau = opts.section && j.section === opts.section;
      var cls = nouveau ? "nouveau" : (fait ? "fait" : "avenir");
      return '<li class="dj dj--' + cls + '"' + (nouveau ? ' aria-current="step"' : "") + '>' +
        '<span class="dj-point">' + (fait || nouveau ? ic("i-check") : "") + "</span>" +
        '<span class="dj-jour">' + esc(j.jour || "") + "</span>" +
        '<span class="dj-lib">' + esc(j.libelle) + '<span class="sr-only"> — ' + (nouveau ? "étape franchie à l'instant" : (fait ? "fait" : "à venir")) + "</span></span></li>";
    }).join("");
    var titre = opts.titre || (faits === D.jalons.length ? "Le dossier en fin de semaine" : faits ? "Le dossier avance" : "Le fil rouge de la semaine");
    return '<section class="dossier' + (opts.compact ? " dossier--compact" : "") + '" aria-label="' + esc(D.titre || "Dossier") + '">' +
      '<div class="dossier-tete">' + ic("i-projet", "dossier-picto") + '<div><span class="surtitre">' + esc(titre) + "</span>" +
      "<h2>" + esc(D.titre || "Dossier") + '</h2><p class="dossier-objet">' + inline(D.objet || "") + (D.roles && !opts.compact ? " " + inline(D.roles) : "") + "</p></div>" +
      '<span class="dossier-compte">' + faits + " / " + D.jalons.length + "</span></div>" +
      '<ol class="dossier-jalons" style="--n:' + D.jalons.length + '">' + jalons + "</ol>" +
      (opts.texte ? '<p class="dossier-texte">' + inline(opts.texte) + "</p>" : "") + "</section>";
  }

  /* ---------- Sommaire du module ---------- */
  function rendreMenu() {
    majBandeau(null);
    compteur.textContent = "";
    btnR.style.visibility = "hidden";
    zone.classList.add("ecran--menu");
    var faites = etat.faites.length, prochain = null;
    var cartes = SECTIONS.map(function (s, i) {
      var fait = etat.faites.indexOf(s.id) >= 0, dispo = disponible(i);
      if (!fait && dispo && !prochain) prochain = s;
      var statut = fait ? ["fait", "i-check", "Terminé"] : (dispo ? (prochain === s ? ["encours", "i-lecture", "À faire maintenant"] : ["dispo", "i-lecture", "Disponible"]) : ["verrou", "i-cadenas", "À venir"]);
      var res = "";
      if (s.id === "eval" && etat.eval.statut) res = '<span class="resultat resultat--' + (etat.eval.statut === "reussi" ? "ok" : "ko") + '">' + (etat.eval.statut === "reussi" ? "Évaluation réussie" : "À consolider") + "</span>";
      return '<li class="carte-section carte-section--' + statut[0] + '">' +
        '<button type="button" data-section="' + i + '"' + (dispo ? "" : " disabled") + ">" +
        '<span class="cs-num">' + esc(libelleSection(s)) + "</span>" +
        '<span class="cs-titre">' + esc(s.titre || "") + "</span>" +
        '<span class="cs-pied"><span class="cs-statut">' + ic(statut[1]) + statut[2] + '</span><span class="cs-duree">' + esc(s.duree || "") + "</span></span>" + res +
        "</button></li>";
    }).join("");
    zone.innerHTML = '<div class="menu">' +
      '<div class="menu-tete"><span class="surtitre">' + esc(libModule()) + " · " + esc(M.duree || "") + "</span><h1>" + esc(M.titre) + "</h1>" + md(M.intro) +
      "</div>" + dossierSuivi({ compact: true }) + chemin() +
      '<p class="menu-legende">' + (!faites ? "Chaque étape terminée trace un bout du chemin de Noa." : faites === SECTIONS.length ? "Toutes les étapes sont faites : le chemin de Noa est tracé." : faites + " étape" + (faites > 1 ? "s" : "") + " sur " + SECTIONS.length + " : le chemin de Noa se dessine.") + "</p>" +
      '<ol class="sections">' + cartes + "</ol></div>";
    zone.querySelectorAll("[data-section]").forEach(function (b) {
      b.addEventListener("click", function () { var s = SECTIONS[+b.dataset.section]; demarrerSection(s); });
    });
    if (prochain) principal((etat.faites.length ? "Continuer : " : "Commencer : ") + libelleSection(prochain), function () { demarrerSection(prochain); }, { icone: "i-lecture" });
    else principal("", null);
  }
  function demarrerSection(s) {
    if (s.id === "eval") {
      /* D77 : l'agent repasse l'évaluation quand il le souhaite ; les séries alternent d'un passage à l'autre */
      var pa = etat.eval.passages || 0;
      etat.eval = { tentative: 1, resultats: {}, statut: etat.eval.statut, passages: pa + 1, serie: pa % 2 ? "B" : "A" };
    }
    etat.historique = [];
    aller(s.debut, true);
  }

  /* ---------- Rendus : écrans de lecture ---------- */
  function entete(e, surtitre) {
    var doublon = surtitre && e.titre && String(surtitre).toLowerCase() === String(e.titre).toLowerCase();
    return (surtitre && !doublon ? '<span class="surtitre">' + esc(surtitre) + "</span>" : "") + (e.titre ? "<h1>" + inline(e.titre) + "</h1>" : "");
  }

  function rendreScene(e) {
    if (!e.illustration || e.points) return rendreLecture(e);
    zone.classList.add("ecran--scene");
    zone.innerHTML = illustration(e.illustration, "photo") +
      '<div class="carte-texte">' + '<h1 class="surtitre">' + esc(e.titre || libelleEtape(e)) + "</h1>" + locuteur(e) + corpsMessage(e) + "</div>";
    principal("Continuer", function () { suivant(e); });
  }
  /* Qui parle (portrait + nom + fonction) et par quel canal */
  function locuteur(e) {
    if (!e.personnage) return e.canal ? '<div class="locuteur locuteur--seul">' + canal(e) + "</div>" : "";
    return '<div class="locuteur">' + avatar(e.personnage, "avatar--grand") + "<div><strong>" + esc(e.personnage) + "</strong>" + role(e.personnage) + canal(e) + "</div></div>";
  }
  function corpsMessage(e) {
    var tete = "";
    if (e.canal === "courriel" && (e.objet || e.personnage)) tete = '<div class="bulle-tete">' + (e.personnage ? "<span>De : <strong>" + esc(e.personnage) + "</strong></span>" : "") + (e.objet ? "<span>Objet : " + esc(e.objet) + "</span>" : "") + "</div>";
    return '<div class="texte' + (e.canal ? " bulle bulle--" + esc(e.canal) : "") + '">' + tete + md(e.texte) + "</div>";
  }

  function rendreLecture(e) {
    zone.classList.add("ecran--lecture");
    if (e.points) zone.classList.add("ecran--points");
    var sur = { apport: "Micro-apport", document: "Document" }[e.type] || libelleEtape(e);
    if (e.type === "apport" && e.carnet !== false) ajouterCarnet("ecran", e.id);
    var visuel = e.points || e.fiche_identite || e.colonnes || e.orbite || e.infographie;
    if (visuel) zone.classList.add("ecran--visuel");
    var html = '<div class="colonne' + (visuel ? " colonne--large" : "") + '">' + (e.points && e.illustration ? illustration(e.illustration, "illu-bandeau") : "") + entete(e, sur);
    if ((e.type === "message" || e.type === "narration") && (e.personnage || e.canal)) html += locuteur(e) + corpsMessage(e);
    else html += '<div class="texte texte--' + e.type + '">' + md(e.texte) + "</div>";
    if (e.infographie) html += infographie(e.infographie);
    if (e.points) html += points(e.points);
    if (e.fiche_identite) html += ficheIdentite(e.fiche_identite);
    if (e.texte_officiel) html += texteOfficiel(e.texte_officiel);
    if (e.colonnes) html += colonnes(e.colonnes);
    if (e.orbite) html += orbite(e.orbite);
    if (e.a_retenir) html += '<div class="a-retenir">' + ic("i-ampoule") + "<span><strong>À retenir</strong> — " + inline(e.a_retenir) + "</span></div>";
    if (e.sources) html += '<p class="sources"><strong>Sources :</strong> ' + esc(e.sources) + "</p>";
    html += "</div>";
    zone.innerHTML = html;
    principal("Continuer", function () { suivant(e); });
  }

  function rendreDocument(e) {
    zone.classList.add("ecran--lecture");
    if (e.carnet !== false) ajouterCarnet("ecran", e.id);
    zone.innerHTML = '<div class="colonne colonne--large">' + entete(e, "Document") + docHtml(e) + (e.carnet !== false ? '<p class="note-carnet">' + ic("i-carnet") + "<span>Ce document est rangé dans <strong>votre carnet</strong> : vous pouvez le relire à tout moment (bouton « Carnet » en haut).</span></p>" : "") + "</div>";
    principal("Continuer", function () { suivant(e); });
  }
  function docHtml(e) {
    var html = (e.intro ? '<p class="intro">' + inline(e.intro) + "</p>" : "");
    html += '<div class="document">' + (e.blocs || []).map(function (b) {
      return '<section class="doc-bloc"><h2>' + esc(b.titre) + "</h2>" + md(b.texte) + "</section>";
    }).join("") + "</div>";
    if (e.organigramme) {
      html += '<section class="organigramme" aria-label="Organigramme simplifié"><h2>Organigramme simplifié</h2>' + e.organigramme.map(function (niveau) {
        return '<div class="orga-niveau">' + niveau.map(function (p) {
          return '<div class="orga-case' + (p.moi ? " orga-case--moi" : "") + '"><strong>' + esc(p.nom) + "</strong><span>" + esc(p.role) + "</span>" + (p.moi ? '<em class="orga-moi">Noa</em>' : "") + "</div>";
        }).join("") + "</div>";
      }).join('<div class="orga-lien" aria-hidden="true"></div>');
      if (e.partenaires) html += '<p class="orga-partenaires">' + esc(e.partenaires) + "</p>";
      html += "</section>";
    }
    return html;
  }
  /* Badge d'identité (« carte de visite » d'une structure) */
  function ficheIdentite(f) {
    return '<div class="badge-id"><span class="badge-trou" aria-hidden="true"></span><div class="badge-tete"><span class="badge-sigle" aria-hidden="true">' + esc(f.sigle || String(f.nom).charAt(0)) + "</span><div><strong>" + esc(f.nom) + "</strong>" + (f.sous_titre ? "<span>" + esc(f.sous_titre) + "</span>" : "") + "</div></div>" +
      '<dl class="badge-lignes">' + (f.lignes || []).map(function (l) { return "<div>" + (l.icone ? ic(l.icone) : "") + "<dt>" + esc(l.libelle) + "</dt><dd>" + inline(l.valeur) + "</dd></div>"; }).join("") + "</dl>" +
      (f.pied ? '<p class="badge-pied">' + inline(f.pied) + "</p>" : "") + "</div>";
  }
  /* Extrait d'un texte officiel, avec traduction « en clair » à la demande */
  function texteOfficiel(t) {
    return '<article class="officiel"><header class="off-tete"><span class="off-source">' + esc(t.source || "") + "</span>" + (t.article ? "<h2>" + esc(t.article) + "</h2>" : "") + "</header>" +
      (t.intro ? '<p class="off-intro">' + inline(t.intro) + "</p>" : "") +
      '<ol class="off-alineas">' + (t.alineas || []).map(function (a, i) {
        var id = "off-" + i;
        return '<li><div class="off-ligne"><span class="off-num">' + (i + 1) + '°</span><p>' + inline(a.texte) + "</p>" +
          (a.clair ? '<button type="button" class="off-btn" aria-expanded="false" aria-controls="' + id + '">En clair</button>' : "") + "</div>" +
          (a.clair ? '<div class="off-clair" id="' + id + '" hidden><p>' + inline(a.clair) + "</p>" + (a.exemple ? '<p class="off-ex"><strong>Exemple :</strong> ' + inline(a.exemple) + "</p>" : "") + "</div>" : "") + "</li>";
      }).join("") + "</ol>" +
      (t.fin ? '<p class="off-fin">' + inline(t.fin) + "</p>" : "") + "</article>";
  }
  zone.addEventListener("click", function (ev) {
    var b = ev.target.closest(".off-btn"); if (!b) return;
    var d = $(b.getAttribute("aria-controls")), ouvert = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", String(!ouvert)); d.hidden = ouvert; b.textContent = ouvert ? "En clair" : "Masquer";
  });
  /* Deux colonnes contrastées (ex. inventé / réel) */
  /* Infographie (D39) : blocs illustrés côte à côte, puis un fil de questions. Tout est du texte : lisible au lecteur d'écran. */
  function infographie(g) {
    return '<figure class="infog">' + (g.titre ? '<figcaption class="infog-titre">' + inline(g.titre) + "</figcaption>" : "") +
      '<ul class="infog-blocs">' + (g.blocs || []).map(function (b, k) {
        return '<li class="infog-bloc" style="--teinte:' + TEINTES[k % TEINTES.length] + ";--teinte-fonce:" + TEINTES_FONCEES[k % TEINTES.length] + '">' +
          '<span class="infog-ico">' + ic(b.icone || "i-batiment") + "</span><h2>" + inline(b.titre) + "</h2>" +
          (b.role ? '<p class="infog-role">' + inline(b.role) + "</p>" : "") +
          (b.exemples ? '<p class="infog-ex-tete">Par exemple</p><ul class="infog-ex">' + b.exemples.map(function (x) { return "<li>" + inline(x) + "</li>"; }).join("") + "</ul>" : "") +
          (b.ref ? '<p class="infog-ref">' + esc(b.ref) + "</p>" : "") + "</li>";
      }).join("") + "</ul>" +
      (g.fil ? '<ol class="infog-fil" aria-label="' + esc(g.fil_titre || "Avant d'orienter") + '">' + g.fil.map(function (x) { return "<li>" + inline(x) + "</li>"; }).join("") + "</ol>" : "") +
      "</figure>";
  }
  function colonnes(cols) {
    return '<div class="duo">' + cols.map(function (c, k) {
      return '<section class="duo-col duo-col--' + (k === 0 ? "a" : "b") + '">' + (c.icone ? '<span class="duo-ico">' + ic(c.icone) + "</span>" : "") + "<h2>" + esc(c.titre) + "</h2><ul>" + (c.items || []).map(function (x) { return "<li>" + inline(x) + "</li>"; }).join("") + "</ul></section>";
    }).join('<span class="duo-sep" aria-hidden="true"></span>') + "</div>";
  }
  /* Étiquette sur deux lignes : « Nom : rôle » */
  function etiquetteOrbite(nom, y) {
    var p = String(nom).split(" : ");
    return '<text y="' + y + '"><tspan x="0" class="orb-nom">' + esc(p[0]) + "</tspan>" + (p[1] ? '<tspan x="0" dy="18" class="orb-role">' + esc(p.slice(1).join(" : ")) + "</tspan>" : "") + "</text>";
  }
  /* Orbite : un centre et les acteurs qui gravitent autour.
     Deux formes : « acteurs » (tout autour) ou « groupes » (deux côtés, ex. service public / acteurs privés). */
  function orbite(o) {
    var groupes = o.groupes ? o.groupes.slice(0, 2) : null;
    var W = groupes ? 1040 : 860, H = groupes ? 470 : 440, cx = W / 2, cy = groupes ? 250 : H / 2, rx = groupes ? 300 : 260, ry = 160;
    var liste = [], k = 0, noeuds = "", decor = "";
    function noeud(a, x, y, cote, g) {
      var i = k++;
      if (typeof a === "string") a = { nom: a };
      liste.push({ a: a, g: g });
      /* Rayon tracé du centre vers l'acteur, puis un point qui circule de l'acteur vers les habitants */
      var debut = (1.2 + i * .45).toFixed(2) + "s";
      var flux = MOUVEMENT ? '<circle r="3.5" class="orb-flux" opacity="0"><animateMotion dur="3.2s" begin="' + debut + '" repeatCount="indefinite" path="M' + x.toFixed(1) + " " + y.toFixed(1) + " L" + cx + " " + cy + '" keyTimes="0;1" keySplines="0.4 0 0.6 1" calcMode="spline"/>' +
        '<animate attributeName="opacity" values="0;.85;.85;0" keyTimes="0;.15;.75;1" dur="3.2s" begin="' + debut + '" repeatCount="indefinite"/></circle>' : "";
      var etiquette = cote ? etiquetteCote(a.nom, cote) : etiquetteOrbite(a.nom, y < cy - 20 ? -38 : 28);
      noeuds += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" class="orb-rayon' + (g === 1 ? " orb-rayon--b" : "") + '" pathLength="1" style="--i:' + i + '"/>' + flux +
        '<g transform="translate(' + x.toFixed(1) + " " + y.toFixed(1) + ')"><g class="orb-noeud' + (a.accent ? " orb-noeud--accent" : "") + (g === 1 ? " orb-noeud--b" : "") + '" style="--i:' + i + '">' + (a.accent ? '<circle r="11" class="orb-halo"/>' : "") + '<circle r="' + (a.accent ? 11 : 8) + '" class="orb-point"/>' + etiquette + "</g></g>";
    }
    if (groupes) {
      /* Côté gauche : de haut en bas autour de 180° ; côté droit : autour de 0°. Étiquettes vers l'extérieur. */
      groupes.forEach(function (g, gi) {
        var A = g.acteurs || [], n = A.length, ouverture = n > 1 ? Math.min(2.3, .6 * (n - 1)) : 0;
        A.forEach(function (a, i) {
          var t = gi === 0 ? Math.PI + ouverture / 2 - (n > 1 ? i * ouverture / (n - 1) : 0) : -ouverture / 2 + (n > 1 ? i * ouverture / (n - 1) : 0);
          noeud(a, cx + rx * Math.cos(t), cy + ry * Math.sin(t), gi === 0 ? "gauche" : "droite", gi);
        });
        var tx = gi === 0 ? 24 : W - 24, ancre = gi === 0 ? "start" : "end";
        decor += '<g class="orb-groupe' + (gi === 1 ? " orb-groupe--b" : "") + '"><text x="' + tx + '" y="30" text-anchor="' + ancre + '" class="orb-groupe-titre">' + esc(g.titre || "") + "</text>" +
          (g.note ? '<text x="' + tx + '" y="52" text-anchor="' + ancre + '" class="orb-groupe-note">' + esc(g.note) + "</text>" : "") + "</g>";
      });
      /* anneau en deux moitiés et séparation verticale de part et d'autre du centre */
      decor += '<path d="M' + cx + " " + (cy - ry) + " A" + rx + " " + ry + " 0 0 0 " + cx + " " + (cy + ry) + '" class="orb-anneau"/>' +
        '<path d="M' + cx + " " + (cy - ry) + " A" + rx + " " + ry + " 0 0 1 " + cx + " " + (cy + ry) + '" class="orb-anneau orb-anneau--b"/>' +
        '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (rx * .55) + '" ry="' + (ry * .55) + '" class="orb-anneau orb-anneau--int"/>' +
        '<line x1="' + cx + '" y1="70" x2="' + cx + '" y2="' + (cy - 72) + '" class="orb-separation"/><line x1="' + cx + '" y1="' + (cy + 72) + '" x2="' + cx + '" y2="' + (H - 8) + '" class="orb-separation"/>';
    } else {
      var A = o.acteurs || [], n = A.length;
      A.forEach(function (a, i) { var t = -Math.PI / 2 + i * 2 * Math.PI / n; noeud(a, cx + rx * Math.cos(t), cy + ry * Math.sin(t), null, 0); });
      decor = '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" class="orb-anneau"/><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (rx * .55) + '" ry="' + (ry * .55) + '" class="orb-anneau orb-anneau--int"/>';
    }
    /* Liste équivalente : lecteur d'écran, et téléphone (le schéma est masqué sous 720 px) */
    var html = '<ul class="orb-liste"><li class="orb-liste-centre">' + esc(o.centre || "") + "</li>", gCourant = -1;
    liste.forEach(function (l) {
      if (groupes && l.g !== gCourant) { gCourant = l.g; var G = groupes[l.g]; html += '<li class="orb-liste-groupe' + (l.g === 1 ? " orb-liste-groupe--b" : "") + '"><strong>' + esc(G.titre || "") + "</strong>" + (G.note ? " " + esc(G.note) : "") + "</li>"; }
      var p = String(l.a.nom).split(" : ");
      html += '<li' + (l.a.accent ? ' class="orb-liste-accent"' : "") + "><strong>" + esc(p[0]) + "</strong>" + (p[1] ? " " + esc(p.slice(1).join(" : ")) : "") + "</li>";
    });
    html += "</ul>";
    return '<figure class="orbite' + (groupes ? " orbite--groupes" : "") + '">' + boutonAnim() + '<svg viewBox="0 0 ' + W + " " + H + '" aria-hidden="true">' + decor + noeuds +
      '<g transform="translate(' + cx + " " + cy + ')"><g class="orb-centre"><circle r="60" class="orb-onde"/><circle r="60"/><text y="5">' + esc(o.centre || "") + "</text></g></g></svg>" + html +
      (o.legende ? "<figcaption>" + inline(o.legende) + "</figcaption>" : "") + "</figure>";
  }
  /* Étiquette à gauche ou à droite du point : « Nom : rôle » sur deux lignes */
  function etiquetteCote(nom, cote) {
    var p = String(nom).split(" : "), x = cote === "gauche" ? -18 : 18, ancre = cote === "gauche" ? "end" : "start";
    return '<text x="' + x + '" y="' + (p[1] ? -3 : 5) + '" text-anchor="' + ancre + '"><tspan x="' + x + '" class="orb-nom">' + esc(p[0]) + "</tspan>" + (p[1] ? '<tspan x="' + x + '" dy="18" class="orb-role">' + esc(p.slice(1).join(" : ")) + "</tspan>" : "") + "</text>";
  }
  /* Points à retenir présentés en cartes (écran récapitulatif, « ce que Noa retient ») */
  function points(liste) {
    return '<ul class="points">' + liste.map(function (p, n) {
      if (typeof p === "string") p = { titre: p };
      return '<li class="point-carte"><span class="point-num">' + (n + 1) + "</span><div><strong>" + inline(p.titre) + "</strong>" + (p.texte ? "<p>" + inline(p.texte) + "</p>" : "") + (p.competence ? '<span class="point-comp">' + esc(p.competence) + "</span>" : "") + "</div></li>";
    }).join("") + "</ul>";
  }

  function rendreFin(e) {
    zone.classList.add("ecran--fin");
    var sec = sectionDe(e.id);
    if (sec && etat.faites.indexOf(sec.id) < 0) { etat.faites.push(sec.id); sauver(); majBandeau(sec); }
    var dernier = e.type === "fin";
    if (dernier) { SCORM.finish(); return rendreFinModule(e); }
    var i = SECTIONS.indexOf(sec), apres = i >= 0 ? SECTIONS[i + 1] : null;
    var acquis = e.acquis ? '<h2 class="fin-sous">' + esc(e.acquis_titre || "Ce que vous avez fait") + '</h2><ul class="acquis">' + e.acquis.map(function (a) {
      if (typeof a === "string") a = { titre: a };
      return '<li class="acquis-carte">' + ic("i-check-cercle") + "<div><strong>" + inline(a.titre) + "</strong>" + (a.texte ? "<p>" + inline(a.texte) + "</p>" : "") + "</div></li>";
    }).join("") + "</ul>" : "";
    var teaser = apres ? '<div class="prochain">' + ic("i-lecture") + '<div><span class="surtitre">Et ensuite</span><strong>' + esc(libelleSection(apres)) + " — " + esc(apres.titre || "") + "</strong>" + (apres.accroche ? "<p>" + inline(apres.accroche) + "</p>" : "") + "</div></div>" : "";
    zone.innerHTML = '<div class="fin fin--large">' + chemin({ compacte: true, nouveau: i, courante: apres ? i + 1 : -1 }) + '<div class="fin-tete"><span class="pastille">' + ic("i-check") + "</span><div><span class=\"surtitre\">" + esc(libelleSection(sec)) + "</span><h1>" + esc(e.titre || "Étape terminée") + "</h1></div></div>" +
      '<div class="texte">' + md(e.texte) + "</div>" + (e.dossier ? dossierSuivi({ section: sec && sec.id, texte: e.dossier }) : "") + acquis + teaser + "</div>";
    if (apres && disponible(i + 1)) principal("Continuer : " + libelleSection(apres), function () { demarrerSection(apres); });
    else principal("Retour au sommaire", function () { etat.historique = []; aller("MENU", true); }, { icone: "i-sommaire" });
  }
  /* Écran de fin de module (D36) : félicitations, ce qui a été appris, badge si réussite, invitation à revenir */
  function rendreFinModule(e) {
    var reussi = etat.eval.statut === "reussi";
    var appris = e.points || [];
    var avecEval = e.badge !== false && Object.keys(E).some(function (id) { return E[id].type === "eval-resultat"; });
    var badge = !avecEval ? "" : reussi
      ? '<div class="badge-module badge-module--ok">' + ic("i-medaille") + "<div><strong>Badge " + esc(M.code) + " — " + esc(M.titre) + "</strong><p>" + esc(e.badge_texte || "Vous avez réussi l'évaluation : le badge du module vous est délivré.") + "</p></div></div>"
      : '<div class="badge-module">' + ic("i-medaille") + "<div><strong>Badge " + esc(M.code) + " — à obtenir</strong><p>" + esc(e.badge_attente || "Le badge est délivré quand l'évaluation est réussie. Vous pouvez la reprendre depuis le sommaire.") + "</p></div></div>";
    zone.innerHTML = '<div class="fin fin--large fin--module">' + chemin({ compacte: true, nouveau: SECTIONS.indexOf(sectionDe(e.id)) }) + '<div class="fin-tete"><span class="pastille pastille--fete">' + ic("i-medaille") + "</span><div><span class=\"surtitre\">" + esc(libModule()) + "</span><h1>" + esc(e.titre || "Module terminé") + "</h1></div></div>" +
      '<div class="texte">' + md(e.texte) + "</div>" +
      (e.dossier ? dossierSuivi({ section: (sectionDe(e.id) || {}).id, texte: e.dossier }) : "") +
      (appris.length ? '<h2 class="fin-sous">' + esc(e.points_titre || "Ce que vous avez appris") + "</h2>" + points(appris) : "") + badge +
      '<p class="revenir">' + ic("i-carnet") + "<span>" + esc(e.revenir || "Vous pouvez revenir sur ce module quand vous le souhaitez : les épisodes restent ouverts et votre carnet garde vos documents et vos fiches.") + "</span></p>" +
      (e.prochain ? '<div class="prochain">' + ic("i-lecture") + '<div><span class="surtitre">Votre prochain défi</span><strong>' + esc(e.prochain.titre) + "</strong>" + (e.prochain.texte ? "<p>" + inline(e.prochain.texte) + "</p>" : "") + "</div></div>" : "") + "</div>";
    if (M.page_suivante) principal("Continuer : " + M.page_suivante.libelle, function () { pageSuivante(); });
    else principal("Retour au sommaire", function () { etat.historique = []; aller("MENU", true); }, { icone: "i-sommaire" });
  }
  /* Enchaînement du démonstrateur (D84) : positionnement → prologue → M1 */
  function pageSuivante() { window.location.href = M.page_suivante.href; }

  /* ---------- Décision à options exclusives (avec nouvel essai) ---------- */
  function rendreChoix(e) {
    zone.classList.add("ecran--decision");
    var nom = "q-" + e.id;
    var html = '<div class="colonne">' + situation(e) +
      '<fieldset class="options" aria-labelledby="titre-q">' + e.options.map(function (o) {
        return '<label class="option" data-id="' + esc(o.id) + '"><input type="radio" name="' + nom + '" value="' + esc(o.id) + '"><span class="lettre">' + esc(o.id) + "</span><span>" + inline(o.libelle) + "</span></label>";
      }).join("") + "</fieldset>" +
      '<div class="feedback" id="feedback" hidden aria-live="polite"></div></div>';
    zone.innerHTML = html;
    var fs = zone.querySelector(".options"), fb = $("feedback");
    fs.addEventListener("change", function () { principal("Valider", valider, { icone: "i-check" }); });
    principal("Valider", valider, { icone: "i-check", desactive: true });
    function valider() {
      var choisi = fs.querySelector("input:checked"); if (!choisi) return;
      var o = e.options.filter(function (x) { return x.id === choisi.value; })[0];
      memoriser(e.id, choisi.value);
      fs.classList.add("verrouille");
      fs.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
      var lab = choisi.closest(".option"); lab.classList.add("choisie"); lab.insertAdjacentHTML("beforeend", badge(o.verdict));
      fb.className = "feedback feedback--" + o.verdict;
      fb.innerHTML = badge(o.verdict) + "<p>" + inline(o.feedback) + "</p>" +
        (o.verdict !== "adapte" ? '<button type="button" class="btn btn-secondaire btn-petit" id="reessayer">' + ic("i-recommencer") + " Réessayer</button>" : "");
      fb.hidden = false;
      var r = $("reessayer"); if (r) r.addEventListener("click", function () { oublier(e.id); rendreChoix(e); brancherImages(zone); });
      if (!restaure) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
      principal("Continuer", function () { suivant(e); });
    }
    var restaure = false, deja = reponse(e.id);
    if (deja) { var inp = fs.querySelector('input[value="' + deja + '"]'); if (inp) { restaure = true; inp.checked = true; valider(); } }
  }
  function situation(e, surtitre) {
    var qui = e.personnage || (e.type === "eval-item" ? "Noa" : null);
    var vign = e.illustration ? '<div class="vignette">' + illustration(e.illustration) + "</div>" : (qui ? '<div class="vignette vignette--avatar">' + avatar(qui, "avatar--grand") + "</div>" : "");
    var ctx = contexte(e);
    return '<div class="situation">' + vign + "<div>" + '<span class="surtitre">' + esc(surtitre || libelleEtape(e)) + "</span>" +
      '<h1 id="titre-q"' + (String(e.texte).length > 110 ? ' class="titre-long"' : "") + ">" + md(e.texte).replace(/^<p>|<\/p>$/g, "").replace(/<\/p><p>/g, "<br>") + "</h1></div></div>" +
      (e.brief ? '<div class="brief">' + ic("i-boussole") + "<div>" + md(e.brief) + "</div></div>" : "") +
      (ctx.length ? '<p class="revoir"><button type="button" class="btn-revoir" data-revoir="' + esc(e.id) + '">' + ic("i-oeil") + " Revoir la situation</button></p>" : "");
  }
  /* Écrans de récit qui précèdent une décision dans la même étape (rappel de la consigne) */
  function contexte(e) {
    var sec = sectionDe(e.id); if (!sec || e.type === "eval-item") return [];
    var liste = ORDRE[sec.id], i = liste.indexOf(e.id), res = [];
    for (var k = 0; k < i; k++) { var x = E[liste[k]]; if (x && (x.type === "narration" || x.type === "message" || x.type === "document") && !x.points) res.push(x); }
    return res;
  }
  function ouvrirContexte(id) {
    var e = E[id], ctx = contexte(e);
    ouvrirPanneau("La situation", ctx.map(function (x) {
      if (x.type === "document") return '<section class="ctx-bloc"><h3>' + esc(x.titre || "Document") + "</h3>" + docHtml(x) + "</section>";
      return '<section class="ctx-bloc">' + (x.titre ? "<h3>" + inline(x.titre) + "</h3>" : "") + locuteur(x) + corpsMessage(x) + "</section>";
    }).join(""));
    brancherImages($("panneau-corps"));
  }
  zone.addEventListener("click", function (ev) { var b = ev.target.closest("[data-revoir]"); if (b) ouvrirContexte(b.dataset.revoir); });

  /* ---------- Choix multiple ---------- */
  function rendreMultiple(e, evalMode) {
    zone.classList.add("ecran--decision");
    zone.innerHTML = '<div class="colonne">' + situation(e, evalMode ? "Évaluation" : null) +
      '<fieldset class="options options--multiple" aria-labelledby="titre-q">' + e.options.map(function (o) {
        return '<label class="option" data-id="' + esc(o.id) + '"><input type="checkbox" value="' + esc(o.id) + '"><span class="case" aria-hidden="true">' + ic("i-check") + "</span><span>" + inline(o.libelle) + "</span></label>";
      }).join("") + '</fieldset><div class="feedback" id="feedback" hidden aria-live="polite"></div></div>';
    var fs = zone.querySelector(".options");
    function lus() { return [].map.call(fs.querySelectorAll("input:checked"), function (i) { return i.value; }); }
    fs.addEventListener("change", function () { btnP.disabled = lus().length === 0; });
    principal("Valider", valider, { icone: "i-check", desactive: true });
    function valider() {
      var r = lus(), ok = memeEnsemble(r, e.attendu);
      if (evalMode) return enregistrerEval(e, ok, r);
      memoriser(e.id, r);
      fs.classList.add("verrouille");
      fs.querySelectorAll(".option").forEach(function (l) {
        var id = l.dataset.id, coche = r.indexOf(id) >= 0, attendu = e.attendu.indexOf(id) >= 0;
        l.querySelector("input").disabled = true;
        l.classList.add(attendu ? "attendu" : "non-attendu");
        if (coche) l.classList.add("choisie");
        l.insertAdjacentHTML("beforeend", '<span class="marque-rep">' + (attendu ? ic("i-check-cercle") + "À mettre" : ic("i-croix") + "À éviter") + "</span>");
      });
      var fb = $("feedback");
      fb.className = "feedback feedback--" + (ok ? "adapte" : "partiel");
      fb.innerHTML = (ok ? badge("adapte") : '<span class="verdict verdict--partiel">' + ic("i-moitie") + "À compléter</span>") + "<p>" + inline(ok ? e.feedback_ok : e.feedback_ko) + "</p>";
      fb.hidden = false;
      if (!restaure) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
      refaire(e, function (x) { rendreMultiple(x, false); });
      principal("Continuer", function () { suivant(e); });
    }
    var restaure = false, deja = !evalMode && reponse(e.id);
    if (deja) { restaure = true; deja.forEach(function (v) { var i = fs.querySelector('input[value="' + v + '"]'); if (i) i.checked = true; }); valider(); }
  }

  /* ---------- Ordre (glisser ou boutons ↑ ↓) ---------- */
  function rendreOrdre(e, evalMode) {
    zone.classList.add("ecran--decision");
    var ids = melanger(e.options.map(function (o) { return o.id; }), e.attendu);
    var lib = {}; e.options.forEach(function (o) { lib[o.id] = o.libelle; });
    zone.innerHTML = '<div class="colonne">' + situation(e, evalMode ? "Évaluation" : null) +
      '<p class="consigne">Glissez les étiquettes ou utilisez les flèches.</p><ol class="ordre" id="ordre"></ol>' +
      '<div class="feedback" id="feedback" hidden aria-live="polite"></div><p class="sr-only" id="annonce" aria-live="polite"></p></div>';
    var ol = $("ordre"), verrou = false, glisse = null;
    function dessiner(focusId, sens) {
      ol.innerHTML = ids.map(function (id, i) {
        return '<li class="ordre-item" draggable="' + !verrou + '" data-id="' + id + '"><span class="ordre-num">' + (i + 1) + '</span><span class="ordre-lib">' + inline(lib[id]) + "</span>" +
          (verrou ? "" : '<span class="ordre-btns"><button type="button" class="btn-fleche" data-sens="-1" aria-label="Monter : ' + esc(lib[id]) + '"' + (i === 0 ? " disabled" : "") + ">" + ic("i-haut") + '</button><button type="button" class="btn-fleche" data-sens="1" aria-label="Descendre : ' + esc(lib[id]) + '"' + (i === ids.length - 1 ? " disabled" : "") + ">" + ic("i-bas") + "</button></span>") + "</li>";
      }).join("");
      if (focusId) {
        var b = ol.querySelector('[data-id="' + focusId + '"] [data-sens="' + sens + '"]') || ol.querySelector('[data-id="' + focusId + '"] .btn-fleche:not([disabled])');
        if (b) b.focus();
      }
    }
    function deplacer(id, sens) {
      var i = ids.indexOf(id), j = i + sens; if (j < 0 || j >= ids.length) return;
      ids.splice(i, 1); ids.splice(j, 0, id); dessiner(id, sens);
      $("annonce").textContent = lib[id] + " : position " + (j + 1);
    }
    ol.addEventListener("click", function (ev) { var b = ev.target.closest(".btn-fleche"); if (b && !verrou) deplacer(b.closest("li").dataset.id, +b.dataset.sens); });
    ol.addEventListener("dragstart", function (ev) { var li = ev.target.closest("li"); if (!li || verrou) return; glisse = li.dataset.id; li.classList.add("glisse"); ev.dataTransfer.effectAllowed = "move"; try { ev.dataTransfer.setData("text/plain", glisse); } catch (x) {} });
    ol.addEventListener("dragend", function () { glisse = null; dessiner(); });
    ol.addEventListener("dragover", function (ev) {
      if (!glisse) return; ev.preventDefault();
      var li = ev.target.closest("li"); if (!li || li.dataset.id === glisse) return;
      var r = li.getBoundingClientRect(), apres = ev.clientY > r.top + r.height / 2;
      ids.splice(ids.indexOf(glisse), 1);
      var k = ids.indexOf(li.dataset.id) + (apres ? 1 : 0);
      ids.splice(k, 0, glisse); dessiner();
      var g = ol.querySelector('[data-id="' + glisse + '"]'); if (g) g.classList.add("glisse");
    });
    dessiner();
    principal("Valider", valider, { icone: "i-check" });
    function valider() {
      var ok = egal(ids, e.attendu);
      if (evalMode) return enregistrerEval(e, ok, ids.slice());
      memoriser(e.id, ids.slice());
      verrou = true; dessiner();
      ol.querySelectorAll("li").forEach(function (li, i) { li.classList.add(e.attendu[i] === li.dataset.id ? "bien-place" : "mal-place"); });
      var fb = $("feedback");
      fb.className = "feedback feedback--" + (ok ? "adapte" : "partiel");
      var correct = ok ? "" : '<p class="ordre-correct"><strong>Ordre attendu :</strong></p><ol class="ordre-attendu">' + e.attendu.map(function (id) { return "<li>" + inline(lib[id]) + "</li>"; }).join("") + "</ol>";
      fb.innerHTML = (ok ? badge("adapte") : '<span class="verdict verdict--partiel">' + ic("i-moitie") + "À revoir</span>") + "<p>" + inline(ok ? e.feedback_ok : e.feedback_ko) + "</p>" + correct;
      fb.hidden = false;
      if (!restaure) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
      refaire(e, function (x) { rendreOrdre(x, false); });
      principal("Continuer", function () { suivant(e); });
    }
    var restaure = false, deja = !evalMode && reponse(e.id);
    if (deja && deja.length === ids.length) { restaure = true; ids = deja.slice(); valider(); }
  }

  /* ---------- Classement : chaque élément dans une catégorie ---------- */
  function rendreClassement(e) {
    zone.classList.add("ecran--decision");
    var html = '<div class="colonne colonne--large">' + situation(e) +
      '<div class="classement">' + e.items.map(function (it, n) {
        return '<fieldset class="cl-item" data-id="' + esc(it.id) + '"><legend><span class="lettre">' + (n + 1) + "</span>" + inline(it.libelle) + "</legend>" +
          '<div class="cl-cats">' + e.categories.map(function (c) {
            return '<label class="cl-cat"><input type="radio" name="cl-' + esc(e.id) + "-" + esc(it.id) + '" value="' + esc(c.id) + '"><span>' + inline(c.libelle) + "</span></label>";
          }).join("") + '</div><div class="cl-fb" hidden></div></fieldset>';
      }).join("") + '</div><div class="feedback" id="feedback" hidden aria-live="polite"></div></div>';
    zone.innerHTML = html;
    function complet() { return e.items.every(function (it) { return zone.querySelector('.cl-item[data-id="' + it.id + '"] input:checked'); }); }
    zone.querySelector(".classement").addEventListener("change", function () { btnP.disabled = !complet(); });
    principal("Valider", valider, { icone: "i-check", desactive: true });
    function valider() {
      var bons = 0, rep = {};
      e.items.forEach(function (it) { rep[it.id] = zone.querySelector('.cl-item[data-id="' + it.id + '"] input:checked').value; });
      memoriser(e.id, rep);
      e.items.forEach(function (it) {
        var fs = zone.querySelector('.cl-item[data-id="' + it.id + '"]'), v = rep[it.id], ok = v === it.attendu;
        if (ok) bons++;
        fs.classList.add(ok ? "cl-ok" : "cl-ko");
        fs.querySelectorAll("input").forEach(function (i) { i.disabled = true; if (i.value === it.attendu) i.closest(".cl-cat").classList.add("cl-attendu"); });
        var cat = e.categories.filter(function (c) { return c.id === it.attendu; })[0];
        var f = fs.querySelector(".cl-fb");
        f.innerHTML = (ok ? '<span class="verdict verdict--adapte">' + ic("i-check-cercle") + "Bien classé</span>" : '<span class="verdict verdict--partiel">' + ic("i-moitie") + "Attendu : " + esc(cat.libelle) + "</span>") + "<p>" + inline(it.feedback) + "</p>";
        f.hidden = false;
      });
      var fb = $("feedback");
      fb.className = "feedback feedback--" + (bons === e.items.length ? "adapte" : "partiel");
      fb.innerHTML = "<p><strong>" + bons + " sur " + e.items.length + " bien classés.</strong> " + inline(e.synthese || "") + "</p>";
      fb.hidden = false;
      if (!restaure) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
      refaire(e, rendreClassement);
      principal("Continuer", function () { suivant(e); });
    }
    var restaure = false, deja = reponse(e.id);
    if (deja && e.items.every(function (it) { return deja[it.id]; })) {
      restaure = true;
      e.items.forEach(function (it) { var i = zone.querySelector('.cl-item[data-id="' + it.id + '"] input[value="' + deja[it.id] + '"]'); if (i) i.checked = true; });
      valider();
    }
  }

  /* ---------- Assemblage d'un message ---------- */
  function rendreAssemblage(e) {
    zone.classList.add("ecran--decision");
    var html = '<div class="colonne colonne--large">' + situation(e) + '<div class="assemblage">' +
      '<div class="as-parties">' + e.parties.map(function (p, n) {
        return '<fieldset class="as-partie" data-id="' + esc(p.id) + '"><legend><span class="lettre">' + (n + 1) + "</span>" + esc(p.libelle) + "</legend>" +
          p.options.map(function (o) { return '<label class="as-option"><input type="radio" name="as-' + esc(p.id) + '" value="' + esc(o.id) + '"><span>' + inline(o.texte) + "</span></label>"; }).join("") +
          '<div class="as-fb" hidden></div></fieldset>';
      }).join("") + "</div>" +
      '<aside class="apercu-mail" aria-label="Aperçu du message"><div class="am-tete">' + ic("i-courriel") + "<div><span>À : <strong>" + esc(e.destinataire) + "</strong></span><span>Objet : " + esc(e.objet) + '</span></div></div><div class="am-corps" id="apercu"></div></aside>' +
      '</div><div class="feedback" id="feedback" hidden aria-live="polite"></div></div>';
    zone.innerHTML = html;
    function choix(p) { var i = zone.querySelector('.as-partie[data-id="' + p.id + '"] input:checked'); return i ? p.options.filter(function (o) { return o.id === i.value; })[0] : null; }
    function apercu() {
      $("apercu").innerHTML = (e.salutation ? "<p>" + esc(e.salutation) + "</p>" : "") + e.parties.map(function (p) { var o = choix(p); return o ? "<p>" + inline(o.texte) + "</p>" : '<p class="am-vide">[' + esc(p.libelle) + "]</p>"; }).join("") + (e.signature ? md(e.signature) : "");
      btnP.disabled = !e.parties.every(choix);
    }
    zone.querySelector(".as-parties").addEventListener("change", apercu);
    apercu();
    principal("Valider le message", valider, { icone: "i-check", desactive: true });
    function valider() {
      var bons = 0, rep = {};
      e.parties.forEach(function (p) { rep[p.id] = choix(p).id; });
      memoriser(e.id, rep);
      e.parties.forEach(function (p) {
        var o = choix(p), fs = zone.querySelector('.as-partie[data-id="' + p.id + '"]');
        if (o.verdict === "adapte") bons++;
        fs.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
        fs.classList.add("verrouille");
        var f = fs.querySelector(".as-fb"); f.innerHTML = badge(o.verdict) + "<p>" + inline(p.feedback) + "</p>"; f.hidden = false;
      });
      var fb = $("feedback");
      fb.className = "feedback feedback--" + (bons === e.parties.length ? "adapte" : "partiel");
      fb.innerHTML = "<p><strong>" + bons + " partie" + (bons > 1 ? "s" : "") + " sur " + e.parties.length + " formulée" + (bons > 1 ? "s" : "") + " de façon adaptée.</strong> " + inline(e.synthese || "") + "</p>";
      fb.hidden = false;
      if (!restaure) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
      refaire(e, rendreAssemblage);
      principal("Continuer", function () { suivant(e); });
    }
    var restaure = false, deja = reponse(e.id);
    if (deja && e.parties.every(function (p) { return deja[p.id]; })) {
      restaure = true;
      e.parties.forEach(function (p) { var i = zone.querySelector('input[name="as-' + p.id + '"][value="' + deja[p.id] + '"]'); if (i) i.checked = true; });
      apercu(); valider();
    }
  }

  /* ---------- Simulation de messagerie (défi intégrateur) ---------- */
  function rendreMessagerie(e) {
    zone.classList.add("ecran--messagerie");
    var lu = 0, etape = "lecture", envoi = null;
    var auteurReponse = e.consequence_de || String(e.a || "").split(" ")[0];
    function nomDe(de) { de = String(de || ""); return de.indexOf("—") >= 0 ? de.split("—").pop().trim() : de.split(" ")[0]; }
    function messages() {
      var liste = e.boite.slice();
      if (envoi) {
        liste.unshift({ de: "Vous (Noa)", objet: "Envoyé : " + e.objet, heure: e.heure_envoi || "", envoye: true });
        if (envoi.reponse) liste.unshift({ de: auteurReponse, objet: e.objet, heure: e.heure_reponse || "", corps: envoi.reponse, nouveau: true });
      }
      return liste;
    }
    function boite() {
      return '<ul class="mel-liste">' + messages().map(function (m, i) {
        return '<li><button type="button" class="mel-item' + (i === lu ? " actif" : "") + (m.nouveau ? " nouveau" : "") + '" data-i="' + i + '"' + (i === lu ? ' aria-current="true"' : "") + '>' + avatar(m.envoye ? "Noa" : nomDe(m.de)) +
          '<span><strong>' + esc(m.de) + "</strong><span>" + esc(m.objet) + '</span></span><time>' + esc(m.heure) + "</time></button></li>";
      }).join("") + "</ul>";
    }
    function lecture() {
      var m = messages()[lu];
      if (m.envoye) return '<div class="mel-envoye">' + redaction() + "</div>";
      return '<article class="mel-lecture"><h2>' + esc(m.objet) + '</h2><p class="mel-meta">' + avatar(nomDe(m.de)) + "<span><strong>" + esc(m.de) + "</strong>" + (m.role ? " · " + esc(m.role) : "") + "<br>" + esc(m.heure) + "</span></p>" +
        '<div class="mel-corps">' + md(m.corps) + "</div></article>";
    }
    function redaction() {
      return '<form class="mel-redaction" onsubmit="return false"><div class="mel-champ"><span>À</span><strong>' + esc(e.a) + "</strong></div>" +
        '<fieldset class="mel-champ mel-cc"><legend>Cc</legend>' + e.copie.map(function (c) { return '<label class="chip"><input type="radio" name="cc" value="' + esc(c.id) + '"><span>' + esc(c.libelle) + "</span></label>"; }).join("") + '<div class="mel-fb" hidden></div></fieldset>' +
        '<div class="mel-champ"><span>Objet</span>' + esc(e.objet) + "</div>" +
        '<div class="mel-texte">' + (e.salutation ? "<p>" + esc(e.salutation) + "</p>" : "") + e.paragraphes.map(function (p, n) {
          return '<fieldset class="mel-para" data-id="' + esc(p.id) + '"><legend>' + (n + 1) + ". " + esc(p.libelle) + "</legend>" +
            p.options.map(function (o) { return '<label class="as-option"><input type="radio" name="mp-' + esc(p.id) + '" value="' + esc(o.id) + '"><span>' + inline(o.texte) + "</span></label>"; }).join("") +
            '<div class="mel-fb" hidden></div></fieldset>';
        }).join("") + (e.signature ? md(e.signature) : "") + "</div></form>";
    }
    function dessiner() {
      zone.innerHTML = '<div class="messagerie">' + '<h1 class="sr-only">' + esc(e.titre || (libelleEtape(e) + " — boîte de réception de Noa")) + "</h1>" + '<p class="mel-consigne">' + inline(e.texte) + '</p><div class="mel-app"><div class="mel-gauche"><div class="mel-barre">' + ic("i-courriel") + " Boîte de réception</div>" + boite() + "</div>" +
        '<div class="mel-droite">' + (etape === "redaction" ? redaction() : lecture()) + "</div></div>" + '<div class="feedback" id="feedback" hidden aria-live="polite"></div></div>';
      zone.querySelectorAll(".mel-item").forEach(function (b) { b.addEventListener("click", function () { if (etape === "redaction") return; lu = +b.dataset.i; dessiner(); }); });
      brancherImages(zone);
      if (etape === "lecture") principal("Répondre à " + String(e.a || "").split(" ")[0], function () { etape = "redaction"; dessiner(); zone.querySelector(".mel-redaction input").focus(); }, { icone: "i-courriel" });
      else if (etape === "redaction") {
        var f = zone.querySelector(".mel-redaction");
        f.addEventListener("change", function () { btnP.disabled = !complet(); });
        principal("Envoyer", envoyer, { icone: "i-envoyer", desactive: true });
      } else {
        if (zone.querySelector(".mel-envoye")) appliquer(envoi.rep, true);
        bilan();
        principal("Continuer", function () { suivant(e); });
      }
    }
    function val(nom, liste) { var i = zone.querySelector('input[name="' + nom + '"]:checked'); return i ? liste.filter(function (o) { return o.id === i.value; })[0] : null; }
    function complet() { return val("cc", e.copie) && e.paragraphes.every(function (p) { return val("mp-" + p.id, p.options); }); }
    /* Coche les réponses, verrouille et affiche le retour de chaque partie */
    function appliquer(rep, silencieux) {
      var i = zone.querySelector('input[name="cc"][value="' + rep.cc + '"]'); if (i) i.checked = true;
      e.paragraphes.forEach(function (p) { var j = zone.querySelector('input[name="mp-' + p.id + '"][value="' + rep.p[p.id] + '"]'); if (j) j.checked = true; });
      var cc = val("cc", e.copie), fcc = zone.querySelector(".mel-cc .mel-fb");
      fcc.innerHTML = badge(cc.verdict) + "<p>" + inline(cc.feedback) + "</p>"; fcc.hidden = false;
      e.paragraphes.forEach(function (p) {
        var o = val("mp-" + p.id, p.options), fs = zone.querySelector('.mel-para[data-id="' + p.id + '"]');
        fs.classList.add("verrouille");
        var f = fs.querySelector(".mel-fb"); f.innerHTML = badge(o.verdict) + "<p>" + inline(p.feedback) + "</p>"; f.hidden = false;
      });
      zone.querySelectorAll(".mel-redaction input").forEach(function (x) { x.disabled = true; });
    }
    function bilan() {
      var fb = $("feedback"), r = envoi;
      fb.className = "feedback feedback--" + (r.bons === r.total ? "adapte" : "partiel");
      var lignes = [{ libelle: "Copie", o: e.copie.filter(function (c) { return c.id === r.rep.cc; })[0] }].concat(e.paragraphes.map(function (p) {
        return { libelle: p.libelle, o: p.options.filter(function (o) { return o.id === r.rep.p[p.id]; })[0] };
      }));
      fb.innerHTML = "<p><strong>Message envoyé. " + r.bons + " élément" + (r.bons > 1 ? "s" : "") + " sur " + r.total + " adapté" + (r.bons > 1 ? "s" : "") + ".</strong></p>" +
        '<ul class="mel-bilan">' + lignes.map(function (l) { return "<li>" + badge(l.o.verdict) + " <span>" + esc(l.libelle) + "</span></li>"; }).join("") + "</ul>" +
        (r.reponse ? '<div class="mel-reponse">' + avatar(auteurReponse) + "<div><strong>" + esc(auteurReponse) + (e.heure_reponse ? " · " + esc(e.heure_reponse) : "") + "</strong>" + md(r.reponse) + "</div></div>" : "");
      fb.hidden = false;
      brancherImages(fb);
      if (!restaure) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
      refaire(e, rendreMessagerie);
    }
    function envoyer() {
      var rep = { cc: val("cc", e.copie).id, p: {} };
      e.paragraphes.forEach(function (p) { rep.p[p.id] = val("mp-" + p.id, p.options).id; });
      memoriser(e.id, rep);
      calculer(rep);
      appliquer(rep);
      bilan();
      /* la réponse arrive dans la boîte de réception */
      zone.querySelector(".mel-liste").outerHTML = boite();
      zone.querySelectorAll(".mel-item").forEach(function (b) { b.addEventListener("click", function () { etape = "envoye"; lu = +b.dataset.i; dessiner(); }); });
      brancherImages(zone);
      principal("Continuer", function () { suivant(e); });
    }
    function calculer(rep) {
      var bons = 0, total = e.paragraphes.length + 1;
      if (e.copie.filter(function (c) { return c.id === rep.cc; })[0].verdict === "adapte") bons++;
      e.paragraphes.forEach(function (p) { if (p.options.filter(function (o) { return o.id === rep.p[p.id]; })[0].verdict === "adapte") bons++; });
      /* réponse personnalisée selon les choix (consequences.adapte / consequences.partiel), sinon réponse unique */
      var C = e.consequences || {}, reponseTexte = (bons === total ? C.adapte : C.partiel) || e.consequence || "";
      envoi = { rep: rep, bons: bons, total: total, reponse: reponseTexte };
    }
    var restaure = false, deja = reponse(e.id);
    if (deja && deja.p) { restaure = true; calculer(deja); etape = "envoye"; lu = envoi.reponse ? 1 : 0; dessiner(); }
    else dessiner();
  }

  /* ---------- Outil ---------- */
  function rendreOutil(e) {
    zone.classList.add("ecran--lecture");
    var f = F[e.fiche];
    if (f) ajouterCarnet("fiche", e.fiche);
    var html = '<div class="colonne">' + '<span class="surtitre">Outil · à garder</span><h1>' + esc(e.titre) + "</h1>" +
      '<div class="outil-intro">' + ic("i-boussole") + "<div>" + md(e.texte) + "</div></div>";
    if (f && f.modele === "chemin") {
      html += '<ol class="chemin" id="chemin"></ol><div class="conduite" id="conduite" hidden aria-live="polite"></div>' +
        '<div class="alerte-permanente">' + ic("i-alerter") + "<span>" + inline(f.alerte) + "</span></div>" +
        '<div class="a-retenir">' + ic("i-ampoule") + "<span><strong>À retenir</strong> — " + inline(f.a_retenir) + "</span></div>";
    } else if (f && f.modele === "checklist") {
      html += checklistHtml(f);
    } else if (f) {
      html += '<div class="apercu-fiche">' + apercuFiche(f) + "</div>";
    }
    html += '<div class="liens-outil">' + (f && f.modele === "chemin" ? '<button type="button" class="btn btn-secondaire" id="recommencer">' + ic("i-recommencer") + " Recommencer</button>" : "") +
      '<a class="btn btn-secondaire" href="fiche.html?id=' + esc(e.fiche) + '" target="_blank" rel="noopener">' + ic("i-imprimer") + " Ouvrir la fiche à imprimer</a></div></div>";
    zone.innerHTML = html;
    if (f && f.modele === "chemin") cheminInteractif(f);
    principal("Continuer", function () { suivant(e); });
  }
  /* Check-list sans bon ni faux (D37) : chaque question dit comment vérifier et que faire si la réponse est non */
  function checklistHtml(f) {
    return '<ol class="checklist">' + f.questions.map(function (Q, i) {
      return '<li class="ck-item"><label class="ck-tete"><input type="checkbox"><span class="ck-num">' + (i + 1) + '</span><span class="ck-q">' + inline(Q.q) + "</span></label>" +
        (Q.aide ? '<p class="ck-aide">' + inline(Q.aide) + "</p>" : "") +
        (Q.verifier ? '<details class="ck-details"><summary>Comment vérifier ?</summary><ul>' + Q.verifier.map(function (v) { return "<li>" + inline(v) + "</li>"; }).join("") + "</ul></details>" : "") +
        (Q.si_non ? '<p class="ck-sinon"><strong>Si ce n\'est pas le cas :</strong> ' + inline(Q.si_non) + "</p>" : "") + "</li>";
    }).join("") + "</ol>" +
      (f.conclusion ? '<div class="conduite c-informer ck-conclusion"><span class="ico">' + ic("i-informer") + "</span><div><h2>" + esc(f.conclusion.titre) + "</h2><p>" + inline(f.conclusion.texte) + "</p></div></div>" : "") +
      (f.alerte ? '<div class="alerte-permanente">' + ic("i-alerter") + "<span>" + inline(f.alerte) + "</span></div>" : "") +
      (f.a_retenir ? '<div class="a-retenir">' + ic("i-ampoule") + "<span><strong>À retenir</strong> — " + inline(f.a_retenir) + "</span></div>" : "");
  }
  function apercuFiche(f) {
    if (f.modele === "formulaire") return "<ul>" + f.sections.map(function (s) { return "<li><strong>" + esc(s.titre) + "</strong> — " + s.champs.map(esc).join(" · ") + "</li>"; }).join("") + "</ul>";
    if (f.modele === "aide-memoire") return '<ol class="reflexes">' + f.etapes.map(function (s) { return "<li><span><strong>" + esc(s.titre.replace(/^\d+\.\s*/, "")) + "</strong> — " + inline(s.texte) + "</span></li>"; }).join("") + "</ol>" +
      '<div class="a-retenir">' + ic("i-ampoule") + "<span><strong>À retenir</strong> — " + inline(f.a_retenir) + "</span></div>";
    return "";
  }
  function cheminInteractif(f) {
    var reponses = [], chemin = $("chemin"), sortie = $("conduite");
    function issue() { for (var i = 0; i < reponses.length; i++) { var Q = f.questions[i]; if (reponses[i] === "non" && Q.non) return Q.non; if (reponses[i] === "oui" && Q.oui) return Q.oui; } return null; }
    function rendre() {
      var fin = issue(), active = fin ? -1 : reponses.length;
      chemin.innerHTML = f.questions.map(function (Q, i) {
        var et = i < reponses.length ? "repondue" : (i === active ? "active" : "attente");
        var c = '<p class="q">' + esc(Q.q) + '</p><p class="aide">' + esc(Q.aide) + "</p>";
        if (i < reponses.length) c += '<span class="reponse-donnee">' + ic("i-check") + " " + (reponses[i] === "oui" ? "Oui" : "Non") + "</span>";
        if (i === active) c += '<div class="reponses" role="group" aria-label="' + esc(Q.q) + '"><button type="button" class="btn btn-secondaire" data-r="oui">Oui</button><button type="button" class="btn btn-secondaire" data-r="non">Non</button></div>';
        return '<li class="etape-q ' + et + '"><span class="num">' + (i + 1) + "</span><div>" + c + "</div></li>";
      }).join("");
      if (fin) {
        var C = f.conduites[fin];
        sortie.className = "conduite c-" + fin;
        sortie.innerHTML = '<span class="ico">' + ic(CONDUITES_ICONES[fin]) + "</span><div><h2>" + esc(C.titre) + "</h2><p>" + esc(C.texte) + "</p></div>";
        sortie.hidden = false;
      } else sortie.hidden = true;
      var b = chemin.querySelector(".reponses .btn"); if (b && reponses.length) b.focus();
    }
    chemin.addEventListener("click", function (ev) { var b = ev.target.closest("[data-r]"); if (b) { reponses.push(b.dataset.r); rendre(); } });
    $("recommencer").addEventListener("click", function () { reponses = []; rendre(); chemin.querySelector(".btn").focus(); });
    rendre();
  }

  /* ---------- Évaluation ---------- */
  function rendreEvalItem(e) {
    if (e.mode === "ordre") return rendreOrdre(e, true);
    if (e.mode === "multiple") return rendreMultiple(e, true);
    zone.classList.add("ecran--decision");
    zone.innerHTML = '<div class="colonne">' + situation(e, "Évaluation · situation " + e.preuve.replace("E", "")) +
      '<fieldset class="options" aria-labelledby="titre-q">' + e.options.map(function (o) {
        return '<label class="option"><input type="radio" name="ev-' + esc(e.id) + '" value="' + esc(o.id) + '"><span class="lettre">' + esc(o.id) + "</span><span>" + inline(o.libelle) + "</span></label>";
      }).join("") + "</fieldset></div>";
    var fs = zone.querySelector(".options");
    fs.addEventListener("change", function () { btnP.disabled = false; });
    principal("Valider", function () {
      var v = fs.querySelector("input:checked").value, o = e.options.filter(function (x) { return x.id === v; })[0];
      enregistrerEval(e, o.verdict === "adapte", v);
    }, { icone: "i-check", desactive: true });
  }
  function enregistrerEval(e, ok, rep) {
    etat.eval.resultats[e.preuve] = { ok: ok, variante: e.variante, reponse: rep };
    sauver();
    suivant(e);
  }
  function rendreEvalResultat(e) {
    zone.classList.add("ecran--lecture");
    var R = etat.eval.resultats, preuves = ["E1", "E2", "E3"];
    var ok = preuves.every(function (p) { return R[p] && R[p].ok; });
    var tent = etat.eval.tentative || 1, peutReprendre = !ok && tent < 2 && e.retentative;
    etat.eval.statut = ok ? "reussi" : (peutReprendre ? null : "a-consolider");
    sauver();
    SCORM.setResult(ok ? "passed" : "failed", preuves.filter(function (p) { return R[p] && R[p].ok; }).length);
    var lignes = preuves.map(function (p) {
      var r = R[p], bon = r && r.ok;
      var C = !bon && e.consolider && e.consolider[p], f = C && C.fiche && F[C.fiche];
      return '<li class="preuve preuve--' + (bon ? "ok" : "ko") + '">' + ic(bon ? "i-check-cercle" : "i-moitie") + "<span><strong>" + (e.preuves && e.preuves[p] ? esc(e.preuves[p]) : p) + "</strong>" + (bon ? "Réussie" : "À consolider") +
        (C ? '<span class="consolider">' + inline(C.texte) + "</span>" : "") + "</span>" +
        (f ? '<a class="btn btn-secondaire btn-petit" href="fiche.html?id=' + esc(C.fiche) + '" target="_blank" rel="noopener">' + ic("i-fichier") + " " + esc(f.titre) + "</a>" : "") + "</li>";
    }).join("");
    var texte = ok ? e.texte_reussi : (peutReprendre ? e.texte_echec : (e.texte_echec_final || e.texte_echec));
    zone.innerHTML = '<div class="colonne"><span class="surtitre">Évaluation · tentative ' + tent + "</span><h1>" + (ok ? "Évaluation réussie" : "Bilan de l'évaluation") + "</h1>" +
      '<ul class="preuves">' + lignes + "</ul>" + '<div class="feedback feedback--' + (ok ? "adapte" : "partiel") + '">' + md(texte) + "</div>" +
      '<h2 class="rappel-titre">' + ic("i-ampoule") + " Les repères à garder</h2>" + (Array.isArray(e.rappel) ? points(e.rappel) : '<div class="rappel">' + md(e.rappel) + "</div>") + "</div>";
    if (peutReprendre) {
      principal("Nouvelle tentative", function () {
        var versB = etat.eval.serie !== "B";
        etat.eval.tentative = 2; etat.eval.resultats = {}; etat.eval.passages = (etat.eval.passages || 0) + 1; etat.eval.serie = versB ? "B" : "A"; sauver();
        aller(versB ? e.retentative : (EVAL ? EVAL.serieA : e.retentative), true);
      }, { icone: "i-recommencer" });
    } else principal("Continuer", function () { suivant(e); });
  }

  /* ---------- Auto-positionnement, avant et après le module (évaluation ipsative) ---------- */
  function rendreAuto(e) {
    zone.classList.add("ecran--lecture");
    var groupe = e.groupe || M.code || M.id, moment = e.moment || "apres";
    var G = etat.auto[groupe] = etat.auto[groupe] || {};
    var avant = moment === "apres" ? G.avant : null;
    zone.innerHTML = '<div class="colonne colonne--large">' + entete(e, moment === "avant" ? "Pour commencer" : "Auto-positionnement") + md(e.texte) +
      '<div class="auto" role="table" aria-label="' + esc(e.titre) + '"><div class="auto-ligne auto-tete" role="row"><span role="columnheader">Dans mon travail…</span>' + e.echelle.map(function (x) { return '<span role="columnheader">' + esc(x) + "</span>"; }).join("") + "</div>" +
      e.items.map(function (it, n) {
        var precedent = avant && avant[n] != null ? '<span class="auto-avant">Au début du module : ' + esc(e.echelle[avant[n]]) + "</span>" : "";
        return '<div class="auto-ligne" role="row"><span role="rowheader" id="auto-' + n + '">' + inline(it.libelle) + precedent + "</span>" + e.echelle.map(function (x, k) {
          return '<span role="cell" class="auto-cellule"><label class="auto-case"><input type="radio" name="auto-' + n + '" value="' + k + '" aria-label="' + esc(x) + '"><span>' + esc(x) + "</span></label></span>";
        }).join("") + "</div>";
      }).join("") + '</div><p class="rl-mention">' + ic("i-cadenas") + "<span>" + esc(e.mention || "Vos réponses restent sur ce poste, dans ce navigateur. Personne d'autre ne les voit : ni votre employeur, ni l'IFAP.") + "</span></p>" +
      '<div class="feedback feedback--partiel" id="feedback" hidden aria-live="polite"></div></div>';
    var conteneur = zone.querySelector(".auto");
    function lus() { return e.items.map(function (_, n) { var i = zone.querySelector('input[name="auto-' + n + '"]:checked'); return i ? +i.value : null; }); }
    conteneur.addEventListener("change", function () { btnP.disabled = lus().some(function (v) { return v === null; }); });
    function bilan(v) {
      G[moment] = v; sauver();
      var fb = $("feedback"), max = e.echelle.length - 1, html = md(e.retour);
      if (moment === "apres") {
        var pistes = e.items.map(function (it, n) { return { it: it, n: n }; }).filter(function (x) { return v[x.n] < max; });
        if (avant) {
          html += '<ul class="auto-evol">' + e.items.map(function (it, n) {
            var d = avant[n] == null ? 0 : v[n] - avant[n];
            return '<li class="evol evol--' + (d > 0 ? "plus" : d < 0 ? "moins" : "egal") + '"><span>' + inline(it.libelle) + "</span><strong>" + (avant[n] != null ? esc(e.echelle[avant[n]]) + " → " : "") + esc(e.echelle[v[n]]) + "</strong></li>";
          }).join("") + "</ul>";
        }
        if (pistes.length) html += '<h2 class="fin-sous">Pourquoi y penser souvent</h2><ul class="auto-pistes">' + pistes.map(function (x) {
          return "<li><strong>" + inline(x.it.libelle) + "</strong>" + (x.it.pourquoi ? "<p>" + inline(x.it.pourquoi) + "</p>" : "") + "</li>";
        }).join("") + "</ul>";
      }
      fb.className = "feedback feedback--" + (moment === "avant" ? "adapte" : "partiel");
      fb.innerHTML = html; fb.hidden = false;
      principal("Continuer", function () { suivant(e); });
    }
    principal(moment === "avant" ? "Enregistrer mes réponses" : "Voir mon bilan", function () { bilan(lus()); var fb = $("feedback"); fb.scrollIntoView({ block: "nearest", behavior: "smooth" }); }, { desactive: true });
    if (G[moment]) { G[moment].forEach(function (k, n) { var i = zone.querySelector('input[name="auto-' + n + '"][value="' + k + '"]'); if (i) i.checked = true; }); bilan(G[moment]); }
  }

  /* ---------- Mes ressources ---------- */
  function rendreRessources(e) {
    zone.classList.add("ecran--lecture");
    e.fiches.forEach(function (id) { ajouterCarnet("fiche", id); });
    zone.innerHTML = '<div class="colonne colonne--large">' + entete(e, "Mes ressources") + md(e.texte) + '<ul class="ressources">' + e.fiches.map(function (id) {
      var f = F[id];
      return '<li class="ressource"><span class="res-icone">' + ic("i-fichier") + '</span><div><strong>' + esc(f.titre) + "</strong><span>" + esc(f.quand) + '</span></div><a class="btn btn-secondaire" href="fiche.html?id=' + esc(id) + '" target="_blank" rel="noopener">' + ic("i-imprimer") + " Ouvrir</a></li>";
    }).join("") + "</ul></div>";
    principal("Continuer", function () { suivant(e); });
  }


  /* ---------- Image cliquable : découverte ou audit (D49, CAN-TECH-01 §6 bis) ---------- */
  function rendreHotspot(e) {
    if (e.mode === "trombinoscope") return rendreTrombi(e);
    zone.classList.add("ecran--decision");
    var audit = e.mode === "audit", ouvertes = {}, signalees = {};
    var info = D.illustrations[e.illustration] || {};
    var html = '<div class="colonne colonne--large">' + entete(e, e.etape) + (e.texte ? '<div class="texte">' + md(e.texte) + "</div>" : "") +
      '<p class="consigne">' + esc(e.consigne || (audit ? "Cliquez sur chaque élément qui vous paraît anormal, puis validez." : "Cliquez sur chaque point numéroté.")) + "</p>" +
      '<div class="hs-cadre"><img class="hs-img" src="assets/img/' + esc(e.illustration) + '.jpg" alt="' + esc(e.alt || info.alt) + '" data-essai="jpg">' +
      e.zones.map(function (z, n) {
        return '<button type="button" class="hs-point" data-z="' + n + '" style="left:' + z.x + "%;top:" + z.y + '%" aria-label="' + esc((n + 1) + ". " + z.titre) + '" aria-pressed="false"><span>' + (n + 1) + "</span></button>";
      }).join("") + "</div>" +
      '<ol class="hs-liste">' + e.zones.map(function (z, n) {
        return '<li><button type="button" class="hs-lien" data-z="' + n + '" aria-pressed="false"><span class="hs-num">' + (n + 1) + "</span>" + esc(z.titre) + "</button></li>";
      }).join("") + "</ol>" +
      '<div class="hs-detail" id="hs-detail" aria-live="polite" hidden></div>' +
      '<div class="feedback" id="feedback" hidden aria-live="polite"></div></div>';
    zone.innerHTML = html;
    var img = zone.querySelector(".hs-img");
    img.addEventListener("error", function () { if (img.dataset.essai === "jpg") { img.dataset.essai = "png"; img.src = img.src.replace(/\.jpg$/, ".png"); } else { img.replaceWith(Object.assign(document.createElement("div"), { className: "hs-vide", textContent: e.illustration + " — image à venir" })); } });
    function marquer(n, actif) {
      zone.querySelectorAll('[data-z="' + n + '"]').forEach(function (b) { b.classList.toggle(audit ? "signale" : "vu", actif); b.setAttribute("aria-pressed", String(actif)); });
    }
    function ouvrir(n) {
      var z = e.zones[n], d = $("hs-detail");
      if (audit) {
        signalees[n] = !signalees[n]; marquer(n, signalees[n]);
        btnP.disabled = false;
        return;
      }
      ouvertes[n] = true; marquer(n, true);
      zone.querySelectorAll(".hs-point, .hs-lien").forEach(function (b) { b.classList.toggle("actif", +b.dataset.z === n); });
      var qui = z.personnage || (e.portraits ? z.titre.split(",")[0] : null);
      d.innerHTML = (qui ? '<div class="hs-portrait">' + avatar(qui, "avatar--grand") + "</div>" : "") + '<h2><span class="hs-num">' + (n + 1) + "</span>" + esc(z.titre) + "</h2>" + md(z.texte) + (z.repere ? '<p class="hs-repere">' + ic("i-ampoule") + "<span>" + inline(z.repere) + "</span></p>" : "");
      d.hidden = false;
      var toutes = e.zones.every(function (_, k) { return ouvertes[k]; });
      if (toutes) {
        memoriser(e.id, true);
        if (e.bandeau_final) { var fb = $("feedback"); fb.className = "feedback feedback--adapte"; fb.innerHTML = md(e.bandeau_final); fb.hidden = false; }
        btnP.disabled = false;
      }
      d.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    zone.querySelector(".colonne").addEventListener("click", function (ev) { var b = ev.target.closest("[data-z]"); if (b && !zone.classList.contains("hs-fini")) ouvrir(+b.dataset.z); });
    if (audit) {
      principal("Valider", validerAudit, { icone: "i-check", desactive: true });
      var dejaA = reponse(e.id);
      if (dejaA) { signalees = dejaA; Object.keys(signalees).forEach(function (n) { if (signalees[n]) marquer(+n, true); }); validerAudit(true); }
    } else {
      /* Découverte : rien n'oblige à tout ouvrir (retour de Marc du 13-10), sauf « obligatoire: true » */
      principal("Continuer", function () { suivant(e); }, { desactive: !!e.obligatoire });
      var dejaD = reponse(e.id);
      if (dejaD) { e.zones.forEach(function (_, k) { ouvertes[k] = true; marquer(k, true); }); btnP.disabled = false; }
    }
    function validerAudit(restaure) {
        memoriser(e.id, signalees);
        zone.classList.add("hs-fini");
        var trouvees = 0, manquees = 0, fausses = 0;
        var lignes = e.zones.map(function (z, n) {
          var s = !!signalees[n], a = !!z.anomalie, cls;
          if (a && s) { trouvees++; cls = "ok"; } else if (a) { manquees++; cls = "manque"; } else if (s) { fausses++; cls = "faux"; } else return "";
          var lib = { ok: "Anomalie trouvée", manque: "Anomalie manquée", faux: "Pas une anomalie" }[cls];
          return '<li class="hs-bilan hs-bilan--' + cls + '"><strong>' + (n + 1) + ". " + esc(z.titre) + "</strong> — " + lib + (z.feedback ? "<p>" + inline(z.feedback) + "</p>" : "") + "</li>";
        }).join("");
        var total = e.zones.filter(function (z) { return z.anomalie; }).length, fb = $("feedback");
        fb.className = "feedback feedback--" + (trouvees === total && !fausses ? "adapte" : "partiel");
        fb.innerHTML = "<p><strong>" + trouvees + " anomalie" + (trouvees > 1 ? "s" : "") + " trouvée" + (trouvees > 1 ? "s" : "") + " sur " + total + "</strong>" + (fausses ? " · " + fausses + " fausse" + (fausses > 1 ? "s" : "") + " alerte" + (fausses > 1 ? "s" : "") : "") + ".</p><ul class=\"hs-bilans\">" + lignes + "</ul>" + (e.synthese ? md(e.synthese) : "");
        fb.hidden = false; if (restaure !== true) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
        refaire(e, rendreHotspot);
        principal("Continuer", function () { suivant(e); });
    }
  }

  /* ---------- Trombinoscope : présenter une équipe sans obliger à tout ouvrir ---------- */
  function rendreTrombi(e) {
    zone.classList.add("ecran--lecture", "ecran--visuel");
    var groupes = [];
    e.zones.forEach(function (z) {
      var g = groupes.filter(function (x) { return x.nom === (z.groupe || ""); })[0];
      if (!g) { g = { nom: z.groupe || "", zones: [] }; groupes.push(g); }
      g.zones.push(z);
    });
    var notes = e.groupes || {};
    var html = '<div class="colonne colonne--large">' + entete(e, e.etape) + (e.texte ? '<div class="texte">' + md(e.texte) + "</div>" : "") +
      (e.illustration ? '<p class="trombi-voir"><button type="button" class="btn-revoir" id="trombi-orga">' + ic("i-image") + " Voir l'organigramme illustré</button></p>" : "") +
      groupes.map(function (g, k) {
        return '<section class="trombi-groupe trombi-groupe--' + (k === 0 ? "interne" : "externe") + '">' + (g.nom ? "<h2>" + esc(g.nom) + "</h2>" : "") + (notes[g.nom] ? '<p class="trombi-note">' + inline(notes[g.nom]) + "</p>" : "") +
          '<ul class="trombi">' + g.zones.map(function (z) {
            var nom = z.titre.split(",")[0], fonction = z.titre.split(",").slice(1).join(",").trim();
            var id = "tb-" + esc(z.id);
            return '<li class="tb-carte' + (z.moi ? " tb-carte--moi" : "") + '"><button type="button" class="tb-tete" aria-expanded="false" aria-controls="' + id + '">' + avatar(z.personnage || nom, "avatar--grand") +
              '<span class="tb-id"><strong>' + esc(nom) + "</strong><span>" + esc(fonction) + "</span>" + (z.pole ? '<span class="tb-pole">' + esc(z.pole) + "</span>" : "") + "</span>" +
              '<span class="tb-plus" aria-hidden="true">' + ic("i-bas") + "</span></button>" +
              '<div class="tb-detail" id="' + id + '" hidden>' + md(z.texte) + (z.repere ? '<p class="hs-repere">' + ic("i-ampoule") + "<span>" + inline(z.repere) + "</span></p>" : "") + "</div></li>";
          }).join("") + "</ul></section>";
      }).join("") +
      (e.bandeau_final ? '<div class="a-retenir">' + ic("i-ampoule") + "<span>" + inline(e.bandeau_final) + "</span></div>" : "") + "</div>";
    zone.innerHTML = html;
    zone.querySelectorAll(".tb-tete").forEach(function (b) {
      b.addEventListener("click", function () {
        var d = $(b.getAttribute("aria-controls")), ouvert = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", String(!ouvert)); d.hidden = ouvert; b.closest(".tb-carte").classList.toggle("ouverte", !ouvert);
      });
    });
    var o = $("trombi-orga");
    if (o) o.addEventListener("click", function () {
      var info = D.illustrations[e.illustration] || {};
      ouvrirPanneau("Organigramme", '<img class="trombi-image" src="assets/img/' + esc(e.illustration) + '.jpg" alt="' + esc(e.alt || info.alt) + '">');
    });
    principal("Continuer", function () { suivant(e); });
  }

  /* ---------- Planning à remplir (D49) ---------- */
  function rendrePlanning(e) {
    zone.classList.add("ecran--decision");
    var place = {}, verrou = false;
    function attendus(t) { return [].concat(t.attendu); }
    zone.innerHTML = '<div class="colonne colonne--large">' + situation(e) +
      '<p class="consigne">' + esc(e.consigne || "Glissez chaque tâche dans le bon jour, ou choisissez le jour dans la liste.") + "</p>" +
      '<div class="pl-reserve" data-col="" aria-label="Tâches à placer"><h2>À placer</h2><ul class="pl-liste"></ul></div>' +
      '<div class="pl-grille" style="grid-template-columns:repeat(' + e.colonnes.length + ',minmax(0,1fr))">' + e.colonnes.map(function (c) {
        return '<section class="pl-col" data-col="' + esc(c) + '" aria-label="' + esc(c) + '"><h2>' + esc(c) + '</h2><ul class="pl-liste"></ul></section>';
      }).join("") + "</div>" +
      '<div class="feedback" id="feedback" hidden aria-live="polite"></div><p class="sr-only" id="annonce" aria-live="polite"></p></div>';
    var glisse = null;
    function carte(t) {
      var li = document.createElement("li");
      li.className = "pl-tache"; li.draggable = !verrou; li.dataset.id = t.id;
      li.innerHTML = '<span class="pl-lib">' + inline(t.libelle) + "</span>" + (t.contrainte ? '<span class="pl-contrainte">' + inline(t.contrainte) + "</span>" : "") +
        '<label class="pl-choix"><span class="sr-only">Jour pour : ' + esc(t.libelle) + '</span><select' + (verrou ? " disabled" : "") + '><option value="">— jour —</option>' +
        e.colonnes.map(function (c) { return '<option value="' + esc(c) + '"' + (place[t.id] === c ? " selected" : "") + ">" + esc(c) + "</option>"; }).join("") + "</select></label>";
      li.querySelector("select").addEventListener("change", function (ev) { deplacer(t.id, ev.target.value); });
      li.addEventListener("dragstart", function () { glisse = t.id; li.classList.add("glisse"); });
      li.addEventListener("dragend", function () { li.classList.remove("glisse"); });
      return li;
    }
    function dessiner() {
      zone.querySelectorAll(".pl-liste").forEach(function (u) { u.innerHTML = ""; });
      e.taches.forEach(function (t) {
        var cible = zone.querySelector('[data-col="' + (place[t.id] || "").replace(/"/g, '\\"') + '"] .pl-liste') || zone.querySelector(".pl-reserve .pl-liste");
        cible.appendChild(carte(t));
      });
      zone.querySelector(".pl-reserve").hidden = e.taches.every(function (t) { return place[t.id]; });
      if (!verrou) btnP.disabled = !e.taches.every(function (t) { return place[t.id]; });
    }
    function deplacer(id, col) {
      if (verrou) return;
      if (col) place[id] = col; else delete place[id];
      var t = e.taches.filter(function (x) { return x.id === id; })[0];
      $("annonce").textContent = t.libelle + " : " + (col || "à placer");
      dessiner();
      var s = zone.querySelector('.pl-tache[data-id="' + id + '"] select'); if (s) s.focus();
    }
    zone.querySelectorAll("[data-col]").forEach(function (c) {
      c.addEventListener("dragover", function (ev) { if (!verrou) { ev.preventDefault(); c.classList.add("survol"); } });
      c.addEventListener("dragleave", function () { c.classList.remove("survol"); });
      c.addEventListener("drop", function (ev) { ev.preventDefault(); c.classList.remove("survol"); if (glisse) deplacer(glisse, c.dataset.col); glisse = null; });
    });
    dessiner();
    principal("Valider", valider, { icone: "i-check", desactive: true });
    function valider() {
      memoriser(e.id, JSON.parse(JSON.stringify(place)));
      verrou = true; dessiner();
      var bons = 0;
      e.taches.forEach(function (t) {
        var ok = attendus(t).indexOf(place[t.id]) >= 0, li = zone.querySelector('.pl-tache[data-id="' + t.id + '"]');
        if (ok) bons++;
        li.classList.add(ok ? "pl-ok" : "pl-ko");
        li.insertAdjacentHTML("beforeend", '<div class="pl-fb">' + (ok ? '<span class="verdict verdict--adapte">' + ic("i-check-cercle") + "Bien placé</span>" : '<span class="verdict verdict--partiel">' + ic("i-moitie") + "Plutôt : " + esc(attendus(t).join(" ou ")) + "</span>") + (t.feedback ? "<p>" + inline(t.feedback) + "</p>" : "") + "</div>");
      });
      var fb = $("feedback");
      fb.className = "feedback feedback--" + (bons === e.taches.length ? "adapte" : "partiel");
      fb.innerHTML = "<p><strong>" + bons + " sur " + e.taches.length + " bien placées.</strong> " + inline(e.synthese || "") + "</p>";
      fb.hidden = false; if (!restaure) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
      refaire(e, rendrePlanning);
      principal("Continuer", function () { suivant(e); });
    }
    var restaure = false, deja = reponse(e.id);
    if (deja && e.taches.every(function (t) { return deja[t.id]; })) { restaure = true; place = deja; valider(); }
  }

  /* ---------- Cartes retournables (D49) ---------- */
  function rendreCartes(e) {
    zone.classList.add("ecran--lecture");
    zone.innerHTML = '<div class="colonne colonne--large">' + entete(e, e.etape) + (e.texte ? '<div class="texte">' + md(e.texte) + "</div>" : "") +
      '<p class="consigne">' + esc(e.consigne || "Cliquez sur chaque carte pour la retourner.") + "</p>" +
      '<ul class="cartes">' + e.cartes.map(function (c, n) {
        return '<li><button type="button" class="carte-ret" data-n="' + n + '" aria-pressed="false" style="--teinte:' + TEINTES[n % TEINTES.length] + ";--teinte-fonce:" + TEINTES_FONCEES[n % TEINTES.length] + '"><span class="cr-recto">' + (c.icone ? '<span class="cr-ico">' + ic(c.icone) + "</span>" : "") + '<span class="cr-titre">' + inline(c.recto) + '</span><span class="cr-indice">Retourner</span></span><span class="cr-verso" hidden><span class="cr-rappel">' + inline(c.recto) + "</span>" + md(c.verso) + "</span></button></li>";
      }).join("") + "</ul>" + (e.encadre ? '<div class="a-retenir">' + ic("i-ampoule") + "<span>" + inline(e.encadre) + "</span></div>" : "") +
      '<p class="sr-only" id="annonce" aria-live="polite"></p></div>';
    zone.querySelector(".cartes").addEventListener("click", function (ev) {
      var b = ev.target.closest(".carte-ret"); if (!b) return;
      var r = b.querySelector(".cr-recto"), v = b.querySelector(".cr-verso"), retournee = v.hidden;
      v.hidden = !retournee; r.hidden = retournee; b.classList.toggle("retournee", retournee); b.setAttribute("aria-pressed", String(retournee));
      b.classList.remove("tourne"); void b.offsetWidth; b.classList.add("tourne");
      $("annonce").textContent = retournee ? v.textContent : r.textContent;
    });
    principal("Continuer", function () { suivant(e); });
  }

  /* ---------- Recherche documentaire simulée (D49, CAN-TECH-01 §6 bis) ----------
     Moteur fictif, sobre : les mots saisis choisissent un jeu de résultats ; l'apprenant
     choisit le document à utiliser, puis voit les trois vérifications (qui, quand, quel statut). */
  function sansAccent(t) { return String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function rendreRecherche(e) {
    zone.classList.add("ecran--decision");
    var regles = e.mots_cles || [], jeux = e.jeux || {}, courant = null, requete = "";
    var html = '<div class="colonne">' + situation(e) +
      '<form class="rch" role="search" novalidate><div class="rch-entete">' + ic("i-loupe") + "<span>" + esc(e.moteur || "Base documentaire") + "</span></div>" +
      '<div class="rch-ligne"><label class="sr-only" for="rch-q">Mots à chercher</label><input id="rch-q" class="rch-q" type="search" autocomplete="off" placeholder="' + esc(e.placeholder || "Tapez quelques mots…") + '">' +
      '<button type="submit" class="btn btn-secondaire">' + ic("i-loupe") + " Rechercher</button></div>" +
      (e.exemples ? '<p class="rch-exemples">Exemples : ' + e.exemples.map(function (x) { return '<button type="button" class="lien rch-ex">' + esc(x) + "</button>"; }).join(" · ") + "</p>" : "") +
      "</form>" +
      '<div class="rch-res" id="rch-res" aria-live="polite"></div>' +
      '<div class="feedback" id="feedback" hidden aria-live="polite"></div></div>';
    zone.innerHTML = html;
    var form = zone.querySelector(".rch"), q = $("rch-q"), res = $("rch-res"), fb = $("feedback");
    function jeuPour(texte) {
      var mots = sansAccent(texte).split(/[^a-z0-9]+/).filter(Boolean), meilleur = null, score = 0, defaut = null;
      regles.forEach(function (r) {
        if (r.sinon) { defaut = r.sinon; return; }
        var n = (r.si || []).filter(function (m) { return mots.indexOf(sansAccent(m)) >= 0; }).length;
        if (n > score) { score = n; meilleur = r.resultats; }
      });
      return meilleur || defaut;
    }
    function verifs(d) {
      return '<dl class="rch-verifs"><div><dt>Qui ?</dt><dd>' + esc(d.auteur || "Inconnu") + "</dd></div><div><dt>Quand ?</dt><dd>" + esc(d.date || "Sans date") + "</dd></div><div><dt>Quel statut ?</dt><dd>" + esc(d.statut || "Inconnu") + "</dd></div></dl>";
    }
    function chercher(texte, restaure) {
      requete = String(texte || "").trim(); if (!requete) { q.focus(); return; }
      courant = jeuPour(requete); fb.hidden = true;
      var docs = jeux[courant] || [];
      if (!docs.length) {
        res.innerHTML = '<p class="rch-compte">Aucun résultat pour « ' + esc(requete) + " ».</p>" + (e.conseil_mots ? '<div class="brief">' + ic("i-boussole") + "<div>" + md(e.conseil_mots) + "</div></div>" : "");
        principal("Valider", valider, { icone: "i-check", desactive: true });
        return;
      }
      res.innerHTML = '<p class="rch-compte">' + docs.length + " résultat" + (docs.length > 1 ? "s" : "") + " pour « " + esc(requete) + " »</p>" +
        (e.consigne_choix ? '<p class="consigne">' + esc(e.consigne_choix) + "</p>" : "") +
        '<fieldset class="options rch-liste"><legend class="sr-only">Résultats</legend>' + docs.map(function (d) {
          return '<label class="option rch-doc" data-id="' + esc(d.id) + '"><input type="radio" name="rch-' + esc(e.id) + '" value="' + esc(d.id) + '">' +
            '<span class="rch-ico">' + ic(d.icone || "i-fichier") + '</span><span class="rch-corps"><span class="rch-titre">' + inline(d.titre) + "</span>" +
            '<span class="rch-meta">' + esc(d.auteur || "Auteur inconnu") + " · " + esc(d.date || "sans date") + (d.statut ? ' · <span class="rch-statut">' + esc(d.statut) + "</span>" : "") + "</span>" +
            (d.extrait ? '<span class="rch-extrait">' + inline(d.extrait) + "</span>" : "") + "</span></label>";
        }).join("") + "</fieldset>";
      res.querySelector(".rch-liste").addEventListener("change", function () { principal("Valider", valider, { icone: "i-check" }); });
      principal("Valider", valider, { icone: "i-check", desactive: true });
      if (!restaure) res.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    function valider(restaure) {
      var choisi = res.querySelector("input:checked"); if (!choisi) return;
      var d = (jeux[courant] || []).filter(function (x) { return x.id === choisi.value; })[0];
      var v = d.verdict || (d.bon ? "adapte" : "risque");
      memoriser(e.id, { q: requete, doc: d.id });
      res.querySelector(".rch-liste").classList.add("verrouille");
      res.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
      form.querySelectorAll("input, button").forEach(function (i) { i.disabled = true; });
      var lab = choisi.closest(".option"); lab.classList.add("choisie"); lab.insertAdjacentHTML("beforeend", badge(v));
      fb.className = "feedback feedback--" + v;
      fb.innerHTML = badge(v) + "<p>" + inline(d.feedback) + "</p>" + verifs(d) + (v === "adapte" && e.synthese ? md(e.synthese) : "") +
        (v !== "adapte" ? '<button type="button" class="btn btn-secondaire btn-petit" id="reessayer">' + ic("i-recommencer") + " Chercher encore</button>" : "");
      fb.hidden = false;
      var r = $("reessayer"); if (r) r.addEventListener("click", function () { oublier(e.id); rendreRecherche(e); brancherImages(zone); $("rch-q").value = requete; chercher(requete, true); $("rch-q").focus(); });
      if (restaure !== true) fb.scrollIntoView({ block: "nearest", behavior: "smooth" });
      principal("Continuer", function () { suivant(e); });
    }
    form.addEventListener("submit", function (ev) { ev.preventDefault(); chercher(q.value); });
    zone.querySelectorAll(".rch-ex").forEach(function (b) { b.addEventListener("click", function () { q.value = b.textContent; chercher(q.value); }); });
    principal("Valider", valider, { icone: "i-check", desactive: true });
    var deja = reponse(e.id);
    if (deja && deja.q) { q.value = deja.q; chercher(deja.q, true); var inp = res.querySelector('input[value="' + deja.doc + '"]'); if (inp) { inp.checked = true; valider(true); } }
  }

  /* ---------- Réponse libre, non enregistrée (D49) ---------- */
  function rendreReponseLibre(e) {
    zone.classList.add("ecran--lecture");
    zone.innerHTML = '<div class="colonne">' + entete(e, e.etape) + (e.texte ? '<div class="texte">' + md(e.texte) + "</div>" : "") +
      '<label class="rl-question" for="rl-saisie">' + inline(e.question) + "</label>" +
      '<textarea id="rl-saisie" class="rl-saisie" rows="5" autocomplete="off"></textarea>' +
      '<p class="rl-mention">' + ic("i-cadenas") + "<span>" + esc(e.mention || "Votre réponse reste sur cet écran. Elle n'est transmise à personne.") + "</span></p>" +
      '<div class="feedback feedback--adapte" id="feedback" hidden aria-live="polite"></div></div>';
    var ta = $("rl-saisie");
    function montrer() { var fb = $("feedback"); fb.innerHTML = md(e.apres); fb.hidden = false; fb.scrollIntoView({ block: "nearest", behavior: "smooth" }); principal(e.bouton_suite || "Continuer", function () { ta.value = ""; suivant(e); }); }
    principal("Valider", montrer, { icone: "i-check" });
    ta.addEventListener("input", function () { btnP.disabled = false; });
  }

  /* ---------- Positionnement initial (D83, D106) ----------
     Format « semaine » (v0.4) : chaque situation a un moment (jour, heure, canal), un verdict par compétence observée
     et une conséquence par réponse. Le choix est enregistré avant la conséquence et ne se modifie plus.
     Format v0.3 encore lu : « verdict » unique, « bloc » sur l'item, certitude facultative.
     Le résultat situe l'agent par bloc et relie chaque bloc au module qui le travaille. */
  var POS_CANAUX = {
    oral: { libelle: "En face à face", icone: "i-oral" }, reunion: { libelle: "En réunion", icone: "i-oral" },
    sms: { libelle: "SMS", icone: "i-telephone" }, appel: { libelle: "Appel", icone: "i-telephone" },
    courriel: { libelle: "Courriel", icone: "i-courriel" }, messagerie: { libelle: "Messagerie", icone: "i-informer" },
    note: { libelle: "Sur votre bureau", icone: "i-fichier" }
  };
  var JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  function posItems() {
    var ids = [];
    SECTIONS.forEach(function (s) { (ORDRE[s.id] || []).forEach(function (id) { if (E[id].type === "pos-item") ids.push(id); }); });
    return ids;
  }
  function posVerdicts(i, o) {
    /* { Cxx: verdict } pour une réponse, quel que soit le format */
    if (o.verdicts) return o.verdicts;
    var r = {}; (i.competences || [i.bloc]).forEach(function (c) { r[c] = o.verdict; }); return r;
  }
  function posSemaine(courant) {
    /* Frise L M M J V : jours faits, jour en cours */
    var jours = posItems().map(function (id) { return E[id].moment && E[id].moment.jour; });
    if (!jours.some(Boolean)) return "";
    var iCourant = JOURS.indexOf(courant);
    return '<ol class="pos-semaine" aria-label="Jour ' + (iCourant + 1) + ' sur 5 : ' + esc(courant || "") + '">' + JOURS.map(function (j, k) {
      var etatJ = k < iCourant ? "fait" : k === iCourant ? "encours" : "avenir";
      return '<li class="pos-jour pos-jour--' + etatJ + '"' + (k === iCourant ? ' aria-current="step"' : "") + '><span class="pos-jour-ini" aria-hidden="true">' + esc(j.charAt(0)) + '</span><span class="pos-jour-nom">' + esc(j) + "</span></li>";
    }).join("") + "</ol>";
  }
  function rendrePosItem(e) {
    zone.classList.add("ecran--decision", "ecran--pos");
    var liste = posItems(), n = liste.indexOf(e.id) + 1, deja = reponse(e.id) || {};
    var cert = M.certitude || [], mo = e.moment || null, avecSuite = e.options.some(function (o) { return o.consequence; });
    var C = mo ? (POS_CANAUX[mo.canal] || POS_CANAUX.note) : null;
    var sur = mo ? mo.jour + " · " + mo.heure : "Situation " + n + " sur " + liste.length;
    var qui = mo && mo.de && mo.de !== "Vous" ? '<span class="pos-de">' + ic(C.icone) + "<span><strong>" + esc(mo.de) + "</strong> · " + esc(C.libelle) + "</span></span>"
      : (mo ? '<span class="pos-de">' + ic(C.icone) + "<span>" + esc(C.libelle) + "</span></span>" : "");
    var corps = mo && mo.canal !== "note"
      ? '<div class="texte bulle bulle--' + esc(mo.canal) + ' pos-bulle">' + md(e.texte) + "</div>"
      : '<div class="texte pos-texte">' + md(e.texte) + "</div>";
    zone.innerHTML = '<div class="colonne">' + posSemaine(mo && mo.jour) +
      '<div class="pos-tete">' + (e.rebond ? '<span class="pos-rebond">La suite…</span>' : "") + '<span class="surtitre">' + esc(sur) + "</span>" +
      '<h1 id="titre-q">' + esc(e.titre || "") + "</h1>" + qui + "</div>" + corps +
      '<fieldset class="options' + (mo ? " options--reponses" : "") + '" aria-labelledby="titre-q"><legend class="sr-only">Que faites-vous ?</legend>' + e.options.map(function (o) {
        return '<label class="option" data-id="' + esc(o.id) + '"><input type="radio" name="q-' + esc(e.id) + '" value="' + esc(o.id) + '">' + (mo ? "" : '<span class="lettre">' + esc(o.id) + "</span>") + "<span>" + inline(o.libelle) + "</span></label>";
      }).join("") + "</fieldset>" +
      (!cert.length ? "" : '<fieldset class="pos-certitude" id="pos-cert" hidden><legend>' + esc(M.certitude_question || "Comment avez-vous répondu ?") + '</legend><div class="pos-cert-choix">' +
        cert.map(function (x, k) { return '<label class="pos-cert"><input type="radio" name="c-' + esc(e.id) + '" value="' + k + '"><span>' + esc(x) + "</span></label>"; }).join("") + "</div></fieldset>") +
      '<div class="pos-suite" id="pos-suite" hidden aria-live="polite"></div></div>';
    compteur.textContent = (mo ? mo.jour + " · " : "Situation ") + n + " / " + liste.length;
    var fs = zone.querySelector(".options"), fsC = $("pos-cert"), suite = $("pos-suite");
    function lu(nom) { var i = zone.querySelector('input[name="' + nom + "-" + e.id + '"]:checked'); return i ? i.value : null; }
    function verrouiller(c, restaure) {
      /* Le choix est enregistré : on montre la conséquence, sans verdict */
      fs.classList.add("verrouille"); fs.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
      var lab = fs.querySelector('.option[data-id="' + c + '"]'); if (lab) lab.classList.add("choisie");
      var o = e.options.filter(function (x) { return x.id === c; })[0];
      suite.innerHTML = '<span class="pos-suite-tete">' + ic("i-lecture") + "Ce qui se passe ensuite</span><p>" + inline(o.consequence) + "</p>";
      suite.hidden = false;
      if (!restaure) suite.scrollIntoView({ block: "nearest", behavior: "smooth" });
      principal("Continuer", function () { suivant(e); });
    }
    function maj() {
      var c = lu("q"), k = cert.length ? lu("c") : "";
      if (c && fsC && fsC.hidden) { fsC.hidden = false; fsC.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
      btnP.disabled = !(c && k !== null);
    }
    zone.querySelector(".colonne").addEventListener("change", function () { if (!fs.classList.contains("verrouille")) maj(); });
    principal(avecSuite ? "Valider" : "Continuer", function () {
      var c = lu("q"), k = cert.length ? lu("c") : ""; if (!c || k === null) return;
      memoriser(e.id, cert.length ? { c: c, k: +k } : { c: c });
      if (avecSuite) verrouiller(c, false); else suivant(e);
    }, { desactive: true, icone: avecSuite ? "i-check" : null });
    if (deja.c) {
      var a = zone.querySelector('input[name="q-' + e.id + '"][value="' + deja.c + '"]'); if (a) a.checked = true;
      var b = zone.querySelector('input[name="c-' + e.id + '"][value="' + deja.k + '"]'); if (b) b.checked = true;
      if (avecSuite) verrouiller(deja.c, true); else { maj(); }
    }
  }
  function rendrePosProfil(e) {
    zone.classList.add("ecran--lecture");
    var sec = sectionDe(e.id);
    if (sec && etat.faites.indexOf(sec.id) < 0) { etat.faites.push(sec.id); sauver(); majBandeau(sec); }
    var POINTS = { adapte: 1, partiel: 0.5 }, N = e.niveaux, CT = e.certitude_textes || {};
    var items = posItems().map(function (id) { return E[id]; });
    /* Compétence → bloc : liste « competences » des blocs (v0.4), sinon « bloc » de l'item (v0.3) */
    var blocDe = {};
    e.blocs.forEach(function (b) { (b.competences || []).forEach(function (c) { blocDe[c] = b.id; }); });
    var obs = {}, sit = {}, vigilances = [], manquantes = 0, jusIncertain = {}, fauxAssure = {};
    e.blocs.forEach(function (b) { obs[b.id] = []; sit[b.id] = []; });
    items.forEach(function (i) {
      var comps = i.competences && i.competences.length ? i.competences : [i.bloc];
      var r = reponse(i.id), o = r && r.c ? i.options.filter(function (x) { return x.id === r.c; })[0] : null;
      var V = o ? posVerdicts(i, o) : null;
      var vig = Array.isArray(i.vigilance) ? i.vigilance : (i.vigilance ? comps : []);
      comps.forEach(function (c) {
        var b = blocDe[c] || i.bloc; if (!obs[b]) return;
        if (sit[b].indexOf(i) < 0) sit[b].push(i);
        if (!V) { obs[b].push(null); return; }
        var v = V[c], nonAdapte = v === "inadapte" || v === "risque";
        obs[b].push(POINTS[v] || 0);
        if (v === "adapte" && r.k > 0) jusIncertain[b] = true;
        if (nonAdapte && (r.k === 0 || r.k == null)) {
          if (vig.indexOf(c) >= 0) { if (!vigilances.some(function (x) { return x.item === i; })) vigilances.push({ item: i, bloc: e.blocs.filter(function (x) { return x.id === b; })[0] }); }
          else if (r.k === 0) fauxAssure[b] = true;
        }
      });
      if (!V) manquantes++;
    });
    var cartes = e.blocs.map(function (b) {
      var L = obs[b.id], faites = L.filter(function (x) { return x !== null; });
      var moy = faites.length ? faites.reduce(function (s, x) { return s + x; }, 0) / faites.length : 0;
      var niveau = !L.length || faites.length < L.length ? null : moy >= 0.85 ? "present" : moy >= 0.5 ? "approfondir" : "decouvrir";
      var phrases = [];
      if (niveau) phrases.push(b[niveau]);
      if (jusIncertain[b.id] && CT.juste_incertain) phrases.push(CT.juste_incertain);
      if (fauxAssure[b.id] && CT.faux_assure) phrases.push(CT.faux_assure);
      return '<li class="pos-bloc pos-bloc--' + (niveau || "vide") + '">' +
        '<div class="pos-bloc-tete"><h2>' + esc(b.titre) + '</h2><span class="pos-niveau pos-niveau--' + (niveau || "vide") + '">' + esc(niveau ? N[niveau] : "Non renseigné") + "</span></div>" +
        (phrases.length ? "<p>" + phrases.map(inline).join(" ") + "</p>" : "") +
        '<p class="pos-situations">Situations : ' + sit[b.id].map(function (i) { return esc(i.titre); }).join(" · ") + "</p>" +
        '<div class="pos-module">' + ic("i-chemin") + '<div><span class="pos-module-quand">Travaillé dans :</span> <strong>' + esc(b.module) + "</strong>" +
        "<p><em>Par exemple :</em> " + inline(b.exemple) + "</p></div></div></li>";
    }).join("");
    /* Frise de la semaine : les moments vécus, sans verdict ; les points de vigilance sont signalés */
    var avecMoments = items.some(function (i) { return i.moment; });
    var frise = !avecMoments ? "" : '<h2 class="fin-sous">Votre semaine</h2><ol class="pos-frise">' + JOURS.map(function (j) {
      var du = items.filter(function (i) { return i.moment && i.moment.jour === j; });
      if (!du.length) return "";
      return '<li class="pos-frise-jour"><strong>' + esc(j) + "</strong><ul>" + du.map(function (i) {
        var v = vigilances.some(function (x) { return x.item === i; });
        return '<li' + (v ? ' class="pos-frise-vig"' : "") + "><span>" + esc(i.moment.heure) + "</span> " + esc(i.titre) + (v ? ic("i-attention") + '<span class="sr-only"> (point de vigilance)</span>' : "") + "</li>";
      }).join("") + "</ul></li>";
    }).join("") + "</ol>";
    var vig = vigilances.length ? '<div class="pos-vigilance" role="note">' + ic("i-attention") + "<div>" + md(e.vigilance) +
      "<ul>" + vigilances.map(function (x) { return "<li><strong>" + esc(x.item.titre) + "</strong> — " + esc(x.bloc.module) + "</li>"; }).join("") + "</ul></div></div>" : "";
    zone.innerHTML = '<div class="colonne colonne--large">' + entete(e, libelleEtape(e)) + '<div class="texte">' + md(e.texte) + "</div>" + vig +
      (manquantes ? '<p class="pos-manque">' + ic("i-moitie") + "<span>" + manquantes + " situation" + (manquantes > 1 ? "s" : "") + " sans réponse : les domaines concernés ne sont pas renseignés.</span></p>" : "") +
      '<ol class="pos-blocs">' + cartes + "</ol>" + frise +
      '<p class="rl-mention">' + ic("i-cadenas") + "<span>" + esc(e.mention || "") + "</span></p>" +
      '<p class="refaire"><button type="button" class="lien" id="pos-refaire">' + ic("i-recommencer") + " Refaire le positionnement</button></p></div>";
    $("pos-refaire").addEventListener("click", function () {
      posItems().forEach(function (id) { delete etat.reponses[id]; });
      etat.faites = []; etat.historique = []; sauver();
      aller(SECTIONS[0].debut, true);
    });
    if (M.page_suivante) principal("Continuer : " + M.page_suivante.libelle, pageSuivante);
    else principal("", null);
  }

  var RENDUS = {
    narration: rendreScene, message: rendreScene, apport: rendreLecture, document: rendreDocument,
    choix: rendreChoix, "choix-multiple": function (e) { rendreMultiple(e, false); }, ordre: function (e) { rendreOrdre(e, false); },
    classement: rendreClassement, assemblage: rendreAssemblage, messagerie: rendreMessagerie, outil: rendreOutil,
    "eval-item": rendreEvalItem, "eval-resultat": rendreEvalResultat, "auto-positionnement": rendreAuto,
    ressources: rendreRessources, "fin-section": rendreFin, fin: rendreFin,
    hotspot: rendreHotspot, planning: rendrePlanning, cartes: rendreCartes, "reponse-libre": rendreReponseLibre, recherche: rendreRecherche,
    "pos-item": rendrePosItem, "pos-profil": rendrePosProfil
  };

  /* ---------- Panneaux : aide et mode présentation ---------- */
  var dernierFocus = null;
  function ouvrirPanneau(titre, corps) {
    dernierFocus = document.activeElement;
    $("panneau-titre").textContent = titre; $("panneau-corps").innerHTML = corps;
    $("panneau").hidden = false; $("voile").hidden = false;
    $("panneau-fermer").focus();
  }
  function fermerPanneau() { $("panneau").hidden = true; $("voile").hidden = true; if (dernierFocus) dernierFocus.focus(); }
  $("panneau-fermer").addEventListener("click", fermerPanneau);
  $("voile").addEventListener("click", fermerPanneau);
  $("btn-aide").addEventListener("click", function () {
    ouvrirPanneau("Aide", "<ul class=\"aide\"><li><strong>Continuer</strong> : bouton bleu en bas à droite.</li><li><strong>Retour</strong> : écran précédent (désactivé pendant l'évaluation).</li><li><strong>Sommaire</strong> : retour à la liste des épisodes. Les épisodes s'ouvrent l'un après l'autre.</li><li><strong>Carnet</strong> : les documents, apports et fiches déjà rencontrés, à relire ou à télécharger.</li><li><strong>Revoir la situation</strong> : sur chaque question, rappelle ce qui s'est passé avant.</li><li>Si vous revenez en arrière, vos réponses sont conservées : vous n'avez pas à tout refaire.</li><li><strong>Plein écran</strong> : bouton du bandeau ou touche F. Échap pour sortir.</li><li><strong>Pause</strong> : arrête les animations qui tournent en continu (bouton du bandeau, bouton sur le schéma, ou touche A). Elles sont aussi coupées si votre ordinateur demande moins d\'animations.</li><li>Tout se fait au clavier : Tab pour passer d'un élément à l'autre, Espace ou Entrée pour choisir.</li><li>Votre progression est gardée sur ce poste, dans ce navigateur. Rien n'est transmis.</li></ul>");
  });
  $("btn-sommaire").addEventListener("click", function () { etat.historique = []; aller("MENU", true); });
  function modePresentation() {
    var corps = '<p>Accès direct à tous les écrans (pour la démonstration).</p><div class="pres-actions"><button type="button" class="btn btn-secondaire btn-petit" id="pres-debloquer">' + (etat.presentation ? "Rétablir le déverrouillage progressif" : "Tout déverrouiller") + '</button><button type="button" class="btn btn-secondaire btn-petit" id="pres-reinit">' + ic("i-recommencer") + " Réinitialiser le parcours</button></div>" +
      SECTIONS.map(function (s) {
        return '<details class="pres-section"><summary>' + esc(libelleSection(s)) + " — " + esc(s.titre || "") + " (" + ORDRE[s.id].length + ')</summary><ol>' + ORDRE[s.id].map(function (id) {
          return '<li><button type="button" class="lien" data-aller="' + id + '">' + esc(id) + " · " + esc(E[id].titre || E[id].type) + "</button></li>";
        }).join("") + "</ol></details>";
      }).join("");
    ouvrirPanneau("Mode présentation", corps);
    $("panneau-corps").addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-aller]");
      if (b) { fermerPanneau(); var id = b.dataset.aller; if (E[id].etape === "Évaluation" && !etat.eval.tentative) etat.eval.tentative = 1; aller(id); }
    });
    $("pres-debloquer").addEventListener("click", function () { etat.presentation = !etat.presentation; sauver(); fermerPanneau(); afficher(); });
    $("pres-reinit").addEventListener("click", function () { etat = nouvelEtat(); sauver(); fermerPanneau(); afficher(); });
  }

  /* ---------- Carnet de Noa (D37) ---------- */
  var GROUPES_FICHES = { outil: "Fiches outils", apport: "Fiches apports", ressource: "Ressources", "plus-loin": "Pour aller plus loin" };
  function elementsCarnet() {
    var groupes = {}, ordre = ["Documents", "Apports", "Fiches outils", "Fiches apports", "Ressources", "Pour aller plus loin"];
    etat.carnet.forEach(function (c) {
      var g, titre, corps, extra = "";
      if (c.type === "ecran") {
        var x = E[c.id]; if (!x) return;
        g = x.type === "document" ? "Documents" : "Apports"; titre = x.titre || x.id;
        corps = x.type === "document" ? docHtml(x) : md(x.texte) + (x.a_retenir ? '<p class="a-retenir">' + ic("i-ampoule") + "<span><strong>À retenir</strong> — " + inline(x.a_retenir) + "</span></p>" : "");
      } else {
        var f = F[c.id]; if (!f) return;
        g = GROUPES_FICHES[f.categorie] || "Fiches outils"; titre = f.titre;
        corps = (f.quand ? "<p><strong>Quand l'utiliser ?</strong> " + inline(f.quand) + "</p>" : "") + ficheTexte(f);
        extra = '<a class="btn btn-secondaire btn-petit" href="fiche.html?id=' + esc(c.id) + '" target="_blank" rel="noopener">' + ic("i-imprimer") + " Version à imprimer</a>";
      }
      (groupes[g] = groupes[g] || []).push({ titre: titre, corps: corps, extra: extra });
    });
    return ordre.filter(function (g) { return groupes[g]; }).map(function (g) { return { groupe: g, items: groupes[g] }; });
  }
  function ficheTexte(f) {
    if (f.modele === "checklist" || f.modele === "chemin") return "<ol>" + f.questions.map(function (q) { return "<li><strong>" + esc(q.q) + "</strong>" + (q.aide ? " — " + inline(q.aide) : "") + (q.si_non ? "<br><em>Sinon :</em> " + inline(q.si_non) : "") + "</li>"; }).join("") + "</ol>" + (f.conclusion ? "<p><strong>" + esc(f.conclusion.titre) + "</strong> — " + inline(f.conclusion.texte) + "</p>" : "") + (f.alerte ? "<p>" + inline(f.alerte) + "</p>" : "");
    if (f.modele === "aide-memoire") return "<ol>" + f.etapes.map(function (x) { return "<li><strong>" + esc(x.titre) + "</strong> — " + inline(x.texte) + "</li>"; }).join("") + "</ol>";
    if (f.modele === "formulaire") return "<ul>" + f.sections.map(function (x) { return "<li><strong>" + esc(x.titre) + "</strong> — " + x.champs.map(esc).join(" · ") + "</li>"; }).join("") + "</ul>";
    return f.texte ? md(f.texte) : "";
  }
  function majCarnet() {
    var b = $("btn-carnet"); if (!b) return;
    var n = etat.carnet.length;
    b.querySelector(".compte").textContent = n;
    b.querySelector(".compte").hidden = !n;
    b.setAttribute("aria-label", "Mon carnet : " + n + " élément" + (n > 1 ? "s" : ""));
  }
  function ouvrirCarnet() {
    var G = elementsCarnet();
    var corps = '<p class="carnet-intro">Tout ce que vous rencontrez d\'utile est rangé ici : documents, apports et fiches. Vous pouvez les relire à tout moment et télécharger le carnet.</p>' +
      (G.length ? G.map(function (g) {
        return '<h3 class="carnet-groupe">' + esc(g.groupe) + "</h3>" + g.items.map(function (it) {
          return '<details class="carnet-item"><summary>' + esc(it.titre) + '</summary><div class="carnet-corps">' + it.corps + it.extra + "</div></details>";
        }).join("");
      }).join("") + '<p><button type="button" class="btn btn-secondaire btn-petit" id="carnet-telecharger">' + ic("i-telecharger") + " Télécharger mon carnet</button></p>"
        : '<p class="carnet-vide">Votre carnet est encore vide. Il se remplit au fil des épisodes.</p>');
    ouvrirPanneau("Mon carnet", corps);
    var t = $("carnet-telecharger"); if (t) t.addEventListener("click", telechargerCarnet);
  }
  function telechargerCarnet() {
    var G = elementsCarnet();
    var html = '<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Mon carnet DINA — ' + esc(M.code) + "</title><style>body{font:16px/1.5 system-ui,sans-serif;max-width:46rem;margin:2rem auto;padding:0 1rem;color:#2D3748}h1,h2,h3{color:#103F41}h2{border-bottom:2px solid #1F767A;padding-bottom:.2rem;margin-top:2rem}section{margin:1rem 0 1.6rem}.doc-bloc{border-left:4px solid #1F767A;padding:.2rem .8rem;margin:.6rem 0}.orga-niveau{display:flex;gap:.6rem;flex-wrap:wrap}.orga-case{border:1px solid #ccc;border-radius:8px;padding:.3rem .6rem}svg{display:none}</style></head><body>" +
      "<h1>Mon carnet DINA</h1><p>" + esc(libModule()) + " — " + esc(M.titre) + "</p>" +
      G.map(function (g) { return "<h2>" + esc(g.groupe) + "</h2>" + g.items.map(function (it) { return "<section><h3>" + esc(it.titre) + "</h3>" + it.corps + "</section>"; }).join(""); }).join("") + "</body></html>";
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    a.download = "carnet-dina-" + String(M.code || M.id).toLowerCase() + ".html";
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  if ($("btn-carnet")) { $("btn-carnet").addEventListener("click", ouvrirCarnet); majCarnet(); }
  if (M.sans_menu) { ["btn-sommaire", "btn-carnet"].forEach(function (id) { if ($(id)) $(id).hidden = true; }); }

  /* ---------- Plein écran ---------- */
  var btnPlein = $("btn-plein");
  var pleinPossible = document.fullscreenEnabled || document.webkitFullscreenEnabled;
  if (!pleinPossible) btnPlein.hidden = true;
  function basculerPlein() {
    var actif = document.fullscreenElement || document.webkitFullscreenElement;
    if (actif) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    else (player.requestFullscreen || player.webkitRequestFullscreen).call(player);
  }
  btnPlein.addEventListener("click", basculerPlein);
  function majPlein() {
    var actif = !!(document.fullscreenElement || document.webkitFullscreenElement);
    btnPlein.setAttribute("aria-pressed", String(actif));
    btnPlein.innerHTML = ic(actif ? "i-sortir-plein" : "i-plein") + '<span class="libelle">' + (actif ? "Réduire" : "Plein écran") + "</span>";
  }
  document.addEventListener("fullscreenchange", majPlein);
  document.addEventListener("webkitfullscreenchange", majPlein);

  /* ---------- Clavier ---------- */
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && !$("panneau").hidden) { fermerPanneau(); return; }
    var t = ev.target.tagName;
    if (t === "INPUT" || t === "TEXTAREA" || ev.ctrlKey || ev.metaKey || ev.altKey) return;
    if ((ev.key === "f" || ev.key === "F") && pleinPossible) { ev.preventDefault(); basculerPlein(); }
    if (ev.key === "p" || ev.key === "P") { ev.preventDefault(); modePresentation(); }
    if ((ev.key === "a" || ev.key === "A") && MOUVEMENT) { ev.preventDefault(); basculerAnim(); }
  });

  /* ---------- Pause des animations (WCAG 2.2.2) : bouton du bandeau, bouton sur les schémas animés, touche A ----------
     Seules les boucles s'arrêtent (flux, ondes, halos, dérive) ; les apparitions d'écran restent jouées. Choix gardé sur le poste. */
  function boutonAnim() {
    if (!MOUVEMENT) return "";
    return '<button type="button" class="anim-btn" data-anim aria-pressed="' + etat.animPause + '">' + ic(etat.animPause ? "i-lecture" : "i-pause") + "<span>" + (etat.animPause ? "Relancer l'animation" : "Mettre en pause") + "</span></button>";
  }
  function appliquerAnim() {
    var p = !!etat.animPause, b = $("btn-anim");
    player.classList.toggle("anim-pause", p);
    if (b) {
      b.hidden = !MOUVEMENT;
      b.setAttribute("aria-pressed", String(p));
      b.title = (p ? "Relancer les animations" : "Mettre les animations en pause") + " (touche A)";
      b.innerHTML = ic(p ? "i-lecture" : "i-pause") + '<span class="libelle">' + (p ? "Animer" : "Pause") + "</span>";
    }
    zone.querySelectorAll("[data-anim]").forEach(function (x) {
      x.setAttribute("aria-pressed", String(p));
      x.innerHTML = ic(p ? "i-lecture" : "i-pause") + "<span>" + (p ? "Relancer l'animation" : "Mettre en pause") + "</span>";
    });
    zone.querySelectorAll("svg").forEach(function (s) { if (s.pauseAnimations) { if (p) s.pauseAnimations(); else s.unpauseAnimations(); } });
  }
  function basculerAnim() { etat.animPause = !etat.animPause; sauver(); appliquerAnim(); }
  if ($("btn-anim")) $("btn-anim").addEventListener("click", basculerAnim);
  zone.addEventListener("click", function (ev) { if (ev.target.closest("[data-anim]")) basculerAnim(); });
  appliquerAnim();

  /* ---------- Démarrage ---------- */
  SCORM.init();
  afficher();
})();
