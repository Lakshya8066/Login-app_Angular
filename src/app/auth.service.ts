import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  getUserDetails(username,password){
    //post these details to api server 
    return this.http.post('/api/auth', {
      username,
      password
    }).subscribe(data => {
      console.log(data, " is what the server sent");
    });
  }
}
