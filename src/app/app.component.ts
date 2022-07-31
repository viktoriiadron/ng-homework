import { Component } from '@angular/core';
import { purpleHall } from './data/purpleHall';
import { DanсeHall } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework-app';
  hall: DanсeHall = purpleHall;
}
