/* DINA — catalogue des gabarits : prépare les données d'un module pour jouer un seul écran (ou une chaîne d'écrans).
   Ne modifie ni engine.js ni les fichiers de données : tout se fait en mémoire, avant le démarrage du moteur. */
(function () {
  "use strict";
  var D = window.DINA_DATA;
  if (!D) return;
  var p = new URLSearchParams(location.search), M = D.module, E = D.ecrans;
  var id = p.get("e"), chaine = p.get("chaine") === "1", menu = p.get("menu") === "1";
  var titreModule = (M.code || M.id) + " " + M.titre;

  /* Clé de stockage propre au catalogue (le moteur la tire du code du module) : la progression réelle n'est jamais touchée */
  M.code = "Gabarit";
  M.titre = titreModule;
  try { localStorage.removeItem("dina-gabarit-v02"); } catch (err) { /* stockage indisponible : sans effet */ }
  delete M.hub; delete M.page_suivante;

  if (menu || !E[id]) return;   /* sommaire du module : le moteur démarre normalement */

  var depart = E[id], etape = depart.etape;
  /* Écrans joués : l'écran demandé, ou toute la suite de la même étape (évaluation, positionnement) */
  var joues = [id];
  if (chaine) {
    var x = depart.suite, garde = 0;
    while (x && E[x] && E[x].etape === etape && joues.indexOf(x) < 0 && garde++ < 40) { joues.push(x); x = E[x].suite; }
  }
  joues.forEach(function (k, i) {
    E[k] = Object.assign({}, E[k], { suite: i < joues.length - 1 ? joues[i + 1] : "CAT-FIN" });
    if (E[k].retentative) E[k].retentative = id;
  });
  E["CAT-FIN"] = {
    id: "CAT-FIN", type: "apport", etape: etape, carnet: false,
    titre: "Fin de l'exemple",
    texte: "Vous avez parcouru ce gabarit tel qu'il s'affiche dans le parcours.\n\nContinuez pour le rejouer, ou choisissez un autre gabarit dans le catalogue.",
    suite: id
  };
  M.sans_menu = true;
  M.sections = [{ id: "cat", libelle: etape, jour: "Exemple", titre: depart.titre || "", debut: id }];
})();
