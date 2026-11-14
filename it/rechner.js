/*
  Italienische Fassung von rechner.js (für myle.life/it/).
  Gleiche Regler und Formeln wie dort, nur die Texte sind auf Italienisch.
  Wenn sich in rechner.js etwas ändert, muss es hier genauso geändert werden.
  Was die Felder bedeuten, steht in rechner.js.
*/

// Prezzo medio della corrente per paese, come segni sul cursore del prezzo della corrente (fonti in STROM_QUELLEN)
const STROM_LAENDER = [
  { wert: 0.43, kurz: "IT", name: "Italia" },
  { wert: 0.30, kurz: "CH", name: "Svizzera", zusatz: "27,7 centesimi di franco" }
];
const STROM_QUELLEN = " Le sigle sul cursore del prezzo della corrente: Italia 43 centesimi al kWh (prezzo di riferimento ARERA per il cliente tipo, imposte incluse, ottobre-dicembre 2026), Svizzera 27,7 centesimi di franco, cioè circa 30 centesimi di euro (ElCom, famiglia tipo 2026).";

const RECHNER = {
  saugroboter: {
    mit: "un robot aspirapolvere lavapavimenti",
    felder: [
      { id: "m2", label: "Quanto è grande casa tua?", min: 20, max: 200, step: 5, wert: 70, einheit: "m²", schnitt: [73, 103, 114, 129] },
      { id: "saugen", label: "Quante volte passi l’aspirapolvere a settimana?", min: 0, max: 7, step: 1, wert: 2, einheit: "×" },
      { id: "wischen", label: "Quante volte lavi i pavimenti a settimana?", min: 0, max: 7, step: 1, wert: 1, einheit: "×" }
    ],
    berechne(w) {
      const saugMin = 5 + 0.2 * w.m2;
      const wischMin = 8 + 0.25 * w.m2;
      const minuten = Math.max(0, w.saugen * saugMin + w.wischen * wischMin - 5);
      const arbeitstage = (minuten * 52) / 60 / 8;
      return {
        minutenProWoche: minuten,
        euroProMonat: -3.5,
        extra: `Sono circa ${Math.round(arbeitstage)} giornate lavorative intere all’anno che hai per altro.`,
        vorherTitel: "Pulire da solo",
        // Ohne Wischen (Roboter, die nur saugen) fallen die Wisch-Punkte weg
        vorher: w.wischen > 0 ? [
          "Tirare fuori l’aspirapolvere, attaccare la spina",
          "Alzare le sedie, strisciare sotto il letto",
          "Riempire il secchio, lavare, buttare l’acqua",
          "Aspettare che il pavimento si asciughi"
        ] : [
          "Tirare fuori l’aspirapolvere, attaccare la spina",
          "Alzare le sedie, strisciare sotto il letto",
          "Combattere con il filo a ogni angolo"
        ],
        nachher: w.wischen > 0 ? [
          "Impostare una volta una programmazione nell’app",
          "Pulisce mentre lavori",
          "Rabboccare l’acqua, svuotare quella sporca"
        ] : [
          "Impostare una volta una programmazione nell’app",
          "Aspira mentre lavori",
          "Cambiare il sacchetto ogni qualche settimana"
        ]
      };
    },
    annahmen: "Preparazione compresa, passare l’aspirapolvere richiede circa 5 minuti più 0,2 minuti per m² (quindi circa 19 minuti per 70 m²), lavare i pavimenti circa 8 minuti più 0,25 minuti per m² (circa 26 minuti). Per un robot che aspira soltanto, il lavaggio non viene contato. Per la cura del robot tolgo 5 minuti a settimana. I ricambi come spazzole, filtri, sacchetti e panni costano circa 3,50\u00a0€ al mese in più rispetto a un aspirapolvere normale. I numeri sotto il cursore della casa mostrano quanto è grande in media un appartamento in Germania (Ufficio federale di statistica, microcensimento 2022): 73 m² per 1 persona, 103 m² per 2, 114 m² per 3 e 129 m² per 4 o più persone."
  },

  airfryer: {
    mit: "una friggitrice ad aria",
    felder: [
      { id: "bisher", label: "Con cosa cucini adesso?", typ: "auswahl", wert: "pfanne",
        optionen: [
          { wert: "pfanne", label: "Padella e pentole" },
          { wert: "backofen", label: "Forno" },
          { wert: "fritteuse", label: "Friggitrice" }
        ] },
      { id: "anzahl", label: "Quante volte cucineresti con lei?", min: 1, max: 14, step: 1, wert: 4, einheit: "× a settimana" },
      { id: "strom", label: "Il tuo prezzo della corrente", min: 0.2, max: 0.6, step: 0.01, wert: 0.35, einheit: "€ al kWh", schnitt: STROM_LAENDER, schnittHinweis: "Le sigle sul cursore mostrano il prezzo medio della corrente in Italia (IT) e in Svizzera (CH)." }
    ],
    berechne(w) {
      const PROFILE = {
        backofen: { name: "Forno", kwh: 1.0, oel: 0, minuten: 18, vorher: [
          "Preriscaldare il forno per 10 minuti",
          "Mettere la carta forno sulla teglia, girare a metà",
          "Dopo, strofinare teglia e forno"
        ] },
        pfanne: { name: "Padella e pentole", kwh: 0.7, oel: 0.08, minuten: 15, vorher: [
          "Stare tutto il tempo ai fornelli a girare",
          "Schizzi di grasso su fornelli e piastrelle",
          "Lavare padella e pentole a mano"
        ] },
        fritteuse: { name: "Friggitrice", kwh: 1.0, oel: 0.4, minuten: 20, vorher: [
          "Scaldare 2-3 litri d’olio",
          "Smaltire l’olio vecchio, pulire la friggitrice",
          "Odore di fritto in tutta la casa"
        ] }
      };
      const p = PROFILE[w.bisher];
      const proMahlzeit = (p.kwh - 0.45) * w.strom + p.oel;
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: (proMahlzeit * w.anzahl * 52) / 12,
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Tutto dentro, premi Sync, e via sul divano",
          "Suona: entrambi i cestelli sono pronti insieme",
          "Niente piatti da lavare: cestelli in lavastoviglie o una passata con un panno umido"
        ]
      };
    },
    annahmen: "Consumo di corrente per pasto: forno circa 1,0 kWh, fornello circa 0,7 kWh, friggitrice circa 1,0 kWh, friggitrice ad aria circa 0,45 kWh. Olio: padella circa 8 centesimi, friggitrice circa 40 centesimi a pasto. Preriscaldare, stare lì accanto e lavare i piatti costano, a seconda del confronto, da 15 a 20 minuti in più a pasto." + STROM_QUELLEN
  },

  buerste: {
    mit: "una spazzola elettrica per la pulizia",
    felder: [
      { id: "putzen", label: "Quante volte pulisci bagno, doccia o piastrelle?", min: 0, max: 7, step: 1, wert: 1, einheit: "× a settimana" },
      { id: "dauer", label: "Quanto tempo ci metti adesso?", min: 10, max: 120, step: 5, wert: 40, einheit: "min" }
    ],
    berechne(w) {
      return {
        minutenProWoche: w.putzen * w.dauer * 0.25,
        euroProMonat: 0,
        extra: "E non devi piegarti: con il manico lungo pulisci stando in piedi.",
        vorherTitel: "Spugna e panno",
        vorher: [
          "Strofinare la doccia in ginocchio",
          "Lavorare le fughe con un vecchio spazzolino",
          "Spugne che puzzano dopo qualche settimana"
        ],
        nachher: [
          "Appoggi la spazzola, gira da sola",
          "Niente chinarsi, niente ginocchia a terra",
          "Sciacquare la testina, fatto"
        ]
      };
    },
    annahmen: "Nessun test ha ancora misurato quanto tempo fa risparmiare la spazzola. I tester scrivono che pulire è più facile e più veloce. Calcolo con prudenza un quarto di tempo in meno, perché diventa più veloce solo lo strofinare, non spruzzare, sciacquare e asciugare. Soldi non ne risparmi quasi: il detergente ti serve ancora, e invece delle spugne ogni tanto compri spazzole di ricambio."
  },

  deckel: {
    mit: "coperchi elastici",
    felder: [
      { id: "bisher", label: "Con cosa copri adesso?", typ: "auswahl", wert: "folie",
        optionen: [
          { wert: "folie", label: "Pellicola trasparente" },
          { wert: "alu", label: "Alluminio" },
          { wert: "beutel", label: "Sacchetti" }
        ] },
      { id: "anzahl", label: "Quante volte copri qualcosa?", min: 1, max: 21, step: 1, wert: 5, einheit: "× a settimana" }
    ],
    berechne(w) {
      const KOSTEN = { folie: 0.015, alu: 0.05, beutel: 0.04 };
      const NAMEN = { folie: "pellicola", alu: "alluminio", beutel: "sacchetti" };
      const meter = Math.round(w.anzahl * 52 * 0.3);
      return {
        minutenProWoche: w.anzahl * 10 / 60,
        euroProMonat: (w.anzahl * KOSTEN[w.bisher] * 52) / 12,
        extra: w.bisher === "beutel"
          ? `Sono ${w.anzahl * 52} sacchetti in meno nella spazzatura ogni anno.`
          : `Sono circa ${meter} metri di ${NAMEN[w.bisher]} in meno nella spazzatura ogni anno.`,
        vorherTitel: NAMEN[w.bisher].replace(/^./, c => c.toUpperCase()),
        vorher: {
          folie: ["La srotoli, e si appiccica a se stessa", "Non aderisce a tutte le ciotole", "Nella spazzatura dopo un solo uso"],
          alu: ["Strapparlo e premerlo intorno al bordo", "Cibi acidi e salati sciolgono l’alluminio dal foglio", "Nella spazzatura dopo un solo uso"],
          beutel: ["Prima travasare gli avanzi nel sacchetto", "Annodarlo o chiuderlo con una clip", "Nella spazzatura dopo un solo uso"]
        }[w.bisher],
        nachher: [
          "Lo tiri sopra il bordo, chiude bene",
          "Va bene su contenitori rotondi e quadrati",
          "In lavastoviglie e lo riusi"
        ]
      };
    },
    annahmen: "A seconda della marca un pezzo di pellicola (circa 30 cm) costa da 0,4 a 2,5 centesimi, un pezzo di alluminio da 2 a 8 centesimi e un sacchetto per congelatore da 2,5 a 5 centesimi. Calcolo ogni volta con il valore medio. Nessun test ha ancora misurato quanto tempo risparmi. Stimo con prudenza 10 secondi per utilizzo: niente più srotolare e strappare, però devi cercare il coperchio giusto."
  },

  kindle: {
    mit: "un e-reader",
    felder: [
      { id: "buecher", label: "Quanti libri leggi all’anno?", min: 1, max: 60, step: 1, wert: 12, einheit: "libri" },
      { id: "preisBuch", label: "Quanto ti costa in media un libro?", min: 8, max: 30, step: 1, wert: 14, einheit: "€" },
      { id: "gratis", label: "Quanti potresti leggerne gratis? (classici, Prime Reading, biblioteca)", min: 0, max: 20, step: 1, wert: 2, einheit: "libri" }
    ],
    berechne(w) {
      const gratis = Math.min(w.gratis, w.buecher);
      const proJahr = (w.buecher - gratis) * w.preisBuch * 0.2 + gratis * w.preisBuch;
      const kg = (w.buecher * 0.3).toLocaleString("it-IT", { maximumFractionDigits: 1 });
      return {
        minutenProWoche: (w.buecher * 15) / 52,
        euroProMonat: proJahr / 12,
        extra: `E la tua libreria resta libera: ${Math.round(w.buecher * 2.5)} cm di libri e ${kg} kg in meno all’anno.`,
        vorherTitel: "Libri stampati",
        vorher: [
          "Andare in libreria o aspettare la consegna",
          "Libri pesanti nella valigia delle vacanze",
          "Caratteri piccoli, la sera serve una lampada"
        ],
        nachher: [
          "Il libro arriva in pochi secondi",
          "Migliaia di libri su un apparecchio leggero",
          "Ingrandire il testo, la luce è integrata"
        ]
      };
    },
    annahmen: "In Germania gli e-book costano in media circa il 20% in meno del libro stampato. I libri gratuiti fanno risparmiare l’intero prezzo. I libri della biblioteca (Onleihe) però non funzionano sul Kindle, solo su e-reader come PocketBook o Tolino. Per andare in libreria, ordinare o ritirare calcolo 15 minuti a libro. Un tascabile pesa circa 300 g ed è spesso circa 2,5 cm."
  },

  waschtrockner: {
    mit: "una lavasciuga",
    felder: [
      { id: "ladungen", label: "Quante lavatrici fai a settimana?", min: 1, max: 10, step: 1, wert: 3, einheit: "× a settimana", schnitt: [2, 3, 3.5, 4] },
      { id: "buegeln", label: "Quanti capi stiri a settimana?", min: 0, max: 20, step: 1, wert: 4, einheit: "capi" },
      { id: "strom", label: "Il tuo prezzo della corrente", min: 0.2, max: 0.6, step: 0.01, wert: 0.35, einheit: "€ al kWh", schnitt: STROM_LAENDER, schnittHinweis: "Le sigle sul cursore mostrano il prezzo medio della corrente in Italia (IT) e in Svizzera (CH)." }
    ],
    berechne(w) {
      const stromMonat = ((w.ladungen * 52) / 12) * 2.2 * w.strom;
      return {
        minutenProWoche: w.ladungen * 10 + w.buegeln * 3 * 0.5,
        euroProMonat: -stromMonat,
        extra: `In compenso asciugare costa circa ${stromMonat.toLocaleString("it-IT", { maximumFractionDigits: 0 })} € di corrente al mese.`,
        vorherTitel: "Stendibiancheria",
        vorher: [
          "Montare lo stendino, stendere ogni capo uno per uno",
          "Aspettare un giorno, d’inverno spesso di più",
          "Ritirare, stirare, rimettere a posto lo stendino"
        ],
        nachher: [
          "La mattina il bucato dentro, impostare l’ora di fine",
          "La sera lavato e asciutto",
          "Programma a vapore: molte meno pieghe"
        ]
      };
    },
    annahmen: "Stendere, ritirare e montare e smontare lo stendino richiede circa 10 minuti a carico. Con il programma a vapore risparmi circa metà dello stiro; calcolo 3 minuti a capo. Con un apparecchio senza pompa di calore, asciugare consuma poco più di 2 kWh di corrente a carico (6 kg). Lo tolgo come costo. Con la pompa di calore è un po’ meno. I numeri sotto il cursore dei lavaggi: in Germania ogni persona fa in media circa 90 lavaggi all’anno, chi vive da solo molto più spesso, nelle famiglie più grandi molto meno spesso a testa. Una famiglia di quattro persone fa circa 210 lavaggi all’anno, quindi circa 4 a settimana (entrambi i dati dall’associazione tedesca dei produttori di cosmetici e detersivi, IKW). Ne risultano grosso modo 2 carichi a settimana per 1 persona, 3 per 2, 3,5 per 3 e 4 per 4 persone." + STROM_QUELLEN
  },

  akkusauger: {
    mit: "un aspirapolvere senza fili",
    felder: [
      { id: "m2", label: "Quanto è grande casa tua?", min: 20, max: 200, step: 5, wert: 70, einheit: "m²", schnitt: [73, 103, 114, 129] },
      { id: "saugen", label: "Quante volte passi l’aspirapolvere a settimana?", min: 0, max: 7, step: 1, wert: 2, einheit: "×" },
      { id: "schnell", label: "Quante volte aspiri velocemente qualcosa, per esempio briciole?", min: 0, max: 14, step: 1, wert: 3, einheit: "× a settimana" }
    ],
    berechne(w) {
      // Herausholen, Kabel einstecken, in jedem Raum umstecken, wegräumen
      const proMal = 4 + 0.02 * w.m2;
      return {
        minutenProWoche: w.saugen * proMal + w.schnell * 2,
        euroProMonat: 0,
        extra: "E per le briciole dopo mangiato non tiri più fuori l’aspirapolvere grande.",
        vorherTitel: "Aspirapolvere con filo",
        vorher: [
          "Tirare fuori l’aspirapolvere pesante dal ripostiglio",
          "Attaccare la spina, cambiarla in ogni stanza",
          "Per le scale portare tutto su"
        ],
        nachher: [
          "Staccarlo dal muro e aspirare",
          "Niente filo, niente prese da cambiare",
          "Come aspirabriciole per divano, scale e auto"
        ]
      };
    },
    annahmen: "Tirare fuori l’aspirapolvere con filo, attaccare la spina, cambiarla in ogni stanza e rimetterlo a posto richiede ogni volta circa 4 minuti più 0,02 minuti per m² (quindi circa 5,5 minuti per 70 m²). Aspirare velocemente qualcosa è ogni volta circa 2 minuti più rapido. Per i soldi arrivi più o meno a zero: risparmi i sacchetti, ma la batteria cala dopo qualche anno. I numeri sotto il cursore della casa mostrano quanto è grande in media un appartamento in Germania (Ufficio federale di statistica, microcensimento 2022): 73 m² per 1 persona, 103 m² per 2, 114 m² per 3 e 129 m² per 4 o più persone."
  },

  reiskocher: {
    mit: "un cuociriso",
    felder: [
      { id: "bisher", label: "Come cucini il riso adesso?", typ: "auswahl", wert: "topf",
        optionen: [
          { wert: "topf", label: "In pentola" },
          { wert: "beutel", label: "Nei sacchetti da bollire" }
        ] },
      { id: "anzahl", label: "Quante volte mangi riso?", min: 1, max: 14, step: 1, wert: 2, einheit: "× a settimana" }
    ],
    berechne(w) {
      const PROFILE = {
        topf: { name: "Riso in pentola", minuten: 10, euro: 0, vorher: [
          "Stare lì accanto perché non trabocchi",
          "Bruciato sotto, ancora duro sopra",
          "Mettere in ammollo la pentola e strofinarla"
        ] },
        beutel: { name: "Sacchetti da bollire", minuten: 5, euro: 0.10, vorher: [
          "Portare l’acqua a bollore, cuocerci dentro il sacchetto",
          "Ripescare il sacchetto bollente dall’acqua",
          "La pentola grande d’acqua consuma più corrente"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: (w.anzahl * p.euro * 52) / 12,
        extra: "E non si attacca più niente: capisce da solo quando l’acqua è assorbita.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Riso e acqua dentro, premi il tasto",
          "Passa da solo al mantenimento in caldo",
          "Sciacquare velocemente la pentola antiaderente"
        ]
      };
    },
    annahmen: "Con la pentola stai lì accanto circa 10 minuti mentre il riso cuoce, o dopo strofini la pentola; con i sacchetti sono circa 5 minuti. Sulla corrente, rispetto alla pentola con coperchio, arrivi più o meno a zero: secondo Stiftung Warentest un cuociriso in media consuma perfino un po’ di più (121 invece di 91 wattora). Per i sacchetti calcolo circa 5 centesimi di corrente in più a pasto: cuociono in una pentola piena d’acqua che bolle, e cucinare così consuma secondo Stiftung Warentest più del doppio della corrente di un cuociriso (circa 270 wattora). Il riso in sacchetti delle marche del supermercato costa solo poco più del riso sfuso: calcolo 5 centesimi in più a pasto per due-tre persone."
  },

  kaffeevollautomat: {
    mit: "una macchina automatica",
    felder: [
      { id: "tassen", label: "Quante tazze da capsule bevete al giorno?", hinweis: "Tutti insieme. Se non bevete caffè in capsule, imposta 0.", min: 0, max: 10, step: 1, wert: 2, einheit: "tazze al giorno" },
      { id: "sorte", label: "Che capsule sono di solito?", typ: "auswahl", wert: "marke",
        optionen: [
          { wert: "marke", label: "Capsule di marca, per esempio Nespresso" },
          { wert: "discount", label: "Quelle economiche del discount" }
        ] },
      { id: "unterwegs", label: "Quante volte alla settimana compri un caffè fuori?", hinweis: "Solo quelli che in futuro faresti a casa.", min: 0, max: 14, step: 1, wert: 0, einheit: "× a settimana" }
    ],
    berechne(w) {
      const KAPSEL = { marke: 0.40, discount: 0.20 };   // € pro Kapsel
      const TASSE = 0.15;       // € pro Tasse aus dem Vollautomaten: Bohnen, Wasser, Strom
      const UNTERWEGS = 3.50;   // € pro Kaffee im Café oder beim Bäcker, vorsichtig gerechnet
      const PFLEGE = 5;         // € pro Monat für Entkalker, Reiniger und Filter
      const monat = w.tassen * (365 / 12) * (KAPSEL[w.sorte] - TASSE) + w.unterwegs * (52 / 12) * (UNTERWEGS - TASSE) - PFLEGE;
      const kapseln = w.tassen * 365;
      const becher = w.unterwegs * 52;
      const nurUnterwegs = w.tassen === 0 && w.unterwegs > 0;
      return {
        minutenProWoche: 0,
        euroProMonat: Math.max(0, monat),
        extra: monat <= 0
          ? "Con questi valori una macchina automatica non ti fa risparmiare soldi. Conviene solo se per te il caffè macinato al momento e il cappuccino premendo un tasto valgono il prezzo."
          : w.tassen > 0
          ? `E ${kapseln.toLocaleString("it-IT")} capsule in meno nella spazzatura ogni anno${becher > 0 ? `, più fino a ${becher} bicchieri usa e getta` : ""}.`
          : `E fino a ${becher} bicchieri usa e getta in meno all’anno.`,
        vorherTitel: nurUnterwegs ? "Caffè fuori casa" : "Capsule",
        vorher: nurUnterwegs
          ? [
              "Per ogni caffè al bar o in panetteria",
              "Lì un cappuccino costa in media quasi 4 euro",
              "Spesso in fila finché tocca a te"
            ]
          : [
              "Una capsula nuova per ogni tazza",
              "Ricomprare capsule e tenerne una scorta",
              "Le capsule vuote finiscono nella spazzatura"
            ],
        nachher: [
          "Chicchi dentro, premi il tasto, fatto",
          "Ogni tazza macinata al momento, anche il cappuccino",
          "Ogni giorno svuotare fondi e vaschetta raccogligocce"
        ]
      };
    },
    annahmen: "Una capsula di marca costa circa 40 centesimi, una economica del discount circa 20 centesimi (nel test 2025 di Stiftung Warentest per esempio da 17 a 19 centesimi). Una tazza dalla macchina automatica costa con chicchi, acqua e corrente circa da 10 a 20 centesimi a seconda dei chicchi, io conto 15 centesimi. Per decalcificante, detergente e filtri dell’acqua conto 5 euro al mese, a seconda dell’apparecchio e del filtro sono circa da 30 a 120 euro all’anno. A giugno 2026 un cappuccino al bar costava in media 3,80 euro in dieci grandi città tedesche (studio del rivenditore di caffè Coffee Friend), io conto con prudenza 3,50 euro per ogni caffè fuori casa. Il latte per il cappuccino serve con entrambe le macchine, non lo conto. Se fai il cappuccino con capsule di latte, risparmi un po’ di più di quanto indicato. Tutti i prezzi valgono per la Germania, il risultato è un valore approssimativo. Non conto il tempo, solo i soldi."
  },
  kochfunktion: {
    mit: "un robot da cucina con cottura",
    felder: [
      { id: "bisher", label: "Cosa cucini più spesso?", typ: "auswahl", wert: "gemischt",
        optionen: [
          { wert: "ruehren", label: "Zuppe, sughi, risotti" },
          { wert: "gemischt", label: "Un po’ di tutto" },
          { wert: "braten", label: "Molti piatti in padella" }
        ] },
      { id: "anzahl", label: "Quante volte cucini un pasto caldo?", min: 1, max: 14, step: 1, wert: 4, einheit: "× a settimana" }
    ],
    berechne(w) {
      const PROFILE = {
        ruehren: { name: "Mescolare ai fornelli", minuten: 15, vorher: [
          "Tagliare a mano cipolle e verdure",
          "Stare ai fornelli e mescolare perché non si attacchi",
          "Lavare tagliere, coltello e pentola"
        ] },
        gemischt: { name: "Cucinare ai fornelli", minuten: 10, vorher: [
          "Tagliare, mescolare, assaggiare",
          "Tornare di continuo ai fornelli",
          "Lavare tagliere, coltello e pentole"
        ] },
        braten: { name: "Cuocere in padella", minuten: 5, vorher: [
          "Tagliare a mano cipolle e verdure",
          "Sugo e contorno a parte in pentola",
          "Lavare padella, pentola, tagliere e coltello"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: 0,
        extra: w.bisher === "braten"
          ? "La rosolatura la fai ancora in padella. A tagliare, al sugo e al contorno pensa il robot."
          : "E mentre cuoce, tu fai altro.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Ingredienti nel boccale, scegli il programma",
          "Trita, mescola e cuoce",
          "Lavare boccale, lame e coperchio"
        ]
      };
    },
    annahmen: "Nessun test ha misurato quanto tempo fa risparmiare un robot da cucina con cottura. La mia stima: con zuppe, sughi e risotti risparmi circa 15 minuti a pasto, perché non devi tagliare né stare accanto. Con pasti misti sono circa 10 minuti. Con molti piatti in padella solo circa 5, perché è meglio continuare a rosolare in padella. Il tempo per lavare boccale, lame e coperchio l’ho già sottratto. Non calcolo la corrente: se il robot consuma più o meno del tuo piano cottura dipende dal piatto."
  },

  kneten: {
    mit: "un’impastatrice",
    felder: [
      { id: "bisher", label: "Come prepari l’impasto finora?", typ: "auswahl", wert: "hand",
        optionen: [
          { wert: "hand", label: "A mano" },
          { wert: "handmixer", label: "Con lo sbattitore" }
        ] },
      { id: "anzahl", label: "Quante volte prepari dolci o impasti?", min: 1, max: 20, step: 1, wert: 4, einheit: "× al mese" }
    ],
    berechne(w) {
      const PROFILE = {
        hand: { name: "Impastare a mano", minuten: 10, vorher: [
          "Impastare almeno 8 minuti finché l’impasto è liscio",
          "Mani appiccicose, farina sul piano di lavoro",
          "Pulire ciotola, piano di lavoro e mani"
        ] },
        handmixer: { name: "Con lo sbattitore", minuten: 5, vorher: [
          "Tenere lo sbattitore tutto il tempo",
          "Stare lì finché l’impasto è pronto",
          "Lavare ciotola e fruste"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: (w.anzahl * p.minuten * 12) / 52,
        euroProMonat: 0,
        extra: w.bisher === "hand"
          ? "E risparmi anche le braccia."
          : "E non devi più tenere lo sbattitore.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Ingredienti nella ciotola, scegli la velocità",
          "Impasta e mescola da sola",
          "Gancio e frusta in lavastoviglie"
        ]
      };
    },
    annahmen: "Nessun test ha misurato quanto tempo fa risparmiare un’impastatrice. La mia stima: a mano lavori un impasto lievitato almeno 8 minuti, come consigliano la catena di supermercati tedesca REWE e l’ufficio distrettuale di Göppingen. Con il tempo per unire gli ingredienti sono circa 10 minuti, in cui con la macchina non devi esserci. Con lo sbattitore calcolo circa 5 minuti per impasto in cui tieni lo sbattitore. Secondo le stesse fonti la macchina impasta almeno 5 minuti, ma senza di te. Per lavare calcolo lo stesso tempo di prima. Non calcolo la corrente: impastare costa pochi centesimi."
  },

  sprudler: {
    mit: "un gasatore",
    felder: [
      { id: "bisher", label: "Quale acqua frizzante compri adesso?", typ: "auswahl", wert: "discount",
        optionen: [
          { wert: "discount", label: "Economica del discount" },
          { wert: "marke", label: "Acqua di marca" }
        ] },
      { id: "liter", label: "Quanta acqua frizzante bevete a settimana?", min: 1, max: 25, step: 0.5, wert: 4, einheit: "litri a settimana", schnitt: [2, 3.5, 5.5, 7] }
    ],
    berechne(w) {
      const PREIS = { discount: 0.20, marke: 0.60 };   // gekauftes Sprudelwasser, € pro Liter
      const SELBST = 0.15;                              // Gas pro Liter, Leitungswasser fast gratis
      const kilo = Math.round((w.liter * 52) / 10) * 10;
      const wochen = Math.round(45 / w.liter);
      return {
        minutenProWoche: 0,
        euroProMonat: ((PREIS[w.bisher] - SELBST) * w.liter * 52) / 12,
        extra: `E ogni anno porti a casa circa ${kilo.toLocaleString("it-IT")} chili d’acqua in meno, senza contare i vuoti.`,
        vorherTitel: w.bisher === "marke" ? "Comprare acqua di marca" : "Acqua del discount",
        vorher: [
          "Portare fardelli o casse fino all’auto e in casa",
          "Raccogliere i vuoti e riportarli",
          "Spazio per la scorta in cucina o in cantina"
        ],
        nachher: [
          "Acqua del rubinetto nella bottiglia, premere qualche volta",
          wochen <= 1 ? "Cambiare il cilindro circa ogni settimana" : `Cambiare il cilindro circa ogni ${wochen} settimane`,
          "Niente casse, niente vuoti"
        ]
      };
    },
    annahmen: "In Germania l’acqua frizzante del discount costa circa 20 centesimi al litro, l’acqua di marca in bottiglie di plastica spesso 60 centesimi e più. Facendola tu, paghi soprattutto il gas: circa 10-20 centesimi al litro a seconda del cilindro e dell’apparecchio, io calcolo 15 centesimi. Un cilindro basta per circa 40-60 litri, io calcolo 45. L’acqua del rubinetto costa meno di mezzo centesimo al litro, quindi la lascio fuori. Il tempo non lo calcolo: portare casse e riportare i vuoti non serve più, ma gasi tu ogni bottiglia. I segni sul cursore: in Germania ognuno beve in media poco meno di 130 litri di acqua minerale all’anno, di cui oltre il 70 per cento frizzante (Associazione tedesca delle fonti minerali). Sono poco meno di 2 litri di acqua frizzante a persona a settimana."
  },
  geschirrspueler: {
    mit: "una lavastoviglie da tavolo",
    felder: [
      { id: "mal", label: "Quante volte a settimana lavi i piatti a mano?", min: 1, max: 14, step: 1, wert: 7, einheit: "× a settimana" },
      { id: "minuten", label: "Quanto tempo ti serve ogni volta?", hinweis: "Senza pentole e padelle grandi, quelle le lavi ancora a mano.", min: 5, max: 60, step: 5, wert: 20, einheit: "minuti" }
    ],
    berechne(w) {
      const MASCHINE = 5;   // Minuten pro Spülgang: einräumen, ausräumen, beim Tank Wasser einfüllen
      return {
        minutenProWoche: w.mal * Math.max(0, w.minuten - MASCHINE),
        euroProMonat: 0,
        extra: "Per i soldi calcolo zero: la macchina consuma corrente e pastiglie, in cambio risparmi acqua calda e detersivo per piatti.",
        vorherTitel: "Piatti a mano",
        vorher: [
          "Riempire il lavello, strofinare ogni pezzo uno per uno",
          "Asciugare o riempire lo scolapiatti",
          "Se restano lì, i piatti si accumulano"
        ],
        nachher: [
          "Caricare, premere il tasto, fatto",
          "Con l’apparecchio con serbatoio, prima riempire l’acqua",
          "Pentole e padelle grandi le lavi ancora a mano"
        ]
      };
    },
    annahmen: "Caricare e scaricare costa circa 5 minuti per lavaggio, con l’apparecchio con serbatoio è compreso il riempimento. Il valore iniziale di 20 minuti per lavare i piatti a mano l’ho ricavato da uno studio dell’Università di Bonn: lì 113 persone hanno lavato a mano dodici coperti, in media in 79 minuti, cioè poco più di 6 minuti per coperto. Per tre coperti sono circa 20 minuti. Caricare e scaricare una lavastoviglie grande da dodici coperti richiedeva lì circa 15 minuti. Per i soldi calcolo zero: la macchina consuma corrente e pastiglie, in cambio risparmi acqua calda e detersivo per piatti. Chi finora lavava a mano in modo molto parsimonioso, con la macchina paga piuttosto un po’ di più. Per il cursore «Quante volte» non ho trovato medie affidabili per numero di persone, per questo lì non ci sono segni."
  },

  balkonkraftwerk: {
    mit: "un kit fotovoltaico da balcone",
    preisLabel: "Quanto costa il tuo kit?",
    preisHinweis: "Il prezzo attuale lo vedi su Amazon. Con la batteria inserisci qui solo quanto costano i pannelli.",
    kaufpreis: w => w.preis + w.speicher,
    felder: [
      { id: "ort", label: "Dove metti i pannelli?", typ: "auswahl", wert: "balkon",
        optionen: [
          { wert: "balkon", label: "In verticale sulla ringhiera del balcone" },
          { wert: "schraeg", label: "Inclinati, per esempio su un tetto piano o in giardino" }
        ] },
      { id: "richtung", label: "Verso dove sono rivolti?", hinweis: "Se sono rivolti a sud-est o sud-ovest, scegli sud. Verso nord non conviene quasi.", typ: "auswahl", wert: "sued",
        optionen: [
          { wert: "sued", label: "Verso sud" },
          { wert: "ostwest", label: "Verso est o ovest" }
        ] },
      { id: "verbrauch", label: "Quanta corrente consumate all’anno?", hinweis: "È scritto sulla bolletta della luce.", min: 800, max: 6000, step: 100, wert: 1900, einheit: "kWh all’anno", schnitt: [1200, 1900, 2400, 2600], schnittHinweis: "I numeri sul cursore mostrano la media di un appartamento con 1, 2, 3 e 4 persone (Stromspiegel tedesco 2025, senza acqua calda elettrica)." },
      { id: "strom", label: "Il tuo prezzo della corrente", min: 0.2, max: 0.6, step: 0.01, wert: 0.37, einheit: "€ al kWh", schnitt: STROM_LAENDER, schnittHinweis: "Le sigle sul cursore mostrano il prezzo medio della corrente in Italia (IT) e in Svizzera (CH)." },
      { id: "speicher", label: "Quanto costa la tua batteria?", hinweis: "Il prezzo attuale lo vedi su Amazon. Aggiungi una testina di lettura per il contatore, se non è inclusa.", min: 300, max: 1500, step: 10, wert: 450, einheit: "€" }
    ],
    berechne(w) {
      const ERTRAG = { balkon: 600, schraeg: 850 };      // kWh pro Jahr nach Süden: Set mit rund 900 Watt Modulen und 800-Watt-Wechselrichter
      const RICHTUNG = { sued: 1, ostwest: 0.85 };       // Osten oder Westen bringt rund 15 Prozent weniger
      const ertrag = ERTRAG[w.ort] * RICHTUNG[w.richtung];
      const r = ertrag / w.verbrauch;
      // Anteil, den ihr selbst nutzt: Je mehr ihr im Verhältnis zum Ertrag verbraucht, desto mehr (HTW Berlin, C.A.R.M.E.N., Verbraucherzentrale NRW)
      const anteil = Math.min(0.85, Math.max(0.3, 0.45 - 0.29 * Math.log(r / 0.375)));
      const ohne = ertrag * anteil;
      // Mit Speicher (rund 2 kWh) nutzt ihr mehr selbst. Den Zuwachs haben wir aus dem Stecker-Solar-Simulator der HTW Berlin abgeleitet
      // (900 Watt Module, 800 Watt, ohne Speicher und mit 2.000 Wh). Der Speicher braucht selbst rund 4 Watt, also 35 kWh im Jahr (smartzone.de)
      const mitSpeicher = w.speicher > 0;
      const plus = mitSpeicher ? Math.max(0, 0.8 - 0.44 * Math.pow(r, 1.21) + 0.3 * Math.log(r)) : 0;
      const selbst = mitSpeicher ? Math.max(0, ertrag * Math.min(0.95, anteil + plus) - 35) : ohne;
      // Was der Speicher allein bringt. Wir vergleichen mit zehn Jahren, so lange rechnet die HTW Berlin mit einem Akku
      const mehrEuro = (selbst - ohne) * w.strom;
      const jahre = mehrEuro > 0 ? w.speicher / mehrEuro : Infinity;
      const runde = x => (Math.round(x / 10) * 10).toLocaleString("it-IT");
      return {
        minutenProWoche: 0,
        euroProMonat: (selbst * w.strom) / 12,
        extra: !mitSpeicher
          ? `I pannelli producono circa ${runde(ertrag)} kWh all’anno. Di questi ne usate voi circa ${runde(selbst)} kWh, il resto va in rete.`
          : `I pannelli producono circa ${runde(ertrag)} kWh all’anno. Con la batteria così comprate circa ${runde(selbst)} kWh di corrente in meno, senza batteria sarebbero circa ${runde(ohne)} kWh. ` +
            (mehrEuro <= 0 ? "Con il vostro consumo una batteria non aggiunge nulla, perché la corrente la usate quasi tutta voi anche senza."
              : jahre <= 10 ? `La batteria da sola rende circa ${Math.round(mehrEuro)} € all’anno e si ripaga dopo circa ${Math.round(jahre)} anni.`
              : "Da voi la batteria da sola impiegherebbe più di dieci anni a ripagarsi. Non conviene quasi."),
        vorherTitel: "Senza kit da balcone",
        vorher: [
          "Ogni kilowattora lo compri dal fornitore",
          "Frigorifero, router e standby vanno tutto il giorno in bolletta",
          `Circa ${runde(w.verbrauch * w.strom)} € di corrente all’anno`
        ],
        nachher: mitSpeicher ? [
          "Di giorno la corrente solare arriva in casa dalla presa",
          "Quello che avanza carica la batteria, che usate la sera e di notte",
          "La configuri e la registri una volta, poi va da sola"
        ] : [
          "Di giorno la corrente solare arriva in casa dalla presa",
          "Quello che è acceso usa prima la corrente tua",
          "Lo registri una volta, poi va da solo"
        ]
      };
    },
    annahmen: "Faccio il calcolo con un kit come quelli qui: due pannelli con circa 900 watt in tutto e un inverter da 800 watt. Al prezzo d’acquisto aggiungi il supporto, che con questi kit non è incluso. In verticale su un balcone esposto a sud un kit così produce circa 600 kWh all’anno, inclinato circa 850 kWh. Stiftung Warentest nel 2025 ha calcolato per i kit testati 600-720 kWh sulla ringhiera e 860-1.020 kWh su un tetto di esempio, il SolarZentrum Berlin e la HTW Berlin (un’università di Berlino) arrivano a valori simili. Verso est o ovest conto il 15 per cento in meno (HTW Berlin). Quanto ne usate voi dipende dal vostro consumo: chi consuma poco ne usa circa un terzo, una famiglia poco più della metà. Questo corrisponde alle simulazioni della HTW Berlin e di C.A.R.M.E.N. e a un esempio della Verbraucherzentrale NRW. La corrente che non usate la conto 0 €. Con la batteria conto con una da circa 2 kWh, grandi così sono le batterie qui. Quanta corrente in più usate voi con lei l’ho calcolato per molti consumi con il simulatore per impianti solari plug-in della HTW Berlin, e ne ho ricavato una formula. Il simulatore tiene già conto delle perdite di carica e scarica. Tolgo 35 kWh all’anno, perché la batteria stessa consuma qualche watt giorno e notte: per lo Zendure smartzone.de ha misurato circa 4 watt. Conto con due pannelli. Con quattro pannelli una batteria grande rende di più, questo il calcolatore non lo mostra. Se la batteria da sola conviene lo confronto con dieci anni, perché è la durata con cui la HTW Berlin calcola una batteria. In Svizzera sono ammessi solo 600 watt, lì un kit produce un po’ meno, ma per la corrente immessa in rete c’è un piccolo compenso. L’ombra non la considero, il risultato è un valore approssimativo." + STROM_QUELLEN
  },
  sparduschkopf: {
    mit: "un soffione a risparmio",
    felder: [
      { id: "warm", label: "Come si scalda l’acqua della vostra doccia?", typ: "auswahl", wert: "heizung",
        optionen: [
          { wert: "heizung", label: "Con il riscaldamento, per esempio a gas" },
          { wert: "strom", label: "Con la corrente (scaldabagno istantaneo, boiler)" }
        ] },
      { id: "jetzt", label: "Quanta acqua fa passare adesso il tuo soffione?", hinweis: "Lascia scorrere la doccia per 30 secondi in un secchio e moltiplica i litri per due.", min: 9, max: 20, step: 0.5, wert: 12, einheit: "litri al minuto" },
      { id: "duschen", label: "Quante docce si fanno da voi a settimana?", hinweis: "Tutti insieme: se due persone fanno la doccia quattro volte ciascuna, sono 8.", min: 1, max: 35, step: 1, wert: 8, einheit: "× a settimana" },
      { id: "minuten", label: "Quanto scorre l’acqua durante la doccia?", min: 2, max: 20, step: 1, wert: 8, einheit: "minuti" }
    ],
    berechne(w) {
      const NEU = 8.5;                                  // Liter pro Minute, die drei Modelle liegen im Test bei 8,2 bis 8,8
      const KWH_PRO_LITER = 0.03;                       // Duschwasser von kalt auf etwa 37 Grad bringen
      const ENERGIE = { heizung: 0.12, strom: 0.37 };   // € pro kWh
      const WASSER = 0.004;                             // Wasser und Abwasser, € pro Liter
      const literJahr = (w.jetzt - NEU) * w.minuten * w.duschen * 52;
      const gerundet = Math.round(literJahr / 100) * 100;
      return {
        minutenProWoche: 0,
        euroProMonat: (literJahr * (KWH_PRO_LITER * ENERGIE[w.warm] + WASSER)) / 12,
        extra: `Sono circa ${gerundet.toLocaleString("it-IT")} litri di acqua calda in meno all’anno.`,
        vorherTitel: "Vecchio soffione",
        vorher: [
          `Circa ${Math.round(w.jetzt * w.minuten)} litri di acqua calda a doccia`,
          w.warm === "strom" ? "Ogni litro viene scaldato con la corrente" : "Il riscaldamento scalda ogni litro",
          "Paghi acqua e fognatura per ogni litro"
        ],
        nachher: [
          `Circa ${Math.round(NEU * w.minuten)} litri a doccia`,
          "Doccia lunga e calda uguale",
          "Avvitato da te in pochi minuti"
        ]
      };
    },
    annahmen: "Confronto il tuo soffione attuale con un soffione a risparmio che fa passare 8,5 litri al minuto. Tanto fanno passare i tre modelli qui nel test di Stiftung Warentest, da 8,2 a 8,8 litri. I soffioni più vecchi fanno passare spesso da 10 a 15 litri al minuto, io parto da 12. Per portare un litro d’acqua della doccia da fredda a circa 37 gradi servono circa 0,03 kWh. Per la corrente calcolo 37 centesimi al kWh (Associazione tedesca dell’energia e dell’acqua BDEW, agosto 2026), per il riscaldamento il prezzo del gas di circa 12 centesimi (Ufficio federale di statistica tedesco e BDEW, 2026). Acqua e fognatura costano insieme circa 4 € al metro cubo, cioè 0,4 centesimi al litro. Tutti i prezzi valgono per la Germania, il risultato è un valore indicativo. Tempo non ne risparmi: fai la doccia tanto quanto prima."
  },
  thermostate: {
    mit: "valvole termostatiche smart",
    preisLabel: "Quanto costa una valvola?",
    preisHinweis: "Il prezzo attuale lo vedi su Amazon. Lo moltiplico per il numero dei tuoi termosifoni.",
    kaufpreis: w => w.preis * w.heizkoerper + w.zentrale,
    felder: [
      { id: "heizkosten", label: "Quanto paghi all’anno per il riscaldamento?", hinweis: "È scritto nel tuo conteggio delle spese di riscaldamento.", min: 200, max: 3000, step: 50, wert: 900, einheit: "€ all’anno", schnitt: [1250, 1750, 1950, 2200] },
      { id: "bisher", label: "Come scaldi adesso?", typ: "auswahl", wert: "manchmal",
        optionen: [
          { wert: "durch", label: "Resta quasi sempre acceso" },
          { wert: "manchmal", label: "A volte lo abbasso" },
          { wert: "immer", label: "Lo abbasso sempre io" }
        ] },
      { id: "abrechnung", label: "Come paghi il riscaldamento?", typ: "auswahl", wert: "eigen",
        optionen: [
          { wert: "eigen", label: "Riscaldamento autonomo, es. caldaia a gas" },
          { wert: "zentral", label: "Centralizzato con conteggio" }
        ] },
      { id: "heizkoerper", label: "Quanti termosifoni vuoi attrezzare?", min: 1, max: 12, step: 1, wert: 4, einheit: "pezzi" },
      { id: "zentrale", label: "Quanto costa la centralina?", hinweis: "Se hai già una centralina adatta, imposta 0\u00a0€.", min: 0, max: 150, step: 5, wert: 50, einheit: "€" }
    ],
    berechne(w) {
      // anteil = gesparte Heizkosten, drehen = wie oft du bisher selbst drehst (1 = zweimal am Tag)
      const PROFILE = {
        durch: { anteil: 0.12, drehen: 0, name: "Riscaldamento sempre acceso", vorher: [
          "Scalda anche quando non c’è nessuno",
          "Quando esci ti dimentichi di abbassare",
          "A fine mese paghi per una casa vuota"
        ] },
        manchmal: { anteil: 0.08, drehen: 0.5, name: "Abbassarlo da solo", vorher: [
          "A volte te ne ricordi, a volte no",
          "La sera torni in una casa fredda",
          "Poi ci vuole un po’ prima che torni caldo"
        ] },
        immer: { anteil: 0.04, drehen: 1, name: "Abbassarlo da solo", vorher: [
          "Ogni mattina abbassare ogni termosifone",
          "La sera torni in una casa fredda",
          "Poi ci vuole un po’ prima che torni caldo"
        ] }
      };
      const p = PROFILE[w.bisher];
      const heizkostenWeniger = w.heizkosten * p.anteil * (w.abrechnung === "zentral" ? 0.6 : 1);
      return {
        // Ein Thermostat von Hand drehen dauert etwa 15 Sekunden, zweimal am Tag
        minutenProWoche: p.drehen * w.heizkoerper * 2 * 7 * 0.25,
        // Batterien: etwa 1 € pro Thermostat und Jahr
        euroProMonat: (heizkostenWeniger - w.heizkoerper) / 12,
        extra: `Sono circa ${Math.round(heizkostenWeniger)} € di spese di riscaldamento in meno all’anno, meno circa ${w.heizkoerper} € di batterie. E ogni giorno torni in una casa calda.`,
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Impostare una volta un programma di riscaldamento per la settimana",
          "Caldo poco prima che torni a casa",
          "Abbassato finché sei fuori"
        ]
      };
    },
    annahmen: "Con un programma di riscaldamento risparmi in media circa il 10% delle spese di riscaldamento (co2online, Agenzia federale per l’ambiente). Se il tuo riscaldamento finora resta quasi sempre acceso, calcolo il 12%; se a volte lo abbassi da solo, l’8%; e se lo abbassi sempre, il 4%. Per confronto: ogni grado in meno fa risparmiare circa il 6% di energia. Le batterie costano circa 1\u00a0€ per valvola all’anno, e lo tolgo. Abbassare e rialzare a mano un termosifone richiede circa 15 secondi, due volte al giorno. Questo tempo lo risparmi se finora giri tu le manopole. I numeri sotto il cursore delle spese di riscaldamento: quanto è grande in media un appartamento in Germania (Ufficio federale di statistica, microcensimento 2022), moltiplicato per il costo di un riscaldamento a gas secondo l’Heizspiegel 2026 di co2online (anno di conteggio 2025), circa 17\u00a0€ per m² all’anno. Sono circa 1.250\u00a0€ per 1 persona, 1.750\u00a0€ per 2, 1.950\u00a0€ per 3 e 2.200\u00a0€ per 4 o più persone. Con una pompa di calore è molto meno, con il teleriscaldamento un po’ di più. Per le valvole con centralina, il suo prezzo si aggiunge una volta. Con un riscaldamento centralizzato in un condominio solo una parte dei costi viene ripartita in base al consumo: dal 50 al 70% in Germania, almeno il 55% in Austria e di solito dal 50 al 70% in Svizzera. Se scegli „Centralizzato con conteggio“, conto quindi solo il 60% del risparmio."
  }
};
