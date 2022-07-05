const assertEqual = require('./assertEqual');

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

// Test Codes:
// const words = ["ground", "control", "to", "major", "tom"];
// assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);

module.exports = map;