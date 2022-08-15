import { Injectable } from '@angular/core';
import { users } from '../constants/users';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public users: User[] = users;

  constructor() { 
  }

  createID(): number {
    return this.users.length + 1;
  }

  getUsers(): User[] {
    console.log(this.users);
    return this.users;
  }

  addUser(id: number, name: string, phoneNumber: string, email: string) {
    this.users.push(new User(id, name, phoneNumber, email));
  }
}
