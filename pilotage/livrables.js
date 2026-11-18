/* DINA — tableau de bord des livrables.
   SEUL FICHIER À MODIFIER à chaque avancée. La page se republie seule sur GitHub Pages (une minute environ).

   Statuts possibles : "a_faire", "en_cours", "a_valider", "valide", "livre", "sans_objet" (matrice seulement).
   Liens (facultatifs) : « lien » et « lienTexte » sur un livrable. Les documents restent sur Google Drive : seules les personnes à qui ils sont partagés peuvent les ouvrir.
   Personnes (clé "qui", "valide", "attente") : "marc", "mnb", "mfp", "valerie", "employeurs", "si", "pole".

   RÈGLE DE PUBLICATION : la page est publique (lien non référencé, mais lisible par tous).
   Temps : seulement des totaux (par rubrique de concertation, par groupe de livrables). Le détail réunion par réunion reste dans le coffre.
   Ne rien écrire ici sur les noms des experts ou des testeurs, ni les remarques internes.

   LIENS : toute tâche (action, évolution du moteur, action à conduire d'un module) porte « lie » : le titre exact d'un livrable,
   ou le code d'une étape du parcours (« M1 »), ou « parcours » (toute la matrice). Plusieurs : lie: ["…", "…"].
   Un lien manquant ou introuvable s'affiche en alerte sur la page. */

window.DINA_PILOTAGE = {
  miseAJour: "19-11-2026",
  avertissement: "",   /* statuts confirmés par Marc Rolland le 06-11 ; texte affiché en tête de page si renseigné */

  /* Temps de travail, en jours temps plein. Reprendre les chiffres de « Suivi du temps DINA » (coffre Obsidian). */
  /* Les 32 jours couvrent la production pédagogique et numérique seule. Les temps de communication restent historisés mais sont exclus du calcul du temps de production strict. Réunions et concertation (équipe projet, employeurs) viennent en plus. */
  temps: {
    prevuJours: 32,          /* charge de production annoncée à la direction */
    passeJours: 11.31,        /* production : cumul saisi */
    arreteAu: "19-11-2026",  /* date de la dernière saisie */
    /* Réunions, concertation et préparation : hors des 32 j. Trois rubriques. */
    concertation: {
      equipe: 1.16,          /* équipe projet : Marie-Noëlle Blanck, direction */
      employeurs: 0.39,      /* employeurs : COPIL, séances, échanges avec les DRH */
      preparation: 0.31      /* préparation et suites : supports, comptes rendus, courriels */
    },
    /* Temps donné par les autres membres de l'équipe (relectures, validations, hors réunions avec Marc). null = pas encore saisi. */
    contributions: [
      { qui: "mnb", jours: null, texte: "Relectures et validations" }
    ],
    /* Production répartie par groupe de livrables (codes des catégories, plus « parcours » = modules, « moteur » = outil de production, « divers »).
       La somme doit faire passeJours. Répartition des saisies anciennes faite au mieux le 16-11, à corriger par Marc. */
    productionParGroupe: { parcours: 5.83, cadrage: 1.75, ressources: 0.75, plateforme: 0.25, suivi: 0, communication: 1.2, administratif: 0, visuels: 0.15, moteur: 1, divers: 0.38 }
  },

  /* Périmètres distincts : production = formation digitale intégrée et recettée dans LIANE ; deploiement = communication, pilotage du pilote et organisation administrative. Les cases de la matrice appartiennent toutes à la production. */
  /* Avancement global historique : chaque livrable et chaque case de la matrice du parcours comptent pour une unité.
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
    { date: "Novembre 2026", titre: "Validation technique", texte: "Un module en SCORM fonctionne dans LIANE : lancement, reprise, traces (J-TECH). Premier test réussi le 10-11 ; le 18-11, rapport Moodle, score, reprise et badge validés sur M1. Reste le téléphone et la mesure de M2 à M5", etat: "prochain" },
    { date: "16-11-2026", titre: "Revue du tableau de bord (2)", texte: "Validation experte : calendrier fixé. Nouveau chantier : suivi administratif et financier (Amon, conventions, attestation)", etat: "franchi" },
    { date: "À partir du 08-12-2026", titre: "Pause de production", texte: "Trois semaines sans production. Avant le départ : les productions les plus urgentes", etat: "a_venir", pause: true },
    { date: "15-01-2027", titre: "Corpus validé par les experts", texte: "Les experts confirment que le corpus est complet et à jour. Une semaine de marge pour reporter les corrections dans les modules", etat: "a_venir" },
    { date: "22 au 31-01-2027", titre: "Modules validés par les experts", texte: "Chaque expert relit les passages qui le concernent, aux endroits indiqués", etat: "a_venir" },
    { date: "Janvier 2027", titre: "Test interne IFAP", texte: "Des agents de l'IFAP vivent le parcours sur une version plus complète que le prototype, et la démarche sert aussi de communication interne. Date à fixer", etat: "a_venir" },
    { date: "Février 2027", titre: "Pilote", texte: "Un mois, 10 à 20 agents de plusieurs employeurs, sans vidéo ni audio. Retours recueillis par questionnaire", etat: "a_venir" },
    { date: "Mi-mars 2027", titre: "Ouverture de DINA", texte: "Inscription sur demande de l'employeur", etat: "a_venir" }
  ],

  /* Matrice du parcours : une ligne par étape du parcours, une colonne par étape de fabrication.
     « actions » : les actions à conduire pour l'étape (titre, qui, lie obligatoire, doc = lien direct vers le document à relire).
     Les actions confiées à une autre personne que Marc apparaissent aussi dans « En attente de ». Le % d'avancement se calcule sur les états.
     Documents de relecture : Google Docs du dossier Drive « DINA — Relectures », partagé en commentaire avec Marie-Noëlle Blanck.
     Depuis le 10-11, la validation experte porte sur le corpus, avant le scénario. */
  etapesFabrication: ["Corpus", "Validation experte du corpus", "Scénario", "Storyboard", "Visuels", "E-learning", "Intégration Moodle"],
  etapesFabricationCourt: ["Corpus", "Expert", "Scénar.", "Story.", "Visuels", "E-learn.", "Moodle"],
  parcours: [
    { code: "POS", titre: "Positionnement", sousTitre: "Une semaine de travail",
      etats: ["sans_objet", "sans_objet", "valide", "en_cours", "sans_objet", "livre", "en_cours"],
      actions: [
        { titre: "Relire et valider le storyboard v0.7 (accueil, compétences en jeu, bilan en deux écrans)", qui: "mnb", doc: "https://docs.google.com/document/d/10ubCfgl-Fc_GpLd9vXFL4SWWJQDJ3NaR69mveV-SySg/edit", lie: "Restitution du positionnement, visuelle et imprimable" },
        { titre: "Valider les 21 libellés de compétences en « je »", qui: "mnb", doc: "https://docs.google.com/document/d/10ubCfgl-Fc_GpLd9vXFL4SWWJQDJ3NaR69mveV-SySg/edit", lie: "Référentiel des 21 compétences" },
        { titre: "Intégrer le positionnement et sa restitution dans LIANE", qui: "marc", lie: "Intégration du positionnement et de sa restitution" }
      ],
      note: "Storyboard v0.7 en ligne le 10-11, à relire : accueil réécrit (« une semaine de travail »), compétences en jeu affichées après chaque choix, bilan en deux écrans (profil, puis « Votre parcours » : le parcours module par module avec le résultat de l'agent ; l'équipe et la règle du jeu restent au prologue, D142). Visuels ILL-POS1 et ILL-POS2 en place depuis le 10-11. 16-11 et 17-11 : radar réduit, profil imprimable sur une page A4 dédiée et téléchargeable en PDF (logo DINA compris) ; à tester dans LIANE. Avant (v0.6) : storyboard prêt, à relire : accueil qui rassure (pas de note, pas d'échec, répondre spontanément), une seule passe, bouton « En clair », fin qui présente le dispositif. Revue du 10-11 : storyboard à terminer vite ; accueil à réécrire ; visuels à prévoir (Noa n'apparaît pas encore) ; bilan en deux écrans, radar puis univers de Noa ; le lien entre positionnement, prologue et M1 se fait dans le cours Moodle." },
    { code: "PRO", titre: "Prologue", sousTitre: "Bienvenue à l'ÉLAN",
      etats: ["sans_objet", "sans_objet", "valide", "en_cours", "livre", "livre", "en_cours"],
      actions: [
        { titre: "Relire et valider le storyboard v0.6 (repris à l'identique dans « Prologue en pages v0.1 »)", qui: "mnb", doc: "https://docs.google.com/document/d/1OK5Z0GqnKyhmZ91Hkn-gJkU9tNJwM-6exOITupLg8U0/edit", lie: "PRO" },
        { titre: "Produire le paquet SCORM et l'intégrer dans LIANE", qui: "marc", lie: "Paquets SCORM : prologue, 5 modules, bilan" }
      ],
      note: "Storyboard v0.6 le 14-11 : la carte « Le vendredi, un bilan » annonce la règle de D150 : six situations nouvelles, un badge avec 5 bonnes réponses sur 6, la non-réussite ne bloque pas, reprise libre. v0.5 le 11-11 : la carte « Le vendredi, un bilan » annonce « des situations nouvelles, que vous n'avez pas encore vues » (D145). Avant (v0.4, 10-11) : Noa est à l'ÉLAN depuis quelques semaines (D130), plus de premier jour ni de badge provisoire ; étape « Arrivée » renommée « Début » ; collègues de toutes catégories annoncés ; un carnet par module. Seul composant à présenter l'ÉLAN, l'équipe et la règle du jeu (D142). 16-11 : le prologue passe en pages qui défilent (D128) et remplace la version en écrans dans l'accueil ; storyboard « Prologue en pages v0.1 », mêmes textes que la v0.6 ; trois pages (Noa à l'ÉLAN, l'équipe, comment vous allez apprendre) puis l'écran de fin, avec barre d'étapes.", lien: "../prologue-pages.html" },
    { code: "M1", titre: "Je me repère", sousTitre: "Comprendre mon environnement",
      etats: ["en_cours", "a_faire", "valide", "livre", "en_cours", "en_cours", "en_cours"],
      actions: [
        { titre: "Terminer et vérifier le corpus ; lever les points juridiques", qui: "marc", lie: "Points juridiques à faire valider avant le pilote (M1, M2)" },
        { titre: "Faire valider le corpus par les experts spécialisés", qui: "mnb", lie: ["Validation juridique de l'épisode « Qui fait quoi au pays ? »", "Validation experte du contenu juridique : experts en vacation et budget propre à DINA"] },
        { titre: "Valider la grille des documents administratifs, les cinq demandes du défi et les repères historiques", qui: "mnb", doc: "https://docs.google.com/document/d/16g6h5X6RQW3NwDdbgyoq8GJf8RFGNaW-F5XOENtZ-cE/edit", lie: "M1" },
        { titre: "Vérifier la pertinence des infographies ; produire l'illustration de l'épisode « Qui fait quoi au pays ? »", qui: "marc", lie: ["Infographies du module 1", "Illustration de l'épisode « Qui fait quoi au pays ? » (accueil de l'ÉLAN)"] },
        { titre: "Valider les fiches outils du module (refaites, dans le carnet)", qui: "mnb", doc: "https://elearning-ifap.github.io/dina/m1-pages.html", docTexte: "Ouvrir le module (bouton Carnet)", lie: "Fiches outils du module 1" },
        { titre: "Transformer les fiches de connaissances en fiches d'apport A4 recto verso ; ajouter Nainville-les-Roches", qui: "marc", lie: "Fiches de connaissances" },
        { titre: "Trois choix de réponse au lieu de quatre dans les activités (retour province Sud)", qui: "marc", lie: "parcours" },
        { titre: "Relire M1 v0.11 et M2 v0.6 (apport du défi déplacé en fin d'épisode 3, nouvelle fiche outil « Transmettre avec le contexte », D162), puis régénérer les pages et rejouer les tests", qui: "marc", lie: ["M1", "M2"] },
        { titre: "Produire le paquet SCORM et l'intégrer dans LIANE", qui: "marc", lie: "Paquets SCORM : prologue, 5 modules, bilan" }
      ],
      note: "M1 en pages v0.11 le 17-11 : l'apport du défi passe en fin d'épisode 3 et devient une fiche outil débloquée après le défi (D160, D162) ; le défi ne contient plus d'apport ; durées : épisode 3 à 21 min, défi à 9 min. Pages non encore régénérées ni rejouées. M1 en pages v0.10 le 17-11 : deux questions d'évaluation remplacées par des situations nouvelles (la province prise pour la mairie, un chiffre sans source) ; la première est à valider par l'expert ; liens cliquables dans les textes. v0.8 le 14-11 : évaluation réécrite (D150) : deux séries de six situations nouvelles, deux par compétence ; validé avec 5 bonnes réponses sur 6 ; la non-réussite ne bloque pas. v0.7 le 14-11 : infographies INF-M1-01 à 04 et ILL-N09 (T10). v0.6 le 14-11 : corrections juridiques après l'audit du fond (enseignement primaire, collèges et écoles primaires dans la fiche « Qui fait quoi », aide aux personnes âgées, citation retirée du repère de Nainville-les-Roches, « en vigueur » au lieu de « définitive ») ; récit aligné : la liste d'orientation est vérifiée avant de partir chez Passerelles, plus de traces de nouvel arrivant, « La semaine suivante » en fin de module. M1 en pages v0.5 le 12-11 : quatre repères historiques rétablis dans « Aller plus loin » (épisode 1), avec la table ronde de Nainville-les-Roches (1983) demandée par Marie-Ange Morvan, DRH de la province Sud (D147) ; formulation à valider. M1 en pages v0.4 le 11-11 : jours de la semaine rétablis, lundi à vendredi (D143) ; défi recentré sur « transmettre au bon interlocuteur, avec le contexte » (D144), tri « je fais / j'oriente / je transmets à Samuel », nouvelle demande « aides de la province », à valider. Avant, v0.3 du 10-11 : module complet (épisodes 1 à 3, défi « Le premier appel de Joël », évaluation, bilan). Épisode 3 « Une information sûre » et défi repris de M1 en écrans, avec Cédric qui vit aussi une situation. M1 en écrans devient une réserve de contenus (D128). Carnet du module actif : chaque épisode débloque sa fiche (D132), dont une fiche de connaissances « Qui fait quoi en Nouvelle-Calédonie ? » (D131). Épisode 3 enrichi de trois nouveaux blocs de page : bureau à explorer, recherche simulée, message à composer. À valider : grille des documents administratifs (épisode 3), cinq demandes du défi.", lien: "../m1-pages.html" },
    { code: "M2", titre: "Je trouve ma place", sousTitre: "",
      etats: ["en_cours", "a_faire", "valide", "livre", "en_cours", "en_cours", "en_cours"],
      actions: [
        { titre: "Terminer et vérifier le corpus ; faire valider les contenus statutaires, l'exécution des instructions et le télétravail", qui: "marc", lie: "Points juridiques à faire valider avant le pilote (M1, M2)" },
        { titre: "Faire valider le corpus par les experts spécialisés", qui: "mnb", lie: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA" },
        { titre: "Relire le storyboard v0.6 (apport du défi déplacé, nouvelles situations, évaluation à trois choix ; le document partagé est encore en v0.5)", qui: "mnb", doc: "https://docs.google.com/document/d/1kiXFIDAR96ZaZp1Nv6eiG-1936kHaBFKAUWe14u_qy4/edit", lie: "M2" },
        { titre: "Rédiger la fiche de connaissances « Mon statut, en repères »", qui: "marc", lie: "Fiches de connaissances" },
        { titre: "Produire les fiches outils du module", qui: "marc", lie: "Fiches outils des modules 2 à 5" },
        { titre: "Produire le paquet SCORM et l'intégrer dans LIANE", qui: "marc", lie: "Paquets SCORM : prologue, 5 modules, bilan" }
      ],
      note: "M2 en pages v0.6 le 17-11 : l'apport du défi (urgence qui décale une échéance) passe en fin d'épisode 3 ; le défi ne contient plus d'apport ; la règle reste dans la fiche « Organiser ma semaine » ; durées : épisode 3 à 13 min, défi à 9 min. Page non encore régénérée ni rejouée. M2 en pages v0.5 le 17-11 : évaluation à trois choix par question (D155) ; une question remplacée par une situation nouvelle (Malia absente, le tableau de suivi et l'aide demandée par Cédric) ; neuf distracteurs retirés, à relire. v0.4 le 14-11 : évaluation réécrite (D150) : deux séries de six situations nouvelles, deux par compétence ; validé avec 5 bonnes réponses sur 6 ; la non-réussite ne bloque pas. v0.3 le 14-11 : corrections juridiques après l'audit du fond (exécution des instructions avec ses deux conditions, catégories A à D, référent déontologue retiré, stagiaire sans disponibilité, sources de la neutralité) ; tri de l'épisode 1 corrigé (la note de cadrage : « Je prépare, un autre décide »). v0.2 le 12-11 : télétravail présenté comme autorisé par l'employeur, pas comme un droit. M2 en pages v0.1 le 11-11, à relire : quatre pages (lundi : fiche de poste ; mardi : consigne floue ; mercredi : je suis bloqué ; jeudi : défi « La matinée déraille »), évaluation et bilan repris. Arbitrages A1 à A4 (D143 à D146) : jours partout, M2 propriétaire de « engager l'employeur », statut de Noa hors du récit (fiche de connaissances « Mon statut »), doublon du bureau à explorer retiré. Ana, Malia et Cédric vivent aussi une situation. Nouveaux blocs de page : remettre dans l'ordre, document. À valider : contenus statutaires, exécution des instructions, télétravail, nouvelles situations. Images : ILL-M06 dépend du télétravail.", lien: "../m2-pages.html" },
    { code: "M3", titre: "Je travaille avec les autres", sousTitre: "",
      etats: ["en_cours", "a_faire", "a_valider", "en_cours", "en_cours", "en_cours", "en_cours"],
      actions: [
        { titre: "Compléter et vérifier le corpus (note « Corpus à fournir — M3, M4, M5 »)", qui: "marc", lie: "M3" },
        { titre: "Faire valider le corpus par les experts spécialisés", qui: "mnb", lie: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA" },
        { titre: "Relire le scénario v0.2 (1 h 15, Cédric dans l'épisode 2) et le storyboard en pages v0.1 dans le prototype", qui: "marc", lie: "M3" },
        { titre: "Intégrer la phase « lancement » du projet Passerelles et le vocabulaire projet au scénario (D148)", qui: "marc", lie: ["M3", "Fil rouge : le dossier Passerelles"] },
        { titre: "Rédiger la fiche de connaissances « Contribuer à un projet »", qui: "marc", lie: "Fiche de connaissances « Contribuer à un projet »" },
        { titre: "Vérifier les 12 images de M3 dans la page (ILL-T01 à T08, INF-M3-01 à 04)", qui: "marc", lie: "Illustrations et infographies du module 3" },
        { titre: "Produire les fiches outils du module", qui: "marc", lie: "Fiches outils des modules 2 à 5" }
      ],
      note: "17-11 : scénario v0.2 (1 h 15 ; quatre compétences évaluées) et storyboard « M3 en pages v0.1 » : 4 pages, 28 écrans, 4 fiches. Les 12 images (8 scènes, 4 infographies) sont produites et placées. La page est construite, pas encore rejouée dans un navigateur." },
    { code: "M4", titre: "J'agis dans un cadre sécurisé", sousTitre: "",
      etats: ["en_cours", "a_faire", "a_faire", "en_cours", "en_cours", "en_cours", "en_cours"],
      actions: [
        { titre: "Compléter et vérifier le corpus (note « Corpus à fournir — M3, M4, M5 »)", qui: "marc", lie: "M4" },
        { titre: "Faire valider le corpus par les experts spécialisés", qui: "mnb", lie: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA" },
        { titre: "Écrire les épisodes 3 et 4, le défi du jeudi, l'évaluation du vendredi (trois repères, D158) et le bilan", qui: "marc", lie: "M4" },
        { titre: "Intégrer au récit une situation sur la confidentialité des données : document à caviarder, données nominatives et outil d'IA", qui: "marc", lie: "M4" },
        { titre: "Vérifier les images de M4 dans la page (ILL-Q01 à Q09, INF-M4-01 à 04)", qui: "marc", lie: "Illustrations des modules 4 et 5" },
        { titre: "Produire les fiches outils du module", qui: "marc", lie: "Fiches outils des modules 2 à 5" }
      ],
      note: "17-11 : descriptif v0.3 (1 h 45, un seul SCORM : D157 ; évaluation en trois repères : D158). Storyboard « M4 en pages v0.1 » : épisodes 1 (lundi) et 2 (mardi), page construite. Restent les épisodes 3 et 4, le défi, l'évaluation et le bilan. Images produites et placées. Fiche source sur le droit de retrait, l'accident de service et le service fait ajoutées au corpus." },
    { code: "M5", titre: "J'incarne le service public", sousTitre: "",
      etats: ["en_cours", "a_faire", "a_faire", "en_cours", "en_cours", "en_cours", "en_cours"],
      actions: [
        { titre: "Compléter et vérifier le corpus (note « Corpus à fournir — M3, M4, M5 »)", qui: "marc", lie: "M5" },
        { titre: "Faire valider le corpus par les experts spécialisés", qui: "mnb", lie: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA" },
        { titre: "Relire le storyboard M5 en pages v0.1", qui: "marc", lie: "M5" },
        { titre: "Voir les images de M5 dans la page (ILL-S01 à S09, INF-M5-01 à 04)", qui: "marc", lie: "Illustrations des modules 4 et 5" },
        { titre: "Produire les fiches outils du module", qui: "marc", lie: "Fiches outils des modules 2 à 5" }
      ],
      note: "17-11 : descriptif v0.2 (1 h 15, trois repères). Storyboard « M5 en pages v0.1 » : cinq pages (lundi à jeudi, défi), évaluation, bilan et 5 fiches. Page « m5-pages » construite le 17-11, pas encore rejouée dans un navigateur ; 18-11 : les 13 images (9 scènes, 4 infographies) sont produites et placées. D163 : la preuve de la compétence C19 est cherchée dans M5." },
    { code: "BIL", titre: "Bilan de parcours", sousTitre: "",
      etats: ["sans_objet", "a_faire", "a_faire", "a_faire", "sans_objet", "a_faire", "en_cours"],
      actions: [
        { titre: "Concevoir le bilan de parcours et l'évaluation de la compétence C21", qui: "marc", lie: "BIL" },
        { titre: "Faire valider le corpus par les experts spécialisés", qui: "mnb", lie: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA" },
        { titre: "Produire le paquet SCORM et l'intégrer dans LIANE", qui: "marc", lie: "Paquets SCORM : prologue, 5 modules, bilan" }
      ],
      note: "Clôture du parcours et évaluation de la compétence C21." }
  ],

  /* Livrables par catégorie.
     Champs : titre, lot, statut, qui (responsable), valide (qui valide), attente (qui doit agir maintenant), echeance, note. */
  categories: [
    { code: "cadrage", titre: "Cadrage", perimetre: "production", texte: "Les règles communes à tout le parcours.",
      livrables: [
        { titre: "Référentiel des 21 compétences", lot: "L1", statut: "valide", qui: "marc", valide: "employeurs", note: "Validé par les employeurs." },
        { titre: "Répartition des compétences par module", lot: "L1", statut: "valide", qui: "marc", valide: "mnb" },
        { titre: "Architecture pédagogique du parcours", lot: "L1", statut: "valide", qui: "marc", note: "Version 0.3 validée le 10-11 (D142) : répartition des messages entre Moodle et les composants SCORM, parcours en dix étapes, matrice des messages. Le plan d'ensemble : ordre des étapes, moment de chaque module dans les trois mois, durées, compétences travaillées et évaluées par module (21 compétences × modules). Version 0.2 du 07-10, à mettre à jour : M2 ramené à 1 h, positionnement non rejouable, 8 h estimées." },
        { titre: "Règles de production (pédagogie, récit, visuels, évaluation)", lot: "L1", statut: "en_cours", qui: "marc", valide: "mnb", attente: "marc", note: "16-11 : le document v0.1 est perdu (introuvable dans le coffre et le Drive). À refaire plus tard. Version 0.1 du 11-11 : un document court qui rassemble les canons et les décisions jusqu'à D146 (pédagogie, récit, écriture, visuels, évaluation, technique, validation du contenu). Cinq contradictions entre canons à trancher. Avant : Les règles que chaque module applique : mise en situation puis apport puis application, règles d'écriture, vocabulaire à deux étages, règles visuelles, règle des infographies, forme des évaluations. Elles sont aujourd'hui réparties dans les décisions : à rassembler en un document court." },
        { titre: "Libellés des 21 compétences (« Je… »)", lot: "L1", statut: "a_valider", qui: "marc", valide: "mnb", attente: "mnb", note: "Soumis à Marie-Noëlle Blanck le 17-11 ; retour attendu. Les libellés sont affichés dans le positionnement et le profil.", lien: "https://docs.google.com/document/d/1qz4N5qnPaZjMOBI4W2eCL2fwWemBIrGGqSZ24_Z9j3Y/edit", lienTexte: "Ouvrir le document" },
        { titre: "Univers de l'ÉLAN : personnages et lieux", lot: "L1", statut: "valide", qui: "marc", valide: "mnb" },
        { titre: "Fil rouge : le dossier Passerelles", lot: "L1", statut: "valide", qui: "marc", note: "16-11 : le dossier est aussi lu comme un projet (D148, option retenue avec Marie-Noëlle Blanck le 12-11). Chaque étape porte une phase du projet (émergence, cadrage, lancement, réalisation, mise en service, clôture) et les rôles sont nommés (porteur, décideur, référent du dossier, contributeurs). Le référentiel ne change pas. Phases proposées pour M3 à M5 et le bilan, à reprendre dans leurs scénarios ; M1 et M2 : retouches de vocabulaire seulement, pas encore faites. Vocabulaire à faire vérifier par les référents employeurs (agents de catégorie C)." },
        { titre: "Logo DINA et signature « Mes repères pour agir »", lot: "L1", statut: "valide", qui: "marc", valide: "mfp" },
        { titre: "Charte graphique DINA (couleurs, typographie, règles visuelles)", lot: "L1", statut: "valide", qui: "marc", valide: "mfp", note: "Considérée comme validée le 10-11, pour avancer. 06-11 : le vert foncé #103F41 est retiré du lecteur ; titres en gris anthracite, fond blanc sur les pages qui défilent." },
        { titre: "Récit adapté à l'agent déjà en poste", lot: "L1", statut: "en_cours", qui: "marc", note: "14-11 : appliqué à M1 en pages v0.6 (plus de traces de nouvel arrivant, « La semaine suivante » en fin de module) ; à reprendre dans M3 à M5. 11-11 : appliqué au prologue v0.4 (D130). Retenu le 10-11 : Noa est à l'ÉLAN depuis quelques semaines. Il a déjà son badge, l'organigramme et le règlement intérieur, on lui a présenté l'ÉLAN. Seule l'histoire change. Il faut aussi revoir le scénario du lendemain avec la mise en situation tournante." },
        { titre: "Décisions issues de la démonstration du 28-10", lot: "L1", statut: "valide", qui: "marc", valide: "mnb", note: "Validées le 06-11 : DINA 100 % en ligne, pilote sans vidéo ni audio, vocabulaire à deux étages, positionnement rassurant, infographies, mise en situation tournante, interface présentée dès le webinaire, temps de formation organisé par l'employeur. Le webinaire reste à préciser (contenu, public, moment)." },
        { titre: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA", lot: "L1", statut: "en_cours", qui: "mnb", valide: "valerie", attente: "valerie", note: "Principe confirmé le 17-11 : mobilisation de plusieurs experts spécialisés, notamment juridiques et fiscaux. Validation en deux temps : corpus complet et à jour, puis relecture des passages concernés des modules. Calendrier enregistré : corpus au 15-01-2027 et relecture du 22 au 31-01-2027 ; révision des dates envisagée. Budget et mobilisation à arbitrer." },
        { titre: "Points juridiques à faire valider avant le pilote (M1, M2)", lot: "L1", statut: "en_cours", qui: "marc", attente: "marc", note: "Liste courte du 11-11 : onze points, avec l'endroit du module et le texte de référence. À soumettre à un référent RH en attendant les experts en vacation. Sinon, mention « contenu en cours de validation » pendant le pilote.", lien: "https://drive.google.com/file/d/1SQCm1XtpIkuZcGqkyz4-JhcTsp2gr2Bn/view", lienTexte: "Ouvrir la liste" },
        { titre: "Alertes de validité du corpus", lot: "L1", statut: "a_faire", qui: "marc", note: "Pour chaque texte du corpus : date de vérification et date de révision prévue (textes transitoires, réformes annoncées). Pour savoir quand faire revoir un module." },
        { titre: "Validation juridique de l'épisode « Qui fait quoi au pays ? »", lot: "L1", statut: "en_cours", qui: "marc", valide: "mnb", duree: 0.5,
          note: "Ancien circuit de validation remplacé. Les experts spécialisés vérifient d’abord le corpus, puis relisent les passages des modules relevant de leur champ. Calendrier actuellement inscrit : corpus le 15-01-2027 ; modules du 22 au 31-01-2027, à recalibrer si les échéances anticipées se confirment." },
        { titre: "Mise en situation tournante", lot: "L1", statut: "valide", qui: "marc", valide: "mnb", note: "Noa reste le fil rouge. Ses collègues, dont des agents de catégorie C et d'autres filières, vivent aussi des situations. Le personnage est imposé : on ne le choisit pas." }
      ] },

    { code: "ressources", titre: "Ressources et évaluations", perimetre: "production", texte: "Ce que l'agent garde, ce qui valide ses acquis.",
      livrables: [
        { titre: "Restitution du positionnement, visuelle et imprimable", lot: "L6", statut: "en_cours", qui: "marc", note: "16-11 : radar réduit, profil imprimable sur une page A4 et téléchargeable en PDF. Reste la relecture du bilan et le test dans LIANE." },
        { titre: "Évaluations des modules, différentes à chaque passage", lot: "L6", statut: "en_cours", qui: "marc", note: "17-11 : jouables pour M1 et M2 ; les situations déjà vues sont remplacées (M1 v0.10, M2 v0.5). Séries A et B à faire relire par une tierce personne." },
        { titre: "Badges des 5 modules", lot: "L6", statut: "en_cours", qui: "marc", note: "Un badge par module, au nom du module. Délivré en cas de réussite : 5 réponses justes sur 6, au moins une par compétence (D150, 14-11). Badge de parcours ajouté le 18-11 (BDG-P)." },
        { titre: "Page d'ouverture : DINA, la notion de compétence et les 21 compétences", lot: "L5", statut: "en_cours", qui: "marc", note: "Demande des employeurs : voir toutes les compétences avant de commencer. Expliquer simplement ce qu'est une compétence. Piste visuelle : un code couleur qui montre ce que chaque module travaille. 16-11 : à faire vite, le code couleur par module se retrouve partout. Une partie existe peut-être déjà dans le prototype en pages : à vérifier. 18-11 : page « Avant de commencer » en ligne : ce qu'est DINA, une compétence, les 21 compétences par module (une seule couleur pour l'instant), comment ça marche, vie privée." },
        { titre: "Fiches outils du module 1", lot: "L5", statut: "a_valider", valide: "mnb", attente: "mnb", qui: "marc", note: "Validation à demander à Marie-Noëlle Blanck. Les fiches à double niveau figurent dans le carnet du module 1. 17-11 : une quatrième fiche, « Transmettre avec le contexte » (M1-DEF-03), est prévue dans M1 v0.11, à valider aussi." },
        { titre: "Fiches de connaissances", lot: "L5", statut: "en_cours", qui: "marc", note: "16-11 : contenus trop légers. Elles deviennent de vraies fiches d'apport : PDF A4 recto verso, relues par les experts, car l'agent les imprime et les garde (D154). Ajouter une fiche sur Nainville-les-Roches. Demande de la province Sud, retenue le 10-11, en plus des fiches outils. Exemple : les institutions et les compétences de chacune. 10-11 : « Qui fait quoi en Nouvelle-Calédonie ? » (M1) passe en fiche de connaissances." },
        { titre: "Fiche de connaissances « Contribuer à un projet »", lot: "L5", statut: "en_cours", qui: "marc", duree: 0.5, note: "D148 (12-11) : cycle du projet, rôles, jalons et livrables, réflexes du contributeur. Placée dans M3, rattachée à C04, C05, C07 et C20. Angle du contributeur, pas du pilote de projet. Format fiche d'apport A4 recto verso, relue par les experts (D154) : la durée de 0,5 jour est une estimation faite avant D154, à revoir. Pas de source locale identifiée ; un guide projet d'un employeur serait à privilégier. Un schéma du cycle est probable (élément graphique à produire hors Claude). 17-11 : contenu écrit dans le storyboard M3 v0.1 (fiche « Contribuer à un projet », schéma INF-M3-04 produit) ; mise en forme A4 recto verso faite le 17-11 (FA-M3-01.pdf, avant relecture experte). 17-11 : deux autres fiches d'apport M3 rédigées, « Communiquer en professionnel » (FA-M3-02) et « La convention » (FA-M3-03), avant relecture experte ; points à valider dans le coffre." },
        { titre: "Un carnet par module", lot: "L5", statut: "en_cours", qui: "marc", note: "Chaque fiche débloquée rejoint le carnet du module. L'agent retrouve ses fiches sans refaire les écrans et les enregistre au fil de l'eau. Cinq carnets, un kit complet en fin de parcours. 10-11 : actif dans M1 en pages (trois fiches, version à imprimer, téléchargement du carnet). 17-11 : quatre fiches dans M1 v0.11." },
        { titre: "Fiches outils des modules 2 à 5", lot: "L5", statut: "en_cours", qui: "marc", note: "17-11 : M3 faite : trois fiches outils en PDF A4 (FO-M3-E1 à E3, rendues depuis les données du module). M2, M4 et M5 restent à produire." },
        { titre: "Contenus de l'espace « Mes ressources »", lot: "L5", statut: "en_cours", qui: "marc", note: "18-11 : page « Mes ressources » en place avec sa structure (fiches outils, fiches de connaissances, vidéos) ; aucune fiche encore déposée." },
        { titre: "Sélection de vidéos existantes (statut, règles de la fonction publique)", lot: "L5", statut: "a_faire", qui: "marc", note: "En ressources complémentaires, hors de l'histoire de Noa. Aucune vidéo produite pour le pilote. 16-11 : peu de vidéos locales trouvées (exemple : le circuit d'une loi du pays au Congrès). Gardé pour plus tard." }
      ] },

    { code: "plateforme", titre: "Plateforme LIANE", perimetre: "production", texte: "Le parcours installé dans Moodle. La partie la plus complexe : LIANE s'utilise telle quelle. Le format de cours Tuiles, déjà installé, sert de page d'accueil.",
      livrables: [
        { titre: "Relevé des contraintes LIANE : version de Moodle, thème, droits, affichage mobile", lot: "L2", statut: "valide", qui: "marc", valide: "si", note: "16-11 : à relever avec le service informatique : version de Moodle, droits, affichage. La structure de LIANE est stable ; il faudra s'y adapter. 18-11 : version Moodle 4.5.2, thème LearnR, affichage mobile par défaut (aucun réglage spécifique) ; format de cours Tuiles installé. 18-11 (Marc, administrateur fonctionnel) : rôles existants = enseignant, gestionnaire d'inscription, participant ; cohortes possibles ; badges activés ; paquets SCORM limités à 100 Mo (à confirmer) ; pas de multi-employeur sur LIANE (démarche d'assistance à maîtrise d'ouvrage en cours : automatisation et multi-employeur). Réglages habituels des activités SCORM LIANE relevés (voir le test technique)." },
        { titre: "Test technique SCORM dans LIANE", lot: "J-TECH", statut: "valide", qui: "marc", valide: "si", echeance: "Novembre 2026", note: "Tests commencés, mode opératoire technique à poursuivre et documenter. Le 10-11 : API trouvée, reprise au bon endroit et statut completed ; restent à vérifier le rapport Moodle, le mobile et les réglages de l’activité. 18-11 : rapport Moodle consulté sur le paquet de test (tentative, démarré le, dernier accès, résultat ; rapport d'interactions : activité « Terminé »). Le résultat affiche 0 : le paquet de test v0.1 date d'avant la règle D150, et les modules LIANE existants affichent aussi 0 même quand le statut est « Réussi ». Réglages habituels sur LIANE : fenêtre courante, structure du contenu masquée, tentatives illimitées, meilleure tentative, imposer une nouvelle tentative = non, verrouillage = non, note la plus haute sur 100, achèvement sur les statuts terminé et réussi. Paquet de test v0.2 de M1 prêt (dist/DINA_m1-pages_SCORM12_diag_v0.2.zip) : évaluation D150 et diagnostic ; adaptateur SCORM vérifié dans un LMS simulé (échec, réussite, réussi puis raté, relance, limite de sauvegarde). Essais dans LIANE du 18-11 (compte test, achèvement « Réussi » seul) : réussite 5/6 → Réussi, résultat 83, puis 6/6 → 100, activité « Terminé » ; réussi puis raté → statut et note conservés ; échec 1/6 → échoué, résultat 17, activité restée « À faire » (D164 confirmée) ; relance après réussite = nouvelle tentative si on la demande, la meilleure tentative reste la note. Paquet v0.3 de M1 essayé dans LIANE le 18-11 : reprise après sortie validée, badge du cours de test délivré à la réussite (la date de début du cours doit précéder le premier suivi), sauvegarde à 36 % de la limite après allègement. Reste à tester : téléphone, taille de sauvegarde de M2 à M5, tentative unique pour le positionnement." },
        { titre: "Structure du cours DINA : accueil, positionnement, prologue, 5 modules, bilan, ressources, aide", lot: "L2", statut: "a_valider", qui: "marc", note: "18-11 (D165) : un seul cours au format Tuiles, sept tuiles (Démarrer, M1 à M5, Mon bilan), sans restriction d'accès entre les modules (D164). Cours créé dans LIANE, masqué pour l'instant. Squelette en place (annonces, « Avant de commencer », aide et FAQ, activités de chaque tuile), sans les paquets SCORM. Faits depuis le matin du 18-11 : bandeau d'accueil, pages « Avant de commencer », « Aide et FAQ » et « Mes ressources » (contenu de l'aide posé), badges créés (inactifs), achèvement du cours réglé. Restent les paquets SCORM, les blocs de transition, le contenu de « Mes ressources » et le cours encore masqué." },
        { titre: "Page d'accueil DINA (tableau de bord de l'agent)", lot: "L2", statut: "en_cours", qui: "marc", note: "18-11 : un bouton « Commencer le module… » (avec la durée) ajouté dans le résumé de chaque tuile, vers l'activité SCORM ; reste à tester le masquage des liens texte doublons. 18-11 : description du cours rédigée et publiée dans les réglages (bandeau, objectifs, sept étapes, ce que l'agent repart avec, public, validation, renvoi vers l'aide) ; sans durée ni contacts d'assistance, non arrêtés. 18-11 : bandeau de bienvenue et quatre accès rapides (positionnement, ressources, avant de commencer, aide) posés en haut de la page Général, d'après la maquette de septembre (bloc HTML, couleurs IFAP). Choix : pas de verrou « Prochainement » (D164), pas de « temps passé » (non fourni par Moodle), forum d'entraide non repris (à décider). Restent : progression par tuile, bouton « Reprendre », prénom de l'agent dans le bandeau. 16-11 : déjà discuté avec le service informatique ; pourcentages d'avancement possibles. 18-11 (D165) : l'accueil est la grille de sept tuiles du format Tuiles. Images des tuiles produites (photographies documentaires, 1200 × 800) : « Démarrer » en place, les six autres à déposer. Affichage de la progression par tuile à décider." },
        { titre: "Intégration du positionnement et de sa restitution", lot: "L2", statut: "a_faire", qui: "marc", note: "Le positionnement ne peut pas être rejoué." },
        { titre: "Paquets SCORM : prologue, 5 modules, bilan", lot: "L2", statut: "en_cours", qui: "marc", note: "18-11 : les huit activités SCORM du cours (positionnement, prologue, M1 à M5, bilan) sont créées dans LIANE, chacune dans sa tuile, avec un paquet provisoire (page « module en cours de production ») et les réglages de D164. Les vrais paquets restent à produire et à déposer à la place. Seul existe le paquet de test de M1." },
        { titre: "Évaluation dans le SCORM, score transmis à Moodle", lot: "L6", statut: "a_valider", qui: "marc", note: "D142 : l'évaluation se fait dans le module, avec les situations du récit, différentes à chaque passage. Le score et le statut « réussi » partent dans Moodle, qui délivre le badge. 14-11 (D150) : le moteur applique la règle 5 sur 6, envoie le score sur 100 et ne fait jamais repasser un module réussi en « échoué » ; vérifié avec l'API SCORM simulée. 18-11 : essayé dans LIANE sur le paquet de test de M1 (compte test) : 5/6 → réussi, 83 ; 6/6 → 100 ; réussi puis raté → statut et note conservés ; 1/6 → échoué, 17, activité restée « À faire » (D164). Reste à tester : téléphone, positionnement à tentative unique, modules M2 à M5." },
        { titre: "Règles de complétion et de progression", lot: "L2", statut: "a_valider", qui: "marc", note: "Activité, module, parcours. 18-11 : posées sur les huit activités SCORM : « Réussi » seul pour M1 à M5 (D164), « Terminé » pour positionnement, prologue et bilan (à confirmer), une seule tentative pour le positionnement (D126). Restent les questionnaires, la date de début du cours et l'affichage de la progression par tuile. 16-11 : mêmes données que l'attestation de suivi : à concevoir ensemble. 18-11 (D164) : l'achèvement du module est « Réussi » seul, sans restriction entre les modules. Conditions à fixer avant le pilote : elles se verrouillent dès que des agents ont terminé." },
        { titre: "Reprise de parcours là où l'agent s'est arrêté", lot: "L2", statut: "en_cours", qui: "marc", note: "18-11 : la reprise à l'intérieur d'un module est validée dans LIANE (paquet de test de M1 : entrée « reprise », état relu, retour à l'écran où l'agent s'était arrêté, statut conservé, état compressé compris). Reste la reprise au niveau du parcours : bouton « Reprendre » et progression par tuile sur la page d'accueil." },
        { titre: "Badges Moodle : critères et attribution", lot: "L6", statut: "en_cours", qui: "marc", note: "Badge sur la réussite du module ; accès au module suivant sur son achèvement : la non-réussite ne bloque pas (D150, 14-11). 18-11 : badges activés sur LIANE ; Marc peut les créer et les attribuer avec son rôle. 18-11 (D164) : pas de restriction d'accès entre les modules (ordre conseillé) ; l'achèvement du module est « Réussi » seul ; le badge suit l'achèvement. La règle de D150 sur l'accès au module suivant est remplacée. 18-11 : cinq badges créés dans le cours (Je me repère, Je trouve ma place, Je travaille avec les autres, J'agis dans un cadre sécurisé, J'incarne le service public), image et description en place, critère = réussite de l'activité SCORM du module. Badges laissés inactifs : l'activation verrouille les critères, à faire après la recette de janvier 2027. Sixième badge « Parcours DINA accompli » créé aussi (image BDG-P, critère = achèvement du cours, inactif). Achèvement du cours réglé : M1 à M5 et Bilan de parcours, toutes obligatoires (positionnement, prologue et questionnaires non exigés : à confirmer)." },
        { titre: "Espace « Mes ressources » : fiches outils téléchargeables", lot: "L5", statut: "en_cours", qui: "marc", note: "18-11 : la page « Mes ressources » est en place dans le cours (structure : fiches outils, fiches de connaissances, vidéos). Aucune fiche n'y est encore déposée. PDF déjà prêts avant relecture experte : fiches d'apport de M1 (FA-M1-01 à 03) et de M3 (FA-M3-01 à 03), fiches outils de M3 (FO-M3-E1 à E3)." },
        { titre: "Rubrique d'aide et FAQ dans le cours", lot: "L2", statut: "en_cours", qui: "marc", note: "18-11 : page « Aide et FAQ » en ligne dans le cours masqué (33 questions, 7 thèmes), d'après la FAQ v0.1 mise à jour des décisions récentes (positionnement en une passe, ordre conseillé, nouvelle tentative libre). Les 16 points « à valider » de la v0.1 ne sont pas tous tranchés : contacts de l'assistance, reprise d'un appareil à l'autre, sous-titres des vidéos, information de l'employeur après deux échecs." },
        { titre: "Rôles et droits : agent, IFAP, employeur", lot: "L8", statut: "en_cours", qui: "marc", valide: "si", note: "18-11 : participant (agent), enseignant et gestionnaire d'inscription (IFAP, pôle stagiaires) existent déjà. Pas de rôle référent employeur possible : LIANE n'est pas multi-employeur, un référent verrait les données de tous les employeurs. L'employeur ne se connecte donc pas à LIANE et reçoit un envoi extérieur (voir tableau employeur). Une cohorte DINA est possible. À trancher : où porter l'employeur de chaque agent." },
        { titre: "Espace de test pour le test interne et le pilote", lot: "L7", statut: "a_faire", qui: "marc" },
        { titre: "Recette : fonctionnement, pédagogie, accessibilité, mobile", lot: "L7", statut: "a_faire", qui: "marc", valide: "mnb", echeance: "Janvier 2027" }
      ] },

    { code: "suivi", titre: "Suivi du pilote", perimetre: "deploiement", texte: "Inscrire, suivre, tirer le bilan.",
      livrables: [
        { titre: "Questionnaire des nouveaux agents (début et fin de parcours)", lot: "L8", statut: "a_valider", qui: "marc", valide: "mnb", attente: "mnb", note: "Version 0.4 soumise à Marie-Noëlle Blanck, en attente de validation ; six choix à trancher.", lien: "https://docs.google.com/document/d/1jtyN2D9T1iCXORxhgB326IxREplwAQ3gZacTVHmCrVM/edit", lienTexte: "Questionnaire v0.4" },
        { titre: "Tableau d'inscription propre à DINA", lot: "L8", statut: "a_faire", qui: "mnb", note: "L'inscription part d'une demande formelle de l'employeur." },
        { titre: "Choix des employeurs pilotes et jauge par employeur", lot: "L8", statut: "a_faire", qui: "mnb", valide: "valerie", attente: "mnb", note: "10 à 20 agents, davantage si le retour se fait par questionnaire. Plusieurs employeurs, pas seulement la province Sud : penser à la ville de Nouméa. Éviter qu'un employeur prenne toutes les places." },
        { titre: "Politique de vente aux employeurs non cotisants", lot: "L8", statut: "a_faire", qui: "mnb", valide: "valerie", note: "Tarif d'inscription à DINA pour les employeurs non cotisants. Aucun tarif n'existe pour les formations digitales. Relève du conseil d'administration. Le calcul fait il y a deux ans pour les modules est à revoir." },
        { titre: "Quatre indicateurs de suivi pour l'IFAP", lot: "L8", statut: "a_faire", qui: "marc" },
        { titre: "Tableau employeur : avancement de ses agents", lot: "L8", statut: "a_faire", qui: "marc", valide: "si", note: "14-11 (D151) : envoi récurrent et automatisé au référent formation de chaque employeur, un tableau par employeur : modules commencés, terminés, terminés non validés. Jamais les réponses, les scores ni le positionnement. Outil à vérifier avec le service informatique. Point ouvert : le message aux agents. 18-11 : rien de prévu dans Moodle pour envoyer un tableau par employeur ; faisable par un script sur les API Moodle (accès API et base de données possibles, passage par le service informatique pour régler les API), à développer. Il faudra une façon de rattacher chaque agent à son employeur. L'assistance à maîtrise d'ouvrage en cours vise l'automatisation et le multi-employeur : ne pas l'attendre pour le pilote de février." },
        { titre: "Information de l'employeur après deux échecs", lot: "L8", statut: "a_faire", qui: "marc", note: "Modalité à définir." },
        { titre: "Test interne IFAP : testeurs et recueil des retours", lot: "L7", statut: "a_faire", qui: "marc", valide: "mnb", echeance: "Janvier 2027", note: "Sur une version plus complète que le prototype. Double but : des retours de qualité et une communication interne (faire connaître le projet, fierté collective, futurs relais). Moment à choisir. 16-11 : piste à trancher, intégrer des agents de l'IFAP au pilote de février au lieu d'un test séparé, ou réduire le test interne à une semaine. Deux choses à tester : les modules, puis les modules dans LIANE avec les messages Moodle qui font le lien." },
        { titre: "COPIL de mise en œuvre avec les employeurs", lot: "L8", statut: "a_faire", qui: "mnb", valide: "valerie", note: "Idée du 16-11, mise de côté pour l'instant. Montrer le produit fini et le résultat du test interne, aider chaque employeur à choisir comment inscrire ses agents (au fil de l'eau ou autrement), présenter les extractions de suivi. Go / no-go avant le pilote, ou restitution des résultats après : à décider." },
        { titre: "Bilan du pilote", lot: "L8", statut: "a_faire", qui: "mnb", echeance: "Mars 2027" }
      ] },

    { code: "communication", titre: "Communication et accompagnement", perimetre: "deploiement", texte: "Faire connaître DINA et accompagner les agents. 16-11 : Marie-Noëlle Blanck propose de reprendre la communication avec Marie-Françoise Pierre, pour que Marc se consacre à LIANE.",
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
        { titre: "FAQ sur la plateforme", lot: "L9", statut: "en_cours", qui: "marc", valide: "mnb", note: "En pause depuis le 10-11 : relève de la communication. 18-11 : la page « Aide et FAQ » est en ligne dans le cours masqué (33 questions, 7 thèmes, voir « Rubrique d'aide et FAQ dans le cours »), mise à jour des décisions récentes. Restent les points « à valider » de la v0.1 et l'alignement sur la durée estimée à 8 h et le caractère non obligatoire de DINA.", lien: "https://drive.google.com/file/d/1DQxsuZzGc4HM0VN79QWl6hONZG9zg8vY/view", lienTexte: "FAQ v0.1" },
        { titre: "Fiche réflexe d'assistance", lot: "L9", statut: "a_faire", qui: "mnb", note: "Premier niveau : pôle stagiaires et coordonnateurs." },
        { titre: "Relances et messages de soutien", lot: "L9", statut: "a_faire", qui: "mnb", echeance: "Février 2027" },
        { titre: "Webinaire d'accueil des agents", lot: "L9", statut: "a_faire", qui: "mnb", note: "Présente dès le départ la boîte à outils, les fiches outils et les badges. À annoncer aussi dans les supports de communication. À préciser : contenu, public, moment." },
        { titre: "Page DINA sur ifap.nc", lot: "L9", statut: "a_faire", qui: "mfp", note: "Après le pilote." },
        { titre: "Un nom pour les agents qui ont suivi DINA", lot: "L9", statut: "a_faire", qui: "marc", valide: "mfp", note: "Idée du 16-11 : un nom qui crée un sentiment d'appartenance, sans ironie possible." }
      ] },

    { code: "administratif", titre: "Suivi administratif et financier", perimetre: "deploiement", texte: "Ce qui fait exister DINA dans la gestion de l'IFAP : produit, inscriptions, conventions, attestation. Ouvert le 16-11 (D153).",
      livrables: [
        { titre: "Produit et action DINA dans Amon", lot: "L8", statut: "a_faire", qui: "mnb", note: "Une action ouverte toute l'année, en asynchrone, avec des entrées et sorties permanentes, sans date de fin. Vérifier comment Amon gère l'asynchrone (exemples : préparations aux concours, plateformes achetées) et le décompte des heures de formation." },
        { titre: "Publication de DINA dans le catalogue ifap.nc", lot: "L8", statut: "a_faire", qui: "mnb", note: "Suppose que le produit existe dans Amon. À vérifier avec le pôle concerné." },
        { titre: "Inscriptions au fil de l'eau par le pôle stagiaires", lot: "L8", statut: "a_faire", qui: "mnb", note: "Lié au tableau d'inscription propre à DINA (Suivi du pilote). Demande de l'employeur, inscription dans Amon puis accès dans LIANE. À terme, synchronisation automatique Amon – LIANE." },
        { titre: "Conventions de formation et impact budgétaire", lot: "L8", statut: "a_faire", qui: "mnb", note: "Conventions à établir pour les employeurs concernés : qui les fait, sur quel modèle." },
        { titre: "Message de bienvenue à l'inscription et mode d'emploi pour l'employeur", lot: "L8", statut: "a_faire", qui: "marc", valide: "mnb", note: "Pas une convocation : un message Moodle clair qui dit à l'agent qu'il est inscrit et ce qui l'attend. Pour l'employeur : ce que reçoit l'agent, ce que reçoit l'employeur. 18-11 : Moodle envoie déjà un message par défaut à l'inscription ; il peut être amélioré, avec peut-être des pièces jointes (à vérifier)." },
        { titre: "Attestation de suivi de DINA", lot: "L8", statut: "a_faire", qui: "marc", valide: "mnb", note: "Délivrée par la plateforme, pas par le pôle stagiaires. À définir : durée théorique ou réelle, intitulés précis des contenus, compétences travaillées. Jusqu'où peut-on attester (suivi, réussite, compétences) ? Lié aux règles de complétion." }
      ] },

    { code: "visuels", titre: "Visuels à générer", perimetre: "production", texte: "Images produites par Marc avec l'IA, à partir des prompts préparés.",
      livrables: [
        { titre: "Planches des personnages et des lieux", lot: "L1", statut: "livre", qui: "marc" },
        { titre: "Illustrations du module 1", lot: "L4", statut: "livre", qui: "marc" },
        { titre: "Infographies du module 1", lot: "L4", statut: "en_cours", qui: "marc", note: "INF-M1-01 à 04 intégrées dans M1 en pages v0.7 (14-11). Règle : plus de trois informations, une infographie. Reste à vérifier la pertinence de chacune." },
        { titre: "Illustration de l'épisode « Qui fait quoi au pays ? » (accueil de l'ÉLAN)", lot: "L4", statut: "a_faire", qui: "marc", duree: 0.25, note: "Prompt prêt (ILL-N09). Emplacement visible dans le prototype tant que l'image manque." },
        { titre: "Illustrations du module 2", lot: "L4", statut: "livre", qui: "marc", note: "14-11 : les six illustrations de M2 en pages (ILL-M01, M03, M04, M05, M06, M08) sont en place et conformes au storyboard v0.4. ILL-M02 et M07 ne servaient qu'à l'ancienne version de M2. Les évaluations n'appellent pas d'image." },
        { titre: "Illustrations et infographies du module 3", lot: "L4", statut: "en_cours", qui: "marc", note: "17-11 : 8 scènes (ILL-T01 à T08) et 4 infographies (INF-M3-01 à 04) produites, converties (JPG 85 %, PNG optimisés) et placées dans le dossier des images ; planches de lieux L2, L7 et L11 faites. Reste à les voir en place dans la page M3." },
        { titre: "Illustrations des modules 4 et 5", lot: "L4", statut: "en_cours", qui: "marc", note: "17-11 : côté M4, ILL-Q01 à Q09 et INF-M4-01 à 04 produites, allégées (JPG 1600 × 900, PNG 256 couleurs) et placées dans le dossier des images ; planche de lieux L8 et L9 faites. Reste à les voir en place dans la page M4. 18-11 : côté M5, ILL-S01 à S09 et INF-M5-01 à 04 produites, allégées (JPG 1600 × 900, PNG 256 couleurs) et placées dans le dossier des images ; planche de lieux L12 faite. Reste à les voir en place dans la page M5." },
        { titre: "Visuels des 5 badges", lot: "L6", statut: "en_cours", qui: "marc", note: "14-11 : prompts prêts (BDG-M1 à BDG-M5) : un médaillon par module, sur la carte du parcours, sans texte (Moodle affiche le nom). À confirmer : un pictogramme en design plat plutôt qu'une photographie (exception à D27). 18-11 : visuels v0.2 dessinés en SVG à partir du logo DINA (BDG-M1 à BDG-M5, BDG-P) et chargés sur les cinq badges du cours." }
      ] }
  ],

  /* Évolutions du moteur e-learning et des gabarits (outil de production).
     Ne compte pas dans l'avancement global. Priorité : p1, p2, p3 (voir « priorites »).
     Champs : titre, priorite, statut, duree (jours, estimation), lie (obligatoire : livrable, étape du parcours ou « parcours »), qui, note, lien. */
  backlog: {
    texte: "Les évolutions du moteur e-learning et des gabarits d'écran. L'ordre suit le calendrier : d'abord ce qui conditionne le test interne et le passage dans LIANE. Durées estimées, à confirmer.",
    priorites: [
      { code: "p1", titre: "Avant le test interne", echeance: "D'ici janvier 2027", texte: "Indispensable pour tester dans de bonnes conditions et passer dans LIANE." },
      { code: "p2", titre: "Selon les retours", echeance: "Février – mars 2027", texte: "À engager seulement si le test interne ou le pilote le confirme." },
      { code: "p3", titre: "Après l'ouverture", echeance: "À partir d'avril 2027", texte: "Pistes d'évolution, sans engagement." }
    ],
    items: [
      { priorite: "p1", titre: "Catalogue des gabarits", statut: "livre", duree: 1, qui: "marc", lie: "Règles de production (pédagogie, récit, visuels, évaluation)", lien: "../gabarits.html",
        note: "25 gabarits jouables dans le vrai moteur, avec les champs du storyboard. Se met à jour seul à chaque publication." },
      { priorite: "p1", titre: "Vérifier que la reprise tient dans la limite SCORM 1.2", statut: "a_valider", duree: 0.5, qui: "marc", valide: "si", lie: "Test technique SCORM dans LIANE",
        note: "La sauvegarde de reprise est limitée à 4 096 caractères. M1 complet mesuré dans LIANE le 18-11 : 2 316 caractères (57 %) avant allègement, bien plus que les 20 % estimés le 10-11. L'état sauvegardé a donc été allégé (compression sans perte, historique de retour réduit) : 1 485 caractères au maximum (36 %) sur le paquet v0.3, reprise après sortie validée dans LIANE. Reste à mesurer M2 à M5, plus longs (simulation : M3 à 59 % avant allègement), et à confirmer sur téléphone. Seuil de repli : 85 % (D157) ; au-delà, SCORM 2004." },
      { priorite: "p1", titre: "Réduire les clics : prototype en pages qu'on fait défiler", statut: "valide", duree: 2.5, qui: "marc", valide: "mnb", lie: "parcours", lien: "../m1-pages.html",
        note: "Fait le 06-11 sur l'épisode « Qui fait quoi au pays ? » : nouveau type d'écran « page » dans le moteur (blocs situation, apport, application, liste). Une seule page au lieu de six écrans, les réponses ouvrent la suite, la compétence est affichée. Ajouts du 06-11 au soir : trois demandes de transfert et le bouton « En clair ». Testé à 390 px et sur ordinateur. Épisode 2 « Qui décide à l'ÉLAN ? » ajouté le 06-11 au soir : M1 en pages (m1-pages.html), storyboard « M1 en pages v0.2 » dans le coffre, build.py à jour. Validé le 10-11 par Marie-Noëlle Blanck : on généralise à tout le parcours, la suite s'affiche quand l'activité est terminée." },
      { priorite: "p1", titre: "Afficher la compétence travaillée sur chaque écran", statut: "en_cours", qui: "marc", lie: ["M1", "POS"],
        note: "Demande unanime de la province Sud (06-11). Retenu le 10-11. Fait dans M1 en pages, et dans le positionnement après chaque choix (libellés en « je » à valider)." },
      { priorite: "p1", titre: "Bilan du positionnement en deux écrans", statut: "a_valider", valide: "mnb", attente: "mnb", duree: 0.5, qui: "marc", lie: "Restitution du positionnement, visuelle et imprimable",
        note: "Fait le 10-11 (storyboard v0.7) : le profil, puis « Votre parcours » (les étapes avec le résultat de l'agent dans chaque domaine). L'organigramme et la règle du jeu restent au prologue (D142). À relire.", lien: "../positionnement.html" },
      { priorite: "p1", titre: "Rubrique « Aller plus loin » en fin de journée", statut: "a_faire", duree: 0.5, qui: "marc", lie: "parcours",
        note: "Vocabulaire à deux étages : le bouton « En clair » reformule à la demande, « Aller plus loin » propose des contenus plus soutenus et des liens vers les textes." },
      { priorite: "p1", titre: "Accueil et page de fin du positionnement", statut: "a_valider", duree: 0.5, qui: "marc", valide: "mnb", lie: "Restitution du positionnement, visuelle et imprimable",
        note: "Fait le 06-11 (storyboard v0.6) : l'accueil rassure et demande de répondre spontanément, une seule passe. La fin présente le dispositif : assistance, erreurs expliquées, badges. À relire." },
      { priorite: "p1", titre: "Renommer l’étape « Arrivée » du prologue", statut: "livre", duree: 0.1, qui: "marc", lie: "PRO",
        note: "Retour du 10-11 : cliquer sur « Arrivée » pour commencer déroute (l'arrivée, c'est la fin d'une course). Fait le 10-11 (prologue v0.4) : « Début »." },
      { priorite: "p1", titre: "Profil de positionnement imprimable", statut: "livre", duree: 0.5, qui: "marc", lie: "Restitution du positionnement, visuelle et imprimable",
        note: "Fait le 16-11 : radar réduit, feuille A4 dédiée (en-tête DINA, radar, six domaines, vigilance, réponse de fin de semaine) et bouton « Télécharger en PDF » (logo en PNG le 17-11). À tester dans LIANE." },
      { priorite: "p1", titre: "Fiches outils en PDF A4 téléchargeables", statut: "en_cours", duree: 1, qui: "marc", lie: "Espace « Mes ressources » : fiches outils téléchargeables",
        note: "Une source unique pour l'écran et le PDF. Les fiches rejoignent le carnet du module. 17-11 : script de génération en place (build/fiches_outils_m3.py, PDF A4 une page depuis les données du module) ; fiches de M3 faites, M2, M4 et M5 restent à produire." },
      { priorite: "p1", titre: "Éprouver les quatre gabarits encore jamais testés", statut: "a_faire", duree: 0.5, qui: "marc", lie: "M2",
        note: "Choix multiple, remise en ordre, boîte de réception, semaine à organiser. À faire lors de la reprise du module 2." },
      { priorite: "p1", titre: "Figer la version du moteur pour le test interne", statut: "a_faire", duree: 0.25, qui: "marc", lie: "Test interne IFAP : testeurs et recueil des retours",
        note: "Version étiquetée sur GitHub : les retours restent rattachés à une version. Toute évolution suivante passe par cette liste." },

      { priorite: "p2", titre: "Gabarit « simulation de dialogue »", statut: "a_valider", duree: 1, qui: "marc", valide: "mnb", lie: "M3", lien: "../simulation.html",
        note: "Prototype jouable : l'appel de Joël (M3). Mis de côté le 10-11." },
      { priorite: "p2", titre: "Écran « Où en est le dossier Passerelles »", statut: "a_faire", duree: 1.5, qui: "marc", lie: "Fil rouge : le dossier Passerelles",
        note: "Montre l'état du fil rouge entre deux modules et s'enrichit à chaque module. Mis de côté le 10-11." },
      { priorite: "p2", titre: "Gabarit « document à annoter »", statut: "a_faire", duree: 1, qui: "marc", lie: "parcours",
        note: "Zones cliquables sur un vrai document : courrier, arrêté, organigramme. Prolonge l'image cliquable. Avec les pages qui défilent, les gabarits deviennent des blocs à reprendre." },
      { priorite: "p2", titre: "Règle d'usage des infographies", statut: "en_cours", duree: 0.5, qui: "marc", lie: "Règles de production (pédagogie, récit, visuels, évaluation)",
        note: "Retenue le 10-11 : tout apport de plus de trois notions passe par une infographie, une image cliquable ou des cartes. Application commencée." },
      { priorite: "p2", titre: "Mesurer l'usage de chaque gabarit", statut: "a_faire", duree: 1, qui: "marc", valide: "si", lie: "Quatre indicateurs de suivi pour l'IFAP",
        note: "Temps passé, écrans abandonnés. Pour savoir quels gabarits retravailler. Dépend des traces disponibles dans LIANE." },
      { priorite: "p2", titre: "Audit d'accessibilité complet du moteur", statut: "a_faire", duree: 2, qui: "marc", lie: "Recette : fonctionnement, pédagogie, accessibilité, mobile",
        note: "Clavier en priorité, puis lecteur d'écran, zoom à 200 %, contrastes, sur chaque gabarit." },

      { priorite: "p3", titre: "Audio et vidéo dans les modules", statut: "a_faire", qui: "marc", lie: "Sélection de vidéos existantes (statut, règles de la fonction publique)",
        note: "Exclus du pilote (décision du 28-10, confirmée le 06-11). Rien n'est produit tant que l'apport n'est pas démontré." },
      { priorite: "p3", titre: "Relire mes repères hors parcours", statut: "a_faire", qui: "marc", lie: "Contenus de l'espace « Mes ressources »",
        note: "Accès direct aux apports et aux fiches d'un module terminé, sans rejouer les situations." },
      { priorite: "p3", titre: "Déclinaisons par filière ou par catégorie", statut: "a_faire", qui: "marc", lie: "parcours",
        note: "Piste du 10-11 : des parcours adaptés à d'autres publics que l'attaché." },
      { priorite: "p3", titre: "Un moteur pour d'autres formations LIANE", statut: "a_faire", qui: "marc", lie: "parcours",
        note: "Réutiliser le moteur et le catalogue pour d'autres modules de l'IFAP." }
    ]
  },

  /* Actions qui ne sont pas des livrables mais qui bloquent l'avancée. Elles s'ajoutent à « En attente de ». « lie » obligatoire. */
  actions: [
    { attente: "employeurs", titre: "Faire tester le prototype par 2 ou 3 agents aux profils variés", echeance: "Début nov. 2026", lie: "Prototype en ligne" },
    { attente: "mnb", titre: "Mobiliser les experts spécialisés : validation du corpus, puis relecture ciblée des modules", lie: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA", note: "Organisation en deux temps ; échéances de janvier à confirmer." },
    { attente: "marc", titre: "Estimer la durée de production de chaque module", lie: "parcours", note: "Aucune durée estimée à ce jour dans la matrice du parcours." },
    { attente: "marc", titre: "Expliquer à la direction pourquoi le budget des experts est urgent", lie: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA", note: "16-11 : avant la clôture budgétaire ; corpus à valider au 15-01-2027." },
    { attente: ["marc", "mnb"], titre: "Lister les profils d'experts par module et les intervenants déjà sous contrat avec l'IFAP", lie: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA", note: "16-11 : priorité aux intervenants déjà sous contrat (avenant) ; vérifier leur qualité ; penser aux membres du COPIL." },
    { attente: "mnb", titre: "Vérifier avec les pôles concernés la gestion de DINA dans Amon et les conventions", lie: ["Produit et action DINA dans Amon", "Conventions de formation et impact budgétaire"] },
    { attente: "valerie", titre: "Arbitrer le recours à des experts en vacation et un budget propre à DINA", lie: "Validation experte du contenu juridique : experts en vacation et budget propre à DINA", note: "Demande préparée après l'échange avec la province Sud (06-11)." },
    { attente: ["marc", "mnb"], titre: "Choisir les testeurs internes de l'IFAP et le moment du test", lie: "Test interne IFAP : testeurs et recueil des retours", note: "À coupler avec une communication interne." }
  ]
};
