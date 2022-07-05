const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  const results = {};
  for (const letter of str) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

// Test Codes:
// console.log(countLetters('WIMWHAG'));

module.exports = countLetters