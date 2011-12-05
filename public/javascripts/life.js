function LifeGame() {
  this.alive = true;
}

LifeGame.prototype.makeAlive = function() {
  
};

LifeGame.prototype.evolve = function() {
  this.alive = false;
};

LifeGame.prototype.isAlive = function() {
  return this.alive;
};
