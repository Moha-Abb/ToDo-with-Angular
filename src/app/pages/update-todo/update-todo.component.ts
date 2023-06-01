import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  task: any;
  taskId: any | undefined;

  constructor(private apiService: ApiService, private ActivatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.taskId = this.ActivatedRoute.snapshot.paramMap.get('id')
    console.log(this.taskId)
    this.apiService.getOneTask(this.taskId).subscribe({
      next: (data) => {
        this.task = data;
        console.log(this.task)
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('request completed')
      },
    })


  }

  updateTask(event: SubmitEvent) {
    console.log(this.task)
    this.apiService.updateTask(this.taskId, this.task).subscribe({
      next: (data) => {
        console.log('task updated')
        console.log(data)

        this.task = data;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('request completed')
      },
    })
  }

}
