import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _loginUrl = "http://localhost:8080/api/login/";

  constructor(private http: HttpClient,
              private _router: Router) { }

  loginUser(user) {
  	console.log("login User");
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    //this._router.navigate(['/home'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}