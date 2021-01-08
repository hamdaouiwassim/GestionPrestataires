import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Searchform : FormGroup;
  message;
  prestataires : any ;
  
  constructor(private fb : FormBuilder , private router : Router ) { }

  ngOnInit(): void {
    this.Searchform = this.fb.group({
      type :'',
      gouvernourat : ''
     
    })
  }

  Search(){
    const formData = this.Searchform.getRawValue()
    const data = {
      type :formData.type,
      gouvernourat : formData.gouvernourat
     
    }

    this.router.navigate(['list/'+data.type+'/'+data.gouvernourat]);

   

  }

}
