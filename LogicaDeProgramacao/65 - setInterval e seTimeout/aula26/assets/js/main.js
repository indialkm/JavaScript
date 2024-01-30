const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const zerar = document.querySelector(".zerar");
const pausar = document.querySelector(".pausar");
let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoradosSegundos(segundos);
  }, 1000);
}


function criaHoradosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  })
}

document.addEventListener('click', function (e) {
  const el = e.target; // ele coloca o click no documento
  if (el.classList.contains('zerar')) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
  }
  else if (el.classList.contains('pausar')) {
    relogio.classList.add('pausado');
    clearInterval(timer);
  } else if (el.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }
});
