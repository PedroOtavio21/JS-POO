class Wallet{
    #ammount
    #username

    constructor(){
        this.#ammount = 100.99 * 100 // 10099
    }

    get amount(){
        return this.#ammount / 100
    }

    get username(){
        return this.#username
    }

    set username(username){
        if(typeof username === 'string'){
            this.#username = username
        } else {
            console.log('Username must be of type string')
        }
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username = 'Pedro'
console.log(myWallet.username)
myWallet.username += ' Otávio'
console.log(myWallet.username)

myWallet.username = true
// Muito foda!