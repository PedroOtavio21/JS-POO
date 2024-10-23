const Vehicle = require("./Vehicle");

class Ship extends Vehicle{
    constructor(name, brand, time){
        super(name, brand);
        this.time = time
    }

    move(){
        console.log(`O barco está se movendo às ${this.time} horas...`)
    }
}

module.exports = Ship