// Методы create, getPrototypeOf и setPrototypeOf

/* На сегодняшний день свойство __proto__ считается устаревшим и формально поддерживается только в браузерной среде. 
Хотя, почти все остальные среды по-прежнему позволяют им пользоваться. Ему на смену пришли новые методы объекта Object: */

/* Object.create(proto, [descriptors]) – используется для создания нового объекта с указанием базового (proto) 
                                      и необязательным набором дополнительных дескрипторов свойств – descriptors;
Object.getPrototypeOf(obj) – возвращает ссылку на базовый объект, либо null, если его нет;
Object.setPrototypeOf(obj, proto) – назначает базовый объект proto для уже существующего объекта obj. */


let prop = {
  sp: {x: 0, y: 0},
  ep: {x: 100, y: 20},
  get coords() {
            return [this.sp.x, this.sp.y, this.ep.x, this.ep.y];
  },
  set coords(coords) {
            this.sp.x = coords[0]; this.sp.y = coords[1];
            this.ep.x = coords[2]; this.ep.y = coords[3];
  }
};

/* function Rect() {
  this.name = "прямоугольник";

  this.draw = function() {
            console.log("Рисование фигуры: "+this.name);
  }

  this.__proto__ = prop;
} */


// Создание нового объекта, содержащего методы и свойства базового объекта prop
let rect1 = Object.create(prop, {});
console.log(rect1);


// Перепишем объявление объекта Rect с использованием метода create:

let rect = Object.create(prop, {
         name: {value: "прямоугольник", writable: true},    // name - объект со свойствами "прямоугольник" и "writable" (то есть name можно менять)
         draw: {value: function() {                         // value - это ключ
                            console.log("Рисование фигуры: "+this.name);
                   }
         },
});
 
console.log( rect.coords );
rect.draw();



// Чтобы получить ссылку на базовый класс, можно воспользоваться методом getPrototypeOf:

console.log( Object.getPrototypeOf(rect) === prop );


// Наконец, для замены базового объекта на другой, выполним метод setPrototypeOf:

Object.setPrototypeOf( rect, {} );
console.log( Object.getPrototypeOf(rect) === prop );

// Мы здесь указали пустой объект вместо прежнего prop и теперь свойство coords возвращает значение undefined.


