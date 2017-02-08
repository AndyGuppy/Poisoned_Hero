var Hero = function(name, health, favfood) {
this.name = name;
this.health = health;
this.favfood = favfood;

};

Hero.prototype = {
  eats: function(foodToEat){
    if (foodToEat.poison){
      this.health -= 20;
      return this.health
    }
    if (foodToEat.name === this.favfood){
      this.health += (1.5* foodToEat.replenish);
    }
    else{
    this.health += foodToEat.replenish};
    return this.health
  },
  talk: function(says){
    console.log(says);
    return says;
  }
};



module.exports = Hero;