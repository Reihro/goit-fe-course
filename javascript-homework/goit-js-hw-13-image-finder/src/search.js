import api from "./url.js";
const refs = {
  search: document.querySelector(".search-form"),
  gallery: document.querySelector(".gallery"),
  load: document.querySelector('button[data-action="load more"]')
};
refs.load.addEventListener("click", loadHandler);
function loadHandler() {
  api.fetchImages().then(noResult);
}
// ПОИСК
refs.search.addEventListener("submit", searchHandler);
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
  function clearSearch() {
    refs.gallery.innerHTML = "";
  }

// LOAD
import moreImages from "./templates/template-img.hbs";
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
  function windowScroll(yCoordinateToScroll) {
    window.scrollTo({
      top: yCoordinateToScroll
    });
  }