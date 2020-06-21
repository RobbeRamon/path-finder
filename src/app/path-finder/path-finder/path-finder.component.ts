import { Component, OnInit } from "@angular/core";
import { Node } from "../../models/node.model";
import { dijkstra } from "src/app/algorithms/dijkstra";

@Component({
  selector: "app-path-finder",
  templateUrl: "./path-finder.component.html",
  styleUrls: ["./path-finder.component.scss"],
})
export class PathFinderComponent implements OnInit {
  public nodes: Node[];
  private _drag: boolean = false;
  private _normalizeNodes: boolean = false;
  private _grab: number = -1;

  constructor() {
    this.nodes = [];
  }

  ngOnInit(): void {
    this.drawGrid();
  }

  get startNode(): Node {
    // find node with purpose 1 (start)
    return this.nodes.find((node) => node.purpose == 1);
  }

  get endNode(): Node {
    // find node with purpose 2 (end)
    return this.nodes.find((node) => node.purpose == 2);
  }

  drawGrid() {
    for (let i = 0; i < 1000; i++) {
      let node: Node = new Node(i);

      if (i == 461) {
        // start node
        node.purpose = 1;
      } else if (i == 489) {
        // end node
        node.purpose = 2;
      }

      this.nodes.push(node);
    }
  }

  cellClicked(id: number, event) {
    let node: Node = this.nodes[id];

    if (!this.isChangePossible(id)) {
      this._drag = true;
      this._grab = node.purpose;
      node.purpose = 0;
    } else {
      this._drag = true;

      if (event.shiftKey) {
        node.purpose = 0;
        this._normalizeNodes = true;
      } else {
        node.purpose = 3;
      }
    }
  }

  cellUnClicked(id: number) {
    this._drag = false;
    this._normalizeNodes = false;

    if (this._grab > 0) {
      this.nodes[id].purpose = this._grab;
    }

    this._grab = -1;
  }

  cellEntered(id: number) {
    let node: Node = this.nodes[id];
    if (!this.isChangePossible(id)) return;

    if (this._drag) {
      if (this._normalizeNodes) {
        node.purpose = 0;
      } else if (this._grab > 0) {
        node.purpose = this._grab;
      } else {
        node.purpose = 3;
      }
    }
  }

  cellLeft(id: number) {
    if (this._grab > 0 && this._drag) {
      this.nodes[id].purpose = 0;
    }
  }

  performDijkstra() {
    dijkstra(this.nodes, this.startNode, this.endNode);
  }

  private isChangePossible(id: number) {
    return this.nodes[id].purpose !== 1 && this.nodes[id].purpose !== 2;
  }
}
