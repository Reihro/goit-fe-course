"use strict";
function findLongestWord(string) {
  let currentLongestWord = 0;
  let stringArray = string.split(" ");
  let finalLongestWord;
  for (let a = 0; a < stringArray.length; a++) {
    if (stringArray[a].length > currentLongestWord) {
      currentLongestWord = stringArray[a].length;
      finalLongestWord = stringArray[a];
    }
  }
  return finalLongestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'