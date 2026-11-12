/* Petit serveur statique (aucune dépendance) : sert le dossier du site sur un port libre. */
const http = require("http"), fs = require("fs"), path = require("path");
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2", ".json": "application/json" };

function demarrer(racine) {
  return new Promise((ok) => {
    const srv = http.createServer((req, rep) => {
      const url = decodeURIComponent(req.url.split("?")[0]);
      const fichier = path.join(racine, url === "/" ? "index.html" : url);
      if (!fichier.startsWith(racine)) { rep.writeHead(403); return rep.end(); }
      fs.readFile(fichier, (err, buf) => {
        if (err) { rep.writeHead(404); return rep.end("introuvable"); }
        rep.writeHead(200, { "Content-Type": TYPES[path.extname(fichier)] || "application/octet-stream", "Cache-Control": "no-store" });
        rep.end(buf);
      });
    });
    srv.listen(0, "127.0.0.1", () => ok({ url: "http://127.0.0.1:" + srv.address().port, fermer: () => srv.close() }));
  });
}
module.exports = { demarrer };
