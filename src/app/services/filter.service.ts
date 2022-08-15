import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService { 

  store: StorageService

  constructor(store: StorageService) {
    this.store = store
  }

  filterByName(name: string): User[] {
    const nameFilteredUsers = this.store.users.filter(user =>
      user.name.trim().toLowerCase() === name.trim().toLowerCase());
    console.log('filter works')
    return nameFilteredUsers;
  }

  filterByPhome(phone: string): User[] {
    const phoneFilteredUsers = this.store.users.filter(user =>
      user.phoneNumber.trim() === phone.trim());
    return phoneFilteredUsers;
  }
}
