const nomes  = ['Diego', 'Beatriz', 'Maria Luna'];
const notas = [4.5,9,10];

const reprovados = nomes.filter((_, indice) => notas[indice]<5);

console.log(reprovados)