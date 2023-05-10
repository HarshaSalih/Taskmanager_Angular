import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import{MatButtonModule} from '@angular/material/button';
// import { DatePipe } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule } from '@angular/common/http';
import { PatientTasksComponent } from './patient-tasks/patient-tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const myRoute:Routes=[

  {
    path:"",
    component:SideNavComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"mytasks",
    component:MyTasksComponent
  },
  {
    path:"patienttasks",
    component:PatientTasksComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"header",
    component:HeaderComponent
  },

  {
    path:"navbar",
    component:NavbarComponent
  }
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SideNavComponent,
    MyTasksComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    PatientTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    // DatePipe
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
