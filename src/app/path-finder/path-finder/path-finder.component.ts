import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-path-finder",
  templateUrl: "./path-finder.component.html",
  styleUrls: ["./path-finder.component.scss"],
})
export class PathFinderComponent implements OnInit {
  public cells: number[][];

  constructor() {
    this.cells = [];
  }

  ngOnInit(): void {
    this.drawGrid();
  }

  drawGrid() {
    for (let row = 0; row < 15; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(-1);
      }
      this.cells.push(currentRow);
    }
  }
}
