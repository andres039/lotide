"use strict";
const assertEqual = function (actual, expected) {
  const log = console.log;
  if (actual === expected) {
    log(`🥳Assertion Passed: 🏁${actual} === ${expected}`);
  } else {
    log(`😞Assertion Failed: 🎌${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      results[item] = 0;
    }
  }
  for (const item of allItems) {
    //console.log(item);
    if (item in results) {
      results[item]++;
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1[karima])





