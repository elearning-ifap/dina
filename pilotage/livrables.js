/* DINA — tableau de bord des livrables.
   SEUL FICHIER À MODIFIER à chaque avancée. La page se republie seule sur GitHub Pages (une minute environ).

   Statuts possibles : "a_faire", "en_cours", "a_valider", "valide", "livre", "sans_objet" (matrice seulement).
   Liens (facultatifs) : « lien » et « lienTexte » sur un livrable. Les documents restent sur Google Drive : seules les personnes à qui ils sont partagés peuvent les ouvrir.
   Personnes (clé "qui", "valide", "attente") : "marc", "mnb", "mfp", "valerie", "employeurs", "si", "pole".

   RÈGLE DE PUBLICATION : la page est publique (lien non référencé, mais lisible par tous).
   Ne rien écrire ici sur le temps passé, les noms des experts ou des testeurs, ni les remarques internes. */

window.DINA_PILOTAGE = {
  miseAJour: "10-11-2026",
  avertissement: "",   /* statuts confirmés par Marc Rolland le 06-11 ; texte affiché en tête de page si renseigné */

  /* Temps de travail, en jours temps plein. Reprendre les chiffres de « Suivi du temps DINA » (coffre Obsidian). */
  /* Les 32 jours couvrent la production seule. Réunions et concertation (équipe projet, employeurs) viennent en plus. */
  temps: {
    prevuJours: 32,          /* charge de production annoncée à la direction */
    passeJours: 8.8,         /* production : cumul saisi */
    concertationJours: 1.73, /* réunions et concertation : cumul saisi, hors des 32 j */
    arreteAu: "10-11-2026"   /* date de la dernière saisie */
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
    { date: "Début nov. 2026", titre: "Retours des agents testeurs", texte: "2 ou 3 agents par employeur testent le prototype, retours sous 10 jours. L'essentiel des retours est reçu ; d'autres restent possibles", etat: "prochain" },
    { date: "10-11-2026", titre: "Revue du tableau de bord", texte: "Arbitrages sur l'ergonomie, le récit, les fiches, la validation experte et le pilote", etat: "franchi" },
    { date: "Novembre 2026", titre: "Validation technique", texte: "Un module en SCORM fonctionne dans LIANE : lancement, reprise, traces (J-TECH). Date à fixer", etat: "a_venir" },
    { date: "À partir du 08-12-2026", titre: "Pause de production", texte: "Trois semaines sans production. Avant le départ : les productions les plus urgentes", etat: "a_venir", pause: true },
    { date: "Janvier 2027", titre: "Test interne IFAP", texte: "Des agents de l'IFAP vivent le parcours sur une version plus complète que le prototype, et la démarche sert aussi de communication interne. Date à fixer", etat: "a_venir" },
    { date: "Février 2027", titre: "Pilote", texte: "Un mois, 10 à 20 agents de plusieurs employeurs, sans vidéo ni audio. Retours recueillis par questionnaire", etat: "a_venir" },
    { date: "Mi-mars 2027", titre: "Ouverture de DINA", texte: "Inscription sur demande de l'employeur", etat: "a_venir" }
  ],

  /* Matrice du parcours : une ligne par étape du parcours, une colonne par étape de fabrication.
     Depuis le 10-11, la validation experte porte sur le corpus, avant le scénario. */
  etapesFabrication: ["Corpus", "Validation experte du corpus", "Scénario", "Storyboard", "Visuels", "E-learning", "Intégration Moodle"],
  etapesFabricationCourt: ["Corpus", "Expert", "Scénar.", "Story.", "Visuels", "E-learn.", "Moodle"],
  parcours: [
    { code: "POS", titre: "Positionnement", sousTitre: "Votre première semaine",
      etats: ["sans_objet", "sans_objet", "valide", "en_cours", "sans_objet", "livre", "a_faire"],
      note: "Prototype en ligne (v0.1). Storyboard v0.6 prêt, à relire : accueil qui rassure (pas de note, pas d'échec, répondre spontanément), une seule passe, bouton « En clair », fin qui présente le dispositif. Reste : impression du profil. Revue du 10-11 : storyboard à terminer vite ; accueil à réécrire ; visuels à prévoir (Noa n'apparaît pas encore) ; bilan en deux écrans, radar puis univers de Noa ; le lien entre positionnement, prologue et M1 se fait dans le cours Moodle." },
    { code: "PRO", titre: "Prologue", sousTitre: "Bienvenue à l'ÉLAN",
      etats: ["sans_objet", "sans_objet", "valide", "en_cours", "livre", "livre", "a_faire"],
      note: "Prototype en ligne (v0.1). Storyboard v0.3 en cours : arrivée de Noa, message de fin. Encore des difficultés : à reprendre. Récit à adapter : Noa est à l'ÉLAN depuis quelques semaines." },
    { code: "M1", titre: "Je me repère", sousTitre: "Comprendre mon environnement",
      etats: ["en_cours", "a_faire", "valide", "livre", "en_cours", "en_cours", "a_faire"],
      note: "Prototype en ligne (v0.1). Version 0.2 en cours : jours de la semaine, infographies, retours du 28-10. Prototype « M1 en pages » (06-11) : épisodes 1 « Qui fait quoi au pays ? » et 2 « Qui décide à l'ÉLAN ? », chacun en une page (situation, apport, application, transfert, liste). Le 10-11, les pages qui défilent sont retenues pour tout le parcours." },
    { code: "M2", titre: "Je trouve ma place", sousTitre: "",
      etats: ["en_cours", "a_faire", "valide", "en_cours", "en_cours", "en_cours", "a_faire"],
      note: "Storyboard v0.4 à reprendre : M1 a beaucoup changé (pages qui défilent, récit, mise en situation tournante). E-learning v0.1 à reprendre sur le modèle de M1." },
    { code: "M3", titre: "Je travaille avec les autres", sousTitre: "",
      etats: ["en_cours", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire"],
      note: "Premiers éléments de corpus, à compléter et à vérifier. Scénario à écrire." },
    { code: "M4", titre: "J'agis dans un cadre sécurisé", sousTitre: "",
      etats: ["en_cours", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire"],
      note: "Premiers éléments de corpus, à compléter et à vérifier. Scénario à écrire." },
    { code: "M5", titre: "J'incarne le service public", sousTitre: "",
      etats: ["en_cours", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire", "a_faire"],
      note: "Premiers éléments de corpus, à compléter et à vérifier. Scénario à écrire." },
    { code: "BIL", titre: "Bilan de parcours", sousTitre: "",
      etats: ["sans_objet", "a_faire", "a_faire", "a_faire", "sans_objet", "a_faire", "a_faire"],
      note: "Clôture du parcours et évaluation de la compétence C21." }
  ],

  /* Livrables par catégorie.
     Champs : titre, lot, statut, qui (responsable), valide (qui valide), attente (qui doit agir maintenant), echeance, note. */
  categories: [
    { code: "cadrage", titre: "Cadrage", texte: "Les règles communes à tout le parcours.",
      livrables: [
        { titre: "Référentiel des 21 compétences", lot: "L1", statut: "valide", qui: "marc", valide: "employeurs", note: "Validé par les employeurs." },
        { titre: "Répartition des compétences par module", lot: "L1", statut: "valide", qui: "marc", valide: "mnb" },
        { titre: "Architecture pédagogique du parcours", lot: "L1", statut: "en_cours", qui: "marc", note: "Le plan d'ensemble : ordre des étapes, moment de chaque module dans les trois mois, durées, compétences travaillées et évaluées par module (21 compétences × modules). Version 0.2 du 07-10, à mettre à jour : M2 ramené à 1 h, positionnement non rejouable, 8 h estimées." },
        { titre: "Règles de production (pédagogie, récit, visuels, évaluation)", lot: "L1", statut: "en_cours", qui: "marc", note: "Les règles que chaque module applique : mise en situation puis apport puis application, règles d'écriture, vocabulaire à deux étages, règles visuelles, règle des infographies, forme des évaluations. Elles sont aujourd'hui réparties dans les décisions : à rassembler en un document court." },
        { titre: "Univers de l'ÉLAN : personnages et lieux", lot: "L1", statut: "valide", qui: "marc", valide: "mnb" },
        { titre: "Fil rouge : le dossier Passerelles", lot: "L1", statut: "valide", qui: "marc" },
        { titre: "Logo DINA et signature « Mes repères pour agir »", lot: "L1", statut: "valide", qui: "marc", valide: "mfp" },
        { titre: "Charte graphique DINA (couleurs, typographie, règles visuelles)", lot: "L1", statut: "valide", qui: "marc", valide: "mfp", note: "Considérée comme validée le 10-11, pour avancer. 06-11 : le vert foncé #103F41 est retiré du lecteur ; titres en gris anthracite, fond blanc sur les pages qui défilent." },
        { titre: "Récit adapté à l'agent déjà en poste", lot: "L1", statut: "a_faire", qui: "marc", note: "Retenu le 10-11 : Noa est à l'ÉLAN depuis quelques semaines. Il a déjà son badge, l'organigramme et le règlement intérieur, on lui a présenté l'ÉLAN. Seule l'histoire change. Il faut aussi revoir le scénario du lendemain avec la mise en situation tournante." },
        { titre: "Décisions issues de la démonstration du 28-10", lot: "L1", statut: "valide", qui: "marc", valide: "mnb", note: "Validées le 06-11 : DINA 100 % en ligne, pilote sans vidéo ni audio, vocabulaire à deux étages, positionnement rassurant, infographies, mise en situation tournante, interface présentée dès le webinaire, temps de formation organisé par l'employeur. Le webinaire reste à préciser (contenu, public, moment)." },
        { titre: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA", lot: "L1", statut: "en_cours", qui: "mnb", valide: "valerie", attente: "valerie", note: "L'expert valide le corpus : ce que l'agent public doit connaître. Il n'intervient pas sur le module fini. Des experts des DRH valident le corpus avant le scénario, puis le mettent à jour chaque année. Demande de budget envoyée à la direction le 06-11." },
        { titre: "Alertes de validité du corpus", lot: "L1", statut: "a_faire", qui: "marc", note: "Pour chaque texte du corpus : date de vérification et date de révision prévue (textes transitoires, réformes annoncées). Pour savoir quand faire revoir un module." },
        { titre: "Validation juridique de l'épisode « Qui fait quoi au pays ? »", lot: "L1", statut: "a_valider", qui: "marc", valide: "employeurs", attente: "employeurs", duree: 0.5,
          note: "Onze situations (dont trois de transfert) et la règle de l'article 20. Fiche de validation prête, à envoyer aux référents. Points à confirmer : guichets (tribunal, aide à l'entreprise), collecte des ordures et syndicats de communes, bâtiments des écoles primaires, durée du travail des agents publics." },
        { titre: "Mise en situation tournante", lot: "L1", statut: "valide", qui: "marc", valide: "mnb", note: "Noa reste le fil rouge. Ses collègues, dont des agents de catégorie C et d'autres filières, vivent aussi des situations. Le personnage est imposé : on ne le choisit pas." }
      ] },

    { code: "ressources", titre: "Ressources et évaluations", texte: "Ce que l'agent garde, ce qui valide ses acquis.",
      livrables: [
        { titre: "Restitution du positionnement, visuelle et imprimable", lot: "L6", statut: "en_cours", qui: "marc" },
        { titre: "Évaluations des modules, différentes à chaque passage", lot: "L6", statut: "en_cours", qui: "marc", note: "Jouables pour M1 et M2." },
        { titre: "Badges des 5 modules", lot: "L6", statut: "en_cours", qui: "marc", note: "Un badge par module, au nom du module. Délivré en cas de réussite." },
        { titre: "Page d'ouverture : DINA, la notion de compétence et les 21 compétences", lot: "L5", statut: "a_faire", qui: "marc", note: "Demande des employeurs : voir toutes les compétences avant de commencer. Expliquer simplement ce qu'est une compétence. Piste visuelle : un code couleur qui montre ce que chaque module travaille." },
        { titre: "Fiches outils du module 1", lot: "L5", statut: "en_cours", qui: "marc", note: "Présentées le 28-10, à reprendre. Conservées le 10-11 (questions à se poser avant d'agir, vérifier qu'un texte est à jour…)." },
        { titre: "Fiches de connaissances", lot: "L5", statut: "a_faire", qui: "marc", note: "Demande de la province Sud, retenue le 10-11, en plus des fiches outils. Exemple : les institutions et les compétences de chacune." },
        { titre: "Un carnet par module", lot: "L5", statut: "a_faire", qui: "marc", note: "Chaque fiche débloquée rejoint le carnet du module. L'agent retrouve ses fiches sans refaire les écrans et les enregistre au fil de l'eau. Cinq carnets, un kit complet en fin de parcours." },
        { titre: "Fiches outils des modules 2 à 5", lot: "L5", statut: "a_faire", qui: "marc" },
        { titre: "Contenus de l'espace « Mes ressources »", lot: "L5", statut: "a_faire", qui: "marc" },
        { titre: "Sélection de vidéos existantes (statut, règles de la fonction publique)", lot: "L5", statut: "a_faire", qui: "marc", note: "En ressources complémentaires, hors de l'histoire de Noa. Aucune vidéo produite pour le pilote." }
      ] },

    { code: "plateforme", titre: "Plateforme LIANE", texte: "Le parcours installé dans Moodle. La partie la plus complexe : LIANE s'utilise telle quelle, sans plugin.",
      livrables: [
        { titre: "Relevé des contraintes LIANE : version de Moodle, thème, droits, affichage mobile", lot: "L2", statut: "a_faire", qui: "marc", valide: "si" },
        { titre: "Test technique SCORM dans LIANE", lot: "J-TECH", statut: "en_cours", qui: "marc", valide: "si", echeance: "Novembre 2026", note: "Lancement, complétion, reprise, traces. Condition avant de produire les modules 2 à 5 en série. 10-11 : moteur branché en SCORM 1.2 et paquet de test de M1 en pages prêt, avec panneau de diagnostic. Validé dans un LMS simulé. Reste : le dépôt dans un cours de test LIANE." },
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
        { titre: "Questionnaire des nouveaux agents (début et fin de parcours)", lot: "L8", statut: "a_valider", qui: "marc", valide: "mnb", attente: "mnb", note: "Version 0.3 à valider.", lien: "https://drive.google.com/file/d/19Du3F5ht-U4MRwbz4e8_tYLJb_9cVeVJ/view", lienTexte: "Questionnaire v0.3" },
        { titre: "Tableau d'inscription propre à DINA", lot: "L8", statut: "a_faire", qui: "mnb", note: "L'inscription part d'une demande formelle de l'employeur." },
        { titre: "Choix des employeurs pilotes et jauge par employeur", lot: "L8", statut: "a_faire", qui: "mnb", valide: "valerie", attente: "mnb", note: "10 à 20 agents, davantage si le retour se fait par questionnaire. Plusieurs employeurs, pas seulement la province Sud : penser à la ville de Nouméa. Éviter qu'un employeur prenne toutes les places." },
        { titre: "Politique de vente aux employeurs non cotisants", lot: "L8", statut: "a_faire", qui: "mnb", valide: "valerie", note: "Tarif d'inscription à DINA pour les employeurs non cotisants. Aucun tarif n'existe pour les formations digitales. Relève du conseil d'administration. Le calcul fait il y a deux ans pour les modules est à revoir." },
        { titre: "Quatre indicateurs de suivi pour l'IFAP", lot: "L8", statut: "a_faire", qui: "marc" },
        { titre: "Vue employeur : avancement de ses agents", lot: "L8", statut: "a_faire", qui: "marc", note: "Avancement seul, sans résultats ni badges." },
        { titre: "Information de l'employeur après deux échecs", lot: "L8", statut: "a_faire", qui: "marc", note: "Modalité à définir." },
        { titre: "Test interne IFAP : testeurs et recueil des retours", lot: "L7", statut: "a_faire", qui: "marc", valide: "mnb", echeance: "Janvier 2027", note: "Sur une version plus complète que le prototype. Double but : des retours de qualité et une communication interne (faire connaître le projet, fierté collective, futurs relais). Moment à choisir." },
        { titre: "Bilan du pilote", lot: "L8", statut: "a_faire", qui: "mnb", echeance: "Mars 2027" }
      ] },

    { code: "communication", titre: "Communication et accompagnement", texte: "Faire connaître DINA et accompagner les agents.",
      livrables: [
        { titre: "Stratégie de communication", lot: "L9", statut: "a_valider", qui: "marc", valide: "mfp", attente: "mfp", note: "Document de travail, version 0.1.", lien: "https://drive.google.com/file/d/1tzBDVqkObUqxBmc5h-dvG3qUkqEoeI53/view", lienTexte: "Stratégie v0.1" },
        { titre: "Stratégie de déploiement et d'adoption (marketing)", lot: "L9", statut: "a_valider", qui: "marc", valide: "mfp", attente: "mfp", note: "Document de travail, version 0.2. À ajouter : des temps de lien hors parcours (webinaires, petits-déjeuners), demande forte de la province Sud.", lien: "https://drive.google.com/file/d/1nx1eXCvQSQ6qcx93KbCCzBHqbL9L6H4o/view", lienTexte: "Stratégie v0.2" },
        { titre: "Présentation aux employeurs", lot: "L9", statut: "livre", qui: "marc", valide: "mnb", note: "Version courte du 28-10." },
        { titre: "Livret de test et annexe « DINA en bref »", lot: "L9", statut: "livre", qui: "marc", valide: "mnb", note: "Séance du 28-10." },
        { titre: "Prototype en ligne", lot: "L9", statut: "livre", qui: "marc", note: "Lien unique et QR code." },
        { titre: "Fiche argumentaire employeurs", lot: "L9", statut: "a_faire", qui: "mnb", valide: "mfp", note: "Inclure le message sur le temps de formation : l'employeur l'organise ou laisse l'agent le prendre sur son temps de travail. DINA n'est pas obligatoire ; il peut le devenir si la DRHFPNC ou l'employeur le décide." },
        { titre: "Visuels de lancement (affiches, bannières, écrans)", lot: "L9", statut: "a_valider", qui: "marc", valide: "mfp", attente: "mfp", note: "Version 0.1.", lien: "https://drive.google.com/drive/folders/1WbTczeUsrTDD7UW7OyYjo3fP00EovCfe", lienTexte: "Dossier des visuels" },
        { titre: "Vidéo de présentation", lot: "L9", statut: "en_cours", qui: "marc", valide: "mfp", note: "Maquette 0.2." },
        { titre: "Kit d'invitation des agents", lot: "L9", statut: "a_faire", qui: "mnb", valide: "mfp", echeance: "Janvier 2027" },
        { titre: "Guide des correspondants RH", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Janvier 2027" },
        { titre: "Fiche pour l'encadrant de proximité", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Janvier 2027" },
        { titre: "FAQ sur la plateforme", lot: "L9", statut: "en_cours", qui: "marc", valide: "mnb", note: "En pause depuis le 10-11 : relève de la communication. Brouillon v0.1 et page Moodle prêts. À aligner : durée estimée à 8 h, DINA non obligatoire.", lien: "https://drive.google.com/file/d/1DQxsuZzGc4HM0VN79QWl6hONZG9zg8vY/view", lienTexte: "FAQ v0.1" },
        { titre: "Fiche réflexe d'assistance", lot: "L9", statut: "a_faire", qui: "mnb", note: "Premier niveau : pôle stagiaires et coordonnateurs." },
        { titre: "Relances et messages de soutien", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Février 2027" },
        { titre: "Webinaire d'accueil des agents", lot: "L9", statut: "a_faire", qui: "mnb", note: "Présente dès le départ la boîte à outils, les fiches outils et les badges. À annoncer aussi dans les supports de communication. À préciser : contenu, public, moment." },
        { titre: "Page DINA sur ifap.nc", lot: "L9", statut: "a_faire", qui: "mfp", note: "Après le pilote." }
      ] },

    { code: "visuels", titre: "Visuels à générer", texte: "Images produites par Marc avec l'IA, à partir des prompts préparés.",
      livrables: [
        { titre: "Planches des personnages et des lieux", lot: "L1", statut: "livre", qui: "marc" },
        { titre: "Illustrations du module 1", lot: "L4", statut: "livre", qui: "marc" },
        { titre: "Infographies du module 1", lot: "L4", statut: "en_cours", qui: "marc", note: "Cinq infographies produites, deux à corriger avant intégration." },
        { titre: "Illustration de l'épisode « Qui fait quoi au pays ? » (accueil de l'ÉLAN)", lot: "L4", statut: "a_faire", qui: "marc", duree: 0.25, note: "Prompt prêt (ILL-N09). Emplacement visible dans le prototype tant que l'image manque." },
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
      { priorite: "p1", titre: "Vérifier que la reprise tient dans la limite SCORM 1.2", statut: "en_cours", duree: 0.5, qui: "marc", valide: "si", lie: "Test technique SCORM dans LIANE",
        note: "La sauvegarde de reprise est limitée à 4 096 caractères. À mesurer sur un module complet. Si la limite est dépassée : alléger l'état sauvegardé ou passer en SCORM 2004. 10-11 : M1 en pages, deux épisodes, environ 840 caractères (20 % de la limite). Un module de cinq jours devrait tenir, à confirmer." },
      { priorite: "p1", titre: "Réduire les clics : prototype en pages qu'on fait défiler", statut: "valide", duree: 2.5, qui: "marc", valide: "mnb", lie: "Revoir l'ergonomie : regrouper des écrans pour réduire les clics", lien: "../m1-pages.html",
        note: "Fait le 06-11 sur l'épisode « Qui fait quoi au pays ? » : nouveau type d'écran « page » dans le moteur (blocs situation, apport, application, liste). Une seule page au lieu de six écrans, les réponses ouvrent la suite, la compétence est affichée. Ajouts du 06-11 au soir : trois demandes de transfert et le bouton « En clair ». Testé à 390 px et sur ordinateur. Épisode 2 « Qui décide à l'ÉLAN ? » ajouté le 06-11 au soir : M1 en pages (m1-pages.html), storyboard « M1 en pages v0.2 » dans le coffre, build.py à jour. Validé le 10-11 par Marie-Noëlle Blanck : on généralise à tout le parcours, la suite s'affiche quand l'activité est terminée." },
      { priorite: "p1", titre: "Afficher la compétence travaillée sur chaque écran", statut: "a_faire", qui: "marc",
        note: "Demande unanime de la province Sud (06-11). Retenu le 10-11. Déjà fait dans M1 en pages." },
      { priorite: "p1", titre: "Bilan du positionnement en deux écrans", statut: "a_faire", duree: 0.5, qui: "marc", lie: "Restitution du positionnement, visuelle et imprimable",
        note: "Retenu le 10-11 : un écran pour le radar, puis un écran qui présente l'univers de Noa et la suite du parcours." },
      { priorite: "p1", titre: "Rubrique « Aller plus loin » en fin de journée", statut: "a_faire", duree: 0.5, qui: "marc",
        note: "Vocabulaire à deux étages : le bouton « En clair » reformule à la demande, « Aller plus loin » propose des contenus plus soutenus et des liens vers les textes." },
      { priorite: "p1", titre: "Accueil et page de fin du positionnement", statut: "a_valider", duree: 0.5, qui: "marc", valide: "mnb", lie: "Restitution du positionnement, visuelle et imprimable",
        note: "Fait le 06-11 (storyboard v0.6) : l'accueil rassure et demande de répondre spontanément, une seule passe. La fin présente le dispositif : assistance, erreurs expliquées, badges. À relire." },
      { priorite: "p1", titre: "Renommer l’étape « Arrivée » du prologue", statut: "a_faire", duree: 0.1, qui: "marc",
        note: "Retour du 10-11 : cliquer sur « Arrivée » pour commencer déroute (l'arrivée, c'est la fin d'une course). Proposition : « Début »." },
      { priorite: "p1", titre: "Profil de positionnement imprimable", statut: "a_faire", duree: 0.5, qui: "marc", lie: "Restitution du positionnement, visuelle et imprimable",
        note: "Marges, en-tête DINA, radar lisible, réponse de réflexion mise en forme." },
      { priorite: "p1", titre: "Fiches outils en PDF A4 téléchargeables", statut: "a_faire", duree: 1, qui: "marc", lie: "Espace « Mes ressources » : fiches outils téléchargeables",
        note: "Une source unique pour l'écran et le PDF. Les fiches rejoignent le carnet du module." },
      { priorite: "p1", titre: "Éprouver les quatre gabarits encore jamais testés", statut: "a_faire", duree: 0.5, qui: "marc",
        note: "Choix multiple, remise en ordre, boîte de réception, semaine à organiser. À faire lors de la reprise du module 2." },
      { priorite: "p1", titre: "Figer la version du moteur pour le test interne", statut: "a_faire", duree: 0.25, qui: "marc",
        note: "Version étiquetée sur GitHub : les retours restent rattachés à une version. Toute évolution suivante passe par cette liste." },

      { priorite: "p2", titre: "Gabarit « simulation de dialogue »", statut: "a_valider", duree: 1, qui: "marc", valide: "mnb", lien: "../simulation.html",
        note: "Prototype jouable : l'appel de Joël (M3). Mis de côté le 10-11." },
      { priorite: "p2", titre: "Écran « Où en est le dossier Passerelles »", statut: "a_faire", duree: 1.5, qui: "marc",
        note: "Montre l'état du fil rouge entre deux modules et s'enrichit à chaque module. Mis de côté le 10-11." },
      { priorite: "p2", titre: "Gabarit « document à annoter »", statut: "a_faire", duree: 1, qui: "marc",
        note: "Zones cliquables sur un vrai document : courrier, arrêté, organigramme. Prolonge l'image cliquable. Avec les pages qui défilent, les gabarits deviennent des blocs à reprendre." },
      { priorite: "p2", titre: "Règle d'usage des infographies", statut: "en_cours", duree: 0.5, qui: "marc",
        note: "Retenue le 10-11 : tout apport de plus de trois notions passe par une infographie, une image cliquable ou des cartes. Application commencée." },
      { priorite: "p2", titre: "Mesurer l'usage de chaque gabarit", statut: "a_faire", duree: 1, qui: "marc", valide: "si",
        note: "Temps passé, écrans abandonnés. Pour savoir quels gabarits retravailler. Dépend des traces disponibles dans LIANE." },
      { priorite: "p2", titre: "Audit d'accessibilité complet du moteur", statut: "a_faire", duree: 2, qui: "marc", lie: "Recette : fonctionnement, pédagogie, accessibilité, mobile",
        note: "Clavier en priorité, puis lecteur d'écran, zoom à 200 %, contrastes, sur chaque gabarit." },

      { priorite: "p3", titre: "Audio et vidéo dans les modules", statut: "a_faire", qui: "marc",
        note: "Exclus du pilote (décision du 28-10, confirmée le 06-11). Rien n'est produit tant que l'apport n'est pas démontré." },
      { priorite: "p3", titre: "Relire mes repères hors parcours", statut: "a_faire", qui: "marc",
        note: "Accès direct aux apports et aux fiches d'un module terminé, sans rejouer les situations." },
      { priorite: "p3", titre: "Déclinaisons par filière ou par catégorie", statut: "a_faire", qui: "marc",
        note: "Piste du 10-11 : des parcours adaptés à d'autres publics que l'attaché." },
      { priorite: "p3", titre: "Un moteur pour d'autres formations LIANE", statut: "a_faire", qui: "marc",
        note: "Réutiliser le moteur et le catalogue pour d'autres modules de l'IFAP." }
    ]
  },

  /* Actions qui ne sont pas des livrables mais qui bloquent l'avancée. Elles s'ajoutent à « En attente de ». */
  actions: [
    { attente: "employeurs", titre: "Faire tester le prototype par 2 ou 3 agents aux profils variés", echeance: "Début nov. 2026" },
    { attente: "employeurs", titre: "Désigner un ou deux référents par module pour valider le fond", note: "Indispensable : sans référents, pas de pilote." },
    { attente: "marc", titre: "Estimer la durée de production de chaque module", note: "Aucune durée estimée à ce jour dans la matrice du parcours." },
    { attente: "valerie", titre: "Arbitrer le recours à des experts en vacation et un budget propre à DINA", note: "Demande préparée après l'échange avec la province Sud (06-11)." },
    { attente: ["marc", "mnb"], titre: "Choisir les testeurs internes de l'IFAP et le moment du test", note: "À coupler avec une communication interne." }
  ]
};
