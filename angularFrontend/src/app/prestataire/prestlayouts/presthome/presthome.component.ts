import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presthome',
  templateUrl: './presthome.component.html',
  styleUrls: ['./presthome.component.css']
})
export class PresthomeComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
