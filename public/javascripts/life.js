
function LifeGame(width, height) {
  this.width = width;
  this.height = height;
  this.aliveCells = {};
}

(function() {
  var states = [
    // index 0 = on touch, 1 = on evolve
    // 0 == dead & 0 neighbors
    [1,0],
    [2,0],
    [3,0],
    [4,5],
    [4,0],
    // 5 == alive & 0 neighbors
    [6,0],
    [7,0],
    [8,5],
    [9,5],
    [9,0]
  ];

  LifeGame.prototype.makeAlive = function(x, y) {
    this.aliveCells[[x,y]] = 5;
  };

  LifeGame.prototype.evolve = function() {
    var nextGeneration = {};

    for (var cell in this.aliveCells) {
      var neighbors = this.getNeighbors(cell);
      for (var i =0; i < neighbors.length; i++) {
        this.touch(neighbors[i]);
      }
    }

    for (var cell in this.aliveCells) {
      var state = states[this.aliveCells[cell]][1];
      if (state != 0)
        nextGeneration[cell] = state;
    }
    this.aliveCells = nextGeneration;
  };

  LifeGame.prototype.getNeighbors = function(xy) {
    var pieces = xy.split(',');
    var x = parseInt(pieces[0]);
    var y = parseInt(pieces[1]);
    var toLeft = x === 0 ? this.width : x - 1;
    var toRight = x == this.width -1 ? 0 : x + 1;

    var above = y === 0 ? this.height : y - 1;
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
  };

  LifeGame.prototype.touch = function(xy) {
    var cellState = this.aliveCells[xy] || 0;
    this.aliveCells[xy] = states[cellState][0];
  };

  LifeGame.prototype.isAlive = function(x, y) {
    return (this.aliveCells[[x,y]] || 0) > 4;
  };

})();


