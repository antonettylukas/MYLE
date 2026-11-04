/*
  Die Ratgeber von MYLE (myle.life/ratgeber und myle.life/ratgeber-<id>). Jeder Eintrag beantwortet eine Frage.
  frage, seitenTitel, beschreibung  Überschrift, Titel und Beschreibung für Suchmaschinen
  kurzantwort   die Antwort in 2–3 Sätzen, steht oben im Kasten „Kurz gesagt“
  abschnitte    [{ titel, absaetze, punkte? }]; art: "erfahrung" zeigt den Abschnitt als Zitat-Kasten von Lukas
  wannNicht, fragen, quellen   wie auf den Produktseiten; Quellen ohne url stehen nur als Text da
  produkt, verweis   Kasten mit Link auf die passende Produktseite und ihren Rechner
  geprueft      Datum der letzten Prüfung (JJJJ-MM-TT)
  Neue Seite: Eintrag hier (und in en/fr/it) anlegen, dann python3 .github/pruefung/ratgeber_seiten.py,
  python3 .github/pruefung/sitemap.py und node .github/pruefung/vorrendern.js.
  Texte und Faktencheck: Thread „Produktrecherche“ (Ablage online-stellen/ratgeber/).
*/
const RATGEBER = [
  {
    id: "saugroboter-kleine-wohnung",
    produkt: "saugroboter",
    titel: "Lohnt sich ein Saugroboter für eine kleine Wohnung?",
    frage: "Lohnt sich ein Saugroboter für eine kleine Wohnung?",
    beschreibung: "Was ein Saug- und Wischroboter auf 30 bis 60 m² wirklich spart, wie laut er ist, wie viel Platz die Station braucht und wann er nichts für dich ist.",
    kurzantwort: "Ja, auch auf 30 bis 60 m² lohnt er sich für die meisten, und oft reicht schon ein Modell aus der Einstiegs- oder Mittelklasse. Saugst du sonst zweimal pro Woche und wischst einmal, sparst du laut meinem Rechner eine halbe bis knapp eine ganze Stunde pro Woche. Nichts für dich ist er, wenn die Station keinen Platz hat oder du vor dem Start nicht kurz aufräumen willst.",
    abschnitte: [
      {
        titel: "So viel Zeit sparst du auf 30 bis 60 m²",
        absaetze: [
          "Mein Rechner setzt fürs Saugen samt Vorbereitung etwa 5 Minuten plus 0,2 Minuten pro m² an, fürs Wischen 8 Minuten plus 0,25 Minuten pro m². Für die Pflege des Roboters zieht er 5 Minuten pro Woche ab.",
          "Bei zweimal Saugen und einmal Wischen pro Woche sparst du so auf 30 m² rund 33 Minuten pro Woche, auf 60 m² rund 52 Minuten. Das sind etwa 28 bis 45 Stunden im Jahr.",
          "Was der Rechner nicht zeigt: Mit einem Zeitplan fährt der Roboter, während du arbeitest, auf Wunsch jeden Tag. Deine Wohnung ist dann öfter sauber, als wenn du zweimal pro Woche selbst saugst."
        ]
      },
      {
        titel: "Meine Erfahrung nach 14 Jahren",
        absaetze: [
          "Ich nutze seit 14 Jahren Saugroboter und musste seitdem so gut wie nie mehr selbst saugen oder wischen. Der wichtigste Kniff: Zeitplan einstellen. Dann putzt er, während ich arbeite, und ich komme jeden Abend in eine saubere Wohnung."
        ],
        art: "erfahrung"
      },
      {
        titel: "Was schon ein günstiger Roboter kann",
        absaetze: [
          "Für eine kleine Wohnung brauchst du kein Spitzenmodell. Laser-Navigation gibt es schon in der unteren Preisklasse: Der Roboter legt eine Karte an und fährt in Bahnen. In der App stellst du den Zeitplan ein, lässt einzelne Räume putzen und sperrst Bereiche, etwa einen empfindlichen Teppich.",
          "Wenn du mehr ausgeben willst, achte vor allem auf zwei Dinge. Mit Kamera erkennt ein Roboter Kabel, Socken und Schuhe meist und fährt drumherum. Ohne Kamera fährt er eher darüber oder bleibt hängen: Bei smarthomeassistent.de erkannte ein günstiges Modell keins von 53 Hindernissen. Und willst du gründlich wischen lassen, nimm ein Modell, dessen Station auch die Mopps oder die Walze wäscht."
        ]
      },
      {
        titel: "Wie laut er ist",
        absaetze: [
          "Beim Saugen sind die meisten Roboter etwa 55 bis 70 Dezibel laut, ungefähr wie ein normales Gespräch. Ein klassischer Staubsauger kommt meist auf 70 bis 85 Dezibel. Richtig laut wird nur die Station, wenn sie ihn leer saugt: etwa 75 bis 90 Dezibel, aber nur ein paar Sekunden lang. In einer kleinen Wohnung lohnt sich der Zeitplan deshalb doppelt: Lass ihn fahren, wenn du nicht da bist."
        ]
      },
      {
        titel: "Platz für die Station",
        absaetze: [
          "Eine Station ist oft rund 40 cm breit und bis zu 60 cm hoch. Davor braucht der Roboter Platz, um einzufahren und anzudocken: Je nach Modell sollen vorne 0,8 bis 1,5 m frei bleiben und an den Seiten 5 bis 50 cm. Miss das vorher aus, gerade im Flur oder in einem kleinen Zimmer."
        ]
      },
      {
        titel: "Passt er unter Sofa und Bett?",
        absaetze: [
          "Die meisten Roboter sind etwa 9 bis 12 cm hoch, flache Modelle um 8 cm. Miss, wie viel Platz unter Sofa, Bett und Schränken ist, und plane etwas Luft ein. Wird es nur knapp, kommt er dort nicht zuverlässig drunter."
        ]
      },
      {
        titel: "Teppiche, Fransen und Kabel",
        absaetze: [
          "Hochflor und Teppiche mit Fransen bringen viele Roboter an ihre Grenzen: Fransen wickeln sich um die Bürste, und auf hohem Flor fahren sich manche fest. Schlag die Fransen unter den Teppich oder sperr ihn in der App. Kabel und Socken räumst du vor dem Start besser weg, bei Modellen ohne Kamera erst recht."
        ]
      },
      {
        titel: "Wie viel Strom er braucht",
        absaetze: [
          "Eine Putzrunde braucht nur wenige Hundertstel Kilowattstunden. Mehr macht die Station aus, die rund um die Uhr am Strom hängt: etwa 1 bis 4 Watt, also bis zu rund 35 kWh im Jahr. Beispielrechnungen kommen für Roboter und Station zusammen auf etwa 30 bis 60 kWh im Jahr.",
          "Beim Strom nehmen sich Roboter und Staubsauger mit Kabel nicht viel. Der Roboter spart dir also Zeit, nicht Strom."
        ]
      }
    ],
    verweis: {
      text: "Welche Modelle ich empfehle und wie viel Zeit du mit deinen eigenen Zahlen sparst, siehst du auf meiner Seite zum Saug- und Wischroboter.",
      knopf: "Zum Saug- und Wischroboter mit Rechner"
    },
    wannNicht: [
      "Für die Station fehlt der Platz: rund 40 cm an der Wand und davor 0,8 bis 1,5 m frei.",
      "Bei dir liegen viele Hochflor-Teppiche oder Teppiche mit Fransen, die du weder umschlagen noch sperren willst.",
      "Auf deinem Boden liegt oft viel herum, und du willst vor dem Start nicht kurz aufräumen.",
      "Deine Möbel stehen so tief, dass auch ein flaches Modell mit etwa 8 cm nicht drunter passt, und genau dort willst du sauber machen.",
      "Deine Türschwellen sind höher als etwa 2 cm: Das schaffen meist nur Modelle mit Kletterhilfe.",
      "Du saugst nur einmal pro Woche, wischst kaum und bist damit zufrieden: Dann spart er dir bei 30 m² laut meinem Rechner nur ein paar Minuten pro Woche."
    ],
    fragen: [
      {
        f: "Reicht ein günstiger Roboter für eine kleine Wohnung?",
        a: "Meist ja, wenn er per Laser navigiert. Dann fährt er in Bahnen, und du stellst in der App Zeitplan, Räume und Sperrzonen ein. Ohne Kamera räumst du Kabel und Socken vorher weg."
      },
      {
        f: "Kann er fahren, während ich im Homeoffice arbeite?",
        a: "Ja, aber du hörst ihn, ungefähr so laut wie ein Gespräch. Lass ihn lieber in der Mittagspause fahren, oder schick ihn in der App nur in die Räume, in denen du gerade nicht sitzt."
      },
      {
        f: "Brauche ich die Wischfunktion?",
        a: "Bei viel Hartboden wie Fliesen, Laminat oder Parkett auf jeden Fall: Der Boden bleibt sauber, und den Wischeimer brauchst du kaum noch. Hast du vor allem Teppich, oder wischt du ohnehin gern selbst, reicht ein Roboter, der nur saugt. Der kostet oft nur die Hälfte."
      },
      {
        f: "Schafft er Türschwellen?",
        a: "Die meisten Modelle schaffen Schwellen bis etwa 2 cm. Höhere schaffen Modelle mit Kletterhilfe, einige inzwischen mehr als 5 cm."
      },
      {
        f: "Was muss ich noch selbst machen?",
        a: "Alle paar Wochen den Staubbeutel wechseln und ab und zu die Bürste sauber machen. Beim Wischroboter füllst du Frischwasser nach und leerst das Schmutzwasser, sobald er Bescheid sagt. Lass es aber nicht tagelang stehen, sonst fängt es an zu riechen."
      }
    ],
    quellen: [
      {
        name: "Mein Rechner auf der Seite zum Saug- und Wischroboter",
        text: "die Zeiten für 30 und 60 m², die Annahmen stehen dort unter „So rechne ich“"
      },
      {
        name: "Stiftung Warentest: Saugroboter im Test (Juni 2026)",
        text: "Bauhöhe, Türschwellen, Größe der Stationen, Kabel vor dem Start hochlegen und Teppiche per App ausschließen"
      },
      {
        name: "Stiftung Warentest: Saug-Wisch-Roboter im Test (Dezember 2025)",
        text: "zwölf Roboter mit Station, auf Teppich überzeugen die meisten nicht"
      },
      {
        name: "ÖKO-TEST: „Saugroboter: Was kostet das pro Jahr?“ (August 2023)",
        text: "Akku rund 31 Wattstunden, Station 3 bis 4 Watt rund um die Uhr, Staubsauger mit Kabel fast immer günstiger"
      },
      {
        name: "netzwelt.de: Stromverbrauch von Saugrobotern (Februar 2026)",
        text: "69 Watt beim Saugen, etwa 4 Watt im Stand-by, rund 50 kWh im Jahr bei zwei Stunden täglich"
      },
      {
        name: "t-online: Staubsauger oder Saugroboter, was ist günstiger? (April 2026)",
        text: "35 bis 50 kWh im Jahr mit Station, nur wenig weniger als ein Staubsauger mit Kabel"
      },
      {
        name: "Heidelberg24 (September 2022) und drohnen.de (2019)",
        text: "weitere Rechnungen zum Strom von Saugrobotern im Vergleich zum Staubsauger"
      },
      {
        name: "smarthomeassistent.de: Leiser Saugroboter (August 2026)",
        text: "meist 55 bis 65 dB, Absaugen in der Station kurz 75 bis 80 dB"
      },
      {
        name: "netzwelt.de: Saugroboter-Lautstärke (Februar 2026) und Absaugstationen (März 2026)",
        text: "meist 60 bis 70 dB, 60 dB entsprechen einem normalen Gespräch, die Station für einige Sekunden 80 bis 90 dB"
      },
      {
        name: "testsiegertv.com: Absaugstationen (Juli 2021)",
        text: "Absaugen bis 90 dB, dauert nur wenige Sekunden"
      },
      {
        name: "home&smart: Flache Saugroboter im Test (November 2026)",
        text: "normale Roboter 9 bis 12 cm hoch, flache 7 bis 9 cm"
      },
      {
        name: "home&smart: LiDAR gegen Kamera (November 2026)",
        text: "der Laser baut die Karte, nur die Kamera erkennt ein Kabel als Kabel, sonst wickelt es sich um die Bürste"
      },
      {
        name: "home&smart: Saugroboter-Türschwellen-Test (September 2026)",
        text: "ohne Kletterhilfe meist 2 cm, einzelne Modelle deutlich mehr"
      },
      {
        name: "smarthomeassistent.de: Roborock fährt nicht unter Möbel (Juni 2023)",
        text: "ein paar Millimeter mehr reichen oft nicht, lieber Luft einplanen"
      },
      {
        name: "smarthomeassistent.de: Teppiche mit Fransen (Mai 2023) und Saugroboter für hohe Türschwellen (Juli 2026)",
        text: "Fransen wickeln sich um die Bürste, unter den Teppich schlagen hilft, einige Modelle klettern über 5 cm"
      },
      {
        name: "smarthomeassistent.de: Test Roborock Q10 S5+ (Juli 2026) und Test Roborock Q7 L5+ (Mai 2026)",
        text: "Laser-Navigation in der unteren Preisklasse, auf Hochflor festgefahren, keins von 53 Hindernissen erkannt"
      },
      {
        name: "netzwelt.de: Saugroboter-Navigation und Saugroboter für Teppiche (Februar 2026)",
        text: "Laser schon bei günstigeren Modellen, Karten und Sperrbereiche in der App, Hochflor und Fransen als Grenze"
      },
      {
        name: "Herstellerangaben und Anleitungen",
        text: "Platz vor und neben der Station laut Roborock (Q5 Pro, Q8 Max+), Kärcher (RCV 5) und Ecovacs, Maße der Stationen laut Kärcher und Anker, Lautstärke laut Hoover, Anker und Ecovacs, Strom, Teppichkanten und Türschwellen laut Anker"
      }
    ],
    geprueft: "2026-11-04",
    seitenTitel: "Lohnt sich ein Saugroboter für eine kleine Wohnung?"
  },
  {
    id: "airfryer-oder-backofen",
    produkt: "airfryer",
    geprueft: "2026-11-04",
    titel: "Airfryer oder Backofen: Was ist günstiger?",
    frage: "Airfryer oder Backofen: Was ist günstiger?",
    seitenTitel: "Airfryer oder Backofen: Was ist günstiger?",
    beschreibung: "Wie viel Strom Airfryer und Backofen pro Gericht brauchen, was das in Cent ausmacht und wann der Backofen gleichzieht.",
    kurzantwort: "Für kleine Mengen ist der Airfryer günstiger: In Tests braucht er pro Gericht oft nur die Hälfte des Stroms oder noch weniger. Bei 37 Cent pro kWh sparst du so etwa 13 bis 33 Cent pro Gericht. Brauchst du für eine große Menge mehrere Durchgänge, ist der Backofen gleich gut oder sogar günstiger.",
    abschnitte: [
      {
        titel: "So viel Strom braucht ein Gericht",
        absaetze: [
          "Mehrere Tests und Vergleiche zeigen, wie viel Strom dasselbe Gericht im Airfryer und im Backofen braucht. Die Kosten habe ich mit 37 Cent pro kWh gerechnet, dem Durchschnitt in Deutschland. In Österreich und der Schweiz liegt der Strompreis bei etwa 30 Cent, dort kostet jedes Gericht etwas weniger."
        ],
        tabelle: {
          kopf: ["Gericht","Airfryer","Backofen","Quelle"],
          zeilen: [
            ["Pommes, 2 Portionen","0,29 kWh (11 Cent)","0,86 kWh (32 Cent)","Which?, 2026"],
            ["Pommes, 1 Portion","0,35 kWh (13 Cent)","0,7 kWh (26 Cent)","inside digital, 2025"],
            ["Ofenkartoffel","0,39 kWh (15 Cent)","1,08 kWh (40 Cent)","Which?, 2026"],
            ["Ganzes Hähnchen","0,54 kWh (20 Cent)","1,16 kWh (43 Cent)","Which?, 2026"],
            ["Chicken Wings","0,2 bis 0,3 kWh (7 bis 11 Cent)","1,0 bis 1,2 kWh (37 bis 44 Cent)","stromguide.com über VOL.AT, 2025"]
          ]
        }
      },
      {
        titel: "Warum der Airfryer sparsamer ist",
        absaetze: [
          "Sein Garraum ist klein, und die heiße Luft ist schnell da. Vorheizen musst du meist gar nicht oder nur ein paar Minuten, ein Backofen braucht dafür etwa 10 bis 15 Minuten. Auch das Garen selbst dauert meist kürzer. Laut Stiftung Warentest sind Airfryer schneller als Backöfen und sparsamer im Stromverbrauch."
        ]
      },
      {
        titel: "Wann der Backofen gleichzieht",
        absaetze: [
          "Der Vorteil gilt, solange alles in einem Durchgang in den Korb passt. Kochst du für viele und brauchst zwei oder drei Durchgänge, schrumpft die Ersparnis, und bei großen Mengen ist der Backofen gleich gut oder günstiger.",
          "Für Pizza, Blechkuchen oder einen großen Auflauf bleibt der Ofen ohnehin die bessere Wahl. Dort zählt Fläche, und die hat der Airfryer nicht."
        ]
      },
      {
        titel: "Was das im Jahr ausmacht",
        absaetze: [
          "Machst du viermal pro Woche ein Gericht im Airfryer statt im Backofen, sparst du laut meinem Rechner bei 37 Cent pro kWh rund 42 Euro im Jahr. Bei 30 Cent pro kWh sind es rund 34 Euro. Kochst du nur einmal pro Woche warm, sind es gut 10 Euro.",
          "Nur wegen des Stroms lohnt sich ein Airfryer darum kaum. Mehr gewinnst du an Zeit: kein Vorheizen, kein Blech schrubben und kaum Abwasch, laut meinem Rechner etwa 18 Minuten pro Gericht."
        ]
      },
      {
        titel: "Meine Erfahrung",
        art: "erfahrung",
        absaetze: [
          "Seit ich meinen Airfryer habe, habe ich meine Pfannen nicht mehr benutzt. Und alles schmeckt besser: Gemüse wird knackiger und schmeckt intensiver, Hähnchen wird jedes Mal perfekt zart. Dazu habe ich quasi keinen Abwasch mehr. Es brennt nie etwas an, die Körbe packe ich einfach in die Spülmaschine oder wische sie am Ende mit einem feuchten Lappen aus."
        ]
      },
      {
        titel: "Wenn du beim Backofen bleibst",
        absaetze: [
          "Auch mit dem Ofen kannst du Strom sparen. Für die meisten Gerichte musst du ihn nicht vorheizen, nur bei manchen Teigen wie Biskuit oder Plätzchen. Mit Umluft stellst du die Temperatur etwa 20 Grad niedriger ein als bei Ober- und Unterhitze und sparst so Strom. Und bei langen Garzeiten schaltest du ihn 5 bis 10 Minuten früher aus, die Restwärme gart weiter."
        ]
      }
    ],
    verweis: {
      text: "Wie viel du mit deinem Strompreis und deinen Gerichten sparst und welche Airfryer ich empfehle, siehst du auf meiner Airfryer-Seite.",
      knopf: "Zum Airfryer mit Rechner"
    },
    wannNicht: [
      "Du kochst meist für vier oder mehr Personen auf einmal und müsstest im Airfryer mehrere Durchgänge machen.",
      "Du backst vor allem Pizza, Blechkuchen oder große Aufläufe.",
      "Du willst nur Strom sparen: Pro Gericht sind es Cent-Beträge, und bis sie den Kaufpreis wieder einspielen, dauert es eine Weile.",
      "Du kochst nur selten warm: Dann sparst du im Jahr nur wenige Euro.",
      "Auf deiner Arbeitsfläche ist kein Platz für ein weiteres Gerät."
    ],
    fragen: [
      { f: "Muss ich einen Airfryer vorheizen?", a: "Meist nicht, oder nur ein paar Minuten. Ein Backofen braucht dafür etwa 10 bis 15 Minuten." },
      { f: "Wie viel kostet ein Gericht im Airfryer?", a: "Meist braucht es 0,2 bis 0,5 kWh, bei 37 Cent pro kWh also etwa 7 bis 20 Cent. Im Backofen ist es für die gleiche Menge oft doppelt so viel oder mehr." },
      { f: "Ist Umluft im Backofen genauso sparsam?", a: "Umluft spart gegenüber Ober- und Unterhitze Strom, weil du etwa 20 Grad niedriger einstellen kannst. Für kleine Mengen bleibt der Airfryer trotzdem sparsamer, weil er einen viel kleineren Raum aufheizt." },
      { f: "Lohnt sich ein Airfryer für eine Person?", a: "Gerade dann. Bei kleinen Portionen ist der Unterschied zum Backofen am größten. Machst du meist nur eine Sache auf einmal, reicht ein Gerät mit einem Korb." }
    ],
    quellen: [
      { name: "Which?: „Air fryer vs oven“ (Oktober 2026)", text: "Strom pro Gericht gemessen, Pommes, Ofenkartoffel und ganzes Hähnchen, im Airfryer weniger als die Hälfte, bei mehreren Durchgängen schrumpft der Vorteil" },
      { name: "Choice: Air fryer gegen Backofen (Oktober 2023)", text: "drei Gerichte im Vergleich, im Airfryer etwa halb so viel Strom pro Stunde, der Backofen mit 15 Minuten Vorheizen" },
      { name: "inside digital: Mythen rund um den Airfryer (November 2025)", text: "Pommes im Airfryer etwa 0,35 kWh, im Backofen etwa 0,7 kWh, für große Mengen eher den Backofen" },
      { name: "VOL.AT mit Zahlen von stromguide.com (Oktober 2025)", text: "Chicken Wings im Backofen 1,0 bis 1,2 kWh, im Airfryer 0,2 bis 0,3 kWh, für Familien mit großen Mengen der Backofen" },
      { name: "testundtipps.de: Heißluftfritteuse oder Backofen (August 2026)", text: "Vorheizen 2 bis 3 Minuten statt 10 bis 15, je Durchgang Pommes 0,3 bis 0,5 kWh, bei großen Mengen etwa gleichauf" },
      { name: "home&smart (November 2026) und Utopia (August 2026)", text: "mehrere Durchgänge schmälern die Ersparnis, nur wegen des Stroms lohnt sich ein Airfryer kaum" },
      { name: "Stiftung Warentest: Heißluftfritteusen im Test (September 2026)", text: "Airfryer garen schneller als Backöfen und sind sparsamer, eine große Pommes-Portion garen viele nicht gleichmäßig" },
      { name: "ÖKO-TEST: Energie sparen beim Backofen (Januar 2026)", text: "Vorheizen meist unnötig, mit Umluft 20 Grad weniger, bei langen Garzeiten 10 Minuten früher ausschalten" },
      { name: "Bundeszentrum für Ernährung, über dpa und Utopia (August 2024)", text: "mit Umluft 20 bis 30 Grad weniger, ohne Vorheizen über 20 Prozent weniger Energie, 5 bis 10 Minuten früher ausschalten" },
      { name: "oesterreich.gv.at: Herde und Backöfen (März 2025)", url: "https://www.oesterreich.gv.at/de/themen/umwelt_und_klima/energie_und_ressourcen_sparen/2/Seite.2430150", text: "mit Umluft bis zu 20 Prozent weniger Energie, rechtzeitig abschalten und die Restwärme nutzen" },
      { name: "Mein Rechner auf der Airfryer-Seite", text: "Backofen etwa 1,0 kWh und Airfryer etwa 0,45 kWh pro Gericht, gegenüber dem Backofen 18 Minuten weniger für Vorheizen, Blech und Abwasch, die Annahmen stehen dort unter „So rechne ich“" },
      { name: "BDEW (Bundesverband der Energie- und Wasserwirtschaft): Strompreisanalyse August 2026", url: "https://www.bdew.de/media/documents/BDEW_Strompreisanalyse_082026.pdf", text: "37 Cent pro kWh für Haushalte in Deutschland" },
      { name: "E-Control (österreichische Regulierungsbehörde): Strompreismonitor Januar 2026", url: "https://www.e-control.at/documents/1785851/1811582/preismonitor_jan_26.pdf/b2376bf8-3337-4ba0-ad26-f98a443ab871?t=1767782911898", text: "im Schnitt etwa 30 Cent pro kWh bei den Landesversorgern in Österreich" },
      { name: "ElCom (Eidgenössische Elektrizitätskommission): Newsletter 9/2025", url: "https://www.elcom.admin.ch/dam/de/sd-web/znXqHISH0pFP/Newsletter_09-2025_D.pdf", text: "27,7 Rappen pro kWh für einen typischen Haushalt in der Schweiz 2026" },
      { name: "Herstellerangaben", text: "Vorheizen und Programme laut Cosori" }
    ]
  }
];
