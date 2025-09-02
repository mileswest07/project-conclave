// main.js
/*
  This file is filled with several utility and common methods and dictionaries for use across the whole Project.
  Messing with the data and methods in here could have disparaging effects in the site's functionality.
  ! ! ! PROCEED WITH CAUTION ! ! !
*/

let main = {
  
  /*
    Dictionary of games and titles supported
    
    Keys: the values to be used by the HTML control components and browser query string
    Values: the externally-named JSON files and internal property values attributed to those games
  */
  games: {
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
    "t": "mttne", // Metroid: The Threat Never Ends
    "d": "md", // Metroid Dread
    "z1": "thf", // The Legend of Zelda
    "z2": "aol", // Zelda 2: The Adventure of Link
    "z3": "alttp", // The Legend of Zelda: A Link to the Past
    "sotn": "sotn", // Castlevania: Symphony of the Night (PSX)
  },
  
  /*
    Local directory leading to the JSON files containing game data;
    no trailing or starting slashes needed
  */
  jsonDir: 'data',
};

(() => {
  
  /*
    Current list of games for unification debug methods to track.
    Should ignore games that don't need to be tracked for usage.
    
    Currently only targeting official Metroid titles.
  */
  const checklistGameList = ["m1","mzm","mp","pb","ph","mp2e","mp3c","m2ros","msr","sm","mom","mf","md"];
  
  
  /*
    Utility function. Makes copies of an array applying a filter to it. Entries that qualify under the filter will be
    added to the first array, and those that do not qualify will apply to the second array.
    
    @param baseArray Original list of values; will not be edited.
    @param predicate The function which determines whether array goes to Left (returns true) or Right (returns false)
  */
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
  
  /*
    Debugging function to generate a new master list of placeholder IDs.
    Depends upon the style ruleset in iconMapping.css.
    Returns an object, a new masterIDList.
  */
  function grabAllPlaceholderIds() {
    let runningString = '';
    const foundStyleSheets = document.styleSheets;
    for (let i = 0; i < foundStyleSheets.length; i++) {
      const sheet = foundStyleSheets[i];
      try {
        const ruleset = sheet.rules || sheet.cssRules;
        if (ruleset && sheet && sheet.ownerNode && sheet.ownerNode.attributes && sheet.ownerNode.attributes.href) {
          let cssFile = sheet.ownerNode.attributes.href.nodeValue;
          for (let j = 0; j < ruleset.length; j++) {
            let splitSelector = ruleset[j].selectorText.split(',');
            if (splitSelector.length > 1) {
              for (let k = 0; k < splitSelector.length; k++) {
                let isolatedSelector = splitSelector[k].trim();
                
                let actualId = isolatedSelector.split('.item-image.');
                if (actualId.length > 1 && actualId[0].length === 0) {
                  if (runningString.length > 0) {
                    runningString += `, `
                  }
                  runningString += `"${actualId[1]}"`
                }
              }
            } else {
              let actualId = ruleset[j].selectorText.split('.item-image.');
              if (actualId.length > 1 && actualId[0].length === 0) {
                if (runningString.length > 0) {
                  runningString += `, `
                }
                runningString += `"${actualId[1]}"`
              }
            }
          }
        }
      } catch (e) {
        console.warn("cannot access", sheet.href, e);
      }
    }
    
    return runningString.replace(/"/g, '').split(', ');
  }
  
  /*
    Debugging function to generate a new master list of MZM-style items, complete with usage tracking values.
    Depends upon the style ruleset in allspritesMapping.css.
    Returns an object, a new unifiedIDCollection.
  */
  function grabAllMZMSprites() {
    let runningObject = {};
    
    const foundStyleSheets = document.styleSheets;
    for (let i = 0; i < foundStyleSheets.length; i++) {
      const sheet = foundStyleSheets[i];
      try {
        const ruleset = sheet.rules || sheet.cssRules;
        if (ruleset && sheet && sheet.ownerNode && sheet.ownerNode.attributes && sheet.ownerNode.attributes.href) {
          let cssFile = sheet.ownerNode.attributes.href.nodeValue;
          if (cssFile === 'allspritesMapping.css') {
            for (let j = 0; j < ruleset.length; j++) {
              let splitSelector = ruleset[j].selectorText.split(',');
              if (splitSelector.length > 1) {
                for (let k = 0; k < splitSelector.length; k++) {
                  let isolatedSelector = splitSelector[k].trim();
                  
                  let actualId = isolatedSelector.split('.item-image.');
                  if (actualId.length > 1) {
                    if (actualId[0].includes('.game-')) {
                      let gameLongerName = actualId[0].split('.game-');
                      let gameId = gameLongerName[1].split(' .usesAllSprites ');
                      gameId = gameId[0];
                      
                      if (!runningObject.hasOwnProperty(gameId)) {
                        runningObject[gameId] = '';
                      }
                      
                      if (runningObject[gameId].length > 0) {
                        runningObject[gameId] += `, `
                      }
                      runningObject[gameId] += `${actualId[1]}`
                    }
                  }
                }
              } else {
                let actualId = ruleset[j].selectorText.split('.item-image.');
                if (actualId.length > 1) {
                  if (actualId[0].includes('.game-')) {
                    let gameLongerName = actualId[0].split('.game-');
                    let gameId = gameLongerName[1].split(' .usesAllSprites ');
                    gameId = gameId[0];
                    
                    if (!runningObject.hasOwnProperty(gameId)) {
                      runningObject[gameId] = '';
                    }
                    
                    if (runningObject[gameId].length > 0) {
                      runningObject[gameId] += `, `
                    }
                    runningObject[gameId] += `${actualId[1]}`
                  }
                }
              }
            }
          }
        }
      } catch (e) {
        console.warn("cannot access", sheet.href, e);
      }
    }
    
    let returnObject = {};
    
    for (const [game, runningString] of Object.entries(runningObject)) {
      let arrayOfIds = runningString.split(', ');
      let setOfIds = new Set(arrayOfIds);
      let filteredArray = Array.from(setOfIds);
      let sortedArray = filteredArray.sort();
      let gameObject = {};
      for (let i = 0; i < sortedArray.length; i++) {
        gameObject[sortedArray[i]] = 0;
      }
      returnObject[game] = gameObject;
    }
    
    return {...returnObject};
  }
  
  async function scanDataForLint(doProcessItemOrder = true, doProcessUnifiedSprites = true) {
    let greaterItemSet = new Set();
    let typeCount = {};
    let dupesPerGame = {};
    let totalItemCount = 0;
    let totalExtraCount = 0;
    let totalBossCount = 0;
    let totalTypeCount = 0;
    let gameExceptionList = ["thf", "aol", "alttp", "sotn"];
    let aFailureHasOccurred = false;
    
    console.group("Scanning Data for Lint");
    
    let masterIDList = grabAllPlaceholderIds();
    let unifiedIDCollection = grabAllMZMSprites();
    
    let gamesKeys = [...Object.values(main.games)];
    
    if (doProcessItemOrder) {
      console.groupCollapsed("Item Order report");
    }
    
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
                unifiedIDCollection[currentGame][propSprite] += 1;
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
              unifiedIDCollection[currentGame][propSprite] += 1;
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
          if (!["mpff", "thf", "aol", "alttp", "sotn"].includes(currentGame) && missingItems.length) {
            console.debug("   missing items:", missingItems.map(item => `${item.name} (${item.nodeType})`));
          }
          if (!["mpff", "thf", "aol", "alttp", "sotn"].includes(currentGame) && allSegments.length) {
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
    
    if (doProcessItemOrder) {
      console.groupEnd();
    }
    
    for (const [keytype, count] of Object.entries(typeCount)) {
      totalTypeCount += count;
    }
    
    greaterItemSet = [...greaterItemSet];
    
    let itemIdResults = partition(masterIDList, (eachItem, index, allItems) => greaterItemSet.includes(eachItem));
    let itemIdsWithoutGraphics = partition(greaterItemSet, (eachItem, index, allItems) => !masterIDList.includes(eachItem));
    
    console.groupCollapsed("Total Linting report");
    console.debug("items list:", greaterItemSet);
    console.debug("total item count:", totalItemCount);
    console.info("dupes per game:", dupesPerGame);
    console.debug("types and count:", typeCount);
    console.debug("total number by type count:", totalTypeCount);
    if (totalItemCount + totalBossCount + totalExtraCount !== totalTypeCount) {
      console.warn(`count mismatch: ${totalItemCount + totalExtraCount} vs ${totalTypeCount}; please investigate!`);
    }
    /*
      Indicates there is a placeholder icon on placeholders.png ,
      that is not allocated to any items in data/*.json .
      Note that this is meant to cover icons under properties [items, checklistLayout, and extras],
      but does not cover icons that may be used under other properties [bosses, areas, or map].
      This code may be updated in the future to include those. 
    */
    console.info("item IDs not used:", itemIdResults[1]);
    if (itemIdsWithoutGraphics[0].length > 0) {
      /*
        Indicates there is a missing placeholder icon on placeholders.png ,
        where an ID is attempting to link to a region not allocated on spriteMapping.css .
        Attempting to draw this icon will display a blank image.
      */
      console.warn("doublecheck graphics for:", itemIdsWithoutGraphics[0]);
    }
    console.groupEnd();
    
    if (doProcessUnifiedSprites) {
      let unifiedReport = {};
      console.groupCollapsed("Unified Sprites report");
      for (const [gameName, gameData] of Object.entries(unifiedIDCollection)) {
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
              These entries will need to be added to the {unifiedIDCollection} mapping above
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
      console.groupEnd();
    }
    console.groupEnd();
  }
  
  /*
    Debugging function to consolidate all valid and updated JSON files into one.
    Output of stringified JSON object will be sent to console. Currently investigating having the output
    be sent to clipboard for quick pasting, but might need to set up a polyfill for that function.
  */
  function consolidateJson() {
    let runningJson = {};
    let gameValues = Object.values(main.games);
    let listOfPromises = [];
    
    for (let i = 0; i < gameValues.length; i++) {
      const currentGame = gameValues[i];
      
      let incomingPromise = fetch(`${main.jsonDir}/${currentGame}.json`)
        .then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty(currentGame)) {
            runningJson[currentGame] = data[currentGame];
          }
        })
        .catch(e => {
          console.error(`failed to fetch JSON for game ${currentGame}`);
          console.error(e);
        });
      listOfPromises.push(incomingPromise);
    }
    Promise.allSettled(listOfPromises).then(results => {
      const jsonified = JSON.stringify(runningJson);
      console.log(jsonified);
      // navigator.clipboard.writeText(jsonified);
    });
  }
  
  function start() {
    
  }
  
  main.partition = partition;
  main.scanDataForLint = scanDataForLint;
  main.consolidateJson = consolidateJson;
  main.start = start;
})();