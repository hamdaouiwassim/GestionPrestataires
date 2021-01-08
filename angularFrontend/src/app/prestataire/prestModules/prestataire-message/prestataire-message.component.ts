import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-prestataire-message',
  templateUrl: './prestataire-message.component.html',
  styleUrls: ['./prestataire-message.component.css']
})
export class PrestataireMessageComponent implements OnInit {
  urllink = './assets/image/form.txt';
  selectFiles(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.urllink = event.target.result
      }
    }
  }
  SendMessageForm : FormGroup;
  prestataires;
  messages;
  patients;
  constructor(private modalService: NgbModal ,private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.SendMessageForm = this.fb.group({
      name : '',
      file : '',
      receiver : '',
      content : ''
    })
    this.getAllPrestataires()
    this.getAllPatients()
    this.getPrestataireMessages()
  }
  getPrestataireMessages(){
    const that = this
    axios.get('http://127.0.0.1:8000/getPrestataireMessages'  , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      console.log(response)
      that.messages = response.data;
    }).catch(function(error){
      
    })
  }

  getAllPatients(){
    const that = this
    axios.get('http://127.0.0.1:8000/patientGetAll'  , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      console.log(response)
   
      that.patients = response.data;
       
   
    }).catch(function(error){
      
    })

  }
  getAllPrestataires(){
    const that = this
    axios.get('http://127.0.0.1:8000/prestataireGetAll'  , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      console.log(response)
   
      that.prestataires = response.data;
       
   
    }).catch(function(error){
      
    })

  }
  open(content) {
    //alert(id)
    const that = this
    //that.idConfirmRdv = id;
    //this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  SendMessage(){
    const that = this 
    const formData = this.SendMessageForm.getRawValue()
    const data = {

      name : formData.name ,
      file : formData.file ,
      receiver : formData.receiver ,
      content : formData.content ,
      type : 'pres-pat'
    }



    axios.post('http://127.0.0.1:8000/sendMessage', data  , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      //console.log(response)
      
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      //that.prestataires = response.data;
      this.getAllPrestataires()
      this.getAllPatients()
      this.getPrestataireMessages()
   
    }).catch(function(error){
      
    })
  }

  SendMessageP(){
    const that = this 
    const formData = this.SendMessageForm.getRawValue()
    const data = {

      name : formData.name ,
      file : formData.file ,
      receiver : formData.receiver ,
      content : formData.content ,
      type : 'pres-pres'
    }



    axios.post('http://127.0.0.1:8000/sendMessage', data  , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      //console.log(response)
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      //that.prestataires = response.data;
      this.getAllPrestataires()
      this.getAllPatients()
      this.getPrestataireMessages()
   
    }).catch(function(error){
      
    })
  }

}
