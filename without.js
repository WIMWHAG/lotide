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
for (let i = 0; i < actual.length; i++) {
  if (actual[i] !== expected[i]) {
    return false
  }
 }
 return true
}

const without = function (source, itemsToRemove) {
  let arr = source;
  for (let i = 0; i < source.length; i++) {
    for (let a = 0; a < itemsToRemove.length; a++) {
      if (source[i] === itemsToRemove[a]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

console.log(without(["wimwhag", "wimhwag", "gahwmiw"], ["wimhwag"]));

console.log(without([1, 2, 3], [2]));
