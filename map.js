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
const assertArraysEqual = function (arr1, arr2) {
  const areEqual = eqArrays(arr1, arr2);
  const log = console.log;
  if (areEqual) {
    log(`🥳Assertion Passed: 🏁${arr1} === ${arr2}`);
  } else {
    log(`😞Assertion Failed: 🎌${arr1} !== ${arr2}`);
  }
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map