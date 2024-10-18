/* 
    Sempre que em uma determinada aplicação, for trabalhar com classes, o nome de sua classe deve ter
    o mesmo nome do arquivo!
*/

class Book{
    // Método construtor
    constructor(title){
        this.title = title;
        this.published = false;
    }

    publish(){
        this.published = true;
    }
}

const hobbit = new Book("Hobbit");
const silmariliun = new Book("O Silmariliun")
hobbit.publish();

console.log(hobbit);
console.log(silmariliun);

// Verifica se a instância hobbit é da classe Book!
console.log(hobbit instanceof Book)