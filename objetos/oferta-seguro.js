const cliente = {
    nome: "Diego",
    idade: 22,
    sexo: "M",
    estado: "DF",
    fones: ["6198336-2270", "6199451-9723"],
    dependentes: 
    [
        {
            nome: "Maria Luna",
            dataNascimento: "17/03/2022",
            sexo: "F",
            estado: "DF"
        },
        {
            nome: 'Beatriz Lemos Campos',
            dataNascimento: '28/02/1998',
            sexo: 'F',
            estado: 'DF'
        }
    ],
    saldo: 1000,
    depositar: function(deposito){
        cliente.saldo += deposito
    }
};

function oferecerSeguro (obj){
    const propsClientes = Object.keys(obj)
    
    if (propsClientes.includes("dependentes")){
        console.log(`Você recebeu uma  ótima oferta de seguro de vida senhor ${obj.nome}.`)
    }
}

oferecerSeguro(cliente)