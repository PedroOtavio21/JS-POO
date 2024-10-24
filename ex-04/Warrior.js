const Character = require("./Character");

module.exports = class Warrior extends Character{
    #shieldPoints
    #stance

    constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints){
        super(name, lifePoints, attackPoints, defensePoints)
        this.#shieldPoints = shieldPoints
        this.#stance = 'attack'
    }

    get shieldPoints(){
        return this.#shieldPoints
    }

    get stance(){
        return this.#stance
    }

    set stance(position){
        this.#stance = position
    }

    attacking(target){
        if(this.stance === 'attack'){
            target -= this.attackPoints - target.defensePoints
        } else {
            console.log('Ataque de guerreiro barrado! Mude sua posição de combate.')
        }
    }

    switchStance(){
        if(this.stance === 'attack'){
            this.stance = 'defense'
            this.defensePoints += this.shieldPoints
        } else {
            this.stance = 'attack'
            this.defensePoints -= this.shieldPoints
        }
    }

    toString(){
        return `
        Nome: ${this.name}
        Pontos de Vida: ${this.lifePoints}
        Pontos de Ataque: ${this.attackPoints}
        Pontos de Defesa: ${this.defensePoints}
        Pontos de Escudo: ${this.shieldPoints}
        Posição de Combate: ${this.stance}`
    }
}