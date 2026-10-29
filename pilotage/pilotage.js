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

  var tous = [];
  D.categories.forEach(function (c) { c.livrables.forEach(function (l) { tous.push(l); }); });

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

  /* Synthèse */
  (function () {
    var n = compter(tous), total = tous.length, faits = n.valide + n.livre;
    $("synthese").innerHTML =
      '<div class="synthese-chiffres">' + STATUTS.map(function (s) {
        return '<div class="chiffre"><strong>' + n[s.code] + '</strong><span style="--c:' + s.couleur + '">' + s.libelle + "</span></div>";
      }).join("") + "</div>" + barre(n, total) +
      '<p class="synthese-texte">' + faits + " livrables validés ou livrés sur " + total + ". Le détail module par module est plus bas.</p>";
  })();

  /* Jalons */
  $("jalons").innerHTML = D.jalons.map(function (j) {
    return '<li class="jalon jalon--' + j.etat + (j.pause ? " jalon--pause" : "") + '">' +
      '<span class="jalon-date">' + esc(j.date) + "</span><h3>" + esc(j.titre) + "</h3><p>" + esc(j.texte) + "</p></li>";
  }).join("");

  /* En attente de */
  (function () {
    var parPersonne = {};
    Object.keys(D.personnes).forEach(function (k) { parPersonne[k] = []; });
    tous.forEach(function (l) {
      if (l.attente && parPersonne[l.attente]) parPersonne[l.attente].push({ titre: (l.statut === "a_valider" ? "Valider : " : "") + l.titre, detail: l.note });
    });
    (D.actions || []).forEach(function (a) {
      if (parPersonne[a.attente]) parPersonne[a.attente].push({ titre: a.titre, detail: [a.note, a.echeance ? "Échéance : " + a.echeance : ""].filter(Boolean).join(" ") });
    });
    $("attentes").innerHTML = Object.keys(D.personnes).filter(function (k) {
      return PERSONNES_TOUJOURS.indexOf(k) >= 0 || parPersonne[k].length;
    }).map(function (k) {
      var p = D.personnes[k], items = parPersonne[k];
      var init = p.nom.split(/[\s-]+/).filter(function (m) { return /^[A-ZÉÈ]/.test(m); }).map(function (m) { return m[0]; }).slice(0, 2).join("");
      return '<article class="personne"><div class="personne-tete"><span class="initiales" aria-hidden="true">' + esc(init) + "</span>" +
        "<div><h3>" + esc(p.nom) + '</h3><p class="personne-role">' + esc(p.role) + "</p></div>" +
        '<span class="compteur' + (items.length ? "" : " compteur--zero") + '" aria-label="' + items.length + ' en attente">' + items.length + "</span></div>" +
        (items.length ? "<ul>" + items.map(function (i) { return "<li>" + esc(i.titre) + (i.detail ? "<small>" + esc(i.detail) + "</small>" : "") + "</li>"; }).join("") + "</ul>"
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
    $("matrice").innerHTML = entete + D.parcours.map(function (p) {
      return '<div class="m-ligne"><div class="m-titre"><span class="code">' + esc(p.code) + "</span><strong>" + esc(p.titre) + "</strong>" +
        (p.sousTitre ? "<small>" + esc(p.sousTitre) + "</small>" : "") + (p.note ? "<small>" + esc(p.note) + "</small>" : "") + "</div>" +
        p.etats.map(function (s, i) {
          return '<div class="m-cell"><span class="etiquette-mobile" aria-hidden="true">' + esc(COURT[i] || D.etapesFabrication[i]) + "</span>" + pastille(s, D.etapesFabrication[i]) + "</div>";
        }).join("") + "</div>";
    }).join("");
  })();

  /* Livrables par catégorie + filtres */
  (function () {
    $("categories").innerHTML = D.categories.map(function (c, ic) {
      var n = compter(c.livrables), faits = n.valide + n.livre;
      return '<details class="categorie" data-cat="' + ic + '"' + (ic < 1 ? "" : "") + ">" +
        '<summary><div class="cat-texte"><h3>' + esc(c.titre) + "</h3><p>" + esc(c.texte) + "</p></div>" +
        '<div class="mini-barre">' + barre(n, c.livrables.length) + "<small>" + faits + " / " + c.livrables.length + " validés ou livrés</small></div></summary>" +
        '<ul class="liste">' + c.livrables.map(function (l) {
          var meta = ['<span class="lot">' + esc(l.lot) + "</span>", "Responsable : " + esc(nom(l.qui))];
          if (l.valide) meta.push("Validation : " + esc(nom(l.valide)));
          if (l.echeance) meta.push("Échéance : " + esc(l.echeance));
          return '<li class="livrable" data-statut="' + l.statut + '"><span class="livrable-titre">' + esc(l.titre) + "</span>" + puce(l.statut) +
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
})();
