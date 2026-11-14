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
    seitenTitel: "Robot aspirateur : rentable dans un petit logement ?",
    beschreibung: "Ce qu’un robot aspirateur laveur fait gagner sur 30 à 60 m², son bruit, la place de la station et quand il ne vous convient pas.",
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
    seitenTitel: "Friteuse sans huile ou four : lequel est moins cher ?",
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
  },
  {
    id: "saugroboter-haustiere",
    produkt: "saugroboter",
    geprueft: "2026-11-04",
    titel: "Robot aspirateur et animaux : qu’est-ce qui compte ?",
    frage: "Robot aspirateur et animaux : qu’est-ce qui compte ?",
    seitenTitel: "Robot aspirateur et animaux : qu’est-ce qui compte ?",
    beschreibung: "La brosse, la station et la caméra dont un robot aspirateur laveur a besoin avec un chien ou un chat, et quand il ne vous convient pas.",
    kurzantwort: "Trois choses : une brosse autour de laquelle les poils s’enroulent à peine, une station qui le vide, et une caméra qui reconnaît le plus souvent les crottes de chien et les contourne. Dans l’appli, vous bloquez en plus la gamelle, la litière et le coin couchage. Avec un animal, il vaut particulièrement le coup : si vous passez l’aspirateur tous les jours à cause des poils, mon calculateur indique qu’il vous fait gagner environ deux heures par semaine sur 60 m².",
    abschnitte: [
      {
        titel: "Le temps gagné avec un animal",
        absaetze: [
          "Si vous passez l’aspirateur tous les jours à cause des poils, mon calculateur indique qu’il vous fait gagner un peu moins de deux heures par semaine sur 60 m², préparation comprise. Si vous passez en plus la serpillière une fois par semaine, c’est un peu plus de deux heures. Cela fait 99 à 119 heures par an ; avec deux passages d’aspirateur et un de serpillière par semaine, 45.",
          "Le robot, lui, passe tous les jours selon le programme, et vous n’avez presque rien à faire pour cela."
        ]
      },
      {
        titel: "Mon expérience avec mon chat",
        art: "erfahrung",
        absaetze: [
          "J’ai acheté mon premier robot aspirateur entre autres à cause du chat que j’avais à l’époque. Il éparpillait sans arrêt de la litière dans l’appartement, et ça me rendait fou. À l’époque, dans mon premier et mon deuxième logement, le robot m’a beaucoup aidé avec la litière."
        ]
      },
      {
        titel: "Une brosse autour de laquelle les poils s’enroulent à peine",
        absaetze: [
          "Le caoutchouc plutôt que les poils aide déjà un peu. Ce qui compte vraiment, c’est la façon dont la brosse principale est construite et fixée.",
          "Dreame, par exemple, utilise sur certains robots deux rouleaux fixés d’un seul côté, l’autre côté restant ouvert. La rotation et le flux d’air poussent les poils vers cette extrémité ouverte, où ils sont aspirés. Dans les tests, même les poils longs ne s’y sont presque pas accrochés.",
          "D’autres fabricants procèdent de façon similaire : Narwal suspend une brosse conique d’un seul côté. Roborock divise la brosse au milieu, où les poils sont aspirés.",
          "Sur sol dur, beaucoup de robots nettoient bien ; sur tapis, la différence se voit. Selon Stiftung Warentest, ce qui compte pour les propriétaires d’animaux, c’est la note pour le ramassage des fibres sur tapis. Les notes y vont de bon à insuffisant."
        ]
      },
      {
        titel: "Une station qui le vide",
        absaetze: [
          "Le bac du robot est petit et vite plein de poils. Sans station, avec un animal, vous le videz souvent vous-même tous les jours. Une station le vide après le nettoyage, et vous ne changez plus le sac que de temps en temps.",
          "Selon le modèle, c’est à faire toutes les quelques semaines à quelques mois, plus tôt avec un animal qui perd ses poils. Le plus souvent, le sac se ferme quand vous le retirez, vous ne touchez ainsi presque pas à la poussière et aux poils."
        ]
      },
      {
        titel: "Une caméra qui reconnaît les crottes de chien",
        absaetze: [
          "Si un robot passe dans une crotte de chien ou un vomi, il l’étale dans tout le logement. Sans caméra, il ne reconnaît en général pas ce genre de chose. Les modèles avec caméra et IA le reconnaissent le plus souvent et le contournent : dans des tests avec de fausses crottes de chien, les bons modèles les ont presque toutes évitées.",
          "Il n’y a cependant aucune garantie. Plus un accident est liquide et plat, plus même une caméra risque de le manquer. Si votre animal est encore jeune, déjà âgé ou malade en ce moment, jetez un rapide coup d’œil au sol avant le départ."
        ]
      },
      {
        titel: "Bloquer la gamelle, la litière et le coin couchage",
        absaetze: [
          "Dans l’appli, créez des zones interdites autour des gamelles d’eau et de nourriture, de la litière et du coin couchage. Le robot laisse ainsi les gamelles tranquilles, et votre animal a des endroits où il n’est pas dérangé."
        ]
      },
      {
        titel: "Comment habituer votre animal au robot",
        absaetze: [
          "Avec environ 55 à 70 décibels, un robot est plus silencieux qu’un aspirateur normal. Seule la station devient bruyante un court instant quand elle le vide. Habituez quand même votre animal par petites étapes.",
          "Laissez d’abord votre animal renifler le robot éteint. Ensuite, démarrez-le dans une autre pièce, en mode silencieux et pendant que vous êtes à la maison. Si votre animal reste calme ou devient curieux, donnez-lui une friandise. Ne le forcez jamais à s’approcher du robot.",
          "Un refuge que le robot ne peut pas atteindre est important. Ce n’est que lorsque votre animal reste détendu que vous le laissez rouler selon le programme pendant votre absence, avec un chien par exemple pendant la promenade."
        ]
      },
      {
        titel: "Vérifier de temps en temps : brosse et roues",
        absaetze: [
          "Avec une brosse simple et un animal, retirez les poils enroulés environ une fois par semaine ; certains fabricants indiquent toutes les deux semaines. Les brosses anti-emmêlement en ont besoin bien moins souvent. Des poils s’accumulent aussi sur la brosse latérale et les roues."
        ]
      }
    ],
    verweis: {
      text: "Les modèles que je recommande, y compris pour les foyers avec animaux, et le temps que vous gagnez avec vos propres chiffres se trouvent sur ma page du robot aspirateur laveur.",
      knopf: "Vers le robot aspirateur laveur et son calculateur"
    },
    wannNicht: [
      "Votre animal a souvent des accidents, par exemple parce qu’il n’est pas encore propre, et vous ne voulez pas de modèle avec caméra.",
      "Votre animal panique encore dès que le robot roule, même après des semaines d’habituation en douceur.",
      "La place manque pour la station : sans elle, avec un animal, vous videz souvent le bac vous-même tous les jours.",
      "Vous avez surtout de la moquette à poils longs : beaucoup de robots n’en retirent pas bien les poils, et certains s’y enlisent.",
      "Gamelles, paniers et jouets sont chaque jour ailleurs, et vous ne voulez ni les ranger ni les bloquer dans l’appli."
    ],
    fragen: [
      { f: "Le robot reconnaît-il les crottes de chien ?", a: "Avec une caméra et l’IA, le plus souvent oui, sans caméra en général non. Il n’y a cependant aucune garantie, surtout avec ce qui est liquide comme un vomi." },
      { f: "Mon chien ou mon chat aura-t-il peur du robot ?", a: "Certains animaux au début, oui, même s’il est plus silencieux qu’un aspirateur normal. Avec de la patience et par petites étapes, beaucoup s’y habituent." },
      { f: "Peut-il aspirer la litière pour chat ?", a: "Il peut aspirer la litière sèche et éparpillée. Les grumeaux et la litière humide n’ont cependant rien à faire dans le robot. Bloquez donc une petite zone autour de la litière, il n’y ira alors pas du tout." },
      { f: "À quoi faut-il faire attention si vous êtes allergique aux poils d’animaux ?", a: "À un vrai filtre HEPA et à une station avec sac : la poussière fine reste alors dans l’appareil, et vous n’y touchez presque pas en changeant le sac. Un robot aspirateur ne peut cependant pas traiter une allergie. Le mieux est de demander à un médecin ce qui peut vous aider." },
      { f: "Quelle puissance d’aspiration faut-il pour les poils d’animaux ?", a: "Les recommandations varient énormément, de quelques milliers à plus de 20 000 pascals. Le résultat des tests sur tapis est plus fiable, car c’est là que se voient les différences. Une brosse autour de laquelle les poils ne s’enroulent pas du tout compte au moins autant." }
    ],
    quellen: [
      { name: "Mon calculateur sur la page du robot aspirateur laveur", text: "les temps pour 60 m² avec aspirateur tous les jours avec et sans serpillière et avec deux passages d’aspirateur et un de serpillière, les hypothèses y figurent sous « Comment je calcule »" },
      { name: "Stiftung Warentest : test des robots aspirateurs (juin 2026)", text: "test d’obstacles avec une fausse crotte de chien, pour les propriétaires d’animaux compte le ramassage des fibres sur tapis (de bon à insuffisant), déclassement en cas de problème avec les poils longs, bien plus de bons robots pour sol dur que pour tapis" },
      { name: "Stiftung Warentest : test des robots aspirateurs laveurs (décembre 2025)", text: "la plupart des robots ne convainquent pas sur tapis" },
      { name: "c’t (heise) : test des robots aspirateurs avec détection d’obstacles (décembre 2021)", text: "trois robots avec caméra IA ont toujours évité de façon sûre de fausses crottes de chien et de chat" },
      { name: "Reviewed : iRobot Roomba j7+ contre Samsung Jetbot AI+ (juin 2023)", text: "test avec de fausses crottes de chien, le Roomba sans aucun accroc, le Jetbot en a touché une brièvement avant de l’éviter" },
      { name: "smarthomeassistent.de : un robot aspirateur reconnaît-il le vomi de chat ? (mai 2023)", text: "contourne les fausses crottes, aucune garantie avec le vomi, aucun robot connu ne reconnaît les accidents plats et liquides, sinon il étale le dégât dans le logement" },
      { name: "smarthomeassistent.de : robots aspirateurs pour poils d’animaux (août 2026) et station de vidage avec ou sans sac (juin 2023)", text: "on retire à la main les poils emmêlés, un sac tient un à plusieurs mois et se ferme quand on le retire, la poussière reste donc dedans" },
      { name: "netzwelt.de : robots aspirateurs pour poils d’animaux (février 2026)", text: "les poils se prennent dans les poils de brosse, les brosses en caoutchouc et anti-emmêlement sont meilleures, sans station vider plusieurs fois par jour, sac après environ deux mois, détection IA pour les animaux pas encore propres, filtre HEPA, passage pendant la promenade, zones interdites au coin couchage" },
      { name: "netzwelt.de : robots aspirateurs pour tapis (février 2026)", text: "les poils longs poussent même les modèles haut de gamme à leurs limites" },
      { name: "saugroboter-portal.de : quelles brosses principales pour les robots aspirateurs ? (septembre 2026)", text: "les poils longs s’enroulent plus vite autour des poils de brosse, ils s’accrochent bien moins aux brosses en caoutchouc, le meilleur choix avec des animaux" },
      { name: "home&smart : robots aspirateurs contre les poils d’animaux et robots aspirateurs pour allergiques (tous deux octobre 2026)", text: "brosses principales caoutchoutées et systèmes anti-emmêlement, petits bacs à poussière dans le robot, aspiration à partir de 20 000 Pa avec plusieurs animaux, filtre HEPA à partir de la classe H13, poussière enfermée hermétiquement dans le sac" },
      { name: "testundtipps.de : entretien des robots aspirateurs (octobre 2026)", text: "nettoyer la brosse principale chaque semaine ou toutes les deux semaines selon le fabricant, avec des animaux et des poils longs cela peut être trop rare, sac tous les 2 à 4 mois" },
      { name: "tink : robots aspirateurs avec chien et chat (octobre 2026)", text: "le découvrir d’abord éteint, le démarrer dans la pièce d’à côté, au début seulement quand vous êtes là, refuges, friandises et patience" },
      { name: "robo-freunde.de : chat et robot aspirateur, robots aspirateurs pour litière et robot aspirateur et vomi de chat (2023)", text: "habituation par petites étapes, ne jamais forcer, zones interdites autour de la gamelle et de la litière, vérifier le sol avant le départ, plus c’est liquide, plus c’est difficile à reconnaître" },
      { name: "Mähroboter Guru : habituer un chat à un robot aspirateur (juillet 2024)", text: "le laisser renifler éteint, démarrer dans la pièce d’à côté en mode silencieux, friandises, ne jamais forcer, d’abord sous surveillance, puis selon le programme" },
      { name: "netzwelt.de : bruit des robots aspirateurs (février 2026) et stations de vidage (mars 2026)", text: "le plus souvent 60 à 70 dB, la station 80 à 90 dB pendant quelques secondes, les sacs se ferment seuls quand on les retire et tiennent deux à trois mois, les poils d’animaux font beaucoup de saleté" },
      { name: "smarthomeassistent.de : robots aspirateurs silencieux (août 2026) et testsiegertv.com : stations de vidage (juillet 2021)", text: "le plus souvent 55 à 65 dB, vidage dans la station jusqu’à 90 dB pendant quelques secondes" },
      { name: "Vacuum Wars : test du Dreame X50 Ultra (mars 2025, mis à jour en septembre 2026)", text: "double rouleau affiné à une extrémité, les poils migrent de ce côté, rien ne s’est emmêlé dans le test avec des poils de 18 cm" },
      { name: "home&smart : test du Dreame X50 Ultra Complete (avril 2026) et Dreame X60 Pro Ultra (septembre 2026)", text: "pas un seul poil long dans les rouleaux, bien moins d’entretien, sur le X60 même des poils de 1 m ne se sont pas accrochés" },
      { name: "smarthomeassistent.de : Dreame X50 Ultra Complete (juillet 2026)", text: "tous les poils ramassés au test des poils, sans enroulement sur la brosse principale et la brosse latérale" },
      { name: "winfuture : test du Narwal Freo Z10 (juillet 2025) et china-gadgets : Narwal Freo Z10 Ultra (mai 2025)", text: "brosse principale conique, suspendue d’un seul côté, presque propre après plusieurs passages avec des cheveux longs et des poils d’animaux, le rouleau ouvert empêche l’emmêlement" },
      { name: "netzwelt.de : test du Roborock Qrevo Curv (septembre 2024)", text: "brosse principale en deux parties, les poils passent par l’espace au milieu dans le conduit d’aspiration" },
      { name: "testsiegertv.com : test du Roborock Qrevo Curv (février 2025)", text: "deux petites brosses amènent les poils au milieu, où ils sont aspirés, aucun enroulement avec des poils de 5, 10 et 20 cm, ceux de 38 cm se sont d’abord enroulés puis ont été aspirés" },
      { name: "Indications et guides des fabricants", text: "Ecovacs (aucune garantie avec les crottes, zones interdites autour des paniers et de la litière, ne jamais aspirer de litière mouillée ou agglomérée, la litière sèche oui), Dreame (accidents plats et humides difficiles à reconnaître, zones interdites autour de la litière, des paniers et des gamelles, vérifier rapidement le sol), MOVA (sacs plus vite pleins avec des animaux, retirer les poils des brosses et des roues éventuellement chaque semaine), Roborock (retirer régulièrement les poils autour des axes de roues et de la brosse latérale), Ecovacs (les poils s’enroulent autour de l’axe de roue), Dreame (HyperStream Detangling DuoBrush : deux rouleaux sur un bras, fixés d’un seul côté, les poils migrent vers l’extrémité libre et y sont aspirés, jusqu’à 30 cm sans emmêlement, à nettoyer quand même s’il y a beaucoup de poils), Narwal (rouleau conique sur un seul bras), Roborock (DuoDivide : brosse divisée, les poils sont aspirés au milieu)" }
    ]
  },
  {
    id: "waschtrockner-oder-waschmaschine-und-trockner",
    produkt: "waschtrockner",
    geprueft: "2026-11-04",
    titel: "Lavante-séchante ou lave-linge et sèche-linge : que choisir ?",
    frage: "Lavante-séchante ou lave-linge et sèche-linge : que choisir ?",
    seitenTitel: "Lavante-séchante ou lave-linge et sèche-linge ?",
    beschreibung: "Place, électricité, eau et temps comparés : quand une lavante-séchante convient mieux, quand un lave-linge et un sèche-linge, et le coût par mois.",
    kurzantwort: "Si vous manquez de place, la lavante-séchante est le choix le plus pratique : un seul appareil, pas de linge à transvaser, dedans le matin et sec le soir. Si vous avez la place pour deux appareils et lavez beaucoup, un lave-linge et un sèche-linge à pompe à chaleur sont meilleurs. Ils sèchent plus de linge à la fois et consomment souvent moitié moins d’électricité pour le séchage, voire moins.",
    abschnitte: [
      {
        titel: "La place : un appareil ou deux",
        absaetze: [
          "Une lavante-séchante se place exactement là où irait sinon le lave-linge et demande les mêmes raccordements. Deux appareils côte à côte prennent deux fois plus de surface au sol.",
          "On peut aussi gagner de la place : avec un kit de superposition, vous posez le sèche-linge sur le lave-linge, jamais l’inverse. Les deux n’occupent alors que la surface d’un lave-linge, mais demandent de la place en hauteur. Sans kit, le sèche-linge peut glisser pendant l’essorage."
        ]
      },
      {
        titel: "Combien de linge vous pouvez sécher à la fois",
        absaetze: [
          "Une lavante-séchante lave le plus souvent 7 à 10 kg, mais n’en sèche que 4 à 6. Une charge de lavage complète demande donc jusqu’à deux séchages, ou vous étendez le reste. Si vous voulez laver et sécher d’une traite, ne la remplissez donc qu’un peu plus qu’à moitié.",
          "Un sèche-linge séparé sèche en revanche une charge complète d’un coup. Et pendant qu’il sèche, le lave-linge lave déjà la suivante."
        ]
      },
      {
        titel: "Électricité et eau",
        absaetze: [
          "C’est le séchage qui fait la plus grande différence. Un sèche-linge à pompe à chaleur consomme le plus souvent environ 1 à 2 kWh pour une charge complète. Une lavante-séchante sans pompe à chaleur consomme un peu plus de 2 kWh, et cela pour seulement 6 kg. Pour le même linge, le sèche-linge à pompe à chaleur consomme donc souvent moitié moins d’électricité, voire moins.",
          "Beaucoup de lavantes-séchantes refroidissent en plus avec l’eau du robinet pendant le séchage. C’est pourquoi elles consomment plus d’eau qu’un lave-linge et un sèche-linge réunis.",
          "Il existe aussi des lavantes-séchantes avec pompe à chaleur. Elles consomment moins d’électricité et d’eau, et dans un test de Stiftung Warentest portant sur quatre appareils, un tel modèle a été vainqueur en 2023."
        ]
      },
      {
        titel: "Le temps : ce qui est prêt le plus vite",
        absaetze: [
          "Par rapport à l’étendoir, les deux solutions vous font gagner du temps : avec trois lessives par semaine, étendre et ramasser le linge prend environ une demi-heure par semaine selon mon calculateur.",
          "Laver et sécher dans une lavante-séchante avec une charge complète prend souvent 8 heures ou plus. Dans le test de Konsument, les sèche-linge à pompe à chaleur ont eu besoin d’un peu plus de 2 à un peu plus de 3 heures pour une charge complète, plus le lavage avant.",
          "Cela n’a pas forcément d’importance : avec la fonction fin différée, la lavante-séchante démarre de façon à avoir fini quand vous rentrez. Si vous voulez faire plusieurs lessives dans la journée, deux appareils sont plus rapides."
        ]
      },
      {
        titel: "Mon expérience",
        art: "erfahrung",
        absaetze: [
          "J’ai une lavante-séchante Haier et je ne veux plus jamais m’en passer. Le matin, le linge va dedans, et quand je rentre du travail, il est lavé et séché. Je n’ai plus besoin de repasser non plus : le programme vapeur i-⁠Refresh rafraîchit les vêtements, et surtout ils ressortent sans plis."
        ]
      },
      {
        titel: "Ce que cela coûte",
        absaetze: [
          "À l’achat, une lavante-séchante est souvent moins chère qu’un lave-linge et un sèche-linge réunis. Le séchage coûte en revanche plus d’électricité : avec trois lessives par semaine à 37 centimes le kWh, mon calculateur indique un peu plus de 10 € par mois, à 30 centimes un peu moins de 9 €.",
          "Un sèche-linge à pompe à chaleur s’en sortirait souvent avec la moitié ou moins pour le même linge. Selon Stiftung Warentest, les frais de fonctionnement plus élevés peuvent effacer au fil des ans le prix d’achat plus bas d’une lavante-séchante."
        ]
      }
    ],
    verweis: {
      text: "La lavante-séchante que je recommande, le temps qu’elle vous fait gagner et l’électricité qu’elle coûte avec vos propres chiffres se trouvent sur ma page de la lavante-séchante.",
      knopf: "Vers la lavante-séchante et son calculateur"
    },
    wannNicht: [
      "Vous faites plusieurs lessives par jour pour une grande famille.",
      "Vous voulez laver et sécher des charges complètes d’une traite.",
      "Vous avez la place pour deux appareils, côte à côte ou superposés, et voulez consommer le moins d’électricité et d’eau possible.",
      "Vous avez souvent besoin de votre linge rapidement : laver et sécher prennent ensemble le plus souvent 8 heures ou plus.",
      "Un linge séché de façon bien homogène compte beaucoup pour vous : beaucoup de lavantes-séchantes sèchent moins bien qu’un sèche-linge séparé."
    ],
    fragen: [
      { f: "Puis-je poser le sèche-linge sur le lave-linge ?", a: "Oui, avec un kit de superposition adapté et toujours avec le sèche-linge en haut. Le cadre le maintient et absorbe les vibrations pendant l’essorage. Le plus simple, c’est avec deux appareils de la même marque et de la même taille." },
      { f: "Une lavante-séchante sèche-t-elle aussi bien qu’un sèche-linge ?", a: "Le plus souvent pas tout à fait : dans les tests, beaucoup de lavantes-séchantes sèchent de façon moins homogène, et parfois le linge reste un peu humide. Les meilleurs modèles s’en sortent cependant bien. L’important est de ne pas trop la remplir pour le séchage." },
      { f: "Pourquoi une lavante-séchante a-t-elle besoin d’eau pour sécher ?", a: "Beaucoup refroidissent la vapeur chaude et humide avec l’eau du robinet pour qu’elle se condense et s’écoule. Selon l’appareil, cela fait un bon nombre de litres par séchage. Il existe aussi des modèles qui n’ont pas besoin d’eau pour cela, par exemple avec pompe à chaleur." },
      { f: "Une lavante-séchante avec pompe à chaleur vaut-elle le coup ?", a: "Si vous séchez souvent, oui. Elle consomme moins d’électricité et d’eau : pour le vainqueur du test 2023, Stiftung Warentest a calculé environ 760 € de frais de fonctionnement en moins sur dix ans par rapport aux appareils de Bosch et Siemens testés. En contrepartie, elle coûte nettement plus cher à l’achat." }
    ],
    quellen: [
      { name: "Mon calculateur sur la page de la lavante-séchante", text: "le coût de l’électricité pour le séchage avec trois lessives par semaine à 2,2 kWh par charge et le temps pour étendre et ramasser le linge, les hypothèses y figurent sous « Comment je calcule »" },
      { name: "Verbraucherzentrale : les lavantes-séchantes, des appareils combinés compacts mais gourmands (août 2026)", url: "https://www.verbraucherzentrale.de/wissen/energie/strom-sparen/waschtrockner-kombigeraete-sind-platzsparende-stromfresser-37060", text: "plus d’électricité et d’eau qu’un lave-linge et un sèche-linge, refroidissement à l’eau, lave 7 à 9 kg et sèche 4 à 6 kg, surtout utile dans les très petits logements" },
      { name: "Agence fédérale allemande de l’environnement (Umweltbundesamt) : sèche-linge (mars 2026)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/elektrogeraete/waeschetrockner", text: "sèche-linge à pompe à chaleur 73 à 97 kWh pour 100 séchages, appareils anciens environ 340 kWh, lavantes-séchantes moins efficaces que deux appareils séparés" },
      { name: "co2online : consommation du sèche-linge et du lave-linge (avril 2023)", url: "https://www.co2online.de/energie-sparen/strom-sparen/strom-sparen-stromspartipps/waschmaschine-trockner/", text: "les sèche-linge à pompe à chaleur les plus sobres autour de 156 kWh par an pour 7 kg, jusqu’à 80 % d’électricité en moins qu’un sèche-linge à condensation" },
      { name: "HEA (association allemande pour l’utilisation efficace de l’énergie) : lavantes-séchantes", text: "eau de refroidissement 9 à 35 litres par séchage selon l’appareil, seulement la moitié aux deux tiers de la charge de lavage peut être séchée, une charge complète demande jusqu’à deux séchages, la pompe à chaleur économise électricité et eau de refroidissement" },
      { name: "Stiftung Warentest : test des lavantes-séchantes (octobre 2023, mis à jour en août 2026)", text: "un programme a duré plus de neuf heures, souvent moins chère à l’achat que deux appareils, les frais de fonctionnement peuvent l’effacer avec le temps" },
      { name: "t-online (octobre 2023) et desired.de (février 2025) sur le test des lavantes-séchantes de Stiftung Warentest (numéro 11/2023)", text: "quatre appareils testés, vainqueur AEG avec pompe à chaleur, consommation d’électricité et d’eau la plus basse, environ 760 € de frais de fonctionnement en moins sur dix ans que les appareils de Bosch et Siemens" },
      { name: "Stiftung Warentest : test des sèche-linge (septembre 2026)", text: "la pompe à chaleur réduit nettement la consommation, les sèche-linge à condensation et à évacuation sont des gouffres à électricité dépassés" },
      { name: "Konsument (VKI) : test des sèche-linge (septembre 2026)", text: "sèche-linge à pompe à chaleur pour 8 kg de coton sec à ranger 0,90 à 1,82 kWh, durée du programme 136 à 192 minutes" },
      { name: "Which? : lavante-séchante ou lave-linge et sèche-linge (octobre 2026)", text: "216 livres d’électricité par an pour une lavante-séchante contre 118 livres pour un lave-linge et un sèche-linge à pompe à chaleur, 7,5 litres d’eau par kg au séchage, la plupart des lavantes-séchantes sèchent moins bien qu’un sèche-linge" },
      { name: "T3 : les lavantes-séchantes valent-elles deux appareils séparés ? (février 2022)", text: "sèchent moins bien, le linge reste souvent humide, avec deux appareils la lessive suivante se lave pendant que la première sèche" },
      { name: "Trusted Reviews : lavante-séchante contre appareils séparés", text: "deux appareils prennent environ deux fois plus de place et fonctionnent en même temps, les lavantes-séchantes sèchent souvent de façon inégale" },
      { name: "Utopia : lavante-séchante, les avantages et les inconvénients (mars 2023)", text: "ne sèche le plus souvent que 4 à 6 kg, plus d’électricité et d’eau, plutôt pour les petits foyers" },
      { name: "Waschmaschinen-Kompass : poser le sèche-linge sur le lave-linge (octobre 2026)", text: "cadre de liaison nécessaire, sèche-linge toujours en haut, sans cadre il peut glisser" },
      { name: "Indications des fabricants et étiquettes énergie", text: "superposition selon Siemens et Samsung (sèche-linge en haut, kit adapté, même marque), capacité, durée des programmes et électricité pour le lavage et le séchage selon les étiquettes énergie de Haier, Hisense, Bosch et AEG" }
    ]
  },
  {
    id: "smarte-thermostate-mietwohnung",
    produkt: "thermostate",
    geprueft: "2026-11-04",
    titel: "Les têtes thermostatiques connectées valent-elles le coup en location ?",
    frage: "Les têtes thermostatiques connectées valent-elles le coup en location ?",
    seitenTitel: "Têtes thermostatiques en location : ça vaut le coup ?",
    beschreibung: "Ce que vous économisez en location avec des têtes thermostatiques connectées, ce qui arrive sur votre décompte et si vous pouvez les installer.",
    kurzantwort: "Le plus souvent oui : vous les vissez sans artisan et les démontez en partant, et vous rentrez chaque jour dans un logement chaud. Avec un programme de chauffage, vous économisez en plus environ 10 pour cent d’énergie de chauffage. Avec un chauffage central, il en arrive le plus souvent la moitié à un peu plus des deux tiers sur votre décompte, car seule une partie des coûts est répartie selon la consommation.",
    abschnitte: [
      {
        titel: "Ce que vous économisez avec un programme de chauffage",
        absaetze: [
          "Les têtes thermostatiques connectées chauffent selon votre programme : chaud quand vous êtes là, baissé quand vous dormez ou travaillez. Selon l’Agence fédérale allemande de l’environnement et co2online, vous économisez ainsi environ 10 pour cent d’énergie de chauffage. L’ADAC compte en pratique 5 à 8 pour cent.",
          "Combien cela fait chez vous dépend de la fréquence de vos absences et de votre façon de chauffer jusqu’ici. En règle générale, chaque degré en moins économise environ 6 pour cent d’énergie de chauffage. Si votre chauffage tourne jusqu’ici le plus souvent en continu, vous économisez davantage. Si vous baissez déjà vous-même chaque radiateur de façon fiable, vous économisez moins."
        ]
      },
      {
        titel: "Ce qui en arrive sur votre décompte",
        absaetze: [
          "Si vous avez votre propre chaudière à gaz dans le logement, vous payez le plus souvent votre gaz directement au fournisseur. Toute l’économie vous revient alors.",
          "Avec un chauffage central, en revanche, seule une partie des coûts est répartie selon votre consommation, le reste selon la surface. En Allemagne, c’est 50 à 70 pour cent, en Autriche au moins 55 pour cent des coûts d’énergie. En Suisse, c’est le plus souvent 50 à 70 pour cent si votre immeuble facture selon la consommation. Vous voyez la répartition chez vous sur votre décompte de chauffage, aux frais de base et aux frais de consommation.",
          "Un exemple : si vous payez 1 000 € par an pour le chauffage, 10 pour cent font 100 €. Si 50 à 70 pour cent sont répartis selon la consommation chez vous, il vous en revient environ 50 à 70 €. Dans mon calculateur, choisissez pour cela « Chauffage central avec décompte », je compte alors avec 60 pour cent.",
          "Dans certains immeubles, rien n’est réparti selon la consommation, seulement selon la surface, en Suisse par exemple souvent dans les immeubles anciens. C’est alors surtout l’immeuble entier qui économise, et il ne vous en revient que peu."
        ]
      },
      {
        titel: "Comment voir si cela fonctionne",
        absaetze: [
          "En Allemagne, les compteurs de chauffage doivent pouvoir être relevés à distance à partir de 2027. Dès que c’est le cas, vous recevez chaque mois une information sur votre consommation. Vous voyez ainsi mois après mois si votre programme de chauffage fonctionne."
        ]
      },
      {
        titel: "Avez-vous le droit de les installer en tant que locataire ?",
        absaetze: [
          "En Allemagne, en règle générale oui, même sans l’accord de votre propriétaire. Vous remplacez seulement la molette sur la vanne par la tête thermostatique connectée. Pas besoin de vidanger l’eau, ni de faire venir un artisan.",
          "Gardez bien les anciennes molettes et revissez-les en partant. Vous emportez alors vos têtes thermostatiques connectées dans votre prochain logement. En Autriche et en Suisse, le mieux est de demander rapidement à votre propriétaire."
        ]
      },
      {
        titel: "Vont-elles sur vos radiateurs ?",
        absaetze: [
          "Sur presque tous les radiateurs normaux. La plupart des vannes ont un filetage à la norme M30 x 1,5. Pour les autres, par exemple de Danfoss, des adaptateurs sont souvent fournis. Pour un chauffage au sol, il vous faut en revanche un thermostat d’ambiance au mur."
        ]
      },
      {
        titel: "Plus pratique qu’à la main",
        absaetze: [
          "À cela s’ajoute le confort : peu avant votre retour, le logement est déjà chaud. Pendant que vous travaillez, les têtes thermostatiques baissent de façon autonome, et vous ne pouvez plus oublier de le faire.",
          "Si vous baissez jusqu’ici chaque radiateur le matin et le remontez le soir, mon calculateur indique que vous gagnez environ un quart d’heure par semaine avec quatre radiateurs.",
          "Pour commencer, un programme pour les jours de semaine et un pour le week-end suffisent. Réglez par exemple 21 degrés le matin et le soir, 16 à 17 degrés quand vous êtes absent, et la nuit 16 à 18 degrés dans la chambre. Il ne devrait pas faire moins de 16 degrés, sinon le risque de moisissures augmente."
        ]
      }
    ],
    verweis: {
      text: "Les têtes thermostatiques que je recommande, avec et sans passerelle, et ce qu’elles vous font économiser avec vos propres chiffres se trouvent sur ma page des têtes thermostatiques connectées.",
      knopf: "Vers les têtes thermostatiques et leur calculateur"
    },
    wannNicht: [
      "Vous avez un chauffage au sol : il vous faut alors un thermostat d’ambiance au mur.",
      "Dans votre immeuble, les frais de chauffage sont répartis seulement selon la surface : il ne vous revient alors que peu de l’économie.",
      "Vous baissez déjà chaque radiateur de façon fiable quand vous partez : vous économisez alors surtout de l’effort et moins d’argent.",
      "Vous êtes presque toujours à la maison la journée : le programme baisse alors surtout la nuit, et vous économisez moins."
    ],
    fragen: [
      { f: "Que faire quand je déménage ?", a: "Vous dévissez les têtes thermostatiques connectées et remettez les anciennes molettes. Cela prend quelques minutes par radiateur. Vous emportez les têtes connectées, elles vont aussi sur la plupart des radiateurs de votre nouveau logement." },
      { f: "Perturbent-elles le répartiteur de frais de chauffage ?", a: "Non. Le répartiteur est fixé sur le radiateur et mesure la chaleur qu’il dégage. La tête thermostatique, elle, va sur la vanne. Si vous chauffez moins, le répartiteur affiche simplement moins. Vous ne devriez ni l’enlever ni le couvrir." },
      { f: "Ai-je besoin d’une passerelle ?", a: "Pas forcément. Certaines têtes se connectent directement au Wi-Fi, et avec une FRITZ!Box votre routeur sert déjà de passerelle. Dans les tests, ce sont cependant les modèles avec passerelle qui s’en sortent le mieux. La passerelle coûte une fois en plus, et en cas de déménagement vous l’emportez simplement." },
      { f: "Quand aurai-je rentabilisé le prix d’achat ?", a: "Cela dépend du nombre de radiateurs que vous équipez et de ce qui vous en revient. Selon Stiftung Warentest, l’achat n’est rentable qu’à long terme ; dans son exemple avec cinq têtes, l’ADAC arrive à un peu moins de quatre ans. Avec un chauffage central, cela prend plus de temps, car seule une partie de l’économie vous revient. Le confort, en revanche, vous l’avez dès le premier jour." }
    ],
    quellen: [
      { name: "Agence fédérale allemande de l’environnement (Umweltbundesamt) : chauffage, température ambiante (octobre 2023)", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/heizen-bauen/heizen-raumtemperatur", text: "les thermostats programmables économisent environ 10 % d’énergie, baisser lors de plusieurs heures d’absence et la nuit, 17 °C dans la chambre" },
      { name: "Verbraucherzentrale Hamburg : bien chauffé tout l’hiver (décembre 2025)", url: "https://www.vzhh.de/themen/bauen-wohnen-energie/heizung/gut-geheizt-durch-den-winter", text: "chaque degré en moins économise environ 6 pour cent d’énergie de chauffage, pas moins de 16 °C sinon des moisissures peuvent se former, les têtes connectées s’installent aussi en location" },
      { name: "co2online : communiqué sur les thermostats programmables (octobre 2023)", text: "environ dix pour cent de frais de chauffage en moins, les locataires n’ont pas besoin de l’autorisation du propriétaire, remettre les anciennes têtes avant de partir" },
      { name: "ADAC : têtes thermostatiques connectées (octobre 2026)", text: "en pratique 5 à 8 pour cent de frais de chauffage en moins, les locataires peuvent en général les installer eux-mêmes, garder les anciennes têtes et les remettre en partant, le chauffage au sol demande un thermostat d’ambiance, dans l’exemple avec cinq têtes rentabilisé après un peu moins de quatre ans" },
      { name: "ista : têtes connectées entre efficacité énergétique et protection des données (octobre 2026)", text: "remplacer seulement la tête ne demande en général pas l’accord du propriétaire, remettre l’état d’origine en partant" },
      { name: "Ordonnance allemande sur les frais de chauffage (Heizkostenverordnung), § 7 et § 6a", url: "https://www.gesetze-im-internet.de/heizkostenv/__7.html", text: "au moins 50 et au plus 70 pour cent des frais d’un chauffage central selon la consommation, le reste selon la surface, avec des compteurs relevables à distance une information mensuelle sur la consommation depuis 2022" },
      { name: "mein-nebenkostenrechner.de : § 7 de l’ordonnance sur les frais de chauffage (septembre 2026)", text: "le propriétaire choisit entre 50 et 70 pour cent selon la consommation, par exemple 50/50 ou 30/70, dans certains immeubles anciens au fioul ou au gaz 70 pour cent sont obligatoires" },
      { name: "mietrecht.org : répartition des frais de base et de consommation", text: "50 à 70 pour cent selon la consommation, les frais de base selon la surface habitable ou le volume bâti" },
      { name: "Arbeiterkammer Wien : décompte de chauffage selon la HeizKG", url: "https://wien.arbeiterkammer.at/beratung/Wohnen/Heizkostenabrechnung/Heizkostenabrechnung_nach_dem_HeizKG.html", text: "s’applique aux immeubles d’au moins quatre logements avec chauffage commun, pas aux chaudières individuelles au gaz, 55 à 85 pour cent des coûts d’énergie selon la consommation, les autres frais selon la surface" },
      { name: "Loi autrichienne sur le décompte des frais de chauffage (Heizkostenabrechnungsgesetz), § 10 (jusline.at)", text: "au moins 55 et au plus 85 pour cent des coûts d’énergie selon la consommation, le reste selon la surface utile" },
      { name: "ista Autriche et Techem Autriche sur la loi sur le décompte des frais de chauffage", text: "au moins 55 pour cent des coûts d’énergie selon la consommation, les frais de base donc au plus 45 pour cent, ne s’applique pas aux chauffages d’étage" },
      { name: "WEKA Suisse : clés de répartition des charges (juin 2025)", text: "frais de base le plus souvent 30 à 50 pour cent des frais de chauffage, le décompte selon la consommation est surtout obligatoire pour les constructions neuves et les rénovations complètes, sinon le plus souvent réparti selon la surface" },
      { name: "ista Suisse : brochure sur le décompte de chauffage", text: "frais de base 30 à 50 pour cent selon la surface habitable, le reste selon la consommation" },
      { name: "Office fédéral de l’énergie : modèle de décompte individuel des frais de chauffage (2004)", text: "frais de base 30 à 50 pour cent, frais selon la consommation 50 à 70 pour cent" },
      { name: "Conférence des directeurs cantonaux de l’énergie : aide à l’application EN-113 (décembre 2018)", text: "décompte selon la consommation obligatoire pour les constructions neuves et les rénovations complètes à partir de cinq logements, certains cantons ont supprimé l’obligation d’équiper les immeubles existants" },
      { name: "Blick : décompte de chauffage dans les immeubles anciens (octobre 2022) et un décompte qui fâche (décembre 2022)", text: "dans les immeubles anciens sans compteur de chaleur, souvent réparti selon les mètres carrés ou cubes, quelle que soit la consommation de chacun" },
      { name: "Berliner Mieterverein : fourniture de gaz (Cour fédérale de justice, juin 2018) et appareils de mesure pour le décompte de chauffage (septembre 2025)", text: "avec un raccordement au gaz propre, le contrat de fourniture est conclu entre le fournisseur et le locataire, les répartiteurs sont directement sur le radiateur, l’affichage dépend aussi des vannes thermostatiques, la manipulation est punissable" },
      { name: "Berliner MieterGemeinschaft : répartiteurs de frais de chauffage", text: "fixé au milieu du radiateur, les appareils électroniques mesurent la différence entre le radiateur et l’air ambiant, les habillages et les rideaux faussent l’affichage" },
      { name: "Gewobag : informations sur les répartiteurs de frais de chauffage (août 2025)", text: "mesure directement sur le radiateur la température ambiante et celle du radiateur, est plombé" },
      { name: "ista : information mensuelle sur la consommation (octobre 2026), Haufe et Haus & Grund Chemnitz", text: "équiper ou remplacer d’ici le 31.12.2026 les compteurs non relevables à distance, dès l’installation de compteurs relevables à distance une information mensuelle sur la consommation" },
      { name: "Stiftung Warentest : test des têtes thermostatiques connectées (numéro 9/2023)", text: "l’achat n’est rentable qu’à long terme, les modèles avec passerelle en tête, le modèle FRITZ! presque aussi bon que le vainqueur" },
      { name: "smarthomeassistent.de : classement des têtes thermostatiques (octobre 2026)", text: "places 1 et 2 avec passerelle, aucun modèle Wi-Fi direct parmi les dix premiers" },
      { name: "homeandsmart : changer une tête thermostatique", text: "la plupart des vannes avec filetage M30 x 1,5, adaptateurs pour les autres, pas de vidange, pas d’artisan, fait en quelques minutes, le chauffage au sol demande un thermostat d’ambiance" },
      { name: "Indications des fabricants", text: "filetage M30 x 1,5 et adaptateurs fournis, par exemple pour les vannes Danfoss, selon eQ-3 (Homematic IP), AVM (FRITZ!) et Bosch, montage sans vidange et sans outil spécial selon eQ-3" }
    ]
  },
  {
    id: "saugroboter-oder-akkusauger",
    produkt: "saugroboter",
    geprueft: "2026-11-13",
    weitereProdukte: ["akkusauger"],
    titel: "Robot aspirateur ou aspirateur balai sans fil : lequel me convient ?",
    frage: "Robot aspirateur ou aspirateur balai sans fil : lequel me convient ?",
    seitenTitel: "Robot aspirateur ou balai sans fil : lequel choisir ?",
    beschreibung: "Ce que font le mieux un robot aspirateur laveur et un aspirateur balai, le temps gagné et pourquoi les deux ensemble conviennent souvent le mieux.",
    kurzantwort: "Un robot aspirateur laveur vous convient si vos sols doivent devenir propres sans vous, un aspirateur balai sans fil si vous voulez aspirer vite vous-même, y compris l’escalier, le canapé et la voiture. Selon mon calculateur, le robot vous fait gagner environ une heure par semaine sur 70 m² si vous passez sinon l’aspirateur deux fois et la serpillière une fois. Avec l’aspirateur balai, vous continuez à aspirer vous-même, simplement plus vite. Pour beaucoup de logements, les deux ensemble sont le plus pratique : le robot pour les sols et un aspirateur balai bon marché pour les endroits qu’il n’atteint pas.",
    abschnitte: [
      {
        titel: "Ce que chacun fait le mieux",
        absaetze: [
          "Le robot aspirateur laveur vous décharge de l’aspirateur et de la serpillière. Dans l’appli, vous réglez un programme, et il nettoie pendant que vous êtes au travail. Ensuite, il retourne à sa station. Sur beaucoup de modèles, elle le vide et lave aussi le rouleau ou les patins de lavage.",
          "L’aspirateur balai, vous le guidez vous-même, mais sans câble et sans changer de prise. Vous le décrochez du mur, aspirez les miettes sous la table et le raccrochez. D’un geste, il devient un aspirateur à main pour le canapé, l’escalier et la voiture."
        ]
      },
      {
        titel: "Le temps que vous gagnez",
        absaetze: [
          "Mon calculateur compte environ 19 minutes pour aspirer 70 m², préparation comprise, et environ 26 minutes pour passer la serpillière. Il retire 5 minutes par semaine pour l’entretien du robot. Si vous passez l’aspirateur deux fois par semaine et la serpillière une fois, le robot vous fait gagner environ une heure par semaine, soit une bonne cinquantaine d’heures par an.",
          "Avec l’aspirateur balai, vous continuez à aspirer vous-même. Il vous évite de le sortir, de le brancher et de changer de prise : selon mon calculateur, un bon 5 minutes à chaque fois sur 70 m², et 2 minutes quand vous aspirez vite des miettes. Si vous aspirez deux fois par semaine et trois fois vite entre-temps, cela fait un bon quart d’heure."
        ]
      },
      {
        titel: "Là où le robot atteint ses limites",
        absaetze: [
          "Les robots courants ne montent pas les escaliers, et la station reste au même endroit. Si vous habitez sur deux étages, vous le montez à la main, ou vous aspirez l’escalier et l’étage avec l’aspirateur balai.",
          "Les coins, les bords et la bande juste le long des plinthes, il les nettoie le plus souvent moins à fond. Sur un tapis à poils longs, un aspirateur que vous guidez aspire plus à fond. Selon Stiftung Warentest, même les meilleurs robots n’égalent pas la puissance et la filtration d’un bon aspirateur.",
          "Il lui faut aussi un sol dégagé : vous rangez vite les câbles, les chaussettes et les jouets avant le départ. En échange, il passe sous le lit et le canapé s’il y a assez de place.",
          "Il s’en sort quand même dans les grands logements : dans le test de Stiftung Warentest, les meilleurs robots ont couvert jusqu’à 193 m² avec une charge. Si la batterie ne suffit pas, beaucoup retournent se recharger à la station puis reprennent le nettoyage."
        ]
      },
      {
        titel: "À quoi faire attention pour un aspirateur balai sans fil",
        absaetze: [
          "Dans le test commun de Stiftung Warentest et Konsument, les meilleurs aspirateurs balais aspiraient aussi bien que des aspirateurs traîneaux avec fil. Regardez surtout la batterie : l’autonomie indiquée par les fabricants vaut le plus souvent pour le niveau le plus faible. Au niveau le plus fort, beaucoup ne tiennent que 10 à 15 minutes.",
          "Pour un grand logement, un modèle à batterie amovible vaut donc le coup. Selon Konsument, il faut cependant le plus souvent acheter la deuxième batterie à part. Le bac à poussière est petit, et le vider fait un peu de poussière. Après quelques années, la batterie faiblit, vérifiez donc qu’il existe des batteries de rechange."
        ]
      },
      {
        titel: "Les deux ensemble : comment ils se partagent le travail",
        absaetze: [
          "Pour beaucoup de logements, c’est la solution la plus pratique. Le robot passe selon le programme et garde les sols propres, tous les jours si vous voulez. L’aspirateur balai, vous ne le prenez plus que pour les miettes après le repas, pour l’escalier, le canapé et la voiture, et de temps en temps pour les coins et les plinthes."
        ]
      },
      {
        titel: "Mon expérience",
        absaetze: [
          "Si vous avez un aspirateur robot, vous n’aurez de toute façon que très rarement besoin d’un aspirateur balai. Un modèle bon marché suffit donc. J’ai par exemple le Bulelink Zenith G10 et j’en suis très satisfait."
        ],
        art: "erfahrung"
      },
      {
        titel: "Ce que cela coûte",
        absaetze: [
          "À l’achat, un robot aspirateur laveur avec station coûte le plus souvent nettement plus qu’un bon aspirateur balai. Un robot qui aspire seulement est moins cher, mais vous devez alors continuer à passer la serpillière vous-même.",
          "À l’usage, selon mon calculateur, brosses, filtres, sacs et patins coûtent pour le robot environ 3,50 € par mois de plus que pour un aspirateur normal. Avec l’aspirateur balai, vous n’achetez pas de sacs, mais après quelques années il vous faudra peut-être une nouvelle batterie."
        ]
      }
    ],
    verweis: {
      text: "Quels robots aspirateurs laveurs je recommande et combien de temps vous gagnez avec vos propres chiffres, vous le voyez sur ma page sur le robot aspirateur laveur. Mes conseils pour le bon aspirateur balai sont sur ma page sur l’aspirateur balai sans fil.",
      knopf: "Vers le robot aspirateur laveur avec calculateur",
      weitere: [{ knopf: "Vers l’aspirateur balai sans fil", link: "akkusauger" }]
    },
    wannNichtTitel: "Quand un robot aspirateur laveur ne vous convient pas",
    wannNicht: [
      "Vous habitez sur plusieurs étages et ne voulez pas porter le robot d’un étage à l’autre : les robots courants ne montent pas les escaliers.",
      "Il traîne souvent beaucoup de choses sur votre sol, et vous ne voulez pas ranger vite avant le départ.",
      "Vous avez surtout des tapis à poils longs : un aspirateur que vous guidez y aspire plus à fond.",
      "Vous aspirez surtout le canapé, l’escalier ou la voiture : pour cela, il vous faut un aspirateur balai.",
      "Vous manquez de place pour la station : elle a besoin d’environ 40 cm contre le mur et de 0,8 à 1,5 m de libre devant."
    ],
    fragen: [
      { f: "Un robot aspirateur laveur remplace-t-il complètement l’aspirateur ?", a: "Pour les sols au quotidien, souvent oui, complètement, rarement. Il ne fait ni l’escalier, ni le canapé, ni la voiture, et il nettoie moins à fond dans les coins et sur les tapis à poils longs. Pour cela, un aspirateur balai dont vous n’avez besoin que de temps en temps suffit." },
      { f: "La batterie d’un aspirateur balai suffit-elle pour un grand logement ?", a: "Au niveau le plus fort, souvent pas : beaucoup ne tiennent alors que 10 à 15 minutes. Pour un grand logement, prenez un modèle à batterie amovible. Ou laissez le robot aspirer les sols et prenez l’aspirateur balai seulement pour de courtes utilisations." },
      { f: "Existe-t-il des ensembles robot et aspirateur balai ?", a: "Oui, certains fabricants proposent des ensembles où un robot et un aspirateur balai partagent une même station. Elle vide alors les deux, y compris le bac à poussière de l’aspirateur balai." },
      { f: "Qu’est-ce qui convient le mieux si j’ai des animaux ?", a: "Le plus pratique, c’est les deux : le robot aspire les poils au sol selon le programme, tous les jours si vous voulez, et pour le canapé vous prenez l’aspirateur balai. Ce qui compte pour un robot avec des animaux est dans mes conseils sur le robot aspirateur et les animaux." }
    ],
    quellen: [
      { name: "Mon calculateur sur la page du robot aspirateur laveur", text: "le temps pour 70 m² avec deux passages d’aspirateur et un de serpillière par semaine et le coût des pièces de rechange, les hypothèses sont sous « Comment je calcule »" },
      { name: "Mon calculateur sur la page de l’aspirateur balai sans fil", text: "le temps par rapport à un aspirateur avec fil sur 70 m², deux passages et trois fois des miettes par semaine, les hypothèses sont sous « Comment je calcule »" },
      { name: "Stiftung Warentest : test des robots aspirateurs (juin 2026)", text: "même les meilleurs robots ne suivent pas un bon aspirateur en puissance et en filtration, points forts sur sol dur, environ 33 à 193 m² avec une charge, taille des stations" },
      { name: "Stiftung Warentest : test des robots aspirateurs laveurs (décembre 2025)", text: "la plupart ne convainquent pas sur tapis" },
      { name: "Stiftung Warentest : test des aspirateurs balais sans fil (numéro 2/2026)", text: "les meilleurs aspirateurs balais suivent les aspirateurs traîneaux classiques, 10 à 17 minutes d’autonomie au niveau le plus fort" },
      { name: "Konsument (VKI) : test des aspirateurs balais sans fil, communiqué de presse (février 2026)", url: "https://vki.at/system/files/2026-02/2026-02-18_PA_Akkusauger_0.pdf", text: "14 appareils testés avec Stiftung Warentest, les bons aspirateurs balais suivent les appareils avec fil en aspiration, au niveau le plus fort sur tapis deux appareils se sont arrêtés après 6 et 9 minutes, batterie amovible le plus souvent non fournie" },
      { name: "Consumer NZ : Which type of vacuum is best for cleaning your home? (mars 2024)", text: "robots bons sur sol dur, faibles sur tapis, pas d’escaliers, aspirent aussi sous les meubles, aspirateurs balais à autonomie limitée" },
      { name: "TechRadar : Robot vacuum vs cordless vacuum (novembre 2023)", text: "robot plus pratique, aspirateur balai plus minutieux et polyvalent sur les bords, l’escalier, les tissus et dans la voiture, ranger avant le robot, avoir les deux est idéal" },
      { name: "T3 : Cordless or robot, which is the best vacuum cleaner for you? (août 2023)", text: "aspirateur balai pour les petites utilisations, l’escalier et la voiture, aussi en aspirateur à main, support mural, le robot fait gagner du temps mais se coince parfois" },
      { name: "testundtipps.de : robot aspirateur ou aspirateur balai (juillet 2026)", text: "escaliers seulement avec un appareil guidé, le robot aspire moins bien les bords, les coins et les plinthes, moins à fond sur poils longs, dégager le sol avant, les deux se partagent le travail" },
      { name: "home&smart : avantages et inconvénients des robots aspirateurs laveurs (novembre 2026) et robots qui montent les escaliers (février 2026)", text: "pas pour les tissus et les escaliers, coins étroits et meubles bas, ranger d’abord les objets, pour aspirer à fond toujours un aspirateur classique, robots pour escaliers encore au stade de prototypes" },
      { name: "Autres tests d’aspirateurs balais", text: "home&smart, ETM Testmagazin, t-online et produkte-im-test.de sur l’autonomie au niveau le plus faible et le plus fort, SRF Kassensturz et Apotheken Umschau sur la poussière en vidant le bac" },
      { name: "Recharger et reprendre", text: "les robots retournent se recharger à la station puis reprennent le nettoyage, selon Anker (juillet 2026), l’aide d’Ecovacs (« reprendre le nettoyage ») et smarthomeassistent.de sur Neato (juin 2022)" },
      { name: "Ensembles avec station commune", text: "SwitchBot K10+ Pro Combo (testsiegertv.com, décembre 2025), Yeedi C12 Combo (notebookcheck.com, octobre 2024) et Ecovacs Deebot X2 Combo (netzwelt.de, avril 2024)" },
      { name: "Indications des fabricants et modes d’emploi", text: "place devant et à côté de la station selon Roborock, Kärcher et Ecovacs, dimensions des stations selon Kärcher et Anker" }
    ]
  },
  {
    id: "black-friday-echte-angebote",
    produkt: "kaffeevollautomat",
    geprueft: "2026-11-13",
    weitereProdukte: ["saugroboter", "airfryer"],
    titel: "Black Friday sur l’électroménager : comment reconnaître une vraie bonne affaire ?",
    frage: "Black Friday sur l’électroménager : comment reconnaître une vraie bonne affaire ?",
    seitenTitel: "Black Friday : comment repérer les vraies promos ?",
    beschreibung: "Repérer les vraies promos du Black Friday : historique des prix plutôt que prix conseillé, anciens modèles, lots, livraison et retours en UE et en Suisse.",
    kurzantwort: "Une vraie bonne affaire se reconnaît à l’historique des prix : si le prix est nettement inférieur à ce que l’appareil a coûté ces derniers mois, c’en est une. Le prix barré seul en dit peu, surtout s’il s’agit du prix conseillé par le fabricant, que presque aucune boutique ne pratique. Vérifiez aussi la référence exacte du modèle, le délai de livraison et les conditions de retour. Beaucoup d’appareils sont tout aussi bon marché avant et après le Black Friday, vous pouvez donc comparer tranquillement.",
    abschnitte: [
      {
        titel: "L’historique des prix montre si c’est une bonne affaire",
        absaetze: [
          "En 2026, le Black Friday tombe le 27 novembre, mais beaucoup de promotions commencent des jours ou des semaines avant. Pour savoir si un prix est vraiment bon, regardez l’historique des prix des derniers mois. Beaucoup de comparateurs de prix l’affichent, souvent avec une alerte pour le prix que vous visez.",
          "L’organisation britannique de consommateurs Which? a suivi pendant un an 175 produits de maison, de technologie et de santé. 83 % d’entre eux étaient au moins une fois aussi bon marché ou moins chers en dehors des semaines du Black Friday. Aucun n’était au plus bas le jour même du Black Friday."
        ]
      },
      {
        titel: "Ce que signifie le prix barré",
        absaetze: [
          "En Allemagne, en Autriche et dans le reste de l’UE, une boutique qui baisse un prix doit indiquer le prix le plus bas des 30 derniers jours. Selon la Cour de justice de l’Union européenne, une réduction en pourcentage doit se rapporter exactement à ce prix.",
          "Cela aide, mais ne remplace pas un coup d’œil à l’historique des prix. Si l’appareil était moins cher avant ces 30 jours, vous économisez moins que ce que promet la réduction. Et tout le monde ne respecte pas la règle : lors d’un contrôle des autorités européennes de protection des consommateurs, 30 % de 314 boutiques en ligne indiquaient mal leurs réductions."
        ]
      },
      {
        titel: "Le prix conseillé en dit peu",
        absaetze: [
          "Souvent, une boutique compare avec le prix de vente conseillé par le fabricant. Presque aucun commerçant ne le pratique, une réduction calculée dessus est donc le plus souvent plus petite qu’elle n’en a l’air. En Allemagne, il n’est pas encore tranché si la règle des 30 jours vaut aussi pour le prix conseillé, les tribunaux ont jusqu’ici jugé différemment.",
          "Comparez donc avec le prix auquel l’appareil est vendu en ce moment dans plusieurs boutiques."
        ]
      },
      {
        titel: "En Suisse, des règles propres s’appliquent",
        absaetze: [
          "En Suisse, une boutique ne peut indiquer un prix antérieur que si elle a vraiment proposé l’appareil à ce prix auparavant. Elle ne peut afficher un prix du fabricant comme comparaison que si la plupart des autres boutiques proposent réellement l’appareil à ce prix."
        ]
      },
      {
        titel: "Modèle de l’année précédente ou nouveau modèle",
        absaetze: [
          "Les anciens modèles baissent dès que leurs successeurs arrivent, pas seulement au Black Friday. Le modèle de l’année précédente est souvent la meilleure affaire, s’il fait ce dont vous avez besoin.",
          "Comparez pour cela la référence exacte du modèle. Des noms similaires désignent parfois un autre appareil, par exemple avec une station qui en fait moins ou avec de moins bons résultats aux tests. S’il est écrit « vainqueur du test », vérifiez que c’est bien ce modèle précis qui a été testé."
        ]
      },
      {
        titel: "Lots et accessoires",
        absaetze: [
          "Pour les lots, faites le calcul : avez-vous vraiment besoin des accessoires, et combien coûte l’appareil seul ? Un lot n’est une bonne affaire que si vous auriez de toute façon acheté les pièces.",
          "Regardez aussi votre panier avant de commander. Lors du contrôle européen, une boutique sur trois environ essayait d’ajouter des articles en plus au panier."
        ]
      },
      {
        titel: "Délai de livraison, vendeur et pression du temps",
        absaetze: [
          "Avant l’achat, vérifiez qui vend et quand l’appareil arrive. Si la marchandise vient d’un vendeur d’Extrême-Orient, par exemple via la place de marché d’une boutique, elle met souvent plus longtemps, et le retour devient cher ou compliqué. Si vous avez besoin de l’appareil pour Noël, tenez compte du délai de livraison. Pour les boutiques inconnues, vérifiez les mentions légales et les avis, et méfiez-vous du paiement uniquement à l’avance.",
          "Les comptes à rebours et les mentions comme « presque épuisé » doivent vous mettre sous pression. Lors du contrôle européen, presque une boutique sur cinq utilisait ces moyens. Prenez votre temps : beaucoup d’appareils sont tout aussi bon marché pendant les semaines de l’Avent."
        ]
      },
      {
        titel: "Retours en Allemagne, en Autriche et en Suisse",
        absaetze: [
          "En Allemagne, en Autriche et dans le reste de l’UE, vous pouvez retourner sans motif les appareils achetés en ligne dans les 14 jours suivant la réception, y compris les articles soldés au Black Friday. Le renvoi peut vous coûter quelque chose si la boutique vous en a informé avant. En revanche, une marchandise sans défaut achetée en magasin n’est échangée que si la boutique le veut bien.",
          "Beaucoup de grandes boutiques en Allemagne prolongent volontairement le délai de retour pendant les fêtes, pratique pour les cadeaux. Vérifiez si cela vaut aussi pour les vendeurs de la place de marché.",
          "En Suisse, il n’existe pas de droit de retour légal, pas même en ligne. Beaucoup de boutiques en accordent un volontairement, lisez donc les conditions avant l’achat."
        ]
      },
      {
        titel: "D’abord décider, ensuite comparer",
        absaetze: [
          "Le Black Friday est le plus détendu si vous savez déjà quel appareil vous convient. Le jour même, vous ne vérifiez alors plus que le prix. Sur mes pages sur la machine à café automatique, le robot aspirateur laveur et la friteuse sans huile, vous trouvez mes recommandations par gamme de prix et un calculateur pour votre foyer."
        ]
      }
    ],
    verweis: {
      text: "Quelles machines à café automatiques je recommande et ce que vous économisez par rapport aux capsules, vous le voyez sur ma page sur la machine à café automatique. Mes conseils pour les robots aspirateurs laveurs et les friteuses sans huile sont sur les pages dédiées.",
      knopf: "Vers la machine à café avec calculateur",
      weitere: [
        { knopf: "Vers le robot aspirateur laveur", link: "saugroboter" },
        { knopf: "Vers la friteuse sans huile", link: "airfryer" }
      ]
    },
    wannNichtTitel: "Quand il vaut mieux attendre",
    wannNicht: [
      "Le prix n’est pas inférieur à ce que l’appareil a coûté ces derniers mois.",
      "La réduction se rapporte seulement au prix conseillé.",
      "La référence du modèle diffère de l’appareil que vous avez regardé.",
      "Le délai de livraison est long, et vous avez bientôt besoin de l’appareil.",
      "La boutique n’indique pas de conditions de retour claires.",
      "Sans la réduction, vous n’auriez pas du tout acheté l’appareil."
    ],
    fragen: [
      { f: "Le Black Friday est-il le jour le moins cher de l’année ?", a: "Le plus souvent, non. Dans l’analyse de Which?, aucun produit n’était au plus bas le jour même du Black Friday. C’est une bonne affaire si le prix est nettement inférieur à celui des derniers mois." },
      { f: "Une boutique peut-elle faire de la publicité avec le prix conseillé ?", a: "En Allemagne oui, s’il est clairement indiqué qu’il s’agit du prix conseillé. Si la règle des 30 jours s’applique alors aussi, les tribunaux en jugent jusqu’ici différemment. En Suisse, une boutique ne peut afficher le prix conseillé comme comparaison que si la plupart des autres boutiques proposent vraiment l’appareil à ce prix." },
      { f: "Puis-je retourner une bonne affaire du Black Friday ?", a: "Dans l’UE oui, en ligne dans les 14 jours suivant la réception, y compris pour les articles soldés. En Suisse, seulement si la boutique le propose volontairement. Lisez-y les conditions avant l’achat." },
      { f: "À quoi sert une alerte de prix ?", a: "Vous indiquez le prix que vous visez sur un comparateur de prix et recevez un message dès que l’appareil est à ce prix. Ainsi, vous achetez quand le prix vous convient, quel que soit le jour." }
    ],
    quellen: [
      { name: "Ordonnance allemande sur l’indication des prix (PAngV), § 11", url: "https://www.gesetze-im-internet.de/pangv_2022/__11.html", text: "indiquer le prix total le plus bas des 30 derniers jours en cas de réduction de prix" },
      { name: "Ministère fédéral autrichien de l’Économie, de l’Énergie et du Tourisme : affichage des prix", url: "https://www.bmwet.gv.at/Themen/Europa/Wettbewerbspolitik/Preisauszeichnung.html", text: "§ 9a de la loi autrichienne sur l’affichage des prix selon l’article 6 bis de la directive européenne sur l’indication des prix, prix le plus bas des 30 derniers jours, arrêt de la Cour de justice de l’Union européenne C-330/23" },
      { name: "Cour de justice de l’Union européenne, arrêt C-330/23 (26.09.2024), selon beck-aktuell et le ministère autrichien de l’Économie", text: "une réduction en pourcentage doit partir du prix le plus bas des 30 derniers jours, de même WKO (septembre 2023) et Arbeiterkammer Wien" },
      { name: "SECO : questions et réponses sur l’indication des prix (Suisse, en allemand)", url: "https://www.seco.admin.ch/de/faq-pbv", text: "comparaison avec son propre prix antérieur seulement s’il a vraiment été pratiqué, prix du fabricant seulement comme comparaison avec la concurrence, ainsi que la fiche sur l’autocomparaison (limites dans le temps, règle des 30 jours depuis 2025), la FAQ sur la comparaison avec la concurrence, le guide du canton d’Argovie (2025) et Handelsverband.swiss (novembre 2024)" },
      { name: "Commission européenne : contrôle de l’UE des réductions du Black Friday et du Cyber Monday (26.03.2026)", url: "https://commission.europa.eu/news-and-media/news/eu-check-reveals-misleading-sales-practices-online-2026-03-26_fr", text: "314 boutiques en ligne de 25 pays contrôlées, 30 % avec des réductions erronées, 36 % avec des articles en plus dans le panier, 18 % avec des comptes à rebours ou une fausse rareté" },
      { name: "Which? : analyse du Black Friday (novembre 2025)", text: "175 produits de maison, de technologie et de santé suivis de mai 2024 à mai 2025, 83 % au moins une fois aussi bon marché ou moins chers en dehors des semaines de promotion, aucun au plus bas le jour du Black Friday" },
      { name: "Centres allemands de consommateurs : verbraucherzentrale.de (octobre 2026), Basse-Saxe (mai 2026) et Hambourg (novembre 2025)", text: "prix conseillé rarement pratiqué, règle des 30 jours depuis mai 2022, tribunaux divisés sur le prix conseillé, historique des prix sur toute une année, mentions légales et paiement à l’avance, droit de rétractation de 14 jours, frais de retour" },
      { name: "Arbeiterkammer Wien : Black Friday (2026)", text: "Black Friday le 27 novembre 2026, prix le plus bas des 30 derniers jours, alerte de prix, 14 jours de rétractation, en magasin seulement à titre volontaire, retours coûteux vers l’Asie" },
      { name: "Centre européen des consommateurs Allemagne : Black Friday (2026)", text: "dates, vérifier l’évolution des prix, prix conseillé, délais de livraison, paiement à l’avance, dark patterns comme « presque épuisé », 14 jours de rétractation dans toute l’Europe, frais de retour" },
      { name: "Stiftung Warentest : conseils pour la bataille des rabais du Black Friday (novembre 2025)", text: "prix conseillé que presque aucun commerçant ne suit, alerte de prix, appareils d’apparence similaire aux résultats moins bons, longs délais de livraison chez des boutiques inconnues, semaines de l’Avent souvent tout aussi avantageuses" },
      { name: "Décisions sur le prix conseillé barré", text: "Händlerbund (août 2026), beck-aktuell sur l’arrêt de la cour d’appel de Cologne (mai 2026, pourvoi devant la Cour fédérale de justice admis) et IT-Recht Kanzlei sur des jugements des tribunaux régionaux de Düsseldorf et de Munich I (août 2025) : comparaison avec le prix conseillé autorisée si clairement indiquée, tribunaux divisés sur la règle des 30 jours" },
      { name: "Retours en Suisse", url: "https://www.ch.ch/fr/securite-et-droit/retourner-ou-echanger-des-produits/", text: "pas de droit légal de retour ou d’échange, les boutiques fixent leurs propres règles, ainsi que moneyland.ch (novembre 2026) et SRF (novembre 2020)" },
      { name: "Retours prolongés à Noël", text: "t3n (décembre 2025), e-recht24 (décembre 2025) et GIGA (novembre 2025, aussi sur l’échange en magasin)" },
      { name: "Modèles de l’année précédente, noms de modèles et lots", text: "Anker (novembre 2025) et Stiftung Warentest sur les prix des smartphones (juillet 2026) sur la baisse des prix après le lancement, TechRadar (novembre 2024), netzwelt.de (mars 2023) sur des noms similaires avec une autre station, Which? (novembre 2023) et CHOICE (novembre 2026) sur les lots" },
      { name: "Autres guides sur le Black Friday", text: "Utopia (novembre 2025) avec l’analyse de WISO, Verbraucherzentrale Südtirol (novembre 2023) sur les marchandises d’Extrême-Orient, ZDFheute (novembre 2025) sur l’alerte de prix, heise online sur le contrôle européen et GIGA (novembre 2026) sur les dates et les promotions précédentes" }
    ]
  }
];
