import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-details-prestataire',
  templateUrl: './details-prestataire.component.html',
  styleUrls: ['./details-prestataire.component.css']
})
export class DetailsPrestataireComponent implements OnInit {

  header = false;
  prestataire;
  
  constructor(private route: ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    //console.log(this.header)
    this.isLoggedIn()
    this.getPrestataireById()
  }
  getPrestataireById(){
    const that = this
    let id = this.route.snapshot.params.id;
     
    axios.get('http://127.0.0.1:8000/getPrestataireById/'+id).then( function(response){
      console.log(response.data)
    that.prestataire = response.data;

    }).catch(function(error){
      console.log(error)
    })

  }
  isLoggedIn(){
    const that = this 
    if (localStorage.getItem('token')){
      that.header = true;
      //that.link = "/patHome/patMessage";
    }
    
  }
  getAppointment(id){
    const that = this
    if (that.header){
      axios.get('http://127.0.0.1:8000/getAppointment/'+id , { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then( function(response){
        console.log(response.data)
     // that.prestataire = response.data;
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
  
      }).catch(function(error){
        console.log(error)
      })

    }else{
      that.router.navigate(['/login']);
    }


  }

}
