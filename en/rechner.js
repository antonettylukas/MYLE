/*
  Englische Fassung von rechner.js (für myle.life/en/).
  Gleiche Regler und Formeln wie dort, nur die Texte sind auf Englisch.
  Wenn sich in rechner.js etwas ändert, muss es hier genauso geändert werden.
  Was die Felder bedeuten, steht in rechner.js.
*/

// Average electricity price per country, as marks on the electricity price slider (sources in STROM_QUELLEN)
const STROM_LAENDER = [
  { wert: 0.31, kurz: "UK", name: "United Kingdom", zusatz: "26.3p" },
  { wert: 0.41, kurz: "IE", name: "Ireland" }
];
const STROM_QUELLEN = " The letters on the electricity price slider: United Kingdom 26.3p per kWh, about €0.31 (Ofgem price cap from October 2026), Ireland about 41 cents (Selectra price index, October 2026).";

const RECHNER = {
  saugroboter: {
    mit: "a robot vacuum",
    felder: [
      { id: "m2", label: "How big is your home?", min: 20, max: 200, step: 5, wert: 70, einheit: "m²", schnitt: [73, 103, 114, 129] },
      { id: "saugen", label: "How often do you vacuum per week?", min: 0, max: 7, step: 1, wert: 2, einheit: "×" },
      { id: "wischen", label: "How often do you mop per week?", min: 0, max: 7, step: 1, wert: 1, einheit: "×" }
    ],
    berechne(w) {
      const saugMin = 5 + 0.2 * w.m2;
      const wischMin = 8 + 0.25 * w.m2;
      const minuten = Math.max(0, w.saugen * saugMin + w.wischen * wischMin - 5);
      const arbeitstage = (minuten * 52) / 60 / 8;
      return {
        minutenProWoche: minuten,
        euroProMonat: -3.5,
        extra: `That's around ${Math.round(arbeitstage)} full working days a year that you have for something else.`,
        vorherTitel: "Cleaning yourself",
        // Ohne Wischen (Roboter, die nur saugen) fallen die Wisch-Punkte weg
        vorher: w.wischen > 0 ? [
          "Get the vacuum out, plug it in",
          "Put the chairs up, crawl under the bed",
          "Fill a bucket, mop, tip the water away",
          "Wait for the floor to dry"
        ] : [
          "Get the vacuum out, plug it in",
          "Put the chairs up, crawl under the bed",
          "Fight the cable round every corner"
        ],
        nachher: w.wischen > 0 ? [
          "Set a schedule in the app once",
          "It cleans while you're at work",
          "Top up water, empty dirty water"
        ] : [
          "Set a schedule in the app once",
          "It vacuums while you're at work",
          "Change the bag every few weeks"
        ]
      };
    },
    annahmen: "Including preparation, vacuuming takes about 5 minutes plus 0.2 minutes per m² (so around 19 minutes for 70 m²), mopping about 8 minutes plus 0.25 minutes per m² (around 26 minutes). For a robot that only vacuums, mopping isn't counted. For looking after the robot I subtract 5 minutes a week. Spare parts like brushes, filters, bags and mop pads cost about €3.50 a month more than with a normal vacuum cleaner. The numbers under the slider for your home show the average size of a home in Germany (Federal Statistical Office, Microcensus 2022): 73 m² for 1 person, 103 m² for 2, 114 m² for 3 and 129 m² for 4 or more people."
  },

  airfryer: {
    mit: "an air fryer",
    felder: [
      { id: "bisher", label: "What do you cook with now?", typ: "auswahl", wert: "pfanne",
        optionen: [
          { wert: "pfanne", label: "Pan & pots" },
          { wert: "backofen", label: "Oven" },
          { wert: "fritteuse", label: "Deep fryer" }
        ] },
      { id: "anzahl", label: "How often would you cook with it?", min: 1, max: 14, step: 1, wert: 4, einheit: "× per week" },
      { id: "strom", label: "Your electricity price", min: 0.2, max: 0.6, step: 0.01, wert: 0.35, einheit: "€ per kWh", schnitt: STROM_LAENDER, schnittHinweis: "The letters on the slider show the average electricity price in the United Kingdom (UK) and Ireland (IE)." }
    ],
    berechne(w) {
      const PROFILE = {
        backofen: { name: "Oven", kwh: 1.0, oel: 0, minuten: 18, vorher: [
          "Preheat the oven for 10 minutes",
          "Line the tray with baking paper, turn halfway through",
          "Scrub the tray and oven afterwards"
        ] },
        pfanne: { name: "Pan & pots", kwh: 0.7, oel: 0.08, minuten: 15, vorher: [
          "Stand at the hob the whole time, turning",
          "Fat splatter on the hob and tiles",
          "Wash the pan and pots by hand"
        ] },
        fritteuse: { name: "Deep fryer", kwh: 1.0, oel: 0.4, minuten: 20, vorher: [
          "Heat up 2 to 3 litres of oil",
          "Get rid of old oil, clean the fryer",
          "Fried smell all through the flat"
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
          "Everything in, press Sync, off to the sofa",
          "It beeps: both baskets are ready at the same time",
          "No washing-up: baskets in the dishwasher or a quick wipe with a damp cloth"
        ]
      };
    },
    annahmen: "Electricity per meal: oven about 1.0 kWh, hob about 0.7 kWh, deep fryer about 1.0 kWh, air fryer about 0.45 kWh. Oil: pan about 8 cents, deep fryer about 40 cents per meal. Preheating, standing next to it and washing up cost 15 to 20 minutes more per meal, depending on the comparison." + STROM_QUELLEN
  },

  buerste: {
    mit: "an electric cleaning brush",
    felder: [
      { id: "putzen", label: "How often do you clean the bathroom, shower or tiles?", min: 0, max: 7, step: 1, wert: 1, einheit: "× per week" },
      { id: "dauer", label: "How long does that take now?", min: 10, max: 120, step: 5, wert: 40, einheit: "min" }
    ],
    berechne(w) {
      return {
        minutenProWoche: w.putzen * w.dauer * 0.25,
        euroProMonat: 0,
        extra: "And your back will thank you: with the long handle you clean standing up.",
        vorherTitel: "Sponge & cloth",
        vorher: [
          "Scrubbing the shower on your knees",
          "Working on grout with an old toothbrush",
          "Sponges that smell after a few weeks"
        ],
        nachher: [
          "Put the brush on, it turns by itself",
          "No bending, no kneeling",
          "Rinse the brush head, done"
        ]
      };
    },
    annahmen: "No test has measured yet how much time the brush saves. Testers write that cleaning is easier and faster. I cautiously calculate with a quarter less time, because only the scrubbing gets faster, not the spraying, rinsing and wiping. You hardly save any money: you still need the cleaner, and instead of sponges you buy replacement brushes now and then."
  },

  deckel: {
    mit: "stretch lids",
    felder: [
      { id: "bisher", label: "What do you cover things with now?", typ: "auswahl", wert: "folie",
        optionen: [
          { wert: "folie", label: "Cling film" },
          { wert: "alu", label: "Tin foil" },
          { wert: "beutel", label: "Bags" }
        ] },
      { id: "anzahl", label: "How often do you cover something?", min: 1, max: 21, step: 1, wert: 5, einheit: "× per week" }
    ],
    berechne(w) {
      const KOSTEN = { folie: 0.015, alu: 0.05, beutel: 0.04 };
      const NAMEN = { folie: "cling film", alu: "tin foil", beutel: "bags" };
      const meter = Math.round(w.anzahl * 52 * 0.3);
      return {
        minutenProWoche: w.anzahl * 10 / 60,
        euroProMonat: (w.anzahl * KOSTEN[w.bisher] * 52) / 12,
        extra: w.bisher === "beutel"
          ? `That's ${w.anzahl * 52} fewer bags in the bin every year.`
          : `That's around ${meter} metres less ${NAMEN[w.bisher]} in the bin every year.`,
        vorherTitel: NAMEN[w.bisher].replace(/^./, c => c.toUpperCase()),
        vorher: {
          folie: ["Unroll it, and it sticks to itself", "Doesn't cling to every bowl", "Into the bin after one use"],
          alu: ["Tear it off and press it round the rim", "Acidic and salty food dissolves aluminium from the foil", "Into the bin after one use"],
          beutel: ["First move the leftovers into the bag", "Tie it or close it with a clip", "Into the bin after one use"]
        }[w.bisher],
        nachher: [
          "Pull it over the rim, it seals",
          "Fits round and square containers",
          "Into the dishwasher and use it again"
        ]
      };
    },
    annahmen: "Depending on the brand, a piece of cling film (about 30 cm) costs 0.4 to 2.5 cents, a piece of tin foil 2 to 8 cents and a freezer bag 2.5 to 5 cents. I calculate with the middle in each case. No test has measured how much time you save yet. I cautiously estimate 10 seconds per use: no more unrolling and tearing off, but you have to find the right lid."
  },

  kindle: {
    mit: "an e-reader",
    felder: [
      { id: "buecher", label: "How many books do you read per year?", min: 1, max: 60, step: 1, wert: 12, einheit: "books" },
      { id: "preisBuch", label: "What does a book cost you on average?", min: 8, max: 30, step: 1, wert: 14, einheit: "€" },
      { id: "gratis", label: "How many of them could you read for free? (classics, Prime Reading, library)", min: 0, max: 20, step: 1, wert: 2, einheit: "books" }
    ],
    berechne(w) {
      const gratis = Math.min(w.gratis, w.buecher);
      const proJahr = (w.buecher - gratis) * w.preisBuch * 0.2 + gratis * w.preisBuch;
      const kg = (w.buecher * 0.3).toLocaleString("en-GB", { maximumFractionDigits: 1 });
      return {
        minutenProWoche: (w.buecher * 15) / 52,
        euroProMonat: proJahr / 12,
        extra: `And your bookshelf stays free: ${Math.round(w.buecher * 2.5)} cm of books and ${kg} kg less per year.`,
        vorherTitel: "Printed books",
        vorher: [
          "Go to the shop or wait for the delivery",
          "Heavy books in your holiday suitcase",
          "Small print, a lamp needed in the evening"
        ],
        nachher: [
          "The book is there in seconds",
          "Thousands of books on one light device",
          "Make the text bigger, the light is built in"
        ]
      };
    },
    annahmen: "In Germany, e-books are on average about 20% cheaper than the printed book. Free books save the full price. Library e-books (Onleihe) don't work on the Kindle, though, only on e-readers such as PocketBook or Tolino. For the trip to the shop, ordering or picking up, I calculate 15 minutes per book. A paperback weighs about 300 g and is about 2.5 cm thick."
  },

  waschtrockner: {
    mit: "a washer dryer",
    felder: [
      { id: "ladungen", label: "How often do you do the washing per week?", min: 1, max: 10, step: 1, wert: 3, einheit: "× per week", schnitt: [2, 3, 3.5, 4] },
      { id: "buegeln", label: "How many items do you iron per week?", min: 0, max: 20, step: 1, wert: 4, einheit: "items" },
      { id: "strom", label: "Your electricity price", min: 0.2, max: 0.6, step: 0.01, wert: 0.35, einheit: "€ per kWh", schnitt: STROM_LAENDER, schnittHinweis: "The letters on the slider show the average electricity price in the United Kingdom (UK) and Ireland (IE)." }
    ],
    berechne(w) {
      const stromMonat = ((w.ladungen * 52) / 12) * 2.2 * w.strom;
      return {
        minutenProWoche: w.ladungen * 10 + w.buegeln * 3 * 0.5,
        euroProMonat: -stromMonat,
        extra: `On the other hand, drying costs about €${stromMonat.toLocaleString("en-GB", { maximumFractionDigits: 0 })} of electricity a month.`,
        vorherTitel: "Drying rack",
        vorher: [
          "Set up the rack, hang up every item one by one",
          "Wait a day, often longer in winter",
          "Take it down, iron, put the rack away"
        ],
        nachher: [
          "Laundry in in the morning, set the end time",
          "Washed and dry in the evening",
          "Steam programme: far fewer creases"
        ]
      };
    },
    annahmen: "Hanging up, taking down and setting up and folding away the rack takes about 10 minutes per load. With the steam programme you save about half of the ironing; I calculate with 3 minutes per item. With a machine without a heat pump, drying uses a good 2 kWh of electricity per load (6 kg). I subtract that as a cost. With a heat pump it's a bit less. The numbers under the slider for washing: in Germany, laundry is done about 90 times a year per person on average, clearly more often in single households and clearly less often per head in larger ones. A four-person household does about 210 washes a year, so around 4 a week (both from the German Cosmetic, Toiletry, Perfumery and Detergent Association, IKW). That gives roughly 2 loads a week for 1 person, 3 for 2, 3.5 for 3 and 4 for 4 people." + STROM_QUELLEN
  },

  akkusauger: {
    mit: "a cordless vacuum",
    felder: [
      { id: "m2", label: "How big is your home?", min: 20, max: 200, step: 5, wert: 70, einheit: "m²", schnitt: [73, 103, 114, 129] },
      { id: "saugen", label: "How often do you vacuum per week?", min: 0, max: 7, step: 1, wert: 2, einheit: "×" },
      { id: "schnell", label: "How often do you quickly vacuum something up, crumbs for example?", min: 0, max: 14, step: 1, wert: 3, einheit: "× per week" }
    ],
    berechne(w) {
      // Herausholen, Kabel einstecken, in jedem Raum umstecken, wegräumen
      const proMal = 4 + 0.02 * w.m2;
      return {
        minutenProWoche: w.saugen * proMal + w.schnell * 2,
        euroProMonat: 0,
        extra: "And for the crumbs after a meal you no longer get the big vacuum out.",
        vorherTitel: "Corded vacuum",
        vorher: [
          "Get the heavy vacuum out of the cupboard",
          "Plug it in, re-plug it in every room",
          "Carry everything up for the stairs"
        ],
        nachher: [
          "Take it off the wall and start vacuuming",
          "No cable, no re-plugging",
          "As a handheld for the sofa, stairs and car"
        ]
      };
    },
    annahmen: "Getting the corded vacuum out, plugging it in, re-plugging it in every room and putting it away again takes about 4 minutes each time, plus 0.02 minutes per m² (so around 5.5 minutes for 70 m²). Quickly vacuuming something up is about 2 minutes faster each time. Money-wise you come out at roughly zero: you save the dust bags, but the battery weakens after a few years. The numbers under the slider for your home show the average size of a home in Germany (Federal Statistical Office, Microcensus 2022): 73 m² for 1 person, 103 m² for 2, 114 m² for 3 and 129 m² for 4 or more people."
  },

  reiskocher: {
    mit: "a rice cooker",
    felder: [
      { id: "bisher", label: "How do you cook rice now?", typ: "auswahl", wert: "topf",
        optionen: [
          { wert: "topf", label: "In a pot" },
          { wert: "beutel", label: "In boil-in bags" }
        ] },
      { id: "anzahl", label: "How often do you have rice?", min: 1, max: 14, step: 1, wert: 2, einheit: "× per week" }
    ],
    berechne(w) {
      const PROFILE = {
        topf: { name: "Rice in a pot", minuten: 10, euro: 0, vorher: [
          "Stand next to it so nothing boils over",
          "Burnt at the bottom, still hard on top",
          "Soak the pot and scrub it"
        ] },
        beutel: { name: "Boil-in bags", minuten: 5, euro: 0.10, vorher: [
          "Bring water to the boil, cook the bag in it",
          "Fish the hot bag out of the water",
          "The big pot of water uses more electricity"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: (w.anzahl * p.euro * 52) / 12,
        extra: "And nothing burns on any more: it knows by itself when the water has been absorbed.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Rice and water in, press the button",
          "It switches to keep-warm by itself",
          "Give the coated pot a quick rinse"
        ]
      };
    },
    annahmen: "With a pot you stand next to it for about 10 minutes while the rice cooks, or scrub the pot afterwards; with boil-in bags it's about 5 minutes. On electricity you come out at roughly zero compared with a pot with a lid: according to Stiftung Warentest, a rice cooker even uses a little more on average (121 instead of 91 watt-hours). For boil-in bags I calculate around 5 cents more electricity per meal: they cook in a pot full of bubbling water, and according to Stiftung Warentest cooking like that uses more than twice as much electricity as a rice cooker (around 270 watt-hours). Rice in boil-in bags from supermarket own brands costs only a little more than loose rice: I calculate an extra 5 cents per meal for two to three people."
  },

  kaffeevollautomat: {
    mit: "a bean-to-cup machine",
    felder: [
      { id: "tassen", label: "How many cups from capsules do you drink a day?", hinweis: "Everyone together. If you don't drink capsule coffee, set it to 0.", min: 0, max: 10, step: 1, wert: 2, einheit: "cups a day" },
      { id: "sorte", label: "Which capsules are they mostly?", typ: "auswahl", wert: "marke",
        optionen: [
          { wert: "marke", label: "Branded capsules, e.g. Nespresso" },
          { wert: "discount", label: "Cheap ones from a discount supermarket" }
        ] },
      { id: "unterwegs", label: "How often a week do you buy a coffee on the go?", hinweis: "Only the ones you would make at home in future.", min: 0, max: 14, step: 1, wert: 0, einheit: "× per week" }
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
          ? "With these settings, a bean-to-cup machine doesn't save you money. It's only worth it if freshly ground coffee and cappuccino at the push of a button are worth the price to you."
          : w.tassen > 0
          ? `And ${kapseln.toLocaleString("en-GB")} fewer capsules in the bin each year${becher > 0 ? `, plus up to ${becher} disposable cups` : ""}.`
          : `And up to ${becher} fewer disposable cups a year.`,
        vorherTitel: nurUnterwegs ? "Coffee on the go" : "Capsules",
        vorher: nurUnterwegs
          ? [
              "Off to the bakery or café for every coffee",
              "A cappuccino there costs almost 4 euros on average",
              "Often queuing until it's your turn"
            ]
          : [
              "A new capsule for every cup",
              "Buying capsules and keeping a stock",
              "Empty capsules end up in the bin"
            ],
        nachher: [
          "Beans in, press the button, done",
          "Every cup freshly ground, cappuccino too",
          "Empty the grounds and drip tray every day"
        ]
      };
    },
    annahmen: "A branded capsule costs around 40 cents, a cheap one from a discount supermarket around 20 cents (in the 2025 Stiftung Warentest test, for example, 17 to 19 cents). A cup from the bean-to-cup machine costs about 10 to 20 cents with beans, water and electricity, depending on the beans; I calculate with 15 cents. For descaler, cleaner and water filters I calculate 5 euros a month; depending on the machine and filter it's about 30 to 120 euros a year. In June 2026, a cappuccino in a café cost 3.80 euros on average in ten large German cities (study by the coffee retailer Coffee Friend); I cautiously calculate with 3.50 euros per coffee on the go. You need milk for a cappuccino with both machines, so I leave it out. If you make cappuccino with milk capsules, you save a little more than shown. All prices apply to Germany; the result is a rough figure. I don't count time, only money."
  },
  kochfunktion: {
    mit: "a cooking food processor",
    felder: [
      { id: "bisher", label: "What do you cook most?", typ: "auswahl", wert: "gemischt",
        optionen: [
          { wert: "ruehren", label: "Soups, sauces, risotto" },
          { wert: "gemischt", label: "A bit of everything" },
          { wert: "braten", label: "Lots of fried food" }
        ] },
      { id: "anzahl", label: "How often do you cook a hot meal?", min: 1, max: 14, step: 1, wert: 4, einheit: "× per week" }
    ],
    berechne(w) {
      const PROFILE = {
        ruehren: { name: "Stirring at the stove", minuten: 15, vorher: [
          "Chop onions and vegetables by hand",
          "Stand at the stove and stir so nothing burns",
          "Wash the board, knife and pan"
        ] },
        gemischt: { name: "Cooking at the stove", minuten: 10, vorher: [
          "Chop, stir, season",
          "Keep going back to the stove",
          "Wash the board, knife and pans"
        ] },
        braten: { name: "Frying in the pan", minuten: 5, vorher: [
          "Chop onions and vegetables by hand",
          "Sauce and side dish in a pan alongside",
          "Wash the frying pan, pan, board and knife"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: 0,
        extra: w.bisher === "braten"
          ? "You keep searing in the frying pan. The machine takes care of chopping, the sauce and the side dish."
          : "And while it cooks, you do something else.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Ingredients in the bowl, choose a programme",
          "It chops, stirs and cooks",
          "Wash the mixing bowl, blade and lid"
        ]
      };
    },
    annahmen: "No test has measured how much time a food processor with cooking function saves. My estimate: with soups, sauces and risotto you save about 15 minutes per meal, because you don't have to chop or stand next to the pan. With mixed meals it's about 10 minutes. With lots of fried food only about 5, because searing is still better done in the frying pan. I have already subtracted the time for washing the mixing bowl, blade and lid. I don't include electricity: whether the machine uses more or less than your hob depends on the dish."
  },

  kneten: {
    mit: "a stand mixer",
    felder: [
      { id: "bisher", label: "How do you make dough now?", typ: "auswahl", wert: "hand",
        optionen: [
          { wert: "hand", label: "By hand" },
          { wert: "handmixer", label: "With a hand mixer" }
        ] },
      { id: "anzahl", label: "How often do you bake or make dough?", min: 1, max: 20, step: 1, wert: 4, einheit: "× per month" }
    ],
    berechne(w) {
      const PROFILE = {
        hand: { name: "Kneading by hand", minuten: 10, vorher: [
          "Knead for at least 8 minutes until the dough is smooth",
          "Sticky hands, flour on the worktop",
          "Clean the bowl, worktop and hands"
        ] },
        handmixer: { name: "With a hand mixer", minuten: 5, vorher: [
          "Hold the mixer the whole time",
          "Stand there until the dough is ready",
          "Wash the bowl and beaters"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: (w.anzahl * p.minuten * 12) / 52,
        euroProMonat: 0,
        extra: w.bisher === "hand"
          ? "And you spare your arms too."
          : "And you no longer have to hold the mixer.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Ingredients in the bowl, choose a speed",
          "It kneads and mixes by itself",
          "Hook and whisk in the dishwasher"
        ]
      };
    },
    annahmen: "No test has measured how much time a stand mixer saves. My estimate: by hand you knead a yeast dough for at least 8 minutes, as the German supermarket chain REWE and the district office of Göppingen advise. Including mixing the ingredients it's about 10 minutes, and with the machine you don't have to be there for them. With a hand mixer I calculate about 5 minutes per dough during which you hold the mixer. According to the same sources the machine kneads for at least 5 minutes, but without you. For washing up I calculate the same time as before. I don't include electricity: kneading costs only a few cents."
  },

  sprudler: {
    mit: "a sparkling water maker",
    felder: [
      { id: "bisher", label: "Which sparkling water do you buy now?", typ: "auswahl", wert: "discount",
        optionen: [
          { wert: "discount", label: "Cheap own-brand water" },
          { wert: "marke", label: "Branded water" }
        ] },
      { id: "liter", label: "How much sparkling water do you drink per week?", min: 1, max: 25, step: 0.5, wert: 4, einheit: "litres per week", schnitt: [2, 3.5, 5.5, 7] }
    ],
    berechne(w) {
      const PREIS = { discount: 0.20, marke: 0.60 };   // gekauftes Sprudelwasser, € pro Liter
      const SELBST = 0.15;                              // Gas pro Liter, Leitungswasser fast gratis
      const kilo = Math.round((w.liter * 52) / 10) * 10;
      const wochen = Math.round(45 / w.liter);
      return {
        minutenProWoche: 0,
        euroProMonat: ((PREIS[w.bisher] - SELBST) * w.liter * 52) / 12,
        extra: `And you carry around ${kilo.toLocaleString("en-GB")} kilos less water home each year, not counting the empties.`,
        vorherTitel: w.bisher === "marke" ? "Buying branded water" : "Cheap water from the supermarket",
        vorher: [
          "Carrying packs or crates to the car and into your home",
          "Collecting empties and taking them back",
          "Space for the stock in the kitchen or cellar"
        ],
        nachher: [
          "Tap water into the bottle, press a few times",
          wochen <= 1 ? "Swap the cylinder about every week" : `Swap the cylinder about every ${wochen} weeks`,
          "No crates, no empties"
        ]
      };
    },
    annahmen: "In Germany, cheap sparkling water from discount supermarkets costs around 20 cents per litre, branded water in plastic bottles often 60 cents or more. When you make it yourself, you mainly pay for the gas: about 10 to 20 cents per litre depending on the cylinder and machine; I calculate with 15 cents. One cylinder lasts about 40 to 60 litres; I calculate with 45. Tap water costs less than half a cent per litre, so I leave it out. I don't count time: carrying crates and taking back empties goes away, but you carbonate every bottle yourself. The marks on the slider: in Germany each person drinks just under 130 litres of mineral water a year on average, a good 70 percent of it sparkling (Association of German Mineral Springs). That's just under 2 litres of sparkling water per person per week."
  },
  geschirrspueler: {
    mit: "a countertop dishwasher",
    felder: [
      { id: "mal", label: "How often do you wash up by hand per week?", min: 1, max: 14, step: 1, wert: 7, einheit: "× per week" },
      { id: "minuten", label: "How long does it take you each time?", hinweis: "Without big pots and pans, you still wash those by hand.", min: 5, max: 60, step: 5, wert: 20, einheit: "minutes" }
    ],
    berechne(w) {
      const MASCHINE = 5;   // Minuten pro Spülgang: einräumen, ausräumen, beim Tank Wasser einfüllen
      return {
        minutenProWoche: w.mal * Math.max(0, w.minuten - MASCHINE),
        euroProMonat: 0,
        extra: "For money I reckon with zero: the machine needs electricity and tabs, but you save hot water and washing-up liquid.",
        vorherTitel: "Washing up by hand",
        vorher: [
          "Fill the sink and scrub every item one by one",
          "Dry up or fill the draining rack",
          "If you leave it, the dishes pile up"
        ],
        nachher: [
          "Load it, press the button, done",
          "With the tank machine, fill in water first",
          "You still wash big pots and pans by hand"
        ]
      };
    },
    annahmen: "Loading and unloading takes about 5 minutes per wash; with the tank machine that includes filling it. I derived the starting value of 20 minutes for washing up by hand from a study by the University of Bonn: there, 113 people washed twelve place settings by hand, on average in 79 minutes, so just over 6 minutes per place setting. For three place settings that's around 20 minutes. Loading and unloading a big dishwasher with twelve place settings took about 15 minutes there. For money I reckon with zero: the machine needs electricity and tabs, but you save hot water and washing-up liquid. If you have been washing up very sparingly by hand, you'll probably pay a little more with the machine. For the “How often” slider I found no reliable averages by household size, so there are no markers there."
  },

  balkonkraftwerk: {
    mit: "a plug-in solar kit",
    preisLabel: "How much does your kit cost?",
    preisHinweis: "You can see the current price on Amazon. With a battery, only enter what the panels cost here.",
    kaufpreis: w => w.preis + w.speicher,
    felder: [
      { id: "ort", label: "Where will the panels go?", typ: "auswahl", wert: "balkon",
        optionen: [
          { wert: "balkon", label: "Upright on the balcony railing" },
          { wert: "schraeg", label: "Tilted, for example on a flat roof or in the garden" }
        ] },
      { id: "richtung", label: "Which way do they face?", hinweis: "If they face south-east or south-west, choose south. Facing north it is hardly worth it.", typ: "auswahl", wert: "sued",
        optionen: [
          { wert: "sued", label: "South" },
          { wert: "ostwest", label: "East or west" }
        ] },
      { id: "verbrauch", label: "How much electricity do you use per year?", hinweis: "It is on your electricity bill.", min: 800, max: 6000, step: 100, wert: 1900, einheit: "kWh per year", schnitt: [1200, 1900, 2400, 2600], schnittHinweis: "The numbers on the slider show the average for a flat with 1, 2, 3 and 4 people (German Stromspiegel 2025, without hot water from electricity)." },
      { id: "strom", label: "Your electricity price", min: 0.2, max: 0.6, step: 0.01, wert: 0.37, einheit: "€ per kWh", schnitt: STROM_LAENDER, schnittHinweis: "The letters on the slider show the average electricity price in the United Kingdom (UK) and Ireland (IE)." },
      { id: "speicher", label: "How much does your battery cost?", hinweis: "You can see the current price on Amazon. Add a reading head for the electricity meter if none is included.", min: 300, max: 1500, step: 10, wert: 450, einheit: "€" }
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
      const runde = x => (Math.round(x / 10) * 10).toLocaleString("en-GB");
      return {
        minutenProWoche: 0,
        euroProMonat: (selbst * w.strom) / 12,
        extra: !mitSpeicher
          ? `The panels deliver about ${runde(ertrag)} kWh a year. You use about ${runde(selbst)} kWh of that yourselves and feed the rest into the grid.`
          : `The panels deliver about ${runde(ertrag)} kWh a year. With a battery you buy about ${runde(selbst)} kWh less electricity as a result; without a battery it would be about ${runde(ohne)} kWh. ` +
            (mehrEuro <= 0 ? "With your consumption a battery adds nothing, because you use almost all the power yourselves even without it."
              : jahre <= 10 ? `The battery alone brings about €${Math.round(mehrEuro)} a year and has paid for itself after about ${Math.round(jahre)} years.`
              : "At your place the battery alone would take over ten years to pay for itself. That's hardly worth it."),
        vorherTitel: "Without a plug-in solar kit",
        vorher: [
          "You buy every kilowatt hour from your electricity supplier",
          "Fridge, router and standby run all day on your bill",
          `About €${runde(w.verbrauch * w.strom)} of electricity a year`
        ],
        nachher: mitSpeicher ? [
          "During the day, solar power flows through the socket into your home",
          "What's left over charges the battery, and you use it in the evening and at night",
          "Set up and register once, then it runs by itself"
        ] : [
          "During the day, solar power flows through the socket into your home",
          "Whatever is running uses your own power first",
          "Register once, then it runs by itself"
        ]
      };
    },
    annahmen: "I calculate with a kit like the ones here: two panels with about 900 watts together and an 800-watt inverter. Add the mount to the purchase price, as it is not included with these kits. Upright on a south-facing balcony, such a kit delivers about 600 kWh a year, tilted about 850 kWh. Stiftung Warentest calculated 600 to 720 kWh on a balcony railing and 860 to 1,020 kWh on a sample roof for the kits it tested in 2025, and SolarZentrum Berlin and HTW Berlin (a Berlin university) arrive at similar values. Facing east or west, I calculate with 15 percent less (HTW Berlin). How much of it you use yourselves depends on your consumption: people who use little electricity use about a third themselves, a family a good half. This matches simulations by HTW Berlin and C.A.R.M.E.N. and an example from the Verbraucherzentrale NRW. Power you don't use yourselves counts as €0. With a battery I calculate with one of about 2 kWh, the size of the batteries here. How much more you use yourselves with it, I worked out for many consumption levels with the plug-in solar simulator of HTW Berlin and turned into a formula. The simulator already includes the losses from charging and discharging. I subtract 35 kWh a year from that, because the battery itself needs a few watts around the clock: smartzone.de measured about 4 watts for the Zendure. I calculate with two panels. With four panels a large battery brings more, which the calculator doesn't show. Whether the battery alone is worth it, I compare against ten years, because HTW Berlin calculates with that lifetime for a battery. In Switzerland only 600 watts are allowed, so a kit there delivers somewhat less, but you get a small payment for power fed into the grid. I don't account for shade, so the result is a rough value." + STROM_QUELLEN
  },
  sparduschkopf: {
    mit: "a water-saving shower head",
    felder: [
      { id: "warm", label: "How is your shower water heated?", typ: "auswahl", wert: "heizung",
        optionen: [
          { wert: "heizung", label: "By the heating, for example gas" },
          { wert: "strom", label: "With electricity (instantaneous heater, boiler)" }
        ] },
      { id: "jetzt", label: "How much does your shower head let through now?", hinweis: "Let the shower run into a bucket for 30 seconds and multiply the litres by two.", min: 9, max: 20, step: 0.5, wert: 12, einheit: "litres per minute" },
      { id: "duschen", label: "How many showers are taken in your home per week?", hinweis: "Everyone together: if two people shower four times each, that's 8.", min: 1, max: 35, step: 1, wert: 8, einheit: "× per week" },
      { id: "minuten", label: "How long does the water run when showering?", min: 2, max: 20, step: 1, wert: 8, einheit: "minutes" }
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
        extra: `That's around ${gerundet.toLocaleString("en-GB")} litres less hot water a year.`,
        vorherTitel: "Old shower head",
        vorher: [
          `Around ${Math.round(w.jetzt * w.minuten)} litres of hot water per shower`,
          w.warm === "strom" ? "Every litre is heated with electricity" : "The heating warms every litre",
          "You pay for water and sewage for every litre"
        ],
        nachher: [
          `Around ${Math.round(NEU * w.minuten)} litres per shower`,
          "Shower just as long and just as warm",
          "Screwed on yourself in a few minutes"
        ]
      };
    },
    annahmen: "I compare your current shower head with a water-saving one that lets through 8.5 litres per minute. That's how much the three models here let through in the Stiftung Warentest test, 8.2 to 8.8 litres. Older shower heads often let through 10 to 15 litres per minute; I start at 12. Heating one litre of shower water from cold to about 37 degrees takes around 0.03 kWh. For electricity I calculate with 37 cents per kWh (German Association of Energy and Water Industries BDEW, August 2026), for the heating with the gas price of around 12 cents (Federal Statistical Office and BDEW, 2026). Water and sewage together cost about €4 per cubic metre, so 0.4 cents per litre. All prices apply to Germany; the result is a rough figure. You don't save time: you shower as long as before."
  },
  thermostate: {
    mit: "smart radiator thermostats",
    preisLabel: "How much does one thermostat cost?",
    preisHinweis: "You can see the current price on Amazon. I multiply it by the number of your radiators.",
    kaufpreis: w => w.preis * w.heizkoerper + w.zentrale,
    felder: [
      { id: "heizkosten", label: "What do you pay for heating per year?", hinweis: "It's on your heating bill.", min: 200, max: 3000, step: 50, wert: 900, einheit: "€ per year", schnitt: [1250, 1750, 1950, 2200] },
      { id: "bisher", label: "How do you heat now?", typ: "auswahl", wert: "manchmal",
        optionen: [
          { wert: "durch", label: "Mostly left on" },
          { wert: "manchmal", label: "I sometimes turn it down" },
          { wert: "immer", label: "I always turn it down myself" }
        ] },
      { id: "heizkoerper", label: "How many radiators do you want to fit?", min: 1, max: 12, step: 1, wert: 4, einheit: "pcs" },
      { id: "zentrale", label: "How much does the hub cost?", hinweis: "If you already have a suitable hub, set it to €0.", min: 0, max: 150, step: 5, wert: 50, einheit: "€" }
    ],
    berechne(w) {
      // anteil = gesparte Heizkosten, drehen = wie oft du bisher selbst drehst (1 = zweimal am Tag)
      const PROFILE = {
        durch: { anteil: 0.12, drehen: 0, name: "Heating left on", vorher: [
          "It heats even when nobody's home",
          "You forget to turn it down when you leave",
          "At the end of the month you pay for an empty flat"
        ] },
        manchmal: { anteil: 0.08, drehen: 0.5, name: "Turning it down yourself", vorher: [
          "Sometimes you remember, sometimes you don't",
          "In the evening you come home to a cold flat",
          "Then it takes a while to warm up again"
        ] },
        immer: { anteil: 0.04, drehen: 1, name: "Turning it down yourself", vorher: [
          "Turn down every radiator every morning",
          "In the evening you come home to a cold flat",
          "Then it takes a while to warm up again"
        ] }
      };
      const p = PROFILE[w.bisher];
      const heizkostenWeniger = w.heizkosten * p.anteil;
      return {
        // Ein Thermostat von Hand drehen dauert etwa 15 Sekunden, zweimal am Tag
        minutenProWoche: p.drehen * w.heizkoerper * 2 * 7 * 0.25,
        // Batterien: etwa 1 € pro Thermostat und Jahr
        euroProMonat: (heizkostenWeniger - w.heizkoerper) / 12,
        extra: `That's around €${Math.round(heizkostenWeniger)} less in heating costs a year, minus about €${w.heizkoerper} for batteries. And you come home to a warm flat every day.`,
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Set up a weekly heating plan once",
          "Warm shortly before you get home",
          "Turned down while you're out"
        ]
      };
    },
    annahmen: "With a heating plan you save about 10% of your heating costs on average (co2online, German Environment Agency). If your heating has mostly been left on, I calculate with 12%; if you sometimes turn it down yourself, 8%; and if you always do, 4%. For comparison: every degree less saves around 6% of heating energy. Batteries cost about €1 per thermostat per year, and I subtract that. Turning a radiator down and back up by hand takes about 15 seconds, twice a day. You save that time if you turn them yourself now. The numbers under the slider for heating costs: the average size of a home in Germany (Federal Statistical Office, Microcensus 2022), multiplied by the cost of gas heating according to co2online's Heizspiegel 2026 (billing year 2025), around €17 per m² a year. That's about €1,250 for 1 person, €1,750 for 2, €1,950 for 3 and €2,200 for 4 or more people. With a heat pump it's much less, with district heating a bit more. For thermostats with a hub, its price is added once."
  }
};
