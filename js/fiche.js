/* DINA — rendu des fiches outils imprimables (A4) à partir de window.DINA_DATA.fiches.
   fiche.html?id=FICHE-E1 | FICHE-E2 | FICHE-E3. Aucun texte pédagogique ici. */
(function () {
  "use strict";
  var D = window.DINA_DATA, cible = document.getElementById("fiche-cible");
  var id = (location.search.match(/[?&]id=([^&]+)/) || [])[1];
  var f = D && D.fiches && D.fiches[decodeURIComponent(id || "")];
  if (!f) { cible.innerHTML = '<p class="fiche-erreur">Fiche introuvable.</p>'; return; }
  var M = D.module;
  var ICONES = { agir: "i-agir", informer: "i-informer", valider: "i-valider", alerter: "i-alerter" };
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function inline(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>'); }
  function ic(i) { return '<svg class="icone" aria-hidden="true"><use href="#' + i + '"/></svg>'; }
  document.title = "DINA — " + f.titre;

  var corps = "";
  if (f.modele === "chemin") {
    corps += "<h2>Quatre questions, dans l'ordre</h2><ol class=\"fiche-chemin\">" + f.questions.map(function (q, i) {
      var si = [];
      if (q.oui) si.push("Si <strong>oui</strong> → " + esc(f.conduites[q.oui].titre));
      if (q.non) si.push("Si <strong>non</strong> → " + esc(f.conduites[q.non].titre));
      return '<li><span class="num">' + (i + 1) + '</span><span class="q">' + esc(q.q) + '</span><span class="si">' + si.join("<br>") + "</span></li>";
    }).join("") + "</ol>";
    corps += '<h2>Ma conduite</h2><div class="fiche-conduites">' + Object.keys(f.conduites).map(function (k) {
      var c = f.conduites[k];
      return '<div class="c-' + k + '"><strong>' + ic(ICONES[k]) + esc(c.titre) + "</strong>" + esc(c.texte) + "</div>";
    }).join("") + "</div>";
    corps += '<p class="alerte">' + inline(f.alerte) + "</p>";
  } else if (f.modele === "checklist") {
    corps += "<h2>Avant d'agir, je vérifie</h2><ol class=\"fiche-checklist\">" + f.questions.map(function (q, i) {
      return '<li><span class="num">' + (i + 1) + '</span><div><span class="q">' + esc(q.q) + "</span>" + (q.verifier ? '<span class="verif">Comment vérifier : ' + q.verifier.map(inline).join(" · ") + "</span>" : "") +
        (q.si_non ? '<span class="si">Sinon → ' + inline(q.si_non) + "</span>" : "") + "</div></li>";
    }).join("") + "</ol>";
    if (f.conclusion) corps += '<div class="fiche-conclusion"><strong>' + ic("i-informer") + esc(f.conclusion.titre) + "</strong>" + inline(f.conclusion.texte) + "</div>";
    if (f.alerte) corps += '<p class="alerte">' + inline(f.alerte) + "</p>";
  } else if (f.modele === "formulaire") {
    corps += f.sections.map(function (s) {
      /* Section à cocher (27-10) : libellé large, précision après « — », zone de note, case à droite */
      if (s.coches) return "<h2>" + esc(s.titre) + '</h2><div class="coches">' + s.champs.map(function (c, k) {
        var parts = String(c).split(" — "), nom = s.titre + "-" + k;
        return '<div class="coche"><span class="coche-lib"><strong>' + esc(parts[0]) + "</strong>" + (parts[1] ? '<small>' + esc(parts.slice(1).join(" — ")) + "</small>" : "") +
          '</span><textarea rows="1" name="' + esc(nom) + '" aria-label="' + esc(parts[0]) + ' : note"></textarea><input type="checkbox" aria-label="' + esc(parts[0]) + ' : fait"></div>';
      }).join("") + "</div>";
      return "<h2>" + esc(s.titre) + '</h2><div class="champs">' + s.champs.map(function (c, k) {
        var nom = s.titre + "-" + k;
        return '<label class="champ"><span>' + esc(c) + '</span><textarea rows="1" name="' + esc(nom) + '" aria-label="' + esc(c) + '"></textarea></label>';
      }).join("") + "</div>";
    }).join("");
  } else if (f.modele === "aide-memoire") {
    var NOMBRES = ["", "Une étape", "Deux étapes", "Trois étapes", "Quatre étapes", "Cinq étapes", "Six étapes", "Sept étapes"];
    corps += '<h2>' + esc(f.titre_etapes || NOMBRES[f.etapes.length] || "Les étapes") + '</h2><ol class="fiche-etapes">' + f.etapes.map(function (e) { return "<li><strong>" + esc(e.titre) + "</strong><span>" + inline(e.texte) + "</span></li>"; }).join("") + "</ol>";
    corps += '<h2>' + esc(f.titre_types || "Quel type de demande ?") + '</h2><div class="fiche-types">' + f.types.map(function (t) {
      var titre = t.lien ? '<a href="' + esc(t.lien) + '" target="_blank" rel="noopener">' + esc(t.titre) + "</a>" : esc(t.titre);
      /* Site web (27-10) : picto, adresse en évidence, puis ce qu'on y trouve */
      if (t.lien) return '<div class="site"><strong>' + ic("i-site") + titre + '</strong><span class="lien">' + esc(t.lien.replace(/^https?:\/\/(www\.)?/, "")) +
        '</span><span class="site-contenu"><em>Ce qu\'on y trouve :</em> ' + inline(t.texte) + "</span></div>";
      return "<div><strong>" + titre + "</strong>" + inline(t.texte) + "</div>"; }).join("") + "</div>";
    if (f.exemple) corps += '<h2>Exemple</h2><blockquote class="fiche-exemple">' + inline(f.exemple) + "</blockquote>";
  }
  if (f.a_retenir) corps += '<p class="retenir">' + ic("i-ampoule") + inline(f.a_retenir) + "</p>";
  if (f.reperes) {
    corps += '<h2>Mes repères dans mon service</h2><div class="reperes' + (f.reperes.length > 2 ? " reperes--2col" : "") + '">' + f.reperes.map(function (r) { return "<p><span>" + esc(r) + " :</span></p>"; }).join("") + "</div>";
  }

  cible.innerHTML = '<article class="fiche fiche--' + esc(f.modele) + '" aria-label="' + esc(f.titre) + '">' +
    '<div class="fiche-bandeau"><img src="assets/logo/logo-dina.svg" alt="DINA" style="height:17mm"><span class="type">OUTIL</span></div>' +
    "<h1>" + esc(f.titre) + '</h1><p class="quand"><strong>Quand l\'utiliser ?</strong> ' + inline(f.quand) + "</p>" + (f.mention ? '<p class="mention">' + inline(f.mention) + "</p>" : "") + (f.definition ? '<p class="definition">' + inline(f.definition) + "</p>" : "") + corps +
    '<div class="fiche-pied"><span>Module ' + esc(M.code) + " — " + esc(M.titre) + " · " + esc(f.code) + " · Compétences " + esc((f.competences || []).join(", ")) + "<br>DINA, IFAP — version " + esc(f.version) + "</span>" +
    '<span style="text-align:right">Un dispositif de l\'IFAP<br>Institut de formation de l\'administration publique</span></div></article>';

  document.getElementById("consigne-fiche").textContent = f.modele === "formulaire"
    ? "Complétez les champs à l'écran, puis imprimez ou enregistrez en PDF. Rien n'est enregistré."
    : "Imprimez la fiche ou enregistrez-la en PDF.";
  document.getElementById("imprimer").addEventListener("click", function () { window.print(); });
  /* Champs : hauteur ajustée au contenu */
  cible.querySelectorAll("textarea").forEach(function (t) {
    t.addEventListener("input", function () { t.style.height = "auto"; t.style.height = t.scrollHeight + "px"; });
  });
})();
