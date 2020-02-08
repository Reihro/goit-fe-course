"use strict";

function checkForSpam(message) {
  let messageBare = message.replace(/[{[\]|/}]/g, "");
  let messageLowerCase = messageBare.toLowerCase();
  let messageArray = messageLowerCase.split(" ");
  console.log(message);
  return messageArray.includes("spam") || messageArray.includes("sale");
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true