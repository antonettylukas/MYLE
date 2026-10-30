/*
  ==========================================================
  ENGLISCHE FASSUNG VON produkte.js (für myle.life/en/)
  ==========================================================
  Gleicher Aufbau wie produkte.js: dieselben Produkte, Modelle, Preise und Links.
  Nur die Texte sind auf Englisch. Wenn sich in produkte.js etwas ändert (neues Modell,
  neuer Text), muss es hier genauso geändert werden. Was die Felder bedeuten, steht in produkte.js.
*/

// Amazon-Links: Steht in einstellungen.js schon deine Partner-ID für amazon.co.uk (partnerIdShop), führt jeder Link in den britischen Amazon-Shop: direkt zum Produkt, wenn unten in ASIN eine Produktnummer steht, sonst zur Suche.
// Bis dahin bleibt es bei derselben Suche wie auf den deutschen Seiten bei amazon.de, mit englischer Oberfläche.
// Der zweite Text bei amazon(...) ist die Suche auf Englisch für amazon.co.uk, wo die deutsche Suche nicht passt.
const AMAZON_LAND = /^[a-z0-9-]+-\d\d$/i.test(SEITE.partnerIdShop || "") && !/^DEINPARTNERTAG/i.test(SEITE.partnerIdShop) ? SEITE.amazonShop : "";
// Amazon-Produktnummern (ASIN) bei amazon.co.uk, nach dem deutschen Suchtext beim jeweiligen Link.
// Fehlt ein Produkt hier, wurde es bei amazon.co.uk nicht gefunden, dann führt der Link zur Suche.
const ASIN = {
  "philips hue starter set bridge pro e27": "B0FJYBSW14",
  "philips hue essential starter set e27": "B0FJXZJ9N7",
  "wiz a60 e27 color": "B0FLX2T1Z9",
  "philips hue white and color ambiance e27": "B0FJ8TQFGP",
  "midea portasplit": "B0D3PP64JS",
  "midea portasplit cool": "B0GXDWTFR5",
  "bosch cool 4000": "B0BXT6YV8K",
  "mysoda woody wassersprudler": "B09DGN7TJD",
  "sodastream crystal 3.0": "B0C2JKG2YH",
  "grohe blue fizz starter set": "B0CLM4JG9V",
  "silikon stretchdeckel 12 stück rund eckig": "B0875R9NYP",
  "ecovacs deebot t90 pro omni": "B0GK1RD2T7",
  "mova z60 ultra roller complete": "B0G8172MJD",
  "mova v50 ultra complete": "B0DZ2YC2VG",
  "dreame l40s pro ultra": "B0DY8V59LY",
  "roborock q10 s5+": "B0DWK6P2GH",
  "roborock q7 l5+": "B0DWMLMRWQ",
  "hisense wd5s1045bw waschtrockner": "B0BXFPSKNF",
  "philips dual basket na352": "B0D4Q8QFTH",
  "tefal dual easy fry grill ey905d": "B0CW52TT95",
  "cosori twinfry 10 l": "B0D3HQKCQ9",
  "ninja foodi max dual zone af400eu": "B09DGBJN2C",
  "ninja double stack xl sl400eu": "B0CZPJ1HFP",
  "cosori turbo tower pro smart": "B0DPQFMTWM",
  "salcar trv801w": "B0CDZPB8RZ",
  "eurotronic comet wifi": "B08H8PTDW1",
  "shelly trv heizkörperthermostat wlan": "B09RPVRQ3F",
  "aqara w600 heizkörperthermostat": "B0FM3JJSQ6",
  "bosch smart home heizkörperthermostat ii +m": "B0DHGSL6FC",
  "homematic ip evo heizkörperthermostat": "B08YDVCBY9",
  "aeg 6000 ap61cb21db": "B0DXFMMBJ9",
  "rowenta x-force flex 13.60 allergy": "B0CYCHTGKC",
  "bosch unlimited 7 bss715carp": "B0BW15D2FS",
  "panasonic sr-da152 reiskocher": "B0FJFNMLCR",
  "cosori reiskocher crc-r501": "B0BZY2HGW1",
  "yum asia bamboo reiskocher induktion": "B07WHD5P27",
  "lékué elastische deckel": "B084DRTSDK",
  "ecovacs deebot t80 omni": "B0DZ64GW9Z",
  "dreame x60 pro ultra complete": "B0H4RQ2BK9",
  "roborock saros 20": "B0G52G6B26",
  "cosori dual basket 8,5 l": "B0CHFMK8S5",
  "kobo clara bw": "B0CZXYV8GT",
  "kobo libra colour": "B0CZXX465Z",
  "pocketbook verse pro": "B0CGVXDRGP",
  "pocketbook era color": "B0D1Y883G2",
  "kindle paperwhite 2026": "B0GV5YVVCD",
  "kindle 2026": "B0G4SHPH5K",
  "kindle colorsoft 2026": "B0GV642G9D",
  "gastroback 42507 reiskocher": "B0009KA4CA"
};
const amazon = (suche, landSuche) => AMAZON_LAND
  ? (ASIN[suche]
    ? `https://${AMAZON_LAND}/dp/${ASIN[suche]}?tag=${SEITE.partnerIdShop.trim()}`
    : `https://${AMAZON_LAND}/s?k=${encodeURIComponent(landSuche || suche).replace(/%20/g, "+")}&tag=${SEITE.partnerIdShop.trim()}`)
  : `https://www.amazon.de/s?k=${encodeURIComponent(suche).replace(/%20/g, "+")}&tag=DEINPARTNERTAG-21&language=en_GB`;

const PRODUKTE = [
  {
    id: "saugroboter",
    name: "Robot vacuum",
    kurzname: "a robot vacuum",
    kategorie: "Household",
    symbol: "🤖",
    bild: "",
    kurz: "A robot that vacuums your home on its own and mops too, if you like. Afterwards it drives back to its base station, which empties it and, on mopping robots, also washes the mop roller or the mop pads.",
    warum: "The best part is something very few people know: you set a schedule in the app, and the robot cleans while you're at work. Every day you come home to a clean flat and hardly have to do anything for it. After 14 years, that's still a massive upgrade in quality of life for me.",
    statt: "Instead of a corded vacuum and a mop",
    nutzen: "Cleans while you're at work.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 5, nachher: 1 },
    fuer: [
      "You're out of the house during the day",
      "You have pets, children or lots of hard floors",
      "You'd rather spend your time on something nicer than vacuuming and mopping"
    ],
    nachteile: [
      "It can't do stairs. If you live on two floors, you carry it up",
      "It doesn't work completely without you: every few weeks you change the bag, and with a mopping robot you also top up the fresh water and empty the dirty water"
    ],
    erfahrung: {
      titel: "My experience after 14 years",
      bild: "", bildText: "Photo: you with your robot vacuum",
      text: "I've been using robot vacuums for 14 years and haven't had to vacuum or mop myself a single time since. The most important trick: set a schedule. Then it cleans while I'm at work, and every evening I come home to a clean flat."
    },
    gruppen: [
      { name: "With mop roller", text: "A roller mops the floor and is rinsed with fresh water all the time as it goes. That way it picks the dirty water straight back up and has to go back to the base station to be washed less often. On the other hand, on many models it doesn't get as close to edges and into corners." },
      { name: "With rotating mops", text: "Two round mop pads spin on the floor. On many models one of them extends sideways, so it cleans edges and corners more thoroughly. On the other hand they tend to spread dirty water around, so the robot goes back to the base station more often to wash them. On carpet it lifts the mop pads or leaves them in the base station." },
      { name: "Vacuum only", text: "The cheaper choice if mopping isn't so important to you, for example with lots of carpet. The base station empties it. It does have a simple mop pad, but for a thorough mop you still do it yourself.", ohne: "wischen" }
    ],
    modelle: [
      {
        gruppe: "With mop roller",
        stufe: "Budget", spanne: "up to €400",
        name: "ECOVACS DEEBOT T80 OMNI", preis: 349, preisText: "approx. €335 to €350",
        punkte: [
          "The base station empties it and washes the mop roller with hot water",
          "Mops thoroughly with a roller that lifts up on carpet",
          "Finds its way around by laser, and hair hardly wraps around the brush",
          "Grade 2.6 at smarthomeassistent.de, value for money grade 2.0"
        ],
        fuer: "For you if you want vacuuming and mopping, watch the price and mostly have hard floors.",
        hinweis: "It cleans corners less well because its side brush doesn't extend. The roller only lifts 10 mm, and in the test it got stuck on deep-pile carpet.",
        link: amazon("ecovacs deebot t80 omni"),
        alternativen: [
          { name: "ECOVACS DEEBOT T90 PRO OMNI", preis: 477, text: "A little pricier and better overall at smarthomeassistent.de (grade 2.3).", link: amazon("ecovacs deebot t90 pro omni") }
        ]
      },
      {
        gruppe: "With mop roller",
        stufe: "Mid-range", spanne: "€400 to €700",
        name: "MOVA Z60 Ultra Roller Complete", preis: 649, empfohlen: true,
        punkte: [
          "Very good at vacuuming and mopping in the test (grade 1.4, No. 2 at smarthomeassistent.de)",
          "Mops with a roller that is rinsed with fresh water all the time as it drives. The base station washes it with water up to 80 °C",
          "Climbs over thresholds up to 5 cm",
          "Lifts the roller on carpet and seals it so nothing gets wet"
        ],
        fuer: "For most homes, including with pets. If you ask me, this is where you get the most for your money.",
        hinweis: "The roller doesn't get right up to the skirting board: in tests a narrow strip along the wall was left when mopping.",
        link: amazon("mova z60 ultra roller complete"),
        alternativen: [
          { name: "ECOVACS DEEBOT T90S PRO OMNI", preis: 599, text: "Mops just as well at smarthomeassistent.de (grade 1.0).", link: amazon("ecovacs deebot t90s pro omni") }
        ]
      },
      {
        gruppe: "With mop roller",
        stufe: "Premium", spanne: "from €700",
        name: "Dreame Aqua20 Pro Ultra Roller X Complete", preis: 1499, preisText: "approx. €1,500",
        punkte: [
          "Test winner at smarthomeassistent.de (grade 1.3)",
          "Vacuums very powerfully and finds its way around superbly, including around obstacles",
          "Mops with a roller and loosens dried-on stains with steam, which according to the manufacturer it heats to 180 °C",
          "The base station washes the roller with 100 °C hot water. According to the maker it climbs thresholds up to 5 cm, two-step ones up to 10 cm"
        ],
        fuer: "For anyone who wants the best, above all at vacuuming and navigation.",
        hinweis: "At mopping it scores lower in the test than the MOVA Z60 (grade 2.5 instead of 1.0). If mopping matters most to you, the extra cost is hardly worth it.",
        link: amazon("dreame aqua20 pro ultra roller x complete"),
        alternativen: [
          { name: "Roborock Saros 20 Flow Complete", preis: 1299, text: "Grade 1.5 at smarthomeassistent.de, with the top grade for navigation (1.0). But it mops less well there (grade 3.4).", link: amazon("roborock saros 20 flow complete") },
          { name: "ECOVACS DEEBOT X12S OmniCyclone", preis: 999, text: "Grade 1.7 at smarthomeassistent.de, and it mops very well there (grade 1.0). The base station needs no dust bags.", link: amazon("ecovacs deebot x12s omnicyclone") }
        ]
      },
      {
        gruppe: "With rotating mops",
        stufe: "Budget", spanne: "up to €600",
        name: "MOVA V50 Ultra Complete", preis: 529, empfohlen: true,
        punkte: [
          "Best model with rotating mops in its price range at smarthomeassistent.de (grade 1.9)",
          "Mops very well in the test (grade 1.0), with warm water too",
          "The base station washes the mop pads with 80 °C hot water and dries them with hot air",
          "The mop pads and side brush extend, so they reach edges and corners"
        ],
        fuer: "For homes with lots of corners and edges, if you want thorough mopping. Only the premium models do better in the test.",
        hinweis: "It doesn't always spot obstacles: in tests it missed flat objects and now and then bumped into chair and table legs. At smarthomeassistent.de it only gets grade 2.7 for navigation.",
        link: amazon("mova v50 ultra complete"),
        alternativen: [
          { name: "Dreame L40s Pro Ultra", preis: 499, text: "A little cheaper and mops just as well at smarthomeassistent.de (grade 1.0, 2.2 overall).", link: amazon("dreame l40s pro ultra") }
        ]
      },
      {
        gruppe: "With rotating mops",
        stufe: "Premium", spanne: "from €900",
        name: "Dreame X60 Pro Ultra Complete", preis: 1499, preisText: "approx. €950 to €1,500",
        punkte: [
          "Best model with rotating mops at smarthomeassistent.de (grade 1.6 in a re-test after a firmware update)",
          "Vacuums very powerfully (grade 1.0) and mops very well (grade 1.2)",
          "According to the manufacturer it extends one mop pad up to 18 cm and handles double thresholds up to 10 cm. In tests it climbed thresholds about 4 to 5 cm high",
          "The base station washes the mop pads with 100 °C hot water"
        ],
        fuer: "For anyone who wants the best at vacuuming and mopping and has lots of corners and edges.",
        hinweis: "Now and then it makes small navigation slips.",
        link: amazon("dreame x60 pro ultra complete"),
        alternativen: [
          { name: "Roborock Saros 20", preis: 949, text: "Grade 1.8 at smarthomeassistent.de, with the top grade for navigation (1.0). Only just under 8 cm tall, so it fits under low furniture. But it mops poorly there (grade 5.1).", link: amazon("roborock saros 20") }
        ]
      },
      {
        gruppe: "Vacuum only",
        stufe: "Budget", spanne: "up to €250",
        name: "Roborock Q10 S5+", preis: 210, empfohlen: true,
        punkte: [
          "The base station empties it into a 2.7-litre bag",
          "Finds its way around well by laser, with a map and schedule in the app",
          "Very good value for money in the test (grade 1.0 at smarthomeassistent.de)"
        ],
        fuer: "For you if you do the mopping yourself or mostly have low-pile carpet.",
        hinweis: "Overall it only scores satisfactory at smarthomeassistent.de (grade 3.1). On high-pile carpet it got stuck there several times, and it cleaned corners poorly. The base station doesn't wash its mop pad, you rinse it by hand.",
        link: amazon("roborock q10 s5+"),
        alternativen: [
          { name: "Roborock Q7 L5+", preis: 180, text: "A little cheaper and at smarthomeassistent.de it even vacuums slightly better (grade 2.6 instead of 3.0). But it doesn't detect obstacles there at all, and overall it only manages grade 3.8.", link: amazon("roborock q7 l5+") }
        ]
      }
    ],
    fragen: [
      { f: "Which tests do you base your robot picks on?", a: "For robot vacuums I rely on the detailed tests at smarthomeassistent.de. There every robot goes through the same trials, from carpet and hair to obstacles and door thresholds. Their grades work like German school grades: 1.0 is the best. I recommend the models that do best in their price range there, plus my own experience from 14 years. If a robot is tested again after an update, for example because its navigation has improved, the newer test is the one that counts for me." },
      { f: "Do I need the mopping function?", a: "With lots of hard floors like tiles, laminate or parquet, definitely: the floor stays clean and you never fill a bucket again. If you mostly have carpet, or you like mopping yourself anyway, a robot that only vacuums is enough. That one often costs only half as much." },
      { f: "Mop roller or rotating mops: which is better?", a: "Both can mop very well: in the test the MOVA Z60 with a roller and the MOVA V50 with mop pads each get the top grade of 1.0 for mopping. The roller picks the dirty water straight back up, so it has to go back to the base station to be washed less often. The mop pads get into edges and corners better, but tend to spread dirty water around. If you have lots of corners, nooks and furniture edges, go for mop pads. If you mainly have open floor space, a roller is a good fit." },
      { f: "Does it get stuck on cables or socks?", a: "Models with a camera usually recognise cables, socks and shoes and drive around them, and many recognise pets too. Cheap models without a camera are more likely to run over a cable or get stuck, so you quickly tidy up first. A tangle of cables under the desk is best sorted out once, whatever the model." },
      { f: "Can I start it when I'm not at home?", a: "Yes, and that's exactly the trick. In the app you set up a schedule, for example Monday to Friday at 9 am. That's how I've been doing it for years. You can also start it from your phone when you're out." },
      { f: "Can it get over door thresholds and carpet edges?", a: "Most models manage thresholds up to about 2 cm, good models like the MOVA Z60 up to about 5 cm. On carpet a mopping robot lifts its mop pads or roller so nothing gets wet." },
      { f: "What do I still have to do myself?", a: "Change the dust bag every few weeks and clean the brush now and then. With a mopping robot you also top up the fresh water and empty the dirty water as soon as it tells you. But don't leave the dirty water standing for days, or it starts to smell." },
      { f: "What does it cost to run?", a: "Bags, filters, brushes and the mop pads or roller wear out. According to a cost check by netzwelt.de, a robot vacuum and mop with a base station comes to about €45 to €185 a year, without mopping about €25 to €120. Electricity adds about €15 to €25 a year, a bit more for base stations with hot water and drying." },
      { f: "I've never heard of MOVA. Is it a good brand?", a: "MOVA is a sister brand of Dreame; both belong to the Dreame Group. Their technology and app are very similar. The MOVA robots on this page score good to very good in the test." },
      { f: "Does it work on several floors?", a: "It remembers several maps. The base station stays in one place, though. You carry it to the other floor, and it can only empty itself again at the base station." },
      { f: "How loud is it?", a: "Usually about as loud as a conversation, so quieter than a normal vacuum cleaner. And because it runs while you're out, you won't notice it anyway. Only the base station is really loud for a few seconds while it empties the robot." }
    ],
    rechner: "saugroboter",
    video: "saugroboter",
    profitipp: {
      titel: "How to set it up",
      text: "Take a quarter of an hour once, and after that everything runs by itself:",
      liste: [
        "Install the app and let the robot drive through your home once. It draws a map as it goes.",
        "Create a schedule, for example vacuum and mop Monday to Friday at 9 am.",
        "Mark rugs and carpets in the app so it only vacuums there and doesn't mop."
      ]
    }
  },
  {
    id: "waschtrockner",
    name: "Washer dryer",
    kurzname: "a washer dryer",
    kategorie: "Household",
    symbol: "🧺",
    bild: "",
    kurz: "A washing machine and dryer in one. It washes and dries in a single run, and you don't even have to move the wet laundry.",
    warum: "Laundry in in the morning, set the end time, off to work. When you come home, everything is washed and dry. No more drying rack in the living room, no hanging up, no taking down. Many machines also have a steam programme that smooths out creases, so everyday clothes often don't need ironing at all.",
    statt: "Instead of a drying rack and ironing",
    nutzen: "In in the morning, washed and dry by the evening.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 4, nachher: 1 },
    fuer: [
      "You don't want a drying rack in your home any more",
      "You don't have room for a washing machine and a dryer side by side",
      "You have better things to do than ironing"
    ],
    nachteile: [
      "It only dries about 6 kg at a time, even if 10 kg fit in the drum. If you want to wash and dry in one go, you only fill it a little over half",
      "Washing and drying together take a long time, often 8 hours or more with a full load. But because it runs while you're out, you hardly notice",
      "Drying uses electricity: with three loads a week it's about €10 a month"
    ],
    erfahrung: {
      titel: "My experience",
      bild: "", bildText: "Photo: your washer dryer",
      text: "I have a Haier washer dryer and never want to be without one again. The laundry goes in in the morning, and when I get home from work it's washed and dried. I don't have to iron any more either: the i-⁠Refresh steam programme freshens up the clothes, and above all they come out crease-free."
    },
    profitipp: {
      titel: "How to have the laundry done when you get home",
      text: "Depending on the machine, the button is called “End time”, “Ready in” or “Delay start”. Here's how to use it:",
      liste: [
        "In the morning put the laundry in, no more than it can dry (usually 6 kg)",
        "Choose the “Wash and dry” programme",
        "Set the end time, for example 6 pm. It works out by itself when it has to start",
        "In the evening the laundry is dry. Take it out soon, then it stays nice and smooth"
      ]
    },
    modelle: [
      {
        stufe: "Budget", spanne: "up to €550",
        name: "Hisense WD5S1045BW", preis: 490, preisText: "approx. €470 to €530",
        punkte: [
          "Washes 10.5 kg and dries 6 kg in one go",
          "Doses the detergent by itself, you only top it up now and then",
          "With a steam programme and app",
          "Very good in the test (93 out of 100 points at ETM Testmagazin, issue 10/2024)"
        ],
        fuer: "For you if you want washing and drying in one and watch the price.",
        hinweis: "For washing and drying it uses more electricity and water than the AEG with its heat pump.",
        link: amazon("hisense wd5s1045bw waschtrockner", "hisense wd5s1045bw washer dryer")
      },
      {
        stufe: "Mid-range", spanne: "€550 to €900",
        name: "Haier I-Pro Serie 7 Plus (HWD100-BD14979U1)", preis: 650, preisText: "from approx. €640", empfohlen: true,
        punkte: [
          "Washes 10 kg and dries 6 kg in one go",
          "i-⁠Refresh steam programme: freshens up clothes and smooths out creases",
          "With delay timer, and you can control it from the app",
          "Doses detergent and fabric softener by itself"
        ],
        fuer: "For most households. My tip, because I have a Haier myself and never want to be without one again.",
        hinweis: "Washing and drying a full load takes a good 8 hours.",
        link: amazon("haier i-pro serie 7 plus waschtrockner hwd100-bd14979u1", "haier i-pro series 7 plus washer dryer hwd100-bd14979u1"),
        alternativen: [
          { name: "Bosch Serie 6 WNG24442", preis: 800, text: "The older WNG24440 from the same series was the best-value tip at Stiftung Warentest, Germany's best-known consumer tester (grade 2.1, issue 11/2023). Washes 9 kg and dries 6 kg.", link: amazon("bosch serie 6 wng24442 waschtrockner", "bosch serie 6 wng24442 washer dryer") }
        ]
      },
      {
        stufe: "Premium", spanne: "from €1,000",
        name: "AEG Serie 9000 L9WEF80690", preis: 1100, preisText: "approx. €1,050 to €1,350",
        punkte: [
          "Dries with a heat pump, so it uses less electricity and water",
          "Washes 9 kg and dries 6 kg in one go",
          "With a steam programme to freshen up clothes",
          "Test winner at Stiftung Warentest (grade 2.0, issue 11/2023)"
        ],
        fuer: "For you if you do a lot of washing and want to save electricity in the long run. In return you pay a lot more up front.",
        hinweis: "Washing and drying a full load takes almost 10 hours. The test dates from 2023.",
        link: amazon("aeg l9wef80690 waschtrockner", "aeg l9wef80690 washer dryer")
      }
    ],
    fragen: [
      { f: "A washer dryer, or a separate washing machine and dryer?", a: "Two machines get more done at once: while the dryer is running, the washing machine is already washing the next load. But you need twice the space. A washer dryer fits where your washing machine is now, and you never have to move the wet laundry. That's exactly what makes it so convenient. If you wash several loads a day for a big family, two machines are the better choice." },
      { f: "How much laundry can it dry?", a: "Usually about 6 kg, even if it can wash 9 or 10 kg. 6 kg is, for example, around 40 T-shirts. If you want to wash and dry in one go, only put in as much as it can dry." },
      { f: "Do I really not have to iron any more?", a: "Mostly not for everyday clothes. A steam programme like i-⁠Refresh on my Haier freshens up clothes and smooths out creases. The only important thing is to take the laundry out soon after drying and fold it, then it stays smooth. You might still give a shirt for an important meeting a quick press." },
      { f: "Does the laundry then sit in the drum all day?", a: "Yes, but dry. With the end time it starts so late that it finishes just when you get home. Until then the laundry sits dry in the drum. Wet laundry, on the other hand, shouldn't be left for hours, or it starts to smell." },
      { f: "What does drying cost?", a: "Without a heat pump a drying cycle uses a good 2 to 2.5 kWh of electricity depending on the machine. That is around 75 cents at 35 cents per kWh. With three loads a week that comes to about €10 a month. A machine with a heat pump like the AEG uses less electricity and water: Stiftung Warentest reckons it costs around €760 less to run over ten years than the Bosch and Siemens machines it tested." },
      { f: "What do I need to keep clean?", a: "Now and then rinse out the lint filter at the bottom by the pump and the detergent drawer, and wipe the rubber seal on the door. A hot programme with an empty drum once a month keeps it fresh." },
      { f: "Does it need a special connection?", a: "No. It needs the same water supply, the same drain and the same socket as a washing machine. So you simply put it in its place." }
    ],
    rechner: "waschtrockner",
    video: "waschtrockner"
  },
  {
    id: "airfryer",
    name: "Air fryer with two baskets",
    kurzname: "an air fryer",
    kategorie: "Kitchen",
    symbol: "🍟",
    bild: "",
    kurz: "A hot-air fryer with two baskets. For me it has mainly replaced the frying pan, and often the oven too. Each basket cooks something different, with its own temperature and time, almost without oil. And afterwards there's practically no washing-up.",
    warum: "Everything in, press Sync, off to the sofa. You no longer stand next to the pan, because the machine starts each basket so that the chicken and the vegetables are ready at the same time. When it beeps, dinner is ready. And it even tastes better: vegetables come out crunchier and more flavourful, chicken tender every time. Afterwards you skip all the washing-up of pans and pots, because nothing burns on and the baskets simply go in the dishwasher.",
    statt: "Instead of a frying pan and the oven",
    nutzen: "Off to the sofa, and almost no washing-up afterwards.",
    spart: ["muehe", "zeit", "geld"],
    muehe: { vorher: 4, nachher: 1 },
    fuer: [
      "You often stand at the hob turning meat or vegetables in the pan",
      "After eating you'd rather relax than scrub pans and pots",
      "You want the main dish and the side to be ready at the same time",
      "You usually cook for two to five people"
    ],
    nachteile: [
      "It takes up more space on the worktop than a single-basket model. If your kitchen is small, choose a model with baskets stacked on top of each other",
      "Each basket is usually smaller than one big single basket. If you want to cook a whole chicken, you need a large basket",
      "It's not for dishes with lots of sauce or runny batter. For those you still need the hob or the oven"
    ],
    erfahrung: {
      titel: "My experience",
      bild: "", bildText: "Photo: your air fryer",
      text: "Since I got my air fryer, I haven't used my frying pans. And everything tastes better: vegetables come out crunchier and taste more intense, chicken turns out perfectly tender every time. On top of that, I have practically no washing-up any more. Nothing ever burns on, and I simply put the baskets in the dishwasher or wipe them out with a damp cloth at the end."
    },
    profitipp: {
      titel: "How to get everything ready at the same time",
      text: "On most machines the button is called “Sync”, on the Cosori Dual Basket “Sync Finish”. Here's how to use it:",
      liste: [
        "Basket 1: for example chicken thighs, 200 °C, 25 minutes",
        "Basket 2: for example broccoli and peppers, 190 °C, 12 minutes",
        "Press Sync and start. Basket 2 waits and starts later by itself",
        "It beeps, and both are ready. Now all you have to do is eat"
      ]
    },
    modelle: [
      {
        stufe: "Budget", spanne: "up to €130",
        name: "Cosori Dual Basket 8,5 L", preis: 117, preisText: "approx. €110 to €130",
        punkte: [
          "Two baskets of 4.25 litres each, each with its own temperature and time",
          "“Sync Finish” button: both baskets are ready at the same time",
          "Beeps to remind you to shake",
          "Good at Stiftung Warentest, Germany's best-known consumer tester (grade 2.3, issue 1/2025), test winner among machines with two baskets at the time"
        ],
        fuer: "For anyone who wants two baskets and watches the price.",
        link: amazon("cosori dual basket 8,5 l", "cosori dual basket 8.5l"),
        alternativen: [
          { name: "Philips Dual Basket 3000 (NA352)", preis: 110, text: "One large 6-litre basket and a small 3-litre one. Good for a main dish plus a side.", link: amazon("philips dual basket na352") },
          { name: "Tefal Dual Easy Fry & Grill", preis: 100, text: "Two baskets of 5.2 and 3.1 litres, with a grill function.", link: amazon("tefal dual easy fry grill ey905d") }
        ]
      },
      {
        stufe: "Mid-range", spanne: "€130 to €200",
        name: "Cosori Dual Blaze TwinFry 10 L", preis: 180, preisText: "approx. €170 to €200",
        punkte: [
          "Two baskets of 5 litres each, or one large 10-litre basket when you take out the divider",
          "Sync button: everything is ready at the same time",
          "Sends a message to your phone via the app as soon as the food is ready",
          "Heats from above and below, up to 240 °C"
        ],
        fuer: "For you if you want two baskets side by side or now and then need one big 10-litre basket.",
        hinweis: "For safety reasons you can only start it on the machine itself, not via the app.",
        link: amazon("cosori twinfry 10 l"),
        alternativen: [
          { name: "Ninja Foodi MAX Dual Zone (AF400)", preisText: "approx. €140 to €180", text: "Two baskets side by side, 9.5 litres in total, with Sync.", link: amazon("ninja foodi max dual zone af400eu") },
          { name: "Ninja Double Stack XL", preisText: "from approx. €160", text: "Two baskets stacked on top of each other, so it takes up little worktop space.", link: amazon("ninja double stack xl sl400eu") }
        ]
      },
      {
        stufe: "Premium", spanne: "from €200",
        name: "Cosori Turbo Tower Pro Smart", preis: 279, preisText: "approx. €250 to €280", empfohlen: true,
        punkte: [
          "Test winner among machines with two baskets at Stiftung Warentest (grade 2.2, issue 9/2026)",
          "Two baskets on top of each other, 10.8 litres together. Takes up less space than two baskets side by side",
          "Sync button: both baskets finish at the same time, with an app (VeSync)",
          "Baskets with a ceramic coating"
        ],
        fuer: "For most households, especially if worktop space is tight. My tip: it's the test winner among machines with two baskets, and I use it myself.",
        hinweis: "For safety reasons you can only start it on the device itself, not from the app.",
        link: amazon("cosori turbo tower pro smart"),
        alternativen: [
          { name: "Cosori ICONIC Dual", preis: 369, text: "Stainless steel housing, baskets with a ceramic coating that the manufacturer says is PFAS-free. Nice if looks matter to you.", link: amazon("cosori iconic dual") }
        ]
      }
    ],
    fragen: [
      { f: "Does it really replace the frying pan?", a: "For me, yes: since I got my air fryer, I haven't used my frying pans. Chicken, vegetables, potatoes, fish or sausages turn out well in it without you standing at the hob, and without fat splatter. For sauces, scrambled eggs or pancakes you still need the hob and a pan." },
      { f: "How much washing-up do I have afterwards?", a: "Practically none. Nothing burns on in an air fryer. You simply put the baskets in the dishwasher or give them a quick wipe with a damp cloth at the end. You skip all the washing-up of pans and pots." },
      { f: "Does it really taste better than from the pan?", a: "For me, yes: vegetables come out crunchier and taste more intense, chicken turns out tender every time. The hot air flows all around the food. So it browns quickly on the outside and stays juicy inside, without sitting in fat." },
      { f: "What exactly does the Sync button do?", a: "You set the temperature and time for each basket, for example chicken at 200 °C for 25 minutes and vegetables at 190 °C for 12 minutes. With Sync the basket with the shorter time starts later by itself. So both are ready at the same time, and nothing has to be kept warm." },
      { f: "Do I get a message on my phone or watch?", a: "On your phone, yes, if the device has Wi-Fi: the TwinFry, for example, notifies you through the free VeSync app as soon as the food is ready. If your smartwatch shows your phone's notifications, you'll usually see the message there too. Devices without Wi-Fi just beep." },
      { f: "Do I have to shake or stir in between?", a: "You don't have to. But chips and vegetables turn out more evenly crispy if you give them a quick shake once halfway through. The Dual Basket reminds you with a beep. You can turn chicken legs once so they brown all over." },
      { f: "Wouldn't a machine with one basket be enough?", a: "If you usually make only one thing at a time, yes, and that's usually cheaper. One example is the 6.2-litre Cosori Clear Blaze with a viewing window. Two baskets are worth it as soon as you want the main dish and the side ready together." },
      { f: "Does it replace the oven too?", a: "For one to four portions, almost always. Chips, vegetables, chicken, fish and part-baked rolls even turn out faster. For pizza, tray bakes or a large bake you still need the oven." },
      { f: "Does it really save electricity?", a: "Yes, especially for smaller amounts. The baskets are small and heat up quickly, and preheating is usually not needed or only takes a few minutes. According to Stiftung Warentest (issue 9/2026), air fryers are almost twice as fast as an oven and use considerably less electricity." },
      { f: "Is the coating safe?", a: "As far as we know today, yes. Many baskets have a non-stick coating made of PTFE, known as Teflon. According to Germany's Federal Institute for Risk Assessment (BfR), it is safe in normal use. It can only break down from around 360 °C, and an air fryer stays well below that. But PTFE is one of the PFAS, which harm the environment during production and disposal. If you'd rather avoid it, choose a machine with a PFAS-free ceramic coating. Cosori states this, for example, for the Turbo Tower Pro Smart and the ICONIC Dual. Whatever the model: no metal forks and no abrasive cleaners, and the coating will last a long time." }
    ],
    rechner: "airfryer",
    video: "airfryer"
  },
  {
    id: "thermostate",
    name: "Smart radiator thermostats",
    kurzname: "smart thermostats",
    kategorie: "Household",
    symbol: "🌡️",
    bild: "",
    kurz: "They go on your radiators in place of the normal dials and heat according to your plan. You can control them via the app or directly on the device.",
    warum: "The advantages are obvious: shortly before you get home, your flat is already warm. While you're at work, the thermostats turn the heating down by themselves. So you simply can't forget to turn it down any more, and you save money. All you do is set up a weekly heating plan once. And the thermostats themselves are usually cheap.",
    statt: "Instead of turning the heating up and down",
    nutzen: "Warm when you get home. Turned down when you're out.",
    spart: ["geld", "muehe"],
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "You're often out during the day, for example at work",
      "You sometimes forget to turn the heating down",
      "You want to come home to a warm flat in the evening",
      "You rent: you screw them on yourself and take them off again when you move out"
    ],
    nachteile: [
      "Thermostats that connect straight to Wi-Fi do less well in tests. The best models need a hub, which is a one-off extra cost if you don't have one yet",
      "If you already turn the heating down yourself every time, you save less money. Then it takes a few years before the purchase price has paid for itself, but you get the convenience straight away",
      "According to the manufacturers, the batteries usually last up to two years. The Shelly TRV you charge via USB-C instead"
    ],
    profitipp: {
      titel: "How to set up your heating plan",
      text: "To start with, a simple plan for weekdays and one for the weekend is enough:",
      liste: [
        "Warm shortly before you get up, for example 21 degrees",
        "When you leave the house, down to 16 to 17 degrees. Better not right off, or the walls cool down",
        "Warm again shortly before you get home",
        "16 to 18 degrees in the bedroom at night"
      ]
    },
    gruppen: [
      { name: "Without a hub", text: "You connect these thermostats straight to your Wi-Fi or your FRITZ!Box. You don't buy anything extra and you're set up quickly. In return the Wi-Fi models do less well in tests. The FRITZ! model came close to the test winner at Stiftung Warentest (issue 9/2023).", ohne: "zentrale" },
      { name: "With a hub", text: "These thermostats talk to a small hub, also called a gateway, that is connected to your router. It is a one-off extra cost. For some models a device you may already have is enough, for example a HomePod mini or a Google Nest Hub (2nd generation). In return these thermostats do best in tests, and according to the manufacturers the batteries last up to two years." }
    ],
    modelle: [
      {
        gruppe: "Without a hub",
        stufe: "Budget", spanne: "straight to your Wi-Fi",
        name: "SALCAR TRV801W", preis: 40, preisText: "approx. €30 to €45 each",
        punkte: [
          "Connects straight to your Wi-Fi, no hub at all",
          "Works with Alexa and Google",
          "Notices when a window is open and turns down",
          "Clear app (Smart Life or Tuya) with a heating plan for every day"
        ],
        fuer: "For you if you want it cheap and don't have a FRITZ!Box. I have it on my own radiator.",
        hinweis: "Satisfactory at smarthomeassistent.de (grade 3.1).",
        link: amazon("salcar trv801w"),
        alternativen: [
          { name: "Eurotronic Comet WiFi", preis: 35, text: "Satisfactory at Stiftung Warentest (grade 2.7, issue 9/2023). It notices when a window is open.", link: amazon("eurotronic comet wifi") }
        ]
      },
      {
        gruppe: "Without a hub",
        stufe: "Mid-range", spanne: "straight to the FRITZ!Box",
        name: "FRITZ!Smart Thermo 302", preis: 50, preisText: "approx. €45 to €60 each", empfohlen: true,
        punkte: [
          "Best-value tip at Stiftung Warentest (good, grade 1.9, issue 9/2023)",
          "Connects straight to your FRITZ!Box, so you don't need an extra hub",
          "Notices when a window is open and turns down",
          "Display on the device, and the batteries are included"
        ],
        fuer: "For you if your router is a FRITZ!Box. Then it's the best choice without an extra hub.",
        hinweis: "It doesn't use Wi-Fi but DECT, like a cordless phone. That's why it only works with a FRITZ!Box with DECT, which most have. It used to be called FRITZ!DECT 302.",
        link: amazon("fritz smart thermo 302")
      },
      {
        gruppe: "Without a hub",
        stufe: "Premium", spanne: "straight to your Wi-Fi, rechargeable",
        name: "Shelly TRV", preis: 80, preisText: "approx. €70 to €90 each",
        punkte: [
          "Connects straight to your Wi-Fi, no hub at all",
          "A rechargeable battery instead of batteries: according to the manufacturer it lasts up to two years, then you charge it via USB-C",
          "Full marks for the app at smarthomeassistent.de"
        ],
        fuer: "For you if you're done with batteries.",
        hinweis: "Only rated adequate by Stiftung Warentest (issue 9/2023, grade 3.8), partly because frost protection is fiddly to set up. Satisfactory at smarthomeassistent.de (grade 2.6). The charging cable and power adapter aren't included. Look for “Shelly TRV” without “BLU”: the BLU model uses Bluetooth and needs a gateway for Wi-Fi.",
        link: amazon("shelly trv heizkörperthermostat wlan", "shelly trv wifi radiator thermostat")
      },
      {
        gruppe: "With a hub",
        stufe: "Budget", spanne: "with an Aqara hub or Matter",
        name: "Aqara W600", preis: 50, preisText: "approx. €45 to €55 each", empfohlen: true,
        punkte: [
          "No. 1 at smarthomeassistent.de (very good, grade 1.4)",
          "Very quiet: you can hardly hear the motor",
          "According to the manufacturer, the batteries last up to two years",
          "Works with Alexa, Google and Apple Home"
        ],
        fuer: "For most people: it's the best thermostat in the test, and still cheap.",
        hinweis: "It needs a hub: an Aqara hub or a device for Matter over Thread, for example a HomePod mini or a Google Nest Hub (2nd gen). Via Matter it has slightly fewer features than with the Aqara hub.",
        link: amazon("aqara w600 heizkörperthermostat", "aqara w600 radiator thermostat")
      },
      {
        gruppe: "With a hub",
        stufe: "Mid-range", spanne: "with Matter or a Bosch controller",
        name: "Bosch Smart Home Radiator Thermostat II [+M]", preis: 62, preisText: "approx. €60 to €70 each",
        punkte: [
          "Very good at smarthomeassistent.de (grade 1.4)",
          "Very quiet, with a display, and you can also operate it on the device",
          "According to the manufacturer, the batteries last up to two years",
          "Works with Alexa, Google and Apple Home"
        ],
        fuer: "For you if good design matters to you or you already have Bosch Smart Home.",
        hinweis: "It runs via Matter over Thread, for example with a HomePod mini or Google Nest Hub (2nd generation), or with the Bosch Smart Home Controller II. It only detects open windows with an extra window contact. Look for “[+M]” in the name: the older model without it always needs the Bosch controller.",
        link: amazon("bosch smart home heizkörperthermostat ii +m", "bosch smart home radiator thermostat ii +m")
      },
      {
        gruppe: "With a hub",
        stufe: "Premium", spanne: "with a Homematic IP hub",
        name: "Homematic IP Evo", preis: 78, preisText: "approx. €75 to €100 each",
        punkte: [
          "Test winner at Stiftung Warentest (good, grade 1.7, issue 9/2023)",
          "Notices by itself when a window is open and turns down",
          "Display on the device and a boost function for when it needs to warm up quickly",
          "Big system: window contacts, wall thermostats and much more fit with it"
        ],
        fuer: "For you if you want to fit out the whole flat and expand later.",
        hinweis: "It needs a Homematic IP hub, for example the Access Point, which connects to your router by cable. Good at smarthomeassistent.de (grade 1.8).",
        link: amazon("homematic ip evo heizkörperthermostat", "homematic ip evo radiator thermostat")
      }
    ],
    fragen: [
      { f: "How much do I really save?", a: "With a heating plan, around 10 per cent of your heating costs, according to co2online. As a rule of thumb, every degree less saves around 6 per cent of heating energy. How much it is for you depends on how often you're out and how you heat at the moment. For a poorly insulated 70 m² flat, Stiftung Warentest (issue 9/2023) reckons on around €100 a year. Work it out for yourself in the calculator below." },
      { f: "With or without a hub: which suits me?", a: "Without a hub is the easiest start: unpack, connect to Wi-Fi, done. That suits you if you only want to control a few radiators and it should be cheap. With a hub you pay a bit more once, but you get the thermostats that do best in tests. You can also add window contacts or a wall thermostat later. That's worth it above all if you want to fit out the whole flat. If you have a FRITZ!Box, take the FRITZ! model: then your router already is the hub." },
      { f: "Why are there so few Wi-Fi thermostats?", a: "Wi-Fi uses more power than the radio types that thermostats with a hub use. The Shelly TRV has a rechargeable battery. Important: your router needs 2.4 GHz Wi-Fi. That's the case with almost all routers." },
      { f: "Will they fit my radiators?", a: "Almost all normal radiator valves. Most have an M30 x 1.5 standard thread, and all the models here fit on that. For other valves, for example from Danfoss, adapters are often included, or you can get them for little money. For underfloor heating, on the other hand, you need a room thermostat on the wall." },
      { f: "Can I fit them as a tenant?", a: "Usually yes, because you don't change anything permanently. You just unscrew the old dial and screw the new thermostat on. You don't have to drain any water, and you don't need a tradesperson either. Keep the old dials safe and screw them back on when you move out. If in doubt, have a quick word with your landlord." },
      { f: "What if I come home earlier?", a: "No problem: you briefly turn the thermostat up or tap warmer in the app. From the next point in your heating plan, everything runs by itself again. Some systems even use your phone's location to tell when you're on your way home." },
      { f: "Doesn't the flat get too cold during the day?", a: "Not if you turn it down to 16 to 17 degrees instead of right off. It shouldn't drop below 16 degrees: otherwise the walls cool down, moisture settles on them, and the risk of mould goes up. Heating the flat back up afterwards costs less than heating it all day long." },
      { f: "What about open windows?", a: "Most of the picks here notice when the temperature suddenly drops while you air the room, and turn down for a while. The Bosch thermostat and the Shelly TRV need a window contact for this. So you're not heating the outdoors." }
    ],
    rechner: "thermostate",
    video: "thermostate",
    preisstand: "Oktober 2026"
  },
  {
    id: "klimaanlage",
    name: "Air conditioner",
    kurzname: "an air conditioner",
    kategorie: "Household",
    symbol: "❄️",
    bild: "",
    kurz: "An air conditioner you set up yourself, without an installer. It cools your room when it is hot outside.",
    warum: "On hot days the heat builds up in your home, and at night the bedroom hardly cools down. The air conditioner takes the heat out of the room and sends it outside. You switch it on, and the room gets noticeably cooler, in your home office just as much as in the bedroom at night.",
    statt: "Instead of a fan and a hot bedroom",
    nutzen: "Cool in your room, even when it is hot outside.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Your bedroom or home office gets really hot in summer",
      "You rent or don't want anything fixed to the wall",
      "You want to cool without an installer and without a hole in the wall"
    ],
    nachteile: [
      "It uses a lot of electricity. If it runs for many hours on hot days, you will notice it on your bill, much more with a monoblock than with the PortaSplit",
      "None of the units here is as quiet as a fixed unit. Monoblocks are louder than the PortaSplit",
      "The window stays open a crack. A window seal lets less warm air in",
      "The units are heavy: according to the manufacturer the PortaSplit weighs a good 32 kilos. It is best to carry it with two people"
    ],
    gruppen: [
      { name: "Split", text: "Two parts, joined by a flat line: the indoor unit stands in the room, the outdoor unit hangs outside on the window or stands on the balcony. That is where it releases the heat. This is why a split unit is quieter and more economical than a monoblock." },
      { name: "Monoblock", text: "Everything is in one unit (a portable air conditioner or monoblock), and the warm air goes out of the window through a hose. Monoblocks are cheaper and quick to set up. To be honest, though, they are louder than a split unit, even the best ones in the test. They make the most sense if you only need cooling on a few hot days a year." }
    ],
    modelle: [
      {
        gruppe: "Split",
        stufe: "Mid-range", spanne: "without an installer",
        name: "Midea PortaSplit", preis: 1100, preisText: "approx. €900 to €1,350", empfohlen: true,
        punkte: [
          "The outdoor unit hangs on a bracket on the window or stands on the balcony. You need no installer and no hole in the wall",
          "According to the manufacturer 3.5 kilowatts for rooms up to 42 square metres and 39 decibels at the indoor unit in Silent mode",
          "Much more economical than a monoblock, according to Stiftung Warentest on the level of some fixed units",
          "It can also heat and can be controlled by remote or app"
        ],
        fuer: "My tip if you want it quieter and more economical than a monoblock. I have one myself and have had very good experiences with it.",
        hinweis: "At Stiftung Warentest, Germany's best-known consumer tester, it was only rated satisfactory (3.3, issue 6/2025); fixed split units did better. The window stays open a crack for the flat line to pass through. And from 2027 it will no longer come onto the market new because of its refrigerant, more on this in the questions below.",
        link: amazon("midea portasplit", "midea portasplit"),
        alternativen: [
          { name: "Midea PortaSplit Cool", preis: 800, text: "The smaller sister only cools and does not heat. According to the manufacturer it has 2.35 instead of 3.5 kilowatts and suits smaller rooms better. I have not found any independent tests of it yet.", link: amazon("midea portasplit cool", "midea portasplit cool") }
        ]
      },
      {
        gruppe: "Monoblock",
        stufe: "Mid-range", spanne: "€450 to €700",
        name: "Bosch Cool 4000", preis: 570, preisText: "approx. €550 to €600", empfohlen: true,
        punkte: [
          "At Que Choisir 2026 it got the top mark for cooling, according to Stiftung Warentest, and used the least electricity of the three recommended units",
          "According to the manufacturer 2.6 kilowatts for rooms up to 35 square metres",
          "According to the manufacturer it works with propane (R290), which hardly harms the climate",
          "Remote control with timer, plus a sleep mode and a quiet mode"
        ],
        fuer: "My tip if you only need cooling on a few hot days and it should be cheaper than a split unit.",
        hinweis: "Like all monoblocks it is louder than a split unit: according to the manufacturer it has a sound power of 64 decibels, the PortaSplit 59 at the indoor unit. And because it blows air from the room outside, warm air flows in through gaps.",
        link: amazon("bosch cool 4000", "bosch cool 4000")
      }
    ],
    ohneTeuer: { stufe: "Premium", titel: "Fixed, installed by a specialist", text: "Fixed split units are even quieter and more economical. But only a certified specialist may install them, and as a tenant you need your landlord's consent. That is why you cannot order them here. Which units lead in tests is in the questions below." },
    fragen: [
      { f: "Split or monoblock: which suits me?", a: "If you cool often or at night, take a split unit like the PortaSplit. It is quieter and uses less electricity because it releases the heat outside through the outdoor unit. If you only need cooling on a few hot days a year, a monoblock is enough. It is cheaper to buy and quick to set up. In return it is louder, and because it blows air from the room outside, warm air from outside flows back in. Stiftung Warentest sees it the same way." },
      { f: "How loud is an air conditioner in the room?", a: "Fixed split units are the quietest. According to the manufacturers, the indoor units of the test winners have only 19 decibels in their quietest mode. The PortaSplit is louder: according to the manufacturer it is 39 decibels in Silent mode, and in tests it was sometimes louder. Monoblocks are louder still, because everything stands in the room with them, including the compressor. Stiftung Warentest calls even the recommended monoblocks rather loud. The energy label shows the sound power: 59 decibels at the indoor unit of the PortaSplit and 64 for the Bosch. For the bedroom, the sleep mode helps, or you cool it down before you go to bed." },
      { f: "What does the electricity cost?", a: "That depends on how often and how long it runs. An example: if you cool for eight hours every day for a month, the PortaSplit uses about 100 to 140 kilowatt hours according to tests and the energy label. At 37 cents per kilowatt hour, the average in Germany, that is about €35 to €55. In the Que Choisir test, the monoblocks here used almost twice as much, so about €70 to €90 for the same month. In Austria and Switzerland electricity is somewhat cheaper. You only earn back the higher price of the PortaSplit through electricity after many years. In everyday life it matters more that it is quieter and does not pull warm air in from outside." },
      { f: "Can the PortaSplit also heat?", a: "Yes, it works like a small heat pump and, according to the manufacturer, heats until it is minus 10 degrees outside. Stiftung Warentest only tested heating down to plus 2 degrees outside, though. So on cool days in spring and autumn you can warm single rooms with it. The PortaSplit Cool cannot heat." },
      { f: "What about fixed split units?", a: "They are the quietest and most economical and can help with heating in winter. At Stiftung Warentest (issue 6/2026) the Mitsubishi Electric MSZ-RZ25VU was test winner among the smaller units with 2.5 kilowatts, and the Samsung AR70F09CAAWN is the best-value tip. Among the larger ones with 3.5 kilowatts, the Daikin Perfera FTXM35A is ahead, tested in 2025. As a rough guide, Stiftung Warentest gives 2.5 kilowatts for about 25 square metres and 3.5 kilowatts for about 35. Only a certified specialist may install them, which is why you cannot order them here. It is best to get quotes early in the year, because once the first heatwave arrives the specialists are quickly booked up." },
      { f: "What changes for the PortaSplit in 2027?", a: "The PortaSplit here works with the refrigerant R32. Because of new EU rules it may no longer come onto the market new from 1 January 2027. But shops may keep selling units that are in the EU by the end of 2026. And if you have one, you may keep using it and have it repaired without restriction. Midea has announced a new PortaSplit with propane (R290) for 2027, which harms the climate much less. According to the manufacturer, the Bosch already works with propane." },
      { f: "Can I set up an air conditioner as a tenant in Germany?", a: "You can usually just set up a monoblock, because you don't drill or change anything. For a fixed split unit, on the other hand, you need your landlord's consent, ideally in writing. That is because it needs a hole in the wall and an outdoor unit on the facade. With the PortaSplit it is not entirely clear: you don't drill anything, but the outdoor unit hangs outside. An expert from the German homeowners' association Haus & Grund thinks this is allowed in high summer even without consent, because it is not meant to be permanent. Still, it is best to ask your landlord beforehand. And be considerate of your neighbours, especially at night." },
      { f: "And in an owner-occupied flat in Germany?", a: "You may not simply put up a split unit with an outdoor unit; you first need a resolution of the owners' meeting. Since a ruling by the Federal Court of Justice in July 2026, however, owners are usually entitled to one. That applies as long as the unit doesn't disturb the others too much, for example with noise, and isn't an eyesore. For a monoblock you don't need a resolution, because you don't change anything. For the PortaSplit, it is best to ask the property management beforehand." },
      { f: "And in Austria?", a: "A portable unit is the easiest, because it only stands in your flat. If you want a fixed split unit, as a tenant you must notify your landlord beforehand. If they don't refuse within two months, under Austria's Tenancy Act that counts as consent. If they refuse, you rarely get further through the arbitration board or the courts. If you own a flat in a building with several owners, you need the consent of the others. Whether you also need a permit from the building authority depends on the unit, the noise and the location, for example in a protected zone. It is best to ask your municipality beforehand, in Vienna the building police. For portable units like the PortaSplit, according to the magazine profil, a permit is often not needed. But here too, ask your landlord first." },
      { f: "And in Switzerland?", a: "Portable units with a hose that you just plug in don't need a permit. In the canton of Zurich the cantonal government confirmed this explicitly. A fixed split unit, on the other hand, needs a building permit in most cantons, in Zurich usually for the outdoor unit. As a tenant you need the landlord's written consent for changes to the flat. For the PortaSplit I found no clear rule, because its outdoor unit only hangs on the window. So ask your property management beforehand and, if in doubt, the building office of your municipality. And one more thing: the units here have a German plug that doesn't fit Swiss sockets. So I don't have a suitable offer for Switzerland right now, but I am looking for one." },
      { f: "How did you choose the units?", a: "For the split group I read the tests by Stiftung Warentest and also tests by home&smart, smarthomeassistent and mobiFlip. The PortaSplit was the only portable split unit in the Stiftung Warentest test, and I use it myself. Stiftung Warentest has not tested monoblocks itself for years. In 2026, however, it evaluated the big test by the French consumer magazine Que Choisir and recommended three units from it that are available in Germany. All three got the top mark for cooling there. Only the Bosch is here, because I could not find the other two on Amazon. I also compared the manufacturers' specifications and read tests by the British consumer magazine Which? and the Austrian consumer association VKI. None of these tests calls a monoblock really quiet, and I'd rather tell you that honestly." }
    ],
    profitipp: {
      titel: "How it cools better and more economically",
      text: "A few simple steps make a big difference:",
      liste: [
        "Seal the gap in the window where the line or hose runs through. Then less warm air gets in",
        "Keep shutters or blinds down during the day. Sun protection on the outside of the window works best",
        "Switch it off when nobody is in the room, and cool the bedroom down before you go to bed",
        "Only cool by a few degrees, at most about six degrees below the temperature outside. That's more pleasant for your body and saves electricity",
        "If you have a plug-in solar kit, cool during the day while the sun is shining. Then you use your own electricity"
      ]
    },
    erfahrung: {
      titel: "My experience",
      bild: "", bildText: "Photo: your PortaSplit",
      text: "I own the Midea PortaSplit myself, and it is very quiet. I can easily leave it running while I sleep. Setting it up was easy, the manual explains everything well. I don't use it for heating, so I can't tell you anything about that."
    },
    vergleich: {
      vorherTitel: "Without air conditioning",
      vorher: [
        "During the day the flat keeps getting hotter",
        "At night you air the rooms and hope it cools down",
        "The bedroom is often too warm to sleep"
      ],
      nachher: [
        "At the push of a button the room gets noticeably cooler",
        "With a timer or app it is already cool when you get home",
        "Before going to bed you cool the bedroom down"
      ]
    },
    video: "klimaanlage",
    preisstand: "Oktober 2026"
  },
  {
    id: "smarte-lampen",
    name: "Smart bulbs",
    kurzname: "smart bulbs",
    kategorie: "Household",
    symbol: "💡",
    bild: "",
    kurz: "You screw them into your lamps instead of normal bulbs. Then you control your light by app, switch or voice, and it goes on and off on your schedule.",
    warum: "In the morning it slowly gets light, in the evening the light comes on by itself and turns cosy and warm. With one tap you get the right mood for cooking, reading or a film night. And when you leave the house, you switch everything off with one tap, even when you are already out.",
    statt: "Instead of fumbling for the switch in the dark",
    nutzen: "Light on when you need it. Off when you leave.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 2, nachher: 1 },
    fuer: [
      "You want the right lighting mood with one tap, for example for cooking, reading or a film night",
      "The light should go on and off by itself in the morning and evening",
      "You sometimes forget to switch off the light when you leave the house",
      "You rent: you simply screw them in instead of the old bulbs and take them with you when you move out"
    ],
    nachteile: [
      "Smart bulbs cost much more than normal LED bulbs. You mainly pay for the convenience",
      "Even when switched off they use a little electricity so they can listen to you. In the EU at most 0.5 watts per bulb is allowed, more on this in the questions below",
      "If you switch them off at the normal light switch, they no longer react to the app or your voice. So leave the switch on and add a smart switch, as in the tip below",
      "For all the Philips Hue features you need a Bridge, which costs extra once. The starter sets here already include it"
    ],
    profitipp: {
      titel: "How to make your light really convenient",
      text: "A few settings make the biggest difference:",
      liste: [
        "Always leave the normal light switch on and stick a smart switch next to it, with Hue for example the Smart Button from the starter set. It holds with an adhesive strip, you don't need an electrician",
        "Set up scenes, for example bright for cooking, warm for relaxing and dimmed for a film night",
        "Let the light get slowly brighter in the morning with a schedule, then you don't wake up in the dark",
        "With the Hue Bridge Pro and at least three Hue bulbs in one room, MotionAware switches the light on by itself as soon as you come in"
      ]
    },
    erfahrung: {
      titel: "My experience",
      bild: "", bildText: "Photo: your Hue lights",
      text: "I have been using Philips Hue for about ten years and I love it. What I use most are scenes, so I always have exactly the lighting mood I want. With the new MotionAware feature, the lights switch on automatically as soon as someone moves in the room. I also use the Hue light switches, which offer far more functions than normal light switches."
    },
    gruppen: [
      { name: "With a hub", text: "These bulbs talk to a small hub, with Philips Hue it is called the Bridge. You connect it to your router, and the starter sets here already include it. In return you get the most features: schedules, scenes, control when you are out and lots of accessories such as switches and motion sensors. Philips Hue with Bridge was the test winner at Stiftung Warentest, Germany's best-known consumer tester (issue 2/2024)." },
      { name: "Without a hub", text: "You connect these bulbs directly to your Wi-Fi or by Bluetooth to your phone. You buy nothing extra and are done quickly. That suits you if you want to start with one or two bulbs. The best bulb without a hub at Stiftung Warentest (issue 2/2024) was the one from WiZ." }
    ],
    modelle: [
      {
        gruppe: "With a hub",
        stufe: "Budget", spanne: "Hue at a lower price",
        name: "Philips Hue Essential starter set", preis: 90, preisText: "approx. €80 to €100 for the Bridge and four bulbs",
        punkte: [
          "Bridge and four bulbs with colour and shades of white in one set",
          "Same app and same system as the other Hue bulbs, you can add everything later",
          "Strong colours: at the tech sites nextpit and TechRadar they looked hardly different from the more expensive Hue bulbs",
          "Works with Alexa, Google and Apple Home"
        ],
        fuer: "For you if you want to fit several lamps with Hue at a good price.",
        hinweis: "It only dims down to 2 percent, the more expensive Hue bulbs down to 0.2 percent. For a really gentle wake-up light TechRadar found it too bright. With the Bridge from this set there is no MotionAware, for that you need the Bridge Pro. And according to the manufacturer it has energy class F, the more expensive Hue bulbs D. Switched off it uses 0.5 watts, the bulbs in the set with the Bridge Pro only 0.1 watts.",
        link: amazon("philips hue essential starter set e27", "philips hue essential starter kit e27")
      },
      {
        gruppe: "With a hub",
        stufe: "Premium", spanne: "with Bridge Pro",
        name: "Philips Hue White & Color Ambiance starter set with Bridge Pro", preis: 220, preisText: "approx. €200 to €250 for the Bridge Pro, three bulbs and the Smart Button", empfohlen: true,
        punkte: [
          "Test winner at Stiftung Warentest (good, grade 2.0, issue 2/2024). The previous bulb with the normal Bridge was tested",
          "With MotionAware your bulbs become a motion sensor: with three bulbs or more in one room the light comes on when you walk in",
          "Dims down very low, to 0.2 percent, and has many shades of white from very warm to cool",
          "Large system: switches, motion sensors, light strips and outdoor lights go with it, also with Alexa, Google and Apple Home"
        ],
        fuer: "My tip if you want to make your light really smart. I use Philips Hue myself, more on that under “My experience”.",
        hinweis: "It is the most expensive set here. According to the manufacturer the new bulb generation uses around 40 percent less electricity than the tested one. According to the manufacturer the Bridge Pro controls more than 150 bulbs and connects to your router by cable or Wi-Fi.",
        link: amazon("philips hue starter set bridge pro e27", "philips hue starter kit bridge pro e27")
      },
      {
        gruppe: "Without a hub",
        stufe: "Budget", spanne: "straight into Wi-Fi",
        name: "WiZ A60 E27 Tunable White & Color", preis: 15, preisText: "approx. €12 to €18 each", empfohlen: true,
        punkte: [
          "Good at Stiftung Warentest (grade 2.2, issue 2/2024): the best bulb without a hub and best-value and eco tip",
          "Goes straight into your Wi-Fi, you buy nothing extra",
          "Colour and shades of white from warm to cool, with schedules and scenes in the WiZ app",
          "Works with Alexa and Google, via Matter also with Apple Home"
        ],
        fuer: "For you if you want to start cheaply and without accessories, for example with one or two bulbs.",
        hinweis: "Your router needs 2.4 GHz Wi-Fi, almost all have it. When the internet went down in the Stiftung Warentest test, the Wi-Fi bulbs only reacted with a delay.",
        link: amazon("wiz a60 e27 color", "wiz a60 e27 colour")
      },
      {
        gruppe: "Without a hub",
        stufe: "Premium", spanne: "by Bluetooth, Bridge later",
        name: "Philips Hue White & Color Ambiance E27 (by Bluetooth)", preis: 50, preisText: "approx. €45 to €60 each",
        punkte: [
          "The same bulb as in the starter set with Bridge Pro. Without a Bridge you control it by Bluetooth directly with your phone",
          "This way you control up to ten bulbs, without any accessories",
          "You can add the Bridge at any time, then you have all the features"
        ],
        fuer: "For you if you want to try Philips Hue with one or two bulbs first.",
        hinweis: "By Bluetooth it only works nearby, according to the manufacturer about ten metres, and not when you are out. Schedules and routines are also limited without a Bridge.",
        link: amazon("philips hue white and color ambiance e27", "philips hue white and colour ambiance e27")
      }
    ],
    fragen: [
      { f: "With or without a hub: which suits me?", a: "Without a hub is the easiest start: screw in the bulb, connect it to your Wi-Fi or phone, done. That suits you if you want to make one or two lamps smart first. With a hub you pay more at the start, but you get the most features and lots of accessories, for example switches and motion sensors. That is worth it above all if you want to equip several rooms. With Philips Hue you can also start without a Bridge and add it later." },
      { f: "Does Philips Hue work without a Bridge?", a: "Yes, by Bluetooth. Then you control up to ten bulbs directly with your phone, according to the manufacturer about ten metres away. That doesn't work when you are out, and you can only use schedules, routines and accessories to a limited extent. Most Hue bulbs work both ways. So you can add the Bridge at any time and keep your bulbs." },
      { f: "Bridge or Bridge Pro?", a: "The normal Bridge controls up to 50 bulbs and 12 accessories such as switches, and it is connected to your router by cable. According to the manufacturer the Bridge Pro handles more than 150 bulbs and 50 accessories, it also connects by Wi-Fi, and only with it do you get MotionAware. If you don't need MotionAware, the normal Bridge is enough to start with, as in the Essential set." },
      { f: "What is MotionAware?", a: "It turns your Hue bulbs themselves into a motion sensor. When someone moves in the room, the radio signals between the bulbs change, and the light comes on. You need the Bridge Pro and at least three Hue bulbs in the same room, but no extra motion sensor. According to the manufacturer almost all Hue bulbs take part, only some older models don't. MotionAware costs nothing extra for your light, only for alerts to your phone Hue charges a subscription. Walls between the bulbs can interfere. And so that your pet doesn't switch on the light, you set MotionAware to be less sensitive in the app." },
      { f: "Do smart bulbs use electricity when they are off?", a: "Yes, a little, because they wait for your commands. In the EU a smart bulb may use at most 0.5 watts for this since September 2021. That is a good 4 kilowatt hours a year, at 37 cents per kilowatt hour, the average in Germany, so around €1.60 per bulb. According to the manufacturer the bulbs in the Hue set with Bridge Pro only need 0.1 watts for this, the cheaper Hue Essential 0.5 watts. For a lamp that is hardly ever on, for example in the storeroom, you are better off with a normal LED bulb." },
      { f: "What happens if I switch off the normal light switch?", a: "Then the bulb has no power and no longer reacts to the app, schedule or voice. So leave the switch on and switch with the app or a smart switch. You simply stick the Hue switch on the wall, for example right next to the old one. There are also modules that go behind the normal light switch. But for those you work on the mains wiring, so if in doubt leave it to an electrician." },
      { f: "What happens if the internet goes down?", a: "According to the manufacturer, with the Hue Bridge you can control your light even without the internet. In the Stiftung Warentest test, however, the Wi-Fi bulbs only reacted with a delay when the internet was down. And your normal light switch keeps working in any case." },
      { f: "Will they fit my lamps?", a: "Look at the cap of your old bulb. Most lamps have the large E27 screw cap, and the bulbs here are for that. Hue and WiZ also come for the small E14 cap and for GU10 spots, then check the cap in the name when you buy. In the UK many lamps use the B22 bayonet cap. Hue and WiZ also sell B22 versions, so check the cap in the name." },
      { f: "And in Austria and Switzerland?", a: "In Austria everything is the same as in Germany. In Switzerland the bulbs fit just the same, E27, E14 and GU10 are the same caps. You can also get Philips Hue and WiZ from Swiss retailers. If you order in Germany, look at the plug of the Bridge's power supply: a flat Europlug with two thin pins also fits Swiss sockets, a thick Schuko plug does not." },
      { f: "How did you choose the bulbs?", a: "I have been using Philips Hue myself for about ten years. For the selection I read the test by Stiftung Warentest, Germany's best-known consumer tester (issue 2/2024, ten bulbs). Only two were good there: Philips Hue with Bridge as test winner and WiZ as the best bulb without a hub. Because the test is almost three years old, I also read newer tests from the tech sites nextpit, TechRadar and PCWorld, for example on Hue Essential and MotionAware, and compared the manufacturers' details. I couldn't find the new IKEA bulbs on Amazon, you can get them at IKEA itself." }
    ],
    vergleich: {
      vorherTitel: "With normal bulbs",
      vorher: [
        "In the evening you fumble for the light switch in the dark",
        "The light is always the same, whether you are cooking or relaxing",
        "When you are out you remember that a light is still on at home"
      ],
      nachher: [
        "The light comes on by itself on your schedule or when you move",
        "With one tap you get the right lighting mood",
        "With one tap in the app you switch everything off, even when you are out"
      ]
    },
    video: "smarte-lampen",
    preisstand: "Oktober 2026"
  },
  {
    id: "sparduschkopf",
    name: "Water-saving shower head",
    kurzname: "a water-saving shower head",
    kategorie: "Household",
    symbol: "🚿",
    bild: "",
    kurz: "A shower head that lets through much less hot water. You shower as usual and still pay less.",
    warum: "Older shower heads often let through 10 to 15 litres per minute, good water-saving ones less than 9. And every litre you don't use doesn't have to be heated either. That saves water and energy without you having to do anything. You swap the shower head yourself in a few minutes, usually without any tools.",
    statt: "Instead of 15 litres of hot water per minute",
    nutzen: "Less hot water with every shower, same length of shower.",
    spart: ["geld"],
    fuer: [
      "Your shower head is already older and lets through a lot of water",
      "Your water is heated with electricity, then you save the most",
      "You want to save without showering shorter or colder"
    ],
    nachteile: [
      "It often doesn't work with older hydraulic instantaneous water heaters: they usually only switch on from about 8 litres per minute",
      "If your shower head already lets through less than 10 litres per minute, you only save a little",
      "It doesn't save you time or effort. This one is only about money, water and energy"
    ],
    modelle: [
      {
        stufe: "Budget", spanne: "up to €30",
        name: "Duravit 3jet 110 MinusFlow", preis: 25, empfohlen: true,
        punkte: [
          "Good at German consumer magazine Stiftung Warentest (grade 1.9, issue 4/2023), level with the best in the test",
          "Lets through 8.8 litres per minute in the test, a flow limiter is built in",
          "Three spray types, you switch between them with a dial",
          "Soft nubs on the nozzles: you simply rub off limescale"
        ],
        fuer: "For most people. My tip, because it did just as well in the test as the more expensive models.",
        hinweis: "It lets through a little more water than the other two, just under 9 litres per minute. The difference is small.",
        link: amazon("duravit 3jet 110 minusflow", "duravit 3jet 110 minusflow")
      },
      {
        stufe: "Mid-range", spanne: "€30 to €50",
        name: "Hansgrohe Pulsify Select S EcoSmart", preis: 38,
        punkte: [
          "Good at Stiftung Warentest (grade 1.9, issue 4/2023)",
          "Lets through 8.6 litres per minute in the test, with a flow limiter",
          "Three spray types, you switch between them at the push of a button",
          "Also suitable for instantaneous water heaters, according to the manufacturer"
        ],
        fuer: "If you prefer to switch the spray type with a button.",
        hinweis: "When buying, look for “EcoSmart” in the name. This is the version that was tested; according to the manufacturer the one without EcoSmart lets through considerably more water.",
        link: amazon("hansgrohe pulsify select s ecosmart", "hansgrohe pulsify select s 105 ecosmart")
      },
      {
        stufe: "Premium", spanne: "from €50",
        name: "Grohe Vitalio SmartActive 130 Cube", preis: 70,
        punkte: [
          "Good at Stiftung Warentest (issue 4/2023)",
          "Lets through the least of the three in the test, just over 8 litres per minute",
          "Square hand shower with three spray types",
          "Easy to clean and descale"
        ],
        fuer: "If you like the square shape.",
        hinweis: "More expensive doesn't mean better here: in the test it didn't do better than the cheap Duravit. It hardly saves more water either. On Amazon it is sometimes called “150 Cube”. What matters is the article number 26595000.",
        link: amazon("grohe vitalio smartactive 130 cube", "grohe vitalio smartactive 130 cube")
      }
    ],
    fragen: [
      { f: "How much do I really save?", a: "That depends on how much your current shower head lets through, how long you shower and how your water is heated. You save the most if it's heated with electricity, for example in an instantaneous water heater. In a model case, Stiftung Warentest arrived at up to 345 euros per person per year. The calculator shows how much it is for you." },
      { f: "Does it work with my instantaneous water heater?", a: "With an electronic instantaneous water heater, usually yes. But older hydraulic units usually only switch on from about 8 litres per minute. The three models here are just above that in the test, which may or may not be enough. This is how you can tell the type: hydraulic ones usually have only a switch with two levels; with electronic ones you set the temperature in degrees. The rating plate tells you for sure. With a hydraulic one, it's best to order with a right of return and try it out. If the water stays cold or lukewarm, send the shower head back." },
      { f: "Does it fit my hose?", a: "Almost always. Shower hoses and hand showers have a standardised half-inch thread. You don't need to worry about it when buying." },
      { f: "How do I swap the shower head?", a: "Turn the old shower head anticlockwise off the hose; it usually comes off by hand. If it's stuck, use pliers with a soft cloth in between so nothing gets scratched. Check the washer in the nut on the hose and screw the new shower head on hand-tight. Keep the old shower head, then you can screw it back on when you move out." },
      { f: "Is showering with it worse?", a: "Hardly. Stiftung Warentest had test persons shower with all the shower heads and also checked how well shampoo rinses out of long hair. Only with very economical models at 7 litres per minute or less does that take a little longer. The three here let through more." },
      { f: "My water is very hard. What should I look for?", a: "Choose a shower head with soft nubs on the nozzles. You then simply rub the limescale off with your finger. Stiftung Warentest included such nubs in its rating. According to the manufacturers, all three models here have this rub-off function." },
      { f: "Why is the test from 2023?", a: "Stiftung Warentest last tested water-saving shower heads in March 2023 (issue 4/2023); there is no newer test. Two of the most economical models at the time are no longer available. The three here are still available." },
      { f: "Why isn't the Ikea shower head included?", a: "The Ikea Brogrund was good at Stiftung Warentest and one of the cheapest good shower heads in the test. But it's only available at Ikea, so I can't link it here. If you're passing by anyway, it's a good choice." }
    ],
    profitipp: {
      titel: "Measure first, then swap",
      text: "This way you know in one minute whether a water-saving shower head is worth it for you at all:",
      liste: [
        "Turn the shower on the way you usually shower",
        "Let it run into a bucket for 30 seconds",
        "Multiply the litres in the bucket by two: that's how many litres per minute your shower head lets through",
        "If it's more than 10, swapping is worth it"
      ]
    },
    rechner: "sparduschkopf",
    video: "sparduschkopf"
  },
  {
    id: "balkonkraftwerk",
    name: "Plug-in solar kit",
    kurzname: "a plug-in solar kit",
    kategorie: "Household",
    symbol: "☀️",
    bild: "",
    kurz: "Two solar panels with a plug. During the day they make electricity, and you use it straight away in your home.",
    warum: "A plug-in solar kit (also called balcony solar) consists of two solar panels and a small inverter. You plug it into a socket, and whatever is running in your home uses the power from outside first. The fridge, router and standby devices need power all day, and over a year that adds up. In Germany you may connect a kit with up to 960 watts of panel output to a normal socket and only register it online. With a battery as well, you can use the power in the evening too.",
    statt: "Instead of buying every kilowatt hour",
    nutzen: "Your own electricity during the day, a smaller electricity bill every year.",
    spart: ["geld"],
    fuer: [
      "You have a balcony, a terrace or a flat roof with lots of sun, ideally facing south",
      "Electricity is used at your place during the day too, for example when working from home",
      "You rent: in Germany the landlord may now only refuse if it would be unreasonable for them",
      "You're hardly at home during the day and need the power more in the evening: then a kit with a battery suits you"
    ],
    nachteile: [
      "A mount for the panels is not included with the kits here. You buy one to suit your balcony, roof or garden",
      "On a balcony railing it delivers much less than when tilted, and nobody has independently tested railing mounts",
      "Without a battery, what you don't use straight away goes into the grid, and in Germany you usually get no money for it",
      "For Switzerland there is currently no suitable kit on Amazon, because different rules apply there. I'm looking for a solution",
      "A battery for the evening costs more than the whole kit and so pays for itself more slowly. If you mainly need the power during the day, you can do without"
    ],
    gruppen: [
      { name: "Without battery", text: "Two panels and a small inverter for the socket. It's cheap and you get your money back quickly. You use the power while the sun is shining, and whatever is left over goes into the grid.", ohne: "speicher" },
      { name: "With battery", text: "These batteries already have the inverter built in: the panels connect to the battery, and only the battery goes into the socket. What's left over at midday charges the battery, and in the evening you use the power yourselves. If you already have a kit, you can usually keep using its panels." }
    ],
    modelle: [
      {
        gruppe: "Without battery",
        stufe: "Budget", spanne: "under €400",
        name: "Solakon onLite 900 W", preis: 270, preisText: "ca. 250 bis 300 €", empfohlen: true,
        punkte: [
          "900 watts of panel output: that means in Germany you may connect it to a normal socket",
          "800-watt inverter, that is the maximum in Germany",
          "Its bigger sister kit, the onBasic with 1,000 watts, was good in the home&smart field test 2026",
          "Solakon sells the kit on Amazon itself"
        ],
        fuer: "My tip for a normal socket: it stays below the 960 watts, and Solakon sells it itself.",
        hinweis: "Nobody has independently tested the kit itself yet. A mount for the panels is not included. It is not made for Switzerland.",
        link: amazon("solakon onlite 900", "solakon onlite 900"),
        alternativen: [
          { name: "SUNNIVA 920 W with EcoFlow inverter", preis: 289, text: "With 920 watts it also fits a normal socket. smartzone.de measured the EcoFlow inverter itself: well made, economical in standby and not too hot even under full load. Here too there is no test of the whole kit, and no mount is included.", link: amazon("sunniva 920 ecoflow", "sunniva 920 ecoflow") }
        ]
      },
      {
        gruppe: "With battery",
        stufe: "Budget", spanne: "under €500",
        name: "Zendure SolarFlow 800 Plus", preis: 449, preisText: "ca. 400 bis 500 €", empfohlen: true,
        punkte: [
          "Best value at TechStage by heise, and a best-value tip at smartzone.de",
          "Battery with 1.92 kWh that loses little: smartzone.de measured only about 16 percent loss for charging and discharging",
          "Two inputs for panels and a built-in 800-watt inverter, also approved in Austria",
          "With Zendure's reading head on your electricity meter, you don't need an electrician"
        ],
        fuer: "My tip for a balcony with two panels: it costs the least and still does well in tests.",
        hinweis: "Panels and reading head are not included. Use two panels with no more than 960 watts together, or the ones from your kit. It has no backup socket for power cuts. Stiftung Warentest did not test it. It rated the bigger SolarFlow 800 Pro poor in March 2026, mainly because of too much interference.",
        link: amazon("zendure solarflow 800 plus", "zendure solarflow 800 plus")
      },
      {
        gruppe: "With battery",
        stufe: "Mid-range", spanne: "€500 to €1,000",
        name: "Solakon ONE with 900-watt panels", preis: 895, preisText: "ca. 850 bis 1.000 €",
        punkte: [
          "TechStage, PC-WELT and techtest.org tested it and recommend it",
          "Comes with two panels totalling 900 watts, which fits a normal socket",
          "Battery with 2.11 kWh and four inputs for panels",
          "Socket on the unit that keeps supplying power during a power cut"
        ],
        fuer: "For you if you want everything in one bundle and would like a backup socket for power cuts.",
        hinweis: "Stiftung Warentest did not test it. A mount for the panels is not included, and you buy a reading head for the electricity meter separately. In Austria it is not on the inverter list, so there the Zendure is the safer choice.",
        link: amazon("solakon one", "solakon one")
      },
      {
        gruppe: "With battery",
        stufe: "Premium", spanne: "from €900",
        name: "Anker SOLIX Solarbank 3 Pro", preis: 899, preisText: "ca. 900 bis 1.000 €",
        punkte: [
          "Best of five batteries at Stiftung Warentest, the only one rated satisfactory (issue 4/2026)",
          "ComputerBase and Notebookcheck also praise the technology",
          "Large 2.69 kWh battery and four inputs for panels with up to 3,600 watts",
          "Backup socket on the unit for power cuts, up to 1,200 watts"
        ],
        fuer: "For you if you want to connect four panels. Then it gets the most out of them.",
        hinweis: "For two panels it is too big: a cheaper battery pays for itself faster there. With four panels it belongs on a dedicated feed-in socket. Panels and a meter for the fuse box are not included: buy the Anker Smart Meter as well and have it installed at the same time when the qualified electrician connects the socket.",
        link: amazon("anker solix solarbank 3 pro", "anker solix solarbank 3 pro")
      }
    ],
    ohneTeuer: { stufe: "Pricier kits", titel: "No recommendation", text: "A pricier kit without a battery hardly gets you more power from a normal socket, because more than 960 watts of panels and 800 watts of inverter are not allowed there. To use more of your own power, you need a battery: see the group “With battery”." },
    fragen: [
      { f: "How much do I really save?", a: "That depends on where the panels are, which way they face and how much electricity you use during the day. Sample calculations by the consumer advice centre of North Rhine-Westphalia (Verbraucherzentrale NRW), C.A.R.M.E.N. and eza! come to around 100 to 150 euros a year for an 800-watt kit. You get the most out of it when the panels are tilted towards the south and a lot is running at your place during the day. With a battery you save more, but it also costs more. The calculator shows how much it is for you, with a battery too." },
      { f: "How did you choose the kits and batteries?", a: "Stiftung Warentest tested eight kits in 2025. The two good ones, from GreenSolar and Heckert, are no longer available on Amazon in the version that was tested. So I searched Amazon for kits without a battery that are currently available, and looked for tests of each one on other sites. I only found a test for the Solakon onBasic with 1,000 watts. It was good in the home&smart field test, but has too much panel output for a normal socket. That is why its smaller sister kit with 900 watts is here. A test of the whole kit is missing for both kits here. smartzone.de did measure the inverter in the SUNNIVA kit itself, though, and praised it. For the batteries I read tests by TechStage (heise), Notebookcheck, ComputerBase, PC-WELT, techtest.org, smartzone.de and Stiftung Warentest. Only batteries that did well in several tests and are available on Amazon are here. Stiftung Warentest rated the Anker best; it did not test the other two." },
      { f: "Is a normal socket enough?", a: "In Germany yes, as long as the panels together have no more than 960 watts. That is what the standard in force since December 2025 says. Both kits here are below that. Many kits on Amazon have 1,000 watts or more. According to the standard, those belong on a dedicated feed-in socket, for example from Wieland, installed by a qualified electrician. Some city subsidy programmes require such a plug even for smaller kits. So check beforehand if you want a subsidy." },
      { f: "What do I need to register in Germany?", a: "Only the Marktstammdatenregister of the Bundesnetzagentur (Germany's official register of power plants), and there is a simple online form for it. You no longer have to register it separately with the grid operator. If you still have an old meter, it may run backwards for now until the grid operator replaces it. Allowed are 800 watts at the inverter and panels with up to 2,000 watts in total. Also let your home contents and your liability insurance know. With a battery there is a bit more to it, see the next question." },
      { f: "What applies in Germany with a battery?", a: "You also enter the battery in the Marktstammdatenregister, where it counts as a separate unit. Many grid operators also want it reported via a short form, and some require an electrician to connect it. So ask your grid operator before buying. A dedicated standard for these small batteries is still being drawn up. If it is to go on a normal socket, it may feed at most 800 watts into the grid, and the panels may have no more than 960 watts together." },
      { f: "How does the battery know how much power you need right now?", a: "A small device on the electricity meter measures it. The simplest is a reading head that sticks to your digital electricity meter with a magnet. You attach it yourself, without an electrician. Many meters need a PIN for this. You get it free of charge from the meter operator, usually your grid operator. A meter in the fuse box, like the one that comes with some batteries, may only be installed by a qualified electrician." },
      { f: "Where do I put the battery?", a: "Ideally protected from rain and blazing sun, for example under a canopy or in the garage, and close enough to the panels for the cables to reach. The batteries are approved for outdoor use, but at Stiftung Warentest water got into the socket on the unit in four out of five during heavy rain." },
      { f: "Am I allowed to as a tenant?", a: "Yes, you have to ask first. Since October 2024, however, landlords and owners' associations in Germany may only refuse if it would be unreasonable for them. Not liking the look of it is not a reason." },
      { f: "Which mount do I need?", a: "None is included with the kits here. Buy one that fits your spot exactly: balcony railing, wall, flat roof or garden. Unfortunately there are no independent tests of mounts on their own. Stiftung Warentest tested kits with flat-roof mounts in 2025, and in five out of eight the mounts buckled or broke in the simulated storm. On a railing it is trickier, because there may be people or cars below. If you are unsure, have a specialist company install it." },
      { f: "Is a battery worth it?", a: "With two panels it pays for itself more slowly than the kit alone, because it costs more than the kit. According to the consumer advice centre and the TÜV association, it is more worthwhile for larger systems, for example with four panels. It brings the most if you use little power during the day and more in the evening. Work it out for yourself in the calculator: choose “With battery” there. Then you also see after how many years the battery alone has paid for itself." },
      { f: "What does Stiftung Warentest say about the batteries?", a: "It tested five batteries in March 2026. The Anker was best, the only one rated satisfactory. Three were poor because they sent out too much interference, which can disrupt Wi-Fi, for example. In four out of five, water got into the socket on the unit during heavy rain. Other test sites have tested more batteries and rated many of them well. In the tests I read, however, interference was not measured." },
      { f: "And in Switzerland?", a: "Stricter rules apply there: at most 600 watts per electricity meter, a Swiss plug and residual current protection (RCD). Before switching on, you report the system in writing to your grid operator, and as a tenant you need your landlord's consent. In return, the grid operator has to take and pay for the power you feed into the grid. A battery is allowed there if everything together feeds in no more than 600 watts and there is a declaration of conformity for the whole kit. Include it when you report the system. The kits and batteries here deliver up to 800 watts and have a German plug, so they are not allowed in Switzerland as they are. A kit made for Switzerland is currently not available on Amazon. I'm looking for a good kit that you can also buy in Switzerland." },
      { f: "And in Austria?", a: "In Austria 800 watts are allowed. You don't need a permit, but you must report the system to your grid operator two weeks before switching it on. Grid operators see differently whether a normal Schuko plug (type F) is enough. So ask yours beforehand. In a condominium, the consent of the other owners counts as given if they don't object within two months. A battery is allowed if everything together can deliver at most 800 watts. What counts is what the inverter can do according to its data sheet. If it is only limited to 800 watts by an app, that isn't enough for some grid operators. So include the battery when you register and attach the data sheet." },
      { f: "Which battery suits Austria?", a: "The Zendure suits best. It is on the Austrian inverter list with 800 watts, and according to the manufacturer, too, 800 watts is its maximum. Your grid operator doesn't have to check devices on this list again one by one. The Anker is on the list as well, but according to its data sheet it can do up to 1,200 watts. Only a setting in the app limits it to 800 watts, so ask your grid operator beforehand. I didn't find the Solakon ONE on the list." },
      { f: "Does this also apply in other countries?", a: "No. The rules here apply to Germany, Austria and Switzerland. If you live elsewhere, ask your grid operator before buying what is allowed." }
    ],
    profitipp: {
      titel: "Use the power at midday",
      text: "Without a battery, you only save with the power you use at the same moment. This is how you use more of it yourself:",
      liste: [
        "Run the dishwasher and washing machine around midday, when the sun is strongest",
        "If you are out during the day, start them with the delay timer or a timer switch",
        "Charge batteries like the one from your e-bike at midday rather than in the evening"
      ]
    },
    rechner: "balkonkraftwerk",
    video: "balkonkraftwerk",
    preisstand: "Oktober 2026"
  },
  {
    id: "akkusauger",
    name: "Cordless vacuum",
    kurzname: "a cordless vacuum",
    kategorie: "Household",
    symbol: "🧹",
    bild: "",
    kurz: "A light vacuum cleaner without a cable. It hangs on the wall or stands in its charging station, charged, and in one move you turn it into a handheld vacuum.",
    warum: "No cable, no re-plugging, no heavy vacuum you first have to drag out of the cupboard. You simply take it off the wall and start vacuuming, even if it's just the crumbs under the dining table. As a handheld you can use it on the sofa, the stairs and in the car.",
    statt: "Instead of a cable and a heavy vacuum",
    nutzen: "Take it off the wall, vacuum, hang it back.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "You often vacuum in between, for example crumbs or pet hair",
      "You have stairs or several floors",
      "You want to get the sofa and car clean quickly too, or a robot vacuum is too expensive for you right now"
    ],
    nachteile: [
      "The battery life manufacturers state usually applies to the lowest setting. On the highest setting it's often only 10 to 15 minutes. If you have a large home, choose a model with a second battery",
      "The dust container is small, usually under a litre. Emptying it gets a bit dusty",
      "After a few years the battery weakens, and a new one costs extra. Make sure replacement batteries are available"
    ],
    modelle: [
      {
        stufe: "Budget", spanne: "up to €200",
        name: "AEG Ergorapido CX7-2-45AN", preis: 150, preisText: "approx. €145 to €180",
        punkte: [
          "2-in-1: the handheld sits inside the vacuum, you simply take it out",
          "Stands up on its own, so you don't need a wall bracket",
          "According to the manufacturer, the battery lasts up to 45 minutes"
        ],
        fuer: "For small flats or as a second vacuum for quick jobs in between.",
        hinweis: "Only adequate in the partial result so far at smarthomeassistent.de (grade 3.6). On carpet it vacuums less well there than on laminate.",
        link: amazon("aeg ergorapido cx7-2-45an"),
        alternativen: [
          { name: "AEG Serie 6000 (AP61CB21DB)", preis: 115, text: "The battery can be removed and swapped.", link: amazon("aeg 6000 ap61cb21db") }
        ]
      },
      {
        stufe: "Mid-range", spanne: "€200 to €400",
        name: "Rowenta X-Force Flex 13.60 Allergy", preis: 259, preisText: "approx. €250 to €270", empfohlen: true,
        punkte: [
          "Good at Stiftung Warentest, Germany's best-known consumer tester (grade 2.5, issue 2/2025)",
          "The tube bends: you vacuum under the sofa and bed without bending down",
          "According to the manufacturer, the battery lasts up to 60 minutes",
          "Turns into a handheld for the sofa, stairs and car"
        ],
        fuer: "For most homes. My tip, because it's good in the test and costs much less than the test winner.",
        link: amazon("rowenta x-force flex 13.60 allergy"),
        alternativen: [
          { name: "Bosch Unlimited 7 (BSS715CARP)", preis: 359, text: "Also good at Stiftung Warentest (grade 2.4, issue 2/2026). The battery also fits many Bosch tools for home and garden.", link: amazon("bosch unlimited 7 bss715carp") },
          { name: "Miele Duoflex HX1 Cat & Dog", preis: 416, text: "Good at Stiftung Warentest (grade 2.3, issue 2/2026).", link: amazon("miele duoflex hx1 cat dog") }
        ]
      },
      {
        stufe: "Premium", spanne: "from €400",
        name: "Bosch Unlimited 10 (BTS1042WAC)", preis: 600, preisText: "approx. €480 to €700",
        punkte: [
          "Test winner at Stiftung Warentest (grade 2.2, issue 2/2026)",
          "Two batteries, according to the manufacturer up to 80 minutes each on the lowest setting",
          "Charges in about an hour",
          "Compresses the dust in the container, so you empty it less often"
        ],
        fuer: "For large homes, houses with several floors and households with pets.",
        link: amazon("bosch unlimited 10 bts1042wac"),
        alternativen: [
          { name: "Miele Duoflex HX1 Total Care", preis: 470, text: "Also good at Stiftung Warentest (grade 2.3, issue 2/2026).", link: amazon("miele duoflex hx1 total care") }
        ]
      }
    ],
    fragen: [
      { f: "Will it replace my normal vacuum cleaner?", a: "A good one does, especially on hard floors and carpets that aren't too thick. According to Stiftung Warentest, the best cordless vacuums keep up with classic vacuum cleaners. But not all of them are good: in the test in issue 2/2026, some models were only adequate or even poor." },
      { f: "How long does the battery last?", a: "What manufacturers state usually applies to the lowest setting. On the highest setting it's often only 10 to 15 minutes. The Bosch Unlimited 10 comes with a second battery, so you can vacuum twice as long." },
      { f: "How do I empty the dust container?", a: "Hold it over the bin and open the container, and the dust falls out. It gets a bit dusty. If you're allergic to house dust, it's best to empty it outside or let someone else do it." },
      { f: "Can it handle pet hair?", a: "Not all equally well. At Stiftung Warentest, the Bosch Unlimited 10, the two Miele models and the Rowenta X-Force Flex 13.60 reliably removed pet hair, while others struggled. If long hair wraps around the brush, you cut it open and pull it off." },
      { f: "Are there any that mop at the same time?", a: "Yes, so-called wet and dry vacuums, for example from Tineco or Dreame. They vacuum and mop at the same time and are worth it with lots of hard floors. But if you don't want to do anything yourself any more, take a look at the robot vacuum. Since I've had one, I don't vacuum myself any more." },
      { f: "How long does a vacuum like this last?", a: "Usually the battery is the first thing to weaken, often after a few years. So make sure you can replace it and that replacement batteries are available. Bosch even gives a ten-year guarantee on the motor of the Unlimited 10." }
    ],
    rechner: "akkusauger",
    video: "akkusauger"
  },
  {
    id: "reiskocher",
    name: "Rice cooker",
    kurzname: "a rice cooker",
    kategorie: "Kitchen",
    symbol: "🍚",
    bild: "",
    kurz: "A small appliance that cooks rice by itself and keeps it warm afterwards. With many models you can steam vegetables or fish in a basket on top at the same time.",
    warum: "Rice and water in, press the button, done. You don't have to stand next to it: with the right amount of water nothing boils over, and at Stiftung Warentest nothing burned on in any of the cookers. Once the water has been absorbed, it switches to keep-warm by itself. So the rice waits for you, not you for the rice.",
    statt: "Instead of a pot that boils over",
    nutzen: "Press the button, it does the rest.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "You like eating rice and eat it often",
      "You want rice that turns out equally good every time",
      "You want to steam vegetables at the same time or get on with something else"
    ],
    nachteile: [
      "Many cookers are slower than a pot: at Stiftung Warentest they took 13 minutes to a good hour, depending on the model, the rice and the amount. But you don't have to stand next to it during that time",
      "It needs some space on the worktop or in the cupboard",
      "A thin crust often forms at the bottom. With good cookers it stays light, with weaker ones it turns brownish"
    ],
    modelle: [
      {
        stufe: "Budget", spanne: "up to €70",
        name: "Gastroback Design Reiskocher (42507)", preis: 61,
        punkte: [
          "The cheapest good rice cooker at Stiftung Warentest, Germany's best-known consumer tester (issue 5/2026)",
          "Fast: in the test it was ready after 16 to 34 minutes, depending on the amount and the rice",
          "With a steamer basket for vegetables",
          "Keeps the rice warm afterwards"
        ],
        fuer: "For you if you simply want good rice, without any frills.",
        hinweis: "No timer and no programmes: it starts as soon as you switch it on.",
        link: amazon("gastroback 42507 reiskocher", "gastroback 42507 rice cooker")
      },
      {
        stufe: "Mid-range", spanne: "€70 to €150",
        name: "Yum Asia Tsuki Mini", preis: 100, preisText: "approx. €100", empfohlen: true,
        punkte: [
          "Fuzzy logic: it adjusts heat and time to the rice by itself",
          "7 programmes, for example for long-grain, sushi and brown rice, porridge and slow cooking",
          "With a timer of up to 24 hours, then it keeps the rice warm",
          "Stylish matt look in white or grey, with a ceramic inner pot"
        ],
        fuer: "For singles and couples. My tip, because I own it myself and think it's great. It also looks really stylish, and you can choose between two colours.",
        hinweis: "It's small: up to 2.5 measuring cups of rice, enough for 1 to 2 people. According to the manufacturer, white rice takes about 30 to 40 minutes. You wash the ceramic pot by hand.",
        link: amazon("yum asia tsuki mini reiskocher", "yum asia tsuki mini rice cooker"),
        alternativen: [
          { name: "Panasonic SR-DA152", preis: 90, text: "Test winner at Stiftung Warentest (good, grade 2.2, issue 5/2026). Bigger (1.5 litres), with a timer and a steamer basket. The better choice for families.", link: amazon("panasonic sr-da152 reiskocher", "panasonic sr-da152 rice cooker") },
          { name: "Rommelsbacher MRK 650", preisText: "approx. €85 to €100", text: "Also a test winner at Stiftung Warentest (good, grade 2.2, issue 5/2026). With 12 programmes, a steamer basket and a delay timer of up to 24 hours.", link: amazon("rommelsbacher mrk 650 reiskocher", "rommelsbacher mrk 650 rice cooker") },
          { name: "Cosori Reiskocher (CRC-R501)", preis: 99, text: "Also good at Stiftung Warentest (issue 5/2026), with a steamer basket and lots of programmes. But slow: in the test it took 43 to 68 minutes.", link: amazon("cosori reiskocher crc-r501", "cosori rice cooker crc-r501") }
        ]
      },
      {
        stufe: "Premium", spanne: "from €150",
        name: "Yum Asia Bamboo", preis: 250, preisText: "approx. €250",
        punkte: [
          "Heats by induction: the pot itself gets hot, not just a heating plate underneath. That spreads the heat more evenly",
          "Pot with a ceramic coating",
          "Lots of programmes for types of rice, plus steaming, slow cooking and baking",
          "Test winner at ETM Testmagazin (very good, issue 1/2024)"
        ],
        fuer: "For you if you eat rice very often and want the best.",
        hinweis: "Stiftung Warentest didn't test it. According to ETM Testmagazin, it could keep the rice warm better. Honestly, for most people the mid-range is more than enough.",
        link: amazon("yum asia bamboo reiskocher induktion", "yum asia bamboo induction rice cooker")
      }
    ],
    fragen: [
      { f: "How much water do I add?", a: "Lines inside the pot show you. You measure the rice with the cup that comes with it and pour in water up to the matching line. Stick to that and it's right almost every time." },
      { f: "Do I have to wash the rice first?", a: "Yes, a quick rinse is worth it: then it sticks less and is less likely to boil over. Tip it into a sieve and rinse it with cold water until the water is almost clear." },
      { f: "Can I cook vegetables or fish in it too?", a: "Yes, if your appliance has a steamer basket. Almost all do, the Tsuki Mini doesn't. It goes on top of the pot, and on many cookers vegetables or fish steam in it while the rice cooks below. Whether the vegetables stay crisp depends on the cooker: at Stiftung Warentest, only six cookers managed crisp green broccoli (issue 5/2026)." },
      { f: "How long can the rice stay warm?", a: "Not too long. Germany's Federal Institute for Risk Assessment advises eating food that is kept warm no later than three hours after cooking, and it should stay above 65 degrees. Put leftovers in the fridge quickly and eat them within a day. Cooked rice shouldn't sit around lukewarm, or germs can grow." },
      { f: "Is the coating safe?", a: "On most cookers, yes. But Stiftung Warentest found that much more aluminium leaches out of the coating on two rice cookers from Reishunger than on the other cookers, even though the limit is met (issue 5/2026). So I don't recommend those. Whatever the cooker: no metal spoons and no scouring pads, so that the coating lasts a long time." },
      { f: "Does rice from a rice cooker taste better?", a: "It depends on the cooker. A rice cooker controls the heat itself and switches to keep-warm as soon as the water has been absorbed. But not every cooker does this well: at Stiftung Warentest only 6 of 13 rice cookers cooked rice well, including the two test winners (issue 5/2026). Nothing burned on in any of them." }
    ],
    rechner: "reiskocher",
    video: "reiskocher"
  },
  {
    id: "kaffeevollautomat",
    name: "Bean-to-cup coffee machine",
    kurzname: "a bean-to-cup machine",
    kategorie: "Kitchen",
    symbol: "☕",
    bild: "",
    kurz: "A coffee machine that grinds the beans fresh and makes you espresso, coffee or cappuccino at the push of a button.",
    warum: "You press a button and the machine does the rest: grinding, brewing and, with the machines here, frothing the milk too. A cup made from beans costs much less than a branded capsule or a cappuccino in a café. And there's no more capsule waste either.",
    statt: "Instead of capsules and coffee to go",
    nutzen: "Freshly ground coffee and cappuccino at the push of a button, with no capsules at all.",
    spart: ["geld"],
    fuer: [
      "You drink coffee every day, often with milk",
      "You currently buy branded capsules or often get coffee on the go",
      "You want cappuccino without frothing the milk yourself"
    ],
    nachteile: [
      "You need a few quick steps every day: empty the coffee grounds and the drip tray, and rinse the milk system after milk drinks",
      "If you like filter coffee or cheap capsules from a discount supermarket, it won't save you any money",
      "It costs much more to buy than a capsule machine and takes up space: the machines here are 20 to 26 centimetres wide and 44 to 47 centimetres deep"
    ],
    gruppen: [
      { name: "With milk carafe", text: "You pour milk into a carafe and clip it onto the front of the machine. Afterwards you put the carafe with the leftover milk in the fridge and rinse it regularly. Pouring and rinsing are mainly worth it if you drink a lot of milk coffee. Good machines with a carafe start at around 400 euros." },
      { name: "With milk tube", text: "A thin tube draws the milk straight from the milk carton or from a container next to the machine. You don't pour anything and don't rinse a carafe. That's why the tube is better if you only drink milk coffee now and then. But it has to be flushed after milk drinks and cleaned thoroughly on a regular basis, otherwise germs build up. Good machines with a tube cost more: the cheapest one here costs a little over 500 euros." }
    ],
    modelle: [
      {
        gruppe: "With milk carafe",
        stufe: "Budget", spanne: "up to €450",
        name: "De'Longhi Magnifica Start", preis: 420, preisText: "ca. 400 bis 420 €",
        punkte: [
          "Good at Stiftung Warentest (grade 2.3, autumn 2024), one of the cheapest good machines in the test",
          "Cappuccino at the push of a button: it froths the milk from the carafe itself",
          "You can take out the brewing unit to rinse it"
        ],
        fuer: "If you mainly drink espresso, coffee and cappuccino and want to spend little.",
        hinweis: "There are only four drinks at the push of a button: espresso, coffee, cappuccino and hot water. The ECAM220.60.B was tested. The link goes to the ECAM222.60.BG, which according to De'Longhi has the same features. Other versions of the Magnifica Start only have a wand you use to froth the milk yourself.",
        link: amazon("de'longhi magnifica start ecam222.60.bg", "de'longhi magnifica start lattecrema")
      },
      {
        gruppe: "With milk carafe",
        stufe: "Mid-range", spanne: "€450 to €650",
        name: "De'Longhi Magnifica Evo Next", preis: 570, preisText: "ca. 430 bis 570 €", empfohlen: true,
        punkte: [
          "Good at Stiftung Warentest (grade 2.1, June 2025), just behind the two test winners",
          "According to Stiftung Warentest, it froths the milk very finely and creamily",
          "13 drinks at the push of a button: twelve coffee drinks and hot water",
          "You can take out the brewing unit to rinse it"
        ],
        fuer: "For most people. My tip, because in the test it did almost as well as the test winners, which cost a lot more.",
        hinweis: "The ECAM310.80.SB in silver and black was tested. The link goes to the ECAM312.80.TB in titanium, which according to De'Longhi has the same features. According to De'Longhi, the ECAM310.60.B only makes ten drinks at the push of a button.",
        link: amazon("de'longhi magnifica evo next ecam312.80.tb", "de'longhi magnifica evo next"),
        alternativen: [
          { name: "De'Longhi Rivelia", preis: 600, text: "Test winner in autumn 2024 with the same grade 2.1. It has two bean containers, so you can switch quickly between two kinds, and a larger touch display. It usually costs a little more. The black EXAM440.55.B was tested. The link goes to the white EXAM440.55.W, which according to De'Longhi also has 16 drinks and two bean containers.", link: amazon("de'longhi rivelia exam440.55.w", "de'longhi rivelia") }
        ]
      },
      {
        gruppe: "With milk carafe",
        stufe: "Premium", spanne: "from €650",
        name: "De'Longhi Eletta Explore Cold Brew", preis: 800, preisText: "ca. 800 bis 900 €",
        punkte: [
          "Test winner at Stiftung Warentest (good, July 2026), together with the more expensive Eletta Ultra",
          "Also makes cold drinks: cold milk foam and cold brew",
          "According to the manufacturer, over 50 drinks, operated by touch display or app",
          "You can take out the brewing unit to rinse it"
        ],
        fuer: "If you want lots of different drinks, cold ones in summer too.",
        hinweis: "Look for “Cold Brew” in the name. According to De'Longhi, this version got the top grade. The link goes to the ECAM450.65.G in dark grey.",
        link: amazon("de'longhi eletta explore cold brew ecam450.65.g", "de'longhi eletta explore cold brew")
      },
      {
        gruppe: "With milk tube",
        stufe: "Budget", spanne: "up to €550",
        name: "Melitta Latticia OT", preis: 550, preisText: "ca. 540 bis 600 €",
        punkte: [
          "Good at Stiftung Warentest (grade 2.3, June 2025)",
          "Only 20 centimetres wide, so it fits in small kitchens too",
          "Cappuccino and latte macchiato at the push of a button",
          "You can take out the brewing unit to rinse it"
        ],
        fuer: "If you want a machine with a tube and there's little space in your kitchen.",
        hinweis: "There are only five drinks at the push of a button: coffee, cappuccino, latte macchiato, milk foam and hot water. According to Melitta, you clean the tube by putting it in a glass of water and starting the cleaning programme.",
        link: amazon("melitta latticia ot f300-100", "melitta latticia ot")
      },
      {
        gruppe: "With milk tube",
        stufe: "Mid-range", spanne: "€550 to €650",
        name: "Siemens EQ500 TP516DX3", preis: 560, preisText: "ca. 545 bis 620 €",
        punkte: [
          "Good at Stiftung Warentest (grade 2.3, June 2025)",
          "According to Siemens, it cleans the milk system itself with steam after every milk drink",
          "Operated by colour display or app, according to Siemens up to 18 drinks",
          "You can take out the brewing unit to rinse it"
        ],
        fuer: "If you want a machine with a tube that flushes itself after every milk coffee. I've personally had the best experiences with Siemens coffee machines.",
        hinweis: "You put the tube into the milk carton or into a milk container. Look for “TP516DX3”: the cheaper EQ500 TP511E19 has no app and was not tested.",
        link: amazon("siemens eq500 tp516dx3", "siemens eq500")
      },
      {
        gruppe: "With milk tube",
        stufe: "Premium", spanne: "from €650",
        name: "Nivona NICR 790", preis: 750, preisText: "ca. 745 bis 850 €", empfohlen: true,
        punkte: [
          "Test winner at Stiftung Warentest (good, grade 2.0, June 2025)",
          "According to Nivona, you can also descale it with products without sulfamic acid",
          "Can also be operated by app via Bluetooth",
          "You can take out the brewing unit to rinse it"
        ],
        fuer: "My tip if you want a machine with a tube: it was test winner.",
        hinweis: "More expensive machines with a tube did no better in the test. You put the tube straight into the milk carton.",
        link: amazon("nivona nicr 790", "nivona nicr 790")
      }
    ],
    fragen: [
      { f: "Tube or carafe: which suits me?", a: "Both can be good: Stiftung Warentest had test winners with both systems, the Nivona with a tube in 2025 and the Eletta Explore with a carafe in 2026. The difference is in everyday use. You fill the carafe, put it in the fridge with the leftover milk afterwards and rinse it regularly. That's mainly worth it if you drink a lot of milk coffee. I've had good experiences with the De'Longhi Dynamica Plus, for example, which has a carafe. If you only have a milk coffee now and then, the tube is better: you put it into the milk carton and don't pour anything. In return, it has to be flushed after milk drinks and cleaned thoroughly on a regular basis. And with a carafe you get a good machine for a lot less." },
      { f: "How much do I save compared with capsules?", a: "A branded capsule costs around 40 cents, a cup from the bean-to-cup machine with beans, water and electricity about 15 cents. If you drink two cups a day, that's around 15 euros a month less, around 10 euros after descaler and cleaner. With cheap capsules from a discount supermarket, hardly anything is left. You save the most by replacing coffee on the go: a cappuccino in a café costs almost 4 euros on average. The calculator shows what it means for you. These are German prices." },
      { f: "Is it worth it compared with filter coffee too?", a: "Honestly, not in terms of money. According to Stiftung Warentest, filter coffee is the cheapest way to make coffee, partly because the machine costs little. According to Warentest, a bean-to-cup machine only pays off if a lot of coffee is drunk. In return, it grinds every cup fresh and makes you espresso and cappuccino at the push of a button." },
      { f: "How much work is the cleaning?", a: "Every day you empty the coffee grounds and the drip tray; many machines tell you when it's time. After milk drinks you rinse the milk system, on many machines at the push of a button, and the Siemens does it by itself. You take the carafe apart regularly and rinse it; for the tube there is a cleaning programme. Once a week you take out the brewing unit and rinse it under running water, without washing-up liquid. That works on all the machines here. You have to descale when the machine tells you to. For descaler, cleaner and water filters, reckon with roughly 30 to 120 euros a year." },
      { f: "Do I have to descale?", a: "Yes. Set the water hardness when you set it up; a test strip is usually included. Then the machine tells you in good time when it's due. With a water filter, according to the manufacturers, you have to descale less often. Use a product the manufacturer recommends for your machine. Stiftung Warentest advises descalers without sulfamic acid, because it harms aquatic life." },
      { f: "Which beans work?", a: "Espresso or crema beans, whichever you like. Don't use caramelised or flavoured beans: according to De'Longhi, they can clog the grinder. Very oily beans are no good either: according to Siemens, they don't slide into the grinder properly." },
      { f: "Why are all the machines with a carafe from De'Longhi?", a: "Because they did best in their price range at Stiftung Warentest: the Magnifica Start is one of the cheapest good machines, the Magnifica Evo Next came in just behind the test winners in 2025, and the Eletta Explore is the current test winner. Philips also makes a carafe, LatteGo, which you clip on and rinse quickly without any tube. But on the Philips 5500 that was tested, espresso and cappuccino only tasted average in the 2024 test." }
    ],
    profitipp: {
      titel: "Set the grind",
      text: "How finely the beans are ground changes the taste a lot. Just try it out, it costs you nothing:",
      liste: [
        "If the coffee tastes sour or watery, set it one step finer",
        "If it tastes bitter or only comes out drop by drop, set it one step coarser",
        "Only turn it while the grinder is running. That's what the manuals say",
        "You'll only taste the difference after two or three cups"
      ]
    },
    rechner: "kaffeevollautomat",
    video: "kaffeevollautomat"
  },
  {
    id: "kuechenmaschine-kochfunktion",
    name: "Food processor with cooking function",
    kurzname: "a cooking food processor",
    kategorie: "Kitchen",
    symbol: "🍲",
    bild: "",
    kurz: "One appliance that chops, stirs and cooks at the same time, all in the same bowl. The best-known one is the Thermomix.",
    warum: "Soup, sauce, risotto or rice pudding: the machine stirs and heats at the same time, and you no longer have to stand at the stove. It chops onions and vegetables first in the same bowl, and with many models you weigh the ingredients right in it too. Afterwards you mainly wash the mixing bowl instead of a board, a knife and a pan.",
    statt: "Instead of stirring at the stove",
    nutzen: "It stirs and cooks for you. You do something else.",
    spart: ["zeit", "muehe"],
    fokus: "zeit",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "You often cook soups, sauces, stews or risotto",
      "You'd rather spend your time on something other than stirring at the stove",
      "You want a chopper, a hand blender and a steamer in one appliance"
    ],
    nachteile: [
      "It's big and heavy: the machines here weigh 6 to 8.5 kilos and need a permanent spot on the worktop",
      "Onions quickly turn to mush: at German consumer magazine Stiftung Warentest almost all machines slipped up when chopping onions (issue 1/2024)",
      "Not every machine can brown food properly: according to Stiftung Warentest, roasted flavours only develop from 140 degrees, and some machines only reach 120"
    ],
    modelle: [
      {
        stufe: "Budget", spanne: "up to €450",
        name: "Moulinex ClickChef (HF4568)", preis: 420,
        punkte: [
          "Best value tip at Stiftung Warentest (satisfactory, grade 2.9, issue 1/2024)",
          "With built-in scales and a steamer attachment",
          "5 automatic programmes, plus you set time, speed and heat yourself"
        ],
        fuer: "To get started, if you mainly make soups, sauces and dough.",
        hinweis: "It only gets to 120 degrees, so you can't sear with it. It has no step-by-step recipes on the machine, only a cookbook. The bowl holds 3.6 litres; according to the manufacturer you use 2 litres for cooking.",
        link: amazon("moulinex clickchef hf4568", "moulinex clickchef hf4568")
      },
      {
        stufe: "Mid-range", spanne: "€450 to €800",
        name: "Moulinex Companion XL (HF8401)", preis: 590, empfohlen: true,
        punkte: [
          "At Test-Achats (Belgium) about as good overall as the Thermomix TM7 (July 2026)",
          "Large bowl: 3 litres usable, enough for up to 10 people according to the manufacturer",
          "12 automatic programmes and manual mode, Moulinex counts this as 14 functions",
          "Recipes in the free Moulinex app, no subscription"
        ],
        fuer: "For most people. My tip, because in the test it comes close to the Thermomix and you don't need a subscription for recipes.",
        hinweis: "It has no scales, so you'll need a kitchen scale as well. According to Test-Achats it is only moderately easy to clean.",
        link: amazon("moulinex companion xl hf8401", "moulinex companion xl")
      },
      {
        stufe: "Premium", spanne: "from €800",
        name: "WMF Avantgarde", preis: 1299,
        punkte: [
          "Good at Stiftung Warentest (issue 2/2026), good at the German tech magazine CHIP (grade 1.9, May 2025)",
          "According to the manufacturer, it guides you step by step through just over 300 recipes on the touchscreen",
          "With built-in scales, a steamer attachment and Wi-Fi",
          "Especially quiet, according to the manufacturer"
        ],
        fuer: "If you want to be guided through recipes step by step and are happy to spend more for it.",
        hinweis: "It is heavy (8.5 kilos). CHIP sees room for improvement in cooking and finds the choice of recipes small. For most people the mid-range is more than enough.",
        link: amazon("wmf avantgarde küchenmaschine kochfunktion", "WMF Avantgarde")
      }
    ],
    fragen: [
      { f: "Why isn't the Thermomix included?", a: "Vorwerk sells the Thermomix only itself, through its sales advisors and its own online shop. That's why it isn't on Amazon. It is good, though: at Stiftung Warentest the Thermomix TM7 was rated good (issue 2/2026). At Test-Achats the Moulinex Companion XL achieved a similar overall result." },
      { f: "And the Bosch Cookit, the test winner?", a: "The Bosch Cookit was the test winner at Stiftung Warentest (good, grade 2.0, issue 1/2024). But it isn't available on Amazon, so it's missing here." },
      { f: "What about Lidl's Monsieur Cuisine?", a: "Lidl sells the Monsieur Cuisine Smart itself. At Stiftung Warentest it was satisfactory (grade 2.8, issue 1/2024), and at Test-Achats it is a best value tip. If you can get it at Lidl, it's an affordable alternative with built-in scales." },
      { f: "Can I sear food in it?", a: "Only to a limited extent. According to Stiftung Warentest, roasted flavours only develop from 140 degrees. The ClickChef only reaches 120 degrees, so nothing really browns. For steak, schnitzel or crispy onions, you're better off sticking with the frying pan." },
      { f: "Do onions turn to mush?", a: "Easily, yes. At Stiftung Warentest almost all machines slipped up when chopping onions (issue 1/2024). It's best to chop onions with a few short presses of the pulse or turbo button and check in between." },
      { f: "Do I need a subscription for recipes?", a: "Not for the Companion XL: the recipes are in the free Moulinex app. For the ClickChef they are in the cookbook, and according to the manufacturer the WMF comes with just over 300 recipes on the machine. With the Thermomix you need the Cookidoo subscription for most recipes; without it, according to Vorwerk, you have around 200 recipes on the machine." },
      { f: "How much time does it really save?", a: "Honestly, no test has measured that. The machine doesn't necessarily cook faster. But it saves you standing next to the pan and stirring, and you don't have to chop onions and vegetables by hand. In that time you can set the table, tidy up or simply sit down. The calculator shows how much that adds up to for you." }
    ],
    rechner: "kochfunktion",
    video: "kuechenmaschine-kochfunktion"
  },
  {
    id: "kuechenmaschine",
    name: "Stand mixer for kneading and mixing",
    kurzname: "a stand mixer",
    kategorie: "Kitchen",
    symbol: "🧁",
    bild: "",
    kurz: "A machine with a large bowl that kneads dough, mixes cake batter and whips cream. With attachments it also grates and slices vegetables.",
    warum: "Kneading yeast dough for bread, pizza or a plaited loaf by hand takes at least 8 minutes, and it's pretty hard work. The machine kneads it by itself. In that time you grease the tin, prepare the topping or start tidying up. It also makes cake batter and whipped cream without you having to hold a mixer.",
    statt: "Instead of kneading by hand",
    nutzen: "It kneads and mixes for you. Your hands are free.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "You often bake cakes, bread, pizza or sweet yeast bread",
      "You want to skip the hard work of kneading by hand",
      "You want to do something else while the dough is being kneaded"
    ],
    nachteile: [
      "It needs space: the small Bosch models weigh just under 5 kilos, large machines 8 to 10 kilos. Ideally it has a permanent spot on the worktop",
      "Most can only blend and chop with attachments: for almost all tilt-head machines, German consumer magazine Stiftung Warentest had to buy extra attachments for that (issue 12/2025)",
      "Cleaning can take a while: according to Stiftung Warentest some machines are tedious to clean (issue 12/2025). According to the manufacturer, the dough hooks and whisks of the Bosch models here can go in the dishwasher"
    ],
    modelle: [
      {
        stufe: "Budget", spanne: "up to €150",
        name: "Bosch Serie 2 (MUMS2EW00)", preis: 105,
        punkte: [
          "With planetary mixing: the hook and whisk rotate and move around the whole bowl at the same time",
          "Stainless steel bowl holding 3.8 litres, for up to 2.4 kilos of cake batter or 1.7 kilos of yeast dough according to the manufacturer",
          "Dough hook, whisk and beater are included and, according to the manufacturer, dishwasher-safe"
        ],
        fuer: "If you mainly make cakes, pizza and bread dough and want to spend little.",
        hinweis: "There is no current lab test for it. A blender and a vegetable slicer are not included; you can buy them separately if you need them.",
        link: amazon("bosch serie 2 mums2ew00", "bosch mums2ew00")
      },
      {
        stufe: "Mid-range", spanne: "€150 to €350",
        name: "Bosch Serie 4 (MUM58W20)", preis: 224, empfohlen: true,
        punkte: [
          "Good at Stiftung Warentest (grade 2.5) and best value (issue 12/2025)",
          "Stainless steel bowl holding 3.9 litres, for up to 2.7 kilos of cake batter or 1.9 kilos of yeast dough according to the manufacturer",
          "With a continuous slicer and 3 discs: it grates and slices vegetables",
          "With a blender attachment (1.25 litres)"
        ],
        fuer: "For most people. My tip, because in the test it was almost as good as the test winner, costs much less and already comes with a vegetable slicer and a blender.",
        hinweis: "It has no scales and no programmes. To chop things like nuts or herbs, you need a chopper attachment, which you buy separately.",
        link: amazon("bosch serie 4 mum58w20", "bosch mum58w20")
      },
      {
        stufe: "Premium", spanne: "from €350",
        name: "Bosch Serie 6 (MUMS6ZS13D)", preis: 499,
        punkte: [
          "Test winner at Stiftung Warentest among 10 stand mixers without a cooking function (good, grade 2.4, issue 12/2025)",
          "Large bowl holding 5.5 litres, for up to 3.5 kilos of cake batter or 2.5 kilos of yeast dough according to the manufacturer",
          "With built-in scales, a timer and automatic programmes",
          "With a continuous slicer and discs for vegetables"
        ],
        fuer: "If you bake often and in large quantities and scales and programmes matter to you.",
        hinweis: "A blender and a chopper are not included, you have to buy them separately. At just under 8 kilos it is heavy. For most people the mid-range is more than enough.",
        link: amazon("bosch serie 6 mums6zs13d", "bosch mums6zs13d")
      }
    ],
    fragen: [
      { f: "Isn't a hand mixer enough?", a: "For cake batter and cream now and then, yes. But you knead yeast dough by hand for at least 8 minutes, as the German supermarket chain REWE and the district office of Göppingen advise. The machine kneads it by itself and your hands are free. But if you only bake a few times a year, honestly, save the money and use the hand mixer." },
      { f: "Why isn't the KitchenAid my tip?", a: "The KitchenAid Artisan was only satisfactory at Stiftung Warentest (grade 2.7, issue 12/2025). It made cream and cake batter well, and it held up very well in the endurance test. But it can only blend or chop with attachments, and it weighs just over 10 kilos. You can also trap your fingers in the hinge of the head. If you like it and mainly bake cakes, you can still go for it." },
      { f: "How much dough can it handle?", a: "According to Bosch, the Serie 2 kneads up to 1.7 kilos of yeast dough, the Serie 4 up to 1.9 and the Serie 6 up to 2.5 kilos. Each manages more cake batter: 2.4, 2.7 and 3.5 kilos. So even the smallest is enough for a cake or a loaf of bread." },
      { f: "Can it slice vegetables too?", a: "Yes, with a continuous slicer. It grates vegetables or cuts them into slices, for example carrots, cucumbers or potatoes. It comes with the Serie 4 and the Serie 6, but not with the Serie 2. For nuts or herbs you need a separate chopper attachment for all of them." },
      { f: "What more can a food processor with cooking function do?", a: "It heats while it stirs, so you can cook soups, sauces or risotto in it. For baking the machine here is enough, and its bowl is bigger: 3.8 to 5.5 litres instead of about 2 to 3 litres usable. If you want to cook as well, take a look at the page “Food processor with cooking function”." },
      { f: "How much time does it really save?", a: "Honestly, no test has measured that. The dough is only a little quicker with the machine: by hand you knead it for at least 8 minutes, with the machine for at least 5. The big difference is that you don't have to be there. The calculator shows how much that adds up to for you." }
    ],
    rechner: "kneten",
    video: "kuechenmaschine"
  },
  {
    id: "wassersprudler",
    name: "Sparkling water maker",
    kurzname: "a sparkling water maker",
    kategorie: "Kitchen",
    symbol: "🫧",
    bild: "",
    kurz: "An appliance that turns tap water into sparkling water. You may know it as SodaStream.",
    warum: "Tap water in the bottle, press a few times, and it fizzes. You no longer carry packs of bottles from the car into your home or take empties back. One gas cylinder lasts for about 40 to 60 litres.",
    statt: "Instead of carrying crates of water",
    nutzen: "Sparkling water from the tap. Never carry crates again.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "You drink a lot of sparkling water and carry packs or crates of it home",
      "You live without a lift or shop without a car",
      "You want fewer plastic bottles and fewer empties"
    ],
    nachteile: [
      "If you currently buy cheap supermarket own-brand water, you hardly save money. It really pays off compared with branded water",
      "You hardly save time, because instead of carrying, you carbonate every bottle yourself. What you save is the effort",
      "You have to swap empty gas cylinders regularly, about every 40 to 60 litres",
      "Plastic bottles usually can't go in the dishwasher and have to be replaced by the date printed on them"
    ],
    modelle: [
      {
        stufe: "Budget", spanne: "up to €80",
        name: "Mysoda Woody", preis: 65,
        punkte: [
          "Best value at German consumer magazine Stiftung Warentest (good, grade 2.3, issue 7/2025)",
          "A gas cylinder is included. In the test it lasted for around 48 litres, more than any other good machine",
          "Takes screw-in cylinders from many brands",
          "Housing made of a renewable wood composite, according to the manufacturer"
        ],
        fuer: "To get started, if you want to begin cheaply and medium fizz is enough for you.",
        hinweis: "It fizzes a little less strongly than the more expensive machines, only satisfactory in the test. The plastic bottle can't go in the dishwasher. Mysoda itself doesn't swap cylinders in Germany, so you use a screw-in cylinder from another provider. Ask in the shop first: some only swap their own brand.",
        link: amazon("mysoda woody wassersprudler", "mysoda woody")
      },
      {
        stufe: "Mid-range", spanne: "€80 to €120",
        name: "SodaStream Crystal 3.0", preis: 100, empfohlen: true,
        punkte: [
          "Good at Stiftung Warentest (grade 1.8, issue 7/2025), just behind the test winner",
          "Glass carafes instead of plastic: they can go in the dishwasher and don't age",
          "You insert the Quick Connect cylinder with a lever. You can swap them at many shops"
        ],
        fuer: "For most people. My tip, because the carafes can go in the dishwasher and you can swap cylinders almost everywhere.",
        hinweis: "A carafe holds 0.7 litres, but you can only carbonate up to the fill line, so about 0.6 litres at a time. That means you carbonate more often. The machine is about 45 cm tall. To insert the carafe, the top section rises, and then it is about 55 cm tall, which is often too tight under wall cupboards. It only takes cylinders with a Quick Connect fitting.",
        link: amazon("sodastream crystal 3.0", "sodastream crystal 3.0")
      },
      {
        stufe: "Premium", spanne: "from €120",
        name: "Grohe Blue Fizz", preis: 130,
        punkte: [
          "Test winner at Stiftung Warentest (good, grade 1.7, issue 7/2025)",
          "Fizzes the most strongly in the test, almost like sparkling water from the shop",
          "Three levels from gentle to strong, set with a dial",
          "Takes screw-in cylinders from many brands, not just Grohe's"
        ],
        fuer: "If you like it really fizzy.",
        hinweis: "Strong fizz needs more gas, so the cylinder runs out sooner. You wash the plastic bottle by hand. Stiftung Warentest found the handling only satisfactory. The more expensive “Advanced” version also shows how full the cylinder still is.",
        link: amazon("grohe blue fizz starter set", "grohe blue fizz")
      }
    ],
    fragen: [
      { f: "Do I save money with it?", a: "A lot compared with branded water, hardly anything compared with cheap supermarket water. When you make it yourself, you mainly pay for the gas, about 10 to 20 cents per litre depending on the cylinder and machine. In Germany, cheap sparkling water costs around 20 cents per litre, branded water often 60 cents or more. But the real gain is this: you don't carry anything any more. The calculator shows how much it makes for you." },
      { f: "Can I just use tap water?", a: "Yes. In Germany, Austria and Switzerland drinking water is one of the most strictly controlled foods, and its quality is good to very good. If the water has been standing in the pipes for more than four hours, for example overnight, let it run until it comes out of the tap noticeably cooler. That's what the German Environment Agency advises. How good it is where you live, your water supplier can tell you." },
      { f: "Glass bottle or plastic?", a: "Glass can go in the dishwasher, doesn't age and tastes neutral. You use it as long as it has no cracks or chips. Plastic is more robust, but usually may only be washed by hand. Every plastic bottle has a date printed on it by which you have to replace it, because the material ages. That's what Stiftung Warentest says." },
      { f: "Where do I swap empty cylinders?", a: "You hand in the empty cylinder at a shop and only pay for the new filling. You can swap empty SodaStream cylinders at many retailers that sell SodaStream. The retailer search on the SodaStream website shows you where. For machines with a screw thread like the Woody and Grohe there are also swap cylinders from other providers, often cheaper. But watch out: some shops only swap their own brand." },
      { f: "Which cylinder fits my machine?", a: "There are two fittings. You screw in screw-in cylinders; the pink Quick Connect cylinders just click in. New SodaStream machines like the Crystal 3.0 need Quick Connect. The Woody and Grohe Blue Fizz take screw-in cylinders, including from other brands, but no Quick Connect cylinders. Check the packaging when you buy." },
      { f: "How long does a cylinder last?", a: "In the Stiftung Warentest test the machines made 37 to 61 litres with one cylinder. How much it is for you depends on the machine and on how strongly you carbonate: the more fizz, the sooner the cylinder is empty." },
      { f: "How do I keep everything clean?", a: "Clean the nozzle regularly, otherwise slime-forming bacteria can settle there. Stiftung Warentest also advises pouring the sparkling water into a glass or a carafe to drink it, instead of drinking from the carbonating bottle. You just wipe the machine itself with a damp cloth; it doesn't belong in the dishwasher." },
      { f: "Why isn't the Aarke included?", a: "The stainless steel Aarke Carbonator 3 looks stylish and was also good at Stiftung Warentest (issue 7/2025). But it scored worse than the three machines here and costs considerably more." }
    ],
    profitipp: {
      titel: "Cold fizzes better",
      text: "Cold water absorbs the carbon dioxide much better. Put the filled bottle in the fridge for a while before carbonating, and it will fizz more strongly."
    },
    rechner: "sprudler",
    video: "wassersprudler"
  },
  {
    id: "mini-geschirrspueler",
    name: "Countertop dishwasher",
    kurzname: "a countertop dishwasher",
    kategorie: "Kitchen",
    symbol: "🍽️",
    bild: "",
    kurz: "A small dishwasher for the worktop. You don't need any space in your kitchen units for it.",
    warum: "Dishes in, press the button, and you do something else. The daily washing-up by hand is gone; only big pots and pans you still wash yourself. It suits small kitchens and rented flats above all, where there's no room for a normal dishwasher.",
    statt: "Instead of washing up by hand",
    nutzen: "Does the washing-up for you, even without room for a big dishwasher.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "There's no room in your kitchen for a normal dishwasher",
      "You live alone or as a couple",
      "You wash up by hand almost every day and would rather use that time differently"
    ],
    nachteile: [
      "Big pots, pans and baking trays usually don't fit, so you still wash those by hand",
      "It needs space on the worktop: the machines here are 42 to 55 centimetres wide and 44 to 50 centimetres deep",
      "Small dishwashers usually do worse in tests than big ones and use more water and electricity per plate. There are no independent tests of the machines here"
    ],
    gruppen: [
      { name: "With water connection", text: "It's connected by a hose to a water supply, usually a valve under the sink. The waste water runs through a second hose into the drain. In return, six place settings fit inside, enough for one or two people." },
      { name: "With water tank", text: "You don't need a connection: before each wash you fill the five-litre tank with water, and the waste water runs through a hose into the sink. In return it's smaller and louder. Three place settings fit inside, which is mainly enough for one person." }
    ],
    modelle: [
      {
        gruppe: "With water connection",
        stufe: "Budget", spanne: "up to €300",
        name: "Bomann TSG 7405", preis: 255, preisText: "ca. 250 bis 260 €", empfohlen: true,
        punkte: [
          "Six place settings and five programmes, including a quick programme",
          "According to the manufacturer, energy class D, 6.5 litres of water per wash and 47 decibels. That makes it more economical per plate and much quieter than the machines with a tank",
          "The door opens by itself at the end, so the dishes dry better",
          "If you like, it starts 2, 4 or 6 hours later"
        ],
        fuer: "My tip if you have a free water connection: six place settings fit inside, and you never have to fill in water.",
        hinweis: "There are no independent tests of it; the figures come from the manufacturer. It has no AquaStop, only overflow protection. It comes in white and in black.",
        link: amazon("bomann tsg 7405", "bomann tsg 7405")
      },
      {
        gruppe: "With water tank",
        stufe: "Budget", spanne: "up to €300",
        name: "Bomann TSG 5702", preis: 239, preisText: "ca. 200 bis 300 €", empfohlen: true,
        punkte: [
          "Five-litre tank: you don't need a water connection, but you can connect it to one later, the hoses are included",
          "According to the manufacturer, the most economical tank machine I've found: energy class C and 4.2 litres of water per wash",
          "Three place settings, only 43 centimetres wide and 44 deep"
        ],
        fuer: "If you have no free water connection or don't want to connect anything.",
        hinweis: "At 58 decibels it's much louder than the machines with a connection. There are no independent tests; the figures come from the manufacturer. Put the drain hose securely into the sink before every wash, otherwise the water runs onto the worktop.",
        link: amazon("bomann tsg 5702", "bomann tsg 5702"),
        alternativen: [
          { name: "Midea mini countertop dishwasher MDWMT201DW", preis: 250, text: "According to Midea, also three place settings and a five-litre tank, plus an app. It uses a little more water (5 instead of 4.2 litres per wash).", link: amazon("midea mini tischgeschirrspüler wassertank", "midea mini countertop dishwasher water tank") }
        ]
      }
    ],
    fragen: [
      { f: "Water connection or tank: which suits me?", a: "If you have a free connection under the sink, take a machine with a connection. Then six place settings fit inside and you never have to fill in water. If there's no connection or you don't want to connect anything, take a machine with a tank. It's smaller and louder, and you fill in water before every wash. In return it can stand anywhere there's a socket and the drain hose reaches the sink." },
      { f: "How do I connect a machine with a water connection?", a: "The inlet hose goes onto a cold-water connection with a 3/4-inch thread, usually a valve under the sink. If it's already taken, for example by a washing machine, a double valve helps. You connect the drain hose to the waste pipe under the sink; there are adapter pieces with a connection for this. The hoses are included; on the machines here they are about 1.5 metres long. If you don't have a suitable connection, call a plumber." },
      { f: "Do pots and big plates fit?", a: "Big pots, pans and baking trays usually don't, so you still wash those by hand. Before buying, measure your biggest plate and compare it with the manual: large dinner plates don't always fit into the small machines with a tank." },
      { f: "Does it save water and electricity compared with washing up by hand?", a: "Compared with the average, yes, especially water. In a study by the University of Bonn, participants used an average of 103 litres of water and 2.5 kWh of energy for twelve place settings by hand, mostly for the hot water. According to the manufacturers, the machines here use the equivalent of 13 to 20 litres and 1.0 to 1.3 kWh for twelve place settings in the eco programme. If you wash up very sparingly by hand, though, you use less. The most economical is a big, full dishwasher: according to its data sheet, it needs only around 8 litres and 0.5 kWh for twelve place settings." },
      { f: "What do I need to watch out for with a tank machine?", a: "Fill the tank before every wash, easiest with a jug or a measuring cup. Put the drain hose into the sink and secure it so it doesn't slip out. Otherwise the waste water runs onto the worktop or the floor. You can still connect many tank machines to a water supply later; the Bomann TSG 5702 comes with the hoses for this." },
      { f: "Why are there no test grades here?", a: "Because there are hardly any tests. Stiftung Warentest, Germany's best-known consumer tester, hasn't tested countertop dishwashers in recent years; its current tests only include big machines. I haven't found any other independent tests of the machines here either. So I compare the manufacturers' figures for you, meaning energy class, water, noise and size, and tell you honestly where small dishwashers fall short." },
      { f: "And in Switzerland?", a: "The machines here are made for Germany and have a German plug. It doesn't fit Swiss sockets. That's why I don't have a suitable offer for Switzerland right now, but I'm looking for one." }
    ],
    profitipp: {
      titel: "How to get it clean and economical",
      text: "A few simple steps make a big difference:",
      liste: [
        "Only scrape coarse leftovers into the bin and don't pre-rinse. According to a study by the University of Bonn, pre-rinsing under running water costs a lot of water and energy",
        "Only start it when it's full. In the same study, many dishwashers ran only half full",
        "Use the eco programme most of the time. It takes the longest but is designed for little electricity and water",
        "With the tank machine: before starting, check that the drain hose is lying securely in the sink"
      ]
    },
    rechner: "geschirrspueler",
    video: "mini-geschirrspueler",
    preisstand: "Oktober 2026"
  },
  {
    id: "reinigungsbuerste",
    name: "Electric cleaning brush",
    kurzname: "an electric brush",
    kategorie: "Household",
    symbol: "🧽",
    bild: "",
    kurz: "A cordless battery brush with a rotating head and a long handle for the shower, tiles, bathtub and grout.",
    warum: "We simply don't live in a time any more when you clean the bathroom with a scouring sponge. The brush turns by itself, you just guide it with light pressure. No kneeling in the shower, no scrubbing until your arm aches. With other heads it also cleans the oven, sink and window frames.",
    statt: "Instead of scrubbing by hand",
    nutzen: "Scrubs for you while you stand up straight.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 5, nachher: 2 },
    fuer: [
      "Cleaning is hard on your back or knees",
      "You dread grout and the shower cubicle",
      "You want to get the bathroom done faster and have more time for nicer things"
    ],
    nachteile: [
      "Charging usually takes around three hours, but then one charge is enough for a whole bathroom",
      "It only gets dirty grout and stubborn stains clean with a strong cleaner",
      "If you press too hard, it slows down or switches off"
    ],
    modelle: [
      {
        stufe: "Budget", spanne: "under €25",
        name: "Vicmayun cordless cleaning brush", preis: 19,
        punkte: [
          "Telescopic handle from 30 to 120 cm for the shower and tub",
          "7 heads for tiles, corners and washbasins"
        ],
        fuer: "If you want to spend little. Its handle is shorter than the mid-range model's, though.",
        link: amazon("vicmayun reinigungsbürste", "vicmayun electric spin scrubber")
      },
      {
        stufe: "Mid-range", spanne: "€25 to €40",
        name: "Kedoyoy 8-in-1 cordless cleaning brush", preis: 34, empfohlen: true,
        punkte: [
          "Telescopic handle adjustable from 30 to 137 cm: you clean the shower and tub standing up",
          "According to the manufacturer, the battery lasts up to 90 minutes and charges via USB-C",
          "8 heads, including for grout and corners"
        ],
        fuer: "For most bathrooms. My tip, because with the longer handle you can also do the tub and shower floor standing up.",
        link: amazon("kedoyoy reinigungsbürste", "kedoyoy electric spin scrubber")
      },
      {
        stufe: "Premium", spanne: "from €40",
        name: "HOTO Electric Spin Scrubber", preis: 80,
        punkte: [
          "Best of eight brushes in the Good Housekeeping test (USA, February 2026)",
          "Its battery lasted almost 2 hours 20 minutes there, one of the longest times in the test",
          "Telescopic pole from 94 to 130 cm according to the manufacturer: you clean the tub and shower floor standing up",
          "6 heads, including a sponge and a scouring pad"
        ],
        fuer: "If you clean a large bathroom or several bathrooms and want the battery to last a long time.",
        hinweis: "It costs a lot more than the mid-range model. According to Consumer Reports, most brushes clean about equally well; the biggest difference is the battery.",
        link: amazon("hoto electric spin scrubber", "hoto electric spin scrubber")
      }
    ],
    fragen: [
      { f: "Is one battery enough for the whole bathroom?", a: "Usually, yes. According to the manufacturers many models last 60 to 90 minutes, and testers got through a bathroom easily on one charge. They charge with a USB cable like a phone, which usually takes around three hours." },
      { f: "Can it get wet?", a: "It can handle splashes. But you shouldn't hold it under water. You can take the heads off and rinse them." },
      { f: "Which head is for what?", a: "Round brush for tiles and the tub, corner brush for grout and corners, sponge for washbasins and taps, flat brush for the floor." },
      { f: "Do I still need cleaning products?", a: "Yes. The brush does the scrubbing for you, but not the cleaning product. Let it work for a few minutes, then brush. For dirty grout you need a strong cleaner." },
      { f: "Can it scratch surfaces?", a: "Yes, that can happen. Hard bristles and scouring pads can scratch acrylic, glass-ceramic, stainless steel or paintwork. Use a soft sponge or a microfibre pad there and test it on a hidden spot first." }
    ],
    rechner: "buerste",
    video: "buerste"
  },
  {
    id: "stretchdeckel",
    name: "Silicone stretch lids",
    kurzname: "stretch lids",
    kategorie: "Kitchen",
    symbol: "🥣",
    bild: "",
    kurz: "Stretchy lids for bowls, tubs, jars and even half an onion.",
    warum: "They replace cling film and tin foil when you cover bowls and leftovers. You simply pull the lid over the rim, it seals, and afterwards it goes in the dishwasher instead of the bin.",
    statt: "Instead of cling film and tin foil",
    nutzen: "Pull it over, sealed. Never again film that sticks to itself.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "You often have cut fruit, vegetables or leftovers",
      "You want to throw away less plastic",
      "Cling film regularly drives you to despair"
    ],
    nachteile: [
      "None from the set fits very large bowls",
      "It holds less well on a wet rim",
      "The size has to fit: too big and it slips off, too small and it can tear when you stretch it"
    ],
    modelle: [
      {
        stufe: "Budget", spanne: "under €10",
        name: "Stretch lids, 12 pieces, round", preis: 9,
        punkte: [
          "12 round lids, two each in six sizes from 6.5 to 21 cm",
          "For bowls, jars and half pieces of fruit"
        ],
        fuer: "To try them out, and if you mainly cover round bowls and jars.",
        link: amazon("silikon stretchdeckel 12 stück rund", "silicone stretch lids 12 pack round")
      },
      {
        stufe: "Mid-range", spanne: "€10 to €16",
        name: "Stretch lid set, 12 pieces, round and square", preis: 13, empfohlen: true,
        punkte: [
          "6 round and 6 square lids in six sizes from about 6 to 19 cm",
          "Also for square tubs",
          "Dishwasher-safe"
        ],
        fuer: "For most kitchens. My tip, because with round and square lids you're ready for almost anything.",
        link: amazon("silikon stretchdeckel 12 stück rund eckig", "silicone stretch lids 12 pack round rectangular")
      },
      {
        stufe: "Premium", spanne: "from €20",
        name: "Lékué stretch lids, set of 3", preis: 25,
        punkte: [
          "Branded product from the kitchen specialist Lékué",
          "Three lids of about 11, 15 and 20 cm, for bowls up to about 24 cm"
        ],
        fuer: "For you if you'd rather have fewer lids, but high-quality ones.",
        hinweis: "Only three sizes. For small jars you'll also need a cheap set.",
        link: amazon("lékué elastische deckel", "lekue stretch lids")
      }
    ],
    fragen: [
      { f: "Do they really seal tightly?", a: "Yes, if the lid is pulled fully over the rim and the rim is dry. In tests, not even water ran out of a tipped bowl. But they're not as airtight as a vacuum container, and I wouldn't carry a bowl of soup upside down with one." },
      { f: "Can they go in the microwave?", a: "Most can, check the packaging. Leave a small gap open when heating so the steam can escape." },
      { f: "Which size do I take?", a: "The lid should be a little smaller than the rim, then it stretches over it. A set with six sizes covers everything from half a lemon to a bowl just over 20 cm across. For bigger bowls you need a set with an extra-large lid." },
      { f: "How long do they last?", a: "That depends on the quality. At America's Test Kitchen all the lids survived ten dishwasher cycles without damage; for other testers, some tore while being put on. Don't stretch them more than necessary and keep them away from knives and sharp edges." },
      { f: "Do they take on smells?", a: "Yes, after onion, garlic or mustard they often smell for a while. It fades with every wash. If the smell lingers, rub them with a little baking soda and a damp sponge." }
    ],
    rechner: "deckel",
    video: "deckel"
  },
  {
    id: "kindle",
    name: "E-reader",
    kurzname: "an e-reader",
    kategorie: "Leisure",
    symbol: "📖",
    bild: "",
    kurz: "A reading device with a screen that looks almost like paper. And it holds thousands of books.",
    warum: "E-books are usually cheaper than printed books, and many classics are even free. A new book arrives in seconds, you can make the text bigger, and the battery lasts for weeks.",
    statt: "Instead of printed books",
    nutzen: "Thousands of books in one hand, each one there in seconds.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "You read a lot, including on the go or on holiday",
      "Your bookshelf has been full for ages",
      "You read in bed in the evening without switching on the lamp"
    ],
    nachteile: [
      "Pictures and comics don't look good in greyscale. Devices with a colour screen cost more, and their colours are paler than on a tablet",
      "You can't lend e-books to friends or resell them",
      "The Kindle can't open books from German public libraries (Onleihe). For that you need another device, for example from PocketBook"
    ],
    modelle: [
      {
        stufe: "Budget", spanne: "up to €170",
        name: "Kindle (2026)", preis: 155,
        punkte: [
          "6 inches and only 140 g, lighter than a paperback",
          "Battery lasts up to 6 weeks, according to Amazon",
          "Room for thousands of books"
        ],
        fuer: "For you if you mainly read novels and buy from Amazon.",
        hinweis: "Not waterproof and no warm light.",
        link: amazon("kindle 2026"),
        alternativen: [
          { name: "PocketBook Verse Pro", preis: 160, text: "For almost the same price, with warm light and waterproof. You borrow library books right on the device.", link: amazon("pocketbook verse pro") }
        ]
      },
      {
        stufe: "Mid-range", spanne: "€170 to €260",
        name: "Kindle Paperwhite (2026)", preis: 210, empfohlen: true,
        punkte: [
          "Larger 7-inch screen",
          "Warm light for the evening in bed",
          "Waterproof: it even survives a drop in the bath",
          "Battery lasts up to 12 weeks, according to Amazon"
        ],
        fuer: "For anyone who reads a lot. My tip, because it has warm light and is waterproof.",
        hinweis: "Brand new: Amazon ships it from 11 November 2026.",
        link: amazon("kindle paperwhite 2026"),
        alternativen: [
          { name: "Kobo Clara BW", preis: 170, text: "A little smaller (6 inches), with warm light and waterproof. You buy the books from Kobo instead of Amazon.", link: amazon("kobo clara bw") }
        ]
      },
      {
        stufe: "Premium", spanne: "from €260",
        name: "Kindle Colorsoft (2026)", preis: 300,
        punkte: [
          "Colour screen for comics, children's books and pictures",
          "7 inches, battery lasts up to 8 weeks, according to Amazon",
          "Waterproof, like the Paperwhite"
        ],
        fuer: "For comics, children's books and anything with pictures.",
        hinweis: "For novels alone you don't need colour. Amazon ships it from 11 November 2026.",
        link: amazon("kindle colorsoft 2026"),
        alternativen: [
          { name: "Kobo Libra Colour", preis: 245, text: "Also in colour, plus buttons for turning pages. You can take notes with a stylus, sold separately.", link: amazon("kobo libra colour") },
          { name: "PocketBook Era Color", preis: 225, text: "Colour and library books right on the device.", link: amazon("pocketbook era color") }
        ]
      }
    ],
    fragen: [
      { f: "Which e-reader is right for me?", a: "For novels, the normal Kindle is all you need. If you read a lot, in bed in the evening or in the bath, take the Paperwhite: it has warm light and is waterproof. You only need colour for comics, children's books or pictures. And if you like borrowing from the library, a PocketBook is the better choice." },
      { f: "Can I borrow books from the library?", a: "Not with the Kindle, unfortunately: the Onleihe service of German public libraries doesn't work on it. With PocketBook and Tolino you borrow right on the device, with Kobo via the computer." },
      { f: "Can I read my own files and PDFs?", a: "Yes. With the Kindle you send files to the device with “Send to Kindle” via the app or email, including e-books without copy protection from other shops. With Kobo and PocketBook it works, for example, by cable from the computer." },
      { f: "Do I need Kindle Unlimited?", a: "No. It's an optional subscription with a large selection of books. It's only worth it if you read a lot and like the selection. Best try it first, there's often a free trial month." },
      { f: "Are there ads on the device?", a: "On the Kindle there can be. When buying, check whether it says “with ads”. That version shows offers on the lock screen and on the home screen and is a little cheaper." },
      { f: "How long does the battery last?", a: "According to Amazon, a Kindle lasts 6 to 12 weeks depending on the model, if you read for about half an hour a day with Wi-Fi off. With a lot of light and Wi-Fi on, the battery runs out sooner." }
    ],
    rechner: "kindle",
    video: "kindle"
  },
  {
    id: "zahnbuerste",
    name: "Electric toothbrush",
    kurzname: "an electric toothbrush",
    kategorie: "Personal care",
    symbol: "🪥",
    bild: "",
    kurz: "A rechargeable toothbrush whose head moves by itself. You just guide it from tooth to tooth, and on many models a timer tells you when two minutes are up.",
    warum: "You don't have to scrub yourself any more: the brush does the movement, and you just hold it against your teeth. Good models even notice when you press too hard. And according to a large review of 51 studies, after more than three months you have on average about a fifth less plaque than with a manual toothbrush.",
    statt: "Instead of a manual toothbrush",
    nutzen: "Cleans more thoroughly, you just guide it.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "You want cleaner teeth: with an electric brush, on average about a fifth less plaque remains than with a manual toothbrush",
      "You tend to press too hard when brushing",
      "You want to know when two minutes are up"
    ],
    nachteile: [
      "Replacement brush heads cost extra. You change them about every three months",
      "It needs to go on its charger now and then, every few weeks depending on the model"
    ],
    vergleich: {
      vorherTitel: "Manual toothbrush",
      vorher: [
        "You scrub back and forth yourself",
        "You hardly notice if you press too hard",
        "You don't know when two minutes are up"
      ],
      nachher: [
        "The head moves by itself, you just guide it",
        "Many models warn you when you press too hard",
        "On many models a timer tells you when you're done"
      ]
    },
    profitipp: {
      titel: "How to brush properly",
      text: "With an electric toothbrush you brush differently than by hand:",
      liste: [
        "Put the brush in your mouth first, then switch it on, or it splashes",
        "Hold the head lightly against your teeth and move it slowly from tooth to tooth, don't scrub",
        "Little pressure, the brush does the work for you",
        "Done after two minutes, rinse the head briefly"
      ]
    },
    modelle: [
      {
        stufe: "Budget", spanne: "up to €50",
        name: "Philips Sonicare 3100", preis: 40, preisText: "approx. €40 to €50",
        punkte: [
          "The previous version was rated good by Stiftung Warentest (grade 2.2, issue 12/2024)",
          "Pressure sensor: it warns you when you press too hard",
          "Timer with a signal every 30 seconds"
        ],
        fuer: "For you if you want to switch on a budget and one brushing mode is enough for you.",
        hinweis: "It has only one brushing mode, and according to the manufacturer the battery lasts up to 14 days.",
        link: amazon("philips sonicare 3100"),
        alternativen: [
          { name: "Silk'n SonicSmile Plus", preis: 25, text: "Best buy at Stiftung Warentest (good, grade 2.3, issue 12/2024) and even cheaper. It has no pressure sensor.", link: amazon("silk'n sonicsmile plus") }
        ]
      },
      {
        stufe: "Mid-range", spanne: "€50 to €120",
        name: "Laifen Wave Pro", preis: 100, preisText: "approx. €100", empfohlen: true,
        punkte: [
          "The head swings back and forth and vibrates at the same time, according to the manufacturer up to 60° and up to 66,000 times a minute",
          "Pressure sensor: if you press too hard, it gives you a signal",
          "Two brushing modes with three levels each. You can fine-tune them in the app, but you don't need it",
          "According to the manufacturer the battery lasts up to 70 days"
        ],
        fuer: "For most people. My tip, because I use it myself.",
        hinweis: "Stiftung Warentest hasn't tested it yet; its predecessor, the Laifen Wave, was rated good there (grade 2.2, issue 12/2024). It has no USB-C port on the handle and only charges wirelessly on its charging stand.",
        link: amazon("laifen wave pro"),
        alternativen: [
          { name: "Philips Sonicare 5500", preis: 80, text: "Current test winner at Stiftung Warentest (good, grade 1.7, issue 12/2025). It warns you when you press too hard and has two brushing modes.", link: amazon("philips sonicare 5500") },
          { name: "Oral-B iO Series 3N", preis: 70, text: "Was test winner at Stiftung Warentest (good, grade 1.9, issue 12/2024). A light ring shows you when you press too hard. Three brushing modes, no app.", link: amazon("oral-b io series 3n") },
          { name: "Laifen Wave", preis: 80, text: "The cheaper predecessor, rated good by Stiftung Warentest (grade 2.2, issue 12/2024). But it has no pressure sensor.", link: amazon("laifen wave") }
        ]
      },
      {
        stufe: "Premium", spanne: "from €150",
        name: "Philips Sonicare Prestige 9900", preis: 200, preisText: "approx. €200",
        punkte: [
          "Was test winner at Stiftung Warentest (good, grade 1.8, issue 12/2021)",
          "Adjusts its strength to your pressure as you brush (SenseIQ)",
          "With an app"
        ],
        fuer: "For you if you want the best.",
        hinweis: "The test dates from 2021. For most people the mid-range is more than enough.",
        alternativen: [
          { name: "Philips Sonicare 7100", preis: 140, text: "Rated good by Stiftung Warentest (grade 1.8, issue 12/2025) and cheaper than the Prestige.", link: amazon("philips sonicare 7100") }
        ],
        link: amazon("philips sonicare prestige 9900")
      }
    ],
    fragen: [
      { f: "Does an electric toothbrush really clean better?", a: "Yes. A large review of 51 studies (Cochrane, 2014) shows: people who brush electrically for more than three months have on average 21% less plaque and 11% less gum inflammation than with a manual toothbrush." },
      { f: "Sonic toothbrush or rotating head: which is better?", a: "Both clean well. According to Stiftung Warentest, neither system has a clear advantage when brushing. In the latest test (issue 12/2025) a sonic toothbrush is ahead, the Philips Sonicare 5500 (grade 1.7). In the test before, an Oral-B with a round head won (grade 1.9). Take the one you like using." },
      { f: "How often do I change the brush head?", a: "About every three months, or sooner if the bristles splay. Some models remind you." },
      { f: "How do I brush properly?", a: "Twice a day for two minutes. You hold the head lightly against your teeth and move it slowly from tooth to tooth. You don't need to scrub, the brush does that." },
      { f: "Do I need the app?", a: "No. On the Laifen Wave Pro the app lets you set how it brushes and shows you a report of your brushing times. You can brush without a phone at all." }
    ],
    video: "zahnbuerste",
    preisstand: "Oktober 2026"
  }

];
