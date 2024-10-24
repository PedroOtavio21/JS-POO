const Character = require("./Character");

class Thief extends Character{
    constructor(name, lifePoints, attackPoints, defensePoints){
        super(name, lifePoints, attackPoints, defensePoints)
    }

    // Sobrescrita de método
    attackCharacter(Character){
        const damage = (super.getAttackPoints() - Character.getDefensePoints()) * 2 
        console.log(super.losingHealth(Character, damage))
    }
}

module.exports = Thief