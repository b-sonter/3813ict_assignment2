// ============================================
// This service is responsible for CRUD actions
// to the group APIs
// ============================================

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private api:string = 'http://localhost:3000/api/';

  constructor(private http:HttpClient) {}

  createGroup(){
  //create new group
  }

  deleteGroup(){
    //delete specified group
  }

  
  getGroups(data){
  //get all groups for specified user
  }

}
