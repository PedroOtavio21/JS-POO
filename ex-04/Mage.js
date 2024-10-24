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
        const damage = (this.getMagicPoints() + this.getAttackPoints()) - Character.getDefensePoints()
        console.log(this.losingHealth(Character, damage))
    }

    saveFriend(Character){
        const addedLife = Character.getLifePoints() + 2 * this.getMagicPoints()
        Character.setLifePoints(addedLife)
    }

    toString(){
        return `Nome: ${this.getName()}; 
        Pontos de Vida: ${this.getLifePoints()}
        Pontos de Ataque: ${this.getAttackPoints()}
        Pontos de Defesa: ${this.getDefensePoints()}
        Pontos de Magia: ${this.getMagicPoints()}` 
    }
}

module.exports = Mage