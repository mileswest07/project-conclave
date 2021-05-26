let main = {
  
};

(() => {
  
  const games = {
    "d": "mrd",
    "m": "m1",
    "z": "mzm",
    "p": "mp",
    "b": "pb",
    "e": "mp2e",
    "v": "e_rnd",
    "h": "ph",
    "c": "mp3c",
    "2": "m2ros",
    "a": "am2r",
    "r": "msr",
    "s": "sm",
    "3": "smz3",
    "o": "mom",
    "f": "mf"
  };
  
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
    } else {
      return;
    }
    values[0] = previous;

    e.target.parentElement.querySelectorAll("p")[0].innerText = values.join(" ");
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
    
    document.getElementById(pointer).appendChild(wrapper);
  }
  
  function generate() {
    if (main.menu) {
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
      main.workingData.items.forEach((element, i) => renderEntry("itemField", element, "item", i));
      
      // section for expansions and boss
      main.workingData.expansions.forEach((element, i) => renderEntry("expansions", element, "expansion", i));
    }
  }
  
  function validateStartup(e) {
    e.preventDefault();
    if (!main.menu) {
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
      
      main.menu = true;
      main.currentGame = games[document.forms["startupMenu"]["selectedGame"].value];
      main.workingData = rawData[main.currentGame];
    
      generate();
    }
  }

  function init() {
    document.addEventListener("contextmenu", (e) => { e.preventDefault(); });
    main.menu = false;
  }

  main.init = init;
  main.validateStartup = validateStartup;
})();