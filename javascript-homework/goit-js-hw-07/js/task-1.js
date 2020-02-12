"use strict";
console.log("Task-1");
const categories = document.getElementById("categories");

const str = [...categories.children]
  .map(
    e => `  Категория: ${e.children[0].textContent};
  Количество элементов: ${e.children[1].children.length}.`
  )
  .join("\n");
console.log(str);