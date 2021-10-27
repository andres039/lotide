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

const middle = function (arr) {
  let result = [];
  if (arr.length < 3) {
    return result;
  } else if (arr.length % 2 !== 0) {
    result.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    result.push(
      arr[Math.floor(arr.length / 2) - 1],
      arr[Math.floor(arr.length / 2)]
    );
  }
  return result;
};
assertArraysEqual(middle([]), [])
