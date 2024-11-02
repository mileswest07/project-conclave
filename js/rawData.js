// To be kept for archival and organizational purposes
// First convert to JSON object (js/rawdata.json), then split into component files (data/*.json)
const rawData = {
  "mrd": {
    checklistWidth: 5,
    checklistLayout: [
      { lookupId: 5, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 8, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 10, segments: [], },
      { lookupId: 4, value: 1, start: 0, max: 31, segments: [], },
      // { id: "boss", nodeType: "boss", name: "Access", value: 0, start: 0, max: 2, segments: [], },
      { lookupId: 14, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 15, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 16, value: 0, start: 0, max: 1, segments: [], },
    ],
    items: [
      {
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missiles",
        bg: "d82800",
        itemId: 4,
        nodeType: "expansion",
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        bg: "c0a8d8",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 6,
        nodeType: "expansion",
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        bg: "3800a8",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "wallJumpBoots",
        sprite: "wall",
        name: "Wall Jump Boots",
        bg: "ff7e00",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "springBallA",
        sprite: "spring",
        name: "Spring Ball",
        bg: "886848",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Prototype Wave Beam",
        bg: "92278f",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "barrierA",
        sprite: "barrier",
        name: "Varia Suit",
        bg: "ff7b7b",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        bg: "2038ec",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "m_lock1",
        sprite: "captain",
        name: "Access Lock 1",
        bg: "747474",
        itemId: 14,
        nodeType: "artifact",
      },{
        id: "m_lock2",
        sprite: "research",
        name: "Access Lock 2",
        bg: "747474",
        itemId: 15,
        nodeType: "artifact",
      },{
        id: "monsterCapsule",
        sprite: "cell",
        name: "Metroid Cell Capsule",
        bg: "008080",
        itemId: 16,
        nodeType: "artifact",
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
      },{
        id: 2,
        name: "Surface Caverns Lift 2", // "Desolate Surface East"
        color: "db2b00",
      },{
        id: 3,
        name: "Surface Caverns Lift 1", // "Desolate Surface West"
        color: "db2b00",
      },{
        id: 4,
        name: "Volga", // "Bone Yard"
        color: "009700",
      },{
        id: 5,
        name: "Vaara", // "Chozo Jungle"
        color: "bf00bf",
      },{
        id: 6,
        name: "Federation Ship", // "Federation Science Ship"
        color: "bf00bf",
      },{
        id: 7,
        name: "Metroid Nest", // "Metroid Hive"
        color: "bcbcbc",
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Beta Ray Info",
        extraId: 1001,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Captain Hint",
        extraId: 1002,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Two Codes Hint",
        extraId: 1003,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Wave Beam Hint",
        extraId: 1004,
        nodeType: "lore",
      },{
        id: "unused",
        name: "That One Easter Egg",
        extraId: 1006,
        nodeType: "easter",
      },{
        id: "unused",
        name: "Word Search Easter Egg",
        extraId: 1005,
        nodeType: "easter",
      },{
        id: "rechargeRoom",
        name: "Restore Energy and Ammo",
        extraId: 1007,
        nodeType: "recharge",
      },{
        id: "unused",
        name: "Underwater Caverns",
        extraId: 1008,
        nodeType: "area",
      },{
        id: "unused",
        name: "Chozo Ruins",
        extraId: 1009,
        nodeType: "area",
      },{
        id: "unused",
        name: "Escape Sequence",
        extraId: 1010,
        nodeType: "event",
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          { nodeType: "recharge", id: 1007 },
          { nodeType: "expansion", id: 4, isRandomizableItem: true },
          { nodeType: "expansion", id: 4, isRandomizableItem: true },
          { nodeType: "elevator", transportToMapId: 2, toStartHubId: 11 },
          { nodeType: "elevator", transportToMapId: 3, toStartHubId: 21 },
          { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "elevator", transportToMapId: 5, toStartHubId: 41 },
              { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 6, isRandomizableItem: true },
              ]},
            ]},
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true, hubId: 3},
            { nodeType: "upgrade", id: 7, isRandomizableItem: true, hubId: 3 },
          ], vineToHubId: 3},
          { nodeType: "lock", id: 10, reqdItemCount: 1, children: [], vineToHubId: 3},
          { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
            ]},
          ]},
          { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "elevator", transportToMapId: 4, toStartHubId: 31 },
              { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
                { nodeType: "upgrade", id: 12, isRandomizableItem: true },
              ]},
              { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                { nodeType: "recharge", id: 1007 },
                { nodeType: "expansion", id: 10, isRandomizableItem: true },
              ]},
            ]},
            { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 4, isRandomizableItem: true },
                { nodeType: "expansion", id: 13, isRandomizableItem: true },
              ]},
              { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                { nodeType: "easter", id: 1005 },
              ]},
            ]},
          ]},
        ],
      },
      { hubId: 11,
        nodeType: "start",
        mapId: 2,
        children: [
          { nodeType: "area", id: 1008, children: [
            { nodeType: "recharge", id: 1007, hubId: 12},
            { nodeType: "expansion", id: 4, isRandomizableItem: true, hubId: 12},
            { nodeType: "expansion", id: 4, isRandomizableItem: true, hubId: 12},
            { nodeType: "expansion", id: 4, isRandomizableItem: true, hubId: 12},
            { nodeType: "upgrade", id: 5, isRandomizableItem: true, hubId: 12},
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
            ], hubId: 12},
          ]},
          { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true, hubId: 13},
            { nodeType: "expansion", id: 6, isRandomizableItem: true, hubId: 13},
            { nodeType: "upgrade", id: 7, isRandomizableItem: true, hubId: 13},
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
            ], hubId: 13},
            { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
            ], hubId: 13},
          ], vineToHubId: 13},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [], vineToHubId: 13},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "elevator", transportToMapId: 6, toStartHubId: 51 },
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "upgrade", id: 9, isRandomizableItem: true, hubId: 14},
          ], vineToHubId: 14},
          { nodeType: "lock", id: 10, reqdItemCount: 1, children: [], vineToHubId: 14},
          { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 12, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
            ]},
          ]},
          { nodeType: "lock", id: 12, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 4, isRandomizableItem: true, hubId: 15},
              ], vineToHubId: 15},
              { nodeType: "lock", id: 9, reqdItemCount: 1, children: [], vineToHubId: 15},
            ]},
          ]},
          { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
            { nodeType: "dropdown", children: [
              { nodeType: "elevator", transportToMapId: 3, toStartHubId: 21}, // toStartHubId: 26, hubId: 16}, // for connections that go between areas, we need to make sure the hubId and the toStartHubId of each connection, matches
            ], vineToHubId: 16},
            { nodeType: "lock", id: 8, reqdItemCount: 1, children: [], vineToHubId: 16},
          ]},
        ],
      },
      { hubId: 21,
        nodeType: "start",
        mapId: 3,
        children: [
          { nodeType: "expansion", id: 4, isRandomizableItem: true },
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 6, isRandomizableItem: true },
            { nodeType: "upgrade", id: 8, isRandomizableItem: true },
            { nodeType: "dropdown", children: [
              { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                { nodeType: "recharge", id: 1007, hubId: 26},
                { nodeType: "elevator", transportToMapId: 2, toStartHubId: 11}, // toStartHubId: 16, hubId: 26},
              ], vineToHubId: 26},
              { nodeType: "lock", id: 9, reqdItemCount: 1, children: [], vineToHubId: 26},
              { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 4, isRandomizableItem: true },
              ]},
            ], vineToHubId: 25},
            { nodeType: "lock", id: 8, reqdItemCount: 1, children: [], vineToHubId: 25},
            { nodeType: "lock", id: 12, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 4, isRandomizableItem: true, hubId: 28},
                { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
                  { nodeType: "expansion", id: 4, isRandomizableItem: true },
                ], hubId: 28},
              ], vineToHubId: 28},
            ]},
            { nodeType: "lock", id: 9, reqdItemCount: 1, children: [], vineToHubId: 28},
          ]},
        ],
      },
      { hubId: 31,
        nodeType: "start",
        mapId: 4,
        children: [
          { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
            { nodeType: "upgrade", id: 9, isRandomizableItem: true, hubId: 32},
          ], vineToHubId: 32},
          { nodeType: "lock", id: 9, reqdItemCount: 1, children: [], vineToHubId: 32},
          { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
            ]},
          ]},
          { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "boss", id: 103 },
            ]},
          ]},
          { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 14, reqdItemCount: 1, children: [
                { nodeType: "lock", id: 15, reqdItemCount: 1, children: [
                  { nodeType: "boss", id: 104, children: [
                    { nodeType: "recharge", id: 1007 },
                    { nodeType: "elevator", transportToMapId: 7, toStartHubId: 61 },
                  ]},
                ]},
              ]},
            ]},
          ]},
        ],
      },
      { hubId: 41,
        nodeType: "start",
        mapId: 5,
        children: [
          { nodeType: "recharge", id: 1007 },
          { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 11, isRandomizableItem: true },
            ]},
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true },
          ], vineToHubId: 42},
          { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 12, reqdItemCount: 1, children: [], vineToHubId: 42},
          ]},
          { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
            ]},
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
              { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
                { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
                  { nodeType: "expansion", id: 6, isRandomizableItem: true },
                ]},
              ]},
              { nodeType: "area", id: 1009, children: [
                { nodeType: "recharge", id: 1007 },
                { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
                  { nodeType: "expansion", id: 4, isRandomizableItem: true },
                ]},
                { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
                  { nodeType: "recharge", id: 1007 },
                  { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
                    { nodeType: "expansion", id: 4, isRandomizableItem: true },
                  ]},
                  { nodeType: "boss", id: 101, children: [
                    { nodeType: "expansion", id: 6, isRandomizableItem: true },
                    { nodeType: "upgrade", id: 15 },
                    { nodeType: "dropdown", children: [], vineToHubId: 43 },
                  ]},
                ]},
              ]},
            ]},
          ]},
          { nodeType: "return", children: [], vineToHubId: 43},
        ],
      },
      { hubId: 51,
        nodeType: "start",
        mapId: 6,
        children: [
          { nodeType: "lore", id: 1001 },
          { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
            { nodeType: "recharge", id: 1007 },
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 6, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 4, isRandomizableItem: true },
              ]},
            ], hubId: 52},
          ], vineToHubId: 52},
          { nodeType: "lock", id: 8, reqdItemCount: 1, children: [], vineToHubId: 52},
          { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 10, isRandomizableItem: true },
            ], hubId: 53},
          ], vineToHubId: 53},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [], vineToHubId: 53},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "lore", id: 1002 },
            { nodeType: "lore", id: 1003 },
            { nodeType: "expansion", id: 4, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "recharge", id: 1007 },
            ]},
          ]},
          { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "lore", id: 1004 },
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
            ]},
          ]},
          { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
                { nodeType: "easter", id: 1006, children: [
                  { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
                    { nodeType: "expansion", id: 6, isRandomizableItem: true },
                  ]},
                ]},
                { nodeType: "dropdown", children: [
                  { nodeType: "boss", id: 102, children: [
                    { nodeType: "dropdown", children: [
                      { nodeType: "upgrade", id: 14 },
                      { nodeType: "upgrade", id: 16 },
                      { nodeType: "lock", id: 7, reqdItemCount: 1, children: [], vineToHubId: 56},
                    ]},
                  ], hubId: 55},
                ], vineToHubId: 55},
              ]},
            ], hubId: 54},
          ], vineToHubId: 54},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [], vineToHubId: 54},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [], vineToHubId: 55},
          ]},
          { nodeType: "return", children: [], vineToHubId: 56 },
        ],
      },
      { hubId: 61,
        nodeType: "start",
        mapId: 7,
        children: [
          { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
            { nodeType: "recharge", id: 1007 },
            { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
              { nodeType: "recharge", id: 1007 },
              { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
                { nodeType: "recharge", id: 1007 },
                { nodeType: "boss", id: 105, children: [
                  { nodeType: "event", id: 1010, children: [
                    { nodeType: "end" },
                  ]},
                ]},
              ]},
            ]},
          ]},
        ],
      },
    ],
    grid: "m1_grid.png",
  },
  "m1": {
    checklistWidth: 4,
    checklistLayout: [
      { lookupId: 3, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 8, value: 1, start: 0, max: 1, segments: [], nodeType: "slot", slotType: "beam", },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], nodeType: "slot", slotType: "beam", },
      { lookupId: 5, value: 1, start: 0, max: 8, segments: [], },
      { lookupId: 4, value: 1, start: 0, max: 21, segments: [], },
      // { value: 0, start: 0, max: 2, segments: [], id: "boss", nodeType: "boss", name: "Bosses Defeated", },
      { lookupId: 101, value: 0, start: 0, max: 1, segments: [], nodeType: "boss", id: "kraid", sprite: "kraid", name: "Kraid Defeated", },
      { lookupId: 102, value: 0, start: 0, max: 1, segments: [], nodeType: "boss", id: "ridley", sprite: "ridley", name: "Ridley Defeated", },
    ],
    items: [
      {
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball", // "Maru Mari"
        bg: "d8a480",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missiles",
        bg: "d82800",
        itemId: 4,
        nodeType: "expansion",
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 5,
        nodeType: "expansion",
      },{
        id: "longBeamA",
        locale: {
          'enUS': {
            id: "longBeam"
          }
        },
        sprite: "long",
        name: "Long Beam",
        bg: "7f2800",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        bg: "3800a8",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        bg: "2038ec",
        itemId: 8,
        nodeType: "slot",
        slotType: "beam",
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        bg: "c0a8d8",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        bg: "92278f",
        itemId: 11,
        nodeType: "slot",
        slotType: "beam",
      },{
        id: "barrierA",
        sprite: "barrier",
        name: "Varia Suit",
        bg: "ff7b7b",
        itemId: 12,
        nodeType: "upgrade",
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
      },{
        id: 2,
        name: "Norfair",
        color: "db2b00",
      },{
        id: 3,
        name: "Kraid",
        color: "009700",
      },{
        id: 4,
        name: "Ridley",
        color: "bf00bf",
      },{
        id: 5,
        name: "Tourian",
        color: "bcbcbc",
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Escape Sequence",
        extraId: 1001,
        nodeType: "event",
      }
    ],
    mapTree: [
      { hubId: 1, // 1 = start of all nodes / start of the game; hubId will match to the toStartHubId of transporter nodes, necessary for areas with multiple transporter destinations
        nodeType: "start", // indicates the start of a map, not necessarily the start of the game
        mapId: 1, // will match to the transportToMapId of transporter nodes, necessary for areas with multiple transporter destinations
        children: [
          { nodeType: "upgrade", id: 3, isRandomizableItem: true}, // if children.length === 0, this is a leaf
          { nodeType: "lock", id: 3, reqdItemCount: 1, children: [ // if children.length > 1, this is a hub
            { nodeType: "upgrade", id: 4, isRandomizableItem: true },
            { nodeType: "expansion", id: 5, isRandomizableItem: true }, // these will be sorted via nodeType and id, so they can be in any order for now
            { nodeType: "elevator", transportToMapId: 2, toStartHubId: 11 }, // toStartHubId will need to point to an explicitly-set hubId; the rest of the hubs will have dynamic ids assigned that do not conflict with these preset values
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 6, isRandomizableItem: true },
            ]},
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "upgrade", id: 7, isRandomizableItem: true },
            ]},
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 101, reqdItemCount: 1, children: [
                { nodeType: "lock", id: 102, reqdItemCount: 1, children: [
                  { nodeType: "elevator", transportToMapId: 5, toStartHubId: 41 },
                ]},
              ]},
            ]},
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                { nodeType: "slot", id: 8, isRandomizableItem: true },
              ]},
            ]},
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
              { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
                { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
                  { nodeType: "expansion", id: 12, isRandomizableItem: true },
                ]},
              ]},
            ]},
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 5, isRandomizableItem: true, hubId: 4 }, // hubId here denotes intended reference point for possible transporters, one-ways, or vines
              // all affected children need the hubId, as they will be grouped together and sorted, while the code sorts the parents and determines the primary. As such, current nodemapping of vine-children is technically temporary
            ], vineToHubId: 4}, // a vine, needs to explicitly reference a hub via vineToHubId; vine height and length will be dynamically determined by calculating parentage of all vine ends and determining positional differences between them
            { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
                // for a vine with zero children, expect that another vine-node (with vineToHubId property) has the children nodes. Else, finish the vine connection but render zero children, useful for deadends
              ], vineToHubId: 4}, // note that vine connections are not between siblings, but direct parents of the vine
            ]},
          ]},
          { nodeType: "lock", id: 3, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
              { nodeType: "elevator", transportToMapId: 3, toStartHubId: 21 }
            ]}
          ]},
          { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 5, isRandomizableItem: true }
          ]},
        ],
      },
      { hubId: 11,
        nodeType: "start",
        mapId: 2,
        children: [
          { nodeType: "expansion", id: 4, isRandomizableItem: true },
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true, children: [ // yes, collectibles can have children, too; sometimes this is necessary for tying event flags to collection events, or for consolidating the view
              { nodeType: "expansion", id: 4, isRandomizableItem: true }
            ]},
            { nodeType: "expansion", id: 4, isRandomizableItem: true, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true, children: [
                { nodeType: "expansion", id: 4, isRandomizableItem: true },
              ]},
            ]},
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "slot", id: 8, isRandomizableItem: true },
            ]},
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true, children: [
                { nodeType: "expansion", id: 4, isRandomizableItem: true },
              ]},
            ]},
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "expansion", id: 9, isRandomizableItem: true },
              { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 4, isRandomizableItem: true },
                { nodeType: "expansion", id: 5, isRandomizableItem: true },
                { nodeType: "expansion", id: 4, isRandomizableItem: true, children: [
                  { nodeType: "expansion", id: 4, isRandomizableItem: true },
                ]},
                { nodeType: "expansion", id: 10, isRandomizableItem: true },
                { nodeType: "expansion", id: 11, isRandomizableItem: true },
              ]},
            ]},
            { nodeType: "elevator", transportToMapId: 4, toStartHubId: 31 },
          ]},
        ],
      },
      { hubId: 21,
        nodeType: "start",
        mapId: 3,
        children: [
          { nodeType: "expansion", id: 4, isRandomizableItem: true },
          { nodeType: "expansion", id: 4, isRandomizableItem: true },
          { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 5, isRandomizableItem: true },
          ]},
          { nodeType: "dropdown", children: [ // for nodes with path data, inject pathData object with the relevant properties; if no pathData, assume normal two-way pathing
            { nodeType: "expansion", id: 4, isRandomizableItem: true, hubId: 22 },
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "boss", id: 101, children: [
                { nodeType: "expansion", id: 4, count: 15 },
                { nodeType: "expansion", id: 5, isRandomizableItem: true },
              ]},
            ], hubId: 22},
          ], vineToHubId: 22},
          { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [  ], vineToHubId: 22},
          ]},
          { nodeType: "return", children: [
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [  ], vineToHubId: 22},
          ]},
        ],
      },
      { hubId: 31,
        nodeType: "start",
        mapId: 4,
        children: [
          { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 5, isRandomizableItem: true, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true, children: [
              { nodeType: "expansion", id: 4, isRandomizableItem: true },
              ]},
            ]},
          ]},
          { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 4, isRandomizableItem: true },
          ]},
          { nodeType: "boss", id: 102, children: [
            { nodeType: "expansion", id: 4, count: 15 },
            { nodeType: "lock", id: 4, reqdItemCount: 2, children: [
              { nodeType: "expansion", id: 5, isRandomizableItem: true },
            ]},
          ]},
        ],
      },
      { hubId: 41,
        nodeType: "start",
        mapId: 5,
        children: [
          { nodeType: "lock", id: 4, reqdItemCount: 2, children: [
            { nodeType: "boss", id: 103, children: [
              { nodeType: "event", id: 1001, children: [
                { nodeType: "end" },
              ]},
            ]},
          ]},
        ],
      },
    ],
    grid: "m1_grid.png",
  },
  "mzm": {
    checklistWidth: 6,
    checklistLayout: [
      { lookupId: 3, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Brinstar Morph Ball Orb Acquired", },
      { lookupId: 8, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Brinstar Bombs Orb Acquired", },
      { lookupId: 15, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Brinstar Varia Suit Orb Acquired", },
      { value: 1, start: 0, max: 1, segments: [
        { lookupId: 18, value: 1, start: 0, max: 1, over: "Z_Orb", overText: "Ridley Unknown Item 3 Orb Acquired", clearIfScramble: true, },
        { lookupId: 23, value: 0, start: 0, max: 1, },
      ]},
      { lookupId: 20, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 4, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Brinstar Long Beam Orb Acquired", },
      { lookupId: 6, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Beam Beast Defeated", },
      { value: 1, start: 0, max: 1, segments: [
        { lookupId: 9, value: 1, start: 0, max: 1, over: "Z_Orb", overText: "Crateria Unknown Item 1 Orb Acquired", clearIfScramble: true, },
        { lookupId: 21, value: 0, start: 0, max: 1, },
      ]},
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Norfair Ice Beam Orb Acquired", },
      { lookupId: 16, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Norfair Wave Beam Orb Acquired", },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Crateria Power Grip Orb Acquired", },
      { value: 1, start: 0, max: 1, segments: [
        { lookupId: 12, value: 1, start: 0, max: 1, over: "Z_Orb", overText: "Kraid Unknown Item 2 Orb Acquired", clearIfScramble: true, },
        { lookupId: 22, value: 0, start: 0, max: 1, },
      ]},
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Kraid Speed Booster Orb Acquired", },
      { lookupId: 14, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Norfair High Jump Boots Orb Acquired", },
      { lookupId: 19, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Norfair Screw Attack Orb Acquired", },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 12, segments: [], },
      { lookupId: 5, value: 1, start: 0, max: 50, segments: [], },
      { lookupId: 17, value: 1, start: 0, max: 15, segments: [], },
      { lookupId: 24, value: 1, start: 0, max: 9, segments: [], },
      { lookupId: 1004, value: 0, start: 0, max: 1, segments: [], },
      { value: 0, start: 0, max: 2, segments: [], id: "boss", name: "Bosses", sprite: "bosses", nodeType: "boss", },
    ],
    items: [
      {
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "longBeamA",
        locale: {
          'enUS': {
            id: "longBeam"
          }
        },
        sprite: "long",
        name: "Long Beam",
        bg: "7f2800",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missiles",
        bg: "d82800",
        itemId: 5,
        nodeType: "expansion",
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        sprite: "charge",
        name: "Charge Beam",
        bg: "808000",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 7,
        nodeType: "expansion",
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        bg: "3800a8",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "unknownItem1",
        sprite: "ui1",
        name: "Unknown Item 1",
        locale: {
          'enUS': {
            id: "unknownItem1a"
          }
        },
        bg: "887878",
        itemId: 9,
        progressionToItemId: 19,
        nodeType: "upgrade",
      },{
        id: "powerGrip",
        sprite: "grip",
        name: "Power Grip",
        bg: "00e8d8",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        bg: "2038ec",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "unknownItem2",
        sprite: "ui2",
        name: "Unknown Item 2",
        locale: {
          'enUS': {
            id: "unknownItem2a"
          }
        },
        bg: "887878",
        itemId: 12,
        progressionToItemId: 20,
        nodeType: "upgrade",
      },{
        id: "speedBooster",
        sprite: "speed",
        name: "Speed Booster",
        bg: "ff0094",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots", // "Hi-Jump"
        bg: "c0a8d8",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "barrierB",
        sprite: "barrier",
        name: "Varia Suit",
        bg: "ff7e00",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        bg: "92278f",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "superMissileTank",
        sprite: "smissile",
        name: "Super Missile Tanks",
        singleItemName: "Super Missiles",
        bg: "007f0e",
        itemId: 17,
        nodeType: "expansion",
      },{
        id: "unknownItem3",
        sprite: "ui3",
        name: "Unknown Item 3",
        locale: {
          'enUS': {
            id: "unknownItem3a"
          }
        },
        bg: "887878",
        itemId: 18,
        progressionToItemId: 21,
        nodeType: "upgrade",
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 19,
        nodeType: "upgrade",
      },{
        id: "fullPowerSuit",
        sprite: "full",
        name: "Fully Powered Suit", // "Chozo Power"
        bg: "ffb508",
        itemId: 20,
        specialCollectionBehavior: true,
        specialCollectionKey: "mzmFullPowerSuit",
        affectsItemIds: [7, 10, 16],
        nodeType: "upgrade",
      },{
        id: "plasmaBeam",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        bg: "00ff08",
        itemId: 21,
        nodeType: "upgrade",
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        bg: "00a0e0",
        itemId: 22,
        nodeType: "upgrade",
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "Gravity Suit",
        bg: "602880",
        itemId: 23,
        nodeType: "upgrade",
      },{
        id: "powerBombTank",
        sprite: "pbomb",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bombs",
        bg: "98b830",
        itemId: 24,
        nodeType: "expansion",
      },
    ],
    bosses: [
      {
        id: "beambeast",
        name: "Beam Beast",
        bossId: 101,
        requires: ["5x1|17x1"],
      },{
        id: "acidworm",
        name: "Acid Worm",
        bossId: 102,
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
      },{
        id: 2,
        name: "Norfair",
        color: "db2b00",
      },{
        id: 3,
        name: "Crateria",
        color: "db2b00",
      },{
        id: 4,
        name: "Kraid",
        color: "009700",
      },{
        id: 5,
        name: "Ridley",
        color: "bf00bf",
      },{
        id: 6,
        name: "Tourian",
        color: "bcbcbc",
      },{
        id: 7,
        name: "Chozodia", // Zero Suit Sequence
        color: "bcbcbc",
      },{
        id: 8,
        name: "Chozodia",
        color: "bcbcbc",
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
        id: "saveRoom",
        name: "Save Station",
        extraId: 1002,
        nodeType: "save",
      },{
        id: "saveRoom",
        name: "Save Station", // with Full Restore
        extraId: 1003,
        nodeType: "recharge",
      },{
        id: "zipline",
        name: "Zipline",
        sprite: "zipline",
        extraId: 1004,
        nodeType: "trigger",
        lockIds: [1],
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "m1_grid.png",
  },
  "mp": {
    checklistWidth: 5,
    checklistLayout: [
      { type: "toggle", start: 0, clearIfScramble: true, segments: [
        { id: "primeSuit", name: "Prime Suit Active", value: 0, start: 1, max: 1, type: "toggle", },
        { id: "fusionSuit", name: "Fusion Suit Active", value: 0, start: 0, max: 1, type: "toggle", },
      ]},
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], displayIfScramble: true, },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Flaahgra Defeated", },
      { lookupId: 21, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Phendrana Drifts - Gravity Chamber", },
      { lookupId: 29, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Omega Pirate Defeated", },
      { lookupId: 14, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Tallon Overworld - Alcove", },
      { lookupId: 3, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Chozo Ruins - Watery Hall", },
      { lookupId: 15, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Phendrana Drifts - Chapel of the Elders", },
      { lookupId: 20, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Chozo Ruins - Antechamber", },
      { lookupId: 27, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Magmoor Caverns - Plasma Processing", },
      { lookupId: 5, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Hive Mecha Defeated", },
      { lookupId: 16, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Phendrana Drifts - Observatory", },
      { lookupId: 19, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Chozo Ruins - Tower of Light", },
      { lookupId: 25, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Magmoor Caverns - Shore Tunnel", },
      { lookupId: 28, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Phazon Mines - Storage Depot A", },
      { lookupId: 8, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Chozo Ruins - Ruined Shrine", },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Incinerator Drone Defeated", },
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Phendrana Drifts - Phendrana Canyon", },
      { lookupId: 18, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Thardus Defeated", },
      { lookupId: 22, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Phazon Mines - Central Dynamo", },
      { lookupId: 2, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 4, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 17, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Phendrana Drifts - Research Core", },
      { lookupId: 26, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Tallon Overworld - Life Grove", },
      { lookupId: 24, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Phazon Mines - Storage Depot B", },
      { lookupId: 7, value: 1, start: 0, max: 14, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 49, segments: [], },
      { lookupId: 23, value: 1, start: 0, max: 4, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { value: 1, start: 0, max: 12, segments: [
        { lookupId: 30, value: 1, start: 0, max: 12, over: "Z_Chozo", overText: "Hints Acquired", },
        { lookupId: 1021, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
    ],
    items: [
      {
        id: "combatVisor",
        name: "Combat Visor",
        sprite: "combat",
        bg: "80d0ff",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "powerBeam",
        name: "Power Beam",
        sprite: "power",
        bg: "ffb508",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "scanVisor",
        name: "Scan Visor",
        sprite: "scan",
        bg: "bca470",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "missileC",
        name: "Missile Launcher",
        sprite: "missile",
        bg: "d82800",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        name: "Missile Expansions",
        alreadyHasMainItem: true,
        singleItemName: "Missile Expansion",
        bg: "d82800",
        itemId: 6,
        nodeType: "expansion",
      },{
        id: "energyTankA",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 7,
        nodeType: "expansion",
      },{
        id: "morphBall",
        name: "Morph Ball",
        sprite: "morph",
        bg: "d8a480",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "chargeBeamB",
        name: "Charge Beam",
        bg: "808000",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "bombB",
        name: "Bombs",
        bg: "3800a8",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "springBallA",
        name: "Spring Ball",
        bg: "886848",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "barrier",
        name: "Varia Suit",
        sprite: "barrier",
        bg: "ff7e00",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "boostBall",
        name: "Boost Ball",
        sprite: "boost",
        bg: "ff0094",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "spinBoost",
        name: "Space Jump Boots",
        bg: "00a0e0",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "waveBeamA",
        name: "Wave Beam",
        sprite: "wave",
        bg: "6f3198",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "superMissileA",
        name: "Super Missile",
        bg: "ffb508",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "thermalVisor",
        name: "Thermal Visor",
        sprite: "thermal",
        bg: "ff7b7b",
        itemId: 17,
        nodeType: "upgrade",
      },{
        id: "spiderBallA",
        name: "Spider Ball",
        sprite: "spider",
        bg: "007f0e",
        itemId: 18,
        nodeType: "upgrade",
      },{
        id: "shockShot",
        name: "Wavebuster",
        bg: "6f3198",
        itemId: 19,
        nodeType: "expansion",
      },{
        id: "iceBeamA",
        name: "Ice Beam",
        sprite: "ice",
        bg: "2038ec",
        itemId: 20,
        nodeType: "upgrade",
      },{
        id: "gravitySuitB",
        name: "Gravity Suit",
        sprite: "gravity",
        bg: "602880",
        itemId: 21,
        nodeType: "upgrade",
      },{
        id: "powerBombA",
        name: "Power Bomb",
        sprite: "pbomb",
        bg: "98b830",
        itemId: 22,
        nodeType: "upgrade",
      },{
        id: "powerBombExp",
        name: "Power Bomb Expansions",
        alreadyHasMainItem: true,
        singleItemName: "Power Bomb Expansion",
        bg: "98b830",
        itemId: 23,
        nodeType: "expansion",
      },{
        id: "grappleBeamA",
        name: "Grapple Beam",
        bg: "00e8d8",
        itemId: 24,
        nodeType: "upgrade",
      },{
        id: "iceMissileB",
        name: "Ice Spreader",
        bg: "2038ec",
        itemId: 25,
        nodeType: "expansion",
      },{
        id: "xRayVisor",
        name: "X-Ray Visor",
        sprite: "xray",
        bg: "c8d8d8",
        itemId: 26,
        nodeType: "upgrade",
      },{
        id: "plasmaBeamB",
        name: "Plasma Beam",
        sprite: "plasma",
        bg: "ff4a4a",
        itemId: 27,
        nodeType: "upgrade",
      },{
        id: "flameShot",
        name: "Flamethrower",
        bg: "ff4a4a",
        itemId: 28,
        nodeType: "expansion",
      },{
        id: "phazonSuit",
        name: "Phazon Suit",
        sprite: "phazon",
        bg: "282018",
        itemId: 29,
        nodeType: "upgrade",
      },{
        id: "chozoArtifact",
        name: "Chozo Artifacts",
        singleItemName: "Artifact",
        bg: "008080",
        itemId: 30,
        nodeType: "artifact",
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
        requires: ["8x1","10x1"],
      },{
        id: "sheegoth",
        name: "Sheegoth",
        nodeType: "battle",
        bossId: 106,
      },{
        id: "thardus",
        name: "Thardus",
        bossId: 107,
        requires: ["17x1"],
      },{
        id: "chozo",
        name: "Chozo Ghost(s)",
        nodeType: "battle",
        bossId: 108,
        requires: ["3x1"],
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
      },{
        id: 2,
        name: "Tallon Overworld",
        color: "db2b00",
      },{
        id: 3,
        name: "Chozo Ruins",
        color: "db2b00",
      },{
        id: 4,
        name: "Magmoor Caverns",
        color: "009700",
      },{
        id: 5,
        name: "Phendrana Drifts",
        color: "bf00bf",
      },{
        id: 6,
        name: "Phazon Mines L.1",
        color: "bcbcbc",
      },{
        id: 7,
        name: "Phazon Mines L.2",
        color: "bcbcbc",
      },{
        id: 8,
        name: "Phazon Mines L.3",
        color: "bcbcbc",
      },{
        id: 9,
        name: "Impact Crater",
        color: "bcbcbc",
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Item Loss", // Spilled Bag
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
        id: "saveRoom",
        name: "Save Station",
        nodeType: "save",
        extraId: 1010,
      },{
        id: "missileRefill",
        name: "Missiles Reload",
        nodeType: "recharge",
        extraId: 1011,
      },{
        id: "cipher",
        name: "Impact Crater Accessible",
        nodeType: "event",
        extraId: 1021,
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "mp_grid.png",
  },
  "pb": {
    checklistWidth: 4,
    checklistLayout: [
      { lookupId: 1, value: 1, start: 0, max: 12, segments: [], },
      { lookupId: 2, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 3, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 4, value: 0, start: 0, max: 1, segments: [], },
    ],
    items: [
      {
        id: "chozoArtifact",
        sprite: "artifact",
        name: "Artifacts",
        singleItemName: "Artifact",
        bg: "008080",
        itemId: 1,
        nodeType: "artifact",
      },{
        id: "powerBombA",
        name: "Power Bombs",
        bg: "98b830",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "missileC",
        name: "Missile Launcher",
        bg: "d82800",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "forceBall",
        name: "Force Ball",
        bg: "007f0e",
        itemId: 4,
        nodeType: "upgrade",
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
      {
        id: "screwAttackB",
        name: "Special",
        extraId: 1001,
        nodeType: "lore",
      },
    ],
    mapTree: [
    ],
    grid: "mp_grid.png",
  },
  "p2d": {
    checklistWidth: 3,
    checklistLayout: [
      { lookupId: 6, value: 0, start: 0, max: 1, segments: [], over: "Z_Chozo", overText: "Artifact of Truth Acquired", },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Hive Mecha Defeated", },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 2, segments: [], },
      { lookupId: 8, value: 1, start: 0, max: 7, segments: [], },
      { lookupId: 14, value: 1, start: 0, max: 12, segments: [], over: "Z_Chozo", overText: "Hints Acquired", },
    ],
    items: [
      {
        id: "scanVisor",
        name: "Scan Visor",
        sprite: "scan",
        bg: "bca470",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "wallJumpBoots",
        name: "Wall Jump",
        bg: "ff7e00",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "powerGrip",
        sprite: "elevator",
        name: "Power Grip",
        bg: "00e8d8",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "missileC",
        sprite: "missile",
        name: "Missile Launcher",
        bg: "d82800",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Expansions",
        singleItemName: "Missile Expansion",
        alreadyHasMainItem: true,
        bg: "d82800",
        itemId: 8,
        nodeType: "expansion",
      },{
        id: "energyTankA",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 9,
        nodeType: "expansion",
      },{
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "bombB",
        sprite: "bombs",
        name: "Bombs",
        bg: "3800a8",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "boostBall",
        sprite: "boost",
        name: "Boost Ball",
        bg: "ff0094",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "springBallA",
        sprite: "spring",
        name: "Spring Ball",
        bg: "886848",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "chozoArtifact",
        sprite: "artifact",
        name: "Chozo Artifacts",
        singleItemName: "Artifact",
        bg: "008080",
        itemId: 14,
        nodeType: "artifact",
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
      },{
        id: 2,
        name: "Chozo Ruins",
        color: "db2b00",
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
        id: "saveRoom",
        name: "Save Station",
        nodeType: "save",
        extraId: 1002,
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
            { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Newborn" },
          ]},
          { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
            { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Elder" },
          ]},
          { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
            { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Strength" },
          ]},
          { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
            { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Sun" },
          ]},
          { nodeType: "lock", id: 5, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 6, reqdItemCount: 0, children: [
              { nodeType: "easter", id: 1001 },
              { nodeType: "upgrade", id: 7, isRandomizableItem: true },
            ]},
          ]},
          { nodeType: "dropdown", children: [
            { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Truth", children: [
              { nodeType: "upgrade", id: 6, isRandomizableItem: true },
              { nodeType: "lock", id: 6, reqdItemCount: 1, children: [], vineToHubId: 2},
            ]},
          ]},
          { nodeType: "return", children: [], vineToHubId: 2},
          { nodeType: "lock", id: 6, reqdItemCount: 1, children: [
            { nodeType: "easter", id: 1005 },
            { nodeType: "lock", id: 102, children: [
              { nodeType: "battle", id: 103 },
            ]},
            { nodeType: "lock", id: 103, children: [
              { nodeType: "battle", id: 104 },
            ]},
            { nodeType: "lock", id: 105, children: [
              { nodeType: "boss", id: 106, children: [
                { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Wild" },
              ]},
            ]},
            { nodeType: "lock", id: 1006, reqdItemCount: 1, children: [
              { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of World" },
            ]},
            { nodeType: "elevator", transportToMapId: 2, toStartHubId: 11 },
            { nodeType: "lock", id: 10, reqdItemCount: 1, children: [
              { nodeType: "upgrade", id: 11, isRandomizableItem: true },
              { nodeType: "lock", id: 12, reqdItemCount: 1, children: [
                { nodeType: "lock", id: 6, reqdItemCount: 1, children: [
                  { nodeType: "expansion", id: 9, isRandomizableItem: true },
                  { nodeType: "area", id: 1003 },
                  { nodeType: "battle", id: 102 },
                  { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                    { nodeType: "upgrade", id: 13, isRandomizableItem: true },
                  ]},
                  { nodeType: "lock", id: 104, reqdItemCount: 1, children: [
                    { nodeType: "battle", id: 105 },
                  ]},
                  { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
                    { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Chozo" },
                  ]},
                  { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
                    { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Lifegiver" },
                  ]},
                ], vineToHubId: 3},
                { nodeType: "lock", id: 13, reqdItemCount: 1, children: [], vineToHubId: 3},
              ]},
            ]},
          ]},
          { nodeType: "lock", id: 10, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 1001, reqdItemCount: 0, children: [
              { nodeType: "expansion", id: 8, isRandomizableItem: true },
            ]},
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 10, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 6, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 8, isRandomizableItem: true, hubId: 4},
              ], vineToHubId: 4},
              { nodeType: "lock", id: 11, reqdItemCount: 1, children: [], vineToHubId: 4},
              { nodeType: "lock", id: 13, reqdItemCount: 1, children: [], vineToHubId: 4},
            ]},
          ]},
          { nodeType: "lock", id: 6, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 10, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 11, reqdItemCount: 1, children: [
                { nodeType: "upgrade", id: 12, isRandomizableItem: true },
              ]},
            ]},
            { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
              { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Nature" },
            ]},
          ]},
          { nodeType: "lock", id: 14, reqdItemCount: 12, children: [
            { nodeType: "end", name: "End (Good)" },
          ]},
        ],
      },
      { hubId: 11,
        nodeType: "start",
        mapId: 2,
        children: [
          { nodeType: "easter", id: 1004 },
          { nodeType: "lock", id: 1005, reqdItemCount: 1, children: [
            { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Spirit" },
          ]},
          { nodeType: "lock", id: 1007, reqdItemCount: 1, children: [
            { nodeType: "artifact", id: 14, isRandomizableItem: true, name: "Artifact of Warrior" },
          ]},
          { nodeType: "boss", id: 101, children: [
            { nodeType: "upgrade", id: 7, isRandomizableItem: true },
            { nodeType: "expansion", id: 9, isRandomizableItem: true },
            { nodeType: "end", name: "End" },
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 8, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "upgrade", id: 10, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 10, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 8, isRandomizableItem: true },
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 10, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 11, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 8, isRandomizableItem: true },
              ]},
            ]},
          ]},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 10, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 11, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 8, isRandomizableItem: true },
              ]},
            ]},
          ]},
          { nodeType: "lock", id: 10, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 11, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 12, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 8, isRandomizableItem: true },
              ]},
            ]},
          ]},
        ],
      }
    ],
    grid: "mp_grid.png",
  },
  "mp2e": {
    checklistWidth: 8,
    checklistLayout: [
      { lookupId: 2, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], over: "E_Lumin", overText: "Great Temple - Main Energy Controller 1", },
      { lookupId: 3, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 23, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Torvus Bog - Torvus Temple", },
      { lookupId: 5, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Bomb Guardian Defeated", },
      { lookupId: 15, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Jump Guardian Defeated", },
      { lookupId: 9, value: 0, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Dark Alpha Splinter Defeated", },
      { lookupId: 4, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 14, value: 1, start: 0, max: 1, segments: [], over: "E_Lumin", overText: "Agon Wastes - Agon Energy Controller", },
      { lookupId: 16, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Agon Wastes - Storage D", },
      { lookupId: 28, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Agon Wastes - Mining Station B", },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Temple Grounds - GFMC Compound", },
      { lookupId: 25, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Boost Guardian Defeated", },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], clearIfScramble: true, },
      { lookupId: 26, value: 1, start: 0, max: 1, segments: [], displayIfScramble: true, },
      { lookupId: 22, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Amorbis Defeated", },
      { lookupId: 32, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Chykka Defeated", },
      { lookupId: 24, value: 1, start: 0, max: 1, segments: [], over: "E_Lumin", overText: "Torvus Bog - Torvus Energy Controller", },
      { lookupId: 18, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Dark Agon Wastes - Ing Cache 1", },
      { lookupId: 37, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Temple Grounds - Grand Windchamber", },
      { lookupId: 27, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Temple Grounds - Hall of Honored Dead", },
      { lookupId: 34, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Spider Guardian Defeated", },
      { lookupId: 30, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Grapple Guardian Defeated", },
      { lookupId: 29, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Torvus Bog - Hydrodynamo Storage", },
      { lookupId: 38, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Sanctuary Fortress - Aerie", },
      { lookupId: 33, value: 1, start: 0, max: 1, segments: [], over: "E_Lumin", overText: "Sanctuary Fortress - Sanctuary Temple", },
      { lookupId: 41, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Quadraxis Defeated", },
      { lookupId: 42, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Dark Agon Wastes - Ing Cache 2", },
      { lookupId: 6, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 35, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Power Bomb Guardian Defeated", },
      { lookupId: 39, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Sanctuary Fortress - Vault", },
      { lookupId: 43, value: 1, start: 0, max: 1, segments: [], over: "E_Lumin", overText: "Great Temple - Main Energy Controller 2", },
      { lookupId: 11, value: 1, start: 0, max: 14, segments: [], },
      { lookupId: 8, value: 1, start: 0, max: 49, segments: [], clearIfScramble: true, },
      { lookupId: 8, value: 1, start: 0, max: 30, segments: [], displayIfScramble: true, },
      { lookupId: 20, value: 1, start: 0, max: 4, segments: [], clearIfScramble: true, },
      { lookupId: 17, value: 1, start: 0, max: 10, segments: [], displayIfScramble: true, },
      { lookupId: 19, value: 1, start: 0, max: 10, segments: [], displayIfScramble: true, },
      { lookupId: 36, value: 1, start: 0, max: 8, segments: [], },
      { lookupId: 44, value: 1, start: 0, max: 1, segments: [], displayIfScramble: true, },
      { lookupId: 45, value: 1, start: 0, max: 1, segments: [], displayIfScramble: true, },
      { lookupId: 46, value: 1, start: 0, max: 1, segments: [], displayIfScramble: true, },
      { value: 0, start: 0, max: 3, clearIfScramble: true, segments: [
        { lookupId: 21, value: 0, start: 0, max: 3, over: "F_Boss_Ex", overText: "Amorbis required", },
        { lookupId: 1101, value: 0, start: 0, max: 1, },
        { lookupId: 1102, value: 0, start: 0, max: 1, },
      ]},
      { lookupId: 21, value: 1, start: 0, max: 3, over: "F_Boss_Ex", overText: "Amorbis required", displayIfScramble: true, },
      { value: 0, start: 0, max: 3, clearIfScramble: true, segments: [
        { lookupId: 31, value: 0, start: 0, max: 3, over: "F_Boss_Ex", overText: "Chykka required", },
        { lookupId: 1103, value: 0, start: 0, max: 1, },
        { lookupId: 1104, value: 0, start: 0, max: 1, },
      ]},
      { lookupId: 31, value: 1, start: 0, max: 3, over: "F_Boss_Ex", overText: "Chykka required", displayIfScramble: true, },
      { value: 0, start: 0, max: 3, clearIfScramble: true, segments: [
        { lookupId: 40, value: 0, start: 0, max: 3, over: "F_Boss_Ex", overText: "Quadraxis required", },
        { lookupId: 1105, value: 0, start: 0, max: 1, },
        { lookupId: 1106, value: 0, start: 0, max: 1, },
      ]},
      { lookupId: 40, value: 1, start: 0, max: 3, over: "F_Boss_Ex", overText: "Quadraxis required", displayIfScramble: true, },
      { value: 0, start: 0, max: 9, clearIfScramble: true, segments: [
        { lookupId: 47, value: 0, start: 0, max: 9, over: "E_Lumin_Ex", overText: "Hints acquired", },
        { lookupId: 1107, value: 0, start: 0, max: 1, },
      ]},
      { lookupId: 47, value: 1, start: 0, max: 9, over: "E_Lumin_Ex", overText: "Hints acquired", displayIfScramble: true, },
    ],
    items: [
      {
        id: "combatVisorA",
        name: "Combat Visor",
        sprite: "combat",
        bg: "80d0ff",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "powerBeamA",
        name: "Power Beam",
        sprite: "power",
        bg: "ffb508",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "scanVisorA",
        name: "Scan Visor",
        sprite: "scan",
        bg: "bca470",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "chargeBeamA",
        name: "Charge Beam",
        bg: "808000",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "morphBall",
        name: "Morph Ball",
        sprite: "morph",
        bg: "d8a480",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "missileC",
        name: "Missile Launcher",
        sprite: "missile",
        bg: "d82800",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        name: "Missile Expansions",
        singleItemName: "Missile Expansion",
        alreadyHasMainItem: true,
        bg: "d82800",
        itemId: 8,
        nodeType: "expansion",
      },{
        id: "energyTransferModule",
        name: "Energy Transfer Module",
        bg: "887878",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "violetTranslatorA",
        name: "Violet Translator",
        locale: {
          'enUS': {
            id: "violetTranslator"
          }
        },
        bg: "a36fb1",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "energyTankA",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 11,
        nodeType: "expansion",
      },{
        id: "bombC",
        name: "Bombs",
        bg: "3800a8",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "springBallA",
        name: "Spring Ball",
        bg: "886848",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "amberTranslatorA",
        name: "Amber Translator",
        locale: {
          'enUS': {
            id: "amberTranslator"
          }
        },
        bg: "ad6a40",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "spinBoost",
        name: "Space Jump Boots",
        bg: "00a0e0",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "darkBeam",
        name: "Dark Beam",
        sprite: "darkbeam",
        bg: "9c84ff",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "darkAmmoExpansion",
        name: "Dark Beam Ammo Expansions",
        singleItemName: "Dark Beam Ammo Expansion",
        alreadyHasMainItem: true,
        bg: "9c84ff",
        itemId: 17,
        nodeType: "expansion",
      },{
        id: "lightBeam",
        name: "Light Beam",
        sprite: "light",
        bg: "5ac7f7",
        itemId: 18,
        nodeType: "upgrade",
      },{
        id: "lightAmmoExpansion",
        name: "Light Beam Ammo Expansions",
        singleItemName: "Light Beam Ammo Expansion",
        alreadyHasMainItem: true,
        bg: "5ac7f7",
        itemId: 19,
        nodeType: "expansion",
      },{
        id: "beamAmmoExpansion",
        name: "Beam Ammo Expansions",
        singleItemName: "Beam Ammo Expansion",
        alreadyHasMainItem: true,
        bg: "808000",
        itemId: 20,
        nodeType: "expansion",
      },{
        id: "templeKey",
        locale: {
          'enUS': {
            id: "darkAgonKey"
          }
        },
        name: "Dark Agon Keys",
        singleItemName: "Dark Agon Key",
        sprite: "redKey",
        bg: "ad6a40",
        itemId: 21,
        nodeType: "artifact",
      },{
        id: "darkSuitA",
        name: "Dark Suit",
        bg: "6c0204",
        itemId: 22,
        nodeType: "upgrade",
      },{
        id: "superMissileC",
        name: "Super Missile",
        bg: "ffb508",
        itemId: 23,
        nodeType: "upgrade",
      },{
        id: "emeraldTranslatorA",
        name: "Emerald Translator",
        locale: {
          'enUS': {
            id: "emeraldTranslator"
          }
        },
        bg: "4b9467",
        itemId: 24,
        nodeType: "upgrade",
      },{
        id: "boostBall",
        name: "Boost Ball",
        sprite: "boost",
        bg: "ff0094",
        itemId: 25,
        nodeType: "upgrade",
      },{
        id: "cannonball",
        name: "Cannon Ball",
        bg: "ff0094",
        itemId: 26,
        nodeType: "upgrade",
      },{
        id: "seekerLauncherA",
        name: "Seeker Launcher",
        bg: "644080",
        itemId: 27,
        nodeType: "upgrade",
      },{
        id: "darkburst",
        name: "Darkburst",
        bg: "9c84ff",
        itemId: 28,
        nodeType: "upgrade",
      },{
        id: "gravityBoost",
        name: "Gravity Boost",
        bg: "602880",
        itemId: 29,
        nodeType: "upgrade",
      },{
        id: "grappleBeamA",
        name: "Grapple Beam",
        bg: "00e8d8",
        itemId: 30,
        nodeType: "upgrade",
      },{
        id: "templeKey",
        locale: {
          'enUS': {
            id: "darkTorvusKey"
          }
        },
        name: "Dark Torvus Keys",
        singleItemName: "Dark Torvus Key",
        sprite: "redKey",
        bg: "4b9467",
        itemId: 31,
        nodeType: "artifact",
      },{
        id: "darkVisor",
        name: "Dark Visor",
        sprite: "darkvisor",
        bg: "ff7b7b",
        itemId: 32,
        nodeType: "upgrade",
      },{
        id: "cobaltTranslatorA",
        name: "Cobalt Translator",
        locale: {
          'enUS': {
            id: "cobaltTranslator"
          }
        },
        bg: "5c819e",
        itemId: 33,
        nodeType: "upgrade",
      },{
        id: "spiderBallA",
        name: "Spider Ball",
        sprite: "spider",
        bg: "007f0e",
        itemId: 34,
        nodeType: "upgrade",
      },{
        id: "powerBombB",
        name: "Power Bombs",
        sprite: "pbomb",
        bg: "98b830",
        itemId: 35,
        nodeType: "upgrade",
      },{
        id: "powerBombExpA",
        name: "Power Bomb Expansions",
        singleItemName: "Power Bomb Expansion",
        alreadyHasMainItem: true,
        bg: "98b830",
        itemId: 36,
        nodeType: "expansion",
      },{
        id: "sunburst",
        name: "Sunburst",
        bg: "5ac7f7",
        itemId: 37,
        nodeType: "upgrade",
      },{
        id: "echoVisor",
        name: "Echo Visor",
        sprite: "echo",
        bg: "c8d8d8",
        itemId: 38,
        nodeType: "upgrade",
      },{
        id: "screwAttackA",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 39,
        nodeType: "upgrade",
      },{
        id: "templeKey",
        locale: {
          'enUS': {
            id: "ingHiveKey"
          }
        },
        name: "Ing Hive Keys",
        singleItemName: "Ing Hive Key",
        sprite: "redKey",
        bg: "5c819e",
        itemId: 40,
        nodeType: "artifact",
      },{
        id: "annihilatorBeam",
        name: "Annihilator Beam",
        sprite: "annihilator",
        bg: "9b9b9b",
        itemId: 41,
        nodeType: "upgrade",
      },{
        id: "sonicBoom",
        name: "Sonic Boom",
        bg: "9b9b9b",
        itemId: 42,
        nodeType: "upgrade",
      },{
        id: "lightSuit",
        name: "Light Suit",
        bg: "ffff80",
        itemId: 43,
        nodeType: "upgrade",
      },{
        id: "doubleDamageA",
        name: "Double Damage",
        bg: "ffb508",
        itemId: 44,
        nodeType: "upgrade",
      },{
        id: "infiniteBeamAmmo",
        name: "Unlimited Beam Ammo",
        bg: "808000",
        itemId: 45,
        nodeType: "upgrade",
      },{
        id: "infiniteMissiles",
        name: "Unlimited Missiles",
        bg: "d82800",
        itemId: 46,
        nodeType: "upgrade",
      },{
        id: "darkAetherKey",
        locale: {
          'enUS': {
            id: "skyTempleKey"
          }
        },
        name: "Sky Temple Keys",
        singleItemName: "Sky Temple Key",
        sprite: "skyKey",
        bg: "008080",
        itemId: 47,
        nodeType: "artifact",
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
        requires: ["6x1","12x1"],
      },{
        id: "torvuspirates",
        name: "Pirate Ambush",
        nodeType: "battle",
        bossId: 107,
      },{
        id: "boostguard",
        name: "Boost Guardian",
        bossId: 108,
        requires: ["6x1","12x1"],
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
        requires: ["6x1","12x1|25x1"],
      },{
        id: "spiderguard",
        name: "Spider Guardian",
        bossId: 113,
        requires: ["6x1","12x1","25x1"],
      },{
        id: "pbombguard",
        name: "Power Bomb Guardian",
        bossId: 114,
        requires: ["6x1","12x1","34x1"],
      },{
        id: "dsamusb",
        name: "Dark Samus 2",
        bossId: 115,
      },{
        id: "caretaker",
        name: "Caretaker Class Drone",
        bossId: 116,
        requires: ["6x1","12x1","25x1","34x1"],
      },{
        id: "quadraxis",
        name: "Quadraxis",
        bossId: 117,
        requires: ["6x1","12x1","25x1","34x1"],
      },{
        id: "emperoring",
        name: "Emperor Ing",
        bossId: 118,
        requires: ["6x1","12x1","16x1","18x1","34x1"],
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
      },{
        id: 2,
        name: "Sky Temple Grounds",
        color: "2038ec",
      },{
        id: 3,
        name: "Great Temple",
        color: "db2b00",
      },{
        id: 4,
        name: "Sky Temple",
        color: "db2b00",
      },{
        id: 5,
        name: "Agon Wastes",
        color: "009700",
      },{
        id: 6,
        name: "Dark Agon Wastes",
        color: "009700",
      },{
        id: 7,
        name: "Torvus Bog",
        color: "bf00bf",
      },{
        id: 8,
        name: "Dark Torvus Bog",
        color: "bf00bf",
      },{
        id: 9,
        name: "Torvus Bog - Hydrodynamo",
        color: "bf00bf",
      },{
        id: 10,
        name: "Dark Torvus Bog - Hydrodynamo",
        color: "bf00bf",
      },{
        id: 11,
        name: "Sanctuary Fortress",
        color: "bcbcbc",
      },{
        id: 12,
        name: "Ing Hive",
        color: "bcbcbc",
      },{
        id: 13,
        name: "Sanctuary Fortress - Upper Level",
        color: "bcbcbc",
      },{
        id: 14,
        name: "Ing Hive - Upper Level",
        color: "bcbcbc",
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
        name: "Item Loss", // Spilled Bag
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
        id: "seekerLauncherA",
        name: "Ing Windchamber Cobalt Seeker Lock", // unlocks grapple points
        nodeType: "trigger",
        extraId: 1008,
      },{
        id: "seekerLauncherA",
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
        id: "scanVisorA",
        name: "Scan Node 1", // Dark Agon, scan 3 nodes to open the way towards Watering Hole -> Feeding Pit -> Light Beam
        nodeType: "trigger",
        extraId: 1016,
      },{
        id: "scanVisorA",
        name: "Scan Node 2",
        nodeType: "trigger",
        extraId: 1017,
      },{
        id: "scanVisorA",
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
        id: "cannonball",
        name: "Great Bridge Cannon", // Torvus, right outside the temple
        nodeType: "trigger",
        extraId: 1022,
      },{
        id: "bombC",
        name: "Forgotten Bridge Turned", // Forgotten Bridge <- Dark Forgotten Bridge, Interdimensional Bomb Slot
        nodeType: "trigger",
        extraId: 1023,
      },{
        id: "boostBall",
        name: "Forgotten Balcony Opened", // upper Forgotten Bridge <- upper Dark Forgotten Bridge, Interdimensional Spinner
        nodeType: "trigger",
        extraId: 1024,
      },{
        id: "boostBall",
        name: "Torvus Interdimensional Spinner", // Dark Hydrodynamo, Crypt -> Gathering Hall
        nodeType: "trigger",
        extraId: 1025,
      },{
        id: "scanVisorA",
        name: "Scan Node 1", // Torvus Hydrodynamo, in front of Blue Door
        nodeType: "trigger",
        extraId: 1026,
      },{
        id: "scanVisorA",
        name: "Scan Node 2", // Torvus Hydrodynamo, in front of Black Door
        nodeType: "trigger",
        extraId: 1027,
      },{
        id: "scanVisorA",
        name: "Scan Node 3", // Torvus Hydrodynamo, in front of White Door
        nodeType: "trigger",
        extraId: 1028,
      },{
        id: "bombC",
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
        id: "seekerLauncherA",
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
        id: "grappleBeamA",
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
        id: "boostBall",
        name: "Main Gyro Chamber Spinner", // Upper Sanctuary, grants access to second half of the one half of the room / shortcut back
        nodeType: "trigger",
        extraId: 1042,
      },{
        id: "cannonball",
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
        id: "saveRoom",
        name: "Save Station",
        nodeType: "save",
        extraId: 1052,
      },{
        id: "missileRefill",
        name: "Missiles Reload",
        nodeType: "recharge",
        extraId: 1053,
      },{
        id: "ammoStation",
        name: "Ammo Refilled",
        nodeType: "recharge",
        extraId: 1054,
      },{
        id: "lightOfAether",
        name: "Dark Agon Energy Retrieved",
        nodeType: "event",
        extraId: 1101,
      },{
        id: "lightOfAetherA",
        name: "Agon Energy Restored",
        nodeType: "event",
        extraId: 1102,
      },{
        id: "lightOfAether",
        name: "Dark Torvus Energy Retrieved",
        nodeType: "event",
        extraId: 1103,
      },{
        id: "lightOfAetherA",
        name: "Torvus Energy Restored",
        nodeType: "event",
        extraId: 1104,
      },{
        id: "lightOfAether",
        name: "Ing Hive Energy Retrieved",
        nodeType: "event",
        extraId: 1105,
      },{
        id: "lightOfAetherA",
        name: "Sanctuary Energy Restored",
        nodeType: "event",
        extraId: 1106,
      },{
        id: "skyTempleAccess",
        name: "Sky Temple Accessible",
        nodeType: "event",
        extraId: 1107,
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "mp2e_grid.png",
  },
  "ph": {
    checklistWidth: 8,
    checklistLayout: [
      { lookupId: 8, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 14, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 24, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 7, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 9, segments: [], },
      { lookupId: 5, value: 1, start: 0, max: 12, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { name: "Celestial Archives 1", value: 0, start: 0, max: 3, segments: [
        { lookupId: 15, value: 0, start: 0, max: 3, },
        { lookupId: 1011, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
      { name: "Alinos 1", value: 0, start: 0, max: 3, segments: [
        { lookupId: 16, value: 0, start: 0, max: 3, },
        { lookupId: 1012, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
      { name: "VDO 1", value: 0, start: 0, max: 3, segments: [
        { lookupId: 17, value: 0, start: 0, max: 3, },
        { lookupId: 1013, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
      { name: "Arcterra 1", value: 0, start: 0, max: 3, segments: [
        { lookupId: 18, value: 0, start: 0, max: 3, },
        { lookupId: 1014, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
      { name: "", value: 0, start: 0, max: 1, segments: [
        { lookupId: 23, value: 0, start: 0, max: 8, },
        { lookupId: 1019, value: 0, start: 0, max: 1, clearIfScramble: true, },
        { lookupId: 1020, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { name: "Celestial Archives 2", value: 0, start: 0, max: 3, segments: [
        { lookupId: 19, value: 0, start: 0, max: 3, },
        { lookupId: 1015, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
      { name: "Alinos 2", value: 0, start: 0, max: 3, segments: [
        { lookupId: 20, value: 0, start: 0, max: 3, },
        { lookupId: 1016, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
      { name: "VDO 2", value: 0, start: 0, max: 3, segments: [
        { lookupId: 21, value: 0, start: 0, max: 3, },
        { lookupId: 1017, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
      { name: "Arcterra 2", value: 0, start: 0, max: 3, segments: [
        { lookupId: 22, value: 0, start: 0, max: 3, },
        { lookupId: 1018, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
    ],
    items: [
      {
        id: "powerBeam",
        name: "Power Beam",
        sprite: "power",
        bg: "ffb508",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "morphBall",
        name: "Morph Ball",
        sprite: "morph",
        bg: "d8a480",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "bombB",
        name: "Bombs",
        sprite: "bomb",
        bg: "3800a8",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "boostBall",
        name: "Boost Ball",
        sprite: "boost",
        bg: "ff0094",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "uaExpansion",
        name: "UA Expansions",
        singleItemName: "UA Expansion",
        alreadyHasMainItem: true,
        bg: "98b830",
        itemId: 5,
        nodeType: "expansion",
      },{
        id: "missileTank",
        name: "Missile Expansions",
        sprite: "tank",
        singleItemName: "Missile Expansion",
        alreadyHasMainItem: true,
        bg: "d82800",
        itemId: 6,
        nodeType: "expansion",
      },{
        id: "energyTankA",
        name: "Energy Tanks",
        sprite: "energy",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 7,
        nodeType: "expansion",
      },{
        id: "missileD",
        name: "Missile Launcher",
        sprite: "missile",
        bg: "886848",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "battlehammer",
        name: "Battlehammer",
        sprite: "hammer",
        bg: "22b14c",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "judicator",
        name: "Judicator",
        sprite: "jud",
        bg: "6f3198",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "voltDriver",
        name: "Volt Driver",
        sprite: "volt",
        bg: "ffbc15",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "shockCoil",
        name: "Shock Coil",
        sprite: "coil",
        bg: "303898",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "magmaul",
        name: "Magmaul",
        sprite: "magmaul",
        bg: "ff7e00",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "imperialist",
        name: "Imperialist",
        sprite: "imp",
        bg: "ed1c24",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "alimbicArtifactCA1",
        name: "Alimbic Artifacts",
        sprite: "ca1",
        singleItemName: "Alimbic Artifact",
        bg: "00f0c8",
        itemId: 15,
        nodeType: "artifact",
      },{
        id: "alimbicArtifactAl1",
        name: "Alimbic Artifacts",
        sprite: "al1",
        singleItemName: "Alimbic Artifact",
        bg: "f09000",
        itemId: 16,
        nodeType: "artifact",
      },{
        id: "alimbicArtifactVDO1",
        name: "Alimbic Artifacts",
        sprite: "vdo1",
        singleItemName: "Alimbic Artifact",
        bg: "2090a8",
        itemId: 17,
        nodeType: "artifact",
      },{
        id: "alimbicArtifactArc1",
        name: "Alimbic Artifacts",
        sprite: "arc1",
        singleItemName: "Alimbic Artifact",
        bg: "2858a0",
        itemId: 18,
        nodeType: "artifact",
      },{
        id: "alimbicArtifactCA2",
        name: "Alimbic Artifacts",
        sprite: "ca2",
        singleItemName: "Alimbic Artifact",
        bg: "b8e008",
        itemId: 19,
        nodeType: "artifact",
      },{
        id: "alimbicArtifactAl2",
        name: "Alimbic Artifacts",
        sprite: "al2",
        singleItemName: "Alimbic Artifact",
        bg: "f00000",
        itemId: 20,
        nodeType: "artifact",
      },{
        id: "alimbicArtifactVDO2",
        name: "Alimbic Artifacts",
        sprite: "vdo2",
        singleItemName: "Alimbic Artifact",
        bg: "0868e0",
        itemId: 21,
        nodeType: "artifact",
      },{
        id: "alimbicArtifactArc2",
        name: "Alimbic Artifacts",
        sprite: "arc2",
        singleItemName: "Alimbic Artifact",
        bg: "184898",
        itemId: 22,
        nodeType: "artifact",
      },{
        id: "octolith",
        name: "Octoliths",
        sprite: "bigocto",
        singleItemName: "Octolith",
        bg: "008080",
        itemId: 23,
        nodeType: "artifact",
      },{
        id: "omegaCannon",
        name: "Omega Cannon",
        sprite: "omega",
        bg: "c8d8d8",
        itemId: 24,
        nodeType: "upgrade",
      },
    ],
    bosses: [
      {
        id: "unused",
        name: "Possible Hunter Encounter",
        bossId: 101,
        nodeType: "battle",
        // needs new coloration
      },{
        id: "magmaspawn",
        name: "Magma Spawn",
        bossId: 105,
      },{
        id: "arcticspawn",
        name: "Arctic Spawn",
        bossId: 106,
      },{
        id: "bossaa",
        name: "Cretaphid 1",
        bossId: 111,
      },{
        id: "bossab",
        name: "Cretaphid 2",
        bossId: 113,
      },{
        id: "bossac",
        name: "Cretaphid 3",
        bossId: 126,
      },{
        id: "bossad",
        name: "Cretaphid 4",
        bossId: 128,
      },{
        id: "bossba",
        name: "Slench 1",
        bossId: 112,
      },{
        id: "bossbb",
        name: "Slench 2",
        bossId: 114,
      },{
        id: "bossbc",
        name: "Slench 3",
        bossId: 125,
      },{
        id: "bossbd",
        name: "Slench 4",
        bossId: 127,
      },{
        id: "goreaa",
        name: "Gorea 1",
        bossId: 131,
      },{
        id: "goreab",
        name: "Gorea 2",
        bossId: 132,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Celestial Archives",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "Alinos",
        color: "db2b00",
      },{
        id: 3,
        name: "Vesper Defense Outpost",
        color: "009700",
      },{
        id: 4,
        name: "Arcterra",
        color: "bf00bf",
      },{
        id: 5,
        name: "Oubliette",
        color: "bcbcbc",
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
        name: "Spire Event",
        nodeType: "event",
        extraId: 1003,
      },{
        id: "octolith",
        sprite: "octolith",
        name: "Octolith", // for Celestial Archive 1
        nodeType: "event",
        extraId: 1011,
        bg: "008080", // "00f0c8"
      },{
        id: "octolith",
        sprite: "octolith",
        name: "Octolith", // for Alinos 1
        nodeType: "event",
        extraId: 1012,
        bg: "008080", // "f09000"
      },{
        id: "octolith",
        sprite: "octolith",
        name: "Octolith", // for VDO 1
        nodeType: "event",
        extraId: 1013,
        bg: "008080", // "2090a8"
      },{
        id: "octolith",
        sprite: "octolith",
        name: "Octolith", // for Arcterra 1
        nodeType: "event",
        extraId: 1014,
        bg: "008080", // "2858a0"
      },{
        id: "octolith",
        sprite: "octolith",
        name: "Octolith", // for Celestial Archive 2
        nodeType: "event",
        extraId: 1015,
        bg: "008080", // "b8e008"
      },{
        id: "octolith",
        sprite: "octolith",
        name: "Octolith", // for Alinos 2
        nodeType: "event",
        extraId: 1016,
        bg: "008080", // "f00000"
      },{
        id: "octolith",
        sprite: "octolith",
        name: "Octolith", // for VDO 2
        nodeType: "event",
        extraId: 1017,
        bg: "008080", // "0868e0"
      },{
        id: "octolith",
        sprite: "octolith",
        name: "Octolith", // for Arcterra 2
        nodeType: "event",
        extraId: 1018,
        bg: "008080", // "184898"
      },{
        id: "alimbicCannon",
        name: "Alimbic Cannon Control Room",
        nodeType: "event",
        extraId: 1019,
        bg: "ffffff",
      },{
        id: "oubliette",
        name: "Oubliette unlocked",
        nodeType: "event",
        extraId: 1020,
        bg: "ffffff",
      }
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "mph_grid.png",
  },
  "mp3c": {
    checklistWidth: 8,
    checklistLayout: [
      { lookupId: 2, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 4, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 15, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 23, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Ghor Defeated", },
      { lookupId: 33, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Mining Laser Defeated", },
      { lookupId: 1, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 14, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 8, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 18, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Rundas Defeated", },
      { lookupId: 26, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Skytown - Eastern Skytown - Xenoresearch B", },
      { lookupId: 19, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Bryyo - Hangar Bay", },
      { lookupId: 28, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Helios Defeated", },
      { lookupId: 3, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 17, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 24, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Bryyo - Bryyo Ice - Hall of Remembrance", },
      { lookupId: 5, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 6, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 22, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Defense Drone Defeated", },
      { lookupId: 31, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Skytown - Powerworks", },
      { lookupId: 21, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Mogenar Defeated", },
      { lookupId: 13, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 32, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Pirate Homeworld - Pirate Research - Craneyard", },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Norion - Docking Hub Alpha", },
      { lookupId: 16, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Bryyo - Reliquary I", },
      { lookupId: 30, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Gandrayda Defeated", },
      { lookupId: 25, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Skytown - Eastern Skytown - Skytown Federation Landing Site", },
      { lookupId: 34, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Omega Ridley Defeated", },
      { lookupId: 29, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Pirate Homeworld - Pirate Command - Command Vault", },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 14, segments: [], },
      { lookupId: 10, value: 1, start: 0, max: 50, segments: [], },
      { lookupId: 20, value: 1, start: 0, max: 8, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 27, value: 0, start: 0, max: 3, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], clearIfScramble: true, },
      // { id: "norion", name: "Norion Complete", value: 0, start: 0, max: 1, segments: [], },
      // { id: "bryyo", name: "Bryyo Complete", value: 0, start: 0, max: 1, segments: [], over: "F_Boss_Ex", overText: "Mogenar required", },
      // { name: "", value: 0, start: 0, max: 3, segments: [
      //  { lookupId: 26, value: 0, start: 0, max: 3, over: "F_Boss_Ex", overText: "Helios required", },
      //  { id: "elysia", name: "Elysia Complete", value: 0, start: 0, max: 1, over: "F_Boss_Ex", overText: "Helios required", clearIfScramble: true, },
      // ]},
      // { id: "urtraghus", name: "Pirate Homeworld Complete", value: 0, start: 0, max: 1, segments: [], over: "F_Boss_Ex", overText: "Omega Ridley required", },
      { name: "", value: 1, start: 0, max: 9, segments: [
        { lookupId: 35, value: 1, start: 0, max: 9, over: "C_Fuse", overText: "Hints Acquired", },
        { lookupId: 36, value: 0, start: 0, max: 1, clearIfScramble: true, },
        { lookupId: 1201, value: 0, start: 0, max: 1, clearIfScramble: true, },
      ]},
      { lookupId: 36, value: 0, start: 0, max: 1, segments: [], displayIfScramble: true, },
    ],
    items: [
      {
        id: "combatVisor",
        name: "Combat Visor",
        bg: "80d0ff",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "powerBeamA",
        name: "Power Beam",
        bg: "ffb508",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "scanVisorB",
        name: "Scan Visor",
        bg: "bca470",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        bg: "808000",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "morphBall",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "bombC",
        name: "Bombs",
        bg: "3800a8",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "springBallA",
        name: "Spring Ball",
        bg: "886848",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "spinBoost",
        name: "Space Jump Boots",
        bg: "00a0e0",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "missileC",
        name: "Missile Launcher",
        bg: "d82800",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        name: "Missile Expansions",
        singleItemName: "Missile Expansion",
        alreadyHasMainItem: true,
        bg: "d82800",
        itemId: 10,
        nodeType: "expansion",
      },{
        id: "energyTankA",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 11,
        nodeType: "expansion",
      },{
        id: "grappleLasso",
        name: "Grapple Lasso",
        bg: "ff7b7b",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "commandVisor",
        name: "Command Visor",
        bg: "bfbf00",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "ped",
        name: "P.E.D. Suit",
        bg: "886848",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "hypermode",
        locale: {
          'enUS': {
            id: "hyperBeam"
          }
        },
        name: "Hyper Beam",
        bg: "1010e0",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "grappleBeam",
        name: "Grapple Swing",
        bg: "00e8d8",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "phazonSuit",
        name: "Corrupted Hypermode",
        bg: "282018",
        itemId: 17,
        nodeType: "upgrade",
      },{
        id: "iceMissileA",
        name: "Ice Missile",
        bg: "2038ec",
        itemId: 18,
        nodeType: "upgrade",
      },{
        id: "shipMissile",
        name: "Ship Missile",
        bg: "7f2800",
        itemId: 19,
        nodeType: "upgrade",
      },{
        id: "shipMissileExpansion",
        name: "Ship Missile Expansions",
        singleItemName: "Ship Missile Expansion",
        alreadyHasMainItem: true,
        bg: "7f2800",
        itemId: 20,
        nodeType: "expansion",
      },{
        id: "hyperBall",
        name: "Hyper Ball",
        bg: "98b830",
        itemId: 21,
        nodeType: "upgrade",
      },{
        id: "boostBall",
        name: "Boost Ball",
        bg: "ff0094",
        itemId: 22,
        nodeType: "upgrade",
      },{
        id: "flameShot",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        name: "Plasma Beam",
        bg: "ff4a4a",
        itemId: 23,
        nodeType: "upgrade",
      },{
        id: "screwAttackA",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 24,
        nodeType: "upgrade",
      },{
        id: "shipGrapple",
        name: "Ship Grapple",
        bg: "c0a8d8",
        itemId: 25,
        nodeType: "upgrade",
      },{
        id: "seekerLauncherB",
        name: "Seeker Launcher",
        bg: "644080",
        itemId: 26,
        nodeType: "upgrade",
      },{
        id: "theronianBomb",
        name: "Theronian Bomb Components",
        singleItemName: "Theronian Bomb Component",
        bg: "ac842f",
        itemId: 27,
        nodeType: "expansion",
      },{
        id: "hyperMissile",
        name: "Hyper Missile",
        bg: "007f0e",
        itemId: 28,
        nodeType: "upgrade",
      },{
        id: "corruptionXRayVisor",
        name: "X-Ray Visor",
        bg: "c8d8d8",
        itemId: 29,
        nodeType: "upgrade",
      },{
        id: "grappleVoltage",
        name: "Grapple Voltage",
        bg: "92278f",
        itemId: 30,
        nodeType: "upgrade",
      },{
        id: "spiderBallA",
        name: "Spider Ball",
        bg: "007f0e",
        itemId: 31,
        nodeType: "upgrade",
      },{
        id: "hazardShield",
        name: "Hazard Shield",
        bg: "602880",
        itemId: 32,
        nodeType: "upgrade",
      },{
        id: "novaBeamA",
        locale: {
          'enUS': {
            id: "novaBeam"
          }
        },
        name: "Nova Beam",
        bg: "00ff08",
        itemId: 33,
        nodeType: "upgrade",
      },{
        id: "hyperGrapple",
        name: "Hyper Grapple",
        bg: "fcc4d8",
        itemId: 34,
        nodeType: "upgrade",
      },{
        id: "energyCell",
        name: "Energy Cells",
        singleItemName: "Energy Cell",
        bg: "008080",
        itemId: 35,
        nodeType: "artifact",
      },{
        id: "pirateCode",
        name: "Pirate Code",
        bg: "ce6665",
        itemId: 36,
        nodeType: "artifact",
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
        requires: ["5x1","6x1","15x1"],
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
        requires: ["15x1"],
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
        requires: ["15x1"],
      },{
        id: "gandrayda",
        name: "Gandrayda",
        bossId: 113,
      },{
        id: "mhatchera", // homeworld
        name: "Metroid Hatcher",
        bossId: 114,
      },{
        id: "mhatcherb", // norion
        name: "Metroid Hatcher",
        bossId: 115,
      },{
        id: "mhatcherc", // valhalla
        name: "Metroid Hatcher",
        bossId: 116,
      },{
        id: "phharvester",
        name: "Phazon Harvester",
        bossId: 118,
        requires: ["19x1","120x1"],
      },{
        id: "pircommander",
        name: "Pirate Commander",
        bossId: 119,
      },{
        id: "oridley",
        name: "Omega Ridley",
        bossId: 120,
        requires: ["15x1","29x1","33x1"],
      },{
        id: "levinfant",
        name: "Leviathan Infant",
        bossId: 121,
        requires: ["15x1"],
      },{
        id: "dsamusd",
        name: "Dark Samus",
        bossId: 122,
        requires: ["15x1"],
      },{
        id: "au313",
        name: "Aurora Unit 313",
        bossId: 123,
        requires: ["15x1"],
      }
    ],
    areas: [
      {
        id: 1,
        name: "GFS Olympus",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "GFS Olympus 2",
        color: "2038ec",
      },{
        id: 3,
        name: "Norion",
        color: "db2b00",
      },{
        id: 4,
        name: "Bryyo - Cliffside",
        color: "009700",
      },{
        id: 5,
        name: "Bryyo - Fire",
        color: "009700",
      },{
        id: 6,
        name: "Bryyo - Thorn Jungle",
        color: "009700",
      },{
        id: 7,
        name: "Bryyo - Ice",
        color: "009700",
      },{
        id: 8,
        name: "Bryyo - Seed",
        color: "009700",
      },{
        id: 9,
        name: "Elysia - Skytown West",
        color: "bf00bf",
      },{
        id: 10,
        name: "Elysia - Skytown East",
        color: "bf00bf",
      },{
        id: 11,
        name: "Elysia - Seed",
        color: "bf00bf",
      },{
        id: 12,
        name: "GFS Valhalla",
        color: "2038ec",
      },{
        id: 13,
        name: "Pirate Homeworld - Command Center",
        color: "bcbcbc",
      },{
        id: 14,
        name: "Pirate Homeworld - Research",
        color: "bcbcbc",
      },{
        id: 15,
        name: "Pirate Homeworld - Phazon Mines",
        color: "bcbcbc",
      },{
        id: 16,
        name: "Pirate Homeworld - Seed",
        color: "bcbcbc",
      },{
        id: 17,
        name: "Phaaze",
        color: "db2b00",
      },
    ],
    extras: [
      {
        id: "unused",
        name: "First Mission", // Olympus -> Norion
        extraId: 1101,
        nodeType: "event",
        bg: "5298bc",
      },{
        id: "unused",
        name: "Mission Briefing", // Olympus 1
        extraId: 1102,
        nodeType: "event",
        bg: "5298bc",
      },{
        id: "energyCell",
        name: "Lab Energy Cell", // Olympus 1 Escape
        extraId: 1103,
        nodeType: "event",
        bg: "5298bc",
      },{
        id: "saveRoom",
        name: "Save Event 1", // Olympus 1
        extraId: 1104,
        nodeType: "trigger",
        bg: "5298bc",
      },{
        id: "norion",
        name: "Dock A Access", // Norion
        extraId: 1111,
        nodeType: "trigger",
        bg: "5298bc",
      },{
        id: "norion",
        name: "Dock B Access", // Norion
        extraId: 1112,
        nodeType: "trigger",
        bg: "5298bc",
      },{
        id: "norion",
        name: "Generator A Online", // Norion
        extraId: 1113,
        nodeType: "event",
        bg: "5298bc",
      },{
        id: "norion",
        name: "Generator B Online", // Norion, auto by Rundas
        extraId: 1114,
        nodeType: "event",
        bg: "5298bc",
      },{
        id: "norion",
        name: "Generator C Online", // Norion
        extraId: 1115,
        nodeType: "event",
        bg: "5298bc",
      },{
        id: "saveRoom",
        name: "Save Event 2", // Olympus 2
        extraId: 1105,
        nodeType: "trigger",
        bg: "5298bc",
      },{
        id: "bryyo",
        name: "Bryyo Mission", // Olympus -> Bryyo
        extraId: 1106,
        nodeType: "event",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Fed Dock", // Bryyo
        extraId: 1121,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Fire Access", // Bryyo
        extraId: 1122,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Thorn Jungle Access", // Bryyo
        extraId: 1123,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Shield Generator 1 Destroyed", // Bryyo
        extraId: 1124,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Turret 1 Destroyed", // Bryyo Thorn Jungle
        extraId: 1125,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Turret 2 Destroyed", // Bryyo Thorn Jungle
        extraId: 1126,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Shield Generator 2 Destroyed", // Bryyo
        extraId: 1127,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Hidden Court Grapple", // Bryyo Cliffside
        extraId: 1128,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Bridge Access A", // Bryyo Cliffside
        extraId: 1129,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "bryyo",
        name: "Bridge Access B", // Bryyo Thorn Jungle
        extraId: 1130,
        nodeType: "trigger",
        bg: "6d9b6d",
      },{
        id: "unused",
        name: "Valhalla Access", // Bryyo Ice -> Fire -> Valhalla
        extraId: 1131,
        nodeType: "event",
        bg: "ce6665",
      },{
        id: "elysia",
        name: "Ghor Assault", // Skytown West
        extraId: 1141,
        nodeType: "trigger",
        bg: "ac842f",
      },{
        id: "elysia",
        name: "AU 217 Online", // Skytown West
        extraId: 1142,
        nodeType: "trigger",
        bg: "ac842f",
      },{
        id: "elysia",
        name: "Site A Access", // Skytown West
        extraId: 1143,
        nodeType: "trigger",
        bg: "ac842f",
      },{
        id: "elysia",
        name: "Site B Access", // Skytown East
        extraId: 1144,
        nodeType: "trigger",
        bg: "ac842f",
      },{
        id: "xenoresearch",
        name: "Xenoresearch Cells Open", // Skytown East, Xenoresearch B
        extraId: 1145,
        nodeType: "trigger",
        bg: "ac842f",
      },{
        id: "elysia",
        name: "Shield Nuked", // Skytown West
        extraId: 1146,
        nodeType: "trigger",
        bg: "ac842f",
      },{
        id: "elysia",
        name: "Escape Pod", // Skytown West
        extraId: 1147,
        nodeType: "trigger",
        bg: "ac842f",
      },{
        id: "elysia",
        name: "Pirate Homeworld Access", // -> Homeworld
        extraId: 1151,
        nodeType: "event",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Fans Off", // Pirate Homeworld, Command
        extraId: 1152,
        nodeType: "trigger",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Shield Core Sighted", // Pirate Homeworld, Command
        extraId: 1153,
        nodeType: "event",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Rescue Mission", // Pirate Homeworld, Command -> Research
        extraId: 1154,
        nodeType: "event",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Access to Research", // PH
        extraId: 1155,
        nodeType: "trigger",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Scrap Access", // Pirate Homeworld, Research
        extraId: 1156,
        nodeType: "trigger",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Mines Unlocked", // PH
        extraId: 1157,
        nodeType: "trigger",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Metroids Loose", // Pirate Homeworld, Research
        extraId: 1158,
        nodeType: "trigger",
        bg: "b7746e",
      },{
        id: "unused",
        name: "Dread Reference", // Pirate Homeworld, Research
        extraId: 1159,
        nodeType: "easter",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Mine Loop Open", // Pirate Homeworld, Phazon Mines
        extraId: 1160,
        nodeType: "trigger",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Shield Core Down", // Pirate Homeworld, Command -> Seed Train Line
        extraId: 1161,
        nodeType: "trigger",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Transit Tunnels", // Pirate Homeworld, Command -> Seed Train Line, protect the 12 demo troopers
        extraId: 1162,
        nodeType: "event",
        bg: "b7746e",
      },{
        id: "urtraghus",
        name: "Seed Door", // PH
        extraId: 1163,
        nodeType: "trigger",
        bg: "b7746e",
      },{
        id: "unused",
        name: "AU 313 Pad Code", // Valhalla
        extraId: 1171,
        nodeType: "easter",
        bg: "ce6665",
      },{
        id: "unused",
        name: "AU 313 Message", // Valhalla
        extraId: 1172,
        nodeType: "easter",
        bg: "ce6665",
      },{
        id: "phaaze",
        name: "Phaaze accessible",
        extraId: 1201,
        nodeType: "event",
        bg: "35a0d8",
      },{
        id: "saveRoom",
        name: "Save Station",
        extraId: 1001,
        nodeType: "save",
      },{
        id: "unused",
        name: "Gunship",
        extraId: 1002,
        nodeType: "save",
      },{
        id: "unused",
        name: "Map: Norion", // Norion, on the way to Generator A
        extraId: 1003,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Bryyo", // Bryyo Cliffside, Federation Crash Site
        extraId: 1004,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Skytown West", // Skytown West, AU 217
        extraId: 1005,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Skytown East", // Skytown East, Chozo Observatory
        extraId: 1006,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Norion Clues", // Skytown East, Chozo Observatory
        extraId: 1007,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Bryyo Clues", // Skytown East, Chozo Observatory
        extraId: 1008,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Elysia Clues", // Skytown East, Chozo Observatory
        extraId: 1009,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Pirate Homeworld Clues", // Skytown East, Chozo Observatory
        extraId: 1010,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Pirate Homeworld Command & Research", // Pirate Homeworld, Command -> Research
        extraId: 1011,
        nodeType: "map",
      },{
        id: "golemHead",
        name: "Golem Head",
        extraId: 1021,
        nodeType: "slot", // "slot" -> "cargo" ?
      },{
        id: "generator",
        name: "Large Generator",
        extraId: 1022,
        nodeType: "slot",
      },{
        id: "screwAttackB",
        name: "Gold Credit",
        extraId: 1023,
        nodeType: "lore",
      }
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "mp_grid.png",
  }, 
  "mpff": {
    checklistWidth: 4,
    checklistLayout: [
      { lookupId: 1, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 2, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 3, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 4, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 5, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 6, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 7, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 8, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 9, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 10, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 12, value: 0, start: 0, max: 75, segments: [], clearIfScramble: true, },
    ],
    items: [
      {
        id: "repairCapsule",
        name: "Repair Capsule",
        sprite: "repair",
        bg: "9464e4",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "shieldGenerator",
        name: "Shield Generator",
        sprite: "shield",
        bg: "9464e4",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "missileB",
        name: "Missile",
        sprite: "missile",
        bg: "fea800",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "superMissileB",
        name: "Super Missile",
        sprite: "super",
        bg: "fea800",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "flameShot",
        name: "Flame Shot",
        sprite: "flame",
        bg: "fea800",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "freezeShot",
        name: "Freeze Shot",
        sprite: "freeze",
        bg: "fea800",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "shockShot",
        name: "Shock Shot",
        sprite: "shock",
        bg: "fea800",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "proximityBomb",
        name: "Proximity Bomb",
        sprite: "mine",
        bg: "fea800",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "slowBeam",
        name: "Slow Beam",
        sprite: "slow",
        bg: "b4ff00",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "decoy",
        name: "Decoy",
        sprite: "decoy",
        bg: "b4ff00",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "scanBolt",
        name: "Scan Bolt",
        sprite: "scan",
        bg: "b4ff00",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "goldMedal",
        name: "Gold Medals",
        bg: "c0c6c0",
        itemId: 12,
        nodeType: "artifact",
      },
    ],
    bosses: [
    ],
    areas: [
    ],
    extras: [
    ],
    mapTree: [
    ],
    grid: "mp2e_grid.png",
  },
  "mp4b": {
    checklistWidth: 4,
    checklistLayout: [
      { lookupId: 5, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 6, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 7, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 8, value: 0, start: 1, max: 1, segments: [], },
    ],
    items: [
      {
        id: "combatVisor",
        name: "Combat Visor",
        bg: "80d0ff",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "barrier",
        name: "Varia Suit",
        bg: "ff7e00",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "powerBeamA",
        name: "Power Beam",
        bg: "ffb508",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "scanVisorB",
        name: "Scan Visor",
        bg: "bca470",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        bg: "808000",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "morphBall",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "bombC",
        name: "Bombs",
        bg: "3800a8",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "missileC",
        name: "Missile Launcher",
        bg: "d82800",
        itemId: 8,
        nodeType: "upgrade",
      }
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
    checklistLayout: [
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 2, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 5, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 8, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 14, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 1, segments: [], nodeType: "slot", slotType: "beam", },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], nodeType: "slot", slotType: "beam", },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], nodeType: "slot", slotType: "beam", },
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], nodeType: "slot", slotType: "beam", },
      { lookupId: 4, value: 1, start: 0, max: 6, segments: [], },
      { lookupId: 3, value: 1, start: 0, max: 22, segments: [], },
      { name: "Metroids defeated", value: 0, start: 0, max: 49, segments: [
        { id: "monsterDna", name: "Phase 1", sprite: "monsters", type: "counter", value: 0, start: 0, max: 1, },
        { id: "monsterDna", name: "Phase 2", sprite: "monsters", type: "counter", value: 0, start: 0, max: 4, },
        { id: "monsterDna", name: "Phase 3", sprite: "monsters", type: "counter", value: 0, start: 0, max: 8, },
        { id: "monsterDna", name: "Phase 4", sprite: "monsters", type: "counter", value: 0, start: 0, max: 10, },
        { id: "monsterDna", name: "Phase 5", sprite: "monsters", type: "counter", value: 0, start: 0, max: 1, },
        { id: "monsterDna", name: "Phase 6", sprite: "monsters", type: "counter", value: 0, start: 0, max: 2, },
        { id: "monsterDna", name: "Phase 7", sprite: "monsters", type: "counter", value: 0, start: 0, max: 7, },
        { id: "monsterDna", name: "Phase 8", sprite: "monsters", type: "counter", value: 0, start: 0, max: 2, },
        { id: "monsterDna", name: "Phase 9", sprite: "monsters", type: "counter", value: 0, start: 0, max: 3, },
        { id: "monsterDna", name: "Phase 10", sprite: "monsters", type: "counter", value: 0, start: 0, max: 9, },
      ]},
      { lookupId: 15, value: 0, start: 0, max: 1, segments: [], },
    ],
    items: [
      {
        id: "morphBall",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        bg: "3800a8",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Pods",
        singleItemName: "Missile Pod",
        bg: "d82800",
        itemId: 3,
        nodeType: "expansion",
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 4,
        nodeType: "expansion",
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        bg: "bca470",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        bg: "2038ec",
        itemId: 6,
        nodeType: "slot",
        slotType: "beam",
      },{
        id: "barrierA",
        sprite: "barrier",
        name: "Varia Suit",
        bg: "ff7b7b",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        bg: "886848",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        bg: "c0a8d8",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        bg: "92278f",
        itemId: 10,
        nodeType: "slot",
        slotType: "beam",
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        bg: "00a0e0",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer Beam",
        bg: "ffff80",
        itemId: 12,
        nodeType: "slot",
        slotType: "beam",
      },{
        id: "plasmaBeam",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        bg: "00ff08",
        itemId: 13,
        nodeType: "slot",
        slotType: "beam",
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "monster",
        sprite: "baby",
        name: "Baby Metroid",
        bg: "008080",
        itemId: 15,
        nodeType: "artifact",
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
      },{
        id: 2,
        name: "Area 1",
        color: "db2b00",
      },{
        id: 3,
        name: "Area 2",
        color: "db2b00",
      },{
        id: 4,
        name: "Area 3",
        color: "db2b00",
      },{
        id: 5,
        name: "Area 5",
        color: "db2b00",
      },{
        id: 6,
        name: "Final Area",
        color: "db2b00",
      }
    ],
    extras: [
      {
        id: "saveRoom",
        name: "Save Station",
        nodeType: "save",
        extraId: 1003,
      },{
        id: "missileRefill",
        name: "Missiles Reload",
        nodeType: "recharge",
        extraId: 1001,
      },{
        id: "energyRefill",
        name: "Energy Recharge",
        nodeType: "recharge",
        extraId: 1002,
      },{
        id: "monsterDna",
        name: "Metroids defeated",
        nodeType: "artifact",
        displayIcon: "monsterDna",
        sprite: "monsters",
        bg: "747474",
        extraId: 1004,
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          { nodeType: "save", id: 1003 },
          { nodeType: "battle", id: 103 },
          { nodeType: "lock", id: 1004, reqdItemCount: 1, children: [
            { nodeType: "elevator", transportToMapId: 2, toStartHubId: 11 },
            { nodeType: "lock", id: 1004, reqdItemCount: 4, children: [
              { nodeType: "elevator", transportToMapId: 3, toStartHubId: 21 },
              { nodeType: "lock", id: 1004, reqdItemCount: 8, children: [
                { nodeType: "elevator", transportToMapId: 4, toStartHubId: 31 },
                { nodeType: "lock", id: 1004, reqdItemCount: 4, children: [
                  { nodeType: "battle", id: 104 },
                  { nodeType: "lock", id: 1004, reqdItemCount: 2, children: [
                    { nodeType: "elevator", transportToMapId: 5, toStartHubId: 41 },
                    { nodeType: "lock", id: 1004, reqdItemCount: 4, children: [
                      { nodeType: "lock", id: 1004, reqdItemCount: 7, children: [
                        { nodeType: "battle", id: 103 },
                        { nodeType: "lock", id: 1004, reqdItemCount: 1, children: [
                          { nodeType: "battle", id: 106 },
                          { nodeType: "lock", id: 1004, reqdItemCount: 1, children: [
                            { nodeType: "elevator", transportToMapId: 6, toStartHubId: 51 },
                          ]},
                        ]},
                      ]},
                    ]},
                  ]},
                ]},
                { nodeType: "lock", id: 1004, reqdItemCount: 1, children: [
                  { nodeType: "battle", id: 103 },
                  { nodeType: "battle", id: 104 },
                ]},
              ]},
            ]},
          ]},
        ],
      },
      { hubId: 11,
        nodeType: "start",
        mapId: 2,
        children: [
          
        ],
      },
    ],
    grid: "m2ros_grid.png",
  },
  "mcon": {
    checklistWidth: 5,
    checklistLayout: [
      { lookupId: 2, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 3, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 4, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], over: "S_Boss", overText: "Crocomire Defeated", },
      { lookupId: 8, value: 1, start: 0, max: 1, segments: [], over: "S_Boss", overText: "Kraid Defeated", },
      { lookupId: 5, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], over: "S_Boss", overText: "Ridley Defeated", },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 3, segments: [], },
      { lookupId: 1, value: 1, start: 0, max: 12, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 2, segments: [], },
      { id: "boss", name: "Bosses", sprite: "bosses", value: 0, start: 0, max: 3, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], },
    ],
    items: [
      {
        id: "missileTank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        sprite: "missile",
        bg: "d82800",
        itemId: 1,
        nodeType: "expansion",
      },{
        id: "morphBall",
        name: "Morph Ball",
        sprite: "morph",
        bg: "d8a480",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "bomb",
        name: "Bombs",
        sprite: "bomb",
        bg: "3800a8",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "powerGrip",
        name: "Power Grip",
        sprite: "grip",
        bg: "00e8d8",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        sprite: "charge",
        bg: "808000",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "energyTank",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        sprite: "energy",
        bg: "78a4bc",
        itemId: 6,
        nodeType: "expansion",
      },{
        id: "highJump",
        name: "High Jump Boots",
        sprite: "high",
        bg: "c0a8d8",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "speedBooster",
        name: "Speed Booster",
        sprite: "speed",
        bg: "ff0094",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "superMissileTank",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        sprite: "smissile",
        bg: "007f0e",
        itemId: 9,
        nodeType: "expansion",
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        name: "Spazer Beam",
        sprite: "wide",
        bg: "ffff80",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "energyCell",
        name: "Fuel Cell",
        sprite: "fuelcell",
        bg: "008080",
        itemId: 11,
        nodeType: "artifact",
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
      }
    ],
    extras: [
      {
        id: "saveRoom",
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
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          { nodeType: "save", id: 1002 },
          { nodeType: "trigger", id: 1001 }, 
          { nodeType: "lock", id: 1002, reqdItemCount: 1, children: [
            { nodeType: "upgrade", id: 1, isRandomizableItem: true },
          ]},
          { nodeType: "dropdown", children: [
            { nodeType: "upgrade", id: 2, isRandomizableItem: true, hubId: 2 },
            { nodeType: "lock", id: 2, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 3, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 1, isRandomizableItem: true },
              ], hubId: 3},
            ], hubId: 2, vineToHubId: 3},
          ], vineToHubId: 2},
          { nodeType: "lock", id: 1, reqdItemCount: 1, children: [], vineToHubId: 2},
          { nodeType: "lock", id: 2, reqdItemCount: 1, children: [], vineToHubId: 3},
          { nodeType: "lock", id: 1, reqdItemCount: 1, children: [
            { nodeType: "expansion", id: 1, isRandomizableItem: true },
            { nodeType: "expansion", id: 1, isRandomizableItem: true },
            { nodeType: "lock", id: 2, reqdItemCount: 1, children: [
              { nodeType: "dropdown", children: [
                { nodeType: "upgrade", id: 3, isRandomizableItem: true, hubId: 4 },
              ], vineToHubId: 4 },
            ]},
            { nodeType: "lock", id: 2, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 3, reqdItemCount: 1, children: [], vineToHubId: 4 },
            ]},
            { nodeType: "lock", id: 2, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 4, reqdItemCount: 1, children: [], vineToHubId: 4 },
            ]},
            { nodeType: "lock", id: 2, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 3, reqdItemCount: 1, children: [
                { nodeType: "expansion", id: 5, isRandomizableItem: true },
                { nodeType: "lock", id: 4, reqdItemCount: 1, children: [
                  { nodeType: "save", id: 1002, hubId: 7 },
                  { nodeType: "expansion", id: 6, isRandomizableItem: true, hubId: 7 },
                  { nodeType: "dropdown", children: [
                    { nodeType: "expansion", id: 1, isRandomizableItem: true },
                    { nodeType: "expansion", id: 1, isRandomizableItem: true },
                    { nodeType: "dropdown", children: [
                      { nodeType: "boss", id: 101, children: [
                        { nodeType: "upgrade", id: 7, isRandomizableItem: true, hubId: 8 },
                      ], vineToHubId: 8},
                    ]},
                  ], hubId: 7},
                  { nodeType: "return", children: [
                    { nodeType: "lock", id: 7, reqdItemCount: 1, children: [], vineToHubId: 8},
                  ], hubId: 7},
                ], vineToHubId: 7},
                { nodeType: "lock", id: 8, reqdItemCount: 1, children: [], vineToHubId: 7},
                { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                  { nodeType: "save", id: 1002 },
                  { nodeType: "dropdown", children: [
                    { nodeType: "expansion", id: 1, isRandomizableItem: true, hubId: 9 },
                    { nodeType: "expansion", id: 6, isRandomizableItem: true, hubId: 9 },
                    { nodeType: "dropdown", children: [
                      { nodeType: "boss", id: 103, children: [
                        { nodeType: "upgrade", id: 8, isRandomizableItem: true, hubId: 10 },
                      ], vineToHubId: 10},
                    ], hubId: 9},
                    { nodeType: "return", children: [
                      { nodeType: "lock", id: 8, reqdItemCount: 1, children: [], vineToHubId: 10},
                    ], hubId: 9},
                    { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
                      { nodeType: "expansion", id: 1, isRandomizableItem: true },
                    ], hubId: 9},
                    { nodeType: "lock", id: 8, reqdItemCount: 1, children: [
                      { nodeType: "expansion", id: 1, isRandomizableItem: true },
                    ], hubId: 9},
                  ], vineToHubId: 9},
                  { nodeType: "lock", id: 8, reqdItemCount: 1, children: [], vineToHubId: 9},
                  { nodeType: "return", children: [], vineToHubId: 9},
                ]},
                { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
                  { nodeType: "save", id: 1002 },
                  { nodeType: "expansion", id: 1, isRandomizableItem: true },
                  { nodeType: "expansion", id: 1, isRandomizableItem: true },
                  { nodeType: "expansion", id: 1, isRandomizableItem: true },
                  { nodeType: "expansion", id: 6, isRandomizableItem: true },
                  { nodeType: "expansion", id: 9, isRandomizableItem: true },
                  { nodeType: "boss", id: 103 },
                  { nodeType: "lock", id: 103, reqdItemCount: 1, children: [
                    { nodeType: "expansion", id: 10, isRandomizableItem: true },
                  ]},
                ]},
                { nodeType: "lock", id: 9, reqdItemCount: 1, children: [
                  { nodeType: "expansion", id: 9, isRandomizableItem: true },
                ]},
              ]},
            ]},
            { nodeType: "lock", id: 1, reqdItemCount: 1, children: [
              { nodeType: "dropdown", children: [
                { nodeType: "upgrade", id: 4, isRandomizableItem: true, hubId: 6 },
              ], hubId: 5, vineToHubId: 6},
              { nodeType: "lock", id: 4, reqdItemCount: 1, children: [], hubId: 5, vineToHubId: 6},
              { nodeType: "lock", id: 8, reqdItemCount: 1, children: [], hubId: 5, vineToHubId: 6},
            ], vineToHubId: 5},
          ]},
          { nodeType: "lock", id: 2, reqdItemCount: 1, children: [], vineToHubId: 5},
          { nodeType: "lock", id: 7, reqdItemCount: 1, children: [
            { nodeType: "lock", id: 2, reqdItemCount: 1, children: [
              { nodeType: "lock", id: 1, reqdItemCount: 1, children: [
                { nodeType: "lock", id: 101, reqdItemCount: 1, children: [
                  { nodeType: "lock", id: 102, reqdItemCount: 1, children: [
                    { nodeType: "lock", id: 103, reqdItemCount: 1, children: [
                      { nodeType: "artifact", id: 11, isRandomizableItem: true },
                    ]},
                  ]},
                ]},
              ]},
            ]},
          ]},
          { nodeType: "lock", id: 11, reqdItemCount: 1, children: [
            { nodeType: "end" }
          ]},
        ],
      },
    ],
    grid: "m2ros_grid.png",
  },
  "am2r": {
    checklistWidth: 8,
    checklistLayout: [
      { lookupId: 2, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 8, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 19, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 16, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Tester Defeated", },
      { lookupId: 20, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Serris Defeated", },
      { lookupId: 4, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Arachnus Defeated", },
      { lookupId: 3, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Torizo Defeated", },
      { lookupId: 14, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 18, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 5, value: 1, start: 0, max: 10, segments: [], },
      { lookupId: 1, value: 1, start: 0, max: 44, segments: [], },
      { lookupId: 15, value: 1, start: 0, max: 10, segments: [], },
      { lookupId: 17, value: 1, start: 0, max: 10, segments: [], over: "Z_Orb", overText: "Power Plant Destroyed", },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { name: "Metroids defeated", type: "counter", value: 0, start: 0, max: 54, segments: [
        { id: "monsterDna", name: "Surface", sprite: "monster", type: "counter", value: 0, start: 0, max: 1, },
        { id: "monsterDna", name: "Golden Temple", sprite: "monster", type: "counter", value: 0, start: 0, max: 4, },
        { id: "monsterDna", name: "Hydro Station", sprite: "monster", type: "counter", value: 0, start: 0, max: 8, },
        { id: "monsterDna", name: "Industrial Complex", sprite: "monster", type: "counter", value: 0, start: 0, max: 10, },
        { id: "monsterDna", name: "Research Site", sprite: "monster", type: "counter", value: 0, start: 0, max: 2, },
        { id: "monsterDna", name: "Mining Facility", sprite: "monster", type: "counter", value: 0, start: 0, max: 2, },
        { id: "monsterDna", name: "The Tower", sprite: "monster", type: "counter", value: 0, start: 0, max: 6, },
        { id: "monsterDna", name: "Distribution Center", sprite: "monster", type: "counter", value: 0, start: 0, max: 8, },
        //{ id: "monsterDna", name: "Upper Areas", sprite: "monster", type: "counter", value: 0, start: 0, max: 38, },
        { id: "monsterDna", name: "Rescue Team Campsite", sprite: "monster", type: "counter", value: 0, start: 0, max: 2, },
        { id: "monsterDna", name: "The Nest", sprite: "monster", type: "counter", value: 0, start: 0, max: 3, },
        { id: "monsterDna", name: "Genetics Laboratory", sprite: "monster", type: "counter", value: 0, start: 0, max: 9, },
      ]},
      { lookupId: 1031, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 30, value: 0, start: 0, max: 1, segments: [], },
    ],
    items: [
      {
        id: "missileTank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        sprite: "missile",
        bg: "d82800",
        itemId: 1,
        nodeType: "expansion",
      },{
        id: "morphBall",
        name: "Morph Ball",
        sprite: "morph",
        bg: "d8a480",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "powerGrip",
        name: "Power Grip",
        sprite: "grip",
        bg: "00e8d8",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "bomb",
        name: "Bombs",
        sprite: "bomb",
        bg: "3800a8",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "energyTank",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        sprite: "energy",
        bg: "78a4bc",
        itemId: 5,
        nodeType: "expansion",
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        sprite: "charge",
        bg: "808000",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "spiderBall",
        name: "Spider Ball",
        sprite: "spider",
        bg: "bca470",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "barrierB",
        name: "Varia Suit",
        sprite: "barrier",
        bg: "ff7e00",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        name: "Wave Beam",
        sprite: "wave",
        bg: "92278f",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "highJump",
        name: "High Jump Boots",
        sprite: "high",
        bg: "c0a8d8",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "springBall",
        name: "Spring Ball",
        sprite: "spring",
        bg: "886848",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "spaceJump",
        name: "Space Jump",
        sprite: "space",
        bg: "00a0e0",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        name: "Spazer Beam",
        sprite: "wide",
        bg: "ffff80",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "speedBooster",
        name: "Speed Booster",
        sprite: "speed",
        bg: "ff0094",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "superMissileTank",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        sprite: "smissile",
        bg: "007f0e",
        itemId: 15,
        nodeType: "expansion",
      },{
        id: "plasmaBeam",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        name: "Plasma Beam",
        sprite: "plasma",
        bg: "00ff08",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "powerBombTank",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        sprite: "pbombs",
        bg: "98b830",
        itemId: 17,
        nodeType: "expansion",
      },{
        id: "screwAttack",
        name: "Screw Attack",
        sprite: "screw",
        bg: "69cd69",
        itemId: 18,
        nodeType: "upgrade",
      },{
        id: "gravitySuit",
        name: "Gravity Suit",
        sprite: "gravity",
        bg: "602880",
        itemId: 19,
        nodeType: "upgrade",
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        name: "Ice Beam",
        sprite: "ice",
        bg: "2038ec",
        itemId: 20,
        nodeType: "upgrade",
      },{
        id: "monster",
        name: "Baby Metroid",
        sprite: "baby",
        bg: "008080",
        itemId: 30,
        nodeType: "artifact",
      },
    ],
    bosses: [
      {
        id: "alpha",
        name: "Alpha Metroid",
        bossId: 112,
      },{
        id: "gamma",
        name: "Gamma Metroid",
        bossId: 113,
      },{
        id: "zeta",
        name: "Zeta Metroid",
        bossId: 114,
      },{
        id: "omega",
        name: "Omega Metroid",
        bossId: 115,
      },{
        id: "larval",
        name: "Larval Metroid",
        bossId: 111,
      },{
        id: "queen",
        name: "Queen Metroid",
        bossId: 121,
      },{
        id: "ancientguard",
        name: "Ancient Guardian",
        bossId: 101,
      },{
        id: "arachnus",
        name: "Arachnus",
        bossId: 102,
      },{
        id: "tester",
        name: "The Tester",
        bossId: 103,
      },{
        id: "chozotank",
        name: "Chozo Tank",
        bossId: 104,
      },{
        id: "serris",
        name: "Serris",
        bossId: 105,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Main Tunnel",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "Golden Temple",
        color: "db2b00",
      },{
        id: 3,
        name: "Hydro Station",
        color: "db2b00",
      },{
        id: 4,
        name: "Industrial Complex",
        color: "db2b00",
      },{
        id: 5,
        name: "The Tower",
        color: "db2b00",
      },{
        id: 6,
        name: "Distribution Center",
        color: "db2b00",
      },{
        id: 7,
        name: "GFS Thoth",
        color: "db2b00",
      },{
        id: 8,
        name: "The Nest + Genetics Lab",
        color: "db2b00",
      }
    ],
    extras: [
      {
        id: "saveRoom",
        name: "Save Station",
        extraId: 1001,
        nodeType: "save",
      },{
        id: "unused",
        name: "Breeding Grounds", // Golden Temple
        extraId: 1021,
        nodeType: "area",
      },{
        id: "unused",
        name: "Breeding Grounds", // Hydro Station
        extraId: 1022,
        nodeType: "area",
      },{
        id: "unused",
        name: "Breeding Grounds", // Industrial Complex
        extraId: 1023,
        nodeType: "area",
      },{
        id: "unused",
        name: "Mining Facility",
        extraId: 1024,
        nodeType: "area",
      },{
        id: "unused",
        name: "Research Site",
        extraId: 1025,
        nodeType: "area",
      },{
        id: "unused",
        name: "Power Plant",
        extraId: 1026,
        nodeType: "area",
      },{
        id: "unused",
        name: "Genetics Laboratory",
        extraId: 1027,
        nodeType: "area",
      },{
        id: "towerPower",
        name: "Tower Power", // The Tower
        extraId: 1002,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Core Destroyed", // The Tower, Power Plant
        extraId: 1003,
        nodeType: "event",
      },{
        id: "unused",
        name: "Thoth Cockpit", // GFS Thoth
        extraId: 1016,
        nodeType: "event",
      },{
        id: "unused",
        name: "Trooper Log", // x 8
        extraId: 1008,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Trooper Log", // x 8
        extraId: 1009,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Trooper Log", // x 8
        extraId: 1010,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Trooper Log", // x 8
        extraId: 1011,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Trooper Log", // x 8
        extraId: 1012,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Trooper Log", // x 8
        extraId: 1013,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Trooper Log", // x 8
        extraId: 1014,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Trooper Log", // x 8
        extraId: 1015,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Science Scan", // x3
        extraId: 1005,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Science Scan", // x 3
        extraId: 1006,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Science Scan", // x 3
        extraId: 1007,
        nodeType: "lore",
      },{
        id: "unused",
        name: '"Movement Detected"',
        message: "Movement detected",
        extraId: 1005,
        nodeType: "lore",
      },{
        id: "am2rPowerOrb",
        name: "Power Orbs Distributed",
        sprite: "battery",
        bg: "887878",
        extraId: 1031,
        nodeType: "event",
      },{
        id: "unused",
        name: "Nest Cleared", // The Nest
        extraId: 1028,
        nodeType: "event",
      },{
        id: "unused",
        name: "Larval Metroids", // Genetics Lab
        extraId: 1029,
        nodeType: "event",
      },{
        id: "unused",
        name: "Power Orb 1",
        extraId: 1032,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Orb 2",
        extraId: 1033,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Orb 3",
        extraId: 1034,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Power Orb 4",
        extraId: 1035,
        nodeType: "trigger",
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "m2ros_grid.png",
  },
  "msr": {
    checklistWidth: 7,
    checklistLayout: [
      { lookupId: 1, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 6, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 12, value: 0, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Arachnus Defeated", },
      { lookupId: 25, value: 0, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Area 6 - Diggernaut Defeated", },
      { lookupId: 11, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 23, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 3, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 10, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 15, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 21, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 19, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 14, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 18, value: 0, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Area 4 - Survived Diggernaut", },
      { lookupId: 5, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 8, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 13, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 17, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 22, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 16, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 24, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 4, value: 1, start: 0, max: 10, segments: [], },
      { lookupId: 2, value: 1, start: 0, max: 80, segments: [], },
      { lookupId: 20, value: 1, start: 0, max: 30, segments: [], },
      { lookupId: 26, value: 1, start: 0, max: 15, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 15, segments: [], },
      { name: "Metroids defeated", type: "counter", value: 0, start: 0, max: 50, segments: [
        { id: "monsterDna", name: "Surface", sprite: "dna", type: "counter", value: 0, start: 0, max: 1, },
        { id: "monsterDna", name: "Area 1", sprite: "dna", type: "counter", value: 0, start: 0, max: 4, },
        { id: "monsterDna", name: "Area 2", sprite: "dna", type: "counter", value: 0, start: 0, max: 8, },
        { id: "monsterDna", name: "Area 3", sprite: "dna", type: "counter", value: 0, start: 0, max: 10, },
        { id: "monsterDna", name: "Area 4", sprite: "dna", type: "counter", value: 0, start: 0, max: 4, },
        { id: "monsterDna", name: "Area 5", sprite: "dna", type: "counter", value: 0, start: 0, max: 7, },
        { id: "monsterDna", name: "Area 6", sprite: "dna", type: "counter", value: 0, start: 0, max: 2, },
        { id: "monsterDna", name: "Area 7", sprite: "dna", type: "counter", value: 0, start: 0, max: 3, },
        { id: "monsterDna", name: "Area 8", sprite: "dna", type: "counter", value: 0, start: 0, max: 11, },
      ]},
      { lookupId: 27, value: 0, start: 0, max: 1, segments: [], clearIfScramble: true, },
    ],
    items: [
      {
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        sprite: "mtank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        bg: "d82800",
        itemId: 2,
        nodeType: "expansion",
      },{
        id: "scanPulse",
        sprite: "pulse",
        name: "Scan Pulse",
        bg: "00c7ff",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 4,
        nodeType: "expansion",
      },{
        id: "chargeBeamD",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        sprite: "charge",
        name: "Charge Beam",
        bg: "808000",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "bomb",
        sprite: "bombs",
        name: "Bombs",
        bg: "3800a8",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "aeionExpansion",
        sprite: "aexp",
        name: "Aeion Expansions",
        singleItemName: "Aeion Expansion",
        alreadyHasMainItem: true,
        bg: "bfbf00",
        itemId: 7,
        nodeType: "expansion",
      },{
        id: "iceBeamB",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        bg: "2038ec",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        bg: "bca470",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "lightningArmor",
        sprite: "shield",
        name: "Lightning Armor",
        bg: "00ff08",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "barrier",
        sprite: "barrier",
        name: "Varia Suit",
        bg: "ff7e00",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        bg: "886848",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        bg: "92278f",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        bg: "c0a8d8",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "beamBurst",
        sprite: "burst",
        name: "Beam Burst",
        bg: "ffbc15",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "grappleBeam",
        sprite: "grapple",
        name: "Grapple Beam",
        bg: "00e8d8",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "wideBeamD",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer Beam",
        bg: "ffff80",
        itemId: 17,
        nodeType: "upgrade",
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        bg: "00a0e0",
        itemId: 18,
        nodeType: "upgrade",
      },{
        id: "superMissile",
        sprite: "superm",
        name: "Super Missiles",
        bg: "007f0e",
        itemId: 19,
        nodeType: "upgrade",
      },{
        id: "superMissileTank",
        sprite: "smtank",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        alreadyHasMainItem: true,
        bg: "007f0e",
        itemId: 20,
        nodeType: "expansion",
      },{
        id: "phaseDrift",
        sprite: "drift",
        name: "Phase Drift",
        bg: "e900ff",
        itemId: 21,
        nodeType: "upgrade",
      },{
        id: "plasmaBeamC",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        bg: "00ff08",
        itemId: 22,
        nodeType: "upgrade",
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "Gravity Suit",
        bg: "602880",
        itemId: 23,
        nodeType: "upgrade",
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 24,
        nodeType: "upgrade",
      },{
        id: "powerBomb",
        sprite: "pbombs",
        name: "Power Bomb",
        bg: "98b830",
        itemId: 25,
        nodeType: "upgrade",
      },{
        id: "powerBombTank",
        sprite: "pbtank",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        alreadyHasMainItem: true,
        bg: "98b830",
        itemId: 26,
        nodeType: "expansion",
      },{
        id: "monster",
        sprite: "baby",
        name: "Baby Metroid",
        bg: "008080",
        itemId: 27,
        nodeType: "artifact",
      },
    ],
    bosses: [
      {
        id: "alpha",
        name: "Alpha Metroid",
        bossId: 112,
      },{
        id: "gamma",
        name: "Gamma Metroid",
        bossId: 113,
      },{
        id: "zeta",
        name: "Zeta Metroid",
        bossId: 114,
      },{
        id: "omega",
        name: "Omega Metroid",
        bossId: 115,
      },{
        id: "larval",
        name: "Larval Metroid",
        bossId: 111,
      },{
        id: "queen",
        name: "Queen Metroid",
        bossId: 121,
      },{
        id: "arachnus",
        name: "Arachnus",
        bossId: 101,
      },{
        id: "diggernauta",
        name: "Diggernaut Chase",
        bossId: 102,
      },{
        id: "diggernautb",
        name: "Diggernaut",
        bossId: 103,
      },{
        id: "pridley",
        name: "Proteus Ridley",
        bossId: 122,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Surface",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "Area 1",
        color: "db2b00",
      },{
        id: 3,
        name: "Area 2",
        color: "db2b00",
      },{
        id: 4,
        name: "Area 3",
        color: "db2b00",
      },{
        id: 5,
        name: "Area 4",
        color: "db2b00",
      },{
        id: 6,
        name: "Area 5",
        color: "db2b00",
      },{
        id: 7,
        name: "Area 6",
        color: "db2b00",
      },{
        id: 8,
        name: "Area 7",
        color: "db2b00",
      },{
        id: 9,
        name: "Area 8",
        color: "db2b00",
      },{
        id: 10,
        name: "Surface (Post-Extinction)",
        color: "db2b00",
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
        id: "missileRefill",
        name: "Missiles Reload",
        nodeType: "recharge",
        extraId: 1004,
      },{
        id: "energyRefill",
        name: "Energy Recharge",
        nodeType: "recharge",
        extraId: 1005,
      },{
        id: "ammoStation",
        name: "Aeion Refilled",
        nodeType: "recharge",
        extraId: 1003,
      },{
        id: "saveRoom",
        name: "Save Station",
        nodeType: "save",
        extraId: 1002,
      },{
        id: "meleeCounter",
        name: "Melee Counter tutorial",
        nodeType: "event",
        extraId: 1009,
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "m2ros_grid.png",
  },
  "sm": {
    checklistWidth: 8,
    checklistLayout: [
      { lookupId: 1, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Morphing Ball Item Acquired", },
      { lookupId: 3, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Torizo Defeated", },
      { lookupId: 19, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Spring Ball Orb Acquired", },
      { lookupId: 21, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Screw Attack Orb Acquired", },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Kraid Defeated", },
      { lookupId: 17, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Gravity Suit Orb Acquired", },
      { lookupId: 15, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla X-Ray Scope Orb Acquired", },
      { lookupId: 14, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Grappling Beam Orb Acquired", },
      { lookupId: 5, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Charge Beam Orb Acquired", },
      { lookupId: 8, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Spazer Orb Acquired", },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Ice Beam Orb Acquired", },
      { lookupId: 16, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Wave Beam Orb Acquired", },
      { lookupId: 20, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Plasma Beam Orb Acquired", },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla High Jump Orb Acquired", },
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], over: "Z_Orb", overText: "Vanilla Speed Booster Orb Acquired", },
      { lookupId: 18, value: 1, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Draygon Defeated", },
      { lookupId: 4, value: 1, start: 0, max: 14, segments: [], },
      { lookupId: 2, value: 1, start: 0, max: 46, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 10, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 10, segments: [], },
      { lookupId: 13, value: 1, start: 0, max: 4, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { id: "boss", sprite: "boss", name: "Bosses", value: 0, start: 0, max: 4, segments: [], },
      { id: "etedach", sprite: "animals", name: "Animals Rescued", value: 0, start: 0, max: 1, segments: [], },
    ],
    items: [
      {
        id: "morphBall",
        sprite: "morph",
        name: "Morphing Ball",
        bg: "d8a480",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        bg: "d82800",
        itemId: 2,
        nodeType: "expansion",
      },{
        id: "bomb",
        sprite: "bomb",
        name: "Bombs",
        bg: "3800a8",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 4,
        nodeType: "expansion",
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        sprite: "charge",
        bg: "808000",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "superMissileTank",
        sprite: "smissile",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        bg: "007f0e",
        itemId: 6,
        nodeType: "expansion",
      },{
        id: "highJump",
        sprite: "high",
        name: "High Jump Boots",
        bg: "c0a8d8",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer",
        bg: "ffff80",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "barrier",
        sprite: "barrier",
        name: "Varia Suit",
        bg: "ff7e00",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "speedBooster",
        sprite: "speed",
        name: "Speed Booster",
        bg: "ff0094",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        bg: "2038ec",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "powerBombTank",
        sprite: "pbombs",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        bg: "98b830",
        itemId: 12,
        nodeType: "expansion",
      },{
        id: "reserveTankB",
        locale: {
          'enUS': {
            id: "reserveTank"
          }
        },
        sprite: "reserve",
        name: "Reserve Tanks",
        singleItemName: "Reserve Tank",
        bg: "7f2800",
        itemId: 13,
        nodeType: "expansion",
      },{
        id: "grappleBeam",
        sprite: "grapple",
        name: "Grappling Beam",
        bg: "00e8d8",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "xRayScope",
        sprite: "xray",
        name: "X-Ray Scope",
        bg: "c8d8d8",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "waveBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        bg: "92278f",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "Gravity Suit",
        bg: "602880",
        itemId: 17,
        nodeType: "upgrade",
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        bg: "00a0e0",
        itemId: 18,
        nodeType: "upgrade",
      },{
        id: "springBall",
        sprite: "spring",
        name: "Spring Ball",
        bg: "886848",
        itemId: 19,
        nodeType: "upgrade",
      },{
        id: "plasmaBeam",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        bg: "00ff08",
        itemId: 20,
        nodeType: "upgrade",
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 21,
        nodeType: "upgrade",
      },
    ],
    bosses: [
      {
        id: "torizo",
        name: "Torizo",
        bossId: 101,
      },{
        id: "spospaw",
        name: "Spore Spawn",
        bossId: 102,
      },{
        id: "kraid",
        name: "Kraid",
        bossId: 106,
      },{
        id: "crocomire",
        name: "Crocomire",
        bossId: 103,
      },{
        id: "phantoon",
        name: "Phantoon",
        bossId: 107,
      },{
        id: "botwoon",
        name: "Botwoon",
        bossId: 104,
      },{
        id: "draygon",
        name: "Draygon",
        bossId: 108,
      },{
        id: "goldtorizo",
        name: "Golden Torizo",
        bossId: 105,
      },{
        id: "ridley",
        name: "Ridley",
        bossId: 109,
      },{
        id: "mbrain",
        name: "Mother Brain",
        bossId: 110,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Crateria",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "Brinstar", // blue
        color: "2038ec",
      },{
        id: 3,
        name: "Brinstar", // green
        color: "2038ec",
      },{
        id: 4,
        name: "Brinstar", // red part 1
        color: "2038ec",
      },{
        id: 5,
        name: "Brinstar", // red part 2
        color: "2038ec",
      },{
        id: 6,
        name: "Norfair", // upper
        color: "db2b00",
      },{
        id: 7,
        name: "Norfair", // lower
        color: "db2b00",
      },{
        id: 8,
        name: "Wrecked Ship",
        color: "009700",
      },{
        id: 9,
        name: "Maridia", // pipe
        color: "bf00bf",
      },{
        id: 10,
        name: "Maridia", // main
        color: "bf00bf",
      },{
        id: 11,
        name: "Tourian",
        color: "bcbcbc",
      }
    ],
    extras: [
      {
        id: "etedach",
        name: "Save The Animals",
        sprite: "animals",
        extraId: 1021,
        nodeType: "event",
      },{
        id: "etedach",
        name: "Shine Spark Critter",
        extraId: 1022,
        nodeType: "event",
      },{
        id: "etedach",
        name: "Wall Jump Critters",
        extraId: 1023,
        nodeType: "event",
      },{
        id: "unused",
        name: "Blue Shutter",
        extraId: 1004,
        nodeType: "trigger",
      },{
        id: "superMissileTank",
        name: "Green Shutter",
        extraId: 1005,
        nodeType: "trigger",
      },{
        id: "powerBombTank",
        name: "Glass Tunnel Broken", // Maridia
        extraId: 1024,
        nodeType: "trigger",
      },{
        id: "reserveTankB",
        name: "Reserve Tank Hint",
        extraId: 1025,
        nodeType: "lore",
      },{
        id: "unused",
        name: "Map: Crateria",
        extraId: 1011,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Brinstar",
        extraId: 1012,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Norfair",
        extraId: 1013,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Maridia",
        extraId: 1015,
        nodeType: "map",
      },{
        id: "unused",
        name: "Map: Wrecked Ship",
        extraId: 1014,
        nodeType: "map",
      },{
        id: "missileRefill",
        name: "Missiles Reload",
        extraId: 1001,
        nodeType: "recharge",
      },{
        id: "energyRefill",
        name: "Energy Recharge",
        extraId: 1002,
        nodeType: "recharge",
      },{
        id: "saveRoom",
        name: "Save Station",
        extraId: 1003,
        nodeType: "save",
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "sm_grid.png",
  },
  "mom": {
    checklistWidth: 8,
    checklistLayout: [
      { lookupId: 1, value: 0, start: 1, max: 1, segments: [], },
      { lookupId: 4, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 2, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 15, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 19, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 10, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 20, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 14, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 8, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 13, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 16, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 17, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 18, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 21, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 5, segments: [], },
      { lookupId: 3, value: 1, start: 0, max: 70, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 6, segments: [], },
      { lookupId: 5, value: 1, start: 0, max: 16, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 3, segments: [], },
    ],
    items: [
      {
        id: "morphBall",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "missile",
        name: "Missiles",
        sprite: "missile",
        bg: "d82800",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        sprite: "tank",
        alreadyHasMainItem: true,
        bg: "d82800",
        itemId: 3,
        nodeType: "expansion",
      },{
        id: "bombA",
        name: "Bombs",
        sprite: "bomb",
        bg: "3800a8",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "energyPartA",
        locale: {
          'enUS': {
            id: "energyPart"
          }
        },
        name: "Energy Parts",
        singleItemName: "Energy Part",
        sprite: "part",
        bg: "fcc4d8",
        itemId: 5,
        nodeType: "expansion",
      },{
        id: "energyTank",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        sprite: "energy",
        bg: "78a4bc",
        itemId: 6,
        nodeType: "expansion",
      },{
        id: "chargeAccel",
        name: "Accel Charges",
        singleItemName: "Accel Charge",
        sprite: "accel",
        bg: "808000",
        itemId: 7,
        nodeType: "expansion",
      },{
        id: "diffusionBeam",
        locale: {
          'enUS': {
            id: "diffusionBeamA"
          }
        },
        name: "Diffusion Beam",
        sprite: "diffusion",
        bg: "7f2800",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "iceBeam",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        name: "Ice Beam",
        bg: "2038ec",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "barrier",
        name: "Varia Feature",
        bg: "ff7e00",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "speedBoosterA",
        name: "Speed Booster",
        sprite: "speed",
        bg: "ff0094",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "eRecoveryTankA",
        locale: {
          'enUS': {
            id: "eRecoveryTank"
          }
        },
        name: "E-Recovery Tanks",
        singleItemName: "E-Recovery Tank",
        sprite: "erec",
        bg: "6f3198",
        itemId: 12,
        nodeType: "expansion",
      },{
        id: "waveBeamC",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        name: "Wave Beam",
        bg: "92278f",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "grappleBeam",
        name: "Grapple Beam",
        sprite: "grapple",
        bg: "00e8d8",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "superMissile",
        name: "Super Missiles",
        sprite: "super",
        bg: "007f0e",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "plasmaBeam",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        name: "Plasma Beam",
        bg: "00ff08",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "spaceJump",
        name: "Space Jump",
        bg: "00a0e0",
        itemId: 17,
        nodeType: "upgrade",
      },{
        id: "screwAttack",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 18,
        nodeType: "upgrade",
      },{
        id: "seekerLauncher",
        name: "Seeker Missiles",
        sprite: "seeker",
        bg: "644080",
        itemId: 19,
        nodeType: "upgrade",
      },{
        id: "gravitySuitC",
        name: "Gravity Feature",
        bg: "602880",
        itemId: 20,
        nodeType: "upgrade",
      },{
        id: "powerBomb",
        name: "Power Bombs",
        sprite: "pbomb",
        bg: "98b830",
        itemId: 21,
        nodeType: "upgrade",
      },
    ],
    bosses: [
      {
        id: "brugmass",
        name: "Brug Mass",
        bossId: 101,
      },{
        id: "funetwins",
        name: "Fune and Nahime",
        bossId: 102,
        nodeType: "battle",
      },{
        id: "kihive",
        name: "King Ki Hunter",
        bossId: 103,
      },{
        id: "zebesians",
        name: "Cyborg Zebesians",
        bossId: 104,
        nodeType: "battle",
      },{
        id: "mcridley",
        name: "Mystery Creature",
        bossId: 105,
      },{
        id: "goyagma",
        name: "Goyagma",
        bossId: 106,
      },{
        id: "deleter",
        name: "Ferro Crusher",
        bossId: 107,
      },{
        id: "rhedogiana",
        name: "Rhedogian", // Sector 2 Materials Transfer Lift
        bossId: 108,
        nodeType: "battle",
      },{
        id: "vorash",
        name: "Vorash",
        bossId: 109,
      },{
        id: "rhedogianb",
        name: "Rhedogian", // Sector 3 saving Anthony
        bossId: 110,
        nodeType: "battle",
      },{
        id: "rhedogianc",
        name: "Rhedogian", // Sector 3 desert area
        bossId: 111,
        nodeType: "battle",
      },{
        id: "rhedogiand",
        name: "Rhedogian", // Sector 1 antechamber
        bossId: 112,
        nodeType: "battle",
      },{
        id: "ridley",
        name: "Ridley",
        bossId: 113,
      },{
        id: "nightmarea",
        name: "Nightmare", // first part
        bossId: 114,
      },{
        id: "nightmareb",
        name: "Nightmare", // reprise
        bossId: 115,
      },{
        id: "qmetroid",
        name: "Queen Metroid",
        bossId: 116,
      },{
        id: "mb",
        name: "MB",
        bossId: 117,
      },{
        id: "gauntlet",
        name: "Final Gauntlet",
        bossId: 121,
        nodeType: "battle",
      },{
        id: "phantoon",
        name: "Phantoon",
        bossId: 122,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Main Sector",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "Sector 1 - Biosphere",
        color: "db2b00",
      },{
        id: 3,
        name: "Sector 2 - Cryosphere",
        color: "009700",
      },{
        id: 4,
        name: "Sector 3 - Pyrosphere",
        color: "bf00bf",
      },{
        id: 5,
        name: "Bioweapon Research Center",
        color: "bcbcbc",
      }
    ],
    extras: [
      {
        id: "unused",
        name: "Mission 1", // Main Sector -> Get to System Management Room and turn on Main Sector power
        extraId: 1003,
        nodeType: "event",
      },{
        id: "unused",
        name: "System Management", // Main Sector -> Turn on Main Sector power -> Head to Main Elevator and then onwards to Sector 1
        extraId: 1004,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Breeding Room", // Sector 1 -> "A Dark Intelligence"
        extraId: 1005,
        nodeType: "event",
      },{
        id: "unused",
        name: "Scrap Block", // Sector 1
        extraId: 1006,
        nodeType: "area",
      },{
        id: "unused",
        name: "East Access", // Sector 1, Scrap Block -> Access East Sector 1, pre- Fune & Nahime battle
        extraId: 1007,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Exam Center", // Sector 1
        extraId: 1008,
        nodeType: "area",
      },{
        id: "unused",
        name: "Cyborg Zebesian Found", // Sector 1, Exam Center
        extraId: 1009,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Sector 2 Access", // Sector 3 -> post-Goyagma, chasing the MC until the impassable magma room, Adam gives instructions to hold off for now
        extraId: 1010,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Deleter Hint", // Sector 2 -> post-Ferrocrusher
        extraId: 1011,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Glass", // Sector 2 -> post-Ferrocrusher
        extraId: 1012,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Stairs", // Sector 2 -> post-Ferrocrusher
        extraId: 1013,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Desert Access", // Sector 3 -> post-Ferrocrusher, chasing after the MC resumes; leads to Vorash and then loops back towards Ridley
        extraId: 1014,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Meeting Madeline", // BRC -> gain intel on Sector Zero, triggers Rhedogian 4 battle in Sector 1 to get Seeker Missiles
        extraId: 1015,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Gravity Block", // Sector 2
        extraId: 1016,
        nodeType: "area",
      },{
        id: "unused",
        name: "Sector Zero", // Sector 2
        extraId: 1017,
        nodeType: "area",
      },{
        id: "unused",
        name: "Final Mission", // Sector 2, Sector Zero -> RIP Adam
        extraId: 1018,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Postgame",
        extraId: 1021,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Adam's Helmet", // Main Sector, Postgame -> Escape
        extraId: 1022,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Hard Mode",
        extraId: 1002,
        nodeType: "lore",
      },{
        id: "navigationRoom",
        name: "Navigation Room",
        extraId: 1001,
        nodeType: "save",
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "mom_grid.png",
  },
  "mng": {
    checklistWidth: 6,
    checklistLayout: [
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 15, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 40, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 29, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 30, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 31, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 8, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 5, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 17, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 19, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 44, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 2, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 16, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 18, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 43, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 3, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 42, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 4, value: 1, start: 0, max: 14, segments: [], },
      { lookupId: 1, value: 1, start: 0, max: 50, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 20, segments: [], },
      { lookupId: 14, value: 1, start: 0, max: 15, segments: [], },
      { lookupId: 41, value: 1, start: 0, max: 10, segments: [], },
      { name: "Metroids defeated", type: "counter", value: 0, start: 0, max: 80, segments: [
        { id: "monsterDna", name: "To unlock Trozodia", sprite: "monsters", type: "counter", value: 0, start: 0, max: 1, },
        { id: "monsterDna", name: "To unlock Pyrfair", sprite: "monsters", type: "counter", value: 0, start: 1, max: 5, },
        { id: "monsterDna", name: "To unlock Aqastar", sprite: "monsters", type: "counter", value: 0, start: 5, max: 10, },
        { id: "monsterDna", name: "To unlock Arcteria", sprite: "monsters", type: "counter", value: 0, start: 10, max: 20, },
        { id: "monsterDna", name: "To power up your ship", sprite: "monsters", type: "counter", value: 0, start: 20, max: 35, },
        { id: "monsterDna", name: "To unlock the Heart of the Galaxy", sprite: "monsters", type: "counter", value: 0, start: 35, max: 60, },
        { id: "monsterDna", name: "Genocide", sprite: "monsters", type: "counter", value: 0, start: 60, max: 80, },
      ]},
    ],
    items: [
      {
        id: "missileTank",
        sprite: "missiles",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        bg: "d82800",
        itemId: 1,
        nodeType: "expansion",
      },{
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "powerGrip",
        sprite: "grip",
        name: "Power Grip",
        bg: "00e8d8",
        itemId: 3,
        nodeType: "upgrade",
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 4,
        nodeType: "expansion",
      },{
        id: "flameShotA",
        sprite: "fire",
        name: "Fire Beam",
        bg: "ff4a4a",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "bomb",
        sprite: "bombs",
        name: "Bomb",
        bg: "3800a8",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "speedBooster",
        sprite: "speed",
        name: "Speed Booster",
        bg: "ff0094",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "chargeBeamA",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        sprite: "charge",
        name: "Charge Module",
        bg: "808000",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "springBall",
        sprite: "spring",
        name: "Jump Ball",
        bg: "886848",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "barrier",
        sprite: "barrier",
        name: "Varia Suit",
        bg: "ff7e00",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "highJump",
        sprite: "high",
        name: "Hi-Jump Boots",
        bg: "c0a8d8",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "superMissileTank",
        sprite: "supers",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        bg: "007f0e",
        itemId: 12,
        nodeType: "expansion",
      },{
        id: "waveBeamD",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        bg: "92278f",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "magneticShieldTank",
        sprite: "shields",
        name: "Magnetic Shield Tanks",
        singleItemName: "Magnetic Shield Tank",
        bg: "007098",
        itemId: 14,
        nodeType: "expansion",
      },{
        id: "gravitySuit",
        sprite: "gravity",
        name: "Gravity Suit",
        bg: "602880",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        bg: "bca470",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer",
        bg: "ffff80",
        itemId: 17,
        nodeType: "upgrade",
      },{
        id: "adapter",
        sprite: "adapter",
        name: "Bomb-Beam Adapter",
        bg: "887878",
        itemId: 18,
        nodeType: "upgrade",
      },{
        id: "plasmaBeamE",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        bg: "00ff08",
        itemId: 19,
        nodeType: "upgrade",
      },{
        id: "zeroSuit",
        sprite: "chozo",
        name: "Zero Suit",
        bg: "007098",
        itemId: 29,
        nodeType: "upgrade",
      },{
        id: "zeroSuitA",
        sprite: "black",
        name: "Black Zero Suit",
        bg: "6c0204",
        itemId: 30,
        nodeType: "upgrade",
      },{
        id: "fullPowerSuit",
        sprite: "suit",
        name: "Equipment recovered",
        bg: "ffb508",
        itemId: 31,
        nodeType: "upgrade",
      },{
        id: "phazonSuit",
        sprite: "phazon",
        name: "Phazon Suit",
        bg: "282018",
        itemId: 40,
        nodeType: "upgrade",
      },{
        id: "powerBombTank",
        sprite: "pbombs",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        bg: "98b830",
        itemId: 41,
        nodeType: "expansion",
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 42,
        nodeType: "upgrade",
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        bg: "00a0e0",
        itemId: 43,
        nodeType: "upgrade",
      },{
        id: "iceBeamE",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        bg: "2038ec",
        itemId: 44,
        nodeType: "upgrade",
      },
    ],
    bosses: [
      {
        id: "alpha",
        name: "Alpha Metroid",
        bossId: 102,
      },{
        id: "gamma",
        name: "Gamma Metroid",
        bossId: 103,
      },{
        id: "delta",
        name: "Grabber Gamma Metroid",
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
        id: "torizo",
        name: "Torizo",
        bossId: 111,
      },{
        id: "spospaw",
        name: "Spore Spawn",
        bossId: 112,
      },{
        id: "kraid",
        name: "Kraid",
        bossId: 113,
      },{
        id: "diorm",
        name: "Diorm",
        bossId: 114,
      },{
        id: "draygon",
        name: "Draygon",
        bossId: 115,
      },{
        id: "crocomice",
        name: "Crocomice",
        bossId: 116,
      },{
        id: "chozoguard",
        name: "Chozo Guardian",
        bossId: 117,
      },{
        id: "ridley",
        name: "Ridley",
        bossId: 118,
      },{
        id: "phantoon",
        name: "Phantoon",
        bossId: 119,
      },{
        id: "gtorizo",
        name: "Golden Torizo",
        bossId: 120,
      },{
        id: "larval",
        name: "Larval Metroid",
        bossId: 101,
      },{
        id: "mbrain",
        name: "Mother Brain",
        bossId: 131,
      },{
        id: "queen",
        name: "Queen Metroid",
        bossId: 132,
      }
    ],
    areas: [
      {
        id: 1,
        name: "SRX88",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "Trozodia",
        color: "db2b00",
      },{
        id: 3,
        name: "Pyrfair",
        color: "db2b00",
      },{
        id: 4,
        name: "Aqastar",
        color: "009700",
      },{
        id: 5,
        name: "Arcteria",
        color: "bf00bf",
      },{
        id: 6,
        name: "Noctian", // zero suit
        color: "bcbcbc",
      },{
        id: 7,
        name: "Phazon Dimension", // zero suit
        color: "bcbcbc",
      },{
        id: 8,
        name: "Phazon Trozodia", // post-suit reclamation
        color: "bcbcbc",
      },{
        id: 9,
        name: "Phazon Pyrfair", // post-suit reclamation
        color: "bcbcbc",
      },{
        id: 10,
        name: "Phazon Aqastar", // post-suit reclamation
        color: "bcbcbc",
      },{
        id: 11,
        name: "Phazon Arcteria", // post-suit reclamation
        color: "bcbcbc",
      },{
        id: 12,
        name: "Phazon Noctian", // post-suit reclamation
        color: "bcbcbc",
      },{
        id: 13,
        name: "Noctian", // ship reclamation
        color: "bcbcbc",
      },{
        id: 14,
        name: "Phazon SRX88", // post-suit reclamation
        color: "bcbcbc",
      },{
        id: 15,
        name: "Heart of the Galaxy",
        color: "bcbcbc",
      },{
        id: 16,
        name: "Phazon Heart of the Galaxy",
        color: "bcbcbc",
      },{
        id: 17,
        name: "Escape Sequence",
        color: "bcbcbc",
      }
    ],
    extras: [
      {
        id: "powerBeamD",
        name: "Phazon Portal",
        extraId: 1002,
        nodeType: "teleport",
      },{
        id: "rechargeRoom",
        name: "Return Portal",
        extraId: 1003,
        nodeType: "teleport",
      },{
        id: "unused",
        name: "Shine Spark Hint", // Pyrfair
        extraId: 1004,
        nodeType: "easter",
      },{
        id: "unused",
        name: "Charge Bomb Hint", // Phazon SRX88
        extraId: 1005,
        nodeType: "easter",
      },{
        id: "unused",
        name: "Escape Sequence", // Arcterra
        extraId: 1006,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Ship Rescued", // Noctian
        extraId: 1007,
        nodeType: "trigger",
      },{
        id: "unused",
        name: "X", // HotG Escape
        extraId: 1008,
        nodeType: "event", // must always be locks, as they are dead ends
      },{
        id: "saveRoom",
        name: "Save Station",
        extraId: 1001,
        nodeType: "save",
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "mph_grid.png",
  },
  "mttne": {
    checklistWidth: 8,
    checklistLayout: [
      { lookupId: 10, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 20, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 25, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 1, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 14, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 22, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 2, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 18, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 17, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 26, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 23, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 4, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 15, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 29, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 7, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 27, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 30, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 21, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 32, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 31, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 28, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 5, value: 1, start: 0, max: 14, segments: [], },
      { lookupId: 3, value: 1, start: 0, max: 50, segments: [], },
      { lookupId: 16, value: 1, start: 0, max: 20, segments: [], },
      { lookupId: 19, value: 1, start: 0, max: 15, segments: [], },
      { lookupId: 24, value: 1, start: 0, max: 15, segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 11, segments: [], },
      { lookupId: 8, value: 1, start: 0, max: 5, segments: [], },
      { name: "X-Metroids defeated", type: "counter", value: 0, start: 0, max: 25, segments: [
        { id: "monsterDna", name: "First batch", sprite: "monsters", type: "counter", value: 0, start: 0, max: 5, },
        { id: "monsterDna", name: "Second batch", sprite: "monsters", type: "counter", value: 0, start: 5, max: 10, },
        { id: "monsterDna", name: "Third batch", sprite: "monsters", type: "counter", value: 0, start: 10, max: 15, },
        { id: "monsterDna", name: "Final batch", sprite: "monsters", type: "counter", value: 0, start: 15, max: 25, },
      ]},
    ],
    items: [
      {
        id: "morphBall",
        sprite: "morph",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "longBeamA",
        locale: {
          'enUS': {
            id: "longBeam"
          }
        },
        sprite: "long",
        name: "Long Beam",
        bg: "7f2800",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        sprite: "missiles",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        bg: "d82800",
        itemId: 3,
        nodeType: "expansion",
      },{
        id: "wallJumpBoots",
        sprite: "wall",
        name: "Wall Jump Boots",
        bg: "ff7e00",
        itemId: 4,
        nodeType: "upgrade",
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 5,
        nodeType: "expansion",
      },{
        id: "aquadiaKey",
        sprite: "key",
        name: "Keys",
        singleItemName: "Key",
        bg: "ffffff",
        itemId: 6,
        nodeType: "expansion",
      },{
        id: "powerGrip",
        sprite: "grip",
        name: "Power Grip",
        bg: "00e8d8",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "steelarisGear",
        sprite: "gear",
        name: "Gears",
        singleItemName: "Gear",
        bg: "ffffff",
        itemId: 8,
        nodeType: "expansion",
      },{
        id: "bomb",
        sprite: "bombs",
        name: "Bomb",
        bg: "3800a8",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "barrier",
        sprite: "barrier",
        name: "Varia Suit",
        bg: "ff7e00",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "flameShotA",
        sprite: "fire",
        name: "Fire Beam",
        bg: "ff4a4a",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "highJump",
        sprite: "high",
        name: "Hi-Jump Boots",
        bg: "c0a8d8",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "chargeBeamA",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        sprite: "charge",
        name: "Charge Beam",
        bg: "808000",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "springBall",
        sprite: "spring",
        name: "Jump Ball",
        bg: "886848",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "speedBooster",
        sprite: "speed",
        name: "Speed Booster",
        bg: "ff0094",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "superMissileTank",
        sprite: "supers",
        name: "Super Missile Tanks",
        singleItemName: "Super Missile Tank",
        bg: "007f0e",
        itemId: 16,
        nodeType: "expansion",
      },{
        id: "waveBeamD",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        sprite: "wave",
        name: "Wave Beam",
        bg: "92278f",
        itemId: 17,
        nodeType: "upgrade",
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamC"
          }
        },
        sprite: "wide",
        name: "Spazer Beam",
        bg: "ffff80",
        itemId: 18,
        nodeType: "upgrade",
      },{
        id: "magneticShieldTank",
        sprite: "shields",
        name: "Magnetic Shield Tanks",
        singleItemName: "Magnetic Shield Tank",
        bg: "007098",
        itemId: 19,
        nodeType: "expansion",
      },{
        id: "gravitySuitD",
        sprite: "gravity",
        name: "Gravity Suit",
        bg: "602880",
        itemId: 20,
        nodeType: "upgrade",
      },{
        id: "seekerLauncher",
        sprite: "seeker",
        name: "Seeker Missiles",
        bg: "644080",
        itemId: 21,
        nodeType: "upgrade",
      },{
        id: "spiderBall",
        sprite: "spider",
        name: "Spider Ball",
        bg: "bca470",
        itemId: 22,
        nodeType: "upgrade",
      },{
        id: "iceBeamE",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        sprite: "ice",
        name: "Ice Beam",
        bg: "2038ec",
        itemId: 23,
        nodeType: "upgrade",
      },{
        id: "powerBombTank",
        sprite: "pbombs",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        bg: "98b830",
        itemId: 24,
        nodeType: "expansion",
      },{
        id: "phazonSuit",
        sprite: "phazon",
        name: "Phazon Suit",
        bg: "282018",
        itemId: 25,
        nodeType: "upgrade",
      },{
        id: "plasmaBeamE",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        sprite: "plasma",
        name: "Plasma Beam",
        bg: "00ff08",
        itemId: 26,
        nodeType: "upgrade",
      },{
        id: "screwAttack",
        sprite: "screw",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 27,
        nodeType: "upgrade",
      },{
        id: "adapter",
        sprite: "adapter",
        name: "Bomb-Beam Adapter",
        bg: "98b830",
        itemId: 28,
        nodeType: "upgrade",
      },{
        id: "spaceJump",
        sprite: "space",
        name: "Space Jump",
        bg: "00a0e0",
        itemId: 29,
        nodeType: "upgrade",
      },{
        id: "fullPowerSuit",
        sprite: "chozo",
        name: "Chozo Charm",
        bg: "80d0ff",
        itemId: 30,
        nodeType: "upgrade",
      },{
        id: "shieldGenerator",
        sprite: "hyper",
        name: "Hyper Shield",
        bg: "007098",
        itemId: 31,
        nodeType: "upgrade",
      },{
        id: "superMissileB",
        sprite: "mega",
        name: "Super Blast",
        bg: "007f0e",
        itemId: 32,
        nodeType: "upgrade",
      },
    ],
    bosses: [
      {
        id: "alpha",
        name: "Alpha X-Metroid",
        bossId: 111,
      },{
        id: "gamma",
        name: "Gamma X-Metroid",
        bossId: 112,
      },{
        id: "delta",
        name: "Grabber Gamma X-Metroid",
        bossId: 113,
      },{
        id: "zeta",
        name: "Zeta X-Metroid",
        bossId: 114,
      },{
        id: "omega",
        name: "Omega X-Metroid",
        bossId: 115,
      },
    ],
    areas: [
    ],
    extras: [
      {
        id: "saveRoom",
        name: "Save Station",
        extraId: 1001,
        nodeType: "save",
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "mph_grid.png",
  },
  "mf": {
    checklistWidth: 7,
    checklistLayout: [
      //{ name: "", value: 0, start: 0, max: 4, segments: [
        { lookupId: 2, value: 0, start: 0, max: 1, over: "F_Data", overText: "Operations Deck - Data Room", },
        { lookupId: 12, value: 0, start: 0, max: 1, over: "F_Data", overText: "Sector 3 PYR - Data Room", },
        { lookupId: 15, value: 0, start: 0, max: 1, over: "F_Data", overText: "Sector 5 ARC - Data Room", },
        { lookupId: 23, value: 0, start: 0, max: 1, over: "F_Data", overText: "Sector 4 AQA - Data Room", },
      //]},
      { lookupId: 5, value: 0, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Arachnus Defeated", },
      { lookupId: 8, value: 0, start: 0, max: 1, segments: [], over: "F_Data", overText: "Sector 2 TRO - Data Room", },
      { lookupId: 17, value: 0, start: 0, max: 1, segments: [], over: "F_Data", overText: "Sector 5 ARC - Data Room", },
      //{ name: "", value: 0, start: 0, max: 5, segments: [
        { lookupId: 6, value: 0, start: 0, max: 1, over: "F_Boss", overText: "Elephant Bird Defeated", },
        { lookupId: 16, value: 0, start: 0, max: 1, over: "F_Boss", overText: "Wide Laser Core-X Defeated", },
        { lookupId: 20, value: 0, start: 0, max: 1, over: "F_Boss", overText: "Nettori Defeated", },
        { lookupId: 24, value: 0, start: 0, max: 1, over: "F_Boss", overText: "SR-BOX 2 Defeated", },
        { lookupId: 27, value: 0, start: 0, max: 1, },
      //]},
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 9, value: 0, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Zazabi Defeated", },
      { lookupId: 10, value: 0, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Serris Defeated", },
      { lookupId: 19, value: 0, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Yakuza Defeated", },
      { lookupId: 25, value: 0, start: 0, max: 1, segments: [], over: "F_Boss", overText: "Neo-Ridley-X Defeated", },
      //{ name: "", value: 0, start: 0, max: 2, segments: [
        { lookupId: 13, value: 0, start: 0, max: 1, over: "F_Boss", overText: "Barrier Core-X Defeated", },
        { lookupId: 21, value: 0, start: 0, max: 1, over: "F_Boss", overText: "Nightmare Defeated", },
        { lookupId: 26, value: 0, start: 0, max: 1, displayIfScramble: true, },
      //]},
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], clearIfScramble: true, },
      { lookupId: 4, value: 1, start: 0, max: 20, segments: [], },
      { lookupId: 3, value: 1, start: 0, max: 48, segments: [], },
      { lookupId: 18, value: 1, start: 0, max: 32, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      //{ id: "pumpControlUnit", name: "Sector 4 - Water level lowered.", value: 0, start: 0, max: 1, segments: [], },
      //{ id: "mainBoiler", name: "Sector 3 - Cooling unit operational.", value: 0, start: 0, max: 1, segments: [], },
      //{ id: "etedach", name: "Main Deck - Lock disengaged. Gate opening.", sprite: "animals", value: 0, start: 0, max: 1, segments: [], },
      //{ id: "reactorCore", name: "Main Deck - Auxiliary power engaged.", value: 0, start: 0, max: 1, segments: [], },
      //{ name: "Main Deck", value: 0, start: 0, max: 1, segments: [
      //  { id: "mainDeck",  name: "Sector Clear", value: 0, start: 0, max: 1, },
      //]},
      //{ name: "Sector 1 SRX", value: 0, start: 0, max: 1, segments: [
      //  { id: "sector1SRX",  name: "Sector Clear", value: 0, start: 0, max: 1, },
      //]},
      //{ name: "Sector 2 TRO", value: 0, start: 0, max: 1, segments: [
      //  { id: "sector2TRO",  name: "Sector Clear", value: 0, start: 0, max: 1, },
      //]},
      //{ name: "Sector 3 PYR", value: 0, start: 0, max: 1, segments: [
      //  { id: "sector3PYR",  name: "Sector Clear", value: 0, start: 0, max: 1, },
      //]},
      //{ name: "Sector 4 AQA", value: 0, start: 0, max: 1, segments: [
      //  { id: "sector4AQA",  name: "Sector Clear", value: 0, start: 0, max: 1, },
      //]},
      //{ name: "Sector 5 ARC", value: 0, start: 0, max: 1, segments: [
      //  { id: "sector5ARC",  name: "Sector Clear", value: 0, start: 0, max: 1, },
      //]},
      //{ name: "Sector 6 NOC", value: 0, start: 0, max: 1, segments: [
      //  { id: "sector6NOC",  name: "Sector Clear", value: 0, start: 0, max: 1, },
      //]},
      { lookupId: 1, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 7, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 14, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 22, value: 0, start: 0, max: 1, segments: [], },
    ],
    items: [
      {
        id: "securityL0",
        sprite: "securityL0",
        name: "Security Level 0",
        bg: "c8d8d8",
        itemId: 1,
        nodeType: "upgrade",
      },{
        id: "missileA",
        name: "Missiles",
        sprite: "missileData",
        bg: "d82800",
        itemId: 2,
        nodeType: "upgrade",
      },{
        id: "missileTank",
        sprite: "missile",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        alreadyHasMainItem: true,
        bg: "d82800",
        itemId: 3,
        nodeType: "expansion",
      },{
        id: "energyTank",
        sprite: "energy",
        name: "Energy Tanks",
        singleItemName: "Energy Tank",
        bg: "78a4bc",
        itemId: 4,
        nodeType: "expansion",
      },{
        id: "morphBall",
        name: "Morph Ball",
        sprite: "morph",
        bg: "d8a480",
        itemId: 5,
        nodeType: "upgrade",
      },{
        id: "chargeBeamC",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        sprite: "chargeBeam",
        bg: "808000",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "securityL1",
        sprite: "securityL1",
        name: "Security Level 1",
        bg: "28d8f8",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "bomb",
        name: "Bombs",
        sprite: "bombData",
        bg: "3800a8",
        itemId: 8,
        nodeType: "upgrade",
      },{
        id: "highJump",
        name: "Hi-Jump and Jumpball",
        sprite: "high",
        bg: "c0a8d8",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "speedBooster",
        name: "Speed Booster",
        sprite: "speed",
        bg: "ff0094",
        itemId: 10,
        nodeType: "upgrade",
      },{
        id: "securityL2",
        sprite: "securityL2",
        name: "Security Level 2",
        bg: "90f890",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "missile",
        name: "Super Missiles",
        sprite: "superMissile",
        bg: "007f0e",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "barrierC",
        name: "Varia Suit",
        sprite: "barrier",
        bg: "c8f048",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "securityL3",
        sprite: "securityL3",
        name: "Security Level 3",
        bg: "f8f838",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "iceMissile",
        name: "Ice Missiles",
        sprite: "iceMissile",
        bg: "2038ec",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "wideBeamB",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        name: "Wide Beam",
        sprite: "wideBeam",
        bg: "ffff80",
        itemId: 16,
        nodeType: "upgrade",
      },{
        id: "powerBomb",
        name: "Power Bombs",
        sprite: "pbombData",
        bg: "98b830",
        itemId: 17,
        nodeType: "upgrade",
      },{
        id: "powerBombTank",
        sprite: "pbomb",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        alreadyHasMainItem: true,
        bg: "98b830",
        itemId: 18,
        nodeType: "expansion",
      },{
        id: "spaceJump",
        name: "Space Jump",
        sprite: "space",
        bg: "00a0e0",
        itemId: 19,
        nodeType: "upgrade",
      },{
        id: "plasmaBeamA",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        name: "Plasma Beam",
        sprite: "plasmaBeam",
        bg: "00ff08",
        itemId: 20,
        nodeType: "upgrade",
      },{
        id: "gravitySuit",
        name: "Gravity Suit",
        sprite: "gravity",
        bg: "602880",
        itemId: 21,
        nodeType: "upgrade",
      },{
        id: "securityL4",
        sprite: "securityL4",
        name: "Security Level 4",
        bg: "f82828",
        itemId: 22,
        nodeType: "upgrade",
      },{
        id: "superMissile",
        name: "Diffusion Effect",
        sprite: "diffusion",
        bg: "644080",
        itemId: 23,
        nodeType: "upgrade",
      },{
        id: "waveBeamB",
        locale: {
          'enUS': {
            id: "waveBeam"
          }
        },
        name: "Wave Beam",
        sprite: "waveBeam",
        bg: "92278f",
        itemId: 24,
        nodeType: "upgrade",
      },{
        id: "screwAttack",
        name: "Screw Attack",
        sprite: "screw",
        bg: "69cd69",
        itemId: 25,
        nodeType: "upgrade",
      },{
        id: "fullPowerSuit",
        name: "Final Suit",
        sprite: "final",
        bg: "ff7e00",
        itemId: 26,
        nodeType: "upgrade",
      },{
        id: "iceBeamC",
        locale: {
          'enUS': {
            id: "iceBeamD"
          }
        },
        name: "Ice Beam",
        sprite: "iceBeam",
        bg: "2038ec",
        itemId: 27,
        nodeType: "upgrade",
      },
    ],
    bosses: [
      {
        id: "arachnus",
        name: "Arachnus",
        bossId: 101,
      },{
        id: "elephantbird",
        name: "Core-X",
        bossId: 102,
      },{
        id: "zazabi",
        name: "Zazabi",
        bossId: 103,
      },{
        id: "serris",
        name: "Serris",
        bossId: 104,
      },{
        id: "srboxa",
        name: "Security Robot B.O.X.",
        bossId: 105,
      },{
        id: "variacorex",
        name: "Mega Core-X",
        bossId: 106,
      },{
        id: "boilersci",
        name: "Core-X",
        bossId: 107,
      },{
        id: "nightmare",
        name: "Nightmare",
        bossId: 108,
      },{
        id: "yakuza",
        name: "Yakuza",
        bossId: 109,
      },{
        id: "nettori",
        name: "Nettori",
        bossId: 110,
      },{
        id: "srboxb",
        name: "Security Robot B.O.X.", // reprise
        bossId: 111,
      },{
        id: "ridley",
        name: "Ridley-X",
        bossId: 112,
      },{
        id: "saxfinal",
        name: "SA-X",
        bossId: 113,
      },{
        id: "omega",
        name: "Omega Metroid",
        bossId: 114,
      }
    ],
    areas: [
      {
        id: 1,
        name: "Main Deck",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "Sector 1 - SRX",
        color: "db2b00",
      },{
        id: 3,
        name: "Sector 2 - TRO",
        color: "db2b00",
      },{
        id: 4,
        name: "Sector 3 - PYR",
        color: "db2b00",
      },{
        id: 5,
        name: "Sector 4 - AQA",
        color: "009700",
      },{
        id: 6,
        name: "Sector 5 - ARC",
        color: "bf00bf",
      },{
        id: 7,
        name: "Sector 6 - NOC",
        color: "bcbcbc",
      },{
        id: 8,
        name: "Restricted Lab",
        color: "bcbcbc",
      }
    ],
    extras: [
      {
        id: "mainDeck",
        name: "First Mission", // Main Deck, Docking Bays -> Quarantine Bay
        extraId: 1005,
        nodeType: "event",
      },{
        id: "quarantineBay",
        name: "Quarantine Bay", // Main Deck, Quarantine Bay
        extraId: 1006,
        nodeType: "event",
      },{
        id: "sector1SRX",
        name: "First Mission in Sector 1", // Sector 1 SRX -> Clear all 5 atmospheric stabilizers
        extraId: 1011,
        nodeType: "event",
      },{
        id: "sector2TRO",
        name: "First Mission to Sector 2", // Sector 1 SRX mission 1 complete -> Sector 2 TRO visit 1
        extraId: 1012,
        nodeType: "event",
      },{
        id: "sector2TRO",
        name: "First Mission in Sector 2", // Sector 2 TRO -> open L.1 doors, get Bomb Data
        extraId: 1021,
        nodeType: "event",
      },{
        id: "sector4AQA",
        name: "First Mission to Sector 4", // Sector 2 TRO mission 1 complete -> Sector 4 AQA visit 1
        extraId: 1021,
        nodeType: "event",
      },{
        id: "sector4AQA",
        name: "First Mission in Sector 4", // Sector 4 AQA -> defeat Serris
        extraId: 1041,
        nodeType: "event",
      },{
        id: "pumpControlUnit",
        name: "Water Pump Control", // Sector 4 AQA
        message: "Water level lowered.",
        extraId: 1042,
        nodeType: "trigger",
      },{
        id: "sector3PYR",
        name: "First Mission to Sector 3", // Sector 4 AQA mission 1 complete -> Sector 3 PYR visit 1
        extraId: 1043,
        nodeType: "event",
      },{
        id: "sector3PYR",
        name: "First Mission in Sector 3", // Sector 3 PYR -> open L.2 doors, get Super Missile Data
        extraId: 1031,
        nodeType: "event",
      },{
        id: "sector6NOC",
        name: "First Mission to Sector 6", // Sector 3 PYR mission 1 complete -> Sector 6 NOC visit 1
        extraId: 1032,
        nodeType: "event",
      },{
        id: "sector6NOC",
        name: "First Mission in Sector 6", // Sector 6 NOC mission 1 -> get Varia Suit Data, avoid the Icy X
        extraId: 1061,
        nodeType: "event",
      },{
        id: "sector5ARC",
        name: "First Mission to Sector 5", // Sector 6 NOC mission 1 complete -> Sector 5 ARC visit 1
        extraId: 1062,
        nodeType: "event",
      },{
        id: "sector5ARC",
        name: "First Mission in Sector 5", // Sector 5 ARC mission 1 -> open L.3 doors, get Ice Missile Data
        extraId: 1051,
        nodeType: "event",
      },{
        id: "sector3PYR",
        name: "Emergency in Sector 3", // Sector 5 ARC mission 1 complete -> RUSH TO SECTOR 3 PYR
        extraId: 1052,
        nodeType: "event",
      },{
        id: "mainBoiler",
        name: "Boiler Room", // Sector 3 PYR depths, ends emergency sequence
        message: "Cooling unit operational.",
        extraId: 1033,
        nodeType: "trigger",
      },{
        id: "mainDeck",
        name: "Main Elevator Power Restored", // Sector 3 PYR depths complete
        extraId: 1034,
        nodeType: "trigger",
      },{
        id: "mainDeck", // might need a new one for this sub-sector?
        name: "To the Habitation Deck", // Sector 3 PYR depths complete -> Main Deck, Habitation Deck
        extraId: 1035,
        nodeType: "event",
      },{
        id: "etedach",
        name: "Habitation Deck Shutters", // Main Deck, Habitation Deck ||||| SAVE THE ANIMALS!
        sprite: "animals",
        message: "Lock disengaged. Gate opening.",
        extraId: 1007,
        nodeType: "trigger",
      },{
        id: "sector5ARC",
        name: "Return to Sector 5", // Main Deck, Habitation Deck -> Sector 5 ARC visit 2
        extraId: 1008,
        nodeType: "event",
      },{
        id: "sector5ARC",
        name: "Power Bomb Retrieval", // Sector 5 ARC mission 2 -> get Power Bomb Data
        extraId: 1053,
        nodeType: "event",
      },{
        id: "mainDeck",
        name: "Nettori Power Down", // Sector 5 ARC mission 2 complete -> AI CO calls you back to the ship
        extraId: 1054,
        nodeType: "event",
      },{
        id: "mainDeck",
        name: "Reactor Core Access", // Main Deck, Docking Bays -> Reactor Core, awakens Ki Hunters everywhere
        extraId: 1009,
        nodeType: "event",
      },{
        id: "reactorCore",
        name: "Auxiliary Power Station", // Main Deck, Reactor Core -> Restores partial power
        message: "Auxiliary power engaged.",
        extraId: 1071,
        nodeType: "trigger",
      },{
        id: "sector5ARC",
        name: "To Sector 5 Nightmare", // Sector 2 TRO depths complete -> Sector 5 ARC visit 3
        extraId: 1022,
        nodeType: "event",
      },{
        id: "sector5ARC",
        name: "Nightmare Hunting", // Sector 5 ARC mission 3 -> find and destroy the Nightmare, water from Sector 4 AQA has spilled into this sector
        extraId: 1055,
        nodeType: "event",
      },{
        id: "sector6NOC",
        name: "To Sector 6 SR-BOX", // Sector 4 AQA depths complete -> Sector 6 NOC visit 2
        extraId: 1044,
        nodeType: "event",
      },{
        id: "sector6NOC",
        name: "Track the SR-BOX", // Sector 6 NOC mission 2 -> find the Security Robot, escape before the SA-X finds you
        extraId: 1063,
        nodeType: "event",
      },{
        id: "restrictedLab",
        name: "Metroid Habitat", // Restricted Lab
        extraId: 1072,
        nodeType: "event",
      },{
        id: "sector1SRX",
        name: "Through Sector 1 Depths", // Restricted Lab -> Sector 1 SRX depths
        extraId: 1073,
        nodeType: "event",
      },{
        id: "unused",
        name: "Final Mission", // Sector 1 SRX depths complete -> back to a Navigation Room -> Final Mission Resolve and cleanup rounds
        extraId: 1013,
        nodeType: "event",
      },{
        id: "unused",
        name: "Beaten the Game Once", // some shutters are locked on a first-time game during Final Mission, until the game has Cleared status
        extraId: 1074,
        nodeType: "trigger",
      },{
        id: "mainDeck", // might need a new one for this sub-sector?
        name: "Operations Room", // Main Deck, Operations Deck -> triggers Escape Sequence
        extraId: 1075,
        nodeType: "trigger",
      },{
        id: "saveRoom",
        name: "Save Room",
        extraId: 1002,
        nodeType: "save",
      },{
        id: "rechargeRoom",
        name: "Recharge Room",
        extraId: 1001,
        nodeType: "recharge",
      },{
        id: "dataRoom",
        name: "Data Room",
        extraId: 1004,
        nodeType: "event",
      },{
        id: "navigationRoom",
        name: "Navigation Room",
        extraId: 1003,
        nodeType: "lore",
      },{
        id: "energyRefill",
        name: "Energy Refill Station",
        extraId: 1081,
        nodeType: "recharge",
      },{
        id: "missileRefill",
        name: "Missile Restock Station",
        extraId: 1082,
        nodeType: "recharge",
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "mf_grid.png",
  },
  "md": {
    checklistWidth: 6,
    checklistLayout: [
      { name: "", value: 1, start: 0, max: 3, segments: [
        { lookupId: 8, value: 1, start: 0, max: 1, },
        { lookupId: 17, value: 1, start: 0, max: 1, },
        { lookupId: 26, value: 1, start: 0, max: 1, over: "Z_Orb", overText: "E.M.M.I.-06WB Defeated", },
      ]},
      { name: "", value: 1, start: 0, max: 2, segments: [
        { lookupId: 3, value: 1, start: 0, max: 1, },
        { lookupId: 11, value: 1, start: 0, max: 1, over: "F_Boss_Ex", overText: "Kraid Defeated", },
      ]},
      { lookupId: 15, value: 1, start: 0, max: 1, segments: [], },
      { name: "", value: 1, start: 0, max: 2, segments: [
        { lookupId: 16, value: 1, start: 0, max: 1, },
        { lookupId: 19, value: 1, start: 0, max: 1, over: "Z_Orb", overText: "E.M.M.I.-05IM Defeated", },
      ]},
      { lookupId: 21, value: 1, start: 0, max: 1, over: "F_Boss", overText: "Escue Defeated", segments: [], },
      { name: "", value: 1, start: 0, max: 2, segments: [
        { lookupId: 10, value: 1, start: 0, max: 1, },
        { lookupId: 23, value: 1, start: 0, max: 1, },
      ]},
      { lookupId: 7, value: 1, start: 0, max: 1, over: "F_Boss_Ex", overText: "Corpius Defeated", segments: [], },
      { lookupId: 13, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 20, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 1, start: 0, max: 1, over: "Z_Orb", overText: "E.M.M.I.-03MB Defeated", segments: [], },
      { lookupId: 12, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: 25, value: 1, start: 0, max: 1, over: "F_Boss", overText: "Golzuna Defeated", segments: [], },
      { lookupId: 27, value: 1, start: 0, max: 1, over: "Z_Orb", overText: "E.M.M.I.-07PB Defeated", segments: [], },
      { lookupId: 6, value: 1, start: 0, max: 1, over: "Z_Orb", overText: "E.M.M.I.-02SM Defeated", segments: [], },
      { lookupId: 14, value: 1, start: 0, max: 1, over: "Z_Orb", overText: "E.M.M.I.-04SB Defeated", segments: [], },
      { name: "", value: 1, start: 0, max: 2, segments: [
        { lookupId: 18, value: 1, start: 0, max: 1, },
        { lookupId: 22, value: 1, start: 0, max: 1, },
      ]},
      { lookupId: 24, value: 1, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      { lookupId: 5, value: 1, start: 0, max: 8, segments: [], },
      { lookupId: 4, value: 1, start: 0, max: 16, segments: [], },
      { lookupId: 1, value: 1, start: 0, max: 75, segments: [], },
      { lookupId: 2, value: 1, start: 0, max: 11, segments: [], },
      { lookupId: 28, value: 1, start: 0, max: 13, segments: [], },
      { lookupId: 29, value: 1, start: 9, max: 12, segments: [], displayIfScramble: true, },
    ],
    items: [
      {
        id: "missileTank",
        name: "Missile Tanks",
        singleItemName: "Missile Tank",
        sprite: "missile",
        alreadyHasMainItem: true,
        bg: "d82800",
        itemId: 1,
        nodeType: "expansion",
      },{
        id: "doubleMissileTank",
        name: "Missile+ Tanks",
        singleItemName: "Missile+ Tank",
        sprite: "missilePlus",
        alreadyHasMainItem: true,
        bg: "007098",
        itemId: 2,
        nodeType: "expansion",
      },{
        id: "chargeBeam",
        locale: {
          'enUS': {
            id: "chargeBeamE"
          }
        },
        name: "Charge Beam",
        bg: "808000",
        itemId: 3,
        progressionToItemId: 11,
        nodeType: "upgrade",
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
        bg: "fcc4d8",
        itemId: 4,
        nodeType: "expansion",
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
        bg: "78a4bc",
        itemId: 5,
        nodeType: "expansion",
      },{
        id: "spiderMagnet",
        name: "Spider Magnet",
        bg: "ff7b7b",
        itemId: 6,
        nodeType: "upgrade",
      },{
        id: "invisibility",
        name: "Phantom Cloak",
        sprite: "phantom",
        bg: "00ff08",
        itemId: 7,
        nodeType: "upgrade",
      },{
        id: "wideBeam",
        locale: {
          'enUS': {
            id: "wideBeamA"
          }
        },
        name: "Wide Beam",
        bg: "ffff80",
        itemId: 8,
        progressionToItemId: 17,
        nodeType: "upgrade",
      },{
        id: "morphBall",
        name: "Morph Ball",
        bg: "d8a480",
        itemId: 9,
        nodeType: "upgrade",
      },{
        id: "barrier",
        name: "Varia Suit",
        bg: "ff7e00",
        itemId: 10,
        progressionToItemId: 23,
        nodeType: "upgrade",
      },{
        id: "diffusionBeamB",
        locale: {
          'enUS': {
            id: "diffusionBeamA"
          }
        },
        name: "Diffusion Beam",
        bg: "9b9b9b",
        itemId: 11,
        nodeType: "upgrade",
      },{
        id: "bombD",
        name: "Bombs",
        //sprite: "bombs",
        bg: "3800a8",
        itemId: 12,
        nodeType: "upgrade",
      },{
        id: "flashShift",
        name: "Flash Shift",
        sprite: "flash",
        bg: "e900ff",
        itemId: 13,
        nodeType: "upgrade",
      },{
        id: "speedBooster",
        name: "Speed Booster",
        bg: "ff0094",
        itemId: 14,
        nodeType: "upgrade",
      },{
        id: "grappleBeam",
        name: "Grapple Beam",
        //sprite: "grapple",
        bg: "00e8d8",
        itemId: 15,
        nodeType: "upgrade",
      },{
        id: "superMissile",
        name: "Super Missiles",
        bg: "007f0e",
        itemId: 16,
        progressionToItemId: 19,
        nodeType: "upgrade",
      },{
        id: "plasmaBeamA",
        locale: {
          'enUS': {
            id: "plasmaBeamD"
          }
        },
        name: "Plasma Beam",
        bg: "00ff08",
        itemId: 17,
        progressionToItemId: 26,
        nodeType: "upgrade",
      },{
        id: "spinBoostA",
        name: "Spin Boost",
        bg: "c0a8d8",
        itemId: 18,
        progressionToItemId: 22,
        nodeType: "upgrade",
      },{
        id: "iceMissileB",
        name: "Ice Missiles",
        bg: "2038ec",
        itemId: 19,
        nodeType: "upgrade",
      },{
        id: "scanPulse",
        name: "Pulse Radar",
        sprite: "radar",
        bg: "00c7ff",
        itemId: 20,
        nodeType: "upgrade",
      },{
        id: "seekerLauncherB", // "combatVisor",
        name: "Storm Missile",
        bg: "644080",
        itemId: 21,
        nodeType: "upgrade",
      },{
        id: "spaceJump",
        name: "Space Jump",
        bg: "00a0e0",
        itemId: 22,
        nodeType: "upgrade",
      },{
        id: "gravitySuitA",
        name: "Gravity Suit",
        bg: "602880",
        itemId: 23,
        nodeType: "upgrade",
      },{
        id: "screwAttack",
        name: "Screw Attack",
        bg: "69cd69",
        itemId: 24,
        nodeType: "upgrade",
      },{
        id: "crossBombs",
        name: "Cross Bomb",
        bg: "886848",
        itemId: 25,
        nodeType: "upgrade",
      },{
        id: "waveBeamE",
        locale: {
          'enUS': {
            id: "waveBeam"
          }
        },
        name: "Wave Beam",
        bg: "92278f",
        itemId: 26,
        nodeType: "upgrade",
      },{
        id: "powerBomb",
        name: "Power Bombs",
        bg: "98b830",
        itemId: 27,
        nodeType: "upgrade",
      },{
        id: "powerBombTank",
        name: "Power Bomb Tanks",
        singleItemName: "Power Bomb Tank",
        sprite: "pbombs",
        alreadyHasMainItem: true,
        bg: "98b830",
        itemId: 28,
        nodeType: "expansion",
      },{
        id: "monsterDna",
        name: "Metroid DNA",
        bg: "ffffff",
        itemId: 29,
        nodeType: "artifact",
      },
    ],
    bosses: [
      {
        id: "emmi01p",
        name: "E.M.M.I.-01P", // proto-emmi, Artaria
        bossId: 101,
      },{
        id: "emmi01p",
        name: "E.M.M.I.-02SM", // white emmi, Artaria, Spider Magnet
        bossId: 103,
      },{
        id: "emmi01p",
        name: "E.M.M.I.-03MB", // green emmi, Cataris, Morph Ball
        bossId: 105,
      },{
        id: "emmi01p",
        name: "E.M.M.I.-04SB", // yellow emmi, Dairon, Speed Booster
        bossId: 107,
      },{
        id: "emmi01p",
        name: "E.M.M.I.-05IM", // blue emmi, Ghavoran, Ice Missile
        bossId: 109,
      },{
        id: "emmi01p",
        name: "E.M.M.I.-06WB", // purple emmi, Ferenia, Wave Beam
        bossId: 111,
      },{
        id: "emmi01p",
        name: "E.M.M.I.-07PB", // red emmi, Hanubia, Power Bombs
        bossId: 113,
      },{
        id: "cualta",
        name: "Central Unit 01", // proto-emmi, Artaria, non-combat
        bossId: 102,
      },{
        id: "cualtb",
        name: "Central Unit 02", // white emmi, Artaria
        bossId: 104,
      },{
        id: "cucat",
        name: "Central Unit 03", // green emmi, Cataris
        bossId: 106,
      },{
        id: "cudai",
        name: "Central Unit 04", // yellow emmi, Dairon
        bossId: 108,
      },{
        id: "cugha",
        name: "Central Unit 05", // blue emmi, Ghavoran
        bossId: 110,
      },{
        id: "cufer",
        name: "Central Unit 06", // purple emmi, Ferenia
        bossId: 112,
      },{
        id: "cuhan",
        name: "Central Unit 07", // red emmi, Hanubia, non-combat
        bossId: 114,
      },{
        id: "chozosoldiera",
        name: "Chozo Soldier", // silver, Elun
        bossId: 126,
      },{
        id: "chozosoldierb",
        name: "Chozo Soldier", // silver, Ghavoran
        bossId: 131,
      },{
        id: "redchozoa",
        name: "Chozo Soldier", // red (with shield), Artaria, during frozen sequence
        bossId: 134,
      },{
        id: "redchozob",
        name: "Chozo Soldier", // red (with shield), Hanubia, right upon defeating E.M.M.I.-07PB
        bossId: 137,
      },{
        id: "elitechozo",
        name: "Elite Chozo Soldier", // golden (with Grapple Shield), Hanubia
        bossId: 139,
      },{
        id: "robotchozoa",
        name: "Robot Chozo Soldier", // silver, Ferenia, the one who killed Quiet Robe
        bossId: 123,
      },{
        id: "robotchozob",
        name: "Robot Chozo Soldier", // gold, Ghavoran
        bossId: 125,
      },{
        id: "twinrobotsa",
        name: "Twin Robot Chozo Soldiers", // silver and gold, Ferenia
        bossId: 133,
      },{
        id: "twinrobotsb",
        name: "Twin Robot Chozo Soldiers", // gold and gold, Burenia
      },{
        id: "corpius",
        name: "Corpius", // Phantom Cloak
        bossId: 121,
      },{
        id: "kraid",
        name: "Kraid", // no item, but leads to Diffusion Beam nearby, slotted for Metroid DNA in Dread Rando
        bossId: 122,
      },{
        id: "drogyga",
        name: "Drogyga", // no item, slotted for Metroid DNA in Dread Rando
        bossId: 124,
      },{
        id: "escue",
        name: "Escue-X", // Core-X, Storm Missile
        bossId: 132,
      },{
        id: "z57",
        name: "Experiment No. Z-57", // no item, slotted for Metroid DNA in Dread Rando
        bossId: 135,
      },{
        id: "golzuna",
        name: "Golzuna-X", // Core-X, Cross Bombs
        bossId: 106,
      },{
        id: "ravenbeak",
        name: "Raven Beak", // final boss
        bossId: 151,
      },{
        id: "ravenbeakx",
        name: "Raven Beak-X", // final boss part 2
        bossId: 152,
      },
    ],
    areas: [
      {
        id: 1,
        name: "Artaria",
        hasGameStart: true,
        color: "2038ec",
      },{
        id: 2,
        name: "Cataris",
        color: "db2b00",
      },{
        id: 3,
        name: "Dairon",
        color: "db2b00",
      },{
        id: 4,
        name: "Burenia",
        color: "db2b00",
      },{
        id: 5,
        name: "Ferenia",
        color: "009700",
      },{
        id: 6,
        name: "Ghavoran",
        color: "bf00bf",
      },{
        id: 7,
        name: "Elun",
        color: "bf00bf",
      },{
        id: 8,
        name: "Hanubia",
        color: "bcbcbc",
      },{
        id: 9,
        name: "Itorash",
        color: "bcbcbc",
      },{
        id: 10,
        name: "Escape Sequence",
        color: "bcbcbc",
      }
    ],
    extras: [
      {
        id: "teleportalA",
        name: "Red Teleportal", // Artaria-Cataris
        nodeType: "teleport",
      },{
        id: "teleportalY",
        name: "Orange Teleportal", // Cataris-Ghavoran
        nodeType: "teleport",
      },{
        id: "teleportalI",
        name: "Yellow Teleportal", // Artaria-Dairon
        nodeType: "teleport",
      },{
        id: "teleportalO",
        name: "Green Teleportal", // Burenia-Ghavoran
        nodeType: "teleport",
      },{
        id: "teleportalX",
        name: "Cyan Teleportal", // Burenia-Ferenia
        nodeType: "teleport",
      },{
        id: "teleportalU",
        name: "Blue Teleportal", // Artaria-Cataris
        nodeType: "teleport",
      },{
        id: "teleportalE",
        name: "Purple Teleportal", // Cataris-Dairon
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
        id: "chargeBeam",
        name: "Charge Beam Generator", // Cataris 1
        nodeType: "trigger",
      },{
        id: "chargeBeam",
        name: "Charge Beam Generator", // Cataris 2
        nodeType: "trigger",
      },{
        id: "chargeBeam",
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
        id: "chozoStatue",
        name: "Burenia Hatch", // Burenia, opened by Quiet Robe cutscene
        nodeType: "trigger",
      },{
        id: "powerBomb",
        name: "Broken Glass Tube", // Hanubia
        nodeType: "trigger",
      },{
        id: "powerBomb",
        name: "Hanubia EMMI Zone", // Hanubia
        nodeType: "trigger",
      },{
        id: "powerBomb",
        name: "Itorash Generator", // Itorash
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
        id: "spiderMagnet",
        name: "Magnet Door Lowered", // Artaria, in EMMI Zone, near Missile Tank, allows passage onwards to Corpius
        nodeType: "trigger",
      },{
        id: "spiderMagnet",
        name: "Magnet Platform Lowered", // Artaria, in EMMI Zone, allows escape from CU and EMMI Battle area
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Spinner Rotated", // Artaria, in EMMI Zone
        nodeType: "trigger",
      },{
        id: "wideBeam",
        name: "Wide Beam Block Moved", // Artaria, in EMMI Zone, only for convenient shortcut?
        nodeType: "trigger",
      },{
        id: "slide",
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
        id: "spiderMagnet",
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
        id: "wideBeam",
        name: "Wide Beam Block Moved", // Cataris, on path leading towards Dairon tram
        nodeType: "trigger",
      },{
        id: "wideBeam",
        name: "Wide Beam Block Moved", // Cataris, in hot zone
        nodeType: "trigger",
      },{
        id: "spiderMagnet",
        name: "Magnet Platform Lowered", // Cataris, for Power Bomb Tank
        nodeType: "trigger",
      },{
        id: "seekerLauncherB",
        name: "Storm Gate Destroyed", // Ferenia, first one escaping Escue arena
        nodeType: "trigger",
      },{
        id: "seekerLauncherB",
        name: "Storm Gate Destroyed", // Ferenia, leading to Twin Robot arena
        nodeType: "trigger",
      },{
        id: "seekerLauncherB",
        name: "Storm Gate Destroyed", // Ferenia, leading to Space Jump
        nodeType: "trigger",
      },{
        id: "seekerLauncherB",
        name: "Storm Gate Destroyed", // Ferenia, in cold zone, on the way to EMMI-06WB and CU showdown
        nodeType: "trigger",
      },{
        id: "seekerLauncherB",
        name: "Storm Gate Destroyed", // Ghavoran, blocking Green teleportal
        nodeType: "trigger",
      },{
        id: "unused",
        name: "Bridge Rotated", // Ghavoran, allowing access to Super Missiles
        nodeType: "trigger",
      },{
        id: "spiderMagnet",
        name: "Magnet Platform Lowered", // Ghavoran, allowing access to Super Missiles
        nodeType: "trigger",
      },{
        id: "grappleBeam",
        name: "Big Grapple Box Pulled and in Place", // Ghavoran, near elevator to Burenia
        nodeType: "trigger",
      },{
        id: "grappleBeam",
        name: "Big Grapple Box Pulled and in Place", // Ghavoran, near tram to Ferenia
        nodeType: "trigger",
      },{
        id: "seekerLauncherB",
        name: "Storm Gate Destroyed", // Burenia, near cyan Teleportal
        nodeType: "trigger",
      },{
        id: "seekerLauncherB",
        name: "Storm Gate Destroyed", // Burenia, near Energy Tank, in underwater sector
        nodeType: "trigger",
      },{
        id: "spiderMagnet",
        name: "Magnet Wall Lowered", // Burenia
        nodeType: "trigger",
      },{
        id: "seekerLauncherB",
        name: "Storm Gate Destroyed", // Dairon, near THAT ONE SHINESPARKY Missile+ Tank
        nodeType: "trigger",
      },{
        id: "wideBeam",
        name: "Wide Beam Block Moved", // Dairon, near western elevator to Ferenia
        nodeType: "trigger",
      },{
        id: "wideBeam",
        name: "Wide Beam Block Moved", // Dairon, near tram to Cataris (first big room)
        nodeType: "trigger",
      },{
        id: "wideBeam",
        name: "Wide Beam Block Moved", // Dairon, near first Save Room
        nodeType: "trigger",
      },{
        id: "wideBeam",
        name: "Wide Beam Block Moved", // Dairon, near early LARGE room
        nodeType: "trigger",
      },{
        id: "grappleBeam",
        name: "Big Grapple Box Pulled and in Place", // Dairon, near eastern elevator to Ferenia
        nodeType: "trigger",
      },{
        id: "speedBooster",
        name: "Speed Blocks Destroyed", // Dairon, near yellow teleportal
        nodeType: "trigger",
      },{
        id: "speedBooster",
        name: "Speed Blocks Destroyed", // Dairon, near storm gate
        nodeType: "trigger",
      },{
        id: "speedBooster",
        name: "Speed Blocks Destroyed", // Dairon, in cold zone (early Super Missiles route)
        nodeType: "trigger",
      },{
        id: "speedBooster",
        name: "Speed Blocks Destroyed", // Burenia, in first vanilla big room, over fan with Energy Part
        nodeType: "trigger",
      },{
        id: "speedBooster",
        name: "Speed Blocks Destroyed", // Burenia, near green teleportal, near Energy Part, required for getting a Missile+ Tank
        nodeType: "trigger",
      },{
        id: "speedBooster",
        name: "Speed Blocks Destroyed", // Burenia, trick for Gravity Suit without environmental destruction
        nodeType: "trigger",
      },{
        id: "speedBooster",
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
        id: "omegaBlast",
        name: "Omega Cannon", // Artaria 01P
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "omegaBlast",
        name: "Omega Cannon", // Artaria 02SM
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "omegaBlast",
        name: "Omega Cannon", // Cataris 03MB
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "omegaBlast",
        name: "Omega Cannon", // Dairon 04SB
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "omegaBlast",
        name: "Omega Cannon", // Ghavoran 05IM
        nodeType: "trigger", // special type for Omega Cannon?
      },{
        id: "omegaBlast",
        name: "Omega Cannon", // Ferenia 06WB
        nodeType: "trigger", // special type for Omega Cannon?
      },/*{ // is never collected
        id: "omegaBlast",
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
        id: "missileRefill",
        name: "Missiles Reload",
        nodeType: "recharge",
      },{
        id: "energyRefill",
        name: "Energy Recharge",
        nodeType: "recharge",
      },{
        id: "rechargeRoom",
        name: "Full Restore",
        nodeType: "recharge",
      },{
        id: "navigationRoom",
        name: "Network Station",
        nodeType: "event",
      },{
        id: "saveRoom",
        name: "Save Station",
        nodeType: "save",
      },{
        id: "meleeCounter",
        name: "Melee Counter tutorial",
        nodeType: "event",
      },
    ],
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
    grid: "md_grid.png",
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
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
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
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
    ],
  },
  "ziiaol": {
    checklistWidth: 8,
    items: [
      {
        id: "shieldSpell",
        name: "Protect Spell",
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
        name: "Heal Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "chickenFairy",
        name: "",
        start: 0,
        max: 1,
        segments: [
          {
            id: "chickenFairy",
            name: "Fairy Spell",
            start: 0,
            max: 1,
            value: 0,
            nodeType: "upgrade",
          },{
            id: "cuccoSpell",
            name: "Cucco Spell",
            start: 0,
            max: 1,
            value: 0,
            nodeType: "upgrade",
            clearIfScramble: true,
          },
        ],
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
        name: "Enigma Spell",
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
        id: "bracelets",
        name: "Power Bracelet",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "redFairy",
        name: "Rescue Fairy",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "mask",
        name: "Monster Mask",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "book",
        name: "Book of Mudora",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
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
        id: "magicalShield",
        name: "Durable Shield",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "redRing",
        name: "Red Ring",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "pendant",
        name: "Magic Pendant",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "magicalSword",
        name: "Piercing Sword",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "note",
        name: "Bagu's Note",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
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
        id: "trophy",
        name: "Trophy",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "flower",
        name: "Io Flower",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
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
        id: "bottle",
        name: "Second Quest",
        start: 0,
        max: 1,
        segments: [
          {
            id: "bottle",
            name: "Bottle",
            start: 0,
            max: 1,
            value: 0,
            nodeType: "upgrade",
          },{
            id: "bottleBlood",
            name: "Dark Link defeated",
            start: 0,
            max: 1,
            value: 0,
            nodeType: "upgrade",
          },
        ],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "map",
        name: "Treasure Map (West Hyrule)",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "reverseMap",
        name: "Treasure Map (East Hyrule)",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
      },{
        id: "skeletonKey",
        name: "Skeleton Key",
        start: 0,
        max: 1,
        segments: [],
        value: 1,
        nodeType: "upgrade",
      },{
        id: "cuccoSpell",
        name: "Cucco Spell",
        start: 0,
        max: 1,
        segments: [],
        value: 0,
        nodeType: "upgrade",
        displayIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
        clearIfScramble: true,
      },{
        id: "-",
        name: "",
        max: 0,
      },{
        id: "-",
        name: "",
        max: 0,
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
        id: "pieceOfHeart",
        name: "Pieces of Heart",
        start: 0,
        max: 18,
        segments: [],
        value: 1,
        nodeType: "expansion",
      },{
        id: "bigMagic",
        name: "Pieces of Magic",
        start: 0,
        max: 18,
        segments: [],
        value: 1,
        nodeType: "expansion",
      },{
        id: "boulder",
        name: "Boulder Circle hints",
        start: 0,
        max: 7,
        segments: [],
        value: 1,
        nodeType: "expansion",
      },{
        id: "goldenSlime",
        name: "Golden Zols",
        start: 0,
        max: 12,
        segments: [],
        value: 1,
        nodeType: "expansion",
      },/*{
        id: "linkPlush",
        name: "Extra Lives",
        start: 0,
        max: 3,
        segments: [],
        value: 1,
        nodeType: "expansion",
      },*/{
        id: "life",
        name: "Life",
        start: 1,
        max: 9,
        segments: [],
        value: 0,
        nodeType: "expansion",
      },{
        id: "magic",
        name: "Magic",
        start: 1,
        max: 9,
        segments: [],
        value: 0,
        nodeType: "expansion",
      },{
        id: "attack",
        name: "Attack",
        start: 1,
        max: 9,
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
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
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
    mapTree: [
      { hubId: 1,
        nodeType: "start",
        mapId: 1,
        children: [
          
        ],
      },
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
    mapTree: [
    ],
  },
  "sotn": {
    checklistWidth: 7,
    checklistLayout: [
      { lookupId: 4, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 5, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 6, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 9, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 10, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 27, value: 0, start: 0, max: 0, segments: [], },
      
      { lookupId: 7, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 22, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 23, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 11, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 12, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 24, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 0, segments: [], },
      
      { lookupId: 14, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 20, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 31, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 15, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 21, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 26, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 30, value: 0, start: 0, max: 1, segments: [], },
      
      { lookupId: 16, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 17, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 18, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 13, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 19, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 35, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 34, value: 0, start: 0, max: 1, segments: [], },
      
      { lookupId: 36, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 37, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 38, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 39, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 40, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 33, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 32, value: 0, start: 0, max: 1, segments: [], },
      
      { lookupId: 3, value: 0, start: 0, max: 47, segments: [], },
      { lookupId: 2, value: 0, start: 0, max: 33, segments: [], },
      { lookupId: 25, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 28, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 29, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: -1, value: 0, start: 0, max: 1, segments: [], },
      { lookupId: 1, value: 0, start: 0, max: 1, segments: [], },
    ],
    items: [
      {
        id: "castlemap",
        name: "Castle Map",
        itemId: 1,
        nodeType: "upgrade",
      },
      {
        id: "heartmax",
        name: "Heart max up",
        itemId: 2,
        nodeType: "upgrade",
      },
      {
        id: "lifemax",
        name: "Life max up",
        itemId: 3,
        nodeType: "upgrade",
      },
      {
        id: "cubezoe",
        name: "Cube of Zoe",
        itemId: 4,
        nodeType: "upgrade",
      },
      {
        id: "spiritorb",
        name: "Spirit Orb",
        itemId: 5,
        nodeType: "upgrade",
      },
      {
        id: "faeriescroll",
        name: "Faerie Scroll",
        itemId: 6,
        nodeType: "upgrade",
      },
      {
        id: "wolfsoul",
        name: "Soul of Wolf",
        itemId: 7,
        nodeType: "upgrade",
      },
      {
        id: "librarycard",
        name: "Library Card",
        itemId: 8,
        nodeType: "upgrade",
      },
      {
        id: "jewelopen",
        name: "Jewel of Open",
        itemId: 9,
        nodeType: "upgrade",
      },
      {
        id: "merman",
        name: "Merman Statue",
        itemId: 10,
        nodeType: "upgrade",
      },
      {
        id: "holysymbol",
        name: "Holy Symbol",
        itemId: 11,
        nodeType: "upgrade",
      },
      {
        id: "leapstone",
        name: "Leap Stone",
        itemId: 12,
        nodeType: "upgrade",
      },
      {
        id: "familiar",
        name: "Demon Card",
        itemId: 13,
        nodeType: "upgrade",
      },
      {
        id: "mistform",
        name: "Form of Mist",
        itemId: 14,
        nodeType: "upgrade",
      },
      {
        id: "batsoul",
        name: "Soul of Bat",
        itemId: 15,
        nodeType: "upgrade",
      },
      {
        id: "familiar",
        name: "Faerie Card",
        itemId: 16,
        nodeType: "upgrade",
      },
      {
        id: "familiar",
        name: "Bat Card",
        itemId: 17,
        nodeType: "upgrade",
      },
      {
        id: "familiar",
        name: "Ghost Card",
        itemId: 18,
        nodeType: "upgrade",
      },
      {
        id: "familiar",
        name: "Sword Card",
        itemId: 19,
        nodeType: "upgrade",
      },
      {
        id: "mistpower",
        name: "Power of Mist",
        itemId: 20,
        nodeType: "upgrade",
      },
      {
        id: "batfire",
        name: "Fire of Bat",
        itemId: 21,
        nodeType: "upgrade",
      },
      {
        id: "wolfpower",
        name: "Power of Wolf",
        itemId: 22,
        nodeType: "upgrade",
      },
      {
        id: "wolfskill",
        name: "Skill of Wolf",
        itemId: 23,
        nodeType: "upgrade",
      },
      {
        id: "gravboots",
        name: "Gravity Boots",
        itemId: 24,
        nodeType: "upgrade",
      },
      {
        id: "goldring",
        name: "Gold Ring",
        itemId: 25,
        over: "hint-image",
        overText: "Wear...Clock...",
        nodeType: "upgrade",
      },
      {
        id: "batecho",
        name: "Echo of Bat",
        itemId: 26,
        nodeType: "upgrade",
      },
      {
        id: "spikebreaker",
        name: "Spike Breaker Armor",
        itemId: 27,
        nodeType: "upgrade",
      },
      {
        id: "silverring",
        name: "Silver Ring",
        itemId: 28,
        over: "hint-image",
        overText: "...in...Tower",
        nodeType: "upgrade",
      },
      {
        id: "holyglasses",
        name: "Holy Glasses",
        itemId: 29,
        nodeType: "upgrade",
      },
      {
        id: "echoforce",
        name: "Force of Echo",
        itemId: 30,
        nodeType: "upgrade",
      },
      {
        id: "gascloud",
        name: "Gas Cloud",
        itemId: 31,
        nodeType: "upgrade",
      },
      {
        id: "alumail",
        name: "Alucard Mail",
        itemId: 32,
        nodeType: "upgrade",
      },
      {
        id: "dragonhelm",
        name: "Dragon Helm",
        itemId: 33,
        nodeType: "upgrade",
      },
      {
        id: "alushield",
        name: "Alucard Shield",
        itemId: 34,
        nodeType: "upgrade",
      },
      {
        id: "alusword",
        name: "Alucard Sword",
        itemId: 35,
        nodeType: "upgrade",
      },
      {
        id: "vladring",
        name: "Ring of Vlad",
        itemId: 36,
        nodeType: "upgrade",
      },
      {
        id: "vladheart",
        name: "Heart of Vlad",
        itemId: 37,
        nodeType: "upgrade",
      },
      {
        id: "vladbone",
        name: "Rib of Vlad",
        itemId: 38,
        nodeType: "upgrade",
      },
      {
        id: "vladfang",
        name: "Tooth of Vlad",
        itemId: 39,
        nodeType: "upgrade",
      },
      {
        id: "vladeye",
        name: "Eye of Vlad",
        itemId: 40,
        nodeType: "upgrade",
      },
    ],
    bosses: [
    ],
    areas: [
    ],
    extras: [
    ],
    mapTree: [
    ],
  },
};