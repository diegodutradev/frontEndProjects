const cliente = {
    nome: "Diego",
    idade: 22,
    sexo: "M",
    estado: "DF",
    fones: ["6198336-2270", "6199451-9723"],
    dependentes: {
        nome: "Maria Luna",
        dataNascimento: "17/03/2022",
        sexo: "F",
        estado: "DF"
}
};

console.log(cliente)
cliente.dependentes.nome="Maria Luna Lemos Dutra"
console.log(cliente)