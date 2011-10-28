module.exports.simple = function() {
    var Tree = require('..').RBTree;
    var tree = new Tree(function(a, b) { return a - b; });
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.remove(2);
};
