/*
  ==========================================================
  ITALIENISCHE FASSUNG VON produkte.js (für myle.life/it/)
  ==========================================================
  Gleicher Aufbau wie produkte.js: dieselben Produkte, Modelle, Preise und Links.
  Nur die Texte sind auf Italienisch. Wenn sich in produkte.js etwas ändert (neues Modell,
  neuer Text), muss es hier genauso geändert werden. Was die Felder bedeuten, steht in produkte.js.
*/

// Amazon-Links: Steht in einstellungen.js schon deine Partner-ID für amazon.it (partnerIdShop), führt jeder Link in den italienischen Amazon-Shop: direkt zum Produkt, wenn unten in ASIN eine Produktnummer steht, sonst zur Suche.
// Bis dahin bleibt es bei derselben Suche wie auf den deutschen Seiten bei amazon.de, mit englischer Oberfläche (amazon.de hat keine italienische Oberfläche).
// Der zweite Text bei amazon(...) ist die Suche auf Italienisch für amazon.it, wo die deutsche Suche nicht passt.
const AMAZON_LAND = /^[a-z0-9-]+-\d\d$/i.test(SEITE.partnerIdShop || "") && !/^DEINPARTNERTAG/i.test(SEITE.partnerIdShop) ? SEITE.amazonShop : "";
// Amazon-Produktnummern (ASIN) bei amazon.it, nach dem deutschen Suchtext beim jeweiligen Link.
// Fehlt ein Produkt hier, wurde es bei amazon.it nicht gefunden, dann führt der Link zur Suche.
const ASIN = {
  "bulelink zenith g10": "B0F13KXRG8",
  "philips hue starter set bridge pro e27": "B0FJYBSW14",
  "philips hue essential starter set e27": "B0FJXZJ9N7",
  "wiz a60 e27 color": "B0FJ8WNFDN",
  "philips hue white and color ambiance e27": "B0FJ8TQFGP",
  "midea portasplit": "B0D3PP64JS",
  "midea portasplit cool": "B0GXDWTFR5",
  "bosch cool 4000": "B0BXT5H4FC",
  "ariston mobis plus 10": "B094KYVY41",
  "black decker bxac9000e": "B07PQ8X5MS",
  "moulinex clickchef hf4568": "B082Q2VXRZ",
  "moulinex companion xl hf8401": "B0DZN8MRXY",
  "mysoda woody wassersprudler": "B095KP5P2D",
  "sodastream crystal 3.0": "B0BLSCTLBB",
  "bosch serie 2 mums2ew00": "B08DHZL8R2",
  "silikon stretchdeckel 12 stück rund eckig": "B0875R9NYP",
  "kedoyoy reinigungsbürste": "B0D3STRLBD",
  "hoto electric spin scrubber": "B0CPXQ4XQK",
  "bomann tsg 7405": "B0DPX186Z2",
  "duravit 3jet 110 minusflow": "B0BBHST8BZ",
  "ecovacs deebot t80 omni": "B0DZ661PGD",
  "ecovacs deebot t90 pro omni": "B0GK1RD2T7",
  "mova z60 ultra roller complete": "B0GTVD5WGW",
  "ecovacs deebot t90s pro omni": "B0H94KQLMJ",
  "roborock saros 20 flow complete": "B0H83J9FWG",
  "ecovacs deebot x12s omnicyclone": "B0H98Y7FCY",
  "mova v50 ultra complete": "B0GWJY9SLX",
  "dreame l40s pro ultra": "B0DY8V59LY",
  "dreame x60 pro ultra complete": "B0GSWYM8Q2",
  "roborock saros 20": "B0G4NC8KN7",
  "roborock q10 s5+": "B0DWK6P2GH",
  "roborock q7 l5+": "B0DWMLMRWQ",
  "philips dual basket na352": "B0D4Q8QFTH",
  "tefal dual easy fry grill ey905d": "B0CW52TT95",
  "cosori twinfry 10 l": "B0DTTTWYQT",
  "ninja foodi max dual zone af400eu": "B09ZYLM43B",
  "ninja double stack xl sl400eu": "B0CZY23DYB",
  "cosori turbo tower pro smart": "B0DPPT99LJ",
  "salcar trv801w": "B0CDZPB8RZ",
  "eurotronic comet wifi": "B08H8PTDW1",
  "fritz smart thermo 302": "B0DFWXY3VY",
  "shelly trv heizkörperthermostat wlan": "B09RPVRQ3F",
  "aqara w600 heizkörperthermostat": "B0G7YBCW8K",
  "homematic ip evo heizkörperthermostat": "B08YDVCBY9",
  "rowenta x-force flex 13.60 allergy": "B0CYCHTGKC",
  "bosch unlimited 7 bss715carp": "B0BW15D2FS",
  "bosch unlimited 10 bks1041rhf": "B0DB8QB2GW",
  "panasonic sr-da152 reiskocher": "B0FX5HM1ZP",
  "cosori reiskocher crc-r501": "B0C5JL8Z7B",
  "yum asia bamboo reiskocher induktion": "B07WHD5P27",
  "lékué elastische deckel": "B084DRTSDK",
  "kindle 2026": "B0G4SHPH5K",
  "kindle paperwhite 2026": "B0GV5YVVCD",
  "kindle colorsoft 2026": "B0GV642G9D",
  "kobo clara bw": "B0CZXYV8GT",
  "kobo libra colour": "B0CZXX465Z",
  "pocketbook verse pro": "B0CGVXDRGP",
  "pocketbook era color": "B0D1Y883G2",
  "hisense wd5s1045bw waschtrockner": "B0BXFPSKNF",
  "cosori dual basket 8,5 l": "B0DJFJJ56B",
  "bosch smart home heizkörperthermostat ii +m": "B0DHGSL6FC",
  "gastroback 42507 reiskocher": "B0009KA4CA",
  "siemens eq500 classic tp511e19": "B0F4RFCH4P",
  "nivona nicr 790": "B09VLKTLFF",
  "bosch serie 4 mum5xw20": "B083YCYMW4",
  "beta noble ölsprüher": "B0G1TKXGBV"
};
const amazon = (suche, landSuche) => AMAZON_LAND
  ? (ASIN[suche]
    ? `https://${AMAZON_LAND}/dp/${ASIN[suche]}?tag=${SEITE.partnerIdShop.trim()}`
    : `https://${AMAZON_LAND}/s?k=${encodeURIComponent(landSuche || suche).replace(/%20/g, "+")}&tag=${SEITE.partnerIdShop.trim()}`)
  : `https://www.amazon.de/s?k=${encodeURIComponent(suche).replace(/%20/g, "+")}&tag=DEINPARTNERTAG-21&language=en_GB`;

const PRODUKTE = [
  {
    id: "saugroboter",
    name: "Robot aspirapolvere lavapavimenti",
    kurzname: "un robot aspirapolvere lavapavimenti",
    kategorie: "Casa",
    symbol: "🤖",
    bild: "",
    kurz: "Un robot che aspira casa tua da solo e, se vuoi, lava anche i pavimenti. Dopo torna alla sua base. La base lo svuota e, nei robot lavapavimenti, lava anche il rullo o i mop.",
    warum: "Il bello lo sanno in pochi: nell’app imposti una programmazione, e il robot pulisce mentre sei al lavoro. Ogni giorno torni in una casa pulita senza dover fare quasi più nulla. Per me, dopo 14 anni, è ancora un enorme salto di qualità della vita.",
    statt: "Invece di aspirapolvere con filo e mocio",
    nutzen: "Pulisce mentre sei al lavoro.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 5, nachher: 1 },
    fuer: [
      "Di giorno sei fuori casa",
      "Hai animali, bambini o molti pavimenti duri",
      "Preferisci passare il tuo tempo con qualcosa di più bello che aspirare e lavare i pavimenti"
    ],
    nachteile: [
      "Le scale non le fa. Se vivi su due piani, lo porti su tu",
      "Non funziona del tutto senza di te: ogni qualche settimana cambi il sacchetto e, con un robot lavapavimenti, rabbocchi anche l’acqua pulita e svuoti quella sporca"
    ],
    erfahrung: {
      titel: "La mia esperienza dopo 14 anni",
      bild: "", bildText: "Foto: tu con il tuo robot aspirapolvere lavapavimenti",
      text: "Uso robot aspirapolvere da 14 anni e da allora non ho quasi mai più dovuto passare l’aspirapolvere o lavare i pavimenti da solo. Il trucco più importante: impostare una programmazione. Così pulisce mentre lavoro, e ogni sera torno in una casa pulita."
    },
    gruppen: [
      { name: "Con rullo lavante", text: "Un rullo lava il pavimento e, mentre si muove, viene risciacquato di continuo con acqua pulita. Così raccoglie subito l’acqua sporca e deve tornare meno spesso alla base per essere lavato. In compenso, in molti modelli arriva meno vicino ai bordi e negli angoli." },
      { name: "Con mop rotanti", text: "Due mop rotondi girano sul pavimento. In molti modelli uno dei due esce di lato e così pulisce più a fondo bordi e angoli. In compenso tendono a spargere l’acqua sporca, perciò il robot torna più spesso alla base a lavarli. Sui tappeti solleva i mop o li lascia nella base." },
      { name: "Solo aspirazione", text: "La scelta più economica, se lavare i pavimenti non è così importante per te, per esempio con molti tappeti. La base lo svuota. Ha sì un panno semplice, ma per lavare bene i pavimenti devi ancora farlo tu.", ohne: "wischen" }
    ],
    modelle: [
      {
        gruppe: "Con rullo lavante",
        stufe: "Economico", spanne: "fino a 400 €",
        name: "ECOVACS DEEBOT T80 OMNI", preis: 349, preisText: "circa da 335 a 350 €",
        punkte: [
          "La base lo svuota e lava il rullo con acqua calda",
          "Lava a fondo con un rullo che si solleva sui tappeti",
          "Si orienta col laser, e i capelli si avvolgono appena intorno alla spazzola",
          "Voto 2,6 su smarthomeassistent.de, rapporto qualità-prezzo 2,0"
        ],
        fuer: "Per te se vuoi aspirare e lavare, guardi al prezzo e hai soprattutto pavimenti duri.",
        hinweis: "Pulisce peggio gli angoli, perché la spazzola laterale non esce. Il rullo si solleva solo di 10 mm, e nel test si è bloccato sui tappeti a pelo alto.",
        link: amazon("ecovacs deebot t80 omni"),
        alternativen: [
          { name: "ECOVACS DEEBOT T90 PRO OMNI", preis: 477, text: "Un po’ più caro e nel complesso migliore su smarthomeassistent.de (voto 2,3).", link: amazon("ecovacs deebot t90 pro omni") }
        ]
      },
      // amazon.it (Stand 09.11.2026): Den MOVA Z60 Ultra Roller Complete (B0GTVD5WGW) gibt es nicht mehr neu zum normalen Preis. Die Buy Box ist
      // gebraucht (Amazon Seconda mano, 548,64 €), neu gibt es nur ein Angebot für 1.004,95 € (am 01.11. neu bei Amazon 575,06 €). Darum übernimmt
      // der T90S PRO OMNI, bisher „Auch gut“ auf dieser Karte, wie in Teil 11 für de geplant. Der Z60 kommt zurück, sobald er neu zum normalen Preis
      // lieferbar ist (verfuegbarkeit-15). T90S B0H94KQLMJ (Bianco): Buy Box, Verkauf und Versand Amazon, 707,97 €, nach Zürich lieferbar, darum preis 708.
      {
        gruppe: "Con rullo lavante",
        stufe: "Fascia media", spanne: "da 400 a 750 €",
        name: "ECOVACS DEEBOT T90S PRO OMNI", preis: 708, empfohlen: true,
        punkte: [
          "Voto 1,8 su smarthomeassistent.de, con un rapporto qualità-prezzo molto buono (voto 1,0)",
          "Nel test lava molto bene (voto 1,0), con un rullo che viene risciacquato di continuo con acqua pulita mentre si muove",
          "La base lo svuota, lava il rullo con acqua calda e lo asciuga",
          "Sui tappeti solleva il rullo di 15 mm e lo copre"
        ],
        fuer: "Per la maggior parte delle case con pavimenti duri e tappeti bassi, anche con animali. Secondo me è qui che hai di più per i tuoi soldi.",
        hinweis: "Negli angoli pulisce male, perché la spazzola laterale non esce. Nei test evitava i passaggi stretti, e su smarthomeassistent.de si è bloccato sui tappeti a pelo alto e ha evitato i tappeti neri.",
        link: amazon("ecovacs deebot t90s pro omni")
      },
      {
        gruppe: "Con rullo lavante",
        stufe: "Fascia alta", spanne: "da 750 €",
        name: "ECOVACS DEEBOT X12S OmniCyclone", preis: 999,
        punkte: [
          "Voto 1,7 su smarthomeassistent.de, dove lava molto bene (voto 1,0)",
          "Nel test ha riconosciuto tutti gli ostacoli (53 su 53) e si orienta bene (voto 1,6)",
          "La base lo svuota senza sacchetti, così non devi più comprarne",
          "Nel test i capelli non si sono aggrovigliati né nella spazzola principale né in quella laterale"
        ],
        fuer: "Per te se hai soprattutto pavimenti duri o tappeti a pelo corto e non vuoi più comprare sacchetti.",
        hinweis: "Su smarthomeassistent.de si è bloccato più volte sui tappeti a pelo lungo, e negli angoli e nelle fughe puliva solo in modo discreto. Lì il T90S PRO OMNI, più economico, ottiene quasi lo stesso voto complessivo (1,8).",
        link: amazon("ecovacs deebot x12s omnicyclone")
      },
      {
        gruppe: "Con mop rotanti",
        stufe: "Economico", spanne: "fino a 600 €",
        name: "Dreame L40s Pro Ultra", preis: 499, empfohlen: true,
        punkte: [
          "Voto 2,2 su smarthomeassistent.de, con un rapporto qualità-prezzo molto buono (voto 1,4)",
          "Nel test lava molto bene (voto 1,0), anche lungo i bordi",
          "La base lo svuota, lava i mop e li asciuga",
          "Nel test raccoglie bene i capelli"
        ],
        fuer: "Per case con molti angoli e bordi, se vuoi lavare a fondo e guardi al prezzo.",
        hinweis: "Su smarthomeassistent.de sui tappeti si orienta peggio, soprattutto su quelli a pelo lungo (voto 2,8 per la navigazione), e la batteria dura meno della media.",
        link: amazon("dreame l40s pro ultra")
      },
      {
        gruppe: "Con mop rotanti",
        stufe: "Fascia alta", spanne: "da 900 €",
        name: "Dreame X60 Pro Ultra Complete", preis: 1499, preisText: "circa da 950 a 1.500 €",
        punkte: [
          "Miglior modello con mop rotanti su smarthomeassistent.de (voto 1,6 in un nuovo test dopo un aggiornamento del firmware)",
          "Aspira con molta forza (voto 1,0) e lava molto bene (voto 1,2)",
          "Secondo il produttore fa uscire un mop fino a 18 cm e supera soglie doppie fino a 10 cm. Nei test ha superato soglie alte circa 4-5 cm",
          "La base lava i mop con acqua a 100 °C"
        ],
        fuer: "Per chi tiene allo stesso modo all’aspirazione e al lavaggio e ha molti angoli e bordi.",
        hinweis: "Ogni tanto commette piccoli errori di navigazione.",
        link: amazon("dreame x60 pro ultra complete")
      }
    ],
    fragen: [
      { f: "In base a quali test scegli i robot?", a: "Per i robot aspirapolvere lavapavimenti mi baso sui test approfonditi di smarthomeassistent.de. Lì ogni robot affronta le stesse prove, da tappeti e capelli fino a ostacoli e soglie delle porte. I loro voti funzionano come i voti scolastici tedeschi: 1,0 è il migliore. Consiglio i modelli che lì ottengono i risultati migliori nella loro fascia di prezzo, e ci aggiungo la mia esperienza di 14 anni. Se un robot viene testato di nuovo dopo un aggiornamento, per esempio perché la navigazione è migliorata, per me conta il test più recente." },
      { f: "Mi serve la funzione lavaggio?", a: "Con molti pavimenti duri come piastrelle, laminato o parquet, assolutamente sì: il pavimento resta pulito e il secchio non ti serve quasi più. Se hai soprattutto moquette, o ti piace comunque lavare da solo, basterebbe un robot che aspira e basta. Al momento però su amazon.it non ne trovo nessuno che convinca nei test. I robot lavapavimenti di questa pagina possono anche solo aspirare: basta impostarlo nell’app." },
      { f: "Rullo lavante o mop rotanti: cosa è meglio?", a: "Tutti e due possono lavare molto bene: nel test l’ECOVACS DEEBOT T90S PRO OMNI con rullo e il Dreame L40s Pro Ultra con mop prendono entrambi il voto migliore nel lavaggio, 1,0. Il rullo raccoglie subito l’acqua sporca e quindi deve tornare meno spesso alla base per essere lavato. I mop arrivano meglio lungo i bordi e negli angoli, ma tendono a spargere l’acqua sporca. Se hai molti angoli, nicchie e spigoli di mobili, prendi i mop. Se hai soprattutto superfici libere, un rullo va bene." },
      { f: "Si blocca su cavi o calzini?", a: "I modelli con telecamera di solito riconoscono cavi, calzini e scarpe e li aggirano, molti anche gli animali. I modelli economici senza telecamera passano più facilmente sopra un cavo o restano bloccati: in quel caso metti un attimo in ordine prima. Un groviglio di cavi sotto la scrivania conviene comunque sistemarlo una volta per tutte, con qualsiasi modello." },
      { f: "Posso avviarlo quando non sono a casa?", a: "Sì, ed è proprio questo il trucco. Nell’app crei una programmazione, per esempio dal lunedì al venerdì alle 9. Io faccio così da anni. Puoi anche avviarlo dal telefono quando sei fuori." },
      { f: "Supera le soglie delle porte e i bordi dei tappeti?", a: "La maggior parte dei modelli supera soglie fino a circa 2 cm, i modelli di punta come il Dreame X60 Pro Ultra Complete, nei test, anche circa 4-5 cm. Sui tappeti un robot lavapavimenti solleva i panni o il rullo, così non si bagna niente." },
      { f: "Cosa devo fare ancora io?", a: "Cambiare il sacchetto ogni qualche settimana e pulire ogni tanto la spazzola. Con un robot lavapavimenti in più: rabboccare l’acqua pulita e svuotare quella sporca appena te lo segnala. Però non lasciare l’acqua sporca ferma per giorni, altrimenti comincia a puzzare." },
      { f: "Quanto costa mantenerlo?", a: "Sacchetti, filtri, spazzole e mop o rullo si consumano. Secondo un calcolo dei costi di netzwelt.de, un robot aspirapolvere e lavapavimenti con base costa circa da 45 a 185 € all’anno, senza lavaggio circa da 25 a 120 €. La corrente aggiunge circa da 15 a 25 € all’anno, un po’ di più per le basi con acqua calda e asciugatura." },
      { f: "Funziona su più piani?", a: "Memorizza più mappe. La base però resta in un posto. Sull’altro piano lo porti tu, e svuotarsi può farlo solo quando torna alla base." },
      { f: "Quanto è rumoroso?", a: "Di solito più o meno come una conversazione, quindi meno di un aspirapolvere normale. E visto che lavora quando non ci sei, comunque non te ne accorgi. Solo la base è davvero rumorosa per qualche secondo mentre lo svuota." }
    ],
    quellen: [
      { name: "smarthomeassistent.de: classifica dei robot aspirapolvere (ottobre 2026)", text: "tutti i modelli testati, per voto complessivo" },
      { name: "smarthomeassistent.de: test dell’ECOVACS DEEBOT T80 OMNI (luglio 2026)", text: "voto 2,6" },
      { name: "smarthomeassistent.de: test dell’ECOVACS DEEBOT T90 PRO OMNI (agosto 2026)", text: "voto 2,3" },
      { name: "smarthomeassistent.de: test dell’ECOVACS DEEBOT T90S PRO OMNI (ottobre 2026)", text: "voto 1,8" },
      { name: "smarthomeassistent.de: test dell’ECOVACS DEEBOT X12S OmniCyclone (ottobre 2026)", text: "voto 1,7" },
      { name: "smarthomeassistent.de: test del Dreame L40s Pro Ultra (luglio 2026)", text: "voto 2,2" },
      { name: "smarthomeassistent.de: nuovo test del Dreame X60 Pro Ultra Complete (novembre 2026)", text: "voto 1,6 dopo un aggiornamento del firmware" },
      { name: "Altri test pratici", text: "tra cui homeandsmart.de, nextpit.de, notebookcheck.com, inside-digital.de, testsiegertv.com, vacuumwars.com, journaldugeek.com e cybershack.com.au" },
      { name: "netzwelt.de: calcolo dei costi dei robot aspirapolvere (febbraio 2026)", text: "costi di mantenimento all’anno" },
      { name: "Ufficio federale di statistica tedesco (Destatis): superficie abitativa per numero di componenti della famiglia", url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/Tabellen/tabelle-wo4-wohnflaeche.html", text: "microcensimento 2022, per le medie del calcolatore (pagina in tedesco)" },
      { name: "Dati dei produttori", text: "indicati in questa pagina con “secondo il produttore”" }
    ],
    rechner: "saugroboter",
    video: "saugroboter",
    profitipp: {
      titel: "Come configurarlo",
      text: "Prenditi un quarto d’ora una volta sola, poi va tutto da sé:",
      liste: [
        "Installa l’app e fai percorrere al robot tutta la casa una volta. Intanto disegna una mappa.",
        "Crea una programmazione, per esempio aspirare e lavare dal lunedì al venerdì alle 9.",
        "Segna i tappeti nell’app, così lì aspira soltanto e non lava."
      ]
    }
  },
  {
    id: "waschtrockner",
    name: "Lavasciuga",
    kurzname: "una lavasciuga",
    kategorie: "Casa",
    symbol: "🧺",
    bild: "",
    kurz: "Lavatrice e asciugatrice in un unico apparecchio. Lava e asciuga in un solo ciclo, e non devi nemmeno spostare il bucato bagnato.",
    warum: "La mattina il bucato dentro, imposti l’ora di fine, vai al lavoro. Quando torni è tutto lavato e asciutto. Niente più stendibiancheria in soggiorno, niente da stendere e ritirare. Molti apparecchi hanno anche un programma a vapore che distende le pieghe. Così i vestiti di tutti i giorni spesso non vanno più stirati per niente.",
    statt: "Invece di stendibiancheria e ferro da stiro",
    nutzen: "La mattina dentro, la sera lavato e asciutto.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 4, nachher: 1 },
    fuer: [
      "Non vuoi più lo stendibiancheria in casa",
      "Non hai spazio per lavatrice e asciugatrice una accanto all’altra",
      "Hai di meglio da fare che stirare"
    ],
    nachteile: [
      "Asciuga solo circa 6 kg alla volta, anche se nel cestello ne entrano 10. Se vuoi lavare e asciugare in un colpo solo, quindi, la riempi poco più della metà",
      "Lavare e asciugare insieme richiede tempo, con un carico pieno spesso 8 ore e più. Ma siccome lavora mentre sei fuori, quasi non te ne accorgi",
      "Asciugare costa corrente: con tre carichi a settimana sono circa 10\u00a0€ al mese"
    ],
    erfahrung: {
      titel: "La mia esperienza",
      bild: "", bildText: "Foto: la tua lavasciuga",
      text: "Ho una lavasciuga Haier e non voglio mai più farne a meno. La mattina metto dentro il bucato, e quando torno dal lavoro è lavato e asciugato. Non devo più nemmeno stirare: il programma a vapore i-⁠Refresh rinfresca i vestiti e soprattutto escono senza pieghe."
    },
    profitipp: {
      titel: "Così il bucato è pronto quando torni a casa",
      text: "A seconda dell’apparecchio il tasto si chiama “Ora di fine”, “Fine tra” o “Partenza ritardata”. Ecco come usarlo:",
      liste: [
        "La mattina metti il bucato, al massimo quanto riesce ad asciugare (di solito 6 kg)",
        "Scegli il programma “Lavaggio e asciugatura”",
        "Imposta l’ora di fine, per esempio le 18. Calcola da sola quando deve partire",
        "La sera il bucato è asciutto. Tiralo fuori presto, così resta bello liscio"
      ]
    },
    // Stand 01.11.2026: Keins dieser Modelle ist bei amazon.it lieferbar, darum zeigt die Seite diese Hinweiskarte statt der Modelle.
    // Wird eins lieferbar: keinModell löschen, seinen Link prüfen und die übrigen Modelle entfernen.
    keinModell: { stufe: "amazon.it", titel: "Al momento non disponibile", text: "Le lavasciuga che ti consiglierei (Hisense WD5S1045BW, Haier I-Pro Serie 7 Plus, Bosch Serie 6 WNG24442 e AEG Serie 9000 L9WEF80690) al momento su amazon.it non sono disponibili. Appena ci sarà una lavasciuga che posso consigliarti, la trovi qui. Nel frattempo ti aiutano a scegliere il calcolatore e le domande qui sotto." },
    modelle: [
      {
        stufe: "Economico", spanne: "fino a 550\u00a0€",
        name: "Hisense WD5S1045BW", preis: 490, preisText: "circa da 470 a 530\u00a0€",
        punkte: [
          "Lava 10,5 kg e asciuga 6 kg in un colpo solo",
          "Dosa il detersivo da sola, tu lo rabbocchi solo ogni tanto",
          "Con programma a vapore e app",
          "Molto buona nel test (93 punti su 100 su ETM Testmagazin, numero 10/2024)"
        ],
        fuer: "Per te se vuoi lavare e asciugare con un solo apparecchio e guardi al prezzo.",
        hinweis: "Per lavare e asciugare consuma più corrente e acqua dell’AEG con pompa di calore.",
        link: amazon("hisense wd5s1045bw waschtrockner", "hisense wd5s1045bw lavasciuga")
      },
      {
        stufe: "Fascia media", spanne: "da 550 a 900\u00a0€",
        name: "Haier I-Pro Serie 7 Plus (HWD100-BD14979U1)", preis: 650, preisText: "da circa 640\u00a0€", empfohlen: true,
        punkte: [
          "Lava 10 kg e asciuga 6 kg in un colpo solo",
          "Programma a vapore i-⁠Refresh: rinfresca i vestiti e distende le pieghe",
          "Con partenza programmata, controllabile anche dall’app",
          "Dosa da sola detersivo e ammorbidente"
        ],
        fuer: "Per la maggior parte delle famiglie. Il mio consiglio, perché ho anch’io una Haier e non voglio mai più farne a meno.",
        hinweis: "Lavare e asciugare un carico pieno richiede più di 8 ore.",
        link: amazon("haier i-pro serie 7 plus waschtrockner hwd100-bd14979u1", "haier i-pro serie 7 plus lavasciuga hwd100-bd14979u1"),
        alternativen: [
          { name: "Bosch Serie 6 WNG24442", preis: 800, text: "Il modello più vecchio WNG24440 della stessa serie era il consiglio qualità-prezzo di Stiftung Warentest, il più noto istituto di test per consumatori in Germania (voto 2,1, numero 11/2023). Lava 9 kg e asciuga 6 kg.", link: amazon("bosch serie 6 wng24442 waschtrockner", "bosch serie 6 wng24442 lavasciuga") }
        ]
      },
      {
        stufe: "Fascia alta", spanne: "da 1.000\u00a0€",
        name: "AEG Serie 9000 L9WEF80690", preis: 1100, preisText: "circa da 1.050 a 1.350\u00a0€",
        punkte: [
          "Asciuga con pompa di calore e così consuma meno corrente e acqua",
          "Lava 9 kg e asciuga 6 kg in un colpo solo",
          "Con programma a vapore per rinfrescare i capi",
          "Vincitrice del test di Stiftung Warentest su quattro lavasciuga (voto 2,0, numero 11/2023)"
        ],
        fuer: "Per te se fai molti bucati e vuoi risparmiare corrente nel lungo periodo. In cambio all’inizio paghi molto di più.",
        hinweis: "Lavare e asciugare un carico pieno richiede quasi 10 ore. Il test è già del 2023.",
        link: amazon("aeg l9wef80690 waschtrockner", "aeg l9wef80690 lavasciuga")
      }
    ],
    fragen: [
      { f: "Lavasciuga, o meglio lavatrice e asciugatrice separate?", a: "Due apparecchi fanno di più insieme: mentre l’asciugatrice va, la lavatrice lava già il carico successivo. In cambio ti serve il doppio dello spazio. Una lavasciuga sta dove ora c’è la tua lavatrice, e non devi mai spostare il bucato bagnato. È proprio questo che la rende così comoda. Se per una famiglia grande fai più bucati al giorno, due apparecchi sono la scelta migliore." },
      { f: "Quanto bucato riesce ad asciugare?", a: "Di solito circa 6 kg, anche se può lavarne 9 o 10. 6 kg sono per esempio una quarantina di magliette. Se vuoi lavare e asciugare in un colpo solo, metti dentro solo quanto riesce ad asciugare." },
      { f: "Davvero non devo più stirare?", a: "Per i vestiti di tutti i giorni di solito no. Un programma a vapore come i-⁠Refresh della mia Haier rinfresca i vestiti e distende le pieghe. L’unica cosa importante: tira fuori il bucato subito dopo l’asciugatura e piegalo, così resta liscio. Una camicia per un appuntamento importante magari la ripassi comunque col ferro." },
      { f: "Il bucato resta poi tutto il giorno nel cestello?", a: "Sì, ma asciutto. Con l’ora di fine parte così tardi da finire quando torni a casa. Fino ad allora il bucato resta asciutto nel cestello. Il bucato bagnato invece non lasciarlo lì per ore, altrimenti comincia a puzzare." },
      { f: "Quanto costa asciugare?", a: "Senza pompa di calore un’asciugatura consuma, a seconda dell’apparecchio, da poco più di 2 a 2,5 kWh di corrente. A 37 centesimi al kWh sono circa 80 centesimi. Con tre carichi a settimana arrivi a poco più di 10 € al mese. Un apparecchio con pompa di calore come l’AEG consuma meno corrente e acqua: Stiftung Warentest calcola per lui circa 760 € di costi di esercizio in meno in dieci anni rispetto agli apparecchi di Bosch e Siemens testati." },
      { f: "Cosa devo tenere pulito?", a: "Ogni tanto sciacqua il filtro dei pelucchi in basso vicino alla pompa e la vaschetta del detersivo, e pulisci la guarnizione in gomma dell’oblò. Una volta al mese un programma caldo a cestello vuoto la mantiene fresca." },
      { f: "Serve un allacciamento speciale?", a: "No. Le servono lo stesso attacco dell’acqua, lo stesso scarico e la stessa presa di una lavatrice. Quindi la metti semplicemente al suo posto." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test delle lavasciuga (numero 11/2023)", text: "quattro lavasciuga, vincitrice AEG L9WEF80690 (voto 2,0), consiglio qualità-prezzo Bosch WNG24440 (voto 2,1)" },
      { name: "ETM Testmagazin (numero 10/2024)", text: "Hisense WD5S1045BW molto buona, 93 punti su 100" },
      { name: "Stiftung Warentest: asciugatrice con aiuto per lo stiro (giugno 2007)", text: "il vapore fa risparmiare circa metà del tempo di stiro" },
      { name: "Associazione tedesca dei produttori di cosmetici e detersivi (IKW): dati sul bucato in Germania", url: "https://www.ikw.org/fileadmin/IKW_Dateien/Haushaltpflege_Bilder/Wissen/Informationsserie/WM/dateien/pdf/3_5.pdf", text: "circa 90 lavaggi a persona all’anno, per il calcolatore (in tedesco)" },
      { name: "Comunicato dell’IKW su come risparmiare lavando, asciugando e lavando i piatti (ottobre 2023)", url: "https://www.ikw.org/fileadmin/IKW_Dateien/downloads/Haushaltspflege/2023_10_01_Mit_7_Tipps_Geld_sparen.pdf", text: "210 lavaggi all’anno in una famiglia di quattro persone, per il calcolatore (in tedesco)" },
      { name: "ARERA: prezzo di riferimento per i clienti vulnerabili (ottobre-dicembre 2026)", url: "https://www.arera.it/comunicati-stampa/dettaglio/elettricita-maggior-tutela-373-nel-iv-trimestre-2026-per-i-clienti-vulnerabili", text: "43 centesimi al kWh tasse incluse per il cliente tipo, per il cursore del prezzo della corrente" },
      { name: "ElCom, Commissione federale dell’energia elettrica: newsletter 9/2025", url: "https://www.elcom.admin.ch/dam/it/sd-web/znXqHISH0pFP/Newsletter_09-2025_IT.pdf", text: "27,7 centesimi di franco al kWh per una famiglia tipo in Svizzera nel 2026, per il cursore del prezzo della corrente" },
      { name: "Dati dei produttori ed etichette energetiche UE", text: "capacità, durata dei programmi e consumi dei modelli" }
    ],
    rechner: "waschtrockner",
    video: "waschtrockner"
  },
  {
    id: "airfryer",
    name: "Friggitrice ad aria con due cestelli",
    kurzname: "una friggitrice ad aria",
    kategorie: "Cucina",
    symbol: "🍟",
    bild: "",
    kurz: "Una friggitrice ad aria con due cestelli. Da me ha sostituito soprattutto la padella e spesso anche il forno. In ogni cestello cuoce qualcosa di diverso, con temperatura e tempo propri, quasi senza olio. E dopo non hai praticamente niente da lavare.",
    warum: "Tutto dentro, premi Sync, e via sul divano. Non stai più accanto alla padella, perché l’apparecchio avvia ogni cestello in modo che pollo e verdure siano pronti nello stesso momento. Quando suona, la cena è pronta. E secondo me viene persino più buono: le verdure restano più croccanti e saporite, il pollo viene bello tenero. Dopo ti risparmi tutte le padelle e le pentole da lavare, perché non si attacca quasi niente e i cestelli vanno semplicemente in lavastoviglie.",
    statt: "Invece di padella e forno",
    nutzen: "Via sul divano, e dopo quasi niente da lavare.",
    spart: ["muehe", "zeit", "geld"],
    muehe: { vorher: 4, nachher: 1 },
    fuer: [
      "Spesso stai ai fornelli a girare carne o verdure in padella",
      "Dopo mangiato preferisci rilassarti invece di strofinare padelle e pentole",
      "Piatto principale e contorno devono essere pronti insieme",
      "Di solito cucini per due-cinque persone"
    ],
    nachteile: [
      "Occupa più spazio sul piano di lavoro di un apparecchio con un solo cestello. Se la tua cucina è piccola, scegli un modello con i cestelli uno sopra l’altro",
      "Ogni cestello di solito è più piccolo di un unico cestello grande. Se vuoi cuocere un pollo intero, ti serve un cestello grande",
      "Non va bene per piatti con tanto sugo o con pastella liquida. Per quelli ti servono ancora i fornelli o il forno"
    ],
    erfahrung: {
      titel: "La mia esperienza",
      bild: "", bildText: "Foto: la tua friggitrice ad aria",
      text: "Da quando ho la mia friggitrice ad aria non ho più usato le padelle. E tutto è più buono: le verdure sono più croccanti e hanno più sapore, il pollo viene perfettamente tenero ogni volta. In più non ho praticamente più niente da lavare. Non si attacca mai niente, i cestelli li metto semplicemente in lavastoviglie o alla fine li passo con un panno umido."
    },
    profitipp: {
      titel: "Così è tutto pronto nello stesso momento",
      text: "Sulla maggior parte degli apparecchi il tasto si chiama “Sync”, sulla Cosori Dual Basket “Sync Finish”. Ecco come usarlo:",
      liste: [
        "Cestello 1: per esempio cosce di pollo, 200\u00a0°C, 25 minuti",
        "Cestello 2: per esempio broccoli e peperoni, 190\u00a0°C, 12 minuti",
        "Premi Sync e avvia. Il cestello 2 aspetta e parte da solo più tardi",
        "Suona, ed è tutto pronto. Ora devi solo mangiare"
      ]
    },
    modelle: [
      {
        stufe: "Economico", spanne: "fino a 130\u00a0€",
        name: "Cosori Dual Basket 8,5 L", preis: 117, preisText: "circa da 110 a 130\u00a0€",
        punkte: [
          "Due cestelli da 4,25 litri, ognuno con temperatura e tempo propri",
          "Tasto “Sync Finish”: entrambi i cestelli sono pronti nello stesso momento",
          "Ti ricorda con un bip di scuotere",
          "“Buono” per Stiftung Warentest, il più noto istituto di test per consumatori in Germania (voto 2,3, numero 1/2025), all’epoca vincitrice del test tra gli apparecchi a due cestelli"
        ],
        fuer: "Per chi vuole due cestelli e guarda al prezzo.",
        link: amazon("cosori dual basket 8,5 l", "cosori dual basket 8,5 l")
      },
      {
        stufe: "Fascia media", spanne: "da 130 a 200\u00a0€",
        name: "Cosori Dual Blaze TwinFry 10 L", preis: 180, preisText: "circa da 170 a 200\u00a0€",
        punkte: [
          "Due cestelli da 5 litri ciascuno, o uno grande da 10 litri se togli il divisorio",
          "Tasto Sync: è tutto pronto nello stesso momento",
          "Ti manda un messaggio sul telefono tramite l’app appena il cibo è pronto",
          "Scalda dall’alto e dal basso, fino a 240\u00a0°C"
        ],
        fuer: "Per te se vuoi due cestelli uno accanto all’altro o ogni tanto ti serve un unico cestello grande da 10 litri.",
        hinweis: "Per motivi di sicurezza puoi avviarla solo direttamente sull’apparecchio, non dall’app.",
        link: amazon("cosori twinfry 10 l"),
        alternativen: [
          { name: "Ninja Foodi MAX Dual Zone (AF400)", preisText: "circa da 140 a 180\u00a0€", text: "Due cestelli affiancati, 9,5 litri in tutto, con Sync.", link: amazon("ninja foodi max dual zone af400eu") },
          { name: "Ninja Double Stack XL", preisText: "da circa 160\u00a0€", text: "Due cestelli uno sopra l’altro, occupa poco spazio sul piano di lavoro.", link: amazon("ninja double stack xl sl400eu") }
        ]
      },
      {
        stufe: "Fascia alta", spanne: "da 200\u00a0€",
        name: "Cosori Turbo Tower Pro Smart", preis: 279, preisText: "circa da 250 a 280\u00a0€", empfohlen: true,
        punkte: [
          "Vincitrice del test tra gli apparecchi a due cestelli di Stiftung Warentest (voto 2,2, numero 9/2026)",
          "Due cestelli uno sopra l’altro, 10,8 litri in tutto. Occupa meno spazio di due cestelli affiancati",
          "Tasto Sync: i due cestelli finiscono insieme, con app (VeSync)",
          "Cestelli con rivestimento in ceramica"
        ],
        fuer: "Per la maggior parte delle famiglie, soprattutto se il piano di lavoro è piccolo. Il mio consiglio: è la vincitrice del test tra gli apparecchi a due cestelli, e la uso io stesso.",
        hinweis: "Per motivi di sicurezza puoi avviarla solo direttamente sull’apparecchio, non dall’app.",
        link: amazon("cosori turbo tower pro smart")
      }
    ],
    fragen: [
      { f: "Sostituisce davvero la padella?", a: "Per me sì: da quando ho la mia friggitrice ad aria non ho più usato le padelle. Pollo, verdure, patate, pesce o salsicce vengono bene senza che tu stia ai fornelli, e senza schizzi di grasso. Per sughi, uova strapazzate o crêpe ti servono ancora fornello e padella." },
      { f: "Quanti piatti devo lavare dopo?", a: "Praticamente nessuno. Nella friggitrice ad aria non si attacca quasi niente. I cestelli li metti semplicemente in lavastoviglie o alla fine li passi velocemente con un panno umido. Tutte le padelle e le pentole da lavare te le risparmi." },
      { f: "È davvero più buono che in padella?", a: "Per me sì: le verdure sono più croccanti e hanno più sapore, il pollo viene tenero ogni volta. L’aria calda circola tutto intorno al cibo. Così si dora in fretta fuori e resta succoso dentro, senza stare immerso nel grasso." },
      { f: "Cosa fa esattamente il tasto Sync?", a: "Imposti temperatura e tempo per ogni cestello, per esempio pollo a 200\u00a0°C per 25 minuti e verdure a 190\u00a0°C per 12 minuti. Con Sync il cestello con il tempo più breve parte da solo più tardi. Così sono pronti entrambi nello stesso momento, e non c’è niente da tenere in caldo." },
      { f: "Ricevo un messaggio sul telefono o sull’orologio?", a: "Sul telefono sì, se l’apparecchio ha il Wi-Fi: il TwinFry, per esempio, ti avvisa tramite l’app gratuita VeSync appena il cibo è pronto. Se il tuo smartwatch mostra le notifiche del telefono, di solito vedi il messaggio anche lì. Gli apparecchi senza Wi-Fi si limitano a suonare." },
      { f: "Devo scuotere o mescolare a metà cottura?", a: "Non è necessario. Però patatine e verdure vengono croccanti in modo più uniforme se le scuoti una volta a metà cottura. La Dual Basket te lo ricorda con un bip. Le cosce di pollo puoi girarle una volta, così si dorano da tutte le parti." },
      { f: "Non basterebbe un apparecchio con un solo cestello?", a: "Se di solito prepari una sola cosa alla volta, sì, e di solito costa meno. Un esempio è la Cosori Clear Blaze da 6,2 litri con oblò. Due cestelli convengono appena piatto principale e contorno devono essere pronti insieme." },
      { f: "Sostituisce anche il forno?", a: "Per una-quattro porzioni quasi sempre. Patatine, verdure, pollo, pesce e panini precotti vengono perfino più in fretta. Per pizza, torte in teglia o una grande pasta al forno ti serve ancora il forno." },
      { f: "Fa davvero risparmiare corrente?", a: "Sì, soprattutto per quantità piccole. I cestelli sono piccoli e si scaldano in fretta, il preriscaldamento di solito non serve o dura solo pochi minuti. Secondo Stiftung Warentest (numero 9/2026), le friggitrici ad aria sono quasi due volte più veloci di un forno e consumano molta meno corrente." },
      { f: "Il rivestimento è sicuro?", a: "Per quanto se ne sa oggi, sì. Molti cestelli hanno un rivestimento antiaderente in PTFE, noto come Teflon. Secondo l’Istituto federale tedesco per la valutazione dei rischi (BfR), con un uso normale è sicuro. Può decomporsi solo da circa 360 °C, e una friggitrice ad aria resta ben al di sotto. Il PTFE però fa parte dei PFAS, che inquinano l’ambiente durante la produzione e lo smaltimento. Se preferisci farne a meno, scegli un apparecchio con rivestimento in ceramica senza PFAS. Cosori lo indica per esempio per la Turbo Tower Pro Smart. Con qualsiasi modello: niente forchette di metallo e niente prodotti abrasivi, così il rivestimento dura a lungo." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test delle friggitrici ad aria (numero 1/2025)", text: "Cosori Dual Basket 8,5 L “buono” (voto 2,3), all’epoca vincitrice tra gli apparecchi a due cestelli" },
      { name: "Stiftung Warentest: test delle friggitrici ad aria (numero 9/2026)", text: "Cosori Turbo Tower Pro Smart vincitrice tra gli apparecchi a due cestelli (voto 2,2), quasi due volte più veloce di un forno" },
      { name: "Istituto federale tedesco per la valutazione dei rischi (BfR): domande e risposte sulle pentole con rivestimento antiaderente in PTFE (dicembre 2018)", url: "https://www.bfr.bund.de/cm/343/ausgewaehlte-fragen-und-antworten-zu-geschirr-mit-antihaftbeschichtung-aus-ptfe-fuer-das-braten-kochen-und-backen.pdf", text: "sicuro con un uso normale, si decompone solo da circa 360 °C (in tedesco)" },
      { name: "Altri test", text: "tra cui netzwelt.de, homeandsmart.de, Tech Advisor e Que Choisir" },
      { name: "Öko-Institut, Öko-Test e inside-digital.de", text: "consumi di forno, fornelli, friggitrice e friggitrice ad aria, per il calcolatore" },
      { name: "ARERA: prezzo di riferimento per i clienti vulnerabili (ottobre-dicembre 2026)", url: "https://www.arera.it/comunicati-stampa/dettaglio/elettricita-maggior-tutela-373-nel-iv-trimestre-2026-per-i-clienti-vulnerabili", text: "43 centesimi al kWh tasse incluse per il cliente tipo, per il cursore del prezzo della corrente" },
      { name: "ElCom, Commissione federale dell’energia elettrica: newsletter 9/2025", url: "https://www.elcom.admin.ch/dam/it/sd-web/znXqHISH0pFP/Newsletter_09-2025_IT.pdf", text: "27,7 centesimi di franco al kWh per una famiglia tipo in Svizzera nel 2026, per il cursore del prezzo della corrente" },
      { name: "Dati dei produttori", text: "cestelli, capacità e funzioni dei modelli, “senza PFAS” secondo Cosori" }
    ],
    zubehoer: [
      { name: "Spruzzino per olio BETA NOBLE, 100 ml", text: "Con questo spruzzi pochissimo olio in modo uniforme su verdure, patate o pollo, invece di versarlo dalla bottiglia. Bottiglia in vetro ricaricabile, senza gas propellente. Va bene per olio d’oliva, olio di semi di girasole e anche per la padella.", link: amazon("beta noble ölsprüher", "beta noble spruzzino olio") }
    ],
    rechner: "airfryer",
    video: "airfryer"
  },
  {
    id: "thermostate",
    name: "Valvole termostatiche smart",
    kurzname: "valvole termostatiche smart",
    kategorie: "Casa",
    symbol: "🌡️",
    bild: "",
    kurz: "Vanno sui tuoi termosifoni al posto delle normali manopole e scaldano secondo il tuo programma. Le comandi dall’app o direttamente sull’apparecchio.",
    warum: "I vantaggi sono evidenti: poco prima che torni a casa, l’appartamento è già caldo. Mentre sei al lavoro, le valvole abbassano il riscaldamento da sole. Così semplicemente non puoi più dimenticarti di abbassarlo, e risparmi soldi. Ti basta impostare una volta un programma di riscaldamento per la settimana. E le valvole in sé di solito costano poco.",
    statt: "Invece di alzare e abbassare il riscaldamento a mano",
    nutzen: "Al caldo quando torni. Abbassato quando sei fuori.",
    spart: ["geld", "muehe"],
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Di giorno sei spesso fuori, per esempio al lavoro",
      "A volte ti dimentichi di abbassare il riscaldamento",
      "La sera vuoi tornare in una casa calda",
      "Sei in affitto: le avviti da solo e le togli quando traslochi"
    ],
    nachteile: [
      "Le valvole che si collegano direttamente al Wi-Fi ottengono risultati peggiori nei test. I modelli migliori hanno bisogno di una centralina, che costa una volta in più se non ce l’hai ancora",
      "Se abbassi già sempre il riscaldamento da solo, risparmi meno. In quel caso ci vogliono alcuni anni prima di recuperare il prezzo d’acquisto, ma la comodità ce l’hai subito",
      "Secondo i produttori le batterie di solito durano fino a due anni, poi le cambi"
    ],
    profitipp: {
      titel: "Come impostare il tuo programma di riscaldamento",
      text: "All’inizio basta un programma semplice per i giorni feriali e uno per il fine settimana:",
      liste: [
        "Caldo poco prima di alzarti, per esempio 21 gradi",
        "Quando esci di casa, giù a 16-17 gradi. Meglio non spegnere del tutto, altrimenti i muri si raffreddano",
        "Di nuovo caldo poco prima di tornare a casa",
        "Di notte in camera da letto 16-18 gradi"
      ]
    },
    gruppen: [
      { name: "Senza centralina", text: "Queste valvole le colleghi direttamente al tuo Wi-Fi. Non compri nient’altro e sei pronto in poco tempo. In compenso nei test vanno peggio delle valvole con centralina.", ohne: "zentrale" },
      { name: "Con centralina", text: "Queste valvole comunicano con una piccola centralina, chiamata anche gateway o hub, collegata al tuo router. Costa una volta in più. Per alcuni modelli basta un apparecchio che forse hai già, per esempio un HomePod mini o un Google Nest Hub (2ª generazione). In cambio queste valvole ottengono i risultati migliori nei test, e secondo i produttori le batterie durano fino a due anni." }
    ],
    modelle: [
      {
        gruppe: "Senza centralina",
        stufe: "Economico", spanne: "direttamente al Wi-Fi",
        name: "SALCAR TRV801W", preis: 40, preisText: "circa da 30 a 45\u00a0€ l’una",
        punkte: [
          "Si collega direttamente al tuo Wi-Fi, senza alcuna centralina",
          "Funziona con Alexa e Google",
          "Si accorge quando una finestra è aperta e abbassa il riscaldamento",
          "App chiara (Smart Life o Tuya) con un programma di riscaldamento per ogni giorno"
        ],
        fuer: "Per te se vuoi spendere poco, senza centralina. Ce l’ho io stesso sul mio termosifone.",
        hinweis: "“Soddisfacente” su smarthomeassistent.de (voto 3,1).",
        link: amazon("salcar trv801w"),
        alternativen: [
          { name: "Eurotronic Comet WiFi", preis: 35, text: "“Soddisfacente” per Stiftung Warentest (voto 2,7, numero 9/2023). Si accorge quando una finestra è aperta.", link: amazon("eurotronic comet wifi") }
        ]
      },
      {
        gruppe: "Con centralina",
        stufe: "Economico", spanne: "con hub Aqara o Matter",
        name: "Aqara W600", preis: 50, preisText: "circa da 45 a 55\u00a0€ l’una", empfohlen: true,
        punkte: [
          "N. 1 su smarthomeassistent.de (“molto buono”, voto 1,4)",
          "Molto silenzioso: il motore si sente appena",
          "Secondo il produttore le batterie durano fino a due anni",
          "Funziona con Alexa, Google e Apple Home"
        ],
        fuer: "Per la maggior parte delle persone: è la numero 1 su smarthomeassistent.de, e comunque economica.",
        hinweis: "Ha bisogno di una centralina: un hub Aqara o un apparecchio per Matter su Thread, per esempio un HomePod mini o un Google Nest Hub (2ª generazione). Con Matter ha un po’ meno funzioni che con l’hub Aqara.",
        link: amazon("aqara w600 heizkörperthermostat", "aqara w600 testa termostatica")
      },
      {
        gruppe: "Con centralina",
        stufe: "Fascia media", spanne: "con Matter o controller Bosch",
        name: "Bosch Smart Home Termostato per radiatori II [+M]", preis: 62, preisText: "circa da 60 a 70\u00a0€ l’una",
        punkte: [
          "“Molto buono” su smarthomeassistent.de (voto 1,4)",
          "Molto silenzioso, con display, e si regola anche direttamente sull’apparecchio",
          "Secondo il produttore le batterie durano fino a due anni",
          "Funziona con Alexa, Google e Apple Home"
        ],
        fuer: "Per te se il design ti sta a cuore o hai già Bosch Smart Home.",
        hinweis: "Funziona tramite Matter su Thread, per esempio con un HomePod mini o un Google Nest Hub (2ª generazione), oppure con il Bosch Smart Home Controller II. Riconosce le finestre aperte solo con un contatto per finestre in più. Controlla che nel nome ci sia “[+M]”: il modello più vecchio senza questa sigla ha sempre bisogno del controller Bosch.",
        link: amazon("bosch smart home heizkörperthermostat ii +m", "bosch smart home termostato radiatore ii +m")
      }
    ],
    ohneTeuer: { stufe: "Valvole più care", titel: "Meglio con centralina", text: "Una valvola più cara senza centralina, che convinca nei test e che si trovi su amazon.it, non l’ho trovata. Le valvole che vanno meglio nei test hanno bisogno di una centralina: guarda il gruppo “Con centralina”." },
    fragen: [
      { f: "Quanto risparmio davvero?", a: "Con un programma di riscaldamento circa il 10% dei costi di riscaldamento, secondo co2online. Come regola generale, ogni grado in meno fa risparmiare circa il 6% di energia. Quanto sia nel tuo caso dipende da quanto spesso sei fuori e da come scaldi oggi. Per un appartamento di 70 m² poco isolato Stiftung Warentest (numero 9/2023) calcola circa 100 € all’anno. Fai il calcolo per te nel calcolatore qui sotto." },
      { f: "Con o senza centralina: cosa fa per me?", a: "Senza centralina è il modo più semplice per iniziare: apri la confezione, colleghi al Wi-Fi, fatto. Va bene se vuoi controllare solo pochi termosifoni e spendere poco. Con la centralina paghi una volta un po’ di più, ma ottieni le valvole che vanno meglio nei test. Inoltre in seguito puoi aggiungere contatti per finestre o un termostato da parete. Conviene soprattutto se vuoi attrezzare tutta la casa." },
      { f: "Perché ci sono così poche valvole Wi-Fi?", a: "Il Wi-Fi consuma più energia dei sistemi radio usati dalle valvole con centralina. Importante: il tuo router deve avere il Wi-Fi a 2,4 GHz. È così per quasi tutti i router." },
      { f: "Vanno bene per i miei termosifoni?", a: "Per quasi tutte le normali valvole dei termosifoni. La maggior parte ha una filettatura standard M30 x 1,5, e tutti i modelli qui ci si avvitano. Per altre valvole, per esempio Danfoss, spesso ci sono adattatori in dotazione, o li trovi per pochi soldi. Per il riscaldamento a pavimento invece ti serve un termostato ambiente a parete." },
      { f: "Posso installarle se sono in affitto?", a: "Di solito sì, perché non modifichi nulla in modo permanente. Sviti soltanto la vecchia manopola e avviti la nuova valvola. Non devi scaricare l’acqua, e non ti serve nemmeno un idraulico. Conserva bene le vecchie manopole e rimettile quando traslochi. Nel dubbio, chiedi un attimo al tuo padrone di casa." },
      { f: "E se torno a casa prima?", a: "Nessun problema: alzi un attimo la temperatura sulla valvola o tocchi “più caldo” nell’app. Dal punto successivo del tuo programma va di nuovo tutto da sé. Alcuni sistemi capiscono persino dalla posizione del tuo telefono quando stai tornando a casa." },
      { f: "La casa non si raffredda troppo durante il giorno?", a: "No, se abbassi a 16-17 gradi invece di spegnere del tutto. Non dovrebbe scendere sotto i 16 gradi: altrimenti i muri si raffreddano, l’umidità vi si deposita e il rischio di muffa aumenta. Riscaldare di nuovo la casa dopo costa meno che scaldarla tutto il giorno senza pause." },
      { f: "E con le finestre aperte?", a: "La maggior parte dei modelli consigliati qui si accorge quando la temperatura scende di colpo mentre arieggi, e abbassa il riscaldamento per un po’. Il termostato Bosch ha bisogno per questo di un contatto per finestre. Così non scaldi l’aria fuori dalla finestra." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test delle valvole termostatiche (numero 9/2023)", text: "Eurotronic Comet WiFi voto 2,7, circa 100 € di risparmio all’anno per 70 m²" },
      { name: "smarthomeassistent.de: classifica delle valvole termostatiche (ottobre 2026)", text: "Aqara W600 al primo posto e Bosch II [+M] entrambe voto 1,4" },
      { name: "smarthomeassistent.de: test della SALCAR TRV801W (settembre 2026)", text: "voto 3,1" },
      { name: "co2online: comunicato sulle valvole termostatiche programmabili (ottobre 2023)", url: "https://www.co2online.de/presse/heizkosten-senken-10-prozent-weniger-durch-programmierbare-thermostate/", text: "circa il 10% di spese di riscaldamento in meno (in tedesco)" },
      { name: "Agenzia federale tedesca per l’ambiente (UBA): riscaldare nel modo giusto", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/heizen-bauen/heizen-raumtemperatur", text: "le valvole programmabili fanno risparmiare circa il 10% di energia (in tedesco)" },
      { name: "co2online: Heizspiegel 2026, costi di riscaldamento (settembre 2026)", url: "https://www.co2online.de/presse/heizen-wird-teurer-neuer-heizspiegel-zeigt-sparpotenziale-von-bis-zu-1000-euro-pro-jahr/", text: "riscaldamento a gas 1.170 € all’anno per 70 m², per il calcolatore (in tedesco)" },
      { name: "Ufficio federale di statistica tedesco (Destatis): superficie abitativa per numero di componenti della famiglia", url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/Tabellen/tabelle-wo4-wohnflaeche.html", text: "microcensimento 2022, per le medie del calcolatore (pagina in tedesco)" },
      { name: "Centrale dei consumatori di Amburgo e Agenzia tedesca per l’energia (dena)", text: "circa il 6% di energia in meno per ogni grado, consigli sulla temperatura" },
      { name: "Dati dei produttori", text: "durata delle batterie e funzioni dei modelli" }
    ],
    rechner: "thermostate",
    video: "thermostate",
    preisstand: "Oktober 2026"
  },
  {
    id: "klimaanlage",
    name: "Climatizzatore",
    kurzname: "un climatizzatore",
    kategorie: "Casa",
    symbol: "❄️",
    bild: "",
    kurz: "Un climatizzatore che installi da solo, senza installatore. Rinfresca la tua stanza quando fuori fa caldo.",
    warum: "Nelle giornate calde il caldo si accumula in casa, e di notte la camera da letto non si rinfresca quasi più. Il climatizzatore toglie il calore dalla stanza e lo porta fuori. Lo accendi, e la stanza diventa molto più fresca, nello studio di casa come la sera in camera da letto.",
    statt: "Invece del ventilatore e di una camera rovente",
    nutzen: "Fresco in stanza, anche quando fuori fa caldo.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "D’estate la tua camera o il tuo studio diventano davvero caldi",
      "Vivi in affitto o non vuoi far installare niente di fisso",
      "Vuoi rinfrescare senza installatore e senza fori nel muro"
    ],
    nachteile: [
      "Consuma molta corrente. Se nelle giornate calde resta acceso per tante ore, te ne accorgi in bolletta, con un monoblocco molto più che con il PortaSplit",
      "Nessuno degli apparecchi qui è silenzioso come un apparecchio fisso. I monoblocchi sono più rumorosi del PortaSplit",
      "La finestra resta socchiusa. Con una guarnizione per finestre entra meno aria calda",
      "Gli apparecchi sono pesanti: secondo il produttore il PortaSplit pesa poco più di 32 chili. Per trasportarlo è meglio essere in due"
    ],
    gruppen: [
      { name: "Split", text: "Due parti, collegate da un tubo piatto: l’unità interna sta nella stanza, quella esterna è appesa fuori alla finestra o appoggiata sul balcone. Lì cede il calore. Per questo uno split è più silenzioso e consuma meno di un monoblocco." },
      { name: "Monoblocco", text: "Tutto è in un solo apparecchio (climatizzatore portatile monoblocco), l’aria calda esce dalla finestra attraverso un tubo. I monoblocchi costano meno e si installano in fretta. Sinceramente, però, sono più rumorosi di uno split, anche i migliori del test. Convengono soprattutto se rinfreschi solo in pochi giorni caldi all’anno." }
    ],
    // Stand 01.11.2026: Keins dieser Modelle ist bei amazon.it lieferbar, darum zeigt die Seite diese Hinweiskarte statt der Modelle.
    // Wird eins lieferbar: keinModell löschen, seinen Link prüfen und die übrigen Modelle entfernen.
    keinModell: { stufe: "amazon.it", titel: "Al momento non disponibile", text: "Gli apparecchi che ti consiglierei (Midea PortaSplit, Ariston Mobis Plus 10 e Bosch Cool 4000) al momento su amazon.it non sono disponibili, o solo da altri venditori a un prezzo molto più alto. Appena ci sarà un apparecchio che posso consigliarti a un prezzo normale, lo trovi qui. Nel frattempo ti aiutano a scegliere le domande qui sotto." },
    modelle: [
      {
        gruppe: "Split",
        stufe: "Fascia media", spanne: "senza installatore",
        name: "Midea PortaSplit", preis: 1100, preisText: "ca. 900–1.350 €", empfohlen: true,
        punkte: [
          "L’unità esterna si aggancia a un supporto sulla finestra o si appoggia sul balcone. Non servono installatore né fori nel muro",
          "Secondo il produttore 3,5 kilowatt per stanze fino a 42 metri quadrati e 39 decibel all’unità interna in modalità Silent",
          "Consuma molto meno di un monoblocco, secondo Stiftung Warentest, il più noto istituto di test per consumatori in Germania, al livello di alcuni apparecchi fissi",
          "Può anche riscaldare e si comanda con il telecomando o con l’app"
        ],
        fuer: "Il mio consiglio se lo vuoi più silenzioso e con consumi più bassi di un monoblocco. Ce l’ho anch’io e mi sono trovato molto bene.",
        hinweis: "Da Stiftung Warentest ha avuto solo «sufficiente» (3,3, numero 6/2025), gli split fissi sono andati meglio. La finestra resta socchiusa per far passare il tubo piatto. E dal 2027 non arriverà più nuovo sul mercato a causa del suo refrigerante, maggiori dettagli nelle domande qui sotto.",
        link: amazon("midea portasplit", "midea portasplit"),
        alternativen: [
          { name: "Midea PortaSplit Cool", preis: 800, text: "La sorella minore raffredda soltanto e non riscalda. Secondo il produttore ha 2,35 invece di 3,5 kilowatt ed è più adatta a stanze piccole. Test indipendenti non ne ho ancora trovati.", link: amazon("midea portasplit cool", "midea portasplit cool") }
        ]
      },
      {
        gruppe: "Monoblocco",
        stufe: "Economico", spanne: "fino a 450 €",
        name: "Ariston Mobis Plus 10", preis: 400, preisText: "ca. 400 €",
        punkte: [
          "Nel grande test 2026 della rivista francese per consumatori Que Choisir ha avuto il voto migliore nel raffreddamento, secondo Stiftung Warentest",
          "Lì ha consumato più o meno poco quanto il Bosch",
          "Secondo il produttore 10.000 BTU, cioè 2,9 kilowatt, e propano (R290) come refrigerante, che danneggia pochissimo il clima"
        ],
        fuer: "Se deve costare il meno possibile e rinfreschi solo in pochi giorni caldi all’anno.",
        hinweis: "Nel complesso il test lo mette dietro a Bosch e Black+Decker. E come tutti i monoblocchi è più rumoroso di uno split: secondo il produttore ha una potenza sonora di 62 decibel.",
        link: amazon("ariston mobis plus 10", "ariston mobis plus 10")
      },
      {
        gruppe: "Monoblocco",
        stufe: "Fascia media", spanne: "450–700 €",
        name: "Bosch Cool 4000", preis: 570, preisText: "ca. 550–600 €", empfohlen: true,
        punkte: [
          "Da Que Choisir 2026 ha avuto il voto migliore nel raffreddamento, secondo Stiftung Warentest, e ha consumato meno del Black+Decker",
          "Secondo il produttore 2,6 kilowatt per stanze fino a 35 metri quadrati",
          "Secondo il produttore funziona a propano (R290), che danneggia pochissimo il clima",
          "Telecomando con timer, più una modalità notte e una modalità silenziosa"
        ],
        fuer: "Il mio consiglio se rinfreschi solo in pochi giorni caldi e deve costare meno di uno split.",
        hinweis: "Come tutti i monoblocchi è più rumoroso di uno split: secondo il produttore ha una potenza sonora di 64 decibel, il PortaSplit 59 all’unità interna. E siccome soffia fuori l’aria della stanza, dalle fessure entra aria calda.",
        link: amazon("bosch cool 4000", "bosch cool 4000"),
        alternativen: [
          { name: "Black+Decker BXAC9000E", preis: 690, text: "Nello stesso test ha raffreddato altrettanto bene e ha distribuito il fresco nella stanza in modo più uniforme di tutti. In cambio ha consumato circa un quarto di corrente in più.", link: amazon("black decker bxac9000e", "black decker bxac9000e") }
        ]
      }
    ],
    ohneTeuer: { stufe: "Fascia alta", titel: "Fisso, montato da un tecnico", text: "Gli split fissi sono ancora più silenziosi e consumano ancora meno. Però può installarli solo un tecnico certificato, e in affitto ti serve il consenso del proprietario. Per questo qui non li trovi da ordinare. Quali apparecchi sono in testa nei test lo trovi nelle domande qui sotto." },
    fragen: [
      { f: "Split o monoblocco: cosa fa per me?", a: "Se rinfreschi spesso o anche di notte, prendi uno split come il PortaSplit. È più silenzioso e consuma meno corrente, perché cede il calore all’esterno tramite l’unità esterna. Se il fresco ti serve solo in pochi giorni caldi all’anno, basta un monoblocco. Costa meno all’acquisto e si installa in fretta. In cambio è più rumoroso, e siccome soffia fuori l’aria della stanza, dall’esterno rientra aria calda. Anche Stiftung Warentest la vede così." },
      { f: "Quanto è rumoroso un climatizzatore in stanza?", a: "I più silenziosi sono gli split fissi. Secondo i produttori, le unità interne dei vincitori del test hanno solo 19 decibel nella modalità più silenziosa. Il PortaSplit è più rumoroso: secondo il produttore sono 39 decibel in modalità Silent, e nei test a volte era più rumoroso. I monoblocchi lo sono ancora di più, perché con loro tutto sta nella stanza, anche il compressore. Stiftung Warentest definisce piuttosto rumorosi persino i monoblocchi consigliati. Sull’etichetta energetica c’è la potenza sonora: 59 decibel all’unità interna del PortaSplit, 62 per l’Ariston e 64 per il Bosch. Per la camera da letto aiuta la modalità notte, oppure la rinfreschi già prima di andare a dormire." },
      { f: "Quanto costa la corrente?", a: "Dipende da quanto spesso e quanto a lungo resta acceso. Un esempio: se rinfreschi otto ore al giorno per un mese, il PortaSplit secondo i test e l’etichetta energetica consuma circa 100–140 kilowattora. A 37 centesimi al kilowattora, la media in Germania, sono circa 35–55 €. Nel test di Que Choisir i monoblocchi qui hanno consumato quasi il doppio, quindi circa 70–90 € per lo stesso mese. In Austria e in Svizzera la corrente costa un po’ meno. Il prezzo più alto del PortaSplit lo recuperi con la corrente solo dopo molti anni. Nella vita di tutti i giorni conta di più che è più silenzioso e non fa entrare aria calda da fuori." },
      { f: "Il PortaSplit può anche riscaldare?", a: "Sì, funziona come una piccola pompa di calore e secondo il produttore riscalda fino a meno 10 gradi esterni. Stiftung Warentest però ha testato il riscaldamento solo fino a più 2 gradi esterni. Così nelle giornate fresche di primavera e autunno puoi scaldare singole stanze. Il PortaSplit Cool non può riscaldare." },
      { f: "E gli split fissi?", a: "Sono i più silenziosi e quelli che consumano meno, e d’inverno possono aiutare a riscaldare. Da Stiftung Warentest (numero 6/2026), tra gli apparecchi più piccoli da 2,5 kilowatt il vincitore è il Mitsubishi Electric MSZ-RZ25VU, il consiglio qualità-prezzo è il Samsung AR70F09CAAWN. Tra quelli più grandi da 3,5 kilowatt è in testa il Daikin Perfera FTXM35A, testato nel 2025. Come indicazione di massima, Stiftung Warentest indica 2,5 kilowatt per circa 25 metri quadrati e 3,5 kilowatt per circa 35. Può installarli solo un tecnico certificato, per questo qui non li trovi da ordinare. Meglio chiedere i preventivi presto nell’anno, perché con la prima ondata di caldo i tecnici sono subito pieni." },
      { f: "Cosa cambia nel 2027 per il PortaSplit?", a: "Il PortaSplit qui funziona con il refrigerante R32. A causa di nuove regole UE, dal 1° gennaio 2027 non potrà più essere immesso nuovo sul mercato. I negozi però possono continuare a vendere gli apparecchi che si trovano nell’UE entro la fine del 2026. E se ne hai uno, puoi continuare a usarlo e farlo riparare senza limitazioni. Midea ha annunciato per il 2027 un nuovo PortaSplit a propano (R290), che danneggia molto meno il clima. Bosch e Ariston secondo i produttori funzionano già a propano." },
      { f: "In Germania posso installare un climatizzatore se sono in affitto?", a: "Un monoblocco di solito puoi semplicemente metterlo, perché non fori e non modifichi niente. Per uno split fisso invece ti serve il consenso del proprietario, meglio per iscritto. Servono infatti un foro nel muro e un’unità esterna sulla facciata. Con il PortaSplit non è del tutto chiaro: non fori niente, ma l’unità esterna è appesa fuori. Un esperto dell’associazione tedesca dei proprietari Haus & Grund ritiene che in piena estate sia probabilmente ammesso anche senza consenso, perché non è pensato per restare. Comunque chiedi prima al proprietario. E abbi riguardo per i vicini, soprattutto di notte." },
      { f: "E in un appartamento di proprietà in Germania?", a: "Uno split con unità esterna non puoi montarlo e basta: prima ti serve una delibera dell’assemblea dei proprietari. Da una sentenza della Corte federale di giustizia del luglio 2026, però, i proprietari di regola ne hanno diritto. Vale finché l’apparecchio non disturba troppo gli altri, per esempio con il rumore, e non rovina l’aspetto dell’edificio. Per un monoblocco non serve nessuna delibera, perché non modifichi niente. Per il PortaSplit meglio chiedere prima all’amministratore." },
      { f: "E in Austria?", a: "La cosa più semplice è un apparecchio mobile, perché sta solo nel tuo appartamento. Se vuoi uno split fisso, in affitto devi prima comunicarlo al proprietario. Se non rifiuta entro due mesi, secondo la legge austriaca sulle locazioni vale come consenso. Se rifiuta, con l’ufficio di conciliazione o il tribunale ottieni raramente qualcosa. Se hai un appartamento di proprietà in un edificio con più proprietari, ti serve il consenso degli altri. Se ti serve in più un permesso dell’autorità edilizia dipende dall’apparecchio, dal rumore e dal luogo, per esempio in una zona protetta. Meglio informarti prima presso il tuo comune, a Vienna presso la polizia edilizia. Per apparecchi mobili come il PortaSplit, secondo la rivista profil, spesso non serve un permesso. Ma anche qui chiedi prima al proprietario." },
      { f: "E in Svizzera?", a: "Gli apparecchi mobili con tubo che colleghi soltanto alla presa non hanno bisogno di permessi. Nel Cantone di Zurigo lo ha confermato espressamente il Consiglio di Stato del Cantone. Uno split fisso invece nella maggior parte dei Cantoni richiede una licenza edilizia, a Zurigo di solito per l’unità esterna. In affitto, per modifiche all’appartamento ti serve il consenso scritto del locatore. Per il PortaSplit non ho trovato una regola chiara, perché la sua unità esterna è solo appesa alla finestra. Chiedi quindi prima alla tua amministrazione e, nel dubbio, all’ufficio tecnico del tuo comune. E ancora una cosa: gli apparecchi qui hanno una spina tedesca che non entra nelle prese svizzere. Per questo al momento non ho un’offerta adatta per la Svizzera, ma la sto cercando." },
      { f: "Come hai scelto gli apparecchi?", a: "Per il gruppo split ho letto i test di Stiftung Warentest e anche quelli di home&smart, smarthomeassistent e mobiFlip. Il PortaSplit era l’unico split mobile nel test di Stiftung Warentest, e lo uso io stesso. I monoblocchi Stiftung Warentest non li testa più da anni. Nel 2026 però ha valutato il grande test della rivista francese per consumatori Que Choisir e ne ha consigliati tre apparecchi disponibili in Germania. Tutti e tre lì hanno avuto il voto migliore nel raffreddamento. Su amazon.it al momento nessuno dei tre è disponibile. Ho anche confrontato i dati dei produttori e letto i test della rivista britannica per consumatori Which? e dell’associazione austriaca dei consumatori VKI. Nessuno di questi test definisce davvero silenzioso un monoblocco, e preferisco dirtelo sinceramente." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test dei climatizzatori (numero 6/2026)", text: "15 split: a 2,5 kW vincitore Mitsubishi Electric MSZ-RZ25VU e consiglio qualità-prezzo Samsung AR70F09CAAWN, a 3,5 kW in testa il Daikin Perfera FTXM35A (testato nel 2025), 2,5 kW per circa 25 e 3,5 kW per circa 35 metri quadrati" },
      { name: "Stiftung Warentest: split mobile Midea PortaSplit (numero 6/2025)", text: "sufficiente (voto 3,3), il primo split mobile nel test, riscaldamento provato solo da più 2 gradi all’esterno" },
      { name: "Stiftung Warentest: test dei climatizzatori portatili (maggio 2026)", text: "valutazione del test di Que Choisir: Black+Decker BXAC9000E, Bosch Cool 4000 e Ariston Mobis Plus 10 con il voto migliore nel raffreddamento, ma piuttosto rumorosi, i monoblocchi in generale poco efficienti" },
      { name: "Stiftung Warentest: pianificare e far installare un climatizzatore (maggio 2026), climatizzatore per i proprietari di appartamenti (luglio 2026)", text: "può installarlo solo una ditta specializzata, chiedere i preventivi presto, chi è in affitto ha bisogno del permesso del locatore, i proprietari di una delibera, e l’apparecchio non deve essere brutto da vedere" },
      { name: "Test del PortaSplit", text: "di home&smart, smarthomeassistent.de, mobiFlip, GIGA ed ETM Testmagazin: montaggio senza fori, rumore misurato e consumo di corrente" },
      { name: "Which? (organizzazione britannica dei consumatori, ottobre 2026) e VKI (Austria, tramite futurezone)", text: "monoblocchi nel test, nessuno dei test ne definisce uno davvero silenzioso" },
      { name: "home&smart (agosto 2026) e GIGA sul PortaSplit dal 2027", text: "dal 1° gennaio 2027 la versione con R32 non può più essere immessa sul mercato, manutenzione e riparazione restano possibili, è annunciato un successore a propano" },
      { name: "Verbraucherzentrale, centrale dei consumatori tedesca: installare un climatizzatore (agosto 2026)", url: "https://www.verbraucherzentrale.de/wissen/energie/energetische-sanierung/klimageraet-lohnt-sich-der-kauf-10525", text: "gli split mobili sono di solito più efficienti e silenziosi dei monoblocchi, quelli fissi solo da un tecnico, le guarnizioni per finestre riducono lo scambio d’aria, accendere un po’ prima di andare a dormire (in tedesco)" },
      { name: "Verbraucherzentrale: rinfrescare la casa (giugno 2026)", url: "https://www.verbraucherzentrale.de/wissen/energie/energetische-sanierung/wohnung-kuehlen-was-hilft-gegen-hitze-zu-hause-27952", text: "la protezione solare funziona meglio all’esterno della finestra (in tedesco)" },
      { name: "Öko-Institut e Verbraucherzentrale Renania-Palatinato: consumo dei climatizzatori (2012)", url: "https://www.oeko.de/uploads/oeko/forschung_beratung/themen/nachhaltiger_konsum/infoblatt_raumklima.pdf", text: "rinfrescare le stanze al massimo 6 gradi sotto la temperatura esterna, di giorno fare ombra (in tedesco)" },
      { name: "SvizzeraEnergia (Ufficio federale dell’energia): temperatura ambiente in estate (novembre 2021)", url: "https://pubdb.bfe.admin.ch/de/publication/download/9983", text: "una stanza è piacevole se è al massimo 6 gradi più fresca dell’esterno (in tedesco)" },
      { name: "SRF, radiotelevisione pubblica svizzera: monoblocco o split? (luglio 2026)", url: "https://www.srf.ch/wissen/mensch/der-check-fuer-ihr-zuhause-monoblock-oder-split-so-finden-sie-das-passende-klimageraet", text: "i monoblocchi consumano di più e sono più rumorosi, gli split richiedono un permesso nella maggior parte dei cantoni, una grande differenza con l’esterno affatica il corpo (in tedesco)" },
      { name: "Berliner Mieterverein, associazione degli inquilini di Berlino: gli inquilini possono installare un climatizzatore? (agosto 2026)", url: "https://www.berliner-mieterverein.de/aktuelles/newsletter/miet-tipp-duerfen-mieterinnen-eine-klimaanlage-einbauen.htm", text: "monoblocco di solito senza consenso, split solo con il consenso del locatore, meglio per iscritto, di notte i limiti di rumore sono più severi (in tedesco)" },
      { name: "ZDFheute, televisione pubblica tedesca: installare un climatizzatore in affitto (agosto 2026)", url: "https://www.zdfheute.de/ratgeber/klimaanlage-mietwohnung-nachruesten-hitze-100.html", text: "secondo Tim Treude di Haus & Grund uno split mobile dovrebbe essere ammesso in piena estate anche senza consenso, perché non è pensato per durare, un monoblocco non richiede modifiche edilizie (in tedesco)" },
      { name: "Corte federale di giustizia (Germania): comunicato 130/2026 sulla sentenza V ZR 162/25 (luglio 2026)", url: "https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2026/2026130.html", text: "i proprietari di un appartamento possono di norma pretendere il permesso di installare uno split, concesso con una delibera, il rumore del funzionamento normale di regola non è un ostacolo (in tedesco)" },
      { name: "Legge austriaca sulle locazioni (MRG), § 9", text: "l’inquilino principale comunica una modifica prevista, se il locatore non rifiuta entro due mesi il consenso si considera dato" },
      { name: "Corte suprema (Austria): decisione 5 Ob 36/22p (agosto 2022)", url: "https://www.ris.bka.gv.at/Dokumente/Justiz/JJT_20220829_OGH0002_0050OB00036_22P0000_000/JJT_20220829_OGH0002_0050OB00036_22P0000_000.pdf", text: "split in un appartamento di proprietà: le considerazioni generali sul cambiamento climatico non sostituiscono la prova per il singolo appartamento (in tedesco)" },
      { name: "profil (settimanale austriaco, luglio 2026)", text: "dopo un rifiuto commissioni di conciliazione e tribunali danno raramente ragione agli inquilini, in condominio deve essere d’accordo ogni proprietario, gli apparecchi mobili come il PortaSplit spesso non richiedono un permesso" },
      { name: "Città di Vienna, polizia edilizia: scheda su climatizzazione, ventilazione e pompe di calore", url: "https://www.gemeinderecht.wien.gv.at/wohnen/baupolizei/pdf/merkblatt-klima-lueftungsanlagen-waermepumpen.pdf", text: "quando un apparecchio fisso non richiede permesso, cosa conta per rumore, refrigerante, immagine urbana e zone protette, se del caso il consenso di tutti i comproprietari (in tedesco)" },
      { name: "Cantone di Zurigo, Consiglio di Stato: risposta all’interpellanza KR-Nr. 226/2025 (ottobre 2025)", url: "https://parlzhcdws.cmicloud.ch/parlzh5/cdws//Files/2d0334486c7b460697b6848215f08034-332/1/pdf", text: "gli apparecchi con tubo non installati in modo fisso non richiedono permesso, per l’unità esterna di uno split serve di regola una licenza edilizia (in tedesco)" },
      { name: "Codice svizzero delle obbligazioni, art. 260a", text: "modifiche della cosa locata solo con il consenso scritto del locatore" },
      { name: "Tribunali del Cantone di Zurigo: modifiche della cosa locata da parte dell’inquilina", url: "https://www.gerichte-zh.ch/themen/miete/rechte-und-pflichten/aenderungen-durch-die-mieterin.html", text: "nessuna modifica senza consenso, altrimenti il locatore può pretendere il ripristino a spese dell’inquilina (in tedesco)" },
      { name: "Associazione tedesca dell’energia e dell’acqua (BDEW): analisi dei prezzi della corrente (agosto 2026)", url: "https://www.bdew.de/media/documents/BDEW_Strompreisanalyse_082026.pdf", text: "37 centesimi al kWh per le famiglie in Germania, per la domanda sul costo della corrente (in tedesco)" },
      { name: "E-Control (autorità austriaca di regolazione dell’energia): monitoraggio dei prezzi della corrente (gennaio 2026)", url: "https://www.e-control.at/documents/1785851/1811582/preismonitor_jan_26.pdf/b2376bf8-3337-4ba0-ad26-f98a443ab871?t=1767782911898", text: "in media circa 30 centesimi al kWh presso i fornitori regionali in Austria (in tedesco)" },
      { name: "ElCom, Commissione federale dell’energia elettrica: newsletter 9/2025", url: "https://www.elcom.admin.ch/dam/it/sd-web/znXqHISH0pFP/Newsletter_09-2025_IT.pdf", text: "27,7 centesimi di franco al kWh per una famiglia tipo in Svizzera nel 2026" },
      { name: "Dati dei produttori e schede prodotto UE", text: "potenza, rumore, etichetta energetica, peso e riscaldamento del PortaSplit secondo Midea, successore a propano secondo un comunicato di Midea (settembre 2026), inoltre Bosch, Ariston, Black+Decker, Mitsubishi Electric e Daikin" }
    ],
    profitipp: {
      titel: "Così rinfresca meglio e consuma meno",
      text: "Bastano pochi accorgimenti:",
      liste: [
        "Sigilla la fessura della finestra da cui passano il tubo piatto o il tubo dell’aria. Così entra meno aria calda",
        "Di giorno tieni abbassate tapparelle o veneziane. Funziona meglio una protezione solare all’esterno della finestra",
        "Spegnilo quando nessuno è nella stanza, e rinfresca la camera già prima di andare a dormire",
        "Raffredda solo di qualche grado, al massimo circa sei gradi in meno rispetto all’esterno. È più piacevole per il corpo e fa risparmiare elettricità",
        "Se hai un kit fotovoltaico da balcone, rinfresca di giorno quando c’è il sole. Così usi la tua corrente"
      ]
    },
    erfahrung: {
      titel: "La mia esperienza",
      bild: "", bildText: "Foto: il tuo PortaSplit",
      text: "Uso io stesso il Midea PortaSplit, ed è molto silenzioso. Posso lasciarlo acceso senza problemi mentre dormo. Il montaggio è stato semplice, nel manuale è spiegato tutto bene. Non lo uso per riscaldare, quindi su questo non posso dirti nulla."
    },
    vergleich: {
      vorherTitel: "Senza climatizzatore",
      vorher: [
        "Di giorno la casa si scalda sempre di più",
        "Di notte arieggi e speri che si rinfreschi",
        "In camera da letto spesso fa troppo caldo per dormire"
      ],
      nachher: [
        "Premi un tasto e la stanza diventa molto più fresca",
        "Con il timer o l’app è già fresco quando torni a casa",
        "Prima di andare a dormire rinfreschi la camera"
      ]
    },
    video: "klimaanlage",
    preisstand: "Oktober 2026"
  },
  {
    id: "smarte-lampen",
    name: "Lampadine smart",
    kurzname: "lampadine smart",
    kategorie: "Casa",
    symbol: "💡",
    bild: "",
    kurz: "Le avviti nelle tue lampade al posto delle lampadine normali. Poi comandi la luce con l’app, un interruttore o la voce, e si accende e si spegne secondo il tuo programma.",
    warum: "Al mattino la luce cresce piano piano, la sera si accende da sola e diventa calda e accogliente. Con un tocco hai l’atmosfera giusta per cucinare, leggere o guardare un film. E quando esci di casa spegni tutto con un tocco, anche quando sei già fuori.",
    statt: "Invece di cercare l’interruttore al buio",
    nutzen: "Luce accesa quando ti serve. Spenta quando esci.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 2, nachher: 1 },
    fuer: [
      "Vuoi l’atmosfera di luce giusta con un tocco, per esempio per cucinare, leggere o guardare un film",
      "La luce deve accendersi e spegnersi da sola al mattino e alla sera",
      "A volte ti dimentichi di spegnere la luce quando esci di casa",
      "Sei in affitto: le avviti semplicemente al posto delle vecchie lampadine e le porti via quando traslochi"
    ],
    nachteile: [
      "Le lampadine smart costano molto più delle normali lampadine LED. Paghi soprattutto la comodità",
      "Anche spente consumano un po’ di corrente per restare in ascolto. Nell’UE sono consentiti al massimo 0,5 watt per lampadina, maggiori dettagli nelle domande più sotto",
      "Se le spegni con l’interruttore normale, non reagiscono più all’app né alla voce. Lascia quindi l’interruttore acceso e aggiungi un interruttore smart, come nel consiglio più sotto",
      "Per tutte le funzioni di Philips Hue ti serve un Bridge, che costa una volta in più. I kit di avvio qui lo includono già"
    ],
    profitipp: {
      titel: "Così la tua luce diventa davvero comoda",
      text: "Poche impostazioni fanno la differenza più grande:",
      liste: [
        "Lascia sempre acceso l’interruttore normale e attacca accanto un interruttore smart, con Hue per esempio lo Smart Button del kit di avvio. Si fissa con una striscia adesiva, non ti serve un elettricista",
        "Crea delle scene, per esempio luce intensa per cucinare, calda per rilassarti e soffusa per la serata film",
        "Con un programma fai crescere la luce piano piano al mattino, così non ti svegli al buio",
        "Con l’Hue Bridge Pro e almeno tre lampadine Hue in una stanza, MotionAware accende la luce da solo appena entri"
      ]
    },
    erfahrung: {
      titel: "La mia esperienza",
      bild: "", bildText: "Foto: le tue lampade Hue",
      text: "Uso Philips Hue da circa dieci anni e lo adoro. Quello che uso di più sono le scene: così ho sempre esattamente l’atmosfera luminosa che voglio. Con la nuova funzione MotionAware le lampade si accendono da sole appena qualcuno si muove nella stanza. Uso anche gli interruttori di Hue, che offrono molte più funzioni dei normali interruttori."
    },
    gruppen: [
      { name: "Con centralina", text: "Queste lampadine comunicano con una piccola centralina, con Philips Hue si chiama Bridge. La colleghi al tuo router, e nei kit di avvio qui è già inclusa. In cambio hai più funzioni: programmi, scene, comando da fuori casa e tanti accessori come interruttori e sensori di movimento. Philips Hue con Bridge è stato il vincitore del test di Stiftung Warentest, il più noto istituto di test per consumatori in Germania (numero 2/2024)." },
      { name: "Senza centralina", text: "Colleghi queste lampadine direttamente al tuo Wi-Fi o via Bluetooth al telefono. Non compri niente in più e fai presto. È adatto se vuoi iniziare con una o due lampadine. La migliore lampadina senza centralina per Stiftung Warentest (numero 2/2024) era quella di WiZ." }
    ],
    modelle: [
      {
        gruppe: "Con centralina",
        stufe: "Economico", spanne: "Hue a prezzo più basso",
        name: "Kit di avvio Philips Hue Essential", preis: 90, preisText: "circa 80–100 € per il Bridge e quattro lampadine",
        punkte: [
          "Bridge e quattro lampadine a colori e con tonalità di bianco in un unico kit",
          "Stessa app e stesso sistema delle altre lampadine Hue, puoi aggiungere tutto in seguito",
          "Colori intensi: per i siti di tecnologia nextpit e TechRadar si distinguevano appena dalle lampadine Hue più care",
          "Funziona con Alexa, Google e Apple Home"
        ],
        fuer: "Per te se vuoi dotare di Hue diverse lampade spendendo poco.",
        hinweis: "Si abbassa solo fino al 2 per cento, le lampadine Hue più care fino allo 0,2 per cento. Per una luce sveglia davvero delicata TechRadar l’ha trovata troppo luminosa. Con il Bridge di questo kit non c’è MotionAware, per quello ti serve il Bridge Pro. E secondo il produttore ha la classe energetica F, le lampadine Hue più care la D. Spenta consuma 0,5 watt, le lampadine del kit con Bridge Pro solo 0,1 watt.",
        link: amazon("philips hue essential starter set e27", "philips hue essential starter kit e27")
      },
      {
        gruppe: "Con centralina",
        stufe: "Fascia alta", spanne: "con Bridge Pro",
        name: "Kit di avvio Philips Hue White & Color Ambiance con Bridge Pro", preis: 220, preisText: "circa 200–250 € per Bridge Pro, tre lampadine e Smart Button", empfohlen: true,
        punkte: [
          "Vincitore del test di Stiftung Warentest (buono, voto 2,0, numero 2/2024). È stata testata la lampadina precedente con il Bridge normale",
          "Con MotionAware le tue lampadine diventano un sensore di movimento: da tre lampadine in una stanza la luce si accende quando entri",
          "Si abbassa moltissimo, fino allo 0,2 per cento, e ha tante tonalità di bianco dal caldissimo al freddo",
          "Un grande sistema: interruttori, sensori di movimento, strisce luminose e luci da esterno si aggiungono, anche con Alexa, Google e Apple Home"
        ],
        fuer: "Il mio consiglio se vuoi rendere la tua luce davvero smart. Uso Philips Hue anch’io, ne parlo in “La mia esperienza”.",
        hinweis: "È il kit più caro qui. Secondo il produttore la nuova generazione di lampadine consuma circa il 40 per cento di corrente in meno di quella testata. Secondo il produttore il Bridge Pro comanda oltre 150 lampadine e si collega al router via cavo o Wi-Fi.",
        link: amazon("philips hue starter set bridge pro e27", "philips hue starter kit bridge pro e27")
      },
      {
        gruppe: "Senza centralina",
        stufe: "Economico", spanne: "direttamente nel Wi-Fi",
        name: "WiZ A60 E27 Tunable White & Color", preis: 15, preisText: "circa 12–18 € l’una", empfohlen: true,
        punkte: [
          "Buono per Stiftung Warentest (voto 2,2, numero 2/2024): la migliore lampadina senza centralina e consiglio qualità-prezzo e ambiente",
          "Si collega direttamente al tuo Wi-Fi, non compri niente in più",
          "Colori e tonalità di bianco dal caldo al freddo, con programmi e scene nell’app WiZ",
          "Funziona con Alexa e Google, tramite Matter anche con Apple Home"
        ],
        fuer: "Per te se vuoi iniziare spendendo poco e senza accessori, per esempio con una o due lampadine.",
        hinweis: "Il tuo router deve avere il Wi-Fi a 2,4 GHz, quasi tutti ce l’hanno. Quando nel test di Stiftung Warentest mancava Internet, le lampadine Wi-Fi reagivano solo in ritardo.",
        link: amazon("wiz a60 e27 color", "wiz a60 e27 colore")
      },
      {
        gruppe: "Senza centralina",
        stufe: "Fascia alta", spanne: "via Bluetooth, Bridge in seguito",
        name: "Philips Hue White & Color Ambiance E27 (via Bluetooth)", preis: 50, preisText: "circa 45–60 € l’una",
        punkte: [
          "La stessa lampadina del kit di avvio con Bridge Pro. Senza Bridge la comandi via Bluetooth direttamente con il telefono",
          "Così comandi fino a dieci lampadine, senza alcun accessorio",
          "Puoi aggiungere il Bridge in qualsiasi momento, allora hai tutte le funzioni"
        ],
        fuer: "Per te se vuoi prima provare Philips Hue con una o due lampadine.",
        hinweis: "Via Bluetooth funziona solo da vicino, secondo il produttore a circa dieci metri, e non da fuori casa. Anche programmi e routine sono limitati senza Bridge.",
        link: amazon("philips hue white and color ambiance e27", "philips hue white and color ambiance e27")
      }
    ],
    fragen: [
      { f: "Con o senza centralina: cosa fa per me?", a: "Senza centralina è l’inizio più semplice: avviti la lampadina, la colleghi al Wi-Fi o al telefono, fatto. È adatto se vuoi prima rendere smart una o due lampade. Con la centralina all’inizio spendi di più, ma hai più funzioni e tanti accessori, per esempio interruttori e sensori di movimento. Conviene soprattutto se vuoi attrezzare più stanze. Con Philips Hue puoi anche iniziare senza Bridge e aggiungerlo dopo." },
      { f: "Philips Hue funziona anche senza Bridge?", a: "Sì, via Bluetooth. Allora comandi fino a dieci lampadine direttamente con il telefono, secondo il produttore a circa dieci metri. Da fuori casa non funziona, e programmi, routine e accessori li puoi usare solo in parte. La maggior parte delle lampadine Hue funziona in entrambi i modi. Per questo puoi aggiungere il Bridge in qualsiasi momento e tenere le tue lampadine." },
      { f: "Bridge o Bridge Pro?", a: "Il Bridge normale comanda fino a 50 lampadine e 12 accessori come interruttori, e si collega al router via cavo. Secondo il produttore il Bridge Pro gestisce oltre 150 lampadine e 50 accessori, si collega anche via Wi-Fi, e solo con lui c’è MotionAware. Se MotionAware non ti serve, per iniziare basta il Bridge normale, come nel kit Essential." },
      { f: "Che cos’è MotionAware?", a: "Con questa funzione le tue lampadine Hue diventano esse stesse un sensore di movimento. Quando qualcuno si muove nella stanza, i segnali radio tra le lampadine cambiano e la luce si accende. Ti servono il Bridge Pro e almeno tre lampadine Hue nella stessa stanza, ma nessun sensore di movimento in più. Secondo il produttore quasi tutte le lampadine Hue sono compatibili, solo alcuni modelli più vecchi no. Per la tua luce MotionAware non costa niente in più, solo per gli avvisi sul telefono Hue chiede un abbonamento. I muri tra le lampadine possono disturbare. E perché il tuo animale non accenda la luce, nell’app imposti MotionAware meno sensibile." },
      { f: "Le lampadine smart consumano corrente anche da spente?", a: "Sì, un po’, perché aspettano i tuoi comandi. Nell’UE dal settembre 2021 una lampadina smart può consumare per questo al massimo 0,5 watt. Sono poco più di 4 kilowattora all’anno, a 37 centesimi al kilowattora, la media in Germania, quindi circa 1,60 € a lampadina. Secondo il produttore le lampadine del kit Hue con Bridge Pro ne consumano solo 0,1 watt, la Hue Essential più economica 0,5 watt. Per una lampada che si accende quasi mai, per esempio nel ripostiglio, meglio una normale lampadina LED." },
      { f: "Cosa succede se spengo l’interruttore normale?", a: "Allora la lampadina non ha corrente e non reagisce più ad app, programma o voce. Lascia quindi l’interruttore acceso e comanda con l’app o con un interruttore smart. L’interruttore Hue lo attacchi semplicemente al muro, per esempio proprio accanto a quello vecchio. Esistono anche moduli da mettere dietro l’interruttore normale. Ma per quelli lavori sull’impianto elettrico, quindi nel dubbio lascialo fare a un elettricista." },
      { f: "Cosa succede se manca Internet?", a: "Secondo il produttore, con l’Hue Bridge puoi comandare la luce anche senza Internet. Le lampadine Wi-Fi invece, nel test di Stiftung Warentest, reagivano solo in ritardo quando mancava Internet. E il tuo interruttore normale funziona comunque." },
      { f: "Vanno bene per le mie lampade?", a: "Guarda l’attacco della tua vecchia lampadina. La maggior parte delle lampade ha il grande attacco a vite E27, e le lampadine qui sono per quello. Hue e WiZ esistono anche per il piccolo attacco E14 e per i faretti GU10, allora controlla l’attacco nel nome quando compri." },
      { f: "E in Austria e in Svizzera?", a: "In Austria è tutto come in Germania. In Svizzera le lampadine vanno bene allo stesso modo, E27, E14 e GU10 sono gli stessi attacchi. Philips Hue e WiZ li trovi anche nei negozi svizzeri. Se ordini in Germania, guarda la spina dell’alimentatore del Bridge: una spina Europa piatta con due spinotti sottili va anche nelle prese svizzere, una spina Schuko grossa no." },
      { f: "Come hai scelto le lampadine?", a: "Uso io stesso Philips Hue da circa dieci anni. Per la scelta ho letto il test di Stiftung Warentest, il più noto istituto di test per consumatori in Germania (numero 2/2024, dieci lampadine). Solo due erano buone: Philips Hue con Bridge, vincitore del test, e WiZ, la migliore lampadina senza centralina. Visto che il test ha quasi tre anni, ho letto anche test più recenti dei siti di tecnologia nextpit, TechRadar e PCWorld, per esempio su Hue Essential e MotionAware, e ho confrontato i dati dei produttori. Le nuove lampadine di IKEA non le ho trovate su Amazon, le trovi direttamente da IKEA." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test delle lampadine smart (numero 2/2024)", text: "dieci lampadine, solo due buone: Philips Hue con Bridge vincitrice (voto 2,0), WiZ la migliore senza centralina (voto 2,2) e consiglio qualità-prezzo e ambiente" },
      { name: "dpa, agenzia di stampa tedesca, tramite teltarif.de (dicembre 2023)", text: "nel test di Stiftung Warentest le lampadine Wi-Fi reagivano solo con ritardo quando mancava internet" },
      { name: "nextpit: test della Philips Hue Essential (novembre 2025)", text: "buon rapporto qualità-prezzo, colori quasi uguali a quelli delle Hue più care, ma si abbassa solo fino al 2 %" },
      { name: "TechRadar: test della Philips Hue Essential (dicembre 2025)", text: "colori difficili da distinguere da quelli delle Hue normali, troppo luminosa per una sveglia dolce perché si abbassa solo fino al 2 %" },
      { name: "nextpit (settembre 2025) e PCWorld (novembre 2025) su MotionAware", text: "serve il Bridge Pro con almeno tre lampadine nella stanza, nella prova pratica funziona più o meno come promesso, il controllo delle luci non costa nulla in più" },
      { name: "Guide di Coolblue (2025 e 2026) e GIGA (settembre 2025)", text: "Bridge e Bridge Pro a confronto, Hue via Bluetooth con fino a dieci lampadine a circa dieci metri e non da fuori casa" },
      { name: "hueblog.com e smarthomeassistent.de (agosto e settembre 2025)", text: "nuove lampadine Hue da 1.000 a 20.000 kelvin, secondo il produttore circa il 40 % più efficienti e regolabili fino allo 0,2 %, la Hue Essential solo fino al 2 %" },
      { name: "netzwelt.de: guida al modulo Hue per interruttore (dicembre 2023)", text: "se l’interruttore è spento la lampadina non ha corrente e non risponde più all’app né alla voce, per i lavori sui cavi meglio un elettricista" },
      { name: "netzwelt.de: adattatori da viaggio per la Svizzera", text: "le spine piatte Euro entrano nelle prese svizzere, le spine Schuko hanno bisogno di un adattatore" },
      { name: "Regolamento (UE) 2019/2020 sulla progettazione ecocompatibile delle sorgenti luminose, allegato II", text: "dal 1° settembre 2021 al massimo 0,5 watt in modo stand-by e 0,5 watt in stand-by in rete, i due valori non si sommano" },
      { name: "Programma 4E dell’Agenzia internazionale dell’energia (IEA): secondo rapporto sull’illuminazione smart (novembre 2022)", url: "https://www.iea-4e.org/ssl/our-work/standby-of-smart-lamps-second-report/", text: "236 lampadine e apparecchi di illuminazione smart di 67 produttori, misurati tra il 2015 e il 2020, in media 0,51 watt in stand-by, mediana 0,39 watt (in inglese)" },
      { name: "Associazione tedesca dell’energia e dell’acqua (BDEW): analisi dei prezzi della corrente (agosto 2026)", url: "https://www.bdew.de/media/documents/BDEW_Strompreisanalyse_082026.pdf", text: "37 centesimi al kWh per le famiglie in Germania, per il costo dello stand-by nelle domande (in tedesco)" },
      { name: "Dati dei produttori", text: "Bridge, Bridge Pro, MotionAware, Bluetooth, stand-by e classi energetiche secondo Philips Hue, Wi-Fi, Matter e programmazioni secondo WiZ" }
    ],
    vergleich: {
      vorherTitel: "Con lampadine normali",
      vorher: [
        "La sera cerchi l’interruttore al buio",
        "La luce è sempre la stessa, che tu cucini o ti rilassi",
        "Fuori casa ti ricordi che a casa c’è ancora una luce accesa"
      ],
      nachher: [
        "La luce si accende da sola secondo il tuo programma o quando ti muovi",
        "Con un tocco hai l’atmosfera di luce giusta",
        "Con un tocco nell’app spegni tutto, anche da fuori casa"
      ]
    },
    video: "smarte-lampen",
    preisstand: "Oktober 2026"
  },
  {
    id: "sparduschkopf",
    name: "Soffione doccia a risparmio",
    kurzname: "un soffione a risparmio",
    kategorie: "Casa",
    symbol: "🚿",
    bild: "",
    kurz: "Un soffione doccia che fa passare molta meno acqua calda. Fai la doccia come sempre e paghi comunque meno.",
    warum: "I soffioni più vecchi fanno passare spesso da 10 a 15 litri al minuto, i buoni soffioni a risparmio meno di 9. E ogni litro che non consumi non deve nemmeno essere scaldato. Così risparmi acqua ed energia senza dover fare niente. Il soffione lo cambi da solo in pochi minuti, di solito senza attrezzi.",
    statt: "Invece di 15 litri di acqua calda al minuto",
    nutzen: "Meno acqua calda a ogni doccia, doccia lunga uguale.",
    spart: ["geld"],
    fuer: [
      "Il tuo soffione è già vecchio e fa passare molta acqua",
      "La tua acqua si scalda con la corrente, così risparmi di più",
      "Vuoi risparmiare senza fare docce più brevi o più fredde"
    ],
    nachteile: [
      "Con i vecchi scaldabagni istantanei idraulici spesso non funziona: di solito si accendono solo da circa 8 litri al minuto",
      "Se il tuo soffione fa già passare meno di 10 litri al minuto, risparmi poco",
      "Non ti fa risparmiare tempo né fatica. Qui si tratta solo di soldi, acqua ed energia"
    ],
    modelle: [
      {
        stufe: "Economico", spanne: "fino a 35 €",
        name: "Duravit 3jet 110 MinusFlow", preis: 30, empfohlen: true,
        punkte: [
          "Buono per Stiftung Warentest, il più noto istituto di test per consumatori in Germania (voto 1,9, numero 4/2023), alla pari con i migliori del test",
          "Nel test fa passare 8,8 litri al minuto, ha un limitatore di portata integrato",
          "Tre tipi di getto, li cambi con una rotella",
          "Ugelli in gomma morbida: il calcare lo togli semplicemente strofinando"
        ],
        fuer: "Per la maggior parte delle persone. Il mio consiglio, perché nel test è andato bene quanto i modelli più cari.",
        hinweis: "Fa passare un po’ più d’acqua degli altri due, poco meno di 9 litri al minuto. La differenza è piccola.",
        link: amazon("duravit 3jet 110 minusflow", "duravit 3jet 110 minusflow")
      },
      {
        stufe: "Fascia media", spanne: "da 35 a 50 €",
        name: "Hansgrohe Pulsify Select S EcoSmart", preis: 38,
        punkte: [
          "Buono per Stiftung Warentest (voto 1,9, numero 4/2023)",
          "Nel test fa passare 8,6 litri al minuto, con limitatore di portata",
          "Tre tipi di getto, li cambi premendo un pulsante",
          "Adatto anche agli scaldabagni istantanei, secondo il produttore"
        ],
        fuer: "Se preferisci cambiare getto con un pulsante.",
        hinweis: "Quando compri, controlla che nel nome ci sia “EcoSmart”. È la versione testata, quella senza EcoSmart secondo il produttore fa passare molta più acqua.",
        link: amazon("hansgrohe pulsify select s ecosmart", "hansgrohe pulsify select s 105 ecosmart")
      },
      {
        stufe: "Fascia alta", spanne: "da 50 €",
        name: "Grohe Vitalio SmartActive 130 Cube", preis: 70,
        punkte: [
          "Buono per Stiftung Warentest (numero 4/2023)",
          "Nel test fa passare meno acqua dei tre, poco più di 8 litri al minuto",
          "Doccetta quadrata con tre tipi di getto",
          "Facile da pulire e da decalcificare"
        ],
        fuer: "Se ti piace la forma quadrata.",
        hinweis: "Qui più caro non vuol dire migliore: nel test non è andato meglio del Duravit economico. E non fa risparmiare molta più acqua. Su Amazon a volte si chiama “150 Cube”. Quello che conta è il codice articolo 26595000.",
        link: amazon("grohe vitalio smartactive 130 cube", "grohe vitalio smartactive 130 cube")
      }
    ],
    fragen: [
      { f: "Quanto risparmio davvero?", a: "Dipende da quanta acqua fa passare il tuo soffione attuale, da quanto durano le vostre docce e da come si scalda la vostra acqua. Risparmi di più se si scalda con la corrente, per esempio in uno scaldabagno istantaneo. In un caso esemplare Stiftung Warentest è arrivata fino a 345 euro a persona all’anno. Il calcolatore ti mostra quanto è per te." },
      { f: "Funziona con il mio scaldabagno istantaneo?", a: "Con uno scaldabagno istantaneo elettronico di solito sì. I vecchi apparecchi idraulici però si accendono di solito solo da circa 8 litri al minuto. I tre modelli qui nel test sono appena sopra, può bastare oppure no. Ecco come riconosci il tipo: quelli idraulici di solito hanno solo un interruttore a due livelli, in quelli elettronici imposti la temperatura in gradi. Con certezza lo dice la targhetta. Con uno idraulico, meglio ordinare con diritto di reso e provare. Se l’acqua resta fredda o tiepida, rimanda indietro il soffione." },
      { f: "Va bene per il mio flessibile?", a: "Quasi sempre. I flessibili e le doccette hanno una filettatura standard da mezzo pollice. Non devi farci attenzione quando compri." },
      { f: "Come cambio il soffione?", a: "Svita il vecchio soffione dal flessibile in senso antiorario, di solito si fa a mano. Se è bloccato, usa una pinza con un panno morbido in mezzo, così non graffi niente. Controlla la guarnizione nel dado del flessibile e avvita a mano il nuovo soffione. Conserva il vecchio soffione, così puoi rimetterlo quando traslochi." },
      { f: "Con questo la doccia è peggiore?", a: "Quasi per niente. Stiftung Warentest ha fatto fare la doccia a dei tester con tutti i soffioni e ha anche verificato quanto bene si risciacqua lo shampoo dai capelli lunghi. Solo con i modelli molto parsimoniosi, da 7 litri al minuto o meno, ci vuole un po’ di più. I tre qui fanno passare di più." },
      { f: "La mia acqua è molto calcarea. A cosa faccio attenzione?", a: "Scegli un soffione con ugelli in gomma morbida. Il calcare lo togli semplicemente con un dito. Stiftung Warentest ha valutato anche questi ugelli nel test. Secondo i produttori, tutti e tre i modelli qui hanno questa funzione anticalcare." },
      { f: "Perché il test è del 2023?", a: "Stiftung Warentest ha testato i soffioni a risparmio l’ultima volta a marzo 2023 (numero 4/2023), un test più recente non c’è. Due dei modelli più parsimoniosi di allora non sono più in vendita. I tre qui sono ancora disponibili." },
      { f: "Perché non c’è il soffione di Ikea?", a: "L’Ikea Brogrund è stato buono per Stiftung Warentest ed era tra i soffioni buoni più economici del test. Però si trova solo da Ikea, quindi qui non posso metterlo come link. Se ci passi comunque, è una buona scelta." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test dei soffioni a risparmio (numero 4/2023)", text: "Duravit e Hansgrohe buoni (voto 1,9 ciascuno), Grohe e Ikea Brogrund buoni, i tre modelli qui tra 8,2 e 8,8 litri al minuto, fino a 345 € di risparmio a persona all’anno in un caso esemplare" },
      { name: "Centrali dei consumatori tedesche (Verbraucherzentrale, 2025 e 2026)", text: "scaldabagni istantanei idraulici da circa 8 litri al minuto e come riconoscerli, portata dei soffioni vecchi, prova del secchio" },
      { name: "co2online: quanto fa risparmiare davvero un soffione a risparmio (febbraio 2026)", url: "https://www.co2online.de/energie-sparen/wasser-sparen/wasserspartipps/sparduschkopf/", text: "almeno 8 litri al minuto per gli scaldabagni istantanei idraulici, filettature standard (in tedesco)" },
      { name: "ORF, radiotelevisione pubblica austriaca, e associazione degli inquilini di Berlino (2023)", text: "prova del secchio, il cambio conviene sopra i 10 litri al minuto, comfort e calcare" },
      { name: "Associazione tedesca dell’energia e dell’acqua (BDEW): analisi dei prezzi della corrente (agosto 2026)", url: "https://www.bdew.de/media/documents/BDEW_Strompreisanalyse_082026.pdf", text: "37 centesimi al kWh per una famiglia che consuma 3.500 kWh all’anno, per il calcolatore (in tedesco)" },
      { name: "Ufficio federale di statistica tedesco (Destatis): comunicato del 30 settembre 2026", url: "https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/09/PD26_345_61243.html", text: "gas naturale per le famiglie 11,58 centesimi al kWh nel primo semestre 2026, simile ai dati del BDEW, per il calcolatore (in tedesco)" },
      { name: "Agenzia federale tedesca per l’ambiente (UBA): acqua del rubinetto (aprile 2026)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/trinkwasser-aus-der-leitung-nachhaltig-gesund", text: "un centesimo per circa 5 litri d’acqua del rubinetto, con la fognatura circa 60 centesimi per oltre 100 litri, per il calcolatore (in tedesco)" },
      { name: "ÖKO-TEST e calcolatore doccia delle centrali dei consumatori", text: "acqua e fognatura insieme circa 4 € al metro cubo, per il calcolatore" },
      { name: "Dati dei produttori", text: "tipi di getto, ugelli anticalcare e idoneità per gli scaldabagni istantanei" }
    ],
    profitipp: {
      titel: "Prima misura, poi cambia",
      text: "Così sai in un minuto se un soffione a risparmio conviene davvero per te:",
      liste: [
        "Apri la doccia come fai di solito",
        "Lasciala scorrere per 30 secondi in un secchio",
        "Moltiplica per due i litri nel secchio: tanti litri al minuto fa passare il tuo soffione",
        "Se sono più di 10, conviene cambiarlo"
      ]
    },
    rechner: "sparduschkopf",
    video: "sparduschkopf"
  },
  {
    id: "balkonkraftwerk",
    name: "Kit fotovoltaico da balcone",
    kurzname: "un kit fotovoltaico da balcone",
    kategorie: "Casa",
    symbol: "☀️",
    bild: "",
    kurz: "Due pannelli solari con una spina. Di giorno producono corrente, e tu la usi direttamente in casa.",
    warum: "Un kit fotovoltaico da balcone è fatto di due pannelli solari e un piccolo inverter. Lo colleghi a una presa, e quello che in casa è acceso usa prima la corrente che arriva da fuori. Frigorifero, router e apparecchi in standby consumano corrente tutto il giorno, e in un anno si accumula. In Germania puoi collegare a una presa normale un kit con potenza dei moduli fino a 960 watt e lo registri solo online. Con una batteria in più usi la corrente anche la sera.",
    statt: "Invece di comprare ogni kilowattora",
    nutzen: "Corrente tua durante il giorno, ogni anno una bolletta più bassa.",
    spart: ["geld"],
    fuer: [
      "Hai un balcone, una terrazza o un tetto piano con molto sole, meglio se esposto a sud",
      "Da voi si usa corrente anche di giorno, per esempio in smart working",
      "Vivi in affitto: in Germania il proprietario ora può dire di no solo se per lui sarebbe irragionevole",
      "Di giorno siete poco a casa e la corrente vi serve più la sera: allora fa per voi un kit con batteria"
    ],
    nachteile: [
      "Nei kit qui non c’è un supporto per i pannelli. Lo compri a parte, adatto al tuo balcone, tetto o giardino",
      "Sulla ringhiera del balcone produce molto meno che inclinato, e nessuno ha testato in modo indipendente i supporti per ringhiera",
      "Senza batteria quello che non usi subito va in rete, e in Germania di solito non ti viene pagato",
      "Per la Svizzera al momento non c’è un kit adatto su Amazon, perché lì valgono altre regole. Sto cercando una soluzione",
      "Una batteria per la sera costa più dell’intero kit e quindi si ripaga più lentamente. Se la corrente ti serve soprattutto di giorno, puoi farne a meno"
    ],
    gruppen: [
      { name: "Senza batteria", text: "Due pannelli e un piccolo inverter per la presa. È economico e i soldi li recuperi in fretta. Usi la corrente mentre c’è il sole, e quello che avanza va in rete.", ohne: "speicher" },
      { name: "Con batteria", text: "Queste batterie hanno già l’inverter integrato: i pannelli si collegano alla batteria, e solo lei va nella presa. Quello che avanza a mezzogiorno carica la batteria, e la sera la corrente la usate voi. Se hai già un kit, di solito puoi continuare a usarne i pannelli." }
    ],
    // Stand 01.11.2026: Keins dieser Modelle ist bei amazon.it lieferbar, darum zeigt die Seite diese Hinweiskarte statt der Modelle.
    // Wird eins lieferbar: keinModell löschen, seinen Link prüfen und die übrigen Modelle entfernen.
    keinModell: { stufe: "amazon.it", titel: "Al momento non disponibile", text: "I kit e le batterie che sceglierei (Solakon onLite 900 W, SUNNIVA 920 W, Zendure SolarFlow 800 Plus, Solakon ONE e Anker SOLIX Solarbank 3 Pro) al momento non si trovano su amazon.it. Appena ci sarà un kit che posso consigliarti, lo trovi qui. Nel frattempo ti aiutano a scegliere il calcolatore e le domande qui sotto." },
    modelle: [
      {
        gruppe: "Senza batteria",
        stufe: "Economico", spanne: "sotto i 400 €",
        name: "Solakon onLite 900 W", preis: 270, preisText: "ca. 250 bis 300 €", empfohlen: true,
        punkte: [
          "900 watt di potenza dei moduli: così in Germania puoi collegarlo a una presa normale",
          "Inverter da 800 watt, in Germania è il massimo",
          "Il kit fratello più grande, l’onBasic da 1.000 watt, è andato bene nel test sul campo di home&smart 2026",
          "Solakon vende il kit direttamente su Amazon"
        ],
        fuer: "Il mio consiglio per la presa normale: resta sotto i 960 watt, e Solakon lo vende direttamente.",
        hinweis: "Il kit in sé non l’ha ancora testato nessuno in modo indipendente. Il supporto per i pannelli non è incluso. Non è fatto per la Svizzera.",
        link: amazon("solakon onlite 900", "solakon onlite 900"),
        alternativen: [
          { name: "SUNNIVA 920 W con inverter EcoFlow", preis: 289, text: "Con 920 watt va bene anche lui per la presa normale. smartzone.de ha misurato di persona l’inverter EcoFlow: ben costruito, parsimonioso in standby e non troppo caldo nemmeno a pieno carico. Anche qui manca un test del kit completo, e il supporto non è incluso.", link: amazon("sunniva 920 ecoflow", "sunniva 920 ecoflow") }
        ]
      },
      {
        gruppe: "Con batteria",
        stufe: "Economico", spanne: "sotto i 500 €",
        name: "Zendure SolarFlow 800 Plus", preis: 449, preisText: "ca. 400 bis 500 €", empfohlen: true,
        punkte: [
          "Miglior rapporto qualità-prezzo per TechStage (heise) e per smartzone.de",
          "Batteria da 1,92 kWh che perde poco: smartzone.de ha misurato solo circa il 16 per cento di perdite tra carica e scarica",
          "Due ingressi per i pannelli e un inverter da 800 watt integrato, omologato anche in Austria",
          "Con la testina di lettura di Zendure sul contatore non ti serve un elettricista"
        ],
        fuer: "Il mio consiglio per il balcone con due pannelli: costa meno di tutti e nei test va comunque bene.",
        hinweis: "Pannelli e testina di lettura non sono inclusi. Prendi due pannelli con al massimo 960 watt in tutto, oppure quelli del tuo kit. Non ha una presa di emergenza per i blackout. Stiftung Warentest non l’ha testato. Il più grande SolarFlow 800 Pro a marzo 2026 l’ha giudicato insufficiente, soprattutto per interferenze troppo forti.",
        link: amazon("zendure solarflow 800 plus", "zendure solarflow 800 plus")
      },
      {
        gruppe: "Con batteria",
        stufe: "Fascia media", spanne: "da 500 a 1.000 €",
        name: "Solakon ONE con pannelli da 900 watt", preis: 895, preisText: "ca. 850 bis 1.000 €",
        punkte: [
          "TechStage, PC-WELT e techtest.org l’hanno testato e lo consigliano",
          "In confezione con due pannelli da 900 watt in tutto, adatti alla presa normale",
          "Batteria da 2,11 kWh e quattro ingressi per i pannelli",
          "Presa sull’apparecchio che continua a dare corrente durante un blackout"
        ],
        fuer: "Per te, se vuoi tutto in una confezione e una presa di emergenza per i blackout.",
        hinweis: "Stiftung Warentest non l’ha testato. Il supporto per i pannelli non è incluso, e la testina di lettura per il contatore la compri a parte. In Austria non è nell’elenco degli inverter, lì lo Zendure è la scelta più sicura.",
        link: amazon("solakon one", "solakon one")
      },
      {
        gruppe: "Con batteria",
        stufe: "Fascia alta", spanne: "da 900 €",
        name: "Anker SOLIX Solarbank 3 Pro", preis: 899, preisText: "ca. 900 bis 1.000 €",
        punkte: [
          "La migliore di cinque batterie per Stiftung Warentest, l’unica sufficiente (numero 4/2026)",
          "Anche ComputerBase e Notebookcheck ne lodano la tecnica",
          "Grande batteria da 2,69 kWh e quattro ingressi per pannelli fino a 3.600 watt",
          "Presa di emergenza sull’apparecchio per i blackout, fino a 1.200 watt"
        ],
        fuer: "Per te, se vuoi collegare quattro pannelli. Allora rende di più.",
        hinweis: "Per due pannelli è troppo grande, lì una batteria più economica si ripaga prima. Con quattro pannelli va collegato a una presa di immissione dedicata. I pannelli e un misuratore per il quadro elettrico non sono inclusi: compra anche lo Smart Meter di Anker e fallo installare subito, quando l’elettricista qualificato collega la presa.",
        link: amazon("anker solix solarbank 3 pro", "anker solix solarbank 3 pro")
      }
    ],
    ohneTeuer: { stufe: "Set più cari", titel: "Nessun consiglio", text: "Un set più caro senza batteria alla presa normale non dà quasi più corrente, perché lì non sono ammessi più di 960 watt di pannelli e 800 watt di inverter. Per usare di più la tua corrente ti serve una batteria: guarda il gruppo “Con batteria”." },
    fragen: [
      { f: "Quanto risparmio davvero?", a: "Dipende da dove stanno i pannelli, da dove sono rivolti e da quanta corrente usate di giorno. I calcoli di esempio della Verbraucherzentrale NRW (associazione dei consumatori), di C.A.R.M.E.N. e di eza! arrivano a circa 100-150 euro all’anno per un kit da 800 watt. Rende di più se i pannelli sono inclinati verso sud e da voi di giorno è acceso molto. Con la batteria risparmiate di più, ma costa anche di più. Quanto è per te lo mostra il calcolatore, anche con batteria." },
      { f: "Come hai scelto i kit e le batterie?", a: "Stiftung Warentest nel 2025 ha testato otto kit. I due buoni, di GreenSolar e di Heckert, su Amazon non ci sono più nella versione testata. Per questo ho cercato su Amazon in Germania kit senza batteria disponibili adesso, e per ognuno ho cercato test su altri siti. Ho trovato un test solo per il Solakon onBasic da 1.000 watt. Nel test sul campo di home&smart è andato bene, ma ha troppa potenza dei moduli per la presa normale. Per questo ho scelto il suo kit fratello più piccolo da 900 watt. Per entrambi i kit qui manca un test del kit completo. L’inverter del kit SUNNIVA però smartzone.de l’ha misurato di persona e lodato. Per le batterie ho letto i test di TechStage (heise), Notebookcheck, ComputerBase, PC-WELT, techtest.org, smartzone.de e Stiftung Warentest. Ho scelto solo batterie andate bene in più test e disponibili su Amazon in Germania. Stiftung Warentest ha giudicato migliore l’Anker, le altre due non le ha testate." },
      { f: "Basta una presa normale?", a: "In Germania sì, purché i pannelli insieme non superino i 960 watt. Lo dice la norma in vigore da dicembre 2025. Entrambi i kit qui restano sotto. Molti kit su Amazon hanno 1.000 watt o più. Secondo la norma vanno collegati a una presa di immissione dedicata, per esempio di Wieland, installata da un elettricista qualificato. Alcuni programmi di incentivi delle città chiedono una spina così anche per kit più piccoli. Controlla quindi prima, se vuoi un incentivo." },
      { f: "Cosa devo registrare in Germania?", a: "Solo il Marktstammdatenregister della Bundesnetzagentur (il registro ufficiale tedesco degli impianti di produzione), con un semplice modulo online. Al gestore di rete non devi più comunicarlo a parte. Se hai ancora un vecchio contatore, per ora può girare all’indietro, finché il gestore di rete non lo sostituisce. Sono ammessi 800 watt all’inverter e moduli fino a 2.000 watt in totale. Avvisa anche la tua assicurazione sulla casa e quella di responsabilità civile. Con la batteria c’è qualcosa in più, lo trovi nella prossima domanda." },
      { f: "Cosa vale in Germania con la batteria?", a: "La batteria la registri anche nel Marktstammdatenregister, dove conta come unità a sé. Molti gestori di rete vogliono inoltre che la comunichi con un breve modulo, e alcuni chiedono che la colleghi un elettricista. Chiedi quindi al tuo gestore di rete prima dell’acquisto. Una norma apposita per queste piccole batterie è ancora in preparazione. Se va collegata alla presa normale, può immettere in rete al massimo 800 watt, e i pannelli insieme non possono superare i 960 watt." },
      { f: "Come fa la batteria a sapere quanta corrente vi serve in quel momento?", a: "Lo misura un piccolo apparecchio sul contatore. Il modo più semplice è una testina di lettura che si attacca con una calamita al tuo contatore digitale. La metti tu, senza elettricista. Per molti contatori serve un PIN. Lo ricevi gratis dal gestore del contatore, di solito è il tuo gestore di rete. Un misuratore nel quadro elettrico, come quello incluso con alcune batterie, lo può installare solo un elettricista qualificato." },
      { f: "Dove metto la batteria?", a: "Meglio al riparo da pioggia e sole battente, per esempio sotto una tettoia o in garage, e abbastanza vicino ai pannelli perché i cavi ci arrivino. Le batterie sono omologate per l’esterno, ma da Stiftung Warentest con la pioggia battente in quattro su cinque è entrata acqua nella presa dell’apparecchio." },
      { f: "Posso farlo se sono in affitto?", a: "Sì, devi chiedere prima. In Germania però, da ottobre 2024, proprietari e condomini possono dire di no solo se per loro sarebbe irragionevole. Che non gli piaccia l’aspetto non basta come motivo." },
      { f: "Che supporto mi serve?", a: "Nei kit qui non è incluso. Comprane uno che si adatti esattamente al tuo posto: ringhiera, parete, tetto piano o giardino. Purtroppo non esistono test indipendenti dei soli supporti. Stiftung Warentest nel 2025 ha testato kit con supporto per tetto piano, e in cinque casi su otto i supporti si sono piegati o rotti nella tempesta simulata. Sulla ringhiera è più delicato, perché sotto possono esserci persone o auto. Se non sei sicuro, fallo montare da una ditta specializzata." },
      { f: "Conviene una batteria?", a: "Con due pannelli si ripaga più lentamente del kit da solo, perché costa più del kit. Secondo la Verbraucherzentrale e l’associazione TÜV conviene di più con impianti più grandi, per esempio con quattro pannelli. Rende di più se di giorno usate poca corrente e la sera di più. Fai il calcolo nel calcolatore: scegli lì “Con batteria”. Così vedi anche dopo quanti anni la batteria da sola si è ripagata." },
      { f: "Cosa dice Stiftung Warentest delle batterie?", a: "A marzo 2026 ha testato cinque batterie. La migliore era l’Anker, l’unica sufficiente. Tre erano insufficienti perché emettevano troppe interferenze, che possono disturbare per esempio il Wi-Fi. In quattro su cinque con la pioggia battente è entrata acqua nella presa dell’apparecchio. Altri siti di test hanno provato più batterie e molte le hanno giudicate bene. Nei test che ho letto, però, le interferenze non sono state misurate." },
      { f: "E in Svizzera?", a: "Lì le regole sono più severe: al massimo 600 watt per contatore, una spina svizzera e una protezione differenziale. Prima di accenderlo comunichi l’impianto per iscritto al tuo gestore di rete, e se sei in affitto ti serve il consenso del proprietario. In cambio il gestore di rete deve ritirare e pagare la corrente che immetti in rete. Una batteria lì è ammessa se tutto insieme immette al massimo 600 watt e c’è una dichiarazione di conformità per l’intero kit. Indicala allora nella comunicazione. I kit e le batterie qui danno fino a 800 watt e hanno una spina tedesca, in Svizzera così non sono ammessi. Un kit fatto per la Svizzera al momento su Amazon non c’è. Sto cercando un buon kit che tu possa comprare anche in Svizzera." },
      { f: "E in Austria?", a: "In Austria sono ammessi 800 watt. Non serve un permesso, ma devi comunicare l’impianto al tuo gestore di rete due settimane prima di accenderlo. Se basti una normale spina Schuko (tipo F), i gestori di rete la vedono in modo diverso. Chiedi quindi prima al tuo. In un condominio il consenso degli altri proprietari si considera dato se non si oppongono entro due mesi. Una batteria è consentita se tutto insieme può erogare al massimo 800 watt. Conta quello che l’inverter può fare secondo la scheda tecnica. Se è solo limitato a 800 watt tramite app, per alcuni gestori di rete non basta. Indica quindi la batteria quando fai la notifica e allega la scheda tecnica." },
      { f: "Quale batteria va bene in Austria?", a: "Il più adatto è lo Zendure. È nell’elenco austriaco degli inverter con 800 watt, e anche secondo il produttore 800 watt sono il suo massimo. Il tuo gestore di rete non deve controllare di nuovo uno per uno gli apparecchi di questo elenco. Anche l’Anker è nell’elenco, ma secondo la scheda tecnica arriva fino a 1.200 watt. A limitarlo a 800 watt è solo un’impostazione nell’app, quindi chiedi prima al tuo gestore di rete. Il Solakon ONE nell’elenco non l’ho trovato." },
      { f: "Vale anche in altri paesi?", a: "No. Le regole qui valgono per Germania, Austria e Svizzera. Se vivi altrove, prima dell’acquisto chiedi al tuo gestore di rete cosa è permesso." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test dei kit fotovoltaici da balcone (numero 6/2025)", text: "otto kit con supporto per tetto piano, solo due buoni (GreenSolar e Heckert), in cinque i supporti si sono piegati o rotti in una tempesta simulata, da 600 a 720 kWh all’anno sulla ringhiera del balcone, per il calcolatore" },
      { name: "Stiftung Warentest: test delle batterie per kit da balcone (numero 4/2026)", text: "cinque batterie, solo l’Anker SOLIX Solarbank 3 Pro sufficiente, tre insufficienti per interferenze troppo forti, tra cui lo Zendure SolarFlow 800 Pro, in quattro con la pioggia forte è entrata acqua nella presa dell’apparecchio" },
      { name: "home&smart: test sul campo dei kit da balcone (2026)", text: "Solakon onBasic 1000 W buono, il più piccolo onLite non è stato testato" },
      { name: "smartzone.de: test dello Zendure SolarFlow 800 Plus (gennaio 2026) e di un inverter EcoFlow (maggio 2025)", text: "consiglio qualità-prezzo con circa il 16 % di perdite in carica e scarica, la batteria stessa consuma circa 4 watt, l’inverter è ben fatto, parsimonioso in stand-by e non troppo caldo a pieno carico" },
      { name: "TechStage (heise): test delle batterie (luglio 2026) e top 10 (ottobre 2026)", text: "Zendure SolarFlow 800 Plus migliore rapporto qualità-prezzo per due pannelli, Solakon ONE consigliato" },
      { name: "Notebookcheck (giugno 2025), ComputerBase (aprile 2025) e allround-pc.com: test dell’Anker SOLIX Solarbank 3 Pro", text: "tecnica solida, lo smart meter va nel quadro elettrico e deve installarlo un elettricista qualificato" },
      { name: "PC-WELT (settembre 2025) e techtest.org (giugno 2026): test del Solakon ONE", text: "consigliato, con presa per i blackout, la testina di lettura per il contatore costa a parte" },
      { name: "Guide sulla testina di lettura del contatore", text: "di techtest.org, PC-WELT, Notebookcheck e utopia: la testina si fissa con un magnete e non serve un elettricista, il PIN è gratuito presso il gestore del contatore" },
      { name: "Verbraucherzentrale, centrale dei consumatori tedesca: leggi e norme per il fotovoltaico a spina (ottobre 2026)", url: "https://www.verbraucherzentrale.de/wissen/energie/erneuerbare-energien/gesetze-und-normen-fuer-steckersolar-was-gilt-was-gilt-noch-nicht-90740", text: "registrazione solo nel Marktstammdatenregister, un vecchio contatore per ora può girare all’indietro, 800 watt all’inverter e fino a 2.000 watt di pannelli, spina Schuko fino a 960 watt di pannelli, locatore e condominio possono rifiutare solo se è irragionevole, segnalare la batteria anche al gestore di rete, informare l’assicurazione casa e responsabilità civile (in tedesco)" },
      { name: "BSW-Solar, associazione tedesca del solare: comunicato sulla norma DIN VDE V 0126-95 (novembre 2025)", url: "https://www.solarwirtschaft.de/datawall/uploads/2025/11/251112_Steckersolar-VDE-Norm.pdf", text: "spina Schuko fino a 960 watt di pannelli e 800 watt all’inverter, una norma per le batterie a spina è ancora da elaborare (in tedesco)" },
      { name: "Verbraucherzentrale NRW: il fotovoltaico dal balcone direttamente nella presa (luglio 2026)", url: "https://www.verbraucherzentrale.nrw/wissen/energie/erneuerbare-energien/steckersolar-solarstrom-vom-balkon-direkt-in-die-steckdose-44715", text: "un pannello da 400 watt in verticale su un balcone a sud fa risparmiare circa 60 euro all’anno, la corrente immessa in rete non viene pagata (in tedesco)" },
      { name: "dpa, agenzia di stampa tedesca, con un esempio della Verbraucherzentrale NRW (su Öko-Test e t-online)", text: "800 watt in verticale su un balcone a sud, tre persone: circa 560 kWh all’anno, di cui 350 kWh usati in casa, 122,50 euro di risparmio" },
      { name: "C.A.R.M.E.N. e.V., rete bavarese per le energie rinnovabili: esempio di calcolo (aprile 2025) e panoramica delle batterie a spina (agosto 2026)", text: "per un impianto da 743 kWh all’anno da 117 a 152 euro di risparmio a seconda del consumo, la batteria conta come unità a sé nel Marktstammdatenregister" },
      { name: "eza!, centro per l’energia e l’ambiente dell’Allgäu", text: "circa 100–150 euro di risparmio all’anno, metà della corrente o più usata in casa" },
      { name: "Verbraucherzentrale Niedersachsen: batterie per kit da balcone, conviene? (luglio 2026)", url: "https://www.verbraucherzentrale-niedersachsen.de/wissen/energie/erneuerbare-energien/batteriespeicher-fuer-balkonkraftwerke-lohnt-sich-das-123659", text: "con due pannelli poco conveniente, piuttosto con impianti più grandi, registrare la batteria nel Marktstammdatenregister (in tedesco)" },
      { name: "TÜV-Verband, associazione tedesca dei TÜV (tramite dpa su Öko-Test, 2024)", text: "con uno o due pannelli spesso una batteria non conviene, con quattro o cinque pannelli può essere diverso" },
      { name: "HTW Berlin, gruppo di ricerca sui sistemi di accumulo solare: simulatore per il fotovoltaico a spina", url: "https://solar.htw-berlin.de/stecker-solar-simulator/", text: "produzione, autoconsumo e batteria calcolati per molti consumi, a est o a ovest circa il 15 % in meno, per il calcolatore (in tedesco)" },
      { name: "SolarZentrum Berlin (DGS): schede informative (settembre 2024 e febbraio 2026)", text: "produzione in verticale sul balcone e inclinata, per il calcolatore" },
      { name: "Stromspiegel (co2online): consumo di corrente delle famiglie (maggio 2025)", url: "https://www.stromspiegel.de/stromverbrauch-verstehen/stromverbrauch-im-haushalt/", text: "1.200, 1.900, 2.400 e 2.600 kWh all’anno in un appartamento con 1–4 persone senza acqua calda elettrica, per il calcolatore (in tedesco)" },
      { name: "oesterreich.gv.at, portale dell’amministrazione austriaca: produrre da sé corrente da fonti rinnovabili (ottobre 2026)", url: "https://www.oesterreich.gv.at/de/themen/umwelt_und_klima/energie_und_ressourcen_sparen/selbsterzeugung-von-strom-mit-erneuerbaren-energietraegern", text: "al massimo 800 watt, nessuna autorizzazione, comunicazione al gestore di rete due settimane prima dell’accensione, il consenso dei comproprietari si considera dato se non si oppongono entro due mesi (in tedesco)" },
      { name: "Oesterreichs Energie: elenco degli inverter (aggiornato al 23 ottobre 2026)", text: "Zendure SolarFlow 800 Plus e Anker Solarbank 3 ammessi con 800 watt, nessuna voce per Solakon" },
      { name: "Gestori di rete in Austria ed E-Control", text: "Energie Klagenfurt, LINZ NETZ, Energienetze Steiermark, Wiener Netze e Netz NÖ: con batteria al massimo 800 watt in tutto secondo la scheda tecnica, indicare la batteria nella comunicazione, sulla spina Schuko E-Control, Wiener Netze e il Land Tirolo non sono d’accordo" },
      { name: "Ispettorato federale degli impianti a corrente forte ESTI: impianti fotovoltaici plug & play (bollettino 7/2014)", url: "https://www.esti.admin.ch/inhalte/pdf/MUB/Deutsch/Mitteilungen/2014_2013/2014-07_plug-play_d.pdf", text: "al massimo 600 watt per allacciamento, spina svizzera, protezione differenziale, comunicazione scritta prima dell’accensione, dichiarazione di conformità per tutto il kit, una batteria ne fa parte (in tedesco)" },
      { name: "SvizzeraEnergia (Ufficio federale dell’energia): FAQ sugli impianti fotovoltaici plug&play (dicembre 2024)", url: "https://pubdb.bfe.admin.ch/de/publication/download/11259", text: "600 watt per allacciamento, comunicazione scritta al gestore di rete, non ammesso senza il consenso del locatore, il gestore di rete deve ritirare e remunerare la corrente immessa (in tedesco)" },
      { name: "ARERA: prezzo di riferimento per i clienti vulnerabili (ottobre-dicembre 2026)", url: "https://www.arera.it/comunicati-stampa/dettaglio/elettricita-maggior-tutela-373-nel-iv-trimestre-2026-per-i-clienti-vulnerabili", text: "43 centesimi al kWh tasse incluse per il cliente tipo, per il cursore del prezzo della corrente" },
      { name: "ElCom, Commissione federale dell’energia elettrica: newsletter 9/2025", url: "https://www.elcom.admin.ch/dam/it/sd-web/znXqHISH0pFP/Newsletter_09-2025_IT.pdf", text: "27,7 centesimi di franco al kWh per una famiglia tipo in Svizzera nel 2026, per il cursore del prezzo della corrente" },
      { name: "Dati dei produttori", text: "potenza, batteria, ingressi, dotazione e presa per i blackout secondo Solakon, SUNNIVA, EcoFlow, Zendure e Anker" }
    ],
    profitipp: {
      titel: "Usa la corrente a mezzogiorno",
      text: "Senza batteria risparmi solo con la corrente che usi nello stesso momento. Così ne usi di più tu:",
      liste: [
        "Fai andare lavastoviglie e lavatrice verso mezzogiorno, quando il sole è più forte",
        "Se di giorno sei fuori, avviale con la partenza ritardata o un timer",
        "Carica le batterie, come quella dell’e-bike, a mezzogiorno invece che la sera"
      ]
    },
    rechner: "balkonkraftwerk",
    video: "balkonkraftwerk",
    preisstand: "Oktober 2026"
  },
  {
    id: "akkusauger",
    name: "Aspirapolvere senza fili",
    kurzname: "un aspirapolvere senza fili",
    kategorie: "Casa",
    symbol: "🧹",
    bild: "",
    kurz: "Un aspirapolvere leggero senza filo. Sta appeso al muro o nella sua base di ricarica, carico, e con un gesto lo trasformi in un aspirabriciole.",
    warum: "Niente filo, niente prese da cambiare, niente aspirapolvere pesante da tirare fuori prima dal ripostiglio. Lo stacchi semplicemente dal muro e aspiri, anche se sono solo le briciole sotto il tavolo. Come aspirabriciole arrivi sul divano, sulle scale e in macchina.",
    statt: "Invece di filo e aspirapolvere pesante",
    nutzen: "Staccalo dal muro, aspira, riappendilo.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Aspiri spesso al volo, per esempio briciole o peli di animali",
      "Hai scale o più piani",
      "Vuoi pulire in fretta anche divano e auto, o un robot aspirapolvere lavapavimenti per ora è troppo caro per te"
    ],
    nachteile: [
      "L’autonomia indicata dai produttori di solito vale per la potenza più bassa. Alla massima spesso sono solo 10-15 minuti. Se hai una casa grande, scegli un modello con una seconda batteria",
      "Il contenitore della polvere è piccolo, di solito meno di un litro. Quando lo svuoti si alza un po’ di polvere",
      "Dopo qualche anno la batteria cala, e una nuova costa in più. Controlla che esistano batterie di ricambio"
    ],
    erfahrung: {
      titel: "La mia esperienza",
      bild: "", bildText: "Foto: il tuo aspirapolvere senza fili",
      text: "Se hai un robot aspirapolvere, l’aspirapolvere senza fili ti serve comunque solo molto di rado. Per questo basta un modello economico. Io ad esempio ho il Bulelink Zenith G10 e ne sono molto soddisfatto."
    },
    modelle: [
      {
        stufe: "Economico", spanne: "fino a 200\u00a0€",
        name: "Bulelink Zenith G10", preis: 130, preisText: "circa da 115 a 150\u00a0€", empfohlen: true,
        punkte: [
          "“Buono” su testit.de (voto 2,4, aprile 2026)",
          "Nel test la batteria è durata circa un’ora al livello più basso",
          "La batteria si può togliere",
          "Sta in piedi da solo, non ti serve un supporto a muro"
        ],
        fuer: "Il mio consiglio se hai già un robot aspirapolvere lavapavimenti. Lo uso io stesso, ne parlo in “La mia esperienza”.",
        hinweis: "Su testit.de i capelli si sono avvolti attorno alla spazzola e lungo i bordi è rimasto dello sporco.",
        link: amazon("bulelink zenith g10")
      }
      // amazon.it (Stand 11.11.2026): Den Bosch Unlimited 10 BKS1041RHF (B0DB8QB2GW) verkauft Amazon am 10. und 11.11. nur für 1.554,40 €, ohne andere
      // Angebote (01.11.: 569,99 €; amazon.fr am 10.11.: 572,09 €). Die Varianten BCS1041WAC (B0DS9NL3N4) und BCS1041PET (B0FLYKGD1F) sind dort nicht
      // lieferbar. Darum fällt die Karte „Fascia alta“ weg, und ohneTeuer unten nennt den Bosch (verfuegbarkeit-17). Kostet er wieder etwa 550 bis 600 €,
      // kommt die alte Karte zurück (Text in verfuegbarkeit-17.md). Die Varianten haben anderes Zubehör, für sie bräuchte die Karte einen anderen Text.
    ],
    ohneTeuer: { stufe: "Fascia alta", titel: "Al momento non disponibile", text: "Il vincitore del test di Stiftung Warentest, il Bosch Unlimited 10 (voto 2,2, numero 2/2026), al momento su amazon.it si trova solo a un prezzo molto più alto del solito. Appena torna a un prezzo normale, lo trovi qui." },
    fragen: [
      { f: "Sostituisce il mio aspirapolvere normale?", a: "Uno buono sì, soprattutto su pavimenti duri e tappeti non troppo alti. Secondo Stiftung Warentest, i migliori aspirapolvere senza filo tengono il passo con quelli classici. Ma non tutti sono buoni: nel test del numero 2/2026 alcuni apparecchi erano solo “sufficiente” o “insufficiente”." },
      { f: "Quanto dura la batteria?", a: "Quello che indicano i produttori di solito vale per la potenza più bassa. Alla massima spesso sono solo 10-15 minuti. La batteria del Bosch Unlimited 10 si può cambiare: con una seconda aspiri il doppio del tempo." },
      { f: "Come svuoto il contenitore della polvere?", a: "Sopra il bidone apri il contenitore e la polvere cade fuori. Si alza un po’ di polvere. Se sei allergico alla polvere, svuotalo meglio all’aperto o lascia che lo faccia qualcun altro." },
      { f: "Se la cava con i peli di animali?", a: "Non tutti allo stesso modo. Per Stiftung Warentest il Bosch Unlimited 10, i due modelli Miele e il Rowenta X-Force Flex 13.60 hanno tolto i peli di animali in modo affidabile, altri hanno fatto più fatica. Se dei capelli lunghi si avvolgono intorno alla spazzola, li tagli e li togli." },
      { f: "Ce ne sono anche che lavano il pavimento?", a: "Sì, le cosiddette lavapavimenti senza fili, per esempio di Tineco o Dreame. Aspirano e lavano insieme e convengono con molti pavimenti duri. Ma se non vuoi più fare niente da solo, dai un’occhiata al robot aspirapolvere lavapavimenti. Da quando ne ho uno, non passo quasi mai l’aspirapolvere io." },
      { f: "Quanto dura un apparecchio così?", a: "Di solito la prima a calare è la batteria, spesso dopo qualche anno. Controlla quindi che si possa cambiare e che esistano batterie di ricambio. Bosch dà addirittura dieci anni di garanzia sul motore dell’Unlimited 10, se lo registri su MyBosch entro sei mesi dall’acquisto." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test degli aspirapolvere senza filo (numero 2/2026)", text: "Bosch Unlimited 10 BTS1042WAC vincitore (voto 2,2), peli di animali e autonomia alla potenza massima, alcuni apparecchi solo “sufficiente” o “insufficiente”" },
      { name: "Stiftung Warentest: test degli aspirapolvere senza filo (numero 2/2025)", text: "Rowenta X-Force Flex 13.60 “buono” (voto 2,5), anche con i peli di animali" },
      { name: "testit.de: test del Bulelink Zenith G10 (aprile 2026)", text: "voto 2,4, batteria circa un’ora al livello più basso, capelli attorno alla spazzola, sporco lungo i bordi" },
      { name: "Altri test", text: "tra cui homeandsmart.de, TechRadar ed ETM Testmagazin, su autonomia, ricarica e contenitore della polvere" },
      { name: "SRF Kassensturz (televisione svizzera) e Apotheken Umschau (rivista tedesca di salute)", text: "polvere quando lo svuoti, consiglio per chi è allergico" },
      { name: "Ufficio federale di statistica tedesco (Destatis): superficie abitativa per numero di componenti della famiglia", url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/Tabellen/tabelle-wo4-wohnflaeche.html", text: "microcensimento 2022, per le medie del calcolatore (pagina in tedesco)" },
      { name: "Dati dei produttori", text: "autonomia, tempi di ricarica e batteria estraibile, dieci anni di garanzia sul motore del Bosch Unlimited 10 dopo la registrazione entro sei mesi" }
    ],
    rechner: "akkusauger",
    video: "akkusauger"
  },
  {
    id: "reiskocher",
    name: "Cuociriso",
    kurzname: "un cuociriso",
    kategorie: "Cucina",
    symbol: "🍚",
    bild: "",
    kurz: "Un piccolo apparecchio che cuoce il riso da solo e poi lo tiene in caldo. Con molti modelli puoi cuocere intanto al vapore verdure o pesce in un cestello sopra.",
    warum: "Riso e acqua dentro, premi il tasto, fatto. Non devi starci accanto: con la giusta quantità d’acqua non trabocca niente, e nel test di Stiftung Warentest il riso non si è attaccato in nessun apparecchio. Quando l’acqua è assorbita, passa da solo al mantenimento in caldo. Così è il riso che aspetta te, e non tu il riso.",
    statt: "Invece della pentola che trabocca",
    nutzen: "Premi il tasto, al resto pensa lui.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Ti piace il riso e lo mangi spesso",
      "Vuoi un riso che riesca bene ogni volta",
      "Vuoi cuocere verdure al vapore nel frattempo o occuparti d’altro"
    ],
    nachteile: [
      "Molti apparecchi sono più lenti di una pentola: nel test di Stiftung Warentest ci volevano da 13 minuti a più di un’ora, a seconda del modello, del riso e della quantità. Ma in quel tempo non devi starci accanto",
      "Occupa un po’ di spazio sul piano di lavoro o nell’armadio",
      "Sul fondo si forma spesso una crosticina sottile. Con gli apparecchi buoni resta chiara, con quelli meno buoni diventa brunastra"
    ],
    modelle: [
      {
        stufe: "Fascia media", spanne: "da 70 a 150\u00a0€",
        name: "Panasonic SR-DA152", preis: 90, empfohlen: true,
        punkte: [
          "Vincitore del test di Stiftung Warentest, il più noto istituto di test per consumatori in Germania (“buono”, voto 2,2, numero 5/2026)",
          "Grande: 1,5 litri, abbastanza riso per tutta la famiglia",
          "Con cestello per il vapore e timer fino a 24 ore",
          "Secondo il produttore la pentola ha un rivestimento in ceramica senza PFAS e va in lavastoviglie"
        ],
        fuer: "Per la maggior parte delle persone, soprattutto per le famiglie. Il mio consiglio, perché è il vincitore del test.",
        hinweis: "Non è veloce: nel test gli servivano 35-54 minuti, a seconda della quantità e del riso.",
        link: amazon("panasonic sr-da152 reiskocher", "panasonic sr-da152 cuociriso"),
        alternativen: [
          { name: "Cosori cuociriso (CRC-R501)", preis: 88, text: "Anche lui “buono” per Stiftung Warentest (numero 5/2026), con cestello per il vapore e tanti programmi. Però lento: nel test gli servivano 43-68 minuti.", link: amazon("cosori reiskocher crc-r501", "cosori cuociriso crc-r501") }
        ]
      }
    ],
    fragen: [
      { f: "Quanta acqua ci va?", a: "Te lo indicano le tacche dentro la pentola. Metti il riso con il misurino in dotazione e versi l’acqua fino alla tacca giusta. Se ti attieni a questo, viene giusto quasi sempre." },
      { f: "Devo lavare il riso prima?", a: "Sì, sciacquarlo un attimo conviene: così si attacca meno e trabocca meno facilmente. Versalo in un colino e sciacqualo con acqua fredda finché l’acqua è quasi limpida." },
      { f: "Posso cuocerci anche verdure o pesce?", a: "Sì, se il tuo apparecchio ha un cestello per il vapore. Quasi tutti ce l’hanno. Va sopra la pentola, e in molti apparecchi ci cuociono al vapore verdure o pesce mentre sotto cuoce il riso. Se le verdure restano croccanti dipende dall’apparecchio: nel test di Stiftung Warentest solo sei apparecchi hanno dato broccoli verdi e croccanti (numero 5/2026)." },
      { f: "Per quanto tempo il riso può restare in caldo?", a: "Dipende dalla temperatura. L’Istituto federale tedesco per la valutazione dei rischi consiglia di tenere il cibo in caldo ad almeno 60 gradi in ogni punto. Il riso cotto non dovrebbe restare tiepido in giro, altrimenti possono formarsi germi. Metti subito gli avanzi in frigo e mangiali entro un giorno." },
      { f: "Il rivestimento è sicuro?", a: "Nella maggior parte degli apparecchi sì. Però Stiftung Warentest ha rilevato che in due cuociriso di Reishunger dal rivestimento si stacca molto più alluminio che negli altri apparecchi, anche se il limite viene rispettato (numero 5/2026). Per questo non consiglio questi apparecchi. Con qualsiasi apparecchio: niente cucchiai di metallo e niente spugne abrasive, perché il rivestimento duri a lungo." },
      { f: "Il riso del cuociriso è più buono?", a: "Dipende dall’apparecchio. Un cuociriso regola da solo il calore e passa al mantenimento in caldo appena l’acqua è assorbita. Ma non tutti lo fanno bene: nel test di Stiftung Warentest solo 6 cuociriso su 13 hanno cotto bene il riso, tra cui i due vincitori del test (numero 5/2026). In nessuno il riso si è attaccato." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test dei cuociriso (numero 5/2026)", text: "Panasonic SR-DA152 e Rommelsbacher MRK 650 vincitori (voto 2,2 ciascuno), Cosori buono, solo 6 apparecchi su 13 hanno cotto bene il riso, in nessuno si è attaccato, broccoli croccanti solo in sei, più alluminio dal rivestimento con Reishunger" },
      { name: "Stiftung Warentest: tempi di cottura e consumo di corrente nello stesso test", text: "da 13 minuti a più di un’ora, cuociriso in media 121 wattora, pentola con coperchio 91, pentola d’acqua che bolle circa 270, per il calcolatore" },
      { name: "Istituto federale tedesco per la valutazione dei rischi (BfR): domande e risposte sulle infezioni alimentari in casa (agosto 2024)", url: "https://www.bfr.bund.de/en/service/frequently-asked-questions/topic/foodborne-infections-in-private-households-identifying-sources-and-avoiding-risks/", text: "tenere i cibi caldi ad almeno 60 °C in ogni punto, altrimenti raffreddarli sotto i 7 °C entro poche ore (in inglese)" },
      { name: "Centrali dei consumatori tedesche (Verbraucherzentrale) e ÖKO-TEST", text: "non lasciare il riso cotto tiepido, raffreddarlo presto in frigo e mangiarlo entro un giorno" },
      { name: "ALDI SÜD, discount tedesco (comunicato di gennaio 2026), e supermarktcheck.de", text: "il riso in sacchetti delle marche del supermercato costa poco più del riso sfuso, per il calcolatore" },
      { name: "Associazione tedesca dell’energia e dell’acqua (BDEW): analisi dei prezzi della corrente (agosto 2026)", url: "https://www.bdew.de/media/documents/BDEW_Strompreisanalyse_082026.pdf", text: "37 centesimi al kWh, per i circa 5 centesimi di corrente in più con i sacchetti nel calcolatore (in tedesco)" },
      { name: "Dati dei produttori e istruzioni", text: "programmi, timer, cestello per il vapore, dimensioni e cura degli apparecchi, pentola in ceramica senza PFAS del Panasonic" }
    ],
    rechner: "reiskocher",
    video: "reiskocher"
  },
  {
    id: "kaffeevollautomat",
    name: "Macchina da caffè automatica",
    kurzname: "una macchina automatica",
    kategorie: "Cucina",
    symbol: "☕",
    bild: "",
    kurz: "Una macchina da caffè che macina i chicchi al momento e ti prepara espresso, caffè o cappuccino premendo un tasto.",
    warum: "Premi un tasto e la macchina fa il resto: macina, estrae e, nei modelli qui, monta anche il latte. Una tazza fatta con i chicchi costa molto meno di una capsula di marca o di un cappuccino al bar. E non restano più capsule da buttare.",
    statt: "Invece di capsule e caffè da asporto",
    nutzen: "Caffè macinato al momento e cappuccino premendo un tasto, senza nessuna capsula.",
    spart: ["geld"],
    fuer: [
      "Bevi caffè ogni giorno, volentieri anche con il latte",
      "Finora compri capsule di marca o prendi spesso il caffè fuori",
      "Vuoi il cappuccino senza montare il latte da solo"
    ],
    nachteile: [
      "Ogni giorno servono un paio di gesti veloci: svuotare i fondi e la vaschetta raccogligocce, e risciacquare il circuito del latte dopo le bevande con latte",
      "Se ti piace il caffè filtro o usi le capsule economiche del discount, non risparmi soldi",
      "All’acquisto costa molto più di una macchina a capsule e occupa spazio: i modelli qui sono larghi da 24 a 26 centimetri e profondi da 44 a 47 centimetri"
    ],
    gruppen: [
      { name: "Con caraffa per il latte", text: "Versi il latte in una caraffa e la agganci sul davanti della macchina. Dopo metti la caraffa con il latte rimasto in frigorifero e la sciacqui regolarmente. Travasare e sciacquare conviene soprattutto se bevete molto caffè con latte. Apparecchi buoni con caraffa si trovano già nella fascia economica." },
      { name: "Con tubo del latte", text: "Un tubo sottile aspira il latte direttamente dal cartone del latte o da un contenitore accanto alla macchina. Non travasi nulla e non sciacqui nessuna caraffa. Per questo il tubo è meglio se bevi caffè con latte solo ogni tanto. Però va risciacquato dopo le bevande con latte e pulito a fondo regolarmente, altrimenti si formano germi." }
    ],
    modelle: [
      {
        gruppe: "Con caraffa per il latte",
        stufe: "Economico", spanne: "fino a 450 €",
        name: "De'Longhi Magnifica Start", preis: 420, preisText: "ca. 400 bis 420 €",
        punkte: [
          "Buono per Stiftung Warentest (voto 2,3, autunno 2024), uno degli apparecchi buoni più economici del test",
          "Cappuccino premendo un tasto: monta da sola il latte della caraffa",
          "Puoi estrarre il gruppo infusore per sciacquarlo"
        ],
        fuer: "Se bevi soprattutto espresso, caffè e cappuccino e vuoi spendere poco.",
        hinweis: "Premendo un tasto ci sono solo quattro bevande: espresso, caffè, cappuccino e acqua calda. È stata testata la ECAM220.60.B. Il link porta alla ECAM222.60.BG, che secondo De'Longhi ha la stessa dotazione. Altre versioni della Magnifica Start hanno solo un beccuccio con cui monti il latte da solo.",
        link: amazon("de'longhi magnifica start ecam222.60.bg", "de'longhi magnifica start lattecrema")
      },
      {
        gruppe: "Con caraffa per il latte",
        stufe: "Fascia media", spanne: "da 450 a 650 €",
        name: "De'Longhi Magnifica Evo Next", preis: 570, preisText: "ca. 430 bis 570 €", empfohlen: true,
        punkte: [
          "Buono per Stiftung Warentest (voto 2,1, giugno 2025), subito dietro i due vincitori del test",
          "Secondo Stiftung Warentest monta il latte in modo molto fine e cremoso",
          "13 bevande premendo un tasto: dodici bevande a base di caffè e acqua calda",
          "Puoi estrarre il gruppo infusore per sciacquarlo"
        ],
        fuer: "Per la maggior parte delle persone. Il mio consiglio, perché nel test è andata quasi bene come i vincitori, che costano molto di più.",
        hinweis: "È stata testata la ECAM310.80.SB argento e nera. Il link porta alla ECAM312.80.TB titanio, che secondo De'Longhi ha la stessa dotazione. Secondo De'Longhi la ECAM310.60.B fa solo dieci bevande premendo un tasto.",
        link: amazon("de'longhi magnifica evo next ecam312.80.tb", "de'longhi magnifica evo next"),
        alternativen: [
          { name: "De'Longhi Rivelia", preis: 600, text: "Vincitrice del test nell’autunno 2024 con lo stesso voto 2,1. Ha due contenitori dei chicchi, così passi in fretta da una varietà all’altra, e un display touch più grande. Di solito costa un po’ di più. È stata testata la EXAM440.55.B nera. Il link porta alla EXAM440.55.W bianca, secondo De'Longhi anche lei con 16 bevande e due contenitori dei chicchi.", link: amazon("de'longhi rivelia exam440.55.w", "de'longhi rivelia") }
        ]
      },
      // amazon.it (Stand 01.11.2026): Eletta Explore Cold Brew und Melitta Latticia OT gibt es dort nur ohne Preis,
      // vom Siemens EQ500 nur den nicht getesteten TP511E19, das Schwestermodell des getesteten TP516DX3 (mit Hinweis).
      // Die Nivona bleibt (849 €, Drittanbieter, so viel wie bei amazon.de). Die Eletta nennt ohneTeuer unten.
      {
        gruppe: "Con tubo del latte",
        stufe: "Economico", spanne: "fino a 550 €",
        name: "Siemens EQ500 classic TP511E19", preis: 420, preisText: "ca. 390 bis 450 €",
        punkte: [
          "Modello gemello della EQ500 TP516DX3, che per Stiftung Warentest è “buona” (voto 2,3, giugno 2025)",
          "Secondo Siemens pulisce da sola il circuito del latte con il vapore dopo ogni bevanda con latte",
          "Display a colori, cappuccino e latte macchiato premendo un tasto",
          "Puoi estrarre il gruppo infusore per sciacquarlo"
        ],
        fuer: "Se vuoi un apparecchio con tubo che si risciacqua da solo dopo ogni caffè con latte. Con le macchine da caffè Siemens ho avuto le esperienze migliori.",
        hinweis: "È stata testata la TP516DX3. Secondo Siemens anche la TP511E19 pulisce il circuito del latte con il vapore, ma non ha l’app e fa meno bevande. Metti il tubo nel cartone del latte o in un contenitore per il latte.",
        link: amazon("siemens eq500 classic tp511e19", "siemens eq500 classic tp511e19")
      },
      {
        gruppe: "Con tubo del latte",
        stufe: "Fascia alta", spanne: "da 650 €",
        name: "Nivona NICR 790", preis: 750, preisText: "ca. 745 bis 850 €", empfohlen: true,
        punkte: [
          "Vincitrice del test di Stiftung Warentest (buono, voto 2,0, giugno 2025)",
          "Secondo Nivona la puoi decalcificare anche con prodotti senza acido solfammico",
          "Comandi anche tramite app via Bluetooth",
          "Puoi estrarre il gruppo infusore per sciacquarlo"
        ],
        fuer: "Il mio consiglio se vuoi un apparecchio con tubo: ha vinto il test.",
        hinweis: "Nel test gli apparecchi con tubo più costosi non sono andati meglio. Metti il tubo direttamente nel cartone del latte.",
        link: amazon("nivona nicr 790", "nivona nicr 790")
      }
    ],
    ohneTeuer: { stufe: "Fascia alta", titel: "Al momento non disponibile", text: "La De'Longhi Eletta Explore Cold Brew, vincitrice del test di Stiftung Warentest (luglio 2026), al momento su amazon.it non è disponibile. Appena ci sarà, la trovi qui." },
    fragen: [
      { f: "Tubo o caraffa: cosa fa per me?", a: "Possono essere buoni entrambi: da Stiftung Warentest ci sono stati vincitori con tutti e due i sistemi, la Nivona con tubo nel 2025 e la Eletta Explore con caraffa nel 2026, che al momento su amazon.it non è disponibile. La differenza sta nell’uso di tutti i giorni. La caraffa la riempi, poi la metti in frigorifero con il latte rimasto e la sciacqui regolarmente. Conviene soprattutto se bevete molto caffè con latte. Io per esempio ho avuto buone esperienze con la De'Longhi Dynamica Plus, che ha una caraffa. Se bevi un caffè con latte solo ogni tanto, il tubo è meglio: lo metti nel cartone del latte e non travasi nulla. In cambio va risciacquato dopo le bevande con latte e pulito a fondo regolarmente. E con la caraffa hai un apparecchio buono a un prezzo molto più basso." },
      { f: "Quanto risparmio rispetto alle capsule?", a: "Una capsula di marca costa circa 40 centesimi, una tazza dalla macchina automatica con chicchi, acqua e corrente circa 15 centesimi. Se in casa bevete due tazze al giorno, sono circa 15 euro in meno al mese, circa 10 euro togliendo decalcificante e detergente. Con le capsule economiche del discount non resta quasi nulla. Risparmi di più se sostituisci il caffè fuori casa: un cappuccino al bar costa in media quasi 4 euro. Quanto conta per te lo mostra il calcolatore. Sono prezzi tedeschi." },
      { f: "Conviene anche rispetto al caffè filtro?", a: "Onestamente, per i soldi no. Secondo Stiftung Warentest il caffè filtro è il modo più economico di fare il caffè, anche perché la macchina costa poco. Sempre secondo Warentest, una macchina automatica conviene solo se si beve molto caffè. In cambio macina ogni tazza al momento e ti prepara espresso e cappuccino premendo un tasto." },
      { f: "Quanto lavoro richiede la pulizia?", a: "Ogni giorno svuoti i fondi e la vaschetta raccogligocce, molti apparecchi ti avvisano quando è il momento. Dopo le bevande con latte risciacqui il circuito del latte, su molti apparecchi premendo un tasto, la Siemens lo fa da sola. La caraffa la smonti e la sciacqui regolarmente, per il tubo c’è un programma di pulizia. Una volta alla settimana estrai il gruppo infusore e lo sciacqui sotto l’acqua corrente, senza detersivo. Si può fare con tutti gli apparecchi qui. Devi decalcificare quando l’apparecchio lo segnala. Per decalcificante, detergente e filtri dell’acqua calcola all’incirca da 30 a 120 euro all’anno." },
      { f: "Devo decalcificare?", a: "Sì. Alla prima accensione imposta la durezza dell’acqua, di solito c’è una striscia per il test. Così l’apparecchio ti avvisa in tempo quando serve. Con un filtro dell’acqua, secondo i produttori, decalcifichi meno spesso. Usa un prodotto consigliato dal produttore per il tuo apparecchio. Stiftung Warentest consiglia decalcificanti senza acido solfammico, perché danneggia gli organismi acquatici." },
      { f: "Quali chicchi vanno bene?", a: "Chicchi per espresso o crema, come preferisci. Non usare chicchi caramellati o aromatizzati: secondo De'Longhi possono incollare il macinino. Anche i chicchi molto oleosi non vanno bene: secondo Siemens non scendono bene nel macinino." },
      { f: "Perché tutti gli apparecchi con caraffa sono De'Longhi?", a: "Perché da Stiftung Warentest sono andati meglio nella loro fascia di prezzo: la Magnifica Start è uno degli apparecchi buoni più economici, la Magnifica Evo Next nel 2025 è arrivata subito dietro i vincitori e la Eletta Explore è l’attuale vincitrice del test. Anche Philips fa una caraffa, LatteGo, che agganci e sciacqui in fretta, senza nessun tubo. Ma con la Philips 5500 testata, nel test del 2024 espresso e cappuccino avevano un sapore solo nella media." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test delle macchine da caffè automatiche (luglio 2026)", text: "De'Longhi Eletta Explore ed Eletta Ultra vincitrici (buono), inoltre sistema del latte, dimensioni e gruppo infusore estraibile degli apparecchi" },
      { name: "Stiftung Warentest: test delle macchine da caffè automatiche (giugno 2025)", text: "Nivona NICR 790 una delle due vincitrici (voto 2,0), subito dietro la Magnifica Evo Next (voto 2,1) con schiuma di latte molto fine, Siemens EQ500 TP516DX3 buona (voto 2,3)" },
      { name: "Stiftung Warentest: test delle macchine da caffè automatiche (autunno 2024)", text: "De'Longhi Rivelia vincitrice (voto 2,1), Magnifica Start buona (voto 2,3) con quattro bevande premendo un tasto, con la Philips 5500 espresso e cappuccino solo mediocri" },
      { name: "Konsument, rivista austriaca dei consumatori (VKI), numero 1/2025", text: "test delle macchine da caffè automatiche: De'Longhi Rivelia al primo posto, con la Philips 5500 espresso e cappuccino solo nella media" },
      { name: "Stiftung Warentest: decalcificare la macchina automatica in modo ecologico (giugno 2025)", text: "l’acido solfammico è considerato dannoso per gli organismi acquatici, i decalcificanti con acido lattico o citrico non creano problemi" },
      { name: "Verbraucherzentrale NRW, centrale dei consumatori tedesca: decalcificare in modo ecologico (luglio 2026)", url: "https://www.verbraucherzentrale.nrw/wissen/umwelt-haushalt/nachhaltigkeit/umweltbewusst-entkalken-105079", text: "l’acido solfammico danneggia gli organismi acquatici, per le macchine automatiche ci sono decalcificanti a base di acido lattico (in tedesco)" },
      { name: "Stiftung Warentest: test delle capsule di caffè (numero 9/2025)", text: "Edeka Gut & Günstig vincitrice a 19 centesimi a capsula, Lidl a 17 centesimi, per il calcolatore" },
      { name: "Stiftung Warentest: comunicato del 23 novembre 2023 (numero 12/2023)", text: "il caffè filtro conviene già per la macchina economica, una macchina automatica solo se si beve molto caffè: con il prezzo dell’apparecchio in media 39 centesimi a tazza per chi ne beve poco e 19 centesimi per chi ne beve molto" },
      { name: "Coffee Friend (rivenditore di caffè): prezzi del cappuccino in dieci grandi città tedesche (giugno 2026)", text: "in media 3,80 euro, per il calcolatore" },
      { name: "kaffeebewertung.de, vollebohne.de, reparaturoderneu.de e kostenlupe.de (2026)", text: "prezzi di capsule, chicchi, decalcificante, detergente e filtri dell’acqua, per il calcolatore" },
      { name: "Dati dei produttori e istruzioni", text: "bevande, sistema del latte, pulizia, decalcificazione e chicchi adatti secondo De'Longhi, Siemens e Nivona" }
    ],
    profitipp: {
      titel: "Regola la macinatura",
      text: "Quanto sono macinati fini i chicchi cambia molto il gusto. Prova e basta, non ti costa nulla:",
      liste: [
        "Se il caffè sa di acido o è acquoso, regola uno scatto più fine",
        "Se è amaro o esce solo a gocce, regola uno scatto più grosso",
        "Gira la regolazione solo mentre il macinino è in funzione. Così dicono le istruzioni",
        "La differenza la senti solo dopo due o tre tazze"
      ]
    },
    rechner: "kaffeevollautomat",
    video: "kaffeevollautomat"
  },
  {
    id: "kuechenmaschine-kochfunktion",
    name: "Robot da cucina con cottura",
    kurzname: "un robot da cucina con cottura",
    kategorie: "Cucina",
    symbol: "🍲",
    bild: "",
    kurz: "Un apparecchio che trita, mescola e intanto cuoce, tutto nello stesso boccale. Il più conosciuto è il Bimby (Thermomix).",
    warum: "Zuppa, sugo, risotto o riso al latte: il robot mescola e scalda allo stesso tempo, e tu non devi più stare ai fornelli. Prima trita cipolle e verdure nello stesso boccale, e con molti apparecchi pesi gli ingredienti direttamente lì dentro. Dopo lavi soprattutto il boccale, invece di tagliere, coltello e pentola.",
    statt: "Invece di mescolare ai fornelli",
    nutzen: "Mescola e cuoce per te. Tu fai altro.",
    spart: ["zeit", "muehe"],
    fokus: "zeit",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Cucini spesso zuppe, sughi, stufati o risotti",
      "Preferisci passare il tuo tempo con altro che mescolare ai fornelli",
      "Vuoi tritatutto, frullatore a immersione e vaporiera in un solo apparecchio"
    ],
    nachteile: [
      "È grande e pesante: gli apparecchi qui pesano da 6 a 8,5 chili e hanno bisogno di un posto fisso sul piano di lavoro",
      "Le cipolle diventano presto una poltiglia: nel test di Stiftung Warentest, il più noto istituto di test per consumatori in Germania, quasi tutti gli apparecchi hanno sbagliato a tritare le cipolle (numero 1/2024)",
      "Non tutti sanno rosolare davvero: secondo Stiftung Warentest gli aromi di tostatura nascono solo da 140 gradi, e alcuni apparecchi arrivano solo a 120"
    ],
    modelle: [
      {
        stufe: "Economico", spanne: "fino a 450 €",
        name: "Moulinex ClickChef (HF4568)", preis: 420,
        punkte: [
          "Consiglio qualità-prezzo di Stiftung Warentest (sufficiente, voto 2,9, numero 1/2024)",
          "Con bilancia integrata e cestello per la cottura a vapore",
          "5 programmi automatici, e in più imposti tu tempo, velocità e calore"
        ],
        fuer: "Per iniziare, se prepari soprattutto zuppe, sughi e impasti.",
        hinweis: "Arriva solo a 120 gradi, quindi non puoi rosolare a fuoco vivo. Non ha ricette passo passo sull’apparecchio, solo un ricettario. Il boccale contiene 3,6 litri, per cucinare secondo il produttore ne usi 2.",
        link: amazon("moulinex clickchef hf4568", "moulinex clickchef hf4568")
      },
      {
        stufe: "Fascia media", spanne: "da 450 a 800 €",
        name: "Moulinex Companion XL (HF8401)", preis: 590, empfohlen: true,
        punkte: [
          "Per Test-Achats (Belgio) nel complesso buono più o meno quanto il Bimby TM7 (luglio 2026)",
          "Boccale grande: 3 litri utili, secondo il produttore fino a 10 persone",
          "12 programmi automatici e modalità manuale, Moulinex parla di 14 funzioni",
          "Ricette nell’app Moulinex gratuita, senza abbonamento"
        ],
        fuer: "Per la maggior parte delle persone. Il mio consiglio, perché nel test si avvicina molto al Bimby e per le ricette non ti serve un abbonamento.",
        hinweis: "Non ha la bilancia, quindi ti serve anche una bilancia da cucina. Secondo Test-Achats è solo mediamente facile da pulire.",
        link: amazon("moulinex companion xl hf8401", "moulinex companion xl")
      }
    ],
    fragen: [
      { f: "Perché il Bimby non c’è?", a: "Vorwerk vende il Bimby (in Germania si chiama Thermomix) solo direttamente, tramite i suoi incaricati e nel proprio negozio online. Per questo su Amazon non c’è. È comunque buono: per Stiftung Warentest il Bimby TM7 è stato “buono” (numero 2/2026). Il Moulinex Companion XL per Test-Achats ha ottenuto un risultato complessivo simile." },
      { f: "E il Bosch Cookit?", a: "Nel 2023 il Bosch Cookit è stato il vincitore del test di Stiftung Warentest (buono, voto 2,0, numero 1/2024). Ma su Amazon non c’è, per questo qui manca." },
      { f: "E il Monsieur Cuisine della Lidl?", a: "Il Monsieur Cuisine Smart lo vende la Lidl stessa. Per Stiftung Warentest è stato sufficiente (voto 2,8, numero 1/2024), e per Test-Achats è un consiglio qualità-prezzo. Se lo trovi alla Lidl, è un’alternativa economica con bilancia integrata." },
      { f: "Posso rosolare dentro?", a: "Solo in parte. Secondo Stiftung Warentest gli aromi di tostatura nascono solo da 140 gradi. Il ClickChef arriva solo a 120 gradi, e niente diventa davvero dorato. Per bistecca, cotoletta o cipolle croccanti è meglio continuare a usare la padella." },
      { f: "Le cipolle diventano una poltiglia?", a: "Facilmente, sì. Nel test di Stiftung Warentest quasi tutti gli apparecchi hanno sbagliato a tritare le cipolle (numero 1/2024). Il modo migliore è tritarle con pochi brevi colpi del tasto impulso o turbo e controllare ogni tanto." },
      { f: "Mi serve un abbonamento per le ricette?", a: "Per il Companion XL no: le ricette sono nell’app Moulinex gratuita. Per il ClickChef sono nel ricettario. Con il Bimby per la maggior parte delle ricette ti serve l’abbonamento Cookidoo, senza abbonamento secondo Vorwerk hai circa 200 ricette sull’apparecchio." },
      { f: "Quanto tempo fa risparmiare davvero?", a: "Onestamente, nessun test l’ha misurato. Il robot non cucina per forza più in fretta. Però ti risparmia di stare accanto a mescolare, e cipolle e verdure non le devi tagliare a mano. In quel tempo apparecchi la tavola, metti in ordine o semplicemente ti siedi. Quanto conta per te lo mostra il calcolatore." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test dei robot da cucina con cottura (numero 1/2024)", text: "Bosch Cookit vincitore (voto 2,0), Monsieur Cuisine Smart sufficiente (voto 2,8), Moulinex ClickChef consiglio qualità-prezzo (sufficiente, voto 2,9), quasi tutti hanno sbagliato a tritare le cipolle, aromi di tostatura solo da 140 gradi" },
      { name: "Stiftung Warentest: test dei robot da cucina con cottura, integrato nel numero 2/2026", text: "Bimby TM7 buono" },
      { name: "Test-Achats (Belgio): Moulinex Companion XL contro Bimby TM7 (luglio 2026)", text: "nel complesso più o meno ugualmente buoni, il Companion XL solo mediamente facile da pulire, ricette senza abbonamento, in più il Monsieur Cuisine Smart come consiglio qualità-prezzo" },
      { name: "Dati dei produttori", text: "programmi, bilancia, temperatura, capacità del boccale e ricette degli apparecchi, vendita e abbonamento Cookidoo secondo Vorwerk" }
    ],
    rechner: "kochfunktion",
    video: "kuechenmaschine-kochfunktion"
  },
  {
    id: "kuechenmaschine",
    name: "Impastatrice planetaria",
    kurzname: "un’impastatrice",
    kategorie: "Cucina",
    symbol: "🧁",
    bild: "",
    kurz: "Una macchina con una grande ciotola che impasta, mescola l’impasto per torte e monta la panna. Con gli accessori grattugia e affetta anche le verdure.",
    warum: "L’impasto lievitato per pane, pizza o treccia dolce a mano lo lavori almeno 8 minuti, ed è piuttosto faticoso. La macchina lo impasta da sola. Nel frattempo imburri lo stampo, prepari il condimento o cominci già a mettere in ordine. Fa anche l’impasto per torte e la panna montata, senza che tu debba tenere uno sbattitore.",
    statt: "Invece di impastare a mano",
    nutzen: "Impasta e mescola per te. Hai le mani libere.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Prepari spesso torte, pane, pizza o dolci lievitati",
      "Vuoi risparmiarti la fatica di impastare a mano",
      "Vuoi fare altro mentre l’impasto viene lavorato"
    ],
    nachteile: [
      "Occupa spazio: i modelli Bosch piccoli pesano poco meno di 5 chili, le macchine grandi da 8 a 10 chili. L’ideale è che stia fissa sul piano di lavoro",
      "La maggior parte frulla e trita solo con accessori: per quasi tutte le macchine a braccio ribaltabile Stiftung Warentest, il più noto istituto di test per consumatori in Germania, ha dovuto comprare accessori in più (numero 12/2025)",
      "Pulirla può richiedere tempo: secondo Stiftung Warentest alcune macchine sono faticose da pulire (numero 12/2025)"
    ],
    modelle: [
      {
        stufe: "Economico", spanne: "fino a 150 €",
        name: "Bosch Serie 2 (MUMS2EW00)", preis: 105,
        punkte: [
          "Con movimento planetario: gancio e frusta girano e intanto si spostano in tutta la ciotola",
          "Ciotola in acciaio inox da 3,8 litri, secondo il produttore per fino a 2,4 chili di impasto per torte o 1,7 chili di impasto lievitato",
          "Gancio impastatore, frusta e sbattitore sono inclusi e secondo il produttore vanno in lavastoviglie"
        ],
        fuer: "Se prepari soprattutto torte, impasti per pizza e pane e vuoi spendere poco.",
        hinweis: "Non c’è un test di laboratorio recente. Frullatore e affettaverdure non sono inclusi, se ti servono li compri a parte.",
        link: amazon("bosch serie 2 mums2ew00", "bosch mums2ew00")
      },
      // amazon.it (Stand 01.11.2026): Den getesteten MUM58W20 und die Serie 6 MUMS6ZS13D gibt es dort nicht. Darum steht hier
      // der MUM5XW20 aus derselben Serie 4, laut Bosch mit Mixer, Gemüseschneider und Waage (mit Hinweis). Die Serie 6 nennt ohneTeuer unten.
      {
        stufe: "Fascia media", spanne: "da 150 a 350 €",
        name: "Bosch Serie 4 (MUM5XW20)", preis: 240, empfohlen: true,
        punkte: [
          "Modello gemello della MUM58W20, “buona” per Stiftung Warentest (voto 2,5) e miglior rapporto qualità-prezzo (numero 12/2025)",
          "Ciotola in acciaio inox da 3,9 litri, secondo il produttore per fino a 2,7 chili di impasto",
          "Con affettaverdure e dischi: grattugia e affetta le verdure",
          "Con frullatore e bilancia integrata"
        ],
        fuer: "Per la maggior parte delle persone. Il mio consiglio, perché la sua gemella nel test era buona quasi quanto la vincitrice. Costa molto meno della vincitrice e ha già affettaverdure e frullatore.",
        hinweis: "Stiftung Warentest ha testato la MUM58W20. Secondo Bosch anche questo modello ha 1000 watt, la ciotola da 3,9 litri, frullatore e affettaverdure, e in più una bilancia integrata. Non ha programmi. Per tritare per esempio noci o erbe ti serve un accessorio tritatutto, da comprare a parte.",
        link: amazon("bosch serie 4 mum5xw20", "bosch mum5xw20")
      }
    ],
    ohneTeuer: { stufe: "Fascia alta", titel: "Al momento non disponibile", text: "La vincitrice del test di Stiftung Warentest, la Bosch Serie 6 (MUMS6ZS13D, voto 2,4, numero 12/2025), al momento su amazon.it non è disponibile. Appena ci sarà, la trovi qui." },
    fragen: [
      { f: "Non basta uno sbattitore elettrico?", a: "Per impasti per torte e panna ogni tanto sì. Ma l’impasto lievitato a mano lo lavori almeno 8 minuti, come consigliano la catena di supermercati tedesca REWE e l’ufficio distrettuale di Göppingen. La macchina lo impasta da sola e tu hai le mani libere. Ma se fai dolci solo poche volte all’anno, onestamente, risparmia i soldi e tieni lo sbattitore." },
      { f: "Perché la KitchenAid non è il mio consiglio?", a: "La KitchenAid Artisan per Stiftung Warentest è stata solo sufficiente (voto 2,7, numero 12/2025). Panna e impasto per torte li ha fatti bene, e nel test di durata ha resistito molto bene. Ma frulla o trita solo con accessori, e pesa poco più di 10 chili. Inoltre puoi schiacciarti le dita nella cerniera della testa. Se ti piace e prepari soprattutto torte, puoi comunque sceglierla." },
      { f: "Quanto impasto riesce a lavorare?", a: "Secondo Bosch la Serie 2 impasta fino a 1,7 chili di impasto lievitato, la Serie 4 fino a 1,9 e la Serie 6 fino a 2,5 chili. Di impasto per torte ne lavorano di più: 2,4, 2,7 e 3,5 chili. Per una torta o un pane basta quindi già la più piccola." },
      { f: "Può anche tagliare le verdure?", a: "Sì, con un affettaverdure. Grattugia le verdure o le taglia a fette, per esempio carote, cetrioli o patate. È incluso con la Serie 4 di questa pagina, non con la Serie 2. Per noci o erbe ti serve per entrambe un accessorio tritatutto a parte." },
      { f: "Cosa fa in più un robot da cucina con cottura?", a: "Scalda mentre mescola, così ci cucini zuppe, sughi o risotti. Per i dolci basta la macchina di questa pagina, e la sua ciotola è più grande: 3,8 o 3,9 litri invece di circa 2 o 3 litri utili. Se vuoi anche cucinare, guarda la pagina “Robot da cucina con cottura”." },
      { f: "Quanto tempo fa risparmiare davvero?", a: "Onestamente, nessun test l’ha misurato. Con la macchina l’impasto è pronto solo un po’ prima: a mano lo lavori almeno 8 minuti, con la macchina almeno 5. La grande differenza è che non devi starci tu. Quanto conta per te lo mostra il calcolatore." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test delle impastatrici planetarie (numero 12/2025)", text: "Bosch Serie 6 MUMS6ZS13D vincitrice (voto 2,4), Serie 4 MUM58W20 buona e miglior rapporto qualità-prezzo (voto 2,5), KitchenAid Artisan sufficiente (voto 2,7) ma molto resistente, accessori comprati in più per frullare e tritare per quasi tutte le macchine a braccio ribaltabile, alcune faticose da pulire, rischio di schiacciarsi le dita nella cerniera" },
      { name: "REWE, catena di supermercati tedesca: 7 errori con l’impasto lievitato", text: "impastare a mano almeno 8 minuti, con l’impastatrice almeno 5, per la domanda sullo sbattitore e per il calcolatore" },
      { name: "Ufficio distrettuale di Göppingen, ufficio agricoltura: scheda sull’impasto lievitato salato", url: "https://www.landkreis-goeppingen.de/site/LRA-GP-Internet-2024/get/params_E602328038/22300062/Sa_Merkblatt%20salziger%20Hefeteig.pdf", text: "gli stessi tempi di impasto, almeno 8 minuti a mano, almeno 5 con l’impastatrice (in tedesco)" },
      { name: "Dati dei produttori", text: "capacità della ciotola, quantità di impasto, peso, accessori e parti lavabili in lavastoviglie dei modelli Bosch" }
    ],
    rechner: "kneten",
    video: "kuechenmaschine"
  },
  {
    id: "wassersprudler",
    name: "Gasatore d’acqua",
    kurzname: "un gasatore",
    kategorie: "Cucina",
    symbol: "🫧",
    bild: "",
    kurz: "Un apparecchio che trasforma l’acqua del rubinetto in acqua frizzante. Forse lo conosci come SodaStream.",
    warum: "Acqua del rubinetto nella bottiglia, premi qualche volta, ed ecco le bollicine. Non porti più fardelli di bottiglie dalla macchina fino a casa e non riporti più i vuoti. Un cilindro di gas basta per circa 40-60 litri.",
    statt: "Invece di portare casse d’acqua",
    nutzen: "Acqua frizzante dal rubinetto. Mai più casse da portare.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Bevi molta acqua frizzante e per questo porti a casa fardelli o casse",
      "Abiti senza ascensore o fai la spesa senza auto",
      "Vuoi meno bottiglie di plastica e meno vuoti"
    ],
    nachteile: [
      "Se oggi compri acqua economica del discount, non risparmi quasi niente. Conviene davvero rispetto all’acqua di marca",
      "Tempo ne risparmi poco, perché invece di portare, gasi tu ogni bottiglia. Quello che risparmi è la fatica",
      "Devi cambiare regolarmente i cilindri di gas vuoti, circa ogni 40-60 litri",
      "Le bottiglie di plastica di solito non vanno in lavastoviglie e vanno sostituite entro la data stampata"
    ],
    modelle: [
      {
        stufe: "Fascia media", spanne: "da 80 a 120 €",
        name: "SodaStream Crystal 3.0", preis: 100, empfohlen: true,
        punkte: [
          "Buono per Stiftung Warentest (voto 1,8, numero 7/2025), appena dietro il vincitore del test",
          "Caraffe di vetro invece della plastica: vanno in lavastoviglie e non invecchiano",
          "Il cilindro Quick Connect lo inserisci con una leva. Puoi cambiarlo in molti negozi"
        ],
        fuer: "Per la maggior parte delle persone. Il mio consiglio, perché le caraffe vanno in lavastoviglie e puoi cambiare i cilindri quasi ovunque.",
        hinweis: "Una caraffa contiene 0,7 litri, ma puoi gasare solo fino alla linea di riempimento, cioè circa 0,6 litri alla volta. Quindi gasi più spesso. L’apparecchio è alto circa 45 cm. Per inserire la caraffa la parte superiore si alza e arriva a circa 55 cm, spesso troppo sotto i pensili. Accetta solo cilindri con attacco Quick Connect.",
        link: amazon("sodastream crystal 3.0", "sodastream crystal 3.0")
      },
      {
        stufe: "Fascia alta", spanne: "da 120 €",
        name: "Grohe Blue Fizz", preis: 130,
        punkte: [
          "Vincitore del test di Stiftung Warentest (buono, voto 1,7, numero 7/2025)",
          "Nel test gasa più forte di tutti, quasi come l’acqua frizzante del negozio",
          "Tre livelli, da delicato a forte, regolati con una manopola",
          "Accetta i cilindri a vite di molte marche, non solo quelli di Grohe"
        ],
        fuer: "Se la ami davvero frizzante.",
        hinweis: "Un frizzante forte richiede più gas, quindi il cilindro finisce prima. La bottiglia di plastica la lavi a mano. Stiftung Warentest ha giudicato l’uso solo sufficiente. La versione più cara “Advanced” mostra anche quanto è ancora pieno il cilindro.",
        link: amazon("grohe blue fizz starter set", "grohe blue fizz")
      }
    ],
    fragen: [
      { f: "Risparmio soldi?", a: "Molti rispetto all’acqua di marca, quasi niente rispetto all’acqua frizzante economica del discount. Facendola tu, paghi soprattutto il gas, circa 10-20 centesimi al litro a seconda del cilindro e dell’apparecchio. In Germania l’acqua frizzante del discount costa circa 20 centesimi al litro, l’acqua di marca spesso 60 centesimi e più. Ma il vero guadagno è questo: non porti più niente. Il calcolatore ti mostra quanto conta per te." },
      { f: "Posso usare semplicemente l’acqua del rubinetto?", a: "Sì. In Germania, Austria e Svizzera l’acqua potabile è tra gli alimenti più controllati, la sua qualità è da buona a ottima. Se l’acqua è rimasta nei tubi per più di quattro ore, per esempio durante la notte, lasciala scorrere finché esce dal rubinetto sensibilmente più fresca. Lo consiglia l’Agenzia federale tedesca per l’ambiente. Quanto è buona da te, te lo dice il tuo gestore dell’acqua." },
      { f: "Bottiglia di vetro o di plastica?", a: "Il vetro va in lavastoviglie, non invecchia e ha un sapore neutro. Lo usi finché non ha crepe o scheggiature. La plastica è più robusta, ma di solito si lava solo a mano. Su ogni bottiglia di plastica c’è una data entro cui devi sostituirla, perché il materiale invecchia. Lo dice Stiftung Warentest." },
      { f: "Dove cambio i cilindri vuoti?", a: "Consegni il cilindro vuoto in negozio e paghi solo la nuova ricarica. I cilindri SodaStream vuoti li cambi presso molti rivenditori che vendono SodaStream. La ricerca rivenditori sul sito di SodaStream ti mostra dove. Per gli apparecchi con attacco a vite come il Grohe Blue Fizz esistono anche cilindri di scambio di altri fornitori, spesso più economici. Ma attenzione: alcuni negozi cambiano solo la propria marca." },
      { f: "Quale cilindro va bene per il mio apparecchio?", a: "Esistono due attacchi. I cilindri a vite li avviti, i cilindri rosa Quick Connect si inseriscono con un clic. I nuovi apparecchi SodaStream come il Crystal 3.0 richiedono Quick Connect. Il Grohe Blue Fizz accetta cilindri a vite, anche di altre marche, ma non i cilindri Quick Connect. Guarda la confezione quando compri." },
      { f: "Quanto dura un cilindro?", a: "Nel test di Stiftung Warentest gli apparecchi hanno fatto da 37 a 61 litri con un cilindro. Quanto sarà da te dipende dall’apparecchio e da quanto forte gasi: più bollicine, prima il cilindro è vuoto." },
      { f: "Come tengo tutto pulito?", a: "Pulisci regolarmente l’ugello, altrimenti possono annidarsi batteri che formano una patina viscida. Stiftung Warentest consiglia anche di versare l’acqua frizzante in un bicchiere o una caraffa per berla, invece di bere dalla bottiglia per gasare. L’apparecchio lo pulisci solo con un panno umido, non va in lavastoviglie." },
      { f: "Perché non c’è l’Aarke?", a: "L’Aarke Carbonator 3 in acciaio inox è elegante ed è stato anche lui buono per Stiftung Warentest (numero 7/2025). Ma ha ottenuto un risultato peggiore dei due apparecchi qui e costa molto di più." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test dei gasatori d’acqua (numero 7/2025)", text: "Grohe Blue Fizz vincitore (voto 1,7), SodaStream Crystal 3.0 (voto 1,8), Aarke Carbonator 3 buono, da 37 a 61 litri per cilindro, consigli su bottiglie, pulizia e acqua fredda" },
      { name: "Agenzia federale tedesca per l’ambiente (UBA): acqua del rubinetto (aprile 2026)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/trinkwasser-aus-der-leitung-nachhaltig-gesund", text: "qualità molto buona, lasciarla prima scorrere dopo più di 4 ore nei tubi, un centesimo per circa 5 litri (in tedesco)" },
      { name: "Ministero austriaco degli Affari sociali e della Salute: rapporto 2024 sull’acqua potabile (ottobre 2025)", url: "https://www.sozialministerium.gv.at/Services/Aktuelles/Archiv-2025/Trinkwasserbericht-2024---%C3%96sterreichs-Trinkwasser-bleibt-von-h%C3%B6chster-Qualit%C3%A4t.html", text: "qualità eccellente, oltre il 98% dei campioni conformi (in tedesco)" },
      { name: "Ufficio federale della sicurezza alimentare e di veterinaria (USAV): acqua potabile", url: "https://www.blv.admin.ch/it/acqua-potabile", text: "qualità buona, tra gli alimenti più controllati" },
      { name: "Associazione tedesca delle fonti minerali (2025 e 2026)", text: "poco meno di 130 litri di acqua minerale a persona all’anno, di cui oltre il 70% frizzante, per il calcolatore" },
      { name: "Finanztip, ÖKO-TEST e prezzi nei negozi tedeschi (ottobre 2026)", text: "acqua frizzante del discount circa 20 centesimi, acqua di marca spesso 60 centesimi e più, gas circa 10-20 centesimi al litro, per il calcolatore" },
      { name: "Dati dei produttori", text: "attacchi, cilindri e bottiglie degli apparecchi, ricerca rivenditori SodaStream" }
    ],
    profitipp: {
      titel: "Fredda frizza meglio",
      text: "L’acqua fredda assorbe molto meglio l’anidride carbonica. Metti la bottiglia piena per un po’ in frigorifero prima di gasare, e frizzerà di più."
    },
    rechner: "sprudler",
    video: "wassersprudler"
  },
  {
    id: "mini-geschirrspueler",
    name: "Lavastoviglie da tavolo",
    kurzname: "una lavastoviglie da tavolo",
    kategorie: "Cucina",
    symbol: "🍽️",
    bild: "",
    kurz: "Una piccola lavastoviglie per il piano di lavoro. Non ti serve nessuno spazio nei mobili della cucina.",
    warum: "Stoviglie dentro, premi il tasto, e fai altro. Sparisce il lavaggio quotidiano a mano, solo pentole e padelle grandi le lavi ancora tu. È adatta soprattutto alle cucine piccole e agli appartamenti in affitto, dove una lavastoviglie normale non ci sta.",
    statt: "Invece di lavare i piatti a mano",
    nutzen: "Lava i piatti per te, anche senza spazio per una lavastoviglie grande.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Nella tua cucina non c’è posto per una lavastoviglie normale",
      "Vivi da solo o in due",
      "Lavi i piatti a mano quasi ogni giorno e preferiresti usare quel tempo in un altro modo"
    ],
    nachteile: [
      "Pentole, padelle e teglie grandi di solito non ci stanno, quelle le lavi ancora a mano",
      "Occupa spazio sul piano di lavoro: l’apparecchio qui è largo 55 centimetri e profondo 50 centimetri",
      "Nei test le lavastoviglie piccole vanno di solito peggio di quelle grandi e consumano più acqua e corrente per piatto. Test indipendenti degli apparecchi qui non ce ne sono"
    ],
    gruppen: [
      { name: "Con allacciamento all’acqua", text: "Si collega con un tubo a un attacco dell’acqua, di solito un rubinetto sotto il lavello. L’acqua di scarico va nello scarico attraverso un secondo tubo. In cambio ci stanno sei coperti, abbastanza per una o due persone." },
      { name: "Con serbatoio d’acqua", text: "Non ti serve un allacciamento: prima di ogni lavaggio riempi il serbatoio da cinque litri, e l’acqua di scarico va nel lavello attraverso un tubo. In cambio è più piccola e più rumorosa. Ci stanno tre coperti, che bastano soprattutto per una persona." }
    ],
    modelle: [
      {
        gruppe: "Con allacciamento all’acqua",
        stufe: "Economico", spanne: "fino a 300 €",
        name: "Bomann TSG 7405", preis: 290, preisText: "ca. 250 bis 300 €", empfohlen: true,
        punkte: [
          "Sei coperti e cinque programmi, tra cui un programma rapido",
          "Secondo il produttore classe energetica D, 6,5 litri d’acqua per lavaggio e 47 decibel. Per piatto è quindi più parsimoniosa e molto più silenziosa degli apparecchi con serbatoio",
          "Alla fine lo sportello si apre da solo, così le stoviglie si asciugano meglio",
          "Se vuoi, parte 2, 4 o 6 ore più tardi"
        ],
        fuer: "Il mio consiglio se hai un attacco dell’acqua libero: ci stanno sei coperti e non devi mai riempire acqua.",
        hinweis: "Test indipendenti non ce ne sono, i valori vengono dal produttore. Non ha l’AquaStop, solo una protezione antitraboccamento. C’è in bianco e in nero.",
        link: amazon("bomann tsg 7405", "bomann tsg 7405")
      }
    ],
    fragen: [
      { f: "Allacciamento all’acqua o serbatoio: cosa fa per me?", a: "Se sotto il lavello hai un attacco libero, prendi un apparecchio allacciato. Così ci stanno sei coperti e non devi mai riempire acqua. Se non c’è un attacco o non vuoi collegare nulla, prendi un apparecchio con serbatoio. È più piccolo e più rumoroso, e prima di ogni lavaggio riempi l’acqua. In cambio sta ovunque ci sia una presa e il tubo di scarico arrivi al lavello. Un apparecchio con serbatoio al momento non lo trovo su amazon.it, per questo qui c’è solo la Bomann TSG 7405 con allacciamento." },
      { f: "Come collego un apparecchio all’acqua?", a: "Il tubo di carico va su un attacco dell’acqua fredda con filettatura da 3/4 di pollice, di solito un rubinetto sotto il lavello. Se è già occupato, per esempio dalla lavatrice, aiuta un rubinetto doppio. Il tubo di scarico lo colleghi allo scarico sotto il lavello, per questo ci sono raccordi intermedi con attacco. I tubi sono inclusi, negli apparecchi qui sono lunghi circa 1,5 metri. Se ti manca un attacco adatto, chiama un idraulico." },
      { f: "Ci stanno pentole e piatti grandi?", a: "Pentole, padelle e teglie grandi di solito no, quelle le lavi ancora a mano. Prima dell’acquisto misura il tuo piatto più grande e confrontalo con le istruzioni: nei piccoli apparecchi con serbatoio i piatti piani grandi non sempre ci stanno." },
      { f: "Fa risparmiare acqua e corrente rispetto al lavaggio a mano?", a: "Rispetto alla media sì, soprattutto acqua. In uno studio dell’Università di Bonn i partecipanti hanno usato in media 103 litri d’acqua e 2,5 kWh di energia per dodici coperti lavati a mano, soprattutto per l’acqua calda. Secondo il produttore l’apparecchio qui consuma nel programma eco l’equivalente di circa 13 litri e 1,0 kWh per dodici coperti. Chi lava a mano in modo molto parsimonioso, però, consuma meno. La più parsimoniosa resta una lavastoviglie grande e piena: secondo la scheda tecnica le bastano circa 8 litri e 0,5 kWh per dodici coperti." },
      { f: "A cosa devo fare attenzione con un apparecchio con serbatoio?", a: "Riempi il serbatoio prima di ogni lavaggio, il modo più semplice è con una caraffa o un misurino. Metti il tubo di scarico nel lavello e fissalo, così non scivola fuori. Altrimenti l’acqua di scarico finisce sul piano di lavoro o sul pavimento. Molti apparecchi con serbatoio si possono comunque allacciare all’acqua più avanti." },
      { f: "Perché qui non ci sono voti dei test?", a: "Perché test non ce ne sono quasi. Stiftung Warentest, il più noto istituto di test per consumatori in Germania, negli ultimi anni non ha testato lavastoviglie da tavolo, nei test attuali ci sono solo apparecchi grandi. Anche altrove non ho trovato test indipendenti degli apparecchi qui. Per questo confronto per te i dati dei produttori, cioè classe energetica, acqua, rumore e dimensioni, e ti dico onestamente dove le lavastoviglie piccole sono più deboli." },
      { f: "E in Svizzera?", a: "Gli apparecchi qui sono fatti per la Germania e hanno una spina tedesca. Non entra nelle prese svizzere. Per questo al momento non ho un’offerta adatta per la Svizzera, ma ne sto cercando una." }
    ],
    quellen: [
      { name: "Università di Bonn: studio “A European Comparison of Cleaning Dishes by Hand”", text: "113 partecipanti hanno lavato a mano dodici coperti, in media con 103 litri d’acqua e 2,5 kWh in 79 minuti, per il calcolatore" },
      { name: "Università di Bonn: comunicato sull’uso poco efficiente delle lavastoviglie (febbraio 2011)", url: "https://www.uni-bonn.de/de/universitaet/presse-kommunikation/presseservice/archiv-pressemitteilungen/2011/058-2011", text: "200 famiglie in quattro paesi, con la macchina in media il 50% di acqua e il 28% di energia in meno che a mano, il prelavaggio costa molto, molte macchine lavorano mezze vuote (in tedesco)" },
      { name: "Stiftung Warentest: test delle lavastoviglie (numero 4/2026)", text: "nessun apparecchio da tavolo nel test, quelli larghi 60 cm vanno meglio di quelli stretti da 45 cm" },
      { name: "Which?, associazione britannica dei consumatori: guida alle lavastoviglie compatte (novembre 2025)", text: "gli apparecchi compatti di solito vanno peggio nei test e consumano più acqua e corrente per piatto" },
      { name: "Guide di Coolblue, Vattenfall, t-online e minihaushalt.de", text: "allacciamento all’acqua con filettatura da 3/4 di pollice, doppia valvola, scarico, serbatoio e cosa ci sta dentro" },
      { name: "Dati dei produttori e schede prodotto UE", text: "classe energetica, acqua, rumore e dimensioni degli apparecchi, più una lavastoviglie grande per confronto" }
    ],
    profitipp: {
      titel: "Per un lavaggio pulito e parsimonioso",
      text: "Pochi gesti fanno molta differenza:",
      liste: [
        "Butta nella spazzatura solo i residui grossi e non prelavare. Secondo uno studio dell’Università di Bonn, prelavare sotto l’acqua corrente costa molta acqua ed energia",
        "Avviala solo quando è piena. Nello stesso studio molte lavastoviglie andavano mezze vuote",
        "Usa quasi sempre il programma eco. Dura di più, ma è pensato per consumare poca corrente e acqua",
        "Con l’apparecchio con serbatoio: prima di avviarlo controlla che il tubo di scarico sia ben fermo nel lavello"
      ]
    },
    rechner: "geschirrspueler",
    video: "mini-geschirrspueler",
    preisstand: "Oktober 2026"
  },
  {
    id: "reinigungsbuerste",
    name: "Spazzola elettrica per la pulizia",
    kurzname: "una spazzola elettrica",
    kategorie: "Casa",
    symbol: "🧽",
    bild: "",
    kurz: "Una spazzola a batteria senza fili con testina rotante e manico lungo per doccia, piastrelle, vasca e fughe.",
    warum: "Semplicemente non viviamo più in un’epoca in cui il bagno si pulisce con la spugna abrasiva. La spazzola gira da sola, tu la guidi soltanto con una leggera pressione. Niente più in ginocchio nella doccia, niente strofinare finché ti fa male il braccio. Con altre testine pulisce anche forno, lavello e telai delle finestre.",
    statt: "Invece di strofinare a mano",
    nutzen: "Strofina lei per te. Tu stai in piedi.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 5, nachher: 2 },
    fuer: [
      "Pulire ti pesa sulla schiena o sulle ginocchia",
      "Fughe e box doccia sono il tuo incubo",
      "Vuoi finire il bagno più in fretta e avere più tempo per cose più belle"
    ],
    nachteile: [
      "La ricarica di solito dura circa tre ore, ma poi una carica basta per un bagno intero",
      "Fughe sporche e macchie ostinate le toglie solo con un detergente forte",
      "Se premi troppo forte, rallenta o si spegne"
    ],
    modelle: [
      // amazon.it (Stand 08.11.2026): Die Vicmayun der Günstig-Karte (B0FF8YX9KY wie auf amazon.de) ist „Non disponibile“. Die Suche zeigt
      // keine Vicmayun mit 7 Aufsätzen um 20 €, nur B0FF9HZS8P (weiß, 35,44 €) und B0HGY3CMQM (31,89 €), Verkäufer offen, beide ohne Test.
      // Darum fällt die Karte weg wie auf de (Teil 2) und fr (Teil 3). Der alte Text steht in der Git-Historie (verfuegbarkeit-14).
      // amazon.it (Stand 08.11.2026): B0D3STRLBD ist die Kedoyoy ZY-CB02 dieser Karte, dieselbe ASIN wie auf amazon.de und amazon.fr.
      // Der Titel nennt Kedoyoy nicht, die Marke steht in den Details. Buy Box bei Soul Ish mit Versand durch Amazon, 52,59 €, darum preis 53.
      // B0HBQG1JQF („2026 Upgrade“, Modell CB-02) ist ein anderes Modell, für das die Punkte dieser Karte nicht belegt sind (verfuegbarkeit-13).
      {
        stufe: "Fascia media", spanne: "da 25 a 55\u00a0€",
        name: "Spazzola elettrica a batteria Kedoyoy 8 in 1", preis: 53, empfohlen: true,
        punkte: [
          "Manico telescopico regolabile da 30 a 137 cm: pulisci doccia e vasca stando in piedi",
          "Secondo il produttore la batteria dura fino a 90 minuti e si ricarica via USB-C",
          "8 testine, anche per fughe e angoli"
        ],
        fuer: "Per la maggior parte dei bagni. Il mio consiglio, perché con il manico lungo fai anche vasca e piatto doccia stando in piedi.",
        link: amazon("kedoyoy reinigungsbürste", "kedoyoy spazzola elettrica")
      },
      {
        stufe: "Fascia alta", spanne: "da 55 €",
        name: "HOTO Electric Spin Scrubber", preis: 80,
        punkte: [
          "La migliore di otto spazzole nel test di Good Housekeeping (USA, febbraio 2026)",
          "Lì la batteria è durata quasi 2 ore e 20 minuti, uno dei tempi più lunghi del test",
          "Asta telescopica da 94 a 130 cm secondo il produttore: pulisci vasca e piatto doccia stando in piedi",
          "6 testine, tra cui una spugna e un tampone abrasivo"
        ],
        fuer: "Se pulisci un bagno grande o più bagni e vuoi che la batteria duri a lungo.",
        hinweis: "Costa molto più della fascia media. Secondo Consumer Reports la maggior parte delle spazzole pulisce più o meno allo stesso modo, la differenza più grande è la batteria.",
        link: amazon("hoto electric spin scrubber", "hoto electric spin scrubber")
      }
    ],
    fragen: [
      { f: "Una batteria basta per tutto il bagno?", a: "Di solito sì. Secondo i produttori molti modelli durano da 60 a 90 minuti, e i tester hanno pulito un bagno senza problemi con una carica. Si ricarica con un cavo USB come il telefono, di solito in circa tre ore." },
      { f: "Si può bagnare?", a: "Gli schizzi li sopporta. Ma non tenerla sott’acqua. Le testine le puoi togliere e sciacquare." },
      { f: "Quale testina serve a cosa?", a: "Spazzola tonda per piastrelle e vasca, spazzola angolare per fughe e angoli, spugna per lavandino e rubinetti, spazzola piatta per il pavimento." },
      { f: "Mi serve comunque un detergente?", a: "Sì. La spazzola ti risparmia lo strofinare, ma non il detergente. Lascialo agire qualche minuto e poi spazzola. Per le fughe sporche ti serve un detergente forte." },
      { f: "Può graffiare le superfici?", a: "Sì, può succedere. Setole dure e pad abrasivi possono graffiare acrilico, vetroceramica, acciaio inox o vernice. Lì usa una spugna morbida o un pad in microfibra e prova prima in un punto nascosto." }
    ],
    quellen: [
      { name: "Good Housekeeping Institute (USA): otto spazzole testate in laboratorio (febbraio 2026)", text: "la HOTO Electric Spin Scrubber è stata la migliore, la batteria è durata quasi 2 ore e 20 minuti, alcune spazzole richiedevano solo una leggera pressione" },
      { name: "Consumer Reports (USA): otto spazzole a batteria testate (marzo 2026)", text: "la maggior parte pulisce più o meno allo stesso modo, la differenza più grande è la batteria, con il manico arrivi negli angoli senza allungarti, inginocchiarti o piegarti, per le fughe serve un detergente forte" },
      { name: "Bob Vila (USA): nove spazzole testate per quattro settimane (novembre 2025)", text: "con una spazzola Dremel la pulizia ha richiesto una frazione del tempo, premuta forte a volte si fermava" },
      { name: "The Gadgeteer: test della HOTO Electric Spin Scrubber (novembre 2024)", text: "grazie all’asta il piatto doccia era facile da pulire, nella confezione ci sono sei spazzole e tamponi e un supporto a strappo" },
      { name: "Don't Waste Your Money: test di una spazzola Leebein (aprile 2024)", text: "quasi un’ora di pulizia di fila, ricarica di circa tre ore, troppa pressione la rallenta, le fughe sporche non sono diventate davvero pulite" },
      { name: "China-Gadgets: test di una spazzola Tilswall (gennaio 2022)", text: "davvero più facile e più veloce, prima spruzzare e lasciare agire, poi spazzolare, anche il forno con la piccola spazzola piatta, dopo 30 minuti ancora due terzi di batteria, ricarica da 3 a 4 ore" },
      { name: "Yahoo Shopping: otto spazzole provate a casa (giugno 2026)", text: "pareti e piatto doccia senza sgabello e senza inginocchiarsi, il bagno in meno di 30 minuti, ricarica da 3 a 4 ore" },
      { name: "Istruzioni per l’uso delle spazzole di Tchibo e SEECODE", text: "spazzola rotonda per vasca e piastrelle, spazzola angolare per le fughe, spazzola piatta per pavimento e finestre, spruzzi sì, immersione no, togliere le testine e sciacquarle, troppa pressione la rallenta, setole e tamponi abrasivi possono graffiare vetro, vernice e acciaio inox, provare prima in un punto poco visibile" },
      { name: "Bosch (comunicato sulla UniversalBrush, marzo 2021), Galaxus (test, luglio 2021) e GIGA (spazzola di Aldi)", text: "tamponi per lo sporco incrostato nel forno e per il vetro del forno, tampone in microfibra per vetroceramica e acciaio inox, testine per lavello e telai delle finestre, lo sportello del forno è tornato pulito senza graffi, spazzole e tamponi di ricambio costano a parte" },
      { name: "Duravit (consigli di pulizia per l’acrilico) e hausjournal.net (ottobre 2024)", text: "i prodotti abrasivi e le spugne abrasive graffiano l’acrilico, meglio panni in microfibra o cotone" },
      { name: "Dati dei produttori", text: "manico, testine, batteria e ricarica secondo Kedoyoy e HOTO, autonomie da 60 a 90 minuti anche secondo Tchibo, Silvercrest, Koohoro, Vikeri e YKYI" }
    ],
    rechner: "buerste",
    video: "buerste"
  },
  {
    id: "stretchdeckel",
    name: "Coperchi elastici in silicone",
    kurzname: "coperchi elastici",
    kategorie: "Cucina",
    symbol: "🥣",
    bild: "",
    kurz: "Coperchi elastici per ciotole, contenitori, barattoli e perfino la mezza cipolla.",
    warum: "Sostituiscono pellicola e alluminio quando copri ciotole e avanzi. Tiri semplicemente il coperchio sopra il bordo, chiude bene, e dopo va in lavastoviglie invece che nella spazzatura.",
    statt: "Invece di pellicola e alluminio",
    nutzen: "Lo tiri sopra, è chiuso. Mai più pellicola che si appiccica.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Hai spesso frutta, verdura o avanzi già tagliati",
      "Vuoi buttare meno plastica",
      "La pellicola trasparente ti fa regolarmente disperare"
    ],
    nachteile: [
      "Nessuno del set va bene sulle ciotole molto grandi",
      "Su un bordo bagnato tiene peggio",
      "La misura deve essere giusta: se è troppo grande scivola via, se è troppo piccolo può strapparsi quando lo tendi"
    ],
    modelle: [
      {
        stufe: "Economico", spanne: "meno di 10\u00a0€",
        name: "Coperchi elastici, 12 pezzi rotondi", preis: 9,
        punkte: [
          "12 coperchi rotondi, due per ognuna delle sei misure da 6,5 a 21 cm",
          "Per ciotole, barattoli e mezzi frutti"
        ],
        fuer: "Per provare, e se copri soprattutto ciotole rotonde e barattoli.",
        link: amazon("silikon stretchdeckel 12 stück rund", "coperchi elastici silicone 12 pezzi rotondi")
      },
      {
        stufe: "Fascia media", spanne: "da 10 a 16\u00a0€",
        name: "Set di coperchi elastici, 12 pezzi, rotondi e quadrati", preis: 13, empfohlen: true,
        punkte: [
          "6 coperchi rotondi e 6 quadrati in sei misure da circa 6 a 19 cm",
          "Anche per contenitori quadrati",
          "Lavabili in lavastoviglie"
        ],
        fuer: "Per la maggior parte delle cucine. Il mio consiglio, perché con coperchi rotondi e quadrati sei pronto per quasi tutto.",
        link: amazon("silikon stretchdeckel 12 stück rund eckig", "coperchi elastici silicone 12 pezzi rotondi rettangolari")
      },
      {
        stufe: "Fascia alta", spanne: "da 20\u00a0€",
        name: "Coperchi elastici Lékué, set da 3", preis: 25,
        punkte: [
          "Prodotto di marca dello specialista della cucina Lékué",
          "Tre coperchi di circa 11, 15 e 20 cm, per ciotole fino a circa 24 cm"
        ],
        fuer: "Per te se preferisci pochi coperchi, ma di alta qualità.",
        hinweis: "Solo tre misure. Per i barattoli piccoli ti serve in più un set economico.",
        link: amazon("lékué elastische deckel", "lékué coperchi elastici")
      }
    ],
    fragen: [
      { f: "Chiudono davvero bene?", a: "Sì, se il coperchio è tirato del tutto sopra il bordo e il bordo è asciutto. Nei test allora nemmeno da una ciotola inclinata è uscita acqua. Però non sono ermetici come un contenitore sottovuoto, e una ciotola di zuppa non la porterei a testa in giù." },
      { f: "Si possono mettere nel microonde?", a: "La maggior parte sì, guarda la confezione. Quando riscaldi lascia una piccola fessura aperta, così il vapore può uscire." },
      { f: "Che misura scelgo?", a: "Il coperchio deve essere un po’ più piccolo del bordo, così si tende sopra. Un set con sei misure va dal mezzo limone alla ciotola di poco più di 20 cm di diametro. Per ciotole più grandi ti serve un set con un coperchio extra large." },
      { f: "Quanto durano?", a: "Dipende dalla qualità. Da America's Test Kitchen tutti i coperchi hanno superato dieci lavaggi senza danni, con altri tester alcuni si sono strappati già mentre li mettevano. Non tenderli più del necessario e tienili lontani da coltelli e spigoli taglienti." },
      { f: "Prendono gli odori?", a: "Sì, dopo cipolla, aglio o senape spesso hanno odore per un po’. Con ogni lavaggio diminuisce. Se l’odore resta, strofinali con un po’ di bicarbonato e una spugna umida." }
    ],
    quellen: [
      { name: "America's Test Kitchen (USA): test di coperchi in silicone (novembre 2020)", text: "chiudono bene solo se tirati del tutto sopra il bordo, allora nemmeno una ciotola inclinata perdeva, tutti hanno superato dieci lavaggi in lavastoviglie, non tutti i set andavano su una ciotola grande, nel microonde il vapore sollevava i coperchi, odori come la senape sparivano solo dopo diversi lavaggi" },
      { name: "Hip2Save (USA): prova pratica (novembre 2019) con commenti dei lettori fino al 2024", text: "dal barattolo capovolto non è uscito nulla, il contenitore quadrato era coperto alla perfezione, ad alcuni lettori saltavano via da contenitori freddi o umidi, due coperchi si sono strappati perché troppo tesi" },
      { name: "ABC15 (emittente televisiva americana): test di coperchi elastici (febbraio 2016)", text: "due coperchi si sono strappati mentre li mettevano, l’acqua non è uscita, conviene prendere il coperchio un po’ più piccolo del bordo" },
      { name: "BestReviews (USA): guida ai coperchi elastici in silicone (gennaio 2023)", text: "sulle aperture grandi ci vuole un po’ di forza per metterli, in frigorifero a volte scivolano via, il bordo deve essere asciutto, alcuni si strappano facilmente, la maggior parte va nel microonde, i coperchi XL si allargano fino a 30 cm" },
      { name: "Food Huggers (produttore di coperchi in silicone) e Hunker", text: "cipolla e aglio lasciano un odore che poi svanisce, aiuta strofinarli con bicarbonato e una spugna umida" },
      { name: "Verbraucherzentrale (centro tedesco per i consumatori): guida su fogli e vaschette di alluminio (aggiornata ad agosto 2024)", url: "https://www.verbraucherzentrale.de/wissen/lebensmittel/auswaehlen-zubereiten-aufbewahren/alufolie-gefahr-fuer-die-gesundheit-17347", text: "quando sale o acidi toccano il foglio di alluminio, l’alluminio si scioglie dal foglio (in tedesco)" },
      { name: "Istituto federale tedesco per la valutazione del rischio (BfR): comunicato stampa (marzo 2018)", url: "https://www.bfr.bund.de/en/press-release/aluminium-and-food-almost-half-the-population-tries-to-avoid-aluminium-in-everyday-life/", text: "non avvolgere cibi acidi o salati nel foglio di alluminio (in inglese)" },
      { name: "Utopia (luglio 2026)", text: "cibi acidi e salati sciolgono l’alluminio dal foglio" },
      { name: "Öko-Test (numero 4/2012), Cook's Illustrated (giugno 2018), PureWow (aprile 2016) e heidelberg24 (luglio 2023)", text: "la pellicola trasparente si attacca volentieri a se stessa e non aderisce a ogni ciotola, per esempio ad alcuni contenitori di plastica" },
      { name: "Prezzi da Rossmann e Knuspr (negozi tedeschi, ottobre 2026) e Öko-Test", text: "un pezzo di pellicola costa da 0,4 a 2,5 centesimi, un pezzo di alluminio da 2 a 8 centesimi e un sacchetto per congelatore da 2,5 a 5 centesimi, per il calcolatore" },
      { name: "Dati dei produttori", text: "misure e lavastoviglie secondo yeestone, BEAUTLOHAS e Lékué, misure, microonde, bordo asciutto e cura secondo DI ORO, onegol, GIR e Pampered Chef" }
    ],
    rechner: "deckel",
    video: "deckel"
  },
  {
    id: "kindle",
    name: "E-reader",
    kurzname: "un e-reader",
    kategorie: "Tempo libero",
    symbol: "📖",
    bild: "",
    kurz: "Un lettore con uno schermo che sembra quasi carta. E ci entrano migliaia di libri.",
    warum: "Gli e-book di solito costano meno dei libri stampati, e molti classici sono persino gratis. Un nuovo libro arriva in pochi secondi, il testo lo puoi ingrandire, e la batteria dura settimane.",
    statt: "Invece dei libri stampati",
    nutzen: "Migliaia di libri in una mano, ognuno in pochi secondi.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Leggi molto, anche in viaggio o in vacanza",
      "La tua libreria è piena da un pezzo",
      "La sera leggi a letto senza accendere la lampada"
    ],
    nachteile: [
      "Immagini e fumetti in scala di grigi non rendono bene. Gli apparecchi con schermo a colori costano di più, e i loro colori sono più spenti che su un tablet",
      "Gli e-book non puoi prestarli agli amici né rivenderli",
      "Il Kindle non apre i libri delle biblioteche pubbliche tedesche (Onleihe). Per quello ti serve un altro apparecchio, per esempio di PocketBook"
    ],
    modelle: [
      {
        stufe: "Economico", spanne: "fino a 170\u00a0€",
        name: "Kindle (2026)", preis: 155,
        punkte: [
          "6 pollici e solo 140 g, più leggero di un tascabile",
          "Batteria fino a 6 settimane secondo Amazon",
          "Spazio per migliaia di libri"
        ],
        fuer: "Per te se leggi soprattutto romanzi e compri su Amazon.",
        hinweis: "Non impermeabile e senza luce calda.",
        link: amazon("kindle 2026")
      },
      {
        stufe: "Fascia media", spanne: "da 170 a 260\u00a0€",
        name: "Kindle Paperwhite (2026)", preis: 210, empfohlen: true,
        punkte: [
          "Schermo più grande da 7 pollici",
          "Luce calda per la sera a letto",
          "Impermeabile: resiste anche a una caduta nella vasca da bagno",
          "Batteria fino a 12 settimane secondo Amazon"
        ],
        fuer: "Per chi legge molto. Il mio consiglio, perché ha la luce calda ed è impermeabile.",
        link: amazon("kindle paperwhite 2026"),
        alternativen: [
          { name: "Kobo Clara BW", preis: 170, text: "Un po’ più piccolo (6 pollici), con luce calda e impermeabile. I libri li compri da Kobo invece che da Amazon.", link: amazon("kobo clara bw") }
        ]
      },
      {
        stufe: "Fascia alta", spanne: "da 260\u00a0€",
        name: "Kindle Colorsoft (2026)", preis: 300,
        punkte: [
          "Schermo a colori per fumetti, libri per bambini e immagini",
          "7 pollici, batteria fino a 8 settimane secondo Amazon",
          "Impermeabile, come il Paperwhite"
        ],
        fuer: "Per fumetti, libri per bambini e tutto ciò che ha immagini.",
        hinweis: "Per i soli romanzi il colore non ti serve.",
        link: amazon("kindle colorsoft 2026"),
        alternativen: [
          { name: "Kobo Libra Colour", preis: 245, text: "Anche a colori, in più con tasti per girare pagina. Gli appunti si prendono con una penna venduta a parte.", link: amazon("kobo libra colour") },
          { name: "PocketBook Era Color", preis: 225, text: "Colori e libri della biblioteca direttamente sull’apparecchio.", link: amazon("pocketbook era color") }
        ]
      }
    ],
    fragen: [
      { f: "Quale e-reader fa per me?", a: "Per i romanzi il Kindle normale basta e avanza. Se leggi molto, la sera a letto o nella vasca, prendi il Paperwhite: ha la luce calda ed è impermeabile. Il colore ti serve solo per fumetti, libri per bambini o immagini. E se ti piace prendere libri in prestito in biblioteca, un PocketBook è la scelta migliore." },
      { f: "Posso prendere in prestito libri dalla biblioteca?", a: "Con il Kindle purtroppo no: il servizio Onleihe delle biblioteche pubbliche tedesche lì non funziona. Con PocketBook e Tolino prendi in prestito direttamente sull’apparecchio, con Kobo tramite il computer." },
      { f: "Posso leggere file miei e PDF?", a: "Sì. Con il Kindle mandi i file sull’apparecchio con “Send to Kindle” tramite app o e-mail, anche e-book senza protezione anticopia di altri negozi. Con Kobo e PocketBook si fa per esempio via cavo dal computer." },
      { f: "Mi serve Kindle Unlimited?", a: "No. È un abbonamento facoltativo con una grande scelta di libri. Conviene solo se leggi molto e la scelta ti piace. Meglio provarlo prima, spesso c’è un mese di prova gratuito." },
      { f: "Sull’apparecchio c’è pubblicità?", a: "Sul Kindle può esserci. Quando compri, controlla se c’è scritto “con pubblicità”. Questa versione mostra offerte sulla schermata di blocco e sulla schermata iniziale, e costa un po’ meno." },
      { f: "Quanto dura la batteria?", a: "Secondo Amazon un Kindle dura da 6 a 12 settimane a seconda del modello, se leggi circa mezz’ora al giorno con il Wi-Fi spento. Con molta luce e il Wi-Fi acceso la batteria si scarica prima." }
    ],
    quellen: [
      { name: "ZDFheute (televisione pubblica tedesca): test e guida all’acquisto degli e-reader (agosto 2025)", url: "https://www.zdfheute.de/ratgeber/buch-ebook-reader-test-kaufberatung-100.html", text: "gli e-book costano in media il 20 % in meno delle edizioni stampate, l’Onleihe funziona solo con Tolino e PocketBook, l’inchiostro elettronico è riposante per gli occhi (in tedesco)" },
      { name: "Perlentaucher e Statista (2016)", text: "regola pratica degli editori: l’e-book circa il 20 % sotto il libro stampato, gli e-book bestseller nel 2016 in media il 19 % sotto l’edizione rilegata" },
      { name: "Onleihe: elenco di compatibilità degli e-reader (aggiornato ad agosto 2017)", url: "https://cms.onleihe.de/opencms/sites/default/divibib-customer/common/de/eBookReaderKompatibilitaetsliste_Onleihe.pdf", text: "i lettori Kindle sono un sistema chiuso e non sono compatibili, con il Tolino prendi in prestito direttamente, con Kobo i libri passano dal computer all’apparecchio via cavo (in tedesco)" },
      { name: "Guida rapida all’Onleihe sul PocketBook (ekz)", url: "https://medienwelten.ekz.de/_files_media/downloads/kurzleitung_-_onleihe_3_auf_dem_pocketbook_2319.pdf", text: "gli e-reader PocketBook hanno accesso diretto all’Onleihe (in tedesco)" },
      { name: "GIGA (ottobre 2025), bluepick e testberichte.de", text: "l’Onleihe non funziona su nessun Kindle, perché i Kindle non supportano la sua protezione dalla copia, con PocketBook prendi in prestito senza passare dal computer" },
      { name: "Corte di giustizia dell’Unione europea: comunicato stampa 159/19 sulla sentenza Tom Kabinet (dicembre 2019)", url: "https://curia.europa.eu/site/upload/docs/application/pdf/2019-12/cp190159en.pdf", text: "chi rivende e-book usati ha bisogno del consenso degli autori (in inglese)" },
      { name: "GIGA e Macwelt", text: "non puoi semplicemente passare i libri Kindle agli amici, la condivisione funziona solo con la biblioteca familiare della tua casa" },
      { name: "PLOS ONE: Benedetto e altri, E-Readers and Visual Fatigue (dicembre 2013)", url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0083676", text: "l’inchiostro elettronico si legge quasi come la carta, uno schermo LCD ha affaticato di più gli occhi (in inglese)" },
      { name: "Project Gutenberg: guida per tablet, telefoni ed e-reader", url: "https://www.gutenberg.org/help/mobile.html", text: "e-book gratuiti senza registrazione e senza protezione dalla copia, anche per il Kindle (in inglese)" },
      { name: "Dati degli editori su Thalia (libreria tedesca, ottobre 2026)", text: "i tascabili da 384 a 400 pagine pesano da 301 a 318 g e sono spessi 2,5 cm, quelli più spessi fino a 481 g, per il calcolatore e il video" },
      { name: "GameStar (agosto 2024) e SlashGear (ottobre 2025)", text: "un e-book occupa di solito da 1 a 5 MB, quindi su 16 GB stanno alcune migliaia di libri" },
      { name: "Test e articoli sui modelli Kindle: Notebookcheck, WinFuture, t-online, t3n, TechRadar, Gizmodo, Tom's Guide, allesebook e ComputerBase", text: "dimensioni e peso, luce calda solo dal Paperwhite in su, il Kindle base non è impermeabile, Paperwhite e Colorsoft sono protetti dall’acqua dolce secondo IPX8" },
      { name: "Test degli e-reader a colori: Der Standard, Galaxus, netzwelt, PC Games Hardware, TechRadar, Expert Reviews, homeandsmart, bluepick, ifun.de, GamePro e mobiflip", text: "costano di più, i colori sono più pallidi che su un tablet, vanno bene per fumetti, libri per bambini e immagini, per i romanzi basta un apparecchio senza colori" },
      { name: "Test degli altri apparecchi: bluepick, testberichte.de, MyEreader e testsieger.de", text: "Kobo Clara BW con luce calda e impermeabile, PocketBook Era Color con l’Onleihe direttamente sull’apparecchio" },
      { name: "GIGA (agosto 2025), GSMArena, Liliputing, The eBook Reader, netzwelt e mobiflip", text: "con Send to Kindle gli e-book senza protezione dalla copia arrivano sull’apparecchio tramite app o e-mail, la versione con pubblicità mostra offerte sulla schermata di blocco e sulla schermata iniziale, Kindle Unlimited si trova spesso con mesi gratuiti per provarlo" },
      { name: "Dati dei produttori", text: "schermo, peso, batteria, luce, protezione dall’acqua, pubblicità e biblioteca familiare secondo Amazon, apparecchi Kobo e prestito tramite computer secondo Kobo, apparecchi PocketBook secondo PocketBook, Onleihe sul Tolino secondo un comunicato di Tolino (aprile 2026)" }
    ],
    rechner: "kindle",
    video: "kindle"
  },
  {
    id: "zahnbuerste",
    name: "Spazzolino elettrico",
    kurzname: "uno spazzolino elettrico",
    kategorie: "Cura personale",
    symbol: "🪥",
    bild: "",
    kurz: "Uno spazzolino a batteria la cui testina si muove da sola. Tu lo guidi solo da un dente all’altro, e in molti modelli un timer ti dice quando sono passati due minuti.",
    warum: "Non devi più strofinare tu: lo spazzolino fa il movimento, e tu lo tieni solo contro i denti. I modelli buoni si accorgono persino quando premi troppo. E secondo una grande analisi di 51 studi, dopo più di tre mesi hai in media circa un quinto di placca in meno che con uno spazzolino manuale.",
    statt: "Invece dello spazzolino manuale",
    nutzen: "In media pulisce più a fondo, tu lo guidi soltanto.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Vuoi denti più puliti: con lo spazzolino elettrico resta in media circa un quinto di placca in meno rispetto a quello manuale",
      "Quando ti lavi i denti tendi a premere troppo",
      "Vuoi sapere quando sono passati due minuti"
    ],
    nachteile: [
      "Le testine di ricambio costano a parte. Le cambi circa ogni tre mesi",
      "Ogni tanto va messo sulla base di ricarica, a seconda del modello ogni poche settimane"
    ],
    vergleich: {
      vorherTitel: "Spazzolino manuale",
      vorher: [
        "Strofini tu avanti e indietro",
        "Ti accorgi a malapena se premi troppo",
        "Non sai quando sono passati due minuti"
      ],
      nachher: [
        "La testina si muove da sola, tu la guidi",
        "Molti modelli ti avvisano quando premi troppo",
        "In molti modelli un timer ti dice quando hai finito"
      ]
    },
    profitipp: {
      titel: "Come lavarsi i denti nel modo giusto",
      text: "Con uno spazzolino elettrico ti lavi i denti in modo diverso che a mano:",
      liste: [
        "Prima lo spazzolino in bocca, poi accendilo, altrimenti schizza",
        "Tieni la testina leggermente contro i denti e guidala piano da un dente all’altro, senza strofinare",
        "Poca pressione, il lavoro lo fa lo spazzolino per te",
        "Dopo due minuti hai finito, sciacqua brevemente la testina"
      ]
    },
    modelle: [
      {
        stufe: "Economico", spanne: "fino a 50 €",
        name: "Philips Sonicare 3100", preis: 40, preisText: "circa 40-50 €",
        punkte: [
          "La versione precedente è stata giudicata “buona” da Stiftung Warentest (voto 2,2, numero 12/2024)",
          "Sensore di pressione: ti avvisa quando premi troppo",
          "Timer con un segnale ogni 30 secondi"
        ],
        fuer: "Per te se vuoi passare all’elettrico spendendo poco e ti basta un solo programma.",
        hinweis: "Ha un solo programma di pulizia, e secondo il produttore la batteria dura fino a 14 giorni.",
        link: amazon("philips sonicare 3100")
      },
      {
        stufe: "Fascia media", spanne: "da 50 a 120 €",
        name: "Laifen Wave Pro", preis: 100, preisText: "circa 100 €", empfohlen: true,
        punkte: [
          "La testina oscilla e vibra allo stesso tempo, secondo il produttore fino a 60° e fino a 66.000 volte al minuto",
          "Sensore di pressione: se premi troppo, ti dà un segnale",
          "Due modalità con tre livelli ciascuna. Nell’app puoi regolarle con più precisione, ma non ti serve",
          "Secondo il produttore la batteria dura fino a 70 giorni"
        ],
        fuer: "Per la maggior parte delle persone. Il mio consiglio, perché lo uso io stesso.",
        hinweis: "Stiftung Warentest non l’ha ancora testato, il modello precedente Laifen Wave lì è stato giudicato “buono” (voto 2,2, numero 12/2024). Non ha una porta USB-C sul manico e si ricarica solo senza fili sulla sua base.",
        link: amazon("laifen wave pro"),
        alternativen: [
          { name: "Philips Sonicare 5500", preis: 80, text: "Attuale vincitore del test di Stiftung Warentest (“buono”, voto 1,7, numero 12/2025). Ti avvisa quando premi troppo e ha due modalità.", link: amazon("philips sonicare 5500") },
          { name: "Oral-B iO Series 3N", preis: 70, text: "È stato vincitore del test di Stiftung Warentest (“buono”, voto 1,9, numero 12/2024). Un anello luminoso ti mostra quando premi troppo. Tre modalità, senza app.", link: amazon("oral-b io series 3n") },
          { name: "Laifen Wave", preis: 80, text: "Il modello precedente, più economico, “buono” per Stiftung Warentest (voto 2,2, numero 12/2024). Però non ha il sensore di pressione.", link: amazon("laifen wave") }
        ]
      },
      {
        stufe: "Fascia alta", spanne: "da 150 €",
        name: "Philips Sonicare Prestige 9900", preis: 200, preisText: "circa 200 €",
        punkte: [
          "È stato vincitore del test di Stiftung Warentest (“buono”, voto 1,8, numero 12/2021)",
          "Adatta da solo l’intensità alla tua pressione (SenseIQ)",
          "Con app"
        ],
        fuer: "Per te se vuoi qualcosa in più: adatta l’intensità alla tua pressione e ha un’app.",
        hinweis: "Il test è già del 2021. Per la maggior parte delle persone la fascia media basta e avanza.",
        alternativen: [
          { name: "Philips Sonicare 7100", preis: 140, text: "“Buono” per Stiftung Warentest (voto 1,8, numero 12/2025) e più economico del Prestige.", link: amazon("philips sonicare 7100") }
        ],
        link: amazon("philips sonicare prestige 9900")
      }
    ],
    fragen: [
      { f: "Uno spazzolino elettrico pulisce davvero meglio?", a: "Sì. Una grande analisi di 51 studi (Cochrane, 2014) mostra che chi si lava i denti con lo spazzolino elettrico per più di tre mesi ha in media il 21 % di placca in meno e l’11 % di infiammazione gengivale in meno rispetto allo spazzolino manuale." },
      { f: "Sonico o con testina rotante: quale è meglio?", a: "Puliscono bene entrambi. Secondo Stiftung Warentest, nessuno dei due sistemi ha vantaggi chiari nella pulizia. Nel test più recente (numero 12/2025) è in testa uno spazzolino sonico, il Philips Sonicare 5500 (voto 1,7). Nel test precedente aveva vinto un Oral-B con testina rotonda (voto 1,9). Prendi quello che ti piace usare." },
      { f: "Ogni quanto cambio la testina?", a: "Circa ogni tre mesi, o prima se le setole si aprono. Alcuni modelli te lo ricordano." },
      { f: "Come mi lavo i denti nel modo giusto?", a: "Due volte al giorno per due minuti. Tieni la testina leggermente contro i denti e la guidi piano da un dente all’altro. Non devi strofinare, lo fa lo spazzolino." },
      { f: "Mi serve l’app?", a: "No. Sul Laifen Wave Pro con l’app regoli come pulisce e vedi un resoconto dei tuoi tempi di pulizia. Puoi lavarti i denti anche senza telefono." }
    ],
    quellen: [
      { name: "Stiftung Warentest: test degli spazzolini elettrici (numero 12/2025)", text: "Philips Sonicare 5500 vincitore (voto 1,7), Sonicare 7100 (voto 1,8), né il sonico né la testina rotante con vantaggi chiari nella pulizia" },
      { name: "Stiftung Warentest: test degli spazzolini elettrici (numero 12/2024)", text: "Oral-B iO Series 3N vincitore (voto 1,9), Laifen Wave e la versione precedente del Philips Sonicare 3100 buoni (voto 2,2 ciascuno)" },
      { name: "Stiftung Warentest: test degli spazzolini elettrici (numero 12/2021)", text: "Philips Sonicare Prestige 9900 vincitore (voto 1,8)" },
      { name: "Cochrane: spazzolini elettrici a confronto con quelli manuali per la salute della bocca (giugno 2014)", url: "https://www.cochrane.org/evidence/CD002281_poweredelectric-toothbrushes-compared-manual-toothbrushes-maintaining-oral-health", text: "56 studi, di cui 51 nella meta-analisi, dopo più di tre mesi in media il 21 % di placca in meno e l’11 % di infiammazione gengivale in meno (in inglese)" },
      { name: "Altre revisioni (2020 e 2022) e lo studio SHIP di Greifswald (2019)", text: "lo spazzolino elettrico rimuove un po’ più placca di quello manuale, per ogni lavaggio la differenza è piccola ma accertata, e in undici anni si sono persi meno denti" },
      { name: "Altri test del Laifen Wave Pro (2026)", text: "tra cui Live Science, digitalreviews.net, smartworld.it, smartzone.de ed Expert Reviews, su sensore di pressione, modalità e autonomia della batteria" },
      { name: "Dati dei produttori e istruzioni", text: "modalità, timer, sensore di pressione e autonomia dei modelli, come lavarsi i denti e cambio della testina secondo Philips e Oral-B" }
    ],
    video: "zahnbuerste",
    preisstand: "Oktober 2026"
  }

];
