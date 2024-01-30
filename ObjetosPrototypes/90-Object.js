// defineProperty - defineProperties. 
/*Necessidade de travar uma propriedade um objeto */

function produto(nome, preco, estoque){
    this.nome = nome,
    this.preco = preco,
    this.estoque = estoque,

    Object.defineProperty(this, 'estoque'), {
        enumera
    }
}
const p1 = new produto('Camiseta', 20, 3);
console.log(p1);

