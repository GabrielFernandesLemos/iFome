import { User } from './user-model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private authUser: boolean = false;

  constructor(private router: Router) { }

  makeLogin(user : User) {
    if (user.name === " " && user.password === " ") {
      this.authUser = true;

      this.router.navigate(['/'])
    }

  }

}
