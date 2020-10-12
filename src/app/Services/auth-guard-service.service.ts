import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import{Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot}from'@angular/router';
import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(private task:TasksService,private router:Router) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

  if(this.task.IsLogged()==='false'){
    this.router.navigate(['/login'])
 
   
  }
  else{
    return true;
  }
  }
}
