let tracker = {
  timerState: {
    running: false,
    time: 0,
    timeBeforeLastStart: 0,
    timeOfLastStart: Date.now()
  },
  useSprites: false,
  useAllSprites: false,
  showTotals: false,
  showTimer: false,
  useKeyslots: false,
  isScramble: false,
  scrambleSync: false,
};

let renderingKeyslotTypes = {}
let keyslots = {};

(() => {
  
  const z1m1List = ["m", "z1"];
  const smz3List = ["s", "z3", "z3r",];
  const fangamesList = ["rd", "mc", "a", "t", "p2d", "n", "z2pc",];
  const allMetroidList = ["m", "z", "p", "pb", "h", "e", "c", "ff", "b", "ros", "r", "s", "o", "f", "d"];
  const allZeldaList = ["z1", "z2", "z3", "z3r"];
  const allCastlevaniaList = ["sotn"];
  
  function filterOut([...filter]) {
    let copy = {...this};
    
    filter.forEach(prop => {
      delete copy[prop];
    });
    
    return {...copy};
  }
  
  function match([...list]) {
    let copy = {...this};
    
    Object.keys(copy).forEach(prop => {
      if (!list.includes(prop)) {
        delete copy[prop];
      }
    });
    
    return {...copy};
  }
  
  function am2r_extremeLabs(setOrReturn) {
    let targetId = "";
    if (setOrReturn) {
      targetId = "expansion-monsterDna-21-10";
    } else {
      targetId = "expansion-monsterDna-21-10x";
    }
    const source = document.getElementById(targetId);
    let hintImage = source.querySelector(".hint-image");
    if (setOrReturn) {
      hintImage.alt = "Click middle mouse button to toggle Normal Labs";
    } else {
      hintImage.alt = "Click middle mouse button to toggle Extreme Labs";
    }
    hintImage.title = hintImage.alt;
    
    source.id = setOrReturn ? "expansion-monsterDna-21-10x" : "expansion-monsterDna-21-10";
    source.title = setOrReturn ? source.title + " - Extreme Labs" : source.title.replace(" - Extreme Labs", '');
    
    if (tracker.useSprites) {
      if (source.firstChild.classList) { // browser compatibility logic
        if (!setOrReturn || source.firstChild.classList.contains("monsterEL")) {
          source.firstChild.classList.remove("monsterEL");
          source.firstChild.classList.add("monster");
        } else {
          source.firstChild.classList.remove("monster");
          source.firstChild.classList.add("monsterEL");
        }
      } else {
        if (!setOrReturn || source.firstChild.className.has("monsterEL")) {
          source.firstChild.className += source.firstChild.className.replace(/\bmonsterEL\b/g);
          source.firstChild.className += " monster";
        } else {
          source.firstChild.className += source.firstChild.className.replace(/\bmonster\b/g);
          source.firstChild.className += " monsterEL";
        }
      }
    }
    
    let newP = document.createElement("p");
    newP.innerText = "0 / " + (setOrReturn ? "47" : "9");
    source.replaceChild(newP, source.children[1]);
  }
  
  function aol_dashSpell(setOrReturn) {
    let targetId = "";
    if (setOrReturn) {
      targetId = "item-fireSpell-4";
    } else {
      targetId = "item-dashSpell-4x";
    }
    const source = document.getElementById(targetId);
    let hintImage = source.querySelector(".hint-image");
    if (setOrReturn) {
      hintImage.alt = "Click middle mouse button to toggle Fire Spell";
    } else {
      hintImage.alt = "Click middle mouse button to toggle Dash Spell";
    }
    hintImage.title = hintImage.alt;
    
    source.id = setOrReturn ? "item-dashSpell-4x" : "item-fireSpell-4";
    source.title = setOrReturn ? "Dash Spell" : "Fire Spell";
    
    if (source.firstChild.classList) { // browser compatibility logic
      if (!setOrReturn || source.firstChild.classList.contains("dashSpell")) {
        source.firstChild.classList.remove("dashSpell");
        source.firstChild.classList.add("fireSpell");
      } else {
        source.firstChild.classList.remove("fireSpell");
        source.firstChild.classList.add("dashSpell");
      }
    } else {
      if (!setOrReturn || source.firstChild.className.has("dashSpell")) {
        source.firstChild.className += source.firstChild.className.replace(/\bdashSpell\b/g);
        source.firstChild.className += " fireSpell";
      } else {
        source.firstChild.className += source.firstChild.className.replace(/\bfireSpell\b/g);
        source.firstChild.className += " dashSpell";
      }
    }
  }
  
  function fetchValueById(dom_id, undo) {
    const splitValues = dom_id.split('-');
    let fetched = 0;
    let iteratedAcc = 0;
    let foundItem;
    let elementId;
    
    for (const item of tracker.readyPanels) {
      if (item.hasOwnProperty("segments") && item.segments.length) {
        let earlyBreakout = false;
        let segmentAcc = 0;
        for (const segment of item.segments) {
          foundItem = segment;
          elementId = segment.id;
          if (tracker.useLocale && segment.hasOwnProperty("locale") && segment.locale.hasOwnProperty(tracker.useLocale)) {
            elementId = segment.locale[tracker.useLocale].id;
          }
          if (elementId === splitValues[1] && iteratedAcc === parseInt(splitValues[2]) && segmentAcc === parseInt(splitValues[3])) {
            earlyBreakout = true;
            if (segment.hasOwnProperty("value")) {
              fetched = segment.value;
            } else {
              fetched = 0;
            }
            break;
          }
          segmentAcc++;
        }
        iteratedAcc++;
        if (earlyBreakout) break;
        continue;
      }
      foundItem = item;
      elementId = item.id;
      if (tracker.useLocale && item.hasOwnProperty("locale") && item.locale.hasOwnProperty(tracker.useLocale)) {
        elementId = item.locale[tracker.useLocale].id;
      }
      
      if (elementId === splitValues[1] && iteratedAcc === parseInt(splitValues[2])) {
        if (item.hasOwnProperty("value")) {
          fetched = item.value;
        } else {
          fetched = 0;
        }
        break;
      }
      iteratedAcc++;
    }
    
    if (!tracker.isScramble && tracker.useKeyslots && foundItem.hasOwnProperty("nodeType") && foundItem.nodeType === "slot") {
      if (renderingKeyslotTypes.hasOwnProperty(foundItem.slotType)) {
        fetched = renderingKeyslotTypes[foundItem.slotType] && !undo ? 0 : fetched;
      }
      renderingKeyslotTypes[foundItem.slotType] = undo ? "" : elementId;
    }
    
    return fetched;
  }
  
  function setKeyslot(id) {
    let filteringArray = [];
    let filterAhead = false;
    if (tracker.isScramble || !tracker.useKeyslots) {
      return;
    }
    
    let strippedId = id.split("-")[1];
    let found = tracker.readyPanels.find((element) => {
      if (element.hasOwnProperty("segments") && element.segments.length > 0) {
        for (let j = 0; j < element.segments.length; j++) {
          if (tracker.useLocale && element.segments[j].hasOwnProperty("locale") && element.segments[j].locale.hasOwnProperty(tracker.useLocale)) {
            if (element.segments[j].locale[tracker.useLocale].id === strippedId) {
              return true;
            }
          }
          if (element.segments[j].id === strippedId) {
            return true;
          }
        }
      }
      if (tracker.useLocale && element.hasOwnProperty("locale") && element.locale.hasOwnProperty(tracker.useLocale)) {
        if (element.locale[tracker.useLocale].id === strippedId) {
          return true;
        }
      }
      return element.id === strippedId;
    });
    
    if (keyslots && found.slotType && keyslots[found.slotType].includes(id)) {
      filterAhead = true;
      filteringArray = keyslots[found.slotType].filter(target => target != id);
    }
    if (filterAhead) {
      for (let i = 0; i < filteringArray.length; i++) {
        let target = document.getElementById(filteringArray[i]);
        if (!target) {
          continue;
        }
        if (target.firstChild.classList) { // browser compatibility logic
          if (target.firstChild.classList.contains("deselected")) {
            continue;
          }
          target.firstChild.classList.add("deselected");
        } else {
          let arr = target.firstChild.className.split(" ");
          if (arr.indexOf("deselected") === -1) {
            target.firstChild.className += " deselected";
          }
        }
      }
    }
  }
  
  function clickItem(e) {
    e.preventDefault();
    
    if (tracker.scrambleSync && !e.dontDoAgain) {
      let itemName = e.target.parentElement.id.split('-')[1];
      const allMatchingItems = document.querySelectorAll("[id*=-" + itemName + "]");
      const spriteElement = e.target.parentElement.classList.contains("usesSprite");
      const isItemElement = e.target.parentElement.classList.contains("item");
      const isExpansionElement = e.target.parentElement.classList.contains("expansion");
      if (allMatchingItems) {
        for (let i = 0; i < allMatchingItems.length; i++) {
          itemName = isItemElement ? "item" : "expansion";
          let findChild = [...allMatchingItems[i].childNodes].filter(el => el.className.split(" ").some(n => n.includes(itemName)))[0];
          let eventProp = {
            preventDefault: () => {},
            which: e.which,
            dontDoAgain: true,
            target: findChild,
          }
          clickItem(eventProp);
        }
      }
    }
    
    if (e.which === 1) { // left click
      if (e.target.classList) { // browser compatibility logic
        if (!e.target.classList.contains("deselected")) {
          if ((!tracker.isScramble || (e.target.parentElement.nextSibling && e.target.parentElement.nextSibling.classList.contains("hide-segment"))) && e.target.parentElement.nextSibling) {
            if (e.target.parentElement.nextSibling.id && e.target.parentElement.nextSibling.id.split('-').length === 4) {
              if (
                parseInt(e.target.parentElement.nextSibling.id.split('-')[2]) === parseInt(e.target.parentElement.id.split('-')[2]) && 
                parseInt(e.target.parentElement.nextSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) + 1
              ) {
                e.target.parentElement.classList.add("hide-segment");
                let nextItem = e.target.parentElement.nextSibling;
                let nextImage = nextItem.querySelectorAll(".item-image")[0];
                nextItem.classList.remove("hide-segment");
                nextImage.classList.remove("deselected");
                recycleTotals(fetchValueById(nextItem.id, false));
              }
            }
          }
          return;
        }
        recycleTotals(fetchValueById(e.target.parentElement.id, false));
        setKeyslot(e.target.parentElement.id);
        e.target.classList.remove("deselected");
      } else {
        if (e.target.className.has("deselected")) {
          if ((!tracker.isScramble || (e.target.parentElement.nextSibling && e.target.parentElement.nextSibling.className.has("hide-segment"))) && e.target.parentElement.nextSibling) {
            if (e.target.parentElement.nextSibling.id.split('-').length === 4) {
              if (
                parseInt(e.target.parentElement.nextSibling.id.split('-')[2]) === parseInt(e.target.parentElement.id.split('-')[2]) && 
                parseInt(e.target.parentElement.nextSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) + 1
              ) {
                e.target.parentElement.className += " hide-segment";
                let nextItem = e.target.parentElement.nextSibling;
                let nextImage = nextItem.querySelectorAll(".item-image")[0];
                nextItem.className += nextItem.className.replace(/\bhide\-segment\b/g);
                nextImage.className += nextImage.className.replace(/\bdeselected\b/g);
                recycleTotals(fetchValueById(nextItem.id, false));
              }
            }
          }
          return;
        }
        recycleTotals(fetchValueById(e.target.parentElement.id, false));
        setKeyslot(e.target.parentElement.id);
        e.target.className += e.target.className.replace(/\bdeselected\b/g);
      }
    } else if (e.which == 3) { // right click
      if (e.target.classList) { // browser compatibility logic
        if (e.target.classList.contains("deselected")) {
          return;
        }
        if ((!tracker.isScramble || (e.target.parentElement.previousSibling && e.target.parentElement.previousSibling.classList.contains("hide-segment"))) && e.target.parentElement.previousSibling) {
          if (e.target.parentElement.previousSibling.id && e.target.parentElement.previousSibling.id.split('-').length === 4) {
            if (
              parseInt(e.target.parentElement.previousSibling.id.split('-')[2]) === parseInt(e.target.parentElement.id.split('-')[2]) && 
              parseInt(e.target.parentElement.previousSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) - 1
            ) {
              e.target.parentElement.classList.add("hide-segment");
              let previousItem = e.target.parentElement.previousSibling;
              let previousImage = previousItem.querySelectorAll(".item-image")[0];
              previousItem.classList.remove("hide-segment");
              previousImage.classList.remove("deselected");
            }
          }
        }
        if (
          (e.target.parentElement.getAttribute("typing") === "toggle") ||
          (e.target.parentElement.getAttribute("typing") === "dungeon")
        ) {
          recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id, true)));
          return;
        } else {
          recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id, true)));
          e.target.classList.add("deselected");
        }
      } else {
        if (e.target.className.has("deselected")) {
          if ((!tracker.isScramble || (e.target.parentElement.previousSibling && e.target.parentElement.previousSibling.className.has("hide-segment"))) && e.target.parentElement.previousSibling) {
            if (e.target.parentElement.previousSibling.id.split('-').length === 4) {
              if (
                parseInt(e.target.parentElement.previousSibling.id.split('-')[2]) === parseInt(e.target.parentElement.id.split('-')[2]) && 
                parseInt(e.target.parentElement.previousSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) - 1
              ) {
                e.target.parentElement.className += " hide-segment";
                let previousItem = e.target.parentElement.previousSibling;
                let previousImage = previousItem.querySelectorAll(".item-image")[0];
                previousItem.className += previousItem.className.replace(/\bhide\-segment\b/g);
                previousImage.className += previousImage.className.replace(/\bdeselected\b/g);
              }
            }
          }
          return;
        }
        if (
          (e.target.parentElement.getAttribute("typing") === "toggle") ||
          (e.target.parentElement.getAttribute("typing") === "dungeon")
        ) {
          recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id, true)));
          return;
        } else {
          recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id, true)));
          let arr = e.target.className.split(" ");
          if (arr.indexOf("deselected") === -1) {
            e.target.className += " deselected";
          }
        }
      }
    } else if (e.which == 2) { // middle click
      if (["am2r", "scramble"].includes(tracker.currentGame) && (e.target.parentElement.id.indexOf("expansion-monsterDna") > -1)) {
        am2r_extremeLabs(!document.getElementById("expansion-monsterDna-21-10x"));
      } else if (["aol", "scramble"].includes(tracker.currentGame) && (e.target.parentElement.id.indexOf("item-dashSpell") > -1 || e.target.parentElement.id.indexOf("item-fireSpell") > -1)) {
        aol_dashSpell(!document.getElementById("item-dashSpell-4x"));
      } else {
        clickOverlay(e);
      }
    }
  }
  
  function clickExpansion(e) {
    e.preventDefault();
    
    let values = e.target.parentElement.querySelectorAll("p")[0].innerText.split(" ");
    let previous = parseInt(values[0]);
    let max = parseInt(values[2]);
    if (e.which === 1) { // left click
      if (previous >= max) {
        if (e.target.parentElement.nextSibling) {
          if (e.target.parentElement.nextSibling.id.split('-').length === 4) {
            if (
              e.target.parentElement.nextSibling.id.split('-')[2] == e.target.parentElement.id.split('-')[2] && 
              parseInt(e.target.parentElement.nextSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) + 1
            ) {
              let nextItem = e.target.parentElement.nextSibling;
              let nextImage = nextItem.querySelectorAll(".item-image")[0];
              if (e.target.classList) { // browser compatibility logic
                e.target.parentElement.classList.add("hide-segment");
                nextItem.classList.add("unlocked-down");
                nextItem.classList.remove("hide-segment");
                nextImage.classList.remove("deselected");
              } else {
                e.target.parentElement.className += " hide-segment";
                nextItem.className += " unlocked-down";
                nextItem.className += nextImage.className.replace(/\bhide\-segment\b/g);
                nextImage.className += nextImage.className.replace(/\bdeselected\b/g);
              }
              recycleTotals(fetchValueById(nextItem.id, false));
            }
          }
        }
        return;
      }
      recycleTotals(fetchValueById(e.target.parentElement.id, false));
      setKeyslot(e.target.parentElement.id);
      previous++;
    } else if (e.which === 3) { // right click
      if (previous <= 0) {
        if (e.target.parentElement.previousSibling) {
          if (e.target.parentElement.previousSibling.id && e.target.parentElement.previousSibling.id.split('-').length === 4) {
            if (
              e.target.parentElement.previousSibling.id.split('-')[2] == e.target.parentElement.id.split('-')[2] && 
              parseInt(e.target.parentElement.previousSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) - 1
            ) {
              let previousItem = e.target.parentElement.previousSibling;
              let previousImage = previousItem.querySelectorAll(".item-image")[0];
              if (e.target.classList) { // browser compatibility logic
                e.target.parentElement.classList.add("hide-segment");
                previousItem.classList.add("unlocked-up");
                previousItem.classList.remove("hide-segment");
                previousImage.classList.remove("deselected");
              } else {
                e.target.parentElement.className += " hide-segment";
                previousItem.className += " unlocked-up";
                previousItem.className += previousItem.className.replace(/\bhide\-segment\b/g);
                previousImage.className += previousImage.className.replace(/\bdeselected\b/g);
              }
            }
          }
        }
        return;
      }
      recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id, true)));
      setKeyslot(e.target.parentElement.id);
      previous--;
    } else if (e.which == 2) { // middle click
      if (["am2r", "scramble"].includes(tracker.currentGame) && (e.target.parentElement.id.indexOf("expansion-monsterDna") > -1)) {
        am2r_extremeLabs(!document.getElementById("expansion-monsterDna-21-10x"));
      } else if (["aol", "scramble"].includes(tracker.currentGame) && (e.target.parentElement.id.indexOf("item-dashSpell") > -1 || e.target.parentElement.id.indexOf("item-fireSpell") > -1)) {
        aol_dashSpell(!document.getElementById("item-dashSpell-4x"));
      } else {
        clickOverlay(e);
      }
      return;
    } else {
      return;
    }
    values[0] = previous;

    e.target.parentElement.querySelectorAll("p")[0].innerText = values.join(" ");
    if (
      e.target.parentElement.nextSibling &&
      e.target.parentElement.nextSibling.id.split('-').length === 4 &&
      e.target.parentElement.nextSibling.id.split('-')[2] == e.target.parentElement.id.split('-')[2] && 
      parseInt(e.target.parentElement.nextSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) + 1 &&
      previous === max
    ) {
      if (e.target.classList) { // browser compatibility logic
          e.target.parentElement.classList.add("unlocked-up");
      } else {
          e.target.parentElement.className += " unlocked-up";
      }
    } else {
      if (e.target.classList) { // browser compatibility logic
          e.target.parentElement.classList.remove("unlocked-up");
      } else {
          e.target.parentElement.className += e.target.parentElement.className.replace(/\bunlocked-up\b/g);
      }
    }
    if (
      e.target.parentElement.previousSibling &&
      e.target.parentElement.previousSibling.id.split('-').length === 4 &&
      e.target.parentElement.previousSibling.id.split('-')[2] == e.target.parentElement.id.split('-')[2] && 
      parseInt(e.target.parentElement.previousSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) - 1 &&
      previous == 0
    ) {
      if (e.target.classList) { // browser compatibility logic
        e.target.parentElement.classList.add("unlocked-down");
      } else {
        e.target.parentElement.className += " unlocked-down";
      }
    } else {
      if (e.target.classList) { // browser compatibility logic
        e.target.parentElement.classList.remove("unlocked-down");
      } else {
        e.target.parentElement.className += e.target.parentElement.className.replace(/\bunlocked-down\b/g);
      }
    }
  }
  
  function clickOverlay(e) {
    e.preventDefault();
    
    if (e.which == 2) { // middle click
      if (e.target.parentElement.querySelectorAll(".overlay-image:not(.level-up-image):not(.level-down-image):not(.hint-image)")[0] == undefined) {
        return;
      }
      const itemTitle = e.target.parentElement.querySelectorAll(".item-image")[0].alt;
      const overlayTitle = e.target.parentElement.querySelectorAll(".overlay-image:not(.level-up-image):not(.level-down-image):not(.hint-image)")[0].alt;
      const newTitle = itemTitle + " - " + overlayTitle;
      if (e.target.parentElement.classList) { // browser compatibility logic
        if (!e.target.parentElement.classList.contains("show-over")) {
          e.target.parentElement.classList.add("show-over");
          e.target.parentElement.title = newTitle;
        } else {
          e.target.parentElement.classList.remove("show-over");
          e.target.parentElement.title = itemTitle;
        }
      } else {
        if (e.target.parentElement.className.has("show-over")) {
          e.target.parentElement.className += " show-over";
          e.target.parentElement.title = newTitle;
        } else {
          e.target.parentElement.className += e.className.replace(/\bshowOver\b/g);
          e.target.parentElement.title = itemTitle;
        }
      }
    }
  }
  
  function renderEntry(destination, element, index, elementName, isSegment, isSegmentHidden, maxSegments) {
    if (!tracker.isScramble && element.hasOwnProperty("displayIfScramble") && element.displayIfScramble) {
      return;
    }
    
    if (element.hasOwnProperty("clearIfScramble") && element.clearIfScramble && tracker.isScramble) {
      return;
    }
    
    if (!isSegment) {
      if (element.hasOwnProperty("segments") && element.segments.length > 0) {
        let segmentProgress = element.start;
        for (let j = 0; j < element.segments.length; j++) {
          --segmentProgress;
          let segmentName = "";
          if (elementName && elementName.length) {
            segmentName = elementName;
            if (element.segments[j].name && element.segments[j].name.length) {
              segmentName += " - " + element.segments[j].name;
            }
          } else {
            segmentName = element.segments[j].name;
          }
          renderEntry(destination, element.segments[j], index + "-" + j, segmentName, element.segments.length > 1, segmentProgress <= 0 && j !== 0, element.segments.length);
        }
        return;
      }
    }
    
    let wrapper = document.createElement("div");
    let image = document.createElement("img");
    
    const counterAnyway = (element.hasOwnProperty("type") && element.type === "counter");
    
    const isToggleAnyway = element.hasOwnProperty("type") && (element.type === "toggle" || element.type === "dungeon");
    if (isToggleAnyway) {
      wrapper.setAttribute("typing", element.type);
    }
    
    const isKeyOrGoal = element.hasOwnProperty("nodeType") && (element.nodeType === "key" || element.nodeType === "goal");
    
    let elementId = element.id;
    
    if (tracker.useLocale && element.hasOwnProperty("locale") && element.locale.hasOwnProperty(tracker.useLocale)) {
      elementId = element.locale[tracker.useLocale].id;
    }
    
    const classLabel = counterAnyway || element.max >= 2 ? "expansion" : "item";
    const scrambleCondition = (!tracker.isScramble || (tracker.isScramble && (classLabel === "expansion" || isToggleAnyway || isKeyOrGoal)));
    if (wrapper.classList) {
      if ((elementId === "-" || element.lookupId === -1) && (!isSegment || tracker.isScramble)) {
        wrapper.classList.add("blank");
        if (tracker.useSprites) {
          wrapper.classList.add("trimmed");
        }
      } else {
        wrapper.classList.add(classLabel);
      }
      if (isSegmentHidden && scrambleCondition) {
        wrapper.classList.add("hide-segment");
      }
      if (element.hasOwnProperty("sprite") && tracker.useSprites) {
        wrapper.classList.add("usesSprite");
      }
      if (tracker.useSprites && tracker.useAllSprites) {
        wrapper.classList.add("usesAllSprites");
      }
    } else {
      if ((elementId === "-" || element.lookupId === -1) && (!isSegment || tracker.isScramble)) {
        wrapper.className += " blank";
        if (element.hasOwnProperty("sprite") && tracker.useSprites) {
          wrapper.className += " trimmed";
        }
      } else {
        wrapper.className = classLabel;
      }
      if (isSegmentHidden && scrambleCondition) {
        wrapper.className += " hide-segment";
      }
      if (element.hasOwnProperty("sprite") && tracker.useSprites) {
        wrapper.className += " usesSprite";
      }
      if (tracker.useSprites && tracker.useAllSprites) {
        wrapper.className += " usesAllSprites";
      }
    }
    
    /* if (!tracker.useSprites && element.hasOwnProperty("bg")) {
      wrapper.style.backgroundColor = ("#" + element.bg + "80") || "white";
      wrapper.style.backgroundBlendMode = "multiply";
    } */

    if (image.classList) {
      image.classList.add("item-image");
      if (!counterAnyway && element.max < 2 && element.start < 1 && elementId !== "-" && element.lookupId !== -1) {
        image.classList.add("deselected");
      }
    } else {
      image.className = "item-image ";
      if (!counterAnyway && element.max < 2 && element.start < 1 && elementId !== "-" && element.lookupId !== -1) {
        image.className += " deselected";
      }
    }
    
    if (!((elementId === "-" || element.lookupId === -1) && (!isSegment || tracker.isScramble))) {
      if (!counterAnyway && element.max < 2) {
        image.addEventListener("mousedown", clickItem);
      } else {
        image.addEventListener("mousedown", clickExpansion);
      }
    }
    
    if (elementId === "-" || element.lookupId === -1) {
      if (isSegment) {
        let interimText = JSON.stringify(elementName).split(' ');
        interimText[0] = interimText[0].toLowerCase();
        wrapper.id = classLabel + "-" + interimText.join('').replace(/\W/g, '') + "-" + index;
      }
    } else {
      let trimmedItemName = elementId;
      wrapper.id = classLabel + "-" + trimmedItemName + "-" + index;
      if (element.hasOwnProperty("sprite") && tracker.useSprites) {
        trimmedItemName = element.sprite;
      } else if (tracker.useSprites) {
        if (wrapper.classList) {
          wrapper.classList.add("trimmed");
        } else {
          wrapper.className += " trimmed";
        }
      }
    
      if (image.classList) {
        image.classList.add(trimmedItemName);
      } else {
        image.className += " " + trimmedItemName;
      }
    }
    
    if (!tracker.isScramble && tracker.useKeyslots && element.hasOwnProperty("nodeType") && element.nodeType === "slot" && element.hasOwnProperty("slotType")) {
      if (!keyslots[element.slotType]) {
        keyslots[element.slotType] = [];
      }
      keyslots[element.slotType].push(wrapper.id);
    }
    
    image.src = "images/blank.png";
    image.alt = element.name || elementName || "";
    wrapper.title = elementName || element.name || "";
    
    if (element.hasOwnProperty("back")) {
      let backImage = document.createElement("img");
      backImage.src = "images/blank.png";
      if (backImage.classList) {
        backImage.classList.add("back-image");
        backImage.classList.add(element.back);
      } else {
        backImage.className = "back-image";
        backImage.className += " " + element.back;
      }
      backImage.alt = element.back.split("/")[1];
      wrapper.appendChild(backImage);
    }
    
    wrapper.appendChild(image);
    if (elementId !== "-" && element.lookupId !== -1 && (counterAnyway || element.max > 1)) {
      let label = document.createElement("p");
      label.innerText = element.start + " / " + element.max;
      wrapper.appendChild(label);
    }
    
    if (element.over && element.overText) {
      let overlayImage = document.createElement("img");
      if (overlayImage.classList) {
        overlayImage.classList.add("overlay-image");
        overlayImage.classList.add(element.over);
      } else {
        overlayImage.className = "overlay-image";
        overlayImage.className += " " + element.over;
      }
      overlayImage.src = "images/blank.png";
      overlayImage.alt = element.overText;
      overlayImage.addEventListener("mousedown", clickOverlay);
      overlayImage.height = 16;
      overlayImage.width = 16;
      wrapper.appendChild(overlayImage);
    }
    
    if (isSegment && scrambleCondition) {
      const currentStep = parseInt(index.split('-')[1]);
      if (currentStep + 1 < maxSegments) {
        let levelUp = document.createElement("img");
        levelUp.src = "images/blank.png";
        if (levelUp.classList) {
          levelUp.classList.add("level-up-image");
          levelUp.classList.add("overlay-image");
          wrapper.classList.add("can-level-up");
        } else {
          levelUp.className = "level-up-image";
          levelUp.className += " overlay-image";
          wrapper.className += " can-level-up";
        }
        if (isToggleAnyway) {
          if (levelUp.classList) {
            levelUp.classList.add("Level_Up_Alt");
          } else {
            levelUp.className += " Level_Up_Alt";
          }
        } else {
          if (levelUp.classList) {
            levelUp.classList.add("Level_Up");
          } else {
            levelUp.className += " Level_Up";
          }
        }
        levelUp.alt = "Level Up";
        wrapper.appendChild(levelUp);
      }
      if (currentStep > 0) {
        let levelDown = document.createElement("img");
        levelDown.src = "images/blank.png";
        if (levelDown.classList) {
          levelDown.classList.add("level-down-image");
          levelDown.classList.add("overlay-image");
          wrapper.classList.add("can-level-down");
        } else {
          levelDown.className = "level-down-image";
          levelDown.className += " overlay-image";
          wrapper.className += "can-level-down";
        }
        if (isToggleAnyway) {
          if (levelDown.classList) {
            levelDown.classList.add("Level_Down_Alt");
          } else {
            levelDown.className += " Level_Down_Alt";
          }
        } else {
          if (levelDown.classList) {
            levelDown.classList.add("Level_Down");
          } else {
            levelDown.className += " Level_Down";
          }
        }
        levelDown.alt = "Level Down";
        wrapper.appendChild(levelDown);
      }
    }
    
    if (["am2r", "scramble"].includes(tracker.currentGame) && wrapper.id === "expansion-monsterDna-21-10") {
      let hint = document.createElement("img");
      hint.src = "images/blank.png";
      if (hint.classList) {
        hint.classList.add("overlay-image");
        hint.classList.add("hint-image");
      } else {
        hint.className = "overlay-image";
        hint.className += " hint-image";
      }
      hint.alt = "Click middle mouse button to toggle Extreme Labs";
      hint.title = hint.alt;
      wrapper.appendChild(hint);
    }
    
    if (["aol", "scramble"].includes(tracker.currentGame) && wrapper.id === "item-fireSpell-4") {
      let hint = document.createElement("img");
      hint.src = "images/blank.png";
      if (hint.classList) {
        hint.classList.add("overlay-image");
        hint.classList.add("hint-image");
      } else {
        hint.className = "overlay-image";
        hint.className += " hint-image";
      }
      hint.alt = "Click middle mouse button to toggle Dash Spell";
      hint.title = hint.alt;
      wrapper.appendChild(hint);
    }
    
    destination.appendChild(wrapper);
  }
  
  function recalculatePercentage(textValues) {
    let splitValues = textValues.split('/');
    
    if (textValues.length === 0 || parseInt(splitValues[1]) === 0 || splitValues.length === 0) {
      return;
    }
    let percentageWrapper;
    
    if (tracker.isScramble) {
      // UNDER CONSTRUCTION!
      let gameKey;
      for (const [key, value] of Object.entries(main.games)) {
        if (value == tracker.currentGame) { // TODO: it can't be currentGame!
          gameKey = key;
          break;
        }
      }
      percentageWrapper = document.getElementById("" + gameKey + "-percentage-wrapper");
    } else {
      percentageWrapper = document.getElementById("percentage-wrapper");
    }
    
    let percentageText = percentageWrapper.querySelector("p");
    let calculatedAmount = parseInt(splitValues[1]) != 0 ? 100 * parseInt(splitValues[0]) / parseInt(splitValues[1]) : 0;
    percentageText.innerText = "" + calculatedAmount.toFixed(0) + '%';
  }
  
  function recalculateTotals(already, delta) {
    let splitValues = already.split('/');
    if (already.length === 0 || parseInt(splitValues[1]) === 0 || splitValues.length === 0) {
      return "";
    }
    
    let changedValue = parseInt(splitValues[0]) + parseInt(delta);
    if (changedValue < 0) {
      changedValue = 0;
    }
    if (changedValue > parseInt(splitValues[1])) {
      changedValue = parseInt(splitValues[1]);
    }
    return changedValue + '/' + parseInt(splitValues[1]);
  }
  
  function recycleTotals(change) {
    if (tracker.showTotals) {
      let totalWrapper;
      if (tracker.isScramble) {
        // UNDER CONSTRUCTION!
        let gameKey;
        for (const [key, value] of Object.entries(main.games)) {
          if (value == tracker.currentGame) { // TODO: it can't be currentGame!
            gameKey = key;
            break;
          }
        }
        totalWrapper = document.getElementById("" + gameKey + "-total-wrapper");
      } else {
        totalWrapper = document.getElementById("total-wrapper");
      }
      let totalText = totalWrapper.querySelector("p");
      totalText.innerText = recalculateTotals(totalText.innerText, change);
      recalculatePercentage(totalText.innerText);
    }
  }
  
  function renderPercentage(destination) {
    let twrapper = document.createElement("div");
    let pwrapper = document.createElement("div");
    if (tracker.isScramble) {
      for (const [key, value] of Object.entries(main.games)) {
        if (value == tracker.currentGame) {
          twrapper.id = "" + key + "-total-wrapper";
          pwrapper.id = "" + key + "-percentage-wrapper";
          break;
        }
      }
    } else {
      twrapper.id = "total-wrapper";
      pwrapper.id = "percentage-wrapper";
    }
    
    if (twrapper.classList) {
      twrapper.classList.add("addon-wrapper");
      pwrapper.classList.add("addon-wrapper");
    } else {
      twrapper.className = "addon-wrapper";
      pwrapper.className = "addon-wrapper";
    }
    
    let startingItems = 0;
    let totalItems = tracker.readyPanels.reduce((acc=0, next) => {
      if (next.hasOwnProperty("displayIfScramble")) {
        if (!tracker.isScramble || next.displayIfScramble !== true) {
          return acc;
        }
      }
      if (next.hasOwnProperty("clearIfScramble")) {
        if (tracker.isScramble && next.clearIfScramble === true) {
          return acc;
        }
      }
      if (next.hasOwnProperty("start") && next.hasOwnProperty("value") && next.value) {
        startingItems += next.start;
      }
      if (next.hasOwnProperty("value") && next.hasOwnProperty("max")) {
        if (!tracker.isScramble && tracker.useKeyslots && next.hasOwnProperty("nodeType") && next.nodeType === "slot") {
          if (renderingKeyslotTypes.hasOwnProperty(next.slotType)) {
            return acc;
          }
          renderingKeyslotTypes[next.slotType] = "";
        }
        return acc + (parseInt(next.value) * parseInt(next.max));
      }
      return acc;
    }, 0);
    let totaltext = document.createElement("p");
    totaltext.innerText = "" + startingItems + "/" + totalItems;
    twrapper.appendChild(totaltext);
    destination.appendChild(twrapper);
    
    let percentagetext = document.createElement("p");
    let calculatedAmount = totalItems != 0 ? 100 * startingItems / totalItems : "";
    percentagetext.innerText = totalItems !== 0 ? "" + calculatedAmount.toFixed(0) + "%" : "";
    pwrapper.appendChild(percentagetext);
    destination.appendChild(pwrapper);
    
    recycleTotals(0);
  }
  
  function divmod(a, b) {
    let q = Math.floor(a / b);
    return [q, a - (b * q)];
  }
  
  function updateTimer() {
    tracker.timerState.time = tracker.timerState.timeBeforeLastStart + (tracker.timerState.running ? (Date.now() - tracker.timerState.timeOfLastStart) : 0);
    
    let time = tracker.timerState.time;
    let h, m, s, ms;
    [h, time] = divmod(time, 60 * 60 * 1000);
    [m, time] = divmod(time, 60 * 1000);
    [s, ms] = divmod(time, 1000);
    
    const timerWrapper = document.getElementById("timer-wrapper");
    let timerElement = timerWrapper.querySelector("p");
    let hText = h > 0 ? String(h) + ":" : "";
    let mText = String(m).padStart(2, "0") + ":";
    let sText = String(s).padStart(2, "0");
    let msText = "." + String(ms).padStart(3, "0");
    timerElement.innerText = "" + hText + mText + sText + msText;
  }
  
  function onTimerToggle(e) {
    tracker.timerState.running = !tracker.timerState.running;
    if (tracker.timerState.running) {
      tracker.timerState.timeOfLastStart = Date.now();
    } else {
      tracker.timerState.timeBeforeLastStart = tracker.timerState.time;
    }
  }
  
  function onTimerReset(e) {
    tracker.timerState.running = false;
    tracker.timerState.timeBeforeLastStart = 0;
    tracker.timerState.timeOfLastStart = Date.now();
    updateTimer();
  }
  
  function renderTimer(destination, width) {
    let wrapper = document.createElement("div");
    wrapper.id = "timer-wrapper";
    
    let timerText = document.createElement("p");
    timerText.innerText = "";
    timerText.addEventListener("mousedown", onTimerToggle);
    wrapper.appendChild(timerText);
    
    destination.appendChild(wrapper);
    
    window.setInterval(updateTimer, 10);
    
    let resetWrapper = document.createElement("div");
    resetWrapper.id = "reset-wrapper";
    
    let resetButton = document.createElement("button");
    resetButton.innerText = "Reset";
    resetButton.addEventListener("click", onTimerReset);
    resetWrapper.appendChild(resetButton);
    
    destination.appendChild(resetWrapper);
  }
  
  // scrambleStart
  async function scrambleStart(gamesList) {
    tracker.showTotals = false; // CURRENTLY UNDER CONSTRUCTION
    tracker.showTimer = false; // CURRENTLY UNDER CONSTRUCTION
    tracker.useKeyslots = false;
    
    if (document.body.classList) {
      document.body.classList.add("game-scramble");
    } else {
      document.body.className += " game-scramble";
    }
    tracker.isScramble = true;
    
    const targetingData = document.forms["startupMenu"]["selectedGame"].options;
    
    let targetSection = document.getElementById("itemField");
    if (targetSection.classList) {
      targetSection.classList.add("parent-flex");
    } else {
      targetSection.className = "parent-flex";
    }
    
    let target = document.getElementById("itemField");
    if (target.classList) { // browser compatibility logic
      target.classList.remove("hide-section");
    } else {
      target.className += target.className.replace(/\bhide-section\b/g);
    }
    let menuPointer = document.getElementById("selection");
    menuPointer.remove();
    
    for (let i = 0; i < gamesList.length; i++) {
      const key = gamesList[i];
      const gameId = main.games[key];
      
      tracker.currentGame = gameId;
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
        newSection.classList.add("game-" + gameId);
      } else {
        newSection.className = "flex-field child-field game-" + gameId
      }
      newSection.id = itemFieldName;
      
      let gameTitle = document.createElement("h4");
      gameTitle.innerText = gameName;
      newSection.appendChild(gameTitle);
      
      targetSection.appendChild(newSection);
    
      // add fetch here; must be async because each panel needs to be generated in order
      try {
        // For now, this pulls the same file every single time
        // TODO: split rawdata.json into component files for each game?
        // const response = await fetch('js/rawdata.json');
        const response = await fetch(`${main.jsonDir}/${gameId}.json`);
        const data = await response.json();
        const dataStruct = data[gameId];
        tracker.workingData = dataStruct;
        tracker.generate(itemFieldName);
        
        // CURRENTLY UNDER CONSTRUCTION
        /* if (tracker.showTotals) {
          let targetHeader = targetSection.getElementsByTagName("h4");
          targetHeader = targetHeader[targetHeader.length - 1];
          tracker.renderPercentage(targetHeader);
        } */
      } catch (e) {
        console.error(`failed to fetch JSON for game ${gameId}`);
        console.error(e);
      }
    }
    tracker.currentGame = "scramble"; // to make Extreme Labs and Dash Spell work
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
    let targetC = document.getElementById("showAllSpritesPrompt");
    if (e.target.checked) {
      if (targetA.classList) { // browser compatibility logic
        targetA.classList.remove("hidden");
        targetB.classList.add("hidden");
        targetC.classList.remove("hidden");
      } else {
        targetA.className += target.className.replace(/\bhidden\b/g);
        targetB.className += " hidden";
        targetC.className += target.className.replace(/\bhidden\b/g);
      }
    } else {
      if (targetA.classList) { // browser compatibility logic
        targetA.classList.add("hidden");
        targetB.classList.remove("hidden");
        targetC.classList.add("hidden");
      } else {
        targetA.className += " hidden";
        targetB.className += target.className.replace(/\bhidden\b/g);
        targetC.className += " hidden";
      }
    }
  }
  
  function handleSpriteTypeSelection(e) {
    let targetA = document.getElementById("ifUsingMZMSprites");
    let targetB = document.getElementById("ifNotUsingMZMSprites");
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
      if (scrambleSelectionTarget.classList) {
        scrambleSelectionTarget.classList.remove("hidden");
        scrambleSyncTarget.classList.remove("hidden");
        showTotalsPrompt.classList.add("hidden");
        showTimerTarget.classList.add("hidden");
      } else {
        scrambleSelectionTarget.className += target.className.replace(/\bhidden\b/g);
        scrambleSyncTarget.className += target.className.replace(/\bhidden\b/g);
        showTotalsPrompt.className += " hidden";
        showTimerTarget.className += " hidden";
      }
    } else {
      if (scrambleSelectionTarget.classList) {
        scrambleSelectionTarget.classList.add("hidden");
        scrambleSyncTarget.classList.add("hidden");
        showTotalsPrompt.classList.remove("hidden");
        showTimerTarget.classList.remove("hidden");
      } else {
        scrambleSelectionTarget.className += " hidden";
        scrambleSyncTarget.className += " hidden";
        showTotalsPrompt.className += target.className.replace(/\bhidden\b/g);
        showTimerTarget.className += target.className.replace(/\bhidden\b/g);
      }
    }
  }
  
  function handlePresetSelection(e) {
    if (e.type === "change") {
      let newValue = e.target.value;
      let selectedGames = {...main.games};
      selectedGames.fIn = match;
      selectedGames.fOut = filterOut;
      const masterFilter = [...Object.keys(main.games)];
      
      switch (newValue) {
        case 'all_metroid':
          selectedGames = selectedGames.fIn(allMetroidList);
          break;
        case 'all_zelda':
          selectedGames = selectedGames.fIn(allZeldaList);
          break;
        case 'z1m1':
          selectedGames = selectedGames.fIn(z1m1List);
          break;
        case 'smz3':
          selectedGames = selectedGames.fIn(smz3List);
          break;
        case 'no_fangames':
          selectedGames = selectedGames.fOut(fangamesList);
          break;
        case 'none':
          selectedGames = selectedGames.fIn([]);
          break;
        case 'all':
          selectedGames = selectedGames.fIn(masterFilter);
          break;
        default:
          break;
      }
      
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
  
  
  
  function makePanel(coreData, overrideData = {}, isPostConversion = false) {
    if (coreData.id === "-" || coreData.lookupId === -1) {
      return;
    }
    
    let returnCore = {
      ...coreData,
      ...overrideData,
    };
    
    return returnCore;
  }
  
  function makePanelsOutOfList(incomingArray, overrideData = {}) {
    let returnArray = [];
    for (let i = 0; i < incomingArray.length; i++) {
      let entry = incomingArray[i];
      if (entry.id === "-" || entry.lookupId === -1) {
        continue;
      }
      
      let panel = makePanel(entry, overrideData);
      if (panel) {
        returnArray.push(panel);
      }
    }
    return returnArray;
  }
  
  function makePanels() {
    if (tracker.currentGame && tracker.workingData) {
      let allPanels = [];
      let totalCount = 0;
      
      for (let j = 0; j < tracker.workingData.items.length; j++) {
        let item = tracker.workingData.items[j];
        if (item.segments && item.segments.length) {
          allPanels = [...allPanels, ...makePanelsOutOfList(item.segments)];
        } else if (item.id === "-" || item.lookupId === -1) {
          continue;
        } else {
          allPanels = [...allPanels, makePanel(item)];
        }
      }
      
      allPanels = [...allPanels, ...makePanelsOutOfList(tracker.workingData.bosses, { nodeType:"boss", })];
      allPanels = [...allPanels, ...makePanelsOutOfList(tracker.workingData.extras)];
      
      totalCount += allPanels.length;
      
      let [bossArray, remainderArray5] = main.partition(allPanels, panel => ["boss", "battle"].includes(panel.nodeType));
      let [itemArray, remainderArray7] = main.partition(remainderArray5, panel => ["artifact", "upgrade", "slot", "expansion"].includes(panel.nodeType));
      let [eventArray, remainderArray8] = main.partition(remainderArray7, panel => ["event", "trigger", "toggle", "lore", "easter"].includes(panel.nodeType));
      
      //let tempTotal = bossArray.length + itemArray.length + eventArray.length;
      //if (totalCount !== tempTotal) {
      //  console.warn("count mismatch:", totalCount, "vs", tempTotal, '((', bossArray.length, itemArray.length, eventArray.length, '))');
      //}
      
      //console.debug(bossArray, itemArray, eventArray);
      
      let hierarchy = [...bossArray, ...itemArray, ...eventArray];
      
      let panels = [];
      
      for (let lo = 0; lo < tracker.workingData.checklistLayout.length; lo++) {
        let entry = tracker.workingData.checklistLayout[lo];
        let panel = {};
        let hierarchyLookup = hierarchy.find(source => {
          let lookupCode = -1;
          switch (source.nodeType) {
            case "boss":
            case "battle":
              lookupCode = source.bossId;
              break;
            case "artifact":
            case "upgrade":
            case "slot":
            case "expansion":
              lookupCode = source.itemId;
              break;
            case "event":
            case "trigger":
            case "toggle":
            case "lore":
            case "easter":
              lookupCode = source.extraId;
              break;
          }
          return lookupCode === entry.lookupId;
        });
        panel = {...hierarchyLookup, ...entry};
        
        if (panel.hasOwnProperty("segments") && panel.segments.length) {
          for (let slo = 0; slo < panel.segments.length; slo++) {
            let segmentBase = panel.segments[slo];
            let segmentLookup = hierarchy.find(source => {
              let lookupCode = -1;
              switch (source.nodeType) {
                case "boss":
                case "battle":
                  lookupCode = source.bossId;
                  break;
                case "artifact":
                case "upgrade":
                case "slot":
                case "expansion":
                  lookupCode = source.itemId;
                  break;
                case "event":
                case "trigger":
                case "toggle":
                case "lore":
                case "easter":
                  lookupCode = source.extraId;
                  break;
              }
              return lookupCode === segmentBase.lookupId;
            });
            panel.segments[slo] = {...segmentLookup, ...segmentBase};
          }
        }
        
        panels.push(panel);
      }
      
      return panels;
    }
    console.warn("game and rawData not specified");
    return [];
  }
  
  function generate(destinationId) {
    const destination = document.getElementById(destinationId);
    let itemWidth = 42;
    if (!tracker.useAllSprites && tracker.useSprites && ["msr"].includes(tracker.currentGame)) {
      itemWidth = 50;
    } else if (!tracker.useAllSprites && tracker.useSprites && ["md", "mp", "mp2e"].includes(tracker.currentGame)) {
      itemWidth = 64;
    } else if (tracker.useSprites && ["mpff"].includes(tracker.currentGame)) {
      itemWidth = 64;
    } else if (!tracker.useAllSprites && tracker.useSprites && ["mom"].includes(tracker.currentGame)) {
      itemWidth = 60;
    }
    destination.style.width = "" + ((parseInt(tracker.workingData.checklistWidth) * itemWidth) + ((parseInt(tracker.workingData.checklistWidth) - 1) * 6)) + "px";
    
    // section for main items
    if (tracker.workingData.checklistLayout) {
      tracker.readyPanels = makePanels();
    } else {
      tracker.readyPanels = [...tracker.workingData.items];
    }
    tracker.readyPanels.forEach((element, i) => renderEntry(destination, element, i, element.name || "", false, false, -1));
    
    if (!tracker.isScramble && (tracker.showTotals || tracker.showTimer)) {
      let breakRow = document.createElement("div");
      if (breakRow.classList) {
        breakRow.classList.add("flex-break");
      } else {
        breakRow.className = "flex-break";
      }
      destination.appendChild(breakRow);
    }
    if (!tracker.isScramble && tracker.showTotals) {
      renderPercentage(destination);
    }
    if (!tracker.isScramble && tracker.showTimer) {
      renderTimer(destination, parseInt(tracker.workingData.checklistWidth));
    }
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
    
    let searchString = "?game=";
    
    if (document.forms["startupMenu"]["selectedGame"].value === "scramble") {
      searchString += "scramble";
    } else {
      searchString += main.games[document.forms["startupMenu"]["selectedGame"].value];
    }
    
    if (document.forms["startupMenu"]["useSprites"].checked) {
      searchString += "&s=true";
    }
    if (document.forms["startupMenu"]["useAllSprites"].checked) {
      searchString += "&as=true";
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
      tracker.useSprites = willUseSprites;
      
      let willUseAllSprites = !!queryDict.as;
      willUseAllSprites = !!JSON.parse(willUseAllSprites);
      tracker.useAllSprites = willUseAllSprites;
      
      let willShowTotals = !!queryDict.pt;
      willShowTotals = !!JSON.parse(willShowTotals);
      tracker.showTotals = willShowTotals;
      
      let willShowTimer = !!queryDict.t;
      willShowTimer = !!JSON.parse(willShowTimer);
      tracker.showTimer = willShowTimer;
      
      let willUseKeyslots = !!queryDict.k;
      willUseKeyslots = !!JSON.parse(willUseKeyslots);
      tracker.useKeyslots = willUseKeyslots;
      
      let selectedLocale = queryDict.l || '';
      tracker.useLocale = selectedLocale.length ? selectedLocale : null;
      
      if (incomingGame === "scramble") {
        let gamesList = queryDict.games.split(',');
        let willSyncClicks = !!queryDict.sync;
        willSyncClicks = !!JSON.parse(willSyncClicks);
        tracker.scrambleSync = willSyncClicks;
        tracker.scrambleStart(gamesList);
        return;
      }
      
      // add fetch here; can be sync because nothing else depends on it
      // For now, this pulls the same file every single time
      // TODO: split rawdata.json into component files for each game?
      // fetch('js/rawdata.json')
      fetch(`${main.jsonDir}/${incomingGame}.json`)
        .then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty(incomingGame)) {
            let game = null;
            for (const [key, value] of Object.entries(main.games)) {
              if (value == incomingGame) {
                game = key;
                break;
              }
            }
            tracker.currentGame = incomingGame;
            if (document.body.classList) {
              document.body.classList.add("game-" + incomingGame);
            } else {
              document.body.className += " game-" + incomingGame;
            }
            tracker.workingData = data[incomingGame];
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
            
            tracker.generate("itemField");
          }
        })
        .catch(e => {
          console.error(`failed to fetch JSON for game ${incomingGame}`);
          console.error(e);
        });
    }
  }

  tracker.renderTimer = renderTimer;
  tracker.renderPercentage = renderPercentage;
  tracker.handleTimerSelection = handleTimerSelection;
  tracker.handleSpriteSelection = handleSpriteSelection;
  tracker.handleSpriteTypeSelection = handleSpriteTypeSelection;
  tracker.handleSyncSelection = handleSyncSelection;
  tracker.handleDropdownSelection = handleDropdownSelection;
  tracker.handlePresetSelection = handlePresetSelection;
  tracker.validateStartup = validateStartup;
  tracker.scrambleStart = scrambleStart;
  tracker.generate = generate;
  tracker.start = start;
})();