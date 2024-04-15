import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../login/login.model';
import { SharedService } from '../dashboard/shared.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Users = new Users();

constructor(private sharedService: SharedService, private router : Router, private loginService: LoginService) { }

ngOnInit() {
  this.user = this.loginService.getCookie();
}

  userEdit() {
      this.router.navigate(['/edituser']);
    }
  userLogout()
  {
    this.loginService.removeCookie()
    this.router.navigate(['']);
  }
}
