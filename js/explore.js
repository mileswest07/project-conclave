let explore = {
  
};

(() => {
  
  const iconType = {
    "none": 0,
    "circle": 1,
    "square": 2,
    "rhombus": 3,
    "wedge": 4,
    "arrow_up": 5,
    "arrow_down": 6,
    "arrow_left": 7,
    "arrow_right": 8,
    "pentagon": 9,
    "hexagon": 10
  };
  
  const nodeType = [
    "none",
    "start",
    "elevator",
    "boss",
    "save",
    "lock",
    "oneway",
    "unreq",
    "key",
    "empty",
    "other",
    "slot",
    "access",
    "end",
    "another",
    "unknown",
    "toll"
  ];
  
  explore.nodeType = nodeType;
  explore.iconType = iconType;
})();