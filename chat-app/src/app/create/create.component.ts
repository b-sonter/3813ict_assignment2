import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public user;
  public perms;

  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('user') === null){
      // User has not logged in, reroute to login
      this.router.navigate(['/login']);
    } else {
      let user = sessionStorage.getItem('user');
      this.user = user;
      let perms = sessionStorage.getItem('perms');
      this.perms = perms;
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  addNewUser(){
    //add new user to database
  }

  deleteUser(){
    //delete user from database
  }
}
