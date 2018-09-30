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
    if(sessionStorage.getItem('userlog') !== null){
      this.router.navigate(['/home']);
    }
  }

  validateLogin() {
  	if(this.user.username && this.user.password) {
  		this.Auth.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['success']) {
          sessionStorage.setItem('userlog',this.user.username);
          sessionStorage.setItem('permslog', result.user.permissions);
          this.router.navigate(['/home']);
        } else {
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
