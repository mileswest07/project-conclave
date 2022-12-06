let main = {
  
};

(() => {
  
  const masterIDList = ["morphBall", "bomb", "bombA", "adapter", "bombB", "bombC", "powerBomb", "powerBombA", "powerBombB", "powerBombTank", "powerBombExp", "powerBombExpA", "springBall", "spiderBallA", "boostBall", "cannonball", "hyperBall", "forceBall", "missileOrb", "powerBeam", "powerBeamA", "powerBeamB", "longBeam", "chargeBeamE", "chargeBeamA", "chargeBeamB", "chargeBeamC", "chargeBeamD", "wideBeamC", "wideBeamA", "wideBeamB", "wideBeam", "wideBeamD", "waveBeamE", "waveBeam", "waveBeamA", "waveBeamB", "luminothMessage", "iceBeamD", "iceBeamA", "iceBeamB", "iceBeamC", "plasmaBeamD", "plasmaBeamA", "plasmaBeamB", "plasmaBeamC", "novaBeam", "darkBeam", "lightBeam", "annihilatorBeam", "hyperBeam", "diffusionBeam", "voltDriver", "battlehammer", "magmaul", "echoKeyBeam", "judicator", "shockCoil", "imperialist", "omegaCannon", "freezeShot", "iceMissileB", "flameShot", "shockShot", "beamAmmoExpansion", "darkAmmoExpansion", "lightAmmoExpansion", "chargeAccel", "grappleBeam", "grappleLasso", "grappleVoltage", "hyperGrapple", "shipGrapple", "uaExpansion", "echoKey", "combatVisor", "seekerLauncherC", "combatVisorA", "scanVisor", "scanVisorA", "scanVisorB", "thermalVisor", "xRayScope", "xRayVisor", "corruptionXRayVisor", "darkVisor", "echoVisor", "commandVisor", "violetTranslator", "amberTranslator", "emeraldTranslator", "cobaltTranslator", "thermalPositioner", "echoLock", "fullPowerSuit", "barrier", "barrierA", "barrierB", "barrierC", "gravitySuit", "gravitySuitB", "gravitySuitC", "gravitySuitD", "zeroSuit", "zeroSuitA", "progressiveSuit", "primeSuit", "fusionSuit", "phazonSuit", "darkSuit", "gravityBoost", "lightSuit", "ped", "hazardShield", "magneticShield", "armCannon", "altform", "missile", "missileTank", "missileA", "superMissile", "superMissileA", "superMissileTank", "iceMissile", "seekerLauncher", "seekerLauncherA", "seekerLauncherB", "darkburst", "sunburst", "sonicBoom", "hyperMissile", "shipMissile", "shipMissileExpansion", "affinityWeapon", "deathalt", "highJump", "speedBooster", "speedBoosterA", "wallJumpBoots", "spaceJump", "screwAttack", "screwAttackA", "powerGrip", "zipline", "spaceJumpBoots", "spinBoost", "scanPulse", "radar", "lightningArmor", "beamBurst", "phaseDrift", "aeionExpansion", "jumpBoots", "speedBoosterB", "exelion", "energyTank", "energyTankA", "reserveTank", "energyPart", "eRecoveryTank", "unknownItem", "unknownItem1", "unknownItem2", "unknownItem3", "chozoArtifact", "darkAgonKey", "darkTorvusKey", "ingHiveKey", "skyTempleKey", "energyTransferModule", "energyCell", "pirateCode", "dreadEnergy", "templeKey", "lightOfAether", "lightOfAetherA", "cipher", "theronianBomb", "phaaze", "alimbicArtifactCA1", "alimbicArtifactCA2", "alimbicArtifactAl1", "alimbicArtifactAl2", "alimbicArtifactVDO1", "alimbicArtifactVDO2", "alimbicArtifactArc1", "alimbicArtifactArc2", "octolith", "oubliette", "am2rPowerOrb", "dreadPart", "securityL0", "energyPickup", "securityL1", "missileC", "securityL2", "missileD", "securityL3", "alimbicCannon", "securityL4", "friendVoucher", "etedach", "skyTempleAccess", "norion", "bryyo", "elysia", "urtraghus", "spireDock", "keyGate1", "boss", "monster", "monsterDna", "monsterCapsule", "magneticShieldTank", "pumpControlUnit", "mainBoiler", "reactorCore", "mainDeck", "sector1SRX", "sector2TRO", "sector3PYR", "sector4AQA", "sector5ARC", "sector6NOC", "restrictedLab", "quarantineBay", "keyGate2", "towerPower", "chozoStatue", "federationArmy", "federationMarines", "xenoresearch", "adam", "powerBeamC", "darkBeamA", "lightBeamA", "annihilatorBeamA", "shieldKey", "commandVisorA", "crystalFlash", "alimbicArtifact", "translatorModule", "securityUnlock", "randomizer", "goldMedal", "bombD", "monsterDnaA", "lightBeamB", "annihilatorBeamB", "electroLob", "darkVisorA", "hint", "bsl", "datapack", "doubleDamageA", "doubleDamage", "invisibilityA", "cloakA", "chargeBomb", "iceChargeShot", "spikeBomb", "modSlot", "modChip", "modChipA", "shield", "adrenaline", "eject", "repairCapsule", "shieldGenerator", "missileB", "superMissileB", "proximityBomb", "decoy", "slowBeam", "scanBolt", "progressiveBeam", "progressiveBeamA", "grappleBeamA", "progressiveMissile", "crossBombs", "mapMarker", "modChipB", "spinBoostA", "chargeBeam", "infiniteBeamAmmo", "infiniteMissiles", "superMissileC", "spiderBall", "bountyCoin", "bountyCoin1", "bountyCoin5", "bountyCoin10", "bountyCoin50", "bountyCoin100", "diffusionBeamA", "novaBeamA", "hypermode", "iceMissileA", "doubleMissileTank", "modChipC", "spiderMagnet", "flashShift", "gravitySuitA", "phantomCloak", "cloakB", "pulseRadar", "radarA", "aquadiaKey", "steelarisGear", "longBeamA", "iceBeam", "plasmaBeam", "waveBeamC", "fireBeam", "flameShotA", "waveBeamD", "plasmaBeamE", "iceBeamE", "diffusionBeamB", "itemSphere", "chozoCrest", "chykka", "quadraxis", "aetherKey", "darkAetherKey", "burstBeam", "smallAmmo", "largeAmmo", "meleeCounter", "dashMelee", "overblast", "concentration", "lethalStrike", "slide", "omegaBlast", "senseMove", "invisibility", "cloak", "kraid", "ridley",];
  
  const games = {
    "rd": "mrd", // Metroid: Rogue Dawn (ROMhack)
    "m": "m1", // Metroid
    "z": "mzm", // Metroid: Zero Mission
    "p": "mp", // Metroid Prime
    "b": "pb", // Metroid Prime Pinball
    "p2d": "p2d", // Prime 2D
    "h": "ph", // Metroid Prime Hunters
    "e": "mp2e", // Metroid Prime 2: Echoes
    "c": "mp3c", // Metroid Prime 3: Corruption
    "ff": "mpff", // Metroid Prime: Federation Force
    "ros": "m2ros", // Metroid II: Return of Samus
    "mc": "mcon", // Metroid Confrontation
    "a": "am2r", // Another Metroid 2 Remake
    "r": "msr", // Metroid: Samus Returns
    "s": "sm", // Super Metroid
    "o": "mom", // Metroid: Other M
    "f": "mf", // Metroid Fusion
    "n": "mng", // Metroid: A New Galaxy
    "t": "mttne", // Metroid: A New Galaxy
    "d": "md", // Metroid Dread
    "z1": "thf", // The Legend of Zelda
    "z2": "aol", // Zelda 2: The Adventure of Link
    "z3": "alttp", // The Legend of Zelda: A Link to the Past
    "z3r": "z3_rnd", // The Legend of Zelda: A Link to the Past (Rando settings)
  };
  
  function partition(baseArray, predicate) {
    return baseArray.reduce((accumulator, value, i, list) => {
        accumulator[predicate(value, i, list) ? 0 : 1].push(value);
        return accumulator;
      },
      [[], []]
    );
  }
  
  function scanDataForLint() {
    let greaterItemSet = new Set();
    let typeCount = {};
    let dupesPerGame = {};
    let totalItemCount = 0;
    let totalExtraCount = 0;
    let totalTypeCount = 0;
    
    let gamesKeys = [...Object.values(games)];
    
    for (let i = 0; i < gamesKeys.length; i++) {
      let currentGame = gamesKeys[i];
      let currentData = rawData[currentGame];
      let itemCount = {};
      
      for (let j = 0; j < currentData.items.length; j++) {
        let item = currentData.items[j];
        if (item.id === "-") {
          continue;
        }
        if (item.nodeType === undefined && (item.segments === undefined || item.segments.length <= 0)) {
          console.warn(item);
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
            ++totalItemCount;
            if (!(!!segment.clearIfScramble) && !(!!item.clearIfScramble) && !idsAddedDuringTheseSegments.has(segment.id)) {
              if (itemCount[segment.id]) {
                itemCount[segment.id] += 1;
              } else {
                itemCount[segment.id] = 1;
              }
              idsAddedDuringTheseSegments.add(segment.id);
            }
            if (!["thf", "aol", "alttp", "z3_rnd"].includes(currentGame)) {
              greaterItemSet.add(segment.id);
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
                  if (!["thf", "aol", "alttp", "z3_rnd"].includes(currentGame)) {
                    greaterItemSet.add(localeId);
                  }
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
          ++totalItemCount;
          if (!(!!item.clearIfScramble)) {
            if (itemCount[item.id]) {
              itemCount[item.id] += 1;
            } else {
              itemCount[item.id] = 1;
            }
          }
          if (!["thf", "aol", "alttp", "z3_rnd"].includes(currentGame)) {
            greaterItemSet.add(item.id);
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
              if (!["thf", "aol", "alttp", "z3_rnd"].includes(currentGame)) {
                greaterItemSet.add(localeId);
              }
            }
          }
          if (typeCount[item.nodeType]) {
            typeCount[item.nodeType] += 1;
          } else {
            typeCount[item.nodeType] = 1;
          }
        }
      }
      for (let j = 0; j < currentData.extras.length; j++) {
        let item = currentData.extras[j];
        ++totalExtraCount;
        if (typeCount[item.nodeType]) {
          typeCount[item.nodeType] += 1;
        } else {
          typeCount[item.nodeType] = 1;
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
    if (totalItemCount + totalExtraCount !== totalTypeCount) {
      console.warn(`count mismatch: ${totalItemCount + totalExtraCount} vs ${totalTypeCount}; please investigate!`);
    }
    console.debug("item IDs not used:", itemIdResults[1]);
    if (itemIdsWithoutGraphics[0].length > 0) {
      console.warn("doublecheck graphics for:", itemIdsWithoutGraphics[0]);
    }
  }
  
  function start() {
    
  }
  
  main.games = games;
  main.scanDataForLint = scanDataForLint;
  main.start = start;
})();