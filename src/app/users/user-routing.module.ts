import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  UserHeaderComponent,
  LoginComponent,
  ProfileComponent,
  RegisterProfileComponent
} from './index';
import { AdminGuard } from '../admin/admin.guard';

const userRoutes: Routes = [
  {
    path: '',
    component: UserHeaderComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AdminGuard] },
      { path: 'register', component: RegisterProfileComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule  {

}
