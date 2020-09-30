
// "use strict";
// https://www.youtube.com/watch?v=9_qHG3dKfaw&list=WL&index=83

console.log(this); // window

document.querySelector('.b1').onclick = function () {
  console.log(this);
  this.style.background = 'orange';
};


function foo() {
  console.log(this);
  this.style.background = 'lightgreen';
}


let p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
  p[i].onclick = foo;
}


// стрелочная функция указывает на объект window
// errow function points out  the  Window
document.querySelector('.b2').onclick =  () => {
  console.log(this);
  this.style.background = 'orange';
};

// error: windoow has no method background

let p1 = document.querySelectorAll('p#slct1');
for (let i = 0; i < p1.length; i++) {
  p1[i].onclick = () => {
    this.style.background = 'lightgreen';
  };
}

document.querySelector('.b3').addEventListener('click', foo);

// this  в классах 

class U2 {
  constructor(model) {
      this.model = model;
  }
  showThis() {
    console.log(this);
  }
}

const boat = new U2('777');
const boat2 = new U2('555');
console.log(boat);
console.log(boat2);
boat.showThis();
boat2.showThis();


// Наследование 

class YellowSubmarine extends U2 {
  constructor(model, color) {
    super(model);
    this.color = color;
    console.log('----------------');
    console.log(this.model);
    console.log('В классе this ссылается на объект, созданный на основе класса');
    console.log('*****************');
  }
}

let b = new YellowSubmarine(111, 'red');
console.log(b);
console.log(b.model);
let c = new YellowSubmarine(222, 'yellow');
console.log(c);
console.log(c.model);

