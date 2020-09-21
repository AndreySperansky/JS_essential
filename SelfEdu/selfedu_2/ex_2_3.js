

'use strict';

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
        //  this.__proto__ = prop;
}


Rect.prototype.__proto__ = prop;
Rect.prototype.getName = function() { return this.name; }
Rect.prototype.setName = function(name) { this.name = name; }


/* То есть, теперь prototype ссылается не на какой-то конкретный объект, а являясь сам по себе объектом, 
приобретет дополнительные свойства: prop, getName и setName. В этом случае, новый созданный объект 
Rect будет иметь доступ ко всем этими свойствам, расположенные в базовом объекте, а базовый объект, 
в свою очередь, будет ссылаться на объект prop: */
 

let r = new Rect();
// let r2 = new r.constructor();       // создание объекта, подобного объекту r
// console.log(r);
// console.log(Rect.prototype)
console.log( r.getName() );
r.draw();