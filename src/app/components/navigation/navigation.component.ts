import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from 'src/app/interfaces/interfaces';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentCustomer: Observable<ICustomer>;
  customerBalance: number;

  constructor(public loginService: LoginService,
    public accountService: AccountService) { 
    this.accountService = accountService;
    this.loginService = loginService;
    this.currentCustomer = this.loginService.getCurrentCustomer();
    this.currentCustomer.subscribe(user => {
      this.customerBalance = user.ammount;
    });
  }
 
  public userName = this.loginService.currentUserName;
  public birthday = this.loginService.isUserBirthday;
  public ammount: number = 0;


  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }

  topUp() {
    if (this.ammount >= 0) {
      this.accountService.topUpAccount(this.ammount);
      this.ammount = 0;
    } else alert('Sum should be positive');
  }

}
