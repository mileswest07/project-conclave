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
  
  function collateAllTypes() {
    let typeCollection = new Set();
    let typeCount = {};
    
    let gamesKeys = [...Object.values(games)];
    
    for (let i = 0; i < gamesKeys.length; i++) {
      let currentGame = gamesKeys[i];
      let currentData = rawData[currentGame];
      
      for (let j = 0; j < currentData.items.length; j++) {
        let item = currentData.items[j];
        if (item.id === "-") {
          continue;
        }
        if (item.nodeType === undefined && (item.segments === undefined || item.segments.length <= 0)) {
          console.warn(item);
        }
        if (item.segments && item.segments.length > 0) {
          for (let k = 0; k < item.segments.length; k++) {
            let segment = item.segments[k];
            if (segment.id === "-") {
              continue;
            }
            if (segment.nodeType === undefined) {
              console.warn(item, segment);
            }
            typeCollection.add(segment.nodeType);
            if (typeCount[segment.nodeType]) {
              typeCount[segment.nodeType] += 1;
            } else {
              typeCount[segment.nodeType] = 1;
            }
          }
        } else {
          typeCollection.add(item.nodeType);
          if (typeCount[item.nodeType]) {
            typeCount[item.nodeType] += 1;
          } else {
            typeCount[item.nodeType] = 1;
          }
        }
      }
      for (let j = 0; j < currentData.extras.length; j++) {
        let item = currentData.extras[j];
        typeCollection.add(item.nodeType);
        if (typeCount[item.nodeType]) {
          typeCount[item.nodeType] += 1;
        } else {
          typeCount[item.nodeType] = 1;
        }
      }
    }
    
    typeCollection = [...typeCollection].sort();
    
    console.debug(typeCount);
  }
  
  function start() {
    
  }
  
  main.games = games;
  main.collateAllTypes = collateAllTypes;
  main.start = start;
})();