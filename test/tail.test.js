const assertEqual = require("../assertEqual");
const tail = require('../tail')
let test = tail([1, 2, 3])
assertEqual(tail([1, 2, 3]), test)