const CHARACTERS = {
    MICKEY: "Mickey Mouse",
    MINNIE: "Minnie Mouse",
    PLUTO: "Pluto",
    GOOFY: "Goofy",
    DAISY: "Daisy Duck",
    DONALD: "Donald Duck",
    PETE: "Pete",
    CHIP: "Chip",
    DALE: "Dale",
    SCROOGE: "Scrooge McDuck",
    HUEY: "Huey",
    DEWEY: "Dewey",
    LOUIE: "Louie",
    WOODY: "Woody",
    JESSIE: "Jessie",
    BUZZ: "Buzz Lightyear",
    ZURG: "Zurg",
    BO_PEEP: "Bo Peep",
    HAMM: "Hamm",
    SARGE: "Sarge",
    REX: "Rex",
    BULLSEYE: "Bullseye",
    ALIEN: "Toy Alien",
    DUCKY: "Ducky",
    BUNNY: "Bunny",
    FORKY: "Forky",
    CINDERELLA: "Cinderella",
    CHARMING: "Prince Charming",
    GODMOTHER: "Fairy Godmother",
    ANASTASIA: "Anastasia",
    DRIZELLA: "Drizella",
    TREMAINE: "Lady Tremaine",
    PETER: "Peter Pan",
    WENDY: "Wendy Darling",
    TINK: "Tinkerbell",
    MICHAEL: "Michael Darling",
    JOHN: "John Darling",
    HOOK: "Captain Hook",
    ELIZABETH: "Elizabeth Swann",
    WILL: "Will Turner",
    JACK_SPARROW: "Jack Sparrow",
    BARBOSSA: "Captain Barbossa",
    TIA: "Tia Dalma",
    DAVY: "Davy Jones",
    MIKE: "Mike",
    SULLEY: "Sulley",
    BOO: "Boo",
    ROZ: "Roz",
    CELIA: "Celia Mae",
    RANDALL: "Randall Boggs",
    WALLE: "WALL-E",
    EVE: "EVE",
    RAPUNZEL: "Rapunzel",
    FLYNN: "Flynn",
    GOTHEL: "Mother Gothel",
    MAXIMUS: "Maximus",
    PASCAL: "Pascal",
    AURORA: "Aurora",
    PHILLIP: "Prince Phillip",
    FLORA: "Flora",
    FAUNA: "Fauna",
    MERRYWEATHER: "Merryweather",
    JUDY: "Judy Hopps",
    NICK: "Nick Wilde",
    BOGO: "Chief Bogo",
    FLASH: "Flash",
    BAMBI: "Bambi",
    THUMPER: "Thumper",
    FLOWER: "Flower",
    BAGHEERA: "Bagheera",
    MOWGLI: "Mowgli",
    BALOO: "Baloo",
    SHERE_KHAN: "Shere Khan",
    KING_LOUIE: "King Louie",
    DUMBO: "Dumbo",
    TIMOTHY: "Timothy Q. Mouse",
    RINGMASTER: "The Ringmaster",
    LADY: "Lady",
    TRAMP: "Tramp",
    JOCK: "Jock",
    TRUSTY: "Trusty",
    TONY: "Tony",
    JOE: "Joe",
    POCAHONTAS: "Pocahontas",
    MEEKO: "Meeko",
    PERCY: "Percy",
    KUZCO: "Kuzco",
    PACHA: "Pacha",
    YZMA: "Yzma",
    KRONK: "Kronk",
    REMY: "Remy",
    LINGUINI: "Linguini",
    COLETTE: "Colette",
    BERNARD: "Bernard",
    ORVILLE: "Orville",
    MISS_BIANCA: "Miss Bianca",
    PENNY: "Penny",
    MR_I: "Mr. Incredible",
    ELASTIGIRL: "Elastigirl",
    VIOLET: "Violet",
    DASH: "Dash",
    JACKJACK: "Jack-Jack",
    FROZONE: "Frozone",
    SYNDROME: "Syndrome",
    ZERO: "Zero",
    SALLY: "Sally",
    JACK_SKELLINGTON: "Jack Skellington",
    OOGIE: "Oogie Boogie",
    MAYOR: "The Mayor",
    LOCK: "Lock",
    SHOCK: "Shock",
    BARREL: "Barrel",
    ANNA: "Anna",
    ELSA: "Elsa",
    OLAF: "Olaf",
    KRISTOFF: "Kristoff",
    SVEN: "Sven",
    HANS: "Hans",
    HONEYMAREN: "Honeymaren",
    RYDER: "Ryder",
    FIRE_SPIRIT: "Fire Spirit",
    MULAN: "Mulan",
    LI_SHANG: "Li Shang",
    MUSHU: "Mushu",
    CRIKEE: "Cri-Kee",
    SHAN_YU: "Shan Yu",
    KHAN: "Khan",
    BELLE: "Belle",
    BEAST: "Beast",
    LUMIERE: "Lumiere",
    COGSWORTH: "Cogsworth",
    MRS_POTTS: "Mrs. Potts",
    CHIP_POTTS: "Chip Potts",
    GASTON: "Gaston",
    LEFOU: "LeFou",
    SIMBA: "Simba",
    NALA: "Nala",
    ZAZU: "Zazu",
    RAFIKI: "Rafiki",
    SCAR: "Scar",
    TIMON: "Timon",
    PUMBAA: "Pumbaa",
    SHENZI: "Shenzi",
    BANZAI: "Banzai",
    ED: "Ed",
    ALADDIN: "Aladdin",
    JASMINE: "Jasmine",
    ABU: "Abu",
    CARPET: "Carpet",
    JAFAR: "Jafar",
    IAGO: "Iago",
    GENIE: "Genie",
    RAJAH: "Rajah",
    SULTAN: "Sultan",
    ALICE: "Alice",
    MAD_HATTER: "Mad Hatter",
    MARCH_HARE: "March Hare",
    WHITE_RABBIT: "White Rabbit",
    CATERPILLAR: "Caterpillar",
    QUEEN_OF_HEARTS: "Queen of Hearts",
    CHESHIRE: "Cheshire Cat",
    BASHFUL: "Bashful",
    DOC: "Doc",
    SNEEZY: "Sneezy",
    DOPEY: "Dopey",
    HAPPY: "Happy",
    SNOW_WHITE: "Snow White",
    SNOW_PRINCE: "Snow Prince",
    THE_QUEEN: "The Queen",
    GRUMPY: "Grumpy",
    SLEEPY: "Sleepy",
    POOH: "Winnie the Pooh",
    EEYORE: "Eeyore",
    TIGGER: "Tigger",
    KANGA: "Kanga",
    ROO: "Roo",
    PIGLET: "Piglet",
    RABBIT: "Rabbit",
    CR: "Christopher Robin",
    OWL: "Owl",
    LILO: "Lilo",
    STITCH: "Stitch",
    NANI: "Nani",
    ANGEL: "Angel",
    PLEAKLEY: "Pleakley",
    JUMBA: "Jumba",
    COBRA_BUBBLES: "Cobra Bubbles",
    HIRO: "Hiro",
    BAYMAX: "Baymax",
    YOKAI: "Yokai",
    FRED: "Fred",
    WASABI: "Wasabi",
    HONEY_LEMON: "Honey Lemon",
    GOGO: "Go Go",
    SEBASTIAN: "Sebastian",
    SCUTTLE: "Scuttle",
    ARIEL: "Ariel",
    ERIC: "Prince Eric",
    TRITON: "King Triton",
    FLOUNDER: "Flounder",
    URSULA: "Ursula",
    RALPH: "Ralph",
    VANELLOPE: "Vanellope",
    FELIX: "Fix-It Felix Jr.",
    CALHOUN: "Calhoun",
    SPAMLEY: "Spamley",
    YESSS: "Yesss",
    SHANK: "Shank",
    GORD: "Gord",
    TIANA: "Tiana",
    NAVEEN: "Prince Naveen",
    EUDORA: "Eudora",
    LOTTIE: "Charlotte La Bouff",
    FACILIER: "Dr. Facilier",
    LOUIS: "Louis",
    ODIE: "Mama Odie",
    SINA: "Sina",
    MOANA: "Moana",
    MAUI: "Maui",
    HEI_HEI: "Hei Hei",
    TUI: "Chief Tui",
    GRAMMA_TALA: "Gramma Tala",
    PUA: "Pua",
    NEMO: "Nemo",
    MARLIN: "Marlin",
    DORY: "Dory",
    HANK: "Hank",
    CRUSH: "Crush",
    SQUIRT: "Squirt",
    BRUCE: "Bruce",
    DESTINY: "Destiny",
    BAILEY: "Bailey",
    MIGUEL: "Miguel",
    ABUELITA: "Abuelita",
    DANTE: "Dante",
    MAMA_IMELDA: "Mama Imelda",
    HECTOR: "Hector",
    MAMA_COCO: "Mama Coco",
    ERNESTO: "Ernesto",
    BRIDE: "The Bride",
    HATBOX_GHOST: "Hatbox Ghost",
    EZRA: "Ezra",
    GUS: "Gus",
    PHINEAS: "Phineas",
    BB8: "BB-8",
    POE: "Poe",
    FINN: "Finn",
    REY: "Rey",
    FIRST_ORDER_STORMTROOPER: "First Order Stormtrooper",
    KYLO_REN: "Kylo Ren",
    GENERAL_HUX: "General Hux",
    THE_MANDALORIAN: "The Mandalorian",
    THE_CHILD: "The Child",
    KUIIL: "Kuiil",
    CARA_DUNE: "Cara Dune",
    GREEF_KARGA: "Greef Karga",
    R2D2: "R2-D2",
    C3PO: "C-3PO",
    AHSOKA: "Ahsoka Tano",
    BOBA_FETT: "Boba Fett",
    FENNEC_SHAND: "Fennec Shand",
    BARLEY: "Barley",
    COLT: "Colt",
    LAUREL: "Laurel",
    DAD: "Dad",
    IAN: "Ian",
    BLAZEY: "Blazey",
    MANTICORE: "The Manticore",
    HERCULES: "Hercules",
    MEG: "Meg",
    PHIL: "Phil",
    PEGASUS: "Pegasus",
    HADES: "Hades",
    PAIN: "Pain",
    PANIC: "Panic",
    MERIDA: "Merida",
    QUEEN_ELINOR: "Queen Elinor",
    KING_FERGUS: "King Fergus",
    LORD_MACINTOSH: "Lord Macintosh",
    LORD_MACGUFFIN: "Lord MacGuffin",
    LORD_DINGWALL: "Lord Dingwall",
    RAYA: "Raya",
    SISU: "Sisu",
    BOUN: "Boun",
    TUK_TUK: "Tuk Tuk",
    NAMAARI: "Namaari",
    LUKE_SKYWALKER: "Luke Skywalker",
    LEIA_ORGANA: "Leia Organa",
    HAN_SOLO: "Han Solo",
    CHEWBACCA: "Chewbacca",
    DARTH_VADER: "Darth Vader",
    TIE_FIGHTER_PILOT: "TIE Fighter Pilot",
    YODA: "Yoda",
    LANDO_CALRISSIAN: "Lando Calrissian",
    IMPERIAL_STORMTROOPER: "Imperial Stormtrooper",
    LUCA: "Luca",
    ALBERTO: "Alberto",
    GIULIA: "Giulia",
    ERCOLE: "Ercole",
    MACHIAVELLI: "Machiavelli",
    PERDITA: "Perdita",
    ROLLY: "Rolly",
    PONGO: "Pongo",
    CRUELLA: "Cruella",
    LUCKY: "Lucky",
    PATCH: "Patch",
    PENNY_TR: "Penny-TR",
    PINOCCHIO: "Pinocchio",
    JIMINY_CRICKET: "Jiminy Cricket",
    GEPPETTO: "Geppetto",
    FIGARO: "Figaro",
    HONEST_JOHN: "Honest John",
    STROMBOLI: "Stromboli",
    BLUE_FAIRY: "Blue Fairy",
    LITTLE_JOHN: "Little John",
    MAID_MARIAN: "Maid Marian",
    PRINCE_JOHN: "Prince John",
    ROBIN_HOOD: "Robin Hood",
    SIR_HISS: "Sir Hiss",
    CHARLES_MUNTZ: "Charles Muntz",
    DUG: "Dug",
    CARL_FREDRICKSEN: "Carl Fredricksen",
    RUSSELL: "Russell",
    KEVIN: "Kevin",
    MIRIAM: "Miriam",
    PRIYA: "Priya",
    MING_LEE: "Ming Lee",
    ABBY: "Abby",
    MEILIN: 'Meilin "Mei" Lee'
};

const GROUPS = {
    MF: "Mickey and Friends",
    DUCKTALES: "DuckTales",
    TS: "Toy Story",
    CINDERELLA: "Cinderella",
    PP: "Peter Pan",
    PIRATES: "Pirates",
    MONSTERS: "Monsters",
    WALLE: "WALL-E",
    TANGLED: "Tangled",
    SB: "Sleeping Beauty",
    ZOOTOPIA: "Zootopia",
    BAMBI: "Bambi",
    JB: "Jungle Book",
    DUMBO: "Dumbo",
    LATT: "Lady and the Tramp",
    POCAHONTAS: "Pocahontas",
    ENG: "Emperor's New Groove",
    RATATOUILLE: "Ratatouille",
    RESCUERS: "The Rescuers",
    INCREDS: "Incredibles",
    NBC: "Nightmare",
    FROZEN: "Frozen",
    MULAN: "Mulan",
    BATB: "Beauty",
    LK: "Lion King",
    ALADDIN: "Aladdin",
    AIW: "Alice",
    SNOW_WHITE: "Snow White",
    WTP: "Pooh",
    LS: "Lilo and Stitch",
    BH6: "Big Hero 6",
    TLM: "The Little Mermaid",
    WIR: "Wreck-It Ralph",
    PATF: "Princess and the Frog",
    MOANA: "Moana",
    FN: "Finding Nemo",
    COCO: "Coco",
    HM: "Haunted Mansion",
    STAR_WARS: "Star Wars",
    ONWARD: "Onward",
    DISNEY_PARKS: "Disney Parks",
    HERCULES: "Hercules",
    BRAVE: "Brave",
    RAYA: "Raya and the Last Dragon",
    LUCA: "Luca",
    DALMATIANS: "101 Dalmatians",
    PINOCCHIO: "Pinocchio",
    ROBINHOOD: "Robin Hood",
    UP: "Up",
    TURNING_RED: "Turning Red"
};

const SPECIAL_ITEMS = {
    REFRESH_TOKEN: "Refresh Token",
    GAMING_REMOTE: "Gaming Remote",
    GAMING_VISOR: "Gaming Visor",
    ANTIVIRUS: "Anti-Virus Chip",
    VIRUS_TRACKER: "Virus Tracker",
    HONEYCOMB: "Honeycomb",
    HONEY_DIPPER: "Honey Dipper",
    HEART_LOCK: "Heart Lock",
    KEY: "Key",
    CRITTER_NET: "Critter Net",
    CRITTER_CONTAINER: "Critter Container",
    COMFY_BASKET: "Comfy Basket",
    SWEET_TREAT: "Sweet Treat",
    EMP: "EMP",
    FUSION_CUTTER: "Fusion Cutter",
    BRUSH: "Brush",
    DUSTPAN: "Dustpan",
    GARDEN_SHEARS: "Garden Shears",
    CURSEBEGONE: "Curse-Be-Gone",
    RED_STRING: "Red String",
    BAG: "Bag",
    STRING: "String",
    LANTERN: "Lantern",
    LOTUS_CANDLE: "Lotus Candle",
    WOOD_CARVING_TOOLS: "Wood-Carving Tools",
    WITCH_POTION_BOTTLE: "Witch's Potion Bottle",
    BINOCULARS: "Binoculars",
    ION_GRENADE: "Ion Grenade",
    NUNA_TURKEY_JERKEY: "Nuna Turkey Jerky",
    BLUE_AND_GREEN_MILK: "Blue and Green Milk",
    PUPPY_LEASH: "Puppy Leash",
    FEATHERDUSTER: "Featherduster",
    GEM_LURE: "Gem Lure",
    NET: "Net",
    ICE_SPIDER_EGG: "Ice Spider Egg",
    FLAMETHROWER: "Flamethrower",
    DRUMSTICK: "Drumstick",
    BLASTER: "Blaster",
    LUKE_BESPIN_FABRIC: "Luke Skywalker Bespin Fabric",
    BOBA_FETT_BOUNTY_HUNTER_FABRIC: "Bounty Hunter Boba Fett Fabric"
};

const BUILDINGS = {
    SWORD_IN_STONE: "Sword in the Stone",
    MICKEY_HOUSE: "Mickey's House",
    MICKEY_PHIL: "Mickey's PhilharMagic",
    MICKEY_FUN_WHEEL: "Mickey's Fun Wheel",
    MINNIE_HOUSE: "Minnie's House",
    GOOFY_PLAYHOUSE: "Goofy's Playhouse",
    PLUTO_HOUSE: "Pluto's House",
    DAISY_DINER: "Daisy's Diner",
    DONALD_BOAT: "Donald's Boat",
    CHIP_DALE_TREEHOUSE: "Chip 'n' Dale Treehouse",
    SPLASH_MOUNTAIN: "Splash Mountain",
    FANTASMIC: "Fantasmic!",
    STEAMBOAT: "Steamboat Willie",
    MONEY_BIN: "The Money Bin",
    AL_TOY_BARN: "Al's Toy Barn",
    PIZZA_PLANET: "Pizza Planet",
    ASTRO_ORBITERS: "Astro Orbiters",
    JESSIE_SNACK_ROUNDUP: "Jessie's Snack Roundup",
    BUZZ_ASTRO_BLASTERS: "Buzz Lightyear's Astro Blasters",
    PARACHUTE_DROP: "Toy Soldiers Parachute Drop",
    JET_PACKS: "Jet Packs",
    RC_RACERS: "RC Racers",
    SLINKY: "Slinky Dog Dash",
    STAR_ADVENTURER: "Star Adventurer",
    TS_MANIA: "Toy Story Mania",
    SPACE_TRADERS: "Space Traders",
    WALLE_HOUSE: "WALL-E's House",
    REGAL_CARROUSEL: "Prince Charming's Regal Carrousel",
    FANTASY_FAIRE: "Fantasy Faire",
    PRINCESS_FAIRYTALE: "Princess Fairytale Hall",
    PIXIE_HOLLOW: "Pixie Hollow",
    PETER_PAN_FLIGHT: "Peter Pan's Flight",
    LOST_BOYS: "Lost Boys' Hideout",
    JOLLY_ROGER: "The Jolly Roger",
    TORTUGA_TAVERN: "Tortuga Tavern",
    PIRATES_OF_CARIBBEAN: "Pirates of the Caribbean",
    KRAKEN: "The Kraken",
    SEA_SERPENT: "Sea Serpent Swing",
    DAVY_ORGAN: "Davy Jones's Organ",
    CYCLOPS_SUSHI: "Cyclops Sushi",
    MONSTERS_LAUGH: "Monsters, Inc. Laugh Floor",
    MIKE_SULLEY_RESCUE: "Mike and Sulley to the Rescue",
    RAPUNZEL_TOWER: "Rapunzel's Tower",
    SNUGGLY_DUCKLING: "Snuggly Duckling",
    FAIRY_HUT: "Fairy Hut",
    AURORA_SPINNING: "Aurora's Spinning Wheel",
    ZOOTOPIA_PD: "Zootopia P.D.",
    LITTLE_RODENTIA: "Little Rodentia",
    ZOOTOPIA_RACE_TRACK: "Zootopia Race Track",
    MEADOW: "The Meadow",
    FOREST_ICE_RINK: "Forest Ice Rink",
    JUNGLE_RIVER: "Jungle River Drift",
    BALOO_OASIS: "Baloo's Oasis",
    KAA_JUNGLE: "Kaa's Jungle Gym",
    DUMBO_FLYING: "Dumbo the Flying Elephant",
    LADY_AND_TRAMP_HOME: "Lady and Tramp's Home",
    TONY_RESTAURANT: "Tony's Restaurant",
    BEAVER_DAM: "The Beaver Dam",
    BARNSTORMER: "The Barnstormer",
    ANIMATION_ACADEMY: "Animation Academy",
    GRANDMOTHER_WILLOW: "Grandmother Willow",
    YZMA_LAIR: "Yzma's Lair",
    MUDKA_MEAT_HUT: "Mudka's Meat Hut",
    GUSTEAU_KITCHEN: "Gusteau's Kitchen",
    REMY_ADVENTURE: "Remy's Ratatouille Adventure",
    RESCUE_AID_SOCIETY: "The Rescue Aid Society",
    MADAME_MEDUSA_RIVERBOAT: "Madame Medusa's Riverboat",
    OMNIDROID_OBSTACLE: "Omnidroid Obstacle Course",
    OMNIDROID_CITY: "The Omnidroid City",
    INCREDS_HOUSE: "The Incredibles House",
    SYNDROME_ENERGY: "Syndrome's Zero Point Energy Rings",
    JACK_HOUSE: "Jack's House",
    FINKELSTEIN_TOWER: "Finkelstein Tower",
    NIGHTMARE_CANDY: "Nightmare Candy Shop",
    BROOMSTICK_GRAVEYARD: "Broomstick Graveyard",
    OOGIE_BOOGIE_SPIN: "Oogie Boogie's Spin",
    ARENDELLE_COURTYARD: "Arendelle Courtyard Rink",
    ELSA_PALACE: "Elsa's Ice Palace",
    WANDERING_OAKEN: "Wandering Oaken's",
    TROLL_KNOLL: "Troll Knoll",
    STONE_GIANT_WATERFALL: "Stone Giant Waterfall",
    ENCHANTED_FOREST: "Enchanted Forest",
    WATER_SPIRIT_WAVE_RIDE: "Water Spirit Wave Ride",
    LANTERN: "Lantern Attraction",
    ANCESTOR_SHRINE: "Ancestor's Shrine",
    TRAINING_CAMP: "Training Camp",
    REFLECTIONS_CHINA: "Reflections of China",
    BELLE_HOUSE: "Belle's House",
    GASTON_TAVERN: "Gaston's Tavern",
    BE_OUR_GUEST: "Be Our Guest Restaurant",
    BEAST_CASTLE: "Beast's Castle",
    FESTIVAL_LK: "Festival of the Lion King",
    CIRCLE_OF_LIFE: "The Circle of Life",
    TREE_OF_LIFE: "Tree of Life",
    STREETS_OF_AGRABAH: "Streets of Agrabah",
    CAVE_OF_WONDERS: "Cave of Wonders",
    LOTUS_FOUNTAIN: "The Lotus Fountain",
    GENIE_LAMP_SHOW: "Genie's Lamp Show",
    MAGIC_LAMP_THEATER: "Magic Lamp Theater",
    MAGIC_CARPETS: "The Magic Carpets of Aladdin",
    ALICE_IN_WONDERLAND: "Alice in Wonderland",
    GOLDEN_AFTERNOON: "The Golden Afternoon",
    WHITE_RABBIT_HOUSE: "White Rabbit's House",
    TWEEDLE_WACKY: "The Tweedle's Wacky Fairway",
    MAD_TEA: "Mad Tea Party",
    SEVEN_DWARFS_MINE: "Seven Dwarfs Mine Train",
    SNOW_WHITE_SCARY: "Snow White's Scary Adventures",
    MAGIC_MIRROR: "Magic Mirror on the Wall",
    SEVEN_DWARFS_COTTAGE: "Seven Dwarfs' Cottage",
    MANY_ADVENTURES: "The Many Adventures of Winnie the Pooh",
    EEYORE_HOUSE: "Eeyore's House",
    RABBIT_HOUSE: "Rabbit's House",
    POOH_HUNNY_HUNT: "Pooh's Hunny Hunt",
    STITCH_GREAT_ESCAPE: "Stitch's Great Escape",
    LILO_HOUSE: "Lilo's House",
    LAHUI_BEACH: "Lahui Beach",
    OHANA: "Ohana",
    ITO_ROBOT_LAB: "Ito Ishioka Robotics Lab",
    FRED_GROUNDS: "Frederickson Grounds",
    SAN_FRAN: "San Fransokyo City",
    LUCKY_CAT: "Lucky Cat Cafe",
    ARIEL_GROTTO: "Ariel's Grotto",
    ATLANTICA: "Atlantica",
    UNDER_SEA: "Under the Sea",
    URSULA_LAIR: "Ursula's Lair",
    NICELAND: "Niceland",
    INTERNET: "The Internet",
    BUZZZTUBE: "BuzzzTube",
    SLAUGHTER_RACE: "Slaughter Race",
    PRINCESS_DRESSING_ROOM: "Princess Dressing Room",
    TIANA_PALACE: "Tiana's Palace",
    VOODOO: "Dr. Facilier's Voodoo Emporium",
    BAYOU: "Goin' Down the Bayou",
    ODIE_TREE: "Mama Odie's Tree",
    HOMECOMING: "A Homecoming Celebration",
    MOANA_BOAT: "Moana's Boat",
    KAKAMORA_BOAT: "Kakamora Boat",
    TAMATOA_LAIR: "Tamatoa's Lair",
    NEMO_SEAS: "The Seas with Nemo and Friends",
    CRUSH_COASTER: "Crush's Coaster",
    NEMO_SUBMARINE: "Finding Nemo Submarine Voyage",
    LAND_OF_DEAD: "Land of the Dead",
    SANTA_CECILIA_MARKET_SHOP: "Santa Cecilia Market Shop",
    RIVERA_FAMILIA_HOME: "Rivera Familia Home",
    MUSICAL_CELEBRATION: "Musical Celebration",
    CANTINA: "Cantina",
    TREADSPEEDER_BASE: "Treadspeeder Base",
    RESISTANCE_SPEEDERS: "Resistance Speeders",
    RESISTANCE_X_WING: "Resistance X-Wing",
    RAZOR_CREST: "Razor Crest",
    NEVARRO_CITY: "Nevarro City",
    SANDCRAWLER: "Sandcrawler",
    GUINEVERE: "Guinevere",
    LIGHTFOOT_HOUSE: "Lightfoot House",
    PATH_OF_RAVENS: "Path of Ravens",
    MANTICORE_TAVERN: "Manticore's Tavern",
    TRAINING_GROUNDS: "Training Grounds",
    STATUE_GARDEN: "Statue Garden",
    ZEUS_TEMPLE: "Zeus' Temple",
    CASTLE_DUNBROCH: "Castle DunBroch",
    RUINS_ANCIENT_KINGDOM: "Ruins of the Ancient Kingdom",
    RING_OF_STONES: "Ring of Stones",
    WITCH_COTTAGE: "Witch's Cottage",
    BOUN_SHRIMP_BOAT: "Boun's Shrimp Boat",
    HEART_PALACE: "Heart Palace",
    FANG_PALACE: "Fang Palace",
    MILLENIUM_FALCON: "Millennium Falcon",
    YAVIN4: "Yavin 4 Base",
    LUKE_HOME: "Luke's Home",
    GARBAGE_COMPACTOR: "Garbage Compactor",
    MARAUDER_SHUTTLE: "Marauder Shuttle",
    ALBERTO_HIDEOUT: "Alberto's Hideout",
    PORTOROSSO_TOWER: "Portorosso Tower",
    JUNGLE_CRUISE: "Jungle Cruise",
    RADCLIFFE_RESIDENCE: "Radcliffe Residence",
    THE_PARK: "The Park",
    THE_DE_VIL_PLACE: "The De Vil Place",
    CRUELLA_CAR: "Cruella's Car",
    GEPPETTO_WORKSHOP: "Geppetto's Workshop",
    STROMBOLI_CARAVAN: "Stromboli's Caravan",
    PINOCCHIO_DARING_JOURNEY: "Pinocchio's Daring Journey",
    PINOCCHIO_VILLAGE_HAUS: "Pinocchio Village Haus",
    SHERWOOD_FOREST: "Sherwood Forest",
    NOTTINGHAM: "Nottingham",
    CLOUD_CITY: "Cloud City",
    DAGOBAH: "Dagobah",
    PARADISE_FALLS: "Paradise Falls",
    CARL_HOUSE: "Carl's House",
    LEE_FAMILY_TEMPLE: "Lee Family Temple",
    TYLER_EPIC_PARTY: "Tyler's Epic Party",

    THE_HAUNTED_MANSION: "The Haunted Mansion",
    HAUNTED_MANSION: "Haunted Mansion",
    HOLLYWOOD_TOWER_TERROR: "Hollywood Tower of Terror",
    ENCHANTED_TIKI_ROOM: "Enchanted Tiki Room",
    FANTASIA: "Fantasia Gardens and Fairways",
    WESTERN_ARCADE: "Western Arcade", //ts?
    JUMPIN_JELLYFISH: "Jumpin' Jellyfish",
    PRIMEVAL_WHIRL: "Primeval Whirl",
    GOLDEN_ZEPHYR: "Golden Zephyr",
    WALT_CAROUSEL: "Walt Disney's Carousel of Progress",
    SPACESHIP_EARTH: "Spaceship Earth",

    // these will go away eventually
    SPACE_MOUNTAIN: "Space Mountain",
    SMALL_WORLD: "It's a Small World",
    THUNDER_MOUNTAIN: "Big Thunder Mountain Railroad"
};

const BUILDING_CATEGORIES = {
    STORYLINE: "storyline",
    EVENT: "event",
    PREMIUM: "premium",
    MERLIN: "Merlin's shop",
    CHEST: "chest",
    LEADERBOARD: "leaderboard prize",
    CALENDAR: "calendar streak reward",
    TOONTOWN: "Toontown",
    FANTASYLAND: "Fantasyland",
    TOMORROWLAND: "Tomorrowland",
    ADVENTURELAND: "Adventureland",
    FRONTIERLAND: "Frontierland"
};

const COSTUMES = {
    COMFY: "Comfy",
    HOLIDAY: "Holiday",
    PIRATE: "Pirate",
    HALLOWEEN: "Halloween",
    LUNAR: "Lunar",
    CLASSIC: "Classic",
    SPRING: "Spring",
    SORCEROR: "Sorceror",
    TUXEDO: "Tuxedo",
    TS4: "Toy Story 4",
    CAPTAIN_COAT: "Captain's Coat",
    ELASTIGIRL: "Elastigirl",
    WARRIOR: "Warrior",
    FORMAL_DRESS: "Formal Dress",
    FORMAL_SUIT: "Formal Suit",
    PRINCE_ALI: "Prince Ali",
    PURPLE_DRESS: "Purple Dress",
    ARMOR: "Armor",
    HONEY_DAY: "Honey Day",
    MERMAID: "Mermaid",
    LUNAR_NEW_YEAR_HONG_KONG: "Lunar New Year - Hong Kong",
    WDW_50: "WDW 50th Anniversary"
};

const FABRIC = {};

const TOKENS = {
    COMMON: "collection",
    EARS: "ears",
    TOKEN: "token",
    SPECIAL: "special",
    FABRIC: "fabric"
};

const REQ_TYPES = {
    BUILDING: "building",
    COSTUME: "costume"
};

const TOKEN_RARITIES = {
    C: "common",
    U: "uncommon",
    R: "rare",
    E: "epic",
    L: "legendary"
};

module.exports = {
    CHARACTERS,
    GROUPS,
    SPECIAL_ITEMS,
    BUILDINGS,
    BUILDING_CATEGORIES,
    COSTUMES,
    FABRIC,
    TOKENS,
    REQ_TYPES,
    TOKEN_RARITIES
};
