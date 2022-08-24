let totalDeGente = [];

function Cliente (nome, cpf, email, saldo) {
            this.nome = nome
            this.cpf = cpf
            this.email = email
            this.saldo = saldo
             this.depositar = function(valor){
              this.saldo += valor
            }

}

Cliente.prototype.clienteList = function(){
    this.push(totalDeGente)
}


   function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
   }

   const cliente = new Cliente("DM",'07451262197','diegodutradev@gmail.com',100)


console.log(totalDeGente)