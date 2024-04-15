import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../login/login.model';
import { UserService } from './edit.service';
import {LoginService} from 'src/app/login/login.service'
import { SharedService } from '../dashboard/shared.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: Users;
  editedName: string;
  editedMobileNumber: string;

  isEditingName : boolean = false;
  isEditingMobile : boolean = false;

  constructor(private router: Router, private userService: UserService,private loginService: LoginService, private sharedService : SharedService) {
    this.user = new Users();
  }

  ngOnInit() {
    this.user = this.loginService.getCookie();
  }

  enableEditing() {
    this.isEditingName = true;
    this.isEditingMobile = true;
  }

  saveChanges() {
    if (this.isEditingName) {
      this.user.name = this.editedName;
      this.isEditingName = false;
    }
    if (this.isEditingMobile) {
      this.user.mobileNumber = this.editedMobileNumber; // Convert back to number if needed
      this.isEditingMobile = false;
    }
    this.updateUser();
  }

  updateUser(): void {
    this.userService.updateUser(this.user)
      .subscribe((response) => {
        if (response) {
          this.loginService.setCookie(this.user)
          this.router.navigate(['/dashboard']);
        }
      });
  }
}
