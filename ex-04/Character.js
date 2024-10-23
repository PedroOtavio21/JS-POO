class Character {
    // Atributos
    #name;
    #lifePoints;
    #attackPoints;
    #defensePoints;

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

    getAttackPoints(){
        return this.#attackPoints
    }

    getDefensePoints(){
        return this.#defensePoints
    }

    attackCharacter(Character){
        // Método auxiliar
        Character.takeDamage(this)

        // Retorno de resultado para avaliação
        const result = Character.getLifePoints() - (this.getAttackPoints() - Character.getDefensePoints())
        return result
    }

    takeDamage(Character){
        this.#lifePoints -= Character.getAttackPoints() - this.getDefensePoints() 
    }

    toString(){
        return `Nome: ${this.getName()}; 
        Pontos de Vida: ${this.getLifePoints()}
        Pontos de Ataque: ${this.getAttackPoints()}
        Pontos de Defesa: ${this.getDefensePoints()}` 
    }
}