"use strict";

let value = document.getElementById("value");
let counter = 0;
const counterEdit = () => (value.textContent = counter);

const decrease = () => {
  counter -= 1;
  counterEdit();
};
document.querySelector("[data-action = decrement]").addEventListener("click", decrease);

const increase = () => {
  counter += 1;
  counterEdit();
};
document.querySelector("[data-action = increment]").addEventListener("click", increase);





