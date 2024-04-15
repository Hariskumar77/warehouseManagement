import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private forgotPasswordUrl = 'http://localhost:5050/users/resetpassword'; // Replace with your backend URL

    constructor(private http: HttpClient) { }
  
    forgotPassword(user: Users): Observable<any> {
      return this.http.put<any>(this.forgotPasswordUrl, user);
    }
}
