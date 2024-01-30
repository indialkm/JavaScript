const pessoa = { //objeto
    nome: 'Ingrid', //propriedade
    idade: 25,
    endereco:{
        rua:'Estrada Guarulhos', 
        numero: 3212
    }
}; //cria objeto

/*Atribuição normal*/
//const nome = pessoa.nome;

/*Atribuição via desestruturação*/
const { nome: n, sobrenome = 'Precisa ser definido', idade } = pessoa; //aqui além de atribuir o valor da propriedade ele também cria uma variavel com o nome da propriedade
console.log(n, sobrenome);

