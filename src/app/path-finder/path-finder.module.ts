import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PathFinderComponent } from "./path-finder/path-finder.component";
import { MaterialModule } from "../material/material.module";
import { LegendComponent } from "./legend/legend.component";
import { MdboostrapModule } from "../mdboostrap/mdboostrap.module";

@NgModule({
  declarations: [PathFinderComponent, LegendComponent],
  imports: [CommonModule, MaterialModule, MdboostrapModule],
  exports: [PathFinderComponent],
})
export class PathFinderModule {}
