/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- Crie uma **função** que irá calcular a média das notas de cada aluno;
- Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [{
  nome: 'Harryson',
  notaUm: 7,
  notaDois: 8
},
{
  nome: 'Deborah',
  notaUm: 9,
  notaDois: 8
},
{
  nome: 'Maria',
  notaUm: 5,
  notaDois: 6
}];

function Media(student) {

  let media = (student.notaUm + student.notaDois) / 2;

  let message;

  if(media >= 7) {
    message = `${student.nome} Parabéns, você foi aprovado!`
  } else {
    message = `${student.nome}, você foi reprovado!`
  }

  return message;
}

for(student of students) {
  let mostrarMessage = Media(student);

  alert(mostrarMessage)
}