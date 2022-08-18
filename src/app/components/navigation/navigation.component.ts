import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/constants/users';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public currentUser: string;
  isBirthday: boolean;

  public userName = this.loginService.currentUserName.subscribe((value) => this.currentUser = value);
  public birthday = this.loginService.isUserBirthday.subscribe((value) => this.isBirthday = value);
  //heeeeelp

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
}
