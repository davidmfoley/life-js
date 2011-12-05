
function NeighborFinder(width, height) {
  this.width = width;
  this.height = height;
}

(function() { 
  NeighborFinder.prototype.findNeighbors =function(x,y) {
    var toLeft = x === 0 ? this.width -1 : x - 1;
    var toRight = x == this.width -1 ? 0 : x + 1;

    var above = y === 0 ? this.height -1 : y - 1;
    var below = y == this.height -1 ? 0 : y + 1;

    return [
      [toLeft, above],
      [x, above],
      [toRight, above],
      [toLeft, y],
      [toRight, y],
      [toLeft, below],
      [x, below],
      [toRight, below]
    ];
  }
})();
