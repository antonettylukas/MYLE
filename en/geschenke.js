/*
  The gift page myle.life/en/geschenke ("Gifts that give time"). Same structure as the German geschenke.js.
  Only devices that MYLE recommends anyway. Each group lists products by their id from produkte.js.
  If a device is currently not available in this country's shop (keinModell), the page leaves it out.
*/
const GESCHENKE = {
  eyebrow: "Gift ideas",
  titel: "Gifts that give time",
  einstieg: [
    "Most of us have enough things. Free time, on the other hand, is something hardly anyone has to spare.",
    "That's why you'll find helpers here that take a bit of work off the person you give them to, every week, not just at Christmas. I recommend all of them on MYLE anyway, each with honest downsides and a calculator on the product page."
  ],
  spartStd: "saves approx. {n} h a year",
  spartGeld: "saves approx. {geld} a year",
  knopf: "See my recommendation",
  hinweis: "The hours and euros are estimates using the calculators' starting values. On each product page you can work them out more precisely for the household of the person you're giving it to.",
  gruppen: [
    { titel: "For a first flat of their own", text: "Little space, little time and no household routine yet: these helpers make the start easier.",
      produkte: ["airfryer", "reiskocher", "smarte-lampen", "wassersprudler"] },
    { titel: "For parents with little time", text: "When the day with children is already full, anything that runs by itself on the side helps.",
      produkte: ["waschtrockner", "kuechenmaschine-kochfunktion", "mini-geschirrspueler"] },
    { titel: "For coffee lovers and people who enjoy the good things", text: "For everyone who likes to treat themselves: good coffee, freshly baked bread and a book in the evening.",
      produkte: ["kaffeevollautomat", "kuechenmaschine", "kindle"] },
    { titel: "For everyone who doesn't like cleaning", text: "My top tip is right at the top here. After that, vacuuming is no longer an issue for most people.",
      produkte: ["saugroboter", "akkusauger"] },
    { titel: "Small gifts", text: "Inexpensive helpers that are still useful every day. Good for Secret Santa or as a little present.",
      produkte: ["stretchdeckel", "reinigungsbuerste", "sparduschkopf", "zahnbuerste"] }
  ],
  warum: {
    "airfryer": "Crispy without long preheating and almost no washing-up. Fits in a small kitchen too.",
    "reiskocher": "Rice turns out right every time, and nobody has to stand next to the hob.",
    "smarte-lampen": "Light by app or schedule, without an electrician. The bulbs simply go into the existing fitting.",
    "wassersprudler": "Sparkling water straight from the tap. No more lugging bottles home.",
    "waschtrockner": "Laundry in in the morning, dry out in the evening. No more clothes horse in the living room.",
    "kuechenmaschine-kochfunktion": "Stirs and cooks by itself while you look after the children.",
    "mini-geschirrspueler": "Washes up even where there's no room for a full-size dishwasher.",
    "kaffeevollautomat": "Freshly ground coffee and cappuccino at the touch of a button, with no capsules at all.",
    "kuechenmaschine": "Kneads dough for bread, pizza and biscuits. Your hands stay free.",
    "kindle": "Thousands of books in one hand, with its own light for reading in bed.",
    "saugroboter": "Cleans on a schedule while the person you give it to is at work. For me, a massive upgrade in quality of life.",
    "akkusauger": "Take it off the wall, vacuum quickly, hang it back up. No cable and no heavy vacuum cleaner.",
    "stretchdeckel": "Fits over bowls, tins, jars and even half an onion, and replaces cling film.",
    "reinigungsbuerste": "Scrubs the bath, tiles and sink while you stand upright.",
    "sparduschkopf": "Saves hot water with every shower, and with it money, without showering for less time.",
    "zahnbuerste": "Cleans more thoroughly than a manual toothbrush. You just guide it."
  },
  fragenTitel: "Questions and answers",
  fragen: [
    { f: "What do you give someone who already has everything?",
      a: "Ideally something that takes work off them every week. Most people have enough things, but hardly anyone has free time to spare. A robot vacuum and mop, an air fryer or a bean-to-cup coffee machine get used almost every day and remind them of the gift for a long time. Check carefully beforehand whether there's already one in the household." },
    { f: "Is a robot vacuum a good gift?",
      a: "Yes, if there isn't too much lying around on the floor and the person is happy to set up an app once. With my calculator's starting values it saves around 50 hours of cleaning a year. Who it's not really for is explained honestly on the robot vacuum and mop page." },
    { f: "When do I need to order so it arrives before Christmas?",
      a: "Unfortunately I can't promise you that. You can see how quickly a device will arrive directly on the product page at Amazon, where the estimated delivery date is shown. Large appliances often take longer than small ones. It's better to order one or two weeks early so you have some leeway." }
  ]
};
