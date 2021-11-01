"use strict";

const assertArraysEqual = function (arr1, arr2) {
  const areEqual = eqArrays(arr1, arr2);
  const log = console.log;
  if (areEqual) {
    log(`🥳Assertion Passed: 🏁${arr1} === ${arr2}`);
  } else {
    log(`😞Assertion Failed: 🎌${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual