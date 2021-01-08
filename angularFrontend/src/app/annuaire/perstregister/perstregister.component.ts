
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import  axios from 'axios';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-perstregister',
  templateUrl: './perstregister.component.html',
  styleUrls: ['./perstregister.component.css']
})
export class PerstregisterComponent implements OnInit {

  form : FormGroup;
  message : any;
  errors : any = [];
  constructor( private fb : FormBuilder ){}
  ngOnInit(): void {
    this.form =this.fb.group({
      email : '',
      password : '',
      telephone : '',
      type :'',
      nomcomplet : '',
      adresse : '',
      gouvernourat : '',
      description : ''
    })

  }
  signup(){
    const formData = this.form.getRawValue()
    const data = {
      email : formData.email ,
      password : formData.password,
      telephone : formData.telephone,
      type :formData.type,
      nomcomplet : formData.nomcomplet,
      adresse : formData.adresse,
      gouvernourat : formData.gouvernourat,
      description : formData.description,
      role : 'prestataire'
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
