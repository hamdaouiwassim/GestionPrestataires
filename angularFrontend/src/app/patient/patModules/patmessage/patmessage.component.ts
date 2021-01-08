import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-patmessage',
  templateUrl: './patmessage.component.html',
  styleUrls: ['./patmessage.component.css']
})
export class PatmessageComponent implements OnInit {
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
  constructor(private modalService: NgbModal,private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.SendMessageForm = this.fb.group({
      name : '',
      file : '',
      receiver : '',
      content : ''
      
    })
    this.getAllPrestataires()
    this.getPatientMessages()
  }

  getPatientMessages(){
    const that = this
    axios.get('http://127.0.0.1:8000/getPatientMessages'  , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      console.log(response)
   
      that.messages = response.data;
       
   
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
  getAllPrestataires(){
    const that = this
    axios.get('http://127.0.0.1:8000/prestataireGetAll'  , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      console.log(response)
   
      that.prestataires = response.data;
       
   
    }).catch(function(error){
      
    })

  }
  SendMessage(){
    const that = this 
    const formData = this.SendMessageForm.getRawValue()
    const data = {

      name : formData.name ,
      file : formData.file ,
      receiver : formData.receiver ,
      content : formData.content ,
      type : 'pat-pres'
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
       
   
    }).catch(function(error){
      
    })
  }

}
