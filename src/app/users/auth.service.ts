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
    console.log('user: ', this.currentUser);
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

}




