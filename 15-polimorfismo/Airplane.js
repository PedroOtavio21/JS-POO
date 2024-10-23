const Vehicle = require("./Vehicle");

class Airplane extends Vehicle{
    constructor(name, brand){
        super(name, brand);
    }

    move(speed){
        console.log(`O avião está decolando...`)
    }
}

module.exports = Airplane