/*
- Deve possuir atributos para: o saldo, todos os depósitos realizados, todos os empréstimos, 
todas as transferências e para o dono da conta.

- O atributo do saldo deve ser privado e somente de leitura, ou seja, seu valor não pode ser 
reatribuído, somente podendo ser modificado através dos depósitos, empréstimos e transferências.

- Deve possuir um método para fazer um novo depósito, onde o valor do deposito será acrescentado 
ao saldo e a instância de Deposit ao atributos array de depósitos.

- Deve possuir um método para fazer um novo empréstimo, que deverá acrescentar o valor do empréstimo 
ao saldo e salvar a instância de Loan no atributo array de empréstimos.

- Deve possuir um método de fazer uma transferência, onde é verificado se a transferência foi 
feita para o dono da conta ou pelo dono da conta para outro usuário. Se feito para o dono da 
conta, o valor dela deve ser acrescentado ao saldo. Se feito pelo dono da conta para outro usuário, 
o valor dela deve ser descontado do saldo. Além disso, a transferência deve ser salva no atributo 
array de transferências.
*/

const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

module.exports = class Account{
    #balance
    // #deposits = []
    // #loans = []
    // transfers = []
    
    constructor(user){
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance(){
        return this.#balance
    }

    newDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    newLoan(loan){
        this.#balance += loan.value
        this.loans.push(loan)
    }

    newTransfer(transfer){
        if(transfer.toUser === this.owner.email){
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.fromUser === this.owner.email){
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        } else {
            console.log(`Não foi possível realizar uma transferência para ${transfer}`)
        }
    }
}