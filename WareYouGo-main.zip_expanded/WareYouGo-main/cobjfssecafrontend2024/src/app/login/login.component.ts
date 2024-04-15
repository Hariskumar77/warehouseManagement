import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoginService } from './login.service';
import { Users } from './login.model';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user: Users = new Users(); // Create an instance of Users

  constructor(private router : Router, private loginService: LoginService) { } // Inject the AuthService

  ngOnInit() {

  }

  
  onLoginClick(){
    this.loginService.login(this.user).subscribe(
      (response) => {
        if(response) {
          this.loginService.getUserDetails(this.user).subscribe (
            (userdata) => {
              this.loginService.setCookie(userdata)
              this.router.navigate(['/dashboard']);
            }
          )
          }
        else {
          alert("Invalid password");
        }
      });
  }

}