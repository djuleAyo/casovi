import { Component, OnInit, ViewChild } from '@angular/core';
import { Cas } from './cas/cas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'casovi';
  currentView = 'home';

  selectedCas: Cas = undefined;

  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;

  ngOnInit() {
    // const mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  onNavClick(name: string) {
    this.currentView = name;
  }
  casSelected(cas: Cas) {
    this.selectedCas = cas;
  }
}
