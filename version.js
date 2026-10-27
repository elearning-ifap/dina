/* DINA — page d'entrée du prototype (D84, D86).
   SEUL FICHIER À MODIFIER à chaque publication sur GitHub.
   - Mettre à jour "actuelle" (numéro, date, caractéristiques, évolutions).
   - Passer "disponible" à true quand une étape est publiée.
   - Garder les versions précédentes dans "historique" : les retours restent rattachés à leur version (D86).
   Les crochets [ ] signalent une information à confirmer : ils s'affichent en surligné tant qu'ils restent. */
window.DINA_VERSION = {
  actuelle: {
    numero: "0.1",
    date: "28-10-2026",
    statut: "Prototype — contenus en cours de relecture",
    caracteristiques: [
      "Trois étapes à suivre dans l'ordre : positionnement, prologue, puis module 1 « Je me repère ».",
      "Positionnement « Votre première semaine » : 15 situations du lundi au vendredi, une conséquence après chaque choix, résultat sur les six blocs du référentiel. Aucune réponse n'est enregistrée.",
      "Prologue « Bienvenue à l'ÉLAN » : l'univers de Noa, ses collègues et son organisation.",
      "Module 1 « Je me repère — Comprendre mon environnement » : une semaine de Noa, du lundi au vendredi. Situations, apports, fiches outils, évaluation du vendredi.",
      "Le dossier Passerelles sert de fil rouge d'un module à l'autre.",
      "Fonctionne sur ordinateur (Chrome ou Edge) et sur téléphone."
    ],
    evolutions: []  /* Première présentation : rien à lister. À remplir à partir de la version suivante. */
  },

  /* Ordre fixé par D84. "fichier" est relatif à cette page. */
  etapes: [
    { code: "pos", fichier: "positionnement.html", cle: "dina-positionnement", titre: "Test de positionnement",
      texte: "Votre première semaine dans un service public : quinze situations, et ce qui se passe après chacun de vos choix. Vous voyez où vous en êtes, domaine par domaine.",
      duree: "environ 15 min", disponible: true },
    { code: "prologue", fichier: "prologue.html", cle: "dina-prologue", titre: "Prologue « Bienvenue à l'ÉLAN »",
      texte: "Vous rencontrez Noa, ses collègues et l'organisation où il prend son poste.",
      duree: "environ 10 min", disponible: true },
    { code: "m1", fichier: "m1.html", cle: "dina-m1", titre: "Module 1 « Je me repère »",
      texte: "Comprendre mon environnement. Institutions, acteurs publics, environnement professionnel, contexte calédonien, recherche d'une information fiable.",
      duree: "aussi loin que possible", disponible: true }
  ],

  /* Recueil des retours (D86). Le 28-10 : fiche de remarques papier (D102).
     Si "courriel" est renseigné, un bouton ouvre un message prérempli avec le numéro de version. */
  avis: {
    courriel: "mrolland@ifap.nc",
    texte: "Le jour de la séance, notez vos remarques sur la fiche papier remise avec le livret. Ensuite, écrivez-nous en précisant le numéro de version."
  },

  contact: "Contact : IFAP",

  historique: [
    /* Exemple pour la prochaine publication :
    { numero: "0.1", date: "28-10-2026", lien: "v0.1/index.html", resume: "Version présentée aux employeurs le 28-10." } */
  ]
};
