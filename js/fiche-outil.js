/* DINA — fiche outil M2-E2-03 v0.1 : chemin de décision pas à pas + bascule écran / A4 + plein écran.
   Textes provisoires : la source sera le storyboard (écran M2-E2-OUT) via build.py. */
(function () {
  "use strict";
  var QUESTIONS = [
    { q: "Est-ce dans ma mission ?", aide: "Ma fiche de poste, la consigne reçue, les habitudes du service.", non: "informer" },
    { q: "L'information est-elle suffisamment fiable ?", aide: "Source connue, chiffre consolidé, version à jour.", non: "informer" },
    { q: "Mon action est-elle réversible ?", aide: "Puis-je revenir en arrière sans conséquence si je me trompe ?", non: "valider" },
    { q: "Engage-t-elle une décision ou une position qui dépasse mon rôle ?", aide: "Un choix politique, un engagement du service, une réponse officielle…", oui: "valider", non: "agir" }
  ];
  var CONDUITES = {
    agir:     { titre: "J'agis",          icone: "i-agir",     texte: "C'est dans ma marge. J'avance et je rends compte si c'est utile." },
    informer: { titre: "J'informe",       icone: "i-informer", texte: "Je préviens la bonne personne de ce que je fais ou de ce qui reste incertain." },
    valider:  { titre: "Je fais valider", icone: "i-valider",  texte: "Je prépare une proposition et je la soumets avant d'agir." },
    alerter:  { titre: "J'alerte",        icone: "i-alerter",  texte: "Je préviens mon responsable sans attendre." }
  };
  var chemin = document.getElementById("chemin");
  var sortie = document.getElementById("conduite");
  var reponses = [];

  function ic(id) { return '<svg class="icone" aria-hidden="true"><use href="#' + id + '"/></svg>'; }

  function issue() {
    for (var i = 0; i < reponses.length; i++) {
      var r = reponses[i], Q = QUESTIONS[i];
      if (r === "non" && Q.non) return Q.non;
      if (r === "oui" && Q.oui) return Q.oui;
    }
    return null;
  }

  function rendre() {
    var fin = issue();
    var active = fin ? -1 : reponses.length;
    chemin.innerHTML = QUESTIONS.map(function (Q, i) {
      var etat = i < reponses.length ? "repondue" : (i === active ? "active" : "attente");
      if (fin && i >= reponses.length) etat = "attente";
      var corps = '<p class="q" id="q' + i + '">' + Q.q + '</p><p class="aide">' + Q.aide + "</p>";
      if (i < reponses.length) corps += '<span class="reponse-donnee">' + ic("i-check") + " " + (reponses[i] === "oui" ? "Oui" : "Non") + "</span>";
      if (i === active) corps += '<div class="reponses" role="group" aria-labelledby="q' + i + '"><button type="button" class="btn btn-principal" data-r="oui">Oui</button><button type="button" class="btn btn-secondaire" data-r="non">Non</button></div>';
      return '<li class="etape-q ' + etat + '"><span class="num">' + (i < reponses.length ? ic("i-check") : i + 1) + "</span><div>" + corps + "</div></li>";
    }).join("");
    if (fin) {
      var c = CONDUITES[fin];
      sortie.className = "conduite c-" + fin;
      sortie.innerHTML = '<span class="ico">' + ic(c.icone) + "</span><div><h2>" + c.titre + "</h2><p>" + c.texte + "</p></div>";
      sortie.hidden = false;
    } else {
      sortie.hidden = true;
      var b = chemin.querySelector(".active .btn");
      if (b && reponses.length) b.focus({ preventScroll: true });
    }
  }

  chemin.addEventListener("click", function (e) {
    var b = e.target.closest("[data-r]");
    if (!b) return;
    reponses.push(b.dataset.r);
    rendre();
    if (issue()) sortie.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
  document.getElementById("recommencer").addEventListener("click", function () { reponses = []; rendre(); });

  /* Bascule écran / fiche A4 */
  document.querySelectorAll("[data-vue]").forEach(function (b) {
    b.addEventListener("click", function () {
      var v = b.dataset.vue;
      if (document.fullscreenElement) document.exitFullscreen();
      document.getElementById("vue-ecran").hidden = v !== "ecran";
      document.getElementById("vue-fiche").hidden = v !== "fiche";
      document.querySelectorAll(".revue [data-vue]").forEach(function (o) { o.setAttribute("aria-pressed", String(o.dataset.vue === v)); });
      window.scrollTo(0, 0);
    });
  });

  /* Plein écran (même comportement que le gabarit) */
  var player = document.getElementById("player");
  var btnPlein = document.getElementById("btn-plein");
  var demande = player.requestFullscreen || player.webkitRequestFullscreen;
  var quitter = document.exitFullscreen || document.webkitExitFullscreen;
  function enPlein() { return document.fullscreenElement || document.webkitFullscreenElement; }
  if (!demande) btnPlein.hidden = true;
  function basculer() { if (!demande) return; if (enPlein()) quitter.call(document); else demande.call(player); }
  function majPlein() {
    var a = !!enPlein();
    btnPlein.setAttribute("aria-pressed", String(a));
    btnPlein.title = a ? "Quitter le plein écran (Échap)" : "Plein écran (touche F)";
    btnPlein.innerHTML = ic(a ? "i-sortir-plein" : "i-plein") + '<span class="libelle">' + (a ? "Réduire" : "Plein écran") + "</span>";
  }
  btnPlein.addEventListener("click", basculer);
  document.addEventListener("fullscreenchange", majPlein);
  document.addEventListener("webkitfullscreenchange", majPlein);
  document.addEventListener("keydown", function (e) {
    var t = e.target.tagName;
    if ((e.key === "f" || e.key === "F") && !e.ctrlKey && !e.metaKey && !e.altKey && t !== "INPUT" && t !== "TEXTAREA" && !document.getElementById("vue-ecran").hidden) basculer();
  });

  rendre();
})();
