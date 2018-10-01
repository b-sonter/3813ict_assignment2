import { Injectable } from '@angular/core';
import { User } from '../services/user.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(user: User){
    return this.http.post('http://localhost:3000/api/newuser',{
      username : user.username,
      password : user.password,
      permissions: user.permissions
      });
  }

  addNewUser(newuser){
    let body = JSON.stringify(newuser);
    return this.http.post('http://localhost:3000/api/newuserwrite', body)
  }

  checkToDelete(user: User){
    return this.http.post('http://localhost:3000/api/checkfordelete',{
      username : user.username
      });
  }

  userDelete(goodbye){
    return this.http.delete('http://localhost:3000/api/deleteuser', + user._id)
  }

}
