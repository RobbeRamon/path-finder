import { Node } from "../models/node.model";
import { MinHeap } from "../models/minheap.model";

export function dijkstra(grid: Node[], startNode: Node, endNode: Node) {
  let currentNode: Node = startNode;
  let unvisitedNeighbors: Node[];
  let heap: MinHeap = new MinHeap();

  currentNode.distance = 0;

  //while (currentNode.id !== endNode.id) {
  unvisitedNeighbors = getUnvisitedNeighbors(currentNode, grid);
  changeDistances(unvisitedNeighbors, currentNode);

  // fill heap with new nodes
  for (let node of unvisitedNeighbors) {
    heap.push(node);
  }

  while (!heap.empty) {
    let node: Node = heap.pop() as Node;
    node.visited = true;
  }
  //}
}

function getUnvisitedNeighbors(node: Node, grid: Node[]): Node[] {
  let nodes: Node[] = [];
  let id: number = node.id;

  if ((id + 1) % 50 !== 0) nodes.push(grid[id + 1]); // NOT right-most node
  if (id % 50 !== 0) nodes.push(grid[id - 1]); // NOT left-most node
  if (id - 50 >= 0) nodes.push(grid[id - 50]); // NOT high-most node
  if (id + 50 < 999) nodes.push(grid[id + 50]); // NOT low-most node

  return nodes.filter((node) => node.visited !== true);
}

function changeDistances(nodes: Node[], currentNode: Node) {
  for (let node of nodes) {
    node.distance = currentNode.distance + 1;
  }
}
