import { Component, OnInit } from '@angular/core';
import { HRRequstModel } from 'src/app/models/tasks-request-model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TasksService } from 'src/app/Services/tasks.service';

@Component({
  selector: 'app-register-hr',
  templateUrl: './register-hr.component.html',
  styleUrls: ['./register-hr.component.css']
})
export class RegisterHRComponent implements OnInit {
  hr:HRRequstModel={
    id:0,   
    name:'',
      };
      onclose:any

  constructor(public Bsmodel:BsModalRef,
    private taskservice:TasksService) { }
    onAddHr(){
      let confirmAdd=confirm('Add HR ?')
      if(confirmAdd){
        this.taskservice.registerHR(this.hr).subscribe(HRAdd=>{
          console.log(HRAdd);
        this.onclose(HRAdd);
        this.Bsmodel.hide();},
        err=>{console.log(err);})
      }
    
    }

  ngOnInit() {
  }

}
