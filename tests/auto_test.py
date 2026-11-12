"""Auto-test du filet : on casse volontairement le produit (sur une copie jetable) et on vérifie
que rejouer.py échoue, avec le bon motif. Si une casse passe inaperçue, le filet ne vaut rien.

Chaque casse est un petit remplacement de texte dans la copie. Le dépôt n'est jamais modifié.
"""
import shutil
import sys
import tempfile
from pathlib import Path

import rejouer as R

# (nom, fichier, texte à remplacer, remplacement, module, série, largeur, motif attendu dans les problèmes)
CASSES = [
    ("erreur JS dans l'écran « choix »",
     "js/engine.js", "function rendreChoix(e) {", 'function rendreChoix(e) { throw new Error("casse volontaire");',
     "m1", "justes", 1366, "erreur JS"),
    ("débordement horizontal à 390 px",
     "css/module.css", None, "\n#ecran .option { min-width: 700px; white-space: nowrap; }\n",
     "m1", "justes", 390, "débordement"),
    ("sauvegarde qui dépasse 4 096 caractères",
     "js/engine.js", "var json = JSON.stringify(etat);", 'var json = JSON.stringify(etat) + " ".repeat(4200);',
     "prologue", "justes", 1366, "sauvegarde"),
    ("reconstruction qui perd la progression",
     "js/engine.js", "return SCORM.lireEtat();", "var x = SCORM.lireEtat(); if (x) x.faites = []; return x;",
     "m1", "justes", 1366, "reconstruction"),
    ("écran sans bouton pour continuer",
     "js/engine.js", "function rendreScene(e) {", "function rendreScene(e) { setTimeout(function () { var b = document.getElementById('btn-principal'); if (b) b.hidden = true; }, 0);",
     "prologue", "justes", 1366, "bloqué"),
]


def copie_jetable():
    tmp = Path(tempfile.mkdtemp(prefix="dina-casse-"))
    shutil.copytree(R.RACINE, tmp / "dina", ignore=shutil.ignore_patterns(".git", "tests", "__pycache__"))
    return tmp


def lancer(args=None):
    ko = 0
    print("Référence : le produit intact doit passer.")
    base = R.executer(R.RACINE, ["m1", "prologue"], ["justes"], [1366, 390])
    if R.rapport(base):
        print("\nLe produit intact échoue déjà : l'auto-test n'a pas de sens tant que ça ne passe pas.")
        return 1
    print("\nCasses volontaires : chacune doit faire échouer le filet.\n")
    for nom, fichier, cherche, remplace, module, serie, largeur, motif in CASSES:
        tmp = copie_jetable()
        try:
            racine = tmp / "dina"
            cible = racine / fichier
            texte = cible.read_text(encoding="utf-8")
            if cherche is None:
                texte += remplace
            else:
                if cherche not in texte:
                    print(f"  ?? {nom} : texte à casser introuvable dans {fichier} (le moteur a changé : mettre à jour auto_test.py)")
                    ko += 1
                    continue
                texte = texte.replace(cherche, remplace, 1)
            cible.write_text(texte, encoding="utf-8")
            r = R.executer(racine, [module], [serie], [largeur])[0]
            detecte = any(motif in p for p in r["problemes"])
            print(f"  {'détecté ' if detecte else 'PASSÉ SOUS SILENCE'}  {nom}  →  {r['problemes'][0][:90] if r['problemes'] else 'aucun problème signalé'}")
            ko += 0 if detecte else 1
        finally:
            shutil.rmtree(tmp, ignore_errors=True)
    print(f"\n{len(CASSES) - ko}/{len(CASSES)} casses détectées.")
    return 1 if ko else 0
