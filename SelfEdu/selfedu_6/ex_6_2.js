// https://proproprogs.ru/javascript_oop/staticheskie-metody-i-svoystva-klassov


class Users {
  constructor(name, old) {
    this.name = name;
    this.old = old;
  }

  getName() {
    return this.name;
  }

}

Users.compareOld = function(user1, user2) {
  return user1.old == user2.old;
};

// Users.prototype.compareOld = function(user1, user2) {      // при таком объявлении произойдет копирование в объект
//   return user1.old == user2.old;
// };



let u1 = new Users("Михаил", 19);
let u2 = new Users("Федор", 19);


console.log( Users.compareOld(u1, u2) );    // правильно


//true


// https://proproprogs.ru/htm/javascript_oop/files/staticheskie-metody-i-svoystva-klassov.files/image001.png

// https://proproprogs.ru/htm/javascript_oop/files/staticheskie-metody-i-svoystva-klassov.files/image002.jpg


/* Фактически, слово static «указывает» создавать метод по синтаксису:

Users.compareOld = function(user1, user2) {
         return user1.old == user2.old;
}
Тогда как обычные методы объявляются как свойства объекта prototype:

Users.prototype.getName = function() { return this.name; } */
