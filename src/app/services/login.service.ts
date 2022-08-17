import { Injectable } from '@angular/core';
import { users } from '../constants/users';
import { ICustomer } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public users: ICustomer[] = users;
  public currentUser: ICustomer;
  // public isLoggedIn: {
  //   loggedIn: boolean,
  //   errorMessege?: string 
  // }

  constructor() { }

  login(phone: string, password: string) {
    let user = this.users.find((user) => user.phoneNumber === phone);
    if (user) {
      if (user._password === password) {
        this.currentUser = user;
        return {
          loggedIn: true,
        };
      } else return {
        loggedIn: false,
        errorMessege: 'wrong password'
      }
    } else return {
      loggedIn: false,
      errorMessege: 'user does not exist'
    }
  }

  getCurrentUser(): ICustomer | null {
    console.log(this.currentUser)
   return this.currentUser ? this.currentUser : null
  }
}
