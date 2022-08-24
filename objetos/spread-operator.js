const clientes = [{
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
        ]
    },
    {
   nome: "Lidia Sara",
    idade: 29,
    sexo: "F",
    estado: "DF",
    fones: ["6198336-2270", "6199451-9723"]
}
    ,

{
    nome: "Roberto",
    idade: 34,
    sexo: "M",
    estado: "DF",
    fones: ["619767-0098", "6199254-6643"],
    dependentes:
        [
            {
                nome: "Johan",
                dataNascimento: "12/06/2002",
                sexo: "M",
                estado: "DF"
            },
            {
                nome: 'Ana Liebert',
                dataNascimento: '12/06/2002',
                sexo: 'F',
                estado: 'DF'
            }
        ],

}
        ]

const listaDeDependentes = [...clientes[0].dependentes,...clientes[2].dependentes]

console.table(listaDeDependentes)

const dependentesAtualizados = [...listaDeDependentes, {
    nome: "Stainer",
    dataNascimento: "15/04/1980",
    sexo: "M",
    estado: "DF"
}]

console.table(dependentesAtualizados)