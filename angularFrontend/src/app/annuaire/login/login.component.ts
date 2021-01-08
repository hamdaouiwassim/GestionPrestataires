import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  token=null;
  errors : any = [];
  user;
  constructor(private fb : FormBuilder , private router : Router) { }

  ngOnInit(): void {



   if (localStorage.getItem('token')){
      if (localStorage.getItem('userRole')){
                if (localStorage.getItem('userRole') == 'patient'){
                  this.router.navigate(['patHome']);
                }else if(localStorage.getItem('userRole') == 'prestataire'){
                  this.router.navigate(['prestHome']);
                }else{
                  this.router.navigate(['adminHome']);
                }
      }
   
   }
    


    this.formLogin= this.fb.group({
      email : '',
      password : ''
    })
  }
  //const that = this
  login(){
    const that = this
    const formData = this.formLogin.getRawValue();
    const data = {
      email : formData.email ,
      password : formData.password ,
     
    }
    
    axios.post('http://127.0.0.1:8000/login',data).then( function(response){
      console.log(response.data)
    localStorage.setItem('token', response.data.access_token)        
    localStorage.setItem('userRole', response.data.user.role )
    localStorage.setItem('userId', response.data.user.id )
    localStorage.setItem('userEmail', response.data.user.email )
    if (response.data.user.role == 'patient'){
      that.router.navigate(['patHome']);
      

    }else if(response.data.user.role == 'prestataire'){
      that.router.navigate(['prestHome']);
    }else{
      that.router.navigate(['adminHome']);
    }       
     
      

    }).catch(function(error){
      console.log(error)
    })
  
    

  }
}
