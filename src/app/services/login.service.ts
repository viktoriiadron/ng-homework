import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { users } from '../constants/users';
import { ICustomer } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public users: ICustomer[] = users;
  public currentUser: ICustomer | undefined;
  public currentUserName: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public isUserBirthday: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentCustomer: Subject<ICustomer> = new Subject<ICustomer> ();

  constructor() { }

  login(phone: string, password: string) {
    let user = this.users.find((user) => user.phoneNumber === phone);
    if (user) {
      if (user.password === password) {
        this.currentUser = user;
        this.currentCustomer.next(user);
        this.currentUserName.next(user.name);
        this.isUserBirthday.next(this.isBirthday());
        this.getCurrentCustomer();
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
    return this.currentUser ? this.currentUser : null
  }

  isBirthday(): boolean {
    if (this.currentUser) {
      let birthDay = new Date(this.currentUser?.birth).getDate();
      let birthMonth = new Date(this.currentUser?.birth).getMonth();
      let currentDay = new Date().getDate();
      let currentMonth = new Date().getMonth();
      if (birthDay === currentDay && birthMonth === currentMonth) {
        return true;
      } else {
        return false
      };
    } else return false;
  }

  logout() {
    this.currentUser = undefined;
    this.currentUserName.next('');
    this.isUserBirthday.next(false);
  }

  getCurrentCustomer(): Observable<ICustomer> {
    return this.currentCustomer;
  }
}
