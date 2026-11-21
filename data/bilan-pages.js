/* GÉNÉRÉ par build/build.py depuis « Storyboard — Bilan de parcours en pages v0.1.md » — ne pas modifier à la main. */
window.DINA_DATA = {
 "module": {
  "id": "BIL-PAGES",
  "type": "module",
  "cle": "bilan-pages",
  "titre": "Mon bilan",
  "code": "Bilan",
  "duree": "20 min environ",
  "intro": "Bilan de votre parcours. Trois mois plus tard, Noa présente à Ariane ce qu'il retient du dossier Passerelles. À votre tour de mesurer le chemin parcouru : revenir sur ce que vous avez appris, accueillir un retour, choisir une chose à faire autrement.",
  "sections": [
   {
    "id": "parcours",
    "libelle": "Le chemin parcouru",
    "titre": "Trois mois plus tard",
    "savoir": "Faire le point sur le parcours",
    "accroche": "Noa présente à Ariane ce qu'il retient du dossier Passerelles.",
    "debut": "BIL-P1",
    "duree": "6 min"
   },
   {
    "id": "recul",
    "libelle": "Prendre du recul",
    "titre": "Analyser, recevoir un retour, progresser",
    "savoir": "Prendre du recul sur sa pratique",
    "accroche": "Ce qui a marché, ce qui a coûté du temps, ce que Samuel en dit.",
    "debut": "BIL-P2",
    "duree": "5 min"
   },
   {
    "id": "eval",
    "libelle": "Évaluation",
    "titre": "L'évaluation",
    "savoir": "L'évaluation du bilan",
    "debut": "BIL-EVA-INTRO",
    "duree": "7 min",
    "accroche": "Six situations nouvelles pour vérifier votre recul."
   },
   {
    "id": "sortie",
    "libelle": "Bilan",
    "etiquette": "Mon plan",
    "titre": "Mon plan de progrès",
    "savoir": "Ce que je retiens et ce que je fais ensuite",
    "debut": "BIL-SOR-1",
    "duree": "3 min",
    "accroche": "Ce que vous retenez, et une chose à faire autrement."
   }
  ],
  "hub": {
   "href": "index.html",
   "libelle": "Retour à l'accueil du prototype"
  },
  "personnages": {
   "Noa": "Chargé d'études et d'appui aux projets, l'ÉLAN",
   "Ariane": "Directrice de l'ÉLAN",
   "Samuel": "Responsable du pôle études et projets, l'ÉLAN",
   "Malia": "Chargée d'études, marraine de Noa, l'ÉLAN",
   "Ana": "Pôle ressources et administration, l'ÉLAN",
   "Cédric": "Accueil et logistique, l'ÉLAN",
   "Joël": "Coordinateur de terrain, association Passerelles",
   "Teiva": "Médiateur numérique, association Passerelles",
   "Léna": "Chargée d'études statistiques, administration provinciale",
   "Élise": "Agente d'accueil, une commune"
  }
 },
 "ecrans": {
  "BIL-P1": {
   "id": "BIL-P1",
   "type": "page",
   "etape": "Le chemin parcouru",
   "titre": "Trois mois plus tard",
   "chapeau": "Salle de réunion de l'ÉLAN. Noa présente à Ariane, Samuel et Malia ce qu'il retient du dossier Passerelles. Vous revenez avec lui sur les cinq semaines.",
   "competences": [
    "C21"
   ],
   "competences_lib": [
    {
     "code": "C21",
     "libelle": "Je prends du recul sur ma pratique et je développe mes compétences."
    }
   ],
   "phases": [
    "situation",
    "apport"
   ],
   "bouton_fin": "Continuer",
   "suite": "BIL-P2",
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Le retour d'expérience",
     "illustration": "ILL-B1",
     "texte": "Trois mois ont passé depuis la première permanence de Passerelles. Ariane a réuni Samuel, Malia et Noa pour un retour d'expérience sur le dossier, de la première demande à la permanence.\n\nNoa a préparé quelques notes.",
     "repliques": [
      {
       "personnage": "Ariane",
       "didascalie": "Ariane ouvre la réunion",
       "canal": "reunion",
       "texte": "« Noa, vous avez suivi ce dossier du début à la fin. Qu'en retenez-vous ? Commencez par ce qui a marché. »"
      },
      {
       "personnage": "Noa",
       "didascalie": "Noa tourne les pages de son carnet",
       "canal": "reunion",
       "texte": "« Cinq semaines de travail, cinq thèmes différents. Je vais reprendre dans l'ordre ce que j'ai appris. »"
      }
     ]
    },
    {
     "type": "cartes",
     "phase": "apport",
     "titre": "Cinq semaines, cinq repères",
     "texte": "Noa remonte le fil du dossier. À chaque semaine, ce qu'il savait faire en plus.",
     "consigne": "Cliquez sur chaque carte.",
     "cartes": [
      {
       "icone": "i-equipe",
       "recto": "Semaine 1 · Je me repère",
       "verso": "Qui fait quoi en Nouvelle-Calédonie, qui décide à l'ÉLAN, comment vérifier une information et la transmettre avec son contexte."
      },
      {
       "icone": "i-semaine",
       "recto": "Semaine 2 · Je trouve ma place",
       "verso": "Ce qui relève de mon poste, jusqu'où agir seul, quand demander un appui, quand prévenir qu'une échéance glisse."
      },
      {
       "icone": "i-dialogue",
       "recto": "Semaine 3 · Je travaille avec les autres",
       "verso": "Choisir le bon canal, dire à chacun ce qu'il doit faire ou savoir, désamorcer un malentendu, s'adapter quand ça change."
      },
      {
       "icone": "i-cadenas",
       "recto": "Semaine 4 · J'agis dans un cadre sécurisé",
       "verso": "Chercher la règle à jour, protéger l'information des personnes, ne pas engager une dépense, sécuriser et alerter."
      },
      {
       "icone": "i-medaille",
       "recto": "Semaine 5 · J'incarne le service public",
       "verso": "Accueillir chacun avec les mêmes égards, garder sa réserve, signaler un lien d'intérêt, partir des faits pour améliorer."
      }
     ],
     "encadre": "Le dossier Passerelles a avancé en même temps que Noa : de la demande qualifiée à la première permanence."
    }
   ]
  },
  "BIL-P2": {
   "id": "BIL-P2",
   "type": "page",
   "etape": "Prendre du recul",
   "titre": "Analyser, recevoir un retour, progresser",
   "chapeau": "Noa raconte ce qui a marché et ce qui lui a coûté du temps. Samuel lui fait un retour. Puis c'est à vous de choisir une chose à faire autrement.",
   "competences": [
    "C21"
   ],
   "competences_lib": [
    {
     "code": "C21",
     "libelle": "Je prends du recul sur ma pratique et je développe mes compétences."
    }
   ],
   "phases": [
    "situation",
    "apport",
    "application"
   ],
   "libelles_phases": {
    "situation": "Le retour de Noa",
    "apport": "Trois gestes",
    "application": "Et vous ?"
   },
   "bouton_fin": "Terminer cette étape",
   "suite": "BIL-P2-FIN",
   "blocs": [
    {
     "type": "recit",
     "phase": "situation",
     "titre": "Ce que Noa raconte",
     "texte": "Noa n'a pas préparé un discours. Il a préparé trois choses : ce qui a marché, ce qui lui a coûté du temps, et ce qu'il fera autrement.",
     "repliques": [
      {
       "personnage": "Noa",
       "didascalie": "Noa lit ses notes",
       "canal": "reunion",
       "texte": "« Ce qui a marché : jeudi de la deuxième semaine, j'ai prévenu Samuel dès que la note de cadrage a glissé. Il a pu s'organiser. »"
      },
      {
       "personnage": "Noa",
       "didascalie": "Noa poursuit",
       "canal": "reunion",
       "texte": "« Ce qui m'a coûté du temps : le mercredi, j'ai cherché trop longtemps seul avec l'accès refusé. La prochaine fois, je m'arrête plus tôt et je demande. »"
      },
      {
       "personnage": "Samuel",
       "didascalie": "Samuel prend la parole",
       "canal": "reunion",
       "texte": "« Tes comptes rendus sont clairs. Ce qui manque encore : dire plus tôt ce qui reste incertain. Je préfère le savoir mardi que jeudi. »"
      },
      {
       "personnage": "Noa",
       "didascalie": "Noa note la remarque",
       "canal": "reunion",
       "texte": "« Merci. Je note : l'incertain, je le dis dès le début du compte rendu. »"
      }
     ]
    },
    {
     "type": "apport",
     "phase": "apport",
     "titre": "Trois gestes pour prendre du recul",
     "texte": "**Regarder ce qui s'est passé.** Ce qui a marché, ce qui a coûté du temps, ce que j'en retiens. Une erreur est une information, pas un jugement.\n\n**Accueillir un retour.** Je l'écoute jusqu'au bout, je demande un exemple, je remercie. Je n'ai pas à me justifier tout de suite. Et je demande moi-même un retour : à mon responsable, à un collègue.\n\n**Choisir un seul axe de progrès.** Concret, pour la semaine prochaine, avec une ressource pour m'aider : une fiche de mon carnet, un collègue, mon responsable, le référent formation de mon employeur, une formation de l'IFAP.",
     "a_retenir": "Prendre du recul, ce n'est pas se juger : c'est choisir une chose à faire autrement."
    },
    {
     "type": "reflexion",
     "id": "BIL-P2-AXE",
     "phase": "application",
     "titre": "Votre axe de progrès",
     "question": "Une chose que je voudrais faire autrement dans mon travail, et ce qui m'aiderait à y arriver (une fiche, un collègue, une formation) :",
     "apres": "Notez-la dans votre agenda ou votre carnet : c'est ainsi qu'elle devient une habitude.",
     "mention": "Votre réponse, c'est entre vous et votre écran !"
    }
   ]
  },
  "BIL-P2-FIN": {
   "id": "BIL-P2-FIN",
   "type": "fin-section",
   "etape": "Prendre du recul",
   "surtitre": "Bilan de l'étape",
   "titre": "Le recul de Noa",
   "acquis": [
    {
     "titre": "Regarder ce qui s'est passé",
     "texte": "Ce qui a marché, ce qui a coûté du temps, ce qu'on en retient."
    },
    {
     "titre": "Accueillir un retour",
     "texte": "Écouter jusqu'au bout, demander un exemple, remercier."
    },
    {
     "titre": "Choisir un axe de progrès",
     "texte": "Une seule chose, concrète, avec une ressource pour m'aider."
    }
   ],
   "dossier": "Le retour d'expérience clôt le dossier Passerelles : Ariane en retient ce que Noa a appris, pas seulement ce que l'ÉLAN a livré.",
   "suite": "MENU"
  },
  "BIL-EVA-INTRO": {
   "id": "BIL-EVA-INTRO",
   "type": "narration",
   "etape": "Évaluation",
   "titre": "Six situations nouvelles",
   "texte": "Six situations nouvelles, deux par repère. Bilan réussi avec 5 réponses justes sur 6, dont une au moins par repère.\nSinon, une seconde tentative vous est proposée sur d'autres situations, quand vous voulez. Réussie ou non, votre parcours reste ouvert.\n",
   "suite": "BIL-EVA-E1A"
  },
  "BIL-EVA-E1A": {
   "id": "BIL-EVA-E1A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Ana",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Ana a organisé une réunion d'équipe de deux heures. Les deux décisions importantes n'ont été prises qu'à la fin, quand la moitié des personnes était déjà partie. Le soir, elle repense à la réunion.\n\nQue fait Ana ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Elle note ce qui a marché (l'ordre du jour envoyé la veille), ce qui a posé problème (les décisions arrivées trop tard) et une chose à changer : les mettre en premier.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Elle se dit que la réunion était trop longue et qu'elle n'en organisera plus.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Elle estime que l'essentiel a été traité, même tardivement, et passe à autre chose.",
     "verdict": "inadapte"
    }
   ],
   "suite": "BIL-EVA-E1A2",
   "note_expert": "C21-SF1 (analyser une situation vécue), SF2 (ce qui a fonctionné, ce qui peut être amélioré). Ana nomme ce qui a marché, ce qui a posé problème et un changement concret. « Plus de réunions » tire une conclusion trop large : ce n'est pas un axe. Passer à autre chose, c'est ne rien apprendre. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E1A2": {
   "id": "BIL-EVA-E1A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Cédric",
   "preuve": "E1",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Cédric a réservé le pick-up du service pour un déplacement, mais s'est trompé de date : le véhicule n'était pas libre et la visite a été décalée. Son responsable ne lui a rien reproché.\n\nQue fait Cédric ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il s'excuse auprès de tous et décide de ne plus faire aucune réservation tout seul.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Il considère que ce n'est pas grave, puisque personne ne lui a rien reproché.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Il cherche d'où vient l'erreur (une date recopiée de mémoire) et vérifie désormais l'agenda partagé avant de confirmer.",
     "verdict": "adapte"
    }
   ],
   "suite": "BIL-EVA-E2A",
   "note_expert": "C21-SF3 (tirer un enseignement d'une erreur). Cédric trouve la cause et se donne un geste simple pour l'éviter. Renoncer à réserver évite l'erreur sans rien apprendre ; l'absence de reproche ne veut pas dire qu'il n'y a rien à retenir. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E2A": {
   "id": "BIL-EVA-E2A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Léna",
   "preuve": "E2",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Léna présente ses résultats à sa responsable, qui lui dit : « Tes chiffres sont solides, mais je ne comprends pas ta troisième diapositive. » Léna a passé une soirée dessus.\n\nQue fait Léna ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Elle explique en détail pourquoi la diapositive est construite ainsi, pour que sa responsable comprenne.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Elle demande à sa responsable ce qui n'est pas clair pour elle, note ses remarques et reformule la diapositive.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle garde la diapositive : sa responsable est la seule à ne pas la comprendre.",
     "verdict": "inadapte"
    }
   ],
   "suite": "BIL-EVA-E2A2",
   "note_expert": "C21-SF4 (demander et recevoir un feedback), C21-SE3 (ouverture au feedback). Léna écoute, précise ce qui bloque et reformule. Se justifier tout de suite ferme l'échange ; écarter la remarque est une fin de non-recevoir. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E2A2": {
   "id": "BIL-EVA-E2A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Teiva",
   "preuve": "E2",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Teiva aide des habitants à faire leurs démarches en ligne. Joël lui dit : « Tu vas trop vite quand tu expliques. Les gens n'osent pas te dire qu'ils n'ont pas suivi. » Teiva pensait avoir été clair.\n\nQue fait Teiva ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il remercie Joël, lui demande de l'observer à la prochaine permanence, et fait répéter les habitants à leur façon.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Il ralentit un peu à la prochaine permanence, sans demander à Joël ce qu'il a observé exactement.",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Il explique à Joël qu'il a toujours expliqué ainsi, sans que personne s'en plaigne.",
     "verdict": "inadapte"
    }
   ],
   "suite": "BIL-EVA-E3A",
   "note_expert": "C21-SF4 (recevoir un feedback), C21-SE2 (humilité professionnelle). Teiva remercie, demande un regard extérieur précis et vérifie que l'explication passe. Ralentir sans comprendre ce que Joël a vu est une demi-réponse ; se défendre sur l'habitude est inadapté. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E3A": {
   "id": "BIL-EVA-E3A",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E3",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Malia doit désormais animer des réunions avec trois organisations, ce qu'elle n'a jamais fait. Elle se sent peu à l'aise.\n\nQue fait Malia ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Elle prépare très soigneusement chaque réunion, en espérant que l'aisance viendra avec la pratique.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Elle évite d'en parler : on pourrait penser qu'elle n'est pas à la hauteur.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Elle repère ce qui la gêne (conduire les échanges), en parle à Samuel et cherche une ressource : une fiche, un collègue qui anime, une formation.",
     "verdict": "adapte"
    }
   ],
   "suite": "BIL-EVA-E3A2",
   "note_expert": "C21-SF5 (identifier un besoin de développement), SF6 (rechercher une ressource). Malia nomme son besoin, le dit et cherche un appui. Se préparer seule peut aider mais n'identifie pas le besoin ; le taire prive de toute aide. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E3A2": {
   "id": "BIL-EVA-E3A2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Élise",
   "preuve": "E3",
   "variante": "A",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Élise, agente d'accueil, constate qu'elle a du mal à expliquer les démarches en ligne aux habitants peu à l'aise avec l'ordinateur. Elle voudrait progresser.\n\nQue fait Élise ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Elle renvoie les habitants vers le site en leur disant que tout y est expliqué.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle note les démarches où elle bloque, puis demande à son responsable ou au référent formation quelle formation ou quel collègue peut l'aider.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Elle s'inscrit à la première formation numérique qu'elle trouve, sans vérifier qu'elle répond à son besoin.",
     "verdict": "risque"
    }
   ],
   "suite": "BIL-EVA-RES",
   "note_expert": "C21-SF5, SF6. Élise précise le besoin (quelles démarches) et cherche une ressource adaptée auprès de la bonne personne. S'inscrire au hasard ne répond pas forcément au besoin ; renvoyer vers le site, c'est contourner la difficulté. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E1B": {
   "id": "BIL-EVA-E1B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Joël",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Joël a coordonné une permanence : seuls quatre habitants sont venus sur vingt attendus. Le soir, il fait le point.\n\nQue fait Joël ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il conclut que les habitants ne sont pas intéressés par ce que propose Passerelles.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Il note ce qui a fonctionné (l'accueil), ce qui a manqué (l'information donnée trop tard dans la commune) et ce qu'il change : prévenir plus tôt.",
     "verdict": "adapte"
    },
    {
     "id": "C",
     "libelle": "Il attribue le résultat à la météo et passe à la permanence suivante sans rien noter.",
     "verdict": "inadapte"
    }
   ],
   "suite": "BIL-EVA-E1B2",
   "note_expert": "C21-SF1, SF2. Joël distingue ce qui a marché, ce qui a manqué, et décide d'un changement concret. Conclure sur le désintérêt des habitants généralise sans preuve ; tout mettre sur la météo évite l'analyse. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E1B2": {
   "id": "BIL-EVA-E1B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Élise",
   "preuve": "E1",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Élise a donné à un habitant une information que la mairie avait modifiée la semaine précédente. L'habitant est revenu, mécontent.\n\nQue fait Élise ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Elle s'excuse, corrige l'information, et décide de vérifier la date de ce qu'elle transmet avant de répondre.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Elle explique qu'elle a donné l'information qu'on lui avait donnée, et que ce n'est pas sa faute.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Elle s'excuse et renvoie désormais tous les habitants vers sa collègue pour ce type de question.",
     "verdict": "risque"
    }
   ],
   "suite": "BIL-EVA-E2B",
   "note_expert": "C21-SF3 (tirer un enseignement d'une erreur), lien avec C17 (vérifier une information). Élise corrige et se donne un geste de vérification. Se dédouaner ne règle rien ; se décharger sur une collègue déplace le problème. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E2B": {
   "id": "BIL-EVA-E2B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Cédric",
   "preuve": "E2",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Cédric a affiché une consigne de sécurité dans le hall. Ana lui dit : « Elle est bien, mais personne ne la lit : le texte est trop long. » Il l'avait rédigée avec soin.\n\nQue fait Cédric ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il raccourcit le texte sans rien demander à Ana, en espérant que ça suffira.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Il garde la consigne : elle est complète, et c'est ce qui compte.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Il demande à Ana comment elle l'aurait écrite, et teste une version plus courte.",
     "verdict": "adapte"
    }
   ],
   "suite": "BIL-EVA-E2B2",
   "note_expert": "C21-SF4, C21-SE3. Cédric accueille la remarque, demande un point de vue et vérifie par un essai. Modifier sans comprendre peut manquer l'essentiel ; refuser le retour au nom du soin apporté est une fin de non-recevoir. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E2B2": {
   "id": "BIL-EVA-E2B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Malia",
   "preuve": "E2",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Malia vient de remettre à Samuel son premier compte rendu de réunion à trois organisations. Elle voudrait savoir ce qu'il en pense, mais il n'a rien dit.\n\nQue fait Malia ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Elle attend : s'il y avait un problème, il le dirait.",
     "verdict": "inadapte"
    },
    {
     "id": "B",
     "libelle": "Elle lui demande si le compte rendu lui convient, et se contente d'un « oui ».",
     "verdict": "risque"
    },
    {
     "id": "C",
     "libelle": "Elle lui demande deux choses : ce qui est utile, et ce qu'elle pourrait améliorer.",
     "verdict": "adapte"
    }
   ],
   "suite": "BIL-EVA-E3B",
   "note_expert": "C21-SF4 (demander un feedback). Malia le demande elle-même, avec une question précise qui appelle un exemple. Une question fermée donne un « oui » qui n'apprend rien ; attendre, c'est laisser le silence tenir lieu de retour. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E3B": {
   "id": "BIL-EVA-E3B",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Léna",
   "preuve": "E3",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Léna remarque que ses courriels de relance sont souvent mal compris par ses collègues de la province. Elle voudrait progresser.\n\nQue fait Léna ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Elle relit trois courriels mal compris, repère ce qui manquait (la date, ce qu'elle attend) et demande à une collègue de relire son prochain courriel.",
     "verdict": "adapte"
    },
    {
     "id": "B",
     "libelle": "Elle pense que ses collègues lisent mal et ne change rien.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Elle écrit désormais des courriels beaucoup plus longs pour ne rien oublier.",
     "verdict": "risque"
    }
   ],
   "suite": "BIL-EVA-E3B2",
   "note_expert": "C21-SF5, SF6. Léna cherche dans ses propres courriels ce qui manquait et s'appuie sur un regard extérieur. Allonger les courriels ne règle pas ce qui manque ; mettre en cause les lecteurs écarte tout apprentissage. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-E3B2": {
   "id": "BIL-EVA-E3B2",
   "type": "eval-item",
   "etape": "Évaluation",
   "personnage": "Teiva",
   "preuve": "E3",
   "variante": "B",
   "mode": "choix",
   "competences": [
    "C21"
   ],
   "texte": "Teiva a suivi un atelier sur l'écriture simple pour les habitants. Un mois après, il n'applique plus rien de ce qu'il a vu.\n\nQue fait Teiva ?\n",
   "options": [
    {
     "id": "A",
     "libelle": "Il s'inscrit à un autre atelier pour être sûr de bien comprendre.",
     "verdict": "risque"
    },
    {
     "id": "B",
     "libelle": "Il estime que l'atelier ne correspondait pas à son travail et n'y revient pas.",
     "verdict": "inadapte"
    },
    {
     "id": "C",
     "libelle": "Il choisit une seule chose de l'atelier, l'applique dans ses prochains documents et demande un retour à un collègue au bout de deux semaines.",
     "verdict": "adapte"
    }
   ],
   "suite": "BIL-EVA-RES",
   "note_expert": "C21-SF5, SF6. Teiva choisit un seul axe, l'applique et prévoit un retour extérieur. Multiplier les formations sans appliquer n'apporte rien de plus ; écarter l'atelier sans analyse n'apprend rien. Item de méthode, sans règle juridique."
  },
  "BIL-EVA-RES": {
   "id": "BIL-EVA-RES",
   "type": "eval-resultat",
   "etape": "Évaluation",
   "regle": "5 réponses justes sur 6, au moins une par repère",
   "preuves": {
    "E1": "Analyser une situation vécue",
    "E2": "Accueillir un retour",
    "E3": "Choisir un axe de progrès"
   },
   "texte_reussi": "Évaluation réussie : vous savez prendre du recul sur votre pratique. Vous regardez ce qui a marché et ce qui peut changer, vous accueillez un retour et vous le demandez vous-même, vous choisissez une chose à faire autrement et une ressource pour vous aider.\n",
   "texte_echec": "Certains repères sont encore à consolider. Une nouvelle tentative vous est proposée, sur six autres situations.\n",
   "texte_echec_final": "Certains repères restent à consolider. Nous vous conseillons de relire la fiche « Mon plan de progrès » dans votre carnet. Vous reprendrez l'évaluation quand vous le voudrez, depuis le sommaire : les deux séries de situations alternent d'une tentative à l'autre. Votre parcours DINA reste ouvert.\n",
   "consolider": {
    "E1": {
     "texte": "Quand quelque chose s'est mal passé, je regarde ce qui a marché, ce qui a posé problème, et je choisis un changement concret. Je ne généralise pas, je ne cherche pas de coupable. À revoir : « Trois gestes pour prendre du recul ».",
     "fiche": "FICHE-BIL-E1"
    },
    "E2": {
     "texte": "Un retour, j'écoute jusqu'au bout, je demande un exemple, je remercie ; je ne me justifie pas tout de suite. Et j'en demande moi-même, avec une question précise. À revoir : « Trois gestes pour prendre du recul ».",
     "fiche": "FICHE-BIL-E1"
    },
    "E3": {
     "texte": "Je nomme un besoin précis, puis je cherche une ressource adaptée : une fiche, un collègue, mon responsable, le référent formation de mon employeur, une formation de l'IFAP. Un seul axe à la fois. À revoir : « Trois gestes pour prendre du recul ».",
     "fiche": "FICHE-BIL-E1"
    }
   },
   "rappel": [
    {
     "titre": "Analyser",
     "texte": "Ce qui a marché, ce qui a posé problème, un changement concret."
    },
    {
     "titre": "Accueillir un retour",
     "texte": "Écouter, demander un exemple, remercier ; en demander soi-même."
    },
    {
     "titre": "Progresser",
     "texte": "Un seul axe, une ressource pour m'aider."
    }
   ],
   "retentative": "BIL-EVA-E1B",
   "suite": "BIL-EVA-FIN"
  },
  "BIL-EVA-FIN": {
   "id": "BIL-EVA-FIN",
   "type": "fin-section",
   "etape": "Évaluation",
   "titre": "Évaluation terminée",
   "texte": "Votre résultat est affiché sur le sommaire. Dernière étape : ce que vous retenez de votre parcours, et votre plan de progrès.\n",
   "suite": "MENU"
  },
  "BIL-SOR-1": {
   "id": "BIL-SOR-1",
   "type": "narration",
   "etape": "Bilan",
   "titre": "Ce que Noa retient",
   "texte": "Fin de la réunion. Ariane remercie Noa pour son retour d'expérience. Voici ce qu'il retient du dossier, et de ses premiers mois à l'ÉLAN.",
   "points": [
    {
     "titre": "Je sais où je me situe",
     "texte": "Qui fait quoi, qui décide, ce qui relève de mon poste et ce que je fais valider.",
     "competence": "C01 à C05 — Se repérer, trouver sa place"
    },
    {
     "titre": "Je travaille avec les autres",
     "texte": "Le bon canal, une information claire pour chacun, un malentendu désamorcé.",
     "competence": "C06 à C08 et C19 — Communiquer, coopérer, s'adapter"
    },
    {
     "titre": "J'agis dans le cadre",
     "texte": "La règle à jour, l'information des personnes protégée, les moyens du service, la sécurité.",
     "competence": "C09 à C12 — Cadre sécurisé"
    },
    {
     "titre": "J'incarne le service public",
     "texte": "Les mêmes égards pour tous, ma réserve, mes liens d'intérêt signalés, l'amélioration à partir des faits.",
     "competence": "C13 à C16 et C20 — Service public"
    },
    {
     "titre": "Je prends du recul",
     "texte": "Je regarde ce qui a marché, j'accueille un retour, je choisis une chose à faire autrement.",
     "competence": "C21 — Prendre du recul sur sa pratique"
    }
   ],
   "competences": [
    "C21"
   ],
   "suite": "BIL-SOR-LIBRE"
  },
  "BIL-SOR-LIBRE": {
   "id": "BIL-SOR-LIBRE",
   "type": "reponse-libre",
   "etape": "Bilan",
   "titre": "Une chose à faire autrement",
   "question": "Une chose que je ferai autrement la semaine prochaine, et la personne à qui je demanderai un retour :",
   "apres": "Notez-la quelque part où vous la reverrez lundi : c'est ainsi qu'elle devient une habitude.",
   "suite": "BIL-SOR-RES"
  },
  "BIL-SOR-RES": {
   "id": "BIL-SOR-RES",
   "type": "ressources",
   "etape": "Bilan",
   "titre": "Mes ressources",
   "texte": "Votre carnet réunit les fiches des cinq modules. La fiche « Mon plan de progrès » vous aide à prendre du recul après chaque semaine de travail : ouvrez-la pour l'imprimer ou l'enregistrer en PDF.",
   "fiches": [
    "FICHE-BIL-E1"
   ],
   "suite": "BIL-FIN"
  },
  "BIL-FIN": {
   "id": "BIL-FIN",
   "type": "fin",
   "etape": "Bilan",
   "titre": "Bravo, vous avez terminé votre parcours",
   "texte": "Vous avez accompagné Noa pendant cinq semaines à l'ÉLAN, puis fait le point avec lui. Vous savez où vous situer, travailler avec les autres, agir dans un cadre sécurisé, incarner le service public, et prendre du recul sur votre pratique.\n",
   "points_titre": "Ce que vous emportez",
   "points": [
    {
     "titre": "Vos repères pour agir",
     "texte": "Les fiches de votre carnet, à relire quand une situation vous arrête."
    },
    {
     "titre": "Une habitude",
     "texte": "Revenir sur sa semaine, accueillir un retour, choisir une chose à faire autrement."
    },
    {
     "titre": "Un parcours qui reste ouvert",
     "texte": "Vous pouvez revenir sur n'importe quel module, quand vous voulez."
    }
   ],
   "dossier": "Le dossier Passerelles se clôt sur un retour d'expérience : Ariane en retient ce que Noa a appris, pas seulement ce que l'ÉLAN a livré.",
   "prochain": {
    "titre": "Questionnaire de fin et attestation",
    "texte": "Dans Moodle, il vous reste à répondre au questionnaire de fin de parcours. Votre avis nous aide à améliorer DINA."
   },
   "suite": "MENU"
  }
 },
 "fiches": {
  "FICHE-BIL-E1": {
   "id": "FICHE-BIL-E1",
   "type": "fiche",
   "code": "BIL-E1",
   "modele": "aide-memoire",
   "categorie": "outil",
   "titre": "Mon plan de progrès",
   "quand": "Chaque vendredi, ou après une situation qui s'est mal passée ou qui a bien marché.",
   "etapes": [
    {
     "titre": "1. Je regarde ce qui s'est passé",
     "texte": "Ce qui a marché. Ce qui a coûté du temps. Ce qui m'a surpris. Je note des faits, pas un jugement."
    },
    {
     "titre": "2. J'accueille un retour, et j'en demande",
     "texte": "J'écoute jusqu'au bout, je demande un exemple, je remercie. Je demande à mon responsable ou à un collègue : « Qu'est-ce qui est utile ? Qu'est-ce que je pourrais améliorer ? »"
    },
    {
     "titre": "3. Je choisis un seul axe",
     "texte": "Une chose concrète, que je peux faire dès la semaine prochaine."
    },
    {
     "titre": "4. Je choisis ma ressource",
     "texte": "Une fiche de mon carnet, un collègue, mon responsable, le référent formation de mon employeur, une formation de l'IFAP."
    }
   ],
   "types": [
    {
     "titre": "Ça a bien marché",
     "texte": "Je le refais exprès, et je le dis à l'équipe."
    },
    {
     "titre": "Ça a coûté du temps",
     "texte": "Je cherche d'où vient le temps perdu, et je change un geste."
    },
    {
     "titre": "On m'a fait un reproche",
     "texte": "J'écoute, je demande un exemple, je décide ce que je change."
    },
    {
     "titre": "Je ne sais pas faire",
     "texte": "Je le dis, et je cherche une ressource."
    }
   ],
   "exemple": "« Samuel, tes comptes rendus sont clairs mais je voudrais que tu dises plus tôt ce qui reste incertain. » Noa : « Merci. Je le mets dès la première ligne du prochain compte rendu. »",
   "a_retenir": "Prendre du recul, ce n'est pas se juger : c'est choisir une chose à faire autrement.",
   "reperes": [
    "Mon axe de progrès de la semaine",
    "La personne à qui je demande un retour",
    "Ma ressource"
   ],
   "competences": [
    "C21"
   ],
   "version": "0.1"
  }
 },
 "illustrations": {
  "ILL-B1": {
   "scene": "Salle de réunion de l'ÉLAN, trois mois plus tard : Noa présente ses notes à Ariane, Samuel et Malia (à produire)",
   "personnages": "Noa, Ariane, Samuel, Malia",
   "alt": "Dans une salle de réunion de l'ÉLAN à Koné, Noa, debout près d'un tableau blanc, présente ses notes à Ariane, Samuel et Malia, assis autour de la table."
  }
 },
 "source": "Storyboard — Bilan de parcours en pages v0.1.md"
};
