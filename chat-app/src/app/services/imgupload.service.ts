/////////////////////////////////////////////////////////////////////////////
//
// This service is responsible for CRUD actions
// to the image upload APIs
//
//////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImguploadService {

  constructor(private http: HttpClient) { }

  imgupload(fd){
    return this.http.post<any>("http://localhost:3000/api/upload", fd)
  }
}
