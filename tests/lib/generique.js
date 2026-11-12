/* Pour les écrans qui n'ont pas de réponse juste ou fausse (récits, cartes à retourner, image cliquable, réponse libre…) :
   on fait ce qu'un agent ferait pour débloquer « Continuer » — cliquer sur les éléments proposés, écrire un mot, cocher. */
async function interagirSansConsigne(page, mode) {
  await page.evaluate(() => { const z = document.getElementById("ecran"); z.scrollTop = z.scrollHeight; });
  for (let tour = 0; tour < 6; tour++) {
    const fait = await page.evaluate(async () => {
      const z = document.getElementById("ecran"), vis = (e) => e.offsetParent !== null && !e.hidden && getComputedStyle(e).visibility !== "hidden";
      let n = 0;
      z.querySelectorAll("textarea, input[type=text], input[type=search]").forEach((t) => { if (vis(t) && !t.value) { t.value = "Réponse de test"; t.dispatchEvent(new Event("input", { bubbles: true })); n++; } });
      z.querySelectorAll("input[type=radio]").forEach((r) => { if (vis(r) && !r.disabled && ![...z.querySelectorAll('input[type=radio][name="' + r.name + '"]')].some((x) => x.checked)) { r.click(); n++; } });
      const boutons = [...z.querySelectorAll("button:not([disabled]), [role=button]:not([disabled]), summary")].filter((b) => vis(b) && !b.closest(".chemin, .chm-boutons") && b.getAttribute("aria-expanded") !== "true" && !b.dataset.revoir && !b.classList.contains("btn-fleche") && !b.dataset.fait);
      for (const b of boutons.slice(0, 40)) { b.dataset.fait = "1"; b.click(); n++; }
      return n;
    });
    if (!fait) break;
    await page.waitForTimeout(30);
    const actif = await page.evaluate(() => { const b = document.getElementById("btn-principal"); return !b.disabled && !b.hidden; });
    if (actif) break;
  }
}
module.exports = { interagirSansConsigne };
