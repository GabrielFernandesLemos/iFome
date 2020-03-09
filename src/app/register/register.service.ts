import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Injectable, Pipe } from '@angular/core';

@Injectable()
export class RegisterService {

  url = environment.api + "user"

  constructor(private http : Http) { }

  
  postRegister(obj){
    return this.http.post(this.url, obj)
  }

}