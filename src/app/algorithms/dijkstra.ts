import { Node, NodePurpose } from "../models/node.model";
import { MinHeap } from "../models/minheap.model";

export async function dijkstra(grid: Node[], startNode: Node, endNode: Node) {
  let currentNode: Node = startNode;
  let unvisitedNeighbors: Node[];
  let heap: MinHeap = new MinHeap();

  currentNode.distance = 0;

  unvisitedNeighbors = getUnvisitedNeighbors(currentNode, grid);
  changeDistances(unvisitedNeighbors, currentNode);

  // fill heap with first surrounding nodes
  for (let node of unvisitedNeighbors) {
    heap.push(node);
  }

  while (!heap.empty && currentNode.id !== endNode.id) {
    // sleep to make steps visual
    await sleep(0.1);

    let node: Node;

    node = heap.pop() as Node;
    node.finalized = true;

    currentNode = node;
    unvisitedNeighbors = getUnvisitedNeighbors(currentNode, grid);
    changeDistances(unvisitedNeighbors, currentNode);
    // fill heap with new surrounding nodes
    for (let node of unvisitedNeighbors) {
      heap.push(node);
    }
  }

  await showPath(endNode);
}

function getUnvisitedNeighbors(node: Node, grid: Node[]): Node[] {
  let nodes: Node[] = [];
  let id: number = node.id;

  if ((id + 1) % 50 !== 0) nodes.push(grid[id + 1]); // NOT right-most node
  if (id % 50 !== 0) nodes.push(grid[id - 1]); // NOT left-most node
  if (id - 50 >= 0) nodes.push(grid[id - 50]); // NOT high-most node
  if (id + 50 < 999) nodes.push(grid[id + 50]); // NOT low-most node

  return nodes.filter(
    (node) => node.finalized !== true && node.purpose !== NodePurpose.Wall
  );
}

function changeDistances(nodes: Node[], currentNode: Node) {
  for (let node of nodes) {
    if (node.distance === -1 || node.distance > currentNode.distance + 1) {
      node.distance = currentNode.distance + 1;
      node.lastNode = currentNode;
    }
  }
}

async function showPath(endNode: Node) {
  let lastNode: Node = endNode;

  // sleep to make steps visual
  await sleep(1);

  lastNode.path = true;
  lastNode = lastNode.lastNode;
  if (lastNode !== null) showPath(lastNode);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
