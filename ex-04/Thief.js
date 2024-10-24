const Character = require("./Character");

module.exports = class Thief extends Character{
    attacking(target){
        target.lifePoints -= (this.attackPoints - target.defensePoints) * 2
    }
}