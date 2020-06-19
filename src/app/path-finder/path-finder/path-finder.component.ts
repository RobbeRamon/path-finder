import { Component, OnInit } from "@angular/core";
import { Node } from "../node.model";

@Component({
  selector: "app-path-finder",
  templateUrl: "./path-finder.component.html",
  styleUrls: ["./path-finder.component.scss"],
})
export class PathFinderComponent implements OnInit {
  public nodes: Node[];

  constructor() {
    this.nodes = [];
  }

  ngOnInit(): void {
    this.drawGrid();
  }

  drawGrid() {
    for (let i = 0; i < 1000; i++) {
      this.nodes.push(new Node(i));
    }
  }

  cellClicked(id: number) {
    this.nodes[id].value = 1;
  }
}
