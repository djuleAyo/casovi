import { Component, OnInit } from '@angular/core';

import { Schedule } from './schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedule = new Schedule();

  constructor() { }

  ngOnInit() {
    const now = new Date();
    const res = this.schedule.getSchedule();

    for (const x of res) {
      console.log( x['state'] );
    }
  }

}
