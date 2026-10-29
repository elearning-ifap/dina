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

  /* Indicateurs : avancement global et temps passé */
  (function () {
    var P = D.ponderation || { a_faire: 0, en_cours: 0.5, a_valider: 0.8, valide: 1, livre: 1 };
    var unites = [];
    tous.forEach(function (l) { unites.push(l.statut); });
    D.parcours.forEach(function (p) { p.etats.forEach(function (e) { if (e !== "sans_objet") unites.push(e); }); });
    var somme = unites.reduce(function (a, e) { return a + (P[e] || 0); }, 0);
    var avance = unites.length ? Math.round(100 * somme / unites.length) : 0;

    function jours(d) { var m = String(d || "").split("-"); return m.length === 3 ? Date.UTC(+m[2], +m[1] - 1, +m[0]) / 864e5 : 0; }
    function fr(x) { return String(Math.round(x * 100) / 100).replace(".", ","); }
    function jauge(pc, couleur) {
      return '<div class="jauge" role="img" aria-label="' + pc + ' %"><span style="width:' + Math.min(pc, 100) + "%;--c:" + couleur + '"></span></div>';
    }
    var html = '<article class="indicateur"><h3>Avancement global</h3><p class="grand">' + avance + "<small> %</small></p>" + jauge(avance, "var(--turquoise)") +
      '<p class="explication">Calculé sur ' + unites.length + " unités : les " + tous.length + " livrables et les " + (unites.length - tous.length) +
      " étapes de fabrication des modules. À faire 0\u00a0%, en cours " + Math.round(100 * P.en_cours) + "\u00a0%, à valider " + Math.round(100 * P.a_valider) + "\u00a0%, validé ou livré 100\u00a0%.</p></article>";

    var T = D.temps;
    if (T && T.prevuJours) {
      var conso = Math.round(100 * T.passeJours / T.prevuJours), reste = T.prevuJours - T.passeJours;
      var ecart = conso - avance;
      html += '<article class="indicateur"><h3>Temps passé</h3><p class="grand">' + fr(T.passeJours) + "<small> j sur " + fr(T.prevuJours) + " j prévus</small></p>" +
        jauge(conso, conso > 100 ? "var(--rouge)" : "var(--bleu-progression)") +
        '<p class="explication">' + conso + "\u00a0% de la charge consommée, " + fr(reste) + " j restants. Jours temps plein, dernière saisie le " + esc(T.arreteAu) + ".</p>" +
        '<p class="comparaison ' + (ecart > 10 ? "c-alerte" : "c-ok") + '">' +
        (ecart > 10 ? "Le temps consommé dépasse l'avancement de " + ecart + " points."
                    : "L'avancement (" + avance + "\u00a0%) est en phase ou en avance sur le temps consommé (" + conso + "\u00a0%).") + "</p>" +
        (jours(D.miseAJour) - jours(T.arreteAu) > 3 ? '<p class="explication">Saisie du temps antérieure à la mise à jour des statuts : la comparaison est à prendre avec prudence.</p>' : "") + "</article>";
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
