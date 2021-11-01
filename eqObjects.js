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
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for(let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
         if (eqArrays(object1[key], object2[key]) === false) {
           return false
         } else {continue}
        }
      if(object1[key] !== object2[key])
      {
      return false
      }
    }
      return true
    }
  }

module.exports = eqObjects
