import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import {
  NavbarModule,
  WavesModule,
  ButtonsModule,
  CollapseModule,
} from "angular-bootstrap-md";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  exports: [
    MDBBootstrapModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    CollapseModule,
  ],
})
export class MdboostrapModule {}
