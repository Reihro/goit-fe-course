"use strict";

function countProps(obj) {
  const props = Object.values(obj);
  return props.length;
}

console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
