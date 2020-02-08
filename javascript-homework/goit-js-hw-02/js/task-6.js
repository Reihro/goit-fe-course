"use strict";

let numbers = [];
let input;

const user_number = prompt("Введите число", "");

if (user_number === null) {
  alert("Ну, ок");
}

input = Number(parseInt(user_number));

do {
  input = prompt("Введите число снова, либо отмените операцию", "");
  numbers.push(Number(input));
} while (input !== null);
console.log(numbers);

function arraySum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

let total;
total = arraySum(numbers);

alert("Общая сумма чисел равна " + total);
