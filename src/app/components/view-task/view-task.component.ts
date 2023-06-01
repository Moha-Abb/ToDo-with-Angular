import { Component, Input } from '@angular/core';
// import { Task } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {

  @Input() task: any;

  constructor(private apiService: ApiService) {
    this.task = this.apiService.createTask();

  }
  ngOnInit(): void {
    console.log(this.task);
  }

  deleteTask(taskId: number) {

    this.apiService.deleteTask(taskId).subscribe({
      next: (data) => {
        console.log(data)
        alert('task deleted')
        window.location.reload();

      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('request completed')
      },
    })
  }
  // updateTask(taskId: number) {

  //   this.apiService.updateTask(taskId, task:task).subscribe({
  //     next: (data) => {
  //       console.log(data)
  //       alert('task deleted')
  //       window.location.reload();

  //     },
  //     error: (error) => {
  //       console.log(error)
  //     },
  //     complete: () => {
  //       console.log('request completed')
  //     },
  //   })
  // }
}
