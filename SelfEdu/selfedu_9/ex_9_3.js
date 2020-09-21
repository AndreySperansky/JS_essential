// Проброс исключений

/* если мы хотим отслеживать лишь определенный их тип, например, Error, 
а остальные не трогать – пересылать дальше – блокам try более высокого уровня: 
Это и называется пробросом исключения.*/

function divide(a, b) {
  if (b == 0) {
    throw new Error("Деление на ноль");
  }

  return a / b;
}

let res = 0;
try {
  res = divide(1, 2);
  console.log(res);
} catch (error) {
  if (error.name == "Error") {
    console.log(error.name);
    console.log(error.message);
  } else {
    throw error;
  }
}