const rawData = {
  "mrd": {
    width: 5,
    items: [
      {
        id: "metroid/highJump",
        sprite: "metroid/rd_high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/bombB",
        sprite: "metroid/rd_bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/barrier",
        sprite: "metroid/rd_barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/iceBeamD",
        sprite: "metroid/rd_ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/wallJumpBoots",
        sprite: "metroid/rd_wall",
        name: "Wall Jump Boots",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/springBall",
        sprite: "metroid/rd_spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/screwAttack",
        sprite: "metroid/rd_screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/waveBeam",
        sprite: "metroid/rd_wave",
        name: "Prototype Wave Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/energyTank",
        sprite: "metroid/rd_energy",
        name: "Energy Tanks",
        start: 0,
        max: 7,
        segments: []
      },{
        id: "metroid/missileTank",
        sprite: "metroid/rd_missile",
        name: "Missile Tanks",
        start: 0,
        max: 31,
        segments: []
      },/* {
        id: "metroid/boss",
        name: "Access",
        start: 0,
        max: 2,
        segments: []
      }, */{
        id: "metroid/m_lock1",
        sprite: "metroid/rd_captain",
        name: "Access Lock 1",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/m_lock2",
        sprite: "metroid/rd_research",
        name: "Access Lock 2",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/monsterCapsule",
        sprite: "metroid/rd_cell",
        name: "Metroid Cell Capsule",
        start: 0,
        max: 1,
        segments: []
      },
    ]
  },
  "m1": {
    width: 4,
    items: [
      {
        id: "metroid/morphBall",
        sprite: "metroid/m_morph",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/barrier",
        sprite: "metroid/m_barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/longBeamB",
        sprite: "metroid/m_long",
        name: "Long Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/iceBeamD",
        sprite: "metroid/m_ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/bombB",
        sprite: "metroid/m_bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/highJump",
        sprite: "metroid/m_high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/screwAttack",
        sprite: "metroid/m_screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/waveBeam",
        sprite: "metroid/m_wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/energyTank",
        sprite: "metroid/m_energy",
        name: "Energy Tanks",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "metroid/missileTank",
        sprite: "metroid/m_missile",
        name: "Missile Tanks",
        start: 0,
        max: 21,
        segments: []
      },/* {
        id: "metroid/boss",
        name: "Bosses Defeated",
        start: 0,
        max: 2,
        segments: []
      }, */ {
        id: "metroid/m_kraid",
        sprite: "metroid/m_kraid",
        name: "Kraid Defeated",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/m_ridley",
        sprite: "metroid/m_ridley",
        name: "Ridley Defeated",
        start: 0,
        max: 1,
        segments: []
      },
    ]
  },
  "mzm": {
    width: 6,
    items: [
      {
        id: "metroid/morphBall",
        sprite: "metroid/z_morphBall",
        name: "Morph Ball",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Vanilla Morph Ball Item Acquired",
        segments: []
      },{
        id: "metroid/bombB",
        sprite: "metroid/z_bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Bombs Orb Acquired",
        segments: []
      },{
        id: "metroid/barrier",
        sprite: "metroid/z_barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Varia Suit Orb Acquired",
        segments: []
      },{
        id: "metroid/gravitySuit",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "metroid/unknownItem3",
            sprite: "metroid/z_unknownItem3",
            name: "Unknown Item 3",
            start: 0,
            max: 1,
            over: "metroid/Z_Orb",
            overText: "Unknown Item 3 Orb Acquired",
          },{
            id: "metroid/gravitySuit",
            sprite: "metroid/z_gravitySuit",
            name: "Gravity Suit",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/fullPowerSuit",
        sprite: "metroid/z_fullPowerSuit",
        name: "Fully Powered Suit",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/longBeamB",
        sprite: "metroid/z_longBeam",
        name: "Long Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Long Beam Orb Acquired",
        segments: []
      },{
        id: "metroid/chargeBeamF",
        sprite: "metroid/z_chargeBeam",
        name: "Charge Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Beam Beast Defeated",
        segments: []
      },{
        id: "metroid/plasmaBeam",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "metroid/unknownItem1",
            sprite: "metroid/z_unknownItem1",
            name: "Unknown Item 1",
            start: 0,
            max: 1,
            over: "metroid/Z_Orb",
            overText: "Unknown Item 1 Orb Acquired",
          },{
            id: "metroid/plasmaBeamE",
            sprite: "metroid/z_plasmaBeam",
            name: "Plasma Beam",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/iceBeamD",
        sprite: "metroid/z_iceBeam",
        name: "Ice Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Ice Beam Orb Acquired",
        segments: []
      },{
        id: "metroid/waveBeam",
        sprite: "metroid/z_waveBeam",
        name: "Wave Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Wave Beam Orb Acquired",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/powerGrip",
        sprite: "metroid/z_powerGrip",
        name: "Power Grip",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Power Grip Orb Acquired",
        segments: []
      },{
        id: "metroid/spaceJump",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "metroid/unknownItem2",
            sprite: "metroid/z_unknownItem2",
            name: "Unknown Item 2",
            start: 0,
            max: 1,
            over: "metroid/Z_Orb",
            overText: "Unknown Item 2 Orb Acquired",
          },{
            id: "metroid/spaceJump",
            sprite: "metroid/z_spaceJump",
            name: "Space Jump",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/speedBoosterB",
        sprite: "metroid/z_speedBooster",
        name: "Speed Booster",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Speed Booster Orb Acquired",
        segments: []
      },{
        id: "metroid/highJump",
        sprite: "metroid/z_highJump",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "High Jump Orb Acquired",
        segments: []
      },{
        id: "metroid/screwAttack",
        sprite: "metroid/z_screwAttack",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Screw Attack Orb Acquired",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/energyTank",
        sprite: "metroid/z_energyTank",
        name: "Energy Tanks",
        start: 0,
        max: 12,
        segments: []
      },{
        id: "metroid/missileTank",
        sprite: "metroid/z_missileTank",
        name: "Missile Tanks",
        start: 0,
        max: 50,
        segments: []
      },{
        id: "metroid/superMissileTank",
        sprite: "metroid/z_superMissileTank",
        name: "Super Missile Tanks",
        start: 0,
        max: 15,
        segments: []
      },{
        id: "metroid/powerBombTank",
        sprite: "metroid/z_powerBombTank",
        name: "Power Bomb Tanks",
        start: 0,
        max: 9,
        segments: []
      },{
        id: "metroid/zipline",
        name: "Zipline",
        sprite: "metroid/z_zipline",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/boss",
        name: "Bosses",
        start: 0,
        max: 2,
        segments: []
      },
    ]
  },
  "mp": {
    width: 5,
    items: [
      {
        id: "metroid/fusionSuit",
        name: "",
        type: "toggle",
        start: 0,
        max: 1,
        segments: [
          {
            id: "metroid/primeSuit",
            name: "Prime Suit Active",
            type: "toggle",
            start: 1,
            max: 1,
          },{
            id: "metroid/fusionSuit",
            name: "Fusion Suit Active",
            type: "toggle",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Flaahgra Defeated",
        segments: []
      },{
        id: "metroid/gravitySuit",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Phendrana Drifts - Gravity Chamber",
        segments: []
      },{
        id: "metroid/phazonSuit",
        name: "Phazon Suit",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Omega Pirate Defeated",
        segments: []
      },{
        id: "metroid/spaceJumpBoots",
        name: "Space Jump Boots",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Tallon Overworld - Alcove",
        segments: []
      },{
        id: "metroid/powerBeam",
        name: "Power Beam",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/chargeBeamB",
        name: "Charge Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Chozo Ruins - Watery Hall",
        segments: []
      },{
        id: "metroid/waveBeamA",
        name: "Wave Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Phendrana Drifts - Chapel of the Elders",
        segments: []
      },{
        id: "metroid/iceBeamB",
        name: "Ice Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Chozo Ruins - Antechamber",
        segments: []
      },{
        id: "metroid/plasmaBeamB",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Magmoor Caverns - Plasma Processing",
        segments: []
      },{
        id: "metroid/missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Hive Mecha Defeated",
        segments: []
      },{
        id: "metroid/superMissileA",
        name: "Super Missile",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Phendrana Drifts - Observatory",
        segments: []
      },{
        id: "metroid/shockShot",
        name: "Wavebuster",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Chozo Ruins - Tower of Light",
        segments: []
      },{
        id: "metroid/freezeShot",
        name: "Ice Spreader",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Magmoor Caverns - Shore Tunnel",
        segments: []
      },{
        id: "metroid/flameShot",
        name: "Flamethrower",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Phazon Mines - Storage Depot A",
        segments: []
      },{
        id: "metroid/morphBall",
        name: "Morph Ball",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Chozo Ruins - Ruined Shrine",
        segments: []
      },{
        id: "metroid/bombC",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Incinerator Drone Defeated",
        segments: []
      },{
        id: "metroid/boostBall",
        name: "Boost Ball",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Phendrana Drifts - Phendrana Canyon",
        segments: []
      },{
        id: "metroid/spiderBall",
        name: "Spider Ball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Thardus Defeated",
        segments: []
      },{
        id: "metroid/powerBombA",
        name: "Power Bomb",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Phazon Mines - Central Dynamo",
        segments: []
      },{
        id: "metroid/combatVisor",
        name: "Combat Visor",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/scanVisor",
        name: "Scan Visor",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/thermalVisor",
        name: "Thermal Visor",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Phendrana Drifts - Research Core",
        segments: []
      },{
        id: "metroid/xRayVisor",
        name: "X-Ray Visor",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Tallon Overworld - Life Grove",
        segments: []
      },{
        id: "metroid/grappleBeam",
        name: "Grapple Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Phazon Mines - Storage Depot B",
        segments: []
      },{
        id: "metroid/energyTankA",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 49,
        segments: []
      },{
        id: "metroid/powerBombExp",
        name: "Power Bomb Expansions",
        start: 0,
        max: 4,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/chozoArtifact",
        name: "",
        start: 0,
        max: 12,
        over: "metroid/Z_Chozo",
        overText: "Hints Acquired",
        segments: [
          {
            id: "metroid/chozoArtifact",
            name: "Chozo Artifacts",
            over: "metroid/Z_Chozo",
            overText: "Hints Acquired",
            start: 0,
            max: 12
          },{
            id: "metroid/cipher",
            name: "Impact Crater Accessible",
            start: 0,
            max: 1
          }
        ]
      },
    ]
  },
  "pb": {
    width: 4,
    items: [
      {
        id: "metroid/chozoArtifact",
        name: "Artifacts",
        start: 0,
        max: 12,
        segments: []
      },{
        id: "metroid/powerBombA",
        name: "Power Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/forceBall",
        name: "Force Ball",
        start: 0,
        max: 1,
        segments: []
      },
    ]
  },
  "p2d": {
    width: 3,
    items: [
      {
        id: "metroid/powerGrip",
        name: "Power Grip",
        start: 0,
        max: 1,
        over: "metroid/Z_Chozo",
        overText: "Artifact of Truth acquired",
        segments: []
      },{
        id: "metroid/missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Hive Mecha Defeated",
        segments: []
      },{
        id: "metroid/morphBall",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/bombC",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/boostBall",
        name: "Boost Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/springBall",
        name: "Spring Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/energyTankA",
        name: "Energy Tanks",
        start: 0,
        max: 2,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 7,
        segments: []
      },{
        id: "metroid/chozoArtifact",
        name: "Chozo Artifacts",
        start: 0,
        max: 12,
        over: "metroid/Z_Chozo",
        overText: "Hints Acquired",
        segments: []
      },
    ]
  },
  "mp2e": {
    width: 8,
    items: [
      {
        id: "metroid/combatVisorA",
        name: "Combat Visor",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/violetTranslator",
        name: "Violet Translator",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Great Temple - Main Energy Controller 1",
        segments: []
      },{
        id: "metroid/powerBeamC",
        name: "Power Beam",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/superMissileA",
        name: "Super Missile",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Torvus Bog - Torvus Temple",
        segments: []
      },{
        id: "metroid/chargeBeamC",
        name: "Charge Beam",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/bombD",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Bomb Guardian Defeated",
        segments: []
      },{
        id: "metroid/spaceJumpBoots",
        name: "Space Jump Boots",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Jump Guardian Defeated",
        segments: []
      },{
        id: "metroid/energyTransferModule",
        name: "Energy Transfer Module",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Dark Alpha Splinter Defeated",
        segments: []
      },{
        id: "metroid/scanVisorA",
        name: "Scan Visor",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/amberTranslator",
        name: "Amber Translator",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Agon Wastes - Agon Energy Controller",
        segments: []
      },{
        id: "metroid/darkBeam",
        name: "Dark Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Agon Wastes - Storage D",
        segments: []
      },{
        id: "metroid/darkburst",
        name: "Darkburst",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Agon Wastes - Mining Station B",
        segments: []
      },{
        id: "metroid/missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Temple Grounds - GFMC Compound",
        segments: []
      },{
        id: "metroid/boostBall",
        name: "Boost Ball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Boost Guardian Defeated",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/darkSuit",
        name: "Dark Suit",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Amorbis Defeated",
        segments: []
      },{
        id: "metroid/darkVisor",
        name: "Dark Visor",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Chykka Defeated",
        segments: []
      },{
        id: "metroid/emeraldTranslator",
        name: "Emerald Translator",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Torvus Bog - Torvus Energy Controller",
        segments: []
      },{
        id: "metroid/lightBeam",
        name: "Light Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Dark Agon Wastes - Ing Cache 1",
        segments: []
      },{
        id: "metroid/sunburst",
        name: "Sunburst",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Temple Grounds - Grand Windchamber",
        segments: []
      },{
        id: "metroid/seekerLauncherA",
        name: "Seeker Launcher",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Temple Grounds - Hall of Honored Dead",
        segments: []
      },{
        id: "metroid/spiderBall",
        name: "Spider Ball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Spider Guardian Defeated",
        segments: []
      },{
        id: "metroid/grappleBeam",
        name: "Grapple Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Grapple Guardian Defeated",
        segments: []
      },{
        id: "metroid/gravityBoost",
        name: "Gravity Boost",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Torvus Bog - Hydrodynamo Storage",
        segments: []
      },{
        id: "metroid/echoVisor",
        name: "Echo Visor",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Sanctuary Fortress - Aerie",
        segments: []
      },{
        id: "metroid/cobaltTranslator",
        name: "Cobalt Translator",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Sanctuary Fortress - Sanctuary Temple",
        segments: []
      },{
        id: "metroid/annihilatorBeam",
        name: "Annihilator Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Quadraxis Defeated",
        segments: []
      },{
        id: "metroid/sonicBoom",
        name: "Sonic Boom",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Dark Agon Wastes - Ing Cache 2",
        segments: []
      },{
        id: "metroid/morphBall",
        name: "Morph Ball",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/powerBombB",
        name: "Power Bombs",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Power Bomb Guardian Defeated",
        segments: []
      },{
        id: "metroid/screwAttackA",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Sanctuary Fortress - Vault",
        segments: []
      },{
        id: "metroid/lightSuit",
        name: "Light Suit",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Great Temple - Main Energy Controller 2",
        segments: []
      },{
        id: "metroid/energyTankA",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 49,
        segments: []
      },{
        id: "metroid/beamAmmoExpansion",
        name: "Beam Ammo Expansions",
        start: 0,
        max: 4,
        segments: []
      },{
        id: "metroid/powerBombExpA",
        name: "Power Bomb Expansions",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "metroid/darkAgonKey",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/darkAgonKey",
            name: "Dark Agon Keys",
            over: "metroid/F_Boss_Ex",
            overText: "Amorbis required",
            start: 0,
            max: 3
          },{
            id: "metroid/lightOfAether",
            name: "Dark Agon Energy Retrieved",
            start: 0,
            max: 1
          },{
            id: "metroid/lightOfAetherA",
            name: "Agon Energy Restored",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/darkTorvusKey",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/darkTorvusKey",
            name: "Dark Torvus Keys",
            over: "metroid/F_Boss_Ex",
            overText: "Chykka required",
            start: 0,
            max: 3
          },{
            id: "metroid/lightOfAether",
            name: "Dark Torvus Energy Retrieved",
            start: 0,
            max: 1
          },{
            id: "metroid/lightOfAetherA",
            name: "Torvus Energy Restored",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/ingHiveKey",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/ingHiveKey",
            name: "Ing Hive Keys",
            over: "metroid/F_Boss_Ex",
            overText: "Quadraxis required",
            start: 0,
            max: 3
          },{
            id: "metroid/lightOfAether",
            name: "Ing Hive Energy Retrieved",
            start: 0,
            max: 1
          },{
            id: "metroid/lightOfAetherA",
            name: "Sanctuary Energy Restored",
            start: 0,
            max: 1
          }]
      },{
        id: "metroid/skyTempleKey",
        name: "",
        start: 0,
        max: 9,
        over: "metroid/Z_Chozo",
        overText: "Hints Acquired",
        segments: [
          {
            id: "metroid/skyTempleKey",
            name: "Sky Temple Keys",
            over: "metroid/E_Lumin_Ex",
            overText: "Hints acquired",
            start: 0,
            max: 9
          },{
            id: "metroid/skyTempleAccess",
            name: "Sky Temple Accessible",
            start: 0,
            max: 1
          }
        ]
      },
    ]
  },
  "e_rnd": {
    width: 8,
    items: [
      {
        id: "metroid/combatVisorA",
        name: "Combat Visor",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/violetTranslator",
        name: "Violet Translator",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Great Temple - Main Energy Controller 1",
        segments: []
      },{
        id: "metroid/powerBeamC",
        name: "Power Beam",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/superMissileA",
        name: "Super Missile",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Torvus Bog - Torvus Temple",
        segments: []
      },{
        id: "metroid/chargeBeamC",
        name: "Charge Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/bombD",
        name: "Bombs",
        start: 1,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Bomb Guardian Defeated",
        segments: []
      },{
        id: "metroid/spaceJumpBoots",
        name: "Space Jump Boots",
        start: 1,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Jump Guardian Defeated",
        segments: []
      },{
        id: "metroid/energyTransferModule",
        name: "Energy Transfer Module",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Dark Alpha Splinter Defeated",
        segments: []
      },{
        id: "metroid/scanVisorA",
        name: "Scan Visor",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/amberTranslator",
        name: "Amber Translator",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Agon Wastes - Agon Energy Controller",
        segments: []
      },{
        id: "metroid/darkBeam",
        name: "Dark Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Agon Wastes - Storage D",
        segments: []
      },{
        id: "metroid/darkburst",
        name: "Darkburst",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Agon Wastes - Mining Station B",
        segments: []
      },{
        id: "metroid/missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Temple Grounds - GFMC Compound",
        segments: []
      },{
        id: "metroid/boostBall",
        name: "Boost Ball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Boost Guardian Defeated",
        segments: []
      },{
        id: "metroid/cannonball",
        name: "Cannon Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/darkSuit",
        name: "Dark Suit",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Amorbis Defeated",
        segments: []
      },{
        id: "metroid/darkVisor",
        name: "Dark Visor",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Chykka Defeated",
        segments: []
      },{
        id: "metroid/emeraldTranslator",
        name: "Emerald Translator",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Torvus Bog - Torvus Energy Controller",
        segments: []
      },{
        id: "metroid/lightBeam",
        name: "Light Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Dark Agon Wastes - Ing Cache 1",
        segments: []
      },{
        id: "metroid/sunburst",
        name: "Sunburst",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Temple Grounds - Grand Windchamber",
        segments: []
      },{
        id: "metroid/seekerLauncherA",
        name: "Seeker Launcher",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Temple Grounds - Hall of Honored Dead",
        segments: []
      },{
        id: "metroid/spiderBall",
        name: "Spider Ball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Spider Guardian Defeated",
        segments: []
      },{
        id: "metroid/grappleBeam",
        name: "Grapple Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Grapple Guardian Defeated",
        segments: []
      },{
        id: "metroid/gravityBoost",
        name: "Gravity Boost",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Torvus Bog - Hydrodynamo Storage",
        segments: []
      },{
        id: "metroid/echoVisor",
        name: "Echo Visor",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Sanctuary Fortress - Aerie",
        segments: []
      },{
        id: "metroid/cobaltTranslator",
        name: "Cobalt Translator",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Sanctuary Fortress - Sanctuary Temple",
        segments: []
      },{
        id: "metroid/annihilatorBeam",
        name: "Annihilator Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Quadraxis Defeated",
        segments: []
      },{
        id: "metroid/sonicBoom",
        name: "Sonic Boom",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Dark Agon Wastes - Ing Cache 2",
        segments: []
      },{
        id: "metroid/morphBall",
        name: "Morph Ball",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/powerBombB",
        name: "Power Bombs",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Power Bomb Guardian Defeated",
        segments: []
      },{
        id: "metroid/screwAttackA",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Sanctuary Fortress - Vault",
        segments: []
      },{
        id: "metroid/lightSuit",
        name: "Light Suit",
        start: 0,
        max: 1,
        over: "metroid/E_Lumin",
        overText: "Great Temple - Main Energy Controller 2",
        segments: []
      },{
        id: "metroid/energyTankA",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 33,
        segments: []
      },{
        id: "metroid/darkAmmoExpansion",
        name: "Dark Beam Ammo Expansions",
        start: 0,
        max: 10,
        segments: []
      },{
        id: "metroid/lightAmmoExpansion",
        name: "Light Beam Ammo Expansions",
        start: 0,
        max: 10,
        segments: []
      },{
        id: "metroid/powerBombExpA",
        name: "Power Bomb Expansions",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/darkAgonKey",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/darkAgonKey",
            name: "Dark Agon Keys",
            over: "metroid/F_Boss_Ex",
            overText: "Amorbis required",
            start: 0,
            max: 3
          },{
            id: "metroid/lightOfAether",
            name: "Dark Agon Energy Retrieved",
            start: 0,
            max: 1
          },{
            id: "metroid/lightOfAetherA",
            name: "Agon Energy Restored",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/darkTorvusKey",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/darkTorvusKey",
            name: "Dark Torvus Keys",
            over: "metroid/F_Boss_Ex",
            overText: "Chykka required",
            start: 0,
            max: 3
          },{
            id: "metroid/lightOfAether",
            name: "Dark Torvus Energy Retrieved",
            start: 0,
            max: 1
          },{
            id: "metroid/lightOfAetherA",
            name: "Torvus Energy Restored",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/ingHiveKey",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/ingHiveKey",
            name: "Ing Hive Keys",
            over: "metroid/F_Boss_Ex",
            overText: "Quadraxis required",
            start: 0,
            max: 3
          },{
            id: "metroid/lightOfAether",
            name: "Ing Hive Energy Retrieved",
            start: 0,
            max: 1
          },{
            id: "metroid/lightOfAetherA",
            name: "Sanctuary Energy Restored",
            start: 0,
            max: 1
          }]
      },{
        id: "metroid/skyTempleKey",
        name: "",
        start: 0,
        max: 9,
        over: "metroid/Z_Chozo",
        overText: "Hints Acquired",
        segments: [
          {
            id: "metroid/skyTempleKey",
            name: "Sky Temple Keys",
            over: "metroid/E_Lumin_Ex",
            overText: "Hints acquired",
            start: 0,
            max: 9
          },{
            id: "metroid/skyTempleAccess",
            name: "Sky Temple Accessible",
            start: 0,
            max: 1
          }
        ]
      },
    ]
  },
  "ph": {
    width: 8,
    items: [
      {
        id: "metroid/missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/voltDriver",
        name: "Volt Driver",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/magmaul",
        name: "Magmaul",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/shockCoil",
        name: "Shock Coil",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/battlehammer",
        name: "Battlehammer",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/judicator",
        name: "Judicator",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/imperialist",
        name: "Imperialist",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/omegaCannon",
        name: "Omega Cannon",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/energyTankA",
        name: "Energy Tanks",
        start: 0,
        max: 7,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 9,
        segments: []
      },{
        id: "metroid/uaExpansion",
        name: "UA Expansions",
        start: 0,
        max: 12,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/alimbicArtifactCA1",
        name: "Celestial Archives 1",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/alimbicArtifactCA1",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3
          },{
            id: "metroid/octolith",
            name: "Octolith",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/alimbicArtifactAl1",
        name: "Alinos 1",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/alimbicArtifactAl1",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3
          },{
            id: "metroid/octolith",
            name: "Octolith",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/alimbicArtifactVDO1",
        name: "VDO 1",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/alimbicArtifactVDO1",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3
          },{
            id: "metroid/octolith",
            name: "Octolith",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/alimbicArtifactArc1",
        name: "Arcterra 1",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/alimbicArtifactArc1",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3
          },{
            id: "metroid/octolith",
            name: "Octolith",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/oubliette",
        name: "Oubliette unlocked",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/alimbicArtifactCA2",
        name: "Celestial Archives 2",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/alimbicArtifactCA2",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3
          },{
            id: "metroid/octolith",
            name: "Octolith",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/alimbicArtifactAl2",
        name: "Alinos 2",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/alimbicArtifactAl2",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3
          },{
            id: "metroid/octolith",
            name: "Octolith",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/alimbicArtifactVDO2",
        name: "VDO 2",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/alimbicArtifactVDO2",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3
          },{
            id: "metroid/octolith",
            name: "Octolith",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "metroid/alimbicArtifactArc2",
        name: "Arcterra 2",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/alimbicArtifactArc2",
            name: "Alimbic Artifacts",
            start: 0,
            max: 3
          },{
            id: "metroid/octolith",
            name: "Octolith",
            start: 0,
            max: 1
          }
        ]
      },
    ]
  },
  "mp3c": {
    width: 8,
    items: [
      {
        id: "metroid/powerBeamC",
        name: "Power Beam",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/chargeBeamF",
        name: "Charge Beam",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/morphBall",
        name: "Morph Ball",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/bombB",
        name: "Bombs",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/spaceJumpBoots",
        name: "Space Jump Boots",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/combatVisor",
        name: "Combat Visor",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/scanVisorB",
        name: "Scan Visor",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/hyperBeamB",
        name: "Hyper Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/plasmaBeamE",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Ghor Defeated",
        segments: []
      },{
        id: "metroid/novaBeam",
        name: "Nova Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Pirate Homeworld - Pirate Mines - Main Cavern",
        segments: []
      },{
        id: "metroid/missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/iceMissile",
        name: "Ice Missile",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Rundas Defeated",
        segments: []
      },{
        id: "metroid/seekerLauncherB",
        name: "Seeker Launcher",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Skytown - Eastern Skytown - Xenoresearch B",
        segments: []
      },{
        id: "metroid/shipMissile",
        name: "Ship Missile",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Bryyo - Hangar Bay",
        segments: []
      },{
        id: "metroid/hyperMissile",
        name: "Hyper Missile",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Helios Defeated",
        segments: []
      },{
        id: "metroid/boostBall",
        name: "Boost Ball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Defense Drone Defeated",
        segments: []
      },{
        id: "metroid/spiderBall",
        name: "Spider Ball",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Skytown - Powerworks",
        segments: []
      },{
        id: "metroid/hyperBall",
        name: "Hyper Ball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Mogenar Defeated",
        segments: []
      },{
        id: "metroid/grappleLassoA",
        name: "Grapple Lasso",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Norion - Docking Hub Alpha",
        segments: []
      },{
        id: "metroid/grappleBeam",
        name: "Grapple Swing",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Bryyo - Reliquary I",
        segments: []
      },{
        id: "metroid/grappleVoltage",
        name: "Grapple Voltage",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Gandrayda Defeated",
        segments: []
      },{
        id: "metroid/shipGrapple",
        name: "Ship Grapple",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Skytown - Eastern Skytown - Skytown Federation Landing Site",
        segments: []
      },{
        id: "metroid/hyperGrapple",
        name: "Hyper Grapple",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Omega Ridley Defeated",
        segments: []
      },{
        id: "metroid/ped",
        name: "P.E.D. Suit",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/phazonSuit",
        name: "Corrupted Hypermode",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/hazardShield",
        name: "Hazard Shield",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Pirate Homeworld - Pirate Research - Craneyard",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/screwAttackA",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Bryyo - Bryyo Ice - Hall of Remembrance",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/commandVisorA",
        name: "Command Visor",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/corruptionXRayVisor",
        name: "X-Ray Visor",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Pirate Homeworld - Pirate Command - Command Vault",
        segments: []
      },{
        id: "metroid/energyTankA",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Expansions",
        start: 0,
        max: 50,
        segments: []
      },{
        id: "metroid/shipMissileExpansion",
        name: "Ship Missile Expansions",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/theronianBomb",
        name: "Theronian Bomb Components",
        start: 0,
        max: 3,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },/*{
        id: "metroid/norion",
        name: "Norion Complete",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/bryyo",
        name: "Bryyo Complete",
        start: 0,
        max: 1,
        over: "metroid/F_Boss_Ex",
        overText: "Mogenar required",
        segments: []
      },{
        id: "metroid/theronianBomb",
        name: "",
        start: 0,
        max: 3,
        segments: [
          {
            id: "metroid/theronianBomb",
            name: "Theronian Bomb Components",
            over: "metroid/F_Boss_Ex",
            overText: "Helios required",
            start: 0,
            max: 3,
          },{
            id: "metroid/elysia",
            name: "Elysia Complete",
            over: "metroid/F_Boss_Ex",
            overText: "Helios required",
            start: 1,
            max: 1,
          },
        ]
      },{
        id: "metroid/urtraghus",
        name: "Pirate Homeworld Complete",
        start: 0,
        max: 1,
        over: "metroid/F_Boss_Ex",
        overText: "Omega Ridley required",
        segments: []
      },*/{
        id: "metroid/energyCell",
        name: "",
        start: 0,
        max: 9,
        back: "metroid/valhalla",
        segments: [
          {
            id: "metroid/energyCell",
            name: "Energy Cells",
            start: 0,
            max: 9,
            over: "metroid/C_Fuse",
            overText: "Hints Acquired",
          },{
            id: "metroid/pirateCode",
            name: "Pirate Code",
            start: 0,
            max: 1
          },{
            id: "metroid/phaaze",
            name: "Phaaze accessible",
            start: 0,
            max: 1
          }
        ]
      },
    ]
  }, 
  "m2ros": {
    width: 4,
    items: [
      {
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/bombB",
        sprite: "metroid/2_bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spiderBall",
        sprite: "metroid/2_spider",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/springBall",
        sprite: "metroid/2_spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/barrier",
        sprite: "metroid/2_barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/highJump",
        sprite: "metroid/2_high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spaceJump",
        sprite: "metroid/2_space",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/screwAttack",
        sprite: "metroid/2_screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/iceBeamD",
        sprite: "metroid/2_ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/waveBeam",
        sprite: "metroid/2_wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spazerBeamC",
        sprite: "metroid/2_spazer",
        name: "Spazer Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/plasmaBeamE",
        sprite: "metroid/2_plasma",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/energyTank",
        sprite: "metroid/2_energy",
        name: "Energy Tanks",
        start: 0,
        max: 6,
        segments: []
      },{
        id: "metroid/missileTank",
        sprite: "metroid/2_missile",
        name: "Missile Tanks",
        start: 0,
        max: 22,
        segments: []
      },{
        id: "metroid/monsterDna",
        name: "Metroids defeated",
        sprite: "metroid/2_monsters",
        start: 0,
        max: 49,
        segments: [
          {
            id: "metroid/monsterDna",
            name: "Phase 1",
            sprite: "metroid/2_monsters",
            type: "counter",
            start: 0,
            max: 1,
          },{
            id: "metroid/monsterDna",
            name: "Phase 2",
            sprite: "metroid/2_monsters",
            start: 0,
            max: 4,
          },{
            id: "metroid/monsterDna",
            name: "Phase 3",
            sprite: "metroid/2_monsters",
            start: 0,
            max: 8,
          },{
            id: "metroid/monsterDna",
            name: "Phase 4",
            sprite: "metroid/2_monsters",
            start: 0,
            max: 10,
          },{
            id: "metroid/monsterDna",
            name: "Phase 5",
            sprite: "metroid/2_monsters",
            type: "counter",
            start: 0,
            max: 1,
          },{
            id: "metroid/monsterDna",
            name: "Phase 6",
            sprite: "metroid/2_monsters",
            start: 0,
            max: 2,
          },{
            id: "metroid/monsterDna",
            name: "Phase 7",
            sprite: "metroid/2_monsters",
            start: 0,
            max: 7,
          },{
            id: "metroid/monsterDna",
            name: "Phase 8",
            sprite: "metroid/2_monsters",
            start: 0,
            max: 2,
          },{
            id: "metroid/monsterDna",
            name: "Phase 9",
            sprite: "metroid/2_monsters",
            start: 0,
            max: 3,
          },{
            id: "metroid/monsterDna",
            name: "Phase 10",
            sprite: "metroid/2_monsters",
            start: 0,
            max: 9,
          },
        ]
      },{
        id: "metroid/monster",
        sprite: "metroid/2_baby",
        name: "Baby Metroid",
        start: 0,
        max: 1,
        segments: []
      },
    ]
  },
  "am2r": {
    width: 8,
    items: [
      {
        id: "metroid/morphBall",
        name: "Morph Ball",
        sprite: "metroid/am2r_morph",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/barrier",
        name: "Varia Suit",
        sprite: "metroid/am2r_barrier",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/gravitySuit",
        name: "Gravity Suit",
        sprite: "metroid/am2r_gravity",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/chargeBeamF",
        name: "Charge Beam",
        sprite: "metroid/am2r_charge",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/waveBeam",
        name: "Wave Beam",
        sprite: "metroid/am2r_wave",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spazerBeamA",
        name: "Spazer Beam",
        sprite: "metroid/am2r_spazer",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/plasmaBeamE",
        name: "Plasma Beam",
        sprite: "metroid/am2r_plasma",
        over: "metroid/F_Boss",
        overText: "Tester Defeated",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/iceBeamD",
        name: "Ice Beam",
        sprite: "metroid/am2r_ice",
        over: "metroid/F_Boss",
        overText: "Serris Defeated",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/bombB",
        name: "Bombs",
        sprite: "metroid/am2r_bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spiderBall",
        name: "Spider Ball",
        sprite: "metroid/am2r_spider",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/springBall",
        name: "Spring Ball",
        sprite: "metroid/am2r_spring",
        over: "metroid/F_Boss",
        overText: "Arachnus Defeated",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/powerGrip",
        name: "Power Grip",
        sprite: "metroid/am2r_grip",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/highJump",
        name: "High Jump Boots",
        sprite: "metroid/am2r_high",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spaceJump",
        name: "Space Jump",
        sprite: "metroid/am2r_space",
        over: "metroid/F_Boss",
        overText: "Torizo Defeated",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/speedBoosterB",
        name: "Speed Booster",
        sprite: "metroid/am2r_speed",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/screwAttack",
        name: "Screw Attack",
        sprite: "metroid/am2r_screw",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/energyTank",
        name: "Energy Tanks",
        sprite: "metroid/am2r_energy",
        start: 0,
        max: 10,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Tanks",
        sprite: "metroid/am2r_missile",
        start: 0,
        max: 45,
        segments: []
      },{
        id: "metroid/superMissileTank",
        name: "Super Missile Tanks",
        sprite: "metroid/am2r_smissile",
        start: 0,
        max: 10,
        segments: []
      },{
        id: "metroid/powerBombTank",
        name: "Power Bomb Tanks",
        sprite: "metroid/am2r_pbombs",
        over: "metroid/Z_Orb",
        overText: "Power Plant Destroyed",
        start: 0,
        max: 10,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/monsterDna",
        name: "Metroids defeated",
        start: 0,
        max: 0,
        segments: [
          {
            id: "metroid/monsterDna",
            name: "Surface",
            sprite: "metroid/am2r_monster",
            type: "counter",
            start: 0,
            max: 1,
          },{
            id: "metroid/monsterDna",
            name: "Golden Temple",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 4,
          },{
            id: "metroid/monsterDna",
            name: "Hydro Station",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 8,
          },{
            id: "metroid/monsterDna",
            name: "Industrial Complex",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 10,
          },{
            id: "metroid/monsterDna",
            name: "Research Site",
            sprite: "metroid/am2r_monster",
            type: "counter",
            start: 0,
            max: 2,
          },{
            id: "metroid/monsterDna",
            name: "Mining Facility",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 2,
          },{
            id: "metroid/monsterDna",
            name: "The Tower",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 6,
          },{
            id: "metroid/monsterDna",
            name: "Distribution Center",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 8,
          },/* {
            id: "metroid/monsterDna",
            name: "Upper Areas",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 38,
          }, */{
            id: "metroid/monsterDna",
            name: "Rescue Team Campsite",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 2,
          },{
            id: "metroid/monsterDna",
            name: "The Nest",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 3,
          },{
            id: "metroid/monsterDna",
            name: "Genetics Laboratory",
            sprite: "metroid/am2r_monster",
            start: 0,
            max: 9,
          },
        ]
      },{
        id: "metroid/am2rPowerOrb",
        name: "Power Orbs Distributed",
        sprite: "metroid/am2r_battery",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/monster",
        name: "Baby Metroid",
        sprite: "metroid/am2r_baby",
        start: 0,
        max: 1,
        segments: []
      },
    ]
  },
  "msr": {
    width: 7,
    items: [
      {
        id: "metroid/morphBall",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/bombB",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spiderBall",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/springBall",
        name: "Spring Ball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Arachnus Defeated",
        segments: []
      },{
        id: "metroid/powerBomb",
        name: "Power Bomb",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Area 6 - Diggernaut Defeated",
        segments: []
      },{
        id: "metroid/barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/gravitySuit",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/scanPulse",
        name: "Scan Pulse",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/lightningShield",
        name: "Lightning Shield",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/beamBurst",
        name: "Beam Burst",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/phaseDrift",
        name: "Phase Drift",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/highJump",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spaceJump",
        name: "Space Jump",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Area 4 - Survived Diggernaut",
        segments: []
      },{
        id: "metroid/chargeBeamD",
        name: "Charge Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/iceBeamC",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/waveBeam",
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spazerBeamB",
        name: "Spazer Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/plasmaBeamD",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/grappleBeam",
        name: "Grapple Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/screwAttack",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/energyTank",
        name: "Energy Tanks",
        start: 0,
        max: 9,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Tanks",
        start: 0,
        max: 76,
        segments: []
      },{
        id: "metroid/superMissileTank",
        name: "Super Missile Tanks",
        start: 0,
        max: 29,
        segments: []
      },{
        id: "metroid/powerBombTank",
        name: "Power Bomb Tanks",
        start: 0,
        max: 13,
        segments: []
      },{
        id: "metroid/aeionExpansion",
        name: "Aeion Expansion",
        start: 0,
        max: 14,
        segments: []
      },{
        id: "metroid/monsterDna",
        name: "Metroids defeated",
        start: 0,
        max: 50,
        segments: [
          {
            id: "metroid/monsterDna",
            name: "Surface",
            type: "counter",
            start: 0,
            max: 1,
          },{
            id: "metroid/monsterDna",
            name: "Area 1",
            start: 0,
            max: 4,
          },{
            id: "metroid/monsterDna",
            name: "Area 2",
            start: 0,
            max: 8,
          },{
            id: "metroid/monsterDna",
            name: "Area 3",
            start: 0,
            max: 10,
          },{
            id: "metroid/monsterDna",
            name: "Area 4",
            type: "counter",
            start: 0,
            max: 4,
          },{
            id: "metroid/monsterDna",
            name: "Area 5",
            start: 0,
            max: 7,
          },{
            id: "metroid/monsterDna",
            name: "Area 6",
            type: "counter",
            start: 0,
            max: 2,
          },{
            id: "metroid/monsterDna",
            name: "Area 7",
            start: 0,
            max: 3,
          },{
            id: "metroid/monsterDna",
            name: "Area 8",
            start: 0,
            max: 11,
          },
        ]
      },{
        id: "metroid/monster",
        name: "Baby Metroid",
        start: 0,
        max: 1,
        segments: []
      },
    ]
  },
  "sm": {
    width: 8,
    items: [
      {
        id: "metroid/morphBall",
        sprite: "metroid/s_morph",
        name: "Morphing Ball",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Vanilla Morph Ball Item Acquired",
        segments: []
      },{
        id: "metroid/bombB",
        sprite: "metroid/s_bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Torizo Defeated",
        segments: []
      },{
        id: "metroid/springBall",
        sprite: "metroid/s_spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Spring Ball Orb Acquired",
        segments: []
      },{
        id: "metroid/screwAttack",
        sprite: "metroid/s_screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Screw Attack Orb Acquired",
        segments: []
      },{
        id: "metroid/barrier",
        sprite: "metroid/s_barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Kraid Defeated",
        segments: []
      },{
        id: "metroid/gravitySuit",
        sprite: "metroid/s_grav",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Gravity Suit Orb Acquired",
        segments: []
      },{
        id: "metroid/xRayScope",
        sprite: "metroid/s_xray",
        name: "X-Ray Scope",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "X-Ray Scope Orb Acquired",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/chargeBeamF",
        name: "Charge Beam",
        sprite: "metroid/s_charge",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Charge Beam Orb Acquired",
        segments: []
      },{
        id: "metroid/spazerBeamC",
        sprite: "metroid/s_spazer",
        name: "Spazer",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Spazer Orb Acquired",
        segments: []
      },{
        id: "metroid/iceBeamD",
        sprite: "metroid/s_ice",
        name: "Ice Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Ice Beam Orb Acquired",
        segments: []
      },{
        id: "metroid/waveBeam",
        sprite: "metroid/s_wave",
        name: "Wave Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Wave Beam Orb Acquired",
        segments: []
      },{
        id: "metroid/plasmaBeamE",
        sprite: "metroid/s_plasma",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Plasma Beam Orb Acquired",
        segments: []
      },{
        id: "metroid/highJump",
        sprite: "metroid/s_high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "High Jump Orb Acquired",
        segments: []
      },{
        id: "metroid/speedBoosterB",
        sprite: "metroid/s_speed",
        name: "Speed Booster",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Speed Booster Orb Acquired",
        segments: []
      },{
        id: "metroid/spaceJump",
        sprite: "metroid/s_space",
        name: "Space Jump",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Draygon Defeated",
        segments: []
      },{
        id: "metroid/energyTank",
        sprite: "metroid/s_energy",
        name: "Energy Tanks",
        start: 0,
        max: 14,
        segments: []
      },{
        id: "metroid/missileTank",
        sprite: "metroid/s_missile",
        name: "Missile Tanks",
        start: 0,
        max: 46,
        segments: []
      },{
        id: "metroid/superMissileTank",
        sprite: "metroid/s_super",
        name: "Super Missile Tanks",
        start: 0,
        max: 10,
        segments: []
      },{
        id: "metroid/powerBombTank",
        sprite: "metroid/s_pbomb",
        name: "Power Bomb Tanks",
        start: 0,
        max: 10,
        segments: []
      },{
        id: "metroid/reserveTank",
        sprite: "metroid/s_reserve",
        name: "Reserve Tanks",
        start: 0,
        max: 4,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/boss",
        sprite: "metroid/s_boss",
        name: "Bosses",
        start: 0,
        max: 4,
        segments: []
      },{
        id: "metroid/etedach",
        name: "Animals Rescued",
        start: 0,
        max: 1,
        segments: []
      },
    ]
  },
  "smz3": {
    width: 15,
    items: [
      {
        id: "metroid/morphBall",
        name: "Morphing Ball",
        sprite: "metroid/s_morph",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Vanilla Morph Ball Item Acquired",
        segments: []
      },{
        id: "metroid/bombB",
        sprite: "metroid/s_bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Torizo Defeated",
        segments: []
      },{
        id: "metroid/springBall",
        sprite: "metroid/s_spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Spring Ball Orb Acquired",
        segments: []
      },{
        id: "metroid/screwAttack",
        sprite: "metroid/s_screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Screw Attack Orb Acquired",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/bow",
        name: "", // "Bow",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "L1 Big Chest",
        segments: [ // assuming progressive bow
          {
            id: "zelda/bow",
            name: "Bow and Arrows",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "L1 Big Chest",
          },{
            id: "zelda/bowSilver",
            name: "Bow and Silver Arrows",
            start: 0,
            max: 1
          }
        ]
      },/* { // in case of nonprogressive bow
        id: "zelda/silverArrows",
        name: "Silver Arrows",
        start: 0,
        max: 1,
        segments: []
      }, *//* {
        id: "zelda/boomerang",
        name: "",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "HC Basement Chest",
        segments: [ */
          {
            id: "zelda/boomerang",
            name: "Boomerang",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "HC Basement Chest",
          },{
            id: "zelda/magicalBoomerang",
            name: "Magical Boomerang",
            start: 0,
            max: 1
          }/* 
        ]
      } */,{
        id: "zelda/hookshot",
        name: "Hookshot",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D2 Big Chest",
        segments: []
      },{
        id: "zelda/bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/powder",
        name: "Magic Powder",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/mushroom",
        name: "Mushroom",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/barrier",
        name: "Varia Suit",
        sprite: "metroid/s_barrier",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Kraid Defeated",
        segments: []
      },{
        id: "metroid/gravitySuit",
        sprite: "metroid/s_grav",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Gravity Suit Orb Acquired",
        segments: []
      },{
        id: "metroid/xRayScope",
        sprite: "metroid/s_xray",
        name: "X-Ray Scope",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "X-Ray Scope Orb Acquired",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/fireRod",
        name: "Fire Rod",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D3 Big Chest",
        segments: []
      },{
        id: "zelda/iceRod",
        name: "Ice Rod",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/bombos",
        name: "Bombos",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/ether",
        name: "Ether",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/quake",
        name: "Quake",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/chargeBeamF",
        name: "Charge Beam",
        sprite: "metroid/s_charge",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Charge Beam Orb Acquired",
        segments: []
      },{
        id: "metroid/spazerBeamC",
        name: "Spazer",
        sprite: "metroid/s_spazer",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Spazer Orb Acquired",
        segments: []
      },{
        id: "metroid/iceBeamD",
        name: "Ice Beam",
        sprite: "metroid/s_ice",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Ice Beam Orb Acquired",
        segments: []
      },{
        id: "metroid/waveBeam",
        name: "Wave Beam",
        sprite: "metroid/s_wave",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Wave Beam Orb Acquired",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/lamp",
        name: "Lamp",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/hammer",
        name: "Magic Hammer",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D1 Big Chest",
        segments: []
      },{
        id: "zelda/shovel",
        name: "Shovel",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/flute",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/flute",
            name: "Flute",
            start: 0,
            max: 1,
          },{
            id: "zelda/fluteBird",
            name: "Flute (Warping enabled)",
            start: 0,
            max: 1,
          }
        ]
      },{
        id: "zelda/net",
        name: "Bug-Catching Net",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/book",
        name: "Book of Mudora",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/plasmaBeamE",
        name: "Plasma Beam",
        sprite: "metroid/s_plasma",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Plasma Beam Orb Acquired",
        segments: []
      },{
        id: "metroid/highJump",
        name: "High Jump Boots",
        sprite: "metroid/s_high",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "High Jump Orb Acquired",
        segments: []
      },{
        id: "metroid/speedBoosterB",
        name: "Speed Booster",
        sprite: "metroid/s_speed",
        start: 0,
        max: 1,
        over: "metroid/Z_Orb",
        overText: "Speed Booster Orb Acquired",
        segments: []
      },{
        id: "metroid/spaceJump",
        name: "Space Jump",
        sprite: "metroid/s_space",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Draygon Defeated",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/bottle",
        name: "Bottle",
        start: 0,
        max: 4,
        segments: []
      },{
        id: "zelda/somaria",
        name: "Cane of Somaria",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D6 Big Chest",
        segments: []
      },{
        id: "zelda/byrna",
        name: "Cane of Byrna",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/cape",
        name: "Magic Cape",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/mirror",
        name: "Magic Mirror",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/sword",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/sword",
            name: "Fighter's Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/masterSword",
            name: "Master Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/temperedSword",
            name: "Tempered Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/goldenSword",
            name: "Golden Sword",
            start: 0,
            max: 1,
          }
        ]
      },{
        id: "zelda/shield",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/shield",
            name: "Fighter's Shield",
            start: 0,
            max: 1,
          },{
            id: "zelda/redShield",
            name: "Red Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/mirrorShield",
            name: "Mirror Sword",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "D7 Big Chest",
          }
        ]
      },{
        id: "zelda/greenJerkin",
        name: "",
        start: 1,
        max: 1,
        segments: [
          {
            id: "zelda/greenJerkin",
            name: "Green Jerkin",
            start: 1,
            max: 1,
          },{
            id: "zelda/blueMail",
            name: "Blue Mail",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "D5 Big Chest",
          },{
            id: "zelda/redMail",
            name: "Red Mail",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "GT Big Chest",
          }
        ]
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/energyTank",
        name: "Energy Tanks",
        sprite: "metroid/s_energy",
        start: 0,
        max: 14,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Tanks",
        sprite: "metroid/s_missile",
        start: 0,
        max: 46,
        segments: []
      },{
        id: "metroid/superMissileTank",
        name: "Super Missile Tanks",
        sprite: "metroid/s_super",
        start: 0,
        max: 10,
        segments: []
      },{
        id: "metroid/powerBombTank",
        name: "Power Bomb Tanks",
        sprite: "metroid/s_pbomb",
        start: 0,
        max: 10,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/boots",
        name: "Pegasus Boots",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/powerGlove",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/powerGlove",
            name: "Power Glove",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "L2 Big Chest",
          },{
            id: "zelda/titansMitt",
            name: "Titan's Mitt",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "D4 Big Chest",
          }
        ]
      },{
        id: "zelda/flipper",
        name: "Zora Flipper",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/moonPearl",
        name: "Moon Pearl",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "L3 Big Chest",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/halfMagic",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/halfMagic",
            name: "Half Magic",
            start: 0,
            max: 1,
          },{
            id: "zelda/quarterMagic",
            name: "Quarter Magic",
            start: 0,
            max: 1,
          }
        ]
      },{
        id: "zelda/arrowsExp",
        name: "Arrow Capacity",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "zelda/bombsExp",
        name: "Bomb Capacity",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/reserveTank",
        name: "Reserve Tanks",
        sprite: "metroid/s_reserve",
        start: 0,
        max: 4,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/boss",
        name: "Bosses",
        sprite: "metroid/s_boss",
        start: 0,
        max: 4,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/ep",
        name: "Eastern Palace",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Armos Knights Defeated",
        back: "zelda/ep",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/dp",
        name: "Desert Palace",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Lanmolas Defeated",
        back: "zelda/dp",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/toh",
        name: "Tower of Hera",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Moldorm Defeated",
        back: "zelda/toh",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/pod",
        name: "Palace of Darkness",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Helmasaur King Defeated",
        back: "zelda/pod",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/sp",
        name: "Swamp Palace",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Arrghus Defeated",
        back: "zelda/sp",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/sw",
        name: "Skull Woods",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Mothula Defeated",
        back: "zelda/sw",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/tt",
        name: "Thieves' Town",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Blind Defeated",
        back: "zelda/tt",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/ip",
        name: "Ice Palace",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Kholdstare Defeated",
        back: "zelda/ip",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/mm",
        name: "Misery Mire",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Vitreous Defeated",
        back: "zelda/mm",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/tr",
        name: "Turtle Rock",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Trinexx Defeated",
        back: "zelda/tr",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },
    ]
  },
  "mom": {
    width: 8,
    items: [
      {
        id: "metroid/morphBall",
        name: "Morph Ball",
        start: 1,
        max: 1,
        segments: []
      },{
        id: "metroid/bombA",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/missile",
        name: "Missiles",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/superMissile",
        name: "Super Missiles",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/seekerLauncher",
        name: "Seeker Missiles",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/barrier",
        name: "Varia Feature",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/gravitySuit",
        name: "Gravity Feature",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/grappleBeam",
        name: "Grapple Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/diffusionBeam",
        name: "Diffusion Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/iceBeamD",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/waveBeam",
        name: "Wave Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/plasmaBeamE",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/speedBoosterA",
        name: "Speed Booster",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/spaceJump",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/screwAttack",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/powerBomb",
        name: "Power Bomb",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/energyTank",
        name: "Energy Tanks",
        start: 0,
        max: 5,
        segments: []
      },{
        id: "metroid/missileTank",
        name: "Missile Tanks",
        start: 0,
        max: 70,
        segments: []
      },{
        id: "metroid/chargeAccel",
        name: "Accel Charges",
        start: 0,
        max: 6,
        segments: []
      },{
        id: "metroid/energyPart",
        name: "Energy Parts",
        start: 0,
        max: 16,
        segments: []
      },{
        id: "metroid/eRecoveryTank",
        name: "E-Recovery Tanks",
        start: 0,
        max: 3,
        segments: []
      },
    ]
  },
  "mf": {
    width: 7,
    items: [
      {
        id: "metroid/missileA",
        name: "Missiles",
        start: 0,
        max: 1,
        over: "metroid/F_Data",
        overText: "Operations Deck - Data Room",
        segments: []
      },{
        id: "metroid/missile",
        name: "Super Missiles",
        start: 0,
        max: 1,
        over: "metroid/F_Data",
        overText: "Sector 3 PYR - Data Room",
        segments: []
      },{
        id: "metroid/iceMissile",
        name: "Ice Missiles",
        start: 0,
        max: 1,
        over: "metroid/F_Data",
        overText: "Sector 5 ARC - Data Room",
        segments: []
      },{
        id: "metroid/superMissile",
        name: "Diffusion Effect",
        start: 0,
        max: 1,
        over: "metroid/F_Data",
        overText: "Sector 4 AQA - Data Room",
        segments: []
      },/*{
        id: "metroid/missile",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "metroid/missileA",
            name: "Missiles",
            start: 0,
            max: 1,
            over: "metroid/F_Data",
            overText: "Operations Deck - Data Room"
          },{
            id: "metroid/missile",
            name: "Super Missiles",
            start: 0,
            max: 1,
            over: "metroid/F_Data",
            overText: "Sector 3 PYR - Data Room",
          },{
            id: "metroid/iceMissile",
            name: "Ice Missiles",
            start: 0,
            max: 1,
            over: "metroid/F_Data",
            overText: "Sector 5 ARC - Data Room",
          },{
            id: "metroid/superMissile",
            name: "Diffusion Effect",
            start: 0,
            max: 1,
            over: "metroid/F_Data",
            overText: "Sector 4 AQA - Data Room",
          },
        ]
      },*/{
        id: "metroid/morphBall",
        name: "Morph Ball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Arachnus Defeated",
        segments: []
      },{
        id: "metroid/bombB",
        name: "Bombs",
        start: 0,
        max: 1,
        over: "metroid/F_Data",
        overText: "Sector 2 TRO - Data Room",
        segments: []
      },{
        id: "metroid/powerBomb",
        name: "Power Bombs",
        start: 0,
        max: 1,
        over: "metroid/F_Data",
        overText: "Sector 5 ARC - Data Room",
        segments: []
      },/*{
        id: "metroid/powerBeam",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "metroid/powerBeamD",
            name: "Power Beam",
            start: 1,
            max: 1,
          },{
            id: "metroid/chargeBeamE",
            name: "Charge Beam",
            start: 0,
            max: 1,
            over: "metroid/F_Boss",
            overText: "Elephant Bird Defeated",
          },{
            id: "metroid/wideBeamB",
            name: "Wide Beam",
            start: 0,
            max: 1,
            over: "metroid/F_Boss",
            overText: "Wide Laser Core-X Defeated",
          },{
            id: "metroid/plasmaBeamF",
            name: "Plasma Beam",
            start: 0,
            max: 1,
            over: "metroid/F_Boss",
            overText: "Nettori Defeated",
          },{
            id: "metroid/waveBeamC",
            name: "Wave Beam",
            start: 0,
            max: 1,
            over: "metroid/F_Boss",
            overText: "SR-BOX 2 Defeated",
          },{
            id: "metroid/iceBeamE",
            name: "Ice Beam",
            start: 0,
            max: 1,
          }
        ]
      },*/{
        id: "metroid/chargeBeamF",
        name: "Charge Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Elephant Bird Defeated",
        segments: []
      },{
        id: "metroid/wideBeamA",
        name: "Wide Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Wide Laser Core-X Defeated",
        segments: []
      },{
        id: "metroid/plasmaBeamE",
        name: "Plasma Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Nettori Defeated",
        segments: []
      },{
        id: "metroid/waveBeam",
        name: "Wave Beam",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "SR-BOX 2 Defeated",
        segments: []
      },{
        id: "metroid/iceBeamD",
        name: "Ice Beam",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/highJump",
        name: "Hi-Jump and Jumpball",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Zazabi Defeated",
        segments: []
      },{
        id: "metroid/speedBoosterB",
        name: "Speed Booster",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Serris Defeated",
        segments: []
      },{
        id: "metroid/spaceJump",
        name: "Space Jump",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Yakuza Defeated",
        segments: []
      },{
        id: "metroid/screwAttack",
        name: "Screw Attack",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Neo-Ridley-X Defeated",
        segments: []
      },/*{
        id: "metroid/fusionSuit",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "metroid/barrier",
            name: "Varia Suit",
            start: 0,
            max: 1,
            over: "metroid/F_Boss",
            overText: "Barrier Core-X Defeated",
          },{
            id: "metroid/gravitySuit",
            name: "Gravity Suit",
            start: 0,
            max: 1,
            over: "metroid/F_Boss",
            overText: "Nightmare Defeated",
          }
        ]
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },*/{
        id: "metroid/barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Barrier Core-X Defeated",
        segments: []
      },{
        id: "metroid/gravitySuit",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        over: "metroid/F_Boss",
        overText: "Nightmare Defeated",
        segments: []
      },/* {
        id: "metroid/fullPowerSuit",
        name: "Final Suit",
        start: 0,
        max: 1,
        segments: []
      }, */{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "metroid/energyTank",
        sprite: "metroid/f_energy",
        name: "Energy Tanks",
        start: 0,
        max: 20,
        segments: []
      },{
        id: "metroid/missileTank",
        sprite: "metroid/f_missile",
        name: "Missile Tanks",
        start: 0,
        max: 48,
        segments: []
      },{
        id: "metroid/powerBombTank",
        sprite: "metroid/f_pbomb",
        name: "Power Bomb Tanks",
        start: 0,
        max: 32,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },/* {
        id: "metroid/pumpControlUnit",
        name: "Water level lowered.",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/mainBoiler",
        name: "Cooling unit operational.",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/etedach",
        name: "Lock disengaged. Gate opening.",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/reactorCore",
        name: "Auxiliary power engaged.",
        start: 0,
        max: 1,
        segments: []
      }, *//* {
        id: "metroid/mainDeck",
        name: "Main Deck",
        segments: [
          {
            id: "metroid/mainDeck",
            name: "Sector Clear",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "metroid/sector1SRX",
        name: "Sector 1 SRX",
        segments: [
          {
            id: "metroid/sector1SRX",
            name: "Sector Clear",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "metroid/sector2TRO",
        name: "Sector 2 TRO",
        segments: [
          {
            id: "metroid/sector2TRO",
            name: "Sector Clear",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "metroid/sector3PYR",
        name: "Sector 3 PYR",
        segments: [
          {
            id: "metroid/sector3PYR",
            name: "Sector Clear",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "metroid/sector4AQA",
        name: "Sector 4 AQA",
        segments: [
          {
            id: "metroid/sector4AQA",
            name: "Sector Clear",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "metroid/sector5ARC",
        name: "Sector 5 ARC",
        segments: [
          {
            id: "metroid/sector5ARC",
            name: "Sector Clear",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "metroid/sector6NOC",
        name: "Sector 6 NOC",
        segments: [
          {
            id: "metroid/sector6NOC",
            name: "Sector Clear",
            start: 0,
            max: 1,
          },
        ]
      }, */{
        id: "metroid/securityL0",
        name: "Security Level 0",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/securityL1",
        name: "Security Level 1",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/securityL2",
        name: "Security Level 2",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/securityL3",
        name: "Security Level 3",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "metroid/securityL4",
        name: "Security Level 4",
        start: 0,
        max: 1,
        segments: []
      },
    ]
  },
  "thf": {
    width: 6,
    items: [
      {
        id: "zelda/raft",
        name: "Raft",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/magicBook",
        name: "Magic Book",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/magicBook",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/greenJerkin",
            name: "Green Jerkin",
            start: 1,
            max: 1,
          },{
            id: "zelda/blueRing",
            name: "Blue Ring",
            start: 0,
            max: 1,
          },{
            id: "zelda/redRing",
            name: "Red Ring",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "zelda/ladder",
        name: "Ladder",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/lionKey",
        name: "Magic Key",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/bracelets",
        name: "Power Bracelet",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/boomerang",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/woodenBoomerang",
            name: "Boomerang",
            start: 0,
            max: 1,
          },{
            id: "zelda/magicBoomerang",
            name: "Magical Boomerang",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "zelda/bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/arrow",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/arrow",
            name: "Arrow",
            start: 0,
            max: 1,
          },{
            id: "zelda/silverArrows",
            name: "Silver Arrow",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "zelda/heroBow",
        name: "Bow",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/candle",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/candle",
            name: "Blue Candle",
            start: 0,
            max: 1,
          },{
            id: "zelda/redCandle",
            name: "Red Candle",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/recorder",
        name: "Whistle",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/bait",
        name: "Bait",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/note",
        name: "Note",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/magicRod",
        name: "Magic Rod",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/woodenSword",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/woodenSword",
            name: "Wooden Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/whiteSword",
            name: "White Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/magicalSword",
            name: "Magical Sword",
            start: 0,
            max: 1,
          },
        ]
      },{
        id: "zelda/magicalShield",
        name: "Magical Shield",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/heartContainer",
        name: "Heart Containers",
        start: 3,
        max: 16,
        segments: []
      },{
        id: "zelda/bombsExp",
        name: "I bet you'd like to carry more Bombs",
        start: 0,
        max: 2,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/triforce",
        name: "Triforce Pieces",
        start: 0,
        max: 8,
        segments: []
      },
    ]
  },
  "aol": {
    width: 8,
    items: [
      {
        id: "zelda/redMail",
        name: "Shield Spell",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/jumpSpell",
        name: "Jump Spell",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/lifeSpell",
        name: "Life Spell",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/fairySpell",
        name: "Fairy Spell",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/fireSpell",
        name: "Fire Spell",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/mirrorShield",
        name: "Reflect Spell",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/spellSpell",
        name: "Spell Spell",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/thunder",
        name: "Thunder Spell",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/trophy",
        name: "Trophy",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/mirror",
        name: "Mirror",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/waterOfLife",
        name: "Water of Life",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/water",
        name: "Water",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/child",
        name: "Child",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/note",
        name: "Bagu's Note",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/redCandle",
        name: "Candle",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/powerGlove",
        name: "Glove",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/raft",
        name: "Raft",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/wingedBoots",
        name: "Boots",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/whistle",
        name: "Flute",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/cross",
        name: "Cross",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/hammer",
        name: "Hammer",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/hiddenKey",
        name: "Magic Key",
        start: 0,
        max: 1,
        segments: []
      },/* {
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/parapa", // "zelda/palace",
        name: "Parapa Palace Crystal",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/midoro", // "zelda/palace",
        name: "Midoro Palace Crystal",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/island", // "zelda/palace",
        name: "Island Palace Crystal",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/maze", // "zelda/palace",
        name: "Maze Palace Crystal",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/onthesea", // "zelda/palace",
        name: "Palace On The Sea Crystal",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/hidden", // "zelda/palace",
        name: "Hidden Palace Crystal",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      }, */{
        id: "zelda/heartContainer",
        name: "Heart Containers",
        start: 4,
        max: 8,
        segments: []
      },{
        id: "zelda/magicContainer",
        name: "Magic Containers",
        start: 4,
        max: 8,
        segments: []
      },{
        id: "zelda/downStab",
        name: "Down Stab",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/upStab",
        name: "Up Stab",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/heart",
        name: "Life",
        start: 1,
        max: 8,
        segments: []
      },{
        id: "zelda/magic",
        name: "Magic",
        start: 1,
        max: 8,
        segments: []
      },{
        id: "zelda/attack",
        name: "Attack",
        start: 1,
        max: 8,
        segments: []
      },{
        id: "zelda/palace",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/palace",
            name: "Palace Crystals",
            start: 0,
            max: 6,
          },{
            id: "zelda/triforce",
            name: "Great Palace open",
            start: 0,
            max: 1,
          },
        ]
      },
    ]
  },
  "alttp": {
    width: 8,
    items: [
      {
        id: "zelda/bow",
        name: "Bow",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "L1 Big Chest",
        segments: [
          {
            id: "zelda/bow",
            name: "Arrows",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "L1 Big Chest",
          },{
            id: "zelda/bowSilver",
            name: "Silver Arrows",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "zelda/boomerang",
        name: "",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "HC Basement Chest",
        segments: [
          {
            id: "zelda/boomerang",
            name: "Boomerang",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "HC Basement Chest",
          },{
            id: "zelda/magicalBoomerang",
            name: "Magical Boomerang",
            start: 0,
            max: 1
          }
        ]
      },{
        id: "zelda/hookshot",
        name: "Hookshot",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D2 Big Chest",
        segments: []
      },{
        id: "zelda/bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/powder",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/mushroom",
            name: "Mushroom",
            start: 0,
            max: 1,
          },{
            id: "zelda/powder",
            name: "Magic Powder",
            start: 0,
            max: 1,
          }
        ]
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/pendantOfPower",
        name: "Tower of Hera - Pendent of Power",
        start: 0,
        max: 1,
        back: "zelda/toh",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/fireRod",
        name: "Fire Rod",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D3 Big Chest",
        segments: []
      },{
        id: "zelda/iceRod",
        name: "Ice Rod",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/bombos",
        name: "Bombos",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/ether",
        name: "Ether",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/quake",
        name: "Quake",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/pendantOfWisdom",
        name: "Desert Palace - Pendent of Wisdom",
        start: 0,
        max: 1,
        back: "zelda/dp",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/pendantOfCourage",
        name: "Eastern Palace - Pendent of Courage",
        start: 0,
        max: 1,
        back: "zelda/ep",
        segments: []
      },{
        id: "zelda/lamp",
        name: "Lamp",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/hammer",
        name: "Magic Hammer",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D1 Big Chest",
        segments: []
      },{
        id: "zelda/flute",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/shovel",
            name: "Shovel",
            start: 0,
            max: 1,
          },{
            id: "zelda/flute",
            name: "Flute",
            start: 0,
            max: 1,
          },{
            id: "zelda/fluteBird",
            name: "Flute (Warping enabled)",
            start: 0,
            max: 1,
          }
        ]
      },{
        id: "zelda/net",
        name: "Bug-Catching Net",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/book",
        name: "Book of Mudora",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/agahnim",
        name: "Agahnim's Tower - Agahnim defeated",
        start: 0,
        max: 1,
        back: "zelda/at",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/bottle",
        name: "Bottle",
        start: 0,
        max: 4,
        segments: []
      },{
        id: "zelda/somaria",
        name: "Cane of Somaria",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D6 Big Chest",
        segments: []
      },{
        id: "zelda/byrna",
        name: "Cane of Byrna",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/cape",
        name: "Magic Cape",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/mirror",
        name: "Magic Mirror",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/sword",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/sword",
            name: "Fighter's Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/masterSword",
            name: "Master Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/temperedSword",
            name: "Tempered Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/goldenSword",
            name: "Golden Sword",
            start: 0,
            max: 1,
          }
        ]
      },{
        id: "zelda/shield",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/shield",
            name: "Fighter's Shield",
            start: 0,
            max: 1,
          },{
            id: "zelda/redShield",
            name: "Red Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/mirrorShield",
            name: "Mirror Sword",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "D7 Big Chest",
          }
        ]
      },{
        id: "zelda/greenJerkin",
        name: "",
        start: 1,
        max: 1,
        segments: [
          {
            id: "zelda/greenJerkin",
            name: "Green Jerkin",
            start: 1,
            max: 1,
          },{
            id: "zelda/blueMail",
            name: "Blue Mail",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "D5 Big Chest",
          },{
            id: "zelda/redMail",
            name: "Red Mail",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "GT Big Chest",
          }
        ]
      },{
        id: "zelda/boots",
        name: "Pegasus Boots",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/powerGlove",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/powerGlove",
            name: "Power Glove",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "L2 Big Chest",
          },{
            id: "zelda/titansMitt",
            name: "Titan's Mitt",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "D4 Big Chest",
          }
        ]
      },{
        id: "zelda/flipper",
        name: "Zora Flipper",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/moonPearl",
        name: "Moon Pearl",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "L3 Big Chest",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/halfMagic",
        name: "Half Magic",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/arrowsExp",
        name: "Arrow Capacity",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "zelda/bombsExp",
        name: "Bomb Capacity",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "zelda/crystal",
        name: "Palace of Darkness - Crystal",
        start: 0,
        max: 1,
        back: "zelda/pod",
        segments: []
      },{
        id: "zelda/crystal",
        name: "Swamp Palace - Crystal",
        start: 0,
        max: 1,
        back: "zelda/sp",
        segments: []
      },{
        id: "zelda/crystal",
        name: "Skull Woods - Crystal",
        start: 0,
        max: 1,
        back: "zelda/sw",
        segments: []
      },{
        id: "zelda/crystal",
        name: "Thieves' Town - Crystal",
        start: 0,
        max: 1,
        back: "zelda/tt",
        segments: []
      },{
        id: "zelda/crystal",
        name: "Ice Palace - Crystal",
        start: 0,
        max: 1,
        back: "zelda/ip",
        segments: []
      },{
        id: "zelda/crystal",
        name: "Misery Mire - Crystal",
        start: 0,
        max: 1,
        back: "zelda/mm",
        segments: []
      },{
        id: "zelda/crystal",
        name: "Turtle Rock - Crystal",
        start: 0,
        max: 1,
        back: "zelda/tr",
        segments: []
      },
    ]
  },
  "z3_rnd": {
    width: 10,
    items: [
      {
        id: "zelda/bow",
        name: "", // "Bow",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "L1 Big Chest",
        segments: [ // assuming progressive bow
          {
            id: "zelda/bow",
            name: "Bow and Arrows",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "L1 Big Chest",
          },{
            id: "zelda/bowSilver",
            name: "Bow and Silver Arrows",
            start: 0,
            max: 1
          }
        ]
      },/* { // in case of nonprogressive bow
        id: "zelda/silverArrows",
        name: "Silver Arrows",
        start: 0,
        max: 1,
        segments: []
      }, *//* {
        id: "zelda/boomerang",
        name: "",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "HC Basement Chest",
        segments: [ */
          {
            id: "zelda/boomerang",
            name: "Boomerang",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "HC Basement Chest",
          },{
            id: "zelda/magicalBoomerang",
            name: "Magical Boomerang",
            start: 0,
            max: 1
          }/* 
        ]
      } */,{
        id: "zelda/hookshot",
        name: "Hookshot",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D2 Big Chest",
        segments: []
      },{
        id: "zelda/bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/powder",
        name: "Magic Powder",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/mushroom",
        name: "Mushroom",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/fireRod",
        name: "Fire Rod",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D3 Big Chest",
        segments: []
      },{
        id: "zelda/iceRod",
        name: "Ice Rod",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/bombos",
        name: "Bombos",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/ether",
        name: "Ether",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/quake",
        name: "Quake",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/lamp",
        name: "Lamp",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/hammer",
        name: "Magic Hammer",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D1 Big Chest",
        segments: []
      },{
        id: "zelda/shovel",
        name: "Shovel",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/flute",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/flute",
            name: "Flute",
            start: 0,
            max: 1,
          },{
            id: "zelda/fluteBird",
            name: "Flute (Warping enabled)",
            start: 0,
            max: 1,
          }
        ]
      },{
        id: "zelda/net",
        name: "Bug-Catching Net",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/book",
        name: "Book of Mudora",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/bottle",
        name: "Bottle",
        start: 0,
        max: 4,
        segments: []
      },{
        id: "zelda/somaria",
        name: "Cane of Somaria",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "D6 Big Chest",
        segments: []
      },{
        id: "zelda/byrna",
        name: "Cane of Byrna",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/cape",
        name: "Magic Cape",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/mirror",
        name: "Magic Mirror",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/sword",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/sword",
            name: "Fighter's Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/masterSword",
            name: "Master Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/temperedSword",
            name: "Tempered Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/goldenSword",
            name: "Golden Sword",
            start: 0,
            max: 1,
          }
        ]
      },{
        id: "zelda/shield",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/shield",
            name: "Fighter's Shield",
            start: 0,
            max: 1,
          },{
            id: "zelda/redShield",
            name: "Red Sword",
            start: 0,
            max: 1,
          },{
            id: "zelda/mirrorShield",
            name: "Mirror Sword",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "D7 Big Chest",
          }
        ]
      },{
        id: "zelda/greenJerkin",
        name: "",
        start: 1,
        max: 1,
        segments: [
          {
            id: "zelda/greenJerkin",
            name: "Green Jerkin",
            start: 1,
            max: 1,
          },{
            id: "zelda/blueMail",
            name: "Blue Mail",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "D5 Big Chest",
          },{
            id: "zelda/redMail",
            name: "Red Mail",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "GT Big Chest",
          }
        ]
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/boots",
        name: "Pegasus Boots",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/powerGlove",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/powerGlove",
            name: "Power Glove",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "L2 Big Chest",
          },{
            id: "zelda/titansMitt",
            name: "Titan's Mitt",
            start: 0,
            max: 1,
            over: "zelda/MC_Chest",
            overText: "D4 Big Chest",
          }
        ]
      },{
        id: "zelda/flipper",
        name: "Zora Flipper",
        start: 0,
        max: 1,
        segments: []
      },{
        id: "zelda/moonPearl",
        name: "Moon Pearl",
        start: 0,
        max: 1,
        over: "zelda/MC_Chest",
        overText: "L3 Big Chest",
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/halfMagic",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "zelda/halfMagic",
            name: "Half Magic",
            start: 0,
            max: 1,
          },{
            id: "zelda/quarterMagic",
            name: "Quarter Magic",
            start: 0,
            max: 1,
          }
        ]
      },{
        id: "zelda/arrowsExp",
        name: "Arrow Capacity",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "zelda/bombsExp",
        name: "Bomb Capacity",
        start: 0,
        max: 8,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "-",
        name: "",
        start: 0,
        max: 0,
        segments: []
      },{
        id: "zelda/ep",
        name: "Eastern Palace",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Armos Knights Defeated",
        back: "zelda/ep",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/ep",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/dp",
        name: "Desert Palace",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Lanmolas Defeated",
        back: "zelda/dp",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/dp",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/toh",
        name: "Tower of Hera",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Moldorm Defeated",
        back: "zelda/toh",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/toh",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/pod",
        name: "Palace of Darkness",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Helmasaur King Defeated",
        back: "zelda/pod",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/pod",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/sp",
        name: "Swamp Palace",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Arrghus Defeated",
        back: "zelda/sp",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/sp",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/sw",
        name: "Skull Woods",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Mothula Defeated",
        back: "zelda/sw",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/sw",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/tt",
        name: "Thieves' Town",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Blind Defeated",
        back: "zelda/tt",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/tt",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/ip",
        name: "Ice Palace",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Kholdstare Defeated",
        back: "zelda/ip",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/ip",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/mm",
        name: "Misery Mire",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Vitreous Defeated",
        back: "zelda/mm",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/mm",
            type: "dungeon",
            start: 1,
            max: 1,
          }
        ]
      },{
        id: "zelda/tr",
        name: "Turtle Rock",
        start: 0,
        max: 1,
        over: "zelda/MC_Skull",
        overText: "Trinexx Defeated",
        back: "zelda/tr",
        type: "dungeon",
        segments: [
          {
            id: "-",
            name: "",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfCourage",
            name: "Pendent of Courage",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfWisdom",
            name: "Pendent of Wisdom",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/pendantOfPower",
            name: "Pendent of Power",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/crystal",
            name: "Crystal",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },{
            id: "zelda/fairyCrystal",
            name: "Fairy Crystal",
            back: "zelda/tr",
            type: "dungeon",
            start: 1,
            max: 1,
          },
        ]
      },
    ]
  }
};