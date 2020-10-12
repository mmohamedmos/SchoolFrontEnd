import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AddEditTaskComponent } from './pages/main/add-edit-task/add-edit-task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{HttpClientModule} from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { RegisterHRComponent } from './pages/main/register-hr/register-hr.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddEditTaskComponent,
    NavComponent,
    RegisterHRComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  entryComponents:[AddEditTaskComponent,RegisterHRComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
