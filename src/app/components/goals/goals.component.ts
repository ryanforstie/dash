import { Component, OnInit } from "@angular/core";
import { GoalService } from "../../services/goal.service";
import { Goal } from "../../models/goal";

@Component({
  selector: "app-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.css"]
})
export class GoalsComponent implements OnInit {
  goals: Goal[];

  constructor(private goalService: GoalService) {}

  ngOnInit() {
    this.goalService.getGoals().subscribe(goals => {
      this.goals = goals;
    });
  }

  deleteGoal(goal: Goal) {
    // Delete in UI
    this.goals = this.goals.filter(g => g.id !== goal.id);
    // Delete from server
    this.goalService.deleteGoal(goal).subscribe();
  }

  addGoal(goal: Goal) {
    this.goalService.addGoal(goal).subscribe(goal => {
      this.goals.push(goal);
    });
  }
}
