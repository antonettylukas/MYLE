/*
  Die Ratgeber von MYLE (myle.life/ratgeber und myle.life/ratgeber-<id>). Jeder Eintrag beantwortet eine Frage.
  frage, seitenTitel, beschreibung  Überschrift, Titel und Beschreibung für Suchmaschinen
  kurzantwort   die Antwort in 2–3 Sätzen, steht oben im Kasten „Kurz gesagt“
  abschnitte    [{ titel, absaetze, punkte? }]; art: "erfahrung" zeigt den Abschnitt als Zitat-Kasten von Lukas
  wannNicht, fragen, quellen   wie auf den Produktseiten; Quellen ohne url stehen nur als Text da
  produkt, verweis   Kasten mit Link auf die passende Produktseite und ihren Rechner
  verweis.weitere   optional: weitere Knöpfe [{ knopf, link }] zu anderen Produktseiten (link ohne Sprachordner, z. B. "akkusauger")
  weitereProdukte   optional: weitere Produktseiten, die den Ratgeber unter „Passende Ratgeber“ zeigen
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
  },
  {
    id: "saugroboter-haustiere",
    produkt: "saugroboter",
    geprueft: "2026-11-04",
    titel: "Saugroboter mit Haustieren: Worauf kommt es an?",
    frage: "Saugroboter mit Haustieren: Worauf kommt es an?",
    seitenTitel: "Saugroboter mit Haustieren: Worauf kommt es an?",
    beschreibung: "Welche Bürste, Station und Kamera ein Saug- und Wischroboter mit Hund oder Katze braucht, wie sich dein Tier an ihn gewöhnt und wann er nichts für dich ist.",
    kurzantwort: "Auf drei Dinge: eine Bürste, um die sich Tierhaare kaum wickeln, eine Station, die ihn leer saugt, und eine Kamera, die Hundehaufen meist erkennt und umfährt. In der App sperrst du dazu Napf, Katzenklo und Schlafplatz. Gerade mit Tier lohnt er sich: Saugst du wegen der Haare täglich, spart er dir bei 60 m² laut meinem Rechner rund zwei Stunden pro Woche.",
    abschnitte: [
      {
        titel: "So viel Zeit sparst du mit Tier",
        absaetze: [
          "Saugst du wegen der Haare jeden Tag, spart er dir bei 60 m² laut meinem Rechner knapp zwei Stunden pro Woche, samt Vorbereitung. Wischst du dazu einmal pro Woche, sind es gut zwei. Im Jahr kommen so 99 bis 119 Stunden zusammen, bei zweimal Saugen und einmal Wischen sind es 45.",
          "Der Roboter fährt dagegen jeden Tag nach Zeitplan, und du musst dafür so gut wie nichts tun."
        ]
      },
      {
        titel: "Meine Erfahrung mit Kater",
        art: "erfahrung",
        absaetze: [
          "Meinen ersten Saugroboter habe ich mir unter anderem wegen meines Katers gekauft, den ich zu der Zeit hatte. Der hat ständig Katzenstreu in der Wohnung verteilt, und das hat mich wahnsinnig gemacht. In meiner ersten und zweiten Wohnung damals hat mir der Roboter mit dem Katzenstreu sehr geholfen."
        ]
      },
      {
        titel: "Eine Bürste, um die sich Haare kaum wickeln",
        absaetze: [
          "Gummi statt Borsten hilft schon etwas. Entscheidend ist aber, wie die Hauptbürste gebaut und gelagert ist.",
          "Dreame zum Beispiel setzt bei einigen Robotern zwei Walzen ein, die nur auf einer Seite befestigt sind, die andere Seite ist offen. Drehung und Luftstrom schieben die Haare zu diesem offenen Ende, und dort werden sie abgesaugt. In Tests verfing sich so selbst langes Haar kaum.",
          "Ähnlich arbeiten andere Hersteller: Narwal hängt eine kegelförmige Bürste nur an einer Seite auf. Roborock teilt die Bürste in der Mitte, dort werden die Haare abgesaugt.",
          "Auf Hartboden putzen viele Roboter gut, auf Teppich zeigt sich der Unterschied. Wichtig für Tierhalter ist laut Stiftung Warentest das Urteil „Aufnehmen von Fasern“ auf Teppich. Dort reichen die Noten von gut bis mangelhaft."
        ]
      },
      {
        titel: "Eine Station, die ihn leer saugt",
        absaetze: [
          "Der Behälter im Roboter ist klein und mit Fell schnell voll. Ohne Station leerst du ihn mit Tier oft jeden Tag selbst. Eine Station saugt ihn nach dem Putzen leer, und du wechselst nur noch ab und zu den Beutel.",
          "Das ist je nach Modell alle paar Wochen bis Monate fällig, mit haarendem Tier eher früher. Meist schließt sich der Beutel beim Herausnehmen, so kommst du mit Staub und Haaren kaum in Berührung."
        ]
      },
      {
        titel: "Eine Kamera, die Hundehaufen erkennt",
        absaetze: [
          "Fährt ein Roboter durch einen Hundehaufen oder Erbrochenes, verteilt er es in der ganzen Wohnung. Ohne Kamera erkennt er so etwas in der Regel nicht. Modelle mit Kamera und KI erkennen es meist und fahren drumherum: In Tests mit nachgebauten Hundehaufen umfuhren gute Modelle fast alle.",
          "Eine Garantie gibt es aber nicht. Je flüssiger und flacher ein Malheur ist, desto eher übersieht es auch eine Kamera. Ist dein Tier noch jung, schon alt oder gerade krank, wirf vor dem Start kurz einen Blick auf den Boden."
        ]
      },
      {
        titel: "Napf, Katzenklo und Schlafplatz sperren",
        absaetze: [
          "Leg in der App Sperrzonen um Futter- und Wassernapf, Katzenklo und Schlafplatz an. So lässt der Roboter die Näpfe stehen, und dein Tier hat Plätze, an denen es ungestört bleibt."
        ]
      },
      {
        titel: "So gewöhnst du dein Tier an den Roboter",
        absaetze: [
          "Mit etwa 55 bis 70 Dezibel ist ein Roboter leiser als ein normaler Staubsauger. Kurz laut wird nur die Station, wenn sie ihn leer saugt. Gewöhn dein Tier trotzdem in kleinen Schritten an ihn.",
          "Lass dein Tier den Roboter zuerst ausgeschaltet beschnuppern. Danach startest du ihn in einem anderen Raum, auf leiser Stufe und während du zu Hause bist. Bleibt dein Tier ruhig oder wird es neugierig, gibt es ein Leckerli. Zwing es nie zum Roboter hin.",
          "Wichtig ist ein Rückzugsort, an den der Roboter nicht kommt. Erst wenn dein Tier entspannt bleibt, lässt du ihn nach Zeitplan fahren, während du unterwegs bist, beim Hund zum Beispiel während der Gassirunde."
        ]
      },
      {
        titel: "Ab und zu nachsehen: Bürste und Räder",
        absaetze: [
          "Bei einfachen Bürsten ziehst du mit Tier etwa einmal pro Woche aufgewickelte Haare ab, manche Hersteller nennen alle zwei Wochen. Bürsten gegen Verheddern brauchen das deutlich seltener. Haare sammeln sich außerdem an Seitenbürste und Rädern."
        ]
      }
    ],
    verweis: {
      text: "Welche Modelle ich empfehle, auch für Haushalte mit Haustieren, und wie viel Zeit du mit deinen eigenen Zahlen sparst, siehst du auf meiner Seite zum Saug- und Wischroboter.",
      knopf: "Zum Saug- und Wischroboter mit Rechner"
    },
    wannNicht: [
      "Deinem Tier passiert öfter ein Malheur, etwa weil es noch nicht stubenrein ist, und du willst kein Modell mit Kamera.",
      "Dein Tier gerät auch nach Wochen behutsamer Gewöhnung noch in Panik, sobald der Roboter fährt.",
      "Für die Station fehlt der Platz: Ohne sie leerst du den Behälter mit Tier oft jeden Tag selbst.",
      "Bei dir liegt vor allem Hochflor-Teppich: Dort holen viele Roboter Haare nicht gut heraus, und manche fahren sich fest.",
      "Näpfe, Körbchen und Spielzeug liegen jeden Tag woanders, und du willst sie weder wegräumen noch in der App sperren."
    ],
    fragen: [
      { f: "Erkennt der Roboter Hundekot?", a: "Mit Kamera und KI meist ja, ohne Kamera in der Regel nicht. Eine Garantie gibt es aber nicht, vor allem bei Flüssigem wie Erbrochenem." },
      { f: "Hat mein Hund oder meine Katze Angst vor dem Roboter?", a: "Manche Tiere anfangs schon, auch wenn er leiser ist als ein normaler Staubsauger. Mit Geduld und in kleinen Schritten gewöhnen sich viele daran." },
      { f: "Kann er Katzenstreu aufsaugen?", a: "Lose, trockene Streu kann er aufsaugen. Klumpen und feuchte Streu gehören aber nicht in den Roboter. Sperr darum eine kleine Zone ums Katzenklo, dann fährt er dort gar nicht erst hin." },
      { f: "Hilft der Roboter bei einer Tierhaarallergie?", a: "Er kann die Belastung senken, weil er regelmäßig saugt. Achte auf einen echten HEPA-Filter und eine Station mit Beutel: Dann bleibt der feine Staub im Gerät, und beim Wechseln kommst du mit ihm kaum in Berührung. Behandeln kann er eine Allergie aber nicht." },
      { f: "Wie viel Saugkraft brauche ich für Tierhaare?", a: "Die Empfehlungen gehen weit auseinander, von ein paar tausend bis über 20.000 Pascal. Verlässlicher ist das Testergebnis auf Teppich, denn dort zeigen sich die Unterschiede. Mindestens genauso wichtig ist eine Bürste, um die sich Haare gar nicht erst wickeln." }
    ],
    quellen: [
      { name: "Mein Rechner auf der Seite zum Saug- und Wischroboter", text: "die Zeiten für 60 m² bei täglichem Saugen mit und ohne Wischen und bei zweimal Saugen und einmal Wischen, die Annahmen stehen dort unter „So rechne ich“" },
      { name: "Stiftung Warentest: Saugroboter im Test (Juni 2026)", text: "Hindernistest mit einer Hundekot-Attrappe, für Tierhalter zählt das Aufnehmen von Fasern auf Teppich (von gut bis mangelhaft), Abwertung bei Störung durch lange Haare, für Hartboden gibt es deutlich mehr gute Roboter als für Teppich" },
      { name: "Stiftung Warentest: Saug-Wisch-Roboter im Test (Dezember 2025)", text: "auf Teppich überzeugen die meisten Roboter nicht" },
      { name: "c't (heise): Saugroboter mit Hinderniserkennung im Test (Dezember 2021)", text: "drei Roboter mit KI-Kamera umfuhren Attrappen von Hunde- und Katzenkot stets sicher" },
      { name: "Reviewed: iRobot Roomba j7+ gegen Samsung Jetbot AI+ (Juni 2023)", text: "Test mit nachgebauten Hundehaufen, der Roomba ohne eine Panne, der Jetbot stieß einen Haufen kurz an und wich dann aus" },
      { name: "smarthomeassistent.de: Erkennt ein Saugroboter Katzenkotze? (Mai 2023)", text: "Kot-Attrappen umfahren, keine Garantie bei Erbrochenem, flaches, flüssiges erkennt kein bekannter Roboter, sonst verteilt er das Malheur in der Wohnung" },
      { name: "smarthomeassistent.de: Saugroboter für Tierhaare (August 2026) und Absaugstation mit oder ohne Staubbeutel (Juni 2023)", text: "verhedderte Haare entfernst du von Hand, ein Beutel hält einen bis mehrere Monate, schließt sich beim Herausnehmen und hilft Allergikern" },
      { name: "netzwelt.de: Saugroboter für Tierhaare (Februar 2026)", text: "in Borsten verfangen sich Haare, Gummibürsten und Bürsten gegen Verheddern sind besser, ohne Station mehrfach täglich leeren, Beutel nach etwa zwei Monaten, KI-Erkennung für Tiere, die nicht stubenrein sind, HEPA-Filter, Lauf in der Gassizeit, Sperrzonen am Schlafplatz" },
      { name: "netzwelt.de: Saugroboter für Teppiche (Februar 2026)", text: "Hochflor bringt selbst Oberklasse-Modelle an ihre Grenzen" },
      { name: "saugroboter-portal.de: Welche Hauptbürsten gibt es bei Saugrobotern? (September 2026)", text: "um Borsten wickeln sich lange Haare schneller, an Gummibürsten verfangen sie sich deutlich weniger, mit Tieren die bessere Wahl" },
      { name: "home&smart: Saugroboter gegen Tierhaare und Saugroboter für Allergiker (beide Oktober 2026)", text: "gummierte Hauptbürsten und Systeme gegen Verheddern, kleine Staubbehälter im Roboter, Saugkraft ab 20.000 Pa bei mehreren Tieren, HEPA-Filter ab Klasse H13, Staub im Beutel luftdicht verschlossen" },
      { name: "testundtipps.de: Saugroboter-Wartung (Oktober 2026)", text: "Hauptbürste je nach Hersteller jede Woche oder alle zwei Wochen reinigen, mit Tieren und langen Haaren kann das zu selten sein, Beutel alle 2 bis 4 Monate" },
      { name: "tink: Saugroboter mit Hund und Katze (Oktober 2026)", text: "erst ausgeschaltet kennenlernen lassen, im Nebenraum starten, anfangs nur, wenn du da bist, Rückzugsorte, Leckerli und Geduld" },
      { name: "robo-freunde.de: Katze und Saugroboter, Saugroboter für Katzenstreu und Saugroboter und Katzenkotze (2023)", text: "Gewöhnung in kleinen Schritten, nie zwingen, Sperrzonen um Napf und Katzenklo, Boden vor dem Start prüfen, je flüssiger, desto schwerer erkennt er es" },
      { name: "Mähroboter Guru: Katze an Saugroboter gewöhnen (Juli 2024)", text: "ausgeschaltet beschnuppern lassen, im Nebenraum auf leiser Stufe starten, Leckerli, nie zwingen, erst unter Aufsicht, dann nach Zeitplan" },
      { name: "netzwelt.de: Saugroboter-Lautstärke (Februar 2026) und Absaugstationen (März 2026)", text: "meist 60 bis 70 dB, die Station einige Sekunden 80 bis 90 dB, Beutel schließen sich bei der Entnahme selbst und halten zwei bis drei Monate, mit Tierhaaren fällt besonders viel Schmutz an" },
      { name: "smarthomeassistent.de: Leiser Saugroboter (August 2026) und testsiegertv.com: Absaugstationen (Juli 2021)", text: "meist 55 bis 65 dB, Absaugen in der Station ein paar Sekunden lang bis 90 dB" },
      { name: "Vacuum Wars: Dreame X50 Ultra Review (März 2025, aktualisiert September 2026)", text: "Doppelwalze an einem Ende verjüngt, die Haare wandern zu dieser Seite, im Test mit 18 cm langen Haaren verhedderte sich nichts" },
      { name: "home&smart: Dreame X50 Ultra Complete im Test (April 2026) und Dreame X60 Pro Ultra (September 2026)", text: "kein einziges langes Haar in den Walzen, deutlich weniger Wartung, beim X60 setzten sich selbst 1 m lange Haare nicht fest" },
      { name: "smarthomeassistent.de: Dreame X50 Ultra Complete (Juli 2026)", text: "im Haartest alle Haare aufgenommen, ohne Aufwicklung an Haupt- und Seitenbürste" },
      { name: "winfuture: Narwal Freo Z10 im Test (Juli 2025) und china-gadgets: Narwal Freo Z10 Ultra (Mai 2025)", text: "kegelförmige Hauptbürste, nur auf einer Seite aufgehängt, nach mehreren Läufen mit langen Haaren und Tierhaaren nahezu frei, die offene Walze verhindert Haarverwicklungen" },
      { name: "netzwelt.de: Roborock Qrevo Curv im Test (September 2024)", text: "zweigeteilte Hauptbürste, die Haare landen über die Lücke in der Mitte im Saugschacht" },
      { name: "testsiegertv.com: Roborock Qrevo Curv im Test (Februar 2025)", text: "zwei kleinere Bürsten bringen die Haare zur Mitte, dort werden sie abgesaugt, mit 5, 10 und 20 cm langen Haaren keine Einwicklungen, 38 cm lange wickelten sich erst auf und wurden dann abgesaugt" },
      { name: "Herstellerangaben und Ratgeber der Hersteller", text: "Ecovacs (keine Garantie bei Tierkot, Sperrzonen um Körbchen und Katzenklo, nasse oder verklumpte Streu nie aufsaugen, trockene Streu schon), Dreame (flache, feuchte Malheurs schwer zu erkennen, Sperrzonen um Katzenklo, Körbchen und Näpfe, Boden kurz prüfen), MOVA (Beutel mit Haustieren schneller voll, Haare an Bürsten und Rädern eventuell jede Woche entfernen), Roborock (Haare um die Radachsen und an der Seitenbürste regelmäßig entfernen), Ecovacs (Tierhaare wickeln sich um die Radachse), Dreame (HyperStream Detangling DuoBrush: zwei Walzen an einem Arm, nur auf einer Seite befestigt, Haare wandern zum freien Ende und werden dort abgesaugt, bis 30 cm ohne Verheddern, bei sehr vielen Haaren trotzdem säubern), Narwal (kegelförmige Walze an einem einzigen Arm), Roborock (DuoDivide: geteilte Bürste, Haare werden in der Mitte abgesaugt)" }
    ]
  },
  {
    id: "waschtrockner-oder-waschmaschine-und-trockner",
    produkt: "waschtrockner",
    geprueft: "2026-11-04",
    titel: "Waschtrockner oder Waschmaschine und Trockner: Was ist besser?",
    frage: "Waschtrockner oder Waschmaschine und Trockner: Was ist besser?",
    seitenTitel: "Waschtrockner oder Waschmaschine und Trockner: Was ist besser?",
    beschreibung: "Platz, Strom, Wasser und Zeit im Vergleich: wann ein Waschtrockner besser passt, wann Waschmaschine und Wärmepumpentrockner, und was das im Monat ausmacht.",
    kurzantwort: "Hast du wenig Platz, ist der Waschtrockner die bequemere Wahl: ein Gerät, kein Umräumen, morgens rein und abends trocken. Hast du Platz für zwei Geräte und wäschst viel, sind Waschmaschine und Wärmepumpentrockner besser. Sie trocknen mehr auf einmal und brauchen fürs Trocknen oft nur die Hälfte des Stroms oder weniger.",
    abschnitte: [
      {
        titel: "Platz: ein Gerät oder zwei",
        absaetze: [
          "Ein Waschtrockner passt genau dorthin, wo sonst die Waschmaschine steht, und braucht dieselben Anschlüsse. Zwei Geräte nebeneinander brauchen doppelt so viel Stellfläche.",
          "Es geht aber auch platzsparend: Mit einem Zwischenbausatz stellst du den Trockner auf die Waschmaschine, nie umgekehrt. Dann brauchen beide nur die Fläche einer Waschmaschine, dafür Platz nach oben. Ohne Bausatz kann der Trockner beim Schleudern verrutschen."
        ]
      },
      {
        titel: "Wie viel du auf einmal trocknen kannst",
        absaetze: [
          "Ein Waschtrockner wäscht meist 7 bis 10 kg, trocknet aber nur 4 bis 6 kg. Eine volle Waschladung braucht also bis zu zwei Trockengänge, oder du hängst den Rest auf. Willst du in einem Rutsch waschen und trocknen, füllst du ihn darum nur gut halb.",
          "Ein eigener Trockner trocknet dagegen eine volle Ladung auf einmal. Und während er trocknet, wäscht die Maschine schon die nächste."
        ]
      },
      {
        titel: "Strom und Wasser",
        absaetze: [
          "Den größten Unterschied macht das Trocknen. Ein Wärmepumpentrockner braucht für eine volle Ladung meist etwa 1 bis 2 kWh. Ein Waschtrockner ohne Wärmepumpe braucht gut 2 kWh, und das für nur 6 kg. Für dieselbe Wäsche braucht der Wärmepumpentrockner darum oft nur die Hälfte des Stroms oder weniger.",
          "Viele Waschtrockner kühlen beim Trocknen außerdem mit Leitungswasser. Deshalb brauchen sie mehr Wasser als Waschmaschine und Trockner zusammen.",
          "Es gibt auch Waschtrockner mit Wärmepumpe. Sie brauchen weniger Strom und Wasser, und bei Stiftung Warentest war 2023 ein solches Modell Testsieger."
        ]
      },
      {
        titel: "Zeit: Was schneller fertig ist",
        absaetze: [
          "Gegenüber dem Wäscheständer sparen dir beide Lösungen Zeit: Aufhängen und Abnehmen kosten bei drei Wäschen pro Woche laut meinem Rechner rund eine halbe Stunde pro Woche.",
          "Waschen und Trocknen dauern im Waschtrockner mit voller Ladung oft 8 Stunden und mehr. Im Test von Konsument brauchten Wärmepumpentrockner für eine volle Ladung gut 2 bis gut 3 Stunden, dazu kommt das Waschen davor.",
          "Das muss dich aber nicht stören: Mit der Endzeit startet der Waschtrockner so, dass er fertig ist, wenn du heimkommst. Willst du an einem Tag mehrere Ladungen schaffen, sind zwei Geräte schneller."
        ]
      },
      {
        titel: "Meine Erfahrung",
        art: "erfahrung",
        absaetze: [
          "Ich habe einen Waschtrockner von Haier und will nie wieder ohne. Morgens kommt die Wäsche rein, und wenn ich von der Arbeit komme, ist sie gewaschen und getrocknet. Bügeln muss ich auch nicht mehr: Das Dampfprogramm i-⁠Refresh macht die Kleidung frisch, und sie kommt vor allem faltenfrei raus."
        ]
      },
      {
        titel: "Was es kostet",
        absaetze: [
          "In der Anschaffung ist ein Waschtrockner oft günstiger als Waschmaschine und Trockner zusammen. Dafür kostet das Trocknen mehr Strom: Bei drei Ladungen pro Woche und 37 Cent pro kWh sind es laut meinem Rechner gut 10 € im Monat, bei 30 Cent knapp 9 €.",
          "Ein Wärmepumpentrockner käme für dieselbe Wäsche oft mit der Hälfte oder weniger aus. Laut Stiftung Warentest können die höheren Betriebskosten den günstigeren Kaufpreis eines Waschtrockners über die Jahre wieder aufzehren."
        ]
      }
    ],
    verweis: {
      text: "Welchen Waschtrockner ich empfehle und was er dir mit deinen eigenen Zahlen an Zeit spart und an Strom kostet, siehst du auf meiner Waschtrockner-Seite.",
      knopf: "Zum Waschtrockner mit Rechner"
    },
    wannNicht: [
      "Du wäschst für eine große Familie mehrere Ladungen am Tag.",
      "Du willst volle Ladungen in einem Rutsch waschen und trocknen.",
      "Du hast Platz für zwei Geräte, nebeneinander oder gestapelt, und willst möglichst wenig Strom und Wasser verbrauchen.",
      "Du brauchst die Wäsche oft schnell wieder: Waschen und Trocknen dauern zusammen meist 8 Stunden und mehr.",
      "Dir ist besonders gleichmäßig trockene Wäsche wichtig: Viele Waschtrockner trocknen nicht so gut wie ein eigener Trockner."
    ],
    fragen: [
      { f: "Kann ich den Trockner auf die Waschmaschine stellen?", a: "Ja, mit einem passenden Zwischenbausatz und immer mit dem Trockner oben. Der Rahmen hält ihn fest und fängt die Vibrationen beim Schleudern ab. Am einfachsten klappt das mit zwei Geräten derselben Marke und Größe." },
      { f: "Trocknet ein Waschtrockner so gut wie ein Trockner?", a: "Meist nicht ganz: In Tests trocknen viele Waschtrockner ungleichmäßiger, und manchmal bleibt die Wäsche etwas feucht. Die besten Modelle schneiden aber gut ab. Wichtig ist, dass du ihn zum Trocknen nicht zu voll machst." },
      { f: "Warum braucht ein Waschtrockner beim Trocknen Wasser?", a: "Viele kühlen den warmen, feuchten Dampf mit Leitungswasser ab, damit er kondensiert und abläuft. Das sind je nach Gerät etliche Liter pro Trockengang. Es gibt aber auch Modelle, die dafür kein Wasser brauchen, etwa mit Wärmepumpe." },
      { f: "Lohnt sich ein Waschtrockner mit Wärmepumpe?", a: "Wenn du oft trocknest, ja. Er braucht weniger Strom und Wasser: Stiftung Warentest rechnete beim Testsieger von 2023 mit rund 760 € weniger Betriebskosten in zehn Jahren als bei den getesteten Geräten von Bosch und Siemens. Dafür kostet er in der Anschaffung deutlich mehr." }
    ],
    quellen: [
      { name: "Mein Rechner auf der Seite zum Waschtrockner", text: "die Stromkosten fürs Trocknen bei drei Ladungen pro Woche mit 2,2 kWh pro Ladung und die Zeit fürs Aufhängen und Abnehmen, die Annahmen stehen dort unter „So rechne ich“" },
      { name: "Verbraucherzentrale: Waschtrockner, Kombigeräte sind platzsparende Stromfresser (August 2026)", url: "https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/waschtrockner-kombigeraete-sind-platzsparende-stromfresser-37060", text: "mehr Strom und Wasser als Waschmaschine und Trockner, Kühlen mit Wasser, wäscht 7 bis 9 kg und trocknet 4 bis 6 kg, sinnvoll vor allem in sehr kleinen Wohnungen" },
      { name: "Umweltbundesamt: Wäschetrockner (März 2026)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/elektrogeraete/waeschetrockner", text: "Wärmepumpentrockner 73 bis 97 kWh pro 100 Trocknungen, ältere Geräte rund 340 kWh, Waschtrockner weniger effizient als zwei Einzelgeräte" },
      { name: "co2online: Stromverbrauch von Trockner und Waschmaschine (April 2023)", url: "https://www.co2online.de/energie-sparen/strom-sparen/strom-sparen-stromspartipps/waschmaschine-trockner/", text: "sparsamste Wärmepumpentrockner um 156 kWh im Jahr bei 7 kg, bis zu 80 % weniger Strom als ein Kondenstrockner" },
      { name: "HEA (Fachgemeinschaft für effiziente Energieanwendung): Waschtrockner", text: "Kühlwasser je nach Gerät 9 bis 35 Liter pro Trockengang, zum Trocknen nur die Hälfte bis zwei Drittel der Waschladung, eine volle Waschladung braucht bis zu zwei Trockengänge, Wärmepumpe spart Strom und Kühlwasser" },
      { name: "Stiftung Warentest: Waschtrockner im Test (Oktober 2023, aktualisiert August 2026)", text: "ein Programm dauerte über neun Stunden, in der Anschaffung oft günstiger als zwei Geräte, die Betriebskosten können das mit der Zeit aufzehren" },
      { name: "t-online (Oktober 2023) und desired.de (Februar 2025) zum Waschtrockner-Test von Stiftung Warentest (Heft 11/2023)", text: "Testsieger AEG mit Wärmepumpe, niedrigster Strom- und Wasserverbrauch, rund 760 € weniger Betriebskosten in zehn Jahren als die Geräte von Bosch und Siemens" },
      { name: "Stiftung Warentest: Wäschetrockner im Test (September 2026)", text: "die Wärmepumpe senkt den Stromverbrauch erheblich, Kondens- und Ablufttrockner sind überholte Stromfresser" },
      { name: "Konsument (VKI): Wäschetrockner-Test (September 2026)", text: "Wärmepumpentrockner für 8 kg Baumwolle schranktrocken 0,90 bis 1,82 kWh, Programmdauer 136 bis 192 Minuten" },
      { name: "Which?: Washer-dryer or washing machine and tumble dryer (Oktober 2026)", text: "im Jahr 216 Pfund Strom für einen Waschtrockner gegen 118 Pfund für Waschmaschine und Wärmepumpentrockner, 7,5 Liter Wasser pro kg beim Trocknen, die meisten Waschtrockner trocknen schlechter als ein Trockner" },
      { name: "T3: Do washer dryers work as well as separates? (Februar 2022)", text: "trocknen schlechter, Wäsche bleibt oft feucht, mit zwei Geräten wäscht die nächste Ladung, während die erste trocknet" },
      { name: "Trusted Reviews: Washer dryer vs separates", text: "zwei Geräte brauchen etwa doppelt so viel Stellfläche und laufen gleichzeitig, Waschtrockner trocknen oft ungleichmäßig" },
      { name: "Utopia: Waschtrockner, das sind die Vor- und Nachteile (März 2023)", text: "trocknet meist nur 4 bis 6 kg, mehr Strom und Wasser, eher für kleine Haushalte" },
      { name: "Waschmaschinen-Kompass: Trockner auf Waschmaschine stellen (Oktober 2026)", text: "Verbindungsrahmen nötig, Trockner immer oben, ohne Rahmen kann er verrutschen" },
      { name: "Herstellerangaben und Energielabel", text: "Stapeln laut Siemens und Samsung (Trockner oben, passender Bausatz, gleiche Marke), Fassungsvermögen, Programmdauer und Strom fürs Waschen und Trocknen laut Energielabel von Haier, Hisense, Bosch und AEG" }
    ]
  },
  {
    id: "smarte-thermostate-mietwohnung",
    produkt: "thermostate",
    geprueft: "2026-11-04",
    titel: "Lohnen sich smarte Thermostate in der Mietwohnung?",
    frage: "Lohnen sich smarte Thermostate in der Mietwohnung?",
    seitenTitel: "Lohnen sich smarte Thermostate in der Mietwohnung?",
    beschreibung: "Was du als Mieter mit smarten Thermostaten sparst, was davon auf der Heizkostenabrechnung ankommt, ob du sie einbauen darfst und wann sie weniger bringen.",
    kurzantwort: "Meistens ja: Du schraubst sie ohne Handwerker an und beim Auszug wieder ab, und du kommst jeden Tag in eine warme Wohnung. Mit einem Heizplan sparst du außerdem rund 10 Prozent Heizenergie. Bei einer Zentralheizung kommt davon auf deiner Abrechnung meist die Hälfte bis gut zwei Drittel an, weil nur ein Teil der Kosten nach Verbrauch verteilt wird.",
    abschnitte: [
      {
        titel: "Was du mit einem Heizplan sparst",
        absaetze: [
          "Smarte Thermostate heizen nach deinem Plan: warm, wenn du da bist, und runtergedreht, wenn du schläfst oder arbeitest. Laut Umweltbundesamt und co2online sparst du damit rund 10 Prozent Heizenergie. Der ADAC rechnet in der Praxis mit 5 bis 8 Prozent.",
          "Wie viel es bei dir ist, hängt davon ab, wie oft du weg bist und wie du bisher heizt. Als Faustregel spart jedes Grad weniger rund 6 Prozent Heizenergie. Läuft deine Heizung bisher meist durch, sparst du mehr. Drehst du schon jeden Heizkörper zuverlässig selbst runter, sparst du weniger."
        ]
      },
      {
        titel: "Was davon auf deiner Abrechnung ankommt",
        absaetze: [
          "Hast du eine eigene Gastherme in der Wohnung, zahlst du dein Gas meist direkt beim Versorger. Dann kommt die ganze Ersparnis bei dir an.",
          "Bei einer Zentralheizung wird dagegen nur ein Teil der Kosten nach deinem Verbrauch verteilt, der Rest nach der Fläche. In Deutschland sind es 50 bis 70 Prozent, in Österreich mindestens 55 Prozent der Energiekosten. In der Schweiz sind es meist 50 bis 70 Prozent, wenn dein Haus nach Verbrauch abrechnet. Wie es bei dir aufgeteilt ist, siehst du auf deiner Heizkostenabrechnung an den Grund- und Verbrauchskosten.",
          "Ein Beispiel: Zahlst du 1.000 € im Jahr fürs Heizen, sind 10 Prozent davon 100 €. Werden bei dir 50 bis 70 Prozent nach Verbrauch verteilt, kommen davon etwa 50 bis 70 € bei dir an. In meinem Rechner wählst du dafür „Zentralheizung mit Abrechnung“, dann rechne ich mit 60 Prozent.",
          "In manchen Häusern wird gar nicht nach Verbrauch abgerechnet, sondern nur nach Fläche, in der Schweiz zum Beispiel oft in älteren Häusern. Dann spart vor allem das ganze Haus, und bei dir kommt nur wenig an."
        ]
      },
      {
        titel: "So siehst du, ob es wirkt",
        absaetze: [
          "In Deutschland müssen die Zähler für die Heizkosten ab 2027 aus der Ferne ablesbar sein. Sobald sie das sind, bekommst du jeden Monat eine Verbrauchsinfo. So siehst du Monat für Monat, ob dein Heizplan wirkt."
        ]
      },
      {
        titel: "Darfst du sie als Mieter einbauen?",
        absaetze: [
          "In Deutschland in der Regel ja, auch ohne Zustimmung deines Vermieters. Du tauschst nur den Drehregler am Ventil gegen das smarte Thermostat. Wasser musst du dafür nicht ablassen, und einen Handwerker brauchst du nicht.",
          "Heb die alten Regler gut auf und schraub sie beim Auszug wieder dran. Deine smarten Thermostate nimmst du dann in die nächste Wohnung mit. In Österreich und der Schweiz fragst du am besten kurz deinen Vermieter."
        ]
      },
      {
        titel: "Passen sie auf deine Heizkörper?",
        absaetze: [
          "Auf fast alle normalen Heizkörper. Die meisten Ventile haben ein Gewinde nach dem Standard M30 x 1,5. Für andere, zum Beispiel von Danfoss, liegen oft Adapter bei. Für eine Fußbodenheizung brauchst du dagegen ein Raumthermostat an der Wand."
        ]
      },
      {
        titel: "Bequemer als von Hand",
        absaetze: [
          "Dazu kommt die Bequemlichkeit: Kurz bevor du heimkommst, ist die Wohnung schon warm. Während du arbeitest, drehen die Thermostate selbstständig runter, und vergessen kannst du es auch nicht mehr.",
          "Drehst du bisher jeden Heizkörper morgens runter und abends wieder hoch, sparst du bei vier Heizkörpern laut meinem Rechner rund eine Viertelstunde pro Woche.",
          "Für den Anfang reicht ein Plan für die Werktage und einer fürs Wochenende. Stell zum Beispiel morgens und abends 21 Grad ein, 16 bis 17 Grad, wenn du weg bist, und nachts im Schlafzimmer 16 bis 18 Grad. Kälter als 16 Grad sollte es nicht werden, sonst steigt das Risiko für Schimmel."
        ]
      }
    ],
    verweis: {
      text: "Welche Thermostate ich empfehle, mit und ohne Zentrale, und was sie dir mit deinen eigenen Zahlen sparen, siehst du auf meiner Seite zu den smarten Heizkörper-Thermostaten.",
      knopf: "Zu den Thermostaten mit Rechner"
    },
    wannNicht: [
      "Du hast eine Fußbodenheizung: Dafür brauchst du ein Raumthermostat an der Wand.",
      "In deinem Haus werden die Heizkosten nur nach Fläche verteilt: Dann kommt von der Ersparnis bei dir nur wenig an.",
      "Du drehst schon jetzt jeden Heizkörper zuverlässig runter, wenn du gehst: Dann sparst du vor allem Mühe und weniger Geld.",
      "Du bist tagsüber fast immer zu Hause: Dann senkt der Heizplan vor allem nachts ab, und du sparst weniger."
    ],
    fragen: [
      { f: "Was mache ich beim Auszug?", a: "Du schraubst die smarten Thermostate ab und die alten Drehregler wieder dran. Das geht pro Heizkörper in wenigen Minuten. Die smarten Thermostate nimmst du mit, sie passen auch in der neuen Wohnung auf die meisten Heizkörper." },
      { f: "Stören sie den Heizkostenverteiler?", a: "Nein. Der Heizkostenverteiler sitzt auf dem Heizkörper und misst, wie viel Wärme der Heizkörper abgibt. Das Thermostat kommt dagegen ans Ventil. Heizt du weniger, zeigt der Verteiler einfach weniger an. Abnehmen oder verdecken solltest du ihn nicht." },
      { f: "Brauche ich eine Zentrale?", a: "Nicht unbedingt. Manche Thermostate gehen direkt ins WLAN, und mit einer FRITZ!Box ist dein Router schon die Zentrale. Am besten schneiden in Tests aber Modelle mit Zentrale ab. Die Zentrale kostet einmal extra, und beim Umzug nimmst du sie einfach mit." },
      { f: "Wann habe ich den Kaufpreis wieder drin?", a: "Das hängt davon ab, wie viele Heizkörper du ausstattest und was bei dir ankommt. Laut Stiftung Warentest rechnet sich die Anschaffung erst langfristig, der ADAC kommt in seinem Beispiel mit fünf Thermostaten auf knapp vier Jahre. Bei einer Zentralheizung dauert es länger, weil nur ein Teil der Ersparnis bei dir ankommt. Die Bequemlichkeit hast du dagegen ab dem ersten Tag." }
    ],
    quellen: [
      { name: "Umweltbundesamt: Heizen, Raumtemperatur (Oktober 2023)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/heizen-bauen/heizen-raumtemperatur", text: "programmierbare Thermostate sparen etwa 10 % Energie, bei einigen Stunden Abwesenheit und nachts absenken, im Schlafzimmer 17 °C" },
      { name: "Verbraucherzentrale Hamburg: Gut geheizt durch den Winter (Dezember 2025)", url: "https://www.vzhh.de/themen/bauen-wohnen-energie/heizung/gut-geheizt-durch-den-winter", text: "jedes Grad weniger spart etwa 6 Prozent Heizenergie, kälter als 16 °C sollte es nicht sein, sonst kann sich Schimmel bilden, smarte Thermostate lassen sich auch in Mietwohnungen nachrüsten" },
      { name: "co2online: Pressemitteilung zu programmierbaren Thermostaten (Oktober 2023)", text: "rund zehn Prozent weniger Heizkosten, Mieter brauchen keine Genehmigung des Vermieters, die alten Thermostate vor dem Auszug wieder anbringen" },
      { name: "ADAC: Smarte Heizkörperthermostate (Oktober 2026)", text: "in der Praxis 5 bis 8 Prozent weniger Heizkosten, Mieter können sie in der Regel selbst einbauen, alte Thermostate aufheben und beim Auszug zurückbauen, Fußbodenheizung braucht ein Raumthermostat, im Beispiel mit fünf Thermostaten nach knapp vier Jahren bezahlt" },
      { name: "ista: Smarte Thermostate zwischen Energieeffizienz und Datenschutz (Oktober 2026)", text: "nur den Thermostatkopf zu tauschen braucht in der Regel keine Zustimmung des Vermieters, beim Auszug den ursprünglichen Zustand wiederherstellen" },
      { name: "Heizkostenverordnung, § 7 und § 6a", url: "https://www.gesetze-im-internet.de/heizkostenv/__7.html", text: "mindestens 50 und höchstens 70 Prozent der Kosten einer zentralen Heizung nach Verbrauch, der Rest nach Fläche, mit fernablesbaren Zählern seit 2022 jeden Monat eine Verbrauchsinformation" },
      { name: "mein-nebenkostenrechner.de: § 7 Heizkostenverordnung (September 2026)", text: "der Vermieter wählt zwischen 50 und 70 Prozent nach Verbrauch, zum Beispiel 50/50 oder 30/70, in manchen älteren Häusern mit Öl oder Gas sind 70 Prozent Pflicht" },
      { name: "mietrecht.org: Aufteilung von Grund- und Verbrauchskosten", text: "50 bis 70 Prozent nach Verbrauch, die Grundkosten nach Wohnfläche oder umbautem Raum" },
      { name: "Arbeiterkammer Wien: Heizkostenabrechnung nach dem HeizKG", url: "https://wien.arbeiterkammer.at/beratung/Wohnen/Heizkostenabrechnung/Heizkostenabrechnung_nach_dem_HeizKG.html", text: "gilt für Häuser ab vier Wohnungen mit gemeinsamer Heizung, nicht für Gasetagenheizungen, 55 bis 85 Prozent der Energiekosten nach Verbrauch, die übrigen Kosten nach Fläche" },
      { name: "Heizkostenabrechnungsgesetz, § 10 (jusline.at)", text: "mindestens 55 und höchstens 85 Prozent der Energiekosten nach Verbrauch, der Rest nach Nutzfläche" },
      { name: "ista Österreich und Techem Österreich zum Heizkostenabrechnungsgesetz", text: "mindestens 55 Prozent der Energiekosten nach Verbrauch, die Grundkosten also höchstens 45 Prozent, gilt nicht für Etagenheizungen" },
      { name: "WEKA Schweiz: Verteilschlüssel für Nebenkosten (Juni 2025)", text: "Grundkosten meist 30 bis 50 Prozent der Heizkosten, nach Verbrauch abrechnen müssen vor allem Neubauten und gesamtsanierte Häuser, sonst meist nach Fläche verteilt" },
      { name: "ista Schweiz: Broschüre zur Heizkostenabrechnung", text: "Grundkosten 30 bis 50 Prozent nach Wohnfläche, der Rest nach Verbrauch" },
      { name: "Bundesamt für Energie: Abrechnungsmodell für die verbrauchsabhängige Heizkostenabrechnung (2004)", text: "Grundkosten 30 bis 50 Prozent, verbrauchsabhängige Kosten 50 bis 70 Prozent" },
      { name: "Konferenz Kantonaler Energiedirektoren: Vollzugshilfe EN-113 (Dezember 2018)", text: "Abrechnung nach Verbrauch Pflicht bei Neubauten und Gesamterneuerungen ab fünf Wohnungen, einige Kantone haben die Nachrüstpflicht für bestehende Häuser aufgehoben" },
      { name: "Blick: Heizkostenabrechnung in alten Liegenschaften (Oktober 2022) und Kostenabrechnung sorgt für Ärger (Dezember 2022)", text: "in älteren Häusern ohne Wärmezähler oft nach Quadratmetern oder Kubikmetern verteilt, egal wie viel jemand heizt" },
      { name: "Berliner Mieterverein: Gasversorgung (BGH, Juni 2018) und Erfassungsgeräte für die Heizkostenabrechnung (September 2025)", text: "bei eigenem Gasanschluss kommt der Liefervertrag zwischen Versorger und Mieter zustande, Heizkostenverteiler sitzen direkt am Heizkörper, die Anzeige hängt auch von den Thermostatventilen ab, Manipulation ist strafbar" },
      { name: "Berliner MieterGemeinschaft: Heizkostenverteiler", text: "sitzt mittig auf dem Heizkörper, elektronische Geräte messen den Unterschied zwischen Heizkörper und Raumluft, Verkleidungen und Vorhänge verfälschen die Anzeige" },
      { name: "Gewobag: Informationen zum Heizkostenverteiler (August 2025)", text: "misst direkt am Heizkörper Raum- und Heizkörpertemperatur, ist verplombt" },
      { name: "ista: Monatliche Verbrauchsinformation (Oktober 2026), Haufe und Haus & Grund Chemnitz", text: "nicht fernablesbare Zähler bis 31.12.2026 nachrüsten oder tauschen, ab dem Einbau fernablesbarer Zähler jeden Monat eine Verbrauchsinformation" },
      { name: "Stiftung Warentest: Smarte Heizkörperthermostate im Test (Heft 9/2023)", text: "die Anschaffung rechnet sich erst langfristig, Modelle mit Zentrale vorn, das FRITZ!-Modell fast so gut wie der Testsieger" },
      { name: "smarthomeassistent.de: Bestenliste Heizkörperthermostate (Oktober 2026)", text: "Platz 1 und 2 mit Zentrale, kein Modell, das direkt ins WLAN geht, unter den ersten zehn" },
      { name: "homeandsmart: Thermostat tauschen", text: "die meisten Ventile mit Gewinde M30 x 1,5, Adapter für andere, kein Wasser ablassen, kein Handwerker, in wenigen Minuten erledigt, Fußbodenheizung braucht ein Raumthermostat" },
      { name: "Herstellerangaben", text: "Gewinde M30 x 1,5 und beiliegende Adapter, zum Beispiel für Danfoss-Ventile, laut eQ-3 (Homematic IP), AVM (FRITZ!) und Bosch, Montage ohne Wasser ablassen und ohne Spezialwerkzeug laut eQ-3" }
    ]
  },
  {
    id: "saugroboter-oder-akkusauger",
    produkt: "saugroboter",
    geprueft: "2026-11-13",
    weitereProdukte: ["akkusauger"],
    titel: "Saugroboter oder Akku-Staubsauger: Was passt zu mir?",
    frage: "Saugroboter oder Akku-Staubsauger: Was passt zu mir?",
    seitenTitel: "Saugroboter oder Akku-Staubsauger: Was passt zu mir?",
    beschreibung: "Was ein Saug- und Wischroboter und ein Akku-Staubsauger jeweils besser können, wie viel Zeit sie dir sparen und warum für viele Wohnungen beides zusammen am besten passt.",
    kurzantwort: "Ein Saug- und Wischroboter passt, wenn deine Böden ohne dich sauber werden sollen, ein Akku-Staubsauger, wenn du schnell selbst saugen willst, auch auf Treppe, Sofa und im Auto. Laut meinem Rechner spart dir der Roboter bei 70 m² rund eine Stunde pro Woche, wenn du sonst zweimal saugst und einmal wischst. Mit dem Akku-Staubsauger saugst du weiter selbst, nur schneller. Für viele Wohnungen ist beides zusammen am bequemsten: der Roboter für die Böden und ein günstiger Akku-Staubsauger für die Stellen, an die er nicht kommt.",
    abschnitte: [
      {
        titel: "Was jeder am besten kann",
        absaetze: [
          "Der Saug- und Wischroboter nimmt dir das Saugen und Wischen ab. In der App stellst du einen Zeitplan ein, und er putzt, während du bei der Arbeit bist. Danach fährt er in seine Station. Bei vielen Modellen saugt sie ihn leer und wäscht auch die Wischwalze oder die Mopps.",
          "Den Akku-Staubsauger führst du selbst, aber ohne Kabel und Umstecken. Du nimmst ihn von der Wand, saugst die Krümel unterm Esstisch weg und hängst ihn zurück. Mit einem Handgriff wird er zum Handsauger für Sofa, Treppe und Auto."
        ]
      },
      {
        titel: "So viel Zeit sparst du",
        absaetze: [
          "Mein Rechner setzt fürs Saugen auf 70 m² samt Vorbereitung rund 19 Minuten an, fürs Wischen rund 26 Minuten. Für die Pflege des Roboters zieht er 5 Minuten pro Woche ab. Saugst du zweimal pro Woche und wischst einmal, spart dir der Roboter so rund eine Stunde pro Woche, gut 50 Stunden im Jahr.",
          "Mit dem Akku-Staubsauger saugst du weiter selbst. Er spart dir das Herausholen, Einstecken und Umstecken: laut meinem Rechner auf 70 m² gut 5 Minuten pro Mal und 2 Minuten, wenn du schnell Krümel wegsaugst. Saugst du zweimal pro Woche und dreimal schnell zwischendurch, ist das gut eine Viertelstunde."
        ]
      },
      {
        titel: "Wo der Roboter an Grenzen kommt",
        absaetze: [
          "Treppen schaffen gängige Roboter nicht, und die Station bleibt an einem Ort. Wohnst du auf zwei Etagen, trägst du ihn hoch, oder du saugst die Treppe und das obere Stockwerk mit dem Akku-Staubsauger.",
          "Ecken, Kanten und den Streifen direkt an der Fußleiste putzt er meist weniger gründlich. Auf hohem Teppich saugt ein Sauger, den du führst, gründlicher. Laut Stiftung Warentest kommen selbst die besten Roboter an Leistung und Filterwirkung eines guten Staubsaugers nicht heran.",
          "Außerdem braucht er einen freien Boden: Kabel, Socken und Spielzeug räumst du vor dem Start kurz weg. Dafür kommt er unter Bett und Sofa, wenn dort genug Platz ist.",
          "Große Wohnungen schafft er trotzdem: Im Test von Stiftung Warentest kamen die besten Roboter mit einer Akkuladung auf bis zu 193 m². Reicht der Akku nicht, fahren viele zum Laden in die Station und putzen danach weiter."
        ]
      },
      {
        titel: "Worauf du beim Akku-Staubsauger achten solltest",
        absaetze: [
          "Im gemeinsamen Test von Stiftung Warentest und Konsument saugten die besten Akku-Staubsauger so gut wie Bodenstaubsauger mit Kabel. Achten solltest du vor allem auf den Akku: Was Hersteller als Laufzeit angeben, gilt meist für die schwächste Stufe. Auf höchster Stufe halten viele nur 10 bis 15 Minuten durch.",
          "Für eine große Wohnung lohnt sich darum ein Modell mit Wechselakku. Einen zweiten Akku musst du laut Konsument aber meist extra kaufen. Der Staubbehälter ist klein, und beim Leeren staubt es etwas. Nach einigen Jahren lässt der Akku nach, achte deshalb darauf, dass es Ersatz-Akkus gibt."
        ]
      },
      {
        titel: "Beides zusammen: So teilen sie sich die Arbeit",
        absaetze: [
          "Für viele Wohnungen ist das die bequemste Lösung. Der Roboter fährt nach Zeitplan und hält die Böden sauber, auf Wunsch jeden Tag. Den Akku-Staubsauger nimmst du nur noch für Krümel nach dem Essen, für Treppe, Sofa und Auto und ab und zu für Ecken und Fußleisten."
        ]
      },
      {
        titel: "Meine Erfahrung",
        absaetze: [
          "Hast du einen Saugroboter, brauchst du den Akkusauger sowieso nur sehr selten. Dafür reicht ein günstiges Modell. Ich habe zum Beispiel den Bulelink Zenith G10 und bin damit sehr zufrieden."
        ],
        art: "erfahrung"
      },
      {
        titel: "Was es kostet",
        absaetze: [
          "In der Anschaffung kostet ein Saug- und Wischroboter mit Station meist deutlich mehr als ein guter Akku-Staubsauger. Ein Roboter, der nur saugt, ist günstiger, wischen musst du dann aber weiter selbst.",
          "Im Unterhalt kosten Bürsten, Filter, Beutel und Mopps beim Roboter laut meinem Rechner etwa 3,50 € im Monat mehr als bei einem normalen Staubsauger. Beim Akku-Staubsauger kaufst du keine Beutel, dafür brauchst du nach einigen Jahren vielleicht einen neuen Akku."
        ]
      }
    ],
    verweis: {
      text: "Welche Saug- und Wischroboter ich empfehle und wie viel Zeit du mit deinen eigenen Zahlen sparst, siehst du auf meiner Seite zum Saug- und Wischroboter. Meine Tipps für den passenden Akku-Staubsauger stehen auf meiner Seite zum Akku-Staubsauger.",
      knopf: "Zum Saug- und Wischroboter mit Rechner",
      weitere: [{ knopf: "Zum Akku-Staubsauger", link: "akkusauger" }]
    },
    wannNichtTitel: "Wann eher kein Saug- und Wischroboter",
    wannNicht: [
      "Du wohnst auf mehreren Etagen und willst den Roboter nicht hin und her tragen: Treppen schaffen gängige Roboter nicht.",
      "Auf deinem Boden liegt oft viel herum, und du willst vor dem Start nicht kurz aufräumen.",
      "Du hast vor allem hohe Teppiche: Dort saugt ein Sauger, den du führst, gründlicher.",
      "Du saugst vor allem Sofa, Treppe oder Auto: Dafür brauchst du einen Akku-Staubsauger.",
      "Für die Station fehlt dir der Platz: Sie braucht rund 40 cm an der Wand und davor 0,8 bis 1,5 m frei."
    ],
    fragen: [
      { f: "Ersetzt ein Saug- und Wischroboter den Staubsauger ganz?", a: "Für die Böden im Alltag oft ja, ganz aber selten. Treppe, Sofa und Auto schafft er nicht, und in Ecken und auf hohem Teppich putzt er weniger gründlich. Dafür reicht ein Akku-Staubsauger, den du nur ab und zu brauchst." },
      { f: "Reicht der Akku eines Akku-Staubsaugers für eine große Wohnung?", a: "Auf höchster Stufe oft nicht: Dann halten viele nur 10 bis 15 Minuten durch. Nimm für eine große Wohnung ein Modell mit Wechselakku. Oder du lässt die Böden vom Roboter saugen und nimmst den Akku-Staubsauger nur für kurze Einsätze." },
      { f: "Gibt es Roboter und Akku-Staubsauger im Set?", a: "Ja, einige Hersteller bieten Sets an, bei denen sich ein Roboter und ein Akku-Staubsauger eine Station teilen. Die saugt dann beide leer, auch den Staubbehälter des Akku-Staubsaugers." },
      { f: "Was passt besser, wenn ich Haustiere habe?", a: "Am bequemsten ist beides: Der Roboter saugt die Haare nach Zeitplan vom Boden, auf Wunsch jeden Tag, und fürs Sofa nimmst du den Akku-Staubsauger. Worauf es beim Roboter mit Tier ankommt, steht in meinem Ratgeber zum Saugroboter mit Haustieren." }
    ],
    quellen: [
      { name: "Mein Rechner auf der Seite zum Saug- und Wischroboter", text: "die Zeit für 70 m² bei zweimal Saugen und einmal Wischen pro Woche und die Kosten für Ersatzteile, die Annahmen stehen dort unter „So rechne ich“" },
      { name: "Mein Rechner auf der Seite zum Akku-Staubsauger", text: "die Zeit gegenüber einem Sauger mit Kabel bei 70 m², zweimal Saugen und dreimal Krümeln pro Woche, die Annahmen stehen dort unter „So rechne ich“" },
      { name: "Stiftung Warentest: Saugroboter im Test (Juni 2026)", text: "selbst die besten Roboter halten bei Leistung und Filterwirkung nicht mit einem guten Staubsauger mit, Stärken auf Hartboden, mit einer Akkuladung etwa 33 bis 193 m², Größe der Stationen" },
      { name: "Stiftung Warentest: Saug-Wisch-Roboter im Test (Dezember 2025)", text: "auf Teppich überzeugen die meisten nicht" },
      { name: "Stiftung Warentest: Akku-Staubsauger im Test (Heft 2/2026)", text: "die besten Akkusauger halten mit klassischen Bodenstaubsaugern mit, auf höchster Stufe 10 bis 17 Minuten Laufzeit" },
      { name: "Konsument (VKI): Akku-Staubsauger im Test, Pressemitteilung (Februar 2026)", url: "https://vki.at/system/files/2026-02/2026-02-18_PA_Akkusauger_0.pdf", text: "14 Geräte gemeinsam mit Stiftung Warentest getestet, gute Akkusauger halten bei der Saugleistung mit Geräten mit Kabel mit, auf höchster Stufe auf Teppich bei zwei Geräten nach 6 und 9 Minuten Schluss, Wechselakku meist nicht im Lieferumfang" },
      { name: "Consumer NZ: Which type of vacuum is best for cleaning your home? (März 2024)", text: "Roboter auf Hartboden gut, auf Teppich schwach, keine Treppen, saugen auch unter Möbeln, Akkusauger mit begrenzter Laufzeit" },
      { name: "TechRadar: Robot vacuum vs cordless vacuum (November 2023)", text: "Roboter bequemer, Akkusauger gründlicher und vielseitiger an Kanten, auf Treppen, Polstern und im Auto, vor dem Roboter aufräumen, beides zu haben ist ideal" },
      { name: "T3: Cordless or robot, which is the best vacuum cleaner for you? (August 2023)", text: "Akkusauger für schnelle Einsätze, Treppe und Auto, auch als Handsauger, Wandhalterung, Roboter spart Zeit, bleibt aber mal hängen" },
      { name: "testundtipps.de: Saugroboter oder Akkustaubsauger (Juli 2026)", text: "Treppen nur mit geführtem Gerät, Kanten, Ecken und Fußleisten saugt der Roboter schwächer, auf Hochflor weniger gründlich, Boden vorher frei räumen, beide teilen sich die Arbeit" },
      { name: "home&smart: Vor- und Nachteile von Saug- und Wischrobotern (November 2026) und Saugroboter, die Treppen steigen (Februar 2026)", text: "nicht für Polster und Treppen, enge Ecken und niedrige Möbel, lose Gegenstände vorher wegräumen, für gründliches Saugen weiter ein klassischer Staubsauger, Roboter für Treppen bisher Prototypen" },
      { name: "Weitere Tests zu Akku-Staubsaugern", text: "home&smart, ETM Testmagazin, t-online und produkte-im-test.de zur Laufzeit auf schwächster und höchster Stufe, SRF Kassensturz und Apotheken Umschau zum Staub beim Leeren" },
      { name: "Nachladen und Weiterputzen", text: "Roboter fahren zum Laden in die Station und putzen danach weiter, laut Anker (Juli 2026), der Hilfe von Ecovacs („Reinigung fortsetzen“) und smarthomeassistent.de zu Neato (Juni 2022)" },
      { name: "Sets mit gemeinsamer Station", text: "SwitchBot K10+ Pro Combo (testsiegertv.com, Dezember 2025), Yeedi C12 Combo (notebookcheck.com, Oktober 2024) und Ecovacs Deebot X2 Combo (netzwelt.de, April 2024)" },
      { name: "Herstellerangaben und Anleitungen", text: "Platz vor und neben der Station laut Roborock, Kärcher und Ecovacs, Maße der Stationen laut Kärcher und Anker" }
    ]
  },
  {
    id: "black-friday-echte-angebote",
    produkt: "kaffeevollautomat",
    geprueft: "2026-11-13",
    weitereProdukte: ["saugroboter", "airfryer"],
    titel: "Black Friday bei Haushaltsgeräten: Woran erkenne ich ein echtes Angebot?",
    frage: "Black Friday bei Haushaltsgeräten: Woran erkenne ich ein echtes Angebot?",
    seitenTitel: "Black Friday bei Haushaltsgeräten: Woran erkenne ich ein echtes Angebot?",
    beschreibung: "Wie du am Black Friday echte Angebote erkennst: Preisverlauf statt UVP, Vorjahresmodelle, Sets, Lieferzeit und die Rückgabe in Deutschland, Österreich und der Schweiz.",
    kurzantwort: "Ein echtes Angebot erkennst du am Preisverlauf: Liegt der Preis klar unter dem, was das Gerät in den letzten Monaten gekostet hat, ist es eins. Der durchgestrichene Preis allein sagt wenig, vor allem wenn es die UVP des Herstellers ist, die kaum ein Shop verlangt. Prüf außerdem die genaue Modellbezeichnung, die Lieferzeit und die Rückgabe. Viele Geräte gibt es vor und nach dem Black Friday genauso günstig, du kannst also in Ruhe vergleichen.",
    abschnitte: [
      {
        titel: "Der Preisverlauf zeigt, ob es ein Angebot ist",
        absaetze: [
          "Black Friday ist 2026 am 27. November, viele Aktionen beginnen aber schon Tage oder Wochen vorher. Ob ein Preis wirklich gut ist, siehst du am Preisverlauf der letzten Monate. Den zeigen viele Preisvergleichsseiten, oft mit Preisalarm für deinen Wunschpreis.",
          "Die britische Verbraucherorganisation Which? hat 175 Geräte aus Haushalt, Technik und Gesundheit ein Jahr lang verfolgt. 83 Prozent davon gab es außerhalb der Black-Friday-Wochen mindestens einmal gleich günstig oder günstiger. Am Black Friday selbst war keines am günstigsten."
        ]
      },
      {
        titel: "Was der durchgestrichene Preis bedeutet",
        absaetze: [
          "In Deutschland, Österreich und der übrigen EU muss ein Shop bei einer Preissenkung den niedrigsten Preis der letzten 30 Tage nennen. Ein Rabatt in Prozent muss sich laut Europäischem Gerichtshof auf genau diesen Preis beziehen.",
          "Das hilft, ersetzt aber nicht den Blick auf den Preisverlauf. War das Gerät vor diesen 30 Tagen günstiger, sparst du weniger, als der Rabatt verspricht. Und nicht jeder hält sich an die Regel: Bei einer Prüfung der EU-Verbraucherschutzbehörden gaben 30 Prozent von 314 Online-Shops ihre Rabatte falsch an."
        ]
      },
      {
        titel: "Die UVP sagt wenig",
        absaetze: [
          "Oft vergleicht ein Shop mit der UVP, der unverbindlichen Preisempfehlung des Herstellers. Die verlangt kaum ein Händler, darum ist ein Rabatt darauf meist kleiner, als er aussieht. Ob die 30-Tage-Regel auch für die UVP gilt, ist in Deutschland noch nicht entschieden, die Gerichte urteilen bisher unterschiedlich.",
          "Vergleiche deshalb mit dem Preis, den das Gerät gerade in mehreren Shops kostet."
        ]
      },
      {
        titel: "In der Schweiz gelten eigene Regeln",
        absaetze: [
          "In der Schweiz darf ein Shop einen früheren Preis nur nennen, wenn er das Gerät vorher wirklich zu diesem Preis angeboten hat. Einen Preis des Herstellers darf er nur als Vergleich zeigen, wenn die meisten anderen Shops das Gerät tatsächlich zu diesem Preis anbieten."
        ]
      },
      {
        titel: "Vorjahresmodell oder neues Modell",
        absaetze: [
          "Ältere Modelle werden günstiger, sobald Nachfolger kommen, nicht nur am Black Friday. Ein Vorjahresmodell ist oft das bessere Angebot, wenn es kann, was du brauchst.",
          "Vergleiche dafür die genaue Modellbezeichnung. Ähnliche Namen stehen manchmal für ein anderes Gerät, etwa mit einer Station, die weniger kann, oder mit schwächeren Werten im Test. Steht „Testsieger“ dabei, prüf, ob genau dieses Modell getestet wurde."
        ]
      },
      {
        titel: "Sets und Zubehör",
        absaetze: [
          "Rechne bei Sets nach: Brauchst du das Zubehör wirklich, und was kostet das Gerät allein? Ein Set ist nur dann ein Angebot, wenn du die Teile sonst auch gekauft hättest.",
          "Schau auch in den Warenkorb, bevor du bestellst. Bei der EU-Prüfung versuchte gut jeder dritte Shop, zusätzliche Artikel in den Warenkorb zu legen."
        ]
      },
      {
        titel: "Lieferzeit, Händler und Zeitdruck",
        absaetze: [
          "Prüf vor dem Kauf, wer verkauft und wann das Gerät ankommt. Kommt die Ware von einem Händler aus Fernost, etwa über den Marktplatz eines Shops, ist sie oft länger unterwegs, und die Rücksendung wird teuer oder schwierig. Brauchst du das Gerät zu Weihnachten, plane die Lieferzeit mit ein. Bei unbekannten Shops prüf Impressum und Bewertungen, und sei bei reiner Vorkasse vorsichtig.",
          "Countdowns und Hinweise wie „fast ausverkauft“ sollen dich unter Zeitdruck setzen. Bei der EU-Prüfung nutzte fast jeder fünfte Shop solche Mittel. Lass dir Zeit: Viele Geräte sind auch in den Adventswochen genauso günstig."
        ]
      },
      {
        titel: "Rückgabe in Deutschland, Österreich und der Schweiz",
        absaetze: [
          "In Deutschland, Österreich und der übrigen EU kannst du online gekaufte Geräte innerhalb von 14 Tagen nach Erhalt ohne Grund zurückgeben, auch reduzierte Ware am Black Friday. Die Rücksendung kann dich etwas kosten, wenn der Shop vorher darauf hinweist. Im Laden gekaufte Ware ohne Mangel tauscht ein Shop dagegen nur freiwillig um.",
          "Viele große Shops in Deutschland verlängern die Rückgabe über die Feiertage freiwillig, praktisch für Geschenke. Prüf, ob das auch für Marktplatz-Händler gilt.",
          "In der Schweiz gibt es kein gesetzliches Rückgaberecht, auch nicht online. Viele Shops gewähren freiwillig eines, lies darum vor dem Kauf die Bedingungen."
        ]
      },
      {
        titel: "Vorher entscheiden, dann vergleichen",
        absaetze: [
          "Am entspanntesten ist der Black Friday, wenn du vorher weißt, welches Gerät zu dir passt. Dann prüfst du am Tag selbst nur noch den Preis. Auf meinen Seiten zum Kaffeevollautomaten, zum Saug- und Wischroboter und zum Airfryer findest du meine Empfehlungen nach Preisklassen und einen Rechner für deinen Haushalt."
        ]
      }
    ],
    verweis: {
      text: "Welche Kaffeevollautomaten ich empfehle und was du gegenüber Kapseln sparst, siehst du auf meiner Seite zum Kaffeevollautomaten. Meine Tipps für Saug- und Wischroboter und Airfryer findest du auf den Seiten dazu.",
      knopf: "Zum Kaffeevollautomaten mit Rechner",
      weitere: [
        { knopf: "Zum Saug- und Wischroboter", link: "saugroboter" },
        { knopf: "Zum Airfryer", link: "airfryer" }
      ]
    },
    wannNichtTitel: "Wann du lieber wartest",
    wannNicht: [
      "Der Preis liegt nicht unter dem, was das Gerät in den letzten Monaten gekostet hat.",
      "Der Rabatt bezieht sich nur auf die UVP.",
      "Die Modellbezeichnung weicht vom Gerät ab, das du dir angesehen hast.",
      "Die Lieferzeit ist lang, und du brauchst das Gerät bald.",
      "Der Shop nennt keine klaren Bedingungen für die Rückgabe.",
      "Ohne Rabatt hättest du das Gerät gar nicht gekauft."
    ],
    fragen: [
      { f: "Ist der Black Friday der günstigste Tag im Jahr?", a: "Meist nicht. In der Auswertung von Which? war kein Gerät am Black Friday selbst am günstigsten. Ein Angebot ist es, wenn der Preis klar unter dem der letzten Monate liegt." },
      { f: "Darf ein Shop mit der UVP werben?", a: "In Deutschland ja, wenn klar dabeisteht, dass es die UVP ist. Ob dann auch die 30-Tage-Regel gilt, sehen die Gerichte bisher unterschiedlich. In der Schweiz darf ein Shop die UVP nur als Vergleich zeigen, wenn die meisten anderen Shops das Gerät wirklich zu diesem Preis anbieten." },
      { f: "Kann ich ein Black-Friday-Schnäppchen zurückgeben?", a: "In der EU ja, online innerhalb von 14 Tagen nach Erhalt, auch bei reduzierter Ware. In der Schweiz nur, wenn der Shop es freiwillig anbietet. Lies dort vor dem Kauf die Bedingungen." },
      { f: "Was bringt ein Preisalarm?", a: "Du gibst auf einer Preisvergleichsseite deinen Wunschpreis ein und bekommst eine Nachricht, sobald das Gerät so günstig ist. So kaufst du, wenn der Preis passt, egal an welchem Tag." }
    ],
    quellen: [
      { name: "Preisangabenverordnung (Deutschland), § 11", url: "https://www.gesetze-im-internet.de/pangv_2022/__11.html", text: "bei einer Preisermäßigung den niedrigsten Gesamtpreis der letzten 30 Tage angeben" },
      { name: "Bundesministerium für Wirtschaft, Energie und Tourismus (Österreich): Preisauszeichnung", url: "https://www.bmwet.gv.at/Themen/Europa/Wettbewerbspolitik/Preisauszeichnung.html", text: "§ 9a Preisauszeichnungsgesetz nach Artikel 6a der EU-Preisangabenrichtlinie, niedrigster Preis der letzten 30 Tage, Urteil des Europäischen Gerichtshofs C-330/23" },
      { name: "Europäischer Gerichtshof, Urteil C-330/23 (26.09.2024), laut beck-aktuell und dem österreichischen Wirtschaftsministerium", text: "ein Rabatt in Prozent muss vom niedrigsten Preis der letzten 30 Tage ausgehen, so auch WKO (September 2023) und Arbeiterkammer Wien" },
      { name: "SECO: Fragen und Antworten zur Preisbekanntgabe (Schweiz)", url: "https://www.seco.admin.ch/de/faq-pbv", text: "Selbstvergleich nur mit tatsächlich verlangtem Preis, Herstellerpreis nur als Konkurrenzvergleich, dazu das Merkblatt zum Selbstvergleich (zeitliche Grenzen, 30-Tage-Regel seit 2025), die FAQ zum Konkurrenzvergleich, die Wegleitung des Kantons Aargau (2025) und Handelsverband.swiss (November 2024)" },
      { name: "Europäische Kommission: EU-Prüfung zu Rabatten am Black Friday und Cyber Monday (26.03.2026)", url: "https://commission.europa.eu/news-and-media/news/eu-check-reveals-misleading-sales-practices-online-2026-03-26_de", text: "314 Online-Shops aus 25 Ländern geprüft, 30 Prozent mit falschen Rabatten, 36 Prozent mit zusätzlichen Artikeln im Warenkorb, 18 Prozent mit Countdowns oder Knappheit" },
      { name: "Which?: Black-Friday-Auswertung (November 2025)", text: "175 Geräte aus Haushalt, Technik und Gesundheit von Mai 2024 bis Mai 2025 verfolgt, 83 Prozent außerhalb der Aktionswochen mindestens einmal gleich günstig oder günstiger, keines am Black Friday am günstigsten" },
      { name: "Verbraucherzentralen: verbraucherzentrale.de (Oktober 2026), Niedersachsen (Mai 2026) und Hamburg (November 2025)", text: "UVP kaum verlangt, 30-Tage-Regel seit Mai 2022, Gerichte uneinig bei der UVP, Preisverlauf eines ganzen Jahres, Impressum und Vorkasse, 14 Tage Widerrufsrecht, Rücksendekosten" },
      { name: "Arbeiterkammer Wien: Black Friday (2026)", text: "Black Friday am 27. November 2026, niedrigster Preis der letzten 30 Tage, Preisalarm, 14 Tage Rücktrittsrecht, im Laden nur freiwillig, teure Rücksendungen nach Asien" },
      { name: "Europäisches Verbraucherzentrum Deutschland: Black Friday (2026)", text: "Termine, Preisentwicklung prüfen, UVP, Lieferzeiten, Vorkasse, Dark Patterns wie „fast ausverkauft“, 14 Tage Widerrufsrecht in ganz Europa, Rücksendekosten" },
      { name: "Stiftung Warentest: Tipps zur Rabattschlacht Black Friday (November 2025)", text: "UVP, der kaum ein Händler folgt, Preisalarm, ähnlich aussehende Geräte mit schlechteren Werten, lange Lieferfristen bei unbekannten Shops, Adventswochen oft genauso günstig" },
      { name: "Urteile zur durchgestrichenen UVP", text: "Händlerbund (August 2026), beck-aktuell zum Urteil des Oberlandesgerichts Köln (Mai 2026, Revision zum Bundesgerichtshof zugelassen) und IT-Recht Kanzlei zu Urteilen der Landgerichte Düsseldorf und München I (August 2025): Vergleich mit der UVP erlaubt, wenn klar gekennzeichnet, Gerichte uneinig bei der 30-Tage-Regel" },
      { name: "Rückgabe in der Schweiz", url: "https://www.ch.ch/de/sicherheit-und-recht/waren-zuruckgeben-oder-umtauschen/", text: "kein gesetzliches Rückgabe- oder Umtauschrecht, Shops regeln das selbst, dazu moneyland.ch (November 2026) und SRF (November 2020)" },
      { name: "Verlängerte Rückgabe zu Weihnachten", text: "t3n (Dezember 2025), e-recht24 (Dezember 2025) und GIGA (November 2025, auch zum Umtausch im Laden)" },
      { name: "Vorjahresmodelle, Modellnamen und Sets", text: "Anker (November 2025) und Stiftung Warentest zu Smartphone-Preisen (Juli 2026) zu sinkenden Preisen nach dem Marktstart, TechRadar (November 2024), netzwelt.de (März 2023) zu ähnlichen Namen mit anderer Station, Which? (November 2023) und CHOICE (November 2026) zu Sets" },
      { name: "Weitere Ratgeber zum Black Friday", text: "Utopia (November 2025) mit der WISO-Auswertung, Verbraucherzentrale Südtirol (November 2023) zu Ware aus Fernost, ZDFheute (November 2025) zum Preisalarm, heise online zur EU-Prüfung und GIGA (November 2026) zu den Terminen und früheren Aktionen" }
    ]
  }
];
