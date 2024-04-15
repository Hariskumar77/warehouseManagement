import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class RequestaccessServiceService {
  private pendingRequestsUrl="http://localhost:5050/users/getpendingrequests"
  private acceptUserUrl="http://localhost:5050/users/acceptuser"
  private rejectUserUrl="http://localhost:5050/users/rejectuser"
  constructor(private http: HttpClient) { }

  getPendingRequests(): Observable<Users[]> {
    return this.http.get<Users[]>(this.pendingRequestsUrl);
  }

  acceptUser(user:Users):Observable<any>{
    return this.http.put<Users>(this.acceptUserUrl,user)
  }
  rejectUser(user:Users):Observable<any>{
    return this.http.put<Users>(this.rejectUserUrl,user)

}
}