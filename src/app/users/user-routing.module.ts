import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  UserHeaderComponent,
  LoginComponent,
  ProfileComponent
} from './index';

const userRoutes: Routes = [
  {
    path: '',
    component: UserHeaderComponent,
    children: [
      //{ path: '', component: UserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
