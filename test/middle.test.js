const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')
assertArraysEqual(middle(['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']), ['Bart'])