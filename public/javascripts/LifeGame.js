
function LifeGame(width, height) {
  this.neighborFinder = new NeighborFinder(width, height);
  this.cells = {};
}

(function() {
  var states = [
    // [on touch, on evolve]
    // 0-4 == dead
    [1,0],
    [2,0],
    [3,0],
    [4,5],
    [4,0],

    // 5-9 == alive
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
    this.eachCell(this.touchNeighbors);

    var nextGeneration = {};

    this.eachCell(function(cell) {
      var state = states[this.cells[cell]][1];
      if (state) {
        nextGeneration[cell] = state;
      }
    });

    this.cells = nextGeneration;
  };

  LifeGame.prototype.eachCell = function(fn) {
    for (var cell in this.cells) {
      fn.call(this, cell);
    }
  };

  LifeGame.prototype.touchNeighbors = function(cell) {
      var neighbors = this.getNeighbors(cell);
      for (var i =0; i < neighbors.length; i++) {
        this.touch(neighbors[i]);
      }
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

