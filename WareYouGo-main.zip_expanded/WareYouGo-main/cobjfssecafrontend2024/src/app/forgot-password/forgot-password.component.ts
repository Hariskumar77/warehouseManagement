import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../login/login.model';
import { ForgotPasswordService } from './forgot-password.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router : Router,private forgotpasswordService:ForgotPasswordService) { }

  ngOnInit() {
  }
  formData = {
    email: '', 
    mobile: '', 
    newpassword: '',
    confirmpassword: ''
  };
  errormessage: string = '';
  successmessage: string = '';
  
  // updatePassword() {
  //   if (this.formData.newpassword === '' || this.formData.confirmpassword === '') {
  //     this.errormessage = 'Password fields cannot be empty';
  //     this.successmessage = '';
  //   } else if (this.formData.newpassword !== this.formData.confirmpassword) {
  //     this.errormessage = 'Passwords do not match';
  //     this.successmessage = '';
  //   } else {
  //     this.successmessage = 'Password updated successfully';
  //     this.errormessage = '';
  //   }
  // }
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
  forgotPassword()
  {
    this.user.password = this.formData.newpassword;
    this.forgotpasswordService.forgotPassword(this.user).subscribe(
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
  user: Users = new Users();
}
