const parse = require("./parse");

module.exports = function (source) {
  let result = parse(source);
  while(!(result.error || result.result)) {
  }
  return result.result;
};