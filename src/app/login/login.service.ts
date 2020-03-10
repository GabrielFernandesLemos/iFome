import { User } from './user-model';
import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  url = environment.api + "user"

  constructor(private http : Http) { }

  verifyAccount(obj){
    //return this.http.post(this.url + "?email=" + obj.email + "&password=" + obj.password, obj);
    return this.http.post(this.url, obj);
  }
  
}
