// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  // -- FOR LOOP SOLUTION --

  //   let reverse = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reverse += str.charAt(i);
  //   }
  //   return reverse;
  // }

  // -- BUILT IN REVERSE METHOD SOLUTION --

  return str
  .split("")
  .reverse()
  .join("");
}

module.exports = reverse;
