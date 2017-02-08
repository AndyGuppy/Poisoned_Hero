var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Rat = require('../rat');

describe("hero", function() {

  beforeEach(function(){
     batman = new Hero("Batman",50,"chicken");
     chicken = new Food("chicken",25)
     chocolate = new Food("chocolate",40)
     ratty = new Rat("Ratty","poison");

  });

    it("should have a name", function() {
      assert.equal("Batman", batman.name);

    })

    it('should have a favorite food', function () {
      assert.equal("chicken", batman.favfood)
    });

    it("should have full health", function() {
      assert.equal(50, batman.health);

    })

    it("should have no health", function() {
      batman.health = 0;
      assert.equal(0, batman.health);

    })

    it("should say something", function() {
      assert.equal("Holy smoke Robin", batman.talk("Holy smoke Robin"));

    })

    it('should be able to eat food', function(){
        assert.equal(90,batman.eats(chocolate))
      });

      it('should have their health should go up by 1.5 * value, If the food is their favourite food.', function(){
        assert.equal(87.5,batman.eats(chicken))
      });

      it('should lose health, if it eats poisoned food', function(){
      //  food1.poisoned()
        ratty.touch(chicken)
        assert.equal(30,batman.eats(chicken))
      })
  });