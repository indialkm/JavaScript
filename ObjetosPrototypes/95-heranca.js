function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    this.cor = cor;
    Produto.call(this, nome, preco); // o objeto usado para linkar, this porque é o próprio objeto, em seguida os argumentos (parametros) que são necessários para o Produto
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco * (this.preco * (percentual/100));
};

function Caneca(nome, preco, material, estoque){
    this.material = material;
    this.estoque = estoque;
    Produto.call(this,nome, preco);
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Object.defineProperty(this, 'estoque',{
    enumerable: true,
    configurable: false,
    get: function(){
        return estoque;
    },
    set: function(valor){
        if(typeof valor !== 'number') return;
        estoque = valor;
    }
});


const generico = new Produto('Prod.Generico', 8.90);

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(100);
const caneca = new Caneca('Caneca Gatinho', 5.89, 'Porcelana', 70);


console.log(camiseta);
console.log(caneca);
console.log(generico);