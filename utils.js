var fs = require('fs');
var path = require('path');
var util = require('util');
var colors = require('colors');

/**
 * Load nabu from the the node_modules of the CWD
 * 
 * @return {OBject} The required nabu object
 */
var requireLocalNabu = exports.requireLocalNabu = function(){
  var nabuPath = path.resolve(process.cwd(), './node_modules/nabu');

  if (!fs.existsSync(nabuPath)) {
    throw new Error('Nabu wasn\'t found in the spot it expected. Are you in a Nabu site?');
  }

  return require(nabuPath);
}

/**
 * If there is an error, yell loudly!
 * @param  {Error} err
 */
var ifError = exports.ifError = function(err){
  if (err) {
    util.error(err.message.red);
    process.exit(1);
  }
}