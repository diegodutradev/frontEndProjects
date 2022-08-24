class Cliente {
    constructor(nome, cpf, email, saldo){
        this.nome += nome
        this.cpf += cpf
        this.email += email
        this.saldo += saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
       console.log(this.saldo) 
    }
}

const cliente1 = new Cliente("Diego", '07451262197', 'diegodutradev@gmail.com', 100)
console.log(cliente1)