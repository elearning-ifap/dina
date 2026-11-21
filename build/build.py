#!/usr/bin/env python3
"""DINA — build : storyboard Obsidian (.md) -> src/data/<module>.js

Usage (depuis le dossier dina-prod) :
    python build/build.py
    python build/build.py "chemin/vers/Storyboard.md" m2

Lit les blocs ```yaml précédés d'un titre « ### ID — titre », contrôle le contenu
(CAN-TECH-01 §10) et écrit window.DINA_DATA dans src/data/. Aucun texte pédagogique
n'est écrit dans le code : tout vient du storyboard.
Dépendance : PyYAML (pip install pyyaml).
"""
import json
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    sys.exit("PyYAML manquant : lancez  pip install pyyaml")

ICI = Path(__file__).resolve().parent
RACINE = ICI.parent                                   # dina-prod
COFFRE = RACINE.parent / "dina"                       # G:\Mon Drive\dina
DEFAUT = COFFRE / "03 Modules" / "M2" / "Storyboard — M2 v0.4.md"

VERDICTS = {"adapte", "partiel", "risque", "inadapte"}
TYPES = {
    "module", "narration", "message", "choix", "choix-multiple", "ordre", "classement",
    "document", "assemblage", "messagerie", "apport", "outil", "eval-item", "eval-resultat",
    "auto-positionnement", "ressources", "fin-section", "fin", "fiche",
    "hotspot", "planning", "cartes", "reponse-libre",   # D49, priorité 1
    "recherche",                                         # D49, priorité 2
    "pos-item", "pos-profil", "pos-suite",               # positionnement (D83) ; pos-suite : D133
    "sources",                                           # gabarits v0.2 (27-10)
    "page",                                              # page qui défile (06-11, backlog p1)
}
PAGE_BLOCS = {"recit", "tri", "apport", "liste", "explorer", "recherche", "message", "ordre", "document", "equipe", "cartes", "reflexion"}   # 16-11 : equipe, cartes, reflexion (prologue en pages) ; 10-11 : explorer, recherche, message ; 11-11 : ordre, document
PAGE_PHASES = {"situation", "apport", "application", "synthese"}
SPECIAUX = {"MENU", "ACCUEIL"}
CANAUX = {"oral", "reunion", "sms", "appel", "courriel", "messagerie", "note"}   # CAN-UX-01 §11
JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]   # positionnement « semaine » (D106)
# Longueurs CAN-EDIT-01 §2 (avertissements)
LIMITES = {"narration": 60, "message": 60, "apport": 80}
LIMITE_FEEDBACK = 50

erreurs, avertissements = [], []


def mots(t):
    t = re.sub(r"[*_#>\-]", " ", str(t or ""))
    return len(t.split())


def lire(chemin):
    texte = Path(chemin).read_text(encoding="utf-8")
    # Inventaire des illustrations : lignes « | ILL-xx | scène | personnages | alt | »
    illus = {}
    for m in re.finditer(r"^\|\s*((?:ILL-[A-Z]*\d+)|(?:INF-[A-Z0-9]+-\d+))\s*\|([^|]*)\|([^|]*)\|([^|]*)\|", texte, re.M):
        illus[m.group(1)] = {"scene": m.group(2).strip(), "personnages": m.group(3).strip(), "alt": m.group(4).strip()}
    blocs = []
    for m in re.finditer(r"^###\s+(\S+)\s+—[^\n]*\n```yaml\n(.*?)\n```", texte, re.M | re.S):
        titre_id, corps = m.group(1), m.group(2)
        try:
            d = yaml.safe_load(corps)
        except yaml.YAMLError as e:
            erreurs.append(f"{titre_id} : YAML invalide ({e})")
            continue
        if not isinstance(d, dict):
            erreurs.append(f"{titre_id} : bloc vide")
            continue
        if d.get("id") != titre_id:
            erreurs.append(f"{titre_id} : l'id du bloc ({d.get('id')}) ne correspond pas au titre")
        blocs.append(d)
    return illus, blocs


def attendus(it):
    """Réponse attendue : une catégorie, ou une liste de catégories acceptées (planning, 11-11)."""
    a = it.get("attendu")
    return a if isinstance(a, list) else [a]


def controler_page(b, illus):
    """Page qui défile : blocs récit / tri / apport / liste ; items rattachés à une catégorie existante."""
    i = b.get("id")
    cats = {c.get("id") for c in b.get("categories") or []}
    for bl in b.get("blocs") or []:
        cats |= {c.get("id") for c in bl.get("categories") or []}
    items = {it.get("id"): it for it in b.get("items") or []}
    if len(cats) < 2 and any(bl.get("type") == "tri" for bl in b.get("blocs") or []):   # 16-11 : une page sans tri (prologue) n'a pas de catégories
        erreurs.append(f"{i} : page sans catégories (2 au moins)")
    for k, it in items.items():
        if not set(attendus(it)) <= cats:
            erreurs.append(f"{i} : item {k}, attendu « {it.get('attendu')} » hors des catégories")
        for champ in ("libelle", "feedback"):
            if not it.get(champ):
                erreurs.append(f"{i} : item {k} sans {champ}")
        if mots(it.get("feedback")) > LIMITE_FEEDBACK:
            avertissements.append(f"{i} : item {k}, feedback de {mots(it.get('feedback'))} mots (> {LIMITE_FEEDBACK})")
        if it.get("valider"):
            print(f"  à valider ({i}, {k}) : {it['valider']}")
    phases = b.get("phases") or ["situation", "apport", "application"]
    tris = set()
    for k in (b.get("libelles_phases") or {}):   # 16-11 : libellés d'étapes propres à la page
        if k not in phases:
            erreurs.append(f"{i} : libelles_phases, « {k} » absente de « phases »")
    for n, bl in enumerate(b.get("blocs") or [], 1):
        ty = bl.get("type")
        if ty not in PAGE_BLOCS:
            erreurs.append(f"{i} : bloc {n}, type « {ty} » inconnu ({', '.join(sorted(PAGE_BLOCS))})")
        if bl.get("phase") not in PAGE_PHASES or bl.get("phase") not in phases:
            erreurs.append(f"{i} : bloc {n}, phase « {bl.get('phase')} » absente de « phases »")
        ill = bl.get("illustration")
        if ill and ill not in illus:
            erreurs.append(f"{i} : bloc {n}, illustration {ill} absente de l'inventaire")
        pl = bl.get("plus_loin")
        if isinstance(pl, dict) and pl.get("image") and pl["image"] not in illus:
            erreurs.append(f"{i} : bloc {n}, infographie {pl['image']} absente de l'inventaire")
        for vis in bl.get("visuels") or []:
            if vis.get("image") not in illus:
                erreurs.append(f"{i} : bloc {n}, infographie {vis.get('image')} absente de l'inventaire")
            if vis.get("remplace") not in ("grille", "methode"):
                erreurs.append(f"{i} : bloc {n}, visuels.remplace doit valoir « grille » ou « methode »")
        for k in bl.get("items") or []:
            if k not in items:
                erreurs.append(f"{i} : bloc {n}, item « {k} » inexistant")
        if ty == "tri":
            cb = {c.get("id") for c in (bl.get("categories") or b.get("categories") or [])}
            for k in (bl.get("items") or list(items)):
                if k in items and not set(attendus(items[k])) <= cb:
                    erreurs.append(f"{i} : bloc {n}, item {k} : réponse attendue absente des choix du bloc")
            if not bl.get("id"):
                erreurs.append(f"{i} : bloc {n} (tri) sans id")
            if bl.get("reprend") and bl["reprend"] not in tris:
                erreurs.append(f"{i} : bloc {n}, reprend « {bl['reprend']} » : aucun tri précédent de ce nom")
            if bl.get("retour") not in (None, "immediat", "differe"):
                erreurs.append(f"{i} : bloc {n}, retour doit valoir « immediat » ou « differe »")
            tris.add(bl.get("id"))
        g = bl.get("grille")
        if g:
            for l in g.get("lignes") or []:
                if len(l.get("cellules") or []) != len(g.get("colonnes") or []):
                    erreurs.append(f"{i} : bloc {n}, grille : ligne « {l.get('titre')} » sans le bon nombre de cellules")
        if bl.get("valider"):
            print(f"  à valider ({i}, bloc {n}) : {bl['valider']}")
        if ty == "ordre":
            ids_o = [o.get("id") for o in bl.get("options") or []]
            if sorted(ids_o) != sorted(bl.get("attendu") or []) or len(ids_o) < 3:
                erreurs.append(f"{i} : bloc {n} (ordre) : « attendu » doit reprendre toutes les options (3 au moins)")
            if bl.get("depart") and sorted(bl["depart"]) != sorted(ids_o):
                erreurs.append(f"{i} : bloc {n} (ordre) : « depart » doit reprendre toutes les options")
            if bl.get("depart") == bl.get("attendu"):
                erreurs.append(f"{i} : bloc {n} (ordre) : l'ordre de départ est déjà le bon")
            if not (bl.get("feedback_ok") and bl.get("feedback_ko")):
                erreurs.append(f"{i} : bloc {n} (ordre) sans feedback_ok ou feedback_ko")
        if ty == "document" and not bl.get("sections"):
            erreurs.append(f"{i} : bloc {n} (document) sans sections")
        if ty in ("explorer", "recherche", "message", "ordre") and not bl.get("id"):
            erreurs.append(f"{i} : bloc {n} ({ty}) sans id")
        if ty == "explorer":
            if not bl.get("zones"):
                erreurs.append(f"{i} : bloc {n} (explorer) sans zones")
            for z in bl.get("zones") or []:
                if not (z.get("id") and z.get("titre") and z.get("texte")):
                    erreurs.append(f"{i} : bloc {n}, zone sans id, titre ou texte")
        if ty == "recherche":
            jeux = bl.get("jeux") or {}
            for m in bl.get("mots_cles") or []:
                cible = m.get("resultats") or m.get("sinon")
                if cible not in jeux:
                    erreurs.append(f"{i} : bloc {n}, jeu de résultats « {cible} » inexistant")
            if not any(d.get("verdict") == "adapte" for docs in jeux.values() for d in docs):
                erreurs.append(f"{i} : bloc {n} (recherche) sans document « adapte »")
        if ty == "message":
            for pt in bl.get("parties") or []:
                if sum(1 for o in pt.get("options") or [] if o.get("verdict") == "adapte") != 1:
                    erreurs.append(f"{i} : bloc {n}, partie « {pt.get('id')} » : une seule option « adapte » attendue")
        if ty == "apport" and not (bl.get("regle") or bl.get("texte")):
            erreurs.append(f"{i} : bloc {n} (apport) sans règle ni texte")
    activites = {"tri", "message", "recherche", "explorer", "ordre"}   # 16-11 : le tri n'est exigé que dans une page qui demande une activité
    if not tris and any(bl.get("type") in activites for bl in b.get("blocs") or []):
        erreurs.append(f"{i} : page sans bloc de tri")


def controler(illus, blocs):
    ids = [b.get("id") for b in blocs]
    vus = set()
    for i in ids:
        if i in vus:
            erreurs.append(f"id en double : {i}")
        vus.add(i)
    fiches = {b["id"] for b in blocs if b.get("type") == "fiche"}
    # Fiches en PDF (D154, D168) : champ « pdf » = chemin sous src/ ; modèle « pdf » = pseudo-fiche d'apport
    for b in blocs:
        if b.get("type") != "fiche":
            continue
        chemin = b.get("pdf")
        if b.get("modele") == "pdf" and not chemin:
            erreurs.append(f"{b.get('id')} : modèle « pdf » sans champ « pdf »")
        if chemin and not (RACINE / "src" / str(chemin)).exists():
            erreurs.append(f"{b.get('id')} : fichier PDF introuvable ({chemin})")
    for b in blocs:
        for f in b.get("fiches_pdf", []) or []:   # écrans d'apport des modules en écrans (m1.js)
            if f not in fiches:
                erreurs.append(f"{b.get('id')} : fiches_pdf → fiche {f} inexistante")
    # Dossier fil rouge (D58) : chaque jalon pointe vers une étape du module
    for m in (b for b in blocs if b.get("type") == "module"):
        sections = {s.get("id") for s in m.get("sections", []) or []}
        jids = set()
        for j in (m.get("dossier") or {}).get("jalons", []) or []:
            if j.get("section") not in sections:
                erreurs.append(f"dossier : jalon {j.get('id')} → étape « {j.get('section')} » inconnue")
            if not j.get("libelle"):
                erreurs.append(f"dossier : jalon {j.get('id')} sans libellé")
            if j.get("id") in jids:
                erreurs.append(f"dossier : jalon {j.get('id')} en double")
            jids.add(j.get("id"))
    for b in blocs:
        i, t = b.get("id"), b.get("type")
        if t not in TYPES:
            erreurs.append(f"{i} : type inconnu « {t} »")
            continue
        if t in ("module", "fiche"):
            continue
        if not b.get("etape"):
            erreurs.append(f"{i} : champ « etape » manquant")
        s = b.get("suite")
        if not s:
            erreurs.append(f"{i} : champ « suite » manquant")
        elif s not in vus and s not in SPECIAUX:
            erreurs.append(f"{i} : suite « {s} » inexistante")
        r = b.get("retentative")
        if r and r not in vus:
            erreurs.append(f"{i} : retentative « {r} » inexistante")
        for n, r in enumerate(b.get("repliques") or [], 1):   # dialogue (27-10)
            if not isinstance(r, dict) or not r.get("personnage") or not r.get("texte"):
                erreurs.append(f"{i} : réplique {n} sans personnage ou sans texte")
            elif r.get("canal") and r["canal"] not in CANAUX:
                erreurs.append(f"{i} : réplique {n}, canal « {r['canal']} » inconnu")
        if t == "page":
            controler_page(b, illus)
        if t == "sources" and not b.get("liens"):
            erreurs.append(f"{i} : écran sources sans liens")
        if b.get("canal") and b["canal"] not in CANAUX:
            erreurs.append(f"{i} : canal « {b['canal']} » inconnu ({', '.join(sorted(CANAUX))})")
        for p, c in (b.get("consolider") or {}).items():
            if c.get("fiche") and c["fiche"] not in fiches:
                erreurs.append(f"{i} : consolider {p} → fiche {c['fiche']} inexistante")
        if t == "auto-positionnement" and b.get("moment") not in (None, "avant", "apres"):
            erreurs.append(f"{i} : moment doit valoir « avant » ou « apres »")
        ill = b.get("illustration")
        if ill and ill not in illus:
            erreurs.append(f"{i} : illustration {ill} absente de l'inventaire")
        if b.get("fiche") and b["fiche"] not in fiches:
            erreurs.append(f"{i} : fiche {b['fiche']} inexistante")
        for f in b.get("fiches", []) or []:
            if f not in fiches:
                erreurs.append(f"{i} : fiche {f} inexistante")
        # verdicts
        def verif_verdict(v, ou):
            if v is not None and v not in VERDICTS:
                erreurs.append(f"{i} : verdict « {v} » non autorisé ({ou})")
        for o in b.get("options", []) or []:
            if isinstance(o, dict):
                verif_verdict(o.get("verdict"), o.get("id"))
                if mots(o.get("feedback")) > LIMITE_FEEDBACK:
                    avertissements.append(f"{i}-{o.get('id')} : feedback de {mots(o.get('feedback'))} mots (> {LIMITE_FEEDBACK})")
        for p in b.get("paragraphes", []) or []:
            for o in p.get("options", []):
                verif_verdict(o.get("verdict"), p.get("id"))
        for p in b.get("parties", []) or []:
            for o in p.get("options", []):
                verif_verdict(o.get("verdict"), p.get("id"))
        for o in b.get("copie", []) or []:
            verif_verdict(o.get("verdict"), "copie")
        # cohérence attendu
        if t in ("ordre", "choix-multiple") or (t == "eval-item" and b.get("mode") in ("ordre", "multiple")):
            opts = {o["id"] for o in b.get("options", [])}
            for a in b.get("attendu", []) or []:
                if a not in opts:
                    erreurs.append(f"{i} : attendu « {a} » absent des options")
        if t == "classement":
            cats = {c["id"] for c in b.get("categories", [])}
            for it in b.get("items", []):
                if it.get("attendu") not in cats:
                    erreurs.append(f"{i}-{it.get('id')} : catégorie attendue inconnue")
        if t in ("choix",) or (t == "eval-item" and b.get("mode", "choix") == "choix"):
            if not any(o.get("verdict") == "adapte" for o in b.get("options", [])):
                erreurs.append(f"{i} : aucune option « adapte »")
        # nouveaux types (D49)
        if t == "hotspot":
            if not b.get("illustration"):
                erreurs.append(f"{i} : hotspot sans illustration")
            zids = set()
            for z in b.get("zones", []) or []:
                if not (0 <= float(z.get("x", -1)) <= 100 and 0 <= float(z.get("y", -1)) <= 100):
                    erreurs.append(f"{i}-{z.get('id')} : coordonnées hors de 0-100 %")
                if not z.get("titre"):
                    erreurs.append(f"{i}-{z.get('id')} : zone sans titre")
                if z.get("id") in zids:
                    erreurs.append(f"{i} : zone {z.get('id')} en double")
                zids.add(z.get("id"))
            if not zids:
                erreurs.append(f"{i} : hotspot sans zone")
            if b.get("mode") == "audit" and not any(z.get("anomalie") for z in b.get("zones", [])):
                erreurs.append(f"{i} : mode audit sans anomalie")
        if t == "planning":
            cols = set(b.get("colonnes", []) or [])
            if not cols:
                erreurs.append(f"{i} : planning sans colonnes")
            for ta in b.get("taches", []) or []:
                for a_ in ([ta.get("attendu")] if isinstance(ta.get("attendu"), str) else (ta.get("attendu") or [])):
                    if a_ not in cols:
                        erreurs.append(f"{i}-{ta.get('id')} : colonne attendue « {a_} » inconnue")
        if t == "cartes" and not b.get("cartes"):
            erreurs.append(f"{i} : aucune carte")
        if t == "reponse-libre" and not b.get("question"):
            erreurs.append(f"{i} : question manquante")
        if t == "recherche":
            jeux = b.get("jeux") or {}
            if not jeux:
                erreurs.append(f"{i} : aucun jeu de résultats")
            if not any(r.get("sinon") for r in b.get("mots_cles", []) or []):
                erreurs.append(f"{i} : règle « sinon » manquante (résultats si aucun mot reconnu)")
            for r in b.get("mots_cles", []) or []:
                cible = r.get("resultats") or r.get("sinon")
                if cible not in jeux:
                    erreurs.append(f"{i} : jeu de résultats « {cible} » inexistant")
            bons = 0
            for nom, docs in jeux.items():
                for d in docs or []:
                    verif_verdict(d.get("verdict"), f"{nom}-{d.get('id')}")
                    if not d.get("titre") or not d.get("feedback"):
                        erreurs.append(f"{i}-{nom}-{d.get('id')} : titre ou feedback manquant")
                    if d.get("verdict") == "adapte" or d.get("bon"):
                        bons += 1
            if not bons:
                erreurs.append(f"{i} : aucun document « adapte »")
        if t == "apport" and b.get("infographie"):
            if not (b["infographie"].get("blocs")):
                erreurs.append(f"{i} : infographie sans blocs")
        # positionnement (D83) : une seule conduite attendue, un bloc renseigné
        if t == "pos-item":
            opts = b.get("options", []) or []
            if not b.get("titre"):
                erreurs.append(f"{i} : titre manquant (il sert au résultat)")
            if any("verdicts" in o for o in opts):
                # Format « semaine » (v0.4, D106) : un verdict par compétence observée, une conséquence par réponse
                comps = b.get("competences") or []
                if not comps:
                    erreurs.append(f"{i} : liste « competences » manquante")
                for o in opts:
                    vs = o.get("verdicts") or {}
                    if set(vs) != set(comps):
                        erreurs.append(f"{i}-{o.get('id')} : verdicts {sorted(vs)} ≠ compétences {sorted(comps)}")
                    for c, v in vs.items():
                        if v not in VERDICTS:
                            erreurs.append(f"{i}-{o.get('id')} : verdict « {v} » non autorisé ({c})")
                if sum(1 for o in opts if (o.get("verdicts") or {}) and all(v == "adapte" for v in o["verdicts"].values())) != 1:
                    erreurs.append(f"{i} : il faut exactement une réponse « adapte » pour toutes les compétences")
                if any(o.get("consequence") for o in opts) and not all(o.get("consequence") for o in opts):
                    erreurs.append(f"{i} : conséquence manquante pour certaines réponses")
                vig = b.get("vigilance")
                if isinstance(vig, list) and not set(vig) <= set(comps):
                    erreurs.append(f"{i} : vigilance {vig} hors des compétences observées")
                # D120 (06-11) : « En clair » facultatif, une phrase courte
                if b.get("en_clair") is not None and (not isinstance(b["en_clair"], str) or not b["en_clair"].strip()):
                    erreurs.append(f"{i} : « en_clair » doit être un texte")
                elif b.get("en_clair") and mots(b["en_clair"]) > 40:
                    avertissements.append(f"{i} : « en_clair » de {mots(b['en_clair'])} mots (> 40)")
                mo = b.get("moment")
                if mo:
                    if mo.get("jour") not in JOURS:
                        erreurs.append(f"{i} : jour « {mo.get('jour')} » inconnu ({', '.join(JOURS)})")
                    if mo.get("canal") not in CANAUX:
                        erreurs.append(f"{i} : canal « {mo.get('canal')} » inconnu")
                    if not mo.get("heure"):
                        erreurs.append(f"{i} : heure manquante")
                    if mo.get("canal") == "courriel" and not mo.get("objet"):
                        avertissements.append(f"{i} : courriel sans objet")
            else:
                # Format v0.3 : un verdict par réponse, un bloc par situation
                if not b.get("bloc"):
                    erreurs.append(f"{i} : champ « bloc » manquant")
                if sum(1 for o in opts if o.get("verdict") == "adapte") != 1:
                    erreurs.append(f"{i} : il faut exactement une option « adapte »")
        if t == "pos-profil":
            for cle in ("niveaux", "blocs"):
                if not b.get(cle):
                    erreurs.append(f"{i} : champ « {cle} » manquant")
            for n in ("present", "approfondir", "decouvrir"):
                if n not in (b.get("niveaux") or {}):
                    erreurs.append(f"{i} : niveau « {n} » sans libellé")
            bids, cbloc = set(), {}
            for bl in b.get("blocs", []) or []:
                for cle in ("id", "titre", "module", "exemple", "present", "approfondir", "decouvrir"):
                    if not bl.get(cle):
                        erreurs.append(f"{i} : bloc {bl.get('id')} sans « {cle} »")
                if bl.get("id") in bids:
                    erreurs.append(f"{i} : bloc {bl.get('id')} en double")
                bids.add(bl.get("id"))
                for c in bl.get("competences") or []:
                    if c in cbloc:
                        erreurs.append(f"{i} : compétence {c} dans deux blocs")
                    cbloc[c] = bl.get("id")
            items = [x for x in blocs if x.get("type") == "pos-item"]
            vus = set()
            for x in items:
                if x.get("competences") and any("verdicts" in o for o in x.get("options", [])):
                    for c in x["competences"]:
                        if c not in cbloc:
                            erreurs.append(f"{x.get('id')} : compétence {c} rattachée à aucun bloc du résultat {i}")
                        else:
                            vus.add(cbloc[c])
                elif x.get("bloc") not in bids:
                    erreurs.append(f"{x.get('id')} : bloc « {x.get('bloc')} » absent du résultat {i}")
                else:
                    vus.add(x.get("bloc"))
            for bid in bids - vus:
                erreurs.append(f"{i} : aucune situation pour le bloc {bid}")
            # Couverture du référentiel (information)
            couvertes = sorted({c for x in blocs if x.get("type") in ("pos-item", "reponse-libre") for c in (x.get("competences") or [])})
            if couvertes:
                print(f"  couverture : {len(couvertes)} compétences ({', '.join(couvertes)})")
        if t == "pos-suite":   # D133 : second écran du bilan
            if not b.get("parcours"):
                erreurs.append(f"{i} : champ « parcours » manquant")
            prof = [x for x in blocs if x.get("type") == "pos-profil"]
            bids = {bl.get("id") for x in prof for bl in (x.get("blocs") or [])}
            for p in b.get("parcours") or []:
                if not p.get("code") or not p.get("titre"):
                    erreurs.append(f"{i} : étape du parcours sans « code » ou « titre »")
                if p.get("bloc") and p["bloc"] not in bids:
                    erreurs.append(f"{i} : étape {p.get('code')}, bloc « {p['bloc']} » absent du profil")
            for p in b.get("equipe") or []:
                if not p.get("nom") or not p.get("role"):
                    erreurs.append(f"{i} : membre de l'équipe sans « nom » ou « role »")
        # longueurs
        lim = LIMITES.get(t)
        if lim and mots(b.get("texte")) > lim:
            avertissements.append(f"{i} : {mots(b.get('texte'))} mots (> {lim}, CAN-EDIT-01)")


def main():
    src = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAUT
    nom = sys.argv[2] if len(sys.argv) > 2 else "m2"
    if not src.exists():
        sys.exit(f"Storyboard introuvable : {src}")
    illus, blocs = lire(src)
    controler(illus, blocs)
    # Images pas encore déposées : l'écran s'affiche sans illustration (pas d'emplacement vide en démonstration)
    img = RACINE / "src" / "assets" / "img"
    for bl in blocs:
        ill = bl.get("illustration")
        if ill and bl.get("type") != "hotspot" and not any((img / f"{ill}.{x}").exists() for x in ("jpg", "png")):
            print(f"  image absente : {ill} ({bl.get('id')}) — écran affiché sans illustration")
            del bl["illustration"]
        for pb in bl.get("blocs") or []:   # blocs des pages qui défilent (récit, explorer…)
            ill = pb.get("illustration")
            if ill and pb.get("type") != "hotspot" and not any((img / f"{ill}.{x}").exists() for x in ("jpg", "png")):
                print(f"  image absente : {ill} ({bl.get('id')}, bloc {pb.get('type')}) — bloc affiché sans illustration")
                del pb["illustration"]
    # T10 : infographie absente du dossier d'images → le bloc en code (grille, méthode) reste affiché
    for bl in blocs:
        for pb in bl.get("blocs") or []:
            vis = [v for v in (pb.get("visuels") or []) if any((img / f"{v.get('image')}.{x}").exists() for x in ('png','webp'))]
            for v in pb.get("visuels") or []:
                if v not in vis:
                    print(f"  infographie absente : {v.get('image')} ({bl.get('id')}) — le bloc en code reste affiché")
            if "visuels" in pb:
                if vis: pb["visuels"] = vis
                else: del pb["visuels"]
            pl = pb.get("plus_loin")
            if isinstance(pl, dict) and pl.get("image") and not any((img / f"{pl['image']}.{x}").exists() for x in ('png','webp')):
                print(f"  infographie absente : {pl['image']} ({bl.get('id')}) — la liste en code reste affichée")
                del pl["image"]
    module = next((b for b in blocs if b.get("type") == "module"), None)
    if not module:
        erreurs.append("bloc « module » manquant")
    else:
        ids = {b.get("id") for b in blocs}
        for s in module.get("sections", []):
            if s.get("debut") not in ids:
                erreurs.append(f"section {s.get('id')} : début « {s.get('debut')} » inexistant")
        # Libellés des compétences (positionnement v0.7) : chaque compétence observée a son libellé
        cl = module.get("competences_lib")
        if cl:
            for x in blocs:
                for c in x.get("competences") or []:
                    if x.get("type") == "pos-item" and c not in cl:
                        erreurs.append(f"{x.get('id')} : compétence {c} sans libellé dans « competences_lib »")
        # Enchaînement vers la page suivante du démonstrateur (D84)
        ps = module.get("page_suivante")
        if ps and not (RACINE / "src" / str(ps.get("href", ""))).exists():
            avertissements.append(f"page suivante « {ps.get('href')} » introuvable dans src/")
    for a in avertissements:
        print("  avertissement :", a)
    if erreurs:
        print(f"\n{len(erreurs)} erreur(s) — rien n'est généré :")
        for e in erreurs:
            print("  ERREUR :", e)
        sys.exit(1)
    data = {
        "module": module,
        "ecrans": {b["id"]: b for b in blocs if b.get("type") not in ("module", "fiche")},
        "fiches": {b["id"]: b for b in blocs if b.get("type") == "fiche"},
        "illustrations": illus,
        "source": src.name,
    }
    sortie = RACINE / "src" / "data" / f"{nom}.js"
    sortie.parent.mkdir(parents=True, exist_ok=True)
    js = "/* GÉNÉRÉ par build/build.py depuis « " + src.name + " » — ne pas modifier à la main. */\n"
    js += "window.DINA_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n"
    sortie.write_text(js, encoding="utf-8")
    n = len(data["ecrans"])
    print(f"OK : {n} écrans, {len(data['fiches'])} fiches, {len(illus)} illustrations -> {sortie.relative_to(RACINE)}")
    if avertissements:
        print(f"({len(avertissements)} avertissement(s) de longueur, non bloquants)")


if __name__ == "__main__":
    main()
