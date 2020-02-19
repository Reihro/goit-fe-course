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
let debounced = _.debounce(searchCountry, 500);
refs.country.addEventListener("input", debounced);

// INSTRUMENTS
function buildList(items) {
  return resultUl(items);
}
function buildCard(items) {
  return resultCard(items);
}
function insertList(markup) {
  refs.countriesResult.insertAdjacentHTML("beforeend", markup);
}
function insertCard(markup) {
  refs.countryResult.insertAdjacentHTML("beforeend", markup);
}
function clearCard() {
  refs.countryResult.innerHTML = "";
}
function clearList() {
  refs.countriesResult.innerHTML = "";
}

//SEARCH
function searchCountry(e) {
  clearCard();
  clearList();
  e.preventDefault();
  let searchQuery = e.target.value;
  if (searchQuery != "") {
    service.fetchCountry(searchQuery).then(data => {
      if (data.length === 1) {
        const markup = buildCard(data);
        insertCard(markup);
      }
      if (10 >= data.length >= 1) {
        const markup = buildList(data);
        insertList(markup);
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