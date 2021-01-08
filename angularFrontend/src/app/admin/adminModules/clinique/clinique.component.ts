import { Component, OnInit, TemplateRef } from '@angular/core';
import axios from 'axios';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-clinique',
  templateUrl: './clinique.component.html',
  styleUrls: ['./clinique.component.css']
})
export class CliniqueComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService:BsModalService ) { }
  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  cliniques;


  ngOnInit(): void {
    const that = this 
    axios.get('http://127.0.0.1:8000/getCliniques', { headers : { Authorization : 'Bearer '+localStorage.getItem('token') } }).then(function(response){
          that.cliniques = response.data;
         
    }).catch(function(){

    })
  }

}
