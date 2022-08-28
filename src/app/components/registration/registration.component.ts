import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private storage: StorageService) { 
  }

  registrationFrom = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    phone: new FormControl<string>('', [Validators.required, Validators.pattern('^\\+380[0-9]{9}$')]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    birthday: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
    subscribtion: new FormControl<boolean>(false)
  })

  isRegistered: boolean;
  registrationErrorMessege: string | null;

  ngOnInit(): void {
  }

  isUniquePhone(phone: string): boolean {
    return !this.storage.users.find(user => user.phoneNumber === phone);
  }

  isUniqueEmail(email: string) {
    if (this.storage.users.find(user => user.email === email)) {
      return false;
    } else return true;
  }

  register() {
    let form = this.registrationFrom.value;
    let name = form.name?.trim();
    let phoneNumber = form.phone;
    let email = form.email;
    let birth;
    form.birthday ? birth = new Date(form.birthday): null;
    let password = form.password;
    let hasSubscription = !!form.subscribtion;
    if (name && phoneNumber && email && birth && password) {
      if (this.isUniquePhone(phoneNumber)) {
        if (this.isUniqueEmail(email)) {
          this.storage.addUser(this.storage.createID(), name, phoneNumber, email, birth, password, hasSubscription);
          this.isRegistered = true;
          this.registrationErrorMessege = null;
          this.registrationFrom.reset();
          return null;
        } else return this.registrationErrorMessege = 'User with this email and/or phone number is already exist';
      } else return this.registrationErrorMessege = 'User with this email and/or phone number is already exist';
    }
    return null;
  }

  birthdayValidator(): boolean {
    return this.registrationFrom.controls['birthday'].invalid && this.registrationFrom.controls['birthday'].touched
  }

  emailValidator(): boolean {
    return this.registrationFrom.controls['email'].invalid && this.registrationFrom.controls['email'].touched
  }
}
