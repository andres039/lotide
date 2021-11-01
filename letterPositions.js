"use strict";
const assertEqual = function (actual, expected) {
  const log = console.log;
  if (actual === expected) {
    log(`🥳Assertion Passed: 🏁${actual} === ${expected}`);
  } else {
    log(`😞Assertion Failed: 🎌${actual} !== ${expected}`);
  }
};
const letterPositions = function (sentence) {
  const arrayOfLetters = sentence.split("");
  return arrayOfLetters.reduce((lettersByIndex, letter, index) => {
    letter !== " "
      ? !lettersByIndex[letter]
        ? (lettersByIndex[letter] = [index])
        : lettersByIndex[letter].push(index)
      : "do nothin";
    return lettersByIndex;
  }, {});
};

module.exports = letterPositions