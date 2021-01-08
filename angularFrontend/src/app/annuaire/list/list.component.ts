import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  type;
  gouvernourat;
  message;
  prestataires : any;
  constructor(private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.gouvernourat = this.route.snapshot.paramMap.get('gouvernourat');
    this.getData()
  }
  getData(){
    const that = this
    const data = {
      type :that.type,
      gouvernourat : that.gouvernourat
     
    }
    axios.post('http://localhost:8000/search',data).then(function (response) {
      // handle success
      console.log(response)
     
      if (response.status == 201 ){
       
      }else{
       that.prestataires = response.data;
      }
         

         
    })
    .catch(function (error) {
      // handle error
      console.log(error)
      that.message = "Something went wrong";
      Swal.fire({
        title: 'Error!',
        text: that.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
     

    })
  }

}
