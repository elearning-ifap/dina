/* DINA — page d'entrée du prototype (D84, D86).
   SEUL FICHIER À MODIFIER à chaque publication sur GitHub.
   - Mettre à jour "actuelle" (numéro, date, caractéristiques, évolutions).
   - Passer "disponible" à true quand une étape est publiée.
   - Garder les versions précédentes dans "historique" : les retours restent rattachés à leur version (D86).
   Les crochets [ ] signalent une information à confirmer : ils s'affichent en surligné tant qu'ils restent. */
window.DINA_VERSION = {
  actuelle: {
    numero: "0.3",
    date: "21-11-2026",
    statut: "Prototype — contenus en cours de relecture",
    caracteristiques: [
      "Étapes à suivre dans l'ordre : positionnement, prologue, cinq modules, puis le bilan de parcours.",
      "Positionnement « Votre première semaine » : 15 situations du lundi au vendredi, une conséquence après chaque choix, résultat sur les six blocs du référentiel. Aucune réponse n'est enregistrée.",
      "Prologue « Bienvenue à l'ÉLAN » : l'univers de Noa, ses collègues et son organisation.",
      "Cinq modules (M1 à M5) : une semaine de Noa par module, du lundi au vendredi. Situations, apports, fiches outils, défi, évaluation du vendredi.",
      "Bilan « Mon bilan » : six situations pour prendre du recul sur sa pratique, puis un plan de progrès.",
      "Un badge par module réussi, et un badge pour l'ensemble du parcours : cinq modules réussis et le bilan réussi (5 situations justes sur 6).",
      "Des fiches à télécharger en PDF (apports et outils), à imprimer et à garder. Dans le carnet de chaque module et dans « Mes ressources ».",
      "Le dossier Passerelles sert de fil rouge d'un module à l'autre.",
      "Fonctionne sur ordinateur (Chrome ou Edge) et sur téléphone."
    ],
    evolutions: [
      "Les modules 1 à 5 et le bilan sont ouverts. Le module 1 est présenté dans sa version « page qui défile ».",
      "Évaluation de chaque module : deux séries de six situations, différentes à chaque passage ; trois choix de réponse ; module réussi avec 5 réponses justes sur 6. Un module non réussi ne bloque pas la suite.",
      "Les fiches d'apport et les fiches outils sont téléchargeables en PDF (brouillons, avant relecture par les experts).",
      "Le bilan de parcours est nouveau. Il donne accès au badge du parcours quand tous les modules sont réussis.",
      "Les modules 4 et 5 sont en cours de relecture : textes et illustrations peuvent encore changer."
    ]
  },

  /* Ordre fixé par D84. "fichier" est relatif à cette page. */
  etapes: [
    { code: "pos", fichier: "positionnement.html", cle: "dina-positionnement", titre: "Test de positionnement",
      texte: "Votre première semaine dans un service public : quinze situations, et ce qui se passe après chacun de vos choix. Vous voyez où vous en êtes, domaine par domaine.",
      duree: "15 à 20 min environ", disponible: true },
    { code: "prologue", fichier: "prologue-pages.html", cle: "dina-prologue", titre: "Prologue « Bienvenue à l'ÉLAN »",
      texte: "Vous rencontrez Noa, ses collègues et l'organisation où il prend son poste.",
      duree: "environ 10 min", disponible: true },
    { code: "m1", fichier: "m1-pages.html", cle: "dina-m1", titre: "Module 1 « Je me repère »",
      texte: "Comprendre mon environnement. Institutions, acteurs publics, environnement professionnel, contexte calédonien, recherche d'une information fiable.",
      duree: "1 h 05 environ", disponible: true },
    { code: "m2", fichier: "m2-pages.html", cle: "dina-m2", titre: "Module 2 « Je trouve ma place »",
      texte: "Samuel confie à Noa son premier dossier. Savoir ce qui est à moi, avancer quand la consigne est floue, demander de l'aide au bon moment.",
      duree: "1 h environ", disponible: true },
    { code: "m3", fichier: "m3-pages.html", cle: "dina-m3", titre: "Module 3 « Je travaille avec les autres »",
      texte: "Lancer la permanence de Passerelles avec la commune et la province : choisir le bon canal et les bons mots, transmettre avec le contexte.",
      duree: "1 h 15 environ", disponible: true },
    { code: "m4", fichier: "m4-pages.html", cle: "dina-m4", titre: "Module 4 « J'agis dans un cadre sécurisé »",
      texte: "Le diagnostic des six lieux : manier avec soin un fichier d'habitants accompagnés et agir dans le cadre.",
      duree: "1 h 45 environ", disponible: true },
    { code: "m5", fichier: "m5-pages.html", cle: "dina-m5", titre: "Module 5 « J'incarne le service public »",
      texte: "La première permanence de Passerelles : accueillir chacun avec les mêmes égards, garder sa réserve, repérer un lien d'intérêt.",
      duree: "1 h 15 environ", disponible: true },
    { code: "bilan", fichier: "bilan-pages.html", cle: "dina-bilan", titre: "Mon bilan",
      texte: "Trois mois plus tard, vous prenez du recul sur votre parcours. Six situations, puis votre plan de progrès. Avec les cinq modules réussis, vous obtenez le badge du parcours.",
      duree: "20 min environ", disponible: true }
  ],

  /* Recueil des retours (D86). Le 28-10 : fiche de remarques papier (D102).
     Si "courriel" est renseigné, un bouton ouvre un message prérempli avec le numéro de version. */
  avis: {
    courriel: "mrolland@ifap.nc",
    texte: "Le jour de la séance, notez vos remarques sur la fiche papier remise avec le livret. Ensuite, écrivez-nous en précisant le numéro de version."
  },

  contact: "Contact : IFAP",

  historique: [
    { numero: "0.1", date: "28-10-2026", lien: "v0.1/index.html", resume: "Version présentée aux employeurs le 28-10." }
  ]
};
