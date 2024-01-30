//Função construtura -> objetos
//Função fábrica -> objetos
//função construtura -> Pessoa New


function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sorenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': eu sou método');
    }

;} // o corpo é o objeto criado


const p1 = new Pessoa('Ingrid', 'Alkimim');
const p2 = new Pessoa('Nero', 'Noru');
p2.metodo();