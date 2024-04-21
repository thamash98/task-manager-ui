import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  tasks: task[] = [
    {
      id: 1,
      title: 'hello',
      description: 'juhgugurvh uhuhuhr',
      duedate: '2022-04-07'
    },
    {
      id: 2,
      title: 'hello',
      description: 'juhgugurvh uhuhuhr',
      duedate: '2022-04-07'
    },
    {
      id: 3,
      title: 'hello',
      description: 'juhgugurvh uhuhuhr',
      duedate: '2022-04-07'
    }
  ];
  constructor(){}

  ngOnInit(): void {
    this.tasks.push()
  }
}
