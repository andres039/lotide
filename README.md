Lotide

A mini clone of the Lodash library.
Purpose

BEWARE: This library was published for learning purposes. It is not intended for use in production-grade software.

This project was created and published by me as part of my learnings at Lighthouse Labs.
Usage

Install it:

npm install andres039/lotide

Require it:

const _ = require('@andres039/lotide');

Call it:

const results = _.tail([1, 2, 3]) // => [2, 3]
Documentation

The following functions are currently implemented:

    head: returns the first element of an array
    tail: returns all elements of an array except the first one
    middle: if the length of the array is odd it returns the element in the middle, if it is even it returns the two middle elements.
    assertArraysEqual: it compares two arrays and returns an assertion for equality
    assertEqual: it compares two values and returns an assertion for equality
    assertObjectEqual: it compares two objects and returns a boolean for equality
    countLetters: it returns the number of occurrences of a letter
    countOnly: it takes an array and an object as input, and it counts the properties that appear in the object correponding to the array elements.
    eqArrays: it compares two arrays and returns a boolean for equality
    eqObjects: it compares two objects and returns a boolean for equality
    findKey: it applies a callback to an object
    findKeyByValue: it takes an object and a value, and returns the key corresponding to the value
    letterPositions: it returns an object containing the letters as keys and their indices in the string as values
    map: It applies a callback function to each element in the array
    takeUntil: It applies a callback function to each element of the object
    without: Takes in an inital array and an array with items to remove and returns an array filtered of the items to remove.
