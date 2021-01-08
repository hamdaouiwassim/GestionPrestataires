import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {  NgbModal , ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-prestataire-rdv',
  templateUrl: './prestataire-rdv.component.html',
  styleUrls: ['./prestataire-rdv.component.css']
})
export class PrestataireRdvComponent implements OnInit {
  valideForm : FormGroup;
  consultForm : FormGroup;
  idConsultRdv;
  rdvsD;
  rdvsV;
  rdvsT;
  idConfirmRdv;
  constructor(private modalService: NgbModal,private fb: FormBuilder  ) { }

  ngOnInit(): void {
        
        this.valideForm = this.fb.group({
          debut : '',
          fin : '',
          date : ''
        })
        this.consultForm = this.fb.group({
          remarque : ''
          
        })
        this.getAllrdvs();
      

  }
  getAllrdvs(){
    const that = this
    axios.get('http://127.0.0.1:8000/rdvsPrestataire' , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      //console.log(response)
      that.rdvsD = response.data[0];
      that.rdvsV = response.data[1];
      that.rdvsT = response.data[2];
    }).catch(function(error){
      
    })
  }
  open(content,id) {
    //alert(id)
    const that = this
    that.idConfirmRdv = id;
    //this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  openC(consult,id) {
    //alert(id)
    const that = this
    that.idConsultRdv = id;
    //this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.modalService.open(consult, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
     // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  ValiderRDV(){
    const that = this
    const formData = that.valideForm.getRawValue()
    const data = {
      debut : formData.debut,
      fin : formData.fin,
      date : formData.date
    }
    axios.post('http://127.0.0.1:8000/ValiderRDV/'+that.idConfirmRdv , data , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      //console.log(response)
      if ( response.status == 201 ){
        if ( response.data.debut  ){
          Swal.fire({
            title: 'Error',
            text: response.data.debut[0],
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }else if (response.data.fin) {
          Swal.fire({
            title: 'Error',
            text: response.data.fin[0],
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }else{
          Swal.fire({
            title: 'Error',
            text: response.data.date[0],
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
        

      }else{
        Swal.fire({
          title: 'Success',
          text: "Appointment Confirmed",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        that.getAllrdvs();
      }
      
      
      
   
    }).catch(function(error){
      
    })

  }
  DeleteRDV(id){
    const that =this
    if ( confirm('Voulz-vous vraiment supprimer cette RDV')){
    axios.get('http://127.0.0.1:8000/DeleteRDV/'+id  , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      //console.log(response)
   
      
        Swal.fire({
          title: 'Success',
          text: "Appointment Deleted",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        that.getAllrdvs();
   
    }).catch(function(error){
      
    })
  }
  }

  makeConsultation(){
    const that = this
    const formData = that.consultForm.getRawValue()
    const data = {
      remarque : formData.remarque,
      rdv : that.idConsultRdv
    }
    axios.post('http://127.0.0.1:8000/consultation/add' , data , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      //that.prestataires = response.data;
      //console.log(response)
      if ( response.status == 201 ){
        if ( response.data.debut  ){
          Swal.fire({
            title: 'Error',
            text: response.data.debut[0],
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }else if (response.data.fin) {
          Swal.fire({
            title: 'Error',
            text: response.data.fin[0],
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }else{
          Swal.fire({
            title: 'Error',
            text: response.data.date[0],
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
        

      }else{
        Swal.fire({
          title: 'Success',
          text: "Appointment Confirmed",
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        that.getAllrdvs();
      }
      
      
      
   
    }).catch(function(error){
      
    })


  }
}
