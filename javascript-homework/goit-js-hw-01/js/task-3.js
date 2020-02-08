'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const ENTER_PASSWORD = 'Введите пароль'
const CANCELED_BY_USER = 'Отменено пользователем!'
const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!'


const userPassword = prompt(ENTER_PASSWORD, '')

switch(userPassword) {
case ADMIN_PASSWORD: message = ACCESS_IS_ALLOWED; break;
case null: message = CANCELED_BY_USER;
default: message = ACCESS_DENIED; break;
}

alert(message)