const Character = require('./Character')
const Thief = require('./Thief')
const Mage = require('./Mage')
// const Warrior = require('./Warrior')

const character = new Character('Pedro', 1200, 800, 750)
const ladrao = new Thief('Ladrão', 700, 1250, 330)
const mago = new Mage('Mago', 900, 1000, 560, 200)

console.log(character.toString())
console.log(ladrao.toString())
console.log(mago.toString())

// Battle - Mago X Character
// Mago -> 1000 + 200 = 1200 atk
// Character -> 1200 life and 750 def
// Result -> 1200 - (1200 - 750) = 1200 - 450 = 750

const resultado = mago.attackCharacter(character)
console.log(resultado)
console.log(character.toString())

// Battle - Ladrao X Mago
// Ladrao -> 1250 atk
// Mago -> 900 life and 560 def
// Result -> 900 - 2(1250 - 560) = 900 - 2 * 690 = 900 - 1380 = - 480

const newResult = ladrao.attackCharacter(mago)
console.log(newResult)
console.log(mago.toString())