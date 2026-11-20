import sys, pathlib
sys.path.insert(0, __import__('os').path.dirname(__import__('os').path.abspath(__file__)))
import fiches_apport as fa
from fiches_apport import boite, table, liste, inline

# ---------------------------------------------------------------------------------------------
# Fiches d'apport du module 3 « Je travaille avec les autres » (D154).
# FA-M3-01 Contribuer à un projet · FA-M3-02 Communiquer en professionnel · FA-M3-03 La convention
# Points à faire valider : « Fiche d'apport M3 — points à valider » (coffre dina, 05 Ressources).
# ---------------------------------------------------------------------------------------------

F = {
 "id": "FA-M3-01",
 "titre": "Contribuer à un projet",
 "sous_titre": "Savoir où en est le projet, qui porte, qui décide, et ce qu'on attend de moi",
 "competences": "C04 · C05 · C07 · C20",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>Un projet a <strong>un début, des étapes et une fin</strong>. On vous demande rarement de le piloter : on vous demande d'y <strong>contribuer</strong>, "
   "c'est-à-dire d'apporter une part précise du travail, à un moment donné.</p>"
   "<p>Pour bien contribuer, il suffit de savoir quatre choses : <strong>où en est le projet</strong>, <strong>qui le porte</strong>, "
   "<strong>qui décide</strong>, et <strong>ce qu'on attend de vous à cette étape</strong>.</p>"),
  "<h2>Le cycle d'un projet en six étapes</h2>",
  table(["Étape", "Ce qui se passe", "Ce qu'on attend d'un contributeur"], [
   ["**1. Émergence**", "Un besoin ou une idée apparaît.", "Signaler un besoin constaté sur le terrain, avec des faits."],
   ["**2. Cadrage**", "On décide si le projet est réaliste, avec qui et pour quoi faire.", "Dire ce qui est faisable dans son domaine et à quelle échéance."],
   ["**3. Lancement**", "On réunit les acteurs et on se répartit le travail.", "Comprendre sa part, ses échéances, qui contacter. Poser ses questions maintenant."],
   ["**4. Réalisation**", "Chacun fait sa part ; on suit l'avancement.", "Faire sa part, rendre compte de l'avancement, prévenir tôt en cas de retard."],
   ["**5. Mise en service**", "Le projet fonctionne pour ses usagers.", "Vérifier que sa part fonctionne, répondre aux premières questions."],
   ["**6. Clôture**", "On tire le bilan et on range.", "Donner son retour d'expérience : ce qui a marché, ce qu'on changerait. Rendre les documents."],
  ], "etapes"),
  boite("exemple", "Exemple : le dossier Passerelles",
   "<p>Le dossier Passerelles est <strong>au lancement</strong> : une réunion réunit trois organisations. Cédric ne pilote pas la permanence, il y contribue : "
   "il prépare le matériel et accueille. Il sait où en est le projet et ce qu'on attend de lui jeudi à 14 h 30.</p>"),
  boite("methode", "Avant de commencer ma part, quatre questions",
   '<ol><li><strong>Où en est le projet</strong> ? Dans quelle étape sommes-nous ?</li>'
   '<li><strong>Qui le porte, qui décide</strong> ? À qui je rends compte ?</li>'
   '<li><strong>Qu\'attend-on de moi</strong> ? Quel livrable, pour quand ?</li>'
   '<li><strong>Qui dépend de ma part</strong> ? Qui je dois prévenir si cela bouge ?</li></ol>'),
 ],
 "verso": [
  "<h2>Les rôles dans un projet</h2>",
  table(["Rôle", "Ce qu'il fait", "Dans le dossier Passerelles"], [
   ["**Le porteur**", "Défend le projet et le fait avancer.", "Passerelles porte le projet."],
   ["**Le décideur**", "Tranche. Ce n'est pas toujours le porteur.", "Passerelles décide."],
   ["**Le référent du dossier**", "Suit le dossier pour son organisation et sert de contact.", "Noa, pour l'ÉLAN."],
   ["**Le contributeur**", "Apporte une part précise du travail, à un moment donné.", "Cédric, Noa, Teiva, Élise… chacun sa part."],
  ], "roles"),
  boite("reperes", "Une personne peut avoir plusieurs rôles",
   "<p>On peut être contributeur sur un projet et porteur sur un autre. Ce qui compte : savoir <strong>quel rôle on tient ici et maintenant</strong>.</p>"),
  "<h2>Deux mots à bien distinguer</h2>",
  table(["Mot", "Ce que cela veut dire", "Exemple"], [
   ["**Un jalon**", "Une date ou un point de passage qui montre que le projet avance.", "La réunion de lancement, jeudi."],
   ["**Un livrable**", "Ce que l'on remet concrètement : un document, un outil, une décision écrite.", "Le compte rendu de la réunion."],
  ], "mots2"),
  "<h2>Mes six réflexes de contributeur</h2>",
  '<div class="trois">'
  + boite("retenir", "Je cadre ma part", "<p>Je fais reformuler ce qu'on attend de moi, le livrable et l'échéance. Je ne devine pas.</p>")
  + boite("retenir", "Je préviens tôt", "<p>Un retard annoncé à temps se gère. Un retard découvert au dernier moment bloque les autres.</p>")
  + boite("retenir", "Je rends compte", "<p>Je dis où j'en suis, simplement : fait, en cours, bloqué.</p>")
  + boite("retenir", "Je garde une trace", "<p>Je note ce qui est décidé, par qui et pour quand. Je travaille sur la dernière version.</p>")
  + boite("retenir", "Je demande quand ça change", "<p>Si le calendrier ou le contenu change, je cherche ce que cela change pour ma part.</p>")
  + boite("retenir", "Je fais un retour", "<p>À la clôture, je dis ce qui a marché et ce que je ferais autrement. C'est ainsi qu'un service apprend.</p>")
  + "</div>",
  boite("piege", "Pièges à éviter",
   "<p><strong>Attendre qu'on vienne me chercher</strong> alors que mon besoin d'information est évident. "
   "<strong>Décider seul</strong> d'un changement qui touche d'autres contributeurs. "
   "<strong>Confondre porteur et décideur</strong> : demandez à qui revient la décision.</p>"),
 ],
 "zoom_recto": 1.1, "zoom_verso": 1.1,
 "sources": "Fiche de repères pédagogiques DINA (fil rouge Passerelles, D148). Vocabulaire courant de la conduite de projet ; "
            "aucune source propre au secteur public calédonien identifiée à ce jour.",
}

# ------------------------------------------------------------------------------ FA-M3-02
F2 = {
 "id": "FA-M3-02",
 "titre": "Communiquer en professionnel",
 "sous_titre": "Le bon canal, des mots clairs, ce que je dis, ce que je garde pour moi",
 "competences": "C06 · C17",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>Communiquer en professionnel, c'est <strong>se faire comprendre de la bonne personne, au bon moment, par le bon moyen</strong>. "
   "Un bon message est court, clair, adressé à celui qui doit agir, et il laisse une trace quand elle compte.</p>"
   "<p>La technique est simple. Les difficultés viennent d'un message mal adressé, d'une information qui arrive trop tard "
   "ou d'un malentendu laissé sans réponse.</p>"),
  "<h2>Choisir le canal</h2>",
  table(["Canal", "Quand le choisir", "Ce que je fais"], [
   ["**Appel**", "Urgent, complexe, ton délicat.", "Je confirme ensuite par écrit : date, heure, lieu."],
   ["**Courriel**", "Une demande, une date, une trace à garder.", "Objet clair, une demande par message, sigles expliqués."],
   ["**SMS**", "Une information courte et urgente, à une personne en déplacement.", "Un fait, une heure, un lieu. Rien de délicat par SMS."],
   ["**Rencontre ou visio**", "Plusieurs personnes, un sujet à décider ensemble.", "Je note ce qui est décidé et je l'envoie après."],
  ], "canaux"),
  boite("methode", "Avant d'envoyer, quatre questions",
   '<ol><li><strong>Qu\'est-ce que je veux ?</strong> Informer, demander, relancer, alerter ou confirmer. Une seule chose par message.</li>'
   '<li><strong>Qui doit agir, qui doit seulement savoir ?</strong> Je mets chacun à sa place : « pour action » ou « pour information ».</li>'
   '<li><strong>Quand et où cette personne lit-elle ses messages ?</strong> Elle est peut-être en tournée, sans internet.</li>'
   '<li><strong>Faut-il garder une trace ?</strong> Si oui, j\'écris.</li></ol>'),
  "<h2>Un courriel qui se lit en une fois</h2>",
  table(["Ce qui gêne", "Ce qui aide"], [
   ["Un objet vague : « Réunion ».", "Un objet qui dit l'essentiel : « Réunion de lancement, jeudi 14 h ». L'objet est la première chose que le destinataire lit."],
   ["Un long message technique, plein de sigles.", "Une demande. Des phrases courtes, à la forme active. Les sigles expliqués."],
   ["Cinq personnes en copie « au cas où ».", "Les copies au strict nécessaire, chacun avec son rôle."],
   ["Envoyé en fin de journée pour le lendemain.", "Une date de réponse réaliste, écrite clairement."],
  ], "avantapres"),
  boite("exemple", "Exemple : la demande de salle de Noa",
   "<p>« <strong>Objet : réunion de lancement, jeudi 14 h</strong>. Bonjour Élise, la salle communale est-elle libre jeudi à 14 h pour lancer la permanence "
   "de Passerelles ? Une réponse d'ici demain midi me permettrait de confirmer à tous. Cordialement, Noa. »</p>"),
 ],
 "verso": [
  "<h2>Écouter, reformuler, vérifier</h2>",
  '<div class="trois">'
  + boite("retenir", "J'écoute", "<p>Je laisse l'autre aller au bout de sa phrase. Je ne prépare pas ma réponse pendant qu'il parle.</p>")
  + boite("retenir", "Je reformule", "<p>Je redis avec mes mots : « Si je comprends bien… ». L'autre confirme ou corrige.</p>")
  + boite("retenir", "Je vérifie", "<p>Date, heure, lieu, ce qu'on attend de qui : on s'est compris sur les mêmes mots ? Je confirme par écrit.</p>")
  + "</div>",
  "<h2>Ce que je communique, ce que je trace, ce que je réserve</h2>",
  table(["Je…", "Quand", "Exemple"], [
   ["**communique**", "L'information est utile à celui qui doit agir et je peux la donner.", "La date, l'heure et le lieu de la réunion, à tous les participants."],
   ["**trace**", "Une décision, un engagement ou une date doit pouvoir être retrouvée.", "Le compte rendu de la réunion, envoyé après."],
   ["**réserve**", "L'information concerne une personne, ou elle n'est pas à diffuser.", "Une information sur un habitant ; un chiffre provisoire d'un autre service."],
  ], "trois3"),
  boite("reperes", "Ce que dit le texte",
   "<p>Les fonctionnaires sont tenus au <strong>secret professionnel</strong> et font preuve de <strong>discrétion professionnelle</strong> "
   "pour les faits, informations ou documents connus dans leurs fonctions. Ils ont aussi le devoir de <strong>répondre aux demandes d'information du public</strong>, "
   "dans ces limites. En cas de doute, je demande à mon responsable avant de diffuser.</p>"
   '<p class="ref">Délibération n° 81 du 24 juillet 1990, art. 20 et 21</p>'),
  boite("reperes", "Le contexte culturel",
   "<p>On travaille avec des personnes de cultures et d'habitudes différentes. Je <strong>ne devine pas</strong> la façon de communiquer de quelqu'un "
   "d'après son origine : j'observe, j'écoute, je pose la question avec respect. Quand une date ou une heure peut se comprendre autrement, "
   "je l'explicite et je la confirme par écrit.</p>"),
  boite("piege", "Pièges à éviter",
   "<p><strong>Répondre à chaud</strong> à un message qui m'agace. <strong>Tout dire par SMS</strong>, sans trace. "
   "<strong>Supposer que l'autre a compris</strong> parce qu'il n'a rien dit. <strong>Mettre tout le monde en copie</strong> : chacun croit que l'autre répondra.</p>"),
  boite("methode", "Dans mon service, je renseigne",
   '<div class="lignes"><p>Les moyens de contact autorisés par mon employeur :</p><p>Ce que je ne diffuse pas sans l\'accord de mon responsable :</p>'
   '<p>Mon responsable en cas de doute :</p></div>'),
 ],
 "zoom_recto": 1.05, "zoom_verso": 1.08,
 "sources": "Délibération n° 81 du 24 juillet 1990 (version consolidée au 24-10-2023), art. 20 et 21 ; loi du pays n° 2014-9, art. 1 et 2 (respect dans les relations de travail) ; "
            "fiches « langage clair » de la DITP (méthode métropolitaine, pas une règle calédonienne). Pas de guide de communication commun aux employeurs : les moyens autorisés varient.",
}

# ------------------------------------------------------------------------------ FA-M3-03
F3 = {
 "id": "FA-M3-03",
 "titre": "La convention : un accord écrit entre organisations",
 "sous_titre": "Reconnaître une convention, savoir qui signe, et ce que je fais (et ne fais pas) comme agent",
 "competences": "C03 · C04 · C07",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>Une <strong>convention</strong> est un <strong>accord écrit</strong> entre deux parties ou plus. Elle dit ce que <strong>chacune s'engage à faire</strong>. "
   "Entre une commune, une province, la Nouvelle-Calédonie ou une association, on en trouve pour mettre à disposition une salle, du matériel, un agent, ou pour partager une mission.</p>"
   "<p>Pour un agent, l'essentiel tient en une règle : <strong>je reconnais qu'un engagement demande une convention, je le prépare, et je le transmets à celui qui peut signer</strong>.</p>"),
  "<h2>Ce que contient une convention</h2>",
  table(["Rubrique", "Ce qu'elle dit", "Exemple : la salle communale"], [
   ["**Les parties**", "Qui s'engage envers qui.", "La commune et l'association Passerelles."],
   ["**L'objet**", "Ce que l'accord concerne.", "La mise à disposition d'une salle pour une réunion."],
   ["**Les engagements**", "Ce que chacune fait, et ce qu'elle ne fait pas.", "La commune prête la salle. L'association la range et rend les clés."],
   ["**La durée**", "À partir de quand, jusqu'à quand.", "Jeudi après-midi, pour la réunion."],
   ["**Les suites**", "Comment elle se modifie ou prend fin.", "Une modification se fait par écrit."],
   ["**Les signatures**", "Les personnes qui engagent chaque partie.", "Le maire ; le représentant de l'association."],
  ], "rubriques"),
  boite("exemple", "Exemple : le dossier Passerelles",
   "<p>La commune met sa salle à disposition pour la réunion de lancement. L'accueil enregistre la demande et la transmet : <strong>il ne signe pas</strong>. "
   "C'est <strong>Passerelles qui s'engage envers la commune</strong>. L'ÉLAN n'engage rien à sa place : Noa prévient Joël, qui porte le projet.</p>"),
  boite("methode", "Quand une demande ressemble à un engagement, quatre questions",
   '<ol><li><strong>Qui s\'engage ?</strong> Moi, mon service, mon employeur, une autre organisation ?</li>'
   '<li><strong>À quoi ?</strong> Un lieu, du matériel, de l\'argent, du temps d\'agent ?</li>'
   '<li><strong>Y a-t-il déjà un texte ?</strong> Une convention existe peut-être déjà.</li>'
   '<li><strong>Qui peut signer ?</strong> Je ne le suis pas, sauf si on me l\'a confié par écrit.</li></ol>'),
 ],
 "verso": [
  "<h2>Qui signe ?</h2>",
  table(["Partie", "Qui engage l'organisation", "Ce que je fais"], [
   ["**Une commune**", "En général le maire, quand le conseil municipal l'a autorisé.", "Je ne promets rien en son nom. Je m'adresse à la mairie."],
   ["**Une association**", "Son représentant, selon ses statuts (par exemple le président).", "Je demande qui peut engager l'association."],
   ["**Mon employeur**", "La personne qui a reçu une délégation de signature.", "Je prépare le dossier et je le fais valider par mon responsable."],
  ], "signe"),
  boite("reperes", "À savoir",
   "<p>Dans les communes de Nouvelle-Calédonie, de nombreuses délibérations du conseil municipal <strong>autorisent le maire à signer une convention</strong>. "
   "Cet exemple montre le principe : <strong>celui qui signe a reçu le pouvoir de le faire</strong>.</p>"
   '<p class="ref">Exemples : conseil municipal de Nouméa, 14 novembre 2017 (matériel informatique) ; Dumbéa, délibérations n° 2022/305 et n° 2023/277</p>'),
  "<h2>Quatre mots à connaître</h2>",
  table(["Mot", "Ce que cela veut dire"], [
   ["**Une partie**", "Une personne ou une organisation qui s'engage dans la convention."],
   ["**Un avenant**", "Un écrit qui modifie une convention déjà signée."],
   ["**La tacite reconduction**", "La convention continue d'elle-même à la fin de sa durée, sans nouvelle signature, sauf si l'une des parties s'y oppose."],
   ["**Autoriser à signer**", "Donner à une personne, par décision écrite, le pouvoir d'engager l'organisation."],
  ], "mots4"),
  "<h2>Mes réflexes</h2>",
  '<div class="trois">'
  + boite("retenir", "Je ne promets pas", "<p>Je ne dis pas « c'est d'accord » pour mon employeur quand il n'a pas décidé.</p>")
  + boite("retenir", "Je prépare", "<p>Je réunis ce qui est utile : qui, quoi, quand, combien de temps.</p>")
  + boite("retenir", "Je transmets", "<p>J'envoie à celui qui peut décider, avec le contexte, et je dis pour quand j'ai besoin d'une réponse.</p>")
  + boite("retenir", "Je garde la bonne version", "<p>Je travaille sur la dernière version signée, pas sur un brouillon.</p>")
  + boite("retenir", "Je regarde la durée", "<p>Je note la date de fin, et ce qui se passe après.</p>")
  + boite("retenir", "Je préviens ceux qui sont concernés", "<p>Une convention touche d'autres agents : accueil, logistique, informatique. Je leur dis ce qui change.</p>")
  + "</div>",
  boite("piege", "Pièges à éviter",
   "<p><strong>Signer « pour accord »</strong> un document reçu, alors que je n'ai pas le pouvoir de signer. "
   "<strong>Promettre une salle ou du matériel</strong> avant que la décision soit prise. "
   "<strong>Croire qu'un simple échange de courriels règle tout</strong> : un courriel garde une trace, mais il ne remplace pas toujours une convention. "
   "Dans le doute, je demande si une convention est nécessaire.</p>"),
 ],
 "zoom_recto": 1.1, "zoom_verso": 1.0,
 "sources": "Aucun texte du corpus DINA ne définit la convention (D149) : cette fiche présente des repères pédagogiques. Le principe « qui signe a reçu pouvoir de signer » "
            "est illustré par des délibérations publiées de conseils municipaux (Nouméa, Dumbéa). Définitions : sens courant des mots du droit des contrats. À confirmer par un juriste RH.",
}

fa.CSS += """
.etapes td:first-child { width: 31mm; } .etapes td:nth-child(2) { width: 62mm; }
.roles td:first-child { width: 40mm; } .roles td:nth-child(2) { width: 68mm; }
.mots2 td:first-child { width: 32mm; } .mots2 td:nth-child(2) { width: 80mm; }
.canaux td:first-child { width: 32mm; } .canaux td:nth-child(2) { width: 66mm; }
.avantapres td { width: 50%; }
.trois3 td:first-child { width: 28mm; } .trois3 td:nth-child(2) { width: 70mm; }
.rubriques td:first-child { width: 33mm; } .rubriques td:nth-child(2) { width: 58mm; }
.signe td:first-child { width: 32mm; } .signe td:nth-child(2) { width: 68mm; }
.mots4 td:first-child { width: 42mm; }
.lignes p { margin: 0 0 1.2mm; padding-bottom: 5.2mm; border-bottom: .3mm dotted #B9B3AA; }
.lignes p:last-child { margin-bottom: 0; }
"""
fa.FICHES[:] = [F, F2, F3]
orig = fa.page
def page(f, cote, contenu, logo):
    s = orig(f, cote, contenu, logo)
    return s.replace("Module 1 · Je me repère", "Module 3 · Je travaille avec les autres").replace("Module 1 · Verso", "Module 3 · Verso")
fa.page = page
import argparse
if len(sys.argv) < 2: sys.argv = ['x', '--racine', 'src', '--sortie', 'src/assets/fiches']
fa.main()
