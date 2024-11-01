/*
- Deverá possuir um atributo estático privado para a taxa de juros e que possuir um 
getter estático para ler o atributo privado e um setter estático para definir uma nova 
taxa de juros a partir de uma porcentagem.

- Deverá possuir os atributos para o valor do empréstimo e para a data de criação.

- Também deverá possuir um atributo para as parcelas do empréstimo, sendo que o construtor 
deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de 
Installments) e armazená-las nesse atributo.
*/

const Installment = require("./Installment")

module.exports = class Loan{
  static #fee = 1.05

  constructor(value, installments){
    this.value = value
    this.installments = []
    for(let i = 1; i <= installments; i++){
        this.installments.push(new Installment((value * Loan.#fee) / 100), i)
    }
    this.createdAte = new Date()
  }

  static get fee(){
    return this.#fee
  }

  static set fee(fee){
    Loan.#fee = 1 + (fee / 100)
  }
}