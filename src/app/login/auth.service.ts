import { ErrorHandler } from './../app.error-handler';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { User } from './user-model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'app/register/register-model';

@Injectable()
export class AuthService {

  constructor(private http : Http) { }

  verifyAuthUser(email, senha): Observable<Register[]>{
    
    return this.http.get(environment.api + "user?password="+senha+"&email="+email)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)

  }
}
