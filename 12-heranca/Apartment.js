const Property = require("./Property");

class Apartment extends Property{
    constructor(area, price, number){
        super(area, price); // Palavra reservada que executa o construtor de Property (new Property())
        this.number = number;
    }

    getFloor(){
        return this.number.slice(0, -2);
    }
}

module.exports = Apartment;