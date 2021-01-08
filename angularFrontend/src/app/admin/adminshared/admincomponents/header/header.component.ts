import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router : Router) { } @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();


  ngOnInit(): void {
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
  signOutUser(){
    localStorage.clear()
    this.router.navigate(['/login']);
  }



}
