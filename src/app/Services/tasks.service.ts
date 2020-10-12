import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StudentRequstModel } from '../models/tasks-request-model';
import { HRRequstModel } from '../models/tasks-request-model';
import{Router}from'@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient,private router:Router) { }
  getstudents(){
    return this.http.get(environment.ApiUrl+'/GetAll');
  }
  addstudent(body:StudentRequstModel){
    return this.http.post(environment.ApiUrl,body);
  }
  editstuden00t(body:StudentRequstModel){
    return this.http.put(environment.ApiUrl+`/${body.id}`,body);
  }
  deletestudent(id){
    return this.http.delete(environment.ApiUrl+`/${id}`);
  }
registerHR(hr:HRRequstModel){
return this.http.post(environment.ApiHr,hr)
  }
LoginHR(hr:HRRequstModel){
    return this.http.post(environment.Api,hr)
      }
IsLogged(){
  return localStorage.getItem('loggedIn');
}
Islogout()
{
   localStorage.setItem('loggedIn','false');
   this.router.navigate(['/login'])
}

}
