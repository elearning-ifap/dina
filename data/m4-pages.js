/* GÉNÉRÉ par build/build.py depuis « Storyboard — M4 en pages v0.1.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M4-PAGES",
  "type": "module",
  "cle": "m4-pages",
  "titre": "J'agis dans un cadre sécurisé",
  "code": "M4",
  "duree": "1 h 45 environ",
  "intro": "Prototype du module 4 en pages qui défilent (épisodes 1 et 2). Noa est à l'ÉLAN depuis quelques semaines. Pour Passerelles, l'ÉLAN réalise le diagnostic des six lieux : tournée jeudi, fichier d'habitants accompagnés à manier avec soin. Du lundi au mardi, vérifiez que la règle est à jour, puis protégez l'information.",
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
    "FICHE-M4-E2"
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
   "valider": "Principes de l'action administrative et procédures internes : propres à chaque employeur. Aucun texte calédonien unique (corpus M4, C09-S1, C09-S2)."
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
   "valider": "Données personnelles (loi Informatique et libertés, art. 125), secret (délibération 81, art. 20-21) : à faire valider. IA et cybersécurité : bonnes pratiques, pas des règles (corpus M4, n° 6)."
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
  }
 },
 "source": "Storyboard — M4 en pages v0.1.md"
};
