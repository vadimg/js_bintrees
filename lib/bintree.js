(function(){

var TreeBase;

if(typeof module !== 'undefined' && module.exports) {
    // CommonJS
    var assert = require('assert');
    TreeBase = require('./treebase');
}
else {
    // browser
    TreeBase = bintrees.TreeBase;
}

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Node.prototype.get_child = function(dir) {
    return dir ? this.right : this.left;
};

Node.prototype.set_child = function(dir, val) {
    if(dir) {
        this.right = val;
    }
    else {
        this.left = val;
    }
};

function BinTree(comparator) {
    this._root = null;
    this._comparator = comparator;
    this.size = 0;
}

BinTree.prototype = new TreeBase();

BinTree.prototype.assert = function() {
    return bt_assert(this._root, this._comparator) !== 0;
};

// returns true if inserted, false if duplicate
BinTree.prototype.insert = function(data) {
    if(this._root === null) {
        // empty tree
        this._root = new Node(data);
        this.size++;
        return true;
    }

    var dir = 0;

    // setup
    var p = null; // parent
    var node = this._root;

    // search down
    while(true) {
        if(node === null) {
            // insert new node at the bottom
            node = new Node(data);
            p.set_child(dir, node);
            ret = true;
            this.size++;
            return true;
        }

        // stop if found
        if(this._comparator(node.data, data) === 0) {
            return false;
        }

        dir = this._comparator(node.data, data) < 0;

        // update helpers
        p = node;
        node = node.get_child(dir);
    }
};

// returns true if removed, false if not found
BinTree.prototype.remove = function(data) {
    if(this._root === null) {
        return false;
    }

    var head = new Node(undefined); // fake tree root
    var node = head;
    node.right = this._root;
    var p = null; // parent
    var found = null; // found item
    var dir = 1;

    while(node.get_child(dir) !== null) {
        p = node;
        node = node.get_child(dir);
        var cmp = this._comparator(data, node.data);
        dir = cmp > 0;

        if(cmp === 0) {
            found = node;
        }
    }

    if(found !== null) {
        found.data = node.data;
        p.set_child(p.right === node, node.get_child(node.left === null));

        this._root = head.right;
        this.size--;
        return true;
    }
    else {
        return false;
    }
};

function bt_assert(root, comparator) {
    if(root === null) {
        return true;
    }
    else {
        var ln = root.left;
        var rn = root.right;

        // invalid binary search tree
        assert.equal((ln !== null && comparator(ln.data, root.data) >= 0) ||
                         (rn !== null && comparator(rn.data, root.data) <= 0),
                     false,
                     "binary tree violation");

        return bt_assert(ln, comparator) && bt_assert(rn, comparator);
    }
}

if(typeof module !== 'undefined' && module.exports) {
    // CommonJS
    module.exports = BinTree;
}
else {
    // browser
    window.bintrees = window.bintrees || {};
    window.bintrees.BinTree = BinTree;
}

}());
