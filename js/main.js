let main = {
  
};

(() => {
  
  const games = {
    "d": "mrd",
    "m": "m1",
    "z": "mzm",
    "p": "mp",
    "b": "pb",
    "e": "mp2e",
    "h": "ph",
    "c": "mp3c",
    "2": "m2ros",
    "a": "am2r",
    "r": "msr",
    "s": "sm",
    "o": "mom",
    "f": "mf"
  };
  
  const data = {
    "mrd": {
      items: ["highJump", "bombB", "varia", "iceBeam", "metroidCapsule", "--", "wallJumpBoots", "springBall", "screwAttack", "waveBeam"],
      names: ["High Jump Boots", "Bombs", "Varia Suit", "Ice Beam", "Metroid Cell Capsule", "", "Wall Jump Boots", "Spring Ball", "Screw Attack", "Prototype Wave Beam"],
      expansions: ["-", "energyTank", "missileTank"],
      expansionNames: ["", "Energy Tanks", "Missile Tanks"],
      max: [0, 7, 31],
      misc: ["boss"],
      miscNames: ["Bosses"],
      miscCount: [2]
    },
    "m1": {
      items: ["morphBall", "varia", "longBeamA", "iceBeamA", "--", "bombB", "highJump", "screwAttack", "waveBeam"],
      names: ["Morph Ball", "Varia Suit", "Long Beam", "Ice Beam", "", "Bombs", "High Jump Boots", "Screw Attack", "Wave Beam"],
      expansions: ["energyTank", "missileTank"],
      expansionNames: ["Energy Tanks", "Missile Tanks"],
      max: [8, 21],
      misc: ["boss"],
      miscNames: ["Bosses"],
      miscCount: [2]
    },
    "mzm": {
      items: ["morphBall", "bombB", "varia", "gravitySuit", "fullPowerSuit", "--", "longBeamA", "chargeBeam", "plasmaBeam", "iceBeamA", "waveBeam", "--", "powerGrip", "spaceJump", "speedBoosterB", "highJump", "screwAttack"],
      names: ["Morph Ball", "Bombs", "Varia Suit", "Unknown Item 3 - Gravity Suit", "Fully Powered Suit", "", "Long Beam", "Charge Beam", "Unknown Item 1 - Plasma Beam", "Ice Beam", "Wave Beam", "", "Power Grip", "Unknown Item 2 - Space Jump", "Speed Booster", "High Jump Boots", "Screw Attack"],
      expansions: ["energyTank", "missileTank", "superMissileTank", "powerBombTank"],
      expansionNames: ["Energy Tanks", "Missile Tanks", "Super Missile Tanks", "Power Bomb Tanks"],
      max: [12, 50, 15, 9],
      misc: ["boss"],
      miscNames: ["Bosses"],
      miscCount: [2]
    },
    "mp": {
      items: ["-", "varia", "gravitySuit", "phazonSuit", "spaceJumpBoots", "--", "powerBeam", "chargeBeamB", "waveBeamA", "iceBeamB", "plasmaBeamB", "--", "missile", "superMissileA", "wavebuster", "iceSpreader", "flamethrower", "--", "morphBall", "bomb", "boostBall", "spiderBall", "powerBomb", "--", "combatVisor", "scanVisor", "thermalVisor", "xRayVisor", "grappleBeam"],
      names: ["-", "Varia Suit", "Gravity Suit", "Phazon Suit", "Space Jump Boots", "--", "Power Beam", "Charge Beam", "Wave Beam", "Ice Beam", "Plasma Beam", "--", "Missile Launcher", "Super Missile", "Wavebuster", "Ice Spreader", "Flamethrower", "--", "Morph Ball", "Bombs", "Boost Ball", "Spider Ball", "Power Bomb", "--", "Combat Visor", "Scan Visor", "Thermal Visor", "X-Ray Visor", "Grapple Beam"],
      expansions: ["energyTank", "missileTank", "powerBombTank", "-", "chozoArtifact"],
      expansionNames: ["Energy Tanks", "Missile Tanks", "Power Bomb Tanks", "", "Chozo Artifacts"],
      max: [14, 49, 4, 0, 12],
      misc: [],
      miscNames: [],
      miscCount: []
    },
    "mp2e": {
      items: ["-", "powerBeam", "combatVisor", "scanVisor", "morphBall", "chargeBeamC", "energyTransferModule", "--", "missile", "violetTranslator", "bomb", "amberTranslator", "spaceJumpBoots", "darkBeam", "lightBeam", "darkSuit", "--", "superMissileA", "emeraldTranslator", "boostBall", "seekerLauncher", "darkburst", "gravityBoost", "grappleBeam", "darkVisor", "--", "cobaltTranslator", "spiderBall", "powerBomb", "sunburst", "echoVisor", "annihilatorBeam", "sonicBoom", "lightSuit"],
      names: ["", "Power Beam", "Combat Visor", "Scan Visor", "Morph Ball", "Charge Beam", "Energy Transfer Module", "", "Missile Launcher", "Violet Translator", "Bombs", "Amber Translator", "Space Jump Boots", "Dark Beam", "Light Beam", "Dark Suit", "", "Super Missile", "Emerald Translator", "Boost Ball", "Seeker Launcher", "Darkburst", "Gravity Boost", "Grapple Beam", "Dark Visor", "", "Cobalt Translator", "Spider Ball", "Power Bombs", "Sunburst", "X-Ray Visor", "Annihilator Beam", "Sonic Boom", "Light Suit"],
      expansions: ["-", "energyTank", "missileTank", "beamAmmoExpansion", "powerBombTank", "-", "lightOfAetherA", "--", "-", "-", "darkAgonKey", "darkTorvusKey", "ingHiveKey", "skyTempleKey"],
      expansionNames: ["", "Energy Tanks", "Missile Tanks", "Beam Ammo Expansion", "Power Bomb Tanks", "-", "Sanctuary Energy Returned", "--", "", "", "Dark Agon Key", "Dark Torvus Key", "Ing Hive Key", "Sky Temple Key"],
      max: [0, 14, 49, 4, 6, 0, 0, 0, 0, 0, 3, 3, 3, 8],
      misc: [],
      miscNames: [],
      miscCount: []
    },
    "ph": {
      items: ["missile", "voltDriver", "magmaul", "shockCoil", "battlehammer", "judicator", "imperialist", "omegaCannon"],
      names: ["Missile Launcher", "Volt Driver", "Magmaul", "Shock Coil", "Battlehammer", "Judicator", "Imperialist", "Omega Cannon"],
      expansions: ["-", "-", "energyTank", "missileTank", "uaExpansion", "octolith", "--", "alimbicArtifactCA1", "alimbicArtifactAl1", "alimbicArtifactVDO1", "alimbicArtifactArc1", "alimbicArtifactCA2", "alimbicArtifactAl2", "alimbicArtifactVDO2", "alimbicArtifactArc2"],
      expansionNames: ["", "", "Energy Tanks", "Missile Tanks", "UA Expansion", "Octoliths", "", "Alimbic Artifacts: Celestial Archives 1", "Alimbic Artifacts: Alinos 1", "Alimbic Artifacts: VDO 1", "Alimbic Artifacts: Arcterra 1", "Alimbic Artifacts: Celestial Archives 2", "Alimbic Artifacts: Alinos 2", "Alimbic Artifacts: VDO 2", "Alimbic Artifacts: Arcterra 2"],
      max: [0, 0, 7, 9, 12, 8, 0, 3, 3, 3, 3, 3, 3, 3, 3],
      misc: [],
      miscNames: [],
      miscCount: []
    },
    "mp3c": {
      items: ["powerBeamA", "chargeBeam", "morphBall", "bombB", "spaceJumpBoots", "combatVisor", "scanVisor", "--", "hypermodeBeam", "plasmaBeamC", "novaBeamA", "missile", "iceMissile", "seekerLauncher", "shipMissile", "hyperMissile", "--", "boostBall", "spiderBall", "hyperBall", "grappleLasso", "grappleBeam", "grappleVoltage", "shipGrapple", "hyperGrapple", "--", "ped", "phazonSuit", "hazardShield", "-", "screwAttackA", "-", "commandVisorA", "corruptionXRayVisor"],
      names: ["Power Beam", "Charge Beam", "Morph Ball", "Bombs", "Space Jump Boots", "Combat Visor", "Scan Visor", "", "Hyper Beam", "Plasma Beam", "Nova Beam", "Missile","Ice Missile", "Seeker Launcher", "Ship Missile", "Hyper Missile", "", "Boost Ball", "Spider Ball", "Hyper Ball", "Grapple Lasso", "Grapple Swing", "Grapple Voltage", "Ship Grapple", "Hyper Grapple", "", "P.E.D. Suit", "Corrupted Hypermode", "Hazard Shield", "", "Screw Attack", "", "Command Visor", "X-Ray Visor"],
      expansions: ["energyTank", "missileTank", "shipMissileExpansion", "-", "theronianBomb", "pirateCode", "-", "energyCell"],
      expansionNames: ["Energy Tank", "Missile Expansion", "Ship Missile Expansion", "", "Theronian Bomb Components", "Pirate Code", "", "Energy Cell"],
      max: [14, 50, 8, 0, 3, 0, 0, 9],
      misc: [],
      miscNames: [],
      miscCount: []
    }, 
    "m2ros": {
      items: ["-", "-", "bombB", "spiderBall", "springBall", "--", "-", "varia", "highJump", "spaceJump", "screwAttack", "--", "-", "iceBeam", "waveBeamB", "spazerBeam", "plasmaBeam"],
      names: ["-", "Bombs", "Spider Ball", "Spring Ball", "", "Varia Suit", "High Jump Boots", "Space Jump", "Screw Attack", "", "Ice Beam", "Wave Beam", "Spazer Beam", "Plasma Beam"],
      expansions: ["energyTank", "missileTank", "-", "metroidDna", "-", "metroid"],
      expansionNames: ["Energy Tanks", "Missile Tanks", "", "Metroids", "", "Baby Metroid"],
      max: [6, 22, 0, 49, 0, 0],
      misc: [],
      miscNames: [],
      miscCount: []
    },
    "am2r": {
      items: ["morphBall", "varia", "gravitySuit", "chargeBeamA", "spazerBeam", "waveBeamB", "plasmaBeam", "iceBeam", "--", "bombB", "spiderBall", "springBall", "powerGrip", "highJump", "spaceJump", "speedBoosterB", "screwAttack"],
      names: ["Morph Ball", "Varia Suit", "Gravity Suit", "Charge Beam", "Spazer Beam", "Wave Beam", "Plasma Beam", "Ice Beam", "--", "Bombs", "Spider Ball", "Spring Ball", "Power Grip", "High Jump", "Space Jump", "Speed Booster", "Screw Attack"],
      expansions: [
        "energyTank", 
        "missileTank", 
        "superMissileTank", 
        "powerBombTank",
        "-", 
        "metroidDna", 
        "am2rPowerOrb", 
        "metroid"
        ],
      expansionNames: ["Energy Tanks", "Missile Tanks", "Super Missile Tanks", "Power Bomb Tanks", "", "Metroids", "Distribution Center Power", "Baby Metroid"],
      max: [10, 45, 10, 10, 0, 54, 0, 0],
      misc: [],
      miscNames: [],
      miscCount: []
    },
    "msr": {
      items: ["morphBall", "bombB", "spiderBall", "springBall", "-", "varia", "gravitySuit", "--", "scanPulse", "lightningShield", "beamBurst", "phaseDrift", "-", "highJump", "spaceJump", "--", "chargeBeamD", "iceBeamC", "waveBeam", "spazerBeamA", "plasmaBeamD", "grappleBeam", "screwAttack"],
      names: ["Morph Ball", "Bombs", "Spider Ball", "Spring Ball", "", "Varia Suit", "Gravity Suit", "", "Scan Pulse", "Lightning Shield", "Beam Burst", "Phase Drift", "", "High Jump Boots", "Space Jump", "", "Charge Beam", "Ice Beam", "Wave Beam", "Spazer Beam", "Plasma Beam", "Grapple Beam", "Screw Attack"],
      expansions: [
        "energyTank", 
        "missileTank", 
        "superMissileTank", 
        "powerBombTank", 
        "aeionExpansion", 
        "metroidDna", 
        "metroid"
        ],
      expansionNames: ["Energy Tanks", "Missile Tanks", "Super Missile Tanks", "Power Bomb Tanks", "Aeion Expansion", "", "Metroids", "Baby Metroid"],
      max: [9, 76, 29, 13, 14, 54, 0],
      misc: [],
      miscNames: [],
      miscCount: []
    },
    "sm": {
      items: ["morphBall", "bombB", "springBall", "screwAttack", "varia", "gravitySuit", "grappleBeam", "xRayScope", "--", "chargeBeamA", "spazerBeam", "iceBeam", "waveBeamB", "plasmaBeam", "highJump", "speedBoosterB", "spaceJump"],
      names: ["Morphing Ball", "Bombs", "Spring Ball", "Screw Attack", "Varia Suit", "Gravity Suit", "Grappling Beam", "X-Ray Scope", "--", "Charge Beam", "Spazer", "Ice Beam", "Wave Beam", "Plasma Beam", "High Jump Boots", "Speed Booster", "Space Jump"],
      expansions: ["energyTank", "missileTank", "superMissileTank", "powerBombTank", "reserveTank", "-", "-"],
      expansionNames: ["Energy Tanks", "Missile Tanks", "Super Missile Tanks", "Power Bomb Tanks", "Reserve Tanks", "", ""],
      max: [14, 46, 10, 10, 4, 0, 0],
      misc: ["boss"],
      miscNames: ["Bosses"],
      miscCount: [4]
    },
    "mom": {
      items: ["morphBall", "bombA", "missile", "superMissile", "seekerLauncher", "varia", "gravitySuit", "grappleBeam", "--", "diffusionBeam", "iceBeamA", "waveBeam", "plasmaBeamA", "speedBoosterA", "spaceJump", "screwAttack", "powerBomb"],
      names: ["Morph Ball", "Bombs", "Missiles", "Super Missiles", "Seeker Missiles", "Varia Feature", "Gravity Feature", "Grapple Beam", "--", "Diffusion Beam", "Ice Beam", "Wave Beam", "Plasma Beam", "Speed Booster", "Space Jump", "Screw Attack", "Power Bomb"],
      expansions: ["energyTank", "missileTank", "chargeAccel", "energyPart", "eRecoveryTank"],
      expansionNames: ["Energy Tanks", "Missile Tanks", "Accel Charges", "Energy Parts", "E-Recovery Tanks"],
      max: [5, 70, 6, 16, 4],
      misc: [],
      miscNames: [],
      miscCount: []
    },
    "mf": {
      items: ["missileA", "missile", "iceMissile", "superMissile", "-", "morphBall", "bomb", "powerBomb", "--", "chargeBeam", "spazerBeamA", "plasmaBeamA", "waveBeam", "iceBeamA", "--", "highJump", "speedBoost", "spaceJump", "screwAttack", "-", "varia", "gravitySuit", "fullPowerSuit"],
      names: ["Missiles", "Super Missiles", "Ice Missiles", "Diffusion Effect", "", "Morph Ball", "Bombs", "Power Bombs", "--", "Charge Beam", "Wide Beam", "Plasma Beam", "Wave Beam", "Ice Beam", "--", "High Jump Boots", "Speed Booster", "Space Jump", "Screw Attack", "", "Varia Suit", "Gravity Suit", "Final Suit"],
      expansions: ["energyTank", "missileTank", "powerBombTank", "securityL0", "securityL1", "securityL2", "securityL3", "securityL4"],
      expansionNames: ["Energy Tanks", "Missile Tanks", "Power Bomb Tanks", "Security Level 0", "Security Level 1", "Security Level 2", "Security Level 3", "Security Level 4"],
      max: [20, 48, 32, 0, 0, 0, 0, 0],
      misc: [],
      miscNames: [],
      miscCount: []
    },
  };
  
  function clickItem(e) {
    e.preventDefault();
    
    if (e.which === 1) { // left click
      if (e.target.classList) { // browser compatibility logic
        if (!e.target.classList.contains("deselected")) return;
        e.target.classList.remove("deselected");
      } else {
        if (e.target.className.has("deselected")) return;
        e.target.className += e.className.replace(/\bdeselected\b/g);
      }
    } else if (e.which == 3) { // right click
      if (e.target.classList) { // browser compatibility logic
        if (e.target.classList.contains("deselected")) return;
        e.target.classList.add("deselected");
      } else {
        let arr = e.target.className.split(" ");
        if (arr.indexOf("deselected") === -1) {
          e.target.className += " deselected";
        }
      }
    }
  }
  
  function clickExpansion(e) {
    e.preventDefault();
    
    let values = e.target.parentElement.querySelectorAll("p")[0].innerText.split(" ");
    let previous = parseInt(values[0]);
    let max = parseInt(values[2]);
    if (e.which === 1) { // left click
      if (previous >= max) return;
      previous++;
    } else if (e.which === 3) { // right click
      if (previous <= 0) return;
      previous--;
    } else {
      return;
    }
    values[0] = previous;

    e.target.parentElement.querySelectorAll("p")[0].innerText = values.join(" ");
  }
  
  function generate() {
    if (main.menu) {
      let menuPointer = document.getElementById("selection");
      if (menuPointer.classList) { // browser compatibility logic
        menuPointer.classList.remove("show-menu");
      } else {
        menuPointer.className += menuPointer.className.replace(/\bshow-menu\b/g);
      }
      
      let pointers = ["itemField", "expansions"];
      for (const pointer of pointers) {
        let target = document.getElementById(pointer);
        if (target.classList) { // browser compatibility logic
          target.classList.remove("hide-section");
        } else {
          target.className += target.className.replace(/\bhide-section\b/g);
        }
      }
      
      // section for main items
      for (let i = 0; i < main.workingData.items.length; i++) {
        if (main.workingData.items[i] === "--") {
          let breakage = document.createElement("div");
          if (breakage.classList) {
            breakage.classList.add("clear-both");
          } else {
            breakage.className = "clear-both";
          }
          document.getElementById("itemField").appendChild(breakage);
          continue;
        }
        
        let wrapper = document.createElement("div");
        wrapper.id = "item-" + main.workingData.items[i];
        if (wrapper.classList) {
          wrapper.classList.add("item");
        } else {
          wrapper.className = "item";
        }
        
        let image = document.createElement("img");
        if (image.classList) {
          image.classList.add("item-image");
          if (main.workingData.items[i] === "-") {
            image.classList.add("blank");
          } else {
            image.classList.add("deselected");
          }
        } else {
          if (main.workingData.items[i] === "-") {
            image.className = "item-image blank";
          } else {
            image.className = "item-image deselected";
          }
        }
        if (main.workingData.items[i] === "-") {
          image.src = "images/items/itemSphere.png";
        } else {
          image.src = "images/items/" + main.workingData.items[i] + ".png";
        }
        
        image.alt = main.workingData.names[i];
        image.height = 42;
        image.width = 42;
        
        wrapper.appendChild(image);
        if (main.workingData.items[i] !== "-") {
          wrapper.addEventListener("mousedown", clickItem);
          wrapper.addEventListener("contextmenu", (e) => { e.preventDefault(); });
        }
        
        document.getElementById("itemField").appendChild(wrapper);
      }
      
      // section for expansions and boss
      for (let i = 0; i < main.workingData.expansions.length + main.workingData.misc.length; i++) {
        if ((i >= main.workingData.expansions.length && main.workingData.misc[i] === "--") || (main.workingData.expansions[i] === "--")) {
          let breakage = document.createElement("div");
          if (breakage.classList) {
            breakage.classList.add("clear-both");
          } else {
            breakage.className = "clear-both";
          }
          document.getElementById("expansions").appendChild(breakage);
          continue;
        }
        
        let wrapper = document.createElement("div");
        let image = document.createElement("img");
        let maxCount = 0;
        if (i >= main.workingData.expansions.length) {
          let j = i - main.workingData.expansions.length;
          
          wrapper.id = "expansion-" + main.workingData.misc[j];
          image.src = "images/util/" + main.workingData.misc[j] + ".png";
          image.alt = main.workingData.miscNames[j];
          maxCount = main.workingData.miscCount[j];
        } else {
          wrapper.id = "expansion-" + main.workingData.expansions[i];
          
          if (main.workingData.expansions[i] === "-") {
            image.src = "images/items/itemSphere.png";
          } else {
            image.src = "images/items/" + main.workingData.expansions[i] + ".png";
          }
          
          image.alt = main.workingData.expansionNames[i];
          maxCount = main.workingData.max[i];
        }
        
        if (wrapper.classList) {
          wrapper.classList.add("expansion");
        } else {
          wrapper.className = "expansion";
        }
        
        if (image.classList) {
          image.classList.add("item-image");
          if (main.workingData.expansions[i] === "-") {
            image.classList.add("blank");
          }
          if (maxCount <= 0) {
            image.classList.add("deselected");
            wrapper.addEventListener("mousedown", clickItem);
          } else {
            wrapper.addEventListener("mousedown", clickExpansion);
          }
        } else {
          image.className = "item-image";
          if (main.workingData.expansions[i] === "-") {
            image.className += " blank";
          }
          if (maxCount <= 0) {
            image.className += " deselected";
            wrapper.addEventListener("mousedown", clickItem);
          } else {
            wrapper.addEventListener("mousedown", clickExpansion);
          }
        }
        image.height = 42;
        image.width = 42;
        
        wrapper.appendChild(image);
        if (main.workingData.expansions[i] !== "-") {
          if (maxCount > 0) {
            let label = document.createElement("p");
            label.innerText = "0 / " + maxCount;
            wrapper.appendChild(label);
          }
          
          wrapper.addEventListener("contextmenu", (e) => { e.preventDefault(); });
        }
        
        document.getElementById("expansions").appendChild(wrapper);
      }
    }
  }
  
  function validateStartup(e) {
    e.preventDefault();
    if (!main.menu) {
      let gameInput = document.forms["startupMenu"]["selectedGame"].value;
      
      if (gameInput === "") {
        let error = document.getElementsByClassName("gameError")[0];
        
        if (error.classList) { // browser compatibility logic
          error.classList.remove("hide-error");
        } else {
          error.className += error.className.replace(/\bhide-error\b/g);
        }
        
        return;
      }
      
      main.menu = true;
      main.currentGame = games[document.forms["startupMenu"]["selectedGame"].value];
      main.workingData = data[main.currentGame];
    
      generate();
    }
  }

  function init() {
    main.menu = false;
  }

  main.init = init;
  main.validateStartup = validateStartup;
})();