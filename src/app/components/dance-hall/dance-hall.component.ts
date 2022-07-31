import { Component, Input, OnInit } from '@angular/core';
import { DanсeHall } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-dance-hall',
  templateUrl: './dance-hall.component.html',
  styleUrls: ['./dance-hall.component.css']
})
export class DanceHallComponent implements OnInit {
  @Input() hall: DanсeHall;

  constructor() { }

  ngOnInit(): void {
  }

}
