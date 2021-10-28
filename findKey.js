"use strict";
const assertEqual = function (actual, expected) {
  const log = console.log;
  if (actual === expected) {
    log(`🥳Assertion Passed: 🏁${actual} === ${expected}`);
  } else {
    log(`😞Assertion Failed: 🎌${actual} !== ${expected}`);
  }
};
const findKey = function (object, callBack) {
  for (const key in object) {
    if (callBack(object[key])) {
      console.log(object[key]);
      return key;
    }
  }
};
