import { Component, OnInit } from "@angular/core";
import { Node, NodePurpose } from "../../models/node.model";
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
    return this.nodes.find((node) => node.purpose === NodePurpose.Start);
  }

  get endNode(): Node {
    return this.nodes.find((node) => node.purpose === NodePurpose.End);
  }

  drawGrid() {
    for (let i = 0; i < 1000; i++) {
      let node: Node = new Node(i);

      if (i == 461) {
        // set start node
        node.purpose = NodePurpose.Start;
      } else if (i == 489) {
        // set end node
        node.purpose = NodePurpose.End;
      }

      this.nodes.push(node);
    }
  }

  cellClicked(id: number, event) {
    let node: Node = this.nodes[id];

    if (!this.isChangePossible(id)) {
      this._drag = true;
      this._grab = node.purpose;
      node.purpose = NodePurpose.Default;
    } else {
      this._drag = true;

      if (event.shiftKey) {
        node.purpose = NodePurpose.Default;
        this._normalizeNodes = true;
      } else {
        node.purpose = NodePurpose.Wall;
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
        node.purpose = NodePurpose.Default;
      } else if (this._grab > 0) {
        node.purpose = this._grab;
      } else {
        node.purpose = NodePurpose.Wall;
      }
    }
  }

  cellLeft(id: number) {
    if (this._grab > 0 && this._drag) {
      this.nodes[id].purpose = NodePurpose.Default;
    }
  }

  performDijkstra() {
    dijkstra(this.nodes, this.startNode, this.endNode);
  }

  private isChangePossible(id: number) {
    return (
      this.nodes[id].purpose !== NodePurpose.Start &&
      this.nodes[id].purpose !== NodePurpose.End
    );
  }
}
