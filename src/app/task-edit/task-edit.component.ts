import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  editTask: Task = new Task();

  saveTask() {
    this.taskDataService.editTask(this.editTask).subscribe(p => this.router.navigate(['list']));
  }

  constructor(private taskDataService: TaskDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.taskDataService.getTask(+param["id"]).subscribe(p => this.editTask = p)
    })
  }

}
