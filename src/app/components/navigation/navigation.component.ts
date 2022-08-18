import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public userName: string | undefined = this.loginService.getCurrentUser()?.name;
  public birthday: boolean = this.loginService.isBirthday();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  logger() {
    console.log('hi')
    if (this.userName) {
      console.log(this.userName)
    }
  }


  // isBirthday() {
  //   let birthDay = new Date(this.loginService.currentUser.birth).getDate();
  //   let birthMonth = new Date(this.loginService.currentUser.birth).getMonth();
  //   let currentDay = new Date().getDate();
  //   let currentMonth = new Date().getMonth();
  //   birthDay === currentDay && birthMonth === currentMonth ?
  //     this.birthday = true : this.birthday = false;
  // }
}
