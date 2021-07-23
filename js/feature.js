let feature = {
  
};

(() => {
  
  function clickItem(e) {
    e.preventDefault();
    
    if (e.which === 1) { // left click
      if (e.target.classList) { // browser compatibility logic
        if (!e.target.classList.contains("deselected")) {
          if (e.target.parentElement.nextSibling) {
            if (e.target.parentElement.nextSibling.id.split('-').length === 4) {
              if (
                e.target.parentElement.nextSibling.id.split('-')[2] == e.target.parentElement.id.split('-')[2] && 
                parseInt(e.target.parentElement.nextSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) + 1
              ) {
                e.target.parentElement.classList.add("hide-segment");
                let nextItem = e.target.parentElement.nextSibling;
                let nextImage = nextItem.querySelectorAll(".item-image")[0];
                nextItem.classList.remove("hide-segment"); // this assumes the Next is an Item. TODO: case when it's an Expansion
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
                e.target.parentElement.nextSibling.id.split('-')[2] == e.target.parentElement.id.split('-')[2] && 
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
              e.target.parentElement.previousSibling.id.split('-')[2] == e.target.parentElement.id.split('-')[2] && 
              parseInt(e.target.parentElement.previousSibling.id.split('-')[3]) === parseInt(e.target.parentElement.id.split('-')[3]) - 1
            ) {
              e.target.parentElement.classList.add("hide-segment");
              let previousItem = e.target.parentElement.previousSibling;
              let previousImage = previousItem.querySelectorAll(".item-image")[0];
              previousItem.classList.remove("hide-segment");
              previousImage.classList.remove("deselected"); // this assumes the Previous is an Item. TODO: case when it's an Expansion
            }
          }
        }
        if (feature.currentGame !== "mp" || (e.target.parentElement.id !== "item-fusionSuit-0-1" && e.target.parentElement.id !== "item-primeSuit-0-0")) {
          e.target.classList.add("deselected");
        }
      } else {
        if (e.target.className.has("deselected")) {
          if (e.target.parentElement.previousSibling) {
            if (e.target.parentElement.previousSibling.id.split('-').length === 4) {
              if (
                e.target.parentElement.previousSibling.id.split('-')[2] == e.target.parentElement.id.split('-')[2] && 
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
        if (feature.currentGame !== "mp" || (e.target.parentElement.id !== "item-fusionSuit-0-1" && e.target.parentElement.id !== "item-primeSuit-0-0")) {
          let arr = e.target.className.split(" ");
          if (arr.indexOf("deselected") === -1) {
            e.target.className += " deselected";
          }
        }
      }
    } else if (e.which == 2) { // middle click
      clickOverlay(e);
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
                nextItem.classList.remove("hide-segment"); // this assumes the Next is an Item. TODO: case when it's an Expansion
                nextImage.classList.remove("deselected");
              } else {
                e.target.parentElement.className += " hide-segment";
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
                previousItem.classList.remove("hide-segment"); // this assumes the Previous is an Item. TODO: case when it's an Expansion
                previousImage.classList.remove("deselected");
              } else {
                e.target.parentElement.className += " hide-segment";
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
      clickOverlay(e);
      return;
    } else {
      return;
    }
    values[0] = previous;

    e.target.parentElement.querySelectorAll("p")[0].innerText = values.join(" ");
  }
  
  function clickOverlay(e) {
    e.preventDefault();
    
    if (e.which == 2) { // middle click
      if (e.target.parentElement.querySelectorAll(".overlay-image")[0] == undefined) {
        return;
      }
      const itemTitle = e.target.parentElement.querySelectorAll(".item-image")[0].alt;
      const overlayTitle = e.target.parentElement.querySelectorAll(".overlay-image")[0].alt;
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
  
  function renderEntry(element, index, elementName, isSegment, isSegmentHidden, maxSegments) {
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
          renderEntry(element.segments[j], index + "-" + j, segmentName, element.segments.length > 1, segmentProgress <= 0 && j !== 0, element.segments.length);
        }
        return;
      }
    }
    
    if (element.id === "--") {
      let breakage = document.createElement("div");
      if (breakage.classList) {
        breakage.classList.add("clear-both");
      } else {
        breakage.className = "clear-both";
      }
      document.getElementById("itemField").appendChild(breakage);
      return;
    }
    
    let wrapper = document.createElement("div");
    let image = document.createElement("img");
    let classLabel = element.max < 2 ? "item" : "expansion";
    wrapper.id = classLabel + "-" + element.id.split("/")[1] + "-" + index;
    if (wrapper.classList) {
      wrapper.classList.add("item");
      if (isSegmentHidden) {
        wrapper.classList.add("hide-segment");
      }
    } else {
      wrapper.className = "item";
      if (isSegmentHidden) {
        wrapper.className += " hide-segment";
      }
    }
    
    if (image.classList) {
      image.classList.add("item-image");
      if (element.id === "-") {
        image.classList.add("blank");
      }
      if (element.max < 2 && element.start < 1) {
        image.classList.add("deselected");
      }
      if (element.hasOwnProperty("isGo") && element.isGo) {
        wrapper.classList.add("go-mode-item");
      }
    } else {
      image.className = "item-image";
      if (element.id === "-") {
        image.className += " blank";
      }
      if (element.max < 2 && element.start < 1) {
        image.className += " deselected";
      }
      if (element.hasOwnProperty("isGo") && element.isGo) {
        wrapper.className += " go-mode-item";
      }
    }
    
    if (!(element.id === "-" && !isSegment)) {
      if (element.max < 2) {
        image.addEventListener("mousedown", clickItem);
      } else {
        image.addEventListener("mousedown", clickExpansion);
      }
    }
    
    if (element.id === "-") {
      image.src = "images/itemSphere.png";
    } else {
      if (element.hasOwnProperty("sprite") && main.useSprites) {
        image.src = "images/" + element.sprite + ".png";
      } else {
        image.src = "images/" + element.id + ".png";
      }
    }
    
    image.alt = element.name || elementName;
    wrapper.title = elementName || element.name;
    image.height = 42;
    image.width = 42;
    
    if (element.hasOwnProperty("back")) {
      let backImage = document.createElement("img");
      if (backImage.classList) {
        backImage.classList.add("back-image");
      } else {
        backImage.className = "back-image";
      }
      backImage.src = "images/back/" + element.back + ".png";
      backImage.alt = element.back.split("/")[1];
      backImage.height = 42;
      backImage.width = 42;
      wrapper.appendChild(backImage);
    }
    
    wrapper.appendChild(image);
    if (element.id !== "-" && element.max > 1) {
      let label = document.createElement("p");
      label.innerText = element.start + " / " + element.max;
      wrapper.appendChild(label);
    }
    
    if (element.over && element.overText) {
      let overlayImage = document.createElement("img");
      if (overlayImage.classList) {
        overlayImage.classList.add("overlay-image");
      } else {
        overlayImage.className = "overlay-image";
      }
      overlayImage.src = "images/overlays/" + element.over + ".png";
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
        if (levelUp.classList) {
          levelUp.classList.add("level-up-image");
          wrapper.classList.add("can-level-up");
        } else {
          levelUp.className = "level-up-image";
          wrapper.className += "can-level-up";
        }
        if (
          element.hasOwnProperty("type") && 
          (element.type === "toggle" || element.type == "dungeon")
        ) {
          levelUp.src = "images/overlays/Level_Up_Alt.png";
        } else {
          levelUp.src = "images/overlays/Level_Up.png";
        }
        levelUp.alt = "Level Up";
        levelUp.height = 16;
        levelUp.width = 16;
        wrapper.appendChild(levelUp);
      }
      if (currentStep > 0) {
        let levelDown = document.createElement("img");
        if (levelDown.classList) {
          levelDown.classList.add("level-down-image");
          wrapper.classList.add("can-level-down");
        } else {
          levelDown.className = "level-down-image";
          wrapper.className += "can-level-down";
        }
        if (
          element.hasOwnProperty("type") && 
          (element.type === "toggle" || element.type == "dungeon")
        ) {
          levelDown.src = "images/overlays/Level_Down_Alt.png";
        } else {
          levelDown.src = "images/overlays/Level_Down.png";
        }
        levelDown.alt = "Level Down";
        levelDown.height = 16;
        levelDown.width = 16;
        wrapper.appendChild(levelDown);
      }
    }
    
    document.getElementById("itemField").appendChild(wrapper);
  }
  
  function generate() {
    let menuPointer = document.getElementById("selection");
    if (menuPointer.classList) { // browser compatibility logic
      menuPointer.classList.remove("show-menu");
    } else {
      menuPointer.className += menuPointer.className.replace(/\bshow-menu\b/g);
    }
    
    let target = document.getElementById("itemField");
    if (target.classList) { // browser compatibility logic
      target.classList.remove("hide-section");
    } else {
      target.className += target.className.replace(/\bhide-section\b/g);
    }
    
    // section for main items
    feature.workingData.items.forEach((element, i) => renderEntry(element, i, element.name, false, false, -1));
  }

  feature.generate = generate;
})();