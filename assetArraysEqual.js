const assertEqual = require('../assertEqual');

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌: ${arr1} !== ${arr2}`);
  }
};

// Test Codes:
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));

module.exports = assertEqual;