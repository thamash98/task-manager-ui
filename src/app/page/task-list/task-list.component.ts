import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  tasks: task[] = [];
  constructor(private taskService: TasksService){}

  ngOnInit(): void {
    this.taskService.getAllTasks()
    .subscribe({
      next:(tasks) =>{
        this.tasks = tasks;
      },
      error:(Response) =>{
        console.log(Response);
      }
    })
  }
}
