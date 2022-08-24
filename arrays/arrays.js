const alunos = ['Diego', 'Panda', 'Davi', 'Henrique'];
const notas = [9, 9.5, 8, 9.5];
const alunosEMedias = [alunos, notas];

const showGrades = function (nomeAluno) {
    if (alunosEMedias[0].includes(nomeAluno)){
        let indice = alunosEMedias[0].indexOf(nomeAluno);
        return alunosEMedias[0][indice] + ', sua nota é ' + alunosEMedias[1][indice];
    }
    else{
        return 'Este aluno não está cadastrado ainda.'
    }
}

console.log(showGrades('Henrique'))