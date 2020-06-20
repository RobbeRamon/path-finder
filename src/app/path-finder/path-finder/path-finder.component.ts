import { Component, OnInit } from "@angular/core";
import { Node } from "../node.model";

@Component({
  selector: "app-path-finder",
  templateUrl: "./path-finder.component.html",
  styleUrls: ["./path-finder.component.scss"],
})
export class PathFinderComponent implements OnInit {
  public nodes: Node[];
  private _drag: boolean = false;
  private _normalizeNodes: boolean = false;

  constructor() {
    this.nodes = [];
  }

  ngOnInit(): void {
    this.drawGrid();
  }

  drawGrid() {
    for (let i = 0; i < 1000; i++) {
      let node: Node = new Node(i);

      // start node
      if (i == 461) {
        node.purpose = 1;
      } else if (i == 489) {
        node.purpose = 2;
      }

      this.nodes.push(node);
    }
  }

  cellClicked(id: number, event) {
    this._drag = true;

    if (event.shiftKey) {
      this.nodes[id].purpose = 0;
      this._normalizeNodes = true;
    } else {
      this.nodes[id].purpose = 3;
    }
  }

  cellUnClicked() {
    console.log("unclicked");
    this._drag = false;
    this._normalizeNodes = false;
  }

  cellEntered(id: number) {
    console.log("entered");

    if (this._drag) {
      if (this._normalizeNodes) {
        this.nodes[id].purpose = 0;
      } else {
        this.nodes[id].purpose = 3;
      }
    }
  }
}
