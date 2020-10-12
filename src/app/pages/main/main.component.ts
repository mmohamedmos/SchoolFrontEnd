import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/Services/tasks.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { RegisterHRComponent } from './register-hr/register-hr.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bsModalRef: BsModalRef;

task:any=[];
  constructor(private tasks:TasksService,
  private modelservice:BsModalService
    ){ }

  ngOnInit() {
this.getallstudent();

  }
getallstudent(){
  this.tasks.getstudents().subscribe(alltasks =>{
    this.task=alltasks
    console.log(this.task);
  })
}




  OnAddNewTask(){
    this.bsModalRef = this.modelservice.show(AddEditTaskComponent);
    this.bsModalRef.content.onclose=()=>{
       this.getallstudent();
    
  }
}

OnRegisterTask(){
  this.bsModalRef = this.modelservice.show(RegisterHRComponent);
  this.bsModalRef.content.onclose=()=>{
    this.getallstudent(); 
}
}

  onEditTask(student){console.log('task')
this.bsModalRef=this.modelservice.show(AddEditTaskComponent,{initialState:{student}});
this.bsModalRef.content.onclose=(update)=>{
  if(update) this.getallstudent(); 
}

}

  onDeleteTask(stId){
    let confirmDelete=confirm('are you sure ?')
  if(confirmDelete){
    this.tasks.deletestudent(stId).subscribe(d=>{
this.getallstudent();
    },
    err=>console.log(err)  
    )
console.log(confirmDelete);
  }
  else {
    console.log(confirmDelete);
  }
  
}
logout(){
  this.tasks.Islogout();
}

}

