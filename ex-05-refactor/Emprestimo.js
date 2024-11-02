const Parcela = require("./Parcela")

module.exports = class Emprestimo{
    static #taxa

    constructor(valor, numeroDeParcelas){
        this.valor = valor
        this.dataDeCriacao = new Date()
        this.parcelas = this.calcularParcelas(numeroDeParcelas)
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