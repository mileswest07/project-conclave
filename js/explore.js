let explorer = {
  
};

let interaction = {
  readyPan: false,
  prev: {
    x: 0,
    y: 0
  },
  max: [
    null,
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
  const games = {
    "rd": "mrd", // Metroid: Rogue Dawn (ROMhack)
    "m": "m1", // Metroid
    "z": "mzm", // Metroid: Zero Mission
    "p": "mp", // Metroid Prime
    //"pb": "pb", // Metroid Prime Pinball
    "p2d": "p2d", // Prime 2D
    "h": "ph", // Metroid Prime Hunters
    "e": "mp2e", // Metroid Prime 2: Echoes
    "c": "mp3c", // Metroid Prime 3: Corruption
    //"ff": "mpff", // Metroid Prime: Federation Force
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
  };
  
  const lockNodeTypes = [
    "return", //        *> oneway_inwards, pointing up
    "shortcut", //      A access_inwards, pointing up
    "access", //        A access_outwards, pointing down
    "bolt", //           
    "bracketed", //     
    "lock", //          *l
    "dropdown", //      *> oneway_outwards, pointing down
  ];
  
  const nodeTypes = [
    "none",
    "start", //         *G
    "end", //           *G
    "return", //        *> oneway_inwards, pointing up
    "lock", //          *l
    "dropdown", //      *> oneway_outwards, pointing down
    "boss", //          G battle_major, also for cinematic minibosses and unique battles
    "elevator", //      G transport_major
    "battle", //        G battle_minor, for noncinematic elite mooks, PH Hunter arenas, kill rooms, Echoes Grapple Pirates, etc
    "teleport", //      G transport_minor
    "artifact", //      r item_goal, item_major, treasure
    "upgrade", //       r item_req
    "slot", //          S item_slot
    "expansion", //     u item_unreq
    "event", //         G environ_goal
    "area", //          G
    "map", //           G
    "trigger", //       r environ_req
    "toggle", //        S environ_slot
    "save", //          u
    "recharge", //      u
    "lore", //          u environ_unreq
    "easter", //        u
  ];
  
  const digitPattern = /\d+/g;
  const stringPattern = /\D+/g;
  
  function sortingNumbers(a, b) {
    return a && b ? a - b : 0;
  }
  
  function sortingIds(a, b) {
    return a.id && b.id ? a.id - b.id : 0;
  }
  
  function sortingDescIds(a, b) {
    return a.id && b.id ? b.id - a.id : 0;
  }
  
  function arrayCleanAdd(orig, newest) {
    if (!orig) orig = [];
    orig.push(newest);
    orig = orig.flat(Infinity);
    orig = new Set([...orig]);
    orig = [...orig];
    return orig;
  }
  
  function makeCore(coreData, overrideData = {}, isPostConversion = false) {
    if (coreData.id === "-") {
      return;
    }
    
    let returnCore = {
      ...overrideData,
      nodeType: coreData.nodeType || overrideData.nodeType,
      children: [],
    };
    
    switch (returnCore.nodeType) {
      case "boss":
      case "battle":
        returnCore.nodeType = coreData.nodeType || overrideData.nodeType || "boss";
        returnCore.id = isPostConversion ? coreData.id || 0 : coreData.bossId || 0;
        returnCore.bossId = isPostConversion ? coreData.id || 0 : coreData.bossId || 0;
        returnCore.displayIcon = isPostConversion ? coreData.displayIcon || "" : ""; //coreData.id || "";
        returnCore.spriteImage = isPostConversion ? coreData.spriteImage || "" : ""; //coreData.sprite || "";
        returnCore.bg = coreData.bg || "747474";
        returnCore.itemHoverLabel = isPostConversion ? coreData.itemHoverLabel || "" : coreData.name || "";
        returnCore.bossRequiresItems = isPostConversion ? coreData.bossRequiresItems : (coreData.requires ? [...coreData.requires] : []);
        returnCore.inverse = isPostConversion ? !!coreData.inverse || false : !!coreData.inverse || false;
        break;
      case "artifact":
      case "upgrade":
      case "slot":
      case "expansion":
        returnCore.id = isPostConversion ? coreData.id || 0 : coreData.itemId || 0;
        returnCore.displayIcon = isPostConversion ? coreData.displayIcon || "itemSphere" : coreData.id || "itemSphere"; // TODO: add randomized mode
        returnCore.spriteImage = isPostConversion ? coreData.spriteImage || "" : coreData.sprite || "";
        returnCore.bg = coreData.bg || "ffffff";
        returnCore.itemHoverLabel = isPostConversion ? coreData.itemHoverLabel || "" : coreData.singleItemName || coreData.name || "";
        if (returnCore.nodeType === "slot") {
          returnCore.slotToggleId = isPostConversion ? coreData.slotToggleId : coreData.slotType;
        }
        returnCore.progressionToItemId = coreData.progressionToItemId || 0;
        returnCore.isRandomizableItem = isPostConversion ? coreData.isRandomizableItem || false : coreData.random || false;
        returnCore.inverse = isPostConversion ? !!coreData.inverse || false : !!coreData.inverse || false;
        break;
      case "start":
      case "end":
      case "return":
      case "dropdown":
      case "elevator":
      case "teleport":
      case "event":
      case "trigger":
      case "toggle":
      case "map":
      case "area":
      case "save":
      case "recharge":
      case "lore":
      case "easter":
        returnCore.id = isPostConversion ? coreData.id || 0 : coreData.extraId || coreData.itemId || 0;
        returnCore.displayIcon = isPostConversion ? coreData.displayIcon || "" : coreData.id || "";
        returnCore.spriteImage = isPostConversion ? coreData.spriteImage || "" : coreData.sprite || "";
        returnCore.bg = coreData.bg || "ffffff";
        returnCore.itemHoverLabel = isPostConversion ? coreData.itemHoverLabel || "" : coreData.singleItemName || coreData.name || "";
        returnCore.inverse = isPostConversion ? !!coreData.inverse || false : !!coreData.inverse || false;
        if (returnCore.nodeType === "toggle") {
          returnCore.slotToggleId = isPostConversion ? coreData.slotToggleId : coreData.slotType;
        }
        if (["elevator", "teleport"].includes(returnCore.nodeType)) {
          returnCore.toStartNodeId = isPostConversion ? coreData.toStartNodeId : 0;
          returnCore.transportToMapId = isPostConversion ? coreData.transportToMapId : 0;
        }
        if (["start"].includes(returnCore.nodeType)) {
          returnCore.toMapId = isPostConversion ? coreData.toMapId : 0;
        }
        if (["end"].includes(returnCore.nodeType)) {
          returnCore.itemHoverLabel = "END";
        }
        break;
      case "":
        break;
    }
    
    if (returnCore.itemHoverLabel.length > 0) {
      returnCore.textSize = isPostConversion ? coreData.textSize || "lg" : coreData.size || "lg";
    }
    
    if (coreData.lockIds) {
      returnCore.lockIds = new Set([...coreData.lockIds]);
      if (overrideData.lockIds) {
        returnCore.lockIds.add([...overrideData.lockIds]);
      }
      returnCore.lockIds = [...returnCore.lockIds];
    }
    
    if (coreData.specialCollectionBehavior) {
      returnCore.specialCollectionBehavior = true;
      returnCore.specialCollectionKey = coreData.specialCollectionKey;
      returnCore.affectsItemIds = [...coreData.affectsItemIds];
    }
    
    return returnCore;
  }
  
  function makeLock(coreNodeData, leafData = {}) {
    if (coreNodeData.id === "-") {
      return;
    }
    
    let returnLock = {
      ...coreNodeData,
      ...leafData,
      lockIds: new Set(),
      inverse: !!leafData.inverse,
    };
    returnLock.lockIds.add(coreNodeData.id);
    if (leafData.id) returnLock.lockIds.add(leafData.id);
    if (coreNodeData.lockIds) returnLock.lockIds.add([...coreNodeData.lockIds]);
    if (leafData.lockIds) returnLock.lockIds.add([...leafData.lockIds]);
    returnLock.lockIds = [...returnLock.lockIds];
    
    return returnLock;
  }
  
  function reconcileBossCore(bossCore, spliceIn) {
    let returnCore = {...bossCore};
    switch (bossCore.nodeType) {
      case "boss":
      case "battle":
        break;
    }
    return returnCore;
  }
  
  function makeCoresOutOfList(incomingArray, overrideData = {}) {
    let returnArray = [];
    for (let i = 0; i < incomingArray.length; i++) {
      let entry = incomingArray[i];
      if (entry.id === "-") {
        continue;
      }
      let core = makeCore(entry, overrideData);
      if (core) {
        returnArray.push(core);
      }
    }
    return returnArray;
  }
  
  function makeItemCores() {
    if (explorer.currentGame && explorer.workingData) {
      let allCores = [];
      let totalCount = 0;
      
      for (let j = 0; j < explorer.workingData.items.length; j++) {
        let item = explorer.workingData.items[j];
        if (item.segments && item.segments.length) {
          allCores = [...allCores, ...makeCoresOutOfList(item.segments)];
        } else if (item.id === "-") {
          continue;
        } else {
          allCores = [...allCores, makeCore(item)];
        }
      }
      
      let bossCores = [...makeCoresOutOfList(explorer.workingData.bosses, { nodeType:"boss", bg: "747474", })];
      allCores = [...allCores, ...makeCoresOutOfList(explorer.workingData.extras)];
      
      totalCount += allCores.length;
      
      let [startArray, remainderArray1] = main.partition(allCores, core => ["start"].includes(core.nodeType));
      startArray = startArray.sort(sortingDescIds);
      
      let [endArray, remainderArray2] = main.partition(remainderArray1, core => ["end"].includes(core.nodeType));
      endArray = endArray.sort(sortingDescIds);
      
      let [onewayArray, remainderArray3] = main.partition(remainderArray2, core => ["return", "dropdown"].includes(core.nodeType));
      onewayArray = onewayArray.sort(sortingDescIds);
      
      let [accessArray, remainderArray4] = main.partition(remainderArray3, core => ["shortcut", "bolt", "access", "bracketed"].includes(core.nodeType));
      accessArray = accessArray.sort(sortingDescIds);
      
      let [bossArray, remainderArray5] = main.partition(remainderArray4, core => ["boss", "battle"].includes(core.nodeType));
      bossArray = bossArray.sort(sortingDescIds);
      
      totalCount -= bossArray.length;
      
      let bossArrayFixed = [...bossCores];
      bossArrayFixed = bossArrayFixed.map(core => {
        let foundCore = bossArray.find(el => el.id === core.id);
        if (foundCore) {
          return reconcileBossCore(core, foundCore);
        }
        return core;
      });
      bossArray = bossArrayFixed.sort(sortingDescIds);
      
      totalCount += bossArray.length;
      
      let [transportArray, remainderArray6] = main.partition(remainderArray5, core => ["elevator", "teleport"].includes(core.nodeType));
      transportArray = transportArray.sort(sortingDescIds);
      
      let [itemArray, remainderArray7] = main.partition(remainderArray6, core => ["artifact", "upgrade", "slot", "expansion"].includes(core.nodeType));
      itemArray = itemArray.sort(sortingDescIds);
      
      let [eventArray, remainderArray8] = main.partition(remainderArray7, core => ["event", "trigger", "toggle", "lore", "easter"].includes(core.nodeType));
      eventArray = eventArray.sort(sortingDescIds);
      
      let [utilityArray, remainderArray9] = main.partition(remainderArray8, core => ["area", "map", "save", "recharge"].includes(core.nodeType));
      utilityArray = utilityArray.sort(sortingDescIds);
      
      let tempTotal = startArray.length + endArray.length + onewayArray.length + accessArray.length + bossArray.length + transportArray.length + itemArray.length + eventArray.length + utilityArray.length;
      if (totalCount !== tempTotal) {
        console.warn("count mismatch:", totalCount, "vs", tempTotal, '((', startArray.length, endArray.length, onewayArray.length, accessArray.length, bossArray.length, transportArray.length, itemArray.length, eventArray.length, utilityArray.length, '))');
      }
      
      //console.debug(startArray, endArray, onewayArray, accessArray, bossArray, transportArray, itemArray, eventArray, utilityArray);
      
      let hierarchy = [...startArray, ...endArray, ...onewayArray, ...accessArray, ...bossArray, ...transportArray, ...itemArray, ...eventArray, ...utilityArray];
      
      let iconsDefsWrapper = document.getElementById("iconsDefs");
      
      let measurementSet = new Set();
      let imageSources = new Set();
      
      for (let r = 0; r < hierarchy.length; r++) {
        let destination = document.getElementById("selection");
        let wrapper = document.createElement("div");
        let tempImage = document.createElement("img");
        let usesSpriteAfterAll = explorer.useSprites && hierarchy[r].spriteImage;
        let itemClassName = usesSpriteAfterAll ? hierarchy[r].spriteImage : hierarchy[r].displayIcon;
        if (itemClassName.length) {
          if (tempImage.classList) {
            tempImage.classList.add("item-image");
            wrapper.classList.add("hide");
            if (usesSpriteAfterAll) {
              wrapper.classList.add("usesSprite");
            }
            tempImage.classList.add(itemClassName);
          } else {
            tempImage.className = "item-image ";
            wrapper.className = "hide";
            if (usesSpriteAfterAll) {
              wrapper.className += " usesSprite";
            }
            tempImage.className += " " + itemClassName;
          }
          wrapper.appendChild(tempImage);
          destination.appendChild(wrapper);
          let queryStringCheck = "";
          if (usesSpriteAfterAll) {
            queryStringCheck = `.game-${explorer.currentGame} .usesSprite .item-image.${itemClassName}`;
          } else {
            queryStringCheck = `.item-image.${itemClassName}`;
          }
          let queryResult = document.querySelector(queryStringCheck);
          if (queryResult && itemClassName !== "unused") {
            let styleResult = getComputedStyle(queryResult);
            
            if (styleResult.background !== "none") {
              let step1 = styleResult.background.split('url("')[1].split('") ');
              let attemptToGetImageUrl = step1[0];
              let fileName = attemptToGetImageUrl.split("/")[1].split(".")[0];
              let positions = step1[1].split(' ');
              let xpos = 0 - Math.abs(parseInt(positions[0]));
              let ypos = 0 - Math.abs(parseInt(positions[1]));
              
              let measurement = 42;
              if (explorer.useSprites && usesSpriteAfterAll) {
                switch (explorer.currentGame) {
                  case "mp":
                  case "mp2e":
                  case "mpff":
                  case "md":
                    measurement = 64;
                    break;
                  case "msr":
                    measurement = 50;
                    break;
                  case "mom":
                    measurement = 60;
                    break;
                }
              }
              
              if (!measurementSet.has(measurement)) {
                measurementSet.add(measurement);
                let clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
                clipPath.setAttribute("id", `clipping-${measurement}`);
                let clipper = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                
                clipper.setAttribute("x", 0);
                clipper.setAttribute("y", 0);
                clipper.setAttribute("width", measurement);
                clipper.setAttribute("height", measurement);
                
                clipPath.appendChild(clipper);
                iconsDefsWrapper.appendChild(clipPath);
              }
              
              if (!imageSources.has(attemptToGetImageUrl)) {
                imageSources.add(attemptToGetImageUrl);
                let imageSource = document.createElementNS("http://www.w3.org/2000/svg", "image");
                imageSource.setAttribute("id", `source-${fileName}`);
                
                let sourcex = 774;
                let sourcey = 774;
                switch (fileName) {
                  case "m1_spritesheet":
                  case "p2d_spritesheet":
                    sourcex = 168;
                    sourcey = 126;
                    break;
                  case "m2ros_spritesheet":
                    sourcex = 168;
                    sourcey = 168;
                    break;
                  case "am2r_spritesheet":
                  case "mph_spritesheet":
                    sourcex = 252;
                    sourcey = 252;
                    break;
                  case "md_spritesheet":
                  case "mpff_spritesheet":
                    sourcex = 256;
                    sourcey = 192;
                    break;
                  case "mf_spritesheet":
                    sourcex = 258;
                    sourcey = 215;
                    break;
                  case "mkc_spritesheet":
                    sourcex = 336;
                    sourcey = 210;
                    break;
                  case "mom_spritesheet":
                    sourcex = 240;
                    sourcey = 240;
                    break;
                  case "mp_spritesheet":
                    sourcex = 256;
                    sourcey = 256;
                    break;
                  case "msr_spritesheet":
                    sourcex = 350;
                    sourcey = 300;
                    break;
                  case "mzm_spritesheet":
                    sourcex = 252;
                    sourcey = 210;
                    break;
                  case "rd_spritesheet":
                    sourcex = 336;
                    sourcey = 84;
                    break;
                  case "sm_spritesheet":
                    sourcex = 256;
                    sourcey = 168;
                    break;
                }
                
                imageSource.setAttribute("width", sourcex);
                imageSource.setAttribute("height", sourcey);
                imageSource.setAttributeNS("http://www.w3.org/1999/xlink", "href", attemptToGetImageUrl);
                iconsDefsWrapper.appendChild(imageSource);
              }
              
              let clipRef = `clipping-${measurement}`;
              let srcRef = `source-${fileName}`;
              
              let iconWrapper = document.createElementNS("http://www.w3.org/2000/svg", "g");
              iconWrapper.setAttribute("id", `icon${itemClassName}`);
              iconWrapper.setAttribute("clip-path", `url(#${clipRef})`);
              let useLink = document.createElementNS("http://www.w3.org/2000/svg", "use");
              useLink.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#${srcRef}`);
              useLink.setAttribute("transform", "translate(" + xpos + " " + ypos + ")");
              
              iconWrapper.appendChild(useLink);
              iconsDefsWrapper.appendChild(iconWrapper);
            }
          }
        }
        
      }
      
      return hierarchy.sort((a,b) => a.nodeType === b.nodeType ? b.id - a.id : nodeTypes.indexOf(a.nodeType) - nodeTypes.indexOf(b.nodeType));
    }
    console.warn("game and rawData not specified");
    return [];
  }
  
  function buildMaps() {
    let listOfNodes = [];
    let listOfStartNodes = [];
    let hubsProcessed = new Set();
    let runningNodeId = 1;
    
    let processBranch = (parentNodeId, branchData, altpathIndex, branchProgress, parentHubId, mapId, lengthOverride) => {
      let returnIds = [];
      
      let branchRoot = branchData.branches[altpathIndex];
      if (!branchRoot) {
        console.error(branchData);
      }
      let branchSegment = branchRoot[branchProgress];
      let getItemCoreId = branchSegment.id;
      let getItemCore = explorer.itemCores.find(el => el.id === getItemCoreId);
      let itemNode = getItemCore ? makeCore(getItemCore, branchSegment, true) : makeCore(branchSegment, {}, true);
      itemNode.nodeId = runningNodeId++;
      returnIds.push(itemNode.nodeId);
      
      if (lockNodeTypes.includes(branchSegment.nodeType)) {
        itemNode = makeLock(itemNode, { ...branchSegment });
      }
      itemNode.parentIds = arrayCleanAdd(itemNode.parentIds, parentNodeId);
      itemNode.mapId = mapId;
      itemNode.hubId = parentHubId;
      itemNode.cardId = "";
      itemNode.children = [];
      itemNode.isHubDirectChild = branchProgress === 0;
      itemNode.altpathIndex = altpathIndex;
      itemNode.altpathCount = branchData.branches.length;
      
      if (branchSegment.transportToMapId) {
        let destinationName = explorer.workingData.areas.find(area => area.id === branchSegment.transportToMapId)?.name || "TRANSPORT";
        itemNode.itemHoverLabel = destinationName;
        let destination = listOfNodes.find(el => el.nodeType === "start" && el.mapId === branchSegment.transportToMapId && branchSegment.toStartNodeId === el.hubId);
        if (destination) {
          let departureName = explorer.workingData.areas.find(area => area.id === itemNode.mapId)?.name || "START";
          destination.itemHoverLabel = departureName;
          destination.toMapId = itemNode.mapId;
          destination.bg = explorer.advancedColors ? explorer.workingData.areas.find(area => area.id === itemNode.mapId)?.color || "ffffff" : "ffffff";
        }
      }
      
      if (branchRoot.length <= branchProgress + 1) {
        if (branchData.toHubId) {
          if (lengthOverride > -1) {
            itemNode.extraVerticalLength = lengthOverride;
          }
          let foundHub = explorer.workingData.map.find(el => el.hubId === branchData.toHubId);
          if (foundHub) {
            // TODO: figure out vines
            if (hubsProcessed.has(foundHub.hubId)) {
              let foundHubChildren = listOfNodes.filter(el => el.hubId === foundHub.hubId && el.isHubDirectChild);
              for (let i = 0; i < foundHubChildren.length; i++) {
                foundHubChildren[i].parentIds = arrayCleanAdd(foundHubChildren[i].parentIds, itemNode.nodeId);
                itemNode.children = arrayCleanAdd(itemNode.children, foundHubChildren[i].nodeId);
              }
            } else {
              let hubChildren = processHub(foundHub, itemNode.nodeId, mapId);
              itemNode.children = arrayCleanAdd(itemNode.children, hubChildren);
            }
          }
        }
        listOfNodes.push(itemNode);
        return returnIds;
      }
      
      let nextChild = processBranch(itemNode.nodeId, branchData, altpathIndex, branchProgress + 1, parentHubId, mapId, lengthOverride - 1);
      itemNode.children = arrayCleanAdd(itemNode.children, nextChild);
      listOfNodes.push(itemNode);
      
      return itemNode.nodeId;
    };
    
    let processHub = (hubData, parentNodeId, mapId) => {
      let returnChildrenIds = [];
      if (!hubsProcessed.has(hubData.hubId)) {
        hubsProcessed.add(hubData.hubId);
        for (let i = 0; i < hubData.paths.length; i++) {
          let pathData = hubData.paths[i];
          let maxLength = pathData.branches.reduce((acc, curr) => Math.max(acc, curr.length), 1);
          for (let j = 0; j < pathData.branches.length; j++) {
            let altpathChild = processBranch(parentNodeId, pathData, j, 0, hubData.hubId, mapId, maxLength - 1);
            returnChildrenIds.push(altpathChild);
          }
        } 
      } else {
        console.warn("uh-oh... cannot find hubId", hubData.hubId);
      }
      return returnChildrenIds;
    };
    
    if (explorer.currentGame && explorer.workingData && explorer.workingData.map && explorer.itemCores) {
      for (let i = 0; i < explorer.workingData.areas.length; i++) {
        let startNode = makeCore({ nodeType: "start", name: "START" });
        startNode.nodeId = runningNodeId++;
        startNode.parentIds = [-1];
        startNode.children = [];
        startNode.expanded = !explorer.workingData.areas[i].hasGameStart;
        startNode.mapId = explorer.workingData.areas[i].id;
        startNode.hubId = explorer.workingData.areas[i].startNodeId;
        startNode.cardId = "";
        startNode.bg = "ffffff";
        listOfNodes.push(startNode);
        listOfStartNodes.push(startNode);
      }
      for (let i = 0; i < listOfStartNodes.length; i++) {
        let aStartingNode = listOfStartNodes[i];
        let lookingForHubId = aStartingNode.hubId;
        let foundHub = explorer.workingData.map.find(el => el.hubId === lookingForHubId);
        if (foundHub) {
          let hubChildren = processHub(foundHub, aStartingNode.nodeId, aStartingNode.mapId);
          aStartingNode.children = arrayCleanAdd(aStartingNode.children, hubChildren);
        }
      }
      return listOfNodes.sort((a,b) => explorer.workingData.areas.findIndex(area => area.id === a.mapId) - explorer.workingData.areas.findIndex(area => area.id === b.mapId) || a.nodeId - b.nodeId);
    }
    return [];
  }
  
  function pivotNode(node, fromParentId) {
    let parents = [...node.parentIds];
    let children = [...node.children];
    let fullList = new Set([...parents, ...children]);
    if (fullList.has(fromParentId)) {
      node.parentIds = [].push(fromParentId);
      fullList.delete(fromParentId);
      node.children = [...fullList];
    }
  }
  
  function getCurrentCoordsOfNode(nodeObj) {
    let returnValues = [];
    let str = nodeObj.attributes.transform.value; // obtain the positioning digits from the node
    let result = str.match(digitPattern);
    returnValues.push(parseInt(result[0])); // x
    returnValues.push(parseInt(result[1])); // y
    
    return returnValues; // returning as array
  }

  function getCurrentCoordsOfNodeById(elementId) {
    let nodeObj = document.getElementById(elementId);
    return getCurrentCoordsOfNode(nodeObj);
  }
  
  function centerCursorOnElement(elementId) {
    let coords = getCurrentCoordsOfNodeById(elementId);
    cursor.move(((coords[0] / 144) - 1), ((coords[1] / 144) - 1));
  }
  
  function doNothing() {}
  
  function hoverBasic(e) {
    //console.log("hover started!", e);
    
    for (child of e.target.childNodes) {
      if (child.classList.contains("card-hover-overlay")) {
        child.classList.add("show");
        child.classList.remove("hide");
      }
    }
  }
  
  function removeHover(e) {
    //console.log("hover ended!", e);
    
    for (child of e.target.childNodes) {
      if (child.classList.contains("card-hover-overlay")) {
        child.classList.remove("show");
        child.classList.add("hide");
      }
    }
  }
  
  function clickRoot(e) {
    let domElement = e.target.parentElement;
    centerCursorOnElement(domElement.id);
    
    let str = domElement.id.split("_")[1];
    let findId = str.match(digitPattern);
    findId = parseInt(findId[0]);
    let findType = str.match(stringPattern);
    findType = findType[0];
    let cardData = explorer.mapNodes.find(n => n.nodeId === findId && n.nodeType === findType);
    
    if (cardData === null) {
      console.error("Could not find this root!");
    }
    
    if (!cardData.expanded) {
      cardData.expanded = true;
      animateChildren(cardData, { val: 1 });
    }
    
    if (cardData.toMapId && cardData.mapId !== cardData.toMapId) {
      popMap(cardData.toMapId);
    }
  }
  
  function clickElevator(e) {
    let groupCard = e.target.parentElement;
    let str = groupCard.id.split("_")[1];
    let findId = str.match(digitPattern);
    findId = parseInt(findId[0]);
    let departure = explorer.mapNodes.find(n => n.nodeId === findId);
    popMap(departure.transportToMapId);
  }
  
  function getCurrentMapElement(childCategory) {
    let returnValue = null;
    let mapSearch = document.getElementById("mapSVG-" + explorer.currentMap);
    if (mapSearch !== null) {
      let index = -1;
      switch (childCategory) {
        case "pathsField":
          index = 1;
          break;
        case "junctionsField":
          index = 2;
          break;
        case "cardsField":
          index = 3;
          break;
      }
      if (index !== -1) {
        returnValue = mapSearch.children[index];
      }
    }
    return returnValue;
  }
  
  function findElementOfLayerAtCoords(layer, x, y) {
    let returnValue = [];
    
    let childCollection = null;
    let parentElement = null;
    
    switch(layer) {
      case "path":
        parentElement = getCurrentMapElement("pathsField");
        break;
      case "junction":
        parentElement = getCurrentMapElement("junctionsField");
        break;
      case "card":
      default:
        parentElement = getCurrentMapElement("cardsField");
    }
    childCollection = parentElement.children;
    
    for (child of childCollection) {
      let str = child.attributes.transform.value;
      let result = str.match(digitPattern);
      
      if (parseInt(result[0]) === x && parseInt(result[1]) === y) {
        returnValue.push(child);
      }
    }
    
    return returnValue;
  }
  
  function insertPathLine(dir, x, y) {
    let templateName = "";
    switch(dir) {
      case "l":
      case "left":
      case "w":
      case "west":
        templateName = "grid_line_h_left_template";
        break;
      case "r":
      case "right":
      case "e":
      case "east":
        templateName = "grid_line_h_right_template";
        break;
      case "u":
      case "up":
      case "n":
      case "north":
        templateName = "grid_line_v_up_template";
        break;
      case "d":
      case "down":
      case "s":
      case "south":
        templateName = "grid_line_v_down_template";
        break;
    }
    let original = document.getElementById(templateName);
    let copy = original.cloneNode(true);
    copy.removeAttribute("id");
    if (x && y) {
      copy.setAttribute("transform", "translate(" + x + " " + y + ")");
    } else {
      copy.setAttribute("transform", "translate(" + cursor.get().x + " " + cursor.get().y + ")");
    }
    if (explorer.allowColors && explorer.advancedColors) {
      copy.children[0].setAttribute("fill", "#" + explorer.workingData.areas.find(ar => ar.id === explorer.currentMap).color);
    } else {
      copy.children[0].setAttribute("fill", "#ffffff");
    }
    
    getCurrentMapElement("pathsField").appendChild(copy);
    
    // retrieve currently-just-added element
    let thisLine;
    if (x && y) {
      thisLine = findElementOfLayerAtCoords("path", x, y);
    } else {
      thisLine = findElementOfLayerAtCoords("path", cursor.get().x, cursor.get().y);
    }
    return thisLine[thisLine.length - 1];
  }
  
  function expandViewbox() {
    let mapSearch = document.getElementById("mapSVG-" + explorer.currentMap);
    let viewBoxProps = mapSearch.getAttribute("viewBox").split(' ');
    let oldX = parseFloat(viewBoxProps[0]);
    let oldY = parseFloat(viewBoxProps[1]);
    let oldWidth = parseFloat(viewBoxProps[2]);
    let oldHeight = parseFloat(viewBoxProps[3]);
    let newWidth = oldWidth;
    let newHeight = oldHeight;

    if (oldWidth < (cursor.get().x + 144)) {
      interaction.max[explorer.currentMap].x = Math.max(interaction.max[explorer.currentMap].x, cursor.get().x + 144);
      newWidth = interaction.max[explorer.currentMap].x;
    }
    if (oldHeight < (cursor.get().y + 144)) {
      interaction.max[explorer.currentMap].y = Math.max(interaction.max[explorer.currentMap].y, cursor.get().y + 144);
      newHeight = interaction.max[explorer.currentMap].y;
    }
    
    newWidth = Math.ceil(newWidth / 144) * 144;
    newHeight = Math.ceil(newHeight / 144) * 144;
    
    if (newHeight <= 144) {
      newHeight = 144;
    }
    
    if (!explorer.mapNodes.find(n => n.mapId === explorer.currentMap && n.nodeType === "start")?.expanded) {
      interaction.max[explorer.currentMap].x = 288;
      newWidth = 288;
      interaction.max[explorer.currentMap].y = 288;
      newHeight = 288;
    }
    
    interaction.max[explorer.currentMap].zoomX = (interaction.max[explorer.currentMap].x - interaction.min.x) / 144
    interaction.max[explorer.currentMap].zoomY = (interaction.max[explorer.currentMap].y - interaction.min.y) / 144
    let newViewBox = [
      oldX,
      oldY,
      newWidth,
      newHeight
    ];
    mapSearch.setAttribute("viewBox", newViewBox.join(' '));
  }
  
  function makeCard(cardData, x, y) {
    let groupObject = document.createElementNS("http://www.w3.org/2000/svg", "g");
    let imageClasses = new Set();
    let fillColor = "white";
    let hoverCapture = doNothing;
    let clickCapture = doNothing;
    let selectedShape = "";
    let runningNodeId = cardData.nodeType + cardData.nodeId;
    cardData.cardId = "mapSVG-" + explorer.currentMap + "_" + runningNodeId;
    groupObject.id = cardData.cardId;
    
    switch(cardData.nodeType) {
      case "start":
        selectedShape = "circle";
        hoverCapture = hoverBasic;
        clickCapture = clickRoot;
        fillColor = "#" + cardData.bg;
        break;
      case "end":
        selectedShape = "circle";
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "return":
        selectedShape = "arrow_up";
        fillColor = "#" + (explorer.advancedColors ? explorer.workingData.areas.find(ar => ar.id === cardData.mapId).color : cardData.bg);
        break;
      case "shortcut":
        selectedShape = cardData.block ? "hex_block_up" : "hex_up";
        if (explorer.allowColors) imageClasses.add("lock-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "bracketed":
        selectedShape = "bracketed";
        if (explorer.allowColors) imageClasses.add("lock-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "bolt":
        selectedShape = "bolt";
        if (explorer.allowColors) imageClasses.add("lock-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "access":
        selectedShape = cardData.block ? "hex_block_down" : "hex_down";
        if (explorer.allowColors) imageClasses.add("lock-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "lock":
        selectedShape = "square";
        if (explorer.allowColors) imageClasses.add("lock-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "dropdown":
        selectedShape = "arrow_down";
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + (explorer.advancedColors ? explorer.workingData.areas.find(ar => ar.id === cardData.mapId).color : cardData.bg);
        break;
      case "elevator":
        selectedShape = "circle";
        hoverCapture = hoverBasic;
        clickCapture = clickElevator;
        fillColor = "#" + (explorer.advancedColors ? explorer.workingData.areas.find(ar => ar.id === cardData.transportToMapId).color : cardData.bg);
        break;
      case "boss":
        selectedShape = "circle";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "teleport":
        selectedShape = "circle";
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + (explorer.advancedColors ? explorer.workingData.areas.find(ar => ar.id === cardData.transportToMapId).color : cardData.bg);
        break;
      case "battle":
        selectedShape = "circle";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "artifact":
        selectedShape = "dia";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "upgrade":
        selectedShape = "dia";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "slot":
        selectedShape = "penta";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "expansion":
        selectedShape = "tri";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "event":
        selectedShape = "circle";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "trigger":
        selectedShape = "dia";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "toggle":
        selectedShape = "penta";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "map":
        selectedShape = "circle";
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "area":
        selectedShape = "rect";
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "save":
        selectedShape = "wedge";
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "recharge":
        selectedShape = "wedge";
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "lore":
        selectedShape = "tri";
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "easter":
        selectedShape = "wedge";
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      default:
        selectedShape = null;
        break;
    }
    let templateName = selectedShape + "_template";
    let shapeObject = document.getElementById(templateName).cloneNode(true);
    let hoverShape = document.getElementById(templateName).cloneNode(true);
    
    shapeObject.removeAttribute("id");
    hoverShape.removeAttribute("id");
    fillColor = explorer.allowColors ? fillColor : "white";
    shapeObject.setAttribute("fill", fillColor);
    groupObject.appendChild(shapeObject);
    
    let imageName = explorer.useSprites ? cardData.spriteImage : cardData.displayIcon;
    let innerText = "";
    let outerText = "";
    let innerCountText = "";
    
    if (cardData.itemHoverLabel || cardData.count || cardData.reqdItemCount) {
      if (cardData.count) {
        innerCountText = `× ${cardData.count}`;
      } else if (cardData.reqdItemCount && cardData.reqdItemCount > 1) {
        innerCountText = `> ${cardData.reqdItemCount}`;
      }
      if (imageName && imageName.length && imageName !== "unused") {
        outerText = cardData.itemHoverLabel;
      } else if (cardData.nodeType === "lock" && cardData.bossId) {
        innerText = cardData.itemHoverLabel;
        outerText = `Defeat ${cardData.itemHoverLabel}`;
      } else {
        innerText = cardData.itemHoverLabel;
      }
    }
    
    let textObject = null;
    let textOffset = 39;
    if (innerText || innerCountText) {
      textObject = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textObject.classList.add("text-node");
      textObject.setAttribute("x", "0");
      textObject.setAttribute("y", "9");
      textObject.setAttribute("fill", "black");
      textObject.setAttribute("text-anchor", "middle");
      textObject.innerHTML = "";
      
      if (innerText) {
        let innerStr = innerText.split(" ");
        let rollingText = "";
        let linesOfText = 0;
        let deltaY = 0;
        for (let isw = 0; isw < innerStr.length; isw++) {
          if (rollingText.length > 0) {
            rollingText += " ";
          }
          
          rollingText += innerStr[isw];
          if (rollingText.length >= 5 || isw + 1 === innerStr.length || (isw + 1 < innerStr.length && innerStr[isw+1].length >= 5)) {
            linesOfText++;
            let tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            if (rollingText.length > 12 || cardData.textSize === "xs" || (isw + 1 < innerStr.length && innerStr[isw+1].length > 10)) {
              tspan.classList.add("text-xs");
              deltaY += 12 * 5 / 6;
            } else if (rollingText.length > 10 || cardData.textSize === "sm" || (isw + 1 < innerStr.length && innerStr[isw+1].length > 7)) {
              tspan.classList.add("text-sm");
              deltaY += 16 * 5 / 6;
            } else if (rollingText.length > 7 || cardData.textSize === "md" || (isw + 1 < innerStr.length && innerStr[isw+1].length > 4)) {
              tspan.classList.add("text-md");
              deltaY += 20 * 4 / 5;
            } else {
              tspan.classList.add("text-lg");
              deltaY += 24 * 3 / 4;
            }
            tspan.setAttribute("x", "0");
            tspan.setAttribute("dy", "1.2em");
            if (linesOfText == 1) {
              tspan.setAttribute("dy", "0");
              deltaY = 0;
            }
            tspan.textContent = rollingText;
            textObject.appendChild(tspan);
            rollingText = "";
          }
        }
        textObject.setAttribute("y", (9 - deltaY).toString());
      }
      
      if (innerCountText) {
        textObject.classList.add("text-md"); // apply the right style
        textObject.setAttribute("y", "0"); // no vertical offset
        textObject.innerHTML = innerCountText;
        textOffset = 39;
      }
      
    }
    
    if (outerText) {
      let titleObject = document.createElementNS("http://www.w3.org/2000/svg", "title");
      titleObject.innerHTML = outerText + (cardData.count > 1 || cardData.reqdItemCount > 1 ? " " + innerCountText : "");
      groupObject.appendChild(titleObject);
    }
    
    let imageObject = null;
    
    // if image and text, then add image first and move text outside
    // else
    // if image, then add image inside
    // else
    // if text, then add text inside
    
    if (imageName.length && imageName !== "unused") {
      imageObject = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      
      let measurement = 42;
      if (explorer.useSprites && cardData.spriteImage) {
        switch (explorer.currentGame) {
          case "mp":
          case "mp2e":
          case "mpff":
          case "md":
            measurement = 64;
            break;
          case "msr":
            measurement = 50;
            break;
          case "mom":
            measurement = 60;
            break;
        }
      }
      
      if (explorer.allowColors && cardData.hasOwnProperty("bossId")) {
        if (cardData.nodeType === "lock") {
          imageClasses.add("boss-lock-image");
        } else {
          imageClasses.delete("key-image");
        }
      }
      
      imageObject.setAttribute("width", measurement);
      imageObject.setAttribute("height", measurement);
      imageObject.setAttribute("x", measurement / 2 * -1 + 1 - 1);
      imageObject.setAttribute("y", measurement / 2 * -1 + 1 - 1);
      imageObject.setAttribute("viewBox", `0 0 ${measurement} ${measurement}`);
      
      let imageReference = document.createElementNS("http://www.w3.org/2000/svg", "use");
      imageReference.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#icon${imageName}`);
      
      imageClasses = [...imageClasses];
      
      for (let ic = 0; ic < imageClasses.length; ic++) {
        imageObject.classList.add(imageClasses[ic]);
      }
      
      imageObject.appendChild(imageReference);
    }
    
    if (textObject && imageObject) {
      textObject.setAttribute("y", textOffset);
    }
    if (imageObject) {
      groupObject.appendChild(imageObject);
    }
    if (textObject) {
      groupObject.appendChild(textObject);
    }
    
    if (x && y) {
      groupObject.setAttribute("transform", "translate(" + x + " " + y + ")");
    } else {
      groupObject.setAttribute("transform", "translate(" + cursor.get().x + " " + cursor.get().y + ")");
    }
    
    groupObject.addEventListener("mouseenter", hoverCapture);
    groupObject.addEventListener("mouseleave", removeHover);
    groupObject.addEventListener("click", clickCapture);
    
    if (cardData.nodeType === "elevator") {
      let escapeArrow = document.getElementById("arrow_down_template").cloneNode(true);
      escapeArrow.removeAttribute("id");
      escapeArrow.setAttribute("fill", fillColor);
      let firstLine;
      let lastLine;
      if (x && y) {
        firstLine = insertPathLine("d", x, y);
        lastLine = insertPathLine("u", x, (y + 144));
      } else {
        firstLine = insertPathLine("d", cursor.get().x, cursor.get().y);
        lastLine = insertPathLine("u", cursor.get().x, (cursor.get().y + 144));
      }
      escapeArrow.setAttribute("transform", "translate(0 144)");
      firstLine.children[0].setAttribute("fill", fillColor);
      lastLine.children[0].setAttribute("fill", fillColor);
      groupObject.appendChild(escapeArrow);
    }
    
    if (cardData.inverse) {
      let revLock = document.getElementById("rev_lock_template").cloneNode(true);
      revLock.removeAttribute("id");
      groupObject.appendChild(revLock);
    }
    
    hoverShape.setAttribute("class", "card-hover-overlay");
    if (hoverShape.classList) {
      hoverShape.classList.add("card-hover-overlay");
    } else {
      let arr = hoverShape.className.split(" ");
      if (arr.indexOf("card-hover-overlay") == -1) {
          hoverShape.className += " card-hover-overlay";
      }
    }
    hoverShape.removeAttribute("stroke");
    hoverShape.removeAttribute("stroke-width");
    hoverShape.setAttribute("fill", "rgb(0, 0, 0, 0.33)");
    groupObject.appendChild(hoverShape);
    
    getCurrentMapElement("cardsField").appendChild(groupObject);
    expandViewbox();
    
    return document.getElementById(groupObject.id);
  }
  
  function makeLineInDirection(direction) {
    let firstDirection = direction;
    let secondDirection;
    let xUnit = 0;
    let yUnit = 0;
    
    switch (direction) {
      case "d":
      case "down":
      case "s":
      case "south":
        secondDirection = "u";
        xUnit = 0;
        yUnit = 1;
        break;
      case "u":
      case "up":
      case "n":
      case "north":
        secondDirection = "d";
        xUnit = 0;
        yUnit = -1;
        break;
      case "r":
      case "right":
      case "e":
      case "east":
        secondDirection = "l";
        xUnit = 1;
        yUnit = 0;
        break;
      case "l":
      case "left":
      case "w":
      case "west":
        secondDirection = "r";
        xUnit = -1;
        yUnit = 0;
        break;
      default:
        break;
    }
    
    insertPathLine(firstDirection);
    cursor.shift(xUnit, yUnit);
    insertPathLine(secondDirection);
  }
  
  function makeLineInDirectionByUnits(direction, units) {
    for (let i = 0; i < units; i++) {
      makeLineInDirection(direction);
    }
  }
  
  function insertJunctionDot(x, y) {
    let shapeObject = junction_template.cloneNode(true);
    shapeObject.removeAttribute("id"); // strip away Id to prevent DOM problems
    if (x && y) { // remote drop
      shapeObject.setAttribute("transform", "translate(" + x + " " + y + ")");
    } else { // drop "here"
      shapeObject.setAttribute("transform", "translate(" + cursor.get().x + " " + cursor.get().y + ")");
    }
    // color fill, factoring in colorblind mode
    if (explorer.allowColors && explorer.advancedColors) {
      let fillColor = "#" + (explorer.workingData.areas.find(area => area.id === explorer.currentMap)?.color || "ffffff");
      shapeObject.setAttribute("fill", fillColor);
    } else {
      shapeObject.setAttribute("fill", "#ffffff");
    }
    
    getCurrentMapElement("junctionsField").appendChild(shapeObject); // drop into the correct layer
    
    // retrieve currently-just-added element
    //return document.getElement();
  }
  
  function getWidthFrom(card) {
    let savedCursor = cursor.get();
    let returnValue = 0;
    
    centerCursorOnElement(card.cardId);
    let cardChildren = card.children.reverse();
    let nChildren = card.children.length;
    
    let prevSiblingWidth = 1;
    let chunkSize = 0;
    
    for (let i = 0; i < card.children.length; i++) {
      let childId = cardChildren[i];
      let previousSiblingId = i > 0 ? cardChildren[i - 1] : null;
      let childNode = explorer.mapNodes.find(n => n.nodeId === childId);
      let previousSibling = previousSiblingId ? explorer.mapNodes.find(n => n.nodeId === previousSiblingId) : null;
      
      
      
      
      
      
      let childCardWidth = getWidthFrom(childNode);
      returnValue += childCardWidth;
    }
    cursor.set(savedCursor.x, savedCursor.y);
    return returnValue;
  }
  
  function animateChildren(card, accumulator) {
    centerCursorOnElement(card.cardId);
    expandViewbox();
    let cardChildren = card.children.reverse();
    let nChildren = card.children.length;
    
    let prevSiblingWidth = 1;
    let chunkSize = 0;
    
    for (let i = 0; i < card.children.length; i++) {
      let childId = cardChildren[i];
      let previousSiblingId = i > 0 ? cardChildren[i - 1] : null;
      let childNode = explorer.mapNodes.find(n => n.nodeId === childId);
      let previousSibling = previousSiblingId ? explorer.mapNodes.find(n => n.nodeId === previousSiblingId) : null;
      
      
      if (card.altpathIndex + 1 < card.altpathCount) {
        console.warn(card, childNode, accumulator.val, prevSiblingWidth, nChildren, card.altpathCount, chunkSize);
      }
      
      if (childNode.cardId && document.getElementById(childNode.cardId)) {
        if (card.hasOwnProperty("extraVerticalLength")) {
          
          makeLineInDirectionByUnits("d", card.extraVerticalLength + 1);
          insertJunctionDot();
        }
        
        
        if (childNode.altpathIndex === 0) {
          if (childNode.altpathCount > childNode.children.length) {
            makeLineInDirectionByUnits("l", Math.max(childNode.altpathCount - childNode.children.length - 1, 1));
          }
        }
        
        
        
        accumulator.val = Math.max(accumulator.val - 1, 1);
        chunkSize = 0;
        break;
      }
      
      if (card.nodeType === "start" || i > 0) {
        if (previousSiblingId && previousSibling.altpathIndex === childNode.altpathIndex + 1) {
          prevSiblingWidth--;
          makeLineInDirectionByUnits("r", 1);
        } else {
          makeLineInDirectionByUnits("r", prevSiblingWidth);
        }
        insertJunctionDot();
      } else if (nChildren > 1 || childNode.parentIds.length > 1) {
        if (card.hasOwnProperty("extraVerticalLength")) {
          makeLineInDirectionByUnits("d", card.extraVerticalLength + 1);
        } else {
          makeLineInDirectionByUnits("d", 1);
        }
        insertJunctionDot();
      }
      makeLineInDirectionByUnits("d", 1);
      
      makeCard(childNode);
      if (childNode.nodeType === "elevator") {
        cursor.shift(0, 1);
        expandViewbox();
        cursor.shift(0, -1);
      }
      let childrenWidth = {
        val: Math.max(childNode.children.length, 1)
      };
      animateChildren(childNode, childrenWidth);
      prevSiblingWidth = childrenWidth.val;
      if (card.altpathIndex + 1 === card.altpathCount && card.altpathCount > 1) {
        chunkSize = childrenWidth.val;
        //console.info(card, childNode, chunkSize, prevSiblingWidth);
      }
      accumulator.val += Math.max(prevSiblingWidth - 1, 0);
      
      cursor.shift(0, -1);
    }
    centerCursorOnElement(card.cardId);
  }
  
  function hideMap(mapId) {
    let mapSearch = document.getElementById("mapSVG-" + mapId);
    if (mapSearch !== null) {
      if (mapSearch.classList) {
        mapSearch.classList.add("hide-map");
      } else {
        let arr = mapSearch.className.split(" ");
        if (arr.indexOf("hide-map") === -1) {
          mapSearch.className += " hide-map";
        }
      }
    }
  }
  
  function showMap(mapId) {
    let mapSearch = document.getElementById("mapSVG-" + mapId);
    if (mapSearch !== null) {
      if (mapSearch.classList) {
        mapSearch.classList.remove("hide-map");
      } else {
        mapSearch.className += mapSearch.className.replace(/\bhide-map\b/g);
      }
    }
  }
  
  function popMap(mapId) {
    let mapSource = document.getElementById("mapField");
    let mapSearch = document.getElementById("mapSVG-" + mapId);
    hideMap(explorer.currentMap);
    explorer.currentMap = mapId;
    if (!mapSearch) {
      mapSearch = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      mapSearch.setAttribute("id", "mapSVG-" + mapId);
      mapSearch.setAttribute("class", "map-svg");
      mapSearch.setAttribute("width", "100%");
      mapSearch.setAttribute("height", "100%");
      mapSearch.setAttribute("viewBox", "0 0 144 144");
      mapSearch.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      mapSearch.setAttributeNS("http://www.w3.org/2000/svg", "xlink", "http://www.w3.org/1999/xlink");
      
      let iconsDefs = document.getElementById("iconsDefs").cloneNode(true);
      let gridPaths = document.createElementNS("http://www.w3.org/2000/svg", "g");
      gridPaths.setAttribute("class", "pathsField");
      let junctions = document.createElementNS("http://www.w3.org/2000/svg", "g");
      junctions.setAttribute("class", "junctionsField");
      let mainMeat = document.createElementNS("http://www.w3.org/2000/svg", "g");
      mainMeat.setAttribute("class", "cardsField");
      
      mapSearch.appendChild(iconsDefs);
      mapSearch.appendChild(gridPaths);
      mapSearch.appendChild(junctions);
      mapSearch.appendChild(mainMeat);
      mapSource.appendChild(mapSearch);
      
      interaction.max[mapId] = {
        x: 288,
        y: 288,
        zoomX: 1,
        zoomY: 1
      }
      
      let startNode = explorer.mapNodes.find(n => n.mapId === mapId && n.nodeType === "start");
      let startCard = makeCard(startNode, 0, 0);
      if (!explorer.workingData.areas.find(ar => ar.id === startNode.mapId).hasGameStart) {
        startNode.expanded = true;
        animateChildren(startNode, { val: 1 });
      }
    } else {
      showMap(explorer.currentMap);
    }
    cursor.move(0, 0);
  }
  
  function validateStartup(e) {
    return; /// WHILE OUT OF ORDER
    e.preventDefault();
    let gameInput = document.forms["startupMenu"]["selectedGame"].value;
    const masterFilter = [...Object.keys(games)];
    
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
    /* if (document.forms["startupMenu"]["isRandom"].checked) {
      searchString += "&r=true";
    } */
    if (document.forms["startupMenu"]["colorblind"].checked) {
      searchString += "&c=true";
    }
    if (document.forms["startupMenu"]["useAdvancedColors"].checked) {
      searchString += "&adv=true";
    }
    /* if (document.forms["startupMenu"]["separateAreas"].checked) {
      searchString += "&sep=true";
    } */
    /* if (document.forms["startupMenu"]["selectedLocale"].value !== "other") {
      searchString += "&l=" + document.forms["startupMenu"]["selectedLocale"].value.replace(/[^\w\s]/gi, '');
    } */
    location.search = searchString;
  }
  
  function generate() {
    explorer.workingData = rawData[explorer.currentGame];
    explorer.currentMap = explorer.workingData.areas?.find(el => el.hasGameStart)?.id || 1;
    explorer.isAltworld = false; // will need this for Dark Aether traversal eventually
    explorer.itemCores = makeItemCores();
    explorer.mapNodes = buildMaps();
    
    //console.table(explorer.mapNodes);
    
    cursor.move(0, 0);
    popMap(explorer.currentMap);
  }
  
  function start() {
    return; /// WHILE OUT OF ORDER
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
        console.debug(incomingGame);
        console.debug(rawData[incomingGame]);
        return;
      }
      
      if (document.body.classList) {
        document.body.classList.add("game-mode");
      } else {
        document.body.className += "game-mode";
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
        for (const [key, value] of Object.entries(games)) {
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
        if (menuPointer.classList) {
          menuPointer.classList.add("hide-section");
        } else {
          menuPointer.className += " hide-section";
        }
        
        let target = document.getElementById("mapField");
        if (target.classList) { // browser compatibility logic
          target.classList.remove("hide-section");
          if (explorer.useSprites) {
            target.classList.add("usesSprite");
          }
        } else {
          target.className += target.className.replace(/\bhide-section\b/g);
          if (explorer.useSprites) {
            target.className += " usesSprite";
          }
        }
        
        //console.debug(queryDict, incomingGame);
        
        explorer.generate();
      }
    }
    /* DEBUG W-I-P */
    /* let gamesKeys = [...Object.values(games)];
    
    for (let i = 0; i < gamesKeys.length; i++) {
      explorer.currentGame = gamesKeys[i];
      explorer.workingData = rawData[explorer.currentGame];
      explorer.currentMap = explorer.workingData.areas?.find(el => el.hasGameStart)?.id || 1;
      explorer.itemCores = makeItemCores();
      explorer.mapNodes = buildMaps();
      //console.debug(gamesKeys[i]);
      //console.table(explorer.mapNodes);
    } */
    /*
    explorer.currentGame = "m1";
    explorer.workingData = rawData[explorer.currentGame];
    explorer.currentMap = explorer.workingData.areas?.find(el => el.hasGameStart)?.id || 1;
    explorer.itemCores = makeItemCores();
    explorer.mapNodes = buildMaps();
    console.table(mapNodes);
    */
  }
  
  explorer.nodeType = nodeTypes;
  explorer.validateStartup = validateStartup;
  explorer.generate = generate;
  explorer.start = start;
})();