import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-laboratoire',
  templateUrl: './laboratoire.component.html',
  styleUrls: ['./laboratoire.component.css']
})
export class LaboratoireComponent implements OnInit {
  laboratoires;
  constructor() { }

  ngOnInit(): void {
    const that = this 
    axios.get('http://127.0.0.1:8000/getLaboratoires', { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
          that.laboratoires = response.data;
         
    }).catch(function(){

    })
  }

}
