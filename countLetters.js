"use strict";
const assertEqual = function (actual, expected) {
  const log = console.log;
  if (actual === expected) {
    log(`🥳Assertion Passed: 🏁${actual} === ${expected}`);
  } else {
    log(`😞Assertion Failed: 🎌${actual} !== ${expected}`);
  }
};
const countLetters = function (str) {
  /*
  input a string
  make the string into an array
  generate an object with letters as keys and a number as value
  output an object
  */
  const arrOfLetters = str.split("");
  return arrOfLetters.reduce((lettersCount, letter) => {
    letter in lettersCount
      ? lettersCount[letter]++
      : (lettersCount[letter] = 1);
    return lettersCount;
  }, {});
};
module.exports = countLetters