#!/usr/bin/env python3
"""DINA — fiches outils M5 en PDF A4 (une page), rendues depuis data/m5-pages.js via fiche.html + fiche.js.
Usage : python fiches_outils_m5.py --racine <dossier contenant fiche.html, css/, js/, assets/> --donnees <m5-pages.js> --sortie <dossier>
Source unique : les fiches du storyboard « M5 en pages » (écran et PDF identiques). Aucun texte pédagogique ici."""
import argparse, pathlib, shutil, sys, tempfile
IDS = [("FICHE-M5-E1", "FO-M5-E1"), ("FICHE-M5-E2", "FO-M5-E2"), ("FICHE-M5-E3", "FO-M5-E3")]
ap = argparse.ArgumentParser()
ap.add_argument("--racine", required=True); ap.add_argument("--donnees", required=True); ap.add_argument("--sortie", required=True)
ap.add_argument("--chrome", default="/usr/bin/google-chrome")
a = ap.parse_args()
racine = pathlib.Path(a.racine).resolve(); sortie = pathlib.Path(a.sortie).resolve(); sortie.mkdir(parents=True, exist_ok=True)
# fiche.html charge data/m5.js pour les identifiants FICHE-M5-… : on place une copie des données sous ce nom, dans un dossier temporaire
tmp = pathlib.Path(tempfile.mkdtemp())
for d in ("css", "js", "assets"):
    shutil.copytree(racine / d, tmp / d)
(tmp / "data").mkdir(); shutil.copy(a.donnees, tmp / "data" / "m5.js"); shutil.copy(racine / "fiche.html", tmp / "fiche.html")
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    nav = p.chromium.launch(executable_path=a.chrome, args=["--no-sandbox"]) if pathlib.Path(a.chrome).exists() else p.chromium.launch()
    for fid, nom in IDS:
        pg = nav.new_page(viewport={"width": 900, "height": 1200})
        erreurs = []
        pg.on("pageerror", lambda e: erreurs.append(str(e)))
        pg.goto((tmp / "fiche.html").as_uri() + "?id=" + fid)
        pg.wait_for_selector("article.fiche", timeout=8000)
        pg.evaluate("document.fonts.ready"); pg.wait_for_timeout(400)
        pg.emulate_media(media="print")
        # contrôle : la fiche tient sur une page A4 (hauteur utile ≈ 1123 px à 96 dpi)
        h = pg.evaluate("document.querySelector('article.fiche').getBoundingClientRect().height")
        if h > 1100:   # fiche plus longue qu'une page A4 : on réduit légèrement la taille pour la tenir sur une page
            pg.evaluate("k => { document.querySelector('article.fiche').style.zoom = k; }", 1100 / h)
        pg.pdf(path=str(sortie / f"{nom}.pdf"), format="A4", print_background=True, prefer_css_page_size=True)
        pg.close()
        if erreurs: print("ERREUR JS", fid, erreurs, file=sys.stderr)
        print(fid, "hauteur fiche (px)", round(h))
    nav.close()
shutil.rmtree(tmp)
