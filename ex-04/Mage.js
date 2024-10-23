const Character = require("./Character");

class Mage extends Character{
    #magicPoints = null
    
    constructor(name, lifePoints, attackPoints, defensePoints, magicPoints){
        super(name, lifePoints, attackPoints, defensePoints)
        this.#magicPoints = magicPoints
    }

    getMagicPoints(){
        return this.#magicPoints
    }

    attackCharacter(Character){
        const result = Character.getLifePoints() - ((this.getMagicPoints() + this.getAttackPoints()) - Character.getDefensePoints())
        Character.setLifePoints(result)
        return result
    }

    saveFriend(Character){
        const result = Character.getLifePoints() + 2 * this.getMagicPoints()
        Character.setLifePoints(result)
        return result
    }
}

module.exports = Mage