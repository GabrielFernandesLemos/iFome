import { User } from './user-model';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  private user : User = new User();

  ngOnInit() {
  }

  makeLogin(){
    this.authService.makeLogin(this.user)
    console.log("have: " + this.user)
  }

}
