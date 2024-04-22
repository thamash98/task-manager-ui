import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit{

  addTaskRequest: task={
    id: 0,
    title : '',
    description : '',
    DueDate : '',
    _DueDate: ''
  }
  constructor(private taskService: TasksService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  addTask(){
    this.taskService.addTask(this.addTaskRequest)
    .subscribe({
      next:(task) =>{
        this.router.navigate(['task-list'])
      },
      error:(Response) =>{
        console.log(Response);
      }
    })
  }
}
