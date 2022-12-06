let explorer = {
  
};

let interaction = {
  readyPan: false,
  prev: {
    x: 0,
    y: 0
  },
  max: [
  {},
  {
    x: 144,
    y: 144,
    zoomX: 1,
    zoomY: 1
  }
  ],
  min: {
    x: 0,
    y: 0
  }
};

(() => {
  
  const iconType = {
    "none": 0,
    "circle": 1,
    "square": 2,
    "rhombus": 3,
    "wedge": 4,
    "arrow_up": 5,
    "arrow_down": 6,
    "arrow_left": 7,
    "arrow_right": 8,
    "pentagon": 9,
    "hexagon": 10
  };
  
  const nodeType = [
    "none",
    "start",
    "elevator",
    "boss", // 12          G
    "save", // 14          u
    "lock",
    "oneway",
    "unreq", // 15         u
    "key", // 460          r?
    "empty",
    "other",
    "slot", // 8           S
    "access", // 20        A?
    "end",
    "another",
    "unknown",
    "toll",
    /*
 G  area: 18
 r? artifact: 93
 G  easter: 10
 G? event: 60
 u? expansion: 78
 G? goal: 81
 G? map: 34
 u  recharge: 15
 G  teleport: 12
 S  toggle: 2
 r? trigger: 153
    */
  ];
  
  const digitPattern = /\d+/g;
  
  function sortingNumbers(a, b) {
    return a - b;
  }
  
  function sortingIds(a, b) {
    return a.id - b.id;
  }
  
  function validateStartup(e) {
    e.preventDefault();
    let gameInput = document.forms["startupMenu"]["selectedGame"].value;
    const masterFilter = [...Object.keys(main.games)];
    
    if (gameInput === "") {
      let error = document.getElementsByClassName("gameError")[0];
      
      if (error.classList) { // browser compatibility logic
        error.classList.remove("hide-error");
      } else {
        error.className += error.className.replace(/\bhide-error\b/g);
      }
      
      return;
    }
    
    let searchString = "?game=" + main.games[document.forms["startupMenu"]["selectedGame"].value];
    
    if (document.forms["startupMenu"]["useSprites"].checked) {
      searchString += "&s=true";
    }
    if (document.forms["startupMenu"]["useDarkMode"].checked) {
      searchString += "&d=true";
    }
    if (document.forms["startupMenu"]["isRandom"].checked) {
      searchString += "&r=true";
    }
    if (document.forms["startupMenu"]["colorblind"].checked) {
      searchString += "&c=true";
    }
    if (document.forms["startupMenu"]["useAdvancedColors"].checked) {
      searchString += "&adv=true";
    }
    if (document.forms["startupMenu"]["separateAreas"].checked) {
      searchString += "&sep=true";
    }
    if (document.forms["startupMenu"]["selectedLocale"].value !== "other") {
      searchString += "&l=" + document.forms["startupMenu"]["selectedLocale"].value.replace(/[^\w\s]/gi, '');
    }
    location.search = searchString;
  }
  
  function generate(destinationId) {
    const destination = document.getElementById(destinationId);
    
    cursor.move(0, 0);
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
      
      if (!rawData.hasOwnProperty(incomingGame) || !rawData[incomingGame].hasOwnProperty("map") || !(rawData[incomingGame].map.length > 0)) {
        console.error("not ready");
        console.debug(rawData[incomingGame])
        return;
      }
      
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
      explorer.useSprites = willUseSprites;
      
      let willBeRandomized = !!queryDict.r;
      willBeRandomized = !!JSON.parse(willBeRandomized);
      explorer.goRandom = willBeRandomized;
      
      let willBeColorless = !!queryDict.c;
      willBeColorless = !!JSON.parse(willBeColorless);
      explorer.allowColors = !willBeColorless;
      
      let willColorAdvanced = !!queryDict.adv;
      willColorAdvanced = !!JSON.parse(willColorAdvanced);
      explorer.advancedColors = willColorAdvanced;
      
      let willConsolidateAreas = !!queryDict.sep;
      willConsolidateAreas = !!JSON.parse(willConsolidateAreas);
      explorer.separateAreas = willConsolidateAreas;
      
      let selectedLocale = queryDict.l || '';
      explorer.useLocale = selectedLocale.length ? selectedLocale : null;
      
      if (rawData.hasOwnProperty(incomingGame)) {
        let game = null;
        for (const [key, value] of Object.entries(main.games)) {
          if (value == incomingGame) {
            game = key;
            break;
          }
        }
        explorer.currentGame = incomingGame;
        if (document.body.classList) {
          document.body.classList.add("game-" + explorer.currentGame);
        } else {
          document.body.className += " game-" + explorer.currentGame;
        }
        explorer.workingData = rawData[explorer.currentGame];
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
        
        console.debug(queryDict, incomingGame);
        
        explorer.generate("itemField");
      }
    }
  }
  
  explorer.nodeType = nodeType;
  explorer.iconType = iconType;
  explorer.validateStartup = validateStartup;
  explorer.generate = generate;
  explorer.start = start;
})();