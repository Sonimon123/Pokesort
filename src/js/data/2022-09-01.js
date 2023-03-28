dataSetVersion = "2022-08-21"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict to certain genders.",
    checked: false,
    sub: [
      { name: "Male", key: "male" },
      { name: "Female", key: "female" },
      { name: "Other", key: "other" }
	]
  },
    {
    name: "Filter by Group",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "Professors/Researchers", key: "prof" },
      { name: "Gym Leaders", key: "gym" },
	  { name: "Pokemon League", key: "league" },
	  { name: "Villains", key: "villain" },
	  { name: "Pokemon Trainers", key: "trainer" }
	]
  },
    {
    name: "Filter by Origin",
    key: "origin",
    tooltip: "Check this to restrict to certain media origins.",
    checked: false,
    sub: [
      { name: "Core Game", key: "game" },
      { name: "Spin-Off", key: "spin" },
	  { name: "Anime", key: "anime" }
	]
  },
    {
    name: "Remove Likely Children",
    key: "child",
    tooltip: "Check this to remove all characters that are likely to be children",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Bill",
    img: "303px-Gold_Silver_Bill.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Willow",
    img: "GO_Professor_Willow.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Turo",
    img: "351px-Violet_Turo.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Spark",
    img: "390px-GO_Spark.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    },
  },
  {
    name: "Professor Laventon",
    img: "402px-Legends_Arceus_Professor_Laventon.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Sada",
    img: "409px-Scarlet_Sada.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Candela",
    img: "485px-GO_Candela.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Cedric Juniper",
    img: "Black_White_Cedric_Juniper.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Fennel",
    img: "Black_White_Fennel.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Juniper",
    img: "Black_White_Juniper.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Burnet (Dream Radar)",
    img: "Burnet_Dream_Radar.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Professor Rowan",
    img: "Diamond_Pearl_Rowan.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Blanche",
    img: "GO_Blanche.png",
    opts: {
      gender: ["other"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Professor Hastings",
    img: "Hastings_Ranger_3.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Professor Elm",
    img: "HeartGold_SoulSilver_Professor_Elm.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Kaminko",
    img: "Kaminko_XD.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Professor Krane",
    img: "Krane.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Leanne",
    img: "Leanne_Ranger3.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Professor Oak",
    img: "Lets_Go_Pikachu_Eevee_Professor_Oak.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Bellis",
    img: "Masters_Professor_Bellis.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Professor Birch",
    img: "Omega_Ruby_Alpha_Sapphire_Professor_Birch.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Ivy",
    img: "Professor_Ivy.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["anime"],
	  child: false
    }
  },
  {
    name: "Professor Mirror",
    img: "Professor_Mirror.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Professor P",
    img: "Professor_P_Trozei.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Samson Oak",
    img: "Samson_Oak_SM.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Burnet (Sun/Moon)",
    img: "Sun_Moon_Professor_Burnet.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Kukui",
    img: "Sun_Moon_Professor_Kukui.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Magnolia",
    img: "Sword_Shield_Professor_Magnolia.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Sonia",
    img: "Sword_Shield_Sonia.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Phorus",
    img: "UNITE_Professor_Phorus.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Professor Sycamore",
    img: "XY_Professor_Sycamore.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Cara Liss",
    img: "Cara_Liss.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Dr. Fuji",
    img: "Dr_Fuji.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["anime"],
	  child: false
    }
  },
  {
    name: "Grand Oak",
    img: "Grandoak.jpg",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Professor Cerise",
    img: "Professor_Cerise_JN.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["anime"],
	  child: false
    }
  },
  {
    name: "Professor Andy",
    img: "Professor_Andy.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
  {
    name: "Professor Lund",
    img: "Lund.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["anime"],
	  child: false
    }
  },
  {
    name: "Yuko",
    img: "yuko.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["anime"],
	  child: false
    }
  },
  {
    name: "Professor Alden",
    img: "Professor_Alden.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Lanette",
    img: "Lanette.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Bebe",
    img: "Bebe_TCG_art.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Amanita",
    img: "Amanita.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Cassius",
    img: "Cassius_Adventures.png",
    opts: {
      gender: ["male"],
      group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
  {
    name: "Bridgette",
    img: "Brigette_Bank.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Haley",
    img: "Haley.png",
    opts: {
      gender: ["female"],
      group: ["prof"],
	  origin: ["anime"],
	  child: false
    }
  },
      {
    name: "Brock",
    img: "DP-Brock.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Misty",
    img: "Lets_Go_Pikachu_Eevee_Misty.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Lt. Surge",
    img: "HGSS_Lt._Surge.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Erika",
    img: "FRLG_Erika.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Janine",
    img: "HeartGold_SoulSilver_Janine.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Sabrina",
    img: "Sabrina_2.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Blaine",
    img: "Blaine.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Giovanni",
    img: "Giovanni_Ultra_Sun_and_Ultra_Moon.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Falkner",
    img: "HeartGold_SoulSilver_Falkner.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Bugsy",
    img: "HGSS_Bugsy.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Whitney",
    img: "HGSS_Whitney.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Morty",
    img: "HeartGold_SoulSilver_Morty.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Chuck",
    img: "HeartGold_SoulSilver_Chuck.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Jasmine",
    img: "HGSS_Jasmine.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Pryce",
    img: "HGSS_Pryce.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Clair",
    img: "HeartGold_SoulSilver_Clair.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Roxanne",
    img: "Omega_Ruby_Alpha_Sapphire_Roxanne.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Brawly",
    img: "Omega_Ruby_Alpha_Sapphire_Brawly.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Wattson",
    img: "Omega_Ruby_Alpha_Sapphire_Wattson.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Flannery",
    img: "Omega_Ruby_Alpha_Sapphire_Flannery.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Norman",
    img: "Omega_Ruby_Alpha_Sapphire_Norman.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Winona",
    img: "Omega_Ruby_Alpha_Sapphire_Winona.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Tate",
    img: "tate.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Liza",
    img: "liza.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Juan",
    img: "Emerald_Juan.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Dr. Namba",
    img: "Dr_Namba.png",
    opts: {
      gender: ["Male"],
      group: ["prof"],
	  group: ["villain"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Faba",
    img: "Sun_Moon_Faba.png",
    opts: {
      gender: ["Male"],
      group: ["prof"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Molayne",
    img: "Sun_Moon_Molayne.png",
    opts: {
      gender: ["Male"],
      group: ["prof"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Koga",
    img: "HGSS_Koga.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Koga",
    img: "HGSS_Koga.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Blue",
    img: "Sun_Moon_Blue.png",
    opts: {
      gender: ["Male"],
	  group: ["trainer"],
      group: ["gym"],
	  group: ["league"],
	  group: ["prof"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Wallace",
    img: "Omega_Ruby_Alpha_Sapphire_Wallace.png",
    opts: {
      gender: ["Male"],
      group: ["gym"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Iris",
    img: "Black_2_White_2_Iris.png",
    opts: {
      gender: ["Female"],
      group: ["gym"],
	  group: ["league"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Cheren",
    img: "Black_2_White_2_Cheren.png",
    opts: {
      gender: ["Male"],
      group: ["trainer"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Hala",
    img: "Sun_Moon_Hala.png",
    opts: {
      gender: ["Male"],
	  group: ["gym"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Olivia",
    img: "Sun_Moon_Olivia.png",
    opts: {
      gender: ["Female"],
	  group: ["gym"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Acerola",
    img: "Sun_Moon_Acerola.png",
    opts: {
      gender: ["Female"],
	  group: ["gym"],
	  group: ["league"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Bede",
    img: "Sword_Shield_Bede.png",
    opts: {
      gender: ["Male"],
	  group: ["trainer"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Marnie",
    img: "Sword_Shield_Marnie.png",
    opts: {
      gender: ["Female"],
	  group: ["trainer"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Peony",
    img: "Sword_Shield_Peony.png",
    opts: {
      gender: ["Male"],
	  group: ["gym"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Mustard",
    img: "Sword_Shield_Mustard.png",
    opts: {
      gender: ["Male"],
	  group: ["gym"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Ingo",
    img: "Legends_Arceus_Ingo.png",
    opts: {
      gender: ["Male"],
	  group: ["trainer"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Trace",
    img: "Lets_Go_Pikachu_Eevee_Rival.png",
    opts: {
      gender: ["Male"],
	  group: ["trainer"],
	  group: ["league"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Red",
    img: "Red_Sun_and_Moon.png",
    opts: {
      gender: ["Male"],
	  group: ["trainer"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Caitlin",
    img: "Black_White_Caitlin.png",
    opts: {
      gender: ["Female"],
	  group: ["trainer"],
	  group: ["league"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Malva",
    img: "XY_Malva.png",
    opts: {
      gender: ["Female"],
	  group: ["league"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Charon",
    img: "Charon_Pt.png",
    opts: {
      gender: ["Male"],
	  group: ["prof"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Natural Harmonia Gropius (N)",
    img: "Black_2_White_2_N.png",
    opts: {
      gender: ["Male"],
	  group: ["trainer"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Colress",
    img: "Colress.png",
    opts: {
      gender: ["Male"],
	  group: ["prof"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  }
  
  
];
