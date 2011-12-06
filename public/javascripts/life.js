
function LifeGame(width, height) {
  this.neighborFinder = new NeighborFinder(width, height);
  this.cells = {};
}

(function() {
  var states = [
    // index 0 = on touch, 1 = on evolve
    // 0 == dead & 0 neighbors
    // 5 == alive & 0 neighbors
    [1,0],
    [2,0],
    [3,0],
    [4,5],
    [4,0],

    [6,0],
    [7,0],
    [8,5],
    [9,5],
    [9,0]
  ];

  LifeGame.prototype.makeAlive = function(x, y) {
    this.cells[[x,y]] = 5;
  };

  LifeGame.prototype.evolve = function() {
    var nextGeneration = {};

    for (var cell in this.cells) {
      var neighbors = this.getNeighbors(cell);
      for (var i =0; i < neighbors.length; i++) {
        this.touch(neighbors[i]);
      }
    }

    for (var cell in this.cells) {
      var state = states[this.cells[cell]][1];
      if (state) {
        nextGeneration[cell] = state;
      }
    }
    this.cells = nextGeneration;
  };

  LifeGame.prototype.getNeighbors = function(xy) {
    var pieces = xy.split(',');
    var x = parseInt(pieces[0], 10);
    var y = parseInt(pieces[1], 10);
    return this.neighborFinder.findNeighbors(x,y);

  };

  LifeGame.prototype.touch = function(xy) {
    var cellState = this.cells[xy] || 0;
    this.cells[xy] = states[cellState][0];
  };

  LifeGame.prototype.isAlive = function(x, y) {
    return (this.cells[[x,y]] || 0) > 4;
  };
})();

