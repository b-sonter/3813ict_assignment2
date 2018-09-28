import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user;

  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('user') === null){
      // User has not logged in, reroute to login
      this.router.navigate(['/login']);
    } else {
      let user = sessionStorage.getItem('user');
      this.user = user;
    }
  }



}
