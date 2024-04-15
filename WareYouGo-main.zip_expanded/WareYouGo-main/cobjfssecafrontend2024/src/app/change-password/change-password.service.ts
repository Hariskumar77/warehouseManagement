import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  private changePasswordUrl = 'http://localhost:5050/users/changepassword'; // Replace with your backend URL

    constructor(private http: HttpClient) { }
  
    changePassword(user: Users): Observable<any> {
      return this.http.put<any>(this.changePasswordUrl, user);
    }
  }

