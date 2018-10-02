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
      //log the user in sessionStorage
      let userlog = sessionStorage.getItem('userlog');
      this.userlog = userlog;
      //log the user permissions in sessionStorage
      let permslog = sessionStorage.getItem('permslog');
      this.permslog = permslog;
    }
  }


  //log out of the chat-app
  logout(){
    sessionStorage.clear();
    //redirect to login page
    this.router.navigate(['/login']);
  }

  //go to the section to create a new user
  goCreate(){
  //redirect to create page
    this.router.navigate(['/create']);
  }

  //go to the delete user section
  goDelete(){
    //redirect to delete page
    this.router.navigate(['/delete']);
  }

  //create a new groups
  createGroup(event){

  }

  //get list of groups from database
  getGroups(){
    
  }

  //determine which group is currently open
  openGroup(name){

  }

  //get channels for the groups
  getChannels(){

}


}
