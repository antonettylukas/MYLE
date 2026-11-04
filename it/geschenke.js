/*
  La pagina regali myle.life/it/geschenke („Regali che regalano tempo“). Stessa struttura di geschenke.js in tedesco.
  Solo apparecchi che MYLE consiglia già. Ogni gruppo indica i prodotti con il loro id in produkte.js.
  Se un apparecchio non è disponibile nel negozio del paese (keinModell), la pagina lo tralascia.
*/
const GESCHENKE = {
  eyebrow: "Idee regalo",
  titel: "Regali che regalano tempo",
  einstieg: [
    "Di oggetti la maggior parte di noi ne ha abbastanza. Di tempo libero, invece, quasi nessuno ne ha in più.",
    "Per questo qui trovi aiutanti che ogni settimana tolgono un po’ di lavoro a chi li riceve, non solo a Natale. Li consiglio tutti anche su MYLE, ognuno con svantaggi onesti e un calcolatore nella pagina del prodotto."
  ],
  spartStd: "fa risparmiare circa {n} h all’anno",
  spartGeld: "fa risparmiare circa {geld} all’anno",
  knopf: "Vai al mio consiglio",
  hinweis: "Le ore e gli euro sono stime con i valori iniziali dei calcolatori. In ogni pagina prodotto puoi calcolarli con più precisione per la casa di chi riceve il regalo.",
  gruppen: [
    { titel: "Per la prima casa", text: "Poco spazio, poco tempo e ancora nessuna routine domestica: questi aiutanti rendono l’inizio più facile.",
      produkte: ["airfryer", "reiskocher", "mini-geschirrspueler", "smarte-lampen", "wassersprudler"] },
    { titel: "Per genitori con poco tempo", text: "Quando la giornata con i bambini è già piena, aiuta tutto ciò che funziona da solo nel frattempo.",
      produkte: ["waschtrockner", "kuechenmaschine-kochfunktion"] },
    { titel: "Per gli amanti del caffè e delle cose buone", text: "Per chi ama concedersi qualcosa: un buon caffè, pane appena sfornato e un libro la sera.",
      produkte: ["kaffeevollautomat", "kuechenmaschine", "kindle"] },
    { titel: "Per chi non ama pulire", text: "Il mio consiglio più importante è qui in cima. Dopo, passare l’aspirapolvere non è più un pensiero per la maggior parte delle persone.",
      produkte: ["saugroboter", "akkusauger"] },
    { titel: "Piccoli regali", text: "Aiutanti economici che però servono ogni giorno. Perfetti per il Babbo Natale segreto o come pensierino.",
      produkte: ["stretchdeckel", "reinigungsbuerste", "sparduschkopf", "zahnbuerste"] }
  ],
  warum: {
    "airfryer": "Croccante senza lungo preriscaldamento e quasi niente piatti da lavare. Sta anche in una cucina piccola.",
    "reiskocher": "Il riso riesce ogni volta, e nessuno deve restare accanto ai fornelli.",
    "smarte-lampen": "Luce tramite app o programmazione, senza elettricista. Le lampadine si avvitano semplicemente nel portalampada esistente.",
    "wassersprudler": "Acqua frizzante direttamente dal rubinetto. Mai più casse d’acqua da portare.",
    "waschtrockner": "Bucato dentro la mattina, asciutto la sera. Niente più stendino in salotto.",
    "kuechenmaschine-kochfunktion": "Mescola e cuoce da sola mentre ti occupi dei bambini.",
    "mini-geschirrspueler": "Lava i piatti anche dove una lavastoviglie grande non entra.",
    "kaffeevollautomat": "Caffè macinato al momento e cappuccino con un tasto, senza nessuna capsula.",
    "kuechenmaschine": "Impasta per pane, pizza e biscotti. Le mani restano libere.",
    "kindle": "Migliaia di libri in una mano, con una luce propria per leggere a letto.",
    "saugroboter": "Pulisce secondo una programmazione mentre chi lo riceve è al lavoro. Per me un enorme salto di qualità della vita.",
    "akkusauger": "Staccarla dal muro, passarla al volo, riappenderla. Senza cavo e senza aspirapolvere pesante.",
    "stretchdeckel": "Si adatta a ciotole, barattoli, vasetti e perfino a mezza cipolla, e sostituisce la pellicola.",
    "reinigungsbuerste": "Strofina vasca, piastrelle e lavandino mentre stai in piedi dritto.",
    "sparduschkopf": "Fa risparmiare acqua calda a ogni doccia, e quindi soldi, senza fare la doccia più corta.",
    "zahnbuerste": "Pulisce più a fondo di uno spazzolino manuale. Basta guidarlo."
  },
  fragenTitel: "Domande e risposte",
  fragen: [
    { f: "Cosa regalare a chi ha già tutto?",
      a: "Meglio qualcosa che tolga lavoro ogni settimana. Di oggetti la maggior parte delle persone ne ha abbastanza, ma di tempo libero quasi nessuno. Un robot aspirapolvere lavapavimenti, una friggitrice ad aria o una macchina da caffè automatica si usano quasi ogni giorno e ricordano a lungo il regalo. Chiedi prima con discrezione se in casa ce n’è già uno." },
    { f: "Un robot aspirapolvere è un buon regalo?",
      a: "Sì, se sul pavimento non c’è troppa roba in giro e chi lo riceve è disposto a configurare un’app una volta. Con i valori iniziali del mio calcolatore fa risparmiare circa 50 ore di pulizie all’anno. Per chi non è adatto lo spiego onestamente nella pagina del robot aspirapolvere lavapavimenti." },
    { f: "Entro quando devo ordinare perché arrivi prima di Natale?",
      a: "Purtroppo non posso prometterlo. Quanto ci mette un apparecchio ad arrivare lo vedi direttamente nella pagina del prodotto su Amazon, dove c’è la data di consegna prevista. Gli apparecchi grandi spesso ci mettono più di quelli piccoli. Meglio ordinare una o due settimane prima, così hai un margine." }
  ]
};
