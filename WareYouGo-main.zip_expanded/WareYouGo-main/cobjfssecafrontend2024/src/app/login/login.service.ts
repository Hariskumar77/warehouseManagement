import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Users} from "./login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private loginUrl = 'http://localhost:5050/users/authenticate'; // Replace with your backend URL
    private fetchUserUrl="http://localhost:5050/users/fetchuser";
    user : Users;
    constructor(private http: HttpClient) {
     this.user = new Users();
     }
  
    login(user: Users): Observable<any> {
      return this.http.post<any>(this.loginUrl, user);
    }
  
    getUserDetails(user : Users): Observable<any> {
      return this.http.post<any>(this.fetchUserUrl, user);
      
    }

    setCookie(userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    }

    getCookie() {
      var cookie = localStorage.getItem('user')
      return JSON.parse(cookie)
    }

    removeCookie() {
      localStorage.removeItem('user')
    }

    reload() {
      window.location.reload();
    }
  }