import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-prestataire-consultation',
  templateUrl: './prestataire-consultation.component.html',
  styleUrls: ['./prestataire-consultation.component.css']
})
export class PrestataireConsultationComponent implements OnInit {
consultations;
  constructor() { }

  ngOnInit(): void {
    const that = this
    axios.get('http://127.0.0.1:8000/consultationsPrestataire' , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      //console.log(response)
      that.consultations = response.data;
      
    }).catch(function(error){
      
    })
  }

}
