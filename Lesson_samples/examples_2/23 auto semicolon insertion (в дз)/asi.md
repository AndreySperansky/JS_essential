> Точка с запятой - оператор, который используется для отделения одной
> инструкции от другой.

> В Javascript есть механизм автоматической вставки точки с запятой - ASI (Automatic Semicolon Insertion),
> т.е. парсер сам может вставить точку с запятой в места, где ее нет.

> Автоматическая вставка точки с запятой может произойти только в месте переноса на следующую строку,
> т.е. где разрыв строки. Сами по себе точки с запятой не вставляются в середине строки.

> Разрыв строки (когда вы нажимаете enter) воспринимается парсером Javascript как точка с запятой,
> если он не может воспринять вторую строку как продолжение первой. Т.е. если следующий непробельный
> символ на второй строке не может быть интерпретирован как продолжение текущей инструкции, тогда точка с запятой
> вставляется автоматически. Это можно выразить и иначе, парсер Javascript будет воспринимать следующие
> строки как продолжение начатой инструкции, до тех пор пока это возможно.

# Точку с запятой можно не ставить, т.е. когда она вставляется автоматически:

* если инструкции находятся на разных строках, и инструкция на второй строке не может быть
  воспринята как продолжение инструкции на первой строке
```javascript
let a = 4                   //здесь точку с запятой можно не ставить(кто-то ставит, кто-то нет)
let b = "hello"
```

```javascript
do {

} while (e > 10)            //здесь точку с запятой можно не ставить
```

* в конце программы

* если следующим не пробельным символом является  закрывающая фигурная скобка `}`

Например:
```javascript
if (a > b) {
    alert('hello world') //здесь точку с запятой можно не ставить
}
```

* если после инструкции далее идут комментарии, а после них, инструкция не может быть интерпретирована
  как продолжение предыдущей инструкции

```javascript
let num1 = 5 //первое число
let num2 = 7 /* второе число */
let num3 = 10
```
После 5 и 7 точки с запятой можно не ставить.

# Точку не надо ставить там, где она не требуется:

Здесь после оператора "блока" _{   }_ точка с запятой не требуется

```javascript
if (str1 == str2) {
    alert('строки равны')
}                           //здесь точку с запятой не ставят
```

```javascript
for (let i = 0; i < 10; i++) {
    alert(i)
}                           //здесь точку с запятой не ставят
```

```javascript
function sayHello() {
    alert('hello world')
}                           //здесь точку с запятой не ставят
```

# Точку с запятой нужно ставить обязательно, т.е. когда она НЕ вставляется автоматически:

* Если инструкции находятся на одной строке, причем здесь нужна только точка с запятой после `let a = 4;`

```javascript
let a = 4; let b = "hello";
```

* В бесконечном цикле for

```javascript
for (;;) {

}
```

# Когда разрыв строки не вставляет точку с запятой автоматически:

* Здесь в некоторых местах не ставится точка с запятой, т.к. код на следующей строке может быть
  интерпретирован как продолжение инструкции на предыдущей строке.

```javascript
let name      //здесь точ. с зап. ставится, т.к. след. строку нельзя воспринять как продолж. текущ. инструкц.
name          //здесь точка с зап. не ставится, т.к. = можно интерпретировать как продолжение текущ. инструкц.
=             //то же самое, строку 'alex' может использовать =
'alex'        //здесь ставится, т.к. вызов console.log нельзя воспринять как продолж. текущ. инструкции
console.log(name)
```

```javascript
let users = [ //здесь точка с запятой не ставится, т.к. следующие элементы могут и воспринимаются
    'alex',   //как элементы массива, т.е. последующие инструкции воспринимаются как часть
    'ivan',   //предыдущей инструкции
    'john',
]
```

```javascript
let user = {         //здесь точка с запятой не вставляется, т.к. последующие инструкции
    name: 'alex',    //воспринимаются как свойства объекта
    age: 20,
}
```

# Когда разрыв строки вставляет точку с запятой, там где мы не ожидали (это ИСКЛЮЧЕНИЯ из правил):

* Это касается инструкций `break`, `continue`, `return` и `yield`, после них на той же строке может быть какое-то 
  значение или оператор, а может и не быть, т.е. если на той же строке дальше ничего нет, то разрыв строки будет означать
  вставку точки с запятой.

```javascript
function addSeven(num) {
    if (num) {
        return           //здесь return вернет undefined, т.к. после return'a может ничего не стоять и
        num + 7          //туда автоматически вставится точка с запятой
    }
}

function addSeven(num) {
    if (num) {
        return num + 7     //здесь return сработает как надо, вернет сумму
    }
}

function getUser() {
    let name = prompt("введите ваше имя");
    let age = prompt("введите ваш возраст");
    return {               //здесь return тоже сработает как надо, вернет объект
        username: name,
        userage: age,
    }
}
```

* Для постфиксных операторов ++ и --. Если перед ними будет разрыв строки, то там вставится точка с запятой.

```javascript
let a = 4;
let b = 7;
a
++
b
console.log(a); //4
console.log(b); //8
```

> Если строго читать спецификацию языка, то она говорит, что механизм ASI подразумевает
> собой замену рутинной корректировки ошибок парсинга. Т.е. если в каких-то местах требовались
> точки с запятой, но программист их не поставил, то они будут вставлены автоматически.
> Т.е. движок будет исправлять изначально написанный не правильно код.