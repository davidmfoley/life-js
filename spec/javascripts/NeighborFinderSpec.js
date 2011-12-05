describe("NeighborFinder", function() {
  beforeEach(function(){
    this.neighborFinder = new NeighborFinder(5,7);
  });

  it('should wrap to the left and top', function() {
    var result = this.neighborFinder.findNeighbors(0,0);
    expect(result).toEqual([
      [4,6],
      [0,6],
      [1,6],

      [4,0],
      [1,0],

      [4,1],
      [0,1],
      [1,1]
    ]);
  });
  it('should wrap to the bottom and left', function() {
    var result = this.neighborFinder.findNeighbors(4,6);
    expect(result).toEqual([
      [3,5],
      [4,5],
      [0,5],

      [3,6],
      [0,6],

      [3,0],
      [4,0],
      [0,0]
    ]);
  });
});
