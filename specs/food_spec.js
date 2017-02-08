var assert = require("assert");
var Food = require("../food");

describe("food", function() {


    it("should have a name", function() {
      var food = new Food("Chicken", 30);
      assert.equal("Chicken", food.name);

    })

    it("should have replenish value", function() {
      var food = new Food("Chocolate", 50);
      assert.equal(50, food.replenish);

    })
    });