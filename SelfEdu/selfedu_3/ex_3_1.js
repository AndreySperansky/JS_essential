"use strict";

let obj = {};                    // Создание объекта JS  пердпочтительная форма
// let obj = new Object();          // Создание объекта JS  пердпочтительная форма
console.log(obj.toString());
// [object Object]


let objarr = Array(1,2,3);
console.log( objarr.toString())
// 1,2,3


//В JavaScript строки, числа и булевые переменные:

String, Number, Boolean

//относятся к примитивным типам и, строго говоря, не являются объектами. Однако, для них также можно вызывать методы базового объекта, например:

console.log("Hello World".toString());
// Hello World

// строка, литерал, здесь превращается в объект.

console.log("Hello World".toUpperCase());
// HELLO WORLD


/* Если виртуальная машина JavaScript «видит», что к литералу идет обращение как к объекту, то она временно создает объект соответствующего типа, 
для этого объекта вызывает указанный метод и, затем, временный объект уничтожается. */

// Раз это так, то для любого такого объекта, в нашем случае строки, можно менять и добавлять новые свойства и методы, используя объект prototype.


String.prototype.toUpperCase = function() {
  return this;
};

console.log("Hello World".toUpperCase());
// Hello World


String.prototype.len = function() {
  return this.length;
}

console.log("Hello World".len());

// 11


