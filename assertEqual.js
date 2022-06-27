const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !== ${expected}`);
  }
};

// Test Codes:
// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));
// console.log(assertEqual("WIM", "of the", "WHAG"));
// console.log(assertEqual(27, 27));