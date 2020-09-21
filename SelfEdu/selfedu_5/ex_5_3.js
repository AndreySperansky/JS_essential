// Конструктор по умолчанию
'use strict';

class Prop {
  constructor(sp, ep, width, color) {
            this.width = width;
            this.color = color;
  }
  getColor() { return this.color; }
}

class Line extends Prop {
  draw() {
            console.log("Линия: "+this.sp.x+", "+this.sp.y+
                              ", "+this.ep.x+", "+this.ep.y);
  }
}

let l1 = new Line({x: 0, y: 0}, {x: 10, y: 20}, 3, 'red');

// При этом будет создана полная иерархия объектов. Правда сам объект l1 будет пустым:

console.log( l1 );


/* Но как это все работает без конструкторов? В действительности, в дочерних классах они всегда есть 
и по умолчанию, если мы не определяем своих, принимают вид:

constructor(...args) {
super(...args);
}

То есть, дочерние классы по умолчанию вызывают конструкторы базовых, передавая им все принятые аргументы args. */