import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  getTasks() {
    this.taskDataService.getTasks().subscribe(p => (this.tasks = p));
  }

  deleteTask(id: number) {
    this.taskDataService.deleteTask(id).subscribe(p => this.getTasks());
  }

  constructor(private taskDataService: TaskDataService) { }

  ngOnInit(): void {
    this.getTasks();
  }

}
