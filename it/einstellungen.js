/*
  Italienische Fassung von einstellungen.js (für myle.life/it/).
  Gleiche Einstellungen wie dort, nur die Texte sind auf Italienisch.
  Die Fotos liegen im Ordner "bilder" eine Ebene höher, darum steht vor jedem Bild "../".
*/

const SEITE = {
  name: "MYLE",
  slogan: "make your life easier",
  partnerId: "myle03e-21",
  // Amazon-Shop für diese Sprache und deine Partner-ID dort (aus Amazon Programma Affiliazione, programma-affiliazione.amazon.it).
  // Solange hier "DEINPARTNERTAG-21" steht, führen die Links zu amazon.de mit der deutschen Partner-ID oben.
  amazonShop: "www.amazon.it",
  partnerIdShop: "myleit-21",
  preisstand: "Oktober 2026"
};

const UEBER_MICH = {
  name: "Lukas",
  titel: "Ciao, sono Lukas.",
  text: [
    "I miei hobby che richiedono molto tempo, come pesi, trekking e alpinismo, mi hanno costretto presto a ottimizzare il mio tempo. E sinceramente non trovo niente di più fastidioso delle faccende di casa e del cucinare.",
    "Così a 18 anni mi sono comprato il mio primo robot aspirapolvere. Allora giravano ancora per casa a caso, eppure era già un aiuto enorme. Lì ho capito: non si torna più indietro! Da allora la mia collezione di apparecchi e la passione per la tecnologia che porta davvero un valore aggiunto sono cresciute anno dopo anno.",
    "Con MYLE faccio conoscere questi piccoli aiuti a tutti quelli che vogliono fare di più con il loro tempo o non vogliono faticare inutilmente in casa. Per ogni apparecchio ti dico sinceramente cosa mi convince e in quali casi forse non fa per te."
  ],
  foto: "../bilder/lukas-trekking.webp",
  fotoText: "Lukas durante un trekking con zaino e bastoncini",
  weitereFotos: [
    { datei: "../bilder/lukas-nebelmeer.webp", text: "Lukas sulla neve sopra un mare di nebbia al tramonto" },
    { datei: "../bilder/lukas-west-highland-way.webp", text: "Lukas accanto a un cippo del West Highland Way" },
    { datei: "../bilder/lukas-gipfel.webp", text: "Lukas su una cima innevata sopra le nuvole" },
    { datei: "../bilder/lukas-saugroboter.webp", text: "Il robot aspirapolvere di Lukas nella sua base di svuotamento" }
  ],
  avatar: "../bilder/lukas-avatar-sw.webp"
};

const NEWSLETTER = {
  titel: "Nuovi apparecchi via e-mail",
  text: "Ogni volta che scopro un nuovo apparecchio che mi convince, ti mando una breve e-mail. Al massimo due volte al mese, e ti puoi disiscrivere quando vuoi.",
  formularAdresse: "",
  feldName: "EMAIL",
  zusatzFelder: { email_address_check: "", locale: "it" }
};
