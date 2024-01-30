// const objA = {
//     chaveA: 'A'
//     //__proto__ : Object.prototype
// };

// const objB = {
//     chaveB: 'B'
//     //__proto__ : Object.prototype
// };

// Object.setPrototypeOf(objB, objA); // o primeiro recebe o que vai ser condigurado o segundo recebe de onde vai ser a configuração, assim agora o proto de A também é o proto de B

// console.log(objB.chaveA);

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(valor){
    this.preco = this.preco - (this.preco * (valor/ 100));
};

Produto.prototype.aumento = function(valor){
    this.preco = this.preco + (this.preco * (valor/ 100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(10);
console.log(p1.preco);

//objecto literal
const p2 = {
    nome : "Caneca",
    preco: 15
};

console.log(p2)

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10)

console.log(p2)

const p3 = Object.create(Produto.prototype); // aqui é criado um objeto e já setando ele pra ser da "classe" do Produto
console.log(p3)
