//////////////////////////////////////////////////////////////////////////////
//
// Handles the authentication of user logging in by taking the input
// data and comparing it to the database data
//
///////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../services/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {

  public user : User;

  constructor(private Auth: AuthService, private router: Router, private form:FormsModule) {
    this.user = new User();
   }

  ngOnInit() {
    //if user is logged in just take them to the dash
    if(sessionStorage.getItem('userlog') !== null){
      this.router.navigate(['/home']);
    }
  }

  //validate that the user can log in
  validateLogin() {
  //take username and password input
  	if(this.user.username && this.user.password) {
    //check that username is in database
  		this.Auth.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        //if username is in database
        if(result['success']) {
        //if passwords also match set user data in sessionStorage
          sessionStorage.setItem('userlog',this.user.username);
          sessionStorage.setItem('permslog', result.user.permissions);
          this.router.navigate(['/home']);
        } else {
          //password did not match
          alert('Wrong username password');
        }

      }, error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }


}
