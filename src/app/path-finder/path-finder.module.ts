import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PathFinderComponent } from "./path-finder/path-finder.component";
import { NodeComponent } from "./node/node.component";

@NgModule({
  declarations: [PathFinderComponent, NodeComponent],
  imports: [CommonModule],
  exports: [PathFinderComponent],
})
export class PathFinderModule {}
