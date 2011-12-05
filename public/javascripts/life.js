
function LifeGame(width, height) {
  this.width = width;
  this.height = height;
  this.aliveCells = {};
  this.flattenState();
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
    this.aliveCells[[x,y]] = true;
  };

  LifeGame.prototype.evolve = function() {
    var nextGeneration = {};

    this.aliveCells = nextGeneration;
  };

  LifeGame.prototype.isAlive = function(x, y) {
    return !!this.aliveCells[[x,y]];
  };

  LifeGame.prototype.flattenState = function() {
    this.state = [];
    for (var y = 0; y < this.height; y++) {
      this.state[y] = [];
      for (var x = 0; x < this.width; x++) {
        this.state[y].push(!!aliveCells[[x,y]]);
      }
    }
  };
})();


