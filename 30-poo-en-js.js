// Programacion Orientada a objetos
//Una clase en javaScript es una plantilla para crear objetos, que comparten las misma propiedades y métodosn
//Una clase es como un molde que describe como serán los objetos y que podrán hacer

class Product {
constructor(ProductName= '', ProductPrice){
    this.ProductName = ProductName;
    this.ProductPrice = ProductPrice;
}

formatProduct() {
    return`El producto ${this.ProductName} tiene un precio de ${this.ProductPrice}` 
}
};

const product1 = new Product("Remote Control", 15000)
const product2 = new Product("SSD", 220000)

console.log(product1.formatProduct());
console.log(product2.formatProduct());

// =================================================================
//Herencia en Js 
//La herncia en Js permite que los objetos reutilicen propiedades y métodos de otros 

class Book extends Product{
    constructor(bookName, bookPrice, isbn){
    super(bookPrice);
    this.isbn = isbn;
    }

    formatBook(){
        return`${this.formatProduct()} ${this.bookName} y su ISBN es ${this.isbn}`
    }
};

const book1 = new Book("Satanas", 20000, 13579);

console.log(book1);
console.log(book1.formatProduct());
