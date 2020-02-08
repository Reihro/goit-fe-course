"use strict";
function logItems(array) {
  for (const item of array) {
    let a = array.indexOf(item);
    a = a + 1;
    console.log(a + " - " + item);
  }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);