/*
  Französische Fassung von rechner.js (für myle.life/fr/).
  Gleiche Regler und Formeln wie dort, nur die Texte sind auf Französisch.
  Wenn sich in rechner.js etwas ändert, muss es hier genauso geändert werden.
  Was die Felder bedeuten, steht in rechner.js.
*/

// Prix moyen de l’électricité par pays, en repères sur le curseur du prix de l’électricité (sources dans STROM_QUELLEN)
const STROM_LAENDER = [
  { wert: 0.20, kurz: "FR", name: "France" },
  { wert: 0.35, kurz: "BE", name: "Belgique" },
  { wert: 0.30, kurz: "CH", name: "Suisse", zusatz: "27,7 centimes" }
];
const STROM_QUELLEN = " Les lettres sur le curseur du prix de l’électricité\u202f: France 0,20\u00a0€ le kWh (tarif bleu EDF, option base, août 2026), Belgique environ 0,35\u00a0€ (Eurostat, 2e semestre 2025), Suisse 27,7 centimes, soit environ 0,30\u00a0€ (ElCom, ménage type 2026).";

const RECHNER = {
  saugroboter: {
    mit: "un robot aspirateur laveur",
    felder: [
      { id: "m2", label: "Quelle est la surface de votre logement\u202f?", min: 20, max: 200, step: 5, wert: 70, einheit: "m²", schnitt: [73, 103, 114, 129] },
      { id: "saugen", label: "Combien de fois passez-vous l’aspirateur par semaine\u202f?", min: 0, max: 7, step: 1, wert: 2, einheit: "×" },
      { id: "wischen", label: "Combien de fois lavez-vous le sol par semaine\u202f?", min: 0, max: 7, step: 1, wert: 1, einheit: "×" }
    ],
    berechne(w) {
      const saugMin = 5 + 0.2 * w.m2;
      const wischMin = 8 + 0.25 * w.m2;
      const minuten = Math.max(0, w.saugen * saugMin + w.wischen * wischMin - 5);
      const arbeitstage = (minuten * 52) / 60 / 8;
      return {
        minutenProWoche: minuten,
        euroProMonat: -3.5,
        extra: `Cela fait environ ${Math.round(arbeitstage)} journées de travail complètes par an que vous avez pour autre chose.`,
        vorherTitel: "Nettoyer soi-même",
        // Ohne Wischen (Roboter, die nur saugen) fallen die Wisch-Punkte weg
        vorher: w.wischen > 0 ? [
          "Sortir l’aspirateur, le brancher",
          "Monter les chaises, ramper sous le lit",
          "Remplir un seau, laver, vider l’eau",
          "Attendre que le sol sèche"
        ] : [
          "Sortir l’aspirateur, le brancher",
          "Monter les chaises, ramper sous le lit",
          "Se battre avec le câble à chaque coin"
        ],
        nachher: w.wischen > 0 ? [
          "Régler une fois un programme dans l’appli",
          "Il nettoie pendant que vous travaillez",
          "Remettre de l’eau, vider l’eau sale"
        ] : [
          "Régler une fois un programme dans l’appli",
          "Il aspire pendant que vous travaillez",
          "Changer le sac toutes les quelques semaines"
        ]
      };
    },
    annahmen: "Préparation comprise, passer l’aspirateur prend environ 5 minutes plus 0,2 minute par m² (soit environ 19 minutes pour 70 m²), laver le sol environ 8 minutes plus 0,25 minute par m² (environ 26 minutes). Pour un robot qui aspire seulement, le lavage n’est pas compté. Pour l’entretien du robot, je retire 5 minutes par semaine. Les pièces de rechange comme les brosses, filtres, sacs et serpillières coûtent environ 3,50\u00a0€ de plus par mois qu’avec un aspirateur classique. Les chiffres sous le curseur du logement montrent la surface moyenne d’un logement en Allemagne (Office fédéral de la statistique, microrecensement 2022)\u202f: 73 m² pour 1 personne, 103 m² pour 2, 114 m² pour 3 et 129 m² pour 4 personnes ou plus."
  },

  airfryer: {
    mit: "une friteuse sans huile",
    felder: [
      { id: "bisher", label: "Avec quoi cuisinez-vous aujourd’hui\u202f?", typ: "auswahl", wert: "pfanne",
        optionen: [
          { wert: "pfanne", label: "Poêle et casseroles" },
          { wert: "backofen", label: "Four" },
          { wert: "fritteuse", label: "Friteuse" }
        ] },
      { id: "anzahl", label: "Combien de fois cuisineriez-vous avec\u202f?", min: 1, max: 14, step: 1, wert: 4, einheit: "× par semaine" },
      { id: "strom", label: "Votre prix de l’électricité", min: 0.15, max: 0.6, step: 0.01, wert: 0.35, einheit: "€ par kWh", schnitt: STROM_LAENDER, schnittHinweis: "Les lettres sur le curseur indiquent le prix moyen de l’électricité en France (FR), en Belgique (BE) et en Suisse (CH)." }
    ],
    berechne(w) {
      const PROFILE = {
        backofen: { name: "Four", kwh: 1.0, oel: 0, minuten: 18, vorher: [
          "Préchauffer le four pendant 10 minutes",
          "Mettre du papier cuisson sur la plaque, retourner à mi-cuisson",
          "Récurer la plaque et le four après"
        ] },
        pfanne: { name: "Poêle et casseroles", kwh: 0.7, oel: 0.08, minuten: 15, vorher: [
          "Rester tout le temps aux fourneaux à retourner",
          "Projections de graisse sur la plaque et le carrelage",
          "Laver la poêle et les casseroles à la main"
        ] },
        fritteuse: { name: "Friteuse", kwh: 1.0, oel: 0.4, minuten: 20, vorher: [
          "Faire chauffer 2 à 3 litres d’huile",
          "Jeter la vieille huile, nettoyer la friteuse",
          "Odeur de friture dans tout le logement"
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
          "Tout dedans, appuyer sur Sync, direction le canapé",
          "Ça bipe\u202f: les deux paniers sont prêts en même temps",
          "Pas de vaisselle\u202f: les paniers au lave-vaisselle ou un coup de chiffon humide"
        ]
      };
    },
    annahmen: "Consommation d’électricité par repas\u202f: four environ 1,0 kWh, plaque environ 0,7 kWh, friteuse environ 1,0 kWh, friteuse sans huile environ 0,45 kWh. Huile\u202f: poêle environ 8 centimes, friteuse environ 40 centimes par repas. Le préchauffage, la surveillance et la vaisselle coûtent selon la comparaison 15 à 20 minutes de plus par repas." + STROM_QUELLEN
  },

  buerste: {
    mit: "une brosse de nettoyage électrique",
    felder: [
      { id: "putzen", label: "Combien de fois nettoyez-vous la salle de bain, la douche ou le carrelage\u202f?", min: 0, max: 7, step: 1, wert: 1, einheit: "× par semaine" },
      { id: "dauer", label: "Combien de temps cela prend-il aujourd’hui\u202f?", min: 10, max: 120, step: 5, wert: 40, einheit: "min" }
    ],
    berechne(w) {
      return {
        minutenProWoche: w.putzen * w.dauer * 0.25,
        euroProMonat: 0,
        extra: "Et votre dos vous dira merci\u202f: avec le long manche, vous nettoyez debout.",
        vorherTitel: "Éponge et lavette",
        vorher: [
          "Frotter la douche à genoux",
          "S’attaquer aux joints avec une vieille brosse à dents",
          "Des éponges qui sentent mauvais au bout de quelques semaines"
        ],
        nachher: [
          "Poser la brosse, elle tourne toute seule",
          "Pas besoin de se pencher ni de s’agenouiller",
          "Rincer la tête de brosse, c’est fini"
        ]
      };
    },
    annahmen: "Aucun test n’a encore mesuré combien de temps la brosse fait gagner. Les testeurs écrivent que le nettoyage est plus facile et plus rapide. Je compte prudemment un quart de temps en moins, car seul le frottage va plus vite, pas la pulvérisation, le rinçage ni l’essuyage. Vous n’économisez presque pas d’argent\u202f: le produit reste nécessaire, et au lieu d’éponges vous achetez de temps en temps des brosses de rechange."
  },

  deckel: {
    mit: "des couvercles extensibles",
    felder: [
      { id: "bisher", label: "Avec quoi couvrez-vous aujourd’hui\u202f?", typ: "auswahl", wert: "folie",
        optionen: [
          { wert: "folie", label: "Film alimentaire" },
          { wert: "alu", label: "Papier aluminium" },
          { wert: "beutel", label: "Sachets" }
        ] },
      { id: "anzahl", label: "Combien de fois couvrez-vous quelque chose\u202f?", min: 1, max: 21, step: 1, wert: 5, einheit: "× par semaine" }
    ],
    berechne(w) {
      const KOSTEN = { folie: 0.015, alu: 0.05, beutel: 0.04 };
      const NAMEN = { folie: "film alimentaire", alu: "papier aluminium", beutel: "sachets" };
      const meter = Math.round(w.anzahl * 52 * 0.3);
      return {
        minutenProWoche: w.anzahl * 10 / 60,
        euroProMonat: (w.anzahl * KOSTEN[w.bisher] * 52) / 12,
        extra: w.bisher === "beutel"
          ? `Cela fait ${w.anzahl * 52} sachets de moins à la poubelle chaque année.`
          : `Cela fait environ ${meter} mètres de ${NAMEN[w.bisher]} en moins à la poubelle chaque année.`,
        vorherTitel: NAMEN[w.bisher].replace(/^./, c => c.toUpperCase()),
        vorher: {
          folie: ["On le déroule, et il colle à lui-même", "N’adhère pas à tous les bols", "À la poubelle après un seul usage"],
          alu: ["On l’arrache et on le presse autour du bord", "L’acide et le sel dissolvent l’aluminium de la feuille", "À la poubelle après un seul usage"],
          beutel: ["Il faut d’abord transvaser les restes dans le sachet", "Le nouer ou le fermer avec une pince", "À la poubelle après un seul usage"]
        }[w.bisher],
        nachher: [
          "On le tire sur le bord, il tient hermétiquement",
          "Va sur les récipients ronds et carrés",
          "Au lave-vaisselle, et on le réutilise"
        ]
      };
    },
    annahmen: "Selon la marque, un morceau de film alimentaire (environ 30 cm) coûte de 0,4 à 2,5 centimes, un morceau de papier aluminium de 2 à 8 centimes et un sachet de congélation de 2,5 à 5 centimes. Je compte à chaque fois avec la valeur du milieu. Aucun test n’a encore mesuré le temps gagné. J’estime prudemment 10 secondes par utilisation\u202f: plus besoin de dérouler ni d’arracher, mais il faut trouver le bon couvercle."
  },

  kindle: {
    mit: "une liseuse",
    felder: [
      { id: "buecher", label: "Combien de livres lisez-vous par an\u202f?", min: 1, max: 60, step: 1, wert: 12, einheit: "livres" },
      { id: "preisBuch", label: "Combien vous coûte un livre en moyenne\u202f?", min: 8, max: 30, step: 1, wert: 14, einheit: "€" },
      { id: "gratis", label: "Combien pourriez-vous en lire gratuitement\u202f? (classiques, Prime Reading, bibliothèque)", min: 0, max: 20, step: 1, wert: 2, einheit: "livres" }
    ],
    berechne(w) {
      const gratis = Math.min(w.gratis, w.buecher);
      const proJahr = (w.buecher - gratis) * w.preisBuch * 0.2 + gratis * w.preisBuch;
      const kg = (w.buecher * 0.3).toLocaleString("fr-FR", { maximumFractionDigits: 1 });
      return {
        minutenProWoche: (w.buecher * 15) / 52,
        euroProMonat: proJahr / 12,
        extra: `Et votre bibliothèque reste libre\u202f: ${Math.round(w.buecher * 2.5)} cm de livres et ${kg} kg en moins par an.`,
        vorherTitel: "Livres imprimés",
        vorher: [
          "Aller au magasin ou attendre la livraison",
          "Des livres lourds dans la valise des vacances",
          "Petits caractères, une lampe nécessaire le soir"
        ],
        nachher: [
          "Le livre arrive en quelques secondes",
          "Des milliers de livres sur un appareil léger",
          "Agrandir le texte, la lumière est intégrée"
        ]
      };
    },
    annahmen: "En Allemagne, les livres numériques sont en moyenne environ 20\u00a0% moins chers que le livre imprimé. Les livres gratuits font économiser le prix entier. Les livres de la bibliothèque (Onleihe) ne fonctionnent toutefois pas sur la Kindle, seulement sur des liseuses comme PocketBook ou Tolino. Pour aller au magasin, commander ou retirer le livre, je compte 15 minutes par livre. Un livre de poche pèse environ 300 g et fait environ 2,5 cm d’épaisseur."
  },

  waschtrockner: {
    mit: "une lavante-séchante",
    felder: [
      { id: "ladungen", label: "Combien de fois faites-vous une lessive par semaine\u202f?", min: 1, max: 10, step: 1, wert: 3, einheit: "× par semaine", schnitt: [2, 3, 3.5, 4] },
      { id: "buegeln", label: "Combien de vêtements repassez-vous par semaine\u202f?", min: 0, max: 20, step: 1, wert: 4, einheit: "vêtements" },
      { id: "strom", label: "Votre prix de l’électricité", min: 0.15, max: 0.6, step: 0.01, wert: 0.35, einheit: "€ par kWh", schnitt: STROM_LAENDER, schnittHinweis: "Les lettres sur le curseur indiquent le prix moyen de l’électricité en France (FR), en Belgique (BE) et en Suisse (CH)." }
    ],
    berechne(w) {
      const stromMonat = ((w.ladungen * 52) / 12) * 2.2 * w.strom;
      return {
        minutenProWoche: w.ladungen * 10 + w.buegeln * 3 * 0.5,
        euroProMonat: -stromMonat,
        extra: `En contrepartie, le séchage coûte environ ${stromMonat.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} € d’électricité par mois.`,
        vorherTitel: "Étendoir",
        vorher: [
          "Monter l’étendoir, étendre chaque vêtement un par un",
          "Attendre une journée, souvent plus en hiver",
          "Décrocher, repasser, ranger l’étendoir"
        ],
        nachher: [
          "Le matin, le linge dedans, régler l’heure de fin",
          "Le soir, lavé et sec",
          "Programme vapeur\u202f: beaucoup moins de plis"
        ]
      };
    },
    annahmen: "Étendre, décrocher, monter et replier l’étendoir prend environ 10 minutes par charge. Avec le programme vapeur, vous économisez environ la moitié du repassage\u202f; je compte 3 minutes par vêtement. Avec un appareil sans pompe à chaleur, le séchage consomme un peu plus de 2 kWh d’électricité par charge (6 kg). Je le déduis comme coût. Avec une pompe à chaleur, c’est un peu moins. Les chiffres sous le curseur des lessives\u202f: en Allemagne, on lave en moyenne environ 90 fois par an et par personne, nettement plus souvent dans les foyers d’une personne et nettement moins souvent par tête dans les foyers plus grands. Un foyer de quatre personnes lave environ 210 fois par an, soit environ 4 fois par semaine (les deux selon l’association allemande des fabricants de cosmétiques et de lessives, IKW). Cela donne en gros 2 charges par semaine pour 1 personne, 3 pour 2, 3,5 pour 3 et 4 pour 4 personnes." + STROM_QUELLEN
  },

  akkusauger: {
    mit: "un aspirateur balai sans fil",
    felder: [
      { id: "m2", label: "Quelle est la surface de votre logement\u202f?", min: 20, max: 200, step: 5, wert: 70, einheit: "m²", schnitt: [73, 103, 114, 129] },
      { id: "saugen", label: "Combien de fois passez-vous l’aspirateur par semaine\u202f?", min: 0, max: 7, step: 1, wert: 2, einheit: "×" },
      { id: "schnell", label: "Combien de fois aspirez-vous vite quelque chose, par exemple des miettes\u202f?", min: 0, max: 14, step: 1, wert: 3, einheit: "× par semaine" }
    ],
    berechne(w) {
      // Herausholen, Kabel einstecken, in jedem Raum umstecken, wegräumen
      const proMal = 4 + 0.02 * w.m2;
      return {
        minutenProWoche: w.saugen * proMal + w.schnell * 2,
        euroProMonat: 0,
        extra: "Et pour les miettes après le repas, vous ne sortez plus le gros aspirateur.",
        vorherTitel: "Aspirateur à fil",
        vorher: [
          "Sortir le gros aspirateur du placard",
          "Le brancher, changer de prise dans chaque pièce",
          "Tout monter pour l’escalier"
        ],
        nachher: [
          "Le décrocher du mur et aspirer",
          "Pas de câble, pas de prise à changer",
          "En aspirateur à main pour le canapé, l’escalier et la voiture"
        ]
      };
    },
    annahmen: "Sortir l’aspirateur à fil, le brancher, changer de prise dans chaque pièce et le ranger prend à chaque fois environ 4 minutes plus 0,02 minute par m² (soit environ 5,5 minutes pour 70 m²). Aspirer vite quelque chose va environ 2 minutes plus vite à chaque fois. Côté argent, vous arrivez à peu près à zéro\u202f: vous économisez les sacs à poussière, mais la batterie faiblit au bout de quelques années. Les chiffres sous le curseur du logement montrent la surface moyenne d’un logement en Allemagne (Office fédéral de la statistique, microrecensement 2022)\u202f: 73 m² pour 1 personne, 103 m² pour 2, 114 m² pour 3 et 129 m² pour 4 personnes ou plus."
  },

  reiskocher: {
    mit: "un cuiseur à riz",
    felder: [
      { id: "bisher", label: "Comment cuisez-vous le riz aujourd’hui\u202f?", typ: "auswahl", wert: "topf",
        optionen: [
          { wert: "topf", label: "À la casserole" },
          { wert: "beutel", label: "En sachets cuisson" }
        ] },
      { id: "anzahl", label: "Combien de fois mangez-vous du riz\u202f?", min: 1, max: 14, step: 1, wert: 2, einheit: "× par semaine" }
    ],
    berechne(w) {
      const PROFILE = {
        topf: { name: "Riz à la casserole", minuten: 10, euro: 0, vorher: [
          "Rester à côté pour que rien ne déborde",
          "Brûlé au fond, encore dur dessus",
          "Faire tremper la casserole et la récurer"
        ] },
        beutel: { name: "Sachets cuisson", minuten: 5, euro: 0.10, vorher: [
          "Porter l’eau à ébullition, y faire cuire le sachet",
          "Repêcher le sachet brûlant dans l’eau",
          "La grande casserole d’eau consomme plus d’électricité"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: (w.anzahl * p.euro * 52) / 12,
        extra: "Et plus rien n’attache\u202f: il sent tout seul quand l’eau est absorbée.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Le riz et l’eau dedans, appuyer sur le bouton",
          "Il passe tout seul en maintien au chaud",
          "Rincer rapidement la cuve antiadhésive"
        ]
      };
    },
    annahmen: "À la casserole, vous restez à côté environ 10 minutes pendant que le riz cuit, ou vous récurez la casserole après\u202f; avec les sachets cuisson, c’est environ 5 minutes. Côté électricité, vous arrivez à peu près à zéro par rapport à une casserole avec couvercle\u202f: selon Stiftung Warentest, un cuiseur à riz consomme même en moyenne un peu plus (121 au lieu de 91 wattheures). Pour les sachets cuisson, je compte environ 5 centimes d’électricité de plus par repas\u202f: ils cuisent dans une casserole pleine d’eau bouillante, et cuire ainsi consomme selon Stiftung Warentest plus de deux fois plus d’électricité qu’un cuiseur à riz (environ 270 wattheures). Le riz en sachets des marques de distributeur ne coûte qu’un peu plus que le riz en vrac\u202f: je compte 5 centimes de plus par repas pour deux à trois personnes."
  },

  kaffeevollautomat: {
    mit: "une machine à café automatique",
    felder: [
      { id: "tassen", label: "Combien de tasses de capsules buvez-vous par jour ?", hinweis: "Tout le foyer ensemble. Si vous ne buvez pas de café en capsules, réglez sur 0.", min: 0, max: 10, step: 1, wert: 2, einheit: "tasses par jour" },
      { id: "sorte", label: "Quelles capsules sont-ce le plus souvent ?", typ: "auswahl", wert: "marke",
        optionen: [
          { wert: "marke", label: "Capsules de marque, par exemple Nespresso" },
          { wert: "discount", label: "Capsules bon marché de supermarché discount" }
        ] },
      { id: "unterwegs", label: "Combien de fois par semaine achetez-vous un café à emporter ?", hinweis: "Seulement ceux que vous feriez désormais à la maison.", min: 0, max: 14, step: 1, wert: 0, einheit: "× par semaine" }
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
          ? "Avec ces réglages, une machine à café automatique ne vous fait pas économiser d’argent. Elle n’en vaut la peine que si le café fraîchement moulu et le cappuccino d’une simple pression valent ce prix pour vous."
          : w.tassen > 0
          ? `Et ${kapseln.toLocaleString("fr-FR")} capsules de moins à la poubelle chaque année${becher > 0 ? `, plus jusqu’à ${becher} gobelets jetables` : ""}.`
          : `Et jusqu’à ${becher} gobelets jetables de moins par an.`,
        vorherTitel: nurUnterwegs ? "Café à emporter" : "Capsules",
        vorher: nurUnterwegs
          ? [
              "Aller à la boulangerie ou au café pour chaque café",
              "Un cappuccino y coûte en moyenne presque 4 euros",
              "Souvent faire la queue avant d’être servi"
            ]
          : [
              "Une nouvelle capsule pour chaque tasse",
              "Racheter des capsules et en garder en réserve",
              "Les capsules vides finissent à la poubelle"
            ],
        nachher: [
          "Des grains, une pression sur le bouton, c’est prêt",
          "Chaque tasse fraîchement moulue, cappuccino compris",
          "Vider le marc et le bac d’égouttage chaque jour"
        ]
      };
    },
    annahmen: "Une capsule de marque coûte environ 40 centimes, une capsule bon marché de supermarché discount environ 20 centimes (dans le test 2025 de Stiftung Warentest, par exemple 17 à 19 centimes). Une tasse de machine automatique coûte avec grains, eau et électricité environ 10 à 20 centimes selon les grains, je compte 15 centimes. Pour le détartrant, le nettoyant et les filtres à eau, je compte 5 euros par mois, soit selon l’appareil et le filtre environ 30 à 120 euros par an. En juin 2026, un cappuccino au café coûtait en moyenne 3,80 euros dans dix grandes villes allemandes (étude du revendeur de café Coffee Friend), je compte prudemment 3,50 euros par café à emporter. Pour un cappuccino, il faut du lait avec les deux machines, je ne le compte pas. Si vous faites vos cappuccinos avec des capsules de lait, vous économisez un peu plus qu’indiqué. Tous les prix s’appliquent à l’Allemagne, le résultat est une valeur approximative. Je ne compte pas le temps, seulement l’argent."
  },
  kochfunktion: {
    mit: "un robot cuiseur",
    felder: [
      { id: "bisher", label: "Que cuisinez-vous le plus souvent ?", typ: "auswahl", wert: "gemischt",
        optionen: [
          { wert: "ruehren", label: "Soupes, sauces, risotto" },
          { wert: "gemischt", label: "Un peu de tout" },
          { wert: "braten", label: "Beaucoup de plats poêlés" }
        ] },
      { id: "anzahl", label: "Combien de fois cuisinez-vous chaud ?", min: 1, max: 14, step: 1, wert: 4, einheit: "× par semaine" }
    ],
    berechne(w) {
      const PROFILE = {
        ruehren: { name: "Remuer devant la plaque", minuten: 15, vorher: [
          "Couper oignons et légumes à la main",
          "Rester devant la plaque et remuer pour que rien n’attache",
          "Laver la planche, le couteau et la casserole"
        ] },
        gemischt: { name: "Cuisiner sur la plaque", minuten: 10, vorher: [
          "Couper, remuer, assaisonner",
          "Retourner sans cesse à la plaque",
          "Laver la planche, le couteau et les casseroles"
        ] },
        braten: { name: "Cuire à la poêle", minuten: 5, vorher: [
          "Couper oignons et légumes à la main",
          "Sauce et accompagnement à côté dans une casserole",
          "Laver la poêle, la casserole, la planche et le couteau"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: w.anzahl * p.minuten,
        euroProMonat: 0,
        extra: w.bisher === "braten"
          ? "Vous continuez à saisir à la poêle. Le robot se charge de la découpe, de la sauce et de l’accompagnement."
          : "Et pendant qu’il cuit, vous faites autre chose.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Les ingrédients dans le bol, choisir un programme",
          "Il coupe, mélange et cuit",
          "Laver le bol, le couteau et le couvercle"
        ]
      };
    },
    annahmen: "Aucun test n’a mesuré combien de temps un robot cuiseur fait gagner. Mon estimation : avec les soupes, les sauces et le risotto, vous gagnez environ 15 minutes par repas, parce que vous n’avez ni à couper ni à rester à côté. Avec des repas variés, c’est environ 10 minutes. Avec beaucoup de plats poêlés, seulement environ 5, car il vaut mieux continuer à saisir à la poêle. J’ai déjà déduit le temps pour laver le bol, le couteau et le couvercle. Je ne compte pas l’électricité : que le robot consomme plus ou moins que votre plaque dépend du plat."
  },

  kneten: {
    mit: "un robot pâtissier",
    felder: [
      { id: "bisher", label: "Comment faites-vous la pâte aujourd’hui ?", typ: "auswahl", wert: "hand",
        optionen: [
          { wert: "hand", label: "À la main" },
          { wert: "handmixer", label: "Au batteur électrique" }
        ] },
      { id: "anzahl", label: "Combien de fois faites-vous de la pâtisserie ou de la pâte ?", min: 1, max: 20, step: 1, wert: 4, einheit: "× par mois" }
    ],
    berechne(w) {
      const PROFILE = {
        hand: { name: "Pétrir à la main", minuten: 10, vorher: [
          "Pétrir au moins 8 minutes jusqu’à ce que la pâte soit lisse",
          "Mains collantes, farine sur le plan de travail",
          "Nettoyer le bol, le plan de travail et les mains"
        ] },
        handmixer: { name: "Au batteur électrique", minuten: 5, vorher: [
          "Tenir le batteur tout le temps",
          "Rester là jusqu’à ce que la pâte soit prête",
          "Laver le bol et les fouets"
        ] }
      };
      const p = PROFILE[w.bisher];
      return {
        minutenProWoche: (w.anzahl * p.minuten * 12) / 52,
        euroProMonat: 0,
        extra: w.bisher === "hand"
          ? "Et vous ménagez aussi vos bras."
          : "Et vous n’avez plus à tenir le batteur.",
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Les ingrédients dans le bol, choisir la vitesse",
          "Il pétrit et mélange tout seul",
          "Crochet et fouet au lave-vaisselle"
        ]
      };
    },
    annahmen: "Aucun test n’a mesuré combien de temps un robot pâtissier fait gagner. Mon estimation : à la main, vous pétrissez une pâte levée pendant au moins 8 minutes, comme le conseillent la chaîne de supermarchés allemande REWE et l’administration du district de Göppingen. Avec le mélange des ingrédients, cela fait environ 10 minutes pendant lesquelles vous n’avez pas besoin d’être là avec la machine. Au batteur, je compte environ 5 minutes par pâte pendant lesquelles vous tenez le batteur. Selon les mêmes sources, la machine pétrit au moins 5 minutes, mais sans vous. Pour la vaisselle, je compte le même temps qu’avant. Je ne compte pas l’électricité : pétrir ne coûte que quelques centimes."
  },

  sprudler: {
    mit: "une machine à eau pétillante",
    felder: [
      { id: "bisher", label: "Quelle eau pétillante achetez-vous aujourd’hui ?", typ: "auswahl", wert: "discount",
        optionen: [
          { wert: "discount", label: "Bon marché, du discounter" },
          { wert: "marke", label: "Eau de marque" }
        ] },
      { id: "liter", label: "Combien d’eau pétillante buvez-vous par semaine ?", min: 1, max: 25, step: 0.5, wert: 4, einheit: "litres par semaine", schnitt: [2, 3.5, 5.5, 7] }
    ],
    berechne(w) {
      const PREIS = { discount: 0.20, marke: 0.60 };   // gekauftes Sprudelwasser, € pro Liter
      const SELBST = 0.15;                              // Gas pro Liter, Leitungswasser fast gratis
      const kilo = Math.round((w.liter * 52) / 10) * 10;
      const wochen = Math.round(45 / w.liter);
      return {
        minutenProWoche: 0,
        euroProMonat: ((PREIS[w.bisher] - SELBST) * w.liter * 52) / 12,
        extra: `Et vous portez chaque année environ ${kilo.toLocaleString("fr-FR")} kilos d’eau en moins jusqu’à chez vous, sans compter les bouteilles vides.`,
        vorherTitel: w.bisher === "marke" ? "Acheter de l’eau de marque" : "Eau du discounter",
        vorher: [
          "Porter des packs ou des caisses jusqu’à la voiture et chez vous",
          "Rassembler les bouteilles vides et les rapporter",
          "De la place pour le stock dans la cuisine ou à la cave"
        ],
        nachher: [
          "Eau du robinet dans la bouteille, appuyer quelques fois",
          wochen <= 1 ? "Échanger la bouteille de gaz environ chaque semaine" : `Échanger la bouteille de gaz environ toutes les ${wochen} semaines`,
          "Plus de packs, plus de bouteilles vides"
        ]
      };
    },
    annahmen: "En Allemagne, l’eau gazeuse du discounter coûte environ 20 centimes le litre, l’eau de marque en bouteille plastique souvent 60 centimes et plus. Quand vous la faites vous-même, vous payez surtout le gaz : environ 10 à 20 centimes par litre selon la bouteille de gaz et l’appareil, je compte 15 centimes. Une bouteille de gaz suffit pour environ 40 à 60 litres, je compte 45. L’eau du robinet coûte moins d’un demi-centime le litre, je la laisse de côté. Je ne compte pas le temps : porter les packs et rapporter les bouteilles vides disparaît, mais vous gazéifiez chaque bouteille vous-même. Les repères sur le curseur : en Allemagne, chaque personne boit en moyenne un peu moins de 130 litres d’eau minérale par an, dont plus de 70 pour cent gazeuse (Association allemande des sources minérales). Cela fait un peu moins de 2 litres d’eau pétillante par personne et par semaine."
  },
  geschirrspueler: {
    mit: "un lave-vaisselle de table",
    felder: [
      { id: "mal", label: "Combien de fois faites-vous la vaisselle à la main par semaine ?", min: 1, max: 14, step: 1, wert: 7, einheit: "× par semaine" },
      { id: "minuten", label: "Combien de temps cela vous prend-il à chaque fois ?", hinweis: "Sans les grandes casseroles et poêles, vous les lavez toujours à la main.", min: 5, max: 60, step: 5, wert: 20, einheit: "minutes" }
    ],
    berechne(w) {
      const MASCHINE = 5;   // Minuten pro Spülgang: einräumen, ausräumen, beim Tank Wasser einfüllen
      return {
        minutenProWoche: w.mal * Math.max(0, w.minuten - MASCHINE),
        euroProMonat: 0,
        extra: "Côté argent, je compte zéro : la machine consomme de l’électricité et des pastilles, mais vous économisez l’eau chaude et le liquide vaisselle.",
        vorherTitel: "Vaisselle à la main",
        vorher: [
          "Remplir l’évier, frotter chaque pièce une à une",
          "Essuyer ou remplir l’égouttoir",
          "Si on la laisse traîner, la vaisselle s’entasse"
        ],
        nachher: [
          "Charger, appuyer sur le bouton, terminé",
          "Avec l’appareil à réservoir, remplir d’eau avant",
          "Les grandes casseroles et poêles restent à laver à la main"
        ]
      };
    },
    annahmen: "Charger et vider prend environ 5 minutes par lavage, remplissage compris pour l’appareil à réservoir. La valeur de départ de 20 minutes pour une vaisselle à la main vient d’une étude de l’Université de Bonn : 113 personnes y ont lavé douze couverts à la main, en moyenne en 79 minutes, soit un peu plus de 6 minutes par couvert. Pour trois couverts, cela fait environ 20 minutes. Charger et vider un grand lave-vaisselle de douze couverts y prenait environ 15 minutes. Côté argent, je compte zéro : la machine consomme de l’électricité et des pastilles, mais vous économisez l’eau chaude et le liquide vaisselle. Si vous faisiez jusqu’ici la vaisselle très économiquement à la main, vous paierez plutôt un peu plus avec la machine. Pour le curseur « Combien de fois », je n’ai pas trouvé de moyennes fiables par taille de foyer, il n’y a donc pas de repères."
  },

  balkonkraftwerk: {
    mit: "un kit solaire de balcon",
    preisLabel: "Combien coûte votre kit ?",
    preisHinweis: "Le prix actuel est indiqué sur Amazon. Avec batterie, indiquez ici seulement le prix des panneaux.",
    kaufpreis: w => w.preis + w.speicher,
    felder: [
      { id: "ort", label: "Où allez-vous placer les panneaux ?", typ: "auswahl", wert: "balkon",
        optionen: [
          { wert: "balkon", label: "À la verticale sur le garde-corps du balcon" },
          { wert: "schraeg", label: "Inclinés, par exemple sur un toit plat ou dans le jardin" }
        ] },
      { id: "richtung", label: "Dans quelle direction sont-ils orientés ?", hinweis: "S’ils sont orientés sud-est ou sud-ouest, choisissez le sud. Vers le nord, cela ne vaut guère la peine.", typ: "auswahl", wert: "sued",
        optionen: [
          { wert: "sued", label: "Vers le sud" },
          { wert: "ostwest", label: "Vers l’est ou l’ouest" }
        ] },
      { id: "verbrauch", label: "Combien d’électricité consommez-vous par an ?", hinweis: "C’est indiqué sur votre facture d’électricité.", min: 800, max: 6000, step: 100, wert: 1900, einheit: "kWh par an", schnitt: [1200, 1900, 2400, 2600], schnittHinweis: "Les chiffres sur le curseur indiquent la moyenne d’un logement de 1, 2, 3 et 4 personnes (Stromspiegel allemand 2025, sans eau chaude électrique)." },
      { id: "strom", label: "Votre prix de l’électricité", min: 0.15, max: 0.6, step: 0.01, wert: 0.37, einheit: "€ par kWh", schnitt: STROM_LAENDER, schnittHinweis: "Les lettres sur le curseur indiquent le prix moyen de l’électricité en France (FR), en Belgique (BE) et en Suisse (CH)." },
      { id: "speicher", label: "Combien coûte votre batterie ?", hinweis: "Le prix actuel est indiqué sur Amazon. Ajoutez une tête de lecture pour le compteur électrique si aucune n’est fournie.", min: 300, max: 1500, step: 10, wert: 450, einheit: "€" }
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
      const runde = x => (Math.round(x / 10) * 10).toLocaleString("fr-FR");
      return {
        minutenProWoche: 0,
        euroProMonat: (selbst * w.strom) / 12,
        extra: !mitSpeicher
          ? `Les panneaux produisent environ ${runde(ertrag)} kWh par an. Vous en consommez vous-mêmes environ ${runde(selbst)} kWh, le reste part dans le réseau.`
          : `Les panneaux produisent environ ${runde(ertrag)} kWh par an. Avec batterie, vous achetez ainsi environ ${runde(selbst)} kWh d’électricité en moins, sans batterie ce serait environ ${runde(ohne)} kWh. ` +
            (mehrEuro <= 0 ? "Avec votre consommation, une batterie n’apporte rien de plus, car vous utilisez presque toute l’électricité vous-mêmes, même sans elle."
              : jahre <= 10 ? `La batterie seule rapporte environ ${Math.round(mehrEuro)} € par an et est rentabilisée au bout d’environ ${Math.round(jahre)} ans.`
              : "Chez vous, la batterie seule mettrait plus de dix ans à être rentabilisée. Cela ne vaut guère le coup."),
        vorherTitel: "Sans kit solaire",
        vorher: [
          "Vous achetez chaque kilowattheure à votre fournisseur",
          "Réfrigérateur, box et veille tournent toute la journée sur votre facture",
          `Environ ${runde(w.verbrauch * w.strom)} € d’électricité par an`
        ],
        nachher: mitSpeicher ? [
          "En journée, l’électricité solaire arrive chez vous par la prise",
          "Le surplus charge la batterie, que vous utilisez le soir et la nuit",
          "Une seule installation et déclaration, ensuite il fonctionne tout seul"
        ] : [
          "En journée, l’électricité solaire arrive chez vous par la prise",
          "Ce qui fonctionne utilise d’abord votre propre électricité",
          "Une seule déclaration, ensuite il fonctionne tout seul"
        ]
      };
    },
    annahmen: "Je calcule avec un kit comme ceux présentés ici : deux panneaux d’environ 900 watts au total et un onduleur de 800 watts. Ajoutez le support au prix d’achat, il n’est pas fourni avec ces kits. À la verticale sur un balcon orienté au sud, un tel kit produit environ 600 kWh par an, incliné environ 850 kWh. Stiftung Warentest a calculé en 2025 pour les kits testés 600 à 720 kWh sur un garde-corps et 860 à 1 020 kWh sur un toit d’exemple, le SolarZentrum Berlin et la HTW Berlin (une université berlinoise) arrivent à des valeurs similaires. Vers l’est ou l’ouest, je compte 15 % de moins (HTW Berlin). La part que vous consommez vous-mêmes dépend de votre consommation : qui consomme peu en utilise environ un tiers, une famille un peu plus de la moitié. Cela correspond aux simulations de la HTW Berlin et de C.A.R.M.E.N. et à un exemple de la Verbraucherzentrale NRW. L’électricité que vous ne consommez pas compte pour 0 €. Avec batterie, je compte avec une batterie d’environ 2 kWh, la taille des batteries présentées ici. Combien vous consommez en plus vous-mêmes grâce à elle, je l’ai calculé pour de nombreuses consommations avec le simulateur solaire enfichable de la HTW Berlin, et j’en ai tiré une formule. Le simulateur tient déjà compte des pertes à la charge et à la décharge. J’en retire 35 kWh par an, car la batterie elle-même consomme quelques watts jour et nuit : pour le Zendure, smartzone.de a mesuré environ 4 watts. Je calcule avec deux panneaux. Avec quatre panneaux, une grande batterie rapporte plus, ce que le calculateur ne montre pas. Pour savoir si la batterie seule vaut le coup, je compare avec dix ans, car c’est la durée que la HTW Berlin retient pour une batterie. En Suisse, seuls 600 watts sont autorisés : un kit y produit un peu moins, mais l’électricité injectée est un peu rémunérée. Je ne tiens pas compte de l’ombre, le résultat est une valeur approximative." + STROM_QUELLEN
  },
  sparduschkopf: {
    mit: "un pommeau économique",
    felder: [
      { id: "warm", label: "Comment l’eau de votre douche est-elle chauffée ?", typ: "auswahl", wert: "heizung",
        optionen: [
          { wert: "heizung", label: "Par le chauffage, par exemple au gaz" },
          { wert: "strom", label: "À l’électricité (chauffe-eau instantané, ballon)" }
        ] },
      { id: "jetzt", label: "Combien votre pommeau laisse-t-il passer aujourd’hui ?", hinweis: "Laissez couler la douche 30 secondes dans un seau et multipliez les litres par deux.", min: 9, max: 20, step: 0.5, wert: 12, einheit: "litres par minute" },
      { id: "duschen", label: "Combien de douches sont prises chez vous par semaine ?", hinweis: "Tout le monde ensemble : si deux personnes se douchent quatre fois chacune, cela fait 8.", min: 1, max: 35, step: 1, wert: 8, einheit: "× par semaine" },
      { id: "minuten", label: "Combien de temps l’eau coule-t-elle pendant la douche ?", min: 2, max: 20, step: 1, wert: 8, einheit: "minutes" }
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
        extra: `Cela fait environ ${gerundet.toLocaleString("fr-FR")} litres d’eau chaude en moins par an.`,
        vorherTitel: "Ancien pommeau",
        vorher: [
          `Environ ${Math.round(w.jetzt * w.minuten)} litres d’eau chaude par douche`,
          w.warm === "strom" ? "Chaque litre est chauffé à l’électricité" : "Le chauffage chauffe chaque litre",
          "Vous payez l’eau et l’assainissement pour chaque litre"
        ],
        nachher: [
          `Environ ${Math.round(NEU * w.minuten)} litres par douche`,
          "Une douche aussi longue et aussi chaude",
          "Vissé vous-même en quelques minutes"
        ]
      };
    },
    annahmen: "Je compare votre pommeau actuel à un pommeau économique qui laisse passer 8,5 litres par minute. C’est ce que laissent passer les trois modèles présentés ici dans le test de Stiftung Warentest, de 8,2 à 8,8 litres. Les pommeaux anciens laissent souvent passer 10 à 15 litres par minute, je pars de 12. Pour chauffer un litre d’eau de douche de froid à environ 37 degrés, il faut environ 0,03 kWh. Pour l’électricité, je compte 37 centimes le kWh (Fédération allemande de l’énergie et de l’eau BDEW, août 2026), pour le chauffage le prix du gaz d’environ 12 centimes (Office fédéral allemand de la statistique et BDEW, 2026). L’eau et l’assainissement coûtent ensemble environ 4 € le mètre cube, soit 0,4 centime le litre. Tous les prix valent pour l’Allemagne, le résultat est une valeur approximative. Vous ne gagnez pas de temps : vous vous douchez aussi longtemps qu’avant."
  },
  thermostate: {
    mit: "des têtes thermostatiques connectées",
    preisLabel: "Combien coûte une tête thermostatique\u202f?",
    preisHinweis: "Le prix actuel est indiqué sur Amazon. Je le multiplie par le nombre de vos radiateurs.",
    kaufpreis: w => w.preis * w.heizkoerper + w.zentrale,
    felder: [
      { id: "heizkosten", label: "Combien payez-vous par an pour le chauffage\u202f?", hinweis: "C’est indiqué sur votre décompte de chauffage.", min: 200, max: 3000, step: 50, wert: 900, einheit: "€ par an", schnitt: [1250, 1750, 1950, 2200] },
      { id: "bisher", label: "Comment chauffez-vous aujourd’hui\u202f?", typ: "auswahl", wert: "manchmal",
        optionen: [
          { wert: "durch", label: "Il tourne presque toujours" },
          { wert: "manchmal", label: "Je baisse parfois" },
          { wert: "immer", label: "Je baisse toujours moi-même" }
        ] },
      { id: "abrechnung", label: "Comment payez-vous votre chauffage ?", typ: "auswahl", wert: "eigen",
        optionen: [
          { wert: "eigen", label: "Chauffage individuel, p. ex. chaudière à gaz" },
          { wert: "zentral", label: "Chauffage central avec décompte" }
        ] },
      { id: "heizkoerper", label: "Combien de radiateurs voulez-vous équiper\u202f?", min: 1, max: 12, step: 1, wert: 4, einheit: "pièces" },
      { id: "zentrale", label: "Combien coûte la centrale\u202f?", hinweis: "Si vous avez déjà une centrale compatible, réglez sur 0\u00a0€.", min: 0, max: 150, step: 5, wert: 50, einheit: "€" }
    ],
    berechne(w) {
      // anteil = gesparte Heizkosten, drehen = wie oft du bisher selbst drehst (1 = zweimal am Tag)
      const PROFILE = {
        durch: { anteil: 0.12, drehen: 0, name: "Le chauffage tourne en continu", vorher: [
          "Ça chauffe même quand personne n’est là",
          "En partant, vous oubliez de baisser",
          "À la fin du mois, vous payez pour un logement vide"
        ] },
        manchmal: { anteil: 0.08, drehen: 0.5, name: "Baisser soi-même", vorher: [
          "Parfois vous y pensez, parfois non",
          "Le soir, vous rentrez dans un logement froid",
          "Ensuite, il faut du temps pour que ça se réchauffe"
        ] },
        immer: { anteil: 0.04, drehen: 1, name: "Baisser soi-même", vorher: [
          "Baisser chaque radiateur tous les matins",
          "Le soir, vous rentrez dans un logement froid",
          "Ensuite, il faut du temps pour que ça se réchauffe"
        ] }
      };
      const p = PROFILE[w.bisher];
      const heizkostenWeniger = w.heizkosten * p.anteil * (w.abrechnung === "zentral" ? 0.6 : 1);
      return {
        // Ein Thermostat von Hand drehen dauert etwa 15 Sekunden, zweimal am Tag
        minutenProWoche: p.drehen * w.heizkoerper * 2 * 7 * 0.25,
        // Batterien: etwa 1 € pro Thermostat und Jahr
        euroProMonat: (heizkostenWeniger - w.heizkoerper) / 12,
        extra: `Cela fait environ ${Math.round(heizkostenWeniger)} € de frais de chauffage en moins par an, moins environ ${w.heizkoerper} € de piles. Et vous rentrez chaque jour dans un logement chaud.`,
        vorherTitel: p.name,
        vorher: p.vorher,
        nachher: [
          "Régler une fois un planning de chauffage pour la semaine",
          "Au chaud peu avant votre retour",
          "Baissé tant que vous êtes absent"
        ]
      };
    },
    annahmen: "Avec un planning de chauffage, vous économisez en moyenne environ 10\u00a0% de frais de chauffage (co2online, Agence fédérale de l’environnement). Si votre chauffage tourne presque toujours, je compte 12\u00a0%\u202f; si vous baissez parfois vous-même, 8\u00a0%\u202f; et si vous baissez toujours, 4\u00a0%. À titre de comparaison\u202f: chaque degré en moins économise environ 6\u00a0% d’énergie de chauffage. Les piles coûtent environ 1\u00a0€ par tête thermostatique et par an, je le déduis. Baisser puis remonter un radiateur à la main prend environ 15 secondes, deux fois par jour. Ce temps, vous l’économisez si vous tournez vous-même aujourd’hui. Les chiffres sous le curseur des frais de chauffage\u202f: la surface moyenne d’un logement en Allemagne (Office fédéral de la statistique, microrecensement 2022), multipliée par le coût d’un chauffage au gaz selon le Heizspiegel 2026 de co2online (année de décompte 2025), environ 17\u00a0€ par m² et par an. Cela fait environ 1\u202f250\u00a0€ pour 1 personne, 1\u202f750\u00a0€ pour 2, 1\u202f950\u00a0€ pour 3 et 2\u202f200\u00a0€ pour 4 personnes ou plus. Avec une pompe à chaleur, c’est nettement moins, avec un chauffage urbain un peu plus. Pour les têtes avec centrale, son prix s’ajoute une fois. Avec un chauffage central dans un immeuble, seule une partie des frais est répartie selon la consommation : 50 à 70 % en Allemagne, au moins 55 % en Autriche et le plus souvent 50 à 70 % en Suisse. Si vous choisissez « Chauffage central avec décompte », je ne compte donc que 60 % de l’économie."
  }
};
