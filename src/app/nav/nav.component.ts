import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn = true;
  @Output() navClick = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onNavClick(link: String) {
    this.navClick.emit(link);
  }

}
