#!/usr/bin/env python3
"""DINA — fiches d'outil M2 en PDF (A4), rendues avec fiche.html à partir de data/m2-pages.js.
Usage : python build/fiches_outils_m2.py [racine=src] [sortie=src/assets/fiches]
Travaille sur une copie temporaire de src : aucun fichier du produit n'est modifié.
Sorties : FO-M2-E1, E2, E3, S. Réserve : FICHE-M2-S n'a pas de `titre_types` dans le storyboard ; il est posé ici
(« Je classe ce qui m'arrive ») pour ne pas afficher « Quel type de demande ? » ; à reporter dans le storyboard."""
import sys, json, shutil, tempfile, pathlib
from playwright.sync_api import sync_playwright
racine = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "src").resolve()
sortie = pathlib.Path(sys.argv[2] if len(sys.argv) > 2 else "src/assets/fiches").resolve(); sortie.mkdir(parents=True, exist_ok=True)
tmp = pathlib.Path(tempfile.mkdtemp()) / "src"; shutil.copytree(racine, tmp)
t = (tmp / "data" / "m2-pages.js").read_text(encoding="utf-8"); i, j = t.index("{"), t.rindex("}")
d = json.loads(t[i:j + 1]); d["fiches"]["FICHE-M2-S"]["titre_types"] = "Je classe ce qui m'arrive"
(tmp / "data" / "m2.js").write_text(t[:i] + json.dumps(d, ensure_ascii=False) + t[j + 1:], encoding="utf-8")
with sync_playwright() as p:
    b = p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox", "--allow-file-access-from-files"])
    for k in ["E1", "E2", "E3", "S"]:
        pg = b.new_page(viewport={"width": 900, "height": 1200})
        pg.goto(f"{(tmp / 'fiche.html').as_uri()}?id=FICHE-M2-{k}"); pg.wait_for_timeout(1200)
        pg.add_style_tag(content="@media print{.fiche{zoom:.85;min-height:0 !important}}" if k == "E2" else "x{}")
        pg.pdf(path=str(sortie / f"FO-M2-{k}.pdf"), format="A4", print_background=True, prefer_css_page_size=True)
        pg.close()
    b.close()
shutil.rmtree(tmp.parent)
print("OK FO-M2-E1, E2, E3, S")
