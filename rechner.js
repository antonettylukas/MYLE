/*
  Die Ersparnis-Rechner. Jedes Produkt in produkte.js verweist mit
  "rechner" auf einen Eintrag hier.

  felder      Die Regler und Auswahlknöpfe, die Besucher einstellen können.
              Kaufpreis und "Was ist dir eine Stunde wert?" kommen automatisch dazu.
  preisLabel, preisHinweis   Optional: eigener Text für den Kaufpreis-Regler
  kaufpreis   Optional: rechnet den ganzen Kaufpreis aus den Einstellungen aus,
              z. B. Preis pro Thermostat mal Anzahl der Heizkörper
  schnitt     Optional bei einem Regler: Durchschnittswerte für Haushalte mit 1, 2, 3 und 4 oder mehr
              Personen. Sie stehen als kleine Zahlen unter dem Regler, ein Tipp darauf übernimmt den Wert.
  berechne    Rechnet aus den Einstellungen:
                minutenProWoche  gesparte Zeit pro Woche
                euroProMonat     gespartes Geld pro Monat (ohne Kaufpreis)
                vorherTitel, vorher, nachher   Aufwand im Vergleich
                extra            ein zusätzlicher Satz (optional)
  annahmen    Erklärung, womit gerechnet wird. Wird unter dem Rechner gezeigt.
  mit         Für den Knopf "Ergebnis teilen": "Mit ... spare ich ..."
*/

// Durchschnittlicher Strompreis pro Land, als Marken am Strompreis-Regler (Quellen in STROM_QUELLEN)
const STROM_LAENDER = [
  { wert: 0.37, kurz: "DE", name: "Deutschland" },
  { wert: 0.30, kurz: "AT", name: "Österreich" },
  { wert: 0.30, kurz: "CH", name: "Schweiz", zusatz: "27,7 Rappen" }
];
const STROM_QUELLEN = " Die Kürzel am Strompreis-Regler: Deutschland 37 Cent pro kWh (BDEW, August 2026), Österreich etwa 30 Cent beim Landesversorger (E-Control, Anfang 2026), Schweiz 27,7 Rappen, also etwa 30 Cent (ElCom, typischer Haushalt 2026).";

const RECHNER = {
  saugroboter: {
    mit: "einem Saug- und Wischroboter",
    felder: [
      { id: "m2", label: "Wie groß ist deine Wohnung?", min: 20, max: 200, step: 5, wert: 70, einheit: "m²", schnitt: [73, 103, 114, 129] },
      { id: "saugen", label: "Wie oft saugst du pro Woche?", min: 0, max: 7, step: 1, wert: 2, einheit: "×" },
      { id: "wischen", label: "Wie oft wischst du pro Woche?", min: 0, max: 7, step: 1, wert: 1, einheit: "×" }
    ],
    berechne(w) {
      const saugMin = 5 + 0.2 * w.m2;
      const wischMin = 8 + 0.25 * w.m2;
      const minuten = Math.max(0, w.saugen * saugMin + w.wischen * wischMin - 5);
      const arbeitstage = (minuten * 52) / 60 / 8;
      return {
        minutenProWoche: minuten,
        euroProMonat: -3.5,
        extra: `Das sind rund ${Math.round(arbeitstage)} volle Arbeitstage pro Jahr, die du für etwas anderes hast.`,
        vorherTitel: "Selbst putzen",
        // Ohne Wischen (Roboter, die nur saugen) fallen die Wisch-Punkte weg
        vorher: w.wischen > 0 ? [
          "Staubsauger rausholen, Kabel einstecken",
          "Stühle hochstellen, unters Bett kriechen",
          "Eimer füllen, wischen, Wasser wegkippen",
          "Warten, bis der Boden trocken ist"
        ] : [
          "Staubsauger rausholen, Kabel einstecken",
          "Stühle hochstellen, unters Bett kriechen",
          "Mit dem Kabel um jede Ecke kämpfen"
        ],
        nachher: w.wischen > 0 ? [
          "Einmal einen Zeitplan in der App einstellen",
          "Er putzt, während du arbeitest",
          "Wasser nachfüllen, Schmutzwasser leeren"
        ] : [
          "Einmal einen Zeitplan in der App einstellen",
          "Er saugt, während du arbeitest",
          "Alle paar Wochen den Beutel wechseln"
        ]
      };
    },
    annahmen: "Saugen dauert inklusive Vorbereitung etwa 5 Minuten plus 0,2 Minuten pro m² (bei 70 m² also rund 19 Minuten), Wischen etwa 8 Minuten plus 0,25 Minuten pro m² (rund 26 Minuten). Bei einem Roboter, der nur saugt, zählt das Wischen nicht mit. Für die Pflege des Roboters ziehe ich 5 Minuten pro Woche ab. Ersatzteile wie Bürsten, Filter, Beutel und Mopps kosten etwa 3,50 € im Monat mehr als beim normalen Staubsauger. Die Zahlen unter dem Regler für die Wohnung zeigen, wie groß eine Wohnung im Schnitt ist (Statistisches Bundesamt, Mikrozensus 2022): 73 m² bei 1 Person, 103 m² bei 2, 114 m² bei 3 und 129 m² bei 4 oder mehr Personen."
  },

  airfryer: {
    mit: "einem Airfryer",
    felder: [
      { id: "bisher", label: "Womit kochst du bisher?", typ: "auswahl", wert: "pfanne",
        optionen: [
          { wert: "pfanne", label: "Pfanne & Töpfe" },
          { wert: "backofen", label: "Backofen" },
          { wert: "fritteuse", label: "Fritteuse" }
        ] },
      { id: "anzahl", label: "Wie oft würdest du damit kochen?", min: 1, max: 14, step: 1, wert: 4, einheit: "× pro Woche" },
      { id: "strom", label: "Dein Strompreis", min: 0.2, max: 0.6, step: 0.01, wert: 0.35, einheit: "€ pro kWh", schnitt: STROM_LAENDER, schnittHinweis: "Die Kürzel am Regler zeigen den durchschnittlichen Strompreis in Deutschland (DE), Österreich (AT) und der Schweiz (CH)." }
    ],
    berechne(w) {
      const PROFILE = {
        backofen: { name: "Backofen", kwh: 1.0, oel: 0, minuten: 18, vorher: [
          "Ofen 10 Minuten vorheizen",
          "Blech mit Backpapier auslegen, mittendrin wenden",
          "Hinterher Blech und Ofen schrubben"
        ] },
        pfanne: { name: "Pfanne & Töpfe", kwh: 0.7, oel: 0.08, minuten: 15, vorher: [
          "Die ganze Zeit am Herd stehen und wenden",
          "Fettspritzer auf Herd und Fliesen",
          "Pfanne und Töpfe von Hand spülen"
        ] },
        fritteuse: { name: "Fritteuse", kwh: 1.0, oel: 0.4, minuten: 20, vorher: [
          "2 bis 3 Liter Öl aufheizen",
          "Altes Öl entsorgen, Fritteuse reinigen",
          "Frittiergeruch in der ganzen Wohnung"
        ] }
      };
      const p = PROFILE[w.bisher];
      const proMahlzeit = (p.kwh - 0.45) * w.strom + p.oel;
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: (proMahlzeit * w.anzahl * 52) / 12,
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Alles rein, Sync drücken, ab auf die Couch",
          "Es piept: Beide Körbe sind gleichzeitig fertig",
          "Kein Abwasch: Körbe in die Spülmaschine oder kurz feucht auswischen"
        ]
      };
    },
    annahmen: "Stromverbrauch pro Mahlzeit: Backofen etwa 1,0 kWh, Herd etwa 0,7 kWh, Fritteuse etwa 1,0 kWh, Airfryer etwa 0,45 kWh. Öl: Pfanne etwa 8 Cent, Fritteuse etwa 40 Cent pro Mahlzeit. Vorheizen, Danebenstehen und Abwasch kosten je nach Vergleich 15 bis 20 Minuten mehr pro Mahlzeit." + STROM_QUELLEN
  },

  buerste: {
    mit: "einer elektrischen Putzbürste",
    felder: [
      { id: "putzen", label: "Wie oft putzt du Bad, Dusche oder Fliesen?", min: 0, max: 7, step: 1, wert: 1, einheit: "× pro Woche" },
      { id: "dauer", label: "Wie lange dauert das bisher?", min: 10, max: 120, step: 5, wert: 40, einheit: "Min." }
    ],
    berechne(w) {
      return {
        minutenProWoche: w.putzen * w.dauer * 0.25,
        euroProMonat: 0,
        extra: "Und dein Rücken freut sich: Mit dem langen Stiel putzt du im Stehen.",
        vorherTitel: "Schwamm & Lappen",
        vorher: [
          "Auf Knien in der Dusche schrubben",
          "Fugen mit einer alten Zahnbürste bearbeiten",
          "Schwämme, die nach ein paar Wochen müffeln"
        ],
        nachher: [
          "Bürste ansetzen, sie dreht selbstständig",
          "Kein Bücken, kein Knien",
          "Bürstenkopf abspülen, fertig"
        ]
      };
    },
    annahmen: "Wie viel Zeit die Bürste spart, hat noch kein Test gemessen. Tester schreiben, dass das Putzen leichter und schneller geht. Ich rechne vorsichtig mit einem Viertel weniger Zeit, weil nur das Schrubben schneller geht, nicht das Einsprühen, Abspülen und Wischen. Geld sparst du kaum: Den Reiniger brauchst du weiter, und statt Schwämmen kaufst du ab und zu Ersatzbürsten."
  },

  deckel: {
    mit: "Stretchdeckeln",
    felder: [
      { id: "bisher", label: "Womit deckst du bisher ab?", typ: "auswahl", wert: "folie",
        optionen: [
          { wert: "folie", label: "Frischhaltefolie" },
          { wert: "alu", label: "Alufolie" },
          { wert: "beutel", label: "Beutel" }
        ] },
      { id: "anzahl", label: "Wie oft deckst du etwas ab?", min: 1, max: 21, step: 1, wert: 5, einheit: "× pro Woche" }
    ],
    berechne(w) {
      const KOSTEN = { folie: 0.015, alu: 0.05, beutel: 0.04 };
      const NAMEN = { folie: "Frischhaltefolie", alu: "Alufolie", beutel: "Beutel" };
      const meter = Math.round(w.anzahl * 52 * 0.3);
      return {
        minutenProWoche: w.anzahl * 10 / 60,
        euroProMonat: (w.anzahl * KOSTEN[w.bisher] * 52) / 12,
        extra: w.bisher === "beutel"
          ? `Das sind ${w.anzahl * 52} Beutel weniger im Müll pro Jahr.`
          : `Das sind rund ${meter} Meter ${NAMEN[w.bisher]} weniger im Müll pro Jahr.`,
        vorherTitel: NAMEN[w.bisher],
        vorher: {
          folie: ["Abrollen, und sie klebt an sich selbst", "Haftet nicht an jeder Schüssel", "Nach einmal Benutzen in den Müll"],
          alu: ["Abreißen und um den Rand drücken", "Saures und Salziges löst Aluminium aus der Folie", "Nach einmal Benutzen in den Müll"],
          beutel: ["Reste erst in den Beutel umfüllen", "Zuknoten oder mit Clip verschließen", "Nach einmal Benutzen in den Müll"]
        }[w.bisher],
        nachher: [
          "Über den Rand ziehen, hält dicht",
          "Passt auf runde und eckige Gefäße",
          "In die Spülmaschine und wieder benutzen"
        ]
      };
    },
    annahmen: "Je nach Marke kostet ein Stück Frischhaltefolie (etwa 30 cm) 0,4 bis 2,5 Cent, ein Stück Alufolie 2 bis 8 Cent und ein Gefrierbeutel 2,5 bis 5 Cent. Ich rechne jeweils mit der Mitte. Wie viel Zeit du sparst, hat noch kein Test gemessen. Ich schätze vorsichtig 10 Sekunden pro Benutzung: Abrollen und Abreißen fallen weg, dafür suchst du den passenden Deckel heraus."
  },

  kindle: {
    mit: "einem E-Reader",
    felder: [
      { id: "buecher", label: "Wie viele Bücher liest du pro Jahr?", min: 1, max: 60, step: 1, wert: 12, einheit: "Bücher" },
      { id: "preisBuch", label: "Was kostet ein Buch bei dir im Schnitt?", min: 8, max: 30, step: 1, wert: 14, einheit: "€" },
      { id: "gratis", label: "Wie viele davon könntest du kostenlos lesen? (Klassiker, Prime Reading, Bücherei)", min: 0, max: 20, step: 1, wert: 2, einheit: "Bücher" }
    ],
    berechne(w) {
      const gratis = Math.min(w.gratis, w.buecher);
      const proJahr = (w.buecher - gratis) * w.preisBuch * 0.2 + gratis * w.preisBuch;
      const kg = (w.buecher * 0.3).toLocaleString("de-DE", { maximumFractionDigits: 1 });
      return {
        minutenProWoche: (w.buecher * 15) / 52,
        euroProMonat: proJahr / 12,
        extra: `Und dein Regal bleibt frei: ${Math.round(w.buecher * 2.5)} cm Bücher und ${kg} kg weniger pro Jahr.`,
        vorherTitel: "Gedruckte Bücher",
        vorher: [
          "In den Laden fahren oder auf die Lieferung warten",
          "Schwere Bücher im Urlaubskoffer",
          "Kleine Schrift, abends eine Lampe nötig"
        ],
        nachher: [
          "Das Buch ist in Sekunden da",
          "Tausende Bücher auf einem leichten Gerät",
          "Schrift vergrößern, Licht ist eingebaut"
        ]
      };
    },
    annahmen: "E-Books sind in Deutschland im Schnitt etwa 20 % günstiger als das gedruckte Buch. Kostenlose Bücher sparen den vollen Preis. Bücher aus der Bücherei (Onleihe) gehen aber nicht auf dem Kindle, nur auf E-Readern wie PocketBook oder Tolino. Für den Weg in den Laden, das Bestellen oder Abholen rechne ich 15 Minuten pro Buch. Ein Taschenbuch wiegt etwa 300 g und ist etwa 2,5 cm dick."
  },

  waschtrockner: {
    mit: "einem Waschtrockner",
    felder: [
      { id: "ladungen", label: "Wie oft wäschst du pro Woche?", min: 1, max: 10, step: 1, wert: 3, einheit: "× pro Woche", schnitt: [2, 3, 3.5, 4] },
      { id: "buegeln", label: "Wie viele Teile bügelst du pro Woche?", min: 0, max: 20, step: 1, wert: 4, einheit: "Teile" },
      { id: "strom", label: "Dein Strompreis", min: 0.2, max: 0.6, step: 0.01, wert: 0.35, einheit: "€ pro kWh", schnitt: STROM_LAENDER, schnittHinweis: "Die Kürzel am Regler zeigen den durchschnittlichen Strompreis in Deutschland (DE), Österreich (AT) und der Schweiz (CH)." }
    ],
    berechne(w) {
      const stromMonat = ((w.ladungen * 52) / 12) * 2.2 * w.strom;
      return {
        minutenProWoche: w.ladungen * 10 + w.buegeln * 3 * 0.5,
        euroProMonat: -stromMonat,
        extra: `Dafür kostet das Trocknen etwa ${stromMonat.toLocaleString("de-DE", { maximumFractionDigits: 0 })} € Strom im Monat.`,
        vorherTitel: "Wäscheständer",
        vorher: [
          "Ständer aufbauen, jedes Teil einzeln aufhängen",
          "Einen Tag warten, im Winter oft länger",
          "Abnehmen, bügeln, Ständer wegräumen"
        ],
        nachher: [
          "Morgens Wäsche rein, Endzeit einstellen",
          "Abends gewaschen und trocken",
          "Dampfprogramm: deutlich weniger Falten"
        ]
      };
    },
    annahmen: "Aufhängen, Abnehmen und den Ständer auf- und abbauen dauert pro Ladung etwa 10 Minuten. Mit dem Dampfprogramm sparst du etwa die Hälfte vom Bügeln, ich rechne mit 3 Minuten pro Teil. Trocknen braucht bei einem Gerät ohne Wärmepumpe gut 2 kWh Strom pro Ladung (6 kg). Das ziehe ich als Kosten ab. Mit Wärmepumpe ist es etwas weniger. Die Zahlen unter dem Regler fürs Waschen: Pro Person wird in Deutschland im Schnitt etwa 90-mal im Jahr gewaschen, in Single-Haushalten deutlich öfter, in größeren Haushalten pro Kopf deutlich seltener. Ein Vier-Personen-Haushalt wäscht etwa 210-mal im Jahr, also rund 4-mal pro Woche (beides Industrieverband Körperpflege- und Waschmittel). Daraus ergeben sich grob 2 Ladungen pro Woche bei 1 Person, 3 bei 2, 3,5 bei 3 und 4 bei 4 Personen." + STROM_QUELLEN
  },

  akkusauger: {
    mit: "einem Akku-Staubsauger",
    felder: [
      { id: "m2", label: "Wie groß ist deine Wohnung?", min: 20, max: 200, step: 5, wert: 70, einheit: "m²", schnitt: [73, 103, 114, 129] },
      { id: "saugen", label: "Wie oft saugst du pro Woche?", min: 0, max: 7, step: 1, wert: 2, einheit: "×" },
      { id: "schnell", label: "Wie oft saugst du schnell etwas weg, zum Beispiel Krümel?", min: 0, max: 14, step: 1, wert: 3, einheit: "× pro Woche" }
    ],
    berechne(w) {
      // Herausholen, Kabel einstecken, in jedem Raum umstecken, wegräumen
      const proMal = 4 + 0.02 * w.m2;
      return {
        minutenProWoche: w.saugen * proMal + w.schnell * 2,
        euroProMonat: 0,
        extra: "Und für die Krümel nach dem Essen holst du nicht mehr den großen Sauger heraus.",
        vorherTitel: "Sauger mit Kabel",
        vorher: [
          "Schweren Sauger aus der Kammer holen",
          "Kabel einstecken, in jedem Raum umstecken",
          "Für die Treppe alles hochtragen"
        ],
        nachher: [
          "Von der Wand nehmen und lossaugen",
          "Kein Kabel, kein Umstecken",
          "Als Handsauger für Sofa, Treppe und Auto"
        ]
      };
    },
    annahmen: "Den Sauger mit Kabel herausholen, einstecken, in jedem Raum umstecken und wieder wegräumen kostet pro Mal etwa 4 Minuten plus 0,02 Minuten pro m² (bei 70 m² also rund 5,5 Minuten). Schnell etwas wegsaugen geht pro Mal etwa 2 Minuten schneller. Beim Geld kommst du ungefähr bei null heraus: Du sparst die Staubbeutel, dafür lässt der Akku nach einigen Jahren nach. Die Zahlen unter dem Regler für die Wohnung zeigen, wie groß eine Wohnung im Schnitt ist (Statistisches Bundesamt, Mikrozensus 2022): 73 m² bei 1 Person, 103 m² bei 2, 114 m² bei 3 und 129 m² bei 4 oder mehr Personen."
  },

  reiskocher: {
    mit: "einem Reiskocher",
    felder: [
      { id: "bisher", label: "Wie kochst du Reis bisher?", typ: "auswahl", wert: "topf",
        optionen: [
          { wert: "topf", label: "Im Topf" },
          { wert: "beutel", label: "Im Kochbeutel" }
        ] },
      { id: "anzahl", label: "Wie oft gibt es bei dir Reis?", min: 1, max: 14, step: 1, wert: 2, einheit: "× pro Woche" }
    ],
    berechne(w) {
      const PROFILE = {
        topf: { name: "Reis im Topf", minuten: 10, euro: 0, vorher: [
          "Danebenstehen, damit nichts überkocht",
          "Unten angebrannt, oben noch hart",
          "Den Topf einweichen und schrubben"
        ] },
        beutel: { name: "Kochbeutel", minuten: 5, euro: 0.10, vorher: [
          "Wasser aufkochen, den Beutel darin kochen",
          "Den heißen Beutel aus dem Wasser fischen",
          "Der große Topf Wasser braucht mehr Strom"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: (w.anzahl * p.euro * 52) / 12,
        extra: "Und nichts brennt mehr an: Er merkt selbst, wann das Wasser aufgesogen ist.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Reis und Wasser rein, Knopf drücken",
          "Er schaltet selbst aufs Warmhalten",
          "Den beschichteten Topf kurz ausspülen"
        ]
      };
    },
    annahmen: "Im Topf stehst du beim Reiskochen etwa 10 Minuten daneben oder schrubbst danach den Topf, beim Kochbeutel sind es etwa 5 Minuten. Beim Strom kommst du gegenüber dem Topf mit Deckel ungefähr bei null heraus: Laut Stiftung Warentest braucht ein Reiskocher im Schnitt sogar etwas mehr (121 statt 91 Wattstunden). Beim Kochbeutel rechne ich mit rund 5 Cent mehr Strom pro Mahlzeit: Er gart in einem Topf voll sprudelndem Wasser, und so zu kochen braucht laut Stiftung Warentest gut doppelt so viel Strom wie ein Reiskocher (rund 270 Wattstunden). Reis im Kochbeutel kostet bei Eigenmarken nur wenig mehr als loser Reis: Ich rechne mit 5 Cent Aufpreis pro Mahlzeit für zwei bis drei Personen."
  },

  kaffeevollautomat: {
    mit: "einem Kaffeevollautomaten",
    felder: [
      { id: "tassen", label: "Wie viele Tassen aus Kapseln trinkt ihr am Tag?", hinweis: "Alle zusammen. Trinkt ihr keinen Kapselkaffee, stell 0 ein.", min: 0, max: 10, step: 1, wert: 2, einheit: "Tassen pro Tag" },
      { id: "sorte", label: "Welche Kapseln sind es meistens?", typ: "auswahl", wert: "marke",
        optionen: [
          { wert: "marke", label: "Markenkapseln, zum Beispiel Nespresso" },
          { wert: "discount", label: "Günstige vom Discounter" }
        ] },
      { id: "unterwegs", label: "Wie oft kaufst du dir pro Woche einen Kaffee unterwegs?", hinweis: "Nur die, die du künftig zu Hause machen würdest.", min: 0, max: 14, step: 1, wert: 0, einheit: "× pro Woche" }
    ],
    berechne(w) {
      const KAPSEL = { marke: 0.40, discount: 0.20 };   // € pro Kapsel
      const TASSE = 0.15;       // € pro Tasse aus dem Vollautomaten: Bohnen, Wasser, Strom
      const UNTERWEGS = 3.50;   // € pro Kaffee im Café oder beim Bäcker, vorsichtig gerechnet
      const PFLEGE = 5;         // € pro Monat für Entkalker, Reiniger und Filter
      const monat = w.tassen * (365 / 12) * (KAPSEL[w.sorte] - TASSE) + w.unterwegs * (52 / 12) * (UNTERWEGS - TASSE) - PFLEGE;
      const kapseln = w.tassen * 365;
      const becher = w.unterwegs * 52;
      const nurUnterwegs = w.tassen === 0 && w.unterwegs > 0;
      return {
        minutenProWoche: 0,
        euroProMonat: Math.max(0, monat),
        extra: monat <= 0
          ? "Bei diesen Angaben spart dir ein Vollautomat kein Geld. Er lohnt sich dann nur, wenn dir frisch gemahlener Kaffee und Cappuccino auf Knopfdruck den Preis wert sind."
          : w.tassen > 0
          ? `Und ${kapseln.toLocaleString("de-DE")} Kapseln weniger im Müll pro Jahr${becher > 0 ? `, dazu bis zu ${becher} Einwegbecher` : ""}.`
          : `Und bis zu ${becher} Einwegbecher weniger im Jahr.`,
        vorherTitel: nurUnterwegs ? "Kaffee unterwegs" : "Kapseln",
        vorher: nurUnterwegs
          ? [
              "Für jeden Kaffee zum Bäcker oder ins Café",
              "Ein Cappuccino kostet dort im Schnitt fast 4 Euro",
              "Oft anstehen, bis du dran bist"
            ]
          : [
              "Für jede Tasse eine neue Kapsel",
              "Kapseln nachkaufen und auf Vorrat halten",
              "Leere Kapseln landen im Müll"
            ],
        nachher: [
          "Bohnen rein, Knopf drücken, fertig",
          "Jede Tasse frisch gemahlen, auch als Cappuccino",
          "Jeden Tag Kaffeesatz und Tropfschale leeren"
        ]
      };
    },
    annahmen: "Eine Markenkapsel kostet rund 40 Cent, eine günstige vom Discounter um 20 Cent (im Test von Stiftung Warentest 2025 zum Beispiel 17 bis 19 Cent). Eine Tasse aus dem Vollautomaten kostet mit Bohnen, Wasser und Strom je nach Bohnen etwa 10 bis 20 Cent, ich rechne mit 15 Cent. Für Entkalker, Reiniger und Wasserfilter rechne ich 5 Euro im Monat, je nach Gerät und Filter sind es etwa 30 bis 120 Euro im Jahr. Ein Cappuccino im Café kostete im Juni 2026 in zehn deutschen Großstädten im Schnitt 3,80 Euro (Studie des Kaffeehändlers Coffee Friend), ich rechne vorsichtig mit 3,50 Euro pro Kaffee unterwegs. Milch brauchst du für einen Cappuccino bei beiden Maschinen, die rechne ich nicht mit. Machst du Cappuccino mit Milchkapseln, sparst du etwas mehr als angezeigt. Alle Preise gelten für Deutschland, das Ergebnis ist ein grober Wert. Zeit rechne ich nicht mit, nur Geld."
  },
  kochfunktion: {
    mit: "einer Küchenmaschine mit Kochfunktion",
    felder: [
      { id: "bisher", label: "Was kochst du meistens?", typ: "auswahl", wert: "gemischt",
        optionen: [
          { wert: "ruehren", label: "Suppen, Soßen, Risotto" },
          { wert: "gemischt", label: "Mal so, mal so" },
          { wert: "braten", label: "Viel Gebratenes" }
        ] },
      { id: "anzahl", label: "Wie oft kochst du warm?", min: 1, max: 14, step: 1, wert: 4, einheit: "× pro Woche" }
    ],
    berechne(w) {
      const PROFILE = {
        ruehren: { name: "Am Herd rühren", minuten: 15, vorher: [
          "Zwiebeln und Gemüse von Hand schneiden",
          "Am Herd stehen und rühren, damit nichts anbrennt",
          "Brett, Messer und Topf spülen"
        ] },
        gemischt: { name: "Am Herd kochen", minuten: 10, vorher: [
          "Schneiden, rühren, abschmecken",
          "Immer wieder zum Herd laufen",
          "Brett, Messer und Töpfe spülen"
        ] },
        braten: { name: "In der Pfanne braten", minuten: 5, vorher: [
          "Zwiebeln und Gemüse von Hand schneiden",
          "Soße und Beilage nebenher im Topf",
          "Pfanne, Topf, Brett und Messer spülen"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: 0,
        extra: w.bisher === "braten"
          ? "Anbraten machst du weiter in der Pfanne. Schneiden, Soße und Beilage übernimmt die Maschine."
          : "Und während sie kocht, machst du etwas anderes.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Zutaten in den Topf, Programm wählen",
          "Sie schneidet, rührt und kocht",
          "Mixtopf, Messer und Deckel spülen"
        ]
      };
    },
    annahmen: "Wie viel Zeit eine Küchenmaschine mit Kochfunktion spart, hat kein Test gemessen. Ich schätze: Bei Suppen, Soßen und Risotto sparst du etwa 15 Minuten pro Mahlzeit, weil du nicht schneiden und nicht danebenstehen musst. Bei gemischtem Essen sind es etwa 10 Minuten. Bei viel Gebratenem nur etwa 5, denn anbraten machst du besser weiter in der Pfanne. Die Zeit fürs Spülen von Mixtopf, Messer und Deckel habe ich schon abgezogen. Strom rechne ich nicht mit: Ob die Maschine mehr oder weniger braucht als dein Herd, hängt vom Gericht ab."
  },

  kneten: {
    mit: "einer Küchenmaschine",
    felder: [
      { id: "bisher", label: "Wie machst du Teig bisher?", typ: "auswahl", wert: "hand",
        optionen: [
          { wert: "hand", label: "Von Hand" },
          { wert: "handmixer", label: "Mit dem Handmixer" }
        ] },
      { id: "anzahl", label: "Wie oft backst du oder machst Teig?", min: 1, max: 20, step: 1, wert: 4, einheit: "× pro Monat" }
    ],
    berechne(w) {
      const PROFILE = {
        hand: { name: "Kneten von Hand", minuten: 10, vorher: [
          "Mindestens 8 Minuten kneten, bis der Teig glatt ist",
          "Klebrige Hände, Mehl auf der Arbeitsfläche",
          "Schüssel, Arbeitsfläche und Hände sauber machen"
        ] },
        handmixer: { name: "Mit dem Handmixer", minuten: 5, vorher: [
          "Den Mixer die ganze Zeit festhalten",
          "Danebenstehen, bis der Teig fertig ist",
          "Schüssel und Besen spülen"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: (w.anzahl * p.minuten * 12) / 52,
        euroProMonat: 0,
        extra: w.bisher === "hand"
          ? "Und deine Arme schonst du auch."
          : "Und du musst den Mixer nicht mehr halten.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Zutaten in die Schüssel, Stufe wählen",
          "Sie knetet und rührt allein",
          "Haken und Besen in die Spülmaschine"
        ]
      };
    },
    annahmen: "Wie viel Zeit eine Küchenmaschine spart, hat kein Test gemessen. Ich schätze: Von Hand knetest du einen Hefeteig mindestens 8 Minuten, so raten es REWE und das Landratsamt Göppingen. Mit dem Zusammenrühren sind es etwa 10 Minuten, bei denen du mit der Maschine nicht dabei sein musst. Mit dem Handmixer rechne ich mit etwa 5 Minuten pro Teig, die du den Mixer hältst. Die Maschine knetet laut denselben Quellen mindestens 5 Minuten, aber ohne dich. Fürs Spülen rechne ich mit gleich viel Zeit wie bisher. Strom rechne ich nicht mit, beim Kneten geht es um wenige Cent."
  },

  sprudler: {
    mit: "einem Wassersprudler",
    felder: [
      { id: "bisher", label: "Welches Sprudelwasser kaufst du bisher?", typ: "auswahl", wert: "discount",
        optionen: [
          { wert: "discount", label: "Günstiges vom Discounter" },
          { wert: "marke", label: "Markenwasser" }
        ] },
      { id: "liter", label: "Wie viel Sprudelwasser trinkt ihr pro Woche?", min: 1, max: 25, step: 0.5, wert: 4, einheit: "Liter pro Woche", schnitt: [2, 3.5, 5.5, 7] }
    ],
    berechne(w) {
      const PREIS = { discount: 0.20, marke: 0.60 };   // gekauftes Sprudelwasser, € pro Liter
      const SELBST = 0.15;                              // Gas pro Liter, Leitungswasser fast gratis
      const kilo = Math.round((w.liter * 52) / 10) * 10;
      const wochen = Math.round(45 / w.liter);
      return {
        minutenProWoche: 0,
        euroProMonat: ((PREIS[w.bisher] - SELBST) * w.liter * 52) / 12,
        extra: `Und du trägst im Jahr rund ${kilo.toLocaleString("de-DE")} Kilo Wasser weniger nach Hause, das Leergut nicht mitgerechnet.`,
        vorherTitel: w.bisher === "marke" ? "Markenwasser kaufen" : "Wasser vom Discounter",
        vorher: [
          "Sixpacks oder Kästen zum Auto und in die Wohnung tragen",
          "Leergut sammeln und zum Automaten bringen",
          "Platz für den Vorrat in Küche oder Keller"
        ],
        nachher: [
          "Leitungswasser in die Flasche, ein paar Mal drücken",
          wochen <= 1 ? "Etwa jede Woche den Zylinder tauschen" : `Etwa alle ${wochen} Wochen den Zylinder tauschen`,
          "Keine Kästen, kein Leergut"
        ]
      };
    },
    annahmen: "Sprudel vom Discounter kostet um 20 Cent pro Liter, Markenwasser in Plastikflaschen oft 60 Cent und mehr. Selbst gesprudelt zahlst du vor allem das Gas: je nach Zylinder und Gerät etwa 10 bis 20 Cent pro Liter, ich rechne mit 15 Cent. Ein Zylinder reicht etwa 40 bis 60 Liter, ich rechne mit 45. Leitungswasser kostet weniger als einen halben Cent pro Liter, das lasse ich weg. Zeit rechne ich nicht: Kästen tragen und Leergut zurückbringen fällt weg, dafür sprudelst du jede Flasche selbst. Die Zahlen am Regler: In Deutschland trinkt jeder im Schnitt knapp 130 Liter Mineralwasser im Jahr, gut 70 Prozent davon mit Kohlensäure (Verband Deutscher Mineralbrunnen). Das sind knapp 2 Liter Sprudel pro Person und Woche."
  },
  geschirrspueler: {
    mit: "einem Mini-Geschirrspüler",
    felder: [
      { id: "mal", label: "Wie oft spülst du pro Woche von Hand?", min: 1, max: 14, step: 1, wert: 7, einheit: "× pro Woche" },
      { id: "minuten", label: "Wie lange brauchst du jeweils dafür?", hinweis: "Ohne große Töpfe und Pfannen, die spülst du weiter von Hand.", min: 5, max: 60, step: 5, wert: 20, einheit: "Minuten" }
    ],
    berechne(w) {
      const MASCHINE = 5;   // Minuten pro Spülgang: einräumen, ausräumen, beim Tank Wasser einfüllen
      return {
        minutenProWoche: w.mal * Math.max(0, w.minuten - MASCHINE),
        euroProMonat: 0,
        extra: "Beim Geld rechne ich mit null: Die Maschine braucht Strom und Tabs, dafür sparst du heißes Wasser und Spülmittel.",
        vorherTitel: "Abwasch von Hand",
        vorher: [
          "Spülbecken volllaufen lassen, jedes Teil einzeln schrubben",
          "Abtrocknen oder das Abtropfgitter vollstellen",
          "Bleibt es liegen, stapelt sich das Geschirr"
        ],
        nachher: [
          "Einräumen, Knopf drücken, fertig",
          "Beim Gerät mit Tank vorher Wasser einfüllen",
          "Große Töpfe und Pfannen spülst du weiter von Hand"
        ]
      };
    },
    annahmen: "Ein- und Ausräumen kostet pro Spülgang etwa 5 Minuten, beim Gerät mit Tank ist das Einfüllen dabei. Den Startwert von 20 Minuten für einen Abwasch von Hand habe ich aus einer Studie der Universität Bonn abgeleitet: Dort spülten 113 Leute zwölf Gedecke von Hand, im Schnitt in 79 Minuten, also gut 6 Minuten pro Gedeck. Für drei Gedecke sind das rund 20 Minuten. Eine große Spülmaschine mit zwölf Gedecken ein- und auszuräumen, dauerte dort etwa 15 Minuten. Beim Geld rechne ich mit null: Die Maschine braucht Strom und Tabs, dafür sparst du heißes Wasser und Spülmittel. Wer bisher sehr sparsam von Hand spült, zahlt mit der Maschine eher etwas mehr. Für den Regler „Wie oft“ habe ich keine verlässlichen Durchschnittswerte nach Haushaltsgröße gefunden, darum gibt es dort keine Striche."
  },

  balkonkraftwerk: {
    mit: "einem Balkonkraftwerk",
    preisLabel: "Was kostet dein Set?",
    preisHinweis: "Den aktuellen Preis siehst du bei Amazon. Mit Speicher stell hier nur ein, was die Module kosten.",
    kaufpreis: w => w.preis + w.speicher,
    felder: [
      { id: "ort", label: "Wo kommen die Module hin?", typ: "auswahl", wert: "balkon",
        optionen: [
          { wert: "balkon", label: "Senkrecht ans Balkongeländer" },
          { wert: "schraeg", label: "Schräg aufgestellt, zum Beispiel aufs Flachdach oder in den Garten" }
        ] },
      { id: "richtung", label: "Wohin zeigen sie?", hinweis: "Zeigen sie nach Südost oder Südwest, nimm Süden. Nach Norden lohnt es sich kaum.", typ: "auswahl", wert: "sued",
        optionen: [
          { wert: "sued", label: "Nach Süden" },
          { wert: "ostwest", label: "Nach Osten oder Westen" }
        ] },
      { id: "verbrauch", label: "Wie viel Strom verbraucht ihr im Jahr?", hinweis: "Steht auf deiner Stromrechnung.", min: 800, max: 6000, step: 100, wert: 1900, einheit: "kWh pro Jahr", schnitt: [1200, 1900, 2400, 2600], schnittHinweis: "Die Zahlen am Regler zeigen den Durchschnitt in einer Wohnung mit 1, 2, 3 und 4 Personen (Stromspiegel 2025, ohne Warmwasser aus Strom)." },
      { id: "strom", label: "Dein Strompreis", min: 0.2, max: 0.6, step: 0.01, wert: 0.37, einheit: "€ pro kWh", schnitt: STROM_LAENDER, schnittHinweis: "Die Kürzel am Regler zeigen den durchschnittlichen Strompreis in Deutschland (DE), Österreich (AT) und der Schweiz (CH)." },
      { id: "speicher", label: "Was kostet dein Speicher?", hinweis: "Den aktuellen Preis siehst du bei Amazon. Rechne einen Lesekopf für den Stromzähler dazu, wenn keiner dabei ist.", min: 300, max: 1500, step: 10, wert: 450, einheit: "€" }
    ],
    berechne(w) {
      const ERTRAG = { balkon: 600, schraeg: 850 };      // kWh pro Jahr nach Süden: Set mit rund 900 Watt Modulen und 800-Watt-Wechselrichter
      const RICHTUNG = { sued: 1, ostwest: 0.85 };       // Osten oder Westen bringt rund 15 Prozent weniger
      const ertrag = ERTRAG[w.ort] * RICHTUNG[w.richtung];
      const r = ertrag / w.verbrauch;
      // Anteil, den ihr selbst nutzt: Je mehr ihr im Verhältnis zum Ertrag verbraucht, desto mehr (HTW Berlin, C.A.R.M.E.N., Verbraucherzentrale NRW)
      const anteil = Math.min(0.85, Math.max(0.3, 0.45 - 0.29 * Math.log(r / 0.375)));
      const ohne = ertrag * anteil;
      // Mit Speicher (rund 2 kWh) nutzt ihr mehr selbst. Den Zuwachs haben wir aus dem Stecker-Solar-Simulator der HTW Berlin abgeleitet
      // (900 Watt Module, 800 Watt, ohne Speicher und mit 2.000 Wh). Der Speicher braucht selbst rund 4 Watt, also 35 kWh im Jahr (smartzone.de)
      const mitSpeicher = w.speicher > 0;
      const plus = mitSpeicher ? Math.max(0, 0.8 - 0.44 * Math.pow(r, 1.21) + 0.3 * Math.log(r)) : 0;
      const selbst = mitSpeicher ? Math.max(0, ertrag * Math.min(0.95, anteil + plus) - 35) : ohne;
      // Was der Speicher allein bringt. Wir vergleichen mit zehn Jahren, so lange rechnet die HTW Berlin mit einem Akku
      const mehrEuro = (selbst - ohne) * w.strom;
      const jahre = mehrEuro > 0 ? w.speicher / mehrEuro : Infinity;
      const runde = x => (Math.round(x / 10) * 10).toLocaleString("de-DE");
      return {
        minutenProWoche: 0,
        euroProMonat: (selbst * w.strom) / 12,
        extra: !mitSpeicher
          ? `Die Module liefern rund ${runde(ertrag)} kWh im Jahr. Davon nutzt ihr etwa ${runde(selbst)} kWh selbst, den Rest gebt ihr ans Netz ab.`
          : `Die Module liefern rund ${runde(ertrag)} kWh im Jahr. Mit Speicher kauft ihr dadurch etwa ${runde(selbst)} kWh weniger Strom, ohne Speicher wären es etwa ${runde(ohne)} kWh. ` +
            (mehrEuro <= 0 ? "Bei eurem Verbrauch bringt ein Speicher nichts dazu, weil ihr den Strom auch ohne ihn fast ganz selbst nutzt."
              : jahre <= 10 ? `Der Speicher allein bringt rund ${Math.round(mehrEuro)} € im Jahr und ist nach etwa ${Math.round(jahre)} Jahren bezahlt.`
              : "Der Speicher allein bräuchte bei euch über zehn Jahre, bis er bezahlt ist. Das lohnt sich kaum."),
        vorherTitel: "Ohne Balkonkraftwerk",
        vorher: [
          "Jede Kilowattstunde kaufst du beim Stromanbieter",
          "Kühlschrank, Router und Standby laufen den ganzen Tag auf deine Rechnung",
          `Rund ${runde(w.verbrauch * w.strom)} € Strom im Jahr`
        ],
        nachher: mitSpeicher ? [
          "Tagsüber fließt Solarstrom über die Steckdose in deine Wohnung",
          "Was übrig bleibt, lädt den Speicher, abends und nachts nutzt ihr ihn",
          "Einmal einrichten und anmelden, danach läuft es von allein"
        ] : [
          "Tagsüber fließt Solarstrom über die Steckdose in deine Wohnung",
          "Was gerade läuft, nutzt zuerst den eigenen Strom",
          "Einmal anmelden, danach läuft es von allein"
        ]
      };
    },
    annahmen: "Ich rechne mit einem Set wie denen hier: zwei Module mit zusammen rund 900 Watt und ein 800-Watt-Wechselrichter. Rechne beim Kaufpreis die Halterung dazu, sie ist bei diesen Sets nicht dabei. Senkrecht am Balkon nach Süden liefert so ein Set rund 600 kWh im Jahr, schräg aufgestellt rund 850 kWh. Stiftung Warentest errechnete 2025 für die getesteten Sets am Balkongeländer 600 bis 720 kWh und auf einem Beispieldach 860 bis 1.020 kWh, das SolarZentrum Berlin und die HTW Berlin kommen auf ähnliche Werte. Nach Osten oder Westen rechne ich mit 15 Prozent weniger (HTW Berlin). Wie viel ihr davon selbst nutzt, hängt von eurem Verbrauch ab: Wer wenig Strom braucht, nutzt etwa ein Drittel selbst, eine Familie gut die Hälfte. Das passt zu Simulationen der HTW Berlin und von C.A.R.M.E.N. und zu einem Beispiel der Verbraucherzentrale NRW. Strom, den ihr nicht selbst nutzt, rechne ich mit 0 €. Mit Speicher rechne ich mit einem Akku mit rund 2 kWh, so groß sind die Speicher hier. Wie viel ihr damit zusätzlich selbst nutzt, habe ich mit dem Stecker-Solar-Simulator der HTW Berlin für viele Verbräuche durchgerechnet und daraus eine Formel gemacht. Der Simulator rechnet schon mit den Verlusten beim Laden und Entladen. Davon ziehe ich 35 kWh im Jahr ab, weil der Speicher selbst rund um die Uhr ein paar Watt braucht: Beim Zendure maß smartzone.de rund 4 Watt. Ich rechne mit zwei Modulen. Mit vier Modulen bringt ein großer Speicher mehr, das zeigt der Rechner nicht. Ob sich der Speicher allein lohnt, vergleiche ich mit zehn Jahren, denn so lange rechnet die HTW Berlin mit einem Akku. In der Schweiz sind nur 600 Watt erlaubt, dort liefert ein Set etwas weniger, dafür gibt es für eingespeisten Strom eine kleine Vergütung. Schatten rechne ich nicht mit, das Ergebnis ist ein grober Wert." + STROM_QUELLEN
  },
  sparduschkopf: {
    mit: "einem Sparduschkopf",
    felder: [
      { id: "warm", label: "Wie wird euer Duschwasser warm?", typ: "auswahl", wert: "heizung",
        optionen: [
          { wert: "heizung", label: "Über die Heizung, zum Beispiel Gas" },
          { wert: "strom", label: "Mit Strom (Durchlauferhitzer, Boiler)" }
        ] },
      { id: "jetzt", label: "Wie viel lässt dein Duschkopf jetzt durch?", hinweis: "Lass die Dusche 30 Sekunden in einen Eimer laufen und nimm die Liter mal zwei.", min: 9, max: 20, step: 0.5, wert: 12, einheit: "Liter pro Minute" },
      { id: "duschen", label: "Wie oft wird bei euch pro Woche geduscht?", hinweis: "Alle zusammen: Duschen zwei Personen je viermal, sind das 8.", min: 1, max: 35, step: 1, wert: 8, einheit: "× pro Woche" },
      { id: "minuten", label: "Wie lange läuft das Wasser beim Duschen?", min: 2, max: 20, step: 1, wert: 8, einheit: "Minuten" }
    ],
    berechne(w) {
      const NEU = 8.5;                                  // Liter pro Minute, die drei Modelle liegen im Test bei 8,2 bis 8,8
      const KWH_PRO_LITER = 0.03;                       // Duschwasser von kalt auf etwa 37 Grad bringen
      const ENERGIE = { heizung: 0.12, strom: 0.37 };   // € pro kWh
      const WASSER = 0.004;                             // Wasser und Abwasser, € pro Liter
      const literJahr = (w.jetzt - NEU) * w.minuten * w.duschen * 52;
      const gerundet = Math.round(literJahr / 100) * 100;
      return {
        minutenProWoche: 0,
        euroProMonat: (literJahr * (KWH_PRO_LITER * ENERGIE[w.warm] + WASSER)) / 12,
        extra: `Das sind rund ${gerundet.toLocaleString("de-DE")} Liter warmes Wasser weniger im Jahr.`,
        vorherTitel: "Alter Duschkopf",
        vorher: [
          `Rund ${Math.round(w.jetzt * w.minuten)} Liter warmes Wasser pro Dusche`,
          w.warm === "strom" ? "Jeder Liter wird mit Strom warm gemacht" : "Die Heizung macht jeden Liter warm",
          "Wasser und Abwasser zahlst du für jeden Liter"
        ],
        nachher: [
          `Rund ${Math.round(NEU * w.minuten)} Liter pro Dusche`,
          "Gleich lange und gleich warm duschen",
          "In ein paar Minuten selbst angeschraubt"
        ]
      };
    },
    annahmen: "Ich vergleiche deinen jetzigen Duschkopf mit einem Sparduschkopf, der 8,5 Liter pro Minute durchlässt. So viel lassen die drei Modelle hier im Test von Stiftung Warentest durch, 8,2 bis 8,8 Liter. Ältere Duschköpfe lassen oft 10 bis 15 Liter pro Minute durch, ich starte bei 12. Um einen Liter Duschwasser von kalt auf etwa 37 Grad zu bringen, braucht es rund 0,03 kWh. Mit Strom rechne ich mit 37 Cent pro kWh (BDEW, August 2026), über die Heizung mit dem Gaspreis von rund 12 Cent (Statistisches Bundesamt und BDEW, 2026). Wasser und Abwasser kosten zusammen etwa 4 € pro Kubikmeter, also 0,4 Cent pro Liter. Alle Preise gelten für Deutschland, das Ergebnis ist ein grober Wert. Zeit sparst du nicht: Du duschst so lange wie vorher."
  },
  thermostate: {
    mit: "smarten Heizkörper-Thermostaten",
    preisLabel: "Was kostet ein Thermostat?",
    preisHinweis: "Den aktuellen Preis siehst du bei Amazon. Ich rechne ihn mal die Zahl deiner Heizkörper.",
    kaufpreis: w => w.preis * w.heizkoerper + w.zentrale,
    felder: [
      { id: "heizkosten", label: "Was zahlst du im Jahr fürs Heizen?", hinweis: "Steht auf deiner Heizkostenabrechnung.", min: 200, max: 3000, step: 50, wert: 900, einheit: "€ pro Jahr", schnitt: [1250, 1750, 1950, 2200] },
      { id: "bisher", label: "Wie heizt du bisher?", typ: "auswahl", wert: "manchmal",
        optionen: [
          { wert: "durch", label: "Läuft meist durch" },
          { wert: "manchmal", label: "Drehe manchmal runter" },
          { wert: "immer", label: "Drehe immer selbst runter" }
        ] },
      { id: "abrechnung", label: "Wie bezahlst du deine Heizung?", typ: "auswahl", wert: "eigen",
        optionen: [
          { wert: "eigen", label: "Eigene Heizung, z. B. Gastherme" },
          { wert: "zentral", label: "Zentralheizung mit Abrechnung" }
        ] },
      { id: "heizkoerper", label: "Wie viele Heizkörper willst du ausstatten?", min: 1, max: 12, step: 1, wert: 4, einheit: "Stück" },
      { id: "zentrale", label: "Was kostet die Zentrale?", hinweis: "Hast du schon eine passende Zentrale, stell 0 € ein.", min: 0, max: 150, step: 5, wert: 50, einheit: "€" }
    ],
    berechne(w) {
      // anteil = gesparte Heizkosten, drehen = wie oft du bisher selbst drehst (1 = zweimal am Tag)
      const PROFILE = {
        durch: { anteil: 0.12, drehen: 0, name: "Heizung läuft durch", vorher: [
          "Geheizt wird auch, wenn niemand da ist",
          "Beim Gehen vergisst du, runterzudrehen",
          "Am Monatsende zahlst du für die leere Wohnung"
        ] },
        manchmal: { anteil: 0.08, drehen: 0.5, name: "Selbst runterdrehen", vorher: [
          "Mal denkst du dran, mal nicht",
          "Abends kommst du in eine kalte Wohnung",
          "Dann dauert es, bis es wieder warm ist"
        ] },
        immer: { anteil: 0.04, drehen: 1, name: "Selbst runterdrehen", vorher: [
          "Jeden Morgen jeden Heizkörper runterdrehen",
          "Abends kommst du in eine kalte Wohnung",
          "Dann dauert es, bis es wieder warm ist"
        ] }
      };
      const p = PROFILE[w.bisher];
      const heizkostenWeniger = w.heizkosten * p.anteil * (w.abrechnung === "zentral" ? 0.6 : 1);
      return {
        // Ein Thermostat von Hand drehen dauert etwa 15 Sekunden, zweimal am Tag
        minutenProWoche: p.drehen * w.heizkoerper * 2 * 7 * 0.25,
        // Batterien: etwa 1 € pro Thermostat und Jahr
        euroProMonat: (heizkostenWeniger - w.heizkoerper) / 12,
        extra: `Das sind rund ${Math.round(heizkostenWeniger)} € weniger Heizkosten im Jahr, minus etwa ${w.heizkoerper} € für Batterien. Und du kommst jeden Tag in eine warme Wohnung.`,
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Einmal einen Heizplan für die Woche einstellen",
          "Warm, kurz bevor du heimkommst",
          "Runtergedreht, solange du weg bist"
        ]
      };
    },
    annahmen: "Mit einem Heizplan sparst du im Schnitt etwa 10 % Heizkosten (co2online, Umweltbundesamt). Läuft deine Heizung bisher meist durch, rechne ich mit 12 %, drehst du manchmal selbst runter mit 8 % und immer mit 4 %. Zum Vergleich: Jedes Grad weniger spart rund 6 % Heizenergie. Batterien kosten etwa 1 € pro Thermostat und Jahr, das ziehe ich ab. Einen Heizkörper von Hand runter- und wieder hochdrehen dauert etwa 15 Sekunden, zweimal am Tag. Diese Zeit sparst du, wenn du bisher selbst drehst. Die Zahlen unter dem Regler für die Heizkosten: So groß ist eine Wohnung im Schnitt (Statistisches Bundesamt, Mikrozensus 2022), mal die Kosten einer Gasheizung laut Heizspiegel 2026 von co2online (Abrechnungsjahr 2025), rund 17 € pro m² im Jahr. Das sind etwa 1.250 € bei 1 Person, 1.750 € bei 2, 1.950 € bei 3 und 2.200 € bei 4 oder mehr Personen. Mit Wärmepumpe ist es deutlich weniger, mit Fernwärme etwas mehr. Bei Thermostaten mit Zentrale kommt ihr Preis einmal dazu. Bei einer Zentralheizung im Mehrfamilienhaus wird nur ein Teil der Kosten nach Verbrauch verteilt, in Deutschland 50 bis 70 %, in Österreich mindestens 55 % und in der Schweiz meist 50 bis 70 %. Wählst du „Zentralheizung mit Abrechnung“, rechne ich darum nur mit 60 % der Ersparnis."
  }
};
