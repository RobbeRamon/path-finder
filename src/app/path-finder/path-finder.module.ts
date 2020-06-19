import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PathFinderComponent } from "./path-finder/path-finder.component";
import { NodeComponent } from "./node/node.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [PathFinderComponent, NodeComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PathFinderComponent],
})
export class PathFinderModule {}
