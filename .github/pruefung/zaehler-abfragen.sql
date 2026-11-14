-- Auswertung des eigenen Klickzählers (functions/api/ereignis.js, Datenschutz Abschnitt 3 #zaehler).
-- Ausführen im Cloudflare-Dashboard: Storage & Databases → D1 → myle-ereignisse → Console (eine Abfrage pro Lauf).
-- Tabelle zaehler: tag (JJJJ-MM-TT, UTC), seite (z. B. saugroboter, start, ratgeber-…), sprache (de/en/fr/it),
-- ereignis (aufruf, box-gesehen, box-klick, rechner, scroll), detail (Box bzw. Scrolltiefe), anzahl.

-- 1) Übersicht der letzten 7 Tage: Aufrufe, Box-Klicks, Klickrate, Rechner-Nutzung pro Seite
SELECT seite,
  SUM(CASE WHEN ereignis = 'aufruf' THEN anzahl END) AS aufrufe,
  SUM(CASE WHEN ereignis = 'box-gesehen' THEN anzahl END) AS boxen_gesehen,
  SUM(CASE WHEN ereignis = 'box-klick' THEN anzahl END) AS klicks,
  ROUND(100.0 * SUM(CASE WHEN ereignis = 'box-klick' THEN anzahl END) / SUM(CASE WHEN ereignis = 'aufruf' THEN anzahl END), 1) AS klickrate_prozent,
  SUM(CASE WHEN ereignis = 'rechner' THEN anzahl END) AS rechner
FROM zaehler WHERE tag >= date('now', '-7 days')
GROUP BY seite ORDER BY aufrufe DESC;

-- 2) Welche Box wird gesehen und geklickt (letzte 7 Tage)
SELECT seite, detail AS box,
  SUM(CASE WHEN ereignis = 'box-gesehen' THEN anzahl ELSE 0 END) AS gesehen,
  SUM(CASE WHEN ereignis = 'box-klick' THEN anzahl ELSE 0 END) AS klicks
FROM zaehler WHERE tag >= date('now', '-7 days') AND ereignis IN ('box-gesehen', 'box-klick')
GROUP BY seite, detail ORDER BY seite, klicks DESC;

-- 3) Scrolltiefe pro Seite (Anteil der Aufrufe, die 25/50/75/100 % erreichen), letzte 7 Tage
SELECT z.seite, z.detail AS prozent, SUM(z.anzahl) AS erreicht,
  ROUND(100.0 * SUM(z.anzahl) / (SELECT SUM(a.anzahl) FROM zaehler a WHERE a.seite = z.seite AND a.ereignis = 'aufruf' AND a.tag >= date('now', '-7 days')), 1) AS anteil_prozent
FROM zaehler z WHERE z.ereignis = 'scroll' AND z.tag >= date('now', '-7 days')
GROUP BY z.seite, z.detail ORDER BY z.seite, CAST(z.detail AS INTEGER);

-- 4) Alles pro Tag, Seite und Ereignis (Rohzahlen, z. B. für eine Tabelle)
SELECT tag, seite, sprache, ereignis, detail, anzahl FROM zaehler ORDER BY tag DESC, seite, ereignis, detail;
