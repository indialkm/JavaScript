function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) 
    {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();

};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
    

};
Conta.prototype.verSaldo = function(valor){
    console.log(`Ag./c: ${this.agencia}/ ${this.conta} |` + 
    `Saldo: R$ ${this.saldo}`
    );
};

const conta01 = new Conta (11, 1234, 12.50);
console.log(conta01);

conta01.depositar(11);
conta01.depositar(11);
conta01.sacar(30);conta01.verSaldo(