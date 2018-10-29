import { Component, OnInit, Input } from '@angular/core';
import { Cas } from '../cas.model';
import { CasService } from '../cas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cas-details',
  templateUrl: './cas-details.component.html',
  styleUrls: ['./cas-details.component.css']
})
export class CasDetailsComponent implements OnInit {

  cas: Cas;

  constructor(private casService: CasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cas = this.casService.getSelected();
    this.casService.selectedCas.subscribe((cas) => {
      this.cas = cas;
    });
    this.route.params.subscribe((params) => {
      this.casService.selectByUrl(params.cas);
    });
  }

}
