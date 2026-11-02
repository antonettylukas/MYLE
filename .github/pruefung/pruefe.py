#!/usr/bin/env python3
# Prüft die Website vor dem Online-Stellen, ganz ohne Internet:
# fehlende Dateien, alle 4 Sprachen vollständig, Produktseiten passend zu produkte.js,
# Amazon-Produktnummern im richtigen Format, gleiche ?v= überall, Angaben für Suchmaschinen, JavaScript ohne Syntaxfehler.
import os, re, subprocess, sys

WURZEL = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(WURZEL)
SPRACHEN = ["", "en/", "fr/", "it/"]
fehler = []

def lies(p):
    with open(p, encoding="utf-8") as f:
        return f.read()

def dateien(endung):
    for r, d, f in os.walk("."):
        d[:] = [x for x in d if not x.startswith(".")]
        for x in f:
            if x.endswith(endung):
                yield os.path.relpath(os.path.join(r, x))

# 1. Jede Seite gibt es in allen 4 Sprachen
seiten = {p for p in os.listdir(".") if p.endswith(".html")}
for s in SPRACHEN[1:]:
    da = {p for p in os.listdir(s) if p.endswith(".html")}
    for p in sorted(seiten - da):
        fehler.append(f"{s}{p} fehlt (gibt es nur auf Deutsch)")
    for p in sorted(da - seiten):
        fehler.append(f"{s}{p} gibt es, aber nicht auf Deutsch")

# 2. Lokale Verweise in HTML und CSS zeigen auf vorhandene Dateien
for p in dateien(".html"):
    t = lies(p)
    for ziel in re.findall(r'(?:href|src)="([^"#?]+)', t):
        if re.match(r"(https?:|mailto:|tel:|data:|javascript:|/)", ziel):
            continue
        if not os.path.exists(os.path.normpath(os.path.join(os.path.dirname(p), ziel))):
            fehler.append(f"{p}: Verweis auf {ziel}, die Datei fehlt")
for p in dateien(".css"):
    for ziel in re.findall(r"url\(['\"]?([^'\")]+)", lies(p)):
        if ziel.startswith(("data:", "http", "#", "%23")):
            continue
        if not os.path.exists(os.path.normpath(os.path.join(os.path.dirname(p), ziel))):
            fehler.append(f"{p}: url({ziel}), die Datei fehlt")
# Bilder, Schriften und Videos, die im JavaScript stehen (Kommentare zählen nicht)
for p in dateien(".js"):
    ohne = re.sub(r"/\*[\s\S]*?\*/", "", lies(p))
    for zeile in ohne.splitlines():
        if re.match(r"\s*//", zeile):
            continue
        for ziel in re.findall(r"(?:bilder|schriften|videos)/[A-Za-z0-9._-]+\.[a-z0-9]{2,5}", zeile):
            if not os.path.exists(ziel):
                fehler.append(f"{p}: {ziel} fehlt")

# 3. Produkte: jedes Produkt hat seine Seite und jede Produktseite ihr Produkt, in jeder Sprache
for s in SPRACHEN:
    ids = re.findall(r'^ {4}id: "([a-z0-9-]+)"', lies(s + "produkte.js"), re.M)
    if not ids:
        fehler.append(f"{s}produkte.js: keine Produkte gefunden")
    for i in ids:
        if not os.path.exists(f"{s}{i}.html"):
            fehler.append(f"{s}produkte.js: Produkt {i} hat keine Seite {s}{i}.html")
    for p in sorted(os.listdir(s or ".")):
        if p.endswith(".html"):
            m = re.search(r'data-produkt="([^"]+)"', lies(s + p))
            if m and m.group(1) not in ids:
                fehler.append(f"{s}{p}: Produkt {m.group(1)} steht nicht in {s}produkte.js")

# 4. Amazon-Produktnummern: 10 Zeichen, nur Großbuchstaben und Ziffern
for s in SPRACHEN:
    m = re.search(r"const ASIN = \{([\s\S]*?)\n\};", lies(s + "produkte.js"))
    if not m:
        fehler.append(f"{s}produkte.js: ASIN-Liste nicht gefunden")
        continue
    for suche, asin in re.findall(r'"([^"]+)":\s*"([^"]*)"', m.group(1)):
        if not re.fullmatch(r"[A-Z0-9]{10}", asin):
            fehler.append(f'{s}produkte.js: "{suche}" hat keine gültige Amazon-Nummer ({asin})')
# Partner-IDs vorhanden
for s in SPRACHEN:
    t = lies(s + "einstellungen.js")
    if not re.search(r'partnerId:\s*"[a-z0-9-]+-2\d"', t):
        fehler.append(f"{s}einstellungen.js: Partner-ID fehlt oder hat ein falsches Format")

# 5. Überall dieselbe Version ?v= (sonst sehen Besucher alte CSS/JS aus dem Browser-Speicher)
versionen = {}
for p in dateien(".html"):
    for v in set(re.findall(r"\?v=(\w+)", lies(p))):
        versionen.setdefault(v, []).append(p)
if len(versionen) > 1:
    fehler.append("Unterschiedliche ?v= auf den Seiten: " + ", ".join(f"{v} ({len(ps)} Seiten)" for v, ps in versionen.items()))

# 6. Weiterleitungen zeigen auf vorhandene Seiten
for zeile in lies("_redirects").splitlines():
    teile = zeile.split()
    if len(teile) >= 2 and not zeile.startswith("#"):
        ziel = teile[1].lstrip("/")
        if not (ziel == "" or os.path.exists(ziel) or os.path.exists(ziel + "index.html")):
            fehler.append(f"_redirects: Ziel {teile[1]} gibt es nicht")

# 7. Für Suchmaschinen: jede Seite mit hreflang hat canonical und og:url auf ihre eigene Adresse,
#    und sitemap.xml ist auf dem Stand (sonst: python3 .github/pruefung/sitemap.py)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import sitemap
for datei, adresse, alle in sitemap.seiten():
    t = lies(datei)
    if f'<link rel="canonical" href="{adresse}">' not in t:
        fehler.append(f"{datei}: canonical fehlt oder zeigt nicht auf {adresse}")
    if f'<meta property="og:url" content="{adresse}">' not in t:
        fehler.append(f"{datei}: og:url fehlt oder zeigt nicht auf {adresse}")
if not os.path.exists("sitemap.xml") or lies("sitemap.xml") != sitemap.sitemap():
    fehler.append("sitemap.xml ist nicht auf dem Stand: python3 .github/pruefung/sitemap.py ausführen")
for p in SPRACHEN:
    if not os.path.exists(p + "404.html"):
        fehler.append(f"{p}404.html fehlt")
# Vorgerendert (für Suchmaschinen und KI-Suchen ohne JavaScript) und auf dem Stand, JSON-LD ohne Produkt- und
# Bewertungsangaben (sonst: node .github/pruefung/vorrendern.js, Einzelheiten in vorgerendert.py)
import vorgerendert
fehler += vorgerendert.fehler()

# 8. JavaScript ohne Syntaxfehler
for p in dateien(".js"):
    r = subprocess.run(["node", "--check", p], capture_output=True, text=True)
    if r.returncode:
        fehler.append(f"{p}: Syntaxfehler\n{r.stderr.strip()[:400]}")

if fehler:
    print(f"{len(fehler)} Problem(e) gefunden, die Seite wird NICHT online gestellt:\n")
    print("\n".join("- " + f for f in fehler))
    sys.exit(1)
print("Alles in Ordnung.")
