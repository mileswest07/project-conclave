let main = {
  
};

(() => {
  
  const games = {
    "rd": "mrd", // Metroid: Rogue Dawn (ROMhack)
    "m": "m1", // Metroid
    //"mz": "z1m1", // Metroid + The Legend of Zelda Cross-Randomizer
    "z": "mzm", // Metroid: Zero Mission
    "p": "mp", // Metroid Prime
    "b": "pb", // Metroid Prime Pinball
    "p2d": "p2d", // Prime 2D
    "h": "ph", // Metroid Prime Hunters
    "e": "mp2e", // Metroid Prime 2: Echoes
    "v": "e_rnd", // Metroid Prime 2: Echoes (Randovania settings)
    "c": "mp3c", // Metroid Prime 3: Corruption
    "ff": "mpff", // Metroid Prime: Federation Force
    "ros": "m2ros", // Metroid II: Return of Samus
    "mc": "mcon", // Metroid Confrontation
    "a": "am2r", // Another Metroid 2 Remake
    "r": "msr", // Metroid: Samus Returns
    "s": "sm", // Super Metroid
    //"smz": "smz3", // Super Metroid + The Legend of Zelda: A Link to the Past Cross-Randomizer
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
  
  const z1m1Filter = ["z", "rd", "p", "b", "p2d", "h", "e", "v", "c", "ff","ros", "mc", "a", "r", "s", "o", "f", "n", "t", "d", "z2", "z3", "z3r",];
  const smz3Filter = ["m", "rd", "z", "p", "b", "p2d", "h", "e", "v", "c", "ff","ros", "mc", "a", "r", "o", "f", "n", "t", "d", "z1", "z2", "z3",];
  const noFangamesFilter = ["rd", "mc", "a", "t", "p2d", "n",];
  const noRandomizersFilter = ["v", "z3r",];
  const noZeldaFilter = ["z1", "z2", "z3", "z3r",];
  const noSamusFilter = ["m", "z", "p", "b", "p2d", "h", "e", "v", "c", "ros", "mc", "a", "r", "s", "o", "f", "n", "t", "d",];
  const noPrimeFilter = ["p", "b", "p2d", "h", "e", "v", "c", "ff",];
  const noMainlineFilter = ["m", "z", "ros", "r", "s", "f", "d",];
  const masterFilter = [...Object.keys(games)];
  
  function filterOut([...filter]) {
    let copy = {...this};
    
    filter.forEach(prop => {
      delete copy[prop];
    });
    
    return {...copy};
  }
  
  function validateStartup(e) {
    e.preventDefault();
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
    
    let searchString = "?game=";
    
    if (document.forms["startupMenu"]["selectedGame"].value === "scramble") {
      searchString += "scramble";
    } else {
      searchString += games[document.forms["startupMenu"]["selectedGame"].value];
    }
    
    if (document.forms["startupMenu"]["useSprites"].checked) {
      searchString += "&s=true";
    }
    if (document.forms["startupMenu"]["useDarkMode"].checked) {
      searchString += "&d=true";
    }
    if (document.forms["startupMenu"]["showTotals"].checked) {
      searchString += "&pt=true";
    }
    if (document.forms["startupMenu"]["showTimer"].checked) {
      searchString += "&t=true";
    }
    if (document.forms["startupMenu"]["useKeyslots"].checked) {
      searchString += "&k=true";
    }
    if (document.forms["startupMenu"]["scrambleSync"].checked) {
      searchString += "&sync=true";
    }
    if (document.forms["startupMenu"]["selectedGame"].value === "scramble") {
      let formToFind = document.forms["startupMenu"];
      let selectedGames = [];
      
      for (let i = 0; i < masterFilter.length; i++) {
        let formItem = formToFind[masterFilter[i]];
        if (formItem && formItem.checked) {
          selectedGames.push(formItem.value);
        }
      }
      if (selectedGames.length) {
        searchString += "&games=" + selectedGames.join(',');
      } else {
        searchString += "&games=" + masterFilter.join(',');
      }
    }
    
    if (document.forms["startupMenu"]["selectedLocale"].value !== "other") {
      searchString += "&l=" + document.forms["startupMenu"]["selectedLocale"].value.replace(/[^\w\s]/gi, '');
    }
    location.search = searchString;
  }
  
  // scrambleStart
  function scrambleStart(gamesList) {
    main.showTotals = false; // CURRENTLY UNDER CONSTRUCTION
    main.showTimer = false; // CURRENTLY UNDER CONSTRUCTION
    main.useKeyslots = false;
    
    if (document.body.classList) {
      document.body.classList.add("game-scramble");
    } else {
      document.body.className += " game-scramble";
    }
    main.isScramble = true;
    
    const targetingData = document.forms["startupMenu"]["selectedGame"].options;
    
    let targetSection = document.getElementById("itemField");
    if (targetSection.classList) {
      targetSection.classList.add("parent-flex");
    } else {
      targetSection.className = "parent-flex";
    }
    
    for (let i = 0; i < gamesList.length; i++) {
      const key = gamesList[i];
      const value = games[key];
      
      feature.currentGame = value;
      const itemFieldName = "itemField" + key;
      
      let foundItem = null;
      let gameName = "";
      for (let i = 0; i < targetingData.length; i++) {
        if (targetingData[i].value == key) {
          foundItem = targetingData[i];
        }
      }
      if (foundItem) {
        gameName += foundItem.innerHTML;
      }
      
      let newSection = document.createElement("section");
      if (newSection.classList) {
        newSection.classList.add("flex-field");
        newSection.classList.add("child-field");
        newSection.classList.add("game-" + feature.currentGame);
      } else {
        newSection.className = "flex-field child-field game-" + feature.currentGame
      }
      newSection.id = itemFieldName;
      
      let gameTitle = document.createElement("h4");
      gameTitle.innerText = gameName;
      newSection.appendChild(gameTitle);
      
      targetSection.appendChild(newSection);
      
      feature.workingData = rawData[feature.currentGame];
      feature.generate(itemFieldName);
      
      // CURRENTLY UNDER CONSTRUCTION
      /* if (main.showTotals) {
        let targetHeader = targetSection.getElementsByTagName("h4");
        targetHeader = targetHeader[targetHeader.length - 1];
        feature.renderPercentage(targetHeader);
      } */
    }
    
    let target = document.getElementById("itemField");
    if (target.classList) { // browser compatibility logic
      target.classList.remove("hide-section");
    } else {
      target.className += target.className.replace(/\bhide-section\b/g);
    }
    let menuPointer = document.getElementById("selection");
    menuPointer.remove();
    feature.currentGame = "scramble"; // to make Extreme Labs and Dash Spell work
  }
  
  function start() {
    if (location.search.length) {
      const queryParams = location.search.split('?')[1].split('&');
      let queryDict = {};
      for (let i = 0; i < queryParams.length; i++) {
        const kv = queryParams[i].split('=');
        let k = kv[0];
        let val = kv[1];
        val = decodeURIComponent(val);
        val = val.replace(/\+/g, ' ');
        
        queryDict[k] = val;
      }
      let incomingGame = queryDict.game;
      
      if (document.body.classList) {
        document.body.classList.add("game-mode");
      } else {
        document.body.className += "game-mode";
      }
      
      let willUseDarkMode = !!queryDict.d;
      willUseDarkMode = !!JSON.parse(willUseDarkMode);
      if (willUseDarkMode) {
        if (document.body.classList) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.className += "dark-mode";
        }
      }
      let willUseSprites = !!queryDict.s;
      willUseSprites = !!JSON.parse(willUseSprites);
      main.useSprites = willUseSprites;
      
      let willShowTotals = !!queryDict.pt;
      willShowTotals = !!JSON.parse(willShowTotals);
      main.showTotals = willShowTotals;
      
      let willShowTimer = !!queryDict.t;
      willShowTimer = !!JSON.parse(willShowTimer);
      main.showTimer = willShowTimer;
      
      let willUseKeyslots = !!queryDict.k;
      willUseKeyslots = !!JSON.parse(willUseKeyslots);
      main.useKeyslots = willUseKeyslots;
      
      let selectedLocale = queryDict.l || '';
      main.useLocale = selectedLocale.length ? selectedLocale : null;
      
      if (incomingGame === "scramble") {
        let gamesList = queryDict.games.split(',');
        let willSyncClicks = !!queryDict.sync;
        willSyncClicks = !!JSON.parse(willSyncClicks);
        main.scrambleSync = willSyncClicks;
        main.scrambleStart(gamesList);
        return;
      }
      
      if (rawData.hasOwnProperty(incomingGame)) {
        let game = null;
        for (const [key, value] of Object.entries(games)) {
          if (value == incomingGame) {
            game = key;
            break;
          }
        }
        feature.currentGame = incomingGame;
        if (document.body.classList) {
          document.body.classList.add("game-" + feature.currentGame);
        } else {
          document.body.className += " game-" + feature.currentGame;
        }
        feature.workingData = rawData[feature.currentGame];
        let targetingData = document.forms["startupMenu"]["selectedGame"].options;
        let foundItem = null;
        for (let i = 0; i < targetingData.length; i++) {
          if (targetingData[i].value == game) {
            foundItem = targetingData[i];
          }
        }
        if (foundItem) {
          document.title += " - " + foundItem.innerHTML;
        }
        
        let menuPointer = document.getElementById("selection");
        menuPointer.remove();
        
        let target = document.getElementById("itemField");
        if (target.classList) { // browser compatibility logic
          target.classList.remove("hide-section");
        } else {
          target.className += target.className.replace(/\bhide-section\b/g);
        }
        
        feature.generate("itemField");
      }
    }
  }
  
  function handleTimerSelection(e) {
    let target = document.getElementById("ifShowingTimer");
    if (e.target.checked) {
      if (target.classList) { // browser compatibility logic
        target.classList.remove("hidden");
      } else {
        target.className += target.className.replace(/\bhidden\b/g);
      }
    } else {
      if (target.classList) { // browser compatibility logic
        target.classList.add("hidden");
      } else {
        target.className += " hidden";
      }
    }
  }
  
  function handleSpriteSelection(e) {
    let targetA = document.getElementById("ifShowingSprites");
    let targetB = document.getElementById("ifNotShowingSprites");
    if (e.target.checked) {
      if (targetA.classList) { // browser compatibility logic
        targetA.classList.remove("hidden");
        targetB.classList.add("hidden");
      } else {
        targetA.className += target.className.replace(/\bhidden\b/g);
        targetB.className += " hidden";
      }
    } else {
      if (targetA.classList) { // browser compatibility logic
        targetA.classList.add("hidden");
        targetB.classList.remove("hidden");
      } else {
        targetA.className += " hidden";
        targetB.className += target.className.replace(/\bhidden\b/g);
      }
    }
  }
  
  function handleSyncSelection(e) {
    let targetA = document.getElementById("isSyncingItems");
    if (e.target.checked) {
      if (targetA.classList) { // browser compatibility logic
        targetA.classList.remove("hidden");
      } else {
        targetA.className += target.className.replace(/\bhidden\b/g);
      }
    } else {
      if (targetA.classList) { // browser compatibility logic
        targetA.classList.add("hidden");
      } else {
        targetA.className += " hidden";
      }
    }
  }
  
  function handleDropdownSelection(e) {
    let keyslotTarget = document.getElementById("ifKeyslotsExist");
    let scrambleSyncTarget = document.getElementById("ifScrambleSelected");
    let showTotalsPrompt = document.getElementById("showTotalsPrompt");
    let showTimerTarget = document.getElementById("showTimerPrompt");
    let scrambleSelectionTarget = document.getElementById("scrambleSelectionGroup");
    
    if (["m", "ros"].includes(e.target.value)) {
      if (keyslotTarget.classList) {
        keyslotTarget.classList.remove("hidden");
      } else {
        keyslotTarget.className += target.className.replace(/\bhidden\b/g);
      }
    } else {
      if (keyslotTarget.classList) {
        keyslotTarget.classList.add("hidden");
      } else {
        keyslotTarget.className += " hidden";
      }
    }
    
    if (e.target.value === "scramble") {
      if (scrambleSyncTarget.classList) {
        scrambleSyncTarget.classList.remove("hidden");
        scrambleSelectionTarget.classList.remove("hidden");
        showTotalsPrompt.classList.add("hidden");
        showTimerTarget.classList.add("hidden");
      } else {
        scrambleSyncTarget.className += target.className.replace(/\bhidden\b/g);
        scrambleSelectionTarget.className += target.className.replace(/\bhidden\b/g);
        showTotalsPrompt.className += " hidden";
        showTimerTarget.className += " hidden";
      }
    } else {
      if (scrambleSyncTarget.classList) {
        scrambleSyncTarget.classList.add("hidden");
        scrambleSelectionTarget.classList.add("hidden");
        showTotalsPrompt.classList.remove("hidden");
        showTimerTarget.classList.remove("hidden");
      } else {
        scrambleSyncTarget.className += " hidden";
        scrambleSelectionTarget.className += " hidden";
        showTotalsPrompt.className += target.className.replace(/\bhidden\b/g);
        showTimerTarget.className += target.className.replace(/\bhidden\b/g);
      }
    }
  }
  
  function handlePresetSelection(e) {
    if (e.type === "change") {
      let newValue = e.target.value;
      let filterOutList = [];
    
      let selectedGames = {...games};
      selectedGames.fOut = filterOut;
      
      switch (newValue) {
        case 'primary':
          filterOutList = [...noZeldaFilter];
          break;
        case 'z1m1':
          filterOutList = [...z1m1Filter];
          break;
        case 'smz3':
          filterOutList = [...smz3Filter];
          break;
        case 'no_fangames':
          filterOutList = [...noFangamesFilter];
          break;
        case 'no_zelda':
          filterOutList = [...noZeldaFilter];
          break;
        case 'no_samus':
          filterOutList = [...noSamusFilter];
          break;
        case 'no_prime':
          filterOutList = [...noPrimeFilter];
          break;
        case 'no_main':
          filterOutList = [...noMainlineFilter];
          break;
        case 'none':
          filterOutList = [...masterFilter];
          break;
        case 'all':
          filterOutList = [];
          break;
        default:
          break;
      }
      
      selectedGames = selectedGames.fOut(filterOutList);
      
      let cleanedSelection = [];
    
      for (const [key, value] of Object.entries(selectedGames)) {
        if (typeof value === "function") {
          continue;
        }
        cleanedSelection.push(key);
      }
      
      let formToFind = document.forms["startupMenu"];
      
      for (let i = 0; i < masterFilter.length; i++) {
        let formItem = formToFind[masterFilter[i]];
        if (formItem) {
          formItem.checked = cleanedSelection.includes(masterFilter[i]);
        }
      }
    }
  }
  
  main.handleTimerSelection = handleTimerSelection;
  main.handleSpriteSelection = handleSpriteSelection;
  main.handleSyncSelection = handleSyncSelection;
  main.handleDropdownSelection = handleDropdownSelection;
  main.handlePresetSelection = handlePresetSelection;
  main.useSprites = false;
  main.showTotals = false;
  main.showTimer = false;
  main.useKeyslots = false;
  main.isScramble = false;
  main.scrambleSync = false;
  main.games = games;
  main.validateStartup = validateStartup;
  main.scrambleStart = scrambleStart;
  main.start = start;
})();