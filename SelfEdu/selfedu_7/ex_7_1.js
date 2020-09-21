class Users {
  #name;
  #old;

  constructor(name, old) {
            this.#name = name;
            this.#old = old;
  }

  getName() { return this.#name; }
}


class Admin extends Users {
  constructor(name, old, login, psw) {
            super(name, old);
            this.login = login;
            this.psw = psw;
  }
}



let u1 = new Users("Михаил", 19);
let u2 = new Admin("Кирилл", 22, "admin", "1111");
 
console.log( u1.getName() ); // Михаил
console.log( u2.getName() ); // Кирилл


console.log( u1 instanceof Admin);   // false
console.log( u2 instanceof Admin );   // true


console.log( u1 instanceof Users);   // true    
console.log( u2 instanceof Users);   // true

// оператор instanceof выполняет проверку принадлежности с учетом наследования классов

console.log( u1.constructor == Users);   // true
console.log( u2.constructor == Users);   // false

/* Здесь свойство constructor (если оно есть и не было искусственно изменено) хранит ссылку на функцию-конструктор, 
с помощью которой и был создан текущий объект. А, так как класс – это и есть функция-конструктор, то мы, таким образом, 
проверяем соответствие объекта тому или иному классу. */