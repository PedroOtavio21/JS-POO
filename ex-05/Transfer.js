// Deverá possuir atributos para: o usuário que enviou a transferência, o que recebeu a transferência, 
// o valor e a data de criação.

module.exports = class Transfer{
    constructor(userTransfer, userRecive, value){
        this.userTransfer = userTransfer
        this.userRecive = userRecive
        this.value = value
        this.creationDate = new Date()
    }
}