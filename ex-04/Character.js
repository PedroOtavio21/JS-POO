class Character {
    // Atributos
    #name = null;
    #lifePoints = null;
    #attackPoints = null;
    #defensePoints = null;

    // Métodos
    constructor(name, lifePoints, attackPoints, defensePoints){
        this.#name = name;
        this.#lifePoints = lifePoints;
        this.#attackPoints = attackPoints;
        this.#defensePoints = defensePoints;
    }

    getName(){
        return this.#name
    }

    setName(name){
        this.#name = name
    }

    getLifePoints(){
        return this.#lifePoints
    }

    setLifePoints(lifePoints){
        this.#lifePoints = lifePoints
    }

    getAttackPoints(){
        return this.#attackPoints
    }

    setAttackPoints(attackPoints){
        this.#attackPoints = attackPoints
    }

    getDefensePoints(){
        return this.#defensePoints
    }

    setDefensePoints(defensePoints){
        this.#defensePoints = defensePoints
    }

    attackCharacter(Character){
        const damage = this.getAttackPoints() - Character.getDefensePoints()
        console.log(this.losingHealth(Character, damage))
    }

    losingHealth(Character, damage){
        if(damage > 0){
            Character.#lifePoints -= damage
            return `O atacante ${this.getName()} causou um total de ${damage} em ${Character.getName()}!`
        } else {
            return `O atacante efetivou o ataque, porém não causou dano!`
        }
    }

    toString(){
        return `Nome: ${this.getName()}; 
        Pontos de Vida: ${this.getLifePoints()}
        Pontos de Ataque: ${this.getAttackPoints()}
        Pontos de Defesa: ${this.getDefensePoints()}` 
    }
}

module.exports = Character