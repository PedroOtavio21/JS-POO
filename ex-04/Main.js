const Warrior = require("./Warrior")
const Mage = require('./Mage')
const Thief = require('./Thief')

const pedro = new Warrior('Pedro', 300, 15, 10, 5)
const ana = new Mage('Ana', 250, 20, 7, 4)
const eleno = new Thief('Eleno', 150, 18, 3)

// console.log(pedro.toString())
// console.log(ana.toString())
// console.log(eleno.toString())

console.log('Informações iniciais\n')
console.log(pedro.toString())
console.log(ana.toString())
console.log(eleno.toString())

pedro.attacking(ana)

console.log('Primeiro confronto\n')
console.log(pedro.toString())
console.log(ana.toString())

ana.attacking(pedro)

console.log('Segundo confronto\n')
console.log(pedro.toString())
console.log(ana.toString())

ana.heal(eleno)

console.log('Ana salva eleno\n')
console.log(ana.toString())
console.log(eleno.toString())

eleno.attacking(ana)

console.log('Terceiro confronto\n')
console.log(ana.toString())
console.log(eleno.toString())