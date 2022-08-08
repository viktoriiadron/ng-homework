import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public users: User[] = [
    {
      id: 1,
      name: 'Sonya',
      phoneNumber: '+312344564',
      email: 'sonya@mail.com'
    },
    {
      id: 2,
      name: 'Masha',
      phoneNumber: '+3123463564',
      email: 'Masha@mail.com'
    },
      {
      id: 3,
      name: 'Antonina',
      phoneNumber: '+33462344564',
      email: 'Antonina@mail.com'
    }
  ]

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
