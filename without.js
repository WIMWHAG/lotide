const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

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

// Test Codes:
// console.log(without(["wimwhag", "wimhwag", "gahwmiw"], ["wimhwag"]));
// console.log(without([1, 2, 3], [2]));

module.exports = without