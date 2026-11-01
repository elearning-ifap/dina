/* DINA — simulation de dialogue (prototype de gabarit, 01-11).
   Scénario de démonstration pour M3 « Je travaille avec les autres » : l'appel de Joël.
   CONTENU NON VALIDÉ : à relire par Marc et par le référent employeur du module.

   Structure :
   - jauges : cachées pendant l'appel, révélées au bilan. Valeur de départ, puis effets des choix.
   - noeuds : ce que dit le personnage (variantes selon les jauges, la première qui correspond l'emporte),
     puis les répliques proposées à l'apprenant. Un nœud sans personnage (« apres_appel ») pose une question à Noa.
   - si : { jauge: { min: n } } ou { jauge: { max: n } } — conditions cumulées.
   - verdict de chaque choix : adapte, partiel, risque, inadapte (code feu tricolore du bilan).
   - fins : la première dont la condition est remplie. */
window.DINA_SIMULATION = {
  code: "M3",
  module: "Je travaille avec les autres",
  titre: "Joël au bout du fil",
  personnage: "Joël",
  role: "Coordinateur de terrain, association Passerelles",
  canal: "Appel téléphonique",

  intro: {
    surtitre: "Simulation d'appel",
    titre: "Joël au bout du fil",
    texte: "Trois semaines ont passé. Ariane a confirmé l'appui de l'ÉLAN à la permanence de Passerelles. Une étape reste en suspens : les chiffres des démarches les plus demandées, que Léna prépare à l'administration provinciale. Passerelles en a besoin pour former ses bénévoles.\n\nMardi, 14 h 05. Le téléphone de Noa sonne. C'est Joël.",
    consigne: "Menez l'appel à la place de Noa. Il n'y a pas une seule bonne réplique : Joël réagit à ce que vous dites, et la fin de l'appel en dépend."
  },

  jauges: [
    { id: "relation", libelle: "Relation avec Joël", depart: 50, aide: "Joël se sent-il entendu et respecté ?" },
    { id: "cadre", libelle: "Justesse professionnelle", depart: 50, aide: "Noa reste-t-il dans son rôle, sans promettre ce qu'il ne maîtrise pas ?" }
  ],

  debut: "N1",
  noeuds: {
    N1: {
      repliques: [
        { humeur: "agace", texte: "Bonjour, Joël, Passerelles. Je vais être direct : la première permanence ouvre dans dix jours et je n'ai toujours pas vos chiffres. Mes bénévoles me demandent sur quoi se former. On m'avait parlé de fin du mois. On en est où ?" }
      ],
      choix: [
        { id: "A", texte: "Bonjour Joël. Dix jours, c'est court, je comprends. Pour être sûr : il vous faut les démarches les plus demandées, pour former vos bénévoles avant l'ouverture ?",
          effets: { relation: 15, cadre: 10 }, verdict: "adapte", suite: "N2",
          annotation: "Reformuler montre à Joël qu'il a été entendu et vérifie son besoin réel avant de répondre." },
        { id: "B", texte: "Les chiffres, ce n'est pas nous, c'est la province. Il faudrait voir directement avec Léna.",
          effets: { relation: -20, cadre: -5 }, verdict: "inadapte", suite: "N2",
          annotation: "Vrai sur le fond, mais l'ÉLAN coordonne : renvoyer le partenaire vers un autre service lui fait porter la coordination." },
        { id: "C", texte: "Je suis vraiment désolé, c'est inadmissible. Je règle ça tout de suite.",
          effets: { relation: 5, cadre: -15 }, verdict: "risque", suite: "N2",
          annotation: "S'excuser apaise, mais « inadmissible » met en cause des collègues, et « tout de suite » est une promesse que Noa ne maîtrise pas." }
      ]
    },

    N2: {
      repliques: [
        { si: { relation: { max: 40 } }, humeur: "ferme", texte: "Écoutez, je ne vais pas faire le tour de vos services. Concrètement : qu'est-ce qui bloque ?" },
        { humeur: "neutre", texte: "Oui, c'est ça. Ils veulent savoir si ce sont surtout les papiers de la CAFAT, les impôts, l'état civil… Qu'est-ce qui bloque ?" }
      ],
      choix: [
        { id: "A", texte: "Les chiffres sont en cours de validation à la province. Je n'ai pas encore de date, mais j'appelle Léna aujourd'hui pour en obtenir une.",
          effets: { relation: 10, cadre: 15 }, verdict: "adapte", suite: "N3",
          annotation: "Noa dit ce qu'il sait, ce qu'il ne sait pas, et ce qu'il va faire. C'est factuel, sans accuser personne." },
        { id: "B", texte: "Entre nous, la province traîne un peu sur ce dossier.",
          effets: { relation: 5, cadre: -20 }, verdict: "inadapte", suite: "N3",
          annotation: "Critiquer un partenaire devant un autre crée une complicité de façade. La phrase circulera, et Léna est aussi une partenaire de l'ÉLAN." },
        { id: "C", texte: "Je ne peux pas vous dire, ce n'est pas moi qui suis la partie chiffres.",
          effets: { relation: -15, cadre: -5 }, verdict: "risque", suite: "N3",
          annotation: "Noa est l'interlocuteur de Passerelles sur ce dossier. S'il ne sait pas, il s'informe : « je ne sais pas encore, je vérifie »." }
      ]
    },

    N3: {
      repliques: [
        { humeur: "presse", texte: "Bon. Faites simple : Léna a forcément un fichier quelque part. Envoyez-le-moi tel quel, on se débrouillera avec." }
      ],
      choix: [
        { id: "A", texte: "Ce fichier appartient à la province, et il n'est pas encore validé : ce n'est pas à moi de le diffuser. Par contre, je demande à Léna ce qui peut déjà être partagé.",
          effets: { relation: 5, cadre: 20 }, verdict: "adapte", suite: "N4",
          annotation: "Noa respecte le propriétaire des données et propose une autre voie. Le « non » reste ouvert." },
        { id: "B", texte: "D'accord, je vous l'envoie dès que je l'ai.",
          effets: { relation: 15, cadre: -25 }, verdict: "inadapte", suite: "N4",
          annotation: "Joël est content, mais Noa promet de diffuser des données qui ne sont pas les siennes, et qui ne sont pas validées." },
        { id: "C", texte: "Non, ce n'est pas possible.",
          effets: { relation: -15, cadre: 10 }, verdict: "partiel", suite: "N4",
          annotation: "Juste sur le fond. Mais un refus sec, sans raison ni solution, ferme la porte au partenaire." }
      ]
    },

    N4: {
      repliques: [
        { si: { cadre: { max: 35 } }, humeur: "content", texte: "Parfait ! Je l'annonce à mes bénévoles ce soir, alors. Ils vont être contents." },
        { si: { relation: { max: 40 } }, humeur: "agace", texte: "Donc, en clair, je n'ai rien. Et je fais quoi avec mes bénévoles en attendant ?" },
        { humeur: "neutre", texte: "D'accord. Et en attendant, je fais quoi avec mes bénévoles ?" }
      ],
      choix: [
        { id: "A", texte: "Je vous rappelle demain avant 10 h avec une date de la province. D'ici là, je vous envoie la fiche « Qui fait quoi en Nouvelle-Calédonie ? » : vos bénévoles peuvent déjà apprendre à orienter.",
          effets: { relation: 15, cadre: 15 }, verdict: "adapte", suite: "N5",
          annotation: "Un prochain pas daté, que Noa maîtrise, et une ressource utile tout de suite. Joël repart avec quelque chose." },
        { id: "B", texte: "Je vous tiens au courant dès que j'ai du nouveau.",
          effets: { relation: -10, cadre: 0 }, verdict: "partiel", suite: "N5",
          annotation: "Sans date, Joël ne sait pas quand relancer. Il rappellera, plus agacé." },
        { id: "C", texte: "Je vous promets les chiffres avant vendredi.",
          effets: { relation: 10, cadre: -20 }, verdict: "risque", suite: "N5",
          annotation: "La date dépend de Léna, pas de Noa. Si vendredi passe, c'est la parole de l'ÉLAN qui est en jeu." }
      ]
    },

    N5: {
      repliques: [
        { si: { relation: { min: 70 }, cadre: { min: 60 } }, humeur: "rassure", texte: "Ça me va. Merci d'avoir été clair. À demain, alors." },
        { si: { relation: { min: 60 } }, humeur: "content", texte: "Très bien. Je compte sur vous, hein. À bientôt." },
        { humeur: "ferme", texte: "Bon. On verra. Au revoir." }
      ],
      raccroche: true,
      question: "L'appel est terminé. Que fait Noa maintenant ?",
      choix: [
        { id: "A", texte: "Il note l'appel dans le dossier, appelle Léna, puis prévient Samuel en deux lignes.",
          effets: { relation: 5, cadre: 15 }, verdict: "adapte", suite: "FIN",
          annotation: "Tracer, agir, informer. Samuel n'est pas surpris si Joël l'appelle, et le dossier garde la mémoire de l'échange." },
        { id: "B", texte: "Il appelle Léna tout de suite. Il notera plus tard.",
          effets: { relation: 0, cadre: 5 }, verdict: "partiel", suite: "FIN",
          annotation: "Agir vite est bien. Mais « plus tard » arrive rarement, et Samuel n'est pas au courant." },
        { id: "C", texte: "Il attend que Léna revienne vers lui.",
          effets: { relation: -10, cadre: -15 }, verdict: "inadapte", suite: "FIN",
          annotation: "Noa a un engagement envers Joël. Attendre, c'est laisser le dossier sans pilote." }
      ]
    }
  },

  fins: [
    { si: { relation: { min: 60 }, cadre: { min: 60 } }, humeur: "rassure", verdict: "adapte",
      titre: "Un partenaire rassuré",
      texte: "Joël a été entendu, Noa est resté dans son rôle, et chacun sait ce qui se passe demain avant 10 h. La relation sort renforcée d'un appel mal parti." },
    { si: { relation: { min: 60 } }, humeur: "content", verdict: "risque",
      titre: "Rassuré… pour l'instant",
      texte: "Joël raccroche satisfait. Mais Noa a promis ce qu'il ne maîtrise pas. Si la province ne suit pas, la déception sera plus forte que l'agacement de départ." },
    { si: { cadre: { min: 60 } }, humeur: "ferme", verdict: "partiel",
      titre: "Juste, mais distant",
      texte: "Tout ce que Noa a dit est exact. Pourtant, Joël a le sentiment d'avoir été baladé. Dans une relation partenariale, la forme compte autant que le fond." },
    { humeur: "agace", verdict: "inadapte",
      titre: "Un appel qui abîme la relation",
      texte: "Joël raccroche sans solution, et avec quelques phrases qu'il pourra répéter. Le prochain contact partira de plus loin." }
  ],

  a_retenir: [
    "Reformuler avant de répondre : c'est montrer qu'on a entendu.",
    "Coordonner, c'est faire le lien soi-même, pas renvoyer le partenaire vers un autre service.",
    "Ne promettre que ce qu'on maîtrise ; ne diffuser que ce qui est à soi.",
    "Finir par un prochain pas daté, puis tracer et informer sa hiérarchie."
  ],

  mention: "Situation fictive de démonstration. Contenus non validés par un expert."
};
