var assert = require("assert");
var Rat = require('../rat');
var Food = require('../food');
// var Food = require('../food');

 describe('Rat', function() {

   beforeEach(function(){
      rolland = new Rat("Rolland Rat","semi-poison");
      ratty = new Rat("Ratty","poison");
      fish = new Food("fish",22)
      cheese = new Food("cheese",30)
   });

  it('it should have a name', function () {
     assert.equal("Rolland Rat", rolland.name);
  });

  it('it should have a power', function () {
     assert.equal("semi-poison", rolland.power);
  });

  it('it should be able to tarnish the food', function () {
    rolland.touch(fish)
     assert.equal(11, fish.replenish);
  });

  it('it should be not be able to defile food unless it has the power of defile', function () {
    ratty.touch(cheese)
     assert.equal(30, cheese.replenish);
  });

})