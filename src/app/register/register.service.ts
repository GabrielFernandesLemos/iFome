import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {

  url = environment.api + "user"

  constructor(private http : Http) { }

  PostRegister(obj){
    this.http.post(this.url, obj.value)
    .map(res => res)
    .subscribe(dados => console.log("dados: " + dados))
  }

}
