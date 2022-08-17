import { Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService { 

  constructor(private store: StorageService) {
  }

  filterByName(name: string): ICustomer[] {
    const nameFilteredUsers = this.store.users.filter(user =>
      user.name.trim().toLowerCase() === name.trim().toLowerCase());
    console.log('filter works')
    return nameFilteredUsers;
  }

  filterByPhome(phone: string): ICustomer[] {
    const phoneFilteredUsers = this.store.users.filter(user =>
      user.phoneNumber.trim() === phone.trim());
    return phoneFilteredUsers;
  }
}
