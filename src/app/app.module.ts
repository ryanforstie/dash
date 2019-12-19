import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WinnerComponent } from './winner/winner.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, DashboardComponent, WinnerComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
