Binary Trees [![Build Status](https://secure.travis-ci.org/vadimg/js_bintrees.png?branch=master)](http://travis-ci.org/vadimg/js_bintrees)
============

This package provides Binary and Red-Black Search Trees written in Javascript. It is released under the MIT License.

Binary Search Trees are a good way to store data in sorted order. A Red-Black tree is a variation of a Binary Tree that balances itself.

Algorithms were taken from Julienne Walker: http://eternallyconfuzzled.com/jsw_home.aspx

Trees
------------

* BinTree - Binary Search Tree
* RBTree - Red-Black Tree

Quickstart
------------
node.js:

```
npm install bintrees
```

```javascript
var Tree = require('bintrees').RBTree;

var tree = new RBTree(function(a, b) { return a - b; });

tree.insert(2);
tree.insert(-3);
```

see examples/node.js for more info

In the browser:

```html
<script src="/path/to/rbtree.js"></script>
<script>
    var tree = new RBTree(function(a, b) { return a - b });
    tree.insert(0);
    tree.insert(1);
</script>
```

see examples/client.html for more info

Constructor
------------

Requires 1 argument: a comparator function f(a,b) which returns:
* 0 if a == b
* >0 if a > b
* <0 if a < b

Methods
------------

* insert(item)
* remove(item)
* clear()
* find(item)
* min()
* max()
* each(f)
* reach(f)
* iterator()

See the comments inside the lib directory for more info.

Iterators
------------

tree.iterator() will return a null-iterator. On a null iterator,
* next() will return the first element in the tree
* prev() will return the last element in the tree

Otherwise,
* next() will return the next element
* prev() will return the previous element

When iteration reaches the end, the iterator becomes a null-iterator again.

Forward iteration example:

```javascript
var it=tree.iterator(), item;
while((item = it.next()) !== null) {
    // do stuff with item
}
```

If you are iterating forward through the tree, you can always call prev() to go back, and vice versa.
