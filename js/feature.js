let feature = {
  
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
              }
            }
          }
          return;
        }
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
              }
            }
          }
          return;
        }
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
          return;
        } else {
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
          return;
        } else {
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
      if (element.segments && element.segments.length > 0) {
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
    
    let counterAnyway = false;
    
    if (element.hasOwnProperty("type") && element.type === "counter") {
      counterAnyway = true;
    }
    
    if (element.hasOwnProperty("type") && (element.type === "toggle" || element.type === "dungeon")) {
      wrapper.setAttribute("typing", element.type);
    }
    
    let classLabel = counterAnyway || element.max >= 2 ? "expansion" : "item";
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
    
    if (image.classList) {
      image.classList.add("item-image");
      if (!counterAnyway && element.max < 2 && element.start < 1 && element.id !== "-") {
        image.classList.add("deselected");
      }
      if (element.hasOwnProperty("isGo") && element.isGo) {
        wrapper.classList.add("go-mode-item");
      }
    } else {
      image.className = "item-image ";
      if (!counterAnyway && element.max < 2 && element.start < 1 && element.id !== "-") {
        image.className += " deselected";
      }
      if (element.hasOwnProperty("isGo") && element.isGo) {
        wrapper.className += " go-mode-item";
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
      let currentStep = parseInt(index.split('-')[1]);
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
  
  function generate(destinationId) {
    const destination = document.getElementById(destinationId);
    destination.style.width = "" + ((parseInt(feature.workingData.width) * 42) + ((parseInt(feature.workingData.width) - 1) * 6)) + "px";
    
    // section for main items
    feature.workingData.items.forEach((element, i) => renderEntry(destination, element, i, element.name, false, false, -1));
  }

  feature.generate = generate;
})();