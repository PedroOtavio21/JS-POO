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
  static #fee

  constructor(value){
    this.value = value
    this.creationDate = new Date()
    this.installments = calculateInstallments(numberInstallments)
  }

  static get fee(){
    return this.#fee
  }

  static set fee(fee){
    this.#fee = fee
  }

  calculateInstallments(numberInstallments){
    const value = this.value / numberInstallments
    const installments = []
    for(let i = 0; i < numberInstallments; i++){
        installments.push(new Installment(value, numberInstallments, 'pendente'))
    }
    return installments
  }
}