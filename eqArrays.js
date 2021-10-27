"use strict";
const assertEqual = function (actual, expected) {
  const log = console.log;
  if (actual === expected) {
    log(`🥳Assertion Passed: 🏁${actual} === ${expected}`);
  } else {
    log(`😞Assertion Failed: 🎌${actual} !== ${expected}`);
  }
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    return arr1.reduce((result, element, index) => {
      if (result === false) {
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 0, 4, 3]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(
  eqArrays(
    ["homer", "simpson", "is", "great"],
    ["homer", "simpson", "is", "great"]
  ),
  true
);
assertEqual(eqArrays([true, true, false], [true, true, false]), true);
