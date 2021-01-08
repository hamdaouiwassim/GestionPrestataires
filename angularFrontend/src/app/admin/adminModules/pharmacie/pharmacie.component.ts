import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css']
})
export class PharmacieComponent implements OnInit {
  pharmacies;
  constructor() { }

  ngOnInit(): void {
    const that = this 
    axios.get('http://127.0.0.1:8000/getPharmacies', { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
          that.pharmacies = response.data;
         
    }).catch(function(){

    })
  }

}
