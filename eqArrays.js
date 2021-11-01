"use strict";
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    return arr1.reduce((result, element, index) => {
      if (result === false) {
        return result;
      } else {
        if (arr2[index] === element) {
          result = true;
        } else {
          result = false;
          return result;
        }
      }
      return result;
    }, true);
  }
};

module.exports = eqArrays
