/* jshint globalstrict: true */
'use strict';

// Но здесь есть один тонкий момент. Если проделать ту же операцию с объектами, а не примитивными типами данных, например с sp и ep:

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
            this.sp.x = coords[0]; this.sp.y = coords[1];
            this.ep.x = coords[2]; this.ep.y = coords[3];
  }
};


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

console.log(rect.coords);           // [1,2,3,4]
console.log(geom.coords);           // [1,2,3,4]


/* Дело в том, что мы здесь обращаемся сначала к свойству sp, которое определено в базовом объекте 
(и мы автоматически переходим к нему), а затем уже, меняем его свойства x и y. 
То есть, мы не перезаписываем объект целиком, а работаем с его отдельными свойствами. */