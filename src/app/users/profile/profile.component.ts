import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private userName: FormControl;
  private firstName: FormControl;
  private lastName: FormControl;
  private email: FormControl;
  private city: FormControl;
  private state: FormControl;
  private country: FormControl;
  userID: number;

  constructor(private auth: AuthService, private router: Router) {

  }


  ngOnInit() {
    this.userName = new FormControl(this.auth.currentUser.username, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.firstName = new FormControl(this.auth.currentUser.firstname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastname, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.email = new FormControl(this.auth.currentUser.email, Validators.required);
    this.city = new FormControl(this.auth.currentUser.location.city, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.state = new FormControl(this.auth.currentUser.location?.state, [Validators.pattern('[a-zA-Z].*')]);
    this.country = new FormControl(this.auth.currentUser.location.country, [Validators.required, Validators.pattern('[a-zA-Z].*')]);

    this.profileForm = new FormGroup({
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      city: this.city,
      state: this.state,
      country: this.country
    });
  }

  getUserID() {
    return this.auth.currentUser.id;
  }

  validateUserName() {
    return this.userName.valid || this.userName.untouched;
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
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName, formValues.email, formValues.city, formValues.state, formValues.country);
      this.router.navigate(['']);
    }
  }


}
