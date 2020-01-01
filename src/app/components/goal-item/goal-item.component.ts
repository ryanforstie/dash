import { Component, OnInit, Input } from "@angular/core";
import { Goal } from "src/app/models/goal";

@Component({
  selector: "app-goal-item",
  templateUrl: "./goal-item.component.html",
  styleUrls: ["./goal-item.component.css"]
})
export class GoalItemComponent implements OnInit {
  @Input() goal: Goal;

  constructor() {}

  ngOnInit() {}

  onToggle(goal) {
    goal.completed = !goal.completed;
  }

  onDelete(goal) {
    console.log("delete");
  }
}
