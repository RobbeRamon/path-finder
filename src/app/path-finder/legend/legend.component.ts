import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-legend",
  templateUrl: "./legend.component.html",
  styleUrls: ["./legend.component.scss"],
})
export class LegendComponent implements OnInit {
  @Output() public perform: EventEmitter<boolean> = new EventEmitter();
  @Output() public reset: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  performDijkstra() {
    this.perform.emit(true);
  }

  resetGrid() {
    this.reset.emit(true);
  }
}
