"use strict";
const assertEqual = function(actual, expected) {
  const log = console.log
  if (actual === expected) {
    log(`🥳Assertion Passed: 🏁${actual} === ${expected}`);
  } else {
    log(`😞Assertion Failed: 🎌${actual} !== ${expected}`);
  }
};
const head = (arr) => arr.length === 0 ? undefined : arr[0]
