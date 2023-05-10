import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  emailData : String = "vanderhoote@gmail.com";
 
  constructor(private api:ApiService){
    this.api.fetchloggeddetails(this.emailData).subscribe(
      (response)=>
      {
        
        
        this.data=response;
       
        
      }
    )
  }
  data:any=[]

}
