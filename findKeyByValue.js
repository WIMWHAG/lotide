const assertEqual = require('./assertEqual');

findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

// Test Codes:
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

module.exports = findKeyByValue;