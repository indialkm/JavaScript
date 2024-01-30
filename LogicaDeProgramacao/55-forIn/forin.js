//for in : método apra itinerear dentro de um array sem precisar montasr todo aquele modelo de for
const frutas = ['Banana', 'Amora', 'Cereja'];

for(let index in frutas){
    console.log(index);
}
for(let index in frutas){
    console.log(frutas[index]);
}

//Objetos

const pessoa = {
    nome:'Ingrid',
    sobrenome: 'Alkimim',
    idade: 25
};
// é possivel pegar essa propriedade tamvbem com pessoa[chave] pois isso seria mais dinamico;

for (let index in pessoa){
    console.log(index)
}

