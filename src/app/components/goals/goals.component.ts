import { Component, OnInit } from "@angular/core";
import { GOALS } from "../../mock-goals";

@Component({
  selector: "app-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.css"]
})
export class GoalsComponent implements OnInit {
  goals = GOALS;

  constructor() {}

  ngOnInit() {}
}
