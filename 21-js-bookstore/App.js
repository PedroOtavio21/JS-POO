const Database = require("./Database")
const Author = require("./entities/Author")
const User = require("./entities/User")

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
        App.#dataBase.find('users')
    }

    // Realiza uma criação de autor ao passar seus principais atributos como argumentos
    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#dataBase.saveAuthor(name, nationality, bio)
    }

    // Retorna os autores presentes dentro do banco de dados
    getAuthors(){
        return App.#dataBase.find('users')
    }
}