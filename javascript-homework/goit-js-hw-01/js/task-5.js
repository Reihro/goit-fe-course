'use strict';

const ENTER_COUNTRY = "Введите страну доставки";
const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В вашей стране доставка не доступна";

const CHINA = "Китай";
const CHILI = "Чили";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";


let message = prompt(ENTER_COUNTRY);
let priсe = 0;
let countryName;

if (message === null) {
  message = CANCELED_BY_USER;
} else if (message === "") {
  message = ENTER_COUNTRY;
} else {
  countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

  switch (countryName) {
    case CHINA:
      priсe = 100;
      break;

    case CHILI:
      priсe = 250;
      break;

    case AUSTRALIA:
      priсe = 170;
      break;

    case INDIA:
      priсe = 80;
      break;
    case JAMAICA:
      priсe = 120;
      break;
    default:
      message = NO_DELIVERY;
  }
}

if (priсe > 0) {
  let DELIVERY_COST = `Доставка в ${countryName} будет стоить ${priсe} кредитов`;
  message = DELIVERY_COST;
}
alert(message);