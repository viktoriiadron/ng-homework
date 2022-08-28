import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DanсeHall } from 'src/app/interfaces/interfaces';
import { AccountService } from 'src/app/services/account.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dance-hall',
  templateUrl: './dance-hall.component.html',
  styleUrls: ['./dance-hall.component.css']
})
export class DanceHallComponent implements OnInit {

  color = '';
  condition = false;
  event: EventEmitter<boolean>;

  @Input() hall: DanсeHall;

  @Output() hallRent = new EventEmitter<boolean>();

  constructor(
    private accountService: AccountService,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public changeRentalStatus(value: boolean, sum: number): void {
    if (this.loginService.currentUser) {
      if (this.hall.isEmpty) {
        this.hallRent.emit(value);
        this.accountService.pay(sum);
      } else {
        this.accountService.topUpAccount(this.hall.priceForRent);
        this.hallRent.emit(value);
      }
    } else alert('Please log in');
  }

  public pay(number: number): void {
    if (this.loginService.currentUser) {
      this.accountService.pay(number);
      
    } else alert('Please log in');
  }
}
