import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css']
})

export class RegisterProfileComponent implements OnInit {
  profileForm: FormGroup;
  private userName: FormControl;
  private password: FormControl;
  private firstName: FormControl;
  private lastName: FormControl;
  private email: FormControl;
  private city: FormControl;
  private state: FormControl;
  private country: FormControl;


  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.userName = new FormControl(this.userName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.password = new FormControl(this.password, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.firstName = new FormControl(this.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.email = new FormControl(this.email, Validators.required);
    this.city = new FormControl(this.city, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.state = new FormControl(this.state, [Validators.pattern('[a-zA-Z].*')]);
    this.country = new FormControl(this.country, [Validators.required, Validators.pattern('[a-zA-Z].*')]);


    this.profileForm = new FormGroup({
      userName: this.userName,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      city: this.city,
      state: this.state,
      country: this.country
    });
  }

  validateUserName() {
    return this.userName.valid || this.userName.untouched;
  }

  validatePassword() {
    return this.password.valid || this.password.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateEmail() {
    return this.email.valid || this.email.untouched;
  }

  validateCity() {
    return this.city.valid || this.city.untouched;
  }

  validateState() {
    return this.state.valid || this.state.untouched;
  }

  validateCountry() {
    return this.country.valid || this.country.untouched;
  }


  cancel() {
    this.router.navigate(['']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.registerUser(formValues.userName, formValues.password, formValues.firstName, formValues.lastName, formValues.email, formValues.city, formValues.state, formValues.country);
      this.router.navigate(['']);
    }
  }

}
