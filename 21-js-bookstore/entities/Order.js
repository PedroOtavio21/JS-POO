module.exports = class Order{
    // Classe destinada ao pedido do usuário (cliente)
    #total
    #items
    #user

    constructor(items, user){
        // Verifica, a partir do pedido do cliente, se possuem os pedidos no estoque
        items.forEach( ({product, quantity}) => {
            if(quantity > product.inStock){
                throw new Error('Quantidade insuficiente em estoque!')
            }
        });
        this.#items = items
        this.#user = user
        // Valor total de produtos em estoque
        this.#total = items.reduce((sum, {product, quantity}) => sum + (product.price * quantity), 0)
    }

    // Retorna os valores utilizados na compra para verificação
    get data(){
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}