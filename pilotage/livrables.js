/* DINA — tableau de bord des livrables.
   SEUL FICHIER À MODIFIER à chaque avancée. La page se republie seule sur GitHub Pages (une minute environ).

   Statuts possibles : "a_faire", "en_cours", "a_valider", "valide", "livre", "sans_objet" (matrice seulement).
   Personnes (clé "qui", "valide", "attente") : "marc", "mnb", "mfp", "valerie", "employeurs", "si", "pole".

   RÈGLE DE PUBLICATION : la page est publique (lien non référencé, mais lisible par tous).
   Ne rien écrire ici sur le temps passé, les noms des experts ou des testeurs, ni les remarques internes. */

window.DINA_PILOTAGE = {
  miseAJour: "29-10-2026",
  avertissement: "Statuts de départ établis le 29-10 à partir du coffre de projet, à confirmer par Marc Rolland.",

  /* Temps de travail, en jours temps plein. Reprendre les chiffres de « Suivi du temps DINA » (coffre Obsidian). */
  temps: {
    prevuJours: 32,          /* charge annoncée à la direction */
    passeJours: 9.9,         /* cumul saisi */
    arreteAu: "29-10-2026"   /* date de la dernière saisie */
  },

  /* Avancement global : chaque livrable et chaque case de la matrice du parcours comptent pour une unité.
     Part réalisée selon le statut ci-dessous. */
  ponderation: { a_faire: 0, en_cours: 0.5, a_valider: 0.8, valide: 1, livre: 1 },

  personnes: {
    marc:       { nom: "Marc Rolland",          role: "Conception et production" },
    mnb:        { nom: "Marie-Noëlle Blanck",   role: "Cheffe de projet, employeurs et stagiaires" },
    mfp:        { nom: "Marie-Françoise Pierre", role: "Communication et identité visuelle" },
    valerie:    { nom: "Valérie Salmon",        role: "Direction, arbitrages" },
    employeurs: { nom: "Employeurs du COPIL",   role: "Référents par module, testeurs" },
    si:         { nom: "Service informatique",  role: "Plateforme LIANE" },
    pole:       { nom: "Pôle stagiaires",       role: "Assistance de premier niveau" }
  },

  /* Jalons dans l'ordre. etat : "franchi", "prochain", "a_venir". */
  jalons: [
    { date: "15-09-2026", titre: "COPIL employeurs", texte: "Lancement de la démarche", etat: "franchi" },
    { date: "10-10-2026", titre: "Environnement de production", texte: "Règles, gabarits et outils prêts (J-ENV)", etat: "franchi" },
    { date: "28-10-2026", titre: "Démonstration du prototype", texte: "Positionnement, prologue et module 1 testés par les employeurs (J-PROT)", etat: "franchi" },
    { date: "Début nov. 2026", titre: "Retours des testeurs", texte: "2 ou 3 agents par employeur testent le prototype, retours sous 10 jours", etat: "prochain" },
    { date: "Novembre 2026", titre: "Validation technique", texte: "Un module en SCORM fonctionne dans LIANE : lancement, reprise, traces (J-TECH). Date à fixer", etat: "a_venir" },
    { date: "Décembre 2026", titre: "Pause de production", texte: "Trois semaines sans production", etat: "a_venir", pause: true },
    { date: "Février 2027", titre: "Pilote", texte: "Un mois, 10 à 20 agents, version actuelle sans vidéo ni audio", etat: "a_venir" },
    { date: "Mi-mars 2027", titre: "Ouverture de DINA", texte: "Inscription sur demande de l'employeur", etat: "a_venir" }
  ],

  /* Matrice du parcours : une ligne par étape du parcours, une colonne par étape de fabrication. */
  etapesFabrication: ["Corpus", "Scénario", "Storyboard", "Visuels", "E-learning", "Validation experte", "Intégration Moodle"],
  etapesFabricationCourt: ["Corpus", "Scénar.", "Story.", "Visuels", "E-learn.", "Expert", "Moodle"],
  parcours: [
    { code: "POS", titre: "Positionnement", sousTitre: "Votre première semaine",
      etats: ["sans_objet", "valide", "en_cours", "sans_objet", "livre", "sans_objet", "a_faire"],
      note: "Prototype en ligne (v0.1). Storyboard v0.5 en cours : restitution visuelle et imprimable." },
    { code: "PRO", titre: "Prologue", sousTitre: "Bienvenue à l'ÉLAN",
      etats: ["sans_objet", "valide", "en_cours", "livre", "livre", "sans_objet", "a_faire"],
      note: "Prototype en ligne (v0.1). Storyboard v0.3 en cours : arrivée de Noa, message de fin." },
    { code: "M1", titre: "Je me repère", sousTitre: "Comprendre mon environnement",
      etats: ["en_cours", "valide", "livre", "en_cours", "en_cours", "a_faire", "a_faire"],
      note: "Prototype en ligne (v0.1). Version 0.2 en cours : jours de la semaine, infographies, retours du 28-10." },
    { code: "M2", titre: "Je trouve ma place", sousTitre: "",
      etats: ["en_cours", "valide", "livre", "en_cours", "en_cours", "a_faire", "a_faire"],
      note: "Storyboard v0.4 prêt. E-learning v0.1 à reprendre sur le modèle de M1." },
    { code: "M3", titre: "Je travaille avec les autres", sousTitre: "",
      etats: ["en_cours", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire"],
      note: "Corpus rassemblé. Scénario à écrire." },
    { code: "M4", titre: "J'agis dans un cadre sécurisé", sousTitre: "",
      etats: ["en_cours", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire"],
      note: "Corpus rassemblé. Scénario à écrire." },
    { code: "M5", titre: "J'incarne le service public", sousTitre: "",
      etats: ["en_cours", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire"],
      note: "Corpus rassemblé. Scénario à écrire." },
    { code: "BIL", titre: "Bilan de parcours", sousTitre: "",
      etats: ["sans_objet", "a_faire", "a_faire", "sans_objet", "a_faire", "a_faire", "a_faire"],
      note: "Clôture du parcours et évaluation de la compétence C21." }
  ],

  /* Livrables par catégorie.
     Champs : titre, lot, statut, qui (responsable), valide (qui valide), attente (qui doit agir maintenant), echeance, note. */
  categories: [
    { code: "cadrage", titre: "Cadrage", texte: "Les règles communes à tout le parcours.",
      livrables: [
        { titre: "Référentiel des 21 compétences", lot: "L1", statut: "valide", qui: "marc", valide: "employeurs", note: "Validé par les employeurs." },
        { titre: "Répartition des compétences par module", lot: "L1", statut: "valide", qui: "marc", valide: "mnb" },
        { titre: "Architecture pédagogique du parcours", lot: "L1", statut: "en_cours", qui: "marc", note: "Version 0.2." },
        { titre: "Règles de production (pédagogie, récit, visuels, évaluation)", lot: "L1", statut: "en_cours", qui: "marc" },
        { titre: "Univers de l'ÉLAN : personnages et lieux", lot: "L1", statut: "valide", qui: "marc", valide: "mnb" },
        { titre: "Fil rouge : le dossier Passerelles", lot: "L1", statut: "valide", qui: "marc" },
        { titre: "Logo DINA et signature « Mes repères pour agir »", lot: "L1", statut: "valide", qui: "marc", valide: "mfp" }
      ] },

    { code: "ressources", titre: "Ressources et évaluations", texte: "Ce que l'agent garde, ce qui valide ses acquis.",
      livrables: [
        { titre: "Restitution du positionnement, visuelle et imprimable", lot: "L6", statut: "en_cours", qui: "marc" },
        { titre: "Évaluations des modules, différentes à chaque passage", lot: "L6", statut: "en_cours", qui: "marc", note: "Jouables pour M1 et M2." },
        { titre: "Badges des 5 modules", lot: "L6", statut: "en_cours", qui: "marc", note: "Un badge par module, au nom du module. Délivré en cas de réussite." },
        { titre: "Fiches outils du module 1", lot: "L5", statut: "en_cours", qui: "marc", note: "Présentées le 28-10, à reprendre." },
        { titre: "Fiches outils des modules 2 à 5", lot: "L5", statut: "a_faire", qui: "marc" },
        { titre: "Carnet unique du parcours, en PDF", lot: "L5", statut: "a_faire", qui: "marc" },
        { titre: "Espace « Mes ressources »", lot: "L5", statut: "a_faire", qui: "marc" }
      ] },

    { code: "plateforme", titre: "Plateforme LIANE", texte: "Le parcours installé dans Moodle.",
      livrables: [
        { titre: "Test technique SCORM dans LIANE", lot: "J-TECH", statut: "a_faire", qui: "marc", valide: "si", echeance: "Novembre 2026", note: "Condition avant de produire les modules 2 à 5 en série." },
        { titre: "Page d'accueil DINA dans Moodle (tableau de bord)", lot: "L2", statut: "a_faire", qui: "marc" },
        { titre: "Paquets SCORM des modules", lot: "L2", statut: "a_faire", qui: "marc" },
        { titre: "Recette : fonctionnement, pédagogie, accessibilité", lot: "L7", statut: "a_faire", qui: "marc", valide: "mnb", echeance: "Janvier 2027" }
      ] },

    { code: "suivi", titre: "Suivi du pilote", texte: "Inscrire, suivre, tirer le bilan.",
      livrables: [
        { titre: "Questionnaire des nouveaux agents (début et fin de parcours)", lot: "L8", statut: "a_valider", qui: "marc", valide: "mnb", attente: "mnb", note: "Version 0.3 à valider." },
        { titre: "Tableau d'inscription propre à DINA", lot: "L8", statut: "a_faire", qui: "mnb", note: "L'inscription part d'une demande formelle de l'employeur." },
        { titre: "Choix des employeurs pilotes et jauge par employeur", lot: "L8", statut: "a_faire", qui: "mnb", valide: "valerie", attente: "mnb", note: "10 à 20 agents. Éviter qu'un employeur prenne toutes les places." },
        { titre: "Quatre indicateurs de suivi pour l'IFAP", lot: "L8", statut: "a_faire", qui: "marc" },
        { titre: "Vue employeur : avancement de ses agents", lot: "L8", statut: "a_faire", qui: "marc", note: "Avancement seul, sans résultats ni badges." },
        { titre: "Information de l'employeur après deux échecs", lot: "L8", statut: "a_faire", qui: "marc", note: "Modalité à définir." },
        { titre: "Bilan du pilote", lot: "L8", statut: "a_faire", qui: "mnb", echeance: "Mars 2027" }
      ] },

    { code: "communication", titre: "Communication et accompagnement", texte: "Faire connaître DINA et accompagner les agents.",
      livrables: [
        { titre: "Présentation aux employeurs", lot: "L9", statut: "livre", qui: "marc", valide: "mnb", note: "Version courte du 28-10." },
        { titre: "Livret de test et annexe « DINA en bref »", lot: "L9", statut: "livre", qui: "marc", valide: "mnb", note: "Séance du 28-10." },
        { titre: "Prototype en ligne", lot: "L9", statut: "livre", qui: "marc", note: "Lien unique et QR code." },
        { titre: "Fiche argumentaire employeurs", lot: "L9", statut: "a_faire", qui: "mnb", valide: "mfp", note: "Inclure le message sur le temps de formation organisé par l'employeur." },
        { titre: "Visuels de lancement (affiches, bannières, écrans)", lot: "L9", statut: "a_valider", qui: "marc", valide: "mfp", attente: "mfp", note: "Version 0.1." },
        { titre: "Vidéo de présentation", lot: "L9", statut: "en_cours", qui: "marc", valide: "mfp", note: "Maquette 0.2." },
        { titre: "Kit d'invitation des agents", lot: "L9", statut: "a_faire", qui: "mnb", valide: "mfp", echeance: "Janvier 2027" },
        { titre: "Guide des correspondants RH", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Janvier 2027" },
        { titre: "Fiche pour l'encadrant de proximité", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Janvier 2027" },
        { titre: "FAQ sur la plateforme", lot: "L9", statut: "a_valider", qui: "marc", valide: "mnb", attente: "mnb", note: "Version 0.1, page Moodle prête." },
        { titre: "Fiche réflexe d'assistance", lot: "L9", statut: "a_faire", qui: "mnb", note: "Premier niveau : pôle stagiaires et coordonnateurs." },
        { titre: "Relances et messages de soutien", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Février 2027" },
        { titre: "Webinaire d'accueil des agents", lot: "L9", statut: "a_faire", qui: "mnb", note: "Présente la boîte à outils, le carnet et les badges dès le départ." },
        { titre: "Page DINA sur ifap.nc", lot: "L9", statut: "a_faire", qui: "mfp", note: "Après le pilote." }
      ] },

    { code: "visuels", titre: "Visuels à générer", texte: "Images produites par Marc avec l'IA, à partir des prompts préparés.",
      livrables: [
        { titre: "Planches des personnages et des lieux", lot: "L1", statut: "livre", qui: "marc" },
        { titre: "Illustrations du module 1", lot: "L4", statut: "livre", qui: "marc" },
        { titre: "Infographies du module 1", lot: "L4", statut: "en_cours", qui: "marc", note: "Prompts prêts, première infographie produite." },
        { titre: "Illustrations du module 2", lot: "L4", statut: "en_cours", qui: "marc", note: "Prompts prêts." },
        { titre: "Illustrations des modules 3 à 5", lot: "L4", statut: "a_faire", qui: "marc" },
        { titre: "Visuels des 5 badges", lot: "L6", statut: "a_faire", qui: "marc" }
      ] }
  ],

  /* Actions qui ne sont pas des livrables mais qui bloquent l'avancée. Elles s'ajoutent à « En attente de ». */
  actions: [
    { attente: "employeurs", titre: "Faire tester le prototype par 2 ou 3 agents aux profils variés", echeance: "Début nov. 2026" },
    { attente: "employeurs", titre: "Désigner un ou deux référents par module pour valider le fond", note: "Condition pour tenir le pilote." },
    { attente: "mnb", titre: "Recontacter la province des Îles après la séance du 28-10" },
    { attente: "marc", titre: "Trancher l'ergonomie : regrouper des écrans pour réduire les clics" },
    { attente: "marc", titre: "Trancher le récit du premier jour pour un agent déjà en poste" },
    { attente: "marc", titre: "Trancher le prérequis numérique avant l'inscription" },
    { attente: "mfp", titre: "Relecture finale de la neutralité de genre" }
  ]
};
