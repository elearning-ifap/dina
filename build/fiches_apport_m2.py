import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fiches_apport as fa
from fiches_apport import boite, table, liste, inline

F1 = {
 "id": "FA-M2-01",
 "titre": "Ma marge d'action",
 "sous_titre": "Ce que je peux faire seul, ce que je fais valider, jusqu'où j'exécute une instruction",
 "competences": "C03 · C04",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>Ma <strong>fiche de poste</strong> fixe ma marge. Ce qui <strong>engage mon employeur</strong>, je le prépare et je le fais valider.</p>"
   "<p><strong>Engager l'employeur</strong>, c'est signer, dépenser, promettre ou prendre position en son nom. "
   "Ce qui n'est pas écrit dans ma fiche de poste n'est pas autorisé pour autant. Si je n'ai pas de fiche de poste, je la demande.</p>"),
  "<h2>Ma marge, en deux colonnes</h2>",
  table(["Je peux, seul", "Je fais valider"], [
   ["Organiser mon travail", "Une dépense ou une promesse de financement"],
   ["Demander une précision factuelle", "Une prise de position au nom de l'employeur"],
   ["Proposer des options", "Un changement de calendrier"],
   ["Signaler un retard ou un risque", "Une communication externe sensible"],
  ], "marge"),
  "<h2>Dans le dossier Passerelles, quatre rôles</h2>",
  table(["Qui", "Ce qu'il fait"], [
   ["**L'ÉLAN appuie**", "Il apporte un diagnostic et coordonne les partenaires : c'est sa mission."],
   ["**Noa qualifie et prépare**", "Il analyse la demande, fiabilise les informations et rédige la note : c'est la mission de son poste."],
   ["**Passerelles décide de son projet**", "L'association crée sa permanence, recrute ses bénévoles, organise le transport."],
   ["**Ariane décide de l'appui**", "La directrice décide si l'ÉLAN accompagne le projet, et comment. Noa lui donne les éléments pour décider."],
  ], "roles2"),
  boite("retenir", "À retenir",
   "<p><strong>Préparer une décision n'est pas la prendre.</strong> Une promesse faite par un agent peut engager son employeur : "
   "dans le doute, je propose et je fais valider.</p>"),
 ],
 "verso": [
  "<h2>Le circuit d'une note</h2>",
  table(["Qui", "Son rôle"], [
   ["**Noa rédige**", "Il rassemble, vérifie, propose. Il signale ce qui est incertain."],
   ["**Samuel contrôle**", "Il relit, corrige, valide l'envoi au nom du pôle."],
   ["**Ariane décide**", "Elle engage l'ÉLAN. Ce qu'elle décide s'applique à tous, y compris quand on n'est pas d'accord."],
  ], "circuit"),
  boite("methode", "Rendre compte, alerter : deux mots à distinguer",
   "<ol><li><strong>Rendre compte</strong>, c'est dire ce qui est fait, ce qui reste incertain, et ce qu'on attend.</li>"
   "<li><strong>Alerter</strong>, c'est prévenir dès qu'un risque ou un retard apparaît, sans attendre l'échéance.</li></ol>"),
  "<h2>Exécuter les instructions, et ses limites</h2>",
  "<p>L'agent public exécute les instructions de son responsable. Une seule exception : un ordre <strong>manifestement illégal</strong> "
  "<strong>et</strong> de nature à <strong>compromettre gravement un intérêt public</strong>. Les deux conditions sont nécessaires.</p>",
  table(["Je ne suis pas d'accord", "L'ordre me paraît illégal"], [
   ["Je le dis à mon responsable, avec mes arguments.", "Je vérifie le texte applicable."],
   ["J'applique la décision une fois prise.", "J'alerte mon responsable, ou le niveau au-dessus."],
   ["Je ne le fais pas savoir à l'extérieur.", "Je ne refuse que si l'ordre est manifestement illégal et compromet gravement un intérêt public."],
  ], "ordres"),
  boite("piege", "Ne pas confondre",
   "<p>Le <strong>droit de retrait</strong> est une autre règle, vue au module 4. Pour une question de déontologie, "
   "je peux m'adresser au <strong>service des ressources humaines de mon employeur</strong>.</p>"),
  boite("reperes", "Mes repères dans mon service",
   "<p>Ce que je peux faire seul : ..............................................................................................</p>"
   "<p>Ce que je fais valider, et par qui : .........................................................................</p>"
   "<p>Qui j'alerte en cas d'urgence : ................................................................................</p>"),
 ],
 "zoom_recto": 1.25, "zoom_verso": 1.25,
 "sources": "Délibération n° 81 du 24 juillet 1990, art. 22, applicable aux contractuels par la loi du pays n° 2021-4. "
            "Storyboard M2 v0.5 (fiche de poste de Noa, dossier Passerelles).",
}

F2 = {
 "id": "FA-M2-02",
 "titre": "Mon statut, en repères",
 "sous_titre": "Ce qui ne change pas quel que soit mon statut, et ce qui en dépend",
 "competences": "C03",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>Fonctionnaire, stagiaire ou contractuel, catégorie A, B, C ou D : <strong>les devoirs sont les mêmes</strong>. "
   "Ce qui dépend du statut, c'est surtout la façon d'être recruté, la carrière, certaines règles de congés et de fin de fonctions.</p>"),
  "<h2>Ce qui ne change pas, ce qui dépend du statut</h2>",
  table(["Ce qui ne change pas", "Ce qui dépend du statut"], [
   ["Servir l'intérêt général, avec neutralité", "La façon d'être recruté : concours ou contrat"],
   ["Discrétion et secret professionnels", "Le début des fonctions : un stage avant la titularisation, pour le fonctionnaire"],
   ["Exécuter les instructions de son responsable", "La carrière : grade et avancement, ou durée du contrat"],
   ["Le droit à la rémunération, aux congés, à la formation", "Certaines règles de congés et de fin de fonctions"],
  ], "statut"),
  boite("methode", "Où trouver la règle",
   "<ol><li>Mon <strong>gestionnaire RH</strong> : il connaît ma situation précise.</li>"
   "<li>Le site de la <strong>DRHFPNC</strong> (page « Droits et obligations »).</li>"
   "<li>Les textes en vigueur sur <strong>Leginova</strong>.</li></ol>"),
  boite("reperes", "Mes repères",
   "<p>Mon statut et ma catégorie : ..............................................................................................</p>"
   "<p>Mon gestionnaire RH : ......................................................................................................</p>"),
 ],
 "verso": [
  "<h2>Le télétravail</h2>",
  boite("essentiel", "",
   "<p>Il est <strong>accordé par l'employeur, sur demande écrite : ce n'est pas un droit</strong>. "
   "Trois jours au plus par semaine, deux jours sur place au moins. Autorisation d'un an au plus, renouvelable. "
   "Un refus est motivé et précédé d'un entretien. <strong>Chaque employeur fixe ses propres règles.</strong></p>"),
  "<h2>Trois positions de carrière</h2>",
  "<p>Elles concernent les <strong>fonctionnaires</strong>.</p>",
  table(["Position", "Ce que cela veut dire"], [
   ["**Détachement**", "Le fonctionnaire travaille hors de son corps d'origine, mais garde ses droits à l'avancement et à la retraite dans ce corps."],
   ["**Mise à disposition**", "Le fonctionnaire reste dans son corps et reste payé par son administration, mais travaille ailleurs."],
   ["**Disponibilité**", "Le fonctionnaire quitte un temps son administration. Il n'est plus payé et, sauf exception, n'acquiert plus de droits à l'avancement et à la retraite. Il conserve toutefois, jusqu'à 4 ans, ses droits pour la liquidation de sa pension."],
  ], "positions"),
  boite("retenir", "À retenir",
   "<p><strong>Stagiaire ?</strong> Vous pouvez être détaché ou mis à disposition, pas mis en disponibilité. "
   "<strong>Contractuel ?</strong> Renseignez-vous auprès de votre employeur.</p>"),
 ],
 "zoom_recto": 1.5, "zoom_verso": 1.5,
 "sources": "Délibération n° 81 du 24 juillet 1990 ; arrêté n° 1065 (art. 28, 75, 90-1, 91) ; loi du pays n° 2021-4 (art. 9) ; "
            "délibération n° 155 du 19 mai 2021 (télétravail) ; page « Droits et obligations » de la DRHFPNC.",
}

F3 = {
 "id": "FA-M2-03",
 "titre": "Informer, prévenir, demander",
 "sous_titre": "Tenir ses échéances, dire ce que vaut une information, demander un appui",
 "competences": "C05 · C17 · C18 · C20",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>Une <strong>échéance</strong> relie mon travail à une décision. La manquer décale la décision de quelqu'un d'autre. "
   "J'organise ma semaine à partir d'elle, en gardant du temps pour relire et corriger.</p>"),
  boite("exemple", "Exemple : pourquoi jeudi 11 h compte",
   "<p><strong>Jeudi 11 h</strong>, Noa rend sa note : Samuel a le temps de la relire. <strong>Vendredi matin</strong>, Ariane la lit et décide "
   "de l'appui de l'ÉLAN. <strong>Passerelles</strong> sait alors sur quoi compter pour organiser sa permanence.</p>"),
  boite("methode", "Quand une urgence décale une échéance",
   "<ol><li>Je repère ce qui est urgent et ce qui peut glisser.</li>"
   "<li>Je préviens <strong>tout de suite</strong> celui dont l'échéance glisse, avec un nouveau délai.</li>"
   "<li>Je traite l'urgent.</li>"
   "<li>Je vérifie, avant d'annoncer, ce qui ne dépend pas de moi.</li></ol>"),
  boite("retenir", "À retenir",
   "<p>Prévenir <strong>tôt</strong>, c'est laisser à l'autre le temps de s'organiser. Prévenir à l'heure de l'échéance, c'est le mettre devant le fait accompli. "
   "Sur site ou à distance, la règle est la même ; à distance, je choisis le canal que l'autre lira tout de suite : un SMS, un appel.</p>"),
  "<h2>Ce que vaut une information</h2>",
  table(["Je transmets une information…", "Comment"], [
   ["**Certaine**", "Vérifiée, datée, sourcée : je la présente comme acquise."],
   ["**Provisoire**", "Je la donne avec son statut et sa date : « 312, provisoire, consolidé jeudi »."],
   ["**Un témoignage**", "Je le cite avec sa source, sans en faire un chiffre : « selon l'association… »."],
  ], "infos"),
 ],
 "verso": [
  "<h2>Bien demander un appui</h2>",
  "<p><strong>Demander un appui</strong>, ce n'est pas avouer un échec : c'est éviter de perdre du temps seul, "
  "ou d'en faire perdre aux autres avec une question floue. Je cherche d'abord, en me fixant une limite de temps. "
  "Puis je m'adresse à celui qui détient l'information ou la décision, <strong>pas au plus disponible</strong>.</p>",
  boite("methode", "Une demande qui obtient une réponse rapide",
   "<ol><li><strong>Le contexte</strong> : à quoi servira la réponse.</li>"
   "<li><strong>Ce que j'ai déjà cherché.</strong></li>"
   "<li><strong>Une question précise.</strong></li>"
   "<li><strong>Le délai</strong>, et pourquoi.</li></ol>"),
  "<h2>Quatre sortes de demandes</h2>",
  table(["Je veux…", "Je m'adresse à…"], [
   ["**Une information** : un fait", "Le service qui le produit"],
   ["**De l'aide** : faire mieux", "Un collègue expérimenté"],
   ["**Une validation** : quelqu'un doit décider", "Mon responsable"],
   ["**Alerter** : un risque ou un délai intenable", "Mon responsable, sans attendre"],
  ], "demandes"),
  boite("alerte", "Les accès sont personnels",
   "<p>Je n'utilise jamais les identifiants d'un collègue, même pour dépanner.</p>"),
  "<h2>Pour qui je travaille ?</h2>",
  "<p>Un service de qualité répond au <strong>besoin réel de l'usager</strong>, au bon moment, sans erreur. Même quand on ne voit jamais l'usager, "
  "son dossier passe par notre travail : Noa vérifie un chiffre, Ariane décide à temps, Passerelles s'organise, une habitante trouve de l'aide près de chez elle.</p>",
  boite("reperes", "Et dans mon poste ?",
   "<p>Qui est au bout de la chaîne de mon travail ? ........................................................................</p>"),
 ],
 "zoom_recto": 1.3, "zoom_verso": 1.3,
 "sources": "Storyboard M2 v0.5 (épisodes 1 à 3 et défi). Délibération n° 155 du 19 mai 2021 (télétravail) pour l'encadré à distance. "
            "Aucun texte propre à la gestion des échéances : repères pédagogiques à faire valider par les référents employeurs.",
}

fa.CSS += """
.marge td { width: 50%; } .roles2 td:first-child { width: 52mm; } .circuit td:first-child { width: 36mm; }
.ordres td { width: 50%; } .statut td { width: 50%; } .positions td:first-child { width: 36mm; }
.infos td:first-child { width: 44mm; } .demandes td:first-child { width: 80mm; }
"""
fa.FICHES[:] = [F1, F2, F3]
orig = fa.page
def page(f, cote, contenu, logo):
    s = orig(f, cote, contenu, logo)
    return s.replace("Module 1 · Je me repère", "Module 2 · Je trouve ma place").replace("Module 1 · Verso", "Module 2 · Verso")
fa.page = page
if len(sys.argv) < 2: sys.argv = ['x', '--racine', 'src', '--sortie', 'src/assets/fiches']
fa.main()
