import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    phone: new FormControl<string>('', [
      Validators.required
    ]),
    password: new FormControl<string>('', [
      Validators.required
    ])
  })

  loginService: LoginService;

  get formEnterControl() {
    return this.loginForm.controls.phone && this.loginForm.controls.password as FormControl
  } 

  constructor(loginService: LoginService) { 
    this.loginService = loginService
  }

  ngOnInit(): void {
  }

  submit()  {
    let phone  = this.loginForm.value.phone;
    let password  = this.loginForm.value.password;
    if (phone && password) {
      this.loginService.login(phone, password);
    }
  }

}
