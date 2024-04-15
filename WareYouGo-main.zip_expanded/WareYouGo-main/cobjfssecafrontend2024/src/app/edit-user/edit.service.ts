import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5050/users/modifyprofile';

  constructor(private http: HttpClient) { }

  updateUser(users: Users): Observable<Users> {
    
    return this.http.put<Users>(this.apiUrl, users);
  }
}
