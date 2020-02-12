"use strict";
let fontSize = document.getElementById("font-size-control");
fontSize.oninput = function() {
  document.getElementById("text").style.fontSize = fontSize.value + "px";
};