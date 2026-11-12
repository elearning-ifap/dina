/* GÉNÉRÉ par build/build.py depuis « Storyboard — M2 en pages v0.2.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M2-PAGES",
  "type": "module",
  "cle": "m2-pages",
  "titre": "Je trouve ma place",
  "code": "M2",
  "duree": "1 h environ",
  "intro": "Prototype du module 2 en pages qui défilent. Samuel confie à Noa son premier dossier : la permanence itinérante de l'association Passerelles. Du lundi au vendredi, aidez-le à savoir ce qui est à lui, à avancer quand la consigne est floue, à demander de l'aide au bon moment et à tenir ses engagements quand la matinée déraille.",
  "sections": [
   {
    "id": "ep1",
    "libelle": "Épisode 1",
    "jour": "Lundi",
    "savoir": "Savoir ce qui relève de mon poste",
    "titre": "Ma fiche de poste, pour de vrai",
    "debut": "M2-P1",
    "duree": "15 min",
    "accroche": "Cinq demandes dans la même matinée. Lesquelles sont vraiment pour Noa ?"
   },
   {
    "id": "ep2",
    "libelle": "Épisode 2",
    "jour": "Mardi",
    "savoir": "Avancer quand la consigne est floue",
    "titre": "Une consigne qui me laisse un doute",
    "debut": "M2-P2",
    "duree": "15 min",
    "accroche": "Samuel est en comité jusqu'à 14 h, Ariane voit le président de Passerelles à 16 h."
   },
   {
    "id": "ep3",
    "libelle": "Épisode 3",
    "jour": "Mercredi",
    "savoir": "Demander un appui au bon moment",
    "titre": "Je suis bloqué",
    "debut": "M2-P3",
    "duree": "12 min",
    "accroche": "Un accès refusé, une question RH, une définition introuvable. Qui peut aider Noa ?"
   },
   {
    "id": "defi",
    "libelle": "Défi",
    "jour": "Jeudi",
    "savoir": "Le défi : tenir ses engagements",
    "titre": "La matinée déraille",
    "debut": "M2-DEF",
    "duree": "10 min",
    "accroche": "Noa travaille de chez lui. À 9 h, Ariane appelle."
   },
   {
    "id": "eval",
    "libelle": "Évaluation",
    "jour": "Vendredi",
    "savoir": "L'évaluation du module",
    "titre": "L'évaluation",
    "debut": "M2-EVA-INTRO",
    "duree": "5 min",
    "accroche": "Trois situations nouvelles pour vérifier vos réflexes."
   },
   {
    "id": "sortie",
    "libelle": "Bilan",
    "etiquette": "Mon bilan",
    "jour": "Mon bilan",
    "savoir": "Faire le point",
    "titre": "Ce que Noa a appris",
    "debut": "M2-SOR-1",
    "duree": "4 min",
    "accroche": "Ce que Noa retient, et où vous en êtes, vous."
   }
  ],
  "hub": {
   "href": "index.html",
   "libelle": "Retour à l'accueil du prototype"
  },
  "dossier": {
   "titre": "Le dossier Passerelles",
   "objet": "Une permanence itinérante d'aide aux démarches, dans six lieux de trois communes.",
   "roles": "Passerelles porte le projet et décide. L'ÉLAN qualifie, étudie et coordonne.",
   "jalons": [
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
     "libelle": "Ariane décide de l'appui de l'ÉLAN",
     "section": "sortie"
    }
   ]
  },
  "personnages": {
   "Noa": "Chargé d'études et d'appui aux projets, l'ÉLAN",
   "Samuel": "Responsable du pôle études et projets, l'ÉLAN",
   "Malia": "Chargée d'études, marraine de Noa, l'ÉLAN",
   "Ariane": "Directrice de l'ÉLAN",
   "Ana": "Pôle ressources et administration, l'ÉLAN",
   "Cédric": "Accueil et logistique, l'ÉLAN",
   "Joël": "Coordinateur de terrain, association Passerelles",
   "Léna": "Chargée d'études statistiques, administration provinciale",
   "Élise": "Agente d'accueil, une commune"
  }
 },
 "ecrans": {
  "M2-P1": {
   "id": "M2-P1",
   "type": "page",
   "etape": "Épisode 1",
   "titre": "Ma fiche de poste, pour de vrai",
   "chapeau": "Un dossier confié, cinq demandes dans la même matinée. Vous triez d'abord avec vos repères, vous lisez la fiche de poste de Noa, puis vous décidez et vous planifiez sa semaine.",
   "competences": [
    "C03",
    "C04",
    "C05"
   ],
   "competences_lib": [
    {
     "code": "C03",
     "libelle": "Je connais mon statut, mes missions et mes limites."
    },
    {
     "code": "C04",
     "libelle": "J'agis dans le cadre hiérarchique."
    },
    {
     "code": "C05",
     "libelle": "J'organise mon activité et mes priorités."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application"
   ],
   "bouton_fin": "Terminer l'épisode",
   "categories": [
    {
     "id": "poste",
     "libelle": "Dans mon champ d'action",
     "court": "Dans mon champ d'action"
    },
    {
     "id": "prepare",
     "libelle": "Je prépare, un autre décide",
     "court": "Je prépare, un autre décide"
    },
    {
     "id": "signale",
     "libelle": "Pas à moi : je réoriente ou je signale",
     "court": "Pas à moi : je réoriente ou je signale"
    },
    {
     "id": "lundi",
     "libelle": "Lundi",
     "court": "Lundi"
    },
    {
     "id": "mardi",
     "libelle": "Mardi",
     "court": "Mardi"
    },
    {
     "id": "mercredi",
     "libelle": "Mercredi",
     "court": "Mercredi"
    },
    {
     "id": "jeudi",
     "libelle": "Jeudi",
     "court": "Jeudi"
    },
    {
     "id": "vendredi",
     "libelle": "Vendredi",
     "court": "Vendredi"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "La note de cadrage Passerelles demandée par Samuel, pour jeudi 11 h.",
     "court": "La note de cadrage pour Samuel",
     "attendu": "poste",
     "feedback": "C'est la commande de son responsable, au cœur du poste : « préparer des documents d'aide à la décision ». Ariane, elle, décidera.",
     "guichet": "Au cœur du poste : préparer l'aide à la décision",
     "clair": "Une **note de cadrage** présente une demande et ce qu'on propose d'en faire, pour que la personne qui décide puisse trancher."
    },
    {
     "id": "B",
     "libelle": "Confirmer à Joël que l'ÉLAN paie la location du minibus.",
     "court": "Confirmer le minibus à Joël",
     "attendu": "signale",
     "feedback": "L'ÉLAN ne finance pas les projets qu'il accompagne. Une promesse de financement est dans la colonne « je fais valider » de la fiche de poste. Si Noa dit oui, Passerelles engage une dépense que personne ne paiera.",
     "guichet": "Une promesse de financement : pas à moi"
    },
    {
     "id": "C",
     "libelle": "Corriger directement l'affiche de la commune, qui donne les anciens horaires de la salle.",
     "court": "Corriger l'affiche de la commune",
     "attendu": "signale",
     "feedback": "L'affiche appartient à la commune. Noa signale l'erreur et propose les bons horaires ; c'est la commune qui corrige.",
     "guichet": "L'affiche appartient à la commune"
    },
    {
     "id": "D",
     "libelle": "Relire la note avec Malia avant de la rendre.",
     "court": "Relire la note avec Malia",
     "attendu": "poste",
     "feedback": "Faire relire une production avant de la transmettre fait partie du travail bien fait.",
     "guichet": "Le travail bien fait"
    },
    {
     "id": "E",
     "libelle": "Envoyer à Ana sa copie de diplôme et son RIB, avant vendredi.",
     "court": "Envoyer ses pièces à Ana",
     "attendu": "poste",
     "feedback": "Fournir les pièces de son dossier est une obligation de l'agent, pas une formalité secondaire : sans elles, sa situation administrative ne peut pas être réglée.",
     "guichet": "Une obligation de l'agent"
    },
    {
     "id": "J",
     "libelle": "Joël attend sa réponse sur le minibus. Il doit répondre à ses bénévoles ce soir. Que lui dit Noa ?",
     "court": "La réponse à Joël",
     "attendu": "explique",
     "feedback": "Noa reste courtois, n'engage pas l'ÉLAN, explique pourquoi, et l'information utile remonte : Joël peut prévenir ses bénévoles honnêtement. Une demi-promesse reste une promesse ; « Voyez avec Samuel » est juste sur le fond, mais Joël repart sans explication ; « rappelez plus tard » le laisse sans piste."
    },
    {
     "id": "T1",
     "libelle": "Répondre à Joël et à Élise.",
     "court": "Répondre à Joël et à Élise",
     "attendu": "lundi",
     "feedback": "Deux minutes de travail chacune. Les reporter fait attendre deux partenaires pour rien."
    },
    {
     "id": "T2",
     "libelle": "Qualifier la demande de Passerelles.",
     "court": "Qualifier la demande",
     "attendu": "lundi",
     "feedback": "C'est la première étape de la note : savoir ce qui est demandé, et par qui.",
     "clair": "**Qualifier** une demande, c'est dire qui demande quoi, pour quand, et si cela relève de l'ÉLAN."
    },
    {
     "id": "T3",
     "libelle": "Faire le diagnostic et rédiger la note.",
     "court": "Diagnostic et rédaction",
     "attendu": [
      "mardi",
      "mercredi"
     ],
     "feedback": "Il faut ces deux jours pour avoir une version complète avant la relecture."
    },
    {
     "id": "T4",
     "libelle": "Envoyer les pièces à Ana.",
     "court": "Les pièces pour Ana",
     "attendu": [
      "mardi",
      "mercredi"
     ],
     "feedback": "Les garder pour vendredi, c'est risquer de les oublier le jour de l'échéance."
    },
    {
     "id": "T5",
     "libelle": "Relire la note avec Malia, en visio à 8 h 30 (Noa est autorisé à télétravailler ce jour-là).",
     "court": "Relecture avec Malia",
     "attendu": "jeudi",
     "feedback": "Jeudi tôt laisse le temps de corriger avant 11 h. Une relecture à 10 h 45 ne servirait à rien."
    },
    {
     "id": "T6",
     "libelle": "Remettre la note à Samuel, à 11 h.",
     "court": "Remettre la note",
     "attendu": "jeudi",
     "feedback": "C'est l'échéance fixée par Samuel."
    },
    {
     "id": "N1",
     "libelle": "Mettre à jour le tableau des formations suivies par l'équipe.",
     "court": "Le tableau des formations",
     "attendu": "poste",
     "feedback": "C'est une tâche de son pôle, confiée à Ana : elle la fait."
    },
    {
     "id": "N2",
     "libelle": "Un agent lui demande de valider elle-même ses congés de décembre.",
     "court": "Valider des congés",
     "attendu": "prepare",
     "feedback": "Ana instruit la demande et vérifie la règle ; c'est le responsable de l'agent qui donne son accord sur les dates, selon les besoins du service."
    },
    {
     "id": "N3",
     "libelle": "Un fournisseur lui demande de signer un devis au nom de l'ÉLAN.",
     "court": "Signer un devis",
     "attendu": "prepare",
     "feedback": "Signer un devis engage une dépense : Ana prépare le dossier, la personne habilitée signe."
    },
    {
     "id": "N4",
     "libelle": "Un habitant appelle pour une question sur sa facture d'eau.",
     "court": "Une facture d'eau",
     "attendu": "signale",
     "feedback": "Ce n'est pas une question pour l'ÉLAN : Ana oriente l'habitant vers le service qui gère l'eau dans sa commune."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Un dossier rien qu'à lui",
     "illustration": "ILL-M01",
     "texte": "Lundi matin, à Koné. Noa est à l'ÉLAN depuis quelques semaines. Malia pose son café sur le bureau.\n\nL'association Passerelles veut tenir une permanence mensuelle d'aide aux démarches dans six lieux de trois communes : beaucoup d'habitants font aujourd'hui plusieurs heures de route pour une pièce manquante. Elle demande l'appui de l'ÉLAN.",
     "repliques": [
      {
       "personnage": "Malia",
       "texte": "« Cette semaine, Samuel te confie Passerelles. C'est ton dossier. Le plus dur n'est pas l'étude. C'est de savoir ce qui est à toi, et ce qui ne l'est pas. »"
      },
      {
       "personnage": "Samuel",
       "texte": "« Tu qualifies la demande et tu me prépares la note de cadrage pour Ariane. Je la veux **jeudi à 11 h** ; Ariane la lira vendredi matin. Ta fiche de poste te dit ce que tu peux faire seul. Relis-la. »"
      }
     ],
     "et_vous": "Quand on vous a confié votre premier dossier, saviez-vous ce que vous pouviez décider seul ?"
    },
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Quatre autres demandes, toutes « urgentes »",
     "illustration": "ILL-M03",
     "repliques": [
      {
       "personnage": "Joël",
       "canal": "appel",
       "texte": "« Vous pouvez me confirmer que l'ÉLAN paie la location du minibus ? Je dois répondre aux bénévoles ce soir. »"
      },
      {
       "personnage": "Élise",
       "canal": "courriel",
       "texte": "« L'affiche de la commune donne encore les anciens horaires de la salle. Vous pouvez la corriger directement ? Je vous mets le fichier. »"
      },
      {
       "personnage": "Malia",
       "texte": "« On relit ta note ensemble avant que tu la rendes ? »"
      },
      {
       "personnage": "Ana",
       "canal": "courriel",
       "texte": "« Il me manque ta copie de diplôme et ton RIB pour ton dossier administratif. Avant vendredi, s'il te plaît. »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "avant",
     "phase": "situation",
     "titre": "Cinq demandes : lesquelles sont à Noa ?",
     "competences": [
      "C03"
     ],
     "items": [
      "A",
      "B",
      "C",
      "D",
      "E"
     ],
     "categories": [
      {
       "id": "poste",
       "libelle": "Dans mon champ d'action",
       "court": "Dans mon champ d'action"
      },
      {
       "id": "prepare",
       "libelle": "Je prépare, un autre décide",
       "court": "Je prépare, un autre décide"
      },
      {
       "id": "signale",
       "libelle": "Pas à moi : je réoriente ou je signale",
       "court": "Pas à moi : je réoriente ou je signale"
      }
     ],
     "consigne": "Pour chaque demande, où la range Noa ? Répondez avec vos repères : la fiche de poste vient juste après.",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "La fiche de poste de Noa est juste dessous. Gardez en tête les demandes « à revoir ».",
     "bilan_tout": "Vos repères sont solides. La fiche de poste va vous permettre de les expliquer."
    },
    {
     "type": "document",
     "phase": "apport",
     "titre": "La fiche de poste de Noa",
     "doc_titre": "Fiche de poste — Chargé d'études et d'appui aux projets",
     "texte": "Noa ouvre sa fiche de poste, comme Samuel le lui a demandé.",
     "intro": "Extrait (document fictif, présenté comme une fiche de poste de la fonction publique calédonienne).",
     "sections": [
      {
       "titre": "Identification du poste",
       "texte": "- **Employeur** : l'ÉLAN, établissement public\n- **Service** : pôle études et projets, Koné\n- **Responsable hiérarchique** : Samuel, responsable du pôle\n"
      },
      {
       "titre": "Mission du poste",
       "texte": "Sous l'autorité du responsable du pôle, contribuer à la préparation, au suivi et à l'évaluation d'actions de proximité accompagnées par l'ÉLAN. Rechercher et fiabiliser les informations, préparer des documents d'aide à la décision, faciliter les échanges entre acteurs, **sans se substituer aux autorités compétentes pour décider ou engager des moyens**."
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
       "texte": "- Une prise de position qui engage l'ÉLAN\n- Toute dépense, promesse de financement ou convention\n- Un changement de priorités ou de calendrier\n- Une communication externe sensible\n"
      },
      {
       "titre": "Repère",
       "texte": "Une demande directe d'Ariane qui modifie le travail confié est clarifiée avec Samuel."
      }
     ],
     "organigramme_titre": "Organigramme simplifié",
     "organigramme": {
      "nom": "Ariane",
      "role": "Directrice de l'ÉLAN",
      "enfants": [
       {
        "nom": "Samuel",
        "role": "Pôle études et projets",
        "enfants": [
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
       },
       {
        "nom": "Pôle liaison territoriale",
        "role": "Responsable à venir"
       },
       {
        "nom": "Ana",
        "role": "Pôle ressources et administration"
       }
      ]
     },
     "partenaires": "Hors organigramme : l'association Passerelles (Joël), la commune (Élise), l'administration provinciale (Léna). Ils ne reçoivent pas d'instruction de l'ÉLAN."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Ce que je peux engager, ce que je ne peux pas promettre",
     "competences": [
      "C03",
      "C04"
     ],
     "texte": "Au module 1, Noa a transmis à Samuel la demande d'appui de Joël. Voici pourquoi, et jusqu'où va sa marge.",
     "regle": "Ma fiche de poste fixe ma marge. Ce qui engage mon employeur, je le prépare et je le fais valider.",
     "regle_clair": "**Engager l'employeur**, c'est signer, dépenser, promettre ou prendre position en son nom. Ce qui n'est pas écrit dans ma fiche de poste n'est pas autorisé pour autant.",
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
        "Une prise de position au nom de l'ÉLAN",
        "Un changement de calendrier",
        "Une communication externe sensible"
       ]
      }
     ],
     "points_titre": "Dans le dossier Passerelles, quatre rôles",
     "points": [
      {
       "titre": "L'ÉLAN appuie",
       "texte": "Il apporte un diagnostic et coordonne les partenaires : c'est sa mission."
      },
      {
       "titre": "Noa qualifie et prépare",
       "texte": "Il analyse la demande, fiabilise les informations et rédige la note : c'est la mission de son poste."
      },
      {
       "titre": "Passerelles décide de son projet",
       "texte": "L'association crée sa permanence, recrute ses bénévoles, organise le transport."
      },
      {
       "titre": "Ariane décide de l'appui",
       "texte": "La directrice décide si l'ÉLAN accompagne le projet, et comment. Noa lui donne les éléments pour décider."
      }
     ],
     "a_retenir": "Préparer une décision n'est pas la prendre. Une promesse faite par un agent engage son employeur : dans le doute, je propose et je fais valider."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Quel que soit mon statut",
     "competences": [
      "C03"
     ],
     "texte": "À l'ÉLAN, Noa et Ana n'ont pas le même statut. Leurs devoirs sont les mêmes.",
     "colonnes": [
      {
       "icone": "i-balance",
       "titre": "Ce qui ne change pas",
       "items": [
        "Servir l'intérêt général, avec neutralité",
        "Discrétion et secret professionnels",
        "Exécuter les instructions de son responsable",
        "Le droit à la rémunération, aux congés, à la formation"
       ]
      },
      {
       "icone": "i-chemin",
       "titre": "Ce qui dépend du statut",
       "items": [
        "La façon d'être recruté : concours ou contrat",
        "Le déroulement de la carrière",
        "Certaines règles de congés et de fin de fonctions"
       ]
      }
     ],
     "a_retenir": "Fonctionnaire, stagiaire ou contractuel, catégorie A, B ou C : ces devoirs sont les vôtres. Pour ce qui dépend de votre statut, la fiche « Mon statut » est dans votre carnet ; votre gestionnaire RH vous répond.",
     "sources": "Droits et obligations : délibération n° 81 du 24 juillet 1990 ; agents contractuels : loi du pays n° 2021-4.",
     "valider": "A4 (11-11) : le statut de Noa n'est plus enseigné dans le récit ; positions de carrière dans la fiche de connaissances FICHE-M2-STATUT. Formulations à faire valider par un expert statutaire."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Pourquoi l'échéance de jeudi compte",
     "competences": [
      "C05"
     ],
     "texte": "Samuel n'a pas fixé jeudi 11 h au hasard.",
     "regle": "Une échéance relie mon travail à une décision. J'organise ma semaine à partir d'elle, en gardant du temps pour relire et corriger.",
     "regle_clair": "Une **échéance**, c'est le moment où le travail doit être remis. La manquer décale la décision de quelqu'un d'autre.",
     "points": [
      {
       "titre": "Jeudi 11 h, Noa rend sa note",
       "texte": "Samuel a le temps de la relire et de la corriger avec lui."
      },
      {
       "titre": "Vendredi matin, Ariane la lit",
       "texte": "Elle décide de l'appui de l'ÉLAN avant son rendez-vous avec Passerelles."
      },
      {
       "titre": "Passerelles peut avancer",
       "texte": "L'association sait sur quoi compter pour organiser sa permanence."
      }
     ],
     "encadre": "Sur site ou en télétravail, l'échéance est la même. Ce qui change, ce sont les moyens de se coordonner : visio, téléphone, messagerie. Chaque employeur fixe ses propres règles de télétravail.",
     "valider": "Télétravail : texte vérifié le 11-11 (délibération 155, loi du pays 2021-3) ; autorisé par l'employeur sur demande écrite, ce n'est pas un droit. Mise en œuvre à confirmer chez les employeurs visés."
    },
    {
     "type": "tri",
     "id": "apres",
     "reprend": "avant",
     "phase": "application",
     "titre": "Reprenez les demandes à revoir",
     "competences": [
      "C03"
     ],
     "items": [
      "A",
      "B",
      "C",
      "D",
      "E"
     ],
     "categories": [
      {
       "id": "poste",
       "libelle": "Dans mon champ d'action",
       "court": "Dans mon champ d'action"
      },
      {
       "id": "prepare",
       "libelle": "Je prépare, un autre décide",
       "court": "Je prépare, un autre décide"
      },
      {
       "id": "signale",
       "libelle": "Pas à moi : je réoriente ou je signale",
       "court": "Pas à moi : je réoriente ou je signale"
      }
     ],
     "consigne": "La fiche de poste sous les yeux, reprenez les demandes à revoir. Les demandes déjà justes restent en place, avec leur explication.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bouton_rien": "Continuer",
     "bilan": "Les cinq demandes sont expliquées.",
     "bilan_tout": "Les cinq demandes sont expliquées."
    },
    {
     "type": "tri",
     "id": "joel",
     "phase": "application",
     "titre": "Joël attend une réponse",
     "competences": [
      "C03",
      "C04"
     ],
     "items": [
      "J"
     ],
     "categories": [
      {
       "id": "demi",
       "libelle": "« Ça devrait passer, je vous redis. »",
       "court": "« Ça devrait passer, je vous redis. »"
      },
      {
       "id": "explique",
       "libelle": "« Je ne peux pas vous le confirmer : l'ÉLAN ne finance pas les projets qu'il accompagne. Notre appui porte sur le diagnostic et la coordination. Je note votre besoin de transport dans la note de cadrage et j'en parle à mon responsable. »",
       "court": "« Je ne peux pas vous le confirmer : l'ÉLAN ne finance pas les projets qu'il accompagne. Notre appui porte sur le diagnostic et la coordination. Je note votre besoin de transport dans la note de cadrage et j'en parle à mon responsable. »"
      },
      {
       "id": "voyez",
       "libelle": "« Voyez avec Samuel. »",
       "court": "« Voyez avec Samuel. »"
      },
      {
       "id": "rappel",
       "libelle": "« Je ne sais pas, rappelez plus tard. »",
       "court": "« Je ne sais pas, rappelez plus tard. »"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez la réponse de Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : une demi-promesse engage déjà l'ÉLAN.",
     "bilan_tout": "Joël sait à quoi s'en tenir, et son besoin de transport remonte à Samuel."
    },
    {
     "type": "tri",
     "id": "semaine",
     "phase": "application",
     "titre": "La semaine de Noa",
     "competences": [
      "C05"
     ],
     "items": [
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6"
     ],
     "categories": [
      {
       "id": "lundi",
       "libelle": "Lundi",
       "court": "Lundi"
      },
      {
       "id": "mardi",
       "libelle": "Mardi",
       "court": "Mardi"
      },
      {
       "id": "mercredi",
       "libelle": "Mercredi",
       "court": "Mercredi"
      },
      {
       "id": "jeudi",
       "libelle": "Jeudi",
       "court": "Jeudi"
      },
      {
       "id": "vendredi",
       "libelle": "Vendredi",
       "court": "Vendredi"
      }
     ],
     "consigne": "La note est attendue jeudi à 11 h, les pièces d'Ana avant vendredi. Quel jour Noa place-t-il chaque tâche ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication des tâches à revoir : on part de l'échéance.",
     "bilan_tout": "Une semaine s'organise à partir des échéances, avec du temps pour relire et corriger."
    },
    {
     "type": "tri",
     "id": "ana",
     "phase": "application",
     "titre": "Au pôle ressources, Ana trie aussi",
     "competences": [
      "C03",
      "C04"
     ],
     "items": [
      "N1",
      "N2",
      "N3",
      "N4"
     ],
     "categories": [
      {
       "id": "poste",
       "libelle": "Dans mon champ d'action",
       "court": "Dans mon champ d'action"
      },
      {
       "id": "prepare",
       "libelle": "Je prépare, un autre décide",
       "court": "Je prépare, un autre décide"
      },
      {
       "id": "signale",
       "libelle": "Pas à moi : je réoriente ou je signale",
       "court": "Pas à moi : je réoriente ou je signale"
      }
     ],
     "consigne": "Le même lundi, Ana reçoit quatre demandes. Où les range-t-elle ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication des demandes à revoir.",
     "bilan_tout": "Même réflexe pour Ana que pour Noa, quel que soit le poste."
    },
    {
     "type": "liste",
     "phase": "application",
     "titre": "Ce qui est à Noa, ce qui ne l'est pas",
     "depuis": "apres",
     "competences": [
      "C03"
     ],
     "items": [
      "A",
      "B",
      "C",
      "D",
      "E"
     ],
     "texte": "Noa garde ce repère sous sa fiche de poste.",
     "entetes": [
      "Demande",
      "Je la range",
      "Pourquoi"
     ],
     "mention": "Pour le dossier Passerelles : Noa sait ce que l'association demande, et ce qui ne revient pas à l'ÉLAN, le minibus. La note de cadrage est attendue jeudi à 11 h.",
     "a_retenir": "Dire oui pour rendre service, ou répondre à la place de celui qui décide : ce sont les deux erreurs les plus courantes d'un nouvel agent. Ma fiche de poste me dit ce que je fais seul, ce que je prépare, et ce qui revient à d'autres."
    }
   ],
   "fiches": [
    "FICHE-M2-E1",
    "FICHE-M2-STATUT"
   ],
   "suite": "M2-P1-FIN"
  },
  "M2-P1-FIN": {
   "id": "M2-P1-FIN",
   "type": "fin-section",
   "etape": "Épisode 1",
   "surtitre": "Bilan de l'épisode",
   "titre": "Lundi, c'est fait",
   "acquis": [
    {
     "titre": "Trier ce qui est à soi",
     "texte": "La note et les pièces pour Ana : à Noa. Le minibus et l'affiche : ni à lui, ni à l'ÉLAN."
    },
    {
     "titre": "Ne rien promettre",
     "texte": "Noa a expliqué à Joël pourquoi, et il a noté le besoin de transport."
    },
    {
     "titre": "Planifier à partir de l'échéance",
     "texte": "Relecture jeudi 8 h 30 en visio, note à 11 h."
    }
   ],
   "dossier": "La demande de Passerelles est qualifiée. La note de cadrage est attendue jeudi à 11 h.",
   "suite": "MENU"
  },
  "M2-P2": {
   "id": "M2-P2",
   "type": "page",
   "etape": "Épisode 2",
   "titre": "Une consigne qui me laisse un doute",
   "chapeau": "Une consigne de deux lignes, trois informations qui ne valent pas la même chose, un responsable injoignable jusqu'à 14 h. Vous décidez par quoi commencer, vous apprenez à dire ce que vaut une information, puis vous rendez compte.",
   "competences": [
    "C04",
    "C05",
    "C17",
    "C20"
   ],
   "competences_lib": [
    {
     "code": "C04",
     "libelle": "J'agis dans le cadre hiérarchique."
    },
    {
     "code": "C05",
     "libelle": "J'organise mon activité et mes priorités."
    },
    {
     "code": "C17",
     "libelle": "Je recherche, je vérifie et j'actualise une information."
    },
    {
     "code": "C20",
     "libelle": "Je contribue à améliorer le service."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application",
    "synthese"
   ],
   "bouton_fin": "Terminer l'épisode",
   "categories": [
    {
     "id": "acquis",
     "libelle": "Je l'écris comme acquis",
     "court": "Je l'écris comme acquis"
    },
    {
     "id": "statut",
     "libelle": "Je l'écris avec son statut et sa source",
     "court": "Je l'écris avec son statut et sa source"
    },
    {
     "id": "non",
     "libelle": "Je ne l'écris pas",
     "court": "Je ne l'écris pas"
    }
   ],
   "items": [
    {
     "id": "Q1",
     "libelle": "Ariane voit le président de Passerelles à 16 h. Samuel est en comité jusqu'à 14 h. Par quoi Noa commence-t-il ?",
     "court": "Par quoi commencer",
     "attendu": "relire",
     "feedback": "Savoir à quoi sert un document, c'est savoir ce qu'il doit contenir : ici, ce qui est sûr et ce qui ne l'est pas. Changer les chiffres d'abord risque de donner une fiche juste mais inutile ; déranger Samuel en comité n'est pas justifié ; attendre 14 h, c'est être en retard pour 16 h."
    },
    {
     "id": "I1",
     "libelle": "Le message de Léna : 312 demandes au 30 septembre ; le chiffre de la côte Ouest est provisoire, consolidé jeudi.",
     "court": "Les 312 demandes de Léna",
     "attendu": "statut",
     "feedback": "Ariane dispose de l'ordre de grandeur et sait qu'il peut bouger. Présenté comme définitif, ce chiffre l'exposerait devant le président ; le taire la priverait d'un repère utile.",
     "guichet": "Provisoire : je le dis, avec la date de consolidation"
    },
    {
     "id": "I2",
     "libelle": "Ce que raconte Joël : selon Teiva, le médiateur de Passerelles, beaucoup d'habitants reviennent trois fois pour le même dossier.",
     "court": "Le témoignage de Joël",
     "attendu": "statut",
     "feedback": "Un témoignage n'est pas une donnée, mais il signale une limite de l'indicateur. Cité avec sa source, il éclaire Ariane sans tromper personne.",
     "guichet": "Un témoignage : je le cite avec sa source"
    },
    {
     "id": "I3",
     "libelle": "La liste des six lieux de la permanence, confirmée par écrit par Passerelles.",
     "court": "Les six lieux confirmés",
     "attendu": "acquis",
     "feedback": "Une information écrite, datée, venant de celui qui la produit : Noa peut la présenter comme acquise.",
     "guichet": "Écrite, sourcée : acquise"
    },
    {
     "id": "I4",
     "libelle": "« Une démarche sur trois n'aboutit pas » : le calcul que Noa pourrait tirer du témoignage de Joël.",
     "court": "« Une démarche sur trois »",
     "attendu": "non",
     "feedback": "Ce serait inventer un chiffre à partir d'un témoignage. Si le président demande d'où il vient, Ariane n'aura rien à répondre.",
     "guichet": "Un chiffre inventé : je ne l'écris pas"
    },
    {
     "id": "Q2",
     "libelle": "« Provisoire », mais de combien ? Un écart de 5 et un écart de 100 ne se présentent pas de la même façon. Noa revient-il vers Léna ?",
     "court": "Revenir vers Léna",
     "attendu": "question",
     "feedback": "Une question précise, posée au service qui produit la donnée : Léna peut répondre en une ligne, et la fiche gagne en précision. Ne rien demander laisse une incertitude qu'une question d'une ligne aurait réduite ; demander tout le fichier, c'est refaire le travail de Léna sans en avoir le temps."
    },
    {
     "id": "M1",
     "libelle": "Ce qui a été mis à jour dans la fiche.",
     "court": "Ce qui a été mis à jour",
     "attendu": "mettre",
     "feedback": "Samuel sait en un coup d'œil ce qui a changé."
    },
    {
     "id": "M2",
     "libelle": "Le récit de ses échanges avec Léna et Joël.",
     "court": "Le récit des échanges",
     "attendu": "pas",
     "feedback": "Long à lire entre deux réunions : Samuel a besoin du résultat, pas du récit."
    },
    {
     "id": "M3",
     "libelle": "Le chiffre provisoire, sa marge et sa date de consolidation.",
     "court": "Le chiffre et son statut",
     "attendu": "mettre",
     "feedback": "Ce qui reste incertain, et jusqu'à quand : c'est ce qui permet à Samuel de valider."
    },
    {
     "id": "M4",
     "libelle": "Le tableau complet de Léna, à analyser.",
     "court": "Le tableau brut",
     "attendu": "pas",
     "feedback": "Il obligerait Samuel à refaire l'analyse que Noa devait lui épargner."
    },
    {
     "id": "M5",
     "libelle": "Le retour de Joël, avec sa source.",
     "court": "Le retour de Joël",
     "attendu": "mettre",
     "feedback": "Le signal du terrain, cité avec sa source."
    },
    {
     "id": "M6",
     "libelle": "Une seule question à trancher : « J'envoie à Ariane, ou tu préfères relire ? »",
     "court": "Une seule question",
     "attendu": "mettre",
     "feedback": "La seule décision qu'on attend de Samuel, formulée pour qu'il réponde en un mot.",
     "clair": "**Rendre compte**, c'est dire à son responsable ce qui est fait, ce qui reste incertain et ce qu'on attend de lui."
    },
    {
     "id": "Q3",
     "libelle": "Il est 13 h. Samuel sort du comité à 14 h. Ariane doit avoir la fiche avant 16 h. Comment Noa la lui fait-il parvenir ?",
     "court": "Faire parvenir la fiche",
     "attendu": "samuel",
     "feedback": "Samuel valide en deux minutes à la sortie du comité, et Ariane a la fiche avant 16 h : le délai et la chaîne hiérarchique sont respectés. L'envoyer directement court-circuite Samuel, qui l'a commandée ; attendre jeudi manque le rendez-vous ; appeler en plein comité se justifie seulement en cas d'urgence réelle."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Mardi : trois messages avant midi",
     "illustration": "ILL-M04",
     "texte": "Mardi matin. Samuel est en comité de direction jusqu'à 14 h.",
     "repliques": [
      {
       "personnage": "Samuel",
       "canal": "sms",
       "texte": "« Ariane voit le président de Passerelles à 16 h. Mets à jour la fiche de qualification avec les derniers chiffres, qu'elle l'ait avant. »"
      },
      {
       "personnage": "Léna",
       "canal": "courriel",
       "texte": "« Bonjour, nos permanences ont reçu **312 demandes** d'aide aux démarches au 30 septembre. Le chiffre de la côte Ouest est provisoire, il sera consolidé jeudi. Cordialement, Léna »"
      },
      {
       "personnage": "Joël",
       "canal": "appel",
       "texte": "« Vos chiffres comptent les gens qui viennent. Mais Teiva, notre médiateur numérique, le voit à chaque permanence : beaucoup reviennent trois fois pour le même dossier, faute d'une pièce. Ça ne dit pas combien de démarches aboutissent. »"
      }
     ],
     "et_vous": "Vous a-t-on déjà confié, en deux lignes, un travail attendu le jour même ?"
    },
    {
     "type": "tri",
     "id": "commencer",
     "phase": "situation",
     "titre": "Une consigne de deux lignes",
     "competences": [
      "C04",
      "C05"
     ],
     "items": [
      "Q1"
     ],
     "categories": [
      {
       "id": "chiffres",
       "libelle": "Il remplace tout de suite les anciens chiffres par ceux de Léna.",
       "court": "Il remplace tout de suite les anciens chiffres par ceux de Léna."
      },
      {
       "id": "relire",
       "libelle": "Il relit la consigne et la fiche existante : à quoi servira-t-elle à 16 h ?",
       "court": "Il relit la consigne et la fiche existante : à quoi servira-t-elle à 16 h ?"
      },
      {
       "id": "appel",
       "libelle": "Il appelle Samuel pour lui demander ce qu'il veut exactement.",
       "court": "Il appelle Samuel pour lui demander ce qu'il veut exactement."
      },
      {
       "id": "attendre",
       "libelle": "Il attend 14 h pour en parler avec Samuel.",
       "court": "Il attend 14 h pour en parler avec Samuel."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : une consigne incomplète n'empêche pas d'avancer sur ce qui est clair.",
     "bilan_tout": "Noa sait à quoi servira la fiche. Reste à savoir ce que valent les informations qu'il a reçues."
    },
    {
     "type": "tri",
     "id": "avant",
     "phase": "situation",
     "titre": "Que met Noa dans la fiche ?",
     "competences": [
      "C17"
     ],
     "items": [
      "I1",
      "I2",
      "I3",
      "I4"
     ],
     "consigne": "Pour chaque information, que fait Noa ? Répondez avec vos repères : on vérifie juste après.",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "Le repère vient juste dessous. Gardez en tête les informations « à revoir ».",
     "bilan_tout": "Vos repères sont solides. La suite vous donne les mots pour les expliquer."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Ce que vaut une information",
     "competences": [
      "C17",
      "C20"
     ],
     "texte": "Au module 1, Noa a appris à vérifier qui a produit une information, de quand elle date, si elle est en vigueur. Avant de la transmettre, une question de plus : que vaut-elle ?",
     "regle": "Je transmets une information avec ce qu'elle vaut : certaine, provisoire ou témoignage.",
     "regle_clair": "Une information **provisoire** peut encore changer : je donne sa date et sa marge. Un **témoignage** raconte ce qu'une personne a vu : je le cite, je n'en fais pas un chiffre.",
     "points": [
      {
       "titre": "Une information certaine",
       "texte": "Vérifiée, datée, sourcée : je la présente comme acquise."
      },
      {
       "titre": "Une information provisoire",
       "texte": "Je la donne avec son statut et sa date : « 312, provisoire, consolidé jeudi »."
      },
      {
       "titre": "Un témoignage",
       "texte": "Je le cite avec sa source, sans en faire un chiffre : « selon l'association… »."
      },
      {
       "titre": "Activité ou résultat ?",
       "texte": "Compter les passages mesure l'activité. Savoir combien de démarches aboutissent mesure le résultat."
      }
     ]
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Le circuit d'une note",
     "competences": [
      "C04",
      "C18"
     ],
     "texte": "Une note suit un chemin. Chacun y a un rôle.",
     "regle": "Je rédige, mon responsable contrôle, la direction décide. Je rends compte à chaque étape, et j'alerte sans attendre si un risque ou un retard apparaît.",
     "regle_clair": "**Rendre compte**, c'est dire ce qui est fait, ce qui reste incertain, et ce qu'on attend. **Alerter**, c'est prévenir dès qu'un risque ou un retard apparaît, sans attendre l'échéance.",
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
       "texte": "Elle engage l'ÉLAN. Ce qu'elle décide s'applique à tous, y compris quand on n'est pas d'accord."
      }
     ]
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Exécuter les instructions, et ses limites",
     "competences": [
      "C04"
     ],
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
     "valider": "Repris de M2-E2-APP3 (M2 v0.4) : délibération n° 81, art. 22 ; loi du pays 2021-4. À faire valider par un expert statutaire."
    },
    {
     "type": "tri",
     "id": "apres",
     "reprend": "avant",
     "phase": "application",
     "titre": "Reprenez les informations à revoir",
     "competences": [
      "C17"
     ],
     "items": [
      "I1",
      "I2",
      "I3",
      "I4"
     ],
     "consigne": "Appliquez le repère. Les informations déjà justes restent en place, avec leur explication.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bouton_rien": "Continuer",
     "bilan": "Les quatre informations sont expliquées.",
     "bilan_tout": "Les quatre informations sont expliquées."
    },
    {
     "type": "tri",
     "id": "lena",
     "phase": "application",
     "titre": "Combien d'écart ?",
     "competences": [
      "C17",
      "C18"
     ],
     "items": [
      "Q2"
     ],
     "categories": [
      {
       "id": "question",
       "libelle": "Oui, par un court message : quelle ampleur d'écart peut-on attendre ?",
       "court": "Oui, par un court message : quelle ampleur d'écart peut-on attendre ?"
      },
      {
       "id": "silence",
       "libelle": "Non, il ne veut pas la déranger.",
       "court": "Non, il ne veut pas la déranger."
      },
      {
       "id": "fichier",
       "libelle": "Oui, il lui demande tout le fichier pour vérifier lui-même.",
       "court": "Oui, il lui demande tout le fichier pour vérifier lui-même."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on demande au service qui produit la donnée.",
     "bilan_tout": "Léna répond à 11 h 20 : « L'écart sera de vingt demandes au plus. »"
    },
    {
     "type": "tri",
     "id": "compte",
     "phase": "application",
     "titre": "Le message de Noa à Samuel",
     "competences": [
      "C04"
     ],
     "items": [
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6"
     ],
     "categories": [
      {
       "id": "mettre",
       "libelle": "Je le mets",
       "court": "Je le mets"
      },
      {
       "id": "pas",
       "libelle": "Je ne le mets pas",
       "court": "Je ne le mets pas"
      }
     ],
     "consigne": "Samuel lira ce message en sortant du comité, entre deux réunions. Que met Noa dedans ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Un compte rendu utile dit ce qui est fait, ce qui reste incertain et la décision attendue.",
     "bilan_tout": "Samuel sait en deux minutes ce qui a changé, ce qui reste incertain, d'où vient le signal terrain, et la seule décision qu'on attend de lui."
    },
    {
     "type": "tri",
     "id": "envoi",
     "phase": "application",
     "titre": "Tenir 16 h sans court-circuiter",
     "competences": [
      "C04",
      "C05"
     ],
     "items": [
      "Q3"
     ],
     "categories": [
      {
       "id": "directe",
       "libelle": "Il l'envoie directement à Ariane pour tenir le délai.",
       "court": "Il l'envoie directement à Ariane pour tenir le délai."
      },
      {
       "id": "samuel",
       "libelle": "Il l'envoie à Samuel avant 14 h, avec une seule question à trancher.",
       "court": "Il l'envoie à Samuel avant 14 h, avec une seule question à trancher."
      },
      {
       "id": "jeudi",
       "libelle": "Il attend jeudi pour la joindre à la note de cadrage.",
       "court": "Il attend jeudi pour la joindre à la note de cadrage."
      },
      {
       "id": "comite",
       "libelle": "Il appelle Samuel en plein comité.",
       "court": "Il appelle Samuel en plein comité."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : le délai pouvait être tenu en passant par Samuel.",
     "bilan_tout": "14 h 10, SMS de Samuel : « Clair, merci. Garde la phrase de Joël, c'est utile. Envoie à Ariane, mets-moi en copie. »"
    },
    {
     "type": "ordre",
     "id": "malia",
     "phase": "application",
     "titre": "Malia, devant deux versions",
     "competences": [
      "C04",
      "C17"
     ],
     "texte": "Le même mardi, Malia doit envoyer le calendrier des visites aux trois communes. Dans le dossier partagé, deux versions du calendrier existent.",
     "consigne": "Remettez les actions de Malia dans l'ordre : utilisez les flèches.",
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
       "libelle": "Faire valider l'envoi au nom de l'ÉLAN."
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
     "depart": [
      "B",
      "D",
      "A",
      "E",
      "C"
     ],
     "feedback_ok": "Malia vérifie avant d'agir et fait valider ce qui engage l'ÉLAN : les mêmes réflexes que Noa pour la fiche d'Ariane.",
     "feedback_ko": "On commence par vérifier la version validée : un calendrier dépassé ferait déplacer des gens pour rien. On fait valider avant d'écrire au nom de l'ÉLAN, puis on garde une trace.",
     "bouton": "Vérifier l'ordre"
    },
    {
     "type": "apport",
     "phase": "synthese",
     "titre": "Pour qui je travaille ?",
     "competences": [
      "C20"
     ],
     "texte": "16 h 45. Samuel transfère un mot d'Ariane : « Le président a apprécié qu'on distingue la fréquentation et les démarches qui aboutissent. Merci à Noa. »\n\nNoa n'a jamais vu les habitants qui iront à la permanence. Pourtant, son travail de mardi les concerne.",
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
     "encadre": "**Et dans votre poste ?** Qui est au bout de la chaîne de votre travail ? Le garder en tête aide à choisir ce qui compte vraiment quand tout semble urgent."
    }
   ],
   "fiches": [
    "FICHE-M2-E2"
   ],
   "suite": "M2-P2-FIN"
  },
  "M2-P2-FIN": {
   "id": "M2-P2-FIN",
   "type": "fin-section",
   "etape": "Épisode 2",
   "surtitre": "Bilan de l'épisode",
   "titre": "Mardi, c'est fait",
   "acquis": [
    {
     "titre": "Chercher à quoi sert un document",
     "texte": "Avant d'écrire, Noa a relu la consigne."
    },
    {
     "titre": "Dire ce que vaut chaque information",
     "texte": "312, provisoire, vingt demandes d'écart au plus ; Joël cité, sans chiffre inventé."
    },
    {
     "titre": "Passer par son responsable",
     "texte": "Un message court avant 14 h, une seule question."
    }
   ],
   "dossier": "Ariane a vu le président de Passerelles avec des chiffres fiables. Le président a retenu la différence entre fréquentation et démarches abouties.",
   "suite": "MENU"
  },
  "M2-P3": {
   "id": "M2-P3",
   "type": "page",
   "etape": "Épisode 3",
   "titre": "Je suis bloqué",
   "chapeau": "Trois blocages dans la même matinée, et la note attendue jeudi. Vous choisissez vers qui Noa se tourne, vous découvrez comment bien demander un appui, puis vous l'écrivez.",
   "competences": [
    "C18",
    "C03"
   ],
   "competences_lib": [
    {
     "code": "C18",
     "libelle": "J'agis en autonomie et je demande appui au bon moment."
    },
    {
     "code": "C03",
     "libelle": "Je connais mon statut, mes missions et mes limites."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application"
   ],
   "bouton_fin": "Terminer l'épisode",
   "categories": [
    {
     "id": "support",
     "libelle": "Le support numérique",
     "court": "Le support numérique"
    },
    {
     "id": "rh",
     "libelle": "Ana, au pôle ressources",
     "court": "Ana, au pôle ressources"
    },
    {
     "id": "producteur",
     "libelle": "Léna, qui produit la donnée",
     "court": "Léna, qui produit la donnée"
    },
    {
     "id": "samuel",
     "libelle": "Samuel",
     "court": "Samuel"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "L'espace documentaire du dossier Passerelles refuse de s'ouvrir.",
     "court": "L'accès refusé",
     "attendu": "support",
     "feedback": "Un problème d'accès se règle par le support : ni Samuel ni Léna ne peuvent ouvrir un droit informatique.",
     "guichet": "Le seul qui peut ouvrir un droit d'accès"
    },
    {
     "id": "B",
     "libelle": "Combien de jours de congé Noa a-t-il pour rentrer dans sa famille fin décembre ?",
     "court": "Les jours de congé",
     "attendu": "rh",
     "feedback": "Ana connaît les règles et la procédure. Samuel, lui, donnera son accord sur les dates, selon les besoins du service.",
     "guichet": "Les règles et la procédure RH"
    },
    {
     "id": "C",
     "libelle": "La note méthodologique de Léna ne définit pas ce qu'est une « démarche aboutie ».",
     "court": "La définition introuvable",
     "attendu": "producteur",
     "feedback": "Une définition se demande à celui qui produit l'indicateur. Samuel ne la connaît pas mieux que Noa.",
     "guichet": "Celle qui produit l'indicateur"
    },
    {
     "id": "Q1",
     "libelle": "Cela fait 40 minutes que Noa essaie d'ouvrir l'espace documentaire. Que fait-il ?",
     "court": "Après 40 minutes",
     "attendu": "support",
     "feedback": "Savoir s'arrêter fait partie de l'autonomie ; en disant ce qu'il a déjà essayé, Noa évite au support de tout recommencer. Un droit d'accès ne se trouve pas en cherchant ; les accès sont personnels, utiliser ceux d'une collègue est interdit ; attendre demain laisse le problème entier."
    },
    {
     "id": "T1",
     "libelle": "Savoir comment se fait une demande de remboursement de frais de déplacement.",
     "attendu": "doc",
     "feedback": "Une procédure interne se trouve d'abord sur l'intranet ; ensuite seulement, je demande au pôle ressources.",
     "court": "Un remboursement de frais"
    },
    {
     "id": "T2",
     "libelle": "L'imprimante du pôle ne répond plus.",
     "attendu": "collegue",
     "feedback": "Un problème matériel se signale au support, pas au responsable.",
     "court": "L'imprimante en panne"
    },
    {
     "id": "T3",
     "libelle": "Deux demandes urgentes tombent en même temps.",
     "attendu": "responsable",
     "feedback": "Arbitrer entre deux demandes concurrentes revient au responsable : c'est dans la fiche de poste.",
     "court": "Deux demandes urgentes"
    },
    {
     "id": "T4",
     "libelle": "Connaître les horaires d'ouverture de la salle communale.",
     "attendu": "externe",
     "feedback": "C'est la commune qui les fixe et les connaît : Élise, à l'accueil.",
     "court": "Les horaires de la salle"
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Mercredi : trois blocages",
     "illustration": "ILL-M05",
     "texte": "Mercredi matin. Noa veut avancer sa note de cadrage, attendue jeudi. Trois blocages dans la matinée : chacun peut la retarder.\n\n- **Un accès refusé.** L'espace documentaire du dossier Passerelles refuse de s'ouvrir.\n- **Une question de congés.** Noa voudrait poser une semaine fin décembre pour rentrer dans sa famille. Combien de jours a-t-il ? À qui demander ?\n- **Une définition introuvable.** « Démarche aboutie » : la note méthodologique de Léna ne la définit pas.",
     "et_vous": "Quand vous êtes bloqué, combien de temps cherchez-vous seul avant de demander ?"
    },
    {
     "type": "tri",
     "id": "avant",
     "phase": "situation",
     "titre": "Vers qui se tourner d'abord ?",
     "competences": [
      "C18",
      "C03"
     ],
     "items": [
      "A",
      "B",
      "C"
     ],
     "consigne": "Pour chaque blocage, vers qui Noa se tourne-t-il d'abord ? Répondez avec vos repères.",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "Le repère vient juste dessous. Gardez en tête les blocages « à revoir ».",
     "bilan_tout": "Vos repères sont solides. La suite vous dit comment formuler la demande."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Bien demander un appui",
     "competences": [
      "C18"
     ],
     "texte": "Au module 1, Noa a appris où chercher avant de demander. Quand la réponse n'est pas dans les documents, il faut savoir s'arrêter, et bien demander.",
     "regle": "Je cherche d'abord, en me fixant une limite de temps. Puis je m'adresse à celui qui détient l'information ou la décision, pas au plus disponible.",
     "regle_clair": "**Demander un appui**, ce n'est pas avouer un échec : c'est éviter de perdre du temps seul, ou d'en faire perdre aux autres avec une question floue.",
     "methode_titre": "Une demande qui obtient une réponse rapide",
     "methode": [
      "Le contexte : à quoi servira la réponse.",
      "Ce que j'ai déjà cherché.",
      "Une question précise.",
      "Le délai, et pourquoi."
     ],
     "points_titre": "Quatre sortes de demandes",
     "points": [
      {
       "titre": "Information",
       "texte": "Je cherche un fait : le service qui le produit."
      },
      {
       "titre": "Aide",
       "texte": "Je veux faire mieux : un collègue expérimenté."
      },
      {
       "titre": "Validation",
       "texte": "Quelqu'un doit décider : mon responsable."
      },
      {
       "titre": "Alerte",
       "texte": "Un risque ou un délai intenable : mon responsable, sans attendre."
      }
     ],
     "guichet": "Les accès sont personnels : je n'utilise jamais les identifiants d'un collègue, même pour dépanner."
    },
    {
     "type": "tri",
     "id": "apres",
     "reprend": "avant",
     "phase": "application",
     "titre": "Reprenez les blocages à revoir",
     "competences": [
      "C18"
     ],
     "items": [
      "A",
      "B",
      "C"
     ],
     "consigne": "Les blocages déjà justes restent en place, avec leur explication.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bouton_rien": "Continuer",
     "bilan": "Les trois blocages sont expliqués.",
     "bilan_tout": "Les trois blocages sont expliqués."
    },
    {
     "type": "tri",
     "id": "arret",
     "phase": "application",
     "titre": "Savoir s'arrêter",
     "competences": [
      "C18"
     ],
     "items": [
      "Q1"
     ],
     "categories": [
      {
       "id": "insiste",
       "libelle": "Il continue : il finira bien par trouver.",
       "court": "Il continue : il finira bien par trouver."
      },
      {
       "id": "support",
       "libelle": "Il s'arrête et écrit au support, en disant ce qu'il a déjà essayé.",
       "court": "Il s'arrête et écrit au support, en disant ce qu'il a déjà essayé."
      },
      {
       "id": "identifiants",
       "libelle": "Il demande à Malia ses identifiants.",
       "court": "Il demande à Malia ses identifiants."
      },
      {
       "id": "demain",
       "libelle": "Il travaille sur autre chose et réessaiera demain.",
       "court": "Il travaille sur autre chose et réessaiera demain."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : une matinée perdue sur un accès, c'est une matinée en moins pour la note.",
     "bilan_tout": "Le support répond vingt minutes plus tard : « Le dossier avait été déplacé. Vous n'étiez pas le seul bloqué : merci du signalement. »"
    },
    {
     "type": "message",
     "id": "lena",
     "phase": "application",
     "titre": "Le message de Noa à Léna",
     "competences": [
      "C18"
     ],
     "texte": "Noa écrit à Léna. Composez son message : choisissez une phrase pour chaque partie.",
     "brief": "Léna ne dépend pas de l'ÉLAN. Elle répondra si la question est claire et rapide à traiter. Noa lui dit « vous ».",
     "destinataire": "Léna",
     "objet": "Définition de « démarche aboutie »",
     "salutation": "Bonjour Léna,",
     "signature": "Merci beaucoup,\nNoa, l'ÉLAN",
     "synthese": "Une demande utile : le contexte, ce qui est déjà fait, une question précise, un délai.",
     "bouton": "Vérifier mon message",
     "parties": [
      {
       "id": "contexte",
       "libelle": "Le contexte",
       "options": [
        {
         "id": "A",
         "texte": "Je prépare pour l'ÉLAN la note de cadrage sur la permanence de Passerelles, attendue jeudi.",
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
     "reponse": {
      "personnage": "Léna",
      "adapte": "« Voici notre définition. Merci pour la question précise, c'est rare. »",
      "partiel": "« Bonjour, je veux bien vous aider, mais que cherchez-vous exactement ? »"
     }
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Quatre besoins nouveaux",
     "competences": [
      "C18"
     ],
     "items": [
      "T1",
      "T2",
      "T3",
      "T4"
     ],
     "categories": [
      {
       "id": "doc",
       "libelle": "Je cherche d'abord dans les documents",
       "court": "Je cherche d'abord dans les documents"
      },
      {
       "id": "collegue",
       "libelle": "Un collègue ou le support",
       "court": "Un collègue ou le support"
      },
      {
       "id": "responsable",
       "libelle": "Mon responsable",
       "court": "Mon responsable"
      },
      {
       "id": "externe",
       "libelle": "Un partenaire extérieur",
       "court": "Un partenaire extérieur"
      }
     ],
     "consigne": "Mêmes réflexes que ce matin. Vers qui Noa se tourne-t-il en premier ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication des besoins à revoir.",
     "bilan_tout": "Chercher d'abord, puis s'adresser à celui qui sait ou qui décide."
    },
    {
     "type": "liste",
     "phase": "application",
     "titre": "Trois blocages, trois interlocuteurs",
     "depuis": "apres",
     "competences": [
      "C18"
     ],
     "items": [
      "A",
      "B",
      "C"
     ],
     "texte": "Dans l'après-midi, les trois blocages se lèvent. Ana répond : « Ta demande passe par Samuel, qui vérifie les besoins du service, puis par nous. Je t'envoie le formulaire et la règle qui s'applique à ta situation. »",
     "entetes": [
      "Blocage",
      "Vers qui",
      "Pourquoi"
     ],
     "mention": "Pour le dossier Passerelles : le dossier partagé est de nouveau ouvert, et la note s'appuie sur une définition claire de la démarche aboutie.",
     "a_retenir": "Une demande précise obtient une réponse rapide. Et si je bloque depuis trop longtemps, je m'arrête et je demande."
    }
   ],
   "fiches": [
    "FICHE-M2-E3"
   ],
   "suite": "M2-P3-FIN"
  },
  "M2-P3-FIN": {
   "id": "M2-P3-FIN",
   "type": "fin-section",
   "etape": "Épisode 3",
   "surtitre": "Bilan de l'épisode",
   "titre": "Mercredi, c'est fait",
   "acquis": [
    {
     "titre": "Savoir s'arrêter",
     "texte": "Après 40 minutes, Noa a écrit au support, avec ce qu'il avait déjà essayé."
    },
    {
     "titre": "Choisir le bon interlocuteur",
     "texte": "Le support, Ana, Léna : chacun pour ce qu'il sait ou ce qu'il règle."
    },
    {
     "titre": "Poser une question précise",
     "texte": "Le contexte, ce qui est fait, la question, le délai."
    }
   ],
   "dossier": "Le dossier partagé est de nouveau ouvert, et la note s'appuie sur une définition claire de la démarche aboutie.",
   "suite": "MENU"
  },
  "M2-DEF": {
   "id": "M2-DEF",
   "type": "page",
   "etape": "Défi",
   "titre": "La matinée déraille",
   "chapeau": "Une matinée bien partie, une demande de la directrice qui bouscule tout, un responsable loin du bureau. Vous remettez la matinée dans l'ordre, puis vous prévenez, vous écrivez et vous vérifiez avant d'annoncer.",
   "competences": [
    "C05",
    "C04",
    "C03"
   ],
   "competences_lib": [
    {
     "code": "C05",
     "libelle": "J'organise mon activité et mes priorités."
    },
    {
     "code": "C04",
     "libelle": "J'agis dans le cadre hiérarchique."
    },
    {
     "code": "C03",
     "libelle": "Je connais mon statut, mes missions et mes limites."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application"
   ],
   "bouton_fin": "Terminer le défi",
   "items": [
    {
     "id": "S",
     "libelle": "Samuel est en visite chez Passerelles. Il lira son téléphone entre deux échanges. Quel SMS Noa lui envoie-t-il ?",
     "court": "Le SMS à Samuel",
     "attendu": "complet",
     "feedback": "Samuel sait tout en une lecture : ce qui arrive, ce que fait Noa, le nouveau délai. Il peut prévenir Ariane que la note arrivera à 14 h : personne n'est surpris. « Petit souci » l'inquiète sans lui permettre de décider ; se taire jusqu'à 11 h, c'est le laisser découvrir le retard à l'échéance."
    },
    {
     "id": "C",
     "libelle": "Ariane a demandé de « prévenir la commune » que la réunion de lancement est fixée au 14. La commune prête la salle ; elle n'a pas encore été consultée. Comment Noa s'y prend-il ?",
     "court": "La commune",
     "attendu": "demande",
     "feedback": "Noa exécute la consigne d'Ariane en vérifiant ce qui manquait : la commune garde la main sur sa salle, et Ariane sait où en est la date. L'ÉLAN ne donne pas d'instruction à une commune : si la salle est prise le 14, Ariane devra se dédire. Ne rien faire laisse la réunion en suspens, alors que la demande d'Ariane est légitime."
    },
    {
     "id": "K",
     "libelle": "Le même jeudi, à l'accueil, Cédric doit installer pour 10 h la salle de réunion demandée par Samuel. À 9 h 30, un habitant attend au guichet et Ariane lui demande de réserver un véhicule pour l'après-midi. Que fait Cédric ?",
     "court": "Cédric à l'accueil",
     "attendu": "prevenir",
     "feedback": "Un habitant au guichet ne peut pas attendre, et la réservation d'Ariane prend deux minutes. Ce qui peut glisser, c'est la salle : Cédric prévient Samuel avant, pas à l'heure dite. Faire attendre l'habitant n'est pas acceptable ; tout faire en même temps, c'est mal tout faire ; prévenir à 10 h, c'est trop tard."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Jeudi : tout était prévu",
     "illustration": "ILL-M06",
     "texte": "Jeudi, 8 h 55. Noa travaille de chez lui. La matinée était bien partie : la relecture avec Malia, en visio à 8 h 30, s'est bien passée ; il reste vingt minutes de corrections avant de remettre la note à Samuel, à 11 h. Samuel visite les lieux de la permanence chez Passerelles : il n'est joignable que par SMS.",
     "repliques": [
      {
       "personnage": "Ariane",
       "canal": "appel",
       "texte": "« Bonjour Noa. Le président de Passerelles me relance. Envoyez-moi **avant 11 h** un point écrit sur ce que l'ÉLAN peut apporter à son projet. Et prévenez la commune que la réunion de lancement est fixée au 14. »"
      }
     ],
     "et_vous": "Une demande de la direction qui bouscule votre matinée : à qui le dites-vous en premier ?"
    },
    {
     "type": "ordre",
     "id": "matinee",
     "phase": "situation",
     "titre": "9 h 02 : par quoi commencer ?",
     "competences": [
      "C05",
      "C04"
     ],
     "brief": "Deux demandes pour 11 h : la note de Samuel et le point d'Ariane. Noa ne peut pas tout faire en même temps.",
     "consigne": "Remettez les actions de Noa dans l'ordre : utilisez les flèches.",
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
     "depart": [
      "D",
      "B",
      "C",
      "A"
     ],
     "feedback_ok": "Samuel est prévenu avant tout le reste : il peut s'organiser. Le point d'Ariane passe en premier parce qu'elle l'attend avant 11 h ; la note suivra.",
     "feedback_ko": "Prévenez d'abord Samuel : la demande d'Ariane modifie le travail qu'il vous a confié, et il doit le savoir tout de suite. Ensuite, le point d'Ariane, attendu avant 11 h.",
     "bouton": "Vérifier l'ordre"
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Quand une urgence décale une échéance",
     "competences": [
      "C05",
      "C04"
     ],
     "texte": "La fiche de poste de Noa le dit : « Une demande directe d'Ariane qui modifie le travail confié est clarifiée avec Samuel. »",
     "regle": "Quand une urgence décale une échéance, je préviens tout de suite la personne qui attend mon travail, et je propose un nouveau délai.",
     "regle_clair": "Prévenir **tôt**, c'est laisser à l'autre le temps de s'organiser. Prévenir à l'heure de l'échéance, c'est le mettre devant le fait accompli.",
     "methode_titre": "Quand la matinée déraille",
     "methode": [
      "Je repère ce qui est urgent et ce qui peut glisser.",
      "Je préviens celui dont l'échéance glisse, avec un nouveau délai.",
      "Je traite l'urgent.",
      "Je vérifie avant d'annoncer ce qui ne dépend pas de moi."
     ],
     "encadre": "Sur site ou à distance, la règle est la même. À distance, je choisis le canal que l'autre lira tout de suite : ici, un SMS.",
     "valider": "Télétravail et travail à distance : texte vérifié le 11-11 (délibération 155) ; autorisé par l'employeur, pas un droit. Mise en œuvre à confirmer chez les employeurs visés."
    },
    {
     "type": "tri",
     "id": "sms",
     "phase": "application",
     "titre": "Prévenir Samuel",
     "competences": [
      "C05",
      "C04"
     ],
     "items": [
      "S"
     ],
     "categories": [
      {
       "id": "complet",
       "libelle": "« Ariane me demande un point écrit avant 11 h sur Passerelles. Je le fais d'abord ; la note de cadrage arrivera à 14 h au lieu de 11 h. Ça te va ? »",
       "court": "« Ariane me demande un point écrit avant 11 h sur Passerelles. Je le fais d'abord ; la note de cadrage arrivera à 14 h au lieu de 11 h. Ça te va ? »"
      },
      {
       "id": "flou",
       "libelle": "« Petit souci ce matin, je t'expliquerai. »",
       "court": "« Petit souci ce matin, je t'expliquerai. »"
      },
      {
       "id": "rien",
       "libelle": "Rien pour l'instant ; il expliquera à 11 h.",
       "court": "Rien pour l'instant ; il expliquera à 11 h."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez le SMS de Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : un message d'alerte dit ce qui se passe et propose un nouveau délai.",
     "bilan_tout": "9 h 07, Samuel : « OK pour 14 h. Merci de m'avoir prévenu. »"
    },
    {
     "type": "message",
     "id": "ariane",
     "phase": "application",
     "titre": "Le point écrit pour Ariane",
     "competences": [
      "C03",
      "C04"
     ],
     "texte": "Il est 10 h. Noa rédige le point pour Ariane : choisissez qui mettre en copie, puis une phrase pour chaque paragraphe.",
     "brief": "Ariane doit pouvoir dire précisément au président ce que l'ÉLAN apporte, et ce qui revient à Passerelles. Noa la vouvoie.",
     "destinataire": "Ariane",
     "objet": "Re : Point Passerelles avant 11 h",
     "salutation": "Bonjour Madame,",
     "signature": "Bien cordialement,\nNoa",
     "synthese": "Ce que fait l'ÉLAN, ce qui revient à Passerelles, les chiffres avec leur statut, ce qui reste à décider : Ariane peut répondre au président sans rien promettre de trop.",
     "bouton": "Vérifier mon message",
     "parties": [
      {
       "id": "copie",
       "champ": "copie",
       "libelle": "Qui Noa met-il en copie ?",
       "options": [
        {
         "id": "A",
         "texte": "Samuel",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Joël, de Passerelles",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Personne",
         "verdict": "risque"
        }
       ],
       "feedback": "Samuel a commandé la note et suit le dossier : il doit savoir ce que Noa envoie à la direction en son absence. Mettre Joël en copie ferait connaître une position de l'ÉLAN avant qu'Ariane l'ait arrêtée."
      },
      {
       "id": "elan",
       "libelle": "Ce que l'ÉLAN peut faire",
       "options": [
        {
         "id": "A",
         "texte": "L'ÉLAN peut réaliser le diagnostic des six lieux et coordonner Passerelles, la commune et la province.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "L'ÉLAN peut prendre en charge l'organisation de la permanence.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "L'ÉLAN peut aider de différentes façons.",
         "verdict": "partiel"
        }
       ],
       "feedback": "Ariane doit pouvoir dire précisément au président ce ce que l'ÉLAN apporte. « Prendre en charge l'organisation » promet ce qui revient à Passerelles."
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
       "feedback": "Dire ce qui ne revient pas à l'ÉLAN évite les malentendus. Une phrase vague sur le minibus serait comprise comme une promesse."
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
         "texte": "Reste à décider : l'appui de l'ÉLAN dans son programme, et la date de lancement, que je vérifie avec la commune avant de l'annoncer.",
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
       "feedback": "La consigne d'Ariane est légitime, mais l'ÉLAN ne fixe pas l'agenda d'une commune. Noa vérifie la date avant de l'annoncer, et il le dit."
      }
     ],
     "reponse": {
      "personnage": "Ariane",
      "adapte": "« Merci Noa, c'est exactement ce qu'il me fallait : je sais ce que nous apportons et ce que nous ne faisons pas. Proposez-moi deux dates quand la commune aura répondu. »",
      "partiel": "« Merci Noa. Avant de répondre au président, j'ai besoin de savoir précisément ce que l'ÉLAN fait et ce qui revient à Passerelles. Pouvez-vous me le préciser ? »"
     }
    },
    {
     "type": "tri",
     "id": "commune",
     "phase": "application",
     "titre": "Prévenir la commune, sans décider pour elle",
     "competences": [
      "C04",
      "C18"
     ],
     "items": [
      "C"
     ],
     "categories": [
      {
       "id": "annonce",
       "libelle": "Il écrit à Élise : « La réunion de lancement aura lieu le 14 dans votre salle. »",
       "court": "Il écrit à Élise : « La réunion de lancement aura lieu le 14 dans votre salle. »"
      },
      {
       "id": "demande",
       "libelle": "Il demande à Élise si la salle est disponible le 14, et propose une autre date au cas où. Il tient Ariane informée.",
       "court": "Il demande à Élise si la salle est disponible le 14, et propose une autre date au cas où. Il tient Ariane informée."
      },
      {
       "id": "attendre",
       "libelle": "Il ne fait rien : ce n'est pas à l'ÉLAN de fixer la date.",
       "court": "Il ne fait rien : ce n'est pas à l'ÉLAN de fixer la date."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : exécuter une consigne, c'est aussi vérifier ce qui manque.",
     "bilan_tout": "Élise répond dans l'heure : la salle est libre le 14."
    },
    {
     "type": "tri",
     "id": "cedric",
     "phase": "application",
     "titre": "À l'accueil, Cédric aussi",
     "competences": [
      "C05"
     ],
     "items": [
      "K"
     ],
     "categories": [
      {
       "id": "prevenir",
       "libelle": "Il reçoit l'habitant, réserve le véhicule, et prévient Samuel tout de suite si la salle risque de n'être prête qu'à 10 h 15.",
       "court": "Il reçoit l'habitant, réserve le véhicule, et prévient Samuel tout de suite si la salle risque de n'être prête qu'à 10 h 15."
      },
      {
       "id": "salle",
       "libelle": "Il installe d'abord la salle : c'était prévu en premier.",
       "court": "Il installe d'abord la salle : c'était prévu en premier."
      },
      {
       "id": "tout",
       "libelle": "Il fait les trois en même temps pour ne rien retarder.",
       "court": "Il fait les trois en même temps pour ne rien retarder."
      },
      {
       "id": "tard",
       "libelle": "Il traite l'habitant et le véhicule, et explique son retard à Samuel à 10 h.",
       "court": "Il traite l'habitant et le véhicule, et explique son retard à Samuel à 10 h."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Cédric.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : même réflexe que Noa, prévenir avant l'échéance.",
     "bilan_tout": "Mêmes réflexes que Noa, à un autre poste : traiter l'urgent, prévenir tôt celui qui est décalé."
    }
   ],
   "fiches": [
    "FICHE-M2-S"
   ],
   "suite": "M2-DEF-FIN"
  },
  "M2-DEF-FIN": {
   "id": "M2-DEF-FIN",
   "type": "fin-section",
   "etape": "Défi",
   "surtitre": "Bilan du défi",
   "titre": "La matinée est tenue",
   "acquis": [
    {
     "titre": "Prévenir tout de suite",
     "texte": "Un SMS à 9 h 05 : la note arrivera à 14 h. Samuel a pu prévenir Ariane."
    },
    {
     "titre": "Dire ce que fait l'ÉLAN, et ce qu'il ne fait pas",
     "texte": "Diagnostic et coordination pour l'ÉLAN ; décision, bénévoles et minibus pour Passerelles."
    },
    {
     "titre": "Vérifier avant d'annoncer",
     "texte": "Noa a demandé si la salle était libre le 14, sans fixer la date à la place de la commune."
    }
   ],
   "dossier": "Ariane sait ce que l'ÉLAN peut apporter à Passerelles. La note de cadrage est chez Samuel à 14 h, comme Noa l'avait annoncé.",
   "suite": "MENU"
  },
  "M2-EVA-INTRO": {
   "id": "M2-EVA-INTRO",
   "type": "narration",
   "etape": "Évaluation",
   "titre": "Vendredi : l'évaluation",
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
   "texte": "Samuel : « Réponds à Passerelles sur le planning des visites. »\nDans sa réponse, Joël demande aussi à l'ÉLAN de signer une attestation de partenariat pour une demande de subvention. Que fait Noa ?\n",
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
     "texte": "Je ne signe et ne promets rien qui engage l'ÉLAN : je transmets à mon responsable, avec le contexte et la décision attendue.",
     "fiche": "FICHE-M2-E2"
    },
    "E2": {
     "texte": "Je cherche d'abord dans les documents, puis je m'adresse à celui qui produit l'information ; mon responsable seulement s'il faut arbitrer.",
     "fiche": "FICHE-M2-E3"
    },
    "E3": {
     "texte": "Quand une urgence décale une échéance, je préviens tout de suite et je propose un nouveau délai.",
     "fiche": "FICHE-M2-S"
    }
   },
   "rappel": [
    {
     "titre": "Ce qui relève de mon autonomie",
     "texte": "Organiser, vérifier, proposer, signaler."
    },
    {
     "titre": "Ce que je fais valider",
     "texte": "Ce qui engage l'ÉLAN : signature, dépense, promesse, date imposée à un partenaire."
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
   "texte": "Jeudi, Noa est autorisé à télétravailler. Le réseau est coupé depuis une heure. Noa a promis un document à Malia pour midi. Que fait-il ?\n",
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
   "suite": "M2-EVA-RES",
   "note_expert": "Télétravail : texte vérifié le 11-11 (délibération 155) ; autorisé par l'employeur, pas un droit ; mise en œuvre à confirmer chez les employeurs visés."
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
   "etape": "Bilan",
   "titre": "Ce que Noa a appris cette semaine",
   "texte": "Vendredi. Ariane a lu la note de cadrage : l'ÉLAN fera le diagnostic des six lieux et coordonnera Passerelles, la commune et la province. En fin d'après-midi, Noa range ses documents. Voici ce qu'il sait faire maintenant.",
   "points": [
    {
     "titre": "Je sais ce qui relève de mon poste",
     "texte": "Ma fiche de poste me dit ce que je fais seul, ce que je prépare, et ce qui revient à d'autres.",
     "competence": "C03 — Statut, missions, limites"
    },
    {
     "titre": "J'identifie mes marges de manœuvre",
     "texte": "Je rends compte, et je fais valider ce qui engage l'ÉLAN.",
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
   "etape": "Bilan",
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
   "suite": "M2-SOR-LIBRE"
  },
  "M2-SOR-LIBRE": {
   "id": "M2-SOR-LIBRE",
   "type": "reponse-libre",
   "etape": "Bilan",
   "titre": "La semaine prochaine",
   "question": "Une chose que je ferai autrement la semaine prochaine :",
   "apres": "Notez-la quelque part où vous la reverrez lundi : c'est ainsi qu'elle devient une habitude.",
   "suite": "M2-SOR-RES"
  },
  "M2-SOR-RES": {
   "id": "M2-SOR-RES",
   "type": "ressources",
   "etape": "Bilan",
   "titre": "Mes ressources",
   "texte": "Les fiches du module sont rangées dans votre carnet : quatre fiches outils et une fiche de connaissances. Ouvrez-les pour les imprimer ou les enregistrer en PDF.",
   "fiches": [
    "FICHE-M2-E1",
    "FICHE-M2-E2",
    "FICHE-M2-E3",
    "FICHE-M2-S",
    "FICHE-M2-STATUT"
   ],
   "suite": "M2-FIN"
  },
  "M2-FIN": {
   "id": "M2-FIN",
   "type": "fin",
   "etape": "Bilan",
   "titre": "Bravo, la semaine de Noa est terminée",
   "texte": "Vous avez accompagné Noa pendant une semaine à l'ÉLAN. Il sait désormais où est sa place, et jusqu'où il peut agir seul.\n",
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
   "dossier": "Ariane a décidé : l'l'ÉLAN réalise le diagnostic des six lieux et coordonne les partenaires. Passerelles garde la décision, les bénévoles et le transport. Prochaine étape du dossier : la réunion de lancement.",
   "prochain": {
    "titre": "M3 — Je travaille avec les autres",
    "texte": "Lundi prochain, Noa anime sa première réunion avec Passerelles, la commune et la province. Trois organisations, trois calendriers, et personne n'est le chef de personne…"
   },
   "suite": "MENU"
  }
 },
 "fiches": {
  "FICHE-M2-E1": {
   "id": "FICHE-M2-E1",
   "type": "fiche",
   "code": "M2-E1",
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
  "FICHE-M2-E2": {
   "id": "FICHE-M2-E2",
   "type": "fiche",
   "code": "M2-E2",
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
  "FICHE-M2-E3": {
   "id": "FICHE-M2-E3",
   "type": "fiche",
   "code": "M2-E3",
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
   "exemple": "« Je prépare pour l'ÉLAN la note de cadrage sur la permanence de Passerelles, attendue jeudi. Votre note méthodologique définit les demandes reçues, pas les démarches abouties. Comment définissez-vous une démarche aboutie ? Une réponse d'ici demain midi me permettrait de tenir l'échéance. »",
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
  "FICHE-M2-S": {
   "id": "FICHE-M2-S",
   "type": "fiche",
   "code": "M2-S",
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
     "titre": "3. Je prévois mes jours de télétravail, s'ils sont autorisés",
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
  },
  "FICHE-M2-STATUT": {
   "id": "FICHE-M2-STATUT",
   "type": "fiche",
   "code": "M2-STATUT",
   "modele": "aide-memoire",
   "categorie": "connaissance",
   "titre": "Mon statut, en repères",
   "quand": "Quand vous vous demandez ce qui dépend de votre statut : recrutement, carrière, congés, fin de fonctions. Pour votre situation précise, votre gestionnaire RH.",
   "etapes": [
    {
     "titre": "Ce qui ne change pas",
     "texte": "Fonctionnaire, stagiaire ou contractuel : servir l'intérêt général avec neutralité, discrétion et secret professionnels, exécuter les instructions de son responsable ; le droit à la rémunération, aux congés, à la formation."
    },
    {
     "titre": "Ce qui dépend du statut",
     "texte": "La façon d'être recruté (concours ou contrat), le début des fonctions (un stage avant la titularisation, pour le fonctionnaire), la carrière (grade et avancement, ou durée du contrat), certaines règles de congés et de fin de fonctions."
    },
    {
     "titre": "Le télétravail",
     "texte": "Il est accordé par l'employeur, sur demande écrite : ce n'est pas un droit. Trois jours au plus par semaine, deux jours sur place au moins ; autorisation d'un an au plus, renouvelable ; un refus est motivé et précédé d'un entretien. Chaque employeur fixe ses propres règles."
    },
    {
     "titre": "Où trouver la règle",
     "texte": "Votre gestionnaire RH ; le site de la DRHFPNC ; les textes en vigueur sur Leginova."
    }
   ],
   "types": [
    {
     "titre": "Détachement",
     "texte": "Le fonctionnaire travaille hors de son corps d'origine, mais garde ses droits à l'avancement et à la retraite dans ce corps."
    },
    {
     "titre": "Mise à disposition",
     "texte": "Le fonctionnaire reste dans son corps et reste payé par son administration, mais travaille ailleurs."
    },
    {
     "titre": "Disponibilité",
     "texte": "Le fonctionnaire quitte un temps son administration. Il n'est plus payé et, sauf exception, n'acquiert plus de droits à l'avancement et à la retraite. Il conserve toutefois, jusqu'à 4 ans, ses droits pour la liquidation de sa pension (art. 91-II)."
    }
   ],
   "a_retenir": "Ces trois positions concernent les fonctionnaires. Contractuel ? Renseignez-vous auprès de votre employeur. Sources : délibération n° 81 du 24 juillet 1990 ; arrêté n° 1065, art. 75, 90-1 et 91 ; loi du pays n° 2021-4 ; délibération n° 155 du 19 mai 2021 (télétravail).",
   "reperes": [
    "Mon statut et ma catégorie",
    "Mon gestionnaire RH",
    "Le site de la DRHFPNC"
   ],
   "competences": [
    "C03"
   ],
   "version": "0.1",
   "valider": "Nouvelle fiche (A4, 11-11), reprise de M2-E1-APP2 et M2-E1-APP2B (M2 v0.4). Contenu statutaire à faire valider (délibération 81, arrêté 1065, délibération 230, loi du pays 2021-4). Ajouts du 12-11 (T05), nuance de l'art. 91-II (loi du pays 2024-10) et repères du télétravail (délibération 155)."
  }
 },
 "illustrations": {
  "ILL-M01": {
   "scene": "Noa et Malia au bureau du pôle, lundi matin",
   "personnages": "Noa, Malia",
   "alt": "Lundi matin au pôle études et projets. Malia pose son café sur le bureau de Noa et lui parle ; Noa l'écoute, assis à son poste."
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
  "ILL-M08": {
   "scene": "Noa range ses documents, vendredi 16 h",
   "personnages": "Noa",
   "alt": "Vendredi après-midi. Noa range ses documents à son bureau, détendu, la semaine terminée."
  }
 },
 "source": "Storyboard — M2 en pages v0.2.md"
};
