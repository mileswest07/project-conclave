let cursor = {};

(() => {
  let _x = 0;
  let _y = 0;

  function get() {
    return {
      x: _x,
      y: _y
    };
  }

  // move the cursor to certain coordinates, multiplied by the pixel factor
  function move(x, y) {
    _x = (x + 1) * 144; // offset by 1 to allow for margins in the upper left
    _y = (y + 1) * 144;
  }

  // instead of dropping the cursor, this is a relative move based on its current position
  function shift(dx, dy) {
    _x += dx * 144;
    _y += dy * 144;
  }
  
  cursor.get = get;
  cursor.move = move;
  cursor.shift = shift;
})();