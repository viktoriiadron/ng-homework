import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private loginService: LoginService) { }

  topUpAccount(sum: number) {
    if (this.loginService.currentUser) {
      this.loginService.currentUser.ammount += sum;
      this.loginService.currentCustomer.next(this.loginService.currentUser);
    }
  }

  pay(sum: number) {
    if (this.loginService.currentUser) {
      if (this.loginService.currentUser.ammount >= sum) {
        this.loginService.currentUser.ammount -= sum;
        this.loginService.currentCustomer.next(this.loginService.currentUser);
        alert('Wait for you at classes');
      } else alert('Not enough money.');
    } 
  }
}
