
describe("Life", function() {
  var game;

  beforeEach(function() {
    game = new LifeGame();
  });

  describe('single', function() {
    beforeEach(function() {
      game.makeAlive(0,0);
    });
    it ('is initially alive', function() {
      expect(game.isAlive(0,0)).toBe(true);
    });
  });
});
