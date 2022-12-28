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
        itemId: 2,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 4,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "barrierA",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7b7b",
        itemId: 8,
        nodeType: "upgrade",
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
        itemId: 9,
        nodeType: "upgrade",
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
        itemId: 5,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        itemId: 6,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        itemId: 10,
        nodeType: "upgrade",
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
        itemId: 7,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 7,
        segments: [],
        bg: "78a4bc",
        itemId: 3,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missiles",
        start: 0,
        max: 31,
        segments: [],
        bg: "d82800",
        itemId: 1,
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
        itemId: 11,
        nodeType: "artifact",
        value: 0,
      },{
        id: "m_lock2",
        sprite: "research",
        name: "Access Lock 2",
        start: 0,
        max: 1,
        segments: [],
        bg: "747474",
        itemId: 12,
        nodeType: "artifact",
        value: 0,
      },{
        id: "monsterCapsule",
        sprite: "cell",
        name: "Metroid Cell Capsule",
        start: 0,
        max: 1,
        segments: [],
        bg: "008080",
        itemId: 13,
        nodeType: "artifact",
        value: 0,
      },
    ],
    bosses: [
      {
        id: "kraid",
        name: "Jungle Beast",
        bossId: 101,
      },{
        id: "ridley",
        name: "GF Soldier",
        bossId: 102,
      },{
        id: "shaktool",
        name: "Shaktool",
        bossId: 103,
      },{
        id: "guardian",
        name: "Shaktool 2.0",
        bossId: 104,
      },{
        id: "mbrain",
        name: "Alpha Metroid",
        bossId: 105,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Space Pirate Mothership",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Desolate Surface East",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Desolate Surface West",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Bone Yard",
        color: "009700",
        startNodeId: 31,
      },{
        id: 5,
        name: "Chozo Jungle",
        color: "bf00bf",
        startNodeId: 41,
      },{
        id: 6,
        name: "Federation Science Ship",
        color: "bf00bf",
        startNodeId: 51,
      },{
        id: 7,
        name: "Metroid Hive",
        color: "bcbcbc",
        startNodeId: 61,
      }
    ],
    extras: [
      {
        id: "unused",
        extraId: 1001,
        name: "Beta Ray Info",
        nodeType: "lore",
      },{
        id: "unused",
        extraId: 1002,
        name: "Captain Hint",
        nodeType: "lore",
      },{
        id: "unused",
        extraId: 1003,
        name: "Two Codes Hint",
        nodeType: "lore",
      },{
        id: "unused",
        extraId: 1004,
        name: "Wave Beam Hint",
        nodeType: "lore",
      },{
        id: "unused",
        extraId: 1006,
        name: "That One Easter Egg",
        nodeType: "easter",
      },{
        id: "unused",
        extraId: 1005,
        name: "Word Search",
        nodeType: "easter",
      },{
        id: "unused",
        extraId: 1007,
        name: "Full Restore",
        nodeType: "recharge",
      },{
        id: "unused",
        extraId: 1008,
        name: "Underwater Caverns",
        nodeType: "area",
      },{
        id: "unused",
        extraId: 1009,
        name: "Chozo Ruins",
        nodeType: "area",
      },{
        id: "unused",
        extraId: 1010,
        name: "Escape Sequence",
        nodeType: "event",
      },
    ],
    map: [
      { hubId: 1,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "elevator", transportToMapId: 2, toStartNodeId: 11 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "elevator", transportToMapId: 3, toStartNodeId: 21 },
              ]
            ]
          },{
            toHubId: 2,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ]
            ]
          },{
            toHubId: 3,
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 7, reqdItemCount: 1 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 4,
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 2,
        paths: [
          {
            branches: [
              [
                { nodeType: "elevator", transportToMapId: 5, toStartNodeId: 41 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 3,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 4, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 4,
        paths: [
          {
            toHubId: 5,
            branches: [
              [
                { nodeType: "lock", id: 1, reqdItemCount: 1 },
              ]
            ]
          },{
            toHubId: 6,
            branches: [
              [
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 5,
        paths: [
          {
            branches: [
              [
                { nodeType: "elevator", transportToMapId: 4, toStartNodeId: 31 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 1, reqdItemCount: 1 },
                { nodeType: "upgrade", id: 9, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 7,
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 6,
        paths: [
          {
            toHubId: 8,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "easter", id: 1005 },
              ]
            ]
          },
        ],
      },
      { hubId: 7,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 7, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 8,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 10, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 11,
        paths: [
          {
            toHubId: 12,
            branches: [
              [
                { nodeType: "area", id: 1008 },
              ]
            ]
          },{
            toHubId: 13,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ]
            ],
          },{
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "elevator", transportToMapId: 6, toStartNodeId: 51 },
              ]
            ]
          },{
            toHubId: 14,
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 7, reqdItemCount: 1 },
              ]
            ],
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 9, reqdItemCount: 1 },
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 15,
            branches: [
              [
                { nodeType: "lock", id: 9, reqdItemCount: 1 },
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 9, reqdItemCount: 1 },
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
              ]
            ]
          },{
            toHubId: 16,
            branches: [
              [
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "dropdown" },
              ],[
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 12,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "upgrade", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 13,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "upgrade", id: 4, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 14,
        paths: [
          {
            branches: [
              [
                { nodeType: "upgrade", id: 6, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 15,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 16,
        paths: [
          {
            branches: [
              [
                { nodeType: "elevator", transportToMapId: 3, toStartNodeId: 26 },
              ]
            ]
          },
        ],
      },
      { hubId: 21,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 22,
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 22,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "upgrade", id: 5, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 25,
            branches: [
              [
                { nodeType: "dropdown" },
              ],[
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ]
            ]
          },{
            toHubId: 28,
            branches: [
              [
                { nodeType: "lock", id: 9, reqdItemCount: 1 },
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 24,
        paths: [
          {
            branches: [
              [
                { nodeType: "upgrade", id: 5, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 25,
            branches: [
              [
                { nodeType: "dropdown" },
              ],[
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ]
            ],
          },
        ],
      },
      { hubId: 25,
        paths: [
          {
            toHubId: 26,
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          }
        ],
      },
      { hubId: 26,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "elevator", transportToMapId: 2, toStartNodeId: 16 },
              ]
            ]
          },
        ],
      },
      { hubId: 28,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 31,
        paths: [
          {
            toHubId: 32,
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "boss", id: 103 },
              ]
            ]
          },{
            toHubId: 33,
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "lock", id: 11, reqdItemCount: 1 },
                { nodeType: "lock", id: 12, reqdItemCount: 1 },
                { nodeType: "boss", id: 104 },
              ]
            ]
          },
        ],
      },
      { hubId: 32,
        paths: [
          {
            branches: [
              [
                { nodeType: "upgrade", id: 5, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 33,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "elevator", transportToMapId: 7, toStartNodeId: 61 },
              ]
            ]
          },
        ],
      },
      { hubId: 41,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 8, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 42,
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "lock", id: 9, reqdItemCount: 1 },
              ]
            ]
          },{
            toHubId: 43,
            branches: [
              [
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 42,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },
        ],
      },
      { hubId: 43,
        paths: [
          {
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 44,
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 44,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 45,
            branches: [
              [
                { nodeType: "area", id: 1009 },
              ]
            ]
          },
        ],
      },
      { hubId: 45,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 46,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 46,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 47,
            branches: [
              [
                { nodeType: "boss", id: 101 },
              ]
            ]
          },
        ],
      },
      { hubId: 47,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "upgrade", id: 12 },
              ]
            ]
          },
        ],
      },
      { hubId: 51,
        paths: [
          {
            branches: [
              [
                { nodeType: "lore", id: 1001 },
              ]
            ],
          },{
            branches: [
              [
                { nodeType: "lock", id: 1, reqdItemCount: 1 },
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 52,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ]
            ],
          },{
            toHubId: 53,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ]
            ],
          },{
            toHubId: 54,
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "lock", id: 1, reqdItemCount: 1 },
                { nodeType: "recharge", id: 1007 },
              ]
            ]
          },{
            toHubId: 55,
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "lock", id: 1, reqdItemCount: 1 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "easter", id: 1006 },
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 56,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "lock", id: 1, reqdItemCount: 1 },
              ],
            ]
          },
        ],
      },
      { hubId: 52,
        paths: [
          {
            branches: [
              [
                { nodeType: "lock", id: 1, reqdItemCount: 1 },
                { nodeType: "lock", id: 4, reqdItemCount: 1 },
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ],
          },
        ],
      },
      { hubId: 53,
        paths: [
          {
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "expansion", id: 7, isRandomizableItem: true },
              ]
            ],
          },
        ],
      },
      { hubId: 54,
        paths: [
          {
            branches: [
              [
                { nodeType: "lore", id: 1002 },
              ]
            ],
          },{
            branches: [
              [
                { nodeType: "lore", id: 1003 },
              ]
            ],
          },{
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ],
          }
        ],
      },
      { hubId: 55,
        paths: [
          {
            branches: [
              [
                { nodeType: "lore", id: 1004 },
              ]
            ],
          },{
            branches: [
              [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ]
            ],
          }
        ],
      },
      { hubId: 56,
        paths: [
          {
            toHubId: 57,
            branches: [
              [
                { nodeType: "boss", id: 102 },
              ]
            ],
          },
        ],
      },
      { hubId: 57,
        paths: [
          {
            branches: [
              [
                { nodeType: "upgrade", id: 11 },
              ]
            ],
          },{
            branches: [
              [
                { nodeType: "upgrade", id: 13 },
              ]
            ],
          },
        ],
      },
      { hubId: 61,
        paths: [
          {
            toHubId: 62,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
              ]
            ],
          },
        ],
      },
      { hubId: 62,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ],
          },{
            toHubId: 63,
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ]
            ],
          },
        ],
      },
      { hubId: 63,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ],
          },{
            toHubId: 64,
            branches: [
              [
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
              ]
            ],
          },
        ],
      },
      { hubId: 64,
        paths: [
          {
            branches: [
              [
                { nodeType: "recharge", id: 1007 },
              ]
            ],
          },{
            branches: [
              [
                { nodeType: "boss", id: 105 },
                { nodeType: "event", id: 1010 },
                { nodeType: "end" },
              ]
            ],
          },
        ],
      },
    ],
    grid: "m1",
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
        itemId: 1,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "barrierA",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7b7b",
        itemId: 10,
        nodeType: "upgrade",
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
        itemId: 4,
        nodeType: "upgrade",
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
        itemId: 6,
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
        itemId: 5,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        itemId: 7,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        itemId: 8,
        nodeType: "upgrade",
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
        itemId: 9,
        nodeType: "slot",
        slotType: "beam",
        value: 1,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 8,
        segments: [],
        bg: "78a4bc",
        itemId: 3,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missiles",
        start: 0,
        max: 21,
        segments: [],
        bg: "d82800",
        itemId: 2,
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
        bossId: 101,
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
        bossId: 102,
        nodeType: "boss",
        value: 0,
      },
    ],
    bosses: [
      {
        id: "kraid",
        name: "Kraid",
        bossId: 101,
      },{
        id: "ridley",
        name: "Ridley",
        bossId: 102,
      },{
        id: "mbrain",
        name: "Mother Brain",
        bossId: 103,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Brinstar",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Norfair",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Kraid",
        color: "009700",
        startNodeId: 21,
      },{
        id: 4,
        name: "Ridley",
        color: "bf00bf",
        startNodeId: 31,
      },{
        id: 5,
        name: "Tourian",
        color: "bcbcbc",
        startNodeId: 41,
      }
    ],
    extras: [
      {
        id: "unused",
        extraId: 1001,
        name: "Escape Sequence",
        nodeType: "event",
      }
    ],
    map: [
      { hubId: 1,
        paths: [
          {
            branches: [
              [
                { nodeType: "upgrade", id: 1, isRandomizableItem: true },
              ]
            ]
          },
          {
            toHubId: 2,
            branches: [
              [
                { nodeType: "lock", id: 1, reqdItemCount: 1 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 1, reqdItemCount: 1 },
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "elevator", transportToMapId: 3, toStartNodeId: 21 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          }
        ],
      },
      { hubId: 2,
        paths: [
          {
            branches: [
              [
                { nodeType: "upgrade", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "elevator", transportToMapId: 2, toStartNodeId: 11 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "expansion", id: 4, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "upgrade", id: 5, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "lock", id: 101, reqdItemCount: 1 },
                { nodeType: "lock", id: 102, reqdItemCount: 1 },
                { nodeType: "elevator", transportToMapId: 5, toStartNodeId: 41 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "slot", id: 6, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 3,
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ]
            ]
          },{
            toHubId: 4,
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ],[
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "lock", id: 7, reqdItemCount: 1 },
              ]
            ]
          },
        ]
      },
      { hubId: 3,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "lock", id: 7, reqdItemCount: 1 },
                { nodeType: "expansion", id: 10, isRandomizableItem: true },
              ]
            ]
          },
        ]
      },
      { hubId: 4,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },
        ]
      },
      { hubId: 11,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 12,
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 13,
            branches: [
              [
                { nodeType: "lock", id: 5, reqdItemCount: 1 },
              ]
            ]
          },
        ],
      },
      { hubId: 12,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "slot", id: 6, isRandomizableItem: true },
              ]
            ]
          },
        ]
      },
      { hubId: 13,
        paths: [
          {
            toHubId: 14,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "elevator", transportToMapId: 4, toStartNodeId: 31 },
              ]
            ]
          },
        ]
      },
      { hubId: 14,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 7, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 15,
            branches: [
              [
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
              ]
            ]
          },
        ]
      },
      { hubId: 15,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 8, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 9, isRandomizableItem: true },
              ]
            ]
          },
        ]
      },
      { hubId: 21,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 22,
            branches: [
              [
                { nodeType: "dropdown" },
              ],[
                { nodeType: "lock", id: 6, reqdItemCount: 1 },
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
              ],[
                { nodeType: "return" },
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
              ]
            ]
          },
        ]
      },
      { hubId: 22,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 23,
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "boss", id: 101 },
              ]
            ]
          },
        ]
      },
      { hubId: 23,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 2, count: 15 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },
        ]
      },
      { hubId: 31,
        paths: [
          {
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 1 },
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 7, reqdItemCount: 1 },
                { nodeType: "expansion", id: 2, isRandomizableItem: true },
              ]
            ]
          },{
            toHubId: 32,
            branches: [
              [
                { nodeType: "boss", id: 102 },
              ]
            ]
          },
        ]
      },
      { hubId: 32,
        paths: [
          {
            branches: [
              [
                { nodeType: "expansion", id: 2, count: 15 },
              ]
            ]
          },{
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 2 },
                { nodeType: "expansion", id: 3, isRandomizableItem: true },
              ]
            ]
          },
        ]
      },
      { hubId: 41,
        paths: [
          {
            branches: [
              [
                { nodeType: "lock", id: 2, reqdItemCount: 2 },
                { nodeType: "boss", id: 103 },
                { nodeType: "event", id: 1001, },
                { nodeType: "end" },
              ]
            ]
          },
        ]
      },
    ],
    grid: "m1",
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
        itemId: 1,
        nodeType: "upgrade",
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
        itemId: 6,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
            itemId: 16,
            progressionToItemId: 21,
            nodeType: "upgrade",
            value: 1,
            clearIfScramble: true,
          },{
            id: "gravitySuit",
            sprite: "gravity",
            name: "Gravity Suit",
            start: 0,
            max: 1,
            bg: "602880",
            itemId: 21,
            nodeType: "upgrade",
            value: 0,
          }
        ],
        bg: "602880",
        value: 1,
      },{
        id: "fullPowerSuit",
        sprite: "full",
        name: "Fully Powered Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "80d0ff",
        itemId: 18,
        specialCollectionBehavior: true,
        specialCollectionKey: "mzmFullPowerSuit",
        affectsItemIds: [7, 10, 16],
        nodeType: "upgrade",
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
        itemId: 2,
        nodeType: "upgrade",
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
        itemId: 4,
        nodeType: "upgrade",
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
            itemId: 7,
            progressionToItemId: 19,
            nodeType: "upgrade",
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
            itemId: 19,
            nodeType: "upgrade",
            value: 0,
          }
        ],
        bg: "00ff08",
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
        itemId: 9,
        nodeType: "upgrade",
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
        itemId: 14,
        nodeType: "upgrade",
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
        itemId: 8,
        nodeType: "upgrade",
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
            itemId: 10,
            progressionToItemId: 20,
            nodeType: "upgrade",
            value: 1,
            clearIfScramble: true,
          },{
            id: "spaceJump",
            sprite: "space",
            name: "Space Jump",
            start: 0,
            max: 1,
            bg: "00a0e0",
            itemId: 20,
            nodeType: "upgrade",
            value: 0,
          }
        ],
        bg: "00a0e0",
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
        itemId: 11,
        nodeType: "upgrade",
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
        itemId: 12,
        nodeType: "upgrade",
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
        itemId: 17,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 12,
        segments: [],
        bg: "78a4bc",
        itemId: 5,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missiles",
        start: 0,
        max: 50,
        segments: [],
        bg: "d82800",
        itemId: 3,
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "smissile",
        name: "Super Missile Tanks",
        singleItemName: "Super Missiles",
        start: 0,
        max: 15,
        segments: [],
        bg: "007f0e",
        itemId: 15,
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbomb",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bombs",
        start: 0,
        max: 9,
        segments: [],
        bg: "98b830",
        itemId: 22,
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
        // extraId: #number,
        nodeType: "trigger",
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
    bosses: [
      {
        id: "beambeast",
        name: "Beam Beast",
        bossId: 101,
        requires: ["3x1|15x1"],
      },{
        id: "acidworm",
        name: "Acid Worm",
        bossId: 102,
        //requires: ["3x?|15x?"],
      },{
        id: "kraid",
        name: "Kraid",
        bossId: 103,
        //requires: ["3x?|15x?"],
      },{
        id: "kirugiru",
        name: "Kiru Giru",
        bossId: 104,
        //requires: ["3x?|15x?"],
      },{
        id: "imago",
        name: "Imago",
        bossId: 105,
        //requires: ["3x?|15x?"],
      },{
        id: "ridley",
        name: "Ridley",
        bossId: 106,
        //requires: ["3x?|15x?"],
      },{
        id: "mbrain",
        name: "Mother Brain",
        bossId: 107,
        //requires: ["3x?|15x?"],
      },{
        id: "chozoghost",
        name: "Ruins Test",
        bossId: 108,
        //requires: ["3x?|15x?"],
      },{
        id: "mridley",
        name: "Mecha Ridley",
        bossId: 109,
        //requires: ["3x?|15x?"],
      }
    ],
    areas: [
      {
        id: 1,
        name: "Brinstar",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Norfair",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Crateria",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Kraid",
        color: "009700",
        startNodeId: 31,
      },{
        id: 5,
        name: "Ridley",
        color: "bf00bf",
        startNodeId: 41,
      },{
        id: 6,
        name: "Tourian",
        color: "bcbcbc",
        startNodeId: 51,
      },{
        id: 7,
        name: "Chozodia", // Zero Suit Sequence
        color: "bcbcbc",
        startNodeId: 61,
      },{
        id: 8,
        name: "Chozodia",
        color: "bcbcbc",
        startNodeId: 71,
      }
    ],
    extras: [
      {
        id: "chozoStatue",
        name: "Chozo Hint Statue",
        extraId: 1021,
        nodeType: "trigger",
        lockIds: [1],
      },{
        id: "unused",
        name: "Map: Brinstar",
        extraId: 1011,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Norfair",
        extraId: 1012,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Kraid",
        extraId: 1013,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Ridley",
        extraId: 1014,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Mothership",
        extraId: 1015,
        nodeType: "map",
      },{
        id: "unused",
        name: "Hard Mode",
        extraId: 1001,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Save Station",
        extraId: 1002,
        nodeType: "save",
      },{
        id: "unused",
        name: "Save Station", // with Full Restore
        extraId: 1003,
        nodeType: "recharge",
      }
    ],
    map: [
    ],
    grid: "m1",
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
        itemId: 10,
        nodeType: "upgrade",
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
        itemId: 19,
        nodeType: "upgrade",
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
        itemId: 27,
        nodeType: "upgrade",
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
        itemId: 12,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "powerBeam",
        name: "Power Beam",
        sprite: "power",
        start: 1,
        max: 1,
        segments: [],
        bg: "ffb508",
        itemId: 2,
        nodeType: "upgrade",
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
        itemId: 8,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 18,
        nodeType: "upgrade",
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
        itemId: 25,
        nodeType: "upgrade",
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
        itemId: 4,
        nodeType: "upgrade",
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
        itemId: 14,
        nodeType: "upgrade",
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
        itemId: 17,
        nodeType: "expansion",
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
        itemId: 23,
        nodeType: "expansion",
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
        itemId: 26,
        nodeType: "expansion",
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
        itemId: 7,
        nodeType: "upgrade",
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
        itemId: 9,
        nodeType: "upgrade",
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
        itemId: 11,
        nodeType: "upgrade",
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
        itemId: 16,
        nodeType: "upgrade",
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
        itemId: 20,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "combatVisor",
        name: "Combat Visor",
        sprite: "combat",
        start: 1,
        max: 1,
        segments: [],
        bg: "80d0ff",
        itemId: 1,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "scanVisor",
        name: "Scan Visor",
        sprite: "scan",
        start: 1,
        max: 1,
        segments: [],
        bg: "bca470",
        itemId: 3,
        nodeType: "upgrade",
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
        itemId: 15,
        nodeType: "upgrade",
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
        itemId: 24,
        nodeType: "upgrade",
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
        itemId: 22,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "energyTankA",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        itemId: 6,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Expansions",
        alreadyHasMainItem: true,
        singleItemName: "Missile Expansion",
        start: 0,
        max: 49,
        segments: [],
        bg: "d82800",
        itemId: 5,
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombExp",
        name: "Power Bomb Expansions",
        alreadyHasMainItem: true,
        singleItemName: "Power Bomb Expansion",
        start: 0,
        max: 4,
        segments: [],
        bg: "98b830",
        itemId: 21,
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
            singleItemName: "Artifact",
            over: "Z_Chozo",
            overText: "Hints Acquired",
            start: 0,
            max: 12,
            bg: "008080",
            itemId: 28,
            nodeType: "artifact",
            value: 1,
          },{
            id: "cipher",
            name: "Impact Crater Accessible",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "artifact",
        value: 1,
      },
    ],
    bosses: [
      {
        id: "pqueen",
        name: "Parasite Queen",
        bossId: 101,
      },{
        id: "hivemecha",
        name: "Hive Mecha",
        bossId: 102,
      },{
        id: "morphbeetle",
        name: "Plated Beetle",
        nodeType: "battle",
        bossId: 103,
      },{
        id: "zoid",
        name: "Incinerator Drone",
        bossId: 104,
      },{
        id: "flaahgra",
        name: "Flaahgra",
        bossId: 105,
      },{
        id: "sheegoth",
        name: "Sheegoth",
        nodeType: "battle",
        bossId: 106,
      },{
        id: "thardus",
        name: "Thardus",
        bossId: 107,
      },{
        id: "chozo",
        name: "Chozo Ghost(s)",
        nodeType: "battle",
        bossId: 108,
      },{
        id: "elitepirate",
        name: "Elite Pirate",
        nodeType: "battle",
        bossId: 109,
      },{
        id: "cdrone",
        name: "Cloaked Drone",
        bossId: 110,
      },{
        id: "phelite",
        name: "Phazon Elite",
        bossId: 111,
      },{
        id: "opirate",
        name: "Omega Pirate",
        bossId: 112,
      },{
        id: "metaridley",
        name: "Meta Ridley",
        bossId: 113,
      },{
        id: "mprime",
        name: "Metroid Prime",
        bossId: 114,
      },{
        id: "mprimecore",
        name: "Metroid Prime (Core)",
        bossId: 115,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Pirate Frigate",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Tallon Overworld",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Chozo Ruins",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Magmoor Caverns",
        color: "009700",
        startNodeId: 31,
      },{
        id: 5,
        name: "Phendrana Drifts",
        color: "bf00bf",
        startNodeId: 41,
      },{
        id: 6,
        name: "Phazon Mines L.1",
        color: "bcbcbc",
        startNodeId: 51,
      },{
        id: 7,
        name: "Phazon Mines L.2",
        color: "bcbcbc",
        startNodeId: 61,
      },{
        id: 8,
        name: "Phazon Mines L.3",
        color: "bcbcbc",
        startNodeId: 71,
      },{
        id: 9,
        name: "Impact Crater",
        color: "bcbcbc",
        startNodeId: 81,
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Spilled Bag",
        nodeType: "event",
        extraId: 1001,
      },{
        id: "unused",
        name: "Great Tree Hall Bars", // Tallon Overworld, Great Tree Hall, use Boost Ball to activate a Spinner that lowers a gate for shortcut access
        nodeType: "trigger",
        extraId: 1002,
        blockType: true,
        lockIds: [7, 11],
      },{
        id: "unused",
        name: "Labs Power Outage", // Phendrana Drifts, Pirate Labs, Research Core
        nodeType: "trigger",
        extraId: 1012,
      },{
        id: "unused",
        name: "Processing Center Access Gate", // Phazon Mines sub-level 2, Processing Center Access (with Energy Tank, behind Elite Quarters)
        nodeType: "event",
        extraId: 1003,
        blockType: true,
        lockIds: [],
      },{
        id: "unused",
        name: "Map: Frigate",
        nodeType: "map",
        extraId: 1004,
      },{
        id: "unused",
        name: "Map: Chozo Ruins",
        nodeType: "map",
        extraId: 1005,
      },{
        id: "unused",
        name: "Map: Phendrana Pirates",
        nodeType: "map",
        extraId: 1006,
      },{
        id: "unused",
        name: "Map: Phazon Mines",
        nodeType: "map",
        extraId: 1007,
      },{
        id: "unused",
        name: "Crashed Frigate",
        nodeType: "area",
        extraId: 1008,
      },{
        id: "unused",
        name: "Pirate Labs",
        nodeType: "area",
        extraId: 1009,
      },{
        id: "unused",
        name: "Save Station",
        nodeType: "save",
        extraId: 1010,
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
        extraId: 1011,
      }
    ],
    map: [
    ],
    grid: "mp",
  },
  "pb": {
    checklistWidth: 4,
    items: [
      {
        id: "chozoArtifact",
        sprite: "artifact",
        name: "Artifacts",
        singleItemName: "Artifact",
        start: 0,
        max: 12,
        segments: [],
        bg: "008080",
        itemId: 1,
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
        itemId: 2,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "missileC",
        //sprite: "missile",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        itemId: 3,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "forceBall",
        //sprite: "force",
        name: "Force Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "007f0e",
        itemId: 4,
        nodeType: "upgrade",
        value: 0,
      },
    ],
    bosses: [
      {
        id: "thardus",
        name: "Thardus",
        bossId: 101,
      },{
        id: "opirate",
        name: "Omega Pirate",
        bossId: 102,
      },{
        id: "metaridley",
        name: "Meta Ridley",
        bossId: 103,
      },{
        id: "mprime",
        name: "Metroid Prime",
        bossId: 104,
      },{
        id: "mprimecore",
        name: "Metroid Prime (Core)",
        bossId: 105,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Pirate Frigate",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "Tallon Overworld",
        color: "db2b00",
      },{
        id: 3,
        name: "Phendrana Drifts",
        color: "bf00bf",
      },{
        id: 4,
        name: "Phazon Mines",
        color: "009700",
      },{
        id: 5,
        name: "Artifact Temple",
        color: "009700",
      },{
        id: 6,
        name: "Impact Crater",
        color: "bcbcbc",
      }
    ],
    extras: [
    ],
    map: [
    ],
    grid: "mp",
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
        itemId: 3,
        nodeType: "upgrade",
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
        itemId: 4,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "d8a480",
        itemId: 7,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bombB",
        sprite: "bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 8,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "boostBall",
        sprite: "boost",
        name: "Boost Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        itemId: 9,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        itemId: 10,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "energyTankA",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 2,
        segments: [],
        bg: "78a4bc",
        itemId: 6,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Expansions",
        singleItemName: "Missile Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 7,
        segments: [],
        bg: "d82800",
        itemId: 5,
        nodeType: "expansion",
        value: 1,
      },{
        id: "chozoArtifact",
        sprite: "artifact",
        name: "Chozo Artifacts",
        singleItemName: "Artifact",
        start: 0,
        max: 12,
        over: "Z_Chozo",
        overText: "Hints Acquired",
        segments: [],
        bg: "008080",
        itemId: 11,
        nodeType: "artifact",
        value: 0,
      },
    ],
    bosses: [
      {
        id: "hivemecha",
        name: "Hive Mecha",
        bossId: 101,
      },{
        id: "unused",
        name: "Quill 1",
        nodeType: "battle",
        bossId: 102,
      },{
        id: "unused",
        name: "Quill 2",
        nodeType: "battle",
        bossId: 103,
      },{
        id: "unused",
        name: "Quill 3",
        nodeType: "battle",
        bossId: 104,
      },{
        id: "unused",
        name: "Quill 4",
        nodeType: "battle",
        bossId: 105,
      },{
        id: "geemerbrain",
        name: "Geemer Brain",
        bossId: 106,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Tallon Overworld",
        hasGameStart: true,
        color: "db2b00",
        startNodeId: 1,
      },{
        id: 2,
        name: "Chozo Ruins",
        color: "db2b00",
        startNodeId: 11,
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Hard Mode",
        nodeType: "lore",
        extraId: 1001,
      },{
        id: "unused",
        name: "Red Leaves",
        nodeType: "trigger",
        extraId: 1005,
      },{
        id: "unused",
        name: "100% Scans",
        nodeType: "trigger",
        extraId: 1006,
      },{
        id: "unused",
        name: "100% Items",
        nodeType: "trigger",
        extraId: 1007,
      },{
        id: "unused",
        name: "Gully",
        nodeType: "area",
        extraId: 1003,
      },{
        id: "unused",
        name: "Skull Grid",
        nodeType: "lore",
        extraId: 1004,
      },{
        id: "unused",
        name: "Save Station",
        nodeType: "save",
        extraId: 1002,
      },{
        id: "scanVisor",
        name: "Scan Visor",
        sprite: "scan",
        start: 1,
        max: 1,
        bg: "bca470",
        itemId: 1,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "wallJumpBoots",
        name: "Wall Jump",
        start: 1,
        max: 1,
        bg: "ff7e00",
        itemId: 2,
        nodeType: "upgrade",
        value: 0,
      },
    ],
    map: [
    ],
    grid: "mp",
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
        itemId: 1,
        nodeType: "upgrade",
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
        itemId: 9,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "powerBeamA",
        name: "Power Beam",
        sprite: "power",
        start: 1,
        max: 1,
        segments: [],
        bg: "ffb508",
        itemId: 2,
        nodeType: "upgrade",
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
        itemId: 21,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "chargeBeamA",
        name: "Charge Beam",
        start: 1,
        max: 1,
        segments: [],
        bg: "808000",
        itemId: 4,
        nodeType: "upgrade",
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
        itemId: 11,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 8,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "scanVisorA",
        name: "Scan Visor",
        sprite: "scan",
        start: 1,
        max: 1,
        segments: [],
        bg: "bca470",
        itemId: 3,
        nodeType: "upgrade",
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
        itemId: 12,
        nodeType: "upgrade",
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
        itemId: 14,
        nodeType: "upgrade",
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
        itemId: 26,
        nodeType: "upgrade",
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
        itemId: 6,
        nodeType: "upgrade",
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
        itemId: 23,
        nodeType: "upgrade",
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
        itemId: 24,
        nodeType: "upgrade",
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
        itemId: 20,
        nodeType: "upgrade",
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
        itemId: 30,
        nodeType: "upgrade",
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
        itemId: 22,
        nodeType: "upgrade",
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
        itemId: 16,
        nodeType: "upgrade",
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
        itemId: 35,
        nodeType: "upgrade",
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
        itemId: 25,
        nodeType: "upgrade",
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
        itemId: 32,
        nodeType: "upgrade",
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
        itemId: 28,
        nodeType: "upgrade",
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
        itemId: 27,
        nodeType: "upgrade",
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
        itemId: 36,
        nodeType: "upgrade",
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
        itemId: 31,
        nodeType: "upgrade",
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
        itemId: 39,
        nodeType: "upgrade",
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
        itemId: 40,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "morphBall",
        name: "Morph Ball",
        start: 1,
        max: 1,
        segments: [],
        bg: "d8a480",
        itemId: 5,
        nodeType: "upgrade",
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
        itemId: 33,
        nodeType: "upgrade",
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
        itemId: 37,
        nodeType: "upgrade",
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
        itemId: 41,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "energyTankA",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        itemId: 10,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Expansions",
        singleItemName: "Missile Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 49,
        segments: [],
        bg: "d82800",
        itemId: 7,
        nodeType: "expansion",
        value: 1,
        clearIfScramble: true,
      },{
        id: "missileTank",
        name: "Missile Expansions",
        singleItemName: "Missile Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 30,
        segments: [],
        bg: "d82800",
        itemId: 7,
        nodeType: "expansion",
        value: 1,
        displayIfScramble: true,
      },{
        id: "beamAmmoExpansion",
        name: "Beam Ammo Expansions",
        singleItemName: "Beam Ammo Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 4,
        segments: [],
        bg: "808000",
        itemId: 18,
        nodeType: "expansion",
        value: 1,
        clearIfScramble: true,
      },{
        id: "darkAmmoExpansion",
        name: "Dark Beam Ammo Expansions",
        singleItemName: "Dark Beam Ammo Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 10,
        segments: [],
        bg: "9c84ff",
        itemId: 15,
        nodeType: "expansion",
        value: 1,
        displayIfScramble: true,
      },{
        id: "lightAmmoExpansion",
        name: "Light Beam Ammo Expansions",
        singleItemName: "Light Beam Ammo Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 10,
        segments: [],
        bg: "5ac7f7",
        itemId: 17,
        nodeType: "expansion",
        value: 1,
        displayIfScramble: true,
      },{
        id: "powerBombExpA",
        name: "Power Bomb Expansions",
        singleItemName: "Power Bomb Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 8,
        segments: [],
        bg: "98b830",
        itemId: 34,
        nodeType: "expansion",
        value: 1,
      },{
        id: "doubleDamageA",
        name: "Double Damage",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffb508",
        nodeType: "upgrade",
        value: 1,
        itemId: 42,
        displayIfScramble: true,
      },{
        id: "infiniteBeamAmmo",
        name: "Unlimited Beam Ammo",
        start: 0,
        max: 1,
        segments: [],
        bg: "808000",
        nodeType: "upgrade",
        value: 1,
        itemId: 43,
        displayIfScramble: true,
      },{
        id: "infiniteMissiles",
        name: "Unlimited Missiles",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        nodeType: "upgrade",
        value: 1,
        itemId: 44,
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
            singleItemName: "Dark Agon Key",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Amorbis required",
            start: 0,
            max: 3,
            bg: "ad6a40",
            itemId: 19,
            nodeType: "artifact",
            value: 0,
          },{
            id: "lightOfAether",
            name: "Dark Agon Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Agon Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
            singleItemName: "Dark Agon Key",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Amorbis required",
            start: 0,
            max: 3,
            bg: "ad6a40",
            itemId: 19,
            nodeType: "artifact",
            value: 1,
          },{
            id: "lightOfAether",
            name: "Dark Agon Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Agon Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
            singleItemName: "Dark Torvus Key",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Chykka required",
            start: 0,
            max: 3,
            bg: "4b9467",
            itemId: 29,
            nodeType: "artifact",
            value: 0,
          },{
            id: "lightOfAether",
            name: "Dark Torvus Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Torvus Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
            singleItemName: "Dark Torvus Key",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Chykka required",
            start: 0,
            max: 3,
            bg: "4b9467",
            itemId: 29,
            nodeType: "artifact",
            value: 1,
          },{
            id: "lightOfAether",
            name: "Dark Torvus Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Torvus Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
            singleItemName: "Ing Hive Key",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Quadraxis required",
            start: 0,
            max: 3,
            bg: "5c819e",
            itemId: 38,
            nodeType: "artifact",
            value: 0,
          },{
            id: "lightOfAether",
            name: "Ing Hive Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Sanctuary Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
            singleItemName: "Ing Hive Key",
            sprite: "redKey",
            over: "F_Boss_Ex",
            overText: "Quadraxis required",
            start: 0,
            max: 3,
            bg: "5c819e",
            itemId: 38,
            nodeType: "artifact",
            value: 1,
          },{
            id: "lightOfAether",
            name: "Ing Hive Energy Retrieved",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          },{
            id: "lightOfAetherA",
            name: "Sanctuary Energy Restored",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
            singleItemName: "Sky Temple Key",
            sprite: "skyKey",
            over: "E_Lumin_Ex",
            overText: "Hints acquired",
            start: 0,
            max: 9,
            bg: "008080",
            itemId: 45,
            nodeType: "artifact",
            value: 0,
          },{
            id: "skyTempleAccess",
            name: "Sky Temple Accessible",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
            singleItemName: "Sky Temple Key",
            sprite: "skyKey",
            over: "E_Lumin_Ex",
            overText: "Hints acquired",
            start: 0,
            max: 9,
            bg: "008080",
            itemId: 45,
            nodeType: "artifact",
            value: 1,
          },{
            id: "skyTempleAccess",
            name: "Sky Temple Accessible",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
    bosses: [
      {
        id: "splinter",
        name: "Alpha Splinter",
        bossId: 101,
      },{
        id: "bombguard",
        name: "Bomb Guardian",
        bossId: 102,
      },{
        id: "jumpguard",
        name: "Jump Guardian",
        bossId: 103,
      },{
        id: "missileguard",
        name: "Missile Trooper",
        bossId: 104,
      },{
        id: "dsamusa",
        name: "Dark Samus 1",
        bossId: 105,
      },{
        id: "amorbis",
        name: "Amorbis",
        bossId: 106,
      },{
        id: "torvuspirates",
        name: "Pirate Ambush",
        nodeType: "battle",
        bossId: 107,
      },{
        id: "boostguard",
        name: "Boost Guardian",
        bossId: 108,
      },{
        id: "alphablogg",
        name: "Alpha Blogg",
        bossId: 109,
      },{
        id: "grappleguard",
        name: "Grapple Guardian",
        bossId: 110,
      },{
        id: "chykka",
        name: "Chykka",
        bossId: 111,
      },{
        id: "reactorquad",
        name: "Quad",
        nodeType: "battle",
        bossId: 112,
      },{
        id: "spiderguard",
        name: "Spider Guardian",
        bossId: 113,
      },{
        id: "pbombguard",
        name: "Power Bomb Guardian",
        bossId: 114,
      },{
        id: "dsamusb",
        name: "Dark Samus 2",
        bossId: 115,
      },{
        id: "caretaker",
        name: "Caretaker Class Drone",
        bossId: 116,
      },{
        id: "quadraxis",
        name: "Quadraxis",
        bossId: 117,
      },{
        id: "emperoring",
        name: "Emperor Ing",
        bossId: 118,
      },{
        id: "dsamusc",
        name: "Dark Samus 3",
        bossId: 119,
      },{
        id: "dsamusd",
        name: "Dark Samus 4",
        bossId: 120,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Temple Grounds",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Sky Temple Grounds",
        color: "2038ec",
        startNodeId: 11,
      },{
        id: 3,
        name: "Great Temple",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Sky Temple",
        color: "db2b00",
        startNodeId: 31,
      },{
        id: 5,
        name: "Agon Wastes",
        color: "009700",
        startNodeId: 41,
      },{
        id: 6,
        name: "Dark Agon Wastes",
        color: "009700",
        startNodeId: 51,
      },{
        id: 7,
        name: "Torvus Bog",
        color: "bf00bf",
        startNodeId: 61,
      },{
        id: 8,
        name: "Dark Torvus Bog",
        color: "bf00bf",
        startNodeId: 71,
      },{
        id: 9,
        name: "Torvus Bog - Hydrodynamo",
        color: "bf00bf",
        startNodeId: 81,
      },{
        id: 10,
        name: "Dark Torvus Bog - Hydrodynamo",
        color: "bf00bf",
        startNodeId: 91,
      },{
        id: 11,
        name: "Sanctuary Fortress",
        color: "bcbcbc",
        startNodeId: 101,
      },{
        id: 12,
        name: "Ing Hive",
        color: "bcbcbc",
        startNodeId: 111,
      },{
        id: 13,
        name: "Sanctuary Fortress - Upper Level",
        color: "bcbcbc",
        startNodeId: 121,
      },{
        id: 14,
        name: "Ing Hive - Upper Level",
        color: "bcbcbc",
        startNodeId: 131,
      }
    ],
    extras: [
      {
        id: "bombC",
        name: "Command Chamber Gate", // Temple Grounds, Hive Tunnels, normally done as part of the pre-Spilling tutorial
        nodeType: "trigger",
        extraId: 1001,
        blockType: true,
        lockIds: [5, 11],
      },{
        id: "unused",
        name: "Spilled Bag",
        nodeType: "event",
        extraId: 1002,
      },{
        id: "lightBeam",
        name: "Dynamo Chamber Lock", // Temple Grounds, the one that adds another layer of Power Bomb Denzium to the puzzle
        nodeType: "trigger",
        extraId: 1003,
      },{
        id: "lightBeam",
        name: "Trooper Security Station Lock", // Temple Grounds, the one glitchy gate that ends up dying
        nodeType: "trigger",
        extraId: 1004,
      },{
        id: "unused",
        name: "GFMC Cutscene",
        nodeType: "event",
        extraId: 1005,
      },{
        id: "lightBeam",
        name: "Light Block Moved", // Temple Grounds, Path of Eyes, blocking access to Windchamber Gateway
        nodeType: "trigger",
        extraId: 1006,
      },{
        id: "lightBeam",
        name: "Sacred Bridge Gate", // Temple Grounds, requires Dark Visor and Seekers, turns into a platform when complete, reopens GFMC Compound on way to Sanctuary
        nodeType: "trigger",
        extraId: 1007,
      },{
        id: "seekerMissiles",
        name: "Ing Windchamber Cobalt Seeker Lock", // unlocks grapple points
        nodeType: "trigger",
        extraId: 1008,
      },{
        id: "seekerMissiles",
        name: "Ing Windchamber Amber Seeker Lock",
        nodeType: "trigger",
        extraId: 1009,
      },{
        id: "lightBeam",
        name: "Light Block Moved", // Great Temple, Transport C Access (path towards Torvus)
        nodeType: "trigger",
        extraId: 1010,
      },{
        id: "bombC",
        name: "Agon Interdimensional Bomb Slot", // Portal Terminal <- (Dark) Portal Site
        nodeType: "trigger",
        extraId: 1011,
      },{
        id: "bombC",
        name: "Transport Center Bomb Slot", // Agon, Transport Center
        nodeType: "trigger",
        extraId: 1012,
      },{
        id: "unused",
        name: "Mining Station A Sand Gate", // Agon
        nodeType: "trigger",
        extraId: 1013,
      },{
        id: "unused",
        name: "Command Center Gate", // Agon Command Center, southern gate
        nodeType: "trigger",
        extraId: 1014,
      },{
        id: "unused",
        name: "Security Station B Gate", // Agon, where Dark Samus makes an appearance
        nodeType: "trigger",
        extraId: 1015,
      },{
        id: "unused",
        name: "Scan Node 1", // Dark Agon, scan 3 nodes to open the way towards Watering Hole -> Feeding Pit -> Light Beam
        nodeType: "trigger",
        extraId: 1016,
      },{
        id: "unused",
        name: "Scan Node 2",
        nodeType: "trigger",
        extraId: 1017,
      },{
        id: "unused",
        name: "Scan Node 3",
        nodeType: "trigger",
        extraId: 1018,
      },{
        id: "unused",
        name: "Sand Processing Cleaned", // Agon, removes terrain and shifts requirement to Boost Ball
        nodeType: "trigger",
        extraId: 1019,
      },{
        id: "unused",
        name: "Vigilance Class Turret", // Agon Central Mining Station
        nodeType: "event",
        extraId: 1020,
      },{
        id: "unused",
        name: "Torvus Lagoon Gates", // upper part of the room, also shortcut access back to lower
        nodeType: "trigger",
        extraId: 1021,
      },{
        id: "unused",
        name: "Great Bridge Cannon", // Torvus, right outside the temple
        nodeType: "trigger",
        extraId: 1022,
      },{
        id: "unused",
        name: "Forgotten Bridge Turned", // Forgotten Bridge <- Dark Forgotten Bridge, Interdimensional Bomb Slot
        nodeType: "trigger",
        extraId: 1023,
      },{
        id: "unused",
        name: "Forgotten Balcony Opened", // upper Forgotten Bridge <- upper Dark Forgotten Bridge, Interdimensional Spinner
        nodeType: "trigger",
        extraId: 1024,
      },{
        id: "boostBall",
        name: "Torvus Interdimensional Spinner", // Dark Hydrodynamo, Crypt -> Gathering Hall
        nodeType: "trigger",
        extraId: 1025,
      },{
        id: "unused",
        name: "Scan Node 1", // Torvus Hydrodynamo, in front of Blue Door
        nodeType: "trigger",
        extraId: 1026,
      },{
        id: "unused",
        name: "Scan Node 2", // Torvus Hydrodynamo, in front of Black Door
        nodeType: "trigger",
        extraId: 1027,
      },{
        id: "unused",
        name: "Scan Node 3", // Torvus Hydrodynamo, in front of White Door
        nodeType: "trigger",
        extraId: 1028,
      },{
        id: "unused",
        name: "Training Chamber Bomb Slot", // Torvus Hydrodynamo, allows access to Sanctuary PB Door
        nodeType: "trigger",
        extraId: 1029,
      },{
        id: "unused",
        name: "Gathering Hall Portal Gate Access", // Torvus Hydrodynamo -> Dark Crypt
        nodeType: "trigger",
        extraId: 1030,
      },{
        id: "unused",
        name: "Catacombs Portal Gate Access", // Torvus Hydrodynamo -> Dark Dungeon
        nodeType: "trigger",
        extraId: 1031,
      },{
        id: "unused",
        name: "Crypt Barrier Access", // Dark Torvus Hydrodynamo
        nodeType: "trigger",
        extraId: 1032,
      },{
        id: "boostBall",
        name: "Sanctuary Temple Transport Access", // Sanctuary, the rings of authorization
        nodeType: "trigger",
        extraId: 1033,
      },{
        id: "seekerMissile",
        name: "Reactor Access Gate", // Sanctuary, first Rezbit encounter
        nodeType: "trigger",
        extraId: 1034,
      },{
        id: "unused",
        name: "Minigyro Chamber Puzzle", // Sanctuary, Amber-Cobalt-Crimson-Emerald(-Violet...)
        nodeType: "trigger",
        extraId: 1035,
      },{
        id: "powerBombB",
        name: "Glass Tunnel Broken", // Sanctuary, Hall of Combat Mastery
        nodeType: "trigger",
        extraId: 1036,
      },{
        id: "unused",
        name: "Watch Station Portal Gate", // Upper Sanctuary -> Ing Hive Aerial Training Site
        nodeType: "trigger",
        extraId: 1037,
      },{
        id: "unused",
        name: "Hive Dynamo Works Portal Gate", // Ing Hive -> Dynamo Works
        nodeType: "trigger",
        extraId: 1038,
      },{
        id: "unused",
        name: "Watch Station Access Grapple Points", // Upper Sanctuary
        nodeType: "trigger",
        extraId: 1039,
      },{
        id: "unused",
        name: "Main Gyro Chamber Puzzle 1", // Upper Sanctuary, outer ring
        nodeType: "trigger",
        extraId: 1040,
      },{
        id: "unused",
        name: "Main Gyro Chamber Puzzle 2", // Upper Sanctuary, slanted ring
        nodeType: "trigger",
        extraId: 1041,
      },{
        id: "unused",
        name: "Main Gyro Chamber Spinner", // Upper Sanctuary, grants access to second half of the one half of the room / shortcut back
        nodeType: "trigger",
        extraId: 1042,
      },{
        id: "unused",
        name: "Temple Access Cannon", // Upper Sanctuary, need Dark Visor and Seekers to be able to go back up from the lower half of the room
        nodeType: "trigger",
        extraId: 1043,
      },{
        id: "unused",
        name: "Vigilance Class Turret", // Sanctuary Entrance
        nodeType: "event",
        extraId: 1044,
      },{
        id: "unused",
        name: "Map: Hive Tunnels",
        nodeType: "map",
        extraId: 1045,
      },{
        id: "unused",
        name: "Map: GFMC Compound",
        nodeType: "map",
        extraId: 1046,
      },{
        id: "unused",
        name: "Map: Agon Wastes",
        nodeType: "map",
        extraId: 1047,
      },{
        id: "unused",
        name: "Map: Torvus Bog",
        nodeType: "map",
        extraId: 1048,
      },{
        id: "unused",
        name: "Map: Sanctuary Fortress",
        nodeType: "map",
        extraId: 1049,
      },{
        id: "unused",
        name: "Hive Tunnels",
        nodeType: "area",
        extraId: 1050,
      },{
        id: "unused",
        name: "Pirate Base",
        nodeType: "area",
        extraId: 1051,
      },{
        id: "unused",
        name: "Save Station",
        nodeType: "save",
        extraId: 1052,
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
        extraId: 1053,
      },{
        id: "unused",
        name: "Ammo Refilled",
        nodeType: "recharge",
        extraId: 1054,
      }
    ],
    map: [
    ],
    grid: "mp2e",
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
        itemId: 1,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "voltDriver",
        sprite: "volt",
        name: "Volt Driver",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffbc15",
        itemId: 7,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "magmaul",
        sprite: "magmaul",
        name: "Magmaul",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        itemId: 9,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "shockCoil",
        sprite: "coil",
        name: "Shock Coil",
        start: 0,
        max: 1,
        segments: [],
        bg: "303898",
        itemId: 8,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "battlehammer",
        sprite: "hammer",
        name: "Battlehammer",
        start: 0,
        max: 1,
        segments: [],
        bg: "22b14c",
        itemId: 5,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "judicator",
        sprite: "jud",
        name: "Judicator",
        start: 0,
        max: 1,
        segments: [],
        bg: "6f3198",
        itemId: 6,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "imperialist",
        sprite: "imp",
        name: "Imperialist",
        start: 0,
        max: 1,
        segments: [],
        bg: "ed1c24",
        itemId: 10,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "omegaCannon",
        sprite: "omega",
        name: "Omega Cannon",
        start: 0,
        max: 1,
        segments: [],
        bg: "c8d8d8",
        itemId: 20,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "energyTankA",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 7,
        segments: [],
        bg: "78a4bc",
        itemId: 3,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "tank",
        name: "Missile Expansions",
        singleItemName: "Missile Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 9,
        segments: [],
        bg: "d82800",
        itemId: 2,
        nodeType: "expansion",
        value: 1,
      },{
        id: "uaExpansion",
        // sprite: "uatank",
        name: "UA Expansions",
        singleItemName: "UA Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 12,
        segments: [],
        bg: "98b830",
        itemId: 4,
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
            singleItemName: "Alimbic Artifact",
            start: 0,
            max: 3,
            bg: "00f0c8",
            itemId: 11,
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "00f0c8", // "008080"
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "event",
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
            singleItemName: "Alimbic Artifact",
            start: 0,
            max: 3,
            bg: "f09000",
            itemId: 12,
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "f09000", // "008080"
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "event",
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
            singleItemName: "Alimbic Artifact",
            start: 0,
            max: 3,
            bg: "2090a8",
            itemId: 13,
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "2090a8", // "008080"
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "event",
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
            singleItemName: "Alimbic Artifact",
            start: 0,
            max: 3,
            bg: "2858a0",
            itemId: 14,
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "2858a0", // "008080"
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "event",
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
            singleItemName: "Octolith",
            start: 0,
            max: 8,
            bg: "008080",
            itemId: 19,
            nodeType: "artifact",
          },{
            id: "alimbicCannon",
            name: "Alimbic Cannon Control Room",
            start: 0,
            max: 1,
            bg: "402c00",
            nodeType: "event",
            clearIfScramble: true,
          },{
            id: "oubliette",
            name: "Oubliette unlocked",
            start: 0,
            max: 1,
            bg: "402c00",
            nodeType: "event",
            clearIfScramble: true,
          }
        ],
        bg: "402c00",
        nodeType: "event",
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
            singleItemName: "Alimbic Artifact",
            start: 0,
            max: 3,
            bg: "b8e008",
            itemId: 15,
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "b8e008", // "008080"
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "event",
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
            singleItemName: "Alimbic Artifact",
            start: 0,
            max: 3,
            bg: "f00000",
            itemId: 16,
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "f00000", // "008080"
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "event",
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
            singleItemName: "Alimbic Artifact",
            start: 0,
            max: 3,
            bg: "0868e0",
            itemId: 17,
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "0868e0", // "008080"
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "event",
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
            singleItemName: "Alimbic Artifact",
            start: 0,
            max: 3,
            bg: "184898",
            itemId: 18,
            nodeType: "artifact",
            value: 0,
          },{
            id: "octolith",
            sprite: "octolith",
            name: "Octolith",
            start: 0,
            max: 1,
            bg: "008080", // "184898", // "008080"
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          }
        ],
        bg: "008080",
        nodeType: "event",
        value: 0,
      },
    ],
    bosses: [
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
        id: 1,
        name: "Celestial Archives",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Alinos",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Vesper Defense Outpost",
        color: "009700",
        startNodeId: 21,
      },{
        id: 4,
        name: "Arcterra",
        color: "bf00bf",
        startNodeId: 31,
      },{
        id: 5,
        name: "Oubliette",
        color: "bcbcbc",
        startNodeId: 41,
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Teleporter A",
        nodeType: "teleport",
        extraId: 1001,
      },{
        id: "unused",
        name: "Teleporter B",
        nodeType: "teleport",
        extraId: 1002,
      },{
        id: "unused",
        name: "Possible Hunter Encounter",
        nodeType: "battle",
        // might need new coloration?
      },{
        id: "unused",
        name: "Spire Event",
        nodeType: "event",
        extraId: 1003,
      }
    ],
    map: [
    ],
    grid: "mph",
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
        itemId: 2,
        nodeType: "upgrade",
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
        itemId: 4,
        nodeType: "upgrade",
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
        itemId: 14,
        nodeType: "upgrade",
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
        itemId: 22,
        nodeType: "upgrade",
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
        itemId: 32,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "combatVisor",
        name: "Combat Visor",
        start: 1,
        max: 1,
        segments: [],
        bg: "80d0ff",
        itemId: 1,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "ped",
        name: "P.E.D. Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        itemId: 13,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "spinBoost",
        name: "Space Jump Boots",
        start: 1,
        max: 1,
        segments: [],
        bg: "00a0e0",
        itemId: 7,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "missileC",
        name: "Missile Launcher",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        itemId: 8,
        nodeType: "upgrade",
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
        itemId: 17,
        nodeType: "upgrade",
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
        itemId: 25,
        nodeType: "upgrade",
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
        itemId: 18,
        nodeType: "upgrade",
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
        itemId: 27,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "scanVisorB",
        name: "Scan Visor",
        start: 1,
        max: 1,
        segments: [],
        bg: "bca470",
        itemId: 3,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "phazonSuit",
        name: "Corrupted Hypermode",
        start: 0,
        max: 1,
        segments: [],
        bg: "282018",
        itemId: 16,
        nodeType: "upgrade",
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
        itemId: 23,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "morphBall",
        name: "Morph Ball",
        start: 1,
        max: 1,
        segments: [],
        bg: "d8a480",
        itemId: 5,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "bombC",
        name: "Bombs",
        start: 1,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 6,
        nodeType: "upgrade",
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
        itemId: 21,
        nodeType: "upgrade",
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
        itemId: 30,
        nodeType: "upgrade",
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
        itemId: 20,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "commandVisor",
        name: "Command Visor",
        start: 0,
        max: 1,
        segments: [],
        bg: "bfbf00",
        itemId: 12,
        nodeType: "upgrade",
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
        itemId: 31,
        nodeType: "upgrade",
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
        itemId: 11,
        nodeType: "upgrade",
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
        itemId: 15,
        nodeType: "upgrade",
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
        itemId: 29,
        nodeType: "upgrade",
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
        itemId: 24,
        nodeType: "upgrade",
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
        itemId: 33,
        nodeType: "upgrade",
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
        itemId: 28,
        nodeType: "upgrade",
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
        singleItemName: "Energy Tank",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        itemId: 10,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Expansions",
        singleItemName: "Missile Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 50,
        segments: [],
        bg: "d82800",
        itemId: 9,
        nodeType: "expansion",
        value: 1,
      },{
        id: "shipMissileExpansion",
        name: "Ship Missile Expansions",
        singleItemName: "Ship Missile Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 8,
        segments: [],
        bg: "7f2800",
        itemId: 19,
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
        singleItemName: "Theronian Bomb Component",
        start: 0,
        max: 3,
        segments: [],
        bg: "887878",
        itemId: 26,
        nodeType: "event",
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
        nodeType: "event",
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
        nodeType: "event",
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
            itemId: 26,
            nodeType: "event",
            value: 0,
          },{
            id: "elysia",
            name: "Elysia Complete",
            over: "F_Boss_Ex",
            overText: "Helios required",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
        nodeType: "event",
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
            singleItemName: "Energy Cell",
            start: 0,
            max: 9,
            over: "C_Fuse",
            overText: "Hints Acquired",
            bg: "008080",
            itemId: 34,
            nodeType: "artifact",
            value: 1,
          },{
            id: "pirateCode",
            name: "Pirate Code",
            start: 0,
            max: 1,
            bg: "887878",
            itemId: 35,
            nodeType: "event",
            value: 0,
            clearIfScramble: true,
          },{
            id: "phaaze",
            name: "Phaaze accessible",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
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
        itemId: 35,
        nodeType: "event",
        value: 0,
        displayIfScramble: true,
      },
    ],
    bosses: [
      {
        id: "berserkerlorda", // olympus
        name: "Berserker Lord",
        bossId: 101,
      },{
        id: "mridley",
        name: "Meta Ridley",
        bossId: 102,
      },{
        id: "rundas",
        name: "Rundas",
        bossId: 103,
      },{
        id: "korakk",
        name: "Pirate Hussar & Korakk Beast",
        bossId: 104,
      },{
        id: "mogenar",
        name: "Mogenar",
        bossId: 105,
      },{
        id: "steamlorda", // barracks
        name: "Steamlord",
        bossId: 106,
      },{
        id: "steamlordb", // skybridge
        name: "Steamlord",
        bossId: 107,
      },{
        id: "steamlordc", // def drone room
        name: "Steamlord",
        bossId: 108,
      },{
        id: "defdrone",
        name: "Defense Drone",
        bossId: 109,
      },{
        id: "ghor",
        name: "Ghor",
        bossId: 110,
      },{
        id: "berserkerlordb", // skytown
        name: "Berserker Lord",
        bossId: 111,
      },{
        id: "helios",
        name: "Helios",
        bossId: 112,
      },{
        id: "gandrayda",
        name: "Gandrayda",
        bossId: 113,
      },{
        id: "mhatchera", // norion
        name: "Metroid Hatcher",
        bossId: 114,
      },{
        id: "mhatcherb", // homeworld
        name: "Metroid Hatcher",
        bossId: 115,
      },{
        id: "mhatcherc", // valhalla
        name: "Metroid Hatcher",
        bossId: 116,
      },{
        id: "mhatcherd", // 
        name: "Metroid Hatcher",
        bossId: 117,
      },{
        id: "phharvester",
        name: "Phazon Harvester",
        bossId: 118,
      },{
        id: "pircommander",
        name: "Pirate Commander",
        bossId: 119,
      },{
        id: "oridley",
        name: "Omega Ridley",
        bossId: 120,
      },{
        id: "levinfant",
        name: "Leviathan Infant",
        bossId: 121,
      },{
        id: "dsamusd",
        name: "Dark Samus",
        bossId: 122,
      },{
        id: "au313",
        name: "Aurora Unit 313",
        bossId: 123,
      }
    ],
    areas: [
      {
        id: 1,
        name: "GFS Olympus",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "GFS Olympus 2",
        color: "2038ec",
        startNodeId: 11,
      },{
        id: 3,
        name: "Norion",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Bryyo - Cliffside",
        color: "009700",
        startNodeId: 31,
      },{
        id: 5,
        name: "Bryyo - Fire",
        color: "009700",
        startNodeId: 41,
      },{
        id: 6,
        name: "Bryyo - Thorn Jungle",
        color: "009700",
        startNodeId: 51,
      },{
        id: 7,
        name: "Bryyo - Ice",
        color: "009700",
        startNodeId: 61,
      },{
        id: 8,
        name: "Bryyo - Seed",
        color: "009700",
        startNodeId: 71,
      },{
        id: 9,
        name: "Elysia - Skytown West",
        color: "bf00bf",
        startNodeId: 81,
      },{
        id: 10,
        name: "Elysia - Skytown East",
        color: "bf00bf",
        startNodeId: 91,
      },{
        id: 11,
        name: "Elysia - Seed",
        color: "bf00bf",
        startNodeId: 101,
      },{
        id: 12,
        name: "GFS Valhalla",
        color: "2038ec",
        startNodeId: 111,
      },{
        id: 13,
        name: "Pirate Homeworld - Command Center",
        color: "bcbcbc",
        startNodeId: 121,
      },{
        id: 14,
        name: "Pirate Homeworld - Research",
        color: "bcbcbc",
        startNodeId: 131,
      },{
        id: 15,
        name: "Pirate Homeworld - Phazon Mines",
        color: "bcbcbc",
        startNodeId: 141,
      },{
        id: 16,
        name: "Pirate Homeworld - Seed",
        color: "bcbcbc",
        startNodeId: 151,
      },{
        id: 17,
        name: "Phaaze",
        color: "db2b00",
        startNodeId: 161,
      },
    ],
    extras: [
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
        name: "Save Station",
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
        nodeType: "event",
      },{
        id: "unused",
        name: "Generator B Online", // Norion, auto by Rundas
        nodeType: "event",
      },{
        id: "unused",
        name: "Generator C Online", // Norion
        nodeType: "event",
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
        nodeType: "trigger",
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
        nodeType: "lore",
      }
    ],
    map: [
    ],
    grid: "mp",
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
        nodeType: "upgrade",
        value: 0,
      },{
        id: "shieldGenerator",
        name: "Shield Generator",
        sprite: "shield",
        start: 0,
        max: 1,
        segments: [],
        bg: "9464e4",
        nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 0,
      },{
        id: "superMissileB",
        name: "Super Missile",
        sprite: "super",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "upgrade",
        value: 0,
      },{
        id: "flameShot",
        name: "Flame Shot",
        sprite: "flame",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 0,
      },{
        id: "shockShot",
        name: "Shock Shot",
        sprite: "shock",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "upgrade",
        value: 0,
      },{
        id: "proximityBomb",
        name: "Proximity Bomb",
        sprite: "mine",
        start: 0,
        max: 1,
        segments: [],
        bg: "fea800",
        nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 0,
      },{
        id: "decoy",
        name: "Decoy",
        sprite: "decoy",
        start: 0,
        max: 1,
        segments: [],
        bg: "b4ff00",
        nodeType: "upgrade",
        value: 0,
      },{
        id: "scanBolt",
        name: "Scan Bolt",
        sprite: "scan",
        start: 0,
        max: 1,
        segments: [],
        bg: "b4ff00",
        nodeType: "upgrade",
        value: 0,
      },{
        id: "goldMedal",
        name: "Gold Medals",
        start: 0,
        max: 75,
        segments: [],
        bg: "c0c6c0",
        nodeType: "lore",
        value: 0,
        clearIfScramble: true,
      },
    ],
    bosses: [
    ],
    areas: [
    ],
    extras: [
    ],
    map: [
    ],
    grid: "mp2e",
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
        itemId: 1,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        itemId: 4,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        itemId: 7,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "barrierA",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        itemId: 6,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        itemId: 8,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: [],
        bg: "00a0e0",
        itemId: 10,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 5,
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
        itemId: 9,
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
        itemId: 11,
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
        itemId: 12,
        nodeType: "slot",
        slotType: "beam",
        value: 1,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 6,
        segments: [],
        bg: "78a4bc",
        itemId: 3,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Pods",
        singleItemName: "Missile Pod",
        start: 0,
        max: 22,
        segments: [],
        bg: "d82800",
        itemId: 2,
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
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 2",
            sprite: "monsters",
            start: 0,
            max: 4,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 3",
            sprite: "monsters",
            start: 0,
            max: 8,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 4",
            sprite: "monsters",
            start: 0,
            max: 10,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 5",
            sprite: "monsters",
            type: "counter",
            start: 0,
            max: 1,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 6",
            sprite: "monsters",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 7",
            sprite: "monsters",
            start: 0,
            max: 7,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 8",
            sprite: "monsters",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 9",
            sprite: "monsters",
            start: 0,
            max: 3,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Phase 10",
            sprite: "monsters",
            start: 0,
            max: 9,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },
        ],
        bg: "ffffff",
        nodeType: "event",
        value: 0,
      },{
        id: "monster",
        sprite: "baby",
        name: "Baby Metroid",
        start: 0,
        max: 1,
        segments: [],
        bg: "008080",
        itemId: 14,
        nodeType: "artifact",
        value: 0,
      },
    ],
    bosses: [
      {
        id: "alpha",
        name: "Alpha Metroid",
        bossId: 103,
      },{
        id: "gamma",
        name: "Gamma Metroid",
        bossId: 104,
      },{
        id: "zeta",
        name: "Zeta Metroid",
        bossId: 105,
      },{
        id: "omega",
        name: "Omega Metroid",
        bossId: 106,
      },{
        id: "larval",
        name: "Larval Metroid",
        bossId: 102,
      },{
        id: "queen",
        name: "Queen Metroid",
        bossId: 107,
      },{
        id: "arachnus",
        name: "Arachnus",
        bossId: 101,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Main Tunnel",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Area 1",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Area 2",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Area 3",
        color: "db2b00",
        startNodeId: 31,
      },{
        id: 5,
        name: "Area 5",
        color: "db2b00",
        startNodeId: 41,
      },{
        id: 6,
        name: "Final Area",
        color: "db2b00",
        startNodeId: 51,
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Save Station",
        nodeType: "save",
        extraId: 1003,
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
        extraId: 1001,
      },{
        id: "unused",
        name: "Energy Recharge",
        nodeType: "recharge",
        extraId: 1002,
      },
    ],
    map: [
    ],
    grid: "m2ros",
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
        itemId: 2,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bomb",
        name: "Bombs",
        sprite: "bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 3,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "powerGrip",
        name: "Power Grip",
        sprite: "grip",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        itemId: 4,
        nodeType: "upgrade",
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
        itemId: 7,
        nodeType: "upgrade",
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
        itemId: 8,
        nodeType: "upgrade",
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
        itemId: 5,
        nodeType: "upgrade",
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
        itemId: 10,
        nodeType: "upgrade",
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
        singleItemName: "Energy Tank",
        sprite: "energy",
        start: 0,
        max: 3,
        segments: [],
        bg: "78a4bc",
        itemId: 6,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        sprite: "missile",
        start: 0,
        max: 12,
        segments: [],
        bg: "d82800",
        itemId: 1,
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        sprite: "smissile",
        start: 0,
        max: 2,
        segments: [],
        bg: "007f0e",
        itemId: 9,
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
        itemId: 11,
        nodeType: "artifact",
        value: 1,
      },
    ],
    bosses: [
      {
        id: "ridley",
        name: "Ridley",
        bossId: 103,
      },{
        id: "crocomire",
        name: "Crocomire",
        bossId: 101,
      },{
        id: "kraid",
        name: "Kraid",
        bossId: 102,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Simulation",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Save Station",
        nodeType: "save",
        extraId: 1002,
      },{
        id: "unused",
        name: "Floor Switch",
        nodeType: "trigger",
        extraId: 1001,
      },
    ],
    map: [
    ],
    grid: "m2ros",
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
        itemId: 2,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "barrierA",
        name: "Varia Suit",
        sprite: "barrier",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        itemId: 8,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "gravitySuit",
        name: "Gravity Suit",
        sprite: "gravity",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        itemId: 19,
        nodeType: "upgrade",
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
        itemId: 6,
        nodeType: "upgrade",
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
        itemId: 9,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 16,
        nodeType: "upgrade",
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
        itemId: 20,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bomb",
        name: "Bombs",
        sprite: "bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 4,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "spiderBall",
        name: "Spider Ball",
        sprite: "spider",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        itemId: 7,
        nodeType: "upgrade",
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
        itemId: 11,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "powerGrip",
        name: "Power Grip",
        sprite: "grip",
        start: 1,
        max: 1,
        segments: [],
        bg: "00e8d8",
        itemId: 3,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "highJump",
        name: "High Jump Boots",
        sprite: "high",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        itemId: 10,
        nodeType: "upgrade",
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
        itemId: 12,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "speedBooster",
        name: "Speed Booster",
        sprite: "speed",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        itemId: 14,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "screwAttack",
        name: "Screw Attack",
        sprite: "screw",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        itemId: 18,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "energyTank",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        sprite: "energy",
        start: 0,
        max: 10,
        segments: [],
        bg: "78a4bc",
        itemId: 5,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        sprite: "missile",
        start: 0,
        max: 44,
        segments: [],
        bg: "d82800",
        itemId: 1,
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        sprite: "smissile",
        start: 0,
        max: 10,
        segments: [],
        bg: "007f0e",
        itemId: 15,
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        sprite: "pbombs",
        over: "Z_Orb",
        overText: "Power Plant Destroyed",
        start: 0,
        max: 10,
        segments: [],
        bg: "98b830",
        itemId: 17,
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
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Golden Temple",
            sprite: "monster",
            start: 0,
            max: 4,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Hydro Station",
            sprite: "monster",
            start: 0,
            max: 8,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Industrial Complex",
            sprite: "monster",
            start: 0,
            max: 10,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Research Site",
            sprite: "monster",
            type: "counter",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Mining Facility",
            sprite: "monster",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "The Tower",
            sprite: "monster",
            start: 0,
            max: 6,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Distribution Center",
            sprite: "monster",
            start: 0,
            max: 8,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },/* {
            id: "monsterDna",
            name: "Upper Areas",
            sprite: "monster",
            start: 0,
            max: 38,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          }, */{
            id: "monsterDna",
            name: "Rescue Team Campsite",
            sprite: "monster",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "The Nest",
            sprite: "monster",
            start: 0,
            max: 3,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },{
            id: "monsterDna",
            name: "Genetics Laboratory",
            sprite: "monster",
            start: 0,
            max: 9,
            bg: "ffffff",
            nodeType: "event",
            value: 0,
          },
        ],
        bg: "ffffff",
        nodeType: "event",
        value: 0,
      },{
        id: "am2rPowerOrb",
        name: "Power Orbs Distributed",
        sprite: "battery",
        start: 0,
        max: 1,
        segments: [],
        bg: "887878",
        nodeType: "event",
        value: 0,
      },{
        id: "monster",
        name: "Baby Metroid",
        sprite: "baby",
        start: 0,
        max: 1,
        segments: [],
        bg: "008080",
        itemId: 30,
        nodeType: "artifact",
        value: 0,
      },
    ],
    bosses: [
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
        id: 1,
        name: "Main Tunnel",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Golden Temple",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Hydro Station",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Industrial Complex",
        color: "db2b00",
        startNodeId: 31,
      },{
        id: 5,
        name: "The Tower",
        color: "db2b00",
        startNodeId: 41,
      },{
        id: 6,
        name: "Distribution Center",
        color: "db2b00",
        startNodeId: 51,
      },{
        id: 7,
        name: "GFS Thoth",
        color: "db2b00",
        startNodeId: 61,
      },{
        id: 8,
        name: "The Nest + Genetics Lab",
        color: "db2b00",
        startNodeId: 71,
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Save Station",
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
        nodeType: "lore",
      },{
        id: "unused",
        name: "Science Scan", // x how many?
        nodeType: "lore",
      },{
        id: "unused",
        name: '"Movement Detected"',
        message: "Movement detected",
        nodeType: "lore",
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
    grid: "m2ros",
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
        itemId: 1,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "bomb",
        sprite: "bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 6,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        itemId: 9,
        nodeType: "upgrade",
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
        itemId: 12,
        nodeType: "upgrade",
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
        itemId: 25,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "barrier",
        sprite: "barrier",
        name: "Varia Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        itemId: 11,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        itemId: 23,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "scanPulse",
        sprite: "pulse",
        name: "Scan Pulse",
        start: 0,
        max: 1,
        segments: [],
        bg: "00c7ff",
        itemId: 3,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "lightningArmor",
        sprite: "shield",
        name: "Lightning Armor",
        start: 0,
        max: 1,
        segments: [],
        bg: "00ff08",
        itemId: 10,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "beamBurst",
        sprite: "burst",
        name: "Beam Burst",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffbc15",
        itemId: 15,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "phaseDrift",
        sprite: "drift",
        name: "Phase Drift",
        start: 0,
        max: 1,
        segments: [],
        bg: "e900ff",
        itemId: 21,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "superMissile",
        sprite: "superm",
        name: "Super Missiles",
        start: 0,
        max: 1,
        segments: [],
        bg: "007f0e",
        itemId: 19,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        itemId: 14,
        nodeType: "upgrade",
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
        itemId: 18,
        nodeType: "upgrade",
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
        itemId: 5,
        nodeType: "upgrade",
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
        itemId: 8,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 17,
        nodeType: "upgrade",
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
        itemId: 22,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "grappleBeam",
        sprite: "grapple",
        name: "Grapple Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        itemId: 16,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        itemId: 24,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 10,
        segments: [],
        bg: "78a4bc",
        itemId: 4,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "mtank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        start: 0,
        max: 80,
        segments: [],
        bg: "d82800",
        itemId: 2,
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "smtank",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        alreadyHasMainItem: true,
        start: 0,
        max: 30,
        segments: [],
        bg: "007f0e",
        itemId: 20,
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbtank",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        alreadyHasMainItem: true,
        start: 0,
        max: 15,
        segments: [],
        bg: "98b830",
        itemId: 26,
        nodeType: "expansion",
        value: 1,
      },{
        id: "aeionExpansion",
        sprite: "aexp",
        name: "Aeion Expansions",
        singleItemName: "Aeion Expansion",
        alreadyHasMainItem: true,
        start: 0,
        max: 15,
        segments: [],
        bg: "bfbf00",
        itemId: 7,
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
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 1",
            start: 0,
            max: 4,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 2",
            start: 0,
            max: 8,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 3",
            start: 0,
            max: 10,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 4",
            type: "counter",
            start: 0,
            max: 4,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 5",
            start: 0,
            max: 7,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 6",
            type: "counter",
            start: 0,
            max: 2,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 7",
            start: 0,
            max: 3,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "dna",
            name: "Area 8",
            start: 0,
            max: 11,
            bg: "ffffff",
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
        value: 0,
      },{
        id: "monster",
        sprite: "baby",
        name: "Baby Metroid",
        start: 0,
        max: 1,
        segments: [],
        bg: "008080",
        itemId: 27,
        nodeType: "artifact",
        value: 0,
        clearIfScramble: true,
      },
    ],
    bosses: [
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
        id: 1,
        name: "Surface",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Area 1",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Area 2",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Area 3",
        color: "db2b00",
        startNodeId: 31,
      },{
        id: 5,
        name: "Area 4",
        color: "db2b00",
        startNodeId: 41,
      },{
        id: 6,
        name: "Area 5",
        color: "db2b00",
        startNodeId: 51,
      },{
        id: 7,
        name: "Area 6",
        color: "db2b00",
        startNodeId: 61,
      },{
        id: 8,
        name: "Area 7",
        color: "db2b00",
        startNodeId: 71,
      },{
        id: 9,
        name: "Area 8",
        color: "db2b00",
        startNodeId: 81,
      },{
        id: 10,
        name: "Surface (Post-Extinction)",
        color: "db2b00",
        startNodeId: 91,
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Teleport",
        nodeType: "teleport",
        extraId: 1001,
      },{
        id: "grappleBeam",
        name: "Grapple Blocks broken", // how many of these do we need..? probably a lot...
        nodeType: "trigger",
        extraId: 1007,
      },{
        id: "grappleBeam",
        name: "Diggernaut Awakened", // Area 3, Grapple Beam induced
        nodeType: "event",
        extraId: 1006,
      },{
        id: "unused",
        name: "Larval Metroids", // Area 8
        nodeType: "event",
        extraId: 1008,
      },{
        id: "unused",
        name: "Missiles Reload",
        nodeType: "recharge",
        extraId: 1004,
      },{
        id: "unused",
        name: "Energy Recharge",
        nodeType: "recharge",
        extraId: 1005,
      },{
        id: "unused",
        name: "Aeion Refilled",
        nodeType: "recharge",
        extraId: 1003,
      },{
        id: "unused",
        name: "Save Station",
        nodeType: "save",
        extraId: 1002,
      },
    ],
    map: [
    ],
    grid: "m2ros",
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
        itemId: 1,
        nodeType: "upgrade",
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
        itemId: 3,
        nodeType: "upgrade",
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
        itemId: 18,
        nodeType: "upgrade",
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
        itemId: 20,
        nodeType: "upgrade",
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
        itemId: 9,
        nodeType: "upgrade",
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
        itemId: 16,
        nodeType: "upgrade",
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
        itemId: 14,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 5,
        nodeType: "upgrade",
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
        itemId: 8,
        nodeType: "upgrade",
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
        itemId: 10,
        nodeType: "upgrade",
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
        itemId: 15,
        nodeType: "upgrade",
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
        itemId: 19,
        nodeType: "upgrade",
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
        itemId: 7,
        nodeType: "upgrade",
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
        itemId: 9,
        nodeType: "upgrade",
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
        itemId: 17,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        itemId: 4,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        start: 0,
        max: 46,
        segments: [],
        bg: "d82800",
        itemId: 2,
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "smissile",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        start: 0,
        max: 10,
        segments: [],
        bg: "007f0e",
        itemId: 6,
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbombs",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        start: 0,
        max: 10,
        segments: [],
        bg: "98b830",
        itemId: 11,
        nodeType: "expansion",
        value: 1,
      },{
        id: "reserveTank",
        sprite: "reserve",
        name: "Reserve Tanks",
        singleItemName: "Reserve Tank",
        start: 0,
        max: 4,
        segments: [],
        bg: "7f2800",
        itemId: 12,
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
        nodeType: "artifact",
        value: 0,
      },
    ],
    bosses: [
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
        id: 1,
        name: "Crateria",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Brinstar", // blue
        color: "2038ec",
        startNodeId: 11,
      },{
        id: 3,
        name: "Brinstar", // green
        color: "2038ec",
        startNodeId: 21,
      },{
        id: 4,
        name: "Brinstar", // red part 1
        color: "2038ec",
        startNodeId: 31,
      },{
        id: 5,
        name: "Brinstar", // red part 2
        color: "2038ec",
        startNodeId: 41,
      },{
        id: 6,
        name: "Norfair", // upper
        color: "db2b00",
        startNodeId: 51,
      },{
        id: 7,
        name: "Norfair", // lower
        color: "db2b00",
        startNodeId: 61,
      },{
        id: 8,
        name: "Wrecked Ship",
        color: "009700",
        startNodeId: 71,
      },{
        id: 9,
        name: "Maridia", // pipe
        color: "bf00bf",
        startNodeId: 81,
      },{
        id: 10,
        name: "Maridia", // main
        color: "bf00bf",
        startNodeId: 91,
      },{
        id: 11,
        name: "Tourian",
        color: "bcbcbc",
        startNodeId: 101,
      }
    ],
    extras: [
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
        id: "unused",
        name: "Blue Shutter",
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Green Shutter",
        nodeType: "trigger",
      },{
        id: "powerBomb",
        name: "Glass Tunnel Broken", // Maridia
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Reserve Tank Hint",
        nodeType: "lore",
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
        name: "Save Station",
        nodeType: "save",
      },
    ],
    map: [
    ],
    grid: "sm",
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
        itemId: 1,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "bombA",
        name: "Bombs",
        sprite: "bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 4,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "missile",
        name: "Missiles",
        sprite: "missile",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        itemId: 2,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "superMissile",
        name: "Super Missiles",
        sprite: "super",
        start: 0,
        max: 1,
        segments: [],
        bg: "007f0e",
        itemId: 15,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "seekerLauncher",
        name: "Seeker Missiles",
        sprite: "unknown",
        start: 0,
        max: 1,
        segments: [],
        bg: "644080",
        itemId: 19,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "barrier",
        name: "Varia Feature",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff7e00",
        itemId: 10,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "gravitySuitC",
        name: "Gravity Feature",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        itemId: 20,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "grappleBeam",
        name: "Grapple Beam",
        sprite: "grapple",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        itemId: 14,
        nodeType: "upgrade",
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
        itemId: 8,
        nodeType: "upgrade",
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
        itemId: 9,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 16,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "speedBoosterA",
        name: "Speed Booster",
        sprite: "speed",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        itemId: 11,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "spaceJump",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: [],
        bg: "00a0e0",
        itemId: 17,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "screwAttack",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        itemId: 18,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "powerBomb",
        name: "Power Bombs",
        sprite: "pbomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "98b830",
        itemId: 21,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "energyTank",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        sprite: "energy",
        start: 0,
        max: 5,
        segments: [],
        bg: "78a4bc",
        itemId: 6,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        sprite: "tank",
        alreadyHasMainItem: true,
        start: 0,
        max: 70,
        segments: [],
        bg: "d82800",
        itemId: 3,
        nodeType: "expansion",
        value: 1,
      },{
        id: "chargeAccel",
        name: "Accel Charges",
        singleItemName: "Accel Charge",
        sprite: "accel",
        start: 0,
        max: 6,
        segments: [],
        bg: "808000",
        itemId: 7,
        nodeType: "expansion",
        value: 1,
      },{
        id: "energyPart",
        name: "Energy Parts",
        singleItemName: "Energy Part",
        sprite: "part",
        start: 0,
        max: 16,
        segments: [],
        bg: "fcc4d8",
        itemId: 5,
        nodeType: "expansion",
        value: 1,
      },{
        id: "eRecoveryTank",
        name: "E-Recovery Tanks",
        singleItemName: "E-Recovery Tank",
        sprite: "erec",
        start: 0,
        max: 3,
        segments: [],
        bg: "6f3198",
        itemId: 12,
        nodeType: "expansion",
        value: 1,
      },
    ],
    bosses: [
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
        id: 1,
        name: "Main Sector",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Sector 1 - Biosphere",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Sector 2 - Cryosphere",
        color: "009700",
        startNodeId: 21,
      },{
        id: 4,
        name: "Sector 3 - Pyrosphere",
        color: "bf00bf",
        startNodeId: 31,
      },{
        id: 5,
        name: "Bioweapon Research Center",
        color: "bcbcbc",
        startNodeId: 41,
      }
    ],
    extras: [
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
        nodeType: "lore",
      },{
        id: "unused",
        name: "Navigation Room",
        nodeType: "save",
      },
    ],
    map: [
    ],
    grid: "mom",
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
        itemId: 10,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        itemId: 15,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "phazonSuit",
        sprite: "phazon",
        name: "Phazon Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "282018",
        itemId: 40,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "zeroSuit",
        sprite: "black",
        name: "Zero Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "007098",
        itemId: 29,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "fullPowerSuit",
        sprite: "chozo",
        name: "Black Zero Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "80d0ff",
        itemId: 30,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "zeroSuitA",
        sprite: "suit",
        name: "Equipment recovered",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffb508",
        itemId: 31,
        nodeType: "upgrade",
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
        itemId: 8,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "flameShotA",
        sprite: "fire",
        name: "Fire Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff4a4a",
        itemId: 5,
        nodeType: "upgrade",
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
        itemId: 17,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 19,
        nodeType: "upgrade",
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
        itemId: 44,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "d8a480",
        itemId: 2,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bomb",
        sprite: "bombs",
        name: "Bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 6,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Jump Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        itemId: 9,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        itemId: 16,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "adapter",
        sprite: "adapter",
        name: "Bomb-Beam Adapter",
        start: 0,
        max: 1,
        segments: [],
        bg: "887878",
        itemId: 18,
        nodeType: "upgrade",
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
        itemId: 7,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "Hi-Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        itemId: 11,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: [],
        bg: "00a0e0",
        itemId: 43,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "powerGrip",
        sprite: "grip",
        name: "Power Grip",
        start: 0,
        max: 1,
        segments: [],
        bg: "00e8d8",
        itemId: 3,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        itemId: 42,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        itemId: 4,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missiles",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        start: 0,
        max: 50,
        segments: [],
        bg: "d82800",
        itemId: 1,
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "supers",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        start: 0,
        max: 20,
        segments: [],
        bg: "007f0e",
        itemId: 12,
        nodeType: "expansion",
        value: 1,
      },{
        id: "magneticShieldTank",
        sprite: "shields",
        name: "Magnetic Shield Tanks",
        singleItemName: "Magnetic Shield Tank",
        start: 0,
        max: 15,
        segments: [],
        bg: "007098",
        itemId: 14,
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbombs",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        start: 0,
        max: 10,
        segments: [],
        bg: "98b830",
        itemId: 41,
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
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To unlock Pyrfair",
            type: "counter",
            start: 1,
            max: 5,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To unlock Aqastar",
            type: "counter",
            start: 5,
            max: 10,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To unlock Arcteria",
            type: "counter",
            start: 10,
            max: 20,
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To power up your ship",
            type: "counter",
            start: 20,
            max: 35,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "To unlock the Heart of the Galaxy",
            type: "counter",
            start: 35,
            max: 60,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "Genocide",
            type: "counter",
            start: 60,
            max: 80,
            bg: "ffffff",
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
        value: 0,
      },
    ],
    bosses: [
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
        id: 1,
        name: "SRX88",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Trozodia",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Pyrfair",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Aqastar",
        color: "009700",
        startNodeId: 31,
      },{
        id: 5,
        name: "Arcteria",
        color: "bf00bf",
        startNodeId: 41,
      },{
        id: 6,
        name: "Noctian", // zero suit
        color: "bcbcbc",
        startNodeId: 51,
      },{
        id: 7,
        name: "Phazon Dimension", // zero suit
        color: "bcbcbc",
        startNodeId: 61,
      },{
        id: 8,
        name: "Phazon Trozodia", // post-suit reclamation
        color: "bcbcbc",
        startNodeId: 71,
      },{
        id: 9,
        name: "Phazon Pyrfair", // post-suit reclamation
        color: "bcbcbc",
        startNodeId: 81,
      },{
        id: 10,
        name: "Phazon Aqastar", // post-suit reclamation
        color: "bcbcbc",
        startNodeId: 91,
      },{
        id: 11,
        name: "Phazon Arcteria", // post-suit reclamation
        color: "bcbcbc",
        startNodeId: 101,
      },{
        id: 12,
        name: "Phazon Noctian", // post-suit reclamation
        color: "bcbcbc",
        startNodeId: 111,
      },{
        id: 13,
        name: "Noctian", // ship reclamation
        color: "bcbcbc",
        startNodeId: 121,
      },{
        id: 14,
        name: "Phazon SRX88", // post-suit reclamation
        color: "bcbcbc",
        startNodeId: 131,
      },{
        id: 15,
        name: "Heart of the Galaxy",
        color: "bcbcbc",
        startNodeId: 141,
      },{
        id: 16,
        name: "Phazon Heart of the Galaxy",
        color: "bcbcbc",
        startNodeId: 151,
      },{
        id: 17,
        name: "Escape Sequence",
        color: "bcbcbc",
        startNodeId: 161,
      }
    ],
    extras: [
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
        nodeType: "event", // must always be locks, as they are dead ends
      },{
        id: "unused",
        name: "Save Station",
        nodeType: "save",
      },
    ],
    map: [
    ],
    grid: "mph",
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
        itemId: 10,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "gravitySuitD",
        sprite: "gravity",
        name: "Gravity Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "602880",
        itemId: 20,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "phazonSuit",
        sprite: "phazon",
        name: "Phazon Suit",
        start: 0,
        max: 1,
        segments: [],
        bg: "282018",
        itemId: 25,
        nodeType: "upgrade",
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
        itemId: 1,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bomb",
        sprite: "bombs",
        name: "Bomb",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 9,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "springBall",
        sprite: "spring",
        name: "Jump Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "886848",
        itemId: 14,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        start: 0,
        max: 1,
        segments: [],
        bg: "bca470",
        itemId: 22,
        nodeType: "upgrade",
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
        itemId: 2,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 18,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "flameShotA",
        sprite: "fire",
        name: "Fire Beam",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff4a4a",
        itemId: 11,
        nodeType: "upgrade",
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
        itemId: 17,
        nodeType: "upgrade",
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
        itemId: 26,
        nodeType: "upgrade",
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
        itemId: 23,
        nodeType: "upgrade",
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
        itemId: 4,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "speedBooster",
        sprite: "speed",
        name: "Speed Booster",
        start: 0,
        max: 1,
        segments: [],
        bg: "ff0094",
        itemId: 15,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "highJump",
        sprite: "high",
        name: "Hi-Jump Boots",
        start: 0,
        max: 1,
        segments: [],
        bg: "c0a8d8",
        itemId: 12,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        start: 0,
        max: 1,
        segments: [],
        bg: "00a0e0",
        itemId: 29,
        nodeType: "upgrade",
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
        itemId: 7,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        start: 0,
        max: 1,
        segments: [],
        bg: "69cd69",
        itemId: 27,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "fullPowerSuit",
        sprite: "chozo",
        name: "Chozo Charm",
        start: 0,
        max: 1,
        segments: [],
        bg: "78a4bc",
        itemId: 30,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "seekerLauncherC",
        sprite: "seeker",
        name: "Seeker Missiles",
        start: 0,
        max: 1,
        segments: [],
        bg: "d82800",
        itemId: 21,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "superMissileB",
        sprite: "mega",
        name: "Super Blast",
        start: 0,
        max: 1,
        segments: [],
        bg: "007f0e",
        itemId: 32,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "shieldGenerator",
        sprite: "hyper",
        name: "Hyper Shield",
        start: 0,
        max: 1,
        segments: [],
        bg: "007098",
        itemId: 31,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "adapter",
        sprite: "adapter",
        name: "Bomb-Beam Adapter",
        start: 0,
        max: 1,
        segments: [],
        bg: "98b830",
        itemId: 28,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        start: 0,
        max: 14,
        segments: [],
        bg: "78a4bc",
        itemId: 5,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missiles",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        start: 0,
        max: 50,
        segments: [],
        bg: "d82800",
        itemId: 3,
        nodeType: "expansion",
        value: 1,
      },{
        id: "superMissileTank",
        sprite: "supers",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        start: 0,
        max: 20,
        segments: [],
        bg: "007f0e",
        itemId: 16,
        nodeType: "expansion",
        value: 1,
      },{
        id: "magneticShieldTank",
        sprite: "shields",
        name: "Magnetic Shield Tanks",
        singleItemName: "Magnetic Shield Tank",
        start: 0,
        max: 15,
        segments: [],
        bg: "007098",
        itemId: 19,
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbombs",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        start: 0,
        max: 15,
        segments: [],
        bg: "98b830",
        itemId: 24,
        nodeType: "expansion",
        value: 1,
      },{
        id: "aquadiaKey",
        sprite: "key",
        name: "Keys",
        singleItemName: "Key",
        start: 0,
        max: 11,
        segments: [],
        bg: "ffffff",
        itemId: 6,
        nodeType: "expansion",
        value: 1,
      },{
        id: "steelarisGear",
        sprite: "gear",
        name: "Gears",
        singleItemName: "Gear",
        start: 0,
        max: 5,
        segments: [],
        bg: "ffffff",
        itemId: 8,
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
            max: 5,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "Second batch",
            type: "counter",
            start: 5,
            max: 10,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "Third batch",
            type: "counter",
            start: 10,
            max: 15,
            bg: "ffffff",
            nodeType: "event",
          },{
            id: "monsterDna",
            sprite: "monsters",
            name: "Final batch",
            type: "counter",
            start: 15,
            max: 25,
            bg: "ffffff",
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
        value: 0,
      },
    ],
    bosses: [
    ],
    areas: [
    ],
    extras: [
      {
        id: "unused",
        name: "Save Station",
        nodeType: "save",
      },
    ],
    map: [
    ],
    grid: "mph",
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
            itemId: 2,
            nodeType: "upgrade",
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
            itemId: 12,
            nodeType: "upgrade",
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
            itemId: 15,
            nodeType: "upgrade",
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
            itemId: 23,
            nodeType: "upgrade",
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
        itemId: 5,
        nodeType: "upgrade",
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
        itemId: 8,
        nodeType: "upgrade",
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
        itemId: 17,
        nodeType: "upgrade",
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
            itemId: 6,
            nodeType: "upgrade",
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
            itemId: 16,
            nodeType: "upgrade",
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
            itemId: 20,
            nodeType: "upgrade",
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
            itemId: 24,
            nodeType: "upgrade",
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
            itemId: 27,
            nodeType: "upgrade",
            value: 0,
          },/*
        ],
        bg: "ffb508",
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
        itemId: 9,
        nodeType: "upgrade",
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
        itemId: 10,
        nodeType: "upgrade",
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
        itemId: 19,
        nodeType: "upgrade",
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
        itemId: 25,
        nodeType: "upgrade",
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
            itemId: 13,
            nodeType: "upgrade",
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
            itemId: 21,
            nodeType: "upgrade",
            value: 0,
          },{
            id: "fullPowerSuit",
            name: "Final Suit",
            start: 0,
            max: 1,
            sprite: "final",
            bg: "ff7e00",
            nodeType: "upgrade",
            value: 0,
            itemId: 26,
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
        singleItemName: "Energy Tank",
        start: 0,
        max: 20,
        segments: [],
        bg: "78a4bc",
        itemId: 4,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        alreadyHasMainItem: true,
        start: 0,
        max: 48,
        segments: [],
        bg: "d82800",
        itemId: 3,
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        sprite: "pbomb",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        alreadyHasMainItem: true,
        start: 0,
        max: 32,
        segments: [],
        bg: "98b830",
        itemId: 18,
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
        nodeType: "event",
        value: 0,
      },{
        id: "mainBoiler",
        name: "Sector 3 - Cooling unit operational.",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "event",
        value: 0,
      },{
        id: "etedach",
        sprite: "animals",
        name: "Main Deck - Lock disengaged. Gate opening.",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "event",
        value: 0,
      },{
        id: "reactorCore",
        name: "Main Deck - Auxiliary power engaged.",
        start: 0,
        max: 1,
        segments: [],
        bg: "ffffff",
        nodeType: "event",
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
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
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
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
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
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
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
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
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
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
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
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
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
            nodeType: "event",
          },
        ],
        bg: "ffffff",
        nodeType: "event",
      }, */{
        id: "securityL0",
        sprite: "securityL0",
        name: "Security Level 0",
        start: 0,
        max: 1,
        segments: [],
        bg: "c8d8d8",
        itemId: 1,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "securityL1",
        sprite: "securityL1",
        name: "Security Level 1",
        start: 0,
        max: 1,
        segments: [],
        bg: "28d8f8",
        itemId: 7,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "securityL2",
        sprite: "securityL2",
        name: "Security Level 2",
        start: 0,
        max: 1,
        segments: [],
        bg: "90f890",
        itemId: 11,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "securityL3",
        sprite: "securityL3",
        name: "Security Level 3",
        start: 0,
        max: 1,
        segments: [],
        bg: "f8f838",
        itemId: 14,
        nodeType: "upgrade",
        value: 0,
      },{
        id: "securityL4",
        sprite: "securityL4",
        name: "Security Level 4",
        start: 0,
        max: 1,
        segments: [],
        bg: "f82828",
        itemId: 22,
        nodeType: "upgrade",
        value: 0,
      },
    ],
    bosses: [
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
        id: 1,
        name: "Main Deck",
        hasGameStart: true,
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Sector 1 - SRX",
        color: "db2b00",
        startNodeId: 11,
      },{
        id: 3,
        name: "Sector 2 - TRO",
        color: "db2b00",
        startNodeId: 21,
      },{
        id: 4,
        name: "Sector 3 - PYR",
        color: "db2b00",
        startNodeId: 31,
      },{
        id: 5,
        name: "Sector 4 - AQA",
        color: "009700",
        startNodeId: 41,
      },{
        id: 6,
        name: "Sector 5 - ARC",
        color: "bf00bf",
        startNodeId: 51,
      },{
        id: 7,
        name: "Sector 6 - NOC",
        color: "bcbcbc",
        startNodeId: 61,
      },{
        id: 8,
        name: "Restricted Lab",
        color: "bcbcbc",
        startNodeId: 71,
      }
    ],
    extras: [
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
        name: "Save Room",
        nodeType: "save",
      },{
        id: "unused",
        name: "Recharge Room",
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Data Room",
        nodeType: "event",
      },{
        id: "unused",
        name: "Navigation Room",
        nodeType: "lore",
      },
    ],
    map: [
    ],
    grid: "mf",
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
            itemId: 8,
            progressionToItemId: 17,
            nodeType: "upgrade",
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
            itemId: 17,
            progressionToItemId: 26,
            nodeType: "upgrade",
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
            itemId: 26,
            nodeType: "upgrade",
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
            itemId: 3,
            progressionToItemId: 11,
            nodeType: "upgrade",
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
            itemId: 11,
            nodeType: "upgrade",
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
        itemId: 15,
        nodeType: "upgrade",
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
            itemId: 16,
            progressionToItemId: 19,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "iceMissileB",
            name: "Ice Missiles",
            over: "Z_Orb",
            overText: "E.M.M.I.-05IM Defeated",
            start: 0,
            max: 1,
            bg: "2038ec",
            itemId: 19,
            nodeType: "upgrade",
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
        itemId: 21,
        nodeType: "upgrade",
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
            itemId: 10,
            progressionToItemId: 23,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "gravitySuitA",
            name: "Gravity Suit",
            start: 0,
            max: 1,
            bg: "602880",
            itemId: 23,
            nodeType: "upgrade",
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
        itemId: 7,
        nodeType: "upgrade",
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
        itemId: 13,
        nodeType: "upgrade",
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
        itemId: 20,
        nodeType: "upgrade",
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
        itemId: 9,
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bombD",
        name: "Bombs",
        //sprite: "bombs",
        start: 0,
        max: 1,
        segments: [],
        bg: "3800a8",
        itemId: 12,
        nodeType: "upgrade",
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
        itemId: 25,
        nodeType: "upgrade",
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
        itemId: 27,
        nodeType: "upgrade",
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
        itemId: 6,
        nodeType: "upgrade",
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
        itemId: 14,
        nodeType: "upgrade",
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
            itemId: 18,
            progressionToItemId: 22,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "spaceJump",
            name: "Space Jump",
            start: 0,
            max: 1,
            bg: "00a0e0",
            itemId: 22,
            nodeType: "upgrade",
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
        itemId: 24,
        nodeType: "upgrade",
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
        singleItemName: "Energy Tank",
        sprite: "energy",
        start: 0,
        max: 8,
        segments: [],
        bg: "78a4bc",
        itemId: 5,
        nodeType: "expansion",
        value: 1,
      },{
        id: "dreadPart",
        locale: {
          'enUS': {
            id: "energyPart"
          }
        },
        name: "Energy Parts",
        singleItemName: "Energy Part",
        sprite: "part",
        start: 0,
        max: 16,
        segments: [],
        bg: "fcc4d8",
        itemId: 4,
        nodeType: "expansion",
        value: 1,
      },{
        id: "missileTank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        sprite: "missile",
        alreadyHasMainItem: true,
        start: 0,
        max: 75,
        segments: [],
        bg: "d82800",
        itemId: 1,
        nodeType: "expansion",
        value: 1,
      },{
        id: "doubleMissileTank",
        name: "Missile+ Tanks",
        singleItemName: "Missile+ Tank",
        sprite: "missilePlus",
        alreadyHasMainItem: true,
        start: 0,
        max: 11,
        segments: [],
        bg: "007098",
        itemId: 2,
        nodeType: "expansion",
        value: 1,
      },{
        id: "powerBombTank",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        sprite: "pbombs",
        alreadyHasMainItem: true,
        start: 0,
        max: 13,
        segments: [],
        bg: "98b830",
        itemId: 28,
        nodeType: "expansion",
        value: 1,
      },{
        id: "monsterDna",
        name: "Metroid DNA",
        start: 9,
        max: 12,
        segments: [],
        bg: "ffffff",
        itemId: 29,
        nodeType: "artifact",
        value: 1,
        displayIfScramble: true,
      },
    ],
    bosses: [
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
        id: 1,
        name: "Artaria",
        color: "2038ec",
        startNodeId: 1,
      },{
        id: 2,
        name: "Cataris",
        color: "db2b00",
        startNodeId: 1,
      },{
        id: 3,
        name: "Dairon",
        color: "db2b00",
        startNodeId: 1,
      },{
        id: 4,
        name: "Burenia",
        color: "db2b00",
        startNodeId: 1,
      },{
        id: 5,
        name: "Ferenia",
        color: "009700",
        startNodeId: 1,
      },{
        id: 6,
        name: "Ghavoran",
        color: "bf00bf",
        startNodeId: 1,
      },{
        id: 7,
        name: "Elun",
        color: "bf00bf",
        startNodeId: 1,
      },{
        id: 8,
        name: "Hanubia",
        color: "bcbcbc",
        startNodeId: 1,
      },{
        id: 9,
        name: "Itorash",
        color: "bcbcbc",
        startNodeId: 1,
      },{
        id: 10,
        name: "Escape Sequence",
        color: "bcbcbc",
        startNodeId: 1,
      }
    ],
    extras: [
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
        nodeType: "trigger",
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
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Magnet Door Lowered", // Artaria, in EMMI Zone, near Missile Tank, allows passage onwards to Corpius
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Magnet Platform Lowered", // Artaria, in EMMI Zone, allows escape from CU and EMMI Battle area
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Spinner Rotated", // Artaria, in EMMI Zone
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Artaria, in EMMI Zone, only for convenient shortcut?
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Slide Escape", // Artaria, in EMMI Zone, one-time use only?
        nodeType: "trigger", // one-way toll?
      },{
        id: "unused",
        name: "Bridge Rotated", // Artaria, by waterfall room (frozen solid when planet is freezing, leading to Red Chozo-X fight)
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Bridge Rotated", // Artaria, in EMMI Zone somewhere
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Bridge Rotated", // Artaria, near Screw Attack area
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Magnet Wall Lowered", // Cataris
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Lowered Lava", // Cataris, might be Charge Beam Generator 1?
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Magnet Walls Pump", // Cataris, might be Charge Beam Generator 2?
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Cataris, on path leading towards Dairon tram
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Cataris, in hot zone
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Magnet Platform Lowered", // Cataris, for Power Bomb Tank
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ferenia, first one escaping Escue arena
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ferenia, leading to Twin Robot arena
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ferenia, leading to Space Jump
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ferenia, in cold zone, on the way to EMMI-06WB and CU showdown
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Ghavoran, blocking Green teleportal
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Bridge Rotated", // Ghavoran, allowing access to Super Missiles
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Magnet Platform Lowered", // Ghavoran, allowing access to Super Missiles
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Big Grapple Box Pulled and in Place", // Ghavoran, near elevator to Burenia
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Big Grapple Box Pulled and in Place", // Ghavoran, near tram to Ferenia
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Burenia, near cyan Teleportal
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Burenia, near Energy Tank, in underwater sector
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Magnet Wall Lowered", // Burenia
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Storm Gate Destroyed", // Dairon, near THAT ONE SHINESPARKY Missile+ Tank
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Dairon, near western elevator to Ferenia
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Dairon, near tram to Cataris (first big room)
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Dairon, near first Save Room
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Wide Beam Block Moved", // Dairon, near early LARGE room
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Big Grapple Box Pulled and in Place", // Dairon, near eastern elevator to Ferenia
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Dairon, near yellow teleportal
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Dairon, near storm gate
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Dairon, in cold zone (early Super Missiles route)
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Burenia, in first vanilla big room, over fan with Energy Part
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Burenia, near green teleportal, near Energy Part, required for getting a Missile+ Tank
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Burenia, trick for Gravity Suit without environmental destruction
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Speed Blocks Destroyed", // Cataris, for hotzone Energy Part, the one behind the Wave Beam Door
        nodeType: "trigger",
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
        name: "Save Station",
        nodeType: "save",
      },
    ],
    map: [
    ],
    grid: "md",
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
        nodeType: "upgrade",
      },{
        id: "book",
        name: "Magic Book",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
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
            nodeType: "upgrade",
          },{
            id: "redRing",
            name: "Red Ring",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
      },{
        id: "magicKey",
        name: "Magic Key",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "bracelets",
        name: "Power Bracelet",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
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
            nodeType: "upgrade",
          },{
            id: "magicRang",
            name: "Magical Boomerang",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
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
            nodeType: "upgrade",
          },{
            id: "silverArrows",
            name: "Silver Arrow",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
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
            nodeType: "upgrade",
          },{
            id: "redCandle",
            name: "Red Candle",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
      },{
        id: "bait",
        name: "Bait",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "note",
        name: "Note",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "magicRod",
        name: "Magic Rod",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
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
            nodeType: "upgrade",
          },{
            id: "whiteSword",
            name: "White Sword",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "upgrade",
          },{
            id: "magicalSword",
            name: "Magical Sword",
            start: 0,
            max: 1,
            value: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
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
    bosses: [
    ],
    areas: [
    ],
    extras: [
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
        nodeType: "upgrade",
      },{
        id: "jumpSpell",
        name: "Jump Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "lifeSpell",
        name: "Life Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "fairySpell",
        name: "Fairy Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "fireSpell",
        name: "Fire Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "reflectSpell",
        name: "Reflect Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "spellSpell",
        name: "Spell Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "thunderSpell",
        name: "Thunder Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
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
        nodeType: "upgrade",
      },{
        id: "mirror",
        name: "Mirror",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "waterOfLife",
        name: "Water of Life",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "water",
        name: "Water",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "child",
        name: "Child",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
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
        nodeType: "upgrade",
      },{
        id: "candle",
        name: "Candle",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "glove",
        name: "Glove",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "raft",
        name: "Raft",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "boots",
        name: "Boots",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "whistle",
        name: "Flute",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "cross",
        name: "Cross",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "hammer",
        name: "Hammer",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "magicKey",
        name: "Magic Key",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
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
        nodeType: "upgrade",
      },{
        id: "upStab",
        name: "Up Stab",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
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
            nodeType: "event",
            clearIfScramble: true,
          },
        ],
        value: 0,
      },
    ],
    bosses: [
    ],
    areas: [
    ],
    extras: [
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "bowSilver",
            name: "Silver Arrows",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "magicRang",
            name: "Magical Boomerang",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "powder",
            name: "Magic Powder",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "iceRod",
        name: "Ice Rod",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bombos",
        name: "Bombos",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "ether",
        name: "Ether",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "quake",
        name: "Quake",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "hammer",
        name: "Magic Hammer",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D1 Big Chest",
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "flute",
            name: "Flute",
            start: 0,
            max: 1,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "bird",
            name: "Flute (Warping enabled)",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "book",
        name: "Book of Mudora",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "byrna",
        name: "Cane of Byrna",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "cape",
        name: "Magic Cape",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "mirror",
        name: "Magic Mirror",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "masterSword",
            name: "Master Sword",
            start: 0,
            max: 1,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "temperedSword",
            name: "Tempered Sword",
            start: 0,
            max: 1,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "goldenSword",
            name: "Golden Sword",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "redShield",
            name: "Red Sword",
            start: 0,
            max: 1,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "mirrorShield",
            name: "Mirror Sword",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D7 Big Chest",
            nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "redMail",
            name: "Red Mail",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "GT Big Chest",
            nodeType: "upgrade",
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
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "mitt",
            name: "Titan's Mitt",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D4 Big Chest",
            nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "pearl",
        name: "Moon Pearl",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "L3 Big Chest",
        segments: [],
        nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "arrowsExp",
        name: "Arrow Capacity",
        start: 0,
        max: 8,
        segments: [],
        nodeType: "upgrade",
        value: 0,
      },{
        id: "bombsExp",
        name: "Bomb Capacity",
        start: 0,
        max: 8,
        segments: [],
        nodeType: "upgrade",
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
    bosses: [
    ],
    areas: [
    ],
    extras: [
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
        nodeType: "upgrade",
        segments: [ // assuming progressive bow
          /*{
            id: "bowArrows",
            name: "Bow and Arrows",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "L1 Big Chest",
            nodeType: "upgrade",
            value: 1,
          },{
            id: "bowSilver",
            name: "Bow and Silver Arrows",
            start: 0,
            max: 1,
            nodeType: "upgrade",
            value: 1,
          }*/
        ],
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 0,
          },*/{
            id: "silverArrows",
            name: "Silver Arrows",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "magicRang",
            name: "Magical Boomerang",
            start: 0,
            max: 1,
            nodeType: "upgrade",
            value: 1,
          }/* 
        ],
        nodeType: "upgrade",
        value: 1,
      } */,{
        id: "hookshot",
        name: "Hookshot",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D2 Big Chest",
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bombs",
        name: "Bombs",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "powder",
            name: "Magic Powder",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "iceRod",
        name: "Ice Rod",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "bombos",
        name: "Bombos",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "ether",
        name: "Ether",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "quake",
        name: "Quake",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "hammer",
        name: "Magic Hammer",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "D1 Big Chest",
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "shovel",
        name: "Shovel",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "bird",
            name: "Flute (Warping enabled)",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "book",
        name: "Book of Mudora",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "byrna",
        name: "Cane of Byrna",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "cape",
        name: "Magic Cape",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
        value: 1,
      },{
        id: "mirror",
        name: "Magic Mirror",
        start: 0,
        max: 1,
        segments: [],
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "masterSword",
            name: "Master Sword",
            start: 0,
            max: 1,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "temperedSword",
            name: "Tempered Sword",
            start: 0,
            max: 1,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "goldenSword",
            name: "Golden Sword",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "redShield",
            name: "Red Sword",
            start: 0,
            max: 1,
            nodeType: "upgrade",
            value: 1,
          },{
            id: "mirrorShield",
            name: "Mirror Sword",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D7 Big Chest",
            nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "redMail",
            name: "Red Mail",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "GT Big Chest",
            nodeType: "upgrade",
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
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "mitt",
            name: "Titan's Mitt",
            start: 0,
            max: 1,
            over: "MC_Chest",
            overText: "D4 Big Chest",
            nodeType: "upgrade",
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
        nodeType: "upgrade",
        value: 1,
      },{
        id: "pearl",
        name: "Moon Pearl",
        start: 0,
        max: 1,
        over: "MC_Chest",
        overText: "L3 Big Chest",
        segments: [],
        nodeType: "upgrade",
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
            nodeType: "upgrade",
            value: 1,
          },{
            id: "quarterMagic",
            name: "Quarter Magic",
            start: 0,
            max: 1,
            nodeType: "upgrade",
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
    bosses: [
    ],
    areas: [
    ],
    extras: [
    ],
    map: [
    ],
  }
};