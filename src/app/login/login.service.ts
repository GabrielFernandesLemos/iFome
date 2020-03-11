import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  url = environment.api + "user"
  isAutenticated = false;

  constructor(private http : Http) { }

  verifyAccount(obj){
    //return this.http.post(this.url + "?email=" + obj.email + "&password=" + obj.password, obj);
    return this.http.get(this.url + "?email=" + obj.email + "&password=" + obj.password)
    .map(res => this.compareObjects(JSON.stringify(res.json()), obj))
  }

  compareObjects(res, obj){
    console.log("Dados pegos no get: " + res)
    console.log("Dados digitados: " + JSON.stringify(obj))

    if((res.email == obj.email) && (res.password == obj.password)){
      console.log("Logado com sucesso");
      this.isAutenticated = true;
    }else{
      console.log("Login ou senha inválidos");
    }

  }
  
}
