
/* Определяем гоаницы в рамках которых может перемещаться мяч */
let TOP = topWall.getBoundingClientRect().height;
let BOTTOM = leftWall.getBoundingClientRect().height - bottomWall.getBoundingClientRect().height;
let RIGHT = topWall.getBoundingClientRect().width + 100;
let LEFT = leftWall.getBoundingClientRect().width;

document.addEventListener("keydown", moveBita);

let vx = 5, vy = 5;                   /* скорость перемещения мяча за один цикл */
let ballStyle = ball.getBoundingClientRect();
let BR = ballStyle.width/2;           /* радиус мяча */

/* начальные координаты мяча */
let posX = ballStyle.left + BR;
let posY = ballStyle.top + BR;

let bStile = bita.getBoundingClientRect();
let WBITA = bStile.width;       /* ширина биты */
let HBITA = bStile.height;      /* высота биты */
let posBitaY = bStile.top;      /* тукущая позиция биты */
let vBita = 10;               /* скорость перемещения биты за один цикл */

let idGo = setInterval(go, 1000/50);      /* цикличность 50 раз в секунду */

function go() {
  let stBita = bita.getBoundingClientRect();     /* текущие координаты для биты */
  /* вычисляем текущие координаты мяча */
  posX += vx;
  posY += vy;
  /* проверяем столкновение мяча со стенками */
  if(posX-BR < LEFT) {posX = LEFT + BR; vx = -vx;}
  if(posY-BR < TOP) {posY = TOP + BR; vy = -vy;}
  if(posY+BR > BOTTOM) {posY = BOTTOM - BR; vy = -vy;}

  /* проверка столкновения мяча с битой */
  if(posX+BR > RIGHT - 100 - WBITA ) {
    if(posY >= stBita.top && posY <= stBita.top + stBita.height) {
      posX = RIGHT-WBITA-BR-100;
      vx = -vx;
    }
  }

  ball.style.top = posY + "px";
  ball.style.left = posX + "px";

  if(posX + BR > RIGHT) {
    
    clearInterval(idGo);
    document.removeEventListener("keydown", moveBita);
    ball.style.display = 'none';
    /* alert("ВЫ ПРОИГРАЛИ!!!"); */
    modal.classList.remove('hidden');
  }
}

/* управление движением биты */
function moveBita(event) {
  if(event.keyCode == 38) posBitaY -= vBita;  /* стрелка вверх */
  if(event.keyCode == 40) posBitaY += vBita;  /* стрелка вниз */
  if(posBitaY < TOP) posBitaY = TOP;
  if(posBitaY + HBITA > BOTTOM) posBitaY = BOTTOM - HBITA;
  bita.style.top = posBitaY + "px";
}


/* консольное окно */

const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');


closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
});






