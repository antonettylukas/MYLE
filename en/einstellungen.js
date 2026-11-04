/*
  Englische Fassung von einstellungen.js (für myle.life/en/).
  Gleiche Einstellungen wie dort, nur die Texte sind auf Englisch.
  Die Fotos liegen im Ordner "bilder" eine Ebene höher, darum steht vor jedem Bild "../".
*/

const SEITE = {
  name: "MYLE",
  slogan: "make your life easier",
  partnerId: "myle03e-21",
  // Amazon-Shop für diese Sprache und deine Partner-ID dort (aus Amazon.co.uk Associates, affiliate-program.amazon.co.uk).
  // Solange hier "DEINPARTNERTAG-21" steht, führen die Links zu amazon.de mit der deutschen Partner-ID oben.
  amazonShop: "www.amazon.co.uk",
  partnerIdShop: "myleuk-21",
  // Eigene Tracking-IDs pro Produktseite aus Amazon.co.uk Associates (wie in einstellungen.js), z. B. saugroboter: "myleuksaug-21".
  trackingIds: {
  },
  // Wann alle Empfehlungen zuletzt geprüft wurden (wie in einstellungen.js), Jahr-Monat-Tag.
  geprueft: "2026-11-04",
  preisstand: "Oktober 2026"
};

const UEBER_MICH = {
  name: "Lukas",
  titel: "Hi, I'm Lukas.",
  text: [
    "My time-consuming hobbies like strength training, trekking and mountaineering forced me to optimise my time early on. And to be honest, I can't think of anything more annoying than housework and cooking.",
    "So at 18 I bought my first robot vacuum. Back then they still drove through the flat in random patterns, but even so it was a huge help. That's when I knew: there's no going back! Since then my collection of devices and my enthusiasm for technology that really adds value have grown from year to year.",
    "With MYLE I bring these helpers to everyone who wants to make more of their time or not wear themselves out with housework. For every device I tell you honestly what convinces me and in which situations it might not be for you."
  ],
  foto: "../bilder/lukas-trekking.webp",
  fotoText: "Lukas trekking with a backpack and walking poles",
  weitereFotos: [
    { datei: "../bilder/lukas-nebelmeer.webp", text: "Lukas in the snow above a sea of fog at sunset" },
    { datei: "../bilder/lukas-west-highland-way.webp", text: "Lukas at a waymarker stone on the West Highland Way" },
    { datei: "../bilder/lukas-gipfel.webp", text: "Lukas on a snowy summit above the clouds" },
    { datei: "../bilder/lukas-saugroboter.webp", text: "Lukas's robot vacuum in its emptying station" }
  ],
  avatar: "../bilder/lukas-avatar-sw.webp"
};

const NEWSLETTER = {
  titel: "New helpers by email",
  text: "Whenever I discover a new helper that convinces me, I'll send you a short email. Twice a month at most, and you can unsubscribe any time.",
  formularAdresse: "https://ef46dae9.sibforms.com/serve/MUIFALyS3T8vlqv-XVLIhIky9iORA_K57y3BiYZF1STOu5tVGDrD4r-AcGyg1FKlq8QI2htCKC73oHyx1GmuNsBASH4Rn72fjjFgRQM-FmOMozQpcA4IhxBBkDcDDmgrXoWmm_VJwccfg7fWT5AduQ8gv0j8OLJqB_GitrZzDEJ4Z6SVhGPeay_18X0O9ssSw8euP6hvYkXRClWSdw==?isAjax=1",
  feldName: "EMAIL",
  zusatzFelder: { email_address_check: "", locale: "en", html_type: "simple" }
};
