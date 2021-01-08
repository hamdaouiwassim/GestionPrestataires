import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-prestataire-dashboard',
  templateUrl: './prestataire-dashboard.component.html',
  styleUrls: ['./prestataire-dashboard.component.css']
})
export class PrestataireDashboardComponent implements OnInit {
  consultations;
  rdvs;
  patients;
  constructor() { }

  ngOnInit(): void {
    const that = this
    axios.get('http://127.0.0.1:8000/dashPrestataire' , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      //console.log(response)
      that.consultations = response.data[2];
      that.patients = response.data[1];
      that.rdvs = response.data[0];
    }).catch(function(error){
      
    })
  }

}
