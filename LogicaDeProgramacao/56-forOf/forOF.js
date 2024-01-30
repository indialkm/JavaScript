/// for of : diferente de for in que pega o indice, for of vai itinerar sobre o valor

/*
for clássico = Geralmente com iteráveis (array ou strings)
for in - Retorna o índice ou chavce (String, array ou objetos)
for of - Retorna o valor em si (itineraiveis, arrays ou strings)
*/
const nome = ['Ingrid', 'Alkimim', 'Rocha'];
const pessoa = {
    nome: 'Ingrid',
    sobrenome: 'Alkimim'
}

for (let valor of nome) {
    console.log(valor);
}

