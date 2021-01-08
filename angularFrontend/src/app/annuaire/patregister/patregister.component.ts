import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import  axios from 'axios';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-patregister',
  templateUrl: './patregister.component.html',
  styleUrls: ['./patregister.component.css']
})
export class PatregisterComponent implements OnInit {
  form : FormGroup;
  message : any;
  errors : any = [];
  constructor( private fb : FormBuilder ){}
  ngOnInit(): void {
    this.form =this.fb.group({
      email : '',
      password : '',
      telephone : '',
      nom :'',
      prenom : ''
      
    })

  }
  signup(){
    const formData = this.form.getRawValue()
    const data = {
      nom : formData.nom ,
      prenom : formData.prenom,
      email : formData.email ,
      password : formData.password,
      telephone : formData.telephone,
      role : 'patient'
    }
     // console.log(this.form.getRawValue())
    const that = this
    axios.post('http://localhost:8000/register',data).then(function (response) {
      // handle success
      if (response.status == 201 ){
        that.errors = response.data;
      }else{
        console.log(response.data.message)
        that.message = response.data.message;
        console.log(that.message);
        Swal.fire({
          title: 'Success',
          text: that.message,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        that.form.reset()
        that.errors = null;
      }
         

         
    })
    .catch(function (error) {
      // handle error
      //console.log(error[0])
      that.message = "Something went wrong";
      Swal.fire({
        title: 'Error!',
        text: that.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      that.form.reset()
      that.errors = null;

    })
    // fin axios
  }

}
