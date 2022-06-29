const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length)
  return false;
for (let i = 0; i < actual.length; i++) {
  if (actual[i] !== expected[i]) {
    return false;
  }
 }
 return true;
}

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