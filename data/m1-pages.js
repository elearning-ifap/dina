/* GÉNÉRÉ par build/build.py depuis « Storyboard — M1 en pages v0.3.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M1-PAGES",
  "type": "module",
  "cle": "m1-pages",
  "titre": "Je me repère",
  "code": "M1",
  "duree": "1 h environ",
  "sous_titre": "Comprendre mon environnement",
  "intro": "Prototype du module 1 en pages qui défilent. Chaque épisode tient sur une page : une situation, un apport, une application. Puis un défi, l'évaluation et le bilan. Aidez Noa et ses collègues de l'ÉLAN.",
  "sans_carnet": true,
  "sections": [
   {
    "id": "ep1",
    "libelle": "Épisode 1",
    "jour": "Épisode 1",
    "savoir": "Savoir qui est compétent",
    "titre": "Qui fait quoi au pays ?",
    "debut": "QFQ-PAGE",
    "duree": "15 min",
    "accroche": "Huit demandes sur le cahier d'accueil. Qui est compétent ?"
   },
   {
    "id": "ep2",
    "libelle": "Épisode 2",
    "jour": "Épisode 2",
    "savoir": "Savoir à qui s'adresser",
    "titre": "Qui décide à l'ÉLAN ?",
    "debut": "QFQ-E2",
    "duree": "15 min",
    "accroche": "Sept demandes, six interlocuteurs. À qui Noa s'adresse-t-il ?"
   },
   {
    "id": "ep3",
    "libelle": "Épisode 3",
    "jour": "Épisode 3",
    "savoir": "Vérifier une information",
    "titre": "Une information sûre",
    "debut": "QFQ-E3",
    "duree": "15 min",
    "accroche": "Quatre documents, un délai. Lequel croire ?"
   },
   {
    "id": "defi",
    "libelle": "Défi",
    "jour": "Défi",
    "savoir": "Le défi : le premier appel de Joël",
    "titre": "Le premier appel de Joël",
    "debut": "QFQ-DEF",
    "duree": "10 min",
    "accroche": "Noa est seul au pôle. Le téléphone sonne."
   },
   {
    "id": "eval",
    "libelle": "Évaluation",
    "jour": "Évaluation",
    "savoir": "L'évaluation du module",
    "titre": "L'évaluation",
    "debut": "M1-EVA-INTRO",
    "duree": "6 min",
    "accroche": "Trois situations nouvelles pour vérifier vos repères."
   },
   {
    "id": "sortie",
    "libelle": "Bilan",
    "etiquette": "Mon bilan",
    "jour": "Mon bilan",
    "savoir": "Faire le point",
    "titre": "Ce que Noa a appris",
    "debut": "M1-SOR-1",
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
   "objet": "L'association Passerelles monte une permanence pour aider les habitants dans leurs démarches. Ses bénévoles doivent savoir où envoyer les gens.",
   "roles": "Passerelles porte ses projets et décide. L'ÉLAN qualifie, étudie et coordonne.",
   "jalons": [
    {
     "id": "competent",
     "jour": "Épisode 1",
     "libelle": "Savoir qui est compétent",
     "section": "ep1"
    },
    {
     "id": "decide",
     "jour": "Épisode 2",
     "libelle": "Savoir qui signe pour l'ÉLAN",
     "section": "ep2"
    },
    {
     "id": "verifie",
     "jour": "Épisode 3",
     "libelle": "Vérifier la liste ligne par ligne",
     "section": "ep3"
    },
    {
     "id": "appel",
     "jour": "Défi",
     "libelle": "Répondre à Passerelles sans promettre",
     "section": "defi"
    }
   ]
  },
  "personnages": {
   "Noa": "Chargé d'études et d'appui aux projets, l'ÉLAN",
   "Cédric": "Accueil et logistique, l'ÉLAN",
   "Joël": "Coordinateur de terrain, association Passerelles",
   "Ariane": "Directrice de l'ÉLAN",
   "Samuel": "Responsable du pôle études et projets, l'ÉLAN",
   "Malia": "Chargée d'études, marraine de Noa, l'ÉLAN",
   "Ana": "Pôle ressources et administration, l'ÉLAN",
   "Élise": "Agente d'accueil, une commune"
  }
 },
 "ecrans": {
  "QFQ-PAGE": {
   "id": "QFQ-PAGE",
   "type": "page",
   "etape": "Épisode 1",
   "titre": "Qui fait quoi au pays ?",
   "chapeau": "Huit demandes d'usagers, quatre niveaux de compétence. Vous classez d'abord avec vos repères, vous découvrez la règle, puis vous corrigez.",
   "competences": [
    "C01",
    "C02"
   ],
   "competences_lib": [
    {
     "code": "C01",
     "libelle": "Je sais quelle institution fait quoi."
    },
    {
     "code": "C02",
     "libelle": "Je trouve le bon interlocuteur."
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
     "libelle": "La commune"
    }
   ],
   "items": [
    {
     "id": "A",
     "libelle": "« Mon affaire est au tribunal depuis deux ans, rien n'avance. À qui je me plains ? »",
     "court": "Se plaindre de la lenteur d'une affaire au tribunal",
     "attendu": "etat",
     "feedback": "La justice relève de l'État. Ni la Nouvelle-Calédonie ni la province n'ont autorité sur un tribunal.",
     "guichet": "Le greffe du tribunal concerné",
     "ref": "Loi organique, art. 21",
     "valider": "Guichet de la réclamation à confirmer (greffe, chef de juridiction)."
    },
    {
     "id": "B",
     "libelle": "« On parle d'un nouvel impôt. Qui le décide ? »",
     "court": "Savoir qui crée un impôt",
     "attendu": "nc",
     "feedback": "La fiscalité relève de la Nouvelle-Calédonie. Le congrès crée l'impôt par une loi du pays.",
     "guichet": "Le service des impôts de la Nouvelle-Calédonie",
     "ref": "Loi organique, art. 22 et 99",
     "valider": "Nuance : provinces et communes perçoivent aussi des centimes additionnels.",
     "clair": "Une loi du pays est une loi votée par le congrès de la Nouvelle-Calédonie, dans les domaines que la loi organique lui confie. Elle a force de loi, comme une loi votée à Paris."
    },
    {
     "id": "C",
     "libelle": "« Je veux créer mon entreprise à Koné. Il existe une aide ? »",
     "court": "Une aide pour créer son entreprise à Koné",
     "attendu": "province",
     "feedback": "Aucune liste de la loi ne confie ce domaine à l'État, à la Nouvelle-Calédonie ou à la commune : c'est donc la province. Koné est en province Nord.",
     "guichet": "Les services du développement économique de la province Nord",
     "ref": "Loi organique, art. 20",
     "valider": "Dispositifs de la Nouvelle-Calédonie ou d'autres organismes à vérifier ; intitulé exact du service."
    },
    {
     "id": "D",
     "libelle": "« Les ordures ne sont plus ramassées dans ma rue depuis une semaine. »",
     "court": "Ordures non ramassées",
     "attendu": "commune",
     "feedback": "La collecte des ordures ménagères est un service de proximité : elle relève de la commune.",
     "guichet": "La mairie, qui a parfois confié la collecte à un syndicat de communes",
     "ref": "Code des communes de la Nouvelle-Calédonie",
     "valider": "Base légale à préciser ; cas des syndicats intercommunaux."
    },
    {
     "id": "E",
     "libelle": "« Mon patron me fait travailler 45 heures par semaine. C'est légal ? »",
     "court": "La durée légale du travail",
     "attendu": "nc",
     "feedback": "Le droit du travail relève de la Nouvelle-Calédonie. La durée légale est fixée par le code du travail de la Nouvelle-Calédonie, pas par le code du travail national.",
     "guichet": "L'inspection du travail de la Nouvelle-Calédonie",
     "ref": "Loi organique, art. 22",
     "valider": "Vaut pour le secteur privé ; pour les agents publics, la règle dépend de la fonction publique."
    },
    {
     "id": "F",
     "libelle": "« Mon voisin défriche une zone protégée au bord de la rivière. »",
     "court": "Un défrichement en zone protégée",
     "attendu": "province",
     "feedback": "La protection de l'environnement relève des provinces : chacune a son propre code de l'environnement.",
     "guichet": "Le service de l'environnement de la province",
     "ref": "Loi organique, art. 20 ; codes de l'environnement provinciaux",
     "valider": "À confirmer, notamment hors domaine public maritime."
    },
    {
     "id": "G",
     "libelle": "« J'ai appelé la gendarmerie hier soir : personne n'est venu. »",
     "court": "La gendarmerie n'est pas intervenue",
     "attendu": "etat",
     "feedback": "Le maintien de l'ordre et la gendarmerie relèvent de l'État, représenté en Nouvelle-Calédonie par le haut-commissaire.",
     "guichet": "La brigade de gendarmerie ; en urgence, le 17",
     "ref": "Loi organique, art. 21",
     "valider": "La police municipale relève, elle, du maire."
    },
    {
     "id": "H",
     "libelle": "« Il pleut dans la classe de mon fils, à l'école primaire. »",
     "court": "Le toit d'une école primaire fuit",
     "attendu": "commune",
     "feedback": "Piège : l'enseignement primaire (programmes, enseignants) relève de la Nouvelle-Calédonie, mais les bâtiments des écoles primaires publiques sont à la charge de la commune.",
     "guichet": "La mairie",
     "ref": "Loi organique, art. 22 ; code des communes de la Nouvelle-Calédonie",
     "valider": "Répartition bâtiments / enseignement à confirmer, avec la base légale."
    },
    {
     "id": "T1",
     "libelle": "« Mon titre de séjour expire le mois prochain. Je fais comment ? »",
     "court": "Renouveler un titre de séjour",
     "attendu": "etat",
     "feedback": "L'entrée et le séjour des étrangers relèvent de l'État, représenté en Nouvelle-Calédonie par le haut-commissaire.",
     "guichet": "Les services de l'État (haut-commissariat)",
     "ref": "Loi organique, art. 21",
     "valider": "Repris de M1 (épisode 1, transfert) ; guichet exact à confirmer."
    },
    {
     "id": "T2",
     "libelle": "« Je viens d'être embauché. Comment je m'inscris à la couverture sociale ? »",
     "court": "S'affilier à la couverture sociale",
     "attendu": "nc",
     "feedback": "La protection sociale relève de la Nouvelle-Calédonie. L'organisme qui la gère est la CAFAT : c'est là que l'habitant s'adresse.",
     "guichet": "La CAFAT",
     "ref": "Loi organique, art. 22",
     "clair": "La CAFAT n'est pas une collectivité : c'est l'organisme chargé par la Nouvelle-Calédonie de gérer la protection sociale. La compétence est à la Nouvelle-Calédonie, le guichet est la CAFAT.",
     "valider": "Repris de M1 (art. 22, 4°)."
    },
    {
     "id": "T3",
     "libelle": "« Ma mère, âgée, a besoin d'une aide à domicile. Qui peut l'aider ? »",
     "court": "Une aide à domicile pour une personne âgée",
     "attendu": "province",
     "feedback": "L'aide sociale relève des provinces : chacune a ses propres dispositifs. La Nouvelle-Calédonie, elle, gère la protection sociale (CAFAT).",
     "guichet": "Les services sociaux de la province",
     "ref": "Loi organique, art. 20",
     "valider": "Repris de M1 (carte « aide sociale ») ; vérifier l'articulation aide sociale / protection sociale et l'intitulé des services."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Huit demandes sur le cahier d'accueil",
     "illustration": "ILL-N09",
     "texte": "Fin de matinée, à l'accueil de l'ÉLAN. Cédric tient le cahier des visites et des appels. Huit habitants sont passés ou ont téléphoné. Aucune de leurs demandes n'est pour l'ÉLAN : il faut leur dire où aller.",
     "repliques": [
      {
       "personnage": "Cédric",
       "texte": "« Je fais au plus simple : tout ce qui est officiel, je dis l'État. Ça va plus vite. »"
      },
      {
       "personnage": "Noa",
       "texte": "« Ce sont les mêmes questions qu'à la permanence de Passerelles. Classons-les ensemble : la liste servira à leurs bénévoles. »"
      }
     ],
     "et_vous": "Dans votre poste aussi, on vous a sûrement posé une question qui n'était pas pour votre service. Qu'avez-vous répondu ?"
    },
    {
     "type": "tri",
     "id": "avant",
     "phase": "situation",
     "titre": "À vous de classer",
     "competences": [
      "C01"
     ],
     "consigne": "Pour chaque demande, qui est compétent ? Répondez avec vos repères, sans chercher : on vérifie juste après.",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "Pas d'explication pour l'instant : la règle vient juste dessous. Gardez en tête les demandes « à revoir ».",
     "bilan_tout": "Vos repères sont solides. La règle qui suit vous permettra de les expliquer à un usager.",
     "items": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H"
     ]
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "La règle : la province, sauf exception",
     "competences": [
      "C01"
     ],
     "texte": "Cédric part de l'État. En Nouvelle-Calédonie, on fait l'inverse : on part de la province.",
     "regle": "La province est compétente dans toutes les matières qui ne sont pas attribuées à l'État, à la Nouvelle-Calédonie ou aux communes.",
     "regle_ref": "Loi organique n° 99-209 du 19 mars 1999, art. 20",
     "carte": {
      "legende": "La province est compétente par défaut ; trois listes d'exceptions : l'État, la Nouvelle-Calédonie, les communes.",
      "fond": {
       "titre": "La province",
       "texte": "Nord, Sud, îles Loyauté. Elle est compétente par défaut : c'est le point de départ.",
       "ref": "Art. 20"
      },
      "sauf": "Sauf dans les domaines que la loi attribue à :",
      "exceptions": [
       {
        "icone": "i-balance",
        "titre": "L'État",
        "exemples": [
         "la justice",
         "le maintien de l'ordre et la gendarmerie",
         "la défense",
         "la monnaie"
        ],
        "ref": "Art. 21"
       },
       {
        "icone": "i-batiment",
        "titre": "La Nouvelle-Calédonie",
        "exemples": [
         "la fiscalité",
         "le droit du travail",
         "la protection sociale",
         "l'enseignement primaire"
        ],
        "ref": "Art. 22"
       },
       {
        "icone": "i-mairie",
        "titre": "La commune",
        "exemples": [
         "la collecte des ordures",
         "la voirie communale",
         "les bâtiments des écoles primaires"
        ],
        "ref": "Code des communes"
       }
      ]
     },
     "methode_titre": "Avant d'orienter, trois questions",
     "methode": [
      "Le domaine est-il dans la liste de l'État ? Si oui : l'État.",
      "Est-il dans la liste de la Nouvelle-Calédonie ? Si oui : la Nouvelle-Calédonie.",
      "Est-ce un service de proximité confié à la commune ? Si oui : la commune. Sinon : la province."
     ],
     "guichet": "Le guichet n'est pas toujours la collectivité compétente. L'état civil relève de la Nouvelle-Calédonie, mais l'usager le demande à la mairie.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**D'où vient cette règle ?** L'accord de Nouméa (1998) organise le transfert progressif de compétences de l'État vers la Nouvelle-Calédonie. La loi organique du 19 mars 1999 fixe les listes : article 21 pour l'État, article 22 pour la Nouvelle-Calédonie, article 20 pour les provinces.\n\n**Le mot « pays ».** On parle souvent du « pays » pour la Nouvelle-Calédonie : ses lois s'appellent des lois du pays. Face à un usager, dites plutôt « la Nouvelle-Calédonie » ou « le gouvernement de la Nouvelle-Calédonie »."
     },
     "regle_clair": "Par défaut, c'est la province qui s'occupe d'un sujet. L'État, la Nouvelle-Calédonie et les communes ne s'en occupent que si un texte le leur confie. On dit que la province est compétente « de droit commun »."
    },
    {
     "type": "tri",
     "id": "apres",
     "reprend": "avant",
     "phase": "application",
     "titre": "Reprenez les demandes à revoir",
     "competences": [
      "C01",
      "C02"
     ],
     "consigne": "Appliquez les trois questions. Les demandes déjà justes restent en place, avec leur explication.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Les huit demandes sont expliquées. Noa peut mettre la liste au propre.",
     "bilan_tout": "Les huit demandes sont expliquées. Noa peut mettre la liste au propre.",
     "items": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H"
     ]
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Trois nouvelles demandes",
     "competences": [
      "C01",
      "C02"
     ],
     "items": [
      "T1",
      "T2",
      "T3"
     ],
     "consigne": "Début d'après-midi, trois appels. Noa est en réunion : Cédric applique seul les trois questions. Et vous ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication des demandes à revoir : elles entrent aussi dans la liste.",
     "bilan_tout": "Cédric oriente seul. La méthode tient, même sur des demandes nouvelles."
    },
    {
     "type": "liste",
     "phase": "application",
     "titre": "La liste d'orientation de Passerelles",
     "depuis": "apres",
     "competences": [
      "C02"
     ],
     "texte": "Noa met les onze demandes au propre. Cédric garde la liste à l'accueil ; Joël la remettra aux bénévoles de la permanence.",
     "mention": "Premier document du dossier Passerelles. Avant de la diffuser, Noa vérifie et date chaque ligne.",
     "a_retenir": "La province est compétente par défaut. L'État, la Nouvelle-Calédonie et les communes n'interviennent que dans les domaines que la loi leur attribue. Je cherche d'abord qui est compétent, puis où l'usager doit s'adresser.",
     "sources": "Loi organique n° 99-209 du 19 mars 1999 relative à la Nouvelle-Calédonie, art. 20, 21, 22 et 99 ; code des communes de la Nouvelle-Calédonie.",
     "items": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "T1",
      "T2",
      "T3"
     ]
    }
   ],
   "note_expert": "Contenu juridique à faire valider par les référents employeurs (voir le champ « valider » de chaque item).",
   "suite": "QFQ-FIN"
  },
  "QFQ-FIN": {
   "id": "QFQ-FIN",
   "type": "fin-section",
   "etape": "Épisode 1",
   "surtitre": "Bilan de l'épisode",
   "titre": "Vous savez qui est compétent",
   "acquis": [
    {
     "titre": "Partir de la province",
     "texte": "Elle est compétente par défaut ; les autres niveaux ont une liste de domaines."
    },
    {
     "titre": "Vérifier la liste",
     "texte": "État, Nouvelle-Calédonie, commune : trois questions avant d'orienter."
    },
    {
     "titre": "Distinguer compétence et guichet",
     "texte": "La collectivité compétente n'est pas toujours celle où l'usager se présente."
    }
   ],
   "dossier": "La liste d'orientation est le premier document du dossier Passerelles.",
   "suite": "MENU"
  },
  "QFQ-E2": {
   "id": "QFQ-E2",
   "type": "page",
   "etape": "Épisode 2",
   "titre": "Qui décide à l'ÉLAN ?",
   "chapeau": "Sept demandes, six interlocuteurs possibles. Vous répondez d'abord avec vos repères, vous découvrez qui fait quoi, puis vous corrigez.",
   "competences": [
    "C02",
    "C01"
   ],
   "competences_lib": [
    {
     "code": "C02",
     "libelle": "Je trouve le bon interlocuteur."
    },
    {
     "code": "C01",
     "libelle": "Je sais quelle institution fait quoi."
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
     "id": "samuel",
     "libelle": "Samuel, son responsable",
     "court": "Samuel, son responsable"
    },
    {
     "id": "malia",
     "libelle": "Malia, sa marraine",
     "court": "Malia, sa marraine"
    },
    {
     "id": "ressources",
     "libelle": "Le pôle ressources (Ana, Cédric)",
     "court": "Le pôle ressources"
    },
    {
     "id": "support",
     "libelle": "Le support numérique",
     "court": "Le support numérique"
    },
    {
     "id": "liaison",
     "libelle": "Le pôle liaison territoriale",
     "court": "Le pôle liaison"
    },
    {
     "id": "ariane",
     "libelle": "Ariane, la directrice",
     "court": "Ariane, la directrice"
    }
   ],
   "items": [
    {
     "id": "S",
     "libelle": "« Alors, tu travailles pour la province Nord ? » demande un ami de Noa. Qu'est-ce que l'ÉLAN ?",
     "court": "Ce qu'est l'ÉLAN",
     "attendu": "nc",
     "feedback": "L'ÉLAN est installé à Koné, en province Nord, mais le lieu ne dit pas de qui dépend un établissement. C'est un établissement public de la Nouvelle-Calédonie, avec son conseil d'administration et sa directrice.",
     "clair": "Un établissement public est une personne publique créée pour une mission précise. Il a son budget, son conseil d'administration et son directeur. L'ÉLAN est fictif : chez vous, cherchez qui est votre employeur exact.",
     "valider": "Organisation fictive (M1-E2-D1, M1 v0.2) ; rien à valider en droit."
    },
    {
     "id": "A",
     "libelle": "La messagerie de Noa ne s'ouvre plus.",
     "court": "La messagerie ne s'ouvre plus",
     "attendu": "support",
     "feedback": "Un problème d'accès se règle avec le support numérique, au pôle ressources. Ni Samuel ni Malia ne peuvent le régler.",
     "guichet": "Le support numérique"
    },
    {
     "id": "B",
     "libelle": "Noa a une question sur ses congés.",
     "court": "Une question sur les congés",
     "attendu": "ressources",
     "feedback": "Ana connaît les règles et la procédure. Samuel, lui, donnera son accord sur les dates.",
     "guichet": "Ana, au pôle ressources ; l'accord sur les dates : Samuel"
    },
    {
     "id": "C",
     "libelle": "La commune propose de prêter une salle pour la permanence de Passerelles.",
     "court": "Une salle prêtée par la commune",
     "attendu": "liaison",
     "feedback": "Les partenariats avec les communes relèvent du pôle liaison territoriale. Noa le prévient et informe Samuel.",
     "guichet": "Le pôle liaison territoriale"
    },
    {
     "id": "D",
     "libelle": "Joël, de Passerelles, demande un courrier de soutien signé par l'ÉLAN pour une demande de financement.",
     "court": "Un courrier de soutien signé pour Passerelles",
     "attendu": "samuel",
     "feedback": "Un courrier signé engage l'ÉLAN : il se décide et se signe à la direction. Noa ne promet rien à Joël ; il transmet à Samuel avec le contexte, qui en parle à Ariane.",
     "guichet": "Samuel, qui soumet à la direction"
    },
    {
     "id": "E",
     "libelle": "Noa a fini sa première note d'étude. Qui la valide ?",
     "court": "Faire valider une note",
     "attendu": "samuel",
     "feedback": "Son responsable direct valide son travail. Malia peut relire et conseiller, mais elle n'encadre pas Noa.",
     "guichet": "Samuel"
    },
    {
     "id": "F",
     "libelle": "Dans un compte rendu, Noa ne comprend pas un sigle.",
     "court": "Un sigle incompris",
     "attendu": "malia",
     "feedback": "C'est le rôle d'une marraine : montrer, expliquer. Noa cherche d'abord dans l'intranet ; s'il ne trouve pas, il demande à Malia.",
     "guichet": "Malia, après avoir cherché"
    },
    {
     "id": "G",
     "libelle": "Noa voudrait présenter son étude au conseil d'administration.",
     "court": "Présenter au conseil d'administration",
     "attendu": "samuel",
     "feedback": "Ce qui va au conseil est préparé par la direction. Noa en parle à Samuel ; il ne s'adresse ni au conseil ni directement à Ariane.",
     "guichet": "Samuel"
    },
    {
     "id": "T1",
     "libelle": "Noa repère une formation utile à son poste. Par qui commence-t-il ?",
     "court": "S'inscrire à une formation",
     "attendu": "samuel",
     "feedback": "Il lit d'abord la procédure, puis obtient l'accord de Samuel sur le principe et les dates. La demande passe ensuite par le pôle ressources.",
     "guichet": "Samuel, puis le pôle ressources"
    },
    {
     "id": "T2",
     "libelle": "Le badge de Noa n'ouvre plus la porte du pôle.",
     "court": "Un badge qui ne fonctionne plus",
     "attendu": "ressources",
     "feedback": "Les accès et la logistique relèvent du pôle ressources : Cédric s'en occupe.",
     "guichet": "Cédric, au pôle ressources"
    },
    {
     "id": "T3",
     "libelle": "Une commune demande où en est la convention signée l'an dernier avec l'ÉLAN.",
     "court": "Le suivi d'une convention avec une commune",
     "attendu": "liaison",
     "feedback": "Le suivi des partenariats avec les communes relève du pôle liaison territoriale. Noa transmet la demande et ne répond pas à sa place.",
     "guichet": "Le pôle liaison territoriale"
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Le comité de direction",
     "illustration": "ILL-N03",
     "texte": "Ce matin, Noa assiste au comité de direction de l'ÉLAN pour se présenter. Ariane ouvre la séance.",
     "repliques": [
      {
       "personnage": "Ariane",
       "texte": "« Bienvenue, Noa. Le conseil d'administration se réunit dans quinze jours : nous lui présenterons le programme d'appui. »"
      },
      {
       "personnage": "Malia",
       "texte": "« L'organigramme, c'est simple. Ce qui est plus difficile, c'est qui travaille avec qui. »"
      }
     ],
     "organigramme_titre": "L'organigramme de l'ÉLAN",
     "organigramme": {
      "nom": "Conseil d'administration",
      "role": "Délibère",
      "enfants": [
       {
        "nom": "Ariane",
        "role": "Directrice",
        "enfants": [
         {
          "nom": "Pôle études et projets",
          "role": "Samuel, responsable",
          "enfants": [
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
         },
         {
          "nom": "Pôle liaison territoriale",
          "role": "Partenariats avec les communes et les associations"
         },
         {
          "nom": "Pôle ressources et administration",
          "role": "Ana (compétences, RH), Cédric (accueil, logistique), support numérique"
         }
        ]
       }
      ]
     },
     "organigramme_legende": "Chaque trait relie une personne ou un pôle à son niveau hiérarchique. Malia et Noa ont le même responsable : Samuel.",
     "partenaires": "Hors organigramme : l'association Passerelles (Joël), la commune, l'administration provinciale. Document fictif.",
     "et_vous": "Chez votre employeur, savez-vous qui valide votre travail et qui répond à vos questions RH ?"
    },
    {
     "type": "tri",
     "id": "situer",
     "phase": "situation",
     "titre": "D'abord, où travaille Noa ?",
     "competences": [
      "C01"
     ],
     "items": [
      "S"
     ],
     "categories": [
      {
       "id": "nc",
       "libelle": "Un établissement public de la Nouvelle-Calédonie",
       "court": "Un établissement public de la Nouvelle-Calédonie"
      },
      {
       "id": "province",
       "libelle": "Un service de la province Nord",
       "court": "Un service de la province Nord"
      },
      {
       "id": "etat",
       "libelle": "Un service de l'État",
       "court": "Un service de l'État"
      },
      {
       "id": "asso",
       "libelle": "Une association",
       "court": "Une association"
      }
     ],
     "consigne": "L'ÉLAN est installé à Koné. Qu'est-ce que c'est ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Le lieu ne suffit pas : on regarde de qui dépend l'établissement.",
     "bilan_tout": "Noa sait situer son employeur. Reste à savoir qui fait quoi à l'intérieur."
    },
    {
     "type": "tri",
     "id": "avant",
     "phase": "situation",
     "titre": "Sept demandes : à qui s'adresser ?",
     "competences": [
      "C02"
     ],
     "items": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G"
     ],
     "consigne": "Pour chaque demande, à qui Noa s'adresse-t-il ? Répondez avec vos repères : on vérifie juste après.",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "La règle vient juste dessous. Gardez en tête les demandes « à revoir ».",
     "bilan_tout": "Vos repères sont solides. La suite vous donne la règle pour les expliquer."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Qui décide, qui encadre, qui aide",
     "competences": [
      "C02",
      "C01"
     ],
     "texte": "Après le comité, Samuel fait le point avec Noa : « Le conseil délibère, Ariane dirige, les pôles préparent et exécutent. C'est le même schéma chez tous les employeurs publics. »",
     "regle": "Je m'adresse à celui qui gère le sujet. Ce qui engage l'employeur passe par mon responsable.",
     "regle_clair": "Engager l'employeur, c'est signer, promettre, dépenser ou parler en son nom. Un agent ne le fait pas seul : il transmet à son responsable, qui décide ou fait remonter à la direction.",
     "grille": {
      "titre": "Le même schéma chez tous les employeurs publics",
      "legende": "Qui délibère, qui dirige, qui prépare et exécute",
      "colonnes": [
       "Délibère",
       "Dirige",
       "Prépare et exécute"
      ],
      "lignes": [
       {
        "titre": "La commune",
        "cellules": [
         "Le conseil municipal",
         "Le maire",
         "Les services municipaux"
        ]
       },
       {
        "titre": "La province",
        "cellules": [
         "L'assemblée de province",
         "Son président",
         "L'administration provinciale"
        ]
       },
       {
        "titre": "La Nouvelle-Calédonie",
        "cellules": [
         "Le congrès",
         "Le gouvernement",
         "L'administration de la Nouvelle-Calédonie"
        ]
       },
       {
        "titre": "Un établissement public",
        "cellules": [
         "Le conseil d'administration",
         "Le directeur ou la directrice",
         "Les services"
        ]
       }
      ],
      "ref": "Loi organique n° 99-209 du 19 mars 1999 ; code des communes de la Nouvelle-Calédonie"
     },
     "methode_titre": "Avant de demander, trois questions",
     "methode": [
      "Est-ce que ça engage l'ÉLAN (signature, promesse, dépense) ? Si oui : mon responsable.",
      "Est-ce un sujet géré par un service (RH, informatique, partenariats, logistique) ? Si oui : ce service.",
      "Ai-je besoin qu'on m'explique ? Je cherche d'abord (organigramme, intranet), puis je demande à ma marraine ou à un collègue."
     ],
     "guichet": "Une marraine aide, elle n'encadre pas. Le trait plein de l'organigramme indique le lien hiérarchique : c'est votre responsable qui valide.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Les partenaires gardent leur hiérarchie.** Joël répond à son association, la commune à son maire. L'ÉLAN ne leur donne pas d'ordre ; il coopère.\n\n**Je transpose chez moi.** L'ÉLAN est fictif. Chez votre employeur, cherchez l'organigramme, le nom de votre responsable, de votre contact RH et du support informatique."
     },
     "valider": "Grille institutionnelle reprise de M1-E2-APP1 (note_expert de M1 v0.2)."
    },
    {
     "type": "tri",
     "id": "apres",
     "reprend": "avant",
     "phase": "application",
     "titre": "Reprenez les demandes à revoir",
     "competences": [
      "C02"
     ],
     "items": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G"
     ],
     "consigne": "Appliquez les trois questions. Les demandes déjà justes restent en place, avec leur explication.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bouton_rien": "Continuer",
     "bilan": "Les sept demandes sont expliquées.",
     "bilan_tout": "Les sept demandes sont expliquées."
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Trois nouvelles demandes",
     "competences": [
      "C02"
     ],
     "items": [
      "T1",
      "T2",
      "T3"
     ],
     "consigne": "En fin de journée, trois nouvelles demandes. Samuel est en réunion. Et vous ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication des demandes à revoir : elles entrent aussi dans la liste.",
     "bilan_tout": "La méthode tient, même sur des demandes nouvelles."
    },
    {
     "type": "liste",
     "phase": "application",
     "titre": "Mes interlocuteurs à l'ÉLAN",
     "items": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "T1",
      "T2",
      "T3"
     ],
     "competences": [
      "C02"
     ],
     "texte": "Noa note ses interlocuteurs pour les semaines à venir.",
     "entetes": [
      "Demande",
      "Qui s'en occupe",
      "Comment faire"
     ],
     "mention": "Pour le dossier Passerelles : ce qui engage l'ÉLAN (courrier, convention, promesse) passe par Samuel, puis la direction. Noa transmet, il ne décide pas.",
     "a_retenir": "Je m'adresse à celui qui gère le sujet. Ce qui engage mon employeur passe par mon responsable. Une marraine aide, elle n'encadre pas.",
     "sources": "Organigramme fictif de l'ÉLAN ; loi organique n° 99-209 du 19 mars 1999 ; code des communes de la Nouvelle-Calédonie."
    }
   ],
   "note_expert": "Grille « délibère, dirige, exécute » à faire valider par les référents (reprise de M1-E2-APP1).",
   "suite": "QFQ-E2-FIN"
  },
  "QFQ-E2-FIN": {
   "id": "QFQ-E2-FIN",
   "type": "fin-section",
   "etape": "Épisode 2",
   "surtitre": "Bilan de l'épisode",
   "titre": "Vous savez à qui vous adresser",
   "acquis": [
    {
     "titre": "Situer l'employeur",
     "texte": "Le lieu d'implantation ne dit pas de qui dépend un établissement."
    },
    {
     "titre": "Lire l'organigramme",
     "texte": "Qui décide, qui encadre, qui aide sans encadrer."
    },
    {
     "titre": "Trouver le bon interlocuteur",
     "texte": "Celui qui gère le sujet ; ce qui engage l'employeur passe par le responsable."
    }
   ],
   "dossier": "Pour Passerelles, Noa sait maintenant qui signe pour l'ÉLAN.",
   "suite": "MENU"
  },
  "QFQ-E3": {
   "id": "QFQ-E3",
   "type": "page",
   "etape": "Épisode 3",
   "titre": "Une information sûre",
   "chapeau": "Une ligne de la liste à compléter, quatre documents qui ne disent pas tous la même chose. Vous triez d'abord avec vos repères, vous découvrez les trois vérifications, puis vous décidez.",
   "competences": [
    "C17",
    "C18"
   ],
   "competences_lib": [
    {
     "code": "C17",
     "libelle": "Je recherche, je vérifie et j'actualise une information."
    },
    {
     "code": "C18",
     "libelle": "J'agis en autonomie et je demande appui au bon moment."
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
     "id": "utiliser",
     "libelle": "Je l'utilise",
     "court": "Je l'utilise"
    },
    {
     "id": "verifier",
     "libelle": "Je vérifie d'abord",
     "court": "Je vérifie d'abord"
    },
    {
     "id": "ecarter",
     "libelle": "Je l'écarte",
     "court": "Je l'écarte"
    }
   ],
   "items": [
    {
     "id": "D1",
     "libelle": "La page « S'affilier après une embauche » du site de la CAFAT, mise à jour le mois dernier.",
     "court": "La page officielle de la CAFAT, à jour",
     "attendu": "utiliser",
     "feedback": "Auteur connu, date récente, source officielle : c'est la source de la règle.",
     "guichet": "Auteur connu, date récente, source officielle"
    },
    {
     "id": "D2",
     "libelle": "Le guide d'orientation de l'ÉLAN, fiche « Couverture sociale » : un PDF de 2019, dans le dossier partagé.",
     "court": "Le guide de 2019",
     "attendu": "verifier",
     "feedback": "Un document ancien n'est pas forcément faux, mais la règle a pu changer : je le compare avec la source à jour.",
     "guichet": "Ancien : je le compare avec la source à jour"
    },
    {
     "id": "D3",
     "libelle": "Une capture d'écran transférée par un collègue, sans date ni auteur.",
     "court": "Une capture sans date ni auteur",
     "attendu": "ecarter",
     "feedback": "Sans auteur ni date, je ne l'utilise pas. Si elle signale un changement, je cherche la source officielle.",
     "guichet": "Ni auteur ni date"
    },
    {
     "id": "D4",
     "libelle": "Un article de presse de la semaine dernière : « Embauche : ce qui change ».",
     "court": "Un article de presse récent",
     "attendu": "verifier",
     "feedback": "Utile pour être alerté d'un changement, mais ce n'est pas la source de la règle : je remonte au texte officiel.",
     "guichet": "Il alerte ; je remonte au texte officiel"
    },
    {
     "id": "X",
     "libelle": "Le site de la CAFAT et le guide de 2019 ne donnent pas le même délai d'affiliation. Noa vérifie une seconde source officielle : l'écart demeure.",
     "court": "Deux sources qui ne concordent pas",
     "attendu": "appui",
     "feedback": "Quand l'écart demeure après vérification, on demande un appui. Noa n'écrit rien dans la liste avant d'être sûr. Écrire le délai le plus récent est probable mais pas certain ; garder le guide reprend le document le plus ancien ; écrire les deux délais laisse l'accueil sans réponse."
    },
    {
     "id": "T1",
     "libelle": "À l'accueil, Cédric doit afficher les horaires d'ouverture au public. Il n'a qu'un PDF de l'an dernier.",
     "court": "Les horaires de l'an dernier",
     "attendu": "note",
     "feedback": "Une procédure interne se vérifie sur la source interne la plus récente. Cédric cite sa source : les usagers peuvent s'y fier. L'absence de nouveau document ne prouve pas que rien n'a changé."
    },
    {
     "id": "T2",
     "libelle": "Un message sur un groupe de discussion d'agents : « La règle des congés a changé. »",
     "court": "Un message sur un groupe de discussion",
     "attendu": "verifier",
     "feedback": "Une rumeur peut signaler un vrai changement : je cherche la note RH ou le texte officiel avant de la relayer.",
     "guichet": "Je cherche la note RH ou le texte officiel"
    },
    {
     "id": "T3",
     "libelle": "Une délibération en vigueur, dans sa version consolidée, consultée sur Leginova.",
     "court": "Un texte consolidé sur Leginova",
     "attendu": "utiliser",
     "feedback": "Texte officiel, version consolidée : il intègre toutes les modifications. Je note sa référence et sa date.",
     "guichet": "Texte officiel, version à jour"
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Une ligne à compléter",
     "illustration": "ILL-N04",
     "texte": "Joël a remis la liste d'orientation aux bénévoles de Passerelles. Malia la relit avec Noa : « Pour la couverture sociale, il faudrait ajouter le délai pour s'affilier après une embauche. L'accueil le donnera au téléphone. »",
     "repliques": [
      {
       "personnage": "Malia",
       "texte": "« Prends le temps de vérifier. Une erreur dans la liste serait répétée à chaque appel. »"
      },
      {
       "personnage": "Noa",
       "texte": "« J'ai trouvé quatre documents. Ils ne disent pas tous la même chose. »"
      }
     ],
     "et_vous": "Quand vous transmettez une règle ou un délai, savez-vous d'où vient l'information ?"
    },
    {
     "type": "tri",
     "id": "avant",
     "phase": "situation",
     "titre": "Quatre documents : que fait Noa ?",
     "competences": [
      "C17"
     ],
     "items": [
      "D1",
      "D2",
      "D3",
      "D4"
     ],
     "consigne": "Pour chaque document, que fait Noa ? Répondez avec vos repères : on vérifie juste après.",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "La règle vient juste dessous. Gardez en tête les documents « à revoir ».",
     "bilan_tout": "Vos repères sont solides. La suite vous donne les trois vérifications pour les expliquer."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Qui, quand, quel statut",
     "competences": [
      "C17"
     ],
     "texte": "Malia profite de la question de Noa pour faire le point : « Avant d'utiliser un texte, regarde qui l'a pris : ça dit ce qu'il engage. »",
     "regle": "Avant d'utiliser une information, je vérifie qui l'a produite, de quand elle date et si elle est en vigueur.",
     "regle_clair": "« En vigueur » veut dire que la règle s'applique aujourd'hui : elle n'a été ni supprimée ni remplacée. Un document facile à trouver n'est pas forcément à jour.",
     "grille": {
      "titre": "Reconnaître un document administratif",
      "legende": "Qui prend le texte, et ce qu'il fait",
      "colonnes": [
       "Qui le prend",
       "Ce qu'il fait"
      ],
      "lignes": [
       {
        "titre": "La loi organique",
        "cellules": [
         "Le Parlement",
         "Organise les institutions de la Nouvelle-Calédonie et répartit les compétences."
        ]
       },
       {
        "titre": "La loi du pays",
        "cellules": [
         "Le congrès",
         "Fixe des règles dans les matières que lui confie la loi organique (art. 99). Elle a force de loi."
        ]
       },
       {
        "titre": "La délibération",
        "cellules": [
         "Une assemblée : congrès, assemblée de province, conseil municipal, conseil d'administration",
         "Décide dans le domaine de compétence de cette assemblée."
        ]
       },
       {
        "titre": "L'arrêté",
        "cellules": [
         "Une autorité exécutive : gouvernement, président d'assemblée de province, maire, haut-commissaire",
         "Met en œuvre ou précise une règle."
        ]
       },
       {
        "titre": "La circulaire, la note de service",
        "cellules": [
         "Une direction, un service",
         "Explique ou organise l'application d'une règle, en interne. Ne crée pas de droit nouveau."
        ]
       }
      ],
      "ref": "Loi organique n° 99-209 du 19 mars 1999"
     },
     "methode_titre": "Avant d'utiliser une information, trois questions",
     "methode": [
      "Qui l'a produite ? Une source officielle, ou le service qui produit l'information.",
      "De quand date-t-elle ? Je regarde la date de mise à jour.",
      "Est-elle en vigueur ? Je prends la version consolidée, sans modification ni abrogation depuis."
     ],
     "guichet": "Si deux sources officielles ne concordent pas, je ne choisis pas seul : je demande un appui, en disant ce que j'ai vérifié.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Comment une règle change.** Une modification change une partie du texte ; une abrogation le supprime ; la version consolidée intègre toutes les modifications ; la date d'effet dit à partir de quand la règle s'applique.\n\n**Où chercher.** Leginova (anciennement Juridoc) pour les textes calédoniens en vigueur et le Journal officiel ; Légifrance pour les textes nationaux, dont la loi organique ; le site de la DRHFPNC pour les règles RH."
     },
     "valider": "Repris de M1-E3-APP1 et M1-E3-APP2 (M1 v0.2) : types de textes et autorités, à faire valider."
    },
    {
     "type": "tri",
     "id": "apres",
     "reprend": "avant",
     "phase": "application",
     "titre": "Reprenez les documents à revoir",
     "competences": [
      "C17"
     ],
     "items": [
      "D1",
      "D2",
      "D3",
      "D4"
     ],
     "consigne": "Appliquez les trois questions. Les documents déjà justes restent en place, avec leur explication.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bouton_rien": "Continuer",
     "bilan": "Les quatre documents sont expliqués.",
     "bilan_tout": "Les quatre documents sont expliqués."
    },
    {
     "type": "tri",
     "id": "ecart",
     "phase": "application",
     "titre": "Deux sources qui ne concordent pas",
     "competences": [
      "C17",
      "C18"
     ],
     "items": [
      "X"
     ],
     "categories": [
      {
       "id": "site",
       "libelle": "Il écrit le délai du site officiel : c'est le plus récent.",
       "court": "Il écrit le délai du site officiel : c'est le plus récent."
      },
      {
       "id": "guide",
       "libelle": "Il garde le délai du guide : c'était la référence de l'accueil.",
       "court": "Il garde le délai du guide : c'était la référence de l'accueil."
      },
      {
       "id": "deux",
       "libelle": "Il écrit les deux délais dans la liste.",
       "court": "Il écrit les deux délais dans la liste."
      },
      {
       "id": "appui",
       "libelle": "Il ne modifie pas encore la liste et demande un appui à Malia, en disant ce qu'il a vérifié.",
       "court": "Il ne modifie pas encore la liste et demande un appui à Malia, en disant ce qu'il a vérifié."
      }
     ],
     "consigne": "Que fait Noa ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : dans le doute, on ne choisit pas seul.",
     "bilan_tout": "Malia confirme le délai auprès de la CAFAT. La ligne peut être complétée.",
     "qcu": true
    },
    {
     "type": "tri",
     "id": "horaires",
     "phase": "application",
     "titre": "À l'accueil, Cédric vérifie aussi",
     "competences": [
      "C17"
     ],
     "items": [
      "T1"
     ],
     "categories": [
      {
       "id": "note",
       "libelle": "Il vérifie la dernière note de service ou la page à jour de l'intranet, puis affiche les horaires en citant la source et sa date.",
       "court": "Il vérifie la dernière note de service ou la page à jour de l'intranet, puis affiche les horaires en citant la source et sa date."
      },
      {
       "id": "oui",
       "libelle": "Il affiche le PDF : il n'a pas été remplacé.",
       "court": "Il affiche le PDF : il n'a pas été remplacé."
      },
      {
       "id": "sais",
       "libelle": "Il n'affiche rien tant que personne ne lui confirme les horaires.",
       "court": "Il n'affiche rien tant que personne ne lui confirme les horaires."
      }
     ],
     "consigne": "Que fait Cédric ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Mêmes réflexes que Noa : qui, quand, quel statut.",
     "bilan_tout": "Mêmes réflexes que Noa : qui, quand, quel statut.",
     "qcu": true
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Deux nouvelles informations",
     "competences": [
      "C17"
     ],
     "items": [
      "T2",
      "T3"
     ],
     "consigne": "En fin de journée, deux nouvelles informations circulent. Que faites-vous ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication des informations à revoir.",
     "bilan_tout": "La méthode tient, même sur des informations nouvelles."
    },
    {
     "type": "liste",
     "phase": "application",
     "titre": "Avant d'utiliser une information",
     "depuis": "apres",
     "competences": [
      "C17"
     ],
     "items": [
      "D1",
      "D2",
      "D3",
      "D4",
      "T2",
      "T3"
     ],
     "texte": "Noa complète la ligne « couverture sociale » et la date. Il garde ses repères pour la prochaine fois.",
     "entetes": [
      "Information",
      "Je fais",
      "Pourquoi"
     ],
     "mention": "Pour le dossier Passerelles : la liste d'orientation est vérifiée et datée, ligne par ligne.",
     "a_retenir": "Avant d'utiliser une information : qui l'a produite, de quand elle date, si elle est en vigueur. Si deux sources officielles ne concordent pas, je demande un appui.",
     "sources": "Leginova (leginova.gouv.nc) ; Légifrance (legifrance.gouv.fr) ; site de la CAFAT ; site de la DRHFPNC (drhfpnc.gouv.nc)."
    }
   ],
   "note_expert": "Types de textes et autorités (grille de l'apport) à faire valider par les référents ; repris de M1-E3-APP1 (M1 v0.2).",
   "suite": "QFQ-E3-FIN"
  },
  "QFQ-E3-FIN": {
   "id": "QFQ-E3-FIN",
   "type": "fin-section",
   "etape": "Épisode 3",
   "surtitre": "Bilan de l'épisode",
   "titre": "Vous savez vérifier",
   "acquis": [
    {
     "titre": "Choisir la bonne source",
     "texte": "La page officielle à jour, pas le document le plus facile à trouver."
    },
    {
     "titre": "Faire les trois vérifications",
     "texte": "Qui l'a produite, de quand elle date, si elle est en vigueur."
    },
    {
     "titre": "Demander un appui précis",
     "texte": "Quand deux sources officielles divergent : ce que j'ai vérifié, ce qui reste incertain."
    }
   ],
   "dossier": "La liste d'orientation de Passerelles est vérifiée et datée.",
   "suite": "MENU"
  },
  "QFQ-DEF": {
   "id": "QFQ-DEF",
   "type": "page",
   "etape": "Défi",
   "titre": "Le premier appel de Joël",
   "chapeau": "Noa est seul au pôle. Un partenaire appelle et demande plus que ce que Noa peut accorder. Vous répondez, vous découvrez ce qui est à lui et ce qui engage l'ÉLAN, puis vous rendez compte.",
   "competences": [
    "C02",
    "C18"
   ],
   "competences_lib": [
    {
     "code": "C02",
     "libelle": "Je trouve le bon interlocuteur."
    },
    {
     "code": "C18",
     "libelle": "J'agis en autonomie et je demande appui au bon moment."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application"
   ],
   "bouton_fin": "Terminer le défi",
   "categories": [
    {
     "id": "moi",
     "libelle": "Noa le fait",
     "court": "Noa le fait"
    },
    {
     "id": "transmet",
     "libelle": "Noa transmet à Samuel",
     "court": "Noa transmet à Samuel"
    },
    {
     "id": "non",
     "libelle": "Noa ne le fait pas",
     "court": "Noa ne le fait pas"
    }
   ],
   "items": [
    {
     "id": "R",
     "libelle": "Joël attend la réponse de Noa, au téléphone.",
     "court": "La réponse à Joël",
     "attendu": "bon",
     "feedback": "Noa fait ce qui est à lui (la liste, une information publique) et transmet ce qui ne l'est pas (l'appui de l'ÉLAN). Joël sait ce qui va se passer. Promettre engagerait l'ÉLAN ; tout bloquer ou renvoyer à lundi ferait attendre un partenaire pour rien."
    },
    {
     "id": "P1",
     "libelle": "Envoyer à Joël la liste d'orientation vérifiée et datée.",
     "court": "Envoyer la liste vérifiée",
     "attendu": "moi",
     "feedback": "Une liste d'interlocuteurs n'engage pas l'ÉLAN : c'est une information publique, vérifiée.",
     "guichet": "Information publique, vérifiée"
    },
    {
     "id": "P2",
     "libelle": "Promettre l'appui de l'ÉLAN pour monter la permanence.",
     "court": "Promettre l'appui de l'ÉLAN",
     "attendu": "transmet",
     "feedback": "Un appui de l'établissement se décide à la direction : Noa transmet la demande, il ne promet rien.",
     "guichet": "Ça engage l'ÉLAN : la direction décide"
    },
    {
     "id": "P3",
     "libelle": "Donner à Joël les coordonnées du pôle liaison territoriale, pour la salle que propose la commune.",
     "court": "Orienter vers le pôle liaison",
     "attendu": "moi",
     "feedback": "Orienter vers le bon service n'engage rien : Noa peut le faire.",
     "guichet": "Orienter n'engage rien"
    },
    {
     "id": "P4",
     "libelle": "Fixer une réunion entre Passerelles et Ariane la semaine prochaine.",
     "court": "Fixer une réunion avec la directrice",
     "attendu": "transmet",
     "feedback": "L'agenda de la direction ne se fixe pas sans elle : Noa transmet la demande à Samuel.",
     "guichet": "L'agenda de la direction"
    },
    {
     "id": "P5",
     "libelle": "Envoyer à Joël le compte rendu interne du dernier comité de direction.",
     "court": "Envoyer un document interne",
     "attendu": "non",
     "feedback": "Un document interne ne sort pas sans accord : Noa ne l'envoie pas, et il ne le propose pas.",
     "guichet": "Un document interne ne sort pas"
    },
    {
     "id": "S",
     "libelle": "Samuel sort de rendez-vous à 11 h 30. Quel message Noa lui laisse-t-il ?",
     "court": "Le message à Samuel",
     "attendu": "complet",
     "feedback": "Qui, quoi, ce qui a été fait, ce qui reste à décider : Samuel peut agir tout de suite. Un message trop court l'oblige à tout redemander ; une promesse faite le met devant le fait accompli ; ne rien dire fait attendre la demande d'un partenaire."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Seul au pôle",
     "illustration": "ILL-N05",
     "texte": "Samuel est en rendez-vous jusqu'à 11 h 30, Malia en déplacement toute la journée. Noa est seul au pôle. Le téléphone sonne : c'est Joël, de l'association Passerelles.",
     "repliques": [
      {
       "personnage": "Joël",
       "texte": "« Bonjour ! Les bénévoles ont reçu votre liste, merci. Vous pouvez nous envoyer la version vérifiée ? Et on aimerait l'aide de l'ÉLAN pour monter la permanence. »"
      }
     ],
     "et_vous": "Vous est-il déjà arrivé qu'on vous demande quelque chose que vous n'aviez pas le pouvoir d'accorder ?"
    },
    {
     "type": "tri",
     "id": "reponse",
     "phase": "situation",
     "titre": "Que répond Noa ?",
     "competences": [
      "C02"
     ],
     "items": [
      "R"
     ],
     "categories": [
      {
       "id": "promet",
       "libelle": "« Bien sûr, l'ÉLAN va vous aider à monter le projet. »",
       "court": "« Bien sûr, l'ÉLAN va vous aider à monter le projet. »"
      },
      {
       "id": "bon",
       "libelle": "« Je vous envoie la liste vérifiée aujourd'hui. Pour l'appui de l'ÉLAN, je transmets votre demande à mon responsable, qui reviendra vers vous. »",
       "court": "« Je vous envoie la liste vérifiée aujourd'hui. Pour l'appui de l'ÉLAN, je transmets votre demande à mon responsable, qui reviendra vers vous. »"
      },
      {
       "id": "bloque",
       "libelle": "« Je ne peux rien vous envoyer sans l'accord de mon responsable. »",
       "court": "« Je ne peux rien vous envoyer sans l'accord de mon responsable. »"
      },
      {
       "id": "lundi",
       "libelle": "« Ce n'est pas à moi de répondre, rappelez lundi. »",
       "court": "« Ce n'est pas à moi de répondre, rappelez lundi. »"
      }
     ],
     "consigne": "Choisissez la réponse de Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : la règle vient juste dessous.",
     "bilan_tout": "Noa a répondu sans dépasser son rôle. Reste à comprendre pourquoi.",
     "qcu": true
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Ce qui est à moi, ce qui engage l'ÉLAN",
     "competences": [
      "C02",
      "C18"
     ],
     "texte": "En fin de matinée, Samuel résume : « Tu fais ce qui est à toi. Ce qui engage l'ÉLAN, tu me le transmets, avec le contexte. »",
     "regle": "Je fais ce qui relève de mon rôle. Ce qui engage mon employeur, je le transmets à mon responsable, avec le contexte.",
     "regle_clair": "Engager l'employeur, c'est signer, promettre, dépenser ou parler en son nom. Transmettre avec le contexte, c'est dire qui demande quoi, ce que j'ai déjà fait et ce qui reste à décider.",
     "methode_titre": "Un message qui se lit en une fois",
     "methode": [
      "Qui a appelé, et quand.",
      "Ce qu'il demande.",
      "Ce que j'ai déjà fait.",
      "Ce qui reste à décider, et par qui."
     ],
     "guichet": "Transmettre n'est pas se défausser : Noa répond tout de suite sur ce qui est à lui, et dit à Joël ce qui va se passer pour le reste."
    },
    {
     "type": "tri",
     "id": "role",
     "phase": "application",
     "titre": "Ce que Joël pourrait demander d'autre",
     "competences": [
      "C02",
      "C18"
     ],
     "items": [
      "P1",
      "P2",
      "P3",
      "P4",
      "P5"
     ],
     "consigne": "Pour chaque demande, que fait Noa ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication des demandes à revoir.",
     "bilan_tout": "Noa sait ce qui est à lui, ce qu'il transmet et ce qu'il ne fait pas."
    },
    {
     "type": "tri",
     "id": "message",
     "phase": "application",
     "titre": "Rendre compte à Samuel",
     "competences": [
      "C18"
     ],
     "items": [
      "S"
     ],
     "categories": [
      {
       "id": "complet",
       "libelle": "« Joël, de Passerelles, a appelé à 10 h. Ils veulent monter une permanence d'aide aux démarches et demandent l'appui de l'ÉLAN. Je lui ai envoyé la liste vérifiée. Je ne lui ai rien promis sur l'appui. Ses coordonnées sont ci-dessous. »",
       "court": "« Joël, de Passerelles, a appelé à 10 h. Ils veulent monter une permanence d'aide aux démarches et demandent l'appui de l'ÉLAN. Je lui ai envoyé la liste vérifiée. Je ne lui ai rien promis sur l'appui. Ses coordonnées sont ci-dessous. »"
      },
      {
       "id": "court",
       "libelle": "« Joël a appelé, rappelle-le. »",
       "court": "« Joël a appelé, rappelle-le. »"
      },
      {
       "id": "promis",
       "libelle": "« J'ai dit à Passerelles qu'on les aiderait. »",
       "court": "« J'ai dit à Passerelles qu'on les aiderait. »"
      },
      {
       "id": "rien",
       "libelle": "Rien : il en parlera lundi.",
       "court": "Rien : il en parlera lundi."
      }
     ],
     "consigne": "Choisissez le message de Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : qui, quoi, ce qui est fait, ce qui reste à décider.",
     "bilan_tout": "Samuel peut agir dès sa sortie de rendez-vous.",
     "qcu": true
    },
    {
     "type": "liste",
     "phase": "application",
     "titre": "Ce que Noa fait, ce qu'il transmet",
     "depuis": "role",
     "competences": [
      "C02"
     ],
     "items": [
      "P1",
      "P2",
      "P3",
      "P4",
      "P5"
     ],
     "texte": "Noa garde ce repère pour les prochains appels.",
     "entetes": [
      "Demande",
      "Qui",
      "Pourquoi"
     ],
     "mention": "Pour le dossier Passerelles : Joël a reçu la liste vérifiée ; sa demande d'appui est chez Samuel.",
     "a_retenir": "Je fais ce qui relève de mon rôle. Ce qui engage mon employeur, je le transmets à mon responsable, avec le contexte : qui, quoi, ce que j'ai fait, ce qui reste à décider."
    }
   ],
   "suite": "QFQ-DEF-FIN"
  },
  "QFQ-DEF-FIN": {
   "id": "QFQ-DEF-FIN",
   "type": "fin-section",
   "etape": "Défi",
   "surtitre": "Bilan du défi",
   "titre": "Le premier appel est passé",
   "acquis": [
    {
     "titre": "Répondre sans promettre",
     "texte": "La liste tout de suite, l'appui de l'ÉLAN transmis à Samuel."
    },
    {
     "titre": "Savoir ce qui est à soi",
     "texte": "Orienter, informer : oui. Engager l'ÉLAN, diffuser un document interne : non."
    },
    {
     "titre": "Rendre compte",
     "texte": "Un message qui se lit en une fois : qui, quoi, ce qui est fait, ce qui reste à décider."
    }
   ],
   "dossier": "Joël a reçu la liste vérifiée. Sa demande d'appui est chez Samuel.",
   "repliques": [
    {
     "personnage": "Samuel",
     "texte": "« Tu as bien fait de me transmettre. Passerelles, ça peut devenir un vrai dossier. J'en parle à Ariane. »"
    }
   ],
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
   "texte_echec_final": "Certains repères restent à consolider. Relisez la règle des épisodes concernés et revoyez-les. Quand vous vous sentez prêt, repassez l'évaluation depuis le sommaire : les situations ne seront pas les mêmes.\n",
   "consolider": {
    "E1": {
     "texte": "Je cherche qui a la compétence, pas qui est le plus proche. Dans le doute, je vérifie avant de répondre."
    },
    "E2": {
     "texte": "Je transmets ce qui engage mon employeur à celui qui décide, et je m'adresse au service qui gère le sujet."
    },
    "E3": {
     "texte": "Avant d'utiliser une information : qui l'a produite, de quand elle date, si elle est définitive."
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
   "etape": "Bilan",
   "titre": "Ce que Noa a appris cette semaine",
   "texte": "Noa relit ses notes. Voici ce qu'il sait faire maintenant.",
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
    },
    {
     "titre": "Je fais ce qui est à moi",
     "texte": "Ce qui engage l'ÉLAN, je le transmets à Samuel, avec le contexte.",
     "competence": "C18 — Autonomie et appui"
    }
   ],
   "competences": [
    "C01",
    "C02",
    "C17",
    "C18"
   ],
   "suite": "M1-SOR-REFL"
  },
  "M1-SOR-REFL": {
   "id": "M1-SOR-REFL",
   "type": "cartes",
   "etape": "Bilan",
   "titre": "Revenir sur sa semaine",
   "texte": "Malia passe au bureau : « Avant de partir, je prends cinq minutes. Trois questions. »",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C21"
   ],
   "cartes": [
    {
     "icone": "i-pause",
     "recto": "Qu'est-ce qui m'a fait perdre du temps ?",
     "verso": "Noa : « Pour la liste, j'ai d'abord ouvert le vieux guide parce qu'il était sous la main. »"
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
   "suite": "M1-SOR-LIBRE"
  },
  "M1-SOR-LIBRE": {
   "id": "M1-SOR-LIBRE",
   "type": "reponse-libre",
   "etape": "Bilan",
   "titre": "Chez mon employeur",
   "question": "Une question que je poserai la semaine prochaine pour mieux me repérer chez mon employeur :",
   "apres": "Notez-la : vous la poserez la semaine prochaine.",
   "suite": "M1-FIN"
  },
  "M1-FIN": {
   "id": "M1-FIN",
   "type": "fin",
   "etape": "Bilan",
   "titre": "Bravo, la semaine de Noa est terminée",
   "texte": "Vous avez accompagné Noa pendant une semaine à l'ÉLAN. Il sait qui fait quoi, à qui s'adresser, comment vérifier une information, et ce qui est à lui ou engage son employeur.\n",
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
    },
    {
     "titre": "Faire ce qui est à vous",
     "texte": "Et transmettre ce qui engage votre employeur, avec le contexte."
    }
   ],
   "dossier": "Le fil rouge de la semaine : la liste d'orientation, vérifiée et datée, a servi à répondre à Joël. Samuel parle de la demande de Passerelles à Ariane : le dossier avance.",
   "prochain": {
    "titre": "M2 — Je trouve ma place",
    "texte": "Deux semaines plus tard, Samuel confie à Noa son premier dossier : Passerelles."
   },
   "suite": "MENU"
  }
 },
 "fiches": {},
 "illustrations": {
  "ILL-N03": {
   "scene": "Le comité de direction de l'ÉLAN",
   "personnages": "Ariane, Samuel, Noa",
   "alt": "Salle de réunion de l'ÉLAN. Ariane ouvre le comité de direction ; Samuel et Noa sont assis autour de la table."
  },
  "ILL-N09": {
   "scene": "L'accueil de l'ÉLAN en fin de matinée",
   "personnages": "Cédric, Noa",
   "alt": "L'accueil de l'ÉLAN en fin de matinée : Cédric, derrière le comptoir, montre le cahier d'accueil à Noa."
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
  }
 },
 "source": "Storyboard — M1 en pages v0.3.md"
};
