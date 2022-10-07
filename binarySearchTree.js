/*
	이진검색트리
*/
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		var newNode = new Node(value);
		if(this.root === null) {
			this.root = newNode;
			return this;
		} else {
			var current = this.root;
			while(true) {
				if(value === current.value) return undefined;
				if(value < current.value) {
					if(current.left === null) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else if(value > current.value) {
					if(current.right === null) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}
	find(value) {
		if(this.root === null) return false;
		var current = this.root;
		var found = false;
		while(current && !found) {
			if(value > current.value) {
				current = current.value
			} else if(value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if(!found) return undefined;
		return current;
	}
	contains(value) {
		if(this.root === null) return false;
		var current = this.root;
		var found = false;
		while(current && !found) {
			if(value > current.value) {
				current = current.value
			} else if(value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		return false;
	}
	
	BFS() { // 너비 우선 탐색
		var data = [];
		var queue = [];
		var node = this.root;
		queue.push(node);

		while(queue.length) { // 큐 길이가 존재할때
			node = queue.shift();
			data.push(node);
			if(node.left) queue.push(node.left);
			if(node.right) queue.push(node.right);
		}
		return data;
	}
	DFSPreOrder() { // 깊이 우선 탐색
		var data = [];
		var current = this.root;
		function traverse(node) {
			data.push(node);
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
		}
		traverse(current);

		return data;
	}
	DFSPostOrder() { // 후위 순회
		var data = [];
		function traverse(node) {
			if(node.left) traverse(node.left);
			if(node.right) traverse(node.right);
			data.push(node.value);
		}
		traverse(this.rootl);
		return data;
	}
}

//         10
//     5       13
//  2    7   11  16

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);