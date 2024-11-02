const Conta = require("./Conta")

module.exports = class Usuario{
    constructor(nomeCompleto, email){
        this.nomeCompleto = nomeCompleto
        this.email = email
        this.conta = new Conta(this)
    }
}