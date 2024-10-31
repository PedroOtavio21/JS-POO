const App = require('./App')

// Instância de aplicação
const app = new App()

// Criação de autores
app.createAuthor('J. R. R. Tolkien', 'British', '...')
app.createAuthor('Rick Riordan', 'American', '...')

// Cria uma array de authores
const authors = app.getAuthors()

// Criação de livros
app.createBook('O Hobbit', '...', 'Fantasy', 300, authors[0], '...', 19.99, 100)
app.createBook('A Sociedade do Anel', '...', 'Fantasy', 400, authors[0], '...', 24.99, 100)
app.createBook('O Ladrão de Raios', '...', 'Fantasy', 500, authors[1], '...', 24.99, 100)
app.createBook('A Pirâmide Vermelha', '...', 'Fantasy', 600, authors[1], '...', 24.99, 100)

// Cria um array de acordo com os livros do banco de dados
const books = app.getBooks()

// Cria um usuário para realizar o pedido
app.createUser('Pedro', 'pedrootavio.bezerra14@gmail.com', '123456')

// Cria um array de usuários
const users = app.getUsers()


// Criação de arrays com pedidos
const items = [
    {
        product: books[0],
        quantity: 2
    },
    {
        product: books[1],
        quantity: 1
    },
    {
        product: books[3],
        quantity: 1
    }
]

// Cria um pedido relacionado com um usuário
app.createOrder(items, users[0])

// Mostra todos os elementos do banco de dados
app.showDatabase()