import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './page/task-list/task-list.component';
import { TaskFormComponent } from './page/task-form/task-form.component';
import { EditTaskComponent } from './page/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: 'task-list',
    component: TaskListComponent
  },
  {
    path: 'task-list/form',
    component: TaskFormComponent
  },
  {
    path: 'task-list/edit/:id',
    component: EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
