import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import {
  NavbarModule,
  WavesModule,
  ButtonsModule,
  CollapseModule,
  IconsModule,
} from "angular-bootstrap-md";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    WavesModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    IconsModule,
  ],
  exports: [
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CollapseModule,
    IconsModule,
  ],
})
export class MdboostrapModule {}
