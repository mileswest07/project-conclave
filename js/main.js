let main = {
  games: {
    "rd": "mrd", // Metroid: Rogue Dawn (ROMhack)
    "m": "m1", // Metroid
    "z": "mzm", // Metroid: Zero Mission
    "p": "mp", // Metroid Prime
    "pb": "pb", // Metroid Prime Pinball
    "p2d": "p2d", // Prime 2D
    "h": "ph", // Metroid Prime Hunters
    "e": "mp2e", // Metroid Prime 2: Echoes
    "c": "mp3c", // Metroid Prime 3: Corruption
    "ff": "mpff", // Metroid Prime: Federation Force
    "b": "mp4b", // Metroid Prime 4: Beyond
    "ros": "m2ros", // Metroid II: Return of Samus
    "mc": "mcon", // Metroid Confrontation
    "a": "am2r", // Another Metroid 2 Remake
    "r": "msr", // Metroid: Samus Returns
    "s": "sm", // Super Metroid
    "o": "mom", // Metroid: Other M
    "f": "mf", // Metroid Fusion
    "n": "mng", // Metroid: A New Galaxy
    "t": "mttne", // Metroid: The Threat Never Ends
    "d": "md", // Metroid Dread
    "z1": "thf", // The Legend of Zelda
    "z2": "aol", // Zelda 2: The Adventure of Link
    "z2pc": "ziiaol", // Zelda 2: The Adventure of Link
    "z3": "alttp", // The Legend of Zelda: A Link to the Past
    "z3r": "z3_rnd", // The Legend of Zelda: A Link to the Past (Rando settings)
    "sotn": "sotn", // Castlevania: Symphony of the Night (PSX)
  },
  jsonDir: 'data',
};

(() => {
  
  const masterIDList = [
    "morphBall", "bomb", "bombA", "adapter", "bombB", "bombC", "powerBomb", "powerBombA", "powerBombB", "powerBombTank", "powerBombExp", "powerBombExpA", "springBall", "spiderBallA", "boostBall", "cannonball", "hyperBall", "forceBall", "missileOrb", "newScan",
    "powerBeam", "powerBeamA", "powerBeamB", "longBeam", "chargeBeamE", "chargeBeamA", "chargeBeamB", "chargeBeamC", "chargeBeamD", "saveRoom", "wideBeamC", "wideBeamA", "wideBeamB", "wideBeam", "wideBeamD", "waveBeamE", "waveBeam", "waveBeamA", "waveBeamB", "luminothMessage", "dreadMap",
    "iceBeamD", "iceBeamA", "iceBeamB", "iceBeamC", "powerBeamD", "plasmaBeamD", "plasmaBeamA", "plasmaBeamB", "plasmaBeamC", "navigationRoom", "novaBeam", "darkBeam", "lightBeam", "annihilatorBeam", "hyperBeam", "diffusionBeam", "voltDriver", "battlehammer", "magmaul", "echoKeyBeam", "dreadElevator",
    "judicator", "shockCoil", "imperialist", "omegaCannon", "freezeShot", "iceMissileB", "flameShot", "shockShot", "beamAmmoExpansion", "darkAmmoExpansion", "lightAmmoExpansion", "chargeAccel", "grappleBeam", "grappleLasso", "grappleVoltage", "hyperGrapple", "shipGrapple", "uaExpansion", "echoKey", "dreadCapsule",
    "combatVisor", "combatVisorA", "scanVisor", "scanVisorA", "scanVisorB", "thermalVisor", "xRayScope", "xRayVisor", "corruptionXRayVisor", "darkVisor", "echoVisor", "commandVisor", "violetTranslator", "amberTranslator", "emeraldTranslator", "cobaltTranslator", "thermalPositioner", "echoLock", "generator",
    "fullPowerSuit", "barrier", "barrierA", "barrierB", "barrierC", "gravitySuit", "gravitySuitB", "gravitySuitC", "gravitySuitD", "zeroSuit", "zeroSuitA", "samus", "darkSuitA", "progressiveSuit", "primeSuit", "fusionSuit", "phazonSuit", "amorbis", "darkSuit", "gravityBoost", "lightSuit", "ped", "hazardShield", "magneticShield", "armCannon", "altform", "observatory",
    "missile", "missileTank", "missileA", "superMissile", "superMissileA", "superMissileTank", "iceMissile", "seekerLauncher", "seekerLauncherA", "seekerLauncherB", "darkburst", "sunburst", "sonicBoom", "hyperMissile", "shipMissile", "shipMissileExpansion", "affinityWeapon", "deathalt", "golemHead",
    "highJump", "speedBooster", "speedBoosterA", "wallJumpBoots", "spaceJump", "screwAttack", "screwAttackA", "powerGrip", "zipline", "spaceJumpBoots", "spinBoost", "scanPulse", "radar", "lightningArmor", "beamBurst", "phaseDrift", "aeionExpansion", "jumpBoots", "exelion", "rechargeRoom",
    "energyTank", "energyTankA", "reserveTank", "energyPart", "eRecoveryTank", "unknownItem", "unknownItem1a", "unknownItem2a", "unknownItem3a", "chozoArtifact", "darkAgonKey", "darkTorvusKey", "ingHiveKey", "skyTempleKey", "energyTransferModule", "energyCell", "pirateCode", "dreadEnergy", "teleporterA", "ammoStation",
    "templeKey", "lightOfAether", "lightOfAetherA", "cipher", "theronianBomb", "phaaze", "alimbicArtifactCA1", "alimbicArtifactCA2", "alimbicArtifactAl1", "alimbicArtifactAl2", "alimbicArtifactVDO1", "alimbicArtifactVDO2", "alimbicArtifactArc1", "alimbicArtifactArc2", "octolith", "oubliette", "am2rPowerOrb", "dreadPart", "missileRefill",
    "securityL0", "energyPickup", "securityL1", "missileC", "securityL2", "missileD", "securityL3", "alimbicCannon", "securityL4", "friendVoucher", "etedach", "skyTempleAccess", "norion", "bryyo", "elysia", "urtraghus", "spireDock", "keyGate1", "translatorGate",
    "boss", "monster", "monsterDna", "monsterCapsule", "magneticShieldTank", "pumpControlUnit", "mainBoiler", "reactorCore", "mainDeck", "sector1SRX", "sector2TRO", "sector3PYR", "sector4AQA", "sector5ARC", "sector6NOC", "restrictedLab", "quarantineBay", "keyGate2", "energyRefill",
    "towerPower", "chozoStatue", "federationArmy", "federationMarines", "xenoresearch", "adam", "powerBeamC", "darkBeamA", "lightBeamA", "annihilatorBeamA", "shieldKey", "commandVisorA", "crystalFlash", "alimbicArtifact", "translatorModule", "securityUnlock", "randomizer", "goldMedal", "emergencyPistol", "paralyzer",
    "bombD", "monsterDnaA", "lightBeamB", "annihilatorBeamB", "electroLob", "darkVisorA", "hint", "bsl", "datapack", "doubleDamageA", "doubleDamage", "itemOrb", "chargeBomb", "iceChargeShot", "spikeBomb", "modSlot", "modChip", "modChipA", "reserveTankA",
    "shield", "adrenaline", "eject", "repairCapsule", "shieldGenerator", "missileB", "superMissileB", "proximityBomb", "decoy", "slowBeam", "scanBolt", "progressiveBeam", "progressiveBeamA", "grappleBeamA", "progressiveMissile", "crossBombs", "mapMarker", "modChipB", "reserveTankB",
    "spinBoostA", "chargeBeam", "infiniteBeamAmmo", "infiniteMissiles", "superMissileC", "spiderBall", "bountyCoin", "bountyCoin1", "bountyCoin5", "bountyCoin10", "bountyCoin50", "bountyCoin100", "dataRoom", "diffusionBeamA", "novaBeamA", "hypermode", "iceMissileA", "doubleMissileTank", "modChipC", "energyPartA",
    "spiderMagnet", "springBallA", "gravitySuitA", "screwAttackB", "aquadiaKey", "steelarisGear", "longBeamA", "iceBeam", "plasmaBeam", "waveBeamC", "fireBeam", "flameShotA", "waveBeamD", "plasmaBeamE", "iceBeamE", "diffusionBeamB", "itemSphere", "chozoCrest", "eRecoveryTankA",
    "chykka", "quadraxis", "aetherKey", "darkAetherKey", "burstBeam", "smallAmmo", "largeAmmo", "meleeCounter", "dashMelee", "overblast", "concentration", "lethalStrike", "slide", "omegaBlast", "senseMove", "invisibility", "cloak", "rundas", "emergencyPistolA", "paralyzerA", "flashShift",
    "unknownItem1", "unknownItem2", "unknownItem3", "violetTranslatorA", "amberTranslatorA", "emeraldTranslatorA", "cobaltTranslatorA", "itemCube", "aeionCube", "teleporterB", "teleportalA", "teleportalE", "teleportalI", "teleportalO", "teleportalU", "teleportalX", "teleportalY", "corruptionXRayVisorA",
    "unused", "empty", "kraid", "ridley", "m_lock1", "m_lock2"
  ];
  const unifiedIDCollection = {"m1":{"barrier":0,"bomb":0,"energy":0,"high":0,"ice":0,"long":0,"missile":0,"morph":0,"screw":0,"wave":0},"m2ros":{"baby":0,"barrier":0,"bomb":0,"energy":0,"high":0,"ice":0,"morphBall":0,"missile":0,"plasma":0,"powerbeam":0,"screw":0,"space":0,"spider":0,"spring":0,"wave":0,"wide":0},"md":{"armCannon":0,"barrier":0,"bombD":0,"chargeBeam":0,"crossBombs":0,"diffusionBeamB":0,"energy":0,"flash":0,"flashTank":0,"grappleBeam":0,"gravitySuitA":0,"iceMissileB":0,"missile":0,"missilePlus":0,"monsterDna":0,"morphBall":0,"omega":0,"part":0,"pbombs":0,"phantom":0,"plasmaBeamA":0,"powerBomb":0,"progressiveBeam":0,"progressiveBomb":0,"progressiveChargeBeam":0,"progressiveMissile":0,"progressiveSpin":0,"progressiveSuit":0,"radar":0,"screwAttack":0,"seekerLauncherB":0,"shine":0,"spaceJump":0,"speedBooster":0,"spiderMagnet":0,"spinBoostA":0,"superMissile":0,"waveBeamE":0,"wideBeam":0},"mf":{"barrier":0,"bombData":0,"chargeBeam":0,"diffusion":0,"energy":0,"final":0,"fusion":0,"gravity":0,"high":0,"iceBeam":0,"iceMissile":0,"missile":0,"missileData":0,"morph":0,"pbomb":0,"pbombData":0,"plasmaBeam":0,"powerbeam":0,"progressiveBeam":0,"progressiveMissile":0,"progressiveSuit":0,"screw":0,"securityL0":0,"securityL1":0,"securityL2":0,"securityL3":0,"securityL4":0,"space":0,"speed":0,"superMissile":0,"waveBeam":0,"wideBeam":0},"mom":{"accel":0,"barrier":0,"bomb":0,"diffusion":0,"energy":0,"erec":0,"grapple":0,"gravitySuitC":0,"iceBeam":0,"missile":0,"morphBall":0,"part":0,"pbomb":0,"plasmaBeam":0,"progressiveBeam":0,"progressiveMissile":0,"progressiveSuit":0,"screwAttack":0,"seeker":0,"spaceJump":0,"speed":0,"super":0,"tank":0,"unknown":0,"waveBeamC":0},"mp":{"aochozo":0,"aoelder":0,"aolifegiver":0,"aonature":0,"aonewborn":0,"aospirit":0,"aostrength":0,"aosun":0,"aotruth":0,"aowarrior":0,"aowild":0,"aoworld":0,"barrier":0,"bombB":0,"boost":0,"chargeBeamB":0,"chozoArtifact":0,"combat":0,"combatA":0,"energyTankA":0,"flameShot":0,"grappleBeamA":0,"gravity":0,"ice":0,"iceMissileB":0,"missile":0,"missileTank":0,"morph":0,"pbomb":0,"phazon":0,"plasma":0,"power":0,"powerBombExp":0,"powersuit":0,"progressiveSuit":0,"scan":0,"scanA":0,"shockShot":0,"spider":0,"spinBoost":0,"springBall":0,"superMissileA":0,"thermal":0,"thermalA":0,"wave":0,"xray":0,"xrayA":0},"mp2e":{"amberTranslator":0,"amberTranslatorA":0,"annihilator":0,"barrier":0,"beamAmmoExpansion":0,"bombC":0,"boost":0,"cannonball":0,"chargeBeamA":0,"cobaltTranslator":0,"cobaltTranslatorA":0,"coins":0,"combat":0,"combatA":0,"darkAmmoExpansion":0,"darkbeam":0,"darkburst":0,"darkSuitA":0,"darkvisor":0,"darkvisorA":0,"doubleDamageA":0,"echo":0,"echoA":0,"emeraldTranslator":0,"emeraldTranslatorA":0,"energyTankA":0,"energyTransferModule":0,"grappleBeamA":0,"gravityBoost":0,"infiniteBeamAmmo":0,"infiniteMissiles":0,"light":0,"lightAmmoExpansion":0,"lightSuit":0,"missile":0,"missileTank":0,"morph":0,"pbomb":0,"power":0,"powerBombExpA":0,"progressiveGrapple":0,"progressiveMissile":0,"progressiveSuit":0,"redKey":0,"scan":0,"scanA":0,"screwAttackA":0,"seekerLauncherA":0,"skyKey":0,"sonicBoom":0,"spider":0,"spinBoost":0,"springBall":0,"sunburst":0,"superMissileC":0,"violetTranslator":0,"violetTranslatorA":0},"mp3c":{"barrier":0,"bombC":0,"boostBall":0,"chargeBeam":0,"combatVisor":0,"commandVisor":0,"corruptionXRayVisor":0,"energyCell":0,"energyTankA":0,"flameShot":0,"friendVoucher":0,"goldCredit":0,"grappleBeam":0,"grappleLasso":0,"grappleVoltage":0,"hazardShield":0,"hyperBall":0,"hyperGrapple":0,"hyperMissile":0,"hypermode":0,"iceMissileB":0,"missileC":0,"missileTank":0,"morphBall":0,"novaBeamA":0,"ped":0,"phazonSuit":0,"powerBeamA":0,"progressiveMissile":0,"progressiveSuit":0,"scanVisorB":0,"screwAttackA":0,"seekerLauncherB":0,"shipGrapple":0,"shipMissile":0,"shipMissileExpansion":0,"shipsave":0,"spiderBallA":0,"spinBoost":0,"springBall":0},"msr":{"aexp":0,"baby":0,"barrier":0,"bombs":0,"burst":0,"charge":0,"drift":0,"energy":0,"grapple":0,"grapplesmall":0,"gravity":0,"high":0,"ice":0,"icesmall":0,"missile":0,"missilesmall":0,"morph":0,"mtank":0,"pbombs":0,"pbombsmall":0,"pbtank":0,"plasma":0,"plasmasmall":0,"progressiveBeam":0,"progressiveSuit":0,"pulse":0,"screw":0,"shield":0,"smtank":0,"space":0,"spider":0,"spring":0,"superm":0,"supermsmall":0,"wave":0,"wavesmall":0,"wide":0,"widesmall":0},"mzm":{"barrier":0,"bomb":0,"charge":0,"emergencyPistol":0,"energy":0,"full":0,"gravity":0,"grip":0,"high":0,"ice":0,"long":0,"missile":0,"morph":0,"pbomb":0,"plasma":0,"powerbeam":0,"screw":0,"smissile":0,"space":0,"speed":0,"ui1":0,"ui2":0,"ui3":0,"wave":0,"zeroSuit":0},"pb":{"artifact":0,"extra":0,"forceBall":0,"missileC":0,"powerBombA":0,"special":0,"templeball":0},"ph":{"affinityWeapon":0,"al1":0,"al2":0,"arc1":0,"arc2":0,"bigocto":0,"bomb":0,"boost":0,"ca1":0,"ca2":0,"coil":0,"combat":0,"deathalt":0,"doubleDamage":0,"doubleDamageA":0,"electroLob":0,"energy":0,"hammer":0,"imp":0,"invisibilityA":0,"jud":0,"magmaul":0,"missile":0,"morph":0,"octolith":0,"omega":0,"power":0,"scan":0,"shieldKey":0,"tank":0,"thermalPositioner":0,"uaExpansion":0,"vdo1":0,"vdo2":0,"volt":0},"sm":{"barrier":0,"bomb":0,"charge":0,"energy":0,"grapple":0,"gravity":0,"high":0,"hyperBeam":0,"ice":0,"missile":0,"morph":0,"pbombs":0,"plasma":0,"powerbeam":0,"reserve":0,"screw":0,"smissile":0,"space":0,"speed":0,"spring":0,"wave":0,"wide":0,"xray":0},"mp4b":{}};
  const checklistGameList = ["m1","mzm","mp","pb","ph","mp2e","mp3c","mp4b","m2ros","msr","sm","mom","mf","md"];
  
  function partition(baseArray, predicate) {
    return baseArray.reduce((accumulator, value, i, list) => {
        accumulator[predicate(value, i, list) ? 0 : 1].push(value);
        return accumulator;
      },
      [[], []]
    );
  }
  
  function addItemToSetIfGameNotInList(itemSet, gameExceptionList, currentGame, addThisValue) {
    if (![...gameExceptionList].includes(currentGame)) {
      itemSet.add(addThisValue);
    }
  }
  
  async function scanDataForLint(doProcessItemOrder = false, doProcessUnifiedSprites = false) {
    let greaterItemSet = new Set();
    let unifiedChecklist = {...unifiedIDCollection};
    let typeCount = {};
    let dupesPerGame = {};
    let totalItemCount = 0;
    let totalExtraCount = 0;
    let totalBossCount = 0;
    let totalTypeCount = 0;
    let gameExceptionList = ["thf", "aol", "ziiaol", "alttp", "z3_rnd", "sotn"];
    let aFailureHasOccurred = false;
    
    let gamesKeys = [...Object.values(main.games)];
    
    for (let i = 0; i < gamesKeys.length; i++) {
      let currentGame = gamesKeys[i];
      try {
        const response = await fetch(`${main.jsonDir}/${currentGame}.json`);
        const data = await response.json();
        let currentData = data[currentGame];
        let itemCount = {};
        let itemOrder = [];
        let missingItems = [];
        let allSegments = [];
        let doesChecklist = checklistGameList.includes(currentGame);
        
        for (let j = 0; j < currentData.items.length; j++) {
          let item = currentData.items[j];
          if (item.id === "-") {
            continue;
          }
          if (item.nodeType === undefined && (item.segments === undefined || item.segments.length <= 0)) {
            console.warn(item);
          }
          if (item.segments && item.segments.length > 0) {
            allSegments = [...allSegments, ...item.segments];
          }
          if (item.segments && item.segments.length > 0) {
            let idsAddedDuringTheseSegments = new Set();
            for (let k = 0; k < item.segments.length; k++) {
              let segment = item.segments[k];
              if (segment.id === "-") {
                continue;
              }
              if (segment.nodeType === undefined) {
                console.warn(item, segment);
              }
              if (["boss", "battle"].includes(segment.nodeType)) {
                ++totalBossCount;
              } else {
                ++totalItemCount;
              }
              if (segment.itemId) {
                itemOrder.push(segment);
                itemOrder = itemOrder.sort((a, b) => b.itemId - a.itemId);
              } else {
                missingItems.push(segment);
              }
              if (!(!!segment.clearIfScramble) && !(!!item.clearIfScramble) && !idsAddedDuringTheseSegments.has(segment.id)) {
                if (itemCount[segment.id]) {
                  itemCount[segment.id] += 1;
                } else {
                  itemCount[segment.id] = 1;
                }
                idsAddedDuringTheseSegments.add(segment.id);
              }
              addItemToSetIfGameNotInList(greaterItemSet, gameExceptionList, currentGame, segment.id);
              if (doesChecklist) {
                const useSprite = Object.hasOwn(segment, 'sprite');
                const propSprite = useSprite ? segment.sprite : segment.id;
                unifiedChecklist[currentGame][propSprite] += 1;
              }
              if (segment.locale) {
                for (const [localeKey, localeObj] of Object.entries(segment.locale)) {
                  let localeId = localeObj.id;
                  if (localeId === "-") {
                    continue;
                  }
                  if (!idsAddedDuringTheseSegments.has(localeId)) {
                    if (!(!!segment.clearIfScramble) && !(!!item.clearIfScramble) && !idsAddedDuringTheseSegments.has(segment.id)) {
                      if (itemCount[localeId]) {
                        itemCount[localeId] += 1;
                      } else {
                        itemCount[localeId] = 1;
                      }
                    }
                    idsAddedDuringTheseSegments.add(localeId);
                    addItemToSetIfGameNotInList(greaterItemSet, gameExceptionList, currentGame, localeId);
                  }
                }
              }
              if (typeCount[segment.nodeType]) {
                typeCount[segment.nodeType] += 1;
              } else {
                typeCount[segment.nodeType] = 1;
              }
            }
          } else {
            if (["boss", "battle"].includes(item.nodeType)) {
              ++totalBossCount;
            } else {
              ++totalItemCount;
            }
            if (item.itemId) {
              itemOrder.push(item);
              itemOrder = itemOrder.sort((a, b) => b.itemId - a.itemId);
            } else {
              missingItems.push(item);
            }
            if (!(!!item.clearIfScramble)) {
              if (itemCount[item.id]) {
                itemCount[item.id] += 1;
              } else {
                itemCount[item.id] = 1;
              }
            }
            addItemToSetIfGameNotInList(greaterItemSet, gameExceptionList, currentGame, item.id);
            if (doesChecklist) {
              const useSprite = Object.hasOwn(item, 'sprite');
              const propSprite = useSprite ? item.sprite : item.id;
              unifiedChecklist[currentGame][propSprite] += 1;
            }
            if (item.locale) {
              for (const [localeKey, localeObj] of Object.entries(item.locale)) {
                let localeId = localeObj.id;
                if (localeId === "-") {
                  continue;
                }
                if (!(!!item.clearIfScramble) && item.id !== localeId) {
                  if (itemCount[localeId]) {
                    itemCount[localeId] += 1;
                  } else {
                    itemCount[localeId] = 1;
                  }
                }
                addItemToSetIfGameNotInList(greaterItemSet, gameExceptionList, currentGame, localeId);
              }
            }
            if (typeCount[item.nodeType]) {
              typeCount[item.nodeType] += 1;
            } else {
              typeCount[item.nodeType] = 1;
            }
          }
        }
        
        if (currentData.checklistLayout) {
          for (let j = 0; j < currentData.checklistLayout.length; j++) {
            let item = currentData.checklistLayout[j];
            if (item.segments && item.segments.length > 0) {
              let idsAddedDuringTheseSegments = new Set();
              for (let k = 0; k < item.segments.length; k++) {
                let segment = item.segments[k];
                if (!segment.id || segment.id === "-") {
                  continue;
                }
                if (!(!!segment.clearIfScramble) && !(!!item.clearIfScramble) && !idsAddedDuringTheseSegments.has(segment.id)) {
                  idsAddedDuringTheseSegments.add(segment.id);
                }
                addItemToSetIfGameNotInList(greaterItemSet, gameExceptionList, currentGame, segment.id);
                if (segment.locale) {
                  for (const [localeKey, localeObj] of Object.entries(segment.locale)) {
                    let localeId = localeObj.id;
                    if (localeId === "-") {
                      continue;
                    }
                    if (!idsAddedDuringTheseSegments.has(localeId)) {
                      idsAddedDuringTheseSegments.add(localeId);
                      addItemToSetIfGameNotInList(greaterItemSet, gameExceptionList, currentGame, localeId);
                    }
                  }
                }
              }
            } else {
              if (!item.id || item.id === "-") {
                continue;
              }
              addItemToSetIfGameNotInList(greaterItemSet, gameExceptionList, currentGame, item.id);
              if (item.locale) {
                for (const [localeKey, localeObj] of Object.entries(item.locale)) {
                  let localeId = localeObj.id;
                  if (localeId === "-") {
                    continue;
                  }
                  addItemToSetIfGameNotInList(greaterItemSet, gameExceptionList, currentGame, localeId);
                }
              }
            }
          }
        }
        
        for (let j = 0; j < currentData.extras.length; j++) {
          let item = currentData.extras[j];
          if (!item.id || item.id === "-") {
            continue;
          }
          ++totalExtraCount;
          addItemToSetIfGameNotInList(greaterItemSet, gameExceptionList, currentGame, item.id);
          if (typeCount[item.nodeType]) {
            typeCount[item.nodeType] += 1;
          } else {
            typeCount[item.nodeType] = 1;
          }
        }
        
        for (let j = 0; j < currentData.bosses.length; j++) {
          let boss = currentData.bosses[j];
          ++totalBossCount;
          let type = boss.nodeType || "boss";
          if (typeCount[type]) {
            typeCount[type] += 1;
          } else {
            typeCount[type] = 1;
          }
        }
        
        let duplicateCollection = new Set();
        
        for (const [keyid, count] of Object.entries(itemCount)) {
          if (count > 1) {
            duplicateCollection.add(keyid);
          }
        }
        
        duplicateCollection = [...duplicateCollection];
        if (duplicateCollection.length > 0) {
          if (dupesPerGame[currentGame]) {
            dupesPerGame[currentGame] = dupesPerGame[currentGame].concat(duplicateCollection);
          } else {
            dupesPerGame[currentGame] = duplicateCollection;
          }
        }
        
        if (doProcessItemOrder) {
          console.debug(`item order for game ${currentGame}`, itemOrder.map(item => `${item.itemId}: ${item.name} (${item.nodeType})`));
          if (!["mpff", "thf", "aol", "ziiaol", "alttp", "z3_rnd", "sotn"].includes(currentGame) && missingItems.length) {
            console.debug("   missing items:", missingItems.map(item => `${item.name} (${item.nodeType})`));
          }
          if (!["mpff", "thf", "aol", "ziiaol", "alttp", "z3_rnd", "sotn"].includes(currentGame) && allSegments.length) {
            console.debug("   segments:", allSegments);
            //console.debug(`segments for game ${currentGame}`, allSegments);
          }
        }
      } catch (e) {
        aFailureHasOccurred = true;
        console.error(`failed to fetch JSON for game ${currentGame}`);
        console.error(e);
      }
    }
    if (aFailureHasOccurred || doProcessItemOrder) {
      console.debug("**********")
    }
    
    for (const [keytype, count] of Object.entries(typeCount)) {
      totalTypeCount += count;
    }
    
    greaterItemSet = [...greaterItemSet];
    
    let itemIdResults = partition(masterIDList, (eachItem, index, allItems) => greaterItemSet.includes(eachItem));
    let itemIdsWithoutGraphics = partition(greaterItemSet, (eachItem, index, allItems) => !masterIDList.includes(eachItem));
    
    console.debug("items list:", greaterItemSet);
    console.debug("total item count:", totalItemCount);
    console.debug("dupes per game:", dupesPerGame);
    console.debug("types and count:", typeCount);
    console.debug("total number by type count:", totalTypeCount);
    if (totalItemCount + totalBossCount + totalExtraCount !== totalTypeCount) {
      console.warn(`count mismatch: ${totalItemCount + totalExtraCount} vs ${totalTypeCount}; please investigate!`);
    }
    /*
      Indicates there is a placeholder icon on m_graphics.png ,
      that is not allocated to any items in data/*.json .
      Note that this is meant to cover icons under properties [items, checklistLayout, and extras],
      but does not cover icons that may be used under other properties [bosses, areas, or map].
      This code may be updated in the future to include those. 
    */
    console.debug("item IDs not used:", itemIdResults[1]);
    if (itemIdsWithoutGraphics[0].length > 0) {
      /*
        Indicates there is a missing placeholder icon on m_graphics.png ,
        where an ID is attempting to link to a region not allocated on spriteMapping.css .
        Attempting to draw this icon will display a blank image.
      */
      console.warn("doublecheck graphics for:", itemIdsWithoutGraphics[0]);
    }
    console.debug("**********")
    
    if (doProcessUnifiedSprites) {
      let unifiedReport = {};
      for (const [gameName, gameData] of Object.entries(unifiedChecklist)) {
        unifiedReport[gameName] = {
          inUse: [], // if > 0
          unused: [], // if === 0
          missing: [], // if NaN
        };
        for (const [itemName, itemCount] of Object.entries(gameData)) {
          if (isNaN(itemCount)) {
            unifiedReport[gameName].missing.push(itemName);
          } else if (itemCount > 0) {
            unifiedReport[gameName].inUse.push(itemName);
          } else {
            unifiedReport[gameName].unused.push(itemName);
          }
        }
        
        const shallShortcut = unifiedReport[gameName].unused.length === 0 && unifiedReport[gameName].missing.length === 0;
        console.debug(`Unified sprites report for game ${gameName} :: ${shallShortcut ? 'all items in use [' + unifiedReport[gameName].inUse.length + ']' : ''}`)
        if (!shallShortcut) {
          // console.debug(gameData);
          if (unifiedReport[gameName].inUse.length > 0) {
            /*
              Indicates there is a MZM-style icon on mzm_full_spritesheet.png ,
              that is allocated to items in data/*.json .
              These entries will need to be added to the {unifiedChecklist} mapping above
              in order to fully register. Otherwise it will be marked as "missing".
            */
            console.debug(`      inUse [${unifiedReport[gameName].inUse.length}] :`, unifiedReport[gameName].inUse);
          }
          if (unifiedReport[gameName].unused.length > 0) {
            /*
              Indicates there is a MZM-style icon on mzm_full_spritesheet.png ,
              that is not allocated to any items in data/*.json .
            */
            console.warn(`     unused [${unifiedReport[gameName].unused.length}] :`, unifiedReport[gameName].unused);
          }
          if (unifiedReport[gameName].missing.length > 0) {
            /*
              Indicates there is a missing MZM-style icon on mzm_full_spritesheet.png ,
              where an ID or sprite property is attempting to link to a region not allocated on allspriteMapping.css .
              Attempting to draw this icon will display a blank image.
            */
            console.error(`    missing [${unifiedReport[gameName].missing.length}] :`, unifiedReport[gameName].missing);
          }
        }
      }
      //console.debug("Full report:::", unifiedReport);
      console.debug("**********");
    }
  }
  
  function start() {
    
  }
  
  main.partition = partition;
  main.scanDataForLint = scanDataForLint;
  main.start = start;
})();