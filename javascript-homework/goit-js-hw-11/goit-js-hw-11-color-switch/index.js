const refs = {
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector("body")
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let idCurrent;
let idInterval;

refs.start.addEventListener("click", () => {
  idInterval = setInterval(() => {
    idCurrent = randomIntegerFromInterval(0, colors.length);
    refs.body.style.backgroundColor = colors[idCurrent];
    refs.start.disabled = true;
    refs.stop.disabled = false;
  }, 1000);
});

refs.stop.addEventListener("click", () => {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(idInterval);
});