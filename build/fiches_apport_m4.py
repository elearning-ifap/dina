import sys
sys.path.insert(0, __import__('os').path.dirname(__import__('os').path.abspath(__file__)))
import fiches_apport as fa
from fiches_apport import boite, table, liste, inline

# ---------------------------------------------------------------------------------------------
# Fiches d'apport du module 4 « J'agis dans un cadre sécurisé » (D154, D168).
# FA-M4-01 Protéger les données et l'information · FA-M4-02 Commande publique : contrat, bon de commande, service fait
# FA-M4-03 Santé, sécurité et harcèlement : les repères.
# Source unique des textes : Storyboard M4 en pages (apports M4-P2, M4-P3, M4-P4 et fiches M4-E2, E3, E3B, E4). Rien de plus.
# Points juridiques non établis : voir les notes « valider » du storyboard ; ils sont repris dans « Sources » de chaque fiche.
# ---------------------------------------------------------------------------------------------

F = {
 "id": "FA-M4-01",
 "titre": "Protéger les données et l'information",
 "sous_titre": "Ne partager que l'utile, avec qui en a besoin, par l'outil prévu par mon employeur",
 "competences": "C10",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>Je ne partage que <strong>l'utile</strong>, avec <strong>qui en a besoin</strong>, par l'<strong>outil prévu par mon employeur</strong>. "
   "Je n'envoie <strong>aucune donnée de personnes</strong> à un outil non autorisé. Je <strong>vérifie</strong> avant de cliquer ou de publier.</p>"),
  "<h2>Trois mots à connaître</h2>",
  table(["Mot", "Ce que cela veut dire"], [
   ["**Donnée personnelle**", "Une information qui permet d'identifier une personne."],
   ["**Outil autorisé**", "L'outil que mon employeur met à ma disposition pour travailler."],
   ["**Hameçonnage**", "Une tentative de me faire livrer mon mot de passe par un faux message."],
  ], "mots3"),
  boite("methode", "Cinq réflexes",
   '<ol><li>Je <strong>repère</strong> ce qui identifie une personne ou touche à sa situation.</li>'
   '<li>Je partage par <strong>l\'outil de mon employeur</strong>, avec un accès limité, sans la messagerie personnelle.</li>'
   '<li>Je ne colle <strong>aucune donnée de personnes</strong> dans un outil d\'IA non autorisé ; ce que l\'IA répond, je le <strong>vérifie</strong> avant de l\'utiliser.</li>'
   '<li>Je ne réponds pas à une <strong>demande de mot de passe</strong> ; je signale le message.</li>'
   '<li>Hors du service, je ne publie rien qui expose mon travail, mes collègues ou les usagers.</li></ol>'),
  boite("exemple", "Exemple : le tableau nominatif",
   "<p>« Léna, je ne peux pas vous envoyer le tableau nominatif. Voici le total par lieu, sans noms. Pour plus de détail, il faut l'accord de mon responsable. »</p>"),
 ],
 "verso": [
  "<h2>Avant d'envoyer, de publier ou de coller : quatre questions</h2>",
  table(["Question", "Ce que je regarde"], [
   ["**1. Que contient le document ?**", "Noms, téléphones, situations de personnes ? Si oui, je prends des précautions."],
   ["**2. À qui j'envoie, et pourquoi ?**", "La personne en a-t-elle besoin pour son travail ? Sinon, je n'envoie pas."],
   ["**3. Quel outil, quel accès ?**", "L'outil de mon employeur, un accès limité, jamais ma messagerie personnelle."],
   ["**4. Ai-je vérifié avant de cliquer ?**", "Un message qui presse, qui menace ou qui demande un mot de passe est un signal d'alerte."],
  ], "questions4"),
  "<h2>Selon ce que je partage</h2>",
  table(["Situation", "Ce que je fais"], [
   ["**Un total, sans noms**", "Je peux le partager largement, avec l'outil de mon employeur."],
   ["**Un fichier de personnes**", "Accès limité, à ceux qui en ont besoin, avec l'accord de mon responsable."],
   ["**Un outil d'IA**", "Je n'y mets aucune donnée de personnes ; ce qu'il répond, je le vérifie avant de l'utiliser."],
   ["**Une photo ou une publication**", "Je regarde ce qui est lisible à l'arrière-plan avant de publier."],
  ], "situations"),
  boite("reperes", "Ce que dit le texte",
   "<p>Ce que je sais par mes fonctions n'est pas à diffuser : secret et discrétion. La loi Informatique et libertés s'applique en Nouvelle-Calédonie. "
   "Le travail à distance est autorisé, ce n'est pas un droit : mon employeur fixe ses règles de sécurité.</p>"
   '<p class="ref">Délibération n° 81 du 24 juillet 1990, art. 20 et 21 · loi Informatique et libertés, art. 125</p>'),
  boite("piege", "Bonnes pratiques, pas des règles",
   "<p>Ce qui concerne l'<strong>IA</strong> et la <strong>cybersécurité</strong> relève de bonnes pratiques, pas de règles communes à tous les employeurs. "
   "Les outils autorisés, la messagerie à utiliser et la personne à prévenir en cas d'incident <strong>varient selon l'employeur</strong>.</p>"),
  boite("methode", "Dans mon service, je renseigne",
   '<div class="lignes"><p>L\'outil autorisé pour partager des documents :</p><p>La personne à prévenir en cas d\'incident ou de message suspect :</p>'
   '<p>Mon responsable en cas de doute :</p></div>'),
 ],
 "zoom_recto": 1.4, "zoom_verso": 1.1,
 "sources": "Délibération n° 81 du 24 juillet 1990, art. 20 et 21 (secret et discrétion) ; loi Informatique et libertés (loi n° 78-17), art. 125, applicable en Nouvelle-Calédonie ; "
            "télétravail : loi du pays n° 2021-3 et délibération n° 155. Ces références sont à faire valider. IA et cybersécurité : bonnes pratiques, aucune règle calédonienne identifiée.",
}

F2 = {
 "id": "FA-M4-02",
 "titre": "Commande publique : contrat, bon de commande, service fait",
 "sous_titre": "Exprimer un besoin sans engager la dépense, et vérifier qu'une prestation a été faite",
 "competences": "C11 · C09",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>Les moyens publics <strong>servent au service</strong>. Je n'<strong>engage aucune dépense</strong> : j'exprime un besoin, et le circuit décide. "
   "Une prestation n'est payée que si elle a été <strong>réalisée</strong>.</p>"),
  "<h2>Quatre mots à connaître</h2>",
  table(["Mot", "Ce que cela veut dire"], [
   ["**Un contrat ou un bon de commande**", "Il engage la dépense. Il est établi par la personne habilitée, pas par moi."],
   ["**Le service fait**", "La vérification que ce qui est facturé a bien été livré ou réalisé. Il précède le paiement."],
   ["**Une personne habilitée**", "Celle qui atteste le service fait. Ce n'est pas à moi de le déclarer."],
   ["**Le budget**", "Les dépenses sont prévues au budget : le budget primitif (BP) fixe l'année, un budget supplémentaire (BS) peut l'ajuster. Cela explique certains délais."],
  ], "mots4b"),
  boite("methode", "Cinq repères pour les moyens du service",
   '<ol><li>Les moyens du service servent au service : véhicule, matériel, téléphone, imprimante.</li>'
   '<li>Je dis le <strong>besoin</strong> (quoi, combien, pour quand). Je n\'engage aucune dépense.</li>'
   '<li>Je <strong>ne favorise aucun fournisseur</strong> : le circuit compare.</li>'
   '<li>À la livraison, je <strong>compare</strong> ce qui arrive avec ce qui était prévu.</li>'
   '<li>Je <strong>signale l\'écart</strong> ; la personne habilitée atteste le service fait.</li></ol>'),
  boite("exemple", "Exemple : le pick-up",
   "<p>« Cédric, le pick-up sert au service. Pour ton colis, on cherche une autre solution. »</p>"),
 ],
 "verso": [
  "<h2>Selon ce qu'on me demande</h2>",
  table(["Situation", "Ce que je fais"], [
   ["**Un véhicule**", "Usage de service. Je dis non simplement à un détour personnel, et je propose une autre solution."],
   ["**Une impression ou une fourniture**", "Pour le service seulement. Pour autre chose, je demande à mon responsable."],
   ["**Un achat**", "J'exprime le besoin ; je ne commande pas moi-même."],
   ["**Un fournisseur recommandé**", "Une piste parmi d'autres, ni retenue ni écartée d'avance."],
  ], "situations2"),
  "<h2>Vérifier le service fait : quatre questions</h2>",
  table(["Question", "Ce que je fais"], [
   ["**1. Qu'est-ce qui était prévu ?**", "Je retrouve la quantité, la date, le lieu dans le bon de commande, le contrat ou la convention."],
   ["**2. Qu'est-ce qui est arrivé ?**", "Je compte, je regarde, je compare. Je garde le bon de livraison et, si utile, une photo."],
   ["**3. Y a-t-il un écart ?**", "J'écris l'écart avec des chiffres et des dates. Je ne valide pas la facture sur une promesse."],
   ["**4. Qui atteste ?**", "Je remets mon constat à la personne habilitée. Je ne signe pas à sa place."],
  ], "sf4"),
  boite("retenir", "À retenir",
   "<p>Je compare, je constate, je transmets. <strong>La décision de payer ou non ne m'appartient pas.</strong> "
   "L'argent public est celui de tous : je l'utilise avec <strong>probité</strong> (aucun avantage pour moi ni pour un proche) et <strong>sobriété</strong> (le juste besoin).</p>"),
  boite("piege", "Je ne retiens aucun seuil chiffré",
   "<p>Les règles de commande, le circuit d'achat, les personnes habilitées et les règles d'usage des véhicules <strong>varient selon l'employeur</strong>. "
   "En cas de doute, je demande à mon responsable qui est le référent chez moi.</p>"),
 ],
 "zoom_recto": 1.4, "zoom_verso": 1.3,
 "sources": "Mise en concurrence : délibération n° 398, art. 2 ; délibération n° 424 (à relire) ; aucun seuil cité. Probité : code pénal, art. 432-11 et 432-14 (non relus). "
            "Qui atteste le service fait : décret n° 2013-512, art. 4-1, et accord local DGFiP, à faire valider par l'expert. Sobriété : bonne pratique, aucune règle calédonienne identifiée. "
            "Budget primitif et supplémentaire : repères de calendrier.",
}

F3 = {
 "id": "FA-M4-03",
 "titre": "Santé, sécurité et harcèlement : les repères",
 "sous_titre": "Sécuriser, alerter, orienter : ce que je fais et ce que je laisse aux services compétents",
 "competences": "C12 · C18",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>Face à un danger, je <strong>sécurise sans me mettre en danger</strong>, j'<strong>alerte</strong> et je <strong>signale</strong>. "
   "Face à un collègue en difficulté, j'<strong>écoute</strong> et j'<strong>oriente</strong> : je n'enquête pas, je ne qualifie pas, je ne promets pas le secret absolu.</p>"),
  "<h2>Deux mots à connaître</h2>",
  table(["Mot", "Ce que cela veut dire"], [
   ["**Risque psychosocial**", "Un risque pour la santé qui vient de la façon dont le travail est vécu : surcharge, tensions, remarques répétées."],
   ["**Harcèlement**", "Dire s'il y en a n'est pas mon rôle : c'est l'affaire de l'employeur et des autorités compétentes."],
  ], "mots2b"),
  boite("methode", "Quatre gestes",
   '<ol><li>Je <strong>sécurise</strong> sans me mettre en danger, et je préviens les personnes autour.</li>'
   '<li>J\'<strong>alerte</strong> : le <strong>15</strong> (SAMU) pour une urgence de santé, le <strong>18</strong> (pompiers) pour un incendie ou un danger, '
   'le <strong>17</strong> (police, gendarmerie), puis mon responsable.</li>'
   '<li>J\'<strong>écoute</strong> un collègue, je ne promets pas le secret absolu, et je l\'<strong>oriente</strong> : son responsable, les ressources humaines, la médecine de prévention.</li>'
   '<li>Je <strong>signale</strong> un risque ou un presque-accident : c\'est ce qui permet de le corriger.</li></ol>'),
  boite("exemple", "Exemple : un collègue qui se confie",
   "<p>« Je ne peux pas te promettre de n'en parler à personne, mais je ne ferai rien sans t'en parler d'abord. Tu peux en parler à ton responsable ou à la médecine de prévention. »</p>"),
 ],
 "verso": [
  "<h2>Selon la situation</h2>",
  table(["Situation", "Ce que je fais"], [
   ["**Un danger**", "Je sécurise, je préviens, je signale."],
   ["**Un accident**", "J'appelle le 15 si c'est grave, puis je préviens mon responsable et les ressources humaines. La procédure dépend de mon statut."],
   ["**Un collègue en difficulté**", "J'écoute, je ne promets pas le secret absolu, j'oriente vers son responsable, les ressources humaines ou la médecine de prévention."],
   ["**Des remarques qui se répètent**", "Je n'enquête pas, je ne qualifie pas. J'oriente, et je peux témoigner si on me le demande."],
  ], "situations3"),
  boite("reperes", "Ce que dit le texte",
   "<p><strong>Danger grave et imminent.</strong> Le droit d'alerter l'employeur ou un représentant du personnel au comité technique paritaire (CTP) est prévu. "
   "Dans la fonction publique calédonienne, on parle du CTP, pas du CHSCT.</p>"
   "<p><strong>Harcèlement.</strong> La loi du pays encadre le harcèlement moral et sexuel dans la fonction publique ; témoigner de faits de harcèlement ne peut pas valoir de sanction.</p>"
   '<p class="ref">Délibération n° 181, art. 76 · loi du pays n° 2014-9, art. 11</p>'),
  boite("retenir", "À retenir",
   "<p>Je sécurise, j'alerte, j'oriente. <strong>Je ne me substitue ni aux secours ni aux services compétents.</strong> "
   "Un risque physique se corrige quand on le signale. Une difficulté entre collègues demande d'abord qu'on écoute, puis qu'on oriente.</p>"),
  boite("piege", "Ce qui varie selon l'employeur",
   "<p>Les interlocuteurs (ressources humaines, médecine de prévention, représentants du personnel) et les dispositifs d'écoute <strong>varient selon l'employeur</strong>. "
   "Le droit de retrait n'est pas enseigné ici : retenez le réflexe d'alerte et suivez la procédure de votre employeur.</p>"),
  boite("methode", "Dans mon service, je renseigne",
   '<div class="lignes"><p>Mon responsable :</p><p>Le service des ressources humaines :</p><p>La médecine de prévention :</p></div>'),
 ],
 "zoom_recto": 1.4, "zoom_verso": 1.1,
 "sources": "Numéros d'urgence : 15, 17, 18. Délibération n° 181, art. 61, 68 et 76 ; loi du pays n° 2014-9, art. 11. Droit de retrait : aucun fondement identifié, non enseigné. "
            "Accident de service : fiche service-public.nc, procédure selon le statut. Interlocuteurs et dispositifs d'écoute propres à chaque employeur. Relecture RH ou prévention requise avant diffusion.",
}

fa.CSS += """
.mots3 td:first-child, .mots2b td:first-child { width: 38mm; } .mots4b td:first-child { width: 46mm; }
.questions4 td:first-child, .sf4 td:first-child { width: 52mm; }
.situations td:first-child, .situations2 td:first-child, .situations3 td:first-child { width: 48mm; }
.lignes p { margin: 0 0 1.2mm; padding-bottom: 5.2mm; border-bottom: .3mm dotted #B9B3AA; }
.lignes p:last-child { margin-bottom: 0; }
"""
fa.FICHES[:] = [F, F2, F3]
orig = fa.page
def page(f, cote, contenu, logo):
    s = orig(f, cote, contenu, logo)
    return s.replace("Module 1 · Je me repère", "Module 4 · J'agis dans un cadre sécurisé").replace("Module 1 · Verso", "Module 4 · Verso")
fa.page = page
if len(sys.argv) < 2: sys.argv = ['x', '--racine', 'src', '--sortie', 'src/assets/fiches']
fa.main()
