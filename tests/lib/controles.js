/* Mesures faites dans la page, à chaque écran. Rien ici ne modifie la page. */

/* Débordement horizontal : la page, la zone d'écran, ou un élément visible qui sort de la fenêtre
   (sauf s'il est dans un conteneur qui défile ou qui rogne exprès). */
async function debordements(page) {
  return page.evaluate(() => {
    const w = document.documentElement.clientWidth, res = [];
    if (document.documentElement.scrollWidth > w + 1) res.push("page : largeur " + document.documentElement.scrollWidth + " px pour une fenêtre de " + w + " px");
    const zone = document.getElementById("ecran");
    if (zone && zone.scrollWidth > zone.clientWidth + 1) res.push("#ecran : contenu de " + zone.scrollWidth + " px dans " + zone.clientWidth + " px");
    const nom = (el) => el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + (el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".") : "");
    for (const el of document.querySelectorAll("#player *")) {
      if (res.length >= 4) break;
      if (el.closest("svg, .sr-only, [hidden], .voile, .panneau")) continue;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.display === "none" || cs.position === "fixed") continue;
      if (r.right <= w + 1 && r.left >= -1) continue;
      let p = el.parentElement, rogne = false;
      while (p && p !== document.body) {
        const o = getComputedStyle(p).overflowX;
        if (o === "auto" || o === "scroll" || o === "hidden" || o === "clip") { const pr = p.getBoundingClientRect(); if (pr.right <= w + 1 && pr.left >= -1) { rogne = true; break; } }
        p = p.parentElement;
      }
      if (!rogne) res.push(nom(el) + " sort de la fenêtre (" + Math.round(r.left) + " → " + Math.round(r.right) + " px, fenêtre " + w + " px)");
    }
    return res;
  });
}

/* Taille de la sauvegarde SCORM : plus grosse écriture de cmi.suspend_data vue jusqu'ici, et erreurs de l'adaptateur */
async function sauvegarde(page) {
  return page.evaluate(() => {
    const j = window.__scorm || { tailles: [] };
    const d = window.DINA_SCORM && window.DINA_SCORM.diagnostic ? window.DINA_SCORM.diagnostic() : { erreurs: [], suspendMax: 0 };
    return { max: Math.max(0, ...j.tailles, d.suspendMax || 0), erreurs: d.erreurs || [], mode: window.DINA_SCORM ? window.DINA_SCORM.mode : "?" };
  });
}

/* Photographie de ce que voit l'agent : sert à comparer avant / après rechargement */
async function empreinte(page) {
  return page.evaluate(() => {
    const t = (id) => { const e = document.getElementById(id); return e ? e.innerText.replace(/\s+/g, " ").trim() : ""; };
    const z = document.getElementById("ecran");
    return { ecran: z ? z.dataset.ecran || "" : "", texte: t("ecran"), bandeau: t("ctx-episode") + " | " + t("fil"), compteur: t("compteur"), principal: t("btn-principal") };
  });
}

/* État complet enregistré (cmi.suspend_data), lu dans le magasin de l'API factice */
async function etatEnregistre(page) {
  return page.evaluate(() => { try { return JSON.parse(window.API.LMSGetValue("cmi.suspend_data") || "null"); } catch (e) { return "ILLISIBLE"; } });
}

module.exports = { debordements, sauvegarde, empreinte, etatEnregistre };
