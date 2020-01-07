import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Goal } from "src/app/models/goal";
import { GoalService } from "../../services/goal.service";

@Component({
  selector: "app-goal-item",
  templateUrl: "./goal-item.component.html",
  styleUrls: ["./goal-item.component.css"]
})
export class GoalItemComponent implements OnInit {
  @Input() goal: Goal;
  @Output() deleteGoal: EventEmitter<Goal> = new EventEmitter();

  constructor(private goalService: GoalService) {}

  ngOnInit() {}

  onToggle(goal) {
    // Toggle in UI
    goal.completed = !goal.completed;
    // Toggle on server
    this.goalService.toggleCompleted(goal).subscribe(goal => {
      console.log(goal);
    });
  }

  onDelete(goal) {
    this.deleteGoal.emit(goal);
  }
}
