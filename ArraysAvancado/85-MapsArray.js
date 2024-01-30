// é igual a filter, mas no caso da map ela modifica os elementos da array. Map sempre vai ter o tamanho do array original
const numeros = [5, 5, 80, 1, 2, 3, 5, 8, 7, 22, 25, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);