class Product{
    constructor(name, description, price){
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = 0;
    }

    addToStock(quantities){
        this.inStock += quantities;
    }

    calculateDiscount(percent){
        return this.price - (this.price * percent / 100);
    }
}

const product = new Product('Iphone 15', 'Celular de Ultima geração', 4899.99)
console.log(product)

product.addToStock(65)
console.log(product)

console.log(`Aplicando um desconto de 15%: R$${product.calculateDiscount(15)}`)