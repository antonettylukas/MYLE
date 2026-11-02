/*
  ==========================================================
  HIER TRÄGST DU DEINE PRODUKTE EIN
  ==========================================================
  Jedes Produkt steht zwischen { und }, danach ein Komma.
  Jedes Produkt hat außerdem eine eigene Seite, z. B. saugroboter.html.
  Wie du ein neues Produkt anlegst, steht in ANLEITUNG.md.

  Felder:
  id          Kurzer Name ohne Leerzeichen und Umlaute, z. B. "airfryer".
              Muss genauso heißen wie die Seite (airfryer.html).
  name        Name des Produkts
  ohneTeuer   Optional: { stufe, titel, text } statt einer dritten Preisklasse, wenn es kein gutes teures Modell gibt
  kurzname    Optional: kurzer Name für „Mit …“, z. B. "Airfryer" (sonst das letzte Wort von name)
  kategorie   "Haushalt", "Küche" oder "Freizeit" (danach wird gefiltert)
  symbol      Ein Emoji, falls es noch kein Foto gibt
  bild        Produktfoto, z. B. "bilder/airfryer.jpg" (darf leer bleiben: "")
  kurz        Ein Satz: Was ist das?
  warum       2–3 Sätze: Warum hilft es im Alltag?
  statt       Farbige Zeile unter dem Bild auf der Karte in der Übersicht: Was es ersetzt,
              z. B. "Statt Kabelsauger und Wischmopp" (kurz, höchstens zwei Zeilen)
  nutzen      Ein kurzer Satz für die Übersicht
  spart       Was es spart: "zeit", "geld", "muehe" (eins oder mehrere)
  fokus       "muehe" = spart vor allem Mühe: Der Rechner ist dann eingeklappt.
  muehe       Aufwand von 1 (fast nichts) bis 5 (sehr viel): { vorher: 5, nachher: 1 }
  fuer        Liste "Passt zu dir, wenn …"
  nachteile   Liste "Ehrlich gesagt"
  gruppen     Optional: teilt die Modelle in Gruppen, zwischen denen Besucher umschalten,
              z. B. "Saugen und Wischen" und "Nur Saugen". Je Gruppe:
                name       Name der Gruppe
                text       Ein Satz, der unter dem Umschalter steht
                ohne       Optional: ein Regler im Rechner, der bei dieser Gruppe nicht zählt,
                           z. B. "wischen"
  modelle     Die Preisklassen, meist drei. Je Modell:
                gruppe     Optional: zu welcher Gruppe es gehört (genau wie der name dort)
                stufe      "Günstig", "Mittelklasse" oder "Oberklasse"
                spanne     Preisbereich der Klasse, z. B. "bis 400 €" (nur für dich, wird nicht angezeigt)
                name       Modellname
                preis      Ungefährer Preis, nur die Zahl. Wird nicht angezeigt, weil Amazon
                           keine eigenen Preisangaben erlaubt. Er dient nur als Startwert im Rechner.
                preisText  Optional, z. B. "ca. 1.300 bis 1.500 €" (nur für dich)
                empfohlen  true = wird als Empfehlung hervorgehoben (eins pro Gruppe)
                punkte     2–4 Stichpunkte
                fuer       Ein Satz: Für wen?
                hinweis    Optional: ein ehrlicher Satz
                bild       Optional: Foto des Modells
                link       Dein Link zu Amazon. DEINPARTNERTAG-21 wird automatisch
                           durch deine Partner-ID aus einstellungen.js ersetzt.
                           amazon("suchtext") führt direkt zum Produkt, wenn für den
                           Suchtext eine Produktnummer in ASIN steht, sonst zur Suche.
                alternativen  Optional: weitere gute Geräte dieser Preisklasse, auch von
                           anderen Marken. Stehen auf der Karte unter „Auch gut“. Je Gerät:
                           { name: "…", preis: 300, text: "Ein Satz.", link: amazon("…") }
  fragen      Fragen und Antworten: { f: "Frage?", a: "Antwort." }
  rechner     Welcher Rechner gezeigt wird (steht in rechner.js)
  vergleich   Optional, nur ohne Rechner: { vorherTitel, vorher: [...], nachher: [...] } für „Bisher / Mit …“
  video       Welches Erklärvideo gezeigt wird (steht in videos.js)
  profitipp   Optional: ein hervorgehobener Tipp mit titel, text und liste
  erfahrung   Optional: deine eigene Erfahrung mit titel, text und bild
  preisstand  Optional: wann du die Preise dieses Produkts zuletzt geprüft hast (nur für dich)
*/

// Amazon-Produktnummern (ASIN) bei amazon.de, nach dem Suchtext beim jeweiligen Link.
// Steht eine Nummer hier, führt der Link direkt zum Produkt, sonst zur Amazon-Suche.
const ASIN = {
  "bulelink zenith g10": "B0F13KXRG8",
  "philips hue starter set bridge pro e27": "B0FJYBSW14",
  "philips hue essential starter set e27": "B0FJXZJ9N7",
  "wiz a60 e27 color": "B0FLX416G8",
  "philips hue white and color ambiance e27": "B0FJ8TQFGP",
  "midea portasplit cool": "B0GXDWTFR5",
  "bosch cool 4000": "B0BXT5H4FC",
  "midea portasplit": "B0D3PP64JS",
  "zendure solarflow 800 plus": "B0G81SS7VW",
  "anker solix solarbank 3 pro": "B0HGL8GT36",
  "solakon one": "B0HFGVSJNV",
  "de'longhi magnifica start ecam222.60.bg": "B0CCF5KCBQ",
  "de'longhi magnifica evo next ecam312.80.tb": "B0D4ZNSQ6L",
  "de'longhi rivelia exam440.55.w": "B0CDCM3J5G",
  "de'longhi eletta explore cold brew ecam450.65.g": "B0C6PXJBRC",
  "siemens eq500 tp516dx3": "B0CF5T1VBF",
  "nivona nicr 790": "B09VLKTLFF",
  "solakon onlite 900": "B0H6QRNTCF",
  "sunniva 920 ecoflow": "B0D9SW4VCJ",
  "bomann tsg 7405": "B0DPX186Z2",
  "bomann tsg 5702": "B0GVDKY4BX",
  "midea mini tischgeschirrspüler wassertank": "B0FSD2S49L",
  "melitta latticia ot f300-100": "B099ZT1VYR",
  "duravit 3jet 110 minusflow": "B0BBHST8BZ",
  "hansgrohe pulsify select s ecosmart": "B09S151KNJ",
  "grohe vitalio smartactive 130 cube": "B084728GQY",
  "mysoda woody wassersprudler": "B0D4VHS4MC",
  "sodastream crystal 3.0": "B0BLSCTLBB",
  "grohe blue fizz starter set": "B0CM6RSSC5",
  "bosch serie 2 mums2ew00": "B08DHZL8R2",
  "bosch serie 4 mum58w20": "B07NQHZSM6",
  "bosch serie 6 mums6zs13d": "B0CP26TQZF",
  "moulinex clickchef hf4568": "B082Q2VXRZ",
  "moulinex companion xl hf8401": "B0DZN8MRXY",
  "wmf avantgarde küchenmaschine kochfunktion": "B0CKHWY18K",
  "silikon stretchdeckel 12 stück rund": "B07HHRS4GF",
  "silikon stretchdeckel 12 stück rund eckig": "B0875R9NYP",
  "vicmayun reinigungsbürste": "B0FF8YX9KY",
  "kedoyoy reinigungsbürste": "B0D3STRLBD",
  "hoto electric spin scrubber": "B0CPXQ4XQK",
  "ecovacs deebot t80 omni": "B0DZ661PGD",
  "ecovacs deebot t90 pro omni": "B0GK1RD2T7",
  "mova z60 ultra roller complete": "B0G8172MJD",
  "ecovacs deebot t90s pro omni": "B0H94KQLMJ",
  "dreame aqua20 pro ultra roller x complete": "B0H6GKD2DJ",
  "roborock saros 20 flow complete": "B0H83J9FWG",
  "ecovacs deebot x12s omnicyclone": "B0H98Y7FCY",
  "mova v50 ultra complete": "B0GWJY9SLX",
  "dreame l40s pro ultra": "B0DY8V59LY",
  "dreame x60 pro ultra complete": "B0GSWYM8Q2",
  "roborock saros 20": "B0G4NC8KN7",
  "roborock q10 s5+": "B0DWK6P2GH",
  "roborock q7 l5+": "B0DWMLMRWQ",
  "haier i-pro serie 7 plus waschtrockner hwd100-bd14979u1": "B0BT4TNW2P",
  "aeg l9wef80690 waschtrockner": "B09CDPGXXV",
  "hisense wd5s1045bw waschtrockner": "B0BXFPSKNF",
  "bosch serie 6 wng24443 waschtrockner": "B0HBQMP4HK",
  "cosori dual basket 8,5 l": "B0CHB7TNWH",
  "philips dual basket na352": "B0D4Q8QFTH",
  "tefal dual easy fry grill ey905d": "B0CW52TT95",
  "cosori twinfry 10 l": "B0DJH7TPFY",
  "ninja foodi max dual zone af400eu": "B09ZYLM43B",
  "ninja double stack xl sl400eu": "B0CZY23DYB",
  "cosori turbo tower pro smart": "B0DPQ55RVS",
  "cosori iconic dual": "B0GJSQSBRN",
  "salcar trv801w": "B0CDZPB8RZ",
  "eurotronic comet wifi": "B08H8PTDW1",
  "fritz smart thermo 302": "B0G2T5J493",
  "shelly trv heizkörperthermostat wlan": "B0BS9SM67B",
  "aqara w600 heizkörperthermostat": "B0G7YBCW8K",
  "bosch smart home heizkörperthermostat ii +m": "B0DHGSL6FC",
  "homematic ip evo heizkörperthermostat": "B08YDVCBY9",
  "aeg 6000 ap61cb21db": "B0D7Q7HYBL",
  "rowenta x-force flex 13.60 allergy": "B0CYCHTGKC",
  "bosch unlimited 7 bss715carp": "B0BW15D2FS",
  "bosch unlimited 10 bts1042wac": "B0DVHV7MCC",
  "gastroback 42507 reiskocher": "B0009KA4CA",
  "panasonic sr-da152 reiskocher": "B0FJFNMLCR",
  "rommelsbacher mrk 650 reiskocher": "B0FNRCHPNY",
  "cosori reiskocher crc-r501": "B0C5JL8Z7B",
  "yum asia tsuki mini reiskocher": "B0B42Y9FBC",
  "yum asia bamboo reiskocher induktion": "B07WHD5P27",
  "lékué elastische deckel": "B084DRTSDK",
  "kobo clara bw": "B0CZXYV8GT",
  "kobo libra colour": "B0CZXX465Z",
  "pocketbook verse pro": "B0CKDKYR8H",
  "pocketbook era color": "B0D17H31SH",
  "kindle 2026": "B0G4SM81G1",
  "kindle paperwhite 2026": "B0GV5TP9KW",
  "kindle colorsoft 2026": "B0GV642G9D",
  "laifen wave": "B0FFT6HJ8L"
};

const amazon = suche => ASIN[suche]
  ? `https://www.amazon.de/dp/${ASIN[suche]}?tag=DEINPARTNERTAG-21`
  : `https://www.amazon.de/s?k=${encodeURIComponent(suche).replace(/%20/g, "+")}&tag=DEINPARTNERTAG-21`;

const PRODUKTE = [
  {
    id: "saugroboter",
    name: "Saugroboter",
    kategorie: "Haushalt",
    symbol: "🤖",
    bild: "",
    kurz: "Ein Roboter, der deine Wohnung selbstständig saugt und auf Wunsch auch wischt. Danach fährt er zurück in seine Station. Die saugt ihn leer und wäscht bei Wischrobotern auch gleich die Wischwalze oder die Mopps.",
    warum: "Das Beste daran wissen die wenigsten: Du stellst in der App einen Zeitplan ein, und der Roboter putzt, während du bei der Arbeit bist. Du kommst jeden Tag in eine saubere Wohnung und musst dafür so gut wie nichts mehr tun. Für mich ist das nach 14 Jahren immer noch ein massives Upgrade der Lebensqualität.",
    statt: "Statt Kabelsauger und Wischmopp",
    nutzen: "Putzt, während du bei der Arbeit bist.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 5, nachher: 1 },
    fuer: [
      "Du bist tagsüber außer Haus",
      "Du hast Haustiere, Kinder oder viel Hartboden",
      "Du willst deine Zeit lieber mit etwas Schönerem verbringen als mit Saugen und Wischen"
    ],
    nachteile: [
      "Treppen schafft er nicht. Wohnst du auf zwei Etagen, trägst du ihn hoch",
      "Ganz ohne dich geht es nicht: Alle paar Wochen wechselst du den Beutel, beim Wischroboter füllst du auch Frischwasser nach und leerst das Schmutzwasser"
    ],
    erfahrung: {
      titel: "Meine Erfahrung nach 14 Jahren",
      bild: "", bildText: "Foto: du mit deinem Saugroboter",
      text: "Ich nutze seit 14 Jahren Saugroboter und musste seitdem kein einziges Mal mehr selbst saugen oder wischen. Der wichtigste Kniff: Zeitplan einstellen. Dann putzt er, während ich arbeite, und ich komme jeden Abend in eine saubere Wohnung."
    },
    gruppen: [
      { name: "Mit Wischwalze", text: "Eine Walze wischt den Boden und wird dabei laufend mit frischem Wasser gespült. So nimmt sie das Schmutzwasser gleich wieder auf und muss seltener zum Auswaschen zur Station. Dafür kommt sie bei vielen Modellen nicht so nah an Kanten und in Ecken." },
      { name: "Mit rotierenden Mopps", text: "Zwei runde Mopps drehen sich auf dem Boden. Bei vielen Modellen fährt einer seitlich aus und putzt so Kanten und Ecken gründlicher. Dafür verteilen sie Schmutzwasser eher, deshalb fährt er öfter zur Station und wäscht sie. Auf Teppich hebt er die Mopps an oder lässt sie in der Station." },
      { name: "Nur Saugen", text: "Die günstigere Wahl, wenn dir das Wischen nicht so wichtig ist, zum Beispiel bei viel Teppich. Die Station saugt ihn leer. Ein einfaches Wischpad hat er zwar, gründlich wischen musst du aber weiter selbst.", ohne: "wischen" }
    ],
    modelle: [
      {
        gruppe: "Mit Wischwalze",
        stufe: "Günstig", spanne: "bis 400 €",
        name: "ECOVACS DEEBOT T80 OMNI", preis: 349, preisText: "ca. 335 bis 350 €",
        punkte: [
          "Station saugt ihn leer und wäscht die Wischwalze mit heißem Wasser",
          "Wischt gründlich mit einer Walze, die sich auf Teppich anhebt",
          "Findet sich per Laser zurecht, und Haare wickeln sich kaum um die Bürste",
          "Bei smarthomeassistent.de Note 2,6, Preis-Leistung Note 2,0"
        ],
        fuer: "Für dich, wenn du Saugen und Wischen willst, auf den Preis achtest und vor allem Hartboden hast.",
        hinweis: "Ecken putzt er schwächer, weil die Seitenbürste nicht ausfährt. Die Walze hebt sich nur 10 mm an, auf hohem Teppich blieb er im Test hängen.",
        link: amazon("ecovacs deebot t80 omni"),
        alternativen: [
          { name: "ECOVACS DEEBOT T90 PRO OMNI", preis: 477, text: "Etwas teurer und bei smarthomeassistent.de insgesamt besser (Note 2,3).", link: amazon("ecovacs deebot t90 pro omni") }
        ]
      },
      {
        gruppe: "Mit Wischwalze",
        stufe: "Mittelklasse", spanne: "400 bis 700 €",
        name: "MOVA Z60 Ultra Roller Complete", preis: 649, empfohlen: true,
        punkte: [
          "Im Test sehr gut beim Saugen und Wischen (Note 1,4, Platz 2 bei smarthomeassistent.de)",
          "Wischt mit einer Walze, die beim Fahren laufend mit frischem Wasser gespült wird. Die Station wäscht sie mit bis zu 80 °C heißem Wasser",
          "Klettert über Schwellen bis 5 cm",
          "Hebt die Walze auf Teppich an und verschließt sie, damit nichts nass wird"
        ],
        fuer: "Für die meisten Wohnungen, auch mit Haustieren. Wenn du mich fragst, bekommst du hier am meisten für dein Geld.",
        hinweis: "Ganz bis an die Fußleiste kommt die Walze nicht: In Tests blieb beim Wischen an der Wand ein schmaler Streifen.",
        link: amazon("mova z60 ultra roller complete"),
        alternativen: [
          { name: "ECOVACS DEEBOT T90S PRO OMNI", preis: 599, text: "Wischt bei smarthomeassistent.de genauso gut (Note 1,0).", link: amazon("ecovacs deebot t90s pro omni") }
        ]
      },
      // Stand 02.11.2026: Der Dreame Aqua20 Pro Ultra Roller X Complete (B0H6GKD2DJ) ist bei amazon.de gerade nicht lieferbar.
      // Darum steht hier der ECOVACS DEEBOT X12S OmniCyclone, vorher „Auch gut“ auf dieser Karte.
      {
        gruppe: "Mit Wischwalze",
        stufe: "Oberklasse", spanne: "ab 700 €",
        name: "ECOVACS DEEBOT X12S OmniCyclone", preis: 999,
        punkte: [
          "Bei smarthomeassistent.de Note 1,7, und er wischt dort sehr gut (Note 1,0)",
          "Hat im Test alle 53 Hindernisse erkannt und findet sich gut zurecht (Note 1,6)",
          "Die Station saugt ihn ohne Staubbeutel leer, du kaufst also keine Beutel mehr",
          "Im Test haben sich weder in der Hauptbürste noch in der Seitenbürste Haare verheddert"
        ],
        fuer: "Für dich, wenn du vor allem Hartboden oder kurzflorige Teppiche hast und keine Staubbeutel mehr kaufen willst.",
        hinweis: "Bei smarthomeassistent.de blieb er auf langflorigen Teppichen mehrmals hängen, und Ecken und Fugen reinigte er nur mittelmäßig. Insgesamt schneidet dort der günstigere MOVA Z60 besser ab (Note 1,4).",
        link: amazon("ecovacs deebot x12s omnicyclone"),
        alternativen: [
          { name: "Roborock Saros 20 Flow Complete", preis: 1299, text: "Bei smarthomeassistent.de Note 1,5 mit der Bestnote für die Navigation (1,0). Wischt dort aber schwächer (Note 3,4).", link: amazon("roborock saros 20 flow complete") }
        ]
      },
      {
        gruppe: "Mit rotierenden Mopps",
        stufe: "Günstig", spanne: "bis 600 €",
        name: "MOVA V50 Ultra Complete", preis: 529, empfohlen: true,
        punkte: [
          "Bestes Modell mit rotierenden Mopps in seiner Preisklasse bei smarthomeassistent.de (Note 1,9)",
          "Wischt im Test sehr gut (Note 1,0), auch mit warmem Wasser",
          "Station wäscht die Mopps mit 80 °C heißem Wasser und trocknet sie mit heißer Luft",
          "Mopps und Seitenbürste fahren aus und kommen so an Kanten und in Ecken"
        ],
        fuer: "Für Wohnungen mit vielen Ecken und Kanten, wenn du gründlich wischen willst. Erst die Oberklasse schneidet im Test besser ab.",
        hinweis: "Hindernisse erkennt er nicht immer: In Tests übersah er flache Gegenstände und fuhr ab und zu gegen Stuhl- und Tischbeine. Bei smarthomeassistent.de bekommt er für die Navigation nur Note 2,7.",
        link: amazon("mova v50 ultra complete"),
        alternativen: [
          { name: "Dreame L40s Pro Ultra", preis: 499, text: "Etwas günstiger und wischt bei smarthomeassistent.de genauso gut (Note 1,0, gesamt 2,2).", link: amazon("dreame l40s pro ultra") }
        ]
      },
      {
        gruppe: "Mit rotierenden Mopps",
        stufe: "Oberklasse", spanne: "ab 900 €",
        name: "Dreame X60 Pro Ultra Complete", preis: 1499, preisText: "ca. 950 bis 1.500 €",
        punkte: [
          "Bestes Modell mit rotierenden Mopps bei smarthomeassistent.de (Note 1,6 im Nachtest nach einem Firmware-Update)",
          "Saugt sehr stark (Note 1,0) und wischt sehr gut (Note 1,2)",
          "Laut Hersteller fährt er einen Mopp bis zu 18 cm weit aus und schafft Doppelschwellen bis 10 cm. In Tests kletterte er über etwa 4 bis 5 cm hohe Schwellen",
          "Station wäscht die Mopps mit 100 °C heißem Wasser"
        ],
        fuer: "Für alle, die bei Saugen und Wischen das Beste wollen und viele Ecken und Kanten haben.",
        hinweis: "Ab und zu leistet er sich kleinere Navigationspatzer.",
        link: amazon("dreame x60 pro ultra complete"),
        alternativen: [
          { name: "Roborock Saros 20", preis: 949, text: "Bei smarthomeassistent.de Note 1,8 mit der Bestnote für die Navigation (1,0). Nur knapp 8 cm hoch, passt unter flache Möbel. Wischt dort aber schwach (Note 5,1).", link: amazon("roborock saros 20") }
        ]
      },
      {
        gruppe: "Nur Saugen",
        stufe: "Günstig", spanne: "bis 250 €",
        name: "Roborock Q10 S5+", preis: 210, empfohlen: true,
        punkte: [
          "Station saugt ihn leer, in einen Beutel mit 2,7 Litern",
          "Findet sich per Laser gut zurecht, mit Karte und Zeitplan in der App",
          "Preis-Leistung im Test sehr gut (Note 1,0 bei smarthomeassistent.de)"
        ],
        fuer: "Für dich, wenn du das Wischen selbst machst oder vor allem flachen Teppich hast.",
        hinweis: "Insgesamt schneidet er bei smarthomeassistent.de nur befriedigend ab (Note 3,1). Auf Hochflor-Teppich fuhr er sich dort mehrmals fest, und in Ecken putzte er schwach. Sein Wischpad wäscht die Station nicht, das spülst du von Hand aus.",
        link: amazon("roborock q10 s5+"),
        alternativen: [
          { name: "Roborock Q7 L5+", preis: 180, text: "Etwas günstiger und saugt bei smarthomeassistent.de sogar etwas besser (Note 2,6 statt 3,0). Hindernisse erkennt er dort aber gar nicht, insgesamt reicht es nur für Note 3,8.", link: amazon("roborock q7 l5+") }
        ]
      }
    ],
    fragen: [
      { f: "Nach welchen Tests wählst du die Roboter aus?", a: "Bei Saugrobotern verlasse ich mich auf die ausführlichen Tests von smarthomeassistent.de. Dort durchläuft jeder Roboter dieselben Prüfungen, von Teppich und Haaren bis zu Hindernissen und Türschwellen. Ich empfehle dir die Modelle, die dort in ihrer Preisklasse am besten abschneiden, und dazu kommt meine eigene Erfahrung aus 14 Jahren. Wird ein Roboter nach einem Update nochmal getestet, zum Beispiel weil die Navigation besser geworden ist, zählt für mich der neuere Test." },
      { f: "Brauche ich die Wischfunktion?", a: "Bei viel Hartboden wie Fliesen, Laminat oder Parkett auf jeden Fall: Der Boden bleibt sauber, und du füllst nie wieder einen Eimer. Hast du vor allem Teppich, oder wischt du ohnehin gern selbst, reicht ein Roboter, der nur saugt. Der kostet oft nur die Hälfte." },
      { f: "Wischwalze oder rotierende Mopps: Was ist besser?", a: "Beide können sehr gut wischen: Im Test bekommen der MOVA Z60 mit Walze und der MOVA V50 mit Mopps beim Wischen jeweils die Bestnote 1,0. Die Walze nimmt das Schmutzwasser sofort wieder auf und muss deshalb seltener zum Auswaschen zur Station. Die Mopps kommen besser an Kanten und in Ecken, verteilen Schmutzwasser aber eher. Hast du viele Ecken, Nischen und Möbelkanten, nimm Mopps. Hast du vor allem offene Flächen, passt eine Walze gut." },
      { f: "Bleibt er an Kabeln oder Socken hängen?", a: "Modelle mit Kamera erkennen Kabel, Socken und Schuhe meist und fahren drumherum, viele auch Haustiere. Günstige Modelle ohne Kamera fahren eher mal über ein Kabel oder bleiben hängen, dann räumst du vorher kurz auf. Einen Kabelsalat unterm Schreibtisch räumst du bei jedem Modell besser einmal auf." },
      { f: "Kann ich ihn starten, wenn ich nicht zu Hause bin?", a: "Ja, und genau das ist der Trick. In der App legst du einen Zeitplan an, zum Beispiel montags bis freitags um 9 Uhr. So mache ich es seit Jahren. Du kannst ihn aber auch unterwegs per Handy starten." },
      { f: "Kommt er über Türschwellen und Teppichkanten?", a: "Die meisten Modelle schaffen Schwellen bis etwa 2 cm, gute Modelle wie der MOVA Z60 bis etwa 5 cm. Auf Teppich hebt ein Wischroboter Mopps oder Walze an, damit nichts nass wird." },
      { f: "Was muss ich noch selbst machen?", a: "Alle paar Wochen den Staubbeutel wechseln und ab und zu die Bürste sauber machen. Beim Wischroboter kommt dazu: Frischwasser nachfüllen und das Schmutzwasser ausleeren, sobald er Bescheid sagt. Lass das Schmutzwasser aber nicht tagelang stehen, sonst fängt es an zu riechen." },
      { f: "Was kostet er im Unterhalt?", a: "Beutel, Filter, Bürsten und Mopps oder Walze nutzen sich ab. Laut einem Kostencheck von netzwelt.de kommen bei einem Saug- und Wischroboter mit Station etwa 45 bis 185 € im Jahr zusammen, ohne Wischen etwa 25 bis 120 €. Strom kommt mit etwa 15 bis 25 € im Jahr dazu, bei Stationen mit Heißwasser und Trocknung etwas mehr." },
      { f: "MOVA kenne ich nicht. Ist das eine gute Marke?", a: "MOVA ist eine Schwestermarke von Dreame, beide gehören zur Dreame Group. Technik und App ähneln sich stark. Die MOVA-Roboter auf dieser Seite schneiden im Test gut bis sehr gut ab." },
      { f: "Funktioniert er auf mehreren Etagen?", a: "Er merkt sich mehrere Karten. Die Station bleibt aber an einem Ort. Auf die andere Etage trägst du ihn, und leer saugen kann er sich erst wieder an der Station." },
      { f: "Wie laut ist er?", a: "Meist etwa so laut wie ein Gespräch und damit leiser als ein normaler Staubsauger. Und weil er läuft, wenn du nicht da bist, bekommst du davon ohnehin nichts mit. Nur die Station ist beim Absaugen ein paar Sekunden richtig laut." }
    ],
    rechner: "saugroboter",
    video: "saugroboter",
    profitipp: {
      titel: "So richtest du ihn ein",
      text: "Du nimmst dir einmal eine Viertelstunde Zeit, danach läuft alles von allein:",
      liste: [
        "App installieren und den Roboter einmal die Wohnung abfahren lassen. Er zeichnet dabei eine Karte.",
        "Einen Zeitplan anlegen, zum Beispiel montags bis freitags um 9 Uhr saugen und wischen.",
        "Teppiche in der App markieren, damit er dort nur saugt und nicht wischt."
      ]
    }
  },
  {
    id: "waschtrockner",
    name: "Waschtrockner",
    kategorie: "Haushalt",
    symbol: "🧺",
    bild: "",
    kurz: "Waschmaschine und Trockner in einem Gerät. Er wäscht und trocknet in einem Durchgang, und du musst die nasse Wäsche nicht einmal umräumen.",
    warum: "Morgens Wäsche rein, Endzeit einstellen, ab zur Arbeit. Wenn du heimkommst, ist alles gewaschen und trocken. Kein Wäscheständer mehr im Wohnzimmer, kein Aufhängen, kein Abnehmen. Viele Geräte haben dazu ein Dampfprogramm, das Falten glättet. Alltagskleidung musst du dann oft gar nicht mehr bügeln.",
    statt: "Statt Wäscheständer und Bügeln",
    nutzen: "Morgens rein, abends gewaschen und trocken.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 4, nachher: 1 },
    fuer: [
      "Du willst keinen Wäscheständer mehr in der Wohnung",
      "Für Waschmaschine und Trockner nebeneinander fehlt dir der Platz",
      "Du hast Besseres zu tun als Bügeln"
    ],
    nachteile: [
      "Er trocknet nur etwa 6 kg auf einmal, auch wenn 10 kg in die Trommel passen. Willst du in einem Rutsch waschen und trocknen, füllst du ihn also nur gut halb",
      "Waschen und Trocknen dauern zusammen lange, mit voller Ladung oft 8 Stunden und mehr. Weil er läuft, während du weg bist, merkst du davon aber kaum etwas",
      "Trocknen kostet Strom: Bei drei Ladungen pro Woche sind es etwa 10 € im Monat"
    ],
    erfahrung: {
      titel: "Meine Erfahrung",
      bild: "", bildText: "Foto: dein Waschtrockner",
      text: "Ich habe einen Waschtrockner von Haier und will nie wieder ohne. Morgens kommt die Wäsche rein, und wenn ich von der Arbeit komme, ist sie gewaschen und getrocknet. Bügeln muss ich auch nicht mehr: Das Dampfprogramm i-\u2060Refresh macht die Kleidung frisch, und sie kommt vor allem faltenfrei raus."
    },
    profitipp: {
      titel: "So ist die Wäsche fertig, wenn du heimkommst",
      text: "Die Taste heißt je nach Gerät „Endzeit“, „Fertig in“ oder „Startzeitvorwahl“. So nutzt du sie:",
      liste: [
        "Morgens Wäsche rein, höchstens so viel, wie er trocknen kann (meist 6 kg)",
        "Das Programm „Waschen und Trocknen“ wählen",
        "Endzeit einstellen, zum Beispiel 18 Uhr. Er rechnet selbst aus, wann er anfangen muss",
        "Abends ist die Wäsche trocken. Nimm sie bald heraus, dann bleibt sie schön glatt"
      ]
    },
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 550 €",
        name: "Hisense WD5S1045BW", preis: 490, preisText: "ca. 470 bis 530 €",
        punkte: [
          "Wäscht 10,5 kg und trocknet 6 kg am Stück",
          "Dosiert das Waschmittel selbst, du füllst nur ab und zu nach",
          "Mit Dampfprogramm und App",
          "Im Test sehr gut (93 von 100 Punkten bei ETM Testmagazin, Heft 10/2024)"
        ],
        fuer: "Für dich, wenn du Waschen und Trocknen in einem willst und auf den Preis achtest.",
        hinweis: "Beim Waschen und Trocknen braucht er mehr Strom und Wasser als der AEG mit Wärmepumpe.",
        link: amazon("hisense wd5s1045bw waschtrockner")
      },
      {
        stufe: "Mittelklasse", spanne: "550 bis 900 €",
        name: "Haier I-Pro Serie 7 Plus (HWD100-BD14979U1)", preis: 650, preisText: "ab ca. 640 €", empfohlen: true,
        punkte: [
          "Wäscht 10 kg und trocknet 6 kg am Stück",
          "Dampfprogramm i-\u2060Refresh: frischt die Kleidung auf und glättet Falten",
          "Mit Zeitvorwahl, auch per App steuerbar",
          "Dosiert Waschmittel und Weichspüler selbst"
        ],
        fuer: "Für die meisten Haushalte. Mein Tipp, denn ich habe selbst einen Haier und will nie wieder ohne.",
        hinweis: "Waschen und Trocknen mit voller Ladung dauert gut 8 Stunden.",
        link: amazon("haier i-pro serie 7 plus waschtrockner hwd100-bd14979u1"),
        alternativen: [
          { name: "Bosch Serie 6 WNG24443", preis: 840, text: "Das ältere Modell WNG24440 aus derselben Serie war Preistipp bei Stiftung Warentest (Note 2,1, Heft 11/2023). Wäscht 10,5 kg und trocknet 6 kg.", link: amazon("bosch serie 6 wng24443 waschtrockner") }
        ]
      },
      {
        stufe: "Oberklasse", spanne: "ab 1.000 €",
        name: "AEG Serie 9000 L9WEF80690", preis: 1100, preisText: "ca. 1.050 bis 1.350 €",
        punkte: [
          "Trocknet mit Wärmepumpe und braucht so weniger Strom und Wasser",
          "Wäscht 9 kg und trocknet 6 kg am Stück",
          "Mit Dampfprogramm zum Auffrischen",
          "Testsieger bei Stiftung Warentest (Note 2,0, Heft 11/2023)"
        ],
        fuer: "Für dich, wenn du viel wäschst und auf lange Sicht Strom sparen willst. Dafür zahlst du am Anfang deutlich mehr.",
        hinweis: "Waschen und Trocknen mit voller Ladung dauert fast 10 Stunden. Der Test ist schon von 2023.",
        link: amazon("aeg l9wef80690 waschtrockner")
      }
    ],
    fragen: [
      { f: "Waschtrockner oder lieber Waschmaschine und Trockner getrennt?", a: "Zwei Geräte schaffen mehr auf einmal: Während der Trockner läuft, wäscht die Maschine schon die nächste Ladung. Dafür brauchst du doppelt so viel Platz. Ein Waschtrockner passt dorthin, wo jetzt deine Waschmaschine steht, und du musst die nasse Wäsche nie umräumen. Genau das macht ihn so bequem. Wäschst du für eine große Familie mehrere Ladungen am Tag, sind zwei Geräte die bessere Wahl." },
      { f: "Wie viel Wäsche kann er trocknen?", a: "Meist etwa 6 kg, auch wenn er 9 oder 10 kg waschen kann. 6 kg sind zum Beispiel rund 40 T-Shirts. Wenn du in einem Rutsch waschen und trocknen willst, füllst du nur so viel ein, wie er trocknen kann." },
      { f: "Muss ich wirklich nicht mehr bügeln?", a: "Bei Alltagskleidung meistens nicht. Ein Dampfprogramm wie i-\u2060Refresh bei meinem Haier frischt die Kleidung auf und glättet Falten. Wichtig ist nur, dass du die Wäsche bald nach dem Trocknen herausnimmst und zusammenlegst, dann bleibt sie glatt. Ein Hemd für einen wichtigen Termin bügelst du vielleicht trotzdem kurz nach." },
      { f: "Liegt die Wäsche dann den ganzen Tag in der Trommel?", a: "Ja, aber trocken. Mit der Endzeit fängt er erst so spät an, dass er fertig ist, wenn du heimkommst. Bis dahin liegt die Wäsche trocken in der Trommel. Nasse Wäsche solltest du dagegen nicht stundenlang liegen lassen, sonst fängt sie an zu riechen." },
      { f: "Was kostet das Trocknen?", a: "Ohne Wärmepumpe braucht ein Trockengang je nach Gerät gut 2 bis 2,5 kWh Strom. Das sind bei 35 Cent pro kWh rund 75 Cent. Bei drei Ladungen pro Woche kommst du auf etwa 10 € im Monat. Ein Gerät mit Wärmepumpe wie der AEG braucht weniger Strom und Wasser: Stiftung Warentest rechnet bei ihm mit rund 760 € weniger Betriebskosten in zehn Jahren als bei den getesteten Geräten von Bosch und Siemens." },
      { f: "Was muss ich sauber halten?", a: "Ab und zu das Flusensieb unten an der Pumpe und das Waschmittelfach ausspülen und die Gummidichtung an der Tür abwischen. Einmal im Monat ein heißes Programm mit leerer Trommel hält ihn frisch." },
      { f: "Braucht er einen besonderen Anschluss?", a: "Nein. Er braucht denselben Wasseranschluss, denselben Abfluss und dieselbe Steckdose wie eine Waschmaschine. Du stellst ihn also einfach an ihren Platz." }
    ],
    rechner: "waschtrockner",
    video: "waschtrockner"
  },
  {
    id: "airfryer",
    name: "Airfryer mit zwei Körben",
    kurzname: "Airfryer",
    kategorie: "Küche",
    symbol: "🍟",
    bild: "",
    kurz: "Eine Heißluftfritteuse mit zwei Körben. Bei mir hat sie vor allem die Pfanne ersetzt, oft auch den Backofen. In jedem Korb gart etwas anderes, mit eigener Temperatur und Zeit und fast ohne Öl. Und danach hast du quasi keinen Abwasch.",
    warum: "Alles rein, Sync drücken, ab auf die Couch. Du stehst nicht mehr neben der Pfanne, denn das Gerät startet jeden Korb so, dass Hähnchen und Gemüse gleichzeitig fertig sind. Wenn es piept, ist das Essen fertig. Und es schmeckt sogar besser: Gemüse wird knackiger und kräftiger, Hähnchen jedes Mal zart. Hinterher sparst du dir den ganzen Abwasch von Pfannen und Töpfen, denn es brennt nichts an, und die Körbe kommen einfach in die Spülmaschine.",
    statt: "Statt Pfanne und Backofen",
    nutzen: "Ab auf die Couch, und danach fast kein Abwasch.",
    spart: ["muehe", "zeit", "geld"],
    muehe: { vorher: 4, nachher: 1 },
    fuer: [
      "Du stehst bisher oft am Herd und wendest Fleisch oder Gemüse in der Pfanne",
      "Du willst nach dem Essen lieber entspannen, statt Pfannen und Töpfe zu schrubben",
      "Hauptgericht und Beilage sollen gleichzeitig fertig sein",
      "Du kochst meist für zwei bis fünf Personen"
    ],
    nachteile: [
      "Er braucht mehr Platz auf der Arbeitsfläche als ein Gerät mit einem Korb. Ist deine Küche klein, nimm ein Gerät mit Körben übereinander",
      "Jeder Korb ist meist kleiner als ein großer Einzelkorb. Willst du ein ganzes Hähnchen machen, brauchst du einen großen Korb",
      "Für Gerichte mit viel Soße oder flüssigem Teig ist er nichts. Dafür brauchst du weiter Herd oder Ofen"
    ],
    erfahrung: {
      titel: "Meine Erfahrung",
      bild: "", bildText: "Foto: dein Airfryer",
      text: "Seit ich meinen Airfryer habe, habe ich meine Pfannen nicht mehr benutzt. Und alles schmeckt besser: Gemüse wird knackiger und schmeckt intensiver, Hähnchen wird jedes Mal perfekt zart. Dazu habe ich quasi keinen Abwasch mehr. Es brennt nie etwas an, die Körbe packe ich einfach in die Spülmaschine oder wische sie am Ende mit einem feuchten Lappen aus."
    },
    profitipp: {
      titel: "So wird alles gleichzeitig fertig",
      text: "Der Knopf heißt bei den meisten Geräten „Sync“, beim Cosori Dual Basket „Sync Finish“. So nutzt du ihn:",
      liste: [
        "Korb 1: zum Beispiel Hähnchenschenkel, 200 °C, 25 Minuten",
        "Korb 2: zum Beispiel Brokkoli und Paprika, 190 °C, 12 Minuten",
        "Sync drücken und starten. Korb 2 wartet und legt selbstständig später los",
        "Es piept, beides ist fertig. Jetzt musst du nur noch essen"
      ]
    },
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 130 €",
        name: "Cosori Dual Basket 8,5 L", preis: 117, preisText: "ca. 110 bis 130 €",
        punkte: [
          "Zwei Körbe mit je 4,25 Litern, jeder mit eigener Temperatur und Zeit",
          "Knopf „Sync Finish“: Beide Körbe werden gleichzeitig fertig",
          "Erinnert dich per Piepton ans Schütteln",
          "Gut bei Stiftung Warentest (Note 2,3, Heft 1/2025), damals Testsieger bei den Geräten mit zwei Körben"
        ],
        fuer: "Für alle, die zwei Körbe wollen und auf den Preis achten.",
        link: amazon("cosori dual basket 8,5 l"),
        alternativen: [
          { name: "Philips Dual Basket 3000 (NA352)", preis: 110, text: "Ein großer Korb mit 6 Litern und ein kleiner mit 3. Gut für Hauptgericht plus Beilage.", link: amazon("philips dual basket na352") },
          { name: "Tefal Dual Easy Fry & Grill", preis: 100, text: "Zwei Körbe mit 5,2 und 3,1 Litern, mit Grillfunktion.", link: amazon("tefal dual easy fry grill ey905d") }
        ]
      },
      {
        stufe: "Mittelklasse", spanne: "130 bis 200 €",
        name: "Cosori Dual Blaze TwinFry 10 L", preis: 180, preisText: "ca. 170 bis 200 €",
        punkte: [
          "Zwei Körbe mit je 5 Litern, oder ein großer mit 10 Litern, wenn du die Trennwand herausnimmst",
          "Sync-Knopf: Alles wird gleichzeitig fertig",
          "Schickt dir über die App eine Nachricht aufs Handy, sobald das Essen fertig ist",
          "Heizt von oben und unten, bis 240 °C"
        ],
        fuer: "Für dich, wenn du zwei Körbe nebeneinander willst oder ab und zu einen großen Korb mit 10 Litern brauchst.",
        hinweis: "Starten kannst du ihn aus Sicherheitsgründen nur direkt am Gerät, nicht per App.",
        link: amazon("cosori twinfry 10 l"),
        alternativen: [
          { name: "Ninja Foodi MAX Dual Zone (AF400)", preisText: "ca. 140 bis 180 €", text: "Zwei Körbe nebeneinander mit zusammen 9,5 Litern, mit Sync.", link: amazon("ninja foodi max dual zone af400eu") },
          { name: "Ninja Double Stack XL", preisText: "ab ca. 160 €", text: "Zwei Körbe übereinander, braucht wenig Platz auf der Arbeitsfläche.", link: amazon("ninja double stack xl sl400eu") }
        ]
      },
      {
        stufe: "Oberklasse", spanne: "ab 200 €",
        name: "Cosori Turbo Tower Pro Smart", preis: 279, preisText: "ca. 250 bis 280 €", empfohlen: true,
        punkte: [
          "Testsieger mit zwei Körben bei Stiftung Warentest (Note 2,2, Heft 9/2026)",
          "Zwei Körbe übereinander, zusammen 10,8 Liter. Braucht weniger Platz als zwei Körbe nebeneinander",
          "Sync-Knopf: Beide Körbe werden gleichzeitig fertig, mit App (VeSync)",
          "Körbe mit Keramik-Beschichtung"
        ],
        fuer: "Für die meisten Haushalte, gerade wenn die Arbeitsfläche knapp ist. Mein Tipp: Er ist Testsieger bei den Geräten mit zwei Körben, und ich nutze ihn selbst.",
        hinweis: "Starten kannst du ihn aus Sicherheitsgründen nur direkt am Gerät, nicht per App.",
        link: amazon("cosori turbo tower pro smart"),
        alternativen: [
          { name: "Cosori ICONIC Dual", preis: 369, text: "Gehäuse aus Edelstahl, Körbe mit Keramik-Beschichtung, laut Hersteller ohne PFAS. Schön, wenn dir die Optik wichtig ist.", link: amazon("cosori iconic dual") }
        ]
      }
    ],
    fragen: [
      { f: "Ersetzt er wirklich die Pfanne?", a: "Bei mir ja: Seit ich meinen Airfryer habe, habe ich meine Pfannen nicht mehr benutzt. Hähnchen, Gemüse, Kartoffeln, Fisch oder Würstchen gelingen darin, ohne dass du am Herd stehst, und ohne Fettspritzer. Für Soßen, Rührei oder Pfannkuchen brauchst du weiter Herd und Pfanne." },
      { f: "Wie viel Abwasch habe ich danach?", a: "Quasi keinen. Im Airfryer brennt nichts an. Die Körbe packst du einfach in die Spülmaschine oder wischst sie am Ende kurz mit einem feuchten Lappen aus. Den kompletten Abwasch von Pfannen und Töpfen sparst du dir." },
      { f: "Schmeckt das wirklich besser als aus der Pfanne?", a: "Für mich ja: Gemüse wird knackiger und schmeckt intensiver, Hähnchen wird jedes Mal zart. Die heiße Luft strömt rund um das Essen. So bräunt es außen schnell und bleibt innen saftig, ohne im Fett zu liegen." },
      { f: "Was macht der Sync-Knopf genau?", a: "Du stellst für jeden Korb Temperatur und Zeit ein, zum Beispiel Hähnchen bei 200 °C für 25 Minuten und Gemüse bei 190 °C für 12 Minuten. Mit Sync startet der Korb mit der kürzeren Zeit selbstständig später. So sind beide gleichzeitig fertig, und nichts muss warmgehalten werden." },
      { f: "Bekomme ich eine Nachricht aufs Handy oder auf die Uhr?", a: "Aufs Handy ja, wenn das Gerät WLAN hat: Der TwinFry meldet sich zum Beispiel über die kostenlose App VeSync, sobald das Essen fertig ist. Wenn deine Smartwatch die Mitteilungen vom Handy anzeigt, siehst du die Nachricht meist auch dort. Geräte ohne WLAN piepen nur." },
      { f: "Muss ich zwischendurch schütteln oder umrühren?", a: "Musst du nicht. Pommes und Gemüse werden aber gleichmäßiger knusprig, wenn du sie zwischendurch einmal kurz schüttelst. Der Dual Basket erinnert dich mit einem Piepton daran. Hähnchenschenkel kannst du einmal wenden, damit sie rundum braun werden." },
      { f: "Reicht nicht auch ein Gerät mit einem Korb?", a: "Wenn du meist nur eine Sache auf einmal machst, ja, und das ist meist günstiger. Ein Beispiel ist der Cosori Clear Blaze mit 6,2 Litern und Sichtfenster. Zwei Körbe lohnen sich, sobald Hauptgericht und Beilage zusammen fertig werden sollen." },
      { f: "Ersetzt er auch den Backofen?", a: "Für ein bis vier Portionen fast immer. Pommes, Gemüse, Hähnchen, Fisch und Aufbackbrötchen gelingen sogar schneller. Für Pizza, Blechkuchen oder einen großen Auflauf brauchst du den Ofen weiter." },
      { f: "Spart er wirklich Strom?", a: "Ja, vor allem bei kleineren Mengen. Die Körbe sind klein und schnell heiß, Vorheizen ist meist nicht nötig oder dauert nur ein paar Minuten. Laut Stiftung Warentest (Heft 9/2026) sind Airfryer fast doppelt so schnell wie ein Backofen und brauchen deutlich weniger Strom." },
      { f: "Ist die Beschichtung unbedenklich?", a: "Nach heutigem Wissen ja. Viele Körbe haben eine Antihaft-Beschichtung aus PTFE, bekannt als Teflon. Laut Bundesinstitut für Risikobewertung ist sie bei normalem Gebrauch unbedenklich. Zersetzen kann sie sich erst ab etwa 360 °C, ein Airfryer bleibt deutlich darunter. PTFE gehört aber zu den PFAS, die bei Herstellung und Entsorgung die Umwelt belasten. Wenn du darauf verzichten willst, nimm ein Gerät mit Keramik-Beschichtung ohne PFAS. Das gibt Cosori zum Beispiel für den Turbo Tower Pro Smart und den ICONIC Dual an. Egal bei welchem Modell: Keine Metallgabel und kein Scheuermittel, dann hält die Beschichtung lange." }
    ],
    rechner: "airfryer",
    video: "airfryer"
  },
  {
    id: "thermostate",
    name: "Smarte Heizkörper-Thermostate",
    kurzname: "smarten Thermostaten",
    kategorie: "Haushalt",
    symbol: "🌡️",
    bild: "",
    kurz: "Sie kommen statt der normalen Drehregler an deine Heizkörper und heizen nach deinem Plan. Steuern kannst du sie per App oder direkt am Gerät.",
    warum: "Die Vorteile liegen auf der Hand: Kurz bevor du heimkommst, ist die Wohnung schon warm. Während du arbeitest, drehen die Thermostate die Heizung selbstständig herunter. Du kannst also gar nicht mehr vergessen, sie runterzudrehen, und sparst Geld. Dafür legst du einmal einen Heizplan für die Woche an. Und die Thermostate selbst sind in der Regel günstig.",
    statt: "Statt Heizung auf- und zudrehen",
    nutzen: "Warm, wenn du heimkommst. Runtergedreht, wenn du weg bist.",
    spart: ["geld", "muehe"],
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Du bist tagsüber oft weg, zum Beispiel bei der Arbeit",
      "Du vergisst manchmal, die Heizung runterzudrehen",
      "Du willst abends in eine warme Wohnung kommen",
      "Du wohnst zur Miete: Du schraubst sie selbst an und beim Auszug wieder ab"
    ],
    nachteile: [
      "Thermostate, die direkt ins WLAN gehen, schneiden in Tests schwächer ab. Die besten Modelle brauchen eine Zentrale, die einmal extra kostet, wenn du noch keine hast",
      "Drehst du die Heizung schon jetzt jedes Mal selbst runter, sparst du weniger Geld. Dann hast du den Kaufpreis erst nach ein paar Jahren wieder drin, die Bequemlichkeit hast du aber sofort",
      "Die Batterien halten laut Herstellern meist bis zu zwei Jahre, dann wechselst du sie"
    ],
    profitipp: {
      titel: "So stellst du deinen Heizplan ein",
      text: "Für den Anfang reicht ein einfacher Plan für die Werktage und einer fürs Wochenende:",
      liste: [
        "Kurz vor dem Aufstehen warm, zum Beispiel 21 Grad",
        "Wenn du aus dem Haus gehst, runter auf 16 bis 17 Grad. Ganz aus lieber nicht, sonst kühlen die Wände aus",
        "Kurz bevor du heimkommst, wieder warm",
        "Nachts im Schlafzimmer 16 bis 18 Grad"
      ]
    },
    gruppen: [
      { name: "Ohne Zentrale", text: "Diese Thermostate verbindest du direkt mit deinem WLAN oder deiner FRITZ!Box. Du kaufst nichts dazu und bist schnell fertig. Dafür schneiden die WLAN-Modelle in Tests schwächer ab. Das FRITZ!-Modell war bei Stiftung Warentest (Heft 9/2023) fast so gut wie der Testsieger.", ohne: "zentrale" },
      { name: "Mit Zentrale", text: "Diese Thermostate funken an eine kleine Zentrale, auch Gateway oder Hub genannt, die mit deinem Router verbunden ist. Sie kostet einmal extra. Bei manchen Modellen reicht ein Gerät, das du vielleicht schon hast, zum Beispiel ein HomePod mini oder ein Google Nest Hub (2. Generation). Dafür schneiden diese Thermostate in Tests am besten ab, und die Batterien halten laut Herstellern bis zu zwei Jahre." }
    ],
    modelle: [
      {
        gruppe: "Ohne Zentrale",
        stufe: "Günstig", spanne: "direkt ins WLAN",
        name: "SALCAR TRV801W", preis: 40, preisText: "ca. 30 bis 45 € pro Stück",
        punkte: [
          "Geht direkt in dein WLAN, ganz ohne Zentrale",
          "Funktioniert mit Alexa und Google",
          "Merkt, wenn ein Fenster offen ist, und dreht dann runter",
          "Übersichtliche App (Smart Life oder Tuya) mit Heizplan für jeden Tag"
        ],
        fuer: "Für dich, wenn du es günstig willst und keine FRITZ!Box hast. Ich habe es selbst bei mir hängen.",
        hinweis: "Bei smarthomeassistent.de befriedigend (Note 3,1).",
        link: amazon("salcar trv801w"),
        alternativen: [
          { name: "Eurotronic Comet WiFi", preis: 35, text: "Bei Stiftung Warentest befriedigend (Note 2,7, Heft 9/2023). Es merkt, wenn ein Fenster offen ist.", link: amazon("eurotronic comet wifi") }
        ]
      },
      {
        gruppe: "Ohne Zentrale",
        stufe: "Mittelklasse", spanne: "direkt an die FRITZ!Box",
        name: "FRITZ!Smart Thermo 302", preis: 50, preisText: "ca. 45 bis 60 € pro Stück", empfohlen: true,
        punkte: [
          "Preistipp bei Stiftung Warentest (gut, Note 1,9, Heft 9/2023)",
          "Verbindet sich direkt mit deiner FRITZ!Box, du brauchst keine extra Zentrale",
          "Merkt, wenn ein Fenster offen ist, und dreht dann runter",
          "Display am Gerät, die Batterien sind schon dabei"
        ],
        fuer: "Für dich, wenn dein Router eine FRITZ!Box ist. Dann ist es die beste Wahl ohne extra Zentrale.",
        hinweis: "Es funkt nicht über WLAN, sondern über DECT, wie ein schnurloses Telefon. Deshalb klappt es nur mit einer FRITZ!Box mit DECT, das haben die meisten. Früher hieß es FRITZ!DECT 302.",
        link: amazon("fritz smart thermo 302")
      },
      {
        gruppe: "Mit Zentrale",
        stufe: "Günstig", spanne: "mit Aqara-Hub oder Matter",
        name: "Aqara W600", preis: 50, preisText: "ca. 45 bis 55 € pro Stück", empfohlen: true,
        punkte: [
          "Platz 1 bei smarthomeassistent.de (sehr gut, Note 1,4)",
          "Sehr leise: Den Motor hörst du kaum",
          "Die Batterien halten laut Hersteller bis zu zwei Jahre",
          "Funktioniert mit Alexa, Google und Apple Home"
        ],
        fuer: "Für die meisten: Im Test ist es das beste Thermostat, und trotzdem ist es günstig.",
        hinweis: "Es braucht eine Zentrale: einen Aqara-Hub oder ein Gerät für Matter mit Thread, zum Beispiel einen HomePod mini oder einen Google Nest Hub (2. Generation). Über Matter hat es etwas weniger Funktionen als mit dem Aqara-Hub.",
        link: amazon("aqara w600 heizkörperthermostat")
      },
      {
        gruppe: "Mit Zentrale",
        stufe: "Mittelklasse", spanne: "mit Matter oder Bosch-Controller",
        name: "Bosch Smart Home Heizkörper-Thermostat II [+M]", preis: 62, preisText: "ca. 60 bis 70 € pro Stück",
        punkte: [
          "Bei smarthomeassistent.de sehr gut (Note 1,4)",
          "Sehr leise, mit Display, auch direkt am Gerät bedienbar",
          "Die Batterien halten laut Hersteller bis zu zwei Jahre",
          "Funktioniert mit Alexa, Google und Apple Home"
        ],
        fuer: "Für dich, wenn dir schönes Design wichtig ist oder du schon Bosch Smart Home hast.",
        hinweis: "Es läuft über Matter mit Thread, zum Beispiel mit einem HomePod mini oder Google Nest Hub (2. Generation), oder mit dem Bosch Smart Home Controller II. Offene Fenster erkennt es nur mit einem extra Fensterkontakt. Achte auf „[+M]“ im Namen: Das ältere Modell ohne diesen Zusatz braucht immer den Bosch-Controller.",
        link: amazon("bosch smart home heizkörperthermostat ii +m")
      },
      {
        gruppe: "Mit Zentrale",
        stufe: "Oberklasse", spanne: "mit Homematic-IP-Zentrale",
        name: "Homematic IP Evo", preis: 78, preisText: "ca. 75 bis 100 € pro Stück",
        punkte: [
          "Testsieger bei Stiftung Warentest (gut, Note 1,7, Heft 9/2023)",
          "Merkt selbst, wenn ein Fenster offen ist, und dreht dann runter",
          "Display am Gerät und Boost-Funktion, wenn es schnell warm werden soll",
          "Großes System: Fensterkontakte, Wandthermostate und vieles mehr passen dazu"
        ],
        fuer: "Für dich, wenn du die ganze Wohnung ausstatten und später erweitern willst.",
        hinweis: "Es braucht eine Homematic-IP-Zentrale, zum Beispiel den Access Point, der per Kabel an deinem Router hängt. Bei smarthomeassistent.de gut (Note 1,8).",
        link: amazon("homematic ip evo heizkörperthermostat")
      }
    ],
    ohneTeuer: { stufe: "Oberklasse", titel: "Lieber mit Zentrale", text: "Ein teureres Thermostat ohne Zentrale, das in Tests überzeugt und bei Amazon zu haben ist, habe ich nicht gefunden. Mit FRITZ!Box ist das FRITZ!-Modell schon die beste Wahl. Die Thermostate, die in Tests am besten abschneiden, brauchen eine Zentrale, schau dafür in die Gruppe „Mit Zentrale“." },
    fragen: [
      { f: "Wie viel spare ich wirklich?", a: "Mit einem Heizplan rund 10 Prozent der Heizkosten, sagt co2online. Als Faustregel spart jedes Grad weniger rund 6 Prozent Heizenergie. Wie viel es bei dir ist, hängt davon ab, wie oft du weg bist und wie du bisher heizt. Stiftung Warentest (Heft 9/2023) rechnet für eine eher schlecht gedämmte Wohnung mit 70 m² mit rund 100 € im Jahr. Rechne es unten im Rechner für dich aus." },
      { f: "Mit oder ohne Zentrale: Was passt zu mir?", a: "Ohne Zentrale ist der einfachste Einstieg: auspacken, mit dem WLAN verbinden, fertig. Das passt, wenn du nur wenige Heizkörper steuern willst und es günstig sein soll. Mit Zentrale zahlst du einmal etwas mehr, bekommst aber die Thermostate, die in Tests am besten abschneiden. Außerdem kannst du später Fensterkontakte oder ein Wandthermostat dazunehmen. Das lohnt sich vor allem, wenn du die ganze Wohnung ausstatten willst. Hast du eine FRITZ!Box, nimm das FRITZ!-Modell: Dann ist dein Router schon die Zentrale." },
      { f: "Warum gibt es so wenige WLAN-Thermostate?", a: "WLAN braucht mehr Strom als die Funkarten, die Thermostate mit Zentrale nutzen. Wichtig: Dein Router muss WLAN mit 2,4 GHz haben. Das ist bei fast allen Routern so." },
      { f: "Passen sie auf meine Heizkörper?", a: "Auf fast alle normalen Heizkörperventile. Die meisten haben ein Gewinde nach dem Standard M30 x 1,5, darauf passen alle Modelle hier. Für andere Ventile, zum Beispiel von Danfoss, liegen oft Adapter bei, oder du bekommst sie für wenig Geld. Für eine Fußbodenheizung brauchst du dagegen ein Raumthermostat an der Wand." },
      { f: "Darf ich sie als Mieter einbauen?", a: "In der Regel ja, denn du veränderst nichts dauerhaft. Du schraubst nur den alten Drehregler ab und das neue Thermostat drauf. Wasser musst du dafür nicht ablassen, und einen Handwerker brauchst du auch nicht. Heb die alten Regler gut auf und schraub sie beim Auszug wieder dran. Im Zweifel fragst du kurz deinen Vermieter." },
      { f: "Was ist, wenn ich früher heimkomme?", a: "Kein Problem: Du drehst am Thermostat kurz höher oder tippst in der App auf wärmer. Ab dem nächsten Punkt in deinem Heizplan läuft wieder alles selbstständig. Manche Systeme merken über den Standort deines Handys sogar, wann du auf dem Heimweg bist." },
      { f: "Kühlt die Wohnung tagsüber nicht zu sehr aus?", a: "Nicht, wenn du auf 16 bis 17 Grad runterdrehst statt ganz aus. Unter 16 Grad sollte es nicht fallen: Sonst kühlen die Wände aus, Feuchtigkeit schlägt sich daran nieder, und das Risiko für Schimmel steigt. Die Wohnung danach wieder aufzuheizen, kostet weniger, als den ganzen Tag durchzuheizen." },
      { f: "Was ist mit offenen Fenstern?", a: "Die meisten Empfehlungen hier merken, wenn die Temperatur beim Lüften plötzlich fällt, und drehen dann für eine Weile runter. Beim Bosch-Thermostat brauchst du dafür einen Fensterkontakt. So heizt du nicht aus dem Fenster hinaus." }
    ],
    rechner: "thermostate",
    video: "thermostate",
    preisstand: "Oktober 2026"
  },
  {
    id: "klimaanlage",
    name: "Klimaanlage",
    kurzname: "Klimaanlage",
    kategorie: "Haushalt",
    symbol: "❄️",
    bild: "",
    kurz: "Ein Klimagerät, das du selbst aufstellst, ganz ohne Installateur. Es kühlt dein Zimmer, wenn es draußen heiß ist.",
    warum: "An heißen Tagen staut sich die Hitze in der Wohnung, und nachts kühlt das Schlafzimmer kaum noch ab. Die Klimaanlage holt die Wärme aus dem Zimmer und bringt sie nach draußen. Du schaltest sie ein, und das Zimmer wird spürbar kühler, im Homeoffice genauso wie abends im Schlafzimmer.",
    statt: "Statt Ventilator und heißem Schlafzimmer",
    nutzen: "Kühl im Zimmer, auch wenn es draußen heiß ist.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Dein Schlafzimmer oder Homeoffice wird im Sommer richtig heiß",
      "Du wohnst zur Miete oder willst nichts fest einbauen lassen",
      "Du willst ohne Installateur und ohne Loch in der Wand kühlen"
    ],
    nachteile: [
      "Sie braucht viel Strom. Läuft sie an heißen Tagen viele Stunden, merkst du das auf der Stromrechnung, beim Monoblock deutlich mehr als bei der PortaSplit",
      "So leise wie ein fest eingebautes Gerät ist auch die PortaSplit nicht. Monoblöcke sind noch lauter",
      "Das Fenster bleibt einen Spalt offen. Mit einer Fensterdichtung kommt weniger warme Luft herein",
      "Die Geräte sind schwer, die PortaSplit wiegt laut Hersteller gut 32 Kilo. Zum Tragen seid ihr am besten zu zweit"
    ],
    gruppen: [
      { name: "Split", text: "Zwei Teile, verbunden durch eine flache Leitung: Das Innenteil steht im Zimmer, das Außenteil hängt draußen am Fenster oder steht auf dem Balkon. Dort gibt es die Wärme ab. Darum ist ein Split-Gerät leiser und sparsamer als ein Monoblock." },
      { name: "Monoblock", text: "Alles steckt in einem Gerät, die warme Luft geht durch einen Schlauch aus dem Fenster. Monoblöcke sind günstiger und schnell aufgestellt. Ehrlich gesagt sind sie aber lauter als ein Split-Gerät, auch die besten im Test. Sie lohnen sich vor allem, wenn du nur an wenigen heißen Tagen im Jahr kühlst." }
    ],
    modelle: [
      {
        gruppe: "Split",
        stufe: "Mittelklasse", spanne: "ohne Installateur",
        name: "Midea PortaSplit", preis: 1100, preisText: "ca. 900 bis 1.350 €", empfohlen: true,
        punkte: [
          "Das Außenteil hängt an einer Halterung am Fenster oder steht auf dem Balkon. Du brauchst keinen Installateur und kein Loch in der Wand",
          "Laut Hersteller 3,5 Kilowatt für Räume bis 42 Quadratmeter und im Silent-Modus 39 Dezibel am Innengerät",
          "Deutlich sparsamer als ein Monoblock, laut Stiftung Warentest auf dem Niveau mancher fest eingebauter Geräte",
          "Sie kann auch heizen und lässt sich per Fernbedienung oder App steuern"
        ],
        fuer: "Mein Tipp, wenn es leiser und sparsamer sein soll als mit einem Monoblock. Ich habe sie selbst und habe damit sehr gute Erfahrungen gemacht.",
        hinweis: "Bei Stiftung Warentest war sie nur befriedigend (3,3, Heft 6/2025), fest eingebaute Split-Geräte schnitten besser ab. Das Fenster bleibt einen Spalt offen, durch den die flache Leitung läuft. Und ab 2027 kommt sie wegen ihres Kältemittels nicht mehr neu auf den Markt, mehr dazu unten in den Fragen.",
        link: amazon("midea portasplit")
      }
    ],
    ohneTeuer: { stufe: "Oberklasse", titel: "Fest eingebaut vom Fachbetrieb", text: "Noch leiser und sparsamer sind fest eingebaute Split-Geräte. Sie darf aber nur ein Fachbetrieb einbauen, und als Mieter brauchst du die Zustimmung deines Vermieters. Darum gibt es sie hier nicht zum Bestellen. Welche Geräte in Tests vorne liegen, steht unten in den Fragen." },
    fragen: [
      { f: "Split oder Monoblock: Was passt zu mir?", a: "Kühlst du oft oder auch nachts, nimm ein Split-Gerät wie die PortaSplit. Es ist leiser und braucht weniger Strom, weil es die Wärme über das Außenteil nach draußen abgibt. Brauchst du die Kühlung nur an ein paar heißen Tagen im Jahr, reicht ein Monoblock. Er ist günstiger in der Anschaffung und schnell aufgestellt. Dafür ist er lauter, und weil er Luft aus dem Zimmer nach draußen bläst, strömt warme Luft von draußen nach. So sieht es auch Stiftung Warentest. Warum hier gerade kein Monoblock steht, liest du unten bei der Frage, wie ich die Geräte ausgewählt habe." },
      { f: "Wie laut ist eine Klimaanlage im Zimmer?", a: "Am leisesten sind fest eingebaute Split-Geräte. Die Innengeräte der Testsieger haben laut Hersteller im leisesten Modus nur 19 Dezibel. Die PortaSplit ist lauter: Laut Hersteller sind es im Silent-Modus 39 Dezibel, in Tests war sie teils lauter. Monoblöcke sind noch lauter, weil bei ihnen alles im Zimmer steht, auch der Kompressor. Stiftung Warentest nennt selbst die empfohlenen Monoblöcke eher laut. Auf dem Energielabel steht die Schallleistung: bei der PortaSplit am Innengerät 59 Dezibel, bei den Monoblöcken, die Stiftung Warentest empfiehlt, 62 bis 65. Fürs Schlafzimmer hilft der Schlafmodus, oder du kühlst es schon vor dem Schlafengehen herunter." },
      { f: "Was kostet der Strom?", a: "Das hängt davon ab, wie oft und wie lange sie läuft. Ein Beispiel: Kühlst du einen Monat lang jeden Tag acht Stunden, braucht die PortaSplit nach Tests und Energielabel etwa 100 bis 140 Kilowattstunden. Bei 37 Cent pro Kilowattstunde, dem Schnitt in Deutschland, sind das etwa 35 bis 55 Euro. Die Monoblöcke, die Stiftung Warentest empfiehlt, brauchten im Test von Que Choisir umgerechnet fast doppelt so viel, für denselben Monat also etwa 70 bis 90 Euro. In Österreich und der Schweiz ist der Strom etwas günstiger. Den höheren Kaufpreis der PortaSplit holst du über den Strom erst nach vielen Jahren wieder herein. Im Alltag zählt mehr, dass sie leiser ist und keine warme Luft von draußen nachzieht." },
      { f: "Kann die PortaSplit auch heizen?", a: "Ja, sie arbeitet wie eine kleine Wärmepumpe und heizt laut Hersteller, bis es draußen minus 10 Grad hat. Stiftung Warentest hat das Heizen allerdings nur bis plus 2 Grad draußen geprüft. So kannst du an kühlen Tagen im Frühling und Herbst einzelne Räume mit ihr wärmen." },
      { f: "Was ist mit fest eingebauten Split-Geräten?", a: "Sie sind am leisesten und am sparsamsten und können im Winter beim Heizen helfen. Bei Stiftung Warentest (Heft 6/2026) wurde bei den kleineren Geräten mit 2,5 Kilowatt das Mitsubishi Electric MSZ-RZ25VU Testsieger, Preistipp ist das Samsung AR70F09CAAWN. Bei den größeren mit 3,5 Kilowatt liegt das Daikin Perfera FTXM35A vorne, getestet 2025. Als grobe Hilfe nennt Stiftung Warentest 2,5 Kilowatt für etwa 25 Quadratmeter und 3,5 Kilowatt für etwa 35. Einbauen darf sie nur ein Fachbetrieb, darum findest du sie hier nicht zum Bestellen. Hol dir am besten früh im Jahr Angebote, denn ab der ersten Hitzewelle sind die Fachbetriebe schnell ausgebucht." },
      { f: "Was ändert sich 2027 bei der PortaSplit?", a: "Die PortaSplit hier arbeitet mit dem Kältemittel R32. Wegen neuer EU-Regeln darf sie ab dem 1. Januar 2027 nicht mehr neu auf den Markt kommen. Geräte, die bis Ende 2026 in der EU sind, darf der Handel aber weiter verkaufen. Und wer eine hat, darf sie ohne Einschränkung weiter nutzen und reparieren lassen. Midea hat für 2027 eine neue PortaSplit mit Propan (R290) angekündigt, das dem Klima viel weniger schadet." },
      { f: "Darf ich als Mieter in Deutschland eine Klimaanlage aufstellen?", a: "Einen Monoblock darfst du in der Regel einfach aufstellen, denn du bohrst nichts und baust nichts um. Für ein fest eingebautes Split-Gerät brauchst du dagegen die Zustimmung deines Vermieters, am besten schriftlich. Dafür kommt nämlich ein Loch in die Wand und ein Außengerät an die Fassade. Bei der PortaSplit ist es nicht ganz eindeutig: Du bohrst nichts, aber das Außenteil hängt draußen. Ein Fachmann vom Eigentümerverband Haus & Grund hält das im Hochsommer auch ohne Zustimmung für zulässig, weil es nicht auf Dauer angelegt ist. Frag deinen Vermieter trotzdem am besten vorher. Und nimm Rücksicht auf die Nachbarn, vor allem nachts." },
      { f: "Und in einer Eigentumswohnung in Deutschland?", a: "Ein Split-Gerät mit Außengerät darfst du nicht einfach anbringen, du brauchst vorher einen Beschluss der Eigentümerversammlung. Seit einem Urteil des Bundesgerichtshofs vom Juli 2026 haben Eigentümer darauf aber in der Regel einen Anspruch. Das gilt, solange das Gerät die anderen nicht übermäßig stört, zum Beispiel durch Lärm, und nicht hässlich ins Auge fällt. Für einen Monoblock brauchst du keinen Beschluss, denn du baust nichts um. Bei der PortaSplit frag am besten vorher die Verwaltung." },
      { f: "Und in Österreich?", a: "Am einfachsten ist ein mobiles Gerät, denn es steht nur in deiner Wohnung. Willst du ein fest eingebautes Split-Gerät, musst du das als Mieter vorher deinem Vermieter anzeigen. Lehnt er nicht innerhalb von zwei Monaten ab, gilt das nach dem Mietrechtsgesetz als Zustimmung. Lehnt er ab, kommst du über Schlichtungsstelle oder Gericht nur selten weiter. Gehört dir eine Wohnung in einem Haus mit mehreren Eigentümern, brauchst du die Zustimmung der anderen. Ob du zusätzlich eine Bewilligung der Baubehörde brauchst, hängt vom Gerät, vom Lärm und vom Ort ab, etwa in einer Schutzzone. Frag am besten vorher bei deiner Gemeinde nach, in Wien bei der Baupolizei. Für mobile Geräte wie die PortaSplit braucht es laut dem Magazin profil oft keine Bewilligung. Frag aber auch hier zuerst deinen Vermieter." },
      { f: "Und in der Schweiz?", a: "Mobile Geräte mit Schlauch, die du nur einsteckst, brauchen keine Bewilligung. Im Kanton Zürich hat das der Regierungsrat ausdrücklich bestätigt. Ein fest eingebautes Split-Gerät braucht dagegen in den meisten Kantonen eine Baubewilligung, in Zürich in der Regel für das Außengerät. Als Mieter brauchst du für Änderungen an der Wohnung die schriftliche Zustimmung des Vermieters. Für die PortaSplit habe ich keine klare Regel gefunden, weil ihr Außenteil nur am Fenster hängt. Frag darum vorher deine Verwaltung und im Zweifel das Bauamt deiner Gemeinde. Und noch etwas: Die Geräte hier haben einen deutschen Stecker, der nicht in Schweizer Steckdosen passt. Ein passendes Angebot für die Schweiz habe ich darum gerade nicht, ich suche aber danach." },
      { f: "Wie hast du die Geräte ausgewählt?", a: "Für die Split-Geräte habe ich die Tests von Stiftung Warentest gelesen und dazu Tests von home&smart, smarthomeassistent und mobiFlip. Die PortaSplit war das einzige mobile Split-Gerät im Test von Stiftung Warentest, und ich nutze sie selbst. Monoblöcke testet Stiftung Warentest seit Jahren nicht mehr selbst. 2026 hat sie aber den großen Test der französischen Verbraucherzeitschrift Que Choisir ausgewertet und daraus drei Geräte empfohlen, die es in Deutschland gibt. Alle drei bekamen dort die Bestnote fürs Kühlen. Bei Amazon gibt es gerade keins davon, darum steht hier im Moment kein Monoblock. Dazu habe ich die Angaben der Hersteller verglichen und Tests von Which? aus Großbritannien und vom VKI aus Österreich gelesen. Wirklich leise nennt keiner dieser Tests einen Monoblock, das sage ich dir lieber ehrlich." }
    ],
    profitipp: {
      titel: "So kühlt sie besser und sparsamer",
      text: "Ein paar Handgriffe machen viel aus:",
      liste: [
        "Dichte den Fensterspalt ab, durch den Leitung oder Schlauch laufen. Dann kommt weniger warme Luft herein",
        "Lass tagsüber Rollläden oder Jalousien unten. Am besten wirkt ein Sonnenschutz außen am Fenster",
        "Schalt sie aus, wenn niemand im Zimmer ist, und kühl das Schlafzimmer schon vor dem Schlafengehen herunter",
        "Kühl nur ein paar Grad herunter, höchstens etwa sechs Grad unter die Temperatur draußen. Das ist angenehmer für den Körper und spart Strom",
        "Hast du ein Balkonkraftwerk, kühl tagsüber, wenn die Sonne scheint. Dann nutzt du deinen eigenen Strom"
      ]
    },
    erfahrung: {
      titel: "Meine Erfahrung",
      bild: "", bildText: "Foto: deine PortaSplit",
      text: "Ich habe die Midea PortaSplit selbst, und sie ist sehr leise. Ich kann sie problemlos laufen lassen, während ich schlafe. Der Aufbau war einfach, im Handbuch ist alles gut erklärt. Zum Heizen nutze ich sie nicht, dazu kann ich dir also nichts sagen."
    },
    vergleich: {
      vorherTitel: "Ohne Klimaanlage",
      vorher: [
        "Tagsüber heizt sich die Wohnung immer weiter auf",
        "Nachts lüftest du und hoffst, dass es abkühlt",
        "Im Schlafzimmer ist es oft zu warm zum Schlafen"
      ],
      nachher: [
        "Auf Knopfdruck wird das Zimmer spürbar kühler",
        "Mit Timer oder App ist es schon kühl, wenn du heimkommst",
        "Vor dem Schlafengehen kühlst du das Schlafzimmer herunter"
      ]
    },
    video: "klimaanlage",
    preisstand: "Oktober 2026"
  },
  {
    id: "smarte-lampen",
    name: "Smarte Lampen",
    kurzname: "smarten Lampen",
    kategorie: "Haushalt",
    symbol: "💡",
    bild: "",
    kurz: "Du schraubst sie statt normaler Glühbirnen in deine Lampen. Dann steuerst du dein Licht per App, Schalter oder Sprache, und es geht nach deinem Plan an und aus.",
    warum: "Morgens wird es langsam hell, abends geht das Licht selbstständig an und wird gemütlich warm. Mit einem Fingertipp holst du dir die passende Stimmung zum Kochen, Lesen oder für den Filmabend. Und wenn du aus dem Haus gehst, schaltest du mit einem Tipp alles aus, auch noch von unterwegs.",
    statt: "Statt im Dunkeln nach dem Schalter zu tasten",
    nutzen: "Licht an, wenn du es brauchst. Aus, wenn du gehst.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 2, nachher: 1 },
    fuer: [
      "Du willst per Fingertipp die passende Lichtstimmung, zum Beispiel zum Kochen, Lesen oder für den Filmabend",
      "Das Licht soll morgens und abends selbstständig an- und ausgehen",
      "Du vergisst manchmal, das Licht auszumachen, wenn du aus dem Haus gehst",
      "Du wohnst zur Miete: Du schraubst sie einfach statt der alten Glühbirnen rein und nimmst sie beim Auszug wieder mit"
    ],
    nachteile: [
      "Smarte Lampen kosten deutlich mehr als normale LED-Lampen. Du zahlst vor allem für die Bequemlichkeit",
      "Auch ausgeschaltet brauchen sie ein wenig Strom, damit sie auf dich hören. In der EU sind höchstens 0,5 Watt pro Lampe erlaubt, mehr dazu unten in den Fragen",
      "Schaltest du sie am normalen Lichtschalter aus, reagieren sie nicht mehr auf App und Sprache. Lass den Schalter darum an und nimm einen smarten Schalter dazu, wie im Tipp unten",
      "Für alle Funktionen von Philips Hue brauchst du eine Bridge, die einmal extra kostet. In den Starter-Sets hier ist sie schon dabei"
    ],
    profitipp: {
      titel: "So wird dein Licht richtig bequem",
      text: "Ein paar Einstellungen machen den größten Unterschied:",
      liste: [
        "Lass den normalen Lichtschalter immer an und kleb dir einen smarten Schalter daneben, bei Hue zum Beispiel den Smart Button aus dem Starter-Set. Er hält mit einem Klebestreifen, du brauchst keinen Elektriker",
        "Leg dir Szenen an, zum Beispiel hell zum Kochen, warm zum Entspannen und gedimmt für den Filmabend",
        "Lass das Licht morgens mit einem Zeitplan langsam heller werden, dann wachst du nicht im Dunkeln auf",
        "Mit der Hue Bridge Pro und mindestens drei Hue-Lampen in einem Raum geht das Licht mit MotionAware selbstständig an, sobald du hereinkommst"
      ]
    },
    erfahrung: {
      titel: "Meine Erfahrung",
      bild: "", bildText: "Foto: deine Hue-Lampen",
      text: "Ich nutze Philips Hue seit etwa zehn Jahren und liebe es. Am meisten nutze ich Szenen, so habe ich immer genau die Lichtstimmung, die ich gerade will. Mit der neuen Funktion MotionAware gehen die Lampen selbstständig an, sobald sich im Raum jemand bewegt. Außerdem nutze ich die Lichtschalter von Hue, die viel mehr Funktionen bieten als normale Lichtschalter."
    },
    gruppen: [
      { name: "Mit Zentrale", text: "Diese Lampen funken an eine kleine Zentrale, bei Philips Hue heißt sie Bridge. Du verbindest sie mit deinem Router, und in den Starter-Sets hier ist sie schon dabei. Dafür bekommst du die meisten Funktionen: Zeitpläne, Szenen, Steuerung von unterwegs und viel Zubehör wie Schalter und Bewegungsmelder. Philips Hue mit Bridge war bei Stiftung Warentest (Heft 2/2024) Testsieger." },
      { name: "Ohne Zentrale", text: "Diese Lampen verbindest du direkt mit deinem WLAN oder per Bluetooth mit deinem Handy. Du kaufst nichts dazu und bist schnell fertig. Das passt gut, wenn du erst mal mit ein oder zwei Lampen anfangen willst. Die beste Lampe ohne Zentrale war bei Stiftung Warentest (Heft 2/2024) die von WiZ." }
    ],
    modelle: [
      {
        gruppe: "Mit Zentrale",
        stufe: "Günstig", spanne: "Hue zum kleineren Preis",
        name: "Philips Hue Essential Starter-Set", preis: 90, preisText: "ca. 80 bis 100 € für Bridge und vier Lampen",
        punkte: [
          "Bridge und vier Lampen mit Farbe und Weißtönen in einem Set",
          "Gleiche App und gleiches System wie bei den anderen Hue-Lampen, du kannst später alles dazunehmen",
          "Kräftige Farben: Bei nextpit und TechRadar sahen sie kaum anders aus als bei den teureren Hue-Lampen",
          "Funktioniert mit Alexa, Google und Apple Home"
        ],
        fuer: "Für dich, wenn du mehrere Lampen günstig mit Hue ausstatten willst.",
        hinweis: "Sie lässt sich nur bis auf 2 Prozent herunterdimmen, die teureren Hue-Lampen bis auf 0,2 Prozent. Für ein ganz sanftes Wecklicht war sie TechRadar darum zu hell. Mit der Bridge aus diesem Set gibt es kein MotionAware, dafür brauchst du die Bridge Pro. Und laut Hersteller hat sie die Energieklasse F, die teureren Hue-Lampen D. Ausgeschaltet braucht sie 0,5 Watt, die Lampen im Set mit Bridge Pro nur 0,1 Watt.",
        link: amazon("philips hue essential starter set e27")
      },
      {
        gruppe: "Mit Zentrale",
        stufe: "Oberklasse", spanne: "mit Bridge Pro",
        name: "Philips Hue White & Color Ambiance Starter-Set mit Bridge Pro", preis: 220, preisText: "ca. 200 bis 250 € für Bridge Pro, drei Lampen und Smart Button", empfohlen: true,
        punkte: [
          "Testsieger bei Stiftung Warentest (gut, Note 2,0, Heft 2/2024). Getestet wurde die Vorgängerlampe mit der normalen Bridge",
          "Mit MotionAware werden deine Lampen zum Bewegungsmelder: Ab drei Lampen in einem Raum geht das Licht an, wenn du hereinkommst",
          "Lässt sich sehr weit herunterdimmen, bis auf 0,2 Prozent, und hat viele Weißtöne von sehr warm bis kühl",
          "Großes System: Schalter, Bewegungsmelder, Lichtleisten und Lampen für draußen passen dazu, auch mit Alexa, Google und Apple Home"
        ],
        fuer: "Mein Tipp, wenn du dein Licht richtig smart machen willst. Ich nutze Philips Hue selbst, mehr dazu unter „Meine Erfahrung“.",
        hinweis: "Es ist das teuerste Set hier. Die neue Lampengeneration braucht laut Hersteller rund 40 Prozent weniger Strom als die getestete. Die Bridge Pro steuert laut Hersteller über 150 Lampen und verbindet sich per Kabel oder WLAN mit deinem Router.",
        link: amazon("philips hue starter set bridge pro e27")
      },
      {
        gruppe: "Ohne Zentrale",
        stufe: "Günstig", spanne: "direkt ins WLAN",
        name: "WiZ A60 E27 Tunable White & Color", preis: 40, preisText: "ca. 35 bis 45 € für vier Lampen", empfohlen: true,
        punkte: [
          "Bei Stiftung Warentest gut (Note 2,2, Heft 2/2024): die beste Lampe ohne Zentrale und Preis- und Umwelttipp",
          "Geht direkt in dein WLAN, du kaufst nichts dazu",
          "Farbe und Weißtöne von warm bis kühl, mit Zeitplänen und Szenen in der WiZ-App",
          "Funktioniert mit Alexa und Google, über Matter auch mit Apple Home"
        ],
        fuer: "Für dich, wenn du günstig und ohne Zubehör anfangen willst.",
        hinweis: "Bei Amazon gibt es sie gerade nur im Viererpack. Dein Router braucht WLAN mit 2,4 GHz, das haben fast alle. Fiel im Test von Stiftung Warentest das Internet aus, reagierten die WLAN-Lampen nur verzögert.",
        link: amazon("wiz a60 e27 color")
      },
      {
        gruppe: "Ohne Zentrale",
        stufe: "Oberklasse", spanne: "per Bluetooth, Bridge später",
        name: "Philips Hue White & Color Ambiance E27 (per Bluetooth)", preis: 50, preisText: "ca. 45 bis 60 € pro Stück",
        punkte: [
          "Die gleiche Lampe wie im Starter-Set mit Bridge Pro. Ohne Bridge steuerst du sie per Bluetooth direkt mit dem Handy",
          "So steuerst du bis zu zehn Lampen, ganz ohne Zubehör",
          "Die Bridge kannst du jederzeit dazunehmen, dann hast du alle Funktionen"
        ],
        fuer: "Für dich, wenn du Philips Hue erst mal mit ein oder zwei Lampen ausprobieren willst.",
        hinweis: "Per Bluetooth klappt es nur in der Nähe, laut Hersteller etwa zehn Meter weit, und nicht von unterwegs. Auch Zeitpläne und Routinen gibt es ohne Bridge nur eingeschränkt.",
        link: amazon("philips hue white and color ambiance e27")
      }
    ],
    fragen: [
      { f: "Mit oder ohne Zentrale: Was passt zu mir?", a: "Ohne Zentrale ist der einfachste Einstieg: Lampe reinschrauben, mit dem WLAN oder dem Handy verbinden, fertig. Das passt, wenn du erst mal ein oder zwei Lampen smart machen willst. Mit Zentrale zahlst du am Anfang mehr, bekommst dafür aber die meisten Funktionen und viel Zubehör, zum Beispiel Schalter und Bewegungsmelder. Das lohnt sich vor allem, wenn du mehrere Räume ausstatten willst. Bei Philips Hue kannst du auch ohne Bridge anfangen und sie später dazunehmen." },
      { f: "Geht Philips Hue auch ohne Bridge?", a: "Ja, per Bluetooth. Dann steuerst du bis zu zehn Lampen direkt mit dem Handy, laut Hersteller etwa zehn Meter weit. Von unterwegs geht das nicht, und Zeitpläne, Routinen und Zubehör kannst du nur eingeschränkt nutzen. Die meisten Hue-Lampen funktionieren auf beide Arten. Darum kannst du die Bridge jederzeit dazunehmen und deine Lampen behalten." },
      { f: "Bridge oder Bridge Pro?", a: "Die normale Bridge steuert bis zu 50 Lampen und 12 Zubehörteile wie Schalter, und sie hängt per Kabel an deinem Router. Die Bridge Pro schafft laut Hersteller über 150 Lampen und 50 Zubehörteile, sie verbindet sich auch per WLAN, und nur mit ihr gibt es MotionAware. Brauchst du MotionAware nicht, reicht für den Anfang die normale Bridge, wie im Essential-Set." },
      { f: "Was ist MotionAware?", a: "Damit werden deine Hue-Lampen selbst zum Bewegungsmelder. Bewegt sich jemand im Raum, ändern sich die Funksignale zwischen den Lampen, und das Licht geht an. Du brauchst dafür die Bridge Pro und mindestens drei Hue-Lampen im selben Raum, einen extra Bewegungsmelder nicht. Laut Hersteller machen fast alle Hue-Lampen mit, nur manche ältere Modelle nicht. Für dein Licht kostet MotionAware nichts extra, nur für Warnungen aufs Handy verlangt Hue ein Abo. Wände zwischen den Lampen können stören. Und damit dein Haustier das Licht nicht anmacht, stellst du MotionAware in der App weniger empfindlich ein." },
      { f: "Brauchen smarte Lampen auch Strom, wenn sie aus sind?", a: "Ja, ein wenig, denn sie warten auf deine Befehle. In der EU darf eine smarte Lampe dafür seit September 2021 höchstens 0,5 Watt brauchen. Das sind gut 4 Kilowattstunden im Jahr, bei 37 Cent pro Kilowattstunde, dem Schnitt in Deutschland, also rund 1,60 € pro Lampe. Die Lampen im Hue-Set mit Bridge Pro brauchen dafür laut Hersteller nur 0,1 Watt, die günstigere Hue Essential 0,5 Watt. Für eine Lampe, die kaum an ist, zum Beispiel im Abstellraum, nimmst du darum lieber eine normale LED-Lampe." },
      { f: "Was passiert, wenn ich den normalen Lichtschalter ausschalte?", a: "Dann hat die Lampe keinen Strom und reagiert nicht mehr auf App, Zeitplan oder Sprache. Lass den Schalter darum an und schalte über die App oder einen smarten Schalter. Den Schalter von Hue klebst du einfach an die Wand, zum Beispiel direkt neben den alten. Es gibt auch Module, die hinter den normalen Lichtschalter kommen. Dafür arbeitest du aber an der Stromleitung, das überlässt du im Zweifel einem Elektriker." },
      { f: "Was passiert, wenn das Internet ausfällt?", a: "Mit der Hue Bridge kannst du dein Licht laut Hersteller auch ohne Internet steuern. Die WLAN-Lampen reagierten im Test von Stiftung Warentest dagegen nur verzögert, wenn das Internet weg war. Und dein normaler Lichtschalter funktioniert in jedem Fall weiter." },
      { f: "Passen sie in meine Lampen?", a: "Schau auf die Fassung deiner alten Glühbirne. Die meisten Lampen haben die große Schraubfassung E27, dafür sind die Lampen hier. Für die kleine Fassung E14 und für Spots mit GU10 gibt es Hue und WiZ auch, achte dann beim Kauf auf die Fassung im Namen." },
      { f: "Und in Österreich und der Schweiz?", a: "In Österreich ist alles wie in Deutschland. In der Schweiz passen die Lampen genauso, E27, E14 und GU10 sind dieselben Fassungen. Philips Hue und WiZ bekommst du auch bei Schweizer Händlern. Bestellst du in Deutschland, schau bei der Bridge auf den Stecker ihres Netzteils: Ein flacher Eurostecker mit zwei dünnen Stiften passt auch in Schweizer Steckdosen, ein dicker Schuko-Stecker nicht." },
      { f: "Wie hast du die Lampen ausgewählt?", a: "Ich nutze Philips Hue selbst seit etwa zehn Jahren. Für die Auswahl habe ich den Test von Stiftung Warentest gelesen (Heft 2/2024, zehn Lampen). Nur zwei waren dort gut: Philips Hue mit Bridge als Testsieger und WiZ als beste Lampe ohne Zentrale. Weil der Test schon fast drei Jahre alt ist, habe ich dazu neuere Tests von nextpit, TechRadar und PCWorld gelesen, zum Beispiel zu Hue Essential und MotionAware, und die Angaben der Hersteller verglichen. Die neuen Lampen von IKEA habe ich bei Amazon nicht gefunden, die bekommst du bei IKEA selbst." }
    ],
    vergleich: {
      vorherTitel: "Mit normalen Lampen",
      vorher: [
        "Abends tastest du im Dunkeln nach dem Lichtschalter",
        "Das Licht ist immer gleich, egal ob du kochst oder entspannst",
        "Unterwegs fällt dir ein, dass zu Hause noch Licht brennt"
      ],
      nachher: [
        "Das Licht geht nach deinem Plan oder bei Bewegung selbstständig an",
        "Mit einem Fingertipp holst du dir die passende Lichtstimmung",
        "Mit einem Tipp in der App machst du alles aus, auch von unterwegs"
      ]
    },
    video: "smarte-lampen",
    preisstand: "Oktober 2026"
  },
  {
    id: "sparduschkopf",
    name: "Sparduschkopf",
    kategorie: "Haushalt",
    symbol: "🚿",
    bild: "",
    kurz: "Ein Duschkopf, der deutlich weniger warmes Wasser durchlässt. Du duschst wie immer und zahlst trotzdem weniger.",
    warum: "Ältere Duschköpfe lassen oft 10 bis 15 Liter pro Minute durch, gute Sparduschköpfe weniger als 9. Und jeder Liter, den du nicht verbrauchst, muss auch nicht warm gemacht werden. Das spart Wasser und Energie, ohne dass du etwas dafür tun musst. Den Duschkopf tauschst du in ein paar Minuten selbst, meist ganz ohne Werkzeug.",
    statt: "Statt 15 Liter Warmwasser pro Minute",
    nutzen: "Bei jeder Dusche weniger warmes Wasser, gleich lange duschen.",
    spart: ["geld"],
    fuer: [
      "Dein Duschkopf ist schon älter und lässt viel Wasser durch",
      "Dein Wasser wird mit Strom warm, dann sparst du am meisten",
      "Du willst sparen, ohne kürzer oder kälter zu duschen"
    ],
    nachteile: [
      "Mit älteren hydraulischen Durchlauferhitzern klappt es oft nicht: Sie schalten meist erst ab etwa 8 Litern pro Minute ein",
      "Lässt dein Duschkopf schon weniger als 10 Liter pro Minute durch, sparst du nur wenig",
      "Zeit und Mühe spart er dir nicht. Hier geht es nur ums Geld und um Wasser und Energie"
    ],
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 30 €",
        name: "Duravit 3jet 110 MinusFlow", preis: 25, empfohlen: true,
        punkte: [
          "Bei Stiftung Warentest gut (Note 1,9, Heft 4/2023), gleichauf mit den besten im Test",
          "Lässt im Test 8,8 Liter pro Minute durch, ein Durchflussbegrenzer ist eingebaut",
          "Drei Strahlarten, du wechselst sie mit einer Drehscheibe",
          "Weiche Noppen an den Düsen: Kalk reibst du einfach ab"
        ],
        fuer: "Für die meisten. Mein Tipp, denn er schnitt im Test genauso gut ab wie die teureren Modelle.",
        hinweis: "Er lässt etwas mehr Wasser durch als die beiden anderen, knapp 9 Liter pro Minute. Der Unterschied ist klein.",
        link: amazon("duravit 3jet 110 minusflow")
      },
      {
        stufe: "Mittelklasse", spanne: "30 bis 50 €",
        name: "Hansgrohe Pulsify Select S EcoSmart", preis: 38,
        punkte: [
          "Bei Stiftung Warentest gut (Note 1,9, Heft 4/2023)",
          "Lässt im Test 8,6 Liter pro Minute durch, mit Durchflussbegrenzer",
          "Drei Strahlarten, du wechselst sie per Knopfdruck",
          "Laut Hersteller auch für Durchlauferhitzer geeignet"
        ],
        fuer: "Für dich, wenn du die Strahlart lieber per Knopf wechselst.",
        hinweis: "Achte beim Kauf auf „EcoSmart“ im Namen. Getestet wurde diese Version, die ohne EcoSmart lässt laut Hersteller deutlich mehr Wasser durch.",
        link: amazon("hansgrohe pulsify select s ecosmart")
      },
      {
        stufe: "Oberklasse", spanne: "ab 50 €",
        name: "Grohe Vitalio SmartActive 130 Cube", preis: 70,
        punkte: [
          "Bei Stiftung Warentest gut (Heft 4/2023)",
          "Lässt im Test am wenigsten durch von den dreien, gut 8 Liter pro Minute",
          "Eckige Handbrause mit drei Strahlarten",
          "Leicht zu reinigen und zu entkalken"
        ],
        fuer: "Für dich, wenn dir die eckige Form gefällt.",
        hinweis: "Teurer heißt hier nicht besser: Im Test schnitt er nicht besser ab als der günstige Duravit. Er spart auch kaum mehr Wasser. Auf Amazon heißt er teils „150 Cube“. Entscheidend ist die Artikelnummer 26595000.",
        link: amazon("grohe vitalio smartactive 130 cube")
      }
    ],
    fragen: [
      { f: "Wie viel spare ich wirklich?", a: "Das hängt davon ab, wie viel dein jetziger Duschkopf durchlässt, wie lange ihr duscht und wie euer Wasser warm wird. Am meisten sparst du, wenn es mit Strom warm wird, zum Beispiel in einem Durchlauferhitzer. Stiftung Warentest kam in einem Modellfall auf bis zu 345 Euro pro Person und Jahr. Wie viel es bei dir ist, zeigt der Rechner." },
      { f: "Klappt das mit meinem Durchlauferhitzer?", a: "Mit einem elektronischen Durchlauferhitzer in der Regel ja. Ältere hydraulische Geräte schalten aber meist erst ab etwa 8 Litern pro Minute ein. Die drei Modelle hier liegen im Test knapp darüber, das kann reichen oder auch nicht. So erkennst du die Art: Hydraulische haben meist nur einen Schalter mit zwei Stufen, bei elektronischen stellst du die Temperatur in Grad ein. Sicher steht es auf dem Typenschild. Bei einem hydraulischen bestell am besten mit Rückgaberecht und probier es aus. Bleibt das Wasser kalt oder lauwarm, schick den Duschkopf zurück." },
      { f: "Passt er auf meinen Schlauch?", a: "Fast immer. Duschschläuche und Handbrausen haben ein genormtes Gewinde mit einem halben Zoll. Darauf musst du beim Kauf nicht achten." },
      { f: "Wie tausche ich den Duschkopf?", a: "Dreh den alten Duschkopf gegen den Uhrzeigersinn vom Schlauch ab, meist geht das von Hand. Sitzt er fest, nimm eine Zange und leg ein weiches Tuch dazwischen, damit nichts verkratzt. Prüf die Dichtung in der Mutter am Schlauch und schraub den neuen Duschkopf handfest an. Das darfst du auch in einer Mietwohnung selbst machen. Heb den alten Duschkopf auf, dann kannst du ihn beim Auszug wieder anschrauben." },
      { f: "Duscht es sich damit schlechter?", a: "Kaum. Stiftung Warentest ließ Testpersonen mit allen Duschköpfen duschen und prüfte auch, wie gut sich Shampoo aus langen Haaren ausspülen lässt. Nur bei sehr sparsamen Modellen mit 7 Litern pro Minute oder weniger dauert das etwas länger. Die drei hier lassen mehr durch." },
      { f: "Mein Wasser ist sehr kalkhaltig. Worauf achte ich?", a: "Nimm einen Duschkopf mit weichen Noppen an den Düsen. Den Kalk reibst du dann einfach mit dem Finger ab. Stiftung Warentest hat solche Noppen im Test mitbewertet. Alle drei Modelle hier haben laut Hersteller so eine Kalk-Abreibe-Funktion." },
      { f: "Warum ist der Test von 2023?", a: "Stiftung Warentest hat Sparduschköpfe zuletzt im März 2023 getestet (Heft 4/2023), einen neueren Test gibt es nicht. Zwei der damals sparsamsten Modelle gibt es inzwischen nicht mehr zu kaufen. Die drei hier sind weiter erhältlich." },
      { f: "Warum ist der Duschkopf von Ikea nicht dabei?", a: "Der Ikea Brogrund war bei Stiftung Warentest gut und einer der günstigsten guten Duschköpfe im Test. Es gibt ihn aber nur bei Ikea, darum kann ich ihn hier nicht verlinken. Kommst du sowieso dort vorbei, ist er eine gute Wahl." }
    ],
    profitipp: {
      titel: "Erst messen, dann tauschen",
      text: "So weißt du in einer Minute, ob sich ein Sparduschkopf für dich überhaupt lohnt:",
      liste: [
        "Dreh die Dusche so auf, wie du sonst duschst",
        "Lass sie 30 Sekunden lang in einen Eimer laufen",
        "Nimm die Liter im Eimer mal zwei: So viele Liter pro Minute lässt dein Duschkopf durch",
        "Sind es mehr als 10, lohnt sich der Tausch"
      ]
    },
    rechner: "sparduschkopf",
    video: "sparduschkopf"
  },
  {
    id: "balkonkraftwerk",
    name: "Balkonkraftwerk",
    kategorie: "Haushalt",
    symbol: "☀️",
    bild: "",
    kurz: "Zwei Solarmodule mit Stecker. Sie machen tagsüber Strom, und den verbrauchst du direkt in deiner Wohnung.",
    warum: "Ein Balkonkraftwerk besteht aus zwei Solarmodulen und einem kleinen Wechselrichter. Du steckst es in eine Steckdose, und was in der Wohnung gerade läuft, nutzt zuerst den Strom von draußen. Kühlschrank, Router und Standby brauchen den ganzen Tag Strom, und da kommt über das Jahr einiges zusammen. In Deutschland darfst du ein Set mit bis zu 960 Watt Modulleistung an eine normale Steckdose anschließen und meldest es nur online an. Mit einem Speicher dazu nutzt du den Strom auch abends.",
    statt: "Statt jede Kilowattstunde zu kaufen",
    nutzen: "Tagsüber eigener Strom, jedes Jahr eine kleinere Stromrechnung.",
    spart: ["geld"],
    fuer: [
      "Du hast einen Balkon, eine Terrasse oder ein Flachdach mit viel Sonne, am besten von Süden",
      "Bei euch läuft auch tagsüber Strom, zum Beispiel im Homeoffice",
      "Du wohnst zur Miete: In Deutschland darf der Vermieter nur noch ablehnen, wenn es für ihn unzumutbar ist",
      "Ihr seid tagsüber kaum zu Hause und braucht den Strom eher abends: Dann passt ein Set mit Speicher"
    ],
    nachteile: [
      "Eine Halterung für die Module ist bei den Sets hier nicht dabei. Die kaufst du passend zu deinem Balkon, Dach oder Garten dazu",
      "Am Balkongeländer liefert es deutlich weniger als schräg aufgestellt, und Halterungen fürs Geländer hat niemand unabhängig getestet",
      "Ohne Speicher geht, was du nicht gleich verbrauchst, ins Netz, und dafür gibt es in Deutschland meist kein Geld",
      "Für die Schweiz gibt es bei Amazon im Moment kein passendes Set, weil dort andere Regeln gelten. Ich suche gerade nach einer Lösung",
      "Ein Speicher für den Abend kostet mehr als das ganze Set und rechnet sich darum langsamer. Brauchst du den Strom vor allem tagsüber, kommst du ohne aus"
    ],
    gruppen: [
      { name: "Ohne Speicher", text: "Zwei Module und ein kleiner Wechselrichter für die Steckdose. Das ist günstig und schnell wieder drin. Du nutzt den Strom, während die Sonne scheint, und was übrig ist, geht ins Netz.", ohne: "speicher" },
      { name: "Mit Speicher", text: "Diese Speicher haben den Wechselrichter schon eingebaut: Die Module kommen an den Speicher, und nur er kommt in die Steckdose. Was mittags übrig ist, lädt den Akku, und abends nutzt ihr den Strom selbst. Hast du schon ein Set, kannst du seine Module meist weiter nutzen." }
    ],
    modelle: [
      {
        gruppe: "Ohne Speicher",
        stufe: "Günstig", spanne: "unter 400 €",
        name: "Solakon onLite 900 W", preis: 270, preisText: "ca. 250 bis 300 €", empfohlen: true,
        punkte: [
          "900 Watt Modulleistung: Damit darfst du es in Deutschland an eine normale Steckdose anschließen",
          "800-Watt-Wechselrichter, das ist in Deutschland das Maximum",
          "Das größere Schwester-Set onBasic mit 1.000 Watt war im Feldtest von home&smart 2026 gut",
          "Solakon verkauft das Set bei Amazon selbst"
        ],
        fuer: "Mein Tipp für die normale Steckdose: Es bleibt unter den 960 Watt, und Solakon verkauft es selbst.",
        hinweis: "Das Set selbst hat noch niemand unabhängig getestet. Eine Halterung für die Module ist nicht dabei. Für die Schweiz ist es nicht gemacht.",
        link: amazon("solakon onlite 900"),
        alternativen: [
          { name: "SUNNIVA 920 W mit EcoFlow-Wechselrichter", preis: 289, text: "Mit 920 Watt passt es auch an die normale Steckdose. Den Wechselrichter von EcoFlow hat smartzone.de selbst durchgemessen: gut verarbeitet, sparsam im Standby und auch unter voller Last nicht zu heiß. Auch hier fehlt ein Test des ganzen Sets, und eine Halterung ist nicht dabei.", link: amazon("sunniva 920 ecoflow") }
        ]
      },
      {
        gruppe: "Mit Speicher",
        stufe: "Günstig", spanne: "unter 500 €",
        name: "Zendure SolarFlow 800 Plus", preis: 449, preisText: "ca. 400 bis 500 €", empfohlen: true,
        punkte: [
          "Bei TechStage von heise Preis-Leistungs-Sieger, bei smartzone.de Preis-Leistungs-Tipp",
          "Akku mit 1,92 kWh, der wenig verliert: Beim Laden und Entladen maß smartzone.de nur rund 16 Prozent Verlust",
          "Zwei Anschlüsse für Module und ein eingebauter 800-Watt-Wechselrichter, auch in Österreich zugelassen",
          "Mit dem Lesekopf von Zendure am Stromzähler brauchst du keinen Elektriker"
        ],
        fuer: "Mein Tipp für den Balkon mit zwei Modulen: Er kostet am wenigsten und schneidet in Tests trotzdem gut ab.",
        hinweis: "Module und Lesekopf sind nicht dabei. Nimm zwei Module mit zusammen höchstens 960 Watt oder die von deinem Set. Eine Steckdose für Stromausfälle hat er nicht. Stiftung Warentest hat ihn nicht getestet. Den größeren SolarFlow 800 Pro fand sie im März 2026 mangelhaft, vor allem wegen zu starker Störsignale.",
        link: amazon("zendure solarflow 800 plus")
      },
      {
        gruppe: "Mit Speicher",
        stufe: "Mittelklasse", spanne: "500 bis 1.000 €",
        name: "Solakon ONE mit 900 Watt Modulen", preis: 895, preisText: "ca. 850 bis 1.000 €",
        punkte: [
          "TechStage, PC-WELT und techtest.org haben ihn getestet und empfehlen ihn",
          "Im Paket mit zwei Modulen mit zusammen 900 Watt, das passt an die normale Steckdose",
          "Akku mit 2,11 kWh und vier Anschlüssen für Module",
          "Steckdose am Gerät, die bei Stromausfall weiter Strom liefert"
        ],
        fuer: "Für dich, wenn du alles in einem Paket willst und eine Steckdose für Stromausfälle möchtest.",
        hinweis: "Stiftung Warentest hat ihn nicht getestet. Eine Halterung für die Module ist nicht dabei, und einen Lesekopf für den Stromzähler kaufst du dazu. In Österreich steht er nicht auf der Wechselrichterliste, dort ist der Zendure die sicherere Wahl.",
        link: amazon("solakon one")
      },
      {
        gruppe: "Mit Speicher",
        stufe: "Oberklasse", spanne: "ab 900 €",
        name: "Anker SOLIX Solarbank 3 Pro", preis: 899, preisText: "ca. 900 bis 1.000 €",
        punkte: [
          "Bester von fünf Speichern bei Stiftung Warentest, als einziger befriedigend (Heft 4/2026)",
          "Auch ComputerBase und Notebookcheck loben die Technik",
          "Großer Akku mit 2,69 kWh und vier Anschlüssen für Module mit bis zu 3.600 Watt",
          "Steckdose am Gerät für Stromausfälle, bis 1.200 Watt"
        ],
        fuer: "Für dich, wenn du vier Module anschließen willst. Dann holt er am meisten heraus.",
        hinweis: "Für zwei Module ist er zu groß, da rechnet sich ein günstigerer Speicher schneller. Mit vier Modulen gehört er an eine Einspeisesteckdose. Module und ein Messgerät für den Sicherungskasten sind nicht dabei: Kauf das Smart Meter von Anker dazu und lass es gleich mit einbauen, wenn die Elektrofachkraft die Steckdose anschließt.",
        link: amazon("anker solix solarbank 3 pro")
      }
    ],
    ohneTeuer: { stufe: "Teurere Sets", titel: "Keine Empfehlung", text: "Ein teureres Set ohne Speicher bringt an der normalen Steckdose kaum mehr Strom, denn mehr als 960 Watt Module und 800 Watt Wechselrichter sind dort nicht erlaubt. Mehr Strom selbst nutzen kannst du mit einem Speicher, schau dafür in die Gruppe „Mit Speicher“." },
    fragen: [
      { f: "Wie viel spare ich wirklich?", a: "Das hängt davon ab, wo die Module stehen, wohin sie zeigen und wie viel Strom ihr tagsüber braucht. Beispielrechnungen der Verbraucherzentrale NRW, von C.A.R.M.E.N. und von eza! kommen für ein 800-Watt-Set auf etwa 100 bis 150 Euro im Jahr. Am meisten bringt es, wenn die Module schräg nach Süden stehen und bei euch tagsüber viel läuft. Mit Speicher spart ihr mehr, er kostet aber auch mehr. Wie viel es bei dir ist, zeigt der Rechner, auch mit Speicher." },
      { f: "Wie hast du die Sets und Speicher ausgewählt?", a: "Stiftung Warentest hat 2025 acht Sets getestet. Die zwei guten von GreenSolar und Heckert gibt es bei Amazon nicht mehr so, wie sie getestet wurden. Darum habe ich bei Amazon nach Sets ohne Speicher gesucht, die gerade lieferbar sind, und zu jedem nach Tests auf anderen Seiten gesucht. Einen Test fand ich nur für das Solakon onBasic mit 1.000 Watt. Es war im Feldtest von home&smart gut, hat aber zu viel Modulleistung für die normale Steckdose. Darum steht hier sein kleineres Schwester-Set mit 900 Watt. Ein Test des ganzen Sets fehlt bei beiden Sets hier. Den Wechselrichter im SUNNIVA-Set hat smartzone.de aber selbst durchgemessen und gelobt. Für die Speicher habe ich Tests von TechStage (heise), Notebookcheck, ComputerBase, PC-WELT, techtest.org, smartzone.de und Stiftung Warentest gelesen. Hier stehen nur Speicher, die in mehreren Tests gut abschnitten und die es bei Amazon gibt. Den Anker fand Stiftung Warentest am besten, die anderen zwei hat sie nicht getestet." },
      { f: "Reicht eine normale Steckdose?", a: "In Deutschland ja, solange die Module zusammen höchstens 960 Watt haben. Das steht so in der Norm, die seit Dezember 2025 gilt. Beide Sets hier liegen darunter. Viele Sets bei Amazon haben 1.000 Watt oder mehr. Die gehören laut Norm an eine spezielle Einspeisesteckdose, zum Beispiel von Wieland, die eine Elektrofachkraft einbaut. Manche Förderprogramme von Städten verlangen so einen Stecker auch bei kleineren Sets. Schau also vorher nach, wenn du eine Förderung willst." },
      { f: "Was muss ich in Deutschland anmelden?", a: "Nur das Marktstammdatenregister der Bundesnetzagentur, dafür gibt es ein einfaches Online-Formular. Beim Netzbetreiber musst du es nicht mehr extra anmelden. Hast du noch einen alten Zähler, darf er vorerst rückwärts laufen, bis der Netzbetreiber ihn tauscht. Erlaubt sind 800 Watt am Wechselrichter und Module mit zusammen bis zu 2.000 Watt. Sag außerdem deiner Hausrat- und deiner Haftpflichtversicherung Bescheid. Mit Speicher kommt noch etwas dazu, das steht in der nächsten Frage." },
      { f: "Was gilt in Deutschland mit Speicher?", a: "Den Speicher trägst du im Marktstammdatenregister mit ein, dort zählt er als eigene Einheit. Viele Netzbetreiber wollen ihn außerdem über ein kurzes Formular gemeldet haben, und manche verlangen, dass ein Elektriker ihn anschließt. Frag darum vor dem Kauf bei deinem Netzbetreiber nach. Eine eigene Norm für diese kleinen Speicher ist erst in Arbeit. Soll er an die normale Steckdose, darf er höchstens 800 Watt ins Netz geben, und die Module dürfen zusammen höchstens 960 Watt haben." },
      { f: "Wie weiß der Speicher, wie viel Strom ihr gerade braucht?", a: "Dafür misst ein kleines Gerät am Stromzähler mit. Am einfachsten ist ein Lesekopf, der mit einem Magneten an deinem digitalen Stromzähler hält. Den setzt du selbst an, ohne Elektriker. Bei vielen Zählern brauchst du dafür eine PIN. Die bekommst du kostenlos beim Messstellenbetreiber, meist ist das dein Netzbetreiber. Ein Messgerät im Sicherungskasten, wie es bei manchen Speichern im Paket liegt, darf nur eine Elektrofachkraft einbauen." },
      { f: "Wo stelle ich den Speicher hin?", a: "Am besten geschützt vor Regen und praller Sonne, zum Beispiel unter einem Vordach oder in der Garage, und so nah an den Modulen, dass die Kabel reichen. Die Speicher sind zwar für draußen zugelassen, aber bei Stiftung Warentest drang im Starkregen bei vier von fünf Wasser in die Steckdose am Gerät." },
      { f: "Darf ich das als Mieter?", a: "Fragen musst du vorher, ja. In Deutschland dürfen Vermieter und Eigentümergemeinschaften seit Oktober 2024 aber nur noch ablehnen, wenn es für sie unzumutbar wäre. Dass es ihnen optisch nicht gefällt, reicht als Grund nicht." },
      { f: "Welche Halterung brauche ich?", a: "Bei den Sets hier ist keine dabei. Kauf eine, die genau zu deinem Ort passt: Balkongeländer, Wand, Flachdach oder Garten. Unabhängige Tests von Halterungen allein gibt es leider nicht. Stiftung Warentest hat 2025 Sets mit Halterung fürs Flachdach geprüft, und bei fünf von acht knickten die Halterungen im simulierten Sturm ein oder brachen. Am Geländer ist das heikler, weil darunter Menschen oder Autos sein können. Bist du unsicher, lass eine Fachfirma montieren." },
      { f: "Lohnt sich ein Speicher?", a: "Bei zwei Modulen rechnet er sich langsamer als das Set allein, denn er kostet mehr als das Set. Laut Verbraucherzentrale und TÜV-Verband lohnt er sich eher bei größeren Anlagen, etwa mit vier Modulen. Am meisten bringt er, wenn ihr tagsüber wenig Strom braucht und abends mehr. Rechne es im Rechner für dich aus: Stell dort „Mit Speicher“ ein. Dann siehst du auch, nach wie vielen Jahren der Speicher allein bezahlt ist." },
      { f: "Was sagt Stiftung Warentest zu den Speichern?", a: "Sie hat im März 2026 fünf Speicher getestet. Am besten war der Anker, als einziger befriedigend. Drei waren mangelhaft, weil sie zu viele Störsignale aussendeten. Die können zum Beispiel das WLAN stören. Bei vier von fünf drang im Starkregen Wasser in die Steckdose am Gerät. Andere Testseiten haben mehr Speicher getestet und viele gut bewertet. In den Tests, die ich gelesen habe, wurden Störsignale aber nicht gemessen." },
      { f: "Und in der Schweiz?", a: "Dort gelten strengere Regeln: höchstens 600 Watt pro Stromzähler, ein Schweizer Stecker und ein Fehlerstromschutz. Vor dem Einschalten meldest du die Anlage schriftlich bei deinem Netzbetreiber, und als Mieter brauchst du die Zustimmung des Vermieters. Dafür muss dir der Netzbetreiber den Strom abnehmen und vergüten, den du ins Netz gibst. Ein Speicher ist dort erlaubt, wenn alles zusammen höchstens 600 Watt einspeist und eine Konformitätserklärung für das ganze Set vorliegt. Gib ihn dann bei der Meldung mit an. Die Sets und Speicher hier geben bis zu 800 Watt ab und haben einen deutschen Stecker, in der Schweiz sind sie so nicht erlaubt. Ein Set, das für die Schweiz gemacht ist, gibt es bei Amazon im Moment nicht. Ich suche gerade nach einem guten Set, das du auch in der Schweiz kaufen kannst." },
      { f: "Und in Österreich?", a: "In Österreich sind 800 Watt erlaubt. Eine Genehmigung brauchst du nicht, du musst die Anlage aber zwei Wochen vor dem Einschalten bei deinem Netzbetreiber melden. Ob ein normaler Schuko-Stecker reicht, sehen die Netzbetreiber unterschiedlich. Frag darum vorher bei deinem nach. In einer Eigentumswohnung gilt die Zustimmung der anderen Eigentümer als erteilt, wenn sie nicht innerhalb von zwei Monaten widersprechen. Ein Speicher ist erlaubt, wenn alles zusammen höchstens 800 Watt abgeben kann. Dabei zählt, was der Wechselrichter laut Datenblatt kann. Ist er nur per App auf 800 Watt gedrosselt, reicht das manchen Netzbetreibern nicht. Gib den Speicher darum bei der Meldung mit an und leg das Datenblatt bei." },
      { f: "Welcher Speicher passt in Österreich?", a: "Am besten passt der Zendure. Er steht mit 800 Watt auf der österreichischen Wechselrichterliste, und auch laut Hersteller sind 800 Watt sein Maximum. Geräte auf dieser Liste muss dein Netzbetreiber nicht noch einmal einzeln prüfen. Der Anker steht dort auch, kann laut Datenblatt aber bis zu 1.200 Watt. Auf 800 Watt begrenzt ihn nur eine Einstellung in der App, frag darum vorher bei deinem Netzbetreiber nach. Den Solakon ONE habe ich auf der Liste nicht gefunden." },
      { f: "Gilt das auch in anderen Ländern?", a: "Nein. Die Regeln hier gelten für Deutschland, Österreich und die Schweiz. Wohnst du woanders, frag vor dem Kauf deinen Netzbetreiber, was erlaubt ist." }
    ],
    profitipp: {
      titel: "Nutz den Strom zur Mittagszeit",
      text: "Ohne Speicher sparst du nur mit dem Strom, den du im selben Moment verbrauchst. So nutzt du mehr davon selbst:",
      liste: [
        "Lass Spülmaschine und Waschmaschine um die Mittagszeit laufen, wenn die Sonne am stärksten ist",
        "Bist du tagsüber weg, starte sie mit der Zeitvorwahl oder einer Zeitschaltuhr",
        "Lade Akkus wie den vom E-Bike lieber mittags als abends"
      ]
    },
    rechner: "balkonkraftwerk",
    video: "balkonkraftwerk",
    preisstand: "Oktober 2026"
  },
  {
    id: "akkusauger",
    name: "Akku-Staubsauger",
    kategorie: "Haushalt",
    symbol: "🧹",
    bild: "",
    kurz: "Ein leichter Staubsauger ohne Kabel. Er hängt geladen an der Wand oder steht in seiner Ladestation, und mit einem Handgriff machst du ihn zum Handsauger.",
    warum: "Kein Kabel, kein Umstecken, kein schwerer Sauger, den du erst aus der Kammer zerrst. Du nimmst ihn einfach von der Wand und saugst los, auch wenn es nur schnell die Krümel unterm Esstisch sind. Als Handsauger kommst du damit aufs Sofa, auf die Treppe und ins Auto.",
    statt: "Statt Kabel und schwerem Sauger",
    nutzen: "Von der Wand nehmen, saugen, zurückhängen.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Du saugst oft zwischendurch, zum Beispiel Krümel oder Tierhaare",
      "Du hast Treppen oder mehrere Etagen",
      "Du willst auch Sofa und Auto schnell sauber bekommen, oder ein Saugroboter ist dir gerade zu teuer"
    ],
    nachteile: [
      "Die Akkuzeit, die Hersteller angeben, gilt meist für die schwächste Stufe. Auf höchster Stufe sind es oft nur 10 bis 15 Minuten. Hast du eine große Wohnung, nimm ein Modell mit zweitem Akku",
      "Der Staubbehälter ist klein, meist unter einem Liter. Beim Leeren staubt es etwas",
      "Nach einigen Jahren lässt der Akku nach, und ein neuer kostet extra. Achte darauf, dass es Ersatz-Akkus gibt"
    ],
    erfahrung: {
      titel: "Meine Erfahrung",
      bild: "", bildText: "Foto: dein Akkusauger",
      text: "Hast du einen Saugroboter, brauchst du den Akkusauger sowieso nur sehr selten. Dafür reicht ein günstiges Modell. Ich habe zum Beispiel den Bulelink Zenith G10 und bin damit sehr zufrieden."
    },
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 200 €",
        name: "Bulelink Zenith G10", preis: 130, preisText: "ca. 115 bis 150 €",
        punkte: [
          "Bei testit.de gut (Note 2,4, April 2026)",
          "Im Test hielt der Akku auf schwächster Stufe rund eine Stunde",
          "Den Akku kannst du herausnehmen",
          "Steht von allein, du brauchst keine Halterung an der Wand"
        ],
        fuer: "Mein Tipp, wenn du schon einen Saugroboter hast. Ich nutze ihn selbst, mehr dazu unter „Meine Erfahrung“.",
        hinweis: "Bei testit.de wickelten sich Haare um die Walze, und an Kanten blieb Schmutz liegen.",
        link: amazon("bulelink zenith g10"),
        alternativen: [
          { name: "AEG Serie 6000 (AP61CB21DB)", preis: 115, text: "Der Akku lässt sich herausnehmen und wechseln.", link: amazon("aeg 6000 ap61cb21db") }
        ]
      },
      {
        stufe: "Mittelklasse", spanne: "200 bis 400 €",
        name: "Rowenta X-Force Flex 13.60 Allergy", preis: 259, preisText: "ca. 250 bis 270 €", empfohlen: true,
        punkte: [
          "Bei Stiftung Warentest gut (Note 2,5, Heft 2/2025)",
          "Das Rohr knickt ab: Du saugst unter Sofa und Bett, ohne dich zu bücken",
          "Akku hält laut Hersteller bis zu 60 Minuten",
          "Wird zum Handsauger für Sofa, Treppe und Auto"
        ],
        fuer: "Für die meisten Wohnungen. Mein Tipp, denn er ist im Test gut und kostet viel weniger als der Testsieger.",
        link: amazon("rowenta x-force flex 13.60 allergy"),
        alternativen: [
          { name: "Bosch Unlimited 7 (BSS715CARP)", preis: 359, text: "Bei Stiftung Warentest ebenfalls gut (Note 2,4, Heft 2/2025). Der Akku passt auch in viele Bosch-Geräte für Haus und Garten.", link: amazon("bosch unlimited 7 bss715carp") }
        ]
      },
      {
        stufe: "Oberklasse", spanne: "ab 400 €",
        name: "Bosch Unlimited 10 (BTS1042WAC)", preis: 600, preisText: "ca. 480 bis 700 €",
        punkte: [
          "Testsieger bei Stiftung Warentest (Note 2,2, Heft 2/2026)",
          "Zwei Akkus, laut Hersteller je bis zu 80 Minuten auf der schwächsten Stufe",
          "Lädt in etwa einer Stunde",
          "Presst den Staub im Behälter zusammen, du leerst ihn seltener"
        ],
        fuer: "Für große Wohnungen, Häuser mit mehreren Etagen und Haushalte mit Tieren.",
        link: amazon("bosch unlimited 10 bts1042wac")
      }
    ],
    fragen: [
      { f: "Ersetzt er meinen normalen Staubsauger?", a: "Ein guter schon, vor allem bei Hartböden und nicht zu hohen Teppichen. Laut Stiftung Warentest halten die besten Akkusauger mit klassischen Staubsaugern mit. Aber nicht alle sind gut: Im Test von Heft 2/2026 waren auch Geräte nur ausreichend oder mangelhaft." },
      { f: "Wie lange hält der Akku?", a: "Was die Hersteller angeben, gilt meist für die schwächste Stufe. Auf höchster Stufe sind es oft nur 10 bis 15 Minuten. Beim Bosch Unlimited 10 liegt ein zweiter Akku bei, damit saugst du doppelt so lange." },
      { f: "Wie leere ich den Staubbehälter?", a: "Über dem Mülleimer öffnest du den Behälter, dann fällt der Staub heraus. Dabei staubt es etwas. Wenn du eine Hausstauballergie hast, leere ihn am besten draußen oder lass das jemand anderen machen." },
      { f: "Schafft er Tierhaare?", a: "Nicht jeder gleich gut. Bei Stiftung Warentest entfernten der Bosch Unlimited 10, die beiden Miele-Modelle und der Rowenta X-Force Flex 13.60 Tierhaare zuverlässig, andere schwächelten dabei. Wickeln sich lange Haare um die Bürste, schneidest du sie auf und ziehst sie ab." },
      { f: "Gibt es auch welche, die gleich mitwischen?", a: "Ja, sogenannte Nass-Trocken-Sauger, zum Beispiel von Tineco oder Dreame. Sie saugen und wischen gleichzeitig und lohnen sich bei viel Hartboden. Wenn du aber gar nichts mehr selbst machen willst, schau dir den Saugroboter an. Seit ich einen habe, sauge ich nicht mehr selbst." },
      { f: "Wie lange hält so ein Gerät?", a: "Meist lässt zuerst der Akku nach, oft nach einigen Jahren. Achte deshalb darauf, dass du ihn wechseln kannst und es Ersatz-Akkus gibt. Bosch gibt beim Unlimited 10 sogar zehn Jahre Garantie auf den Motor." }
    ],
    rechner: "akkusauger",
    video: "akkusauger"
  },
  {
    id: "reiskocher",
    name: "Reiskocher",
    kategorie: "Küche",
    symbol: "🍚",
    bild: "",
    kurz: "Ein kleines Gerät, das Reis selbstständig gart und danach warm hält. Bei vielen Modellen kannst du oben im Dämpfeinsatz gleich Gemüse oder Fisch mitgaren.",
    warum: "Reis und Wasser rein, Knopf drücken, fertig. Danebenstehen musst du nicht: Mit der richtigen Wassermenge kocht nichts über, und angebrannt ist bei Stiftung Warentest in keinem Gerät etwas. Ist das Wasser aufgesogen, schaltet er selbstständig aufs Warmhalten. So wartet der Reis auf dich und nicht du auf den Reis.",
    statt: "Statt Topf, der überkocht",
    nutzen: "Knopf drücken, er macht den Rest.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Du isst gern und oft Reis",
      "Du willst Reis, der jedes Mal gleich gut wird",
      "Du willst nebenbei Gemüse dämpfen oder dich um etwas anderes kümmern"
    ],
    nachteile: [
      "Viele Geräte sind langsamer als ein Topf: Bei Stiftung Warentest brauchten sie je nach Modell, Reis und Menge 13 Minuten bis gut eine Stunde. Dafür musst du in der Zeit nicht danebenstehen",
      "Er braucht etwas Platz auf der Arbeitsfläche oder im Schrank",
      "Unten bildet sich oft eine dünne Kruste. Bei guten Geräten bleibt sie hell, bei schwächeren wird sie bräunlich"
    ],
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 70 €",
        name: "Gastroback Design Reiskocher (42507)", preis: 61,
        punkte: [
          "Bei Stiftung Warentest der günstigste gute Reiskocher (Heft 5/2026)",
          "Schnell: Im Test war er je nach Menge und Reis nach 16 bis 34 Minuten fertig",
          "Mit Dämpfeinsatz für Gemüse",
          "Hält den Reis danach warm"
        ],
        fuer: "Für dich, wenn du einfach guten Reis willst, ganz ohne Schnickschnack.",
        hinweis: "Ohne Timer und ohne Programme: Er startet sofort, wenn du ihn einschaltest.",
        link: amazon("gastroback 42507 reiskocher")
      },
      {
        stufe: "Mittelklasse", spanne: "70 bis 150 €",
        name: "Yum Asia Tsuki Mini", preis: 100, preisText: "ca. 100 €", empfohlen: true,
        punkte: [
          "Fuzzy Logic: Er passt Hitze und Zeit selbst an den Reis an",
          "7 Programme, zum Beispiel für Langkorn-, Sushi- und Naturreis, Brei und Schongaren",
          "Mit Timer bis 24 Stunden, danach hält er den Reis warm",
          "Schick und matt, in Weiß oder Grau, mit Innentopf aus Keramik"
        ],
        fuer: "Für Singles und Paare. Mein Tipp, denn ich habe ihn selbst und finde ihn super. Er sieht auch richtig schick aus, und du kannst zwischen zwei Farben wählen.",
        hinweis: "Er ist klein: Bis 2,5 Messbecher Reis, das reicht für 1 bis 2 Personen. Weißer Reis braucht laut Hersteller etwa 30 bis 40 Minuten. Den Keramiktopf spülst du von Hand.",
        link: amazon("yum asia tsuki mini reiskocher"),
        alternativen: [
          { name: "Panasonic SR-DA152", preis: 90, text: "Testsieger bei Stiftung Warentest (gut, Note 2,2, Heft 5/2026). Größer (1,5 Liter), mit Timer und Dämpfeinsatz. Die bessere Wahl für Familien.", link: amazon("panasonic sr-da152 reiskocher") },
          { name: "Rommelsbacher MRK 650", preisText: "ca. 85 bis 100 €", text: "Ebenfalls Testsieger bei Stiftung Warentest (gut, Note 2,2, Heft 5/2026). Mit 12 Programmen, Dämpfeinsatz und Startzeitvorwahl bis 24 Stunden.", link: amazon("rommelsbacher mrk 650 reiskocher") },
          { name: "Cosori Reiskocher (CRC-R501)", preis: 99, text: "Bei Stiftung Warentest ebenfalls gut (Heft 5/2026), mit Dämpfeinsatz und vielen Programmen. Dafür langsam: Im Test brauchte er 43 bis 68 Minuten.", link: amazon("cosori reiskocher crc-r501") }
        ]
      },
      {
        stufe: "Oberklasse", spanne: "ab 150 €",
        name: "Yum Asia Bamboo", preis: 250, preisText: "ca. 250 €",
        punkte: [
          "Heizt mit Induktion: Der Topf selbst wird heiß, nicht nur eine Heizplatte darunter. Das verteilt die Hitze gleichmäßiger",
          "Topf mit Keramik-Beschichtung",
          "Viele Programme für Reissorten, dazu Dämpfen, Schongaren und Backen",
          "Testsieger bei ETM Testmagazin (sehr gut, Heft 1/2024)"
        ],
        fuer: "Für dich, wenn du sehr oft Reis isst und das Beste willst.",
        hinweis: "Bei Stiftung Warentest war er nicht im Test. Laut ETM Testmagazin könnte er den Reis besser warm halten. Ehrlich gesagt langt für die meisten die Mittelklasse völlig aus.",
        link: amazon("yum asia bamboo reiskocher induktion")
      }
    ],
    fragen: [
      { f: "Wie viel Wasser kommt dazu?", a: "Das zeigen dir Striche innen im Topf. Du füllst den Reis mit dem beiliegenden Messbecher ein und gießt Wasser bis zum passenden Strich. Halte dich daran, dann passt es fast immer." },
      { f: "Muss ich den Reis vorher waschen?", a: "Ja, kurz abspülen lohnt sich: Dann klebt er weniger, und es kocht nicht so leicht etwas über. Schütte ihn in ein Sieb und spül ihn mit kaltem Wasser, bis das Wasser fast klar ist." },
      { f: "Kann ich auch Gemüse oder Fisch darin garen?", a: "Ja, wenn dein Gerät einen Dämpfeinsatz hat. Fast alle haben einen, der Tsuki Mini nicht. Er kommt oben in den Topf, und bei vielen Geräten gart darin Gemüse oder Fisch im Dampf, während unten der Reis kocht. Ob das Gemüse knackig bleibt, hängt vom Gerät ab: Bei Stiftung Warentest gelang knackig grüner Brokkoli nur in sechs Geräten (Heft 5/2026)." },
      { f: "Wie lange darf der Reis warm bleiben?", a: "Nicht zu lange. Das Bundesinstitut für Risikobewertung rät, warm gehaltenes Essen spätestens drei Stunden nach dem Kochen zu essen, und es sollte dabei über 65 Grad heiß bleiben. Reste stellst du schnell in den Kühlschrank und isst sie innerhalb eines Tages. Lauwarm herumstehen sollte gekochter Reis nicht, sonst können sich Keime bilden." },
      { f: "Ist die Beschichtung unbedenklich?", a: "Bei den meisten Geräten ja. Stiftung Warentest hat aber bei zwei Reiskochern von Reishunger festgestellt, dass sich aus der Beschichtung deutlich mehr Aluminium löst als bei den anderen Geräten, auch wenn der Grenzwert eingehalten wird (Heft 5/2026). Diese Geräte empfehle ich deshalb nicht. Egal bei welchem Gerät: Nimm keinen Metalllöffel und keinen Scheuerschwamm, damit die Beschichtung lange hält." },
      { f: "Schmeckt Reis aus dem Reiskocher besser?", a: "Das hängt vom Gerät ab. Ein Reiskocher regelt die Hitze selbst und schaltet aufs Warmhalten, sobald das Wasser aufgesogen ist. Gut kann das aber nicht jeder: Bei Stiftung Warentest garten nur 6 von 13 Reiskochern den Reis gut, darunter die beiden Testsieger (Heft 5/2026). Angebrannt ist bei keinem etwas." }
    ],
    rechner: "reiskocher",
    video: "reiskocher"
  },
  {
    id: "kaffeevollautomat",
    name: "Kaffeevollautomat",
    kategorie: "Küche",
    symbol: "☕",
    bild: "",
    kurz: "Eine Kaffeemaschine, die die Bohnen frisch mahlt und dir Espresso, Kaffee oder Cappuccino auf Knopfdruck macht.",
    warum: "Du drückst einen Knopf, und den Rest erledigt die Maschine: mahlen, brühen und bei den Geräten hier auch die Milch aufschäumen. Eine Tasse aus Bohnen kostet dabei deutlich weniger als eine Markenkapsel oder ein Cappuccino im Café. Und Kapselmüll gibt es auch keinen mehr.",
    statt: "Statt Kapseln und Coffee to go",
    nutzen: "Frisch gemahlener Kaffee und Cappuccino auf Knopfdruck, ganz ohne Kapseln.",
    spart: ["geld"],
    fuer: [
      "Du trinkst jeden Tag Kaffee, gern auch mit Milch",
      "Du kaufst bisher Markenkapseln oder holst dir oft Kaffee unterwegs",
      "Du willst Cappuccino, ohne selbst Milch aufzuschäumen"
    ],
    nachteile: [
      "Ein paar Handgriffe brauchst du jeden Tag: Kaffeesatz und Tropfschale leeren und nach Milchgetränken das Milchsystem spülen",
      "Trinkst du gern Filterkaffee oder günstige Kapseln vom Discounter, sparst du damit kein Geld",
      "Er kostet in der Anschaffung deutlich mehr als eine Kapselmaschine und braucht Platz: Die Geräte hier sind 20 bis 26 Zentimeter breit und 44 bis 47 Zentimeter tief"
    ],
    gruppen: [
      { name: "Mit Milchkaraffe", text: "Du füllst Milch in eine Karaffe und steckst sie vorn an das Gerät. Danach stellst du die Karaffe mit der Restmilch in den Kühlschrank und spülst sie regelmäßig. Das Umfüllen und Spülen lohnt sich vor allem, wenn ihr viel Milchkaffee trinkt. Gute Geräte mit Karaffe gibt es schon um 400 Euro." },
      { name: "Mit Milchschlauch", text: "Ein dünner Schlauch zieht die Milch direkt aus der Milchpackung oder aus einem Behälter neben dem Gerät. Du füllst nichts um und spülst keine Karaffe. Darum ist der Schlauch besser, wenn du nur ab und zu Milchkaffee trinkst. Nach Milchgetränken muss er aber durchgespült und regelmäßig gründlich gereinigt werden, sonst bilden sich Keime. Gute Geräte mit Schlauch sind teurer: Das günstigste hier kostet gut 500 Euro." }
    ],
    modelle: [
      {
        gruppe: "Mit Milchkaraffe",
        stufe: "Günstig", spanne: "bis 450 €",
        name: "De'Longhi Magnifica Start", preis: 420, preisText: "ca. 400 bis 420 €",
        punkte: [
          "Bei Stiftung Warentest gut (Note 2,3, Herbst 2024), eines der günstigsten guten Geräte im Test",
          "Cappuccino auf Knopfdruck: Er schäumt die Milch aus der Karaffe selbst auf",
          "Die Brühgruppe kannst du zum Ausspülen herausnehmen"
        ],
        fuer: "Für dich, wenn du vor allem Espresso, Kaffee und Cappuccino trinkst und wenig ausgeben willst.",
        hinweis: "Auf Knopfdruck gibt es nur vier Getränke: Espresso, Kaffee, Cappuccino und heißes Wasser. Getestet wurde die ECAM220.60.B. Der Link führt zur ECAM222.60.BG, die laut De'Longhi gleich ausgestattet ist. Andere Versionen der Magnifica Start haben nur eine Düse, mit der du die Milch selbst aufschäumst.",
        link: amazon("de'longhi magnifica start ecam222.60.bg")
      },
      {
        gruppe: "Mit Milchkaraffe",
        stufe: "Mittelklasse", spanne: "450 bis 650 €",
        name: "De'Longhi Magnifica Evo Next", preis: 570, preisText: "ca. 430 bis 570 €", empfohlen: true,
        punkte: [
          "Bei Stiftung Warentest gut (Note 2,1, Juni 2025), knapp hinter den beiden Testsiegern",
          "Laut Stiftung Warentest schäumt er die Milch sehr fein und cremig auf",
          "13 Getränke auf Knopfdruck: zwölf Kaffeegetränke und heißes Wasser",
          "Die Brühgruppe kannst du zum Ausspülen herausnehmen"
        ],
        fuer: "Für die meisten. Mein Tipp, denn er schnitt im Test fast so gut ab wie die Testsieger, die deutlich mehr kosten.",
        hinweis: "Getestet wurde die ECAM310.80.SB in Silber-Schwarz. Der Link führt zur ECAM312.80.TB in Titan, die laut De'Longhi gleich ausgestattet ist. Die ECAM310.60.B macht laut De'Longhi nur zehn Getränke auf Knopfdruck.",
        link: amazon("de'longhi magnifica evo next ecam312.80.tb"),
        alternativen: [
          { name: "De'Longhi Rivelia", preis: 600, text: "Testsieger im Herbst 2024 mit derselben Note 2,1. Sie hat zwei Bohnenbehälter, so wechselst du schnell zwischen zwei Sorten, und ein größeres Touch-Display. Meist kostet sie etwas mehr. Getestet wurde die schwarze EXAM440.55.B. Der Link führt zur weißen EXAM440.55.W, laut De'Longhi ebenfalls mit 16 Getränken und zwei Bohnenbehältern.", link: amazon("de'longhi rivelia exam440.55.w") }
        ]
      },
      {
        gruppe: "Mit Milchkaraffe",
        stufe: "Oberklasse", spanne: "ab 650 €",
        name: "De'Longhi Eletta Explore Cold Brew", preis: 800, preisText: "ca. 800 bis 900 €",
        punkte: [
          "Testsieger bei Stiftung Warentest (gut, Juli 2026), zusammen mit der teureren Eletta Ultra",
          "Macht auch kalte Getränke: kalten Milchschaum und Cold Brew",
          "Laut Hersteller über 50 Getränke, Bedienung per Touch-Display oder App",
          "Die Brühgruppe kannst du zum Ausspülen herausnehmen"
        ],
        fuer: "Für dich, wenn du viele verschiedene Getränke willst, im Sommer auch kalte.",
        hinweis: "Achte auf „Cold Brew“ im Namen. Laut De'Longhi hat diese Version die Bestnote bekommen. Der Link führt zur ECAM450.65.G in Dunkelgrau.",
        link: amazon("de'longhi eletta explore cold brew ecam450.65.g")
      },
      {
        gruppe: "Mit Milchschlauch",
        stufe: "Günstig", spanne: "bis 550 €",
        name: "Melitta Latticia OT", preis: 550, preisText: "ca. 540 bis 600 €",
        punkte: [
          "Bei Stiftung Warentest gut (Note 2,3, Juni 2025)",
          "Nur 20 Zentimeter breit, passt auch in kleine Küchen",
          "Cappuccino und Latte macchiato auf Knopfdruck",
          "Die Brühgruppe kannst du zum Ausspülen herausnehmen"
        ],
        fuer: "Für dich, wenn du ein Gerät mit Schlauch willst und deine Küche eher klein ist.",
        hinweis: "Auf Knopfdruck gibt es nur fünf Getränke: Kaffee, Cappuccino, Latte macchiato, Milchschaum und heißes Wasser. Laut Melitta reinigst du den Schlauch, indem du ihn in ein Glas Wasser hängst und das Reinigungsprogramm startest.",
        link: amazon("melitta latticia ot f300-100")
      },
      {
        gruppe: "Mit Milchschlauch",
        stufe: "Mittelklasse", spanne: "550 bis 650 €",
        name: "Siemens EQ500 TP516DX3", preis: 560, preisText: "ca. 545 bis 620 €",
        punkte: [
          "Bei Stiftung Warentest gut (Note 2,3, Juni 2025)",
          "Laut Siemens reinigt er das Milchsystem nach jedem Milchgetränk selbst mit Dampf",
          "Bedienung per Farbdisplay oder App, laut Siemens bis zu 18 Getränke",
          "Die Brühgruppe kannst du zum Ausspülen herausnehmen"
        ],
        fuer: "Für dich, wenn du ein Gerät mit Schlauch willst, das sich nach jedem Milchkaffee selbst durchspült. Mit Siemens-Kaffeemaschinen habe ich selbst die besten Erfahrungen gemacht.",
        hinweis: "Den Schlauch steckst du in die Milchpackung oder in einen Milchbehälter. Achte auf „TP516DX3“: Die günstigere EQ500 TP511E19 hat keine App und wurde nicht getestet.",
        link: amazon("siemens eq500 tp516dx3")
      },
      {
        gruppe: "Mit Milchschlauch",
        stufe: "Oberklasse", spanne: "ab 650 €",
        name: "Nivona NICR 790", preis: 750, preisText: "ca. 745 bis 850 €", empfohlen: true,
        punkte: [
          "Testsieger bei Stiftung Warentest (gut, Note 2,0, Juni 2025)",
          "Laut Nivona entkalkst du ihn auch mit Mitteln ohne Sulfamidsäure",
          "Bedienung auch per App über Bluetooth",
          "Die Brühgruppe kannst du zum Ausspülen herausnehmen"
        ],
        fuer: "Mein Tipp, wenn du ein Gerät mit Schlauch willst: Er war Testsieger.",
        hinweis: "Teurere Geräte mit Schlauch schnitten im Test nicht besser ab. Den Schlauch steckst du direkt in die Milchpackung.",
        link: amazon("nivona nicr 790")
      }
    ],
    fragen: [
      { f: "Schlauch oder Karaffe: Was passt zu mir?", a: "Gut können beide: Bei Stiftung Warentest gab es mit beiden Systemen Testsieger, 2025 die Nivona mit Schlauch und 2026 die Eletta Explore mit Karaffe. Der Unterschied liegt im Alltag. Die Karaffe füllst du, stellst sie danach mit der Restmilch in den Kühlschrank und spülst sie regelmäßig. Das lohnt sich vor allem, wenn ihr viel Milchkaffee trinkt. Ich habe zum Beispiel mit der De'Longhi Dynamica Plus, die eine Karaffe hat, gute Erfahrungen gemacht. Trinkst du nur ab und zu einen Milchkaffee, ist der Schlauch besser: Du steckst ihn in die Milchpackung und füllst nichts um. Dafür muss er nach Milchgetränken durchgespült und regelmäßig gründlich gereinigt werden. Und mit Karaffe bekommst du ein gutes Gerät schon deutlich günstiger." },
      { f: "Wie viel spare ich gegenüber Kapseln?", a: "Eine Markenkapsel kostet rund 40 Cent, eine Tasse aus dem Vollautomaten mit Bohnen, Wasser und Strom etwa 15 Cent. Trinkt ihr zwei Tassen am Tag, sind das rund 15 Euro im Monat weniger, nach Abzug von Entkalker und Reiniger rund 10 Euro. Mit günstigen Kapseln vom Discounter bleibt kaum etwas übrig. Am meisten sparst du, wenn du Kaffee unterwegs ersetzt: Ein Cappuccino im Café kostet im Schnitt fast 4 Euro. Was es bei dir ausmacht, zeigt der Rechner." },
      { f: "Lohnt er sich auch gegenüber Filterkaffee?", a: "Beim Geld ehrlicherweise nicht. Filterkaffee ist laut Stiftung Warentest die günstigste Art, Kaffee zu machen, auch weil die Maschine wenig kostet. Ein Vollautomat rechnet sich laut Warentest erst, wenn viel Kaffee getrunken wird. Dafür mahlt er jede Tasse frisch und macht dir Espresso und Cappuccino auf Knopfdruck." },
      { f: "Wie viel Arbeit macht die Pflege?", a: "Jeden Tag leerst du den Kaffeesatz und die Tropfschale, viele Geräte melden sich, wenn es so weit ist. Nach Milchgetränken spülst du das Milchsystem, bei vielen Geräten per Knopfdruck, die Siemens macht es selbstständig. Die Karaffe nimmst du regelmäßig auseinander und spülst sie, für den Schlauch gibt es ein Reinigungsprogramm. Einmal pro Woche nimmst du die Brühgruppe heraus und spülst sie unter fließendem Wasser ab, ohne Spülmittel. Das geht bei allen Geräten hier. Entkalken musst du, wenn das Gerät es anzeigt. Für Entkalker, Reiniger und Wasserfilter rechnest du grob mit 30 bis 120 Euro im Jahr." },
      { f: "Muss ich entkalken?", a: "Ja. Stell beim Einrichten die Wasserhärte ein, ein Teststreifen liegt meist bei. Dann zeigt dir das Gerät rechtzeitig an, wann es Zeit ist. Mit einem Wasserfilter musst du laut den Herstellern seltener entkalken. Nimm ein Mittel, das der Hersteller für dein Gerät empfiehlt. Stiftung Warentest rät zu Entkalkern ohne Sulfamidsäure, weil sie Wasserlebewesen schadet." },
      { f: "Welche Bohnen passen?", a: "Espresso- oder Crema-Bohnen, je nachdem, was dir schmeckt. Nimm keine karamellisierten oder aromatisierten Bohnen: Laut De'Longhi können sie das Mahlwerk verkleben. Auch sehr ölige Bohnen sind nichts: Laut Siemens rutschen sie nicht richtig ins Mahlwerk." },
      { f: "Warum sind alle Geräte mit Karaffe von De'Longhi?", a: "Weil sie bei Stiftung Warentest in ihrer Preisklasse am besten abschnitten: Die Magnifica Start ist eines der günstigsten guten Geräte, die Magnifica Evo Next landete 2025 knapp hinter den Testsiegern, und die Eletta Explore ist aktueller Testsieger. Auch Philips baut mit LatteGo eine Karaffe, die du ansteckst und ganz ohne Schlauch schnell abspülst. Beim getesteten Philips 5500 schmeckten Espresso und Cappuccino im Test 2024 aber nur mittelmäßig." }
    ],
    profitipp: {
      titel: "Stell den Mahlgrad ein",
      text: "Wie fein die Bohnen gemahlen werden, ändert den Geschmack deutlich. Probier es einfach aus, es kostet dich nichts:",
      liste: [
        "Schmeckt der Kaffee sauer oder wässrig, stell eine Stufe feiner",
        "Schmeckt er bitter oder läuft er nur tröpfchenweise, stell eine Stufe gröber",
        "Dreh nur, während das Mahlwerk läuft. So steht es in den Anleitungen",
        "Den Unterschied schmeckst du erst nach zwei bis drei Tassen"
      ]
    },
    rechner: "kaffeevollautomat",
    video: "kaffeevollautomat"
  },
  {
    id: "kuechenmaschine-kochfunktion",
    name: "Küchenmaschine mit Kochfunktion",
    kurzname: "Küchenmaschine",
    kategorie: "Küche",
    symbol: "🍲",
    bild: "",
    kurz: "Ein Gerät, das zerkleinert, rührt und dabei kocht, alles im selben Topf. Das bekannteste ist der Thermomix.",
    warum: "Suppe, Soße, Risotto oder Milchreis: Die Maschine rührt und heizt gleichzeitig, und du musst nicht mehr am Herd stehen. Zwiebeln und Gemüse zerkleinert sie vorher im selben Topf, und bei vielen Geräten wiegst du die Zutaten gleich darin ab. Danach spülst du vor allem den Mixtopf statt Brett, Messer und Kochtopf.",
    statt: "Statt Rühren am Herd",
    nutzen: "Rührt und kocht für dich. Du machst etwas anderes.",
    spart: ["zeit", "muehe"],
    fokus: "zeit",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Du kochst oft Suppen, Soßen, Eintöpfe oder Risotto",
      "Du verbringst deine Zeit lieber mit etwas anderem als mit Rühren am Herd",
      "Du willst Zerkleinerer, Pürierstab und Dampfgarer in einem Gerät"
    ],
    nachteile: [
      "Sie ist groß und schwer: Die Geräte hier wiegen 6 bis 8,5 Kilo und brauchen einen festen Platz auf der Arbeitsplatte",
      "Zwiebeln werden schnell zu Brei: Beim Zwiebelhacken patzten bei Stiftung Warentest fast alle Geräte (Heft 1/2024)",
      "Nicht jede kann richtig anbraten: Röstaromen entstehen laut Stiftung Warentest erst ab 140 Grad, manche Geräte schaffen nur 120"
    ],
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 450 €",
        name: "Moulinex ClickChef (HF4568)", preis: 420,
        punkte: [
          "Bei Stiftung Warentest Preis-Leistungs-Tipp (befriedigend, Note 2,9, Heft 1/2024)",
          "Mit eingebauter Waage und Dampfgaraufsatz",
          "5 Automatikprogramme, dazu stellst du Zeit, Tempo und Hitze selbst ein"
        ],
        fuer: "Zum Einstieg, wenn du vor allem Suppen, Soßen und Teig machst.",
        hinweis: "Sie wird nur 120 Grad heiß, scharf anbraten geht damit nicht. Schritt-für-Schritt-Rezepte am Gerät hat sie nicht, nur ein Kochbuch. Das lag bei diesem Angebot laut mehreren Käuferbewertungen nur auf Italienisch oder Französisch bei. Der Topf fasst 3,6 Liter, zum Kochen nutzt du laut Hersteller 2 Liter.",
        link: amazon("moulinex clickchef hf4568")
      },
      {
        stufe: "Mittelklasse", spanne: "450 bis 800 €",
        name: "Moulinex Companion XL (HF8401)", preis: 590, empfohlen: true,
        punkte: [
          "Bei Test-Achats (Belgien) insgesamt etwa so gut wie der Thermomix TM7 (Juli 2026)",
          "Großer Topf: 3 Liter nutzbar, laut Hersteller für bis zu 10 Personen",
          "12 Automatikprogramme und Handbetrieb, Moulinex zählt das als 14 Funktionen",
          "Rezepte in der kostenlosen Moulinex-App, ohne Abo"
        ],
        fuer: "Für die meisten. Mein Tipp, denn im Test kommt sie fast an den Thermomix heran, und für Rezepte brauchst du kein Abo.",
        hinweis: "Eine Waage hat sie nicht, du brauchst also eine Küchenwaage dazu. Laut Test-Achats ist sie nur mittelmäßig leicht zu reinigen.",
        link: amazon("moulinex companion xl hf8401")
      },
      {
        stufe: "Oberklasse", spanne: "ab 800 €",
        name: "WMF Avantgarde", preis: 1299,
        punkte: [
          "Bei Stiftung Warentest gut (Heft 2/2026), bei CHIP gut (Note 1,9, Mai 2025)",
          "Führt dich laut Hersteller mit gut 300 Rezepten Schritt für Schritt über den Touchscreen",
          "Mit eingebauter Waage, Dampfgaraufsatz und WLAN",
          "Laut Hersteller besonders leise"
        ],
        fuer: "Für dich, wenn du dich Schritt für Schritt durch Rezepte führen lassen willst und dafür gern mehr ausgibst.",
        hinweis: "Sie ist schwer (8,5 Kilo). CHIP sieht beim Kochen noch Luft nach oben und findet die Rezeptauswahl klein. Für die meisten langt die Mittelklasse völlig aus.",
        link: amazon("wmf avantgarde küchenmaschine kochfunktion")
      }
    ],
    fragen: [
      { f: "Warum ist der Thermomix nicht dabei?", a: "Vorwerk verkauft den Thermomix nur selbst, über Beraterinnen und Berater und im eigenen Onlineshop. Bei Amazon gibt es ihn darum nicht. Gut ist er trotzdem: Bei Stiftung Warentest war der Thermomix TM7 gut (Heft 2/2026). Der Moulinex Companion XL kam bei Test-Achats insgesamt auf ein ähnliches Ergebnis." },
      { f: "Und der Bosch Cookit, der Testsieger?", a: "Der Bosch Cookit war bei Stiftung Warentest Testsieger (gut, Note 2,0, Heft 1/2024). Bei Amazon gibt es ihn aber nicht, darum fehlt er hier." },
      { f: "Was ist mit dem Monsieur Cuisine von Lidl?", a: "Den Monsieur Cuisine Smart verkauft Lidl selbst. Bei Stiftung Warentest war er befriedigend (Note 2,8, Heft 1/2024), bei Test-Achats ist er ein Preis-Leistungs-Tipp. Wenn du ihn bei Lidl bekommst, ist er eine günstige Alternative mit eingebauter Waage." },
      { f: "Kann ich darin anbraten?", a: "Nur bedingt. Röstaromen entstehen laut Stiftung Warentest erst ab 140 Grad. Der ClickChef schafft nur 120 Grad, damit wird nichts richtig braun. Für Steak, Schnitzel oder knusprige Zwiebeln nimmst du besser weiter die Pfanne." },
      { f: "Werden Zwiebeln zu Brei?", a: "Leicht, ja. Beim Zwiebelhacken patzten bei Stiftung Warentest fast alle Geräte (Heft 1/2024). Am besten zerkleinerst du Zwiebeln mit wenigen kurzen Stößen der Impuls- oder Turbotaste und schaust zwischendurch nach." },
      { f: "Brauche ich ein Abo für Rezepte?", a: "Für den Companion XL nicht: Die Rezepte stehen in der kostenlosen Moulinex-App. Beim ClickChef sind sie im Kochbuch, und die WMF bringt laut Hersteller gut 300 Rezepte auf dem Gerät mit. Beim Thermomix brauchst du für die meisten Rezepte das Cookidoo-Abo, ohne Abo hast du laut Vorwerk rund 200 Rezepte auf dem Gerät." },
      { f: "Wie viel Zeit spart sie wirklich?", a: "Ehrlich gesagt hat das kein Test gemessen. Schneller kocht die Maschine nicht unbedingt. Sie spart dir aber das Danebenstehen und Rühren, und Zwiebeln und Gemüse musst du nicht von Hand schneiden. In der Zeit deckst du den Tisch, räumst auf oder setzt dich einfach hin. Wie viel das bei dir ausmacht, zeigt dir der Rechner." }
    ],
    rechner: "kochfunktion",
    video: "kuechenmaschine-kochfunktion"
  },
  {
    id: "kuechenmaschine",
    name: "Küchenmaschine zum Kneten und Rühren",
    kurzname: "Küchenmaschine",
    kategorie: "Küche",
    symbol: "🧁",
    bild: "",
    kurz: "Eine Maschine mit großer Schüssel, die Teig knetet, Kuchenteig rührt und Sahne schlägt. Mit Zubehör raspelt und schneidet sie auch Gemüse.",
    warum: "Hefeteig für Brot, Pizza oder Zopf knetest du von Hand mindestens 8 Minuten, und das ist ganz schön anstrengend. Die Maschine knetet ihn allein. In der Zeit fettest du die Form, bereitest den Belag vor oder räumst schon auf. Auch Rührteig und Sahne macht sie, ohne dass du einen Mixer halten musst.",
    statt: "Statt Kneten von Hand",
    nutzen: "Knetet und rührt für dich. Deine Hände sind frei.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Du backst oft Kuchen, Brot, Pizza oder Hefezopf",
      "Du willst dir das anstrengende Kneten von Hand sparen",
      "Du willst nebenher etwas anderes machen, während der Teig geknetet wird"
    ],
    nachteile: [
      "Sie braucht Platz: Die kleinen Bosch-Modelle wiegen knapp 5 Kilo, große Maschinen 8 bis 10 Kilo. Am besten steht sie fest auf der Arbeitsfläche",
      "Pürieren und Zerkleinern können die meisten nur mit Zubehör: Für fast alle Maschinen mit Schwenkarm musste Stiftung Warentest dafür Aufsätze dazukaufen (Heft 12/2025)",
      "Das Putzen kann dauern: Manche Maschinen sind laut Stiftung Warentest mühsam zu reinigen (Heft 12/2025). Knethaken und Besen der Bosch-Modelle hier dürfen laut Hersteller in die Spülmaschine"
    ],
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 150 €",
        name: "Bosch Serie 2 (MUMS2EW00)", preis: 105,
        punkte: [
          "Mit Planetenrührwerk: Haken und Besen drehen sich und wandern dabei durch die ganze Schüssel",
          "Edelstahlschüssel mit 3,8 Litern, laut Hersteller für bis zu 2,4 Kilo Rührteig oder 1,7 Kilo Hefeteig",
          "Knethaken, Schlag- und Rührbesen sind dabei und dürfen laut Hersteller in die Spülmaschine"
        ],
        fuer: "Für dich, wenn du vor allem Kuchen, Pizza- und Brotteig machst und wenig ausgeben willst.",
        hinweis: "Für sie gibt es keinen aktuellen Labortest. Mixer und Gemüseschneider sind nicht dabei, die kannst du bei Bedarf dazukaufen.",
        link: amazon("bosch serie 2 mums2ew00")
      },
      {
        stufe: "Mittelklasse", spanne: "150 bis 350 €",
        name: "Bosch Serie 4 (MUM58W20)", preis: 224, empfohlen: true,
        punkte: [
          "Bei Stiftung Warentest gut (Note 2,5) und Preis-Leistungs-Sieger (Heft 12/2025)",
          "Edelstahlschüssel mit 3,9 Litern, laut Hersteller für bis zu 2,7 Kilo Rührteig oder 1,9 Kilo Hefeteig",
          "Mit Durchlaufschnitzler und 3 Scheiben: Sie raspelt und schneidet Gemüse",
          "Mit Mixaufsatz (1,25 Liter)"
        ],
        fuer: "Für die meisten. Mein Tipp, denn sie war im Test fast so gut wie die Testsiegerin, kostet deutlich weniger und hat Gemüseschneider und Mixer schon dabei.",
        hinweis: "Eine Waage und Programme hat sie nicht. Zum Zerkleinern, etwa von Nüssen oder Kräutern, brauchst du einen Zerkleinerer-Aufsatz, den du dazukaufst.",
        link: amazon("bosch serie 4 mum58w20")
      },
      {
        stufe: "Oberklasse", spanne: "ab 350 €",
        name: "Bosch Serie 6 (MUMS6ZS13D)", preis: 499,
        punkte: [
          "Testsiegerin bei Stiftung Warentest unter 10 Küchenmaschinen ohne Kochfunktion (gut, Note 2,4, Heft 12/2025)",
          "Große Schüssel mit 5,5 Litern, laut Hersteller für bis zu 3,5 Kilo Rührteig oder 2,5 Kilo Hefeteig",
          "Mit eingebauter Waage, Timer und Automatikprogrammen",
          "Mit Durchlaufschnitzler und Scheiben für Gemüse"
        ],
        fuer: "Für dich, wenn du oft und in großen Mengen backst und dir Waage und Programme wichtig sind.",
        hinweis: "Mixer und Zerkleinerer sind nicht dabei, die musst du dazukaufen. Mit knapp 8 Kilo ist sie schwer. Für die meisten langt die Mittelklasse völlig aus.",
        link: amazon("bosch serie 6 mums6zs13d")
      }
    ],
    fragen: [
      { f: "Reicht nicht ein Handmixer?", a: "Für Rührteig und Sahne ab und zu reicht er. Hefeteig knetest du von Hand aber mindestens 8 Minuten, so raten es REWE und das Landratsamt Göppingen. Die Maschine knetet ihn allein, und du hast die Hände frei. Backst du aber nur ein paarmal im Jahr, spar dir ehrlicherweise das Geld und nimm den Handmixer." },
      { f: "Warum ist die KitchenAid nicht mein Tipp?", a: "Die KitchenAid Artisan war bei Stiftung Warentest nur befriedigend (Note 2,7, Heft 12/2025). Sahne und Rührteig machte sie gut, und im Dauertest hielt sie sehr gut durch. Pürieren oder zerkleinern kann sie aber nur mit Zubehör, und sie wiegt gut 10 Kilo. Außerdem kannst du dir am Scharnier des Kopfteils die Finger quetschen. Gefällt sie dir und backst du vor allem Kuchen, kannst du sie trotzdem nehmen." },
      { f: "Wie viel Teig schafft sie?", a: "Laut Bosch knetet die Serie 2 bis zu 1,7 Kilo Hefeteig, die Serie 4 bis zu 1,9 und die Serie 6 bis zu 2,5 Kilo. Rührteig geht jeweils mehr: 2,4, 2,7 und 3,5 Kilo. Für einen Kuchen oder ein Brot reicht also schon die kleinste." },
      { f: "Kann sie auch Gemüse schneiden?", a: "Ja, mit einem Durchlaufschnitzler. Er raspelt Gemüse oder schneidet es in Scheiben, zum Beispiel Karotten, Gurken oder Kartoffeln. Bei der Serie 4 und der Serie 6 ist er dabei, bei der Serie 2 nicht. Für Nüsse oder Kräuter brauchst du bei allen einen eigenen Zerkleinerer-Aufsatz." },
      { f: "Was kann eine Küchenmaschine mit Kochfunktion mehr?", a: "Sie heizt beim Rühren, darin kochst du Suppen, Soßen oder Risotto. Zum Backen reicht die Maschine hier, und ihre Schüssel ist größer: 3,8 bis 5,5 Liter statt etwa 2 bis 3 Liter nutzbar. Wenn du auch kochen willst, schau dir die Seite „Küchenmaschine mit Kochfunktion“ an." },
      { f: "Wie viel Zeit spart sie wirklich?", a: "Ehrlich gesagt hat das kein Test gemessen. Der Teig ist mit der Maschine nur wenig schneller fertig: Von Hand knetest du ihn mindestens 8 Minuten, mit der Maschine mindestens 5. Der große Unterschied ist, dass du nicht dabei sein musst. Wie viel das bei dir ausmacht, zeigt dir der Rechner." }
    ],
    rechner: "kneten",
    video: "kuechenmaschine"
  },
  {
    id: "wassersprudler",
    name: "Wassersprudler",
    kategorie: "Küche",
    symbol: "🫧",
    bild: "",
    kurz: "Ein Gerät, das Leitungswasser in Sprudelwasser verwandelt. Du kennst es vielleicht als SodaStream.",
    warum: "Leitungswasser in die Flasche, ein paar Mal drücken, und es sprudelt. Du schleppst keine Sixpacks mehr vom Auto in die Wohnung und bringst kein Leergut mehr zum Automaten. Ein Gaszylinder reicht dabei für etwa 40 bis 60 Liter.",
    statt: "Statt Wasserkästen schleppen",
    nutzen: "Sprudel aus dem Wasserhahn. Nie mehr Kästen tragen.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Du trinkst viel Sprudelwasser und schleppst dafür Sixpacks oder Kästen",
      "Du wohnst ohne Aufzug oder kaufst ohne Auto ein",
      "Du willst weniger Plastikflaschen und weniger Leergut"
    ],
    nachteile: [
      "Kaufst du bisher günstiges Wasser vom Discounter, sparst du kaum Geld. Richtig lohnt es sich gegenüber Markenwasser",
      "Zeit sparst du kaum, denn statt zu schleppen, sprudelst du jede Flasche selbst. Dafür sparst du dir die Mühe",
      "Leere Gaszylinder musst du regelmäßig tauschen, etwa alle 40 bis 60 Liter",
      "Kunststoffflaschen gehören meist nicht in die Spülmaschine und müssen bis zum aufgedruckten Datum ersetzt werden"
    ],
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 80 €",
        name: "Mysoda Woody", preis: 65,
        punkte: [
          "Bei Stiftung Warentest Preis-Leistungs-Sieger (gut, Note 2,3, Heft 7/2025)",
          "Ein Gaszylinder ist schon dabei. Er reichte im Test für rund 48 Liter, so viel wie bei keinem anderen guten Gerät",
          "Nimmt Schraubzylinder vieler Marken",
          "Gehäuse laut Hersteller aus nachwachsendem Holzverbundstoff"
        ],
        fuer: "Zum Einstieg, wenn du günstig anfangen willst und dir mittlerer Sprudel reicht.",
        hinweis: "Er sprudelt etwas schwächer als die teureren Geräte, im Test nur befriedigend. Die Kunststoffflasche gehört nicht in die Spülmaschine. Mysoda selbst tauscht in Deutschland keine Zylinder, du nimmst dann einen Schraubzylinder eines anderen Anbieters. Frag vorher im Laden: Manche tauschen nur ihre eigene Marke.",
        link: amazon("mysoda woody wassersprudler")
      },
      {
        stufe: "Mittelklasse", spanne: "80 bis 120 €",
        name: "SodaStream Crystal 3.0", preis: 100, empfohlen: true,
        punkte: [
          "Bei Stiftung Warentest gut (Note 1,8, Heft 7/2025), knapp hinter dem Testsieger",
          "Glaskaraffen statt Plastik: Sie dürfen in die Spülmaschine und altern nicht",
          "Quick-Connect-Zylinder setzt du per Hebel ein. Tauschen kannst du sie in vielen Supermärkten"
        ],
        fuer: "Für die meisten. Mein Tipp, denn die Karaffen dürfen in die Spülmaschine, und Zylinder kannst du fast überall tauschen.",
        hinweis: "Eine Karaffe fasst 0,7 Liter, sprudeln kannst du aber nur bis zur Fülllinie, also rund 0,6 Liter auf einmal. Du sprudelst also öfter. Das Gerät ist etwa 45 cm hoch. Zum Einsetzen der Karaffe fährt der obere Teil nach oben, dann sind es etwa 55 cm. Unter Hängeschränken wird es darum oft eng. Es passen nur Zylinder mit Quick-Connect-Anschluss.",
        link: amazon("sodastream crystal 3.0")
      },
      {
        stufe: "Oberklasse", spanne: "ab 120 €",
        name: "Grohe Blue Fizz", preis: 130,
        punkte: [
          "Testsieger bei Stiftung Warentest (gut, Note 1,7, Heft 7/2025)",
          "Sprudelt im Test am kräftigsten, fast wie Classic aus dem Laden",
          "Drei Stufen von sanft bis kräftig, per Drehknopf eingestellt",
          "Nimmt Schraubzylinder vieler Marken, nicht nur die von Grohe"
        ],
        fuer: "Für dich, wenn du es richtig spritzig magst.",
        hinweis: "Kräftiger Sprudel braucht mehr Gas, der Zylinder ist also schneller leer. Die Kunststoffflasche spülst du von Hand. Die Handhabung fand Stiftung Warentest nur befriedigend. Die teurere Version „Advanced“ zeigt zusätzlich an, wie voll der Zylinder noch ist.",
        link: amazon("grohe blue fizz starter set")
      }
    ],
    fragen: [
      { f: "Spare ich damit Geld?", a: "Gegenüber Markenwasser deutlich, gegenüber günstigem Sprudel vom Discounter kaum. Selbst gesprudelt zahlst du vor allem das Gas, je nach Zylinder und Gerät etwa 10 bis 20 Cent pro Liter. Sprudel vom Discounter kostet um 20 Cent pro Liter, Markenwasser oft 60 Cent und mehr. Der eigentliche Gewinn ist aber: Du schleppst nichts mehr. Wie viel es bei dir ausmacht, zeigt der Rechner." },
      { f: "Kann ich einfach Leitungswasser nehmen?", a: "Ja. In Deutschland, Österreich und der Schweiz gehört Trinkwasser zu den am strengsten kontrollierten Lebensmitteln, die Qualität ist gut bis sehr gut. Hat das Wasser länger als vier Stunden in der Leitung gestanden, zum Beispiel über Nacht, lass es laufen, bis es merklich kühler aus dem Hahn kommt. Das rät das Umweltbundesamt." },
      { f: "Glasflasche oder Kunststoff?", a: "Glas darf in die Spülmaschine, altert nicht und schmeckt neutral. Du nutzt es, solange es keine Risse oder Sprünge hat. Kunststoff ist robuster, darf aber meist nur von Hand gespült werden. Auf jeder Kunststoffflasche steht ein Datum, bis zu dem du sie ersetzen musst, weil das Material altert. So steht es bei Stiftung Warentest." },
      { f: "Wo tausche ich leere Zylinder?", a: "Du gibst den leeren Zylinder im Laden ab und zahlst nur die neue Füllung. SodaStream-Zylinder tauschen viele Supermärkte, Drogerien und Elektromärkte, in Deutschland zum Beispiel Rossmann, in Österreich zum Beispiel Interspar und MPREIS. In der Schweiz nehmen Migros, Coop, Lidl und Spar laut SRF auch leere Zylinder anderer Händler, bei beiden Anschlussarten. Für Geräte mit Schraubgewinde wie Woody und Grohe gibt es zusätzlich Tauschzylinder anderer Anbieter, oft günstiger. Aber Achtung: Manche Läden tauschen nur ihre eigene Marke." },
      { f: "Welcher Zylinder passt in mein Gerät?", a: "Es gibt zwei Anschlüsse. Schraubzylinder drehst du ein, die pinken Quick-Connect-Zylinder klickst du nur ein. Neue SodaStream-Geräte wie der Crystal 3.0 brauchen Quick Connect. Woody und Grohe Blue Fizz nehmen Schraubzylinder, auch von anderen Marken, aber keine Quick-Connect-Zylinder. Schau beim Kauf auf die Packung." },
      { f: "Wie lange reicht ein Zylinder?", a: "Im Test von Stiftung Warentest kamen die Geräte mit einem Zylinder auf 37 bis 61 Liter. Wie viel es bei dir sind, hängt vom Gerät ab und davon, wie kräftig du sprudelst: Je mehr Sprudel, desto schneller ist der Zylinder leer." },
      { f: "Wie halte ich alles sauber?", a: "Reinige die Düse regelmäßig, sonst können sich dort schleimbildende Bakterien ansiedeln. Stiftung Warentest rät außerdem, das Sprudelwasser zum Trinken in ein Glas oder eine Karaffe umzufüllen, statt aus der Sprudelflasche zu trinken. Das Gerät selbst wischst du nur feucht ab, es gehört nicht in die Spülmaschine." },
      { f: "Warum ist der Aarke nicht dabei?", a: "Der Aarke Carbonator 3 aus Edelstahl sieht schick aus und war bei Stiftung Warentest auch gut (Heft 7/2025). Er schnitt aber schlechter ab als die drei Geräte hier und kostet deutlich mehr." }
    ],
    profitipp: {
      titel: "Kalt sprudelt besser",
      text: "Kaltes Wasser nimmt die Kohlensäure deutlich besser auf. Stell die gefüllte Flasche vor dem Sprudeln eine Weile in den Kühlschrank, dann prickelt es stärker."
    },
    rechner: "sprudler",
    video: "wassersprudler"
  },
  {
    id: "mini-geschirrspueler",
    name: "Mini-Geschirrspüler",
    kategorie: "Küche",
    symbol: "🍽️",
    bild: "",
    kurz: "Eine kleine Spülmaschine für die Arbeitsplatte. Einen Platz in der Küchenzeile brauchst du dafür nicht.",
    warum: "Geschirr rein, Knopf drücken, und du machst etwas anderes. Der tägliche Abwasch von Hand fällt weg, nur große Töpfe und Pfannen spülst du weiter selbst. Das passt vor allem in kleine Küchen und Mietwohnungen, in denen keine normale Spülmaschine Platz hat.",
    statt: "Statt Abwasch von Hand",
    nutzen: "Spült für dich, auch ohne Platz für eine große Spülmaschine.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "In deiner Küche ist kein Platz für eine normale Spülmaschine",
      "Du wohnst allein oder zu zweit",
      "Du spülst fast jeden Tag von Hand und willst die Zeit lieber anders nutzen"
    ],
    nachteile: [
      "Große Töpfe, Pfannen und Bleche passen meist nicht hinein, die spülst du weiter von Hand",
      "Sie braucht Platz auf der Arbeitsplatte: Die Geräte hier sind 42 bis 55 Zentimeter breit und 44 bis 50 Zentimeter tief",
      "Kleine Spülmaschinen schneiden in Tests meist schwächer ab als große und brauchen pro Teller mehr Wasser und Strom. Unabhängige Tests der Geräte hier gibt es nicht"
    ],
    gruppen: [
      { name: "Mit Wasseranschluss", text: "Sie hängt per Schlauch an einem Wasseranschluss, meist an einem Ventil unter der Spüle. Das Abwasser läuft über einen zweiten Schlauch in den Abfluss. Dafür passen sechs Gedecke hinein, genug für ein bis zwei Personen." },
      { name: "Mit Wassertank", text: "Du brauchst keinen Anschluss: Vor jedem Spülen füllst du den Fünf-Liter-Tank mit Wasser, das Abwasser läuft per Schlauch ins Spülbecken. Dafür ist sie kleiner und lauter. Es passen drei Gedecke hinein, das reicht vor allem für eine Person." }
    ],
    modelle: [
      {
        gruppe: "Mit Wasseranschluss",
        stufe: "Günstig", spanne: "bis 300 €",
        name: "Bomann TSG 7405", preis: 255, preisText: "ca. 250 bis 260 €", empfohlen: true,
        punkte: [
          "Sechs Gedecke und fünf Programme, darunter ein Schnellprogramm",
          "Laut Hersteller Energieklasse D, 6,5 Liter Wasser pro Spülgang und 47 Dezibel. Damit ist er pro Teller sparsamer und deutlich leiser als die Geräte mit Tank",
          "Die Tür geht am Ende selbstständig auf, so trocknet das Geschirr besser",
          "Auf Wunsch startet er 2, 4 oder 6 Stunden später"
        ],
        fuer: "Mein Tipp, wenn du einen Wasseranschluss frei hast: Es passen sechs Gedecke hinein, und Wasser einfüllen musst du nie.",
        hinweis: "Unabhängige Tests gibt es für ihn nicht, die Werte stammen vom Hersteller. Einen Aquastop hat er nicht, nur einen Überlaufschutz. Es gibt ihn in Weiß und in Schwarz.",
        link: amazon("bomann tsg 7405")
      },
      {
        gruppe: "Mit Wassertank",
        stufe: "Günstig", spanne: "bis 300 €",
        name: "Bomann TSG 5702", preis: 239, preisText: "ca. 200 bis 300 €", empfohlen: true,
        punkte: [
          "Fünf-Liter-Tank: Du brauchst keinen Wasseranschluss, kannst ihn später aber an einen anschließen, die Schläuche liegen bei",
          "Laut Hersteller das sparsamste Tankgerät, das ich gefunden habe: Energieklasse C und 4,2 Liter Wasser pro Spülgang",
          "Drei Gedecke, nur 43 Zentimeter breit und 44 tief"
        ],
        fuer: "Für dich, wenn du keinen Wasseranschluss frei hast oder nichts anschließen willst.",
        hinweis: "Mit 58 Dezibel ist er deutlich lauter als die Geräte mit Anschluss. Unabhängige Tests gibt es nicht, die Werte stammen vom Hersteller. Leg den Ablaufschlauch vor jedem Spülen sicher ins Spülbecken, sonst läuft das Wasser auf die Arbeitsplatte.",
        link: amazon("bomann tsg 5702"),
        alternativen: [
          { name: "Midea Mini-Tischgeschirrspüler MDWMT201DW", preis: 250, text: "Laut Midea ebenfalls drei Gedecke und ein Fünf-Liter-Tank, dazu eine App. Er braucht etwas mehr Wasser (5 statt 4,2 Liter pro Spülgang).", link: amazon("midea mini tischgeschirrspüler wassertank") }
        ]
      }
    ],
    fragen: [
      { f: "Mit Wasseranschluss oder mit Tank: Was passt zu mir?", a: "Hast du unter der Spüle einen freien Anschluss, nimm ein Gerät mit Anschluss. Dann passen sechs Gedecke hinein, und du musst nie Wasser einfüllen. Gibt es keinen Anschluss oder willst du nichts anschließen, nimm ein Gerät mit Tank. Es ist kleiner und lauter, und du füllst vor jedem Spülen Wasser ein. Dafür steht es überall, wo eine Steckdose ist und der Ablaufschlauch bis ins Spülbecken reicht." },
      { f: "Wie schließe ich ein Gerät mit Wasseranschluss an?", a: "Der Zulaufschlauch kommt an einen Kaltwasseranschluss mit 3/4-Zoll-Gewinde, meist ein Ventil unter der Spüle. Ist es schon belegt, zum Beispiel von einer Waschmaschine, hilft ein Doppelventil. Den Ablaufschlauch schließt du am Abfluss unter der Spüle an, dafür gibt es Zwischenstücke mit Anschluss. Die Schläuche liegen bei, bei den Geräten hier sind sie etwa 1,5 Meter lang. Fehlt dir ein passender Anschluss, ruf einen Installateur." },
      { f: "Passen Töpfe und große Teller hinein?", a: "Große Töpfe, Pfannen und Bleche meist nicht, die spülst du weiter von Hand. Miss vor dem Kauf deinen größten Teller und vergleiche ihn mit der Anleitung: In die kleinen Geräte mit Tank passen große Essteller nicht immer." },
      { f: "Spart sie Wasser und Strom gegenüber dem Spülen von Hand?", a: "Gegenüber dem Schnitt ja, vor allem beim Wasser. In einer Studie der Universität Bonn brauchten die Teilnehmer für zwölf Gedecke von Hand im Schnitt 103 Liter Wasser und 2,5 kWh Energie, vor allem fürs heiße Wasser. Die Geräte hier brauchen im Eco-Programm laut Hersteller umgerechnet 13 bis 20 Liter und 1,0 bis 1,3 kWh für zwölf Gedecke. Wer sehr sparsam von Hand spült, braucht aber weniger. Am sparsamsten ist eine große, volle Spülmaschine: Für zwölf Gedecke braucht sie laut Datenblatt nur rund 8 Liter und 0,5 kWh." },
      { f: "Was muss ich bei einem Gerät mit Tank beachten?", a: "Füll den Tank vor jedem Spülen, am einfachsten mit einer Kanne oder einem Messbecher. Leg den Ablaufschlauch ins Spülbecken und sichere ihn, damit er nicht herausrutscht. Sonst läuft das Abwasser auf die Arbeitsplatte oder den Boden. Viele Tankgeräte kannst du später trotzdem an einen Wasseranschluss hängen, beim Bomann TSG 5702 liegen die Schläuche dafür bei." },
      { f: "Warum gibt es hier keine Testnoten?", a: "Weil es kaum Tests gibt. Stiftung Warentest hat in den letzten Jahren keine Tischgeschirrspüler getestet, in den aktuellen Tests stehen nur große Geräte. Auch sonst habe ich für die Geräte hier keine unabhängigen Tests gefunden. Darum vergleiche ich für dich die Angaben der Hersteller, also Energieklasse, Wasser, Lautstärke und Größe, und sage dir ehrlich, wo kleine Spülmaschinen schwächeln." },
      { f: "Und in der Schweiz?", a: "Die Geräte hier sind für Deutschland gemacht und haben einen deutschen Stecker. Der passt nicht in Schweizer Steckdosen. Ein passendes Angebot für die Schweiz habe ich darum gerade nicht, ich suche aber danach." }
    ],
    profitipp: {
      titel: "So spült sie sauber und sparsam",
      text: "Mit ein paar einfachen Handgriffen holst du viel heraus:",
      liste: [
        "Kratz nur grobe Reste in den Müll und spül nicht vor. Vorspülen unter fließendem Wasser kostet laut einer Studie der Universität Bonn viel Wasser und Energie",
        "Starte sie erst, wenn sie voll ist. In derselben Studie liefen viele Spülmaschinen nur halb voll",
        "Nimm meist das Eco-Programm. Es dauert am längsten, ist aber auf wenig Strom und Wasser ausgelegt",
        "Beim Gerät mit Tank: Prüf vor dem Start, ob der Ablaufschlauch sicher im Spülbecken liegt"
      ]
    },
    rechner: "geschirrspueler",
    video: "mini-geschirrspueler",
    preisstand: "Oktober 2026"
  },
  {
    id: "reinigungsbuerste",
    name: "Elektrische Reinigungsbürste",
    kategorie: "Haushalt",
    symbol: "🧽",
    bild: "",
    kurz: "Eine kabellose Akku-Bürste mit rotierendem Kopf und langem Stiel für Dusche, Fliesen, Badewanne und Fugen.",
    warum: "Wir leben einfach nicht mehr in einer Zeit, in der man das Bad mit dem Scheuerschwamm putzt. Die Bürste dreht sich selbstständig, du führst sie nur mit leichtem Druck. Kein Knien in der Dusche, kein Schrubben, bis der Arm wehtut. Mit anderen Aufsätzen putzt sie auch Backofen, Spüle und Fensterrahmen.",
    statt: "Statt Schrubben von Hand",
    nutzen: "Schrubbt für dich. Du stehst dabei aufrecht.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 5, nachher: 2 },
    fuer: [
      "Putzen geht dir auf Rücken oder Knie",
      "Fugen und Duschkabine sind dir ein Graus",
      "Du willst mit dem Bad schneller fertig sein und mehr Zeit für Schöneres haben"
    ],
    nachteile: [
      "Laden dauert meist rund drei Stunden, dafür reicht eine Ladung dann für ein ganzes Bad",
      "Verschmutzte Fugen und hartnäckige Flecken schafft sie nur mit einem kräftigen Reiniger",
      "Drückst du zu fest, wird sie langsamer oder schaltet ab"
    ],
    modelle: [
      {
        stufe: "Mittelklasse", spanne: "25 bis 40 €",
        name: "Kedoyoy 8-in-1 Akku-Reinigungsbürste", preis: 34, empfohlen: true,
        punkte: [
          "Teleskopstiel stufenlos von 30 bis 137 cm: Du putzt Dusche und Wanne im Stehen",
          "Akku hält laut Hersteller bis zu 90 Minuten, geladen wird per USB-C",
          "8 Aufsätze, auch für Fugen und Ecken"
        ],
        fuer: "Für die meisten Bäder. Mein Tipp, denn mit dem langen Stiel schaffst du auch Wanne und Duschboden im Stehen.",
        link: amazon("kedoyoy reinigungsbürste")
      },
      {
        stufe: "Oberklasse", spanne: "ab 40 €",
        name: "HOTO Electric Spin Scrubber", preis: 80,
        punkte: [
          "Bei Good Housekeeping (USA) die beste von acht Bürsten im Test (Februar 2026)",
          "Der Akku lief dort fast 2 Stunden 20 Minuten, eine der längsten Zeiten im Test",
          "Teleskopstange laut Hersteller von 94 bis 130 cm: Du putzt Wanne und Duschboden im Stehen",
          "6 Aufsätze, auch Schwamm und Scheuerpad"
        ],
        fuer: "Für dich, wenn du ein großes Bad oder mehrere Bäder putzt und der Akku lange halten soll.",
        hinweis: "Sie kostet deutlich mehr als die Mittelklasse. Laut Consumer Reports putzen die meisten Bürsten etwa gleich gut, der größte Unterschied ist der Akku.",
        link: amazon("hoto electric spin scrubber")
      }
    ],
    fragen: [
      { f: "Reicht ein Akku für das ganze Bad?", a: "Meistens ja. Viele Modelle halten laut Hersteller 60 bis 90 Minuten durch, und Tester kamen mit einer Ladung gut durchs Bad. Geladen wird per USB-Kabel wie beim Handy, das dauert meist rund drei Stunden." },
      { f: "Darf sie nass werden?", a: "Spritzwasser verträgt sie. Unter Wasser halten solltest du das Gerät aber nicht. Die Aufsätze kannst du abnehmen und abspülen." },
      { f: "Welcher Aufsatz ist wofür?", a: "Rundbürste für Fliesen und Wanne, Eckbürste für Fugen und Ecken, Schwamm für Waschbecken und Armaturen, flache Bürste für den Boden." },
      { f: "Brauche ich trotzdem Putzmittel?", a: "Ja. Die Bürste nimmt dir das Schrubben ab, den Reiniger aber nicht. Lass ihn ein paar Minuten einwirken und bürste dann. Für verschmutzte Fugen brauchst du einen kräftigen Reiniger." },
      { f: "Kann sie Oberflächen zerkratzen?", a: "Ja, das kann passieren. Harte Borsten und Scheuerpads können Acryl, Glaskeramik, Edelstahl oder Lack zerkratzen. Nimm dort einen weichen Schwamm oder ein Mikrofaserpad und probier es erst an einer unauffälligen Stelle." }
    ],
    rechner: "buerste",
    video: "buerste"
  },
  {
    id: "stretchdeckel",
    name: "Silikon-Stretchdeckel",
    kategorie: "Küche",
    symbol: "🥣",
    bild: "",
    kurz: "Dehnbare Deckel für Schüsseln, Dosen, Gläser und sogar die halbe Zwiebel.",
    warum: "Sie ersetzen Frischhalte- und Alufolie, wenn du Schüsseln und Reste abdeckst. Du ziehst den Deckel einfach über den Rand, er hält dicht, und danach kommt er in die Spülmaschine statt in den Müll.",
    statt: "Statt Frischhalte- und Alufolie",
    nutzen: "Drüberziehen, dicht. Nie wieder Folie, die klebt.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Du hast oft angeschnittenes Obst, Gemüse oder Reste",
      "Du willst weniger Plastik wegwerfen",
      "Frischhaltefolie bringt dich regelmäßig zur Verzweiflung"
    ],
    nachteile: [
      "Auf sehr große Schüsseln passt keiner aus dem Set",
      "Auf einem nassen Rand hält er schlechter",
      "Die Größe muss passen: Zu groß rutscht er ab, zu klein kann er beim Dehnen einreißen"
    ],
    modelle: [
      {
        stufe: "Günstig", spanne: "unter 10 €",
        name: "Stretchdeckel, 12 Stück rund", preis: 9,
        punkte: [
          "12 runde Deckel, je zwei in sechs Größen von 6,5 bis 21 cm",
          "Für Schüsseln, Gläser und halbes Obst"
        ],
        fuer: "Zum Ausprobieren, und wenn du vor allem runde Schüsseln und Gläser abdeckst.",
        link: amazon("silikon stretchdeckel 12 stück rund")
      },
      {
        stufe: "Mittelklasse", spanne: "10 bis 16 €",
        name: "Stretchdeckel-Set, 12 Stück, rund und eckig", preis: 13, empfohlen: true,
        punkte: [
          "6 runde und 6 eckige Deckel in sechs Größen von etwa 6 bis 19 cm",
          "Auch für eckige Dosen",
          "Spülmaschinenfest"
        ],
        fuer: "Für die meisten Küchen. Mein Tipp, denn mit runden und eckigen Deckeln bist du für fast alles gerüstet.",
        link: amazon("silikon stretchdeckel 12 stück rund eckig")
      },
      {
        stufe: "Oberklasse", spanne: "ab 20 €",
        name: "Lékué elastische Deckel, 3er-Set", preis: 25,
        punkte: [
          "Markenware vom Küchenspezialisten Lékué",
          "Drei Deckel mit etwa 11, 15 und 20 cm, für Schüsseln bis etwa 24 cm"
        ],
        fuer: "Für dich, wenn du lieber wenige, dafür hochwertige Deckel willst.",
        hinweis: "Nur drei Größen. Für kleine Gläser brauchst du zusätzlich ein günstiges Set.",
        link: amazon("lékué elastische deckel")
      }
    ],
    fragen: [
      { f: "Halten sie wirklich dicht?", a: "Ja, wenn der Deckel ganz über den Rand gezogen und der Rand trocken ist. In Tests lief dann selbst aus einer gekippten Schüssel kein Wasser. Luftdicht wie eine Vakuumdose sind sie aber nicht, und eine Schüssel Suppe würde ich damit nicht kopfüber tragen." },
      { f: "Dürfen sie in die Mikrowelle?", a: "Die meisten ja, schau auf die Packung. Lass beim Erwärmen einen kleinen Spalt offen, damit der Dampf raus kann." },
      { f: "Welche Größe nehme ich?", a: "Der Deckel sollte etwas kleiner sein als der Rand, er dehnt sich dann darüber. Ein Set mit sechs Größen reicht von der halben Zitrone bis zur Schüssel mit gut 20 cm Durchmesser. Für größere Schüsseln brauchst du ein Set mit extra großem Deckel." },
      { f: "Wie lange halten sie?", a: "Das hängt von der Qualität ab. Bei America's Test Kitchen überstanden alle Deckel zehn Spülgänge ohne Schaden, bei anderen Testern rissen manche schon beim Aufziehen. Dehn sie nicht stärker als nötig und halte sie von Messern und scharfen Kanten fern." },
      { f: "Nehmen sie Gerüche an?", a: "Ja, nach Zwiebel, Knoblauch oder Senf riechen sie oft eine Weile. Mit jedem Spülgang wird es weniger. Hält sich der Geruch, reib sie mit etwas Natron und einem feuchten Schwamm ab." }
    ],
    rechner: "deckel",
    video: "deckel"
  },
  {
    id: "kindle",
    name: "E-Reader",
    kategorie: "Freizeit",
    symbol: "📖",
    bild: "",
    kurz: "Ein Lesegerät mit einem Bildschirm, der fast wie Papier aussieht. Und darauf passen tausende Bücher.",
    warum: "E-Books sind meist günstiger als gedruckte Bücher, und viele Klassiker gibt es sogar kostenlos. Ein neues Buch ist in Sekunden da, die Schrift kannst du größer stellen, und der Akku hält wochenlang.",
    statt: "Statt gedruckter Bücher",
    nutzen: "Tausende Bücher in einer Hand, jedes in Sekunden da.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Du liest viel, auch unterwegs oder im Urlaub",
      "Dein Bücherregal ist längst voll",
      "Du liest abends im Bett, ohne die Lampe anzumachen"
    ],
    nachteile: [
      "Bilder und Comics sehen in Graustufen nicht gut aus. Geräte mit Farbbildschirm kosten mehr, und ihre Farben sind blasser als auf einem Tablet",
      "E-Books kannst du nicht an Freunde verleihen oder weiterverkaufen",
      "Auf dem Kindle laufen keine Bücher aus der Stadtbücherei (Onleihe). Dafür brauchst du ein anderes Gerät, zum Beispiel von PocketBook"
    ],
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 170 €",
        name: "Kindle (2026)", preis: 155,
        punkte: [
          "6 Zoll und nur 140 g, leichter als ein Taschenbuch",
          "Akku hält laut Amazon bis zu 6 Wochen",
          "Platz für tausende Bücher"
        ],
        fuer: "Für dich, wenn du vor allem Romane liest und bei Amazon kaufst.",
        hinweis: "Nicht wasserdicht und ohne warmes Licht.",
        link: amazon("kindle 2026"),
        alternativen: [
          { name: "PocketBook Verse Pro", preis: 160, text: "Für fast denselben Preis mit warmem Licht und wasserdicht. Bücher aus der Bücherei leihst du direkt am Gerät.", link: amazon("pocketbook verse pro") }
        ]
      },
      {
        stufe: "Mittelklasse", spanne: "170 bis 260 €",
        name: "Kindle Paperwhite (2026)", preis: 210, empfohlen: true,
        punkte: [
          "Größerer Bildschirm mit 7 Zoll",
          "Warmes Licht für abends im Bett",
          "Wasserdicht: übersteht auch einen Sturz in die Badewanne",
          "Akku hält laut Amazon bis zu 12 Wochen"
        ],
        fuer: "Für alle, die viel lesen. Mein Tipp, denn er hat warmes Licht und ist wasserdicht.",
        hinweis: "Ganz neu: Amazon liefert ihn ab 11. November 2026 aus.",
        link: amazon("kindle paperwhite 2026"),
        alternativen: [
          { name: "Kobo Clara BW", preis: 170, text: "Etwas kleiner (6 Zoll), mit warmem Licht und wasserdicht. Die Bücher kaufst du bei Kobo statt bei Amazon.", link: amazon("kobo clara bw") }
        ]
      },
      {
        stufe: "Oberklasse", spanne: "ab 260 €",
        name: "Kindle Colorsoft (2026)", preis: 300,
        punkte: [
          "Farbbildschirm für Comics, Kinderbücher und Bilder",
          "7 Zoll, Akku hält laut Amazon bis zu 8 Wochen",
          "Wasserdicht, wie der Paperwhite"
        ],
        fuer: "Für Comics, Kinderbücher und alles mit Bildern.",
        hinweis: "Für reine Romane brauchst du die Farbe nicht. Amazon liefert ihn ab 11. November 2026 aus.",
        link: amazon("kindle colorsoft 2026"),
        alternativen: [
          { name: "Kobo Libra Colour", preis: 245, text: "Auch mit Farbe, dazu Tasten zum Umblättern. Notizen gehen mit einem Stift, den es extra gibt.", link: amazon("kobo libra colour") },
          { name: "PocketBook Era Color", preis: 225, text: "Farbe und Bücher aus der Bücherei direkt am Gerät.", link: amazon("pocketbook era color") }
        ]
      }
    ],
    fragen: [
      { f: "Welcher E-Reader passt zu mir?", a: "Für Romane reicht der normale Kindle völlig. Liest du viel, abends im Bett oder in der Badewanne, nimm den Paperwhite: Er hat warmes Licht und ist wasserdicht. Farbe brauchst du nur für Comics, Kinderbücher oder Bilder. Und wenn du gern bei der Stadtbücherei leihst, ist ein PocketBook die bessere Wahl." },
      { f: "Kann ich Bücher aus der Bücherei ausleihen?", a: "Mit dem Kindle leider nicht, die Onleihe der deutschen Stadtbibliotheken funktioniert dort nicht. Mit PocketBook und Tolino leihst du direkt am Gerät, mit Kobo über den Computer." },
      { f: "Kann ich eigene Dateien und PDFs lesen?", a: "Ja. Beim Kindle schickst du Dateien mit „Send to Kindle“ per App oder E-Mail aufs Gerät, auch E-Books ohne Kopierschutz aus anderen Shops. Bei Kobo und PocketBook geht das zum Beispiel per Kabel vom Computer." },
      { f: "Brauche ich Kindle Unlimited?", a: "Nein. Das ist ein freiwilliges Abo mit einer großen Auswahl an Büchern. Es lohnt sich nur, wenn du viel liest und dir die Auswahl gefällt. Teste es am besten vorher, oft gibt es einen kostenlosen Probemonat." },
      { f: "Ist auf dem Gerät Werbung?", a: "Beim Kindle kann das sein. Achte beim Kauf darauf, ob „mit Werbung“ dabeisteht. Diese Version zeigt Angebote auf dem Sperrbildschirm und auf der Startseite und ist etwas günstiger." },
      { f: "Wie lange hält der Akku?", a: "Laut Amazon hält ein Kindle je nach Modell 6 bis 12 Wochen, wenn du etwa eine halbe Stunde am Tag liest und das WLAN aus ist. Mit viel Licht und WLAN ist der Akku früher leer." }
    ],
    rechner: "kindle",
    video: "kindle"
  },
  {
    id: "zahnbuerste",
    name: "Elektrische Zahnbürste",
    kategorie: "Pflege",
    symbol: "🪥",
    bild: "",
    kurz: "Eine Zahnbürste mit Akku, deren Kopf sich selbstständig bewegt. Du führst sie nur von Zahn zu Zahn, und bei vielen Modellen sagt dir ein Timer, wann zwei Minuten um sind.",
    warum: "Selbst schrubben musst du nicht mehr: Die Bürste macht die Bewegung, und du hältst sie nur an die Zähne. Gute Modelle merken sogar, wenn du zu fest drückst. Und laut einer großen Auswertung von 51 Studien hast du nach mehr als drei Monaten im Schnitt etwa ein Fünftel weniger Zahnbelag als mit einer Handzahnbürste.",
    statt: "Statt Handzahnbürste",
    nutzen: "Putzt gründlicher, du führst sie nur.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Du willst sauberere Zähne: Elektrisch bleibt im Schnitt rund ein Fünftel weniger Belag als mit der Handzahnbürste",
      "Du drückst beim Putzen eher zu fest",
      "Du willst wissen, wann zwei Minuten um sind"
    ],
    nachteile: [
      "Ersatz-Bürstenköpfe kosten extra. Du wechselst sie etwa alle drei Monate",
      "Sie muss ab und zu an die Ladestation, je nach Modell alle paar Wochen"
    ],
    vergleich: {
      vorherTitel: "Handzahnbürste",
      vorher: [
        "Du schrubbst selbst hin und her",
        "Ob du zu fest drückst, merkst du kaum",
        "Ob zwei Minuten um sind, weißt du nicht"
      ],
      nachher: [
        "Der Kopf bewegt sich selbstständig, du führst ihn nur",
        "Viele Modelle warnen dich, wenn du zu fest drückst",
        "Bei vielen Modellen sagt dir ein Timer, wann du fertig bist"
      ]
    },
    profitipp: {
      titel: "So putzt du richtig",
      text: "Mit einer elektrischen Zahnbürste putzt du anders als von Hand:",
      liste: [
        "Erst die Bürste in den Mund, dann einschalten, sonst spritzt es",
        "Den Kopf leicht an die Zähne halten und langsam von Zahn zu Zahn führen, nicht schrubben",
        "Wenig Druck, die Bürste macht die Arbeit für dich",
        "Nach zwei Minuten fertig, den Kopf kurz ausspülen"
      ]
    },
    modelle: [
      {
        stufe: "Günstig", spanne: "bis 50 €",
        name: "Philips Sonicare 3100", preis: 40, preisText: "ca. 40 bis 50 €",
        punkte: [
          "Die Vorgängerversion war bei Stiftung Warentest gut (Note 2,2, Heft 12/2024)",
          "Drucksensor: Sie warnt dich, wenn du zu fest drückst",
          "Timer mit einem Zeichen alle 30 Sekunden"
        ],
        fuer: "Für dich, wenn du günstig umsteigen willst und dir ein Putzprogramm reicht.",
        hinweis: "Sie hat nur ein Putzprogramm, und der Akku hält laut Hersteller bis zu 14 Tage.",
        link: amazon("philips sonicare 3100")
      },
      {
        stufe: "Mittelklasse", spanne: "50 bis 120 €",
        name: "Laifen Wave Pro", preis: 100, preisText: "ca. 100 €", empfohlen: true,
        punkte: [
          "Der Kopf schwingt hin und her und vibriert gleichzeitig, laut Hersteller bis 60° und bis zu 66.000-mal pro Minute",
          "Drucksensor: Drückst du zu fest, gibt sie dir ein Signal",
          "Zwei Putzmodi mit je drei Stufen. In der App kannst du sie feiner einstellen, du brauchst sie aber nicht",
          "Akku hält laut Hersteller bis zu 70 Tage"
        ],
        fuer: "Für die meisten. Mein Tipp, denn ich nutze sie selbst.",
        hinweis: "Bei Stiftung Warentest war sie noch nicht im Test, das Vorgängermodell Laifen Wave war dort gut (Note 2,2, Heft 12/2024). Einen USB-C-Anschluss am Griff hat sie nicht, sie lädt nur kabellos auf ihrer Ladestation.",
        link: amazon("laifen wave pro"),
        alternativen: [
          { name: "Philips Sonicare 5500", preis: 80, text: "Aktueller Testsieger bei Stiftung Warentest (gut, Note 1,7, Heft 12/2025). Sie warnt dich, wenn du zu fest drückst, und hat zwei Putzmodi.", link: amazon("philips sonicare 5500") },
          { name: "Oral-B iO Series 3N", preis: 70, text: "War Testsieger bei Stiftung Warentest (gut, Note 1,9, Heft 12/2024). Ein Leuchtring zeigt dir, wenn du zu fest drückst. Drei Putzmodi, ohne App.", link: amazon("oral-b io series 3n") },
          { name: "Laifen Wave", preis: 80, text: "Das günstigere Vorgängermodell, bei Stiftung Warentest gut (Note 2,2, Heft 12/2024). Es hat aber keinen Drucksensor.", link: amazon("laifen wave") }
        ]
      },
      {
        stufe: "Oberklasse", spanne: "ab 150 €",
        name: "Philips Sonicare Prestige 9900", preis: 200, preisText: "ca. 200 €",
        punkte: [
          "War Testsieger bei Stiftung Warentest (gut, Note 1,8, Heft 12/2021)",
          "Passt die Stärke beim Putzen selbst an deinen Druck an (SenseIQ)",
          "Mit App"
        ],
        fuer: "Für dich, wenn du das Beste willst.",
        hinweis: "Der Test ist schon von 2021. Für die meisten langt die Mittelklasse völlig aus.",
        alternativen: [
          { name: "Philips Sonicare 7100", preis: 140, text: "Bei Stiftung Warentest gut (Note 1,8, Heft 12/2025) und günstiger als die Prestige.", link: amazon("philips sonicare 7100") }
        ],
        link: amazon("philips sonicare prestige 9900")
      }
    ],
    fragen: [
      { f: "Putzt eine elektrische Zahnbürste wirklich besser?", a: "Ja. Eine große Auswertung von 51 Studien (Cochrane, 2014) zeigt: Wer länger als drei Monate elektrisch putzt, hat im Schnitt 21 % weniger Zahnbelag und 11 % weniger Zahnfleischentzündung als mit einer Handzahnbürste." },
      { f: "Schallzahnbürste oder rotierender Kopf: Was ist besser?", a: "Beides putzt gut. Laut Stiftung Warentest hat keines der beiden Systeme beim Putzen klare Vorteile. Im neuesten Test (Heft 12/2025) liegt eine Schallzahnbürste vorn, die Philips Sonicare 5500 (Note 1,7). Im Test davor gewann eine Oral-B mit rundem Kopf (Note 1,9). Nimm die, die du gern benutzt." },
      { f: "Wie oft wechsle ich den Bürstenkopf?", a: "Etwa alle drei Monate, oder früher, wenn die Borsten auseinanderstehen. Manche Modelle erinnern dich daran." },
      { f: "Wie putze ich richtig?", a: "Zweimal am Tag zwei Minuten. Du hältst den Kopf leicht an die Zähne und führst ihn langsam von Zahn zu Zahn. Schrubben musst du nicht, das macht die Bürste." },
      { f: "Brauche ich die App?", a: "Nein. Bei der Laifen Wave Pro stellst du in der App ein, wie sie putzt, und siehst eine Auswertung deiner Putzzeiten. Putzen kannst du auch ganz ohne Handy." }
    ],
    video: "zahnbuerste",
    preisstand: "Oktober 2026"
  }
];
