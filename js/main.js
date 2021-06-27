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
  
  function validateStartup(e) {
    e.preventDefault();
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
    
    location.search = "?game=" + games[document.forms["startupMenu"]["selectedGame"].value];
  }

  main.games = games;
  main.validateStartup = validateStartup;
})();