/*
  La page cadeaux myle.life/fr/geschenke (« Des cadeaux qui font gagner du temps »). Même structure que geschenke.js en allemand.
  Uniquement des appareils que MYLE recommande déjà. Chaque groupe cite les produits par leur id dans produkte.js.
  Si un appareil n’est pas disponible dans la boutique du pays (keinModell), la page le laisse de côté.
*/
const GESCHENKE = {
  eyebrow: "Idées cadeaux",
  titel: "Des cadeaux qui font gagner du temps",
  einstieg: [
    "Des objets, la plupart d’entre nous en ont assez. Du temps libre, en revanche, presque personne n’en a de trop.",
    "C’est pourquoi vous trouverez ici des appareils qui soulagent chaque semaine la personne à qui vous les offrez, pas seulement à Noël. Je les recommande tous sur MYLE, chacun avec ses inconvénients honnêtes et un calculateur sur la page du produit."
  ],
  spartStd: "fait gagner env. {n} h par an",
  spartGeld: "fait économiser env. {geld} par an",
  knopf: "Voir ma recommandation",
  hinweis: "Les heures et les euros sont des estimations avec les valeurs de départ des calculateurs. Sur chaque page produit, vous pouvez les calculer plus précisément pour le foyer de la personne à qui vous l’offrez.",
  gruppen: [
    { titel: "Pour un premier logement", text: "Peu de place, peu de temps et pas encore de routine pour le ménage : ces appareils facilitent le départ.",
      produkte: ["airfryer", "reiskocher", "mini-geschirrspueler", "smarte-lampen", "wassersprudler"] },
    { titel: "Pour les parents qui manquent de temps", text: "Quand la journée avec les enfants est déjà bien remplie, tout ce qui fonctionne tout seul à côté aide.",
      produkte: ["waschtrockner", "kuechenmaschine-kochfunktion"] },
    { titel: "Pour les amateurs de café et les épicuriens", text: "Pour tous ceux qui aiment se faire plaisir : un bon café, du pain tout juste cuit et un livre le soir.",
      produkte: ["kaffeevollautomat", "kuechenmaschine", "kindle"] },
    { titel: "Pour tous ceux qui n’aiment pas faire le ménage", text: "Mon conseil le plus important est tout en haut. Ensuite, passer l’aspirateur n’est plus un sujet pour la plupart des gens.",
      produkte: ["saugroboter", "akkusauger"] },
    { titel: "Petits cadeaux", text: "Des appareils bon marché qui servent pourtant tous les jours. Parfaits pour un échange de cadeaux ou comme petite attention.",
      produkte: ["stretchdeckel", "reinigungsbuerste", "sparduschkopf", "zahnbuerste"] }
  ],
  warum: {
    "airfryer": "Croustillant sans long préchauffage et quasiment pas de vaisselle. Il trouve aussi sa place dans une petite cuisine.",
    "reiskocher": "Le riz est réussi à chaque fois, et personne n’a besoin de rester devant la plaque.",
    "smarte-lampen": "La lumière par appli ou programme, sans électricien. Les ampoules se vissent simplement dans la douille existante.",
    "wassersprudler": "De l’eau pétillante directement du robinet. Fini les packs d’eau à porter.",
    "waschtrockner": "Le linge dedans le matin, sec le soir. Plus d’étendoir dans le salon.",
    "kuechenmaschine-kochfunktion": "Mélange et cuit tout seul pendant qu’on s’occupe des enfants.",
    "mini-geschirrspueler": "Lave la vaisselle même là où un grand lave-vaisselle ne rentre pas.",
    "kaffeevollautomat": "Du café fraîchement moulu et un cappuccino d’une simple touche, sans aucune capsule.",
    "kuechenmaschine": "Pétrit la pâte pour le pain, la pizza et les biscuits. Les mains restent libres.",
    "kindle": "Des milliers de livres dans une main, avec son propre éclairage pour lire au lit.",
    "saugroboter": "Nettoie selon un programme pendant que la personne est au travail. Pour moi, un énorme gain de qualité de vie.",
    "akkusauger": "Le décrocher du mur, aspirer vite fait, le raccrocher. Sans câble et sans aspirateur lourd.",
    "stretchdeckel": "S’adapte aux saladiers, boîtes, bocaux et même à un demi-oignon, et remplace le film alimentaire.",
    "reinigungsbuerste": "Frotte la baignoire, le carrelage et le lavabo pendant que vous restez debout.",
    "sparduschkopf": "Économise de l’eau chaude à chaque douche, et donc de l’argent, sans se doucher moins longtemps.",
    "zahnbuerste": "Nettoie plus en profondeur qu’une brosse à dents manuelle. Il suffit de la guider."
  },
  fragenTitel: "Questions et réponses",
  fragen: [
    { f: "Qu’offrir à quelqu’un qui a déjà tout ?",
      a: "Idéalement, quelque chose qui le soulage chaque semaine. La plupart des gens ont assez d’objets, mais presque personne n’a de temps libre en trop. Un robot aspirateur laveur, une friteuse sans huile ou une machine à café automatique servent presque tous les jours et rappellent longtemps le cadeau. Renseignez-vous discrètement avant pour savoir si le foyer en a déjà un." },
    { f: "Un robot aspirateur, est-ce un bon cadeau ?",
      a: "Oui, si peu de choses traînent par terre et si la personne veut bien configurer une appli une fois. Avec les valeurs de départ de mon calculateur, il fait gagner environ 50 heures de ménage par an. Pour qui il ne convient pas vraiment, c’est expliqué honnêtement sur la page du robot aspirateur laveur." },
    { f: "Jusqu’à quand commander pour que ça arrive avant Noël ?",
      a: "Je ne peux malheureusement pas vous le promettre. Le délai de livraison d’un appareil s’affiche directement sur la page du produit chez Amazon, avec la date de livraison prévue. Les gros appareils mettent souvent plus de temps que les petits. Mieux vaut commander une ou deux semaines plus tôt pour garder de la marge." }
  ]
};
