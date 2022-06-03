const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed🟢: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
  console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`); 
  return
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
      return
    }
  }
  console.log(`🟢Assertion Passed🟢: ${actual} === ${expected}`);
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]));