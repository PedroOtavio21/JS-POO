const App = require('./App')

App.createUser('Pedro Otávio', 'pedro@email.com')
App.createUser('Isaac Pontes', 'isaac@email.com')
App.createUser('Lucas Queiroga', 'lucas@email.com')

App.deposit('isaac@email.com', 120)
App.transfer('isaac@email.com', 'lucas@email.com', 20)

App.changeLoanFee(10)
App.loan('pedro@email.com', 2000, 24)

console.log(App.findUser('isaac@email.com'))
console.log(App.findUser('isaac@email.com').account)

console.log(App.findUser('lucas@email.com'))
console.log(App.findUser('lucas@email.com').account)

console.log(App.findUser('pedro@email.com'))
console.log(App.findUser('pedro@email.com').account)
console.log(App.findUser('pedro@email.com').account.loans[0].installments)