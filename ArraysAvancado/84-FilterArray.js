const numeros = [5, 5, 80, 1, 2, 3, 5, 8, 7, 22, 25, 22, 27];
/*let numerosMaioresDez = [];

for(let elemento of numeros){
    if(elemento > 10){
        numerosMaioresDez.push(elemento);
    }
}*/

//console.log(numerosMaioresDez);

function callbackFilter(valor, indice, array) {
    /*if (valor > 10) {
        return true;
    } else {
        return false;
    }*/
    return valor > 10;
}

//valor = todos os valores que serão iterados
// indice = os indices da array
//array = o array completo
//é necessário retornar um bollean, true = quando vai pro novo array; false = não quer no novo array


//A função filter irá filtrar os valores, porem nção edita então ela cria um novo array com os elementos filtrados
let numerosFiltrados = numeros.filter(callbackFilter); // filter vai receber uma função de callback que vai iterar sobre todos os elementos do array
console.log(numerosFiltrados)

numerosFiltrados = numeros.filter(valor => valor > 10); // Só que é mais normal as pessaos usarem funções anonimas para callback de filter
console.log(numerosFiltrados)