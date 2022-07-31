import { Component } from '@angular/core';
import { DanсeHall } from './interfaces/interfaces';
import { danceHalls } from './data/danceHalls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework-app';
  danceHalls: DanсeHall[] = danceHalls;
}
