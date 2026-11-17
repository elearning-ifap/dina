/* DINA — rendu du tableau de bord. Lit window.DINA_PILOTAGE (livrables.js). Aucune donnée ici. */
(function () {
  "use strict";
  var D = window.DINA_PILOTAGE;
  if (!D) { document.getElementById("contenu").textContent = "Données introuvables (livrables.js)."; return; }

  var STATUTS = [
    { code: "a_faire",   libelle: "À faire",   couleur: "var(--gris)" },
    { code: "en_cours",  libelle: "En cours",  couleur: "var(--bleu-progression)" },
    { code: "a_valider", libelle: "À valider", couleur: "var(--jaune)" },
    { code: "valide",    libelle: "Validé",    couleur: "var(--turquoise)" },
    { code: "livre",     libelle: "Livré",     couleur: "var(--vert)" }
  ];
  var LIBELLE = { sans_objet: "Sans objet" };
  STATUTS.forEach(function (s) { LIBELLE[s.code] = s.libelle; });
  var PERSONNES_TOUJOURS = ["marc", "mnb", "mfp", "valerie", "employeurs"];

  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function nom(cle) { return D.personnes[cle] ? D.personnes[cle].nom : cle; }
  function puce(statut) { return '<span class="puce s-' + statut + '">' + esc(LIBELLE[statut] || statut) + "</span>"; }
  function $(id) { return document.getElementById(id); }
  function fr(x) { return String(Math.round(x * 100) / 100).replace(".", ","); }
  function duree(liste) {
    var total = 0, estimes = 0;
    liste.forEach(function (l) { if (l.duree != null) { total += l.duree; estimes++; } });
    var manque = liste.length - estimes;
    return { total: total, estimes: estimes, manque: manque,
      texte: estimes ? "Durée prévue : " + fr(total) + "\u00a0j" + (manque ? " (" + manque + " à estimer)" : "") : "Durées à estimer" };
  }

  var tous = [];
  D.categories.forEach(function (c) { c.livrables.forEach(function (l) { tous.push(l); }); });
  var POND = D.ponderation || { a_faire: 0, en_cours: 0.5, a_valider: 0.8, valide: 1, livre: 1 };
  function pourcent(etats) {
    var u = etats.filter(function (e) { return e !== "sans_objet"; });
    return u.length ? Math.round(100 * u.reduce(function (a, e) { return a + (POND[e] || 0); }, 0) / u.length) : 0;
  }

  /* Ancres : un identifiant par livrable et par étape du parcours, pour les liens des tâches */
  var parTitre = {}, parCode = {};
  tous.forEach(function (l, i) { l._id = "l-" + (i + 1); parTitre[l.titre] = l; });
  D.parcours.forEach(function (p) { p._id = "p-" + p.code; parCode[p.code] = p; });
  var liensCasses = [];
  function liens(lie, origine) {
    var cibles = [].concat(lie == null ? [] : lie);
    if (!cibles.length) { liensCasses.push(origine + " : aucun livrable rattaché"); return '<span class="lien-manquant">Livrable à rattacher</span>'; }
    return cibles.map(function (c) {
      if (c === "parcours") return '<a class="lien-livrable" href="#t-parcours">Parcours de l\'agent</a>';
      if (parCode[c]) return '<a class="lien-livrable" href="#' + parCode[c]._id + '">' + esc(c + " — " + parCode[c].titre) + "</a>";
      if (parTitre[c]) return '<a class="lien-livrable" href="#' + parTitre[c]._id + '">' + esc(c) + "</a>";
      liensCasses.push(origine + " : « " + c + " » introuvable");
      return '<span class="lien-manquant">' + esc(c) + " (introuvable)</span>";
    }).join(" ");
  }

  function compter(liste) {
    var n = {}; STATUTS.forEach(function (s) { n[s.code] = 0; });
    liste.forEach(function (l) { if (n[l.statut] != null) n[l.statut]++; });
    return n;
  }
  function barre(n, total) {
    return '<div class="barre" role="img" aria-label="' + STATUTS.map(function (s) { return n[s.code] + " " + s.libelle.toLowerCase(); }).join(", ") + '">' +
      STATUTS.slice().reverse().map(function (s) {
        return n[s.code] ? '<span style="--c:' + s.couleur + ";width:" + (100 * n[s.code] / total) + '%"></span>' : "";
      }).join("") + "</div>";
  }

  /* En-tête */
  $("maj").textContent = "Mis à jour le " + D.miseAJour + ".";
  if (D.avertissement) { $("avertissement").textContent = D.avertissement; $("avertissement").hidden = false; }

  /* Indicateurs : deux périmètres, préparation Moodle et temps de production strict. */
  (function () {
    var P = D.ponderation || { a_faire: 0, en_cours: 0.5, a_valider: 0.8, valide: 1, livre: 1 };
    var prod = [], dep = [];
    D.categories.forEach(function (c) {
      c.livrables.forEach(function (l) { (c.perimetre === "deploiement" ? dep : prod).push(l); });
    });
    function progression(unites) {
      return unites.length ? Math.round(100 * unites.reduce(function (n, statut) {
        return n + (P[statut] || 0);
      }, 0) / unites.length) : 0;
    }
    var etapes = [];
    D.parcours.forEach(function (p) { p.etats.forEach(function (e) { if (e !== "sans_objet") etapes.push(e); }); });
    var prodUnites = prod.map(function (l) { return l.statut; }).concat(etapes);
    var depUnites = dep.map(function (l) { return l.statut; });
    var avanceProd = progression(prodUnites), avanceDep = progression(depUnites);
    var colonnesMoodle = (D.etapesFabrication || []).indexOf("Intégration Moodle");
    var integrables = D.parcours.filter(function (p) {
      return colonnesMoodle >= 0 && p.etats[colonnesMoodle] !== "sans_objet";
    });
    var integres = integrables.filter(function (p) {
      return p.etats[colonnesMoodle] === "valide" || p.etats[colonnesMoodle] === "livre";
    }).length;
    function jours(d) { var m = String(d || "").split("-"); return m.length === 3 ? Date.UTC(+m[2], +m[1] - 1, +m[0]) / 864e5 : 0; }
    function jauge(pc, couleur) {
      return '<div class="jauge" role="img" aria-label="' + pc + ' %"><span style="width:' + Math.max(0, Math.min(pc, 100)) + '%;--c:' + couleur + '"></span></div>';
    }
    var html = '<article class="indicateur"><h3>Production de la formation digitale</h3><p class="grand">' + avanceProd + '<small> %</small></p>' +
      jauge(avanceProd, "var(--turquoise)") + '<p class="explication">' + prodUnites.length + ' unités suivies · parcours et ressources pédagogiques</p></article>';
    html += '<article class="indicateur"><h3>Préparation du déploiement</h3><p class="grand">' + avanceDep + '<small> %</small></p>' +
      jauge(avanceDep, "var(--bleu-progression)") + '<p class="explication">' + dep.length + ' livrables · hors production</p></article>';
    html += '<article class="indicateur"><h3>Intégration dans LIANE</h3><p class="grand">' + integres +
      '<small> / ' + integrables.length + ' étapes</small></p>' +
      jauge(integrables.length ? Math.round(100 * integres / integrables.length) : 0, "var(--turquoise)") +
      '<p class="explication">Étapes du parcours intégrées et validées dans Moodle</p></article>';
    var T = D.temps;
    if (T && T.prevuJours) {
      var ventilation = T.productionParGroupe || {};
      var peripherique = (ventilation.communication || 0) + (ventilation.administratif || 0) + (ventilation.suivi || 0);
      var passeProduction = Math.max(0, T.passeJours - peripherique);
      var conso = Math.round(100 * passeProduction / T.prevuJours), reste = T.prevuJours - passeProduction;
      var ecart = conso - avanceProd;
      html += '<article class="indicateur"><h3>Temps de production pédagogique et numérique</h3><p class="grand">' +
        fr(passeProduction) + '<small> j sur ' + fr(T.prevuJours) + ' j prévus</small></p>' +
        jauge(conso, conso > 100 ? "var(--rouge)" : "var(--bleu-progression)") +
        '<p class="explication">' + conso + ' % consommés · <strong>' + fr(reste) + ' j restants</strong></p></article>';
      var C = T.concertation || {};
      var equipe = C.equipe || 0, employeurs = C.employeurs || 0, preparation = C.preparation || 0;
      var concertation = equipe + employeurs + preparation;
      html += '<article class="indicateur"><h3>Réunions, concertation et préparation</h3><p class="grand">' +
        fr(concertation) + '<small> j hors budget de production</small></p>' +
        '<div class="jauge jauge--repartition" role="img" aria-label="Répartition du temps de concertation"><span style="width:' +
        (concertation ? 100 * equipe / concertation : 0) + '%;--c:var(--jaune)"></span><span style="width:' +
        (concertation ? 100 * employeurs / concertation : 0) + '%;--c:var(--bleu-progression)"></span><span style="width:' +
        (concertation ? 100 * preparation / concertation : 0) + '%;--c:var(--turquoise)"></span></div>' +
        '<p class="explication">Équipe : ' + fr(equipe) + ' j · Employeurs : ' + fr(employeurs) +
        ' j · Préparation : ' + fr(preparation) + ' j</p></article>';
      html += '<article class="indicateur"><h3>Temps consacré aux activités périphériques</h3><p class="grand">' +
        fr(peripherique) + '<small> j hors production</small></p>' +
        '<div class="jauge" role="img" aria-label="Temps périphérique non imputé au budget de production"><span style="width:100%;--c:var(--gris)"></span></div>' +
        '<p class="explication">Communication et autres actions · total DINA : <strong>' +
        fr(T.passeJours + concertation) + ' j</strong></p></article>';
    }
    $("indicateurs").innerHTML = html;
  })();

  /* Synthèse */
  (function () {
    var n = compter(tous), total = tous.length, faits = n.valide + n.livre;
    $("synthese").innerHTML =
      '<div class="synthese-chiffres">' + STATUTS.map(function (s) {
        return '<div class="chiffre"><strong>' + n[s.code] + '</strong><span style="--c:' + s.couleur + '">' + s.libelle + "</span></div>";
      }).join("") + "</div>" + barre(n, total) +
      '<p class="synthese-texte">' + faits + " livrables validés ou livrés sur " + total + ". Le détail module par module est plus bas.</p>";
  })();


  /* Navigation : tableau de bord synthétique, production et déploiement. */
  var boutonsVues = Array.prototype.slice.call(document.querySelectorAll("[data-vue-bouton]"));
  var sectionsVues = Array.prototype.slice.call(document.querySelectorAll("[data-vues]"));
  function activerVue(vue, changerURL) {
    if (["ensemble", "production", "deploiement"].indexOf(vue) < 0) vue = "ensemble";
    boutonsVues.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-vue-bouton") === vue)); });
    sectionsVues.forEach(function (el) { el.hidden = el.getAttribute("data-vues").split(" ").indexOf(vue) < 0; });
    document.body.setAttribute("data-vue", vue);
    if (changerURL) { history.replaceState(null, "", location.pathname + location.search + "#vue-" + vue); window.scrollTo({ top: 0, behavior: "smooth" }); }
  }
  boutonsVues.forEach(function (b) { b.addEventListener("click", function () { activerVue(b.getAttribute("data-vue-bouton"), true); }); });
  activerVue((location.hash.match(/^#vue-(ensemble|production|deploiement)$/) || [])[1] || "ensemble", false);

  /* Priorités explicites : fondées sur les actions existantes et les validations en attente. */
  (function () {
    var priorites = [
      {groupe:"À faire", rang:"1", titre:"Poursuivre la validation technique SCORM dans LIANE", acteur:"Marc · service informatique", cible:"Test technique SCORM dans LIANE", note:"Rapports Moodle, affichage mobile, réglages de l’activité."},
      {groupe:"À faire", rang:"2", titre:"Préparer la mobilisation des experts spécialisés", acteur:"Marc · Marie-Noëlle", cible:"Validation experte du contenu juridique : experts en vacation et budget propre à DINA", note:"Corpus d’abord, relecture ciblée des modules ensuite."},
      {groupe:"En attente", rang:"3", titre:"Validation des 21 libellés de compétences", acteur:"Marie-Noëlle", cible:"Libellés des 21 compétences (« Je… »)", note:"Document transmis, retour attendu."},
      {groupe:"En attente", rang:"4", titre:"Validation des fiches outils du module 1", acteur:"Marie-Noëlle", cible:"Fiches outils du module 1", note:"Fiches accessibles dans le carnet du module."},
      {groupe:"À faire", rang:"5", titre:"Poursuivre M1 jusqu’à son intégration", acteur:"Marc", cible:"M1", note:"Consolider les contenus et finaliser la chaîne de production."}
    ];
    function urlCible(c) { return parTitre[c] ? "#" + parTitre[c]._id : (parCode[c] ? "#" + parCode[c]._id : "#t-parcours"); }
    $("priorites").innerHTML = ["À faire", "En attente"].map(function (g) {
      var items = priorites.filter(function (p) { return p.groupe === g; });
      return '<div class="priorites-colonne"><h3>' + esc(g) + '</h3><ol>' + items.map(function (p) {
        return '<li><a href="' + urlCible(p.cible) + '" data-cible-vue="production"><span class="priorites-rang">' + p.rang + '</span><span class="priorites-contenu"><strong>' + esc(p.titre) + '</strong><small>' + esc(p.acteur) + '</small><small>' + esc(p.note) + '</small></span><span aria-hidden="true">↗</span></a></li>';
      }).join("") + '</ol></div>';
    }).join("");
  })();

  /* Les prochains jalons affichés sont issus de la liste existante, hors historique franchi. */
  (function () {
    var prochains = D.jalons.filter(function (j) { return j.etat !== "franchi" && !j.pause; }).slice(0, 4);
    $("jalons-prochains").innerHTML = prochains.map(function (j) {
      return '<article class="jalon-prochain"><span>' + esc(j.date) + '</span><strong>' + esc(j.titre) + '</strong><p>' + esc(j.texte) + '</p></article>';
    }).join("");
  })();

  /* Avancement par groupe de livrables : % pondéré, livrables faits, temps de production */
  (function () {
    var T = D.temps || {}, PG = T.productionParGroupe || {};
    var groupes = [{ code: "parcours", titre: "Parcours de l'agent", texte: "Positionnement, prologue, 5 modules, bilan : les étapes de fabrication.", ancre: "t-parcours",
      etats: [].concat.apply([], D.parcours.map(function (p) { return p.etats; })), unite: "étapes de fabrication",
      duree: duree(D.parcours) }];
    D.categories.forEach(function (c, ic) {
      groupes.push({ code: c.code, titre: c.titre, texte: c.texte, ancre: "cat-" + c.code, etats: c.livrables.map(function (l) { return l.statut; }), unite: "livrables", duree: duree(c.livrables) });
    });
    if (D.backlog && D.backlog.items) groupes.push({ code: "moteur", titre: "Moteur et gabarits", texte: "Outil de production. Hors avancement global.", ancre: "t-backlog",
      etats: D.backlog.items.map(function (x) { return x.statut; }), unite: "évolutions", duree: duree(D.backlog.items), hors: true });
    $("groupes").innerHTML = groupes.map(function (g) {
      var u = g.etats.filter(function (e) { return e !== "sans_objet"; });
      var faits = u.filter(function (e) { return e === "valide" || e === "livre"; }).length, pc = pourcent(g.etats);
      var j = PG[g.code];
      return '<a class="groupe' + (g.hors ? " groupe--hors" : "") + '" href="#' + g.ancre + '"><div class="gr-tete"><h3>' + esc(g.titre) + '</h3><span class="gr-pc">' + pc + "<small>\u00a0%</small></span></div>" +
        '<div class="jauge" role="img" aria-label="' + pc + ' %"><span style="width:' + pc + '%;--c:var(--turquoise)"></span></div>' +
        '<p class="gr-chiffres">' + faits + " / " + u.length + " " + g.unite + " validés ou livrés</p>" +
        '<p class="gr-temps"><span>Production : <strong>' + (j != null ? fr(j) + "\u00a0j" : "—") + "</strong></span><span>" + esc(g.duree.texte) + "</span></p>" +
        '<p class="gr-texte">' + esc(g.texte) + "</p></a>";
    }).join("");
    var somme = Object.keys(PG).reduce(function (a, k) { return a + PG[k]; }, 0);
    $("groupes-note").textContent = "Temps de production par groupe, en jours temps plein" + (PG.divers ? ", plus " + fr(PG.divers) + " j de tâches diverses non rattachées" : "") +
      (T.passeJours != null && Math.abs(somme - T.passeJours) > 0.01 ? ". Attention : la répartition (" + fr(somme) + " j) ne fait pas le total saisi (" + fr(T.passeJours) + " j)." : ".") +
      " Le % pondère chaque statut comme l'avancement global.";
  })();

  /* Jalons */
  $("jalons").style.setProperty("--n", D.jalons.length);
  $("jalons").innerHTML = D.jalons.map(function (j) {
    return '<li class="jalon jalon--' + j.etat + (j.pause ? " jalon--pause" : "") + '">' +
      '<span class="jalon-date">' + esc(j.date) + "</span><h3>" + esc(j.titre) + "</h3><p>" + esc(j.texte) + "</p></li>";
  }).join("");

  /* En attente de */
  (function () {
    var parPersonne = {};
    Object.keys(D.personnes).forEach(function (k) { parPersonne[k] = []; });
    tous.forEach(function (l) {
      if (l.attente && parPersonne[l.attente]) parPersonne[l.attente].push({ titre: (l.statut === "a_valider" ? "Valider : " : "") + l.titre, detail: l.note, lien: l.lien, lienTexte: l.lienTexte, lies: '<a class="lien-livrable" href="#' + l._id + '">Voir le livrable</a>' });
    });
    D.parcours.forEach(function (p) {
      (p.actions || []).forEach(function (a) {
        [].concat(a.qui || []).forEach(function (k) {
          if (k !== "marc" && parPersonne[k]) parPersonne[k].push({ titre: p.code + " : " + a.titre, lien: a.doc, lienTexte: a.docTexte || "Ouvrir le document",
            lies: '<a class="lien-livrable" href="#' + p._id + '">Voir l\'étape du parcours</a>' });
        });
      });
    });
    (D.actions || []).forEach(function (a) {
      var qui = [].concat(a.attente), avec = function (k) { return qui.filter(function (x) { return x !== k; }).map(nom); };
      qui.forEach(function (k) {
        if (!parPersonne[k]) return;
        var autres = avec(k);
        parPersonne[k].push({ titre: a.titre, detail: [autres.length ? "Avec " + autres.join(", ") + "." : "", a.note, a.echeance ? "Échéance : " + a.echeance : ""].filter(Boolean).join(" "), lies: liens(a.lie, "Action « " + a.titre + " »") });
      });
    });
    $("attentes").innerHTML = Object.keys(D.personnes).filter(function (k) {
      return PERSONNES_TOUJOURS.indexOf(k) >= 0 || parPersonne[k].length;
    }).map(function (k) {
      var p = D.personnes[k], items = parPersonne[k];
      var init = p.nom.split(/[\s-]+/).filter(function (m) { return /^[A-ZÉÈ]/.test(m); }).map(function (m) { return m[0]; }).slice(0, 2).join("");
      return '<article class="personne"><div class="personne-tete"><span class="initiales" aria-hidden="true">' + esc(init) + "</span>" +
        "<div><h3>" + esc(p.nom) + '</h3><p class="personne-role">' + esc(p.role) + "</p></div>" +
        '<span class="compteur' + (items.length ? "" : " compteur--zero") + '" aria-label="' + items.length + ' en attente">' + items.length + "</span></div>" +
        (items.length ? "<ul>" + items.map(function (i) { return "<li>" + esc(i.titre) + (i.lien ? ' <a class="lien-doc" href="' + esc(i.lien) + '" target="_blank" rel="noopener">' + esc(i.lienTexte || "Ouvrir le document") + "</a>" : "") + (i.detail ? "<small>" + esc(i.detail) + "</small>" : "") + (i.lies ? '<span class="lies">' + i.lies + "</span>" : "") + "</li>"; }).join("") + "</ul>"
                      : '<p class="rien">Rien en attente pour l\'instant.</p>') + "</article>";
    }).join("");
  })();

  /* Matrice du parcours */
  (function () {
    var COURT = D.etapesFabricationCourt || [];
    var coche = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
    function pastille(s, etape) {
      var dedans = (s === "valide" || s === "livre") ? coche : "";
      return '<span class="pastille s-' + s + '" title="' + esc(etape + " : " + LIBELLE[s]) + '">' + dedans + '<span class="lien-evitement">' + esc(etape + " : " + LIBELLE[s]) + "</span></span>";
    }
    $("legende-matrice").innerHTML = STATUTS.map(function (s) { return s.code; }).concat("sans_objet").map(function (c) {
      return '<span class="leg"><span class="pastille s-' + c + '" aria-hidden="true">' + ((c === "valide" || c === "livre") ? coche : "") + "</span>" + esc(LIBELLE[c]) + "</span>";
    }).join("");
    var entete = '<div class="m-entete" aria-hidden="true"><div>Étape du parcours</div>' + D.etapesFabrication.map(function (e) { return "<div>" + esc(e) + "</div>"; }).join("") + "</div>";
    $("modules-apercu").innerHTML = D.parcours.map(function (p) {
      var pc = pourcent(p.etats);
      return '<a class="module-raccourci" href="#' + p._id + '"><span class="code">' + esc(p.code) + '</span><strong>' + esc(p.titre) + '</strong><span class="module-pourcent">' + pc + ' %</span><span class="module-mini-jauge"><span style="width:' + pc + '%"></span></span></a>';
    }).join("");
    $("matrice").innerHTML = entete + D.parcours.map(function (p) {
      var pc = pourcent(p.etats);
      var acts = (p.actions || []);
      var blocActions = '<div class="m-actions"><h4>Actions à conduire</h4>' + (acts.length ? "<ul>" + acts.map(function (a) {
          return "<li><span>" + esc(a.titre) + "</span>" + (a.doc ? ' <a class="lien-doc" href="' + esc(a.doc) + '" target="_blank" rel="noopener">' + esc(a.docTexte || "Ouvrir le document") + "</a>" : "") + (a.qui ? '<span class="m-qui">' + esc([].concat(a.qui).map(nom).join(", ")) + "</span>" : "") +
            '<span class="lies">' + liens(a.lie, p.code + " : « " + a.titre + " »") + "</span></li>";
        }).join("") + "</ul>" : '<p class="rien">Aucune action renseignée.</p>') + "</div>";
      return '<div class="m-ligne" id="' + p._id + '"><div class="m-titre"><span class="code">' + esc(p.code) + "</span><strong>" + esc(p.titre) + "</strong>" +
        '<span class="m-pc"><span class="jauge" role="img" aria-label="' + pc + ' %"><span style="width:' + pc + '%;--c:var(--turquoise)"></span></span><b>' + pc + "\u00a0%</b></span>" +
        (p.sousTitre ? "<small>" + esc(p.sousTitre) + "</small>" : "") + (p.note ? '<details class="m-note"><summary>Où en est-on</summary><small>' + esc(p.note) + "</small></details>" : "") +
        "<small>" + (p.duree != null ? "Durée prévue : " + fr(p.duree) + "\u00a0j" : '<span class="a-estimer">Durée à estimer</span>') + "</small></div>" +
        p.etats.map(function (s, i) {
          return '<div class="m-cell"><span class="etiquette-mobile" aria-hidden="true">' + esc(COURT[i] || D.etapesFabrication[i]) + "</span>" + pastille(s, D.etapesFabrication[i]) + "</div>";
        }).join("") + blocActions + "</div>";
    }).join("");
  })();

  /* Évolutions du moteur et des gabarits : trois priorités en colonnes. Hors indicateurs d’avancement, car ces travaux alimentent les livrables de production déjà comptés. */
  (function () {
    var B = D.backlog;
    if (!B || !B.items || !B.items.length) return;
    $("backlog-section").hidden = false;
    $("backlog-texte").textContent = B.texte || "";
    $("backlog").innerHTML = B.priorites.map(function (p, ip) {
      var items = B.items.filter(function (x) { return x.priorite === p.code; });
      var faits = items.filter(function (x) { return x.statut === "livre" || x.statut === "valide"; }).length;
      var du = duree(items.filter(function (x) { return x.statut !== "livre" && x.statut !== "valide"; }));
      return '<div class="bk-col bk-' + esc(p.code) + '">' +
        '<div class="bk-tete"><span class="bk-rang">' + (ip + 1) + "</span><div><h3>" + esc(p.titre) + '</h3><span class="bk-echeance">' + esc(p.echeance) + "</span></div></div>" +
        '<p class="bk-texte">' + esc(p.texte) + "</p>" +
        '<p class="bk-total">' + faits + " / " + items.length + " fait" + (faits > 1 ? "s" : "") + " · reste " + (du.estimes ? fr(du.total) + " j estimés" : "à estimer") + "</p>" +
        '<ol class="bk-liste">' + items.map(function (x) {
          var meta = [];
          meta.push(x.duree != null ? fr(x.duree) + " j" : '<span class="a-estimer">Durée à estimer</span>');
          if (x.valide) meta.push("Validation : " + esc(nom(x.valide)));
          return '<li class="bk-item" data-statut="' + esc(x.statut) + '"><div class="bk-ligne"><span class="bk-titre">' +
            (x.lien ? '<a href="' + esc(x.lien) + '">' + esc(x.titre) + "</a>" : esc(x.titre)) + "</span>" + puce(x.statut) + "</div>" +
            (x.note ? '<p class="bk-note">' + esc(x.note) + "</p>" : "") +
            '<p class="bk-lie">Livrable : ' + liens(x.lie, "Évolution « " + x.titre + " »") + "</p>" +
            '<div class="livrable-meta">' + meta.join('<span aria-hidden="true">·</span>') + "</div></li>";
        }).join("") + "</ol></div>";
    }).join("");
  })();

  /* Livrables par catégorie + filtres */
  (function () {
    $("categories").innerHTML = D.categories.map(function (c, ic) {
      var n = compter(c.livrables), faits = n.valide + n.livre, du = duree(c.livrables);
      return '<details class="categorie" id="cat-' + esc(c.code) + '" data-cat="' + ic + '">' +
        '<summary><div class="cat-texte"><h3>' + esc(c.titre) + "</h3><p>" + esc(c.texte) + "</p></div>" +
        '<div class="mini-barre">' + barre(n, c.livrables.length) + "<small>" + faits + " / " + c.livrables.length + " validés ou livrés</small><small>" + du.texte + "</small></div></summary>" +
        '<ul class="liste">' + c.livrables.map(function (l) {
          var meta = ['<span class="lot">' + esc(l.lot) + "</span>", "Responsable : " + esc(nom(l.qui))];
          if (l.valide) meta.push("Validation : " + esc(nom(l.valide)));
          if (l.echeance) meta.push("Échéance : " + esc(l.echeance));
          if (l.lien) meta.push('<a class="lien-doc" href="' + esc(l.lien) + '" target="_blank" rel="noopener">' + esc(l.lienTexte || "Ouvrir le document") + "</a>");
          meta.push(l.duree != null ? "Durée prévue : " + fr(l.duree) + "\u00a0j" : '<span class="a-estimer">Durée à estimer</span>');
          return '<li class="livrable" id="' + l._id + '" data-statut="' + l.statut + '"><span class="livrable-titre">' + esc(l.titre) + "</span>" + puce(l.statut) +
            '<div class="livrable-meta">' + meta.join("<span aria-hidden=\"true\">·</span>") + "</div>" +
            (l.note ? '<p class="livrable-note">' + esc(l.note) + "</p>" : "") + "</li>";
        }).join("") + '<li class="vide" hidden>Aucun livrable avec ce statut.</li></ul></details>';
    }).join("");

    var filtres = [{ code: "tous", libelle: "Tous (" + tous.length + ")" }].concat(STATUTS.map(function (s) {
      return { code: s.code, libelle: s.libelle + " (" + compter(tous)[s.code] + ")" };
    }));
    $("filtres").innerHTML = filtres.map(function (f, i) {
      return '<button type="button" class="filtre" data-filtre="' + f.code + '" aria-pressed="' + (i === 0) + '">' + esc(f.libelle) + "</button>";
    }).join("");

    $("filtres").addEventListener("click", function (e) {
      var b = e.target.closest(".filtre"); if (!b) return;
      var code = b.getAttribute("data-filtre");
      Array.prototype.forEach.call(document.querySelectorAll(".filtre"), function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      Array.prototype.forEach.call(document.querySelectorAll(".categorie"), function (cat) {
        var visibles = 0;
        Array.prototype.forEach.call(cat.querySelectorAll(".livrable"), function (li) {
          var ok = code === "tous" || li.getAttribute("data-statut") === code;
          li.hidden = !ok; if (ok) visibles++;
        });
        cat.querySelector(".vide").hidden = visibles > 0;
        cat.open = code !== "tous";
      });
    });
  })();

  /* Suivre un lien vers un livrable : ouvrir sa catégorie et le mettre en évidence */
  function suivre() {
    var id = decodeURIComponent(location.hash.slice(1)); if (!id) return;
    if (/^vue-(ensemble|production|deploiement)$/.test(id)) { activerVue(id.slice(4), false); return; }
    var el = document.getElementById(id); if (!el) return;
    if (el.closest && el.closest("[data-vues]")) {
      var bloc = el.closest("[data-vues]");
      var sections = bloc.getAttribute("data-vues").split(" ");
      if (bloc.hidden) activerVue(sections.indexOf("production") >= 0 ? "production" : "deploiement", false);
    }
    var cat = el.closest ? el.closest("details") : null;
    if (cat) cat.open = true;
    if (el.hidden) el.hidden = false;
    Array.prototype.forEach.call(document.querySelectorAll(".cible"), function (x) { x.classList.remove("cible"); });
    el.classList.add("cible");
    el.scrollIntoView({ block: "center" });
  }
  window.addEventListener("hashchange", suivre);
  suivre();

  if (liensCasses.length) {
    $("alertes-liens").hidden = false;
    $("alertes-liens").innerHTML = "<strong>Tâches sans livrable rattaché (" + liensCasses.length + ") :</strong><ul>" + liensCasses.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  }
})();
