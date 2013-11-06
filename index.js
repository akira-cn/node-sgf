function parse(data) {
  return require('./lib/parser').parse(data);
};

module.exports = parse;

/*
var fs   = require('fs');
var tree = parse(fs.readFileSync(__dirname + '/test/sample.sgf').toString());
console.log(tree[0][0]['GM'][0]);
*/