import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import axios from 'axios';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-patprofile',
  templateUrl: './patprofile.component.html',
  styleUrls: ['./patprofile.component.css']
})
export class PatprofileComponent implements OnInit {
  urllink = './assets/image/patient.png';
  EditPatientForm : FormGroup;

  constructor(private fb : FormBuilder) { }
  image;
  nom ;
  prenom ;
  email ;
  password ;
  telephone ;
  ngOnInit(): void {
    const that = this
    axios.get('http://127.0.0.1:8000/userData',{ headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
     that.urllink = "http://localhost:8000/uploads/"+response.data.image;
     that.image = response.data.image;
     that.nom = response.data.nom;
     that.prenom = response.data.prenom;
     that.email = localStorage.getItem('userEmail');
     that.password = response.data.password;
     that.telephone = response.data.telephone;
  }).catch(function(error){
  
  })
  
    
    
  }  
  updateUser( f : NgForm ){
    const that = this
    var myFormData = new FormData();
    myFormData.append('image', that.image);
    myFormData.append('nom', that.nom);
    myFormData.append('prenom',  that.prenom);
    myFormData.append('email', that.email);
    myFormData.append('telephone', that.telephone);
    myFormData.append('password', that.password);

    

     
     axios.post('http://127.0.0.1:8000/UpdatePatient' , myFormData , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') , 'Content-Type': 'multipart/form-data' , 'Accept': 'application/json' } }).then(function(response){
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
