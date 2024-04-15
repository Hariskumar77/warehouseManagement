import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from 'src/app/login/login.service'
import { Users } from '../login/login.model';
import { ViewFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  user : Users;

  constructor(private router : Router, private loginService: LoginService) { 
    this.user = new Users();
  }

 
   ngOnInit(): void {
    this.user = this.loginService.getCookie();
   }


  // onLogoutClick(){
  //   this.router.navigate(['/login']);
  // }
}