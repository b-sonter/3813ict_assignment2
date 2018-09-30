import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../services/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(){
  }

  addNewUser(){

  }



}
