/* Pilote : joue un module de bout en bout, comme un agent, avec des réponses justes ou fausses.
   Il lit les bonnes réponses dans les données du module (window.DINA_DATA), pas dans l'affichage. */

const sel = {
  principal: "#btn-principal",
  zone: "#ecran",
};

async function etatEcran(page) {
  return page.evaluate(() => {
    const z = document.getElementById("ecran"), b = document.getElementById("btn-principal");
    const vis = (e) => !!e && !e.hidden && e.offsetParent !== null && getComputedStyle(e).visibility !== "hidden";
    return {
      id: z.dataset.ecran || "", principalVisible: vis(b), principalActif: vis(b) && !b.disabled,
      principalTexte: b.innerText.replace(/\s+/g, " ").trim(),
      signature: (z.dataset.ecran || "") + "|" + b.innerText.trim() + "|" + z.querySelectorAll(".replique:not([hidden])").length + "|" + z.querySelectorAll("input:checked").length + "|" + z.innerHTML.length,
    };
  });
}

const adapte = (o) => o.verdict === "adapte";

/* ---------- Réponses par type d'écran ---------- */
const reponses = {
  async choix(page, e, mode, ctx) {
    const bon = e.options.find(adapte), faux = e.options.find((o) => !adapte(o)) || e.options[0];
    const choisir = async (o) => page.click(`${sel.zone} label.option[data-id="${o.id}"]`);
    if (mode === "fausses") {
      await choisir(faux); await page.click(sel.principal);                 // Valider
      if (!ctx.reessaye) { ctx.reessaye = true; await page.click("#reessayer"); await choisir(bon); await page.click(sel.principal); await page.click("#reessayer"); await choisir(faux); await page.click(sel.principal); }
    } else { await choisir(bon); await page.click(sel.principal); }
  },

  async "choix-multiple"(page, e, mode) { await multiple(page, e, mode); },
  async ordre(page, e, mode) { await ordre(page, e, mode); },

  async classement(page, e, mode) {
    for (const it of e.items) {
      const cat = mode === "justes" ? it.attendu : (e.categories.find((c) => c.id !== it.attendu) || e.categories[0]).id;
      await page.click(`${sel.zone} .cl-item[data-id="${it.id}"] label.cl-cat:has(input[value="${cat}"])`);
    }
    await page.click(sel.principal);
  },

  async assemblage(page, e, mode) {
    for (const p of e.parties) {
      const o = mode === "justes" ? p.options.find(adapte) : (p.options.find((x) => !adapte(x)) || p.options[0]);
      await page.click(`${sel.zone} .as-partie[data-id="${p.id}"] label.as-option:has(input[value="${o.id}"])`);
    }
    await page.click(sel.principal);
  },

  async "eval-item"(page, e, mode) {
    if (e.mode === "ordre") return ordre(page, e, mode);
    if (e.mode === "multiple") return multiple(page, e, mode);
    const o = mode === "justes" ? e.options.find(adapte) : (e.options.find((x) => !adapte(x)) || e.options[0]);
    await page.click(`${sel.zone} label.option:has(input[value="${o.id}"])`);
    await page.click(sel.principal);
  },

  async planning(page, e, mode) {
    for (const t of e.taches) {
      const bons = [].concat(t.attendu);
      const col = mode === "justes" ? bons[0] : (e.colonnes.find((c) => bons.indexOf(c) < 0) || e.colonnes[0]);
      await page.selectOption(`${sel.zone} .pl-tache[data-id="${t.id}"] select`, col);
    }
    await page.click(sel.principal);                                       // Valider
  },

  /* Page qui défile : on répond bloc après bloc, dans l'ordre où la page les ouvre */
  async page(page, e, mode) {
    for (let tour = 0; tour < 30; tour++) {
      const id = await page.evaluate(() => { const b = [...document.querySelectorAll("#ecran [data-verifier]")].pop(); return b ? b.dataset.verifier : null; });
      if (!id) return;                                                     // plus de bloc à valider : « Terminer l'épisode » est actif
      const b = e.blocs.find((x) => x.id === id);
      await blocPage[b.type](page, e, b, mode);
      await page.click(`${sel.zone} [data-verifier="${id}"]`);
    }
    throw new Error("la page ne cesse d'ouvrir de nouveaux blocs");
  },

  async "auto-positionnement"(page, e, mode) {
    const k = mode === "justes" ? e.echelle.length - 1 : 0;
    for (let n = 0; n < e.items.length; n++) await page.click(`${sel.zone} label.auto-case:has(input[name="auto-${n}"][value="${k}"])`);
    await page.click(sel.principal);                                       // Enregistrer / Voir mon bilan
  },
};

const choisirPage = (page, bloc, item, val) => page.click(`${sel.zone} label:has(input[data-bloc="${bloc}"][data-item="${item}"][value="${val}"])`);
const blocPage = {
  async tri(page, e, b, mode) {
    const cats = b.categories || e.categories || [];
    const ids = await page.$$eval(`${sel.zone} input[data-bloc="${b.id}"]:not([disabled])`, (l) => [...new Set(l.map((i) => i.dataset.item))]);
    for (const itId of ids) {
      const it = e.items.find((x) => x.id === itId), bons = [].concat(it.attendu);
      const val = mode === "justes" ? bons[0] : (cats.find((c) => bons.indexOf(c.id) < 0) || cats[0]).id;
      await choisirPage(page, b.id, itId, val);
    }
  },
  async explorer(page, e, b) {
    const n = Math.min(b.minimum || b.zones.length, b.zones.length);
    for (const z of b.zones.slice(0, n)) await page.click(`${sel.zone} .pg-exp-lien[data-zone="${z.id}"]`);
  },
  async recherche(page, e, b, mode) {
    const m = (b.mots_cles || []).find((x) => x.si) || (b.mots_cles || [])[0];
    const q = m && m.si ? m.si[0] : "test";
    await page.fill(`${sel.zone} #pg-rch-q-${b.id}`, q);
    await page.press(`${sel.zone} #pg-rch-q-${b.id}`, "Enter");
    const cle = m && m.resultats ? m.resultats : (m && m.sinon);
    const docs = (b.jeux || {})[cle] || [];
    const d = mode === "justes" ? docs.find(adapte) : (docs.find((x) => !adapte(x)) || docs[0]);
    if (d) await page.click(`${sel.zone} label:has(input[name="pg-rch-${b.id}"][value="${d.id}"])`);
  },
  async message(page, e, b, mode) {
    for (const p of b.parties || []) {
      const o = mode === "justes" ? p.options.find(adapte) : (p.options.find((x) => !adapte(x)) || p.options[0]);
      await choisirPage(page, b.id, p.id, o.id);
    }
  },
  async ordre(page, e, b, mode) {
    if (mode !== "justes") return;
    for (let cible = 0; cible < b.attendu.length; cible++) {
      for (let garde = 0; garde < 30; garde++) {
        const ids = await page.$$eval(`${sel.zone} .pg-ordre .ordre-item`, (l) => l.map((x) => x.dataset.id));
        if (ids.indexOf(b.attendu[cible]) <= cible) break;
        await page.click(`${sel.zone} .pg-ordre .ordre-item[data-id="${b.attendu[cible]}"] [data-ordre="${b.id}"][data-sens="-1"]`);
      }
    }
  },
};

async function multiple(page, e, mode) {
  const faux = e.options.find((o) => e.attendu.indexOf(o.id) < 0) || e.options[0];
  const coches = mode === "justes" ? e.attendu : [faux.id];
  for (const id of coches) await page.click(`${sel.zone} label.option[data-id="${id}"]`);
  await page.click(sel.principal);
}

/* Ordre : on déplace les étiquettes avec les flèches ↑ ↓ (la voie clavier / téléphone) */
async function ordre(page, e, mode) {
  if (mode === "justes") {
    for (let cible = 0; cible < e.attendu.length; cible++) {
      for (let garde = 0; garde < 30; garde++) {
        const ids = await page.$$eval(`${sel.zone} .ordre-item`, (l) => l.map((x) => x.dataset.id));
        const pos = ids.indexOf(e.attendu[cible]);
        if (pos <= cible) break;
        await page.click(`${sel.zone} .ordre-item[data-id="${e.attendu[cible]}"] .btn-fleche[data-sens="-1"]`);
      }
    }
  }
  await page.click(sel.principal);                                         // Valider
}

module.exports = { etatEcran, reponses, sel };
