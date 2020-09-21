// https://proproprogs.ru/javascript_oop/staticheskie-metody-i-svoystva-klassov


class Users {
  constructor(name, old) {
    this.name = name;
    this.old = old;
  }

  getName() {
    return this.name;
  }

  // сравнение пользователей по возрасту

  static compareOld(user1, user2) {                //  статический метод принадлежит  классу но не объекту
    return user1.old == user2.old;
  }

}




let u1 = new Users("Михаил", 19);
let u2 = new Users("Федор", 19);

// Статистический метож вызвать можно только из класса USers

// console.log(u1.compareOld(u2));        // не правильно


console.log( Users.compareOld(u1, u2) );    // правильно


//true


// https://proproprogs.ru/htm/javascript_oop/files/staticheskie-metody-i-svoystva-klassov.files/image001.png

// https://proproprogs.ru/htm/javascript_oop/files/staticheskie-metody-i-svoystva-klassov.files/image002.jpg







