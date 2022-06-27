const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢: ${actual} === ${expected}`);
  } else {
    console.log(`❌: ${actual} !== ${expected}`);
  }
};

const tail = function(actual) {
  return actual.slice(1);
};

//Test Codes:
// const test = [1, 2, 3, 4, 5]
// const result = tail(test);
// console.log(test);
// console.log(result);
// assertEqual(test.length, 5);


