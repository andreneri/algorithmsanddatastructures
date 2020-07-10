// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

  const reversedString = str.split('').reverse().join('');
  return str === reversedString;
}

module.exports = palindrome;

// -##- SOLUTION USING FOR LOOP -##-
//let length = str.length;
// for (let i = 0; i < length/2; i++) {
//   if (!(str.charAt(i) === (str.charAt(length - 1 - i)))) {
//     return false;
//   }
// }
// return true;

// -##- SOLUTION USING WHILE LOOP -##-
// let length = str.length;
// let counter = 0;
// while (counter < length) {
//   if (!(str.charAt(counter) === str.charAt(length - 1 - counter))) {
//     return false;
//   }
//   counter++;
// }
// return true;
