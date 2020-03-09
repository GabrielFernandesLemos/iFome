import { User } from './user-model';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Register } from 'app/register/register-model';


@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  userModel = new User();

  constructor(private authService: AuthService) {}

  register: Register[]

  ngOnInit() {
    
  }

  onSubmit(){
    this.authService.verifyAuthUser(this.userModel.name,this.userModel.password)
    
  }

}
