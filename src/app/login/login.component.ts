import { User } from './user-model';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  private user : User = new User();

  ngOnInit() {
  }


}
