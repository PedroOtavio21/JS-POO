module.exports = class Database{
    // Classe responsável por armazenar os principais dados da aplicação

    // Inicializa o banco
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    // Procura a chave necessária e a retorna (ex: find(authors) => this.#storage[authors])
    find(key){
        return this.#storage[key]
    }

    // Salva o author no banco de dados
    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    // Método auxiliar que realiza uma pesquisa, comoparando o argumento com um elemento existente (caso tenha) no banco
    findBookByName(bookName){
        return this.#storage.books.find(b => b.name === bookName)
    }

    // Salva o livro dentro do banco, utilizando método auxiliar, após uma verificação
    saveBook(book){
        const bookExists = this.findBookByName(book.name)
        if(!bookExists){
            this.#storage.books.push(book)
        }
    }

    // Adiciona a quantidade de livros com o nome sugerido no estoque
    addBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    // Remove a quantidade de livros com o nome sugerido no estoque
    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    // Método auxiliar que realiza uma pesquisa, comoparando o argumento com um elemento existente (caso tenha) no banco
    findPosterByName(posterName){
        return this.#storage.posters.find(p => p.name === posterName)
    }

    // Salva o poster dentro do banco, utilizando método auxiliar, após uma verificação
    savePoster(poster){
        const posterExists = this.findPosterByName(poster.name)
        if(!posterExists){
            this.#storage.posters.push(poster)
        }
    }

    // Adiciona a quantidade de posters com o nome sugerido no estoque
    addPostersToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    // Remove a quantidade de posters com o nome sugerido no estoque
    removePostersFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    // Salva o usuário dentro do banco, utilizando método auxiliar, após uma verificação
    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists){
            this.#storage.users.push(userExists)
        }
    }

    // Salva o pedido de um usuário dentro do banco
    saveOrder(order){
        this.#storage.orders.push(order)
    }

    // Mostra no console as principais informações do banco de dados
    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}