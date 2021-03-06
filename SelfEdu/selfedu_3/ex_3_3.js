"use strict";

// Способ клонирования объекта

// Часто в скриптах описанные методы используют для клонирования объекта с сохранением ссылки на базовый объект:
// Создадим объект clone  с теми же самыми методами и свойствами

let clone = Object.create(Object.getPrototypeOf(rect),
         Object.getOwnPropertyDescriptors(rect));


// И если, например, поменять свойство name в клоне:

clone.name = "клон";


// то это никак не отразится на объекте rect:

console.log( rect.name );
console.log( clone.name );

// прямоугольник
// клон                           // действительно другой объект


// Однако, свойства-объекты ведут себя иначе и при изменении состояния базового объекта:

clone.coords = [1,2,3,4];
console.log( rect.coords );
console.log( clone.coords );

/* Увидим изменение и у второго объекта rect. И это, в общем-то логично. Как мы с вами отмечали на предыдущем занятии, 
свойства, которые ссылаются на объекты, а не примитивные типы данных, изменяются непосредственно в базовом классе.
 А, так как оба дочерних объекта наследуются от одного и того же базового, то и получаем такой результат. */