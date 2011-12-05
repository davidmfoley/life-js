describe("Life", function() {
  var game;

  beforeEach(function() {
    game = new LifeGame(10, 10);
  });

  var boardContents = function(w,h){
    var contents = [];
    for (var y = 0; y < h; y++) {
      var row = [];
      for (var x =0; x < w; x++) {
        row.push(game.isAlive(x,y) ? 1 :0);
      }
      contents.push(row);
    }
    return contents;
  };

  describe('single cell', function() {
    beforeEach(function() {
      game.makeAlive(0,0);
    });

    it ('is initially alive', function() {
      expect(game.isAlive(0,0)).toBe(true);
    });

    it ('dies after evolving', function() {
      game.evolve();
      expect(game.isAlive(0,0)).toBe(false);
    });
  });

  describe('a diamond', function() {
    beforeEach(function() {
      game.makeAlive(0,1);
      game.makeAlive(1,0);
      game.makeAlive(1,2);
      game.makeAlive(2,1);
    });

    it ('is static after one generation', function() {
      game.evolve();
      shouldBeADiamond();
    });

    it ('is static after two generations', function() {
      game.evolve();
      game.evolve();
      shouldBeADiamond();
    });

    function shouldBeADiamond() {
      expect(boardContents(3,3)).toEqual([
        [0,1,0],
        [1,0,1],
        [0,1,0]]);
    }
  });

  describe('three cells in a row', function() {
    beforeEach(function() {
      game.makeAlive(1,0);
      game.makeAlive(1,1);
      game.makeAlive(1,2);
    });

    it ('alternates orientations on first generation', function() {
      game.evolve();
      expect(boardContents(3,3)).toEqual([
        [0,0,0],
        [1,1,1],
        [0,0,0]]);
    });

    it ('alternates back to original setup on second generation', function() {
      game.evolve();
      game.evolve();
      expect(boardContents(3,3)).toEqual([
        [0,1,0],
        [0,1,0],
        [0,1,0]]);
    });
  });
});
