/* GÉNÉRÉ par build/build.py depuis « Storyboard — positionnement v0.4.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "POS",
  "type": "module",
  "code": "Positionnement",
  "titre": "Votre première semaine",
  "duree": "20 à 25 min",
  "sans_menu": true,
  "page_suivante": {
   "href": "prologue.html",
   "libelle": "Bienvenue à ÉLAN"
  },
  "sections": [
   {
    "id": "pos",
    "libelle": "Positionnement",
    "titre": "Votre première semaine",
    "debut": "POS-INTRO",
    "duree": "20 à 25 min"
   }
  ]
 },
 "ecrans": {
  "POS-INTRO": {
   "id": "POS-INTRO",
   "type": "narration",
   "etape": "Positionnement",
   "titre": "Votre première semaine",
   "texte": "Imaginez votre première semaine dans un service public calédonien : messages, appels, guichet, collègues.\nPour chaque situation, choisissez ce que vous feriez, puis voyez ce qui se passe.\nPas de note, rien n'est validé. À la fin, vous voyez où vous en êtes et le module où chaque sujet sera travaillé.\nVotre employeur n'a pas accès à vos réponses.\n",
   "a_retenir": "Version de démonstration : contenus non validés par un expert, réponses non enregistrées.",
   "suite": "POS-S01"
  },
  "POS-S01": {
   "id": "POS-S01",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Un ami et ses congés",
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
   "texte": "« Toi qui travailles dans l'administration : mon patron refuse mes congés payés. Je me renseigne où ? »\nVotre ami est salarié d'une entreprise privée à Nouméa.\n",
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
     "id": "B",
     "libelle": "Poste ta question sur un forum, et passe à la province si besoin.",
     "verdicts": {
      "C01": "inadapte",
      "C17": "inadapte"
     },
     "consequence": "Il lit des avis contradictoires, puis fait la queue à la province, qui le renvoie ailleurs."
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
   "texte": "Vous voulez suivre une formation utile à votre poste. Personne ne vous a dit à qui adresser la demande.\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous écrivez au directeur général : c'est lui qui décide des formations.",
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
    },
    {
     "id": "D",
     "libelle": "Vous attendez que le service des ressources humaines vous contacte à ce sujet.",
     "verdicts": {
      "C02": "inadapte"
     },
     "consequence": "Personne ne vous contacte. Quand vous relancez, la session est complète."
    }
   ],
   "suite": "POS-S03"
  },
  "POS-S03": {
   "id": "POS-S03",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Une signature à votre place",
   "moment": {
    "jour": "Lundi",
    "heure": "16 h",
    "canal": "oral",
    "de": "Un collègue du service voisin"
   },
   "competences": [
    "C03"
   ],
   "texte": "« Je suis débordé. Tu peux signer ce courrier de réponse à un usager à ma place ? Il est déjà rédigé. »\n",
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
     "id": "C",
     "libelle": "Vous reprenez le dossier pour le traiter vous-même, de bout en bout, afin de le soulager vraiment.",
     "verdicts": {
      "C03": "inadapte"
     },
     "consequence": "Vous passez l'après-midi sur le dossier d'un autre service. Le vôtre prend du retard."
    },
    {
     "id": "D",
     "libelle": "Vous déclinez : ce n'est pas à vous de signer. Vous l'orientez vers la personne habilitée.",
     "verdicts": {
      "C03": "adapte"
     },
     "consequence": "La personne habilitée signe le lendemain. Le courrier part, en règle."
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
    "de": "Votre responsable"
   },
   "competences": [
    "C04",
    "C18"
   ],
   "texte": "« Pouvez-vous répondre au partenaire au nom du service ? Réponse attendue jeudi. »\nLe sujet est technique et vous ne le maîtrisez pas encore. Une collègue de l'équipe le connaît bien.\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous rédigez seul à partir de ce que vous trouvez, puis faites valider avant l'envoi.",
     "verdicts": {
      "C04": "adapte",
      "C18": "partiel"
     },
     "consequence": "Votre responsable corrige deux erreurs techniques avant l'envoi. La réponse part avec un jour de retard."
    },
    {
     "id": "B",
     "libelle": "Vous demandez les éléments à votre collègue, rédigez, puis faites valider avant l'envoi.",
     "verdicts": {
      "C04": "adapte",
      "C18": "adapte"
     },
     "consequence": "Le partenaire reçoit jeudi une réponse juste et validée."
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
    },
    {
     "id": "D",
     "libelle": "Vous avancez un peu chaque tâche pour ne rien laisser de côté.",
     "verdicts": {
      "C05": "inadapte"
     },
     "consequence": "Le soir, trois tâches sont entamées. Aucune n'est terminée."
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
    "de": "Un collègue d'un autre service"
   },
   "competences": [
    "C06"
   ],
   "texte": "« Toujours rien reçu de votre part. C'est urgent. »\nVous lui aviez pourtant répondu la semaine dernière.\n",
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
     "id": "C",
     "libelle": "Vous ne répondez pas : vous avez déjà fait votre part.",
     "verdicts": {
      "C06": "risque"
     },
     "consequence": "Votre collègue relance votre responsable. On vous reproche un retard qui n'en est pas un."
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
   "texte": "La réunion n'a pas pu se tenir : l'invitation n'est pas partie. Votre collègue estime que c'était à vous de l'envoyer. Vous pensiez l'inverse. Le ton monte.\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous montrez les échanges qui prouvent que vous aviez raison, et en restez là.",
     "verdicts": {
      "C07": "inadapte",
      "C08": "inadapte"
     },
     "consequence": "Vous aviez raison. La réunion n'a toujours pas de date, et l'ambiance est tendue."
    },
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
   "texte": "Depuis plusieurs semaines, votre collègue semble à bout. Ce soir, elle vous dit : « Je n'en peux plus de ce rythme. Mais n'en parle à personne. »\n",
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
     "libelle": "Vous l'écoutez et l'encouragez à en parler à son responsable ou à la médecine de prévention.",
     "verdicts": {
      "C12": "adapte"
     },
     "consequence": "Elle prend rendez-vous la semaine suivante. Elle vous remercie de ne pas l'avoir laissée seule."
    },
    {
     "id": "C",
     "libelle": "Vous proposez de l'aider à rattraper ses dossiers en retard.",
     "verdicts": {
      "C12": "partiel"
     },
     "consequence": "Son retard diminue, mais la fatigue reste. Rien n'a changé sur le fond."
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
   "titre": "Un outil d'IA gratuit",
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
   "texte": "« Colle le tableau des usagers dans un outil d'IA gratuit en ligne, il te fait la synthèse en deux minutes. »\nLe tableau contient des noms et des adresses.\n",
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
    },
    {
     "id": "D",
     "libelle": "Vous le faites depuis votre ordinateur personnel, hors du réseau de votre employeur.",
     "verdicts": {
      "C10": "inadapte"
     },
     "consequence": "Les données sortent du système de votre employeur, sur un appareil qu'il ne protège pas."
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
    "de": "Votre responsable"
   },
   "competences": [
    "C19"
   ],
   "texte": "« À partir de lundi, le service passe à un nouvel outil de gestion des dossiers. Une présentation d'une heure est proposée vendredi. »\n",
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
    },
    {
     "id": "D",
     "libelle": "Vous demandez à garder l'ancien outil, qui vous convenait très bien.",
     "verdicts": {
      "C19": "inadapte"
     },
     "consequence": "Votre demande n'aboutit pas, et vous démarrez lundi avec un temps de retard."
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
   "texte": "On vous demande de signer l'attestation de service fait d'une prestation que vous n'avez pas constatée. Le prestataire insiste : sa facture doit partir aujourd'hui.\n",
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
     "id": "B",
     "libelle": "Vous signez en ajoutant la mention « sous réserve ».",
     "verdicts": {
      "C09": "risque"
     },
     "consequence": "La mention ne protège rien : la facture part au paiement comme si tout était fait."
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
     "libelle": "Vous vérifiez la réalisation avant de signer et signalez le retard.",
     "verdicts": {
      "C09": "adapte"
     },
     "consequence": "La prestation n'est faite qu'à moitié. La facture est ajustée avant le paiement."
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
   "texte": "« Le véhicule de service ne sort pas le week-end. Prends-le samedi pour ton déménagement, personne ne verra rien. »\n",
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
     "id": "C",
     "libelle": "Vous l'empruntez une heure seulement, le temps du gros meuble.",
     "verdicts": {
      "C11": "inadapte"
     },
     "consequence": "Une heure ou un week-end : l'usage reste personnel, et le véhicule n'est pas assuré pour cela."
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
   "titre": "Un dossier familial",
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
   "texte": "Un membre de votre famille a déposé une demande. C'est vous qui êtes chargé de l'instruire.\n",
   "options": [
    {
     "id": "A",
     "libelle": "Vous l'instruisez normalement, comme les autres, en veillant à rester impartial.",
     "verdicts": {
      "C14": "risque"
     },
     "consequence": "Votre décision est juste. Mais un autre demandeur apprend votre lien avec le dossier et la conteste."
    },
    {
     "id": "B",
     "libelle": "Vous l'instruisez vite pour ne pas faire attendre votre proche.",
     "verdicts": {
      "C14": "inadapte"
     },
     "consequence": "Votre proche a une réponse en deux jours, les autres en trois semaines. L'écart est remarqué."
    },
    {
     "id": "C",
     "libelle": "Vous le signalez à votre responsable pour confier le dossier à un collègue.",
     "verdicts": {
      "C14": "adapte"
     },
     "consequence": "Une collègue instruit le dossier. Personne ne peut mettre la décision en doute."
    },
    {
     "id": "D",
     "libelle": "Vous mettez le dossier de côté sans en parler.",
     "verdicts": {
      "C14": "inadapte"
     },
     "consequence": "Le dossier dépasse le délai. Votre proche relance, et le service découvre la situation."
    }
   ],
   "suite": "POS-S14"
  },
  "POS-S14": {
   "id": "POS-S14",
   "type": "pos-item",
   "etape": "Positionnement",
   "titre": "Au guichet",
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
   "texte": "« Je connais bien le directeur. Vous pouvez passer mon dossier en premier ? »\nD'autres dossiers ont été déposés avant le sien.\n",
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
     "id": "C",
     "libelle": "Vous l'écoutez avec attention et, pour le rassurer, promettez de traiter son dossier aujourd'hui.",
     "verdicts": {
      "C13": "inadapte",
      "C16": "partiel"
     },
     "consequence": "Son dossier passe devant les autres. Le lendemain, un usager qui attendait depuis un mois s'en aperçoit."
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
   "titre": "Trente courriers",
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
   "texte": "Avant de mettre sous enveloppe trente courriers de rappel, vous remarquez que le modèle donne un ancien numéro de téléphone du service. C'est la troisième fois ce mois-ci.\n",
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
    },
    {
     "id": "D",
     "libelle": "Vous envoyez les courriers tels quels : les usagers trouveront le bon numéro.",
     "verdicts": {
      "C15": "inadapte",
      "C20": "inadapte"
     },
     "consequence": "L'accueil reçoit des appels égarés toute la semaine, et le modèle reste faux."
    }
   ],
   "suite": "POS-S16"
  },
  "POS-S16": {
   "id": "POS-S16",
   "type": "reponse-libre",
   "etape": "Positionnement",
   "titre": "Votre semaine se termine",
   "competences": [
    "C21"
   ],
   "question": "Qu'est-ce qui vous a semblé le plus délicat cette semaine ? Qu'aimeriez-vous mieux maîtriser dans vos premiers mois ?",
   "apres": "Gardez cette réponse en tête : la même question vous sera posée au bilan de fin de parcours. Vous pourrez mesurer le chemin parcouru.",
   "mention": "Votre réponse reste sur cet écran. Elle n'est transmise à personne.",
   "suite": "POS-PROFIL"
  },
  "POS-PROFIL": {
   "id": "POS-PROFIL",
   "type": "pos-profil",
   "etape": "Positionnement",
   "titre": "Où vous en êtes",
   "texte": "Voici ce que montrent vos choix de la semaine. Ce n'est pas une note et rien n'est validé : quelques situations par domaine ne disent pas tout de vos compétences.\nVous suivrez tous les modules, dans l'ordre. Pour chaque domaine, vous voyez où il sera travaillé, avec un exemple.\n",
   "niveaux": {
    "present": "Repères présents",
    "approfondir": "À approfondir",
    "decouvrir": "À découvrir"
   },
   "vigilance": "**Point de vigilance.** Sur un sujet sensible, vous avez choisi une conduite qui comporte un risque. Le module indiqué vous donne les repères à connaître avant d'agir.\n",
   "mention": "Ce résultat n'est vu que par vous. Votre employeur n'y a pas accès.",
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
     "module": "Tout au long du parcours, et au bilan de fin de parcours",
     "exemple": "Vérifier une source, demander de l'aide au bon moment, s'adapter à un changement, proposer une amélioration.",
     "present": "Dans ces situations, vous avez su vérifier, demander de l'aide et proposer une amélioration.",
     "approfondir": "Vérifier une information, solliciter un appui, faire évoluer une pratique : certains réflexes restent à installer.",
     "decouvrir": "Ces réflexes d'autonomie se construisent dans chaque module. Le bilan de fin de parcours vous aidera à mesurer vos progrès."
    }
   ],
   "suite": "ACCUEIL"
  }
 },
 "fiches": {},
 "illustrations": {},
 "source": "Storyboard — positionnement v0.4.md"
};
