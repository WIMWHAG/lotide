const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const middle = function(arr) {
  let newArr = [];
  const mid = Math.floor(arr.length / 2);
  if (arr.length === 1 || arr.length === 2) {
    return newArr;
  } else if (arr.length % 2 === 1) {
    newArr.push(arr[mid]);
  } else (arr.length % 2 === 0); {
    newArr.push(arr[mid - 1]);
    newArr.push(arr[mid]);
  }
  return newArr;
};

// Test Codes:
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5])));

module.exports = middle;