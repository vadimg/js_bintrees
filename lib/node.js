function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;

    // used by the rbtree
    this.red = true;
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

module.exports = Node;

