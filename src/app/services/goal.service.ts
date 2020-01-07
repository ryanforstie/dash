import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Goal } from "../models/goal";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class GoalService {
  goalsUrl: string = "https://jsonplaceholder.typicode.com/todos";
  goalsLimit = "?_limit=5";

  constructor(private http: HttpClient) {}

  // Get Goals
  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${this.goalsUrl}${this.goalsLimit}`);
  }

  // Delete Goal
  deleteGoal(goal: Goal): Observable<Goal> {
    const url = `${this.goalsUrl}/${goal.id}`;
    return this.http.delete<Goal>(url, httpOptions);
  }

  // Add Goal
  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.goalsUrl, goal, httpOptions);
  }

  // Toggle Completed
  toggleCompleted(goal: Goal): Observable<any> {
    const url = `${this.goalsUrl}/${goal.id}`;
    return this.http.put(url, goal, httpOptions);
  }
}
