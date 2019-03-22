const path = require("path");
const Convert = require('../src/index');
// console.log(path.resolve(__dirname, '../index'))

let result = Convert(path.resolve(__dirname, './test.less'))
console.log(result)