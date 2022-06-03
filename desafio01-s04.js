/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- A soma dos dois números;
- A subtração dos dois números;
- A multiplicação dos dois números;
- A divisão dos dois números;
- O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- Verifique se a soma dos dois números é par (ou ímpar);
- Verifique se os dois números inseridos são iguais(ou diferentes) */

let numberOne = Number(prompt("Digite o primeiro número!"));
let numberTwo = Number(prompt("Digite o segundo número!"));

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = numberOne / numberTwo;
let rest = numberOne % numberTwo;

alert(`a soma é ${sum}`);
alert(`a subtração é ${sub}`);
alert(`a multiplicação é ${mult}`);
alert(`a divisão é ${div}`);

if(rest == 0) {
  alert(`a soma dos números é par`)
} else {
  alert(`a soma dos números é ímpar`)
}

if(numberOne == numberTwo) {
  alert(`os dois números são iguais`)
} else {
  alert(`os dois números são diferentes`)
}

