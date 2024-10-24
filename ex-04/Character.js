module.exports = class Character{
    // Atributos
    #name
    #lifePoints
    #attackPoints
    #defensePoints

    // Construtos
    constructor(name, lifePoints, attackPoints, defensePoints){
        this.#name = name
        this.#lifePoints = lifePoints
        this.#attackPoints = attackPoints
        this.#defensePoints = defensePoints
    }

    // Acessadores
    get name(){
        return this.#name
    }

    get lifePoints(){
        return this.#lifePoints
    }

    set lifePoints(lifePoints){
        this.#lifePoints = lifePoints 
    }

    get attackPoints(){
        return this.#attackPoints
    }

    get defensePoints(){
        return this.#defensePoints
    }

    attacking(target){
        target.lifePoints -= this.#attackPoints - target.defensePoints
    }

    toString(){
        return `
        Nome: ${this.name}
        Pontos de Vida: ${this.lifePoints}
        Pontos de Ataque: ${this.attackPoints}
        Pontos de Defesa: ${this.defensePoints}`
    }
}