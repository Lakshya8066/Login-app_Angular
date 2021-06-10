import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;
  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus=value;
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  getUserDetails(username,password){
    //find these details on api server 
    return this.http.post('/api/auth', {
      username,
      password
    });
  }
  postUserDetails(name,phoneNumber,emailId,organizationName,username,password){
    //register the user to the server
    return this.http.post('/api/register',{
      name,
      phoneNumber,
      emailId,
      organizationName,
      username,
      password
    })
  }
}
