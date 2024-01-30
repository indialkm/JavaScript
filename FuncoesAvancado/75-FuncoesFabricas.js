//Funções Fabricas são aquelas que retornam objetos
//uma função dentro de um objewto é um método
//this: vai se referir aquilo que foi chamado, ele quer dizer esto esta chamando algo, quem esta chamando

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto){
            return `${nome} está ${assunto}.`;
        },
        altura : altura,
        peso : peso,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); //com get ele finge que é um atributo, mas na verdade não é. Getter
        }
    };
};

const p1 = criaPessoa('Maria', 'Alkimim');
console.log(p1.fala('Falando JS'));

const p2 = criaPessoa('Ingrid', 'Alkimim', 1.67, 83 );
console.log(p2.imc);
p2.nomeCompleto = "Ingrid Santos Alkimim Rocha"

console.log(p2.nomeCompleto);
 
