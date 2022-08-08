import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  store: StorageService

  constructor(store: StorageService) { 
    this.store = store;
  }

  sortByName(): User[] {
    const sortedUsers = this.store.users.sort(
      (a: User, b: User) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1);
    return sortedUsers;
  }

  sortById(): User[] {
    const sortedUsers = this.store.users.sort(
      (a: User, b: User) => a.id > b.id ? 1 : -1);
    return sortedUsers;
  }
}
