#!/usr/bin/env node

var program = require("commander")
var fs = require("fs")
var logger = require("../src/logger")

var convert = require("../src/index")

var version = require("../package").version

logger.info("version", version)

program
  .version(version, "-v, --version")
  .option("-s, --js", "Generate js file")
  .option("-n, --json", "Generate json file")

program.on("--help", function() {
  console.log("")
  console.log("Examples:")
  console.log("  $ lessto -s var.js")
  console.log("  $ lessto -n var.json")
})

program.parse(process.argv)

const isJs = program.js
const isJson = program.json || !isJs


const sourcePath = program.args[0]
if (isJs || isJson) {
  const fileName = program.args[1] || `less.${isJs ? "js" : "json"}`

  logger.info("start convert")

  let result = convert(sourcePath)
  var resulttxt = (isJs ? 'module.exports = ' : '') + JSON.stringify(result, null, '\t');

  fs.writeFile(fileName, resulttxt, function(err, fd) {
    logger.info(`convert to ${fileName}`)
    if (err) {
      return logger.error(err)
    }
    logger.info("convert success!")
  })
}
