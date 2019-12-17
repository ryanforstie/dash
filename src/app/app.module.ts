import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";

import { AppComponent } from "./app.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
  declarations: [AppComponent, SidenavComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
