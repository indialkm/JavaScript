//Declarar função (Function hoisting) hosting - A engine no JS vai elevar a função para o topo do JS mesmo que ela tenha sido declarada no final
falarOi();
function falarOi(){
    console.log("Ola");
}

//Funções são objetos de primeira classe, pois podem ser tratada como dados, nós podemos passar como paramentro e atribuir a uma variavel
//function expression = é o conceito sobre poder criar uma variavel e atribuir o valor de uma função apra essa variavel

const souUmDado = function(){
    console.log('Sou um dado');
};


function executarFuncao(funcao){
    console.log("Vou executar sua função abaixo");
    funcao();
}
executarFuncao(souUmDado);

//Arrow function = seria uma função expresssion bem mais curta
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
};
funcaoArrow();

//funcação anonima é aquela quea gente usa para executar uma outra funcao
setInterval(function(){
    //alguma coisa
}, 1000);