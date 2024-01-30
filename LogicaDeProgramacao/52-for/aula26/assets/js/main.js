const elementos = [
  { tag: 'p', texto: 'Parágrafo' }, //0
  { tag: 'div', texto: 'É uma DIV' }, //1
  { tag: 'footer', texto: 'Criado by Ingrid Alkimim' },
  { tag: 'section', texto: 'É uma section' },
];

const container = document.querySelector('.container'); //querySelector vai selecionar apenas um elemento, caso seja uma classe ele vai  pegar a primeira usando esse nome
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);
