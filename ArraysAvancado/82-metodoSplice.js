const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(0, 2);
// nomes.splice(0, 0);

console.log(nomes);
const removido = nomes.splice(4,1);
console.log(nomes);
console.log(removido);
nomes.splice(4,0, 'Marcos');
console.log(nomes);