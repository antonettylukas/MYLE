#!/usr/bin/env python3
"""Meldet geänderte Seiten per IndexNow (Bing, Yandex, Seznam) nach dem Online-Stellen.
Aufruf: python3 .github/indexnow.py <alter Stand> <neuer Stand> [--trocken]
Nimmt nur HTML-Seiten, deren Inhalt sich wirklich geändert hat (die Versionsnummer ?v=... in den Verweisen zählt nicht)."""
import re, subprocess, sys, json, urllib.request, glob, os

HOST = "myle.life"
alt, neu = sys.argv[1], sys.argv[2]
trocken = "--trocken" in sys.argv
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
keys = glob.glob("[0-9a-f]" * 32 + ".txt")
if len(keys) != 1:
    sys.exit("Schlüsseldatei nicht eindeutig: %s" % keys)
key = keys[0][:-4]

def git(*a):
    return subprocess.run(["git", *a], capture_output=True, text=True, check=True).stdout

def norm(s):
    s = re.sub(r"\?v=[0-9a-z]+", "", s)
    return re.sub(r"<!--vr:[0-9a-f]+-->", "", s)  # Prüfsumme des Vorrenderns ändert sich mit der Versionsnummer

urls = []
for zeile in git("diff", "--name-status", alt, neu, "--", "*.html").splitlines():
    status, _, datei = zeile.partition("\t")
    if status.startswith("D") or datei.endswith("404.html") or "\t" in datei:
        continue
    try:
        vorher = git("show", "%s:%s" % (alt, datei)) if not status.startswith("A") else ""
    except subprocess.CalledProcessError:
        vorher = ""
    nachher = git("show", "%s:%s" % (neu, datei))
    if norm(vorher) == norm(nachher):
        continue
    pfad = re.sub(r"\.html$", "", datei)
    pfad = re.sub(r"(^|/)index$", r"\1", pfad)
    urls.append("https://%s/%s" % (HOST, pfad))

urls = sorted(set(urls))[:10000]
print("IndexNow: %d geänderte Seiten" % len(urls))
for u in urls:
    print(" ", u)
if not urls or trocken:
    sys.exit(0)
daten = json.dumps({"host": HOST, "key": key, "keyLocation": "https://%s/%s.txt" % (HOST, key), "urlList": urls}).encode()
req = urllib.request.Request("https://api.indexnow.org/indexnow", daten, {"Content-Type": "application/json; charset=utf-8"})
try:
    with urllib.request.urlopen(req, timeout=30) as r:
        print("IndexNow Antwort:", r.status)
except urllib.error.HTTPError as e:
    print("IndexNow Fehler:", e.code, e.read()[:200])
    sys.exit(0)
