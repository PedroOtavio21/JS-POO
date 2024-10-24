const Character = require("./Character");

module.exports = class Mage extends Character{
    #magicPoints
    
    constructor(name, lifePoints, attackPoints, defensePoints, magicPoints){
        super(name, lifePoints, attackPoints, defensePoints)
        this.#magicPoints = magicPoints
    }

    get magicPoints(){
        return this.#magicPoints
    }

    attacking(target){
        target.lifePoints -= (this.attackPoints + this.magicPoints) - target.defensePoints
    }

    heal(target){
        target.lifePoints += this.magicPoints * 2
    }

    toString(){
        return `
        Nome: ${this.name}
        Pontos de Vida: ${this.lifePoints}
        Pontos de Ataque: ${this.attackPoints}
        Pontos de Defesa: ${this.defensePoints}
        Pontos de Magia: ${this.magicPoints}`
    }
}