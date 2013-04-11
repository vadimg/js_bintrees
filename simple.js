var RBTree = require("./lib/rbtree.js")
var x = new RBTree(function(a,b) { return a-b })

x.insert(0)
x.insert(1)
x.insert(2)

console.log(x.lowerBound(0.5))
