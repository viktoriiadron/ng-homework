import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorMessege: string | undefined;
  isLoggedIn: boolean = !!this.loginService.getCurrentUser();

  loginForm = new FormGroup({
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.pattern('^\\+380[0-9]{9}$')
    ]),
    password: new FormControl<string>('', [
      Validators.required
    ])
  })

  get formEnterControl() {
    return this.loginForm.controls.phone && this.loginForm.controls.password as FormControl
  }

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  submit() {
    let phone = this.loginForm.value.phone?.trim();
    let password = this.loginForm.value.password?.trim();
    if (phone && password) {
      let result = this.loginService.login(phone, password);
      if (!result.loggedIn) {
        this.errorMessege = result.errorMessege;
      } else this.isLoggedIn = true;
    }
  }
}