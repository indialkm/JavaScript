function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') reject ('BAD VALUE')
        setTimeout(() => {
            resolve(msg);
        }
            , tempo);
    })
}

//Promise.all -> Aceita um array de promisses e retorna uma nova primisse resolvida com os valores de todas as promisses resolvidas com sucesso.

const promises = [
    //'Primeiro Valor',
    esperaAi("Promise 01", 3),
    esperaAi("Promise 02", 0,5),
    esperaAi("Promise 03", 1),
    //'Outro Valor'
];

Promise.race(promises)
.then(function(valor){
    console.log(valor)
})

.catch(
    function(erro){
        console.log(erro)
    }
)