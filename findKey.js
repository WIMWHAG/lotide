const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};  

// Test Codes:
// console.log(findKey({
//  "Blue Hill": { stars: 1 },
//  "Akaleri":   { stars: 3 },
//  "noma":      { stars: 2 },
//  "elBulli":   { stars: 3 },
//  "Ora":       { stars: 2 },
//  "Akelarre":  { stars: 3 }
// }, x => x.stars === 3)); // => "noma"

module.exports = findKey;