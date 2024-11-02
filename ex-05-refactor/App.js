const Deposito = require("./Deposito")
const Emprestimo = require("./Emprestimo")
const Transferencia = require("./Transferencia")
const Usuario = require("./Usuario")

module.exports = class App{
    static #usuarios = []

    static criarUsuario(nomeCompleto, email){
        const usuario = App.procurarUsuario(email)
        if(!usuario){
            App.#usuarios.push(new Usuario(nomeCompleto, email))
        }
    }

    static procurarUsuario(email){
        const usuario = this.#usuarios.find(usuario => usuario.email === email)
        return usuario ?? null
    }

    static deposito(email, valor){
        const usuario = this.procurarUsuario(email)
        if(usuario){
            const novoDeposito = new Deposito(valor)
            usuario.conta.novoDeposito(novoDeposito)
        }
    }

    static emprestimo(email, valor, numeroDeParcelas){
        const usuario = this.procurarUsuario(email)
        if(usuario){
            const novoEmprestimo = new Emprestimo(valor, numeroDeParcelas)
            usuario.conta.novoEmprestimo(novoEmprestimo)
        }
    }

    static transferencia(usuarioInicialEmail, usuarioDestinoEmail, valor){
        const usuarioInicial = this.procurarUsuario(usuarioInicialEmail)
        const usuarioDestino = this.procurarUsuario(usuarioDestinoEmail)
        if(usuarioInicial && usuarioDestino){
            const novaTransferencia = new Transferencia(usuarioInicial, usuarioDestino, valor)
            usuarioInicial.conta.novaTransferencia(novaTransferencia)
            usuarioDestino.conta.novaTransferencia(novaTransferencia)
        }
    }

    static alterarTaxa(taxa){
        Emprestimo.taxa = taxa
    }
}