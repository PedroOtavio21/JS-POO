const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require('./entities/Book')
const Poster = require('./entities/Poster')
const User = require("./entities/User")
const Order = require('./entities/Order')

module.exports = class App{
    // Classe principal da aplicação de projeto prático em JS V - POO

    // Atributo estático, fazendo com oque exista apenas 1 banco de dados!
    static #dataBase = new Database()

    // Realiza uma criação de usuário ao passar seus principais atributos como argumentos
    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#dataBase.saveUser(user)
    }

    // Retorna os usuários presentes dentro do banco de dados
    getUsers(){
        return App.#dataBase.find('users')
    }

    // Realiza uma criação de autor ao passar seus principais atributos como argumentos
    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#dataBase.saveAuthor(author)
    }

    // Retorna os autores presentes dentro do banco de dados
    getAuthors(){
        return App.#dataBase.find('users')
    }

    // Realiza uma criação de livro ao passar seus principais atributos como argumentos
    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#dataBase.saveBook(book)
    }

    // Adiciona o livro e sua quantidade ao estoque do database
    addBook(bookName, quantity){
        App.#dataBase.addBooksToStock(bookName, quantity)
    }

    // Retorna os livros presentes dentro do banco de dados
    getBooks(){
        return App.#dataBase.find('books')
    }

    // Realiza uma criação de poster ao passar seus principais atributos como argumentos
    createPoster(name, description, height, width, price, inStock){
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#dataBase.savePoster(poster)
    }

    // Adiciona o poster e sua quantidade dentro do banco de dados
    addPoster(bookName, quantity){
        App.#dataBase.addPostersToStock(bookName, quantity)
    }

    // Retorna os livro presentes dentro do banco de dados
    getPosters(){
        return App.#dataBase.find('posters')
    }

    // Realiza uma criação de pedido ao passar seus principais atributos como argumentos, além de 
    // realizar uma verificação de sua instância
    createOrder(items, user){
        const order = new Order(items, user)
        App.#dataBase.saveOrder(order)
        order.data.items.forEach(({ product, quantity}) => {
            if(product instanceof Book){
                App.#dataBase.removeBooksFromStock(product.name, quantity)
            } else if (product instanceof Poster){
                App.#dataBase.removePostersFromStock(product.name, quantity)
            }
        })
    }

    // Retorna os pedidos presentes dentro do banco de dados
    getOrder(){
        return App.#dataBase.find('orders')
    }

    // Mostra os elementos presentes dentro do banco de dados
    showDatabase(){
        App.#dataBase.showStorage()
    }
}