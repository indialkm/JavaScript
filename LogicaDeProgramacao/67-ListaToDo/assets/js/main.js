const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function(){
  if(!inputTarefa.value) return;

  criarTarefa(inputTarefa.value);
})

function criarLi(){
  const li = document.createElement('li');
  return li;
}

function criarTarefa(textoInput){
  const li = criarLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}
// pegar tecla enter

inputTarefa.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    criarTarefa(inputTarefa.value)
  }
})

function limpaInput(){
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li){
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'Apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
  
}

document.addEventListener('click', function(e){
  const el = e.target;
  if(el.classList.contains('Apagar')){
    el.parentElement.remove();
    salvarTarefas()
  }
})

function salvarTarefas(){
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];
  for(let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
    
   
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
   localStorage.setItem('tarefas', tarefasJSON);
}
function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);
 for (let tarefa of listaDeTarefas){
  criarTarefa(tarefa);
 }
}

adicionaTarefasSalvas();
