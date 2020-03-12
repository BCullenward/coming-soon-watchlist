import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ProfileComponent,
  LoginComponent,
  NavUserComponent,
  UserHeaderComponent
} from './index';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent,
    NavUserComponent,
    UserHeaderComponent
  ],
  providers: [

  ]
})
export class UserModule { }
