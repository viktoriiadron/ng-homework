import { Injectable } from '@angular/core';
import { users } from '../constants/users';
import { ICustomer } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public users: ICustomer[] = users;
  public currentUser: ICustomer;

  constructor() { }

  login(phone: string, password: string) {
    let user = this.users.find((user) => user.phoneNumber === phone);
    if (user) {
      if (user._password === password) {
        this.currentUser = user
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

  isBirthday(): boolean {
    let birthDay = new Date(this.currentUser?.birth).getDate();
    let birthMonth = new Date(this.currentUser?.birth).getMonth();
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();
    if (birthDay === currentDay && birthMonth === currentMonth) {
      return true;
    } else return false;
  }
}
