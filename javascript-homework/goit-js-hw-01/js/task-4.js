'use strict';

let userCredits = 23580;
const pricePerDroid = 3000;

let amountSelection = prompt('Сколько дроидов Вы хотите купить?');
let totalPrice = pricePerDroid * amountSelection;
let userRest;

if (amountSelection === null) {
  alert('Отменено пользователем!');

} else if (totalPrice > userCredits) {
  alert('Недостаточно средств на счету!');

} else if (totalPrice <= userCredits) {
  userRest = userCredits - amountSelection * pricePerDroid;
  alert('\nВы купили ' + amountSelection + ' дроидов!\nНа Вашем счету осталось ' + userCash + ' кредитов');
}