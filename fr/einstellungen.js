/*
  Französische Fassung von einstellungen.js (für myle.life/fr/).
  Gleiche Einstellungen wie dort, nur die Texte sind auf Französisch.
  Die Fotos liegen im Ordner "bilder" eine Ebene höher, darum steht vor jedem Bild "../".
*/

const SEITE = {
  name: "MYLE",
  slogan: "make your life easier",
  partnerId: "myle03e-21",
  // Amazon-Shop für diese Sprache und deine Partner-ID dort (aus Amazon Partenaires, partenaires.amazon.fr).
  // Solange hier "DEINPARTNERTAG-21" steht, führen die Links zu amazon.de mit der deutschen Partner-ID oben.
  amazonShop: "www.amazon.fr",
  partnerIdShop: "mylefr-21",
  preisstand: "Oktober 2026"
};

const UEBER_MICH = {
  name: "Lukas",
  titel: "Bonjour, moi c’est Lukas.",
  text: [
    "Mes loisirs très prenants, comme la musculation, le trekking et l’alpinisme, m’ont obligé très tôt à optimiser mon temps. Et pour être honnête, je ne connais rien de plus pénible que les tâches ménagères et la cuisine.",
    "À 18 ans, je me suis donc acheté mon premier robot aspirateur. À l’époque, ils parcouraient encore l’appartement au hasard, mais c’était déjà une aide énorme. J’ai su alors\u202f: impossible de revenir en arrière\u202f! Depuis, ma collection d’appareils et mon enthousiasme pour la technologie qui apporte vraiment quelque chose grandissent d’année en année.",
    "Avec MYLE, je fais connaître ces petites aides à tous ceux qui veulent tirer davantage de leur temps ou ne pas s’épuiser inutilement aux tâches ménagères. Pour chaque appareil, je vous dis honnêtement ce qui me convainc et dans quels cas il n’est peut-être pas fait pour vous."
  ],
  foto: "../bilder/lukas-trekking.webp",
  fotoText: "Lukas en trekking avec sac à dos et bâtons de marche",
  weitereFotos: [
    { datei: "../bilder/lukas-nebelmeer.webp", text: "Lukas dans la neige au-dessus d’une mer de nuages au coucher du soleil" },
    { datei: "../bilder/lukas-west-highland-way.webp", text: "Lukas près d’une borne du West Highland Way" },
    { datei: "../bilder/lukas-gipfel.webp", text: "Lukas sur un sommet enneigé au-dessus des nuages" },
    { datei: "../bilder/lukas-saugroboter.webp", text: "Le robot aspirateur de Lukas dans sa station de vidage" }
  ],
  avatar: "../bilder/lukas-avatar-sw.webp"
};

const NEWSLETTER = {
  titel: "Les nouveaux appareils par e-mail",
  text: "Chaque fois que je découvre un nouvel appareil qui me convainc, je vous envoie un court e-mail. Deux fois par mois au maximum, et vous pouvez vous désinscrire à tout moment.",
  formularAdresse: "",
  feldName: "EMAIL",
  zusatzFelder: { email_address_check: "", locale: "fr" }
};
