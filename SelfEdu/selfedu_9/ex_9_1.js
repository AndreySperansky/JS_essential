// try/catch/finally
'use strict';

let res = 0;
try {
  // let d = 0;
  res = 5 / d;
  console.log(res);
} catch (error) {
  console.log(error);
}


// блок try выполняется в синхронном режиме, то есть, например, если в него поместить вот такой асинхронный вызов функции:

/* let res = 0;
try {
  setTimeout(function () {
    res = 5 / d;
    console.log(res);
  }, 0);
} catch (error) {
  console.log(error);
} */

/* То ошибка обработана не будет, т.к. анонимная функция внутри setTimeout выполняется уже после выполнения блока try. 
То есть, блок try сначала полностью выполнится, а затем, будет запущена анонимная функция. */

let res1 = 0;
setTimeout(function () {
  try {
    res = 5 / d;
    console.log(res1);
  } catch (error) {
    console.log(error);
  }
}, 0);


/* Свойства объекта ошибки
В языке JavaScript объект ошибки блока c
 */

let res2 = 0;
try {
         d = 2;
         res = 5/d;
         console.log(res2);
}
catch(error) {
         console.log(error.name);
         console.log(error.message);
         console.log(error.stack);
}

// Блок finally
// https://proproprogs.ru/htm/javascript_oop/files/bloki-trycatchfinally-operator-throw-probros-isklyucheniy.files/image001.png