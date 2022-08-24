/*const notas = [10 , 8 , 5.5 , 4.5 , 3 , 9.5];
const media = notas.reduce((a,b) => a + b, 0)/notas.length

console.log(media)*/

const salaDePython = [10 , 8, 8.5];
const salaDeJavaScript = [9, 8, 7.5, 4.5];
const salaDePHP = [7, 8.5, 9.5, 10];

function showGrades (nomeDaTurma){
    const media = nomeDaTurma.reduce((acum, atual) => acum + atual, 0);
    return media/nomeDaTurma.length;
}

console.log(showGrades(salaDePHP));
console.log(showGrades(salaDeJavaScript));
console.log(showGrades(salaDePython));