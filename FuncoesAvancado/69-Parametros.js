// É possível mandar um valor e captura-lo lá embaixo
//A linguagem não liga para caso você enviei parametros sem pedir, igual no C, e só funciona para function pq dentro functions ele tem lá dentro já um argument


/*function funcao(){
    console.log(arguments[2]);
};
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9);*/

let total = 0
function Somar(){
    for(let numeros of arguments){
        total+=numeros;
        console.log(total);
    }
};
Somar( 1, 2, 3, 4, 5, 6, 7, 8, 9);