"use strict";

import "./styles.css";
import api from "./url.js";
import moreImages from "./templates/template-img.hbs";

const refs = {
  search: document.querySelector(".search-form"),
  gallery: document.querySelector(".gallery"),
  load: document.querySelector('button[data-action="load more"]')
};

refs.search.addEventListener("submit", searchHandler);
refs.load.addEventListener("click", loadHandler);

function loadHandler() {
  api.fetchImages().then(noResult);
}
function clearSearch() {
  refs.gallery.innerHTML = "";
}
function windowScroll(yCoordinateToScroll) {
  window.scrollTo({
    top: yCoordinateToScroll
  });
}

// ПОИСК
function searchHandler(e) {
  e.preventDefault();
  clearSearch();
  const inputValue = e.currentTarget.elements.userRequest.value;
  if (inputValue === "") {
    alert("Enter something!");
    return;
  } else {
    api.resetPage();
    api.searchQuery = inputValue;
    api.fetchImages().then(noResult);
  }
}

function noResult(items) {
  const yCoordinateToScroll = document.body.offsetHeight;
  const markup = moreImages(items);
  if (markup === "") {
    alert('Sorry, nothing found >_<"');
    return;
  }
  refs.gallery.insertAdjacentHTML("beforeend", markup);
  windowScroll(yCoordinateToScroll);
  refs.load.hidden = false;
}