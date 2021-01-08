import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-patrdv',
  templateUrl: './patrdv.component.html',
  styleUrls: ['./patrdv.component.css']
})
export class PatrdvComponent implements OnInit {
  id;
  rdvs : any;
  prestataires : any;
  constructor() { }

  ngOnInit(): void {
  this.getAllRDVS()
 
    
  }
  getAllRDVS(){
    const that = this;
    axios.get('http://127.0.0.1:8000/getRdvsByUser', { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
      that.rdvs = response.data;
    
    }).catch(function(error){
      
    })
  }

  deleteRDV(id){
    const that = this
    if (confirm("Voulez-vous vraiment supprimer cette RDV")){
          axios.get('http://127.0.0.1:8000/deleteRDV/'+id, { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
          // that.rdvs = response.data;
          that.getAllRDVS()
          Swal.fire({
            title: 'Success',
            text: response.data.message,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          }).catch(function(error){
            
          })
  }
  }


}
