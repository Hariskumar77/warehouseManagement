import { Component, DoCheck, OnInit } from '@angular/core';
import { Users } from '../login/login.model';
import { RequestaccessServiceService } from './requestaccess-service.service';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.css']
})
export class RequestAccessComponent implements OnInit {
  pendingUsers: Users[] = []; // Initialize as an empty array

  constructor(private requestAccessService: RequestaccessServiceService) {}

  ngOnInit() {
    // Fetch users and initialize the array
    this.requestAccessService.getPendingRequests().subscribe(users => {
      this.pendingUsers = users;
    });
  }

  acceptUser(user:Users){
    this.requestAccessService.acceptUser(user).subscribe(
      (response) => {
        if(response) {
          console.log('User accepted');
          this.pendingUsers = this.pendingUsers.filter(u => u !== user);
        }
       
      });
  }

  rejectUser(user:Users){
    this.requestAccessService.rejectUser(user).subscribe(
      (response) => {
        if(response) {
          console.log('User rejected');
          this.pendingUsers = this.pendingUsers.filter(u => u !== user);
        }
       
      });
  }
}
