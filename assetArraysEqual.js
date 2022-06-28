const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !== ${expected}`);
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

// Test Codes:
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));