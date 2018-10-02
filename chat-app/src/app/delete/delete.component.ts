import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../services/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

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

      this.getUsers();
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  goCreate(){
    this.router.navigate(['/create']);
  }

  getUsers(){
    this._userService.checkToDelete().subscribe(
      data => {this.user = data},
      err => console.error(err),
      () => console.log('done loading students')
    );
  }

  deleteUser(username){
    //delete user from database
    console.log(username);
    this._userService.userDelete(username).subscribe(
    data => {
      return true;
    },
    error => {
      console.log('error deleting user');
    }
  )
    }

});
  }

}
