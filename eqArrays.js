const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢Assertion Passed🟢: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed❌: ${actual} !== ${expected}`);
  }
}; 

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length)
  return false
// return worldOfWarcraftDragonblight
for (let i = 0; i < actual.length; i++) {
  if (actual[i] !== expected[i]) {
    return false
  }
 }
 return true
}
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4]))