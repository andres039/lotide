'use strict';
const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')
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