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

    getDefensePoints(){
        return this.#defensePoints
    }

    attackCharacter(Character){
        // Retorno de resultado para avaliação
        const result = Character.getLifePoints() - (this.getAttackPoints() - Character.getDefensePoints())
        Character.setLifePoints(result)
        return result
    }

    toString(){
        return `Nome: ${this.getName()}; 
        Pontos de Vida: ${this.getLifePoints()}
        Pontos de Ataque: ${this.getAttackPoints()}
        Pontos de Defesa: ${this.getDefensePoints()}` 
    }
}

module.exports = Character