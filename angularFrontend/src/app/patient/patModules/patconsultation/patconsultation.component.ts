import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-patconsultation',
  templateUrl: './patconsultation.component.html',
  styleUrls: ['./patconsultation.component.css']
})
export class PatconsultationComponent implements OnInit {
  consultations : any ;
  constructor() { }

  ngOnInit(): void {
    const that = this;
    axios.get('http://127.0.0.1:8000/getConsultationByUser', { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      that.consultations = response.data;
    
    }).catch(function(error){
      
    })
  }

}
