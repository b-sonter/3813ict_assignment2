/////////////////////////////////////////////////////////////////////////////
//
// This service is responsible for CRUD actions
// to the user APIs
//
//////////////////////////////////////////////////////////////////////////////

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

  //gets all users in the database
  getUsers(user: User){
    return this.http.post('http://localhost:3000/api/newuser')
  }

  //sends nre user to be added to database
  addNewUser(newuser){
    let body = JSON.stringify(newuser);
    return this.http.post('http://localhost:3000/api/newuserwrite', body)
  }

  //gets users to delete from database
  checkToDelete(user: User){
    return this.http.post('http://localhost:3000/api/checkfordelete')
  }

  //sends which user to be deleted
  userDelete(username){
    return this.http.delete('http://localhost:3000/api/deleteuser'),{
			username : user.username
  }
}
}
