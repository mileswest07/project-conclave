let feature = {
  
};

(() => {
  
  function clickItem(e) {
    e.preventDefault();
    
    if (e.which === 1) { // left click
      if (e.target.classList) { // browser compatibility logic
        if (!e.target.classList.contains("deselected")) return;
        e.target.classList.remove("deselected");
      } else {
        if (e.target.className.has("deselected")) return;
        e.target.className += e.className.replace(/\bdeselected\b/g);
      }
    } else if (e.which == 3) { // right click
      if (e.target.classList) { // browser compatibility logic
        if (e.target.classList.contains("deselected")) return;
        e.target.classList.add("deselected");
      } else {
        let arr = e.target.className.split(" ");
        if (arr.indexOf("deselected") === -1) {
          e.target.className += " deselected";
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
      if (previous >= max) return;
      previous++;
    } else if (e.which === 3) { // right click
      if (previous <= 0) return;
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
      if (e.target.parentElement.classList) { // browser compatibility logic
        if (!e.target.parentElement.classList.contains("show-over")) {
          e.target.parentElement.classList.add("show-over");
          return;
        }
        e.target.parentElement.classList.remove("show-over");
      } else {
        if (e.target.parentElement.className.has("show-over")) {
          e.target.parentElement.className += " show-over";
          return;
        }
        e.target.parentElement.className += e.className.replace(/\bshowOver\b/g);
      }
    }
  }
  
  function renderEntry(pointer, element, classLabel, index) {
    if (element.id === "--") {
      let breakage = document.createElement("div");
      if (breakage.classList) {
        breakage.classList.add("clear-both");
      } else {
        breakage.className = "clear-both";
      }
      document.getElementById(pointer).appendChild(breakage);
      return;
    }
    
    let wrapper = document.createElement("div");
    let image = document.createElement("img");
    wrapper.id = classLabel + "-" + element.id.split("/")[1] + "-" + index;
    if (wrapper.classList) {
      wrapper.classList.add(classLabel);
    } else {
      wrapper.className = classLabel;
    }
    
    if (image.classList) {
      image.classList.add("item-image");
      if (element.id === "-") {
        image.classList.add("blank");
      }
      if (element.max < 2) {
        if (element.start < 1) {
          image.classList.add("deselected");
        }
        // TODO: segments
        image.addEventListener("mousedown", clickItem);
      } else {
        image.addEventListener("mousedown", clickExpansion);
      }
    } else {
      image.className = "item-image";
      if (element.id === "-") {
        image.className += " blank";
      }
      if (element.max < 2) {
        if (element.start < 1) {
          image.className += " deselected";
        }
        image.addEventListener("mousedown", clickItem);
      } else {
        image.addEventListener("mousedown", clickExpansion);
      }
    }
    if (element.id === "-") {
      image.src = "images/itemSphere.png";
    } else {
      image.src = "images/" + element.id + ".png";
    }
    
    image.alt = element.name;
    wrapper.title = element.name;
    image.height = 42;
    image.width = 42;
    
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
    
    document.getElementById(pointer).appendChild(wrapper);
  }
  
  function generate() {
    let menuPointer = document.getElementById("selection");
    if (menuPointer.classList) { // browser compatibility logic
      menuPointer.classList.remove("show-menu");
    } else {
      menuPointer.className += menuPointer.className.replace(/\bshow-menu\b/g);
    }
    
    let pointers = ["itemField", "expansions"];
    for (const pointer of pointers) {
      let target = document.getElementById(pointer);
      if (target.classList) { // browser compatibility logic
        target.classList.remove("hide-section");
      } else {
        target.className += target.className.replace(/\bhide-section\b/g);
      }
    }
    
    // section for main items
    feature.workingData.items.forEach((element, i) => renderEntry("itemField", element, "item", i));
    
    // section for expansions and boss
    feature.workingData.expansions.forEach((element, i) => renderEntry("expansions", element, "expansion", i));
  }

  feature.generate = generate;
})();