class Prop {
  constructor(width, color) {
            this.width = width;
            this.color = color;
  }
  getColor() { return this.color; }
}


/* Затем, создадим связь между этим классом и новым (дочерним) для представления линии на плоскости. 
Пусть класс называется Line : */
/* 
class Line extends Prop {
         constructor(sp, ep, width, color) {
                   this.sp = sp;
                   this.ep = ep;

         }
 
         draw() {
                   console.log("Линия: "+this.sp.x+", "+this.sp.y+
                                     ", "+this.ep.x+", "+this.ep.y);
         } 
}
 */
// Если сейчас попробовать сформировать объект Line:
// let l1 = new Line({x: 0, y: 0}, {x: 10, y: 20}, 1, 'red');

/* то произойдет ошибка. Ошибка, связанная с особенностью работы конструктора в наследуемом классе Line. 
Дело в том, что JavaScript формирует указатель this только после выполнения конструктора базового класса. */

// Поправим это. Для вызова конструктора базового класса существует специальная функция: super([параметры])

class Line extends Prop {
  constructor(sp, ep, width, color) {
            super(width, color);
            this.sp = sp;
            this.ep = ep;

  }

  draw() {
          console.log("Линия: " + this.sp.x + ", " + this.sp.y + ", " + this.ep.x + ", " + this.ep.y);
  } 
}

let l1 = new Line({x: 0, y: 0}, {x: 10, y: 20}, 1, 'red');
console.log(l1);