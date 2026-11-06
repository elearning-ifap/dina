/* DINA — tableau de bord des livrables.
   SEUL FICHIER À MODIFIER à chaque avancée. La page se republie seule sur GitHub Pages (une minute environ).

   Statuts possibles : "a_faire", "en_cours", "a_valider", "valide", "livre", "sans_objet" (matrice seulement).
   Personnes (clé "qui", "valide", "attente") : "marc", "mnb", "mfp", "valerie", "employeurs", "si", "pole".

   RÈGLE DE PUBLICATION : la page est publique (lien non référencé, mais lisible par tous).
   Ne rien écrire ici sur le temps passé, les noms des experts ou des testeurs, ni les remarques internes. */

window.DINA_PILOTAGE = {
  miseAJour: "06-11-2026",
  avertissement: "",   /* statuts confirmés par Marc Rolland le 06-11 ; texte affiché en tête de page si renseigné */

  /* Temps de travail, en jours temps plein. Reprendre les chiffres de « Suivi du temps DINA » (coffre Obsidian). */
  temps: {
    prevuJours: 32,          /* charge annoncée à la direction */
    passeJours: 9.9,         /* cumul saisi */
    arreteAu: "29-10-2026"   /* date de la dernière saisie */
  },

  /* Avancement global : chaque livrable et chaque case de la matrice du parcours comptent pour une unité.
     Part réalisée selon le statut ci-dessous. */
  /* Durée prévisionnelle de production : ajouter « duree: 2 » (en jours) sur un livrable ou une ligne du parcours.
     Sans durée, la page affiche « à estimer ». */
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
    { date: "28-10-2026", titre: "Démonstration du prototype", texte: "Positionnement, prologue et module 1 testés par les employeurs (J-PROT). Retours recueillis, provinces Nord et des Îles comprises", etat: "franchi" },
    { date: "06-11-2026", titre: "Échange avec la DRH de la province Sud", texte: "Retours sur le prototype : repères de compétences, forme des questions, suivi juridique du contenu", etat: "franchi" },
    { date: "Début nov. 2026", titre: "Retours des agents testeurs", texte: "2 ou 3 agents par employeur testent le prototype, retours sous 10 jours", etat: "prochain" },
    { date: "Novembre 2026", titre: "Validation technique", texte: "Un module en SCORM fonctionne dans LIANE : lancement, reprise, traces (J-TECH). Date à fixer", etat: "a_venir" },
    { date: "Décembre 2026", titre: "Pause de production", texte: "Trois semaines sans production", etat: "a_venir", pause: true },
    { date: "Janvier 2027", titre: "Test interne IFAP", texte: "Des agents de l'IFAP vivent le parcours complet et font leurs retours, avant toute ouverture à l'externe. Date à fixer", etat: "a_venir" },
    { date: "Février 2027", titre: "Pilote", texte: "Un mois, 10 à 20 agents, version actuelle sans vidéo ni audio", etat: "a_venir" },
    { date: "Mi-mars 2027", titre: "Ouverture de DINA", texte: "Inscription sur demande de l'employeur", etat: "a_venir" }
  ],

  /* Matrice du parcours : une ligne par étape du parcours, une colonne par étape de fabrication. */
  etapesFabrication: ["Corpus", "Scénario", "Storyboard", "Visuels", "E-learning", "Validation experte", "Intégration Moodle"],
  etapesFabricationCourt: ["Corpus", "Scénar.", "Story.", "Visuels", "E-learn.", "Expert", "Moodle"],
  parcours: [
    { code: "POS", titre: "Positionnement", sousTitre: "Votre première semaine",
      etats: ["sans_objet", "valide", "en_cours", "sans_objet", "livre", "sans_objet", "a_faire"],
      note: "Prototype en ligne (v0.1). Storyboard v0.6 prêt, à relire : accueil qui rassure (pas de note, pas d'échec, répondre spontanément), une seule passe, bouton « En clair », fin qui présente le dispositif. Reste : impression du profil." },
    { code: "PRO", titre: "Prologue", sousTitre: "Bienvenue à l'ÉLAN",
      etats: ["sans_objet", "valide", "en_cours", "livre", "livre", "sans_objet", "a_faire"],
      note: "Prototype en ligne (v0.1). Storyboard v0.3 en cours : arrivée de Noa, message de fin." },
    { code: "M1", titre: "Je me repère", sousTitre: "Comprendre mon environnement",
      etats: ["en_cours", "valide", "livre", "en_cours", "en_cours", "a_faire", "a_faire"],
      note: "Prototype en ligne (v0.1). Version 0.2 en cours : jours de la semaine, infographies, retours du 28-10. Épisode « Qui fait quoi au pays ? » refait en page qui défile (06-11), à valider : situation, apport, application, liste Passerelles." },
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
        { titre: "Logo DINA et signature « Mes repères pour agir »", lot: "L1", statut: "valide", qui: "marc", valide: "mfp" },
        { titre: "Charte graphique DINA (couleurs, typographie, règles visuelles)", lot: "L1", statut: "a_valider", qui: "marc", valide: "mfp", attente: "mfp", note: "06-11 : le vert foncé #103F41 est retiré du lecteur ; titres en gris anthracite, fond blanc sur les pages qui défilent." },
        { titre: "Récit adapté à l'agent déjà en poste", lot: "L1", statut: "a_faire", qui: "marc", note: "L'agent ne suit pas DINA le jour de sa prise de poste. Le récit doit rejoindre les situations professionnelles qu'il vit déjà. Piste : se souvenir de son propre premier jour et le comparer à celui de Noa. Province Sud (06-11) : DINA suivi peu après la prise de poste. Piste à trancher." },
        { titre: "Décisions issues de la démonstration du 28-10", lot: "L1", statut: "valide", qui: "marc", valide: "mnb", note: "Validées le 06-11 : DINA 100 % en ligne, pilote sans vidéo ni audio, vocabulaire à deux étages, positionnement rassurant, infographies, mise en situation tournante, interface présentée dès le webinaire, temps de formation organisé par l'employeur." },
        { titre: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA", lot: "L1", statut: "en_cours", qui: "mnb", valide: "valerie", note: "Les règles changent souvent. Proposition : des experts des DRH valident le corpus avant production, puis le mettent à jour chaque année. Demande à la direction en préparation." },
        { titre: "Validation juridique de l'épisode « Qui fait quoi au pays ? »", lot: "L1", statut: "a_valider", qui: "marc", valide: "employeurs", attente: "employeurs", duree: 0.5,
          note: "Huit situations et la règle de l'article 20. Points à confirmer : guichets (tribunal, aide à l'entreprise), collecte des ordures et syndicats de communes, bâtiments des écoles primaires, durée du travail des agents publics." },
        { titre: "Mise en situation tournante", lot: "L1", statut: "valide", qui: "marc", valide: "mnb", note: "Noa reste le fil rouge. Ses collègues, dont des agents de catégorie C et d'autres filières, vivent aussi des situations. Le personnage est imposé : on ne le choisit pas." }
      ] },

    { code: "ressources", titre: "Ressources et évaluations", texte: "Ce que l'agent garde, ce qui valide ses acquis.",
      livrables: [
        { titre: "Restitution du positionnement, visuelle et imprimable", lot: "L6", statut: "en_cours", qui: "marc" },
        { titre: "Évaluations des modules, différentes à chaque passage", lot: "L6", statut: "en_cours", qui: "marc", note: "Jouables pour M1 et M2." },
        { titre: "Badges des 5 modules", lot: "L6", statut: "en_cours", qui: "marc", note: "Un badge par module, au nom du module. Délivré en cas de réussite." },
        { titre: "Fiches outils du module 1", lot: "L5", statut: "en_cours", qui: "marc", note: "Présentées le 28-10, à reprendre. Piste du 06-11 : des « repères à garder », une page A4 par thème." },
        { titre: "Fiches outils des modules 2 à 5", lot: "L5", statut: "a_faire", qui: "marc" },
        { titre: "Contenus de l'espace « Mes ressources »", lot: "L5", statut: "a_faire", qui: "marc" },
        { titre: "Sélection de vidéos existantes (statut, règles de la fonction publique)", lot: "L5", statut: "a_faire", qui: "marc", note: "En ressources complémentaires, hors de l'histoire de Noa. Aucune vidéo produite pour le pilote." }
      ] },

    { code: "plateforme", titre: "Plateforme LIANE", texte: "Le parcours installé dans Moodle. La partie la plus complexe : LIANE s'utilise telle quelle, sans plugin.",
      livrables: [
        { titre: "Relevé des contraintes LIANE : version de Moodle, thème, droits, affichage mobile", lot: "L2", statut: "a_faire", qui: "marc", valide: "si" },
        { titre: "Test technique SCORM dans LIANE", lot: "J-TECH", statut: "a_faire", qui: "marc", valide: "si", echeance: "Novembre 2026", note: "Lancement, complétion, reprise, traces. Condition avant de produire les modules 2 à 5 en série." },
        { titre: "Structure du cours DINA : accueil, positionnement, prologue, 5 modules, bilan, ressources, aide", lot: "L2", statut: "a_faire", qui: "marc" },
        { titre: "Page d'accueil DINA (tableau de bord de l'agent)", lot: "L2", statut: "a_faire", qui: "marc", note: "Avec les composants Moodle disponibles, sans format de cours dédié." },
        { titre: "Intégration du positionnement et de sa restitution", lot: "L2", statut: "a_faire", qui: "marc", note: "Le positionnement ne peut pas être rejoué." },
        { titre: "Paquets SCORM : prologue, 5 modules, bilan", lot: "L2", statut: "a_faire", qui: "marc" },
        { titre: "Tests Moodle d'évaluation et banques de questions", lot: "L6", statut: "a_faire", qui: "marc", note: "Situations différentes à chaque passage. Résultat enregistré dans Moodle." },
        { titre: "Règles de complétion et de progression", lot: "L2", statut: "a_faire", qui: "marc", note: "Activité, module, parcours." },
        { titre: "Reprise de parcours là où l'agent s'est arrêté", lot: "L2", statut: "a_faire", qui: "marc" },
        { titre: "Badges Moodle : critères et attribution", lot: "L6", statut: "a_faire", qui: "marc" },
        { titre: "Espace « Mes ressources » : fiches outils téléchargeables", lot: "L5", statut: "a_faire", qui: "marc" },
        { titre: "Rubrique d'aide et FAQ dans le cours", lot: "L2", statut: "a_faire", qui: "marc" },
        { titre: "Rôles et droits : agent, IFAP, employeur", lot: "L8", statut: "a_faire", qui: "marc", valide: "si" },
        { titre: "Espace de test pour le test interne et le pilote", lot: "L7", statut: "a_faire", qui: "marc" },
        { titre: "Recette : fonctionnement, pédagogie, accessibilité, mobile", lot: "L7", statut: "a_faire", qui: "marc", valide: "mnb", echeance: "Janvier 2027" }
      ] },

    { code: "suivi", titre: "Suivi du pilote", texte: "Inscrire, suivre, tirer le bilan.",
      livrables: [
        { titre: "Questionnaire des nouveaux agents (début et fin de parcours)", lot: "L8", statut: "a_valider", qui: "marc", valide: "mnb", attente: "mnb", note: "Version 0.3 à valider." },
        { titre: "Tableau d'inscription propre à DINA", lot: "L8", statut: "a_faire", qui: "mnb", note: "L'inscription part d'une demande formelle de l'employeur." },
        { titre: "Choix des employeurs pilotes et jauge par employeur", lot: "L8", statut: "a_faire", qui: "mnb", valide: "valerie", attente: "mnb", note: "10 à 20 agents. Éviter qu'un employeur prenne toutes les places." },
        { titre: "Quatre indicateurs de suivi pour l'IFAP", lot: "L8", statut: "a_faire", qui: "marc" },
        { titre: "Vue employeur : avancement de ses agents", lot: "L8", statut: "a_faire", qui: "marc", note: "Avancement seul, sans résultats ni badges." },
        { titre: "Information de l'employeur après deux échecs", lot: "L8", statut: "a_faire", qui: "marc", note: "Modalité à définir." },
        { titre: "Test interne IFAP : testeurs et recueil des retours", lot: "L7", statut: "a_faire", qui: "marc", valide: "mnb", echeance: "Janvier 2027", note: "Des agents de l'IFAP suivent le parcours dans sa globalité avant le pilote externe." },
        { titre: "Bilan du pilote", lot: "L8", statut: "a_faire", qui: "mnb", echeance: "Mars 2027" }
      ] },

    { code: "communication", titre: "Communication et accompagnement", texte: "Faire connaître DINA et accompagner les agents.",
      livrables: [
        { titre: "Stratégie de communication", lot: "L9", statut: "a_valider", qui: "marc", valide: "mfp", attente: "mfp", note: "Document de travail, version 0.1." },
        { titre: "Stratégie de déploiement et d'adoption (marketing)", lot: "L9", statut: "a_valider", qui: "marc", valide: "mfp", attente: "mfp", note: "Document de travail, version 0.2." },
        { titre: "Présentation aux employeurs", lot: "L9", statut: "livre", qui: "marc", valide: "mnb", note: "Version courte du 28-10." },
        { titre: "Livret de test et annexe « DINA en bref »", lot: "L9", statut: "livre", qui: "marc", valide: "mnb", note: "Séance du 28-10." },
        { titre: "Prototype en ligne", lot: "L9", statut: "livre", qui: "marc", note: "Lien unique et QR code." },
        { titre: "Fiche argumentaire employeurs", lot: "L9", statut: "a_faire", qui: "mnb", valide: "mfp", note: "Inclure le message sur le temps de formation : l'employeur l'organise ou laisse l'agent le prendre sur son temps de travail. DINA n'est pas obligatoire ; il peut le devenir si la DRHFPNC ou l'employeur le décide." },
        { titre: "Visuels de lancement (affiches, bannières, écrans)", lot: "L9", statut: "a_valider", qui: "marc", valide: "mfp", attente: "mfp", note: "Version 0.1." },
        { titre: "Vidéo de présentation", lot: "L9", statut: "en_cours", qui: "marc", valide: "mfp", note: "Maquette 0.2." },
        { titre: "Kit d'invitation des agents", lot: "L9", statut: "a_faire", qui: "mnb", valide: "mfp", echeance: "Janvier 2027" },
        { titre: "Guide des correspondants RH", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Janvier 2027" },
        { titre: "Fiche pour l'encadrant de proximité", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Janvier 2027" },
        { titre: "FAQ sur la plateforme", lot: "L9", statut: "a_valider", qui: "marc", valide: "mnb", attente: "mnb", note: "Version 0.1, page Moodle prête. À aligner : durée estimée à 8 h, DINA non obligatoire." },
        { titre: "Fiche réflexe d'assistance", lot: "L9", statut: "a_faire", qui: "mnb", note: "Premier niveau : pôle stagiaires et coordonnateurs." },
        { titre: "Relances et messages de soutien", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Février 2027" },
        { titre: "Webinaire d'accueil des agents", lot: "L9", statut: "a_faire", qui: "mnb", note: "Présente dès le départ la boîte à outils, les fiches outils et les badges. À annoncer aussi dans les supports de communication." },
        { titre: "Page DINA sur ifap.nc", lot: "L9", statut: "a_faire", qui: "mfp", note: "Après le pilote." }
      ] },

    { code: "visuels", titre: "Visuels à générer", texte: "Images produites par Marc avec l'IA, à partir des prompts préparés.",
      livrables: [
        { titre: "Planches des personnages et des lieux", lot: "L1", statut: "livre", qui: "marc" },
        { titre: "Illustrations du module 1", lot: "L4", statut: "livre", qui: "marc" },
        { titre: "Infographies du module 1", lot: "L4", statut: "en_cours", qui: "marc", note: "Cinq infographies produites, deux à corriger avant intégration." },
        { titre: "Illustration de l'épisode « Qui fait quoi au pays ? » (accueil de l'ÉLAN)", lot: "L4", statut: "a_faire", qui: "marc", duree: 0.25, note: "Prompt prêt (ILL-QFQ1). Emplacement visible dans le prototype tant que l'image manque." },
        { titre: "Illustrations du module 2", lot: "L4", statut: "en_cours", qui: "marc", note: "Prompts prêts." },
        { titre: "Illustrations des modules 3 à 5", lot: "L4", statut: "a_faire", qui: "marc" },
        { titre: "Visuels des 5 badges", lot: "L6", statut: "a_faire", qui: "marc" }
      ] }
  ],

  /* Évolutions du moteur e-learning et des gabarits (outil de production).
     Ne compte pas dans l'avancement global. Priorité : p1, p2, p3 (voir « priorites »).
     Champs : titre, priorite, statut, duree (jours, estimation), lie (livrable ou action concernés), qui, note, lien. */
  backlog: {
    texte: "Les évolutions du moteur e-learning et des gabarits d'écran. L'ordre suit le calendrier : d'abord ce qui conditionne le test interne et le passage dans LIANE. Durées estimées, à confirmer.",
    priorites: [
      { code: "p1", titre: "Avant le test interne", echeance: "D'ici janvier 2027", texte: "Indispensable pour tester dans de bonnes conditions et passer dans LIANE." },
      { code: "p2", titre: "Selon les retours", echeance: "Février – mars 2027", texte: "À engager seulement si le test interne ou le pilote le confirme." },
      { code: "p3", titre: "Après l'ouverture", echeance: "À partir d'avril 2027", texte: "Pistes d'évolution, sans engagement." }
    ],
    items: [
      { priorite: "p1", titre: "Catalogue des gabarits", statut: "livre", duree: 1, qui: "marc", lien: "../gabarits.html",
        note: "25 gabarits jouables dans le vrai moteur, avec les champs du storyboard. Se met à jour seul à chaque publication." },
      { priorite: "p1", titre: "Vérifier que la reprise tient dans la limite SCORM 1.2", statut: "a_faire", duree: 0.5, qui: "marc", valide: "si", lie: "Test technique SCORM dans LIANE",
        note: "La sauvegarde de reprise est limitée à 4 096 caractères. À mesurer sur un module complet. Si la limite est dépassée : alléger l'état sauvegardé ou passer en SCORM 2004." },
      { priorite: "p1", titre: "Réduire les clics : prototype en pages qu'on fait défiler", statut: "a_valider", duree: 1.5, qui: "marc", valide: "mnb", attente: "mnb", lie: "Revoir l'ergonomie : regrouper des écrans pour réduire les clics", lien: "../qui-fait-quoi.html",
        note: "Fait le 06-11 sur l'épisode « Qui fait quoi au pays ? » : nouveau type d'écran « page » dans le moteur (blocs situation, apport, application, liste). Une seule page au lieu de six écrans, les réponses ouvrent la suite, la compétence est affichée. Testé à 390 px et sur ordinateur. Reste : retours de Marie-Noëlle et des testeurs avant de généraliser, report dans le storyboard et build.py." },
      { priorite: "p1", titre: "Afficher la compétence travaillée sur chaque écran", statut: "a_faire", qui: "marc",
        note: "Demande unanime de la province Sud (06-11), avec une présentation des 21 compétences au départ. À arbitrer." },
      { priorite: "p1", titre: "Bilan du positionnement en deux écrans", statut: "a_faire", duree: 0.5, qui: "marc", lie: "Restitution du positionnement, visuelle et imprimable",
        note: "La présentation des modules passe sous le bouton « suivant ». Piste : un écran pour le bilan, un écran pour les perspectives de formation. À arbitrer." },
      { priorite: "p1", titre: "Rubrique « Aller plus loin » en fin de journée", statut: "a_faire", duree: 0.5, qui: "marc",
        note: "Vocabulaire à deux étages : le bouton « En clair » reformule à la demande, « Aller plus loin » propose des contenus plus soutenus et des liens vers les textes." },
      { priorite: "p1", titre: "Accueil et page de fin du positionnement", statut: "a_valider", duree: 0.5, qui: "marc", valide: "mnb", lie: "Restitution du positionnement, visuelle et imprimable",
        note: "Fait le 06-11 (storyboard v0.6) : l'accueil rassure et demande de répondre spontanément, une seule passe. La fin présente le dispositif : assistance, erreurs expliquées, badges. À relire." },
      { priorite: "p1", titre: "Profil de positionnement imprimable", statut: "a_faire", duree: 0.5, qui: "marc", lie: "Restitution du positionnement, visuelle et imprimable",
        note: "Marges, en-tête DINA, radar lisible, réponse de réflexion mise en forme." },
      { priorite: "p1", titre: "Fiches outils en PDF A4 téléchargeables", statut: "a_faire", duree: 1, qui: "marc", lie: "Espace « Mes ressources » : fiches outils téléchargeables",
        note: "Une source unique pour l'écran et le PDF. Remplace le carnet unique, abandonné." },
      { priorite: "p1", titre: "Éprouver les quatre gabarits encore jamais testés", statut: "a_faire", duree: 0.5, qui: "marc",
        note: "Choix multiple, remise en ordre, boîte de réception, semaine à organiser. À faire lors de la reprise du module 2." },
      { priorite: "p1", titre: "Figer la version du moteur pour le test interne", statut: "a_faire", duree: 0.25, qui: "marc",
        note: "Version étiquetée sur GitHub : les retours restent rattachés à une version. Toute évolution suivante passe par cette liste." },

      { priorite: "p2", titre: "Gabarit « simulation de dialogue »", statut: "a_valider", duree: 1, qui: "marc", valide: "mnb", lien: "../simulation.html",
        note: "Prototype jouable : l'appel de Joël (M3). Le personnage réagit aux répliques choisies ; bilan et relecture annotée. Reste à l'intégrer au moteur après validation." },
      { priorite: "p2", titre: "Écran « Où en est le dossier Passerelles »", statut: "a_faire", duree: 1.5, qui: "marc",
        note: "Montre l'état du fil rouge entre deux modules et s'enrichit à chaque module." },
      { priorite: "p2", titre: "Gabarit « document à annoter »", statut: "a_faire", duree: 1, qui: "marc",
        note: "Zones cliquables sur un vrai document : courrier, arrêté, organigramme. Prolonge l'image cliquable." },
      { priorite: "p2", titre: "Règle d'usage des infographies", statut: "a_faire", duree: 0.5, qui: "marc",
        note: "À trancher : tout apport de plus de trois notions passe par une infographie, une image cliquable ou des cartes." },
      { priorite: "p2", titre: "Mesurer l'usage de chaque gabarit", statut: "a_faire", duree: 1, qui: "marc", valide: "si",
        note: "Temps passé, écrans abandonnés. Pour savoir quels gabarits retravailler. Dépend des traces disponibles dans LIANE." },
      { priorite: "p2", titre: "Audit d'accessibilité complet du moteur", statut: "a_faire", duree: 2, qui: "marc", lie: "Recette : fonctionnement, pédagogie, accessibilité, mobile",
        note: "Clavier, lecteur d'écran, zoom à 200 %, contrastes, sur chaque gabarit." },

      { priorite: "p3", titre: "Audio et vidéo dans les modules", statut: "a_faire", qui: "marc",
        note: "Exclus du pilote (décision du 28-10, confirmée le 06-11). Rien n'est produit tant que l'apport n'est pas démontré." },
      { priorite: "p3", titre: "Relire mes repères hors parcours", statut: "a_faire", qui: "marc",
        note: "Accès direct aux apports et aux fiches d'un module terminé, sans rejouer les situations." },
      { priorite: "p3", titre: "Un moteur pour d'autres formations LIANE", statut: "a_faire", qui: "marc",
        note: "Réutiliser le moteur et le catalogue pour d'autres modules de l'IFAP." }
    ]
  },

  /* Actions qui ne sont pas des livrables mais qui bloquent l'avancée. Elles s'ajoutent à « En attente de ». */
  actions: [
    { attente: "employeurs", titre: "Faire tester le prototype par 2 ou 3 agents aux profils variés", echeance: "Début nov. 2026" },
    { attente: "employeurs", titre: "Désigner un ou deux référents par module pour valider le fond", note: "Indispensable : sans référents, pas de pilote." },
    { attente: ["marc", "mnb"], titre: "Revoir l'ergonomie : regrouper des écrans pour réduire les clics", note: "Un autre prototype, avec des pages qu'on fait défiler." },
    { attente: "marc", titre: "Adapter le récit à l'agent déjà en poste depuis quelques semaines", note: "À rediscuter après l'échange avec la province Sud (06-11)." },
    { attente: ["marc", "mnb"], titre: "Rediscuter du prérequis numérique avant l'inscription", note: "Non abordé avec la province Sud le 06-11." },
    { attente: "valerie", titre: "Arbitrer le recours à des experts en vacation et un budget propre à DINA", note: "Demande préparée après l'échange avec la province Sud (06-11)." },
    { attente: ["marc", "mnb"], titre: "Choisir les testeurs internes de l'IFAP" }
  ]
};
