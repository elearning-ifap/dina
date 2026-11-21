/* GÉNÉRÉ par build/build.py depuis « Storyboard — M3 en pages v0.2.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M3-PAGES",
  "type": "module",
  "cle": "m3-pages",
  "titre": "Je travaille avec les autres",
  "code": "M3",
  "duree": "1 h 15 environ",
  "intro": "Prototype du module 3 en pages qui défilent. Ariane a accepté l'appui de l'ÉLAN : il faut maintenant lancer la permanence de Passerelles avec la commune et la province. Du lundi au vendredi, choisissez le bon canal et les bons mots, faites circuler l'information, désamorcez un malentendu et gardez le cap quand tout change.",
  "sections": [
   {
    "id": "ep1",
    "libelle": "Épisode 1",
    "jour": "Lundi",
    "savoir": "Choisir le bon canal et les bons mots",
    "titre": "Le bon canal, les bons mots",
    "debut": "M3-P1",
    "duree": "15 min",
    "accroche": "Trois personnes à joindre avant midi, et un brouillon qui ne passera pas."
   },
   {
    "id": "ep2",
    "libelle": "Épisode 2",
    "jour": "Mardi",
    "savoir": "Faire avancer à plusieurs",
    "titre": "Faire avancer à plusieurs",
    "debut": "M3-P2",
    "duree": "18 min",
    "accroche": "Mardi, vu par Cédric. Deux réunions dans la même salle, une convention, deux versions du même document."
   },
   {
    "id": "ep3",
    "libelle": "Épisode 3",
    "jour": "Mercredi",
    "savoir": "Désamorcer un malentendu",
    "titre": "Un malentendu sur les chiffres",
    "debut": "M3-P3",
    "duree": "14 min",
    "accroche": "Un message sec de Léna. Noa n'a rien voulu critiquer."
   },
   {
    "id": "defi",
    "libelle": "Défi",
    "jour": "Jeudi",
    "savoir": "Le défi : animer la réunion de lancement",
    "titre": "La réunion de lancement",
    "debut": "M3-DEF",
    "duree": "10 min",
    "accroche": "Salle communale, 14 h 30. Quatre imprévus, puis un relevé de décisions."
   },
   {
    "id": "eval",
    "libelle": "Évaluation",
    "jour": "Vendredi",
    "savoir": "L'évaluation du module",
    "titre": "L'évaluation",
    "debut": "M3-EVA-INTRO",
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
    "debut": "M3-SOR-1",
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
   "roles": "Passerelles porte le projet et décide. L'ÉLAN qualifie, coordonne et appuie.",
   "jalons": [
    {
     "id": "joints",
     "jour": "Lundi",
     "libelle": "Les trois organisations sont jointes, la réunion est convoquée",
     "section": "ep1"
    },
    {
     "id": "arrete",
     "jour": "Mardi",
     "libelle": "Heure, salle et document de référence arrêtés",
     "section": "ep2"
    },
    {
     "id": "chiffres",
     "jour": "Mercredi",
     "libelle": "Les chiffres de la province sont partagés sans malentendu",
     "section": "ep3"
    },
    {
     "id": "reunion",
     "jour": "Jeudi",
     "libelle": "Réunion de lancement tenue, relevé de décisions envoyé",
     "section": "defi"
    },
    {
     "id": "calendrier",
     "jour": "Vendredi",
     "libelle": "Calendrier commun et tableau « qui fait quoi » validés",
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
   "Teiva": "Médiateur numérique, association Passerelles",
   "Léna": "Chargée d'études statistiques, administration provinciale",
   "Élise": "Agente d'accueil, une commune"
  }
 },
 "ecrans": {
  "M3-P1": {
   "id": "M3-P1",
   "type": "page",
   "etape": "Épisode 1",
   "titre": "Le bon canal, les bons mots",
   "chapeau": "Samuel annonce que l'appui est acquis et que la réunion de lancement se tient jeudi. Trois personnes à joindre avant midi. Vous choisissez le canal de chacune, vous réparez un brouillon, puis vous écoutez Joël jusqu'au bout.",
   "competences": [
    "C06",
    "C17"
   ],
   "competences_lib": [
    {
     "code": "C06",
     "libelle": "Je communique de façon professionnelle et adaptée."
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
     "id": "corriger",
     "libelle": "À corriger",
     "court": "À corriger"
    },
    {
     "id": "garder",
     "libelle": "Je le garde",
     "court": "Je le garde"
    }
   ],
   "items": [
    {
     "id": "J",
     "libelle": "Joël est en tournée toute la matinée. Il décroche rarement avant la fin de la matinée. Il doit confirmer sa présence jeudi.",
     "court": "Joël, en tournée",
     "attendu": "appel",
     "feedback": "Un courriel resterait sans réponse jusqu'au soir. Un appel en fin de matinée, suivi d'un court SMS qui rappelle le jour, l'heure et le lieu, le joint et laisse une trace."
    },
    {
     "id": "E",
     "libelle": "Élise relève la messagerie de l'accueil une fois par jour. Noa n'a qu'une demande à lui faire.",
     "court": "Élise, à l'accueil",
     "attendu": "courriel",
     "feedback": "Une demande, un objet clair, une réponse possible en une ligne. Un appel la dérangerait à l'accueil, un SMS ne lui laisserait aucune trace à classer."
    },
    {
     "id": "L",
     "libelle": "Léna doit pouvoir justifier auprès de son responsable ce qu'elle fournit et pour quoi.",
     "court": "Léna, chargée d'études",
     "attendu": "courriel",
     "feedback": "Léna a besoin d'une trace écrite. Son responsable en copie ne se justifie que s'il doit décider ; ici, une copie noierait la demande."
    },
    {
     "id": "B1",
     "libelle": "Le message n'a pas d'objet.",
     "court": "Pas d'objet",
     "attendu": "corriger",
     "feedback": "Sans objet, le message se perd parmi les autres. Un objet dit en une ligne ce qu'on attend."
    },
    {
     "id": "B2",
     "libelle": "« Le COPIL de jeudi » et « les livrables de la permanence » ne sont pas expliqués.",
     "court": "Les sigles",
     "attendu": "corriger",
     "feedback": "Élise ne travaille pas avec ces mots. Elle se demande de quoi on parle, et n'ose peut-être pas le dire."
    },
    {
     "id": "B3",
     "libelle": "Deux demandes sont mélangées : la salle, et le matériel de visio.",
     "court": "Deux demandes",
     "attendu": "corriger",
     "feedback": "On répond à une demande à la fois. La seconde passe à la trappe."
    },
    {
     "id": "B4",
     "libelle": "Six personnes sont en copie.",
     "court": "Six personnes en copie",
     "attendu": "corriger",
     "feedback": "Chacun suppose qu'un autre répondra. En copie, seuls ceux qui doivent savoir ou décider."
    },
    {
     "id": "B5",
     "libelle": "La date, l'heure et le motif de la réunion sont écrits dans le message.",
     "court": "Date, heure, motif",
     "attendu": "garder",
     "feedback": "C'est exactement ce dont Élise a besoin pour répondre."
    },
    {
     "id": "B6",
     "libelle": "Le message commence par « Bonjour Élise » et finit par « Cordialement ».",
     "court": "Formules de politesse",
     "attendu": "garder",
     "feedback": "Simple et respectueux. Noa vouvoie Élise ; il n'y a rien à changer."
    },
    {
     "id": "Q1",
     "libelle": "Joël finit en disant « Jeudi, ça devrait aller. On sera rentrés de la tournée dans l'après-midi, quand on aura fini avec les gens. » Que fait Noa ?",
     "court": "La fin de l'appel",
     "attendu": "reformule",
     "feedback": "En reformulant et en confirmant par SMS, Noa vérifie que les deux entendent la même heure, sans reprocher à Joël son rythme. Conclure sans vérifier laisse deux heures différentes en tête ; couper la parole fait perdre ce que Joël allait dire."
    },
    {
     "id": "T1",
     "libelle": "Relancer un partenaire qui doit répondre demain midi pour la salle.",
     "court": "Relancer un partenaire",
     "attendu": "courriel",
     "feedback": "La relance doit laisser une trace datée : le délai y est écrit, et on pourra le retrouver."
    },
    {
     "id": "T2",
     "libelle": "Prévenir un habitant qui n'a pas d'accès internet que son rendez-vous est reporté.",
     "court": "Prévenir un habitant",
     "attendu": "appel",
     "feedback": "L'appel atteint la personne là où elle est. Un courriel ne lui arriverait pas."
    },
    {
     "id": "T3",
     "libelle": "Alerter son responsable, en déplacement, qu'une échéance de 15 h est menacée.",
     "court": "Alerter son responsable",
     "attendu": "sms",
     "feedback": "Un SMS court, lu entre deux échanges, dit l'essentiel : ce qui arrive et ce qu'on propose."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Lundi : l'appui est acquis",
     "illustration": "ILL-T01",
     "texte": "Lundi, 7 h 45, bureau du pôle. Ariane a dit oui à la fin de la semaine dernière : l'ÉLAN appuie la permanence de Passerelles. Il faut maintenant la lancer, avec Passerelles, la commune et la province.",
     "repliques": [
      {
       "personnage": "Samuel",
       "canal": "oral",
       "texte": "« Ariane a dit oui. Réunion de lancement jeudi après-midi avec Passerelles, la commune et la province. C'est toi qui l'animes. »"
      },
      {
       "personnage": "Malia",
       "canal": "oral",
       "texte": "« Une réunion réussie, c'est surtout ce qu'on fait avant, avec les autres. »"
      }
     ],
     "et_vous": "Quand avez-vous dû joindre trois personnes différentes pour la même chose ?"
    },
    {
     "type": "tri",
     "id": "canal",
     "phase": "situation",
     "titre": "Trois personnes, trois situations",
     "competences": [
      "C06"
     ],
     "items": [
      "J",
      "E",
      "L"
     ],
     "categories": [
      {
       "id": "appel",
       "libelle": "Un appel en fin de matinée, puis un SMS de confirmation",
       "court": "Un appel, puis un SMS"
      },
      {
       "id": "courriel",
       "libelle": "Un courriel court, avec un objet clair",
       "court": "Un courriel court"
      },
      {
       "id": "copie",
       "libelle": "Un courriel avec les responsables en copie",
       "court": "Un courriel avec copie"
      }
     ],
     "consigne": "Pour chaque personne, quel canal Noa choisit-il ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Le bon canal dépend de la personne, de l'urgence et de la trace dont on a besoin.",
     "bilan_tout": "Joël, Élise et Léna seront joints le bon jour, par le bon canal.",
     "valider": "Canaux réellement autorisés et usages (SMS, messagerie, visio) selon l'employeur : aucun guide calédonien commun. Le module enseigne le raisonnement (urgence, complexité, trace, interlocuteur), pas une liste d'outils."
    },
    {
     "type": "tri",
     "id": "brouillon",
     "phase": "situation",
     "titre": "Le brouillon de Noa",
     "competences": [
      "C06"
     ],
     "items": [
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6"
     ],
     "consigne": "Malia relit le brouillon d'invitation que Noa destine à Élise. Pour chaque point : à corriger, ou je le garde ?",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "Le repère vient juste dessous. Notez ce que vous auriez laissé passer.",
     "bilan_tout": "Vous voyez les défauts d'un message avant de l'envoyer. La suite vous donne les mots pour les nommer."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Communiquer en professionnel",
     "competences": [
      "C06"
     ],
     "texte": "Noa a le bon canal. Reste à savoir ce qu'on écrit et comment on écoute.",
     "regle": "Je choisis le canal selon la personne et l'urgence, j'écris une demande claire, et je m'assure que l'autre a compris la même chose que moi.",
     "regle_clair": "Un **canal** est le moyen de contact (appel, courriel, SMS, rencontre). **Reformuler**, c'est redire avec ses mots ce qu'on a compris, pour que l'autre confirme.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M3-01"
      }
     ],
     "methode_titre": "Cinq repères pour communiquer",
     "methode": [
      "Je choisis le canal selon l'urgence, la complexité, la trace nécessaire et l'interlocuteur.",
      "Un objet clair, une demande par message, des sigles expliqués.",
      "J'écoute, je reformule, je vérifie qu'on a compris la même chose.",
      "Je m'adapte à la personne et j'explicite ce qui peut se comprendre autrement, comme une date ou une heure.",
      "Derrière chaque message, il y a un usager. J'écris pour être compris."
     ],
     "guichet": "Les moyens de contact autorisés varient selon l'employeur. En cas de doute, je demande à mon responsable.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Écrire clair.** Les fiches « langage clair » de la direction interministérielle de la transformation publique (DITP) donnent des repères sur la longueur des phrases, l'objet et la structure d'un courriel. **La discrétion.** Ce que je sais par mes fonctions n'est pas à diffuser : délibération n° 81 du 24 juillet 1990, art. 20 et 21."
     },
     "valider": "Écriture administrative (DITP, circulaire 2023-BCA-32080 du gouvernement : à ne pas présenter comme règle commune) et discrétion (délibération 81, art. 20-21) : à faire valider par un formateur IFAP en communication et un juriste RH."
    },
    {
     "type": "message",
     "id": "invitation",
     "phase": "application",
     "titre": "Le message de Noa à Élise",
     "competences": [
      "C06"
     ],
     "texte": "Noa réécrit son message. Composez-le : choisissez une phrase pour chaque partie.",
     "brief": "Élise relève la messagerie une fois par jour. Noa la vouvoie.",
     "destinataire": "Élise",
     "objet": "Réunion jeudi 14 h : la salle communale est-elle libre ?",
     "salutation": "Bonjour Élise,",
     "signature": "Cordialement,\nNoa",
     "synthese": "Une demande, une date, ce qu'on attend d'elle et pour quand.",
     "bouton": "Vérifier mon message",
     "parties": [
      {
       "id": "demande",
       "libelle": "Ma demande",
       "options": [
        {
         "id": "A",
         "texte": "La salle communale est-elle libre jeudi à 14 h pour une réunion de lancement de la permanence de Passerelles ?",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Je cherche une salle pour la réunion, pouvez-vous m'aider pour la salle et aussi pour le matériel de visio ?",
         "verdict": "risque"
        },
        {
         "id": "C",
         "texte": "Pour le COPIL de jeudi, la salle est-elle ok ?",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Une seule demande, avec la date, l'heure et le motif. Sans sigle."
      },
      {
       "id": "contexte",
       "libelle": "Qui sera là",
       "options": [
        {
         "id": "A",
         "texte": "Seront présents Joël et Teiva de Passerelles, Léna de la province, et moi pour l'ÉLAN.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Nous serons plusieurs.",
         "verdict": "partiel"
        },
        {
         "id": "C",
         "texte": "Tout le monde sera là, comme prévu.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Élise sait combien de chaises préparer et qui elle recevra."
      },
      {
       "id": "attente",
       "libelle": "Ce que j'attends",
       "options": [
        {
         "id": "A",
         "texte": "Une réponse d'ici demain midi me permettrait de confirmer à tous.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Merci de me répondre dès que possible.",
         "verdict": "risque"
        },
        {
         "id": "C",
         "texte": "Je reviendrai vers vous.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Un délai précis permet à Élise de s'organiser et à Noa de tenir son propre calendrier."
      }
     ]
    },
    {
     "type": "recit",
     "phase": "application",
     "titre": "Joël, au téléphone",
     "illustration": "ILL-T02",
     "texte": "11 h 40. Noa appelle Joël, qui vient de finir une tournée. Joël répond longuement, avec des détours, et c'est à la fin que l'essentiel arrive.",
     "repliques": [
      {
       "personnage": "Joël",
       "canal": "appel",
       "texte": "« Jeudi, ça devrait aller. On sera rentrés de la tournée dans l'après-midi, quand on aura fini avec les gens. Après, on verra avec les bénévoles. »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "joel",
     "phase": "application",
     "titre": "Quelle heure, exactement ?",
     "competences": [
      "C06"
     ],
     "items": [
      "Q1"
     ],
     "categories": [
      {
       "id": "reformule",
       "libelle": "Il laisse Joël finir, reformule (« Vous seriez à la salle vers 14 h ? »), puis confirme l'heure par SMS.",
       "court": "Il reformule, puis confirme par SMS."
      },
      {
       "id": "coupe",
       "libelle": "Il l'interrompt pour fixer l'heure vite : il a trois autres appels à passer.",
       "court": "Il l'interrompt pour fixer l'heure."
      },
      {
       "id": "note",
       "libelle": "Il note « jeudi, dans l'après-midi » et remercie.",
       "court": "Il note « dans l'après-midi »."
      },
      {
       "id": "conclut",
       "libelle": "Il répond « Parfait, à jeudi 14 h » sans vérifier.",
       "court": "Il conclut sans vérifier."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on vérifie, sans reprocher à l'autre sa façon de parler.",
     "bilan_tout": "Joël répond par SMS : « 14 h, d'accord, mais plutôt 14 h 15. » Noa sait maintenant à quoi s'en tenir.",
     "valider": "Posture « vérifier et expliciter » plutôt que supposer (D94) ; la difficulté vient de la situation, pas d'une origine. Relecture de sensibilité par un expert en interculturel calédonien avant validation."
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Trois autres messages",
     "competences": [
      "C06"
     ],
     "items": [
      "T1",
      "T2",
      "T3"
     ],
     "categories": [
      {
       "id": "courriel",
       "libelle": "Un courriel, avec trace",
       "court": "Un courriel, avec trace"
      },
      {
       "id": "appel",
       "libelle": "Un appel",
       "court": "Un appel"
      },
      {
       "id": "sms",
       "libelle": "Un SMS court",
       "court": "Un SMS court"
      }
     ],
     "consigne": "Pour chaque situation, quel canal choisissez-vous ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Le canal suit la personne et l'urgence, pas l'habitude.",
     "bilan_tout": "Vous savez choisir un canal pour une situation nouvelle."
    }
   ],
   "fiches": [
    "FICHE-M3-E1",
    "FA-M3-02"
   ],
   "suite": "M3-P1-FIN"
  },
  "M3-P1-FIN": {
   "id": "M3-P1-FIN",
   "type": "fin-section",
   "etape": "Épisode 1",
   "surtitre": "Bilan de l'épisode",
   "titre": "Lundi, c'est fait",
   "acquis": [
    {
     "titre": "Choisir le bon canal",
     "texte": "Un appel suivi d'un SMS pour Joël, un courriel court pour Élise et pour Léna."
    },
    {
     "titre": "Une demande, un objet, une date",
     "texte": "Le message à Élise tient en quatre lignes, sans sigle."
    },
    {
     "titre": "Écouter jusqu'au bout, puis vérifier",
     "texte": "Noa a reformulé l'heure avec Joël et l'a confirmée par SMS."
    }
   ],
   "dossier": "Les trois organisations sont jointes. La réunion de lancement est convoquée jeudi après-midi.",
   "suite": "MENU"
  },
  "M3-P2": {
   "id": "M3-P2",
   "type": "page",
   "etape": "Épisode 2",
   "titre": "Faire avancer à plusieurs",
   "chapeau": "Mardi, c'est Cédric, à l'accueil, qui reçoit le contrecoup. Deux réunions dans la même salle, un changement d'heure dont personne ne l'a prévenu, une convention, deux versions d'un document, un carnet qui disparaît. Vous accompagnez Cédric, qui tutoie Noa.",
   "competences": [
    "C07",
    "C19",
    "C17",
    "C18"
   ],
   "competences_lib": [
    {
     "code": "C07",
     "libelle": "Je coopère et je travaille en transversal."
    },
    {
     "code": "C19",
     "libelle": "Je m'adapte aux évolutions."
    },
    {
     "code": "C17",
     "libelle": "Je recherche, je vérifie et j'actualise une information."
    },
    {
     "code": "C18",
     "libelle": "Je sais quand et comment demander un appui."
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
     "id": "action",
     "libelle": "Un message pour action",
     "court": "Pour action"
    },
    {
     "id": "information",
     "libelle": "Un message pour information",
     "court": "Pour information"
    },
    {
     "id": "aucun",
     "libelle": "Pas de message",
     "court": "Pas de message"
    }
   ],
   "items": [
    {
     "id": "K1",
     "libelle": "Joël, de Passerelles, porte le projet. Il doit confirmer sa présence à 14 h 30 et apporter la liste des six lieux.",
     "court": "Joël",
     "attendu": "action",
     "feedback": "Joël a quelque chose à faire, avant jeudi. Un simple « pour info » ne lui dirait pas qu'on attend sa réponse."
    },
    {
     "id": "K2",
     "libelle": "Teiva, le médiateur numérique de Passerelles, doit prévoir le matériel numérique et la connexion dans la salle communale.",
     "court": "Teiva",
     "attendu": "action",
     "feedback": "Sans la nouvelle heure et le nouveau lieu, Teiva prépare au mauvais endroit. C'est lui qui a quelque chose à faire."
    },
    {
     "id": "K3",
     "libelle": "Élise, de la commune, doit confirmer la salle à 14 h 30 et la convention.",
     "court": "Élise",
     "attendu": "action",
     "feedback": "La commune garde la main sur sa salle : on lui demande de confirmer, on ne lui impose rien."
    },
    {
     "id": "K4",
     "libelle": "Léna, de la province, suivra la réunion en visio et doit se connecter à 14 h 30.",
     "court": "Léna",
     "attendu": "action",
     "feedback": "Une connexion à une heure précise : elle a besoin du message pour agir, pas seulement pour savoir."
    },
    {
     "id": "K5",
     "libelle": "Samuel, responsable du pôle, veut savoir que la réunion est maintenue et où elle se tient.",
     "court": "Samuel",
     "attendu": "information",
     "feedback": "Samuel n'a rien à faire, mais il doit savoir. Un message pour action lui donnerait une tâche qui n'est pas la sienne."
    },
    {
     "id": "K6",
     "libelle": "Ana anime jeudi à 14 h une formation du pôle ressources dans la salle de réunion de l'ÉLAN.",
     "court": "Ana",
     "attendu": "information",
     "feedback": "La salle d'Ana ne bouge pas. Un message évite qu'elle se demande si elle doit la libérer."
    },
    {
     "id": "K7",
     "libelle": "Le service de comptabilité de l'ÉLAN n'est concerné ni par l'heure, ni par le lieu.",
     "court": "La comptabilité",
     "attendu": "aucun",
     "feedback": "Écrire à tout le monde noie les vrais destinataires. Un message ne part que vers ceux qui doivent agir ou savoir."
    },
    {
     "id": "V1",
     "libelle": "Deux ordres du jour circulent. L'un, reçu par courriel lundi, annonce 14 h à la salle de l'ÉLAN. L'autre, dans l'espace partagé, annonce 14 h 30 à la salle communale. Cédric doit en imprimer dix exemplaires.",
     "court": "Quelle version imprimer",
     "attendu": "verifie",
     "feedback": "En vérifiant la date de modification, l'auteur et ce que dit le document, Cédric imprime ce qui est à jour. Imprimer la première, c'est envoyer des gens à la mauvaise salle ; imprimer les deux, c'est ouvrir une discussion en réunion."
    },
    {
     "id": "C1",
     "libelle": "La commune a envoyé une enveloppe adressée « à l'ÉLAN » : une convention de mise à disposition de sa salle. Elle porte une ligne pour la signature. Cédric enregistre tout le courrier.",
     "court": "La convention arrive",
     "attendu": "transmet",
     "feedback": "Cédric garde la trace de l'arrivée, remet à Noa, qui suit le dossier, et prévient Samuel. Il ne signe pas : l'accord se fait entre la commune et Passerelles, pas à l'accueil. Signer ou renvoyer « bien reçu » engagerait l'ÉLAN sans l'avoir décidé."
    },
    {
     "id": "N1",
     "libelle": "Les réservations de salles se saisissent désormais dans l'agenda partagé.",
     "court": "Ce qui change",
     "attendu": "change",
     "feedback": "C'est le fait : l'outil change, pour tout le monde, dès cette semaine."
    },
    {
     "id": "N2",
     "libelle": "Tout le monde voit les salles : il n'y aura plus de double réservation, mais le carnet papier ne fera plus foi.",
     "court": "Ce que cela change pour moi",
     "attendu": "pourmoi",
     "feedback": "Cédric voit ce qui lui est utile, mais aussi ce qu'il perd : son carnet ne sert plus de référence."
    },
    {
     "id": "N3",
     "libelle": "Je demande une démonstration à Ana et je saisis les réservations de jeudi.",
     "court": "Ce que je fais",
     "attendu": "jefais",
     "feedback": "Une action précise, immédiate, qui demande de l'aide au bon moment."
    },
    {
     "id": "Q5",
     "libelle": "Cédric tient ce carnet depuis des années. Ana vient de lui présenter l'agenda partagé. Que fait-il ?",
     "court": "Le carnet et l'agenda",
     "attendu": "demande",
     "feedback": "En disant ce que cela change et en demandant de l'aide, Cédric passe à l'agenda sans perdre sa maîtrise des salles. Continuer le carnet sans le dire recrée deux versions ; attendre qu'on lui explique laisse le travail en suspens."
    },
    {
     "id": "R1",
     "libelle": "L'ordre du jour à jour.",
     "court": "L'ordre du jour",
     "attendu": "besoin",
     "feedback": "C'est le document de référence : il doit l'avoir."
    },
    {
     "id": "R2",
     "libelle": "Les quarante courriels échangés depuis lundi.",
     "court": "Les quarante courriels",
     "attendu": "pas",
     "feedback": "Il n'a pas à relire tout l'historique. Ce qu'il doit savoir tient en quelques lignes."
    },
    {
     "id": "R3",
     "libelle": "La nouvelle heure et le lieu de la réunion.",
     "court": "Heure et lieu",
     "attendu": "besoin",
     "feedback": "Sans eux, il ne vient pas, ou il vient au mauvais endroit."
    },
    {
     "id": "R4",
     "libelle": "Le tableau « qui fait quoi ».",
     "court": "Le tableau « qui fait quoi »",
     "attendu": "besoin",
     "feedback": "Il montre ce que chacun apporte, y compris lui."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "7 h 50, à l'accueil",
     "illustration": "ILL-T03",
     "texte": "Mardi, 7 h 50. Aujourd'hui, vous accompagnez Cédric, agent d'accueil et de logistique de l'ÉLAN. Il ouvre son carnet de réservation : jeudi 14 h, la salle de réunion est notée deux fois. La formation du pôle ressources, réservée depuis trois semaines. Et une « réunion de lancement Passerelles », inscrite lundi soir par Noa, sans passer par lui.",
     "repliques": [
      {
       "personnage": "Cédric",
       "canal": "oral",
       "texte": "« Deux réunions au même endroit, c'est mon carnet qui fait foi d'habitude. Et celle-là, personne ne m'en a parlé. »"
      }
     ],
     "et_vous": "Qu'avez-vous déjà appris par hasard, alors que vous auriez dû le savoir ?"
    },
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Noa passe au comptoir",
     "illustration": "ILL-T04",
     "texte": "Noa arrive, un peu gêné. Il vient de recevoir la réponse d'Élise.",
     "repliques": [
      {
       "personnage": "Noa",
       "canal": "oral",
       "texte": "« Désolé, Cédric. La commune propose sa salle jeudi à 14 h 30, avec une convention de mise à disposition. La réunion ne se fait plus ici. Je t'avais mis en copie \"pour information\" … enfin, je crois. »"
      },
      {
       "personnage": "Cédric",
       "canal": "oral",
       "texte": "« Pas reçu. Mais maintenant que je le sais, dis-moi qui doit savoir quoi, et on s'y met. »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "quiquoi",
     "phase": "situation",
     "titre": "Qui doit savoir quoi, quand ?",
     "competences": [
      "C07"
     ],
     "items": [
      "K1",
      "K2",
      "K3",
      "K4",
      "K5",
      "K6",
      "K7"
     ],
     "categories": [
      {
       "id": "action",
       "libelle": "Un message pour action",
       "court": "Pour action"
      },
      {
       "id": "information",
       "libelle": "Un message pour information",
       "court": "Pour information"
      },
      {
       "id": "aucun",
       "libelle": "Pas de message",
       "court": "Pas de message"
      }
     ],
     "consigne": "Cédric fait la liste de ceux que le changement d'heure et de lieu touche. Pour chacun : action, information, ou pas de message ?",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "Le repère vient juste dessous. Notez ceux que vous auriez oubliés.",
     "bilan_tout": "Vous distinguez celui qui agit, celui qui doit savoir, et celui qu'on laisse tranquille."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Travailler en transversal",
     "competences": [
      "C07",
      "C19"
     ],
     "texte": "Cédric n'est pas le chef de Joël, ni d'Élise, ni de Léna. Personne ici n'est le chef de personne.",
     "regle": "Je fais avancer l'action avec des gens qui ne dépendent pas de moi. Je demande, je remercie, je tiens mes engagements, et je dis à chacun ce qu'il doit faire ou savoir.",
     "regle_clair": "**Transversal** : on travaille avec des personnes d'autres services ou d'autres organisations, sans lien hiérarchique. **Pour action** : j'attends que la personne fasse quelque chose. **Pour information** : elle n'a rien à faire, mais elle doit savoir.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M3-02"
      }
     ],
     "methode_titre": "Six repères pour travailler à plusieurs",
     "methode": [
      "Chaque service a ses rôles et ses délais : on demande, on remercie, on tient ses engagements.",
      "Pour action ou pour information : je dis pourquoi je mets la personne dans le message.",
      "Un seul document de référence, une seule version à jour.",
      "Une convention est un accord écrit entre deux parties : chacune s'engage pour ce qui la concerne.",
      "À distance ou en hybride : je confirme qui est relié et qui a le document.",
      "Quand ça change, je cherche ce que cela change concrètement, et je demande de l'aide."
     ],
     "guichet": "Je ne signe, ni ne promets, au nom de mon employeur ce qu'il n'a pas décidé. Je transmets à qui de droit.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Pourquoi dire « pour information » ?** Ceux qu'on oublie le découvrent par hasard, souvent trop tard : c'était la situation de Cédric. Prévenir coûte une ligne ; ne pas prévenir peut coûter une réunion."
     },
     "valider": "Travail en transversal, convention (définition, qui signe pour une association et pour une commune, mise à disposition d'une salle) : aucun texte au corpus (D149). Référents : juriste RH, secrétaire de mairie, formateur IFAP."
    },
    {
     "type": "ordre",
     "id": "matinee",
     "phase": "application",
     "titre": "La matinée de Cédric",
     "competences": [
      "C07"
     ],
     "texte": "Cédric a une heure pour remettre sa matinée dans l'ordre avant que Noa ne passe confirmer.",
     "consigne": "Remettez les actions de Cédric dans l'ordre : utilisez les flèches.",
     "options": [
      {
       "id": "A",
       "libelle": "Demander à Noa ce qui change exactement (heure, lieu, matériel)."
      },
      {
       "id": "B",
       "libelle": "Prévenir Ana que sa formation garde la salle de l'ÉLAN."
      },
      {
       "id": "C",
       "libelle": "Préparer et tester le matériel de visio."
      },
      {
       "id": "D",
       "libelle": "Mettre à jour le carnet de réservation."
      },
      {
       "id": "E",
       "libelle": "Confirmer à Noa que tout est prêt, avec ce qui reste à faire."
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
      "C",
      "D",
      "E",
      "A",
      "B"
     ],
     "feedback_ok": "Cédric vérifie avant d'agir, prévient avant de modifier, et confirme à la fin : il sait où il en est et Noa aussi.",
     "feedback_ko": "On commence par vérifier ce qui change, on prévient celui qui est touché, on prépare, puis on trace. La confirmation vient en dernier, quand elle est vraie.",
     "bouton": "Vérifier l'ordre"
    },
    {
     "type": "recit",
     "phase": "application",
     "titre": "Dans la salle de réunion de l'ÉLAN",
     "illustration": "ILL-T05",
     "texte": "9 h 30. Cédric teste l'enceinte et la caméra de visio dans la salle de réunion de l'ÉLAN, pour les emporter à la salle communale. Léna et Joël suivront en visio. Il imprime ensuite les ordres du jour."
    },
    {
     "type": "tri",
     "id": "version",
     "phase": "application",
     "titre": "Deux ordres du jour",
     "competences": [
      "C17",
      "C19"
     ],
     "items": [
      "V1"
     ],
     "categories": [
      {
       "id": "recue",
       "libelle": "Il imprime celle reçue par courriel lundi.",
       "court": "Il imprime celle reçue lundi."
      },
      {
       "id": "verifie",
       "libelle": "Il vérifie la date, l'auteur et l'heure annoncée, puis imprime celle de l'espace partagé et retire l'ancienne.",
       "court": "Il vérifie, puis imprime la bonne."
      },
      {
       "id": "deux",
       "libelle": "Il imprime les deux, au cas où.",
       "court": "Il imprime les deux."
      },
      {
       "id": "demande",
       "libelle": "Il demande à Noa de lui renvoyer le bon fichier par courriel.",
       "court": "Il redemande le fichier."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Cédric.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : avant d'imprimer, on vérifie quelle version fait foi.",
     "bilan_tout": "Dix exemplaires de la bonne version sont sur la table de l'accueil, prêts à partir."
    },
    {
     "type": "tri",
     "id": "convention",
     "phase": "application",
     "titre": "La convention arrive à l'accueil",
     "competences": [
      "C07",
      "C18"
     ],
     "items": [
      "C1"
     ],
     "categories": [
      {
       "id": "signe",
       "libelle": "Il la signe pour gagner du temps.",
       "court": "Il la signe."
      },
      {
       "id": "transmet",
       "libelle": "Il l'enregistre, la remet à Noa et prévient Samuel, sans signer.",
       "court": "Il l'enregistre et la transmet."
      },
      {
       "id": "renvoie",
       "libelle": "Il la renvoie à la commune avec « bien reçu ».",
       "court": "Il la renvoie avec « bien reçu »."
      },
      {
       "id": "range",
       "libelle": "Il la range en attendant que quelqu'un la réclame.",
       "court": "Il la range."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Cédric.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : l'accueil enregistre et transmet, il ne signe pas.",
     "bilan_tout": "Noa transmet la demande à Joël : c'est Passerelles qui s'engage envers la commune, l'ÉLAN n'engage rien à sa place.",
     "valider": "Convention de mise à disposition : définition, qui signe pour une association et pour une commune. Aucun texte au corpus (D149) ; référents : juriste RH, secrétaire de mairie."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Quand ça change",
     "competences": [
      "C19"
     ],
     "texte": "L'agenda partagé remplace le carnet papier dès cette semaine. Ce n'est pas un détail pour Cédric, qui tient ce carnet depuis des années.",
     "regle": "Quand une règle ou un outil change, je cherche ce qui change, ce que cela change pour moi, et ce que je fais. Si je ne sais pas faire, je le dis et je demande.",
     "regle_clair": "S'adapter n'est pas tout accepter en silence : c'est comprendre ce qui change, puis agir. Dire « je ne sais pas encore le faire » est professionnel.",
     "points": [
      {
       "titre": "Ce qui change",
       "texte": "Le fait, sans jugement. Où est la bonne version, qui s'en sert maintenant."
      },
      {
       "titre": "Ce que cela change pour moi",
       "texte": "Mes tâches, mes habitudes, ce que je perds et ce que je gagne."
      },
      {
       "titre": "Ce que je fais",
       "texte": "Une première action, tout de suite. Si je bloque, je demande de l'aide."
      }
     ],
     "guichet": "Le fait que l'ancien outil marche encore n'est pas une raison de le garder en parallèle, sans le dire.",
     "valider": "C19 : aucun texte au corpus ; méthode d'accompagnement du changement à faire valider par un formateur IFAP."
    },
    {
     "type": "tri",
     "id": "troistemps",
     "phase": "application",
     "titre": "Trois temps",
     "competences": [
      "C19"
     ],
     "items": [
      "N1",
      "N2",
      "N3"
     ],
     "categories": [
      {
       "id": "change",
       "libelle": "Ce qui change",
       "court": "Ce qui change"
      },
      {
       "id": "pourmoi",
       "libelle": "Ce que cela change pour moi",
       "court": "Pour moi"
      },
      {
       "id": "jefais",
       "libelle": "Ce que je fais",
       "court": "Ce que je fais"
      }
     ],
     "consigne": "Classez ce que dit Cédric à Ana.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : le fait, l'effet pour moi, puis l'action.",
     "bilan_tout": "Cédric a dit les trois temps à Ana, qui lui montre l'agenda en dix minutes."
    },
    {
     "type": "tri",
     "id": "carnet",
     "phase": "application",
     "titre": "Le carnet et l'agenda",
     "competences": [
      "C19",
      "C18"
     ],
     "items": [
      "Q5"
     ],
     "categories": [
      {
       "id": "parallele",
       "libelle": "Il continue le carnet papier et ne dit rien : « ça marche comme ça ».",
       "court": "Il continue le carnet, sans le dire."
      },
      {
       "id": "demande",
       "libelle": "Il dit ce que cela change pour lui, demande une démonstration à Ana et saisit les réservations de jeudi.",
       "court": "Il demande une démonstration."
      },
      {
       "id": "tatonne",
       "libelle": "Il saisit tout lui-même en tâtonnant, sans rien demander.",
       "court": "Il tâtonne seul."
      },
      {
       "id": "attend",
       "libelle": "Il dit que c'était mieux avant et attend qu'on lui explique.",
       "court": "Il attend qu'on lui explique."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Cédric.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : dire ce qui change et demander de l'aide, c'est rester maître de son travail.",
     "bilan_tout": "Jeudi 14 h, l'agenda affiche la formation d'Ana dans la salle de l'ÉLAN. La réunion de lancement figure à la salle communale, à 14 h 30."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Contribuer à un projet",
     "competences": [
      "C07"
     ],
     "texte": "Cédric participe au lancement de la permanence : il ne la pilote pas, il y contribue. Un projet a un début, des étapes et une fin.",
     "regle": "Dans un projet, je sais où il en est, qui porte, qui décide, et ce qu'on attend de moi à cette étape.",
     "regle_clair": "Le **porteur** défend le projet et le fait avancer. Le **décideur** tranche. Un **contributeur** apporte une part précise du travail : c'est le cas de Cédric, comme de Noa.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M3-04"
      }
     ],
     "methode_titre": "Le cycle d'un projet",
     "methode": [
      "Émergence : une idée ou un besoin apparaît.",
      "Cadrage : on décide s'il est réaliste, avec qui et pour quoi.",
      "Lancement : on réunit les acteurs et on se répartit le travail.",
      "Réalisation : chacun fait sa part, on suit l'avancement.",
      "Mise en service : le projet fonctionne pour ses usagers.",
      "Clôture : on tire le bilan et on range."
     ],
     "guichet": "Le dossier de Passerelles en est au lancement. La fiche « Contribuer à un projet » reprend ce cycle et le rôle de chacun.",
     "valider": "Fiche « Contribuer à un projet » et vocabulaire du projet (porteur, décideur, contributeur, jalon, livrable) : aucune source propre au secteur public calédonien (D148). À confronter à un guide projet d'un employeur ; vocabulaire à tester auprès d'agents de catégorie C."
    },
    {
     "type": "tri",
     "id": "nouvelacteur",
     "phase": "synthese",
     "titre": "Un nouvel acteur rejoint l'action",
     "competences": [
      "C07"
     ],
     "items": [
      "R1",
      "R2",
      "R3",
      "R4"
     ],
     "categories": [
      {
       "id": "besoin",
       "libelle": "Il en a besoin",
       "court": "Il en a besoin"
      },
      {
       "id": "pas",
       "libelle": "Pas pour lui",
       "court": "Pas pour lui"
      }
     ],
     "consigne": "Un agent de la commune va aider à l'accueil des participants jeudi. Que doit-il recevoir ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "On transmet ce qui permet d'agir, pas tout ce qui a circulé.",
     "bilan_tout": "Vous savez transmettre à un nouvel acteur ce qu'il faut, et rien de plus."
    }
   ],
   "fiches": [
    "FICHE-M3-E2",
    "FICHE-M3-PROJET",
    "FA-M3-01",
    "FA-M3-03"
   ],
   "suite": "M3-P2-FIN"
  },
  "M3-P2-FIN": {
   "id": "M3-P2-FIN",
   "type": "fin-section",
   "etape": "Épisode 2",
   "surtitre": "Bilan de l'épisode",
   "titre": "Mardi, c'est fait",
   "acquis": [
    {
     "titre": "Dire à chacun ce qu'il doit faire ou savoir",
     "texte": "Six messages, dont deux pour information. Personne n'est oublié, la comptabilité n'est pas dérangée."
    },
    {
     "titre": "Une seule version à jour",
     "texte": "Dix ordres du jour imprimés après vérification de la date et de l'auteur."
    },
    {
     "titre": "Transmettre, sans signer",
     "texte": "La convention de la commune est partie chez Noa et Samuel ; l'accord se fait avec Passerelles."
    },
    {
     "titre": "Dire ce qui change, et demander",
     "texte": "Cédric a demandé à Ana de lui montrer l'agenda partagé."
    }
   ],
   "dossier": "Jeudi 14 h 30, salle communale, ordre du jour à jour. La demande de convention est transmise à Passerelles.",
   "suite": "MENU"
  },
  "M3-P3": {
   "id": "M3-P3",
   "type": "page",
   "etape": "Épisode 3",
   "titre": "Un malentendu sur les chiffres",
   "chapeau": "Mercredi, un message sec de Léna. Noa n'a rien voulu critiquer. Vous démêlez ce qui s'est passé, vous choisissez une réponse, vous décidez ce que devient le chiffre, puis vous repérez le moment où la situation dépasse Noa.",
   "competences": [
    "C08",
    "C06",
    "C17",
    "C18"
   ],
   "competences_lib": [
    {
     "code": "C08",
     "libelle": "Je gère une situation relationnelle simple."
    },
    {
     "code": "C06",
     "libelle": "Je communique de façon professionnelle et adaptée."
    },
    {
     "code": "C17",
     "libelle": "Je recherche, je vérifie et j'actualise une information."
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
     "id": "fait",
     "libelle": "Un fait",
     "court": "Un fait"
    },
    {
     "id": "interpretation",
     "libelle": "Une interprétation",
     "court": "Une interprétation"
    },
    {
     "id": "ressenti",
     "libelle": "Un ressenti",
     "court": "Un ressenti"
    }
   ],
   "items": [
    {
     "id": "F1",
     "libelle": "La note de Noa cite le chiffre de fréquentation provisoire transmis par la province.",
     "court": "La note cite le chiffre",
     "attendu": "fait",
     "feedback": "On peut le vérifier : c'est écrit dans la note. Un fait ne dépend de l'avis de personne."
    },
    {
     "id": "F2",
     "libelle": "Léna n'a pas été prévenue avant l'envoi de la note.",
     "court": "Léna n'a pas été prévenue",
     "attendu": "fait",
     "feedback": "C'est vérifiable : aucun message de Noa à Léna n'a précédé la note. C'est le point légitime de Léna."
    },
    {
     "id": "F3",
     "libelle": "« Il présente mon chiffre comme définitif. » (ce que pense Léna)",
     "court": "« Mon chiffre comme définitif »",
     "attendu": "interpretation",
     "feedback": "La note dit « provisoire ». Léna en tire une conclusion, qui n'est pas dans le texte."
    },
    {
     "id": "F4",
     "libelle": "« Elle me reproche d'avoir mal travaillé. » (ce que pourrait penser Noa)",
     "court": "« Elle me reproche mon travail »",
     "attendu": "interpretation",
     "feedback": "Léna a écrit qu'elle voulait être prévenue, pas que Noa avait mal travaillé. C'est une lecture de Noa."
    },
    {
     "id": "F5",
     "libelle": "Léna est agacée d'apprendre que son chiffre circule sans qu'elle l'ait su.",
     "court": "Léna est agacée",
     "attendu": "ressenti",
     "feedback": "C'est ce qu'elle éprouve. On ne le discute pas ; on en tient compte."
    },
    {
     "id": "F6",
     "libelle": "Noa se sent injustement attaqué.",
     "court": "Noa se sent attaqué",
     "attendu": "ressenti",
     "feedback": "C'est vrai pour lui, mais cela n'aide pas à répondre à Léna. Le garder à distance permet de répondre au fond."
    },
    {
     "id": "R1",
     "libelle": "Le message de Léna est vif. Noa peut répondre tout de suite par écrit, appeler, ou attendre. Que fait-il ?",
     "court": "La réponse à Léna",
     "attendu": "appelle",
     "feedback": "Appeler après quelques minutes laisse à Noa le temps de se calmer et à Léna de s'exprimer. Reformuler montre qu'on l'a entendue. Écrire longuement pour se justifier durcit l'échange ; se taire laisse le malentendu s'installer."
    },
    {
     "id": "X1",
     "libelle": "Léna précise que le chiffre est provisoire, non confirmé par son service. Noa l'a déjà transmis à Joël et à Élise. Que devient le chiffre ?",
     "court": "Que faire du chiffre",
     "attendu": "rectifie",
     "feedback": "En rectifiant auprès des deux destinataires, Noa remet les choses à plat : le chiffre est cité avec son statut, sa source et sa date. Le garder tel quel ou le diffuser à tous aggraverait le malentendu."
    },
    {
     "id": "Y1",
     "libelle": "Plus tard, la cheffe de service de Léna écrit à Samuel, avec plusieurs personnes en copie, pour se plaindre de la note. Que fait Noa ?",
     "court": "La cheffe de service écrit",
     "attendu": "samuel",
     "feedback": "La situation implique maintenant une hiérarchie et d'autres personnes en copie : elle dépasse Noa. Il donne les faits à Samuel, qui répond. Répondre à la cheffe de service à sa place, c'est sortir de son rôle."
    },
    {
     "id": "Z1",
     "libelle": "Deux collègues ne sont pas d'accord sur qui prépare le tableau de bord de la semaine.",
     "court": "Qui prépare le tableau",
     "attendu": "entre",
     "feedback": "Un désaccord ordinaire se règle d'abord entre les personnes."
    },
    {
     "id": "Z2",
     "libelle": "Un collègue vous parle sèchement, devant les autres, depuis trois semaines.",
     "court": "Un collègue sec depuis trois semaines",
     "attendu": "appui",
     "feedback": "Répété et public : cela touche à la personne. On en parle à son responsable ou au dispositif prévu par son employeur."
    },
    {
     "id": "Z3",
     "libelle": "Un agent d'un autre service répond en retard à chacune de vos demandes.",
     "court": "Un agent répond en retard",
     "attendu": "entre",
     "feedback": "On commence par lui en parler, sans le juger, pour comprendre ce qui se passe de son côté."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Mercredi : un message sec",
     "illustration": "ILL-T06",
     "texte": "Mercredi, 9 h 10. Noa a rédigé une note qui cite « le chiffre de fréquentation provisoire transmis par la province ». Malia l'a relue, Noa l'a envoyée à Joël et à Élise. Un message de Léna arrive.",
     "repliques": [
      {
       "personnage": "Léna",
       "canal": "courriel",
       "texte": "« La prochaine fois, prévenez-moi avant de citer mon service. »"
      }
     ],
     "et_vous": "Quand un message sec vous a-t-il fait réagir plus vite que vous ne l'auriez voulu ?"
    },
    {
     "type": "tri",
     "id": "faits",
     "phase": "situation",
     "titre": "Où est le malentendu ?",
     "competences": [
      "C08"
     ],
     "items": [
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6"
     ],
     "consigne": "Séparez ce qui s'est passé de ce qu'on en pense et de ce qu'on ressent : un fait, une interprétation, ou un ressenti ?",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "Le repère vient juste dessous. Notez ce que vous auriez pris pour un fait.",
     "bilan_tout": "Vous voyez ce qui est vérifiable, ce qui est une lecture, et ce qui est éprouvé."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Désamorcer un malentendu",
     "competences": [
      "C08",
      "C06"
     ],
     "texte": "Noa n'a pas voulu blesser Léna. Pourtant le message est arrivé comme un reproche.",
     "regle": "Un malentendu se désamorce en séparant les faits, ce qu'on en pense et ce qu'on ressent, puis en écoutant avant d'expliquer.",
     "regle_clair": "Un **malentendu** : chacun comprend autre chose que ce que l'autre voulait dire. Un **désaccord**, c'est un avis différent. Un **conflit**, c'est une tension qui dure et s'installe.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M3-03"
      }
     ],
     "methode_titre": "Quatre repères",
     "methode": [
      "Je sépare les faits, les interprétations et les ressentis.",
      "J'écoute avant d'expliquer, je reformule, je propose une suite.",
      "Quand le ton est vif, je parle en direct plutôt que par écrit.",
      "Je demande un appui quand la hiérarchie est impliquée, quand la tension se répète ou quand elle touche à la personne."
     ],
     "guichet": "Pour les situations graves ou répétées, chaque employeur a son dispositif : je me renseigne sur celui de mon employeur. Le harcèlement est traité au module 4.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Un outil, pas une recette.** Les repères de communication non violente, vus dans certaines formations de l'IFAP, proposent de dire un fait, un ressenti, un besoin et une demande. Ils aident à écouter ; ils ne remplacent pas le jugement."
     },
     "valider": "Malentendu, désaccord simple, seuil de l'appui, recours propres à chaque employeur et frontière avec le harcèlement (M4) : à faire valider par un psychologue du travail ou un formateur IFAP (RHM_COMM009, RHM-CTRA022 ; loi du pays 2014-9). La CNV est présentée comme un outil, pas comme la manière calédonienne de communiquer."
    },
    {
     "type": "tri",
     "id": "reponse",
     "phase": "application",
     "titre": "Quelle réponse ?",
     "competences": [
      "C08",
      "C06"
     ],
     "items": [
      "R1"
     ],
     "categories": [
      {
       "id": "appelle",
       "libelle": "Il prend cinq minutes, puis appelle Léna, l'écoute, reformule et propose une règle pour la suite.",
       "court": "Il appelle et reformule."
      },
      {
       "id": "explique",
       "libelle": "Il appelle tout de suite et explique d'abord ses intentions.",
       "court": "Il appelle et explique d'abord."
      },
      {
       "id": "ecrit",
       "libelle": "Il répond par écrit, longuement, en justifiant sa note.",
       "court": "Il écrit longuement."
      },
      {
       "id": "silence",
       "libelle": "Il ne répond pas, en espérant que cela passe.",
       "court": "Il ne répond pas."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on prend le temps, puis on écoute avant d'expliquer.",
     "bilan_tout": "Léna, au téléphone : « Merci d'avoir appelé. Je préfère être prévenue, c'est tout. » Noa propose : « Je vous préviens avant toute citation de votre service. »"
    },
    {
     "type": "tri",
     "id": "chiffre",
     "phase": "application",
     "titre": "Que devient le chiffre ?",
     "competences": [
      "C06",
      "C17"
     ],
     "items": [
      "X1"
     ],
     "categories": [
      {
       "id": "rectifie",
       "libelle": "Il rectifie auprès de Joël et d'Élise : le chiffre est cité avec sa source et son statut « à confirmer par la province ».",
       "court": "Il rectifie et cite le statut."
      },
      {
       "id": "garde",
       "libelle": "Il garde le chiffre tel quel : la note disait déjà « provisoire ».",
       "court": "Il garde le chiffre."
      },
      {
       "id": "diffuse",
       "libelle": "Il envoie le chiffre à tous les partenaires, par transparence.",
       "court": "Il le diffuse à tous."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : un chiffre provisoire se cite avec son statut.",
     "bilan_tout": "Joël et Élise reçoivent un court rectificatif. Le chiffre sera confirmé par la province vendredi.",
     "valider": "Discrétion professionnelle et information du public (délibération 81, art. 20-21) : ne pas présenter comme règle ce qui est une bonne pratique. À faire valider par un juriste RH."
    },
    {
     "type": "tri",
     "id": "appui",
     "phase": "application",
     "titre": "Quand la situation dépasse Noa",
     "competences": [
      "C08",
      "C18"
     ],
     "items": [
      "Y1"
     ],
     "categories": [
      {
       "id": "samuel",
       "libelle": "Il informe Samuel des faits et le laisse répondre.",
       "court": "Il informe Samuel."
      },
      {
       "id": "reponse",
       "libelle": "Il répond lui-même à la cheffe de service, pour s'expliquer.",
       "court": "Il répond lui-même."
      },
      {
       "id": "rien",
       "libelle": "Il ne dit rien et attend que cela passe.",
       "court": "Il ne dit rien."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : quand une hiérarchie est impliquée, on passe la main.",
     "bilan_tout": "Samuel répond à la cheffe de service dans l'après-midi et remercie Noa de lui avoir donné les faits.",
     "valider": "Recours propres à chaque employeur : « renseignez-vous sur le dispositif de votre employeur », sans numéro ni service présenté comme universel."
    },
    {
     "type": "tri",
     "id": "desaccord",
     "phase": "application",
     "titre": "Régler seul, ou demander un appui ?",
     "competences": [
      "C08",
      "C18"
     ],
     "items": [
      "Z1",
      "Z2",
      "Z3"
     ],
     "categories": [
      {
       "id": "entre",
       "libelle": "Je règle d'abord entre nous",
       "court": "Entre nous"
      },
      {
       "id": "appui",
       "libelle": "Je demande un appui",
       "court": "Je demande un appui"
      }
     ],
     "consigne": "Pour chaque situation, que faites-vous ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Un désaccord ordinaire se règle d'abord entre les personnes ; le reste se partage.",
     "bilan_tout": "Vous savez distinguer un désaccord que l'on règle d'une situation que l'on partage."
    }
   ],
   "fiches": [
    "FICHE-M3-E3"
   ],
   "suite": "M3-P3-FIN"
  },
  "M3-P3-FIN": {
   "id": "M3-P3-FIN",
   "type": "fin-section",
   "etape": "Épisode 3",
   "surtitre": "Bilan de l'épisode",
   "titre": "Mercredi, c'est fait",
   "acquis": [
    {
     "titre": "Séparer les faits des ressentis",
     "texte": "Léna n'avait pas été prévenue ; le reste était une lecture."
    },
    {
     "titre": "Écouter avant d'expliquer",
     "texte": "Noa a appelé Léna, l'a écoutée, puis a proposé de la prévenir avant toute citation."
    },
    {
     "titre": "Citer un chiffre avec son statut",
     "texte": "Le chiffre est repris à la source, « à confirmer par la province »."
    },
    {
     "titre": "Passer la main",
     "texte": "Samuel a répondu à la cheffe de service à la place de Noa."
    }
   ],
   "dossier": "La relation avec la province est rétablie. Le chiffre sera confirmé vendredi, avant la première permanence.",
   "suite": "MENU"
  },
  "M3-DEF": {
   "id": "M3-DEF",
   "type": "page",
   "etape": "Défi",
   "titre": "La réunion de lancement",
   "chapeau": "Salle communale, jeudi, 14 h 30. Noa anime. Quatre imprévus s'enchaînent, avec très peu de guidage. À la fin, il faut envoyer un relevé de décisions.",
   "competences": [
    "C06",
    "C07",
    "C08",
    "C19"
   ],
   "competences_lib": [
    {
     "code": "C06",
     "libelle": "Je communique de façon professionnelle et adaptée."
    },
    {
     "code": "C07",
     "libelle": "Je coopère et je travaille en transversal."
    },
    {
     "code": "C08",
     "libelle": "Je gère une situation relationnelle simple."
    },
    {
     "code": "C19",
     "libelle": "Je m'adapte aux évolutions."
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
     "libelle": "Teiva présente le déroulé de la permanence très vite, avec du vocabulaire technique. Élise, à l'accueil de la commune, ne suit plus. Que fait Noa ?",
     "court": "Teiva va trop vite",
     "attendu": "reprend",
     "feedback": "En demandant à Teiva de reprendre avec un exemple, Noa garde le fond et le rythme, et Élise suit. Laisser continuer perd Élise ; résumer à la place de Teiva lui retire la parole."
    },
    {
     "id": "D2",
     "libelle": "Léna est en visio, mais on ne l'entend plus. On la voit remuer les lèvres. Que fait Noa ?",
     "court": "Léna n'a plus de son",
     "attendu": "verifie",
     "feedback": "Continuer sans elle priverait le groupe de la province ; vérifier le son et proposer un appel immédiat règle le problème. Ce qui compte, c'est que chacun puisse suivre."
    },
    {
     "id": "D3",
     "libelle": "Léna reprend par téléphone. Elle demande que le chiffre de fréquentation soit présenté comme provisoire, et pas comme acquis. Joël veut savoir comment l'écrire. Que fait Noa ?",
     "court": "Le chiffre de Léna",
     "attendu": "fait",
     "feedback": "Noa s'en tient au fait : le chiffre est provisoire, confirmé vendredi par la province, et il l'écrit ainsi dans le relevé. Défendre sa note ou retirer le chiffre ne servirait pas la réunion."
    },
    {
     "id": "D4",
     "libelle": "La commune ne peut prêter la salle que pour la première permanence. Élise propose une autre salle, plus petite, pour les suivantes. Que fait Noa ?",
     "court": "La salle change",
     "attendu": "joel",
     "feedback": "Le choix revient à Passerelles, qui porte le projet. Noa note la proposition, la transmet à Joël et lui laisse décider. Accepter ou refuser à sa place, c'est décider ce qui ne relève pas de l'ÉLAN."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "14 h 20, salle communale",
     "illustration": "ILL-T07",
     "texte": "Jeudi, 14 h 20. Dans la salle communale, Teiva branche l'ordinateur, Élise dispose les chaises, Joël attend. Léna suivra en visio : la caméra de l'ÉLAN a été apportée par Cédric. C'est la première apparition de Teiva, médiateur numérique de Passerelles. Noa anime.",
     "repliques": [
      {
       "personnage": "Teiva",
       "canal": "reunion",
       "texte": "« Alors, chaque habitant crée son compte, on scanne la pièce, on synchronise avec le portail, et si le réseau tombe on bascule sur la 4G. Ensuite on passe aux six lieux. »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "teiva",
     "phase": "application",
     "titre": "Teiva va trop vite",
     "competences": [
      "C06"
     ],
     "items": [
      "D1"
     ],
     "categories": [
      {
       "id": "reprend",
       "libelle": "Il demande à Teiva de reprendre simplement, avec un exemple, et vérifie qu'Élise a compris.",
       "court": "Il demande de reprendre."
      },
      {
       "id": "laisse",
       "libelle": "Il laisse continuer : Teiva est le spécialiste.",
       "court": "Il laisse continuer."
      },
      {
       "id": "resume",
       "libelle": "Il l'interrompt et résume lui-même.",
       "court": "Il résume lui-même."
      },
      {
       "id": "fin",
       "libelle": "Il attend la fin pour répondre aux questions d'Élise.",
       "court": "Il attend la fin."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on adapte le rythme à celui qui écoute.",
     "bilan_tout": "Élise suit désormais, et pose deux questions utiles."
    },
    {
     "type": "tri",
     "id": "visio",
     "phase": "application",
     "titre": "Léna n'a plus de son",
     "competences": [
      "C07"
     ],
     "items": [
      "D2"
     ],
     "categories": [
      {
       "id": "verifie",
       "libelle": "Il vérifie le son, puis propose à Léna de reprendre par téléphone.",
       "court": "Il vérifie, puis la rappelle."
      },
      {
       "id": "continue",
       "libelle": "Il continue sans elle et lui enverra le relevé.",
       "court": "Il continue sans elle."
      },
      {
       "id": "attend",
       "libelle": "Il attend qu'elle se reconnecte, sans rien dire.",
       "court": "Il attend."
      },
      {
       "id": "chat",
       "libelle": "Il lui écrit dans le chat de la visio.",
       "court": "Il lui écrit dans le chat."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on s'assure que chacun peut suivre.",
     "bilan_tout": "Léna reprend par téléphone, haut-parleur posé au centre de la table."
    },
    {
     "type": "tri",
     "id": "chiffredefi",
     "phase": "application",
     "titre": "Le chiffre de Léna",
     "competences": [
      "C08",
      "C06"
     ],
     "items": [
      "D3"
     ],
     "categories": [
      {
       "id": "fait",
       "libelle": "Il écrit « provisoire, confirmé vendredi par la province » au relevé.",
       "court": "Il l'écrit provisoire au relevé."
      },
      {
       "id": "defend",
       "libelle": "Il défend sa note : Léna avait transmis ce chiffre.",
       "court": "Il défend sa note."
      },
      {
       "id": "retire",
       "libelle": "Il retire le chiffre de la réunion.",
       "court": "Il retire le chiffre."
      },
      {
       "id": "apres",
       "libelle": "Il propose d'en parler après la réunion.",
       "court": "Il en parle après."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on revient au fait, sans défendre sa note.",
     "bilan_tout": "Le chiffre figure au relevé avec son statut, et Léna remercie Noa."
    },
    {
     "type": "tri",
     "id": "salledefi",
     "phase": "application",
     "titre": "La salle change",
     "competences": [
      "C19",
      "C07"
     ],
     "items": [
      "D4"
     ],
     "categories": [
      {
       "id": "joel",
       "libelle": "Il note la proposition, la transmet à Joël et lui laisse décider.",
       "court": "Il la transmet à Joël."
      },
      {
       "id": "accepte",
       "libelle": "Il accepte la salle plus petite, pour gagner du temps.",
       "court": "Il accepte tout de suite."
      },
      {
       "id": "refuse",
       "libelle": "Il la refuse : la salle actuelle convient très bien.",
       "court": "Il la refuse."
      },
      {
       "id": "reporte",
       "libelle": "Il repousse la question à la prochaine réunion.",
       "court": "Il repousse la question."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : l'ÉLAN transmet, Passerelles décide.",
     "bilan_tout": "Joël répond qu'il visitera la salle samedi avec Élise."
    },
    {
     "type": "message",
     "id": "releve",
     "phase": "application",
     "titre": "Le relevé de décisions",
     "competences": [
      "C06",
      "C07"
     ],
     "texte": "17 h. Noa envoie le relevé de la réunion. Composez-le : choisissez une phrase pour chaque partie.",
     "brief": "Le relevé tient en trois lignes. Tout le monde est vouvoyé.",
     "destinataire": "Joël, Teiva, Élise et Léna",
     "objet": "Réunion de lancement : relevé de décisions",
     "salutation": "Bonjour à toutes et à tous,",
     "signature": "Cordialement,\nNoa",
     "synthese": "Ce qui est décidé, qui fait quoi pour quand, et à qui le message est destiné.",
     "bouton": "Vérifier mon relevé",
     "parties": [
      {
       "id": "decide",
       "libelle": "Ce qui est décidé",
       "options": [
        {
         "id": "A",
         "texte": "La première permanence est confirmée à la salle communale. Les suivantes seront précisées après la visite de la salle proposée. Le chiffre de fréquentation reste provisoire, confirmé vendredi par la province.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "La réunion s'est bien passée, merci à tous.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Tout est décidé : la première permanence aura lieu le 12 dans la salle plus petite.",
         "verdict": "risque"
        }
       ],
       "feedback": "Une décision, un statut, une échéance. Rien d'inventé."
      },
      {
       "id": "quifaitquoi",
       "libelle": "Qui fait quoi, pour quand",
       "options": [
        {
         "id": "A",
         "texte": "Joël visite la salle samedi et confirme lundi. Teiva teste la connexion sur place. Élise envoie le plan d'accès. Léna confirme le chiffre vendredi.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Chacun s'organise de son côté.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "L'ÉLAN s'occupe de tout et prévient les autres.",
         "verdict": "risque"
        }
       ],
       "feedback": "Un nom, une action, une date. L'ÉLAN coordonne, il ne fait pas à la place des autres."
      },
      {
       "id": "envoi",
       "libelle": "À qui, et comment",
       "options": [
        {
         "id": "A",
         "texte": "Envoyé par courriel à Joël, Teiva, Élise et Léna, avec Samuel en copie pour information.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Envoyé par SMS à Joël seul, qui le transmettra aux autres.",
         "verdict": "risque"
        },
        {
         "id": "C",
         "texte": "Envoyé par courriel à tout l'établissement.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Les destinataires sont ceux qui doivent agir ; Samuel doit savoir."
      }
     ]
    }
   ],
   "fiches": [
    "FICHE-M3-E1",
    "FICHE-M3-E2",
    "FICHE-M3-E3"
   ],
   "suite": "M3-DEF-FIN"
  },
  "M3-DEF-FIN": {
   "id": "M3-DEF-FIN",
   "type": "fin-section",
   "etape": "Défi",
   "surtitre": "Bilan du défi",
   "titre": "La réunion est tenue",
   "acquis": [
    {
     "titre": "Adapter le rythme à celui qui écoute",
     "texte": "Teiva a repris simplement ; Élise suit."
    },
    {
     "titre": "S'assurer que chacun peut suivre",
     "texte": "Léna a repris par téléphone, haut-parleur au centre de la table."
    },
    {
     "titre": "Un chiffre provisoire cité comme tel",
     "texte": "Au relevé, avec sa source et sa date de confirmation."
    },
    {
     "titre": "Transmettre, pas décider",
     "texte": "La salle proposée par la commune est revenue à Joël."
    }
   ],
   "dossier": "La réunion de lancement est tenue. Le relevé de décisions part à 17 h.",
   "suite": "MENU"
  },
  "M3-EVA-INTRO": {
   "id": "M3-EVA-INTRO",
   "type": "narration",
   "etape": "Évaluation",
   "titre": "Vendredi : l'évaluation",
   "texte": "Six situations nouvelles, hors du dossier Passerelles. Le bilan s'affiche à la fin.\nModule validé avec 5 réponses justes sur 6, dont au moins une par compétence : un badge vous attend.\nSinon, une seconde tentative vous est proposée, sur d'autres situations. Vous pourrez reprendre l'évaluation quand vous voulez.\nRéussie ou non, vous pouvez passer au module suivant.\n",
   "suite": "M3-EVA-E1A"
  },
  "M3-EVA-E1A": {
   "id": "M3-EVA-E1A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C06"
   ],
   "texte": "Malia doit annuler, dans l'heure, une visite chez un partenaire. Le partenaire est sur la route toute la matinée et relève rarement ses courriels.\nQuel canal choisit-elle ?",
   "options": [
    {
     "id": "A",
     "libelle": "Un courriel détaillé, avec le motif et deux nouvelles dates en pièce jointe.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Un appel, puis un SMS court qui confirme l'annulation.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Un mot déposé à l'accueil du partenaire, pour qu'il le lise à son retour.",
     "verdict": "risque"
    }
   ],
   "suite": "M3-EVA-E1A2",
   "note_expert": "Savoir-faire visé : C06-SF2 (choisir le canal selon l'urgence et l'interlocuteur). Item de méthode : le raisonnement (urgence, joignabilité, trace), pas une règle d'employeur. À valider : canaux autorisés selon l'employeur."
  },
  "M3-EVA-E1A2": {
   "id": "M3-EVA-E1A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Ana",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C06"
   ],
   "texte": "Ana envoie à trente agents : « Merci de déposer vos PV de CTP avant le 15 pour la CAP. » Plusieurs répondent qu'ils ne savent pas de quoi il s'agit.\nQue fait Ana ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle renvoie le même message, en gras et en majuscules.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle renvoie un message avec un objet clair, les sigles expliqués, une demande, une date et le nom de la personne à qui déposer.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle laisse chacun se débrouiller et répond aux questions une à une.",
     "verdict": "risque"
    }
   ],
   "suite": "M3-EVA-E2A",
   "note_expert": "Savoir-faire visé : C06-SF1 (rédiger un message clair : objet, une demande, sigles expliqués). Item de méthode, sans règle juridique."
  },
  "M3-EVA-E2A": {
   "id": "M3-EVA-E2A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Léna",
   "preuve": "E2",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C07"
   ],
   "texte": "Léna a avancé de 14 h à 10 h une réunion avec deux services. Elle a prévenu les deux chefs de service. L'agent d'accueil qui prépare la salle n'a rien reçu.\nQue fait Léna ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle attend que l'agent d'accueil le demande.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle lui écrit, pour information, avec la nouvelle heure.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle écrit à tout le service pour être sûre de n'oublier personne.",
     "verdict": "risque"
    }
   ],
   "suite": "M3-EVA-E2A2",
   "note_expert": "Savoir-faire visé : C07-SF1 (dire à chacun ce qu'il doit faire ou savoir). Pour action / pour information. Item de méthode."
  },
  "M3-EVA-E2A2": {
   "id": "M3-EVA-E2A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E2",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C07"
   ],
   "texte": "Malia et un service voisin travaillent sur le même tableau de suivi. Deux versions circulent, avec des dates différentes.\nQue fait Malia ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle garde sa version, qui est plus complète.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle envoie les deux versions en pièces jointes pour que chacun choisisse.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Elle vérifie la date et l'auteur de chacune, puis convient avec l'autre service d'une seule version de référence.",
     "verdict": "adapte"
    }
   ],
   "suite": "M3-EVA-E3A",
   "note_expert": "Savoir-faire visé : C07-SF4 (un seul document de référence), avec C17. Item de méthode."
  },
  "M3-EVA-E3A": {
   "id": "M3-EVA-E3A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Ana",
   "preuve": "E3",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C08"
   ],
   "texte": "Un collègue d'un service voisin écrit à Ana : « Encore un retard sur vos chiffres, c'est invivable. » Ana ne se sentait pas en retard.\nQue fait-elle ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle répond longuement par écrit, en justifiant ses délais.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Elle prend un moment, l'appelle, l'écoute, reformule ce qui le gêne et propose une suite.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle ne répond pas : le message ne mérite pas de réponse.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M3-EVA-E4A",
   "note_expert": "Savoir-faire visé : C08-SF2 à SF4 (écouter, reformuler, proposer une suite). Item de méthode sur une situation relationnelle simple ; aucune règle juridique."
  },
  "M3-EVA-E4A": {
   "id": "M3-EVA-E4A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Ana",
   "preuve": "E4",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C19"
   ],
   "texte": "Le formulaire de remboursement de frais change dès lundi. Ana a déjà rempli trois anciens formulaires.\nQue fait-elle ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle les envoie tels quels, sans rien dire.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Elle cherche ce qui change, demande si les anciens sont encore acceptés et refait les trois sur le nouveau si besoin.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle regrette que le changement tombe mal et attend de voir.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M3-EVA-RES",
   "note_expert": "Savoir-faire visé : C19-SF1 à SF3 (identifier ce qui change, mesurer ses effets, agir). Item de méthode ; aucun texte au corpus."
  },
  "M3-EVA-RES": {
   "id": "M3-EVA-RES",
   "type": "eval-resultat",
   "etape": "Évaluation",
   "regle": "5 réponses justes sur 6, au moins une par compétence",
   "preuves": {
    "E1": "Choisir le bon canal et les bons mots",
    "E2": "Faire circuler l'information et coopérer",
    "E3": "Désamorcer un malentendu",
    "E4": "S'adapter quand tout change"
   },
   "texte_reussi": "Évaluation réussie : le badge du module 3 est à vous. Vous choisissez le bon canal et les bons mots, vous dites à chacun ce qu'il doit faire ou savoir, vous désamorcez un malentendu simple et vous cherchez ce qui change quand tout change.\n",
   "texte_echec": "Certains repères sont encore à consolider. Une nouvelle tentative vous est proposée, sur six autres situations.\n",
   "texte_echec_final": "Certains repères restent à consolider. Nous vous conseillons de relire les fiches indiquées ci-dessus, dans votre carnet, et de revoir les pages du module qu'elles accompagnent. Vous reprendrez l'évaluation quand vous le voudrez, depuis le sommaire : les deux séries de situations alternent d'une tentative à l'autre.\nVous pouvez aussi continuer votre parcours dès maintenant : le module suivant vous est ouvert.\n",
   "consolider": {
    "E1": {
     "texte": "Je choisis le canal selon la personne et l'urgence ; j'écris une demande claire, avec un objet, sans sigle. Quand je comprends mal, je reformule. À revoir : l'épisode 1 (lundi).",
     "fiche": "FICHE-M3-E1"
    },
    "E2": {
     "texte": "Je dis à chacun s'il doit agir ou seulement savoir. Je vérifie quelle version fait foi avant de diffuser. À distance, je confirme qui est relié. À revoir : l'épisode 2 (mardi) et le défi (jeudi).",
     "fiche": "FICHE-M3-E2"
    },
    "E3": {
     "texte": "Je sépare les faits, les interprétations et les ressentis. J'écoute avant d'expliquer. Quand la hiérarchie est impliquée ou que la tension se répète, je demande un appui. À revoir : l'épisode 3 (mercredi).",
     "fiche": "FICHE-M3-E3"
    },
    "E4": {
     "texte": "Quand quelque chose change, je dis ce qui change, ce que cela change pour moi, ce que je fais. Si je ne sais pas faire, je demande. À revoir : la fin de l'épisode 2 (mardi) et le défi (jeudi).",
     "fiche": "FICHE-M3-PROJET"
    }
   },
   "rappel": [
    {
     "titre": "Un canal pour chaque situation",
     "texte": "Selon la personne, l'urgence et la trace dont j'ai besoin."
    },
    {
     "titre": "Une demande claire",
     "texte": "Un objet, une demande, un délai, des sigles expliqués."
    },
    {
     "titre": "Pour action, ou pour information",
     "texte": "Je dis à chacun ce qu'il doit faire ou seulement savoir."
    },
    {
     "titre": "Un malentendu",
     "texte": "Faits, interprétations, ressentis ; j'écoute avant d'expliquer."
    },
    {
     "titre": "Quand tout change",
     "texte": "Ce qui change, ce que cela change pour moi, ce que je fais."
    }
   ],
   "retentative": "M3-EVA-E1B",
   "suite": "M3-EVA-FIN"
  },
  "M3-EVA-E1B": {
   "id": "M3-EVA-E1B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Noa",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C06"
   ],
   "texte": "Noa doit prévenir un habitant, qui n'a pas d'accès internet, que son rendez-vous de permanence est avancé d'une heure demain.\nQuel canal choisit-il ?",
   "options": [
    {
     "id": "A",
     "libelle": "Un courriel avec accusé de réception.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Un appel, avec un SMS de confirmation s'il ne répond pas.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Un message laissé à la mairie, qui le transmettra peut-être.",
     "verdict": "risque"
    }
   ],
   "suite": "M3-EVA-E1B2",
   "note_expert": "Savoir-faire visé : C06-SF2 (canal adapté à l'interlocuteur). Item de méthode."
  },
  "M3-EVA-E1B2": {
   "id": "M3-EVA-E1B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Élise",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C06"
   ],
   "texte": "Élise veut obtenir de Samuel le calendrier validé des permanences d'octobre avant mercredi midi.\nQuel message est le plus clair ?",
   "options": [
    {
     "id": "A",
     "libelle": "« Bonjour, pour le calendrier, vous pouvez me dire ? »",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "« Objet : calendrier des permanences d'octobre. Bonjour Samuel, pouvez-vous m'envoyer le calendrier validé d'ici mercredi midi ? Merci. »",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "« Bonjour Samuel, j'ai besoin du calendrier, du plan d'accès, du contact de Léna et de savoir qui prépare la salle. »",
     "verdict": "risque"
    }
   ],
   "suite": "M3-EVA-E2B",
   "note_expert": "Savoir-faire visé : C06-SF1 (objet, une demande, un délai). Item de méthode."
  },
  "M3-EVA-E2B": {
   "id": "M3-EVA-E2B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Léna",
   "preuve": "E2",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C07"
   ],
   "texte": "Léna prépare avec deux services un calendrier commun. Chaque service lui envoie ses dates par courriel, dans des fichiers différents.\nQue fait-elle ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle recopie tout dans un tableau et l'envoie aux deux services sans les prévenir.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Elle propose un tableau unique et partagé, dit à chaque service ce qu'il doit remplir et pour quand.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle attend que les deux services se mettent d'accord.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M3-EVA-E2B2",
   "note_expert": "Savoir-faire visé : C07-SF2, SF4 (action qui coordonne, document de référence). Item de méthode."
  },
  "M3-EVA-E2B2": {
   "id": "M3-EVA-E2B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E2",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C07"
   ],
   "texte": "Malia anime une réunion en salle. Samuel y est relié en visio, mais les participants parlent entre eux sans qu'il entende.\nQue fait Malia ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle continue : Samuel posera ses questions à la fin.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle vérifie que Samuel entend, donne la parole à tour de rôle et lui a envoyé le document avant.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle lui demande de couper son micro pour éviter l'écho.",
     "verdict": "risque"
    }
   ],
   "suite": "M3-EVA-E3B",
   "note_expert": "Savoir-faire visé : C07-S4, SF6 (travailler à distance ou en hybride). Item de méthode."
  },
  "M3-EVA-E3B": {
   "id": "M3-EVA-E3B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Noa",
   "preuve": "E3",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C08"
   ],
   "texte": "Une collègue d'un autre service dit en réunion : « Noa n'a pas tenu sa parole sur le calendrier. » Noa pense qu'il avait prévenu du retard.\nQue fait-il ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il répond sur-le-champ : « C'est faux. »",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il en parle d'abord à Samuel, avant de revoir sa collègue.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Après la réunion, il appelle sa collègue, l'écoute, sépare ce qui s'est passé de ce qu'elle a compris et propose de confirmer les dates par écrit.",
     "verdict": "adapte"
    }
   ],
   "suite": "M3-EVA-E4B",
   "note_expert": "Savoir-faire visé : C08-SF1 à SF4 (séparer fait et interprétation, écouter, proposer une suite). Item de méthode."
  },
  "M3-EVA-E4B": {
   "id": "M3-EVA-E4B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E4",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C19"
   ],
   "texte": "Malia apprend que les réunions de service seront désormais en visio un lundi sur deux. Elle n'a jamais animé de visio.\nQue fait-elle ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle demande à ne pas être concernée.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle prépare comme d'habitude en salle, et verra bien.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Elle dit ce que cela change pour elle, demande une démonstration et fait un essai à deux avant la première.",
     "verdict": "adapte"
    }
   ],
   "suite": "M3-EVA-RES",
   "note_expert": "Savoir-faire visé : C19-SF2, SF3, SF5 (mesurer ce que cela change, agir, demander de l'aide). Item de méthode."
  },
  "M3-EVA-FIN": {
   "id": "M3-EVA-FIN",
   "type": "fin-section",
   "etape": "Évaluation",
   "titre": "Évaluation terminée",
   "texte": "Votre résultat est affiché sur le sommaire du module. Dernière étape : le bilan de la semaine de Noa, et le vôtre.\n",
   "suite": "MENU"
  },
  "M3-SOR-1": {
   "id": "M3-SOR-1",
   "type": "narration",
   "illustration": "ILL-T08",
   "etape": "Bilan",
   "titre": "Ce que Noa a appris cette semaine",
   "texte": "Vendredi, fin de matinée. Ariane passe au bureau : les trois organisations ont validé le calendrier commun et le tableau « qui fait quoi ». La prochaine étape du dossier est la tournée des six lieux, au module 4. Voici ce que Noa sait faire maintenant.",
   "points": [
    {
     "titre": "Je choisis le bon canal et les bons mots",
     "texte": "Je pense à la personne, à l'urgence, à la trace. J'écris une demande claire.",
     "competence": "C06 — Communication"
    },
    {
     "titre": "Je dis à chacun ce qu'il doit faire ou savoir",
     "texte": "Pour action, pour information, une seule version à jour.",
     "competence": "C07 — Coopération"
    },
    {
     "titre": "Je désamorce un malentendu",
     "texte": "Je sépare les faits des ressentis, j'écoute avant d'expliquer, je passe la main si besoin.",
     "competence": "C08 — Relation"
    },
    {
     "titre": "Je cherche ce qui change",
     "texte": "Je le dis, et je demande de l'aide si je ne sais pas faire.",
     "competence": "C19 — Adaptation"
    }
   ],
   "competences": [
    "C06",
    "C07",
    "C08",
    "C19"
   ],
   "suite": "M3-SOR-REV"
  },
  "M3-SOR-REV": {
   "id": "M3-SOR-REV",
   "type": "cartes",
   "etape": "Bilan",
   "titre": "Pourquoi revenir sur sa semaine ?",
   "texte": "Malia passe au bureau : « Tu te souviens de mes trois questions du vendredi ? Cinq minutes, pas plus. »",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C21"
   ],
   "cartes": [
    {
     "icone": "i-check-cercle",
     "recto": "Qu'est-ce qui a marché ?",
     "verso": "Je le refais exprès. Noa : « Appeler Léna avant de lui répondre par écrit. »"
    },
    {
     "icone": "i-recommencer",
     "recto": "Qu'est-ce que je ferais autrement ?",
     "verso": "Une seule chose, concrète. Noa : « Je préviendrai Cédric dès que je réserve une salle. »"
    },
    {
     "icone": "i-dialogue",
     "recto": "À qui je demande un retour ?",
     "verso": "Un avis extérieur voit ce que je ne vois pas. Noa : « Je demande à Joël ce qu'il a pensé de la réunion. »"
    }
   ],
   "encadre": "« Ce n'est pas un examen. C'est ce qui fait qu'on progresse plus vite. » — Malia",
   "suite": "M3-SOR-LIBRE"
  },
  "M3-SOR-LIBRE": {
   "id": "M3-SOR-LIBRE",
   "type": "reponse-libre",
   "etape": "Bilan",
   "titre": "La semaine prochaine",
   "question": "Une chose que je ferai autrement la semaine prochaine, quand je travaillerai avec d'autres :",
   "apres": "Notez-la quelque part où vous la reverrez lundi : c'est ainsi qu'elle devient une habitude.",
   "suite": "M3-SOR-RES"
  },
  "M3-SOR-RES": {
   "id": "M3-SOR-RES",
   "type": "ressources",
   "etape": "Bilan",
   "titre": "Mes ressources",
   "texte": "Les fiches du module sont rangées dans votre carnet : trois fiches outils et une fiche de connaissances. Ouvrez-les pour les imprimer ou les enregistrer en PDF.",
   "fiches": [
    "FICHE-M3-E1",
    "FICHE-M3-E2",
    "FICHE-M3-E3",
    "FICHE-M3-PROJET",
    "FA-M3-01",
    "FA-M3-02",
    "FA-M3-03"
   ],
   "suite": "M3-FIN"
  },
  "M3-FIN": {
   "id": "M3-FIN",
   "type": "fin",
   "etape": "Bilan",
   "titre": "Bravo, la semaine de Noa est terminée",
   "texte": "Vous avez accompagné Noa, et Cédric, pendant une semaine de lancement. Ils savent désormais travailler avec les autres, même quand personne n'est le chef de personne.\n",
   "points_titre": "Ce que vous avez appris",
   "points": [
    {
     "titre": "Choisir le bon canal",
     "texte": "Selon la personne, l'urgence et la trace dont vous avez besoin."
    },
    {
     "titre": "Faire circuler l'information",
     "texte": "À chacun ce qu'il doit faire ou savoir, avec une seule version à jour."
    },
    {
     "titre": "Désamorcer un malentendu",
     "texte": "Séparer les faits, écouter avant d'expliquer, passer la main si besoin."
    },
    {
     "titre": "S'adapter quand tout change",
     "texte": "Dire ce qui change, et demander de l'aide."
    }
   ],
   "dossier": "Les trois organisations ont validé le calendrier commun et le tableau « qui fait quoi ». Prochaine étape du dossier : la tournée des six lieux et le diagnostic.",
   "prochain": {
    "titre": "M4 — Je protège et je respecte les règles",
    "texte": "Lundi prochain, Noa et Teiva partent visiter les six lieux. Des identifiants, des copies de pièces, un véhicule de service : il faudra dire non, et dire pourquoi."
   },
   "suite": "MENU"
  }
 },
 "fiches": {
  "FICHE-M3-E1": {
   "id": "FICHE-M3-E1",
   "type": "fiche",
   "code": "M3-E1",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Choisir le bon canal",
   "titre_types": "Quel canal choisir ?",
   "quand": "Avant d'écrire ou d'appeler pour informer, demander ou relancer.",
   "etapes": [
    {
     "titre": "1. Je nomme ce que je veux",
     "texte": "Informer, demander, relancer, alerter, confirmer. Une seule chose par message."
    },
    {
     "titre": "2. Je regarde la personne",
     "texte": "Quand lit-elle ses messages ? Où est-elle ? A-t-elle accès à internet ?"
    },
    {
     "titre": "3. Je regarde l'urgence et la trace",
     "texte": "Urgent, je prends un appel ou un SMS. Important à garder, j'écris un courriel."
    },
    {
     "titre": "4. Je vérifie qu'on a compris",
     "texte": "Je reformule la date, l'heure et le lieu, et je les confirme par écrit."
    }
   ],
   "types": [
    {
     "titre": "Appel",
     "texte": "Urgent, complexe, ton délicat. Je confirme ensuite par écrit."
    },
    {
     "titre": "Courriel",
     "texte": "Une demande, une date, une trace. Objet clair, sigles expliqués."
    },
    {
     "titre": "SMS",
     "texte": "Une information courte et urgente, à une personne en déplacement."
    },
    {
     "titre": "Rencontre ou visio",
     "texte": "Plusieurs personnes, un sujet qui demande de décider ensemble."
    }
   ],
   "exemple": "« Objet : réunion de lancement, jeudi 14 h. Bonjour Élise, la salle communale est-elle libre jeudi à 14 h pour lancer la permanence de Passerelles ? Une réponse d'ici demain midi me permettrait de confirmer à tous. Cordialement, Noa. »",
   "a_retenir": "Le bon canal dépend de la personne, de l'urgence et de la trace. Quand une date ou une heure compte, je la confirme par écrit.",
   "reperes": [
    "Les moyens de contact autorisés par mon employeur",
    "Mon responsable en cas de doute"
   ],
   "competences": [
    "C06"
   ],
   "version": "0.1",
   "valider": "Canaux autorisés selon l'employeur ; écriture administrative (DITP) ; discrétion (délibération 81, art. 20-21). À faire valider (corpus M3, n° 1 à 3).",
   "pdf": "assets/fiches/FO-M3-E1.pdf"
  },
  "FICHE-M3-E2": {
   "id": "FICHE-M3-E2",
   "type": "fiche",
   "code": "M3-E2",
   "modele": "checklist",
   "categorie": "outil",
   "titre": "Préparer une transmission inter-services",
   "quand": "Avant d'informer plusieurs personnes ou plusieurs organisations d'un changement, d'une décision ou d'un document.",
   "questions": [
    {
     "q": "Qui doit agir, qui doit seulement savoir ?",
     "aide": "Chaque destinataire a un rôle dans le message.",
     "verifier": [
      "J'écris « pour action » à ceux qui ont quelque chose à faire, avec ce qu'on attend d'eux.",
      "J'écris « pour information » à ceux qui doivent savoir, sans leur donner de tâche."
     ],
     "si_non": "Je retire celui qui n'est pas concerné ; j'ajoute celui qu'on oublie souvent (accueil, logistique)."
    },
    {
     "q": "Quelle version fait foi ?",
     "aide": "Un seul document de référence, à jour.",
     "verifier": [
      "Je regarde la date de modification et l'auteur.",
      "Je retire l'ancienne version."
     ],
     "si_non": "Je demande à celui qui l'a produit laquelle est valable."
    },
    {
     "q": "Qu'est-ce qui change, et pour quand ?",
     "aide": "L'heure, le lieu, le délai.",
     "verifier": [
      "Je dis le changement en une phrase.",
      "Je donne une date de réponse si j'attends quelque chose."
     ],
     "si_non": "Je reformule en une phrase et je relis."
    },
    {
     "q": "Qui s'engage, qui décide ?",
     "aide": "Une convention, une promesse, une signature engagent quelqu'un.",
     "verifier": [
      "Je transmets la demande à celui qui porte le projet.",
      "Je ne signe pas pour mon employeur ce qu'il n'a pas décidé."
     ],
     "si_non": "Je préviens mon responsable avant de répondre."
    }
   ],
   "conclusion": {
    "titre": "Dans tous les cas : je confirme",
    "texte": "Je dis à celui qui m'a demandé ce qui est fait, ce qui reste à faire et pour quand."
   },
   "a_retenir": "Je dis à chacun ce qu'il doit faire ou savoir, avec une seule version à jour.",
   "reperes": [
    "Mon responsable",
    "Le référent du dossier"
   ],
   "competences": [
    "C07",
    "C17"
   ],
   "version": "0.1",
   "valider": "Convention (définition, qui signe pour une association et une commune) et travail en transversal : aucun texte au corpus (D149).",
   "pdf": "assets/fiches/FO-M3-E2.pdf"
  },
  "FICHE-M3-E3": {
   "id": "FICHE-M3-E3",
   "type": "fiche",
   "code": "M3-E3",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Désamorcer un malentendu",
   "titre_types": "Trois choses à ne pas confondre",
   "quand": "Quand un message ou une remarque vous surprend, vous blesse ou vous agace.",
   "etapes": [
    {
     "titre": "1. Je prends un moment",
     "texte": "Cinq minutes avant de répondre. Je ne réponds pas à chaud."
    },
    {
     "titre": "2. Je sépare",
     "texte": "Ce qui s'est passé, ce que j'en comprends, ce que je ressens. Je vérifie les faits."
    },
    {
     "titre": "3. J'écoute et je reformule",
     "texte": "En direct plutôt que par écrit quand le ton est vif. Je redis ce que j'ai compris avant d'expliquer."
    },
    {
     "titre": "4. Je propose une suite",
     "texte": "Une règle simple pour la prochaine fois. Je demande un appui si la situation me dépasse."
    }
   ],
   "types": [
    {
     "titre": "Un fait",
     "texte": "Ce qu'on peut vérifier. « La note cite le chiffre. »"
    },
    {
     "titre": "Une interprétation",
     "texte": "Ce qu'on en conclut. « Il le présente comme définitif. »"
    },
    {
     "titre": "Un ressenti",
     "texte": "Ce qu'on éprouve. « Elle est agacée. »"
    }
   ],
   "exemple": "« Si je comprends bien, vous auriez voulu être prévenue avant que le chiffre soit cité. Vous avez raison. La prochaine fois, je vous préviens avant toute citation de votre service. »",
   "a_retenir": "J'écoute avant d'expliquer. Quand la hiérarchie est impliquée, que la tension se répète ou qu'elle touche à la personne, je demande un appui.",
   "reperes": [
    "Mon responsable",
    "Le dispositif de mon employeur pour les situations graves ou répétées"
   ],
   "competences": [
    "C08",
    "C18"
   ],
   "version": "0.1",
   "valider": "Malentendu, désaccord simple, seuil de l'appui, recours propres à chaque employeur, frontière avec le harcèlement (M4). Corpus M3, n° 7.",
   "pdf": "assets/fiches/FO-M3-E3.pdf"
  },
  "FICHE-M3-PROJET": {
   "id": "FICHE-M3-PROJET",
   "type": "fiche",
   "code": "M3-PROJET",
   "modele": "aide-memoire",
   "categorie": "connaissance",
   "titre": "Contribuer à un projet",
   "titre_types": "Les quatre rôles",
   "quand": "Quand on vous demande de participer à un projet, ou quand vous vous demandez où il en est.",
   "etapes": [
    {
     "titre": "1. Émergence",
     "texte": "Un besoin ou une idée apparaît."
    },
    {
     "titre": "2. Cadrage",
     "texte": "On décide si le projet est réaliste, avec qui, pour quoi."
    },
    {
     "titre": "3. Lancement",
     "texte": "On réunit les acteurs et on se répartit le travail."
    },
    {
     "titre": "4. Réalisation",
     "texte": "Chacun fait sa part, on suit l'avancement."
    },
    {
     "titre": "5. Mise en service",
     "texte": "Le projet fonctionne pour ses usagers."
    },
    {
     "titre": "6. Clôture",
     "texte": "On tire le bilan et on range."
    }
   ],
   "types": [
    {
     "titre": "Le porteur",
     "texte": "Il défend le projet et le fait avancer. Dans le dossier, c'est Passerelles."
    },
    {
     "titre": "Le décideur",
     "texte": "Il tranche. Ce n'est pas toujours le porteur."
    },
    {
     "titre": "Le référent",
     "texte": "Il suit le dossier pour son organisation. C'est le rôle de Noa pour l'ÉLAN."
    },
    {
     "titre": "Le contributeur",
     "texte": "Il apporte une part précise du travail, à un moment donné."
    }
   ],
   "a_retenir": "Dans un projet, je sais où il en est, qui porte, qui décide, et ce qu'on attend de moi à cette étape.",
   "reperes": [
    "Le porteur du projet",
    "Mon responsable"
   ],
   "competences": [
    "C07"
   ],
   "version": "0.1",
   "valider": "Aucune source propre au secteur public calédonien (D148) ; à confronter à un guide projet d'un employeur. Vocabulaire à tester auprès d'agents de catégorie C. Corpus M3, n° 8 et 9."
  },
  "FA-M3-01": {
   "id": "FA-M3-01",
   "type": "fiche",
   "modele": "pdf",
   "categorie": "apport",
   "titre": "Contribuer à un projet",
   "quand": "Où en est le projet, qui porte, qui décide, ce qu'on attend de moi.",
   "pdf": "assets/fiches/FA-M3-01.pdf",
   "competences": [
    "C07"
   ],
   "version": "0.3"
  },
  "FA-M3-02": {
   "id": "FA-M3-02",
   "type": "fiche",
   "modele": "pdf",
   "categorie": "apport",
   "titre": "Communiquer en professionnel",
   "quand": "Choisir le bon canal et les bons mots.",
   "pdf": "assets/fiches/FA-M3-02.pdf",
   "competences": [
    "C06",
    "C17"
   ],
   "version": "0.3"
  },
  "FA-M3-03": {
   "id": "FA-M3-03",
   "type": "fiche",
   "modele": "pdf",
   "categorie": "apport",
   "titre": "La convention : un accord écrit entre organisations",
   "quand": "Ce qu'engage une convention et ce qu'elle précise.",
   "pdf": "assets/fiches/FA-M3-03.pdf",
   "competences": [
    "C03",
    "C04",
    "C07"
   ],
   "version": "0.3"
  }
 },
 "illustrations": {
  "ILL-T01": {
   "scene": "Samuel annonce l'appui d'ÉLAN, lundi 7 h 45",
   "personnages": "Samuel, Noa, Malia",
   "alt": "Lundi matin au pôle études et projets. Samuel, debout près du bureau de Noa, lui annonce que l'appui est acquis ; Noa l'écoute, Malia les regarde depuis son bureau."
  },
  "ILL-T02": {
   "scene": "Noa au téléphone avec Joël",
   "personnages": "Noa",
   "alt": "Noa à son bureau, le combiné du téléphone fixe à l'oreille, prend des notes dans un carnet ouvert."
  },
  "ILL-T03": {
   "scene": "Cédric à l'accueil, mardi 7 h 50",
   "personnages": "Cédric",
   "alt": "Cédric, derrière le comptoir d'accueil, feuillette un carnet de réservation ouvert ; il fronce légèrement les sourcils."
  },
  "ILL-T04": {
   "scene": "Noa et Cédric au comptoir",
   "personnages": "Noa, Cédric",
   "alt": "Noa, un peu gêné, s'explique devant le comptoir d'accueil ; Cédric, les bras posés sur le comptoir, l'écoute."
  },
  "ILL-T05": {
   "scene": "Cédric prépare le matériel de visio",
   "personnages": "Cédric",
   "alt": "Dans la salle de réunion de l'ÉLAN, Cédric branche une enceinte de visioconférence sur la grande table."
  },
  "ILL-T06": {
   "scene": "Noa lit le message de Léna",
   "personnages": "Noa",
   "alt": "Noa à son bureau, devant son écran, les sourcils froncés ; il relit un message."
  },
  "ILL-T07": {
   "scene": "La salle communale, jeudi 14 h 20",
   "personnages": "Teiva, Élise, Joël, Noa",
   "alt": "Dans la salle communale, Teiva branche un ordinateur sur une table pliante, Élise dispose des chaises, Joël attend, assis ; Noa prépare ses notes."
  },
  "ILL-T08": {
   "scene": "Ariane passe au bureau, vendredi",
   "personnages": "Ariane, Noa",
   "alt": "Vendredi, fin de matinée. Ariane, debout près du bureau de Noa, lui parle avec un sourire discret ; Noa lève les yeux de son écran."
  },
  "INF-M3-01": {
   "scene": "Cinq repères pour communiquer",
   "personnages": "—",
   "alt": "Cinq cartes. Le canal selon l'urgence, la complexité, la trace et la personne. Un objet clair, une demande, des sigles expliqués. Écouter, reformuler, vérifier. S'adapter à l'interlocuteur. Écrire pour l'usager."
  },
  "INF-M3-02": {
   "scene": "Six repères pour travailler à plusieurs",
   "personnages": "—",
   "alt": "Six cartes. Chaque service a ses rôles. Pour action ou pour information. Une seule version à jour. Une convention est un accord entre deux parties. À distance, confirmer qui est relié. Quand ça change, chercher ce que cela change."
  },
  "INF-M3-03": {
   "scene": "Quatre repères pour désamorcer un malentendu",
   "personnages": "—",
   "alt": "Quatre étapes. Séparer faits, interprétations et ressentis. Écouter et reformuler. Parler en direct si le ton est vif. Demander un appui si la hiérarchie est impliquée, si la tension se répète ou si elle touche à la personne."
  },
  "INF-M3-04": {
   "scene": "Le cycle d'un projet",
   "personnages": "—",
   "alt": "Six étapes en frise : émergence, cadrage, lancement, réalisation, mise en service, clôture. Le lancement est mis en valeur : c'est l'étape du dossier Passerelles cette semaine."
  }
 },
 "source": "Storyboard — M3 en pages v0.2.md"
};
