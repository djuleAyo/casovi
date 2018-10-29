import { Component, OnInit } from '@angular/core';
import { CasService } from '../cas/cas.service';

@Component({
  selector: 'app-zakazi',
  templateUrl: './zakazi.component.html',
  styleUrls: ['./zakazi.component.css']
})
export class ZakaziComponent implements OnInit {

  casovi;
  dummy = 'Java';
  constructor(
    private casService: CasService
  ) { }

  ngOnInit() {
    this.casovi = this.casService.getCasovi();

  }

  helloChange() {
    this.casService.selectByName(this.dummy);
  }

}
