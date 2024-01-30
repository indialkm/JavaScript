const a1 = [1,2,3];
const a2 = [4,5,6];
let a3 = a1.concat(a2);
console.log(a3);

//se você colocar outros números tambem adiciona. E cria duas arrays

a3 = a1.concat(a2,[7,8,9]);
console.log(a3);

a3 = a1.concat(a2,[7,8,9], 'Luiz');
console.log(a3);

//... rest operation funciona como resto e desestrutução 