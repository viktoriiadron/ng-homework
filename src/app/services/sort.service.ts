import { Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private store: StorageService) { 
  }

  sortByName(): ICustomer[] {
    return this.store.users.sort(
      (a: ICustomer, b: ICustomer) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  }

  sortById(): ICustomer[] {
    return this.store.users.sort(
      (a: ICustomer, b: ICustomer) => a.id > b.id ? 1 : -1);
  }
}
