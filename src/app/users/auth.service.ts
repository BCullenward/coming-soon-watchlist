import { Injectable } from '@angular/core';
import { IUserProfile } from './user-interface.model';
import userdata from '../../dataaccess/users.json';
import userprofiledata from '../../dataaccess/user-profile.json';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUserProfile;

  //logs user in
  loginUser(userName: string, password: string) {
    userName = "Steve55";

    this.currentUser = this.getUserProfile(userName);
  }

  // builds user profile from two json files
  getUserProfile(userName): IUserProfile {
    const usrdata = userdata;
    const usrprofiledata = userprofiledata;
    const User: IUserProfile[] = usrprofiledata.map(x => Object.assign(x, usrdata.find(y => y.id == x.id)));

    return User.find(y => y.username == userName);
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string, email: string, city: string, state: string, country: string) {
    this.currentUser.firstname = firstName;
    this.currentUser.lastname = lastName;
    this.currentUser.email = email;
    this.currentUser.location.city = city;
    this.currentUser.location.state = state;
    this.currentUser.location.country = country;
  }

  registerUser(userName: string, password: string, firstName: string, lastName: string, email: string, city: string, state: string, country: string) {
    //TODO: this data will need to be put into the two different data sets then a call to combine them to be the auth user will need to be called.

    const newUser: IUserProfile = {
      id: this.getNextUserID(),
      username: userName,
      firstname: firstName,
      lastname: lastName,
      email: email,
      location: {
        city: city,
        state: state,
        country: country
      }
    }

    this.currentUser = newUser;
  }

  getNextUserID(): number {
    const usrdata = userdata;
    const maxid = Math.max.apply(Math, usrdata.map(function (o) { return o.id; }));
    return maxid + 1;
  }

}




