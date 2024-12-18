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
  const nodeTypes = [
    "none",
    "start", //         circle
    "end", //           circle
    "return", //        up arrow
    "access", //        hexagon
    "lock", //          square; consumption - possession - unknown
    "hazard", //        wedge
    "dropdown", //      down arrow
    "boss", //          circle
    "elevator", //      circle
    "battle", //        circle
    "teleport", //      circle
    "artifact", //      circle
    "upgrade", //       rhombus; required - unknown
    "slot", //          pentagon
    "expansion", //     triangle
    "event", //         circle OR signpost
    "area", //          rectangle
    "map", //           circle
    "trigger", //       rhombus
    "toggle", //        pentagon
    "save", //          wedge
    "recharge", //      wedge
    "lore", //          circle
    "easter", //        wedge
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
    let returnCore = {
      ...overrideData,
      nodeType: overrideData.nodeType || coreData.nodeType,
      children: [],
    };
    
    if (["none", ""].includes(returnCore.nodeType)) {
      return returnCore;
    }
    
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
        returnCore.id = isPostConversion ? coreData.id || 0 : coreData.extraId || coreData.itemId || 0;
        returnCore.displayIcon = isPostConversion ? coreData.displayIcon || "itemSphere" : coreData.id || "itemSphere"; // TODO: add randomized mode, "randomizer"
        returnCore.spriteImage = isPostConversion ? coreData.spriteImage || "" : coreData.sprite || "";
        returnCore.bg = coreData.bg || "ffffff";
        returnCore.itemHoverLabel = isPostConversion ? coreData.itemHoverLabel || "" : coreData.singleItemName || coreData.name || "";
        if (returnCore.nodeType === "slot") {
          returnCore.slotCategoryId = isPostConversion ? coreData.slotCategoryId : coreData.slotType;
        }
        returnCore.isRandomizableItem = isPostConversion ? coreData.isRandomizableItem || false : coreData.random || false;
        returnCore.inverse = isPostConversion ? !!coreData.inverse || false : !!coreData.inverse || false;
        break;
      case "return":
      case "access":
      case "lock":
      case "hazard":
      case "dropdown":
        returnCore = {
          ...returnCore,
          ...coreData,
          ...overrideData,
          lockIds: isPostConversion ? new Set(returnCore.lockIds) || new Set([]) : new Set([]),
          inverse: !!overrideData.inverse,
        };
        returnCore.id = isPostConversion ? coreData.id || 0 : coreData.extraId || coreData.bossId || coreData.itemId || 0;
        returnCore.displayIcon = isPostConversion ? coreData.displayIcon || "" : coreData.id || "";
        returnCore.spriteImage = isPostConversion ? coreData.spriteImage || "" : coreData.sprite || "";
        returnCore.bg = coreData.bg || "ffffff";
        returnCore.itemHoverLabel = isPostConversion ? coreData.itemHoverLabel || "" : coreData.singleItemName || coreData.name || "";
        returnCore.inverse = isPostConversion ? !!coreData.inverse || !!overrideData.inverse || false : !!coreData.inverse || !!overrideData.inverse || false; // might need to reduce into pathData object
        if (coreData.id) returnCore.lockIds.add(coreData.id);
        if (overrideData.id) returnCore.lockIds.add(overrideData.id);
        if (coreData.lockIds) returnCore.lockIds.add([...coreData.lockIds]);
        if (overrideData.lockIds) returnCore.lockIds.add([...overrideData.lockIds]);
        returnCore.lockIds = [...returnCore.lockIds];
        break;
      case "start":
      case "end":
      case "elevator":
      case "teleport":
      case "event":
      case "area":
      case "map":
      case "trigger":
      case "toggle":
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
          returnCore.slotCategoryId = isPostConversion ? coreData.slotCategoryId : coreData.slotType;
        }
        if (["elevator", "teleport"].includes(returnCore.nodeType)) {
          returnCore.toStartHubId = isPostConversion ? coreData.toStartHubId : 0;
          returnCore.transportToMapId = isPostConversion ? coreData.transportToMapId : 0;
          returnCore.itemHoverLabel = explorer.workingData.areas.find(area => area.id === returnCore.transportToMapId)?.name || "TRANSPORT";
          if (coreData.hasOwnProperty("hubId")) { // TODO: need to fix the explicit connection between transports and destination hubs
            returnCore.hubId = coreData.hubId;
          }
        }
        if (["start"].includes(returnCore.nodeType)) {
          returnCore.toMapId = isPostConversion ? coreData.toMapId : 0;
        }
        if (["end"].includes(returnCore.nodeType)) {
          returnCore.itemHoverLabel = "END";
        }
        break;
      case "":
      case "none":
        break;
    }
    
    if (coreData.specialCollectionBehavior) {
      returnCore.specialCollectionBehavior = true;
      returnCore.specialCollectionKey = coreData.specialCollectionKey;
      returnCore.affectsItemIds = [...coreData.affectsItemIds];
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
  
  function makeCores() {
    if (explorer.currentGame && explorer.workingData) {
      let itemCores = [...makeCoresOutOfList(explorer.workingData.items)]
      let bossCores = [...makeCoresOutOfList(explorer.workingData.bosses, { nodeType:"boss", bg: "747474", })];
      let extraCores = [...makeCoresOutOfList(explorer.workingData.extras)];
      let allCores = [...itemCores, ...bossCores, ...extraCores];
      let hierarchy = allCores.sort((a,b) => a.nodeType === b.nodeType ? b.id - a.id : nodeTypes.indexOf(a.nodeType) - nodeTypes.indexOf(b.nodeType));
      
      let iconsDefsWrapper = document.getElementById("iconsDefs");
      
      let measurementSet = new Set();
      let imageSources = new Set();
      
      for (let r = 0; r < hierarchy.length; r++) {
        let usesSpriteAfterAll = 0;
        let itemClassName = hierarchy[r].displayIcon;
        let queryStringCheck = `.item-image.${itemClassName}`;
        let measurement = 42;
        let sourcex = 860;
        let sourcey = 860;
        let doRDAccessLockException = false;
        let doM1BossLockException = false;
        
        if (explorer.currentGame === "mrd" && ["m_lock1", "m_lock2"].includes(itemClassName)) {
          doRDAccessLockException = true;
          sourcex = 336;
          sourcey = 84;
        }
        
        if (explorer.currentGame === "m1" && ["kraid", "ridley"].includes(itemClassName)) {
          // TODO: need to test that this actually works; might need to see why Boss cores aren't passing sprite/ID images forward?
          doM1BossLockException = true;
          sourcex = 168;
          sourcey = 126;
        }
        
        if (explorer.useAllSprites) {
          usesSpriteAfterAll = 2;
          queryStringCheck = `.game-${explorer.currentGame} .usesAllSprites .item-image.${itemClassName}`;
          if (hierarchy[r].spriteImage) {
            itemClassName = hierarchy[r].spriteImage;
          }
          if (["random", "itemOrb", "unused"].includes(itemClassName)) {
            queryStringCheck = `.usesAllSprites .item-image.${itemClassName}`;
          }
          sourcex = 672;
          sourcey = 630;
        } else if (explorer.useSprites && hierarchy[r].spriteImage) {
          usesSpriteAfterAll = 1;
          itemClassName = hierarchy[r].spriteImage;
          queryStringCheck = `.game-${explorer.currentGame} .usesSprite .item-image.${itemClassName}`;
          switch (explorer.currentGame) {
            case "mrd":
              sourcex = 336;
              sourcey = 84;
              break;
            case "m1":
            case "p2d":
              sourcex = 168;
              sourcey = 126;
              break;
            case "mzm":
              sourcex = 252;
              sourcey = 210;
              break;
            case "mp":
            case "mp2e":
            case "mp3c":
              measurement = 64;
              break;
            case "m2ros":
              sourcex = 168;
              sourcey = 168;
              break;
            case "pb":
            case "ph":
            case "mcon":
            case "am2r":
              sourcex = 252;
              sourcey = 252;
              break;
            case "msr":
              measurement = 50;
              sourcex = 350;
              sourcey = 300;
              break;
            case "sm":
              sourcex = 256;
              sourcey = 168;
              break;
            case "mom":
              measurement = 60;
              sourcex = 240;
              sourcey = 240;
              break;
            case "mf":
              sourcex = 258;
              sourcey = 215;
              break;
            case "mkc":
            case "mng":
            case "mttne":
              sourcex = 336;
              sourcey = 252;
              break;
            case "md":
            case "mpff":
              measurement = 64;
              sourcex = 256;
              sourcey = 192;
              break;
          }
        }
        
        if (itemClassName.length && !["unused", "none", ""].includes(itemClassName)) {
          let destination = document.getElementById("selection");
          let wrapper = document.createElement("div");
          let tempImage = document.createElement("img");
          if (tempImage.classList) {
            tempImage.classList.add("item-image");
            wrapper.classList.add("hide");
            if (usesSpriteAfterAll > 0) {
              wrapper.classList.add("usesSprite");
              if (usesSpriteAfterAll > 1) {
                wrapper.classList.add("usesAllSprites");
              }
            }
            tempImage.classList.add(itemClassName);
          } else {
            tempImage.className = "item-image ";
            wrapper.className = "hide";
            if (usesSpriteAfterAll > 0) {
              wrapper.className += " usesSprite";
              if (usesSpriteAfterAll > 1) {
                wrapper.className += " usesAllSprites";
              }
            }
            tempImage.className += " " + itemClassName;
          }
          wrapper.appendChild(tempImage);
          destination.appendChild(wrapper);
          
          let queryResult = document.querySelector(queryStringCheck);
          if (queryResult) {
            let styleResult = getComputedStyle(queryResult);
            
            if (styleResult.background !== "none") {
              let step1 = styleResult.background.split('url("')[1].split('") ');
              let attemptToGetImageUrl = step1[0];
              let fileName = attemptToGetImageUrl.split("/")[1].split(".")[0];
              let positions = step1[1].split(' ');
              let xpos = 0 - Math.abs(parseInt(positions[0]));
              let ypos = 0 - Math.abs(parseInt(positions[1]));
              
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
                
                if (["mp, mp2e", "mcon", "sm"].includes(explorer.currentGame) || doRDAccessLockException || doM1BossLockException) {
                  switch (fileName) {
                    case "m1_spritesheet":
                      sourcex = 168;
                      sourcey = 126;
                      break;
                    case "rd_spritesheet":
                      sourcex = 336;
                      sourcey = 84;
                      break;
                    case "mzm_spritesheet":
                      sourcex = 252;
                      sourcey = 210;
                      break;
                    case "mp_spritesheet":
                      sourcex = 256;
                      sourcey = 256;
                      break;
                    case "mpswf_spritesheet":
                      sourcex = 320;
                      sourcey = 320;
                      break;
                    case "am2r_spritesheet":
                      sourcex = 252;
                      sourcey = 252;
                      break;
                    case "sm_spritesheet":
                      sourcex = 252;
                      sourcey = 168;
                      break;
                    case "mf_spritesheet":
                      sourcex = 258;
                      sourcey = 215;
                      break;
                    default:
                      break;
                  }
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
      
      return hierarchy;
    }
    console.warn("game and rawData not specified");
    return [];
  }
  
  function buildMaps() {
    let listOfNodes = [];
    let runningNodeId = 1;
    let setOfHubIds = new Set();
    let hubsAndVines = [];
    
    let processChildren = (parentNode) => {
      // parent should already be processed, just needs its children assigned to it
      let childrenIdList = new Set();
      
      if (parentNode.hasOwnProperty("children")) {
        if (parentNode.children.length > 0) {
          // process children
          for (let i = 0; i < parentNode.children.length; i++) {
            // if child is JUST the ID integer, no itemNode needed, just pass in the ID
            const child = parentNode.children[i];
            if (typeof child === 'integer') {
              childrenIdList.add(child);
              continue;
            }
            
            // else, process the child as an object
            const itemCore = explorer.itemCores.find(el => el.id === child.id);
            let childItemNodeToSave = itemCore ? makeCore(itemCore, {...child}, true) : makeCore(child, {}, true);
            childItemNodeToSave = {
              ...childItemNodeToSave,
              nodeId: runningNodeId++,
              parentIds: [parentNode.nodeId], // will deal with vines after all nodes are processed
              mapId: parentNode.mapId,
              cardId: "",
            };
            childrenIdList.add(childItemNodeToSave.nodeId);
            
            // now recursively process children
            let childItemNodeWithChildren = { ...childItemNodeToSave};
            delete childItemNodeToSave.children;
            if (child.hasOwnProperty("children")) {
              childItemNodeWithChildren.children = [...child.children];
            } else {
              delete childItemNodeWithChildren.children;
            }
            
            const childrenIds = processChildren(childItemNodeWithChildren);
            childItemNodeToSave.children = arrayCleanAdd([], [...childrenIds]);
            
            listOfNodes.push(childItemNodeToSave);
          }
        } else {
          // vine
        }
      }
      // get vineToHubId info if applicable
      if (parentNode.hasOwnProperty("vineToHubId")) {
        // there are the parents of a vine
        if (!hubsAndVines[parentNode.vineToHubId]) {
          // create a new hub if it doesn't exist
          hubsAndVines[parentNode.vineToHubId] = {
            parents: new Set(),
            children: new Set()
          };
        }
        hubsAndVines[parentNode.vineToHubId].parents.add(parentNode.nodeId);
      }
      
      // get hubId info if applicable
      if (parentNode.hasOwnProperty("hubId")) {
        console.log(parentNode, parentNode.hubId);
        // there are the children of a vine
        if (!hubsAndVines[parentNode.hubId]) {
          // create a new hub if it doesn't exist
          hubsAndVines[parentNode.hubId] = {
            parents: new Set(),
            children: new Set()
          };
        }
        hubsAndVines[parentNode.hubId].children.add(parentNode.nodeId);
      }
      // save children ids to parent node
      return [...childrenIdList];
    };
    
    if (explorer.currentGame && explorer.workingData && explorer.workingData.mapTree && explorer.itemCores) {
      // map all nodes with children
      for (let i = 0; i < explorer.workingData.mapTree.length; i++) {
        const startingHub = explorer.workingData.mapTree[i];
        let startNode = {
          ...makeCore({...startingHub, name: "START"}),
          nodeId: runningNodeId++,
          parentIds: [-1],
          expanded: !(startingHub.hubId === 1 || startingHub.hubId === 0),
          mapId: startingHub.mapId,
          hubId: startingHub.hubId,
          cardId: "",
        };
        let startNodeWithChildren = {...startNode };
        delete startNode.children;
        if (startingHub.hasOwnProperty("children")) {
          startNodeWithChildren.children = [...startingHub.children];
        } else {
          delete startNodeWithChildren.children;
        }
        const childrenIds = processChildren(startNodeWithChildren);
        
        startNode.children = arrayCleanAdd(startNode.children, [...childrenIds]);
        listOfNodes.push(startNode);
      }
      
      // finalize vine connections
      for (let hubId = 0; hubId < hubsAndVines.length; hubId++) {
        if (hubsAndVines[hubId]) {
          const vineData = hubsAndVines[hubId];
          const parentList = [...vineData.parents];
          const childList = [...vineData.children];
          for (let i = 0; i < parentList.length; i++) {
            const parentId = parentList[i];
            const foundNodeIndex = listOfNodes.findIndex(node => node.nodeId === parentId);
            if (foundNodeIndex > -1) {
              listOfNodes[foundNodeIndex].children = arrayCleanAdd(listOfNodes[foundNodeIndex].children, childList);
            }
          }
          for (let i = 0; i < childList.length; i++) {
            const childId = childList[i];
            const foundNodeIndex = listOfNodes.findIndex(node => node.nodeId === childId);
            if (foundNodeIndex > -1) {
              listOfNodes[foundNodeIndex].parentIds = arrayCleanAdd(listOfNodes[foundNodeIndex].parentIds, parentList);
            }
          }
        }
      }
      
      // finalize transporter nodes
      for (let i = 0; i < listOfNodes.length; i++) {
        if (listOfNodes[i].hasOwnProperty("transportToMapId")) {
          for (let j = 0; j < listOfNodes.length; j++) {
            if (listOfNodes[j].nodeType === "start" && 
              listOfNodes[j].mapId === listOfNodes[i].transportToMapId &&
              listOfNodes[j].hubId === listOfNodes[i].toStartHubId
            ) {
              let areaFound = explorer.workingData.areas.find(area => area.id === listOfNodes[i].mapId);
              if (areaFound) {
                let departureName = areaFound.name;
                listOfNodes[j].itemHoverLabel = departureName;
                listOfNodes[j].toMapId = listOfNodes[i].mapId;
                listOfNodes[j].bg = explorer.advancedColors ? explorer.workingData.areas.find(area => area.id === listOfNodes[i].transportToMapId)?.color || "ffffff" : "ffffff";
              }
            }
          }
        }
      }
      
      // order all nodes in the proper order
      return listOfNodes.sort((a,b) => explorer.workingData.areas.findIndex(area => area.id === a.mapId) - explorer.workingData.areas.findIndex(area => area.id === b.mapId) || a.nodeId - b.nodeId);
    }
    return [];
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
    let departure = explorer.mapTree.find(n => n.nodeId === findId);
    
    if (departure === null) {
      console.error("Could not find this root!");
    }
    
    let destination = explorer.mapTree.find(n => n.mapId === departure.toMapId && n.nodeType === "start");
    console.log(departure, destination);
    if (!departure.expanded) {
      departure.expanded = true;
      animateChildren(departure, { val: 1 });
    }
    
    // TODO: fix issue with explicit connections between transports and start nodes
    if (departure.hubId !== 1 && departure.mapId !== destination.mapId) {
      popMap(destination);
    }
  }
  
  function clickElevator(e) {
    let groupCard = e.target.parentElement;
    let str = groupCard.id.split("_")[1];
    let findId = str.match(digitPattern);
    findId = parseInt(findId[0]);
    let departure = explorer.mapTree.find(n => n.nodeId === findId);
    let destination = explorer.mapTree.find(n => n.hubId === departure.toStartHubId && n.mapId === departure.transportToMapId);
    console.log(departure, destination);
     // TODO: fix issue with explicit connections between transports and start nodes
    if (departure.mapId !== destination.mapId) {
      popMap(destination);
    }
  }
  
  function getCurrentMapElement(childCategory) {
    let returnValue = null;
    let mapSearch = document.getElementById(`mapSVG-${explorer.currentMap}`);
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
    let mapSearch = document.getElementById(`mapSVG-${explorer.currentMap}`);
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
    
    if (!explorer.mapTree.find(n => n.mapId === explorer.currentMap && n.nodeType === "start")?.expanded) {
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
    let nodeName = cardData.nodeType + cardData.nodeId;
    cardData.cardId = `mapSVG-${cardData.mapId}_${nodeName}`;
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
      case "access":
        selectedShape = "hex_down";
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
      case "hazard":
        selectedShape = "tri";
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
      case "boss":
        selectedShape = "circle";
        if (explorer.allowColors) imageClasses.add("key-image");
        hoverCapture = doNothing;
        clickCapture = doNothing;
        fillColor = "#" + cardData.bg;
        break;
      case "elevator":
        selectedShape = "circle";
        hoverCapture = hoverBasic;
        clickCapture = clickElevator;
        fillColor = "#" + (explorer.advancedColors ? explorer.workingData.areas.find(ar => ar.id === cardData.transportToMapId).color : cardData.bg);
        break;
      case "battle":
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
      case "area":
        selectedShape = "rect";
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
    
    let imageName = explorer.useSprites || explorer.useAllSprites ? cardData.spriteImage : cardData.displayIcon;
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
      let childNode = explorer.mapTree.find(n => n.nodeId === childId);
      let previousSibling = previousSiblingId ? explorer.mapTree.find(n => n.nodeId === previousSiblingId) : null;
      
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
      let childNode = explorer.mapTree.find(n => n.nodeId === childId);
      let previousSibling = previousSiblingId ? explorer.mapTree.find(n => n.nodeId === previousSiblingId) : null;
      
      
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
    let mapSearch = document.getElementById(`mapSVG-${mapId}`);
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
  
  function hideAllMaps() {
    const mapSource = document.getElementById("mapField");
    const mapSVGList = mapSource.getElementsByClassName("map-svg");
    // console.log(mapSource, mapSVGList);
    
    for (let i = 0; i < mapSVGList.length; i++) {
      const mapNode = mapSVGList[i];
      const mapId = mapNode.id.split("-")[1];
      // console.log(mapNode, mapId);
      hideMap(mapId);
    }
  }
  
  function showMap(mapId) {
    let mapSearch = document.getElementById(`mapSVG-${mapId}`);
    if (mapSearch !== null) {
      if (mapSearch.classList) {
        mapSearch.classList.remove("hide-map");
      } else {
        mapSearch.className += mapSearch.className.replace(/\bhide-map\b/g);
      }
    }
  }
  
  function popMap(startNode) {
    hideAllMaps();
    const mapId = startNode.mapId;
    console.log(startNode);
    const hubId = startNode.hubId;
    explorer.currentMap = mapId;
    
    let mapSource = document.getElementById("mapField");
    let mapSearch = document.getElementById(`mapSVG-${mapId}`);
    
    // if map page doesn't already exist, create it
    if (!mapSearch) {
      mapSearch = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      mapSearch.setAttribute("id", `mapSVG-${mapId}`);
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
      let startCard = makeCard(startNode, 0, 0);
      if (!(explorer.workingData.areas.find(ar => ar.id === startNode.mapId).hasGameStart && startNode.hubId === 1)) {
        startNode.expanded = true;
        
        
        
        // WE ARE HERE
        
        
        
        animateChildren(startNode, { val: 1 });
      }
    } else { // otherwise, switch to it
      showMap(mapId);
    }
    cursor.move(0, 0);
  }
  
  function old__popMap(mapId) {
    let mapSource = document.getElementById("mapField");
    let mapSearch = document.getElementById(`mapSVG-${mapId}`);
    hideAllMaps();
    explorer.currentMap = mapId;
    // if map page doesn't already exist, create it
    if (!mapSearch) {
      mapSearch = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      mapSearch.setAttribute("id", `mapSVG-${mapId}`);
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
      let startNode = explorer.mapTree.find(n => n.mapId === mapId && n.nodeType === "start");
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
    //return; /// WHILE OUT OF ORDER
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
    //explorer.useAllSprites = true;
    explorer.currentMap = explorer.workingData.areas?.find(el => el.hasGameStart)?.id || 1;
    explorer.isAltworld = false; // will need this for Dark Aether traversal eventually
    explorer.itemCores = makeCores();
    explorer.mapTree = buildMaps();
    
    console.table(explorer.mapTree);
    
    const startingNode = explorer.mapTree.find(n => n.mapId === explorer.currentMap && n.nodeType === "start" && n.hubId === 1);
    
    cursor.move(0, 0);
    // TODO: make the grid background
    popMap(startingNode);
  }
  
  function start() {
    //return; /// WHILE OUT OF ORDER
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
      
      let willUseSprites = !!queryDict.s;
      willUseSprites = !!JSON.parse(willUseSprites);
      explorer.useSprites = willUseSprites;
      
      let willUseAllSprites = !!queryDict.as;
      willUseAllSprites = !!JSON.parse(willUseAllSprites);
      explorer.useAllSprites = willUseAllSprites;
      
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
      
      // add fetch here; can be sync because nothing else depends on it
      fetch(`${main.jsonDir}/${incomingGame}.json`)
        .then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty(incomingGame)) {
            if (!data[incomingGame].hasOwnProperty("mapTree") || !(data[incomingGame].mapTree.length > 0)) {
              console.debug(data[incomingGame]);
              throw "game is not ready for Explorer Mode";
            }
            let game = null;
            for (const [key, value] of Object.entries(main.games)) {
              if (value == incomingGame) {
                game = key;
                break;
              }
            }
            explorer.currentGame = incomingGame;
            if (document.body.classList) {
              document.body.classList.add("game-" + incomingGame);
            } else {
              document.body.className += " game-" + incomingGame;
            }
            explorer.workingData = data[incomingGame];
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
              if (explorer.useSprites || explorer.useAllSprites) {
                target.classList.add("usesSprite");
              }
            } else {
              target.className += target.className.replace(/\bhide-section\b/g);
              if (explorer.useSprites || explorer.useAllSprites) {
                target.className += " usesSprite";
              }
            }
            
            //console.debug(queryDict, incomingGame);
            explorer.generate();
          }
        })
        .catch(e => {
          console.error(`failed to fetch JSON for game ${incomingGame}`);
          console.error(e);
        });
    }
  }
  
  explorer.nodeType = nodeTypes;
  explorer.validateStartup = validateStartup;
  explorer.generate = generate;
  explorer.start = start;
})();