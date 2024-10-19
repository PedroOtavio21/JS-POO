// const Address = require('./Address');

const Person = require('./Person');

// const addr = new Address('Rua da gloria', 650, 'Cidade dos funcionários', 'Fortaleza', 'CE');
const pedro = new Person('Pedro Otávio', 'Rua da gloria', 650, 'Cidade dos funcionários', 'Fortaleza', 'CE');

console.log(pedro);
console.log(pedro.address.city);