
const assertArraysEqual = require('../assertArraysEqual')
const arr1 = ['bart', 'homer', 'marge']
const arr2 = ['bart', 'homer', 'marge']
const arr3 = ['Ned', 'Maude']
assertArraysEqual(arr1, arr3)
assertArraysEqual(arr1, arr2)