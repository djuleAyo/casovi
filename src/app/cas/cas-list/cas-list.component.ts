import { Component, OnInit, Output } from '@angular/core';
import { Cas } from '../cas.model';
import { CasService } from '../cas.service';

@Component({
  selector: 'app-cas-list',
  templateUrl: './cas-list.component.html',
  styleUrls: ['./cas-list.component.css']
})
export class CasListComponent implements OnInit {

  casovi: Array<Cas>;

  constructor(private casService: CasService) {}

  ngOnInit() {
    this.casovi = this.casService.getCasovi();
  }
  selectCas(cas: Cas) {
    this.casService.selectCas(cas);
  }
}
