/* jshint globalstrict: true */
'use strict';

// А если переписать, то оно добавится в дочернем объекте:
 


let geom = {
  name: "фигура",
  sp: {x: 0, y: 0},
  ep: {x: 100, y: 20},
  get nameGeom() {return this.name; },
  set nameGeom(name) {this.name = name; },
  get coords() {
            return [this.sp.x, this.sp.y, this.ep.x, this.ep.y];
  },
  
  set coords(coords) {
            this.sp = coords[0]; this.sp = coords[1];
            this.ep = coords[2]; this.ep = coords[3];
  }

};

// Вот на это следует обращать внимание.


let rect = {
  draw() {
            console.log("Рисование прямоугольника: " +
                     this.sp.x+","+this.sp.y+","+this.ep.x+","+this.ep.y);
  }
};

rect.__proto__ = geom;

// то операция:

rect.coords = [1,2,3,4];

// изменит состояние базового объекта geom, :

// console.log(rect.coords);           // [undefined, undefined, undefined, undefined]
// console.log(geom.coords);           // [0, 0, 100, 20]


for(let prop in rect) 
  if(rect.hasOwnProperty(prop))
    console.log(prop+": "+rect[prop]);


 //   созданы два новых свойства
 //   sp: 2
 //   ep: 4
