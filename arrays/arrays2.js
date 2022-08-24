const alunos = ['Diego', 'Panda', 'Henrique', 'Davi'];
const notas = [10, 9.5, 9, 8]
const mediasEAlunos = [alunos, notas]

const showGrades = (nomeAluno) => {
    if (mediasEAlunos[0].includes(nomeAluno)){
        let indice = mediasEAlunos[0].indexOf(nomeAluno)
        return mediasEAlunos[0][indice] + ', sua nota é: ' + mediasEAlunos[1][indice];
    }
    else{
        return `O aluno ${nomeAluno} ainda não está cadastrado.`
    }
}

console.log(showGrades('Dm'))