import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { task } from '../models/tasks.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllTasks() : Observable<task[]>{
    return this.http.get<task[]>(this.baseApiUrl + '/api/tasks')
  }

  addTask(addTaskRequest: task):Observable<task>{
    addTaskRequest.id = 0;
    return this.http.post<task>(this.baseApiUrl + '/api/tasks',
    addTaskRequest);
  }
}
