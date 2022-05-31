// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function (actual) {
  if (actual.length === 0) {
    return undefined;
  } else {
    return actual[0];
  }
};

assertEqual(head[1, 1]);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
