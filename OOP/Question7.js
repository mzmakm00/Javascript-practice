class Book{
    constructor(title,author,publicYear){
          this.title = title ;
          this.author = author;
          this.publicYear = publicYear;
    }
    displayBook(){
        console.log(`Book Details : \n Title : ${this.title} \n Author : ${this.author} \n Publication Year : ${this.publicYear}`)
    }
}

class Ebook extends Book {
    constructor(title,author,publicYear,price){
        super(title,author,publicYear)
        this.price = price;
    }
    displayEbook(){
    console.log(` E-Book Details \n Title : ${this.title} \n Author : ${this.author} \n Publication Year : ${this.publicYear} \n E-Book Price : ${this.price}`)
    }
}

const E_book = new Ebook('Don Quixote', 'Miguel de Carvantes', 1605 , '$21.49')

E_book.displayEbook()