// Наследование статических методов

class Users {
  static countUsers = 0;

  constructor(name, old) {
    Users.countUsers++;
    this.name = name;
    this.old = old;
  }

  getName() {
    return this.name;
  }

   static compareOld(user1, user2) { 
    console.log(this == Admin);
    return user1.old == user2.old;
  }

}



class Admin extends Users {
  constructor(name, old, login, psw) {
            super(name, old);             //  вызов конструктора базового класса
            this.login = login;
            this.psw = psw;
  }

  static createAdmin(name, old) {
    // console.log(this == Admin);
    return new this(name, old, "admin", "root");    // В статических методах this  указывет на тот класс из которого он был вызван
  }
}


let u1 = new Users("Михаил", 19);
let u2 = new Admin("Федор", 19, "aaa", "0123");
let u3 = Admin.createAdmin("Сергей", 33);

console.log( Users.compareOld(u1, u2) );  // this  ссылается на класс  Users
console.log( Admin.compareOld(u1, u2) );  // this  ссылается на класс  Admin
console.log( Users.countUsers );
