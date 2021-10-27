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
const without = function(source, itemsToRemove) {
  const filteredArray = source.filter(element => !itemsToRemove.includes(element))
  return filteredArray
}

