const rawData = {
  "mrd": {
    checklistWidth: 5,
    items: [
      {
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "barrierA",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7b7b",
        nodeType: "key",
        value: 1,
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "wallJumpBoots",
        sprite: "wall",
        name: "Wall Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Prototype Wave Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "92278f",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 7,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        start: 0,
        max: 31,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },/* {
        id: "boss",
        name: "Access",
        start: 0,
        max: 2,
        segments: [],
        bg: "747474",
        nodeType: "boss",
        value: 0,
      }, */{
        id: "m_lock1",
        sprite: "captain",
        name: "Access Lock 1",
        start: 0,
        max: 1,
        segments: [],
        bg: "747474",
        nodeType: "boss",
        value: 0,
      },{
        id: "m_lock2",
        sprite: "research",
        name: "Access Lock 2",
        start: 0,
        max: 1,
        segments: [],
        bg: "747474",
        nodeType: "boss",
        value: 0,
      },{
        id: "monsterCapsule",
        sprite: "cell",
        name: "Metroid Cell Capsule",
        start: 0,
        max: 1,
        segments: [],
        bg: "008080",
        nodeType: "key",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "kraid",
        name: "Jungle Beast",
      },{
        id: "ridley",
        name: "GF Soldier",
      },{
        id: "shaktool",
        name: "Shaktool",
      },{
        id: "guardian",
        name: "Shaktool 2.0",
      },{
        id: "mbrain",
        name: "Alpha Metroid",
      }
    ],
    areas: [
      {
        id: "mothership",
        name: "Space Pirate Mothership",
        starting: true,
        color: "2038ec",
      },{
        id: "surface",
        name: "Desolate Surface",
        starting: false,
        color: "db2b00",
      },{
        id: "boneyard",
        name: "Bone Yard",
        starting: false,
        color: "009700",
      },{
        id: "jungle",
        name: "Chozo Jungle",
        starting: false,
        color: "bf00bf",
      },{
        id: "scienceship",
        name: "Federation Science Ship",
        starting: false,
        color: "bf00bf",
      },{
        id: "hive",
        name: "Metroid Hive",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "Beta Ray Info",
        nodeType: "unreq",
      },{
        id: "unused",
        name: "Captain Hint",
        nodeType: "unreq",
      },{
        id: "unused",
        name: "Two Codes Hint",
        nodeType: "unreq",
      },{
        id: "unused",
        name: "Wave Beam Hint",
        nodeType: "unreq",
      },{
        id: "unused",
        name: "That One Easter Egg",
        nodeType: "easter",
      },{
        id: "unused",
        name: "Word Search",
        nodeType: "easter",
      },{
        id: "unused",
        name: "Full Restore",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Underwater Caverns",
        nodeType: "area",
      },{
        id: "unused",
        name: "Chozo Ruins",
        nodeType: "area",
      },
    ],
    map: [
    ],
  },
  "m1": {
    checklistWidth: 4,
    items: [
      {
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 1,
      },{
        id: "barrierA",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7b7b",
        nodeType: "key",
        value: 1,
      },{
        id: "longBeamA",
        locale: {
          'enUS': {
            id: "longBeam"
          }
        },
        sprite: "long",
        name: "Long Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "7f2800",
        nodeType: "key",
        value: 1,
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "2038ec",
        nodeType: "slot",
        slotType: "beam",
        value: 1,
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "92278f",
        nodeType: "slot",
        slotType: "beam",
        value: 1,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 8,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        start: 0,
        max: 21,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },/* {
        id: "boss",
        name: "Bosses Defeated",
        start: 0,
        max: 2,
        segments: [],
        bg: "747474",
        nodeType: "boss",
        value: 0,
      }, */ {
        id: "kraid",
        sprite: "kraid",
        name: "Kraid Defeated",
        start: 0,
        max: 1,
        segments: [],
        bg: "747474",
        nodeType: "boss",
        value: 0,
      },{
        id: "ridley",
        sprite: "ridley",
        name: "Ridley Defeated",
        start: 0,
        max: 1,
        segments: [],
        bg: "747474",
        nodeType: "boss",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "kraid",
        name: "Kraid",
      },{
        id: "ridley",
        name: "Ridley",
      },{
        id: "mbrain",
        name: "Mother Brain",
      }
    ],
    areas: [
      {
        id: "brinstar",
        name: "Brinstar",
        starting: true,
        color: "2038ec",
      },{
        id: "norfair",
        name: "Norfair",
        starting: false,
        color: "db2b00",
      },{
        id: "kraid",
        name: "Kraid",
        starting: false,
        color: "009700",
      },{
        id: "ridley",
        name: "Ridley",
        starting: false,
        color: "bf00bf",
      },{
        id: "tourian",
        name: "Tourian",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff",
    ],
    map: [
    ],
  },
  "mzm": {
    checklistWidth: 6,
    items: [
      {
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Vanilla Morph Ball Item Acquired",
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 1,
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Bombs Orb Acquired",
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "barrierB",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Varia Suit Orb Acquired",
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "", // "Gravity Suit",
        start: 0,
        max: 1,
        segments: [
          {
            id: "unknownItem3",
            sprite: "ui3",
            name: "Unknown Item 3",
            start: 0,
            max: 1,
            over: "Z_Orb",
            overText: "Unknown Item 3 Orb Acquired",
            bg: "887878",
            nodeType: "key",
            value: 1,
            clearIfScramble: true,
          },{
            id: "gravitySuit",
            sprite: "gravity",
            name: "Gravity Suit",
            start: 0,
            max: 1,
            bg: "602880",
            nodeType: "key",
            value: 0,
          }
        ],
        bg: "602880",
        nodeType: "key",
        value: 1,
      },{
        id: "fullPowerSuit",
        sprite: "full",
        name: "Fully Powered Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "80d0ff",
        nodeType: "key",
        value: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "longBeamA",
        locale: {
          'enUS': {
            id: "longBeam"
          }
        },
        sprite: "long",
        name: "Long Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Long Beam Orb Acquired",
        segments: [],
        bg: "7f2800",
        nodeType: "key",
        value: 1,
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        sprite: "charge",
        name: "Charge Beam",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Beam Beast Defeated",
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 1,
      },{
        id: "plasmaBeam",
        sprite: "plasma",
        name: "", // "Plasma Beam",
        start: 0,
        max: 1,
        segments: [
          {
            id: "unknownItem1",
            sprite: "ui1",
            name: "Unknown Item 1",
            start: 0,
            max: 1,
            over: "Z_Orb",
            overText: "Unknown Item 1 Orb Acquired",
            bg: "887878",
            nodeType: "key",
            value: 1,
            clearIfScramble: true,
          },{
            id: "plasmaBeam",
            locale: {
              'enUS': {
                id: "plasmaBeamD"
              }
            },
            sprite: "plasma",
            name: "Plasma Beam",
            start: 0,
            max: 1,
            bg: "00ff08",
            nodeType: "key",
            value: 0,
          }
        ],
        bg: "00ff08",
        nodeType: "key",
        value: 1,
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Ice Beam Orb Acquired",
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 1,
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Wave Beam Orb Acquired",
        segments: [],
        bg: "92278f",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "powerGrip",
        sprite: "grip",
        name: "Power Grip",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Power Grip Orb Acquired",
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "spaceJump",
        sprite: "space",
        name: "", // "Space Jump",
        start: 0,
        max: 1,
        segments: [
          {
            id: "unknownItem2",
            sprite: "ui2",
            name: "Unknown Item 2",
            start: 0,
            max: 1,
            over: "Z_Orb",
            overText: "Unknown Item 2 Orb Acquired",
            bg: "887878",
            nodeType: "key",
            value: 1,
            clearIfScramble: true,
          },{
            id: "spaceJump",
            sprite: "space",
            name: "Space Jump",
            start: 0,
            max: 1,
            bg: "00a0e0",
            nodeType: "key",
            value: 0,
          }
        ],
        bg: "00a0e0",
        nodeType: "key",
        value: 1,
      },{
        id: "speedBooster",
        sprite: "speed",
        name: "Speed Booster",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Speed Booster Orb Acquired",
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "High Jump Orb Acquired",
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Screw Attack Orb Acquired",
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 12,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        start: 0,
        max: 50,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "smissile",
        name: "Super Missile Tanks",
        start: 0,
        max: 15,
        segments: [],
        bg: "007f0e",
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbomb",
        name: "Power Bomb Tanks",
        start: 0,
        max: 9,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "zipline",
        name: "Zipline",
        sprite: "zipline",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },{
        id: "boss",
        name: "Bosses",
        sprite: "bosses",
        start: 0,
        max: 2,
        segments: [],
        bg: "747474",
        nodeType: "boss",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "beambeast",
        name: "Beam Beast",
      },{
        id: "acidworm",
        name: "Acid Worm",
      },{
        id: "acidworm",
        name: "Acid Worm",
      },{
        id: "kraid",
        name: "Kraid",
      },{
        id: "kirugiru",
        name: "Kiru Giru",
      },{
        id: "imago",
        name: "Imago",
      },{
        id: "ridley",
        name: "Ridley",
      },{
        id: "mbrain",
        name: "Mother Brain",
      },{
        id: "chozoghost",
        name: "Ruins Test",
      },{
        id: "mridley",
        name: "Mecha Ridley",
      }
    ],
    areas: [
      {
        id: "brinstar",
        name: "Brinstar",
        starting: true,
        color: "2038ec",
      },{
        id: "norfair",
        name: "Norfair",
        starting: false,
        color: "db2b00",
      },{
        id: "crateria",
        name: "Crateria",
        starting: false,
        color: "db2b00",
      },{
        id: "kraid",
        name: "Kraid",
        starting: false,
        color: "009700",
      },{
        id: "ridley",
        name: "Ridley",
        starting: false,
        color: "bf00bf",
      },{
        id: "tourian",
        name: "Tourian",
        starting: false,
        color: "bcbcbc",
      },{
        id: "chozodia",
        name: "Chozodia",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "chozoStatue",
        name: "Chozo Hint Statue", // Brinstar, post- Morph Ball, points to Long Beam, blocker
        nodeType: "access",
      },{
        id: "chozoStatue",
        name: "Chozo Hint Statue", // Brinstar, post- Long Beam, points to Bombs, blocker
        nodeType: "access",
      },{
        id: "chozoStatue",
        name: "Chozo Hint Statue", // Brinstar, post- Varia Suit, points to Wave Beam in Norfair, blocker
        nodeType: "access",
      },{
        id: "chozoStatue",
        name: "Chozo Hint Statue", // Brinstar, post- Kraid, points to High Jump in Norfair
        nodeType: "unreq",
      },{
        id: "chozoStatue",
        name: "Chozo Hint Statue", // Brinstar, post- Bombs, points to Ice Beam in Norfair
        nodeType: "unreq",
      },{
        id: "chozoStatue",
        name: "Chozo Hint Statue", // Norfair, post- Ice Beam, points to Speed Booster in Kraid, blocker
        nodeType: "access",
      },{
        id: "chozoStatue",
        name: "Chozo Hint Statue", // Norfair, post- High Jump, points to Varia Suit in Brinstar, platform
        nodeType: "trigger",
      },/*{
        id: "chozoStatue",
        name: "Chozo Hint Statue", // Norfair, post- Ridley, broken, would've pointed to Screw Attack, thus unused
        nodeType: "unreq",
      },*/{
        id: "unused",
        name: "Map: Brinstar",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Norfair",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Kraid",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Ridley",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Mothership",
        nodeType: "map",
      },{
        id: "unused",
        name: "Hard Mode",
        nodeType: "unreq",
      },{
        id: "unused",
        name: "S",
        nodeType: "save",
      }
    ],
    map: [
    ],
  },
  "mp": {
    checklistWidth: 5,
    items: [
      {
        id: "fusionSuit",
        name: "",
        type: "toggle",
        start: 0,
        max: 0,
        segments: [
          {
            id: "primeSuit",
            name: "Prime Suit Active",
            type: "toggle",
            start: 1,
            max: 1,
            nodeType: "toggle",
            value: 0,
          },{
            id: "fusionSuit",
            name: "Fusion Suit Active",
            type: "toggle",
            start: 0,
            max: 1,
            nodeType: "toggle",
            value: 0,
          },
        ],
        bg: "ffffff",
        nodeType: "toggle",
        value: 0,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Flaahgra Defeated",
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "gravitySuitB",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Phendrana Drifts - Gravity Chamber",
        segments: [],
        bg: "602880",
        nodeType: "key",
        value: 1,
      },{
        id: "phazonSuit",
        name: "Phazon Suit",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Omega Pirate Defeated",
        segments: [],
        bg: "282018",
        nodeType: "key",
        value: 1,
      },{
        id: "spinBoost",
        name: "Space Jump Boots",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Tallon Overworld - Alcove",
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 1,
      },{
        id: "powerBeam",
        name: "Power Beam",
        sprite: "power",
        start: 1,
        max: 1,
        segments: [],
        bg: "ffb508",
        nodeType: "key",
        value: 0,
      },{
        id: "chargeBeamB",
        name: "Charge Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Chozo Ruins - Watery Hall",
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 1,
      },{
        id: "waveBeamA",
        name: "Wave Beam",
        sprite: "wave",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Phendrana Drifts - Chapel of the Elders",
        segments: [],
        bg: "6f3198",
        nodeType: "key",
        value: 1,
      },{
        id: "iceBeamA",
        name: "Ice Beam",
        sprite: "ice",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Chozo Ruins - Antechamber",
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 1,
      },{
        id: "plasmaBeamB",
        name: "Plasma Beam",
        sprite: "plasma",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Magmoor Caverns - Plasma Processing",
        segments: [],
        bg: "ff4a4a",
        nodeType: "key",
        value: 1,
      },{
        id: "missileC",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Hive Mecha Defeated",
        segments: [],
        bg: "d82800",
        nodeType: "key",
        value: 1,
      },{
        id: "superMissileA",
        name: "Super Missile",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Phendrana Drifts - Observatory",
        segments: [],
        bg: "ffb508",
        nodeType: "key",
        value: 1,
      },{
        id: "shockShot",
        name: "Wavebuster",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Chozo Ruins - Tower of Light",
        segments: [],
        bg: "6f3198",
        nodeType: "key",
        value: 1,
      },{
        id: "iceMissileB",
        name: "Ice Spreader",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Magmoor Caverns - Shore Tunnel",
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 1,
      },{
        id: "flameShot",
        name: "Flamethrower",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Phazon Mines - Storage Depot A",
        segments: [],
        bg: "ff4a4a",
        nodeType: "key",
        value: 1,
      },{
        id: "morphBall",
        name: "Morph Ball",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Chozo Ruins - Ruined Shrine",
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 1,
      },{
        id: "bombB",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Incinerator Drone Defeated",
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "boostBall",
        name: "Boost Ball",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Phendrana Drifts - Phendrana Canyon",
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "spiderBallA",
        name: "Spider Ball",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Thardus Defeated",
        segments: [],
        bg: "007f0e",
        nodeType: "key",
        value: 1,
      },{
        id: "powerBombA",
        name: "Power Bomb",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Phazon Mines - Central Dynamo",
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 1,
      },{
        id: "combatVisor",
        name: "Combat Visor",
        sprite: "combat",
        start: 1,
        max: 1,
        segments: [],
        bg: "80d0ff",
        nodeType: "key",
        value: 0,
      },{
        id: "scanVisor",
        name: "Scan Visor",
        sprite: "scan",
        start: 1,
        max: 1,
        segments: [],
        bg: "bca470",
        nodeType: "key",
        value: 0,
      },{
        id: "thermalVisor",
        name: "Thermal Visor",
        sprite: "thermal",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Phendrana Drifts - Research Core",
        segments: [],
        bg: "ff7b7b",
        nodeType: "key",
        value: 1,
      },{
        id: "xRayVisor",
        name: "X-Ray Visor",
        sprite: "xray",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Tallon Overworld - Life Grove",
        segments: [],
        bg: "c8d8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "grappleBeamA",
        name: "Grapple Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Phazon Mines - Storage Depot B",
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "energyTankA",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 49,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombExp",
        name: "Power Bomb Expansions",
        start: 0,
        max: 4,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "chozoArtifact",
        name: "", // "Chozo Artifacts",
        start: 0,
        max: 12,
        over: "Z_Chozo",
        overText: "Hints Acquired",
        segments: [
          {
            id: "chozoArtifact",
            name: "Chozo Artifacts",
            over: "Z_Chozo",
            overText: "Hints Acquired",
            start: 0,
            max: 12,
            bg: "008080",
            nodeType: "artifact",
            value: 1,
          },{
            id: "cipher",
            name: "Impact Crater Accessible",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "artifact",
        value: 1,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "pqueen",
        name: "Parasite Queen",
      },{
        id: "hivemecha",
        name: "Hive Mecha",
      },{
        id: "morphbeetle",
        name: "Plated Beetle", // happens a few times, though
      },{
        id: "zoid",
        name: "Incinerator Drone",
      },{
        id: "flaahgra",
        name: "Flaahgra",
      },{
        id: "thardus",
        name: "Thardus",
      },{
        id: "chozo",
        name: "Chozo Ghost(s)", // happens a few times, though
      },{
        id: "elitepirate",
        name: "Elite Pirate", // happens a few times, though
      },{
        id: "cdrone",
        name: "Cloaked Drone",
      },{
        id: "phelite",
        name: "Phazon Elite",
      },{
        id: "opirate",
        name: "Omega Pirate",
      },{
        id: "metaridley",
        name: "Meta Ridley",
      },{
        id: "mprime",
        name: "Metroid Prime",
      },{
        id: "mprimecore",
        name: "Metroid Prime (Core)",
      }
    ],
    areas: [
      {
        id: "orpheon",
        name: "Pirate Frigate",
        starting: false,
        color: "2038ec",
      },{
        id: "overworld",
        name: "Tallon Overworld",
        starting: true,
        color: "db2b00",
      },{
        id: "ruins",
        name: "Chozo Ruins",
        starting: false,
        color: "db2b00",
      },{
        id: "lavacaves",
        name: "Magmoor Caverns",
        starting: false,
        color: "009700",
      },{
        id: "showdrifts",
        name: "Phendrana Drifts",
        starting: false,
        color: "bf00bf",
      },{
        id: "phmines",
        name: "Phazon Mines L.1",
        starting: false,
        color: "bcbcbc",
      },{
        id: "phmines",
        name: "Phazon Mines L.2",
        starting: false,
        color: "bcbcbc",
      },{
        id: "phmines",
        name: "Phazon Mines L.3",
        starting: false,
        color: "bcbcbc",
      },{
        id: "impact",
        name: "Impact Crater",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff"
      {
        id: "unused",
        name: "Spilled Bag",
        nodeType: "event",
      },{
        id: "unused",
        name: "Great Tree Hall Bars", // Tallon Overworld, Great Tree Hall, use Boost Ball to activate a Spinner that lowers a gate for shortcut access
        nodeType: "access",
      },{
        id: "unused",
        name: "Labs Power Outage", // Phendrana Drifts, Pirate Labs, Research Core
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Processing Center Access Gate", // Phazon Mines sub-level 2, Processing Center Access (with Energy Tank, behind Elite Quarters)
        nodeType: "access",
      },{
        id: "unused",
        name: "Map: Frigate",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Chozo Ruins",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Phendrana Pirates",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Phazon Mines",
        nodeType: "map",
      },{
        id: "unused",
        name: "Crashed Frigate",
        nodeType: "area",
      },{
        id: "unused",
        name: "Pirate Labs",
        nodeType: "area",
      },{
        id: "unused",
        name: "S",
        nodeType: "save",
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
      }
    ],
    map: [
    ],
  },
  "pb": {
    checklistWidth: 4,
    items: [
      {
        id: "chozoArtifact",
        sprite: "artifact",
        name: "Artifacts",
        start: 0,
        max: 12,
        segments: [],
        bg: "008080",
        nodeType: "artifact",
        value: 1,
      },{
        id: "powerBombA",
        //sprite: "powerBombs",
        name: "Power Bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 0,
      },{
        id: "missileC",
        //sprite: "missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        nodeType: "key",
        value: 0,
      },{
        id: "forceBall",
        //sprite: "force",
        name: "Force Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "007f0e",
        nodeType: "key",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "thardus",
        name: "Thardus",
      },{
        id: "opirate",
        name: "Omega Pirate",
      },{
        id: "metaridley",
        name: "Meta Ridley",
      },{
        id: "mprime",
        name: "Metroid Prime",
      },{
        id: "mprimecore",
        name: "Metroid Prime (Core)",
      }
    ],
    areas: [
      {
        id: "orpheon",
        name: "Pirate Frigate",
        starting: true,
        color: "2038ec",
      },{
        id: "overworld",
        name: "Tallon Overworld",
        starting: true,
        color: "db2b00",
      },{
        id: "showdrifts",
        name: "Phendrana Drifts",
        starting: false,
        color: "bf00bf",
      },{
        id: "phmines",
        name: "Phazon Mines",
        starting: false,
        color: "009700",
      },{
        id: "phmines",
        name: "Artifact Temple",
        starting: false,
        color: "009700",
      },{
        id: "impact",
        name: "Impact Crater",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // nodeType: "goal", bg: "ffffff",
    ],
    map: [
    ],
  },
  "p2d": {
    checklistWidth: 3,
    items: [
      {
        id: "powerGrip",
        sprite: "elevator",
        name: "Power Grip",
        start: 0,
        max: 1,
        over: "Z_Chozo",
        overText: "Artifact of Truth acquired",
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 0,
      },{
        id: "missileC",
        sprite: "missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Hive Mecha Defeated",
        segments: [],
        bg: "d82800",
        nodeType: "key",
        value: 1,
      },{
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 1,
      },{
        id: "bombB",
        sprite: "bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "boostBall",
        sprite: "boost",
        name: "Boost Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 1,
      },{
        id: "energyTankA",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 2,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Expansions",
        start: 0,
        max: 7,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "chozoArtifact",
        sprite: "artifact",
        name: "Chozo Artifacts",
        start: 0,
        max: 12,
        over: "Z_Chozo",
        overText: "Hints Acquired",
        segments: [],
        bg: "008080",
        nodeType: "artifact",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "hivemecha",
        name: "Hive Mecha",
      },{
        id: "geemerbrain",
        name: "Geemer Brain",
      }
    ],
    areas: [
      {
        id: "overworld",
        name: "Tallon Overworld",
        starting: true,
        color: "db2b00",
      },{
        id: "ruins",
        name: "Chozo Ruins",
        starting: false,
        color: "db2b00",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "Hard Mode",
        nodeType: "unreq",
      },{
        id: "unused",
        name: "Red Leaves",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Quill 1",
        nodeType: "boss",
      },{
        id: "unused",
        name: "Quill 2",
        nodeType: "boss",
      },{
        id: "unused",
        name: "Quill 3",
        nodeType: "boss",
      },{
        id: "unused",
        name: "Quill 4",
        nodeType: "boss",
      },{
        id: "unused",
        name: "100% Scans",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "100% Items",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Gully",
        nodeType: "area",
      },{
        id: "unused",
        name: "Skull Grid",
        nodeType: "event",
      },
    ],
    map: [
    ],
  },
  "mp2e": {
    checklistWidth: 8,
    items: [
      {
        id: "combatVisorA",
        name: "Combat Visor",
        sprite: "combat",
        start: 1,
        max: 1,
        segments: [],
        bg: "80d0ff",
        nodeType: "key",
        value: 0,
      },{
        id: "violetTranslator",
        name: "Violet Translator",
        start: 0,
        max: 1,
        over: "E_Lumin",
        overText: "Great Temple - Main Energy Controller 1",
        segments: [],
        bg: "a36fb1",
        nodeType: "key",
        value: 1,
      },{
        id: "powerBeamA",
        name: "Power Beam",
        sprite: "power",
        start: 1,
        max: 1,
        segments: [],
        bg: "ffb508",
        nodeType: "key",
        value: 0,
      },{
        id: "superMissileC",
        name: "Super Missile",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Torvus Bog - Torvus Temple",
        segments: [],
        bg: "ffb508",
        nodeType: "key",
        value: 1,
      },{
        id: "chargeBeamA",
        name: "Charge Beam",
        start: 1,
        max: 1,
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 0,
      },{
        id: "bombC",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Bomb Guardian Defeated",
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "spinBoost",
        name: "Space Jump Boots",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Jump Guardian Defeated",
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 1,
      },{
        id: "energyTransferModule",
        name: "Energy Transfer Module",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Dark Alpha Splinter Defeated",
        segments: [],
        bg: "887878",
        nodeType: "key",
        value: 0,
      },{
        id: "scanVisorA",
        name: "Scan Visor",
        sprite: "scan",
        start: 1,
        max: 1,
        segments: [],
        bg: "bca470",
        nodeType: "key",
        value: 0,
      },{
        id: "amberTranslator",
        name: "Amber Translator",
        start: 0,
        max: 1,
        over: "E_Lumin",
        overText: "Agon Wastes - Agon Energy Controller",
        segments: [],
        bg: "ad6a40",
        nodeType: "key",
        value: 1,
      },{
        id: "darkBeam",
        name: "Dark Beam",
        sprite: "darkbeam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Agon Wastes - Storage D",
        segments: [],
        bg: "9c84ff",
        nodeType: "key",
        value: 1,
      },{
        id: "darkburst",
        name: "Darkburst",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Agon Wastes - Mining Station B",
        segments: [],
        bg: "9c84ff",
        nodeType: "key",
        value: 1,
      },{
        id: "missileC",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Temple Grounds - GFMC Compound",
        segments: [],
        bg: "d82800",
        nodeType: "key",
        value: 1,
      },{
        id: "boostBall",
        name: "Boost Ball",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Boost Guardian Defeated",
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "cannonball",
        name: "Cannon Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
        displayIfScramble: true,
      },{
        id: "progressiveSuit",
        name: "Dark Suit",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Amorbis Defeated",
        segments: [],
        bg: "6c0204",
        nodeType: "key",
        value: 1,
      },{
        id: "darkVisor",
        name: "Dark Visor",
        sprite: "darkvisor",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Chykka Defeated",
        segments: [],
        bg: "ff7b7b",
        nodeType: "key",
        value: 1,
      },{
        id: "emeraldTranslator",
        name: "Emerald Translator",
        start: 0,
        max: 1,
        over: "E_Lumin",
        overText: "Torvus Bog - Torvus Energy Controller",
        segments: [],
        bg: "4b9467",
        nodeType: "key",
        value: 1,
      },{
        id: "lightBeam",
        name: "Light Beam",
        sprite: "light",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Dark Agon Wastes - Ing Cache 1",
        segments: [],
        bg: "5ac7f7",
        nodeType: "key",
        value: 1,
      },{
        id: "sunburst",
        name: "Sunburst",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Temple Grounds - Grand Windchamber",
        segments: [],
        bg: "5ac7f7",
        nodeType: "key",
        value: 1,
      },{
        id: "seekerLauncherA",
        name: "Seeker Launcher",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Temple Grounds - Hall of Honored Dead",
        segments: [],
        bg: "644080",
        nodeType: "key",
        value: 1,
      },{
        id: "spiderBallA",
        name: "Spider Ball",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Spider Guardian Defeated",
        segments: [],
        bg: "007f0e",
        nodeType: "key",
        value: 1,
      },{
        id: "grappleBeamA",
        name: "Grapple Beam",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Grapple Guardian Defeated",
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "gravityBoost",
        name: "Gravity Boost",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Torvus Bog - Hydrodynamo Storage",
        segments: [],
        bg: "602880",
        nodeType: "key",
        value: 1,
      },{
        id: "echoVisor",
        name: "Echo Visor",
        sprite: "echo",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Sanctuary Fortress - Aerie",
        segments: [],
        bg: "c8d8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "cobaltTranslator",
        name: "Cobalt Translator",
        start: 0,
        max: 1,
        over: "E_Lumin",
        overText: "Sanctuary Fortress - Sanctuary Temple",
        segments: [],
        bg: "5c819e",
        nodeType: "key",
        value: 1,
      },{
        id: "annihilatorBeam",
        name: "Annihilator Beam",
        sprite: "annihilator",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Quadraxis Defeated",
        segments: [],
        bg: "9b9b9b",
        nodeType: "key",
        value: 1,
      },{
        id: "sonicBoom",
        name: "Sonic Boom",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Dark Agon Wastes - Ing Cache 2",
        segments: [],
        bg: "9b9b9b",
        nodeType: "key",
        value: 1,
      },{
        id: "morphBall",
        name: "Morph Ball",
        start: 1,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 0,
      },{
        id: "powerBombB",
        name: "Power Bombs",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Power Bomb Guardian Defeated",
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 1,
      },{
        id: "screwAttackA",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Sanctuary Fortress - Vault",
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "lightSuit",
        name: "Light Suit",
        start: 0,
        max: 1,
        over: "E_Lumin",
        overText: "Great Temple - Main Energy Controller 2",
        segments: [],
        bg: "ffff80",
        nodeType: "key",
        value: 1,
      },{
        id: "energyTankA",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 49,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
        clearIfScramble: true,
      },{
        id: "missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 30,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
        displayIfScramble: true,
      },{
        id: "beamAmmoExpansion",
        name: "Beam Ammo Expansions",
        start: 0,
        max: 4,
        segments: [],
        bg: "808000",
        nodeType: "expansion",
        value: 1,
        clearIfScramble: true,
      },{
        id: "darkAmmoExpansion",
        name: "Dark Beam Ammo Expansions",
        start: 0,
        max: 10,
        segments: [],
        bg: "9c84ff",
        nodeType: "expansion",
        value: 1,
        displayIfScramble: true,
      },{
        id: "lightAmmoExpansion",
        name: "Light Beam Ammo Expansions",
        start: 0,
        max: 10,
        segments: [],
        bg: "5ac7f7",
        nodeType: "expansion",
        value: 1,
        displayIfScramble: true,
      },{
        id: "powerBombExpA",
        name: "Power Bomb Expansions",
        start: 0,
        max: 8,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "doubleDamageA",
        name: "Double Damage",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffb508",
        nodeType: "key",
        value: 1,
        displayIfScramble: true,
      },{
        id: "infiniteBeamAmmo",
        name: "Unlimited Beam Ammo",
        start: 0,
        max: 1,
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 1,
        displayIfScramble: true,
      },{
        id: "infiniteMissiles",
        name: "Unlimited Missiles",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        nodeType: "key",
        value: 1,
        displayIfScramble: true,
      },{
        id: "darkAgonKey",
        name: "", // "Dark Agon Keys",
        start: 0,
        max: 3,
        over: "F_Boss_Ex",
        overText: "Amorbis required",
        segments: [
          {
            id: "darkAgonKey",
            locale: {
              'enUS': {
                id: "darkSuit"
              }
            },
            name: "Dark Agon Keys",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Amorbis required",
            start: 0,
            max: 3,
            bg: "ad6a40",
            nodeType: "artifact",
            value: 0,
          },{
            id: "lightOfAether",
            name: "Dark Agon Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Agon Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "ad6a40",
        nodeType: "artifact",
        value: 0,
        clearIfScramble: true,
      },{
        id: "darkAgonKey",
        name: "", // "Dark Agon Keys",
        start: 0,
        max: 3,
        over: "F_Boss_Ex",
        overText: "Amorbis required",
        segments: [
          {
            id: "darkAgonKey",
            locale: {
              'enUS': {
                id: "darkSuit"
              }
            },
            name: "Dark Agon Keys",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Amorbis required",
            start: 0,
            max: 3,
            bg: "ad6a40",
            nodeType: "artifact",
            value: 1,
          },{
            id: "lightOfAether",
            name: "Dark Agon Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Agon Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "ad6a40",
        nodeType: "artifact",
        value: 1,
        displayIfScramble: true,
      },{
        id: "darkTorvusKey",
        name: "", // "Dark Torvus Keys",
        start: 0,
        max: 3,
        over: "F_Boss_Ex",
        overText: "Chykka required",
        segments: [
          {
            id: "darkTorvusKey",
            locale: {
              'enUS': {
                id: "chykka"
              }
            },
            name: "Dark Torvus Keys",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Chykka required",
            start: 0,
            max: 3,
            bg: "4b9467",
            nodeType: "artifact",
            value: 0,
          },{
            id: "lightOfAether",
            name: "Dark Torvus Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Torvus Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "4b9467",
        nodeType: "artifact",
        value: 0,
        clearIfScramble: true,
      },{
        id: "darkTorvusKey",
        name: "", // "Dark Torvus Keys",
        start: 0,
        max: 3,
        over: "F_Boss_Ex",
        overText: "Chykka required",
        segments: [
          {
            id: "darkTorvusKey",
            locale: {
              'enUS': {
                id: "chykka"
              }
            },
            name: "Dark Torvus Keys",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Chykka required",
            start: 0,
            max: 3,
            bg: "4b9467",
            nodeType: "artifact",
            value: 1,
          },{
            id: "lightOfAether",
            name: "Dark Torvus Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Torvus Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "4b9467",
        nodeType: "artifact",
        value: 1,
        displayIfScramble: true,
      },{
        id: "ingHiveKey",
        name: "", // "Ing Hive Keys",
        start: 0,
        max: 3,
        over: "F_Boss_Ex",
        overText: "Quadraxis required",
        segments: [
          {
            id: "ingHiveKey",
            locale: {
              'enUS': {
                id: "quadraxis"
              }
            },
            name: "Ing Hive Keys",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Quadraxis required",
            start: 0,
            max: 3,
            bg: "5c819e",
            nodeType: "artifact",
            value: 0,
          },{
            id: "lightOfAether",
            name: "Ing Hive Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Sanctuary Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "5c819e",
        nodeType: "artifact",
        value: 0,
        clearIfScramble: true,
      },{
        id: "ingHiveKey",
        name: "", // "Ing Hive Keys",
        start: 0,
        max: 3,
        over: "F_Boss_Ex",
        overText: "Quadraxis required",
        segments: [
          {
            id: "ingHiveKey",
            locale: {
              'enUS': {
                id: "quadraxis"
              }
            },
            name: "Ing Hive Keys",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Quadraxis required",
            start: 0,
            max: 3,
            bg: "5c819e",
            nodeType: "artifact",
            value: 1,
          },{
            id: "lightOfAether",
            name: "Ing Hive Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Sanctuary Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "5c819e",
        nodeType: "artifact",
        value: 1,
        displayIfScramble: true,
      },{
        id: "skyTempleKey",
        name: "", // "Sky Temple Keys",
        start: 0,
        max: 9,
        over: "E_Lumin_Ex",
        overText: "Hints Acquired",
        segments: [
          {
            id: "skyTempleKey",
            locale: {
              'enUS': {
                id: "aetherKey"
              }
            },
            name: "Sky Temple Keys",
            sprite: "skyKey",
            over: "E_Lumin_Ex",
            overText: "Hints acquired",
            start: 0,
            max: 9,
            bg: "008080",
            nodeType: "artifact",
            value: 0,
          },{
            id: "skyTempleAccess",
            name: "Sky Temple Accessible",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "artifact",
        value: 0,
        clearIfScramble: true,
      },{
        id: "skyTempleKey",
        name: "", // "Sky Temple Keys",
        start: 0,
        max: 9,
        over: "E_Lumin_Ex",
        overText: "Hints Acquired",
        segments: [
          {
            id: "skyTempleKey",
            locale: {
              'enUS': {
                id: "aetherKey"
              }
            },
            name: "Sky Temple Keys",
            sprite: "skyKey",
            over: "E_Lumin_Ex",
            overText: "Hints acquired",
            start: 0,
            max: 9,
            bg: "008080",
            nodeType: "artifact",
            value: 1,
          },{
            id: "skyTempleAccess",
            name: "Sky Temple Accessible",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "artifact",
        value: 1,
        displayIfScramble: true,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "splinter",
        name: "Alpha Splinter",
      },{
        id: "bombguard",
        name: "Bomb Guardian",
      },{
        id: "jumpguard",
        name: "Jump Guardian",
      },{
        id: "missileguard",
        name: "Missile Trooper",
      },{
        id: "dsamusa",
        name: "Dark Samus 1",
      },{
        id: "amorbis",
        name: "Amorbis",
      },{
        id: "torvuspirates",
        name: "Pirate Ambush",
      },{
        id: "boostguard",
        name: "Boost Guardian",
      },{
        id: "alphablogg",
        name: "Alpha Blogg",
      },{
        id: "grappleguard",
        name: "Grapple Guardian",
      },{
        id: "chykka",
        name: "Chykka",
      },{
        id: "reactorquad",
        name: "Quad",
      },{
        id: "spiderguard",
        name: "Spider Guardian",
      },{
        id: "pbombguard",
        name: "Power Bomb Guardian",
      },{
        id: "dsamusb",
        name: "Dark Samus 2",
      },{
        id: "caretaker",
        name: "Caretaker Class Drone",
      },{
        id: "quadraxis",
        name: "Quadraxis",
      },{
        id: "emperoring",
        name: "Emperor Ing",
      },{
        id: "dsamusc",
        name: "Dark Samus 3 and 4",
      }
    ],
    areas: [
      {
        id: "tgrounds",
        name: "Temple Grounds",
        starting: true,
        color: "2038ec",
      },{
        id: "darktgrounds",
        name: "Sky Temple Grounds",
        starting: false,
        color: "2038ec",
      },{
        id: "gtemple",
        name: "Great Temple",
        starting: false,
        color: "db2b00",
      },{
        id: "darkgtemple",
        name: "Sky Temple",
        starting: false,
        color: "db2b00",
      },{
        id: "agon",
        name: "Agon Wastes",
        starting: false,
        color: "009700",
      },{
        id: "darkagon",
        name: "Dark Agon Wastes",
        starting: false,
        color: "009700",
      },{
        id: "torvus",
        name: "Torvus Bog",
        starting: false,
        color: "bf00bf",
      },{
        id: "darktorvus",
        name: "Dark Torvus Bog",
        starting: false,
        color: "bf00bf",
      },{
        id: "hydrodynamo",
        name: "Torvus Bog - Hydrodynamo",
        starting: false,
        color: "bf00bf",
      },{
        id: "darkhydro",
        name: "Dark Torvus Bog - Hydrodynamo",
        starting: false,
        color: "bf00bf",
      },{
        id: "sanctuary",
        name: "Sanctuary Fortress",
        starting: false,
        color: "bcbcbc",
      },{
        id: "inghive",
        name: "Ing Hive",
        starting: false,
        color: "bcbcbc",
      },{
        id: "uppersanc",
        name: "Sanctuary Fortress - Upper Level",
        starting: false,
        color: "bcbcbc",
      },{
        id: "upperhive",
        name: "Ing Hive - Upper Level",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff"
      {
        id: "bombC",
        name: "Command Chamber Gate", // Temple Grounds, Hive Tunnels, normally done as part of the pre-Spilling tutorial
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Spilled Bag",
        nodeType: "event",
      },{
        id: "lightBeam",
        name: "Dynamo Chamber Lock", // Temple Grounds, the one that adds another layer of Power Bomb Denzium to the puzzle
        nodeType: "trigger",
      },{
        id: "lightBeam",
        name: "Trooper Security Station Lock", // Temple Grounds, the one glitchy gate that ends up dying
        nodeType: "trigger",
      },{
        id: "unused",
        name: "GFMC Cutscene",
        nodeType: "event",
      },{
        id: "lightBeam",
        name: "Light Block Moved", // Temple Grounds, Path of Eyes, blocking access to Windchamber Gateway
        nodeType: "trigger",
      },{
        id: "lightBeam",
        name: "Sacred Bridge Gate", // Temple Grounds, requires Dark Visor and Seekers, turns into a platform when complete, reopens GFMC Compound on way to Sanctuary
        nodeType: "trigger",
      },{
        id: "seekerMissiles",
        name: "Ing Windchamber Cobalt Seeker Lock", // unlocks grapple points
        nodeType: "trigger",
      },{
        id: "seekerMissiles",
        name: "Ing Windchamber Amber Seeker Lock",
        nodeType: "trigger",
      },{
        id: "lightBeam",
        name: "Light Block Moved", // Great Temple, Transport C Access (path towards Torvus)
        nodeType: "trigger",
      },{
        id: "bombC",
        name: "Agon Interdimensional Bomb Slot", // Portal Terminal <- (Dark) Portal Site
        nodeType: "trigger",
      },{
        id: "bombC",
        name: "Transport Center Bomb Slot", // Agon, Transport Center
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Mining Station A Sand Gate", // Agon
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Command Center Gate", // Agon Command Center, southern gate
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Security Station B Gate", // Agon, where Dark Samus makes an appearance
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Scan Node 1", // Dark Agon, scan 3 nodes to open the way towards Watering Hole -> Feeding Pit -> Light Beam
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Scan Node 2",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Scan Node 3",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Sand Processing Cleaned", // Agon, removes terrain and shifts requirement to Boost Ball
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Vigilance Class Turret", // Agon Central Mining Station
        nodeType: "event",
      },{
        id: "unused",
        name: "Torvus Lagoon Gates", // upper part of the room, also shortcut access back to lower
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Great Bridge Cannon", // Torvus, right outside the temple
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Forgotten Bridge Turned", // Forgotten Bridge <- Dark Forgotten Bridge, Interdimensional Bomb Slot
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Forgotten Balcony Opened", // upper Forgotten Bridge <- upper Dark Forgotten Bridge, Interdimensional Spinner
        nodeType: "trigger",
      },{
        id: "boostBall",
        name: "Torvus Interdimensional Spinner", // Dark Hydrodynamo, Crypt -> Gathering Hall
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Scan Node 1", // Torvus Hydrodynamo, in front of Blue Door
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Scan Node 2", // Torvus Hydrodynamo, in front of Black Door
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Scan Node 3", // Torvus Hydrodynamo, in front of White Door
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Training Chamber Bomb Slot", // Torvus Hydrodynamo, allows access to Sanctuary PB Door
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Gathering Hall Portal Gate Access", // Torvus Hydrodynamo -> Dark Crypt
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Catacombs Portal Gate Access", // Torvus Hydrodynamo -> Dark Dungeon
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Crypt Barrier Access", // Dark Torvus Hydrodynamo
        nodeType: "trigger",
      },{
        id: "boostBall",
        name: "Sanctuary Temple Transport Access", // Sanctuary, the rings of authorization
        nodeType: "trigger",
      },{
        id: "seekerMissile",
        name: "Reactor Access Gate", // Sanctuary, first Rezbit encounter
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Minigyro Chamber Puzzle", // Sanctuary, Amber-Cobalt-Crimson-Emerald(-Violet...)
        nodeType: "trigger",
      },{
        id: "powerBombB",
        name: "Glass Tunnel Broken", // Sanctuary, Hall of Combat Mastery
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Watch Station Portal Gate", // Upper Sanctuary -> Ing Hive Aerial Training Site
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Hive Dynamo Works Portal Gate", // Ing Hive -> Dynamo Works
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Watch Station Access Grapple Points", // Upper Sanctuary
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Main Gyro Chamber Puzzle 1", // Upper Sanctuary, outer ring
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Main Gyro Chamber Puzzle 2", // Upper Sanctuary, slanted ring
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Main Gyro Chamber Spinner", // Upper Sanctuary, grants access to second half of the one half of the room / shortcut back
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Temple Access Cannon", // Upper Sanctuary, need Dark Visor and Seekers to be able to go back up from the lower half of the room
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Vigilance Class Turret", // Sanctuary Entrance
        nodeType: "event",
      },{
        id: "unused",
        name: "Map: Hive Tunnels",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: GFMC Compound",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Agon Wastes",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Torvus Bog",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Sanctuary Fortress",
        nodeType: "map",
      },{
        id: "unused",
        name: "Hive Tunnels",
        nodeType: "area",
      },{
        id: "unused",
        name: "Pirate Base",
        nodeType: "area",
      },{
        id: "unused",
        name: "S",
        nodeType: "save",
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Ammo Refilled",
        nodeType: "recharge",
      }
    ],
    map: [
    ],
  },
  "ph": {
    checklistWidth: 8,
    items: [
      {
        id: "missileD",
        sprite: "missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 0,
      },{
        id: "voltDriver",
        sprite: "volt",
        name: "Volt Driver",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffbc15",
        nodeType: "key",
        value: 1,
      },{
        id: "magmaul",
        sprite: "magmaul",
        name: "Magmaul",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "shockCoil",
        sprite: "coil",
        name: "Shock Coil",
        start: 0,
        max: 1,
        segments: [],
        bg: "303898",
        nodeType: "key",
        value: 1,
      },{
        id: "battlehammer",
        sprite: "hammer",
        name: "Battlehammer",
        start: 0,
        max: 1,
        segments: [],
        bg: "22b14c",
        nodeType: "key",
        value: 1,
      },{
        id: "judicator",
        sprite: "jud",
        name: "Judicator",
        start: 0,
        max: 1,
        segments: [],
        bg: "6f3198",
        nodeType: "key",
        value: 1,
      },{
        id: "imperialist",
        sprite: "imp",
        name: "Imperialist",
        start: 0,
        max: 1,
        segments: [],
        bg: "ed1c24",
        nodeType: "key",
        value: 1,
      },{
        id: "omegaCannon",
        sprite: "omega",
        name: "Omega Cannon",
        start: 0,
        max: 1,
        segments: [],
        bg: "c8d8d8",
        nodeType: "key",
        value: 0,
      },{
        id: "energyTankA",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 7,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "tank",
        name: "Missile Expansions",
        start: 0,
        max: 9,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "uaExpansion",
        // sprite: "uatank",
        name: "UA Expansions",
        start: 0,
        max: 12,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "alimbicArtifactCA1",
        name: "Celestial Archives 1", // "Alimbic Artifacts - CA 1"
        start: 0,
        max: 3,
        segments: [
          {
            id: "alimbicArtifactCA1",
            sprite: "ca1",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3,
            bg: "00f0c8",
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "00f0c8", // "008080"
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },{
        id: "alimbicArtifactAl1",
        name: "Alinos 1", // "Alimbic Artifacts - Al 1"
        start: 0,
        max: 3,
        segments: [
          {
            id: "alimbicArtifactAl1",
            sprite: "al1",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3,
            bg: "f09000",
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "f09000", // "008080"
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },{
        id: "alimbicArtifactVDO1",
        name: "VDO 1", // "Alimbic Artifacts - VDO 1"
        start: 0,
        max: 3,
        segments: [
          {
            id: "alimbicArtifactVDO1",
            sprite: "vdo1",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3,
            bg: "2090a8",
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "2090a8", // "008080"
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },{
        id: "alimbicArtifactArc1",
        name: "Arcterra 1", // "Alimbic Artifacts - Arc 1"
        start: 0,
        max: 3,
        segments: [
          {
            id: "alimbicArtifactArc1",
            sprite: "arc1",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3,
            bg: "2858a0",
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "2858a0", // "008080"
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },{
        id: "oubliette",
        name: "", //"Oubliette unlocked",
        start: 0,
        max: 1,
        segments: [
          {
            id: "octolith",
            sprite: "bigocto",
            name: "Octoliths",
            start: 0,
            max: 8,
            bg: "008080",
            nodeType: "artifact",
          },{
            id: "alimbicCannon",
            name: "Alimbic Cannon Control Room",
            start: 0,
            max: 1,
            bg: "402c00",
            nodeType: "goal",
            clearIfScramble: true,
          },{
            id: "oubliette",
            name: "Oubliette unlocked",
            start: 0,
            max: 1,
            bg: "402c00",
            nodeType: "goal",
            clearIfScramble: true,
          }
        ],
        bg: "402c00",
        nodeType: "goal",
        value: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "alimbicArtifactCA2",
        name: "Celestial Archives 2", // "Alimbic Artifacts - CA 2"
        start: 0,
        max: 3,
        segments: [
          {
            id: "alimbicArtifactCA2",
            sprite: "ca2",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3,
            bg: "b8e008",
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "b8e008", // "008080"
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },{
        id: "alimbicArtifactAl2",
        name: "Alinos 2", // "Alimbic Artifacts - Al 2"
        start: 0,
        max: 3,
        segments: [
          {
            id: "alimbicArtifactAl2",
            sprite: "al2",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3,
            bg: "f00000",
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "f00000", // "008080"
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },{
        id: "alimbicArtifactVDO2",
        name: "VDO 2", // "Alimbic Artifacts - VDO 2"
        start: 0,
        max: 3,
        segments: [
          {
            id: "alimbicArtifactVDO2",
            sprite: "vdo2",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3,
            bg: "0868e0",
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "0868e0", // "008080"
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },{
        id: "alimbicArtifactArc2",
        name: "Arcterra 2", // "Alimbic Artifacts - Arc 2"
        start: 0,
        max: 3,
        segments: [
          {
            id: "alimbicArtifactArc2",
            sprite: "arc2",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3,
            bg: "184898",
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "184898", // "008080"
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "magmaspawn",
        name: "Magma Spawn",
      },{
        id: "arcticspawn",
        name: "Arctic Spawn",
      },{
        id: "bossaa",
        name: "Cretaphid 1",
      },{
        id: "bossab",
        name: "Cretaphid 2",
      },{
        id: "bossac",
        name: "Cretaphid 3",
      },{
        id: "bossad",
        name: "Cretaphid 4",
      },{
        id: "bossba",
        name: "Slench 1",
      },{
        id: "bossbb",
        name: "Slench 2",
      },{
        id: "bossbc",
        name: "Slench 3",
      },{
        id: "bossbd",
        name: "Slench 4",
      },{
        id: "goreaa",
        name: "Gorea 1",
      },{
        id: "goreab",
        name: "Gorea 2",
      }
    ],
    areas: [
      {
        id: "carchives",
        name: "Celestial Archives",
        starting: true,
        color: "2038ec",
      },{
        id: "alinos",
        name: "Alinos",
        starting: false,
        color: "db2b00",
      },{
        id: "vesperdo",
        name: "Vesper Defense Outpost",
        starting: false,
        color: "009700",
      },{
        id: "arcterra",
        name: "Arcterra",
        starting: false,
        color: "bf00bf",
      },{
        id: "oubliette",
        name: "Oubliette",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "Teleporter A",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Teleporter B",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Possible Hunter Encounter",
        nodeType: "boss", // might need new coloration?
      },{
        id: "unused",
        name: "Spire Event",
        nodeType: "event",
      }
    ],
    map: [
    ],
  },
  "mp3c": {
    checklistWidth: 8,
    items: [
      {
        id: "powerBeamA",
        name: "Power Beam",
        start: 1,
        max: 1,
        segments: [],
        bg: "ffb508",
        nodeType: "key",
        value: 0,
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        start: 1,
        max: 1,
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 0,
      },{
        id: "hypermode",
        locale: {
          'enUS': {
            id: "hyperBeam"
          }
        },
        name: "Hyper Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "1010e0",
        nodeType: "key",
        value: 1,
      },{
        id: "flameShot",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        name: "Plasma Beam",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Ghor Defeated",
        segments: [],
        bg: "ff4a4a",
        nodeType: "key",
        value: 1,
      },{
        id: "novaBeamA",
        locale: {
          'enUS': {
            id: "novaBeam"
          }
        },
        name: "Nova Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Mining Laser defeated",
        segments: [],
        bg: "00ff08",
        nodeType: "key",
        value: 1,
      },{
        id: "combatVisor",
        name: "Combat Visor",
        start: 1,
        max: 1,
        segments: [],
        bg: "80d0ff",
        nodeType: "key",
        value: 0,
      },{
        id: "ped",
        name: "P.E.D. Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 0,
      },{
        id: "spinBoost",
        name: "Space Jump Boots",
        start: 1,
        max: 1,
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 0,
      },{
        id: "missileC",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        nodeType: "key",
        value: 1,
      },{
        id: "iceMissileB",
        name: "Ice Missile",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Rundas Defeated",
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 1,
      },{
        id: "seekerLauncherB",
        name: "Seeker Launcher",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Skytown - Eastern Skytown - Xenoresearch B",
        segments: [],
        bg: "644080",
        nodeType: "key",
        value: 1,
      },{
        id: "shipMissile",
        name: "Ship Missile",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Bryyo - Hangar Bay",
        segments: [],
        bg: "7f2800",
        nodeType: "key",
        value: 1,
      },{
        id: "hyperMissile",
        name: "Hyper Missile",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Helios Defeated",
        segments: [],
        bg: "007f0e",
        nodeType: "key",
        value: 1,
      },{
        id: "scanVisorB",
        name: "Scan Visor",
        start: 1,
        max: 1,
        segments: [],
        bg: "bca470",
        nodeType: "key",
        value: 0,
      },{
        id: "phazonSuit",
        name: "Corrupted Hypermode",
        start: 0,
        max: 1,
        segments: [],
        bg: "282018",
        nodeType: "key",
        value: 0,
      },{
        id: "screwAttackA",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Bryyo - Bryyo Ice - Hall of Remembrance",
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "morphBall",
        name: "Morph Ball",
        start: 1,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 0,
      },{
        id: "bombC",
        name: "Bombs",
        start: 1,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 0,
      },{
        id: "boostBall",
        name: "Boost Ball",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Defense Drone Defeated",
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "spiderBallA",
        name: "Spider Ball",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Skytown - Powerworks",
        segments: [],
        bg: "007f0e",
        nodeType: "key",
        value: 1,
      },{
        id: "hyperBall",
        name: "Hyper Ball",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Mogenar Defeated",
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 1,
      },{
        id: "commandVisor",
        name: "Command Visor",
        start: 0,
        max: 1,
        segments: [],
        bg: "bfbf00",
        nodeType: "key",
        value: 0,
      },{
        id: "hazardShield",
        name: "Hazard Shield",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Pirate Homeworld - Pirate Research - Craneyard",
        segments: [],
        bg: "602880",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "grappleLasso",
        name: "Grapple Lasso",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Norion - Docking Hub Alpha",
        segments: [],
        bg: "ff7b7b",
        nodeType: "key",
        value: 1,
      },{
        id: "grappleBeam",
        name: "Grapple Swing",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Bryyo - Reliquary I",
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "grappleVoltage",
        name: "Grapple Voltage",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Gandrayda Defeated",
        segments: [],
        bg: "92278f",
        nodeType: "key",
        value: 1,
      },{
        id: "shipGrapple",
        name: "Ship Grapple",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Skytown - Eastern Skytown - Skytown Federation Landing Site",
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "hyperGrapple",
        name: "Hyper Grapple",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Omega Ridley Defeated",
        segments: [],
        bg: "fcc4d8",
        nodeType: "key",
        value: 1,
      },{
        id: "corruptionXRayVisor",
        name: "X-Ray Visor",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Pirate Homeworld - Pirate Command - Command Vault",
        segments: [],
        bg: "c8d8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTankA",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 50,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "shipMissileExpansion",
        name: "Ship Missile Expansions",
        start: 0,
        max: 8,
        segments: [],
        bg: "7f2800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "theronianBomb",
        name: "Theronian Bomb Components",
        start: 0,
        max: 3,
        segments: [],
        bg: "887878",
        nodeType: "goal",
        value: 0,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },/*{
        id: "norion",
        name: "Norion Complete",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },{
        id: "bryyo",
        name: "Bryyo Complete",
        start: 0,
        max: 1,
        over: "F_Boss_Ex",
        overText: "Mogenar required",
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },{
        id: "theronianBomb",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "theronianBomb",
            name: "Theronian Bomb Components",
            over: "F_Boss_Ex",
            overText: "Helios required",
            start: 0,
            max: 3,
            bg: "887878",
            nodeType: "goal",
            value: 0,
          },{
            id: "elysia",
            name: "Elysia Complete",
            over: "F_Boss_Ex",
            overText: "Helios required",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          },
        ],
        value: 0,
      },{
        id: "urtraghus",
        name: "Pirate Homeworld Complete",
        start: 0,
        max: 1,
        over: "F_Boss_Ex",
        overText: "Omega Ridley required",
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },*/{
        id: "energyCell",
        name: "", // "Energy Cells",
        start: 0,
        max: 9,
        over: "C_Fuse",
        overText: "Hints Acquired",
        segments: [
          {
            id: "energyCell",
            name: "Energy Cells",
            start: 0,
            max: 9,
            over: "C_Fuse",
            overText: "Hints Acquired",
            bg: "008080",
            nodeType: "artifact",
            value: 1,
          },{
            id: "pirateCode",
            name: "Pirate Code",
            start: 0,
            max: 1,
            bg: "887878",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          },{
            id: "phaaze",
            name: "Phaaze accessible",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "artifact",
        value: 1,
      },{
        id: "pirateCode",
        name: "Pirate Code",
        start: 0,
        max: 1,
        segments: [],
        bg: "887878",
        nodeType: "goal",
        value: 0,
        displayIfScramble: true,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "berserkerlorda", // olympus
        name: "Berserker Lord",
      },{
        id: "mridley",
        name: "Meta Ridley",
      },{
        id: "rundas",
        name: "Rundas",
      },{
        id: "korakk",
        name: "Pirate Hussar & Korakk Beast",
      },{
        id: "mogenar",
        name: "Mogenar",
      },{
        id: "steamlorda", // barracks
        name: "Steamlord",
      },{
        id: "steamlordb", // skybridge
        name: "Steamlord",
      },{
        id: "steamlordc", // def drone
        name: "Steamlord",
      },{
        id: "defdrone",
        name: "Defense Drone",
      },{
        id: "ghor",
        name: "Ghor",
      },{
        id: "berserkerlordb", // skytown
        name: "Berserker Lord",
      },{
        id: "helios",
        name: "Helios",
      },{
        id: "gandrayda",
        name: "Gandrayda",
      },{
        id: "mhatchera", // norion
        name: "Metroid Hatcher",
      },{
        id: "mhatcherb", // homeworld
        name: "Metroid Hatcher",
      },{
        id: "mhatcherc", // valhalla
        name: "Metroid Hatcher",
      },{
        id: "mhatcherd", // 
        name: "Metroid Hatcher",
      },{
        id: "phharvester",
        name: "Phazon Harvester",
      },{
        id: "pircommander",
        name: "Pirate Commander",
      },{
        id: "oridley",
        name: "Omega Ridley",
      },{
        id: "levinfant",
        name: "Leviathan Infant",
      },{
        id: "dsamusd",
        name: "Final Dark Samus",
      },{
        id: "au313",
        name: "Aurora Unit 313",
      }
    ],
    areas: [
      {
        id: "olympus",
        name: "GFS Olympus",
        starting: true,
        color: "2038ec",
      },{
        id: "olympusb",
        name: "GFS Olympus 2",
        starting: true,
        color: "2038ec",
      },{
        id: "norion",
        name: "Norion",
        starting: false,
        color: "db2b00",
      },{
        id: "bryyocliff",
        name: "Bryyo - Cliffside",
        starting: false,
        color: "009700",
      },{
        id: "bryyofire",
        name: "Bryyo - Fire",
        starting: false,
        color: "009700",
      },{
        id: "bryyojungle",
        name: "Bryyo - Thorn Jungle",
        starting: false,
        color: "009700",
      },{
        id: "bryyoice",
        name: "Bryyo - Ice",
        starting: false,
        color: "009700",
      },{
        id: "bryyoseed",
        name: "Bryyo - Seed",
        starting: false,
        color: "009700",
      },{
        id: "elysiaa",
        name: "Elysia - Skytown West",
        starting: false,
        color: "bf00bf",
      },{
        id: "elysiab",
        name: "Elysia - Skytown East",
        starting: false,
        color: "bf00bf",
      },{
        id: "elysiaseed",
        name: "Elysia - Seed",
        starting: false,
        color: "bf00bf",
      },{
        id: "valhalla",
        name: "GFS Valhalla",
        starting: true,
        color: "2038ec",
      },{
        id: "homeworldcommand",
        name: "Pirate Homeworld - Command Center",
        starting: false,
        color: "bcbcbc",
      },{
        id: "homeworldresearch",
        name: "Pirate Homeworld - Research",
        starting: false,
        color: "bcbcbc",
      },{
        id: "homeworldmines",
        name: "Pirate Homeworld - Phazon Mines",
        starting: false,
        color: "bcbcbc",
      },{
        id: "homeworldcommand",
        name: "Pirate Homeworld - Seed",
        starting: false,
        color: "bcbcbc",
      },{
        id: "phaaze",
        name: "Phaaze",
        starting: false,
        color: "db2b00",
      },
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "First Mission", // Olympus -> Norion
        nodeType: "event",
      },{
        id: "unused",
        name: "Dock A Access", // Norion
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Dock B Access", // Norion
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Bryyo Mission", // Olympus -> Bryyo
        nodeType: "event",
      },{
        id: "unused",
        name: "Fed Dock", // Bryyo
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Thorn Jungle Access", // Bryyo
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Fire Access", // Bryyo
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Shield Generator 1 Destroyed", // Bryyo
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Shield Generator 2 Destroyed", // Bryyo
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Site A Access", // Skytown West
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Site B Access", // Skytown East
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Shield Nuked", // Skytown West
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Valhalla Access", // Bryyo Ice -> Fire -> Valhalla
        nodeType: "event",
      },{
        id: "unused",
        name: "Pirate Homeworld Access", // -> Homeworld
        nodeType: "event",
      },{
        id: "unused",
        name: "Access to Research", // PH
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Mines Unlocked", // PH
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Seed Door", // PH
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Phaaze Mission", // PH -> Phaaze
        nodeType: "event",
      },{
        id: "unused",
        name: "S",
        nodeType: "save",
      },{
        id: "unused",
        name: "Map: Norion", // Norion, on the way to Generator A
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Bryyo", // Bryyo Cliffside, Federation Crash Site
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Skytown West", // Skytown West, AU 217
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Skytown East", // Skytown East, Chozo Observatory
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Norion Clues", // Skytown East, Chozo Observatory
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Bryyo Clues", // Skytown East, Chozo Observatory
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Elysia Clues", // Skytown East, Chozo Observatory
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Pirate Homeworld Clues", // Skytown East, Chozo Observatory
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Pirate Homeworld Command & Research", // Pirate Homeworld, Command -> Research
        nodeType: "map",
      },{
        id: "unused",
        name: "Mission Briefing", // Olympus 1
        nodeType: "event",
      },{
        id: "energyCell",
        name: "Lab Energy Cell", // Olympus 1 Escape
        nodeType: "event",
      },{
        id: "unused",
        name: "Save Event 1", // Olympus 1
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Save Event 2", // Olympus 2
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Generator A Online", // Norion
        nodeType: "goal",
      },{
        id: "unused",
        name: "Generator B Online", // Norion, auto by Rundas
        nodeType: "goal",
      },{
        id: "unused",
        name: "Generator C Online", // Norion
        nodeType: "goal",
      },{
        id: "unused",
        name: "Hidden Court Grapple", // Bryyo Cliffside
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Bridge Access A", // Bryyo Cliffside
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Bridge Access B", // Bryyo Thorn Jungle
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Turret 1 Destroyed", // Bryyo Thorn Jungle
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Turret 2 Destroyed", // Bryyo Thorn Jungle
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Ghor Assault", // Skytown West
        nodeType: "trigger",
      },{
        id: "unused",
        name: "AU 217 Online", // Skytown West
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Escape Pod", // Skytown West
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Xenoresearch Cells Open", // Skytown East, Xenoresearch B
        nodeType: "trigger",
      },{
        id: "unused",
        name: "AU 313 Pad Code", // Valhalla
        nodeType: "easter",
      },{
        id: "unused",
        name: "AU 313 Message", // Valhalla
        nodeType: "easter",
      },{
        id: "unused",
        name: "Fans Off", // Pirate Homeworld, Command
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Shield Core Sighted", // Pirate Homeworld, Command
        nodeType: "event",
      },{
        id: "unused",
        name: "Rescue Mission", // Pirate Homeworld, Command -> Research
        nodeType: "event",
      },{
        id: "unused",
        name: "Shield Core Down", // Pirate Homeworld, Command -> Seed Train Line
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Transit Tunnels", // Pirate Homeworld, Command -> Seed Train Line, protect the 12 demo troopers
        nodeType: "event",
      },{
        id: "unused",
        name: "Scrap Access", // Pirate Homeworld, Research
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Metroids Loose", // Pirate Homeworld, Research
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Dread Reference", // Pirate Homeworld, Research
        nodeType: "easter",
      },{
        id: "unused",
        name: "Mine Loop Open", // Pirate Homeworld, Phazon Mines
        nodeType: "access",
      },{
        id: "shipGrapple",
        name: "Golem Head",
        nodeType: "slot", // "slot" -> "cargo" ?
      },{
        id: "shipGrapple",
        name: "Large Generator",
        nodeType: "slot",
      },{
        id: "unused",
        name: "Gold Credit",
        nodeType: "unreq",
      }
    ],
    map: [
    ],
  }, 
  "mpff": {
    checklistWidth: 4,
    items: [
      {
        id: "repairCapsule",
        name: "Repair Capsule",
        sprite: "repair",
        start: 0,
        max: 1,
        segments: [],
        bg: "9464e4",
        nodeType: "key",
        value: 0,
      },{
        id: "shieldGenerator",
        name: "Shield Generator",
        sprite: "shield",
        start: 0,
        max: 1,
        segments: [],
        bg: "9464e4",
        nodeType: "key",
        value: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "missileB",
        name: "Missile",
        sprite: "missile",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "key",
        value: 0,
      },{
        id: "superMissileB",
        name: "Super Missile",
        sprite: "super",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "key",
        value: 0,
      },{
        id: "flameShot",
        name: "Flame Shot",
        sprite: "flame",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "key",
        value: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "iceMissileB",
        name: "Freeze Shot",
        sprite: "freeze",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "key",
        value: 0,
      },{
        id: "shockShot",
        name: "Shock Shot",
        sprite: "shock",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "key",
        value: 0,
      },{
        id: "proximityBomb",
        name: "Proximity Bomb",
        sprite: "mine",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "key",
        value: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "slowBeam",
        name: "Slow Beam",
        sprite: "slow",
        start: 0,
        max: 1,
        segments: [],
        bg: "b4ff00",
        nodeType: "key",
        value: 0,
      },{
        id: "decoy",
        name: "Decoy",
        sprite: "decoy",
        start: 0,
        max: 1,
        segments: [],
        bg: "b4ff00",
        nodeType: "key",
        value: 0,
      },{
        id: "scanBolt",
        name: "Scan Bolt",
        sprite: "scan",
        start: 0,
        max: 1,
        segments: [],
        bg: "b4ff00",
        nodeType: "key",
        value: 0,
      },{
        id: "goldMedal",
        name: "Gold Medals",
        start: 0,
        max: 75,
        segments: [],
        bg: "c0c6c0",
        nodeType: "unreq",
        value: 0,
        clearIfScramble: true,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
    ],
    areas: [
    ],
    extras: [ // bg: "ffffff",
    ],
    map: [
    ],
  },
  "m2ros": {
    checklistWidth: 4,
    items: [
      {
        id: "-",
        name: "",
        max: 0,
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        nodeType: "key",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 1,
      },{
        id: "barrierA",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "2038ec",
        nodeType: "slot",
        slotType: "beam",
        value: 1,
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "92278f",
        nodeType: "slot",
        slotType: "beam",
        value: 1,
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffff80",
        nodeType: "slot",
        slotType: "beam",
        value: 1,
      },{
        id: "plasmaBeam",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "00ff08",
        nodeType: "slot",
        slotType: "beam",
        value: 1,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 6,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Pods",
        start: 0,
        max: 22,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "monsterDna",
        name: "Metroids defeated",
        sprite: "monsters",
        start: 0,
        max: 49,
        segments: [
          {
            id: "monsterDna",
            name: "Phase 1",
            sprite: "monsters",
            type: "counter",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 2",
            sprite: "monsters",
            start: 0,
            max: 4,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 3",
            sprite: "monsters",
            start: 0,
            max: 8,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 4",
            sprite: "monsters",
            start: 0,
            max: 10,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 5",
            sprite: "monsters",
            type: "counter",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 6",
            sprite: "monsters",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 7",
            sprite: "monsters",
            start: 0,
            max: 7,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 8",
            sprite: "monsters",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 9",
            sprite: "monsters",
            start: 0,
            max: 3,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 10",
            sprite: "monsters",
            start: 0,
            max: 9,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },{
        id: "monster",
        sprite: "baby",
        name: "Baby Metroid",
        start: 0,
        max: 1,
        segments: [],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "alpha",
        name: "Alpha Metroid",
      },{
        id: "gamma",
        name: "Gamma Metroid",
      },{
        id: "zeta",
        name: "Zeta Metroid",
      },{
        id: "omega",
        name: "Omega Metroid",
      },{
        id: "larval",
        name: "Larval Metroid",
      },{
        id: "queen",
        name: "Queen Metroid",
      },{
        id: "arachnus",
        name: "Arachnus",
      }
    ],
    areas: [
      {
        id: "maintunnel",
        name: "Main Tunnel",
        starting: true,
        color: "2038ec",
      },{
        id: "areaa",
        name: "Area 1",
        starting: false,
        color: "db2b00",
      },{
        id: "areab",
        name: "Area 2",
        starting: false,
        color: "db2b00",
      },{
        id: "areac",
        name: "Area 3",
        starting: false,
        color: "db2b00",
      },{
        id: "aread",
        name: "Area 5",
        starting: false,
        color: "db2b00",
      },{
        id: "areaz",
        name: "Final Area",
        starting: false,
        color: "db2b00",
      }
    ],
    extras: [ // nodeType: "goal", bg: "ffffff",
      {
        id: "unused",
        name: "S",
        nodeType: "save",
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Energy Recharge",
        nodeType: "recharge",
      },
    ],
    map: [
    ],
  },
  "mcon": {
    checklistWidth: 5,
    items: [
      {
        id: "morphBall",
        name: "Morph Ball",
        sprite: "morph",
        start: 0,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 1,
      },{
        id: "bomb",
        name: "Bombs",
        sprite: "bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "powerGrip",
        name: "Power Grip",
        sprite: "grip",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "highJump",
        name: "High Jump Boots",
        sprite: "high",
        start: 0,
        max: 1,
        over: "S_Boss",
        overText: "Crocomire Defeated",
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "speedBooster",
        name: "Speed Booster",
        sprite: "speed",
        start: 0,
        max: 1,
        over: "S_Boss",
        overText: "Kraid Defeated",
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        sprite: "charge",
        start: 0,
        max: 1,
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 1,
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        name: "Spazer Beam",
        sprite: "wide",
        start: 0,
        max: 1,
        over: "S_Boss",
        overText: "Ridley Defeated",
        segments: [],
        bg: "ffff80",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTank",
        name: "Energy Tanks",
        sprite: "energy",
        start: 0,
        max: 3,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Tanks",
        sprite: "missile",
        start: 0,
        max: 12,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        name: "Super Missile Tanks",
        sprite: "smissile",
        start: 0,
        max: 2,
        segments: [],
        bg: "007f0e",
        nodeType: "expansion",
        value: 1,
      },{
        id: "boss",
        name: "Bosses",
        sprite: "bosses",
        start: 0,
        max: 3,
        segments: [],
        bg: "747474",
        nodeType: "boss",
        value: 0,
      },{
        id: "energyCell",
        name: "Fuel Cell",
        sprite: "fuelcell",
        start: 0,
        max: 1,
        segments: [],
        bg: "008080",
        nodeType: "key",
        value: 1,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "ridley",
        name: "Ridley",
      },{
        id: "crocomire",
        name: "Crocomire",
      },{
        id: "kraid",
        name: "Kraid",
      }
    ],
    areas: [
      {
        id: "simulation",
        name: "Simulation",
        starting: true,
        color: "2038ec",
      }
    ],
    extras: [ // nodeType: "goal", bg: "ffffff",
      {
        id: "unused",
        name: "S",
        nodeType: "save",
      },{
        id: "unused",
        name: "Floor Switch",
        nodeType: "trigger",
      },
    ],
    map: [
    ],
  },
  "am2r": {
    checklistWidth: 8,
    items: [
      {
        id: "morphBall",
        name: "Morph Ball",
        sprite: "morph",
        start: 1,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 0,
      },{
        id: "barrierA",
        name: "Varia Suit",
        sprite: "barrier",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "gravitySuit",
        name: "Gravity Suit",
        sprite: "gravity",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        nodeType: "key",
        value: 1,
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        sprite: "charge",
        start: 0,
        max: 1,
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 1,
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        name: "Wave Beam",
        sprite: "wave",
        start: 0,
        max: 1,
        segments: [],
        bg: "92278f",
        nodeType: "key",
        value: 1,
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        name: "Spazer Beam",
        sprite: "wide",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffff80",
        nodeType: "key",
        value: 1,
      },{
        id: "plasmaBeam",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        name: "Plasma Beam",
        sprite: "plasma",
        over: "F_Boss",
        overText: "Tester Defeated",
        start: 0,
        max: 1,
        segments: [],
        bg: "00ff08",
        nodeType: "key",
        value: 1,
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        name: "Ice Beam",
        sprite: "ice",
        over: "F_Boss",
        overText: "Serris Defeated",
        start: 0,
        max: 1,
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 1,
      },{
        id: "bomb",
        name: "Bombs",
        sprite: "bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "spiderBall",
        name: "Spider Ball",
        sprite: "spider",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        nodeType: "key",
        value: 1,
      },{
        id: "springBall",
        name: "Spring Ball",
        sprite: "spring",
        over: "F_Boss",
        overText: "Arachnus Defeated",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 1,
      },{
        id: "powerGrip",
        name: "Power Grip",
        sprite: "grip",
        start: 1,
        max: 1,
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 0,
      },{
        id: "highJump",
        name: "High Jump Boots",
        sprite: "high",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "spaceJump",
        name: "Space Jump",
        sprite: "space",
        over: "F_Boss",
        overText: "Torizo Defeated",
        start: 0,
        max: 1,
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 1,
      },{
        id: "speedBooster",
        name: "Speed Booster",
        sprite: "speed",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "screwAttack",
        name: "Screw Attack",
        sprite: "screw",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "energyTank",
        name: "Energy Tanks",
        sprite: "energy",
        start: 0,
        max: 10,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Tanks",
        sprite: "missile",
        start: 0,
        max: 44,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        name: "Super Missile Tanks",
        sprite: "smissile",
        start: 0,
        max: 10,
        segments: [],
        bg: "007f0e",
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        name: "Power Bomb Tanks",
        sprite: "pbombs",
        over: "Z_Orb",
        overText: "Power Plant Destroyed",
        start: 0,
        max: 10,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "monsterDna",
        name: "Metroids defeated",
        sprite: "monster",
        type: "counter",
        start: 0,
        max: 54,
        segments: [
          {
            id: "monsterDna",
            name: "Surface",
            sprite: "monster",
            type: "counter",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Golden Temple",
            sprite: "monster",
            start: 0,
            max: 4,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Hydro Station",
            sprite: "monster",
            start: 0,
            max: 8,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Industrial Complex",
            sprite: "monster",
            start: 0,
            max: 10,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Research Site",
            sprite: "monster",
            type: "counter",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Mining Facility",
            sprite: "monster",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "The Tower",
            sprite: "monster",
            start: 0,
            max: 6,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Distribution Center",
            sprite: "monster",
            start: 0,
            max: 8,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },/* {
            id: "monsterDna",
            name: "Upper Areas",
            sprite: "monster",
            start: 0,
            max: 38,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          }, */{
            id: "monsterDna",
            name: "Rescue Team Campsite",
            sprite: "monster",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "The Nest",
            sprite: "monster",
            start: 0,
            max: 3,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },{
            id: "monsterDna",
            name: "Genetics Laboratory",
            sprite: "monster",
            start: 0,
            max: 9,
            bg: "ffffff",
            nodeType: "goal",
            value: 0,
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },{
        id: "am2rPowerOrb",
        name: "Power Orbs Distributed",
        sprite: "battery",
        start: 0,
        max: 1,
        segments: [],
        bg: "887878",
        nodeType: "goal",
        value: 0,
      },{
        id: "monster",
        name: "Baby Metroid",
        sprite: "baby",
        start: 0,
        max: 1,
        segments: [],
        bg: "008080",
        nodeType: "goal",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "alpha",
        name: "Alpha Metroid",
      },{
        id: "gamma",
        name: "Gamma Metroid",
      },{
        id: "zeta",
        name: "Zeta Metroid",
      },{
        id: "omega",
        name: "Omega Metroid",
      },{
        id: "larval",
        name: "Larval Metroid",
      },{
        id: "queen",
        name: "Queen Metroid",
      },{
        id: "ancientguard",
        name: "Ancient Guardian",
      },{
        id: "arachnus",
        name: "Arachnus",
      },{
        id: "tester",
        name: "The Tester",
      },{
        id: "chozotank",
        name: "Chozo Tank",
      },{
        id: "serris",
        name: "Serris",
      }
    ],
    areas: [
      {
        id: "maintunnel",
        name: "Main Tunnel",
        starting: true,
        color: "2038ec",
      },{
        id: "areaa",
        name: "Golden Temple",
        starting: false,
        color: "db2b00",
      },{
        id: "areab",
        name: "Hydro Station",
        starting: false,
        color: "db2b00",
      },{
        id: "areac",
        name: "Industrial Complex",
        starting: false,
        color: "db2b00",
      },{
        id: "areae",
        name: "The Tower",
        starting: false,
        color: "db2b00",
      },{
        id: "areaq",
        name: "Distribution Center",
        starting: false,
        color: "db2b00",
      },{
        id: "arear",
        name: "GFS Thoth",
        starting: false,
        color: "db2b00",
      },{
        id: "areaz",
        name: "The Nest + Genetics Lab",
        starting: false,
        color: "db2b00",
      }
    ],
    extras: [ // nodeType: "goal", bg: "ffffff",
      {
        id: "unused",
        name: "S",
        nodeType: "save",
      },{
        id: "unused",
        name: "Breeding Grounds", // Golden Temple
        nodeType: "area",
      },{
        id: "unused",
        name: "Breeding Grounds", // Hydro Station
        nodeType: "area",
      },{
        id: "unused",
        name: "Breeding Grounds", // Industrial Complex
        nodeType: "area",
      },{
        id: "unused",
        name: "Mining Facility",
        nodeType: "area",
      },{
        id: "unused",
        name: "Research Site",
        nodeType: "area",
      },{
        id: "unused",
        name: "Power Plant",
        nodeType: "area",
      },{
        id: "unused",
        name: "Genetics Laboratory",
        nodeType: "area",
      },{
        id: "unused",
        name: "Tower Power", // The Tower
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Core Destroyed", // The Tower, Power Plant
        nodeType: "event",
      },{
        id: "unused",
        name: "Thoth Cockpit", // GFS Thoth
        nodeType: "event",
      },{
        id: "unused",
        name: "Trooper Log", // x how many?
        nodeType: "unreq",
      },{
        id: "unused",
        name: "Science Scan", // x how many?
        nodeType: "unreq",
      },{
        id: "unused",
        name: '"Movement Detected"',
        message: "Movement detected",
        nodeType: "unreq",
      },{
        id: "unused",
        name: "Nest Cleared", // The Nest
        nodeType: "event",
      },{
        id: "unused",
        name: "Larval Metroids", // Genetics Lab
        nodeType: "event",
      },{
        id: "unused",
        name: "Power Orb 1",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Orb 2",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Orb 3",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Orb 4",
        nodeType: "trigger",
      },
    ],
    map: [
    ],
  },
  "msr": {
    checklistWidth: 7,
    items: [
      {
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 0,
      },{
        id: "bomb",
        sprite: "bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 0,
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        nodeType: "key",
        value: 0,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Arachnus Defeated",
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 0,
      },{
        id: "powerBomb",
        sprite: "pbombs",
        name: "Power Bomb",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Area 6 - Diggernaut Defeated",
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 0,
      },{
        id: "barrier",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 0,
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        nodeType: "key",
        value: 0,
      },{
        id: "scanPulse",
        sprite: "pulse",
        name: "Scan Pulse",
        start: 0,
        max: 1,
        segments: [],
        bg: "00c7ff",
        nodeType: "key",
        value: 0,
      },{
        id: "lightningArmor",
        sprite: "shield",
        name: "Lightning Armor",
        start: 0,
        max: 1,
        segments: [],
        bg: "00ff08",
        nodeType: "key",
        value: 0,
      },{
        id: "beamBurst",
        sprite: "burst",
        name: "Beam Burst",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffbc15",
        nodeType: "key",
        value: 0,
      },{
        id: "phaseDrift",
        sprite: "drift",
        name: "Phase Drift",
        start: 0,
        max: 1,
        segments: [],
        bg: "e900ff",
        nodeType: "key",
        value: 0,
      },{
        id: "superMissile",
        sprite: "superm",
        name: "Super Missiles",
        start: 0,
        max: 1,
        segments: [],
        bg: "007f0e",
        nodeType: "key",
        value: 0,
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 0,
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Area 4 - Survived Diggernaut",
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 0,
      },{
        id: "chargeBeamD",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        sprite: "charge",
        name: "Charge Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 0,
      },{
        id: "iceBeamB",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 0,
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "92278f",
        nodeType: "key",
        value: 0,
      },{
        id: "wideBeamD",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffff80",
        nodeType: "key",
        value: 0,
      },{
        id: "plasmaBeamC",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "00ff08",
        nodeType: "key",
        value: 0,
      },{
        id: "grappleBeam",
        sprite: "grapple",
        name: "Grapple Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 0,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 10,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "mtank",
        name: "Missile Tanks",
        start: 0,
        max: 80,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "smtank",
        name: "Super Missile Tanks",
        start: 0,
        max: 30,
        segments: [],
        bg: "007f0e",
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbtank",
        name: "Power Bomb Tanks",
        start: 0,
        max: 15,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "aeionExpansion",
        sprite: "aexp",
        name: "Aeion Expansion",
        start: 0,
        max: 15,
        segments: [],
        bg: "bfbf00",
        nodeType: "expansion",
        value: 1,
      },{
        id: "monsterDna",
        name: "Metroids defeated",
        start: 0,
        max: 50,
        segments: [
          {
            id: "monsterDna",
            sprite: "dna",
            name: "Surface",
            type: "counter",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 1",
            start: 0,
            max: 4,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 2",
            start: 0,
            max: 8,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 3",
            start: 0,
            max: 10,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 4",
            type: "counter",
            start: 0,
            max: 4,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 5",
            start: 0,
            max: 7,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 6",
            type: "counter",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 7",
            start: 0,
            max: 3,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 8",
            start: 0,
            max: 11,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },{
        id: "monster",
        sprite: "baby",
        name: "Baby Metroid",
        start: 0,
        max: 1,
        segments: [],
        bg: "008080",
        nodeType: "goal",
        value: 0,
        clearIfScramble: true,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "alpha",
        name: "Alpha Metroid",
      },{
        id: "gamma",
        name: "Gamma Metroid",
      },{
        id: "zeta",
        name: "Zeta Metroid",
      },{
        id: "omega",
        name: "Omega Metroid",
      },{
        id: "larval",
        name: "Larval Metroid",
      },{
        id: "queen",
        name: "Queen Metroid",
      },{
        id: "arachnus",
        name: "Arachnus",
      },{
        id: "diggernauta",
        name: "Diggernaut Chase",
      },{
        id: "diggernautb",
        name: "Diggernaut",
      },{
        id: "pridley",
        name: "Proteus Ridley",
      }
    ],
    areas: [
      {
        id: "surface",
        name: "Surface",
        starting: true,
        color: "2038ec",
      },{
        id: "areaa",
        name: "Area 1",
        starting: false,
        color: "db2b00",
      },{
        id: "areab",
        name: "Area 2",
        starting: false,
        color: "db2b00",
      },{
        id: "areac",
        name: "Area 3",
        starting: false,
        color: "db2b00",
      },{
        id: "aread",
        name: "Area 4",
        starting: false,
        color: "db2b00",
      },{
        id: "areae",
        name: "Area 5",
        starting: false,
        color: "db2b00",
      },{
        id: "areaf",
        name: "Area 6",
        starting: false,
        color: "db2b00",
      },{
        id: "areag",
        name: "Area 7",
        starting: false,
        color: "db2b00",
      },{
        id: "areah",
        name: "Area 8",
        starting: false,
        color: "db2b00",
      },{
        id: "surfaceb",
        name: "Surface (Post-Extinction)",
        starting: false,
        color: "db2b00",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "T",
        nodeType: "teleport",
      },{
        id: "grappleBeam",
        name: "Grapple Blocks broken", // how many of these do we need..? probably a lot...
        nodeType: "access",
      },{
        id: "grappleBeam",
        name: "Diggernaut Awakened", // Area 3, Grapple Beam induced
        nodeType: "event",
      },{
        id: "unused",
        name: "Larval Metroids", // Area 8
        nodeType: "event",
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Energy Recharge",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Aeion Refilled",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "S",
        nodeType: "save",
      },
    ],
    map: [
    ],
  },
  "sm": {
    checklistWidth: 8,
    items: [
      {
        id: "morphBall",
        sprite: "morph",
        name: "Morphing Ball",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Vanilla Morph Ball Item Acquired",
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 1,
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Torizo Defeated",
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Spring Ball Orb Acquired",
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Screw Attack Orb Acquired",
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "barrier",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Kraid Defeated",
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Gravity Suit Orb Acquired",
        segments: [],
        bg: "602880",
        nodeType: "key",
        value: 1,
      },{
        id: "xRayScope",
        sprite: "xray",
        name: "X-Ray Scope",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "X-Ray Scope Orb Acquired",
        segments: [],
        bg: "c8d8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "grappleBeam",
        sprite: "grapple",
        name: "Grappling Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Grappling Beam Orb Acquired",
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        sprite: "charge",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Charge Beam Orb Acquired",
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 1,
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Spazer Orb Acquired",
        segments: [],
        bg: "ffff80",
        nodeType: "key",
        value: 1,
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Ice Beam Orb Acquired",
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 1,
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Wave Beam Orb Acquired",
        segments: [],
        bg: "92278f",
        nodeType: "key",
        value: 1,
      },{
        id: "plasmaBeam",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Plasma Beam Orb Acquired",
        segments: [],
        bg: "00ff08",
        nodeType: "key",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "High Jump Orb Acquired",
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "speedBooster",
        sprite: "speed",
        name: "Speed Booster",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "Speed Booster Orb Acquired",
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Draygon Defeated",
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 1,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        start: 0,
        max: 46,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "smissile",
        name: "Super Missile Tanks",
        start: 0,
        max: 10,
        segments: [],
        bg: "007f0e",
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbombs",
        name: "Power Bomb Tanks",
        start: 0,
        max: 10,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "reserveTank",
        sprite: "reserve",
        name: "Reserve Tanks",
        start: 0,
        max: 4,
        segments: [],
        bg: "7f2800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "boss",
        sprite: "boss",
        name: "Bosses",
        start: 0,
        max: 4,
        segments: [],
        bg: "747474",
        nodeType: "boss",
        value: 0,
      },{
        id: "etedach",
        sprite: "animals",
        name: "Animals Rescued",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "torizo",
        name: "Torizo",
      },{
        id: "spospaw",
        name: "Spore Spawn",
      },{
        id: "kraid",
        name: "Kraid",
      },{
        id: "crocomire",
        name: "Crocomire",
      },{
        id: "phantoon",
        name: "Phantoon",
      },{
        id: "botwoon",
        name: "Botwoon",
      },{
        id: "draygon",
        name: "Draygon",
      },{
        id: "goldtorizo",
        name: "Golden Torizo",
      },{
        id: "ridley",
        name: "Ridley",
      },{
        id: "mbrain",
        name: "Mother Brain",
      }
    ],
    areas: [
      {
        id: "crateria",
        name: "Crateria",
        starting: true,
        color: "2038ec",
      },{
        id: "brinstar",
        name: "Brinstar",
        starting: false,
        color: "2038ec",
      },{
        id: "norfair",
        name: "Norfair",
        starting: false,
        color: "db2b00",
      },{
        id: "shipwreck",
        name: "Wrecked Ship",
        starting: false,
        color: "009700",
      },{
        id: "maridia",
        name: "Maridia",
        starting: false,
        color: "bf00bf",
      },{
        id: "tourian",
        name: "Tourian",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "Save The Animals",
        nodeType: "easter",
      },{
        id: "unused",
        name: "Shine Spark Critter",
        nodeType: "easter",
      },{
        id: "unused",
        name: "Wall Jump Critters",
        nodeType: "easter",
      },{
        id: "powerBomb",
        name: "Glass Tunnel Broken", // Maridia
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Reserve Tank Hint",
        nodeType: "unreq",
      },{
        id: "unused",
        name: "Map: Crateria",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Brinstar",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Norfair",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Maridia",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Wrecked Ship",
        nodeType: "map",
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Energy Recharge",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "S",
        nodeType: "save",
      },
    ],
    map: [
    ],
  },
  "mom": {
    checklistWidth: 8,
    items: [
      {
        id: "morphBall",
        name: "Morph Ball",
        start: 1,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 0,
      },{
        id: "bombA",
        name: "Bombs",
        sprite: "bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 0,
      },{
        id: "missile",
        name: "Missiles",
        sprite: "missile",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        nodeType: "key",
        value: 0,
      },{
        id: "superMissile",
        name: "Super Missiles",
        sprite: "super",
        start: 0,
        max: 1,
        segments: [],
        bg: "007f0e",
        nodeType: "key",
        value: 0,
      },{
        id: "seekerLauncher",
        name: "Seeker Missiles",
        sprite: "unknown",
        start: 0,
        max: 1,
        segments: [],
        bg: "644080",
        nodeType: "key",
        value: 0,
      },{
        id: "barrier",
        name: "Varia Feature",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 0,
      },{
        id: "gravitySuitC",
        name: "Gravity Feature",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        nodeType: "key",
        value: 0,
      },{
        id: "grappleBeam",
        name: "Grapple Beam",
        sprite: "grapple",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 0,
      },{
        id: "diffusionBeam",
        locale: {
          'enUS': {
            id: "diffusionBeamA"
          }
        },
        name: "Diffusion Beam",
        sprite: "unknown",
        start: 0,
        max: 1,
        segments: [],
        bg: "7f2800",
        nodeType: "key",
        value: 0,
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 0,
      },{
        id: "waveBeamC",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "92278f",
        nodeType: "key",
        value: 0,
      },{
        id: "plasmaBeam",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        name: "Plasma Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "00ff08",
        nodeType: "key",
        value: 0,
      },{
        id: "speedBoosterA",
        name: "Speed Booster",
        sprite: "speed",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 0,
      },{
        id: "spaceJump",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 0,
      },{
        id: "screwAttack",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 0,
      },{
        id: "powerBomb",
        name: "Power Bombs",
        sprite: "pbomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 0,
      },{
        id: "energyTank",
        name: "Energy Tanks",
        sprite: "energy",
        start: 0,
        max: 5,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Tanks",
        sprite: "tank",
        start: 0,
        max: 70,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "chargeAccel",
        name: "Accel Charges",
        sprite: "accel",
        start: 0,
        max: 6,
        segments: [],
        bg: "808000",
        nodeType: "expansion",
        value: 1,
      },{
        id: "energyPart",
        name: "Energy Parts",
        sprite: "part",
        start: 0,
        max: 16,
        segments: [],
        bg: "fcc4d8",
        nodeType: "expansion",
        value: 1,
      },{
        id: "eRecoveryTank",
        name: "E-Recovery Tanks",
        sprite: "erec",
        start: 0,
        max: 3,
        segments: [],
        bg: "6f3198",
        nodeType: "expansion",
        value: 1,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "brugmass",
        name: "Brug Mass",
      },{
        id: "funetwins",
        name: "Fune and Nahime",
      },{
        id: "kihive",
        name: "King Ki Hunter",
      },{
        id: "zebesians",
        name: "Cyborg Zebesians",
      },{
        id: "mcridley",
        name: "Mystery Creature",
      },{
        id: "goyagma",
        name: "Goyagma",
      },{
        id: "deleter",
        name: "Ferro Crusher",
      },{
        id: "rhedogiana",
        name: "Rhedogian",
      },{
        id: "vorash",
        name: "Vorash",
      },{
        id: "rhedogianb",
        name: "Rhedogian",
      },{
        id: "rhedogianc",
        name: "Rhedogian",
      },{
        id: "rhedogiand",
        name: "Rhedogian",
      },{
        id: "ridley",
        name: "Ridley",
      },{
        id: "nightmarea",
        name: "Nightmare",
      },{
        id: "nightmareb",
        name: "Nightmare Reprise",
      },{
        id: "qmetroid",
        name: "Queen Metroid",
      },{
        id: "mb",
        name: "MB",
      },{
        id: "gauntlet",
        name: "Final Gauntlet",
      },{
        id: "phantoon",
        name: "Phantoon",
      }
    ],
    areas: [
      {
        id: "maindeck",
        name: "Main Sector",
        starting: true,
        color: "2038ec",
      },{
        id: "biosector",
        name: "Sector 1 - Biosphere",
        starting: false,
        color: "db2b00",
      },{
        id: "cryosector",
        name: "Sector 2 - Cryosphere",
        starting: false,
        color: "009700",
      },{
        id: "pyrosector",
        name: "Sector 3 - Pyrosphere",
        starting: false,
        color: "bf00bf",
      },{
        id: "research",
        name: "Bioweapon Research Center",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "Mission 1", // Main Sector -> Get to System Management Room and turn on Main Sector power
        nodeType: "event",
      },{
        id: "unused",
        name: "System Management", // Main Sector -> Turn on Main Sector power -> Head to Main Elevator and then onwards to Sector 1
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Breeding Room", // Sector 1 -> "A Dark Intelligence"
        nodeType: "event",
      },{
        id: "unused",
        name: "Scrap Block", // Sector 1
        nodeType: "area",
      },{
        id: "unused",
        name: "East Access", // Sector 1, Scrap Block -> Access East Sector 1, pre- Fune & Nahime battle
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Exam Center", // Sector 1
        nodeType: "area",
      },{
        id: "unused",
        name: "Cyborg Zebesian Found", // Sector 1, Exam Center
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Sector 2 Access", // Sector 3 -> post-Goyagma, chasing the MC until the impassable magma room, Adam gives instructions to hold off for now
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Deleter Hint", // Sector 2 -> post-Ferrocrusher
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Glass", // Sector 2 -> post-Ferrocrusher
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Stairs", // Sector 2 -> post-Ferrocrusher
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Desert Access", // Sector 3 -> post-Ferrocrusher, chasing after the MC resumes; leads to Vorash and then loops back towards Ridley
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Meeting Madeline", // BRC -> gain intel on Sector Zero, triggers Rhedogian 4 battle in Sector 1 to get Seeker Missiles
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Gravity Block", // Sector 2
        nodeType: "area",
      },{
        id: "unused",
        name: "Sector Zero", // Sector 2
        nodeType: "area",
      },{
        id: "unused",
        name: "Final Mission", // Sector 2, Sector Zero -> RIP Adam
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Postgame",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Adam's Helmet", // Main Sector, Postgame -> Escape
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Hard Mode",
        nodeType: "unreq",
      },{
        id: "unused",
        name: "N",
        nodeType: "save",
      },
    ],
    map: [
    ],
  },
  "mng": {
    checklistWidth: 6,
    items: [
      {
        id: "barrier",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        nodeType: "key",
        value: 1,
      },{
        id: "phazonSuit",
        sprite: "phazon",
        name: "Phazon Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "282018",
        nodeType: "key",
        value: 1,
      },{
        id: "zeroSuit",
        sprite: "black",
        name: "Zero Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "007098",
        nodeType: "key",
        value: 0,
      },{
        id: "fullPowerSuit",
        sprite: "chozo",
        name: "Black Zero Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "80d0ff",
        nodeType: "key",
        value: 1,
      },{
        id: "zeroSuitA",
        sprite: "suit",
        name: "Equipment recovered",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffb508",
        nodeType: "key",
        value: 0,
      },{
        id: "chargeBeamA",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        sprite: "charge",
        name: "Charge Module",
        start: 0,
        max: 1,
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 1,
      },{
        id: "flameShotA",
        sprite: "fire",
        name: "Fire Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff4a4a",
        nodeType: "key",
        value: 1,
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffff80",
        nodeType: "key",
        value: 1,
      },{
        id: "waveBeamD",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "92278f",
        nodeType: "key",
        value: 1,
      },{
        id: "plasmaBeamE",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "00ff08",
        nodeType: "key",
        value: 1,
      },{
        id: "iceBeamE",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 1,
      },{
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 1,
      },{
        id: "bomb",
        sprite: "bombs",
        name: "Bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Jump Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 1,
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        nodeType: "key",
        value: 1,
      },{
        id: "adapter",
        sprite: "adapter",
        name: "Bomb-Beam Adapter",
        start: 0,
        max: 1,
        segments: [],
        bg: "887878",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "speedBooster",
        sprite: "speed",
        name: "Speed Booster",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "Hi-Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 1,
      },{
        id: "powerGrip",
        sprite: "grip",
        name: "Power Grip",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missiles",
        name: "Missile Tanks",
        start: 0,
        max: 50,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "supers",
        name: "Super Missile Tanks",
        start: 0,
        max: 20,
        segments: [],
        bg: "007f0e",
        nodeType: "expansion",
        value: 1,
      },{
        id: "magneticShieldTank",
        sprite: "shields",
        name: "Magnetic Shield Tanks",
        start: 0,
        max: 15,
        segments: [],
        bg: "007098",
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbombs",
        name: "Power Bomb Tanks",
        start: 0,
        max: 10,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "monsterDna",
        sprite: "monsters",
        name: "Metroids defeated",
        start: 0,
        max: 80,
        segments: [
          {
            id: "monsterDna",
            sprite: "monsters",
            name: "To unlock Trozodia",
            type: "counter",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To unlock Pyrfair",
            type: "counter",
            start: 1,
            max: 5,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To unlock Aqastar",
            type: "counter",
            start: 5,
            max: 10,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To unlock Arcteria",
            type: "counter",
            start: 10,
            max: 20,
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To power up your ship",
            type: "counter",
            start: 20,
            max: 35,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To unlock the Heart of the Galaxy",
            type: "counter",
            start: 35,
            max: 60,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "Genocide",
            type: "counter",
            start: 60,
            max: 80,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "alpha",
        name: "Alpha Metroid",
      },{
        id: "gamma",
        name: "Gamma Metroid",
      },{
        id: "delta",
        name: "Grabber Gamma Metroid",
      },{
        id: "zeta",
        name: "Zeta Metroid",
      },{
        id: "omega",
        name: "Omega Metroid",
      },{
        id: "torizo",
        name: "Torizo",
      },{
        id: "spospaw",
        name: "Spore Spawn",
      },{
        id: "kraid",
        name: "Kraid",
      },{
        id: "diorm",
        name: "Diorm",
      },{
        id: "draygon",
        name: "Draygon",
      },{
        id: "crocomice",
        name: "Crocomice",
      },{
        id: "chozoguard",
        name: "Chozo Guardian",
      },{
        id: "ridley",
        name: "Ridley",
      },{
        id: "phantoon",
        name: "Phantoon",
      },{
        id: "gtorizo",
        name: "Golden Torizo",
      },{
        id: "larval",
        name: "Larval Metroid",
      },{
        id: "mbrain",
        name: "Mother Brain",
      },{
        id: "queen",
        name: "Queen Metroid",
      }
    ],
    areas: [
      {
        id: "srx88",
        name: "SRX88",
        starting: true,
        color: "2038ec",
      },{
        id: "trozodia",
        name: "Trozodia",
        starting: false,
        color: "db2b00",
      },{
        id: "pyrfair",
        name: "Pyrfair",
        starting: false,
        color: "db2b00",
      },{
        id: "aqastar",
        name: "Aqastar",
        starting: false,
        color: "009700",
      },{
        id: "arcteria",
        name: "Arcteria",
        starting: false,
        color: "bf00bf",
      },{
        id: "noctian",
        name: "Noctian",
        starting: false,
        color: "bcbcbc",
      },{
        id: "phazondim",
        name: "Phazon Dimension",
        starting: false,
        color: "bcbcbc",
      },{
        id: "galaxyheart",
        name: "Heart of the Galaxy",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "Phazon Portal",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Return Portal",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Shine Spark Hint", // Pyrfair
        nodeType: "easter",
      },{
        id: "unused",
        name: "Charge Bomb Hint", // Phazon SRX88
        nodeType: "easter",
      },{
        id: "unused",
        name: "Escape Sequence", // Arcterra
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Ship Rescued", // Noctian
        nodeType: "trigger",
      },{
        id: "unused",
        name: "X", // HotG Escape
        nodeType: "goal", // must always be locks, as they are dead ends
      },{
        id: "unused",
        name: "S",
        nodeType: "save",
      },
    ],
    map: [
    ],
  },
  "mttne": {
    checklistWidth: 8,
    items: [
      {
        id: "barrier",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "gravitySuitD",
        sprite: "gravity",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        nodeType: "key",
        value: 1,
      },{
        id: "phazonSuit",
        sprite: "phazon",
        name: "Phazon Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "282018",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 1,
      },{
        id: "bomb",
        sprite: "bombs",
        name: "Bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Jump Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 1,
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        nodeType: "key",
        value: 1,
      },{
        id: "longBeamA",
        locale: {
          'enUS': {
            id: "longBeam"
          }
        },
        sprite: "long",
        name: "Long Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "7f2800",
        nodeType: "key",
        value: 1,
      },{
        id: "chargeBeamA",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        sprite: "charge",
        name: "Charge Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "808000",
        nodeType: "key",
        value: 1,
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffff80",
        nodeType: "key",
        value: 1,
      },{
        id: "flameShotA",
        sprite: "fire",
        name: "Fire Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff4a4a",
        nodeType: "key",
        value: 1,
      },{
        id: "waveBeamD",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "92278f",
        nodeType: "key",
        value: 1,
      },{
        id: "plasmaBeamE",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "00ff08",
        nodeType: "key",
        value: 1,
      },{
        id: "iceBeamE",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "2038ec",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "wallJumpBoots",
        sprite: "wall",
        name: "Wall Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        nodeType: "key",
        value: 1,
      },{
        id: "speedBooster",
        sprite: "speed",
        name: "Speed Booster",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "Hi-Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "powerGrip",
        sprite: "grip",
        name: "Power Grip",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "fullPowerSuit",
        sprite: "chozo",
        name: "Chozo Charm",
        start: 0,
        max: 1,
        segments: [],
        bg: "78a4bc",
        nodeType: "key",
        value: 1,
      },{
        id: "seekerLauncherC",
        sprite: "seeker",
        name: "Seeker Missiles",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        nodeType: "key",
        value: 1,
      },{
        id: "superMissileB",
        sprite: "mega",
        name: "Super Blast",
        start: 0,
        max: 1,
        segments: [],
        bg: "007f0e",
        nodeType: "key",
        value: 1,
      },{
        id: "shieldGenerator",
        sprite: "hyper",
        name: "Hyper Shield",
        start: 0,
        max: 1,
        segments: [],
        bg: "007098",
        nodeType: "key",
        value: 1,
      },{
        id: "adapter",
        sprite: "adapter",
        name: "Bomb-Beam Adapter",
        start: 0,
        max: 1,
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missiles",
        name: "Missile Tanks",
        start: 0,
        max: 50,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "supers",
        name: "Super Missile Tanks",
        start: 0,
        max: 20,
        segments: [],
        bg: "007f0e",
        nodeType: "expansion",
        value: 1,
      },{
        id: "magneticShieldTank",
        sprite: "shields",
        name: "Magnetic Shield Tanks",
        start: 0,
        max: 15,
        segments: [],
        bg: "007098",
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbombs",
        name: "Power Bomb Tanks",
        start: 0,
        max: 15,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "aquadiaKey",
        sprite: "key",
        name: "Keys",
        start: 0,
        max: 11,
        segments: [],
        bg: "ffffff",
        nodeType: "expansion",
        value: 1,
      },{
        id: "steelarisGear",
        sprite: "gear",
        name: "Gears",
        start: 0,
        max: 5,
        segments: [],
        bg: "ffffff",
        nodeType: "expansion",
        value: 1,
      },{
        id: "monsterDna",
        sprite: "monsters",
        name: "X-Metroids defeated",
        start: 0,
        max: 25,
        segments: [
          {
            id: "monsterDna",
            sprite: "monsters",
            name: "First batch",
            type: "counter",
            start: 0,
            max: 10,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "Second batch",
            type: "counter",
            start: 10,
            max: 15,
            bg: "ffffff",
            nodeType: "goal",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "Final batch",
            type: "counter",
            start: 15,
            max: 25,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
    ],
    areas: [
    ],
    extras: [ // bg: "ffffff", TODO
      {
        id: "unused",
        name: "S",
        nodeType: "save",
      },
    ],
    map: [
    ],
  },
  "mf": {
    checklistWidth: 7,
    items: [
      /*{ // in case of progressive Missiles
        id: "missile",
        name: "",
        start: 0,
        max: 4,
        segments: [*/
          {
            id: "missileA",
            name: "Missiles",
            start: 0,
            max: 1,
            sprite: "missileData",
            over: "F_Data",
            overText: "Operations Deck - Data Room",
            bg: "d82800",
            nodeType: "key",
            value: 0,
          },{
            id: "missile",
            name: "Super Missiles",
            start: 0,
            max: 1,
            sprite: "superMissile",
            over: "F_Data",
            overText: "Sector 3 PYR - Data Room",
            bg: "007f0e",
            nodeType: "key",
            value: 0,
          },{
            id: "iceMissile",
            name: "Ice Missiles",
            start: 0,
            max: 1,
            sprite: "iceMissile",
            over: "F_Data",
            overText: "Sector 5 ARC - Data Room",
            bg: "2038ec",
            nodeType: "key",
            value: 0,
          },{
            id: "superMissile",
            name: "Diffusion Effect",
            start: 0,
            max: 1,
            sprite: "diffusion",
            over: "F_Data",
            overText: "Sector 4 AQA - Data Room",
            bg: "7f2800",
            nodeType: "key",
            value: 0,
          },/*
        ],
        value: 0,
      },*/{
        id: "morphBall",
        name: "Morph Ball",
        start: 0,
        max: 1,
        sprite: "morph",
        over: "F_Boss",
        overText: "Arachnus Defeated",
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 0,
      },{
        id: "bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        sprite: "bombData",
        over: "F_Data",
        overText: "Sector 2 TRO - Data Room",
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 0,
      },{
        id: "powerBomb",
        name: "Power Bombs",
        start: 0,
        max: 1,
        sprite: "pbombData",
        over: "F_Data",
        overText: "Sector 5 ARC - Data Room",
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 0,
      },/*{ // in case of progressive beams
        id: "powerBeam",
        name: "", // "Power Beam",
        start: 0,
        max: 5,
        sprite: "powerBeam",
        segments: [*/
          {
            id: "chargeBeamC",
            locale: {
              'enUS': {
                id: "chargeBeamE"
              }
            },
            name: "Charge Beam",
            start: 0,
            max: 1,
            sprite: "chargeBeam",
            over: "F_Boss",
            overText: "Elephant Bird Defeated",
            bg: "808000",
            nodeType: "key",
            value: 0,
          },{
            id: "wideBeamB",
            locale: {
              'enUS': {
                id: "wideBeamA"
              }
            },
            name: "Wide Beam",
            start: 0,
            max: 1,
            sprite: "wideBeam",
            over: "F_Boss",
            overText: "Wide Laser Core-X Defeated",
            bg: "ffff80",
            nodeType: "key",
            value: 0,
          },{
            id: "plasmaBeamA",
            locale: {
              'enUS': {
                id: "plasmaBeamD"
              }
            },
            name: "Plasma Beam",
            start: 0,
            max: 1,
            sprite: "plasmaBeam",
            over: "F_Boss",
            overText: "Nettori Defeated",
            bg: "00ff08",
            nodeType: "key",
            value: 0,
          },{
            id: "waveBeamB",
            locale: {
              'enUS': {
                id: "waveBeam"
              }
            },
            name: "Wave Beam",
            start: 0,
            max: 1,
            sprite: "waveBeam",
            over: "F_Boss",
            overText: "SR-BOX 2 Defeated",
            bg: "92278f",
            nodeType: "key",
            value: 0,
          },{
            id: "iceBeamC",
            locale: {
              'enUS': {
                id: "iceBeamD"
              }
            },
            name: "Ice Beam",
            start: 0,
            max: 1,
            sprite: "iceBeam",
            bg: "2038ec",
            nodeType: "key",
            value: 0,
          },/*
        ],
        bg: "ffb508",
        nodeType: "key",
        value: 0,
      },*/{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "highJump",
        name: "Hi-Jump and Jumpball",
        start: 0,
        max: 1,
        sprite: "high",
        over: "F_Boss",
        overText: "Zazabi Defeated",
        segments: [],
        bg: "c0a8d8",
        nodeType: "key",
        value: 0,
      },{
        id: "speedBooster",
        name: "Speed Booster",
        start: 0,
        max: 1,
        sprite: "speed",
        over: "F_Boss",
        overText: "Serris Defeated",
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 0,
      },{
        id: "spaceJump",
        name: "Space Jump",
        start: 0,
        max: 1,
        sprite: "space",
        over: "F_Boss",
        overText: "Yakuza Defeated",
        segments: [],
        bg: "00a0e0",
        nodeType: "key",
        value: 0,
      },{
        id: "screwAttack",
        name: "Screw Attack",
        start: 0,
        max: 1,
        sprite: "screw",
        over: "F_Boss",
        overText: "Neo-Ridley-X Defeated",
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 0,
      },/*{ // in case of progressive suits
        id: "fusionSuit",
        name: "Fusion Suit",
        start: 0,
        max: 2,
        sprite: "fusion",
        segments: [*/
          {
            id: "barrierC",
            name: "Varia Suit",
            start: 0,
            max: 1,
            sprite: "barrier",
            over: "F_Boss",
            overText: "Barrier Core-X Defeated",
            bg: "c8f048",
            nodeType: "key",
            value: 0,
          },{
            id: "gravitySuit",
            name: "Gravity Suit",
            start: 0,
            max: 1,
            sprite: "gravity",
            over: "F_Boss",
            overText: "Nightmare Defeated",
            bg: "602880",
            nodeType: "key",
            value: 0,
          },{
            id: "fullPowerSuit",
            name: "Final Suit",
            start: 0,
            max: 1,
            sprite: "final",
            bg: "ff7e00",
            nodeType: "key",
            value: 0,
            displayIfScramble: true,
          },/*
        ],
        value: 0,
      },*/{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        start: 0,
        max: 20,
        segments: [],
        bg: "78a4bc",
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        start: 0,
        max: 48,
        segments: [],
        bg: "d82800",
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbomb",
        name: "Power Bomb Tanks",
        start: 0,
        max: 32,
        segments: [],
        bg: "98b830",
        nodeType: "expansion",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },/* {
        id: "pumpControlUnit",
        name: "Sector 4 - Water level lowered.",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },{
        id: "mainBoiler",
        name: "Sector 3 - Cooling unit operational.",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },{
        id: "etedach",
        sprite: "animals",
        name: "Main Deck - Lock disengaged. Gate opening.",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      },{
        id: "reactorCore",
        name: "Main Deck - Auxiliary power engaged.",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 0,
      }, *//* {
        id: "mainDeck",
        name: "Main Deck",
        segments: [
          {
            id: "mainDeck",
            name: "Sector Clear",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
      },{
        id: "sector1SRX",
        name: "Sector 1 SRX",
        segments: [
          {
            id: "sector1SRX",
            name: "Sector Clear",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
      },{
        id: "sector2TRO",
        name: "Sector 2 TRO",
        segments: [
          {
            id: "sector2TRO",
            name: "Sector Clear",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
      },{
        id: "sector3PYR",
        name: "Sector 3 PYR",
        segments: [
          {
            id: "sector3PYR",
            name: "Sector Clear",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
      },{
        id: "sector4AQA",
        name: "Sector 4 AQA",
        segments: [
          {
            id: "sector4AQA",
            name: "Sector Clear",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
      },{
        id: "sector5ARC",
        name: "Sector 5 ARC",
        segments: [
          {
            id: "sector5ARC",
            name: "Sector Clear",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
      },{
        id: "sector6NOC",
        name: "Sector 6 NOC",
        segments: [
          {
            id: "sector6NOC",
            name: "Sector Clear",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "goal",
          },
        ],
        bg: "ffffff",
        nodeType: "goal",
      }, */{
        id: "securityL0",
        sprite: "securityL0",
        name: "Security Level 0",
        start: 0,
        max: 1,
        segments: [],
        bg: "c8d8d8",
        nodeType: "key",
        value: 0,
      },{
        id: "securityL1",
        sprite: "securityL1",
        name: "Security Level 1",
        start: 0,
        max: 1,
        segments: [],
        bg: "28d8f8",
        nodeType: "key",
        value: 0,
      },{
        id: "securityL2",
        sprite: "securityL2",
        name: "Security Level 2",
        start: 0,
        max: 1,
        segments: [],
        bg: "90f890",
        nodeType: "key",
        value: 0,
      },{
        id: "securityL3",
        sprite: "securityL3",
        name: "Security Level 3",
        start: 0,
        max: 1,
        segments: [],
        bg: "f8f838",
        nodeType: "key",
        value: 0,
      },{
        id: "securityL4",
        sprite: "securityL4",
        name: "Security Level 4",
        start: 0,
        max: 1,
        segments: [],
        bg: "f82828",
        nodeType: "key",
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "arachnus",
        name: "Arachnus",
      },{
        id: "elephantbird",
        name: "Core-X",
      },{
        id: "zazabi",
        name: "Zazabi",
      },{
        id: "serris",
        name: "Serris",
      },{
        id: "srboxa",
        name: "Security Robot B.O.X.",
      },{
        id: "variacorex",
        name: "Mega Core-X",
      },{
        id: "boilersci",
        name: "Core-X",
      },{
        id: "nightmare",
        name: "Nightmare",
      },{
        id: "yakuza",
        name: "Yakuza",
      },{
        id: "nettori",
        name: "Nettori",
      },{
        id: "srboxb",
        name: "Security Robot B.O.X.",
      },{
        id: "ridley",
        name: "Ridley-X",
      },{
        id: "saxfinal",
        name: "SA-X",
      },{
        id: "omega",
        name: "Omega Metroid",
      }
    ],
    areas: [
      {
        id: "maindeck",
        name: "Main Deck",
        starting: true,
        color: "2038ec",
      },{
        id: "srx",
        name: "Sector 1 - SRX",
        starting: false,
        color: "db2b00",
      },{
        id: "tro",
        name: "Sector 2 - TRO",
        starting: false,
        color: "db2b00",
      },{
        id: "pyr",
        name: "Sector 3 - PYR",
        starting: false,
        color: "db2b00",
      },{
        id: "aqa",
        name: "Sector 4 - AQA",
        starting: false,
        color: "009700",
      },{
        id: "arc",
        name: "Sector 5 - ARC",
        starting: false,
        color: "bf00bf",
      },{
        id: "noc",
        name: "Sector 6 - NOC",
        starting: false,
        color: "bcbcbc",
      },{
        id: "reslab",
        name: "Restricted Lab",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "First Mission", // Main Deck, Docking Bays -> Quarantine Bay
        nodeType: "event",
      },{
        id: "unused",
        name: "Quarantine Bay", // Main Deck, Quarantine Bay
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission in Sector 1", // Sector 1 SRX -> Clear all 5 atmospheric stabilizers
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission to Sector 2", // Sector 1 SRX mission 1 complete -> Sector 2 TRO visit 1
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission in Sector 2", // Sector 2 TRO -> open L.1 doors, get Bomb Data
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission to Sector 4", // Sector 2 TRO mission 1 complete -> Sector 4 AQA visit 1
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission in Sector 4", // Sector 4 AQA -> defeat Serris
        nodeType: "event",
      },{
        id: "unused",
        name: "Water Pump Control", // Sector 4 AQA
        message: "Water level lowered.",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "First Mission to Sector 3", // Sector 4 AQA mission 1 complete -> Sector 3 PYR visit 1
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission in Sector 3", // Sector 3 PYR -> open L.2 doors, get Super Missile Data
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission to Sector 6", // Sector 3 PYR mission 1 complete -> Sector 6 NOC visit 1
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission in Sector 6", // Sector 6 NOC mission 1 -> get Varia Suit Data, avoid the Icy X
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission to Sector 5", // Sector 6 NOC mission 1 complete -> Sector 5 ARC visit 1
        nodeType: "event",
      },{
        id: "unused",
        name: "First Mission in Sector 5", // Sector 5 ARC mission 1 -> open L.3 doors, get Ice Missile Data
        nodeType: "event",
      },{
        id: "unused",
        name: "Emergency in Sector 3", // Sector 5 ARC mission 1 complete -> RUSH TO SECTOR 3 PYR
        nodeType: "event",
      },{
        id: "unused",
        name: "Boiler Room", // Sector 3 PYR depths, ends emergency sequence
        message: "Cooling unit operational.",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Main Elevator Power Restored", // Sector 3 PYR depths complete
        nodeType: "trigger",
      },{
        id: "unused",
        name: "To the Habitation Deck", // Sector 3 PYR depths complete -> Main Deck, Habitation Deck
        nodeType: "event",
      },{
        id: "etedach",
        name: "Habitation Deck Shutters", // Main Deck, Habitation Deck ||||| SAVE THE ANIMALS!
        sprite: "animals",
        message: "Lock disengaged. Gate opening.",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Return to Sector 5", // Main Deck, Habitation Deck -> Sector 5 ARC visit 2
        nodeType: "event",
      },{
        id: "unused",
        name: "Power Bomb Retrieval", // Sector 5 ARC mission 2 -> get Power Bomb Data
        nodeType: "event",
      },{
        id: "unused",
        name: "Nettori Power Down", // Sector 5 ARC mission 2 complete -> AI CO calls you back to the ship
        nodeType: "event",
      },{
        id: "unused",
        name: "Reactor Core Access", // Main Deck, Docking Bays -> Reactor Core, awakens Ki Hunters everywhere
        nodeType: "event",
      },{
        id: "unused",
        name: "Auxiliary Power Station", // Main Deck, Reactor Core -> Restores partial power
        message: "Auxiliary power engaged.",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "To Sector 5 Nightmare", // Sector 2 TRO depths complete -> Sector 5 ARC visit 3
        nodeType: "event",
      },{
        id: "unused",
        name: "Nightmare Hunting", // Sector 5 ARC mission 3 -> find and destroy the Nightmare, water from Sector 4 AQA has spilled into this sector
        nodeType: "event",
      },{
        id: "unused",
        name: "To Sector 6 SR-BOX", // Sector 4 AQA depths complete -> Sector 6 NOC visit 2
        nodeType: "event",
      },{
        id: "unused",
        name: "Track the SR-BOX", // Sector 6 NOC mission 2 -> find the Security Robot, escape before the SA-X finds you
        nodeType: "event",
      },{
        id: "unused",
        name: "Metroid Habitat", // Restricted Lab
        nodeType: "event",
      },{
        id: "unused",
        name: "Through Sector 1 Depths", // Restricted Lab -> Sector 1 SRX depths
        nodeType: "event",
      },{
        id: "unused",
        name: "Final Mission", // Sector 1 SRX depths complete -> back to a Navigation Room -> Final Mission Resolve and cleanup rounds
        nodeType: "event",
      },{
        id: "unused",
        name: "Beaten the Game Once", // some shutters are locked on a first-time game during Final Mission, until the game has Cleared status
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Operations Room", // Main Deck, Operations Deck -> triggers Escape Sequence
        nodeType: "trigger",
      },{
        id: "unused",
        name: "S",
        nodeType: "save",
      },{
        id: "unused",
        name: "R",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "N",
        nodeType: "event",
      },
    ],
    map: [
    ],
  },
  "md": {
    checklistWidth: 6,
    items: [
      {
        id: "powerBeam",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "wideBeam",
            locale: {
              'enUS': {
                id: "wideBeamA"
              }
            },
            name: "Wide Beam",
            start: 0,
            max: 1,
            bg: "ffff80",
            nodeType: "key",
            value: 1,
          },{
            id: "plasmaBeamA",
            locale: {
              'enUS': {
                id: "plasmaBeamD"
              }
            },
            name: "Plasma Beam",
            start: 0,
            max: 1,
            bg: "00ff08",
            nodeType: "key",
            value: 1,
          },{
            id: "waveBeamE",
            locale: {
              'enUS': {
                id: "waveBeam"
              }
            },
            name: "Wave Beam",
            over: "Z_Orb",
            overText: "E.M.M.I.-06WB Defeated",
            start: 0,
            max: 1,
            bg: "92278f",
            nodeType: "key",
            value: 1,
          },
        ],
        value: 1,
      },{
        id: "chargeBeam",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "chargeBeam",
            locale: {
              'enUS': {
                id: "chargeBeamE"
              }
            },
            name: "Charge Beam",
            start: 0,
            max: 1,
            bg: "808000",
            nodeType: "key",
            value: 1,
          },{
            id: "diffusionBeamB",
            locale: {
              'enUS': {
                id: "diffusionBeamA"
              }
            },
            name: "Diffusion Beam",
            start: 0,
            max: 1,
            over: "F_Boss_Ex",
            overText: "Kraid Defeated",
            bg: "9b9b9b",
            nodeType: "key",
            value: 1,
          },
        ],
        value: 1,
      },{
        id: "grappleBeam",
        name: "Grapple Beam",
        //sprite: "grapple",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        nodeType: "key",
        value: 1,
      },{
        id: "missile",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "superMissile",
            name: "Super Missiles",
            start: 0,
            max: 1,
            bg: "007f0e",
            nodeType: "key",
            value: 1,
          },{
            id: "iceMissileB",
            name: "Ice Missiles",
            over: "Z_Orb",
            overText: "E.M.M.I.-05IM Defeated",
            start: 0,
            max: 1,
            bg: "2038ec",
            nodeType: "key",
            value: 1,
          },
        ],
        value: 1,
      },{
        id: "seekerLauncherB", // "combatVisor",
        name: "Storm Missile",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Escue Defeated",
        segments: [],
        bg: "644080",
        nodeType: "key",
        value: 1,
      },{
        id: "powerSuit",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "barrier",
            name: "Varia Suit",
            start: 0,
            max: 1,
            bg: "ff7e00",
            nodeType: "key",
            value: 1,
          },{
            id: "gravitySuitA",
            name: "Gravity Suit",
            start: 0,
            max: 1,
            bg: "602880",
            nodeType: "key",
            value: 1,
          },
        ],
        value: 1,
      },{
        id: "invisibility",
        locale: {
          'enUS': {
            id: "phantomCloak"
          }
        },
        name: "Phantom Cloak",
        sprite: "phantom",
        start: 0,
        max: 1,
        over: "F_Boss_Ex",
        overText: "Corpius Defeated",
        segments: [],
        bg: "00ff08",
        nodeType: "key",
        value: 1,
      },{
        id: "flashShift", // TODO: find language-agnostic icon
        locale: {
          'enUS': {
            id: "flashShift"
          }
        },
        name: "Flash Shift",
        sprite: "flash",
        start: 0,
        max: 1,
        segments: [],
        bg: "e900ff",
        nodeType: "key",
        value: 1,
      },{
        id: "scanPulse",
        locale: {
          'enUS': {
            id: "pulseRadar"
          }
        },
        name: "Pulse Radar",
        sprite: "radar",
        start: 0,
        max: 1,
        segments: [],
        bg: "00c7ff",
        nodeType: "key",
        value: 1,
      },{
        id: "morphBall",
        name: "Morph Ball",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "E.M.M.I.-03MB Defeated",
        segments: [],
        bg: "d8a480",
        nodeType: "key",
        value: 1,
      },{
        id: "bombD",
        name: "Bombs",
        //sprite: "bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        nodeType: "key",
        value: 1,
      },{
        id: "crossBombs",
        name: "Cross Bomb",
        start: 0,
        max: 1,
        over: "F_Boss",
        overText: "Golzuna Defeated",
        segments: [],
        bg: "886848",
        nodeType: "key",
        value: 1,
      },{
        id: "powerBomb",
        name: "Power Bombs",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "E.M.M.I.-07PB Defeated",
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 1,
      },{
        id: "spiderMagnet",
        name: "Spider Magnet",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "E.M.M.I.-02SM Defeated",
        segments: [],
        bg: "ff7b7b",
        nodeType: "key",
        value: 1,
      },{
        id: "speedBooster",
        name: "Speed Booster",
        start: 0,
        max: 1,
        over: "Z_Orb",
        overText: "E.M.M.I.-04SB Defeated",
        segments: [],
        bg: "ff0094",
        nodeType: "key",
        value: 1,
      },{
        id: "jumpBoots",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "spinBoostA",
            name: "Spin Boost",
            start: 0,
            max: 1,
            bg: "c0a8d8",
            nodeType: "key",
            value: 1,
          },{
            id: "spaceJump",
            name: "Space Jump",
            start: 0,
            max: 1,
            bg: "00a0e0",
            nodeType: "key",
            value: 1,
          },
        ],
        value: 1,
      },{
        id: "screwAttack",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "dreadEnergy",
        locale: {
          'enUS': {
            id: "energyTank"
          }
        },
        name: "Energy Tanks",
        sprite: "energy",
        start: 0,
        max: 8,
        segments: [],
        bg: "78a4bc",
        nodeType: "key",
        value: 1,
      },{
        id: "dreadPart",
        locale: {
          'enUS': {
            id: "energyPart"
          }
        },
        name: "Energy Parts",
        sprite: "part",
        start: 0,
        max: 16,
        segments: [],
        bg: "fcc4d8",
        nodeType: "key",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Tanks",
        sprite: "missile",
        start: 0,
        max: 75,
        segments: [],
        bg: "d82800",
        nodeType: "key",
        value: 1,
      },{
        id: "doubleMissileTank",
        name: "Missile+ Tanks",
        sprite: "missilePlus",
        start: 0,
        max: 11,
        segments: [],
        bg: "007098",
        nodeType: "key",
        value: 1,
      },{
        id: "powerBombTank",
        name: "Power Bomb Tanks",
        sprite: "pbombs",
        start: 0,
        max: 13,
        segments: [],
        bg: "98b830",
        nodeType: "key",
        value: 1,
      },{
        id: "monsterDna",
        name: "Metroid DNA",
        start: 9,
        max: 12,
        segments: [],
        bg: "ffffff",
        nodeType: "goal",
        value: 1,
        displayIfScramble: true,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
      {
        id: "emmi01p",
        name: "E.M.M.I.-01P", // proto-emmi, Artaria
      },{
        id: "emmi01p",
        name: "E.M.M.I.-02SM", // white emmi, Artaria, Spider Magnet
      },{
        id: "emmi01p",
        name: "E.M.M.I.-03MB", // green emmi, Cataris, Morph Ball
      },{
        id: "emmi01p",
        name: "E.M.M.I.-04SB", // yellow emmi, Dairon, Speed Booster
      },{
        id: "emmi01p",
        name: "E.M.M.I.-05IM", // blue emmi, Ghavoran, Ice Missile
      },{
        id: "emmi01p",
        name: "E.M.M.I.-06WB", // purple emmi, Ferenia, Wave Beam
      },{
        id: "emmi01p",
        name: "E.M.M.I.-07PB", // red emmi, Hanubia, Power Bombs
      },{
        id: "cualta",
        name: "Central Unit 01", // proto-emmi, Artaria, non-combat
      },{
        id: "cualtb",
        name: "Central Unit 02", // white emmi, Artaria
      },{
        id: "cucat",
        name: "Central Unit 03", // green emmi, Cataris
      },{
        id: "cudai",
        name: "Central Unit 04", // yellow emmi, Dairon
      },{
        id: "cugha",
        name: "Central Unit 05", // blue emmi, Ghavoran
      },{
        id: "cufer",
        name: "Central Unit 06", // purple emmi, Ferenia
      },{
        id: "cuhan",
        name: "Central Unit 07", // red emmi, Hanubia, non-combat
      },{
        id: "chozosoldiera",
        name: "Chozo Soldier", // silver, Elun
      },{
        id: "chozosoldierb",
        name: "Chozo Soldier", // silver, Ghavoran
      },{
        id: "redchozoa",
        name: "Chozo Soldier", // red (with shield), Artaria, during frozen sequence
      },{
        id: "redchozob",
        name: "Chozo Soldier", // red (with shield), Hanubia, right upon defeating E.M.M.I.-07PB
      },{
        id: "elitechozo",
        name: "Elite Chozo Soldier", // golden (with Grapple Shield), Hanubia
      },{
        id: "robotchozoa",
        name: "Robot Chozo Soldier", // silver, Ferenia, the one who killed Quiet Robe
      },{
        id: "robotchozob",
        name: "Robot Chozo Soldier", // gold, Ghavoran
      },{
        id: "twinrobotsa",
        name: "Twin Robot Chozo Soldiers", // silver and gold, Ferenia
      },{
        id: "twinrobotsb",
        name: "Twin Robot Chozo Soldiers", // gold and gold, Burenia
      },{
        id: "corpius",
        name: "Corpius", // Phantom Cloak
      },{
        id: "kraid",
        name: "Kraid", // no item, but leads to Diffusion Beam nearby, slotted for Metroid DNA in Dread Rando
      },{
        id: "drogyga",
        name: "Drogyga", // no item, slotted for Metroid DNA in Dread Rando
      },{
        id: "escue",
        name: "Escue-X", // Core-X, Storm Missile
      },{
        id: "z57",
        name: "Experiment No. Z-57", // no item, slotted for Metroid DNA in Dread Rando
      },{
        id: "golzuna",
        name: "Golzuna-X", // Core-X, Cross Bombs
      },{
        id: "ravenbeak",
        name: "Raven Beak", // final boss
      },{
        id: "ravenbeakx",
        name: "Raven Beak-X", // final boss part 2
      },
    ],
    areas: [
      {
        id: "artaria",
        name: "Artaria",
        starting: true,
        color: "2038ec",
      },{
        id: "cataris",
        name: "Cataris",
        starting: false,
        color: "db2b00",
      },{
        id: "dairon",
        name: "Dairon",
        starting: false,
        color: "db2b00",
      },{
        id: "burenia",
        name: "Burenia",
        starting: false,
        color: "db2b00",
      },{
        id: "ferenia",
        name: "Ferenia",
        starting: false,
        color: "009700",
      },{
        id: "ghavoran",
        name: "Ghavoran",
        starting: false,
        color: "bf00bf",
      },{
        id: "elun",
        name: "Elun",
        starting: false,
        color: "bf00bf",
      },{
        id: "hanubia",
        name: "Hanubia",
        starting: false,
        color: "bcbcbc",
      },{
        id: "itorash",
        name: "Itorash",
        starting: false,
        color: "bcbcbc",
      }
    ],
    extras: [ // bg: "ffffff",
      {
        id: "unused",
        name: "Red Teleportal",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Orange Teleportal",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Yellow Teleportal",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Green Teleportal",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Cyan Teleportal",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Blue Teleportal",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Purple Teleportal",
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Thermal Channel", // Artaria 1
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Pressure Plate", // Artaria EMMI Zone (02SM)
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Thermal Channel", // Artaria 2 - triggers hot zone emergency leading to Varia Suit
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Debris", // Artaria post-Varia hot zone blockages
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Thermal Channel", // Cataris 1, might need to be retoggled?
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Thermal Channel", // Cataris 2, might need to be retoggled?
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Thermal Channel", // Cataris 3, might need to be retoggled?
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Thermal Channel", // Cataris 4, might need to be retoggled?
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Charge Beam Generator", // Cataris 1
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Charge Beam Generator", // Cataris 2
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Charge Beam Generator", // Cataris 3
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Generator", // Dairon 1
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Generator", // Dairon 2
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Burenia Hatch", // Burenia, opened by Quiet Robe just before his assassination
        nodeType: "trigger",
      },{
        id: "powerBomb",
        name: "Broken Glass Tube", // Hanubia
        nodeType: "trigger",
      },{
        id: "powerBomb",
        name: "Broken EMMI Zone", // Hanubia
        nodeType: "trigger",
      },{
        id: "powerBomb",
        name: "Broken Generator", // Itorash
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Environmental damage", // how many of these do we need..? probably a lot...
        // 14 in Artaria
        // 23 in Cataris
        // 7 in Dairon
        // 13 in Burenia
        // 0 in Ghavoran
        // 0 in Elun
        // 5 in Ferenia
        // 0 in Hanubia
        // 0 in Itorash
        nodeType: "trigger", // access?
      },{
        id: "grappleBeam",
        name: "Grapple Blocks broken", // how many of these do we need..? probably a lot...
        // 2 in Artaria
        // 3 in Cataris
        // 8 in Dairon
        // 6 in Burenia
        // 2 in Ghavoran
        // 1 in Elun
        // 3 in Ferenia
        // 2+1 in Hanubia
        // 0 in Itorash
        nodeType: "access",
      },{
        id: "unused",
        name: "Magnet Door Lowered", // Artaria, in EMMI Zone, near Missile Tank, allows passage onwards to Corpius
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Magnet Platform Lowered", // Artaria, in EMMI Zone, allows escape from CU and EMMI Battle area
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Spinner Rotated", // Artaria, in EMMI Zone
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Artaria, in EMMI Zone, only for convenient shortcut?
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Slide Escape", // Artaria, in EMMI Zone, one-time use only?
        nodeType: "trigger", // one-way toll?
      },{
        id: "unused",
        name: "Bridge Rotated", // Artaria, by waterfall room (frozen solid when planet is freezing, leading to Red Chozo-X fight)
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Bridge Rotated", // Artaria, in EMMI Zone somewhere
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Bridge Rotated", // Artaria, near Screw Attack area
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Magnet Wall Lowered", // Cataris
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Lowered Lava", // Cataris, might be Charge Beam Generator 1?
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Magnet Walls Pump", // Cataris, might be Charge Beam Generator 2?
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Cataris, on path leading towards Dairon tram
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Cataris, in hot zone
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Magnet Platform Lowered", // Cataris, for Power Bomb Tank
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ferenia, first one escaping Escue arena
        nodeType: "access",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ferenia, leading to Twin Robot arena
        nodeType: "access",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ferenia, leading to Space Jump
        nodeType: "access",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ferenia, in cold zone, on the way to EMMI-06WB and CU showdown
        nodeType: "access",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ghavoran, blocking Green teleportal
        nodeType: "access",
      },{
        id: "unused",
        name: "Bridge Rotated", // Ghavoran, allowing access to Super Missiles
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Magnet Platform Lowered", // Ghavoran, allowing access to Super Missiles
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Big Grapple Box Pulled and in Place", // Ghavoran, near elevator to Burenia
        nodeType: "access",
      },{
        id: "unused",
        name: "Big Grapple Box Pulled and in Place", // Ghavoran, near tram to Ferenia
        nodeType: "access",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Burenia, near cyan Teleportal
        nodeType: "access",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Burenia, near Energy Tank, in underwater sector
        nodeType: "access",
      },{
        id: "unused",
        name: "Magnet Wall Lowered", // Burenia
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Dairon, near THAT ONE SHINESPARKY Missile+ Tank
        nodeType: "access",
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Dairon, near western elevator to Ferenia
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Dairon, near tram to Cataris (first big room)
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Dairon, near first Save Room
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Dairon, near early LARGE room
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Big Grapple Box Pulled and in Place", // Dairon, near eastern elevator to Ferenia
        nodeType: "access",
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Dairon, near yellow teleportal
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Dairon, near storm gate
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Dairon, in cold zone (early Super Missiles route)
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Burenia, in first vanilla big room, over fan with Energy Part
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Burenia, near green teleportal, near Energy Part, required for getting a Missile+ Tank
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Burenia, trick for Gravity Suit without environmental destruction
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Cataris, for hotzone Energy Part, the one behind the Wave Beam Door
        nodeType: "trigger", // access?
      },{
        id: "unused",
        name: "Quiet Robe",
        nodeType: "event",
      },{
        id: "unused",
        name: "Broken Quarantine",
        nodeType: "event",
      },{
        id: "unused",
        name: "Frozen Planet",
        nodeType: "event",
      },{
        id: "unused",
        name: "Gravity Chamber Destruction", // Burenia
        nodeType: "event",
      },{
        id: "unused",
        name: "Escape Sequence",
        nodeType: "event",
      },{
        id: "unused",
        name: "Omega Cannon", // Artaria 01P
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "unused",
        name: "Omega Cannon", // Artaria 02SM
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "unused",
        name: "Omega Cannon", // Cataris 03MB
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "unused",
        name: "Omega Cannon", // Dairon 04SB
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "unused",
        name: "Omega Cannon", // Ghavoran 05IM
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "unused",
        name: "Omega Cannon", // Ferenia 06WB
        nodeType: "trigger", // special type for Omega Cannon?
      },/*{ // is never collected
        id: "unused",
        name: "Omega Cannon", // Hanubia 07PB
        nodeType: "trigger", // special type for Omega Cannon?
      },*/{
        id: "unused",
        name: "EMMI Zone",
        nodeType: "event",
      },{
        id: "unused",
        name: "Map: Artaria",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Burenia",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Cataris",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Dairon",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Ferenia",
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Ghavoran",
        nodeType: "map",
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Energy Recharge",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Full Restore",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Navigation Room",
        nodeType: "event",
      },{
        id: "unused",
        name: "S",
        nodeType: "save",
      },
    ],
    map: [
    ],
  },
  "thf": {
    checklistWidth: 7,
    items: [
      {
        id: "raft",
        name: "Raft",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "book",
        name: "Magic Book",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "green",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "blueRing",
            name: "Blue Ring",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },{
            id: "redRing",
            name: "Red Ring",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },
        ],
        value: 1,
      },{
        id: "ladder",
        name: "Ladder",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "magicKey",
        name: "Magic Key",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "bracelets",
        name: "Power Bracelet",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "boomerang",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "boomerang",
            name: "Boomerang",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },{
            id: "magicRang",
            name: "Magical Boomerang",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },
        ],
        value: 1,
      },{
        id: "bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "arrow",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "arrow",
            name: "Arrow",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },{
            id: "silverArrows",
            name: "Silver Arrow",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },
        ],
        value: 1,
      },{
        id: "heroBow",
        name: "Bow",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "candle",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "candle",
            name: "Blue Candle",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },{
            id: "redCandle",
            name: "Red Candle",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },
        ],
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "recorder",
        name: "Whistle",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "bait",
        name: "Bait",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "note",
        name: "Note",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "magicRod",
        name: "Magic Rod",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "sword",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "woodenSword",
            name: "Wooden Sword",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },{
            id: "whiteSword",
            name: "White Sword",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },{
            id: "magicalSword",
            name: "Magical Sword",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "key",
          },
        ],
        value: 1,
      },{
        id: "magicalShield",
        name: "Magical Shield",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "heartContainer",
        name: "Heart Containers",
        start: 3,
        max: 16,
        segments: [],
        value: 1,
        nodeType: "expansion",
      },{
        id: "bombsExp",
        name: "I bet you'd like to carry more Bombs",
        start: 0,
        max: 2,
        segments: [],
        value: 0,
        nodeType: "expansion",
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "triforce",
        name: "Triforce Pieces",
        start: 0,
        max: 8,
        segments: [],
        value: 1,
        nodeType: "artifact",
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
    ],
    areas: [
    ],
    extras: [ // nodeType: "goal", bg: "ffffff",
    ],
    map: [
    ],
  },
  "aol": {
    checklistWidth: 8,
    items: [
      {
        id: "shieldSpell",
        name: "Shield Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "jumpSpell",
        name: "Jump Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "lifeSpell",
        name: "Life Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "fairySpell",
        name: "Fairy Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "fireSpell",
        name: "Fire Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "reflectSpell",
        name: "Reflect Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "spellSpell",
        name: "Spell Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "thunderSpell",
        name: "Thunder Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "trophy",
        name: "Trophy",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "mirror",
        name: "Mirror",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "waterOfLife",
        name: "Water of Life",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "water",
        name: "Water",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "child",
        name: "Child",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "note",
        name: "Bagu's Note",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "candle",
        name: "Candle",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "glove",
        name: "Glove",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "raft",
        name: "Raft",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "boots",
        name: "Boots",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "whistle",
        name: "Flute",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "cross",
        name: "Cross",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "hammer",
        name: "Hammer",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },{
        id: "magicKey",
        name: "Magic Key",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "key",
      },/* {
        id: "-",
        name: "",
        max: 0,
      },{
        id: "parapa", // "palace",
        name: "Parapa Palace Crystal",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
      },{
        id: "midoro", // "palace",
        name: "Midoro Palace Crystal",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
      },{
        id: "island", // "palace",
        name: "Island Palace Crystal",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
      },{
        id: "maze", // "palace",
        name: "Maze Palace Crystal",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
      },{
        id: "onthesea", // "palace",
        name: "Palace On The Sea Crystal",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
      },{
        id: "hidden", // "palace",
        name: "Hidden Palace Crystal",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      }, */{
        id: "heartContainer",
        name: "Heart Containers",
        start: 4,
        max: 8,
        segments: [],
        value: 1,
        nodeType: "expansion",
      },{
        id: "magicContainer",
        name: "Magic Containers",
        start: 4,
        max: 8,
        segments: [],
        value: 1,
        nodeType: "expansion",
      },{
        id: "downStab",
        name: "Down Stab",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "upStab",
        name: "Up Stab",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "key",
      },{
        id: "life",
        name: "Life",
        start: 1,
        max: 8,
        segments: [],
        value: 0,
        nodeType: "expansion",
      },{
        id: "magic",
        name: "Magic",
        start: 1,
        max: 8,
        segments: [],
        value: 0,
        nodeType: "expansion",
      },{
        id: "attack",
        name: "Attack",
        start: 1,
        max: 8,
        segments: [],
        value: 0,
        nodeType: "expansion",
      },{
        id: "palace",
        name: "",
        start: 0,
        max: 0,
        segments: [
          {
            id: "palace",
            name: "Palace Crystals",
            start: 0,
            max: 6,
            value: 0,
            nodeType: "artifact",
          },{
            id: "triforce",
            name: "Great Palace open",
            start: 0,
            max: 1,
            value: 0,
            nodeType: "goal",
            clearIfScramble: true,
          },
        ],
        value: 0,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
    ],
    areas: [
    ],
    extras: [ // nodeType: "goal", bg: "ffffff",
    ],
    map: [
    ],
  },
  "alttp": {
    checklistWidth: 9,
    items: [
      {
        id: "bowArrows",
        name: "Bow",
        start: 0,
        max: 2,
        over: "MC_Chest",
        overText: "L1 Big Chest",
        segments: [ // assumes progressive bows
          {
            id: "bowArrows",
            name: "Arrows",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "L1 Big Chest",
            nodeType: "key",
            value: 1,
          },{
            id: "bowSilver",
            name: "Silver Arrows",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{ // assuming progressive Boomerang
        id: "boomerang",
        name: "", // "Boomerang",
        start: 0,
        max: 2,
        over: "MC_Chest",
        overText: "HC Basement Chest",
        segments: [ // in case of nonprogressive Boomerang
          {
            id: "boomerang",
            name: "Boomerang",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "HC Basement Chest",
            nodeType: "key",
            value: 1,
          },{
            id: "magicRang",
            name: "Magical Boomerang",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "hookshot",
        name: "Hookshot",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D2 Big Chest",
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 0,
      },{
        id: "powder",
        name: "",
        start: 0,
        max: 2,
        segments: [ // assumes progressive mushroom/powder
          {
            id: "mushroom",
            name: "Mushroom",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "powder",
            name: "Magic Powder",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "power",
        name: "Tower of Hera - Pendent of Power",
        start: 0,
        max: 1,
        back: "toh",
        segments: [],
        nodeType: "artifact",
        value: 1,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "fireRod",
        name: "Fire Rod",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D3 Big Chest",
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "iceRod",
        name: "Ice Rod",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "bombos",
        name: "Bombos",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "ether",
        name: "Ether",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "quake",
        name: "Quake",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "wisdom",
        name: "Desert Palace - Pendent of Wisdom",
        start: 0,
        max: 1,
        back: "dp",
        segments: [],
        nodeType: "artifact",
        value: 1,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "courage",
        name: "Eastern Palace - Pendent of Courage",
        start: 0,
        max: 1,
        back: "ep",
        segments: [],
        nodeType: "artifact",
        value: 1,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "lamp",
        name: "Lamp",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "hammer",
        name: "Magic Hammer",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D1 Big Chest",
        nodeType: "key",
        segments: [],
        value: 1,
      },{
        id: "flute",
        name: "",
        start: 0,
        max: 2,
        segments: [ // assumes progressive shovel/flute
          {
            id: "shovel",
            name: "Shovel",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "flute",
            name: "Flute",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "bird",
            name: "Flute (Warping enabled)",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 0,
          }
        ],
        value: 1,
      },{
        id: "net",
        name: "Bug-Catching Net",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "book",
        name: "Book of Mudora",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "agahnim",
        name: "Agahnim's Tower - Agahnim defeated",
        start: 0,
        max: 1,
        back: "at",
        segments: [],
        nodeType: "event",
        value: 0,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "bottle",
        name: "Bottle",
        start: 0,
        max: 4,
        segments: [],
        nodeType: "expansion",
        value: 1,
      },{
        id: "somaria",
        name: "Cane of Somaria",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D6 Big Chest",
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "byrna",
        name: "Cane of Byrna",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "cape",
        name: "Magic Cape",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "mirror",
        name: "Magic Mirror",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "sword",
        name: "",
        start: 0,
        max: 4,
        segments: [
          {
            id: "sword",
            name: "Fighter's Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "masterSword",
            name: "Master Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "temperedSword",
            name: "Tempered Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "goldenSword",
            name: "Golden Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "shield",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "shield",
            name: "Fighter's Shield",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "redShield",
            name: "Red Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "mirrorShield",
            name: "Mirror Sword",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D7 Big Chest",
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "greenJerkin",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "blueMail",
            name: "Blue Mail",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D5 Big Chest",
            nodeType: "key",
            value: 1,
          },{
            id: "redMail",
            name: "Red Mail",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "GT Big Chest",
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "boots",
        name: "Pegasus Boots",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "glove",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "glove",
            name: "Power Glove",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "L2 Big Chest",
            nodeType: "key",
            value: 1,
          },{
            id: "mitt",
            name: "Titan's Mitt",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D4 Big Chest",
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "flipper",
        name: "Zora Flipper",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "pearl",
        name: "Moon Pearl",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "L3 Big Chest",
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "halfMagic",
        name: "Half Magic",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "arrowsExp",
        name: "Arrow Capacity",
        start: 0,
        max: 8,
        segments: [],
        nodeType: "key",
        value: 0,
      },{
        id: "bombsExp",
        name: "Bomb Capacity",
        start: 0,
        max: 8,
        segments: [],
        nodeType: "key",
        value: 0,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "crystal",
        name: "Palace of Darkness - Crystal",
        start: 0,
        max: 1,
        back: "pod",
        segments: [],
        nodeType: "artifact",
        value: 1,
      },{
        id: "crystal",
        name: "Swamp Palace - Crystal",
        start: 0,
        max: 1,
        back: "sp",
        segments: [],
        nodeType: "artifact",
        value: 1,
      },{
        id: "crystal",
        name: "Skull Woods - Crystal",
        start: 0,
        max: 1,
        back: "sw",
        segments: [],
        nodeType: "artifact",
        value: 1,
      },{
        id: "crystal",
        name: "Thieves' Town - Crystal",
        start: 0,
        max: 1,
        back: "tt",
        segments: [],
        nodeType: "artifact",
        value: 1,
      },{
        id: "crystal",
        name: "Ice Palace - Crystal",
        start: 0,
        max: 1,
        back: "ip",
        segments: [],
        nodeType: "artifact",
        value: 1,
      },{
        id: "crystal",
        name: "Misery Mire - Crystal",
        start: 0,
        max: 1,
        back: "mm",
        segments: [],
        nodeType: "artifact",
        value: 1,
      },{
        id: "crystal",
        name: "Turtle Rock - Crystal",
        start: 0,
        max: 1,
        back: "tr",
        segments: [],
        nodeType: "artifact",
        value: 1,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
    ],
    areas: [
    ],
    extras: [ // nodeType: "goal", bg: "ffffff",
    ],
    map: [
    ],
  },
  "z3_rnd": {
    checklistWidth: 10,
    items: [
      {
        id: "bow",
        name: "Bow", // "",
        start: 0,
        max: 1, // 2
        over: "MC_Chest",
        overText: "L1 Big Chest",
        nodeType: "key",
        segments: [ // assuming progressive bow
          /*{
            id: "bowArrows",
            name: "Bow and Arrows",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "L1 Big Chest",
            nodeType: "key",
            value: 1,
          },{
            id: "bowSilver",
            name: "Bow and Silver Arrows",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }*/
        ],
        nodeType: "key",
        value: 1,
      },{ // in case of nonprogressive bow
        id: "silverArrows",
        name: "", // "Silver Arrows",
        start: 0,
        max: 1,
        segments: [
          /*{
            id: "arrow",
            name: "Arrows",
            start: 1,
            max: 1,
            nodeType: "key",
            value: 0,
          },*/{
            id: "silverArrows",
            name: "Silver Arrows",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      }, /* { // assuming progressive Boomerang
        id: "boomerang",
        name: "", // "Boomerang",
        start: 0,
        max: 2,
        over: "MC_Chest",
        overText: "HC Basement Chest",
        segments: [ */ // in case of nonprogressive Boomerang
          {
            id: "boomerang",
            name: "Boomerang",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "HC Basement Chest",
            nodeType: "key",
            value: 1,
          },{
            id: "magicRang",
            name: "Magical Boomerang",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }/* 
        ],
        nodeType: "key",
        value: 1,
      } */,{
        id: "hookshot",
        name: "Hookshot",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D2 Big Chest",
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 0,
      },/*{
        id: "powder",
        name: "",
        start: 0,
        max: 2,
        segments: [
          */{
            id: "mushroom",
            name: "Mushroom",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "powder",
            name: "Magic Powder",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }/*
        ],
        value: 1,
      }*/,/*{
        id: "-",
        name: "",
        max: 0,
      },*/{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "fireRod",
        name: "Fire Rod",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D3 Big Chest",
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "iceRod",
        name: "Ice Rod",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "bombos",
        name: "Bombos",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "ether",
        name: "Ether",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "quake",
        name: "Quake",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "lamp",
        name: "Lamp",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "hammer",
        name: "Magic Hammer",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D1 Big Chest",
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "shovel",
        name: "Shovel",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "flute",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "flute",
            name: "Flute",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "bird",
            name: "Flute (Warping enabled)",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 0,
          }
        ],
        value: 1,
      },{
        id: "net",
        name: "Bug-Catching Net",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "book",
        name: "Book of Mudora",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "bottle",
        name: "Bottle",
        start: 0,
        max: 4,
        segments: [],
        nodeType: "expansion",
        value: 1,
      },{
        id: "somaria",
        name: "Cane of Somaria",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D6 Big Chest",
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "byrna",
        name: "Cane of Byrna",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "cape",
        name: "Magic Cape",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "mirror",
        name: "Magic Mirror",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        displayIfScramble: true,
      },{
        id: "sword",
        name: "",
        start: 0,
        max: 4,
        segments: [
          {
            id: "sword",
            name: "Fighter's Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "masterSword",
            name: "Master Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "temperedSword",
            name: "Tempered Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "goldenSword",
            name: "Golden Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "shield",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "shield",
            name: "Fighter's Shield",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "redShield",
            name: "Red Sword",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "mirrorShield",
            name: "Mirror Sword",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D7 Big Chest",
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "greenJerkin",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "blueMail",
            name: "Blue Mail",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D5 Big Chest",
            nodeType: "key",
            value: 1,
          },{
            id: "redMail",
            name: "Red Mail",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "GT Big Chest",
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "boots",
        name: "Pegasus Boots",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "glove",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "glove",
            name: "Power Glove",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "L2 Big Chest",
            nodeType: "key",
            value: 1,
          },{
            id: "mitt",
            name: "Titan's Mitt",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D4 Big Chest",
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "flipper",
        name: "Zora Flipper",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "pearl",
        name: "Moon Pearl",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "L3 Big Chest",
        segments: [],
        nodeType: "key",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "halfMagic",
        name: "",
        start: 0,
        max: 2,
        segments: [
          {
            id: "halfMagic",
            name: "Half Magic",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          },{
            id: "quarterMagic",
            name: "Quarter Magic",
            start: 0,
            max: 1,
            nodeType: "key",
            value: 1,
          }
        ],
        value: 1,
      },{
        id: "arrowsExp",
        name: "Arrow Capacity",
        start: 0,
        max: 8,
        segments: [],
        nodeType: "expansion",
        value: 1,
      },{
        id: "bombsExp",
        name: "Bomb Capacity",
        start: 0,
        max: 8,
        segments: [],
        nodeType: "expansion",
        value: 1,
      },{
        id: "pieceOfHeart",
        name: "Pieces of Heart",
        start: 0,
        max: 24,
        segments: [],
        nodeType: "expansion",
        value: 1,
      },{
        id: "heartContainer",
        name: "Heart Containers",
        start: 0,
        max: 11,
        over: "MC_Heart",
        overText: "Sanctuary Heart Obtained",
        segments: [],
        nodeType: "expansion",
        value: 1,
      },{
        id: "ep",
        name: "Eastern Palace",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Armos Knights Defeated",
        back: "ep",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "ep",
            type: "dungeon",
            start: 1,
            max: 1,
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "ep",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "ep",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "ep",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "ep",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "ep",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          }
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "courage",
        name: "Pendent of Courage",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Armos Knights Defeated",
        back: "ep",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },{
        id: "dp",
        name: "Desert Palace",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Lanmolas Defeated",
        back: "dp",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "dp",
            type: "dungeon",
            start: 1,
            max: 1,
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "dp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "dp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "dp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "dp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "dp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          }
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "wisdom",
        name: "Pendent of Wisdom",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Lanmolas Defeated",
        back: "dp",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },{
        id: "toh",
        name: "Tower of Hera",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Moldorm Defeated",
        back: "toh",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "toh",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "toh",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "toh",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "toh",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "toh",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "toh",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          }
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "power",
        name: "Pendent of Power",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Moldorm Defeated",
        back: "toh",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },{
        id: "pod",
        name: "Palace of Darkness",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Helmasaur King Defeated",
        back: "pod",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "pod",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "pod",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "pod",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "pod",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "pod",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "pod",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          }
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "crystal",
        name: "Crystal",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Helmasaur King Defeated",
        back: "pod",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },{
        id: "sp",
        name: "Swamp Palace",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Arrghus Defeated",
        back: "sp",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "sp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "sp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "sp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "sp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "sp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "sp",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          }
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "crystal",
        name: "Crystal",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Arrghus Defeated",
        back: "sp",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },{
        id: "sw",
        name: "Skull Woods",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Mothula Defeated",
        back: "sw",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "sw",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "sw",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "sw",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "sw",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "sw",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "sw",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          }
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "crystal",
        name: "Crystal",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Mothula Defeated",
        back: "sw",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },{
        id: "tt",
        name: "Thieves' Town",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Blind Defeated",
        back: "tt",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "tt",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "tt",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "tt",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "tt",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "tt",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "tt",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          }
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "crystal",
        name: "Crystal",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Blind Defeated",
        back: "tt",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },{
        id: "ip",
        name: "Ice Palace",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Kholdstare Defeated",
        back: "ip",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "ip",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "ip",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "ip",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "ip",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "ip",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "ip",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          }
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "fairyCrystal",
        name: "Fairy Crystal",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Kholdstare Defeated",
        back: "ip",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },{
        id: "mm",
        name: "Misery Mire",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Vitreous Defeated",
        back: "mm",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "mm",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "mm",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "mm",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "mm",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "mm",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "mm",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          }
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "fairyCrystal",
        name: "Fairy Crystal",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Vitreous Defeated",
        back: "mm",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },{
        id: "tr",
        name: "Turtle Rock",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Trinexx Defeated",
        back: "tr",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "tr",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "courage",
            name: "Pendent of Courage",
            back: "tr",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 1,
          },{
            id: "wisdom",
            name: "Pendent of Wisdom",
            back: "tr",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "power",
            name: "Pendent of Power",
            back: "tr",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "crystal",
            name: "Crystal",
            back: "tr",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },{
            id: "fairyCrystal",
            name: "Fairy Crystal",
            back: "tr",
            type: "dungeon",
            start: 1,
            max: 1,
            nodeType: "artifact",
            value: 0,
          },
        ],
        clearIfScramble: true,
        value: 1,
      },{
        id: "crystal",
        name: "Crystal",
        start: 0,
        max: 1,
        over: "MC_Skull",
        overText: "Trinexx Defeated",
        back: "tr",
        segments: [],
        nodeType: "artifact",
        displayIfScramble: true,
        value: 1,
      },
    ],
    bosses: [ // nodeType: "boss", bg: "747474",
    ],
    areas: [
    ],
    extras: [ // nodeType: "goal", bg: "ffffff",
    ],
    map: [
    ],
  }
};