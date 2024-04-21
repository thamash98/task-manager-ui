import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { task } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskDetails: task = {
    id: 0,
    title : '',
    description : '',
    duedate : ''
  }

  constructor(private route: ActivatedRoute, private taskService: 
    TasksService,private router: Router){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id =params.get('id');

        if(id){
          this.taskService.getTaskById(id)
          .subscribe({
            next:(response) =>{
              this.taskDetails = response;
            }
          })
        }
      }
    })
  }

  updateTask(){
    this.taskService.updateTask(this.taskDetails.id.toString(),this.taskDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['task-list'])
      }
    });
  }

  // deleteTask(id:number){
  //   this.taskService.deleteTask(id)
  //   .subscribe({
  //     next:(response)=>{
  //       this.router.navigate(['task-list'])
  //     }
  //   });
  // }
}
