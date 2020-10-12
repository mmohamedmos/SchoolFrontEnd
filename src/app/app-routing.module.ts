import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './pages/main/main.component';
import{AuthGuardServiceService}from'src/app/Services/auth-guard-service.service';



const routes: Routes = [
  
   { path:'',component:MainComponent,canActivate:[AuthGuardServiceService]},
   {path:'login',component:NavComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
