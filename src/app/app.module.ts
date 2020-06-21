import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PathFinderModule } from "./path-finder/path-finder.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { MdboostrapModule } from "./mdboostrap/mdboostrap.module";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
  declarations: [AppComponent, NavigationComponent],
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
