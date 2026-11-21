/* GÉNÉRÉ par build/build.py depuis « Storyboard — Prologue en pages v0.3.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "PRO-PAGES",
  "type": "module",
  "titre": "Bienvenue à l'ÉLAN",
  "code": "Prologue",
  "duree": "8 à 10 min",
  "hub": {
   "href": "index.html",
   "libelle": "Retour à l'accueil du prototype"
  },
  "intro": "Bienvenue dans votre parcours DINA. Avant de commencer, découvrez l'univers dans lequel vous allez évoluer au fil des semaines : Noa, qui travaille depuis quelques semaines dans un établissement public calédonien, cet établissement, et les personnes qu'il côtoie.\n",
  "sections": [
   {
    "id": "arrivee",
    "libelle": "Début",
    "titre": "Noa à l'ÉLAN",
    "savoir": "Découvrir l'établissement de Noa",
    "accroche": "Koné, lundi, 7 h 30. Noa commence sa semaine.",
    "debut": "PRO-P1",
    "duree": "4 min"
   },
   {
    "id": "equipe",
    "libelle": "Son équipe",
    "titre": "L'équipe de Noa",
    "savoir": "Rencontrer l'équipe et les partenaires",
    "accroche": "Qui travaille avec Noa, et pour qui.",
    "debut": "PRO-P2",
    "duree": "3 min"
   },
   {
    "id": "regle",
    "libelle": "La règle du jeu",
    "titre": "Comment allez-vous apprendre ?",
    "savoir": "Comprendre comment vous allez apprendre",
    "accroche": "Vous êtes Noa : une semaine par module.",
    "debut": "PRO-P3",
    "duree": "2 min"
   }
  ],
  "personnages": {
   "Noa": "Chargé d'études et d'appui aux projets, l'ÉLAN"
  },
  "cle": "prologue-pages"
 },
 "ecrans": {
  "PRO-P1": {
   "id": "PRO-P1",
   "type": "page",
   "etape": "Début",
   "titre": "Noa à l'ÉLAN",
   "chapeau": "Lundi matin à Koné. Vous retrouvez Noa devant l'entrée, puis vous découvrez l'établissement où il travaille.",
   "phases": [
    "situation",
    "apport"
   ],
   "bouton_fin": "Continuer",
   "suite": "PRO-P2",
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Koné, lundi, 7 h 30",
     "illustration": "ILL-P1",
     "texte": "Noa, 29 ans, travaille depuis quelques semaines à l'Établissement de liaison et d'appui de Nouvelle-Calédonie. Ici, tout le monde l'appelle l'ÉLAN.\n\nIl commence à connaître ses collègues et son environnement de travail, mais il lui reste encore beaucoup à découvrir.",
     "repliques": [
      {
       "personnage": "Noa",
       "didascalie": "Noa se dit",
       "canal": "note",
       "texte": "« Je commence à prendre mes marques, mais j'ai encore pas mal de questions. Qui fait quoi ? À qui m'adresser ? Qu'est-ce que je peux décider seul ? »"
      }
     ]
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Où travaille Noa ?",
     "texte": "Avant sa réunion de pôle, Noa relit la fiche de présentation de son établissement, reçue lors de son arrivée.",
     "fiche_identite": {
      "sigle": "É",
      "logo": "logo-elan-symbole.png",
      "nom": "L'ÉLAN",
      "sous_titre": "Établissement de liaison et d'appui de Nouvelle-Calédonie",
      "lignes": [
       {
        "icone": "i-batiment",
        "libelle": "Statut",
        "valeur": "Établissement public administratif de la Nouvelle-Calédonie"
       },
       {
        "icone": "i-lieu",
        "libelle": "Siège",
        "valeur": "Koné, avec des interventions dans les trois provinces."
       },
       {
        "icone": "i-equipe",
        "libelle": "Équipe",
        "valeur": "Une vingtaine d'agents répartis en trois pôles, sous la responsabilité d'une directrice."
       },
       {
        "icone": "i-projet",
        "libelle": "Sa mission",
        "valeur": "Aider les communes et les associations à préparer et à suivre leurs projets d'intérêt général."
       }
      ],
      "pied": "Dans quel but ? Rendre les services publics **plus proches et plus simples** pour les habitants."
     }
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Ce que fait l'établissement",
     "texte": "En parcourant son dossier d'accueil, Noa découvre les statuts de l'ÉLAN, qui définissent les missions de l'établissement.\n\nMais que signifient ces missions dans son travail quotidien ?\n\nCliquez sur « En clair » pour le découvrir.",
     "texte_officiel": {
      "source": "Statuts de l'Établissement de liaison et d'appui de Nouvelle-Calédonie, l'ÉLAN (texte fictif, rédigé pour la formation)",
      "article": "Article 2 — Missions",
      "intro": "L'établissement a pour objet de faciliter la préparation et le suivi des projets d'intérêt général de proximité et d'améliorer l'accès des usagers aux services publics. À ce titre, il est chargé :",
      "alineas": [
       {
        "texte": "d'apporter un appui méthodologique aux collectivités, aux établissements publics et aux associations qui portent un projet d'intérêt général ;",
        "clair": "Les agents de l'ÉLAN aident un porteur de projet à clarifier son besoin, à monter un dossier compréhensible et à savoir quelle est la prochaine étape.",
        "exemple": "Une commune veut ouvrir une permanence de services dans une tribu : l'ÉLAN l'aide à préparer le diagnostic et le calendrier."
       },
       {
        "texte": "de favoriser la coordination des services et des organismes qui interviennent sur un même projet ;",
        "clair": "Quand plusieurs organisations travaillent sur un projet, l'établissement organise les échanges pour que chacune sache ce qu'elle fait et ce qu'elle s'engage à faire.",
        "exemple": "Une réunion entre la commune, une association et un service provincial, suivie d'un relevé de décisions."
       },
       {
        "texte": "de contribuer à la simplification des démarches administratives et à l'amélioration de l'accueil des usagers ;",
        "clair": "Les agents de l'ÉLAN repèrent ce qui bloque les habitants dans une démarche et proposent des améliorations aux services concernés.",
        "exemple": "Tester avec des usagers une fiche d'information sur une démarche en ligne."
       },
       {
        "texte": "de réaliser des études et des évaluations à la demande de ses partenaires ou de l'autorité de tutelle.",
        "clair": "Les agents de l'établissement collectent et analysent des informations fiables pour aider à décider et à mesurer les effets d'une action.",
        "exemple": "Le bilan d'un dispositif après un an de fonctionnement."
       }
      ],
      "fin": "Article 3 — L'établissement ne se substitue pas aux autorités compétentes. Il ne délivre aucune autorisation, n'attribue aucune aide financière et ne donne aucune instruction aux services des autres administrations."
     }
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "L'ÉLAN n'existe pas. Les règles, si.",
     "texte": "Inutile de chercher l'ÉLAN dans un annuaire ! Cet établissement a été imaginé pour votre parcours DINA. En revanche, les situations vécues par Noa pourraient bien vous arriver dans votre propre service.",
     "colonnes": [
      {
       "icone": "i-imagine",
       "titre": "Imaginé pour la formation",
       "items": [
        "L'établissement, ses missions et son organigramme",
        "Noa et les personnes qu'il croise",
        "Les dossiers, les chiffres, les dates"
       ]
      },
      {
       "icone": "i-balance",
       "titre": "Vrai dans la fonction publique calédonienne",
       "items": [
        "Le statut et les obligations des agents",
        "La chaîne hiérarchique",
        "Les sources officielles",
        "La protection des données"
       ]
      }
     ]
    }
   ]
  },
  "PRO-P2": {
   "id": "PRO-P2",
   "type": "page",
   "etape": "Son équipe",
   "titre": "L'équipe de Noa",
   "chapeau": "Ses collègues, ses partenaires, et tous ceux qui travaillent pour les mêmes habitants.",
   "phases": [
    "situation",
    "apport"
   ],
   "libelles_phases": {
    "situation": "Ses collègues",
    "apport": "Les acteurs"
   },
   "bouton_fin": "Continuer",
   "suite": "PRO-P3",
   "blocs": [
    {
     "type": "equipe",
     "phase": "situation",
     "titre": "Faites connaissance avec l'équipe de Noa",
     "texte": "Noa ne travaille pas seul. Il peut compter sur ses collègues et collabore avec de nombreux partenaires.\n\nCliquez sur les personnages pour faire leur connaissance.",
     "illustration": "ILL-P3",
     "groupes": {
      "Son équipe à l'ÉLAN": "Ils travaillent avec Noa, au siège de l'établissement, à Koné.",
      "Ses partenaires": "Ils ne dépendent pas de l'ÉLAN : chacun a son employeur, son responsable et ses règles."
     },
     "zones": [
      {
       "id": "ariane",
       "x": 55,
       "y": 23.5,
       "groupe": "Son équipe à l'ÉLAN",
       "pole": "Direction",
       "titre": "Ariane, directrice de l'ÉLAN",
       "texte": "52 ans. Fonctionnaire, catégorie A. Elle dirige l'établissement et décide des appuis qu'il apporte. Posée, exigeante, elle lit tout ce qu'on lui envoie."
      },
      {
       "id": "samuel",
       "x": 33.9,
       "y": 41.5,
       "groupe": "Son équipe à l'ÉLAN",
       "pole": "Pôle études et projets",
       "titre": "Samuel, responsable du pôle",
       "texte": "45 ans. Fonctionnaire, catégorie A. Le responsable direct de Noa. Il fixe ses priorités, valide son travail et attend des comptes rendus clairs."
      },
      {
       "id": "noa",
       "x": 25.4,
       "y": 64,
       "groupe": "Son équipe à l'ÉLAN",
       "pole": "Pôle études et projets",
       "moi": true,
       "titre": "Noa, chargé d'études et d'appui aux projets",
       "texte": "29 ans. Attaché d'administration stagiaire, catégorie A. À l'ÉLAN depuis quelques semaines : pendant cette formation, vous êtes à sa place."
      },
      {
       "id": "malia",
       "x": 41.8,
       "y": 63.2,
       "groupe": "Son équipe à l'ÉLAN",
       "pole": "Pôle études et projets",
       "titre": "Malia, chargée d'études et d'évaluation",
       "texte": "46 ans. Fonctionnaire, catégorie B. Collègue expérimentée, elle est la marraine de Noa : il peut lui poser ses questions. Elle n'est pas sa responsable."
      },
      {
       "id": "ana",
       "x": 65.8,
       "y": 63.2,
       "groupe": "Son équipe à l'ÉLAN",
       "pole": "Pôle ressources et administration",
       "titre": "Ana, développement des compétences",
       "texte": "32 ans. Contractuelle, catégorie B. Elle accompagne l'intégration de Noa et répond à ses questions RH."
      },
      {
       "id": "cedric",
       "x": 81.8,
       "y": 63.2,
       "groupe": "Son équipe à l'ÉLAN",
       "pole": "Pôle ressources et administration",
       "titre": "Cédric, accueil et logistique",
       "texte": "41 ans. Fonctionnaire, catégorie C. Accueil, courrier, salles, véhicules, sécurité : c'est lui qu'on appelle quand on ne sait pas à qui demander."
      },
      {
       "id": "joel",
       "x": 19.1,
       "y": 92.5,
       "groupe": "Ses partenaires",
       "pole": "Association Passerelles",
       "titre": "Joël, coordinateur de terrain",
       "texte": "53 ans. Salarié de l'association. Il connaît le terrain mieux que personne. Noa aura bientôt affaire à lui."
      },
      {
       "id": "teiva",
       "x": 33.4,
       "y": 92.5,
       "groupe": "Ses partenaires",
       "pole": "Association Passerelles",
       "titre": "Teiva, médiateur numérique",
       "texte": "24 ans. Salarié de l'association. Il aide les habitants à faire leurs démarches en ligne."
      },
      {
       "id": "lena",
       "x": 55.1,
       "y": 92.5,
       "groupe": "Ses partenaires",
       "pole": "Administration provinciale",
       "titre": "Léna, chargée d'études statistiques",
       "texte": "27 ans. Agente de la province. Elle produit des données utiles à l'ÉLAN, avec sa propre hiérarchie et son propre calendrier."
      },
      {
       "id": "elise",
       "x": 83.3,
       "y": 92.5,
       "groupe": "Ses partenaires",
       "pole": "Une commune",
       "titre": "Élise, agente d'accueil",
       "texte": "59 ans. Agente de la commune. Elle reçoit chaque jour les habitants et connaît leurs vraies questions."
      }
     ]
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Qui travaille avec Noa pour les habitants ?",
     "texte": "Autour de Noa, de nombreux acteurs contribuent à répondre aux besoins des habitants.\n\nIls n'ont pas tous les mêmes missions, mais ils sont souvent amenés à travailler ensemble. Certains font partie du service public, d'autres non.",
     "orbite": {
      "centre": "Les habitants",
      "groupes": [
       {
        "titre": "Le service public",
        "acteurs": [
         "L'État",
         "La Nouvelle-Calédonie",
         "Les provinces",
         "Les communes",
         {
          "nom": "Les établissements publics : dont l'ÉLAN, où travaille Noa",
          "accent": true
         }
        ]
       },
       {
        "titre": "Les acteurs privés",
        "note": "Ils agissent aussi pour les habitants, sans être des administrations.",
        "acteurs": [
         "Les associations",
         "Les entreprises"
        ]
       }
      ],
      "legende": "Noa connaît déjà son équipe. Il va maintenant apprendre à mieux comprendre cet environnement."
     },
     "a_retenir": "On appelle **usager** une personne qui utilise un service public."
    }
   ]
  },
  "PRO-P3": {
   "id": "PRO-P3",
   "type": "page",
   "etape": "La règle du jeu",
   "titre": "Comment allez-vous apprendre ?",
   "chapeau": "Mettez-vous à la place de Noa : une semaine par module. Voici la règle du jeu, puis une question pour vous.",
   "phases": [
    "apport",
    "application"
   ],
   "libelles_phases": {
    "apport": "Le principe",
    "application": "Et vous ?"
   },
   "bouton_fin": "Terminer le prologue",
   "suite": "PRO-FIN",
   "blocs": [
    {
     "type": "cartes",
     "phase": "apport",
     "titre": "Comment allez-vous apprendre ?",
     "texte": "Vous connaissez Noa et son environnement. Voici comment vous allez progresser avec lui.",
     "consigne": "Cliquez sur chaque carte.",
     "cartes": [
      {
       "icone": "i-equipe",
       "recto": "Mettez-vous à la place de Noa",
       "verso": "Vous êtes Noa, attaché d'administration stagiaire. Ses collègues, de toutes catégories, vivent aussi des situations. Dans la vraie vie, vous êtes peut-être contractuel, de catégorie B ou C : ces règles vous concernent aussi. Quand elles changent selon le statut, DINA vous le dit."
      },
      {
       "icone": "i-semaine",
       "recto": "Cinq modules, cinq semaines dans la vie de Noa",
       "verso": "Chaque module vous fait découvrir une nouvelle semaine de travail de Noa."
      },
      {
       "icone": "i-dialogue",
       "recto": "Se tromper pour apprendre",
       "verso": "Vous prenez les décisions pour Noa et en découvrez les conséquences. Vous avez le droit de vous tromper : chaque choix est une occasion d'apprendre et d'acquérir les bons réflexes. Ici, pas de piège, chaque réponse est expliquée. Après chaque situation, un repère utile vous est proposé."
      },
      {
       "icone": "i-valider",
       "recto": "Faites le point sur vos acquis",
       "verso": "À la fin de chaque module, six nouvelles situations vous permettent de vérifier vos acquis. Cinq réponses adaptées sur six vous donnent accès à un badge. Vous pouvez réessayer, et dans tous les cas continuer le parcours."
      },
      {
       "icone": "i-medaille",
       "recto": "Gagnez des badges",
       "verso": "Chaque module réussi vous donne un badge. Quand vous avez réussi les cinq modules, puis le bilan de parcours (5 réponses justes sur 6), vous obtenez le badge du parcours DINA."
      },
      {
       "icone": "i-cadenas",
       "recto": "Votre positionnement vous appartient",
       "verso": "Le résultat de votre positionnement n'est vu que par vous. Il montre ce que vous savez déjà et où chaque sujet sera travaillé."
      }
     ],
     "encadre": "Votre **carnet** vous accompagne tout au long du parcours. Vous y retrouverez les fiches utiles à consulter ou à télécharger.\n\nVous pouvez faire une pause à tout moment et reprendre là où vous vous êtes arrêté."
    },
    {
     "type": "reflexion",
     "id": "PRO-P3-ET-VOUS",
     "phase": "application",
     "titre": "Et vous ?",
     "question": "Depuis votre arrivée dans votre poste, qu'est-ce qui vous a le plus surpris ? Quelles questions vous posez-vous encore ?",
     "apres": "Noa se pose peut-être les mêmes questions que vous…",
     "mention": "Votre réponse, c'est entre vous et votre écran !"
    }
   ]
  },
  "PRO-FIN": {
   "id": "PRO-FIN",
   "type": "fin",
   "etape": "La règle du jeu",
   "titre": "Prêt à accompagner Noa ?",
   "texte": "Vous connaissez maintenant Noa, son équipe et son environnement de travail.\n\nIl est temps de l'accompagner dans ses premières aventures professionnelles.",
   "points_titre": "Ce que vous savez maintenant",
   "points": [
    {
     "titre": "Où travaille Noa",
     "texte": "À l'ÉLAN, un établissement public administratif de la Nouvelle-Calédonie installé à Koné."
    },
    {
     "titre": "Avec qui",
     "texte": "Son équipe autour d'Ariane et de Samuel, sa marraine Malia, et des partenaires qui ont chacun leur employeur."
    },
    {
     "titre": "Comment vous allez apprendre",
     "texte": "Vous êtes Noa. Une semaine par module. Vous décidez, vous vous trompez, vous apprenez. Un bilan le vendredi."
    }
   ],
   "prochain": {
    "titre": "J'accompagne Noa dans sa semaine",
    "texte": "Module 1 « Je me repère ». Lundi matin, plusieurs demandes arrivent à l'ÉLAN. Noa ne sait pas encore vers qui les orienter. À vous de l'aider !"
   },
   "suite": "ACCUEIL"
  }
 },
 "fiches": {},
 "illustrations": {
  "ILL-P1": {
   "scene": "Noa devant l'entrée du siège de l'ÉLAN, à Koné, un lundi tôt le matin",
   "personnages": "Noa",
   "alt": "Noa, son badge à la main, devant l'entrée d'un bâtiment administratif de plain-pied à Koné, un lundi matin ensoleillé."
  },
  "ILL-P2": {
   "scene": "Carte de la Nouvelle-Calédonie, repère sur Koné (à produire)",
   "personnages": "—",
   "alt": "Carte de la Nouvelle-Calédonie : le siège de l'ÉLAN est à Koné, sur la côte Ouest de la Grande Terre."
  },
  "ILL-P3": {
   "scene": "Organigramme illustré des dix personnages, avec noms, fonctions et statuts (v2, 20-10)",
   "personnages": "Les dix personnages",
   "alt": "Organigramme de l'ÉLAN. En haut, Ariane, directrice. Pôle études et projets : Samuel, responsable du pôle, puis Noa, chargé d'études et d'appui aux projets, et Malia, chargée d'études et d'évaluation, marraine de Noa. Pôle ressources et administration : Ana, développement des compétences, et Cédric, accueil et logistique. En bas, les partenaires, qui ne dépendent pas de l'ÉLAN : Joël et Teiva, association Passerelles ; Léna, administration provinciale ; Élise, une commune. Chaque personne a son statut indiqué."
  }
 },
 "source": "Storyboard — Prologue en pages v0.3.md"
};
