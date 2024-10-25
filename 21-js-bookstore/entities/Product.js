module.exports = class Product{
    // Super classe
    constructor(name, description, price, inStock = 0){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    // Adiciona um produto ao estoque
    addToStock(quantity){
        this.inStock += quantity
    }

    // Remove um produto do estoque
    removeFromStock(quantity){
        this.inStock -= quantity
    }
}