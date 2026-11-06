/* GÉNÉRÉ par build/build.py depuis « Storyboard — M1 en pages v0.2.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M1-PAGES",
  "type": "module",
  "cle": "m1-pages",
  "titre": "Je me repère",
  "code": "M1",
  "duree": "30 min",
  "sous_titre": "Comprendre mon environnement",
  "intro": "Prototype du module 1 en pages qui défilent. Chaque épisode tient sur une page : une situation, un apport, une application. Aidez Noa et ses collègues de l'ÉLAN.",
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
   "Ana": "Pôle ressources et administration, l'ÉLAN"
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
  }
 },
 "source": "Storyboard — M1 en pages v0.2.md"
};
