#!/usr/bin/env python3
# Baut sitemap.xml aus den Seiten: jede Seite mit hreflang-Zeilen kommt hinein, mit ihren Sprachversionen.
# Seiten ohne hreflang (Impressum, Datenschutz, 404) sind nicht für Suchmaschinen gedacht und fehlen darum.
# Aufruf nach neuen oder gelöschten Seiten: python3 .github/pruefung/sitemap.py  (pruefe.py meldet, wenn es nötig ist)
import os, re, sys

WURZEL = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SPRACHEN = ["", "en/", "fr/", "it/"]


def seiten():
    # Liefert je Seite: (Datei, eigene Adresse, {Sprache: Adresse})
    for s in SPRACHEN:
        ordner = os.path.join(WURZEL, s)
        for p in sorted(os.listdir(ordner)):
            if not p.endswith(".html"):
                continue
            with open(os.path.join(ordner, p), encoding="utf-8") as f:
                t = f.read()
            alle = dict(re.findall(r'<link rel="alternate" hreflang="([a-z-]+)" href="([^"]+)">', t))
            sprache = re.search(r'<html lang="([a-z]+)"', t).group(1)
            if sprache in alle:
                yield s + p, alle[sprache], alle


def sitemap():
    zeilen = ['<?xml version="1.0" encoding="UTF-8"?>',
              '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for datei, adresse, alle in seiten():
        zeilen.append(f"  <url>\n    <loc>{adresse}</loc>")
        for code, ziel in alle.items():
            zeilen.append(f'    <xhtml:link rel="alternate" hreflang="{code}" href="{ziel}"/>')
        zeilen.append("  </url>")
    zeilen.append("</urlset>")
    return "\n".join(zeilen) + "\n"


if __name__ == "__main__":
    with open(os.path.join(WURZEL, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(sitemap())
    print("sitemap.xml gebaut:", sum(1 for _ in seiten()), "Seiten")
