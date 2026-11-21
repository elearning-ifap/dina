import sys
sys.path.insert(0, __import__('os').path.dirname(__import__('os').path.abspath(__file__)))
import fiches_apport as fa
from fiches_apport import boite, table, liste, inline

# ---------------------------------------------------------------------------------------------
# Fiches d'apport du module 5 « J'incarne le service public » (D154, D168).
# FA-M5-01 Les principes du service public en situations · FA-M5-02 Loyauté, réserve, discrétion
# Source unique des textes : Storyboard M5 en pages (apports M5-P1 à M5-P4, fiches M5-CONN1 et M5-CONN2). Rien de plus.
# Points juridiques non établis : voir les notes « valider » du storyboard ; ils sont repris dans « Sources » de chaque fiche.
# ---------------------------------------------------------------------------------------------

F = {
 "id": "FA-M5-01",
 "titre": "Les principes du service public en situations",
 "sous_titre": "Égalité, neutralité, continuité, adaptabilité : ce que cela change au guichet, en ligne, avec un proche",
 "competences": "C13 · C16",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>J'accueille chacun avec <strong>les mêmes égards</strong>. J'<strong>adapte ma façon d'expliquer</strong>, jamais ce à quoi la personne a droit. "
   "Ce qui dépasse mon rôle, je le <strong>transmets</strong>.</p>"
   "<p>Je rattache chaque geste à un principe : <strong>égalité, neutralité, continuité, adaptabilité</strong>.</p>"),
  "<h2>Les quatre principes</h2>",
  table(["Principe", "Ce que cela veut dire pour moi"], [
   ["**L'égalité**", "Je traite chacun de la même façon, sans passe-droit pour une connaissance. Égalité ne veut pas dire réponse identique : j'adapte mon explication."],
   ["**La neutralité**", "En service, je ne mêle pas mes opinions à mon travail."],
   ["**La continuité**", "Le service ne s'interrompt pas sans raison."],
   ["**L'adaptabilité**", "Le service évolue avec les besoins des usagers."],
  ], "principes"),
  boite("methode", "Cinq repères pour accueillir",
   '<ol><li>Je <strong>salue</strong>, je me présente (nom, service) et j\'écoute avec bienveillance.</li>'
   '<li><strong>Même traitement pour tous</strong> : pas de passe-droit. J\'adapte mon explication, pas les droits.</li>'
   '<li>Je <strong>reformule</strong> pour vérifier que l\'usager a compris ; si besoin, je cherche un relais.</li>'
   '<li>Avant d\'exiger une pièce, je <strong>vérifie sur la source officielle</strong>.</li>'
   '<li>Ce qui dépasse mon rôle, je le <strong>transmets</strong> au bon service sans le traiter moi-même. Je signale une information périmée.</li></ol>'),
 ],
 "verso": [
  "<h2>Les principes en situations</h2>",
  table(["Situation", "Ce que je fais"], [
   ["**Au guichet**", "Même temps d'écoute, même exigence, pas de passe-droit."],
   ["**En ligne**", "Pas de message militant sur la messagerie professionnelle."],
   ["**Avec un proche**", "Je signale mon lien et je ne traite pas le dossier."],
  ], "situations"),
  "<h2>Deux mots à bien distinguer</h2>",
  table(["Mot", "Ce que cela veut dire"], [
   ["**L'égalité de traitement**", "Traiter chacun de la même façon, sans passe-droit pour une connaissance."],
   ["**Orienter**", "Indiquer le bon service quand la demande n'est pas la mienne."],
  ], "mots2c"),
  boite("reperes", "Ce que dit le texte",
   "<p>Ce que j'apprends d'un usager reste dans le service : c'est le secret professionnel. L'égalité et la neutralité figurent parmi les droits et obligations des agents, "
   "rappelés par la DRHFPNC.</p>"
   '<p class="ref">Délibération n° 81 du 24 juillet 1990, art. 20 · page DRHFPNC « Les droits et obligations »</p>'),
  boite("piege", "Continuité et adaptabilité : des principes, pas des textes",
   "<p>Aucun texte calédonien n'est cité ici pour la continuité et l'adaptabilité : je les emploie comme <strong>principes</strong> du service public.</p>"),
  boite("retenir", "À retenir",
   "<p>Je rattache chaque geste à un principe. Mon employeur peut avoir une charte ou des règles d'accueil : en cas de doute, je demande à mon responsable.</p>"),
  boite("methode", "Dans mon service, je renseigne",
   '<div class="lignes"><p>Les règles ou la charte d\'accueil de mon employeur :</p><p>Mon responsable :</p></div>'),
 ],
 "zoom_recto": 1.4, "zoom_verso": 1.2,
 "sources": "Égalité et neutralité : page DRHFPNC « Les droits et obligations » ; secret : délibération n° 81 du 24 juillet 1990, art. 20. Continuité et adaptabilité : aucun texte calédonien au corpus, "
            "formulation simple à faire valider par un expert.",
}

F2 = {
 "id": "FA-M5-02",
 "titre": "Loyauté, réserve, discrétion",
 "sous_titre": "Ce que je peux dire, publier ou partager, en service et en dehors",
 "competences": "C13 · C14",
 "recto": [
  boite("essentiel", "L'essentiel",
   "<p>En service, je reste <strong>neutre</strong>. En dehors, je m'exprime avec <strong>mesure</strong>. Ce que je sais par mes fonctions, je le <strong>garde</strong>.</p>"),
  "<h2>Quatre mots à connaître</h2>",
  table(["Mot", "Ce que cela veut dire"], [
   ["**La loyauté**", "Je suis responsable de ce qui m'est confié et je suis les instructions de ma hiérarchie. Être loyal, c'est aussi dire les faits tels qu'ils sont."],
   ["**La réserve**", "Mon opinion m'appartient, mais je m'exprime avec mesure, y compris en dehors du service et sur les réseaux sociaux."],
   ["**La discrétion**", "Ce que je sais par mes fonctions n'est pas à répéter, même à un proche."],
   ["**La responsabilité**", "Je réponds de mes actes. Si je ne sais pas, je demande conseil."],
  ], "quatre"),
  boite("methode", "Quatre repères pour garder sa réserve",
   '<ol><li>Je <strong>ne relaie</strong> aucun message militant, surtout pas par la messagerie professionnelle.</li>'
   '<li>Mon opinion m\'appartient, mais j\'en parle <strong>avec mesure</strong>, y compris sur les réseaux sociaux.</li>'
   '<li>Je n\'affiche pas de signe ou d\'objet politique ou religieux ostentatoire dans le service.</li>'
   '<li>Si mon image de service circule, je <strong>demande le retrait</strong> et j\'en informe mon responsable.</li></ol>'),
 ],
 "verso": [
  "<h2>Selon la situation</h2>",
  table(["Situation", "Ce que je fais"], [
   ["**Un message militant**", "Je ne le relaie pas par la messagerie professionnelle."],
   ["**Une photo avec mon badge**", "Je demande le retrait et j'en informe mon responsable."],
   ["**Une demande de « présenter mieux »**", "Je propose une formulation fidèle, j'explique le risque, je laisse mon responsable décider et je garde une trace."],
  ], "situations"),
  "<h2>Avant de décider : six questions</h2>",
  table(["Question", "Pourquoi"], [
   ["**Qui est concerné ? Ai-je un lien avec lui ?**", "Famille, proche, intérêt : un lien peut influencer, ou sembler influencer, mon travail."],
   ["**Quel est mon rôle ?**", "J'instruis, je donne un avis, je décide ?"],
   ["**Quand arrive ce cadeau ou cette demande, et quelle est sa valeur ?**", "Avant d'accepter un cadeau, je demande conseil."],
   ["**Est-ce que cela me rend redevable ?**", "Serais-je à l'aise d'en parler autour de moi ?"],
   ["**À qui demander conseil ?**", "Mon responsable, le service RH ou le service juridique. Je garde la trace."],
  ], "six"),
  boite("reperes", "Ce que dit le texte",
   "<p>La liberté d'opinion est un droit de l'agent. Ce qui est encadré, c'est la façon de l'exprimer : <strong>secret et discrétion</strong> (art. 20 et 21), <strong>responsabilité et loyauté</strong> (art. 22). "
   "L'activité est consacrée aux tâches confiées et le cumul est encadré (art. 19 et 19-1). Une circulaire de la DRHFPNC du 18 juin 2024 rappelle ces principes pour les réseaux sociaux.</p>"
   '<p class="ref">Délibération n° 81 du 24 juillet 1990, art. 5 à 9, 19, 19-1, 20 à 22</p>'),
  boite("retenir", "À retenir",
   "<p>En service, neutre. En dehors, mesuré. Sur ce que je sais, discret. Sur les faits, sincère.</p>"),
 ],
 "zoom_recto": 1.4, "zoom_verso": 1.2,
 "sources": "Délibération n° 81 du 24 juillet 1990, art. 5 à 9, 19, 19-1, 20 à 22 ; circulaire DRHFPNC du 18-06-2024, à citer avec précaution. Les six questions s'inspirent d'un guide de l'Agence française anticorruption (2022) : "
            "repère métropolitain, pas une règle applicable en Nouvelle-Calédonie. Pas de définition calédonienne du conflit d'intérêts. Fondement de la sincérité de l'information à confirmer par un juriste.",
}

fa.CSS += """
.principes td:first-child, .quatre td:first-child { width: 38mm; } .situations td:first-child { width: 52mm; } .mots2c td:first-child { width: 48mm; }
.six td:first-child { width: 70mm; }
.lignes p { margin: 0 0 1.2mm; padding-bottom: 5.2mm; border-bottom: .3mm dotted #B9B3AA; }
.lignes p:last-child { margin-bottom: 0; }
"""
fa.FICHES[:] = [F, F2]
orig = fa.page
def page(f, cote, contenu, logo):
    s = orig(f, cote, contenu, logo)
    return s.replace("Module 1 · Je me repère", "Module 5 · J'incarne le service public").replace("Module 1 · Verso", "Module 5 · Verso")
fa.page = page
if len(sys.argv) < 2: sys.argv = ['x', '--racine', 'src', '--sortie', 'src/assets/fiches']
fa.main()
