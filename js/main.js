let main = {
  
};

(() => {
  
  const games = {
    "rd": "mrd", // Metroid: Rogue Dawn (ROMhack)
    "m": "m1", // Metroid
    "1": "z1m1", // Metroid + The Legend of Zelda Cross-Randomizer
    "z": "mzm", // Metroid: Zero Mission
    "p": "mp", // Metroid Prime
    "b": "pb", // Metroid Prime Pinball
    "p2d": "p2d", // Prime 2D
    "e": "mp2e", // Metroid Prime 2: Echoes
    "v": "e_rnd", // Metroid Prime 2: Echoes (Randovania settings)
    "h": "ph", // Metroid Prime Hunters
    "c": "mp3c", // Metroid Prime 3: Corruption
    "ff": "mpff", // Metroid Prime: Federation Force
    "2": "m2ros", // Metroid II: Return of Samus
    "a": "am2r", // Another Metroid 2 Remake
    "r": "msr", // Metroid: Samus Returns
    "s": "sm", // Super Metroid
    "3": "smz3", // Super Metroid + The Legend of Zelda: A Link to the Past Cross-Randomizer
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
    
    let searchString = "?game=" + games[document.forms["startupMenu"]["selectedGame"].value];
    
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
    if (document.forms["startupMenu"]["selectedLocale"].value !== "other") {
      searchString += "&l=" + document.forms["startupMenu"]["selectedLocale"].value.replace(/[^\w\s]/gi, '');
    }
    location.search = searchString;
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
  
  main.handleTimerSelection = handleTimerSelection;
  main.handleSpriteSelection = handleSpriteSelection;
  main.useSprites = false;
  main.showTotals = false;
  main.showTimer = false;
  main.useKeyslots = false;
  main.games = games;
  main.validateStartup = validateStartup;
  main.start = start;
})();