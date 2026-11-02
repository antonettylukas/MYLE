#!/usr/bin/env python3
# Vorgerenderte Inhalte für Suchmaschinen und KI-Suchen, die kein JavaScript ausführen.
# vorrendern.js schreibt Kopf, Fuß, Seiteninhalt und JSON-LD fertig in die 80 Seiten mit hreflang,
# jeweils eingerahmt von <!--vr--> (im <head>: <!--vr:Prüfsumme-->) und <!--/vr-->. app.js ersetzt das beim Laden.
# Hier steht der Teil ohne Browser: Blöcke entfernen, Prüfsumme der Eingaben und die Prüfung für pruefe.py.
# Ohne Argument: gibt die Seiten mit Adresse und Prüfsumme als JSON aus (für vorrendern.js).
import hashlib, json, os, re, sys

HIER = os.path.dirname(os.path.abspath(__file__))
WURZEL = os.path.dirname(os.path.dirname(HIER))
sys.path.insert(0, HIER)
import sitemap

BLOCK = re.compile(r"<!--vr(?::[0-9a-f]+)?-->[\s\S]*?<!--/vr-->\n?")
# Amazon-Partnerprogramm 6(t): keine eigenen Produkt-, Bewertungs- oder Preisangaben für Suchmaschinen
VERBOTEN = {"Product", "Review", "AggregateRating", "Rating", "Offer", "AggregateOffer"}


def lies(p):
    with open(os.path.join(WURZEL, p), encoding="utf-8") as f:
        return f.read()


def ohne_vr(t):
    return BLOCK.sub("", t)


def pruefsumme(datei):
    # Alles, wovon der vorgerenderte Inhalt abhängt: die Seite selbst (ohne Blöcke und ?v=),
    # die Skripte, die sie lädt, und vorrendern.js. Ändert sich etwas davon, ist das Vorrendern veraltet.
    seite = re.sub(r"\?v=\w+", "", ohne_vr(lies(datei)))
    teile = [seite]
    for src in re.findall(r'<script src="([^"?]+)', seite):
        p = os.path.normpath(os.path.join(os.path.dirname(datei), src))
        teile.append(p + "\n" + lies(p))
    teile.append(lies(".github/pruefung/vorrendern.js"))
    return hashlib.sha256("\n".join(teile).encode("utf-8")).hexdigest()[:16]


def typen(x):
    if isinstance(x, dict):
        t = x.get("@type")
        yield from ([t] if isinstance(t, str) else t or [])
        for v in x.values():
            yield from typen(v)
    elif isinstance(x, list):
        for v in x:
            yield from typen(v)


def fehler():
    f = []
    neu = "node .github/pruefung/vorrendern.js ausführen"
    for datei, adresse, alle in sitemap.seiten():
        t = lies(datei)
        m = re.search(r"<!--vr:([0-9a-f]+)-->", t)
        if not m:
            f.append(f"{datei}: nicht vorgerendert ({neu})")
            continue
        if m.group(1) != pruefsumme(datei):
            f.append(f"{datei}: vorgerenderter Inhalt ist veraltet ({neu})")
        lds = re.findall(r'<script type="application/ld\+json">([\s\S]*?)</script>', t)
        if len(lds) != 1:
            f.append(f"{datei}: {len(lds)} JSON-LD-Blöcke statt einem")
        for ld in lds:
            try:
                daten = json.loads(ld)
            except ValueError as e:
                f.append(f"{datei}: JSON-LD ist kein gültiges JSON ({e})")
                continue
            for x in sorted(set(typen(daten)) & VERBOTEN):
                f.append(f"{datei}: JSON-LD enthält {x}, das verbietet das Amazon-Partnerprogramm")
    return f


if __name__ == "__main__":
    print(json.dumps({d: {"adresse": a, "pruefsumme": pruefsumme(d)} for d, a, _ in sitemap.seiten()}, ensure_ascii=False))
