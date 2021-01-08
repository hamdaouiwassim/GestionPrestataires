import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors;
  constructor() { }

  ngOnInit(): void {
    const that = this 
    axios.get('http://127.0.0.1:8000/getDoctors', { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
          that.doctors = response.data;
         
    }).catch(function(){

    })
  }

}
