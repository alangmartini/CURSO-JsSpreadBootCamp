class ContaBancaria {
    constructor(agencia, numero, saldo, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = saldo;
        this.tipo = tipo;
        
    }

    get mySaldo() {
        return this.saldo;
    }

    depositar(toCredit){
        this.saldo += toCredit;
    }
    sacar(toDebit){
        this.saldo -= toDebit;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, tipo) {
        super(agencia, numero, saldo, tipo);
        this.hasCard = true;
        this.fatura = 0
        this.tipo = 'ContaCorrente'
    }

    get myFatura(){
        return this.fatura
    }

    gastar(toCredit){
        this.fatura += toCredit
    }

    pagarFatura(toDebit){
        this.fatura -= toDebit
    }
}

class ContaUniversitaria extends ContaCorrente {
    constructor(agencia, numero, saldo, hasCard, fatura){
        super(agencia, numero, saldo, hasCard, fatura);
    }

    sacar(toDebit) {
        if(toDebit > 500){
            throw console.error('Apenas valores abaixos de 500');
        }
        this.saldo -= toDebit;
    }
}

let myAccount = new ContaBancaria(1, 1, 10, 'ContaCorrente');

let myConta = new ContaCorrente(2, 2, 20)

let myUniConta = new ContaUniversitaria(3, 3, 5)

myUniConta.sacar(499);
console.log(myUniConta)

/*
myConta.gastar(100);
myConta.sacar(300)
console.log(myConta);
console.log(myConta.fatura)
console.log(myConta.myFatura)
*/


/*
console.log(myAccount)

myAccount.newTipo = 'ContaPoupança'

console.log(myAccount.tipo)

myAccount.sacar(10)

console.log(myAccount.saldo)

myAccount.depositar(100)

console.log(myAccount.saldo)
*/