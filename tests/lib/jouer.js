/* Joue un module de bout en bout et rend un compte rendu : écrans vus, erreurs, débordements, taille de sauvegarde, rechargements. */
const { etatEcran, reponses, sel } = require("./pilote");
const { debordements, sauvegarde, empreinte, etatEnregistre } = require("./controles");
const { interagirSansConsigne } = require("./generique");

const MAX_PAS = 900;
const SANS_COMPARAISON_DE_TEXTE = new Set(["ordre"]);    // l'ordre des étiquettes est tiré au hasard à chaque affichage

async function jouerModule(browser, base, mod, fenetre, mode, opts = {}) {
  const r = { module: mod.page, fenetre: fenetre.nom, mode, ecrans: 0, vus: new Set(), erreurs: [], avertissements: [], saveMax: 0, rechargements: 0, termine: false };
  const ctx = await browser.newContext({ viewport: { width: fenetre.l, height: fenetre.h }, reducedMotion: "reduce", acceptDownloads: false });
  await ctx.addInitScript(opts.scorm);
  const page = await ctx.newPage();
  const echec = (msg) => { if (!r.erreurs.includes(msg)) r.erreurs.push(msg); };
  page.on("pageerror", (e) => echec("erreur JS : " + String(e.message).slice(0, 200)));
  page.on("console", (m) => {
    if (m.type() !== "error") return;
    if (/Failed to load resource/.test(m.text())) return;                // image ou police absente : signalé plus bas, pas une erreur JS
    echec("console.error : " + m.text().slice(0, 200));
  });
  page.on("response", (rep) => { if (rep.status() >= 400 && !/favicon/.test(rep.url())) { const m = "ressource introuvable (" + rep.status() + ") : " + rep.url().replace(base, ""); if (!r.avertissements.includes(m)) r.avertissements.push(m); } });

  const url = base + "/" + mod.page;
  const chemin = (u) => new URL(u).pathname;
  await page.goto(url);
  await page.waitForSelector(sel.zone + "[data-ecran]", { timeout: 8000 }).catch(() => echec("le module ne s'affiche pas"));
  const E = await page.evaluate(() => (window.DINA_DATA || {}).ecrans || {});
  const sections = await page.evaluate(() => ((window.DINA_DATA || {}).module || {}).sections || []);
  if (!Object.keys(E).length) { echec("données du module introuvables"); await ctx.close(); return r; }

  const typeDe = (id) => (E[id] ? E[id].type : id);
  let precedent = null, contexte = {}, repete = 0, derniereSig = "", dernierCheck = -99, sectionVue = new Set();

  for (let pas = 0; pas < MAX_PAS && r.erreurs.length < 12; pas++) {
    if (chemin(page.url()) !== chemin(url)) { r.termine = true; break; }       // « Continuer » vers l'étape suivante ou l'accueil : le module est fini
    const s = await etatEcran(page).catch(() => null);
    if (!s) { r.termine = chemin(page.url()) !== chemin(url); break; }
    if (s.id === "MENU" && !s.principalVisible) { r.termine = true; break; }   // toutes les étapes sont faites

    const nouveau = s.id !== precedent;
    if (nouveau) { contexte = {}; repete = 0; r.vus.add(s.id); r.ecrans++; }
    precedent = s.id;
    r.vus.add(s.id);

    /* rechargement : l'agent revient plus tard, la sauvegarde doit redonner exactement le même écran */
    const e = E[s.id], premiereDeSection = e && sections.some((x) => x.debut === s.id);
    if (nouveau && !opts.sansRechargement && (s.id === "MENU" || premiereDeSection || r.ecrans - dernierCheck >= 12)) {
      dernierCheck = r.ecrans;
      await verifierRechargement(page, url, r, echec, typeDe(s.id), s.id);
    }

    /* contrôles sur l'écran tel qu'il vient de s'afficher */
    if (nouveau || s.principalTexte !== contexte.lastBtn) {
      contexte.lastBtn = s.principalTexte;
      for (const d of await debordements(page)) echec(`débordement à ${fenetre.l} px sur ${s.id} : ${d}`);
    }

    if (nouveau && e && reponses[e.type]) {
      try { await reponses[e.type](page, e, mode, contexte); }
      catch (x) { echec(`réponse impossible sur ${s.id} (${e.type}) : ${String(x.message).split("\n")[0].slice(0, 160)}`); break; }
      for (const d of await debordements(page)) echec(`débordement à ${fenetre.l} px sur ${s.id} après réponse : ${d}`);
      await mesurer(page, r, echec);
      continue;                                                                // on repart de l'écran tel qu'il est maintenant
    }

    /* écrans sans réponse juste ou fausse : lecture, clics sur les éléments, saisie libre */
    await mesurer(page, r, echec);
    let cur = await etatEcran(page);
    if (!cur.principalActif) {
      await interagirSansConsigne(page, mode);
      cur = await etatEcran(page);
      for (const d of await debordements(page)) echec(`débordement à ${fenetre.l} px sur ${s.id} après interaction : ${d}`);
    }
    if (!cur.principalActif) { echec(`écran bloqué : ${s.id} (${typeDe(s.id)}), bouton « ${cur.principalTexte} » inactif`); break; }

    const sigAvant = cur.signature;
    if (sigAvant === derniereSig) { if (++repete > 4) { echec(`écran qui ne progresse plus : ${s.id} (${typeDe(s.id)})`); break; } } else repete = 0;
    derniereSig = sigAvant;
    await page.click(sel.principal).catch((x) => echec("clic impossible sur « Continuer » : " + String(x.message).split("\n")[0].slice(0, 120)));
    await page.waitForTimeout(15);
  }
  if (!r.termine && !r.erreurs.length) echec("le module n'est pas arrivé à sa fin");

  if (r.modeScorm !== "scorm12") echec("l'adaptateur n'est pas en mode SCORM 1.2 (mode « " + r.modeScorm + " ») : la sauvegarde n'a pas été mesurée");
  if (r.saveMax >= 4096) echec(`sauvegarde de ${r.saveMax} caractères : la limite SCORM 1.2 est 4 096`);
  r.vus = r.vus.size;
  await ctx.close();
  return r;
}

async function mesurer(page, r, echec) {
  const sv = await sauvegarde(page);
  r.saveMax = Math.max(r.saveMax, sv.max); r.modeScorm = sv.mode;
  sv.erreurs.forEach((m) => echec("adaptateur SCORM : " + m));
}

/* Recharge la page et vérifie que l'agent retrouve le même écran, avec la même sauvegarde */
async function verifierRechargement(page, url, r, echec, type, id) {
  const avant = await empreinte(page), etatAvant = await etatEnregistre(page), brut = await page.evaluate(() => window.API.LMSGetValue("cmi.suspend_data"));
  if (etatAvant === "ILLISIBLE") return echec(`sauvegarde illisible avant rechargement (${id})`);
  if (brut && JSON.stringify(JSON.parse(brut)) !== brut) echec(`sauvegarde non reconstructible telle quelle (${id})`);
  await page.reload();
  await page.waitForSelector(sel.zone + "[data-ecran]", { timeout: 8000 }).catch(() => echec("la page ne se rouvre pas après rechargement (" + id + ")"));
  const apres = await empreinte(page), etatApres = await etatEnregistre(page);
  r.rechargements++;
  if (apres.ecran !== avant.ecran) echec(`rechargement sur ${id} : on revient sur ${apres.ecran || "(vide)"} au lieu de ${avant.ecran}`);
  else {
    if (!SANS_COMPARAISON_DE_TEXTE.has(type) && apres.texte !== avant.texte) echec(`rechargement sur ${id} : le texte affiché n'est pas identique`);
    if (apres.bandeau !== avant.bandeau) echec(`rechargement sur ${id} : le bandeau ou le fil de progression n'est pas identique`);
  }
  if (JSON.stringify(etatApres) !== JSON.stringify(etatAvant)) echec(`rechargement sur ${id} : la sauvegarde a changé`);
}

module.exports = { jouerModule };
