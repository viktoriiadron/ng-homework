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

  login(phone: string, password: string): ICustomer | Error {
    let user = this.users.find((user) => user.phoneNumber === phone);
    if (user) {
      if (user._password === password) {
        return this.currentUser = user;
      } else throw new Error('wrong password');
    } else throw new Error('user do not exist');
  }

  getCurrentUser(): ICustomer | null {
    console.log(this.currentUser)
   return this.currentUser ? this.currentUser : null
  }
}
