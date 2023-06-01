import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formReg: any;

  constructor(private apiService: ApiService, private router: Router) {

    this.formReg = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  login(event: Event) {

    event.preventDefault();
    console.log(this.formReg.value)
    this.apiService.login(this.formReg.value).subscribe({
      next: (data: any) => {
        console.log(data.jwt)
        localStorage.setItem('token', data.jwt)

        alert('Registrado')
        this.router.navigate(['/view-todo'])


      },
      error: (error) => {
        console.log(error)

        if (error.status == 400) {
          const emailControl = this.formReg.get('email');
          this.formReg.addControl('identifier', emailControl);
          this.formReg.removeControl('email');
          console.log(this.formReg.value)
          this.apiService.getUser(this.formReg.value).subscribe({
            next: (data: any) => {
              localStorage.setItem('token', data.jwt)
              console.log(data)

            },
            error: (error) => {
              console.log(error)
            }
          })
          this.router.navigate(['/view-todo'])
        }
      },
      complete: () => {
        console.log('Registro Completo')
      },
    })
  }
}
