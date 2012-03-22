var fs = require('fs');

var loader = require('./loader');

var BASE_DIR = __dirname + '/samples';
var TREES = ['rbtree', 'bintree'];

function run_test(assert, tree_class, test_path) {
    var tree = loader.new_tree(tree_class);

    var tests = loader.load(test_path);

    var elems = 0;
    tests.forEach(function(n) {
        if(n > 0) {
            // insert
            assert.ok(tree.insert(n));
            assert.equal(tree.find(n), n);
            elems++;
        }
        else {
            // remove
            n = -n;
            assert.ok(tree.remove(n));
            assert.equal(tree.find(n), null);
            elems--;
        }
        assert.equal(tree.size, elems);
        assert.ok(tree.assert());
    });
}

var tests = fs.readdirSync(BASE_DIR);

var test_funcs = {};
TREES.forEach(function(tree) {
    var tree_class = require('../lib/' + tree);
    tests.forEach(function(test) {
       var test_path = BASE_DIR + "/" + test;
       test_funcs[tree + "_" + test] = function(assert) {
          run_test(assert, tree_class, test_path);
          assert.done();
       };
    });
});

exports.correctness = test_funcs;
