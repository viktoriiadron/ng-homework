import { Component, Input, OnInit } from '@angular/core';
import { DanceSchool } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-dance-school',
  templateUrl: './dance-school.component.html',
  styleUrls: ['./dance-school.component.css']
})
export class DanceSchoolComponent implements OnInit {

  @Input() danceSchool: DanceSchool;

  constructor() { }

  ngOnInit(): void {
  }

}
