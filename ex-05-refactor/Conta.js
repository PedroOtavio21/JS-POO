const Emprestimo = require("./Emprestimo")

module.exports = class Conta{
    #saldo
    #depositos 
    #emprestimos
    #transferencias 
    administrador

    constructor(administrador){
        this.#saldo = 0
        this.#depositos = []
        this.#emprestimos = []
        this.#transferencias = []
        this.administrador = administrador
    }

    get saldo(){
        return this.#saldo
    }

    novoDeposito(deposito){
        this.#saldo += deposito.valor
        this.#depositos.push(deposito)
    }

    novoEmprestimo(emprestimo){
        this.#saldo += emprestimo.valor
        this.#emprestimos.push(emprestimo)
    }

    novaTransferencia(transferencia){
        if(transferencia.usuarioDestino === this.administrador.email){
            this.#saldo += transferencia.valor
            this.#transferencias.push(transferencia)
        } else if (transferencia.usuarioInicial === this.administrador.email){
            this.#saldo -= transferencia.valor
            this.#transferencias.push(transferencia)
        } else {
            console.log(`Não foi possível realizar uma transferência para ${transferencia}`)        }
    }
}