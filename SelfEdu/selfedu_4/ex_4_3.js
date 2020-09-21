// Геттеры и сеттеры классов

class Book {
  pages = 123;      // новое свойство

  constructor(title, author, price) {
            this.title = title;
            this.author = author;
            this.price = price;
  }
  getTitle() { return this.title; }
  setPrice(pr) { this.price = pr; }
  // здесь не пишем ключевое слово function, а объявляем методы, используя синтаксис объектов, но без запятых в конце.
  get titleBook() {return this.title; }
  set titleBook(value) { this.title = value; }
}

let book1 = new Book("Муму", "Тургенев", 112);
console.log( book1.titleBook );
book1.titleBook = "Мы болеем за Муму";
console.log( book1.titleBook );
console.log( book1 );
// Муму
// Мы болеем за Муму



