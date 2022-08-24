const cliente = {
    nome: "Diego",
    idade: 22,
    sexo: "M",
    estado: "DF",
    fones: ["6198336-2270", "6199451-9723"],
    dependentes: [{
        nome: "Maria Luna",
        dataNascimento: "17/03/2022",
        sexo: "F",
        estado: "DF"
}]
};

cliente.dependentes.push({
    nome: "Beatriz Lemos Campos",
    dataNascimento: "28/02/1998",
    sexo: "F",
    estado: "DF"
});

console.log(cliente);

console.log(cliente.dependentes[0].nome);
console.log(cliente.dependentes[1].nome);