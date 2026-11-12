#!/usr/bin/env node
/* Filet de non-régression DINA (outil de développement : rien de ce dossier n'est dans le produit).
   Joue chaque module de bout en bout (réponses justes, puis fausses), à 1366 et 390 px, et vérifie :
     - 0 erreur JS ; 0 débordement horizontal ;
     - sauvegarde SCORM (cmi.suspend_data) < 4 096 caractères ;
     - après rechargement, l'agent retrouve exactement le même écran et la même sauvegarde.
   Usage : node tests/lancer.js [--module m2] [--mode justes|fausses] [--fenetre 1366|390] [--racine <dossier du site>] */
const fs = require("fs"), path = require("path");
const { demarrer } = require("./lib/serveur");
const scormFactice = require("./lib/scorm-factice");
const { jouerModule } = require("./lib/jouer");

const arg = (n) => { const i = process.argv.indexOf("--" + n); return i > 0 ? process.argv[i + 1] : null; };
const racine = path.resolve(arg("racine") || [path.join(__dirname, "..", "src"), path.join(__dirname, "..")].find((d) => fs.existsSync(path.join(d, "prologue.html"))));
const MODULES = [{ page: "prologue.html" }, { page: "positionnement.html" }, { page: "m1.html" }, { page: "m2.html" }, { page: "m1-pages.html" }, { page: "m2-pages.html" }];
const FENETRES = [{ nom: "ordinateur", l: 1366, h: 768 }, { nom: "téléphone", l: 390, h: 844 }];
const MODES = ["justes", "fausses"];

(async () => {
  const { chromium } = require("playwright");
  const filtre = arg("module"), fMode = arg("mode"), fFen = arg("fenetre");
  const serveur = await demarrer(racine);
  const browser = await chromium.launch();
  const scorm = scormFactice();
  const resultats = [];
  console.log(`Site testé : ${racine}\n`);
  for (const mod of MODULES) {
    if (filtre && !mod.page.startsWith(filtre)) continue;
    for (const fen of FENETRES) for (const mode of MODES) {
      if ((fMode && fMode !== mode) || (fFen && String(fen.l) !== fFen)) continue;
      const t0 = Date.now();
      const r = await jouerModule(browser, serveur.url, mod, fen, mode, { scorm });
      resultats.push(r);
      const ok = !r.erreurs.length;
      console.log(`${ok ? "OK    " : "ÉCHEC "} ${mod.page.padEnd(20)} ${String(fen.l).padStart(4)} px  réponses ${mode.padEnd(7)}  ${String(r.vus).padStart(3)} écrans · sauvegarde max ${String(r.saveMax).padStart(4)}/4096 · ${r.rechargements} rechargements · ${((Date.now() - t0) / 1000).toFixed(1)} s`);
      r.erreurs.forEach((m) => console.log("         ✗ " + m));
    }
  }
  await browser.close(); serveur.fermer();
  const avert = [...new Set(resultats.flatMap((r) => r.avertissements))];
  if (avert.length) console.log("\nÀ noter (n'arrête pas le test) :\n  " + avert.join("\n  "));
  const ko = resultats.filter((r) => r.erreurs.length).length;
  console.log(`\n${ko ? "ÉCHEC" : "RÉUSSI"} : ${resultats.length - ko} parcours sur ${resultats.length} sans anomalie.`);
  process.exit(ko ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
