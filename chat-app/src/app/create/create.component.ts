import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../services/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public userlog;
  public permslog;
  public user : User;

  constructor(private router: Router) { }

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

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  addNewUser(new_username, new_password, new_permissions){
    //add new user to database
    let newuser = {
    username: new_username,
    password: new_password,
    permissions: new_permissions
  }
  console.log(newuser)
  
  }

  deleteUser(){
    //delete user from database
  }
}
