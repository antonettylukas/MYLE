/*
  Le guide di MYLE (myle.life/it/ratgeber e myle.life/it/ratgeber-<id>). Stessa struttura di ratgeber.js in tedesco.
*/
const RATGEBER = [
  {
    id: "saugroboter-kleine-wohnung",
    produkt: "saugroboter",
    geprueft: "2026-11-04",
    titel: "Un robot aspirapolvere conviene in una casa piccola?",
    frage: "Un robot aspirapolvere conviene in una casa piccola?",
    seitenTitel: "Un robot aspirapolvere conviene in una casa piccola?",
    beschreibung: "Quanto fa davvero risparmiare un robot aspirapolvere lavapavimenti su 30–60 m², quanto è rumoroso, quanto spazio serve alla base e quando non fa per te.",
    kurzantwort: "Sì, anche su 30–60 m² conviene alla maggior parte delle persone, e spesso basta già un modello di fascia base o media. Se di solito passi l’aspirapolvere due volte a settimana e lavi i pavimenti una volta, secondo il mio calcolatore risparmi tra mezz’ora e quasi un’ora a settimana. Non fa per te se la base non ha spazio o se non vuoi dare una rapida sistemata prima che parta.",
    abschnitte: [
      {
        titel: "Quanto tempo risparmi su 30–60 m²",
        absaetze: [
          "Per passare l’aspirapolvere, preparazione compresa, il mio calcolatore conta circa 5 minuti più 0,2 minuti per m², per lavare i pavimenti 8 minuti più 0,25 minuti per m². Toglie 5 minuti a settimana per la cura del robot.",
          "Con due passate di aspirapolvere e un lavaggio a settimana risparmi così circa 33 minuti a settimana su 30 m² e circa 52 minuti su 60 m². Sono circa 28–45 ore all’anno.",
          "Quello che il calcolatore non mostra: con una programmazione il robot pulisce mentre lavori, se vuoi ogni giorno. La tua casa è quindi pulita più spesso che se passassi tu l’aspirapolvere due volte a settimana."
        ]
      },
      {
        titel: "La mia esperienza dopo 14 anni",
        art: "erfahrung",
        absaetze: [
          "Uso robot aspirapolvere da 14 anni e da allora non ho quasi più dovuto passare l’aspirapolvere o lavare i pavimenti da solo. Il trucco più importante: impostare una programmazione. Così pulisce mentre lavoro, e ogni sera torno in una casa pulita."
        ]
      },
      {
        titel: "Cosa sa fare già un robot economico",
        absaetze: [
          "Per una casa piccola non ti serve un modello top. La navigazione laser c’è già nella fascia di prezzo più bassa: il robot crea una mappa e pulisce a corsie. Nell’app imposti la programmazione, fai pulire singole stanze e blocchi delle zone, per esempio un tappeto delicato.",
          "Se vuoi spendere di più, guarda soprattutto due cose. Con una telecamera un robot di solito riconosce cavi, calzini e scarpe e ci gira intorno. Senza telecamera tende a passarci sopra o a bloccarsi: in un test di smarthomeassistent.de un modello economico non ha riconosciuto nessuno dei 53 ostacoli. E se vuoi un lavaggio accurato, scegli un modello la cui base lavi anche i panni o il rullo."
        ]
      },
      {
        titel: "Quanto è rumoroso",
        absaetze: [
          "Mentre aspira, la maggior parte dei robot fa circa 55–70 decibel, più o meno come una normale conversazione. Un aspirapolvere classico arriva di solito a 70–85 decibel. Diventa davvero rumorosa solo la base quando svuota il robot: circa 75–90 decibel, ma solo per pochi secondi. In una casa piccola la programmazione conviene quindi due volte: fallo partire quando non ci sei."
        ]
      },
      {
        titel: "Spazio per la base",
        absaetze: [
          "Una base è spesso larga circa 40 cm e alta fino a 60 cm. Davanti il robot ha bisogno di spazio per entrare e agganciarsi: a seconda del modello vanno lasciati liberi 0,8–1,5 m davanti e 5–50 cm ai lati. Misura prima, soprattutto in corridoio o in una stanza piccola."
        ]
      },
      {
        titel: "Passa sotto divano e letto?",
        absaetze: [
          "La maggior parte dei robot è alta circa 9–12 cm, i modelli piatti circa 8 cm. Misura quanto spazio c’è sotto divano, letto e mobili e calcola un po’ di margine. Se è appena sufficiente, non ci passerà sotto in modo affidabile."
        ]
      },
      {
        titel: "Tappeti, frange e cavi",
        absaetze: [
          "I tappeti a pelo lungo e quelli con le frange mettono in difficoltà molti robot: le frange si avvolgono intorno alla spazzola, e alcuni si impantanano nel pelo lungo. Ripiega le frange sotto il tappeto o bloccalo nell’app. Cavi e calzini è meglio toglierli prima della partenza, soprattutto con i modelli senza telecamera."
        ]
      },
      {
        titel: "Quanta corrente consuma",
        absaetze: [
          "Un giro di pulizia consuma solo pochi centesimi di chilowattora. Pesa di più la base, attaccata alla corrente giorno e notte: circa 1–4 watt, quindi fino a circa 35 kWh all’anno. Alcuni calcoli di esempio arrivano a circa 30–60 kWh all’anno per robot e base insieme.",
          "Per la corrente, robot e aspirapolvere con filo si equivalgono più o meno. Il robot ti fa quindi risparmiare tempo, non corrente."
        ]
      }
    ],
    verweis: {
      text: "Quali modelli consiglio e quanto tempo risparmi con i tuoi numeri lo trovi nella mia pagina sul robot aspirapolvere lavapavimenti.",
      knopf: "Al robot aspirapolvere lavapavimenti con calcolatore"
    },
    wannNicht: [
      "Manca lo spazio per la base: circa 40 cm lungo la parete e davanti 0,8–1,5 m liberi.",
      "Hai molti tappeti a pelo lungo o con le frange che non vuoi né ripiegare né bloccare.",
      "Sul pavimento c’è spesso molta roba in giro, e non vuoi dare una rapida sistemata prima che parta.",
      "I tuoi mobili sono così bassi che nemmeno un modello piatto di circa 8 cm ci passa sotto, ed è proprio lì che vuoi pulire.",
      "Le tue soglie sono più alte di circa 2 cm: di solito ci riescono solo i modelli con aiuto per salire.",
      "Passi l’aspirapolvere solo una volta a settimana, lavi i pavimenti quasi mai e ti va bene così: allora, secondo il mio calcolatore, su 30 m² ti fa risparmiare solo pochi minuti a settimana."
    ],
    fragen: [
      { f: "Un robot economico basta per una casa piccola?", a: "Di solito sì, se ha la navigazione laser. Così pulisce a corsie, e nell’app imposti programmazione, stanze e zone vietate. Senza telecamera, togli prima cavi e calzini." },
      { f: "Può pulire mentre lavoro da casa?", a: "Sì, ma lo senti, più o meno forte come una conversazione. Meglio farlo partire durante la pausa pranzo, o mandarlo dall’app solo nelle stanze dove non sei." },
      { f: "Mi serve la funzione lavapavimenti?", a: "Con molti pavimenti duri come piastrelle, laminato o parquet, assolutamente sì: il pavimento resta pulito e il secchio non ti serve quasi più. Se hai soprattutto moquette, o ti piace comunque lavare da solo, basta un robot che aspira e basta. Spesso costa la metà." },
      { f: "Supera le soglie delle porte?", a: "La maggior parte dei modelli supera soglie fino a circa 2 cm. Quelle più alte le superano i modelli con aiuto per salire, alcuni ormai più di 5 cm." },
      { f: "Cosa devo ancora fare da solo?", a: "Cambiare il sacchetto ogni qualche settimana e pulire ogni tanto la spazzola. Con un robot lavapavimenti aggiungi acqua pulita e svuoti l’acqua sporca appena te lo segnala. Non lasciarla lì per giorni, però, altrimenti comincia a puzzare." }
    ],
    quellen: [
      { name: "Il mio calcolatore nella pagina del robot aspirapolvere lavapavimenti", text: "i tempi per 30 e 60 m², le ipotesi sono lì sotto „Come calcolo“" },
      { name: "Stiftung Warentest: test dei robot aspirapolvere (giugno 2026)", text: "altezza, soglie, dimensioni delle basi, sollevare i cavi prima della partenza ed escludere i tappeti nell’app" },
      { name: "Stiftung Warentest: test dei robot aspirapolvere lavapavimenti (dicembre 2025)", text: "dodici robot con base, sui tappeti la maggior parte non convince" },
      { name: "ÖKO-TEST: quanto costa all’anno un robot aspirapolvere (agosto 2023)", text: "batteria di circa 31 wattora, base 3–4 watt giorno e notte, aspirapolvere con filo quasi sempre più economico" },
      { name: "netzwelt.de: consumo dei robot aspirapolvere (febbraio 2026)", text: "69 watt mentre aspira, circa 4 watt in standby, circa 50 kWh all’anno con due ore al giorno" },
      { name: "t-online: aspirapolvere o robot, cosa costa meno? (aprile 2026)", text: "35–50 kWh all’anno con base, solo poco meno di un aspirapolvere con filo" },
      { name: "Heidelberg24 (settembre 2022) e drohnen.de (2019)", text: "altri calcoli sul consumo dei robot rispetto all’aspirapolvere" },
      { name: "smarthomeassistent.de: robot aspirapolvere silenziosi (agosto 2026)", text: "di solito 55–65 dB, svuotamento nella base per poco 75–80 dB" },
      { name: "netzwelt.de: rumorosità dei robot aspirapolvere (febbraio 2026) e basi di svuotamento (marzo 2026)", text: "di solito 60–70 dB, 60 dB corrispondono a una normale conversazione, la base 80–90 dB per qualche secondo" },
      { name: "testsiegertv.com: basi di svuotamento (luglio 2021)", text: "svuotamento fino a 90 dB, dura solo pochi secondi" },
      { name: "home&smart: test dei robot aspirapolvere piatti (novembre 2026)", text: "robot normali alti 9–12 cm, quelli piatti 7–9 cm" },
      { name: "home&smart: LiDAR contro telecamera (novembre 2026)", text: "il laser crea la mappa, solo la telecamera riconosce un cavo come cavo, altrimenti si avvolge intorno alla spazzola" },
      { name: "home&smart: test delle soglie (settembre 2026)", text: "senza aiuto per salire di solito 2 cm, alcuni modelli molto di più" },
      { name: "smarthomeassistent.de: il Roborock non passa sotto i mobili (giugno 2023)", text: "pochi millimetri in più spesso non bastano, meglio calcolare margine" },
      { name: "smarthomeassistent.de: tappeti con frange (maggio 2023) e robot per soglie alte (luglio 2026)", text: "le frange si avvolgono intorno alla spazzola, ripiegarle aiuta, alcuni modelli superano 5 cm" },
      { name: "smarthomeassistent.de: test del Roborock Q10 S5+ (luglio 2026) e del Roborock Q7 L5+ (maggio 2026)", text: "navigazione laser nella fascia di prezzo più bassa, bloccato sul pelo lungo, nessuno dei 53 ostacoli riconosciuto" },
      { name: "netzwelt.de: navigazione dei robot aspirapolvere e robot per tappeti (febbraio 2026)", text: "laser già su modelli più economici, mappe e zone vietate nell’app, pelo lungo e frange come limite" },
      { name: "Dati dei produttori e istruzioni", text: "spazio davanti e accanto alla base secondo Roborock (Q5 Pro, Q8 Max+), Kärcher (RCV 5) ed Ecovacs, dimensioni delle basi secondo Kärcher e Anker, rumorosità secondo Hoover, Anker ed Ecovacs, corrente, bordi dei tappeti e soglie secondo Anker" }
    ]
  }
];
