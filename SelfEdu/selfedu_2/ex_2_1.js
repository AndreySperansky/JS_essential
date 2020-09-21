'use strict';

// создания объектов с помощью оператора new через специальную функцию-конструктор:

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


function Rect() {
         this.name = "прямоугольник";
 
         this.draw = function() {
                   console.log("Рисование фигуры: "+this.name);
         }
         this.__proto__ = prop;
}

// Все, мы установили в качестве базового объекта – объект prop.
 
let r = new Rect();
r.draw();

//  В этом легко убедиться, если перебрать свойства объекта r:

for(let p in r)
         console.log(p+': '+r[p]);

/* Как видите, в консоли отобразились атрибуты, связанные и с объектом prop.*/ 
