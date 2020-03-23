import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;
  mouseoverLogin;

  constructor(private authSrv: AuthService, private router: Router) { }


  ngOnInit(): void {
  }

  login(formValues) {
    this.authSrv.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }

}
