import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  emailData : String = "vanderhoote@gmail.com";
  data1:any=[]


  constructor(private api:ApiService){

  if(this.emailData=="vanderhoote@gmail.com"){
    this.api.fetchloggeddetails(this.emailData).subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  else{
    alert("invalid user");
  }

  this.api.fetchtasksetdetails().subscribe(
    (response:any)=>{
      this.data1=response.taskSetsList;
      // console.log(response);
    }
  )
  }
  data:any=[]

  

}
