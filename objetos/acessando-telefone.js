const cliente = {
    nome: "Diego",
    idade: 22,
    sexo: "M",
    estado: "DF",
    fones: ["6198336-2270", "6199451-9723"]
};

cliente.fones.forEach(fone => {console.log(fone);});

cliente.fones.pop();
console.log(cliente);


