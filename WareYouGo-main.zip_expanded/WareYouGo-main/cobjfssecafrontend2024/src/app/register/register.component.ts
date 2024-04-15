import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../login/login.model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Users = new Users(); // Create an instance of Users

  constructor(private router : Router, private registerService: RegisterService) { } // Inject the AuthService

  ngOnInit() {

  }

  register(){
    this.registerService.register(this.user).subscribe(
      (response) => {
        if(response) {
          alert("Request sent!")
        }
        
      });
  }
}