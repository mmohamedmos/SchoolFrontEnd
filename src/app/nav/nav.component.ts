import { Component, OnInit } from '@angular/core';
import { HRRequstModel } from 'src/app/models/tasks-request-model';
import { TasksService } from 'src/app/Services/tasks.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  hr:HRRequstModel={
name:""
  };
  HrShow:HRRequstModel  
  onclose:any
  message = "username&password invalid";

  constructor(private taskservice:TasksService ,private bsmodel:BsModalService,private router:Router) { }
     
  ngOnInit() {
  }

  login(){
  this.taskservice.LoginHR(this.hr).subscribe(HRLogin=>{
  this.HrShow=HRLogin;
  // observable====> subscribe(n=>{next},e=>{error},c=>{complete};)
    
    if(this.HrShow!=null){
      localStorage.setItem('loggedIn','true');
      console.log( this.HrShow);
      this.router.navigate(['/'])
    }
    else{
      localStorage.setItem('loggedIn','false');
      alert(this.message);
    
      console.log(this.HrShow);
      
    }
  this.bsmodel.hide();},
  err=>{console.log(err);})
  }



}
