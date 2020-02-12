"use strict";

let userInput = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

userInput.oninput = function() {
  if (userInput.value === "") {
    output.innerHTML = "незнакомец";
  } else {
    output.innerHTML = userInput.value;
  }
};

