let feature = {
  timerState: {
    running: false,
    time: 0,
    timeBeforeLastStart: 0,
    timeOfLastStart: Date.now()
  }
};

(() => {
  
  function am2r_extremeLabs(setOrReturn) {
    let targetId = "";
    if (setOrReturn) {
      targetId = "expansion-monsterDna-21-10";
    } else {
      targetId = "expansion-monsterDna-21-10x";
    }
    const source = document.getElementById(targetId);
    let hintImage = source.querySelector(".hint-image");
    if (hintImage) source.removeChild(hintImage);
    
    source.id = setOrReturn ? "expansion-monsterDna-21-10x" : "expansion-monsterDna-21-10";
    source.title = setOrReturn ? source.title + " - Extreme Labs" : source.title.replace(" - Extreme Labs", '');
    
    if (main.useSprites) {
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
  
  function fetchValueById(dom_id) {
    const splitValues = dom_id.split('-');
    let fetched = 0;
    
    for (const item of feature.workingData.items) {
      if (item.hasOwnProperty("segments") && item.segments.length) {
        let earlyBreakout = false;
        for (const segment of item.segments) {
          if (segment.id === splitValues[1]) {
            earlyBreakout = true;
            if (segment.hasOwnProperty("value")) {
              fetched = segment.value;
            } else {
              fetched = 0;
            }
            break;
          }
        }
        if (earlyBreakout) break;
        continue;
      }
      
      if (item.id === splitValues[1]) {
        if (item.hasOwnProperty("value")) {
          fetched = item.value;
        } else {
          fetched = 0;
        }
        break;
      }
    }
    
    return fetched;
  }
  
  function clickItem(e) {
    e.preventDefault();
    
    if (e.which === 1) { // left click
      if (e.target.classList) { // browser compatibility logic
        if (!e.target.classList.contains("deselected")) {
          if (e.target.parentElement.nextSibling) {
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
                recycleTotals(fetchValueById(e.target.parentElement.nextSibling.id));
              }
            }
          }
          return;
        }
        recycleTotals(fetchValueById(e.target.parentElement.id));
        e.target.classList.remove("deselected");
      } else {
        if (e.target.className.has("deselected")) {
          if (e.target.parentElement.nextSibling) {
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
                recycleTotals(fetchValueById(e.target.parentElement.nextSibling.id));
              }
            }
          }
          return;
        }
        recycleTotals(fetchValueById(e.target.parentElement.id));
        e.target.className += e.target.className.replace(/\bdeselected\b/g);
      }
    } else if (e.which == 3) { // right click
      if (e.target.classList) { // browser compatibility logic
        if (e.target.classList.contains("deselected")) {
          return;
        }
        if (e.target.parentElement.previousSibling) {
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
          recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id)));
          return;
        } else {
          recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id)));
          e.target.classList.add("deselected");
        }
      } else {
        if (e.target.className.has("deselected")) {
          if (e.target.parentElement.previousSibling) {
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
          recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id)));
          return;
        } else {
          recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id)));
          let arr = e.target.className.split(" ");
          if (arr.indexOf("deselected") === -1) {
            e.target.className += " deselected";
          }
        }
      }
    } else if (e.which == 2) { // middle click
      if (feature.currentGame === "am2r" && (e.target.parentElement.id.indexOf("expansion-monsterDna") > -1)) {
        am2r_extremeLabs(!document.getElementById("expansion-monsterDna-21-10x"));
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
            }
          }
        }
        return;
      }
      recycleTotals(fetchValueById(e.target.parentElement.id));
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
      recycleTotals(0 - parseInt(fetchValueById(e.target.parentElement.id)));
      previous--;
    } else if (e.which == 2) { // middle click
      if (feature.currentGame === "am2r" && (e.target.parentElement.id.indexOf("expansion-monsterDna") > -1)) {
        am2r_extremeLabs(!document.getElementById("expansion-monsterDna-21-10x"));
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
          e.target.parentElement.className += e.target.parentElement.className.replace(/\unlocked-up\b/g);
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
        e.target.parentElement.className += e.target.parentElement.className.replace(/\unlocked-down\b/g);
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
    
    if (element.hasOwnProperty("type") && (element.type === "toggle" || element.type === "dungeon")) {
      wrapper.setAttribute("typing", element.type);
    }
    
    const classLabel = counterAnyway || element.max >= 2 ? "expansion" : "item";
    if (wrapper.classList) {
      if (element.id === "-" && !isSegment) {
        wrapper.classList.add("blank");
      } else {
        wrapper.classList.add(classLabel);
      }
      if (isSegmentHidden) {
        wrapper.classList.add("hide-segment");
      }
      if (element.hasOwnProperty("sprite") && main.useSprites) {
        wrapper.classList.add("usesSprite");
      }
    } else {
      if (element.id === "-" && !isSegment) {
        wrapper.className += " blank";
      } else {
        wrapper.className = classLabel;
      }
      if (isSegmentHidden) {
        wrapper.className += " hide-segment";
      }
      if (element.hasOwnProperty("sprite") && main.useSprites) {
        wrapper.className += " usesSprite";
      }
    }
    
    /* if (!main.useSprites && element.hasOwnProperty("bg")) {
      wrapper.style.backgroundColor = ("#" + element.bg + "80") || "white";
      wrapper.style.backgroundBlendMode = "multiply";
    } */

    if (image.classList) {
      image.classList.add("item-image");
      if (!counterAnyway && element.max < 2 && element.start < 1 && element.id !== "-") {
        image.classList.add("deselected");
      }
    } else {
      image.className = "item-image ";
      if (!counterAnyway && element.max < 2 && element.start < 1 && element.id !== "-") {
        image.className += " deselected";
      }
    }
    
    if (!(element.id === "-" && !isSegment)) {
      if (!counterAnyway && element.max < 2) {
        image.addEventListener("mousedown", clickItem);
      } else {
        image.addEventListener("mousedown", clickExpansion);
      }
    }
    
    if (element.id === "-") {
      if (isSegment) {
        let interimText = JSON.stringify(elementName).split(' ');
        interimText[0] = interimText[0].toLowerCase();
        wrapper.id = classLabel + "-" + interimText.join('').replace(/\W/g, '') + "-" + index;
      }
    } else {
      let trimmedItemName = element.id;
      wrapper.id = classLabel + "-" + trimmedItemName + "-" + index;
      if (element.hasOwnProperty("sprite") && main.useSprites) {
        trimmedItemName = element.sprite;
      }
    
      if (image.classList) {
        image.classList.add(trimmedItemName);
      } else {
        image.className += " " + trimmedItemName;
      }
    }
    image.src = "images/blank.png";
    
    image.alt = element.name || elementName;
    wrapper.title = elementName || element.name;
    
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
    if (element.id !== "-" && (counterAnyway || element.max > 1)) {
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
    
    if (isSegment) {
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
        if (
          element.hasOwnProperty("type") && 
          (element.type === "toggle" || element.type == "dungeon")
        ) {
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
        if (
          element.hasOwnProperty("type") && 
          (element.type === "toggle" || element.type == "dungeon")
        ) {
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
    
    if (feature.currentGame === "am2r" && wrapper.id === "expansion-monsterDna-21-10") {
      let hint = document.createElement("img");
      hint.src = "images/blank.png";
      if (hint.classList) {
        hint.classList.add("overlay-image");
        hint.classList.add("hint-image");
      } else {
        hint.className = "overlay-image";
        hint.className += " hint-image";
      }
      hint.alt = "Toggle Extreme Labs";
      wrapper.appendChild(hint);
    }
    
    destination.appendChild(wrapper);
  }
  
  function recalculatePercentage(textValues) {
    const percentageWrapper = document.getElementById("percentage-wrapper");
    let percentageText = percentageWrapper.querySelector("p");
    
    let splitValues = textValues.split('/');
    let calculatedAmount = parseInt(splitValues[1]) != 0 ? 100 * parseInt(splitValues[0]) / parseInt(splitValues[1]) : 0;
    percentageText.innerText = "" + calculatedAmount.toFixed(0) + '%';
  }
  
  function recalculateTotals(already, delta) {
    let splitValues = already.split('/');
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
    if (main.showTotals) {
      const totalWrapper = document.getElementById("total-wrapper");
      let totalText = totalWrapper.querySelector("p");
      totalText.innerText = recalculateTotals(totalText.innerText, change);
      recalculatePercentage(totalText.innerText);
    }
  }
  
  function renderPercentage(destination) {
    let twrapper = document.createElement("div");
    twrapper.id = "total-wrapper";
    let startingItems = 0;
    let totalItems = feature.workingData.items.reduce((acc=0, next) => {
      if (next.hasOwnProperty("start") && next.hasOwnProperty("value") && next.value) {
        startingItems += next.start;
      }
      if (next.hasOwnProperty("value") && next.hasOwnProperty("max")) {
        return acc + (parseInt(next.value) * parseInt(next.max));
      }
      return acc;
    }, 0);
    let totaltext = document.createElement("p");
    totaltext.innerText = "" + startingItems + "/" + totalItems;
    twrapper.appendChild(totaltext);
    destination.appendChild(twrapper);
    
    let pwrapper = document.createElement("div");
    pwrapper.id = "percentage-wrapper";
    let percentagetext = document.createElement("p");
    let calculatedAmount = totalItems != 0 ? 100 * startingItems / totalItems : 0;
    percentagetext.innerText = "" + calculatedAmount.toFixed(0) + '%';
    pwrapper.appendChild(percentagetext);
    destination.appendChild(pwrapper);
    
    recycleTotals(0);
  }
  
  function divmod(a, b) {
    let q = Math.floor(a / b);
    return [q, a - (b * q)];
  }
  
  function updateTimer() {
    feature.timerState.time = feature.timerState.timeBeforeLastStart + (feature.timerState.running ? (Date.now() - feature.timerState.timeOfLastStart) : 0);
    
    let time = feature.timerState.time;
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
    feature.timerState.running = !feature.timerState.running;
    if (feature.timerState.running) {
      feature.timerState.timeOfLastStart = Date.now();
    } else {
      feature.timerState.timeBeforeLastStart = feature.timerState.time;
    }
  }
  
  function renderTimer(destination, width) {
    let wrapper = document.createElement("div");
    wrapper.id = "timer-wrapper";
    wrapper.style.flexGrow = width;
    
    let timerText = document.createElement("p");
    timerText.innerText = "";
    wrapper.appendChild(timerText);
    
    wrapper.addEventListener("mousedown", onTimerToggle);
    
    destination.appendChild(wrapper);
    
    window.setInterval(updateTimer, 10);
  }
  
  function generate(destinationId) {
    const destination = document.getElementById(destinationId);
    destination.style.width = "" + ((parseInt(feature.workingData.width) * 42) + ((parseInt(feature.workingData.width) - 1) * 6)) + "px";
    
    // section for main items
    feature.workingData.items.forEach((element, i) => renderEntry(destination, element, i, element.name, false, false, -1));
    if (main.showTotals) {
      renderPercentage(destination);
    }
    if (main.showTimer) {
      renderTimer(destination, parseInt(feature.workingData.width));
    }
  }

  feature.generate = generate;
})();