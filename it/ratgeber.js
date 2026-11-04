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
          "Il mio primo robot aspirapolvere l’ho comprato anche per il gatto che avevo allora. Spargeva di continuo la lettiera per casa, e questo mi faceva impazzire. All’epoca, nella mia prima e seconda casa, il robot mi ha aiutato tantissimo con la lettiera.",
          "Uso robot aspirapolvere da 14 anni e da allora non ho quasi più dovuto passare l’aspirapolvere o lavare i pavimenti da solo. Il trucco più importante: impostare una programmazione. Così pulisce mentre lavoro, e ogni sera torno in una casa pulita."
        ]
      },
      {
        titel: "Una spazzola intorno a cui i peli si avvolgono poco",
        absaetze: [
          "I peli degli animali si avvolgono in fretta intorno alle spazzole con setole. Meglio le spazzole principali in gomma o con un sistema anti-groviglio. Anche lì, però, i peli lunghi a volte restano impigliati.",
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
          "Nell’app crea delle zone vietate intorno alle ciotole di cibo e acqua, alla lettiera e alla cuccia. Così il robot lascia stare le ciotole, e il tuo animale ha dei posti dove nessuno lo disturba.",
          "Alla lettiera la zona vietata serve due volte: grumi e lettiera umida non devono finire nel robot."
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
        titel: "Con un animale più spesso: la spazzola",
        absaetze: [
          "Con un animale controlla la spazzola principale circa una volta a settimana e togli i peli avvolti. Alcuni produttori indicano ogni due settimane, che con un animale che perde molto pelo può essere troppo poco. I peli si accumulano anche sulla spazzola laterale e sulle ruote."
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
      { f: "Il robot riconosce la cacca del cane?", a: "Con telecamera e IA di solito sì, ma una garanzia non c’è. Nei test con cacche finte i modelli buoni ci sono quasi sempre girati intorno. Anche a loro sfugge più facilmente qualcosa di liquido come il vomito, e senza telecamera un robot di norma non riconosce cose del genere." },
      { f: "Il mio cane o il mio gatto avrà paura del robot?", a: "Alcuni animali all’inizio sì, anche se è più silenzioso di un normale aspirapolvere. Con pazienza molti si abituano: prima conoscerlo spento, poi farlo girare nella stanza accanto mentre ci sei." },
      { f: "Può aspirare la lettiera del gatto?", a: "La lettiera asciutta e sparsa la può aspirare. Grumi e lettiera umida però non devono finire nel robot. Blocca quindi una piccola zona intorno alla lettiera, così non ci va proprio." },
      { f: "Il robot aiuta con l’allergia al pelo degli animali?", a: "Può ridurre l’esposizione, perché aspira regolarmente. Scegli un vero filtro HEPA e una base con sacchetto: così la polvere fine resta nell’apparecchio, e quando cambi il sacchetto non la tocchi quasi. Curare un’allergia, però, non può." },
      { f: "Quanta potenza di aspirazione serve per i peli degli animali?", a: "I consigli sono molto diversi: nelle guide si legge di tutto, da qualche migliaio a oltre 20.000 pascal. Più affidabile è il risultato dei test sui tappeti, perché lì si vedono le differenze. La spazzola conta almeno altrettanto." }
    ],
    quellen: [
      { name: "Il mio calcolatore nella pagina del robot aspirapolvere lavapavimenti", text: "i tempi per 60 m² con aspirapolvere ogni giorno con e senza lavaggio e con due passate e un lavaggio, le ipotesi sono lì sotto „Come calcolo“" },
      { name: "Stiftung Warentest: test dei robot aspirapolvere (giugno 2026)", text: "test degli ostacoli con una cacca di cane finta, per chi ha animali conta la raccolta delle fibre sui tappeti (da buono a insufficiente), voto più basso per problemi con i peli lunghi, molti più robot buoni per pavimenti duri che per tappeti" },
      { name: "Stiftung Warentest: test dei robot aspirapolvere lavapavimenti (dicembre 2025)", text: "sui tappeti la maggior parte dei robot non convince" },
      { name: "c’t (heise): test dei robot aspirapolvere con riconoscimento degli ostacoli (dicembre 2021)", text: "tre robot con telecamera IA hanno sempre evitato con sicurezza cacche finte di cane e gatto" },
      { name: "Reviewed: iRobot Roomba j7+ contro Samsung Jetbot AI+ (giugno 2023)", text: "test con cacche di cane finte, il Roomba senza nessun incidente, il Jetbot ne ha toccata una per un attimo e poi l’ha evitata" },
      { name: "smarthomeassistent.de: un robot aspirapolvere riconosce il vomito di gatto? (maggio 2023)", text: "evita le cacche finte, nessuna garanzia con il vomito, nessun robot conosciuto riconosce incidenti piatti e liquidi, altrimenti spande il disastro per casa" },
      { name: "smarthomeassistent.de: robot aspirapolvere per peli di animali (agosto 2026) e base di svuotamento con o senza sacchetto (giugno 2023)", text: "i peli aggrovigliati si tolgono a mano, un sacchetto dura da uno a più mesi, si chiude quando lo estrai e aiuta chi soffre di allergie" },
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
      { name: "Dati e guide dei produttori", text: "Ecovacs (nessuna garanzia con gli escrementi, zone vietate intorno a cucce e lettiera, mai aspirare lettiera bagnata o agglomerata, quella asciutta sì), Dreame (incidenti piatti e umidi difficili da riconoscere, zone vietate intorno a lettiera, cucce e ciotole, controllare rapidamente il pavimento), MOVA (sacchetti pieni prima con animali, togliere i peli da spazzole e ruote anche ogni settimana), Roborock (togliere regolarmente i peli dagli assi delle ruote e dalla spazzola laterale), Ecovacs (i peli si avvolgono intorno all’asse della ruota)" }
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
          "Esistono anche lavasciuga con pompa di calore. Consumano meno corrente e acqua, e da Stiftung Warentest nel 2023 un modello di questo tipo è stato il migliore del test."
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
      { name: "t-online (ottobre 2023) e desired.de (febbraio 2025) sul test delle lavasciuga di Stiftung Warentest (numero 11/2023)", text: "migliore del test AEG con pompa di calore, consumo di corrente e acqua più basso, circa 760 € di costi di esercizio in meno in dieci anni rispetto agli apparecchi di Bosch e Siemens" },
      { name: "Stiftung Warentest: test delle asciugatrici (settembre 2026)", text: "la pompa di calore riduce molto il consumo, le asciugatrici a condensazione e a evacuazione sono energivore superate" },
      { name: "Konsument (VKI): test delle asciugatrici (settembre 2026)", text: "asciugatrici a pompa di calore per 8 kg di cotone asciutto da armadio 0,90–1,82 kWh, durata del programma 136–192 minuti" },
      { name: "Which?: lavasciuga o lavatrice e asciugatrice (ottobre 2026)", text: "216 sterline di corrente all’anno per una lavasciuga contro 118 sterline per lavatrice e asciugatrice a pompa di calore, 7,5 litri d’acqua per kg in asciugatura, la maggior parte delle lavasciuga asciuga peggio di un’asciugatrice" },
      { name: "T3: le lavasciuga funzionano bene come due apparecchi separati? (febbraio 2022)", text: "asciugano peggio, il bucato resta spesso umido, con due apparecchi il carico successivo si lava mentre il primo asciuga" },
      { name: "Trusted Reviews: lavasciuga contro apparecchi separati", text: "due apparecchi occupano circa il doppio dello spazio e funzionano contemporaneamente, le lavasciuga asciugano spesso in modo non uniforme" },
      { name: "Utopia: lavasciuga, vantaggi e svantaggi (marzo 2023)", text: "di solito asciuga solo 4–6 kg, più corrente e acqua, piuttosto per famiglie piccole" },
      { name: "Waschmaschinen-Kompass: mettere l’asciugatrice sopra la lavatrice (ottobre 2026)", text: "serve un telaio di collegamento, asciugatrice sempre sopra, senza telaio può spostarsi" },
      { name: "Dati dei produttori ed etichette energetiche", text: "sovrapposizione secondo Siemens e Samsung (asciugatrice sopra, kit adatto, stessa marca), capacità, durata dei programmi e corrente per lavare e asciugare secondo le etichette energetiche di Haier, Hisense, Bosch e AEG" }
    ]
  }
];
