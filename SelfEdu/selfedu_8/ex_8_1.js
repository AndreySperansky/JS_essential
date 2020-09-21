// Примеси (Mixins) -->
// https://proproprogs.ru/javascript_oop/primesi-mixins -->

let ShopMixin = {
  getPrice() { return 0; },
  getWeight() { return 0; },
  getSize() { return 0; },
  getPages() { return 0; }
};



class Apple {
  constructor(price, sort) {
            this.price = price;
            this.sort = sort;
  }
}
Object.assign(Apple.prototype, ShopMixin);              //  копирование методов из ShopMixin в объект prototype
Apple.prototype.getPrice = function() { return this.price; };   // переопределение метода getPrice

class ToyBoy { 
  constructor(price, name) {
            this.price = price;
            this.name = name;
  }
}
Object.assign(ToyBoy.prototype, ShopMixin);
ToyBoy.prototype.getPrice = function() { return this.price; }

class Book {
  constructor(price, title, pages) {
            this.price = price;
            this.title = title;
            this.pages = pages;
  }
}

Object.assign(Book.prototype, ShopMixin);
Book.prototype.getPrice = function() { return this.price; }      
Book.prototype.getPages = function() { return this.pages; }  


let list = [];

list.push(new Apple(100, "Белый налив"));
list.push(new ToyBoy(200, "Кукла"));
 
list.push(new Book(20, "Муму", 100));
list.push(new Book(40, "Евгений Онегин", 90));
list.push(new Book(30, "Мастер и Маргарита", 500));


// выполнять различные сортировки:

list.sort( (a, b) => a.getPrice() - b.getPrice() );
// list.sort( (a, b) => a.getWeight() - b.getWeight() );
// list.sort( (a, b) => a.getPages() - b.getPages() );
 
for(let s of list)
         console.log( s.price );