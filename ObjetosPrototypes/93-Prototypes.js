function Pessoa(nome, sobrenome, idade){

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nomeCompleto = () => console.log(this.nome + ' ' + this.sobrenome);
    
};

const pessoa1 = new Pessoa('Ingrid', 'Alkimim', '25');
const pessoa2 = new Pessoa('Nero', 'Noru Totó', '2');

 Pessoa.prototype.estouAqui = "HaHaHA";
 Pessoa.prototype.nomeCompleto = function(){
    return this.nomeCompleto = () => console.log(this.nome + ' ' + this.sobrenome);
 }
console.log(pessoa1);
console.log(pessoa2);

pessoa1.nomeCompleto();