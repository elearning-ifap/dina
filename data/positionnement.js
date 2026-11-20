/* GÉNÉRÉ par build/build.py depuis « Storyboard — positionnement v0.9.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "POS",
  "type": "module",
  "code": "Positionnement",
  "titre": "Une semaine de travail",
  "duree": "15 à 20 min environ",
  "sans_menu": true,
  "competences_lib": {
   "C01": "Je sais qui fait quoi parmi les institutions de Nouvelle-Calédonie",
   "C02": "Je sais situer mon service et trouver le bon interlocuteur",
   "C03": "Je connais mon statut, mes missions et mes responsabilités",
   "C04": "Je sais agir dans le respect du cadre hiérarchique",
   "C05": "Je sais organiser mon travail et gérer mes priorités",
   "C06": "Je sais adapter ma communication à mon interlocuteur et à la situation",
   "C07": "Je sais travailler avec d'autres services et organisations",
   "C08": "Je sais gérer une difficulté relationnelle simple",
   "C09": "Je sais identifier et appliquer les règles liées à mon activité",
   "C10": "Je sais protéger les données et sécuriser mes usages numériques",
   "C11": "Je sais utiliser les moyens publics de manière responsable",
   "C12": "Je sais prévenir les risques pour la santé et la sécurité au travail",
   "C13": "Je sais appliquer les valeurs et les principes du service public",
   "C14": "Je sais comment agir dans une situation professionnelle délicate",
   "C15": "Je sais contribuer à la qualité du service rendu",
   "C16": "Je sais adopter une attitude adaptée et respectueuse envers les usagers",
   "C17": "Je sais rechercher, vérifier et actualiser une information utile",
   "C18": "Je sais agir seul et reconnaître quand j'ai besoin d'aide",
   "C19": "Je sais m'adapter aux changements dans mon travail",
   "C20": "Je sais contribuer à l'amélioration du service",
   "C21": "Je sais prendre du recul sur ma pratique pour progresser"
  },
  "hub": {
   "href": "index.html",
   "libelle": "Retour à l'accueil du prototype"
  },
  "sections": [
   {
    "id": "pos",
    "libelle": "Positionnement",
    "titre": "Une semaine de travail",
    "debut": "POS-INTRO",
    "duree": "15 à 20 min environ"
   }
  ]
 },
 "ecrans": {
  "POS-INTRO": {
   "id": "POS-INTRO",
   "type": "narration",
   "etape": "Positionnement",
   "titre": "Une semaine de travail",
   "texte": "Vous travaillez dans un service public calédonien depuis quelques jours ou quelques mois.\nAvant de commencer votre parcours DINA, nous vous proposons de vivre une semaine de travail à travers 15 situations professionnelles, du lundi au vendredi.\nPour chaque situation, plusieurs façons d'agir vous sont proposées. Choisissez celle qui correspond le mieux à ce que vous feriez spontanément. Une seule passe : votre premier réflexe compte.\nAprès chaque choix, vous voyez ce qui se passe et ce que la situation travaille. Les explications viennent ensuite, dans les modules.\nÀ la fin de l'activité, vous découvrez votre positionnement sur les 21 compétences du socle DINA et dans quel module chaque sujet est travaillé.\nPas de note, pas d'échec : ce positionnement, c'est entre vous et votre écran !\n",
   "a_retenir": "Version de démonstration : contenus non validés par un expert, réponses non enregistrées.",
   "suite": "POS-S01"
  },
  "POS-S01": {
   "id": "POS-S01",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Un ami vous demande conseil sur ses congés",
   "moment": {
    "jour": "Lundi",
    "heure": "8 h",
    "canal": "sms",
    "de": "Un ami"
   },
   "competences": [
    "C01",
    "C17"
   ],
   "texte": "« Toi qui travailles dans l'administration : mon patron refuse mes congés payés. Je me renseigne où ? »\nVotre ami est salarié d'une entreprise privée à Nouméa.\nQue lui répondez-vous ?\n",
   "enjeu": "Orienter quelqu'un vers le bon interlocuteur, avec une information sûre et à jour.",
   "options": [
    {
     "id": "A",
     "libelle": "Demande à la province, elle s'occupe de l'emploi. Son site doit l'expliquer.",
     "verdicts": {
      "C01": "inadapte",
      "C17": "adapte"
     },
     "consequence": "À la province, on lui explique que le droit du travail ne relève pas d'elle. Il a perdu une matinée."
    },
    {
     "id": "C",
     "libelle": "Regarde le site officiel du gouvernement, rubrique travail, ou appelle son service du travail.",
     "verdicts": {
      "C01": "adapte",
      "C17": "adapte"
     },
     "consequence": "Il trouve une fiche sur les congés payés, à jour. Il appelle le service et obtient une réponse claire."
    },
    {
     "id": "D",
     "libelle": "C'est le service du travail du gouvernement. Regarde d'abord le groupe Facebook des salariés, tout y est.",
     "verdicts": {
      "C01": "adapte",
      "C17": "inadapte"
     },
     "consequence": "Il passe la soirée sur le groupe : trois réponses contradictoires, dont une qui date de 2015."
    }
   ],
   "suite": "POS-S02"
  },
  "POS-S02": {
   "id": "POS-S02",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "À qui demander une formation ?",
   "moment": {
    "jour": "Lundi",
    "heure": "14 h",
    "canal": "note",
    "de": "Vous"
   },
   "competences": [
    "C02"
   ],
   "texte": "Vous avez repéré une formation utile à votre poste. Personne ne vous a dit à qui adresser la demande.\n",
   "enjeu": "Connaître le circuit de votre organisation : à qui s'adresser, et dans quel ordre.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous écrivez directement au directeur : c'est lui qui décide des formations.",
     "verdicts": {
      "C02": "inadapte"
     },
     "consequence": "Le courriel redescend trois niveaux avant d'arriver chez votre responsable, un peu surpris."
    },
    {
     "id": "B",
     "libelle": "Vous en parlez à votre responsable et repérez le service formation dans l'organigramme.",
     "verdicts": {
      "C02": "adapte"
     },
     "consequence": "Votre responsable valide l'idée et vous indique le correspondant formation. La demande part dans le bon circuit."
    },
    {
     "id": "C",
     "libelle": "Vous trouvez une formation sur Internet et vous inscrivez directement auprès de l'organisme.",
     "verdicts": {
      "C02": "partiel"
     },
     "consequence": "L'organisme vous répond que l'inscription doit passer par votre employeur. Votre responsable l'apprend après coup."
    }
   ],
   "suite": "POS-S03"
  },
  "POS-S03": {
   "id": "POS-S03",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Signer à la place d'un collègue",
   "moment": {
    "jour": "Lundi",
    "heure": "16 h",
    "canal": "oral",
    "de": "Un collègue"
   },
   "competences": [
    "C03"
   ],
   "texte": "Un collègue doit s'absenter alors qu'un courrier de réponse à un usager est prêt à partir.\n« Tu peux le signer à ma place ? Tout est prêt et l'usager attend. »\nVous n'avez jamais signé ce type de courrier.\nQue faites-vous ?\n",
   "enjeu": "Identifier les limites de ses responsabilités.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous signez : le courrier est déjà rédigé, l'usager attend, ce n'est qu'une formalité.",
     "verdicts": {
      "C03": "risque"
     },
     "consequence": "Le courrier est contesté : il porte la signature d'une personne qui n'avait pas le droit de signer."
    },
    {
     "id": "B",
     "libelle": "Vous lui dites de demander à quelqu'un d'autre dans son service, sans plus.",
     "verdicts": {
      "C03": "partiel"
     },
     "consequence": "Un autre collègue signe à sa place. Le problème a seulement changé de bureau."
    },
    {
     "id": "D",
     "libelle": "Vous déclinez : ce n'est pas à vous de signer. Vous l'orientez vers la personne qui a le droit de signer.",
     "verdicts": {
      "C03": "adapte"
     },
     "consequence": "La personne qui a le droit de signer le fait le lendemain. Le courrier part, en règle."
    }
   ],
   "suite": "POS-S04"
  },
  "POS-S04": {
   "id": "POS-S04",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Répondre au nom du service",
   "moment": {
    "jour": "Mardi",
    "heure": "9 h",
    "canal": "courriel",
    "de": "Votre responsable",
    "objet": "Réponse au partenaire — pour jeudi"
   },
   "competences": [
    "C04",
    "C18"
   ],
   "texte": "« Bonjour, pouvez-vous répondre à notre partenaire au nom du service d'ici jeudi ? Merci. »\nLe sujet est technique et vous ne le maîtrisez pas encore. Une collègue de votre équipe connaît bien le dossier.\nComment vous y prenez-vous ?\n",
   "enjeu": "Répondre au nom du service sans rester seul : s'appuyer sur un collègue, faire valider, tenir informé.",
   "options": [
    {
     "id": "B",
     "libelle": "Vous demandez les éléments à votre collègue, rédigez, faites valider par votre responsable et le mettez en copie de l'envoi.",
     "verdicts": {
      "C04": "adapte",
      "C18": "adapte"
     },
     "consequence": "Le partenaire reçoit jeudi une réponse juste et validée. Votre responsable, en copie, sait que c'est fait."
    },
    {
     "id": "C",
     "libelle": "Vous demandez les éléments à votre collègue et envoyez directement la réponse, pour gagner un jour.",
     "verdicts": {
      "C04": "risque",
      "C18": "adapte"
     },
     "consequence": "La réponse est juste, mais elle engage le service sur un délai que votre responsable n'avait pas prévu."
    },
    {
     "id": "D",
     "libelle": "Vous répondez seul, au mieux de vos connaissances, et envoyez avant jeudi.",
     "verdicts": {
      "C04": "risque",
      "C18": "inadapte"
     },
     "consequence": "Le partenaire relève une erreur et appelle votre responsable, qui découvre la réponse à ce moment-là."
    }
   ],
   "suite": "POS-S05"
  },
  "POS-S05": {
   "id": "POS-S05",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Une urgence",
   "moment": {
    "jour": "Mardi",
    "heure": "15 h",
    "canal": "oral",
    "de": "Votre responsable"
   },
   "competences": [
    "C05"
   ],
   "texte": "« J'ai besoin de ce dossier pour ce soir. » Vous aviez déjà trois tâches, dont deux à rendre demain matin.\n",
   "enjeu": "Tenir vos priorités quand une urgence arrive, et prévenir à temps.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous finissez d'abord ce qui était prévu pour demain matin, l'urgence suivra.",
     "verdicts": {
      "C05": "inadapte"
     },
     "consequence": "À 17 h, votre responsable demande où en est le dossier urgent. Il n'est pas commencé."
    },
    {
     "id": "B",
     "libelle": "Vous traitez l'urgence en priorité et décalez les deux autres sans prévenir.",
     "verdicts": {
      "C05": "risque"
     },
     "consequence": "L'urgence est traitée. Demain matin, deux personnes attendent des documents qui n'arrivent pas."
    },
    {
     "id": "C",
     "libelle": "Vous signalez que deux échéances tombent demain et convenez des priorités.",
     "verdicts": {
      "C05": "adapte"
     },
     "consequence": "Votre responsable décale une échéance et prévient le destinataire. Tout est tenu."
    }
   ],
   "suite": "POS-S06"
  },
  "POS-S06": {
   "id": "POS-S06",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Un courriel sec",
   "moment": {
    "jour": "Mercredi",
    "heure": "10 h",
    "canal": "courriel",
    "de": "Un collègue d'un autre service",
    "objet": "RE : dossier en attente"
   },
   "competences": [
    "C06"
   ],
   "texte": "« Toujours rien reçu de votre part. C'est urgent. »\nVous lui aviez pourtant répondu la semaine dernière.\n",
   "enjeu": "Adapter sa communication et maintenir une relation professionnelle malgré une tension.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous renvoyez votre réponse avec un mot courtois et proposez d'en parler.",
     "verdicts": {
      "C06": "adapte"
     },
     "consequence": "Votre collègue s'excuse : votre message était dans ses indésirables. Le dossier avance."
    },
    {
     "id": "B",
     "libelle": "Vous répondez sur le même ton, pour montrer que le reproche n'est pas fondé.",
     "verdicts": {
      "C06": "inadapte"
     },
     "consequence": "La réponse arrive sur le même ton. Le désaccord s'installe pour une pièce jointe."
    },
    {
     "id": "D",
     "libelle": "Vous répondez en mettant votre direction en copie.",
     "verdicts": {
      "C06": "risque"
     },
     "consequence": "Votre collègue se sent mis en cause devant sa hiérarchie. Les échanges suivants deviennent froids."
    }
   ],
   "suite": "POS-S07"
  },
  "POS-S07": {
   "id": "POS-S07",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "La réunion qui n'a pas eu lieu",
   "moment": {
    "jour": "Mercredi",
    "heure": "15 h",
    "canal": "reunion",
    "de": "Une collègue de l'équipe"
   },
   "competences": [
    "C07",
    "C08"
   ],
   "texte": "Une réunion entre deux services n'a pas pu se tenir : l'invitation n'a pas été envoyée.\nVotre collègue pensait que vous deviez vous en charger. Vous pensiez l'inverse. Le ton monte.\nComment réagissez-vous ?\n",
   "enjeu": "Préserver la relation et améliorer la coopération entre services.",
   "options": [
    {
     "id": "B",
     "libelle": "Vous apaisez l'échange et laissez le sujet de côté : chacun fera attention.",
     "verdicts": {
      "C07": "inadapte",
      "C08": "adapte"
     },
     "consequence": "La relation est préservée. Trois semaines plus tard, la même confusion se reproduit."
    },
    {
     "id": "C",
     "libelle": "Vous montrez que vous aviez raison, puis ajoutez « qui envoie les invitations » au tableau de l'équipe.",
     "verdicts": {
      "C07": "adapte",
      "C08": "inadapte"
     },
     "consequence": "La règle est écrite, mais votre collègue ne vous adresse plus la parole de la journée."
    },
    {
     "id": "D",
     "libelle": "Vous apaisez l'échange, puis proposez de noter dans le tableau de l'équipe qui envoie les invitations.",
     "verdicts": {
      "C07": "adapte",
      "C08": "adapte"
     },
     "consequence": "La réunion est reprogrammée. La fois suivante, l'invitation part à l'heure : c'est écrit."
    }
   ],
   "suite": "POS-S08"
  },
  "POS-S08": {
   "id": "POS-S08",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Une collègue épuisée",
   "moment": {
    "jour": "Mercredi",
    "heure": "17 h",
    "canal": "oral",
    "de": "Une collègue"
   },
   "competences": [
    "C12"
   ],
   "texte": "Depuis plusieurs semaines, votre collègue semble de plus en plus fatiguée.\nEn fin de journée, elle vous confie : « Je n'en peux plus de ce rythme. Mais je préfère que ça reste entre nous. »\nComment réagissez-vous ?\n",
   "enjeu": "Être attentif à la santé d'un collègue tout en respectant sa confiance.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous respectez sa demande : c'est sa vie privée, vous n'en parlez plus.",
     "verdicts": {
      "C12": "inadapte"
     },
     "consequence": "Deux semaines plus tard, elle est en arrêt. Personne n'avait été alerté."
    },
    {
     "id": "B",
     "libelle": "Vous l'écoutez et l'encouragez à en parler à son responsable ou au médecin de prévention.",
     "verdicts": {
      "C12": "adapte"
     },
     "consequence": "Elle prend rendez-vous la semaine suivante. Elle vous remercie de ne pas l'avoir laissée seule."
    },
    {
     "id": "D",
     "libelle": "Vous prévenez toute l'équipe, discrètement, pour que chacun la ménage dans les semaines à venir.",
     "verdicts": {
      "C12": "risque"
     },
     "consequence": "Elle se sent exposée et se ferme. Elle ne vous parle plus."
    }
   ],
   "suite": "POS-S09"
  },
  "POS-S09": {
   "id": "POS-S09",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Un outil d'IA gratuit pour gagner du temps",
   "moment": {
    "jour": "Jeudi",
    "heure": "9 h",
    "canal": "messagerie",
    "de": "Un collègue"
   },
   "competences": [
    "C10"
   ],
   "vigilance": [
    "C10"
   ],
   "texte": "Vous devez réaliser une synthèse à partir d'un tableau contenant des noms et des adresses d'usagers.\nUn collègue vous conseille :\n« J'utilise un outil d'intelligence artificielle gratuit sur Internet. Ça te ferait gagner un temps fou ! »\nQue faites-vous ?\n",
   "en_clair": "Une donnée personnelle, c'est toute information qui permet de reconnaître une personne, directement ou non : nom, adresse, téléphone, numéro de dossier…",
   "enjeu": "Protéger les données et respecter les règles d'utilisation des outils numériques définies par son employeur.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous le faites : l'outil est très utilisé et le gain est réel.",
     "verdicts": {
      "C10": "inadapte"
     },
     "consequence": "Les noms et adresses des usagers sont désormais sur des serveurs dont vous ne savez rien."
    },
    {
     "id": "B",
     "libelle": "Vous le faites après avoir retiré les noms, en gardant les adresses.",
     "verdicts": {
      "C10": "risque"
     },
     "consequence": "Une adresse suffit souvent à retrouver une personne. Les données restent exposées."
    },
    {
     "id": "C",
     "libelle": "Vous ne le faites pas et vérifiez les outils autorisés par votre employeur.",
     "verdicts": {
      "C10": "adapte"
     },
     "consequence": "On vous indique l'outil autorisé, qui garde les données chez votre employeur. La synthèse est prête à midi."
    }
   ],
   "suite": "POS-S10"
  },
  "POS-S10": {
   "id": "POS-S10",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Un nouvel outil lundi",
   "rebond": true,
   "moment": {
    "jour": "Jeudi",
    "heure": "9 h 30",
    "canal": "courriel",
    "de": "Votre responsable",
    "objet": "Nouvel outil de gestion des dossiers"
   },
   "competences": [
    "C19"
   ],
   "texte": "Votre service annonce qu'à partir de lundi, un nouvel outil sera utilisé pour gérer les dossiers.\nUne présentation d'une heure est proposée vendredi.\nQue décidez-vous ?\n",
   "enjeu": "Anticiper les changements dans son environnement professionnel.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous vous inscrivez à la présentation et repérez ce qui change pour vos dossiers en cours.",
     "verdicts": {
      "C19": "adapte"
     },
     "consequence": "Lundi, vous basculez sans perte. Vous aidez même un collègue."
    },
    {
     "id": "B",
     "libelle": "Vous continuez avec l'ancien outil tant qu'il fonctionne.",
     "verdicts": {
      "C19": "inadapte"
     },
     "consequence": "Mardi, l'ancien outil est fermé. Vos dossiers en cours sont à ressaisir."
    },
    {
     "id": "C",
     "libelle": "Vous attendez lundi pour découvrir l'outil en l'utilisant : c'est en pratiquant qu'on apprend.",
     "verdicts": {
      "C19": "partiel"
     },
     "consequence": "Vous trouvez vos repères, mais deux dossiers urgents attendent toute la matinée."
    }
   ],
   "suite": "POS-S11"
  },
  "POS-S11": {
   "id": "POS-S11",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Attester une prestation",
   "moment": {
    "jour": "Jeudi",
    "heure": "14 h",
    "canal": "appel",
    "de": "Un prestataire"
   },
   "competences": [
    "C09"
   ],
   "vigilance": [
    "C09"
   ],
   "texte": "Une entreprise est intervenue dans votre service. On vous demande de signer un document confirmant que la prestation a bien été réalisée pour permettre le traitement de la facture.\nVous n'avez pas assisté à l'intervention et l'entreprise attend son paiement.\nQue faites-vous ?\n",
   "en_clair": "L'attestation de service fait est le document signé qui permet de payer une facture. Elle porte sur une prestation : un travail, une livraison, une intervention.",
   "enjeu": "Ce que votre signature atteste : elle engage de l'argent public.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous signez : un collègue vous assure au téléphone que tout a été fait.",
     "verdicts": {
      "C09": "inadapte"
     },
     "consequence": "La facture est payée en entier. Un mois plus tard, on constate que la prestation n'était pas terminée."
    },
    {
     "id": "C",
     "libelle": "Vous refusez de signer, sans autre démarche.",
     "verdicts": {
      "C09": "partiel"
     },
     "consequence": "La facture reste bloquée. Le prestataire relance tout le monde, et personne ne sait pourquoi."
    },
    {
     "id": "D",
     "libelle": "Vous ne signez pas : vous n'avez pas assisté à l'intervention. Vous orientez le prestataire vers la personne qui a passé la commande.",
     "verdicts": {
      "C09": "adapte"
     },
     "consequence": "La personne qui a suivi la prestation peut attester ce qui a été fait. La facture est traitée sans que vous engagiez le service sur ce que vous n'avez pas vu."
    }
   ],
   "suite": "POS-S12"
  },
  "POS-S12": {
   "id": "POS-S12",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Le véhicule du service",
   "rebond": true,
   "moment": {
    "jour": "Jeudi",
    "heure": "14 h 30",
    "canal": "oral",
    "de": "Un collègue"
   },
   "competences": [
    "C11"
   ],
   "vigilance": [
    "C11"
   ],
   "texte": "Vous déménagez ce week-end et cherchez un véhicule pour transporter quelques meubles.\nUn collègue vous suggère :\n« Le véhicule du service est disponible samedi. Tu pourrais l'utiliser et refaire le plein avant lundi. »\nQue faites-vous ?\n",
   "enjeu": "Utiliser les moyens publics de manière responsable.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous l'empruntez samedi, en refaisant le plein lundi matin avant le service.",
     "verdicts": {
      "C11": "inadapte"
     },
     "consequence": "Le plein est fait, mais le véhicule a servi à un usage personnel. C'est une faute, plein ou pas."
    },
    {
     "id": "B",
     "libelle": "Vous refusez : le véhicule ne sert qu'aux missions du service.",
     "verdicts": {
      "C11": "adapte"
     },
     "consequence": "Vous louez un utilitaire. Lundi, le véhicule est à sa place."
    },
    {
     "id": "D",
     "libelle": "Vous demandez à votre collègue de le conduire pour vous.",
     "verdicts": {
      "C11": "risque"
     },
     "consequence": "Vous n'êtes plus au volant, mais vous êtes à l'origine d'un usage interdit."
    }
   ],
   "suite": "POS-S13"
  },
  "POS-S13": {
   "id": "POS-S13",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "La demande d'un proche",
   "moment": {
    "jour": "Vendredi",
    "heure": "9 h",
    "canal": "note",
    "de": "Vous"
   },
   "competences": [
    "C14"
   ],
   "vigilance": [
    "C14"
   ],
   "texte": "Parmi les dossiers que vous devez traiter ce matin, vous reconnaissez celui de votre cousine.\nComment gérez-vous cette situation ?\n",
   "enjeu": "Préserver l'impartialité du service public dans une situation professionnelle délicate.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous le traitez normalement, comme les autres, en veillant à rester impartial.",
     "verdicts": {
      "C14": "risque"
     },
     "consequence": "Votre décision est juste. Mais un autre demandeur apprend votre lien avec le dossier et la conteste."
    },
    {
     "id": "B",
     "libelle": "Vous le traitez vite pour ne pas faire attendre votre cousine.",
     "verdicts": {
      "C14": "inadapte"
     },
     "consequence": "Votre cousine a une réponse en deux jours, les autres en trois semaines. L'écart est remarqué."
    },
    {
     "id": "C",
     "libelle": "Vous le signalez à votre responsable pour confier le dossier à un collègue.",
     "verdicts": {
      "C14": "adapte"
     },
     "consequence": "Une collègue traite le dossier. Personne ne peut mettre la décision en doute."
    }
   ],
   "suite": "POS-S14"
  },
  "POS-S14": {
   "id": "POS-S14",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Passer avant les autres",
   "moment": {
    "jour": "Vendredi",
    "heure": "11 h",
    "canal": "oral",
    "de": "Un usager"
   },
   "competences": [
    "C13",
    "C16"
   ],
   "texte": "À l'accueil, un usager vous dit : « Je connais bien le directeur. Vous pouvez passer mon dossier en premier ? »\nD'autres dossiers ont été déposés avant le sien.\n",
   "enjeu": "Respecter les principes du service public tout en maintenant une relation de qualité avec l'usager.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous lui répondez sèchement que ce genre de demande ne se fait pas ici, quel que soit le directeur.",
     "verdicts": {
      "C13": "adapte",
      "C16": "inadapte"
     },
     "consequence": "Il repart furieux et écrit au directeur pour se plaindre de l'accueil."
    },
    {
     "id": "B",
     "libelle": "Vous prenez son dossier sans un mot et le passez en haut de la pile.",
     "verdicts": {
      "C13": "inadapte",
      "C16": "inadapte"
     },
     "consequence": "Il est servi sans explication. Les personnes dans la file ont tout vu."
    },
    {
     "id": "D",
     "libelle": "Vous l'écoutez, expliquez que les dossiers suivent le même ordre et lui donnez le délai prévu.",
     "verdicts": {
      "C13": "adapte",
      "C16": "adapte"
     },
     "consequence": "Il n'est pas ravi, mais il repart avec une date. Il ne revient pas réclamer."
    }
   ],
   "suite": "POS-S15"
  },
  "POS-S15": {
   "id": "POS-S15",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Trente courriers à envoyer",
   "moment": {
    "jour": "Vendredi",
    "heure": "16 h",
    "canal": "note",
    "de": "Vous"
   },
   "competences": [
    "C15",
    "C20"
   ],
   "texte": "Avant d'envoyer trente courriers de rappel, vous remarquez que le modèle utilisé comporte un ancien numéro de téléphone du service.\nC'est la troisième fois ce mois-ci que vous constatez cette erreur.\nQue faites-vous ?\n",
   "enjeu": "Contribuer à la qualité du service rendu et à son amélioration continue.",
   "options": [
    {
     "id": "A",
     "libelle": "Vous corrigez les trente courriers et proposez de mettre le modèle à jour.",
     "verdicts": {
      "C15": "adapte",
      "C20": "adapte"
     },
     "consequence": "Les usagers ont le bon numéro. Lundi, le modèle est corrigé : l'erreur ne reviendra pas."
    },
    {
     "id": "B",
     "libelle": "Vous corrigez les trente courriers, sans plus : le modèle n'est pas votre affaire.",
     "verdicts": {
      "C15": "adapte",
      "C20": "inadapte"
     },
     "consequence": "Vos courriers sont justes. Le mois prochain, un collègue en envoie cinquante avec l'ancien numéro."
    },
    {
     "id": "C",
     "libelle": "Vous envoyez les courriers tels quels et signalez le modèle à corriger pour la prochaine fois.",
     "verdicts": {
      "C15": "inadapte",
      "C20": "adapte"
     },
     "consequence": "Le modèle sera corrigé, mais cette semaine trente usagers appellent un numéro qui ne répond plus."
    }
   ],
   "suite": "POS-S16"
  },
  "POS-S16": {
   "id": "POS-S16",
   "type": "reponse-libre",
   "etape": "Positionnement",
   "titre": "Votre semaine se termine",
   "texte": "Vendredi, 17 h. Voici ce que vous avez vécu cette semaine.",
   "agenda": true,
   "garder": true,
   "competences": [
    "C21"
   ],
   "question": "Qu'est-ce qui vous a semblé le plus délicat cette semaine ? Qu'aimeriez-vous mieux maîtriser dans vos premiers mois ?",
   "apres": "Votre réponse sera reprise sur votre profil et à l'impression. La même question vous sera posée au bilan de fin de parcours : vous pourrez mesurer le chemin parcouru.",
   "mention": "Votre réponse reste sur cet appareil. Elle n'est transmise à personne.",
   "suite": "POS-PROFIL"
  },
  "POS-PROFIL": {
   "id": "POS-PROFIL",
   "type": "pos-profil",
   "etape": "Positionnement",
   "titre": "Où vous en êtes",
   "texte": "Vos choix de la semaine vous donnent un premier aperçu de vos compétences. Ce n'est pas une évaluation : quelques situations ne disent pas tout de vos compétences. Découvrez les repères que vous possédez déjà et ceux que vous pourrez développer au cours du DINA.\nNous vous conseillons de suivre les modules dans l'ordre, quel que soit votre positionnement initial. Ce positionnement ne se refait pas : imprimez-le si vous voulez le garder. Les explications des situations vécues viennent dans les modules.\n",
   "niveaux": {
    "present": "Repères présents",
    "approfondir": "À approfondir",
    "decouvrir": "À découvrir"
   },
   "vigilance": "**Point de vigilance.** Sur un sujet sensible, vous avez choisi une conduite qui comporte un risque. Le module indiqué vous donne les repères à connaître avant d'agir.\n",
   "mention": "Ce résultat n'est vu que par vous. Votre employeur n'y a pas accès.",
   "sans_vigilance": "Aucun point de vigilance sur les sujets sensibles de la semaine.",
   "blocs": [
    {
     "id": "B1",
     "titre": "Se repérer",
     "competences": [
      "C01",
      "C02"
     ],
     "module": "Module 1 — Je me repère",
     "exemple": "Savoir quelle institution est compétente quand un habitant vous pose une question.",
     "present": "Dans ces situations, vous avez trouvé le bon interlocuteur.",
     "approfondir": "Vous avez des repères sur les institutions et votre organisation. Certains restent à préciser.",
     "decouvrir": "Qui fait quoi dans le service public calédonien : c'est le point de départ du parcours."
    },
    {
     "id": "B2",
     "titre": "Se positionner et agir",
     "competences": [
      "C03",
      "C04",
      "C05"
     ],
     "module": "Module 2 — Je trouve ma place",
     "exemple": "Savoir ce qui relève de votre poste, quand demander une validation, et comment tenir une échéance quand une urgence arrive.",
     "present": "Dans ces situations, vous avez tenu votre rôle et vos priorités.",
     "approfondir": "Votre périmètre, le moment de faire valider ou de signaler un retard : certains points restent à préciser.",
     "decouvrir": "Jusqu'où agir seul et comment organiser votre travail : le module 2 vous l'apprend pas à pas."
    },
    {
     "id": "B3",
     "titre": "Coopérer",
     "competences": [
      "C06",
      "C07",
      "C08"
     ],
     "module": "Module 3 — Je travaille avec les autres",
     "exemple": "Préparer une réunion avec plusieurs organisations, choisir le bon canal, dénouer un malentendu sans conflit.",
     "present": "Dans ces situations, vous avez communiqué et coopéré de façon adaptée.",
     "approfondir": "Vos réflexes sont là. Ils restent à affiner quand la relation se tend ou que l'information circule mal.",
     "decouvrir": "Communiquer et coopérer avec d'autres services et d'autres organisations : le module 3 y est consacré."
    },
    {
     "id": "B4",
     "titre": "Agir dans un cadre sécurisé",
     "competences": [
      "C09",
      "C10",
      "C11",
      "C12"
     ],
     "module": "Module 4 — J'agis dans un cadre sécurisé",
     "exemple": "Protéger les données des habitants, utiliser les moyens publics à bon escient, savoir qui alerter quand un collègue va mal.",
     "present": "Dans ces situations, vous avez repéré la règle et le risque.",
     "approfondir": "Certains réflexes de sécurité restent à consolider.",
     "decouvrir": "Les règles qui sécurisent votre activité, les données, les moyens publics et les personnes : le module 4 les présente."
    },
    {
     "id": "B5",
     "titre": "Servir l'intérêt général",
     "competences": [
      "C13",
      "C14",
      "C15",
      "C16"
     ],
     "module": "Module 5 — J'incarne le service public",
     "exemple": "Accueillir chaque usager avec les mêmes règles, réagir quand un proche est concerné par un dossier, vérifier avant de transmettre.",
     "present": "Dans ces situations, vos choix respectent les principes du service public.",
     "approfondir": "Vos repères sont là. Ils restent à affermir face aux situations délicates.",
     "decouvrir": "Les principes du service public dans les gestes du quotidien : le module 5 les met en situation."
    },
    {
     "id": "B6",
     "titre": "Gagner en autonomie",
     "competences": [
      "C17",
      "C18",
      "C19",
      "C20"
     ],
     "module": "Tout au long du parcours DINA, et au bilan de fin de parcours",
     "exemple": "Vérifier une source, demander de l'aide au bon moment, s'adapter à un changement, proposer une amélioration.",
     "present": "Dans ces situations, vous avez su vérifier, demander de l'aide et proposer une amélioration.",
     "approfondir": "Vérifier une information, solliciter un appui, faire évoluer une pratique : certains réflexes restent à installer.",
     "decouvrir": "Ces réflexes d'autonomie se construisent dans chaque module. Le bilan de fin de parcours vous aidera à mesurer vos progrès."
    }
   ],
   "suite": "POS-SUITE"
  },
  "POS-SUITE": {
   "id": "POS-SUITE",
   "type": "pos-suite",
   "etape": "Positionnement",
   "titre": "Votre parcours",
   "texte": "Il est maintenant temps de faire connaissance avec **Noa** et ses collègues de l'**ÉLAN**.\nÀ leurs côtés, vous allez vivre de nouvelles situations professionnelles, faire des choix et acquérir des repères utiles pour votre propre poste.\n",
   "parcours_titre": "Votre parcours, étape par étape",
   "parcours_texte": "Nous vous conseillons de suivre les étapes dans l'ordre, quel que soit votre positionnement initial. Pour chaque module, vous retrouvez votre résultat dans le domaine qu'il travaille. Prêt à rejoindre Noa ?",
   "parcours": [
    {
     "code": "Prologue",
     "titre": "Bienvenue à l'ÉLAN",
     "texte": "Vous faites connaissance avec Noa et ses collègues."
    },
    {
     "code": "M1",
     "titre": "Je me repère",
     "texte": "Comprendre mon environnement : qui fait quoi au pays, qui décide dans mon organisation.",
     "bloc": "B1"
    },
    {
     "code": "M2",
     "titre": "Je trouve ma place",
     "texte": "Mon rôle, mes limites, mes priorités.",
     "bloc": "B2"
    },
    {
     "code": "M3",
     "titre": "Je travaille avec les autres",
     "texte": "Communiquer et coopérer, y compris quand la relation se tend.",
     "bloc": "B3"
    },
    {
     "code": "M4",
     "titre": "J'agis dans un cadre sécurisé",
     "texte": "Les règles, les données, les moyens publics, la santé et la sécurité.",
     "bloc": "B4"
    },
    {
     "code": "M5",
     "titre": "J'incarne le service public",
     "texte": "Les principes du service public dans les gestes du quotidien.",
     "bloc": "B5"
    },
    {
     "code": "Bilan",
     "titre": "Bilan de parcours",
     "texte": "Vous mesurez le chemin parcouru et retrouvez votre réponse de fin de semaine.",
     "bloc": "B6"
    }
   ],
   "suite": "ACCUEIL"
  }
 },
 "fiches": {},
 "illustrations": {
  "ILL-POS1": {
   "scene": "Lundi 7 h 45, un bureau de service public calédonien avant l'arrivée de l'agent (scène)",
   "personnages": "—",
   "alt": "Lundi matin, un bureau dans un service public calédonien. Personne encore : un café fume, l'ordinateur est allumé, l'agenda de la semaine est ouvert, un flamboyant en fleurs derrière les nacos."
  },
  "ILL-POS2": {
   "scene": "Vendredi 17 h, le même bureau rangé (bandeau)",
   "personnages": "—",
   "alt": "Vendredi en fin d'après-midi, le même bureau rangé. L'ordinateur est fermé, l'agenda montre une semaine remplie, le sac est prêt."
  }
 },
 "source": "Storyboard — positionnement v0.9.md"
};
