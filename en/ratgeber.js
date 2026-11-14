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
  },
  {
    id: "saugroboter-haustiere",
    produkt: "saugroboter",
    geprueft: "2026-11-04",
    titel: "Robot vacuum with pets: what matters?",
    frage: "Robot vacuum with pets: what matters?",
    seitenTitel: "Robot vacuum with pets: what matters?",
    beschreibung: "Which brush, base station and camera a robot vacuum and mop needs with a dog or cat, how your pet gets used to it and when it's not for you.",
    kurzantwort: "Three things: a brush that pet hair hardly wraps around, a base station that empties it, and a camera that usually recognises dog poo and drives around it. In the app you also block off the bowl, litter tray and sleeping spot. With a pet it's especially worth it: if you vacuum every day because of the hair, my calculator says it saves you around two hours a week on 60 m².",
    abschnitte: [
      {
        titel: "How much time you save with a pet",
        absaetze: [
          "If you vacuum every day because of the hair, my calculator says it saves you just under two hours a week on 60 m², including getting ready. If you also mop once a week, it's just over two. That adds up to 99 to 119 hours a year; if you vacuum twice and mop once a week, it's 45.",
          "The robot, on the other hand, runs every day on a schedule, and you hardly have to do anything for it."
        ]
      },
      {
        titel: "My experience with my cat",
        art: "erfahrung",
        absaetze: [
          "I bought my first robot vacuum partly because of the tomcat I had at the time. He was constantly scattering cat litter around the flat, and it drove me mad. Back then, in my first and second flat, the robot helped me a lot with the cat litter."
        ]
      },
      {
        titel: "A brush that hair hardly wraps around",
        absaetze: [
          "Rubber instead of bristles does help a little. What really matters, though, is how the main brush is built and mounted.",
          "Dreame, for example, uses two rollers in some robots that are only attached on one side, with the other side open. Rotation and airflow push the hair to this open end, where it gets sucked away. In tests, even long hair hardly got caught this way.",
          "Other manufacturers work in a similar way: Narwal hangs a cone-shaped brush on one side only. Roborock splits the brush in the middle, where the hair gets sucked away.",
          "On hard floors many robots clean well; on carpet the difference shows. According to Stiftung Warentest, the rating for picking up fibres on carpet is what matters for pet owners. The grades there range from good to poor."
        ]
      },
      {
        titel: "A base station that empties it",
        absaetze: [
          "The bin in the robot is small and quickly full of fur. Without a base station you'll often empty it yourself every day with a pet. A base station empties it after cleaning, and you only change the bag now and then.",
          "Depending on the model, that's due every few weeks to months, sooner with a pet that sheds. The bag usually closes when you take it out, so you hardly come into contact with dust and hair."
        ]
      },
      {
        titel: "A camera that recognises dog poo",
        absaetze: [
          "If a robot drives through dog poo or vomit, it spreads it all over your home. Without a camera it usually can't recognise anything like that. Models with a camera and AI usually recognise it and drive around it: in tests with fake dog poo, good models avoided almost all of it.",
          "There's no guarantee, though. The runnier and flatter an accident is, the more likely even a camera will miss it. If your pet is still young, already old or currently ill, take a quick look at the floor before it starts."
        ]
      },
      {
        titel: "Block off the bowl, litter tray and sleeping spot",
        absaetze: [
          "In the app, set up no-go zones around the food and water bowls, the litter tray and the sleeping spot. That way the robot leaves the bowls alone, and your pet has places where it isn't disturbed."
        ]
      },
      {
        titel: "How to get your pet used to the robot",
        absaetze: [
          "At around 55 to 70 decibels a robot is quieter than a normal vacuum cleaner. Only the base station gets loud for a moment when it empties it. Still, get your pet used to it in small steps.",
          "First let your pet sniff the robot while it's switched off. Then start it in another room, on a quiet setting and while you're at home. If your pet stays calm or gets curious, give it a treat. Never force it towards the robot.",
          "A retreat the robot can't reach is important. Only once your pet stays relaxed do you let it run on a schedule while you're out, with a dog for example during the walk."
        ]
      },
      {
        titel: "Check now and then: brush and wheels",
        absaetze: [
          "With a simple brush and a pet, pull off wrapped hair about once a week; some manufacturers say every two weeks. Anti-tangle brushes need this much less often. Hair also collects on the side brush and wheels."
        ]
      }
    ],
    verweis: {
      text: "Which models I recommend, including for homes with pets, and how much time you save with your own numbers is on my robot vacuum and mop page.",
      knopf: "To the robot vacuum and mop with calculator"
    },
    wannNicht: [
      "Your pet often has accidents, for example because it isn't house-trained yet, and you don't want a model with a camera.",
      "Your pet still panics as soon as the robot moves, even after weeks of gentle getting used to it.",
      "There's no room for the base station: without it you'll often empty the bin yourself every day with a pet.",
      "You mainly have deep-pile carpet: many robots don't get hair out of it well, and some get stuck.",
      "Bowls, beds and toys are somewhere different every day, and you don't want to tidy them away or block them off in the app."
    ],
    fragen: [
      { f: "Does the robot recognise dog poo?", a: "With a camera and AI usually yes, without a camera usually not. There's no guarantee, though, especially with runny things like vomit." },
      { f: "Will my dog or cat be afraid of the robot?", a: "Some pets are at first, even though it's quieter than a normal vacuum cleaner. With patience and in small steps, many get used to it." },
      { f: "Can it vacuum up cat litter?", a: "It can vacuum up loose, dry litter. Clumps and damp litter don't belong in the robot, though. So block off a small zone around the litter tray, and it won't go there at all." },
      { f: "What should I look for if I'm allergic to pet hair?", a: "A genuine HEPA filter and a base station with a bag: then the fine dust stays in the device, and you hardly come into contact with it when changing the bag. A robot vacuum can't treat an allergy, though. It's best to ask a doctor what helps." },
      { f: "How much suction power do I need for pet hair?", a: "The recommendations vary widely, from a few thousand to over 20,000 pascals. The test result on carpet is more reliable, because that's where the differences show. At least as important is a brush that hair doesn't wrap around in the first place." }
    ],
    quellen: [
      { name: "My calculator on the robot vacuum and mop page", text: "the times for 60 m² with daily vacuuming with and without mopping and with vacuuming twice and mopping once, the assumptions are listed there under “How I calculate”" },
      { name: "Stiftung Warentest: robot vacuums test (June 2026)", text: "obstacle test with a fake dog poo, for pet owners picking up fibres on carpet counts (from good to poor), downgrade for problems with long hair, far more good robots for hard floors than for carpet" },
      { name: "Stiftung Warentest: robot vacuum and mop test (December 2025)", text: "most robots don't convince on carpet" },
      { name: "c't (heise): robot vacuums with obstacle detection test (December 2021)", text: "three robots with an AI camera always reliably avoided fake dog and cat poo" },
      { name: "Reviewed: iRobot Roomba j7+ versus Samsung Jetbot AI+ (June 2023)", text: "test with fake dog poo, the Roomba without a single mishap, the Jetbot briefly bumped one and then avoided it" },
      { name: "smarthomeassistent.de: does a robot vacuum recognise cat vomit? (May 2023)", text: "avoids fake poo, no guarantee with vomit, no known robot recognises flat, runny accidents, otherwise it spreads the mess around the home" },
      { name: "smarthomeassistent.de: robot vacuums for pet hair (August 2026) and self-emptying station with or without dust bag (June 2023)", text: "you remove tangled hair by hand, a bag lasts one to several months and closes when taken out, so the dust stays inside" },
      { name: "netzwelt.de: robot vacuums for pet hair (February 2026)", text: "hair gets caught in bristles, rubber and anti-tangle brushes are better, without a station empty several times a day, bag after about two months, AI detection for pets that aren't house-trained, HEPA filter, run during walk time, no-go zones at the sleeping spot" },
      { name: "netzwelt.de: robot vacuums for carpets (February 2026)", text: "deep pile pushes even top models to their limits" },
      { name: "saugroboter-portal.de: which main brushes do robot vacuums have? (September 2026)", text: "long hair wraps around bristles faster, it gets caught much less on rubber brushes, the better choice with pets" },
      { name: "home&smart: robot vacuums for pet hair and robot vacuums for allergy sufferers (both October 2026)", text: "rubber main brushes and anti-tangle systems, small dust bins in the robot, suction from 20,000 Pa with several pets, HEPA filter from class H13, dust sealed airtight in the bag" },
      { name: "testundtipps.de: robot vacuum maintenance (October 2026)", text: "clean the main brush every week or every two weeks depending on the manufacturer, with pets and long hair that can be too rarely, bag every 2 to 4 months" },
      { name: "tink: robot vacuums with dogs and cats (October 2026)", text: "get to know it switched off first, start in the next room, at first only when you're there, retreats, treats and patience" },
      { name: "robo-freunde.de: cats and robot vacuums, robot vacuums for cat litter and robot vacuums and cat vomit (2023)", text: "getting used to it in small steps, never force, no-go zones around bowl and litter tray, check the floor before starting, the runnier, the harder it is to recognise" },
      { name: "Mähroboter Guru: getting a cat used to a robot vacuum (July 2024)", text: "let it sniff while switched off, start in the next room on a quiet setting, treats, never force, supervised at first, then on a schedule" },
      { name: "netzwelt.de: robot vacuum noise (February 2026) and self-emptying stations (March 2026)", text: "usually 60 to 70 dB, the station 80 to 90 dB for a few seconds, bags close themselves when taken out and last two to three months, pet hair creates a particularly large amount of dirt" },
      { name: "smarthomeassistent.de: quiet robot vacuums (August 2026) and testsiegertv.com: self-emptying stations (July 2021)", text: "usually 55 to 65 dB, emptying in the station up to 90 dB for a few seconds" },
      { name: "Vacuum Wars: Dreame X50 Ultra review (March 2025, updated September 2026)", text: "double roller tapered at one end, the hair moves to that side, nothing tangled in the test with 18 cm long hair" },
      { name: "home&smart: Dreame X50 Ultra Complete review (April 2026) and Dreame X60 Pro Ultra (September 2026)", text: "not a single long hair in the rollers, much less maintenance, on the X60 even 1 m long hair didn't get stuck" },
      { name: "smarthomeassistent.de: Dreame X50 Ultra Complete (July 2026)", text: "picked up all hair in the hair test, without wrapping on the main and side brush" },
      { name: "winfuture: Narwal Freo Z10 review (July 2025) and china-gadgets: Narwal Freo Z10 Ultra (May 2025)", text: "cone-shaped main brush, hung on one side only, almost free after several runs with long hair and pet hair, the open roller prevents tangling" },
      { name: "netzwelt.de: Roborock Qrevo Curv review (September 2024)", text: "split main brush, the hair goes through the gap in the middle into the suction channel" },
      { name: "testsiegertv.com: Roborock Qrevo Curv review (February 2025)", text: "two smaller brushes bring the hair to the middle, where it's sucked away, no wrapping with 5, 10 and 20 cm long hair, 38 cm long hair wrapped at first and was then sucked away" },
      { name: "Manufacturer information and manufacturer guides", text: "Ecovacs (no guarantee with pet poo, no-go zones around beds and litter trays, never vacuum up wet or clumped litter, dry litter is fine), Dreame (flat, wet accidents hard to recognise, no-go zones around litter tray, beds and bowls, check the floor briefly), MOVA (bags fill faster with pets, remove hair from brushes and wheels possibly every week), Roborock (regularly remove hair from the wheel axles and the side brush), Ecovacs (pet hair wraps around the wheel axle), Dreame (HyperStream Detangling DuoBrush: two rollers on one arm, attached on one side only, hair moves to the free end and is sucked away there, up to 30 cm without tangling, still clean it if there's a lot of hair), Narwal (cone-shaped roller on a single arm), Roborock (DuoDivide: split brush, hair is sucked away in the middle)" }
    ]
  },
  {
    id: "waschtrockner-oder-waschmaschine-und-trockner",
    produkt: "waschtrockner",
    geprueft: "2026-11-04",
    titel: "Washer dryer or washing machine and tumble dryer: which is better?",
    frage: "Washer dryer or washing machine and tumble dryer: which is better?",
    seitenTitel: "Washer dryer or washing machine and dryer?",
    beschreibung: "Space, electricity, water and time compared: when a washer dryer suits you, when a washing machine and heat pump dryer do, and the cost per month.",
    kurzantwort: "If you're short of space, the washer dryer is the more convenient choice: one machine, no moving laundry across, in in the morning and dry in the evening. If you have room for two machines and do a lot of washing, a washing machine and heat pump dryer are better. They dry more at once and often use only half the electricity for drying, or less.",
    abschnitte: [
      {
        titel: "Space: one machine or two",
        absaetze: [
          "A washer dryer fits exactly where the washing machine would otherwise go and needs the same connections. Two machines side by side need twice as much floor space.",
          "It can be space-saving too, though: with a stacking kit you put the dryer on top of the washing machine, never the other way round. Then both only need the footprint of one washing machine, but room upwards. Without a kit, the dryer can slip during the spin cycle."
        ]
      },
      {
        titel: "How much you can dry at once",
        absaetze: [
          "A washer dryer usually washes 7 to 10 kg but only dries 4 to 6 kg. So a full wash load needs up to two drying cycles, or you hang the rest up. If you want to wash and dry in one go, only fill it a little over half.",
          "A separate dryer, on the other hand, dries a full load at once. And while it's drying, the washing machine is already washing the next one."
        ]
      },
      {
        titel: "Electricity and water",
        absaetze: [
          "Drying makes the biggest difference. A heat pump dryer usually uses about 1 to 2 kWh for a full load. A washer dryer without a heat pump uses just over 2 kWh, and that for only 6 kg. So for the same laundry the heat pump dryer often uses only half the electricity, or less.",
          "Many washer dryers also cool with tap water while drying. That's why they use more water than a washing machine and dryer together.",
          "There are also washer dryers with a heat pump. They use less electricity and water, and in a Stiftung Warentest test of four machines, one such model was the test winner in 2023."
        ]
      },
      {
        titel: "Time: what's done faster",
        absaetze: [
          "Compared with a clothes horse, both options save you time: with three loads a week, hanging up and taking down takes around half an hour a week according to my calculator.",
          "Washing and drying in a washer dryer with a full load often take 8 hours or more. In the Konsument test, heat pump dryers needed just over 2 to just over 3 hours for a full load, plus the wash beforehand.",
          "That needn't bother you, though: with the end-time function, the washer dryer starts so that it's finished when you get home. If you want to get through several loads in one day, two machines are faster."
        ]
      },
      {
        titel: "My experience",
        art: "erfahrung",
        absaetze: [
          "I have a Haier washer dryer and never want to be without one again. The laundry goes in in the morning, and when I get home from work it's washed and dried. I don't have to iron any more either: the i-⁠Refresh steam programme freshens up the clothes, and above all they come out crease-free."
        ]
      },
      {
        titel: "What it costs",
        absaetze: [
          "To buy, a washer dryer is often cheaper than a washing machine and dryer together. Drying, however, costs more electricity: with three loads a week at 37 cents per kWh, my calculator says it's just over €10 a month, at 30 cents just under €9.",
          "A heat pump dryer would often manage the same laundry with half or less. According to Stiftung Warentest, the higher running costs can eat up a washer dryer's lower purchase price over the years."
        ]
      }
    ],
    verweis: {
      text: "Which washer dryer I recommend, and how much time it saves you and electricity it costs with your own numbers, is on my washer dryer page.",
      knopf: "To the washer dryer with calculator"
    },
    wannNicht: [
      "You wash several loads a day for a large family.",
      "You want to wash and dry full loads in one go.",
      "You have room for two machines, side by side or stacked, and want to use as little electricity and water as possible.",
      "You often need the laundry back quickly: washing and drying together usually take 8 hours or more.",
      "Evenly dried laundry is especially important to you: many washer dryers don't dry as well as a separate dryer."
    ],
    fragen: [
      { f: "Can I put the dryer on top of the washing machine?", a: "Yes, with a suitable stacking kit and always with the dryer on top. The frame holds it in place and absorbs the vibrations during the spin cycle. It's easiest with two machines of the same brand and size." },
      { f: "Does a washer dryer dry as well as a tumble dryer?", a: "Usually not quite: in tests many washer dryers dry less evenly, and sometimes the laundry stays a little damp. The best models do well, though. The important thing is not to overfill it for drying." },
      { f: "Why does a washer dryer need water for drying?", a: "Many cool the warm, moist steam with tap water so that it condenses and drains away. Depending on the machine, that's quite a few litres per drying cycle. But there are also models that don't need water for this, for example ones with a heat pump." },
      { f: "Is a washer dryer with a heat pump worth it?", a: "If you dry often, yes. It uses less electricity and water: for the 2023 test winner, Stiftung Warentest calculated around €760 lower running costs over ten years than the Bosch and Siemens machines it tested. In return it costs considerably more to buy." }
    ],
    quellen: [
      { name: "My calculator on the washer dryer page", text: "the electricity cost of drying with three loads a week at 2.2 kWh per load and the time for hanging up and taking down, the assumptions are listed there under “How I calculate”" },
      { name: "Verbraucherzentrale: washer dryers, combination machines are space-saving power guzzlers (August 2026)", url: "https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/waschtrockner-kombigeraete-sind-platzsparende-stromfresser-37060", text: "more electricity and water than a washing machine and dryer, cooling with water, washes 7 to 9 kg and dries 4 to 6 kg, mainly sensible in very small flats" },
      { name: "German Environment Agency (Umweltbundesamt): tumble dryers (March 2026)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/elektrogeraete/waeschetrockner", text: "heat pump dryers 73 to 97 kWh per 100 drying cycles, older machines around 340 kWh, washer dryers less efficient than two separate machines" },
      { name: "co2online: electricity use of tumble dryers and washing machines (April 2023)", url: "https://www.co2online.de/energie-sparen/strom-sparen/strom-sparen-stromspartipps/waschmaschine-trockner/", text: "most economical heat pump dryers around 156 kWh a year at 7 kg, up to 80 % less electricity than a condenser dryer" },
      { name: "HEA (German association for efficient energy use): washer dryers", text: "cooling water 9 to 35 litres per drying cycle depending on the machine, only half to two thirds of the wash load can be dried, a full wash load needs up to two drying cycles, a heat pump saves electricity and cooling water" },
      { name: "Stiftung Warentest: washer dryers test (October 2023, updated August 2026)", text: "one programme took over nine hours, often cheaper to buy than two machines, running costs can eat that up over time" },
      { name: "t-online (October 2023) and desired.de (February 2025) on the Stiftung Warentest washer dryer test (issue 11/2023)", text: "four machines tested, test winner AEG with heat pump, lowest electricity and water use, around €760 lower running costs over ten years than the Bosch and Siemens machines" },
      { name: "Stiftung Warentest: tumble dryers test (September 2026)", text: "the heat pump cuts electricity use considerably, condenser and vented dryers are outdated power guzzlers" },
      { name: "Konsument (VKI): tumble dryer test (September 2026)", text: "heat pump dryers for 8 kg cotton cupboard-dry 0.90 to 1.82 kWh, programme time 136 to 192 minutes" },
      { name: "Which?: washer-dryer or washing machine and tumble dryer (October 2026)", text: "£216 a year in electricity for a washer dryer against £118 for a washing machine and heat pump dryer, 7.5 litres of water per kg when drying, most washer dryers dry worse than a tumble dryer" },
      { name: "T3: do washer dryers work as well as separates? (February 2022)", text: "dry worse, laundry often stays damp, with two machines the next load washes while the first is drying" },
      { name: "Trusted Reviews: washer dryer vs separates", text: "two machines need about twice the floor space and run at the same time, washer dryers often dry unevenly" },
      { name: "Utopia: washer dryers, the pros and cons (March 2023)", text: "usually only dries 4 to 6 kg, more electricity and water, rather for small households" },
      { name: "Waschmaschinen-Kompass: putting a dryer on a washing machine (October 2026)", text: "stacking frame needed, dryer always on top, without a frame it can slip" },
      { name: "Manufacturer information and energy labels", text: "stacking according to Siemens and Samsung (dryer on top, suitable kit, same brand), capacity, programme time and electricity for washing and drying according to the energy labels of Haier, Hisense, Bosch and AEG" }
    ]
  },
  {
    id: "smarte-thermostate-mietwohnung",
    produkt: "thermostate",
    geprueft: "2026-11-04",
    titel: "Are smart thermostats worth it in a rented flat?",
    frage: "Are smart thermostats worth it in a rented flat?",
    seitenTitel: "Are smart thermostats worth it in a rented flat?",
    beschreibung: "What you save as a tenant with smart thermostats, how much shows up on your heating bill, whether you may fit them and when they bring less.",
    kurzantwort: "Mostly yes: you screw them on without a tradesperson and off again when you move out, and you come home to a warm flat every day. With a heating schedule you also save around 10 percent of heating energy. With central heating, usually half to just over two thirds of that shows up on your bill, because only part of the costs is split by consumption.",
    abschnitte: [
      {
        titel: "What you save with a heating schedule",
        absaetze: [
          "Smart thermostats heat according to your schedule: warm when you're there, turned down when you're asleep or at work. According to the German Environment Agency and co2online, this saves around 10 percent of heating energy. In practice, the ADAC expects 5 to 8 percent.",
          "How much it is for you depends on how often you're out and how you heat now. As a rule of thumb, every degree lower saves around 6 percent of heating energy. If your heating mostly runs non-stop at the moment, you save more. If you already reliably turn every radiator down yourself, you save less."
        ]
      },
      {
        titel: "How much of it shows up on your bill",
        absaetze: [
          "If you have your own gas boiler in the flat, you usually pay for your gas directly to the supplier. Then the whole saving reaches you.",
          "With central heating, on the other hand, only part of the costs is split by your consumption, the rest by floor area. In Germany it's 50 to 70 percent, in Austria at least 55 percent of the energy costs. In Switzerland it's usually 50 to 70 percent if your building bills by consumption. You can see how it's split for you on your heating bill, under basic costs and consumption costs.",
          "An example: if you pay €1,000 a year for heating, 10 percent of that is €100. If 50 to 70 percent is split by consumption in your building, about €50 to €70 of that reaches you. In my calculator, choose “Central heating with a heating bill” for this, and I'll calculate with 60 percent.",
          "In some buildings costs aren't split by consumption at all, only by floor area, in Switzerland for example often in older buildings. Then it's mainly the whole building that saves, and only a little reaches you."
        ]
      },
      {
        titel: "How to see whether it's working",
        absaetze: [
          "In Germany, heating cost meters must be readable remotely from 2027. As soon as yours are, you get a consumption report every month. That way you can see month by month whether your heating schedule is working."
        ]
      },
      {
        titel: "Are you allowed to fit them as a tenant?",
        absaetze: [
          "In Germany, as a rule yes, even without your landlord's consent. You only swap the dial on the valve for the smart thermostat. You don't need to drain any water, and you don't need a tradesperson.",
          "Keep the old dials safe and screw them back on when you move out. You then take your smart thermostats with you to your next flat. In Austria and Switzerland it's best to ask your landlord briefly."
        ]
      },
      {
        titel: "Will they fit your radiators?",
        absaetze: [
          "On almost all normal radiators. Most valves have a thread to the M30 x 1.5 standard. For others, for example from Danfoss, adapters are often included. For underfloor heating, on the other hand, you need a room thermostat on the wall."
        ]
      },
      {
        titel: "More convenient than by hand",
        absaetze: [
          "On top of that there's the convenience: shortly before you get home, the flat is already warm. While you're at work, the thermostats turn down on their own, and you can't forget it any more either.",
          "If you currently turn every radiator down in the morning and back up in the evening, my calculator says you save around a quarter of an hour a week with four radiators.",
          "To start with, one schedule for weekdays and one for the weekend is enough. For example, set 21 degrees in the morning and evening, 16 to 17 degrees when you're out, and 16 to 18 degrees in the bedroom at night. It shouldn't get colder than 16 degrees, otherwise the risk of mould increases."
        ]
      }
    ],
    verweis: {
      text: "Which thermostats I recommend, with and without a hub, and what they save you with your own numbers is on my smart radiator thermostats page.",
      knopf: "To the thermostats with calculator"
    },
    wannNicht: [
      "You have underfloor heating: for that you need a room thermostat on the wall.",
      "In your building, heating costs are split only by floor area: then only a little of the saving reaches you.",
      "You already reliably turn every radiator down when you leave: then you mainly save effort and less money.",
      "You're at home almost all day: then the heating schedule mainly turns down at night, and you save less."
    ],
    fragen: [
      { f: "What do I do when I move out?", a: "You unscrew the smart thermostats and put the old dials back on. That takes a few minutes per radiator. You take the smart thermostats with you; they'll also fit most radiators in your new flat." },
      { f: "Do they interfere with the heat cost allocator?", a: "No. The heat cost allocator sits on the radiator and measures how much heat it gives off. The thermostat, on the other hand, goes on the valve. If you heat less, the allocator simply shows less. You shouldn't remove or cover it." },
      { f: "Do I need a hub?", a: "Not necessarily. Some thermostats connect straight to Wi-Fi, and with a FRITZ!Box your router is already the hub. But in tests, models with a hub come out best. The hub is a one-off extra cost, and when you move you simply take it with you." },
      { f: "When will I have earned back the purchase price?", a: "That depends on how many radiators you equip and how much reaches you. According to Stiftung Warentest the purchase only pays off in the long run; in its example with five thermostats, the ADAC arrives at just under four years. With central heating it takes longer, because only part of the saving reaches you. The convenience, on the other hand, you have from day one." }
    ],
    quellen: [
      { name: "German Environment Agency (Umweltbundesamt): heating, room temperature (October 2023)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/heizen-bauen/heizen-raumtemperatur", text: "programmable thermostats save about 10 % energy, turn down during several hours of absence and at night, 17 °C in the bedroom" },
      { name: "Verbraucherzentrale Hamburg: well heated through the winter (December 2025)", url: "https://www.vzhh.de/themen/bauen-wohnen-energie/heizung/gut-geheizt-durch-den-winter", text: "every degree lower saves about 6 percent heating energy, it shouldn't be colder than 16 °C or mould can form, smart thermostats can also be retrofitted in rented flats" },
      { name: "co2online: press release on programmable thermostats (October 2023)", text: "around ten percent lower heating costs, tenants don't need the landlord's permission, put the old thermostats back before moving out" },
      { name: "ADAC: smart radiator thermostats (October 2026)", text: "in practice 5 to 8 percent lower heating costs, tenants can usually fit them themselves, keep the old thermostats and put them back when moving out, underfloor heating needs a room thermostat, in the example with five thermostats paid off after just under four years" },
      { name: "ista: smart thermostats between energy efficiency and data protection (October 2026)", text: "swapping only the thermostat head usually needs no landlord consent, restore the original state when moving out" },
      { name: "German Heating Costs Ordinance (Heizkostenverordnung), § 7 and § 6a", url: "https://www.gesetze-im-internet.de/heizkostenv/__7.html", text: "at least 50 and at most 70 percent of central heating costs by consumption, the rest by floor area, with remotely readable meters a monthly consumption report since 2022" },
      { name: "mein-nebenkostenrechner.de: § 7 Heating Costs Ordinance (September 2026)", text: "the landlord chooses between 50 and 70 percent by consumption, for example 50/50 or 30/70, in some older buildings with oil or gas 70 percent is mandatory" },
      { name: "mietrecht.org: splitting basic and consumption costs", text: "50 to 70 percent by consumption, basic costs by living area or enclosed space" },
      { name: "Arbeiterkammer Wien: heating bills under the HeizKG", url: "https://wien.arbeiterkammer.at/beratung/Wohnen/Heizkostenabrechnung/Heizkostenabrechnung_nach_dem_HeizKG.html", text: "applies to buildings with four or more flats and shared heating, not to individual gas boilers, 55 to 85 percent of energy costs by consumption, the remaining costs by floor area" },
      { name: "Austrian Heating Costs Billing Act (Heizkostenabrechnungsgesetz), § 10 (jusline.at)", text: "at least 55 and at most 85 percent of energy costs by consumption, the rest by usable floor area" },
      { name: "ista Austria and Techem Austria on the Heating Costs Billing Act", text: "at least 55 percent of energy costs by consumption, so basic costs at most 45 percent, doesn't apply to individual flat heating" },
      { name: "WEKA Switzerland: allocation keys for service charges (June 2025)", text: "basic costs usually 30 to 50 percent of heating costs, billing by consumption is mainly mandatory for new and fully renovated buildings, otherwise usually split by floor area" },
      { name: "ista Switzerland: brochure on heating bills", text: "basic costs 30 to 50 percent by living area, the rest by consumption" },
      { name: "Swiss Federal Office of Energy: billing model for consumption-based heating bills (2004)", text: "basic costs 30 to 50 percent, consumption-based costs 50 to 70 percent" },
      { name: "Conference of Cantonal Energy Directors: implementation aid EN-113 (December 2018)", text: "billing by consumption mandatory for new buildings and full renovations with five or more flats, some cantons have lifted the retrofit obligation for existing buildings" },
      { name: "Blick: heating bills in old properties (October 2022) and billing causes trouble (December 2022)", text: "in older buildings without heat meters often split by square or cubic metres, regardless of how much someone heats" },
      { name: "Berliner Mieterverein: gas supply (Federal Court of Justice, June 2018) and metering devices for heating bills (September 2025)", text: "with your own gas connection the supply contract is between supplier and tenant, heat cost allocators sit directly on the radiator, the reading also depends on the thermostatic valves, tampering is a criminal offence" },
      { name: "Berliner MieterGemeinschaft: heat cost allocators", text: "sits in the middle of the radiator, electronic devices measure the difference between radiator and room air, covers and curtains distort the reading" },
      { name: "Gewobag: information on heat cost allocators (August 2025)", text: "measures room and radiator temperature directly on the radiator, is sealed" },
      { name: "ista: monthly consumption report (October 2026), Haufe and Haus & Grund Chemnitz", text: "retrofit or replace meters that can't be read remotely by 31.12.2026, from the installation of remotely readable meters a monthly consumption report" },
      { name: "Stiftung Warentest: smart radiator thermostats test (issue 9/2023)", text: "the purchase only pays off in the long run, models with a hub ahead, the FRITZ! model almost as good as the test winner" },
      { name: "smarthomeassistent.de: best radiator thermostats (October 2026)", text: "places 1 and 2 with a hub, no model that connects straight to Wi-Fi in the top ten" },
      { name: "homeandsmart: replacing a thermostat", text: "most valves with an M30 x 1.5 thread, adapters for others, no draining water, no tradesperson, done in a few minutes, underfloor heating needs a room thermostat" },
      { name: "Manufacturer information", text: "M30 x 1.5 thread and included adapters, for example for Danfoss valves, according to eQ-3 (Homematic IP), AVM (FRITZ!) and Bosch, fitting without draining water and without special tools according to eQ-3" }
    ]
  },
  {
    id: "saugroboter-oder-akkusauger",
    produkt: "saugroboter",
    geprueft: "2026-11-13",
    weitereProdukte: ["akkusauger"],
    titel: "Robot vacuum or cordless vacuum: which suits me?",
    frage: "Robot vacuum or cordless vacuum: which suits me?",
    seitenTitel: "Robot vacuum or cordless vacuum: which suits me?",
    beschreibung: "What a robot vacuum and mop and a cordless vacuum each do better, how much time they save you and why for many homes both together suit best.",
    kurzantwort: "A robot vacuum and mop suits you if your floors should get clean without you, a cordless vacuum if you want to vacuum quickly yourself, including stairs, sofa and car. My calculator says the robot saves you around an hour a week on 70 m² if you otherwise vacuum twice and mop once. With the cordless vacuum you keep vacuuming yourself, just faster. For many homes both together are the most convenient: the robot for the floors and a cheap cordless vacuum for the spots it can't reach.",
    abschnitte: [
      {
        titel: "What each does best",
        absaetze: [
          "The robot vacuum and mop takes vacuuming and mopping off your hands. You set a schedule in the app, and it cleans while you're at work. Then it drives back to its base station. On many models the station empties it and also washes the mopping roller or the mop pads.",
          "You guide the cordless vacuum yourself, but without a cable and without changing sockets. You take it off the wall, vacuum up the crumbs under the dining table and hang it back up. With one move it becomes a handheld vacuum for sofa, stairs and car."
        ]
      },
      {
        titel: "How much time you save",
        absaetze: [
          "My calculator allows around 19 minutes for vacuuming 70 m² including getting ready, and around 26 minutes for mopping. It deducts 5 minutes a week for looking after the robot. If you vacuum twice a week and mop once, the robot saves you around an hour a week, a good 50 hours a year.",
          "With the cordless vacuum you keep vacuuming yourself. It saves you getting it out, plugging it in and changing sockets: my calculator says a good 5 minutes each time on 70 m², and 2 minutes when you quickly vacuum up crumbs. If you vacuum twice a week and quickly in between three times, that's a good quarter of an hour."
        ]
      },
      {
        titel: "Where the robot reaches its limits",
        absaetze: [
          "Common robots can't manage stairs, and the base station stays in one place. If you live on two floors, you carry it upstairs, or you vacuum the stairs and the upper floor with the cordless vacuum.",
          "Corners, edges and the strip right along the skirting board usually get less thorough cleaning. On deep-pile carpet a vacuum you guide yourself cleans more thoroughly. According to Stiftung Warentest, even the best robots can't match the suction power and filtering of a good vacuum cleaner.",
          "It also needs a clear floor: you quickly tidy away cables, socks and toys before it starts. In return it gets under the bed and sofa if there's enough room.",
          "It still manages large homes: in the Stiftung Warentest test the best robots covered up to 193 m² on one battery charge. If the battery isn't enough, many drive to the base station to recharge and then carry on cleaning."
        ]
      },
      {
        titel: "What to look out for with a cordless vacuum",
        absaetze: [
          "In the joint test by Stiftung Warentest and Konsument, the best cordless vacuums cleaned as well as corded cylinder vacuums. Above all, look at the battery: the run time manufacturers state usually applies to the lowest setting. On the highest setting many only last 10 to 15 minutes.",
          "For a large home a model with a swappable battery is therefore worth it. According to Konsument, though, you usually have to buy a second battery separately. The dust container is small, and emptying it is a bit dusty. After a few years the battery weakens, so make sure replacement batteries are available."
        ]
      },
      {
        titel: "Both together: how they share the work",
        absaetze: [
          "For many homes this is the most convenient solution. The robot runs on a schedule and keeps the floors clean, every day if you like. You only use the cordless vacuum for crumbs after meals, for stairs, sofa and car, and now and then for corners and skirting boards."
        ]
      },
      {
        titel: "My experience",
        absaetze: [
          "If you have a robot vacuum, you only need a cordless vacuum very rarely anyway. A cheap model is enough for that. I have the Bulelink Zenith G10, for example, and I'm very happy with it."
        ],
        art: "erfahrung"
      },
      {
        titel: "What it costs",
        absaetze: [
          "To buy, a robot vacuum and mop with base station usually costs considerably more than a good cordless vacuum. A robot that only vacuums is cheaper, but then you still have to mop yourself.",
          "In running costs, my calculator says brushes, filters, bags and mop pads for the robot cost about €3.50 a month more than for a normal vacuum cleaner. With the cordless vacuum you don't buy bags, but after a few years you may need a new battery."
        ]
      }
    ],
    verweis: {
      text: "Which robot vacuums and mops I recommend and how much time you save with your own numbers, you'll see on my robot vacuum and mop page. My tips for the right cordless vacuum are on my cordless vacuum page.",
      knopf: "To the robot vacuum and mop with calculator",
      weitere: [{ knopf: "To the cordless vacuum", link: "akkusauger" }]
    },
    wannNichtTitel: "When a robot vacuum and mop is not the right choice",
    wannNicht: [
      "You live on several floors and don't want to carry the robot back and forth: common robots can't manage stairs.",
      "There's often a lot lying around on your floor, and you don't want to tidy up quickly before it starts.",
      "You mainly have deep-pile carpets: there a vacuum you guide yourself cleans more thoroughly.",
      "You mainly vacuum the sofa, stairs or car: for that you need a cordless vacuum.",
      "You don't have room for the base station: it needs around 40 cm against the wall and 0.8 to 1.5 m clear in front of it."
    ],
    fragen: [
      { f: "Does a robot vacuum and mop replace the vacuum cleaner completely?", a: "For everyday floors often yes, but rarely completely. It can't do stairs, sofa or car, and it cleans less thoroughly in corners and on deep-pile carpet. For that a cordless vacuum you only need now and then is enough." },
      { f: "Is a cordless vacuum's battery enough for a large home?", a: "On the highest setting often not: then many only last 10 to 15 minutes. For a large home, choose a model with a swappable battery. Or let the robot vacuum the floors and use the cordless vacuum only for short jobs." },
      { f: "Are there robot and cordless vacuum sets?", a: "Yes, some manufacturers offer sets where a robot and a cordless vacuum share one station. It then empties both, including the cordless vacuum's dust container." },
      { f: "Which suits better if I have pets?", a: "Most convenient is both: the robot vacuums the hair off the floor on a schedule, every day if you like, and for the sofa you take the cordless vacuum. What matters for a robot with pets is in my guide to robot vacuums with pets." }
    ],
    quellen: [
      { name: "My calculator on the robot vacuum and mop page", text: "the time for 70 m² with vacuuming twice and mopping once a week and the cost of spare parts, the assumptions are there under “How I calculate”" },
      { name: "My calculator on the cordless vacuum page", text: "the time compared with a corded vacuum on 70 m², vacuuming twice and crumbs three times a week, the assumptions are there under “How I calculate”" },
      { name: "Stiftung Warentest: robot vacuums test (June 2026)", text: "even the best robots can't keep up with a good vacuum cleaner in suction power and filtering, strengths on hard floors, about 33 to 193 m² on one battery charge, size of the base stations" },
      { name: "Stiftung Warentest: robot vacuum and mop test (December 2025)", text: "most don't convince on carpet" },
      { name: "Stiftung Warentest: cordless vacuums test (issue 2/2026)", text: "the best cordless vacuums keep up with classic cylinder vacuums, 10 to 17 minutes run time on the highest setting" },
      { name: "Konsument (VKI): cordless vacuums test, press release (February 2026)", url: "https://vki.at/system/files/2026-02/2026-02-18_PA_Akkusauger_0.pdf", text: "14 devices tested together with Stiftung Warentest, good cordless vacuums keep up with corded ones in suction, on the highest setting on carpet two devices stopped after 6 and 9 minutes, swappable battery usually not included" },
      { name: "Consumer NZ: Which type of vacuum is best for cleaning your home? (March 2024)", text: "robots good on hard floors, weak on carpet, no stairs, also vacuum under furniture, cordless vacuums with limited run time" },
      { name: "TechRadar: Robot vacuum vs cordless vacuum (November 2023)", text: "robot more convenient, cordless vacuum more thorough and versatile on edges, stairs, upholstery and in the car, tidy up before the robot, having both is ideal" },
      { name: "T3: Cordless or robot, which is the best vacuum cleaner for you? (August 2023)", text: "cordless vacuum for quick jobs, stairs and car, also as a handheld, wall mount, robot saves time but sometimes gets stuck" },
      { name: "testundtipps.de: robot vacuum or cordless vacuum (July 2026)", text: "stairs only with a guided device, the robot vacuums edges, corners and skirting boards less well, less thorough on deep pile, clear the floor first, both share the work" },
      { name: "home&smart: pros and cons of robot vacuums and mops (November 2026) and robot vacuums that climb stairs (February 2026)", text: "not for upholstery and stairs, tight corners and low furniture, tidy away loose items first, for thorough vacuuming still a classic vacuum cleaner, stair-climbing robots so far prototypes" },
      { name: "Further tests of cordless vacuums", text: "home&smart, ETM Testmagazin, t-online and produkte-im-test.de on run time on the lowest and highest setting, SRF Kassensturz and Apotheken Umschau on dust when emptying" },
      { name: "Recharging and carrying on", text: "robots drive to the station to recharge and then carry on cleaning, according to Anker (July 2026), Ecovacs help (“resume cleaning”) and smarthomeassistent.de on Neato (June 2022)" },
      { name: "Sets with a shared station", text: "SwitchBot K10+ Pro Combo (testsiegertv.com, December 2025), Yeedi C12 Combo (notebookcheck.com, October 2024) and Ecovacs Deebot X2 Combo (netzwelt.de, April 2024)" },
      { name: "Manufacturer information and manuals", text: "space in front of and beside the station according to Roborock, Kärcher and Ecovacs, station dimensions according to Kärcher and Anker" }
    ]
  },
  {
    id: "black-friday-echte-angebote",
    produkt: "kaffeevollautomat",
    geprueft: "2026-11-13",
    weitereProdukte: ["saugroboter", "airfryer"],
    titel: "Black Friday on household appliances: how do I spot a real deal?",
    frage: "Black Friday on household appliances: how do I spot a real deal?",
    seitenTitel: "Black Friday: how do I spot a real deal?",
    beschreibung: "How to spot real Black Friday deals: price history instead of RRP, last year's models, bundles, delivery time and returns in the EU and Switzerland.",
    kurzantwort: "You spot a real deal by the price history: if the price is clearly below what the appliance has cost over the last few months, it's one. The crossed-out price alone says little, especially if it's the manufacturer's RRP, which hardly any shop charges. Also check the exact model name, the delivery time and the returns policy. Many appliances are just as cheap before and after Black Friday, so you can compare at your leisure.",
    abschnitte: [
      {
        titel: "The price history shows whether it's a deal",
        absaetze: [
          "In 2026 Black Friday is on 27 November, but many promotions start days or weeks earlier. Whether a price is really good, you can see from the price history of the last few months. Many price comparison sites show it, often with a price alert for the price you want.",
          "The British consumer organisation Which? tracked 175 household, tech and health products for a year. 83 per cent of them were the same price or cheaper at least once outside the Black Friday weeks. None was cheapest on Black Friday itself."
        ]
      },
      {
        titel: "What the crossed-out price means",
        absaetze: [
          "In Germany, Austria and the rest of the EU, a shop that lowers a price has to state the lowest price of the last 30 days. According to the European Court of Justice, a percentage discount has to refer to exactly this price.",
          "That helps, but it doesn't replace a look at the price history. If the appliance was cheaper before those 30 days, you save less than the discount promises. And not everyone sticks to the rule: in a check by the EU consumer protection authorities, 30 per cent of 314 online shops stated their discounts incorrectly."
        ]
      },
      {
        titel: "The RRP says little",
        absaetze: [
          "Shops often compare with the RRP, the manufacturer's recommended retail price. Hardly any retailer charges it, so a discount on it is usually smaller than it looks. Whether the 30-day rule also applies to the RRP has not yet been settled in Germany; so far the courts have ruled differently.",
          "So compare with the price the appliance currently costs in several shops."
        ]
      },
      {
        titel: "Switzerland has its own rules",
        absaetze: [
          "In Switzerland a shop may only state an earlier price if it really offered the appliance at that price before. It may only show a manufacturer's price as a comparison if most other shops actually offer the appliance at that price."
        ]
      },
      {
        titel: "Last year's model or the new one",
        absaetze: [
          "Older models get cheaper as soon as successors arrive, not just on Black Friday. Last year's model is often the better deal if it can do what you need.",
          "To check, compare the exact model name. Similar names sometimes stand for a different appliance, for example with a base station that does less or with weaker results in tests. If it says “test winner”, check whether exactly this model was tested."
        ]
      },
      {
        titel: "Bundles and accessories",
        absaetze: [
          "With bundles, do the maths: do you really need the accessories, and what does the appliance cost on its own? A bundle is only a deal if you'd have bought the parts anyway.",
          "Look in your basket before you order, too. In the EU check, a good one in three shops tried to add extra items to the basket."
        ]
      },
      {
        titel: "Delivery time, seller and time pressure",
        absaetze: [
          "Before buying, check who's selling and when the appliance will arrive. If the goods come from a seller in the Far East, for example via a shop's marketplace, they often take longer, and returning them becomes expensive or difficult. If you need the appliance for Christmas, allow for the delivery time. With unknown shops, check the legal notice and reviews, and be careful with payment in advance only.",
          "Countdowns and notes like “almost sold out” are meant to put you under time pressure. In the EU check, almost one in five shops used such tactics. Take your time: many appliances are just as cheap in the weeks of Advent."
        ]
      },
      {
        titel: "Returns in Germany, Austria and Switzerland",
        absaetze: [
          "In Germany, Austria and the rest of the EU, you can return appliances bought online within 14 days of receipt without giving a reason, including goods reduced on Black Friday. Returning them can cost you something if the shop has told you so beforehand. Goods bought in a store without a defect, on the other hand, a shop only exchanges voluntarily.",
          "Many large shops in Germany voluntarily extend returns over the holidays, which is handy for presents. Check whether this also applies to marketplace sellers.",
          "In Switzerland there is no statutory right of return, not even online. Many shops grant one voluntarily, so read the terms before you buy."
        ]
      },
      {
        titel: "Decide first, then compare",
        absaetze: [
          "Black Friday is most relaxed if you already know which appliance suits you. Then on the day itself you only check the price. On my pages about the bean-to-cup coffee machine, the robot vacuum and mop and the air fryer you'll find my recommendations by price class and a calculator for your household."
        ]
      }
    ],
    verweis: {
      text: "Which bean-to-cup coffee machines I recommend and what you save compared with capsules, you'll see on my bean-to-cup coffee machine page. My tips for robot vacuums and mops and air fryers are on the pages about them.",
      knopf: "To the coffee machine with calculator",
      weitere: [
        { knopf: "To the robot vacuum and mop", link: "saugroboter" },
        { knopf: "To the air fryer", link: "airfryer" }
      ]
    },
    wannNichtTitel: "When you're better off waiting",
    wannNicht: [
      "The price isn't below what the appliance has cost over the last few months.",
      "The discount only refers to the RRP.",
      "The model name differs from the appliance you looked at.",
      "The delivery time is long, and you need the appliance soon.",
      "The shop doesn't state clear terms for returns.",
      "Without the discount you wouldn't have bought the appliance at all."
    ],
    fragen: [
      { f: "Is Black Friday the cheapest day of the year?", a: "Usually not. In the Which? analysis, no product was cheapest on Black Friday itself. It's a deal if the price is clearly below that of the last few months." },
      { f: "May a shop advertise with the RRP?", a: "In Germany yes, as long as it's clearly stated that it's the RRP. Whether the 30-day rule then also applies, the courts have so far seen differently. In Switzerland a shop may only show the RRP as a comparison if most other shops really offer the appliance at that price." },
      { f: "Can I return a Black Friday bargain?", a: "In the EU yes, online within 14 days of receipt, including reduced goods. In Switzerland only if the shop offers it voluntarily. Read the terms there before you buy." },
      { f: "What does a price alert do?", a: "You enter the price you want on a price comparison site and get a message as soon as the appliance is that cheap. That way you buy when the price is right, whatever the day." }
    ],
    quellen: [
      { name: "Price Indication Ordinance (Germany), § 11", url: "https://www.gesetze-im-internet.de/pangv_2022/__11.html", text: "state the lowest total price of the last 30 days when reducing a price" },
      { name: "Federal Ministry of Economy, Energy and Tourism (Austria): price marking", url: "https://www.bmwet.gv.at/Themen/Europa/Wettbewerbspolitik/Preisauszeichnung.html", text: "§ 9a Price Marking Act following Article 6a of the EU Price Indication Directive, lowest price of the last 30 days, judgment of the European Court of Justice C-330/23" },
      { name: "European Court of Justice, judgment C-330/23 (26.09.2024), according to beck-aktuell and the Austrian Ministry of Economy", text: "a percentage discount must be based on the lowest price of the last 30 days, likewise WKO (September 2023) and Arbeiterkammer Wien" },
      { name: "SECO: questions and answers on price indication (Switzerland, in German)", url: "https://www.seco.admin.ch/de/faq-pbv", text: "comparison with the shop's own earlier price only if actually charged, manufacturer's price only as a comparison with competitors, plus the leaflet on self-comparison (time limits, 30-day rule since 2025), the FAQ on comparison with competitors, the guidance of the canton of Aargau (2025) and Handelsverband.swiss (November 2024)" },
      { name: "European Commission: EU check of discounts on Black Friday and Cyber Monday (26.03.2026)", url: "https://commission.europa.eu/news-and-media/news/eu-check-reveals-misleading-sales-practices-online-2026-03-26_en", text: "314 online shops from 25 countries checked, 30 per cent with incorrect discounts, 36 per cent with extra items in the basket, 18 per cent with countdowns or scarcity" },
      { name: "Which?: Black Friday analysis (November 2025)", text: "175 household, tech and health products tracked from May 2024 to May 2025, 83 per cent the same price or cheaper at least once outside the promotion weeks, none cheapest on Black Friday" },
      { name: "German consumer advice centres: verbraucherzentrale.de (October 2026), Lower Saxony (May 2026) and Hamburg (November 2025)", text: "RRP hardly charged, 30-day rule since May 2022, courts divided on the RRP, price history over a whole year, legal notice and payment in advance, 14-day right of withdrawal, return costs" },
      { name: "Arbeiterkammer Wien: Black Friday (2026)", text: "Black Friday on 27 November 2026, lowest price of the last 30 days, price alert, 14-day right of withdrawal, in store only voluntary, expensive returns to Asia" },
      { name: "European Consumer Centre Germany: Black Friday (2026)", text: "dates, check the price trend, RRP, delivery times, payment in advance, dark patterns like “almost sold out”, 14-day right of withdrawal across Europe, return costs" },
      { name: "Stiftung Warentest: tips for the Black Friday discount battle (November 2025)", text: "RRP that hardly any retailer follows, price alert, similar-looking appliances with worse results, long delivery times at unknown shops, Advent weeks often just as cheap" },
      { name: "Rulings on the crossed-out RRP", text: "Händlerbund (August 2026), beck-aktuell on the ruling of the Higher Regional Court of Cologne (May 2026, appeal to the Federal Court of Justice allowed) and IT-Recht Kanzlei on rulings of the regional courts of Düsseldorf and Munich I (August 2025): comparison with the RRP allowed if clearly marked, courts divided on the 30-day rule" },
      { name: "Returns in Switzerland", url: "https://www.ch.ch/en/safety-and-justice/returning-or-exchanging-goods/", text: "no statutory right of return or exchange, shops set their own rules, plus moneyland.ch (November 2026) and SRF (November 2020)" },
      { name: "Extended returns at Christmas", text: "t3n (December 2025), e-recht24 (December 2025) and GIGA (November 2025, also on exchanges in store)" },
      { name: "Last year's models, model names and bundles", text: "Anker (November 2025) and Stiftung Warentest on smartphone prices (July 2026) on falling prices after launch, TechRadar (November 2024), netzwelt.de (March 2023) on similar names with a different base station, Which? (November 2023) and CHOICE (November 2026) on bundles" },
      { name: "Further Black Friday guides", text: "Utopia (November 2025) with the WISO analysis, Verbraucherzentrale Südtirol (November 2023) on goods from the Far East, ZDFheute (November 2025) on price alerts, heise online on the EU check and GIGA (November 2026) on the dates and earlier promotions" }
    ]
  }
];
