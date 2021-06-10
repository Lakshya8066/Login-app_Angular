import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(event: any){
    event.preventDefault();
    const target=event.target;
    const name = target.querySelector('#name').value;
    const phoneNumber = target.querySelector('#phoneNumber').value;
    const emailId = target.querySelector('#emailId').value;
    const orgName = target.querySelector('#orgName').value;
    const username = emailId;
    const password = name.slice(0,4)+phoneNumber.slice(-4);
    //console.log(name,phoneNumber,emailId,orgName,username,password);
    this.Auth.postUserDetails(name,phoneNumber,emailId,orgName,username,password).subscribe(data => {
      console.log(data);
    })
  }
}
