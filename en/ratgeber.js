/*
  MYLE guides (myle.life/en/ratgeber and myle.life/en/ratgeber-<id>). Same structure as the German ratgeber.js.
*/
const RATGEBER = [
  {
    id: "saugroboter-kleine-wohnung",
    produkt: "saugroboter",
    geprueft: "2026-11-04",
    titel: "Is a robot vacuum worth it for a small flat?",
    frage: "Is a robot vacuum worth it for a small flat?",
    seitenTitel: "Is a robot vacuum worth it for a small flat?",
    beschreibung: "What a robot vacuum and mop really saves on 30 to 60 m², how loud it is, how much space the base station needs and when it's not for you.",
    kurzantwort: "Yes, even on 30 to 60 m² it's worth it for most people, and an entry-level or mid-range model is often enough. If you otherwise vacuum twice a week and mop once, my calculator says you save between half an hour and almost a full hour a week. It's not for you if there's no room for the base station or you don't want to tidy up quickly before it starts.",
    abschnitte: [
      {
        titel: "How much time you save on 30 to 60 m²",
        absaetze: [
          "For vacuuming, including getting ready, my calculator assumes about 5 minutes plus 0.2 minutes per m², and for mopping 8 minutes plus 0.25 minutes per m². It deducts 5 minutes a week for looking after the robot.",
          "If you vacuum twice and mop once a week, you save around 33 minutes a week on 30 m² and around 52 minutes on 60 m². That's about 28 to 45 hours a year.",
          "What the calculator doesn't show: with a schedule, the robot cleans while you're at work, every day if you like. Your flat is then clean more often than if you vacuum yourself twice a week."
        ]
      },
      {
        titel: "My experience after 14 years",
        art: "erfahrung",
        absaetze: [
          "I've been using robot vacuums for 14 years and since then I've hardly ever had to vacuum or mop myself. The most important trick: set a schedule. Then it cleans while I'm at work, and I come home to a clean flat every evening."
        ]
      },
      {
        titel: "What even an inexpensive robot can do",
        absaetze: [
          "For a small flat you don't need a top model. Laser navigation is available even in the lower price range: the robot creates a map and cleans in lanes. In the app you set the schedule, have individual rooms cleaned and block off areas, such as a delicate rug.",
          "If you want to spend more, look out for two things above all. With a camera, a robot usually recognises cables, socks and shoes and drives around them. Without a camera it tends to drive over them or get stuck: in a test by smarthomeassistent.de, an inexpensive model recognised none of 53 obstacles. And if you want thorough mopping, choose a model whose base station also washes the mops or the roller."
        ]
      },
      {
        titel: "How loud it is",
        absaetze: [
          "While vacuuming, most robots are about 55 to 70 decibels, roughly like a normal conversation. A classic vacuum cleaner usually reaches 70 to 85 decibels. Only the base station gets really loud when it empties the robot: about 75 to 90 decibels, but only for a few seconds. In a small flat the schedule is therefore doubly worthwhile: let it run when you're not at home."
        ]
      },
      {
        titel: "Space for the base station",
        absaetze: [
          "A base station is often around 40 cm wide and up to 60 cm high. In front of it the robot needs room to drive in and dock: depending on the model, 0.8 to 1.5 m should be kept clear at the front and 5 to 50 cm at the sides. Measure this beforehand, especially in a hallway or a small room."
        ]
      },
      {
        titel: "Will it fit under the sofa and bed?",
        absaetze: [
          "Most robots are about 9 to 12 cm high, slim models around 8 cm. Measure how much space there is under your sofa, bed and cupboards, and allow a little extra. If it's only just enough, it won't reliably get underneath."
        ]
      },
      {
        titel: "Rugs, fringes and cables",
        absaetze: [
          "Deep-pile carpets and rugs with fringes push many robots to their limits: fringes wrap around the brush, and some get stuck on deep pile. Tuck the fringes under the rug or block it in the app. It's better to clear away cables and socks before it starts, especially with models without a camera."
        ]
      },
      {
        titel: "How much electricity it uses",
        absaetze: [
          "One cleaning run uses only a few hundredths of a kilowatt hour. The base station, which is plugged in around the clock, matters more: about 1 to 4 watts, so up to around 35 kWh a year. Example calculations put the robot and base station together at about 30 to 60 kWh a year.",
          "When it comes to electricity, robots and corded vacuum cleaners are not far apart. So the robot saves you time, not electricity."
        ]
      }
    ],
    verweis: {
      text: "Which models I recommend and how much time you save with your own numbers is on my robot vacuum and mop page.",
      knopf: "To the robot vacuum and mop with calculator"
    },
    wannNicht: [
      "There's no room for the base station: around 40 cm along the wall and 0.8 to 1.5 m clear in front of it.",
      "You have lots of deep-pile rugs or rugs with fringes that you don't want to tuck under or block off.",
      "There's often a lot lying around on your floor, and you don't want to tidy up quickly before it starts.",
      "Your furniture is so low that even a slim model of about 8 cm doesn't fit underneath, and that's exactly where you want to clean.",
      "Your door thresholds are higher than about 2 cm: usually only models with a climbing aid manage that.",
      "You only vacuum once a week, hardly ever mop and are happy with that: then, according to my calculator, it only saves you a few minutes a week on 30 m²."
    ],
    fragen: [
      { f: "Is an inexpensive robot enough for a small flat?", a: "Usually yes, if it uses laser navigation. Then it cleans in lanes, and you set the schedule, rooms and no-go zones in the app. Without a camera, clear away cables and socks beforehand." },
      { f: "Can it run while I'm working from home?", a: "Yes, but you'll hear it, about as loud as a conversation. Better to let it run during your lunch break, or send it in the app only to the rooms you're not sitting in." },
      { f: "Do I need the mopping function?", a: "Definitely if you have a lot of hard floor such as tiles, laminate or parquet: the floor stays clean and you'll hardly need the mop bucket. If you mainly have carpet, or you like mopping yourself anyway, a robot that only vacuums is enough. It often costs only half as much." },
      { f: "Can it get over door thresholds?", a: "Most models manage thresholds up to about 2 cm. Models with a climbing aid manage higher ones, some now more than 5 cm." },
      { f: "What do I still have to do myself?", a: "Change the dust bag every few weeks and clean the brush now and then. With a mopping robot you top up the clean water and empty the dirty water as soon as it tells you. Don't leave it standing for days, though, or it will start to smell." }
    ],
    quellen: [
      { name: "My calculator on the robot vacuum and mop page", text: "the times for 30 and 60 m², the assumptions are listed there under “How I calculate”" },
      { name: "Stiftung Warentest: robot vacuums test (June 2026)", text: "height, door thresholds, size of the base stations, lift cables before starting and exclude rugs in the app" },
      { name: "Stiftung Warentest: robot vacuum and mop test (December 2025)", text: "twelve robots with base station, most don't convince on carpet" },
      { name: "ÖKO-TEST: what a robot vacuum costs per year (August 2023)", text: "battery around 31 watt hours, base station 3 to 4 watts around the clock, corded vacuum almost always cheaper" },
      { name: "netzwelt.de: electricity use of robot vacuums (February 2026)", text: "69 watts while vacuuming, about 4 watts on standby, around 50 kWh a year at two hours a day" },
      { name: "t-online: vacuum cleaner or robot, which is cheaper? (April 2026)", text: "35 to 50 kWh a year with base station, only slightly less than a corded vacuum" },
      { name: "Heidelberg24 (September 2022) and drohnen.de (2019)", text: "further calculations of robot vacuum electricity compared with a vacuum cleaner" },
      { name: "smarthomeassistent.de: quiet robot vacuums (August 2026)", text: "usually 55 to 65 dB, emptying at the base station briefly 75 to 80 dB" },
      { name: "netzwelt.de: robot vacuum noise (February 2026) and self-emptying stations (March 2026)", text: "usually 60 to 70 dB, 60 dB is a normal conversation, the base station 80 to 90 dB for a few seconds" },
      { name: "testsiegertv.com: self-emptying stations (July 2021)", text: "emptying up to 90 dB, only takes a few seconds" },
      { name: "home&smart: slim robot vacuums test (November 2026)", text: "normal robots 9 to 12 cm high, slim ones 7 to 9 cm" },
      { name: "home&smart: LiDAR versus camera (November 2026)", text: "the laser builds the map, only the camera recognises a cable as a cable, otherwise it wraps around the brush" },
      { name: "home&smart: robot vacuum door threshold test (September 2026)", text: "without climbing aid usually 2 cm, some models considerably more" },
      { name: "smarthomeassistent.de: Roborock won't go under furniture (June 2023)", text: "a few millimetres more are often not enough, better allow extra room" },
      { name: "smarthomeassistent.de: rugs with fringes (May 2023) and robot vacuums for high thresholds (July 2026)", text: "fringes wrap around the brush, tucking them under helps, some models climb over 5 cm" },
      { name: "smarthomeassistent.de: Roborock Q10 S5+ review (July 2026) and Roborock Q7 L5+ review (May 2026)", text: "laser navigation in the lower price range, stuck on deep pile, recognised none of 53 obstacles" },
      { name: "netzwelt.de: robot vacuum navigation and robot vacuums for carpets (February 2026)", text: "laser already on cheaper models, maps and no-go zones in the app, deep pile and fringes as the limit" },
      { name: "Manufacturer information and manuals", text: "space in front of and beside the base station according to Roborock (Q5 Pro, Q8 Max+), Kärcher (RCV 5) and Ecovacs, station sizes according to Kärcher and Anker, noise according to Hoover, Anker and Ecovacs, electricity, rug edges and thresholds according to Anker" }
    ]
  },
  {
    id: "airfryer-oder-backofen",
    produkt: "airfryer",
    geprueft: "2026-11-04",
    titel: "Air fryer or oven: which is cheaper?",
    frage: "Air fryer or oven: which is cheaper?",
    seitenTitel: "Air fryer or oven: which is cheaper?",
    beschreibung: "How much electricity an air fryer and an oven use per dish, what that means in cents and when the oven catches up.",
    kurzantwort: "For small amounts the air fryer is cheaper: in tests it often uses only half the electricity per dish, or even less. At 37 cents per kWh you save around 13 to 33 cents per dish. If a large amount needs several batches, the oven is just as good or even cheaper.",
    abschnitte: [
      {
        titel: "How much electricity a dish uses",
        absaetze: [
          "Several tests and comparisons show how much electricity the same dish uses in an air fryer and in an oven. I worked out the costs at 37 cents per kWh, the average in Germany. In Austria and Switzerland electricity costs around 30 cents, so each dish costs a little less there."
        ],
        tabelle: {
          kopf: ["Dish","Air fryer","Oven","Source"],
          zeilen: [
            ["Chips, 2 portions","0.29 kWh (11 cents)","0.86 kWh (32 cents)","Which?, 2026"],
            ["Chips, 1 portion","0.35 kWh (13 cents)","0.7 kWh (26 cents)","inside digital, 2025"],
            ["Jacket potato","0.39 kWh (15 cents)","1.08 kWh (40 cents)","Which?, 2026"],
            ["Whole chicken","0.54 kWh (20 cents)","1.16 kWh (43 cents)","Which?, 2026"],
            ["Chicken wings","0.2 to 0.3 kWh (7 to 11 cents)","1.0 to 1.2 kWh (37 to 44 cents)","stromguide.com via VOL.AT, 2025"]
          ]
        }
      },
      {
        titel: "Why the air fryer uses less",
        absaetze: [
          "Its cooking space is small, and the hot air is there quickly. Usually you don't need to preheat at all, or only for a few minutes, whereas an oven takes about 10 to 15 minutes. The cooking itself is usually shorter too. According to Stiftung Warentest, air fryers are faster than ovens and use less electricity."
        ]
      },
      {
        titel: "When the oven catches up",
        absaetze: [
          "The advantage holds as long as everything fits in the basket in one go. If you cook for lots of people and need two or three batches, the saving shrinks, and for large amounts the oven is just as good or cheaper.",
          "For pizza, traybakes or a big bake, the oven is the better choice anyway. There, space is what counts, and the air fryer doesn't have it."
        ]
      },
      {
        titel: "What it adds up to in a year",
        absaetze: [
          "If you cook a dish in the air fryer instead of the oven four times a week, my calculator says you save around 42 euros a year at 37 cents per kWh. At 30 cents per kWh it's around 34 euros. If you only cook a hot meal once a week, it's just over 10 euros.",
          "So electricity alone is hardly a reason to buy an air fryer. You gain more in time: no preheating, no scrubbing baking trays and hardly any washing-up, about 18 minutes per dish according to my calculator."
        ]
      },
      {
        titel: "My experience",
        art: "erfahrung",
        absaetze: [
          "Since I got my air fryer, I haven't used my frying pans. And everything tastes better: vegetables come out crunchier and taste more intense, chicken turns out perfectly tender every time. On top of that, I have practically no washing-up any more. Nothing ever burns on, and I simply put the baskets in the dishwasher or wipe them out with a damp cloth at the end."
        ]
      },
      {
        titel: "If you stick with the oven",
        absaetze: [
          "You can save electricity with the oven too. For most dishes you don't need to preheat it, only for some doughs such as sponge cake or biscuits. With fan mode you set the temperature about 20 degrees lower than with conventional top and bottom heat, and so use less electricity. And with long cooking times, switch it off 5 to 10 minutes early: the residual heat keeps cooking."
        ]
      }
    ],
    verweis: {
      text: "How much you save with your own electricity price and dishes, and which air fryers I recommend, is on my air fryer page.",
      knopf: "To the air fryer with calculator"
    },
    wannNicht: [
      "You usually cook for four or more people at once and would need several batches in the air fryer.",
      "You mainly bake pizza, traybakes or big bakes.",
      "You only want to save electricity: it's a matter of cents per dish, and it takes a while before that pays back the purchase price.",
      "You rarely cook hot meals: then you only save a few euros a year.",
      "There's no room on your worktop for another appliance."
    ],
    fragen: [
      { f: "Do I need to preheat an air fryer?", a: "Usually not, or only for a few minutes. An oven takes about 10 to 15 minutes." },
      { f: "How much does a dish in the air fryer cost?", a: "It usually uses 0.2 to 0.5 kWh, so at 37 cents per kWh about 7 to 20 cents. In the oven the same amount often uses twice as much or more." },
      { f: "Is fan mode in the oven just as economical?", a: "Fan mode uses less electricity than top and bottom heat because you can set it about 20 degrees lower. For small amounts the air fryer still uses less, because it heats a much smaller space." },
      { f: "Is an air fryer worth it for one person?", a: "Especially then. With small portions the difference from the oven is greatest. If you usually cook only one thing at a time, a single-basket model is enough." }
    ],
    quellen: [
      { name: "Which?: “Air fryer vs oven” (October 2026)", text: "electricity measured per dish, chips, jacket potato and whole chicken, less than half in the air fryer, the advantage shrinks with several batches" },
      { name: "Choice: air fryer versus oven (October 2023)", text: "three dishes compared, about half the electricity per hour in the air fryer, the oven with 15 minutes of preheating" },
      { name: "inside digital: air fryer myths (November 2025)", text: "chips about 0.35 kWh in the air fryer, about 0.7 kWh in the oven, the oven is better for large amounts" },
      { name: "VOL.AT with figures from stromguide.com (October 2025)", text: "chicken wings 1.0 to 1.2 kWh in the oven, 0.2 to 0.3 kWh in the air fryer, the oven for families cooking large amounts" },
      { name: "testundtipps.de: air fryer or oven (August 2026)", text: "preheating 2 to 3 minutes instead of 10 to 15, chips 0.3 to 0.5 kWh per batch, roughly level for large amounts" },
      { name: "home&smart (November 2026) and Utopia (August 2026)", text: "several batches reduce the saving, electricity alone is hardly a reason for an air fryer" },
      { name: "Stiftung Warentest: air fryers test (September 2026)", text: "air fryers cook faster than ovens and use less electricity, many don't cook a large portion of chips evenly" },
      { name: "ÖKO-TEST: saving energy with the oven (January 2026)", text: "preheating usually unnecessary, 20 degrees less with fan mode, switch off 10 minutes early with long cooking times" },
      { name: "German Federal Centre for Nutrition, via dpa and Utopia (August 2024)", text: "20 to 30 degrees less with fan mode, over 20 percent less energy without preheating, switch off 5 to 10 minutes early" },
      { name: "oesterreich.gv.at: cookers and ovens (March 2025)", url: "https://www.oesterreich.gv.at/de/themen/umwelt_und_klima/energie_und_ressourcen_sparen/2/Seite.2430150", text: "up to 20 percent less energy with fan mode, switch off in time and use the residual heat" },
      { name: "My calculator on the air fryer page", text: "oven about 1.0 kWh and air fryer about 0.45 kWh per dish, 18 minutes less than the oven for preheating, trays and washing-up, the assumptions are listed there under “How I calculate”" },
      { name: "BDEW (German Association of Energy and Water Industries): electricity price analysis August 2026", url: "https://www.bdew.de/media/documents/BDEW_Strompreisanalyse_082026.pdf", text: "37 cents per kWh for households in Germany" },
      { name: "E-Control (Austrian regulator): electricity price monitor January 2026", url: "https://www.e-control.at/documents/1785851/1811582/preismonitor_jan_26.pdf/b2376bf8-3337-4ba0-ad26-f98a443ab871?t=1767782911898", text: "on average about 30 cents per kWh from the regional suppliers in Austria" },
      { name: "ElCom (Swiss Federal Electricity Commission): newsletter 9/2025", url: "https://www.elcom.admin.ch/dam/de/sd-web/znXqHISH0pFP/Newsletter_09-2025_D.pdf", text: "27.7 centimes per kWh for a typical household in Switzerland in 2026" },
      { name: "Manufacturer information", text: "preheating and programmes according to Cosori" }
    ]
  }
];
