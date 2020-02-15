"use strict";
// СУП-НАБОР
import menu from "./menu.json";
import "./styles.css";
import menuTemplate from "./menu-template.hbs";
const refs = {
  body: document.querySelector("body"),
  themeSwitcher: document.querySelector(".js-switch-input")
};

// ТЕМА
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};
const userTheme = localStorage.getItem("userTheme");
refs.body.classList.add(userTheme);
// Выбор темы
refs.themeSwitcher.addEventListener("change", event => {
  if (event.target.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem("userTheme", Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem("userTheme", Theme.LIGHT);
  }
});
// Ползунок
if (userTheme === Theme.DARK) {
  refs.themeSwitcher.checked = true;
}

// МЕНЮ
const markup = menuTemplate(menu);
document.querySelector(".js-menu").insertAdjacentHTML("beforeend", markup);