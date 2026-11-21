/* GÉNÉRÉ par build/build.py depuis « Storyboard — M4 en pages v0.3.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M4-PAGES",
  "type": "module",
  "cle": "m4-pages",
  "titre": "J'agis dans un cadre sécurisé",
  "code": "M4",
  "duree": "1 h 45 environ",
  "intro": "Prototype du module 4 en pages qui défilent. Noa est à l'ÉLAN depuis quelques semaines. Pour Passerelles, l'ÉLAN réalise le diagnostic des six lieux : tournée jeudi, fichier d'habitants accompagnés à manier avec soin. Du lundi au vendredi, vérifiez la règle, protégez l'information, utilisez les moyens du service à bon escient, repérez les risques et alertez.",
  "sections": [
   {
    "id": "ep1",
    "libelle": "Épisode 1",
    "jour": "Lundi",
    "savoir": "Trouver la bonne règle, à jour",
    "titre": "La bonne règle, à jour",
    "debut": "M4-P1",
    "duree": "15 min",
    "accroche": "Une note de déplacements vieille de deux ans, une version plus récente sur l'intranet, et une question que le texte ne règle pas."
   },
   {
    "id": "ep2",
    "libelle": "Épisode 2",
    "jour": "Mardi",
    "savoir": "Protéger l'information",
    "titre": "Ce fichier qui circule",
    "debut": "M4-P2",
    "duree": "22 min",
    "accroche": "Mardi, en télétravail. Un fichier d'habitants, un outil d'IA, un faux courriel et une photo qui en montre trop."
   },
   {
    "id": "ep3",
    "libelle": "Épisode 3",
    "jour": "Mercredi",
    "savoir": "Utiliser les moyens du service à bon escient",
    "titre": "Un besoin, un achat, un service fait",
    "debut": "M4-P3",
    "duree": "18 min",
    "accroche": "Mercredi, vu par Cédric. Un détour avec le pick-up, 500 questionnaires à imprimer, une livraison de 300."
   },
   {
    "id": "ep4",
    "libelle": "Épisode 4",
    "jour": "Jeudi matin",
    "savoir": "Repérer un risque et alerter",
    "titre": "Quelque chose ne va pas",
    "debut": "M4-P4",
    "duree": "16 min",
    "accroche": "Un câble dans le hall, un perron glissant, et des remarques qui reviennent."
   },
   {
    "id": "defi",
    "libelle": "Défi",
    "jour": "Jeudi",
    "savoir": "Le défi : une journée de tournée",
    "titre": "Une journée de tournée",
    "debut": "M4-DEF",
    "duree": "10 min",
    "accroche": "Une signature, une photo, un détour, un habitant blessé. Dans quel ordre, et que faire ?"
   },
   {
    "id": "eval",
    "libelle": "Évaluation",
    "jour": "Vendredi",
    "savoir": "L'évaluation du module",
    "titre": "L'évaluation",
    "debut": "M4-EVA-INTRO",
    "duree": "8 min",
    "accroche": "Six situations nouvelles pour vérifier vos réflexes."
   },
   {
    "id": "sortie",
    "libelle": "Bilan",
    "etiquette": "Mon bilan",
    "jour": "Mon bilan",
    "savoir": "Faire le point",
    "titre": "Ce que Noa a appris",
    "debut": "M4-SOR-1",
    "duree": "6 min",
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
   "roles": "Passerelles porte le projet et décide. L'ÉLAN qualifie, coordonne et appuie. L'ÉLAN ne finance pas le projet.",
   "jalons": [
    {
     "id": "tournee",
     "jour": "Lundi",
     "libelle": "La procédure de déplacement en vigueur est identifiée, la tournée de jeudi est organisée",
     "section": "ep1"
    },
    {
     "id": "fichier",
     "jour": "Mardi",
     "libelle": "Le fichier des habitants accompagnés est partagé sans les exposer",
     "section": "ep2"
    },
    {
     "id": "moyens",
     "jour": "Mercredi",
     "libelle": "Les questionnaires sont commandés par le circuit d'achat ; l'écart de livraison est signalé",
     "section": "ep3"
    },
    {
     "id": "securite",
     "jour": "Jeudi matin",
     "libelle": "Les risques de l'entrée sont signalés ; Léna sait vers qui se tourner",
     "section": "ep4"
    },
    {
     "id": "tourneefaite",
     "jour": "Jeudi",
     "libelle": "La première moitié de la tournée est faite, le compte rendu est remis à Samuel",
     "section": "defi"
    },
    {
     "id": "diagnostic",
     "jour": "Vendredi",
     "libelle": "Le dossier est prêt pour la rédaction du diagnostic",
     "section": "sortie"
    }
   ]
  },
  "personnages": {
   "Noa": "Chargé d'études et d'appui aux projets, l'ÉLAN",
   "Samuel": "Responsable du pôle études et projets, l'ÉLAN",
   "Malia": "Chargée d'études, marraine de Noa, l'ÉLAN",
   "Ana": "Pôle ressources et administration, l'ÉLAN",
   "Cédric": "Accueil et logistique, l'ÉLAN",
   "Teiva": "Médiateur numérique, association Passerelles",
   "Léna": "Chargée d'études statistiques, administration provinciale",
   "Joël": "Coordinateur de terrain, association Passerelles"
  }
 },
 "ecrans": {
  "M4-P1": {
   "id": "M4-P1",
   "type": "page",
   "etape": "Épisode 1",
   "titre": "La bonne règle, à jour",
   "chapeau": "Samuel confie à Noa l'organisation de la tournée de jeudi dans les six lieux. Malia lui donne sa note de procédure. Vous repérez la version qui fait foi, vous remettez les étapes dans l'ordre, vous décidez à qui poser la question que le texte ne règle pas, puis vous prévenez Malia.",
   "competences": [
    "C09",
    "C17"
   ],
   "competences_lib": [
    {
     "code": "C09",
     "libelle": "J'identifie et j'applique les règles utiles à mon activité."
    },
    {
     "code": "C17",
     "libelle": "Je recherche, je vérifie et j'actualise une information."
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
     "id": "vigueur",
     "libelle": "La version à utiliser",
     "court": "À utiliser"
    },
    {
     "id": "ancienne",
     "libelle": "Une version dépassée",
     "court": "Dépassée"
    },
    {
     "id": "verifier",
     "libelle": "Un document à vérifier avant tout usage",
     "court": "À vérifier"
    }
   ],
   "items": [
    {
     "id": "D1",
     "libelle": "La note papier de Malia. Elle date de plus de deux ans et n'indique ni auteur ni statut.",
     "court": "La note de Malia",
     "attendu": "ancienne",
     "feedback": "Une note sans auteur ni statut, et plus ancienne qu'une version publiée, ne fait plus foi. Malia la gardait de bonne foi : le texte a changé depuis."
    },
    {
     "id": "D2",
     "libelle": "La procédure publiée sur l'intranet. Modifiée il y a trois mois, signée du pôle ressources, mention « en vigueur ».",
     "court": "La version de l'intranet",
     "attendu": "vigueur",
     "feedback": "Date récente, auteur identifié, statut affiché : c'est la version à suivre. Je note sa date, pour pouvoir la citer."
    },
    {
     "id": "D3",
     "libelle": "Un courriel d'un collègue qui résume « comment ça se passait l'an dernier ».",
     "court": "Le courriel d'un collègue",
     "attendu": "verifier",
     "feedback": "Un résumé n'est pas la source. Il peut aider à comprendre, pas à décider. Je retourne au texte et, au besoin, je demande."
    },
    {
     "id": "P1",
     "libelle": "Un partenaire vient aussi en tournée, avec son propre véhicule. La procédure parle des véhicules de l'ÉLAN, pas de celui d'un partenaire.",
     "court": "Le véhicule du partenaire",
     "attendu": "responsable",
     "feedback": "Le texte ne répond pas à cette question précise. Je ne devine pas : je la pose à mon responsable, qui sait s'il faut interroger les ressources humaines ou le service juridique."
    },
    {
     "id": "T1",
     "libelle": "Une consigne écrite il y a un an et une consigne orale de ce matin se contredisent sur la validation d'un déplacement.",
     "court": "Écrit d'il y a un an, oral de ce matin",
     "attendu": "demander",
     "feedback": "Un écrit ancien et un oral ne se départagent pas à l'instinct. Je demande à mon responsable laquelle s'applique et je note sa réponse."
    },
    {
     "id": "T2",
     "libelle": "Deux versions de la même procédure sont sur l'intranet : l'une du mois dernier, mention « en vigueur » ; l'autre de l'an dernier, mention « remplacée ».",
     "court": "Deux versions sur l'intranet",
     "attendu": "recente",
     "feedback": "La date et le statut tranchent : la version en vigueur s'applique. Je l'indique à ceux qui utilisent encore l'ancienne."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Lundi : la tournée de jeudi",
     "illustration": "ILL-Q01",
     "texte": "Lundi, 8 h 10. Le diagnostic des six lieux de Passerelles commence jeudi, par une tournée. Samuel confie l'organisation des déplacements à Noa. Malia, sa marraine, ouvre son classeur.",
     "repliques": [
      {
       "personnage": "Samuel",
       "canal": "oral",
       "texte": "« Jeudi, on visite les six lieux. Tu organises les déplacements : qui part, avec quoi, et qui valide. »"
      },
      {
       "personnage": "Malia",
       "canal": "oral",
       "texte": "« Tiens, la note de procédure. Je la garde dans mon classeur, elle m'a toujours servi. »"
      }
     ],
     "et_vous": "Quand avez-vous suivi une consigne « qu'on avait toujours faite comme ça » ?"
    },
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Sur l'intranet",
     "illustration": "ILL-Q02",
     "texte": "Noa cherche le formulaire de réservation d'un véhicule. L'intranet affiche une procédure de déplacement plus récente que la note de Malia. Elle change le circuit de validation."
    },
    {
     "type": "tri",
     "id": "version",
     "phase": "situation",
     "titre": "Quel document fait foi ?",
     "competences": [
      "C09",
      "C17"
     ],
     "items": [
      "D1",
      "D2",
      "D3"
     ],
     "consigne": "Pour chaque document, que fait Noa ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Un document fait foi par sa date, son auteur et son statut. Un souvenir ou un résumé ne suffit pas.",
     "bilan_tout": "Noa tient la bonne version, avec sa date. Il reste à dire à Malia que sa note est remplacée.",
     "valider": "Principes de l'action administrative (légalité, égalité, traçabilité) : aucun texte calédonien unique ; la délibération 81 (art. 20 à 22) donne des repères. Procédures internes : propres à chaque employeur."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Agir dans les règles",
     "competences": [
      "C09",
      "C17"
     ],
     "texte": "Noa a la bonne version. Reste à savoir pourquoi on vérifie, et où.",
     "regle": "Avant d'agir, je cherche la règle ou la procédure qui s'applique, je vérifie qu'elle est à jour et qui l'a publiée, et je demande quand elle ne répond pas à ma question.",
     "regle_clair": "Une **procédure** est la façon prévue de faire quelque chose dans mon service. Elle est **en vigueur** tant qu'une version plus récente ne la remplace pas.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M4-01"
      }
     ],
     "methode_titre": "Quatre questions avant d'agir",
     "methode": [
      "Quelle règle ou procédure s'applique à ma situation ?",
      "Est-elle à jour ? Je regarde la date, l'auteur et le statut.",
      "Que dit-elle, exactement, sur ce que je dois faire ?",
      "Si elle ne répond pas, je demande à mon responsable avant d'agir."
     ],
     "guichet": "Les procédures et les circuits varient selon l'employeur. En cas de doute, je demande à mon responsable qui est le référent chez moi.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Pourquoi ces réflexes.** Une administration agit dans le cadre des textes, traite chacun de la même façon et garde la trace de ce qu'elle décide. **Où vérifier.** L'intranet de mon employeur, mon responsable et, pour les textes officiels de Nouvelle-Calédonie, Leginova. Le module 1 montre comment s'articulent loi du pays, délibération et arrêté."
     },
     "valider": "Principes d'action administrative (C09-S1) et hiérarchie des règles (C09-S3, vue en M1) : à faire valider par un juriste. Leginova (ancien Juridoc) : vérifier le nom et l'adresse en vigueur."
    },
    {
     "type": "ordre",
     "id": "etapes",
     "phase": "application",
     "titre": "Les étapes avant de réserver",
     "competences": [
      "C09"
     ],
     "texte": "Noa a la version de l'intranet. Il veut réserver sans refaire d'erreur.",
     "consigne": "Remettez les actions de Noa dans l'ordre : utilisez les flèches.",
     "options": [
      {
       "id": "A",
       "libelle": "Repérer la version en vigueur, avec sa date."
      },
      {
       "id": "B",
       "libelle": "Lire ce qu'elle prévoit pour un déplacement à plusieurs."
      },
      {
       "id": "C",
       "libelle": "Repérer ce que le texte ne dit pas, et poser la question à son responsable."
      },
      {
       "id": "D",
       "libelle": "Réserver selon le circuit, et garder la trace de la validation."
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
      "A",
      "C"
     ],
     "feedback_ok": "Noa vérifie la source, lit ce qu'elle dit, repère ce qu'elle ne dit pas, puis agit en gardant la trace. Il sait pourquoi il fait chaque pas.",
     "feedback_ko": "On identifie d'abord la bonne version, on lit ce qu'elle prévoit, on repère le point sans réponse et on le soumet, puis on agit. La trace vient en dernier, une fois la validation obtenue.",
     "bouton": "Vérifier l'ordre"
    },
    {
     "type": "tri",
     "id": "question",
     "phase": "application",
     "titre": "Le véhicule d'un partenaire",
     "competences": [
      "C09",
      "C18"
     ],
     "items": [
      "P1"
     ],
     "categories": [
      {
       "id": "responsable",
       "libelle": "Il pose la question à son responsable, qui orientera vers les ressources humaines ou le service juridique si besoin.",
       "court": "Il demande à son responsable"
      },
      {
       "id": "devine",
       "libelle": "Il considère que ce qui vaut pour un véhicule de l'ÉLAN vaut aussi pour celui du partenaire.",
       "court": "Il applique par analogie"
      },
      {
       "id": "ancien",
       "libelle": "Il suit ce qui se faisait l'an dernier, comme le dit la note de Malia.",
       "court": "Il refait comme avant"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Quand le texte ne répond pas, je ne devine pas et je ne me contente pas de l'usage : je demande à qui sait.",
     "bilan_tout": "Samuel répond dans l'heure et se renseigne auprès du pôle ressources. Noa sait où en est la règle.",
     "valider": "Circuit réel de validation d'un déplacement avec un véhicule de partenaire : propre à chaque employeur. Interlocuteur (RH, juridique) à confirmer."
    },
    {
     "type": "recit",
     "phase": "application",
     "titre": "Malia et la note",
     "illustration": "ILL-Q01",
     "texte": "Midi. Noa a la bonne version et son circuit de validation. Il revient vers Malia, qui range sa note dans son classeur. Elle ne sait pas encore qu'elle est remplacée."
    },
    {
     "type": "message",
     "id": "malia",
     "phase": "application",
     "titre": "Dire à Malia que sa note est remplacée",
     "competences": [
      "C09",
      "C17"
     ],
     "texte": "Noa le lui dit de vive voix. Composez ce qu'il lui dit : choisissez une phrase pour chaque partie.",
     "brief": "Malia l'a guidé depuis son arrivée. Noa la tutoie.",
     "destinataire": "Malia",
     "objet": "La procédure de déplacement a changé",
     "salutation": "Malia,",
     "signature": "Noa",
     "synthese": "Un fait, une preuve, une proposition qui ne met personne en faute.",
     "bouton": "Vérifier mon message",
     "parties": [
      {
       "id": "fait",
       "libelle": "Ce que j'ai constaté",
       "options": [
        {
         "id": "A",
         "texte": "L'intranet affiche une procédure de déplacement modifiée il y a trois mois, et le circuit de validation a changé.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Ta note n'est plus bonne, tu aurais dû vérifier sur l'intranet.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Je crois que ça a un peu changé, je ne suis pas sûr.",
         "verdict": "risque"
        }
       ],
       "feedback": "Un fait vérifiable, sans reproche : Malia peut aller voir elle-même."
      },
      {
       "id": "preuve",
       "libelle": "Où elle peut le vérifier",
       "options": [
        {
         "id": "A",
         "texte": "La version porte la date, le nom du pôle ressources et la mention « en vigueur » : je te mets le lien.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Demande à Samuel, il te le confirmera.",
         "verdict": "partiel"
        },
        {
         "id": "C",
         "texte": "Tu verras bien à la prochaine tournée.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Un lien et trois indices (date, auteur, statut) : Malia vérifie en une minute."
      },
      {
       "id": "proposition",
       "libelle": "Ce que je propose",
       "options": [
        {
         "id": "A",
         "texte": "Si tu veux, on remplace ta note par la nouvelle version et on prévient les collègues qui l'ont aussi.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Je préviens tout le monde que ta note est périmée.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Garde ta note, on verra.",
         "verdict": "risque"
        }
       ],
       "feedback": "On répare ensemble, et on évite que d'autres suivent la note périmée."
      }
     ]
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Deux consignes, une journée",
     "competences": [
      "C09",
      "C18"
     ],
     "items": [
      "T1",
      "T2"
     ],
     "categories": [
      {
       "id": "demander",
       "libelle": "Je demande à mon responsable laquelle s'applique",
       "court": "Je demande"
      },
      {
       "id": "recente",
       "libelle": "J'applique la plus récente",
       "court": "La plus récente"
      },
      {
       "id": "lautre",
       "libelle": "J'applique celle qui m'arrange",
       "court": "Celle qui m'arrange"
      }
     ],
     "consigne": "Pour chaque situation, que faites-vous ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Quand deux textes se contredisent, je cherche les dates et le statut ; si le doute reste, je demande.",
     "bilan_tout": "Vous savez quoi faire quand deux consignes se contredisent."
    }
   ],
   "fiches": [
    "FICHE-M4-E1"
   ],
   "suite": "M4-P1-FIN"
  },
  "M4-P1-FIN": {
   "id": "M4-P1-FIN",
   "type": "fin-section",
   "etape": "Épisode 1",
   "surtitre": "Bilan de l'épisode",
   "titre": "Lundi, c'est fait",
   "acquis": [
    {
     "titre": "Repérer la version qui fait foi",
     "texte": "La procédure de l'intranet remplace la note de Malia ; Noa a noté sa date."
    },
    {
     "titre": "Ne pas deviner",
     "texte": "Pour le véhicule du partenaire, Noa a posé la question à Samuel."
    },
    {
     "titre": "Corriger sans reprocher",
     "texte": "Malia a remplacé sa note et prévenu deux collègues."
    }
   ],
   "dossier": "La procédure de déplacement en vigueur est identifiée. La tournée de jeudi s'organise, véhicule du partenaire mis à part.",
   "suite": "M4-P2"
  },
  "M4-P2": {
   "id": "M4-P2",
   "type": "page",
   "etape": "Épisode 2",
   "titre": "Ce fichier qui circule",
   "chapeau": "Mardi, Noa travaille à distance. Teiva lui envoie le tableau des habitants accompagnés. Léna propose de le résumer avec un outil d'IA, un faux courriel de l'informatique arrive, et une photo publiée montre un écran lisible. Vous protégez l'information, une demande après l'autre.",
   "competences": [
    "C10",
    "C17"
   ],
   "competences_lib": [
    {
     "code": "C10",
     "libelle": "Je protège les données, les informations et mes usages numériques."
    },
    {
     "code": "C17",
     "libelle": "Je recherche, je vérifie et j'actualise une information."
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
     "id": "sensible",
     "libelle": "Une donnée particulièrement sensible",
     "court": "Sensible"
    },
    {
     "id": "personnelle",
     "libelle": "Une donnée personnelle",
     "court": "Personnelle"
    },
    {
     "id": "libre",
     "libelle": "Pas une donnée personnelle",
     "court": "Pas personnelle"
    }
   ],
   "items": [
    {
     "id": "F1",
     "libelle": "Le nom et le prénom de chaque habitant.",
     "court": "Nom et prénom",
     "attendu": "personnelle",
     "feedback": "Un nom identifie une personne : c'est une donnée personnelle. Je ne la partage qu'avec qui en a besoin."
    },
    {
     "id": "F2",
     "libelle": "Le numéro de téléphone de chaque habitant.",
     "court": "Téléphone",
     "attendu": "personnelle",
     "feedback": "Un numéro permet de joindre une personne : même protection qu'un nom. Il ne circule pas par la messagerie personnelle."
    },
    {
     "id": "F3",
     "libelle": "La difficulté qui a amené l'habitant à Passerelles (santé, logement, démarche à faire).",
     "court": "La situation de l'habitant",
     "attendu": "sensible",
     "feedback": "La situation personnelle d'une personne demande une attention particulière : en cas de doute, je la traite comme sensible. Je ne la mets jamais dans un outil non autorisé."
    },
    {
     "id": "F4",
     "libelle": "Le nombre d'habitants accompagnés par lieu, sans aucun nom.",
     "court": "Le total par lieu",
     "attendu": "libre",
     "feedback": "Un total sans nom n'identifie personne : il peut se partager, c'est ce que Léna peut recevoir."
    },
    {
     "id": "A1",
     "libelle": "Léna propose de coller tout le tableau dans un outil d'intelligence artificielle en ligne pour obtenir un résumé.",
     "court": "Léna et l'outil d'IA",
     "attendu": "refuser",
     "feedback": "Ce que je colle dans un outil en ligne sort de chez moi. Un fichier d'habitants n'y va pas. Je refuse, simplement, et je propose une version sans noms."
    },
    {
     "id": "C1",
     "libelle": "Un courriel « de l'informatique » demande de confirmer le mot de passe avant midi, sous peine de blocage du compte.",
     "court": "Le courriel de l'informatique",
     "attendu": "suspect",
     "feedback": "Urgence, menace, demande de mot de passe : trois signaux. L'informatique de mon employeur ne me demande pas mon mot de passe par courriel. Je ne réponds pas, je signale."
    },
    {
     "id": "C2",
     "libelle": "Le courriel est signé d'un prénom que Noa ne connaît pas, avec une adresse d'expéditeur inhabituelle.",
     "court": "L'expéditeur inconnu",
     "attendu": "suspect",
     "feedback": "Un expéditeur inhabituel suffit à douter. Je compare avec les courriels habituels, je ne clique sur rien."
    },
    {
     "id": "C3",
     "libelle": "Le courriel de Teiva, reçu ce matin sur la messagerie professionnelle, avec le tableau en pièce jointe.",
     "court": "Le courriel de Teiva",
     "attendu": "normal",
     "feedback": "Expéditeur connu, canal habituel, pièce attendue : rien d'anormal. Je reste attentif à ce que je fais de la pièce jointe."
    },
    {
     "id": "P1",
     "libelle": "Une photo de la réunion est publiée sur un réseau social. On y lit les noms de trois habitants sur l'écran du fond.",
     "court": "La photo publiée",
     "attendu": "retrait",
     "feedback": "Des noms d'habitants sont visibles : la photo doit être retirée. Je demande le retrait à la personne qui l'a publiée et je préviens mon responsable."
    },
    {
     "id": "T1",
     "libelle": "Un partenaire demande les statistiques de fréquentation des six lieux.",
     "court": "Les statistiques du partenaire",
     "attendu": "sans_noms",
     "feedback": "Des totaux n'identifient personne : je les partage avec l'outil de mon employeur."
    },
    {
     "id": "T2",
     "libelle": "La commune demande la liste nominative des habitants d'un lieu pour préparer un accueil.",
     "court": "La liste nominative de la commune",
     "attendu": "acces",
     "feedback": "Une liste de noms n'est pas à envoyer en bloc : je m'assure du besoin réel, de l'accord de mon responsable, et je limite l'accès."
    },
    {
     "id": "T3",
     "libelle": "Un partenaire demande une photo de l'atelier, où deux participants sont reconnaissables.",
     "court": "La photo de l'atelier",
     "attendu": "accord",
     "feedback": "Des personnes reconnaissables : je demande d'abord leur accord et celui de mon responsable, puis je choisis ce qui est lisible."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Mardi : télétravail",
     "illustration": "ILL-Q03",
     "texte": "Mardi, 9 h 15. Noa télétravaille, le jour qui a été décalé cette semaine. Teiva lui envoie le tableau des habitants que Passerelles accompagne : noms, téléphones, situations. Le diagnostic en a besoin pour choisir les lieux.",
     "repliques": [
      {
       "personnage": "Teiva",
       "canal": "courriel",
       "texte": "« Voici le tableau, mis à jour hier soir. Les six lieux y sont. Fais-en bon usage. »"
      }
     ],
     "et_vous": "Qu'est-ce que vous gardez toujours pour vous, même au travail ?"
    },
    {
     "type": "tri",
     "id": "donnees",
     "phase": "situation",
     "titre": "Dans le tableau de Teiva",
     "competences": [
      "C10"
     ],
     "items": [
      "F1",
      "F2",
      "F3",
      "F4"
     ],
     "consigne": "Pour chaque information du tableau, de quelle nature est-elle ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je repère ce qui identifie une personne, et ce qui touche à sa situation : c'est là que j'ai le plus de précautions à prendre.",
     "bilan_tout": "Noa sait ce que contient le fichier et ce qu'il peut partager sans risque.",
     "valider": "Classement des données (personnelle, sensible) : à faire valider par un expert en protection des données. La loi Informatique et libertés est applicable en Nouvelle-Calédonie (art. 125) ; ne pas parler de RGPD ni de délai de notification."
    },
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Trois sollicitations",
     "texte": "Dans la matinée, trois sollicitations arrivent. Léna propose de résumer le tableau avec un outil d'IA en ligne. Un courriel « de l'informatique » demande le mot de passe. Et une photo de la réunion de la veille circule sur un réseau social.",
     "repliques": [
      {
       "personnage": "Léna",
       "canal": "messagerie",
       "texte": "« Envoie-moi le tableau, je le colle dans mon assistant en ligne, j'ai le résumé en deux minutes. »"
      }
     ]
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Protéger l'information",
     "competences": [
      "C10"
     ],
     "texte": "Noa sait ce que contient le fichier. Il reste à savoir ce qu'il peut en faire.",
     "regle": "Je ne partage que l'utile, avec qui en a besoin, par l'outil prévu par mon employeur. Je n'envoie aucune donnée de personnes à un outil non autorisé. Je vérifie avant de cliquer ou de publier.",
     "regle_clair": "Une **donnée personnelle** permet d'identifier une personne. Un **outil autorisé** est celui que mon employeur met à ma disposition pour travailler. **Hameçonner**, c'est tenter de me faire livrer mon mot de passe par un faux message.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M4-02"
      }
     ],
     "methode_titre": "Cinq réflexes",
     "methode": [
      "Je repère ce qui identifie une personne ou touche à sa situation.",
      "Je partage par l'outil de mon employeur, avec un accès limité, sans la messagerie personnelle.",
      "Je ne colle aucune donnée de personnes dans un outil d'IA non autorisé ; ce que l'IA répond, je le vérifie avant de l'utiliser.",
      "Je ne réponds pas à une demande de mot de passe ; je signale le message.",
      "Hors du service, je ne publie rien qui expose mon travail, mes collègues ou les usagers."
     ],
     "guichet": "Les outils autorisés, la messagerie à utiliser et la personne à prévenir en cas d'incident varient selon l'employeur. Je demande à mon responsable qui est le référent chez moi.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Le secret et la discrétion.** Ce que je sais par mes fonctions n'est pas à diffuser : délibération n° 81 du 24 juillet 1990, art. 20 et 21. **Les données personnelles.** La loi Informatique et libertés s'applique en Nouvelle-Calédonie (art. 125). **Le travail à distance.** Il est autorisé, ce n'est pas un droit ; mon employeur fixe ses règles de sécurité. **L'IA et la cybersécurité.** Ce sont des bonnes pratiques, pas des règles communes à tous les employeurs."
     },
     "valider": "Données personnelles (loi 78-17, art. 125), secret (délibération 81, art. 20-21), télétravail (loi du pays 2021-3, délibération 155) : à faire valider. IA et cybersécurité : bonnes pratiques, aucune règle calédonienne trouvée ; ne pas les présenter comme des règles."
    },
    {
     "type": "tri",
     "id": "ia",
     "phase": "application",
     "titre": "La proposition de Léna",
     "competences": [
      "C10"
     ],
     "items": [
      "A1"
     ],
     "categories": [
      {
       "id": "refuser",
       "libelle": "Il refuse de coller le tableau dans l'outil en ligne et propose à Léna le total par lieu, sans noms.",
       "court": "Il refuse, propose le total"
      },
      {
       "id": "accepter",
       "libelle": "Il lui envoie le tableau en retirant seulement les numéros de téléphone.",
       "court": "Il retire les téléphones"
      },
      {
       "id": "partage",
       "libelle": "Il lui envoie le tableau par sa messagerie personnelle, pour éviter les filtres de l'employeur.",
       "court": "Il envoie par sa messagerie personnelle"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Un outil en ligne n'est pas un collègue de confiance : ce que j'y colle n'est plus sous mon contrôle.",
     "bilan_tout": "Léna reçoit les totaux par lieu et le dit à son responsable. Le résumé sera fait sans exposer personne.",
     "valider": "Règles d'usage de l'IA publiées par un employeur public calédonien : aucune trouvée (corpus M4, n° 6). Le module enseigne la prudence, pas une règle."
    },
    {
     "type": "tri",
     "id": "courriel",
     "phase": "application",
     "titre": "Le courriel de l'informatique",
     "competences": [
      "C10",
      "C17"
     ],
     "items": [
      "C1",
      "C2",
      "C3"
     ],
     "categories": [
      {
       "id": "suspect",
       "libelle": "Un signal d'alerte",
       "court": "Suspect"
      },
      {
       "id": "normal",
       "libelle": "Rien d'anormal",
       "court": "Normal"
      }
     ],
     "consigne": "Pour chacun, est-ce un signal d'alerte ou rien d'anormal ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Urgence, menace, expéditeur inconnu, demande de mot de passe : un seul de ces signaux suffit à ne pas répondre.",
     "bilan_tout": "Noa ne répond pas, signale le courriel au référent informatique de l'ÉLAN et le supprime ensuite.",
     "valider": "Circuit de signalement d'un courriel suspect : propre à chaque employeur. Réflexes issus de cybermalveillance.gouv.fr (bonne pratique)."
    },
    {
     "type": "tri",
     "id": "photo",
     "phase": "application",
     "titre": "La photo publiée",
     "competences": [
      "C10"
     ],
     "items": [
      "P1"
     ],
     "categories": [
      {
       "id": "retrait",
       "libelle": "Il demande le retrait de la photo à la personne qui l'a publiée, et prévient son responsable.",
       "court": "Il demande le retrait"
      },
      {
       "id": "rien",
       "libelle": "Il ne dit rien : la photo a été prise dans le cadre du travail, ce n'est pas son affaire.",
       "court": "Il ne dit rien"
      },
      {
       "id": "commentaire",
       "libelle": "Il écrit un commentaire public pour signaler l'erreur.",
       "court": "Il commente publiquement"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je demande le retrait en privé, j'informe mon responsable, et je n'amplifie pas l'exposition.",
     "bilan_tout": "La photo est retirée dans l'heure. Noa sait comment signaler un incident, sans qualifier ni accuser.",
     "valider": "Réseaux sociaux (réserve, obligations des agents) : délibération 81 et circulaire DRHFPNC. Procédure de signalement d'un incident : propre à chaque employeur."
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Trois demandes de transmission",
     "competences": [
      "C10"
     ],
     "items": [
      "T1",
      "T2",
      "T3"
     ],
     "categories": [
      {
       "id": "sans_noms",
       "libelle": "Des statistiques sans noms, par l'outil de l'employeur",
       "court": "Des totaux, sans noms"
      },
      {
       "id": "acces",
       "libelle": "Un accès limité à la personne qui en a besoin, après accord de mon responsable",
       "court": "Un accès limité, avec accord"
      },
      {
       "id": "accord",
       "libelle": "Je demande d'abord l'accord des personnes et de mon responsable",
       "court": "Je demande l'accord"
      }
     ],
     "consigne": "Pour chaque demande, comment répondez-vous ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je choisis le mode de transmission selon ce que contient le document et à qui il est destiné.",
     "bilan_tout": "Vous savez quoi envoyer, à qui, et comment, même quand la demande est pressante."
    }
   ],
   "fiches": [
    "FICHE-M4-E2",
    "FA-M4-01"
   ],
   "suite": "M4-P2-FIN"
  },
  "M4-P2-FIN": {
   "id": "M4-P2-FIN",
   "type": "fin-section",
   "etape": "Épisode 2",
   "surtitre": "Bilan de l'épisode",
   "titre": "Mardi, c'est fait",
   "acquis": [
    {
     "titre": "Savoir ce que contient un fichier",
     "texte": "Noms et téléphones sont personnels ; la situation de l'habitant demande plus d'attention."
    },
    {
     "titre": "Refuser un outil non autorisé",
     "texte": "Léna reçoit les totaux par lieu ; le résumé se fait sans noms."
    },
    {
     "titre": "Ne pas répondre à un faux courriel",
     "texte": "Le courriel est signalé au référent informatique, puis supprimé."
    },
    {
     "titre": "Réagir à une publication",
     "texte": "La photo est retirée, le responsable de Noa est informé."
    }
   ],
   "dossier": "Le fichier des habitants est partagé sans les exposer. La tournée de jeudi garde les six lieux.",
   "suite": "M4-P3"
  },
  "M4-P3": {
   "id": "M4-P3",
   "type": "page",
   "etape": "Épisode 3",
   "titre": "Un besoin, un achat, un service fait",
   "chapeau": "Mercredi, vu par Cédric. Un détour avec le pick-up, 500 questionnaires à faire imprimer, une livraison qui ne correspond pas à la facture. Vous décidez ce que Noa fait, et ce qu'il ne fait pas.",
   "competences": [
    "C11",
    "C09"
   ],
   "competences_lib": [
    {
     "code": "C11",
     "libelle": "J'utilise les moyens publics à bon escient."
    },
    {
     "code": "C09",
     "libelle": "J'identifie et j'applique les règles utiles à mon activité."
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
     "id": "constate",
     "libelle": "Il constate l'écart, ne valide pas, et remet son constat à la personne habilitée",
     "court": "Il constate et transmet"
    },
    {
     "id": "valide",
     "libelle": "Il valide, l'imprimeur complétera sûrement",
     "court": "Il valide"
    },
    {
     "id": "renvoie",
     "libelle": "Il renvoie les cartons et annonce qu'on ne paiera pas",
     "court": "Il renvoie tout"
    }
   ],
   "items": [
    {
     "id": "D1",
     "libelle": "Cédric prépare le pick-up : « Demain au retour, je passe chez mon frère à Pouembout déposer un colis. C'est à deux minutes de la route. On a toujours fait comme ça. » Que répond Noa ?",
     "court": "Le détour de Cédric",
     "attendu": "refuse",
     "feedback": "Un refus simple, sans reproche : le véhicule sert au service. Noa ne joue pas au contrôleur et ne ferme pas les yeux. Si cela se répète, il en parle à Samuel."
    },
    {
     "id": "D2",
     "libelle": "Samuel demande à Noa de préparer le besoin : 500 questionnaires pour les habitants. Noa connaît un devis possible. Que fait-il ?",
     "court": "Les 500 questionnaires",
     "attendu": "exprime",
     "feedback": "Noa dit le besoin (quoi, combien, pour quand) et le transmet au circuit d'achat de l'ÉLAN. Il n'engage aucune dépense : c'est la personne habilitée qui commande."
    },
    {
     "id": "D3",
     "libelle": "Joël, au téléphone : « Prenez mon imprimeur de Koné, je le connais, il fait toujours un bon prix. » Que fait Noa ?",
     "court": "L'imprimeur de Joël",
     "attendu": "piste",
     "feedback": "Noa écoute et note le nom comme une piste. Il ne le choisit pas, il ne l'écarte pas : le circuit compare les offres. Aucun fournisseur n'est favorisé."
    },
    {
     "id": "D4",
     "libelle": "14 h. Le bon de livraison indique 500 questionnaires, la facture demande le paiement de 500. Noa en compte 300 dans les cartons. Que fait-il ?",
     "court": "300 reçus, 500 facturés",
     "attendu": "constate",
     "feedback": "Noa constate l'écart, chiffre en main, et ne valide pas. Il remet son constat à la personne habilitée, qui décide de la suite avec l'imprimeur. Il ne signe pas à sa place."
    },
    {
     "id": "T1",
     "libelle": "Une collègue demande d'imprimer, sur l'imprimante du service, deux cents tracts pour la kermesse de l'école de son fils.",
     "court": "Les tracts de la kermesse",
     "attendu": "demande",
     "feedback": "Les moyens du service servent au service. Je ne suppose ni l'autorisation ni l'interdiction : je demande à mon responsable ce que prévoit mon employeur."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Mercredi, 7 h 50 : le pick-up",
     "illustration": "ILL-Q04",
     "texte": "Mercredi, 7 h 50, sous l'abri des véhicules. Cédric prépare le pick-up de la tournée de demain : carnet de bord, plein, clés. Noa l'aide à charger le matériel.",
     "repliques": [
      {
       "personnage": "Cédric",
       "canal": "oral",
       "texte": "« Demain, au retour, je passe chez mon frère à Pouembout déposer un colis. C'est à deux minutes de la route. On a toujours fait comme ça. »"
      }
     ],
     "et_vous": "Avez-vous déjà utilisé un moyen du service pour « rendre service » ?"
    },
    {
     "type": "tri",
     "id": "vehicule",
     "phase": "situation",
     "titre": "Le détour de Cédric",
     "competences": [
      "C11"
     ],
     "items": [
      "D1"
     ],
     "categories": [
      {
       "id": "refuse",
       "libelle": "Il refuse simplement : le véhicule est réservé au service. Il propose à Cédric une autre façon de livrer son colis.",
       "court": "Il refuse simplement"
      },
      {
       "id": "accepte",
       "libelle": "Il accepte : c'est sur la route et Cédric connaît les usages.",
       "court": "Il accepte"
      },
      {
       "id": "note",
       "libelle": "Il accepte et note le détour comme un déplacement de service.",
       "court": "Il accepte et le note « service »"
      },
      {
       "id": "denonce",
       "libelle": "Il ne répond pas à Cédric et prévient Samuel dans l'heure.",
       "court": "Il prévient Samuel"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que répond Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Un moyen du service sert au service. Je refuse simplement, sans reproche ; si cela se répète, j'en parle à mon responsable.",
     "bilan_tout": "Cédric grommelle, puis confie son colis à un collègue qui part ce soir vers le Nord.",
     "valider": "Règles d'usage des véhicules de service : propres à chaque employeur (règlement de la province Nord, 2025, à lire). Probité : code pénal art. 432-11 et 432-14, non relus."
    },
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Un besoin à écrire",
     "texte": "Pour le diagnostic, il faut 500 questionnaires imprimés. Samuel confie le besoin à Noa. Dans l'heure, Joël rappelle de Passerelles.",
     "repliques": [
      {
       "personnage": "Samuel",
       "canal": "oral",
       "texte": "« Écris le besoin : quoi, combien, pour quand. Ensuite, ça suit le circuit d'achat de l'ÉLAN. »"
      },
      {
       "personnage": "Joël",
       "canal": "telephone",
       "texte": "« Prenez mon imprimeur de Koné, je le connais, il fait toujours un bon prix. »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "besoin",
     "phase": "situation",
     "titre": "Que fait Noa du besoin ?",
     "competences": [
      "C11"
     ],
     "items": [
      "D2"
     ],
     "categories": [
      {
       "id": "exprime",
       "libelle": "Il écrit le besoin (quoi, combien, pour quand) et le transmet au circuit d'achat de l'ÉLAN.",
       "court": "Il écrit le besoin"
      },
      {
       "id": "commande",
       "libelle": "Il appelle l'imprimeur et passe la commande pour gagner du temps.",
       "court": "Il commande lui-même"
      },
      {
       "id": "attend",
       "libelle": "Il attend que quelqu'un y pense.",
       "court": "Il attend"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "J'exprime le besoin ; je n'engage pas la dépense. Celle-ci relève de la personne habilitée.",
     "bilan_tout": "Le besoin part le matin même, avec la date souhaitée.",
     "valider": "Circuit de la dépense et délégations : propres à chaque employeur. Aucun seuil de commande publique n'est cité dans DINA."
    },
    {
     "type": "tri",
     "id": "fournisseur",
     "phase": "situation",
     "titre": "L'imprimeur de Joël",
     "competences": [
      "C11",
      "C09"
     ],
     "items": [
      "D3"
     ],
     "categories": [
      {
       "id": "piste",
       "libelle": "Il note le nom de l'imprimeur comme une piste parmi d'autres et laisse le circuit comparer les offres.",
       "court": "Il le note comme une piste"
      },
      {
       "id": "choisit",
       "libelle": "Il confirme l'imprimeur de Joël : il est recommandé.",
       "court": "Il le retient"
      },
      {
       "id": "ecarte",
       "libelle": "Il écarte l'imprimeur de Joël par principe : ce serait suspect.",
       "court": "Il l'écarte"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je ne favorise aucun fournisseur, et je n'en écarte aucun : c'est le circuit qui compare.",
     "bilan_tout": "Le circuit demande trois devis, dont celui de l'imprimeur de Joël.",
     "valider": "Mise en concurrence et égalité de traitement des candidats : délibération 398, art. 2 (relu) ; même principe dans la délibération 424, art. 2-I (à relire). Texte applicable selon l'employeur."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Les moyens publics",
     "competences": [
      "C11",
      "C09"
     ],
     "texte": "Un véhicule, de l'argent public, un prestataire : la logique est la même. Les moyens du service servent au service, et chacun reste à sa place dans le circuit.",
     "regle": "Les moyens publics servent au service. Je n'engage aucune dépense : j'exprime un besoin, et le circuit décide. Une prestation n'est payée que si elle a été réalisée.",
     "regle_clair": "Le **service fait**, c'est la vérification que ce qui est facturé a bien été livré ou réalisé. Une personne **habilitée** l'atteste ; ce n'est pas à moi de le déclarer.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M4-03"
      }
     ],
     "methode_titre": "Cinq repères pour les moyens du service",
     "methode": [
      {
       "Les moyens du service servent au service": "véhicule, matériel, téléphone, imprimante."
      },
      "Je dis le besoin (quoi, combien, pour quand). Je n'engage aucune dépense.",
      {
       "Je ne favorise aucun fournisseur": "le circuit compare."
      },
      "À la livraison, je compare ce qui arrive avec ce qui était prévu.",
      "Je signale l'écart ; la personne habilitée atteste le service fait."
     ],
     "guichet": "Le circuit d'achat, les personnes habilitées et les règles d'usage des véhicules varient selon l'employeur. En cas de doute, je demande à mon responsable qui est le référent chez moi.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Pourquoi.** L'argent public est celui de tous : je l'utilise avec probité (aucun avantage pour moi ni pour un proche) et sobriété (le juste besoin). **Le budget.** Les dépenses sont prévues au budget : le budget primitif (BP) fixe l'année, un budget supplémentaire (BS) peut l'ajuster. Cela explique certains délais. **Contrat, bon de commande, service fait.** Le contrat ou le bon de commande engage la dépense ; le service fait précède le paiement. Je ne retiens aucun seuil chiffré : les règles de commande varient selon l'employeur."
     },
     "valider": "Probité : code pénal art. 432-11 et 432-14 (non relus) ; sobriété : aucune règle calédonienne trouvée, bonne pratique ; commande publique : délibérations 398 et 424, aucun seuil cité ; service fait et qui l'atteste : décret 2013-512, art. 4-1, et accord local DGFiP, à valider par l'expert (GBCP non citée) ; BP et BS : repères de calendrier (D59)."
    },
    {
     "type": "recit",
     "phase": "application",
     "titre": "14 h : la livraison",
     "illustration": "ILL-Q05",
     "texte": "L'imprimeur retenu par le circuit livre à l'accueil. Noa ouvre les cartons et compte : trois cents questionnaires. Le bon de livraison dit cinq cents. La facture, posée sur le comptoir, demande le paiement de cinq cents.",
     "repliques": [
      {
       "personnage": "Cédric",
       "canal": "oral",
       "texte": "« Ça ira, il complétera. Signe le bon et on passe à autre chose. »"
      }
     ]
    },
    {
     "type": "ordre",
     "id": "chaine",
     "phase": "application",
     "titre": "La chaîne d'une dépense",
     "competences": [
      "C11"
     ],
     "texte": "Noa se demande qui fait quoi, de l'idée au paiement.",
     "consigne": "Remettez les étapes dans l'ordre : utilisez les flèches.",
     "options": [
      {
       "id": "A",
       "libelle": "J'exprime le besoin (quoi, combien, pour quand)."
      },
      {
       "id": "B",
       "libelle": "La personne habilitée engage la dépense, par un bon de commande ou un contrat."
      },
      {
       "id": "C",
       "libelle": "À la livraison, je compare ce qui arrive avec ce qui était prévu."
      },
      {
       "id": "D",
       "libelle": "La personne habilitée atteste le service fait ; la facture peut être payée."
      }
     ],
     "attendu": [
      "A",
      "B",
      "C",
      "D"
     ],
     "depart": [
      "C",
      "A",
      "D",
      "B"
     ],
     "feedback_ok": "Le besoin, l'engagement, le contrôle, l'attestation : chacun reste à sa place, et rien n'est payé avant d'être vérifié.",
     "feedback_ko": "Le besoin vient d'abord, puis l'engagement de la dépense par la personne habilitée. À la livraison, on compare, et le paiement n'intervient qu'après l'attestation du service fait.",
     "bouton": "Vérifier l'ordre"
    },
    {
     "type": "tri",
     "id": "ecart",
     "phase": "application",
     "titre": "300 reçus, 500 facturés",
     "competences": [
      "C11",
      "C09"
     ],
     "items": [
      "D4"
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je constate, je ne valide pas, je transmets. L'attestation et la décision de payer ne sont pas à moi.",
     "bilan_tout": "Cédric hausse les épaules, puis range les cartons à l'abri de la lumière.",
     "valider": "Qui atteste le service fait : ordonnateur ou personne habilitée selon l'employeur (décret 2013-512, art. 4-1 ; accord local DGFiP). À valider par l'expert."
    },
    {
     "type": "message",
     "id": "constat",
     "phase": "application",
     "titre": "Remettre le constat",
     "competences": [
      "C11",
      "C09"
     ],
     "texte": "Noa écrit à Ana, qui reçoit les constats de livraison. Composez son message : choisissez une phrase pour chaque partie.",
     "brief": "Dans le circuit fictif de l'ÉLAN, Ana reçoit les constats, sans attester elle-même. Chez votre employeur, le circuit peut différer.",
     "destinataire": "Ana",
     "objet": "Livraison des questionnaires incomplète",
     "salutation": "Bonjour Ana,",
     "signature": "Noa",
     "synthese": "Un constat chiffré, une pièce, une demande qui laisse la décision à la personne habilitée.",
     "bouton": "Vérifier mon message",
     "parties": [
      {
       "id": "fait",
       "libelle": "Ce que j'ai constaté",
       "options": [
        {
         "id": "A",
         "texte": "Livraison de 14 h : 300 questionnaires reçus, alors que le bon de commande et la facture en indiquent 500.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "La livraison n'est pas bonne, il y a un souci avec l'imprimeur.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "J'ai renvoyé la livraison : l'imprimeur nous doit des explications.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Un fait chiffré et vérifiable. Un jugement sur l'imprimeur, ou un renvoi de la livraison sans décision, ne sont pas à Noa."
      },
      {
       "id": "piece",
       "libelle": "Ce que je joins",
       "options": [
        {
         "id": "A",
         "texte": "Je joins le bon de livraison et une photo des cartons comptés.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Je n'ai rien gardé, mais j'ai compté deux fois.",
         "verdict": "risque"
        },
        {
         "id": "C",
         "texte": "Cédric peut le confirmer.",
         "verdict": "partiel"
        }
       ],
       "feedback": "Une pièce vaut mieux qu'un témoignage : le bon et la photo permettent à la personne habilitée de décider."
      },
      {
       "id": "demande",
       "libelle": "Ce que je demande",
       "options": [
        {
         "id": "A",
         "texte": "Pouvez-vous voir avec l'imprimeur la suite à donner ? Je n'ai pas validé le paiement.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Réglez la facture, je préviendrai l'imprimeur de l'écart.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Je vous laisse régler cela : je ne veux plus m'en occuper.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Noa signale et laisse décider. Il ne paie pas, il n'abandonne pas non plus : il reste joignable pour la suite."
      }
     ]
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Les tracts de la kermesse",
     "competences": [
      "C11"
     ],
     "items": [
      "T1"
     ],
     "categories": [
      {
       "id": "imprime",
       "libelle": "J'imprime : c'est quelques feuilles, et la collègue est sympathique.",
       "court": "J'imprime"
      },
      {
       "id": "demande",
       "libelle": "Je demande à mon responsable ce que prévoit mon employeur.",
       "court": "Je demande"
      },
      {
       "id": "expose",
       "libelle": "Je refuse sèchement, et je le dis à tout le service.",
       "court": "Je refuse et je l'affiche"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Les moyens du service servent au service. Quand je ne sais pas ce qui est permis, je demande.",
     "bilan_tout": "Vous savez quoi faire quand on vous demande un moyen du service pour un usage extérieur.",
     "valider": "Usage personnel ou associatif des moyens du service : règle propre à chaque employeur, à vérifier."
    }
   ],
   "fiches": [
    "FICHE-M4-E3",
    "FICHE-M4-E3B",
    "FA-M4-02"
   ],
   "suite": "M4-P3-FIN"
  },
  "M4-P3-FIN": {
   "id": "M4-P3-FIN",
   "type": "fin-section",
   "etape": "Épisode 3",
   "surtitre": "Bilan de l'épisode",
   "titre": "Mercredi, c'est fait",
   "acquis": [
    {
     "titre": "Un moyen du service sert au service",
     "texte": "Le pick-up n'a fait aucun détour ; Cédric a confié son colis à un collègue."
    },
    {
     "titre": "Exprimer un besoin, sans engager la dépense",
     "texte": "Le besoin des 500 questionnaires est parti au circuit d'achat. Noa n'a rien commandé."
    },
    {
     "titre": "Constater, pas valider",
     "texte": "300 reçus pour 500 facturés. Noa a remis le constat à Ana, avec le bon et une photo."
    }
   ],
   "dossier": "Les questionnaires sont commandés par le circuit d'achat. L'écart de livraison est signalé, la facture n'est pas validée.",
   "suite": "M4-P4"
  },
  "M4-P4": {
   "id": "M4-P4",
   "type": "page",
   "etape": "Épisode 4",
   "titre": "Quelque chose ne va pas",
   "chapeau": "Jeudi matin, avant la tournée. Un câble dans le hall, un perron glissant, puis un collègue de Léna dont les remarques reviennent. Vous décidez comment Noa sécurise, alerte, écoute, et ce qu'il ne fait pas.",
   "competences": [
    "C12",
    "C18"
   ],
   "competences_lib": [
    {
     "code": "C12",
     "libelle": "Je contribue à la santé et à la sécurité au travail."
    },
    {
     "code": "C18",
     "libelle": "Je sais quand et comment demander un appui."
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
     "id": "attentif",
     "libelle": "Une difficulté ponctuelle : je reste attentif",
     "court": "Je reste attentif"
    },
    {
     "id": "oriente",
     "libelle": "Un signal qui dure : j'écoute et j'oriente",
     "court": "J'écoute et j'oriente"
    },
    {
     "id": "secours",
     "libelle": "Une urgence : j'appelle les secours",
     "court": "J'appelle le 15"
    }
   ],
   "items": [
    {
     "id": "D1",
     "libelle": "Un câble de rallonge, tiré pour une réunion, traverse le hall. Ana, les bras chargés de dossiers, vient de le rattraper de justesse. Le perron est aussi glissant après la pluie. Que fait Noa ?",
     "court": "Le câble et le perron",
     "attendu": "securise",
     "feedback": "Il écarte le câble, signale le perron glissant, prévient Cédric et en informe Samuel. Une chute évitée est un signal : c'est ainsi que le risque est corrigé avant l'accident."
    },
    {
     "id": "D2",
     "libelle": "Une visiteuse glisse sur le perron. Elle est assise, consciente, ne peut plus se relever et dit avoir très mal à la hanche. Que fait Noa ?",
     "court": "La visiteuse sur le perron",
     "attendu": "secours",
     "feedback": "Il ne la déplace pas, appelle le 15, la rassure et demande à l'accueil de guider les secours. Il prévient ensuite son responsable, qui déclenche la suite."
    },
    {
     "id": "S1",
     "libelle": "Léna est tendue cette semaine : elle boucle un rapport pour vendredi et dort peu.",
     "court": "Léna boucle un rapport",
     "attendu": "attentif",
     "feedback": "Une fatigue liée à une échéance, qui passera avec elle : je reste attentif, sans dramatiser."
    },
    {
     "id": "S2",
     "libelle": "Depuis des semaines, un collègue reprend Léna devant les autres, et elle répond à ses messages la nuit.",
     "court": "Les remarques qui reviennent",
     "attendu": "oriente",
     "feedback": "Ce qui dure et se répète est un signal. Je n'ai pas à le qualifier : j'écoute, j'oriente vers le circuit de mon employeur."
    },
    {
     "id": "S3",
     "libelle": "Un collègue se plaint d'une douleur à la poitrine et devient très pâle dans le couloir.",
     "court": "Le collègue pâle dans le couloir",
     "attendu": "secours",
     "feedback": "Une urgence de santé : j'appelle le 15 sans attendre, je reste avec la personne et je préviens l'accueil."
    },
    {
     "id": "D3",
     "libelle": "À la fin de l'appel, Léna dit : « Surtout, n'en parle à personne. » Que fait Noa ?",
     "court": "« N'en parle à personne »",
     "attendu": "ecoute",
     "feedback": "Il l'écoute, ne promet pas le silence et l'oriente vers son responsable, les ressources humaines ou la médecine de prévention. Il n'enquête pas et ne dit pas qu'il y a harcèlement."
    },
    {
     "id": "T1",
     "libelle": "L'extincteur du couloir a son manomètre dans le rouge.",
     "court": "L'extincteur",
     "attendu": "signale",
     "feedback": "Je ne le répare pas moi-même et je ne compte pas sur les autres : je le signale à mon responsable et à la personne chargée de la sécurité."
    },
    {
     "id": "T2",
     "libelle": "Un carton lourd, posé en haut d'une étagère du local d'archives, a failli tomber hier. Personne n'a été blessé.",
     "court": "Le carton en équilibre",
     "attendu": "signale",
     "feedback": "Un presque-accident se signale : c'est ce qui permet de corriger avant qu'il y ait un blessé."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Jeudi, 7 h 40 : l'entrée",
     "illustration": "ILL-Q06",
     "texte": "Jeudi, 7 h 40, à l'entrée du siège. La rallonge d'une réunion de la veille traverse le hall. Le perron est glissant après la pluie de la nuit. Ana arrive, les bras chargés de dossiers, et rattrape de justesse son équilibre.",
     "repliques": [
      {
       "personnage": "Ana",
       "canal": "oral",
       "texte": "« Ouf. Ce câble, c'est la visio d'hier. »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "risque",
     "phase": "situation",
     "titre": "Le câble et le perron",
     "competences": [
      "C12"
     ],
     "items": [
      "D1"
     ],
     "categories": [
      {
       "id": "securise",
       "libelle": "Il écarte le câble, signale le perron glissant, prévient Cédric et en informe Samuel pour que le risque soit corrigé.",
       "court": "Il sécurise et il signale"
      },
      {
       "id": "enjambe",
       "libelle": "Il enjambe le câble : personne n'est tombé.",
       "court": "Il enjambe"
      },
      {
       "id": "scotche",
       "libelle": "Il scotche le câble au sol et ne dit rien : c'est réglé.",
       "court": "Il scotche, sans rien dire"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je sécurise sans me mettre en danger, et je signale : un risque qui n'est pas dit n'est pas corrigé.",
     "bilan_tout": "Le câble passe au plafond, le perron est balisé, Cédric ajoute une ligne au registre de sécurité.",
     "valider": "Presque-accident : bonne pratique (source INRS à ajouter). Le CTP analyse les risques : délibération 181, art. 61 (relu)."
    },
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Une chute",
     "texte": "Dix minutes plus tard, une visiteuse venue déposer un document glisse sur le perron. Elle est assise, consciente, tient sa hanche, et dit qu'elle ne peut plus se relever."
    },
    {
     "type": "tri",
     "id": "urgence",
     "phase": "situation",
     "titre": "La visiteuse sur le perron",
     "competences": [
      "C12"
     ],
     "items": [
      "D2"
     ],
     "categories": [
      {
       "id": "secours",
       "libelle": "Il ne la déplace pas, appelle le 15, la rassure et demande à l'accueil de guider les secours.",
       "court": "Il appelle le 15"
      },
      {
       "id": "releve",
       "libelle": "Il la relève vite pour qu'elle soit plus à l'aise.",
       "court": "Il la relève"
      },
      {
       "id": "voiture",
       "libelle": "Il la conduit lui-même aux urgences, dans sa voiture, sans prévenir personne.",
       "court": "Il l'emmène lui-même"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Pour un malaise ou un accident grave, j'appelle le 15. Je ne me substitue pas aux secours.",
     "bilan_tout": "Les secours arrivent, Noa prévient Samuel. La visiteuse est prise en charge.",
     "valider": "Numéros d'urgence en NC : 15 (SAMU), 17 (gendarmerie, police), 18 (pompiers) ; gendarmerie, pages des brigades de NC. La procédure de déclaration dépend du statut et de l'employeur (délibération 181, art. 68)."
    },
    {
     "type": "recit",
     "phase": "situation",
     "titre": "9 h : la visio avec Léna",
     "illustration": "ILL-Q07",
     "texte": "9 h. Noa prépare la tournée en visio avec Léna. Elle a écrit deux fois cette nuit, à 23 h 40 et à 5 h. En fin de réunion, un collègue de Léna, hors caméra, lance une remarque sur ses chiffres. Ce n'est pas la première fois cette semaine.",
     "repliques": [
      {
       "personnage": "Léna",
       "canal": "reunion",
       "texte": "« Ça va, il est comme ça. Je suis juste fatiguée. »"
      }
     ]
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Santé, sécurité et harcèlement",
     "competences": [
      "C12",
      "C18"
     ],
     "texte": "Un risque physique se corrige quand on le signale. Une difficulté entre collègues demande d'abord qu'on écoute, puis qu'on oriente.",
     "regle": "Face à un danger, je sécurise sans me mettre en danger, j'alerte et je signale. Face à un collègue en difficulté, j'écoute et j'oriente : je n'enquête pas, je ne qualifie pas, je ne promets pas le secret absolu.",
     "regle_clair": "Un **risque psychosocial** est un risque pour la santé qui vient de la façon dont le travail est vécu (surcharge, tensions, remarques répétées). Dire s'il y a **harcèlement** n'est pas mon rôle : c'est l'affaire de l'employeur et des autorités compétentes.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M4-04"
      }
     ],
     "methode_titre": "Quatre gestes",
     "methode": [
      "Je sécurise sans me mettre en danger, et je préviens les personnes autour.",
      "J'alerte : le 15 (SAMU) pour une urgence de santé, le 18 (pompiers) pour un incendie ou un danger, le 17 (police, gendarmerie), puis mon responsable.",
      "J'écoute un collègue, je ne promets pas le secret absolu, et je l'oriente : son responsable, les ressources humaines, la médecine de prévention.",
      {
       "Je signale un risque ou un presque-accident": "c'est ce qui permet de le corriger."
      }
     ],
     "guichet": "Les interlocuteurs (ressources humaines, médecine de prévention, représentants du personnel) varient selon l'employeur. Je demande à mon responsable qui est le référent chez moi.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Alerter en cas de danger grave et imminent.** La délibération 181 (art. 76) prévoit le droit d'alerter l'employeur ou un représentant du personnel au comité technique paritaire (CTP). Dans la fonction publique calédonienne, on parle du CTP, pas du CHSCT. **Le harcèlement.** La loi du pays 2014-9 encadre le harcèlement moral et sexuel dans la fonction publique ; témoigner de faits de harcèlement ne peut pas valoir de sanction (art. 11). **Un accident.** Je le signale à mon responsable et aux ressources humaines ; la procédure dépend de mon statut."
     },
     "valider": "Délibération 181, art. 61, 68, 76 (relus) ; loi du pays 2014-9, art. 11 (relu) ; droit de retrait : aucun fondement trouvé, non enseigné (réflexe d'alerte seulement) ; accident de service : fiche service-public.nc, procédure selon le statut ; interlocuteurs et dispositifs d'écoute : propres à chaque employeur. Relecture RH ou prévention requise avant diffusion."
    },
    {
     "type": "tri",
     "id": "signal",
     "phase": "application",
     "titre": "Ponctuel ou signal ?",
     "competences": [
      "C12"
     ],
     "items": [
      "S1",
      "S2",
      "S3"
     ],
     "consigne": "Pour chaque situation, que fait Noa ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Une fatigue qui passe, je reste attentif ; ce qui dure et se répète, j'oriente ; une urgence de santé, j'appelle le 15.",
     "bilan_tout": "Vous distinguez la difficulté ponctuelle, le signal qui dure et l'urgence.",
     "valider": "La distinction entre difficulté ponctuelle et signal repose sur des bonnes pratiques (INRS ED 6251, à adapter). L'agent ne qualifie jamais."
    },
    {
     "type": "tri",
     "id": "conduite",
     "phase": "application",
     "titre": "« N'en parle à personne »",
     "competences": [
      "C12",
      "C18"
     ],
     "items": [
      "D3"
     ],
     "categories": [
      {
       "id": "ecoute",
       "libelle": "Il l'écoute, ne promet pas le silence, et l'encourage à en parler à son responsable, aux ressources humaines ou à la médecine de prévention.",
       "court": "Il écoute et il oriente"
      },
      {
       "id": "promet",
       "libelle": "Il promet de garder cela pour lui.",
       "court": "Il promet le silence"
      },
      {
       "id": "enquete",
       "libelle": "Il va voir le collègue pour lui demander des explications.",
       "court": "Il mène sa propre enquête"
      },
      {
       "id": "minimise",
       "libelle": "Il lui dit que ce n'est rien et que cela passera.",
       "court": "Il minimise"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "J'écoute, j'oriente, je reste honnête sur le secret. Je n'enquête pas et je ne qualifie pas.",
     "bilan_tout": "Léna dit qu'elle va y réfléchir. Noa lui propose de l'accompagner si elle le souhaite.",
     "valider": "Secret et orientation : bonnes pratiques (DGAFP, INRS ED 6251), à adapter. Circuits (responsable, RH, médecine de prévention, instance de prévention) : à obtenir auprès des employeurs."
    },
    {
     "type": "message",
     "id": "motleina",
     "phase": "application",
     "titre": "Un mot à Léna",
     "competences": [
      "C12",
      "C18"
     ],
     "texte": "Dans l'après-midi, Noa lui envoie un message. Composez-le : choisissez une phrase pour chaque partie.",
     "brief": "Noa tutoie Léna. Le message est court et reste entre eux deux.",
     "destinataire": "Léna",
     "objet": "Ce matin",
     "salutation": "Léna,",
     "signature": "Noa",
     "synthese": "Un fait sans jugement, une promesse honnête, une orientation.",
     "bouton": "Vérifier mon message",
     "parties": [
      {
       "id": "fait",
       "libelle": "Ce que j'ai remarqué",
       "options": [
        {
         "id": "A",
         "texte": "Je t'ai trouvée fatiguée ces derniers jours, et j'ai entendu les remarques de ce matin. Je voulais te le dire.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Ce collègue te harcèle, ça se voit.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Je n'ai rien remarqué de particulier.",
         "verdict": "risque"
        }
       ],
       "feedback": "Je dis ce que j'ai vu ou entendu, sans qualifier. Dire « harcèlement » n'est pas mon rôle."
      },
      {
       "id": "secret",
       "libelle": "Ce que je peux promettre",
       "options": [
        {
         "id": "A",
         "texte": "Je ne peux pas te promettre de n'en parler à personne, mais je ne ferai rien sans t'en parler d'abord.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Promis, ça reste entre nous.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Je vais en parler à tout le monde pour que ça cesse.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Je ne promets pas un secret que je pourrais devoir lever. Je promets d'en parler d'abord avec elle."
      },
      {
       "id": "orientation",
       "libelle": "Ce que je propose",
       "options": [
        {
         "id": "A",
         "texte": "Tu peux en parler à ton responsable, aux ressources humaines ou à la médecine de prévention. Si tu veux, je t'aide à préparer ce que tu veux dire.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Règle ça directement avec lui, tu verras.",
         "verdict": "risque"
        },
        {
         "id": "C",
         "texte": "Je m'en occupe, ne t'inquiète pas.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "J'oriente vers ceux dont c'est le rôle, et je reste présent. Je ne me substitue ni à la médecine de prévention ni aux ressources humaines."
      }
     ]
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Deux risques, une même règle",
     "competences": [
      "C12"
     ],
     "items": [
      "T1",
      "T2"
     ],
     "categories": [
      {
       "id": "signale",
       "libelle": "Je le signale à mon responsable et à la personne chargée de la sécurité.",
       "court": "Je le signale"
      },
      {
       "id": "attend",
       "libelle": "Je ne dis rien : quelqu'un finira par le voir.",
       "court": "Je ne dis rien"
      },
      {
       "id": "seul",
       "libelle": "Je m'en occupe moi-même, sans prévenir.",
       "court": "Je m'en occupe seul"
      }
     ],
     "consigne": "Pour chaque situation, que faites-vous ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je signale ce que je vois, même quand personne n'a été blessé.",
     "bilan_tout": "Vous savez quoi faire d'un risque que personne n'a encore signalé.",
     "valider": "Presque-accident et signalement : bonne pratique (source INRS à ajouter ; le blog commercial initial est écarté)."
    },
    {
     "type": "recit",
     "phase": "application",
     "titre": "Si cela vous concerne",
     "texte": "Cet épisode parle de fatigue et de tensions au travail. Si vous traversez une période difficile, ou si un collègue en traverse une, parlez-en à votre responsable, aux ressources humaines ou à la médecine de prévention de votre employeur. En cas d'urgence de santé, appelez le 15."
    }
   ],
   "fiches": [
    "FICHE-M4-E4",
    "FA-M4-03"
   ],
   "suite": "M4-P4-FIN"
  },
  "M4-P4-FIN": {
   "id": "M4-P4-FIN",
   "type": "fin-section",
   "etape": "Épisode 4",
   "surtitre": "Bilan de l'épisode",
   "titre": "Jeudi matin, c'est fait",
   "acquis": [
    {
     "titre": "Sécuriser et signaler",
     "texte": "Le câble passe au plafond, le perron est balisé, Samuel est informé."
    },
    {
     "titre": "Appeler les secours quand c'est grave",
     "texte": "La visiteuse a été prise en charge après l'appel au 15."
    },
    {
     "titre": "Écouter, orienter, ne pas promettre le secret",
     "texte": "Léna sait vers qui se tourner ; Noa n'a pas enquêté."
    }
   ],
   "dossier": "Les risques de l'entrée sont signalés. La tournée des six lieux peut commencer.",
   "suite": "M4-DEF"
  },
  "M4-DEF": {
   "id": "M4-DEF",
   "type": "page",
   "etape": "Défi",
   "titre": "Une journée de tournée",
   "chapeau": "Jeudi, 11 h. La tournée est lancée dans le pick-up de l'ÉLAN. Au premier lieu, quatre demandes arrivent presque en même temps, avec très peu de guidage. À la fin, Noa rend compte à Samuel.",
   "competences": [
    "C09",
    "C10",
    "C11",
    "C12"
   ],
   "competences_lib": [
    {
     "code": "C09",
     "libelle": "J'identifie et j'applique les règles utiles à mon activité."
    },
    {
     "code": "C10",
     "libelle": "Je protège les données, les informations et mes usages numériques."
    },
    {
     "code": "C11",
     "libelle": "J'utilise les moyens publics à bon escient."
    },
    {
     "code": "C12",
     "libelle": "Je contribue à la santé et à la sécurité au travail."
    }
   ],
   "phases": [
    "situation",
    "application"
   ],
   "bouton_fin": "Terminer le défi",
   "items": [
    {
     "id": "D1",
     "libelle": "Quatre demandes arrivent en dix minutes. Joël veut que Noa signe l'attestation de visite des six lieux. Teiva veut publier une photo. Joël propose un détour avec le pick-up. Un habitant s'est entaillé la main sur une table pliante. Laquelle Noa traite-t-il en premier ?",
     "court": "Quatre demandes",
     "attendu": "blesse",
     "feedback": "La sécurité d'une personne passe avant tout. Les trois autres demandes attendent quelques minutes ; une urgence de santé, non."
    },
    {
     "id": "D2",
     "libelle": "L'habitant s'est entaillé la paume sur le bord d'une table pliante. Ça saigne un peu, il est conscient et dit que ça va. Que fait Noa ?",
     "court": "L'habitant blessé",
     "attendu": "soigne",
     "feedback": "Il le fait asseoir, appelle le 15 pour avis, applique les gestes qu'on lui indique et prévient Samuel pour que l'incident soit signalé. Il ne minimise pas et ne part pas seul aux urgences."
    },
    {
     "id": "D3",
     "libelle": "Joël tend une feuille à Noa : « Signe-moi que les six lieux ont été visités, c'est pour le dossier. » Trois lieux l'ont été. Que fait Noa ?",
     "court": "« Signe que c'est fait »",
     "attendu": "nesigne",
     "feedback": "On n'atteste que ce qu'on a constaté, et l'attestation relève d'une personne habilitée. Noa décrit ce qu'il a vu : trois lieux, avec les dates."
    },
    {
     "id": "D4",
     "libelle": "Teiva : « Je mets la photo de l'équipe sur la page de Passerelles ? Le tableau des habitants est derrière nous. » Que fait Noa ?",
     "court": "La photo de l'équipe",
     "attendu": "refait",
     "feedback": "Un tableau nominatif lisible en arrière-plan expose des personnes. Noa demande de ne rien publier, de refaire la photo devant un mur nu et de supprimer l'ancienne."
    },
    {
     "id": "D5",
     "libelle": "Joël : « Au retour, on passe deux minutes chez mon beau-frère déposer des chaises, c'est sur la route. » Que fait Noa ?",
     "court": "Le détour de Joël",
     "attendu": "refuse",
     "feedback": "Un refus simple et aimable : le pick-up sert au service. Noa propose une autre solution pour les chaises. Il n'accepte pas, et il ne note pas « mission »."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "11 h, première salle communale",
     "illustration": "ILL-Q08",
     "texte": "Jeudi, 11 h, première salle communale. Teiva installe son ordinateur, Joël range des chaises, le pick-up de l'ÉLAN est garé sous le préau. Quatre demandes arrivent presque en même temps.",
     "repliques": [
      {
       "personnage": "Joël",
       "canal": "oral",
       "texte": "« Noa, deux minutes : une signature, une photo, un détour, et un monsieur qui s'est fait mal à la main. »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "priorite",
     "phase": "application",
     "titre": "Laquelle d'abord ?",
     "competences": [
      "C12"
     ],
     "items": [
      "D1"
     ],
     "categories": [
      {
       "id": "blesse",
       "libelle": "L'habitant qui s'est entaillé la main",
       "court": "L'habitant blessé"
      },
      {
       "id": "signature",
       "libelle": "La signature de l'attestation",
       "court": "La signature"
      },
      {
       "id": "photo",
       "libelle": "La photo de l'équipe",
       "court": "La photo"
      },
      {
       "id": "detour",
       "libelle": "Le détour avec le pick-up",
       "court": "Le détour"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que Noa traite en premier.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "La sécurité des personnes passe d'abord.",
     "bilan_tout": "Noa s'occupe de l'habitant ; les trois autres demandes attendent."
    },
    {
     "type": "tri",
     "id": "blesse",
     "phase": "application",
     "titre": "L'habitant blessé",
     "competences": [
      "C12",
      "C18"
     ],
     "items": [
      "D2"
     ],
     "categories": [
      {
       "id": "soigne",
       "libelle": "Il le fait asseoir, appelle le 15 pour avis, applique les gestes qu'on lui indique, puis prévient Samuel.",
       "court": "Il appelle le 15 pour avis"
      },
      {
       "id": "minimise",
       "libelle": "Il lui dit que ce n'est rien et reprend la permanence.",
       "court": "Il minimise"
      },
      {
       "id": "conduit",
       "libelle": "Il le conduit seul aux urgences dans le pick-up et ne prévient personne.",
       "court": "Il l'emmène seul"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Sécuriser, alerter, signaler. Je ne me substitue pas aux secours.",
     "bilan_tout": "L'habitant repart avec un pansement ; Samuel a été prévenu."
    },
    {
     "type": "tri",
     "id": "attestation",
     "phase": "application",
     "titre": "« Signe que c'est fait »",
     "competences": [
      "C09",
      "C11"
     ],
     "items": [
      "D3"
     ],
     "categories": [
      {
       "id": "nesigne",
       "libelle": "Il ne signe que ce qu'il a constaté : trois lieux sur six, avec leurs dates.",
       "court": "Il décrit ce qu'il a vu"
      },
      {
       "id": "signe",
       "libelle": "Il signe : les trois autres seront faits la semaine prochaine.",
       "court": "Il signe"
      },
      {
       "id": "date",
       "libelle": "Il signe en laissant la date vide, pour la compléter plus tard.",
       "court": "Il signe sans date"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "J'atteste seulement ce que j'ai constaté, et seulement si c'est mon rôle.",
     "bilan_tout": "Joël note les dates, et l'attestation attendra les trois autres lieux."
    },
    {
     "type": "tri",
     "id": "photo",
     "phase": "application",
     "titre": "La photo de l'équipe",
     "competences": [
      "C10"
     ],
     "items": [
      "D4"
     ],
     "categories": [
      {
       "id": "refait",
       "libelle": "Il demande de ne rien publier, de refaire la photo devant un mur nu et de supprimer l'ancienne.",
       "court": "Il fait refaire la photo"
      },
      {
       "id": "publie",
       "libelle": "Il laisse publier : les noms sont trop petits pour être lus.",
       "court": "Il laisse publier"
      },
      {
       "id": "floute",
       "libelle": "Il laisse publier et fera flouter si quelqu'un se plaint.",
       "court": "Il publie, puis il floute"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Avant de publier, je regarde ce qui est lisible à l'arrière-plan.",
     "bilan_tout": "Teiva refait la photo devant le mur blanc de la salle."
    },
    {
     "type": "tri",
     "id": "detourdef",
     "phase": "application",
     "titre": "Le détour de Joël",
     "competences": [
      "C11"
     ],
     "items": [
      "D5"
     ],
     "categories": [
      {
       "id": "refuse",
       "libelle": "Il refuse simplement, et propose une autre solution pour les chaises.",
       "court": "Il refuse simplement"
      },
      {
       "id": "accepte",
       "libelle": "Il accepte : c'est sur la route.",
       "court": "Il accepte"
      },
      {
       "id": "note",
       "libelle": "Il accepte et note « mission » sur le carnet de bord.",
       "court": "Il accepte et le note « mission »"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Un moyen du service sert au service, même pour un partenaire sympathique.",
     "bilan_tout": "Joël trouve un voisin avec une remorque. Le pick-up rentre sans détour."
    },
    {
     "type": "message",
     "id": "compterendu",
     "phase": "application",
     "titre": "Le compte rendu à Samuel",
     "competences": [
      "C09",
      "C11",
      "C12"
     ],
     "texte": "17 h. Noa rend compte à Samuel. Composez le message : choisissez une phrase pour chaque partie.",
     "brief": "Le compte rendu tient en trois parties. Noa vouvoie Samuel par écrit.",
     "destinataire": "Samuel",
     "objet": "Tournée du jeudi, compte rendu",
     "salutation": "Bonjour Samuel,",
     "signature": "Noa",
     "synthese": "Ce qui est fait, ce que je signale, ce que je demande.",
     "bouton": "Vérifier mon compte rendu",
     "parties": [
      {
       "id": "fait",
       "libelle": "Ce qui est fait",
       "options": [
        {
         "id": "A",
         "texte": "Trois lieux sur six ont été visités aujourd'hui, dates jointes. Un habitant s'est entaillé la main : soins sur place, avis du 15, il va bien.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Tout s'est bien passé.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Les six lieux sont faits, il reste juste les papiers.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Des faits, des dates, rien d'arrondi. Une blessure, même légère, se dit."
      },
      {
       "id": "signale",
       "libelle": "Ce que je signale",
       "options": [
        {
         "id": "A",
         "texte": "Je signale la table pliante au bord abîmé, qui a causé la coupure, et la demande de détour avec le pick-up, que j'ai refusée.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Je n'ai rien à signaler : personne ne s'est plaint.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Je signale seulement la table : le détour n'a pas eu lieu.",
         "verdict": "risque"
        }
       ],
       "feedback": "Je signale le risque et ce qui s'est joué sur l'usage du véhicule, même si la suite a été évitée."
      },
      {
       "id": "suite",
       "libelle": "Ce que je demande",
       "options": [
        {
         "id": "A",
         "texte": "Je vous remets mon relevé des trois lieux. L'attestation des six lieux se fera quand les trois autres seront visités. Qui déclare l'incident, et comment ?",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Je m'occupe de tout seul : inutile de vous déranger.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Je vous envoie tout demain.",
         "verdict": "risque"
        }
       ],
       "feedback": "Je remets ce que j'ai constaté, je demande qui fait quoi pour l'incident, et je ne me charge pas de ce qui n'est pas à moi."
      }
     ]
    }
   ],
   "fiches": [
    "FICHE-M4-E1",
    "FICHE-M4-E2",
    "FICHE-M4-E3B",
    "FICHE-M4-E4"
   ],
   "suite": "M4-DEF-FIN"
  },
  "M4-DEF-FIN": {
   "id": "M4-DEF-FIN",
   "type": "fin-section",
   "etape": "Défi",
   "surtitre": "Bilan du défi",
   "titre": "La tournée est faite",
   "acquis": [
    {
     "titre": "La sécurité d'abord",
     "texte": "L'habitant a reçu les bons gestes ; Samuel a été prévenu."
    },
    {
     "titre": "N'attester que ce qu'on a constaté",
     "texte": "Trois lieux sur six, avec leurs dates."
    },
    {
     "titre": "Protéger l'information, même en photo",
     "texte": "La photo a été refaite devant un mur nu."
    },
    {
     "titre": "Refuser sans reproche",
     "texte": "Le pick-up est rentré sans détour."
    }
   ],
   "dossier": "La première moitié de la tournée est faite. Le compte rendu est remis à Samuel.",
   "suite": "M4-EVA-INTRO"
  },
  "M4-EVA-INTRO": {
   "id": "M4-EVA-INTRO",
   "type": "narration",
   "etape": "Évaluation",
   "titre": "Vendredi : l'évaluation",
   "texte": "Six situations nouvelles, hors du dossier Passerelles. Le bilan s'affiche à la fin.\nModule validé avec 5 réponses justes sur 6, dont au moins une par repère : un badge vous attend.\nSinon, une seconde tentative vous est proposée, sur d'autres situations. Vous pourrez reprendre l'évaluation quand vous voulez.\nRéussie ou non, vous pouvez passer au module suivant.\n",
   "suite": "M4-EVA-E1A"
  },
  "M4-EVA-E1A": {
   "id": "M4-EVA-E1A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Ana",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C09"
   ],
   "texte": "Ana prépare une demande pour un agent. Elle a sous la main une note de l'an dernier ; un collègue lui dit que la procédure « a dû changer ».\nQue fait Ana ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle suit la note de l'an dernier : elle n'a jamais posé de problème, et un collègue ne suffit pas pour changer ses habitudes.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle cherche la version publiée par son employeur, regarde la date et le statut, puis suit celle-là.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle suit ce que dit le collègue, qui connaît bien le sujet et qui a sûrement raison.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-E1A2",
   "note_expert": "Savoir-faire visé : C09-SF1, SF2 (repérer la version en vigueur, vérifier date et statut). Item de méthode : procédures propres à chaque employeur."
  },
  "M4-EVA-E1A2": {
   "id": "M4-EVA-E1A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Cédric",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C11"
   ],
   "texte": "Un fournisseur habituel appelle Cédric : « Je vous livre vingt ramettes de papier dès demain, vous n'avez qu'à dire oui. » Cédric n'a pas de bon de commande.\nQue fait Cédric ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il dit oui : le fournisseur est connu, et le papier sert au service.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il dit qu'il lui faut une commande passée par la personne habilitée, et il transmet le besoin à son responsable.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il dit oui, mais demande une facture à moitié prix, pour que la dépense passe inaperçue.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M4-EVA-E2A",
   "note_expert": "Savoir-faire visé : C11-SF1, SF2 (exprimer le besoin sans engager la dépense, ne pas favoriser un fournisseur). Délégations : propres à chaque employeur."
  },
  "M4-EVA-E2A": {
   "id": "M4-EVA-E2A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Teiva",
   "preuve": "E2",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C10"
   ],
   "texte": "Teiva doit envoyer à une commune la liste de présence d'une permanence : noms et téléphones des habitants. Il a sa messagerie personnelle et celle de Passerelles sous la main.\nQue fait Teiva ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il l'envoie par sa messagerie personnelle, plus rapide, à toute la liste de contacts de la commune.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il l'envoie par l'outil autorisé de son association, à la seule personne qui en a besoin, après accord de son responsable.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il l'envoie par la messagerie de l'association, mais à toute l'équipe de la commune, pour être sûr qu'elle arrive.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-E2A2",
   "note_expert": "Savoir-faire visé : C10-SF1, SF2 (ne partager que l'utile, avec qui en a besoin, par l'outil autorisé). Loi Informatique et libertés applicable en NC (art. 125) : à valider."
  },
  "M4-EVA-E2A2": {
   "id": "M4-EVA-E2A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E2",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C10"
   ],
   "texte": "Malia a cliqué sur le lien d'un courriel « urgent » qui lui demandait de confirmer son mot de passe. Elle l'a saisi avant de comprendre.\nQue fait Malia ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle ne dit rien : si rien ne s'est passé, tant mieux.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle change son mot de passe et prévient aussitôt le référent informatique de son employeur.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle supprime le courriel et n'en parle à personne, pour ne pas faire de vagues.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-E3A",
   "note_expert": "Savoir-faire visé : C10-SF4 (signaler un incident). Bonne pratique, pas une règle ; référent informatique propre à chaque employeur. Ne pas citer de délai de notification."
  },
  "M4-EVA-E3A": {
   "id": "M4-EVA-E3A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Joël",
   "preuve": "E3",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C12"
   ],
   "texte": "Joël remarque qu'une marche du perron d'une salle est descellée. Personne n'est tombé.\nQue fait Joël ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il passe son chemin : personne ne s'est fait mal.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il balise la marche et prévient le responsable de la salle, pour qu'elle soit réparée.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il la répare lui-même avec ce qu'il trouve dans le pick-up, sans prévenir personne.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-E3A2",
   "note_expert": "Savoir-faire visé : C12-SF1, SF2 (sécuriser, signaler un presque-accident). Bonne pratique (INRS, source à ajouter)."
  },
  "M4-EVA-E3A2": {
   "id": "M4-EVA-E3A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Samuel",
   "preuve": "E3",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C12",
    "C18"
   ],
   "texte": "Samuel constate qu'un agent de son équipe, jusque-là ponctuel, arrive en retard et ne parle plus à personne depuis un mois.\nQue fait Samuel ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il lui fait remarquer ses retards devant toute l'équipe, pour que ça change.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il lui propose un entretien en tête-à-tête, l'écoute et l'oriente vers la médecine de prévention ou les ressources humaines.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il attend : cela passera sûrement avec le temps.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-RES",
   "note_expert": "Savoir-faire visé : C12-SF3, SF4 (distinguer ponctuel et signal, orienter sans se substituer). Interlocuteurs propres à chaque employeur. À faire relire par RH ou prévention."
  },
  "M4-EVA-RES": {
   "id": "M4-EVA-RES",
   "type": "eval-resultat",
   "etape": "Évaluation",
   "regle": "5 réponses justes sur 6, au moins une par repère",
   "preuves": {
    "E1": "Agir dans les règles et avec les moyens du service",
    "E2": "Partager une information sans l'exposer",
    "E3": "Repérer un risque et alerter"
   },
   "texte_reussi": "Évaluation réussie : le badge du module 4 est à vous. Vous vérifiez la règle et son actualité, vous exprimez un besoin sans engager la dépense, vous protégez l'information des personnes et vous savez sécuriser, alerter et orienter sans vous substituer.\n",
   "texte_echec": "Certains repères sont encore à consolider. Une nouvelle tentative vous est proposée, sur six autres situations.\n",
   "texte_echec_final": "Certains repères restent à consolider. Nous vous conseillons de relire les fiches indiquées ci-dessus, dans votre carnet, et de revoir les pages du module qu'elles accompagnent. Vous reprendrez l'évaluation quand vous le voudrez, depuis le sommaire : les deux séries de situations alternent d'une tentative à l'autre.\nVous pouvez aussi continuer votre parcours dès maintenant : le module suivant vous est ouvert.\n",
   "consolider": {
    "E1": {
     "texte": "Je cherche la règle et je vérifie qu'elle est à jour. Les moyens du service servent au service. J'exprime un besoin, je n'engage pas la dépense, je ne favorise aucun fournisseur. Je constate l'écart à la livraison et la personne habilitée atteste. À revoir : les épisodes 1 (lundi) et 3 (mercredi). Fiches : « Les moyens du service » et « Vérifier le service fait » dans votre carnet.",
     "fiche": "FICHE-M4-E1"
    },
    "E2": {
     "texte": "Je regarde ce que contient un document avant de le partager, et à qui il va. J'utilise l'outil de mon employeur. Je ne mets aucune donnée de personnes dans un outil d'IA. Un message qui presse ou qui demande un mot de passe est un signal d'alerte, et je signale un incident. À revoir : l'épisode 2 (mardi).",
     "fiche": "FICHE-M4-E2"
    },
    "E3": {
     "texte": "Je sécurise sans me mettre en danger, j'alerte (15, 17, 18) et je signale un presque-accident. J'écoute un collègue en difficulté, je ne promets pas le secret absolu, je l'oriente, je n'enquête pas et je ne qualifie pas. À revoir : l'épisode 4 (jeudi matin).",
     "fiche": "FICHE-M4-E4"
    }
   },
   "rappel": [
    {
     "titre": "Une règle à jour",
     "texte": "Je regarde la date, l'auteur et le statut. Si elle ne répond pas, je demande."
    },
    {
     "titre": "Un besoin, pas une dépense",
     "texte": "J'exprime le besoin ; la personne habilitée engage et atteste."
    },
    {
     "titre": "Le service fait",
     "texte": "Je compare ce qui arrive avec ce qui était prévu, je signale l'écart."
    },
    {
     "titre": "Protéger l'information",
     "texte": "Je ne partage que l'utile, avec qui en a besoin, par l'outil autorisé."
    },
    {
     "titre": "Sécuriser, alerter, orienter",
     "texte": "15, 17, 18 ; j'écoute, je ne promets pas le secret, je n'enquête pas."
    }
   ],
   "retentative": "M4-EVA-E1B",
   "suite": "M4-EVA-FIN"
  },
  "M4-EVA-E1B": {
   "id": "M4-EVA-E1B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C09"
   ],
   "texte": "Malia doit appliquer un barème d'indemnités de déplacement qu'un collègue lui a transmis en capture d'écran, sans date ni auteur.\nQue fait Malia ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle l'applique : il vient d'un collègue sérieux, et il y a urgence à traiter les dossiers.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle cherche le document d'origine, vérifie sa date et son auteur, et demande à son responsable en cas de doute.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle l'applique et le corrigera si quelqu'un le lui reproche plus tard.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-E1B2",
   "note_expert": "Savoir-faire visé : C09-SF1, SF2, C17 (vérifier une source). Item de méthode : barème propre à chaque employeur."
  },
  "M4-EVA-E1B2": {
   "id": "M4-EVA-E1B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Cédric",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C11"
   ],
   "texte": "Cédric reçoit la facture d'un prestataire : quatre jours d'intervention d'un technicien. Cédric sait qu'il n'est venu que deux jours.\nQue fait Cédric ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il transmet la facture pour paiement : le prestataire est connu, et un geste commercial se réglera plus tard.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il signale l'écart par écrit à la personne habilitée, avec les dates de présence, sans valider le paiement.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il renvoie la facture au prestataire, sans en parler à personne.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-E2B",
   "note_expert": "Savoir-faire visé : C11-SF3, SF4 (constater, ne pas valider, transmettre). Qui atteste : propre à chaque employeur (décret 2013-512, art. 4-1 : à valider)."
  },
  "M4-EVA-E2B": {
   "id": "M4-EVA-E2B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Teiva",
   "preuve": "E2",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C10"
   ],
   "texte": "Un agent de la commune appelle Teiva : « Donnez-moi le numéro de cette habitante que vous accompagnez, je la rappelle. »\nQue fait Teiva ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il le donne : l'agent est de la commune, donc de confiance.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il ne le donne pas au téléphone, propose de transmettre lui-même le message, et demande l'accord de son responsable.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il le dicte, puis demande à l'agent de ne pas le noter.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-E2B2",
   "note_expert": "Savoir-faire visé : C10-SF1, SF2 (donnée personnelle : qui en a besoin, avec quel accord). Loi Informatique et libertés applicable en NC (art. 125) : à valider."
  },
  "M4-EVA-E2B2": {
   "id": "M4-EVA-E2B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E2",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C10"
   ],
   "texte": "Malia trouve une clé USB dans le parking de son service. Elle pense qu'un collègue l'a perdue.\nQue fait Malia ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle la branche sur son poste pour voir à qui elle appartient.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle ne la branche pas et la remet au référent informatique de son employeur.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle la branche sur un vieil ordinateur sans importance, pour être prudente.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-E3B",
   "note_expert": "Savoir-faire visé : C10-SF3 (hygiène numérique). Bonne pratique (cybermalveillance.gouv.fr), pas une règle ; référent propre à chaque employeur."
  },
  "M4-EVA-E3B": {
   "id": "M4-EVA-E3B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Cédric",
   "preuve": "E3",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C12"
   ],
   "texte": "À l'accueil, un visiteur s'évanouit et reste allongé sur le carrelage, sans réagir quand on l'appelle.\nQue fait Cédric ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il lui jette de l'eau et le relève pour le faire asseoir.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il appelle le 15, reste avec la personne, la laisse allongée et demande à un collègue de guider les secours.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il attend quelques minutes de voir si la personne se réveille avant d'appeler.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-E3B2",
   "note_expert": "Savoir-faire visé : C12-SF1, SF2 (alerter, 15). Bonne pratique : les premiers gestes sont indiqués par les secours au téléphone."
  },
  "M4-EVA-E3B2": {
   "id": "M4-EVA-E3B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E3",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C12",
    "C18"
   ],
   "texte": "Malia remarque qu'une jeune collègue contractuelle pleure à son poste en fin de journée, plusieurs fois par semaine.\nQue fait Malia ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle va dire au chef de service qu'il harcèle sa collègue.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle lui propose d'en parler, l'écoute, ne promet pas le silence, et l'oriente vers son responsable ou la médecine de prévention.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle fait comme si elle n'avait rien vu, pour ne pas la gêner.",
     "verdict": "risque"
    }
   ],
   "suite": "M4-EVA-RES",
   "note_expert": "Savoir-faire visé : C12-SF3, SF4 (signal, orientation, ne pas qualifier). Interlocuteurs propres à chaque employeur. À faire relire par RH ou prévention."
  },
  "M4-EVA-FIN": {
   "id": "M4-EVA-FIN",
   "type": "fin-section",
   "etape": "Évaluation",
   "titre": "Évaluation terminée",
   "texte": "Votre résultat est affiché sur le sommaire du module. Dernière étape : le bilan de la semaine de Noa, et le vôtre.\n",
   "suite": "MENU"
  },
  "M4-SOR-1": {
   "id": "M4-SOR-1",
   "type": "narration",
   "illustration": "ILL-Q09",
   "etape": "Bilan",
   "titre": "Ce que Noa a appris cette semaine",
   "texte": "Vendredi, fin de matinée. Samuel passe au bureau : le compte rendu de la tournée est lu, le diagnostic peut s'écrire. Voici ce que Noa sait faire maintenant.",
   "points": [
    {
     "titre": "Je cherche la bonne règle, à jour",
     "texte": "Je regarde la date, l'auteur et le statut. Si elle ne répond pas, je demande.",
     "competence": "C09 — Règles"
    },
    {
     "titre": "Je protège l'information des personnes",
     "texte": "Je ne partage que l'utile, avec qui en a besoin, par l'outil autorisé.",
     "competence": "C10 — Données et numérique"
    },
    {
     "titre": "J'utilise les moyens publics à bon escient",
     "texte": "J'exprime un besoin, je n'engage pas la dépense, je constate l'écart et je laisse attester.",
     "competence": "C11 — Moyens publics"
    },
    {
     "titre": "Je sécurise, j'alerte, j'oriente",
     "texte": "Je signale un risque. J'écoute un collègue sans enquêter ni promettre le secret.",
     "competence": "C12 — Santé et sécurité"
    }
   ],
   "competences": [
    "C09",
    "C10",
    "C11",
    "C12"
   ],
   "suite": "M4-SOR-REV"
  },
  "M4-SOR-REV": {
   "id": "M4-SOR-REV",
   "type": "cartes",
   "etape": "Bilan",
   "titre": "Pourquoi revenir sur sa semaine ?",
   "texte": "Malia passe au bureau : « Mes trois questions du vendredi, tu t'en souviens ? Cinq minutes, pas plus. »",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C21"
   ],
   "cartes": [
    {
     "icone": "i-check-cercle",
     "recto": "Qu'est-ce qui a marché ?",
     "verso": "Je le refais exprès. Noa : « Dire non au détour simplement, sans faire la leçon. »"
    },
    {
     "icone": "i-recommencer",
     "recto": "Qu'est-ce que je ferais autrement ?",
     "verso": "Une seule chose, concrète. Noa : « Je regarderai l'arrière-plan avant de laisser publier une photo. »"
    },
    {
     "icone": "i-dialogue",
     "recto": "À qui je demande un retour ?",
     "verso": "Un avis extérieur voit ce que je ne vois pas. Noa : « Je demande à Ana si mon constat était assez clair. »"
    }
   ],
   "encadre": "« Ce n'est pas un examen. C'est ce qui fait qu'on progresse plus vite. » — Malia",
   "suite": "M4-SOR-LIBRE"
  },
  "M4-SOR-LIBRE": {
   "id": "M4-SOR-LIBRE",
   "type": "reponse-libre",
   "etape": "Bilan",
   "titre": "La semaine prochaine",
   "question": "Une chose que je ferai autrement la semaine prochaine, pour agir dans un cadre sécurisé :",
   "apres": "Notez-la quelque part où vous la reverrez lundi : c'est ainsi qu'elle devient une habitude.",
   "competences": [
    "C21"
   ],
   "suite": "M4-SOR-RES"
  },
  "M4-SOR-RES": {
   "id": "M4-SOR-RES",
   "type": "ressources",
   "etape": "Bilan",
   "titre": "Mes ressources",
   "texte": "Les fiches du module sont rangées dans votre carnet : quatre fiches outils. Ouvrez-les pour les imprimer ou les enregistrer en PDF.",
   "fiches": [
    "FICHE-M4-E1",
    "FICHE-M4-E2",
    "FICHE-M4-E3",
    "FICHE-M4-E3B",
    "FICHE-M4-E4",
    "FA-M4-01",
    "FA-M4-02",
    "FA-M4-03"
   ],
   "suite": "M4-FIN"
  },
  "M4-FIN": {
   "id": "M4-FIN",
   "type": "fin",
   "etape": "Bilan",
   "titre": "Bravo, la semaine de Noa est terminée",
   "texte": "Vous avez accompagné Noa, Cédric et Léna pendant une semaine où il a fallu vérifier, refuser, protéger et alerter. Ils savent désormais agir dans un cadre sécurisé.\n",
   "points_titre": "Ce que vous avez appris",
   "points": [
    {
     "titre": "Chercher la bonne règle, à jour",
     "texte": "Date, auteur, statut ; je demande quand le texte ne répond pas."
    },
    {
     "titre": "Protéger l'information",
     "texte": "Je ne partage que l'utile, avec qui en a besoin, par l'outil autorisé."
    },
    {
     "titre": "Utiliser les moyens à bon escient",
     "texte": "J'exprime un besoin, je constate l'écart, la personne habilitée atteste."
    },
    {
     "titre": "Sécuriser, alerter, orienter",
     "texte": "Je signale un risque, j'écoute sans enquêter, je ne promets pas le secret."
    }
   ],
   "dossier": "La tournée des six lieux est lancée, le compte rendu est remis. Prochaine étape du dossier : la première permanence, au module 5.",
   "prochain": {
    "titre": "M5 — J'incarne le service public",
    "texte": "Lundi prochain, la première permanence approche. Noa y observe l'accueil avec Teiva et Élise : égalité d'accès, neutralité, orientation des habitants."
   },
   "suite": "MENU"
  }
 },
 "fiches": {
  "FICHE-M4-E1": {
   "id": "FICHE-M4-E1",
   "type": "fiche",
   "code": "M4-E1",
   "modele": "checklist",
   "categorie": "outil",
   "titre": "Quelle règle, est-elle à jour ?",
   "quand": "Avant d'agir, quand je ne suis pas sûr de la règle ou de la procédure qui s'applique.",
   "questions": [
    {
     "q": "Quelle règle ou procédure s'applique ?",
     "aide": "Celle qui concerne ma situation, pas une règle voisine.",
     "verifier": [
      "Je cherche d'abord sur l'intranet ou auprès de mon responsable.",
      "Je note le titre exact du document."
     ],
     "si_non": "Je demande à mon responsable quel document fait foi."
    },
    {
     "q": "Est-elle à jour ?",
     "aide": "Une version plus récente peut avoir remplacé celle que j'ai.",
     "verifier": [
      "Je regarde la date, l'auteur et le statut (« en vigueur »).",
      "Je retire l'ancienne version de mon classeur ou de mon dossier."
     ],
     "si_non": "Je demande à son auteur si la version que j'ai est toujours la bonne."
    },
    {
     "q": "Que dit-elle, exactement, sur ma situation ?",
     "aide": "Je lis le texte, pas un résumé.",
     "verifier": [
      "Je relève la phrase qui répond à ma question.",
      "Je repère ce qu'elle ne dit pas."
     ],
     "si_non": "Je ne devine pas : je pose la question à mon responsable."
    },
    {
     "q": "À qui je demande quand elle ne répond pas ?",
     "aide": "Le circuit varie selon mon employeur.",
     "verifier": [
      "Mon responsable d'abord, qui m'oriente vers les ressources humaines ou le juridique.",
      "Je garde la réponse écrite."
     ],
     "si_non": "Je demande qui est le référent chez mon employeur."
    }
   ],
   "conclusion": {
    "titre": "Dans tous les cas : je garde la trace",
    "texte": "Je note la version utilisée, sa date et la personne qui m'a répondu."
   },
   "a_retenir": "Je cherche la règle, je vérifie qu'elle est à jour, et je demande quand elle ne répond pas.",
   "reperes": [
    "Mon responsable",
    "Le référent chez mon employeur"
   ],
   "competences": [
    "C09",
    "C17"
   ],
   "version": "0.1",
   "valider": "Principes de l'action administrative et procédures internes : propres à chaque employeur. Aucun texte calédonien unique (corpus M4, C09-S1, C09-S2).",
   "pdf": "assets/fiches/FO-M4-E1.pdf"
  },
  "FICHE-M4-E2": {
   "id": "FICHE-M4-E2",
   "type": "fiche",
   "code": "M4-E2",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Partager sans risque (et l'IA)",
   "quand": "Avant d'envoyer, de publier ou de coller un document qui contient des informations sur des personnes.",
   "etapes": [
    {
     "titre": "1. Je regarde ce que contient le document",
     "texte": "Noms, téléphones, situations de personnes ? Si oui, je prends des précautions."
    },
    {
     "titre": "2. Je me demande à qui j'envoie, et pourquoi",
     "texte": "La personne en a-t-elle besoin pour son travail ? Sinon, je n'envoie pas."
    },
    {
     "titre": "3. Je choisis l'outil et l'accès",
     "texte": "L'outil de mon employeur, un accès limité, jamais ma messagerie personnelle."
    },
    {
     "titre": "4. Je vérifie avant de cliquer",
     "texte": "Un message qui presse, qui menace ou qui demande un mot de passe est un signal d'alerte."
    }
   ],
   "types": [
    {
     "titre": "Un total, sans noms",
     "texte": "Je peux le partager largement, avec l'outil de mon employeur."
    },
    {
     "titre": "Un fichier de personnes",
     "texte": "Accès limité, à ceux qui en ont besoin, avec l'accord de mon responsable."
    },
    {
     "titre": "Un outil d'IA",
     "texte": "Je n'y mets aucune donnée de personnes ; ce qu'il répond, je le vérifie avant de l'utiliser."
    },
    {
     "titre": "Une photo ou une publication",
     "texte": "Je regarde ce qui est lisible à l'arrière-plan avant de publier."
    }
   ],
   "exemple": "« Léna, je ne peux pas vous envoyer le tableau nominatif. Voici le total par lieu, sans noms. Pour plus de détail, il faut l'accord de mon responsable. »",
   "a_retenir": "Je ne partage que l'utile, avec qui en a besoin, par l'outil de mon employeur. En cas de doute, je demande.",
   "reperes": [
    "L'outil autorisé par mon employeur",
    "Mon responsable et le référent informatique"
   ],
   "competences": [
    "C10"
   ],
   "version": "0.1",
   "valider": "Données personnelles (loi Informatique et libertés, art. 125), secret (délibération 81, art. 20-21) : à faire valider. IA et cybersécurité : bonnes pratiques, pas des règles (corpus M4, n° 6).",
   "pdf": "assets/fiches/FO-M4-E2.pdf"
  },
  "FICHE-M4-E3": {
   "id": "FICHE-M4-E3",
   "type": "fiche",
   "code": "M4-E3",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Les moyens du service",
   "quand": "Quand on me demande un véhicule, du matériel, une commande ou un achat.",
   "etapes": [
    {
     "titre": "1. Je regarde si c'est pour le service",
     "texte": "Un véhicule, une imprimante, un téléphone du service servent au service. Si la demande est personnelle ou extérieure, je demande à mon responsable."
    },
    {
     "titre": "2. Je dis le besoin, je n'engage rien",
     "texte": "Quoi, combien, pour quand. La personne habilitée décide et engage la dépense, par un bon de commande ou un contrat."
    },
    {
     "titre": "3. Je ne favorise personne",
     "texte": "Je note une suggestion de fournisseur comme une piste. Le circuit compare les offres."
    },
    {
     "titre": "4. Je garde la trace",
     "texte": "Carnet de bord, besoin écrit, réponse reçue. Je range le tout là où mon service le prévoit."
    }
   ],
   "types": [
    {
     "titre": "Un véhicule",
     "texte": "Usage de service. Je dis non simplement à un détour personnel, et je propose une autre solution."
    },
    {
     "titre": "Une impression ou une fourniture",
     "texte": "Pour le service seulement. Pour autre chose, je demande à mon responsable."
    },
    {
     "titre": "Un achat",
     "texte": "J'exprime le besoin ; je ne commande pas moi-même."
    },
    {
     "titre": "Un fournisseur recommandé",
     "texte": "Une piste parmi d'autres, ni retenue ni écartée d'avance."
    }
   ],
   "exemple": "« Cédric, le pick-up sert au service. Pour ton colis, on cherche une autre solution. »",
   "a_retenir": "Les moyens du service servent au service. J'exprime le besoin ; je n'engage pas la dépense.",
   "reperes": [
    "Mon responsable",
    "La personne habilitée à commander chez mon employeur"
   ],
   "competences": [
    "C11",
    "C09"
   ],
   "version": "0.1",
   "valider": "Usage des moyens (règlement des véhicules de l'employeur, à lire) ; mise en concurrence : délibération 398, art. 2 (relu) et délibération 424 (à relire) ; aucun seuil cité. Bonnes pratiques de sobriété : aucune règle calédonienne trouvée.",
   "pdf": "assets/fiches/FO-M4-E3.pdf"
  },
  "FICHE-M4-E3B": {
   "id": "FICHE-M4-E3B",
   "type": "fiche",
   "code": "M4-E3B",
   "modele": "checklist",
   "categorie": "outil",
   "titre": "Vérifier le service fait",
   "quand": "À la livraison d'une commande ou à la fin d'une prestation, avant qu'une facture soit payée.",
   "questions": [
    {
     "q": "Qu'est-ce qui était prévu ?",
     "aide": "Le bon de commande, le contrat ou la convention.",
     "verifier": [
      "Je retrouve la quantité, la date, le lieu.",
      "Je regarde ce qui a été demandé, pas ce dont je me souviens."
     ],
     "si_non": "Je demande le document à mon responsable ou à la personne qui a passé la commande."
    },
    {
     "q": "Qu'est-ce qui est arrivé ?",
     "aide": "Je compte, je regarde, je compare.",
     "verifier": [
      "Je compte ce qui est livré.",
      "Je garde le bon de livraison et, si utile, une photo."
     ],
     "si_non": "Je note ce qui manque ou ce qui diffère, sans le corriger moi-même."
    },
    {
     "q": "Y a-t-il un écart ?",
     "aide": "Une quantité, une date, une qualité différentes de ce qui était prévu.",
     "verifier": [
      "J'écris l'écart avec des chiffres et des dates.",
      "Je ne valide pas la facture sur une promesse."
     ],
     "si_non": "S'il n'y a pas d'écart, je le dis à la personne habilitée avec le bon de livraison."
    },
    {
     "q": "Qui atteste ?",
     "aide": "Le circuit varie selon mon employeur.",
     "verifier": [
      "Je remets mon constat à la personne habilitée.",
      "Je ne signe pas à sa place."
     ],
     "si_non": "Je demande à mon responsable qui est la personne habilitée chez nous."
    }
   ],
   "conclusion": {
    "titre": "Dans tous les cas, j'écris ce que j'ai constaté",
    "texte": "Une date, un chiffre, une pièce jointe. La décision de payer ou non ne m'appartient pas."
   },
   "a_retenir": "Je compare, je constate, je transmets. L'attestation est faite par la personne habilitée.",
   "reperes": [
    "La personne habilitée à attester le service fait",
    "Mon responsable"
   ],
   "competences": [
    "C11",
    "C09"
   ],
   "version": "0.1",
   "valider": "Qui atteste le service fait : décret 2013-512, art. 4-1 (ordonnateur ou personne habilitée) et accord local DGFiP. À valider par l'expert. GBCP non citée (applicabilité en NC non établie).",
   "pdf": "assets/fiches/FO-M4-E3B.pdf"
  },
  "FICHE-M4-E4": {
   "id": "FICHE-M4-E4",
   "type": "fiche",
   "code": "M4-E4",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Qui alerter ?",
   "quand": "Quand je vois un danger, un accident, ou un collègue qui semble en difficulté.",
   "etapes": [
    {
     "titre": "1. Je sécurise, sans me mettre en danger",
     "texte": "J'écarte le danger si je le peux, je protège la zone et je préviens les personnes autour."
    },
    {
     "titre": "2. J'alerte si c'est grave",
     "texte": "Le 15 (SAMU) pour une urgence de santé, le 18 (pompiers) pour un incendie ou un danger, le 17 (police, gendarmerie)."
    },
    {
     "titre": "3. Je préviens mon responsable",
     "texte": "Je lui dis ce que j'ai vu, sans interpréter. Il décide de la suite avec les ressources humaines."
    },
    {
     "titre": "4. Je signale pour que ce soit corrigé",
     "texte": "Même un presque-accident se signale : c'est ainsi qu'on évite le suivant."
    }
   ],
   "types": [
    {
     "titre": "Un danger",
     "texte": "Je sécurise, je préviens, je signale."
    },
    {
     "titre": "Un accident",
     "texte": "J'appelle le 15 si c'est grave, puis je préviens mon responsable et les ressources humaines."
    },
    {
     "titre": "Un collègue en difficulté",
     "texte": "J'écoute, je ne promets pas le secret absolu, j'oriente vers son responsable, les ressources humaines ou la médecine de prévention."
    },
    {
     "titre": "Des remarques qui se répètent",
     "texte": "Je n'enquête pas, je ne qualifie pas. J'oriente, et je peux témoigner si on me le demande."
    }
   ],
   "exemple": "« Je ne peux pas te promettre de n'en parler à personne, mais je ne ferai rien sans t'en parler d'abord. Tu peux en parler à ton responsable ou à la médecine de prévention. »",
   "a_retenir": "Je sécurise, j'alerte, j'oriente. Je ne me substitue ni aux secours ni aux services compétents.",
   "reperes": [
    "Mon responsable",
    "Les ressources humaines",
    "La médecine de prévention",
    "Un représentant du personnel au CTP"
   ],
   "competences": [
    "C12",
    "C18"
   ],
   "version": "0.1",
   "valider": "Numéros d'urgence : gendarmerie, pages des brigades de NC. Danger grave et imminent : délibération 181, art. 76 (relu). Témoin de harcèlement non sanctionnable : loi du pays 2014-9, art. 11 (relu). Interlocuteurs et dispositifs d'écoute : à obtenir auprès des employeurs. Relecture RH ou prévention requise.",
   "pdf": "assets/fiches/FO-M4-E4.pdf"
  },
  "FA-M4-01": {
   "id": "FA-M4-01",
   "type": "fiche",
   "modele": "pdf",
   "categorie": "apport",
   "titre": "Protéger les données et l'information",
   "quand": "Ne partager que l'utile, avec qui en a besoin, par l'outil de mon employeur.",
   "pdf": "assets/fiches/FA-M4-01.pdf",
   "competences": [
    "C10"
   ],
   "version": "0.1"
  },
  "FA-M4-02": {
   "id": "FA-M4-02",
   "type": "fiche",
   "modele": "pdf",
   "categorie": "apport",
   "titre": "Commande publique : contrat, bon de commande, service fait",
   "quand": "Exprimer un besoin sans engager la dépense, et vérifier le service fait.",
   "pdf": "assets/fiches/FA-M4-02.pdf",
   "competences": [
    "C11",
    "C09"
   ],
   "version": "0.1"
  },
  "FA-M4-03": {
   "id": "FA-M4-03",
   "type": "fiche",
   "modele": "pdf",
   "categorie": "apport",
   "titre": "Santé, sécurité et harcèlement : les repères",
   "quand": "Sécuriser, alerter, orienter face à un danger ou à un collègue en difficulté.",
   "pdf": "assets/fiches/FA-M4-03.pdf",
   "competences": [
    "C12",
    "C18"
   ],
   "version": "0.1"
  }
 },
 "illustrations": {
  "ILL-Q01": {
   "scene": "Lundi 8 h 10, Malia tend sa note de procédure à Noa",
   "personnages": "Samuel, Noa, Malia",
   "alt": "Lundi matin au pôle études et projets. Malia ouvre un classeur et tend à Noa une feuille imprimée ; Samuel, à l'arrière, regarde un calendrier."
  },
  "ILL-Q02": {
   "scene": "Noa compare deux versions sur son ordinateur",
   "personnages": "Noa",
   "alt": "Noa à son bureau compare à l'écran la procédure de l'intranet et la note papier posée à côté de son clavier."
  },
  "ILL-Q03": {
   "scene": "Noa en télétravail, tableau des habitants à l'écran",
   "personnages": "Noa",
   "alt": "Noa à sa table à la maison, un ordinateur portable ouvert sur un tableau dont les lignes sont floues, une tasse de café à côté."
  },
  "INF-M4-01": {
   "scene": "Quatre questions avant d'agir",
   "personnages": "—",
   "alt": "Quatre cartes. Quelle règle s'applique ? Est-elle à jour (date, auteur, statut) ? Que dit-elle exactement ? Si elle ne répond pas, je demande à mon responsable."
  },
  "INF-M4-02": {
   "scene": "Cinq réflexes pour protéger l'information",
   "personnages": "—",
   "alt": "Cinq cartes. Je repère les données sur des personnes. Je partage par l'outil de mon employeur. Je ne mets rien dans un outil d'IA non autorisé. Je ne donne jamais mon mot de passe. Je regarde ce qui est lisible avant de publier."
  },
  "ILL-Q04": {
   "scene": "Mercredi 7 h 50 sous l'abri des véhicules, Cédric prépare le pick-up",
   "personnages": "Cédric, Noa",
   "alt": "Sous l'abri des véhicules de service, Cédric ouvre le carnet de bord à côté d'un pick-up blanc ; Noa, un carton de matériel dans les bras, l'écoute."
  },
  "ILL-Q05": {
   "scene": "Mercredi 14 h, Noa compte les questionnaires livrés",
   "personnages": "Noa, Cédric",
   "alt": "Au comptoir de l'accueil, Noa compte à voix basse des paquets de feuilles sorties d'un carton ouvert ; Cédric, à côté, tient un bon de livraison."
  },
  "ILL-Q06": {
   "scene": "Jeudi 7 h 40, un câble dans le hall",
   "personnages": "Ana, Noa",
   "alt": "Dans le hall d'accueil, Ana, les bras chargés de dossiers, rattrape son équilibre au-dessus d'un câble de rallonge tendu au sol ; Noa, tout près, tend la main."
  },
  "ILL-Q07": {
   "scene": "Jeudi 9 h, visio avec Léna",
   "personnages": "Noa, Léna",
   "alt": "Noa à son bureau, devant son ordinateur, écoute avec attention Léna qu'on devine, petite et floue, dans la fenêtre de visioconférence."
  },
  "ILL-Q08": {
   "scene": "Jeudi 11 h, salle communale, première permanence",
   "personnages": "Teiva, Joël, Noa",
   "alt": "Dans une salle communale, Teiva installe son ordinateur sur une table pliante, Joël empile des chaises, Noa les regarde ; le pick-up blanc est garé sous le préau, visible par la porte."
  },
  "ILL-Q09": {
   "scene": "Vendredi, Samuel passe au bureau de Noa",
   "personnages": "Samuel, Noa",
   "alt": "Vendredi en fin de matinée, Samuel, debout près du bureau de Noa, lui tend quelques feuilles avec un sourire ; Noa lève les yeux de son écran."
  },
  "INF-M4-03": {
   "scene": "Cinq repères pour les moyens du service",
   "personnages": "—",
   "alt": "Cinq cartes. Les moyens du service servent au service. Je dis le besoin, je n'engage aucune dépense. Je ne favorise aucun fournisseur. Je compare ce qui arrive avec ce qui était prévu. Je signale l'écart, la personne habilitée atteste."
  },
  "INF-M4-04": {
   "scene": "Quatre gestes face à un risque ou une difficulté",
   "personnages": "—",
   "alt": "Quatre étapes. Je sécurise sans me mettre en danger. J'alerte : 15, 18, 17. J'écoute et j'oriente, sans promettre le secret absolu. Je signale pour que le risque soit corrigé."
  }
 },
 "source": "Storyboard — M4 en pages v0.3.md"
};
