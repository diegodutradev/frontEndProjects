let totalDeGente = []

class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
        totalDeGente += this
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}

const diego = new ClientePoupanca("Diego", "diegodutradev@gmail.com", '07451262197', 100, 200)
const dm = new ClientePoupanca("DM", "diegodutradev@gmail.com", '07451262197', 100, 200)
diego.depositar(50)
diego.depositarPoupanca(150)
console.log(diego)
