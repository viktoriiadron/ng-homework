import { Component, Input, OnInit } from '@angular/core';
import { DanceSchool } from 'src/app/interfaces/interfaces';
import { FilterService } from 'src/app/services/filter.service';
import { SortService } from 'src/app/services/sort.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dance-school',
  templateUrl: './dance-school.component.html',
  styleUrls: ['./dance-school.component.css']
})
export class DanceSchoolComponent implements OnInit {

  @Input() danceSchool: DanceSchool;

  constructor() {
   }

  ngOnInit(): void {
  }

}
