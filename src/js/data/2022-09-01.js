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
	  { name: "Pokemon Trainers", key: "trainer" },
	  { name: "Other", key: "other" }
	  
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
    checked: false
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
	  origin: ["spin"],
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
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Lt. Surge",
    img: "HGSS_Lt._Surge.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Erika",
    img: "FRLG_Erika.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Janine",
    img: "HeartGold_SoulSilver_Janine.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Sabrina",
    img: "Sabrina_2.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Blaine",
    img: "Blaine.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Giovanni",
    img: "Giovanni_Ultra_Sun_and_Ultra_Moon.png",
    opts: {
      gender: ["male"],
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
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Bugsy",
    img: "HGSS_Bugsy.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Whitney",
    img: "HGSS_Whitney.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Morty",
    img: "HeartGold_SoulSilver_Morty.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Chuck",
    img: "HeartGold_SoulSilver_Chuck.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Jasmine",
    img: "HGSS_Jasmine.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Pryce",
    img: "HGSS_Pryce.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Clair",
    img: "HeartGold_SoulSilver_Clair.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Roxanne",
    img: "Omega_Ruby_Alpha_Sapphire_Roxanne.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Brawly",
    img: "Omega_Ruby_Alpha_Sapphire_Brawly.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Wattson",
    img: "Omega_Ruby_Alpha_Sapphire_Wattson.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Flannery",
    img: "Omega_Ruby_Alpha_Sapphire_Flannery.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Norman",
    img: "Omega_Ruby_Alpha_Sapphire_Norman.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Winona",
    img: "Omega_Ruby_Alpha_Sapphire_Winona.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Tate",
    img: "tate.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Liza",
    img: "liza.png",
    opts: {
      gender: ["female"],
      group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Juan",
    img: "Emerald_Juan.png",
    opts: {
      gender: ["male"],
      group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Dr. Namba",
    img: "Dr_Namba.png",
    opts: {
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["female"],
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
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["female"],
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
      gender: ["female"],
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
      gender: ["male"],
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
      gender: ["female"],
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
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["male"],
	  group: ["trainer"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Trace",
    img: "Lets_Go_Pikachu_Eevee_Rival.png",
    opts: {
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["female"],
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
      gender: ["female"],
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
      gender: ["male"],
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
      gender: ["male"],
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
      gender: ["male"],
	  group: ["prof"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Joe",
    img: "Duel_Joe.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Tia",
    img: "Duel_Tia.png",
    opts: {
      gender: ["female"],
	  group: ["other"],
	  origin: ["spin"],
	  child: true
    }
  },
    {
    name: "Brenda",
    img: "Duel_Brenda.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Don Roger",
    img: "Duel_Don_Roger.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Sharon",
    img: "Duel_Sharon.png",
    opts: {
      gender: ["female"],
	  group: ["trainer"],
	  origin: ["spin"],
	  child: true
    }
  },
    {
    name: "Number 7",
    img: "Duel_Number_7.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Nadya",
    img: "Duel_Nadya.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Master Rosé",
    img: "Duel_Master_Rosé.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Marabelle",
    img: "Duel_Marabelle.png",
    opts: {
      gender: ["female"],
	  group: ["other"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Luca",
    img: "Duel_Luca.png",
    opts: {
      gender: ["male"],
	  group: ["other"],
	  origin: ["spin"],
	  child: true
    }
  },
    {
    name: "Karolin",
    img: "Duel_Karolin.png",
    opts: {
      gender: ["female"],
	  group: ["other"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Roark",
    img: "Roark_Diamond_and_Pearl.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Gardenia",
    img: "Diamond_Pearl_Gardenia.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Maylene",
    img: "Maylene.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Crasher Wake",
    img: "Crasher_Wake.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Fantina",
    img: "Fantina.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Byron",
    img: "Diamond_Pearl_Byron.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Candice",
    img: "Candice.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Volkner",
    img: "Volkner.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Cilan",
    img: "Cilan.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Chili",
    img: "Black_White_Chili.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Cress",
    img: "Black_White_Cress.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Lenora",
    img: "Black_White_Lenora_2.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Burgh",
    img: "Black_White_Burgh.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Elesa",
    img: "Black_2_White_2_Elesa.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Clay",
    img: "Black_White_Clay.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Skyla",
    img: "Black_White_Skyla.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Brycen",
    img: "Brycen.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Drayden",
    img: "Black_White_Drayden.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Roxie",
    img: "Roxie.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Marlon",
    img: "Marlon.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Viola",
    img: "Viola.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Grant",
    img: "XY_Grant.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Korrina",
    img: "XY_Korrina.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Ramos",
    img: "XY_Ramos.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Clemont",
    img: "XY_Clemont.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Valerie",
    img: "XY_Valerie.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Olympia",
    img: "XY_Olympia.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Wulfric",
    img: "XY_Wulfric.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Ilima",
    img: "Sun_Moon_Ilima.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Lana",
    img: "Sun_Moon_Lana.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Kiawe",
    img: "Sun_Moon_Kiawe.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Mallow",
    img: "Sun_Moon_Mallow.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Sophocles",
    img: "Sun_Moon_Sophocles.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Nanu",
    img: "Sun_Moon_Nanu.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Mina",
    img: "Mina.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Hapu",
    img: "Sun_Moon_Hapu.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Milo",
    img: "Sword_Shield_Milo.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Nessa",
    img: "Sword_Shield_Nessa.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Kabu",
    img: "Kabu.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Bea",
    img: "Sword_Shield_Bea.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Allister",
    img: "Sword_Shield_Allister.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Opal",
    img: "Sword_Shield_Opal.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Gordie",
    img: "Sword_Shield_Gordie.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Melony",
    img: "Melony.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Piers",
    img: "Sword_Shield_Piers.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Raihan",
    img: "Sword_Shield_Raihan.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Klara",
    img: "Sword_Shield_Klara.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Avery",
    img: "Sword_Shield_Avery.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Grusha",
    img: "Scarlet_Violet_Grusha.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Cissy",
    img: "CissyFull.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Rudy",
    img: "Rudy.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["anime"],
	  child: true
    }
  },
    {
    name: "Luana",
    img: "Luana.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Drake (Orange Islands)",
    img: "Drake_Orange_Islands.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Mai",
    img: "Legends_Arceus_Mai.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Lian",
    img: "Legends_Arceus_Lian.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Arezu",
    img: "Legends_Arceus_Arezu.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Calaba",
    img: "Legends_Arceus_Calaba.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Iscan",
    img: "Legends_Arceus_Iscan.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Palina",
    img: "Legends_Arceus_Palina.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Melli",
    img: "Legends_Arceus_Melli.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Sabi",
    img: "Legends_Arceus_Sabi.png",
    opts: {
      gender: ["female"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: true
    }
  },
    {
    name: "Gaeric",
    img: "Legends_Arceus_Gaeric.png",
    opts: {
      gender: ["male"],
	  group: ["gym"],
	  origin: ["spin"],
	  child: false
    }
  },
    {
    name: "Lorelei",
    img: "Lorelei.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Bruno",
    img: "Bruno.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Agatha",
    img: "Agatha_FireRed_and_LeafGreen.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Lance",
    img: "Lets_Go_Pikachu_Eevee_Lance.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Will",
    img: "HeartGold_SoulSilver_Will.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Karen",
    img: "HeartGold_SoulSilver_Karen.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Sidney",
    img: "Omega_Ruby_Alpha_Sapphire_Sidney.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Phoebe",
    img: "Omega_Ruby_Alpha_Sapphire_Phoebe.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: true
    }
  },
    {
    name: "Glacia",
    img: "Omega_Ruby_Alpha_Sapphire_Glacia.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Drake",
    img: "Omega_Ruby_Alpha_Sapphire_Drake.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Steven Stone",
    img: "Omega_Ruby_Alpha_Sapphire_Steven.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Aaron",
    img: "Diamond_Pearl_Aaron.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Bertha",
    img: "Diamond_Pearl_Bertha.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Flint",
    img: "Diamond_Pearl_Flint.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Lucian",
    img: "Diamond_Pearl_Lucian.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Cynthia",
    img: "Cynthia_Diamond_and_Pearl.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Shauntal",
    img: "Black_White_Shauntal.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Marshal",
    img: "Black_White_Marshal.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Grimsley",
    img: "Black_White_Grimsley.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Alder",
    img: "Black_White_Alder.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Siebold",
    img: "XY_Siebold.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Wikstrom",
    img: "XY_Wikstrom.png",
    opts: {
      gender: ["male"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Drasna",
    img: "XY_Drasna.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Diantha",
    img: "XY_Diantha.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Kahili",
    img: "Sun_Moon_Kahili.png",
    opts: {
      gender: ["female"],
	  group: ["league"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Archer",
    img: "HeartGold_SoulSilver_Archer.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Jesse",
    img: "Jessie_JN.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "James",
    img: "James_JN.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Butch",
    img: "Butch_Journeys.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Cassidy",
    img: "Cassidy_Journeys.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Domino",
    img: "Domino.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Marauder",
    img: "Marauder_Profile.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Matori",
    img: "Matori.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["anime"],
	  child: false
    }
  },
    {
    name: "Ariana",
    img: "HeartGold_SoulSilver_Ariana.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Petrel",
    img: "HeartGold_SoulSilver_Petrel.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Proton",
    img: "HeartGold_SoulSilver_Proton.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Maxie",
    img: "Omega_Ruby_Alpha_Sapphire_Maxie.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Courtney",
    img: "Omega_Ruby_Alpha_Sapphire_Courtney.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Tabitha",
    img: "Omega_Ruby_Alpha_Sapphire_Tabitha.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Archie",
    img: "Omega_Ruby_Alpha_Sapphire_Archie.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Shelly",
    img: "Omega_Ruby_Alpha_Sapphire_Shelly.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Matt",
    img: "Omega_Ruby_Alpha_Sapphire_Matt.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Cyrus",
    img: "Omega_Ruby_Alpha_Sapphire_Cyrus.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Mars",
    img: "Mars_DPPt.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Saturn",
    img: "Saturn_Diamond_and_Pearl.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Jupiter",
    img: "Jupiter_DPPt.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Ghetsis Harmonia Gropius",
    img: "Black_2_White_2_Ghetsis.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Zinzolin",
    img: "Black_2_White_2_Zinzolin.png",
    opts: {
      gender: ["male"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Anthea",
    img: "Black_2_White_2_Anthea.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  },
    {
    name: "Concordia",
    img: "Black_2_White_2_Concordia.png",
    opts: {
      gender: ["female"],
	  group: ["villain"],
	  origin: ["game"],
	  child: false
    }
  }
  
  
  
];
