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
      for (let i = 0; i < main.workingData.items.length; i++) {
        if (main.workingData.items[i] === "--") {
          let breakage = document.createElement("div");
          if (breakage.classList) {
            breakage.classList.add("clear-both");
          } else {
            breakage.className = "clear-both";
          }
          document.getElementById("itemField").appendChild(breakage);
          continue;
        }
        
        let wrapper = document.createElement("div");
        wrapper.id = "item-" + main.workingData.items[i] + "-" + i;
        if (wrapper.classList) {
          wrapper.classList.add("item");
        } else {
          wrapper.className = "item";
        }
        
        let image = document.createElement("img");
        if (image.classList) {
          image.classList.add("item-image");
          if (main.workingData.items[i] === "-") {
            image.classList.add("blank");
          } else if (main.workingData.startsWith[i] === 0) {
            image.classList.add("deselected");
          }
        } else {
          if (main.workingData.items[i] === "-") {
            image.className = "item-image blank";
          } else if (main.workingData.startsWith[i] === 0) {
            image.className = "item-image deselected";
          } else {
            image.className = "item-image";
          }
        }
        if (main.workingData.items[i] === "-") {
          image.src = "images/itemSphere.png";
        } else {
          image.src = "images/" + main.workingData.items[i] + ".png";
        }
        
        image.alt = main.workingData.names[i];
        wrapper.title = main.workingData.names[i];
        image.height = 42;
        image.width = 42;
        
        wrapper.appendChild(image);
        if (main.workingData.items[i] !== "-") {
          wrapper.addEventListener("mousedown", clickItem);
          wrapper.addEventListener("contextmenu", (e) => { e.preventDefault(); });
        }
        
        document.getElementById("itemField").appendChild(wrapper);
      }
      
      // section for expansions and boss
      for (let i = 0; i < main.workingData.expansions.length; i++) {
        if (main.workingData.expansions[i] === "--") {
          let breakage = document.createElement("div");
          if (breakage.classList) {
            breakage.classList.add("clear-both");
          } else {
            breakage.className = "clear-both";
          }
          document.getElementById("expansions").appendChild(breakage);
          continue;
        }
        
        let wrapper = document.createElement("div");
        let image = document.createElement("img");
        let maxCount = 0;
        wrapper.id = "expansion-" + main.workingData.expansions[i] + "-" + i;
        
        if (main.workingData.expansions[i] === "-") {
          image.src = "images/itemSphere.png";
        } else {
          image.src = "images/" + main.workingData.expansions[i] + ".png";
        }
        
        image.alt = main.workingData.expansionNames[i];
        wrapper.title = main.workingData.expansionNames[i];
        maxCount = main.workingData.max[i];
        
        if (wrapper.classList) {
          wrapper.classList.add("expansion");
        } else {
          wrapper.className = "expansion";
        }
        
        if (image.classList) {
          image.classList.add("item-image");
          if (main.workingData.expansions[i] === "-") {
            image.classList.add("blank");
          }
          if (maxCount <= 0) {
            image.classList.add("deselected");
            wrapper.addEventListener("mousedown", clickItem);
          } else {
            wrapper.addEventListener("mousedown", clickExpansion);
          }
        } else {
          image.className = "item-image";
          if (main.workingData.expansions[i] === "-") {
            image.className += " blank";
          }
          if (maxCount <= 0) {
            image.className += " deselected";
            wrapper.addEventListener("mousedown", clickItem);
          } else {
            wrapper.addEventListener("mousedown", clickExpansion);
          }
        }
        image.height = 42;
        image.width = 42;
        
        wrapper.appendChild(image);
        if (main.workingData.expansions[i] !== "-") {
          if (maxCount > 0) {
            let label = document.createElement("p");
            label.innerText = "0 / " + maxCount;
            wrapper.appendChild(label);
          }
          
          wrapper.addEventListener("contextmenu", (e) => { e.preventDefault(); });
        }
        
        document.getElementById("expansions").appendChild(wrapper);
      }
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
    main.menu = false;
  }

  main.init = init;
  main.validateStartup = validateStartup;
})();