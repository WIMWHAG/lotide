const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed🟢: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
  }
};

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

const takeUntil = function(arr, callback) {
  let newArr = [];
  for (const item in newArr) {
    if (callback(arr[item])) {
      break;
    }
    newArr.push(arr[item]);
  }
  return arr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
