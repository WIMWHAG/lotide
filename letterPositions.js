const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results !== sentence[i]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

// Test Codes:
// console.log(assertArraysEqual(letterPositions("hello").o, [4]));

module.exports = letterPositions;
