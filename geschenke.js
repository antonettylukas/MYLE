/*
  Die Geschenke-Seite myle.life/geschenke („Geschenke, die Zeit schenken“).
  Hier stehen nur Geräte, die MYLE sowieso empfiehlt. Jede Gruppe nennt die Produkte mit ihrer id aus produkte.js.
  warum     ein Satz pro Gerät, warum es ein gutes Geschenk ist
  spartStd  „spart ca. … Std. im Jahr“: app.js rechnet mit den Startwerten des Rechners der Produktseite
  spartGeld für Geräte, die vor allem Geld sparen (Kaffeevollautomat, Sparduschkopf, E-Reader)
  Spart ein Gerät laut Rechner kaum Zeit oder Geld, steht stattdessen „spart Mühe“.
  Ist ein Gerät im Shop des Landes gerade nicht lieferbar (keinModell), lässt die Seite es weg.
*/
const GESCHENKE = {
  eyebrow: "Geschenkideen",
  titel: "Geschenke, die Zeit schenken",
  einstieg: [
    "Gegenstände haben die meisten von uns genug. Freie Zeit dagegen hat kaum jemand übrig.",
    "Darum findest du hier Helfer, die dem Beschenkten jede Woche ein Stück Arbeit abnehmen, nicht nur an Weihnachten. Alle empfehle ich auch sonst auf MYLE, jeweils mit ehrlichen Nachteilen und einem Rechner auf der Produktseite."
  ],
  spartStd: "spart ca. {n} Std. im Jahr",
  spartGeld: "spart ca. {geld} im Jahr",
  knopf: "Zur Empfehlung",
  hinweis: "Die Stunden und Euro sind Schätzungen mit den Startwerten der Rechner. Auf jeder Produktseite kannst du sie für den Haushalt des Beschenkten genauer ausrechnen.",
  gruppen: [
    { titel: "Für die erste eigene Wohnung", text: "Wenig Platz, wenig Zeit und noch keine Routine im Haushalt: Diese Helfer machen den Start leichter.",
      produkte: ["airfryer", "reiskocher", "smarte-lampen", "wassersprudler"] },
    { titel: "Für Eltern mit wenig Zeit", text: "Wenn der Tag mit Kindern schon voll ist, hilft alles, was selbstständig nebenbei läuft.",
      produkte: ["waschtrockner", "kuechenmaschine-kochfunktion", "mini-geschirrspueler"] },
    { titel: "Für Kaffeeliebhaber und Genießer", text: "Für alle, die sich gern etwas gönnen: guter Kaffee, frisch gebackenes Brot und ein Buch am Abend.",
      produkte: ["kaffeevollautomat", "kuechenmaschine", "kindle"] },
    { titel: "Für alle, die nicht gern putzen", text: "Mein wichtigster Tipp steht hier ganz oben. Danach ist Staubsaugen für die meisten kein Thema mehr.",
      produkte: ["saugroboter", "akkusauger"] },
    { titel: "Kleine Geschenke", text: "Günstige Helfer, die trotzdem jeden Tag nützen. Gut zum Wichteln oder als Mitbringsel.",
      produkte: ["stretchdeckel", "reinigungsbuerste", "sparduschkopf", "zahnbuerste"] }
  ],
  warum: {
    "airfryer": "Knusprig ohne langes Vorheizen und quasi kein Abwasch. Passt auch in eine kleine Küche.",
    "reiskocher": "Reis gelingt jedes Mal, und niemand muss am Herd danebenstehen.",
    "smarte-lampen": "Licht per App oder Zeitplan, ganz ohne Elektriker. Die Lampen kommen einfach in die vorhandene Fassung.",
    "wassersprudler": "Sprudel direkt aus dem Wasserhahn. Nie mehr Wasserkästen schleppen.",
    "waschtrockner": "Morgens Wäsche rein, abends trocken raus. Kein Wäscheständer mehr im Wohnzimmer.",
    "kuechenmaschine-kochfunktion": "Rührt und kocht selbstständig, während man sich um die Kinder kümmert.",
    "mini-geschirrspueler": "Spült auch dort, wo keine große Spülmaschine Platz hat.",
    "kaffeevollautomat": "Frisch gemahlener Kaffee und Cappuccino auf Knopfdruck, ganz ohne Kapseln.",
    "kuechenmaschine": "Knetet Teig für Brot, Pizza und Plätzchen. Die Hände bleiben frei.",
    "kindle": "Tausende Bücher in einer Hand, mit eigenem Licht zum Lesen im Bett.",
    "saugroboter": "Putzt nach Zeitplan, während der Beschenkte bei der Arbeit ist. Für mich ein massives Upgrade der Lebensqualität.",
    "akkusauger": "Von der Wand nehmen, kurz saugen, zurückhängen. Ohne Kabel und ohne schweren Sauger.",
    "stretchdeckel": "Passt auf Schüsseln, Dosen, Gläser und sogar die halbe Zwiebel und ersetzt Frischhaltefolie.",
    "reinigungsbuerste": "Schrubbt Wanne, Fliesen und Waschbecken, und man steht dabei aufrecht.",
    "sparduschkopf": "Spart bei jeder Dusche warmes Wasser und damit Geld, ohne kürzer zu duschen.",
    "zahnbuerste": "Putzt gründlicher als eine Handzahnbürste. Man führt sie nur."
  },
  fragenTitel: "Fragen und Antworten",
  fragen: [
    { f: "Was schenkt man jemandem, der schon alles hat?",
      a: "Am besten etwas, das jede Woche Arbeit abnimmt. Gegenstände haben die meisten genug, freie Zeit dagegen kaum jemand. Ein Saug- und Wischroboter, ein Airfryer oder ein Kaffeevollautomat werden fast jeden Tag benutzt und erinnern lange an das Geschenk. Frag vorher vorsichtig nach, ob so ein Gerät schon im Haushalt steht." },
    { f: "Lohnt sich ein Saugroboter als Geschenk?",
      a: "Ja, wenn auf dem Boden nicht zu viel herumliegt und der Beschenkte einmal eine App einrichten mag. Mit den Startwerten meines Rechners spart er rund 50 Stunden Putzen im Jahr. Für wen er eher nichts ist, steht ehrlich auf der Seite zum Saug- und Wischroboter." },
    { f: "Bis wann muss ich bestellen, damit es vor Weihnachten ankommt?",
      a: "Das kann ich dir leider nicht versprechen. Wie schnell ein Gerät ankommt, siehst du bei Amazon direkt beim Produkt, dort steht das voraussichtliche Lieferdatum. Große Geräte brauchen oft länger als kleine. Bestell lieber ein bis zwei Wochen früher, dann bleibt dir ein Puffer." }
  ]
};
