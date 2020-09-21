// ПЕРЕОПРЕДЕЛЕНИЕ МЕТОДОВ

class Prop {
  constructor(width, color) {
    this.width = width;
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

class Line extends Prop {
  constructor(sp, ep, width, color) {
    super(width, color);
    this.sp = sp;
    this.ep = ep;

  }
  /*   
    getColor() {
      return '['+this.color+']';
    }
  */

  // По смыслу идентично предыдущему способу переопределения метода но более гибкий
  getColor() {
    let color = super.getColor();
    return '[' + color + ']';
  }

  /* Однако, обратите внимание, контекст super на базовый класс может легко потеряться, 
если мы обратимся к нему, например, из анонимной функции: */
  /* 
    showColor() {
              setTimeout(function() {
                      console.log( super.getColor() );
              }, 0);
    }
    */
  // Произойдет ошибка т.к. анонимная фуекция вызывается сама по себе вне контекста.
  //  А вот так, все будет работать:

  showColor() {
    console.log(super.getColor());
  }

  // или, так:

  showColor1() {
    setTimeout(() => {
      console.log(super.getColor());
    }, 0);
  }
  // Мы здесь используем стрелочную функцию, а как известно, они «прозрачные» и не образуют собственного контекста.



  draw() {
    console.log("Линия: " + this.sp.x + ", " + this.sp.y + ", " + this.ep.x + ", " + this.ep.y);
  }
}

let l1 = new Line({
  x: 0,
  y: 0
}, {
  x: 10,
  y: 20
}, 1, 'red');
console.log(l1);
console.log(l1.getColor());
// [red]
l1.showColor();