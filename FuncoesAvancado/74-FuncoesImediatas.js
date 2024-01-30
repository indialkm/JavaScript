//Não queremos nada no escopo global, pra isso criamos uma função e colocamos dentro dele e depois chamar a função imediata. Uma função imediata não precisa ser chamada, ela protege o codigo
(function(){
    const nome = 'Luiz';
    console.log(nome);
})();



