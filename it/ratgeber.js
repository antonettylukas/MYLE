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
  },
  {
    id: "airfryer-oder-backofen",
    produkt: "airfryer",
    geprueft: "2026-11-04",
    titel: "Friggitrice ad aria o forno: cosa costa meno?",
    frage: "Friggitrice ad aria o forno: cosa costa meno?",
    seitenTitel: "Friggitrice ad aria o forno: cosa costa meno?",
    beschreibung: "Quanta corrente consumano friggitrice ad aria e forno per ogni piatto, quanto fa in centesimi e quando il forno la raggiunge.",
    kurzantwort: "Per piccole quantità la friggitrice ad aria costa meno: nei test consuma spesso solo metà della corrente per piatto, o anche meno. A 37 centesimi per kWh risparmi così circa 13–33 centesimi a piatto. Se per una grande quantità servono più giri, il forno va altrettanto bene o costa persino meno.",
    abschnitte: [
      {
        titel: "Quanta corrente consuma un piatto",
        absaetze: [
          "Diversi test e confronti mostrano quanta corrente consuma lo stesso piatto nella friggitrice ad aria e nel forno. Ho calcolato i costi a 37 centesimi per kWh, la media in Germania. In Austria e in Svizzera la corrente costa circa 30 centesimi, quindi lì ogni piatto costa un po’ meno."
        ],
        tabelle: {
          kopf: ["Piatto","Friggitrice ad aria","Forno","Fonte"],
          zeilen: [
            ["Patatine, 2 porzioni","0,29 kWh (11 centesimi)","0,86 kWh (32 centesimi)","Which?, 2026"],
            ["Patatine, 1 porzione","0,35 kWh (13 centesimi)","0,7 kWh (26 centesimi)","inside digital, 2025"],
            ["Patata al forno","0,39 kWh (15 centesimi)","1,08 kWh (40 centesimi)","Which?, 2026"],
            ["Pollo intero","0,54 kWh (20 centesimi)","1,16 kWh (43 centesimi)","Which?, 2026"],
            ["Ali di pollo","0,2–0,3 kWh (7–11 centesimi)","1,0–1,2 kWh (37–44 centesimi)","stromguide.com tramite VOL.AT, 2025"]
          ]
        }
      },
      {
        titel: "Perché la friggitrice ad aria consuma meno",
        absaetze: [
          "La sua camera di cottura è piccola, e l’aria calda arriva in fretta. Di solito non devi preriscaldare, o solo per qualche minuto, mentre un forno ci mette circa 10–15 minuti. Anche la cottura vera e propria di solito dura meno. Secondo Stiftung Warentest le friggitrici ad aria sono più veloci dei forni e consumano meno corrente."
        ]
      },
      {
        titel: "Quando il forno la raggiunge",
        absaetze: [
          "Il vantaggio vale finché tutto entra nel cestello in un solo giro. Se cucini per tante persone e ti servono due o tre giri, il risparmio si riduce, e per grandi quantità il forno va altrettanto bene o costa meno.",
          "Per pizza, torte in teglia o un grande gratin il forno resta comunque la scelta migliore. Lì conta la superficie, e la friggitrice ad aria non ce l’ha."
        ]
      },
      {
        titel: "Quanto fa in un anno",
        absaetze: [
          "Se quattro volte a settimana prepari un piatto nella friggitrice ad aria invece che nel forno, secondo il mio calcolatore risparmi circa 42 euro all’anno a 37 centesimi per kWh. A 30 centesimi per kWh sono circa 34 euro. Se cucini un pasto caldo solo una volta a settimana, sono poco più di 10 euro.",
          "Solo per la corrente, quindi, una friggitrice ad aria conviene poco. Guadagni di più in tempo: niente preriscaldamento, niente teglie da strofinare e quasi niente da lavare, secondo il mio calcolatore circa 18 minuti a piatto."
        ]
      },
      {
        titel: "La mia esperienza",
        art: "erfahrung",
        absaetze: [
          "Da quando ho la mia friggitrice ad aria non ho più usato le padelle. E tutto è più buono: le verdure sono più croccanti e hanno più sapore, il pollo viene perfettamente tenero ogni volta. In più non ho praticamente più niente da lavare. Non si attacca mai niente, i cestelli li metto semplicemente in lavastoviglie o alla fine li passo con un panno umido."
        ]
      },
      {
        titel: "Se resti con il forno",
        absaetze: [
          "Anche con il forno puoi risparmiare corrente. Per la maggior parte dei piatti non devi preriscaldarlo, solo per alcuni impasti come il pan di Spagna o i biscotti. Con la funzione ventilata imposti la temperatura circa 20 gradi più bassa che con il calore statico, e così consumi meno. E con le cotture lunghe spegnilo 5–10 minuti prima: il calore residuo continua a cuocere."
        ]
      }
    ],
    verweis: {
      text: "Quanto risparmi con il tuo prezzo della corrente e i tuoi piatti, e quali friggitrici ad aria consiglio, lo trovi nella mia pagina sulla friggitrice ad aria.",
      knopf: "Alla friggitrice ad aria con calcolatore"
    },
    wannNicht: [
      "Di solito cucini per quattro o più persone alla volta e nella friggitrice ad aria dovresti fare più giri.",
      "Prepari soprattutto pizza, torte in teglia o grandi gratin.",
      "Vuoi solo risparmiare corrente: sono pochi centesimi a piatto, e ci vuole un po’ prima di recuperare il prezzo d’acquisto.",
      "Cucini caldo solo di rado: allora in un anno risparmi solo pochi euro.",
      "Sul piano di lavoro non c’è spazio per un altro apparecchio."
    ],
    fragen: [
      { f: "Devo preriscaldare la friggitrice ad aria?", a: "Di solito no, o solo per qualche minuto. Un forno ci mette circa 10–15 minuti." },
      { f: "Quanto costa un piatto nella friggitrice ad aria?", a: "Di solito consuma 0,2–0,5 kWh, quindi a 37 centesimi per kWh circa 7–20 centesimi. Nel forno la stessa quantità consuma spesso il doppio o di più." },
      { f: "Il forno ventilato è altrettanto parsimonioso?", a: "La funzione ventilata consuma meno del calore statico, perché puoi impostare circa 20 gradi in meno. Per piccole quantità la friggitrice ad aria resta comunque più parsimoniosa, perché scalda uno spazio molto più piccolo." },
      { f: "Una friggitrice ad aria conviene per una persona sola?", a: "Proprio in quel caso. Con porzioni piccole la differenza rispetto al forno è massima. Se di solito prepari una cosa alla volta, basta un modello con un solo cestello." }
    ],
    quellen: [
      { name: "Which?: „Air fryer vs oven“ (ottobre 2026)", text: "corrente misurata per piatto, patatine, patata al forno e pollo intero, nella friggitrice ad aria meno della metà, con più giri il vantaggio si riduce" },
      { name: "Choice: friggitrice ad aria contro forno (ottobre 2023)", text: "tre piatti a confronto, nella friggitrice ad aria circa metà della corrente all’ora, il forno con 15 minuti di preriscaldamento" },
      { name: "inside digital: falsi miti sulla friggitrice ad aria (novembre 2025)", text: "patatine circa 0,35 kWh nella friggitrice ad aria, circa 0,7 kWh nel forno, per grandi quantità meglio il forno" },
      { name: "VOL.AT con dati di stromguide.com (ottobre 2025)", text: "ali di pollo 1,0–1,2 kWh nel forno, 0,2–0,3 kWh nella friggitrice ad aria, il forno per famiglie con grandi quantità" },
      { name: "testundtipps.de: friggitrice ad aria o forno (agosto 2026)", text: "preriscaldamento 2–3 minuti invece di 10–15, patatine 0,3–0,5 kWh a giro, per grandi quantità più o meno alla pari" },
      { name: "home&smart (novembre 2026) e Utopia (agosto 2026)", text: "più giri riducono il risparmio, solo per la corrente una friggitrice ad aria conviene poco" },
      { name: "Stiftung Warentest: test delle friggitrici ad aria (settembre 2026)", text: "le friggitrici ad aria cuociono più in fretta dei forni e consumano meno, molte non cuociono in modo uniforme una grande porzione di patatine" },
      { name: "ÖKO-TEST: risparmiare energia con il forno (gennaio 2026)", text: "preriscaldamento di solito inutile, 20 gradi in meno con il ventilato, con cotture lunghe spegnere 10 minuti prima" },
      { name: "Centro federale tedesco per l’alimentazione, tramite dpa e Utopia (agosto 2024)", text: "20–30 gradi in meno con il ventilato, senza preriscaldamento oltre il 20 per cento di energia in meno, spegnere 5–10 minuti prima" },
      { name: "oesterreich.gv.at: piani cottura e forni (marzo 2025)", url: "https://www.oesterreich.gv.at/de/themen/umwelt_und_klima/energie_und_ressourcen_sparen/2/Seite.2430150", text: "con il ventilato fino al 20 per cento di energia in meno, spegnere in tempo e sfruttare il calore residuo" },
      { name: "Il mio calcolatore nella pagina della friggitrice ad aria", text: "forno circa 1,0 kWh e friggitrice ad aria circa 0,45 kWh per piatto, 18 minuti in meno rispetto al forno per preriscaldamento, teglia e piatti da lavare, le ipotesi sono lì sotto „Come calcolo“" },
      { name: "BDEW (associazione tedesca dell’energia e dell’acqua): analisi dei prezzi della corrente agosto 2026", url: "https://www.bdew.de/media/documents/BDEW_Strompreisanalyse_082026.pdf", text: "37 centesimi per kWh per le famiglie in Germania" },
      { name: "E-Control (autorità di regolazione austriaca): monitor dei prezzi della corrente gennaio 2026", url: "https://www.e-control.at/documents/1785851/1811582/preismonitor_jan_26.pdf/b2376bf8-3337-4ba0-ad26-f98a443ab871?t=1767782911898", text: "in media circa 30 centesimi per kWh presso i fornitori regionali in Austria" },
      { name: "ElCom (Commissione federale dell’energia elettrica): newsletter 9/2025", url: "https://www.elcom.admin.ch/dam/de/sd-web/znXqHISH0pFP/Newsletter_09-2025_D.pdf", text: "27,7 centesimi per kWh per una famiglia tipo in Svizzera nel 2026" },
      { name: "Dati dei produttori", text: "preriscaldamento e programmi secondo Cosori" }
    ]
  },
  {
    id: "saugroboter-haustiere",
    produkt: "saugroboter",
    geprueft: "2026-11-04",
    titel: "Robot aspirapolvere con animali: cosa conta?",
    frage: "Robot aspirapolvere con animali: cosa conta?",
    seitenTitel: "Robot aspirapolvere con animali: cosa conta?",
    beschreibung: "Quale spazzola, base e telecamera servono a un robot aspirapolvere lavapavimenti con cane o gatto, come si abitua il tuo animale e quando non fa per te.",
    kurzantwort: "Tre cose: una spazzola intorno a cui i peli si avvolgono poco, una base che lo svuota e una telecamera che di solito riconosce la cacca del cane e ci gira intorno. Nell’app blocchi anche ciotola, lettiera e cuccia. Proprio con un animale conviene: se passi l’aspirapolvere ogni giorno per via dei peli, secondo il mio calcolatore su 60 m² ti fa risparmiare circa due ore a settimana.",
    abschnitte: [
      {
        titel: "Quanto tempo risparmi con un animale",
        absaetze: [
          "Se passi l’aspirapolvere ogni giorno per via dei peli, secondo il mio calcolatore su 60 m² ti fa risparmiare poco meno di due ore a settimana, preparazione compresa. Se lavi anche i pavimenti una volta a settimana, sono poco più di due. In un anno fanno 99–119 ore; con due passate di aspirapolvere e un lavaggio a settimana sono 45.",
          "Il robot invece pulisce ogni giorno secondo la programmazione, e tu non devi fare quasi niente."
        ]
      },
      {
        titel: "La mia esperienza con il mio gatto",
        art: "erfahrung",
        absaetze: [
          "Il mio primo robot aspirapolvere l’ho comprato anche per il gatto che avevo allora. Spargeva di continuo la lettiera per casa, e questo mi faceva impazzire. All’epoca, nella mia prima e seconda casa, il robot mi ha aiutato tantissimo con la lettiera."
        ]
      },
      {
        titel: "Una spazzola intorno a cui i peli si avvolgono poco",
        absaetze: [
          "La gomma al posto delle setole aiuta già un po’. Ma ciò che conta davvero è come è costruita e fissata la spazzola principale.",
          "Dreame, per esempio, su alcuni robot usa due rulli fissati da un solo lato, mentre l’altro lato è aperto. Rotazione e flusso d’aria spingono i peli verso questa estremità aperta, dove vengono aspirati. Nei test così si sono impigliati a malapena anche i peli lunghi.",
          "Altri produttori fanno in modo simile: Narwal fissa una spazzola conica da un solo lato. Roborock divide la spazzola a metà, dove i peli vengono aspirati.",
          "Sui pavimenti duri molti robot puliscono bene, sui tappeti si vede la differenza. Secondo Stiftung Warentest, per chi ha animali conta il voto per la raccolta delle fibre sui tappeti. Lì i voti vanno da buono a insufficiente."
        ]
      },
      {
        titel: "Una base che lo svuota",
        absaetze: [
          "Il contenitore nel robot è piccolo e con il pelo si riempie in fretta. Senza base, con un animale spesso lo svuoti da solo ogni giorno. Una base lo svuota dopo la pulizia, e tu cambi solo ogni tanto il sacchetto.",
          "A seconda del modello va fatto ogni qualche settimana o mese, prima con un animale che perde molto pelo. Di solito il sacchetto si chiude quando lo estrai, così non tocchi quasi polvere e peli."
        ]
      },
      {
        titel: "Una telecamera che riconosce la cacca del cane",
        absaetze: [
          "Se un robot passa sopra la cacca del cane o del vomito, lo spande per tutta la casa. Senza telecamera, di norma non riconosce cose del genere. I modelli con telecamera e IA di solito le riconoscono e ci girano intorno: nei test con cacche finte, i modelli buoni le hanno evitate quasi tutte.",
          "Una garanzia però non c’è. Più un incidente è liquido e piatto, più è facile che sfugga anche a una telecamera. Se il tuo animale è ancora giovane, già anziano o in questo momento malato, dai una rapida occhiata al pavimento prima della partenza."
        ]
      },
      {
        titel: "Bloccare ciotola, lettiera e cuccia",
        absaetze: [
          "Nell’app crea delle zone vietate intorno alle ciotole di cibo e acqua, alla lettiera e alla cuccia. Così il robot lascia stare le ciotole, e il tuo animale ha dei posti dove nessuno lo disturba."
        ]
      },
      {
        titel: "Come abituare il tuo animale al robot",
        absaetze: [
          "Con circa 55–70 decibel un robot è più silenzioso di un normale aspirapolvere. Diventa rumorosa per un attimo solo la base, quando lo svuota. Abitua comunque il tuo animale a piccoli passi.",
          "Prima lascia che il tuo animale annusi il robot spento. Poi fallo partire in un’altra stanza, a potenza bassa e mentre sei in casa. Se il tuo animale resta tranquillo o si incuriosisce, dagli un premio. Non costringerlo mai ad avvicinarsi al robot.",
          "È importante un rifugio dove il robot non arriva. Solo quando il tuo animale resta rilassato lo fai partire con la programmazione mentre sei fuori, con un cane per esempio durante la passeggiata."
        ]
      },
      {
        titel: "Ogni tanto controllare: spazzola e ruote",
        absaetze: [
          "Con una spazzola semplice e un animale, togli i peli avvolti circa una volta a settimana; alcuni produttori indicano ogni due settimane. Le spazzole anti-groviglio ne hanno bisogno molto più di rado. I peli si accumulano anche sulla spazzola laterale e sulle ruote."
        ]
      }
    ],
    verweis: {
      text: "Quali modelli consiglio, anche per le case con animali, e quanto tempo risparmi con i tuoi numeri lo trovi nella mia pagina sul robot aspirapolvere lavapavimenti.",
      knopf: "Al robot aspirapolvere lavapavimenti con calcolatore"
    },
    wannNicht: [
      "Al tuo animale capitano spesso incidenti, per esempio perché non sa ancora fare i bisogni fuori, e non vuoi un modello con telecamera.",
      "Il tuo animale va ancora nel panico appena il robot si muove, anche dopo settimane di abitudine graduale.",
      "Manca lo spazio per la base: senza, con un animale spesso svuoti il contenitore da solo ogni giorno.",
      "In casa hai soprattutto moquette a pelo lungo: lì molti robot non tirano fuori bene i peli, e alcuni si impantanano.",
      "Ciotole, cucce e giochi sono ogni giorno in un posto diverso, e non vuoi né metterli via né bloccarli nell’app."
    ],
    fragen: [
      { f: "Il robot riconosce la cacca del cane?", a: "Con telecamera e IA di solito sì, senza telecamera di norma no. Una garanzia però non c’è, soprattutto con cose liquide come il vomito." },
      { f: "Il mio cane o il mio gatto avrà paura del robot?", a: "Alcuni animali all’inizio sì, anche se è più silenzioso di un normale aspirapolvere. Con pazienza e a piccoli passi molti si abituano." },
      { f: "Può aspirare la lettiera del gatto?", a: "La lettiera asciutta e sparsa la può aspirare. Grumi e lettiera umida però non devono finire nel robot. Blocca quindi una piccola zona intorno alla lettiera, così non ci va proprio." },
      { f: "A cosa devo fare attenzione se sono allergico al pelo degli animali?", a: "A un vero filtro HEPA e a una base con sacchetto: così la polvere fine resta nell’apparecchio, e quando cambi il sacchetto non la tocchi quasi. Curare un’allergia, però, un robot aspirapolvere non può. Per sapere cosa ti aiuta, chiedi a un medico." },
      { f: "Quanta potenza di aspirazione serve per i peli degli animali?", a: "I consigli sono molto diversi, da qualche migliaio a oltre 20.000 pascal. Più affidabile è il risultato dei test sui tappeti, perché lì si vedono le differenze. Almeno altrettanto importante è una spazzola intorno a cui i peli non si avvolgono proprio." }
    ],
    quellen: [
      { name: "Il mio calcolatore nella pagina del robot aspirapolvere lavapavimenti", text: "i tempi per 60 m² con aspirapolvere ogni giorno con e senza lavaggio e con due passate e un lavaggio, le ipotesi sono lì sotto „Come calcolo“" },
      { name: "Stiftung Warentest: test dei robot aspirapolvere (giugno 2026)", text: "test degli ostacoli con una cacca di cane finta, per chi ha animali conta la raccolta delle fibre sui tappeti (da buono a insufficiente), voto più basso per problemi con i peli lunghi, molti più robot buoni per pavimenti duri che per tappeti" },
      { name: "Stiftung Warentest: test dei robot aspirapolvere lavapavimenti (dicembre 2025)", text: "sui tappeti la maggior parte dei robot non convince" },
      { name: "c’t (heise): test dei robot aspirapolvere con riconoscimento degli ostacoli (dicembre 2021)", text: "tre robot con telecamera IA hanno sempre evitato con sicurezza cacche finte di cane e gatto" },
      { name: "Reviewed: iRobot Roomba j7+ contro Samsung Jetbot AI+ (giugno 2023)", text: "test con cacche di cane finte, il Roomba senza nessun incidente, il Jetbot ne ha toccata una per un attimo e poi l’ha evitata" },
      { name: "smarthomeassistent.de: un robot aspirapolvere riconosce il vomito di gatto? (maggio 2023)", text: "evita le cacche finte, nessuna garanzia con il vomito, nessun robot conosciuto riconosce incidenti piatti e liquidi, altrimenti spande il disastro per casa" },
      { name: "smarthomeassistent.de: robot aspirapolvere per peli di animali (agosto 2026) e base di svuotamento con o senza sacchetto (giugno 2023)", text: "i peli aggrovigliati si tolgono a mano, un sacchetto dura da uno a più mesi e si chiude quando lo estrai, così la polvere resta dentro" },
      { name: "netzwelt.de: robot aspirapolvere per peli di animali (febbraio 2026)", text: "i peli si impigliano nelle setole, meglio spazzole in gomma e anti-groviglio, senza base svuotare più volte al giorno, sacchetto dopo circa due mesi, riconoscimento IA per animali che non sanno ancora fare i bisogni fuori, filtro HEPA, pulizia durante la passeggiata, zone vietate alla cuccia" },
      { name: "netzwelt.de: robot aspirapolvere per tappeti (febbraio 2026)", text: "il pelo lungo mette in difficoltà anche i modelli di fascia alta" },
      { name: "saugroboter-portal.de: quali spazzole principali hanno i robot aspirapolvere? (settembre 2026)", text: "i peli lunghi si avvolgono più in fretta intorno alle setole, sulle spazzole in gomma si impigliano molto meno, la scelta migliore con animali" },
      { name: "home&smart: robot aspirapolvere contro i peli di animali e robot aspirapolvere per allergici (entrambi ottobre 2026)", text: "spazzole principali gommate e sistemi anti-groviglio, piccoli contenitori della polvere nel robot, aspirazione da 20.000 Pa con più animali, filtro HEPA dalla classe H13, polvere chiusa ermeticamente nel sacchetto" },
      { name: "testundtipps.de: manutenzione dei robot aspirapolvere (ottobre 2026)", text: "pulire la spazzola principale ogni settimana o ogni due settimane a seconda del produttore, con animali e peli lunghi può essere troppo poco, sacchetto ogni 2–4 mesi" },
      { name: "tink: robot aspirapolvere con cane e gatto (ottobre 2026)", text: "prima conoscerlo spento, farlo partire nella stanza accanto, all’inizio solo quando ci sei, rifugi, premi e pazienza" },
      { name: "robo-freunde.de: gatto e robot aspirapolvere, robot aspirapolvere per la lettiera e robot aspirapolvere e vomito di gatto (2023)", text: "abitudine a piccoli passi, mai costringere, zone vietate intorno a ciotola e lettiera, controllare il pavimento prima della partenza, più è liquido, più è difficile riconoscerlo" },
      { name: "Mähroboter Guru: abituare un gatto al robot aspirapolvere (luglio 2024)", text: "farlo annusare spento, partire nella stanza accanto a potenza bassa, premi, mai costringere, prima sotto controllo, poi con la programmazione" },
      { name: "netzwelt.de: rumorosità dei robot aspirapolvere (febbraio 2026) e basi di svuotamento (marzo 2026)", text: "di solito 60–70 dB, la base 80–90 dB per qualche secondo, i sacchetti si chiudono da soli quando li estrai e durano due o tre mesi, con i peli degli animali si accumula molto sporco" },
      { name: "smarthomeassistent.de: robot aspirapolvere silenziosi (agosto 2026) e testsiegertv.com: basi di svuotamento (luglio 2021)", text: "di solito 55–65 dB, svuotamento nella base fino a 90 dB per qualche secondo" },
      { name: "Vacuum Wars: recensione del Dreame X50 Ultra (marzo 2025, aggiornata a settembre 2026)", text: "doppio rullo assottigliato a un’estremità, i peli migrano da quel lato, nel test con peli lunghi 18 cm non si è aggrovigliato niente" },
      { name: "home&smart: test del Dreame X50 Ultra Complete (aprile 2026) e Dreame X60 Pro Ultra (settembre 2026)", text: "nemmeno un pelo lungo nei rulli, molta meno manutenzione, sull’X60 non si sono impigliati nemmeno peli lunghi 1 m" },
      { name: "smarthomeassistent.de: Dreame X50 Ultra Complete (luglio 2026)", text: "nel test dei peli raccolti tutti, senza avvolgimenti sulla spazzola principale e laterale" },
      { name: "winfuture: test del Narwal Freo Z10 (luglio 2025) e china-gadgets: Narwal Freo Z10 Ultra (maggio 2025)", text: "spazzola principale conica, fissata da un solo lato, quasi pulita dopo diversi giri con capelli lunghi e peli di animali, il rullo aperto evita i grovigli" },
      { name: "netzwelt.de: test del Roborock Qrevo Curv (settembre 2024)", text: "spazzola principale divisa in due, i peli finiscono nel condotto di aspirazione attraverso lo spazio al centro" },
      { name: "testsiegertv.com: test del Roborock Qrevo Curv (febbraio 2025)", text: "due spazzole più piccole portano i peli al centro, dove vengono aspirati, nessun avvolgimento con peli di 5, 10 e 20 cm, quelli di 38 cm prima si sono avvolti e poi sono stati aspirati" },
      { name: "Dati e guide dei produttori", text: "Ecovacs (nessuna garanzia con gli escrementi, zone vietate intorno a cucce e lettiera, mai aspirare lettiera bagnata o agglomerata, quella asciutta sì), Dreame (incidenti piatti e umidi difficili da riconoscere, zone vietate intorno a lettiera, cucce e ciotole, controllare rapidamente il pavimento), MOVA (sacchetti pieni prima con animali, togliere i peli da spazzole e ruote anche ogni settimana), Roborock (togliere regolarmente i peli dagli assi delle ruote e dalla spazzola laterale), Ecovacs (i peli si avvolgono intorno all’asse della ruota), Dreame (HyperStream Detangling DuoBrush: due rulli su un braccio, fissati da un solo lato, i peli migrano verso l’estremità libera e lì vengono aspirati, fino a 30 cm senza grovigli, con moltissimi peli comunque da pulire), Narwal (rullo conico su un solo braccio), Roborock (DuoDivide: spazzola divisa, i peli vengono aspirati al centro)" }
    ]
  },
  {
    id: "waschtrockner-oder-waschmaschine-und-trockner",
    produkt: "waschtrockner",
    geprueft: "2026-11-04",
    titel: "Lavasciuga o lavatrice e asciugatrice: cosa è meglio?",
    frage: "Lavasciuga o lavatrice e asciugatrice: cosa è meglio?",
    seitenTitel: "Lavasciuga o lavatrice e asciugatrice: cosa è meglio?",
    beschreibung: "Spazio, corrente, acqua e tempo a confronto: quando conviene una lavasciuga, quando lavatrice e asciugatrice a pompa di calore, e quanto fa al mese.",
    kurzantwort: "Se hai poco spazio, la lavasciuga è la scelta più comoda: un solo apparecchio, niente bucato da spostare, dentro la mattina e asciutto la sera. Se hai spazio per due apparecchi e lavi molto, lavatrice e asciugatrice a pompa di calore sono meglio. Asciugano di più in una volta e per asciugare consumano spesso solo metà della corrente, o anche meno.",
    abschnitte: [
      {
        titel: "Spazio: un apparecchio o due",
        absaetze: [
          "Una lavasciuga va esattamente dove altrimenti starebbe la lavatrice e richiede gli stessi attacchi. Due apparecchi uno accanto all’altro occupano il doppio della superficie.",
          "Si può però anche risparmiare spazio: con un kit di sovrapposizione metti l’asciugatrice sopra la lavatrice, mai il contrario. Così occupano solo la superficie di una lavatrice, ma serve spazio in altezza. Senza kit l’asciugatrice può spostarsi durante la centrifuga."
        ]
      },
      {
        titel: "Quanto puoi asciugare in una volta",
        absaetze: [
          "Una lavasciuga di solito lava 7–10 kg, ma ne asciuga solo 4–6. Un carico di lavaggio pieno richiede quindi fino a due asciugature, oppure stendi il resto. Se vuoi lavare e asciugare in un colpo solo, riempila quindi poco più di metà.",
          "Un’asciugatrice separata invece asciuga un carico pieno in una volta. E mentre asciuga, la lavatrice sta già lavando il successivo."
        ]
      },
      {
        titel: "Corrente e acqua",
        absaetze: [
          "La differenza più grande la fa l’asciugatura. Un’asciugatrice a pompa di calore consuma di solito circa 1–2 kWh per un carico pieno. Una lavasciuga senza pompa di calore consuma poco più di 2 kWh, e solo per 6 kg. Per lo stesso bucato l’asciugatrice a pompa di calore consuma quindi spesso solo metà della corrente, o anche meno.",
          "Molte lavasciuga durante l’asciugatura raffreddano inoltre con l’acqua del rubinetto. Per questo consumano più acqua di lavatrice e asciugatrice insieme.",
          "Esistono anche lavasciuga con pompa di calore. Consumano meno corrente e acqua, e in un test di Stiftung Warentest su quattro apparecchi nel 2023 un modello di questo tipo è stato il migliore."
        ]
      },
      {
        titel: "Tempo: cosa è pronto prima",
        absaetze: [
          "Rispetto allo stendibiancheria, entrambe le soluzioni ti fanno risparmiare tempo: con tre lavatrici a settimana, stendere e ritirare il bucato richiede circa mezz’ora a settimana secondo il mio calcolatore.",
          "Lavare e asciugare in una lavasciuga a pieno carico richiede spesso 8 ore e più. Nel test di Konsument le asciugatrici a pompa di calore hanno impiegato da poco più di 2 a poco più di 3 ore per un carico pieno, più il lavaggio prima.",
          "Questo però non deve disturbarti: con la funzione ora di fine la lavasciuga parte in modo da finire quando torni a casa. Se vuoi fare più carichi nello stesso giorno, due apparecchi sono più veloci."
        ]
      },
      {
        titel: "La mia esperienza",
        art: "erfahrung",
        absaetze: [
          "Ho una lavasciuga Haier e non voglio mai più farne a meno. La mattina metto dentro il bucato, e quando torno dal lavoro è lavato e asciugato. Non devo più nemmeno stirare: il programma a vapore i-⁠Refresh rinfresca i vestiti e soprattutto escono senza pieghe."
        ]
      },
      {
        titel: "Quanto costa",
        absaetze: [
          "All’acquisto una lavasciuga costa spesso meno di lavatrice e asciugatrice insieme. In compenso asciugare consuma più corrente: con tre carichi a settimana a 37 centesimi per kWh, secondo il mio calcolatore sono poco più di 10 € al mese, a 30 centesimi poco meno di 9 €.",
          "Un’asciugatrice a pompa di calore se la caverebbe spesso con metà o meno per lo stesso bucato. Secondo Stiftung Warentest, i costi di esercizio più alti possono annullare negli anni il prezzo d’acquisto più basso di una lavasciuga."
        ]
      }
    ],
    verweis: {
      text: "Quale lavasciuga consiglio, quanto tempo ti fa risparmiare e quanta corrente costa con i tuoi numeri lo trovi nella mia pagina sulla lavasciuga.",
      knopf: "Alla lavasciuga con calcolatore"
    },
    wannNicht: [
      "Fai più lavatrici al giorno per una famiglia numerosa.",
      "Vuoi lavare e asciugare carichi pieni in un colpo solo.",
      "Hai spazio per due apparecchi, affiancati o sovrapposti, e vuoi consumare meno corrente e acqua possibile.",
      "Ti serve spesso il bucato in fretta: lavare e asciugare insieme richiedono di solito 8 ore e più.",
      "Per te conta molto un bucato asciugato in modo uniforme: molte lavasciuga asciugano meno bene di un’asciugatrice separata."
    ],
    fragen: [
      { f: "Posso mettere l’asciugatrice sopra la lavatrice?", a: "Sì, con un kit di sovrapposizione adatto e sempre con l’asciugatrice sopra. Il telaio la tiene ferma e assorbe le vibrazioni durante la centrifuga. È più semplice con due apparecchi della stessa marca e misura." },
      { f: "Una lavasciuga asciuga bene come un’asciugatrice?", a: "Di solito non del tutto: nei test molte lavasciuga asciugano in modo meno uniforme, e a volte il bucato resta un po’ umido. I modelli migliori però vanno bene. L’importante è non riempirla troppo per asciugare." },
      { f: "Perché una lavasciuga ha bisogno di acqua per asciugare?", a: "Molte raffreddano il vapore caldo e umido con l’acqua del rubinetto, così condensa e scorre via. A seconda dell’apparecchio sono parecchi litri per asciugatura. Ci sono però anche modelli che non ne hanno bisogno, per esempio quelli con pompa di calore." },
      { f: "Conviene una lavasciuga con pompa di calore?", a: "Se asciughi spesso, sì. Consuma meno corrente e acqua: per il migliore del test 2023 Stiftung Warentest ha calcolato circa 760 € di costi di esercizio in meno in dieci anni rispetto agli apparecchi di Bosch e Siemens testati. In compenso costa decisamente di più all’acquisto." }
    ],
    quellen: [
      { name: "Il mio calcolatore nella pagina della lavasciuga", text: "il costo della corrente per asciugare con tre carichi a settimana a 2,2 kWh per carico e il tempo per stendere e ritirare il bucato, le ipotesi sono lì sotto „Come calcolo“" },
      { name: "Verbraucherzentrale: lavasciuga, apparecchi combinati salvaspazio ma energivori (agosto 2026)", url: "https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/waschtrockner-kombigeraete-sind-platzsparende-stromfresser-37060", text: "più corrente e acqua di lavatrice e asciugatrice, raffreddamento ad acqua, lava 7–9 kg e asciuga 4–6 kg, utile soprattutto in case molto piccole" },
      { name: "Agenzia federale tedesca per l’ambiente (Umweltbundesamt): asciugatrici (marzo 2026)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/elektrogeraete/waeschetrockner", text: "asciugatrici a pompa di calore 73–97 kWh per 100 asciugature, apparecchi vecchi circa 340 kWh, lavasciuga meno efficienti di due apparecchi separati" },
      { name: "co2online: consumo di asciugatrice e lavatrice (aprile 2023)", url: "https://www.co2online.de/energie-sparen/strom-sparen/strom-sparen-stromspartipps/waschmaschine-trockner/", text: "le asciugatrici a pompa di calore più parsimoniose intorno a 156 kWh all’anno per 7 kg, fino all’80 % di corrente in meno rispetto a un’asciugatrice a condensazione" },
      { name: "HEA (associazione tedesca per l’uso efficiente dell’energia): lavasciuga", text: "acqua di raffreddamento 9–35 litri per asciugatura a seconda dell’apparecchio, si può asciugare solo da metà a due terzi del carico di lavaggio, un carico pieno richiede fino a due asciugature, la pompa di calore risparmia corrente e acqua di raffreddamento" },
      { name: "Stiftung Warentest: test delle lavasciuga (ottobre 2023, aggiornato ad agosto 2026)", text: "un programma è durato oltre nove ore, all’acquisto spesso meno cara di due apparecchi, i costi di esercizio possono annullarlo nel tempo" },
      { name: "t-online (ottobre 2023) e desired.de (febbraio 2025) sul test delle lavasciuga di Stiftung Warentest (numero 11/2023)", text: "quattro apparecchi testati, migliore del test AEG con pompa di calore, consumo di corrente e acqua più basso, circa 760 € di costi di esercizio in meno in dieci anni rispetto agli apparecchi di Bosch e Siemens" },
      { name: "Stiftung Warentest: test delle asciugatrici (settembre 2026)", text: "la pompa di calore riduce molto il consumo, le asciugatrici a condensazione e a evacuazione sono energivore superate" },
      { name: "Konsument (VKI): test delle asciugatrici (settembre 2026)", text: "asciugatrici a pompa di calore per 8 kg di cotone asciutto da armadio 0,90–1,82 kWh, durata del programma 136–192 minuti" },
      { name: "Which?: lavasciuga o lavatrice e asciugatrice (ottobre 2026)", text: "216 sterline di corrente all’anno per una lavasciuga contro 118 sterline per lavatrice e asciugatrice a pompa di calore, 7,5 litri d’acqua per kg in asciugatura, la maggior parte delle lavasciuga asciuga peggio di un’asciugatrice" },
      { name: "T3: le lavasciuga funzionano bene come due apparecchi separati? (febbraio 2022)", text: "asciugano peggio, il bucato resta spesso umido, con due apparecchi il carico successivo si lava mentre il primo asciuga" },
      { name: "Trusted Reviews: lavasciuga contro apparecchi separati", text: "due apparecchi occupano circa il doppio dello spazio e funzionano contemporaneamente, le lavasciuga asciugano spesso in modo non uniforme" },
      { name: "Utopia: lavasciuga, vantaggi e svantaggi (marzo 2023)", text: "di solito asciuga solo 4–6 kg, più corrente e acqua, piuttosto per famiglie piccole" },
      { name: "Waschmaschinen-Kompass: mettere l’asciugatrice sopra la lavatrice (ottobre 2026)", text: "serve un telaio di collegamento, asciugatrice sempre sopra, senza telaio può spostarsi" },
      { name: "Dati dei produttori ed etichette energetiche", text: "sovrapposizione secondo Siemens e Samsung (asciugatrice sopra, kit adatto, stessa marca), capacità, durata dei programmi e corrente per lavare e asciugare secondo le etichette energetiche di Haier, Hisense, Bosch e AEG" }
    ]
  },
  {
    id: "smarte-thermostate-mietwohnung",
    produkt: "thermostate",
    geprueft: "2026-11-04",
    titel: "Le valvole termostatiche smart convengono in una casa in affitto?",
    frage: "Le valvole termostatiche smart convengono in una casa in affitto?",
    seitenTitel: "Valvole termostatiche smart in affitto: convengono?",
    beschreibung: "Quanto risparmi da inquilino con le valvole termostatiche smart, quanto arriva sul conteggio del riscaldamento, se puoi montarle e quando rendono meno.",
    kurzantwort: "Di solito sì: le avviti senza artigiano e le smonti quando traslochi, e ogni giorno torni in una casa calda. Con un programma di riscaldamento risparmi anche circa il 10 per cento di energia per il riscaldamento. Con un riscaldamento centralizzato, sul tuo conteggio ne arriva di solito da metà a poco più di due terzi, perché solo una parte dei costi viene ripartita in base al consumo.",
    abschnitte: [
      {
        titel: "Quanto risparmi con un programma di riscaldamento",
        absaetze: [
          "Le valvole termostatiche smart riscaldano secondo il tuo programma: caldo quando ci sei, abbassato quando dormi o lavori. Secondo l’Agenzia federale tedesca per l’ambiente e co2online risparmi così circa il 10 per cento di energia per il riscaldamento. L’ADAC nella pratica calcola dal 5 all’8 per cento.",
          "Quanto sia nel tuo caso dipende da quanto spesso sei fuori e da come riscaldi finora. Come regola pratica, ogni grado in meno fa risparmiare circa il 6 per cento di energia. Se finora il riscaldamento va quasi sempre senza sosta, risparmi di più. Se abbassi già tu ogni termosifone in modo affidabile, risparmi meno."
        ]
      },
      {
        titel: "Quanto arriva sul tuo conteggio",
        absaetze: [
          "Se hai una caldaia a gas tua nell’appartamento, di solito paghi il gas direttamente al fornitore. Allora il risparmio arriva tutto a te.",
          "Con un riscaldamento centralizzato, invece, solo una parte dei costi viene ripartita in base al tuo consumo, il resto in base alla superficie. In Germania è dal 50 al 70 per cento, in Austria almeno il 55 per cento dei costi dell’energia. In Svizzera è di solito dal 50 al 70 per cento, se il tuo stabile conteggia in base al consumo. Come è ripartito da te lo vedi sul conteggio del riscaldamento, alle spese di base e alle spese di consumo.",
          "Un esempio: se paghi 1.000 € all’anno per il riscaldamento, il 10 per cento sono 100 €. Se da te dal 50 al 70 per cento viene ripartito in base al consumo, te ne arrivano circa 50–70 €. Nel mio calcolatore scegli per questo „Centralizzato con conteggio“, e conto con il 60 per cento.",
          "In alcuni stabili non si ripartisce affatto in base al consumo, ma solo in base alla superficie, in Svizzera per esempio spesso negli stabili più vecchi. Allora risparmia soprattutto l’intero stabile, e a te arriva poco."
        ]
      },
      {
        titel: "Come vedi se funziona",
        absaetze: [
          "In Germania i contatori del riscaldamento devono essere leggibili a distanza dal 2027. Appena lo sono, ricevi ogni mese un’informazione sui consumi. Così vedi mese per mese se il tuo programma funziona."
        ]
      },
      {
        titel: "Da inquilino puoi montarle?",
        absaetze: [
          "In Germania di regola sì, anche senza il consenso del locatore. Sostituisci solo la manopola sulla valvola con la valvola termostatica smart. Non devi svuotare l’acqua e non ti serve un artigiano.",
          "Conserva bene le vecchie manopole e riavvitale quando traslochi. Le valvole smart le porti poi nella casa successiva. In Austria e in Svizzera è meglio chiedere brevemente al locatore."
        ]
      },
      {
        titel: "Vanno bene sui tuoi termosifoni?",
        absaetze: [
          "Su quasi tutti i termosifoni normali. La maggior parte delle valvole ha una filettatura secondo lo standard M30 x 1,5. Per le altre, per esempio Danfoss, spesso ci sono adattatori inclusi. Per il riscaldamento a pavimento ti serve invece un termostato ambiente a parete."
        ]
      },
      {
        titel: "Più comodo che a mano",
        absaetze: [
          "In più c’è la comodità: poco prima che torni a casa, l’appartamento è già caldo. Mentre lavori, le valvole abbassano in autonomia, e non puoi più nemmeno dimenticartene.",
          "Se finora abbassi ogni termosifone la mattina e lo rialzi la sera, con quattro termosifoni secondo il mio calcolatore risparmi circa un quarto d’ora a settimana.",
          "Per iniziare bastano un programma per i giorni feriali e uno per il fine settimana. Imposta per esempio 21 gradi la mattina e la sera, 16–17 gradi quando sei fuori, e di notte 16–18 gradi in camera da letto. Non dovrebbe scendere sotto i 16 gradi, altrimenti aumenta il rischio di muffa."
        ]
      }
    ],
    verweis: {
      text: "Quali valvole termostatiche consiglio, con e senza centralina, e quanto ti fanno risparmiare con i tuoi numeri lo trovi nella mia pagina sulle valvole termostatiche smart.",
      knopf: "Alle valvole termostatiche con calcolatore"
    },
    wannNicht: [
      "Hai il riscaldamento a pavimento: ti serve un termostato ambiente a parete.",
      "Nel tuo stabile i costi del riscaldamento vengono ripartiti solo in base alla superficie: allora del risparmio ti arriva poco.",
      "Abbassi già ogni termosifone in modo affidabile quando esci: allora risparmi soprattutto fatica e meno soldi.",
      "Di giorno sei quasi sempre a casa: allora il programma abbassa soprattutto di notte, e risparmi meno."
    ],
    fragen: [
      { f: "Cosa faccio quando trasloco?", a: "Sviti le valvole smart e rimonti le vecchie manopole. Ci vogliono pochi minuti per termosifone. Le valvole smart le porti con te, vanno bene anche sulla maggior parte dei termosifoni della nuova casa." },
      { f: "Disturbano il ripartitore dei costi di riscaldamento?", a: "No. Il ripartitore è sul termosifone e misura quanto calore emette. La valvola termostatica invece va sulla valvola. Se riscaldi meno, il ripartitore segna semplicemente meno. Non dovresti toglierlo né coprirlo." },
      { f: "Mi serve una centralina?", a: "Non per forza. Alcune valvole si collegano direttamente al Wi-Fi, e con una FRITZ!Box il tuo router fa già da centralina. Nei test però vanno meglio i modelli con centralina. La centralina costa una volta in più, e quando traslochi la porti semplicemente con te." },
      { f: "Quando recupero il prezzo d’acquisto?", a: "Dipende da quanti termosifoni equipaggi e da quanto ti arriva. Secondo Stiftung Warentest l’acquisto conviene solo a lungo termine; nel suo esempio con cinque valvole l’ADAC arriva a poco meno di quattro anni. Con un riscaldamento centralizzato ci vuole di più, perché ti arriva solo una parte del risparmio. La comodità invece ce l’hai dal primo giorno." }
    ],
    quellen: [
      { name: "Agenzia federale tedesca per l’ambiente (Umweltbundesamt): riscaldamento, temperatura ambiente (ottobre 2023)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/heizen-bauen/heizen-raumtemperatur", text: "i termostati programmabili fanno risparmiare circa il 10 % di energia, abbassare durante alcune ore di assenza e di notte, 17 °C in camera da letto" },
      { name: "Verbraucherzentrale Hamburg: ben riscaldati per tutto l’inverno (dicembre 2025)", url: "https://www.vzhh.de/themen/bauen-wohnen-energie/heizung/gut-geheizt-durch-den-winter", text: "ogni grado in meno fa risparmiare circa il 6 per cento di energia, non sotto i 16 °C altrimenti si può formare muffa, le valvole smart si possono montare anche in affitto" },
      { name: "co2online: comunicato sui termostati programmabili (ottobre 2023)", text: "circa il dieci per cento di costi di riscaldamento in meno, gli inquilini non hanno bisogno del permesso del locatore, rimontare le vecchie valvole prima del trasloco" },
      { name: "ADAC: valvole termostatiche smart (ottobre 2026)", text: "nella pratica dal 5 all’8 per cento di costi di riscaldamento in meno, gli inquilini di regola possono montarle da soli, conservare le vecchie valvole e rimontarle al trasloco, il riscaldamento a pavimento richiede un termostato ambiente, nell’esempio con cinque valvole ripagate dopo poco meno di quattro anni" },
      { name: "ista: valvole smart tra efficienza energetica e protezione dei dati (ottobre 2026)", text: "sostituire solo la testa termostatica di regola non richiede il consenso del locatore, al trasloco ripristinare lo stato originale" },
      { name: "Ordinanza tedesca sui costi di riscaldamento (Heizkostenverordnung), § 7 e § 6a", url: "https://www.gesetze-im-internet.de/heizkostenv/__7.html", text: "almeno il 50 e al massimo il 70 per cento dei costi di un riscaldamento centralizzato in base al consumo, il resto in base alla superficie, con contatori leggibili a distanza dal 2022 un’informazione mensile sui consumi" },
      { name: "mein-nebenkostenrechner.de: § 7 dell’ordinanza sui costi di riscaldamento (settembre 2026)", text: "il locatore sceglie tra il 50 e il 70 per cento in base al consumo, per esempio 50/50 o 30/70, in alcuni stabili vecchi a gasolio o gas il 70 per cento è obbligatorio" },
      { name: "mietrecht.org: ripartizione tra spese di base e di consumo", text: "dal 50 al 70 per cento in base al consumo, le spese di base in base alla superficie abitabile o al volume" },
      { name: "Arbeiterkammer Wien: conteggio del riscaldamento secondo la HeizKG", url: "https://wien.arbeiterkammer.at/beratung/Wohnen/Heizkostenabrechnung/Heizkostenabrechnung_nach_dem_HeizKG.html", text: "vale per stabili con almeno quattro appartamenti e riscaldamento comune, non per le caldaie a gas autonome, dal 55 all’85 per cento dei costi dell’energia in base al consumo, le altre spese in base alla superficie" },
      { name: "Legge austriaca sul conteggio dei costi di riscaldamento (Heizkostenabrechnungsgesetz), § 10 (jusline.at)", text: "almeno il 55 e al massimo l’85 per cento dei costi dell’energia in base al consumo, il resto in base alla superficie utile" },
      { name: "ista Austria e Techem Austria sulla legge sul conteggio dei costi di riscaldamento", text: "almeno il 55 per cento dei costi dell’energia in base al consumo, quindi spese di base al massimo il 45 per cento, non vale per il riscaldamento autonomo" },
      { name: "WEKA Svizzera: chiavi di ripartizione delle spese accessorie (giugno 2025)", text: "spese di base di solito dal 30 al 50 per cento dei costi di riscaldamento, il conteggio in base al consumo è obbligatorio soprattutto per edifici nuovi e risanati completamente, altrimenti di solito ripartito in base alla superficie" },
      { name: "ista Svizzera: opuscolo sul conteggio del riscaldamento", text: "spese di base dal 30 al 50 per cento in base alla superficie abitabile, il resto in base al consumo" },
      { name: "Ufficio federale dell’energia: modello di conteggio individuale delle spese di riscaldamento (2004)", text: "spese di base dal 30 al 50 per cento, spese in base al consumo dal 50 al 70 per cento" },
      { name: "Conferenza dei direttori cantonali dell’energia: aiuto all’esecuzione EN-113 (dicembre 2018)", text: "conteggio in base al consumo obbligatorio per edifici nuovi e rinnovi completi da cinque appartamenti, alcuni cantoni hanno abolito l’obbligo di adeguamento per gli edifici esistenti" },
      { name: "Blick: conteggio del riscaldamento negli stabili vecchi (ottobre 2022) e un conteggio che fa arrabbiare (dicembre 2022)", text: "negli stabili vecchi senza contatori di calore spesso ripartito per metri quadrati o cubi, indipendentemente da quanto si riscalda" },
      { name: "Berliner Mieterverein: fornitura di gas (Corte federale di giustizia, giugno 2018) e apparecchi di misura per il conteggio del riscaldamento (settembre 2025)", text: "con un allacciamento al gas proprio il contratto di fornitura è tra fornitore e inquilino, i ripartitori sono direttamente sul termosifone, la lettura dipende anche dalle valvole termostatiche, la manomissione è un reato" },
      { name: "Berliner MieterGemeinschaft: ripartitori dei costi di riscaldamento", text: "è al centro del termosifone, gli apparecchi elettronici misurano la differenza tra termosifone e aria ambiente, rivestimenti e tende falsano la lettura" },
      { name: "Gewobag: informazioni sui ripartitori dei costi di riscaldamento (agosto 2025)", text: "misura direttamente sul termosifone la temperatura ambiente e quella del termosifone, è piombato" },
      { name: "ista: informazione mensile sui consumi (ottobre 2026), Haufe e Haus & Grund Chemnitz", text: "adeguare o sostituire entro il 31.12.2026 i contatori non leggibili a distanza, dall’installazione di contatori leggibili a distanza un’informazione mensile sui consumi" },
      { name: "Stiftung Warentest: test delle valvole termostatiche smart (numero 9/2023)", text: "l’acquisto conviene solo a lungo termine, i modelli con centralina in testa, il modello FRITZ! quasi buono quanto il migliore del test" },
      { name: "smarthomeassistent.de: classifica delle valvole termostatiche (ottobre 2026)", text: "posti 1 e 2 con centralina, nessun modello Wi-Fi diretto tra i primi dieci" },
      { name: "homeandsmart: sostituire una valvola termostatica", text: "la maggior parte delle valvole con filettatura M30 x 1,5, adattatori per le altre, niente acqua da svuotare, niente artigiano, fatto in pochi minuti, il riscaldamento a pavimento richiede un termostato ambiente" },
      { name: "Dati dei produttori", text: "filettatura M30 x 1,5 e adattatori inclusi, per esempio per valvole Danfoss, secondo eQ-3 (Homematic IP), AVM (FRITZ!) e Bosch, montaggio senza svuotare l’acqua e senza attrezzi speciali secondo eQ-3" }
    ]
  },
  {
    id: "saugroboter-oder-akkusauger",
    produkt: "saugroboter",
    geprueft: "2026-11-13",
    weitereProdukte: ["akkusauger"],
    titel: "Robot aspirapolvere o aspirapolvere senza fili: cosa fa per me?",
    frage: "Robot aspirapolvere o aspirapolvere senza fili: cosa fa per me?",
    seitenTitel: "Robot o aspirapolvere senza fili: cosa fa per me?",
    beschreibung: "Cosa sanno fare meglio un robot aspirapolvere e un aspirapolvere senza fili, quanto tempo risparmi e perché spesso conviene averli entrambi.",
    kurzantwort: "Un robot aspirapolvere lavapavimenti fa per te se vuoi pavimenti puliti senza muovere un dito, un aspirapolvere senza fili se vuoi aspirare in fretta da solo, anche scale, divano e auto. Secondo il mio calcolatore, su 70 m² il robot ti fa risparmiare circa un’ora a settimana se di solito passi l’aspirapolvere due volte e lavi i pavimenti una volta. Con l’aspirapolvere senza fili continui ad aspirare da solo, solo più in fretta. Per molte case la soluzione più comoda è averli entrambi: il robot per i pavimenti e un aspirapolvere senza fili economico per i punti dove lui non arriva.",
    abschnitte: [
      {
        titel: "Cosa sa fare meglio ciascuno",
        absaetze: [
          "Il robot aspirapolvere lavapavimenti ti toglie il lavoro di aspirare e lavare i pavimenti. Nell’app imposti una programmazione, e lui pulisce mentre sei al lavoro. Poi torna alla sua base. In molti modelli la base lo svuota e lava anche il rullo o i panni lavapavimenti.",
          "L’aspirapolvere senza fili lo guidi tu, ma senza cavo e senza cambiare presa. Lo stacchi dal muro, aspiri le briciole sotto il tavolo e lo riappendi. Con un gesto diventa un aspirapolvere portatile per divano, scale e auto."
        ]
      },
      {
        titel: "Quanto tempo risparmi",
        absaetze: [
          "Il mio calcolatore conta circa 19 minuti per aspirare 70 m², preparazione compresa, e circa 26 minuti per lavare i pavimenti. Per la manutenzione del robot toglie 5 minuti a settimana. Se passi l’aspirapolvere due volte a settimana e lavi una volta, il robot ti fa risparmiare circa un’ora a settimana, più di 50 ore all’anno.",
          "Con l’aspirapolvere senza fili continui ad aspirare da solo. Ti risparmia di tirarlo fuori, attaccarlo alla presa e cambiare presa: secondo il mio calcolatore, su 70 m² più di 5 minuti ogni volta, e 2 minuti quando aspiri al volo qualche briciola. Se aspiri due volte a settimana e tre volte al volo nel mezzo, fa più di un quarto d’ora."
        ]
      },
      {
        titel: "Dove il robot arriva ai suoi limiti",
        absaetze: [
          "I robot comuni non fanno le scale, e la base resta in un posto. Se abiti su due piani, lo porti di sopra, oppure aspiri le scale e il piano di sopra con l’aspirapolvere senza fili.",
          "Angoli, bordi e la striscia proprio lungo il battiscopa di solito li pulisce meno a fondo. Sui tappeti a pelo lungo un aspirapolvere che guidi tu aspira più a fondo. Secondo Stiftung Warentest, anche i robot migliori non arrivano alla potenza e alla filtrazione di un buon aspirapolvere.",
          "Gli serve anche un pavimento libero: prima che parta metti via in fretta cavi, calzini e giocattoli. In cambio passa sotto letto e divano, se c’è abbastanza spazio.",
          "Le case grandi le gestisce comunque: nel test di Stiftung Warentest i robot migliori hanno coperto fino a 193 m² con una carica. Se la batteria non basta, molti tornano alla base a ricaricarsi e poi continuano a pulire."
        ]
      },
      {
        titel: "A cosa fare attenzione con l’aspirapolvere senza fili",
        absaetze: [
          "Nel test comune di Stiftung Warentest e Konsument, i migliori aspirapolvere senza fili aspiravano bene quanto gli aspirapolvere a traino con cavo. Guarda soprattutto la batteria: l’autonomia indicata dai produttori di solito vale per il livello più basso. Al livello massimo molti durano solo 10–15 minuti.",
          "Per una casa grande conviene quindi un modello con batteria estraibile. Secondo Konsument, però, la seconda batteria di solito va comprata a parte. Il contenitore della polvere è piccolo, e svuotarlo solleva un po’ di polvere. Dopo qualche anno la batteria cala, quindi controlla che esistano batterie di ricambio."
        ]
      },
      {
        titel: "Entrambi insieme: come si dividono il lavoro",
        absaetze: [
          "Per molte case è la soluzione più comoda. Il robot parte secondo la programmazione e tiene puliti i pavimenti, anche ogni giorno se vuoi. L’aspirapolvere senza fili lo prendi solo per le briciole dopo mangiato, per scale, divano e auto e ogni tanto per angoli e battiscopa."
        ]
      },
      {
        titel: "La mia esperienza",
        absaetze: [
          "Se hai un robot aspirapolvere, l’aspirapolvere senza fili ti serve comunque solo molto di rado. Per questo basta un modello economico. Io ad esempio ho il Bulelink Zenith G10 e ne sono molto soddisfatto."
        ],
        art: "erfahrung"
      },
      {
        titel: "Quanto costa",
        absaetze: [
          "All’acquisto un robot aspirapolvere lavapavimenti con base costa di solito molto più di un buon aspirapolvere senza fili. Un robot che aspira soltanto costa meno, ma poi i pavimenti li devi ancora lavare tu.",
          "Nei costi di gestione, secondo il mio calcolatore spazzole, filtri, sacchetti e panni del robot costano circa 3,50 € al mese in più rispetto a un normale aspirapolvere. Con l’aspirapolvere senza fili non compri sacchetti, ma dopo qualche anno ti servirà forse una batteria nuova."
        ]
      }
    ],
    verweis: {
      text: "Quali robot aspirapolvere lavapavimenti consiglio e quanto tempo risparmi con i tuoi numeri lo vedi nella mia pagina sul robot aspirapolvere lavapavimenti. I miei consigli per l’aspirapolvere senza fili giusto sono nella mia pagina sull’aspirapolvere senza fili.",
      knopf: "Al robot aspirapolvere lavapavimenti con calcolatore",
      weitere: [{ knopf: "All’aspirapolvere senza fili", link: "akkusauger" }]
    },
    wannNichtTitel: "Quando un robot aspirapolvere lavapavimenti non fa per te",
    wannNicht: [
      "Abiti su più piani e non vuoi portare il robot su e giù: i robot comuni non fanno le scale.",
      "Sul pavimento c’è spesso tanta roba in giro, e non vuoi mettere in ordine in fretta prima che parta.",
      "Hai soprattutto tappeti a pelo lungo: lì un aspirapolvere che guidi tu aspira più a fondo.",
      "Aspiri soprattutto divano, scale o auto: per questo ti serve un aspirapolvere senza fili.",
      "Non hai spazio per la base: le servono circa 40 cm contro il muro e da 0,8 a 1,5 m liberi davanti."
    ],
    fragen: [
      { f: "Un robot aspirapolvere lavapavimenti sostituisce del tutto l’aspirapolvere?", a: "Per i pavimenti di tutti i giorni spesso sì, del tutto raramente. Scale, divano e auto non li fa, e negli angoli e sui tappeti a pelo lungo pulisce meno a fondo. Per questo basta un aspirapolvere senza fili che usi solo ogni tanto." },
      { f: "La batteria di un aspirapolvere senza fili basta per una casa grande?", a: "Al livello massimo spesso no: allora molti durano solo 10–15 minuti. Per una casa grande scegli un modello con batteria estraibile. Oppure lasci aspirare i pavimenti al robot e usi l’aspirapolvere senza fili solo per brevi passate." },
      { f: "Esistono set con robot e aspirapolvere senza fili?", a: "Sì, alcuni produttori offrono set in cui un robot e un aspirapolvere senza fili condividono la stessa base. La base svuota entrambi, anche il contenitore della polvere dell’aspirapolvere senza fili." },
      { f: "Cosa è meglio se ho animali?", a: "La cosa più comoda è averli entrambi: il robot aspira i peli dal pavimento secondo la programmazione, anche ogni giorno se vuoi, e per il divano prendi l’aspirapolvere senza fili. Cosa conta in un robot con animali lo trovi nella mia guida sul robot aspirapolvere con animali." }
    ],
    quellen: [
      { name: "Il mio calcolatore nella pagina sul robot aspirapolvere lavapavimenti", text: "il tempo per 70 m² con due passate di aspirapolvere e un lavaggio a settimana e il costo dei ricambi, le ipotesi sono lì sotto „Come calcolo“" },
      { name: "Il mio calcolatore nella pagina sull’aspirapolvere senza fili", text: "il tempo rispetto a un aspirapolvere con cavo su 70 m², due passate e tre volte briciole a settimana, le ipotesi sono lì sotto „Come calcolo“" },
      { name: "Stiftung Warentest: test dei robot aspirapolvere (giugno 2026)", text: "anche i robot migliori non tengono il passo di un buon aspirapolvere in potenza e filtrazione, punti forti sui pavimenti duri, circa 33–193 m² con una carica, dimensioni delle basi" },
      { name: "Stiftung Warentest: test dei robot aspirapolvere lavapavimenti (dicembre 2025)", text: "sui tappeti la maggior parte non convince" },
      { name: "Stiftung Warentest: test degli aspirapolvere senza fili (numero 2/2026)", text: "i migliori aspirapolvere senza fili tengono il passo dei classici aspirapolvere a traino, 10–17 minuti di autonomia al livello massimo" },
      { name: "Konsument (VKI): test degli aspirapolvere senza fili, comunicato stampa (febbraio 2026)", url: "https://vki.at/system/files/2026-02/2026-02-18_PA_Akkusauger_0.pdf", text: "14 apparecchi testati insieme a Stiftung Warentest, i buoni aspirapolvere senza fili tengono il passo di quelli con cavo nell’aspirazione, al livello massimo sul tappeto due apparecchi si sono fermati dopo 6 e 9 minuti, batteria estraibile di solito non inclusa" },
      { name: "Consumer NZ: Which type of vacuum is best for cleaning your home? (marzo 2024)", text: "robot buoni sui pavimenti duri, deboli sui tappeti, niente scale, aspirano anche sotto i mobili, aspirapolvere senza fili con autonomia limitata" },
      { name: "TechRadar: Robot vacuum vs cordless vacuum (novembre 2023)", text: "robot più comodo, aspirapolvere senza fili più accurato e versatile su bordi, scale, imbottiti e in auto, mettere in ordine prima del robot, averli entrambi è l’ideale" },
      { name: "T3: Cordless or robot, which is the best vacuum cleaner for you? (agosto 2023)", text: "aspirapolvere senza fili per passate veloci, scale e auto, anche come portatile, supporto a muro, il robot fa risparmiare tempo ma a volte si blocca" },
      { name: "testundtipps.de: robot aspirapolvere o aspirapolvere senza fili (luglio 2026)", text: "scale solo con un apparecchio guidato, il robot aspira peggio bordi, angoli e battiscopa, meno a fondo sul pelo lungo, liberare prima il pavimento, i due si dividono il lavoro" },
      { name: "home&smart: pro e contro dei robot aspirapolvere lavapavimenti (novembre 2026) e robot che salgono le scale (febbraio 2026)", text: "non per imbottiti e scale, angoli stretti e mobili bassi, mettere via prima gli oggetti, per aspirare a fondo serve ancora un aspirapolvere classico, robot per le scale finora prototipi" },
      { name: "Altri test sugli aspirapolvere senza fili", text: "home&smart, ETM Testmagazin, t-online e produkte-im-test.de sull’autonomia al livello più basso e più alto, SRF Kassensturz e Apotheken Umschau sulla polvere quando si svuota" },
      { name: "Ricaricare e continuare", text: "i robot tornano alla base a ricaricarsi e poi continuano a pulire, secondo Anker (luglio 2026), la guida di Ecovacs („riprendi la pulizia“) e smarthomeassistent.de su Neato (giugno 2022)" },
      { name: "Set con base in comune", text: "SwitchBot K10+ Pro Combo (testsiegertv.com, dicembre 2025), Yeedi C12 Combo (notebookcheck.com, ottobre 2024) ed Ecovacs Deebot X2 Combo (netzwelt.de, aprile 2024)" },
      { name: "Indicazioni dei produttori e manuali", text: "spazio davanti e accanto alla base secondo Roborock, Kärcher ed Ecovacs, dimensioni delle basi secondo Kärcher e Anker" }
    ]
  },
  {
    id: "black-friday-echte-angebote",
    produkt: "kaffeevollautomat",
    geprueft: "2026-11-13",
    weitereProdukte: ["saugroboter", "airfryer"],
    titel: "Black Friday sugli elettrodomestici: come riconosco una vera offerta?",
    frage: "Black Friday sugli elettrodomestici: come riconosco una vera offerta?",
    seitenTitel: "Black Friday: come riconosco una vera offerta?",
    beschreibung: "Come riconoscere le vere offerte del Black Friday: storico dei prezzi invece del prezzo consigliato, modelli vecchi, set, consegna e resi.",
    kurzantwort: "Una vera offerta la riconosci dallo storico dei prezzi: se il prezzo è chiaramente sotto quello che l’apparecchio è costato negli ultimi mesi, lo è. Il prezzo barrato da solo dice poco, soprattutto se è il prezzo consigliato dal produttore, che quasi nessun negozio applica. Controlla anche il nome esatto del modello, i tempi di consegna e il reso. Molti apparecchi costano altrettanto poco prima e dopo il Black Friday, quindi puoi confrontare con calma.",
    abschnitte: [
      {
        titel: "Lo storico dei prezzi mostra se è un’offerta",
        absaetze: [
          "Nel 2026 il Black Friday cade il 27 novembre, ma molte promozioni iniziano giorni o settimane prima. Se un prezzo è davvero buono lo vedi dallo storico dei prezzi degli ultimi mesi. Molti siti di confronto prezzi lo mostrano, spesso con un avviso di prezzo per il prezzo che vuoi.",
          "L’organizzazione britannica dei consumatori Which? ha seguito per un anno 175 prodotti per la casa, la tecnologia e la salute. L’83% di questi, fuori dalle settimane del Black Friday, è stato almeno una volta allo stesso prezzo o meno caro. Nessuno è stato al prezzo più basso proprio il giorno del Black Friday."
        ]
      },
      {
        titel: "Cosa significa il prezzo barrato",
        absaetze: [
          "In Germania, in Austria e nel resto dell’UE un negozio che abbassa un prezzo deve indicare il prezzo più basso degli ultimi 30 giorni. Secondo la Corte di giustizia dell’Unione europea, uno sconto in percentuale deve riferirsi proprio a questo prezzo.",
          "Questo aiuta, ma non sostituisce uno sguardo allo storico dei prezzi. Se l’apparecchio costava meno prima di quei 30 giorni, risparmi meno di quanto promette lo sconto. E non tutti rispettano la regola: in un controllo delle autorità europee per la tutela dei consumatori, il 30% di 314 negozi online indicava gli sconti in modo sbagliato."
        ]
      },
      {
        titel: "Il prezzo consigliato dice poco",
        absaetze: [
          "Spesso un negozio confronta con il prezzo consigliato dal produttore. Quasi nessun rivenditore lo applica, per questo uno sconto calcolato su di esso di solito è più piccolo di quanto sembri. In Germania non è ancora deciso se la regola dei 30 giorni valga anche per il prezzo consigliato, finora i tribunali hanno deciso in modo diverso.",
          "Confronta quindi con il prezzo a cui l’apparecchio è venduto in questo momento in più negozi."
        ]
      },
      {
        titel: "In Svizzera valgono regole proprie",
        absaetze: [
          "In Svizzera un negozio può indicare un prezzo precedente solo se ha davvero offerto l’apparecchio a quel prezzo prima. Un prezzo del produttore può mostrarlo come confronto solo se la maggior parte degli altri negozi offre davvero l’apparecchio a quel prezzo."
        ]
      },
      {
        titel: "Modello dell’anno prima o modello nuovo",
        absaetze: [
          "I modelli più vecchi calano di prezzo appena arrivano i successori, non solo al Black Friday. Il modello dell’anno prima è spesso l’offerta migliore, se fa quello che ti serve.",
          "Per questo confronta il nome esatto del modello. Nomi simili a volte indicano un altro apparecchio, per esempio con una base che fa meno o con risultati peggiori nei test. Se c’è scritto „vincitore del test“, controlla che sia stato testato proprio questo modello."
        ]
      },
      {
        titel: "Set e accessori",
        absaetze: [
          "Con i set fai i conti: ti servono davvero gli accessori, e quanto costa l’apparecchio da solo? Un set è un’offerta solo se quei pezzi li avresti comprati comunque.",
          "Guarda anche nel carrello prima di ordinare. Nel controllo dell’UE, più di un negozio su tre cercava di aggiungere articoli in più al carrello."
        ]
      },
      {
        titel: "Tempi di consegna, venditore e fretta",
        absaetze: [
          "Prima di comprare controlla chi vende e quando arriva l’apparecchio. Se la merce arriva da un venditore dell’Estremo Oriente, per esempio tramite il marketplace di un negozio, spesso ci mette di più, e il reso diventa caro o complicato. Se ti serve l’apparecchio per Natale, tieni conto dei tempi di consegna. Con i negozi sconosciuti controlla le note legali e le recensioni, e fai attenzione al solo pagamento anticipato.",
          "Conti alla rovescia e scritte come „quasi esaurito“ servono a metterti fretta. Nel controllo dell’UE quasi un negozio su cinque usava questi mezzi. Prenditi il tuo tempo: molti apparecchi costano altrettanto poco anche nelle settimane di Avvento."
        ]
      },
      {
        titel: "Resi in Germania, Austria e Svizzera",
        absaetze: [
          "In Germania, in Austria e nel resto dell’UE puoi restituire senza motivo gli apparecchi comprati online entro 14 giorni dal ricevimento, anche la merce scontata al Black Friday. La spedizione di reso può costarti qualcosa, se il negozio te l’ha detto prima. La merce senza difetti comprata in negozio, invece, un negozio la cambia solo se vuole.",
          "Molti grandi negozi in Germania allungano volontariamente il reso durante le feste, comodo per i regali. Controlla se vale anche per i venditori del marketplace.",
          "In Svizzera non esiste un diritto di reso per legge, nemmeno online. Molti negozi lo concedono volontariamente, quindi leggi le condizioni prima di comprare."
        ]
      },
      {
        titel: "Prima decidi, poi confronta",
        absaetze: [
          "Il Black Friday è più rilassato se sai già quale apparecchio fa per te. Il giorno stesso controlli solo il prezzo. Nelle mie pagine sulla macchina da caffè automatica, sul robot aspirapolvere lavapavimenti e sulla friggitrice ad aria trovi i miei consigli per fascia di prezzo e un calcolatore per la tua casa."
        ]
      }
    ],
    verweis: {
      text: "Quali macchine da caffè automatiche consiglio e quanto risparmi rispetto alle capsule lo vedi nella mia pagina sulla macchina da caffè automatica. I miei consigli per robot aspirapolvere lavapavimenti e friggitrici ad aria sono nelle pagine dedicate.",
      knopf: "Alla macchina da caffè con calcolatore",
      weitere: [
        { knopf: "Al robot aspirapolvere lavapavimenti", link: "saugroboter" },
        { knopf: "Alla friggitrice ad aria", link: "airfryer" }
      ]
    },
    wannNichtTitel: "Quando conviene aspettare",
    wannNicht: [
      "Il prezzo non è sotto quello che l’apparecchio è costato negli ultimi mesi.",
      "Lo sconto si riferisce solo al prezzo consigliato.",
      "Il nome del modello è diverso dall’apparecchio che hai guardato.",
      "I tempi di consegna sono lunghi, e l’apparecchio ti serve presto.",
      "Il negozio non indica condizioni di reso chiare.",
      "Senza lo sconto l’apparecchio non l’avresti proprio comprato."
    ],
    fragen: [
      { f: "Il Black Friday è il giorno più conveniente dell’anno?", a: "Di solito no. Nell’analisi di Which? nessun prodotto era al prezzo più basso proprio il giorno del Black Friday. È un’offerta se il prezzo è chiaramente sotto quello degli ultimi mesi." },
      { f: "Un negozio può fare pubblicità con il prezzo consigliato?", a: "In Germania sì, se è indicato chiaramente che si tratta del prezzo consigliato. Se in quel caso valga anche la regola dei 30 giorni, finora i tribunali lo vedono in modo diverso. In Svizzera un negozio può mostrare il prezzo consigliato come confronto solo se la maggior parte degli altri negozi offre davvero l’apparecchio a quel prezzo." },
      { f: "Posso restituire un affare del Black Friday?", a: "Nell’UE sì, online entro 14 giorni dal ricevimento, anche per la merce scontata. In Svizzera solo se il negozio lo offre volontariamente. Lì leggi le condizioni prima di comprare." },
      { f: "A cosa serve un avviso di prezzo?", a: "Su un sito di confronto prezzi inserisci il prezzo che vuoi e ricevi un messaggio appena l’apparecchio costa così poco. Così compri quando il prezzo è giusto, qualunque sia il giorno." }
    ],
    quellen: [
      { name: "Regolamento tedesco sull’indicazione dei prezzi (PAngV), § 11", url: "https://www.gesetze-im-internet.de/pangv_2022/__11.html", text: "in caso di riduzione di prezzo indicare il prezzo complessivo più basso degli ultimi 30 giorni" },
      { name: "Ministero federale austriaco dell’Economia, dell’Energia e del Turismo: indicazione dei prezzi", url: "https://www.bmwet.gv.at/Themen/Europa/Wettbewerbspolitik/Preisauszeichnung.html", text: "§ 9a della legge austriaca sull’indicazione dei prezzi secondo l’articolo 6 bis della direttiva UE sull’indicazione dei prezzi, prezzo più basso degli ultimi 30 giorni, sentenza della Corte di giustizia dell’Unione europea C-330/23" },
      { name: "Corte di giustizia dell’Unione europea, sentenza C-330/23 (26.09.2024), secondo beck-aktuell e il ministero austriaco dell’Economia", text: "uno sconto in percentuale deve partire dal prezzo più basso degli ultimi 30 giorni, così anche WKO (settembre 2023) e Arbeiterkammer Wien" },
      { name: "SECO: domande e risposte sull’indicazione dei prezzi (Svizzera, in tedesco)", url: "https://www.seco.admin.ch/de/faq-pbv", text: "confronto con il proprio prezzo precedente solo se davvero applicato, prezzo del produttore solo come confronto con la concorrenza, oltre al promemoria sull’autoconfronto (limiti di tempo, regola dei 30 giorni dal 2025), alle FAQ sul confronto con la concorrenza, alla guida del Cantone Argovia (2025) e a Handelsverband.swiss (novembre 2024)" },
      { name: "Commissione europea: controllo dell’UE sugli sconti del Black Friday e del Cyber Monday (26.03.2026)", url: "https://commission.europa.eu/news-and-media/news/eu-check-reveals-misleading-sales-practices-online-2026-03-26_it", text: "314 negozi online di 25 paesi controllati, il 30% con sconti sbagliati, il 36% con articoli in più nel carrello, il 18% con conti alla rovescia o finta scarsità" },
      { name: "Which?: analisi del Black Friday (novembre 2025)", text: "175 prodotti per la casa, la tecnologia e la salute seguiti da maggio 2024 a maggio 2025, l’83% almeno una volta allo stesso prezzo o meno caro fuori dalle settimane di promozione, nessuno al prezzo più basso il giorno del Black Friday" },
      { name: "Centri tedeschi per i consumatori: verbraucherzentrale.de (ottobre 2026), Bassa Sassonia (maggio 2026) e Amburgo (novembre 2025)", text: "prezzo consigliato quasi mai applicato, regola dei 30 giorni da maggio 2022, tribunali divisi sul prezzo consigliato, storico dei prezzi di un anno intero, note legali e pagamento anticipato, diritto di recesso di 14 giorni, costi di reso" },
      { name: "Arbeiterkammer Wien: Black Friday (2026)", text: "Black Friday il 27 novembre 2026, prezzo più basso degli ultimi 30 giorni, avviso di prezzo, 14 giorni di recesso, in negozio solo su base volontaria, resi costosi verso l’Asia" },
      { name: "Centro europeo dei consumatori Germania: Black Friday (2026)", text: "date, controllare l’andamento dei prezzi, prezzo consigliato, tempi di consegna, pagamento anticipato, dark pattern come „quasi esaurito“, 14 giorni di recesso in tutta Europa, costi di reso" },
      { name: "Stiftung Warentest: consigli per la battaglia degli sconti del Black Friday (novembre 2025)", text: "prezzo consigliato che quasi nessun rivenditore segue, avviso di prezzo, apparecchi dall’aspetto simile con risultati peggiori, lunghi tempi di consegna nei negozi sconosciuti, settimane di Avvento spesso altrettanto convenienti" },
      { name: "Sentenze sul prezzo consigliato barrato", text: "Händlerbund (agosto 2026), beck-aktuell sulla sentenza della Corte d’appello di Colonia (maggio 2026, ricorso alla Corte federale di giustizia ammesso) e IT-Recht Kanzlei su sentenze dei tribunali regionali di Düsseldorf e Monaco I (agosto 2025): confronto con il prezzo consigliato ammesso se indicato chiaramente, tribunali divisi sulla regola dei 30 giorni" },
      { name: "Resi in Svizzera", url: "https://www.ch.ch/it/sicurezza-e-diritto/restituire-o-sostituire-merci-acquistate/", text: "nessun diritto di reso o di cambio per legge, i negozi decidono le proprie regole, oltre a moneyland.ch (novembre 2026) e SRF (novembre 2020)" },
      { name: "Reso prolungato a Natale", text: "t3n (dicembre 2025), e-recht24 (dicembre 2025) e GIGA (novembre 2025, anche sul cambio in negozio)" },
      { name: "Modelli dell’anno prima, nomi dei modelli e set", text: "Anker (novembre 2025) e Stiftung Warentest sui prezzi degli smartphone (luglio 2026) sul calo dei prezzi dopo il lancio, TechRadar (novembre 2024), netzwelt.de (marzo 2023) su nomi simili con un’altra base, Which? (novembre 2023) e CHOICE (novembre 2026) sui set" },
      { name: "Altre guide sul Black Friday", text: "Utopia (novembre 2025) con l’analisi di WISO, Verbraucherzentrale Südtirol (novembre 2023) sulla merce dall’Estremo Oriente, ZDFheute (novembre 2025) sull’avviso di prezzo, heise online sul controllo dell’UE e GIGA (novembre 2026) sulle date e le promozioni precedenti" }
    ]
  }
];
