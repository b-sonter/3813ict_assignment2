/////////////////////////////////////////////////////////////////////////////
//
// This service is responsible for CRUD actions
// to the group APIs
//
//////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

class Group {
  constructor(){
    this.name = '';
    this.admins = [];
    this.members = [];
  }
  public name;
  public admins;
  public members;
}

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) {}

  createGroup(){
  //create new group
  }

  deleteGroup(){
    //delete specified group
  }


  getGroups(Group){
  //get all groups for specified user
  return this.http.post('http://localhost:3000/api/groups');
}

}
