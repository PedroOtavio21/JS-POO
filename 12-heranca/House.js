const Property = require('./Property');

// Herança é ativada ao utilizar 'extends'
class House extends Property{
    constructor(area, price){
        super(area, price);
    }
}

module.exports = House;