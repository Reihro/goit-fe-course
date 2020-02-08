"use strict";
function formatString(string) {
  let stringArray = string.split("");
  const STRING_LENGTH_LIMIT = 40;
  if (stringArray.length > STRING_LENGTH_LIMIT) {
    while (stringArray.length > STRING_LENGTH_LIMIT) {
      stringArray.pop();
    }
    return stringArray.join(``) + `...`;
  } else {
    return string;
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка