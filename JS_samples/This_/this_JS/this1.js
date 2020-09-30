// https://www.youtube.com/watch?v=xY-mwUzDjsk&list=WL&index=85&t=0s
 
 
 console.log('Просто в программе');  //window 
 console.log(this);  //window 
 // при вызове без контента this указывает на окно браузера
//  console.log(this.innerWidth);  //ширина окна


 // Поведение this внутри функции

function foo() {
  console.log('Внутри функции');
  console.log(this);
}

foo();
// Window

 function abc() {
  console.log('Внутри функции вызываемой по событию');
  console.log(this);
  this.style.background = 'red';
 }


// document.querySelector('p').onclick = abc;
// <p>..<p> this - объект на котором произошло событие ( в данном случае - click)

let p = document.querySelectorAll('p#slct1');
p.forEach(function(element){
  element.onclick = abc;
});


// document.querySelector('#slct2').addEventListener('click', abc); 

let p2 = document.querySelectorAll('p#slct2');
p2.forEach(function(element){
  element.addEventListener('click', abc);
});

