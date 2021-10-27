"use strict";
const assertEqual = function (actual, expected) {
  const log = console.log;
  if (actual === expected) {
    log(`🥳Assertion Passed: 🏁${actual} === ${expected}`);
  } else {
    log(`😞Assertion Failed: 🎌${actual} !== ${expected}`);
  }
};
const findKeyByValue = function (object, value) {
  let result;
  for (let key in object) {
    if (object[key] === value) {
      result = key;
    }
  }
  return result;
};
