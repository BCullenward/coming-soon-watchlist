import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ProfileComponent,
  LoginComponent,
  NavUserComponent,
  UserHeaderComponent
} from './index';
import { UserRoutingModule } from './user-routing.module';
import { RegisterProfileComponent } from './profile/register-profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent,
    NavUserComponent,
    UserHeaderComponent,
    RegisterProfileComponent
  ],
  providers: [

  ]
})
export class UserModule { }
