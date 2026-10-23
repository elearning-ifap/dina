/* GÉNÉRÉ par build/build.py depuis « Storyboard — M1 v0.1.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M1",
  "type": "module",
  "titre": "Je me repère",
  "code": "M1",
  "duree": "1 h",
  "intro": "Première semaine de Noa à ÉLAN. Il ne connaît encore ni les institutions calédoniennes, ni son établissement, ni les bonnes sources. Du lundi au vendredi, aidez-le à savoir qui fait quoi, où se situe ÉLAN et comment trouver une information sûre. Jeudi, un premier appel va tout mettre à l'épreuve.",
  "sections": [
   {
    "id": "entree",
    "libelle": "Entrée",
    "etiquette": "Le contexte",
    "titre": "Premier lundi",
    "debut": "M1-ENT-1",
    "duree": "3 min",
    "accroche": "Lundi, 8 h. Samuel accueille Noa."
   },
   {
    "id": "ep1",
    "libelle": "Épisode 1",
    "titre": "Qui fait quoi ?",
    "debut": "M1-E1-S1",
    "duree": "15 min",
    "accroche": "Six demandes arrivées à ÉLAN par erreur. Qui est compétent ?"
   },
   {
    "id": "ep2",
    "libelle": "Épisode 2",
    "titre": "Où est ÉLAN dans tout ça ?",
    "debut": "M1-E2-S1",
    "duree": "12 min",
    "accroche": "Premier comité de direction. Qui décide, qui prépare, qui exécute ?"
   },
   {
    "id": "ep3",
    "libelle": "Épisode 3",
    "titre": "Une information fiable",
    "debut": "M1-E3-S1",
    "duree": "12 min",
    "accroche": "Trois documents, trois versions. Lequel croire ?"
   },
   {
    "id": "defi",
    "libelle": "Défi",
    "titre": "Le premier appel de Joël",
    "debut": "M1-DI-1",
    "duree": "8 min",
    "accroche": "Jeudi, 10 h. Samuel et Malia sont absents. Le téléphone sonne."
   },
   {
    "id": "eval",
    "libelle": "Évaluation",
    "titre": "Le bilan de la semaine",
    "debut": "M1-EVA-INTRO",
    "duree": "6 min",
    "accroche": "Trois situations nouvelles pour vérifier vos repères."
   },
   {
    "id": "sortie",
    "libelle": "Sortie",
    "etiquette": "Mon bilan",
    "titre": "Ce que Noa a appris",
    "debut": "M1-SOR-1",
    "duree": "4 min",
    "accroche": "Ce que Noa retient, et où vous en êtes, vous."
   }
  ],
  "dossier": {
   "titre": "Vers le dossier Passerelles",
   "objet": "Le dossier n'existe pas encore. Ce que Noa apprend cette semaine lui servira jeudi, au premier appel de l'association Passerelles.",
   "roles": "Passerelles porte ses projets et décide. ÉLAN qualifie, étudie et coordonne.",
   "jalons": [
    {
     "id": "competent",
     "jour": "Lundi",
     "libelle": "Savoir qui est compétent",
     "section": "ep1"
    },
    {
     "id": "decide",
     "jour": "Mardi",
     "libelle": "Savoir qui décide à ÉLAN",
     "section": "ep2"
    },
    {
     "id": "source",
     "jour": "Mercredi",
     "libelle": "Savoir vérifier une source",
     "section": "ep3"
    },
    {
     "id": "appel",
     "jour": "Jeudi",
     "libelle": "Premier appel de Joël",
     "section": "defi"
    },
    {
     "id": "ne",
     "jour": "Vendredi",
     "libelle": "Un dossier est né",
     "section": "sortie"
    }
   ]
  },
  "personnages": {
   "Noa": "Chargé d'études et d'appui aux projets, ÉLAN",
   "Samuel": "Responsable du pôle études et projets, ÉLAN",
   "Malia": "Chargée d'études et d'évaluation, marraine de Noa, ÉLAN",
   "Ariane": "Directrice d'ÉLAN",
   "Ana": "Développement des compétences, ÉLAN",
   "Élise": "Agente d'accueil, une commune",
   "Joël": "Coordinateur de terrain, association Passerelles"
  }
 },
 "ecrans": {
  "M1-ENT-1": {
   "id": "M1-ENT-1",
   "type": "message",
   "illustration": "ILL-N01",
   "etape": "Entrée",
   "personnage": "Samuel",
   "canal": "oral",
   "titre": "Koné, lundi, 8 h",
   "texte": "Samuel accueille Noa au pôle études et projets.\n« Bienvenue, Noa. Cette semaine, pas de dossier : tu observes, tu poses des questions, tu apprends qui fait quoi. Ici, la moitié des demandes qu'on reçoit ne sont pas pour nous. Il faut savoir où les envoyer. »\n",
   "suite": "M1-ENT-2"
  },
  "M1-ENT-2": {
   "id": "M1-ENT-2",
   "type": "message",
   "etape": "Entrée",
   "personnage": "Samuel",
   "canal": "oral",
   "titre": "Lundi, 8 h 10",
   "texte": "Samuel se tourne vers Malia.\n« Malia sera ta marraine. Elle connaît la maison par cœur : pour toute question, va la voir. Pour les priorités et les validations, c'est moi. »\nMalia sourit : « Au début, on demande beaucoup. C'est normal. »\n",
   "suite": "M1-ENT-3"
  },
  "M1-ENT-3": {
   "id": "M1-ENT-3",
   "type": "outil",
   "etape": "Entrée",
   "fiche": "FICHE-M1-ENT",
   "titre": "Mes premiers jours",
   "texte": "Ana, du pôle ressources, remet à Noa son badge, ses accès et une liste pour ses premiers jours.\n**Quand l'utiliser ?** Dans vos premiers jours, chez votre employeur. Cochez au fur et à mesure, et notez les noms.\n",
   "competences": [
    "C02"
   ],
   "suite": "M1-ENT-AUTO"
  },
  "M1-ENT-AUTO": {
   "id": "M1-ENT-AUTO",
   "type": "auto-positionnement",
   "etape": "Entrée",
   "groupe": "M1",
   "moment": "avant",
   "titre": "Et vous, aujourd'hui ?",
   "texte": "Avant de suivre Noa, situez-vous. Vous retrouverez ces phrases vendredi, pour voir ce qui a bougé.",
   "echelle": [
    "Rarement",
    "Parfois",
    "Souvent"
   ],
   "items": [
    {
     "code": "C01",
     "libelle": "Je sais quelle institution fait quoi.",
     "pourquoi": "Sinon, j'envoie les gens au mauvais guichet, et ils perdent un déplacement."
    },
    {
     "code": "C02",
     "libelle": "Je sais situer mon employeur et trouver le bon interlocuteur.",
     "pourquoi": "Sinon, je perds du temps, et j'en fais perdre aux autres."
    },
    {
     "code": "C17",
     "libelle": "Je vérifie l'origine et la date d'une information avant de l'utiliser.",
     "pourquoi": "Sinon, je transmets une règle périmée sans le savoir."
    }
   ],
   "retour": "Merci. Gardez ces phrases en tête pendant la semaine de Noa.\n",
   "suite": "M1-ENT-FIN"
  },
  "M1-ENT-FIN": {
   "id": "M1-ENT-FIN",
   "type": "fin-section",
   "etape": "Entrée",
   "titre": "La semaine de Noa",
   "texte": "Chaque jour, une situation de travail. Vous décidez avec Noa ; chaque réponse est expliquée. Ce que Noa reçoit d'utile est rangé dans votre **carnet**, en haut de l'écran.\n",
   "acquis_titre": "Au programme",
   "acquis": [
    {
     "titre": "Lundi — Qui fait quoi ?",
     "texte": "L'État, la Nouvelle-Calédonie, les provinces, les communes."
    },
    {
     "titre": "Mardi — Où est ÉLAN dans tout ça ?",
     "texte": "Son employeur, son organigramme, ses interlocuteurs."
    },
    {
     "titre": "Mercredi — Une information fiable",
     "texte": "Chercher, vérifier, garder la référence."
    },
    {
     "titre": "Jeudi — Le premier appel de Joël",
     "texte": "Le défi : tout mettre en pratique, seul."
    },
    {
     "titre": "Vendredi — Le bilan",
     "texte": "Trois situations nouvelles, puis ce que vous retenez."
    }
   ],
   "dossier": "Joël et Teiva, de l'association Passerelles, sont des partenaires d'ÉLAN. Il n'y a pas encore de dossier : cette semaine, Noa apprend ce qui lui servira jeudi.",
   "suite": "MENU"
  },
  "M1-E1-S1": {
   "id": "M1-E1-S1",
   "type": "message",
   "illustration": "ILL-N02",
   "etape": "Épisode 1",
   "personnage": "Malia",
   "canal": "oral",
   "titre": "Lundi, 9 h",
   "texte": "Malia montre à Noa la boîte de réception du pôle.\n« Regarde ce qu'on reçoit. Ta fiche de poste le dit : tu qualifies les demandes, et tu orientes celles qui ne sont pas pour nous. Ce matin, six demandes d'habitants sont arrivées ici par erreur. »\n",
   "suite": "M1-E1-D1"
  },
  "M1-E1-D1": {
   "id": "M1-E1-D1",
   "type": "classement",
   "etape": "Épisode 1",
   "texte": "À qui l'habitant doit-il s'adresser ? Classez les six demandes.",
   "brief": "Six demandes arrivées à ÉLAN par erreur. Pour chacune, Noa doit dire qui est compétent. Ne choisissez pas « la Nouvelle-Calédonie » seulement parce que tout se passe sur le territoire.",
   "competences": [
    "C01"
   ],
   "categories": [
    {
     "id": "etat",
     "libelle": "L'État"
    },
    {
     "id": "nc",
     "libelle": "La Nouvelle-Calédonie"
    },
    {
     "id": "province",
     "libelle": "La province"
    },
    {
     "id": "commune",
     "libelle": "La commune (la mairie)"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "Obtenir une copie de son acte de naissance.",
     "attendu": "commune",
     "feedback": "L'état civil se demande à la mairie. Depuis le 1er juillet 2013, le droit civil et l'état civil relèvent de la Nouvelle-Calédonie (loi du pays n° 2012-2), mais le guichet reste la mairie."
    },
    {
     "id": "B",
     "libelle": "S'affilier à la couverture sociale après une embauche.",
     "attendu": "nc",
     "feedback": "La protection sociale relève de la Nouvelle-Calédonie (loi organique, art. 22, 4°). L'organisme qui la gère est la CAFAT : c'est là que l'habitant s'adresse."
    },
    {
     "id": "C",
     "libelle": "Obtenir une aide pour démarrer une petite exploitation agricole.",
     "attendu": "province",
     "feedback": "Les provinces sont compétentes dans toutes les matières qui ne sont pas attribuées à l'État, à la Nouvelle-Calédonie ou aux communes (loi organique, art. 20). Le développement économique de proximité en fait partie."
    },
    {
     "id": "D",
     "libelle": "Poser une question sur son impôt sur le revenu.",
     "attendu": "nc",
     "feedback": "La fiscalité relève de la Nouvelle-Calédonie (loi organique, art. 22, 1°). Son service des impôts répond."
    },
    {
     "id": "E",
     "libelle": "Renouveler un titre de séjour.",
     "attendu": "etat",
     "feedback": "L'entrée et le séjour des étrangers relèvent de l'État (loi organique, art. 21). Le haut-commissaire le représente en Nouvelle-Calédonie (art. 2)."
    },
    {
     "id": "F",
     "libelle": "Signaler un trou dans une route communale.",
     "attendu": "commune",
     "feedback": "La voirie communale relève de la commune."
    }
   ],
   "synthese": "Quatre niveaux exercent des compétences : l'État, la Nouvelle-Calédonie, les provinces et les communes. Le lieu de la demande ne dit pas qui est compétent.",
   "note_expert": "Contenu institutionnel à faire valider par un expert (scénario M1 v0.2, § 8).",
   "suite": "M1-E1-D2"
  },
  "M1-E1-D2": {
   "id": "M1-E1-D2",
   "type": "choix",
   "etape": "Épisode 1",
   "personnage": "Élise",
   "texte": "Élise, agente d'accueil d'une commune, écrit : « Un habitant veut savoir à qui s'adresser pour son impôt sur le revenu. » Pourquoi Noa l'oriente-t-il vers le service des impôts de la Nouvelle-Calédonie ?",
   "brief": "Orienter, c'est aussi savoir expliquer pourquoi. Élise transmettra l'explication à l'habitant.",
   "competences": [
    "C01"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Parce que la fiscalité est une compétence de la Nouvelle-Calédonie.",
     "verdict": "adapte",
     "feedback": "Seule la mission de l'acteur justifie une orientation. C'est l'argument qu'Élise pourra donner à l'habitant."
    },
    {
     "id": "B",
     "libelle": "Parce que c'est le service le plus proche de chez l'habitant.",
     "verdict": "risque",
     "feedback": "La proximité ne dit pas qui est compétent. « C'est plus près » envoie souvent au mauvais guichet."
    },
    {
     "id": "C",
     "libelle": "Parce qu'on fait toujours comme ça à ÉLAN.",
     "verdict": "inadapte",
     "feedback": "L'habitude n'est pas une raison. Si la règle a changé, l'habitude conduit à l'erreur."
    }
   ],
   "suite": "M1-E1-D3"
  },
  "M1-E1-D3": {
   "id": "M1-E1-D3",
   "type": "choix",
   "etape": "Épisode 1",
   "texte": "Un habitant veut ouvrir une buvette et demande qui délivre l'autorisation. Noa trouve deux pages officielles : l'une renvoie vers la province, l'autre vers la commune. Que répond-il ?",
   "brief": "Deux sources officielles se contredisent. Noa n'a pas encore lu le texte qui fixe la règle.",
   "competences": [
    "C01",
    "C18"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "« C'est la province. »",
     "verdict": "risque",
     "feedback": "La province peut avoir confié cette autorisation aux communes. Répondre sans vérifier, c'est risquer d'envoyer l'habitant au mauvais guichet."
    },
    {
     "id": "B",
     "libelle": "« C'est la commune. »",
     "verdict": "risque",
     "feedback": "Peut-être, mais Noa ne le sait pas encore. Il choisirait au hasard entre deux sources officielles."
    },
    {
     "id": "C",
     "libelle": "« Je ne peux pas conclure : il peut exister une délégation. Je vérifie avant de répondre. »",
     "verdict": "adapte",
     "feedback": "La loi organique permet à une province de déléguer aux communes la délivrance des autorisations de débits de boissons (art. 47, III), par convention (art. 47, IV). Les deux pages peuvent donc avoir raison selon la province. Quand deux sources se contredisent, on vérifie l'acte avant de répondre."
    },
    {
     "id": "D",
     "libelle": "« Je ne sais pas, cherchez sur Internet. »",
     "verdict": "inadapte",
     "feedback": "L'habitant repart sans réponse. Orienter fait partie du travail de Noa."
    }
   ],
   "note_expert": "Situation réelle de chaque province à confirmer par l'expert (scénario M1 v0.2, § 8).",
   "suite": "M1-E1-D4"
  },
  "M1-E1-D4": {
   "id": "M1-E1-D4",
   "type": "choix",
   "etape": "Épisode 1",
   "personnage": "Élise",
   "texte": "Élise écrit de nouveau : « Un habitant doit renouveler son titre de séjour. Où l'envoyer ? » Que lui répond Noa ?",
   "brief": "Une bonne orientation donne trois éléments : l'acteur compétent, la raison, un moyen de le joindre. Noa dit « vous » à Élise.",
   "competences": [
    "C01",
    "C02"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "« Pour un titre de séjour, l'habitant s'adresse aux services de l'État, au haut-commissariat : le séjour des étrangers est une compétence de l'État. Les coordonnées sont sur le site du haut-commissariat. »",
     "verdict": "adapte",
     "feedback": "L'acteur, la raison, le moyen de le joindre : Élise peut répondre à l'habitant en une phrase, sans se tromper."
    },
    {
     "id": "B",
     "libelle": "« Voyez avec l'État. »",
     "verdict": "partiel",
     "feedback": "Juste, mais Élise ne sait ni à quel service s'adresser, ni comment le joindre."
    },
    {
     "id": "C",
     "libelle": "« Je pense que c'est la province, je vous laisse vérifier. »",
     "verdict": "inadapte",
     "feedback": "La réponse est fausse, et Noa reporte la vérification sur Élise."
    },
    {
     "id": "D",
     "libelle": "« Dites-lui de remplir ce formulaire, je vous l'envoie. »",
     "verdict": "risque",
     "feedback": "Noa répond sur le fond à la place du service compétent. Si le formulaire n'est pas le bon, l'habitant perd du temps."
    }
   ],
   "suite": "M1-E1-CARTE"
  },
  "M1-E1-CARTE": {
   "id": "M1-E1-CARTE",
   "type": "hotspot",
   "mode": "audit",
   "illustration": "ILL-N07",
   "etape": "Épisode 1",
   "titre": "Les chiffres de la carte",
   "texte": "Samuel : « Tu sais pourquoi il faut orienter juste du premier coup ? Dans le Nord, une mauvaise orientation peut coûter un long déplacement. Avant de reprendre la carte du guide d'orientation, vérifie ses chiffres. »",
   "consigne": "Signalez chaque chiffre qui ne peut pas être repris tel quel, puis validez.",
   "competences": [
    "C01"
   ],
   "zones": [
    {
     "id": "nord",
     "x": 31.3,
     "y": 30,
     "titre": "Province Nord : environ 50 000 habitants",
     "anomalie": true,
     "feedback": "Ni source ni date : impossible de savoir si le chiffre est à jour. Le chiffre officiel : 50 947 habitants en 2025, environ un habitant sur cinq (ISEE, recensement 2025)."
    },
    {
     "id": "sud",
     "x": 51.7,
     "y": 72,
     "titre": "Province Sud : 74 % des habitants (ISEE, recensement 2025)",
     "anomalie": false,
     "feedback": "Sourcé et daté : Noa peut le reprendre (194 978 habitants sur 264 596)."
    },
    {
     "id": "iles",
     "x": 91,
     "y": 64,
     "titre": "Îles Loyauté : 18 353 habitants (chiffre repris d'un diaporama de 2019)",
     "anomalie": true,
     "feedback": "Un diaporama n'est pas une source : on ne sait pas d'où vient le chiffre. Et il date de 2019 : le recensement 2025 donne 18 671 habitants (ISEE). Je remonte à la source officielle et je prends la donnée la plus récente."
    },
    {
     "id": "total",
     "x": 29,
     "y": 86,
     "titre": "Nouvelle-Calédonie : 264 596 habitants (ISEE, recensement 2025)",
     "anomalie": false,
     "feedback": "Sourcé et daté : Noa peut le reprendre."
    }
   ],
   "synthese": "Un repère chiffré n'est utile que si l'on sait d'où il vient et de quand il date.",
   "sources": "ISEE, recensement de la population 2025, résultats authentifiés par le décret n° 2025-966 du 18 septembre 2025 (population municipale) : Nouvelle-Calédonie 264 596 ; province Sud 194 978 (74 %) ; province Nord 50 947 (19 %) ; îles Loyauté 18 671 (7 %). Chiffre du diaporama : îles Loyauté 18 353 (population légale 2019, Insee).",
   "suite": "M1-E1-APP1"
  },
  "M1-E1-APP1": {
   "id": "M1-E1-APP1",
   "type": "apport",
   "etape": "Épisode 1",
   "titre": "Quatre niveaux, chacun ses compétences",
   "texte": "L'organisation de la Nouvelle-Calédonie est fixée par la Constitution (titre XIII) et par la loi organique du 19 mars 1999, issue de l'accord de Nouméa.",
   "infographie": {
    "blocs": [
     {
      "icone": "i-balance",
      "titre": "L'État",
      "role": "Représenté par le haut-commissaire (art. 2).",
      "exemples": [
       "La justice",
       "Le maintien de l'ordre",
       "La défense",
       "L'entrée et le séjour des étrangers"
      ],
      "ref": "Loi organique, art. 21"
     },
     {
      "icone": "i-batiment",
      "titre": "La Nouvelle-Calédonie",
      "role": "Ses institutions : le congrès, le gouvernement, le Sénat coutumier, le conseil économique, social et environnemental, les conseils coutumiers (art. 2).",
      "exemples": [
       "La fiscalité",
       "La protection sociale",
       "La circulation routière"
      ],
      "ref": "Loi organique, art. 22"
     },
     {
      "icone": "i-lieu",
      "titre": "Les trois provinces",
      "role": "Nord, Sud, îles Loyauté. Compétentes dans toutes les matières qui ne sont pas attribuées aux autres (art. 20).",
      "exemples": [
       "Le développement économique de proximité"
      ],
      "ref": "Loi organique, art. 20"
     },
     {
      "icone": "i-equipe",
      "titre": "Les 33 communes",
      "role": "Collectivités territoriales de la République, comme les provinces (art. 3).",
      "exemples": [
       "La voirie communale",
       "Le guichet de l'état civil"
      ],
      "ref": "Loi organique, art. 3"
     }
    ],
    "fil_titre": "Avant d'orienter",
    "fil": [
     "Quelle est la demande ?",
     "Qui a la compétence ?",
     "À quel guichet l'habitant s'adresse-t-il ?"
    ]
   },
   "a_retenir": "Le congrès délibère, le gouvernement exécute. Une même politique peut mobiliser plusieurs acteurs : avant d'orienter, je cherche qui a la compétence.",
   "note_expert": "Contenu institutionnel à faire valider par un expert (scénario M1 v0.2, § 8).",
   "sources": "Loi organique n° 99-209 du 19 mars 1999, version consolidée (Légifrance), art. 2, 3, 20, 21 et 22.",
   "competences": [
    "C01"
   ],
   "suite": "M1-E1-APP2"
  },
  "M1-E1-APP2": {
   "id": "M1-E1-APP2",
   "type": "cartes",
   "etape": "Épisode 1",
   "titre": "Ce qui surprend quand on vient d'ailleurs",
   "texte": "Certaines compétences ne sont pas là où on les attend. Retournez les cartes.",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C01"
   ],
   "cartes": [
    {
     "icone": "i-chemin",
     "recto": "Le permis de conduire",
     "verso": "La circulation routière relève de la Nouvelle-Calédonie, pas de l'État (loi organique, art. 22, 12°)."
    },
    {
     "icone": "i-carnet",
     "recto": "Le lycée et le collège",
     "verso": "L'enseignement du second degré relève de la Nouvelle-Calédonie depuis le 1er janvier 2012. La construction et l'entretien des collèges sont restés aux provinces."
    },
    {
     "icone": "i-fichier",
     "recto": "L'état civil",
     "verso": "Le droit civil et l'état civil relèvent de la Nouvelle-Calédonie depuis le 1er juillet 2013. Le guichet reste la mairie."
    },
    {
     "icone": "i-batiment",
     "recto": "La santé et l'aide sociale",
     "verso": "Elles ne relèvent pas de l'État : la Nouvelle-Calédonie et les provinces se les partagent. Je vérifie avant d'orienter."
    }
   ],
   "encadre": "Ne plaquez pas le modèle d'un autre territoire : ici, la répartition est différente.",
   "note_expert": "Contenu institutionnel à faire valider par un expert (scénario M1 v0.2, § 8).",
   "suite": "M1-E1-APP3"
  },
  "M1-E1-APP3": {
   "id": "M1-E1-APP3",
   "type": "apport",
   "etape": "Épisode 1",
   "titre": "Trois repères pour comprendre",
   "texte": "Pourquoi la répartition des compétences ne ressemble-t-elle pas à celle d'autres territoires ? Trois dates suffisent pour s'y retrouver.",
   "points": [
    {
     "titre": "1988-1989 — Accords de Matignon-Oudinot",
     "texte": "Création des trois provinces."
    },
    {
     "titre": "1998-1999 — Accord de Nouméa",
     "texte": "La loi organique n° 99-209 du 19 mars 1999 organise les institutions actuelles."
    },
    {
     "titre": "Depuis 2000 — Les transferts de compétences",
     "texte": "Des compétences passent progressivement de l'État à la Nouvelle-Calédonie : par exemple l'enseignement du second degré (2012), le droit civil et l'état civil (2013)."
    }
   ],
   "a_retenir": "Ces dates expliquent pourquoi, ici, certaines compétences relèvent de la Nouvelle-Calédonie ou des provinces.",
   "note_expert": "Repères hors référentiel : accord de Marie-Noëlle Blanck, puis dates et formulations à valider par l'expert institutionnel.",
   "sources": "Accord de Nouméa du 5 mai 1998 ; Loi organique n° 99-209 du 19 mars 1999, version consolidée (Légifrance) ; lois du pays n° 2009-09 et n° 2012-2.",
   "competences": [
    "C01"
   ],
   "suite": "M1-E1-OUT"
  },
  "M1-E1-OUT": {
   "id": "M1-E1-OUT",
   "type": "outil",
   "etape": "Épisode 1",
   "fiche": "FICHE-M1-E1",
   "titre": "Qui fait quoi en Nouvelle-Calédonie ?",
   "texte": "**Quand l'utiliser ?** Chaque fois qu'une demande ne semble pas pour vous : avant de l'orienter, vérifiez qui est compétent.\n",
   "competences": [
    "C01"
   ],
   "suite": "M1-E1-TR"
  },
  "M1-E1-TR": {
   "id": "M1-E1-TR",
   "type": "classement",
   "etape": "Épisode 1",
   "texte": "Trois nouvelles demandes, sans aide. À qui l'habitant s'adresse-t-il ?",
   "brief": "Mêmes réflexes que ce matin : cherchez qui a la compétence, pas qui est le plus proche.",
   "competences": [
    "C01"
   ],
   "categories": [
    {
     "id": "etat",
     "libelle": "L'État"
    },
    {
     "id": "nc",
     "libelle": "La Nouvelle-Calédonie"
    },
    {
     "id": "commune",
     "libelle": "La commune (la mairie)"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "Passer son permis de conduire.",
     "attendu": "nc",
     "feedback": "La circulation routière relève de la Nouvelle-Calédonie (loi organique, art. 22, 12°)."
    },
    {
     "id": "B",
     "libelle": "Déposer plainte après un vol.",
     "attendu": "etat",
     "feedback": "Le maintien de l'ordre et la justice relèvent de l'État : la police ou la gendarmerie reçoivent la plainte."
    },
    {
     "id": "C",
     "libelle": "Obtenir une copie de son acte de mariage.",
     "attendu": "commune",
     "feedback": "Comme pour l'acte de naissance, le guichet de l'état civil est la mairie."
    }
   ],
   "synthese": "Vous savez orienter seul. Dans le doute, vérifiez avant de répondre.",
   "suite": "M1-E1-FIN"
  },
  "M1-E1-FIN": {
   "id": "M1-E1-FIN",
   "type": "fin-section",
   "etape": "Épisode 1",
   "titre": "Lundi, c'est fait",
   "texte": "Noa sait vers qui orienter une demande, et pourquoi.",
   "acquis": [
    {
     "titre": "Il a orienté six demandes",
     "texte": "État, Nouvelle-Calédonie, province, commune : chacune vers l'acteur compétent."
    },
    {
     "titre": "Il a su dire « je vérifie »",
     "texte": "Deux sources officielles contradictoires : il n'a pas choisi au hasard."
    },
    {
     "titre": "Il a répondu utilement à Élise",
     "texte": "L'acteur, la raison, un moyen de le joindre."
    }
   ],
   "dossier": "Noa sait vers qui orienter une demande. Ce sera utile plus vite que prévu.",
   "suite": "MENU"
  },
  "M1-E2-S1": {
   "id": "M1-E2-S1",
   "type": "message",
   "illustration": "ILL-N03",
   "etape": "Épisode 2",
   "personnage": "Ariane",
   "canal": "reunion",
   "titre": "Mardi, 8 h 30",
   "texte": "Noa assiste au comité de direction pour se présenter. Ariane ouvre la séance.\n« Bienvenue, Noa. Le conseil d'administration se réunit dans quinze jours : nous lui présenterons le programme d'appui. »\nNoa ne sait pas ce qu'est le conseil d'administration, ni qui y siège.\n",
   "suite": "M1-E2-S2"
  },
  "M1-E2-S2": {
   "id": "M1-E2-S2",
   "type": "message",
   "etape": "Épisode 2",
   "personnage": "Malia",
   "canal": "oral",
   "titre": "9 h 15",
   "texte": "En sortant, Malia lui montre l'organigramme d'ÉLAN.\n« Tu vas voir, l'organigramme, c'est simple. Ce qui est plus difficile, c'est qui travaille avec qui. »\n",
   "suite": "M1-E2-D1"
  },
  "M1-E2-D1": {
   "id": "M1-E2-D1",
   "type": "choix",
   "etape": "Épisode 2",
   "texte": "Un ami demande à Noa : « Alors, tu travailles pour la province Nord ? » Que répond Noa ?",
   "brief": "ÉLAN est installé à Koné, en province Nord. Mais le lieu d'implantation suffit-il à dire de qui dépend un établissement ?",
   "competences": [
    "C02",
    "C01"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "« Oui : ÉLAN est à Koné, c'est un service de la province Nord. »",
     "verdict": "inadapte",
     "feedback": "Koné est bien en province Nord. Mais le lieu d'implantation ne dit pas de qui dépend un établissement."
    },
    {
     "id": "B",
     "libelle": "« Non : ÉLAN est un établissement public de la Nouvelle-Calédonie, installé à Koné. Il a son conseil d'administration et sa directrice. »",
     "verdict": "adapte",
     "feedback": "Noa situe son employeur : un établissement public, avec ses propres instances, qui agit dans le cadre de ses missions."
    },
    {
     "id": "C",
     "libelle": "« Je travaille pour l'État. »",
     "verdict": "inadapte",
     "feedback": "ÉLAN ne dépend pas de l'État. Confondre les niveaux, c'est mal orienter les partenaires qui s'adressent à lui."
    },
    {
     "id": "D",
     "libelle": "« Pour une association, comme Passerelles. »",
     "verdict": "inadapte",
     "feedback": "Passerelles est une association privée, partenaire d'ÉLAN. ÉLAN est un établissement public."
    }
   ],
   "suite": "M1-E2-DOC"
  },
  "M1-E2-DOC": {
   "id": "M1-E2-DOC",
   "type": "document",
   "etape": "Épisode 2",
   "titre": "ÉLAN — organisation",
   "intro": "Document fictif, construit sur le modèle d'un établissement public administratif de la Nouvelle-Calédonie.",
   "blocs": [
    {
     "titre": "Le conseil d'administration",
     "texte": "Il délibère sur le programme d'appui, le budget et le rapport d'activité. Il ne gère pas les dossiers au quotidien."
    },
    {
     "titre": "La direction",
     "texte": "Ariane, directrice, prépare et met en œuvre les décisions du conseil, arbitre les moyens et représente ÉLAN."
    },
    {
     "titre": "Trois pôles",
     "texte": "- **Études et projets** : Samuel, responsable ; Malia et Noa\n- **Liaison territoriale et qualité de service** : partenariats avec les communes et les associations\n- **Ressources et administration** : Ana (compétences, RH), Cédric (accueil, logistique), support numérique\n"
    },
    {
     "titre": "Repère",
     "texte": "Les partenaires (associations, communes, province) gardent leur propre hiérarchie. ÉLAN ne leur donne pas d'instruction."
    }
   ],
   "organigramme": [
    [
     {
      "nom": "Ariane",
      "role": "Directrice d'ÉLAN"
     }
    ],
    [
     {
      "nom": "Samuel",
      "role": "Pôle études et projets"
     },
     {
      "nom": "Pôle liaison territoriale",
      "role": "Partenariats"
     },
     {
      "nom": "Ana, Cédric",
      "role": "Pôle ressources et administration"
     }
    ],
    [
     {
      "nom": "Malia",
      "role": "Chargée d'études, marraine de Noa"
     },
     {
      "nom": "Noa",
      "role": "Chargé d'études et d'appui aux projets",
      "moi": true
     }
    ]
   ],
   "partenaires": "Hors organigramme : l'association Passerelles (Joël, Teiva), la commune (Élise), l'administration provinciale (Léna).",
   "suite": "M1-E2-D2"
  },
  "M1-E2-D2": {
   "id": "M1-E2-D2",
   "type": "classement",
   "etape": "Épisode 2",
   "texte": "Lisez l'organigramme. Quel est le rôle de chacun pour Noa ?",
   "brief": "Distinguer qui décide, qui encadre, qui aide : c'est savoir à qui s'adresser.",
   "competences": [
    "C02"
   ],
   "categories": [
    {
     "id": "decide",
     "libelle": "Décide pour ÉLAN"
    },
    {
     "id": "encadre",
     "libelle": "Encadre Noa"
    },
    {
     "id": "aide",
     "libelle": "Aide Noa sans être sa responsable"
    },
    {
     "id": "rh",
     "libelle": "Répond à ses questions RH"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "Le conseil d'administration",
     "attendu": "decide",
     "feedback": "Il délibère sur le programme et le budget. Noa ne s'adresse pas à lui directement."
    },
    {
     "id": "B",
     "libelle": "Ariane",
     "attendu": "decide",
     "feedback": "La directrice décide au quotidien et engage ÉLAN. Noa passe par Samuel pour lui soumettre une question."
    },
    {
     "id": "C",
     "libelle": "Samuel",
     "attendu": "encadre",
     "feedback": "Son responsable direct : il fixe ses priorités et valide son travail. Trait plein sur l'organigramme."
    },
    {
     "id": "D",
     "libelle": "Malia",
     "attendu": "aide",
     "feedback": "Sa marraine : elle montre, explique, relit. Elle n'encadre pas Noa et ne valide pas son travail."
    },
    {
     "id": "E",
     "libelle": "Ana",
     "attendu": "rh",
     "feedback": "Au pôle ressources, elle accompagne l'intégration et répond aux questions RH. Les décisions RH reviennent aux autorités habilitées."
    }
   ],
   "synthese": "Trait plein : lien hiérarchique. Une marraine aide, elle n'encadre pas.",
   "suite": "M1-E2-D3"
  },
  "M1-E2-D3": {
   "id": "M1-E2-D3",
   "type": "classement",
   "etape": "Épisode 2",
   "texte": "Quatre demandes arrivent à Noa. À qui s'adresse-t-il ?",
   "brief": "Le bon interlocuteur est celui qui gère le sujet ou qui peut décider, pas le plus disponible.",
   "competences": [
    "C02"
   ],
   "categories": [
    {
     "id": "support",
     "libelle": "Le support numérique"
    },
    {
     "id": "ana",
     "libelle": "Ana, au pôle ressources"
    },
    {
     "id": "liaison",
     "libelle": "Le pôle liaison territoriale"
    },
    {
     "id": "samuel",
     "libelle": "Samuel"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "Sa messagerie ne s'ouvre pas.",
     "attendu": "support",
     "feedback": "Un problème d'accès se règle par le support, au pôle ressources."
    },
    {
     "id": "B",
     "libelle": "Une question sur ses congés.",
     "attendu": "ana",
     "feedback": "Ana connaît les règles et la procédure. Samuel donnera son accord sur les dates."
    },
    {
     "id": "C",
     "libelle": "Une commune propose de prêter une salle pour un atelier.",
     "attendu": "liaison",
     "feedback": "Les partenariats avec les communes relèvent du pôle liaison territoriale. Noa informe aussi Samuel."
    },
    {
     "id": "D",
     "libelle": "Une commune demande à ÉLAN un courrier de soutien signé.",
     "attendu": "samuel",
     "feedback": "Un courrier signé engage ÉLAN : il se décide et se signe à la direction. Noa ne répond pas lui-même ; il transmet à Samuel avec le contexte."
    }
   ],
   "synthese": "Une mauvaise orientation fait perdre du temps. Un engagement pris sans validation met l'employeur en difficulté.",
   "suite": "M1-E2-D4"
  },
  "M1-E2-D4": {
   "id": "M1-E2-D4",
   "type": "choix",
   "etape": "Épisode 2",
   "texte": "Noa cherche qui gère les véhicules de service. Que fait-il ?",
   "brief": "Malia est disponible. Mais elle a aussi son travail.",
   "competences": [
    "C18",
    "C02"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il demande tout de suite à Malia.",
     "verdict": "partiel",
     "feedback": "La réponse est peut-être sur l'organigramme ou l'annuaire. Demander tout de suite fait perdre du temps à Malia."
    },
    {
     "id": "B",
     "libelle": "Il consulte l'organigramme et l'annuaire de l'intranet, puis demande à Malia s'il ne trouve pas.",
     "verdict": "adapte",
     "feedback": "Chercher d'abord, puis demander : Noa ne perd pas une heure, et il n'en fait pas perdre à Malia."
    },
    {
     "id": "C",
     "libelle": "Il cherche seul toute la matinée.",
     "verdict": "risque",
     "feedback": "Chercher une matinée entière pour une information qu'une collègue donne en une minute, c'est du temps perdu."
    },
    {
     "id": "D",
     "libelle": "Il pose la question à Ariane.",
     "verdict": "inadapte",
     "feedback": "La directrice n'est pas l'interlocutrice pour une question pratique. Noa passe par les bons relais."
    }
   ],
   "suite": "M1-E2-APP1"
  },
  "M1-E2-APP1": {
   "id": "M1-E2-APP1",
   "type": "apport",
   "etape": "Épisode 2",
   "titre": "Qui décide, qui prépare, qui exécute ?",
   "texte": "Les employeurs publics suivent un même schéma : une assemblée délibère, un exécutif décide et dirige, une administration prépare et met en œuvre.",
   "points": [
    {
     "titre": "La commune",
     "texte": "Le conseil municipal délibère ; le maire dirige ; les services municipaux préparent et exécutent."
    },
    {
     "titre": "La province",
     "texte": "L'assemblée de province délibère ; son président dirige ; l'administration provinciale prépare et exécute."
    },
    {
     "titre": "La Nouvelle-Calédonie",
     "texte": "Le congrès délibère ; le gouvernement exécute et dirige l'administration de la Nouvelle-Calédonie."
    },
    {
     "titre": "Un établissement public",
     "texte": "Le conseil d'administration délibère ; le directeur ou la directrice dirige ; les services préparent et exécutent."
    }
   ],
   "a_retenir": "Je sais pour qui je travaille, qui décide, et à qui je rends compte.",
   "note_expert": "Contenu institutionnel à faire valider par un expert (scénario M1 v0.2, § 8).",
   "competences": [
    "C02",
    "C01"
   ],
   "suite": "M1-E2-APP2"
  },
  "M1-E2-APP2": {
   "id": "M1-E2-APP2",
   "type": "cartes",
   "etape": "Épisode 2",
   "titre": "Travailler avec d'autres services et d'autres employeurs",
   "texte": "Quatre règles simples. Retournez les cartes.",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C02"
   ],
   "cartes": [
    {
     "icone": "i-projet",
     "recto": "Un dossier a un pilote",
     "verso": "Les autres services contribuent ; le pilote coordonne et rend compte."
    },
    {
     "icone": "i-equipe",
     "recto": "Les partenaires gardent leur hiérarchie",
     "verso": "Joël répond à son association, Léna à la province. ÉLAN ne leur donne pas d'ordre."
    },
    {
     "icone": "i-valider",
     "recto": "Ce qui engage ÉLAN se décide à la direction",
     "verso": "Un courrier signé, une convention, une promesse : Noa transmet, il ne décide pas."
    },
    {
     "icone": "i-lieu",
     "recto": "Je transpose chez moi",
     "verso": "ÉLAN est fictif. Chez votre employeur, cherchez l'organigramme et le nom de vos interlocuteurs."
    }
   ],
   "encadre": "Savoir qui travaille avec qui évite les doublons, les oublis et les engagements pris sans droit.",
   "suite": "M1-E2-OUT"
  },
  "M1-E2-OUT": {
   "id": "M1-E2-OUT",
   "type": "outil",
   "etape": "Épisode 2",
   "fiche": "FICHE-M1-E2",
   "titre": "Mon employeur et mes interlocuteurs",
   "texte": "**Quand l'utiliser ?** Dans vos premières semaines, avec l'organigramme de votre employeur. Complétez-le, puis gardez-le à portée de main.\n",
   "competences": [
    "C02"
   ],
   "suite": "M1-E2-TR"
  },
  "M1-E2-TR": {
   "id": "M1-E2-TR",
   "type": "choix",
   "etape": "Épisode 2",
   "texte": "Noa voudrait suivre une formation. Comment s'y prend-il ?",
   "brief": "Une demande nouvelle : trouver le bon circuit à partir de l'organigramme.",
   "competences": [
    "C02"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il regarde la procédure sur l'intranet, en parle à Samuel, puis fait sa demande auprès d'Ana.",
     "verdict": "adapte",
     "feedback": "La procédure d'abord ; l'accord de son responsable sur le principe et les dates ; la demande au pôle ressources."
    },
    {
     "id": "B",
     "libelle": "Il s'inscrit directement auprès de l'organisme de formation.",
     "verdict": "risque",
     "feedback": "Sans l'accord de son responsable ni passage par le pôle ressources, l'inscription ne pourra pas être prise en charge."
    },
    {
     "id": "C",
     "libelle": "Il demande à Ariane.",
     "verdict": "inadapte",
     "feedback": "La directrice n'est pas le premier interlocuteur. Noa passe par Samuel et le pôle ressources."
    },
    {
     "id": "D",
     "libelle": "Il demande seulement à Samuel.",
     "verdict": "partiel",
     "feedback": "L'accord de Samuel est nécessaire, mais la démarche passe aussi par le pôle ressources."
    }
   ],
   "suite": "M1-E2-FIN"
  },
  "M1-E2-FIN": {
   "id": "M1-E2-FIN",
   "type": "fin-section",
   "etape": "Épisode 2",
   "titre": "Mardi, c'est fait",
   "texte": "Noa sait où se situe ÉLAN, qui y décide et à qui s'adresser.",
   "acquis": [
    {
     "titre": "Il a situé son employeur",
     "texte": "Un établissement public de la Nouvelle-Calédonie, installé à Koné."
    },
    {
     "titre": "Il a lu l'organigramme",
     "texte": "Qui décide, qui encadre, qui aide sans encadrer."
    },
    {
     "titre": "Il a trouvé ses interlocuteurs",
     "texte": "Le support, Ana, le pôle liaison territoriale, Samuel."
    }
   ],
   "dossier": "Noa sait qu'une demande d'appui passe par Samuel et que la directrice décide.",
   "suite": "MENU"
  },
  "M1-E3-S1": {
   "id": "M1-E3-S1",
   "type": "message",
   "etape": "Épisode 3",
   "personnage": "Malia",
   "canal": "oral",
   "titre": "Mercredi, 9 h",
   "texte": "« Première tâche pour toi : mettre à jour la fiche « Couverture sociale » de notre guide d'orientation. L'accueil s'en sert pour répondre au téléphone. »\n",
   "suite": "M1-E3-S2"
  },
  "M1-E3-S2": {
   "id": "M1-E3-S2",
   "type": "narration",
   "illustration": "ILL-N04",
   "etape": "Épisode 3",
   "titre": "Trois documents, trois versions",
   "texte": "Pour la ligne « s'affilier après une embauche », Noa trouve trois documents.",
   "points": [
    {
     "titre": "Un guide en PDF",
     "texte": "Dans le dossier partagé. Daté de 2019."
    },
    {
     "titre": "Une page d'un site officiel",
     "texte": "Mise à jour le mois dernier."
    },
    {
     "titre": "Une capture d'écran",
     "texte": "Transférée par un collègue sur la messagerie. Sans date, sans auteur."
    }
   ],
   "suite": "M1-E3-HS"
  },
  "M1-E3-HS": {
   "id": "M1-E3-HS",
   "type": "hotspot",
   "etape": "Épisode 3",
   "mode": "decouverte",
   "illustration": "ILL-14",
   "titre": "Où chercher avant de demander ?",
   "texte": "Sur le bureau de Noa, quatre sources d'information. Ouvrez celles que vous voulez.",
   "consigne": "Cliquez sur un objet ou sur un titre de la liste.",
   "competences": [
    "C17"
   ],
   "zones": [
    {
     "id": "fiche",
     "x": 32,
     "y": 30,
     "titre": "Ma fiche de poste et la consigne reçue",
     "texte": "Elles disent ce que j'ai à faire. Je commence toujours par là.",
     "repere": "Si la réponse n'y est pas, je ne l'invente pas."
    },
    {
     "id": "intranet",
     "x": 75,
     "y": 26,
     "titre": "L'intranet de mon employeur",
     "texte": "Les procédures et notes internes : congés, accès, circuits de validation.",
     "repere": "Je vérifie la date : une procédure peut avoir changé."
    },
    {
     "id": "officiel",
     "x": 77,
     "y": 76,
     "titre": "Les sources officielles",
     "texte": "Leginova (anciennement Juridoc) pour les textes calédoniens en vigueur ; le Journal officiel de la Nouvelle-Calédonie ; Légifrance pour les textes nationaux, dont la loi organique ; le site de la DRHFPNC pour les règles RH.",
     "repere": "Je prends la version consolidée et je note la référence du texte."
    },
    {
     "id": "producteur",
     "x": 22,
     "y": 76,
     "titre": "Le service qui produit l'information",
     "texte": "Pour une règle de couverture sociale, c'est la CAFAT. Pour un chiffre, le service qui le produit.",
     "repere": "Je dis ce que j'ai déjà cherché, et je pose une question précise."
    }
   ],
   "bandeau_final": "La meilleure source dépend de la question : le texte officiel pour la règle, la page institutionnelle pour l'explication pratique, l'intranet pour une procédure interne.",
   "suite": "M1-E3-RCH"
  },
  "M1-E3-RCH": {
   "id": "M1-E3-RCH",
   "type": "recherche",
   "etape": "Épisode 3",
   "texte": "Noa cherche la règle d'affiliation après une embauche. Lancez une recherche, puis choisissez le document à utiliser.",
   "brief": "La fiche servira à l'accueil pour répondre aux habitants. Une erreur serait répétée à chaque appel.",
   "competences": [
    "C17"
   ],
   "moteur": "Base documentaire du pôle (moteur fictif)",
   "placeholder": "Par exemple : affiliation embauche",
   "exemples": [
    "délai",
    "affiliation embauche"
   ],
   "consigne_choix": "Choisissez le document que Noa utilise pour la fiche.",
   "conseil_mots": "Aucun document ne correspond. Essayez des mots précis : la démarche et la situation, par exemple « affiliation embauche ».",
   "mots_cles": [
    {
     "si": [
      "affiliation",
      "affilier",
      "affilie",
      "embauche",
      "embaucher",
      "cafat",
      "couverture",
      "sociale"
     ],
     "resultats": "R1"
    },
    {
     "si": [
      "delai",
      "delais"
     ],
     "resultats": "R2"
    },
    {
     "sinon": "R0"
    }
   ],
   "jeux": {
    "R0": [],
    "R1": [
     {
      "id": "guide",
      "icone": "i-fichier",
      "titre": "Guide d'orientation — fiche « Couverture sociale » (PDF)",
      "auteur": "ÉLAN, pôle études et projets",
      "date": "2019",
      "statut": "Jamais mis à jour",
      "extrait": "Dans le dossier partagé du pôle.",
      "verdict": "risque",
      "feedback": "Facile à trouver ne veut pas dire à jour. Une règle a pu changer depuis 2019."
     },
     {
      "id": "presse",
      "icone": "i-informer",
      "titre": "« Embauche : ce qui change » — article de presse",
      "auteur": "Un journal local",
      "date": "La semaine dernière",
      "statut": "Article d'information",
      "verdict": "partiel",
      "feedback": "Utile pour être alerté d'un changement, mais ce n'est pas la source de la règle. Noa remonte à la source officielle."
     },
     {
      "id": "officiel",
      "icone": "i-batiment",
      "titre": "S'affilier après une embauche",
      "auteur": "CAFAT, site officiel",
      "date": "Mis à jour le mois dernier",
      "statut": "Page officielle à jour",
      "extrait": "Qui fait la démarche, dans quel délai, avec quelles pièces.",
      "verdict": "adapte",
      "feedback": "Auteur connu, date récente, source officielle : c'est le meilleur point de départ pour une explication pratique."
     },
     {
      "id": "capture",
      "icone": "i-image",
      "titre": "Capture d'écran « délai affiliation »",
      "auteur": "Inconnu (transférée par un collègue)",
      "date": "Sans date",
      "statut": "Inconnu",
      "verdict": "inadapte",
      "feedback": "Sans auteur ni date, impossible de savoir d'où elle vient ni si elle est juste."
     }
    ],
    "R2": [
     {
      "id": "paiement",
      "icone": "i-fichier",
      "titre": "Délais de paiement des fournisseurs",
      "auteur": "ÉLAN, service administratif",
      "date": "2024",
      "statut": "Note de service",
      "verdict": "inadapte",
      "feedback": "Hors sujet. Le mot « délai » seul ramène tout ce qui parle de délais : précisez la démarche."
     },
     {
      "id": "recours",
      "icone": "i-balance",
      "titre": "Les délais de recours contre une décision administrative",
      "auteur": "Fiche pratique d'un site officiel",
      "date": "2025",
      "statut": "En vigueur",
      "verdict": "inadapte",
      "feedback": "Fiable, mais hors sujet. Précisez la démarche : affiliation, embauche."
     },
     {
      "id": "guide2",
      "icone": "i-fichier",
      "titre": "Guide d'orientation — fiche « Couverture sociale » (PDF)",
      "auteur": "ÉLAN, pôle études et projets",
      "date": "2019",
      "statut": "Jamais mis à jour",
      "verdict": "risque",
      "feedback": "Le bon sujet, mais un document de 2019 : la règle a pu changer. Cherchez avec des mots plus précis pour trouver la source à jour."
     }
    ]
   },
   "synthese": "Qui l'a produit, de quand il date, quel est son statut : trois vérifications avant d'utiliser un document.",
   "suite": "M1-E3-D2"
  },
  "M1-E3-D2": {
   "id": "M1-E3-D2",
   "type": "classement",
   "etape": "Épisode 3",
   "texte": "Qui l'a produit ? De quand date-t-il ? Est-il définitif ? Classez les documents.",
   "brief": "Les trois vérifications s'appliquent à toute information, avant de l'utiliser.",
   "competences": [
    "C17"
   ],
   "categories": [
    {
     "id": "utiliser",
     "libelle": "Je peux l'utiliser"
    },
    {
     "id": "verifier",
     "libelle": "Je dois vérifier"
    },
    {
     "id": "ecarter",
     "libelle": "Je l'écarte"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "La page du site officiel, mise à jour le mois dernier.",
     "attendu": "utiliser",
     "feedback": "Auteur connu, date récente, source officielle."
    },
    {
     "id": "B",
     "libelle": "Le guide PDF de 2019.",
     "attendu": "verifier",
     "feedback": "Un document ancien n'est pas forcément faux, mais la règle a pu changer : je compare avec la source à jour."
    },
    {
     "id": "C",
     "libelle": "La capture d'écran sans date.",
     "attendu": "ecarter",
     "feedback": "Sans auteur ni date, je ne l'utilise pas. Si elle signale un changement, je cherche la source officielle."
    },
    {
     "id": "D",
     "libelle": "Un article de presse de la semaine dernière.",
     "attendu": "verifier",
     "feedback": "Utile pour être alerté d'un changement. Je remonte ensuite au texte officiel."
    }
   ],
   "synthese": "Qui, quand, quel statut : trois questions avant d'utiliser une information.",
   "suite": "M1-E3-D3"
  },
  "M1-E3-D3": {
   "id": "M1-E3-D3",
   "type": "choix",
   "etape": "Épisode 3",
   "texte": "Le site officiel et le guide de 2019 ne donnent pas le même délai d'affiliation. Noa vérifie une seconde source officielle : l'écart demeure. Que fait-il ?",
   "brief": "La fiche sera lue par l'accueil et répétée aux habitants.",
   "competences": [
    "C17",
    "C18"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il écrit le délai du site officiel : c'est le plus récent.",
     "verdict": "risque",
     "feedback": "Probable, mais pas certain : l'écart avec une seconde source officielle n'est pas expliqué."
    },
    {
     "id": "B",
     "libelle": "Il garde le délai du guide : c'était la référence de l'accueil.",
     "verdict": "inadapte",
     "feedback": "Le guide date de 2019 : c'est justement lui qui est le plus susceptible d'être périmé."
    },
    {
     "id": "C",
     "libelle": "Il ne modifie pas encore la fiche et demande un appui à Malia, en expliquant ce qu'il a vérifié.",
     "verdict": "adapte",
     "feedback": "Quand l'écart demeure après vérification, on demande un appui. Noa n'écrit rien dans le guide avant d'être sûr."
    },
    {
     "id": "D",
     "libelle": "Il écrit les deux délais dans la fiche.",
     "verdict": "partiel",
     "feedback": "Honnête, mais l'accueil ne saura pas quoi répondre aux habitants."
    }
   ],
   "suite": "M1-E3-D4"
  },
  "M1-E3-D4": {
   "id": "M1-E3-D4",
   "type": "assemblage",
   "etape": "Épisode 3",
   "personnage": "Malia",
   "texte": "Composez le message de Noa à Malia : choisissez une phrase pour chaque partie.",
   "brief": "Malia doit pouvoir répondre en deux minutes. Noa la tutoie.",
   "competences": [
    "C18",
    "C17"
   ],
   "destinataire": "Malia",
   "objet": "Fiche « Couverture sociale » : un délai à vérifier",
   "salutation": "Bonjour Malia,",
   "signature": "Merci !\nNoa\n",
   "synthese": "Une question précise, ce qui a été vérifié, les sources datées, ce qui reste incertain, l'aide attendue.",
   "parties": [
    {
     "id": "question",
     "libelle": "Ma question",
     "options": [
      {
       "id": "A",
       "texte": "Quel est le délai d'affiliation après une embauche, pour la fiche « Couverture sociale » ?",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "Le délai, c'est combien ?",
       "verdict": "risque"
      },
      {
       "id": "C",
       "texte": "Je n'arrive pas à faire la fiche.",
       "verdict": "inadapte"
      }
     ],
     "feedback": "Une question précise dit ce qu'on cherche et à quoi cela servira."
    },
    {
     "id": "sources",
     "libelle": "Ce que j'ai vérifié",
     "options": [
      {
       "id": "A",
       "texte": "Le site officiel (mis à jour le mois dernier) et une seconde source officielle donnent un délai ; le guide de 2019 en donne un autre.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "J'ai tout lu, rien ne concorde.",
       "verdict": "partiel"
      },
      {
       "id": "C",
       "texte": "Je te copie les trois documents en entier ci-dessous.",
       "verdict": "risque"
      }
     ],
     "feedback": "Citer les sources avec leur date évite à Malia de refaire la recherche."
    },
    {
     "id": "incertain",
     "libelle": "Ce qui reste incertain",
     "options": [
      {
       "id": "A",
       "texte": "Je ne sais pas si la règle a changé depuis 2019 ou si le guide contenait une erreur.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "Je pense que c'est trente jours, c'est sûr.",
       "verdict": "inadapte"
      },
      {
       "id": "C",
       "texte": "(Rien.)",
       "verdict": "partiel"
      }
     ],
     "feedback": "Dire ce qui reste incertain montre à Malia exactement où est le doute."
    },
    {
     "id": "aide",
     "libelle": "L'aide que j'attends",
     "options": [
      {
       "id": "A",
       "texte": "Peux-tu me dire quelle source fait foi ? Je ne modifie pas la fiche avant ta réponse.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "Tu peux faire la fiche à ma place ?",
       "verdict": "inadapte"
      },
      {
       "id": "C",
       "texte": "Dis-moi quand tu as le temps.",
       "verdict": "partiel"
      }
     ],
     "feedback": "Demander une aide précise, ce n'est pas faire faire le travail."
    }
   ],
   "suite": "M1-E3-APP1"
  },
  "M1-E3-APP1": {
   "id": "M1-E3-APP1",
   "type": "apport",
   "etape": "Épisode 3",
   "titre": "Reconnaître un document administratif",
   "texte": "Avant d'utiliser un texte, je regarde qui l'a pris : cela dit ce qu'il engage.",
   "points": [
    {
     "titre": "La loi organique",
     "texte": "Votée par le Parlement. Elle organise les institutions de la Nouvelle-Calédonie et répartit les compétences. Je la lis sur Légifrance."
    },
    {
     "titre": "La loi du pays",
     "texte": "Votée par le congrès, dans les matières fixées par la loi organique (art. 99). Elle a force de loi."
    },
    {
     "titre": "La délibération",
     "texte": "Votée par une assemblée : le congrès, une assemblée de province, un conseil municipal, un conseil d'administration."
    },
    {
     "titre": "L'arrêté",
     "texte": "Pris par une autorité exécutive : le gouvernement, le président d'une assemblée de province, le maire, le haut-commissaire."
    },
    {
     "titre": "La circulaire, la note de service",
     "texte": "Elles expliquent ou organisent l'application d'une règle, en interne. Elles ne créent pas de droit nouveau."
    }
   ],
   "a_retenir": "Je regarde toujours qui a pris le texte, sa date, et s'il est encore en vigueur.",
   "note_expert": "Contenu institutionnel à faire valider par un expert (scénario M1 v0.2, § 8).",
   "sources": "Loi organique n° 99-209 du 19 mars 1999, version consolidée (Légifrance), art. 99 (lois du pays) ; Leginova pour les textes calédoniens ; Légifrance pour les textes nationaux.",
   "competences": [
    "C17"
   ],
   "suite": "M1-E3-APP2"
  },
  "M1-E3-APP2": {
   "id": "M1-E3-APP2",
   "type": "cartes",
   "etape": "Épisode 3",
   "titre": "Comment une règle change",
   "texte": "Un texte trouvé facilement n'est pas forcément à jour. Retournez les cartes.",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C17"
   ],
   "cartes": [
    {
     "icone": "i-recommencer",
     "recto": "Modification",
     "verso": "Un nouveau texte change une partie de l'ancien. L'ancien reste en vigueur pour le reste."
    },
    {
     "icone": "i-croix",
     "recto": "Abrogation",
     "verso": "Le texte est supprimé. Il ne s'applique plus, même s'il circule encore."
    },
    {
     "icone": "i-fichier",
     "recto": "Version consolidée",
     "verso": "Le texte avec toutes ses modifications intégrées. C'est celle que je lis sur Leginova ou Légifrance."
    },
    {
     "icone": "i-semaine",
     "recto": "Date d'effet",
     "verso": "La date à partir de laquelle la règle s'applique. Elle peut être différente de la date de publication."
    }
   ],
   "encadre": "Pour un texte calédonien : Leginova (anciennement Juridoc), en ligne depuis le 1er octobre 2026.",
   "suite": "M1-E3-OUT"
  },
  "M1-E3-OUT": {
   "id": "M1-E3-OUT",
   "type": "outil",
   "etape": "Épisode 3",
   "fiche": "FICHE-M1-E3",
   "titre": "Trouver une information fiable",
   "texte": "**Quand l'utiliser ?** Avant de transmettre une règle, un délai ou un chiffre, et chaque fois que deux sources ne disent pas la même chose.\n",
   "competences": [
    "C17",
    "C18"
   ],
   "suite": "M1-E3-TR"
  },
  "M1-E3-TR": {
   "id": "M1-E3-TR",
   "type": "choix",
   "etape": "Épisode 3",
   "texte": "L'accueil demande à Noa si les horaires d'ouverture au public, affichés dans un PDF de l'an dernier, sont toujours valables. Que fait-il ?",
   "brief": "Mêmes réflexes que ce matin : qui, quand, quel statut.",
   "competences": [
    "C17"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il vérifie la dernière note de service ou la page à jour de l'intranet, puis répond en citant la source et sa date.",
     "verdict": "adapte",
     "feedback": "Une procédure interne se vérifie sur la source interne la plus récente. Noa cite sa source : l'accueil peut s'y fier."
    },
    {
     "id": "B",
     "libelle": "Il répond oui : le PDF n'a pas été remplacé.",
     "verdict": "risque",
     "feedback": "L'absence de nouveau document ne prouve pas que la règle n'a pas changé."
    },
    {
     "id": "C",
     "libelle": "Il répond qu'il ne sait pas.",
     "verdict": "inadapte",
     "feedback": "La réponse se trouve. Noa sait maintenant où chercher."
    }
   ],
   "suite": "M1-E3-FIN"
  },
  "M1-E3-FIN": {
   "id": "M1-E3-FIN",
   "type": "fin-section",
   "etape": "Épisode 3",
   "titre": "Mercredi, c'est fait",
   "texte": "Noa sait trouver une information sûre, et dire quand il ne l'est pas.",
   "acquis": [
    {
     "titre": "Il a choisi la bonne source",
     "texte": "La page officielle à jour, pas le PDF le plus facile à trouver."
    },
    {
     "titre": "Il a fait les trois vérifications",
     "texte": "Qui l'a produite, de quand elle date, si elle est définitive."
    },
    {
     "titre": "Il a demandé un appui précis",
     "texte": "Une question, ses sources datées, ce qui reste incertain."
    }
   ],
   "dossier": "Noa sait donner une source officielle et datée.",
   "suite": "MENU"
  },
  "M1-DI-1": {
   "id": "M1-DI-1",
   "type": "narration",
   "illustration": "ILL-N05",
   "etape": "Défi",
   "titre": "Jeudi, 10 h",
   "texte": "Noa est seul au pôle. Le téléphone sonne.",
   "points": [
    {
     "titre": "Samuel est en rendez-vous",
     "texte": "Jusqu'à 11 h 30."
    },
    {
     "titre": "Malia est en déplacement",
     "texte": "Toute la journée."
    },
    {
     "titre": "Noa décroche",
     "texte": "C'est son premier appel d'un partenaire."
    }
   ],
   "suite": "M1-DI-2"
  },
  "M1-DI-2": {
   "id": "M1-DI-2",
   "type": "message",
   "etape": "Défi",
   "personnage": "Joël",
   "canal": "appel",
   "titre": "10 h 02",
   "texte": "« Bonjour, Joël, de l'association Passerelles. On veut monter une permanence pour aider les habitants dans leurs démarches. Mais nos bénévoles ne savent pas toujours où envoyer les gens. Vous pouvez m'envoyer une liste : pour quoi, on va où ? Et on aimerait l'aide d'ÉLAN pour monter le projet. »\n",
   "suite": "M1-DI-D1"
  },
  "M1-DI-D1": {
   "id": "M1-DI-D1",
   "type": "choix",
   "etape": "Défi",
   "personnage": "Joël",
   "texte": "Que répond Noa à Joël, au téléphone ?",
   "brief": "La liste d'interlocuteurs est une information publique. L'appui d'ÉLAN à un projet, lui, se décide à la direction. Noa dit « vous » à Joël.",
   "competences": [
    "C02"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "« Bien sûr, ÉLAN va vous aider à monter le projet. »",
     "verdict": "inadapte",
     "feedback": "Noa promet un appui qu'il n'a pas le droit d'engager. Si la direction dit non, Passerelles aura annoncé une aide qui n'existe pas."
    },
    {
     "id": "B",
     "libelle": "« Je vous envoie la liste aujourd'hui. Pour l'appui d'ÉLAN, je transmets votre demande à mon responsable, qui reviendra vers vous. »",
     "verdict": "adapte",
     "feedback": "Noa fait ce qui est à lui (la liste) et transmet ce qui ne l'est pas (l'appui). Joël sait ce qui va se passer."
    },
    {
     "id": "C",
     "libelle": "« Je ne peux rien vous envoyer sans l'accord de mon responsable. »",
     "verdict": "partiel",
     "feedback": "Trop prudent : une liste d'interlocuteurs n'engage pas ÉLAN. Joël attend pour rien."
    },
    {
     "id": "D",
     "libelle": "« Ce n'est pas à moi de répondre, rappelez lundi. »",
     "verdict": "inadapte",
     "feedback": "Joël repart sans rien. Un partenaire mal accueilli perd confiance."
    }
   ],
   "suite": "M1-DI-LISTE"
  },
  "M1-DI-LISTE": {
   "id": "M1-DI-LISTE",
   "type": "assemblage",
   "etape": "Défi",
   "personnage": "Joël",
   "texte": "Composez le courriel de Noa à Joël : pour chaque démarche, choisissez l'interlocuteur et la source.",
   "brief": "Les bénévoles de Passerelles utiliseront cette liste avec les habitants. Chaque ligne doit être juste, sourcée et datée.",
   "competences": [
    "C01",
    "C17",
    "C02"
   ],
   "destinataire": "Joël",
   "objet": "Où orienter les habitants : votre liste",
   "salutation": "Bonjour Monsieur,",
   "signature": "Bien cordialement,\nNoa, ÉLAN\n",
   "synthese": "Un interlocuteur juste, une source officielle datée pour chaque démarche, et aucune promesse au nom d'ÉLAN.",
   "parties": [
    {
     "id": "etatcivil",
     "libelle": "Un acte d'état civil",
     "options": [
      {
       "id": "A",
       "texte": "La mairie de la commune. Source : site de la commune, consulté aujourd'hui.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "Le haut-commissariat.",
       "verdict": "inadapte"
      },
      {
       "id": "C",
       "texte": "La mairie. Source : capture d'écran transmise par un collègue.",
       "verdict": "risque"
      }
     ],
     "feedback": "L'état civil relève de la Nouvelle-Calédonie, mais le guichet est la mairie. Une capture sans date ne peut pas servir de source."
    },
    {
     "id": "cafat",
     "libelle": "La couverture sociale",
     "options": [
      {
       "id": "A",
       "texte": "La CAFAT. Source : site de la CAFAT, page mise à jour le mois dernier.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "La CAFAT. Source : guide d'orientation de 2019.",
       "verdict": "risque"
      },
      {
       "id": "C",
       "texte": "La province.",
       "verdict": "inadapte"
      }
     ],
     "feedback": "La protection sociale relève de la Nouvelle-Calédonie et la CAFAT la gère. Le guide de 2019 est peut-être périmé : c'était tout le travail de mercredi."
    },
    {
     "id": "province",
     "libelle": "Une aide agricole",
     "options": [
      {
       "id": "A",
       "texte": "La province où vit l'habitant. Source : site de la province, consulté aujourd'hui.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "La commune.",
       "verdict": "inadapte"
      },
      {
       "id": "C",
       "texte": "La Nouvelle-Calédonie.",
       "verdict": "risque"
      }
     ],
     "feedback": "Le développement économique de proximité relève des provinces. Chaque province a ses propres dispositifs : on renvoie vers celle de l'habitant."
    },
    {
     "id": "sejour",
     "libelle": "Un titre de séjour",
     "options": [
      {
       "id": "A",
       "texte": "Les services de l'État, au haut-commissariat. Source : site du haut-commissariat, consulté aujourd'hui.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "La Nouvelle-Calédonie.",
       "verdict": "inadapte"
      },
      {
       "id": "C",
       "texte": "L'État. Source : un forum en ligne.",
       "verdict": "risque"
      }
     ],
     "feedback": "Le séjour des étrangers relève de l'État. Un forum n'est pas une source officielle."
    },
    {
     "id": "appui",
     "libelle": "Votre demande d'appui",
     "options": [
      {
       "id": "A",
       "texte": "J'ai transmis votre demande d'appui à mon responsable, Samuel, qui reviendra vers vous.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "ÉLAN accompagnera votre projet.",
       "verdict": "inadapte"
      },
      {
       "id": "C",
       "texte": "(Rien sur l'appui.)",
       "verdict": "partiel"
      }
     ],
     "feedback": "Joël sait que sa demande est prise en compte, sans promesse que Noa n'a pas le droit de faire."
    }
   ],
   "suite": "M1-DI-D2"
  },
  "M1-DI-D2": {
   "id": "M1-DI-D2",
   "type": "choix",
   "etape": "Défi",
   "personnage": "Samuel",
   "texte": "Quel message Noa laisse-t-il à Samuel ?",
   "brief": "Samuel sort de rendez-vous à 11 h 30. Il doit comprendre la situation en une lecture.",
   "competences": [
    "C02",
    "C18"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "« Joël, de l'association Passerelles, a appelé à 10 h. Ils veulent monter une permanence d'aide aux démarches et demandent l'appui d'ÉLAN. Je lui ai envoyé une liste d'interlocuteurs sourcée. Je ne lui ai rien promis sur l'appui. Ses coordonnées sont ci-dessous. »",
     "verdict": "adapte",
     "feedback": "Qui, quoi, ce qui a été fait, ce qui reste à décider : Samuel peut agir tout de suite."
    },
    {
     "id": "B",
     "libelle": "« Joël a appelé, rappelle-le. »",
     "verdict": "partiel",
     "feedback": "Samuel ne sait ni qui est Joël, ni ce qu'il veut, ni ce que Noa a déjà fait."
    },
    {
     "id": "C",
     "libelle": "« J'ai dit à Passerelles qu'on les aiderait. »",
     "verdict": "inadapte",
     "feedback": "Noa a engagé ÉLAN sans en avoir le droit. Samuel doit maintenant rattraper la promesse."
    },
    {
     "id": "D",
     "libelle": "Rien : il en parlera lundi.",
     "verdict": "inadapte",
     "feedback": "La demande d'un partenaire attend trois jours sans que personne le sache."
    }
   ],
   "suite": "M1-DI-3"
  },
  "M1-DI-3": {
   "id": "M1-DI-3",
   "type": "message",
   "etape": "Défi",
   "personnage": "Samuel",
   "canal": "oral",
   "titre": "11 h 30",
   "texte": "« Tu as bien fait de me transmettre, et ta liste est propre. Passerelles, ça peut devenir un vrai dossier. J'en parle à Ariane. »\n",
   "suite": "M1-DI-SYN"
  },
  "M1-DI-SYN": {
   "id": "M1-DI-SYN",
   "type": "fin-section",
   "etape": "Défi",
   "titre": "Défi terminé",
   "texte": "Seul au pôle, Noa a répondu à un partenaire sans dépasser son rôle.",
   "acquis": [
    {
     "titre": "Il a orienté juste",
     "texte": "Quatre démarches, quatre interlocuteurs compétents."
    },
    {
     "titre": "Il a sourcé chaque ligne",
     "texte": "Des sources officielles, datées, vérifiées mercredi."
    },
    {
     "titre": "Il n'a pas promis l'appui d'ÉLAN",
     "texte": "Il a transmis à Samuel, avec le contexte."
    }
   ],
   "dossier": "Joël a reçu une liste sourcée. Sa demande d'appui est chez Samuel.",
   "suite": "MENU"
  },
  "M1-EVA-INTRO": {
   "id": "M1-EVA-INTRO",
   "type": "narration",
   "etape": "Évaluation",
   "titre": "Le bilan de la semaine",
   "texte": "Trois situations nouvelles. Pas de correction entre les questions : le bilan s'affiche à la fin.\nPour réussir, les trois situations doivent être réussies. Si ce n'est pas le cas, une seconde tentative vous est proposée, sur d'autres situations. Vous pourrez aussi repasser l'évaluation plus tard, quand vous le souhaitez.\n",
   "suite": "M1-EVA-E1A"
  },
  "M1-EVA-E1A": {
   "id": "M1-EVA-E1A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Élise",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C01"
   ],
   "texte": "Élise transmet trois demandes d'habitants : 1. renouveler un titre de séjour ; 2. contester un avis d'impôt sur le revenu ; 3. obtenir une aide pour développer une petite exploitation agricole. Quelle orientation est juste pour les trois ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "1. l'État · 2. la Nouvelle-Calédonie · 3. la province",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "1. la Nouvelle-Calédonie · 2. l'État · 3. la province",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "1. l'État · 2. la commune · 3. la Nouvelle-Calédonie",
     "verdict": "inadapte"
    },
    {
     "id": "D",
     "libelle": "1. la province · 2. la Nouvelle-Calédonie · 3. la commune",
     "verdict": "inadapte"
    }
   ],
   "suite": "M1-EVA-E2A"
  },
  "M1-EVA-E2A": {
   "id": "M1-EVA-E2A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Noa",
   "preuve": "E2",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C02"
   ],
   "texte": "Dans une commune, l'agent d'accueil reçoit d'une association une demande de prêt de la salle communale pour un atelier. Que fait-il ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il accepte : il connaît le planning de la salle.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Il transmet la demande au service qui gère les salles, qui la fait valider selon les règles de la commune.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il l'envoie au président de la province.",
     "verdict": "inadapte"
    },
    {
     "id": "D",
     "libelle": "Il répond que la commune ne prête pas ses salles.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M1-EVA-E3A"
  },
  "M1-EVA-E3A": {
   "id": "M1-EVA-E3A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Noa",
   "preuve": "E3",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C17"
   ],
   "texte": "Pour répondre à un usager sur un délai, Noa trouve : une note interne de 2021, une page officielle mise à jour cette année, un message transféré sans date. Que fait-il ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il utilise la page officielle à jour, vérifie sa date et note la référence.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Il utilise la note interne : c'est la référence de la maison.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Il utilise le message : c'est le plus récent.",
     "verdict": "inadapte"
    },
    {
     "id": "D",
     "libelle": "Il donne les trois réponses à l'usager.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M1-EVA-RES"
  },
  "M1-EVA-RES": {
   "id": "M1-EVA-RES",
   "type": "eval-resultat",
   "etape": "Évaluation",
   "regle": "E1, E2 et E3 réussies ; aucune compensation",
   "preuves": {
    "E1": "Orienter une demande",
    "E2": "Trouver le bon interlocuteur",
    "E3": "Vérifier une information"
   },
   "texte_reussi": "Évaluation réussie. Vous savez qui fait quoi, à qui vous adresser, et comment vérifier une information avant de l'utiliser.\n",
   "texte_echec": "Certains repères sont encore à consolider. Une nouvelle tentative vous est proposée, sur d'autres situations.\n",
   "texte_echec_final": "Certains repères restent à consolider. Les fiches indiquées ci-dessus sont dans votre carnet : relisez-les et revoyez les épisodes concernés. Quand vous vous sentez prêt, repassez l'évaluation depuis le sommaire : les situations ne seront pas les mêmes.\n",
   "consolider": {
    "E1": {
     "texte": "Je cherche qui a la compétence, pas qui est le plus proche. Dans le doute, je vérifie avant de répondre.",
     "fiche": "FICHE-M1-E1"
    },
    "E2": {
     "texte": "Je transmets ce qui engage mon employeur à celui qui décide, et je m'adresse au service qui gère le sujet.",
     "fiche": "FICHE-M1-E2"
    },
    "E3": {
     "texte": "Avant d'utiliser une information : qui l'a produite, de quand elle date, si elle est définitive.",
     "fiche": "FICHE-M1-E3"
    }
   },
   "rappel": [
    {
     "titre": "Qui fait quoi",
     "texte": "L'État, la Nouvelle-Calédonie, les provinces, les communes : chacun ses compétences."
    },
    {
     "titre": "Mon employeur",
     "texte": "Qui délibère, qui décide, qui prépare ; à qui je rends compte."
    },
    {
     "titre": "Une information fiable",
     "texte": "Une source officielle, datée, en vigueur ; je garde la référence."
    }
   ],
   "retentative": "M1-EVA-E1B",
   "suite": "M1-EVA-FIN"
  },
  "M1-EVA-E1B": {
   "id": "M1-EVA-E1B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Élise",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C01"
   ],
   "texte": "Élise transmet trois autres demandes : 1. passer son permis de conduire ; 2. déposer plainte après un vol ; 3. faire réparer une route communale. Quelle orientation est juste pour les trois ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "1. l'État · 2. l'État · 3. la province",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "1. la Nouvelle-Calédonie · 2. l'État · 3. la commune",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "1. la Nouvelle-Calédonie · 2. la commune · 3. la commune",
     "verdict": "inadapte"
    },
    {
     "id": "D",
     "libelle": "1. la province · 2. la Nouvelle-Calédonie · 3. la commune",
     "verdict": "inadapte"
    }
   ],
   "suite": "M1-EVA-E2B"
  },
  "M1-EVA-E2B": {
   "id": "M1-EVA-E2B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Noa",
   "preuve": "E2",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C02"
   ],
   "texte": "Dans un établissement public, une agente reçoit d'un partenaire une convention de partenariat à signer. Que fait-elle ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Elle la signe : elle connaît bien le dossier.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle la transmet à son responsable, qui la soumettra à la direction.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle l'envoie directement au conseil d'administration.",
     "verdict": "risque"
    },
    {
     "id": "D",
     "libelle": "Elle la donne à un collègue d'un autre service.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M1-EVA-E3B"
  },
  "M1-EVA-E3B": {
   "id": "M1-EVA-E3B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Noa",
   "preuve": "E3",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C17"
   ],
   "texte": "Une note interne de l'an dernier fixe une règle. Noa découvre sur Leginova un texte plus récent qui la modifie. Que fait-il ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il applique la note interne : c'est la règle de la maison.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il corrige lui-même la note interne et la diffuse.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Il applique le texte en vigueur, note sa référence et signale à son responsable que la note interne est à mettre à jour.",
     "verdict": "adapte"
    },
    {
     "id": "D",
     "libelle": "Il ne fait rien tant qu'on ne lui demande pas.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M1-EVA-RES"
  },
  "M1-EVA-FIN": {
   "id": "M1-EVA-FIN",
   "type": "fin-section",
   "etape": "Évaluation",
   "titre": "Évaluation terminée",
   "texte": "Votre résultat est affiché sur le sommaire du module. Dernière étape : le bilan de la semaine de Noa, et le vôtre.\n",
   "suite": "MENU"
  },
  "M1-SOR-1": {
   "id": "M1-SOR-1",
   "type": "narration",
   "illustration": "ILL-N06",
   "etape": "Sortie",
   "titre": "Ce que Noa a appris cette semaine",
   "texte": "Vendredi, 16 h. Une semaine sans dossier, et pourtant Noa a déjà été utile. Voici ce qu'il sait faire maintenant.",
   "points": [
    {
     "titre": "Je sais qui fait quoi",
     "texte": "L'État, la Nouvelle-Calédonie, les provinces, les communes : j'oriente vers l'acteur compétent.",
     "competence": "C01 — Organisation institutionnelle de la Nouvelle-Calédonie"
    },
    {
     "titre": "Je sais où se situe mon employeur",
     "texte": "Qui décide, qui m'encadre, à qui m'adresser.",
     "competence": "C02 — Situer son employeur et son service"
    },
    {
     "titre": "Je vérifie avant de transmettre",
     "texte": "Qui l'a produite, de quand elle date, si elle est définitive.",
     "competence": "C17 — Rechercher, vérifier, actualiser une information"
    }
   ],
   "competences": [
    "C01",
    "C02",
    "C17"
   ],
   "suite": "M1-SOR-REFL"
  },
  "M1-SOR-REFL": {
   "id": "M1-SOR-REFL",
   "type": "cartes",
   "etape": "Sortie",
   "titre": "Revenir sur sa semaine",
   "texte": "Malia passe au bureau : « Le vendredi, je prends cinq minutes. Trois questions. »",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C21"
   ],
   "cartes": [
    {
     "icone": "i-pause",
     "recto": "Qu'est-ce qui m'a fait perdre du temps ?",
     "verso": "Noa : « Mercredi, j'ai d'abord ouvert le vieux guide parce qu'il était sous la main. »"
    },
    {
     "icone": "i-dialogue",
     "recto": "Qui ou quoi m'a aidé ?",
     "verso": "Noa : « L'organigramme, et Malia quand les deux sources ne concordaient pas. »"
    },
    {
     "icone": "i-recommencer",
     "recto": "Que ferai-je autrement ?",
     "verso": "Noa : « Je commence par la source officielle, pas par la plus facile à trouver. »"
    }
   ],
   "encadre": "« Ce n'est pas un examen. C'est ce qui fait qu'on progresse plus vite. » — Malia",
   "suite": "M1-SOR-AUTO"
  },
  "M1-SOR-AUTO": {
   "id": "M1-SOR-AUTO",
   "type": "auto-positionnement",
   "etape": "Sortie",
   "groupe": "M1",
   "moment": "apres",
   "titre": "Et vous, maintenant ?",
   "texte": "Reprenez les phrases de lundi. Votre réponse du début est rappelée sous chaque phrase.",
   "echelle": [
    "Rarement",
    "Parfois",
    "Souvent"
   ],
   "items": [
    {
     "code": "C01",
     "libelle": "Je sais quelle institution fait quoi.",
     "pourquoi": "Sinon, j'envoie les gens au mauvais guichet, et ils perdent un déplacement."
    },
    {
     "code": "C02",
     "libelle": "Je sais situer mon employeur et trouver le bon interlocuteur.",
     "pourquoi": "Sinon, je perds du temps, et j'en fais perdre aux autres."
    },
    {
     "code": "C17",
     "libelle": "Je vérifie l'origine et la date d'une information avant de l'utiliser.",
     "pourquoi": "Sinon, je transmets une règle périmée sans le savoir."
    }
   ],
   "retour": "Ces repères se construisent avec la pratique. Les phrases où vous avez répondu « rarement » ou « parfois » sont celles à garder en tête dans les semaines qui viennent.\n",
   "suite": "M1-SOR-LIBRE"
  },
  "M1-SOR-LIBRE": {
   "id": "M1-SOR-LIBRE",
   "type": "reponse-libre",
   "etape": "Sortie",
   "titre": "Chez mon employeur",
   "question": "Une question que je poserai la semaine prochaine pour mieux me repérer chez mon employeur :",
   "apres": "Notez-la dans votre fiche « Mes premiers jours » : c'est fait pour ça.",
   "suite": "M1-SOR-RES"
  },
  "M1-SOR-RES": {
   "id": "M1-SOR-RES",
   "type": "ressources",
   "etape": "Sortie",
   "titre": "Mes ressources",
   "texte": "Les quatre outils de la semaine sont rangés dans votre carnet. Ouvrez-les pour les imprimer ou les enregistrer en PDF.",
   "fiches": [
    "FICHE-M1-ENT",
    "FICHE-M1-E1",
    "FICHE-M1-E2",
    "FICHE-M1-E3"
   ],
   "suite": "M1-FIN"
  },
  "M1-FIN": {
   "id": "M1-FIN",
   "type": "fin",
   "etape": "Sortie",
   "titre": "Bravo, la première semaine de Noa est terminée",
   "texte": "Vous avez accompagné Noa pendant sa première semaine à ÉLAN. Il sait désormais qui fait quoi, où se situe son employeur, et comment vérifier une information.\n",
   "points_titre": "Ce que vous avez appris",
   "points": [
    {
     "titre": "Orienter une demande",
     "texte": "Vers l'acteur compétent : l'État, la Nouvelle-Calédonie, la province ou la commune."
    },
    {
     "titre": "Situer votre employeur",
     "texte": "Qui délibère, qui décide, qui prépare ; vos interlocuteurs."
    },
    {
     "titre": "Trouver une information fiable",
     "texte": "Une source officielle, datée, en vigueur ; la référence notée."
    }
   ],
   "dossier": "Un dossier est né : Samuel parle de la demande de Passerelles à Ariane. Prochaine étape : le dossier est confié à Noa.",
   "prochain": {
    "titre": "M2 — Je trouve ma place",
    "texte": "Deux semaines plus tard, Samuel confie à Noa son premier dossier : Passerelles."
   },
   "suite": "MENU"
  }
 },
 "fiches": {
  "FICHE-M1-ENT": {
   "id": "FICHE-M1-ENT",
   "type": "fiche",
   "code": "M1-ENT-03",
   "modele": "formulaire",
   "categorie": "outil",
   "titre": "Mes premiers jours",
   "quand": "Dans vos premiers jours, chez votre employeur. Complétez au fur et à mesure : à la fin de la semaine, vous devez pouvoir commencer à travailler sans chercher.",
   "sections": [
    {
     "titre": "De quoi ai-je besoin ?",
     "champs": [
      "Ma messagerie et mon poste de travail",
      "Mes dossiers de travail (dossier partagé, intranet… selon mon employeur)",
      "Mon accès aux locaux (badge, clés… s'il y en a)"
     ]
    },
    {
     "titre": "Qu'attend-on de moi ?",
     "champs": [
      "Où trouver ma fiche de poste",
      "Mes premières missions",
      "À qui demander des précisions sur ces missions"
     ]
    },
    {
     "titre": "Qui peut m'aider ?",
     "champs": [
      "Mon responsable",
      "Un collègue référent (parrain ou marraine, s'il y en a un)",
      "Mon contact aux ressources humaines"
     ]
    },
    {
     "titre": "Mes questions de la semaine",
     "champs": [
      "Ma question",
      "La réponse, et qui me l'a donnée",
      "Ma question",
      "La réponse, et qui me l'a donnée"
     ]
    }
   ],
   "a_retenir": "Les premiers jours, on demande beaucoup : c'est normal. Notez les réponses ici, vous n'aurez pas à reposer les questions.",
   "competences": [
    "C02"
   ],
   "version": "0.2"
  },
  "FICHE-M1-E1": {
   "id": "FICHE-M1-E1",
   "type": "fiche",
   "code": "M1-E1-03",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Qui fait quoi en Nouvelle-Calédonie ?",
   "quand": "Une demande arrive et elle ne semble pas pour vous : avant de l'orienter.",
   "definition": "Une administration est **compétente** lorsqu'un texte lui attribue la responsabilité d'un domaine ou d'une mission.",
   "etapes": [
    {
     "titre": "1. Je comprends la demande",
     "texte": "De quoi la personne a-t-elle besoin ? Une information, un document, une aide ou une autorisation ?"
    },
    {
     "titre": "2. J'identifie l'administration compétente",
     "texte": "Je recherche si la demande relève de l'État, de la Nouvelle-Calédonie, d'une province ou d'une commune."
    },
    {
     "titre": "3. Je vérifie en cas de doute",
     "texte": "Je consulte une source officielle ou je demande confirmation à mon responsable avant d'orienter la demande."
    },
    {
     "titre": "4. J'oriente vers le bon interlocuteur",
     "texte": "J'indique le service à contacter, pourquoi il est compétent et comment le joindre."
    }
   ],
   "titre_types": "Qui est compétent ? Quelques exemples (liste non exhaustive)",
   "types": [
    {
     "titre": "L'État",
     "texte": "L'entrée et le séjour des étrangers, la justice, le maintien de l'ordre."
    },
    {
     "titre": "La Nouvelle-Calédonie",
     "texte": "Les impôts et taxes, la protection sociale, la circulation routière."
    },
    {
     "titre": "La province",
     "texte": "Tout ce qui n'est pas attribué aux autres : le développement économique, l'aide sociale…"
    },
    {
     "titre": "La commune",
     "texte": "La voirie communale, la police municipale. **À noter :** l'état civil se demande en mairie ; ses règles relèvent de la Nouvelle-Calédonie."
    }
   ],
   "exemple": "« Titre de séjour : l'entrée et le séjour des étrangers relèvent de l'**État** (la compétence). La demande se dépose auprès des services du **haut-commissariat**, qui la traitent (le guichet). Démarche : [nouvelle-caledonie.gouv.fr](https://www.nouvelle-caledonie.gouv.fr). »",
   "a_retenir": "Ce n'est pas parce qu'une demande arrive dans mon service que celui-ci est compétent. Je vérifie avant de l'orienter.",
   "reperes": [
    "Loi organique n° 99-209, art. 20 à 22 (Légifrance)",
    "La personne qui confirme une orientation dans mon service",
    "Les coordonnées des guichets que j'oriente souvent"
   ],
   "competences": [
    "C01"
   ],
   "version": "0.2"
  },
  "FICHE-M1-E2": {
   "id": "FICHE-M1-E2",
   "type": "fiche",
   "code": "M1-E2-03",
   "modele": "formulaire",
   "categorie": "outil",
   "titre": "Mon employeur et mes interlocuteurs",
   "quand": "Dans vos premières semaines, avec l'organigramme de votre employeur. Ce n'est pas un annuaire : notez pour quoi vous solliciterez chaque interlocuteur.",
   "sections": [
    {
     "titre": "Mon employeur",
     "champs": [
      "Son nom",
      "Son type (commune, province, Nouvelle-Calédonie, établissement public…)",
      "Qui prend les grandes décisions ? (conseil municipal, assemblée, conseil d'administration…)",
      "Qui dirige les services ? (secrétaire général, directeur…)"
     ]
    },
    {
     "titre": "Mon service",
     "champs": [
      "Mon service et ma direction",
      "Mon responsable : une consigne, une priorité, une difficulté",
      "Le responsable de mon responsable"
     ]
    },
    {
     "titre": "Mes interlocuteurs, et quand les solliciter",
     "champs": [
      "Ressources humaines : ma situation administrative (contrat, congés, paie)",
      "Support informatique : un accès, un matériel",
      "Logistique : locaux, véhicules, fournitures",
      "Mon référent : les pratiques du service",
      "Autre interlocuteur utile, et pour quoi"
     ]
    }
   ],
   "a_retenir": "Je connais mon périmètre d'action. Quand je ne suis pas habilité à décider, je transmets à la personne compétente.",
   "competences": [
    "C02"
   ],
   "version": "0.2"
  },
  "FICHE-M1-E3": {
   "id": "FICHE-M1-E3",
   "type": "fiche",
   "code": "M1-E3-03",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Trouver une information fiable",
   "quand": "Avant de transmettre une règle, un délai ou un chiffre, et chaque fois que deux sources ne disent pas la même chose.",
   "etapes": [
    {
     "titre": "1. Je formule mon besoin",
     "texte": "Une règle ? Une explication pratique ? Une procédure interne ?"
    },
    {
     "titre": "2. Je choisis la source",
     "texte": "Le texte officiel pour la règle ; la page institutionnelle pour l'explication ; l'intranet pour une procédure interne."
    },
    {
     "titre": "3. Je vérifie",
     "texte": "Qui l'a produite ? De quand date-t-elle ? Est-elle en vigueur ? La version consolidée donne la règle actuelle, le JONC sa date."
    },
    {
     "titre": "4. Je garde la référence",
     "texte": "Titre, auteur, date, lien, date de consultation."
    },
    {
     "titre": "5. Si deux sources se contredisent",
     "texte": "Je ne choisis pas au hasard : je demande un appui, avec mes sources datées."
    }
   ],
   "titre_types": "Où chercher ?",
   "types": [
    {
     "titre": "Leginova",
     "lien": "https://leginova.gouv.nc",
     "texte": "Les textes calédoniens en vigueur (versions consolidées) et le Journal officiel. Anciennement Juridoc."
    },
    {
     "titre": "JONC",
     "texte": "Le Journal officiel de la Nouvelle-Calédonie : la publication officielle des textes, avec leur date. Consultable sur Leginova."
    },
    {
     "titre": "Légifrance",
     "lien": "https://www.legifrance.gouv.fr",
     "texte": "Les textes nationaux, dont la loi organique de 1999."
    },
    {
     "titre": "DRHFPNC",
     "lien": "https://drhfpnc.gouv.nc",
     "texte": "Les règles et procédures RH de la fonction publique calédonienne."
    }
   ],
   "exemple": "« Délai d'affiliation après une embauche : deux sources officielles récentes donnent un délai, le guide de 2019 un autre. Peux-tu me dire quelle source fait foi ? »",
   "a_retenir": "Facile à trouver ne veut pas dire à jour. Je vérifie avant de transmettre.",
   "reperes": [
    "Le site de mon employeur",
    "L'intranet ou le dossier des procédures internes (s'il existe)",
    "La personne à qui je demande confirmation"
   ],
   "competences": [
    "C17",
    "C18"
   ],
   "version": "0.2"
  }
 },
 "illustrations": {
  "ILL-14": {
   "scene": "Bureau de Noa vu du dessus, quatre objets",
   "personnages": "—",
   "alt": "Bureau de Noa vu du dessus. Quatre objets représentent quatre sources d'information : une fiche de poste imprimée, un ordinateur ouvert sur l'intranet, une tablette ouverte sur un site officiel, un téléphone posé près d'un carnet."
  },
  "ILL-N01": {
   "scene": "Samuel accueille Noa, lundi 8 h",
   "personnages": "Noa, Samuel",
   "alt": "Lundi matin au pôle études et projets. Samuel serre la main de Noa, qui arrive avec son sac et son badge."
  },
  "ILL-N02": {
   "scene": "Malia montre la boîte de réception à Noa",
   "personnages": "Noa, Malia",
   "alt": "Malia, penchée vers l'écran de Noa, lui montre les messages reçus par le pôle ; Noa prend des notes."
  },
  "ILL-N03": {
   "scene": "Le comité de direction d'ÉLAN",
   "personnages": "Ariane, Samuel, Noa",
   "alt": "Salle de réunion d'ÉLAN. Ariane ouvre le comité de direction ; Samuel et Noa sont assis autour de la table."
  },
  "ILL-N04": {
   "scene": "Noa compare trois documents",
   "personnages": "Noa",
   "alt": "Noa à son bureau compare un document imprimé, une page à l'écran et une capture sur son téléphone."
  },
  "ILL-N05": {
   "scene": "Noa seul au pôle décroche le téléphone",
   "personnages": "Noa",
   "alt": "Jeudi matin. Le bureau du pôle est vide ; Noa décroche le téléphone fixe, un carnet ouvert devant lui."
  },
  "ILL-N06": {
   "scene": "Noa en fin de première semaine",
   "personnages": "Noa",
   "alt": "Vendredi après-midi. Noa, à son bureau, relit ses notes de la semaine, détendu."
  },
  "ILL-N07": {
   "scene": "Carte en relief des trois provinces",
   "personnages": "—",
   "alt": "Carte en relief de la Nouvelle-Calédonie. La Grande Terre est partagée entre la province Nord, chef-lieu Koné, et la province Sud, chef-lieu Nouméa, qui comprend aussi l'île des Pins. À l'est, la province des îles Loyauté, chef-lieu Wé, à Lifou."
  }
 },
 "source": "Storyboard — M1 v0.1.md"
};
