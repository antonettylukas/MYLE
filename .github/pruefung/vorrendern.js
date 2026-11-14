#!/usr/bin/env node
// Rendert alle Seiten mit hreflang (Startseiten, Produktseiten und Geschenke-Seite in 4 Sprachen) einmal im Browser vor und
// schreibt Kopf, Fuß, Seiteninhalt und JSON-LD fertig in die HTML-Dateien. So sehen Suchmaschinen und KI-Suchen,
// die kein JavaScript ausführen, den ganzen Text. Für Besucher ändert sich nichts: app.js ersetzt die Blöcke beim Laden.
// Die Blöcke stehen zwischen <!--vr--> und <!--/vr-->; im <head> trägt der Block die Prüfsumme der Eingaben,
// daran erkennt pruefe.py veraltete Seiten (Einzelheiten in vorgerendert.py).
//
// Aufruf nach jeder Änderung an Seiten oder Skripten:  node .github/pruefung/vorrendern.js
// Prüfen, ohne zu schreiben:                         node .github/pruefung/vorrendern.js --test
//   (jede Seite mit und ohne Vorrendern gleich, keine Fehler, Vorrendern auf dem Stand und zweimal gleich)
// Braucht Playwright mit Chromium (require("playwright")).
"use strict";
const fs = require("fs"), path = require("path"), http = require("http"), { execFileSync } = require("child_process");
const { chromium } = require("playwright");

const WURZEL = path.resolve(__dirname, "..", "..");
const SITE = "https://myle.life";
const BLOCK = /<!--vr(?::[0-9a-f]+)?-->[\s\S]*?<!--\/vr-->\n?/g;
const ohneVr = t => t.replace(BLOCK, "");
const TEST = process.argv.includes("--test");
const PARALLEL = 4;

// ---------- Kleiner Server, der wie Cloudflare saubere Adressen kennt (/saugroboter -> saugroboter.html) ----------
const TYPEN = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".mp4": "video/mp4", ".xml": "application/xml", ".txt": "text/plain"
};
function starteServer(mitVr) {
  const s = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (p.endsWith("/")) p += "index.html";
    let datei = path.join(WURZEL, p);
    if (!path.extname(datei) && fs.existsSync(datei + ".html")) datei += ".html";
    if (!datei.startsWith(WURZEL + path.sep) || !fs.existsSync(datei) || fs.statSync(datei).isDirectory()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404");
    }
    let inhalt = fs.readFileSync(datei);
    // Vorgerendert wird immer aus der leeren Seite, so wie vor dem ersten Vorrendern
    if (datei.endsWith(".html") && !mitVr) inhalt = ohneVr(inhalt.toString("utf8"));
    res.writeHead(200, { "Content-Type": TYPEN[path.extname(datei)] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(inhalt);
  });
  return new Promise(ok => s.listen(0, "127.0.0.1", () => ok({ s, basis: `http://127.0.0.1:${s.address().port}` })));
}

// ---------- Im Browser: die fertigen Teile der Seite herausholen und JSON-LD bauen ----------
function holeTeile(SITE) {
  // Videos, Rechner und Newsletter bleiben leer: Sie funktionieren nur mit JavaScript, und die Videobilder
  // wären viel zu groß. Für den Text der Seite spielen sie keine Rolle.
  const leeren = el => {
    const k = el.cloneNode(true);
    k.querySelectorAll(".buehne, [data-video], .rechner, [data-newsletter]").forEach(x => x.replaceChildren());
    return k;
  };
  const kurz = h => h.replace(/\n\s+/g, "\n").trim();
  const aussen = sel => { const el = document.querySelector(sel); return el ? kurz(leeren(el).outerHTML) : null; };
  const innen = sel => { const el = document.querySelector(sel); return el ? kurz(leeren(el).innerHTML) : null; };
  const typ = document.body.dataset.seite;
  const teile = { kopf: aussen("body > header.top"), fuss: aussen("body > footer") };
  if (typ === "produkt") teile.produktseite = innen("main#produktseite");
  if (typ === "geschenke") teile.geschenkseite = innen("main#geschenkseite");
  if (typ === "ratgeber" || typ === "ratgeber-liste") teile.ratgeberseite = innen("main#ratgeberseite");
  if (typ === "start") { teile.uebersicht = innen("#uebersicht"); teile["ueber-mich"] = innen("#ueber-mich"); }

  const lang = document.documentElement.lang;
  const url = document.querySelector('link[rel="canonical"]').getAttribute("href");
  const start = `${SITE}/${lang === "de" ? "" : lang + "/"}`;
  const meta = n => (document.querySelector(`meta[name="${n}"], meta[property="${n}"]`) || {}).content || "";
  const text = el => el ? el.textContent.replace(/\s+/g, " ").trim() : "";
  const S = typeof SEITE !== "undefined" ? SEITE : { name: "MYLE" };
  const UM = typeof UEBER_MICH !== "undefined" ? UEBER_MICH : { name: "Lukas" };
  const person = { "@type": "Person", "@id": `${SITE}/#lukas`, name: UM.name, url: `${start}#ueber-mich` };
  const website = { "@type": "WebSite", "@id": `${start}#website`, url: start, name: S.name };
  let graph;
  if (typ === "start") {
    const foto = document.querySelector("#ueber-mich img");
    graph = [
      { ...website, alternateName: S.slogan ? `${S.name} – ${S.slogan}` : undefined, description: meta("description"),
        inLanguage: lang, publisher: { "@id": person["@id"] } },
      { ...person, image: foto ? new URL(foto.getAttribute("src"), url).href : undefined }
    ];
  } else {
    const h1 = text(document.querySelector("main h1"));
    const fragen = [...document.querySelectorAll("#fragen details.frage")].map(d => ({
      "@type": "Question", name: text(d.querySelector("summary")),
      acceptedAnswer: { "@type": "Answer", text: text(d.querySelector("p")) }
    }));
    graph = [
      { "@type": "WebPage", "@id": `${url}#seite`, url, name: meta("og:title") || h1, description: meta("description"),
        inLanguage: lang, isPartOf: website, breadcrumb: { "@id": `${url}#brotkrumen` }, author: person,
        dateModified: (document.querySelector(".geprueft time, .geprueft-datum") || { getAttribute: () => undefined }).getAttribute("datetime") },
      { "@type": "BreadcrumbList", "@id": `${url}#brotkrumen`, itemListElement: [
        { "@type": "ListItem", position: 1, name: text(document.querySelector(".brotkrumen a")), item: start },
        { "@type": "ListItem", position: 2, name: h1, item: url }] },
      fragen.length ? { "@type": "FAQPage", "@id": `${url}#fragen`, url, inLanguage: lang, mainEntity: fragen } : null
    ].filter(Boolean);
  }
  return { teile, ld: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) };
}

// ---------- In die Datei schreiben ----------
function einsetzen(quelle, { teile, ld }, summe, datei) {
  let t = ohneVr(quelle);
  const rein = (muster, mache) => {
    if (!muster.test(t)) throw new Error(`${datei}: Stelle ${muster} nicht gefunden`);
    t = t.replace(muster, mache);
  };
  const block = h => `<!--vr-->${h}<!--/vr-->`;
  const json = ld.replace(/</g, "\\u003c");
  rein(/<\/head>/, () => `<!--vr:${summe}--><script type="application/ld+json">${json}</script><!--/vr-->\n</head>`);
  for (const [id, html] of Object.entries(teile)) {
    if (html == null) throw new Error(`${datei}: Teil ${id} fehlt nach dem Rendern`);
    if (["produktseite", "geschenkseite", "ratgeberseite"].includes(id)) rein(new RegExp(`(<main id="${id}">[\\s\\S]*?)(<\\/main>)`), (m, a, b) => `${a}${block(html)}\n${b}`);
    else if (id === "kopf" || id === "fuss") rein(new RegExp(`<div id="${id}"></div>`), () => `<div id="${id}">${block(html)}</div>`);
    else rein(new RegExp(`(<div[^>]*\\bid="${id}"[^>]*>)(</div>)`), (m, a, b) => `${a}${block(html)}${b}`);
  }
  if (ohneVr(t) !== ohneVr(quelle)) throw new Error(`${datei}: Vorrendern hätte die Seite selbst verändert`);
  return t;
}

// ---------- Ablauf ----------
async function ueberAlle(liste, f) {
  const aus = new Array(liste.length);
  let i = 0;
  await Promise.all(Array.from({ length: PARALLEL }, async () => { while (i < liste.length) { const k = i++; aus[k] = await f(liste[k], k); } }));
  return aus;
}

async function laden(kontext, url, nurLaden) {
  const page = await kontext.newPage();
  const fehler = [];
  page.on("pageerror", e => fehler.push(e.message));
  page.on("console", m => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) fehler.push(m.text()); });
  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(150);
  return { page, fehler };
}

async function main() {
  const seiten = Object.entries(JSON.parse(execFileSync("python3", [path.join(__dirname, "vorgerendert.py")], { encoding: "utf8" })));
  const leer = await starteServer(false), voll = await starteServer(true);
  const browser = await chromium.launch();
  const opt = { viewport: { width: 1280, height: 900 }, reducedMotion: "reduce", locale: "de-DE", timezoneId: "Europe/Zurich" };
  const kontext = await browser.newContext(opt);
  // Bilder, Schriften und Videos braucht das Vorrendern nicht; nach draußen geht nichts
  const sperren = async k => k.route("**/*", r => {
    const u = r.request().url();
    if (!u.startsWith("http://127.0.0.1:") || ["image", "media", "font"].includes(r.request().resourceType())) return r.abort();
    return r.continue();
  });
  await sperren(kontext);
  const probleme = [];

  const rendere = async ([datei, { adresse }]) => {
    const { page, fehler } = await laden(kontext, leer.basis + new URL(adresse).pathname);
    const teile = await page.evaluate(holeTeile, SITE);
    await page.close();
    fehler.forEach(f => probleme.push(`${datei}: Fehler im Browser: ${f}`));
    return teile;
  };
  const ergebnisse = await ueberAlle(seiten, rendere);
  const neu = seiten.map(([datei, { pruefsumme }], k) => einsetzen(fs.readFileSync(path.join(WURZEL, datei), "utf8"), ergebnisse[k], pruefsumme, datei));

  if (!TEST) {
    if (probleme.length) throw new Error(probleme.join("\n"));
    let geaendert = 0;
    seiten.forEach(([datei], k) => {
      const p = path.join(WURZEL, datei);
      if (fs.readFileSync(p, "utf8") !== neu[k]) { fs.writeFileSync(p, neu[k]); geaendert++; }
    });
    console.log(`${seiten.length} Seiten vorgerendert, ${geaendert} davon geändert.`);
  } else {
    // 1. Vorrendern ist auf dem Stand und ein zweiter Durchlauf ergibt genau dasselbe
    const zweit = await ueberAlle(seiten, rendere);
    seiten.forEach(([datei], k) => {
      if (fs.readFileSync(path.join(WURZEL, datei), "utf8") !== neu[k]) probleme.push(`${datei}: Datei ist nicht auf dem Stand des Vorrenderns`);
      if (JSON.stringify(zweit[k]) !== JSON.stringify(ergebnisse[k])) probleme.push(`${datei}: zweiter Durchlauf ergibt etwas anderes`);
    });
    // 2. Mit JavaScript sieht jede Seite mit Vorrendern genau so aus wie ohne
    const zustand = async (basis, adresse) => {
      const { page, fehler } = await laden(kontext, basis + new URL(adresse).pathname);
      const z = await page.evaluate(() => ({
        text: document.body.innerText,
        html: document.body.innerHTML.replace(/\s+/g, " "),
        anzahl: document.querySelectorAll("*").length,
        ids: [...document.querySelectorAll("[id]")].map(e => e.id).filter((id, i, a) => a.indexOf(id) !== i)
      }));
      await page.close();
      return { ...z, fehler };
    };
    await ueberAlle(seiten, async ([datei, { adresse }]) => {
      const a = await zustand(leer.basis, adresse), b = await zustand(voll.basis, adresse);
      if (a.text !== b.text) probleme.push(`${datei}: sichtbarer Text mit JavaScript unterschiedlich`);
      if (a.html !== b.html) probleme.push(`${datei}: Seite mit JavaScript unterschiedlich aufgebaut (${a.anzahl} gegen ${b.anzahl} Elemente)`);
      // Doppelte ids, die es ohne Vorrendern nicht gibt (die Videos bringen ihre eigenen schon mit)
      const neuDoppelt = b.ids.filter(id => !a.ids.includes(id));
      if (neuDoppelt.length) probleme.push(`${datei}: doppelte ids durch das Vorrendern: ${neuDoppelt.join(", ")}`);
      if (/\bNaN\b|\bundefined\b/.test(b.text)) probleme.push(`${datei}: NaN oder undefined im Text`);
      b.fehler.forEach(f => probleme.push(`${datei}: Fehler im Browser: ${f}`));
    });
    // 3. Ohne JavaScript steht der Text da (das sehen Suchmaschinen ohne JavaScript)
    const ohneJs = await browser.newContext({ ...opt, javaScriptEnabled: false });
    await sperren(ohneJs);
    const laengen = [];
    await ueberAlle(seiten, async ([datei, { adresse }]) => {
      const page = await ohneJs.newPage();
      await page.goto(voll.basis + new URL(adresse).pathname, { waitUntil: "load" });
      const z = await page.evaluate(() => ({
        text: document.body.innerText.length,
        h1: [...document.querySelectorAll("main h1")].map(h => h.textContent.trim()),
        links: document.querySelectorAll("header.top nav a, footer a").length,
        fragen: document.querySelectorAll("#fragen details").length,
        ld: JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)
      }));
      await page.close();
      laengen.push([datei, z.text, z.fragen]);
      if (!z.h1.length) probleme.push(`${datei}: ohne JavaScript keine Überschrift`);
      if (z.h1.length > 1) probleme.push(`${datei}: ohne JavaScript ${z.h1.length} Hauptüberschriften (H1), nur eine erlaubt`);
      if (z.links < 5) probleme.push(`${datei}: ohne JavaScript fehlen Menü oder Fuß`);
      const typen = JSON.stringify(z.ld).match(/"@type":"[A-Za-z]+"/g).join(" ");
      if (/"(Product|Review|AggregateRating|Rating|Offer|AggregateOffer)"/.test(typen)) probleme.push(`${datei}: verbotener Typ im JSON-LD`);
    });
    laengen.sort((x, y) => x[1] - y[1]);
    console.log("Kürzester Text ohne JavaScript:", laengen.slice(0, 3).map(([d, n, f]) => `${d} ${n} Zeichen, ${f} Fragen`).join("; "));
    console.log(probleme.length ? `${probleme.length} Problem(e):\n- ${probleme.join("\n- ")}` : `Test bestanden: ${seiten.length} Seiten.`);
    process.exitCode = probleme.length ? 1 : 0;
  }
  await browser.close();
  leer.s.close(); voll.s.close();
}
main().catch(e => { console.error(e.message || e); process.exit(1); });
