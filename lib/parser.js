var Parser = require("jison").Parser;

var fs   = require('fs');

/**
    http://www.red-bean.com/sgf/sgf4.html#ebnf-def
 */
var grammar = JSON.parse(fs.readFileSync(__dirname + '/rule.json').toString());

module.exports = new Parser(grammar);
