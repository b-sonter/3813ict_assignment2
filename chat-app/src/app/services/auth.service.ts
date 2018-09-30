import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../services/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  validateLogin(user: User){
		return this.http.post('http://localhost:3000/api/login',{
			username : user.username,
			password : user.password
		});
	}


}
