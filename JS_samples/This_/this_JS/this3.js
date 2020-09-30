const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');
const p1 = document.querySelector('p#slct1');
const p3 = document.querySelector('p#slct3');

b1.onclick = test;

function test() {
    console.log(this);
    this.style.background = "lightgreen";
}


function foo(color, num) {
    console.log(num);
    this.style.background = color;
}



// test();  !!! error !!!

// function 'call()'
// function.call()(context, [arg1, arg2, ....])


b2.onclick = test;
//test.call(b2); // без клика вызвал функцию test и присвоил this = b2

b3.onclick = function () {
    test.call(p1)
}

b2.onclick = function () {
    foo.call(b2, 'red', 5555);
}



b4.onclick = function () {
    foo.apply(p3, ['red', 7777]);
    foo.apply(b4, ['yellow', 1111]);
}

//bind позволяет создавать создавать новый экземпляр 
// функции c заранее прявязанынм контексом и использовать его позднее, например
//foo.apply(b5, ['red', 11111]);    // сработает сразу

// здесь создаем 2 экземпляра функции с разными контекстами
let a = foo.bind(b5, 'orange', 8888888);
let b = foo.bind(b6, 'red', 9999999);

// и используем когда надо
b6.onclick = a;
b5.onclick = b;
















