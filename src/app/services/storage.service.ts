import { Injectable } from '@angular/core';
import { users } from '../constants/users';
import { ICustomer } from '../interfaces/interfaces';
import { Customer } from '../components/classes/classes';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public users: ICustomer[] = users;

  constructor() { 
  }

  createID(): number {
    return this.users.length + 1;
  }

  getUsers(): ICustomer[] {
    console.log(this.users);
    return this.users;
  }

  addUser(id: number, name: string, phoneNumber: string, email: string, birth: Date, password: string, hasSubscription: boolean) {
    this.users.push(new Customer(id, name, phoneNumber, email, birth, password, hasSubscription));
  }
}
