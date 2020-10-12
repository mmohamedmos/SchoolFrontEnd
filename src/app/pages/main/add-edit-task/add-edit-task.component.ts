import { AnimateTimings } from '@angular/animations';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StudentRequstModel } from 'src/app/models/tasks-request-model';
import { TasksService } from 'src/app/Services/tasks.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
//for make as a model in enetry component at app.models
export class AddEditTaskComponent implements OnInit {
  student:StudentRequstModel={
id:0,   
name:'',
class:'',
  };
  onclose:any;

  constructor(public Bsmodel:BsModalRef,
   private taskservice:TasksService) { }

  ngOnInit() {
  }
onAddTask(){
  let confirmAdd=confirm('Add Task?')
  if(confirmAdd){
    this.taskservice.addstudent(this.student).subscribe(studentAdd=>{
      console.log(studentAdd);
    this.onclose(studentAdd);
    this.Bsmodel.hide();},
    err=>{console.log(err);})
  }

}
onEditTask(){
  let confirmAdd=confirm('Edit Task?')
  if(confirmAdd){
    this.taskservice.editstuden00t(this.student).subscribe(studentEdit=>{
    console.log(studentEdit);
    this.onclose(studentEdit);
    this.Bsmodel.hide();},
    err=>{console.log(err);})

    }
}

}
