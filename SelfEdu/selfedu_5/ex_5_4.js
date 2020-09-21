// Особенности работы extends

/* 
Возможность динамической генерации базового класса. 
Дело в том, что после ключевого слова extends можно указывать любой исполняемое выражение:
extends <исполняемое выражение>

например, функцию, которая бы возвращала класс. Давайте сначала объявим такую функцию: */

class Prop {
  constructor(sp, ep, width, color) {
            this.width = width;
            this.color = color;
  }
  getColor() { return this.color; }
}


function getExtends(type) {
  return class {
    constructor(width, color) {
      this.type = type;
      this.width = width;
      this.color = color;
    }
  };
}

// И, затем, вызовем ее после extends:

class Line extends getExtends("2D") {
  // constructor(sp, ep, width, color) {
    // super(width, color);
    // this.sp = sp;
    // this.ep = ep;
  // }

  draw() {
    console.log("Линия: "+this.sp.x+", "+this.sp.y+
                      ", "+this.ep.x+", "+this.ep.y);
  }

  getType() { return this.type; }
}

let l1 = new Line({x: 0, y: 0}, {x: 10, y: 20}, 3, 'red');
console.log( l1 );


/* Возможно, это несколько необычно выглядит. Зато, бывает весьма эффективно. 
В частности, здесь, мы указываем тип фигуры «2D» - двумерная, который записывается в свойстве type создаваемого объекта. 
Причем, далее, по программе нам нет необходимости определять это свойство. Оно автоматически будет создаваться с этим значением, 
т.к. мы сгенерировали именно такой класс: значение type: 2D в него, как бы, «вшито». */