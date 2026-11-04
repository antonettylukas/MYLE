/*
  Les conseils de MYLE (myle.life/fr/ratgeber et myle.life/fr/ratgeber-<id>). Même structure que ratgeber.js en allemand.
*/
const RATGEBER = [
  {
    id: "saugroboter-kleine-wohnung",
    produkt: "saugroboter",
    geprueft: "2026-11-04",
    titel: "Un robot aspirateur vaut-il le coup dans un petit logement ?",
    frage: "Un robot aspirateur vaut-il le coup dans un petit logement ?",
    seitenTitel: "Un robot aspirateur vaut-il le coup dans un petit logement ?",
    beschreibung: "Ce qu’un robot aspirateur laveur fait vraiment gagner sur 30 à 60 m², à quel point il est bruyant, la place que prend la station et quand il ne vous convient pas.",
    kurzantwort: "Oui, même sur 30 à 60 m², il vaut le coup pour la plupart des gens, et un modèle d’entrée ou de milieu de gamme suffit souvent. Si vous passez sinon l’aspirateur deux fois par semaine et la serpillière une fois, mon calculateur indique que vous gagnez entre une demi-heure et presque une heure par semaine. Il ne vous convient pas si la station n’a pas de place ou si vous ne voulez pas ranger rapidement avant qu’il démarre.",
    abschnitte: [
      {
        titel: "Le temps gagné sur 30 à 60 m²",
        absaetze: [
          "Pour l’aspirateur, préparation comprise, mon calculateur compte environ 5 minutes plus 0,2 minute par m², et pour la serpillière 8 minutes plus 0,25 minute par m². Il déduit 5 minutes par semaine pour l’entretien du robot.",
          "Avec deux passages d’aspirateur et un de serpillière par semaine, vous gagnez ainsi environ 33 minutes par semaine sur 30 m² et environ 52 minutes sur 60 m². Cela fait environ 28 à 45 heures par an.",
          "Ce que le calculateur ne montre pas : avec un programme, le robot nettoie pendant que vous travaillez, tous les jours si vous le souhaitez. Votre logement est alors propre plus souvent que si vous passiez vous-même l’aspirateur deux fois par semaine."
        ]
      },
      {
        titel: "Mon expérience après 14 ans",
        art: "erfahrung",
        absaetze: [
          "J’utilise des robots aspirateurs depuis 14 ans et depuis, je n’ai presque plus jamais eu à passer l’aspirateur ou la serpillière moi-même. L’astuce la plus importante : régler un programme. Il nettoie alors pendant que je travaille, et chaque soir je rentre dans un logement propre."
        ]
      },
      {
        titel: "Ce que sait déjà faire un robot bon marché",
        absaetze: [
          "Pour un petit logement, pas besoin d’un modèle haut de gamme. La navigation laser existe déjà dans la gamme de prix inférieure : le robot crée une carte et nettoie en bandes. Dans l’appli, vous réglez le programme, faites nettoyer certaines pièces et bloquez des zones, par exemple un tapis délicat.",
          "Si vous voulez dépenser plus, faites surtout attention à deux choses. Avec une caméra, un robot reconnaît le plus souvent les câbles, les chaussettes et les chaussures et les contourne. Sans caméra, il a plutôt tendance à passer dessus ou à rester coincé : dans un test de smarthomeassistent.de, un modèle bon marché n’a reconnu aucun des 53 obstacles. Et si vous voulez un lavage soigné, choisissez un modèle dont la station lave aussi les serpillières ou le rouleau."
        ]
      },
      {
        titel: "À quel point il est bruyant",
        absaetze: [
          "En aspirant, la plupart des robots font environ 55 à 70 décibels, à peu près comme une conversation normale. Un aspirateur classique atteint le plus souvent 70 à 85 décibels. Seule la station devient vraiment bruyante quand elle vide le robot : environ 75 à 90 décibels, mais seulement quelques secondes. Dans un petit logement, le programme vaut donc doublement le coup : faites-le rouler quand vous n’êtes pas là."
        ]
      },
      {
        titel: "La place pour la station",
        absaetze: [
          "Une station fait souvent environ 40 cm de large et jusqu’à 60 cm de haut. Devant, le robot a besoin de place pour entrer et s’amarrer : selon le modèle, il faut laisser 0,8 à 1,5 m libre devant et 5 à 50 cm sur les côtés. Mesurez avant, surtout dans un couloir ou une petite pièce."
        ]
      },
      {
        titel: "Passe-t-il sous le canapé et le lit ?",
        absaetze: [
          "La plupart des robots font environ 9 à 12 cm de haut, les modèles plats environ 8 cm. Mesurez la place sous le canapé, le lit et les meubles, et prévoyez un peu de marge. Si c’est tout juste, il ne passera pas dessous de façon fiable."
        ]
      },
      {
        titel: "Tapis, franges et câbles",
        absaetze: [
          "Les tapis à poils longs et les tapis à franges poussent beaucoup de robots à leurs limites : les franges s’enroulent autour de la brosse, et certains s’enlisent dans les poils longs. Repliez les franges sous le tapis ou bloquez-le dans l’appli. Mieux vaut ranger câbles et chaussettes avant le départ, surtout avec les modèles sans caméra."
        ]
      },
      {
        titel: "Combien d’électricité il consomme",
        absaetze: [
          "Un passage ne consomme que quelques centièmes de kilowattheure. La station, branchée en permanence, pèse davantage : environ 1 à 4 watts, soit jusqu’à environ 35 kWh par an. Des exemples de calcul arrivent à environ 30 à 60 kWh par an pour le robot et la station ensemble.",
          "Côté électricité, robots et aspirateurs filaires se valent à peu près. Le robot vous fait donc gagner du temps, pas de l’électricité."
        ]
      }
    ],
    verweis: {
      text: "Les modèles que je recommande et le temps que vous gagnez avec vos propres chiffres se trouvent sur ma page du robot aspirateur laveur.",
      knopf: "Vers le robot aspirateur laveur et son calculateur"
    },
    wannNicht: [
      "La place manque pour la station : environ 40 cm le long du mur et 0,8 à 1,5 m libre devant.",
      "Vous avez beaucoup de tapis à poils longs ou à franges que vous ne voulez ni replier ni bloquer.",
      "Il traîne souvent beaucoup de choses par terre chez vous, et vous ne voulez pas ranger rapidement avant le départ.",
      "Vos meubles sont si bas que même un modèle plat d’environ 8 cm ne passe pas dessous, et c’est justement là que vous voulez nettoyer.",
      "Vos seuils de porte font plus d’environ 2 cm : en général, seuls les modèles avec aide au franchissement y arrivent.",
      "Vous ne passez l’aspirateur qu’une fois par semaine, la serpillière presque jamais, et cela vous convient : selon mon calculateur, il ne vous fait alors gagner que quelques minutes par semaine sur 30 m²."
    ],
    fragen: [
      { f: "Un robot bon marché suffit-il pour un petit logement ?", a: "Le plus souvent oui, s’il a une navigation laser. Il nettoie alors en bandes, et vous réglez le programme, les pièces et les zones interdites dans l’appli. Sans caméra, rangez les câbles et les chaussettes avant." },
      { f: "Peut-il rouler pendant que je télétravaille ?", a: "Oui, mais vous l’entendrez, à peu près aussi fort qu’une conversation. Faites-le plutôt rouler pendant la pause de midi, ou envoyez-le dans l’appli uniquement dans les pièces où vous n’êtes pas." },
      { f: "Ai-je besoin de la fonction serpillière ?", a: "Avec beaucoup de sols durs comme le carrelage, le stratifié ou le parquet, absolument : le sol reste propre, et vous n’avez presque plus besoin du seau. Si vous avez surtout de la moquette, ou si vous aimez de toute façon laver vous-même, un robot qui ne fait qu’aspirer suffit. Il coûte souvent moitié moins." },
      { f: "Passe-t-il les seuils de porte ?", a: "La plupart des modèles passent des seuils jusqu’à environ 2 cm. Les modèles avec aide au franchissement passent des seuils plus hauts, certains désormais plus de 5 cm." },
      { f: "Que me reste-t-il à faire moi-même ?", a: "Changer le sac à poussière toutes les quelques semaines et nettoyer la brosse de temps en temps. Avec un robot laveur, vous remettez de l’eau propre et videz l’eau sale dès qu’il vous le signale. Ne la laissez pas stagner plusieurs jours, sinon elle commence à sentir." }
    ],
    quellen: [
      { name: "Mon calculateur sur la page du robot aspirateur laveur", text: "les temps pour 30 et 60 m², les hypothèses y figurent sous « Comment je calcule »" },
      { name: "Stiftung Warentest : test des robots aspirateurs (juin 2026)", text: "hauteur, seuils de porte, taille des stations, relever les câbles avant le départ et exclure les tapis dans l’appli" },
      { name: "Stiftung Warentest : test des robots aspirateurs laveurs (décembre 2025)", text: "douze robots avec station, la plupart ne convainquent pas sur tapis" },
      { name: "ÖKO-TEST : ce que coûte un robot aspirateur par an (août 2023)", text: "batterie d’environ 31 wattheures, station 3 à 4 watts en permanence, aspirateur filaire presque toujours moins cher" },
      { name: "netzwelt.de : consommation électrique des robots aspirateurs (février 2026)", text: "69 watts en aspirant, environ 4 watts en veille, environ 50 kWh par an à deux heures par jour" },
      { name: "t-online : aspirateur ou robot, lequel est le moins cher ? (avril 2026)", text: "35 à 50 kWh par an avec station, à peine moins qu’un aspirateur filaire" },
      { name: "Heidelberg24 (septembre 2022) et drohnen.de (2019)", text: "autres calculs de la consommation des robots aspirateurs comparée à celle d’un aspirateur" },
      { name: "smarthomeassistent.de : robots aspirateurs silencieux (août 2026)", text: "le plus souvent 55 à 65 dB, vidage dans la station brièvement 75 à 80 dB" },
      { name: "netzwelt.de : bruit des robots aspirateurs (février 2026) et stations de vidage (mars 2026)", text: "le plus souvent 60 à 70 dB, 60 dB correspondent à une conversation normale, la station 80 à 90 dB pendant quelques secondes" },
      { name: "testsiegertv.com : stations de vidage (juillet 2021)", text: "vidage jusqu’à 90 dB, ne dure que quelques secondes" },
      { name: "home&smart : test des robots aspirateurs plats (novembre 2026)", text: "robots normaux de 9 à 12 cm de haut, plats de 7 à 9 cm" },
      { name: "home&smart : LiDAR contre caméra (novembre 2026)", text: "le laser crée la carte, seule la caméra reconnaît un câble comme un câble, sinon il s’enroule autour de la brosse" },
      { name: "home&smart : test des seuils de porte (septembre 2026)", text: "sans aide au franchissement le plus souvent 2 cm, certains modèles nettement plus" },
      { name: "smarthomeassistent.de : le Roborock ne passe pas sous les meubles (juin 2023)", text: "quelques millimètres de plus ne suffisent souvent pas, mieux vaut prévoir de la marge" },
      { name: "smarthomeassistent.de : tapis à franges (mai 2023) et robots pour seuils hauts (juillet 2026)", text: "les franges s’enroulent autour de la brosse, les replier aide, certains modèles franchissent plus de 5 cm" },
      { name: "smarthomeassistent.de : test du Roborock Q10 S5+ (juillet 2026) et du Roborock Q7 L5+ (mai 2026)", text: "navigation laser dans la gamme de prix inférieure, enlisé sur poils longs, aucun des 53 obstacles reconnu" },
      { name: "netzwelt.de : navigation des robots aspirateurs et robots pour tapis (février 2026)", text: "laser déjà sur des modèles moins chers, cartes et zones interdites dans l’appli, poils longs et franges comme limite" },
      { name: "Indications des fabricants et modes d’emploi", text: "place devant et à côté de la station selon Roborock (Q5 Pro, Q8 Max+), Kärcher (RCV 5) et Ecovacs, dimensions des stations selon Kärcher et Anker, bruit selon Hoover, Anker et Ecovacs, électricité, bords de tapis et seuils selon Anker" }
    ]
  },
  {
    id: "airfryer-oder-backofen",
    produkt: "airfryer",
    geprueft: "2026-11-04",
    titel: "Friteuse sans huile ou four : lequel est le moins cher ?",
    frage: "Friteuse sans huile ou four : lequel est le moins cher ?",
    seitenTitel: "Friteuse sans huile ou four : lequel est le moins cher ?",
    beschreibung: "Combien d’électricité une friteuse sans huile et un four consomment par plat, ce que cela représente en centimes et quand le four fait jeu égal.",
    kurzantwort: "Pour de petites quantités, la friteuse sans huile est moins chère : dans les tests, elle consomme souvent seulement la moitié de l’électricité par plat, voire moins. À 37 centimes le kWh, vous économisez ainsi environ 13 à 33 centimes par plat. Si une grande quantité demande plusieurs fournées, le four fait aussi bien, voire coûte moins cher.",
    abschnitte: [
      {
        titel: "L’électricité consommée par plat",
        absaetze: [
          "Plusieurs tests et comparatifs montrent combien d’électricité le même plat consomme dans une friteuse sans huile et dans un four. J’ai calculé les coûts à 37 centimes le kWh, la moyenne en Allemagne. En Autriche et en Suisse, l’électricité coûte environ 30 centimes, chaque plat y revient donc un peu moins cher."
        ],
        tabelle: {
          kopf: ["Plat","Friteuse sans huile","Four","Source"],
          zeilen: [
            ["Frites, 2 portions","0,29 kWh (11 centimes)","0,86 kWh (32 centimes)","Which?, 2026"],
            ["Frites, 1 portion","0,35 kWh (13 centimes)","0,7 kWh (26 centimes)","inside digital, 2025"],
            ["Pomme de terre au four","0,39 kWh (15 centimes)","1,08 kWh (40 centimes)","Which?, 2026"],
            ["Poulet entier","0,54 kWh (20 centimes)","1,16 kWh (43 centimes)","Which?, 2026"],
            ["Ailes de poulet","0,2 à 0,3 kWh (7 à 11 centimes)","1,0 à 1,2 kWh (37 à 44 centimes)","stromguide.com via VOL.AT, 2025"]
          ]
        }
      },
      {
        titel: "Pourquoi la friteuse sans huile consomme moins",
        absaetze: [
          "Sa cavité est petite, et l’air chaud arrive vite. Le plus souvent, pas besoin de préchauffer, ou seulement quelques minutes, alors qu’un four a besoin d’environ 10 à 15 minutes. La cuisson elle-même est aussi le plus souvent plus courte. Selon Stiftung Warentest, les friteuses sans huile sont plus rapides que les fours et consomment moins d’électricité."
        ]
      },
      {
        titel: "Quand le four fait jeu égal",
        absaetze: [
          "L’avantage vaut tant que tout tient dans le panier en une seule fois. Si vous cuisinez pour beaucoup de monde et avez besoin de deux ou trois fournées, l’économie fond, et pour de grandes quantités le four fait aussi bien ou coûte moins cher.",
          "Pour une pizza, un gâteau sur plaque ou un grand gratin, le four reste de toute façon le meilleur choix. Là, c’est la surface qui compte, et la friteuse sans huile ne l’a pas."
        ]
      },
      {
        titel: "Ce que cela représente sur un an",
        absaetze: [
          "Si vous préparez un plat quatre fois par semaine dans la friteuse sans huile plutôt qu’au four, mon calculateur indique que vous économisez environ 42 euros par an à 37 centimes le kWh. À 30 centimes le kWh, c’est environ 34 euros. Si vous ne cuisinez chaud qu’une fois par semaine, c’est un peu plus de 10 euros.",
          "L’électricité seule ne justifie donc guère l’achat d’une friteuse sans huile. Vous gagnez surtout du temps : pas de préchauffage, pas de plaque à frotter et presque pas de vaisselle, environ 18 minutes par plat selon mon calculateur."
        ]
      },
      {
        titel: "Mon expérience",
        art: "erfahrung",
        absaetze: [
          "Depuis que j’ai ma friteuse sans huile, je ne me suis plus servi de mes poêles. Et tout a meilleur goût : les légumes sont plus croquants et plus savoureux, le poulet est parfaitement tendre à chaque fois. En plus, je n’ai quasiment plus de vaisselle. Rien n’attache jamais, je mets simplement les paniers au lave-vaisselle ou je les essuie à la fin avec un chiffon humide."
        ]
      },
      {
        titel: "Si vous gardez le four",
        absaetze: [
          "Avec le four aussi, vous pouvez économiser de l’électricité. Pour la plupart des plats, pas besoin de le préchauffer, seulement pour certaines pâtes comme la génoise ou les biscuits. En chaleur tournante, vous réglez la température environ 20 degrés plus bas qu’en convection naturelle, et vous consommez ainsi moins. Et pour les longues cuissons, éteignez-le 5 à 10 minutes plus tôt : la chaleur résiduelle continue la cuisson."
        ]
      }
    ],
    verweis: {
      text: "Combien vous économisez avec votre prix de l’électricité et vos plats, et quelles friteuses sans huile je recommande, se trouve sur ma page de la friteuse sans huile.",
      knopf: "Vers la friteuse sans huile et son calculateur"
    },
    wannNicht: [
      "Vous cuisinez le plus souvent pour quatre personnes ou plus à la fois et devriez faire plusieurs fournées dans la friteuse sans huile.",
      "Vous faites surtout des pizzas, des gâteaux sur plaque ou de grands gratins.",
      "Vous voulez seulement économiser de l’électricité : ce sont quelques centimes par plat, et il faut un moment avant de rentabiliser le prix d’achat.",
      "Vous cuisinez rarement chaud : vous n’économisez alors que quelques euros par an.",
      "Il n’y a pas de place sur votre plan de travail pour un appareil de plus."
    ],
    fragen: [
      { f: "Faut-il préchauffer une friteuse sans huile ?", a: "Le plus souvent non, ou seulement quelques minutes. Un four a besoin d’environ 10 à 15 minutes." },
      { f: "Combien coûte un plat dans la friteuse sans huile ?", a: "Il consomme le plus souvent 0,2 à 0,5 kWh, soit environ 7 à 20 centimes à 37 centimes le kWh. Au four, la même quantité consomme souvent deux fois plus, voire davantage." },
      { f: "La chaleur tournante du four est-elle aussi économe ?", a: "La chaleur tournante consomme moins que la convection naturelle, car vous pouvez régler environ 20 degrés de moins. Pour de petites quantités, la friteuse sans huile reste quand même plus économe, car elle chauffe un espace bien plus petit." },
      { f: "Une friteuse sans huile vaut-elle le coup pour une personne ?", a: "Justement dans ce cas. Avec de petites portions, l’écart avec le four est le plus grand. Si vous ne préparez le plus souvent qu’une chose à la fois, un appareil à un seul panier suffit." }
    ],
    quellen: [
      { name: "Which? : « Air fryer vs oven » (octobre 2026)", text: "électricité mesurée par plat, frites, pomme de terre au four et poulet entier, moins de la moitié dans la friteuse sans huile, l’avantage fond avec plusieurs fournées" },
      { name: "Choice : friteuse sans huile contre four (octobre 2023)", text: "trois plats comparés, environ moitié moins d’électricité par heure dans la friteuse sans huile, le four avec 15 minutes de préchauffage" },
      { name: "inside digital : idées reçues sur la friteuse sans huile (novembre 2025)", text: "frites environ 0,35 kWh dans la friteuse sans huile, environ 0,7 kWh au four, plutôt le four pour de grandes quantités" },
      { name: "VOL.AT avec des chiffres de stromguide.com (octobre 2025)", text: "ailes de poulet 1,0 à 1,2 kWh au four, 0,2 à 0,3 kWh dans la friteuse sans huile, le four pour les familles qui cuisinent de grandes quantités" },
      { name: "testundtipps.de : friteuse sans huile ou four (août 2026)", text: "préchauffage 2 à 3 minutes au lieu de 10 à 15, frites 0,3 à 0,5 kWh par fournée, à peu près à égalité pour de grandes quantités" },
      { name: "home&smart (novembre 2026) et Utopia (août 2026)", text: "plusieurs fournées réduisent l’économie, l’électricité seule ne justifie guère une friteuse sans huile" },
      { name: "Stiftung Warentest : test des friteuses sans huile (septembre 2026)", text: "les friteuses sans huile cuisent plus vite que les fours et consomment moins, beaucoup ne cuisent pas une grande portion de frites de façon homogène" },
      { name: "ÖKO-TEST : économiser l’énergie avec le four (janvier 2026)", text: "préchauffage le plus souvent inutile, 20 degrés de moins en chaleur tournante, éteindre 10 minutes plus tôt pour les longues cuissons" },
      { name: "Centre fédéral allemand pour la nutrition, via dpa et Utopia (août 2024)", text: "20 à 30 degrés de moins en chaleur tournante, plus de 20 pour cent d’énergie en moins sans préchauffage, éteindre 5 à 10 minutes plus tôt" },
      { name: "oesterreich.gv.at : cuisinières et fours (mars 2025)", url: "https://www.oesterreich.gv.at/de/themen/umwelt_und_klima/energie_und_ressourcen_sparen/2/Seite.2430150", text: "jusqu’à 20 pour cent d’énergie en moins en chaleur tournante, éteindre à temps et profiter de la chaleur résiduelle" },
      { name: "Mon calculateur sur la page de la friteuse sans huile", text: "four environ 1,0 kWh et friteuse sans huile environ 0,45 kWh par plat, 18 minutes de moins qu’avec le four pour le préchauffage, la plaque et la vaisselle, les hypothèses y figurent sous « Comment je calcule »" },
      { name: "BDEW (fédération allemande de l’énergie et de l’eau) : analyse des prix de l’électricité août 2026", url: "https://www.bdew.de/media/documents/BDEW_Strompreisanalyse_082026.pdf", text: "37 centimes le kWh pour les ménages en Allemagne" },
      { name: "E-Control (régulateur autrichien) : observatoire des prix de l’électricité janvier 2026", url: "https://www.e-control.at/documents/1785851/1811582/preismonitor_jan_26.pdf/b2376bf8-3337-4ba0-ad26-f98a443ab871?t=1767782911898", text: "en moyenne environ 30 centimes le kWh chez les fournisseurs régionaux en Autriche" },
      { name: "ElCom (Commission fédérale de l’électricité) : newsletter 9/2025", url: "https://www.elcom.admin.ch/dam/de/sd-web/znXqHISH0pFP/Newsletter_09-2025_D.pdf", text: "27,7 centimes le kWh pour un ménage type en Suisse en 2026" },
      { name: "Indications des fabricants", text: "préchauffage et programmes selon Cosori" }
    ]
  }
];
