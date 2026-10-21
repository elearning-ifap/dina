/* GÉNÉRÉ par build/build.py depuis « Storyboard — positionnement v0.3.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "POS",
  "type": "module",
  "code": "Positionnement",
  "titre": "Faites le point",
  "duree": "10 à 15 min",
  "sans_menu": true,
  "certitude_question": "Comment avez-vous répondu ?",
  "certitude": [
   "Sans hésiter",
   "En hésitant",
   "Au hasard"
  ],
  "page_suivante": {
   "href": "prologue.html",
   "libelle": "Bienvenue à ÉLAN"
  },
  "sections": [
   {
    "id": "pos",
    "libelle": "Positionnement",
    "titre": "10 situations",
    "debut": "POS-INTRO",
    "duree": "10 à 15 min"
   }
  ]
 },
 "ecrans": {
  "POS-INTRO": {
   "id": "POS-INTRO",
   "type": "narration",
   "etape": "Positionnement",
   "titre": "Faites le point avant de commencer",
   "texte": "10 situations courantes, 10 à 15 minutes.\nPour chacune, choisissez ce que vous feriez, puis dites comment vous avez répondu.\nPas de note, rien n'est validé. À la fin, vous voyez ce que vous savez déjà et le module où chaque sujet sera travaillé.\nVotre employeur n'a pas accès à vos réponses.\n",
   "a_retenir": "Version de démonstration : contenus non validés par un expert, réponses non enregistrées.",
   "suite": "POS-P01"
  },
  "POS-P01": {
   "id": "POS-P01",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Les droits d'un ami",
   "bloc": "B1",
   "competences": [
    "C01"
   ],
   "texte": "Un ami, salarié d'une entreprise privée à Nouméa, a un doute sur ses congés payés. Il vous demande où se renseigner sur ses droits. Que lui conseillez-vous ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "De s'adresser à sa province.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "De s'adresser à la mairie de son lieu de travail.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "De s'adresser au service du gouvernement chargé du travail.",
     "verdict": "adapte"
    },
    {
     "id": "D",
     "libelle": "De s'adresser au haut-commissariat de la République.",
     "verdict": "inadapte"
    }
   ],
   "suite": "POS-P02"
  },
  "POS-P02": {
   "id": "POS-P02",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Une demande de formation",
   "bloc": "B1",
   "competences": [
    "C02"
   ],
   "texte": "Vous voulez suivre une formation utile à votre poste. Personne ne vous a dit à qui adresser la demande. Que faites-vous ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous en parlez à votre responsable et repérez le service formation dans l'organigramme.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Vous vous inscrivez directement auprès d'un organisme de formation.",
     "verdict": "partiel"
    },
    {
     "id": "C",
     "libelle": "Vous écrivez au directeur général pour obtenir son accord.",
     "verdict": "inadapte"
    },
    {
     "id": "D",
     "libelle": "Vous attendez que le service des ressources humaines vous contacte.",
     "verdict": "inadapte"
    }
   ],
   "suite": "POS-P03"
  },
  "POS-P03": {
   "id": "POS-P03",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Répondre au nom du service",
   "bloc": "B2",
   "competences": [
    "C04"
   ],
   "texte": "Votre responsable vous demande de répondre à un partenaire « au nom du service ». Le sujet est technique et vous ne le maîtrisez pas encore. La réponse est attendue sous deux jours. Que faites-vous ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous répondez tout de suite, au mieux de vos connaissances.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Vous dites à votre responsable que ce n'est pas votre domaine.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Vous demandez à un collègue expérimenté de répondre à votre place.",
     "verdict": "inadapte"
    },
    {
     "id": "D",
     "libelle": "Vous préparez un projet, signalez vos doutes et le faites valider.",
     "verdict": "adapte"
    }
   ],
   "suite": "POS-P04"
  },
  "POS-P04": {
   "id": "POS-P04",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Trois tâches et une urgence",
   "bloc": "B2",
   "competences": [
    "C05"
   ],
   "texte": "Lundi matin, vous avez trois tâches, dont deux à rendre demain. Votre responsable vous confie un dossier urgent pour ce soir. Que faites-vous en premier ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous traitez l'urgence et décalez les deux autres sans prévenir.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Vous finissez d'abord ce qui était prévu, l'urgence suivra.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Vous signalez le conflit d'échéances et convenez des priorités.",
     "verdict": "adapte"
    },
    {
     "id": "D",
     "libelle": "Vous avancez un peu chaque tâche pour ne rien laisser de côté.",
     "verdict": "inadapte"
    }
   ],
   "suite": "POS-P05"
  },
  "POS-P05": {
   "id": "POS-P05",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Un courriel sec",
   "bloc": "B3",
   "competences": [
    "C06"
   ],
   "texte": "Un collègue d'un autre service vous écrit : « Toujours rien reçu de votre part. C'est urgent. » Vous lui aviez pourtant répondu la semaine dernière. Que faites-vous ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous renvoyez votre réponse avec un mot courtois et proposez d'en parler.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Vous répondez sur le même ton, pour être clair.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Vous ne répondez pas : vous avez déjà fait votre part.",
     "verdict": "risque"
    },
    {
     "id": "D",
     "libelle": "Vous répondez en mettant votre direction en copie.",
     "verdict": "risque"
    }
   ],
   "suite": "POS-P06"
  },
  "POS-P06": {
   "id": "POS-P06",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Qui devait envoyer l'invitation ?",
   "bloc": "B3",
   "competences": [
    "C08"
   ],
   "texte": "Une réunion n'a pas pu se tenir : l'invitation n'est pas partie. Votre collègue estime que c'était à vous de l'envoyer ; vous pensiez l'inverse. Le ton monte. Que faites-vous ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous lui montrez les échanges qui prouvent que vous aviez raison.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Vous laissez tomber pour éviter le conflit.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Vous demandez à votre responsable de trancher tout de suite.",
     "verdict": "partiel"
    },
    {
     "id": "D",
     "libelle": "Vous réglez l'immédiat, puis clarifiez ensemble qui fait quoi.",
     "verdict": "adapte"
    }
   ],
   "suite": "POS-P07"
  },
  "POS-P07": {
   "id": "POS-P07",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Un outil d'IA gratuit",
   "bloc": "B4",
   "competences": [
    "C10"
   ],
   "vigilance": true,
   "texte": "Pour gagner du temps, un collègue vous conseille de copier un tableau contenant des noms et adresses d'usagers dans un outil d'IA gratuit en ligne, pour en tirer une synthèse. Que faites-vous ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous le faites : l'outil est très utilisé et le gain est réel.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Vous ne le faites pas et vérifiez les outils autorisés par votre employeur.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Vous le faites après avoir retiré les noms, en gardant les adresses.",
     "verdict": "risque"
    },
    {
     "id": "D",
     "libelle": "Vous le faites depuis votre ordinateur personnel, hors du réseau.",
     "verdict": "inadapte"
    }
   ],
   "suite": "POS-P08"
  },
  "POS-P08": {
   "id": "POS-P08",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Attester une prestation",
   "bloc": "B4",
   "competences": [
    "C09"
   ],
   "vigilance": true,
   "texte": "On vous demande de signer l'attestation de service fait d'une prestation que vous n'avez pas constatée. Le prestataire insiste : sa facture doit partir aujourd'hui. Que faites-vous ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous vérifiez la réalisation avant de signer et signalez le retard.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Vous signez : un collègue vous assure que tout a été fait.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Vous signez en ajoutant la mention « sous réserve ».",
     "verdict": "risque"
    },
    {
     "id": "D",
     "libelle": "Vous refusez de signer, sans autre démarche.",
     "verdict": "partiel"
    }
   ],
   "suite": "POS-P09"
  },
  "POS-P09": {
   "id": "POS-P09",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Un dossier familial",
   "bloc": "B5",
   "competences": [
    "C14"
   ],
   "vigilance": true,
   "texte": "Un membre de votre famille dépose une demande. C'est vous qui êtes chargé de l'instruire. Que faites-vous ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous l'instruisez normalement, en veillant à rester impartial.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Vous l'instruisez vite pour ne pas faire attendre votre proche.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Vous le signalez à votre responsable pour confier le dossier à un collègue.",
     "verdict": "adapte"
    },
    {
     "id": "D",
     "libelle": "Vous mettez le dossier de côté sans en parler.",
     "verdict": "inadapte"
    }
   ],
   "suite": "POS-P10"
  },
  "POS-P10": {
   "id": "POS-P10",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Un usager pressé",
   "bloc": "B5",
   "competences": [
    "C13"
   ],
   "texte": "Un usager vous demande de traiter son dossier en priorité : il connaît bien le directeur. D'autres dossiers ont été déposés avant le sien. Que faites-vous ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous le traitez en priorité pour éviter un souci avec la direction.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Vous transmettez sa demande au directeur pour qu'il décide.",
     "verdict": "partiel"
    },
    {
     "id": "C",
     "libelle": "Vous lui répondez que ce genre de demande est inacceptable.",
     "verdict": "risque"
    },
    {
     "id": "D",
     "libelle": "Vous expliquez que les dossiers suivent les mêmes règles et donnez le délai.",
     "verdict": "adapte"
    }
   ],
   "suite": "POS-PROFIL"
  },
  "POS-PROFIL": {
   "id": "POS-PROFIL",
   "type": "pos-profil",
   "etape": "Positionnement",
   "titre": "Où vous en êtes",
   "texte": "Voici ce que montrent vos réponses. Ce n'est pas une note et rien n'est validé : deux situations par domaine ne disent pas tout de vos compétences.\nVous suivrez tous les modules, dans l'ordre. Pour chaque domaine, vous voyez où il sera travaillé, avec un exemple.\n",
   "niveaux": {
    "present": "Repères présents",
    "approfondir": "À approfondir",
    "decouvrir": "À découvrir"
   },
   "certitude_textes": {
    "juste_incertain": "Vous avez hésité sur une réponse pourtant juste : le module vous aidera à en être sûr.",
    "faux_assure": "Vous avez choisi sans hésiter une conduite qui n'est pas celle attendue : le module vous montrera pourquoi."
   },
   "vigilance": "**Point de vigilance.** Sur un sujet sensible, vous avez choisi sans hésiter une conduite qui comporte un risque. Le module indiqué vous donne les repères à connaître avant d'agir.\n",
   "mention": "Ce résultat n'est vu que par vous. Votre employeur n'y a pas accès.",
   "blocs": [
    {
     "id": "B1",
     "titre": "Se repérer",
     "module": "Module 1 — Je me repère",
     "exemple": "Savoir quelle institution est compétente quand un habitant vous pose une question, et lui donner une source fiable et datée.",
     "present": "Dans ces situations, vous avez trouvé le bon interlocuteur.",
     "approfondir": "Vous avez des repères sur les institutions et votre organisation. Certains restent à préciser.",
     "decouvrir": "Qui fait quoi dans le service public calédonien : c'est le point de départ du parcours."
    },
    {
     "id": "B2",
     "titre": "Se positionner et agir",
     "module": "Module 2 — Je trouve ma place",
     "exemple": "Savoir ce que vous pouvez traiter seul, quand demander une validation, et comment tenir une échéance quand une urgence arrive.",
     "present": "Dans ces situations, vous avez tenu votre rôle et vos priorités.",
     "approfondir": "Le moment de demander une validation ou de signaler un retard reste à préciser.",
     "decouvrir": "Jusqu'où agir seul et comment organiser votre travail : le module 2 vous l'apprend pas à pas."
    },
    {
     "id": "B3",
     "titre": "Coopérer",
     "module": "Module 3 — Je travaille avec les autres",
     "exemple": "Préparer une réunion avec plusieurs organisations, choisir le bon canal, dénouer un malentendu sans conflit.",
     "present": "Dans ces situations, vous avez communiqué et coopéré de façon adaptée.",
     "approfondir": "Vos réflexes sont là. Ils restent à affiner quand la relation se tend.",
     "decouvrir": "Communiquer et coopérer avec d'autres services et d'autres organisations : le module 3 y est consacré."
    },
    {
     "id": "B4",
     "titre": "Agir dans un cadre sécurisé",
     "module": "Module 4 — J'agis dans un cadre sécurisé",
     "exemple": "Protéger les données des habitants que vous recevez, utiliser les moyens publics à bon escient, repérer un risque lors d'un déplacement.",
     "present": "Dans ces situations, vous avez repéré la règle et le risque.",
     "approfondir": "Certains réflexes de sécurité restent à consolider.",
     "decouvrir": "Les règles qui sécurisent votre activité, les données et les moyens publics : le module 4 les présente."
    },
    {
     "id": "B5",
     "titre": "Servir l'intérêt général",
     "module": "Module 5 — J'incarne le service public",
     "exemple": "Accueillir chaque usager avec les mêmes règles, réagir quand un proche est concerné par un dossier, vérifier la qualité avant de transmettre.",
     "present": "Dans ces situations, vos choix respectent les principes du service public.",
     "approfondir": "Vos repères sont là. Ils restent à affermir face aux situations délicates.",
     "decouvrir": "Les principes du service public dans les gestes du quotidien : le module 5 les met en situation."
    }
   ],
   "suite": "ACCUEIL"
  }
 },
 "fiches": {},
 "illustrations": {},
 "source": "Storyboard — positionnement v0.3.md"
};
