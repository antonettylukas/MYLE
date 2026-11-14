// Eigener Klickzähler ohne Cookies (Datenschutz Abschnitt 3, #zaehler). app.js schickt pro Seitenaufruf eine kurze
// Meldung mit navigator.sendBeacon: {s: Seite, l: Sprache, e: [[Ereignis, Detail], …]}.
// Gespeichert wird nur ein Zähler pro Tag und Kombination (Tag, Seite, Sprache, Ereignis, Detail) in der D1-Datenbank
// „myle-ereignisse“ (Bindung DB im Pages-Projekt myle-life). Keine IP, keine Uhrzeit, keine Kennung.
// Auswertung: Abfragen in .github/pruefung/zaehler-abfragen.sql (Cloudflare-Dashboard → D1 → myle-ereignisse → Console).

const EREIGNISSE = new Set(["aufruf", "box-gesehen", "box-klick", "rechner", "scroll"]);
const SPRACHEN = new Set(["de", "en", "fr", "it"]);
const TEXT = /^[a-z0-9-]{1,80}$/;
const DETAIL = /^[a-z0-9-]{0,80}$/;
const TABELLE = `CREATE TABLE IF NOT EXISTS zaehler (
  tag TEXT NOT NULL, seite TEXT NOT NULL, sprache TEXT NOT NULL, ereignis TEXT NOT NULL, detail TEXT NOT NULL DEFAULT '',
  anzahl INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (tag, seite, sprache, ereignis, detail)) WITHOUT ROWID`;
const ERHOEHEN = `INSERT INTO zaehler (tag, seite, sprache, ereignis, detail, anzahl) VALUES (?1, ?2, ?3, ?4, ?5, ?6)
  ON CONFLICT (tag, seite, sprache, ereignis, detail) DO UPDATE SET anzahl = anzahl + excluded.anzahl`;

const antwort = zustand => new Response(null, { status: 204, headers: { "x-myle-zaehler": zustand, "cache-control": "no-store" } });

export async function onRequestPost({ request, env }) {
  // Nur Meldungen von myle.life selbst (Vorschau-Adressen und andere Seiten zählen nicht)
  if (request.headers.get("Origin") !== "https://myle.life") return antwort("fremd");
  let d;
  try {
    const text = await request.text();
    if (text.length > 4000) return antwort("zu-gross");
    d = JSON.parse(text);
  } catch (e) {
    return antwort("kaputt");
  }
  if (!d || !TEXT.test(d.s) || !SPRACHEN.has(d.l) || !Array.isArray(d.e)) return antwort("kaputt");
  const summen = new Map();
  for (const x of d.e.slice(0, 40)) {
    if (!Array.isArray(x) || !EREIGNISSE.has(x[0])) continue;
    const detail = String(x[1] || "");
    if (!DETAIL.test(detail)) continue;
    const k = x[0] + "\u0000" + detail;
    summen.set(k, (summen.get(k) || 0) + 1);
  }
  if (!summen.size) return antwort("leer");
  if (!env.DB) return antwort("ohne-db");
  const tag = new Date().toISOString().slice(0, 10);
  const befehle = () => [...summen].map(([k, n]) => {
    const [e, detail] = k.split("\u0000");
    return env.DB.prepare(ERHOEHEN).bind(tag, d.s, d.l, e, detail, n);
  });
  try {
    await env.DB.batch(befehle());
  } catch (e) {
    // Beim allerersten Aufruf gibt es die Tabelle noch nicht
    if (!/no such table/i.test(String(e && e.message))) return antwort("fehler");
    await env.DB.exec(TABELLE.replace(/\n\s*/g, " "));
    await env.DB.batch(befehle());
  }
  return antwort("ok");
}

export function onRequest() {
  return new Response("Nur POST", { status: 405, headers: { allow: "POST" } });
}
