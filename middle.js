const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
    return;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
      return;
    }
  }
  console.log(`🟢Assertion Passed🟢: ${actual} === ${expected}`);
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed🟢: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
  }
};

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

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5])));