
all: lib/rbtree.js lib/bintree.js lib/treebase.js
	./node_modules/.bin/script --name RBTree ./lib/rbtree.js > dist/rbtree.js
	./node_modules/.bin/script --name BinTree ./lib/bintree.js > dist/bintree.js
	./node_modules/.bin/script --name RBTree --minify ./lib/rbtree.js > dist/rbtree.min.js
	./node_modules/.bin/script --name BinTree --minify ./lib/bintree.js > dist/bintree.min.js

