const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length === keys2.length) {
    for (const key of keys1) {
      if (Array.isArray(obj1[key])) {
        if (!eqArrays(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] === "object") {
        if (!eqObjects(obj1[key], obj2[key])) {
          return eqObjects(obj1[key], obj2[key]);
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual, expected) {
    console.log(`🟢: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const wim = { a: "wim of", b: "the whag"};
const whag = { b: "the whag", a: "wim of" };

console.log(assertObjectsEqual(wim, whag));