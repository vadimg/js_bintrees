
all: dist/rbtree.min.js dist/bintree.min.js

dist/rbtree.js: lib/rbtree.js lib/treebase.js
	./node_modules/.bin/browserify -s RBTree $< > $@

dist/bintree.js: lib/bintree.js lib/treebase.js
	./node_modules/.bin/browserify -s BinTree $< > $@

dist/bintree.min.js: dist/bintree.js
	./node_modules/.bin/uglifyjs $< -c -m -o $@

dist/rbtree.min.js: dist/rbtree.js
	./node_modules/.bin/uglifyjs $< -c -m -o $@


