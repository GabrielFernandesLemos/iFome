import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './user-model';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) { }

  form: FormGroup

  private user: User = new User();

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null],
      password: [null]
    })
  }

  onSubmit() {

    let obj = {
      email: this.form.value.username,
      password: this.form.value.password,
    }

    this.loginService.verifyAccount(obj).subscribe(
      (success: any) => {
        this.resetForm();
        // if (success == true) {
        //   this.login();
        // } else {
        //   //console.log("Erro ao entrar")
        // }
      }
    )
  }

  login() {
    this.router.navigate(['/home'])
  }

  resetForm(){
    this.form.reset();
  }


}
