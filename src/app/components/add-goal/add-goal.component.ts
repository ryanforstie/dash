import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-add-goal",
  templateUrl: "./add-goal.component.html",
  styleUrls: ["./add-goal.component.css"]
})
export class AddGoalComponent implements OnInit {
  @Output() addGoal: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const goal = {
      title: this.title,
      completed: false
    };
    this.addGoal.emit(goal);
  }
}
