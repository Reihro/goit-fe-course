"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

function calculateTotalPrice(allProdcuts, productName) {
  let obj = allProdcuts.filter(function(products) {
    return products.name === productName;
  });

  let totalPrice = obj[0].price * obj[0].quantity;

  return 'Стоимость всех продуктов "' + productName + '" = ' + totalPrice;
}

console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800