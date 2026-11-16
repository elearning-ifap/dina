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

  /* Indicateurs : avancement global et temps passé */
  (function () {
    var P = D.ponderation || { a_faire: 0, en_cours: 0.5, a_valider: 0.8, valide: 1, livre: 1 };
    var unites = [];
    tous.forEach(function (l) { unites.push(l.statut); });
    D.parcours.forEach(function (p) { p.etats.forEach(function (e) { if (e !== "sans_objet") unites.push(e); }); });
    var somme = unites.reduce(function (a, e) { return a + (P[e] || 0); }, 0);
    var avance = unites.length ? Math.round(100 * somme / unites.length) : 0;

    function jours(d) { var m = String(d || "").split("-"); return m.length === 3 ? Date.UTC(+m[2], +m[1] - 1, +m[0]) / 864e5 : 0; }
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
      html += '<article class="indicateur"><h3>Temps de production</h3><p class="grand">' + fr(T.passeJours) + "<small> j sur " + fr(T.prevuJours) + " j prévus</small></p>" +
        jauge(conso, conso > 100 ? "var(--rouge)" : "var(--bleu-progression)") +
        '<p class="explication">' + conso + "\u00a0% de la charge consommée, " + fr(reste) + " j restants. Jours temps plein, dernière saisie le " + esc(T.arreteAu) + ".</p>" +
        '<p class="explication">Réunions, concertation et préparation : en plus, hors des ' + fr(T.prevuJours) + " j (voir à côté).</p>" +
        '<p class="comparaison ' + (ecart > 10 ? "c-alerte" : "c-ok") + '">' +
        (ecart > 10 ? "Le temps consommé dépasse l'avancement de " + ecart + " points."
                    : "L'avancement (" + avance + "\u00a0%) est en phase ou en avance sur le temps consommé (" + conso + "\u00a0%).") + "</p>" +
        (function () {
          var du = duree(tous.concat(D.parcours)), nb = tous.length + D.parcours.length;
          if (!du.estimes) return '<p class="explication">Durées de production des livrables : à estimer.</p>';
          var depasse = du.total > T.prevuJours;
          return '<p class="comparaison ' + (depasse ? "c-alerte" : "c-ok") + '">Durée prévue des livrables : ' + fr(du.total) + "\u00a0j pour " + du.estimes + " éléments estimés sur " + nb +
            (depasse ? ", au-delà des " + fr(T.prevuJours) + "\u00a0j annoncés." : ".") + "</p>";
        })() +
        (jours(D.miseAJour) - jours(T.arreteAu) > 3 ? '<p class="explication">Saisie du temps antérieure à la mise à jour des statuts : la comparaison est à prendre avec prudence.</p>' : "") + "</article>";
    }
    var C = T && T.concertation;
    if (C) {
      var RUB = [
        { cle: "equipe", titre: "Équipe projet", texte: "Réunions avec Marie-Noëlle Blanck, la direction" },
        { cle: "employeurs", titre: "Employeurs", texte: "COPIL, séances, échanges avec les DRH" },
        { cle: "preparation", titre: "Préparation et suites", texte: "Supports, comptes rendus, courriels" }
      ];
      var totC = RUB.reduce(function (a, r) { return a + (C[r.cle] || 0); }, 0);
      var totalTout = (T.passeJours || 0) + totC;
      html += '<article class="indicateur"><h3>Concertation et préparation</h3><p class="grand">' + fr(totC) + "<small> j, hors des " + fr(T.prevuJours) + " j</small></p>" +
        '<ul class="rubriques">' + RUB.map(function (r) {
          var v = C[r.cle] || 0, pc = totC ? Math.round(100 * v / totC) : 0;
          return '<li><div class="rub-ligne"><strong>' + esc(r.titre) + "</strong><span>" + fr(v) + "\u00a0j</span></div>" + jauge(pc, "var(--jaune)") + "<small>" + esc(r.texte) + "</small></li>";
        }).join("") + "</ul>" +
        ((T.contributions || []).length ? '<p class="explication"><strong>Temps de l\'équipe, hors réunions avec Marc :</strong> ' + T.contributions.map(function (c) {
          return esc(nom(c.qui)) + " : " + (c.jours == null ? "pas encore saisi" : fr(c.jours) + "\u00a0j") + (c.texte ? " (" + esc(c.texte.toLowerCase()) + ")" : "");
        }).join(" ; ") + ".</p>" : "") +
        '<p class="explication">Temps total sur DINA : ' + fr(totalTout) + " j, dont " + (totalTout ? Math.round(100 * totC / totalTout) : 0) + "\u00a0% de concertation et de préparation.</p></article>";
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

  /* Évolutions du moteur et des gabarits : trois priorités en colonnes. Hors avancement global. */
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
    var el = document.getElementById(id); if (!el) return;
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
