const less = require("less");
const fs = require("fs");
const path = require("path");


module.exports = function (source, callback) {
  let lessvars = {};
  let paletteLess = fs.readFileSync(source, 'utf8');
  paletteLess = paletteLess.replace(/\@import \(less\) \"\~/, ("@import (less) \"" + path.join(process.cwd(), 'node_modules') + "/"));
  less.parse(paletteLess, {
    paths: [path.dirname(source)]
  }, function (err, root, imports, options) {
    try {
      let evalEnv = new less.contexts.Eval(options);
      let evaldRoot = root.eval(evalEnv);
      let ruleset = evaldRoot.rules;
      ruleset.forEach(function (rule) {
        if (rule.variable === true) {
          let name = rule.name.substr(1);
          let value = rule.value;
          lessvars[name] = value.toCSS();
        }
      });
      callback.call(null, lessvars);
    } catch (err) {
      console.error(err)
    }
  });
};