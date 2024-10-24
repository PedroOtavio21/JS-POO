const Character = require('./Character')
const Thief = require('./Thief')
const Mage = require('./Mage')
const Warrior = require('./Warrior')

const hero = new Character('Hero', 900, 800, 750)
const thief = new Thief('Thief', 650, 1400, 300)
const wizard = new Mage('Wizard', 800, 1100, 500, 300)
const knight = new Warrior('Knight', 1500, 1200, 800, 200)

console.log(hero.toString())
console.log(thief.toString())
console.log(wizard.toString())
console.log(knight.toString())

// Teste guerreiro
console.log('\n')
hero.attackCharacter(thief)
console.log(hero.toString())
console.log(thief.toString())


// Teste Ladrão
console.log('\n')

thief.attackCharacter(hero)
console.log(thief.toString())
console.log(hero.toString())

// Teste Mago
console.log('\n')

wizard.attackCharacter(knight)
wizard.saveFriend(hero)
console.log(wizard.toString())
console.log(knight.toString())
console.log(hero.toString())

// Teste Cavaleiro
console.log('\n')
knight.attackCharacter(thief)
knight.turnPosition()
knight.attackCharacter(thief)
console.log(knight.toString())
console.log(thief.toString())