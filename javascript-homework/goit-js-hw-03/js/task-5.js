"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

function getAllPropValues(arr, prop) {
  let allPropValues = [];
  for (let i = 0; i < arr.length; ++i)
    if (arr[i][prop] === undefined) {
      console.log("Нет данных");
    } else allPropValues.push(arr[i][prop]);
  return allPropValues;
}

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []