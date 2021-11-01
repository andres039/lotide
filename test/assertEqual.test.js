'use strict';
const assertEqual = require('../assertEqual')
function printName () {
  return 'bob'
}
assertEqual(printName('bob'), 'bob')