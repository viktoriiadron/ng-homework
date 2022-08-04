import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DanсeHall } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-dance-hall',
  templateUrl: './dance-hall.component.html',
  styleUrls: ['./dance-hall.component.css']
})
export class DanceHallComponent implements OnInit {
  @Input() hall: DanсeHall;
  @Output() hallRent = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  public changeRentalStatus(value: boolean) {
    this.hallRent.emit(value);
  }

}
