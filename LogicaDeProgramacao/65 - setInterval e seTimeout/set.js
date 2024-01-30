function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false});
}

function funcaoDoIntervalo(){
    console.log(mostrarHora());
}

//setInterval(funcaoDoIntervalo, 1000);

//funções anonimas
const time = setInterval(function(){
    console.log(mostrarHora());
}, 1000)

//para parar o intervalo pode usar o clearInterval

setInterval(function(){
    clearInterval(time);
}, 5000)
