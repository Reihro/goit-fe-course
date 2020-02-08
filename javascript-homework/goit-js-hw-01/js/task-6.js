'use strict';

let input;
let total = 0;

const USER_NUMBER = prompt("Введите число", "");

if (USER_NUMBER === null) {
  alert("Ну, ок");
}

input = parseInt(USER_NUMBER);
total = parseInt(total);

do {
  input = Number(input);
  total = Number(total);
  total = total + input;
  input = prompt('Введите число снова, либо отмените операцию', "");
} while (input !== null);

alert('Общая сумма чисел равна ' + total);