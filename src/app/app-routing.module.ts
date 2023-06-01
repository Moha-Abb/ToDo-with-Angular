import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewTodosComponent } from './pages/view-todos/view-todos.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home', component: HomeComponent,
    title: 'Home - ToDo Manager'
  },
  {
    path: 'view-todo', component: ViewTodosComponent,
    title: 'viewToDO - ToDo Manager'
  },
  {
    path: 'add-todo', component: AddTodoComponent,
    title: 'AddToDo - ToDo Manager'
  },
  {
    path: 'update-todo/:id', component: UpdateTodoComponent,
    title: 'UpdateToDo - ToDo Manager'
  },
  {
    path: 'login', component: LoginComponent,
    title: 'Login - ToDo Manager'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
