#!/usr/bin/env python3
# Baut die HTML-Seiten der Ratgeber aus ratgeber.js (je Sprache): ratgeber.html (Übersicht) und
# ratgeber-<id>.html für jeden Eintrag. Titel und Beschreibung für Suchmaschinen kommen aus den Feldern
# seitenTitel und beschreibung. Der Kopf (Statistik-Schalter, Farben, Symbole) kommt von saugroboter.html.
# Ausserdem ratgeber-kurz.js (je Sprache): nur id, produkt, frage und erster Satz der Kurzantwort, damit die
# Produktseiten ihre passenden Ratgeber verlinken können, ohne die ganze ratgeber.js zu laden.
# Aufruf nach jedem neuen Ratgeber:  python3 .github/pruefung/ratgeber_seiten.py
# danach wie immer: sitemap.py, vorrendern.js, pruefe.py.
import html, json, os, re, subprocess

WURZEL = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SPRACHEN = {"": "de", "en/": "en", "fr/": "fr", "it/": "it"}
BLOCK = re.compile(r"<!--vr(?::[0-9a-f]+)?-->[\s\S]*?<!--/vr-->\n?")
LISTE = {
    "de": ("Ratgeber: Lohnt sich das? Ehrliche Antworten · MYLE", "Ratgeber: Lohnt sich das?",
           "Ehrliche Antworten auf Fragen wie „Lohnt sich ein Saugroboter für eine kleine Wohnung?“: kurz beantwortet, mit Zahlen, Quellen und einem Rechner für deinen Haushalt.",
           "Diese Seite braucht JavaScript. Bitte schalte es in deinem Browser ein."),
    "en": ("Guides: is it worth it? Honest answers · MYLE", "Guides: is it worth it?",
           "Honest answers to questions like “Is a robot vacuum worth it for a small flat?”: answered briefly, with figures, sources and a calculator for your household.",
           "This page needs JavaScript. Please turn it on in your browser."),
    "fr": ("Conseils : est-ce que ça vaut le coup ? · MYLE", "Conseils : est-ce que ça vaut le coup ?",
           "Des réponses honnêtes à des questions comme « Un robot aspirateur vaut-il le coup dans un petit logement ? » : réponse courte, chiffres, sources et un calculateur pour votre foyer.",
           "Cette page a besoin de JavaScript. Veuillez l’activer dans votre navigateur."),
    "it": ("Guide: ne vale la pena? Risposte oneste · MYLE", "Guide: ne vale la pena?",
           "Risposte oneste a domande come „Un robot aspirapolvere conviene in una casa piccola?“: risposta breve, numeri, fonti e un calcolatore per la tua casa.",
           "Questa pagina ha bisogno di JavaScript. Attivalo nel tuo browser."),
}


def lies(p):
    with open(os.path.join(WURZEL, p), encoding="utf-8") as f:
        return f.read()


def eintraege(pre):
    js = os.path.join(WURZEL, pre, "ratgeber.js")
    if not os.path.exists(js):
        return []
    out = subprocess.run(["node", "-e", "const fs=require('fs');eval(fs.readFileSync(process.argv[1],'utf8')+';globalThis.R=RATGEBER');"
                          "console.log(JSON.stringify(R.map(r=>({id:r.id,produkt:r.produkt||'',weitereProdukte:r.weitereProdukte||[],seitenTitel:r.seitenTitel||r.frage,beschreibung:r.beschreibung||'',frage:r.frage,kurz:[].concat(r.kurzantwort||'')[0]}))))", js],
                         capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def seite(pre, slug, titel, og, beschreibung, h1, nojs, body_attr):
    e = lambda s: html.escape(s, quote=True)
    t = BLOCK.sub("", lies(pre + "saugroboter.html"))
    kopf, rumpf = t.split("</head>", 1)
    kopf = re.sub(r"<title>.*?</title>", f"<title>{e(titel)}</title>", kopf)
    kopf = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{e(beschreibung)}">', kopf)
    kopf = re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{e(og)}">', kopf)
    kopf = re.sub(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{e(beschreibung)}">', kopf)
    # Vorschaubild: eigenes in der Sprache (ratgeber-<id>-en.jpg usw.), sonst das deutsche, sonst das der Startseite
    sprache = pre.strip("/")
    kandidaten = ([f"bilder/vorschau/{slug}-{sprache}.jpg"] if sprache else []) + [f"bilder/vorschau/{slug}.jpg", "bilder/vorschau/index.jpg"]
    bild = next(b for b in kandidaten if os.path.exists(os.path.join(WURZEL, b)))
    kopf = kopf.replace("bilder/vorschau/saugroboter.jpg", bild)
    kopf = kopf.replace("/saugroboter\"", f"/{slug}\"")
    assert "saugroboter" not in kopf.replace(slug, ""), f"{pre}{slug}: saugroboter steht noch im Kopf"
    skripte = re.findall(r'<script src="[^"]+"></script>', rumpf)
    v = re.search(r"\?v=(\w+)", skripte[0]).group(1)
    i = next(k for k, s in enumerate(skripte) if "app.js" in s)
    skripte.insert(i, f'<script src="ratgeber.js?v={v}"></script>')
    return (kopf + "</head>\n<!-- Diese Seite füllt sich aus ratgeber.js. -->\n" + f"<body {body_attr}>\n" + '<div id="kopf"></div>\n\n<main id="ratgeberseite">\n'
            f'  <noscript><section class="wrap leer"><h1>{e(h1)}</h1><p>{e(nojs)}</p></section></noscript>\n</main>\n\n<div id="fuss"></div>\n\n'
            + "\n".join(skripte) + "\n</body>\n</html>\n")


def kurz_text(rs):
    kurz = [dict({"id": r["id"], "produkt": r["produkt"]}, **({"weitereProdukte": r["weitereProdukte"]} if r.get("weitereProdukte") else {}), frage=r["frage"], kurzantwort=r["kurz"]) for r in rs]
    return ("// Automatisch gebaut von .github/pruefung/ratgeber_seiten.py aus ratgeber.js. Nicht von Hand ändern.\n"
            "// Die Produktseiten zeigen damit „Passende Ratgeber“ (Felder produkt und weitereProdukte).\n"
            "const RATGEBER_KURZ = [\n" + ",\n".join("  " + json.dumps(k, ensure_ascii=False) for k in kurz) + "\n];\n")


def main():
    for pre, lang in SPRACHEN.items():
        rs = eintraege(pre)
        if not rs:
            continue
        titel, og, beschr, nojs = LISTE[lang]
        neu = {"ratgeber.html": seite(pre, "ratgeber", titel, og, beschr, og, nojs, 'data-seite="ratgeber-liste"')}
        for r in rs:
            st = r["seitenTitel"]
            neu[f"ratgeber-{r['id']}.html"] = seite(pre, f"ratgeber-{r['id']}", f"{st} · MYLE", st, r["beschreibung"], r["frage"], nojs,
                                                    f'data-seite="ratgeber" data-ratgeber="{r["id"]}"')
        neu["ratgeber-kurz.js"] = kurz_text(rs)
        for datei, text in neu.items():
            p = os.path.join(WURZEL, pre, datei)
            alt = BLOCK.sub("", open(p, encoding="utf-8").read()) if os.path.exists(p) else None
            if alt != text:
                with open(p, "w", encoding="utf-8") as f:
                    f.write(text)
                print("geschrieben:", pre + datei)


if __name__ == "__main__":
    main()
