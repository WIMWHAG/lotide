const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length)
  return false
for (let i = 0; i < actual.length; i++) {
  if (actual[i] !== expected[i]) {
    return false;
  }
 }
 return true;
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results !== sentence[i]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

// Test Codes:
// console.log(assertArraysEqual(letterPositions("hello").o, [4]));