/* DINA — démonstration des gabarits v0.1 (revue du 08-10).
   Le vrai moteur (engine.js) reprendra : plein écran, fil de parcours, décision + feedback. */
(function () {
  "use strict";
  var ordre = ["scene", "decision", "lecture", "fin"];
  var etapes = ["Entrée", "Épisode 2", "Évaluation", "Sortie"];
  var player = document.getElementById("player");
  var ecrans = document.querySelectorAll("[data-ecran]");
  var onglets = document.querySelectorAll("[data-voir]");
  var btnPrincipal = document.getElementById("btn-principal");
  var btnRetour = document.getElementById("btn-retour");
  var compteur = document.getElementById("compteur");
  var ctxEpisode = document.getElementById("ctx-episode");
  var courant = "scene";

  var VERDICTS = {
    adapte:   { libelle: "Conduite adaptée",  icone: "i-check-cercle",
      texte: "Reformuler l'objectif permet de savoir quelles informations comptent et quel niveau de certitude est attendu. C'est le premier réflexe face à une consigne courte." },
    partiel:  { libelle: "En partie adaptée", icone: "i-moitie",
      texte: "Clarifier est utile, mais Noa peut déjà comprendre l'essentiel seul. Solliciter Samuel en réunion pour une question qu'on peut résoudre soi-même le dérange inutilement." },
    risque:   { libelle: "Conduite risquée",  icone: "i-attention",
      texte: "La note part vite, mais avec un chiffre que Léna dit provisoire. Avant de mettre à jour, il faut savoir ce que la note doit permettre à Ariane." },
    inadapte: { libelle: "Conduite inadaptée", icone: "i-croix",
      texte: "La note est attendue aujourd'hui. Ne rien faire « par prudence » n'est pas une conduite professionnelle." }
  };

  function icone(id) { return '<svg class="icone" aria-hidden="true"><use href="#' + id + '"/></svg>'; }
  function badge(v) { return '<span class="verdict verdict--' + v + '">' + icone(VERDICTS[v].icone) + VERDICTS[v].libelle + "</span>"; }

  /* ---------- Fil de parcours ---------- */
  function majFil(etape) {
    var idx = etapes.indexOf(etape);
    document.querySelectorAll("#fil li").forEach(function (li, i) {
      li.className = i < idx ? "fait" : (i === idx ? "encours" : "");
      li.querySelector(".point").innerHTML = i < idx ? icone("i-check") : "";
      if (i === idx) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current");
      var etat = i < idx ? "terminé" : (i === idx ? "en cours" : "à venir");
      li.setAttribute("aria-label", etapes[i] + " : " + etat);
    });
    ctxEpisode.textContent = etape;
  }

  /* ---------- Affichage d'un écran ---------- */
  function afficher(nom) {
    courant = nom;
    ecrans.forEach(function (e) { e.hidden = e.dataset.ecran !== nom; });
    onglets.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.voir === nom)); });
    var ecran = document.querySelector('[data-ecran="' + nom + '"]');
    majFil(ecran.dataset.etape);
    compteur.textContent = ecran.dataset.compteur;
    btnRetour.disabled = ordre.indexOf(nom) === 0;
    btnRetour.style.visibility = btnRetour.disabled ? "hidden" : "visible";
    if (nom === "decision") preparerDecision();
    else majPrincipal("Continuer", false);
    btnPrincipal.hidden = nom === "fin";
    ecran.scrollTop = 0;
  }

  function majPrincipal(libelle, desactive) {
    btnPrincipal.innerHTML = libelle + " " + icone(libelle === "Valider" ? "i-check" : "i-droite");
    btnPrincipal.disabled = !!desactive;
  }

  /* ---------- Décision + feedback ---------- */
  var options = document.getElementById("options");
  var feedback = document.getElementById("feedback");
  var valide = false;

  function preparerDecision() {
    valide = false;
    options.classList.remove("verrouille");
    options.querySelectorAll(".option").forEach(function (o) {
      o.classList.remove("choisie");
      var b = o.querySelector(".verdict"); if (b) b.remove();
      o.querySelector("input").checked = false;
      o.querySelector("input").disabled = false;
    });
    feedback.hidden = true;
    majPrincipal("Valider", true);
  }

  options.addEventListener("change", function () { if (!valide) majPrincipal("Valider", false); });

  function valider() {
    var choix = options.querySelector("input:checked");
    if (!choix) return;
    valide = true;
    var opt = choix.closest(".option");
    var v = opt.dataset.verdict;
    opt.classList.add("choisie");
    opt.insertAdjacentHTML("beforeend", badge(v));
    options.classList.add("verrouille");
    options.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
    feedback.className = "feedback feedback--" + v;
    feedback.innerHTML = badge(v) + "<p>" + VERDICTS[v].texte + "</p>";
    feedback.hidden = false;
    majPrincipal("Continuer", false);
    feedback.scrollIntoView({ block: "nearest", behavior: "smooth" });
    btnPrincipal.focus({ preventScroll: true });
  }

  btnPrincipal.addEventListener("click", function () {
    if (courant === "decision" && !valide) { valider(); return; }
    var i = ordre.indexOf(courant);
    if (i < ordre.length - 1) afficher(ordre[i + 1]);
  });
  btnRetour.addEventListener("click", function () {
    var i = ordre.indexOf(courant);
    if (i > 0) afficher(ordre[i - 1]);
  });
  onglets.forEach(function (b) { b.addEventListener("click", function () { afficher(b.dataset.voir); }); });

  /* ---------- Plein écran ---------- */
  var btnPlein = document.getElementById("btn-plein");
  var demande = player.requestFullscreen || player.webkitRequestFullscreen;
  var quitter = document.exitFullscreen || document.webkitExitFullscreen;
  function enPlein() { return document.fullscreenElement || document.webkitFullscreenElement; }

  if (!demande) { btnPlein.hidden = true; }
  function basculer() {
    if (!demande) return;
    if (enPlein()) quitter.call(document); else demande.call(player);
  }
  function majPlein() {
    var actif = !!enPlein();
    btnPlein.setAttribute("aria-pressed", String(actif));
    btnPlein.title = actif ? "Quitter le plein écran (Échap)" : "Plein écran (touche F)";
    btnPlein.innerHTML = icone(actif ? "i-sortir-plein" : "i-plein") + '<span class="libelle">' + (actif ? "Réduire" : "Plein écran") + "</span>";
  }
  btnPlein.addEventListener("click", basculer);
  document.addEventListener("fullscreenchange", majPlein);
  document.addEventListener("webkitfullscreenchange", majPlein);
  document.addEventListener("keydown", function (e) {
    var t = e.target.tagName;
    if ((e.key === "f" || e.key === "F") && !e.ctrlKey && !e.metaKey && !e.altKey && t !== "INPUT" && t !== "TEXTAREA") basculer();
  });

  /* ---------- Vue téléphone (outil de revue) ---------- */
  document.getElementById("vue-tel").addEventListener("change", function (e) {
    document.getElementById("cadre").classList.toggle("telephone", e.target.checked);
  });

  afficher("scene");
})();
