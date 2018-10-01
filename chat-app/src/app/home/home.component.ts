import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userlog;
  public permslog;
  public selectedGroup;
  public selectedChannel;
  public groups = [];
  public channels = [];
  public newGroupName:String

  constructor(private router: Router, private _groupService:GroupService) { }

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

  goCreate(){
    this.router.navigate(['/create']);
  }

  goDelete(){
    this.router.navigate(['/delete']);
  }


}
