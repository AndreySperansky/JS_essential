// Генерация собственных исключений – throw
/* 
Error – для общих ошибок;
SyntaxError – для синтаксических ошибок;
TypeError – для ошибок типов данных;
ReferenceError – ссылка на несуществующую переменную
и так далее. Чтобы воспользоваться этими классами, достаточно создать соответствующий объект: */

let err1 = new Error("Ошибка выполнения");
let err2 = new SyntaxError("Ошибка синтаксиса");
let err3 = new TypeError("Ошибка типов данных");

// и указать после оператора throw:

// throw err1;
// throw new SyntaxError("Ошибка синтаксиса");



function divide(a, b) {
  if (b == 0) {
    throw new Error("Деление на ноль");
  }

  return a / b;
}


let res = 0;
try {
  res = divide(1, 0);
  console.log(res);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// Error
// Деление на ноль
