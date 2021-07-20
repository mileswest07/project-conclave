let main = {
  
};

(() => {
  
  const games = {
    "rd": "mrd", // Metroid: Rogue Dawn (ROMhack)
    "m": "m1", // Metroid
    "z": "mzm", // Metroid: Zero Mission
    "p": "mp", // Metroid Prime
    "b": "pb", // Metroid Prime Pinball
    "p2d": "p2d", // Prime 2D
    "e": "mp2e", // Metroid Prime 2: Echoes
    "v": "e_rnd", // Metroid Prime 2: Echoes (Randovania settings)
    "h": "ph", // Metroid Prime Hunters
    "c": "mp3c", // Metroid Prime 3: Corruption
    "2": "m2ros", // Metroid II: Return of Samus
    "a": "am2r", // Another Metroid 2 Remake
    "r": "msr", // Metroid: Samus Returns
    "s": "sm", // Super Metroid
    "3": "smz3", // Super Metroid + The Legend of Zelda: A Link to the Past Cross-Randomizer
    "o": "mom", // Metroid: Other M
    "f": "mf", // Metroid Fusion
    // "d": "md" // Metroid Dread
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
    
    location.search = "?game=" + games[document.forms["startupMenu"]["selectedGame"].value];
  }
  
  function start() {
    if (location.search.length) {
      let incomingGame = location.search.split('=')[1];
      if (rawData.hasOwnProperty(incomingGame)) {
        let game = null;
        for (const [key, value] of Object.entries(games)) {
          if (value == incomingGame) {
            game = key;
            break;
          }
        }
        feature.currentGame = incomingGame;
        feature.workingData = rawData[feature.currentGame];
        let targetingData = document.forms["startupMenu"]["selectedGame"].options;
        let foundItem = null;
        for (let i = 0; i < targetingData.length; i++) {
          if (targetingData[i].value == game) {
            foundItem = targetingData[i];
          }
        }
        if (foundItem) {
          let currentTitle = document.title;
          document.title = currentTitle + " - " + foundItem.innerHTML;
        }
        feature.generate();
      }
    }
  }
  
  main.useSprites = false;
  main.games = games;
  main.validateStartup = validateStartup;
  main.start = start;
})();