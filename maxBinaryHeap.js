class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.valjues[idx];
		while(idx > 0) {
			let parentIdx = Math.floor((idx - 1)/2);
			let parent = this.values[parentIdx];
			if(element > parent) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
}

// [ 41,39,33,18,27,12,55]
//   0  1  2  3  4  5  6
let heap = new MaxBinaryHeap();
heap.insert(55);