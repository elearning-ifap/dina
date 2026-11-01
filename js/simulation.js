/* DINA — prototype de gabarit « simulation de dialogue » (01-11).
   Lit window.DINA_SIMULATION. Aucun texte pédagogique ici : uniquement des libellés d'interface.
   Hors moteur engine.js pour l'instant : à intégrer comme type « simulation » après validation. */
(function () {
  "use strict";
  var S = window.DINA_SIMULATION;
  function $(id) { return document.getElementById(id); }
  if (!S) { $("erreur-donnees").hidden = false; $("player").hidden = true; return; }

  var zone = $("ecran"), btnP = $("btn-principal"), btnR = $("btn-retour"), compteur = $("compteur");
  var MOUVEMENT = !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var HUMEURS = {
    neutre:  "attentif",
    agace:   "agacé",
    ferme:   "sur la défensive",
    presse:  "pressé",
    content: "satisfait",
    rassure: "rassuré"
  };
  var VERDICTS = {
    adapte:   { libelle: "Conduite adaptée",   icone: "i-check-cercle" },
    partiel:  { libelle: "En partie adaptée",  icone: "i-moitie" },
    risque:   { libelle: "Conduite risquée",   icone: "i-attention" },
    inadapte: { libelle: "Conduite inadaptée", icone: "i-croix" }
  };

  /* ---------- Utilitaires ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function ic(id, cls) { return '<svg class="icone' + (cls ? " " + cls : "") + '" aria-hidden="true"><use href="#' + id + '"/></svg>'; }
  function para(t) { return String(t || "").split(/\n\s*\n/).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""); }
  function badge(v) { var V = VERDICTS[v]; return V ? '<span class="verdict verdict--' + v + '">' + ic(V.icone) + V.libelle + "</span>" : ""; }
  function slug(nom) { return String(nom || "").split(" ")[0].toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9-]/g, ""); }
  /* Portrait : expression si elle existe (joel-agace.jpg), sinon portrait neutre, sinon initiale */
  function portrait(nom, humeur, cls) {
    var s = slug(nom), base = "assets/img/portraits/" + s;
    return '<span class="avatar ' + (cls || "") + '" aria-hidden="true"><img src="' + base + (humeur ? "-" + humeur : "") + '.jpg" alt="" data-repli="' + base + '.jpg" onerror="if(this.dataset.repli){this.src=this.dataset.repli;this.dataset.repli=\'\'}else{this.remove()}"><span class="avatar-init">' + esc(nom.charAt(0)) + "</span></span>";
  }
  function attendre(ms, f) { return setTimeout(f, MOUVEMENT ? ms : 0); }
  function condition(si) {
    if (!si) return true;
    return Object.keys(si).every(function (j) {
      var v = etat.jauges[j], c = si[j];
      return (c.min == null || v >= c.min) && (c.max == null || v <= c.max);
    });
  }
  function premiere(liste) { return liste.filter(function (x) { return condition(x.si); })[0] || liste[liste.length - 1]; }

  /* ---------- Bouton principal ---------- */
  var action = null;
  function principal(lib, f, opts) {
    opts = opts || {};
    btnP.hidden = !lib;
    btnP.innerHTML = esc(lib || "") + " " + ic(opts.icone || "i-droite");
    btnP.disabled = !!opts.desactive;
    action = f;
  }
  btnP.addEventListener("click", function () { if (action && !btnP.disabled) action(); });

  /* ---------- Bandeau ---------- */
  var ETAPES = ["Contexte", "Appel", "Bilan"];
  $("ctx-module").textContent = S.code + " · " + S.module;
  function bandeau(i) {
    $("ctx-episode").textContent = ETAPES[i];
    $("fil").innerHTML = ETAPES.map(function (e, k) {
      var cls = k === i ? "encours" : (k < i ? "fait" : "");
      return '<li class="' + cls + '"' + (k === i ? ' aria-current="step"' : "") + ' aria-label="' + e + " : " + (k === i ? "en cours" : k < i ? "terminé" : "à venir") + '"><span class="point">' + (k < i ? ic("i-check") : "") + '</span><span class="libelle">' + e + "</span></li>";
    }).join("");
  }

  /* ---------- État ---------- */
  var etat;
  function initialiser() {
    etat = { jauges: {}, chemin: [], fil: [], debut: 0, fini: false };
    S.jauges.forEach(function (j) { etat.jauges[j.id] = j.depart; });
  }

  /* ---------- Écran 1 : contexte ---------- */
  function ecranIntro() {
    initialiser();
    bandeau(0);
    btnR.style.visibility = "hidden";
    compteur.textContent = "";
    zone.className = "ecran ecran--lecture";
    zone.innerHTML = '<div class="colonne sim-intro">' +
      '<span class="surtitre">' + esc(S.intro.surtitre) + "</span><h1>" + esc(S.intro.titre) + "</h1>" +
      '<div class="sim-intro-corps"><div class="texte">' + para(S.intro.texte) + "</div>" +
      '<div class="sim-sonnerie" aria-hidden="true">' + portrait(S.personnage, "", "avatar--xl") + '<span class="sim-onde"></span><span class="sim-onde sim-onde--2"></span></div></div>' +
      '<div class="consigne-zone"><span class="cz-ico">' + ic("i-agir") + '</span><div class="cz-corps"><span class="cz-label">À vous</span><p class="cz-consigne">' + esc(S.intro.consigne) + "</p></div></div>" +
      '<p class="sim-mention">' + esc(S.mention) + "</p></div>";
    principal("Décrocher", ecranAppel, { icone: "i-telephone" });
    focusTitre();
  }

  /* ---------- Écran 2 : l'appel ---------- */
  var minuteur = null;
  function ecranAppel() {
    bandeau(1);
    btnR.style.visibility = "hidden";
    zone.className = "ecran ecran--sim";
    zone.innerHTML = '<div class="sim">' +
      '<aside class="sim-carte" aria-label="Appel en cours">' +
        '<div class="sim-portrait" id="sim-portrait"></div>' +
        '<strong class="sim-nom">' + esc(S.personnage) + "</strong>" +
        '<span class="sim-role">' + esc(S.role) + "</span>" +
        '<span class="sim-statut" id="sim-statut">' + ic("i-telephone") + ' <span>Appel en cours</span> <time id="sim-temps" aria-hidden="true">00:00</time></span>' +
        '<p class="sim-humeur" id="sim-humeur" aria-live="polite"></p>' +
      "</aside>" +
      '<section class="sim-fil" aria-label="Conversation">' +
        '<ol class="sim-transcript" id="sim-transcript" aria-live="polite"></ol>' +
        '<div class="sim-choix" id="sim-choix"></div>' +
      "</section></div>";
    principal("", null);
    etat.debut = Date.now();
    clearInterval(minuteur);
    minuteur = setInterval(function () {
      var el = $("sim-temps"); if (!el || etat.fini) return;
      var s = Math.floor((Date.now() - etat.debut) / 1000);
      el.textContent = String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
    }, 1000);
    humeur("neutre");
    jouerNoeud(S.debut);
  }
  function humeur(h) {
    etat.humeur = h;
    var p = $("sim-portrait"); if (!p) return;
    p.className = "sim-portrait humeur--" + h;
    p.innerHTML = portrait(S.personnage, h, "avatar--xl");
    $("sim-humeur").className = "sim-humeur humeur-txt--" + h;
    $("sim-humeur").innerHTML = '<span class="sim-pastille"></span>' + esc(S.personnage) + " semble " + esc(HUMEURS[h] || h);
  }
  function ajouter(html, cls) {
    var li = document.createElement("li");
    li.className = "sim-msg " + cls + (MOUVEMENT ? " sim-msg--entree" : "");
    li.innerHTML = html;
    $("sim-transcript").appendChild(li);
    li.scrollIntoView({ block: "nearest", behavior: MOUVEMENT ? "smooth" : "auto" });
    return li;
  }
  function bulleJoel(r) {
    return portrait(S.personnage, r.humeur, "") + '<div class="sim-msg-corps"><span class="sim-qui">' + esc(S.personnage) + '</span><div class="bulle bulle--oral">' + esc(r.texte) + "</div></div>";
  }
  function jouerNoeud(id) {
    if (id === "FIN") return terminer();
    var N = S.noeuds[id];
    var r = premiere(N.repliques);
    var frappe = ajouter('<span class="sim-frappe" aria-label="' + esc(S.personnage) + ' parle"><i></i><i></i><i></i></span>', "sim-msg--joel sim-msg--frappe");
    attendre(900 + Math.min(r.texte.length * 8, 900), function () {
      frappe.remove();
      humeur(r.humeur || "neutre");
      ajouter(bulleJoel(r), "sim-msg--joel");
      etat.fil.push({ qui: "joel", texte: r.texte, humeur: r.humeur });
      if (N.raccroche) {
        attendre(700, function () {
          etat.fini = true;
          var t = $("sim-temps").textContent;
          ajouter('<span class="sim-systeme">' + ic("i-telephone") + " " + esc(S.personnage) + " a raccroché · " + t + "</span>", "sim-msg--systeme");
          $("sim-statut").innerHTML = ic("i-telephone") + " <span>Appel terminé</span> <time>" + t + "</time>";
          $("sim-statut").classList.add("sim-statut--fin");
          proposer(id, N);
        });
      } else proposer(id, N);
    });
  }
  function proposer(id, N) {
    var c = $("sim-choix");
    c.innerHTML = '<div class="consigne-zone sim-consigne"><span class="cz-ico">' + ic(N.question ? "i-agir" : "i-oral") + '</span><div class="cz-corps"><span class="cz-label" tabindex="-1" id="sim-avous">À vous</span>' +
      '<p class="cz-consigne">' + esc(N.question || "Que répond Noa ?") + "</p></div></div>" +
      '<ul class="sim-options">' + N.choix.map(function (x, i) {
        return '<li><button type="button" class="option sim-option" data-i="' + i + '"><span class="lettre">' + esc(x.id) + "</span><span>" + esc(x.texte) + "</span></button></li>";
      }).join("") + "</ul>";
    if (MOUVEMENT) c.classList.add("sim-choix--entree");
    $("sim-avous").focus({ preventScroll: true });
    c.scrollIntoView({ block: "end", behavior: MOUVEMENT ? "smooth" : "auto" });
    c.querySelectorAll(".sim-option").forEach(function (b) {
      b.addEventListener("click", function () { choisir(id, N, N.choix[+b.dataset.i]); });
    });
  }
  function choisir(id, N, x) {
    $("sim-choix").innerHTML = "";
    $("sim-choix").classList.remove("sim-choix--entree");
    Object.keys(x.effets || {}).forEach(function (j) { etat.jauges[j] = Math.max(0, Math.min(100, etat.jauges[j] + x.effets[j])); });
    etat.chemin.push({ noeud: id, choix: x.id });
    if (N.question) {
      ajouter('<div class="sim-msg-corps"><span class="sim-qui">Noa, après l\'appel</span><div class="bulle bulle--note">' + esc(x.texte) + "</div></div>", "sim-msg--noa sim-msg--action");
    } else {
      ajouter(portrait("Noa", "", "") + '<div class="sim-msg-corps"><span class="sim-qui">Noa</span><div class="bulle bulle--oral">' + esc(x.texte) + "</div></div>", "sim-msg--noa");
    }
    etat.fil.push({ qui: "noa", texte: x.texte, noeud: id, choix: x.id, action: !!N.question });
    attendre(500, function () { jouerNoeud(x.suite); });
  }
  function terminer() {
    principal("Voir le bilan", ecranBilan);
    btnP.focus();
  }

  /* ---------- Écran 3 : bilan ---------- */
  function ecranBilan() {
    clearInterval(minuteur);
    bandeau(2);
    var F = premiere(S.fins);
    zone.className = "ecran ecran--lecture";
    var jauges = S.jauges.map(function (j) {
      var v = etat.jauges[j.id], niveau = v >= 60 ? "haut" : v >= 40 ? "moyen" : "bas";
      return '<div class="sim-jauge sim-jauge--' + niveau + '"><div class="sim-jauge-tete"><strong>' + esc(j.libelle) + "</strong><span>" + v + " / 100</span></div>" +
        '<div class="sim-jauge-barre" role="img" aria-label="' + esc(j.libelle) + " : " + v + ' sur 100"><span style="width:' + v + '%"></span><i style="left:' + j.depart + '%" title="Départ"></i></div>' +
        "<small>" + esc(j.aide) + "</small></div>";
    }).join("");
    zone.innerHTML = '<div class="colonne sim-bilan">' +
      '<div class="sim-bilan-tete">' + '<div class="sim-portrait humeur--' + esc(F.humeur) + '">' + portrait(S.personnage, F.humeur, "avatar--xl") + "</div>" +
        '<div><span class="surtitre">Fin de l\'appel</span><h1>' + esc(F.titre) + "</h1>" + badge(F.verdict) + "</div></div>" +
      '<div class="feedback feedback--' + esc(F.verdict) + '"><p>' + esc(F.texte) + "</p></div>" +
      '<h2 class="sim-sous">Ce que l\'appel a produit</h2><div class="sim-jauges">' + jauges + "</div>" +
      '<p class="sim-aide">Le trait marque le point de départ. Les deux jauges étaient cachées pendant l\'appel.</p>' +
      '<h2 class="sim-sous">' + ic("i-ampoule") + " Les repères à garder</h2>" +
      '<ul class="points">' + S.a_retenir.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul>" +
      '<p class="sim-relire"><button type="button" class="btn btn-secondaire" id="btn-relire">' + ic("i-oeil") + " Relire l'appel, réplique par réplique</button></p></div>";
    $("btn-relire").addEventListener("click", ecranRelire);
    btnR.style.visibility = "hidden";
    principal("Rejouer l'appel", ecranIntro, { icone: "i-recommencer" });
    focusTitre();
  }

  /* ---------- Relecture annotée ---------- */
  function ecranRelire() {
    zone.className = "ecran ecran--lecture";
    var html = etat.fil.map(function (m) {
      if (m.qui === "joel") return '<li class="sim-msg sim-msg--joel">' + bulleJoel(m) + "</li>";
      var N = S.noeuds[m.noeud], x = N.choix.filter(function (c) { return c.id === m.choix; })[0];
      var autres = N.choix.filter(function (c) { return c.id !== m.choix; });
      return '<li class="sim-msg sim-msg--noa' + (m.action ? " sim-msg--action" : "") + '">' + (m.action ? "" : portrait("Noa", "", "")) +
        '<div class="sim-msg-corps"><span class="sim-qui">' + (m.action ? "Noa, après l'appel" : "Noa") + '</span><div class="bulle ' + (m.action ? "bulle--note" : "bulle--oral") + '">' + esc(m.texte) + "</div>" +
        '<div class="sim-note sim-note--' + esc(x.verdict) + '">' + badge(x.verdict) + "<p>" + esc(x.annotation) + "</p>" +
        '<details><summary>Les autres réponses possibles</summary><ul>' + autres.map(function (c) {
          return "<li>" + badge(c.verdict) + "<q>" + esc(c.texte) + "</q><p>" + esc(c.annotation) + "</p></li>";
        }).join("") + "</ul></details></div></div></li>";
    }).join("");
    zone.innerHTML = '<div class="colonne sim-relecture"><span class="surtitre">Relecture</span><h1>L\'appel, réplique par réplique</h1>' +
      '<p class="sim-aide">Sous chaque réplique de Noa : ce qu\'elle a produit, et ce que les autres réponses auraient donné.</p>' +
      '<ol class="sim-transcript sim-transcript--relue">' + html + "</ol></div>";
    btnR.style.visibility = "visible";
    btnR.onclick = function () { btnR.onclick = null; ecranBilan(); };
    principal("Rejouer l'appel", ecranIntro, { icone: "i-recommencer" });
    focusTitre();
  }

  function focusTitre() {
    zone.scrollTop = 0;
    var h = zone.querySelector("h1");
    if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  }

  /* ---------- Plein écran ---------- */
  var btnPlein = $("btn-plein"), player = $("player");
  if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled)) btnPlein.hidden = true;
  btnPlein.addEventListener("click", function () {
    if (document.fullscreenElement) document.exitFullscreen(); else (player.requestFullscreen || player.webkitRequestFullscreen).call(player);
  });

  ecranIntro();
})();
