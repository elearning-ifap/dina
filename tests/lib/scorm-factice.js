/* API SCORM 1.2 factice, injectée avant le chargement de la page (comme le ferait Moodle/LIANE).
   - garde cmi.suspend_data dans sessionStorage : il survit au rechargement de la page, comme dans un LMS ;
   - journalise la taille de chaque écriture de suspend_data (window.__scorm.tailles) ;
   - fait des Math.random() reproductibles : le mélange des étapes (écrans « ordre ») est identique d'une exécution à l'autre. */
module.exports = function scormFactice() {
  return `(function () {
    var K = "__scorm_factice";
    var store = {}; try { store = JSON.parse(sessionStorage.getItem(K) || "{}"); } catch (e) {}
    var j = { tailles: [], ecritures: 0, erreurs: [] };
    window.__scorm = j;
    function sauver() { try { sessionStorage.setItem(K, JSON.stringify(store)); } catch (e) {} }
    window.API = {
      LMSInitialize: function () { return "true"; },
      LMSFinish: function () { return "true"; },
      LMSGetValue: function (k) { return store[k] == null ? "" : store[k]; },
      LMSSetValue: function (k, v) {
        v = String(v); j.ecritures++;
        if (k === "cmi.suspend_data") j.tailles.push(v.length);
        store[k] = v; sauver(); return "true";
      },
      LMSCommit: function () { return "true"; },
      LMSGetLastError: function () { return "0"; },
      LMSGetErrorString: function () { return ""; },
      LMSGetDiagnostic: function () { return ""; }
    };
    var graine = 123456789;
    Math.random = function () { graine |= 0; graine = graine + 0x6D2B79F5 | 0; var t = Math.imul(graine ^ graine >>> 15, 1 | graine); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  })();`;
};
