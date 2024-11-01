module.exports = class Transferencia{
    constructor(usuarioInicial, usuarioDestino, valor){
        this.usuarioInicial = usuarioInicial
        this.usuarioDestino = usuarioDestino
        this.valor = valor
        this.dataDeCriacao = new Date()
    }
}