/*
  ==========================================================
  FRANZÖSISCHE FASSUNG VON produkte.js (für myle.life/fr/)
  ==========================================================
  Gleicher Aufbau wie produkte.js: dieselben Produkte, Modelle, Preise und Links.
  Nur die Texte sind auf Französisch. Wenn sich in produkte.js etwas ändert (neues Modell,
  neuer Text), muss es hier genauso geändert werden. Was die Felder bedeuten, steht in produkte.js.
*/

// Amazon-Links: Steht in einstellungen.js schon deine Partner-ID für amazon.fr (partnerIdShop), führt jeder Link in den französischen Amazon-Shop: direkt zum Produkt, wenn unten in ASIN eine Produktnummer steht, sonst zur Suche.
// Bis dahin bleibt es bei derselben Suche wie auf den deutschen Seiten bei amazon.de, mit englischer Oberfläche (amazon.de hat keine französische Oberfläche).
// Der zweite Text bei amazon(...) ist die Suche auf Französisch für amazon.fr, wo die deutsche Suche nicht passt.
const AMAZON_LAND = /^[a-z0-9-]+-\d\d$/i.test(SEITE.partnerIdShop || "") && !/^DEINPARTNERTAG/i.test(SEITE.partnerIdShop) ? SEITE.amazonShop : "";
// Amazon-Produktnummern (ASIN) bei amazon.fr, nach dem deutschen Suchtext beim jeweiligen Link.
// Fehlt ein Produkt hier, wurde es bei amazon.fr nicht gefunden, dann führt der Link zur Suche.
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
  "sodastream crystal 3.0": "B0BLSCTLBB",
  "bosch serie 2 mums2ew00": "B08DHZL8R2",
  "bosch serie 6 mums6zs13d": "B0CP26TQZF",
  "silikon stretchdeckel 12 stück rund eckig": "B0875R9NYP",
  "vicmayun reinigungsbürste": "B0FF9HZS8P",
  "kedoyoy reinigungsbürste": "B0D3STRLBD",
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
  "haier i-pro serie 7 plus waschtrockner hwd100-bd14979u1": "B0BT4TNW2P",
  "aeg l9wef80690 waschtrockner": "B09CDPGXXV",
  "hisense wd5s1045bw waschtrockner": "B0BXFPSKNF",
  "philips dual basket na352": "B0D4Q8QFTH",
  "tefal dual easy fry grill ey905d": "B0CW52TT95",
  "ninja foodi max dual zone af400eu": "B09DGBJN2C",
  "ninja double stack xl sl400eu": "B0CZPJ1HFP",
  "cosori turbo tower pro smart": "B0DPPT99LJ",
  "cosori iconic dual": "B0GJSQSBRN",
  "salcar trv801w": "B0CDZPB8RZ",
  "eurotronic comet wifi": "B08H8PTDW1",
  "fritz smart thermo 302": "B0DFWXY3VY",
  "aqara w600 heizkörperthermostat": "B0G7YBCW8K",
  "bosch smart home heizkörperthermostat ii +m": "B0DHGSL6FC",
  "homematic ip evo heizkörperthermostat": "B08YDVCBY9",
  "rowenta x-force flex 13.60 allergy": "B0CYCHTGKC",
  "bosch unlimited 7 bss715carp": "B0BW15D2FS",
  "bosch unlimited 10 bks1041rhf": "B0DB8QB2GW",
  "panasonic sr-da152 reiskocher": "B0FJFNMLCR",
  "yum asia bamboo reiskocher induktion": "B07WHD5P27",
  "lékué elastische deckel": "B084DRTSDK",
  "cosori twinfry 10 l": "B0DTTTWYQT",
  "cosori dual basket 8,5 l": "B0DJFJJ56B",
  "bosch serie 6 wng24442 waschtrockner": "B0FBSQD796",
  "gastroback 42507 reiskocher": "B0009KA4CA",
  "kobo clara bw": "B0CZXYV8GT",
  "kobo libra colour": "B0CZXX465Z",
  "pocketbook verse pro": "B0CGVXDRGP",
  "pocketbook era color": "B0D1Y883G2",
  "kindle 2026": "B0G4SHPH5K",
  "kindle paperwhite 2026": "B0GV5YVVCD",
  "kindle colorsoft 2026": "B0GV642G9D",
  "cosori reiskocher crc-r501": "B0C5JL8Z7B",
  "siemens eq500 classic tp511e19": "B0F4RFCH4P",
  "bosch serie 4 mum58200": "B0DT7BBTCW",
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
    name: "Robot aspirateur laveur",
    kurzname: "un robot aspirateur laveur",
    kategorie: "Maison",
    symbol: "🤖",
    bild: "",
    kurz: "Un robot qui aspire votre logement tout seul et, si vous le souhaitez, lave aussi le sol. Ensuite, il retourne à sa station. Celle-ci le vide et, sur les robots laveurs, lave aussi le rouleau ou les serpillières.",
    warum: "Le meilleur, peu de gens le savent : vous réglez un programme dans l’appli, et le robot nettoie pendant que vous êtes au travail. Chaque jour, vous rentrez dans un logement propre sans avoir presque plus rien à faire. Pour moi, après 14 ans, c’est toujours un énorme gain de qualité de vie.",
    statt: "Au lieu de l’aspirateur à fil et de la serpillière",
    nutzen: "Nettoie pendant que vous êtes au travail.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 5, nachher: 1 },
    fuer: [
      "Vous êtes absent de chez vous dans la journée",
      "Vous avez des animaux, des enfants ou beaucoup de sols durs",
      "Vous préférez passer votre temps à quelque chose de plus agréable qu’aspirer et laver le sol"
    ],
    nachteile: [
      "Il ne monte pas les escaliers. Si vous vivez sur deux étages, vous le portez en haut",
      "Il ne fonctionne pas entièrement sans vous\u202f: toutes les quelques semaines, vous changez le sac, et avec un robot laveur, vous remettez aussi de l’eau propre et videz l’eau sale"
    ],
    erfahrung: {
      titel: "Mon expérience après 14 ans",
      bild: "", bildText: "Photo\u202f: vous avec votre robot aspirateur laveur",
      text: "J’utilise des robots aspirateurs depuis 14 ans et, depuis, je n’ai presque plus jamais eu à passer l’aspirateur ou la serpillière moi-même. L’astuce la plus importante\u202f: régler un programme. Il nettoie alors pendant que je travaille, et chaque soir je rentre dans un appartement propre."
    },
    gruppen: [
      { name: "Avec rouleau laveur", text: "Un rouleau lave le sol et il est rincé en continu à l’eau propre pendant qu’il roule. Il récupère ainsi aussitôt l’eau sale et doit retourner moins souvent à la station pour être lavé. En revanche, sur beaucoup de modèles, il va moins près des bords et dans les coins." },
      { name: "Avec serpillières rotatives", text: "Deux serpillières rondes tournent sur le sol. Sur beaucoup de modèles, l’une d’elles sort sur le côté et nettoie ainsi plus à fond les bords et les coins. En revanche, elles ont tendance à étaler l’eau sale, c’est pourquoi le robot retourne plus souvent à la station pour les laver. Sur les tapis, il relève les serpillières ou les laisse à la station." },
      { name: "Aspirer seulement", text: "Le choix moins cher, si le lavage du sol compte moins pour vous, par exemple avec beaucoup de moquette. La station le vide. Il a bien une lingette simple, mais pour laver le sol à fond, vous le faites toujours vous-même.", ohne: "wischen" }
    ],
    modelle: [
      {
        gruppe: "Avec rouleau laveur",
        stufe: "Petit budget", spanne: "jusqu’à 400 €",
        name: "ECOVACS DEEBOT T80 OMNI", preis: 349, preisText: "env. 335 à 350 €",
        punkte: [
          "La station le vide et lave le rouleau à l’eau chaude",
          "Lave en profondeur avec un rouleau qui se relève sur les tapis",
          "S’oriente grâce au laser, et les cheveux s’enroulent à peine autour de la brosse",
          "Note 2,6 chez smarthomeassistent.de, rapport qualité-prix 2,0"
        ],
        fuer: "Pour vous si vous voulez aspirer et laver, regardez le prix et avez surtout des sols durs.",
        hinweis: "Il nettoie moins bien les coins, car sa brosse latérale ne sort pas. Le rouleau ne se relève que de 10 mm, et dans le test il est resté coincé sur les tapis à poils longs.",
        link: amazon("ecovacs deebot t80 omni"),
        alternativen: [
          { name: "ECOVACS DEEBOT T90 PRO OMNI", preis: 477, text: "Un peu plus cher et meilleur au total chez smarthomeassistent.de (note 2,3).", link: amazon("ecovacs deebot t90 pro omni") }
        ]
      },
      {
        gruppe: "Avec rouleau laveur",
        stufe: "Milieu de gamme", spanne: "de 400 à 700 €",
        name: "MOVA Z60 Ultra Roller Complete", preis: 649, empfohlen: true,
        punkte: [
          "Très bon en aspiration et en lavage dans le test (note 1,4, n° 2 chez smarthomeassistent.de)",
          "Lave avec un rouleau rincé en continu à l’eau propre pendant qu’il roule. La station le lave à l’eau jusqu’à 80 °C",
          "Franchit les seuils jusqu’à 5 cm",
          "Relève le rouleau sur les tapis et le protège pour que rien ne soit mouillé"
        ],
        fuer: "Pour la plupart des logements, même avec des animaux. À mon avis, c’est ici que vous en avez le plus pour votre argent.",
        hinweis: "Le rouleau ne va pas tout à fait jusqu’à la plinthe : dans les tests, une fine bande restait le long du mur au lavage.",
        link: amazon("mova z60 ultra roller complete"),
        alternativen: [
          { name: "ECOVACS DEEBOT T90S PRO OMNI", preis: 599, text: "Lave aussi bien chez smarthomeassistent.de (note 1,0).", link: amazon("ecovacs deebot t90s pro omni") }
        ]
      },
      {
        gruppe: "Avec rouleau laveur",
        stufe: "Haut de gamme", spanne: "à partir de 700 €",
        name: "ECOVACS DEEBOT X12S OmniCyclone", preis: 999,
        punkte: [
          "Note 1,7 chez smarthomeassistent.de, où il lave très bien (note 1,0)",
          "A reconnu tous les obstacles du test (53 sur 53) et s’oriente bien (note 1,6)",
          "La station le vide sans sacs à poussière, vous n’en achetez donc plus",
          "Dans le test, les cheveux ne se sont emmêlés ni dans la brosse principale ni dans la brosse latérale"
        ],
        fuer: "Pour vous si vous avez surtout des sols durs ou des tapis à poils ras et ne voulez plus acheter de sacs à poussière.",
        hinweis: "Chez smarthomeassistent.de, il est resté coincé plusieurs fois sur les tapis à poils longs, et il ne nettoyait que moyennement les coins et les joints. Au total, le MOVA Z60, moins cher, y obtient un meilleur résultat (note 1,4).",
        link: amazon("ecovacs deebot x12s omnicyclone")
      },
      {
        gruppe: "Avec serpillières rotatives",
        stufe: "Petit budget", spanne: "jusqu’à 600 €",
        name: "MOVA V50 Ultra Complete", preis: 529, empfohlen: true,
        punkte: [
          "Meilleur modèle à serpillières rotatives de sa gamme de prix chez smarthomeassistent.de (note 1,9)",
          "Lave très bien dans le test (note 1,0), aussi avec de l’eau chaude",
          "La station lave les serpillières à l’eau à 80 °C et les sèche à l’air chaud",
          "Les serpillières et la brosse latérale sortent et atteignent ainsi les bords et les coins"
        ],
        fuer: "Pour les logements avec beaucoup de coins et de bords, si vous voulez laver à fond. Seul le haut de gamme fait mieux dans le test.",
        hinweis: "Il ne détecte pas toujours les obstacles : dans les tests, il a manqué des objets plats et a parfois heurté des pieds de chaises et de tables. Chez smarthomeassistent.de, il n’obtient que la note 2,7 pour la navigation.",
        link: amazon("mova v50 ultra complete")
      },
      {
        gruppe: "Avec serpillières rotatives",
        stufe: "Haut de gamme", spanne: "à partir de 900 €",
        name: "Dreame X60 Pro Ultra Complete", preis: 1499, preisText: "env. 950 à 1 500 €",
        punkte: [
          "Meilleur modèle à serpillières rotatives chez smarthomeassistent.de (note 1,6 lors d’un nouveau test après une mise à jour du firmware)",
          "Aspire très fort (note 1,0) et lave très bien (note 1,2)",
          "Selon le fabricant, il sort une lingette jusqu’à 18 cm et franchit des doubles seuils jusqu’à 10 cm. Dans les tests, il a franchi des seuils d’environ 4 à 5 cm",
          "La station lave les serpillières à l’eau à 100 °C"
        ],
        fuer: "Pour tous ceux qui veulent le meilleur en aspiration et en lavage et ont beaucoup de coins et de bords.",
        hinweis: "De temps en temps, il commet de petites erreurs de navigation.",
        link: amazon("dreame x60 pro ultra complete")
      }
    ],
    fragen: [
      { f: "Sur quels tests vous basez-vous pour choisir les robots\u202f?", a: "Pour les robots aspirateurs laveurs, je me fie aux tests détaillés de smarthomeassistent.de. Chaque robot y passe les mêmes épreuves, des tapis et cheveux jusqu’aux obstacles et seuils de porte. Leurs notes fonctionnent comme les notes scolaires allemandes : 1,0 est la meilleure. Je recommande les modèles qui s’en sortent le mieux dans leur gamme de prix, et j’y ajoute ma propre expérience de 14 ans. Si un robot est testé à nouveau après une mise à jour, par exemple parce que sa navigation s’est améliorée, c’est le test le plus récent qui compte pour moi." },
      { f: "Ai-je besoin de la fonction lavage\u202f?", a: "Avec beaucoup de sols durs comme le carrelage, le stratifié ou le parquet, absolument\u202f: le sol reste propre et vous ne remplissez plus jamais de seau. Si vous avez surtout de la moquette, ou si vous aimez de toute façon laver le sol vous-même, un robot qui aspire seulement suffirait. Mais en ce moment, je n’en trouve aucun sur amazon.fr qui soit convaincant dans les tests. Les robots laveurs de cette page peuvent aussi seulement aspirer\u202f: il suffit de le régler dans l’appli." },
      { f: "Rouleau laveur ou serpillières rotatives\u202f: lequel est le meilleur\u202f?", a: "Les deux peuvent très bien laver : dans le test, le MOVA Z60 avec rouleau et le MOVA V50 avec serpillières obtiennent chacun la meilleure note pour le lavage, 1,0. Le rouleau récupère aussitôt l’eau sale et doit donc retourner moins souvent à la station pour être lavé. Les serpillières vont mieux le long des bords et dans les coins, mais ont tendance à étaler l’eau sale. Si vous avez beaucoup de coins, de recoins et de bords de meubles, prenez des serpillières. Si vous avez surtout des surfaces dégagées, un rouleau convient bien." },
      { f: "Se bloque-t-il sur les câbles ou les chaussettes\u202f?", a: "Les modèles avec caméra reconnaissent le plus souvent câbles, chaussettes et chaussures et les contournent, beaucoup aussi les animaux. Les modèles bon marché sans caméra roulent plus facilement sur un câble ou restent coincés : vous rangez alors rapidement avant. Un nœud de câbles sous le bureau, mieux vaut le ranger une fois pour toutes, quel que soit le modèle." },
      { f: "Puis-je le lancer quand je ne suis pas à la maison\u202f?", a: "Oui, et c’est justement l’astuce. Dans l’appli, vous créez un programme, par exemple du lundi au vendredi à 9 h. C’est comme ça que je fais depuis des années. Vous pouvez aussi le lancer à distance depuis votre téléphone." },
      { f: "Passe-t-il les seuils de porte et les bords de tapis\u202f?", a: "La plupart des modèles franchissent des seuils d’environ 2 cm, les bons modèles comme le MOVA Z60 jusqu’à environ 5 cm. Sur les tapis, un robot laveur relève ses serpillières ou son rouleau pour que rien ne soit mouillé." },
      { f: "Que me reste-t-il à faire moi-même\u202f?", a: "Changer le sac à poussière toutes les quelques semaines et nettoyer la brosse de temps en temps. Avec un robot laveur s’y ajoutent : remettre de l’eau propre et vider l’eau sale dès qu’il vous le signale. Mais ne laissez pas l’eau sale stagner pendant des jours, sinon elle commence à sentir mauvais." },
      { f: "Combien coûte-t-il à l’usage\u202f?", a: "Sacs, filtres, brosses et serpillières ou rouleau s’usent. Selon un calcul des coûts de netzwelt.de, un robot aspirateur laveur avec station revient à environ 45 à 185 € par an, sans lavage à environ 25 à 120 €. L’électricité ajoute environ 15 à 25 € par an, un peu plus pour les stations avec eau chaude et séchage." },
      { f: "Je ne connais pas MOVA. Est-ce une bonne marque\u202f?", a: "MOVA est une marque sœur de Dreame, les deux font partie du groupe Dreame. La technique et l’appli se ressemblent beaucoup. Les robots MOVA de cette page obtiennent de bons à très bons résultats dans les tests." },
      { f: "Fonctionne-t-il sur plusieurs étages\u202f?", a: "Il mémorise plusieurs cartes. Mais la station reste au même endroit. Vous le portez à l’autre étage, et il ne peut se vider qu’une fois revenu à la station." },
      { f: "Est-il bruyant\u202f?", a: "En général à peu près autant qu’une conversation, donc moins qu’un aspirateur normal. Et comme il tourne quand vous n’êtes pas là, vous ne le remarquez de toute façon pas. Seule la station est vraiment bruyante pendant quelques secondes quand elle le vide." }
    ],
    quellen: [
      { name: "smarthomeassistent.de\u202f: classement des robots aspirateurs (octobre 2026)", text: "tous les modèles testés, par note globale" },
      { name: "smarthomeassistent.de\u202f: robots aspirateurs jusqu’à 600 € (octobre 2026)", text: "les meilleurs modèles de cette gamme de prix" },
      { name: "smarthomeassistent.de\u202f: robots aspirateurs jusqu’à 800 € (octobre 2026)", text: "les meilleurs modèles de cette gamme de prix" },
      { name: "smarthomeassistent.de\u202f: test de l’ECOVACS DEEBOT T80 OMNI (juillet 2026)", text: "note 2,6" },
      { name: "smarthomeassistent.de\u202f: test de l’ECOVACS DEEBOT T90 PRO OMNI (août 2026)", text: "note 2,3" },
      { name: "smarthomeassistent.de\u202f: test du MOVA Z60 Ultra Roller Complete (octobre 2026)", text: "note 1,4" },
      { name: "smarthomeassistent.de\u202f: test de l’ECOVACS DEEBOT T90S PRO OMNI (octobre 2026)", text: "note 1,8" },
      { name: "smarthomeassistent.de\u202f: test de l’ECOVACS DEEBOT X12S OmniCyclone (octobre 2026)", text: "note 1,7" },
      { name: "smarthomeassistent.de\u202f: test du MOVA V50 Ultra Complete (août 2026)", text: "note 1,9" },
      { name: "smarthomeassistent.de\u202f: nouveau test du Dreame X60 Pro Ultra Complete (novembre 2026)", text: "note 1,6 après une mise à jour du firmware" },
      { name: "Autres tests pratiques", text: "notamment homeandsmart.de, nextpit.de, testsiegertv.com, vacuumwars.com, journaldugeek.com et cybershack.com.au" },
      { name: "netzwelt.de\u202f: calcul des coûts des robots aspirateurs (février 2026)", text: "coûts d’entretien par an" },
      { name: "Office fédéral allemand de la statistique (Destatis)\u202f: surface habitable selon la taille du ménage", url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/Tabellen/tabelle-wo4-wohnflaeche.html", text: "microrecensement 2022, pour les moyennes du calculateur (page en allemand)" },
      { name: "Données des fabricants", text: "signalées sur cette page par «\u202fselon le fabricant\u202f»" }
    ],
    rechner: "saugroboter",
    video: "saugroboter",
    profitipp: {
      titel: "Comment le configurer",
      text: "Prenez un quart d’heure une seule fois, ensuite tout se fait tout seul\u202f:",
      liste: [
        "Installez l’appli et laissez le robot parcourir une fois tout le logement. Il dessine une carte au passage.",
        "Créez un programme, par exemple aspirer et laver du lundi au vendredi à 9 h.",
        "Marquez les tapis dans l’appli pour qu’il y aspire seulement, sans laver."
      ]
    }
  },
  {
    id: "waschtrockner",
    name: "Lavante-séchante",
    kurzname: "une lavante-séchante",
    kategorie: "Maison",
    symbol: "🧺",
    bild: "",
    kurz: "Lave-linge et sèche-linge en un seul appareil. Elle lave et sèche en un seul cycle, et vous n’avez même pas à déplacer le linge mouillé.",
    warum: "Le matin, le linge dedans, l’heure de fin réglée, direction le travail. Quand vous rentrez, tout est lavé et sec. Plus d’étendoir dans le salon, rien à étendre ni à décrocher. Beaucoup d’appareils ont en plus un programme vapeur qui lisse les plis. Ainsi, les vêtements de tous les jours n’ont souvent plus du tout besoin d’être repassés.",
    statt: "Au lieu de l’étendoir et du repassage",
    nutzen: "Le matin dedans, le soir lavé et sec.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 4, nachher: 1 },
    fuer: [
      "Vous ne voulez plus d’étendoir chez vous",
      "Vous manquez de place pour un lave-linge et un sèche-linge côte à côte",
      "Vous avez mieux à faire que repasser"
    ],
    nachteile: [
      "Elle ne sèche qu’environ 6 kg à la fois, même si 10 kg tiennent dans le tambour. Si vous voulez laver et sécher d’une traite, vous ne la remplissez donc qu’un peu plus qu’à moitié",
      "Laver et sécher prend du temps\u202f: avec une charge pleine, souvent 8 heures et plus. Mais comme elle tourne pendant votre absence, vous ne le remarquez presque pas",
      "Le séchage consomme de l’électricité\u202f: avec trois charges par semaine, environ 10\u00a0€ par mois"
    ],
    erfahrung: {
      titel: "Mon expérience",
      bild: "", bildText: "Photo\u202f: votre lavante-séchante",
      text: "J’ai une lavante-séchante Haier et je ne veux plus jamais m’en passer. Le matin, le linge va dedans, et quand je rentre du travail, il est lavé et séché. Je n’ai plus besoin de repasser non plus\u202f: le programme vapeur i-⁠Refresh rafraîchit les vêtements, et surtout ils ressortent sans plis."
    },
    profitipp: {
      titel: "Pour que le linge soit prêt quand vous rentrez",
      text: "Selon l’appareil, la touche s’appelle «\u202fHeure de fin\u202f», «\u202fFin dans\u202f» ou «\u202fDépart différé\u202f». Voici comment l’utiliser\u202f:",
      liste: [
        "Le matin, mettez le linge, au maximum ce qu’elle peut sécher (en général 6 kg)",
        "Choisissez le programme «\u202fLavage et séchage\u202f»",
        "Réglez l’heure de fin, par exemple 18 h. Elle calcule elle-même quand elle doit démarrer",
        "Le soir, le linge est sec. Sortez-le assez vite, il reste ainsi bien lisse"
      ]
    },
    // Stand 01.11.2026: Keins dieser Modelle ist bei amazon.fr lieferbar, darum zeigt die Seite diese Hinweiskarte statt der Modelle.
    // Wird eins lieferbar: keinModell löschen, seinen Link prüfen und die übrigen Modelle entfernen.
    keinModell: { stufe: "amazon.fr", titel: "Pas disponible pour le moment", text: "Les lavantes-séchantes que je choisirais (Hisense WD5S1045BW, Haier I-Pro Serie 7 Plus, Bosch Serie 6 WNG24442 et AEG Serie 9000 L9WEF80690) ne sont pas disponibles sur amazon.fr en ce moment. Dès qu’une lavante-séchante que je peux vous recommander y sera disponible, vous la trouverez ici. D’ici là, le calculateur et les questions ci-dessous vous aident à choisir." },
    modelle: [
      {
        stufe: "Petit budget", spanne: "jusqu’à 550\u00a0€",
        name: "Hisense WD5S1045BW", preis: 490, preisText: "env. 470 à 530\u00a0€",
        punkte: [
          "Lave 10,5 kg et sèche 6 kg d’une traite",
          "Dose elle-même la lessive, vous n’en remettez que de temps en temps",
          "Avec programme vapeur et appli",
          "Très bon résultat dans le test (93 points sur 100 chez ETM Testmagazin, numéro 10/2024)"
        ],
        fuer: "Pour vous si vous voulez laver et sécher avec un seul appareil et regardez le prix.",
        hinweis: "Pour laver et sécher, il consomme plus d’électricité et d’eau que l’AEG avec pompe à chaleur.",
        link: amazon("hisense wd5s1045bw waschtrockner", "hisense wd5s1045bw lave-linge séchant")
      },
      {
        stufe: "Milieu de gamme", spanne: "de 550 à 900\u00a0€",
        name: "Haier I-Pro Serie 7 Plus (HWD100-BD14979U1)", preis: 650, preisText: "à partir d’env. 640\u00a0€", empfohlen: true,
        punkte: [
          "Lave 10 kg et sèche 6 kg d’une traite",
          "Programme vapeur i-⁠Refresh\u202f: rafraîchit les vêtements et lisse les plis",
          "Avec départ différé, pilotable aussi depuis l’appli",
          "Dose lui-même la lessive et l’adoucissant"
        ],
        fuer: "Pour la plupart des foyers. Mon conseil, car j’ai moi-même une Haier et je ne veux plus jamais m’en passer.",
        hinweis: "Laver et sécher une pleine charge prend un peu plus de 8 heures.",
        link: amazon("haier i-pro serie 7 plus waschtrockner hwd100-bd14979u1", "haier i-pro serie 7 plus lave-linge séchant hwd100-bd14979u1"),
        alternativen: [
          { name: "Bosch Serie 6 WNG24442", preis: 800, text: "L’ancien modèle WNG24440 de la même série était le meilleur rapport qualité-prix chez Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne (note 2,1, numéro 11/2023). Lave 9 kg et sèche 6 kg.", link: amazon("bosch serie 6 wng24442 waschtrockner", "bosch serie 6 wng24442 lave-linge séchant") }
        ]
      },
      {
        stufe: "Haut de gamme", spanne: "à partir de 1\u202f000\u00a0€",
        name: "AEG Serie 9000 L9WEF80690", preis: 1100, preisText: "env. 1\u202f050 à 1\u202f350\u00a0€",
        punkte: [
          "Sèche avec une pompe à chaleur et consomme donc moins d’électricité et d’eau",
          "Lave 9 kg et sèche 6 kg d’une traite",
          "Avec programme vapeur pour rafraîchir le linge",
          "Vainqueur du test chez Stiftung Warentest (note 2,0, numéro 11/2023)"
        ],
        fuer: "Pour vous si vous lavez beaucoup et voulez économiser de l’électricité à long terme. En échange, vous payez nettement plus à l’achat.",
        hinweis: "Laver et sécher une pleine charge prend presque 10 heures. Le test date déjà de 2023.",
        link: amazon("aeg l9wef80690 waschtrockner", "aeg l9wef80690 lave-linge séchant")
      }
    ],
    fragen: [
      { f: "Lavante-séchante, ou plutôt lave-linge et sèche-linge séparés\u202f?", a: "Deux appareils en font plus à la fois\u202f: pendant que le sèche-linge tourne, le lave-linge lave déjà la charge suivante. Mais il vous faut deux fois plus de place. Une lavante-séchante se place là où se trouve aujourd’hui votre lave-linge, et vous n’avez jamais à déplacer le linge mouillé. C’est exactement ce qui la rend si pratique. Si vous lavez plusieurs machines par jour pour une grande famille, deux appareils sont le meilleur choix." },
      { f: "Quelle quantité de linge peut-elle sécher\u202f?", a: "En général environ 6 kg, même si elle peut laver 9 ou 10 kg. 6 kg, c’est par exemple une quarantaine de T-shirts. Si vous voulez laver et sécher d’une traite, ne mettez que ce qu’elle peut sécher." },
      { f: "Je n’ai vraiment plus besoin de repasser\u202f?", a: "Pour les vêtements de tous les jours, le plus souvent pas. Un programme vapeur comme i-⁠Refresh sur ma Haier rafraîchit les vêtements et lisse les plis. Le seul point important\u202f: sortez le linge peu après le séchage et pliez-le, il reste ainsi lisse. Une chemise pour un rendez-vous important, vous lui donnerez peut-être quand même un petit coup de fer." },
      { f: "Le linge reste-t-il alors toute la journée dans le tambour\u202f?", a: "Oui, mais sec. Avec l’heure de fin, elle démarre juste assez tard pour avoir fini quand vous rentrez. D’ici là, le linge attend au sec dans le tambour. En revanche, ne laissez pas du linge mouillé pendant des heures, sinon il commence à sentir." },
      { f: "Combien coûte le séchage\u202f?", a: "Sans pompe à chaleur, un séchage consomme selon l’appareil un peu plus de 2 à 2,5 kWh. Cela fait environ 75 centimes à 35 centimes le kWh. Avec trois charges par semaine, vous arrivez à environ 10 € par mois. Un appareil avec pompe à chaleur comme l’AEG consomme moins d’électricité et d’eau : Stiftung Warentest calcule pour lui environ 760 € de frais de fonctionnement en moins sur dix ans par rapport aux appareils de Bosch et Siemens testés." },
      { f: "Que dois-je garder propre\u202f?", a: "De temps en temps, rincez le filtre à peluches en bas près de la pompe et le bac à lessive, et essuyez le joint en caoutchouc de la porte. Un programme chaud à tambour vide une fois par mois la garde fraîche." },
      { f: "A-t-elle besoin d’un branchement spécial\u202f?", a: "Non. Elle a besoin de la même arrivée d’eau, de la même évacuation et de la même prise qu’un lave-linge. Vous la mettez donc simplement à sa place." }
    ],
    quellen: [
      { name: "Stiftung Warentest\u202f: test des lavantes-séchantes (numéro 11/2023)", text: "vainqueur AEG L9WEF80690 (note 2,0), meilleur rapport qualité-prix Bosch WNG24440 (note 2,1)" },
      { name: "ETM Testmagazin (numéro 10/2024)", text: "Hisense WD5S1045BW très bon, 93 points sur 100" },
      { name: "Stiftung Warentest\u202f: sèche-linge avec aide au repassage (juin 2007)", text: "la vapeur fait gagner environ la moitié du temps de repassage" },
      { name: "Association allemande des fabricants de cosmétiques et de lessives (IKW)\u202f: chiffres de la lessive en Allemagne", url: "https://www.ikw.org/fileadmin/IKW_Dateien/Haushaltpflege_Bilder/Wissen/Informationsserie/WM/dateien/pdf/3_5.pdf", text: "environ 90 lessives par personne et par an, pour le calculateur (en allemand)" },
      { name: "Communiqué de l’IKW sur les économies au lavage, au séchage et à la vaisselle (octobre 2023)", url: "https://www.ikw.org/fileadmin/IKW_Dateien/downloads/Haushaltspflege/2023_10_01_Mit_7_Tipps_Geld_sparen.pdf", text: "210 lessives par an dans un foyer de quatre personnes, pour le calculateur (en allemand)" },
      { name: "Données des fabricants et étiquettes énergie de l’UE", text: "capacité, durée des programmes et consommation des modèles" }
    ],
    rechner: "waschtrockner",
    video: "waschtrockner"
  },
  {
    id: "airfryer",
    name: "Friteuse sans huile à deux paniers",
    kurzname: "une friteuse sans huile",
    kategorie: "Cuisine",
    symbol: "🍟",
    bild: "",
    kurz: "Une friteuse à air chaud à deux paniers. Chez moi, elle a surtout remplacé la poêle, et souvent aussi le four. Dans chaque panier cuit autre chose, avec sa propre température et sa propre durée, presque sans huile. Et ensuite, vous n’avez quasiment pas de vaisselle.",
    warum: "Tout dedans, appuyer sur Sync, direction le canapé. Vous ne restez plus à côté de la poêle, car l’appareil lance chaque panier de sorte que le poulet et les légumes soient prêts en même temps. Quand ça bipe, le repas est prêt. Et c’est même meilleur\u202f: les légumes sont plus croquants et plus savoureux, le poulet tendre à chaque fois. Ensuite, vous vous épargnez toute la vaisselle des poêles et casseroles, car rien n’attache et les paniers vont simplement au lave-vaisselle.",
    statt: "Au lieu de la poêle et du four",
    nutzen: "Direction le canapé, et presque pas de vaisselle après.",
    spart: ["muehe", "zeit", "geld"],
    muehe: { vorher: 4, nachher: 1 },
    fuer: [
      "Vous êtes souvent aux fourneaux à retourner viande ou légumes dans la poêle",
      "Après le repas, vous préférez vous détendre plutôt que récurer poêles et casseroles",
      "Le plat principal et l’accompagnement doivent être prêts en même temps",
      "Vous cuisinez généralement pour deux à cinq personnes"
    ],
    nachteile: [
      "Prend plus de place sur le plan de travail qu’un appareil à un seul panier. Si votre cuisine est petite, choisissez un modèle à paniers superposés",
      "Chaque panier est souvent plus petit qu’un grand panier unique. Si vous voulez cuire un poulet entier, il vous faut un grand panier",
      "Elle ne convient pas aux plats avec beaucoup de sauce ou de pâte liquide. Pour ceux-là, il vous faut toujours la plaque ou le four"
    ],
    erfahrung: {
      titel: "Mon expérience",
      bild: "", bildText: "Photo\u202f: votre friteuse sans huile",
      text: "Depuis que j’ai ma friteuse sans huile, je ne me suis plus servi de mes poêles. Et tout a meilleur goût\u202f: les légumes sont plus croquants et plus savoureux, le poulet est parfaitement tendre à chaque fois. En plus, je n’ai quasiment plus de vaisselle. Rien n’attache jamais, je mets simplement les paniers au lave-vaisselle ou je les essuie à la fin avec un chiffon humide."
    },
    profitipp: {
      titel: "Pour que tout soit prêt en même temps",
      text: "Sur la plupart des appareils, le bouton s’appelle « Sync », sur la Cosori Dual Basket « Sync Finish ». Voici comment l’utiliser :",
      liste: [
        "Panier 1\u202f: par exemple des cuisses de poulet, 200\u00a0°C, 25 minutes",
        "Panier 2\u202f: par exemple brocoli et poivrons, 190\u00a0°C, 12 minutes",
        "Appuyez sur Sync et lancez. Le panier 2 attend et démarre tout seul plus tard",
        "Ça bipe, et les deux sont prêts. Il ne vous reste plus qu’à manger"
      ]
    },
    modelle: [
      {
        stufe: "Petit budget", spanne: "jusqu’à 130\u00a0€",
        name: "Cosori Dual Basket 8,5 L", preis: 117, preisText: "env. 110 à 130\u00a0€",
        punkte: [
          "Deux paniers de 4,25 litres, chacun avec sa propre température et sa propre durée",
          "Bouton « Sync Finish » : les deux paniers sont prêts en même temps",
          "Vous rappelle par un bip qu’il faut secouer",
          "« Bon » chez Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne (note 2,3, numéro 1/2025), vainqueur du test parmi les appareils à deux paniers à l’époque"
        ],
        fuer: "Pour tous ceux qui veulent deux paniers et font attention au prix.",
        link: amazon("cosori dual basket 8,5 l", "cosori dual basket 8,5 l")
      },
      {
        stufe: "Milieu de gamme", spanne: "de 130 à 200\u00a0€",
        name: "Cosori Dual Blaze TwinFry 10 L", preis: 180, preisText: "env. 170 à 200\u00a0€",
        punkte: [
          "Deux paniers de 5 litres chacun, ou un grand de 10 litres si vous retirez la séparation",
          "Bouton Sync\u202f: tout est prêt en même temps",
          "Vous envoie un message sur le téléphone via l’appli dès que le repas est prêt",
          "Chauffe par le haut et par le bas, jusqu’à 240\u00a0°C"
        ],
        fuer: "Pour vous si vous voulez deux paniers côte à côte ou avez parfois besoin d’un grand panier de 10 litres.",
        hinweis: "Pour des raisons de sécurité, vous ne pouvez la lancer que sur l’appareil lui-même, pas via l’appli.",
        link: amazon("cosori twinfry 10 l")
      },
      {
        stufe: "Haut de gamme", spanne: "à partir de 200\u00a0€",
        name: "Cosori Turbo Tower Pro Smart", preis: 279, preisText: "env. 250 à 280\u00a0€", empfohlen: true,
        punkte: [
          "Vainqueur du test parmi les appareils à deux paniers chez Stiftung Warentest (note 2,2, numéro 9/2026)",
          "Deux paniers superposés, 10,8 litres au total. Prend moins de place que deux paniers côte à côte",
          "Bouton Sync : les deux paniers sont prêts en même temps, avec appli (VeSync)",
          "Paniers avec revêtement céramique"
        ],
        fuer: "Pour la plupart des foyers, surtout si le plan de travail est petit. Mon conseil : c’est le vainqueur du test parmi les appareils à deux paniers, et je l’utilise moi-même.",
        hinweis: "Pour des raisons de sécurité, vous ne pouvez le démarrer que sur l’appareil, pas depuis l’appli.",
        link: amazon("cosori turbo tower pro smart")
      }
    ],
    fragen: [
      { f: "Remplace-t-elle vraiment la poêle\u202f?", a: "Chez moi, oui\u202f: depuis que j’ai ma friteuse sans huile, je ne me suis plus servi de mes poêles. Poulet, légumes, pommes de terre, poisson ou saucisses y réussissent sans que vous restiez aux fourneaux, et sans projections de graisse. Pour les sauces, les œufs brouillés ou les crêpes, il vous faut toujours la plaque et une poêle." },
      { f: "Combien de vaisselle ai-je après\u202f?", a: "Quasiment pas. Dans une friteuse sans huile, rien n’attache. Vous mettez simplement les paniers au lave-vaisselle ou vous les essuyez rapidement à la fin avec un chiffon humide. Toute la vaisselle des poêles et casseroles, vous vous l’épargnez." },
      { f: "Est-ce vraiment meilleur qu’à la poêle\u202f?", a: "Pour moi, oui : les légumes sont plus croquants et plus savoureux, le poulet est tendre à chaque fois. L’air chaud circule tout autour des aliments. Ils dorent ainsi vite à l’extérieur et restent juteux à l’intérieur, sans baigner dans la graisse." },
      { f: "Que fait exactement le bouton Sync\u202f?", a: "Vous réglez la température et la durée de chaque panier, par exemple du poulet à 200\u00a0°C pendant 25 minutes et des légumes à 190\u00a0°C pendant 12 minutes. Avec Sync, le panier au temps le plus court démarre tout seul plus tard. Les deux sont ainsi prêts en même temps, et rien ne doit être gardé au chaud." },
      { f: "Est-ce que je reçois un message sur mon téléphone ou ma montre\u202f?", a: "Sur le téléphone oui, si l’appareil a le Wi-Fi : le TwinFry, par exemple, vous prévient via l’appli gratuite VeSync dès que le plat est prêt. Si votre montre connectée affiche les notifications du téléphone, vous voyez en général le message là aussi. Les appareils sans Wi-Fi se contentent de biper." },
      { f: "Dois-je secouer ou remuer en cours de cuisson\u202f?", a: "Ce n’est pas obligatoire. Mais les frites et les légumes sont croustillants de façon plus régulière si vous les secouez une fois en cours de cuisson. La Dual Basket vous le rappelle par un bip. Les cuisses de poulet, vous pouvez les retourner une fois pour qu’elles dorent de tous les côtés." },
      { f: "Un appareil à un seul panier ne suffirait-il pas\u202f?", a: "Si vous ne préparez généralement qu’une chose à la fois, oui, et c’est généralement moins cher. Un exemple : la Cosori Clear Blaze de 6,2 litres avec hublot. Deux paniers valent le coup dès que le plat principal et l’accompagnement doivent être prêts ensemble." },
      { f: "Remplace-t-elle aussi le four\u202f?", a: "Pour une à quatre portions, presque toujours. Frites, légumes, poulet, poisson et petits pains précuits y réussissent même plus vite. Pour la pizza, les gâteaux sur plaque ou un grand gratin, il vous faut toujours le four." },
      { f: "Économise-t-elle vraiment de l’électricité\u202f?", a: "Oui, surtout pour de petites quantités. Les paniers sont petits et chauffent vite, le préchauffage est généralement inutile ou ne dure que quelques minutes. Selon Stiftung Warentest (numéro 9/2026), les friteuses sans huile sont presque deux fois plus rapides qu’un four et consomment nettement moins d’électricité." },
      { f: "Le revêtement est-il sans danger\u202f?", a: "Selon les connaissances actuelles, oui. Beaucoup de paniers ont un revêtement antiadhésif en PTFE, connu sous le nom de Téflon. Selon l’Institut fédéral allemand d’évaluation des risques (BfR), il est sans danger en utilisation normale. Il ne peut se décomposer qu’à partir d’environ 360 °C, et une friteuse sans huile reste bien en dessous. Mais le PTFE fait partie des PFAS, qui polluent l’environnement lors de la fabrication et de l’élimination. Si vous préférez vous en passer, choisissez un appareil avec un revêtement céramique sans PFAS. Cosori l’indique par exemple pour la Turbo Tower Pro Smart. Quel que soit le modèle : pas de fourchette en métal ni de produit abrasif, et le revêtement durera longtemps." }
    ],
    quellen: [
      { name: "Stiftung Warentest\u202f: test des friteuses sans huile (numéro 1/2025)", text: "Cosori Dual Basket 8,5 L «\u202fbon\u202f» (note 2,3), à l’époque vainqueur parmi les appareils à deux paniers" },
      { name: "Stiftung Warentest\u202f: test des friteuses sans huile (numéro 9/2026)", text: "Cosori Turbo Tower Pro Smart vainqueur parmi les appareils à deux paniers (note 2,2), presque deux fois plus rapide qu’un four" },
      { name: "Institut fédéral allemand d’évaluation des risques (BfR)\u202f: questions et réponses sur les ustensiles à revêtement antiadhésif en PTFE (décembre 2018)", url: "https://www.bfr.bund.de/cm/343/ausgewaehlte-fragen-und-antworten-zu-geschirr-mit-antihaftbeschichtung-aus-ptfe-fuer-das-braten-kochen-und-backen.pdf", text: "sans danger en utilisation normale, ne se décompose qu’à partir d’environ 360 °C (en allemand)" },
      { name: "Autres tests", text: "notamment netzwelt.de, homeandsmart.de, Tech Advisor et Que Choisir" },
      { name: "Öko-Institut, Öko-Test et inside-digital.de", text: "consommation du four, des plaques, de la friteuse et de la friteuse sans huile, pour le calculateur" },
      { name: "Données des fabricants", text: "paniers, contenances et fonctions des modèles, «\u202fsans PFAS\u202f» selon Cosori" }
    ],
    zubehoer: [
      { name: "Pulvérisateur d’huile BETA NOBLE, 100 ml", text: "Il vous permet de vaporiser très peu d’huile, de façon régulière, sur les légumes, les pommes de terre ou le poulet, au lieu de la verser directement de la bouteille. Flacon en verre rechargeable, sans gaz propulseur. Convient à l’huile d’olive, à l’huile de tournesol et aussi pour la poêle.", link: amazon("beta noble ölsprüher", "beta noble pulvérisateur huile") }
    ],
    rechner: "airfryer",
    video: "airfryer"
  },
  {
    id: "thermostate",
    name: "Têtes thermostatiques connectées",
    kurzname: "des têtes thermostatiques connectées",
    kategorie: "Maison",
    symbol: "🌡️",
    bild: "",
    kurz: "Elles prennent la place des robinets thermostatiques classiques de vos radiateurs et chauffent selon votre planning. Vous les pilotez via l’appli ou directement sur l’appareil.",
    warum: "Les avantages sautent aux yeux : peu avant votre retour, le logement est déjà chaud. Pendant que vous êtes au travail, les têtes thermostatiques baissent le chauffage toutes seules. Vous ne pouvez donc tout simplement plus oublier de le baisser, et vous économisez de l’argent. Pour cela, vous réglez une seule fois un planning de chauffage pour la semaine. Et les têtes thermostatiques elles-mêmes sont en général bon marché.",
    statt: "Au lieu de monter et baisser le chauffage à la main",
    nutzen: "Au chaud quand vous rentrez. Baissé quand vous êtes absent.",
    spart: ["geld", "muehe"],
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Vous êtes souvent absent dans la journée, par exemple au travail",
      "Vous oubliez parfois de baisser le chauffage",
      "Le soir, vous voulez rentrer dans un logement chaud",
      "Vous êtes locataire\u202f: vous les vissez vous-même et les retirez en déménageant"
    ],
    nachteile: [
      "Les têtes qui se connectent directement au Wi-Fi obtiennent de moins bons résultats dans les tests. Les meilleurs modèles ont besoin d’une centrale, qui coûte une fois en plus si vous n’en avez pas encore",
      "Si vous baissez déjà toujours le chauffage vous-même, vous économisez moins. Il faut alors quelques années avant que le prix d’achat soit rentabilisé, mais le confort, vous l’avez tout de suite",
      "Selon les fabricants, les piles tiennent en général jusqu’à deux ans, ensuite vous les changez"
    ],
    profitipp: {
      titel: "Comment régler votre planning de chauffage",
      text: "Pour commencer, un planning simple pour les jours de semaine et un pour le week-end suffisent\u202f:",
      liste: [
        "Au chaud peu avant le lever, par exemple 21 degrés",
        "Quand vous quittez la maison, baisser à 16 ou 17 degrés. Mieux vaut ne pas éteindre complètement, sinon les murs refroidissent",
        "De nouveau au chaud peu avant votre retour",
        "La nuit, 16 à 18 degrés dans la chambre"
      ]
    },
    gruppen: [
      { name: "Sans centrale", text: "Vous connectez ces têtes directement à votre Wi-Fi. Vous n’achetez rien de plus et l’installation est vite faite. En revanche, elles obtiennent de moins bons résultats dans les tests que les têtes avec centrale.", ohne: "zentrale" },
      { name: "Avec centrale", text: "Ces têtes communiquent avec une petite centrale, aussi appelée passerelle ou hub, reliée à votre routeur. Elle coûte une fois en plus. Pour certains modèles, un appareil que vous avez peut-être déjà suffit, par exemple un HomePod mini ou un Google Nest Hub (2e génération). En échange, ces têtes obtiennent les meilleurs résultats dans les tests, et selon les fabricants les piles tiennent jusqu’à deux ans." }
    ],
    modelle: [
      {
        gruppe: "Sans centrale",
        stufe: "Petit budget", spanne: "directement en Wi-Fi",
        name: "SALCAR TRV801W", preis: 40, preisText: "env. 30 à 45\u00a0€ pièce",
        punkte: [
          "Se connecte directement à votre Wi-Fi, sans aucune centrale",
          "Fonctionne avec Alexa et Google",
          "Détecte quand une fenêtre est ouverte et baisse alors le chauffage",
          "Appli claire (Smart Life ou Tuya) avec un planning de chauffage pour chaque jour"
        ],
        fuer: "Pour vous si vous voulez quelque chose de pas cher, sans centrale. Je l’ai moi-même sur mon radiateur.",
        hinweis: "« Satisfaisant » chez smarthomeassistent.de (note 3,1).",
        link: amazon("salcar trv801w"),
        alternativen: [
          { name: "Eurotronic Comet WiFi", preis: 35, text: "« Satisfaisant » chez Stiftung Warentest (note 2,7, numéro 9/2023). Il détecte quand une fenêtre est ouverte.", link: amazon("eurotronic comet wifi") }
        ]
      },
      {
        gruppe: "Avec centrale",
        stufe: "Petit budget", spanne: "avec hub Aqara ou Matter",
        name: "Aqara W600", preis: 50, preisText: "env. 45 à 55\u00a0€ pièce", empfohlen: true,
        punkte: [
          "N°\u00a01 chez smarthomeassistent.de («\u202ftrès bien\u202f», note 1,4)",
          "Très silencieux\u202f: on entend à peine le moteur",
          "Selon le fabricant, les piles tiennent jusqu’à deux ans",
          "Fonctionne avec Alexa, Google et Apple Home"
        ],
        fuer: "Pour la plupart des gens\u202f: c’est la meilleure tête du test, et pourtant elle n’est pas chère.",
        hinweis: "Il a besoin d’une centrale\u202f: un hub Aqara ou un appareil compatible Matter via Thread, par exemple un HomePod mini ou un Google Nest Hub (2e génération). Via Matter, il offre un peu moins de fonctions qu’avec le hub Aqara.",
        link: amazon("aqara w600 heizkörperthermostat", "aqara w600 tête thermostatique")
      },
      {
        gruppe: "Avec centrale",
        stufe: "Milieu de gamme", spanne: "avec Matter ou contrôleur Bosch",
        name: "Bosch Smart Home Thermostat de radiateur II [+M]", preis: 62, preisText: "env. 60 à 70\u00a0€ pièce",
        punkte: [
          "«\u202fTrès bien\u202f» chez smarthomeassistent.de (note 1,4)",
          "Très silencieux, avec écran, et se règle aussi directement sur l’appareil",
          "Selon le fabricant, les piles tiennent jusqu’à deux ans",
          "Fonctionne avec Alexa, Google et Apple Home"
        ],
        fuer: "Pour vous si le design compte pour vous ou si vous avez déjà Bosch Smart Home.",
        hinweis: "Il fonctionne via Matter sur Thread, par exemple avec un HomePod mini ou un Google Nest Hub (2e génération), ou avec le Bosch Smart Home Controller II. Il ne détecte les fenêtres ouvertes qu’avec un contact de fenêtre en plus. Vérifiez « [+M] » dans le nom : l’ancien modèle sans cette mention a toujours besoin du contrôleur Bosch.",
        link: amazon("bosch smart home heizkörperthermostat ii +m", "bosch smart home thermostat radiateur ii +m")
      },
      {
        gruppe: "Avec centrale",
        stufe: "Haut de gamme", spanne: "avec centrale Homematic IP",
        name: "Homematic IP Evo", preis: 78, preisText: "env. 75 à 100\u00a0€ pièce",
        punkte: [
          "Vainqueur du test de Stiftung Warentest («\u202fbien\u202f», note 1,7, numéro 9/2023)",
          "Détecte tout seul quand une fenêtre est ouverte et baisse alors le chauffage",
          "Écran sur l’appareil et fonction Boost quand il faut chauffer vite",
          "Un grand système\u202f: contacts de fenêtre, thermostats muraux et bien plus encore"
        ],
        fuer: "Pour vous si vous voulez équiper tout le logement et l’agrandir plus tard.",
        hinweis: "Il a besoin d’une centrale Homematic IP, par exemple l’Access Point, relié à votre routeur par câble. « Bien » chez smarthomeassistent.de (note 1,8).",
        link: amazon("homematic ip evo heizkörperthermostat", "homematic ip evo tête thermostatique")
      }
    ],
    ohneTeuer: { stufe: "Têtes plus chères", titel: "Plutôt avec centrale", text: "Une tête plus chère sans centrale, convaincante dans les tests et disponible sur amazon.fr, je n’en ai pas trouvé. Les têtes qui obtiennent les meilleurs résultats dans les tests ont besoin d’une centrale\u202f: voyez le groupe «\u202fAvec centrale\u202f»." },
    fragen: [
      { f: "Combien est-ce que j’économise vraiment\u202f?", a: "Avec un planning de chauffage, environ 10 % des frais de chauffage, selon co2online. En règle générale, chaque degré en moins économise environ 6 % d’énergie de chauffage. Combien cela représente chez vous dépend de la fréquence de vos absences et de votre façon de chauffer aujourd’hui. Pour un logement de 70 m² mal isolé, Stiftung Warentest (numéro 9/2023) compte environ 100 € par an. Faites le calcul pour vous dans le calculateur ci-dessous." },
      { f: "Avec ou sans centrale\u202f: que choisir\u202f?", a: "Sans centrale, c’est le démarrage le plus simple : vous déballez, connectez au Wi-Fi, c’est fini. Cela convient si vous ne voulez piloter que quelques radiateurs et que cela doit rester bon marché. Avec centrale, vous payez une fois un peu plus, mais vous obtenez les têtes qui ont les meilleurs résultats dans les tests. Vous pouvez aussi ajouter plus tard des contacts de fenêtre ou un thermostat mural. Cela vaut surtout la peine si vous voulez équiper tout le logement." },
      { f: "Pourquoi y a-t-il si peu de têtes thermostatiques Wi-Fi\u202f?", a: "Le Wi-Fi consomme plus que les liaisons radio utilisées par les têtes avec centrale. Important : votre routeur doit avoir un Wi-Fi en 2,4 GHz. C’est le cas de presque tous les routeurs." },
      { f: "Vont-elles sur mes radiateurs\u202f?", a: "Sur presque tous les robinets de radiateur classiques. La plupart ont un filetage au standard M30 x 1,5, et tous les modèles présentés ici s’y adaptent. Pour d’autres robinets, par exemple de Danfoss, des adaptateurs sont souvent fournis, ou vous les trouvez pour peu d’argent. Pour un chauffage au sol, en revanche, il vous faut un thermostat d’ambiance au mur." },
      { f: "Puis-je les installer en tant que locataire\u202f?", a: "En général oui, car vous ne modifiez rien de façon permanente. Vous dévissez simplement l’ancienne tête et vissez la nouvelle. Pas besoin de vidanger l’eau, ni de faire venir un artisan. Gardez bien les anciennes têtes et remettez-les en place en déménageant. En cas de doute, demandez rapidement à votre propriétaire." },
      { f: "Et si je rentre plus tôt\u202f?", a: "Pas de problème : vous montez rapidement la température sur la tête thermostatique ou touchez « plus chaud » dans l’appli. À partir du prochain créneau de votre planning, tout repart tout seul. Certains systèmes savent même grâce à la localisation de votre téléphone quand vous êtes sur le chemin du retour." },
      { f: "Le logement ne refroidit-il pas trop dans la journée\u202f?", a: "Pas si vous baissez à 16 ou 17 degrés au lieu d’éteindre complètement. Il ne faut pas descendre sous 16 degrés : sinon les murs refroidissent, l’humidité s’y dépose et le risque de moisissure augmente. Réchauffer le logement ensuite coûte moins cher que le chauffer toute la journée sans interruption." },
      { f: "Et les fenêtres ouvertes\u202f?", a: "La plupart des recommandations présentées ici détectent quand la température chute brusquement pendant que vous aérez, et baissent alors le chauffage un moment. Le thermostat Bosch a besoin pour cela d’un contact de fenêtre. Vous ne chauffez ainsi pas l’extérieur." }
    ],
    quellen: [
      { name: "Stiftung Warentest\u202f: test des têtes thermostatiques (numéro 9/2023)", text: "vainqueur Homematic IP Evo (note 1,7), Eurotronic Comet WiFi (note 2,7), environ 100\u00a0€ d’économie par an pour 70 m²" },
      { name: "smarthomeassistent.de\u202f: classement des têtes thermostatiques (octobre 2026)", text: "Aqara W600 à la première place et Bosch II [+M] note 1,4 chacun, Homematic IP Evo note 1,8" },
      { name: "smarthomeassistent.de\u202f: test du SALCAR TRV801W (septembre 2026)", text: "note 3,1" },
      { name: "co2online\u202f: communiqué sur les thermostats programmables (octobre 2023)", url: "https://www.co2online.de/presse/heizkosten-senken-10-prozent-weniger-durch-programmierbare-thermostate/", text: "environ 10\u00a0% de frais de chauffage en moins (en allemand)" },
      { name: "Agence fédérale allemande de l’environnement (UBA)\u202f: bien chauffer", url: "https://www.umweltbundesamt.de/umwelttipps-fuer-den-alltag/heizen-bauen/heizen-raumtemperatur", text: "les thermostats programmables économisent environ 10\u00a0% d’énergie (en allemand)" },
      { name: "co2online\u202f: Heizspiegel 2026, coûts de chauffage (septembre 2026)", url: "https://www.co2online.de/presse/heizen-wird-teurer-neuer-heizspiegel-zeigt-sparpotenziale-von-bis-zu-1000-euro-pro-jahr/", text: "chauffage au gaz 1\u202f170\u00a0€ par an pour 70 m², pour le calculateur (en allemand)" },
      { name: "Office fédéral allemand de la statistique (Destatis)\u202f: surface habitable selon la taille du ménage", url: "https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Wohnen/Tabellen/tabelle-wo4-wohnflaeche.html", text: "microrecensement 2022, pour les moyennes du calculateur (page en allemand)" },
      { name: "Centre de consommateurs de Hambourg et Agence allemande de l’énergie (dena)", text: "environ 6\u00a0% d’énergie de chauffage en moins par degré, conseils de température" },
      { name: "Données des fabricants", text: "autonomie des piles et fonctions des modèles" }
    ],
    rechner: "thermostate",
    video: "thermostate",
    preisstand: "Oktober 2026"
  },
  {
    id: "klimaanlage",
    name: "Climatiseur",
    kurzname: "un climatiseur",
    kategorie: "Maison",
    symbol: "❄️",
    bild: "",
    kurz: "Un climatiseur que vous installez vous-même, sans installateur. Il rafraîchit votre pièce quand il fait chaud dehors.",
    warum: "Par temps chaud, la chaleur s’accumule dans le logement, et la nuit la chambre ne se rafraîchit presque plus. Le climatiseur sort la chaleur de la pièce et l’évacue dehors. Vous l’allumez, et la pièce devient nettement plus fraîche, dans le bureau à domicile comme le soir dans la chambre.",
    statt: "Au lieu d’un ventilateur et d’une chambre surchauffée",
    nutzen: "Au frais dans la pièce, même quand il fait chaud dehors.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Votre chambre ou votre bureau devient vraiment chaud en été",
      "Vous êtes locataire ou ne voulez rien faire installer de façon fixe",
      "Vous voulez rafraîchir sans installateur et sans trou dans le mur"
    ],
    nachteile: [
      "Il consomme beaucoup d’électricité. S’il tourne de nombreuses heures par temps chaud, vous le remarquerez sur la facture, bien plus avec un monobloc qu’avec le PortaSplit",
      "Même le PortaSplit n’est pas aussi silencieux qu’un appareil fixe. Les monoblocs sont encore plus bruyants",
      "La fenêtre reste entrouverte. Avec un joint de fenêtre, moins d’air chaud entre",
      "Les appareils sont lourds : selon le fabricant, le PortaSplit pèse un peu plus de 32 kilos. Pour le porter, mieux vaut être deux"
    ],
    gruppen: [
      { name: "Split", text: "Deux parties reliées par une liaison plate : l’unité intérieure est dans la pièce, l’unité extérieure est accrochée dehors à la fenêtre ou posée sur le balcon. C’est là qu’elle rejette la chaleur. C’est pourquoi un split est plus silencieux et plus économe qu’un monobloc." },
      { name: "Monobloc", text: "Tout est dans un seul appareil (climatiseur mobile monobloc), l’air chaud sort par la fenêtre à travers un tuyau. Les monoblocs sont moins chers et vite installés. Honnêtement, ils sont toutefois plus bruyants qu’un split, même les meilleurs du test. Ils sont surtout intéressants si vous ne rafraîchissez que quelques jours de forte chaleur par an." }
    ],
    modelle: [
      {
        gruppe: "Split",
        stufe: "Milieu de gamme", spanne: "sans installateur",
        name: "Midea PortaSplit", preis: 1100, preisText: "env. 900 à 1 350 €", empfohlen: true,
        punkte: [
          "L’unité extérieure s’accroche à un support sur la fenêtre ou se pose sur le balcon. Pas besoin d’installateur ni de trou dans le mur",
          "Selon le fabricant 3,5 kilowatts pour des pièces jusqu’à 42 mètres carrés et 39 décibels à l’unité intérieure en mode Silent",
          "Bien plus économe qu’un monobloc, selon Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne, au niveau de certains appareils fixes",
          "Il peut aussi chauffer et se commande par télécommande ou par application"
        ],
        fuer: "Mon conseil si vous le voulez plus silencieux et plus économe qu’un monobloc. Je l’ai moi-même et j’en suis très content.",
        hinweis: "Chez Stiftung Warentest, il n’a obtenu que « satisfaisant » (3,3, numéro 6/2025), les splits fixes ont fait mieux. La fenêtre reste entrouverte pour laisser passer la liaison plate. Et à partir de 2027, il ne sera plus mis sur le marché neuf à cause de son fluide frigorigène, plus de détails dans les questions plus bas.",
        link: amazon("midea portasplit", "midea portasplit")
      }
    ],
    ohneTeuer: { stufe: "Haut de gamme", titel: "Fixe, posé par un professionnel", text: "Les splits fixes sont encore plus silencieux et plus économes. Mais seul un professionnel certifié peut les installer, et en tant que locataire vous avez besoin de l’accord de votre propriétaire. C’est pourquoi vous ne pouvez pas les commander ici. Les appareils en tête des tests figurent dans les questions plus bas." },
    fragen: [
      { f: "Split ou monobloc : lequel me convient ?", a: "Si vous rafraîchissez souvent ou la nuit, prenez un split comme le PortaSplit. Il est plus silencieux et consomme moins, car il rejette la chaleur dehors par l’unité extérieure. Si vous n’avez besoin de fraîcheur que quelques jours de forte chaleur par an, un monobloc suffit. Il est moins cher à l’achat et vite installé. En revanche, il est plus bruyant, et comme il souffle l’air de la pièce vers l’extérieur, de l’air chaud du dehors entre à sa place. Stiftung Warentest est du même avis. Pourquoi il n’y a en ce moment aucun monobloc ici, vous le lirez plus bas, à la question sur le choix des appareils." },
      { f: "Quel bruit fait un climatiseur dans la pièce ?", a: "Les splits fixes sont les plus silencieux. Selon les fabricants, les unités intérieures des vainqueurs du test n’ont que 19 décibels dans leur mode le plus silencieux. Le PortaSplit est plus bruyant : selon le fabricant, 39 décibels en mode Silent, et dans les tests il était parfois plus bruyant. Les monoblocs le sont encore plus, car tout est dans la pièce, y compris le compresseur. Stiftung Warentest juge même les monoblocs recommandés plutôt bruyants. L’étiquette énergie indique la puissance acoustique : 59 décibels à l’unité intérieure du PortaSplit, 62 à 65 pour les monoblocs que recommande Stiftung Warentest. Pour la chambre, le mode nuit aide, ou vous la rafraîchissez avant d’aller vous coucher." },
      { f: "Combien coûte l’électricité ?", a: "Cela dépend de la fréquence et de la durée d’utilisation. Un exemple : si vous rafraîchissez huit heures par jour pendant un mois, le PortaSplit consomme environ 100 à 140 kilowattheures selon les tests et l’étiquette énergie. À 37 centimes le kilowattheure, la moyenne en Allemagne, cela fait environ 35 à 55 €. Dans le test de Que Choisir, les monoblocs que recommande Stiftung Warentest consommaient presque deux fois plus, soit environ 70 à 90 € pour le même mois. En Autriche et en Suisse, l’électricité est un peu moins chère. Le prix plus élevé du PortaSplit ne se rentabilise par l’électricité qu’au bout de nombreuses années. Au quotidien, ce qui compte plus, c’est qu’il est plus silencieux et ne fait pas entrer d’air chaud du dehors." },
      { f: "Le PortaSplit peut-il aussi chauffer ?", a: "Oui, il fonctionne comme une petite pompe à chaleur et, selon le fabricant, chauffe jusqu’à moins 10 degrés dehors. Stiftung Warentest n’a toutefois testé le chauffage que jusqu’à plus 2 degrés dehors. Ainsi, par les journées fraîches du printemps et de l’automne, vous pouvez chauffer certaines pièces avec lui." },
      { f: "Et les splits fixes ?", a: "Ce sont les plus silencieux et les plus économes, et ils peuvent aider à chauffer en hiver. Chez Stiftung Warentest (numéro 6/2026), le Mitsubishi Electric MSZ-RZ25VU est vainqueur parmi les petits appareils de 2,5 kilowatts, et le Samsung AR70F09CAAWN est le meilleur rapport qualité-prix. Parmi les plus grands de 3,5 kilowatts, le Daikin Perfera FTXM35A est en tête, testé en 2025. À titre indicatif, Stiftung Warentest compte 2,5 kilowatts pour environ 25 mètres carrés et 3,5 kilowatts pour environ 35. Seul un professionnel certifié peut les installer, c’est pourquoi vous ne pouvez pas les commander ici. Demandez de préférence des devis tôt dans l’année, car dès la première canicule les professionnels sont vite complets." },
      { f: "Qu’est-ce qui change en 2027 pour le PortaSplit ?", a: "Le PortaSplit présenté ici utilise le fluide frigorigène R32. En raison de nouvelles règles européennes, il ne pourra plus être mis sur le marché neuf à partir du 1er janvier 2027. Les magasins peuvent toutefois continuer à vendre les appareils qui se trouvent dans l’UE d’ici fin 2026. Et si vous en avez un, vous pouvez continuer à l’utiliser et le faire réparer sans restriction. Midea a annoncé pour 2027 un nouveau PortaSplit au propane (R290), qui nuit beaucoup moins au climat." },
      { f: "Puis-je installer un climatiseur en tant que locataire en Allemagne ?", a: "Un monobloc, vous pouvez en général simplement l’installer, car vous ne percez rien et ne transformez rien. Pour un split fixe, en revanche, il vous faut l’accord de votre propriétaire, de préférence par écrit. Il faut en effet un trou dans le mur et une unité extérieure sur la façade. Pour le PortaSplit, ce n’est pas tout à fait clair : vous ne percez rien, mais l’unité extérieure est accrochée dehors. Un expert de l’association allemande de propriétaires Haus & Grund estime que c’est admis en plein été même sans accord, car ce n’est pas prévu pour durer. Demandez quand même de préférence à votre propriétaire avant. Et pensez aux voisins, surtout la nuit." },
      { f: "Et dans un appartement en copropriété en Allemagne ?", a: "Vous ne pouvez pas simplement poser un split avec unité extérieure, il vous faut d’abord une décision de l’assemblée des copropriétaires. Depuis un arrêt de la Cour fédérale de justice de juillet 2026, les copropriétaires y ont toutefois en règle générale droit. Cela vaut tant que l’appareil ne dérange pas trop les autres, par exemple par le bruit, et ne gâche pas l’aspect du bâtiment. Pour un monobloc, aucune décision n’est nécessaire, car vous ne transformez rien. Pour le PortaSplit, demandez de préférence au syndic avant." },
      { f: "Et en Autriche ?", a: "Le plus simple est un appareil mobile, car il reste dans votre logement. Si vous voulez un split fixe, en tant que locataire vous devez le signaler à l’avance à votre propriétaire. S’il ne refuse pas dans les deux mois, cela vaut accord selon la loi autrichienne sur les baux. S’il refuse, vous obtenez rarement gain de cause devant l’organe de conciliation ou le tribunal. Si vous êtes propriétaire d’un appartement dans un immeuble à plusieurs propriétaires, il vous faut l’accord des autres. Avoir besoin en plus d’une autorisation de l’autorité de construction dépend de l’appareil, du bruit et du lieu, par exemple dans une zone protégée. Renseignez-vous de préférence avant auprès de votre commune, à Vienne auprès de la police des constructions. Pour les appareils mobiles comme le PortaSplit, selon le magazine profil, une autorisation n’est souvent pas nécessaire. Mais là aussi, demandez d’abord à votre propriétaire." },
      { f: "Et en Suisse ?", a: "Les appareils mobiles avec tuyau que vous branchez simplement n’ont pas besoin d’autorisation. Dans le canton de Zurich, le Conseil d’État du canton l’a expressément confirmé. Un split fixe, en revanche, nécessite un permis de construire dans la plupart des cantons, à Zurich en général pour l’unité extérieure. En tant que locataire, il vous faut l’accord écrit du bailleur pour toute modification du logement. Pour le PortaSplit, je n’ai pas trouvé de règle claire, car son unité extérieure est seulement accrochée à la fenêtre. Demandez donc avant à votre gérance et, en cas de doute, au service des constructions de votre commune. Et encore une chose : les appareils présentés ici ont une fiche allemande qui ne rentre pas dans les prises suisses. Je n’ai donc pas d’offre adaptée pour la Suisse pour le moment, mais j’en cherche une." },
      { f: "Comment avez-vous choisi les appareils ?", a: "Pour les splits, j’ai lu les tests de Stiftung Warentest ainsi que ceux de home&smart, smarthomeassistent et mobiFlip. Le PortaSplit était le seul split mobile du test de Stiftung Warentest, et je l’utilise moi-même. Stiftung Warentest ne teste plus elle-même les monoblocs depuis des années. En 2026, elle a toutefois évalué le grand test du magazine Que Choisir et en a recommandé trois appareils disponibles en Allemagne. Tous trois y ont obtenu la meilleure note en refroidissement. Sur amazon.fr, aucun des trois n’est disponible en ce moment, c’est pourquoi il n’y a pour l’instant pas de monobloc ici. J’ai aussi comparé les données des fabricants et lu les tests du magazine britannique de consommateurs Which? et de l’association autrichienne de consommateurs VKI. Aucun de ces tests ne qualifie un monobloc de vraiment silencieux, je préfère vous le dire honnêtement." }
    ],
    profitipp: {
      titel: "Pour qu’il rafraîchisse mieux et consomme moins",
      text: "Quelques gestes font une grande différence :",
      liste: [
        "Calfeutrez l’espace de la fenêtre par lequel passent la liaison ou le tuyau. Ainsi, moins d’air chaud entre",
        "Gardez les volets ou les stores baissés en journée. Une protection solaire à l’extérieur de la fenêtre est la plus efficace",
        "Éteignez-le quand personne n’est dans la pièce, et rafraîchissez la chambre avant d’aller vous coucher",
        "Ne refroidissez que de quelques degrés, au maximum environ six degrés de moins qu’à l’extérieur. C’est plus agréable pour le corps et cela économise de l’électricité",
        "Si vous avez un kit solaire de balcon, rafraîchissez en journée quand le soleil brille. Vous utilisez alors votre propre électricité"
      ]
    },
    erfahrung: {
      titel: "Mon expérience",
      bild: "", bildText: "Photo : votre PortaSplit",
      text: "J’ai moi-même le Midea PortaSplit, et il est très silencieux. Je peux le laisser tourner sans problème pendant que je dors. Le montage a été simple, tout est bien expliqué dans la notice. Je ne l’utilise pas pour chauffer, je ne peux donc rien vous dire à ce sujet."
    },
    vergleich: {
      vorherTitel: "Sans climatiseur",
      vorher: [
        "En journée, le logement chauffe de plus en plus",
        "La nuit, vous aérez en espérant que ça rafraîchisse",
        "Dans la chambre, il fait souvent trop chaud pour dormir"
      ],
      nachher: [
        "D’une pression sur un bouton, la pièce devient nettement plus fraîche",
        "Avec la minuterie ou l’application, il fait déjà frais quand vous rentrez",
        "Avant d’aller vous coucher, vous rafraîchissez la chambre"
      ]
    },
    video: "klimaanlage",
    preisstand: "Oktober 2026"
  },
  {
    id: "smarte-lampen",
    name: "Ampoules connectées",
    kurzname: "des ampoules connectées",
    kategorie: "Maison",
    symbol: "💡",
    bild: "",
    kurz: "Vous les vissez dans vos lampes à la place des ampoules normales. Ensuite, vous commandez votre lumière par application, interrupteur ou à la voix, et elle s’allume et s’éteint selon votre programme.",
    warum: "Le matin, la lumière monte doucement, le soir elle s’allume toute seule et devient chaude et douillette. D’un simple geste, vous obtenez l’ambiance qu’il faut pour cuisiner, lire ou regarder un film. Et quand vous quittez la maison, vous éteignez tout d’un geste, même une fois dehors.",
    statt: "Au lieu de chercher l’interrupteur à tâtons dans le noir",
    nutzen: "La lumière quand vous en avez besoin. Éteinte quand vous partez.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 2, nachher: 1 },
    fuer: [
      "Vous voulez la bonne ambiance lumineuse d’un geste, par exemple pour cuisiner, lire ou regarder un film",
      "La lumière doit s’allumer et s’éteindre toute seule le matin et le soir",
      "Il vous arrive d’oublier d’éteindre la lumière en quittant la maison",
      "Vous êtes locataire : vous les vissez simplement à la place des anciennes ampoules et les emportez quand vous déménagez"
    ],
    nachteile: [
      "Les ampoules connectées coûtent nettement plus cher que des ampoules LED normales. Vous payez surtout le confort",
      "Même éteintes, elles consomment un peu d’électricité pour rester à l’écoute. Dans l’UE, 0,5 watt au maximum par ampoule est autorisé, plus de détails dans les questions plus bas",
      "Si vous les éteignez avec l’interrupteur normal, elles ne réagissent plus à l’application ni à la voix. Laissez donc l’interrupteur allumé et ajoutez un interrupteur connecté, comme dans le conseil plus bas",
      "Pour toutes les fonctions de Philips Hue, il vous faut un Bridge, qui coûte une fois en plus. Les kits de démarrage présentés ici l’incluent déjà"
    ],
    profitipp: {
      titel: "Pour une lumière vraiment pratique",
      text: "Quelques réglages font la plus grande différence :",
      liste: [
        "Laissez toujours l’interrupteur normal allumé et collez un interrupteur connecté à côté, chez Hue par exemple le Smart Button du kit de démarrage. Il tient avec une bande adhésive, vous n’avez pas besoin d’électricien",
        "Créez des scènes, par exemple lumineuse pour cuisiner, chaude pour vous détendre et tamisée pour une soirée film",
        "Programmez la lumière pour qu’elle monte doucement le matin, ainsi vous ne vous réveillez pas dans le noir",
        "Avec le Hue Bridge Pro et au moins trois ampoules Hue dans une pièce, MotionAware allume la lumière tout seul dès que vous entrez"
      ]
    },
    erfahrung: {
      titel: "Mon expérience",
      bild: "", bildText: "Photo\u202f: vos lampes Hue",
      text: "J’utilise Philips Hue depuis environ dix ans, et j’adore. Ce que j’utilise le plus, ce sont les scènes\u202f: j’ai ainsi toujours exactement l’ambiance lumineuse que je veux. Avec la nouvelle fonction MotionAware, les lampes s’allument toutes seules dès que quelqu’un bouge dans la pièce. J’utilise aussi les interrupteurs Hue, qui offrent bien plus de fonctions que des interrupteurs classiques."
    },
    gruppen: [
      { name: "Avec centrale", text: "Ces ampoules communiquent avec une petite centrale, chez Philips Hue elle s’appelle le Bridge. Vous la reliez à votre routeur, et elle est déjà incluse dans les kits de démarrage présentés ici. En échange, vous avez le plus de fonctions : programmes, scènes, commande à distance et beaucoup d’accessoires comme des interrupteurs et des détecteurs de mouvement. Philips Hue avec Bridge a été le vainqueur du test de Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne (numéro 2/2024)." },
      { name: "Sans centrale", text: "Vous connectez ces ampoules directement à votre Wi-Fi ou en Bluetooth à votre téléphone. Vous n’achetez rien en plus et c’est vite fait. Cela convient si vous voulez commencer avec une ou deux ampoules. La meilleure ampoule sans centrale chez Stiftung Warentest (numéro 2/2024) était celle de WiZ." }
    ],
    modelle: [
      {
        gruppe: "Avec centrale",
        stufe: "Petit budget", spanne: "Hue à prix réduit",
        name: "Kit de démarrage Philips Hue Essential", preis: 90, preisText: "env. 80 à 100 € pour le Bridge et quatre ampoules",
        punkte: [
          "Bridge et quatre ampoules couleur et nuances de blanc dans un seul kit",
          "Même application et même système que les autres ampoules Hue, vous pouvez tout compléter plus tard",
          "Des couleurs vives : pour les sites tech nextpit et TechRadar, elles se distinguaient à peine des ampoules Hue plus chères",
          "Fonctionne avec Alexa, Google et Apple Home"
        ],
        fuer: "Pour vous si vous voulez équiper plusieurs lampes avec Hue à petit prix.",
        hinweis: "Elle ne descend qu’à 2 % de luminosité, les ampoules Hue plus chères jusqu’à 0,2 %. Pour une lumière de réveil très douce, TechRadar l’a trouvée trop lumineuse. Avec le Bridge de ce kit, pas de MotionAware : il vous faut pour cela le Bridge Pro. Et selon le fabricant, elle est en classe énergétique F, les ampoules Hue plus chères en D. Éteinte, elle consomme 0,5 watt, les ampoules du kit avec Bridge Pro seulement 0,1 watt.",
        link: amazon("philips hue essential starter set e27", "philips hue essential kit de démarrage e27")
      },
      {
        gruppe: "Avec centrale",
        stufe: "Haut de gamme", spanne: "avec Bridge Pro",
        name: "Kit de démarrage Philips Hue White & Color Ambiance avec Bridge Pro", preis: 220, preisText: "env. 200 à 250 € pour le Bridge Pro, trois ampoules et le Smart Button", empfohlen: true,
        punkte: [
          "Vainqueur du test de Stiftung Warentest (bien, note 2,0, numéro 2/2024). C’est l’ampoule précédente avec le Bridge normal qui a été testée",
          "Avec MotionAware, vos ampoules deviennent un détecteur de mouvement : à partir de trois ampoules dans une pièce, la lumière s’allume quand vous entrez",
          "Se tamise très bas, jusqu’à 0,2 %, et offre de nombreuses nuances de blanc, du très chaud au froid",
          "Un grand système : interrupteurs, détecteurs de mouvement, rubans lumineux et lampes d’extérieur s’y ajoutent, aussi avec Alexa, Google et Apple Home"
        ],
        fuer: "Mon conseil si vous voulez rendre votre lumière vraiment intelligente. J’utilise moi-même Philips Hue, j’en parle dans «\u202fMon expérience\u202f».",
        hinweis: "C’est le kit le plus cher présenté ici. Selon le fabricant, la nouvelle génération d’ampoules consomme environ 40 % d’électricité en moins que celle testée. Selon le fabricant, le Bridge Pro commande plus de 150 ampoules et se connecte à votre routeur par câble ou en Wi-Fi.",
        link: amazon("philips hue starter set bridge pro e27", "philips hue kit de démarrage bridge pro e27")
      },
      {
        gruppe: "Sans centrale",
        stufe: "Petit budget", spanne: "directement en Wi-Fi",
        name: "WiZ A60 E27 Tunable White & Color", preis: 15, preisText: "env. 12 à 18 € pièce", empfohlen: true,
        punkte: [
          "Bien chez Stiftung Warentest (note 2,2, numéro 2/2024) : la meilleure ampoule sans centrale, meilleur rapport qualité-prix et conseil environnement",
          "Se connecte directement à votre Wi-Fi, vous n’achetez rien en plus",
          "Couleur et nuances de blanc du chaud au froid, avec programmes et scènes dans l’application WiZ",
          "Fonctionne avec Alexa et Google, via Matter aussi avec Apple Home"
        ],
        fuer: "Pour vous si vous voulez commencer à petit prix et sans accessoires, par exemple avec une ou deux ampoules.",
        hinweis: "Votre routeur doit avoir du Wi-Fi 2,4 GHz, c’est le cas de presque tous. Quand Internet était coupé dans le test de Stiftung Warentest, les ampoules Wi-Fi ne réagissaient qu’avec du retard.",
        link: amazon("wiz a60 e27 color", "wiz a60 e27 couleur")
      },
      {
        gruppe: "Sans centrale",
        stufe: "Haut de gamme", spanne: "en Bluetooth, Bridge plus tard",
        name: "Philips Hue White & Color Ambiance E27 (en Bluetooth)", preis: 50, preisText: "env. 45 à 60 € pièce",
        punkte: [
          "La même ampoule que dans le kit de démarrage avec Bridge Pro. Sans Bridge, vous la commandez en Bluetooth directement avec votre téléphone",
          "Vous commandez ainsi jusqu’à dix ampoules, sans aucun accessoire",
          "Vous pouvez ajouter le Bridge à tout moment, vous avez alors toutes les fonctions"
        ],
        fuer: "Pour vous si vous voulez d’abord essayer Philips Hue avec une ou deux ampoules.",
        hinweis: "En Bluetooth, cela ne marche qu’à proximité, selon le fabricant à environ dix mètres, et pas à distance. Les programmes et routines sont aussi limités sans Bridge.",
        link: amazon("philips hue white and color ambiance e27", "philips hue white and color ambiance e27")
      }
    ],
    fragen: [
      { f: "Avec ou sans centrale : qu’est-ce qui me convient ?", a: "Sans centrale, c’est le plus simple pour commencer : vous vissez l’ampoule, la connectez au Wi-Fi ou au téléphone, et c’est fini. Cela convient si vous voulez d’abord rendre une ou deux lampes intelligentes. Avec centrale, vous payez plus au départ, mais vous avez le plus de fonctions et beaucoup d’accessoires, par exemple des interrupteurs et des détecteurs de mouvement. Cela vaut surtout la peine si vous voulez équiper plusieurs pièces. Avec Philips Hue, vous pouvez aussi commencer sans Bridge et l’ajouter plus tard." },
      { f: "Philips Hue fonctionne-t-il sans Bridge ?", a: "Oui, en Bluetooth. Vous commandez alors jusqu’à dix ampoules directement avec votre téléphone, selon le fabricant à environ dix mètres. Cela ne marche pas à distance, et vous ne pouvez utiliser les programmes, routines et accessoires que de façon limitée. La plupart des ampoules Hue fonctionnent des deux façons. Vous pouvez donc ajouter le Bridge à tout moment et garder vos ampoules." },
      { f: "Bridge ou Bridge Pro ?", a: "Le Bridge normal commande jusqu’à 50 ampoules et 12 accessoires comme des interrupteurs, et il se branche par câble à votre routeur. Selon le fabricant, le Bridge Pro gère plus de 150 ampoules et 50 accessoires, il se connecte aussi en Wi-Fi, et lui seul permet MotionAware. Si vous n’avez pas besoin de MotionAware, le Bridge normal suffit pour commencer, comme dans le kit Essential." },
      { f: "Qu’est-ce que MotionAware ?", a: "Avec cette fonction, vos ampoules Hue deviennent elles-mêmes un détecteur de mouvement. Quand quelqu’un bouge dans la pièce, les signaux radio entre les ampoules changent, et la lumière s’allume. Il vous faut le Bridge Pro et au moins trois ampoules Hue dans la même pièce, mais pas de détecteur de mouvement en plus. Selon le fabricant, presque toutes les ampoules Hue sont compatibles, seuls certains anciens modèles ne le sont pas. MotionAware ne coûte rien de plus pour votre lumière, seules les alertes sur le téléphone demandent un abonnement Hue. Les murs entre les ampoules peuvent gêner. Et pour que votre animal n’allume pas la lumière, réglez MotionAware moins sensible dans l’application." },
      { f: "Les ampoules connectées consomment-elles de l’électricité quand elles sont éteintes ?", a: "Oui, un peu, car elles attendent vos commandes. Dans l’UE, une ampoule connectée ne doit consommer pour cela que 0,5 watt au maximum depuis septembre 2021. Cela fait un peu plus de 4 kilowattheures par an, à 37 centimes le kilowattheure, la moyenne en Allemagne, soit environ 1,60 € par ampoule. Selon le fabricant, les ampoules du kit Hue avec Bridge Pro n’ont besoin pour cela que de 0,1 watt, la Hue Essential moins chère de 0,5 watt. Pour une lampe presque jamais allumée, par exemple dans un débarras, prenez plutôt une ampoule LED normale." },
      { f: "Que se passe-t-il si j’éteins l’interrupteur normal ?", a: "L’ampoule n’a alors plus de courant et ne réagit plus à l’application, au programme ni à la voix. Laissez donc l’interrupteur allumé et commandez avec l’application ou un interrupteur connecté. L’interrupteur Hue se colle simplement au mur, par exemple juste à côté de l’ancien. Il existe aussi des modules qui se placent derrière l’interrupteur normal. Mais pour cela, vous travaillez sur le circuit électrique : dans le doute, confiez-le à un électricien." },
      { f: "Que se passe-t-il si Internet est coupé ?", a: "Selon le fabricant, avec le Hue Bridge, vous pouvez commander votre lumière même sans Internet. Dans le test de Stiftung Warentest, les ampoules Wi-Fi, en revanche, ne réagissaient qu’avec du retard quand Internet était coupé. Et votre interrupteur normal continue de fonctionner dans tous les cas." },
      { f: "Vont-elles dans mes lampes ?", a: "Regardez le culot de votre ancienne ampoule. La plupart des lampes ont le grand culot à vis E27, et les ampoules présentées ici sont faites pour lui. Hue et WiZ existent aussi pour le petit culot E14 et pour les spots GU10 : vérifiez alors le culot dans le nom à l’achat." },
      { f: "Et en Autriche et en Suisse ?", a: "En Autriche, tout est comme en Allemagne. En Suisse, les ampoules s’adaptent de la même façon, E27, E14 et GU10 sont les mêmes culots. Vous trouvez aussi Philips Hue et WiZ chez les revendeurs suisses. Si vous commandez en Allemagne, regardez la fiche du bloc d’alimentation du Bridge : une fiche Europe plate à deux fines broches va aussi dans les prises suisses, une grosse fiche Schuko non." },
      { f: "Comment avez-vous choisi les ampoules ?", a: "J’utilise moi-même Philips Hue depuis environ dix ans. Pour la sélection, j’ai lu le test de Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne (numéro 2/2024, dix ampoules). Seules deux y étaient bonnes : Philips Hue avec Bridge, vainqueur du test, et WiZ, meilleure ampoule sans centrale. Comme le test a presque trois ans, j’ai aussi lu des tests plus récents des sites tech nextpit, TechRadar et PCWorld, par exemple sur Hue Essential et MotionAware, et comparé les données des fabricants. Je n’ai pas trouvé les nouvelles ampoules IKEA sur Amazon, vous les trouvez directement chez IKEA." }
    ],
    vergleich: {
      vorherTitel: "Avec des ampoules normales",
      vorher: [
        "Le soir, vous cherchez l’interrupteur à tâtons dans le noir",
        "La lumière est toujours la même, que vous cuisiniez ou vous détendiez",
        "Une fois dehors, vous vous rappelez qu’une lumière est encore allumée à la maison"
      ],
      nachher: [
        "La lumière s’allume toute seule selon votre programme ou quand vous bougez",
        "D’un geste, vous obtenez la bonne ambiance lumineuse",
        "D’un geste dans l’application, vous éteignez tout, même à distance"
      ]
    },
    video: "smarte-lampen",
    preisstand: "Oktober 2026"
  },
  {
    id: "sparduschkopf",
    name: "Pommeau de douche économique",
    kurzname: "un pommeau économique",
    kategorie: "Maison",
    symbol: "🚿",
    bild: "",
    kurz: "Un pommeau de douche qui laisse passer nettement moins d’eau chaude. Vous vous douchez comme d’habitude et payez quand même moins.",
    warum: "Les pommeaux anciens laissent souvent passer 10 à 15 litres par minute, les bons pommeaux économiques moins de 9. Et chaque litre que vous ne consommez pas n’a pas non plus besoin d’être chauffé. Cela économise de l’eau et de l’énergie, sans que vous ayez à faire quoi que ce soit. Vous changez le pommeau vous-même en quelques minutes, le plus souvent sans aucun outil.",
    statt: "Au lieu de 15 litres d’eau chaude par minute",
    nutzen: "Moins d’eau chaude à chaque douche, pour une douche aussi longue.",
    spart: ["geld"],
    fuer: [
      "Votre pommeau est déjà ancien et laisse passer beaucoup d’eau",
      "Votre eau est chauffée à l’électricité, c’est là que vous économisez le plus",
      "Vous voulez économiser sans vous doucher moins longtemps ni plus froid"
    ],
    nachteile: [
      "Avec les anciens chauffe-eau instantanés hydrauliques, cela ne marche souvent pas : ils ne s’allument généralement qu’à partir d’environ 8 litres par minute",
      "Si votre pommeau laisse déjà passer moins de 10 litres par minute, vous économisez peu",
      "Il ne vous fait gagner ni temps ni effort. Ici, il s’agit seulement d’argent, d’eau et d’énergie"
    ],
    modelle: [
      {
        stufe: "Petit budget", spanne: "jusqu’à 30 €",
        name: "Duravit 3jet 110 MinusFlow", preis: 25, empfohlen: true,
        punkte: [
          "Bien chez Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne (note 1,9, numéro 4/2023), à égalité avec les meilleurs du test",
          "Laisse passer 8,8 litres par minute lors du test, un limiteur de débit est intégré",
          "Trois types de jet, vous passez de l’un à l’autre avec une molette",
          "Picots souples sur les buses : le calcaire s’enlève simplement en frottant"
        ],
        fuer: "Pour la plupart des gens. Mon conseil, parce qu’il a obtenu dans le test un aussi bon résultat que les modèles plus chers.",
        hinweis: "Il laisse passer un peu plus d’eau que les deux autres, presque 9 litres par minute. La différence est faible.",
        link: amazon("duravit 3jet 110 minusflow", "duravit 3jet 110 minusflow")
      },
      {
        stufe: "Milieu de gamme", spanne: "de 30 à 50 €",
        name: "Hansgrohe Pulsify Select S EcoSmart", preis: 38,
        punkte: [
          "Bien chez Stiftung Warentest (note 1,9, numéro 4/2023)",
          "Laisse passer 8,6 litres par minute lors du test, avec limiteur de débit",
          "Trois types de jet, vous en changez d’une pression sur un bouton",
          "Convient aussi aux chauffe-eau instantanés, selon le fabricant"
        ],
        fuer: "Si vous préférez changer de jet avec un bouton.",
        hinweis: "À l’achat, vérifiez que « EcoSmart » figure dans le nom. C’est cette version qui a été testée, celle sans EcoSmart laisse passer nettement plus d’eau selon le fabricant.",
        link: amazon("hansgrohe pulsify select s ecosmart", "hansgrohe pulsify select s 105 ecosmart")
      },
      {
        stufe: "Haut de gamme", spanne: "à partir de 50 €",
        name: "Grohe Vitalio SmartActive 130 Cube", preis: 70,
        punkte: [
          "Bien chez Stiftung Warentest (numéro 4/2023)",
          "Laisse passer le moins d’eau des trois dans le test, un peu plus de 8 litres par minute",
          "Douchette carrée avec trois types de jet",
          "Facile à nettoyer et à détartrer"
        ],
        fuer: "Si la forme carrée vous plaît.",
        hinweis: "Plus cher ne veut pas dire meilleur ici : dans le test, il n’a pas fait mieux que le Duravit bon marché. Il n’économise pas non plus beaucoup plus d’eau. Sur Amazon, elle s’appelle parfois « 150 Cube ». Ce qui compte, c’est le numéro d’article 26595000.",
        link: amazon("grohe vitalio smartactive 130 cube", "grohe vitalio smartactive 130 cube")
      }
    ],
    fragen: [
      { f: "Combien est-ce que j’économise vraiment ?", a: "Cela dépend de ce que laisse passer votre pommeau actuel, de la durée de vos douches et de la façon dont votre eau est chauffée. Vous économisez le plus si elle est chauffée à l’électricité, par exemple dans un chauffe-eau instantané. Dans un cas type, Stiftung Warentest est arrivé à jusqu’à 345 euros par personne et par an. Le calculateur vous montre combien cela fait chez vous." },
      { f: "Est-ce que ça marche avec mon chauffe-eau instantané ?", a: "Avec un chauffe-eau instantané électronique, en général oui. Mais les anciens appareils hydrauliques ne s’allument généralement qu’à partir d’environ 8 litres par minute. Les trois modèles présentés ici sont juste au-dessus dans le test, cela peut suffire ou non. Voici comment reconnaître le type : les hydrauliques ont le plus souvent un simple interrupteur à deux positions, sur les électroniques vous réglez la température en degrés. La plaque signalétique vous le dit avec certitude. Avec un appareil hydraulique, commandez de préférence avec droit de retour et essayez. Si l’eau reste froide ou tiède, renvoyez le pommeau." },
      { f: "Est-ce qu’il va sur mon flexible ?", a: "Presque toujours. Les flexibles de douche et les douchettes ont un filetage normalisé d’un demi-pouce. Vous n’avez pas besoin d’y faire attention à l’achat." },
      { f: "Comment changer le pommeau ?", a: "Dévissez l’ancien pommeau du flexible dans le sens inverse des aiguilles d’une montre, le plus souvent à la main. S’il est bloqué, prenez une pince et mettez un chiffon doux entre les deux pour ne rien rayer. Vérifiez le joint dans l’écrou du flexible et vissez le nouveau pommeau à la main. Gardez l’ancien pommeau, vous pourrez le revisser en déménageant." },
      { f: "Est-ce qu’on se douche moins bien avec ?", a: "À peine. Stiftung Warentest a fait doucher des testeurs avec tous les pommeaux et a aussi vérifié avec quelle facilité le shampoing se rince des cheveux longs. Ce n’est qu’avec les modèles très économes, à 7 litres par minute ou moins, que cela prend un peu plus de temps. Les trois présentés ici laissent passer davantage." },
      { f: "Mon eau est très calcaire. À quoi faire attention ?", a: "Choisissez un pommeau avec des picots souples sur les buses. Vous enlevez alors simplement le calcaire avec le doigt. Stiftung Warentest a pris en compte ces picots dans sa note. Selon les fabricants, les trois modèles présentés ici ont cette fonction anticalcaire." },
      { f: "Pourquoi le test date-t-il de 2023 ?", a: "Stiftung Warentest a testé les pommeaux économiques pour la dernière fois en mars 2023 (numéro 4/2023), il n’existe pas de test plus récent. Deux des modèles les plus économes de l’époque ne sont plus en vente. Les trois présentés ici sont toujours disponibles." },
      { f: "Pourquoi le pommeau d’Ikea n’est-il pas là ?", a: "L’Ikea Brogrund a obtenu « bien » chez Stiftung Warentest et était l’un des bons pommeaux les moins chers du test. Mais on ne le trouve que chez Ikea, je ne peux donc pas le mettre en lien ici. Si vous y passez de toute façon, c’est un bon choix." }
    ],
    profitipp: {
      titel: "D’abord mesurer, ensuite changer",
      text: "Ainsi, vous savez en une minute si un pommeau économique vaut vraiment le coup pour vous :",
      liste: [
        "Ouvrez la douche comme d’habitude",
        "Laissez-la couler 30 secondes dans un seau",
        "Multipliez les litres du seau par deux : c’est le nombre de litres par minute que laisse passer votre pommeau",
        "Au-delà de 10, le changement vaut le coup"
      ]
    },
    rechner: "sparduschkopf",
    video: "sparduschkopf"
  },
  {
    id: "balkonkraftwerk",
    name: "Kit solaire de balcon",
    kurzname: "un kit solaire de balcon",
    kategorie: "Maison",
    symbol: "☀️",
    bild: "",
    kurz: "Deux panneaux solaires avec une fiche. En journée, ils produisent de l’électricité, et vous la consommez directement chez vous.",
    warum: "Un kit solaire plug and play (centrale solaire de balcon) se compose de deux panneaux solaires et d’un petit onduleur. Vous le branchez sur une prise, et ce qui fonctionne chez vous utilise d’abord l’électricité venue de dehors. Le réfrigérateur, la box internet et les appareils en veille consomment toute la journée, et sur une année, cela finit par compter. En Allemagne, vous pouvez brancher un kit jusqu’à 960 watts de puissance des panneaux sur une prise normale et le déclarer simplement en ligne. Avec une batterie en plus, vous utilisez aussi l’électricité le soir.",
    statt: "Au lieu d’acheter chaque kilowattheure",
    nutzen: "Votre propre électricité en journée, une facture plus petite chaque année.",
    spart: ["geld"],
    fuer: [
      "Vous avez un balcon, une terrasse ou un toit plat bien ensoleillé, idéalement orienté au sud",
      "Chez vous, on consomme aussi de l’électricité en journée, par exemple en télétravail",
      "Vous êtes locataire : en Allemagne, le bailleur ne peut désormais refuser que si c’est déraisonnable pour lui",
      "Vous êtes peu chez vous en journée et avez plutôt besoin d’électricité le soir : un kit avec batterie vous convient alors"
    ],
    nachteile: [
      "Les kits présentés ne comprennent pas de support pour les panneaux. Vous l’achetez en plus, adapté à votre balcon, votre toit ou votre jardin",
      "Sur un garde-corps de balcon, il produit nettement moins qu’incliné, et personne n’a testé de façon indépendante les supports pour garde-corps",
      "Sans batterie, ce que vous ne consommez pas tout de suite part dans le réseau, et en Allemagne cela ne rapporte généralement rien",
      "Pour la Suisse, il n’y a pour le moment pas de kit adapté sur Amazon, car d’autres règles s’y appliquent. Je cherche une solution",
      "Une batterie pour le soir coûte plus cher que tout le kit et se rentabilise donc plus lentement. Si vous avez surtout besoin d’électricité en journée, vous pouvez vous en passer"
    ],
    gruppen: [
      { name: "Sans batterie", text: "Deux panneaux et un petit onduleur pour la prise. C’est bon marché et vous récupérez vite votre argent. Vous utilisez l’électricité pendant que le soleil brille, et le surplus part dans le réseau.", ohne: "speicher" },
      { name: "Avec batterie", text: "Ces batteries ont déjà l’onduleur intégré : les panneaux se branchent sur la batterie, et seule la batterie va dans la prise. Le surplus de midi charge la batterie, et le soir vous utilisez vous-mêmes l’électricité. Si vous avez déjà un kit, vous pouvez généralement garder ses panneaux." }
    ],
    // Stand 01.11.2026: Keins dieser Modelle ist bei amazon.fr lieferbar, darum zeigt die Seite diese Hinweiskarte statt der Modelle.
    // Wird eins lieferbar: keinModell löschen, seinen Link prüfen und die übrigen Modelle entfernen.
    keinModell: { stufe: "amazon.fr", titel: "Pas disponible pour le moment", text: "Les kits et les batteries que je choisirais (Solakon onLite 900 W, SUNNIVA 920 W, Zendure SolarFlow 800 Plus, Solakon ONE et Anker SOLIX Solarbank 3 Pro) ne sont pas disponibles sur amazon.fr en ce moment, ou seulement à un prix bien plus élevé. Dès qu’un kit que je peux vous recommander y sera disponible, vous le trouverez ici. D’ici là, le calculateur et les questions ci-dessous vous aident à choisir." },
    modelle: [
      {
        gruppe: "Sans batterie",
        stufe: "Petit budget", spanne: "moins de 400 €",
        name: "Solakon onLite 900 W", preis: 270, preisText: "ca. 250 bis 300 €", empfohlen: true,
        punkte: [
          "900 watts de puissance des panneaux : en Allemagne, vous pouvez donc le brancher sur une prise normale",
          "Onduleur de 800 watts, c’est le maximum en Allemagne",
          "Son grand frère, l’onBasic de 1 000 watts, a été bon lors du test en conditions réelles de home&smart en 2026",
          "Solakon vend le kit lui-même sur Amazon"
        ],
        fuer: "Mon conseil pour une prise normale : il reste sous les 960 watts, et Solakon le vend lui-même.",
        hinweis: "Personne n’a encore testé ce kit de façon indépendante. Aucun support pour les panneaux n’est fourni. Il n’est pas conçu pour la Suisse.",
        link: amazon("solakon onlite 900", "solakon onlite 900"),
        alternativen: [
          { name: "SUNNIVA 920 W avec onduleur EcoFlow", preis: 289, text: "Avec 920 watts, il convient lui aussi à une prise normale. smartzone.de a mesuré lui-même l’onduleur EcoFlow : bien fini, économe en veille et pas trop chaud même à pleine charge. Ici aussi, il manque un test du kit complet, et aucun support n’est fourni.", link: amazon("sunniva 920 ecoflow", "sunniva 920 ecoflow") }
        ]
      },
      {
        gruppe: "Avec batterie",
        stufe: "Petit budget", spanne: "moins de 500 €",
        name: "Zendure SolarFlow 800 Plus", preis: 449, preisText: "ca. 400 bis 500 €", empfohlen: true,
        punkte: [
          "Meilleur rapport qualité-prix chez TechStage (heise) et chez smartzone.de",
          "Batterie de 1,92 kWh qui perd peu : smartzone.de n’a mesuré qu’environ 16 % de pertes à la charge et à la décharge",
          "Deux entrées pour panneaux et un onduleur de 800 watts intégré, également homologué en Autriche",
          "Avec la tête de lecture de Zendure sur le compteur électrique, pas besoin d’électricien"
        ],
        fuer: "Mon conseil pour un balcon avec deux panneaux : il coûte le moins cher et obtient pourtant de bons résultats aux tests.",
        hinweis: "Les panneaux et la tête de lecture ne sont pas fournis. Prenez deux panneaux de 960 watts au maximum au total, ou ceux de votre kit. Il n’a pas de prise de secours en cas de coupure. Stiftung Warentest ne l’a pas testé. Elle a jugé insuffisant le SolarFlow 800 Pro, plus grand, en mars 2026, surtout à cause de trop fortes interférences.",
        link: amazon("zendure solarflow 800 plus", "zendure solarflow 800 plus")
      },
      {
        gruppe: "Avec batterie",
        stufe: "Milieu de gamme", spanne: "de 500 à 1 000 €",
        name: "Solakon ONE avec panneaux de 900 watts", preis: 895, preisText: "ca. 850 bis 1.000 €",
        punkte: [
          "TechStage, PC-WELT et techtest.org l’ont testé et le recommandent",
          "Livré avec deux panneaux de 900 watts au total, ce qui convient à une prise normale",
          "Batterie de 2,11 kWh et quatre entrées pour panneaux",
          "Prise sur l’appareil qui continue de fournir du courant en cas de coupure"
        ],
        fuer: "Pour vous, si vous voulez tout en un seul pack et aimeriez une prise de secours en cas de coupure.",
        hinweis: "Stiftung Warentest ne l’a pas testé. Aucun support pour les panneaux n’est fourni, et une tête de lecture pour le compteur électrique s’achète en plus. En Autriche, il ne figure pas sur la liste des onduleurs, le Zendure y est donc le choix le plus sûr.",
        link: amazon("solakon one", "solakon one")
      },
      {
        gruppe: "Avec batterie",
        stufe: "Haut de gamme", spanne: "à partir de 900 €",
        name: "Anker SOLIX Solarbank 3 Pro", preis: 899, preisText: "ca. 900 bis 1.000 €",
        punkte: [
          "Meilleure des cinq batteries chez Stiftung Warentest, la seule jugée satisfaisante (numéro 4/2026)",
          "ComputerBase et Notebookcheck saluent aussi sa technique",
          "Grande batterie de 2,69 kWh et quatre entrées pour des panneaux jusqu’à 3 600 watts",
          "Prise de secours sur l’appareil en cas de coupure, jusqu’à 1 200 watts"
        ],
        fuer: "Pour vous, si vous voulez brancher quatre panneaux. C’est là qu’il en tire le plus.",
        hinweis: "Pour deux panneaux, il est trop grand : une batterie moins chère se rentabilise plus vite. Avec quatre panneaux, il doit être branché sur une prise d’injection dédiée. Les panneaux et un compteur pour le tableau électrique ne sont pas fournis : achetez aussi le Smart Meter d’Anker et faites-le installer en même temps, quand l’électricien qualifié raccorde la prise.",
        link: amazon("anker solix solarbank 3 pro", "anker solix solarbank 3 pro")
      }
    ],
    ohneTeuer: { stufe: "Kits plus chers", titel: "Pas de recommandation", text: "Un kit plus cher sans batterie n’apporte guère plus d’électricité sur une prise normale, car plus de 960 watts de panneaux et 800 watts d’onduleur n’y sont pas autorisés. Pour consommer davantage votre propre électricité, il faut une batterie : voyez le groupe « Avec batterie »." },
    fragen: [
      { f: "Combien est-ce que j’économise vraiment ?", a: "Cela dépend de l’emplacement des panneaux, de leur orientation et de votre consommation en journée. Les exemples de calcul de la Verbraucherzentrale NRW (association de consommateurs), de C.A.R.M.E.N. et d’eza! arrivent à environ 100 à 150 euros par an pour un kit de 800 watts. Il rapporte le plus quand les panneaux sont inclinés vers le sud et que beaucoup d’appareils tournent chez vous en journée. Avec une batterie, vous économisez davantage, mais elle coûte aussi plus cher. Le calculateur vous montre combien cela représente pour vous, avec batterie aussi." },
      { f: "Comment avez-vous choisi les kits et les batteries ?", a: "Stiftung Warentest a testé huit kits en 2025. Les deux bons, de GreenSolar et de Heckert, ne sont plus disponibles sur Amazon dans la version testée. J’ai donc cherché sur Amazon en Allemagne des kits sans batterie actuellement disponibles, et pour chacun des tests sur d’autres sites. Je n’ai trouvé un test que pour le Solakon onBasic de 1 000 watts. Il a été bon lors du test en conditions réelles de home&smart, mais sa puissance des panneaux est trop élevée pour une prise normale. C’est pourquoi j’ai choisi son petit frère de 900 watts. Un test du kit complet manque pour les deux kits présentés. smartzone.de a toutefois mesuré lui-même l’onduleur du kit SUNNIVA, et l’a salué. Pour les batteries, j’ai lu les tests de TechStage (heise), Notebookcheck, ComputerBase, PC-WELT, techtest.org, smartzone.de et Stiftung Warentest. Je n’ai retenu que des batteries qui ont obtenu de bons résultats dans plusieurs tests et qui sont disponibles sur Amazon en Allemagne. Stiftung Warentest a jugé l’Anker le meilleur, elle n’a pas testé les deux autres." },
      { f: "Une prise normale suffit-elle ?", a: "En Allemagne, oui, tant que les panneaux ne dépassent pas 960 watts au total. C’est ce que prévoit la norme en vigueur depuis décembre 2025. Les deux kits présentés restent en dessous. Beaucoup de kits sur Amazon ont 1 000 watts ou plus. Selon la norme, ils doivent être branchés sur une prise d’injection dédiée, par exemple de Wieland, installée par un électricien qualifié. Certains programmes d’aide des villes exigent une telle fiche même pour des kits plus petits. Vérifiez donc avant si vous voulez une aide." },
      { f: "Que dois-je déclarer en Allemagne ?", a: "Seulement le Marktstammdatenregister de la Bundesnetzagentur (le registre officiel allemand des installations de production), avec un simple formulaire en ligne. Vous n’avez plus besoin de le déclarer séparément au gestionnaire de réseau. Si vous avez encore un ancien compteur, il peut tourner à l’envers pour le moment, jusqu’à ce que le gestionnaire de réseau le remplace. Sont autorisés 800 watts à l’onduleur et des panneaux jusqu’à 2 000 watts au total. Prévenez aussi votre assurance habitation et votre responsabilité civile. Avec une batterie, il y a un peu plus à faire, voir la question suivante." },
      { f: "Que faut-il savoir en Allemagne avec une batterie ?", a: "Vous inscrivez aussi la batterie au Marktstammdatenregister, où elle compte comme une unité à part. Beaucoup de gestionnaires de réseau veulent en plus qu’elle leur soit déclarée par un court formulaire, et certains exigent qu’un électricien la raccorde. Renseignez-vous donc auprès de votre gestionnaire de réseau avant l’achat. Une norme propre à ces petites batteries est encore en préparation. Si elle doit être branchée sur une prise normale, elle peut injecter au maximum 800 watts dans le réseau, et les panneaux ne doivent pas dépasser 960 watts au total." },
      { f: "Comment la batterie sait-elle combien d’électricité vous consommez en ce moment ?", a: "Un petit appareil le mesure au compteur électrique. Le plus simple est une tête de lecture qui tient avec un aimant sur votre compteur numérique. Vous la posez vous-même, sans électricien. Pour beaucoup de compteurs, il faut un code PIN. Vous l’obtenez gratuitement auprès du gestionnaire du comptage, le plus souvent votre gestionnaire de réseau. Un compteur dans le tableau électrique, comme celui fourni avec certaines batteries, ne peut être installé que par un électricien qualifié." },
      { f: "Où placer la batterie ?", a: "De préférence à l’abri de la pluie et du plein soleil, par exemple sous un auvent ou dans le garage, et assez près des panneaux pour que les câbles suffisent. Les batteries sont certes homologuées pour l’extérieur, mais chez Stiftung Warentest, l’eau est entrée dans la prise de l’appareil pour quatre sur cinq lors d’une pluie battante." },
      { f: "Ai-je le droit en tant que locataire ?", a: "Oui, vous devez demander avant. En Allemagne, depuis octobre 2024, les bailleurs et les copropriétés ne peuvent toutefois refuser que si c’est déraisonnable pour eux. Ne pas aimer l’aspect ne suffit pas comme raison." },
      { f: "De quel support ai-je besoin ?", a: "Les kits présentés n’en comprennent pas. Achetez-en un qui convient exactement à votre emplacement : garde-corps, mur, toit plat ou jardin. Il n’existe malheureusement pas de tests indépendants des supports seuls. Stiftung Warentest a testé en 2025 des kits avec support pour toit plat, et pour cinq sur huit, les supports ont plié ou cassé lors de la tempête simulée. Sur un garde-corps, c’est plus délicat, car il peut y avoir des gens ou des voitures en dessous. Si vous hésitez, faites-le monter par une entreprise spécialisée." },
      { f: "Une batterie vaut-elle le coup ?", a: "Avec deux panneaux, elle se rentabilise plus lentement que le kit seul, car elle coûte plus cher que le kit. Selon la Verbraucherzentrale et l’association TÜV, elle vaut plutôt le coup pour de plus grandes installations, par exemple avec quatre panneaux. Elle rapporte le plus si vous consommez peu en journée et davantage le soir. Faites le calcul dans le calculateur : choisissez « Avec batterie ». Vous voyez alors aussi au bout de combien d’années la batterie seule est rentabilisée." },
      { f: "Que dit Stiftung Warentest des batteries ?", a: "Elle a testé cinq batteries en mars 2026. La meilleure était l’Anker, la seule jugée satisfaisante. Trois étaient insuffisantes, parce qu’elles émettaient trop d’interférences. Celles-ci peuvent par exemple perturber le Wi-Fi. Pour quatre sur cinq, l’eau est entrée dans la prise de l’appareil lors d’une pluie battante. D’autres sites de test ont testé plus de batteries et en ont bien noté beaucoup. Dans les tests que j’ai lus, les interférences n’ont toutefois pas été mesurées." },
      { f: "Et en Suisse ?", a: "Les règles y sont plus strictes : 600 watts au maximum par compteur électrique, une fiche suisse et une protection différentielle. Avant la mise en marche, vous déclarez l’installation par écrit à votre gestionnaire de réseau, et en tant que locataire vous avez besoin de l’accord du bailleur. En échange, le gestionnaire de réseau doit reprendre et rémunérer l’électricité que vous injectez dans le réseau. Une batterie y est autorisée si l’ensemble injecte au maximum 600 watts et qu’une déclaration de conformité existe pour tout le kit. Indiquez-la alors lors de la déclaration. Les kits et batteries présentés fournissent jusqu’à 800 watts et ont une fiche allemande : en Suisse, ils ne sont pas autorisés tels quels. Un kit conçu pour la Suisse n’est pas disponible sur Amazon pour le moment. Je cherche un bon kit que vous pourrez aussi acheter en Suisse." },
      { f: "Et en Autriche ?", a: "En Autriche, 800 watts sont autorisés. Vous n’avez pas besoin d’autorisation, mais vous devez déclarer l’installation à votre gestionnaire de réseau deux semaines avant la mise en marche. Les gestionnaires de réseau ne sont pas tous d’accord sur la question de savoir si une fiche Schuko normale (type F) suffit. Renseignez-vous donc auprès du vôtre. En copropriété, l’accord des autres propriétaires est réputé donné s’ils ne s’y opposent pas dans les deux mois. Une batterie est autorisée si l’ensemble peut fournir au maximum 800 watts. Ce qui compte, c’est ce que l’onduleur peut faire selon sa fiche technique. S’il est seulement limité à 800 watts par une application, cela ne suffit pas à certains gestionnaires de réseau. Mentionnez donc la batterie lors de la déclaration et joignez la fiche technique." },
      { f: "Quelle batterie convient en Autriche ?", a: "Le mieux, c’est le Zendure. Il figure avec 800 watts sur la liste autrichienne des onduleurs, et selon le fabricant aussi, 800 watts sont son maximum. Votre gestionnaire de réseau n’a pas besoin de vérifier à nouveau un par un les appareils de cette liste. L’Anker y figure aussi, mais selon sa fiche technique il peut fournir jusqu’à 1 200 watts. Seul un réglage dans l’application le limite à 800 watts, renseignez-vous donc d’abord auprès de votre gestionnaire de réseau. Je n’ai pas trouvé le Solakon ONE sur la liste." },
      { f: "Est-ce valable aussi dans d’autres pays ?", a: "Non. Les règles présentées ici valent pour l’Allemagne, l’Autriche et la Suisse. Si vous habitez ailleurs, demandez avant l’achat à votre gestionnaire de réseau ce qui est autorisé." }
    ],
    profitipp: {
      titel: "Utilisez l’électricité à midi",
      text: "Sans batterie, vous n’économisez qu’avec l’électricité que vous consommez au même moment. Voici comment en utiliser davantage vous-même :",
      liste: [
        "Faites tourner le lave-vaisselle et le lave-linge vers midi, quand le soleil est le plus fort",
        "Si vous êtes absent en journée, lancez-les avec le départ différé ou une minuterie",
        "Rechargez les batteries, comme celle du vélo électrique, plutôt à midi que le soir"
      ]
    },
    rechner: "balkonkraftwerk",
    video: "balkonkraftwerk",
    preisstand: "Oktober 2026"
  },
  {
    id: "akkusauger",
    name: "Aspirateur balai sans fil",
    kurzname: "un aspirateur balai sans fil",
    kategorie: "Maison",
    symbol: "🧹",
    bild: "",
    kurz: "Un aspirateur léger sans fil. Il est accroché au mur ou posé sur sa station de charge, chargé, et d’un geste vous en faites un aspirateur à main.",
    warum: "Pas de câble, pas de prise à changer, pas de gros aspirateur à sortir d’abord du placard. Vous le décrochez simplement du mur et vous aspirez, même si ce ne sont que les miettes sous la table. En aspirateur à main, vous passez sur le canapé, dans l’escalier et dans la voiture.",
    statt: "Au lieu du câble et de l’aspirateur lourd",
    nutzen: "Le décrocher, aspirer, le raccrocher.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Vous aspirez souvent entre deux, par exemple des miettes ou des poils d’animaux",
      "Vous avez des escaliers ou plusieurs étages",
      "Vous voulez aussi nettoyer vite le canapé et la voiture, ou un robot aspirateur laveur est trop cher pour vous en ce moment"
    ],
    nachteile: [
      "L’autonomie indiquée par les fabricants vaut généralement pour la puissance la plus faible. En puissance maximale, c’est souvent seulement 10 à 15 minutes. Si vous avez un grand logement, choisissez un modèle avec une deuxième batterie",
      "Le bac à poussière est petit, généralement moins d’un litre. Le vider fait un peu de poussière",
      "Au bout de quelques années, la batterie faiblit, et une neuve coûte en plus. Vérifiez qu’il existe des batteries de rechange"
    ],
    erfahrung: {
      titel: "Mon expérience",
      bild: "", bildText: "Photo\u202f: votre aspirateur balai",
      text: "Si vous avez un aspirateur robot, vous n’aurez de toute façon que très rarement besoin d’un aspirateur balai. Un modèle bon marché suffit donc. J’ai par exemple le Bulelink Zenith G10 et j’en suis très satisfait."
    },
    modelle: [
      {
        stufe: "Petit budget", spanne: "jusqu’à 200\u00a0€",
        name: "Bulelink Zenith G10", preis: 130, preisText: "env. 115 à 150\u00a0€", empfohlen: true,
        punkte: [
          "«\u202fBien\u202f» chez testit.de (note 2,4, avril 2026)",
          "Lors du test, la batterie a tenu environ une heure au niveau le plus faible",
          "La batterie s’enlève",
          "Tient debout tout seul, pas besoin de support mural"
        ],
        fuer: "Mon conseil si vous avez déjà un aspirateur robot. Je l’utilise moi-même, j’en parle dans «\u202fMon expérience\u202f».",
        hinweis: "Chez testit.de, des cheveux se sont enroulés autour de la brosse et de la saleté est restée le long des bords.",
        link: amazon("bulelink zenith g10")
      },
      {
        stufe: "Haut de gamme", spanne: "à partir de 400\u00a0€",
        name: "Bosch Unlimited 10 (BKS1041RHF)", preis: 585, preisText: "env. 570 à 600\u00a0€",
        punkte: [
          "La version avec deuxième batterie et chargeur rapide (BTS1042WAC) a remporté le test de Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne (note 2,2, numéro 2/2026)",
          "Une batterie amovible, selon le fabricant jusqu’à 80 minutes en puissance minimale",
          "Avec une brosse douce motorisée à LED pour les sols durs, une mini-turbobrosse et un suceur XXL pour le canapé",
          "Compresse la poussière dans le bac, vous le videz moins souvent"
        ],
        fuer: "Pour les maisons sur plusieurs étages, surtout avec beaucoup de sols durs.",
        hinweis: "Stiftung Warentest a testé la version BTS1042WAC, avec une deuxième batterie et un chargeur rapide. Sur amazon.fr, Amazon vend en ce moment cette version rose poudré avec une batterie. Selon le fabricant, elle se recharge en 4 heures environ.",
        link: amazon("bosch unlimited 10 bks1041rhf")
      }
    ],
    fragen: [
      { f: "Remplace-t-il mon aspirateur classique\u202f?", a: "Un bon, oui, surtout sur les sols durs et les tapis pas trop épais. Selon Stiftung Warentest, les meilleurs aspirateurs sans fil rivalisent avec les aspirateurs classiques. Mais tous ne sont pas bons : dans le test du numéro 2/2026, certains appareils n’ont obtenu que « passable » ou « insuffisant »." },
      { f: "Combien de temps tient la batterie\u202f?", a: "Ce qu’indiquent les fabricants vaut généralement pour la puissance la plus faible. En puissance maximale, c’est souvent seulement 10 à 15 minutes. La batterie du Bosch Unlimited 10 s’échange\u202f: avec une deuxième, vous aspirez deux fois plus longtemps." },
      { f: "Comment vider le bac à poussière\u202f?", a: "Au-dessus de la poubelle, vous ouvrez le bac, et la poussière tombe. Cela fait un peu de poussière. Si vous êtes allergique à la poussière, videz-le de préférence dehors ou laissez quelqu’un d’autre le faire." },
      { f: "Vient-il à bout des poils d’animaux\u202f?", a: "Pas tous aussi bien. Chez Stiftung Warentest, le Bosch Unlimited 10, les deux modèles Miele et le Rowenta X-Force Flex 13.60 ont enlevé les poils d’animaux de façon fiable, d’autres avaient plus de mal. Si de longs cheveux s’enroulent autour de la brosse, vous les coupez et les retirez." },
      { f: "Y en a-t-il qui lavent le sol en même temps\u202f?", a: "Oui, les aspirateurs eau et poussière, par exemple de Tineco ou Dreame. Ils aspirent et lavent en même temps et valent le coup avec beaucoup de sols durs. Mais si vous ne voulez plus rien faire vous-même, regardez le robot aspirateur laveur. Depuis que j’en ai un, je n’aspire presque plus jamais moi-même." },
      { f: "Combien de temps dure un tel appareil\u202f?", a: "En général, c’est la batterie qui faiblit en premier, souvent au bout de quelques années. Vérifiez donc que vous pouvez la changer et qu’il existe des batteries de rechange. Bosch donne même dix ans de garantie sur le moteur de l’Unlimited 10." }
    ],
    rechner: "akkusauger",
    video: "akkusauger"
  },
  {
    id: "reiskocher",
    name: "Cuiseur à riz",
    kurzname: "un cuiseur à riz",
    kategorie: "Cuisine",
    symbol: "🍚",
    bild: "",
    kurz: "Un petit appareil qui cuit le riz tout seul et le garde ensuite au chaud. Sur beaucoup de modèles, vous pouvez en même temps cuire à la vapeur des légumes ou du poisson dans un panier au-dessus.",
    warum: "Le riz et l’eau dedans, appuyer sur le bouton, c’est prêt. Vous n’avez pas à rester à côté : avec la bonne quantité d’eau, rien ne déborde, et chez Stiftung Warentest, rien n’a attaché dans aucun appareil. Une fois l’eau absorbée, il passe tout seul en maintien au chaud. C’est le riz qui vous attend, et pas vous qui attendez le riz.",
    statt: "Au lieu de la casserole qui déborde",
    nutzen: "Appuyer sur le bouton, il fait le reste.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Vous aimez le riz et en mangez souvent",
      "Vous voulez un riz aussi réussi à chaque fois",
      "Vous voulez faire cuire des légumes à la vapeur en même temps ou vous occuper d’autre chose"
    ],
    nachteile: [
      "Beaucoup d’appareils sont plus lents qu’une casserole : chez Stiftung Warentest, il leur a fallu de 13 minutes à une bonne heure selon le modèle, le riz et la quantité. Mais pendant ce temps, vous n’avez pas à rester à côté",
      "Il prend un peu de place sur le plan de travail ou dans le placard",
      "Une fine croûte se forme souvent au fond. Avec les bons appareils, elle reste claire, avec les moins bons, elle devient brunâtre"
    ],
    modelle: [
      {
        stufe: "Milieu de gamme", spanne: "de 70 à 150\u00a0€",
        name: "Panasonic SR-DA152", preis: 90, empfohlen: true,
        punkte: [
          "Vainqueur du test chez Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne (« bien », note 2,2, numéro 5/2026)",
          "Grand\u202f: 1,5 litre, de quoi faire du riz pour toute la famille",
          "Avec panier vapeur et minuterie jusqu’à 24 heures",
          "Selon le fabricant, la cuve a un revêtement céramique sans PFAS et va au lave-vaisselle"
        ],
        fuer: "Pour la plupart des gens, surtout pour les familles. Mon conseil, parce qu’il est vainqueur du test.",
        hinweis: "Il n’est pas rapide\u202f: dans le test, il lui a fallu 35 à 54 minutes selon la quantité et le riz.",
        link: amazon("panasonic sr-da152 reiskocher", "panasonic sr-da152 cuiseur à riz"),
        alternativen: [
          { name: "Cosori cuiseur à riz (CRC-R501)", preis: 99, text: "Également « bien » chez Stiftung Warentest (numéro 5/2026), avec panier vapeur et de nombreux programmes. Mais lent : dans le test, il lui a fallu 43 à 68 minutes.", link: amazon("cosori reiskocher crc-r501", "cosori cuiseur à riz crc-r501") }
        ]
      }
    ],
    fragen: [
      { f: "Combien d’eau faut-il ajouter\u202f?", a: "Des repères à l’intérieur de la cuve vous l’indiquent. Vous mesurez le riz avec le gobelet fourni et versez l’eau jusqu’au repère correspondant. Tenez-vous-en à cela, et c’est juste presque à chaque fois." },
      { f: "Dois-je laver le riz avant\u202f?", a: "Oui, un rapide rinçage vaut le coup : il colle moins, et cela déborde moins facilement. Versez-le dans une passoire et rincez-le à l’eau froide jusqu’à ce que l’eau soit presque claire." },
      { f: "Puis-je aussi y cuire des légumes ou du poisson\u202f?", a: "Oui, si votre appareil a un panier vapeur. Presque tous en ont un. Il se pose sur la cuve, et sur beaucoup d’appareils, des légumes ou du poisson y cuisent à la vapeur pendant que le riz cuit en dessous. Que les légumes restent croquants dépend de l’appareil : chez Stiftung Warentest, seuls six appareils ont réussi un brocoli vert et croquant (numéro 5/2026)." },
      { f: "Combien de temps le riz peut-il rester au chaud\u202f?", a: "Pas trop longtemps. L’Institut fédéral allemand d’évaluation des risques conseille de manger un plat maintenu au chaud au plus tard trois heures après la cuisson, et il doit rester à plus de 65 degrés. Mettez vite les restes au réfrigérateur et mangez-les dans un délai d’un jour. Le riz cuit ne doit pas rester tiède à l’air libre, sinon des germes peuvent se développer." },
      { f: "Le revêtement est-il sans danger\u202f?", a: "Sur la plupart des appareils, oui. Mais Stiftung Warentest a constaté que nettement plus d’aluminium se libère du revêtement de deux cuiseurs à riz de Reishunger que sur les autres appareils, même si la valeur limite est respectée (numéro 5/2026). C’est pourquoi je ne recommande pas ces appareils. Quel que soit l’appareil : pas de cuillère en métal ni d’éponge à récurer, pour que le revêtement dure longtemps." },
      { f: "Le riz du cuiseur est-il meilleur\u202f?", a: "Cela dépend de l’appareil. Un cuiseur à riz règle lui-même la chaleur et passe en maintien au chaud dès que l’eau est absorbée. Mais tous ne le font pas bien : chez Stiftung Warentest, seuls 6 cuiseurs à riz sur 13 ont bien cuit le riz, dont les deux vainqueurs du test (numéro 5/2026). Dans aucun, le riz n’a attaché." }
    ],
    rechner: "reiskocher",
    video: "reiskocher"
  },
  {
    id: "kaffeevollautomat",
    name: "Machine à café automatique",
    kurzname: "une machine à café automatique",
    kategorie: "Cuisine",
    symbol: "☕",
    bild: "",
    kurz: "Une machine à café qui moud les grains à la minute et vous prépare espresso, café ou cappuccino d’une simple pression.",
    warum: "Vous appuyez sur un bouton, et la machine fait le reste : moudre, infuser et, pour les modèles présentés ici, faire aussi mousser le lait. Une tasse préparée avec des grains coûte nettement moins cher qu’une capsule de marque ou qu’un cappuccino au café. Et il ne reste plus aucun déchet de capsules.",
    statt: "Au lieu des capsules et du café à emporter",
    nutzen: "Du café fraîchement moulu et du cappuccino d’une simple pression, sans aucune capsule.",
    spart: ["geld"],
    fuer: [
      "Vous buvez du café tous les jours, volontiers avec du lait",
      "Vous achetez aujourd’hui des capsules de marque ou prenez souvent un café à emporter",
      "Vous voulez un cappuccino sans faire mousser le lait vous-même"
    ],
    nachteile: [
      "Il faut quelques gestes rapides chaque jour : vider le marc et le bac d’égouttage, et rincer le circuit de lait après les boissons lactées",
      "Si vous aimez le café filtre ou les capsules bon marché du discounter, vous n’économisez pas d’argent",
      "Elle coûte nettement plus cher à l’achat qu’une machine à capsules et prend de la place : les modèles présentés font 24 à 26 centimètres de large et 44 à 45 centimètres de profondeur"
    ],
    gruppen: [
      { name: "Avec carafe à lait", text: "Vous versez le lait dans une carafe et l’enclenchez à l’avant de la machine. Ensuite, vous mettez la carafe avec le reste de lait au réfrigérateur et la rincez régulièrement. Transvaser et rincer en vaut surtout la peine si vous buvez beaucoup de café au lait. On trouve de bons appareils avec carafe dès 400 euros environ." },
      { name: "Avec tube à lait", text: "Un tube fin aspire le lait directement dans la brique de lait ou dans un récipient posé à côté de la machine. Vous ne transvasez rien et n’avez pas de carafe à rincer. C’est pourquoi le tube est préférable si vous ne buvez du café au lait que de temps en temps. Il doit toutefois être rincé après les boissons lactées et nettoyé à fond régulièrement, sinon des germes se forment." }
    ],
    modelle: [
      {
        gruppe: "Avec carafe à lait",
        stufe: "Petit budget", spanne: "jusqu’à 450 €",
        name: "De'Longhi Magnifica Start", preis: 420, preisText: "ca. 400 bis 420 €",
        punkte: [
          "Bien chez Stiftung Warentest (note 2,3, automne 2024), l’un des bons appareils les moins chers du test",
          "Cappuccino d’une simple pression : elle fait mousser elle-même le lait de la carafe",
          "Vous pouvez retirer le groupe d’infusion pour le rincer"
        ],
        fuer: "Si vous buvez surtout de l’espresso, du café et du cappuccino et voulez dépenser peu.",
        hinweis: "Il n’y a que quatre boissons d’une simple pression : espresso, café, cappuccino et eau chaude. C’est l’ECAM220.60.B qui a été testée. Le lien mène à l’ECAM222.60.BG, équipée de la même façon selon De'Longhi. D’autres versions de la Magnifica Start n’ont qu’une buse avec laquelle vous faites mousser le lait vous-même.",
        link: amazon("de'longhi magnifica start ecam222.60.bg", "de'longhi magnifica start lattecrema")
      },
      {
        gruppe: "Avec carafe à lait",
        stufe: "Milieu de gamme", spanne: "de 450 à 650 €",
        name: "De'Longhi Magnifica Evo Next", preis: 570, preisText: "ca. 430 bis 570 €", empfohlen: true,
        punkte: [
          "Bien chez Stiftung Warentest (note 2,1, juin 2025), juste derrière les deux gagnants du test",
          "Selon Stiftung Warentest, elle fait mousser le lait de façon très fine et crémeuse",
          "13 boissons d’une simple pression : douze boissons au café et de l’eau chaude",
          "Vous pouvez retirer le groupe d’infusion pour le rincer"
        ],
        fuer: "Pour la plupart des gens. Mon conseil, car au test elle a fait presque aussi bien que les gagnants, qui coûtent nettement plus cher.",
        hinweis: "C’est l’ECAM310.80.SB argent et noir qui a été testée. Le lien mène à l’ECAM312.80.TB titane, équipée de la même façon selon De'Longhi. Selon De'Longhi, l’ECAM310.60.B ne propose que dix boissons d’une simple pression.",
        link: amazon("de'longhi magnifica evo next ecam312.80.tb", "de'longhi magnifica evo next"),
        alternativen: [
          { name: "De'Longhi Rivelia", preis: 600, text: "Gagnante du test à l’automne 2024 avec la même note 2,1. Elle a deux réservoirs à grains, pour passer vite d’une sorte à l’autre, et un écran tactile plus grand. Elle coûte généralement un peu plus cher. C’est l’EXAM440.55.B noire qui a été testée. Le lien mène à l’EXAM440.55.W blanche, elle aussi avec 16 boissons et deux réservoirs à grains selon De'Longhi.", link: amazon("de'longhi rivelia exam440.55.w", "de'longhi rivelia") }
        ]
      },
      // amazon.fr (Stand 01.11.2026): Eletta Explore Cold Brew und Melitta Latticia OT gibt es dort nur ohne Angebot,
      // die Nivona NICR 790 gar nicht und vom Siemens EQ500 nur den nicht getesteten TP511E19. Darum hat die Schlauch-Gruppe
      // nur den TP511E19, das Schwestermodell des getesteten TP516DX3 (mit Hinweis). Die Eletta nennt ohneTeuer unten.
      {
        gruppe: "Avec tube à lait",
        stufe: "Petit budget", spanne: "jusqu’à 550 €",
        name: "Siemens EQ500 classic TP511E19", preis: 420, preisText: "ca. 390 bis 450 €", empfohlen: true,
        punkte: [
          "Modèle frère de l’EQ500 TP516DX3, qui a obtenu « bien » chez Stiftung Warentest (note 2,3, juin 2025)",
          "Selon Siemens, elle nettoie elle-même le circuit de lait à la vapeur après chaque boisson lactée",
          "Écran couleur, cappuccino et latte macchiato d’une simple pression",
          "Vous pouvez retirer le groupe d’infusion pour le rincer"
        ],
        fuer: "Mon conseil si vous voulez un appareil avec tube : son modèle frère a obtenu « bien » au test, et elle se rince toute seule après chaque café au lait. C’est avec les machines à café Siemens que j’ai eu les meilleures expériences.",
        hinweis: "C’est la TP516DX3 qui a été testée. Selon Siemens, la TP511E19 nettoie elle aussi le circuit de lait à la vapeur, mais elle n’a pas d’application et propose moins de boissons. Vous plongez le tube dans la brique de lait ou dans un récipient à lait.",
        link: amazon("siemens eq500 classic tp511e19", "siemens eq500 classic tp511e19")
      }
    ],
    ohneTeuer: { stufe: "Haut de gamme", titel: "Pas disponible pour le moment", text: "La De'Longhi Eletta Explore Cold Brew, gagnante du test chez Stiftung Warentest (juillet 2026), n’est pas disponible sur amazon.fr en ce moment. Dès qu’elle le sera, vous la trouverez ici." },
    fragen: [
      { f: "Tube ou carafe : lequel me convient ?", a: "Les deux peuvent être bons : chez Stiftung Warentest, il y a eu des gagnants avec les deux systèmes, la Nivona avec tube en 2025 et l’Eletta Explore avec carafe en 2026, mais aucune des deux n’est disponible sur amazon.fr en ce moment. La différence se joue au quotidien. La carafe, vous la remplissez, la mettez ensuite au réfrigérateur avec le reste de lait et la rincez régulièrement. Cela vaut surtout la peine si vous buvez beaucoup de café au lait. J’ai par exemple eu de bonnes expériences avec la De'Longhi Dynamica Plus, qui a une carafe. Si vous ne buvez un café au lait que de temps en temps, le tube est préférable : vous le plongez dans la brique de lait, sans rien transvaser. En contrepartie, il doit être rincé après les boissons lactées et nettoyé à fond régulièrement. Et avec une carafe, vous avez un bon appareil pour nettement moins cher." },
      { f: "Combien j’économise par rapport aux capsules ?", a: "Une capsule de marque coûte environ 40 centimes, une tasse de machine automatique avec grains, eau et électricité environ 15 centimes. Si vous buvez deux tasses par jour, cela fait environ 15 euros de moins par mois, environ 10 euros après détartrant et nettoyant. Avec des capsules bon marché de supermarché discount, il ne reste presque rien. Vous économisez le plus en remplaçant le café à emporter : un cappuccino au café coûte en moyenne presque 4 euros. Le calculateur vous montre ce que cela représente pour vous. Ce sont des prix allemands." },
      { f: "Est-ce rentable aussi par rapport au café filtre ?", a: "Honnêtement, pas côté argent. Selon Stiftung Warentest, le café filtre est la façon la moins chère de faire du café, notamment parce que la machine coûte peu. Toujours selon Warentest, une machine automatique n’est rentable que si l’on boit beaucoup de café. En échange, elle moud chaque tasse à la minute et vous prépare espresso et cappuccino d’une simple pression." },
      { f: "Combien de travail demande l’entretien ?", a: "Chaque jour, vous videz le marc et le bac d’égouttage, beaucoup d’appareils vous préviennent quand c’est le moment. Après les boissons lactées, vous rincez le circuit de lait, sur beaucoup d’appareils d’une simple pression, et la Siemens le fait toute seule. La carafe, vous la démontez et la rincez régulièrement ; pour le tube, il existe un programme de nettoyage. Une fois par semaine, vous retirez le groupe d’infusion et le rincez sous l’eau courante, sans liquide vaisselle. C’est possible sur tous les appareils présentés. Il faut détartrer quand l’appareil l’indique. Pour le détartrant, le nettoyant et les filtres à eau, comptez grosso modo 30 à 120 euros par an." },
      { f: "Faut-il détartrer ?", a: "Oui. Réglez la dureté de l’eau lors de la mise en service, une bandelette de test est souvent fournie. L’appareil vous indique alors à temps quand c’est nécessaire. Avec un filtre à eau, selon les fabricants, vous détartrez moins souvent. Utilisez un produit recommandé par le fabricant pour votre appareil. Stiftung Warentest conseille des détartrants sans acide sulfamique, car il nuit aux organismes aquatiques." },
      { f: "Quels grains conviennent ?", a: "Des grains pour espresso ou crema, selon vos goûts. N’utilisez pas de grains caramélisés ou aromatisés : selon De'Longhi, ils peuvent encrasser le moulin. Les grains très huileux ne conviennent pas non plus : selon Siemens, ils ne glissent pas correctement dans le moulin." },
      { f: "Pourquoi tous les appareils avec carafe sont-ils des De'Longhi ?", a: "Parce que ce sont eux qui ont obtenu les meilleurs résultats chez Stiftung Warentest dans leur gamme de prix : la Magnifica Start est l’un des bons appareils les moins chers, la Magnifica Evo Next a terminé juste derrière les gagnants en 2025, et l’Eletta Explore est l’actuelle gagnante du test. Philips propose aussi une carafe, LatteGo, que vous enclenchez et rincez vite, sans aucun tube. Mais sur la Philips 5500 testée, l’espresso et le cappuccino n’avaient qu’un goût moyen au test de 2024." }
    ],
    profitipp: {
      titel: "Réglez la mouture",
      text: "La finesse de la mouture change beaucoup le goût. Essayez simplement, cela ne vous coûte rien :",
      liste: [
        "Si le café est acide ou trop léger, réglez un cran plus fin",
        "S’il est amer ou ne coule qu’au goutte-à-goutte, réglez un cran plus gros",
        "Ne tournez le réglage que pendant que le moulin tourne. C’est ce qu’indiquent les notices",
        "Vous ne sentirez la différence qu’après deux ou trois tasses"
      ]
    },
    rechner: "kaffeevollautomat",
    video: "kaffeevollautomat"
  },
  {
    id: "kuechenmaschine-kochfunktion",
    name: "Robot cuiseur",
    kurzname: "un robot cuiseur",
    kategorie: "Cuisine",
    symbol: "🍲",
    bild: "",
    kurz: "Un appareil qui hache, mélange et cuit en même temps, le tout dans le même bol. Le plus connu est le Thermomix.",
    warum: "Soupe, sauce, risotto ou riz au lait : le robot mélange et chauffe en même temps, et vous n’avez plus à rester devant la plaque. Il hache d’abord les oignons et les légumes dans le même bol, et sur beaucoup d’appareils vous pesez aussi les ingrédients directement dedans. Ensuite, vous lavez surtout le bol au lieu de la planche, du couteau et de la casserole.",
    statt: "Au lieu de remuer devant la plaque",
    nutzen: "Il mélange et cuit pour vous. Vous faites autre chose.",
    spart: ["zeit", "muehe"],
    fokus: "zeit",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Vous cuisinez souvent des soupes, des sauces, des plats mijotés ou du risotto",
      "Vous préférez passer votre temps à autre chose qu’à remuer devant la plaque",
      "Vous voulez un hachoir, un mixeur plongeant et un cuiseur vapeur en un seul appareil"
    ],
    nachteile: [
      "Il est grand et lourd : les appareils présentés ici pèsent de 6 à 8,5 kilos et ont besoin d’une place fixe sur le plan de travail",
      "Les oignons se transforment vite en bouillie : chez Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne, presque tous les appareils ont raté le hachage des oignons (numéro 1/2024)",
      "Tous ne savent pas vraiment faire revenir : selon Stiftung Warentest, les arômes grillés n’apparaissent qu’à partir de 140 degrés, et certains appareils ne dépassent pas 120"
    ],
    modelle: [
      {
        stufe: "Petit budget", spanne: "jusqu’à 450 €",
        name: "Moulinex ClickChef (HF4568)", preis: 420,
        punkte: [
          "Meilleur rapport qualité-prix chez Stiftung Warentest (satisfaisant, note 2,9, numéro 1/2024)",
          "Avec balance intégrée et panier vapeur",
          "5 programmes automatiques, et vous réglez aussi vous-même le temps, la vitesse et la chaleur"
        ],
        fuer: "Pour débuter, si vous faites surtout des soupes, des sauces et de la pâte.",
        hinweis: "Il ne chauffe qu’à 120 degrés, impossible donc de saisir. Il n’a pas de recettes guidées pas à pas sur l’appareil, seulement un livre de recettes. Le bol contient 3,6 litres ; pour la cuisson, vous en utilisez 2 selon le fabricant.",
        link: amazon("moulinex clickchef hf4568", "moulinex clickchef hf4568")
      },
      {
        stufe: "Milieu de gamme", spanne: "de 450 à 800 €",
        name: "Moulinex Companion XL (HF8401)", preis: 590, empfohlen: true,
        punkte: [
          "Chez Test-Achats (Belgique), globalement à peu près aussi bon que le Thermomix TM7 (juillet 2026)",
          "Grand bol : 3 litres utiles, jusqu’à 10 personnes selon le fabricant",
          "12 programmes automatiques et un mode manuel, Moulinex parle de 14 fonctions",
          "Recettes dans l’application Moulinex gratuite, sans abonnement"
        ],
        fuer: "Pour la plupart des gens. Mon conseil, parce qu’il s’approche presque du Thermomix dans le test et que vous n’avez pas besoin d’abonnement pour les recettes.",
        hinweis: "Il n’a pas de balance, il vous faut donc une balance de cuisine en plus. Selon Test-Achats, il n’est que moyennement facile à nettoyer.",
        link: amazon("moulinex companion xl hf8401", "moulinex companion xl hf8401")
      }
    ],
    fragen: [
      { f: "Pourquoi le Thermomix n’est-il pas là ?", a: "Vorwerk vend le Thermomix uniquement lui-même, par ses conseillères et conseillers et dans sa propre boutique en ligne. C’est pourquoi il n’est pas sur Amazon. Il est pourtant bon : chez Stiftung Warentest, le Thermomix TM7 a obtenu « bon » (numéro 2/2026). Chez Test-Achats, le Moulinex Companion XL a obtenu un résultat global similaire." },
      { f: "Et le Bosch Cookit, le vainqueur du test ?", a: "Le Bosch Cookit a été vainqueur du test chez Stiftung Warentest (bon, note 2,0, numéro 1/2024). Mais il n’est pas disponible sur Amazon, c’est pourquoi il manque ici." },
      { f: "Et le Monsieur Cuisine de Lidl ?", a: "Lidl vend lui-même le Monsieur Cuisine Smart. Chez Stiftung Warentest, il a obtenu « satisfaisant » (note 2,8, numéro 1/2024), et chez Test-Achats c’est un bon rapport qualité-prix. Si vous le trouvez chez Lidl, c’est une alternative bon marché avec balance intégrée." },
      { f: "Peut-on y faire revenir des aliments ?", a: "Seulement en partie. Selon Stiftung Warentest, les arômes grillés n’apparaissent qu’à partir de 140 degrés. Le ClickChef n’atteint que 120 degrés, rien n’y dore vraiment. Pour un steak, une escalope ou des oignons croustillants, mieux vaut continuer à utiliser la poêle." },
      { f: "Les oignons tournent-ils en bouillie ?", a: "Facilement, oui. Chez Stiftung Warentest, presque tous les appareils ont raté le hachage des oignons (numéro 1/2024). Le mieux est de hacher les oignons en quelques brèves pressions sur la touche impulsion ou turbo et de vérifier entre-temps." },
      { f: "Faut-il un abonnement pour les recettes ?", a: "Pas pour le Companion XL : les recettes sont dans l’application Moulinex gratuite. Pour le ClickChef, elles sont dans le livre de recettes. Avec le Thermomix, il vous faut l’abonnement Cookidoo pour la plupart des recettes ; sans abonnement, vous avez environ 200 recettes sur l’appareil selon Vorwerk." },
      { f: "Combien de temps fait-il vraiment gagner ?", a: "Honnêtement, aucun test ne l’a mesuré. Le robot ne cuit pas forcément plus vite. Mais il vous évite de rester à côté et de remuer, et vous n’avez pas à couper oignons et légumes à la main. Pendant ce temps, vous mettez la table, rangez ou vous asseyez simplement. Le calculateur vous montre ce que cela représente pour vous." }
    ],
    rechner: "kochfunktion",
    video: "kuechenmaschine-kochfunktion"
  },
  {
    id: "kuechenmaschine",
    name: "Robot pâtissier pour pétrir et mélanger",
    kurzname: "un robot pâtissier",
    kategorie: "Cuisine",
    symbol: "🧁",
    bild: "",
    kurz: "Une machine avec un grand bol qui pétrit la pâte, mélange la pâte à gâteau et fouette la crème. Avec des accessoires, elle râpe et tranche aussi les légumes.",
    warum: "Une pâte levée pour le pain, la pizza ou une brioche se pétrit à la main pendant au moins 8 minutes, et c’est plutôt fatigant. La machine la pétrit toute seule. Pendant ce temps, vous beurrez le moule, préparez la garniture ou commencez déjà à ranger. Elle fait aussi la pâte à gâteau et la chantilly sans que vous ayez à tenir un batteur.",
    statt: "Au lieu de pétrir à la main",
    nutzen: "Il pétrit et mélange pour vous. Vous avez les mains libres.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Vous faites souvent des gâteaux, du pain, des pizzas ou des brioches",
      "Vous voulez vous épargner l’effort de pétrir à la main",
      "Vous voulez faire autre chose pendant que la pâte est pétrie"
    ],
    nachteile: [
      "Il prend de la place : les petits modèles Bosch pèsent un peu moins de 5 kilos, les grandes machines 8 à 10 kilos. L’idéal est qu’il reste en place sur le plan de travail",
      "La plupart ne savent mixer et hacher qu’avec des accessoires : pour presque toutes les machines à bras pivotant, Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne, a dû acheter des accessoires en plus (numéro 12/2025)",
      "Le nettoyage peut prendre du temps : selon Stiftung Warentest, certaines machines sont pénibles à nettoyer (numéro 12/2025)"
    ],
    modelle: [
      // amazon.fr (Stand 01.11.2026): Den getesteten Serie 4 MUM58W20 gibt es dort nicht, die Serie 2 MUMS2EW00 nur bei einem
      // Drittanbieter zu auffälligem Preis, die Serie 6 MUMS6ZS13D gar nicht. Darum steht hier der MUM58200 aus derselben Serie 4,
      // ohne Mixer und Gemüseschneider (mit Hinweis). Serie 2 und 6 nennt ohneTeuer unten.
      {
        stufe: "Milieu de gamme", spanne: "de 150 à 350 €",
        name: "Bosch Serie 4 (MUM58200)", preis: 160, empfohlen: true,
        punkte: [
          "Modèle frère du MUM58W20, « bon » chez Stiftung Warentest (note 2,5) et meilleur rapport qualité-prix (numéro 12/2025)",
          "Bol en inox de 3,9 litres, selon le fabricant pour jusqu’à 2,7 kilos de pâte à gâteau ou 1,9 kilo de pâte levée",
          "Avec mouvement planétaire : le crochet et le fouet tournent et parcourent en même temps tout le bol",
          "Crochet pétrisseur, fouet et batteur sont fournis"
        ],
        fuer: "Pour la plupart des gens. Mon conseil, parce que son modèle frère était presque aussi bon que le vainqueur du test et qu’il coûte nettement moins cher.",
        hinweis: "Stiftung Warentest a testé le MUM58W20, livré avec blender et coupe-légumes. Selon Bosch, ce modèle a lui aussi 1000 watts et un bol de 3,9 litres, mais il est livré sans blender ni coupe-légumes. Comme le MUM58W20, il n’a ni balance ni programmes.",
        link: amazon("bosch serie 4 mum58200", "bosch mum58200")
      }
    ],
    // ohneTeuer zeigt hier ausnahmsweise die anderen getesteten Preisklassen, die es bei amazon.fr gerade nicht zu einem normalen Preis gibt
    ohneTeuer: { stufe: "Autres gammes", titel: "Pas disponible pour le moment", text: "Le vainqueur du test, le Bosch Serie 6 (MUMS6ZS13D, note 2,4, numéro 12/2025), et le Serie 2 (MUMS2EW00), moins cher, ne sont pas disponibles sur amazon.fr en ce moment, ou seulement à un prix bien plus élevé. Dès que l’un d’eux le sera, vous le trouverez ici." },
    fragen: [
      { f: "Un batteur électrique ne suffit-il pas ?", a: "Pour une pâte à gâteau ou de la chantilly de temps en temps, si. Mais une pâte levée se pétrit à la main pendant au moins 8 minutes, comme le conseillent la chaîne de supermarchés allemande REWE et l’administration du district de Göppingen. La machine la pétrit toute seule et vous avez les mains libres. Mais si vous ne pâtissez que quelques fois par an, honnêtement, économisez l’argent et gardez le batteur." },
      { f: "Pourquoi le KitchenAid n’est-il pas mon conseil ?", a: "Le KitchenAid Artisan n’a obtenu que « satisfaisant » chez Stiftung Warentest (note 2,7, numéro 12/2025). Il a bien réussi la chantilly et la pâte à gâteau, et il a très bien tenu dans le test d’endurance. Mais il ne sait mixer ou hacher qu’avec des accessoires, et il pèse un peu plus de 10 kilos. De plus, on peut se pincer les doigts dans la charnière de la tête. S’il vous plaît et que vous faites surtout des gâteaux, vous pouvez quand même le choisir." },
      { f: "Quelle quantité de pâte peut-il travailler ?", a: "Selon Bosch, la Serie 2 pétrit jusqu’à 1,7 kilo de pâte levée, la Serie 4 jusqu’à 1,9 et la Serie 6 jusqu’à 2,5 kilos. Pour la pâte à gâteau, c’est chaque fois plus : 2,4, 2,7 et 3,5 kilos. Pour un gâteau ou un pain, le plus petit suffit donc déjà." },
      { f: "Peut-il aussi couper des légumes ?", a: "Oui, avec un coupe-légumes. Il râpe les légumes ou les coupe en rondelles, par exemple carottes, concombres ou pommes de terre. La Serie 4 présentée ici n’en est pas équipée. Pour les noix ou les herbes, il vous faut un accessoire hachoir séparé." },
      { f: "Que fait de plus un robot cuiseur ?", a: "Il chauffe en mélangeant, vous y cuisinez des soupes, des sauces ou un risotto. Pour la pâtisserie, la machine présentée ici suffit, et son bol est plus grand : 3,9 litres au lieu d’environ 2 à 3 litres utiles. Si vous voulez aussi cuisiner, regardez la page « Robot cuiseur »." },
      { f: "Combien de temps fait-il vraiment gagner ?", a: "Honnêtement, aucun test ne l’a mesuré. Avec la machine, la pâte n’est prête qu’un peu plus vite : à la main, vous la pétrissez au moins 8 minutes, avec la machine au moins 5. La grande différence, c’est que vous n’avez pas besoin d’être là. Le calculateur vous montre ce que cela représente pour vous." }
    ],
    rechner: "kneten",
    video: "kuechenmaschine"
  },
  {
    id: "wassersprudler",
    name: "Machine à eau pétillante",
    kurzname: "une machine à eau pétillante",
    kategorie: "Cuisine",
    symbol: "🫧",
    bild: "",
    kurz: "Un appareil qui transforme l’eau du robinet en eau pétillante. Vous le connaissez peut-être sous le nom de SodaStream.",
    warum: "L’eau du robinet dans la bouteille, quelques pressions, et ça pétille. Vous ne portez plus de packs de bouteilles de la voiture jusqu’à chez vous et ne rapportez plus de bouteilles vides. Une bouteille de gaz suffit pour environ 40 à 60 litres.",
    statt: "Au lieu de porter des packs d’eau",
    nutzen: "De l’eau pétillante au robinet. Plus jamais de packs à porter.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Vous buvez beaucoup d’eau pétillante et portez des packs ou des caisses pour cela",
      "Vous habitez sans ascenseur ou faites vos courses sans voiture",
      "Vous voulez moins de bouteilles en plastique et moins de bouteilles vides"
    ],
    nachteile: [
      "Si vous achetez aujourd’hui de l’eau bon marché au discounter, vous n’économisez presque rien. Cela vaut vraiment le coup par rapport à l’eau de marque",
      "Vous ne gagnez presque pas de temps, car au lieu de porter, vous gazéifiez chaque bouteille vous-même. Ce que vous économisez, c’est l’effort",
      "Vous devez échanger régulièrement les bouteilles de gaz vides, environ tous les 40 à 60 litres",
      "Les bouteilles en plastique ne vont généralement pas au lave-vaisselle et doivent être remplacées avant la date imprimée"
    ],
    modelle: [
      {
        stufe: "Petit budget", spanne: "jusqu’à 80 €",
        name: "Mysoda Woody", preis: 65,
        punkte: [
          "Meilleur rapport qualité-prix chez Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne (bien, note 2,3, numéro 7/2025)",
          "Une bouteille de gaz est fournie. Dans le test, elle a suffi pour environ 48 litres, plus qu’avec tout autre bon appareil",
          "Accepte les bouteilles de gaz à visser de nombreuses marques",
          "Boîtier en composite de bois renouvelable, selon le fabricant"
        ],
        fuer: "Pour débuter, si vous voulez commencer à petit prix et qu’un pétillant moyen vous suffit.",
        hinweis: "Il gazéifie un peu moins fort que les appareils plus chers, seulement satisfaisant dans le test. La bouteille en plastique ne va pas au lave-vaisselle. Mysoda n’échange pas elle-même les bouteilles de gaz en Allemagne, vous prenez alors une bouteille à visser d’un autre fournisseur. Renseignez-vous d’abord en magasin : certains n’échangent que leur propre marque.",
        link: amazon("mysoda woody wassersprudler", "mysoda woody")
      },
      {
        stufe: "Milieu de gamme", spanne: "de 80 à 120 €",
        name: "SodaStream Crystal 3.0", preis: 100, empfohlen: true,
        punkte: [
          "Bien chez Stiftung Warentest (note 1,8, numéro 7/2025), juste derrière le vainqueur du test",
          "Des carafes en verre au lieu du plastique : elles vont au lave-vaisselle et ne vieillissent pas",
          "Vous insérez la bouteille de gaz Quick Connect avec un levier. Vous pouvez l’échanger dans de nombreux magasins"
        ],
        fuer: "Pour la plupart des gens. Mon conseil, parce que les carafes vont au lave-vaisselle et que vous pouvez échanger les bouteilles de gaz presque partout.",
        hinweis: "Une carafe contient 0,7 litre, mais vous ne pouvez gazéifier que jusqu’au trait de remplissage, soit environ 0,6 litre à la fois. Vous gazéifiez donc plus souvent. L’appareil mesure environ 45 cm de haut. Pour insérer la carafe, la partie supérieure se soulève et il atteint alors environ 55 cm, ce qui est souvent juste sous les placards muraux. Il n’accepte que les bouteilles de gaz avec raccord Quick Connect.",
        link: amazon("sodastream crystal 3.0", "sodastream crystal 3.0")
      },
      {
        stufe: "Haut de gamme", spanne: "à partir de 120 €",
        name: "Grohe Blue Fizz", preis: 130,
        punkte: [
          "Vainqueur du test chez Stiftung Warentest (bien, note 1,7, numéro 7/2025)",
          "Le pétillant le plus fort du test, presque comme l’eau gazeuse du magasin",
          "Trois niveaux, de doux à fort, réglés avec un bouton rotatif",
          "Accepte les bouteilles de gaz à visser de nombreuses marques, pas seulement celles de Grohe"
        ],
        fuer: "Si vous l’aimez vraiment pétillante.",
        hinweis: "Un pétillant fort demande plus de gaz, la bouteille est donc vide plus vite. Vous lavez la bouteille en plastique à la main. Stiftung Warentest n’a trouvé la manipulation que satisfaisante. La version plus chère « Advanced » indique en plus le niveau de remplissage de la bouteille de gaz.",
        link: amazon("grohe blue fizz starter set", "grohe blue fizz")
      }
    ],
    fragen: [
      { f: "Est-ce que j’économise de l’argent ?", a: "Beaucoup par rapport à l’eau de marque, presque rien par rapport à l’eau gazeuse bon marché du discounter. Quand vous la faites vous-même, vous payez surtout le gaz, environ 10 à 20 centimes par litre selon la bouteille de gaz et l’appareil. En Allemagne, l’eau gazeuse du discounter coûte environ 20 centimes le litre, l’eau de marque souvent 60 centimes et plus. Mais le vrai gain, c’est celui-ci : vous ne portez plus rien. Le calculateur vous montre ce que cela représente pour vous." },
      { f: "Puis-je simplement utiliser l’eau du robinet ?", a: "Oui. En Allemagne, en Autriche et en Suisse, l’eau potable fait partie des aliments les plus strictement contrôlés, sa qualité est bonne à très bonne. Si l’eau est restée plus de quatre heures dans les tuyaux, par exemple pendant la nuit, laissez-la couler jusqu’à ce qu’elle sorte nettement plus fraîche du robinet. C’est ce que conseille l’Agence fédérale allemande de l’environnement. Votre fournisseur d’eau vous dira quelle est sa qualité chez vous." },
      { f: "Bouteille en verre ou en plastique ?", a: "Le verre va au lave-vaisselle, ne vieillit pas et a un goût neutre. Vous l’utilisez tant qu’il n’a ni fissure ni éclat. Le plastique est plus robuste, mais ne se lave généralement qu’à la main. Chaque bouteille en plastique porte une date avant laquelle vous devez la remplacer, parce que le matériau vieillit. C’est ce qu’indique Stiftung Warentest." },
      { f: "Où échanger les bouteilles de gaz vides ?", a: "Vous rapportez la bouteille vide en magasin et ne payez que la nouvelle recharge. Vous échangez les bouteilles SodaStream vides chez de nombreux revendeurs qui vendent SodaStream. La recherche de revendeurs sur le site de SodaStream vous indique où. Pour les appareils à pas de vis comme le Woody et le Grohe, il existe aussi des bouteilles d’échange d’autres fournisseurs, souvent moins chères. Mais attention : certains magasins n’échangent que leur propre marque." },
      { f: "Quelle bouteille de gaz va avec mon appareil ?", a: "Il existe deux raccords. Les bouteilles à visser se vissent, les bouteilles roses Quick Connect s’enclenchent simplement. Les nouveaux appareils SodaStream comme le Crystal 3.0 ont besoin de Quick Connect. Le Woody et le Grohe Blue Fizz acceptent les bouteilles à visser, y compris d’autres marques, mais pas les bouteilles Quick Connect. Regardez l’emballage à l’achat." },
      { f: "Combien de temps dure une bouteille de gaz ?", a: "Dans le test de Stiftung Warentest, les appareils ont fait de 37 à 61 litres avec une bouteille de gaz. Combien chez vous, cela dépend de l’appareil et de la force avec laquelle vous gazéifiez : plus ça pétille, plus vite la bouteille est vide." },
      { f: "Comment garder tout propre ?", a: "Nettoyez régulièrement la buse, sinon des bactéries qui forment un film visqueux peuvent s’y installer. Stiftung Warentest conseille aussi de verser l’eau pétillante dans un verre ou une carafe pour la boire, au lieu de boire à la bouteille de gazéification. L’appareil lui-même se nettoie simplement avec un chiffon humide, il ne va pas au lave-vaisselle." },
      { f: "Pourquoi l’Aarke n’est-il pas là ?", a: "L’Aarke Carbonator 3 en inox est élégant et a aussi obtenu « bien » chez Stiftung Warentest (numéro 7/2025). Mais il a obtenu un moins bon résultat que les trois appareils présentés ici et coûte nettement plus cher." }
    ],
    profitipp: {
      titel: "Le froid pétille mieux",
      text: "L’eau froide absorbe nettement mieux le gaz carbonique. Mettez la bouteille remplie un moment au réfrigérateur avant de gazéifier, et elle pétillera plus fort."
    },
    rechner: "sprudler",
    video: "wassersprudler"
  },
  {
    id: "mini-geschirrspueler",
    name: "Lave-vaisselle de table",
    kurzname: "un lave-vaisselle de table",
    kategorie: "Cuisine",
    symbol: "🍽️",
    bild: "",
    kurz: "Un petit lave-vaisselle pour le plan de travail. Vous n’avez besoin d’aucune place dans les meubles de cuisine.",
    warum: "La vaisselle dedans, un bouton, et vous faites autre chose. La vaisselle quotidienne à la main disparaît, seuls les grandes casseroles et poêles restent à laver vous-même. Il convient surtout aux petites cuisines et aux appartements en location où un lave-vaisselle normal n’a pas sa place.",
    statt: "Au lieu de faire la vaisselle à la main",
    nutzen: "Fait la vaisselle pour vous, même sans place pour un grand lave-vaisselle.",
    spart: ["zeit", "muehe"],
    muehe: { vorher: 4, nachher: 2 },
    fuer: [
      "Votre cuisine n’a pas de place pour un lave-vaisselle normal",
      "Vous vivez seul ou à deux",
      "Vous faites la vaisselle à la main presque tous les jours et préférez utiliser ce temps autrement"
    ],
    nachteile: [
      "Les grandes casseroles, poêles et plaques n’entrent généralement pas, vous les lavez toujours à la main",
      "Il prend de la place sur le plan de travail : l’appareil présenté fait 43 centimètres de large et 44 centimètres de profondeur",
      "Les petits lave-vaisselle obtiennent généralement de moins bons résultats aux tests que les grands et consomment plus d’eau et d’électricité par assiette. Il n’existe pas de tests indépendants des appareils présentés"
    ],
    gruppen: [
      { name: "Avec raccordement à l’eau", text: "Il se branche par un tuyau sur une arrivée d’eau, le plus souvent un robinet sous l’évier. L’eau usée s’écoule par un second tuyau dans l’évacuation. En échange, six couverts y trouvent place, assez pour une ou deux personnes." },
      { name: "Avec réservoir d’eau", text: "Pas besoin de raccordement : avant chaque lavage, vous remplissez le réservoir de cinq litres, et l’eau usée s’écoule par un tuyau dans l’évier. En échange, il est plus petit et plus bruyant. Trois couverts y trouvent place, ce qui suffit surtout pour une personne." }
    ],
    modelle: [
      {
        gruppe: "Avec réservoir d’eau",
        stufe: "Petit budget", spanne: "jusqu’à 300 €",
        name: "Bomann TSG 5702", preis: 239, preisText: "ca. 200 bis 300 €", empfohlen: true,
        punkte: [
          "Réservoir de cinq litres : pas besoin de raccordement à l’eau, mais vous pouvez le raccorder plus tard, les tuyaux sont fournis",
          "Selon le fabricant, l’appareil à réservoir le plus économe que j’ai trouvé : classe énergétique C et 4,2 litres d’eau par lavage",
          "Trois couverts, seulement 43 centimètres de large et 44 de profondeur"
        ],
        fuer: "Si vous n’avez pas d’arrivée d’eau libre ou ne voulez rien raccorder.",
        hinweis: "Avec 58 décibels, il est nettement plus bruyant que les appareils raccordés. Il n’existe pas de tests indépendants, les valeurs viennent du fabricant. Avant chaque lavage, placez bien le tuyau d’évacuation dans l’évier, sinon l’eau coule sur le plan de travail.",
        link: amazon("bomann tsg 5702", "bomann tsg 5702")
      }
    ],
    fragen: [
      { f: "Raccordement à l’eau ou réservoir : lequel me convient ?", a: "Si vous avez une arrivée d’eau libre sous l’évier, prenez un appareil raccordé. Six couverts y trouvent place et vous n’avez jamais à remplir d’eau. S’il n’y a pas de raccordement ou si vous ne voulez rien raccorder, prenez un appareil à réservoir. Il est plus petit et plus bruyant, et vous le remplissez avant chaque lavage. En échange, il se pose partout où il y a une prise et où le tuyau d’évacuation atteint l’évier. Un appareil raccordé, je n’en trouve pas sur amazon.fr en ce moment, c’est pourquoi il n’y a ici que le Bomann TSG 5702 à réservoir. Vous pouvez toutefois aussi le raccorder à l’eau, les tuyaux sont fournis." },
      { f: "Comment raccorder un appareil à l’eau ?", a: "Le tuyau d’arrivée se branche sur une arrivée d’eau froide avec un filetage 3/4 de pouce, le plus souvent un robinet sous l’évier. S’il est déjà pris, par exemple par un lave-linge, un robinet double aide. Le tuyau d’évacuation se branche sur l’évacuation sous l’évier, il existe pour cela des raccords intermédiaires. Les tuyaux sont fournis, sur les appareils présentés ils mesurent environ 1,5 mètre. S’il vous manque un raccordement adapté, appelez un plombier." },
      { f: "Les casseroles et les grandes assiettes rentrent-elles ?", a: "Les grandes casseroles, poêles et plaques généralement pas, vous les lavez toujours à la main. Avant l’achat, mesurez votre plus grande assiette et comparez avec la notice : les grandes assiettes plates n’entrent pas toujours dans les petits appareils à réservoir." },
      { f: "Économise-t-il de l’eau et de l’électricité par rapport à la vaisselle à la main ?", a: "Par rapport à la moyenne, oui, surtout pour l’eau. Dans une étude de l’Université de Bonn, les participants ont utilisé en moyenne 103 litres d’eau et 2,5 kWh d’énergie pour douze couverts lavés à la main, surtout pour l’eau chaude. Selon le fabricant, l’appareil présenté consomme en programme éco l’équivalent d’environ 17 litres et 1,2 kWh pour douze couverts. Si vous faites la vaisselle très économiquement à la main, vous consommez toutefois moins. Le plus économe reste un grand lave-vaisselle bien rempli : selon sa fiche technique, il ne lui faut qu’environ 8 litres et 0,5 kWh pour douze couverts." },
      { f: "À quoi faire attention avec un appareil à réservoir ?", a: "Remplissez le réservoir avant chaque lavage, le plus simple avec une carafe ou un verre doseur. Placez le tuyau d’évacuation dans l’évier et fixez-le pour qu’il ne glisse pas. Sinon, l’eau usée coule sur le plan de travail ou par terre. Beaucoup d’appareils à réservoir peuvent ensuite être raccordés à l’eau, le Bomann TSG 5702 est livré avec les tuyaux pour cela." },
      { f: "Pourquoi n’y a-t-il pas de notes de test ici ?", a: "Parce qu’il n’y a presque pas de tests. Stiftung Warentest, l’organisme de tests consommateurs le plus connu d’Allemagne, n’a pas testé de lave-vaisselle de table ces dernières années, ses tests actuels ne comportent que de grands appareils. Je n’ai pas non plus trouvé d’autres tests indépendants des appareils présentés. Je compare donc pour vous les données des fabricants, c’est-à-dire classe énergétique, eau, bruit et taille, et je vous dis honnêtement où les petits lave-vaisselle sont moins bons." },
      { f: "Et en Suisse ?", a: "Les appareils présentés sont conçus pour l’Allemagne et ont une fiche allemande. Elle ne rentre pas dans les prises suisses. C’est pourquoi je n’ai pas d’offre adaptée pour la Suisse pour le moment, mais j’en cherche une." }
    ],
    profitipp: {
      titel: "Pour un lavage propre et économe",
      text: "Quelques gestes font une grande différence :",
      liste: [
        "Jetez seulement les gros restes à la poubelle et ne prélavez pas. Selon une étude de l’Université de Bonn, prélaver sous l’eau courante coûte beaucoup d’eau et d’énergie",
        "Ne le lancez que lorsqu’il est plein. Dans la même étude, beaucoup de lave-vaisselle tournaient à moitié vides",
        "Choisissez le plus souvent le programme éco. Il dure le plus longtemps, mais il est conçu pour consommer peu d’électricité et d’eau",
        "Avec l’appareil à réservoir : avant de démarrer, vérifiez que le tuyau d’évacuation est bien placé dans l’évier"
      ]
    },
    rechner: "geschirrspueler",
    video: "mini-geschirrspueler",
    preisstand: "Oktober 2026"
  },
  {
    id: "reinigungsbuerste",
    name: "Brosse de nettoyage électrique",
    kurzname: "une brosse électrique",
    kategorie: "Maison",
    symbol: "🧽",
    bild: "",
    kurz: "Une brosse sans fil sur batterie avec tête rotative et long manche pour la douche, le carrelage, la baignoire et les joints.",
    warum: "Nous ne vivons tout simplement plus à une époque où l’on nettoie la salle de bain avec une éponge à récurer. La brosse tourne toute seule, vous la guidez simplement en appuyant légèrement. Plus besoin de s’agenouiller dans la douche ni de frotter jusqu’à en avoir mal au bras. Avec d’autres embouts, elle nettoie aussi le four, l’évier et les cadres de fenêtre.",
    statt: "Au lieu de frotter à la main",
    nutzen: "Frotte pour vous, pendant que vous restez debout.",
    spart: ["muehe", "zeit"],
    fokus: "muehe",
    muehe: { vorher: 5, nachher: 2 },
    fuer: [
      "Le ménage vous fait mal au dos ou aux genoux",
      "Les joints et la cabine de douche sont votre cauchemar",
      "Vous voulez finir la salle de bain plus vite et avoir plus de temps pour des choses plus agréables"
    ],
    nachteile: [
      "La recharge dure en général environ trois heures, mais une charge suffit ensuite pour toute une salle de bain",
      "Les joints encrassés et les taches tenaces, elle n’en vient à bout qu’avec un produit puissant",
      "Si vous appuyez trop fort, elle ralentit ou s’arrête"
    ],
    modelle: [
      {
        stufe: "Milieu de gamme", spanne: "de 25 à 40\u00a0€",
        name: "Brosse de nettoyage sans fil Kedoyoy 8 en 1", preis: 34, empfohlen: true,
        punkte: [
          "Manche télescopique réglable en continu de 30 à 137 cm\u202f: vous nettoyez la douche et la baignoire debout",
          "Selon le fabricant, la batterie tient jusqu’à 90 minutes et se recharge en USB-C",
          "8 embouts, aussi pour les joints et les coins"
        ],
        fuer: "Pour la plupart des salles de bain. Mon conseil, car avec son long manche vous faites aussi la baignoire et le bac de douche debout.",
        link: amazon("kedoyoy reinigungsbürste", "kedoyoy brosse nettoyage électrique")
      },
      {
        stufe: "Haut de gamme", spanne: "à partir de 40 €",
        name: "HOTO Electric Spin Scrubber", preis: 80,
        punkte: [
          "Meilleure des huit brosses du test de Good Housekeeping (États-Unis, février 2026)",
          "Sa batterie y a tenu près de 2 heures 20, l’une des plus longues durées du test",
          "Perche télescopique de 94 à 130 cm selon le fabricant : vous nettoyez la baignoire et le bac de douche debout",
          "6 embouts, dont une éponge et un tampon à récurer"
        ],
        fuer: "Si vous nettoyez une grande salle de bain ou plusieurs, et que la batterie doit tenir longtemps.",
        hinweis: "Elle coûte nettement plus cher que le milieu de gamme. Selon Consumer Reports, la plupart des brosses nettoient à peu près aussi bien, la plus grande différence, c’est la batterie.",
        link: amazon("hoto electric spin scrubber", "hoto electric spin scrubber")
      }
    ],
    fragen: [
      { f: "Une batterie suffit-elle pour toute la salle de bain\u202f?", a: "En général, oui. Selon les fabricants, beaucoup de modèles tiennent de 60 à 90 minutes, et les testeurs ont nettoyé une salle de bain sans problème avec une seule charge. La recharge se fait par câble USB comme pour un téléphone et dure en général environ trois heures." },
      { f: "Peut-elle être mouillée\u202f?", a: "Elle supporte les éclaboussures. Mais ne la plongez pas sous l’eau. Les embouts se retirent et se rincent." },
      { f: "Quel embout sert à quoi\u202f?", a: "Brosse ronde pour le carrelage et la baignoire, brosse d’angle pour les joints et les coins, éponge pour le lavabo et la robinetterie, brosse plate pour le sol." },
      { f: "Ai-je quand même besoin de produits ménagers\u202f?", a: "Oui. La brosse vous épargne le frottage, mais pas le produit. Laissez-le agir quelques minutes, puis brossez. Pour les joints encrassés, il vous faut un produit puissant." },
      { f: "Peut-elle rayer les surfaces\u202f?", a: "Oui, ça peut arriver. Les poils durs et les tampons à récurer peuvent rayer l’acrylique, la vitrocéramique, l’inox ou la peinture. Utilisez là une éponge douce ou un tampon en microfibre et testez d’abord sur un endroit discret." }
    ],
    rechner: "buerste",
    video: "buerste"
  },
  {
    id: "stretchdeckel",
    name: "Couvercles extensibles en silicone",
    kurzname: "des couvercles extensibles",
    kategorie: "Cuisine",
    symbol: "🥣",
    bild: "",
    kurz: "Des couvercles extensibles pour les bols, boîtes, bocaux et même le demi-oignon.",
    warum: "Ils remplacent le film alimentaire et le papier aluminium quand vous couvrez des bols et des restes. Vous tirez simplement le couvercle sur le bord, il tient hermétiquement, et ensuite il va au lave-vaisselle au lieu de la poubelle.",
    statt: "Au lieu du film alimentaire et du papier alu",
    nutzen: "On l’enfile, c’est hermétique. Fini le film qui colle.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Vous avez souvent des fruits, légumes ou restes entamés",
      "Vous voulez jeter moins de plastique",
      "Le film alimentaire vous désespère régulièrement"
    ],
    nachteile: [
      "Aucun couvercle du kit ne va sur les très grands saladiers",
      "Sur un bord mouillé, il tient moins bien",
      "La taille doit être la bonne : trop grand, il glisse, trop petit, il peut se déchirer quand vous l’étirez"
    ],
    modelle: [
      {
        stufe: "Petit budget", spanne: "moins de 10\u00a0€",
        name: "Couvercles extensibles, lot de 12 ronds", preis: 9,
        punkte: [
          "12 couvercles ronds, deux de chaque dans six tailles de 6,5 à 21 cm",
          "Pour les bols, les bocaux et les demi-fruits"
        ],
        fuer: "Pour essayer, et si vous couvrez surtout des bols ronds et des bocaux.",
        link: amazon("silikon stretchdeckel 12 stück rund", "couvercles extensibles silicone lot de 12 ronds")
      },
      {
        stufe: "Milieu de gamme", spanne: "de 10 à 16\u00a0€",
        name: "Lot de 12 couvercles extensibles, ronds et carrés", preis: 13, empfohlen: true,
        punkte: [
          "6 couvercles ronds et 6 carrés dans six tailles d’environ 6 à 19 cm",
          "Aussi pour les boîtes carrées",
          "Lavables au lave-vaisselle"
        ],
        fuer: "Pour la plupart des cuisines. Mon conseil, car avec des couvercles ronds et carrés, vous êtes paré pour presque tout.",
        link: amazon("silikon stretchdeckel 12 stück rund eckig", "couvercles extensibles silicone 12 pièces ronds rectangulaires")
      },
      {
        stufe: "Haut de gamme", spanne: "à partir de 20\u00a0€",
        name: "Couvercles élastiques Lékué, lot de 3", preis: 25,
        punkte: [
          "Produit de marque du spécialiste de la cuisine Lékué",
          "Trois couvercles d’environ 11, 15 et 20 cm, pour des bols jusqu’à environ 24 cm"
        ],
        fuer: "Pour vous si vous préférez peu de couvercles, mais de grande qualité.",
        hinweis: "Seulement trois tailles. Pour les petits bocaux, il vous faut en plus un lot bon marché.",
        link: amazon("lékué elastische deckel", "lékué couvercles extensibles")
      }
    ],
    fragen: [
      { f: "Sont-ils vraiment hermétiques\u202f?", a: "Oui, si le couvercle est entièrement tiré sur le bord et que le bord est sec. Dans les tests, même un bol incliné n’a alors pas laissé couler d’eau. Ils ne sont toutefois pas aussi hermétiques qu’une boîte sous vide, et je ne porterais pas un bol de soupe la tête en bas avec." },
      { f: "Vont-ils au micro-ondes\u202f?", a: "La plupart oui, regardez l’emballage. En réchauffant, laissez une petite ouverture pour que la vapeur puisse s’échapper." },
      { f: "Quelle taille choisir\u202f?", a: "Le couvercle doit être un peu plus petit que le bord, il s’étire alors par-dessus. Un lot de six tailles va du demi-citron au bol d’un peu plus de 20 cm de diamètre. Pour les bols plus grands, il vous faut un lot avec un très grand couvercle." },
      { f: "Combien de temps durent-ils\u202f?", a: "Cela dépend de la qualité. Chez America's Test Kitchen, tous les couvercles ont supporté dix lavages sans dommage, chez d’autres testeurs certains se sont déchirés dès la pose. Ne les étirez pas plus que nécessaire et tenez-les loin des couteaux et des arêtes tranchantes." },
      { f: "Prennent-ils les odeurs\u202f?", a: "Oui, après de l’oignon, de l’ail ou de la moutarde, ils sentent souvent un moment. L’odeur diminue à chaque lavage. Si elle persiste, frottez-les avec un peu de bicarbonate de soude et une éponge humide." }
    ],
    rechner: "deckel",
    video: "deckel"
  },
  {
    id: "kindle",
    name: "Liseuse",
    kurzname: "une liseuse",
    kategorie: "Loisirs",
    symbol: "📖",
    bild: "",
    kurz: "Un appareil de lecture avec un écran qui ressemble presque à du papier. Et il peut contenir des milliers de livres.",
    warum: "Les livres numériques sont généralement moins chers que les livres imprimés, et beaucoup de classiques sont même gratuits. Un nouveau livre arrive en quelques secondes, vous pouvez agrandir le texte, et la batterie tient des semaines.",
    statt: "Au lieu des livres imprimés",
    nutzen: "Des milliers de livres dans une seule main, chacun en quelques secondes.",
    spart: ["muehe", "geld"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Vous lisez beaucoup, aussi en déplacement ou en vacances",
      "Votre bibliothèque est pleine depuis longtemps",
      "Le soir, vous lisez au lit sans allumer la lampe"
    ],
    nachteile: [
      "Les images et les BD ne rendent pas bien en niveaux de gris. Les appareils avec écran couleur coûtent plus cher, et leurs couleurs sont plus pâles que sur une tablette",
      "Vous ne pouvez ni prêter les livres numériques à des amis ni les revendre",
      "La Kindle ne lit pas les livres des bibliothèques publiques allemandes (Onleihe). Pour cela, il vous faut un autre appareil, par exemple de PocketBook"
    ],
    modelle: [
      {
        stufe: "Petit budget", spanne: "jusqu’à 170\u00a0€",
        name: "Kindle (2026)", preis: 155,
        punkte: [
          "6 pouces et seulement 140 g, plus léger qu’un livre de poche",
          "Batterie jusqu’à 6 semaines selon Amazon",
          "De la place pour des milliers de livres"
        ],
        fuer: "Pour vous si vous lisez surtout des romans et achetez chez Amazon.",
        hinweis: "Pas étanche et sans lumière chaude.",
        link: amazon("kindle 2026"),
        alternativen: [
          { name: "PocketBook Verse Pro", preis: 160, text: "Pour presque le même prix, avec lumière chaude et étanche. Vous empruntez les livres de la bibliothèque directement sur l’appareil.", link: amazon("pocketbook verse pro") }
        ]
      },
      {
        stufe: "Milieu de gamme", spanne: "de 170 à 260\u00a0€",
        name: "Kindle Paperwhite (2026)", preis: 210, empfohlen: true,
        punkte: [
          "Écran plus grand de 7 pouces",
          "Lumière chaude pour le soir au lit",
          "Étanche : survit même à une chute dans la baignoire",
          "Batterie jusqu’à 12 semaines selon Amazon"
        ],
        fuer: "Pour tous ceux qui lisent beaucoup. Mon conseil, car elle a une lumière chaude et elle est étanche.",
        hinweis: "Toute nouvelle\u202f: Amazon la livre à partir du 11 novembre 2026.",
        link: amazon("kindle paperwhite 2026"),
        alternativen: [
          { name: "Kobo Clara BW", preis: 170, text: "Un peu plus petite (6 pouces), avec lumière chaude et étanche. Les livres, vous les achetez chez Kobo au lieu d’Amazon.", link: amazon("kobo clara bw") }
        ]
      },
      {
        stufe: "Haut de gamme", spanne: "à partir de 260\u00a0€",
        name: "Kindle Colorsoft (2026)", preis: 300,
        punkte: [
          "Écran couleur pour les BD, les livres pour enfants et les images",
          "7 pouces, batterie jusqu’à 8 semaines selon Amazon",
          "Étanche, comme le Paperwhite"
        ],
        fuer: "Pour les BD, les livres pour enfants et tout ce qui contient des images.",
        hinweis: "Pour les romans seuls, vous n’avez pas besoin de la couleur. Amazon la livre à partir du 11 novembre 2026.",
        link: amazon("kindle colorsoft 2026"),
        alternativen: [
          { name: "Kobo Libra Colour", preis: 245, text: "Aussi en couleur, avec des touches pour tourner les pages. Les notes se prennent avec un stylet vendu séparément.", link: amazon("kobo libra colour") },
          { name: "PocketBook Era Color", preis: 225, text: "Couleur et livres de la bibliothèque directement sur l’appareil.", link: amazon("pocketbook era color") }
        ]
      }
    ],
    fragen: [
      { f: "Quelle liseuse me convient\u202f?", a: "Pour les romans, la Kindle normale suffit largement. Si vous lisez beaucoup, le soir au lit ou dans la baignoire, prenez la Paperwhite\u202f: elle a une lumière chaude et elle est étanche. La couleur ne vous sert que pour les BD, les livres pour enfants ou les images. Et si vous aimez emprunter à la bibliothèque, une PocketBook est le meilleur choix." },
      { f: "Puis-je emprunter des livres à la bibliothèque\u202f?", a: "Avec la Kindle, malheureusement non\u202f: le service Onleihe des bibliothèques publiques allemandes n’y fonctionne pas. Avec PocketBook et Tolino, vous empruntez directement sur l’appareil, avec Kobo via l’ordinateur." },
      { f: "Puis-je lire mes propres fichiers et PDF\u202f?", a: "Oui. Avec la Kindle, vous envoyez les fichiers sur l’appareil avec «\u202fSend to Kindle\u202f» via l’appli ou par e-mail, y compris des livres numériques sans protection anticopie d’autres boutiques. Avec Kobo et PocketBook, cela se fait par exemple par câble depuis l’ordinateur." },
      { f: "Ai-je besoin de Kindle Unlimited\u202f?", a: "Non. C’est un abonnement facultatif avec un grand choix de livres. Il ne vaut le coup que si vous lisez beaucoup et que le choix vous plaît. Le mieux est de le tester d’abord, il y a souvent un mois d’essai gratuit." },
      { f: "Y a-t-il de la publicité sur l’appareil\u202f?", a: "Sur la Kindle, c’est possible. À l’achat, vérifiez s’il est écrit «\u202favec publicités\u202f». Cette version affiche des offres sur l’écran de verrouillage et sur l’écran d’accueil, et coûte un peu moins cher." },
      { f: "Combien de temps tient la batterie\u202f?", a: "Selon Amazon, une Kindle tient de 6 à 12 semaines selon le modèle, si vous lisez environ une demi-heure par jour avec le Wi-Fi désactivé. Avec beaucoup de lumière et le Wi-Fi, la batterie se vide plus vite." }
    ],
    rechner: "kindle",
    video: "kindle"
  },
  {
    id: "zahnbuerste",
    name: "Brosse à dents électrique",
    kurzname: "une brosse à dents électrique",
    kategorie: "Soins",
    symbol: "🪥",
    bild: "",
    kurz: "Une brosse à dents à batterie dont la tête bouge toute seule. Vous la guidez simplement de dent en dent, et sur beaucoup de modèles un minuteur vous indique quand les deux minutes sont écoulées.",
    warum: "Vous n’avez plus à frotter vous-même : la brosse fait le mouvement, et vous la tenez simplement contre les dents. Les bons modèles remarquent même quand vous appuyez trop fort. Et selon une grande synthèse de 51 études, après plus de trois mois vous avez en moyenne environ un cinquième de plaque dentaire en moins qu’avec une brosse manuelle.",
    statt: "Au lieu d’une brosse à dents manuelle",
    nutzen: "Nettoie plus à fond, vous la guidez simplement.",
    spart: ["muehe"],
    fokus: "muehe",
    muehe: { vorher: 3, nachher: 1 },
    fuer: [
      "Vous voulez des dents plus propres\u202f: avec une brosse électrique, il reste en moyenne environ un cinquième de plaque en moins qu’avec une brosse manuelle",
      "Vous avez tendance à appuyer trop fort",
      "Vous voulez savoir quand les deux minutes sont écoulées"
    ],
    nachteile: [
      "Les têtes de rechange coûtent en plus. Vous les changez environ tous les trois mois",
      "Elle doit aller de temps en temps sur sa station de charge, toutes les quelques semaines selon le modèle"
    ],
    vergleich: {
      vorherTitel: "Brosse manuelle",
      vorher: [
        "Vous frottez vous-même d’avant en arrière",
        "Vous remarquez à peine si vous appuyez trop fort",
        "Vous ne savez pas quand les deux minutes sont écoulées"
      ],
      nachher: [
        "La tête bouge toute seule, vous la guidez",
        "Beaucoup de modèles vous avertissent quand vous appuyez trop fort",
        "Sur beaucoup de modèles, un minuteur vous dit quand c’est fini"
      ]
    },
    profitipp: {
      titel: "Comment bien se brosser les dents",
      text: "Avec une brosse électrique, on se brosse autrement qu’à la main :",
      liste: [
        "D’abord la brosse dans la bouche, puis l’allumer, sinon ça éclabousse",
        "Tenir la tête légèrement contre les dents et la guider lentement de dent en dent, sans frotter",
        "Peu de pression, la brosse fait le travail pour vous",
        "Fini après deux minutes, rincer rapidement la tête"
      ]
    },
    modelle: [
      {
        stufe: "Petit budget", spanne: "jusqu’à 50 €",
        name: "Philips Sonicare 3100", preis: 40, preisText: "env. 40 à 50 €",
        punkte: [
          "La version précédente a obtenu « bien » chez Stiftung Warentest (note 2,2, numéro 12/2024)",
          "Capteur de pression : elle vous avertit quand vous appuyez trop fort",
          "Minuteur avec un signal toutes les 30 secondes"
        ],
        fuer: "Pour vous si vous voulez passer à l’électrique à petit prix et qu’un seul programme vous suffit.",
        hinweis: "Elle n’a qu’un programme de brossage, et selon le fabricant la batterie tient jusqu’à 14 jours.",
        link: amazon("philips sonicare 3100"),
        alternativen: [
          { name: "Silk'n SonicSmile Plus", preis: 25, text: "Meilleur rapport qualité-prix chez Stiftung Warentest (« bien », note 2,3, numéro 12/2024), et encore moins chère. Elle n’a pas de capteur de pression.", link: amazon("silk'n sonicsmile plus") }
        ]
      },
      {
        stufe: "Milieu de gamme", spanne: "50 à 120 €",
        name: "Laifen Wave Pro", preis: 100, preisText: "env. 100 €", empfohlen: true,
        punkte: [
          "La tête oscille et vibre en même temps, selon le fabricant jusqu’à 60° et jusqu’à 66 000 fois par minute",
          "Capteur de pression : si vous appuyez trop fort, elle vous le signale",
          "Deux modes avec trois niveaux chacun. Dans l’appli, vous pouvez les régler plus finement, mais vous n’en avez pas besoin",
          "Selon le fabricant, la batterie tient jusqu’à 70 jours"
        ],
        fuer: "Pour la plupart. Mon conseil, car je l’utilise moi-même.",
        hinweis: "Stiftung Warentest ne l’a pas encore testée, le modèle précédent Laifen Wave y a obtenu « bien » (note 2,2, numéro 12/2024). Elle n’a pas de port USB-C sur le manche et se recharge uniquement sans fil sur sa station.",
        link: amazon("laifen wave pro"),
        alternativen: [
          { name: "Philips Sonicare 5500", preis: 80, text: "Vainqueur actuel du test chez Stiftung Warentest (« bien », note 1,7, numéro 12/2025). Elle vous avertit quand vous appuyez trop fort et a deux modes.", link: amazon("philips sonicare 5500") },
          { name: "Oral-B iO Series 3N", preis: 70, text: "A été vainqueur du test chez Stiftung Warentest (« bien », note 1,9, numéro 12/2024). Un anneau lumineux vous montre quand vous appuyez trop fort. Trois modes, sans appli.", link: amazon("oral-b io series 3n") }
        ]
      },
      {
        stufe: "Haut de gamme", spanne: "à partir de 150 €",
        name: "Philips Sonicare Prestige 9900", preis: 200, preisText: "env. 200 €",
        punkte: [
          "A été vainqueur du test chez Stiftung Warentest (« bien », note 1,8, numéro 12/2021)",
          "Adapte elle-même son intensité à votre pression (SenseIQ)",
          "Avec appli"
        ],
        fuer: "Pour vous si vous voulez le meilleur.",
        hinweis: "Le test date déjà de 2021. Pour la plupart, le milieu de gamme suffit largement.",
        alternativen: [
          { name: "Philips Sonicare 7100", preis: 140, text: "« Bien » chez Stiftung Warentest (note 1,8, numéro 12/2025) et moins chère que la Prestige.", link: amazon("philips sonicare 7100") }
        ],
        link: amazon("philips sonicare prestige 9900")
      }
    ],
    fragen: [
      { f: "Une brosse électrique nettoie-t-elle vraiment mieux ?", a: "Oui. Une grande synthèse de 51 études (Cochrane, 2014) montre que les personnes qui se brossent les dents à l’électrique pendant plus de trois mois ont en moyenne 21 % de plaque en moins et 11 % d’inflammation des gencives en moins qu’avec une brosse manuelle." },
      { f: "Brosse sonique ou tête rotative : laquelle est la meilleure ?", a: "Les deux nettoient bien. Selon Stiftung Warentest, aucun des deux systèmes n’a d’avantage net pour le brossage. Dans le test le plus récent (numéro 12/2025), c’est une brosse sonique qui est en tête, la Philips Sonicare 5500 (note 1,7). Dans le test précédent, une Oral-B à tête ronde avait gagné (note 1,9). Prenez celle que vous aimez utiliser." },
      { f: "Tous les combien change-t-on la tête de brosse ?", a: "Environ tous les trois mois, ou plus tôt si les poils s’écartent. Certains modèles vous le rappellent." },
      { f: "Comment bien se brosser les dents ?", a: "Deux fois par jour pendant deux minutes. Vous tenez la tête légèrement contre les dents et la guidez lentement de dent en dent. Inutile de frotter, la brosse s’en charge." },
      { f: "Ai-je besoin de l’appli ?", a: "Non. Sur la Laifen Wave Pro, l’appli vous permet de régler le brossage et affiche un bilan de vos temps de brossage. Vous pouvez vous brosser les dents sans téléphone." }
    ],
    video: "zahnbuerste",
    preisstand: "Oktober 2026"
  }

];
