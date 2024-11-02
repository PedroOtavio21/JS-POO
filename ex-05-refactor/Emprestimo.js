const Parcela = require("./Parcela")

module.exports = class Emprestimo{
    static #taxa

    constructor(valor, numeroDeParcelas){
        this.valor = valor
        this.parcelas = calcularParcelas(numeroDeParcelas)
        this.dataDeCriacao = new Date()
    }

    static get taxa(){
        return this.#taxa
    }

    static set taxa(taxa){
        this.#taxa = taxa
    }

    calcularParcelas(numeroDeParcelas){
        const parcelas = []
        for(let i = 0; i < numeroDeParcelas; i++){
            parcelas.push(new Parcela((this.valor * Emprestimo.#taxa) / numeroDeParcelas, i))
        }
        return parcelas
    }
}