import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients;
  constructor() { }

  ngOnInit(): void {
    const that = this
    axios.get('http://127.0.0.1:8000/patientsPrestataire' , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      that.patients = response.data;
      //console.log(response)
      //that.consultations = response.data;
      
    }).catch(function(error){
      
    })
  }

}
