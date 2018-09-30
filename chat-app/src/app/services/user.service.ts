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

  getUsers(user: Username){
    return this.http.post('http://localhost:3000/api/newuser',{
      username : user.username,
      password : user.password,
      permissions: user.permissions
      });

  }

  addNewUser(newuser){
    let body = JSON.stringify(newuser);
    console.log(body);
    return this.http.post('http://localhost:3000/api/newuserwrite', body)
  }



}
