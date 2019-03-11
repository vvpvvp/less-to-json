const path = require("path");
const Convert = require('../index');
// console.log(path.resolve(__dirname, '../index'))

Convert(path.resolve(__dirname, './test.less'), (resp)=>{
  console.log(resp)
})