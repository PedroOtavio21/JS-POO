const Product = require("./Product");

module.exports = class Poster extends Product{
    // Sub classe que herda de Product
    constructor(name, description, price, inStock, height, width){
        super(name, description, price, inStock)
        this.height = height
        this.width = width
    }
}