/* GÉNÉRÉ par build/build.py depuis « Storyboard — M2 v0.4.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M2",
  "type": "module",
  "titre": "Je trouve ma place",
  "code": "M2",
  "duree": "1 h",
  "intro": "Troisième semaine de Noa à ÉLAN. Samuel lui confie son premier dossier : la permanence itinérante de l'association Passerelles. Du lundi au vendredi, aidez-le à savoir ce qui est à lui, à avancer quand la consigne est floue, à demander de l'aide au bon moment et à tenir ses engagements quand la semaine déraille.\n",
  "sections": [
   {
    "id": "entree",
    "libelle": "Entrée",
    "etiquette": "Le contexte",
    "titre": "Un premier dossier rien qu'à moi",
    "debut": "M2-ENT-1",
    "duree": "4 min",
    "accroche": "Lundi matin, Samuel confie à Noa son premier dossier."
   },
   {
    "id": "ep1",
    "libelle": "Épisode 1",
    "titre": "Ma fiche de poste, pour de vrai",
    "debut": "M2-E1-S1",
    "duree": "13 min",
    "accroche": "Cinq demandes dans la même matinée. Lesquelles sont vraiment pour Noa ?"
   },
   {
    "id": "ep2",
    "libelle": "Épisode 2",
    "titre": "Une consigne qui me laisse un doute",
    "debut": "M2-E2-S1",
    "duree": "15 min",
    "accroche": "Samuel est en comité jusqu'à 14 h, Ariane voit le président de Passerelles à 16 h. Noa doit avancer sans tout savoir."
   },
   {
    "id": "ep3",
    "libelle": "Épisode 3",
    "titre": "Je suis bloqué",
    "debut": "M2-E3-S1",
    "duree": "10 min",
    "accroche": "Un accès refusé, une question RH, une définition introuvable. Qui peut aider Noa ?"
   },
   {
    "id": "defi",
    "libelle": "Défi",
    "titre": "La matinée déraille",
    "debut": "M2-DI-1",
    "duree": "8 min",
    "accroche": "Jeudi, Noa est en télétravail. À 9 h, Ariane appelle."
   },
   {
    "id": "eval",
    "libelle": "Évaluation",
    "titre": "Le bilan de la semaine",
    "debut": "M2-EVA-INTRO",
    "duree": "5 min",
    "accroche": "Trois situations nouvelles pour vérifier vos réflexes."
   },
   {
    "id": "sortie",
    "libelle": "Sortie",
    "etiquette": "Mon bilan",
    "titre": "Ce que Noa a appris",
    "debut": "M2-SOR-1",
    "duree": "5 min",
    "accroche": "Ce que Noa retient, et où vous en êtes, vous."
   }
  ],
  "dossier": {
   "titre": "Dossier Passerelles",
   "objet": "Une permanence itinérante d'aide aux démarches, dans six lieux de trois communes.",
   "roles": "Passerelles porte le projet et décide. ÉLAN qualifie, étudie et coordonne.",
   "jalons": [
    {
     "id": "confie",
     "jour": "Lundi",
     "libelle": "Le dossier est confié à Noa",
     "section": "entree"
    },
    {
     "id": "qualifie",
     "jour": "Lundi",
     "libelle": "Demande qualifiée, semaine planifiée",
     "section": "ep1"
    },
    {
     "id": "fiche",
     "jour": "Mardi",
     "libelle": "Fiche de qualification remise à Ariane",
     "section": "ep2"
    },
    {
     "id": "debloque",
     "jour": "Mercredi",
     "libelle": "Accès et définition obtenus",
     "section": "ep3"
    },
    {
     "id": "note",
     "jour": "Jeudi",
     "libelle": "Point à Ariane, note de cadrage remise",
     "section": "defi"
    },
    {
     "id": "decision",
     "jour": "Vendredi",
     "libelle": "Ariane décide de l'appui d'ÉLAN",
     "section": "sortie"
    }
   ]
  },
  "personnages": {
   "Noa": "Chargé d'études et d'appui aux projets, ÉLAN",
   "Samuel": "Responsable du pôle études et projets, ÉLAN",
   "Malia": "Chargée d'études et d'évaluation, ÉLAN",
   "Ariane": "Directrice d'ÉLAN",
   "Ana": "Développement des compétences, ÉLAN",
   "Joël": "Coordinateur de terrain, association Passerelles",
   "Léna": "Chargée d'études statistiques, administration provinciale",
   "Élise": "Agente d'accueil, une commune"
  }
 },
 "ecrans": {
  "M2-ENT-1": {
   "id": "M2-ENT-1",
   "type": "message",
   "illustration": "ILL-M01",
   "etape": "Entrée",
   "personnage": "Malia",
   "canal": "oral",
   "titre": "Koné, lundi, 7 h 45",
   "texte": "Noa commence sa troisième semaine à ÉLAN. Malia pose son café sur le bureau.\n« Cette semaine, Samuel te confie Passerelles. C'est ton dossier. Tu vas voir, le plus dur n'est pas l'étude. C'est de savoir ce qui est à toi, et ce qui ne l'est pas. »\n",
   "suite": "M2-ENT-2"
  },
  "M2-ENT-2": {
   "id": "M2-ENT-2",
   "type": "apport",
   "etape": "Entrée",
   "titre": "Le dossier de la semaine",
   "texte": "L'association Passerelles veut tenir une permanence mensuelle d'aide aux démarches dans six lieux de trois communes. Beaucoup d'habitants font aujourd'hui plusieurs heures de route pour une pièce manquante. Passerelles demande l'appui d'ÉLAN. Qui fait quoi ?",
   "carnet": false,
   "orbite": {
    "centre": "La permanence",
    "acteurs": [
     {
      "nom": "Passerelles : porte le projet et décide",
      "accent": true
     },
     "ÉLAN : diagnostic et coordination",
     "La commune : prête la salle",
     "La province : fournit des chiffres",
     "Ariane : décide de l'appui d'ÉLAN"
    ],
    "legende": "ÉLAN ne finance pas le projet, ne décide pas à la place de Passerelles et ne parle pas au nom de la commune."
   },
   "suite": "M2-ENT-AUTO"
  },
  "M2-ENT-AUTO": {
   "id": "M2-ENT-AUTO",
   "type": "auto-positionnement",
   "etape": "Entrée",
   "groupe": "M2",
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
     "code": "C03",
     "libelle": "Je sais ce qui relève de mon poste.",
     "pourquoi": "Sinon, je promets ce que je ne peux pas tenir, et quelqu'un d'autre devra rattraper ma promesse."
    },
    {
     "code": "C04",
     "libelle": "Je fais valider ce qui engage mon employeur.",
     "pourquoi": "Sinon, je le mets en difficulté sans le savoir, devant un partenaire ou un usager."
    },
    {
     "code": "C05",
     "libelle": "Je préviens dès qu'une échéance est menacée.",
     "pourquoi": "Sinon, mon retard bloque le travail des autres, qui l'apprennent trop tard pour s'organiser."
    },
    {
     "code": "C18",
     "libelle": "Je cherche avant de solliciter, et je sais quand m'arrêter.",
     "pourquoi": "Sinon, je perds du temps seul, ou j'en fais perdre aux autres avec une question floue."
    }
   ],
   "retour": "Merci. Gardez ces phrases en tête pendant la semaine de Noa.\n",
   "suite": "M2-ENT-FIN"
  },
  "M2-ENT-FIN": {
   "id": "M2-ENT-FIN",
   "type": "fin-section",
   "etape": "Entrée",
   "titre": "La semaine de Noa",
   "texte": "Chaque jour, une situation de travail. Vous décidez avec Noa ; chaque réponse est expliquée. Ce que Noa reçoit d'utile est rangé dans votre **carnet**, en haut de l'écran.\n",
   "acquis_titre": "Au programme",
   "acquis": [
    {
     "titre": "Lundi — Ma fiche de poste, pour de vrai",
     "texte": "Trier ce qui est à soi et planifier sa semaine."
    },
    {
     "titre": "Mardi — Une consigne qui me laisse un doute",
     "texte": "Avancer avec des informations incertaines, rendre compte."
    },
    {
     "titre": "Mercredi — Je suis bloqué",
     "texte": "Chercher, savoir s'arrêter, demander de l'aide."
    },
    {
     "titre": "Jeudi — La matinée déraille",
     "texte": "Le défi : tout réorganiser, à distance."
    },
    {
     "titre": "Vendredi — Le bilan",
     "texte": "Trois situations nouvelles, puis ce que vous retenez."
    }
   ],
   "dossier": "Toute la semaine, suivez le dossier Passerelles : chaque étape terminée le fait avancer.",
   "suite": "MENU"
  },
  "M2-E1-S1": {
   "id": "M2-E1-S1",
   "type": "message",
   "illustration": "ILL-M02",
   "etape": "Épisode 1",
   "personnage": "Samuel",
   "canal": "oral",
   "titre": "Lundi, 8 h 15",
   "texte": "« Je te confie la demande de Passerelles. Tu la qualifies et tu me prépares la note de cadrage pour Ariane. Je la veux **jeudi à 11 h** ; Ariane la lira vendredi matin.\nTa fiche de poste te dit ce que tu peux faire seul. Relis-la. »\n",
   "suite": "M2-E1-S2"
  },
  "M2-E1-S2": {
   "id": "M2-E1-S2",
   "type": "narration",
   "illustration": "ILL-M03",
   "etape": "Épisode 1",
   "titre": "Dans la même matinée",
   "texte": "Quatre autres demandes arrivent. Toutes semblent urgentes.",
   "points": [
    {
     "titre": "Joël, au téléphone",
     "texte": "« Vous pouvez me confirmer qu'ÉLAN paie la location du minibus ? Je dois répondre aux bénévoles ce soir. »"
    },
    {
     "titre": "Élise, par courriel",
     "texte": "« L'affiche de la commune donne encore les anciens horaires de la salle. Vous pouvez la corriger directement ? Je vous mets le fichier. »"
    },
    {
     "titre": "Malia, au bureau",
     "texte": "« On relit ta note ensemble avant que tu la rendes ? » Noa est en télétravail jeudi."
    },
    {
     "titre": "Ana, par courriel",
     "texte": "« Il me manque ta copie de diplôme et ton RIB pour ton dossier administratif. Avant vendredi, s'il te plaît. »"
    }
   ],
   "suite": "M2-E1-D1"
  },
  "M2-E1-D1": {
   "id": "M2-E1-D1",
   "type": "classement",
   "etape": "Épisode 1",
   "texte": "Classez les cinq demandes reçues par Noa.",
   "brief": "Cinq demandes en une matinée. Noa a sa fiche de poste et l'organigramme d'ÉLAN dans son carnet. L'enjeu : ne rien promettre qui ne lui appartient pas, sans rien laisser tomber.",
   "competences": [
    "C03"
   ],
   "categories": [
    {
     "id": "poste",
     "libelle": "Dans mon champ d'action"
    },
    {
     "id": "prepare",
     "libelle": "Je prépare, un autre décide"
    },
    {
     "id": "signale",
     "libelle": "Pas à moi : je réoriente ou je signale"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "La note de cadrage Passerelles demandée par Samuel.",
     "attendu": "poste",
     "feedback": "C'est la commande de son responsable, au cœur du poste : « préparer des documents d'aide à la décision ». Ariane, elle, décidera."
    },
    {
     "id": "B",
     "libelle": "Confirmer à Joël qu'ÉLAN paie le minibus.",
     "attendu": "signale",
     "feedback": "ÉLAN ne finance pas les projets qu'il accompagne. Une promesse de financement est dans la colonne « je fais valider » de la fiche de poste. Si Noa dit oui, Passerelles engage une dépense que personne ne paiera."
    },
    {
     "id": "C",
     "libelle": "Corriger l'affiche de la commune.",
     "attendu": "signale",
     "feedback": "L'affiche appartient à la commune. Noa signale l'erreur et propose les bons horaires ; c'est la commune qui corrige."
    },
    {
     "id": "D",
     "libelle": "Relire la note avec Malia.",
     "attendu": "poste",
     "feedback": "Faire relire une production avant de la transmettre fait partie du travail bien fait."
    },
    {
     "id": "E",
     "libelle": "Envoyer ses pièces à Ana.",
     "attendu": "poste",
     "feedback": "Fournir les pièces de son dossier est une obligation de l'agent, pas une formalité secondaire : sans elles, sa situation administrative ne peut pas être réglée."
    }
   ],
   "synthese": "Dire oui pour rendre service, ou répondre à la place de celui qui décide : ce sont les deux erreurs les plus courantes d'un nouvel agent.",
   "suite": "M2-E1-DOC"
  },
  "M2-E1-DOC": {
   "id": "M2-E1-DOC",
   "type": "document",
   "etape": "Épisode 1",
   "titre": "Fiche de poste — Chargé d'études et d'appui aux projets",
   "intro": "Extrait de la fiche de poste de Noa (document fictif, présenté comme une fiche de poste de la fonction publique calédonienne).",
   "blocs": [
    {
     "titre": "Identification du poste",
     "texte": "- **Employeur** : ÉLAN, établissement public\n- **Service** : pôle études et projets, Koné\n- **Responsable hiérarchique** : Samuel, responsable du pôle\n"
    },
    {
     "titre": "Mission du poste",
     "texte": "Sous l'autorité du responsable du pôle, contribuer à la préparation, au suivi et à l'évaluation d'actions de proximité accompagnées par ÉLAN. Rechercher et fiabiliser les informations, préparer des documents d'aide à la décision, faciliter les échanges entre acteurs, **sans se substituer aux autorités compétentes pour décider ou engager des moyens**."
    },
    {
     "titre": "Activités principales",
     "texte": "1. Analyser et qualifier les demandes\n2. Réaliser des études et fiabiliser l'information\n3. Appuyer le suivi des projets et rendre compte\n4. Préparer les réunions, rédiger les comptes rendus\n"
    },
    {
     "titre": "Je peux, dans le cadre confié",
     "texte": "- Organiser mes tâches ; préparer et mettre à jour un dossier\n- Demander des précisions factuelles ; proposer des options\n- Signaler un retard, une incohérence ou un risque\n"
    },
    {
     "titre": "Je fais vérifier ou valider",
     "texte": "- Une prise de position qui engage ÉLAN\n- Toute dépense, promesse de financement ou convention\n- Un changement de priorités ou de calendrier\n- Une communication externe sensible\n"
    },
    {
     "titre": "Repère",
     "texte": "Une demande directe d'Ariane qui modifie le travail confié est clarifiée avec Samuel."
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
      "role": "Responsable à venir"
     },
     {
      "nom": "Ana",
      "role": "Pôle ressources et administration"
     }
    ],
    [
     {
      "nom": "Malia",
      "role": "Chargée d'études et d'évaluation"
     },
     {
      "nom": "Noa",
      "role": "Chargé d'études et d'appui aux projets",
      "moi": true
     }
    ]
   ],
   "partenaires": "Hors organigramme : l'association Passerelles (Joël), la commune (Élise), l'administration provinciale (Léna). Ils ne reçoivent pas d'instruction d'ÉLAN.",
   "suite": "M2-E1-D2"
  },
  "M2-E1-D2": {
   "id": "M2-E1-D2",
   "type": "choix",
   "etape": "Épisode 1",
   "personnage": "Joël",
   "texte": "Joël attend sa réponse sur le minibus. Que lui dit Noa ?",
   "brief": "Joël doit répondre à ses bénévoles ce soir. Il est pressé et un peu inquiet. Noa lui dit « vous ».",
   "competences": [
    "C03"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "« Ça devrait passer, je vous redis. »",
     "verdict": "risque",
     "feedback": "Joël annonce le minibus aux bénévoles. Quand la réponse négative tombe, Passerelles perd la face, et ÉLAN aussi. Une demi-promesse reste une promesse."
    },
    {
     "id": "B",
     "libelle": "« Je ne peux pas vous le confirmer : ÉLAN ne finance pas les projets qu'il accompagne. Notre appui porte sur le diagnostic et la coordination. Je note votre besoin de transport dans la note de cadrage et j'en parle à mon responsable. »",
     "verdict": "adapte",
     "feedback": "Noa reste courtois, n'engage pas ÉLAN, explique pourquoi, et l'information utile remonte. Joël peut prévenir ses bénévoles honnêtement."
    },
    {
     "id": "C",
     "libelle": "« Voyez avec Samuel. »",
     "verdict": "partiel",
     "feedback": "Juste sur le fond, mais Joël repart sans explication, et Samuel reçoit un appel qu'une phrase de Noa aurait évité."
    },
    {
     "id": "D",
     "libelle": "« Je ne sais pas, rappelez plus tard. »",
     "verdict": "inadapte",
     "feedback": "Joël repart sans réponse ni piste. Un partenaire mal orienté perd confiance dans ÉLAN."
    }
   ],
   "suite": "M2-E1-D3"
  },
  "M2-E1-D3": {
   "id": "M2-E1-D3",
   "type": "planning",
   "etape": "Épisode 1",
   "texte": "Placez les tâches de Noa dans sa semaine.",
   "brief": "La note doit être chez Samuel jeudi à 11 h. Jeudi, Noa est en télétravail. Les pièces pour Ana sont attendues avant vendredi.",
   "consigne": "Glissez chaque tâche dans un jour, ou choisissez le jour dans la liste.",
   "competences": [
    "C05"
   ],
   "colonnes": [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi"
   ],
   "taches": [
    {
     "id": "T1",
     "libelle": "Répondre à Joël et à Élise",
     "attendu": "Lundi",
     "feedback": "Deux minutes de travail chacune. Les reporter fait attendre deux partenaires pour rien."
    },
    {
     "id": "T2",
     "libelle": "Qualifier la demande de Passerelles",
     "attendu": "Lundi",
     "feedback": "C'est la première étape de la note : savoir ce qui est demandé, et par qui."
    },
    {
     "id": "T3",
     "libelle": "Diagnostic et rédaction de la note",
     "attendu": [
      "Mardi",
      "Mercredi"
     ],
     "feedback": "Il faut ces deux jours pour avoir une version complète avant la relecture."
    },
    {
     "id": "T4",
     "libelle": "Envoyer les pièces à Ana",
     "attendu": [
      "Mardi",
      "Mercredi"
     ],
     "feedback": "Les garder pour vendredi, c'est risquer de les oublier le jour de l'échéance."
    },
    {
     "id": "T5",
     "libelle": "Relecture avec Malia, en visio, 8 h 30",
     "attendu": "Jeudi",
     "contrainte": "Noa est en télétravail jeudi",
     "feedback": "Jeudi tôt laisse le temps de corriger avant 11 h. Une relecture à 10 h 45 ne servirait à rien."
    },
    {
     "id": "T6",
     "libelle": "Remettre la note à Samuel, 11 h",
     "attendu": "Jeudi",
     "feedback": "C'est l'échéance fixée par Samuel."
    }
   ],
   "synthese": "Une semaine s'organise à partir des échéances, en gardant du temps pour relire et corriger.",
   "suite": "M2-E1-APP1"
  },
  "M2-E1-APP1": {
   "id": "M2-E1-APP1",
   "type": "cartes",
   "etape": "Épisode 1",
   "titre": "La mission d'ÉLAN n'est pas la mission de mon poste",
   "texte": "Dans le dossier Passerelles, quatre acteurs, quatre rôles. Retournez les cartes.",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C03"
   ],
   "cartes": [
    {
     "icone": "i-batiment",
     "recto": "ÉLAN appuie",
     "verso": "L'établissement apporte un diagnostic et coordonne les partenaires. C'est sa mission."
    },
    {
     "icone": "i-loupe",
     "recto": "Noa qualifie et prépare",
     "verso": "Il analyse la demande, fiabilise les informations et rédige la note. C'est la mission de son poste."
    },
    {
     "icone": "i-projet",
     "recto": "Passerelles décide",
     "verso": "L'association décide de créer sa permanence, recrute ses bénévoles, organise le transport."
    },
    {
     "icone": "i-valider",
     "recto": "Ariane décide de l'appui",
     "verso": "La directrice décide si ÉLAN accompagne le projet, et comment. Noa lui donne les éléments pour décider."
    }
   ],
   "encadre": "Préparer une décision n'est pas la prendre.",
   "suite": "M2-E1-APP2"
  },
  "M2-E1-APP2": {
   "id": "M2-E1-APP2",
   "type": "apport",
   "etape": "Épisode 1",
   "titre": "Fonctionnaire ou contractuel : ce qui change, ce qui ne change pas",
   "texte": "Noa est fonctionnaire stagiaire : il fait un stage d'un an avant d'être titularisé. Ana, au pôle ressources, est contractuelle. Leur statut change leur situation, pas leurs devoirs.",
   "colonnes": [
    {
     "icone": "i-chemin",
     "titre": "Ce qui change",
     "items": [
      "La façon d'être recruté : concours ou contrat",
      "Le début : un stage avant la titularisation, pour le fonctionnaire",
      "La carrière : grade et avancement, ou durée du contrat",
      "Certaines règles de congés et de fin de fonctions"
     ]
    },
    {
     "icone": "i-balance",
     "titre": "Ce qui ne change pas",
     "items": [
      "Servir l'intérêt général, avec neutralité",
      "Discrétion et secret professionnels",
      "Exécuter les instructions de son responsable",
      "Le droit à la rémunération, aux congés, à la formation"
     ]
    }
   ],
   "a_retenir": "**Et selon votre statut ?** Fonctionnaire, stagiaire ou contractuel, catégorie A, B ou C : ces devoirs sont les vôtres. Pour ce qui change (recrutement, stage, carrière, congés, fin de fonctions), votre gestionnaire RH et le site de la DRHFPNC vous répondent.",
   "note_expert": "Formulations à faire valider par un expert statutaire (Délibération 81, arrêté n° 1065, délibération 230, Loi du pays 2021-4).",
   "competences": [
    "C03"
   ],
   "sources": "Droits et obligations : délibération n° 81 du 24 juillet 1990. Carrière et stage des fonctionnaires : arrêté n° 1065 ; stage des attachés : délibération n° 230. Agents contractuels : loi du pays n° 2021-4. Pour votre situation : votre gestionnaire RH et le site de la DRHFPNC.",
   "suite": "M2-E1-APP2B"
  },
  "M2-E1-APP2B": {
   "id": "M2-E1-APP2B",
   "type": "cartes",
   "etape": "Épisode 1",
   "titre": "Ma carrière peut évoluer",
   "consigne": "Un fonctionnaire peut travailler ailleurs ou faire une pause. Retournez les cartes : trois mots à connaître, sans entrer dans le détail.",
   "cartes": [
    {
     "icone": "i-chemin",
     "recto": "Détachement",
     "verso": "Le fonctionnaire travaille hors de son corps d'origine, mais garde ses droits à l'avancement et à la retraite dans ce corps."
    },
    {
     "icone": "i-equipe",
     "recto": "Mise à disposition",
     "verso": "Le fonctionnaire reste dans son corps et reste payé par son administration, mais travaille ailleurs."
    },
    {
     "icone": "i-pause",
     "recto": "Disponibilité",
     "verso": "Le fonctionnaire quitte un temps son administration. Il n'est plus payé et, sauf exception, n'acquiert plus de droits à l'avancement et à la retraite."
    }
   ],
   "encadre": "Ces positions concernent les fonctionnaires. Conditions et démarches : votre service RH et le site de la DRHFPNC. Contractuel ? Renseignez-vous auprès de votre employeur. *Source : arrêté n° 1065, art. 75, 90-1 et 91.*",
   "competences": [
    "C03"
   ],
   "sources": "Arrêté n° 1065, art. 75 (détachement), 90-1 (mise à disposition) et 91 (disponibilité).",
   "suite": "M2-E1-APP3"
  },
  "M2-E1-APP3": {
   "id": "M2-E1-APP3",
   "type": "apport",
   "etape": "Épisode 1",
   "titre": "Ce que je peux engager, ce que je ne peux pas promettre",
   "texte": "Ma fiche de poste fixe ma marge. Ce qui n'y figure pas n'est pas autorisé pour autant.",
   "colonnes": [
    {
     "icone": "i-agir",
     "titre": "Je peux, seul",
     "items": [
      "Organiser mon travail",
      "Demander une précision factuelle",
      "Proposer des options",
      "Signaler un retard ou un risque"
     ]
    },
    {
     "icone": "i-valider",
     "titre": "Je fais valider",
     "items": [
      "Une dépense ou une promesse de financement",
      "Une prise de position au nom d'ÉLAN",
      "Un changement de calendrier",
      "Une communication externe sensible"
     ]
    }
   ],
   "a_retenir": "Une promesse faite par un agent engage son employeur. Dans le doute, je propose et je fais valider.",
   "competences": [
    "C03",
    "C04"
   ],
   "suite": "M2-E1-APP4"
  },
  "M2-E1-APP4": {
   "id": "M2-E1-APP4",
   "type": "apport",
   "etape": "Épisode 1",
   "titre": "Pourquoi l'échéance de jeudi compte",
   "texte": "Samuel n'a pas fixé jeudi 11 h au hasard. Une échéance relie mon travail à une décision.",
   "points": [
    {
     "titre": "Jeudi 11 h, Noa rend sa note",
     "texte": "Samuel a le temps de la relire et de la corriger avec lui."
    },
    {
     "titre": "Vendredi matin, Ariane la lit",
     "texte": "Elle décide de l'appui d'ÉLAN avant son rendez-vous avec Passerelles."
    },
    {
     "titre": "Passerelles peut avancer",
     "texte": "L'association sait sur quoi compter pour organiser sa permanence."
    }
   ],
   "encadre": "Sur site ou en télétravail, l'échéance est la même. Ce qui change, ce sont les moyens de se coordonner : visio, téléphone, messagerie.",
   "competences": [
    "C05"
   ],
   "suite": "M2-E1-OUT"
  },
  "M2-E1-OUT": {
   "id": "M2-E1-OUT",
   "type": "outil",
   "etape": "Épisode 1",
   "fiche": "FICHE-E1",
   "titre": "Mes repères de poste",
   "texte": "**Quand l'utiliser ?** Dans vos premières semaines, votre fiche de poste sous les yeux.\nComplétez le modèle : vos missions, vos interlocuteurs, ce que vous décidez seul, ce que vous faites valider. Puis relisez-le avec votre responsable.\n",
   "competences": [
    "C03"
   ],
   "suite": "M2-E1-TR"
  },
  "M2-E1-TR": {
   "id": "M2-E1-TR",
   "type": "classement",
   "etape": "Épisode 1",
   "personnage": "Ana",
   "texte": "Ana passe au bureau : « Relie ces quatre activités de ta semaine à tes missions. »",
   "brief": "Savoir à quelle mission correspond une activité, c'est savoir l'expliquer et la défendre. Les missions viennent de la fiche de poste de Noa.",
   "competences": [
    "C03"
   ],
   "categories": [
    {
     "id": "qualifier",
     "libelle": "Qualifier les demandes"
    },
    {
     "id": "etudier",
     "libelle": "Études et fiabilité"
    },
    {
     "id": "suivre",
     "libelle": "Suivi des projets, rendre compte"
    },
    {
     "id": "cooperer",
     "libelle": "Réunions et échanges"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "Identifier qui porte le projet de permanence et ce qu'il demande à ÉLAN.",
     "attendu": "qualifier",
     "feedback": "C'est la qualification : savoir ce qui est demandé, par qui, et si cela relève d'ÉLAN."
    },
    {
     "id": "B",
     "libelle": "Vérifier les chiffres de fréquentation transmis par la province.",
     "attendu": "etudier",
     "feedback": "Fiabiliser une donnée avant de l'utiliser fait partie des études."
    },
    {
     "id": "C",
     "libelle": "Dire à Samuel que la note aura du retard.",
     "attendu": "suivre",
     "feedback": "Signaler un écart sur une échéance, c'est rendre compte."
    },
    {
     "id": "D",
     "libelle": "Préparer l'ordre du jour de la réunion avec la commune.",
     "attendu": "cooperer",
     "feedback": "Préparer une réunion entre partenaires fait partie de la coopération."
    }
   ],
   "synthese": "Chaque activité de Noa se rattache à une ligne de sa fiche de poste.",
   "suite": "M2-E1-FIN"
  },
  "M2-E1-FIN": {
   "id": "M2-E1-FIN",
   "type": "fin-section",
   "etape": "Épisode 1",
   "titre": "Lundi, c'est fait",
   "texte": "Noa sait ce qui est à lui. Sa semaine est planifiée.",
   "acquis": [
    {
     "titre": "Il a trié les cinq demandes",
     "texte": "Sa note et ses pièces pour Ana : à lui. Le minibus et l'affiche : ni à lui, ni à ÉLAN."
    },
    {
     "titre": "Il n'a rien promis à Joël",
     "texte": "Il a expliqué pourquoi, et il a noté le besoin de transport."
    },
    {
     "titre": "Il a planifié sa semaine",
     "texte": "Relecture jeudi 8 h 30 en visio, note à 11 h."
    }
   ],
   "dossier": "Noa sait ce que Passerelles demande, et ce qui ne revient pas à ÉLAN : le minibus. La note de cadrage est attendue jeudi à 11 h.",
   "suite": "MENU"
  },
  "M2-E2-S1": {
   "id": "M2-E2-S1",
   "type": "message",
   "etape": "Épisode 2",
   "personnage": "Samuel",
   "canal": "sms",
   "titre": "Mardi, 9 h 40",
   "texte": "Samuel est en comité de direction jusqu'à 14 h.\n« Ariane voit le président de Passerelles à 16 h. Mets à jour la fiche de qualification avec les derniers chiffres, qu'elle l'ait avant. »\n",
   "suite": "M2-E2-S2"
  },
  "M2-E2-S2": {
   "id": "M2-E2-S2",
   "type": "message",
   "etape": "Épisode 2",
   "personnage": "Léna",
   "canal": "courriel",
   "objet": "Fréquentation de nos permanences",
   "titre": "10 h 05",
   "texte": "« Bonjour, nos permanences ont reçu **312 demandes** d'aide aux démarches au 30 septembre. Le chiffre de la côte Ouest est provisoire, il sera consolidé jeudi. Cordialement, Léna »\n",
   "suite": "M2-E2-S3"
  },
  "M2-E2-S3": {
   "id": "M2-E2-S3",
   "type": "message",
   "illustration": "ILL-M04",
   "etape": "Épisode 2",
   "personnage": "Joël",
   "canal": "appel",
   "titre": "10 h 30",
   "texte": "Joël appelle pour caler la visite de la salle communale. Au passage :\n« Vos chiffres comptent les gens qui viennent. Mais Teiva, notre médiateur numérique, le voit à chaque permanence : beaucoup reviennent trois fois pour le même dossier, faute d'une pièce. Ça ne dit pas combien de démarches aboutissent. »\n",
   "suite": "M2-E2-D1"
  },
  "M2-E2-D1": {
   "id": "M2-E2-D1",
   "type": "choix",
   "etape": "Épisode 2",
   "texte": "Noa doit mettre à jour la fiche. Par quoi commence-t-il ?",
   "brief": "La consigne de Samuel tient en deux lignes. Ariane a besoin de la fiche avant 16 h, pour un rendez-vous avec le président de Passerelles.",
   "competences": [
    "C04",
    "C05"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il remplace tout de suite les anciens chiffres par ceux de Léna.",
     "verdict": "partiel",
     "feedback": "Utile, mais Noa n'a pas vérifié à quoi la fiche servira à 16 h. Il risque de produire un document juste, mais inutile pour Ariane."
    },
    {
     "id": "B",
     "libelle": "Il relit la consigne et la fiche existante : à quoi servira-t-elle à 16 h ?",
     "verdict": "adapte",
     "feedback": "Savoir à quoi sert un document, c'est savoir ce qu'il doit contenir. Ici, Ariane doit pouvoir répondre au président : la fiche doit dire ce qui est sûr et ce qui ne l'est pas."
    },
    {
     "id": "C",
     "libelle": "Il appelle Samuel pour lui demander ce qu'il veut exactement.",
     "verdict": "risque",
     "feedback": "Samuel est en comité jusqu'à 14 h. Le déranger pour une question que Noa peut éclaircir seul, en relisant la consigne, n'est pas justifié."
    },
    {
     "id": "D",
     "libelle": "Il attend 14 h pour en parler avec Samuel.",
     "verdict": "inadapte",
     "feedback": "La fiche serait prête trop tard pour 16 h. Une consigne incomplète n'empêche pas d'avancer sur ce qui est clair."
    }
   ],
   "suite": "M2-E2-D2"
  },
  "M2-E2-D2": {
   "id": "M2-E2-D2",
   "type": "choix",
   "etape": "Épisode 2",
   "personnage": "Léna",
   "texte": "Que fait Noa du chiffre de 312 demandes ?",
   "brief": "Léna précise que le chiffre de la côte Ouest est provisoire. La fiche sera lue par la directrice, devant le président de l'association.",
   "competences": [
    "C17"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il l'écrit tel quel dans la fiche.",
     "verdict": "risque",
     "feedback": "Présenté comme définitif, ce chiffre expose Ariane : s'il change jeudi, c'est elle qui devra se corriger devant le président."
    },
    {
     "id": "B",
     "libelle": "Il ne le met pas, puisqu'il n'est pas sûr.",
     "verdict": "partiel",
     "feedback": "Le taire prive Ariane d'un ordre de grandeur utile pour son rendez-vous."
    },
    {
     "id": "C",
     "libelle": "Il l'intègre en précisant : provisoire, consolidé jeudi.",
     "verdict": "adapte",
     "feedback": "Ariane dispose de l'ordre de grandeur et sait qu'il peut bouger. C'est cela, une information fiable : on sait d'où elle vient et ce qu'elle vaut."
    }
   ],
   "suite": "M2-E2-D3"
  },
  "M2-E2-D3": {
   "id": "M2-E2-D3",
   "type": "choix",
   "etape": "Épisode 2",
   "personnage": "Léna",
   "texte": "Noa revient-il vers Léna ?",
   "brief": "« Provisoire », mais de combien ? Un écart de 5 et un écart de 100 ne se présentent pas de la même façon.",
   "competences": [
    "C17",
    "C18"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Oui, par un court message : quelle ampleur d'écart peut-on attendre ?",
     "verdict": "adapte",
     "feedback": "Une question précise, posée au service qui produit la donnée. Léna peut répondre en une ligne, et la fiche gagne en précision."
    },
    {
     "id": "B",
     "libelle": "Non, il ne veut pas la déranger.",
     "verdict": "partiel",
     "feedback": "Par discrétion, Noa laisse une incertitude qu'une question d'une ligne aurait réduite."
    },
    {
     "id": "C",
     "libelle": "Oui, il lui demande de lui envoyer tout le fichier pour vérifier lui-même.",
     "verdict": "risque",
     "feedback": "Noa n'a ni le temps ni les éléments pour refaire le travail de Léna avant 16 h, et il lui fait perdre du temps."
    }
   ],
   "suite": "M2-E2-C3"
  },
  "M2-E2-C3": {
   "id": "M2-E2-C3",
   "type": "message",
   "etape": "Épisode 2",
   "personnage": "Léna",
   "canal": "courriel",
   "objet": "Re : Fréquentation de nos permanences",
   "titre": "11 h 20",
   "texte": "« L'écart sera de vingt demandes au plus. Bonne journée, Léna »\n",
   "suite": "M2-E2-D4"
  },
  "M2-E2-D4": {
   "id": "M2-E2-D4",
   "type": "choix",
   "etape": "Épisode 2",
   "personnage": "Joël",
   "texte": "Que fait Noa de ce que Joël a raconté ?",
   "brief": "Personne n'a rien demandé à Joël : il a appelé de lui-même. Son témoignage n'est pas chiffré, mais il touche au sens de l'indicateur que la fiche présente à Ariane.",
   "competences": [
    "C20",
    "C17"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il n'en parle pas : rien ne le prouve.",
     "verdict": "risque",
     "feedback": "Ariane passerait à côté d'une limite importante : le chiffre compte les passages, pas les démarches qui aboutissent."
    },
    {
     "id": "B",
     "libelle": "Il le mentionne comme un retour de terrain, en citant Joël, et note que l'indicateur mesure la fréquentation, pas les démarches abouties.",
     "verdict": "adapte",
     "feedback": "Un témoignage n'est pas une donnée, mais il signale une limite de l'indicateur. Cité avec sa source, il éclaire Ariane sans tromper personne."
    },
    {
     "id": "C",
     "libelle": "Il écrit : « Une démarche sur trois n'aboutit pas. »",
     "verdict": "inadapte",
     "feedback": "Noa invente un chiffre à partir d'un témoignage. Si le président demande d'où il vient, Ariane n'aura rien à répondre."
    }
   ],
   "suite": "M2-E2-D5"
  },
  "M2-E2-D5": {
   "id": "M2-E2-D5",
   "type": "choix-multiple",
   "etape": "Épisode 2",
   "personnage": "Samuel",
   "texte": "Noa prépare un message pour Samuel. Que doit-il y mettre ? Plusieurs réponses possibles.",
   "brief": "Samuel lira ce message en sortant du comité, entre deux réunions.",
   "competences": [
    "C04"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Ce qui a été mis à jour dans la fiche."
    },
    {
     "id": "B",
     "libelle": "Le récit de ses échanges avec Léna et Joël."
    },
    {
     "id": "C",
     "libelle": "Le chiffre provisoire et sa date de consolidation."
    },
    {
     "id": "D",
     "libelle": "Le tableau complet de Léna à analyser."
    },
    {
     "id": "E",
     "libelle": "Le retour de Joël, avec sa source."
    },
    {
     "id": "F",
     "libelle": "Une seule question à trancher : « J'envoie à Ariane, ou tu préfères relire ? »"
    }
   ],
   "attendu": [
    "A",
    "C",
    "E",
    "F"
   ],
   "feedback_ok": "Samuel sait en deux minutes ce qui a changé, ce qui reste incertain et jusqu'à quand, d'où vient le signal terrain, et la seule décision qu'on attend de lui.",
   "feedback_ko": "Un compte rendu utile dit ce qui est fait, ce qui reste incertain et la décision attendue. Le récit des échanges est long à lire ; le tableau brut oblige Samuel à refaire l'analyse que Noa devait lui épargner.",
   "suite": "M2-E2-D6"
  },
  "M2-E2-D6": {
   "id": "M2-E2-D6",
   "type": "choix",
   "etape": "Épisode 2",
   "texte": "Comment Noa fait-il parvenir la fiche à temps ?",
   "brief": "Il est 13 h. Samuel sort du comité à 14 h. Ariane doit avoir la fiche avant 16 h.",
   "competences": [
    "C04",
    "C05"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il envoie la fiche directement à Ariane pour tenir le délai.",
     "verdict": "inadapte",
     "feedback": "La fiche engage le pôle, et Samuel l'a commandée. L'envoyer sans lui le court-circuite, alors que le délai pouvait être tenu."
    },
    {
     "id": "B",
     "libelle": "Il l'envoie à Samuel avant 14 h, avec une seule question à trancher.",
     "verdict": "adapte",
     "feedback": "Samuel valide en deux minutes à la sortie du comité, et Ariane l'aura avant 16 h. Le délai et la chaîne hiérarchique sont respectés."
    },
    {
     "id": "C",
     "libelle": "Il attend jeudi pour la joindre à la note de cadrage.",
     "verdict": "inadapte",
     "feedback": "Le rendez-vous d'Ariane est aujourd'hui à 16 h. L'échéance serait manquée."
    },
    {
     "id": "D",
     "libelle": "Il appelle Samuel en plein comité.",
     "verdict": "partiel",
     "feedback": "Justifié en cas d'urgence réelle. Ici, un message avant 14 h suffit."
    }
   ],
   "suite": "M2-E2-C6"
  },
  "M2-E2-C6": {
   "id": "M2-E2-C6",
   "type": "message",
   "etape": "Épisode 2",
   "personnage": "Samuel",
   "canal": "sms",
   "titre": "14 h 10",
   "texte": "« Clair, merci. Garde la phrase de Joël, c'est utile. Envoie à Ariane, mets-moi en copie. »\n",
   "suite": "M2-E2-C7"
  },
  "M2-E2-C7": {
   "id": "M2-E2-C7",
   "type": "message",
   "etape": "Épisode 2",
   "personnage": "Samuel",
   "canal": "courriel",
   "objet": "TR : Passerelles",
   "titre": "16 h 45",
   "texte": "Samuel transfère un mot d'Ariane :\n« Le président a apprécié qu'on distingue la fréquentation et les démarches qui aboutissent. Merci à Noa. »\n",
   "suite": "M2-E2-APP1"
  },
  "M2-E2-APP1": {
   "id": "M2-E2-APP1",
   "type": "apport",
   "etape": "Épisode 2",
   "titre": "Pour qui je travaille ?",
   "texte": "Noa n'a jamais vu les habitants qui iront à la permanence. Pourtant, son travail de mardi les concerne.",
   "points": [
    {
     "titre": "Noa vérifie le chiffre de Léna",
     "texte": "Résultat : une fiche juste."
    },
    {
     "titre": "Ariane a une information fiable avant 16 h",
     "texte": "Résultat : une décision prise au bon moment."
    },
    {
     "titre": "Passerelles sait sur quoi compter",
     "texte": "Résultat : une permanence mieux organisée."
    },
    {
     "titre": "Une habitante trouve de l'aide près de chez elle",
     "texte": "Résultat : moins d'heures de route pour une pièce manquante."
    }
   ],
   "a_retenir": "Un service de qualité répond au besoin réel de l'usager, au bon moment, sans erreur. Même quand on ne voit jamais l'usager, son dossier passe par notre travail.",
   "competences": [
    "C20"
   ],
   "suite": "M2-E2-LIBRE"
  },
  "M2-E2-LIBRE": {
   "id": "M2-E2-LIBRE",
   "type": "reponse-libre",
   "etape": "Épisode 2",
   "titre": "Et dans votre poste ?",
   "question": "Qui est au bout de la chaîne de votre travail ?",
   "apres": "Le garder en tête aide à choisir ce qui compte vraiment quand tout semble urgent.",
   "suite": "M2-E2-APP2"
  },
  "M2-E2-APP2": {
   "id": "M2-E2-APP2",
   "type": "apport",
   "etape": "Épisode 2",
   "titre": "Le circuit d'une note à ÉLAN",
   "texte": "Une note suit un chemin. Chacun y a un rôle.",
   "points": [
    {
     "titre": "Noa rédige",
     "texte": "Il rassemble, vérifie, propose. Il signale ce qui est incertain."
    },
    {
     "titre": "Samuel contrôle",
     "texte": "Il relit, corrige, valide l'envoi au nom du pôle."
    },
    {
     "titre": "Ariane décide",
     "texte": "Elle engage ÉLAN. Ce qu'elle décide s'applique à tous, y compris quand on n'est pas d'accord."
    }
   ],
   "encadre": "Rendre compte, c'est dire ce qui est fait, ce qui reste incertain, et ce qu'on attend. Alerter, c'est prévenir sans attendre quand un risque ou un retard apparaît.",
   "competences": [
    "C04",
    "C18"
   ],
   "suite": "M2-E2-APP3"
  },
  "M2-E2-APP3": {
   "id": "M2-E2-APP3",
   "type": "apport",
   "etape": "Épisode 2",
   "titre": "Exécuter les instructions, et ses limites",
   "texte": "L'agent public exécute les instructions de son responsable. Une seule exception : un ordre manifestement illégal **et** de nature à compromettre gravement un intérêt public. Les deux conditions sont nécessaires.",
   "colonnes": [
    {
     "icone": "i-dialogue",
     "titre": "Je ne suis pas d'accord",
     "items": [
      "Je le dis à mon responsable, avec mes arguments",
      "J'applique la décision une fois prise",
      "Je ne le fais pas savoir à l'extérieur"
     ]
    },
    {
     "icone": "i-alerter",
     "titre": "L'ordre me paraît illégal",
     "items": [
      "Je vérifie le texte applicable",
      "J'alerte mon responsable, ou le niveau au-dessus",
      "Je ne l'exécute que si l'illégalité n'est pas manifeste"
     ]
    }
   ],
   "sources": "Délibération n° 81 du 24 juillet 1990, art. 22, applicable aux contractuels par la loi du pays 2021-4. Le droit de retrait est une autre règle, vue en M4.",
   "competences": [
    "C04"
   ],
   "suite": "M2-E2-APP4"
  },
  "M2-E2-APP4": {
   "id": "M2-E2-APP4",
   "type": "cartes",
   "etape": "Épisode 2",
   "titre": "Ce que vaut une information",
   "texte": "Mardi, Noa a reçu trois sortes d'informations. Elles ne se présentent pas de la même façon.",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C17",
    "C20"
   ],
   "cartes": [
    {
     "icone": "i-check-cercle",
     "recto": "Une information certaine",
     "verso": "Vérifiée, datée, sourcée. Je la présente comme acquise."
    },
    {
     "icone": "i-pause",
     "recto": "Une information provisoire",
     "verso": "Je la donne avec son statut et sa date : « 312, provisoire, consolidé jeudi »."
    },
    {
     "icone": "i-dialogue",
     "recto": "Un témoignage",
     "verso": "Je le cite avec sa source, sans en faire un chiffre : « selon l'association… »."
    },
    {
     "icone": "i-loupe",
     "recto": "Activité ou résultat ?",
     "verso": "Compter les passages mesure l'activité. Savoir combien de démarches aboutissent mesure le résultat."
    }
   ],
   "encadre": "Avant de transmettre une information, je me demande : qui l'a produite ? de quand date-t-elle ? est-elle définitive ?",
   "suite": "M2-E2-OUT"
  },
  "M2-E2-OUT": {
   "id": "M2-E2-OUT",
   "type": "outil",
   "etape": "Épisode 2",
   "fiche": "FICHE-E2",
   "titre": "Jusqu'où puis-je agir seul ?",
   "texte": "**Quand l'utiliser ?** Avant d'agir sur une demande qui vous laisse un doute. Ce n'est pas un test : cochez chaque point quand vous l'avez vérifié, et ouvrez « Comment vérifier ? » si besoin.\n",
   "competences": [
    "C04",
    "C18"
   ],
   "suite": "M2-E2-TR"
  },
  "M2-E2-TR": {
   "id": "M2-E2-TR",
   "type": "ordre",
   "etape": "Épisode 2",
   "personnage": "Malia",
   "texte": "Malia : « Tu peux envoyer le calendrier des visites aux trois communes ? »\nDeux versions du calendrier existent dans le dossier partagé. Remettez les actions de Noa dans l'ordre.\n",
   "competences": [
    "C04",
    "C17"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Vérifier quelle version du calendrier est validée."
    },
    {
     "id": "B",
     "libelle": "Préparer le message aux communes."
    },
    {
     "id": "C",
     "libelle": "Faire valider l'envoi au nom d'ÉLAN."
    },
    {
     "id": "D",
     "libelle": "Envoyer le message."
    },
    {
     "id": "E",
     "libelle": "Classer la version envoyée dans le dossier."
    }
   ],
   "attendu": [
    "A",
    "B",
    "C",
    "D",
    "E"
   ],
   "feedback_ok": "Vous avez vérifié avant d'agir et fait valider ce qui engage ÉLAN. Ce sont les mêmes réflexes que pour la fiche d'Ariane.",
   "feedback_ko": "Commencez par vérifier la version validée : envoyer un calendrier dépassé ferait déplacer des gens pour rien. Faites valider avant d'écrire au nom d'ÉLAN, puis gardez une trace.",
   "suite": "M2-E2-FIN"
  },
  "M2-E2-FIN": {
   "id": "M2-E2-FIN",
   "type": "fin-section",
   "etape": "Épisode 2",
   "titre": "Mardi, c'est fait",
   "texte": "Avec une consigne de deux lignes, Noa a livré une fiche utile, à temps, sans court-circuiter personne.",
   "acquis": [
    {
     "titre": "Il a cherché à quoi servait la fiche",
     "texte": "Avant d'écrire, il a relu la consigne."
    },
    {
     "titre": "Il a dit ce que valait chaque chiffre",
     "texte": "312, provisoire, vingt demandes d'écart au plus."
    },
    {
     "titre": "Il a cité Joël sans inventer de chiffre",
     "texte": "Et il a montré la limite de l'indicateur."
    },
    {
     "titre": "Il est passé par Samuel",
     "texte": "Un message court avant 14 h, une seule question."
    }
   ],
   "dossier": "Ariane a vu le président de Passerelles avec des chiffres fiables. Le président a retenu la différence entre fréquentation et démarches abouties.",
   "suite": "MENU"
  },
  "M2-E3-S1": {
   "id": "M2-E3-S1",
   "type": "narration",
   "illustration": "ILL-M05",
   "etape": "Épisode 3",
   "titre": "Mercredi, 8 h 30",
   "texte": "Noa veut avancer sa note de cadrage Passerelles, attendue jeudi. Trois blocages dans la matinée : chacun peut la retarder.",
   "points": [
    {
     "titre": "Accès refusé",
     "texte": "L'espace documentaire du dossier Passerelles refuse de s'ouvrir. Noa essaie depuis 40 minutes."
    },
    {
     "titre": "Une question de congés",
     "texte": "Il voudrait poser une semaine fin décembre pour rentrer dans sa famille. Combien de jours a-t-il ? À qui demander ?"
    },
    {
     "titre": "Une définition introuvable",
     "texte": "« Démarche aboutie » : la note méthodologique de Léna ne la définit pas."
    }
   ],
   "suite": "M2-E3-HS"
  },
  "M2-E3-HS": {
   "id": "M2-E3-HS",
   "type": "hotspot",
   "etape": "Épisode 3",
   "mode": "decouverte",
   "illustration": "ILL-14",
   "titre": "Où chercher avant de demander ?",
   "texte": "Sur le bureau de Noa, quatre sources d'information. Ouvrez celles que vous voulez.",
   "consigne": "Cliquez sur un objet ou sur un titre de la liste.",
   "competences": [
    "C17",
    "C18"
   ],
   "zones": [
    {
     "id": "fiche",
     "x": 32,
     "y": 30,
     "titre": "Ma fiche de poste et la consigne reçue",
     "texte": "Elles disent ce que j'ai à faire, et ce que je peux faire seul. Je commence toujours par là.",
     "repere": "Si la réponse n'y est pas, je ne l'invente pas."
    },
    {
     "id": "intranet",
     "x": 75,
     "y": 26,
     "titre": "L'intranet de mon employeur",
     "texte": "Les procédures, formulaires et notes internes : congés, accès informatiques, circuits de validation.",
     "repere": "Je vérifie la date du document : une procédure peut avoir changé."
    },
    {
     "id": "officiel",
     "x": 77,
     "y": 76,
     "titre": "Les sources officielles : DRHFPNC, Leginova",
     "texte": "Le site de la DRHFPNC explique les règles RH de la fonction publique calédonienne. Leginova (anciennement Juridoc) donne les textes en vigueur.",
     "repere": "Je prends la version consolidée et je note la référence du texte."
    },
    {
     "id": "producteur",
     "x": 22,
     "y": 76,
     "titre": "Le service qui produit l'information",
     "texte": "Pour un chiffre, une définition, une donnée : je demande à celui qui la produit. Mardi, c'était Léna.",
     "repere": "Je dis ce que j'ai déjà cherché, et je pose une question précise."
    }
   ],
   "bandeau_final": "Trois vérifications, quelle que soit la source : qui l'a produite ? de quand date-t-elle ? est-ce définitif ?",
   "suite": "M2-E3-D1"
  },
  "M2-E3-D1": {
   "id": "M2-E3-D1",
   "type": "classement",
   "etape": "Épisode 3",
   "texte": "Pour chaque blocage, vers qui Noa se tourne-t-il d'abord ?",
   "brief": "Le bon interlocuteur n'est pas le plus disponible, mais celui qui détient l'information ou peut régler le problème.",
   "competences": [
    "C18",
    "C03"
   ],
   "categories": [
    {
     "id": "support",
     "libelle": "Le support numérique"
    },
    {
     "id": "rh",
     "libelle": "Ana, au pôle ressources"
    },
    {
     "id": "producteur",
     "libelle": "Léna, qui produit la donnée"
    },
    {
     "id": "samuel",
     "libelle": "Samuel"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "L'accès refusé à l'espace documentaire.",
     "attendu": "support",
     "feedback": "Un problème d'accès se règle par le support : ni Samuel ni Léna ne peuvent ouvrir un droit informatique."
    },
    {
     "id": "B",
     "libelle": "Le nombre de jours de congé.",
     "attendu": "rh",
     "feedback": "Ana connaît les règles et la procédure. Samuel, lui, donnera son accord sur les dates, selon les besoins du service."
    },
    {
     "id": "C",
     "libelle": "La définition de « démarche aboutie ».",
     "attendu": "producteur",
     "feedback": "Une définition se demande à celui qui produit l'indicateur. Samuel ne la connaît pas mieux que Noa."
    }
   ],
   "synthese": "Une bonne demande commence par le bon interlocuteur.",
   "suite": "M2-E3-D2"
  },
  "M2-E3-D2": {
   "id": "M2-E3-D2",
   "type": "choix",
   "etape": "Épisode 3",
   "texte": "Cela fait 40 minutes que Noa essaie d'ouvrir l'espace documentaire. Que fait-il ?",
   "brief": "Chercher d'abord est un bon réflexe. Mais une matinée perdue sur un accès, c'est une matinée en moins pour la note de jeudi.",
   "competences": [
    "C18"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il continue : il finira bien par trouver.",
     "verdict": "risque",
     "feedback": "Un droit d'accès ne se trouve pas en cherchant. Insister seul fait perdre une matinée sans rien régler."
    },
    {
     "id": "B",
     "libelle": "Il s'arrête et écrit au support, en disant ce qu'il a déjà essayé.",
     "verdict": "adapte",
     "feedback": "Savoir s'arrêter fait partie de l'autonomie. En disant ce qu'il a déjà essayé, Noa évite au support de tout recommencer."
    },
    {
     "id": "C",
     "libelle": "Il demande à Malia ses identifiants.",
     "verdict": "inadapte",
     "feedback": "Les accès sont personnels. Utiliser ceux d'une collègue est interdit, même pour dépanner."
    },
    {
     "id": "D",
     "libelle": "Il travaille sur autre chose et réessaiera demain.",
     "verdict": "partiel",
     "feedback": "Il ne perd plus de temps, mais le problème reste entier, et la note de jeudi en dépend."
    }
   ],
   "suite": "M2-E3-D3"
  },
  "M2-E3-D3": {
   "id": "M2-E3-D3",
   "type": "assemblage",
   "etape": "Épisode 3",
   "personnage": "Léna",
   "texte": "Composez le message de Noa à Léna : choisissez une phrase pour chaque partie.",
   "brief": "Léna ne dépend pas d'ÉLAN. Elle répondra si la question est claire et rapide à traiter. Noa lui dit « vous ».",
   "competences": [
    "C18"
   ],
   "destinataire": "Léna",
   "objet": "Définition de « démarche aboutie »",
   "salutation": "Bonjour Léna,",
   "signature": "Merci beaucoup,\nNoa, ÉLAN\n",
   "synthese": "Une demande utile : le contexte, ce qui est déjà fait, une question précise, un délai.",
   "parties": [
    {
     "id": "contexte",
     "libelle": "Le contexte",
     "options": [
      {
       "id": "A",
       "texte": "Je prépare pour ÉLAN la note de cadrage sur la permanence de Passerelles, attendue jeudi.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "J'ai un problème avec vos chiffres.",
       "verdict": "inadapte"
      },
      {
       "id": "C",
       "texte": "Je suis un peu perdu dans mon dossier cette semaine.",
       "verdict": "risque"
      }
     ],
     "feedback": "Le contexte dit à quoi servira la réponse, en une phrase. « Un problème avec vos chiffres » met Léna sur la défensive."
    },
    {
     "id": "fait",
     "libelle": "Ce que j'ai déjà cherché",
     "options": [
      {
       "id": "A",
       "texte": "Je n'ai rien trouvé.",
       "verdict": "risque"
      },
      {
       "id": "B",
       "texte": "J'ai relu votre note méthodologique : elle définit les « demandes reçues », pas les « démarches abouties ».",
       "verdict": "adapte"
      },
      {
       "id": "C",
       "texte": "J'ai cherché partout pendant des heures.",
       "verdict": "inadapte"
      }
     ],
     "feedback": "Dire ce qu'on a déjà fait évite à Léna de refaire la recherche, et montre le point précis du blocage."
    },
    {
     "id": "question",
     "libelle": "Ma question",
     "options": [
      {
       "id": "A",
       "texte": "Pouvez-vous m'envoyer tout votre fichier ?",
       "verdict": "risque"
      },
      {
       "id": "B",
       "texte": "Comment définissez-vous une « démarche aboutie » dans vos permanences ?",
       "verdict": "adapte"
      },
      {
       "id": "C",
       "texte": "Pouvez-vous m'expliquer vos indicateurs ?",
       "verdict": "partiel"
      }
     ],
     "feedback": "Une question précise obtient une réponse rapide. Une demande vague oblige Léna à deviner ce que Noa cherche."
    },
    {
     "id": "delai",
     "libelle": "Le délai",
     "options": [
      {
       "id": "A",
       "texte": "Une réponse d'ici demain midi me permettrait de tenir l'échéance.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "C'est très urgent !",
       "verdict": "risque"
      },
      {
       "id": "C",
       "texte": "Quand vous aurez le temps.",
       "verdict": "partiel"
      }
     ],
     "feedback": "Un délai réaliste et expliqué aide Léna à s'organiser. « Très urgent » sans raison ne la renseigne pas."
    }
   ],
   "suite": "M2-E3-C3"
  },
  "M2-E3-C3": {
   "id": "M2-E3-C3",
   "type": "narration",
   "etape": "Épisode 3",
   "titre": "Dans l'après-midi",
   "texte": "Les trois blocages se lèvent.",
   "points": [
    {
     "titre": "Le support, 20 minutes plus tard",
     "texte": "« Le dossier avait été déplacé. Vous n'étiez pas le seul bloqué : merci du signalement. »"
    },
    {
     "titre": "Ana, par courriel",
     "texte": "« Bonne question à poser maintenant. Ta demande passe par Samuel, qui vérifie les besoins du service, puis par nous. Je t'envoie le formulaire et la règle qui s'applique à ta situation. »"
    },
    {
     "titre": "Léna, par courriel",
     "texte": "« Voici notre définition. Merci pour la question précise, c'est rare. »"
    }
   ],
   "suite": "M2-E3-D4"
  },
  "M2-E3-D4": {
   "id": "M2-E3-D4",
   "type": "classement",
   "etape": "Épisode 3",
   "texte": "Cette semaine, Noa a fait quatre demandes. De quel type est chacune ?",
   "brief": "Nommer le type de demande aide à choisir l'interlocuteur et le ton.",
   "competences": [
    "C18"
   ],
   "categories": [
    {
     "id": "info",
     "libelle": "Information"
    },
    {
     "id": "aide",
     "libelle": "Aide"
    },
    {
     "id": "validation",
     "libelle": "Validation"
    },
    {
     "id": "alerte",
     "libelle": "Alerte"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "Demander à Léna l'ampleur de l'écart sur le chiffre provisoire.",
     "attendu": "info",
     "feedback": "Noa cherche un fait, auprès de celle qui le détient."
    },
    {
     "id": "B",
     "libelle": "Proposer à Malia de relire sa note.",
     "attendu": "aide",
     "feedback": "Noa veut améliorer son travail grâce à une collègue expérimentée."
    },
    {
     "id": "C",
     "libelle": "« J'envoie à Ariane, ou tu préfères relire ? »",
     "attendu": "validation",
     "feedback": "Quelqu'un d'autre doit décider : c'est Samuel."
    },
    {
     "id": "D",
     "libelle": "Prévenir Samuel que la note aura du retard.",
     "attendu": "alerte",
     "feedback": "Un délai est menacé : on prévient sans attendre."
    }
   ],
   "synthese": "Information, aide, validation, alerte : quatre demandes, quatre interlocuteurs possibles.",
   "suite": "M2-E3-OUT"
  },
  "M2-E3-OUT": {
   "id": "M2-E3-OUT",
   "type": "outil",
   "etape": "Épisode 3",
   "fiche": "FICHE-E3",
   "titre": "Bien demander un appui",
   "texte": "**Quand l'utiliser ?** Avant d'écrire ou d'appeler pour obtenir une information, de l'aide ou une validation.\n",
   "competences": [
    "C18"
   ],
   "suite": "M2-E3-TR"
  },
  "M2-E3-TR": {
   "id": "M2-E3-TR",
   "type": "classement",
   "etape": "Épisode 3",
   "texte": "Quatre besoins nouveaux. Vers qui Noa se tourne-t-il en premier ?",
   "brief": "Mêmes réflexes que ce matin : chercher d'abord, puis le bon interlocuteur.",
   "competences": [
    "C18"
   ],
   "categories": [
    {
     "id": "doc",
     "libelle": "Je cherche d'abord dans les documents"
    },
    {
     "id": "collegue",
     "libelle": "Un collègue ou le support"
    },
    {
     "id": "responsable",
     "libelle": "Mon responsable"
    },
    {
     "id": "externe",
     "libelle": "Un partenaire extérieur"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "Savoir comment se fait une demande de remboursement de frais de déplacement.",
     "attendu": "doc",
     "feedback": "Une procédure interne se trouve d'abord sur l'intranet ; ensuite seulement, je demande au pôle ressources."
    },
    {
     "id": "B",
     "libelle": "L'imprimante du pôle ne répond plus.",
     "attendu": "collegue",
     "feedback": "Un problème matériel se signale au support, pas au responsable."
    },
    {
     "id": "C",
     "libelle": "Deux demandes urgentes tombent en même temps.",
     "attendu": "responsable",
     "feedback": "Arbitrer entre deux demandes concurrentes revient au responsable : c'est dans la fiche de poste."
    },
    {
     "id": "D",
     "libelle": "Connaître les horaires d'ouverture de la salle communale.",
     "attendu": "externe",
     "feedback": "C'est la commune qui les fixe et les connaît : Élise, à l'accueil."
    }
   ],
   "synthese": "Chercher d'abord, puis s'adresser à celui qui sait ou qui décide.",
   "suite": "M2-E3-FIN"
  },
  "M2-E3-FIN": {
   "id": "M2-E3-FIN",
   "type": "fin-section",
   "etape": "Épisode 3",
   "titre": "Mercredi, c'est fait",
   "texte": "Trois blocages, trois solutions, et une matinée sauvée.",
   "acquis": [
    {
     "titre": "Il a su s'arrêter",
     "texte": "Après 40 minutes, il a écrit au support, avec ce qu'il avait déjà essayé."
    },
    {
     "titre": "Il a choisi le bon interlocuteur",
     "texte": "Le support, Ana, Léna : chacun pour ce qu'il sait ou ce qu'il règle."
    },
    {
     "titre": "Il a posé une question précise",
     "texte": "Léna a répondu dans l'après-midi."
    }
   ],
   "dossier": "Le dossier partagé est de nouveau ouvert, et la note s'appuie sur une définition claire de la démarche aboutie.",
   "suite": "MENU"
  },
  "M2-DI-1": {
   "id": "M2-DI-1",
   "type": "narration",
   "illustration": "ILL-M06",
   "etape": "Défi",
   "titre": "Jeudi, 8 h 55",
   "texte": "Noa travaille de chez lui. La matinée était bien partie.",
   "points": [
    {
     "titre": "8 h 30, relecture avec Malia en visio",
     "texte": "Elle s'est bien passée : il reste vingt minutes de corrections."
    },
    {
     "titre": "11 h, la note pour Samuel",
     "texte": "C'est l'échéance fixée lundi."
    },
    {
     "titre": "Samuel est chez Passerelles",
     "texte": "Il visite les lieux de la permanence. Joignable par SMS seulement."
    }
   ],
   "suite": "M2-DI-2"
  },
  "M2-DI-2": {
   "id": "M2-DI-2",
   "type": "message",
   "illustration": "ILL-M07",
   "etape": "Défi",
   "personnage": "Ariane",
   "canal": "appel",
   "titre": "9 h",
   "texte": "« Bonjour Noa. Le président de Passerelles me relance. Envoyez-moi **avant 11 h** un point écrit sur ce qu'ÉLAN peut apporter à son projet. Et prévenez la commune que la réunion de lancement est fixée au 14. »\n",
   "suite": "M2-DI-ORD"
  },
  "M2-DI-ORD": {
   "id": "M2-DI-ORD",
   "type": "ordre",
   "etape": "Défi",
   "texte": "Il est 9 h 02. Remettez les actions de Noa dans l'ordre.",
   "brief": "Deux demandes pour 11 h : la note de Samuel et le point d'Ariane. Noa ne peut pas tout faire en même temps.",
   "competences": [
    "C05",
    "C04"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Prévenir Samuel par SMS : la demande d'Ariane décale la note."
    },
    {
     "id": "B",
     "libelle": "Rédiger le point pour Ariane, Samuel en copie."
    },
    {
     "id": "C",
     "libelle": "Demander à la commune ses disponibilités pour le 14."
    },
    {
     "id": "D",
     "libelle": "Finir les corrections de la note de cadrage."
    }
   ],
   "attendu": [
    "A",
    "B",
    "C",
    "D"
   ],
   "feedback_ok": "Samuel est prévenu avant tout le reste : il peut s'organiser. Le point d'Ariane passe en premier parce qu'elle l'attend avant 11 h ; la note suivra.",
   "feedback_ko": "Prévenez d'abord Samuel : la demande d'Ariane modifie le travail qu'il vous a confié, et il doit le savoir tout de suite. Ensuite, le point d'Ariane, attendu avant 11 h.",
   "suite": "M2-DI-SMS"
  },
  "M2-DI-SMS": {
   "id": "M2-DI-SMS",
   "type": "choix",
   "etape": "Défi",
   "personnage": "Samuel",
   "texte": "Quel SMS Noa envoie-t-il à Samuel ?",
   "brief": "Samuel est en visite chez Passerelles. Il lira son téléphone entre deux échanges.",
   "competences": [
    "C05",
    "C04"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "« Ariane me demande un point écrit avant 11 h sur Passerelles. Je le fais d'abord ; la note de cadrage arrivera à 14 h au lieu de 11 h. Ça te va ? »",
     "verdict": "adapte",
     "feedback": "Samuel sait tout en une lecture : ce qui arrive, ce que Noa fait, le nouveau délai. Il peut prévenir Ariane que la note arrivera à 14 h : personne n'est surpris. C'est cela, la fiabilité."
    },
    {
     "id": "B",
     "libelle": "« Petit souci ce matin, je t'expliquerai. »",
     "verdict": "risque",
     "feedback": "Samuel s'inquiète sans savoir de quoi, et ne peut rien décider. Un message d'alerte doit dire ce qui se passe."
    },
    {
     "id": "C",
     "libelle": "Rien pour l'instant ; il expliquera à 11 h.",
     "verdict": "inadapte",
     "feedback": "Samuel découvrira le retard à l'échéance, trop tard pour s'organiser. La fiche de poste le dit : une demande directe d'Ariane qui modifie le travail confié est clarifiée avec Samuel."
    }
   ],
   "suite": "M2-DI-MAIL"
  },
  "M2-DI-MAIL": {
   "id": "M2-DI-MAIL",
   "type": "messagerie",
   "etape": "Défi",
   "texte": "Rédigez le point de Noa pour Ariane : choisissez qui mettre en copie, puis une phrase pour chaque paragraphe.",
   "competences": [
    "C03",
    "C04"
   ],
   "boite": [
    {
     "de": "Ariane",
     "role": "Directrice d'ÉLAN",
     "heure": "9 h 04",
     "objet": "Point Passerelles avant 11 h",
     "corps": "Noa,\nComme convenu au téléphone : un point écrit avant 11 h sur ce qu'ÉLAN peut apporter au projet de Passerelles.\nAriane\n"
    },
    {
     "de": "Province — Léna",
     "heure": "Mardi, 11 h 20",
     "objet": "Re : Fréquentation de nos permanences",
     "corps": "L'écart sera de vingt demandes au plus.\n"
    }
   ],
   "a": "Ariane",
   "objet": "Re : Point Passerelles avant 11 h",
   "salutation": "Bonjour Madame,",
   "signature": "Bien cordialement,\nNoa\n",
   "heure_envoi": "10 h 15",
   "consequence_de": "Ariane",
   "heure_reponse": "10 h 40",
   "copie": [
    {
     "id": "A",
     "libelle": "Samuel",
     "verdict": "adapte",
     "feedback": "Samuel a commandé la note et suit le dossier : il doit savoir ce que Noa envoie à la direction en son absence."
    },
    {
     "id": "B",
     "libelle": "Joël, de Passerelles",
     "verdict": "inadapte",
     "feedback": "Ce point est destiné à la directrice. L'envoyer à l'association ferait connaître une position d'ÉLAN avant qu'Ariane l'ait arrêtée."
    },
    {
     "id": "C",
     "libelle": "Personne",
     "verdict": "risque",
     "feedback": "Samuel découvrirait en rentrant qu'un point est parti à la direction sans lui. Le tenir informé est un réflexe."
    }
   ],
   "paragraphes": [
    {
     "id": "elan",
     "libelle": "Ce qu'ÉLAN peut faire",
     "options": [
      {
       "id": "A",
       "texte": "ÉLAN peut réaliser le diagnostic des six lieux et coordonner Passerelles, la commune et la province.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "ÉLAN peut prendre en charge l'organisation de la permanence.",
       "verdict": "inadapte"
      },
      {
       "id": "C",
       "texte": "ÉLAN peut aider de différentes façons.",
       "verdict": "partiel"
      }
     ],
     "feedback": "Ariane doit pouvoir dire précisément au président ce qu'ÉLAN apporte. « Prendre en charge l'organisation » promet ce qui revient à Passerelles."
    },
    {
     "id": "passerelles",
     "libelle": "Ce qui revient à Passerelles",
     "options": [
      {
       "id": "A",
       "texte": "Passerelles décide de créer la permanence, recrute les bénévoles et organise le transport, minibus compris.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "Pour le minibus, nous verrons ce que nous pouvons faire.",
       "verdict": "risque"
      },
      {
       "id": "C",
       "texte": "(Pas de paragraphe sur Passerelles.)",
       "verdict": "partiel"
      }
     ],
     "feedback": "Dire ce qui ne revient pas à ÉLAN évite les malentendus. Une phrase vague sur le minibus serait comprise comme une promesse."
    },
    {
     "id": "chiffre",
     "libelle": "Les chiffres",
     "options": [
      {
       "id": "A",
       "texte": "Les permanences de la province ont reçu 312 demandes au 30 septembre : chiffre provisoire, consolidé aujourd'hui, à vingt demandes près.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "Les permanences ont reçu 312 demandes.",
       "verdict": "risque"
      },
      {
       "id": "C",
       "texte": "Les chiffres ne sont pas encore fiables.",
       "verdict": "inadapte"
      }
     ],
     "feedback": "Le chiffre provisoire est donné avec son statut et sa marge : Ariane peut l'utiliser sans risque."
    },
    {
     "id": "decider",
     "libelle": "Ce qui reste à décider",
     "options": [
      {
       "id": "A",
       "texte": "Reste à décider : l'appui d'ÉLAN dans son programme, et la date de lancement, que je vérifie avec la commune avant de l'annoncer.",
       "verdict": "adapte"
      },
      {
       "id": "B",
       "texte": "J'ai annoncé à la commune que la réunion est fixée au 14.",
       "verdict": "risque"
      },
      {
       "id": "C",
       "texte": "Tout est prêt.",
       "verdict": "inadapte"
      }
     ],
     "feedback": "La consigne d'Ariane est légitime, mais ÉLAN ne fixe pas l'agenda d'une commune. Noa vérifie la date avant de l'annoncer, et il le dit."
    }
   ],
   "consequences": {
    "adapte": "« Merci Noa, c'est exactement ce qu'il me fallait : je sais ce que nous apportons et ce que nous ne faisons pas. Proposez-moi deux dates quand la commune aura répondu. »\n",
    "partiel": "« Merci Noa. Avant de répondre au président, j'ai besoin de savoir précisément ce qu'ÉLAN fait et ce qui revient à Passerelles. Pouvez-vous me le préciser ? »\n"
   },
   "suite": "M2-DI-D2"
  },
  "M2-DI-D2": {
   "id": "M2-DI-D2",
   "type": "choix",
   "etape": "Défi",
   "personnage": "Élise",
   "texte": "Comment Noa s'y prend-il avec la commune ?",
   "brief": "Ariane a demandé de « prévenir la commune » que la réunion est fixée au 14. La commune prête la salle ; elle n'a pas encore été consultée.",
   "competences": [
    "C04",
    "C18"
   ],
   "options": [
    {
     "id": "A",
     "libelle": "Il écrit à Élise : « La réunion de lancement aura lieu le 14 dans votre salle. »",
     "verdict": "risque",
     "feedback": "ÉLAN ne donne pas d'instruction à une commune. Si la salle est prise le 14, Ariane devra se dédire devant le président."
    },
    {
     "id": "B",
     "libelle": "Il demande à Élise si la salle est disponible le 14, et propose une autre date au cas où. Il tient Ariane informée.",
     "verdict": "adapte",
     "feedback": "Noa exécute la consigne d'Ariane en vérifiant ce qui manquait. La commune garde la main sur sa salle, et Ariane sait où en est la date."
    },
    {
     "id": "C",
     "libelle": "Il ne fait rien : ce n'est pas à ÉLAN de fixer la date.",
     "verdict": "inadapte",
     "feedback": "La demande d'Ariane est légitime. Ne rien faire laisse la réunion en suspens."
    }
   ],
   "suite": "M2-DI-SYN"
  },
  "M2-DI-SYN": {
   "id": "M2-DI-SYN",
   "type": "fin-section",
   "etape": "Défi",
   "titre": "Défi terminé",
   "texte": "Samuel était loin, Ariane pressée, la matinée bouleversée. Noa a tenu ses engagements sans dépasser son rôle.",
   "acquis": [
    {
     "titre": "Il a prévenu Samuel tout de suite",
     "texte": "Un SMS à 9 h 05 : la note arrivera à 14 h. Samuel a pu prévenir Ariane."
    },
    {
     "titre": "Il a dit ce qu'ÉLAN fait, et ce qu'il ne fait pas",
     "texte": "Diagnostic et coordination pour ÉLAN ; décision, bénévoles et minibus pour Passerelles."
    },
    {
     "titre": "Il a donné le chiffre avec son statut",
     "texte": "312 demandes, provisoire, à vingt près."
    },
    {
     "titre": "Il n'a pas fixé la date à la place de la commune",
     "texte": "Il a demandé si la salle était libre le 14."
    }
   ],
   "dossier": "Ariane sait ce qu'ÉLAN peut apporter à Passerelles. La note de cadrage est chez Samuel à 14 h, comme Noa l'avait annoncé.",
   "suite": "MENU"
  },
  "M2-EVA-INTRO": {
   "id": "M2-EVA-INTRO",
   "type": "narration",
   "etape": "Évaluation",
   "titre": "Le bilan de la semaine",
   "texte": "Trois situations nouvelles. Pas de correction entre les questions : le bilan s'affiche à la fin.\nPour réussir, les trois situations doivent être réussies. Si ce n'est pas le cas, une seconde tentative vous est proposée, sur d'autres situations. Vous pourrez aussi repasser l'évaluation plus tard, quand vous le souhaitez.\n",
   "suite": "M2-EVA-E1A"
  },
  "M2-EVA-E1A": {
   "id": "M2-EVA-E1A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Joël",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C03",
    "C04"
   ],
   "texte": "Samuel : « Réponds à Passerelles sur le planning des visites. »\nDans sa réponse, Joël demande aussi à ÉLAN de signer une attestation de partenariat pour une demande de subvention. Que fait Noa ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il répond sur le planning et signe l'attestation pour ne pas retarder Passerelles.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il répond sur le planning, ne signe rien, et transmet la demande d'attestation à Samuel avec le contexte et la décision attendue.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il répond que ce n'est pas de son ressort, sans autre suite.",
     "verdict": "risque"
    },
    {
     "id": "D",
     "libelle": "Il attend que Samuel traite lui-même tout le courriel.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M2-EVA-E2A"
  },
  "M2-EVA-E2A": {
   "id": "M2-EVA-E2A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Noa",
   "preuve": "E2",
   "variante": "A",
   "mode": "ordre",
   "competences": [
    "C18"
   ],
   "texte": "Pour finir le diagnostic, il manque à Noa la définition d'un indicateur produit par la province. Remettez ses actions dans l'ordre.\n",
   "options": [
    {
     "id": "A",
     "libelle": "Consulter la note méthodologique du dossier partagé."
    },
    {
     "id": "B",
     "libelle": "Si le doute persiste, interroger le service producteur de la donnée."
    },
    {
     "id": "C",
     "libelle": "Solliciter Samuel seulement s'il faut arbitrer entre deux définitions."
    },
    {
     "id": "D",
     "libelle": "Finaliser le diagnostic en citant la définition retenue."
    }
   ],
   "attendu": [
    "A",
    "B",
    "C",
    "D"
   ],
   "suite": "M2-EVA-E3A"
  },
  "M2-EVA-E3A": {
   "id": "M2-EVA-E3A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Ariane",
   "preuve": "E3",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C05"
   ],
   "texte": "Mercredi, 8 h. Noa a une note à rendre à Samuel à 11 h, un compte rendu à relire pour Malia vendredi, un tableau pour Léna sans échéance.\nÀ 9 h, Ariane lui demande un document avant 10 h 30. Que fait Noa ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il traite la demande d'Ariane, prévient Samuel tout de suite et lui propose une nouvelle heure pour la note.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Il traite la demande d'Ariane et prévient Samuel à 11 h que la note aura du retard.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Il refuse la demande d'Ariane : il a déjà une échéance à 11 h.",
     "verdict": "inadapte"
    },
    {
     "id": "D",
     "libelle": "Il fait tout en même temps pour ne rien retarder.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M2-EVA-RES"
  },
  "M2-EVA-RES": {
   "id": "M2-EVA-RES",
   "type": "eval-resultat",
   "etape": "Évaluation",
   "regle": "E1, E2 et E3 réussies ; aucune compensation",
   "preuves": {
    "E1": "Rester dans son périmètre",
    "E2": "Chercher, puis demander un appui",
    "E3": "Tenir ses engagements face à un imprévu"
   },
   "texte_reussi": "Évaluation réussie. Vous savez ce qui relève de votre poste, vous cherchez avant de demander, et vous prévenez tôt quand une échéance est menacée.\n",
   "texte_echec": "Certains repères sont encore à consolider. Une nouvelle tentative vous est proposée, sur d'autres situations.\n",
   "texte_echec_final": "Certains repères restent à consolider. Les fiches indiquées ci-dessus sont dans votre carnet : relisez-les et revoyez les épisodes concernés. Quand vous vous sentez prêt, repassez l'évaluation depuis le sommaire : les situations ne seront pas les mêmes.\n",
   "consolider": {
    "E1": {
     "texte": "Je ne signe et ne promets rien qui engage ÉLAN : je transmets à mon responsable, avec le contexte et la décision attendue.",
     "fiche": "FICHE-E2"
    },
    "E2": {
     "texte": "Je cherche d'abord dans les documents, puis je m'adresse à celui qui produit l'information ; mon responsable seulement s'il faut arbitrer.",
     "fiche": "FICHE-E3"
    },
    "E3": {
     "texte": "Quand une urgence décale une échéance, je préviens tout de suite et je propose un nouveau délai.",
     "fiche": "FICHE-S"
    }
   },
   "rappel": [
    {
     "titre": "Ce qui relève de mon autonomie",
     "texte": "Organiser, vérifier, proposer, signaler."
    },
    {
     "titre": "Ce que je fais valider",
     "texte": "Ce qui engage ÉLAN : signature, dépense, promesse, date imposée à un partenaire."
    },
    {
     "titre": "Avant de solliciter",
     "texte": "Je cherche, puis je m'adresse à celui qui sait."
    },
    {
     "titre": "Quand une échéance est menacée",
     "texte": "Je préviens tôt, et je propose une solution."
    }
   ],
   "retentative": "M2-EVA-E1B",
   "suite": "M2-EVA-FIN"
  },
  "M2-EVA-E1B": {
   "id": "M2-EVA-E1B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Samuel",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C03",
    "C04"
   ],
   "texte": "Samuel : « Cale la réunion de lancement avec les partenaires. »\nNoa ne connaît pas les disponibilités d'Ariane, qui doit l'ouvrir. Que fait Noa ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il fixe seul la date la plus pratique et l'annonce aux partenaires.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il recueille les disponibilités des partenaires, propose deux dates à Samuel, et n'annonce rien avant validation.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il demande à Samuel de s'en occuper.",
     "verdict": "inadapte"
    },
    {
     "id": "D",
     "libelle": "Il propose directement des dates à Ariane, sans en parler à Samuel.",
     "verdict": "risque"
    }
   ],
   "suite": "M2-EVA-E2B"
  },
  "M2-EVA-E2B": {
   "id": "M2-EVA-E2B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Noa",
   "preuve": "E2",
   "variante": "B",
   "mode": "ordre",
   "competences": [
    "C18",
    "C17"
   ],
   "texte": "Deux tableaux du dossier donnent deux chiffres différents de fréquentation. Remettez les actions de Noa dans l'ordre.\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vérifier la date et la source de chaque tableau."
    },
    {
     "id": "B",
     "libelle": "Demander à Léna lequel fait foi, en citant les deux versions."
    },
    {
     "id": "C",
     "libelle": "Informer Samuel seulement si l'écart persiste."
    },
    {
     "id": "D",
     "libelle": "Utiliser le chiffre retenu en citant sa source."
    }
   ],
   "attendu": [
    "A",
    "B",
    "C",
    "D"
   ],
   "suite": "M2-EVA-E3B"
  },
  "M2-EVA-E3B": {
   "id": "M2-EVA-E3B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E3",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C05"
   ],
   "texte": "Jeudi, en télétravail, le réseau est coupé depuis une heure. Noa a promis un document à Malia pour midi. Que fait-il ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il attend le retour du réseau et envoie le document dès que possible.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Il prévient Malia tout de suite par téléphone, avance hors ligne, propose une nouvelle heure et signale l'incident au support.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il prévient Malia à midi que le document aura du retard.",
     "verdict": "inadapte"
    },
    {
     "id": "D",
     "libelle": "Il se rend au bureau sans prévenir personne.",
     "verdict": "partiel"
    }
   ],
   "suite": "M2-EVA-RES"
  },
  "M2-EVA-FIN": {
   "id": "M2-EVA-FIN",
   "type": "fin-section",
   "etape": "Évaluation",
   "titre": "Évaluation terminée",
   "texte": "Votre résultat est affiché sur le sommaire du module. Dernière étape : le bilan de la semaine de Noa, et le vôtre.\n",
   "suite": "MENU"
  },
  "M2-SOR-1": {
   "id": "M2-SOR-1",
   "type": "narration",
   "illustration": "ILL-M08",
   "etape": "Sortie",
   "titre": "Ce que Noa a appris cette semaine",
   "texte": "Vendredi, 9 h. Ariane a lu la note de cadrage : ÉLAN fera le diagnostic des six lieux et coordonnera Passerelles, la commune et la province. 16 h. Noa range ses documents. Voici ce qu'il sait faire maintenant.",
   "points": [
    {
     "titre": "Je sais ce qui relève de mon poste",
     "texte": "Ma fiche de poste me dit ce que je fais seul, ce que je prépare, et ce qui revient à d'autres.",
     "competence": "C03 — Statut, missions, responsabilités"
    },
    {
     "titre": "J'identifie mes marges de manœuvre",
     "texte": "Je rends compte, et je fais valider ce qui engage ÉLAN.",
     "competence": "C04 — Cadre hiérarchique"
    },
    {
     "titre": "Je préviens tôt",
     "texte": "Je priorise mes tâches et je préviens dès qu'une échéance est menacée.",
     "competence": "C05 — Organiser son activité"
    },
    {
     "titre": "Je demande de l'aide utilement",
     "texte": "Je cherche d'abord, je sais m'arrêter, je pose une question claire.",
     "competence": "C18 — Autonomie et appui"
    }
   ],
   "competences": [
    "C03",
    "C04",
    "C05",
    "C18"
   ],
   "suite": "M2-SOR-REV"
  },
  "M2-SOR-REV": {
   "id": "M2-SOR-REV",
   "type": "cartes",
   "etape": "Sortie",
   "titre": "Pourquoi revenir sur sa semaine ?",
   "texte": "Malia passe au bureau : « Tu sais ce que je fais chaque vendredi ? Cinq minutes, pas plus. Trois questions. »",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C21"
   ],
   "cartes": [
    {
     "icone": "i-check-cercle",
     "recto": "Qu'est-ce qui a marché ?",
     "verso": "Je le refais exprès. Noa : « Prévenir Samuel tout de suite, jeudi. »"
    },
    {
     "icone": "i-recommencer",
     "recto": "Qu'est-ce que je ferais autrement ?",
     "verso": "Une seule chose, concrète. Noa : « Mercredi, j'aurais dû m'arrêter plus tôt sur l'accès refusé. »"
    },
    {
     "icone": "i-dialogue",
     "recto": "À qui je demande un retour ?",
     "verso": "Un avis extérieur voit ce que je ne vois pas. Noa : « Je demande à Samuel ce qu'il a pensé de ma note. »"
    }
   ],
   "encadre": "« Ce n'est pas un examen. C'est ce qui fait qu'on progresse plus vite. » — Malia",
   "suite": "M2-SOR-AUTO"
  },
  "M2-SOR-AUTO": {
   "id": "M2-SOR-AUTO",
   "type": "auto-positionnement",
   "etape": "Sortie",
   "groupe": "M2",
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
     "code": "C03",
     "libelle": "Je sais ce qui relève de mon poste.",
     "pourquoi": "Sinon, je promets ce que je ne peux pas tenir, et quelqu'un d'autre devra rattraper ma promesse."
    },
    {
     "code": "C04",
     "libelle": "Je fais valider ce qui engage mon employeur.",
     "pourquoi": "Sinon, je le mets en difficulté sans le savoir, devant un partenaire ou un usager."
    },
    {
     "code": "C05",
     "libelle": "Je préviens dès qu'une échéance est menacée.",
     "pourquoi": "Sinon, mon retard bloque le travail des autres, qui l'apprennent trop tard pour s'organiser."
    },
    {
     "code": "C18",
     "libelle": "Je cherche avant de solliciter, et je sais quand m'arrêter.",
     "pourquoi": "Sinon, je perds du temps seul, ou j'en fais perdre aux autres avec une question floue."
    }
   ],
   "retour": "Ces réflexes se construisent avec la pratique. Les phrases où vous avez répondu « rarement » ou « parfois » sont celles à garder en tête dans les semaines qui viennent.\n",
   "suite": "M2-SOR-LIBRE"
  },
  "M2-SOR-LIBRE": {
   "id": "M2-SOR-LIBRE",
   "type": "reponse-libre",
   "etape": "Sortie",
   "titre": "La semaine prochaine",
   "question": "Une chose que je ferai autrement la semaine prochaine :",
   "apres": "Notez-la quelque part où vous la reverrez lundi : c'est ainsi qu'elle devient une habitude.",
   "suite": "M2-SOR-RES"
  },
  "M2-SOR-RES": {
   "id": "M2-SOR-RES",
   "type": "ressources",
   "etape": "Sortie",
   "titre": "Mes ressources",
   "texte": "Les quatre outils de la semaine sont rangés dans votre carnet. Ouvrez-les pour les imprimer ou les enregistrer en PDF.",
   "fiches": [
    "FICHE-E1",
    "FICHE-E2",
    "FICHE-E3",
    "FICHE-S"
   ],
   "suite": "M2-FIN"
  },
  "M2-FIN": {
   "id": "M2-FIN",
   "type": "fin",
   "etape": "Sortie",
   "titre": "Bravo, la semaine de Noa est terminée",
   "texte": "Vous avez accompagné Noa pendant sa troisième semaine à ÉLAN. Il sait désormais où est sa place, et jusqu'où il peut agir seul.\n",
   "points_titre": "Ce que vous avez appris",
   "points": [
    {
     "titre": "Repérer ce qui relève de votre poste",
     "texte": "Distinguer ce que vous faites seul, ce que vous préparez, ce qui revient à d'autres."
    },
    {
     "titre": "Agir dans le cadre hiérarchique",
     "texte": "Rendre compte, faire valider ce qui engage votre employeur."
    },
    {
     "titre": "Tenir vos engagements",
     "texte": "Prioriser, et prévenir tôt quand une échéance est menacée."
    },
    {
     "titre": "Demander un appui utile",
     "texte": "Chercher d'abord, savoir s'arrêter, poser une question claire."
    }
   ],
   "dossier": "Ariane a décidé : ÉLAN réalise le diagnostic des six lieux et coordonne les partenaires. Passerelles garde la décision, les bénévoles et le transport. Prochaine étape du dossier : la réunion de lancement.",
   "prochain": {
    "titre": "M3 — Je travaille avec les autres",
    "texte": "Lundi prochain, Noa anime sa première réunion avec Passerelles, la commune et la province. Trois organisations, trois calendriers, et personne n'est le chef de personne…"
   },
   "suite": "MENU"
  }
 },
 "fiches": {
  "FICHE-E1": {
   "id": "FICHE-E1",
   "type": "fiche",
   "code": "M2-E1-03",
   "modele": "formulaire",
   "categorie": "outil",
   "titre": "Mes repères de poste",
   "quand": "Dans vos premières semaines, avec votre fiche de poste. À relire avec votre responsable.",
   "sections": [
    {
     "titre": "Mon poste",
     "champs": [
      "Intitulé de mon poste",
      "Mon service et ma direction",
      "Mon employeur"
     ]
    },
    {
     "titre": "Mes missions",
     "champs": [
      "Mission 1",
      "Mission 2",
      "Mission 3"
     ]
    },
    {
     "titre": "Mes interlocuteurs",
     "champs": [
      "Je rends compte à",
      "Je travaille souvent avec",
      "Pour les questions RH, je m'adresse à"
     ]
    },
    {
     "titre": "Ma marge",
     "champs": [
      "Ce que je décide seul",
      "Ce que je prépare et fais valider",
      "Ce que je réoriente ou signale"
     ]
    }
   ],
   "a_retenir": "Ce qui n'est pas dans ma fiche de poste n'est pas autorisé pour autant. Si je n'ai pas de fiche de poste, je la demande.",
   "competences": [
    "C03"
   ],
   "version": "0.3"
  },
  "FICHE-E2": {
   "id": "FICHE-E2",
   "type": "fiche",
   "code": "M2-E2-03",
   "modele": "checklist",
   "categorie": "outil",
   "titre": "Jusqu'où puis-je agir seul ?",
   "quand": "Avant d'agir sur une demande qui vous laisse un doute. Il n'y a pas de bonne ou de mauvaise réponse : c'est une liste de vérifications.",
   "questions": [
    {
     "q": "Est-ce dans ma mission ?",
     "aide": "La demande correspond-elle à ma fiche de poste ou à une consigne de mon responsable ?",
     "verifier": [
      "Je relis ma fiche de poste (missions, activités, marges).",
      "Je retrouve la consigne reçue : qui me l'a donnée, par écrit ou à l'oral ?"
     ],
     "si_non": "Je ne refuse pas sèchement : j'oriente vers la bonne personne et j'informe mon responsable."
    },
    {
     "q": "L'information est-elle fiable ?",
     "aide": "Puis-je dire d'où elle vient, de quand elle date, et si elle est définitive ?",
     "verifier": [
      "Elle vient d'une source officielle ou du service qui la produit.",
      "Elle est datée ; je sais si elle est provisoire.",
      "Pour un texte : je vérifie qu'il est en vigueur sur Leginova (anciennement Juridoc)."
     ],
     "si_non": "Je cherche la source ou je pose la question au service producteur. Si je dois transmettre quand même, je dis ce qui est provisoire."
    },
    {
     "q": "Mon action est-elle réversible ?",
     "aide": "Si je me trompe, puis-je revenir en arrière sans conséquence ?",
     "verifier": [
      "Un brouillon, une note interne, une proposition : on peut corriger.",
      "Un courriel à un partenaire, une annonce, une signature : difficile à rattraper."
     ],
     "si_non": "Je prépare et je fais valider avant d'envoyer."
    },
    {
     "q": "Est-ce que cela engage mon employeur, un partenaire, une dépense ?",
     "aide": "Une signature, une promesse de financement, une date imposée à un partenaire, une position au nom de l'établissement…",
     "verifier": [
      "Ma fiche de poste le range-t-elle dans « je fais valider » ?",
      "Y a-t-il un risque juridique, financier ou déontologique ?"
     ],
     "si_non": "Je fais valider par mon responsable. Pour une question de déontologie, je peux aussi solliciter le référent déontologue de ma collectivité."
    },
    {
     "q": "Qui dois-je informer, et quand ?",
     "aide": "Mon responsable sait-il ce que je fais, et ce qui reste incertain ?",
     "verifier": [
      "Je dis ce qui est fait, ce qui est incertain, ce que j'attends.",
      "Je préviens tôt si une échéance est menacée."
     ],
     "si_non": "J'envoie un message court, avec une seule question si j'attends une décision."
    }
   ],
   "conclusion": {
    "titre": "Dans tous les cas : je rends compte",
    "texte": "Quand on débute, on rend compte de ce que l'on a fait, même quand tout va bien. C'est ainsi que mon responsable peut me confier davantage."
   },
   "alerte": "À tout moment : risque pour des personnes, risque juridique ou financier, délai impossible à tenir → j'alerte mon responsable.",
   "a_retenir": "J'identifie ma marge de manœuvre, je fais valider ce qui engage mon employeur, et je rends compte.",
   "reperes": [
    "Ce que je peux faire seul",
    "Ce que je fais valider, et par qui",
    "Qui j'alerte en cas d'urgence",
    "Le référent déontologue de ma collectivité"
   ],
   "competences": [
    "C04",
    "C18"
   ],
   "version": "0.3"
  },
  "FICHE-E3": {
   "id": "FICHE-E3",
   "type": "fiche",
   "code": "M2-E3-03",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Bien demander un appui",
   "quand": "Avant d'écrire ou d'appeler pour obtenir une information, de l'aide ou une validation.",
   "etapes": [
    {
     "titre": "1. Je cherche d'abord",
     "texte": "Fiche de poste, consigne, intranet, dossier partagé, site de la DRHFPNC, Leginova. Je me fixe une limite de temps."
    },
    {
     "titre": "2. Je nomme ma demande",
     "texte": "Information, aide, validation ou alerte."
    },
    {
     "titre": "3. Je choisis l'interlocuteur",
     "texte": "Celui qui détient l'information ou la décision, pas le plus disponible."
    },
    {
     "titre": "4. Je structure",
     "texte": "Le contexte → ce que j'ai déjà fait → une question précise → le délai."
    }
   ],
   "types": [
    {
     "titre": "Information",
     "texte": "Je cherche un fait. → le service qui le produit."
    },
    {
     "titre": "Aide",
     "texte": "Je veux faire mieux. → un collègue expérimenté, un tuteur."
    },
    {
     "titre": "Validation",
     "texte": "Quelqu'un doit décider. → mon responsable."
    },
    {
     "titre": "Alerte",
     "texte": "Un risque ou un délai intenable. → mon responsable, sans attendre."
    }
   ],
   "exemple": "« Je prépare pour ÉLAN la note de cadrage sur la permanence de Passerelles, attendue jeudi. Votre note méthodologique définit les demandes reçues, pas les démarches abouties. Comment définissez-vous une démarche aboutie ? Une réponse d'ici demain midi me permettrait de tenir l'échéance. »",
   "a_retenir": "Une demande précise obtient une réponse rapide. Et si je bloque depuis trop longtemps, je m'arrête et je demande.",
   "reperes": [
    "Mon gestionnaire RH",
    "Le support informatique",
    "Mon collègue référent"
   ],
   "competences": [
    "C18"
   ],
   "version": "0.3"
  },
  "FICHE-S": {
   "id": "FICHE-S",
   "type": "fiche",
   "code": "M2-SOR-03",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Organiser ma semaine",
   "quand": "Le lundi matin, et chaque fois qu'une urgence bouscule vos priorités.",
   "etapes": [
    {
     "titre": "1. Je pars des échéances",
     "texte": "Ce qui est attendu, par qui, pour quand. Je garde du temps pour relire et corriger."
    },
    {
     "titre": "2. Je traite tout de suite ce qui est court",
     "texte": "Une réponse de deux minutes ne s'inscrit pas dans le planning : je la fais."
    },
    {
     "titre": "3. Je prévois mes jours de télétravail",
     "texte": "Ce qui demande un échange se cale en visio ou au téléphone, à une heure fixée."
    },
    {
     "titre": "4. Quand une urgence arrive",
     "texte": "Je préviens tout de suite la personne dont l'échéance va glisser, et je propose un nouveau délai."
    }
   ],
   "types": [
    {
     "titre": "Urgent et important",
     "texte": "Je le fais maintenant, et je préviens qui est décalé."
    },
    {
     "titre": "Important, pas urgent",
     "texte": "Je le planifie dans la semaine."
    },
    {
     "titre": "Urgent, pas important pour moi",
     "texte": "Je réoriente ou je fais vite."
    },
    {
     "titre": "Ni l'un ni l'autre",
     "texte": "Je le garde pour plus tard, ou je le laisse."
    }
   ],
   "exemple": "« Ariane me demande un point écrit avant 11 h sur Passerelles. Je le fais d'abord ; la note de cadrage arrivera à 14 h au lieu de 11 h. Ça te va ? »",
   "a_retenir": "Prévenir tôt, c'est laisser aux autres le temps de s'organiser.",
   "reperes": [
    "Mes échéances de la semaine",
    "Mes jours de télétravail",
    "Qui je préviens en cas de retard"
   ],
   "competences": [
    "C05"
   ],
   "version": "0.1"
  }
 },
 "illustrations": {
  "ILL-14": {
   "scene": "Bureau de Noa vu du dessus, quatre objets",
   "personnages": "—",
   "alt": "Bureau de Noa vu du dessus. Quatre objets représentent quatre sources d'information : une fiche de poste imprimée, un ordinateur ouvert sur l'intranet, une tablette ouverte sur un site officiel, un téléphone posé près d'un carnet."
  },
  "ILL-P3": {
   "scene": "Organigramme illustré des dix personnages",
   "personnages": "Les dix personnages",
   "alt": "Organigramme illustré : en haut l'équipe d'ÉLAN autour d'Ariane, en bas les partenaires, l'association Passerelles, une administration provinciale et une commune."
  },
  "ILL-M01": {
   "scene": "Noa et Malia au bureau du pôle, lundi 7 h 45",
   "personnages": "Noa, Malia",
   "alt": "Lundi matin au pôle études et projets. Malia pose son café sur le bureau de Noa et lui parle ; Noa l'écoute, assis à son poste."
  },
  "ILL-M02": {
   "scene": "Samuel passe au bureau de Noa, dossier à la main",
   "personnages": "Noa, Samuel",
   "alt": "Samuel, debout près du bureau de Noa, lui tend une chemise cartonnée. Noa lève les yeux de son écran."
  },
  "ILL-M03": {
   "scene": "Noa, une matinée chargée",
   "personnages": "Noa",
   "alt": "Noa à son bureau, le téléphone calé contre l'oreille, prend une note ; des post-it au bord de son écran."
  },
  "ILL-M04": {
   "scene": "Joël au téléphone devant le local de Passerelles",
   "personnages": "Joël",
   "alt": "Joël, au téléphone, devant la vitrine du local de l'association Passerelles, dans une rue calme de Koné."
  },
  "ILL-M05": {
   "scene": "Noa bloqué devant son écran",
   "personnages": "Noa",
   "alt": "Noa devant son ordinateur, une main sur la nuque, l'air contrarié : une fenêtre d'erreur grise s'affiche à l'écran."
  },
  "ILL-M06": {
   "scene": "Noa en télétravail chez lui, jeudi matin",
   "personnages": "Noa",
   "alt": "Noa travaille chez lui, à une table contre la fenêtre : ordinateur portable ouvert, carnet et tasse de café."
  },
  "ILL-M07": {
   "scene": "Ariane au téléphone dans son bureau",
   "personnages": "Ariane",
   "alt": "Ariane, debout dans son bureau de directrice, téléphone à l'oreille, une main posée sur un dossier ouvert."
  },
  "ILL-M08": {
   "scene": "Noa range ses documents, vendredi 16 h",
   "personnages": "Noa",
   "alt": "Vendredi après-midi. Noa range ses documents à son bureau, détendu, la semaine terminée."
  }
 },
 "source": "Storyboard — M2 v0.4.md"
};
