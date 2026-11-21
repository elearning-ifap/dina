/* GÉNÉRÉ par build/build.py depuis « Storyboard — M5 en pages v0.3.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "M5-PAGES",
  "type": "module",
  "cle": "m5-pages",
  "titre": "J'incarne le service public",
  "code": "M5",
  "duree": "1 h 15 environ",
  "intro": "Prototype du module 5 en pages qui défilent. La première permanence de Passerelles a lieu jeudi. Du lundi au vendredi, Noa apprend à accueillir chacun avec les mêmes égards, à garder sa réserve, à repérer un lien d'intérêt, puis à regarder honnêtement ce que la permanence a donné.",
  "sections": [
   {
    "id": "ep1",
    "libelle": "Épisode 1",
    "jour": "Lundi",
    "savoir": "Accueillir et orienter",
    "titre": "Au guichet avec Élise",
    "debut": "M5-P1",
    "duree": "17 min",
    "accroche": "Une matinée à l'accueil de la commune. Une dame qui ne trouve pas ses mots, une connaissance dans la file, une affiche périmée."
   },
   {
    "id": "ep2",
    "libelle": "Épisode 2",
    "jour": "Mardi",
    "savoir": "Garder sa réserve",
    "titre": "La réserve",
    "debut": "M5-P2",
    "duree": "10 min",
    "accroche": "Un message à relayer dans un groupe, une photo avec un badge. Qu'est-ce qu'un agent public partage, et où ?"
   },
   {
    "id": "ep3",
    "libelle": "Épisode 3",
    "jour": "Mercredi",
    "savoir": "Repérer un lien d'intérêt",
    "titre": "Un dossier de famille",
    "debut": "M5-P3",
    "duree": "13 min",
    "accroche": "Parmi les lieux proposés, il y a celui d'un cousin. Puis un coup de téléphone, puis un panier."
   },
   {
    "id": "ep4",
    "libelle": "Épisode 4",
    "jour": "Jeudi",
    "savoir": "Mesurer et améliorer",
    "titre": "La première permanence",
    "debut": "M5-P4",
    "duree": "14 min",
    "accroche": "Onze personnes reçues, quatre démarches abouties. Et une habitante qui repart sans savoir quoi faire."
   },
   {
    "id": "defi",
    "libelle": "Défi",
    "jour": "Jeudi",
    "savoir": "Le défi : rendre compte fidèlement",
    "titre": "Une note plus positive",
    "debut": "M5-DEF",
    "duree": "8 min",
    "accroche": "Ariane demande de présenter les résultats de façon plus positive. Que garde-t-on ?"
   },
   {
    "id": "eval",
    "libelle": "Évaluation",
    "jour": "Vendredi",
    "savoir": "L'évaluation du module",
    "titre": "L'évaluation",
    "debut": "M5-EVA-INTRO",
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
    "debut": "M5-SOR-1",
    "duree": "5 min",
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
     "id": "accueil",
     "jour": "Lundi",
     "libelle": "L'accueil des habitants est préparé avec Élise",
     "section": "ep1"
    },
    {
     "id": "message",
     "jour": "Mardi",
     "libelle": "Les messages et les images de la permanence restent neutres",
     "section": "ep2"
    },
    {
     "id": "lieu",
     "jour": "Mercredi",
     "libelle": "Les lieux proposés sont étudiés sans lien personnel",
     "section": "ep3"
    },
    {
     "id": "permanence",
     "jour": "Jeudi",
     "libelle": "La première permanence est tenue",
     "section": "ep4"
    },
    {
     "id": "bilan",
     "jour": "Jeudi",
     "libelle": "Le premier bilan est remis à Passerelles, fidèle aux faits",
     "section": "defi"
    },
    {
     "id": "suite",
     "jour": "Vendredi",
     "libelle": "Une amélioration est proposée et son indicateur choisi",
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
   "Élise": "Agente d'accueil, une commune"
  }
 },
 "ecrans": {
  "M5-P1": {
   "id": "M5-P1",
   "type": "page",
   "etape": "Épisode 1",
   "titre": "Au guichet avec Élise",
   "chapeau": "Lundi matin, Noa passe quelques heures à l'accueil de la commune, aux côtés d'Élise, pour préparer la permanence de jeudi. Une dame, une connaissance, un jeune qui s'énerve, une affiche périmée. Vous choisissez à chaque fois ce que fait Noa.",
   "competences": [
    "C16",
    "C13"
   ],
   "competences_lib": [
    {
     "code": "C16",
     "libelle": "J'assure une relation de service respectueuse de l'usager."
    },
    {
     "code": "C13",
     "libelle": "J'incarne les valeurs et les principes du service public."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application"
   ],
   "bouton_fin": "Terminer l'épisode",
   "items": [
    {
     "id": "A1",
     "libelle": "Une dame âgée s'exprime surtout dans sa langue et peine à expliquer sa démarche. Élise invite Noa à prendre la suite. Que fait-il ?",
     "court": "La dame qui cherche ses mots",
     "attendu": "relais",
     "feedback": "Ralentir, reformuler et chercher un relais, un collègue ou un proche qui parle sa langue, garantit qu'on répond à sa vraie demande. La renvoyer ou deviner la démarche la laisse sans réponse, ou avec un dossier faux."
    },
    {
     "id": "A2",
     "libelle": "Dans la file, une personne que Noa connaît lui fait signe : « Tu peux me prendre maintenant ? Je n'en ai que pour une minute. » Que fait Noa ?",
     "court": "La connaissance dans la file",
     "attendu": "egal",
     "feedback": "Chacun passe à son tour, une connaissance comme un inconnu, et on le dit avec tact. Le passe-droit abîme la confiance de ceux qui attendent. L'ignorer ou répondre sèchement abîme la relation sans rien régler."
    },
    {
     "id": "A3",
     "libelle": "Un jeune s'énerve : on lui demande une pièce qu'il n'avait pas prévue. Il répète que « c'est toujours pareil ». Que fait Noa ?",
     "court": "Le jeune qui s'énerve",
     "attendu": "verifie",
     "feedback": "On écoute, puis on vérifie sur la source officielle. Si la pièce n'est pas exigée, on le dit ; si elle l'est, on l'explique. Hausser le ton ou céder pour avoir la paix ne règle rien."
    },
    {
     "id": "A4",
     "libelle": "L'affiche des horaires date de l'an dernier. Élise dit qu'elle ne sait pas qui l'a faite. Que fait Noa ?",
     "court": "L'affiche périmée",
     "attendu": "signale",
     "feedback": "Une information périmée envoie des habitants au mauvais moment. On ne la corrige pas seul, on la signale à qui s'en occupe, en disant précisément ce qui est faux."
    },
    {
     "id": "A5",
     "libelle": "Un habitant demande à quelle heure se tient la permanence de jeudi.",
     "court": "L'horaire de la permanence",
     "attendu": "repondre",
     "feedback": "L'information est publique et Noa la connaît. Il répond, et vérifie que la date, l'heure et le lieu sont clairs."
    },
    {
     "id": "A6",
     "libelle": "Un habitant demande pourquoi son dossier d'aide, déposé dans un autre service, est bloqué.",
     "court": "Le dossier bloqué ailleurs",
     "attendu": "transmettre",
     "feedback": "Noa ne voit pas ce dossier et ne décide pas à la place de l'autre service. Il écoute, note la demande et la transmet à qui peut répondre."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Lundi : ce que voient les habitants",
     "illustration": "ILL-S01",
     "texte": "Lundi, 8 h 10, bureau du pôle. La première permanence de Passerelles aura lieu jeudi. Avant cela, Samuel veut que Noa voie ce que vivent les habitants quand ils poussent la porte d'un guichet.",
     "repliques": [
      {
       "personnage": "Samuel",
       "canal": "oral",
       "texte": "« Pour l'habitant, tu es le service public. Il ne fait pas la différence entre la commune, l'ÉLAN et l'association. Passe la matinée avec Élise. »"
      },
      {
       "personnage": "Malia",
       "canal": "oral",
       "texte": "« Regarde comment elle accueille. Ce sont de petits gestes, mais ils décident de la confiance. »"
      }
     ],
     "et_vous": "La dernière fois que vous avez été de l'autre côté du guichet, qu'est-ce qui vous a mis à l'aise, ou pas ?"
    },
    {
     "type": "recit",
     "phase": "situation",
     "titre": "8 h 30, l'accueil de la commune",
     "illustration": "ILL-S02",
     "texte": "Une file se forme. Élise accueille, oriente, vérifie. Elle laisse Noa essayer, en restant à côté de lui. Une dame âgée s'avance, un papier plié à la main."
    },
    {
     "type": "tri",
     "id": "dame",
     "phase": "situation",
     "titre": "La dame qui cherche ses mots",
     "competences": [
      "C16"
     ],
     "items": [
      "A1"
     ],
     "categories": [
      {
       "id": "relais",
       "libelle": "Il ralentit, emploie des mots simples, reformule pour vérifier qu'il a compris, et cherche un relais (un collègue, un proche qui parle sa langue).",
       "court": "Il ralentit, reformule, cherche un relais."
      },
      {
       "id": "renvoie",
       "libelle": "Il lui remet la liste des pièces et lui dit de revenir avec quelqu'un.",
       "court": "Il lui remet la liste et la renvoie."
      },
      {
       "id": "fort",
       "libelle": "Il répète la même phrase, plus fort et plus lentement.",
       "court": "Il répète plus fort."
      },
      {
       "id": "devine",
       "libelle": "Il devine ce qu'elle veut et remplit le formulaire à sa place.",
       "court": "Il remplit à sa place."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on s'assure d'avoir compris, sans décider à la place de l'usager.",
     "bilan_tout": "La dame repart avec la bonne démarche, expliquée par une collègue qui parle sa langue.",
     "valider": "Relais linguistique à l'accueil (collègue, proche) : pratique à confirmer, référent coutumier et centre d'accueil réel (couverture M5, question 4). Aucune obligation de service d'interprétariat n'est affirmée."
    },
    {
     "type": "tri",
     "id": "connaissance",
     "phase": "situation",
     "titre": "Une connaissance dans la file",
     "competences": [
      "C13"
     ],
     "items": [
      "A2"
     ],
     "categories": [
      {
       "id": "egal",
       "libelle": "Il la salue, lui dit qu'elle passera à son tour comme les autres, et lui propose d'attendre ou de revenir.",
       "court": "Il lui dit d'attendre son tour."
      },
      {
       "id": "passedroit",
       "libelle": "Il la prend tout de suite : ce n'est qu'une minute.",
       "court": "Il la prend tout de suite."
      },
      {
       "id": "ignore",
       "libelle": "Il fait semblant de ne pas la voir.",
       "court": "Il fait semblant de ne pas la voir."
      },
      {
       "id": "sec",
       "libelle": "Il répond « Non » à voix haute, sans un mot de plus.",
       "court": "Il répond « Non », sans un mot de plus."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : l'égalité se dit avec tact.",
     "bilan_tout": "La connaissance patiente, un peu surprise, puis passe à son tour."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Accueillir et orienter",
     "competences": [
      "C16",
      "C13"
     ],
     "texte": "Noa vient de voir deux choses : une façon d'expliquer qui s'adapte, et un traitement qui ne change pas.",
     "regle": "J'accueille chacun avec les mêmes égards. J'adapte ma façon d'expliquer, jamais ce à quoi la personne a droit. Ce qui dépasse mon rôle, je le transmets.",
     "regle_clair": "**L'égalité de traitement**, c'est traiter chacun de la même façon, sans passe-droit pour une connaissance. **Orienter**, c'est indiquer le bon service quand la demande n'est pas la mienne.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M5-01"
      }
     ],
     "methode_titre": "Cinq repères pour accueillir",
     "methode": [
      "Je salue, je me présente (nom, service) et j'écoute avec bienveillance.",
      "Même traitement pour tous : pas de passe-droit. J'adapte mon explication, pas les droits.",
      "Je reformule pour vérifier que l'usager a compris ; si besoin, je cherche un relais.",
      "Avant d'exiger une pièce, je vérifie sur la source officielle.",
      "Ce qui dépasse mon rôle, je le transmets au bon service sans le traiter moi-même. Je signale une information périmée."
     ],
     "guichet": "Mon employeur peut avoir une charte ou des règles d'accueil. En cas de doute, je demande à mon responsable.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Quatre principes.** On rattache l'accueil à quatre principes du service public : l'égalité, la neutralité, la continuité (le service ne s'interrompt pas sans raison) et l'adaptabilité (il évolue avec les besoins). Ici, on les emploie comme **principes**, sans texte local à citer pour les deux derniers. **Le secret.** Ce que j'apprends d'un usager reste dans le service : délibération n° 81 du 24 juillet 1990, art. 20."
     },
     "valider": "Continuité et adaptabilité : aucun texte calédonien au corpus, formulation simple à faire valider (couverture M5, question 3). Égalité et neutralité : page DRHFPNC « Les droits et obligations » ; secret : délibération 81, art. 20 (couvert)."
    },
    {
     "type": "recit",
     "phase": "application",
     "titre": "10 h : une pièce qui manque",
     "illustration": "ILL-S03",
     "texte": "10 h. Un jeune arrive, tendu : il a fait deux heures de route pour déposer un dossier. On vient de lui dire qu'il manque une pièce. Élise est au téléphone ; Noa prend la suite. Derrière lui, l'affiche des horaires est restée à l'année dernière."
    },
    {
     "type": "tri",
     "id": "jeune",
     "phase": "application",
     "titre": "Le jeune qui s'énerve",
     "competences": [
      "C16"
     ],
     "items": [
      "A3"
     ],
     "categories": [
      {
       "id": "verifie",
       "libelle": "Il reste calme, écoute, puis vérifie sur la source officielle si la pièce est bien exigée avant de répondre.",
       "court": "Il écoute, puis vérifie la source officielle."
      },
      {
       "id": "insiste",
       "libelle": "Il maintient la demande : c'est la règle.",
       "court": "Il maintient la demande."
      },
      {
       "id": "cede",
       "libelle": "Il lui dit de laisser tomber la pièce pour calmer les choses.",
       "court": "Il lui dit de laisser tomber la pièce."
      },
      {
       "id": "voix",
       "libelle": "Il hausse le ton pour reprendre la main.",
       "court": "Il hausse le ton."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on vérifie avant d'exiger.",
     "bilan_tout": "La pièce n'était pas exigée pour ce type de demande. Le jeune repart avec son dossier déposé.",
     "valider": "La vérification de la pièce sur la source officielle est une bonne pratique : le texte exact dépend de la démarche et de l'employeur."
    },
    {
     "type": "tri",
     "id": "affiche",
     "phase": "application",
     "titre": "L'affiche des horaires",
     "competences": [
      "C16"
     ],
     "items": [
      "A4"
     ],
     "categories": [
      {
       "id": "signale",
       "libelle": "Il signale l'affiche à Élise ou à celui qui s'en occupe, en disant ce qui est faux.",
       "court": "Il la signale, en disant ce qui est faux."
      },
      {
       "id": "rien",
       "libelle": "Il n'y touche pas : ce n'est pas son rôle.",
       "court": "Il n'y touche pas."
      },
      {
       "id": "retire",
       "libelle": "Il la retire sans rien dire à personne.",
       "court": "Il la retire sans rien dire."
      },
      {
       "id": "oral",
       "libelle": "Il prévient les habitants un par un, sans rien corriger.",
       "court": "Il prévient oralement, sans corriger."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : ce qui est périmé se signale.",
     "bilan_tout": "Élise remercie Noa et appelle le service concerné."
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Deux appels, deux réponses",
     "competences": [
      "C16"
     ],
     "items": [
      "A5",
      "A6"
     ],
     "categories": [
      {
       "id": "repondre",
       "libelle": "Je réponds",
       "court": "Je réponds"
      },
      {
       "id": "transmettre",
       "libelle": "Je transmets",
       "court": "Je transmets"
      }
     ],
     "consigne": "Pour chaque appel, répondez-vous ou transmettez-vous ?",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je réponds à ce qui relève de mon rôle ; sinon, je transmets, sans traiter à la place d'un autre.",
     "bilan_tout": "Vous savez distinguer ce que vous pouvez dire de ce que vous devez transmettre."
    }
   ],
   "fiches": [
    "FICHE-M5-E1",
    "FICHE-M5-CONN1",
    "FA-M5-01"
   ],
   "suite": "M5-P1-FIN"
  },
  "M5-P1-FIN": {
   "id": "M5-P1-FIN",
   "type": "fin-section",
   "etape": "Épisode 1",
   "surtitre": "Bilan de l'épisode",
   "titre": "Lundi, c'est fait",
   "acquis": [
    {
     "titre": "Adapter l'explication, pas les droits",
     "texte": "La dame a été comprise grâce à un relais ; la connaissance est passée à son tour."
    },
    {
     "titre": "Vérifier avant d'exiger",
     "texte": "Le jeune a déposé son dossier, sans la pièce qui n'était pas demandée."
    },
    {
     "titre": "Signaler ce qui est périmé",
     "texte": "L'affiche des horaires sera corrigée par ceux qui s'en occupent."
    },
    {
     "titre": "Répondre, ou transmettre",
     "texte": "Noa répond sur ce qui relève de lui et transmet le reste."
    }
   ],
   "dossier": "Noa a observé l'accueil d'Élise. La permanence de jeudi sera accueillie comme ici : les mêmes égards pour tous.",
   "suite": "MENU"
  },
  "M5-P2": {
   "id": "M5-P2",
   "type": "page",
   "etape": "Épisode 2",
   "titre": "La réserve",
   "chapeau": "Mardi, deux messages arrivent à Noa, sans rapport avec le travail du jour. Un message militant à relayer, une photo de lui avec son badge sur un compte qui défend une cause. Vous associez chaque situation à un principe, puis vous choisissez ce que fait Noa.",
   "competences": [
    "C13",
    "C14"
   ],
   "competences_lib": [
    {
     "code": "C13",
     "libelle": "J'incarne les valeurs et les principes du service public."
    },
    {
     "code": "C14",
     "libelle": "Je fais preuve de discernement dans une situation sensible."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application"
   ],
   "bouton_fin": "Terminer l'épisode",
   "items": [
    {
     "id": "B1",
     "libelle": "Un collègue invite à relayer, dans le groupe de messagerie professionnel, un message qui défend une cause.",
     "court": "Le message à relayer",
     "attendu": "neutralite",
     "feedback": "La messagerie professionnelle sert au service, pas à défendre une cause. En service, l'agent reste neutre : il ne relaie pas."
    },
    {
     "id": "B2",
     "libelle": "Une photo de Noa avec son badge circule sur un compte militant, avec un commentaire qui laisse croire que l'ÉLAN soutient la cause.",
     "court": "La photo avec le badge",
     "attendu": "image",
     "feedback": "Le badge rattache Noa à son employeur : la photo engage l'image du service, même si Noa n'y est pour rien."
    },
    {
     "id": "B3",
     "libelle": "Le soir, depuis son compte personnel, un agent publie un avis très vif sur une décision de son employeur.",
     "court": "L'avis publié le soir",
     "attendu": "reserve",
     "feedback": "En dehors du service, l'agent reste libre de ses opinions, mais il s'exprime avec mesure : un propos très vif peut atteindre son employeur et lui être reproché."
    },
    {
     "id": "B4",
     "libelle": "Que fait Noa du message à relayer ?",
     "court": "Le message à relayer",
     "attendu": "simple",
     "feedback": "Ne pas relayer suffit, et rappeler simplement la règle évite de braquer. Relayer par « groupe interne », contredire dans le groupe ou transférer au service ne règle rien."
    },
    {
     "id": "B5",
     "libelle": "Que fait Noa de la photo ?",
     "court": "La photo qui circule",
     "attendu": "retrait",
     "feedback": "La photo est publiée par d'autres : Noa peut demander son retrait à celui qui l'a publiée et prévenir son responsable. La laisser, ou se justifier publiquement, aggrave la confusion."
    },
    {
     "id": "B6",
     "libelle": "Au guichet, un habitant demande à Noa pour qui il vote. Que répond-il ?",
     "court": "Pour qui vous votez ?",
     "attendu": "aimable",
     "feedback": "Noa répond aimablement qu'à son poste il ne parle pas de ses opinions, et revient à la démarche. Donner son avis ou répondre sèchement affaiblit la confiance de tous les habitants."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Mardi : deux messages",
     "illustration": "ILL-S04",
     "texte": "Mardi, 9 h. Noa prépare la permanence quand son téléphone vibre deux fois : un message dans le groupe de messagerie du pôle, puis une photo qu'une connaissance lui envoie.",
     "repliques": [
      {
       "personnage": "Malia",
       "canal": "oral",
       "texte": "« Ça arrive à tout le monde. L'important, c'est de savoir sur quoi on s'appuie avant de répondre. »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "principe",
     "phase": "situation",
     "titre": "Quel principe est en jeu ?",
     "competences": [
      "C13"
     ],
     "items": [
      "B1",
      "B2",
      "B3"
     ],
     "categories": [
      {
       "id": "neutralite",
       "libelle": "La neutralité en service",
       "court": "Neutralité"
      },
      {
       "id": "reserve",
       "libelle": "La réserve en dehors du service",
       "court": "Réserve"
      },
      {
       "id": "image",
       "libelle": "L'image du service",
       "court": "Image du service"
      }
     ],
     "consigne": "Pour chaque situation, quel principe est en jeu ?",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "Le repère vient juste dessous. Notez ce que vous auriez classé autrement.",
     "bilan_tout": "Vous reliez chaque situation à un principe. La suite vous donne les mots pour agir."
    },
    {
     "type": "tri",
     "id": "message",
     "phase": "situation",
     "titre": "Le message du groupe",
     "competences": [
      "C14"
     ],
     "items": [
      "B4"
     ],
     "categories": [
      {
       "id": "simple",
       "libelle": "Il ne le relaie pas, et rappelle simplement à son collègue que la messagerie professionnelle n'est pas faite pour ça.",
       "court": "Il ne relaie pas et le dit simplement."
      },
      {
       "id": "relaie",
       "libelle": "Il le relaie : c'est un groupe interne.",
       "court": "Il le relaie."
      },
      {
       "id": "contredit",
       "libelle": "Il répond dans le groupe pour contredire le message.",
       "court": "Il contredit dans le groupe."
      },
      {
       "id": "transfere",
       "libelle": "Il le transfère au service juridique avec un commentaire.",
       "court": "Il le transfère au juridique."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on ne relaie pas, on le dit sans braquer.",
     "bilan_tout": "Le collègue répond « Ah oui, pardon », et supprime son message."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Neutralité, réserve, discrétion",
     "competences": [
      "C13",
      "C14"
     ],
     "texte": "Noa a deux réflexes : ne pas relayer, et se demander ce que dit son badge.",
     "regle": "En service, je reste neutre. En dehors, je m'exprime avec mesure. Ce que je sais par mes fonctions, je le garde.",
     "regle_clair": "**La neutralité**, c'est ne pas mêler ses opinions à son travail. **La réserve**, c'est la mesure avec laquelle je m'exprime, même en dehors du service. **La discrétion**, c'est ne pas répéter ce que je sais par mes fonctions.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M5-02"
      }
     ],
     "methode_titre": "Quatre repères pour garder sa réserve",
     "methode": [
      "Je ne relaie aucun message militant, surtout pas par la messagerie professionnelle.",
      "Mon opinion m'appartient, mais j'en parle avec mesure, y compris sur les réseaux sociaux.",
      "Je n'affiche pas de signe ou d'objet politique ou religieux ostentatoire dans le service.",
      "Si mon image de service circule, je demande le retrait et j'en informe mon responsable."
     ],
     "guichet": "En cas de doute sur ce que je peux dire ou publier, je demande à mon responsable ou au service RH.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**Mon opinion m'appartient.** La liberté d'opinion est un droit de l'agent (délibération n° 81 du 24 juillet 1990, art. 5 à 9). **Ce qui est encadré**, c'est la façon de l'exprimer : secret et discrétion (art. 20 et 21), responsabilité et loyauté (art. 22). Une circulaire de la DRHFPNC du 18 juin 2024 rappelle ces principes pour les réseaux sociaux."
     },
     "valider": "Neutralité, réserve, discrétion : délibération 81 art. 20 à 22 (couvert) ; circulaire DRHFPNC du 18-06-2024 (II à IV) à citer avec précaution ; page DRHFPNC « Les droits et obligations » (neutralité, laïcité). Aucune période électorale, aucun parti, aucun élu réel dans le module : faire relire par le juriste."
    },
    {
     "type": "tri",
     "id": "photo",
     "phase": "application",
     "titre": "La photo avec le badge",
     "competences": [
      "C14"
     ],
     "items": [
      "B5"
     ],
     "categories": [
      {
       "id": "retrait",
       "libelle": "Il demande le retrait de la photo à celui qui l'a publiée, et en informe son responsable.",
       "court": "Il demande le retrait et prévient son responsable."
      },
      {
       "id": "laisse",
       "libelle": "Il laisse la photo : ce n'est pas lui qui l'a publiée.",
       "court": "Il laisse la photo."
      },
      {
       "id": "comment",
       "libelle": "Il commente publiquement pour se désolidariser de la cause.",
       "court": "Il commente publiquement."
      },
      {
       "id": "ferme",
       "libelle": "Il supprime ses comptes pour ne plus être visible.",
       "court": "Il supprime ses comptes."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on demande le retrait, sans se justifier en public.",
     "bilan_tout": "La photo disparaît le lendemain. Samuel remercie Noa de l'avoir prévenu.",
     "valider": "Conduite à tenir quand l'image d'un agent circule sans son accord : bonne pratique, pas une règle (pas de texte au corpus)."
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "« Pour qui vous votez ? »",
     "competences": [
      "C13"
     ],
     "items": [
      "B6"
     ],
     "categories": [
      {
       "id": "aimable",
       "libelle": "Il répond aimablement qu'à son poste il ne parle pas de ses opinions, puis revient à la démarche.",
       "court": "Il répond aimablement qu'il n'en parle pas."
      },
      {
       "id": "dit",
       "libelle": "Il le dit : cela ne coûte rien.",
       "court": "Il le dit."
      },
      {
       "id": "sec",
       "libelle": "Il répond sèchement que cela ne le regarde pas.",
       "court": "Il répond sèchement."
      },
      {
       "id": "invente",
       "libelle": "Il invente une réponse pour éviter le sujet.",
       "court": "Il invente une réponse."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je réponds poliment et je reviens à la démarche.",
     "bilan_tout": "Vous savez refuser de répondre sans froisser."
    }
   ],
   "fiches": [
    "FICHE-M5-CONN2",
    "FA-M5-02"
   ],
   "suite": "M5-P2-FIN"
  },
  "M5-P2-FIN": {
   "id": "M5-P2-FIN",
   "type": "fin-section",
   "etape": "Épisode 2",
   "surtitre": "Bilan de l'épisode",
   "titre": "Mardi, c'est fait",
   "acquis": [
    {
     "titre": "Un principe pour chaque situation",
     "texte": "Neutralité en service, réserve en dehors, image du service."
    },
    {
     "titre": "Ne pas relayer, le dire simplement",
     "texte": "Le collègue a supprimé son message sans que personne ne se braque."
    },
    {
     "titre": "Demander le retrait",
     "texte": "La photo a disparu, et Samuel est prévenu."
    },
    {
     "titre": "Refuser de répondre, poliment",
     "texte": "Noa revient à la démarche de l'habitant."
    }
   ],
   "dossier": "Les messages et les images de la permanence restent neutres : rien ne laisse croire que l'ÉLAN soutient une cause.",
   "suite": "MENU"
  },
  "M5-P3": {
   "id": "M5-P3",
   "type": "page",
   "etape": "Épisode 3",
   "titre": "Un dossier de famille",
   "chapeau": "Mercredi, Samuel confie à Noa l'étude de lieux proposés pour les prochaines permanences. L'un d'eux est celui de son cousin. Vous choisissez ce que fait Noa quand il reconnaît le lien, quand le cousin appelle, puis quand un panier arrive.",
   "competences": [
    "C14",
    "C13"
   ],
   "competences_lib": [
    {
     "code": "C14",
     "libelle": "Je fais preuve de discernement dans une situation sensible."
    },
    {
     "code": "C13",
     "libelle": "J'incarne les valeurs et les principes du service public."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application"
   ],
   "bouton_fin": "Terminer l'épisode",
   "items": [
    {
     "id": "C1",
     "libelle": "Noa reconnaît, parmi les lieux proposés, celui de son cousin. Samuel lui a confié l'étude de tous les lieux. Que fait Noa ?",
     "court": "Le lieu de son cousin",
     "attendu": "signale",
     "feedback": "Un lien personnel avec un dossier se signale, et on ne le traite pas : être objectif ne suffit pas, il faut que cela se voie. Être plus exigeant ou écarter le lieu sans rien dire reste une décision prise seul."
    },
    {
     "id": "C2",
     "libelle": "Le cousin appelle Noa « pour avoir des nouvelles » de l'étude. Que répond Noa ?",
     "court": "L'appel du cousin",
     "attendu": "aimable",
     "feedback": "Noa reste aimable, dit qu'il ne traite pas ce dossier et ne donne aucune information. Rassurer ou conseiller revient à avantager un proche ; ne plus répondre abîme inutilement la relation."
    },
    {
     "id": "C3",
     "libelle": "En fin de journée, un panier de produits arrive à l'ÉLAN « pour remercier l'équipe », avec un mot du cousin. L'étude n'est pas terminée. Que fait Noa ?",
     "court": "Le panier",
     "attendu": "conseil",
     "feedback": "Un cadeau reçu pendant un dossier place chacun en situation de redevable. On ne tranche pas seul : on prévient son responsable et on demande conseil, y compris sur la façon de remercier avec tact."
    },
    {
     "id": "C4",
     "libelle": "Un ami demande à Noa, « juste pour savoir si son idée a une chance », quels lieux seront retenus.",
     "court": "Un ami curieux",
     "attendu": "refuse",
     "feedback": "Une information non publique sur un dossier ne se donne à personne, ami ou non. Noa dit ce qu'il ne peut pas dire, et oriente vers ce qui est public."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Mercredi : trois lieux à étudier",
     "illustration": "ILL-S05",
     "texte": "Mercredi, 9 h. Des communes proposent des lieux pour étendre la permanence après la première série. L'ÉLAN n'accorde aucune aide : il étudie ce qui est possible, et Passerelles choisit. Samuel confie la liste à Noa. Au troisième nom, Noa s'arrête.",
     "repliques": [
      {
       "personnage": "Samuel",
       "canal": "oral",
       "texte": "« Tu fais comme pour les six premiers : une fiche par lieu, factuelle. Passerelles tranchera. »"
      }
     ],
     "et_vous": "Avez-vous déjà eu à traiter une demande qui concernait quelqu'un que vous connaissiez ?"
    },
    {
     "type": "tri",
     "id": "lien",
     "phase": "situation",
     "titre": "Le troisième lieu",
     "competences": [
      "C14"
     ],
     "items": [
      "C1"
     ],
     "categories": [
      {
       "id": "signale",
       "libelle": "Il le dit à Samuel par écrit, et demande à ne pas traiter ce lieu : un autre agent s'en charge.",
       "court": "Il le signale à Samuel et ne le traite pas."
      },
      {
       "id": "normal",
       "libelle": "Il le traite comme les autres, sans rien dire : l'étude est objective.",
       "court": "Il le traite sans rien dire."
      },
      {
       "id": "exigeant",
       "libelle": "Il le traite lui-même, mais en étant plus exigeant que pour les autres.",
       "court": "Il le traite en étant plus exigeant."
      },
      {
       "id": "ecarte",
       "libelle": "Il écarte le lieu de la liste, sans rien dire à personne.",
       "court": "Il écarte le lieu sans rien dire."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on signale d'abord, on ne tranche pas seul.",
     "bilan_tout": "Samuel confie le troisième lieu à Malia, et remercie Noa de l'avoir dit.",
     "valider": "Conflit d'intérêts : aucune définition calédonienne trouvée ; démarche « alerter par écrit, se déporter, faire confier le dossier à un autre agent » issue du brief déontologie du 11-11, à confirmer. Aucun référent déontologue n'est affirmé."
    },
    {
     "type": "tri",
     "id": "appel",
     "phase": "situation",
     "titre": "L'appel du cousin",
     "competences": [
      "C14"
     ],
     "items": [
      "C2"
     ],
     "categories": [
      {
       "id": "aimable",
       "libelle": "Il reste aimable, dit qu'il ne traite pas ce dossier, ne donne aucune information et l'oriente vers l'ÉLAN.",
       "court": "Il reste aimable et ne donne aucune information."
      },
      {
       "id": "rassure",
       "libelle": "Il le rassure : « Ça se présente bien. »",
       "court": "Il le rassure."
      },
      {
       "id": "conseille",
       "libelle": "Il lui dit ce qu'il faut mettre dans le dossier pour avoir plus de chances.",
       "court": "Il lui dit quoi mettre dans le dossier."
      },
      {
       "id": "coupe",
       "libelle": "Il ne répond plus à ses appels.",
       "court": "Il ne répond plus."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : aimable, mais sans rien dire du dossier.",
     "bilan_tout": "Le cousin comprend, un peu déçu, et dit qu'il rappellera pour d'autres nouvelles."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Avant de décider",
     "competences": [
      "C14",
      "C13"
     ],
     "texte": "Noa a signalé le lien, il ne traite plus le dossier, et il n'a rien dit à son cousin. Voici pourquoi, et comment décider quand la situation est moins nette.",
     "regle": "Si j'ai un lien avec un dossier, je le signale et je ne le traite pas. Je ne donne à personne d'information non publique. Avant d'accepter un cadeau, je demande conseil.",
     "regle_clair": "Un **conflit d'intérêts**, c'est quand un lien personnel pourrait influencer, ou sembler influencer, mon travail. **Se déporter**, c'est cesser de traiter le dossier et le faire confier à un autre agent.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M5-03"
      }
     ],
     "methode_titre": "Six questions avant de décider",
     "methode": [
      "Qui est concerné ? Ai-je un lien avec lui (famille, proche, intérêt) ?",
      "Quel est mon rôle dans ce dossier : j'instruis, je donne un avis, je décide ?",
      "Quand arrive ce cadeau ou cette demande, et quelle est sa valeur ?",
      "Est-ce que cela me rend redevable ?",
      "Serais-je à l'aise d'en parler autour de moi ?",
      "À qui demander conseil : mon responsable, le service RH ou le service juridique ?"
     ],
     "guichet": "En cas de doute, j'écris à mon responsable, au service RH ou au service juridique, et je garde la trace.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**D'où vient cette grille.** Elle s'inspire d'un guide de l'Agence française anticorruption sur les cadeaux et les invitations : c'est un repère, pas une règle applicable en Nouvelle-Calédonie. **Ce qui s'applique aux agents** : consacrer son activité aux tâches confiées et encadrement du cumul (délibération n° 81, art. 19 et 19-1), secret et discrétion (art. 20)."
     },
     "valider": "Grille des six questions : guide AFA 2022 (repère métropolitain, jamais une règle) ; délibération 81, art. 19, 19-1, 20 (couvert). Pas de définition calédonienne du conflit d'intérêts (couverture M5, question 2). Pas de référent déontologue affirmé (question 1). Les pistes du brief IA (référent des élus communaux, Défenseur des droits) ne sont pas utilisées : non confirmées."
    },
    {
     "type": "recit",
     "phase": "application",
     "titre": "Le panier",
     "illustration": "ILL-S06",
     "texte": "Mercredi, 16 h 30. La porte de l'accueil s'ouvre : un panier de produits du pays, avec un petit mot « pour remercier toute l'équipe ». Cédric le pose sur le comptoir et appelle Noa. L'étude des lieux n'est pas terminée.",
     "repliques": [
      {
       "personnage": "Cédric",
       "canal": "oral",
       "texte": "« C'est ton cousin qui l'envoie ? On le met où ? »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "panier",
     "phase": "application",
     "titre": "Que fait-on du panier ?",
     "competences": [
      "C14"
     ],
     "items": [
      "C3"
     ],
     "categories": [
      {
       "id": "conseil",
       "libelle": "Il n'y touche pas, prévient Samuel et demande conseil sur la suite et sur la façon de remercier avec tact.",
       "court": "Il prévient Samuel et demande conseil."
      },
      {
       "id": "partage",
       "libelle": "Il le partage avec l'équipe : c'est un geste collectif.",
       "court": "Il le partage avec l'équipe."
      },
      {
       "id": "accepte",
       "libelle": "Il l'accepte pour ne pas vexer, sans en parler à personne.",
       "court": "Il l'accepte sans rien dire."
      },
      {
       "id": "renvoie",
       "libelle": "Il le renvoie sans un mot.",
       "court": "Il le renvoie sans un mot."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on ne décide pas seul, on demande comment faire.",
     "bilan_tout": "Samuel et le service RH conviennent d'une réponse courtoise ; le panier est rendu avec un mot de remerciement.",
     "valider": "Cadeau coutumier : le module ne tranche pas sur la coutume, il montre comment demander conseil. Relecture par le valideur coutumier (D45) : forme du refus, geste collectif ou personnel (couverture M5, question 4). Valeur et pratique réelles à confirmer par un juriste et l'employeur."
    },
    {
     "type": "ordre",
     "id": "demarche",
     "phase": "application",
     "titre": "Dans quel ordre agir ?",
     "competences": [
      "C14"
     ],
     "texte": "Noa reprend ce qu'il a fait depuis le matin. Remettez les gestes dans l'ordre.",
     "consigne": "Remettez les gestes dans l'ordre : utilisez les flèches.",
     "options": [
      {
       "id": "A",
       "libelle": "Je repère le lien : ce lieu est celui de mon cousin."
      },
      {
       "id": "B",
       "libelle": "J'alerte mon responsable par écrit."
      },
      {
       "id": "C",
       "libelle": "Je cesse de traiter le dossier ; mon responsable le confie à un autre agent."
      },
      {
       "id": "D",
       "libelle": "Je ne donne aucune information à mon cousin, et je garde la trace de nos échanges."
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
     "feedback_ok": "On repère, on alerte par écrit, on se déporte, puis on garde le silence sur le dossier et la trace de ce qui a été dit.",
     "feedback_ko": "On commence par repérer le lien, puis on alerte par écrit avant d'agir. On cesse ensuite de traiter le dossier, et on garde le silence sur son contenu.",
     "bouton": "Vérifier l'ordre"
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "« Juste pour savoir »",
     "competences": [
      "C14"
     ],
     "items": [
      "C4"
     ],
     "categories": [
      {
       "id": "refuse",
       "libelle": "Il lui dit qu'il ne peut rien dire de ce qui n'est pas public, et l'oriente vers ce qui est publié.",
       "court": "Il oriente vers ce qui est public."
      },
      {
       "id": "indice",
       "libelle": "Il lui donne un indice, sans citer de nom.",
       "court": "Il donne un indice."
      },
      {
       "id": "ami",
       "libelle": "Il lui donne l'information : c'est un ami, pas un concurrent.",
       "court": "Il lui donne l'information."
      },
      {
       "id": "promet",
       "libelle": "Il lui promet de glisser un mot en sa faveur.",
       "court": "Il promet un mot en sa faveur."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Je ne donne aucune information non publique, même à un ami.",
     "bilan_tout": "Vous savez refuser sans fermer la porte."
    }
   ],
   "fiches": [
    "FICHE-M5-E2"
   ],
   "suite": "M5-P3-FIN"
  },
  "M5-P3-FIN": {
   "id": "M5-P3-FIN",
   "type": "fin-section",
   "etape": "Épisode 3",
   "surtitre": "Bilan de l'épisode",
   "titre": "Mercredi, c'est fait",
   "acquis": [
    {
     "titre": "Signaler un lien, ne pas traiter",
     "texte": "Le lieu du cousin est confié à Malia, avec l'accord de Samuel."
    },
    {
     "titre": "Rien dire du dossier",
     "texte": "Noa est resté aimable avec son cousin, sans lui donner la moindre information."
    },
    {
     "titre": "Ne pas trancher seul sur un cadeau",
     "texte": "Le panier est rendu avec un mot de remerciement, après avis de Samuel et du service RH."
    },
    {
     "titre": "Refuser sans fermer la porte",
     "texte": "Un ami curieux est orienté vers ce qui est public."
    }
   ],
   "dossier": "Les lieux proposés sont étudiés sans lien personnel avec le dossier. Passerelles tranchera.",
   "suite": "MENU"
  },
  "M5-P4": {
   "id": "M5-P4",
   "type": "page",
   "etape": "Épisode 4",
   "titre": "La première permanence",
   "chapeau": "Jeudi, 14 h. Première permanence de Passerelles dans la salle communale. Noa observe, avec Teiva et Élise. Joël compte. Vous distinguez ce qu'on a fait, ce qu'on a obtenu et ce qui a servi, puis Noa prépare une amélioration simple.",
   "competences": [
    "C15",
    "C16",
    "C20"
   ],
   "competences_lib": [
    {
     "code": "C15",
     "libelle": "Je contribue à la qualité du service rendu."
    },
    {
     "code": "C16",
     "libelle": "J'assure une relation de service respectueuse de l'usager."
    },
    {
     "code": "C20",
     "libelle": "Je contribue aux résultats et à l'amélioration continue."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application"
   ],
   "bouton_fin": "Terminer l'épisode",
   "items": [
    {
     "id": "D1",
     "libelle": "Onze personnes ont été reçues.",
     "court": "11 personnes reçues",
     "attendu": "activite",
     "feedback": "Compter les personnes reçues, c'est mesurer l'activité : ce qu'on a fait."
    },
    {
     "id": "D2",
     "libelle": "Quatre démarches ont abouti.",
     "court": "4 démarches abouties",
     "attendu": "resultat",
     "feedback": "Une démarche aboutie est un résultat : ce qu'on a obtenu."
    },
    {
     "id": "D3",
     "libelle": "Chaque habitant repart en sachant ce qu'il doit faire ensuite.",
     "court": "Savoir quoi faire ensuite",
     "attendu": "utilite",
     "feedback": "C'est ce qui sert à l'habitant : l'utilité. Une démarche expliquée n'est pas toujours une démarche comprise."
    },
    {
     "id": "D4",
     "libelle": "Teiva a expliqué sept démarches en ligne.",
     "court": "7 démarches expliquées",
     "attendu": "activite",
     "feedback": "Ce que Teiva a fait : l'activité, pas ce que les habitants ont obtenu."
    },
    {
     "id": "D5",
     "libelle": "Deux habitants ont obtenu l'attestation qu'ils étaient venus chercher.",
     "court": "2 attestations obtenues",
     "attendu": "resultat",
     "feedback": "Une attestation obtenue est un résultat : ce qui a été obtenu, pas ce qui a été fait."
    },
    {
     "id": "D6",
     "libelle": "Parmi ces phrases, laquelle est un constat factuel ?",
     "court": "Le constat",
     "attendu": "fait",
     "feedback": "Un constat factuel se vérifie : des chiffres, une observation précise. Un jugement sur une personne ou un « tout va bien » ne dit rien de ce qui peut s'améliorer."
    },
    {
     "id": "D7",
     "libelle": "À une autre permanence, vingt personnes sont reçues, mais plusieurs repartent avec une pièce manquante. Quel indicateur Noa choisit-il ?",
     "court": "Un autre lieu, un autre indicateur",
     "attendu": "piece",
     "feedback": "L'indicateur le plus utile suit ce qui sert à l'habitant : repartir avec toutes les pièces. Le nombre de personnes ou la durée mesurent l'activité."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Jeudi, 14 h : la permanence",
     "illustration": "ILL-S07",
     "texte": "Jeudi, 14 h. La salle communale est pleine de monde par moments. Teiva accompagne les démarches sur ordinateur, Élise accueille, Noa observe et note. Élise remarque aussi une marche à l'entrée, qui gêne une personne avec une canne.",
     "repliques": [
      {
       "personnage": "Teiva",
       "canal": "oral",
       "texte": "« Pour la dame de tout à l'heure, j'ai expliqué la démarche en ligne. C'est noté. »"
      },
      {
       "personnage": "Élise",
       "canal": "oral",
       "texte": "« Oui, mais elle n'a pas su quoi faire ensuite. Elle est repartie en disant qu'elle réfléchirait. »"
      }
     ]
    },
    {
     "type": "recit",
     "phase": "situation",
     "titre": "17 h : Joël compte",
     "texte": "17 h. Joël compte ses croisillons sur la feuille. Onze personnes reçues, quatre démarches abouties. Il demande à Noa : « C'est bien, non ? »",
     "repliques": [
      {
       "personnage": "Joël",
       "canal": "oral",
       "texte": "« Onze personnes, quatre démarches terminées. Pour une première, c'est bien, non ? »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "mesures",
     "phase": "situation",
     "titre": "Que mesure chaque chiffre ?",
     "competences": [
      "C15",
      "C20"
     ],
     "items": [
      "D1",
      "D2",
      "D3",
      "D4",
      "D5"
     ],
     "categories": [
      {
       "id": "activite",
       "libelle": "L'activité, ce qu'on a fait",
       "court": "Activité"
      },
      {
       "id": "resultat",
       "libelle": "Le résultat, ce qu'on a obtenu",
       "court": "Résultat"
      },
      {
       "id": "utilite",
       "libelle": "L'utilité, ce qui a servi à l'habitant",
       "court": "Utilité"
      }
     ],
     "consigne": "Pour chaque phrase, que mesure-t-elle ?",
     "retour": "differe",
     "bouton": "Voir mes résultats",
     "bilan": "Le repère vient juste dessous. Notez ce que vous auriez classé autrement.",
     "bilan_tout": "Vous distinguez ce qu'on fait, ce qu'on obtient et ce qui sert."
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Constat, amélioration, indicateur",
     "competences": [
      "C15",
      "C20"
     ],
     "texte": "Onze personnes reçues, c'est de l'activité. Reste à regarder ce que cela a donné pour les habitants, et comment on le saura la prochaine fois.",
     "regle": "Je distingue ce qu'on a fait, ce qu'on a obtenu et ce qui a servi. Je pars d'un constat factuel, je propose une amélioration simple, et je dis comment on saura qu'elle a marché.",
     "regle_clair": "**L'activité**, c'est ce qu'on a fait. **Le résultat**, c'est ce qu'on a obtenu. **L'utilité**, c'est ce que cela change pour l'usager. Un **indicateur** est un repère simple, souvent chiffré, qui permet de suivre un résultat.",
     "visuels": [
      {
       "remplace": "methode",
       "image": "INF-M5-04"
      }
     ],
     "methode_titre": "Cinq repères pour améliorer un service",
     "methode": [
      "Je rappelle l'objectif : à quoi sert ce que je fais, pour l'usager ?",
      "Je distingue l'activité, le résultat et l'utilité.",
      "Je pars d'un constat factuel, sans jugement sur une personne.",
      "Je propose une amélioration réaliste, à mon niveau.",
      "Je choisis un indicateur simple et je dis comment on le relève."
     ],
     "guichet": "Mon employeur peut avoir ses propres objectifs et indicateurs. Je demande à mon responsable ceux qui comptent pour mon service.",
     "plus_loin": {
      "titre": "Aller plus loin",
      "texte": "**D'où vient cette méthode.** Aucun texte calédonien commun n'impose une démarche qualité : constat, amélioration, indicateur, c'est une méthode. Un programme national, Services Publics+, propose des engagements d'accueil : c'est une bonne pratique, pas une règle ici. **L'accessibilité.** Un régime d'aides existe en Nouvelle-Calédonie pour les personnes en situation de handicap ou en perte d'autonomie (loi du pays de 2009). Je n'en détaille pas les règles : j'oriente vers le service compétent."
     },
     "valider": "Qualité de service et amélioration continue : aucune norme calédonienne commune ; méthode (rapport DRHFPNC 2021-2022, supports DINA 2022, DITP Services Publics+ : métropolitain, bonne pratique). Loi du pays 2009-2 : sert seulement à dire qu'un dispositif existe ; version à jour non trouvée, règles d'accessibilité de l'accueil à trouver (couverture M5). Chiffres de la permanence (11, 4, 7, 20) : fictifs, jamais présentés comme statistique réelle."
    },
    {
     "type": "tri",
     "id": "constat",
     "phase": "application",
     "titre": "Un constat factuel",
     "competences": [
      "C20"
     ],
     "items": [
      "D6"
     ],
     "categories": [
      {
       "id": "fait",
       "libelle": "« Sur les onze personnes reçues, quatre démarches ont abouti. Une habitante est repartie sans savoir quoi faire ensuite. »",
       "court": "Un constat chiffré et précis"
      },
      {
       "id": "jugement",
       "libelle": "« L'accueil de Teiva n'est pas assez clair. »",
       "court": "Un jugement sur Teiva"
      },
      {
       "id": "global",
       "libelle": "« La permanence ne sert à rien. »",
       "court": "Un jugement global"
      },
      {
       "id": "flatte",
       "libelle": "« Tout s'est très bien passé. »",
       "court": "Un « tout va bien »"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : un constat se vérifie.",
     "bilan_tout": "Joël écoute le constat, un peu surpris, et demande ce que Noa propose."
    },
    {
     "type": "message",
     "id": "proposition",
     "phase": "application",
     "titre": "Le message de Noa à Joël",
     "competences": [
      "C20",
      "C15"
     ],
     "texte": "Noa propose une amélioration simple à Joël. Composez le message : choisissez une phrase pour chaque partie.",
     "brief": "Joël porte le projet : c'est lui qui décide. Noa le vouvoie.",
     "destinataire": "Joël",
     "objet": "Première permanence : une amélioration à essayer jeudi prochain",
     "salutation": "Bonjour Joël,",
     "signature": "Cordialement,\nNoa",
     "synthese": "Un constat, une amélioration simple, un indicateur pour savoir si elle a marché.",
     "bouton": "Vérifier mon message",
     "parties": [
      {
       "id": "constat",
       "libelle": "Ce que j'ai constaté",
       "options": [
        {
         "id": "A",
         "texte": "Onze personnes ont été reçues, quatre démarches ont abouti, et une habitante est repartie sans savoir quoi faire ensuite.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "La permanence s'est bien passée, mais Teiva devrait mieux expliquer.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Il y a eu du monde, c'est un bon début.",
         "verdict": "risque"
        }
       ],
       "feedback": "Des chiffres, une observation précise, aucun jugement sur une personne."
      },
      {
       "id": "amelioration",
       "libelle": "Ce que je propose",
       "options": [
        {
         "id": "A",
         "texte": "Remettre à chaque habitant, à la fin, une petite fiche « Ma prochaine étape » avec le nom de la démarche et ce qui reste à faire.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Refaire entièrement l'organisation de la permanence avant la prochaine.",
         "verdict": "risque"
        },
        {
         "id": "C",
         "texte": "Attendre de voir comment les choses se passent la prochaine fois.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Une amélioration simple, à la portée de l'équipe, qui répond au constat."
      },
      {
       "id": "indicateur",
       "libelle": "Comment on saura que cela marche",
       "options": [
        {
         "id": "A",
         "texte": "On notera, à la fin de chaque permanence, combien d'habitants sont repartis en sachant leur prochaine étape.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "On comptera le nombre de personnes reçues.",
         "verdict": "partiel"
        },
        {
         "id": "C",
         "texte": "On se fiera à l'impression de l'équipe.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Un indicateur simple, relevé de la même façon à chaque fois, qui suit l'utilité pour l'habitant."
      }
     ]
    },
    {
     "type": "tri",
     "id": "transfert",
     "phase": "application",
     "titre": "Une autre permanence",
     "competences": [
      "C20",
      "C15"
     ],
     "items": [
      "D7"
     ],
     "categories": [
      {
       "id": "piece",
       "libelle": "La part des habitants qui repartent avec toutes les pièces nécessaires.",
       "court": "La part qui repart avec toutes les pièces"
      },
      {
       "id": "nombre",
       "libelle": "Le nombre d'habitants reçus.",
       "court": "Le nombre d'habitants reçus"
      },
      {
       "id": "duree",
       "libelle": "La durée moyenne de chaque rendez-vous.",
       "court": "La durée moyenne"
      },
      {
       "id": "merci",
       "libelle": "Le nombre de remerciements entendus.",
       "court": "Le nombre de remerciements"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez l'indicateur de Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "L'indicateur suit ce qui sert à l'habitant.",
     "bilan_tout": "Vous savez choisir un indicateur pour une situation nouvelle."
    }
   ],
   "fiches": [
    "FICHE-M5-E3"
   ],
   "suite": "M5-P4-FIN"
  },
  "M5-P4-FIN": {
   "id": "M5-P4-FIN",
   "type": "fin-section",
   "etape": "Épisode 4",
   "surtitre": "Bilan de l'épisode",
   "titre": "Jeudi après-midi, c'est fait",
   "acquis": [
    {
     "titre": "Activité, résultat, utilité",
     "texte": "Onze reçus, quatre démarches abouties, et une habitante qui n'a pas su quoi faire ensuite."
    },
    {
     "titre": "Un constat factuel",
     "texte": "Des chiffres et une observation précise, sans jugement sur Teiva."
    },
    {
     "titre": "Une amélioration simple",
     "texte": "Une petite fiche « Ma prochaine étape » remise à chaque habitant."
    },
    {
     "titre": "Un indicateur pour savoir si cela marche",
     "texte": "Combien d'habitants repartent en sachant leur prochaine étape."
    }
   ],
   "dossier": "La première permanence est tenue. Noa a proposé une amélioration à Joël, qui décidera.",
   "suite": "MENU"
  },
  "M5-DEF": {
   "id": "M5-DEF",
   "type": "page",
   "etape": "Défi",
   "titre": "Une note plus positive",
   "chapeau": "Jeudi, 18 h. Avant le point avec les partenaires, Ariane demande à Noa une note sur la permanence. Peu de guidage : à vous de choisir ce que fait Noa.",
   "competences": [
    "C14",
    "C20",
    "C13"
   ],
   "phases": [
    "situation",
    "application"
   ],
   "bouton_fin": "Terminer le défi",
   "items": [
    {
     "id": "F1",
     "libelle": "Ariane demande : « Pour le point avec les partenaires, tu peux présenter les résultats de façon plus positive ? On pourrait ne pas parler des démarches qui n'ont pas abouti. » Que fait Noa d'abord ?",
     "court": "La demande d'Ariane",
     "attendu": "precise",
     "feedback": "La demande est ambiguë : « plus positif » peut vouloir dire mieux présenté, ou moins complet. Poser la question évite de supposer une mauvaise intention et de s'engager à tort."
    },
    {
     "id": "F2",
     "libelle": "Ariane précise qu'elle veut surtout ne pas décourager les partenaires. Quelle note Noa propose-t-il ?",
     "court": "La note de Noa",
     "attendu": "fidele",
     "feedback": "On peut valoriser sans cacher : dire ce qui a marché, ce qui n'a pas abouti, et ce qu'on fait. Arrondir ou omettre trompe les partenaires, qui décideront sur de fausses bases."
    },
    {
     "id": "F3",
     "libelle": "Ariane hésite, dit qu'elle y réfléchit et qu'elle décidera demain. Que fait Noa ?",
     "court": "Ariane hésite",
     "attendu": "laisse",
     "feedback": "La décision revient à Ariane. Noa s'assure qu'elle a tous les éléments, puis garde une trace de ce qu'il a proposé. Retirer les chiffres ou décider à sa place ne respecte pas son rôle."
    }
   ],
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "18 h, le bureau d'Ariane",
     "illustration": "ILL-S08",
     "texte": "Jeudi, 18 h. Ariane a lu les notes de Noa, avec les onze personnes reçues, les quatre démarches abouties et celles qui n'ont pas abouti. Elle passe la tête à la porte du bureau de Noa. Elle est préoccupée : demain, Passerelles, la commune et la province se retrouvent.",
     "repliques": [
      {
       "personnage": "Ariane",
       "canal": "oral",
       "texte": "« Pour le point de demain, tu peux présenter les résultats de façon plus positive ? On pourrait ne pas parler des démarches qui n'ont pas abouti. »"
      }
     ]
    },
    {
     "type": "tri",
     "id": "demande",
     "phase": "situation",
     "titre": "La demande d'Ariane",
     "competences": [
      "C14"
     ],
     "items": [
      "F1"
     ],
     "categories": [
      {
       "id": "precise",
       "libelle": "Il lui demande ce qu'elle entend par « plus positive », et lui montre ce que disent les chiffres.",
       "court": "Il demande ce qu'elle entend par là."
      },
      {
       "id": "retire",
       "libelle": "Il retire les démarches non abouties sans discuter : c'est la directrice.",
       "court": "Il retire les démarches sans discuter."
      },
      {
       "id": "refuse",
       "libelle": "Il refuse en disant que ce serait mentir.",
       "court": "Il refuse en parlant de mensonge."
      },
      {
       "id": "tait",
       "libelle": "Il ne dit rien et laisse les chiffres de côté.",
       "court": "Il ne dit rien."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on précise avant de répondre.",
     "bilan_tout": "Ariane répond qu'elle ne veut pas cacher, seulement ne pas décourager.",
     "valider": "Défi : Ariane n'est pas mise en faute, sa demande est ambiguë. Fondement juridique de la sincérité de l'information et limites de l'obéissance hiérarchique (délibération 81, art. 22 : « ordre manifestement illégal ») : à faire valider par un juriste (fiches outils M5, « reste à obtenir »). Pas de référent déontologue affirmé."
    },
    {
     "type": "tri",
     "id": "note",
     "phase": "application",
     "titre": "La note",
     "competences": [
      "C20",
      "C13"
     ],
     "items": [
      "F2"
     ],
     "categories": [
      {
       "id": "fidele",
       "libelle": "Une note fidèle et valorisante : onze reçus, quatre démarches abouties, ce qui a freiné, et la fiche « Ma prochaine étape » déjà proposée.",
       "court": "Une note fidèle et valorisante"
      },
      {
       "id": "arrondit",
       "libelle": "Une note qui arrondit : « une bonne moitié des démarches ont abouti ».",
       "court": "Une note qui arrondit"
      },
      {
       "id": "omet",
       "libelle": "Une note qui ne cite que les quatre démarches abouties.",
       "court": "Une note qui n'en cite que quatre"
      },
      {
       "id": "sec",
       "libelle": "Une note avec des chiffres bruts et aucun commentaire.",
       "court": "Une note sans commentaire"
      }
     ],
     "qcu": true,
     "consigne": "Choisissez la note de Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : valoriser sans cacher.",
     "bilan_tout": "Ariane relit la note et dit qu'elle comprend mieux ce qu'on peut défendre devant les partenaires."
    },
    {
     "type": "tri",
     "id": "decision",
     "phase": "application",
     "titre": "Ariane hésite",
     "competences": [
      "C14",
      "C13"
     ],
     "items": [
      "F3"
     ],
     "categories": [
      {
       "id": "laisse",
       "libelle": "Il explique le risque (des partenaires qui découvrent l'écart plus tard), laisse Ariane décider, et garde une trace de ce qu'il a proposé.",
       "court": "Il explique, laisse décider, garde une trace."
      },
      {
       "id": "decide",
       "libelle": "Il décide à sa place et envoie sa version aux partenaires.",
       "court": "Il décide à sa place."
      },
      {
       "id": "efface",
       "libelle": "Il retire les démarches non abouties pour avoir la paix.",
       "court": "Il retire les démarches."
      },
      {
       "id": "contourne",
       "libelle": "Il envoie sa note aux partenaires sans la prévenir.",
       "court": "Il envoie sans la prévenir."
      }
     ],
     "qcu": true,
     "consigne": "Choisissez ce que fait Noa.",
     "retour": "immediat",
     "bouton": "Vérifier",
     "bilan": "Relisez l'explication : on éclaire, on laisse décider, on garde une trace.",
     "bilan_tout": "Ariane décidera demain, avec la note de Noa sous les yeux."
    },
    {
     "type": "message",
     "id": "relevetrace",
     "phase": "application",
     "titre": "La trace écrite de Noa",
     "competences": [
      "C14"
     ],
     "texte": "Avant de partir, Noa envoie à Ariane un court message écrit, pour garder la trace de ce qu'il a proposé. Composez-le.",
     "brief": "Le message tient en trois lignes. Noa vouvoie Ariane.",
     "destinataire": "Ariane",
     "objet": "Point de demain : ma proposition de note",
     "salutation": "Bonjour Ariane,",
     "signature": "Cordialement,\nNoa",
     "synthese": "Ce que je propose, pourquoi, et que la décision vous revient.",
     "bouton": "Vérifier mon message",
     "parties": [
      {
       "id": "proposition",
       "libelle": "Ce que je propose",
       "options": [
        {
         "id": "A",
         "texte": "Je vous propose une note qui cite les onze personnes reçues, les quatre démarches abouties, ce qui a freiné, et l'amélioration déjà prévue.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Je vous ai préparé une note, vous verrez bien.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "J'ai retiré ce qui n'allait pas pour vous faciliter la tâche.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Dire précisément ce que contient la note, sans l'adoucir."
      },
      {
       "id": "raison",
       "libelle": "Pourquoi",
       "options": [
        {
         "id": "A",
         "texte": "Les partenaires verront les chiffres tôt ou tard : mieux vaut qu'ils les connaissent avec ce que nous faisons pour les améliorer.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Ce serait mentir de faire autrement.",
         "verdict": "risque"
        },
        {
         "id": "C",
         "texte": "Je préfère ne pas prendre de risque.",
         "verdict": "partiel"
        }
       ],
       "feedback": "Une raison factuelle, qui ne met personne en faute."
      },
      {
       "id": "decision",
       "libelle": "La suite",
       "options": [
        {
         "id": "A",
         "texte": "La décision vous revient. Je reste disponible demain matin avant le point.",
         "verdict": "adapte"
        },
        {
         "id": "B",
         "texte": "Je compte sur vous pour suivre ma proposition.",
         "verdict": "inadapte"
        },
        {
         "id": "C",
         "texte": "Je ferai comme j'ai décidé.",
         "verdict": "inadapte"
        }
       ],
       "feedback": "Noa éclaire, Ariane décide, et la trace est écrite."
      }
     ]
    }
   ],
   "fiches": [
    "FICHE-M5-CONN2"
   ],
   "suite": "M5-DEF-FIN"
  },
  "M5-DEF-FIN": {
   "id": "M5-DEF-FIN",
   "type": "fin-section",
   "etape": "Défi",
   "surtitre": "Bilan du défi",
   "titre": "La note est remise",
   "acquis": [
    {
     "titre": "Demander ce qu'on attend, avant de répondre",
     "texte": "Ariane voulait ne pas décourager, pas cacher."
    },
    {
     "titre": "Valoriser sans cacher",
     "texte": "La note dit ce qui a marché, ce qui n'a pas abouti, et ce qu'on propose."
    },
    {
     "titre": "Éclairer, puis laisser décider",
     "texte": "Noa a expliqué le risque ; Ariane décidera demain."
    },
    {
     "titre": "Garder une trace",
     "texte": "Un court message écrit résume la proposition de Noa."
    }
   ],
   "dossier": "Le premier bilan est remis, fidèle aux faits. La décision de la présenter aux partenaires revient à Ariane.",
   "suite": "MENU"
  },
  "M5-EVA-INTRO": {
   "id": "M5-EVA-INTRO",
   "type": "narration",
   "etape": "Évaluation",
   "titre": "Vendredi : l'évaluation",
   "texte": "Six situations nouvelles, hors du dossier Passerelles. Le bilan s'affiche à la fin.\nModule validé avec 5 réponses justes sur 6 : vous obtenez le badge « J'incarne le service public ».\nSinon, une seconde tentative vous est proposée, sur d'autres situations. Vous pourrez reprendre l'évaluation quand vous voulez.\nRéussie ou non, vous pouvez passer au module suivant.\n",
   "suite": "M5-EVA-E1A"
  },
  "M5-EVA-E1A": {
   "id": "M5-EVA-E1A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Ana",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C13"
   ],
   "texte": "Une collègue demande à Ana de traiter sa demande de remboursement avant les autres, « parce qu'elle est pressée ». Que fait Ana ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle la traite dans l'ordre d'arrivée comme les autres, et explique à sa collègue comment signaler une urgence réelle au service.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Elle traite la demande de sa collègue en premier, par solidarité.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Elle la traite en dernier, pour éviter tout soupçon.",
     "verdict": "risque"
    }
   ],
   "suite": "M5-EVA-E1A2",
   "note_expert": "Savoir visé : C13-S3 et SF3 (égalité de traitement, impartialité). Item de principe ; aucun texte calédonien sur l'ordre de traitement. À valider : page DRHFPNC « Les droits et obligations » (impartialité)."
  },
  "M5-EVA-E1A2": {
   "id": "M5-EVA-E1A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Cédric",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C14"
   ],
   "texte": "Cédric doit comparer deux devis pour une petite prestation. Le gérant de l'une des deux entreprises est un ami proche.\nQue fait Cédric ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il compare les deux devis en étant plus exigeant avec celui de son ami.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Il ne dit rien : le meilleur devis est de toute façon celui de l'autre entreprise.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Il prévient son responsable par écrit de ce lien et demande à ne pas traiter le dossier.",
     "verdict": "adapte"
    }
   ],
   "suite": "M5-EVA-E2A",
   "note_expert": "Savoir visé : C14-S2, SF1, SF3, SF4 (lien d'intérêt : signaler, demander conseil, se déporter). Repère, pas règle : aucune définition calédonienne du conflit d'intérêts (couverture M5, question 2)."
  },
  "M5-EVA-E2A": {
   "id": "M5-EVA-E2A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Cédric",
   "preuve": "E2",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C16"
   ],
   "texte": "Un habitant parle peu le français et ne comprend pas la liste de pièces que Cédric lui présente. Il hoche la tête sans répondre.\nQue fait Cédric ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il reformule avec des mots simples, vérifie qu'il a compris et cherche un relais (collègue, proche).",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Il lui remet la liste et lui dit de revenir avec quelqu'un.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Il répète la liste plus fort et plus lentement.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M5-EVA-E2A2",
   "note_expert": "Savoir visé : C16-SF2, SF3 (reformuler, adapter son langage). Relais linguistique : pratique à confirmer (couverture M5, question 4)."
  },
  "M5-EVA-E2A2": {
   "id": "M5-EVA-E2A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E2",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C16"
   ],
   "texte": "Un usager arrive à 11 h 50 à l'accueil pour une démarche qui relève d'un service fermé à midi.\nQue fait Malia ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle essaie de traiter la démarche elle-même, pour lui éviter de revenir.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Elle lui dit que ce n'est pas son service et qu'il doit se débrouiller.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Elle lui explique à quel service s'adresser, donne ses horaires et un contact, et vérifie qu'il a compris.",
     "verdict": "adapte"
    }
   ],
   "suite": "M5-EVA-E3A",
   "note_expert": "Savoir visé : C16-S4, SF4 (limites de son rôle, orienter vers le bon interlocuteur). Item de pratique."
  },
  "M5-EVA-E3A": {
   "id": "M5-EVA-E3A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Ana",
   "preuve": "E3",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C15"
   ],
   "texte": "Un service d'accueil téléphonique affiche : « 120 appels décrochés cette semaine ». Ana se demande ce que ce chiffre dit du service.\nQue mesure ce chiffre ?",
   "options": [
    {
     "id": "A",
     "libelle": "La qualité du service rendu aux usagers.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Le résultat : ce que les appelants ont obtenu.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "L'activité : ce qu'on a fait. Il ne dit pas si les appelants ont eu une réponse utile.",
     "verdict": "adapte"
    }
   ],
   "suite": "M5-EVA-E3A2",
   "note_expert": "Savoir visé : C15-S5, C20-S2 (activité, résultat, utilité). Item de méthode ; aucune norme calédonienne."
  },
  "M5-EVA-E3A2": {
   "id": "M5-EVA-E3A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Samuel",
   "preuve": "E3",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C20"
   ],
   "texte": "Samuel constate que des courriers adressés aux usagers reviennent souvent, faute d'une adresse correctement saisie. Il veut proposer une amélioration.\nQue fait-il ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il propose une vérification de l'adresse à la saisie, et suit le nombre de courriers retournés chaque mois.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Il demande à chacun de faire plus attention, sans changer la façon de saisir.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Il propose de remplacer tout le logiciel de saisie.",
     "verdict": "risque"
    }
   ],
   "suite": "M5-EVA-RES",
   "note_expert": "Savoir visé : C20-SF4, SF5 (constat, amélioration réaliste, indicateur simple). Item de méthode."
  },
  "M5-EVA-RES": {
   "id": "M5-EVA-RES",
   "type": "eval-resultat",
   "etape": "Évaluation",
   "regle": "5 réponses justes sur 6",
   "preuves": {
    "E1": "Principes et discernement",
    "E2": "Servir l'usager",
    "E3": "Mesurer et améliorer"
   },
   "texte_reussi": "Module validé : vous obtenez le badge « J'incarne le service public ». Vous reliez une situation à un principe du service public, vous repérez un lien d'intérêt et demandez conseil, vous servez chacun avec les mêmes égards et vous proposez une amélioration avec un indicateur simple.\n",
   "texte_echec": "Certains repères sont encore à consolider. Une nouvelle tentative vous est proposée, sur six autres situations.\n",
   "texte_echec_final": "Certains repères restent à consolider. Nous vous conseillons de relire les fiches indiquées ci-dessus, dans votre carnet, et de revoir les pages du module qu'elles accompagnent. Vous reprendrez l'évaluation quand vous le voudrez, depuis le sommaire : les deux séries de situations alternent d'une tentative à l'autre.\nVous pouvez aussi continuer votre parcours dès maintenant : le module suivant vous est ouvert.\n",
   "consolider": {
    "E1": {
     "texte": "Je relie une situation à un principe : neutralité, réserve, égalité. Si j'ai un lien avec un dossier, je le signale et je ne le traite pas. Avant d'accepter un cadeau, je demande conseil. À revoir : les épisodes 2 et 3 (mardi, mercredi) et le défi (jeudi).",
     "fiche": "FICHE-M5-E2"
    },
    "E2": {
     "texte": "J'accueille chacun avec les mêmes égards. Je reformule pour vérifier qu'on m'a compris. Ce qui dépasse mon rôle, je le transmets. À revoir : l'épisode 1 (lundi).",
     "fiche": "FICHE-M5-E1"
    },
    "E3": {
     "texte": "Je distingue ce qu'on a fait, ce qu'on a obtenu et ce qui sert à l'usager. Je pars d'un constat factuel, je propose une amélioration simple, et je dis comment on saura qu'elle a marché. À revoir : l'épisode 4 (jeudi).",
     "fiche": "FICHE-M5-E3"
    }
   },
   "rappel": [
    {
     "titre": "Un principe pour chaque situation",
     "texte": "Neutralité en service, réserve en dehors, égalité pour tous."
    },
    {
     "titre": "Un lien avec un dossier",
     "texte": "Je le signale, je ne le traite pas, je ne donne aucune information."
    },
    {
     "titre": "Les mêmes égards pour chacun",
     "texte": "J'adapte mon explication, pas les droits. Ce qui dépasse mon rôle, je le transmets."
    },
    {
     "titre": "Activité, résultat, utilité",
     "texte": "Ce qu'on a fait, ce qu'on a obtenu, ce qui sert à l'usager."
    },
    {
     "titre": "Constat, amélioration, indicateur",
     "texte": "Je pars des faits, je propose simple, je dis comment on saura."
    }
   ],
   "retentative": "M5-EVA-E1B",
   "suite": "M5-EVA-FIN"
  },
  "M5-EVA-E1B": {
   "id": "M5-EVA-E1B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C13"
   ],
   "texte": "Malia reçoit d'un collègue un appel à signer une pétition pour une cause associative, avec la demande de le relayer dans le groupe professionnel.\nQue fait Malia ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle ne le relaie pas, et répond aimablement que la messagerie professionnelle n'est pas faite pour cela.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Elle le relaie en précisant que c'est « à titre personnel ».",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Elle le relaie : la cause est juste.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M5-EVA-E1B2",
   "note_expert": "Savoir visé : C13-S3, S4 (neutralité, réserve). Item de principe ; circulaire DRHFPNC du 18-06-2024 (II) : à valider."
  },
  "M5-EVA-E1B2": {
   "id": "M5-EVA-E1B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Ana",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C14"
   ],
   "texte": "Pendant qu'Ana instruit la demande d'un entrepreneur, il lui fait livrer un coffret de produits « pour la remercier d'avance ».\nQue fait Ana ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle l'accepte discrètement : refuser serait impoli.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle le place à l'accueil, pour que toute l'équipe en profite.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Elle ne l'ouvre pas, prévient son responsable et demande comment le rendre avec tact.",
     "verdict": "adapte"
    }
   ],
   "suite": "M5-EVA-E2B",
   "note_expert": "Savoir visé : C14-S1, SF3, SF4 (cadeau pendant un dossier : demander conseil). Bonne pratique (guide AFA 2022), pas une règle. Coutume : relecture par le valideur coutumier (D45)."
  },
  "M5-EVA-E2B": {
   "id": "M5-EVA-E2B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E2",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C16"
   ],
   "texte": "Au téléphone, un usager âgé parle vite et mélange deux démarches différentes dans la même question.\nQue fait Malia ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle reformule les deux démarches une par une, vérifie qu'elle a compris et répond à chacune.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Elle répond à la première démarche et espère qu'il rappellera pour l'autre.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Elle lui dit de rappeler quand il saura ce qu'il veut.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M5-EVA-E2B2",
   "note_expert": "Savoir visé : C16-SF1, SF2 (accueillir, écouter, reformuler)."
  },
  "M5-EVA-E2B2": {
   "id": "M5-EVA-E2B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Cédric",
   "preuve": "E2",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C16"
   ],
   "texte": "Un usager élève la voix à l'accueil : il attend depuis longtemps, et personne ne lui a répondu. D'autres personnes attendent derrière lui.\nQue fait Cédric ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il lui demande de se calmer ou de revenir plus tard.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Il lui répond sur le même ton, pour garder la main.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Il reste calme, l'écoute, reformule ce qui pose problème et lui propose un échange au calme si besoin.",
     "verdict": "adapte"
    }
   ],
   "suite": "M5-EVA-E3B",
   "note_expert": "Savoir visé : C16-SF5, SE1 à SE4 (gérer une insatisfaction simple). Protection de l'agent agressé : délibération 81, art. 10 (hors périmètre de cet item)."
  },
  "M5-EVA-E3B": {
   "id": "M5-EVA-E3B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Cédric",
   "preuve": "E3",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C15"
   ],
   "texte": "Sur le site de son employeur, un formulaire annonce « réponse sous 5 jours », alors que le délai réel est d'une dizaine de jours. Des usagers appellent pour se plaindre.\nQue fait Cédric ?",
   "options": [
    {
     "id": "A",
     "libelle": "Il prévient son responsable, avec le constat précis (délai affiché, délai réel, nombre d'appels) pour faire corriger.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Il prévient oralement les usagers qui appellent, sans rien corriger.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Il ne dit rien : ce n'est pas son travail.",
     "verdict": "inadapte"
    }
   ],
   "suite": "M5-EVA-E3B2",
   "note_expert": "Savoir visé : C15-SF2, SF4, SF5 (identifier un dysfonctionnement, le signaler). Item de méthode."
  },
  "M5-EVA-E3B2": {
   "id": "M5-EVA-E3B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E3",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C20"
   ],
   "texte": "Après une journée portes ouvertes, Malia note : « 80 visiteurs, 12 questions sans réponse ». Son responsable demande un bilan.\nQue fait-elle ?",
   "options": [
    {
     "id": "A",
     "libelle": "Elle présente les 80 visiteurs comme la preuve que la journée a été réussie.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle liste les questions sans réponse, cherche une cause simple (document manquant) et propose une fiche à préparer pour la prochaine fois.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle garde le bilan pour elle : il ne regarde personne.",
     "verdict": "risque"
    }
   ],
   "suite": "M5-EVA-RES",
   "note_expert": "Savoir visé : C20-SF3, SF4, SF5, SF6 (cause simple, constat, amélioration, retour d'expérience). Item de méthode."
  },
  "M5-EVA-FIN": {
   "id": "M5-EVA-FIN",
   "type": "fin-section",
   "etape": "Évaluation",
   "titre": "Évaluation terminée",
   "texte": "Votre résultat est affiché sur le sommaire du module. Dernière étape : le bilan de la semaine de Noa, et le vôtre.\n",
   "suite": "MENU"
  },
  "M5-SOR-1": {
   "id": "M5-SOR-1",
   "type": "narration",
   "illustration": "ILL-S09",
   "etape": "Bilan",
   "titre": "Ce que Noa a appris cette semaine",
   "texte": "Vendredi, fin de matinée. Joël passe au bureau : la deuxième permanence est confirmée, avec la fiche « Ma prochaine étape » et un relevé des habitants qui repartent en sachant quoi faire. Ariane a présenté la note aux partenaires. Voici ce que Noa sait faire maintenant.",
   "points": [
    {
     "titre": "J'accueille chacun avec les mêmes égards",
     "texte": "J'adapte ma façon d'expliquer, pas les droits. Ce qui dépasse mon rôle, je le transmets.",
     "competence": "C16 — Relation avec l'usager"
    },
    {
     "titre": "Je garde ma réserve",
     "texte": "En service, je suis neutre. Dehors, je m'exprime avec mesure. Ce que je sais par mes fonctions, je le garde.",
     "competence": "C13 — Valeurs et principes"
    },
    {
     "titre": "Je signale un lien, je demande conseil",
     "texte": "Je ne traite pas un dossier qui me concerne. Avant un cadeau, je demande à mon responsable.",
     "competence": "C14 — Discernement"
    },
    {
     "titre": "Je pars des faits pour améliorer",
     "texte": "Activité, résultat, utilité. Un constat, une amélioration simple, un indicateur.",
     "competence": "C15 et C20 — Qualité et amélioration continue"
    }
   ],
   "competences": [
    "C13",
    "C14",
    "C15",
    "C16",
    "C20"
   ],
   "suite": "M5-SOR-REV"
  },
  "M5-SOR-REV": {
   "id": "M5-SOR-REV",
   "type": "cartes",
   "etape": "Bilan",
   "titre": "Pourquoi revenir sur sa semaine ?",
   "texte": "Malia passe au bureau : « Tu te souviens de mes trois questions ? Cinq minutes, pas plus. »",
   "consigne": "Cliquez sur chaque carte.",
   "competences": [
    "C21"
   ],
   "cartes": [
    {
     "icone": "i-check-cercle",
     "recto": "Qu'est-ce qui a marché ?",
     "verso": "Je le refais exprès. Noa : « Dire à mon cousin que je ne traite plus son dossier, avec le sourire. »"
    },
    {
     "icone": "i-recommencer",
     "recto": "Qu'est-ce que je ferais autrement ?",
     "verso": "Une seule chose, concrète. Noa : « Je vérifierai la source officielle avant de répondre sur une pièce. »"
    },
    {
     "icone": "i-dialogue",
     "recto": "À qui je demande un retour ?",
     "verso": "Un avis extérieur voit ce que je ne vois pas. Noa : « Je demande à Élise ce qu'elle a pensé de ma façon d'accueillir. »"
    }
   ],
   "encadre": "« Ce n'est pas un examen. C'est ce qui fait qu'on progresse plus vite. » — Malia",
   "suite": "M5-SOR-LIBRE"
  },
  "M5-SOR-LIBRE": {
   "id": "M5-SOR-LIBRE",
   "type": "reponse-libre",
   "etape": "Bilan",
   "titre": "La semaine prochaine",
   "question": "Une chose que je ferai autrement la semaine prochaine, quand j'accueillerai ou servirai quelqu'un :",
   "apres": "Notez-la quelque part où vous la reverrez lundi : c'est ainsi qu'elle devient une habitude.",
   "suite": "M5-SOR-RES"
  },
  "M5-SOR-RES": {
   "id": "M5-SOR-RES",
   "type": "ressources",
   "etape": "Bilan",
   "titre": "Mes ressources",
   "texte": "Les fiches du module sont rangées dans votre carnet : trois fiches outils et deux fiches de connaissances. Ouvrez-les pour les imprimer ou les enregistrer en PDF.",
   "fiches": [
    "FICHE-M5-E1",
    "FICHE-M5-E2",
    "FICHE-M5-E3",
    "FICHE-M5-CONN1",
    "FICHE-M5-CONN2",
    "FA-M5-01",
    "FA-M5-02"
   ],
   "suite": "M5-FIN"
  },
  "M5-FIN": {
   "id": "M5-FIN",
   "type": "fin",
   "etape": "Bilan",
   "titre": "Bravo, la semaine de Noa est terminée",
   "texte": "Vous avez accompagné Noa pendant la première permanence de Passerelles. Il sait désormais incarner le service public : accueillir chacun avec les mêmes égards, garder sa réserve, signaler un lien d'intérêt, et regarder honnêtement ce que le service a donné.\n",
   "points_titre": "Ce que vous avez appris",
   "points": [
    {
     "titre": "Accueillir et orienter",
     "texte": "Les mêmes égards pour tous, une explication adaptée, le bon service au bon moment."
    },
    {
     "titre": "Garder sa réserve",
     "texte": "Neutre en service, mesuré dehors, discret sur ce qu'on sait."
    },
    {
     "titre": "Signaler un lien, demander conseil",
     "texte": "Ne pas traiter un dossier qui nous concerne ; ne pas trancher seul sur un cadeau."
    },
    {
     "titre": "Mesurer et améliorer",
     "texte": "Constat factuel, amélioration simple, indicateur qui suit l'utilité."
    }
   ],
   "dossier": "La première permanence est tenue, et le premier bilan est remis, fidèle aux faits. Prochaine étape du dossier : le retour d'expérience, dans le bilan de parcours.",
   "prochain": {
    "titre": "Le bilan de parcours",
    "texte": "Trois mois plus tard, Noa présente à Ariane ce qu'il retient du dossier. C'est aussi votre tour de faire le point sur tout le parcours."
   },
   "suite": "MENU"
  }
 },
 "fiches": {
  "FICHE-M5-E1": {
   "id": "FICHE-M5-E1",
   "type": "fiche",
   "code": "M5-E1",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Accueillir et orienter un usager",
   "quand": "Au guichet, au téléphone ou en permanence, quand quelqu'un arrive avec une demande.",
   "etapes": [
    {
     "titre": "1. Je salue et j'écoute",
     "texte": "Je me présente (nom, service). Je laisse la personne expliquer sa demande, sans l'interrompre."
    },
    {
     "titre": "2. Je traite chacun de la même façon",
     "texte": "Pas de passe-droit pour une connaissance. J'adapte mon explication, pas ce à quoi la personne a droit."
    },
    {
     "titre": "3. Je reformule et je vérifie",
     "texte": "Je redis ce que j'ai compris. Si besoin, je cherche un relais (collègue, proche) et j'évite le jargon."
    },
    {
     "titre": "4. Je vérifie la source avant d'exiger",
     "texte": "Avant de demander une pièce, je regarde la source officielle ou le site de mon employeur."
    },
    {
     "titre": "5. Je réponds ou je transmets",
     "texte": "Ce qui relève de mon rôle, je le traite. Le reste, je le transmets au bon service, sans le traiter à sa place."
    }
   ],
   "types": [
    {
     "titre": "Un usager qui s'énerve",
     "texte": "Je reste calme, j'écoute, j'explique. Je vérifie avant de répondre."
    },
    {
     "titre": "Une demande hors de mon rôle",
     "texte": "Je note, j'oriente, je transmets avec les éléments utiles."
    },
    {
     "titre": "Une information périmée",
     "texte": "Je la signale à qui s'en occupe, en disant ce qui est faux."
    }
   ],
   "exemple": "« Bonjour, je suis Noa, de l'ÉLAN. Si je comprends bien, vous venez pour la pièce manquante de votre dossier. Je vérifie la liste officielle et je reviens vers vous dans une minute. »",
   "a_retenir": "Les mêmes égards pour tous. J'adapte l'explication, jamais les droits. Ce qui dépasse mon rôle, je le transmets.",
   "reperes": [
    "La charte ou les règles d'accueil de mon employeur",
    "Mon responsable en cas de doute"
   ],
   "competences": [
    "C16",
    "C13"
   ],
   "version": "0.1",
   "valider": "Accueil : bonnes pratiques (DITP Services Publics+ : métropolitain, jamais une règle) ; impartialité (page DRHFPNC) ; secret (délib. 81 art. 20). Relais linguistique : à valider par un référent coutumier. Corpus M5, questions 3 et 4.",
   "pdf": "assets/fiches/FO-M5-E1.pdf"
  },
  "FICHE-M5-E2": {
   "id": "FICHE-M5-E2",
   "type": "fiche",
   "code": "M5-E2",
   "modele": "checklist",
   "categorie": "outil",
   "titre": "Avant de décider, mes questions de discernement",
   "quand": "Quand un lien personnel, un cadeau ou une demande ambiguë me met dans une situation inconfortable.",
   "questions": [
    {
     "q": "Qui est concerné, et ai-je un lien avec lui ?",
     "aide": "Famille, proche, intérêt personnel.",
     "verifier": [
      "Je me demande si ce lien pourrait influencer, ou sembler influencer, mon travail."
     ],
     "si_non": "Si je ne sais pas, je le dis à mon responsable ; c'est à lui de juger."
    },
    {
     "q": "Quel est mon rôle dans ce dossier ?",
     "aide": "J'instruis, je donne un avis, je décide.",
     "verifier": [
      "Je sais ce que je peux faire seul et ce que je dois laisser à un autre."
     ],
     "si_non": "Je demande à mon responsable de clarifier mon rôle."
    },
    {
     "q": "Quand ce cadeau ou cette demande arrive-t-il, et quelle est sa valeur ?",
     "aide": "Pendant un dossier en cours, il pèse plus.",
     "verifier": [
      "Je ne touche à rien avant d'avoir demandé conseil."
     ],
     "si_non": "Je garde le message ou la preuve, et j'en parle à mon responsable."
    },
    {
     "q": "Est-ce que cela me rend redevable ?",
     "aide": "Un petit geste peut créer une dette.",
     "verifier": [
      "Je me demande si je me sentirais libre de décider autrement."
     ],
     "si_non": "Je refuse avec tact, ou je demande conseil sur la façon de le faire."
    },
    {
     "q": "Serais-je à l'aise d'en parler autour de moi ?",
     "aide": "Un bon test de transparence.",
     "verifier": [
      "Je pourrais l'expliquer à mon responsable et à mes collègues."
     ],
     "si_non": "Je m'arrête et j'en parle."
    },
    {
     "q": "À qui demander conseil ?",
     "aide": "Mon responsable, le service RH ou le service juridique.",
     "verifier": [
      "J'écris ma question et je garde la trace de la réponse."
     ],
     "si_non": "Je ne tranche pas seul."
    }
   ],
   "conclusion": {
    "titre": "Dans tous les cas : je ne donne aucune information non publique",
    "texte": "Même à un proche ou un ami, je ne donne aucune information sur un dossier. J'oriente vers ce qui est public."
   },
   "a_retenir": "Un lien avec un dossier : je le signale et je ne le traite pas. Un cadeau pendant un dossier : je demande conseil.",
   "reperes": [
    "Mon responsable",
    "Le service RH ou le service juridique"
   ],
   "competences": [
    "C14",
    "C13"
   ],
   "version": "0.1",
   "valider": "Grille inspirée du guide AFA 2022 (repère métropolitain, pas une règle) ; délibération 81 art. 19, 19-1, 20. Conflit d'intérêts : pas de définition calédonienne ; aucun référent déontologue affirmé. Corpus M5, questions 1 et 2.",
   "pdf": "assets/fiches/FO-M5-E2.pdf"
  },
  "FICHE-M5-E3": {
   "id": "FICHE-M5-E3",
   "type": "fiche",
   "code": "M5-E3",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Améliorer un service, constat, idée, indicateur",
   "quand": "Après une permanence, une journée ou une période de travail, pour proposer une amélioration.",
   "etapes": [
    {
     "titre": "1. Je rappelle l'objectif",
     "texte": "À quoi sert ce que je fais, pour l'usager ?"
    },
    {
     "titre": "2. Je distingue activité, résultat, utilité",
     "texte": "Ce qu'on a fait, ce qu'on a obtenu, ce qui a servi à l'usager."
    },
    {
     "titre": "3. Je fais un constat factuel",
     "texte": "Des chiffres et une observation précise, sans jugement sur une personne."
    },
    {
     "titre": "4. Je propose une amélioration simple",
     "texte": "Réaliste, à mon niveau, qui répond au constat."
    },
    {
     "titre": "5. Je choisis un indicateur",
     "texte": "Un repère simple, relevé de la même façon à chaque fois, qui suit l'utilité pour l'usager."
    }
   ],
   "types": [
    {
     "titre": "L'activité",
     "texte": "Ce qu'on a fait. « Onze personnes reçues. »"
    },
    {
     "titre": "Le résultat",
     "texte": "Ce qu'on a obtenu. « Quatre démarches abouties. »"
    },
    {
     "titre": "L'utilité",
     "texte": "Ce qui a servi. « Chaque habitant repart en sachant la suite. »"
    }
   ],
   "exemple": "« Onze personnes reçues, quatre démarches abouties, une habitante repartie sans savoir quoi faire ensuite. Je propose de remettre à chacun une fiche « Ma prochaine étape ». On saura que cela marche en comptant, à la fin de chaque permanence, combien repartent en sachant la suite. »",
   "a_retenir": "Je pars d'un constat factuel, je propose une amélioration simple et je dis comment on saura qu'elle a marché.",
   "reperes": [
    "Les objectifs et indicateurs de mon service",
    "Mon responsable"
   ],
   "competences": [
    "C15",
    "C20"
   ],
   "version": "0.1",
   "valider": "Qualité de service et amélioration continue : aucune norme calédonienne commune ; méthode (DRHFPNC rapport 2021-2022, DITP Services Publics+ : métropolitain, bonne pratique). Corpus M5, question 3.",
   "pdf": "assets/fiches/FO-M5-E3.pdf"
  },
  "FICHE-M5-CONN1": {
   "id": "FICHE-M5-CONN1",
   "type": "fiche",
   "code": "M5-CONN1",
   "modele": "aide-memoire",
   "categorie": "connaissance",
   "titre": "Les principes du service public en situations",
   "quand": "Quand vous vous demandez ce que le service public attend de vous dans une situation.",
   "etapes": [
    {
     "titre": "L'égalité",
     "texte": "Je traite chacun de la même façon. Égalité ne veut pas dire réponse identique : j'adapte mon explication."
    },
    {
     "titre": "La neutralité",
     "texte": "En service, je ne mêle pas mes opinions à mon travail."
    },
    {
     "titre": "La continuité",
     "texte": "Le service ne s'interrompt pas sans raison. Principe général, sans texte calédonien cité ici."
    },
    {
     "titre": "L'adaptabilité",
     "texte": "Le service évolue avec les besoins des usagers. Principe général, sans texte calédonien cité ici."
    }
   ],
   "types": [
    {
     "titre": "Au guichet",
     "texte": "Même temps d'écoute, même exigence, pas de passe-droit."
    },
    {
     "titre": "En ligne",
     "texte": "Pas de message militant sur la messagerie professionnelle."
    },
    {
     "titre": "Avec un proche",
     "texte": "Je signale mon lien et je ne traite pas le dossier."
    }
   ],
   "a_retenir": "Je rattache chaque geste à un principe : égalité, neutralité, continuité, adaptabilité.",
   "reperes": [
    "Les règles de mon employeur",
    "Mon responsable"
   ],
   "competences": [
    "C13"
   ],
   "version": "0.1",
   "valider": "Égalité, neutralité : page DRHFPNC « Les droits et obligations ». Continuité et adaptabilité : aucun texte calédonien, formulation simple à valider par un expert (corpus M5, question 3). Mise en forme A4 recto verso : D154."
  },
  "FICHE-M5-CONN2": {
   "id": "FICHE-M5-CONN2",
   "type": "fiche",
   "code": "M5-CONN2",
   "modele": "aide-memoire",
   "categorie": "connaissance",
   "titre": "Loyauté, réserve, discrétion",
   "quand": "Quand vous hésitez sur ce que vous pouvez dire, publier ou partager.",
   "etapes": [
    {
     "titre": "La loyauté",
     "texte": "Je suis responsable de ce qui m'est confié et je suis les instructions de ma hiérarchie. Être loyal, c'est aussi dire les faits tels qu'ils sont."
    },
    {
     "titre": "La réserve",
     "texte": "Mon opinion m'appartient, mais je m'exprime avec mesure, y compris en dehors du service et sur les réseaux sociaux."
    },
    {
     "titre": "La discrétion",
     "texte": "Ce que je sais par mes fonctions n'est pas à répéter, même à un proche."
    },
    {
     "titre": "La responsabilité",
     "texte": "Je réponds de mes actes. Si je ne sais pas, je demande conseil."
    }
   ],
   "types": [
    {
     "titre": "Un message militant",
     "texte": "Je ne le relaie pas par la messagerie professionnelle."
    },
    {
     "titre": "Une photo avec mon badge",
     "texte": "Je demande le retrait et j'en informe mon responsable."
    },
    {
     "titre": "Une demande de « présenter mieux »",
     "texte": "Je propose une formulation fidèle, j'explique le risque, je laisse mon responsable décider et je garde une trace."
    }
   ],
   "a_retenir": "En service, neutre. En dehors, mesuré. Sur ce que je sais, discret. Sur les faits, sincère.",
   "reperes": [
    "Délibération n° 81 du 24 juillet 1990, art. 20 à 22",
    "Mon responsable ou le service RH"
   ],
   "competences": [
    "C13",
    "C14"
   ],
   "version": "0.1",
   "valider": "Délibération 81 art. 20 à 22 (couvert) ; circulaire DRHFPNC du 18-06-2024 à citer avec précaution ; fondement juridique de la sincérité de l'information à confirmer par un juriste (limites de l'obéissance, art. 22). Mise en forme A4 recto verso : D154."
  },
  "FA-M5-01": {
   "id": "FA-M5-01",
   "type": "fiche",
   "modele": "pdf",
   "categorie": "apport",
   "titre": "Les principes du service public en situations",
   "quand": "Égalité, neutralité, continuité et adaptabilité, vues en situations.",
   "pdf": "assets/fiches/FA-M5-01.pdf",
   "competences": [
    "C13",
    "C16"
   ],
   "version": "0.1"
  },
  "FA-M5-02": {
   "id": "FA-M5-02",
   "type": "fiche",
   "modele": "pdf",
   "categorie": "apport",
   "titre": "Loyauté, réserve, discrétion",
   "quand": "Ce que je peux dire, publier ou partager, en service et en dehors.",
   "pdf": "assets/fiches/FA-M5-02.pdf",
   "competences": [
    "C13",
    "C14"
   ],
   "version": "0.1"
  }
 },
 "illustrations": {
  "ILL-S01": {
   "scene": "Samuel annonce à Noa qu'il passera la matinée à l'accueil de la commune, lundi 8 h 10",
   "personnages": "Samuel, Noa, Malia",
   "alt": "Lundi matin au pôle études et projets. Samuel, debout près du bureau de Noa, lui parle ; Malia les regarde depuis son bureau."
  },
  "ILL-S02": {
   "scene": "L'accueil de la commune, 8 h 30",
   "personnages": "Élise, Noa, une dame âgée",
   "alt": "Au comptoir d'accueil de la commune, Élise écoute une dame âgée qui tient un papier plié ; Noa, un peu en retrait, observe, un carnet à la main ; une file se forme derrière."
  },
  "ILL-S03": {
   "scene": "Le jeune tendu au guichet, 10 h",
   "personnages": "Noa, un jeune",
   "alt": "Au comptoir, Noa face à un jeune homme qui gesticule, un dossier sous le bras ; derrière eux, une affiche d'horaires jaunie sur le mur."
  },
  "ILL-S04": {
   "scene": "Noa au bureau, mardi 9 h, téléphone en main",
   "personnages": "Noa",
   "alt": "Noa à son bureau regarde son téléphone, l'air interrogatif ; devant lui, un carnet de notes ouvert et un badge posé près du clavier."
  },
  "ILL-S05": {
   "scene": "Samuel confie les lieux à étudier, mercredi 9 h",
   "personnages": "Samuel, Noa",
   "alt": "Samuel remet à Noa une feuille de lieux proposés ; Noa lit le troisième nom, légèrement surpris."
  },
  "ILL-S06": {
   "scene": "Le panier arrive à l'accueil, mercredi 16 h 30",
   "personnages": "Cédric, Noa",
   "alt": "Cédric pose sur le comptoir un panier de produits du pays recouvert d'une serviette, avec un petit mot ; Noa le regarde, embarrassé."
  },
  "ILL-S07": {
   "scene": "La première permanence, salle communale, jeudi 14 h",
   "personnages": "Teiva, Élise, Joël, Noa, des habitants",
   "alt": "Dans la salle communale, Teiva accompagne un habitant sur un ordinateur, Élise accueille à une table, Joël fait des croix sur une feuille, Noa note ; une marche à l'entrée."
  },
  "ILL-S08": {
   "scene": "Ariane au bureau de Noa, jeudi 18 h",
   "personnages": "Ariane, Noa",
   "alt": "Ariane, debout à la porte du bureau de Noa, s'adresse à Noa qui lève les yeux de son écran ; ses notes de la permanence sont à côté du clavier."
  },
  "ILL-S09": {
   "scene": "Joël passe au bureau, vendredi",
   "personnages": "Joël, Noa",
   "alt": "Vendredi matin, Joël, debout près du bureau de Noa, lui montre un papier avec un sourire ; Noa lève les yeux de son écran."
  },
  "INF-M5-01": {
   "scene": "Cinq repères pour accueillir",
   "personnages": "—",
   "alt": "Cinq cartes. Je salue et j'écoute. Même traitement pour tous. Je reformule pour vérifier. Je vérifie la source avant d'exiger une pièce. Je transmets ce qui dépasse mon rôle."
  },
  "INF-M5-02": {
   "scene": "Quatre repères pour garder sa réserve",
   "personnages": "—",
   "alt": "Quatre cartes. Je ne relaie pas de message militant. J'exprime mon opinion avec mesure. Pas de signe ostentatoire en service. Si mon image circule, je demande le retrait et je préviens."
  },
  "INF-M5-03": {
   "scene": "Six questions avant de décider",
   "personnages": "—",
   "alt": "Six cartes : le lien, mon rôle, le moment et la valeur, la dette, la transparence, à qui demander conseil."
  },
  "INF-M5-04": {
   "scene": "Cinq repères pour améliorer un service",
   "personnages": "—",
   "alt": "Cinq étapes en frise : l'objectif, activité résultat utilité, un constat factuel, une amélioration simple, un indicateur."
  }
 },
 "source": "Storyboard — M5 en pages v0.3.md"
};
