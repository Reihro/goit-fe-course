"use strict";
let input = document.getElementById("validation-input");
let required = input.getAttribute("data-length");

input.oninput = function() {
  if (input.value.length === parseInt(required, 10)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  if (
    input.value.length !== parseInt(required, 10) &&
    input.value.length !== 0
  ) {
    input.classList.add("invalid");
  }
};