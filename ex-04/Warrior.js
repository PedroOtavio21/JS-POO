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
            const damage = super.getAttackPoints() - Character.getDefensePoints()
            console.log(super.losingHealth(Character, damage))
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
            this.attackPosition()
            this.setPosition('defense')
        }
    }

    defensePosition(){
        let defPoints = super.getDefensePoints()
        defPoints += this.getShieldPoints()
        super.setDefensePoints(defPoints)
    }

    attackPosition(){
        let defPoints = super.getDefensePoints()
        defPoints -= this.getShieldPoints()
        super.setDefensePoints(defPoints)
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