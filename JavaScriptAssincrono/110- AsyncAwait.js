function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg != 'string') reject ('BAD VALUE')
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }
            , tempo);
    })
}

async function executa(){
try{
    const fase01 = await esperaAi('Fase 01', rand(0,3));
    console.log(fase01);

    const fase02 = await esperaAi('Fase 02', rand(0,3));
    console.log(fase02);

    const fase03 = await esperaAi('Fase 03', rand(0,3));
    console.log(fase03);
}catch(e){
    console.log(e);
}} 

executa();
