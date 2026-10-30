/* DINA — catalogue vivant des gabarits (CAN-GAB-01 § 14).
   Partie éditoriale : le tableau GABARITS (usage, règles, exemple joué). Le reste est calculé depuis data/*.js. */
(function () {
  "use strict";

  var SOURCES = [
    { code: "positionnement", nom: "Positionnement" },
    { code: "prologue", nom: "Prologue" },
    { code: "m1", nom: "M1" },
    { code: "m2", nom: "M2", note: "storyboard antérieur, hors démonstrateur" }
  ];

  var FAMILLES = [
    { id: "structure", nom: "Structure du parcours" },
    { id: "recit", nom: "Récit" },
    { id: "apports", nom: "Apports de savoirs" },
    { id: "activites", nom: "Décisions et activités" },
    { id: "evaluation", nom: "Évaluation et positionnement" }
  ];

  /* types : valeurs de « type » dans le storyboard. filtre : sous-ensemble d'écrans (ex. dialogue = écrans avec répliques).
     essais : exemples joués ; le premier s'ouvre par défaut. chaine : joue la suite de la même étape. */
  var GABARITS = [
    { id: "entree", famille: "structure", nom: "Entrée de module", types: [], champs_module: true,
      usage: "Ouvre un module : titre, chapeau, carte du parcours cliquable. Chaque repère porte un jour ; l'info-bulle donne le savoir-faire, l'accroche, le statut et la durée.",
      regles: ["Pattern A : repère narratif, objectif, consigne, progression, un seul appel à l'action.", "Le dossier fil rouge n'apparaît qu'une fois né (dossier.visible_des).", "Sur grand écran, pas de liste de cartes en double ; gardée sur téléphone."],
      essais: [{ lib: "Sommaire de M1", src: "m1", menu: true }] },
    { id: "fin-journee", famille: "structure", nom: "Fin de journée", types: ["fin-section"],
      usage: "Clôt un épisode : surtitre « Bilan · jour », une phrase, puis ce que l'apprenant a fait, le dossier s'il existe et une ligne « Ensuite ».",
      regles: ["Un seul point focal : « Ce que vous avez fait », à la 2e personne.", "Plus de carte du parcours : le bandeau montre déjà la progression.", "Pas de relecture complète de ce qui vient d'être fait (pattern A, à éviter)."],
      essais: [{ lib: "Bilan du lundi", src: "m1", e: "M1-E1-FIN" }, { lib: "Fin d'entrée, sans acquis", src: "m1", e: "M1-ENT-FIN" }] },
    { id: "fin-module", famille: "structure", nom: "Fin de module ou de prologue", types: ["fin"],
      usage: "Message de fin, ce que l'apprenant sait maintenant, badge si l'évaluation est réussie, appel à continuer.",
      regles: ["Le badge n'apparaît que si le module comporte une évaluation réussie.", "Le dossier fil rouge est rappelé quand il existe."],
      essais: [{ lib: "Fin de M1", src: "m1", e: "M1-FIN" }, { lib: "Fin du prologue", src: "prologue", e: "PRO-FIN" }] },

    { id: "scene", famille: "recit", nom: "Scène", types: ["narration", "message"], filtre: function (e) { return !e.repliques; },
      usage: "Pose la situation : une illustration, un personnage, le canal par lequel l'information arrive à Noa (bureau, courriel, téléphone…).",
      regles: ["Contexte : uniquement les informations nécessaires (pattern B).", "Le canal dit comment l'information arrive : oral, réunion, SMS, appel, courriel, messagerie, note.", "Une scène sans illustration affiche l'emplacement ILL-xx à produire."],
      essais: [{ lib: "Courriel, lundi 9 h", src: "m1", e: "M1-E1-S1" }, { lib: "Narration avec points", src: "m1", e: "M1-E3-S2" }, { lib: "Accueil par Samuel", src: "m1", e: "M1-ENT-1" }] },
    { id: "dialogue", famille: "recit", nom: "Dialogue", types: ["narration", "message"], filtre: function (e) { return !!e.repliques; },
      usage: "Fait parler les personnages : une bulle par personnage, avec son visage, en alternance gauche / droite.",
      regles: ["Le bouton « Suite » fait parler le suivant, puis « Continuer ».", "Didascalie courte, en italique, au-dessus de la bulle.", "Les répliques peuvent aussi s'ajouter à un apport, des cartes ou une fin de journée."],
      essais: [{ lib: "Samuel présente Malia", src: "m1", e: "M1-ENT-2" }, { lib: "Arrivée de Noa", src: "prologue", e: "PRO-1" }] },
    { id: "document", famille: "recit", nom: "Document", types: ["document"],
      usage: "Montre un document de travail tel que Noa le reçoit : organigramme, blocs, partenaires. Il se retrouve ensuite dans le contexte des décisions.",
      regles: ["Le document est rangé dans le carnet.", "Il s'affiche dans « Revoir la situation » des décisions de la même étape."],
      essais: [{ lib: "Organigramme de l'ÉLAN", src: "m1", e: "M1-E2-DOC" }] },

    { id: "apport", famille: "apports", nom: "Micro-apport", types: ["apport"],
      usage: "Nomme un repère après une situation. Plusieurs mises en forme : points, colonnes, infographie, schéma en orbite, fiche d'identité, texte officiel.",
      regles: ["Titre = repère à retenir ; une idée centrale ; 3 à 5 points maximum (pattern D).", "Exemple relié à la situation vécue, puis transition vers l'action.", "Pas de fiche encyclopédique. Il est rangé dans le carnet sauf carnet: false."],
      essais: [{ lib: "Infographie", src: "m1", e: "M1-E1-APP1" }, { lib: "Points", src: "m1", e: "M1-E2-APP1" }, { lib: "Schéma en orbite", src: "prologue", e: "PRO-6" }, { lib: "Texte officiel", src: "prologue", e: "PRO-3" }, { lib: "Fiche d'identité", src: "prologue", e: "PRO-2" }, { lib: "Colonnes", src: "prologue", e: "PRO-4" }] },
    { id: "cartes", famille: "apports", nom: "Cartes retournables", types: ["cartes"],
      usage: "Fait découvrir plusieurs notions courtes : l'apprenant retourne chaque carte, puis lit l'encadré de synthèse.",
      regles: ["Une notion par carte, recto court.", "L'encadré final dit ce qu'il faut retenir.", "Équivalent texte accessible au clavier."],
      essais: [{ lib: "Ici, ce n'est pas comme ailleurs", src: "m1", e: "M1-E1-APP2" }, { lib: "Prologue", src: "prologue", e: "PRO-7" }] },
    { id: "hotspot", famille: "apports", nom: "Image cliquable", types: ["hotspot"],
      usage: "Fait explorer une image par zones numérotées. Trois modes : découverte, audit (repérer), trombinoscope.",
      regles: ["Chaque zone a un équivalent dans une liste cliquable (accessibilité).", "Bouton pause à côté des points animés (D115).", "Bandeau ou synthèse finale une fois les zones vues."],
      essais: [{ lib: "Mode audit : la carte", src: "m1", e: "M1-E1-CARTE" }, { lib: "Mode découverte", src: "m1", e: "M1-E3-HS" }, { lib: "Trombinoscope", src: "prologue", e: "PRO-5" }] },
    { id: "sources", famille: "apports", nom: "Sources", types: ["sources"],
      usage: "Regroupe les textes cités en fin d'épisode ou de module, avec leur lien.",
      regles: ["Un lien par texte, avec une note courte sur ce qu'il contient.", "Ne remplace pas la relecture réglementaire point par point."],
      essais: [{ lib: "Sources du lundi", src: "m1", e: "M1-E1-SRC" }] },
    { id: "outil", famille: "apports", nom: "Fiche outil", types: ["outil"],
      usage: "Présente un outil professionnel réutilisable (aide-mémoire, arbre de décision, checklist), consultable et imprimable.",
      regles: ["Valeur d'usage après DINA, sinon ce n'est pas un outil (pattern E).", "Compréhensible sans l'histoire de Noa ; titre stable ; une source canonique.", "Impression sur une page A4."],
      essais: [{ lib: "Qui fait quoi en NC ?", src: "m1", e: "M1-E1-OUT" }, { lib: "Outil de l'entrée", src: "m1", e: "M1-ENT-3" }] },
    { id: "ressources", famille: "apports", nom: "Mes ressources", types: ["ressources"],
      usage: "Récapitule en sortie de module les fiches outils à garder.",
      regles: ["Pattern H : à quoi sert la ressource, quand l'utiliser, limite éventuelle."],
      essais: [{ lib: "Ressources de M1", src: "m1", e: "M1-SOR-RES" }] },

    { id: "choix", famille: "activites", nom: "Décision", types: ["choix"],
      usage: "Fait exercer un jugement dans une situation crédible : récit à gauche, consigne et réponses à droite, retour en code feu tricolore.",
      regles: ["La dernière question du texte devient la consigne ; forcer avec question.", "2 à 4 options, au moins deux plausibles ; la mauvaise n'est pas ridicule (pattern B).", "Retour en trois temps : ce qui est pertinent ou risqué, le raisonnement, que faire maintenant (pattern C)."],
      essais: [{ lib: "Orienter vers les impôts", src: "m1", e: "M1-E1-D2" }, { lib: "Sans personnage", src: "m1", e: "M1-E1-D3" }] },
    { id: "choix-multiple", famille: "activites", nom: "Choix multiple", types: ["choix-multiple"],
      usage: "Plusieurs bonnes réponses à cocher ; retour selon que la sélection est complète ou non.",
      regles: ["Consigne explicite : « plusieurs réponses possibles ».", "Retour différent si la sélection est juste ou incomplète."],
      essais: [{ lib: "Message pour Samuel", src: "m2", e: "M2-E2-D5" }] },
    { id: "ordre", famille: "activites", nom: "Remise en ordre", types: ["ordre"],
      usage: "Remettre des actions dans l'ordre, au clavier avec les flèches monter / descendre.",
      regles: ["Ordre de départ mélangé, jamais déjà correct.", "Retour sur l'ordre attendu et sa raison."],
      essais: [{ lib: "9 h 02, l'ordre des actions", src: "m2", e: "M2-DI-ORD" }, { lib: "Transfert", src: "m2", e: "M2-E2-TR" }] },
    { id: "classement", famille: "activites", nom: "Classement", types: ["classement"],
      usage: "Ranger des éléments dans des catégories (qui est compétent, qui décide…), puis lire la synthèse.",
      regles: ["Catégories courtes et exclusives.", "Retour élément par élément, puis synthèse."],
      essais: [{ lib: "Six demandes à orienter", src: "m1", e: "M1-E1-D1" }] },
    { id: "assemblage", famille: "activites", nom: "Message à composer", types: ["assemblage"],
      usage: "Composer un écrit professionnel en choisissant une phrase par partie (objet, demande, contexte…).",
      regles: ["Chaque partie propose des formulations plausibles.", "Le message complet s'affiche avec la synthèse."],
      essais: [{ lib: "Message à Malia", src: "m1", e: "M1-E3-D4" }, { lib: "La liste du défi", src: "m1", e: "M1-DI-LISTE" }] },
    { id: "messagerie", famille: "activites", nom: "Boîte de réception", types: ["messagerie"],
      usage: "Simule une boîte courriel : lire les messages, choisir la copie, composer la réponse, voir la conséquence.",
      regles: ["Les conséquences dépendent des choix de copie et de formulation.", "Piste : bon candidat pour M3 « Je travaille avec les autres »."],
      essais: [{ lib: "Boîte de Noa (M2)", src: "m2", e: "M2-DI-MAIL" }] },
    { id: "planning", famille: "activites", nom: "Semaine à organiser", types: ["planning"],
      usage: "Placer des tâches dans les jours de la semaine, puis comparer à une organisation raisonnée.",
      regles: ["Les contraintes de la consigne doivent suffire à décider."],
      essais: [{ lib: "La semaine de Noa (M2)", src: "m2", e: "M2-E1-D3" }] },
    { id: "recherche", famille: "activites", nom: "Recherche documentaire", types: ["recherche"],
      usage: "Simule un moteur de recherche : choisir ses mots-clés, puis la source fiable parmi les résultats.",
      regles: ["Les résultats mêlent sources officielles et sources peu sûres.", "La synthèse dit pourquoi la source retenue fait autorité."],
      essais: [{ lib: "Règle d'affiliation", src: "m1", e: "M1-E3-RCH" }] },
    { id: "reponse-libre", famille: "activites", nom: "Réponse libre", types: ["reponse-libre"],
      usage: "Faire écrire l'apprenant sur sa propre situation, puis afficher un éclairage.",
      regles: ["Aucune donnée personnelle collectée : la réponse n'est ni enregistrée ni transmise.", "Une mention le rappelle à l'apprenant quand c'est utile."],
      essais: [{ lib: "Chez mon employeur", src: "m1", e: "M1-SOR-LIBRE" }, { lib: "Prologue", src: "prologue", e: "PRO-8" }] },

    { id: "auto", famille: "evaluation", nom: "Auto-positionnement", types: ["auto-positionnement"],
      usage: "L'apprenant situe son aisance avant et après le module, sur une échelle ; la sortie compare les deux.",
      regles: ["Évaluation ipsative : ni note ni comparaison avec les autres.", "Même liste d'items à l'entrée et à la sortie."],
      essais: [{ lib: "Entrée de M1", src: "m1", e: "M1-ENT-AUTO" }, { lib: "Sortie de M1", src: "m1", e: "M1-SOR-AUTO" }] },
    { id: "eval", famille: "evaluation", nom: "Évaluation par mini-cas", types: ["eval-item", "eval-resultat"],
      usage: "Trois mini-cas (E1, E2, E3) puis un bilan par preuve. En cas d'échec, une nouvelle tentative sur la série B.",
      regles: ["Chaque mini-cas porte un identifiant de preuve (pattern G).", "Pas de retour après chaque item ; le bilan renvoie aux fiches à consolider.", "Échec : nouvelle tentative sur la série B. L'agent repasse l'évaluation quand il le souhaite, idéalement sur une évaluation différente (20-10)."],
      essais: [{ lib: "Évaluation de M1, en entier", src: "m1", e: "M1-EVA-E1A", chaine: true }] },
    { id: "pos-item", famille: "evaluation", nom: "Situation de positionnement", types: ["pos-item"],
      usage: "Une situation de la semaine, un choix, puis sa conséquence et son enjeu. Pas de bonne ou mauvaise réponse affichée.",
      regles: ["Finalité d'orientation, pas de mesure par compétence.", "Pas de question de certitude (décision du 22-10).", "Le test ne se rejoue pas (décision du 28-10)."],
      essais: [{ lib: "Lundi, les congés", src: "positionnement", e: "POS-S01" }] },
    { id: "pos-profil", famille: "evaluation", nom: "Profil de positionnement", types: ["pos-profil"],
      usage: "Restitution par bloc : radar, points de vigilance, cartes retournables, impression.",
      regles: ["Restitution par bloc, profil confidentiel.", "Joué seul, le radar est vide : choisir « Tout le test » pour le voir rempli."],
      essais: [{ lib: "Profil seul", src: "positionnement", e: "POS-PROFIL" }, { lib: "Tout le test", src: "positionnement", e: "POS-INTRO", chaine: true }] }
  ];

  /* ---------- Chargement des données des modules ---------- */
  var DONNEES = {};
  function chargerSource(i, fin) {
    if (i >= SOURCES.length) return fin();
    var s = document.createElement("script");
    window.DINA_DATA = null;
    s.src = "data/" + SOURCES[i].code + ".js";
    s.onload = function () { DONNEES[SOURCES[i].code] = window.DINA_DATA; chargerSource(i + 1, fin); };
    s.onerror = function () { chargerSource(i + 1, fin); };
    document.head.appendChild(s);
  }

  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function ic(id) { return '<svg class="icone" aria-hidden="true"><use href="#' + id + '"/></svg>'; }

  /* Écrans d'un gabarit dans chaque source */
  function occurrences(g) {
    var res = {};
    SOURCES.forEach(function (s) {
      var D = DONNEES[s.code]; if (!D) return;
      res[s.code] = Object.keys(D.ecrans).map(function (k) { return D.ecrans[k]; }).filter(function (e) {
        return g.types.indexOf(e.type) >= 0 && (!g.filtre || g.filtre(e));
      });
    });
    return res;
  }
  function total(occ) { return Object.keys(occ).reduce(function (n, k) { return n + occ[k].length; }, 0); }
  function enProduction(occ) { return ["positionnement", "prologue", "m1"].reduce(function (n, k) { return n + (occ[k] ? occ[k].length : 0); }, 0); }

  /* Champs du storyboard : fréquence de chaque champ sur toutes les occurrences */
  var TECHNIQUES = ["id", "suite"];
  function champs(g, occ) {
    if (g.champs_module) return [["sections[].jour", 1, 1], ["sections[].titre", 1, 1], ["sections[].savoir", 1, 1], ["sections[].accroche", 1, 1], ["sections[].duree", 1, 1], ["sections[].debut", 1, 1], ["dossier.visible_des", 1, 1], ["intro", 1, 1], ["duree", 1, 1]];
    var n = 0, f = {};
    Object.keys(occ).forEach(function (k) {
      occ[k].forEach(function (e) {
        n++;
        Object.keys(e).forEach(function (c) { if (TECHNIQUES.indexOf(c) < 0) f[c] = (f[c] || 0) + 1; });
      });
    });
    return Object.keys(f).map(function (c) { return [c, f[c], n]; }).sort(function (a, b) { return b[1] - a[1] || a[0].localeCompare(b[0]); });
  }

  /* ---------- Navigation ---------- */
  var OCC = {}, courant = null;
  function rendreNav(filtre) {
    filtre = (filtre || "").trim().toLowerCase();
    var html = FAMILLES.map(function (f) {
      var items = GABARITS.filter(function (g) {
        if (g.famille !== f.id) return false;
        if (!filtre) return true;
        var txt = (g.nom + " " + g.usage + " " + g.types.join(" ") + " " + g.essais.map(function (x) { return x.src; }).join(" ")).toLowerCase();
        return txt.indexOf(filtre) >= 0;
      });
      if (!items.length) return "";
      return '<div class="nav-famille"><h2>' + esc(f.nom) + "</h2><ul>" + items.map(function (g) {
        var o = OCC[g.id], prod = g.champs_module ? "—" : enProduction(o), tot = g.champs_module ? "" : total(o);
        var etat = g.champs_module ? "" : (prod === 0 ? (tot ? "hors-demo" : "inutilise") : "");
        return '<li><a href="#' + g.id + '" class="nav-lien' + (g.id === courant ? " actif" : "") + '"' + (g.id === courant ? ' aria-current="page"' : "") + ">" +
          '<span class="nav-nom">' + esc(g.nom) + "</span>" +
          '<span class="nav-compte' + (etat ? " nav-compte--" + etat : "") + '" title="' + (g.champs_module ? "Un par module" : prod + " écran(s) dans le démonstrateur, " + tot + " au total") + '">' + (g.champs_module ? "×4" : prod) + "</span></a></li>";
      }).join("") + "</ul></div>";
    }).join("");
    $("nav-liste").innerHTML = html || '<p class="nav-vide">Aucun gabarit ne correspond.</p>';
  }
  $("filtre").addEventListener("input", function () { rendreNav(this.value); });

  /* ---------- Détail d'un gabarit ---------- */
  function urlEssai(x) {
    return "gabarit-essai.html?src=" + encodeURIComponent(x.src) + (x.menu ? "&menu=1" : "&e=" + encodeURIComponent(x.e)) + (x.chaine ? "&chaine=1" : "");
  }
  function rendreDetail(g, iEssai) {
    courant = g.id;
    var occ = OCC[g.id], fam = FAMILLES.filter(function (f) { return f.id === g.famille; })[0];
    var essai = g.essais[iEssai || 0];
    var lignesOcc = SOURCES.map(function (s) {
      if (g.champs_module) return "";
      var l = occ[s.code] || [];
      return "<tr><th scope=\"row\">" + esc(s.nom) + (s.note ? '<span class="note">' + esc(s.note) + "</span>" : "") + "</th><td>" +
        (l.length ? '<span class="occ-n">' + l.length + "</span>" + l.map(function (e) {
          return '<button type="button" class="occ-id" data-src="' + s.code + '" data-e="' + esc(e.id) + '" title="' + esc(e.titre || (e.texte || "").slice(0, 90)) + '">' + esc(e.id) + "</button>";
        }).join("") : '<span class="occ-vide">—</span>') + "</td></tr>";
    }).join("");
    var ch = champs(g, occ);
    var champsHtml = ch.length ? '<ul class="champs">' + ch.map(function (c) {
      var part = c[1] / c[2], cls = part === 1 ? "toujours" : (part >= .5 ? "souvent" : "parfois");
      return '<li class="champ champ--' + cls + '" title="Présent dans ' + c[1] + " écran(s) sur " + c[2] + '"><code>' + esc(c[0]) + "</code>" + (g.champs_module ? "" : '<span>' + c[1] + "/" + c[2] + "</span>") + "</li>";
    }).join("") + "</ul>" : '<p class="occ-vide">Aucun écran de ce type pour l\'instant.</p>';

    $("detail").innerHTML =
      '<div class="d-tete">' +
        '<span class="surtitre">' + esc(fam.nom) + "</span>" +
        "<h2 id=\"d-titre\">" + esc(g.nom) + "</h2>" +
        (g.types.length ? '<p class="types">' + g.types.map(function (t) { return '<code>type: ' + esc(t) + "</code>"; }).join(" ") + (g.filtre ? ' <span class="note">avec ' + (g.id === "dialogue" ? "répliques" : "sans répliques") + "</span>" : "") + "</p>" : '<p class="types"><code>module.sections</code></p>') +
        '<p class="usage">' + esc(g.usage) + "</p>" +
      "</div>" +
      '<section class="joueur" aria-label="Exemple jouable">' +
        '<div class="joueur-barre">' +
          '<div class="variantes" role="group" aria-label="Exemples">' + g.essais.map(function (x, i) {
            return '<button type="button" class="variante" data-i="' + i + '" aria-pressed="' + (i === (iEssai || 0)) + '">' + esc(x.lib) + '<span class="src">' + esc(x.src === "positionnement" ? "Pos." : x.src === "prologue" ? "Prol." : x.src.toUpperCase()) + "</span></button>";
          }).join("") + "</div>" +
          '<div class="joueur-actions">' +
            '<button type="button" class="btn-lien" id="rejouer">' + ic("i-recommencer") + " Rejouer</button>" +
            '<a class="btn-lien" id="ouvrir" href="' + urlEssai(essai) + '" target="_blank" rel="noopener">' + ic("i-ouvrir") + " Ouvrir en grand</a>" +
          "</div>" +
        "</div>" +
        '<div class="cadre-iframe"><iframe id="essai" title="Exemple jouable : ' + esc(g.nom + " — " + essai.lib) + '" src="' + urlEssai(essai) + '"></iframe></div>' +
      "</section>" +
      '<div class="d-grille">' +
        '<section class="bloc"><h3>Règles</h3><ul class="regles">' + g.regles.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul></section>" +
        '<section class="bloc"><h3>Champs du storyboard</h3>' + champsHtml +
          (g.champs_module ? "" : '<p class="legende"><span class="champ champ--toujours"><span>toujours</span></span><span class="champ champ--souvent"><span>souvent</span></span><span class="champ champ--parfois"><span>parfois</span></span> · nombre d\'écrans qui utilisent le champ</p>') + "</section>" +
        (g.champs_module ? "" : '<section class="bloc bloc--large"><h3>Dans le parcours</h3><p class="aide">Cliquez un identifiant pour le jouer ci-dessus.</p><table class="occ"><tbody>' + lignesOcc + "</tbody></table></section>") +
      "</div>";

    $("detail").querySelectorAll(".variante").forEach(function (b) {
      b.addEventListener("click", function () { charger(g.essais[+b.dataset.i], g.nom + " — " + g.essais[+b.dataset.i].lib); marquer(b); });
    });
    $("detail").querySelectorAll(".occ-id").forEach(function (b) {
      b.addEventListener("click", function () {
        charger({ src: b.dataset.src, e: b.dataset.e, chaine: g.id === "eval" || g.id === "pos-profil" }, g.nom + " — " + b.dataset.e);
        marquer(null);
        $("essai").scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    $("rejouer").addEventListener("click", function () { $("essai").src = $("essai").src; });
    rendreNav($("filtre").value);
    document.title = g.nom + " — Catalogue des gabarits DINA";
  }
  function marquer(btn) { $("detail").querySelectorAll(".variante").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); }); }
  function charger(x, titre) { var u = urlEssai(x); $("essai").src = u; $("essai").title = "Exemple jouable : " + titre; $("ouvrir").href = u; }

  function route() {
    var id = location.hash.replace("#", ""), g = GABARITS.filter(function (x) { return x.id === id; })[0] || GABARITS[0];
    rendreDetail(g, 0);
    if (location.hash) $("detail").focus({ preventScroll: false });
  }
  window.addEventListener("hashchange", route);

  /* ---------- Points d'attention calculés ---------- */
  function vigilance() {
    var pts = [];
    /* Types présents dans les données mais absents du catalogue */
    var connus = {};
    GABARITS.forEach(function (g) { g.types.forEach(function (t) { connus[t] = 1; }); });
    connus.module = 1;
    var inconnus = {};
    SOURCES.forEach(function (s) {
      var D = DONNEES[s.code]; if (!D) return;
      Object.keys(D.ecrans).forEach(function (k) { var t = D.ecrans[k].type; if (!connus[t]) (inconnus[t] = inconnus[t] || []).push(s.nom + " " + k); });
    });
    Object.keys(inconnus).forEach(function (t) { pts.push("Type <code>" + esc(t) + "</code> utilisé mais non documenté ici : " + esc(inconnus[t].join(", ")) + "."); });
    /* Gabarits qui n'existent que dans M2 (storyboard antérieur) */
    var horsDemo = GABARITS.filter(function (g) { var o = OCC[g.id]; return !g.champs_module && enProduction(o) === 0 && total(o) > 0; });
    if (horsDemo.length) pts.push("Gabarits présents seulement dans M2, pas encore éprouvés dans le démonstrateur : " + horsDemo.map(function (g) { return '<a href="#' + g.id + '">' + esc(g.nom) + "</a>"; }).join(", ") + ". À tester en interne avant de les généraliser.");
    /* Écrans avec avis d'expert en attente */
    var experts = [];
    SOURCES.forEach(function (s) { var D = DONNEES[s.code]; if (!D) return; Object.keys(D.ecrans).forEach(function (k) { if (D.ecrans[k].note_expert) experts.push(s.nom + " " + k); }); });
    if (experts.length) pts.push(experts.length + " écrans portent une note pour l'expert (<code>note_expert</code>) : " + esc(experts.slice(0, 12).join(", ")) + (experts.length > 12 ? "…" : "") + ".");
    /* Illustrations et portraits manquants : vérifiés en chargeant les images */
    var codes = {}, persos = {};
    SOURCES.forEach(function (s) {
      var D = DONNEES[s.code]; if (!D) return;
      Object.keys(D.ecrans).forEach(function (k) { var e = D.ecrans[k]; if (e.illustration) codes[e.illustration] = s.nom; });
      Object.keys((D.module && D.module.personnages) || {}).forEach(function (p) { persos[p] = 1; });
    });
    var aVerifier = Object.keys(codes).length + Object.keys(persos).length, manquants = [], sansPortrait = [];
    function fini() {
      if (--aVerifier > 0) return;
      if (manquants.length) pts.push("Illustrations à produire (" + manquants.length + ") : " + esc(manquants.sort().join(", ")) + ".");
      if (sansPortrait.length) pts.push("Personnages sans portrait (initiale affichée) : " + esc(sansPortrait.join(", ")) + ".");
      else pts.push('<span class="ok">' + ic("i-check") + " Tous les personnages ont un portrait.</span>");
      afficherVigilance(pts);
    }
    function tester(urls, siAbsent) {
      var i = 0, img = new Image();
      img.onload = fini;
      img.onerror = function () { if (++i < urls.length) img.src = urls[i]; else { siAbsent(); fini(); } };
      img.src = urls[0];
    }
    function slug(n) { return n.split(" ")[0].toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9-]/g, ""); }
    Object.keys(codes).forEach(function (c) { tester(["assets/img/" + c + ".jpg", "assets/img/" + c + ".png"], function () { manquants.push(c + " (" + codes[c] + ")"); }); });
    Object.keys(persos).forEach(function (p) { tester(["assets/img/portraits/" + slug(p) + ".jpg"], function () { sansPortrait.push(p); }); });
    if (!aVerifier) afficherVigilance(pts);
  }
  function afficherVigilance(pts) {
    $("vig-liste").innerHTML = pts.map(function (p) { return "<li>" + p + "</li>"; }).join("");
    $("vigilance").hidden = !pts.length;
  }

  /* ---------- Démarrage ---------- */
  chargerSource(0, function () {
    GABARITS.forEach(function (g) { OCC[g.id] = g.champs_module ? {} : occurrences(g); });
    var nbEcrans = 0, nbProd = 0;
    SOURCES.forEach(function (s) { var D = DONNEES[s.code]; if (!D) return; var n = Object.keys(D.ecrans).length; nbEcrans += n; if (s.code !== "m2") nbProd += n; });
    $("chiffres").innerHTML =
      '<span><strong>' + GABARITS.length + "</strong> gabarits</span>" +
      '<span><strong>' + nbProd + "</strong> écrans dans le démonstrateur</span>" +
      '<span><strong>' + nbEcrans + "</strong> avec M2</span>";
    route();
    vigilance();
  });
})();
