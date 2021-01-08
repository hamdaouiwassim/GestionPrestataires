import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.css']
})
export class HopitalComponent implements OnInit {
  hopital;
  constructor() { }

  ngOnInit(): void {
    const that = this 
    axios.get('http://127.0.0.1:8000/getHopitals', { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
          that.hopital = response.data;
         
    }).catch(function(){

    })
  }

}
