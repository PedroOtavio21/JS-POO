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