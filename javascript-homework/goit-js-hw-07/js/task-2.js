"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
let list = document.getElementById("ingredients");
for (let item of ingredients) {
  let li = document.createElement("li");
  li.innerHTML = item;
  list.appendChild(li);
}
