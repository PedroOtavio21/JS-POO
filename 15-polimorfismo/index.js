const Vehicle = require('./Vehicle')
const Car = require('./Car')
const Ship = require('./Ship')
const Airplane = require('./Airplane')

data = new Date().getHours()

console.log(data)
const veiculo = new Vehicle('Bicicleta', 'Monark');
const barco = new Ship('Barco a vapor', 'Lambo', data)
const aviao = new Airplane('Avião', 'Português')
const ferrari = new Car('La Ferrari', 'Ferrari', 218)

veiculo.move()
barco.move()
aviao.move(92)
ferrari.move()

function start(vehicle){
    console.log("Iniciando veículo ...")
    vehicle.move()
}

start(veiculo)
start(aviao)