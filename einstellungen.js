/*
  ==========================================================
  EINSTELLUNGEN FÜR DIE GANZE WEBSITE
  ==========================================================
  Hier trägst du Dinge ein, die überall auf der Seite gelten.
  Texte stehen immer zwischen Anführungszeichen "...".
*/

const SEITE = {
  // Name der Website. Steht gelb hinterlegt oben links und unten auf jeder Seite.
  name: "MYLE",
  // Der Spruch neben dem Namen. Passen die Anfangsbuchstaben zum Namen, werden sie fett.
  slogan: "make your life easier",

  // Deine Partner-ID von Amazon PartnerNet, z. B. "lukas0a-21".
  // Sie wird automatisch in alle Amazon-Links eingesetzt.
  partnerId: "myle03e-21",

  // Eigene Tracking-IDs pro Produktseite (anlegen in PartnerNet: Konto-Einstellungen > Tracking-IDs verwalten).
  // Dann zeigt PartnerNet die Klicks und Käufe getrennt pro Seite. Beispiel: saugroboter: "mylesaug-21",
  // Seiten ohne Eintrag nutzen die Partner-ID oben.
  trackingIds: {
  },

  // Wann du die Preise zuletzt geprüft hast. Nur für dich, auf der Seite stehen keine Preise.
  preisstand: "Oktober 2026"
};

// Der Bereich "Wer hier empfiehlt" auf der Startseite.
// Fotos: Datei in den Ordner "bilder" legen und hier den Namen eintragen,
// z. B. foto: "bilder/lukas.jpg". Leer lassen = an der Stelle ist kein Foto.
// Der Text zum Foto beschreibt kurz, was darauf zu sehen ist (für Suchmaschinen und für Menschen, die nicht sehen können).
const UEBER_MICH = {
  name: "Lukas",
  titel: "Hi, ich bin Lukas.",
  text: [
    "Meine zeitintensiven Hobbys wie Kraftsport, Trekking und das Bergsteigen haben mich schon früh dazu gezwungen, meine Zeit zu optimieren. Und ehrlicherweise finde ich auch nichts lästiger als Hausarbeit und Kochen.",
    "Mit 18 Jahren kaufte ich mir also meinen ersten Saugroboter. Die fuhren damals noch per Zufallsmuster durch die Wohnung, trotzdem war das bereits eine Riesenhilfe. Da war mir klar: Es gibt kein Zurück mehr! Seitdem wuchs die Sammlung an Geräten und die Begeisterung für Technik, die wirklich einen Mehrwert bringt, von Jahr zu Jahr.",
    "Mit MYLE bringe ich diese Helfer zu allen, die mehr aus ihrer Zeit machen oder sich im Haushalt nicht unnötig abmühen wollen. Zu jedem Gerät sage ich dir ehrlich, was mich überzeugt und unter welchen Umständen es vielleicht nichts für dich ist."
  ],
  // Großes Foto neben dem Text
  foto: "bilder/lukas-trekking.webp",
  fotoText: "Lukas mit Rucksack und Wanderstöcken beim Trekking",
  // Weitere Fotos in einer Reihe unter dem Text. Am Handy stehen je zwei nebeneinander, bei einer ungeraden Zahl steht das erste groß.
  weitereFotos: [
    { datei: "bilder/lukas-nebelmeer.webp", text: "Lukas im Schnee über einem Nebelmeer bei Sonnenuntergang" },
    { datei: "bilder/lukas-west-highland-way.webp", text: "Lukas am Wegstein des West Highland Way" },
    { datei: "bilder/lukas-gipfel.webp", text: "Lukas auf einem verschneiten Gipfel über den Wolken" },
    { datei: "bilder/lukas-saugroboter.webp", text: "Lukas' Saugroboter in seiner Absaugstation" }
  ],
  // Kleines rundes Bild neben deinem Namen bei „Meine Erfahrung“ auf den Produktseiten (Schwarz-Weiß-Foto)
  avatar: "bilder/lukas-avatar-sw.webp"
};

// Die Anmeldung "Neue Helfer per Mail".
// Sobald du bei einem Newsletter-Anbieter (z. B. Brevo) ein Anmeldeformular
// angelegt hast, schick mir den HTML-Code. Ich trage die Adresse hier ein.
// Solange "formularAdresse" leer ist, wird nichts verschickt.
const NEWSLETTER = {
  titel: "Neue Helfer per Mail",
  text: "Immer wenn ich einen neuen Helfer entdecke, der mich überzeugt, schreibe ich dir eine kurze Mail. Höchstens zweimal im Monat, und du kannst dich jederzeit wieder abmelden.",
  formularAdresse: "",
  feldName: "EMAIL",
  zusatzFelder: { email_address_check: "", locale: "de" }
};
