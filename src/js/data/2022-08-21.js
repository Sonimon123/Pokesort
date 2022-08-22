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
    img: "332px-GO_Professor_Willow.png",
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
  }
];
