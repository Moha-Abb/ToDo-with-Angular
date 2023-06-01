import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  task: any;
  loader: any;
  constructor(private apiService: ApiService) {
    this.task = this.apiService.createTask();

  }

  taskForm(event: FormDataEvent) {
    const token = localStorage.getItem('token')

    this.loader = true;
    event.preventDefault();
    console.log(token)
    console.log(this.task.attributes);
    this.apiService.addTask(this.task.attributes, token).subscribe({
      next: (data) => {
        console.log(data)
        alert('task added')
        this.task = this.apiService.createTask();

      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('request completed')
        this.loader = false;
      },
    })

  }
}
