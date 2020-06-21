import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PathFinderModule } from "./path-finder/path-finder.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { MdboostrapModule } from "./mdboostrap/mdboostrap.module";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PathFinderModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdboostrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
