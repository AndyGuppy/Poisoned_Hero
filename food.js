var Food = function(name, replenish) {
this.name = name;
this.replenish = replenish;
this.poison = false;
};

Food.prototype = {
  tarnish: function(){
     this.replenish = (this.replenish * 0.5);
     return this.replenish
  },
  poisoned: function(){
    this.poison = true;
  }
}


module.exports = Food;