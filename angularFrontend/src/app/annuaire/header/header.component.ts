import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  header = false;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.header)
    this.isLoggedIn()
  }

  isLoggedIn(){
    const that = this 
    if (localStorage.getItem('token')){
      that.header = true;
    }
    
  }

}
