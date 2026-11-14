#!/usr/bin/env node
// Qualitätsprüfung wie auf dem Handy: Lighthouse (Leistung, Barrierefreiheit, Best Practices, SEO) für eine Auswahl
// von Seiten und axe-core (Kontrast, Knopfgröße, Beschriftungen und die übrigen WCAG-2.2-AA-Regeln) für ALLE Seiten,
// jeweils im hellen und im dunklen Design.
//
// Aufruf:  node .github/pruefung/qualitaet.js            Prüfen; Fehler (Exitcode 1), wenn eine Lighthouse-Wertung
//                                                        unter SCHWELLE liegt oder axe einen Verstoß findet
//          node .github/pruefung/qualitaet.js --messen   Nur messen und alles ausgeben, nie Fehler
//          … --seiten index.html,en/saugroboter.html     Nur diese Seiten
//          … --ohne-lighthouse                         Nur axe (schnell)
// Braucht: npm-Pakete lighthouse, puppeteer-core, axe-core (siehe package.json hier) und Chrome/Chromium
// (Pfad in CHROME_PATH, sonst google-chrome bzw. chromium aus PATH).
"use strict";
const fs = require("fs"), path = require("path"), http = require("http"), zlib = require("zlib");
const { execFileSync } = require("child_process");

const WURZEL = path.resolve(__dirname, "..", "..");
const SCHWELLE = 90;
const MESSEN = process.argv.includes("--messen");
const OHNE_LH = process.argv.includes("--ohne-lighthouse");
const nurArg = (process.argv[process.argv.indexOf("--seiten") + 1] || "");
const NUR = process.argv.includes("--seiten") ? nurArg.split(",").filter(Boolean) : null;

// Lighthouse braucht pro Seite einige Sekunden, darum eine feste Auswahl: jede Seitenart einmal, alle Sprachen.
const LIGHTHOUSE_SEITEN = [
  "index.html", "saugroboter.html", "kaffeevollautomat.html", "ratgeber.html",
  "ratgeber-black-friday-echte-angebote.html", "geschenke.html", "fr/index.html",
  "en/index.html", "fr/airfryer.html", "it/ratgeber-saugroboter-oder-akkusauger.html"
];
// axe: alle Seiten, die Besucher sehen (ohne Danke-/Fehlerseite).
const AXE_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

function alleSeiten() {
  const raus = new Set(["404.html", "newsletter-danke.html"]);
  const liste = [];
  for (const ordner of ["", "en/", "fr/", "it/"]) {
    for (const f of fs.readdirSync(path.join(WURZEL, ordner)).sort()) {
      if (f.endsWith(".html") && !raus.has(f)) liste.push(ordner + f);
    }
  }
  return liste;
}

// ---------- Kleiner Server wie Cloudflare: saubere Adressen, gzip, Zwischenspeicher für Dateien mit ?v= ----------
const TYPEN = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".mp4": "video/mp4", ".xml": "application/xml", ".txt": "text/plain"
};
const PACKEN = new Set([".html", ".js", ".css", ".json", ".svg", ".xml", ".txt"]);
function starteServer() {
  const s = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    let datei = path.join(WURZEL, p);
    if (!path.extname(datei) && fs.existsSync(datei + ".html")) datei += ".html";
    if (!datei.startsWith(WURZEL + path.sep) || !fs.existsSync(datei) || fs.statSync(datei).isDirectory()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404");
    }
    const ext = path.extname(datei);
    let inhalt = fs.readFileSync(datei);
    const kopf = { "Content-Type": TYPEN[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=14400" };
    if (PACKEN.has(ext) && /gzip/.test(req.headers["accept-encoding"] || "")) {
      inhalt = zlib.gzipSync(inhalt);
      kopf["Content-Encoding"] = "gzip";
    }
    res.writeHead(200, kopf);
    res.end(inhalt);
  });
  return new Promise(ok => s.listen(0, "127.0.0.1", () => ok({ s, basis: `http://127.0.0.1:${s.address().port}/` })));
}

function chromePfad() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  for (const n of ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser"]) {
    try { return execFileSync("which", [n]).toString().trim(); } catch (e) { /* weiter */ }
  }
  throw new Error("Kein Chrome gefunden: CHROME_PATH setzen");
}

async function main() {
  const puppeteer = require("puppeteer-core");
  const lighthouse = (await import("lighthouse")).default;
  const AXE = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
  const { s, basis } = await starteServer();
  const browser = await puppeteer.launch({
    executablePath: chromePfad(), headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--remote-debugging-port=0"]
  });
  const fehler = [];
  try {
    // ----- axe in hell und dunkel, Handy-Größe -----
    const seiten = NUR || alleSeiten();
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
    let geprueft = 0;
    for (const seite of seiten) {
      for (const schema of ["light", "dark"]) {
        await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: schema },
          { name: "prefers-reduced-motion", value: "reduce" }]);
        await page.goto(basis + seite, { waitUntil: "networkidle0", timeout: 30000 });
        await page.evaluate(AXE);
        const erg = await page.evaluate(tags => window.axe.run(document, { runOnly: { type: "tag", values: tags },
          resultTypes: ["violations"] }), AXE_TAGS);
        for (const v of erg.violations) {
          for (const n of v.nodes.slice(0, 5)) {
            fehler.push(`axe ${schema === "light" ? "hell" : "dunkel"} ${seite}: ${v.id} (${v.impact}) ${n.target.join(" ")} – ${(n.failureSummary || "").split("\n").slice(1, 2).join(" ").trim()}`);
          }
          if (v.nodes.length > 5) fehler.push(`axe ${schema} ${seite}: ${v.id} … und ${v.nodes.length - 5} weitere Stellen`);
        }
        geprueft++;
      }
    }
    await page.close();
    console.log(`axe: ${geprueft} Durchgänge (${seiten.length} Seiten × hell/dunkel)`);

    // ----- Lighthouse (Handy, hell) -----
    const lhSeiten = OHNE_LH ? [] : NUR || LIGHTHOUSE_SEITEN;
    const port = new URL(browser.wsEndpoint()).port;
    const kurz = { performance: "Leistung", accessibility: "Barrierefreiheit", "best-practices": "Best Practices", seo: "SEO" };
    for (const seite of lhSeiten) {
      // Lighthouse schwankt von Lauf zu Lauf um ein paar Punkte. Liegt eine Wertung unter der Schwelle,
      // misst es noch zweimal und nimmt den Median der drei Läufe (so empfiehlt es auch Google).
      const laeufe = [];
      const wertung = (lhr, k) => Math.round((lhr.categories[k].score || 0) * 100);
      while (true) {
        const r = await lighthouse(basis + seite, { port, output: "json", logLevel: "error",
          onlyCategories: Object.keys(kurz) });
        laeufe.push(r.lhr);
        if (laeufe.length === 3 || (laeufe.length === 1 && Object.keys(kurz).every(k => wertung(r.lhr, k) >= SCHWELLE))) break;
      }
      const median = k => laeufe.map(l => wertung(l, k)).sort((x, y) => x - y)[1];
      const lhr = laeufe[laeufe.length - 1], werte = [];
      for (const [k, name] of Object.entries(kurz)) {
        const w = laeufe.length === 1 ? wertung(lhr, k) : median(k);
        werte.push(`${name} ${w}`);
        if (w < SCHWELLE) {
          const schlecht = lhr.categories[k].auditRefs
            .map(a => lhr.audits[a.id]).filter(a => a && a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== "informative" && a.scoreDisplayMode !== "notApplicable")
            .slice(0, 6).map(a => `${a.id}${a.displayValue ? " (" + a.displayValue + ")" : ""}`);
          fehler.push(`Lighthouse ${seite}: ${name} ${w} < ${SCHWELLE} – ${schlecht.join(", ")}`);
        }
      }
      const m = lhr.audits;
      console.log(`Lighthouse ${seite}${laeufe.length > 1 ? ` (Median aus ${laeufe.length} Läufen)` : ""}: ${werte.join(", ")} | LCP ${m["largest-contentful-paint"].displayValue}, TBT ${m["total-blocking-time"].displayValue}, CLS ${m["cumulative-layout-shift"].displayValue}`);
    }
  } finally {
    await browser.close();
    s.close();
  }
  if (fehler.length) {
    console.log(`\n${fehler.length} Befunde:\n` + fehler.join("\n"));
    if (!MESSEN) process.exit(1);
  } else {
    console.log("Qualitätsprüfung: alles in Ordnung");
  }
}
main().catch(e => { console.error(e); process.exit(MESSEN ? 0 : 1); });
