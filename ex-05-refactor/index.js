const App = require('./App')

App.criarUsuario('Pedro Otávio', 'pedro@email.com')
App.criarUsuario('Isaac Pontes', 'isaac@email.com')
App.criarUsuario('Lucas Queiroga', 'lucas@email.com')

App.deposito('isaac@email.com', 120)
App.transferencia('isaac@email.com', 'lucas@email.com', 20)

App.alterarTaxa(10)
App.emprestimo('pedro@email.com', 2000, 24)

console.log(App.procurarUsuario('isaac@email.com'))
console.log(App.procurarUsuario('isaac@email.com').conta)

console.log(App.procurarUsuario('lucas@email.com'))
console.log(App.procurarUsuario('lucas@email.com').conta)

console.log(App.procurarUsuario('pedro@email.com'))
console.log(App.procurarUsuario('pedro@email.com').conta)
console.log(App.procurarUsuario('pedro@email.com').conta.emprestimos[0].parcelas)