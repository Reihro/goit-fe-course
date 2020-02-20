"use strict";
// SOUP
import "./styles.css";
import service from "./country.js";
import resultUl from "./templates/result-ul.hbs";
import resultCard from "./templates/result-card.hbs";
import PNotify from "pnotify/dist/es/PNotify";
const refs = {
  country: document.querySelector(".service"),
  countriesResult: document.querySelector("country-list"),
  item: document.querySelectorAll("li"),
  countryResult: document.querySelector(".country-item")
};

// надо не только подключить библиотеку к проекту
// "lodash.debounce": "^4.0.8",

// но и сделать import
import { debounce } from "lodash";
debounce = require("lodash.debounce");
// И тогда
refs.country.addEventListener("input", debounce(searchCountry, 500));

// INSTRUMENTS
function buildList(data) {
  return resultUl(data);
}
function buildCard(data) {
  return resultCard(data);
}

//SEARCH
function searchCountry(e) {
  refs.countryResult.innerHTML = "";
  refs.countriesResult.innerHTML = "";
  e.preventDefault();
  let searchQuery = e.target.value;
  if (searchQuery != "") {
    service.fetchCountry(searchQuery).then(data => {
      if (data.length === 1) {
        const markup = buildCard(data);
        refs.countryResult.insertAdjacentHTML("beforeend", markup);
      }
      if (10 >= data.length >= 1) {
        const markup = buildList(data);
        refs.countriesResult.insertAdjacentHTML("beforeend", markup);
      }
      if (data.length > 10) {
        PNotify.error({
          text: "Too many matches found. Please, enter a more specfic query!"
        });
      }
    });
  } else {
    let data = [];
    return data;
  }
}