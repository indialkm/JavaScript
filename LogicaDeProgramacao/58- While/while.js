//O While deve ser usado para um looping que a gente não sabe qual  a quantidade final
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1,50);

while(rand !== 10){
    rand = random(1,50);
    console.log(rand);
}