import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  Laboratory;
  Doctor;
  Clinical;
  Hospital;
  Pharmacy;
  constructor() { }

  ngOnInit(): void {
    const that = this 
    axios.get('http://127.0.0.1:8000/DashAdmin', { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
          that.Clinical = response.data[0];
          that.Doctor = response.data[1];
          that.Hospital= response.data[2];
          that.Laboratory= response.data[3];
          that.Pharmacy= response.data[4];
    }).catch(function(){

    })
  }

}
