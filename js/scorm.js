/* DINA — adaptateur SCORM (CAN-TECH-01 §8).
   Mode "demo" : fonctions neutres, journal dans la console. Mode "scorm12" : prévu au jalon J-TECH.
   Aucun autre fichier n'appelle SCORM directement. */
(function () {
  "use strict";
  var MODE = "demo";
  function log() { if (window.console) console.log.apply(console, ["[DINA scorm:" + MODE + "]"].concat([].slice.call(arguments))); }
  window.DINA_SCORM = {
    mode: MODE,
    init: function () { log("init"); },
    setProgress: function (etape) { log("progression", etape); },
    setResult: function (statut, score) { log("résultat", statut, score); },
    finish: function () { log("finish"); }
  };
})();
