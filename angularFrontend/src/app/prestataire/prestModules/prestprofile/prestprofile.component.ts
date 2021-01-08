import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import axios from 'axios';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-prestprofile',
  templateUrl: './prestprofile.component.html',
  styleUrls: ['./prestprofile.component.css']
})
export class PrestprofileComponent implements OnInit {
  urllink = '';
  //formEditUser : FormGroup;
  image = '';
  nomcomplet = '';
  email = '';
  password = '';
  description = '';
  type = '';
  
  gouvernourat = '';
  telephone  = '';

  constructor(  ) { }

  ngOnInit(): void {
    const that = this
    axios.get('http://127.0.0.1:8000/userData',{ headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
     that.urllink = "http://localhost:8000/uploads/"+response.data.image;
     that.image = response.data.image;
     that.nomcomplet = response.data.nomcomplet;
     that.email = localStorage.getItem('userEmail');
     that.description = response.data.description;
     that.type = response.data.type;
     that.gouvernourat = response.data.gouvernourat;
     that.telephone = response.data.telephone;
  }).catch(function(error){
  
  })
  
  }
  updateUser( f : NgForm ){
    const that = this
    var myFormData = new FormData();
    myFormData.append('image', that.image);
    myFormData.append('nomcomplet', that.nomcomplet);
    myFormData.append('email', that.email);
    myFormData.append('description',  that.description);
    myFormData.append('type', that.type);
    myFormData.append('gouvernourat', that.gouvernourat);
    myFormData.append('telephone', that.telephone);

    

     
     axios.post('http://127.0.0.1:8000/UpdatePrestataire' , myFormData , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') , 'Content-Type': 'multipart/form-data' , 'Accept': 'application/json' } }).then(function(response){
       //that.prestataires = response.data;
       //console.log(response)
       Swal.fire({
        title: 'Success',
        text: response.data.message ,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
       
     }).catch(function(error){
       
     })
              
                    


  }
  selectFiles(event){
    if(event.target.files){
      this.image = event.target.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.urllink = event.target.result
      }
    }
  }

}
