const Vehicle = require("./Vehicle");

class Car extends Vehicle{
    constructor(name, brand, speed){
        super(name, brand);
        this.speed = speed;
    }

    move(){
        console.log(`O carro está se movendo à ${this.speed} km/h ...`)
    }
}

module.exports = Car;