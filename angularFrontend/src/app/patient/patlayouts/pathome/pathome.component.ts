import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pathome',
  templateUrl: './pathome.component.html',
  styleUrls: ['./pathome.component.css']
})
export class PathomeComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

 

}
