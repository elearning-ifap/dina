/* GÉNÉRÉ par build/build.py depuis « Storyboard — M1 Qui fait quoi (page) v0.1.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M1-QFQ",
  "type": "module",
  "cle": "m1-qfq",
  "titre": "Je me repère",
  "code": "M1",
  "duree": "15 min",
  "sous_titre": "Comprendre mon environnement",
  "intro": "Prototype en page qui défile : l'épisode « Qui fait quoi ? » du module 1. Huit demandes d'usagers arrivent à l'accueil de l'ÉLAN. Aidez Cédric et Noa à savoir qui est compétent.",
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
    }
   ]
  },
  "personnages": {
   "Noa": "Chargé d'études et d'appui aux projets, l'ÉLAN",
   "Cédric": "Accueil et logistique, l'ÉLAN",
   "Joël": "Coordinateur de terrain, association Passerelles"
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
  }
 },
 "fiches": {},
 "illustrations": {
  "ILL-N09": {
   "scene": "L'accueil de l'ÉLAN en fin de matinée",
   "personnages": "Cédric, Noa",
   "alt": "L'accueil de l'ÉLAN en fin de matinée : Cédric, derrière le comptoir, montre le cahier d'accueil à Noa."
  }
 },
 "source": "Storyboard — M1 Qui fait quoi (page) v0.1.md"
};
