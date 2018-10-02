//////////////////////////////////////////////////////////////////////////////
//
// functions to delete a user from the database
//
/////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public userlog;
  public permslog;
  public user : User;

  constructor(private router: Router, private _userService: UserService) {
    this.user = new User();
   }

  ngOnInit() {
    if(sessionStorage.getItem('userlog') === null){
      // User has not logged in, reroute to login
      this.router.navigate(['/login']);
    } else {
      let userlog = sessionStorage.getItem('userlog');
      this.userlog = userlog;
      let permslog = sessionStorage.getItem('permslog');
      this.permslog = permslog;
    }
  }

  //logout of session - go back to login page
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  //go to delete a user - route to component
  goDelete(){
    this.router.navigate(['/delete']);
  }

  //go to home page - route to dashboard
  goHome(){
    this.router.navigate(['/home']);
  }

  //adds a new user
  addNewUser(new_username, new_password, new_permissions){
    //add new user to database
    let newuser = {
    username: new_username,
    password: new_password,
    permissions: new_permissions
  }
  //log new user info
  console.log(newuser)

  //send new user data to database
  this._userService.getUsers(this.user).subscribe(result => {
    console.log('result is ', result);
    if(result['success']){
      this._userService.addNewUser(newuser).subscribe(
        data => {
          return true;
        },
        error => {
          console.log(error);
        }
      )
    } else {
      alert('User already exists');
    }

});
}


}
