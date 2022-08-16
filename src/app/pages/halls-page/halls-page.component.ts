import { Component, OnInit } from '@angular/core';
import { danceHalls } from 'src/app/data/danceHalls';
import { danceSchool } from 'src/app/data/danceSchool';
import { DanceSchool, DanсeHall } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-halls-page',
  templateUrl: './halls-page.component.html',
  styleUrls: ['./halls-page.component.css']
})
export class HallsPageComponent {

  title = 'homework-app';
  danceHalls: DanсeHall[] = danceHalls;
  danceSchool: DanceSchool = danceSchool;
}
