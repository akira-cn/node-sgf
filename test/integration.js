var sgf  = require('..');
var fs   = require('fs');
var test = require('tape');

test('parse SGF', function(t) {
  var tree = sgf(fs.readFileSync('sample.sgf').toString())
  t.ok(tree);
  t.equal(tree[0][0]['GM'][0], 1);
  t.end();
});
