"""DINA — fabrique un paquet SCORM 1.2 à partir d'une page du prototype (jalon J-TECH).

Usage : python scorm/construire_paquet.py (dépôt GitHub) ou python build/construire_paquet.py (dina-prod) [--page m1-pages] [--diag] [--version 0.1]

Le paquet contient la page, le moteur, les styles, les données du module et les images utiles.
Le lien « Retour à l'accueil du prototype » est retiré : dans LIANE, il n'y a pas d'accueil du prototype.
Avec --diag, le panneau de diagnostic SCORM s'affiche dans LIANE (paquet de test).
"""
import argparse
import json
import re
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape

BASE = Path(__file__).resolve().parent.parent
# dina-prod : les sources sont dans src/ ; dépôt GitHub : à la racine
RACINE = BASE / "src" if (BASE / "src" / "js" / "engine.js").exists() else BASE

MANIFESTE = """<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="{ident}" version="1.0"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
  </metadata>
  <organizations default="ORG-DINA">
    <organization identifier="ORG-DINA">
      <title>{titre}</title>
      <item identifier="ITEM-1" identifierref="RES-1" isvisible="true">
        <title>{titre}</title>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="RES-1" type="webcontent" adlcp:scormtype="sco" href="{lancement}">
{fichiers}
    </resource>
  </resources>
</manifest>
"""


def donnees_module(page):
    """Lit data/<page>.js (window.DINA_DATA = {...};) et retourne (texte, objet)."""
    texte = (RACINE / "data" / f"{page}.js").read_text(encoding="utf-8")
    debut = texte.index("{")
    fin = texte.rindex("}") + 1
    return texte, debut, fin, json.loads(texte[debut:fin])


def images_utiles(objet):
    """Codes d'illustration, logos et portraits cités dans les données."""
    brut = json.dumps(objet, ensure_ascii=False)
    codes = set(re.findall(r'"(?:illustration|image)":\s*"([^"]+)"', brut))
    logos = set(re.findall(r'"logo":\s*"([^"]+)"', brut))
    fichiers = []
    for c in codes:
        f = RACINE / "assets" / "img" / f"{c}.jpg"
        if f.exists():
            fichiers.append(f)
    for l in logos:
        f = RACINE / "assets" / "img" / l
        if f.exists():
            fichiers.append(f)
    portraits = RACINE / "assets" / "img" / "portraits"
    if portraits.exists():
        fichiers += sorted(p for p in portraits.iterdir() if p.suffix.lower() in (".jpg", ".png"))
    manquants = sorted(c for c in codes if not (RACINE / "assets" / "img" / f"{c}.jpg").exists())
    return fichiers, manquants


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--page", default="m1-pages")
    ap.add_argument("--diag", action="store_true")
    ap.add_argument("--version", default="0.1")
    a = ap.parse_args()

    texte, debut, fin, objet = donnees_module(a.page)
    objet["module"].pop("hub", None)
    objet["module"].pop("page_suivante", None)
    donnees = texte[:debut] + json.dumps(objet, ensure_ascii=False, indent=1) + texte[fin:]

    html = (RACINE / f"{a.page}.html").read_text(encoding="utf-8")
    if a.diag:
        html = html.replace('<script src="js/scorm.js"></script>', '<script>window.DINA_DIAG = true;</script>\n<script src="js/scorm.js"></script>', 1)

    contenu = {f"{a.page}.html": html.encode("utf-8"), f"data/{a.page}.js": donnees.encode("utf-8")}
    for dossier in ("css", "js"):
        for f in sorted((RACINE / dossier).glob("*")):
            if f.is_file():
                contenu.setdefault(f"{dossier}/{f.name}", f.read_bytes())
    for f in sorted((RACINE / "assets" / "fonts").rglob("*")) + sorted((RACINE / "assets" / "logo").rglob("*")):
        if f.is_file() and f.name != "desktop.ini":
            contenu[f.relative_to(RACINE).as_posix()] = f.read_bytes()
    images, manquants = images_utiles(objet)
    for f in images:
        contenu[f.relative_to(RACINE).as_posix()] = f.read_bytes()

    titre = f"DINA — {objet['module'].get('code', '')} {objet['module'].get('titre', '')} (test SCORM v{a.version})".strip()
    ident = f"DINA-{a.page.upper()}-V{a.version.replace('.', '-')}"
    fichiers = "\n".join(f'      <file href="{escape(n)}"/>' for n in sorted(contenu))
    contenu["imsmanifest.xml"] = MANIFESTE.format(ident=ident, titre=escape(titre), lancement=f"{a.page}.html", fichiers=fichiers).encode("utf-8")

    sortie = BASE / "dist" / f"DINA_{a.page}_SCORM12{'_diag' if a.diag else ''}_v{a.version}.zip"
    sortie.parent.mkdir(exist_ok=True)
    with zipfile.ZipFile(sortie, "w", zipfile.ZIP_DEFLATED) as z:
        for nom in sorted(contenu):
            z.writestr(nom, contenu[nom])
    taille = sortie.stat().st_size / 1024 / 1024
    print(f"{sortie.name} : {len(contenu)} fichiers, {taille:.1f} Mo")
    if manquants:
        print("Illustrations absentes (emplacement vide dans le module) :", ", ".join(manquants))


if __name__ == "__main__":
    main()
