const Character = require("./Character");

class Warrior extends Character{
    #shieldPoints = null
    #position = null
    constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints){
        super(name, lifePoints, attackPoints, defensePoints)
        this.#shieldPoints = shieldPoints
        this.turnPosition()
    }

    getShieldPoints(){
        return this.#shieldPoints
    }

    getPosition(){
        return this.#position
    }

    setPosition(position){
        this.#position = position
    }

    attackCharacter(Character){
        if(this.getPosition() === 'attack'){
            const damage = this.getAttackPoints() - Character.getDefensePoints()
            console.log(this.losingHealth(Character, damage))
        } else {
            console.log('Não será possível o guerreiro atacar')
        }
    }

    turnPosition(){
        if(this.getPosition() === 'defense'){
            this.attackPosition()
            this.setPosition('attack')
        }
        if(this.getPosition() === 'attack'){
            this.defensePosition()
            this.setPosition('defense')
        }
        if(this.getPosition() === null){
            this.defensePosition()
            this.setPosition('defense')
        }
    }

    defensePosition(){
        this.#shieldPoints += this.getDefensePoints()
    }

    attackPosition(){
        this.#shieldPoints -= this.getDefensePoints()
    }

    toString(){
        return `Nome: ${this.getName()}; 
        Pontos de Vida: ${this.getLifePoints()}
        Pontos de Ataque: ${this.getAttackPoints()}
        Pontos de Defesa: ${this.getDefensePoints()}
        Pontos de Escudo: ${this.getShieldPoints()}
        Posição de Combate: ${this.getPosition()}` 
    }
}

module.exports = Warrior