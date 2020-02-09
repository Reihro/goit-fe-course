"use strict";

function findBestEmployee(employees) {
  let employeeName;
  let bestEmployeeTasks = 0;
  let allEmployees = Object.entries(employees);

  for (const i = 0; i < allEmployees.length; i++) {
    for (const key in employees) {
      if (bestEmployeeTasks < employees[key]) {
        bestEmployeeTasks = employees[key];
        employeeName = key;
      }
    }
    return employeeName;
  }
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux