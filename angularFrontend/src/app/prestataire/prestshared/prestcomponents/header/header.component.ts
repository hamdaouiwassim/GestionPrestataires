import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  image;
  constructor(private router : Router) { }

  ngOnInit(): void {
    const that = this
    axios.get('http://127.0.0.1:8000/userData',{ headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
     
     that.image = response.data.image;
    
  }).catch(function(error){
  
  })
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  signOutUser(){
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
