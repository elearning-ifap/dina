#!/usr/bin/env python3
"""DINA — fiches d'apport M1 (D154) : trois fiches A4 recto verso, en PDF.

Usage : python fiches_apport.py --racine <dossier contenant assets/ ou src/assets/> --sortie <dossier>
Les textes sont dans FICHES ci-dessous (source unique). Rendu : Chrome (Playwright), police Lato/Nunito du produit.
"""
import argparse, html, pathlib, re, sys

BROUILLON = True  # pied de page « avant relecture experte » ; passer à False une fois les experts passés (D152)


def inline(s):
    s = html.escape(s, quote=False)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"\[([^\]]+)\]\((https://[^)\s]+)\)", r'<a href="\2">\1</a>', s)
    return s


def table(cols, rows, classe=""):
    h = "".join(f"<th>{inline(c)}</th>" for c in cols)
    b = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in rows)
    return f'<table class="{classe}"><thead><tr>{h}</tr></thead><tbody>{b}</tbody></table>'


def liste(items, classe=""):
    return f'<ul class="{classe}">' + "".join(f"<li>{inline(i)}</li>" for i in items) + "</ul>"


def frise(etapes):
    out = ""
    for e in etapes:
        out += (f'<div class="etape"><div class="date">{inline(e["date"])}</div><div class="point"></div>'
                f'<div class="carte"><h4>{inline(e["titre"])}</h4><p>{inline(e["texte"])}</p>'
                f'<p class="ref">{inline(e["ref"])}</p></div></div>')
    return f'<div class="frise">{out}</div>'


def boite(classe, titre, corps_html):
    t = f"<h3>{inline(titre)}</h3>" if titre else ""
    return f'<div class="boite {classe}">{t}{corps_html}</div>'


# ---------------------------------------------------------------------------------------------
# Contenus. Chaque fiche = deux pages (recto, verso). Les références sont celles du corpus M1 (couverture M1)
# et des sources vérifiées le 16-11-2026 ; les points à faire valider sont dans « Fiches d'apport M1 — points à valider ».
# ---------------------------------------------------------------------------------------------
FICHES = []

# ------------------------------------------------------------------------------ FA-M1-01
FICHES.append({
    "id": "FA-M1-01",
    "titre": "Qui fait quoi en Nouvelle-Calédonie ?",
    "sous_titre": "État, Nouvelle-Calédonie, provinces, communes : repérer qui est compétent",
    "competences": "C01 · C02",
    "recto": [
        boite("essentiel", "L'essentiel",
              "<p>En Nouvelle-Calédonie, <strong>quatre niveaux</strong> exercent des compétences : l'État, la Nouvelle-Calédonie, "
              "les trois provinces et les communes.</p>"
              "<p>Pour savoir qui s'occupe d'un sujet, on ne part pas de l'État : <strong>on part de la province</strong>. "
              "Elle est compétente dans toutes les matières qui ne sont pas attribuées à l'État, à la Nouvelle-Calédonie ou aux communes. "
              "On dit qu'elle a la compétence « de droit commun ».</p>"
              '<p class="ref">Loi organique n° 99-209 du 19 mars 1999, art. 20</p>'),
        "<h2>Les quatre niveaux</h2>",
        table(["Niveau", "Qui agit", "Exemples de compétences", "Où c'est écrit"], [
            ["**L'État**", "Représenté par le haut-commissaire",
             "La justice ; le maintien de l'ordre et la gendarmerie ; la défense ; la monnaie ; l'entrée et le séjour des étrangers",
             "Loi organique, art. 21"],
            ["**La Nouvelle-Calédonie**", "Le congrès vote les lois du pays ; le gouvernement prend les arrêtés",
             "La fiscalité ; le droit du travail ; la protection sociale ; les programmes de l'enseignement primaire. "
             "Transférés depuis : l'enseignement du second degré (2012), le droit civil et l'état civil (2013)",
             "Loi organique, art. 22 ; transferts : art. 27"],
            ["**Les trois provinces** (Nord, Sud, îles Loyauté)", "Une assemblée de province et un président par province",
             "Tout ce qui n'est pas attribué aux autres : par exemple l'aide au développement économique, la protection de l'environnement, l'aide sociale",
             "Loi organique, art. 20"],
            ["**Les communes**", "Le conseil municipal et le maire",
             "Les services de proximité : collecte des ordures ménagères, voirie communale, bâtiments des écoles primaires publiques",
             "Code des communes de la Nouvelle-Calédonie"],
        ], "niveaux"),
        boite("methode", "Avant d'orienter un usager, trois questions",
              '<ol><li>Le domaine est-il dans la liste de l\'<strong>État</strong> ? Si oui : l\'État.</li>'
              '<li>Est-il dans la liste de la <strong>Nouvelle-Calédonie</strong> ? Si oui : la Nouvelle-Calédonie.</li>'
              '<li>Est-ce un service de proximité confié à la <strong>commune</strong> ? Si oui : la commune. Sinon : <strong>la province</strong>.</li></ol>'),
        boite("exemple", "Exemple",
              "<p><strong>« Les ordures ne sont plus ramassées dans ma rue. »</strong> La collecte des ordures est un service de proximité : "
              "l'usager s'adresse à la <strong>mairie</strong>, qui a parfois confié la collecte à un syndicat de communes.</p>"),
    ],
    "verso": [
        "<h2>Le guichet n'est pas toujours la collectivité compétente</h2>",
        table(["Sujet", "Qui est compétent", "Où l'usager s'adresse"], [
            ["L'état civil (acte de naissance, mariage)", "La Nouvelle-Calédonie (depuis 2013)", "La mairie"],
            ["La couverture sociale", "La Nouvelle-Calédonie", "La CAFAT, organisme chargé de gérer la protection sociale"],
            ["Une plainte contre un retard de justice", "L'État", "Le greffe du tribunal concerné"],
            ["Une aide pour créer son entreprise", "La province", "Les services du développement économique de la province"],
        ], "guichet"),
        "<h2>Trois pièges à connaître</h2>",
        '<div class="trois">'
        + boite("piege", "« Tout ce qui est officiel, c'est l'État »",
                "<p>C'est faux ici. Le droit du travail, la fiscalité ou la protection sociale relèvent de la Nouvelle-Calédonie, "
                "l'environnement et l'aide sociale des provinces.</p>")
        + boite("piege", "L'école primaire, deux niveaux",
                "<p>La Nouvelle-Calédonie fixe les <strong>programmes</strong> de l'enseignement primaire, forme les maîtres et contrôle l'enseignement. "
                "Les <strong>bâtiments</strong> des écoles primaires publiques sont à la charge de la commune.</p>")
        + boite("piege", "La fiscalité, une nuance",
                "<p>La fiscalité relève de la Nouvelle-Calédonie : le congrès crée l'impôt par une loi du pays. "
                "Les provinces et les communes perçoivent aussi des centimes additionnels.</p>")
        + "</div>",
        "<h2>Les institutions en un coup d'œil</h2>",
        table(["Institution", "Rôle"], [
            ["**Le congrès**", "Assemblée de la Nouvelle-Calédonie : vote les lois du pays et les délibérations."],
            ["**Le gouvernement**", "Exécutif de la Nouvelle-Calédonie : prend des arrêtés, dirige l'administration."],
            ["**Le Sénat coutumier**", "Représente les autorités coutumières. La Nouvelle-Calédonie compte huit aires coutumières."],
            ["**Les assemblées de province**", "Une par province : décident dans le domaine de compétence de la province."],
            ["**Le haut-commissaire**", "Représente l'État en Nouvelle-Calédonie."],
            ["**Les 33 communes**", "Conseil municipal et maire : services de proximité et état civil."],
        ], "institutions"),
        boite("reperes", "Repères de population",
              "<p><strong>264 596 habitants</strong> au recensement de 2025 : province Sud 74 %, province Nord 19 %, îles Loyauté 7 %. "
              "Le recensement général relève de l'État ; l'institut de la statistique et des études économiques diffuse les résultats.</p>"
              '<p class="ref">Décret n° 2025-966 du 18 septembre 2025 (résultats du recensement 2025)</p>'),
        boite("retenir", "À retenir",
              "<p>Face à un usager, dites « la Nouvelle-Calédonie » ou « le gouvernement de la Nouvelle-Calédonie ». "
              "Le mot « pays » existe (les lois du pays), mais il vaut mieux nommer l'institution précise.</p>"),
    ],
    "zoom_recto": 1.12,
    "sources": "Loi organique n° 99-209 du 19 mars 1999 (art. 20, 21, 22, 27) ; Code des communes de la Nouvelle-Calédonie ; "
               "gouv.nc, « La collectivité en un coup d'œil » ; ISEE, recensement 2025.",
})

# ------------------------------------------------------------------------------ FA-M1-02
FICHES.append({
    "id": "FA-M1-02",
    "titre": "Références juridiques et historique",
    "sous_titre": "D'où vient la répartition des compétences, et quels textes la fixent",
    "competences": "C01",
    "recto": [
        boite("essentiel", "L'essentiel",
              "<p>La répartition des compétences actuelle est le résultat d'une <strong>histoire politique</strong> : une table ronde en 1983, "
              "les accords de Matignon-Oudinot en 1988, l'accord de Nouméa en 1998. L'accord de Nouméa est devenu un cadre juridique : "
              "la Constitution et la loi organique de 1999 en reprennent les orientations.</p>"
              "<p>Cette fiche décrit le cadre <strong>en vigueur</strong>.</p>"),
        "<h2>Quatre repères historiques</h2>",
        frise([
            {"date": "1983", "titre": "Table ronde de Nainville-les-Roches",
             "texte": "Réunis par l'État près de Paris du 8 au 12 juillet, indépendantistes et non-indépendantistes discutent de l'avenir du territoire. "
                      "La déclaration finale reconnaît la légitimité du peuple kanak, premier occupant, et son droit à l'indépendance, "
                      "à exercer dans une autodétermination ouverte aux autres communautés dont il reconnaît la légitimité. Le RPCR ne la signe pas.",
             "ref": "Source : gouv.nc, 40 ans de Nainville-les-Roches"},
            {"date": "1988-1989", "titre": "Accords de Matignon-Oudinot",
             "texte": "Signés à Paris le 26 juin (Matignon) et le 20 août 1988 (Oudinot). Approuvés par référendum national le 6 novembre 1988, "
                      "ils créent **les trois provinces** (Sud, Nord, îles Loyauté) et prévoient un scrutin d'autodétermination.",
             "ref": "Loi n° 88-1028 du 9 novembre 1988"},
            {"date": "1998-1999", "titre": "Accord de Nouméa",
             "texte": "Signé le 5 mai 1998, approuvé par la population le 8 novembre 1998. Il organise le **transfert progressif** de compétences "
                      "de l'État vers la Nouvelle-Calédonie. La loi organique du 19 mars 1999 fixe les listes de compétences.",
             "ref": "Loi constitutionnelle n° 98-610 du 20 juillet 1998 ; loi organique n° 99-209 du 19 mars 1999"},
            {"date": "Depuis 2000", "titre": "Les transferts de compétences",
             "texte": "Des compétences passent de l'État à la Nouvelle-Calédonie. Par exemple : l'organisation de l'enseignement du second degré "
                      "(1er janvier 2012) et le droit civil et l'état civil (1er juillet 2013).",
             "ref": "Lois du pays n° 2009-09 et n° 2012-2"},
        ]),
        boite("retenir", "Pourquoi c'est utile au quotidien",
              "<p>Ces dates expliquent pourquoi, ici, certaines compétences relèvent de la Nouvelle-Calédonie ou des provinces. "
              "Quand un usager s'étonne (« pourquoi l'état civil ou l'enseignement du second degré relèvent-ils d'ici ? »), la réponse est dans ces transferts.</p>"),
    ],
    "verso": [
        "<h2>Les textes de référence</h2>",
        table(["Texte", "Date", "Ce qu'il apporte"], [
            ["**Accord de Nouméa**", "5 mai 1998\nJORF n° 121 du 27 mai 1998",
             "Fixe les orientations : reconnaissance de l'identité kanak, transfert progressif de compétences, citoyenneté de la Nouvelle-Calédonie."],
            ["**Constitution, titre XIII**", "Loi constitutionnelle du 20 juillet 1998\nart. 76 et 77",
             "Inscrit l'accord de Nouméa dans la Constitution et confie à une loi organique les règles de la Nouvelle-Calédonie."],
            ["**Loi organique n° 99-209**", "19 mars 1999",
             "Statut de la Nouvelle-Calédonie : institutions, compétences. Art. 20 : provinces ; art. 21 : État ; art. 22 : Nouvelle-Calédonie ; art. 27 : transferts."],
            ["**Lois du pays**", "Votées par le congrès\n(art. 99)",
             "Règles de la Nouvelle-Calédonie dans les matières que la loi organique lui confie. Elles ont force de loi."],
            ["**Code des communes de la Nouvelle-Calédonie**", "—",
             "Compétences et fonctionnement des communes."],
        ], "textes"),
        "<h2>Lire le texte officiel de l'accord de Nouméa</h2>",
        boite("lien", "",
              "<p>Accord sur la Nouvelle-Calédonie signé à Nouméa le 5 mai 1998 : "
              '<a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000555817">legifrance.gouv.fr/jorf/id/JORFTEXT000000555817</a></p>'),
        "<h2>Citer un article correctement</h2>",
        boite("exemple", "",
              "<p><strong>« Loi organique n° 99-209 du 19 mars 1999, art. 22 »</strong> : le numéro identifie le texte, la date le situe, "
              "l'article précise le passage. C'est cette forme que l'on retrouve sur les fiches DINA et dans les notes de service.</p>"),
        "<h2>Où lire les textes à jour</h2>",
        liste([
            "**Légifrance** : les textes nationaux, dont la loi organique et la Constitution.",
            "**Leginova** (anciennement Juridoc) : les textes calédoniens en vigueur et le Journal officiel de la Nouvelle-Calédonie.",
            "**La DRHFPNC** : les règles de ressources humaines de la fonction publique.",
        ], "ou"),
        boite("retenir", "À retenir",
              "<p>Un texte ne se lit jamais seul : vérifiez qu'il est <strong>en vigueur</strong>, c'est-à-dire ni supprimé ni remplacé, "
              "dans sa version consolidée.</p>"),
    ],
    "zoom_recto": 1.1, "zoom_verso": 1.12,
    "sources": "Accord de Nouméa (JORF n° 121 du 27 mai 1998) ; Constitution, titre XIII ; loi constitutionnelle n° 98-610 du 20 juillet 1998 ; "
               "loi n° 88-1028 du 9 novembre 1988 ; loi organique n° 99-209 du 19 mars 1999 ; gouv.nc ; Sénat, rapport 2014-104.",
})

# ------------------------------------------------------------------------------ FA-M1-03
FICHES.append({
    "id": "FA-M1-03",
    "titre": "Reconnaître et vérifier un texte",
    "sous_titre": "Qui prend le texte, de quand il date, s'il est en vigueur",
    "competences": "C17",
    "recto": [
        boite("essentiel", "L'essentiel",
              "<p>Avant d'utiliser une information, je vérifie <strong>qui l'a produite</strong>, <strong>de quand elle date</strong> "
              "et <strong>si elle est en vigueur</strong>.</p>"
              "<p>« En vigueur » veut dire que la règle s'applique aujourd'hui : elle n'a été ni supprimée ni remplacée. "
              "Un document facile à trouver n'est pas forcément à jour.</p>"),
        "<h2>Reconnaître un document administratif</h2>",
        table(["Document", "Qui le prend", "Ce qu'il fait"], [
            ["**La loi organique**", "Le Parlement", "Organise les institutions de la Nouvelle-Calédonie et répartit les compétences."],
            ["**La loi du pays**", "Le congrès",
             "Fixe des règles dans les matières que lui confie la loi organique (art. 99). Elle a force de loi."],
            ["**La délibération**", "Une assemblée : congrès, assemblée de province, conseil municipal, conseil d'administration",
             "Décide dans le domaine de compétence de cette assemblée."],
            ["**L'arrêté**", "Une autorité exécutive : gouvernement, président d'assemblée de province, maire, haut-commissaire",
             "Met en œuvre ou précise une règle."],
            ["**La circulaire, la note de service**", "Une direction, un service",
             "Explique ou organise l'application d'une règle, en interne. Ne crée pas de droit nouveau."],
        ], "actes"),
        boite("retenir", "Le bon réflexe",
              "<p>Regardez toujours <strong>qui signe et à quel titre</strong> : c'est ce qui dit ce que le texte engage.</p>"),
        boite("exemple", "Exemple",
              "<p>Une collègue vous cite « la règle de la maison » : c'est une <strong>note de service</strong>. "
              "Avant de l'appliquer, cherchez la délibération ou l'arrêté sur lequel elle s'appuie.</p>"),
    ],
    "verso": [
        boite("methode", "Avant d'utiliser une information, trois questions",
              '<ol><li><strong>Qui l\'a produite ?</strong> Une source officielle, ou le service qui produit l\'information.</li>'
              '<li><strong>De quand date-t-elle ?</strong> Je regarde la date de mise à jour.</li>'
              '<li><strong>Est-elle en vigueur ?</strong> Je prends la version consolidée, sans modification ni abrogation depuis.</li></ol>'),
        "<h2>Comment une règle change</h2>",
        table(["Mot", "Ce que cela veut dire"], [
            ["**Modification**", "Change une partie du texte."],
            ["**Abrogation**", "Supprime le texte."],
            ["**Version consolidée**", "Texte qui intègre toutes les modifications reçues : c'est la version à lire."],
            ["**Date d'effet**", "Dit à partir de quand la règle s'applique."],
        ], "mots"),
        "<h2>Où chercher</h2>",
        table(["Besoin", "Où aller"], [
            ["Un texte calédonien en vigueur, le Journal officiel", "**Leginova** (anciennement Juridoc), en ligne depuis le 1er octobre 2026"],
            ["Un texte national, dont la loi organique", "**Légifrance**"],
            ["Une règle de ressources humaines", "Le site de la **DRHFPNC**"],
            ["Un chiffre", "Le **service qui le produit** (par exemple l'ISEE pour la population)"],
        ], "ou2"),
        boite("alerte", "Si deux sources officielles ne concordent pas",
              "<p>Je ne choisis pas seul : je demande un appui, en disant ce que j'ai vérifié.</p>"),
        boite("retenir", "À retenir",
              "<p>Je garde une trace de ma vérification : le nom de la source, la date de consultation et la version lue.</p>"),
    ],
    "zoom_recto": 1.25, "zoom_verso": 1.3,
    "sources": "Loi organique n° 99-209 du 19 mars 1999 (art. 99, 107, 126, 128, 204) ; Leginova ; Légifrance ; DRHFPNC.",
})

# ------------------------------------------------------------------------------ FA-M1-04
FICHES.append({
    "id": "FA-M1-04",
    "titre": "Qui décide, qui encadre, qui aide",
    "sous_titre": "Le même schéma chez tous les employeurs publics : qui délibère, qui dirige, qui prépare et exécute",
    "competences": "C02 · C01",
    "recto": [
        boite("essentiel", "L'essentiel",
              "<p>Je m'adresse à <strong>celui qui gère le sujet</strong>. Ce qui <strong>engage l'employeur</strong> passe par mon responsable.</p>"
              "<p>Chez tous les employeurs publics, le schéma est le même : <strong>une assemblée délibère</strong>, <strong>un exécutif dirige</strong>, "
              "<strong>des services préparent et exécutent</strong>.</p>"),
        "<h2>Le même schéma chez tous les employeurs publics</h2>",
        table(["Employeur", "Délibère", "Dirige", "Prépare et exécute"], [
            ["**La commune**", "Le conseil municipal", "Le maire", "Les services municipaux"],
            ["**La province**", "L'assemblée de province", "Son président", "L'administration provinciale"],
            ["**La Nouvelle-Calédonie**", "Le congrès", "Le gouvernement", "L'administration de la Nouvelle-Calédonie"],
            ["**Un établissement public**", "Le conseil d'administration", "Le directeur ou la directrice", "Les services"],
        ], "schema"),
        boite("methode", "Avant de demander, trois questions",
              '<ol><li>Est-ce que ça <strong>engage mon employeur</strong> (signature, promesse, dépense) ? Si oui : mon responsable.</li>'
              '<li>Est-ce un sujet géré par un <strong>service</strong> (RH, informatique, partenariats, logistique) ? Si oui : ce service.</li>'
              '<li>Ai-je besoin qu\'on m\'<strong>explique</strong> ? Je cherche d\'abord (organigramme, intranet), puis je demande à ma marraine ou à un collègue.</li></ol>'),
    ],
    "verso": [
        "<h2>Engager l'employeur</h2>",
        boite("reperes", "Ce que cela veut dire",
              "<p><strong>Engager l'employeur</strong>, c'est signer, promettre, dépenser ou parler en son nom. Un agent ne le fait pas seul : "
              "il <strong>transmet à son responsable</strong>, qui décide ou fait remonter à la direction.</p>"),
        "<h2>Trois rôles à ne pas confondre</h2>",
        table(["Rôle", "Ce qu'il fait"], [
            ["**Celui qui décide**", "L'assemblée délibère, l'exécutif dirige. C'est lui qui engage l'employeur."],
            ["**Celui qui encadre**", "Mon responsable : le trait plein de l'organigramme. C'est lui qui valide."],
            ["**Celui qui aide**", "Une marraine, un collègue : elle aide, elle n'encadre pas."],
        ], "roles3"),
        boite("exemple", "Les partenaires gardent leur hiérarchie",
              "<p>Un partenaire répond à son association, une commune à son maire. Mon employeur ne leur donne pas d'ordre : il <strong>coopère</strong>.</p>"),
        boite("retenir", "À retenir",
              "<p>Je m'adresse à celui qui gère le sujet. Ce qui engage mon employeur passe par mon responsable. Une marraine aide, elle n'encadre pas.</p>"),
        boite("methode", "Chez mon employeur, je renseigne",
              '<div class="lignes"><p>Le nom de mon responsable :</p><p>Mon contact RH :</p><p>Le support informatique :</p><p>Où trouver l\'organigramme :</p></div>'),
    ],
    "zoom_recto": 1.3, "zoom_verso": 1.2,
    "sources": "Loi organique n° 99-209 du 19 mars 1999 ; code des communes de la Nouvelle-Calédonie. Grille reprise de la note de l'expert de M1 v0.2. "
               "L'organigramme de l'ÉLAN est fictif : chez mon employeur, je cherche le mien.",
})

CSS = """
@page { size: A4; margin: 0; }
:root { --bleu:#1F767A; --anthracite:#3C3C3B; --turquoise:#00B2B8; --jaune:#FFCB00; --jaune-clair:#FFF6D1;
  --texte:#2D3748; --texte-2:#5F6B7A; --bordure:#E8E4DF; --bleu-clair:#E6F6F7; --corail-clair:#FCEEE2; --corail-texte:#9A4300; --fond:#F7F5F2; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { margin: 0; font: 9.4pt/1.38 "Lato", sans-serif; color: var(--texte); }
.page { width: 210mm; height: 297mm; padding: 11mm 13mm 9mm; position: relative; overflow: hidden; page-break-after: always; display: flex; flex-direction: column; gap: 2.6mm; }
.page:last-child { page-break-after: auto; }
.bandeau { display: flex; align-items: center; gap: 5mm; padding-bottom: 2.5mm; border-bottom: 1.2mm solid var(--turquoise); }
.bandeau img { height: 12mm; }
.bandeau .titres { flex: 1; }
.bandeau .etiquette { font: 700 7.6pt "Nunito", sans-serif; letter-spacing: .08em; text-transform: uppercase; color: var(--bleu); }
.bandeau h1 { margin: .5mm 0 0; font: 800 17pt/1.15 "Nunito", sans-serif; color: var(--anthracite); }
.bandeau .sous { margin: .8mm 0 0; font-size: 9.6pt; color: var(--texte-2); }
.bandeau .comp { font: 700 8pt "Nunito", sans-serif; color: var(--bleu); border: .3mm solid var(--turquoise); border-radius: 5mm; padding: .6mm 3mm; white-space: nowrap; }
.suite { font: 700 8pt "Nunito", sans-serif; color: var(--texte-2); letter-spacing: .04em; }
h2 { margin: 1mm 0 0; font: 800 11.4pt "Nunito", sans-serif; color: var(--bleu); }
h3 { margin: 0 0 1mm; font: 800 9.8pt "Nunito", sans-serif; color: var(--anthracite); }
h4 { margin: 0 0 1mm; font: 800 9.6pt/1.2 "Nunito", sans-serif; color: var(--anthracite); }
p { margin: 0 0 1.4mm; } p:last-child { margin-bottom: 0; }
a { color: var(--bleu); text-decoration: underline; word-break: break-all; }
.ref { font-size: 8pt; color: var(--texte-2); font-style: italic; }
.boite { border-radius: 2.4mm; padding: 2.8mm 3.6mm; }
.essentiel { background: var(--bleu-clair); border-left: 1.4mm solid var(--turquoise); }
.methode { background: #fff; border: .35mm solid var(--turquoise); }
.methode ol { margin: 0; padding-left: 5mm; } .methode li { margin-bottom: .8mm; }
.exemple { background: #FAFAF8; border-left: 1.4mm solid var(--bordure); }
.retenir { background: var(--jaune-clair); border-left: 1.4mm solid var(--jaune); }
.piege { background: var(--corail-clair); border-left: 1.4mm solid #ED9C89; }
.piege h3 { color: var(--corail-texte); }
.alerte { background: var(--corail-clair); border-left: 1.4mm solid #ED9C89; }
.lien { background: #fff; border: .35mm dashed var(--turquoise); }
.reperes { background: #FAFAF8; border: .3mm solid var(--bordure); }
table { width: 100%; border-collapse: collapse; font-size: 9pt; }
th { text-align: left; background: var(--bleu); color: #fff; font: 700 8.6pt "Nunito", sans-serif; padding: 1.6mm 2.4mm; }
th:first-child { border-top-left-radius: 1.8mm; } th:last-child { border-top-right-radius: 1.8mm; }
td { padding: 1.7mm 2.4mm; vertical-align: top; border-bottom: .3mm solid var(--bordure); white-space: pre-line; }
tbody tr:nth-child(even) td { background: #FAFAF8; }
.niveaux td:first-child { width: 29mm; } .niveaux td:nth-child(2) { width: 36mm; } .niveaux td:last-child { width: 29mm; color: var(--texte-2); font-size: 8.4pt; }
.guichet td:first-child { width: 58mm; } .guichet td:nth-child(2) { width: 52mm; }
.institutions td:first-child { width: 48mm; }
.textes td:first-child { width: 40mm; } .textes td:nth-child(2) { width: 38mm; font-size: 8.4pt; color: var(--texte-2); }
.actes td:first-child { width: 36mm; } .actes td:nth-child(2) { width: 62mm; }
.schema td:first-child { width: 36mm; } .roles3 td:first-child { width: 42mm; }
.lignes p { margin: 0 0 1.2mm; padding-bottom: 5.2mm; border-bottom: .3mm dotted #B9B3AA; }
.lignes p:last-child { margin-bottom: 0; }
.mots td:first-child { width: 40mm; } .ou2 td:first-child { width: 78mm; }
.trois { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.4mm; } .trois .boite { font-size: 8.8pt; }
ul.ou { margin: 0; padding-left: 5mm; } ul.ou li { margin-bottom: 1mm; }
.frise { display: grid; grid-template-columns: 1fr; gap: 2.2mm; position: relative; }
.etape { display: grid; grid-template-columns: 22mm 6mm 1fr; align-items: stretch; }
.etape .date { font: 800 11.5pt "Nunito", sans-serif; color: var(--bleu); padding-top: 2.4mm; }
.etape .point { position: relative; } .etape .point::before { content: ""; position: absolute; left: 2.2mm; top: 0; bottom: -2.2mm; width: .8mm; background: var(--turquoise); }
.etape:last-child .point::before { bottom: 0; }
.etape .point::after { content: ""; position: absolute; left: .6mm; top: 3.2mm; width: 4mm; height: 4mm; border-radius: 50%; background: var(--turquoise); border: .6mm solid #fff; box-shadow: 0 0 0 .4mm var(--turquoise); }
.etape:last-child .point::after { background: var(--jaune); box-shadow: 0 0 0 .4mm var(--jaune); }
.etape .carte { background: #fff; border: .3mm solid var(--bordure); border-top: 1mm solid var(--turquoise); border-radius: 2.4mm; padding: 2.4mm 3.4mm; }
.etape:last-child .carte { border-top-color: var(--jaune); }
.contenu { display: flex; flex-direction: column; gap: 2.6mm; }
.pied { margin-top: auto; display: flex; justify-content: space-between; gap: 6mm; border-top: .3mm solid var(--bordure); padding-top: 1.8mm; font-size: 7.2pt; color: var(--texte-2); line-height: 1.3; }
.pied .src { flex: 1; } .pied .id { white-space: nowrap; text-align: right; }
"""


def page(f, cote, contenu, logo_uri):
    comp = f'<span class="comp">{f["competences"]}</span>'
    if cote == "recto":
        bandeau = (f'<div class="bandeau"><img src="{logo_uri}" alt="DINA"><div class="titres">'
                   f'<div class="etiquette">Fiche d\'apport · Module 1 · Je me repère</div>'
                   f'<h1>{inline(f["titre"])}</h1><p class="sous">{inline(f["sous_titre"])}</p></div>{comp}</div>')
        suite = '<div class="suite">Suite au verso →</div>'
    else:
        bandeau = (f'<div class="bandeau"><img src="{logo_uri}" alt="DINA"><div class="titres">'
                   f'<div class="etiquette">Fiche d\'apport · Module 1 · Verso</div>'
                   f'<h1>{inline(f["titre"])}</h1></div>{comp}</div>')
        suite = ""
    src = f'<div class="src"><strong>Sources.</strong> {inline(f["sources"])}'
    if BROUILLON:
        src += " Version avant relecture par l'expert."
    src += "</div>"
    pied = f'<div class="pied">{src}<div class="id">DINA · IFAP<br>{f["id"]} · {"recto" if cote == "recto" else "verso"}</div></div>'
    k = f.get("zoom_" + cote, 1.0)
    return (f'<section class="page">{bandeau}<div class="contenu" style="zoom:{k}">{"".join(contenu)}</div>{suite}{pied}</section>')


def document(f, racine):
    fonts = racine / "assets" / "fonts"
    logo = (racine / "assets" / "logo" / "logo-dina-compact.svg").as_uri()
    face = ""
    for fam, poids, fichier in [("Lato", "400 500", "lato-latin-400-normal"), ("Lato", "600 700", "lato-latin-700-normal"),
                                ("Nunito", "700", "nunito-latin-700-normal"), ("Nunito", "800", "nunito-latin-800-normal")]:
        face += f'@font-face{{font-family:"{fam}";font-weight:{poids};src:url("{(fonts / (fichier + ".woff2")).as_uri()}") format("woff2");}}\n'
    corps = page(f, "recto", f["recto"], logo) + page(f, "verso", f["verso"], logo)
    return (f'<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>{html.escape(f["id"])} — {html.escape(f["titre"])}</title>'
            f'<style>{face}{CSS}</style></head><body>{corps}</body></html>')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--racine", required=True)
    ap.add_argument("--sortie", required=True)
    ap.add_argument("--chrome", default="/usr/bin/google-chrome")
    a = ap.parse_args()
    racine = pathlib.Path(a.racine).resolve()
    if not (racine / "assets" / "fonts").exists() and (racine / "src" / "assets" / "fonts").exists():
        racine = racine / "src"
    sortie = pathlib.Path(a.sortie).resolve(); sortie.mkdir(parents=True, exist_ok=True)
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        nav = p.chromium.launch(executable_path=a.chrome, args=["--no-sandbox"]) if pathlib.Path(a.chrome).exists() else p.chromium.launch()
        for f in FICHES:
            h = sortie / f'{f["id"]}.html'
            h.write_text(document(f, racine), encoding="utf-8")
            pg = nav.new_page()
            pg.goto(h.as_uri()); pg.evaluate("document.fonts.ready")
            pg.wait_for_timeout(300)
            # contrôle : aucun contenu coupé (hauteur utile des pages)
            for i, ok in enumerate(pg.evaluate("""() => [...document.querySelectorAll('.page')].map(s => s.scrollHeight <= s.clientHeight + 1)""")):
                if not ok:
                    print(f'ATTENTION {f["id"]} page {i + 1} : le contenu dépasse la page A4', file=sys.stderr)
            pg.pdf(path=str(sortie / f'{f["id"]}.pdf'), format="A4", print_background=True, prefer_css_page_size=True)
            pg.close()
            h.unlink()
        nav.close()
    print("OK", [f["id"] for f in FICHES])


if __name__ == "__main__":
    main()
