import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerUrl = 'http://localhost:5050/users/register'; // Replace with your backend URL
    
    constructor(private http: HttpClient) { }
  
    register(user: Users): Observable<any> {
      return this.http.post<any>(this.registerUrl, user);
    }
  
    

  


}
