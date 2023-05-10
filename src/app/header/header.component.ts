import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  data : any = [];

  emailData : String = "vanderhoote@gmail.com";
 
  constructor(private api:ApiService){

    this.api.fetchloggeddetails(this.emailData).subscribe(
      (response)=>
      {
       
        
        this.data=response;
      
        return this.data;
        
        }
    )
}

}
