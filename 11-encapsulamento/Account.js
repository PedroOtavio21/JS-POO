// Diferente de outras linguagens, atributos e métodos privados utilizam '#' antes do nome!
class Account{
    #password;
    #balance = 0;
    constructor(user){
        this.email = user.email;
        this.#password = user.password;
    }

    getBalance(email, password){
        if(this.#authenticate(email, password)){
            return this.#balance;
        } else {
            return null;
        }
    }

    setBalance(balance){
        this.#balance = balance;
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password;
    }
}

const user = {
    email: 'pedrootavio.bezerra14@gmail.com',
    password: '1234'       
};

const myAccount = new Account(user);

console.log(myAccount);

// // O objeto cria dinâmicamente uma nova propriedade abaixo!
// myAccount.balance = 1200.0; // balance != #balance
// myAccount.email = 'teste@email.com'; // email != #email
// console.log(myAccount);

console.log(myAccount.getBalance('pedrootavio.bezerra14@gmail.com', '1234'))
