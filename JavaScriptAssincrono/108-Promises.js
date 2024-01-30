function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// function esperaAi(msg, tempo, cb){
//     setTimeout(()=>{
//         console.log(msg);
//         if(cb) cb();
//     },tempo);

// }

// esperaAi('Frase 01', aleatorio(1,3), function(){

//     esperaAi('Frase 02', aleatorio(1,3), function(){

//         esperaAi('Frase 03', aleatorio(1,3)); 

//     });

// });


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') reject ('BAD VALUE')

        setTimeout(() => {
            resolve(msg);
        }
            , tempo);
    })
}

esperaAi('Conexão com o BD', aleatorio(1, 3))
    
.then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base', aleatorio(1, 3));
    })
    .then(
        resposta => {
            console.log(resposta);
            return esperaAi(12121, aleatorio(1,3));
    })
    .then(
        resposta =>{
            console.log(resposta)
        }
    )
    .then(
       () => {
            console.log("Exibe dados na tela");
        }
    )
    .catch( e => {
        console.log('ERRO:', e);
    }
    );

    console.log("Vai ser exibido primeiro");