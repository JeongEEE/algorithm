class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if(this.adjacencyList[vertext]) this.adjacencyList[vertex] = [];
	}
	addEdge(v1,v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}
}

let g = new Graph();
g.addVertex('Seoul');
g.addVertex('Dokyo');
g.addVertex('Dallas');
