import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    const token = localStorage.getItem('token')

    this.apiService.getTasks(token).subscribe({
      next: (response) => {

        this.tasks = response.data
        console.log(this.tasks)
      },
      error: (error) => {

        console.log(error)
      },
      complete: () => { }
    })
  }


}
