const Property = require('./Property');
const House = require('./House');
const Apartment = require('./Apartment');

const land = new Property(200, 25000);
const someHouse = new House(120, 200000);
const apt = new Apartment(100, 160000, '201');

console.log(land);
console.log(someHouse);

// Verifica se House é uma Property
// console.log(someHouse instanceof Property);
console.log(apt);
console.log(apt.getFloor());