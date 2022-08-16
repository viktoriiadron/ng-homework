import { Injectable } from '@angular/core';
import { users } from '../constants/users';
import { ICustomer, Customer } from '../interfaces/interfaces';

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

  addUser(id: number, name: string, phoneNumber: string, email: string, password: string, birth: Date) {
    this.users.push(new Customer(id, name, phoneNumber, email, password, birth));
  }
}
