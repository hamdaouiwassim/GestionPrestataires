import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-patdashboard',
  templateUrl: './patdashboard.component.html',
  styleUrls: ['./patdashboard.component.css']
})
export class PatdashboardComponent implements OnInit {
  //search : String;
  prestataires : any;
  constructor() { }

  ngOnInit(): void {
    const that = this
    axios.get('http://127.0.0.1:8000/prestataireGetAll' , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      that.prestataires = response.data;
    }).catch(function(error){
      
    })
  }
  getPrestatire(search){
    const that = this
   axios.get('http://127.0.0.1:8000/prestataireByName/'+search , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
    that.prestataires = response.data;
    }).catch(function(error){
      
    })
  }

}
