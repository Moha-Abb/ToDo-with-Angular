import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpClient) { }

  url = 'http://localhost:1337'
  addTask(task: Task, token: any) {
    console.log(token)
    const payload = {
      data: task
    };
    const headers = {

      "Authorization": "Bearer " + token

    };
    return this.httpService.post(`${this.url}/api/taskangulars`, payload, { headers })

  }
  login(form: any) {

    return this.httpService.post(`${this.url}/api/auth/local/register`, form)
  }
  getUser(form: any) {
    return this.httpService.post(`${this.url}/api/auth/local`, form)
  }
  getTasks(token: any) {
    const headers = {

      "Authorization": "Bearer " + token

    };
    return this.httpService.get<any>(`${this.url}/api/taskangulars`, {
      headers
    })
  }
  deleteTask(taskId: number) {
    return this.httpService.delete(`${this.url}/api/taskangulars/${taskId}`)
  }
  getOneTask(taskId: any) {
    return this.httpService.get(`${this.url}/api/taskangulars/${taskId}`)
  }
  updateTask(taskId: number, task: Task) {
    const payload = {
      data: task // Coloca el objeto "task" dentro de un objeto llamado "data"
    };
    return this.httpService.put(`${this.url}/api/taskangulars/${taskId}`, payload)
  }

  createTask(): Task {
    return {

      id: 0,
      attributes: {
        title: '',
        content: '',
        complete: false
      }
    };
  }
}
