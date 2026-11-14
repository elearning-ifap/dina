#!/usr/bin/env python3
"""DINA — filet de non-régression (T03).

Rejoue chaque module de bout en bout dans Chromium, avec une API SCORM 1.2 simulée :
  - une série « justes » (toutes les bonnes réponses) et une série « fausses » ;
  - à 1366 px (ordinateur) et 390 px (téléphone) ;
  - contrôle à chaque écran : aucune erreur JS, aucun débordement horizontal ;
  - mesure de la taille de cmi.suspend_data (limite SCORM 1.2 : 4 096 caractères) ;
  - reconstruction : on recharge la page, le moteur relit la sauvegarde, puis on
    compare l'état reconstruit à l'état d'avant (égalité complète, pas seulement l'écran).

Le script rend le code de sortie 1 au moindre écart. Outil de développement : rien ici
n'est publié avec le produit.

Usage (depuis la racine du dépôt) :
    pip install playwright && playwright install chromium
    python tests/rejouer.py                     # tout
    python tests/rejouer.py --module m1 --serie justes --largeur 390
    python tests/rejouer.py --auto-test         # prouve que le filet échoue si on casse un écran
"""
import argparse
import json
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

RACINE = Path(__file__).resolve().parent.parent
LIMITE = 4096
MODULES = {
    "prologue": "prologue.html",
    "positionnement": "positionnement.html",
    "m1": "m1.html",
    "m2": "m2.html",
    "m1-pages": "m1-pages.html",
    "m2-pages": "m2-pages.html",
}
TAILLES = {1366: 768, 390: 844}
FINS = ("fin", "pos-suite")   # derniers écrans : leur bouton quitte la page, on s'arrête dessus
MAX_ECRANS = 400   # garde-fou : un module qui boucle fait échouer le test

# API SCORM 1.2 simulée. L'état est gardé dans window.name (écriture synchrone, qui survit au
# rechargement de l'onglet, comme le ferait le LMS ; sessionStorage perdait parfois la dernière écriture). Elle refuse, comme Moodle, un suspend_data de plus de 4 096 caractères.
API_SIMULEE = """
(function () {
  var K = "__scorm_simule:", d;
  try { d = window.name.indexOf(K) === 0 ? JSON.parse(window.name.slice(K.length)) : null; } catch (e) { d = null; }
  d = d || { v: { "cmi.core.lesson_status": "not attempted", "cmi.core.entry": "ab-initio" }, ecritures: [] };
  var derniere = "0";
  function sauve() { window.name = K + JSON.stringify(d); }
  window.API = {
    LMSInitialize: function () { return "true"; },
    LMSFinish: function () { sauve(); return "true"; },
    LMSGetValue: function (k) { return d.v[k] == null ? "" : String(d.v[k]); },
    LMSSetValue: function (k, v) {
      if (k === "cmi.suspend_data") {
        d.ecritures.push(String(v).length);
        if (String(v).length > 4096) { derniere = "405"; return "false"; }
        d.v["cmi.core.entry"] = "resume";
      }
      d.v[k] = String(v); derniere = "0"; sauve(); return "true";
    },
    LMSCommit: function () { return "true"; },
    LMSGetLastError: function () { return derniere; },
    LMSGetErrorString: function () { return ""; },
    LMSGetDiagnostic: function () { return ""; }
  };
  window.__scorm_simule = d;
})();
"""

# Mesure de débordement : rien ne doit dépasser la largeur de la fenêtre, ni être rogné ou défiler
# sur le côté dans l'écran. Un défilement horizontal voulu (ancêtre en overflow auto/scroll) est toléré,
# pas un contenu rogné par overflow:hidden.
JS_DEBORD = """
() => {
  const L = document.documentElement.clientWidth, pb = [];
  const nom = el => el.tagName + "." + String(el.className && el.className.baseVal === undefined ? el.className : "").split(" ")[0];
  if (document.documentElement.scrollWidth > L + 1) pb.push("page : scrollWidth " + document.documentElement.scrollWidth + " > " + L);
  const lecteur = document.querySelector(".dina-player") || document.body;
  [lecteur, document.getElementById("ecran"), ...document.querySelectorAll("#ecran > .colonne, #ecran > .page-defil")].forEach(el => {
    if (el && el.scrollWidth > el.clientWidth + 1) pb.push(nom(el) + " : contenu de " + el.scrollWidth + " px dans " + el.clientWidth + " px");
  });
  lecteur.querySelectorAll("*").forEach(el => {
    if (el.closest("svg, .sr-only, .lien-evitement, [hidden], .chm-tip, .panneau, #voile")) return;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || cs.position === "fixed") return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    if (r.right > L + 1 || r.left < -1) {
      let p = el.parentElement, voulu = false;
      while (p && p !== document.body) {
        const o = getComputedStyle(p).overflowX;
        if ((o === "auto" || o === "scroll") && p.id !== "ecran" && p.getBoundingClientRect().right <= L + 1) { voulu = true; break; }
        p = p.parentElement;
      }
      if (!voulu) pb.push(nom(el) + " [" + Math.round(r.left) + " → " + Math.round(r.right) + "] > " + L);
    }
  });
  return [...new Set(pb)].slice(0, 5);
}
"""


class Echec(Exception):
    pass


class Joueur:
    """Pilote un module : une page, une série (justes/fausses), une largeur."""

    def __init__(self, navigateur, racine, module, serie, largeur):
        self.racine, self.module, self.serie, self.largeur = racine, module, serie, largeur
        self.juste = serie == "justes"
        self.problemes = []
        self.vus = []
        self.ctx = navigateur.new_context(viewport={"width": largeur, "height": TAILLES[largeur]},
                                          device_scale_factor=1, has_touch=largeur < 800)
        self.ctx.add_init_script(API_SIMULEE)
        self.page = self.ctx.new_page()
        self.page.set_default_timeout(9000)
        self.page.on("pageerror", lambda e: self.problemes.append("erreur JS : " + str(e)[:200]))
        self.page.on("console", self.sur_console)
        self.page.on("requestfailed", self.sur_requete_echouee)
        self.page.on("dialog", lambda d: d.dismiss())
        self.url = "file://" + str(racine / MODULES[module])
        self.page.goto(self.url)
        self.page.wait_for_selector("#ecran")
        self.donnees = self.page.evaluate("() => window.DINA_DATA")
        self.E = self.donnees["ecrans"]

    @staticmethod
    def image_prevue_absente(url):
        """Une image « ILL-… » pas encore déposée est un cas prévu : le moteur affiche un emplacement avec son texte alternatif."""
        return "assets/img/" in url and url.lower().split("?")[0].endswith((".png", ".jpg", ".jpeg", ".webp"))

    def sur_console(self, m):
        if m.type != "error":
            return
        if "Failed to load resource" in m.text and self.image_prevue_absente(m.location.get("url", "")):
            return
        self.problemes.append("console.error : " + m.text[:200])

    def sur_requete_echouee(self, r):
        if not self.image_prevue_absente(r.url):
            self.problemes.append("ressource introuvable : " + r.url[-80:])

    # ---------- lecture de l'écran ----------
    def ecran(self):
        try:
            return self.page.evaluate("() => { const z = document.getElementById('ecran'); return z ? (z.dataset.ecran || '') : ''; }")
        except Exception:
            return ""

    def principal(self):
        return self.page.evaluate("() => { const p = document.getElementById('btn-principal'); return { visible: !p.hidden, actif: !p.disabled, texte: p.innerText.trim() }; }")

    def cliquer_principal(self):
        self.page.click("#btn-principal", timeout=4000)
        self.page.wait_for_timeout(60)

    def controle(self, etiquette):
        """Contrôles faits après chaque écran affiché. On mesure la mise en page au repos : les animations
        d'entrée et de zoom déplacent des éléments pendant quelques secondes, ce n'est pas un débordement."""
        self.page.evaluate("() => document.getAnimations().forEach(a => a.cancel())")
        for d in self.page.evaluate(JS_DEBORD):
            self.problemes.append(f"débordement ({etiquette}) : {d}")

    # ---------- réponses ----------
    def choisir_radio(self, valeur, groupe=None):
        """Clique le libellé de l'option, comme le ferait une personne (attend qu'il soit visible :
        certains écrans font apparaître les réponses après une courte animation)."""
        champ = "input[type=radio]" + (f"[name='{groupe}']" if groupe else "") + f"[value='{valeur}']"
        lib = self.page.locator(f"#ecran label:has({champ})")
        if lib.count():
            lib.first.click()
        else:
            self.page.locator("#ecran " + champ).first.check()

    def groupes_radio(self):
        return self.page.evaluate("""() => { const g = {}; document.querySelectorAll('#ecran input[type=radio]').forEach(r => { (g[r.name] = g[r.name] || []).push(r.value); }); return g; }""")

    def choisir_option(self, options, cle="verdict"):
        """Renvoie l'id de l'option à cliquer selon la série."""
        ok = [o for o in options if o.get(cle) == "adapte"]
        ko = [o for o in options if o.get(cle) != "adapte"]
        pris = (ok if self.juste else ko) or options
        return pris[0]["id"]

    def jouer_ecran(self, id_):
        e = self.E[id_]
        t = e["type"]
        p = self.page
        if t == "eval-item" and e.get("mode") == "ordre":
            self.ordonner(e)
        elif t == "eval-item" and e.get("mode") in ("choix-multiple", "multiple"):
            self.cocher(e)
        elif t in ("choix", "eval-item"):
            self.choisir_radio(self.choisir_option(e["options"]))
        elif t == "pos-item":
            self.ouvrir_declencheur()
            if e.get("options"):
                def score(o):
                    v = list((o.get("verdicts") or {}).values())
                    return sum(1 for x in v if x == "adapte") - sum(1 for x in v if x == "inadapte")
                tri = sorted(e["options"], key=score, reverse=self.juste)
                self.choisir_radio(tri[0]["id"])
        elif t == "classement":
            groupes = self.groupes_radio()
            cats = [c["id"] for c in e["categories"]]
            for it, (nom, _) in zip(e["items"], groupes.items()):
                cible = it["attendu"] if self.juste else next(c for c in cats if c != it["attendu"])
                self.choisir_radio(cible, nom)
        elif t == "assemblage":
            groupes = self.groupes_radio()
            for partie, (nom, _) in zip(e["parties"], groupes.items()):
                self.choisir_radio(self.choisir_option(partie["options"]), nom)
        elif t == "choix-multiple":
            self.cocher(e)
        elif t == "ordre":
            self.ordonner(e)
        elif t == "planning":
            for tache in e["taches"]:
                jour = tache["attendu"] if self.juste else next(c for c in e["colonnes"] if c != tache["attendu"])
                p.locator(f"#ecran li.pl-tache[data-id='{tache['id']}'] select").select_option(label=jour)
        elif t == "auto-positionnement":
            for nom in self.groupes_radio():
                self.choisir_radio("2" if self.juste else "0", nom)
        elif t == "reponse-libre":
            p.fill("#ecran textarea", "Réponse automatique du filet de test.")
        elif t == "cartes":
            for b in p.locator("#ecran .carte-ret, #ecran .tb-tete").all():
                b.click()
        elif t == "hotspot":
            self.hotspot(e)
        elif t == "recherche":
            self.recherche(e)
        elif t == "messagerie":
            self.messagerie(e)
        elif t == "page":
            self.page_defilante(e)

    def cocher(self, e):
        att = set(e["attendu"])
        vouloir = att if self.juste else {o["id"] for o in e["options"] if o["id"] not in att} or {e["options"][0]["id"]}
        for o in e["options"]:
            case = self.page.locator(f"#ecran label:has(input[type=checkbox][value='{o['id']}'])")
            coche = self.page.locator(f"#ecran input[type=checkbox][value='{o['id']}']").first.is_checked()
            if coche != (o["id"] in vouloir):
                case.first.click()

    def ouvrir_declencheur(self):
        b = self.page.locator("#ecran .btn-petit.btn-principal")
        if b.count() and b.first.is_visible():
            b.first.click()
            self.page.wait_for_timeout(60)

    def ordonner(self, e, portee="#ecran"):
        if not self.juste:
            return   # l'ordre de départ est faux ; on valide tel quel
        for cible, id_ in enumerate(e["attendu"]):
            for _ in range(len(e["options"])):
                ordre = self.page.evaluate("(p) => [...document.querySelectorAll(p + ' li.ordre-item')].map(li => li.dataset.id)", portee)
                pos = ordre.index(id_)
                if pos == cible:
                    break
                sens = "-1" if pos > cible else "1"
                self.page.locator(f"{portee} li.ordre-item[data-id='{id_}'] button[data-sens='{sens}']").first.click()

    def hotspot(self, e):
        if e.get("mode") == "audit":
            # on sélectionne les zones à signaler (justes) ou les autres (fausses)
            for z, zone in enumerate(e["zones"]):
                if bool(zone.get("anomalie")) == self.juste:
                    self.page.locator(f"#ecran .hs-point[data-z='{z}']").first.click()
        else:
            for point in self.page.locator("#ecran .hs-point, #ecran .tb-tete").all():
                point.click()

    def recherche(self, e):
        # « R1 » est le jeu de résultats qui contient la règle à trouver
        regle = next(m for m in e["mots_cles"] if "si" in m and m["resultats"] == "R1")
        self.page.fill("#ecran .rch-q", " ".join(regle["si"][:2]))
        self.page.click("#ecran button[type=submit]")
        self.page.wait_for_selector("#ecran .rch-doc")
        self.choisir_radio(self.choisir_option(e["jeux"]["R1"]))

    def messagerie(self, e):
        self.cliquer_principal()   # « Répondre à … » : ouvre la rédaction
        self.choisir_radio(self.choisir_option(e["copie"]), "cc")
        for para in e["paragraphes"]:
            champ = self.page.locator(f"#ecran fieldset.mel-para[data-id='{para['id']}'] input[type=radio]").first.get_attribute("name")
            self.choisir_radio(self.choisir_option(para["options"]), champ)

    def groupes_radio_dans(self, portee):
        return self.page.evaluate("""(p) => { const g = {}; document.querySelectorAll(p + ' input[type=radio]').forEach(r => { (g[r.name] = g[r.name] || []).push(r.value); }); return g; }""", portee)

    def page_defilante(self, e):
        """Page qui défile : les blocs se débloquent un à un. On joue chaque bloc visible (tri, ordre, explorer,
        recherche, message), on clique le bouton du bloc, et on recommence jusqu'à ce que le bouton principal s'active."""
        items = {i["id"]: i for i in e.get("items", [])}
        faits = set()
        for _ in range(80):
            if self.principal()["actif"]:
                return
            agi = False
            for n, bloc in enumerate(e["blocs"]):
                portee = f"#ecran .pg-bloc[data-n='{n}']"
                if not self.page.locator(portee).count():
                    continue
                t = bloc["type"]
                if t == "tri":
                    for it in bloc["items"]:
                        nom = f"pg-{bloc['id']}-{it}"
                        valeurs = self.groupes_radio().get(nom)
                        if valeurs and not self.page.locator(f"#ecran input[type=radio][name='{nom}']:checked").count():
                            att = items[it]["attendu"]
                            att = att if isinstance(att, list) else [att]
                            autres = [v for v in valeurs if v not in att]
                            self.choisir_radio(att[0] if self.juste else (autres or valeurs)[0], nom)
                            agi = True
                elif n not in faits and t == "ordre":
                    self.ordonner(bloc, portee); faits.add(n); agi = True
                elif n not in faits and t == "explorer":
                    for point in self.page.locator(f"{portee} .pg-exp-point").all():
                        point.click()
                    faits.add(n); agi = True
                elif n not in faits and t == "recherche":
                    regle = next(m for m in bloc["mots_cles"] if "si" in m and m["resultats"] == "R1")
                    self.page.fill(f"{portee} input[type=search]", " ".join(regle["si"][:2]))
                    self.page.click(f"{portee} button[type=submit]")
                    self.page.wait_for_selector(f"{portee} input[type=radio]")
                    self.choisir_radio(self.choisir_option(bloc["jeux"]["R1"]))
                    faits.add(n); agi = True
                elif n not in faits and t == "message":
                    for partie, (nom, _) in zip(bloc["parties"], self.groupes_radio_dans(portee).items()):
                        self.choisir_radio(self.choisir_option(partie["options"]), nom)
                    faits.add(n); agi = True
            bouton = self.page.locator("#ecran .pg-bloc .pg-verifier:not([disabled])")
            if bouton.count():
                bouton.first.click(); self.page.wait_for_timeout(150); agi = True
                self.controle("page qui défile, après un bloc")
            if not agi:
                bouton = self.page.locator("#ecran .pg-bloc button.btn-principal:not([disabled])")
                if not bouton.count():
                    break
                bouton.first.click(); self.page.wait_for_timeout(150)
        if not self.principal()["actif"]:
            raise Echec("page qui défile : le bouton principal ne s'active pas")

    # ---------- parcours ----------
    def avancer(self, avant):
        """Clique sur le bouton principal jusqu'à changer d'écran (Valider, puis Continuer)."""
        for _ in range(12):   # un dialogue peut compter plusieurs « Suite »
            etat = self.principal()
            if not etat["visible"]:
                return False
            if not etat["actif"]:
                return False
            self.cliquer_principal()
            if self.ecran() != avant:
                return True
            self.controle(f"{avant}, après « {etat['texte'][:20]} »")   # retour de correction, réplique suivante…
        return self.ecran() != avant

    def rejouer(self):
        vus = 0
        while vus < MAX_ECRANS:
            id_ = self.ecran()
            self.vus.append(id_)
            self.controle(f"{id_}")
            if self.E.get(id_, {}).get("type") in FINS:
                return
            if id_ != "MENU":
                self.jouer_ecran(id_)
                self.controle(f"{id_}, après les réponses")
            if not self.avancer(id_):
                raise Echec(f"bloqué sur {id_} ({self.E.get(id_, {}).get('type', 'MENU')}) : le bouton principal reste inactif")
            vus += 1
        raise Echec("plus de %d écrans : le module boucle" % MAX_ECRANS)

    # ---------- sauvegarde et reconstruction ----------
    def sauvegarde(self):
        return self.page.evaluate("() => ({ derniere: window.__scorm_simule.v['cmi.suspend_data'] || '', ecritures: window.__scorm_simule.ecritures, diag: window.DINA_SCORM.diagnostic() })")

    def controle_sauvegarde(self):
        s = self.sauvegarde()
        # écritures acceptées par le LMS simulé, et plus grand état que le moteur a tenté d'écrire (même refusé)
        plus_grande = max(s["ecritures"] + [s["diag"]["suspendMax"], 0])
        if plus_grande >= LIMITE:
            self.problemes.append(f"sauvegarde trop grosse : {plus_grande} caractères (limite {LIMITE}, doit rester < {LIMITE})")
        if s["diag"]["erreurs"]:
            self.problemes.append("erreurs SCORM : " + " ; ".join(s["diag"]["erreurs"][-2:]))
        return plus_grande, s["derniere"]

    # Types d'écrans dont la réponse est toujours gardée dans l'état (relevé sur le moteur : engine.js, memoriser)
    MEMORISES = {"choix", "classement", "assemblage", "choix-multiple", "ordre", "planning", "recherche", "messagerie", "pos-item", "page"}

    def etat_final_attendu(self):
        """Compare la sauvegarde à ce que l'outil a réellement joué, sans repasser par le moteur."""
        derniere = self.sauvegarde()["derniere"]
        if not derniere:
            return ["état final : aucune sauvegarde enregistrée dans le LMS"]
        st = json.loads(derniere)
        lms = self.page.evaluate("() => window.__scorm_simule.v")
        jouees = [i for i in dict.fromkeys(self.vus) if i in self.E]
        pb = []
        if st.get("ecran") != self.vus[-1]:
            pb.append(f"état final : écran {st.get('ecran')!r} au lieu de {self.vus[-1]!r}")
        sections = [x["id"] for x in self.donnees["module"].get("sections", [])]
        manque = [x for x in sections if x not in st.get("faites", [])]
        if manque:
            pb.append("état final : étapes terminées non enregistrées : " + ", ".join(manque))
        attendues = [i for i in jouees if self.E[i]["type"] in self.MEMORISES
                     or (self.E[i]["type"] == "hotspot" and self.E[i].get("mode") == "audit")
                     or (self.E[i]["type"] == "reponse-libre" and self.E[i].get("garder"))]
        perdues = [i for i in attendues if i not in st.get("reponses", {})]
        if perdues:
            pb.append(f"état final : {len(perdues)} réponse(s) jouée(s) absente(s) de la sauvegarde, ex. {perdues[0]}")
        # évaluation : le résultat doit suivre les réponses données
        if any(self.E[i]["type"] == "eval-resultat" for i in self.E):
            statut = (st.get("eval") or {}).get("statut")
            if self.juste:
                if statut != "reussi" or lms.get("cmi.core.lesson_status") != "passed" or str(lms.get("cmi.core.score.raw")) != "100":
                    pb.append(f"évaluation : avec toutes les bonnes réponses, attendu réussi/passed/100, obtenu {statut}/{lms.get('cmi.core.lesson_status')}/{lms.get('cmi.core.score.raw')}")
            else:
                if statut == "reussi" or lms.get("cmi.core.lesson_status") != "failed" or str(lms.get("cmi.core.score.raw")) != "0":
                    pb.append(f"évaluation : avec toutes les mauvaises réponses, attendu non réussi/failed/0, obtenu {statut}/{lms.get('cmi.core.lesson_status')}/{lms.get('cmi.core.score.raw')}")
        return pb

    def reconstruction(self):
        """Recharge la page : le moteur relit cmi.suspend_data. On force une réécriture complète de l'état
        (touche A deux fois : la pause d'animation se bascule puis revient) et on compare à la sauvegarde d'avant."""
        avant = self.sauvegarde()["derniere"]
        if not avant:
            raise Echec("aucune sauvegarde à reconstruire")
        ecran_avant = self.ecran()
        self.page.reload()
        self.page.wait_for_selector("#ecran")
        if self.ecran() != ecran_avant:
            raise Echec(f"reconstruction : écran {self.ecran()!r} au lieu de {ecran_avant!r}")
        n_avant = len(self.sauvegarde()["ecritures"])
        self.page.evaluate("() => document.activeElement && document.activeElement.blur()")
        self.page.keyboard.press("a"); self.page.keyboard.press("a")
        if len(self.sauvegarde()["ecritures"]) <= n_avant:
            raise Echec("reconstruction : la touche A n'a provoqué aucune réécriture, la comparaison ne prouve rien")   # touche A : pause des animations, deux fois = état d'origine
        apres = self.sauvegarde()["derniere"]
        if json.loads(avant) != json.loads(apres):
            ka, kb = json.loads(avant), json.loads(apres)
            diff = [k for k in set(ka) | set(kb) if ka.get(k) != kb.get(k)]
            raise Echec("reconstruction différente, clés : " + ", ".join(sorted(diff)))

    def fermer(self):
        self.ctx.close()


def jouer(navigateur, racine, module, serie, largeur, verbeux=True):
    j = Joueur(navigateur, racine, module, serie, largeur)
    erreur = None
    taille, n = 0, 0
    try:
        j.rejouer()
        n = len(j.vus)
        taille, _ = j.controle_sauvegarde()
        j.problemes.extend(j.etat_final_attendu())
        j.reconstruction()
    except Echec as e:
        erreur = str(e)
    except Exception as e:   # temps dépassé, élément introuvable… : un écran ne répond plus comme prévu
        erreur = f"{type(e).__name__} : {str(e).splitlines()[0][:160]} (écran {j.ecran()})"
    finally:
        j.fermer()
    problemes = sorted(set(j.problemes), key=lambda x: (not x.startswith("erreur JS"), x))
    if erreur:
        problemes.insert(1 if problemes and problemes[0].startswith("erreur JS") else 0, erreur)
    return {"module": module, "serie": serie, "largeur": largeur, "ecrans": n, "sauvegarde": taille, "problemes": problemes,
            "vus": sorted(set(j.vus)), "tous": sorted(j.E)}


def main(argv=None):
    ap = argparse.ArgumentParser(description="Filet de non-régression DINA")
    ap.add_argument("--module", action="append", choices=list(MODULES))
    ap.add_argument("--serie", choices=["justes", "fausses"], action="append")
    ap.add_argument("--largeur", type=int, action="append", choices=list(TAILLES))
    ap.add_argument("--racine", type=Path, default=RACINE, help="dossier du produit (défaut : le dépôt)")
    ap.add_argument("--auto-test", action="store_true", help="casse volontairement un écran et vérifie que le filet échoue")
    a = ap.parse_args(argv)
    if a.auto_test:
        from auto_test import lancer
        return lancer(a)
    resultats = executer(a.racine, a.module or list(MODULES), a.serie or ["justes", "fausses"], a.largeur or list(TAILLES))
    return rapport(resultats)


def executer(racine, modules, series, largeurs):
    resultats = []
    with sync_playwright() as p:
        nav = p.chromium.launch()
        for m in modules:
            for s in series:
                for w in largeurs:
                    resultats.append(jouer(nav, racine, m, s, w))
        nav.close()
    return resultats


def ecrans_jamais_joues(resultats):
    """Un écran que ni la série juste ni la série fausse n'a affiché n'est testé par personne : on le dit."""
    par_module, tous = {}, {}
    for r in resultats:
        par_module.setdefault(r["module"], set()).update(r["vus"])
        tous[r["module"]] = set(r["tous"])
    return {m: sorted(tous[m] - vus) for m, vus in par_module.items() if tous[m] - vus}


def rapport(resultats):
    ko = 0
    print(f"{'module':<15}{'série':<9}{'px':<6}{'écrans':<8}{'sauvegarde':<12}résultat")
    for r in resultats:
        etat = "OK" if not r["problemes"] else "ÉCHEC"
        ko += bool(r["problemes"])
        print(f"{r['module']:<15}{r['serie']:<9}{r['largeur']:<6}{r['ecrans']:<8}{str(r['sauvegarde']) + ' / ' + str(LIMITE):<12}{etat}")
        for pb in r["problemes"][:6]:
            print("    -", pb)
    series = {r["serie"] for r in resultats}
    if series >= {"justes", "fausses"}:
        for m, ids in ecrans_jamais_joues(resultats).items():
            ko += 1
            print(f"ÉCRANS JAMAIS JOUÉS dans {m} : {', '.join(ids)}")
    print(f"\n{len(resultats) - ko}/{len(resultats)} contrôles sans écart.")
    return 1 if ko else 0


if __name__ == "__main__":
    sys.path.insert(0, str(Path(__file__).parent))
    sys.exit(main())
