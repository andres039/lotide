"use strict";

const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

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
module.exports = middle

