import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { WinnerComponent } from "./components/winner/winner.component";
import { FroggysComponent } from "./components/froggys/froggys.component";
import { GoalsComponent } from "./components/goals/goals.component";
import { GoalItemComponent } from './components/goal-item/goal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    WinnerComponent,
    FroggysComponent,
    GoalsComponent,
    GoalItemComponent
  ],
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
