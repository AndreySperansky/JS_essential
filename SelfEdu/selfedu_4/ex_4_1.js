
/* class <название> {
  constructor() { … }
  method1() { … }
  …
  methodN() { … }
} */

class Book_ {
  constructor() {
            console.log("создание объекта book");
  }
}
// И, затем, с помощью оператора new создать объект по этому шаблону:

let book1 = new Book_();
// создание объекта book
console.log(book1);
// Book_{} 


class Book {
  constructor(title, author, price) {
            this.title = title;
            this.author = author;
            this.price = price;
  }
  getTitle() { return this.title; }
  setPrice(pr) { this.price = pr; }
  // здесь не пишем ключевое слово function, а объявляем методы, используя синтаксис объектов, но без запятых в конце.
}




// ОТЛИЧИЕ КЛАССОВ ОТ ФУНКЦИЙ

// весь код внутри классов автоматически помечается директивой "use strict"
// методы класса автоматически помечаются как неперечисляемые и не выводятся с помощью цикла for in:

/* 
function Book(title, author, price) {
  this.title = title;
  this.author = author;
  this.price = price;
}

Book.prototype.getTitle = function() { return this.title; }
Book.prototype.setPrice = function(pr) { this.price = pr; }
 */


// И при создании объекта, передадим этим параметрам определенные значения:

let book2 = new Book("Муму", "Тургенев", 112);
console.log(book2);
// Book {title: "Муму", author: "Тургенев", price: 112}
console.log(book2.getTitle());
// Муму




