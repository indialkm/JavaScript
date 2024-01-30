const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); // com essa função da para atribuir ao estilosBody tudo que foi computado de estilos dentro do body
const backgroundColorBody = estilosBody.backgroundColor;
console.log (backgroundColorBody); //rgb(17, 86, 102)


for (let p of ps){
console.log(p)
 p.style.backgroundColor = backgroundColorBody;
 p.style.color = 'white';
}
