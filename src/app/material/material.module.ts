import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatGridListModule, MatIconModule],
  exports: [MatGridListModule, MatIconModule],
})
export class MaterialModule {}
