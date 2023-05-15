import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http:HttpClient) {}
  fetchloggeddetails=(email :any)=>
  {
    return this.http.get("http://localhost:8080/viewPatient/" + email);
  }

  fetchtasksetdetails=()=>
  {
    return this.http.get("http://localhost:8080/viewTaskSet");
  }
  
}
