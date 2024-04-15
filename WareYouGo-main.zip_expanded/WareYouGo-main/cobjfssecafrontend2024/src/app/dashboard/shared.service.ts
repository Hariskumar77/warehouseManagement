import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userSource = new BehaviorSubject<Users>(new Users());
  currentUser = this.userSource.asObservable();

  constructor() { }

  changeUser(user: Users) {
    this.userSource.next(user);
  }
}
