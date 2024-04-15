import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../login/login.model';
import { ChangePasswordService } from './change-password.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  formData = {
    email: '', 
    newpassword: '',
    confirmpassword: ''
  };
  constructor(private router : Router, private changePasswordService: ChangePasswordService) { }
  errormessage: string = '';
  successmessage: string = '';
  newPasswordFieldType: string = 'password';
  confirmPasswordFieldType: string = 'password';

  newPasswordIconClass: string = 'fa fa-eye-slash'; // Initial icon class for New Password
  confirmPasswordIconClass: string = 'fa fa-eye-slash'; // Initial icon class for Confirm Password

  toggleNewPasswordVisibility() {
    this.newPasswordFieldType = this.newPasswordFieldType === 'password' ? 'text' : 'password';
    this.newPasswordIconClass = this.newPasswordFieldType === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye';
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
    this.confirmPasswordIconClass = this.confirmPasswordFieldType === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye';
  }
  
 updatePassword() {
    if (this.formData.newpassword !== this.formData.confirmpassword) {
      this.errormessage = 'New password and confirm password do not match';
      this.successmessage = '';
    } else {
      this.user.password = this.formData.confirmpassword;
      this.user.email = this.formData.email;
      this.onChangePasswordClick();
    }
    
  }

  onChangePasswordClick()
  {
    this.changePasswordService.changePassword(this.user).subscribe(
      (response) => {
        if(response) {
          alert("Password Changed Successfully!");
          this.router.navigate(['/dashboard']);
        }
        else{
          alert("Requested user does not exist!");
          this.router.navigate(['/dashboard']);
        }
      });
  }

  user: Users = new Users(); // Create an instance of Users
}