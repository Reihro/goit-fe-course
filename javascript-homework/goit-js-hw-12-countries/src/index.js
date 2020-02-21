"use strict";
// // SOUP
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

const debounce = require("../node_modules/lodash");
refs.country.addEventListener("input", debounce(searchCountry, 500));

// INSTRUMENTS
function buildList(item) {
  return resultUl(item);
}
function buildCard(item) {
  return resultCard(item);
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
        insertSearchList(markup);
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

function insertSearchList(markup) {
  refs.countriesResult.insertAdjacentHTML("beforeend", markup);
}