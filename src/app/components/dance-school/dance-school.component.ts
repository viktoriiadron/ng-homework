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

  constructor(a: StorageService, b: FilterService, c: SortService) {
    a.getUsers();
    a.addUser(a.createID(),'rerg', 'ergerg', 'reger');
    a.getUsers();
    b.filterByName('masha');
    console.log(c.sortByName());
    console.log(c.sortById());
   }

  ngOnInit(): void {
  }

}
