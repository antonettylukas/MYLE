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
  }
];
