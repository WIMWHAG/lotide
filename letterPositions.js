const assertArraysEqual = function(actual, expected) {
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

assertArraysEqual(letterPositions("hello").o, [4]);