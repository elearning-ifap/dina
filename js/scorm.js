/* DINA — adaptateur SCORM (CAN-TECH-01 §8).
   Deux modes, choisis seuls au chargement :
   - "scorm12" : une API SCORM 1.2 (window.API) est trouvée dans une fenêtre parente ou ouvrante (Moodle, LIANE) ;
   - "demo"    : pas d'API (prototype sur GitHub) ; fonctions neutres, journal dans la console.
   Aucun autre fichier n'appelle SCORM directement.
   Diagnostic (jalon J-TECH) : panneau affiché si window.DINA_DIAG vaut true ou si l'adresse contient ?diag=1. */
(function () {
  "use strict";

  var LIMITE_SUSPEND = 4096;   /* SCORM 1.2 : cmi.suspend_data limité à 4 096 caractères */
  var api = trouverApi(), MODE = api ? "scorm12" : "demo";
  var ouvert = false, ferme = false, debut = Date.now();
  var diag = { api: !!api, init: null, entry: "", statutInitial: "", statut: "", location: "", suspendTaille: 0, suspendMax: 0, score: "", commits: 0, erreurs: [], reprise: false };

  function log() { if (window.console) console.log.apply(console, ["[DINA scorm:" + MODE + "]"].concat([].slice.call(arguments))); }

  /* Recherche classique de l'API SCORM 1.2 : fenêtres parentes, puis fenêtre ouvrante et ses parentes */
  function chercher(w) {
    var n = 0;
    try {
      while (w && !w.API && w.parent && w.parent !== w && n++ < 10) w = w.parent;
      return w && w.API ? w.API : null;
    } catch (e) { return null; }
  }
  function trouverApi() {
    var a = chercher(window);
    if (!a) { try { if (window.opener) a = chercher(window.opener); } catch (e) {} }
    return a;
  }

  function erreur(quoi) {
    if (!api) return;
    var code = String(api.LMSGetLastError());
    if (code !== "0") {
      var msg = code + " " + (api.LMSGetErrorString(code) || "") + " (" + quoi + ")";
      diag.erreurs.push(msg); log("erreur", msg); majDiag();
    }
  }
  function lire(cle) { if (!ouvert) return ""; var v = api.LMSGetValue(cle); erreur("lecture " + cle); return v == null ? "" : String(v); }
  function ecrire(cle, val) { if (!ouvert) return false; var ok = String(api.LMSSetValue(cle, String(val))) === "true"; if (!ok) erreur("écriture " + cle); return ok; }
  function valider() { if (!ouvert) return; if (String(api.LMSCommit("")) === "true") diag.commits++; else erreur("commit"); majDiag(); }

  /* Durée de session au format SCORM 1.2 : HHHH:MM:SS */
  function duree() {
    var s = Math.round((Date.now() - debut) / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    s = s % 60;
    return ("000" + h).slice(-4) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2);
  }

  function init() {
    if (ouvert || ferme) return;
    if (!api) { log("init (pas d'API SCORM : mode démonstration)"); return; }
    ouvert = String(api.LMSInitialize("")) === "true";
    diag.init = ouvert;
    if (!ouvert) { erreur("LMSInitialize"); return; }
    diag.entry = lire("cmi.core.entry");
    diag.statutInitial = diag.statut = lire("cmi.core.lesson_status");
    diag.location = lire("cmi.core.lesson_location");
    if (!diag.statut || diag.statut === "not attempted") { ecrire("cmi.core.lesson_status", "incomplete"); diag.statut = "incomplete"; }
    ecrire("cmi.core.exit", "suspend");   /* l'agent reprend là où il s'est arrêté */
    valider();
    log("init", diag.entry, diag.statutInitial);
  }

  function terminer() {
    if (!ouvert || ferme) return;
    ecrire("cmi.core.session_time", duree());
    valider();
    api.LMSFinish(""); erreur("LMSFinish");
    ouvert = false; ferme = true;
    log("LMSFinish");
  }
  /* Fermeture de l'onglet ou de la fenêtre Moodle : on enregistre et on termine proprement */
  window.addEventListener("pagehide", terminer);
  window.addEventListener("beforeunload", terminer);

  window.DINA_SCORM = {
    mode: MODE,
    actif: function () { init(); return ouvert; },
    init: init,

    /* État du lecteur (progression, réponses) : cmi.suspend_data en SCORM, rien en démonstration */
    lireEtat: function () {
      init();
      var s = lire("cmi.suspend_data");
      diag.reprise = !!s; diag.suspendTaille = diag.suspendMax = s.length;
      majDiag();
      if (!s) return null;
      try { return JSON.parse(s); } catch (e) { diag.erreurs.push("suspend_data illisible"); majDiag(); return null; }
    },
    ecrireEtat: function (json) {
      if (!ouvert) return false;
      diag.suspendTaille = json.length;
      diag.suspendMax = Math.max(diag.suspendMax, json.length);
      if (json.length > LIMITE_SUSPEND) {
        diag.erreurs.push("état de " + json.length + " caractères : dépasse la limite SCORM 1.2 de " + LIMITE_SUSPEND);
        majDiag();
        return false;   /* le moteur garde l'état en mémoire et dans le navigateur */
      }
      var ok = ecrire("cmi.suspend_data", json);
      valider();
      return ok;
    },

    setProgress: function (etape) {
      log("progression", etape);
      if (!ouvert) return;
      diag.location = String(etape).slice(0, 255);
      ecrire("cmi.core.lesson_location", diag.location);
      valider();
    },
    /* statut : "passed" ou "failed" ; score : preuves réussies sur 3, converti en pourcentage */
    setResult: function (statut, score) {
      log("résultat", statut, score);
      if (!ouvert) return;
      var pct = Math.round(100 * (Number(score) || 0) / 3);
      ecrire("cmi.core.score.min", 0); ecrire("cmi.core.score.max", 100); ecrire("cmi.core.score.raw", pct);
      ecrire("cmi.core.lesson_status", statut);
      diag.statut = statut; diag.score = pct + " / 100";
      valider();
    },
    /* Fin du module : terminé, sauf si une évaluation a déjà donné réussi ou échoué */
    finish: function () {
      log("fin du module");
      if (!ouvert) return;
      if (diag.statut !== "passed" && diag.statut !== "failed") { ecrire("cmi.core.lesson_status", "completed"); diag.statut = "completed"; }
      valider();
    },
    terminer: terminer,
    diagnostic: function () { return JSON.parse(JSON.stringify(diag)); }
  };

  /* ---------- Panneau de diagnostic (test technique dans LIANE) ---------- */
  var DIAG_ON = window.DINA_DIAG === true || /[?&]diag=1/.test(window.location.search);
  var panneau = null;
  function ligne(lib, val, alerte) { return "<tr><th>" + lib + "</th><td" + (alerte ? ' style="color:#b3261e;font-weight:700"' : "") + ">" + val + "</td></tr>"; }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function majDiag() {
    if (!DIAG_ON) return;
    if (!panneau) {
      if (!document.body) { document.addEventListener("DOMContentLoaded", majDiag); return; }
      panneau = document.createElement("aside");
      panneau.setAttribute("aria-label", "Diagnostic SCORM");
      panneau.style.cssText = "position:fixed;right:8px;bottom:8px;z-index:9999;max-width:340px;background:#fff;border:2px solid #333;border-radius:8px;padding:8px 10px;font:12px/1.35 system-ui,sans-serif;color:#222;box-shadow:0 4px 16px rgba(0,0,0,.25)";
      document.body.appendChild(panneau);
      panneau.addEventListener("click", function (ev) { if (ev.target.dataset.replier) { panneau.dataset.replie = panneau.dataset.replie ? "" : "1"; majDiag(); } });
    }
    var titre = '<strong>Diagnostic SCORM — test LIANE</strong> <button type="button" data-replier="1" style="float:right;font:inherit">' + (panneau.dataset.replie ? "Ouvrir" : "Replier") + "</button>";
    if (panneau.dataset.replie) { panneau.innerHTML = titre; return; }
    var pctMax = Math.round(100 * diag.suspendMax / LIMITE_SUSPEND);
    panneau.innerHTML = titre + '<table style="border-collapse:collapse;margin-top:6px;width:100%">' +
      ligne("API SCORM 1.2", diag.api ? "trouvée" : "absente (mode démonstration)", !diag.api) +
      ligne("Initialisation", diag.init === null ? "—" : diag.init ? "réussie" : "échec", diag.init === false) +
      ligne("Entrée", esc(diag.entry || "—") + (diag.entry === "resume" ? " (reprise)" : diag.entry === "ab-initio" ? " (premier lancement)" : "")) +
      ligne("Statut au lancement", esc(diag.statutInitial || "—")) +
      ligne("Statut actuel", esc(diag.statut || "—")) +
      ligne("Position", esc(diag.location || "—")) +
      ligne("Reprise de l'état", diag.reprise ? "oui, état relu" : "non (état vide)") +
      ligne("Sauvegarde", diag.suspendTaille + " car. (max " + diag.suspendMax + ", " + pctMax + " % de 4 096)", diag.suspendMax > LIMITE_SUSPEND) +
      ligne("Score", esc(diag.score || "—")) +
      ligne("Enregistrements", String(diag.commits)) +
      ligne("Erreurs", diag.erreurs.length ? esc(diag.erreurs.slice(-3).join(" ; ")) : "aucune", diag.erreurs.length > 0) +
      "</table>";
  }
  if (DIAG_ON) { if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", majDiag); else majDiag(); }
})();
