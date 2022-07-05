const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');

const eqObjects = function (obj1, obj2) {
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

// Test Codes:
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false