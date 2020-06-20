import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatGridListModule, MatIconModule, MatButtonModule],
  exports: [MatGridListModule, MatIconModule, MatButtonModule],
})
export class MaterialModule {}
