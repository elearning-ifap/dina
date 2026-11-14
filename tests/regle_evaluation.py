#!/usr/bin/env python3
"""DINA — contrôle de la règle d'évaluation (D150).

Complète rejouer.py, qui ne joue que « tout juste » ou « tout faux ». Ici, on se trompe exprès
sur des questions choisies, avec l'API SCORM 1.2 simulée de rejouer.py :

  1. une erreur sur six       → module validé, « passed », score 83 ;
  2. deux erreurs sur six     → non validé, aux deux tentatives, « failed » ;
  3. réussi, puis raté depuis le sommaire → le module reste « passed », score 100 conservé ;
  4. l'en-tête des questions dit « situation n sur 6 ».

Usage (depuis la racine du dépôt) : python tests/regle_evaluation.py [--module m1-pages]
Code de sortie 1 au moindre écart. Outil de développement : rien ici n'est publié.
"""
import argparse
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

sys.path.insert(0, str(Path(__file__).resolve().parent))
from rejouer import RACINE, Joueur, Echec  # noqa: E402


class JoueurRegle(Joueur):
    """Joue juste partout, sauf sur les questions d'évaluation listées dans `fautes`."""

    def __init__(self, navigateur, module, fautes):
        super().__init__(navigateur, RACINE, module, "justes", 1366)
        self.fautes = set(fautes)
        self.entetes = []

    def jouer_ecran(self, id_):
        e = self.E[id_]
        if e["type"] == "eval-item":
            self.entetes.append(self.page.locator("#ecran .surtitre").first.inner_text())
            self.juste = id_ not in self.fautes
        try:
            super().jouer_ecran(id_)
        finally:
            self.juste = True

    def jusqua(self, cible):
        """Joue jusqu'à l'écran `cible` (sans le jouer)."""
        for _ in range(400):
            id_ = self.ecran()
            if id_ == cible:
                return
            if id_ != "MENU":
                self.jouer_ecran(id_)
            if not self.avancer(id_):
                raise Echec(f"bloqué sur {id_}")
        raise Echec(f"{cible} jamais atteint")

    def lms(self):
        return self.page.evaluate("() => window.__scorm_simule.v")

    def etat_eval(self):
        return self.page.evaluate("() => JSON.parse(window.__scorm_simule.v['cmi.suspend_data'] || '{}').eval || {}")

    def relancer_evaluation(self):
        self.page.click("#btn-sommaire")
        self.page.wait_for_function("() => document.body.innerText.length > 0")
        sections = self.donnees["module"]["sections"]
        i = next(k for k, s in enumerate(sections) if s["id"] == "eval")
        self.page.locator(f'#ecran [data-section="{i}"]').first.click()


def ids_evaluation(E, variante):
    return [k for k, v in E.items() if v["type"] == "eval-item" and v.get("variante") == variante]


def controler(module):
    pb = []
    with sync_playwright() as pw:
        nav = pw.chromium.launch()
        sonde = Joueur(nav, RACINE, module, "justes", 1366)
        E = sonde.E
        sonde.fermer()
        A, B = ids_evaluation(E, "A"), ids_evaluation(E, "B")
        res = next(k for k, v in E.items() if v["type"] == "eval-resultat")
        fin = E[res]["suite"]
        if len(A) != 6 or len(B) != 6:
            pb.append(f"{module} : séries de {len(A)} et {len(B)} questions, attendu 6 et 6")

        # 1. Une erreur sur six : validé
        j = JoueurRegle(nav, module, [A[0]])
        try:
            j.jusqua(res)
            v, st = j.lms(), j.etat_eval()
            if v.get("cmi.core.lesson_status") != "passed" or str(v.get("cmi.core.score.raw")) != "83" or st.get("statut") != "reussi":
                pb.append(f"cas 1 (5 sur 6) : attendu passed/83/reussi, obtenu {v.get('cmi.core.lesson_status')}/{v.get('cmi.core.score.raw')}/{st.get('statut')}")
            attendus = [f"Évaluation · situation {n} sur 6" for n in range(1, 7)]
            if [x.strip().lower() for x in j.entetes[-6:]] != [x.lower() for x in attendus]:   # la feuille de style met l'en-tête en capitales
                pb.append(f"cas 4 (en-têtes) : obtenu {j.entetes[-6:]}")
        except Echec as e:
            pb.append(f"cas 1 : {e}")
        finally:
            j.fermer()

        # 2. Deux erreurs sur six, aux deux tentatives : non validé
        j = JoueurRegle(nav, module, [A[0], A[2], B[0], B[2]])
        try:
            j.jusqua(res)
            if j.etat_eval().get("statut") is not None:
                pb.append("cas 2 : après la première tentative ratée, une nouvelle tentative devait être proposée")
            j.avancer(res)          # « Nouvelle tentative » → série B
            j.jusqua(res)
            v, st = j.lms(), j.etat_eval()
            if v.get("cmi.core.lesson_status") != "failed" or str(v.get("cmi.core.score.raw")) != "67" or st.get("statut") != "a-consolider":
                pb.append(f"cas 2 (4 sur 6) : attendu failed/67/a-consolider, obtenu {v.get('cmi.core.lesson_status')}/{v.get('cmi.core.score.raw')}/{st.get('statut')}")
        except Echec as e:
            pb.append(f"cas 2 : {e}")
        finally:
            j.fermer()

        # 3. Réussi, puis raté depuis le sommaire : reste réussi
        j = JoueurRegle(nav, module, [])
        try:
            j.jusqua(fin)
            j.fautes = set(A + B)
            j.relancer_evaluation()
            j.jusqua(res)
            texte = j.page.locator("#ecran").inner_text()
            j.avancer(res)
            j.jusqua(res)
            texte2 = j.page.locator("#ecran").inner_text()
            v, st = j.lms(), j.etat_eval()
            if v.get("cmi.core.lesson_status") != "passed" or str(v.get("cmi.core.score.raw")) != "100" or st.get("statut") != "reussi":
                pb.append(f"cas 3 (réussi puis raté) : attendu passed/100/reussi, obtenu {v.get('cmi.core.lesson_status')}/{v.get('cmi.core.score.raw')}/{st.get('statut')}")
            if "réussite précédente est conservée" not in texte or "réussite précédente est conservée" not in texte2:
                pb.append("cas 3 : le bilan ne dit pas que la réussite précédente est conservée")
        except Echec as e:
            pb.append(f"cas 3 : {e}")
        finally:
            j.fermer()
        nav.close()
    return pb


def main():
    ap = argparse.ArgumentParser(description="Contrôle de la règle d'évaluation D150")
    ap.add_argument("--module", choices=["m1-pages", "m2-pages"])
    a = ap.parse_args()
    total = []
    for m in [a.module] if a.module else ["m1-pages", "m2-pages"]:
        pb = controler(m)
        print(f"{m:10} {'OK' if not pb else 'ÉCART'}")
        for x in pb:
            print("   -", x)
        total += pb
    print(f"\n{'Règle D150 respectée.' if not total else str(len(total)) + ' écart(s).'}")
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main())
