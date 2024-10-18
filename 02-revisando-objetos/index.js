// Método construtor:
function Book(title, pages, tags, author){
    this.title = title;
    this.pages = pages;
    this.tags = tags;
    this.author = author;
    this.inStock = 0;
    this.published = false;
    this.addOnStock = (quantities) => {
        this.inStock = quantities;
    }
}

const tags = ["adventure", "fantasy", "medieval"];

const author = { name: "J.R.R. Tolkien"}

const Hobbit = new Book("Hobbit", 336, tags, author);
Hobbit.addOnStock(40);

console.log(Hobbit);