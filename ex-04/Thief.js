const Character = require("./Character");

class Thief extends Character{
    constructor(name, lifePoints, attackPoints, defensePoints){
        super(name, lifePoints, attackPoints, defensePoints)
    }

    // Sobrescrita de método
    attackCharacter(Character){
        const result = Character.getLifePoints() - 2 * (this.getAttackPoints() - Character.getDefensePoints()) 
        Character.setLifePoints(result)
        return result
    }
}

module.exports = Thief