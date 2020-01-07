import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { WinnerComponent } from "./components/winner/winner.component";
import { FroggysComponent } from "./components/froggys/froggys.component";
import { GoalsComponent } from "./components/goals/goals.component";
import { GoalItemComponent } from "./components/goal-item/goal-item.component";
import { AddGoalComponent } from "./components/add-goal/add-goal.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    WinnerComponent,
    FroggysComponent,
    GoalsComponent,
    GoalItemComponent,
    AddGoalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
